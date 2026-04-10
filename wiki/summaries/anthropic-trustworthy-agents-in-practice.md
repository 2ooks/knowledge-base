# Trustworthy Agents in Practice

**Source URL:** https://www.anthropic.com/news/trustworthy-agents-in-practice
**Date:** 2026-04-09
**Author:** Anthropic (policy team)

## Source Retrieval Quality
**Full primary source text provided** — complete article text included in issue description. All claims directly attributable to primary source with no [UNVERIFIED] flags needed.

## Summary
Anthropic publishes its framework for building trustworthy AI agents, detailing how their five core principles (human control, alignment with values, security, transparency, privacy) translate into specific product decisions in Claude Code and Claude Cowork. The article defines an agent as an AI model that "directs its own processes and tool use" through a self-directed loop (plan, act, observe, adjust, repeat), built from four components: model (intelligence from training), harness (instructions and guardrails), tools (services/applications the model can use), and environment (where the agent runs and what it can access). Anthropic argues that agent behavior depends on all four layers working together, not just the model, and that safeguards must account for them all. The article details specific implementations (Plan Mode for human oversight, Constitutional AI training for uncertainty detection, multi-layer prompt injection defenses) and calls for ecosystem-wide infrastructure: benchmarks for prompt injection resistance, evidence sharing on agent use, and open standards like the Model Context Protocol.

## Key Claims
- **Four-component agent architecture:** Agents are built from model (intelligence), harness (instructions/guardrails), tools (services/apps), and environment (where it runs/what it accesses); "agents' behavior depends on all four layers working together"; "a well-trained model can still be exploited through a poorly configured harness, an overly permissive tool, or an exposed environment"
- **Agent definition:** An agent is an AI model that "directs its own processes and tool use when accomplishing a task—that is, deciding for itself how to achieve what users want, rather than following a fixed script"; operates in a self-directed loop: "plans, acts, observes the result, adjusts, and repeats until the task is done or it needs to check in for human input"
- **Harness as official Anthropic term:** "A harness refers to the instructions, and the guardrails, that the model operates under"; examples include flagging transactions over $100 or requiring user confirmation before submitting expenses
- **Plan Mode as oversight innovation:** Claude Code's Plan Mode shifts user oversight from individual actions to overall strategy; "rather than asking for approval for each action one-by-one, Claude shows the user its intended plan of action up-front"; "the user can review, edit, and approve the whole thing before anything happens—and can still intervene at any point during its execution"
- **Subagent coordination challenges:** "Increasingly, agents in products like Claude Code hand off some of their work to subagents—other 'Claudes' working in parallel on different parts of a task"; "raise new questions about how users can understand and steer workflows that are no longer neatly visible as a single thread of actions"
- **Training for uncertainty detection:** Anthropic constructs "training scenarios that place Claude in ambiguous situations, and then reinforce Claude's choice to pause, rather than to assume"; Claude's Constitution "reinforces a similar instinct, favoring 'raising concerns, seeking clarification, or declining to proceed' over acting on assumptions"
- **Research on agent check-in behavior:** "On complex tasks, users interrupt Claude only slightly more frequently than on simple ones, but Claude's own rate of checking in roughly doubles"; demonstrates importance of calibrating agents on when to act vs when to defer to humans
- **Prompt injection definition and defenses:** "Prompt injections are malicious instructions hidden inside the content that an agent is asked to process"; Anthropic builds defenses at multiple layers: "train the model to recognize injection patterns, monitor production traffic to block real-world attacks, and have external red-teamers battle test our systems"
- **Security requires multi-party cooperation:** "Even together, these safeguards are not a guarantee, which is why we encourage our customers to think carefully about which tools and data they provide to an agent, which permissions they grant, and which environments they let the agents operate in"
- **Permission model in Claude products:** In Claude.ai and Claude Desktop, "users can choose which tools to enable, and can configure permissions (e.g., always allow, needs approval, block) for each action Claude takes"
- **Ecosystem infrastructure needs:** Three areas where industry, standards bodies, and governments can contribute: (1) Benchmarks for comparing agent systems on prompt injection resistance and uncertainty surfacing, (2) Evidence sharing on how agents are used and where they struggle, (3) Open standards like Model Context Protocol "created as an open standard for how models communicate with external data sources and tools"
- **MCP donated to Linux Foundation:** "We've since donated it to the Linux Foundation's Agentic AI Foundation so that it belongs to the broader community"; rationale: "open protocols allow security properties to be designed into the infrastructure once, rather than patched together one deployment at a time"
- **NIST submission on agentic security:** Anthropic provided submission "to NIST's Center for AI Standards and Innovation (CAISI) on agentic security" with greater technical detail

## Tags
#anthropic #agent-security #harness-engineering #prompt-injection #human-oversight #plan-mode #mcp #model-context-protocol #benchmarks #nist #constitutional-ai #subagents #multi-agent-coordination #trustworthy-ai #agent-governance

## Related
- [[harness-engineering]] — Anthropic's official definition of "harness" as one of four agent components
- [[ai-agent-ecosystem]] — four-component framework (model, harness, tools, environment) for understanding agent behavior
- [[agent-security-identity-and-permissions]] — prompt injection defenses, permission models, multi-layer security
- [[ai-coding-agents-and-developer-role-shift]] — Plan Mode as oversight innovation for complex multi-step tasks
