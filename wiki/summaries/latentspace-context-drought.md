---
last_validated: 2026-04-09
decay_rate: fast
---

# AINews: Context Drought

- **Source URL**: https://www.latent.space/p/ainews-context-drought
- **Date**: March 14, 2026
- **Publication**: Latent Space

## Summary

This AINews roundup is anchored by Anthropic's GA of 1M context windows (78.3% MRCR v2 at 1M tokens), which arrives two full years after Gemini first demonstrated 1M context and just after OpenAI's own GA — making context window growth substantially slower than cost, speed, or quality improvements. The core thesis is "context rationing": global HBM and DRAM shortages physically constrain context window expansion, and Latent Space bets context windows will not meaningfully exceed 1M in the next two years. The issue covers MCP ergonomics debates, persistent memory as the emerging agent differentiator (IBM work improved AppWorld task completion from 69.6% to 73.2%), sparse attention optimizations yielding 1.2x end-to-end speedup on GLM-5 (744B), Microsoft validating NVIDIA Vera Rubin NVL72 as the first cloud, and coding agents moving toward multi-agent software factory patterns.

## Key Claims

- Context windows have grown less than 1 order of magnitude in 2 years — much slower than cost/speed/quality improvements
- Anthropic's 1M context GA achieves 78.3% on MRCR v2 at 1M tokens, a new long-context high watermark
- Anthropic removed the extra API charge for long context and dropped the beta header requirement
- Latent Space bets context windows will not meaningfully exceed 1M in the next 2 years, citing HBM/DRAM physical constraints
- IBM work on extracting reusable tips from agent trajectories improved AppWorld task completion from 69.6% to 73.2% and scenario goals from 50.0% to 64.3%
- IndexCache achieves ~1.2x end-to-end speedup on GLM-5 (744B) by reusing sparse-attention index information across layers
- Microsoft is the first cloud validating an NVIDIA Vera Rubin NVL72 system
- RandOpt/Neural Thickets from MIT claims Gaussian noise + ensembling on pretrained weights can rival GRPO/PPO on reasoning, coding, and other tasks

## Tags

#context-windows #memory-shortage #HBM #inference #sparse-attention #agent-memory #MCP #software-factory #NVIDIA-Rubin

## Related

- [[token-economics-and-pricing]] — context rationing as a new pricing dimension; Anthropic removing long-context surcharges
- [[gpu-and-compute-economics]] — HBM/DRAM shortage as the binding physical constraint on context window growth
- [[inference-architecture-and-scaling]] — sparse attention optimizations, IndexCache, KV cache serving innovations
- [[semiconductor-supply-chain-bottlenecks]] — memory shortage directly limits context window scaling
- [[ai-agent-ecosystem]] — persistent memory and multi-agent factory patterns as agent differentiators
