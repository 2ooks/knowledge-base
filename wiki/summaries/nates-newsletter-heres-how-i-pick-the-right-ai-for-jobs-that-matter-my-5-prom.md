---
last_validated: 2026-04-09
decay_rate: fast
---

# Here's How I Pick the Right AI for Jobs that Matter: My 5 Prompts + ChatGPT 5.2 vs. Claude Opus 4.5 vs. Gemini 3 Deep Dive

**Source URL**: https://natesnewsletter.substack.com/p/grab-the-5-prompts-i-use-to-discover
**Date**: December 15, 2025
**Publication**: Nate's Newsletter (Substack)

## Summary

A practitioner-level analysis arguing that the "which model is best" question has dissolved -- model capabilities have fragmented into detailed "capability surfaces" analogous to the jump from 8-bit to 4K graphics. The article provides granular field notes on GPT-5.2 (strong at structured execution, literal instruction following), Claude Opus 4.5 (taste in writing, momentum in agentic harnesses), and Gemini 3 (bandwidth/synthesis across massive context windows), plus a deep dive on coding workflow differences. The key insight is that model evaluation must be task-specific and domain-grounded, not benchmark-driven.

## Key Claims

- Model capabilities have fragmented into detailed "capability surfaces" -- the question "which model is best" dissolves at sufficient granularity.
- GPT-5.2 excels at structured execution and literal instruction following, but produces overcoherent outputs that can be cleaner than the truth.
- Claude Opus 4.5 has distinct strengths in writing taste and agentic momentum, but can "go for it" at the expense of methodical validation.
- Gemini 3 excels at synthesis across massive context (1M+ tokens) but imposes a "conversion tax" when outputs need to fit Office-shaped workflows.
- Coding workflows fragment into at least four distinct capability surfaces: repo-agent execution, hard debugging, code review, and large refactors/migrations.
- Claude Code's context compaction preserves more detail across long sessions; GPT-5.2 sometimes burns cycles relearning basics.
- The article identifies Gemini edge-case smoothing as a failure mode: global compression can round off anomalies unless explicitly asked.
- Multi-model workflows (Gemini for orientation, Opus for writing, GPT-5.2 for structured artifacts) produce better outputs than single-model approaches.

## Tags

#model-evaluation #capability-surfaces #gpt-52 #claude-opus #gemini-3 #coding-workflows #multi-model-strategy

## Related

- [[developer-tooling-competitive-landscape]] — detailed competitive analysis of frontier model strengths across different coding workflows
- [[ai-coding-agents-and-developer-role-shift]] — coding agent harness behavior as key differentiator, not raw model capability
- [[harness-engineering]] — harness configuration (permissions, tool APIs, context management) determines agent effectiveness more than model choice
- [[inference-architecture-and-scaling]] — context window management and compaction strategies as competitive factors
