# Copilot Instructions for knowledge-base

When working in this repository, always start by reading these files in order:

1. `DELEGATION_SPEC.md` — Quality standards, success criteria, partnership context
2. `WIKI_RULES.md` — Wiki structure rules and file format requirements
3. `QUALITY_EXAMPLES.md` — Calibration examples of good and bad output
4. `SESSION_LOG.md` — History of prior sessions and corrections

## For issues labeled `new-source`

These issues contain article URLs to be ingested into the wiki. Process them using the Ingestion Prompt from `PROMPTS.md`, following all 5 stages.

Key rules:
- Report source retrieval quality before creating files
- Mark uncertain claims with [UNVERIFIED]
- Every connection must pass the "So what?" test from DELEGATION_SPEC.md
- Append to SESSION_LOG.md when done
- Link the resulting PR back to the source issue
- When opening the pull request for a new-source ingestion, do NOT create it as a draft. Open it as a ready-for-review PR immediately so automated workflows can merge it.

## General

- All wiki files go in `wiki/` following the structure in WIKI_RULES.md
- Always verify [[wikilinks]] point to files that exist
- Read QUALITY_EXAMPLES.md before writing connections
- The wiki serves partnership thesis formation for Microsoft/GitHub — keep that lens active
