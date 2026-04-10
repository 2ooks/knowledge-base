---
last_validated: 2026-04-09
decay_rate: fast
---

# The AI Engineering Stack

**Source URL**: https://newsletter.pragmaticengineer.com/p/the-ai-engineering-stack
**Date**: May 20, 2025
**Publication**: The Pragmatic Engineer

## Summary

An excerpt from Chip Huyen's "AI Engineering" book defining the three-layer AI stack (application development, model development, infrastructure) and how AI engineering differs from traditional ML engineering. The key shift: AI engineering focuses less on model training and more on model adaptation (prompt engineering + fine-tuning), evaluation of open-ended outputs, and inference optimization. Full-stack engineers increasingly have an advantage over ML engineers because the workflow has inverted -- build the product first, invest in data/models only when the product shows promise. This piece is the definitive framework for understanding the AI engineering discipline and its implications for developer tooling and platform strategy.

## Key Claims

- AI engineering stack has three layers: application development, model development, and infrastructure
- AI engineering is less about model development, more about adapting and evaluating existing models
- For InstructGPT, pre-training consumed up to 98% of overall compute and data resources
- GitHub analysis of 920 AI repositories (500+ stars) showed biggest growth in 2023 was in applications and application development, not infrastructure
- Full-stack engineers increasingly enter AI engineering due to ability to rapidly prototype and iterate
- AI engineering workflow inverts traditional ML: build product first, invest in data/models after validation
- JavaScript APIs growing alongside Python (LangChain.js, Transformers.js, OpenAI Node, Vercel AI SDK)
- Evaluation is the biggest unsolved problem in AI engineering due to open-ended model outputs
- Meta, Google, and Amazon offer higher base salaries for AI engineering roles versus standard SWE roles
- Foundation model availability means ML knowledge is "nice-to-have" not "must-have" for AI engineers

## Tags

#ai-engineering #ai-stack #model-adaptation #inference-optimization #evaluation #prompt-engineering #chip-huyen

## Related

- [[inference-architecture-and-scaling]] — Inference optimization is the critical cost/latency challenge as foundation models scale up
- [[ai-agent-ecosystem]] — Application development layer is where agent interfaces and AI-native products are built
- [[developer-tooling-competitive-landscape]] — JavaScript API growth signals AI engineering tooling expanding beyond Python-centric ML ecosystem
- [[token-economics-and-pricing]] — Inference cost reduction is a major driver of the AI engineering stack's economic viability
- [[ai-coding-agents-and-developer-role-shift]] — Full-stack engineers displacing ML engineers in AI application development
