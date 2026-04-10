---
last_validated: 2026-04-09
decay_rate: fast
---

# AI Engineering with Chip Huyen

**Source URL**: https://newsletter.pragmaticengineer.com/p/ai-engineering-with-chip-huyen
**Date**: February 5, 2025
**Publication**: The Pragmatic Engineer

## Summary

Interview with Chip Huyen (author of O'Reilly's AI Engineering, former NVIDIA/Netflix/Stanford) distinguishing "AI engineering" from ML engineering: AI engineering starts with a product and reaches for models via APIs, while ML engineering starts with model training. Emphasizes that RAG with keyword retrieval (BM25) often outperforms vector search, fine-tuning is a last resort most teams never need, and the biggest mistake is reaching for complex AI solutions when simpler approaches solve the business problem. Argues AI will not eliminate software engineering because it automates coding but not the problem-solving process.

## Key Claims

- AI engineering starts with a product idea and uses pre-trained models via APIs; ML engineering starts with data collection and model training before deployment.
- Keyword retrieval (BM25) should be tried before vector search; vector databases are costly and may obscure specific keywords.
- Fine-tuning is usually a last resort due to hosting complexity and rapid model development making fine-tuned advantages short-lived.
- Common mistakes: using GenAI when not needed, abandoning it without diagnosing where the process fails, jumping to complex solutions without trying simpler approaches.
- Manual data inspection still offers the highest ratio of value in evaluating AI systems.
- AI can enable engineers to build much more complex software but cannot fully automate the problem-solving process.
- Start with human-in-the-loop and gradually increase automation as confidence grows.

## Tags

#ai-engineering #rag #fine-tuning #evaluation #bm25 #chip-huyen #pragmatic-engineer #ml-engineering

## Related

- [[inference-architecture-and-scaling]] — o1/o1-pro reasoning models as a new paradigm; inference-time compute scaling as distinct from training
- [[ai-scaling-limits-and-research-paradigm]] — Fine-tuning as last resort challenges the "bigger model" narrative; practical AI engineering is about product-first iteration
- [[ai-coding-agents-and-developer-role-shift]] — AI automates coding but not problem-solving; software engineering role expands rather than shrinks
- [[developer-tooling-competitive-landscape]] — RAG vs. vector search vs. fine-tuning as a decision framework for AI application architecture
