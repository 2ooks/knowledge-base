---
last_validated: 2026-04-09
decay_rate: fast
---

# My Honest Breakdown of the OpenClaw Hire + What 21,639 Exposed Instances Tell You About Agent Security

**Source URL**: https://natesnewsletter.substack.com/p/the-20kmonth-lobster-that-zuckerberg
**Date**: February 17, 2026
**Publication**: Nate's Newsletter (Substack)

## Summary

OpenClaw creator Peter Steinberger joined OpenAI over Meta after building the fastest-growing open-source project in GitHub history (196K stars in three months). The hire gives OpenAI three hard-to-replicate assets: developer trust, architectural knowledge from real agent failures, and a community of 600 contributors. Critically, the deal followed a severe security crisis -- CVE-2026-25253 exposed 21,639 instances and leaked credentials at scale -- revealing that the security challenges of autonomous agents with shell access are inherent to the category, not unique to OpenClaw. This positions agent identity, permissions, and security as the critical unsolved infrastructure layer for the personal agent market.

## Key Claims

- OpenClaw reached 196,000 GitHub stars with 600 contributors and 10,000+ commits in under three months.
- Anthropic's Claude Code hit $1B annualized revenue; OpenAI's Codex was playing catch-up in developer tools.
- CVE-2026-25253 (CVSS 8.8) allowed one-click RCE via cross-site WebSocket hijacking; 21,639 exposed instances found by Censys.
- 7.1% of nearly 4,000 ClawHub skills mishandled secrets like API keys through LLM context windows (Snyk report).
- Steinberger chose OpenAI over Meta based on mission alignment and access to frontier models/Cerebras compute, not personal chemistry.
- OpenClaw moves to an independent foundation (Chrome-Chromium model), but governance details remain unannounced.
- Steinberger accumulated 6,600 commits in January 2026 alone running 4-10 coding agents simultaneously -- a proof point for OpenAI's Codex capabilities.
- Altman's phrasing that Steinberger's work would "quickly become core to product offerings" reads as a product roadmap for consumer agents.

## Tags

#openclaw #openai #agent-security #personal-agents #developer-ecosystem #acqui-hire #open-source

## Related

- [[agent-security-identity-and-permissions]] — 21,639 exposed instances and credential leaks demonstrate the unsolved agent security problem
- [[ai-agent-ecosystem]] — OpenClaw proves self-hosted agents can do real work; OpenAI's hire signals consumer agent ambitions
- [[developer-tooling-competitive-landscape]] — Claude Code at $1B ARR vs. OpenAI Codex catch-up; Steinberger hire as competitive move
- [[ai-coding-agents-and-developer-role-shift]] — 6,600 commits via multi-agent coding workflow as proof of the agentic engineering paradigm
- [[harness-engineering]] — OpenClaw's gateway architecture and skills marketplace as agent harness infrastructure
