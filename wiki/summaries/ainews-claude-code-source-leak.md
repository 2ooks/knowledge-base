---
last_validated: 2026-04-06
decay_rate: fast
---

# AINews: The Claude Code Source Leak
- **Source:** https://www.latent.space/p/ainews-the-claude-code-source-leak
- **Date:** March 31, 2026
- **Author:** Latent.Space (swyx)

## Summary
Anthropic accidentally exposed 500K+ lines of Claude Code source via shipped source maps. The leak revealed sophisticated agent architecture patterns: 3-layer memory system with auto-pruning, KV-cache-based subagent parallelism ("fork-join"), a 5-level permission system, ~20 default tools (60+ total), and unreleased features like ULTRAPLAN and KAIROS. OpenAI also closed its largest fundraise, disclosing $24B ARR. Attackers exploited the leak by publishing malicious npm packages targeting people compiling the code.

## Key Claims
- Claude Code has a 3-layer memory: MEMORY.md index → topic files → full session transcripts, plus "autoDream" for merging/pruning memories
- Subagents use KV cache fork-join: parallelism is "basically free" since subagents share the full context
- Less than 20 default tools but 60+ total available (including specialized tools for notebooks, MCP, planning)
- 5-level permission system and 2 types of plan mode
- OpenAI $24B ARR but ChatGPT WAU growth has stalled short of the 1B target
- Security risk: malicious npm packages (color-diff-napi, modifiers-napi) registered to target leak explorers

## Tags
#claude-code #agent-architecture #memory-systems #anthropic #security #open-source #subagents

## Related
- [[ainews-everything-is-cli]] — agent harness engineering trends
- [[ainews-gemma-4-multimodal]] — open model ecosystem for local agents
- [[clouded-judgement-per-token-pricing]] — Anthropic ARR context
