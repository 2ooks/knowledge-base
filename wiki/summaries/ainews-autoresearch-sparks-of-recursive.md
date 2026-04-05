# AINews: Autoresearch — Sparks of Recursive AI Self-Improvement
- **Source:** https://www.latent.space/p/ainews-autoresearch-sparks-of-recursive
- **Date:** March 9, 2026
- **Author:** Latent.Space (swyx)

## Summary
This AINews roundup (covering March 5–9, 2026) is anchored by what the author calls the "AutoML moment" of 2026: Karpathy's "autoresearch" experiment where an agent-driven loop on nanochat found ~20 additive training improvements and cut "Time to GPT-2" by ~11% (2.02h → 1.80h) via ~700 autonomous changes — with Karpathy naming swarm agents optimizing at scale "the final boss battle for frontier labs." Concurrently, all three major coding agent providers (Anthropic, OpenAI, Cognition) launched PR review products in the same week, with Claude Code's multi-agent review claiming a jump from 16% to 54% meaningful PR comments, signaling that generation is cheap and judgment/verification is now the bottleneck. Harness fragility proves to be the binding constraint on autoresearch: Opus 4.6 sustains 12+ hour / 118-experiment loops while GPT-5.4 "xhigh" cannot reliably follow a simple "LOOP FOREVER" instruction. OpenAI acquires Promptfoo (agentic security testing/evals, stays OSS), and Perplexity "Computer" integrates Claude Code + GitHub CLI for end-to-end fork → implement → submit PR automation, pushing agents toward running business infrastructure.

## Key Claims
- Karpathy's "autoresearch" agent loop improved nanochat "Time to GPT-2" from 2.02h → 1.80h (~11%) via ~700 autonomous changes, with ~20 stackable, transferable training recipe improvements found (norm scalers, regularization, attention tuning, AdamW betas, init)
- Coding agents are shifting the bottleneck from implementation to review/verification — "execution is cheap, judgment is scarce"
- Claude Code multi-agent PR review claims 16% → 54% PRs with meaningful comments and <1% incorrect findings
- OpenAI "Codex Review" pitches usage-based code review pricing as materially cheaper than per-review models
- Cognition "Devin Review" launches as a free PR review tool via URL substitution with autofix and diff features
- Agent loops are harness-constrained, not model-constrained: Opus 4.6 runs for 12+ hours / 118 experiments; GPT-5.4 "xhigh" fails to reliably follow "LOOP FOREVER"
- OpenAI acquires Promptfoo; it remains open-source and will strengthen agentic security testing/evals within OpenAI's platform
- Perplexity "Computer" integrates Claude Code + GitHub CLI for end-to-end fork → implement → PR automation and claims autonomous ad campaign operation via Google/Meta Ads API
- LlamaIndex explicitly pivots from general RAG framework to document OCR infrastructure as the "enduring agent bottleneck"
- Anthropic models hold top 3 positions in Document Arena: Opus 4.6 #1, Sonnet 4.6 #2, Opus 4.5 #3
- Teleport proposes "agentic identity" as a control plane: cryptographic identity, least privilege, and audit trails across MCP/tools
- vLLM demonstrated running fully local MoE assistant (Nemotron 3 Nano 30B) on NVIDIA Jetson with zero cloud APIs

## Tags
#agents #autoresearch #self-improving-ai #coding-agents #pr-review #harness-engineering #evals #security #open-models #inference #agentic-identity

## Related
- [[ainews-everything-is-cli]] — harness engineering thesis; CLI-as-agent-interface
- [[ainews-claude-code-source-leak]] — Claude Code architecture underpinning the multi-agent PR review product
- [[ainews-gemma-4-multimodal]] — open model ecosystem; Gemma 4 rumors referenced here
- [[nates-newsletter-agent-blind-spots]] — production infrastructure gaps; harness > model thesis
