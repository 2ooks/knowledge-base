---
last_validated: 2026-04-09
decay_rate: fast
---

# Stacked Diffs and Tooling at Meta with Tomas Reimers

**Source URL**: https://newsletter.pragmaticengineer.com/p/stacked-diffs-and-tooling-at-meta
**Date**: April 2, 2025
**Publication**: The Pragmatic Engineer

## Summary

Tomas Reimers (ex-Meta, Graphite co-founder) details Meta's internal developer tooling ecosystem -- Phabricator, Sandcastle CI, OnDemand dev environments, Landcastle deployment, and the Herald/Butterflybot rules engine -- and explains why stacked diffs, monorepos, and integrated tooling became industry-leading practices at Meta. The critical insight for AI strategy: AI coding tools dramatically increase code volume, making code review and testing quality the binding constraint. His "trust matrix" framework (high trust + tolerance = lean on culture; low trust = invest in tooling/process) directly maps to how enterprises should think about AI code governance.

## Key Claims

- Meta built Phabricator, Sandcastle (CI), OnDemand (dev environments), Landcastle (deployment), and Herald/Butterflybot (rules engine) as deeply integrated internal tools
- Stacked diffs (sequential dependent PRs) reduce code review wait times by enabling smaller review units
- Industry-wide trend of mid-sized and larger companies moving from polyrepos to monorepos
- AI coding tools increase code volume, placing greater emphasis on code review and testing as quality gates
- GitHub has not added stacked diff support despite its popularity inside companies like Meta and Uber
- The "trust matrix" determines optimal process/tooling investment: high-trust teams need less process, scaling teams need more
- AI may automate parts of code review, letting humans focus on design and integration issues
- Uber's metric of "PR time waiting for review without action" targeted distributed team review delays

## Tags

#meta #stacked-diffs #monorepo #developer-tooling #code-review #ai-code-quality #graphite #trust-matrix

## Related

- [[developer-tooling-competitive-landscape]] — GitHub's lack of stacked diff support is a competitive gap that Graphite exploits; AI increases urgency
- [[ai-coding-agents-and-developer-role-shift]] — AI-generated code volume makes human code review the critical bottleneck in engineering workflows
- [[ai-agent-ecosystem]] — Rules engines like Herald/Butterflybot are precursors to AI-driven code governance agents
