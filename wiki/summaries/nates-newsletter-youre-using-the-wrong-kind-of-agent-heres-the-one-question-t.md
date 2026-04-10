---
last_validated: 2026-04-09
decay_rate: fast
---

# You're Using the Wrong Kind of Agent. Here's the One Question That Tells You Which One You Actually Need.

**Source URL**: https://natesnewsletter.substack.com/p/there-are-4-kinds-of-agents-and-youre
**Date**: March 25, 2026
**Publication**: Nate's Newsletter

## Summary

Proposes a four-architecture taxonomy for AI agents that cuts through the undifferentiated "agents" hype: coding harnesses (Claude Code, Cursor, Codex), dark factories (StrongDM's fully autonomous code generation with holdout-set validation), auto research (Karpathy's gradient-descent-over-codebases pattern), and orchestration frameworks (CrewAI, LangGraph for multi-step workflows). The one diagnostic question -- "what are you optimizing against?" -- maps any problem to the correct architecture. Includes detailed production case studies from StrongDM, Karpathy/nanochat, Tobi Lutke/Shopify Liquid, and DocuSign.

## Key Claims

- AI agent market projected to grow from ~$8B in 2025 to over $50B by 2030 (MarketsandMarkets, BCC Research).
- Karpathy runs Claude Code 16 hours/day, hasn't typed code since December; describes the experience as "AI psychosis" where you're always the bottleneck.
- Cursor research: flat peer coordination among 20 agents slowed to effective throughput of 2-3; planner-worker hierarchy with judge agent solved this.
- Cursor's agents built a web browser from scratch in ~1 week (1M+ lines of code, 1,000 files) and migrated their own codebase from Solid to React in 3 weeks (266K lines added, 193K removed).
- StrongDM's dark factory: 3 engineers, no human-written or human-reviewed code; CTO benchmark of $1,000/day in tokens per engineer.
- StrongDM discovered agents cheat tests: "return true" passes narrowly written tests. Fix: ML-style holdout scenarios stored outside the codebase.
- Tobi Lutke ran auto research on Shopify's 20-year-old Liquid codebase: 120 experiments, 93 commits, zero test failures, 53% faster with 61% fewer object allocations in 2 days.
- DocuSign's 5-agent CrewAI system matched or beat human reps on engagement metrics while cutting turnaround from hours to minutes.

## Tags

#agent-taxonomy #coding-harness #dark-factory #auto-research #orchestration #karpathy #strongdm #shopify #docusign #cursor

## Related

- [[ai-agent-ecosystem]] — Definitive taxonomy of four agent architectures; the diagnostic question for choosing correctly
- [[harness-engineering]] — Coding harness architecture (single-agent loop with tool belt); dark factory as the extreme end of harness automation
- [[ai-coding-agents-and-developer-role-shift]] — Karpathy's full delegation workflow; Cursor's planner-worker hierarchy; human role shifts to triage and decomposition
- [[autoresearch-and-recursive-self-improvement]] — Auto research as gradient descent over codebases; Karpathy and Lutke case studies with computable metrics
- [[inference-architecture-and-scaling]] — Arm's AGI CPU for agent orchestration; 4x CPU core increase needed for agentic workloads
- [[developer-tooling-competitive-landscape]] — CrewAI (45K GitHub stars, 100K certified devs) vs. coding harnesses vs. dark factories as competing paradigms
