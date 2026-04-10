---
last_validated: 2026-04-10
decay_rate: fast
---

# Scaling Managed Agents: Decoupling the Brain from the Hands

**Source URL:** https://www.anthropic.com/engineering/scaling-managed-agents
**Date:** 2026-04-10
**Author:** Lance Martin, Gabe Cemaj, Michael Cohen (Anthropic Engineering)

## Source Retrieval Quality
**Full primary source text provided** — complete article text included in issue description. All claims directly attributable to primary source with no [UNVERIFIED] flags needed.

## Summary
Anthropic Engineering describes the architecture of Managed Agents — their hosted service for long-horizon agent work — built around the insight that harnesses encode assumptions about model limitations that go stale as models improve. The system decouples three virtualized components: session (append-only event log), harness (the loop calling Claude and routing tool calls), and sandbox (execution environment for code/files), each swappable independently via stable interfaces. This "meta-harness" design follows the operating system pattern of virtualizing hardware into abstractions that outlast implementations. The key architectural move is separating the "brain" (Claude + harness) from the "hands" (sandboxes/tools) via a uniform `execute(name, input) → string` interface, making containers cattle instead of pets and enabling credential isolation where tokens are never reachable from the sandbox. The result: p50 TTFT dropped ~60% and p95 dropped >90%, because inference can start before containers provision.

## Key Claims
- **Meta-harness architecture:** Managed Agents virtualizes agent components (session, harness, sandbox) as independent interfaces, following the OS pattern of virtualizing hardware into abstractions general enough for "programs as yet unthought of"
- **Harness assumptions go stale:** Claude Sonnet 4.5 exhibited "context anxiety" (wrapping up tasks prematurely near context limit), addressed by adding context resets to the harness; when the same harness ran on Opus 4.5, the behavior was gone — "the resets had become dead weight"
- **Pets vs cattle:** Initial design placed all components in a single container, creating a "pet" that couldn't fail without losing the session; debugging required opening a shell inside a container that held user data, making it impossible to debug safely
- **Brain/hands decoupling:** The harness leaves the container and calls it like any other tool: `execute(name, input) → string`; containers become cattle — if one dies, the harness catches the failure as a tool-call error and passes it to Claude for retry; new containers reinitialized with `provision({resources})`
- **Harness as cattle:** Session log sits outside the harness, so nothing in the harness needs to survive a crash; new harness reboots with `wake(sessionId)`, calls `getSession(id)` to get the event log, resumes from the last event; writes to session via `emitEvent(id, event)` for durable record
- **Security boundary — credentials never in sandbox:** In the coupled design, prompt injection only had to convince Claude to read its own environment to get credentials; "Claude is getting increasingly smart" so narrow scoping is an assumption that goes stale; structural fix: tokens never reachable from sandbox
- **Git token bundling:** Repository access tokens clone the repo during sandbox initialization and wire into local git remote; `git push` and `git pull` work without the agent handling the token itself
- **MCP OAuth vault proxy:** For custom tools, OAuth tokens stored in secure vault; Claude calls MCP tools via dedicated proxy that takes session token, fetches credentials from vault, makes the call; harness never sees credentials
- **Session as durable context object:** Session provides context object living outside Claude's context window via `getEvents()` interface; allows positional slices of event stream — pick up from last read, rewind before specific moment, reread before specific action; separates recoverable context storage (session) from arbitrary context management (harness)
- **Performance gains:** Decoupling means containers provisioned only when needed via tool call; sessions not needing containers don't wait; p50 TTFT dropped roughly 60%, p95 dropped over 90%
- **Many brains, many hands:** Scaling to many brains = starting many stateless harnesses; each hand is a tool via `execute(name, input) → string` supporting any custom tool, MCP server, or Anthropic's own tools; "the harness doesn't know whether the sandbox is a container, a phone, or a Pokémon emulator"
- **Brains can pass hands:** Because no hand is coupled to any brain, brains can pass hands to one another
- **VPC connectivity solved:** Decoupling eliminated the assumption that resources sat next to the harness; customers no longer need to peer their network with Anthropic's to connect Claude to their VPC

## Tags
#anthropic #managed-agents #meta-harness #harness-engineering #brain-hands-decoupling #pets-vs-cattle #agent-security #credential-isolation #session-management #context-engineering #ttft #performance #mcp #oauth-vault

## Related
- [[anthropic-harness-design-long-running-apps]] — prior Anthropic work on GAN-inspired three-agent architecture for long-running sessions
- [[anthropic-trustworthy-agents-in-practice]] — Anthropic's four-component agent framework (model, harness, tools, environment) and security responsibility at deployment layer
- [[langchain-anatomy-of-agent-harness]] — LangChain's "Agent = Model + Harness" framework; Managed Agents implements this at platform scale
- [[openai-harness-engineering]] — OpenAI's harness engineering paradigm; three-way convergence on "harness > model" thesis
- [[harness-engineering]] — meta-harness as the next evolution of harness engineering
- [[ai-agent-ecosystem]] — managed agent fleets, many brains many hands pattern
- [[agent-security-identity-and-permissions]] — credential isolation via Git token bundling and MCP OAuth vault proxy
