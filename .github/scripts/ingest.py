"""
Auto-ingestion script for the knowledge-base wiki.
Called by the auto-ingest GitHub Actions workflow.

Reads article URLs from the issue body, fetches content,
calls Claude to generate wiki files, and writes them to disk.
The workflow handles git commit/push and issue closure.
"""

import os
import re
import json
import glob
import requests
from pathlib import Path
from anthropic import Anthropic
from bs4 import BeautifulSoup
from markdownify import markdownify as md


def extract_urls(issue_body: str) -> list[str]:
    """Extract URLs from the issue body text."""
    urls = re.findall(r'https?://[^\s<>\)\]]+', issue_body)
    return [u.rstrip('.,;:') for u in urls if u]


def fetch_article(url: str) -> str:
    """Fetch and convert an article URL to markdown text."""
    headers = {
        'User-Agent': 'Mozilla/5.0 (compatible; wiki-bot/1.0)'
    }
    try:
        resp = requests.get(url, headers=headers, timeout=30)
        resp.raise_for_status()
        soup = BeautifulSoup(resp.text, 'html.parser')

        # Remove nav, footer, script, style elements
        for tag in soup.find_all(['nav', 'footer', 'script', 'style',
                                   'header', 'aside']):
            tag.decompose()

        # Try to find the main article content
        article = (
            soup.find('article') or
            soup.find('div', class_=re.compile(r'post|article|content|entry')) or
            soup.find('main') or
            soup.body
        )

        if article:
            text = md(str(article), heading_style="ATX", strip=['img'])
        else:
            text = md(str(soup), heading_style="ATX", strip=['img'])

        # Trim to ~15000 chars to stay within context budget
        if len(text) > 15000:
            text = text[:15000] + "\n\n[... content truncated for processing ...]"

        return text
    except Exception as e:
        return f"[FETCH ERROR: {e}]"


def get_wiki_state() -> dict:
    """Read current wiki state for context."""
    state = {}

    # Read index
    index_path = Path("wiki/index.md")
    if index_path.exists():
        state["index"] = index_path.read_text(encoding="utf-8")

    # Read connections
    conn_path = Path("wiki/connections.md")
    if conn_path.exists():
        state["connections"] = conn_path.read_text(encoding="utf-8")

    # List existing summaries and concepts
    state["summaries"] = [
        Path(f).stem for f in glob.glob("wiki/summaries/*.md")
        if Path(f).stem != ".gitkeep"
    ]
    state["concepts"] = [
        Path(f).stem for f in glob.glob("wiki/concepts/*.md")
        if Path(f).stem != ".gitkeep"
    ]

    # Read concept files (brief) for context
    concept_briefs = {}
    for f in glob.glob("wiki/concepts/*.md"):
        stem = Path(f).stem
        if stem == ".gitkeep":
            continue
        text = Path(f).read_text(encoding="utf-8")
        # Just the first ~500 chars for context
        concept_briefs[stem] = text[:500]
    state["concept_briefs"] = concept_briefs

    return state


def build_prompt(url: str, article_content: str, wiki_state: dict) -> str:
    """Build the Claude prompt for ingestion."""

    existing_summaries = ", ".join(wiki_state.get("summaries", []))
    existing_concepts = ", ".join(wiki_state.get("concepts", []))
    concept_context = "\n\n".join(
        f"### {name}\n{brief}"
        for name, brief in wiki_state.get("concept_briefs", {}).items()
    )

    return f"""You are a wiki maintenance bot for an LLM-compiled knowledge base.
The wiki serves partnership thesis formation for Microsoft/GitHub — surface insights
about AI infrastructure, developer tooling, and compute economics shifts.

## Wiki Rules
- wiki/summaries/ — One file per source. Named in kebab-case. Contains: title, source URL, date, 3-5 sentence summary, key claims, tags, related [[wikilinks]].
- wiki/concepts/ — One file per major theme across 2+ sources. Contains: definition, key points, links to summaries via [[wikilinks]], open questions, related concepts.
- wiki/connections.md — Cross-cutting patterns, contradictions, research gaps.
- wiki/index.md — Master index listing every article.
- Use [[wikilinks]] to link between all articles.
- Summaries are factual. Concept articles are analytical.
- Mark uncertain claims with [UNVERIFIED].
- Every connection must answer: "So what? What would Microsoft/GitHub do with this information?"

## Existing Summaries
{existing_summaries}

## Existing Concepts
{existing_concepts}

## Concept Definitions (abbreviated)
{concept_context}

## Current Index
{wiki_state.get("index", "(empty)")}

## Current Connections
{wiki_state.get("connections", "(empty)")}

## Article to Ingest
URL: {url}

### Article Content
{article_content}

## Your Task
Produce a JSON object with the following keys:

1. "summary_filename": kebab-case filename (no .md extension) for the new summary
2. "summary_content": full markdown content for the new summary file (following the format of existing summaries)
3. "concept_updates": an object where keys are existing concept filenames (no .md) and values are markdown text to APPEND to that concept file under its "Key Points" section. Only include concepts that this article genuinely relates to. Use [[wikilinks]] to the new summary.
4. "new_concepts": an array of objects with "filename" and "content" for any NEW concept files warranted (only if this theme appears in 2+ sources now). Leave empty array if none.
5. "index_entry": a single markdown table row to add to the index (format: | # | [[summary-name]] | Source | Date | [[concept1]], [[concept2]] |)
6. "connections_additions": markdown text for any new patterns, contradictions, or research gaps to append to connections.md. Reference specific summaries. Return empty string if nothing meaningful to add.
7. "raw_article_filename": kebab-case filename (no .md extension) for the raw article in raw/articles/
8. "raw_article_content": cleaned-up markdown of the article source content with title, URL, date, and author at the top

Return ONLY valid JSON. No markdown fences. No commentary outside the JSON."""


def call_claude(prompt: str) -> dict:
    """Call Claude API and parse the JSON response."""
    client = Anthropic()

    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=8000,
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    response_text = message.content[0].text

    # Try to extract JSON if wrapped in code fences
    json_match = re.search(r'```(?:json)?\s*(\{.*?\})\s*```', response_text, re.DOTALL)
    if json_match:
        response_text = json_match.group(1)

    return json.loads(response_text)


def apply_changes(data: dict, url: str):
    """Write all files from the Claude response."""

    # 1. Write raw article
    raw_name = data.get("raw_article_filename", "untitled")
    raw_path = Path(f"raw/articles/{raw_name}.md")
    raw_path.write_text(data.get("raw_article_content", ""), encoding="utf-8")
    print(f"  Created: {raw_path}")

    # 2. Write summary
    summary_name = data["summary_filename"]
    summary_path = Path(f"wiki/summaries/{summary_name}.md")
    summary_path.write_text(data["summary_content"], encoding="utf-8")
    print(f"  Created: {summary_path}")

    # 3. Update existing concepts
    for concept_name, addition in data.get("concept_updates", {}).items():
        concept_path = Path(f"wiki/concepts/{concept_name}.md")
        if concept_path.exists() and addition.strip():
            existing = concept_path.read_text(encoding="utf-8")
            concept_path.write_text(
                existing.rstrip() + "\n" + addition + "\n",
                encoding="utf-8"
            )
            print(f"  Updated: {concept_path}")

    # 4. Create new concepts
    for new_concept in data.get("new_concepts", []):
        concept_path = Path(f"wiki/concepts/{new_concept['filename']}.md")
        if not concept_path.exists():
            concept_path.write_text(new_concept["content"], encoding="utf-8")
            print(f"  Created: {concept_path}")

    # 5. Update index
    index_entry = data.get("index_entry", "").strip()
    if index_entry:
        index_path = Path("wiki/index.md")
        existing_index = index_path.read_text(encoding="utf-8")
        # Append before the Concepts table if it exists, or at the end
        if "## Concepts" in existing_index:
            existing_index = existing_index.replace(
                "## Concepts",
                f"{index_entry}\n\n## Concepts"
            )
        else:
            existing_index = existing_index.rstrip() + "\n" + index_entry + "\n"
        index_path.write_text(existing_index, encoding="utf-8")
        print(f"  Updated: {index_path}")

    # 6. Update connections
    connections_add = data.get("connections_additions", "").strip()
    if connections_add:
        conn_path = Path("wiki/connections.md")
        existing_conn = conn_path.read_text(encoding="utf-8")
        conn_path.write_text(
            existing_conn.rstrip() + "\n\n" + connections_add + "\n",
            encoding="utf-8"
        )
        print(f"  Updated: {conn_path}")


def main():
    issue_body = os.environ.get("ISSUE_BODY", "")
    issue_number = os.environ.get("ISSUE_NUMBER", "?")

    print(f"Processing issue #{issue_number}")

    urls = extract_urls(issue_body)
    if not urls:
        print("No URLs found in issue body. Exiting.")
        return

    print(f"Found {len(urls)} URL(s): {urls}")

    wiki_state = get_wiki_state()

    for url in urls:
        print(f"\nIngesting: {url}")

        # Fetch article
        article_content = fetch_article(url)
        if article_content.startswith("[FETCH ERROR"):
            print(f"  Skipping — {article_content}")
            continue

        fetch_quality = "full" if len(article_content) > 2000 else "partial"
        print(f"  Fetch quality: {fetch_quality} ({len(article_content)} chars)")

        # Build prompt and call Claude
        prompt = build_prompt(url, article_content, wiki_state)
        print("  Calling Claude API...")

        try:
            result = call_claude(prompt)
        except Exception as e:
            print(f"  Claude API error: {e}")
            continue

        # Apply changes
        apply_changes(result, url)

        # Update wiki_state for next URL (so subsequent articles see prior ones)
        wiki_state = get_wiki_state()

    print("\nIngestion complete.")


if __name__ == "__main__":
    main()
