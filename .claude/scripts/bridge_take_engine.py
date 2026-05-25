"""One-shot bridge: take_engine DB articles → KB raw/articles/*.md files.

Pulls articles from the take_engine database (sibling repo) and emits them
as KB-formatted markdown files into raw/articles/. Same format as the
April 11 seeding pattern that originally bootstrapped the KB.

Usage:
  python .claude/scripts/bridge_take_engine.py [--since YYYY-MM-DD] [--limit N] [--scored-only]

Defaults:
  --since 2026-04-22 (last KB commit date, so we don't re-ingest)
  --limit unlimited
  --scored-only False (set True to only bridge articles that have take_engine takes)

After running:
  - Review raw/articles/ for new files (commit message-grouped, easy to spot)
  - Run /graphify ./raw --update in Claude Code
  - Commit + push

Important: this does NOT delete the article from take_engine. take_engine
remains the canonical scrape store; KB is the curated synthesis layer.
"""
import argparse
import asyncio
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

KB_ROOT = Path(__file__).resolve().parent.parent.parent
TAKE_ENGINE_ROOT = KB_ROOT.parent / "take_engine"
RAW_ARTICLES_DIR = KB_ROOT / "raw" / "articles"

# Import take_engine modules
sys.path.insert(0, str(TAKE_ENGINE_ROOT / "backend"))

# Need .env loaded for DATABASE_URL
from dotenv import load_dotenv
load_dotenv(TAKE_ENGINE_ROOT / ".env")

from sqlalchemy import select, func
from app.database import async_session, engine
from app.models import Source, Article, Take


def slugify(text: str, max_len: int = 80) -> str:
    s = re.sub(r"[^a-zA-Z0-9-]+", "-", (text or "untitled").lower()).strip("-")
    if len(s) > max_len:
        s = s[:max_len].rstrip("-")
    return s or "untitled"


def derive_source_slug(source_name: str) -> str:
    """Match the KB's existing naming convention: source-prefix-title-slug."""
    name_map = {
        "AI Daily Brief": "ai-daily-brief",
        "Clouded Judgement": "clouded-judgement",
        "Latent Space": "latentspace",
        "Stratechery": "stratechery",
        "The Pragmatic Engineer": "pragmatic-engineer",
        "Nate's Newsletter": "nates-newsletter",
        "Lenny's Newsletter": "lennys-newsletter",
        "Dwarkesh Patel": "dwarkesh",
        "SemiAnalysis": "semianalysis",
        "Benedict Evans": "ben-evans",
        "Manual / Inbox": "inbox",
    }
    return name_map.get(source_name, slugify(source_name))


async def main(since: str | None, limit: int | None, scored_only: bool, dry_run: bool):
    since_dt = datetime.fromisoformat(since).replace(tzinfo=timezone.utc) if since else None
    RAW_ARTICLES_DIR.mkdir(parents=True, exist_ok=True)

    try:
        async with async_session() as session:
            # Build query
            stmt = select(Article).order_by(Article.published_at.desc().nullslast())
            if since_dt:
                stmt = stmt.where(Article.created_at >= since_dt)
            if limit:
                stmt = stmt.limit(limit)

            result = await session.execute(stmt)
            articles = result.scalars().all()

            print(f"[bridge] candidate articles: {len(articles)}")

            # Eager-load source names + take counts in batches
            source_lookup = {}
            src_result = await session.execute(select(Source))
            for s in src_result.scalars().all():
                source_lookup[s.id] = s.name

            # Take counts per article (for scored-only filter)
            take_counts = {}
            if scored_only:
                tc_result = await session.execute(
                    select(Take.article_id, func.count(Take.id))
                    .where(Take.article_id.in_([a.id for a in articles]))
                    .group_by(Take.article_id)
                )
                for aid, cnt in tc_result.all():
                    take_counts[aid] = cnt

            created = 0
            skipped_existing = 0
            skipped_unscored = 0
            skipped_truncated = 0
            skipped_short = 0

            for article in articles:
                if scored_only and take_counts.get(article.id, 0) == 0:
                    skipped_unscored += 1
                    continue

                if article.truncated:
                    skipped_truncated += 1
                    continue

                if not article.raw_content or len(article.raw_content) < 500:
                    skipped_short += 1
                    continue

                src_name = source_lookup.get(article.source_id, "Unknown")
                src_slug = derive_source_slug(src_name)
                title_slug = slugify(article.title, max_len=80)
                fname = f"{src_slug}-{title_slug}.md"
                out_path = RAW_ARTICLES_DIR / fname

                if out_path.exists():
                    skipped_existing += 1
                    continue

                if dry_run:
                    print(f"  [DRY] would create: {fname}")
                    created += 1
                    continue

                pub_date = (
                    article.published_at.strftime("%Y-%m-%d")
                    if article.published_at
                    else datetime.now().strftime("%Y-%m-%d")
                )
                has_takes = take_counts.get(article.id, 0)
                scoring_note = (
                    f"Bridged from take_engine ({has_takes} takes generated; scored by take_engine evaluator)."
                    if has_takes
                    else "Bridged from take_engine (no takes generated yet; pending next pipeline run)."
                )

                header = (
                    f"# {article.title}\n"
                    f"**Source:** {article.url}\n"
                    f"**Date:** {pub_date}\n"
                    f"**Author:** {article.author or src_name}\n"
                    f"**Score:** TBD | **Concepts:** TBD\n"
                    f"**Scoring reason:** {scoring_note}\n\n"
                )

                out_path.write_text(header + article.raw_content, encoding="utf-8")
                created += 1

            print(f"\n[bridge] summary")
            print(f"  created: {created}")
            print(f"  skipped (already in raw/articles/): {skipped_existing}")
            if scored_only:
                print(f"  skipped (no take_engine takes): {skipped_unscored}")
            print(f"  skipped (truncated content): {skipped_truncated}")
            print(f"  skipped (content too short): {skipped_short}")
            print(f"\nNext step: run /graphify ./raw --update in Claude Code, then commit + push.")
    finally:
        await engine.dispose()


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--since", default="2026-04-22", help="Only bridge articles created on/after this date (YYYY-MM-DD)")
    parser.add_argument("--limit", type=int, default=None, help="Max articles to bridge")
    parser.add_argument("--scored-only", action="store_true", help="Only bridge articles that have take_engine takes generated")
    parser.add_argument("--dry-run", action="store_true", help="Show what would be created without writing files")
    args = parser.parse_args()

    asyncio.run(main(args.since, args.limit, args.scored_only, args.dry_run))
