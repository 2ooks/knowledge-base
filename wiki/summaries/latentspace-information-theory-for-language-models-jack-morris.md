---
last_validated: 2026-04-09
decay_rate: fast
---

# Information Theory for Language Models: Jack Morris

- **Source URL**: https://www.latent.space/p/information-theory-for-language-models
- **Date**: July 2, 2025
- **Publication**: Latent Space

## Summary

This podcast profiles AI PhD grad Jack Morris, whose research applies information theory to understand LLM internals — from embedding inversion (proving text embeddings reveal almost as much as the original text) to measuring that GPT-style models memorize approximately 3.6 bits per parameter, to a method for approximating training data directly from model weights. Morris argues "there are no new ideas in AI, only new datasets," framing the last decade of AI progress as fundamentally data-driven rather than algorithmic. His work on contextual document embeddings and the universal geometry of embedding spaces has direct implications for understanding model capacity limits, the security implications of open-weights releases (what can be recovered from DeepSeek R1's 1.2TB of weights), and how efficiently models store and compress information — all of which bear on scaling economics and the viability of open model distribution.

## Key Claims

- GPT-style language models memorize approximately 3.6 bits per parameter, with memorization-datasize curves that plateau sharply
- Text embeddings reveal almost as much information as the original text (embedding inversion research)
- A new method can approximate language model training data directly from weights by reversing LLM fine-tuning
- Morris's thesis: "There are no new ideas in AI, only new datasets" — progress is data-driven, not algorithm-driven
- V-usable information (measuring information based on extractability, not just existence) changes how to think about representation quality
- DeepSeek R1 weights are 1.2TB — the research raises questions about what can be recovered from open-weights releases
- Contextual document embeddings improve retrieval by conditioning embeddings on the corpus context

## Tags

#information-theory #embeddings #model-capacity #memorization #training-data-recovery #open-weights #scaling #data-driven-AI

## Related

- [[ai-scaling-limits-and-research-paradigm]] — 3.6 bits/param capacity limit; data-driven progress thesis challenges pure scaling narratives
- [[inference-architecture-and-scaling]] — embedding geometry and compression efficiency bear on serving and retrieval architectures
- [[open-models-and-local-inference]] — security implications of open-weights releases; what training data can be recovered from weights
- [[token-economics-and-pricing]] — model capacity limits inform cost-per-bit economics of training and serving
