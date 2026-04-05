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
