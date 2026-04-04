# Your Agent Has 12 Blind Spots You're Probably Ignoring
- **Source:** https://natesnewsletter.substack.com/p/your-agent-has-12-blind-spots-you
- **Date:** ~April 2026 [UNVERIFIED: exact date]
- **Author:** Nate Jones (Nate's Newsletter)

## Source Retrieval Quality
Secondary summary only — article is behind a subscriber paywall and direct fetch was unavailable. Claims below are derived from secondary summaries, podcast descriptions, and a companion YouTube video. All specific details are marked [UNVERIFIED].

## Summary
Nate Jones argues that building production-grade AI agents is "80% plumbing, 20% model" — the majority of practical value comes from infrastructure, orchestration, security, and reliability layers, not from model intelligence itself. [UNVERIFIED] The article uses the leaked Claude Code source architecture as a case study, extracting 12 foundational components that most agent builders skip in favor of working on the visible "AI magic." [UNVERIFIED] The central claim is that teams who invest in these primitives ship reliable agents; those who skip them ship brittle demos. [UNVERIFIED] The framing is practitioner-focused: these are not aspirational design patterns but components Claude Code has already built and shipped.

## Key Claims
- Agents are "80% plumbing, 20% model" — infrastructure determines whether demos become production systems [UNVERIFIED]
- 12 foundational components most teams miss: tool registry (metadata-first), memory persistence, workflow orchestration, observability/tracing, security layering, session persistence, workflow state management, permissions and audit trails, agent identity/ownership, testing and validation, error handling and rollback, plugin/tool versioning [UNVERIFIED]
- Claude Code's bash tool alone has an 18-module security architecture — typical agent builders implement near zero [UNVERIFIED]
- Most teams focus exclusively on prompt engineering and model selection while ignoring the plumbing that determines production reliability [UNVERIFIED]
- The gap between demo-grade and production-grade agents is almost entirely an infrastructure gap, not a model capability gap [UNVERIFIED]

## Tags
#agent-architecture #production-agents #agent-reliability #infrastructure #security #memory #orchestration #observability #claude-code

## Related
- [[ainews-claude-code-source-leak]] — source architecture analyzed in this article; 3-layer memory, KV fork-join, 18-module bash security
- [[ainews-everything-is-cli]] — harness engineering as the competitive moat
- [[great-gpu-shortage-rental-capacity]] — agent workloads driving compute demand assumes production-grade agents exist
