# Knowledge Base

LLM-compiled knowledge base wiki. Drop source files into `raw/articles/` and use the wiki structure to organize summaries, concepts, and cross-cutting connections.

**📱 Browse on your phone:** [https://2ooks.github.io/knowledge-base/](https://2ooks.github.io/knowledge-base/)

## Wiki

The wiki lives in the `wiki/` directory:

- `wiki/index.md` — Master index of all summaries and concepts
- `wiki/summaries/` — One markdown file per source article
- `wiki/concepts/` — One markdown file per concept theme
- `wiki/connections.md` — Cross-cutting patterns, contradictions, research gaps

See [WIKI_RULES.md](WIKI_RULES.md) for maintenance rules.

## Web UI

The wiki is built into a mobile-first static site and deployed to GitHub Pages automatically on every push to `main`.

To build locally:

```bash
npm install
node build.js
# output → _site/
```

GitHub Pages must be configured in **Settings → Pages → Source: GitHub Actions**.

## Workflow engines and ingestion queueing

- `new-source-alert` runs as a GitHub Agentic Workflow and is serialized with workflow-level concurrency (`group: wiki-ingestion`, `cancel-in-progress: false`) so ingestion runs queue instead of racing.
- `nightly-integrity` and `weekly-digest` are configured to use the Claude engine (`engine: claude`) to avoid depending on a separate `COPILOT_GITHUB_TOKEN` secret.
- When adding a new Agentic Workflow, update both the source `.md` file and its compiled `.lock.yml` file together, and apply the same fixed concurrency pattern for any workflow that edits shared wiki/index/session files.
