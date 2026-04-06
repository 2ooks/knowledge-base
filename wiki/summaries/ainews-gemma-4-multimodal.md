---
last_validated: 2026-04-06
decay_rate: fast
---

# AINews: Gemma 4 — The Best Small Multimodal Open Models
- **Source:** https://www.latent.space/p/ainews-gemma-4-the-best-small-multimodal
- **Date:** April 3, 2026
- **Author:** Latent.Space (swyx)

## Summary
Google DeepMind released Gemma 4 under Apache 2.0 — a major licensing shift. The 31B dense variant ties with Kimi K2.5 and GLM-5 for top open models with far fewer parameters. The family includes edge-optimized MoE (26B-A4B) and mobile models (E4B, E2B) with native multimodal support including audio. Architecture is notably non-standard: per-layer embeddings, aggressive KV cache sharing, MoE blocks as separate layers alongside MLP blocks. Day-0 ecosystem support across llama.cpp, Ollama, vLLM, and browser-local WebGPU.

## Key Claims
- Gemma 4 31B ties for #1 US open model (Arena leaderboard) with far less total parameters than competitors
- Apache 2.0 license is a major shift from prior Gemma licensing
- Architecture leap likely from training recipe and data, not radical architecture change (per Raschka)
- "Not a standard transformer" — hybrid attention, per-layer embeddings, partial-dimension RoPE with different theta
- Day-0 support: llama.cpp achieves 300 t/s on M2 Ultra for 26B-A4B Q8_0
- On-device capabilities suggest potential basis for Apple's Gemini-powered Siri upgrade
- Karpathy tweeted about "LLM Knowledge Bases" (Obsidian + compiled markdown wiki) on the same day

## Tags
#open-models #gemma #google #multimodal #architecture #edge-ai #local-inference #apache-2.0

## Related
- [[ainews-everything-is-cli]] — open models powering agent stacks
- [[ainews-claude-code-source-leak]] — contrast with closed-source agent approaches
- [[dwarkesh-dylan-patel-interview]] — context on compute constraints for model training
