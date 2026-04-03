# Nvidia – The Inference Kingdom Expands
**Source:** https://newsletter.semianalysis.com/p/nvidia-the-inference-kingdom-expands
**Date:** March 23, 2026
**Authors:** Dylan Patel, Myron Xie, Daniel Nishball, et al. (SemiAnalysis)
**Note:** Partially paywalled — public section summarized below.

## Summary
At GTC 2026, Nvidia delivered an event packed with groundbreaking announcements. Three entirely new systems: Groq LPX, Vera ETL256, and STX. Updates to Kyber rack architecture, CPO roadmap, and Rubin Ultra NVL576/Feynman NVL1152 multi-rack systems.

## Groq Acquisition and LPU Integration
Nvidia paid Groq $20B to license their IP and hire most of the team. Structured to avoid regulatory scrutiny of a full acquisition. Less than 4 months after the deal, Nvidia already has a system concept being integrated into the Vera Rubin inference stack.

### LPU Architecture
- Groq LPU uses groups of single-purpose "slices" (VXM for vector ops, MEM for load/store, SXM for shape manipulation, MXM for matrix multiplication)
- Single-level scratchpad SRAM instead of multi-level memory hierarchy for deterministic execution
- LPU gen 1 on GlobalFoundries 14nm; designed/packaged entirely in USA
- LPU gen 2 (Samsung SF4X) was never productized due to SerDes issues
- **LP30 (LPU gen 3)**: near reticle size, 500MB on-chip SRAM, 1.2 PFLOPs FP8
- **LP35**: minor refresh on SF4, adds NVFP4 format
- **LP40 (future)**: TSMC N3P, CoWoS-R, NVLink protocol, hybrid bonded DRAM

### Attention FFN Disaggregation (AFD)
GPUs handle attention (stateful, dynamic KV cache), LPUs handle FFN (stateless, deterministic). Uses ping-pong pipeline parallelism between GPUs and LPUs to hide communication latency.

### Speculative Decoding
LPUs can accelerate draft models or MTP layers. Usually boosts output by 1.5-2 tokens per decode step.

## LPX Rack System
- 16 compute trays, each with 16 LPUs + 2 Altera FPGAs + Intel Granite Rapids CPU + BlueField-4
- LPUs mounted belly-to-belly on PCB
- FPGAs serve as "Fabric Expansion Logic" — NIC converting LPU C2C to Ethernet, also connect to host CPU and carry up to 256GB DDR5 each

## Nvidia CPO Roadmap
- Rubin: NVL72 Oberon all copper
- Rubin Ultra: NVL72 copper, NVL144 Kyber copper, NVL288 copper, NVL576 CPO between racks
- Feynman: NVL1152 — 8x Kyber rack, copper within rack, CPO between racks
- Three technical innovations in Feynman: hybrid bonding/SoIC, A16, CPO, custom HBM

## Oberon and Kyber Updates
- Kyber rack: 36 compute blades (4x Rubin Ultra GPU + 2x Vera each), 144 GPUs/rack
- 72 NVLink 7 switches per rack
- NVL288: two NVL144 Kyber racks with copper backplane
- NVL576: 8 Oberon racks with CPO scale-up between racks

## Vera ETL256 (CPU Rack)
- 256 CPUs in a single liquid-cooled rack
- Spectrum-X multiplane topology
- All-to-all connectivity over Ethernet through single flat network

## CMX and STX (Storage/Memory)
- **CMX**: Context memory storage platform for KV cache offload (NVMe tier between DRAM and shared storage)
- **STX**: Reference storage rack architecture using BlueField-4
- All major storage vendors supporting STX
