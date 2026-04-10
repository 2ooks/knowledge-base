---
last_validated: 2026-04-09
decay_rate: fast
---

# Anthropic, Google, and Vercel All Disagree on AI Agents -- Here's What Really Matters

**Source URL**: https://natesnewsletter.substack.com/p/i-summarized-3-ai-agent-papers-60
**Date**: November 17, 2025
**Publication**: Nate's Newsletter

## Summary

Synthesizes three competing agent visions released within 24 hours: Google's 50-page orchestration-first whitepaper (agents as loops, five capability levels, no "God agent," control planes), Vercel's pragmatic "build it now" field guide (target verifiable toil, human-in-the-loop), and Anthropic's Claude Code hack report (orchestration is the security perimeter, not the model). The key insight is that these frameworks are complementary, not competing -- Vercel shows where to start, Google shows the destination, and Anthropic shows why you cannot skip security. Proposes a four-step sequencing: mine the back office, wrap in lightweight orchestration, use wins to justify deeper infrastructure, and treat the Claude Code hack as a reference point for why autonomous agents need guardrails.

## Key Claims

- Google classifies agentic systems into five levels of increasing complexity, from isolated reasoning (L0) to dynamic agent/tool creation (L4); most enterprise deployments are at L1-L2.
- Google argues no single "God agent" can exist -- universal agents fail under load; work must distribute across many small loops.
- Agents must be treated as first-class identities in IAM systems (SPIFFE for cryptographic identity, RBAC, Model Armor).
- Vercel's lead processing team went from 10 people to 1 person handling the same work after building a qualification agent.
- Vercel's abuse platform agent achieved 59% reduction in time to ticket closing.
- The Claude Code hack demonstrated a state-linked actor using an agentic system to automate a cyber operation without jailbreaking the model.
- Vercel's "build it now" filter: work must be verifiable, step-wise, recurring toil with known inputs/outputs and a human in the loop.
- Agent-to-agent collaboration and self-composing workflows will be a hot area in 2026.

## Tags

#ai-agents #orchestration #google-agents #vercel #security #agent-identity #iam #control-planes #toil-reduction

## Related

- [[ai-agent-ecosystem]] — three competing visions for how the agent market structures
- [[agent-security-identity-and-permissions]] — agents as first-class IAM identities, orchestration as security perimeter
- [[harness-engineering]] — Google's orchestration-first design vs. Vercel's lightweight harness approach
- [[inference-architecture-and-scaling]] — open inference stack analysis (vLLM, SGLang, neoclouds)
- [[open-models-and-local-inference]] — enterprise fine-tune-deploy-retrain loop discussed
