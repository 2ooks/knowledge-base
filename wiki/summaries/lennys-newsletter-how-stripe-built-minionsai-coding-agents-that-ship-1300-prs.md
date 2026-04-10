---
last_validated: 2026-04-09
decay_rate: fast
---

# How Stripe Built "Minions" -- AI Coding Agents That Ship 1,300 PRs Weekly

**Source URL**: https://www.lennysnewsletter.com/p/how-stripe-built-minionsai-coding
**Date**: March 25, 2026
**Publication**: Lenny's Newsletter (How I AI podcast)

## Summary

Stripe engineer Steve Kaliski details how the company's internal "minions" system ships approximately 1,300 AI-generated pull requests per week, activated by Slack emoji reactions. The architecture relies on Goose (Block's open-source agent harness), cloud development environments for parallel execution, and a developer experience philosophy that treats good human DX as a prerequisite for good agent performance. Most strategically, Stripe is demonstrating machine-to-machine payments where AI agents autonomously transact with third-party services -- a potential new payment rail that could reshape Stripe's addressable market.

## Key Claims

- Stripe's "minions" ship ~1,300 PRs per week with minimal human intervention beyond code review
- Engineers activate development work via Slack emoji reactions, reducing activation energy to near-zero
- Stripe chose Goose (Block's open-source agent harness) over proprietary solutions
- Cloud development environments are critical for unlocking parallel agent workflows (multi-threaded AI engineering)
- Good developer experience for humans directly translates to better outcomes for AI agents
- Non-engineers at Stripe are starting to use minions to ship code
- Machine-to-machine payments protocol enables AI agents to spend money autonomously to accomplish tasks (birthday party planned for $5.47)
- Stripe envisions "ephemeral, API-first businesses" built primarily for agent consumers

## Tags

#stripe #ai-agents #developer-productivity #machine-payments #goose #cloud-dev-environments #agent-harness

## Related

- [[harness-engineering]] — Goose as open-source agent harness; Stripe's minion architecture as enterprise-scale harness pattern
- [[ai-agent-ecosystem]] — machine-to-machine payments as new agent infrastructure primitive
- [[developer-tooling-competitive-landscape]] — Slack-triggered agent workflows vs. IDE-centric approaches
- [[ai-coding-agents-and-developer-role-shift]] — non-engineers shipping code via minions; code review as the human bottleneck
