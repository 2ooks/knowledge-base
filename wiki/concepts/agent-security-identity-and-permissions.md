# Agent Security, Identity, and Permissions

## Definition
The emerging infrastructure requirements for AI agent identity, authentication, authorization, and audit in multi-agent/multi-tenant environments — covering how platforms distinguish agents from humans, enforce least-privilege access, and maintain governance over autonomous actions.

## Key Points
- "Agentic identity" emerging as a distinct infra primitive: Teleport proposes cryptographic identity, least privilege, and audit trails across MCP/tools ([[ainews-autoresearch-sparks-of-recursive]])
- NemoClaw (NVIDIA): zero permissions by default, sandboxed subagents, infra-enforced private inference — security primitives as first-class agent infrastructure ([[ainews-every-lab-serious-enough-about]])
- Claude Code's 5-level permission system and 18-module bash security architecture revealed in source leak ([[ainews-claude-code-source-leak]])
- Permissions/audit trails and security layering identified as 2 of 12 critical infrastructure primitives most builders skip [UNVERIFIED] ([[nates-newsletter-agent-blind-spots]])
- Sandbox security, network isolation, and allow-listing as core harness components ([[langchain-anatomy-of-agent-harness]])
- OpenAI acquired Promptfoo (agent security/evals) — consolidation of evals and security tooling ([[ainews-autoresearch-sparks-of-recursive]])
- As third-party agents (Perplexity Computer, Devin) operate autonomously on GitHub repos, the question of identity/permissions governance becomes urgent ([[ainews-autoresearch-sparks-of-recursive]])
- LangSmith Fleet provides enterprise workspace with memory, permissions, identity, and audit trails for managed agent fleets ([[ainews-every-lab-serious-enough-about]])

## Open Questions
- How should GitHub distinguish commits from different AI agents vs human developers?
- Will "agentic identity" converge on a standard (like OAuth did for web), or remain fragmented?
- What governance model ensures self-modifying agents stay safe and auditable at scale?
- Is agent security a platform opportunity for Microsoft/GitHub (leveraging existing auth/audit infrastructure)?

## Related Concepts
- [[harness-engineering]] — security as a harness primitive
- [[ai-agent-ecosystem]] — agents requiring identity infrastructure
- [[developer-tooling-competitive-landscape]] — security as competitive differentiator
