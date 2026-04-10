---
last_validated: 2026-04-09
decay_rate: fast
---

# Building Claude Code with Boris Cherny

**Source URL**: https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny
**Date**: March 4, 2026
**Publication**: The Pragmatic Engineer

## Summary

Deep interview with Boris Cherny, creator of Claude Code at Anthropic, revealing how the tool evolved from a side project into a core internal product and how it reshapes the engineering role. Key insights: Claude Code's agentic search uses plain glob and grep (outperforming RAG), Boris ships 20-30 PRs/day via 5 parallel Claude instances, and Claude Cowork was built in ~10 days targeting non-engineers. The broader thesis is that coding is becoming accessible to everyone, shifting the engineer's role from deep single-threaded work to rapid context-switching across parallel agents -- the year of the generalist.

## Key Claims

- Boris ships 20-30 PRs per day by running 5 parallel Claude Code instances, each in a separate checkout; "once there is a good plan, it will one-shot the implementation almost every time."
- Claude Code's agentic search uses glob and grep driven by the model, outperforming RAG, local vector databases, and recursive model-based indexing.
- At Meta, Boris led causal analysis showing clean codebases have a measurable double-digit-percent impact on engineering productivity.
- Claude Cowork was built in ~10 days and is growing faster than Claude Code did at launch; bulk of engineering complexity was safety (classifiers, VM, OS-level protections).
- PRDs are dead on the Claude Code team -- they build dozens of working prototypes before shipping a feature.
- Everyone at Anthropic has the same title ("Member of Technical Staff") to invert role assumptions and encourage generalism.
- Boris's work has shifted from deep-focus coding to managing multiple parallel agents and rapid context-switching.
- Boris automated himself out of code review at Meta by logging repeated review comments in a spreadsheet and writing lint rules after 3-4 occurrences.

## Tags

#claude-code #boris-cherny #anthropic #parallel-agents #agentic-search #claude-cowork #developer-workflow #pragmatic-engineer

## Related

- [[developer-tooling-competitive-landscape]] — Claude Code vs. Cursor vs. Codex; Anthropic's strategy of targeting non-engineers with Cowork
- [[ai-coding-agents-and-developer-role-shift]] — The shift from deep-focus coding to parallel agent management; PRDs replaced by prototypes
- [[token-economics-and-pricing]] — Anthropic revenue and API economics implications of heavy agent usage (20-30 PRs/day)
- [[harness-engineering]] — CLAUDE.md as living institutional memory; every mistake becomes a rule; glob/grep outperforming RAG for code search
