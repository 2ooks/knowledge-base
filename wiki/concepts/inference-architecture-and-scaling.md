# Inference Architecture and Scaling

## Definition
The hardware architectures, system designs, and networking topologies being built to scale AI inference — including GPU-LPU disaggregation, rack-scale systems, and the shift from training-dominated to inference-dominated compute.

## Key Points
- Nvidia's Attention-FFN Disaggregation (AFD): GPUs handle stateful attention (with dynamic KV cache), LPUs handle stateless FFN — using ping-pong pipeline parallelism ([[nvidia-inference-kingdom-expands]])
- Groq LPU: SRAM-based, deterministic execution, very fast but limited memory capacity; complements GPU throughput strengths ([[nvidia-inference-kingdom-expands]])
- LPX rack: 256 LPUs with FPGAs for protocol conversion, up to 256GB DDR5 per FPGA for KV cache ([[nvidia-inference-kingdom-expands]])
- CPO roadmap: copper intra-rack through Rubin Ultra; CPO only for inter-rack starting NVL576 ([[nvidia-inference-kingdom-expands]])
- Kyber rack: 144 GPUs, 72 NVLink 7 switches, 14.4 Tbit/s per GPU scale-up ([[nvidia-inference-kingdom-expands]])
- CMX: NVMe-based KV cache tier for long-context and agentic workloads ([[nvidia-inference-kingdom-expands]])
- Hopper vs Blackwell: 20x performance gap for inference at 100 tok/s for DeepSeek/Kimi K2.5 — far exceeding the FLOPS difference ([[dwarkesh-dylan-patel-interview]])
- Scale-up domains: Nvidia 72 GPUs all-to-all; Google thousands of TPUs in torus; Amazon hybrid ([[dwarkesh-dylan-patel-interview]])
- Vera Rubin: 5x inference throughput of Blackwell, 10x token cost reduction ([[clouded-judgement-per-token-pricing]])

## Open Questions
- Will AFD (GPU+LPU) become the standard inference architecture, or is it Nvidia-specific?
- How will KV cache management evolve as context lengths keep growing?
- When does CPO actually reach volume production?
- Will TPU/Trainium architectures converge toward similar disaggregation patterns?

## Related Concepts
- [[gpu-and-compute-economics]]
- [[semiconductor-supply-chain-bottlenecks]]
- [[token-economics-and-pricing]]
