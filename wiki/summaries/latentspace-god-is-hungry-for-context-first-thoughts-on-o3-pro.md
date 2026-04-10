---
last_validated: 2026-04-09
decay_rate: fast
---

# God Is Hungry for Context: First Thoughts on o3 Pro

- **Source URL**: https://www.latent.space/p/o3-pro
- **Date**: June 10, 2025
- **Publication**: Latent Space (guest post by Ben Hylak and Alexis Gauba)

## Summary

OpenAI dropped o3 pricing by 80% (from $10/$40 to $2/$8 per Mtok, matching GPT 4.1) and launched o3-pro at $20/$80, with community theory suggesting the -pro variants are 10x base model calls with majority voting. Ben Hylak's early-access review reveals that o3-pro's intelligence gains only manifest when given substantially more context — simple test questions do not differentiate it from o3, but feeding it an entire history of planning meetings, goals, and voice memos produced plans specific enough to change the startup's strategic direction. The piece crystallizes the emerging "harness" thesis: the winning AI products combine model, tools, memory, and system prompts into an integrated environment (citing Cursor as the canonical example), and o3-pro is notably better at discerning its environment, knowing what tools it has, and reasoning about when to use them versus OpenAI's prior reasoning models.

## Key Claims

- OpenAI cut o3 pricing by 80%: from $10/$40 per Mtok to $2/$8, matching GPT 4.1 pricing
- o3-pro priced at $20/$80 per Mtok; community theory suggests -pro variants are ~10x base model calls with majority voting
- o3-pro reports a 64% win rate vs o3 on human testers and marginal improvement on 4/4 reliability benchmarks
- Simple questions do not differentiate o3-pro from o3; the intelligence gap only surfaces with large context payloads
- When given full meeting history, goals, and voice memos, o3-pro produced a plan specific enough to change a startup's strategic direction — o3 could not
- o3-pro is noticeably better at discerning its environment, communicating available tools, asking questions about the outside world, and choosing the right tool
- The "harness" (model + tools + memory + system prompt) is what makes AI products actually good — not model intelligence alone
- The system prompt has outsized impact on o3-pro behavior, more pronounced than even o3

## Tags

#o3-pro #openai #pricing #reasoning-models #context-windows #harness #tool-use #prompt-engineering

## Related

- [[token-economics-and-pricing]] — 80% o3 price cut and o3-pro tiered pricing structure
- [[inference-architecture-and-scaling]] — majority-voting hypothesis for -pro variants; reasoning model compute scaling
- [[harness-engineering]] — harness thesis crystallized: model + tools + memory + system prompt as the product differentiator
- [[developer-tooling-competitive-landscape]] — o3-pro vs Claude Opus vs Gemini 2.5 Pro comparison; Cursor as canonical harness example
