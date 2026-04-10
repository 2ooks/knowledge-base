---
last_validated: 2026-04-09
decay_rate: fast
---

# In the Matter of OpenAI vs LangGraph

- **Source URL**: https://www.latent.space/p/oai-v-langgraph
- **Date**: April 20, 2025
- **Publication**: Latent Space

## Summary

This piece dissects the core tension in agent engineering between "Big Model take the wheel" (let the reasoning model handle planning and execution with minimal structure) and "Big Workflows" (code-defined chains, now called workflows, with explicit control flow). Harrison Chase (LangGraph) argues that you can replace every LLM call in a workflow with an agent and still have an agentic system, and that the ideal framework lets you move along the spectrum while optimizing for easy-to-change code. The Big Model camp, bolstered by Deep Research and Manus AI succeeding with minimal workflow engineering on top of o3/Claude, points to the Bitter Lesson: hand-tuned workflows get obliterated by the next model update. The piece introduces the IMPACT framework (Intent, Memory, Planning, Auth, Control flow, Tools) as a practical comparison matrix for agent frameworks and argues the real debate is about where the current Pareto frontier sits — not whether both approaches have value.

## Key Claims

- The "Big Model vs Big Workflows" debate is the central tension in agent framework design
- Harrison Chase (LangGraph) calls OpenAI's "Practical Guide to Building Agents" misguided and publishes a word-by-word teardown
- Key workflow argument: you can replace every LLM call in a workflow with an agent and still have an agentic system
- Augment Code found that reducing agents (more context, fewer agents) was key to their #1 SWE-Bench entry
- OpenAI and Gemini's Deep Research success primarily leveraged o3 reasoning with very little workflow engineering
- Hyung Won Chung (OpenAI) noted that adding structure wins short-term but loses as model/inference compute scales — originally about internal architecture but extrapolated to external systems
- AlphaCodium showed workflow value persisting "out of distribution" from Jan release through Nov after o1 release
- IMPACT framework proposed: Intent, Memory, Planning, Auth, Control flow, Tools as comparison axes for agent frameworks
- The productive debate is about where the Pareto frontier currently sits, not whether workflows or agents are categorically better

## Tags

#agent-frameworks #LangGraph #OpenAI #workflows-vs-agents #bitter-lesson #IMPACT #orchestration #agent-engineering

## Related

- [[ai-agent-ecosystem]] — IMPACT framework for comparing agent frameworks; workflows vs agents as the defining architectural debate
- [[developer-tooling-competitive-landscape]] — OpenAI agent platform vs LangGraph vs CrewAI; framework comparison table
- [[harness-engineering]] — workflow/harness design trade-offs; how much structure to impose on agents
- [[ai-scaling-limits-and-research-paradigm]] — Bitter Lesson applied to agent engineering: structure loses as models scale
