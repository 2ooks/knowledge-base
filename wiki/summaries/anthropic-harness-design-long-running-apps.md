---
last_validated: 2026-04-07
decay_rate: fast
---

# Harness Design for Long-Running Application Development

**Source URL:** https://www.anthropic.com/engineering/harness-design-long-running-apps
**Date:** ~2026 [UNVERIFIED]
**Author:** Anthropic Engineering Team [UNVERIFIED]

## Source Retrieval Quality

**Secondary summary only** — anthropic.com is blocked for direct fetch (ERR_BLOCKED_BY_CLIENT). Claims sourced from multiple secondary summaries (InfoQ, Epsilla, Geeky Gadgets, OpenTools.ai) via web search. All specific claims marked [UNVERIFIED].

## Summary

Anthropic has developed a three-agent harness architecture inspired by Generative Adversarial Networks (GANs) to enable autonomous coding agents to work coherently over multi-hour or multi-day sessions [UNVERIFIED]. The system separates planning, generation, and evaluation into distinct agents to prevent bias and context overload, using structured context handoffs between sessions and iterative cycles (5–15 iterations) to improve both objective correctness and subjective quality like UI/UX design [UNVERIFIED]. This approach addresses core challenges in long-running agent work: context anxiety (premature task completion), task drift, and coherence loss [UNVERIFIED].

## Key Claims

- Three-agent architecture: Planner (decomposes specs into tasks), Generator (implements features), Evaluator (grades outputs on functionality and subjective criteria like design taste) [UNVERIFIED]
- GAN-inspired separation: no single agent both generates and evaluates work, reducing bias [UNVERIFIED]
- Context reset mechanism: structured artifacts (serialized plans, code, specs) persist state between sessions; fresh agents receive explicit state to maintain continuity without overfilling context windows [UNVERIFIED]
- Evaluator uses Playwright MCP to interact with live outputs, applying weighted rubrics for design quality, originality, craft, usability [UNVERIFIED]
- Iterative development cycles of 5–15 generations/evaluations per task [UNVERIFIED]
- Git-based coordination preserves state and artifacts across multi-day workflows [UNVERIFIED]
- Addresses "context anxiety" (premature task conclusion) and "one-shot" app building tendency [UNVERIFIED]
- Successfully produced full-stack applications with subjective (UI/UX) and objective (functionality) excellence over multi-hour sessions [UNVERIFIED]
- Test oracles verify outputs and prevent regressions [UNVERIFIED]
- Industry engineers endorse the approach for reproducibility, task decomposition, and structured handoffs leading to incremental progress [UNVERIFIED]

## Tags

#harness-engineering #multi-agent #long-running-agents #GAN-architecture #context-management #anthropic

## Related

- [[langchain-anatomy-of-agent-harness]]
- [[harness-engineering]]
- [[ai-agent-ecosystem]]
- [[autoresearch-and-recursive-self-improvement]]
