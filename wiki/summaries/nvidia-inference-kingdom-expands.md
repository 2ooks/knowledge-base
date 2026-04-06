---
last_validated: 2026-04-06
decay_rate: slow
---

# Nvidia – The Inference Kingdom Expands
- **Source:** https://newsletter.semianalysis.com/p/nvidia-the-inference-kingdom-expands
- **Date:** March 23, 2026
- **Authors:** Dylan Patel, Myron Xie, Daniel Nishball, et al. (SemiAnalysis)

## Summary
SemiAnalysis's deep-dive into Nvidia's GTC 2026 announcements. Nvidia "acquired" Groq for $20B (structured as IP license + team hire to avoid antitrust review) and is integrating the LPU into its inference stack. The LP30 chip pairs with GPUs via Attention-FFN Disaggregation (AFD) — GPUs handle attention, LPUs handle stateless FFN computation. New systems include LPX rack (256 LPUs), Vera ETL256 (256 CPUs), and STX storage racks. The CPO roadmap shows copper within racks through Rubin Ultra, with CPO only for inter-rack scale-up starting with NVL576. Feynman NVL1152 targets 8x Kyber racks with all-CPO between racks.

## Key Claims
- Nvidia paid $20B for Groq, structured to avoid regulatory approval — instant IP/team access
- LP30: 500MB on-chip SRAM, 1.2 PFLOPs FP8, on Samsung SF4 (not constrained like TSMC N3)
- AFD separates attention (GPU, stateful) from FFN (LPU, stateless) with ping-pong pipeline parallelism
- No CPO for intra-rack scale-up in Rubin Ultra — copper only; CPO begins at NVL576 for inter-rack
- Kyber rack: 144 GPUs, 72 NVLink 7 switches, each GPU with 14.4 Tbit/s uni-di scale-up bandwidth
- CMX addresses KV cache bottleneck for long-context/agentic workloads via NVMe tier between DRAM and shared storage
- Vera ETL256: 256 CPUs in single liquid-cooled rack for RL simulation/preprocessing at scale

## Tags
#nvidia #gtc-2026 #groq #inference #lpu #afd #cpo #networking #rubin #feynman #kvcache

## Related
- [[dwarkesh-dylan-patel-interview]] — Dylan Patel's broader compute scaling thesis
- [[great-gpu-shortage-rental-capacity]] — demand-side of the inference compute crunch
- [[fourth-industrial-revolution]] — data center component taxonomy
- [[clouded-judgement-per-token-pricing]] — inference economics and token monetization
