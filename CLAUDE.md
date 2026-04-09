# CLAUDE.md — knowledge-base project

## Graphify Integration

This repo has a graphify knowledge graph at `graphify-out/graph.json` (155 nodes, 160 edges, 18 communities). The site's graph page (`build.js`) reads this file at build time.

### On session start

Proactively run `git pull origin main` and then `python .claude/check-graphify-stale.py` to check if the graph needs updating. If new files are detected, tell the user and offer to run the update. If the user confirms (or says anything like "go", "do it", "yes"), run the full update cycle: `/graphify ./raw --update`, then the automatic trace analysis below, then commit and push.

### After git pull or new article ingestion

Check if graphify is stale by comparing `raw/` contents against `graphify-out/manifest.json`. If new or changed files exist in `raw/` that aren't in the manifest, suggest running:

```
/graphify ./raw --update
```

Then commit the updated `graphify-out/` files and rebuild the site with `node build.js`.

### Automatic post-update trace analysis

After every successful graphify update (including the initial run), automatically do the following without asking:

1. Read `graphify-out/GRAPH_REPORT.md` — note the god nodes, surprising connections, and suggested questions.
2. Pick the single most interesting finding — prioritize cross-community bridges with high betweenness centrality, or surprising connections that link topics the user's hand-curated `wiki/connections.md` doesn't already cover.
3. Run a graph trace on that finding: load `graphify-out/graph.json`, walk the bridge nodes, inspect their neighbors and community memberships.
4. Write the trace as a new output file in `outputs/` using this format:
   - Title: `# Graph Trace: [description of the finding]`
   - The bridge structure (which nodes, which communities, which edges)
   - What the path reveals (plain-language interpretation)
   - What this means for Microsoft/GitHub (strategic framing with concrete recommendations)
   - Sources Used (with `[[wikilinks]]` to wiki articles)
   - Gaps (what the graph doesn't tell you)
   - Confidence Notes (high/medium/low for each claim)
   - Filename: `trace-[slug]-[date].md` (e.g., `trace-harness-bridge-2026-04-09.md`)
5. Commit the new output file alongside the graphify-out/ updates.
6. Tell the user what you found and offer to trace further.

### Graph queries

The graph supports path tracing, community detection, and bridge analysis. Use `/graphify query`, `/graphify path`, or `/graphify explain` to navigate. Save interesting traces as output files in `outputs/` following the existing format (wikilinks, sources, gaps, confidence notes, Microsoft/GitHub strategic framing).

## Site Build

- `node build.js` — builds static site to `_site/`
- Graph page reads `graphify-out/graph.json` when available, falls back to wikilink-based graph
- Deploy via GitHub Actions on push to main
