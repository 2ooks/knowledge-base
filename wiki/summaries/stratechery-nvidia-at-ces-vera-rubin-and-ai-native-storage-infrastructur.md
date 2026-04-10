---
last_validated: 2026-04-09
decay_rate: fast
---

# Nvidia at CES, Vera Rubin and AI-Native Storage Infrastructure, Alpamayo

**Source URL**: https://stratechery.com/2026/nvidia-at-ces-vera-rubin-and-ai-native-storage-infrastructure-alpamayo/
**Date**: January 7, 2026
**Publication**: Stratechery

## Summary

Nvidia announced the Vera Rubin platform at CES with a 10x inference cost reduction over Blackwell and 5x training compute improvement. The most strategically significant element is the BlueField4 DPU and AI-native storage architecture, which solves the KV cache memory bottleneck that limits context windows for reasoning models and multi-agent workloads. By adding 16TB of high-speed SSD per GPU on the east-west network plane, Nvidia enables dramatically longer context windows and shared context for agents working together. Separately, Nvidia launched Alpamayo, a vision-only end-to-end autonomous driving system that validates the Tesla/bitter-lesson approach and positions Nvidia to serve every non-Tesla automaker.

## Key Claims

- Vera Rubin delivers 10x inference cost reduction and 5x training compute improvement over Blackwell.
- The platform consists of 6 chips: Vera CPU, Rubin GPU, NVLink 6th-gen switch, ConnectX-9 NIC, BlueField4 DPU, and Spectrum-X 102.4T CPO.
- Vera Rubin can train a large MoE model in the same time as Blackwell using 1/4 the GPUs at 1/7 the token cost.
- BlueField4 DPU enables AI-native storage with 16TB high-speed SSD per GPU on the east-west (in-rack) network plane.
- KV cache memory grows linearly with context size, becoming a critical bottleneck for reasoning models and multi-agent workloads.
- Memory costs are escalating dramatically as manufacturers shift to high-bandwidth memory for AI chips.
- Nvidia described itself as now the world's largest networking hardware company.
- Alpamayo autonomous driving system is vision-only and end-to-end ML-based, aligning with Tesla's approach.
- Alpamayo is L2 only (driver must pay attention); whether vision alone is sufficient for L4+ remains disputed.

## Tags

#nvidia #vera-rubin #inference #kv-cache #blueField #storage #memory #autonomous-driving #alpamayo #ces

## Related

- [[gpu-and-compute-economics]] — 10x inference cost reduction and the full-system economics of Vera Rubin
- [[inference-architecture-and-scaling]] — KV cache storage architecture as the bottleneck for reasoning models and agents
- [[semiconductor-supply-chain-bottlenecks]] — memory cost escalation from AI demand impacting the entire tech supply chain
- [[ai-agent-ecosystem]] — multi-agent workloads driving the need for shared KV cache and longer context windows
