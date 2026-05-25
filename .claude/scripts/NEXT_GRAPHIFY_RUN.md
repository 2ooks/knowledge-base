# KB Graphify Update — Decision & Execution Plan

**Status:** DEFERRED tonight — too LLM-heavy for autonomous run when quota already died once
**Trigger to execute:** Next Claude Code session in `knowledge-base/` workspace with LLM available
**Estimated tokens:** ~10 parallel subagent calls × 20 files each × ~5K tokens per file = ~1M input tokens
**Estimated runtime:** 10-20 min when LLM available

## Current state (verified 2026-05-25 by `.claude/scripts/graphify_state_check.py`)

- `raw/articles/` contains **365 .md files** (was 165 before tonight's bridge run)
- `graphify-out/manifest.json` has **163 files tracked** (the original April corpus)
- **202 files are NEW since last graphify run** (200 bridged from take_engine + 2 from earlier KB activity)

Detect_incremental is technically reporting 358 due to a path-format bug between manifest keys (`raw\articles\file.md`) and detect output (`./raw/articles/file.md`). The true new count is 202.

## Why deferred

Tonight's take_engine pipeline run (2026-05-25 overnight) died at article #14/287 on the same Claude LLM endpoint graphify would use. Running graphify autonomously now would:
- Likely die mid-run with partial results
- Waste tokens that may be quota-constrained
- Leave the graph in an inconsistent state

Better: Matt (or future-Clawpilot when quota is verified) runs this in a Claude Code session where he can monitor + react.

## Execution recipe (next session)

```powershell
cd C:\Users\matttookey\Projects\knowledge-base
git pull
# In Claude Code session inside this workspace:
/graphify ./raw --update
```

Expected behavior (from graphify-windows skill SKILL.md):
1. Detect step identifies the 202 new files
2. Splits into ~10 chunks of 20-25 files each
3. Dispatches all subagents in PARALLEL (single message)
4. Each subagent produces nodes + edges + hyperedges JSON for its chunk
5. Merges with cache; combines with existing AST extraction
6. Rebuilds graph.json (currently 155 nodes; expect ~400-600 after update)
7. Re-clusters communities (currently 18; expect 25-35 after update)
8. Auto-runs trace analysis on the most interesting new bridge
9. Writes `graphify-out/GRAPH_REPORT.md` + `graph.html` + new trace file

## After graphify completes

1. Read `graphify-out/GRAPH_REPORT.md` — note god nodes, surprising connections, new questions
2. Consider Stage 1-3 of `PROMPTS.md` to create `wiki/summaries/` for the new articles (Matt-gated; ask before each batch)
3. `node build.js` to regenerate site
4. Commit + push as `chore: graphify update + summaries for 2026-05-25 bridged articles`

## What this DOES NOT change

- Take Engine DB (read-only on it)
- `raw/articles/` files (read-only after bridge)
- `wiki/connections.md` (Matt-curated, not auto-updated)
- `wiki/concepts/` (Matt-curated, not auto-updated)

The graph rebuild is structural — it discovers connections. The synthesis layer (concepts, connections, summaries) remains Matt-gated.

## Fallback if LLM dies mid-run

`/graphify` caches successful chunks. If LLM dies on chunk 5 of 10:
- Chunks 1-4 results saved in `graphify-out/cache/`
- Next run picks up at chunk 5
- Already-extracted chunks are NOT re-processed
- No work lost

## Confidence

- HIGH: that this is the right approach and execution is mechanical
- HIGH: that running it tonight autonomously would risk a half-state outcome
- MED: that next LLM availability will be sufficient (depends on quota reset, can't predict)

What would change my decision to defer: confirmation that LLM quota has reset + Matt explicitly says "go run graphify now."
