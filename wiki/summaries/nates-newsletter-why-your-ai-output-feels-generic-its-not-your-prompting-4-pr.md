---
last_validated: 2026-04-09
decay_rate: fast
---

# Why Your AI Output Feels Generic (It's Not Your Prompting)

**Source URL**: https://natesnewsletter.substack.com/p/why-your-ai-output-feels-generic
**Date**: February 5, 2026
**Publication**: Nate's Newsletter

## Summary

Explains that generic AI output is not a prompting failure but a structural artifact of RLHF training, which optimizes models for a median user composite that matches nobody's actual preferences. Identifies four levers beyond prompting -- memory, instructions, tools (including MCP), and style controls -- that allow users to escape the statistical center. The compounding thesis is the strategic core: users who encode corrections over months build a fundamentally different version of the technology, with the gap widening over time. References Boris Cherny's CLAUDE.md workflow as the canonical example.

## Key Claims

- RLHF training optimizes for a hypothetical "typical person" -- the statistical center of thousands of raters' preferences, not any individual user.
- Four distinct personalization levers now exist beyond prompting: memory, instructions, tools/MCP, and style controls.
- ChatGPT supports multi-layer memory (saved memories + chat history reference), project-isolated memory, and connected apps.
- Claude supports custom styles generated from uploaded writing samples, project-specific memory spaces, and memory import/export.
- Gemini's "Personal Intelligence" connects to Gmail, Photos, YouTube, and Search for data-driven personalization.
- Boris Cherny ships 20-30 PRs weekly using multiple parallel Claude sessions; his team adds every mistake to CLAUDE.md so corrections compound.
- The Linux Foundation reports over 10,000 MCP servers for tool integrations.
- Andrej Karpathy's workflow has shifted to ~80% AI agents, representing the frontier of agent-assisted development.

## Tags

#rlhf #personalization #claude-md #memory #mcp #compounding #style-controls #workflow

## Related

- [[ai-coding-agents-and-developer-role-shift]] — Karpathy's 80% agent workflow and Cherny's parallel-session PR shipping as the new developer paradigm
- [[ai-agent-ecosystem]] — MCP as the universal tool integration standard; 10,000+ servers creating agent middleware
- [[harness-engineering]] — CLAUDE.md as institutional memory for coding agents; the compounding correction flywheel
- [[developer-tooling-competitive-landscape]] — Platform comparison across ChatGPT, Claude, and Gemini personalization capabilities
