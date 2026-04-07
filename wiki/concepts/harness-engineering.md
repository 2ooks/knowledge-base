# Harness Engineering

## Definition
The discipline of building the middleware layer around foundation models — memory systems, tool registries, orchestration logic, compaction, context management, sandboxes, and evaluation loops — that turns raw model intelligence into production-grade agent behavior. The thesis: the harness, not the model, is the primary differentiator for production AI agents.

## Key Points
- "Agent = Model + Harness" — the harness is everything that isn't the model itself: system prompts, tools/MCPs, bundled infrastructure, orchestration logic, hooks/middleware ([[langchain-anatomy-of-agent-harness]])
- LangChain improved from outside Top 30 to Top 5 on Terminal Bench 2.0 by only changing the harness (using Opus 4.6) — best harness for a task is not necessarily the one a model was post-trained with ([[langchain-anatomy-of-agent-harness]])
- Agent loops are harness-constrained, not model-constrained: Opus 4.6 sustains 12+ hours / 118 experiments; GPT-5.4 "xhigh" fails on "LOOP FOREVER" ([[ainews-autoresearch-sparks-of-recursive]])
- "80% plumbing, 20% model" — gap between demo-grade and production-grade agents is almost entirely infrastructure [UNVERIFIED] ([[nates-newsletter-agent-blind-spots]])
- Filesystems are the most foundational harness primitive: workspace, incremental offloading, state persistence, multi-agent collaboration surface ([[langchain-anatomy-of-agent-harness]])
- Context rot: models degrade as context fills; harnesses manage via compaction, tool call offloading, and progressive disclosure (Skills) ([[langchain-anatomy-of-agent-harness]])
- Ralph Loop: harness pattern that intercepts model's exit attempt and reinjects original prompt in clean context window ([[langchain-anatomy-of-agent-harness]])
- Models and harnesses are co-trained in production (Claude Code, Codex), creating overfitting risk — changing apply_patch logic degrades performance ([[langchain-anatomy-of-agent-harness]])
- Claude Code architecture: 3-layer memory (index → topics → transcripts), KV cache fork-join subagents, 5-level permissions, ~60 tools ([[ainews-claude-code-source-leak]])
- "Harness engineering" named as a category: middleware, memory, task orchestration, tool interfaces, and evaluation loops around base models are the real product ([[ainews-everything-is-cli]])
- Continual learning at three layers: Model (weights), Harness (Meta-Harness: traces → evaluate → coding agent fixes), Context (CLAUDE.md / SOUL.md) ([[langchain-continual-learning-for-ai-agents]])
- Meta-Harness pattern: harness that analyzes own traces to fix its own failures — active research frontier ([[langchain-anatomy-of-agent-harness]])
- 12 infrastructure primitives most builders skip: tool registry, memory, orchestration, observability, security, session persistence, workflow state, permissions, agent identity, testing, error handling, versioning [UNVERIFIED] ([[nates-newsletter-agent-blind-spots]])
- Hermes Agent procedural memory: converts successful workflows into reusable skills automatically, treating memory as layered system (persistent notes, searchable session history in SQLite, user modeling, skills as procedures) ([[turingpost-hermes-agent-openclaw-rival]])
- Architectural divergence in self-hosted agents: OpenClaw uses Gateway control plane (central coordinator); Hermes uses AIAgent loop as core with gateway/cron/tooling/ACP structured around it — different centers of gravity ([[turingpost-hermes-agent-openclaw-rival]])
- Agent Communication Protocol (ACP): standardized way for external tools (e.g., code editors) to talk to agents — Hermes integration demonstrates interoperability pattern ([[turingpost-hermes-agent-openclaw-rival]])
- Three-agent GAN-inspired architecture (Planner/Generator/Evaluator): Anthropic's approach to long-running development sessions, separating planning, generation, and evaluation to prevent bias and enable multi-hour/multi-day autonomous work [UNVERIFIED] ([[anthropic-harness-design-long-running-apps]])
- Context anxiety and task drift: challenges in long-running agents where models prematurely conclude tasks or lose coherence as context fills; addressed via structured context handoffs and context reset mechanisms [UNVERIFIED] ([[anthropic-harness-design-long-running-apps]])
- Structured context handoffs: serialized artifacts (plans, code, specs) persist state between agent sessions; fresh agents receive explicit state to maintain continuity without overfilling context windows [UNVERIFIED] ([[anthropic-harness-design-long-running-apps]])
- Iterative evaluation cycles: 5–15 generation/evaluation iterations per task using Playwright MCP and weighted rubrics for both objective (functionality) and subjective (design, craft) quality [UNVERIFIED] ([[anthropic-harness-design-long-running-apps]])
- Git-based coordination for multi-day workflows: state and artifacts preserved across long autonomous development sessions [UNVERIFIED] ([[anthropic-harness-design-long-running-apps]])
- MCP (Model Context Protocol) as standardized tool/resource registry primitive: Anthropic's protocol for connecting LLMs to external data/APIs/tools; TypeScript and Python are "the most commonly used MCP SDKs"; `server.tool()` method's "name, description, Zod schema, and handler function are the heart of MCP"; all operations require explicit user consent via Claude Desktop's "always allow, allow once, or deny" approval flow ([[thenewstack-mcp-server-tutorial]])
- MCP server architecture pattern: define tool schemas with validation (Zod), implement handlers returning structured responses (`{content: [{type: "text", text: ...}]}`), serve via stdio transport (`StdioServerTransport`); production requires error handling, authentication, logging to stderr (for STDIO servers), Zod-based input validation; Claude Desktop reads config only on startup, requiring quit/relaunch after changes ([[thenewstack-mcp-server-tutorial]])
- OpenAI's "harness engineering" paradigm: engineers no longer write code but instead design environments, specifications, guardrails, and feedback loops to guide AI agents; OpenAI's internal experiment shipped 1M LOC product with zero manually-written code, all generated by Codex (GPT-5.3) [UNVERIFIED] ([[openai-harness-engineering]])
- Harness maturation drives productivity: improvements came from refining the harness itself (better instructions, specs, tests) not from editing agent-generated code [UNVERIFIED] ([[openai-harness-engineering]])
- AGENTS.md scaffolding pattern: repository structure, CI/CD setup, formatting rules, and agent guidance files generated/orchestrated by AI and refined iteratively [UNVERIFIED] ([[openai-harness-engineering]])
- Harness as constraint and empowerment: increases correctness probability, catches errors before human review, enables production-scale reliability — the ideal harness minimizes manual code review [UNVERIFIED] ([[openai-harness-engineering]])

## Open Questions
- Will harness patterns converge into a standard (like web frameworks did), or remain fragmented?
- Can the Meta-Harness pattern (agents fixing their own harness) work reliably in production?
- Does harness co-training with models create lock-in that disadvantages open-source alternatives?
- How should Microsoft/GitHub position in the harness layer — build vs partner vs acquire?
- Can the three-agent GAN-inspired architecture (Planner/Generator/Evaluator) scale beyond coding to other long-running autonomous workflows?

## Related Concepts
- [[ai-agent-ecosystem]] — the broader ecosystem context
- [[developer-tooling-competitive-landscape]] — harness differences as competitive differentiators
- [[autoresearch-and-recursive-self-improvement]] — harnesses enabling autonomous improvement loops
- [[agent-security-identity-and-permissions]] — security as a harness primitive
