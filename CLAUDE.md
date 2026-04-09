# CLAUDE.md — knowledge-base project

## Graphify Integration

This repo has a graphify knowledge graph at `graphify-out/graph.json` (155 nodes, 160 edges, 18 communities). The site's graph page (`build.js`) reads this file at build time.

### After git pull or new article ingestion

Check if graphify is stale by comparing `raw/` contents against `graphify-out/manifest.json`. If new or changed files exist in `raw/` that aren't in the manifest, suggest running:

```
/graphify ./raw --update
```

Then commit the updated `graphify-out/` files and rebuild the site with `node build.js`.

### Graph queries

The graph supports path tracing, community detection, and bridge analysis. Use `/graphify query`, `/graphify path`, or `/graphify explain` to navigate. Save interesting traces as output files in `outputs/` following the existing format (wikilinks, sources, gaps, confidence notes, Microsoft/GitHub strategic framing).

## Site Build

- `node build.js` — builds static site to `_site/`
- Graph page reads `graphify-out/graph.json` when available, falls back to wikilink-based graph
- Deploy via GitHub Actions on push to main
