---
last_validated: 2026-04-09
decay_rate: fast
---

# How to Do AI Analysis You Can Actually Trust

**Source URL**: https://www.lennysnewsletter.com/p/how-to-do-ai-analysis-you-can-actually
**Date**: February 17, 2026
**Publication**: Lenny's Newsletter

## Summary

Caitlin Sullivan, a user research veteran who has trained teams at Canva and YouTube, identifies four failure modes that silently corrupt AI-driven customer analysis: invented evidence (hallucinated quotes), false/generic insights, non-actionable signal, and contradictory insights. Her fix relies on structured prompting -- quote selection rules, verification loops, and deep context loading -- rather than model choice. The strategic implication is that AI-powered analysis is only as reliable as the evaluation and verification framework wrapped around it, reinforcing the emerging pattern that human judgment infrastructure is the bottleneck, not model capability.

## Key Claims

- Same transcripts fed to different LLMs produce different narratives, evidence, and product recommendations with equal confidence
- ChatGPT is most prone to combining/fabricating "verbatim" customer quotes; Claude is most conservative with confidence scores
- Claude recommended as best for analysis work due to depth and breadth while staying rooted in actual data
- Gemini excels at video analysis (non-verbal behaviors) -- unique capability others lack
- ChatGPT best for final stakeholder framing but least reliable for evidence fidelity
- Quote verification prompts catch majority of paraphrased/fabricated quotes in ChatGPT outputs
- Context loading requires four specific components: project context, business goal, product context, and participant overview
- Without structured verification, false but confident-looking insights drive million-dollar decisions in the wrong direction

## Tags

#ai-analysis #user-research #hallucination #prompt-engineering #llm-comparison #verification

## Related

- [[ai-agent-ecosystem]] — verification and eval frameworks as critical infrastructure for AI-driven workflows
- [[inference-architecture-and-scaling]] — model-specific failure modes across Claude, GPT, and Gemini for analytical tasks
- [[vertical-models-and-usage-data]] — domain-specific prompting as proxy for vertical fine-tuning in research contexts
