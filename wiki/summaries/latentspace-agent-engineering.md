---
last_validated: 2026-04-09
decay_rate: fast
---

# Agent Engineering

**Source URL**: https://www.latent.space/p/agent
**Date**: March 24, 2025
**Publication**: Latent Space (swyx)

## Summary

swyx synthesizes 250+ definitions of "agent" into a six-element IMPACT framework: Intent, Models+tools, Planning, Authority, Control flow, and long-running memory (Time). The piece argues that MCP is winning as the standard for agent-tool integration, that reasoning models (o1/o3, Claude 3.5) reignited agent viability, and that the field is entering a sustained build phase driven by 1000x cost drops, multi-model diversity, and RL fine-tuning. For BD, the key signal is that agent engineering is becoming a distinct discipline with its own infrastructure stack -- the companies that own the harness layer (orchestration, auth, memory, evals) will capture durable value.

## Key Claims

- The IMPACT framework identifies six elements every agent needs: Intent (goals + evals), Models + tools, Planning (editable plans), Authority (delegated trust), Control flow (LLM-driven), and long-running memory (Time).
- OpenAI's TRIM definition omits memory, planning, and auth -- critical gaps for enterprise agent deployments.
- MCP is winning the long tail of tool integration, becoming the connective tissue for agent-tool interop.
- Agent reliability doubles every 3-7 months per METR benchmarks.
- ChatGPT's growth reacceleration directly tracks reasoning/agent model releases.
- Business model shifts toward $2-20K ChatGPT tiers and outcome-based pricing (Sierra) signal the transition from per-seat to per-task economics.
- 100% structured output reliability and BFCLv3 tool-use benchmarks are key enablers of the current agent wave.
- Reasoning model cost is following GPT-4's cost drop curve (1000x Moore's Law equivalent).

## Tags

#agent-engineering #impact-framework #mcp #reasoning-models #agent-reliability #harness-layer #outcome-pricing

## Related

- [[ai-agent-ecosystem]] — Defines the six-element agent framework and tracks the hot/cold sentiment cycle from AutoGPT through the current build phase
- [[harness-engineering]] — IMPACT framework directly maps to harness components: orchestration (control flow), auth, memory, evals
- [[developer-tooling-competitive-landscape]] — MCP winning the tool integration standard and multi-model diversity creating openings for gateway/routing layers
- [[token-economics-and-pricing]] — 1000x cost drops and outcome-based pricing as catalysts for agent economic viability
