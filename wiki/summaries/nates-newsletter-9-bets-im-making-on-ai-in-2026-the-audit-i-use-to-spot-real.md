---
last_validated: 2026-04-09
decay_rate: fast
---

# 9 Bets I'm Making on AI in 2026 + The Audit I Use to Spot Real Systems

**Source URL**: https://natesnewsletter.substack.com/p/why-im-more-optimistic-about-ai-in
**Date**: December 24, 2025
**Publication**: Nate's Newsletter

## Summary

The article introduces the "harnessing layer" (Y) as the missing multiplier between foundation models and domain expertise (X), arguing that the teams winning in 2025 -- Cursor, Perplexity, Claude Code, Granola -- all built system-level engineering around commodity models rather than chasing frontier capabilities. Competitive moats now live in constraint enforcement, validation loops, repair logic, and logging rather than model access. The piece includes a 12-question "Moat Audit" for assessing production readiness, and predicts 2026 will reward protocol-level infrastructure (MCP donation to Linux Foundation) and middleware-layer companies over model providers.

## Key Claims

- Cursor crossed $1B ARR in 2025 with a $9.9B valuation by building an AI-native IDE, not by having better model access than GitHub Copilot.
- The "harnessing layer" (Y) -- validation logic, routing, constraint enforcement, repair steps -- is the multiplier that turns domain expertise into production AI systems.
- Models don't reliably count characters or enforce constraints mid-generation; constraint enforcement must live in code, not prompts.
- Anthropic donated MCP to the Linux Foundation's Agentic AI Foundation on December 9, 2025; OpenAI and Block co-founded the effort.
- Scoped workflows with deterministic checkpoints beat open-ended autonomy for most production use cases.
- The generate-validate-repair-validate drumbeat is the dominant pattern in shipping AI systems.
- The "post-ChatGPT middleware layer" is wide open, and Cursor proved "wrappers" can be billion-dollar businesses.
- Skills repricing is real: schemas, validation logic, routing patterns, and failure instrumentation are the four learnable skills that matter most.

## Tags

#harness-engineering #ai-agents #middleware #constraint-enforcement #moat-audit #cursor #mcp #protocols

## Related

- [[harness-engineering]] — directly defines and operationalizes the harnessing layer concept
- [[ai-agent-ecosystem]] — positions scoped agent workflows as winning over open-ended autonomy
- [[developer-tooling-competitive-landscape]] — Cursor vs. Copilot competitive analysis as core example
- [[token-economics-and-pricing]] — OpenAI compute capacity strategy for agentic workloads
- [[inference-architecture-and-scaling]] — shift from chat to agents requiring mini production jobs
