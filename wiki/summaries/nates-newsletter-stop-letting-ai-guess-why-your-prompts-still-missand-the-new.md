---
last_validated: 2026-04-09
decay_rate: fast
---

# Stop Letting AI Guess: Why Your Prompts Still Miss -- And the New Prompt Technique That Dramatically Improves Accuracy

**Source URL**: https://natesnewsletter.substack.com/p/stop-letting-ai-guess-why-your-prompts
**Date**: August 4, 2025
**Publication**: Nate's Newsletter (Substack)

## Summary

The article introduces "contract-first prompting" -- a protocol where the LLM must systematically ask clarifying questions until reaching 95% confidence before executing, then present an echo check (one-sentence contract) for human approval. The core argument is that intent transfer between humans and LLMs is a coordination problem, not a communication problem, and requires negotiation rather than better broadcasting. This matters strategically because as AI agents handle higher-stakes work and spawn sub-agents, the contract protocol becomes essential infrastructure for agent-to-agent coordination -- not just human-to-AI interaction.

## Key Claims

- Intent transfer is the core prompting problem: the model doesn't know what you mean, it knows what tokens like yours usually mean in similar contexts.
- Contract-first prompting introduces bilateral agreement before execution: the model asks questions until 95% confidence, presents an echo check, and waits for approval.
- The echo check prevents context drift by creating an immutable anchor point early in the context window.
- Each clarifying question reduces entropy in the problem space; 95% confidence threshold matches the standard used across scientific disciplines.
- The protocol becomes more valuable as models become more capable: more capability means more possible interpretations to verify.
- Multi-agent future: without contracts, agent coordination is chaos; with contracts, each interaction begins with negotiation and ends with agreement.
- Applied successfully across software architecture, document creation, data analysis, API design, marketing copy, legal documents, and strategic planning.
- This is positioned as the first public documentation of this approach (author's claim).

## Tags

#contract-first-prompting #intent-transfer #prompt-engineering #coordination-protocol #agent-coordination #specification

## Related

- [[ai-agent-ecosystem]] — contract-first protocol scales to agent-to-agent coordination in multi-agent systems
- [[ai-coding-agents-and-developer-role-shift]] — specification as the scarce skill; contract-first operationalizes intent-to-spec translation
- [[harness-engineering]] — verification of mutual understanding before execution as a harness-level concern
- [[autoresearch-and-recursive-self-improvement]] — as models become more capable, the space of possible interpretations grows, making contracts more essential
