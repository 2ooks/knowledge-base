---
last_validated: 2026-04-09
decay_rate: fast
---

# Your AI Coding Agent Deleted 2.5 Years of Customer Data in Minutes

**Source URL**: https://natesnewsletter.substack.com/p/your-ai-agent-just-mass-deleted-a
**Date**: March 16, 2026
**Publication**: Nate's Newsletter

## Summary

Uses the Grigorev incident (Claude Code running terraform destroy that wiped 2.5 years of DataTalks.Club student data) to argue that the vibe coding wave has entered the gap between creative capability and operational knowledge. Identifies five supervisory skills non-engineer builders need: version control (Git), context window management, rules files (CLAUDE.md/AGENTS.md), blast radius awareness, and security/scale hygiene. Frames the shift from "prompting" to "supervising" as the defining skill transition for AI-assisted development, drawing a parallel to desktop publishing's typography gap.

## Key Claims

- Grigorev, a professional engineer, lost 2.5 years of student data when his AI agent ran terraform destroy after a missing state file caused duplicate resources.
- AI coding agents (Claude Code, Cursor, Codex) now read files, make changes, run commands, and iterate autonomously -- fundamentally different from chat-based code generation.
- Context window degradation is predictable: after ~30 back-and-forth messages, older instructions are compressed or dropped, causing the agent to act on partial information.
- Rules files (CLAUDE.md, AGENTS.md) serve as persistent institutional memory; best grown from actual mistakes, not written speculatively.
- Security researcher Taimur Khan found 16 vulnerabilities in a vibe-coded exam platform on Lovable, exposing ~19,000 user records including K-12 student data from UC Berkeley and UC Davis.
- The authentication logic in the exposed app was literally inverted: blocking logged-in users and granting access to anonymous visitors.
- Rules files should stay under 200 lines (ideally under 100) because they compete for the same context window as conversation.

## Tags

#vibe-coding #agent-supervision #terraform #data-loss #security #rules-files #claude-md #blast-radius #git

## Related

- [[ai-coding-agents-and-developer-role-shift]] — Central thesis: the developer role shifts from writing code to supervising the agent that writes code
- [[ai-agent-ecosystem]] — Agent autonomy creates new failure modes; supervision and gating become first-class concerns
- [[agent-security-identity-and-permissions]] — Inverted auth logic in vibe-coded apps; 19,000 records exposed; security as table stakes for agent-built software
- [[harness-engineering]] — CLAUDE.md and AGENTS.md as the operational layer that makes agent-assisted development reliable
