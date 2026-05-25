"""KB inbox processor — converts URLs in inbox/articles.txt into raw/articles/*.md files.

For each URL in inbox/articles.txt:
  - Generate a slug from the URL
  - Skip if raw/articles/<slug>.md already exists
  - Fetch the article content (uses Substack cookie if applicable, from take_engine .env)
  - Write a KB-formatted markdown file to raw/articles/<slug>.md
  - Move the URL line to inbox/articles.processed.txt with status

Designed for ad-hoc Matt-curated additions. Sources from iOS Shortcut share-sheet,
or manual paste. Empty Score/Concepts — graphify and the wiki ingestion agent
fill those in.

Run:  python .claude/scripts/process_inbox.py

After running successfully:
  - Review raw/articles/ for new files
  - Run: /graphify ./raw --update   (in Claude Code session)
  - Commit + push
"""
import os
import re
import sys
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse

import httpx
from bs4 import BeautifulSoup

# Paths
KB_ROOT = Path(__file__).resolve().parent.parent.parent
INBOX_PATH = KB_ROOT / "inbox" / "articles.txt"
PROCESSED_PATH = KB_ROOT / "inbox" / "articles.processed.txt"
RAW_ARTICLES_DIR = KB_ROOT / "raw" / "articles"

# Substack cookie — try to read from take_engine .env (sibling repo)
TAKE_ENGINE_ENV = KB_ROOT.parent / "take_engine" / ".env"
SUBSTACK_COOKIE = None
if TAKE_ENGINE_ENV.exists():
    for line in TAKE_ENGINE_ENV.read_text(encoding="utf-8", errors="replace").splitlines():
        if line.startswith("SUBSTACK_SESSION_COOKIE="):
            SUBSTACK_COOKIE = line.split("=", 1)[1].strip()
            break

_SUBSTACK_DOMAINS = (
    "substack.com",
    "pragmaticengineer.com",
    "latent.space",
    "newsletter.semianalysis.com",
    "lennysnewsletter.com",
    "dwarkesh.com",
)


def slug_from_url(url: str) -> str:
    """Generate a kebab-case slug from a URL."""
    parsed = urlparse(url)
    domain = parsed.netloc.replace("www.", "").split(".")[0]
    path_part = parsed.path.strip("/").split("/")[-1] if parsed.path.strip("/") else "index"
    path_part = re.sub(r"[^a-z0-9-]+", "-", path_part.lower()).strip("-")
    # Truncate path part if very long
    if len(path_part) > 70:
        path_part = path_part[:70].rstrip("-")
    return f"{domain}-{path_part}"


def fetch_article(url: str) -> tuple[str, str, str]:
    """Fetch article, return (title, author, body_text)."""
    headers = {"User-Agent": "KnowledgeBase-Inbox/1.0"}
    if SUBSTACK_COOKIE and any(d in url for d in _SUBSTACK_DOMAINS):
        headers["Cookie"] = f"substack.sid={SUBSTACK_COOKIE}"

    resp = httpx.get(url, headers=headers, timeout=30, follow_redirects=True)
    resp.raise_for_status()

    soup = BeautifulSoup(resp.text, "lxml")

    title = ""
    if soup.title and soup.title.string:
        title = soup.title.string.strip()
    h1 = soup.find("h1")
    if h1 and h1.get_text(strip=True):
        title = h1.get_text(strip=True)

    author = ""
    author_meta = soup.find("meta", attrs={"name": "author"})
    if author_meta and author_meta.get("content"):
        author = author_meta["content"]
    else:
        og_author = soup.find("meta", attrs={"property": "article:author"})
        if og_author and og_author.get("content"):
            author = og_author["content"]

    for tag in soup(["script", "style", "nav", "footer", "header", "aside"]):
        tag.decompose()

    article = (
        soup.find("article")
        or soup.find("div", class_="post-content")
        or soup.find("div", class_="entry-content")
        or soup.find("main")
        or soup.body
    )
    body = article.get_text(separator="\n", strip=True) if article else ""

    return title, author, body


def write_kb_article(url: str, title: str, author: str, body: str) -> Path:
    """Write a KB-formatted article markdown file."""
    slug = slug_from_url(url)
    out_path = RAW_ARTICLES_DIR / f"{slug}.md"

    today = datetime.now().strftime("%Y-%m-%d")

    # KB-formatted markdown — matches what take_engine seeding pattern produced
    header = (
        f"# {title or slug}\n"
        f"**Source:** {url}\n"
        f"**Date:** {today}\n"
        f"**Author:** {author or 'Unknown'}\n"
        f"**Score:** TBD | **Concepts:** TBD\n"
        f"**Scoring reason:** Added via KB inbox (Matt-curated). Concepts + score "
        f"to be filled during next graphify pass.\n\n"
    )

    out_path.write_text(header + body, encoding="utf-8")
    return out_path


def append_processed(url: str, status: str, note: str = "") -> None:
    ts = datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")
    with PROCESSED_PATH.open("a", encoding="utf-8") as f:
        f.write(f"{ts}\t{status}\t{url}\t{note}\n")


def read_inbox() -> list[str]:
    if not INBOX_PATH.exists():
        return []
    urls = []
    for line in INBOX_PATH.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        urls.append(line)
    return urls


def rewrite_inbox(remaining: list[str]) -> None:
    """Keep error URLs in inbox for retry. Successful ones are removed."""
    header = (
        "# Drop one URL per line. Lines starting with # are ignored.\n"
        "# Processed URLs move to articles.processed.txt automatically.\n"
    )
    body = "\n".join(remaining) + ("\n" if remaining else "")
    INBOX_PATH.write_text(header + body, encoding="utf-8")


def main() -> int:
    urls = read_inbox()
    if not urls:
        print("[inbox] empty — nothing to process")
        return 0

    print(f"[inbox] processing {len(urls)} URL(s)")
    RAW_ARTICLES_DIR.mkdir(parents=True, exist_ok=True)

    skipped = []
    created = 0
    duplicates = 0
    errors = 0

    for url in urls:
        slug = slug_from_url(url)
        target = RAW_ARTICLES_DIR / f"{slug}.md"

        if target.exists():
            append_processed(url, "duplicate", f"exists at raw/articles/{slug}.md")
            print(f"  [dup]     {url[:80]}")
            duplicates += 1
            continue

        try:
            title, author, body = fetch_article(url)
            if not body or len(body) < 200:
                raise ValueError(f"Body too short ({len(body)} chars)")
            out = write_kb_article(url, title, author, body)
            append_processed(url, "created", f"-> raw/articles/{out.name}, {len(body)} chars")
            print(f"  [created] {url[:80]}  -> {out.name}")
            created += 1
        except Exception as e:
            note = f"{type(e).__name__}: {str(e)[:200]}"
            append_processed(url, "error", note)
            print(f"  [error]   {url[:80]}  ({note})", file=sys.stderr)
            skipped.append(url)
            errors += 1

    rewrite_inbox(skipped)
    print(
        f"[inbox] done — created: {created}, duplicate: {duplicates}, error: {errors}"
    )
    if created > 0:
        print(
            f"\nNext step: run /graphify ./raw --update in Claude Code, "
            f"then commit + push."
        )
    return 0


if __name__ == "__main__":
    sys.exit(main())
