# [AINews] Gemma 4: The Best Small Multimodal Open Models
**Source:** https://www.latent.space/p/ainews-gemma-4-the-best-small-multimodal
**Date:** April 3, 2026
**Author:** Latent.Space (swyx)

## Summary
Google DeepMind released Gemma 4 as a family of open-weight models under Apache 2.0 license (a notable shift from prior Gemma licensing). The 31B dense variant ties with Kimi K2.5 (744B-A40B) and Z.ai GLM-5 (1T-A32B) for the world's top open models, but with far less total parameters.

The departures at Allen Institute and limbo status of GPT-OSS have left the future of American Open Models in question, so Google DeepMind keeping up the pace is very welcome.

## Model Lineup
- **31B dense**: ties for #1 among open models
- **26B MoE ("A4B", ~4B active)**: edge-optimized MoE
- **E4B and E2B**: "effective" edge models aimed at mobile/IoT with native multimodal support (text/vision/audio)

## Key Features
- Function calling + structured JSON
- Long context up to 256K (large models)
- Apache 2.0 license (major licensing improvement)
- Natively process video and images, supporting variable resolutions
- Native audio input for speech recognition (E2B, E4B)
- 400M+ downloads and 100K+ variants for Gemma 3

## Architecture Notes
- "Not a standard transformer" — hybrid attention, MoE layering choices
- Per-layer embeddings on small variant
- No explicit attention scale (likely absorbed into norm weights)
- QK norm + V norm, shared K/V for large variant
- Aggressive KV cache sharing on small variant
- Sliding window sizes 512 and 1024, softcapping
- Partial-dimension RoPE with different theta for local/global layers
- Gemma uses MoE blocks as separate layers alongside normal MLP blocks (differs from DeepSeek/Qwen)
- Raschka argues 31B architecture close to Gemma 3 27B — leap likely from training recipe/data

## Ecosystem Support (Day 0)
- llama.cpp, Ollama (0.20+), vLLM (GPU/TPU), LM Studio, Transformers, Modular/MAX
- "Brew install + llama-server" became canonical one-liner
- llama.cpp: Gemma 4 26B A4B Q8_0 on M2 Ultra, 300 t/s, built-in WebUI, MCP support
- Browser-local run via WebGPU/transformers.js

## Broader AI News
- Anthropic "Emotion vectors" — internal emotion concept representations that can be dialed up/down
- Cursor 3: agent-collaboration interface
- ChatGPT on CarPlay (iOS 26.4+)
- OpenAI Codex usage-based pricing in Business/Enterprise
- Perplexity "Computer for Taxes": agentic workflow for federal tax returns
- Karpathy on "LLM Knowledge Bases" (Obsidian + compiled markdown wiki workflow)
