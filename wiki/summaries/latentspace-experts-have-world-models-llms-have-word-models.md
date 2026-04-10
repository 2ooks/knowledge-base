---
last_validated: 2026-04-09
decay_rate: fast
---

# Experts Have World Models. LLMs Have Word Models.

- **Source URL**: https://www.latent.space/p/adversarial-reasoning
- **Date**: February 7, 2026
- **Publication**: Latent Space (guest post by Ankit Maloo)

## Summary

This essay argues that LLMs fail in adversarial, multi-agent environments because they are trained on artifact quality (RLHF rewards coherent, polite outputs) rather than on outcome robustness against self-interested counterparties. The distinction maps to perfect-information games (chess, code) where LLMs excel versus imperfect-information games (poker, negotiation, litigation) where domain experts maintain an edge through recursive theory-of-mind simulation. The core vulnerability: LLMs are "readable" — their cooperative bias, prompting strategy consistency, and inability to detect or adapt to being probed make them exploitable by any counterparty who understands their default failure modes. This has direct implications for deploying AI agents in procurement, sales, negotiation, and competitive strategy, where the fix requires multi-agent RL training on outcomes rather than single-agent text generation graded on artifacts.

## Key Claims

- LLMs are optimized by RLHF to produce outputs that score well in one-shot isolated evaluations, systematically under-weighting second-order adversarial effects
- Domain experts evaluate output by "survival under pressure" (will this trigger the regulator, concede leverage, trigger the engineering veto path), not by coherence or tone
- Meta's Pluribus poker AI won by being unreadable — calculating how it would act with every possible hand and balancing strategy to deny opponents information; LLMs do the opposite
- LLMs cannot detect they are being probed or modeled, and cannot recalibrate mid-interaction — making them the "most consistent, most readable counterparties" an adversary has ever faced
- Coding is "chess-like" (deterministic, no hidden state, no adversarial counterparty), but professional software engineering extends into poker territory (ambiguous requirements, organizational politics, API misuse anticipation)
- Google DeepMind is expanding benchmarks beyond chess to poker and Werewolf to test "social deduction and calculated risk"
- The fix requires multi-agent environments where other self-interested agents react, probe, and adapt — grading on outcomes, not artifact quality

## Tags

#world-models #adversarial-reasoning #theory-of-mind #RLHF-limitations #multi-agent #negotiation #poker-ai #domain-expertise #exploitability

## Related

- [[ai-agent-ecosystem]] — deploying LLM agents in procurement, sales, and negotiation where adversarial dynamics apply
- [[ai-scaling-limits-and-research-paradigm]] — more intelligence does not fix the missing adversarial training loop; research paradigm shift needed
- [[ai-coding-agents-and-developer-role-shift]] — coding as chess-like vs. professional engineering as poker-like distinction
- [[vertical-models-and-usage-data]] — domain expertise as simulation depth that text corpora cannot fully capture
