---
last_validated: 2026-04-09
decay_rate: fast
---

# GPT-5.4 Beat Human Performance on Desktop Tasks and Missed a Question a Child Would Get Right

**Source URL**: https://natesnewsletter.substack.com/p/i-tested-gpt-54-against-claude-and
**Date**: March 7, 2026
**Publication**: Nate's Newsletter (Substack)

## Summary

A rigorous blind evaluation of GPT-5.4 against Claude Opus 4.6 and Gemini 3.1 across six structured tests, revealing that GPT-5.4 is not the best overall model but the most architecturally interesting one. The critical finding is the massive quality gap between GPT-5.4's thinking mode (frontier-competitive) and auto mode (measurably weaker), which most of ChatGPT's billion users will never toggle. OpenAI is clearly optimizing for agentic infrastructure -- tool search, computer use, sustained workflows -- rather than writing quality or general intelligence.

## Key Claims

- GPT-5.4 in thinking mode scored 2.0-2.5 points higher (on a 5-point scale) than auto mode on epistemic calibration -- effectively two different products behind the same interface.
- GPT-5.4 discovered and processed 461 of 465 files (99.1% coverage) in a schema migration eval; Claude managed 75% because it chose not to install openpyxl.
- GPT-5.4 took 56 minutes on the schema migration; Claude finished in 15, Gemini in 21. GPT-5.4 produced 4,050 lines of code; Claude produced 1,800.
- GPT-5.4 produced 394 undifferentiated flagged items where Claude produced 19 actionable flags -- the "pipeline problem" where the model builds infrastructure without judgment.
- GPT-5.4's auto mode cited wrong Nobel winners, was off by 3x on Databricks revenue, and never used a LOW confidence tag.
- OSWorld (desktop navigation) jumped from 47.3% to 75.0%, surpassing the 72.4% human baseline.
- Tool search reduces token usage by 47% through lazy-loading tool definitions instead of stuffing them all into every prompt.
- Peter Steinberger (OpenClaw creator, 247K GitHub stars) joined OpenAI three weeks before the release, signaling the agentic direction.
- Claude Opus 4.6 still clearly superior on writing quality and product judgment; GPT-5.4 superior on quantitative modeling and file processing breadth.

## Tags

#gpt-54 #model-evaluation #agentic-infrastructure #thinking-mode #tool-search #computer-use #openai #claude-opus

## Related

- [[token-economics-and-pricing]] — tool search architecture reduces per-call token costs by 47%, reshaping agent economics
- [[ai-agent-ecosystem]] — GPT-5.4 explicitly positioned as agent substrate; benchmarks all agentic
- [[developer-tooling-competitive-landscape]] — Codex integration and computer use capabilities change the competitive positioning
- [[inference-architecture-and-scaling]] — thinking vs auto mode quality gap reveals routing/inference architecture tradeoffs
