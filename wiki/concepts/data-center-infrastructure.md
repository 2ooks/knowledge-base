# Data Center Infrastructure

## Definition
The physical and software components that compose modern AI data centers — from servers and networking to cooling, power, and storage — and the companies building and reinventing each layer.

## Key Points
- Ball identifies 11 essential data center components, each being reinvented for AI workloads ([[fourth-industrial-revolution]])
- Key vendors: Nvidia/AMD (GPUs), Samsung/Micron/SK Hynix (memory), Arista/Broadcom (switches), Corning/Amphenol (fiber), Asetek/CoolIT (liquid cooling) ([[fourth-industrial-revolution]])
- Real estate-power proximity is a critical bottleneck: power lost in transmission favors co-location ([[fourth-industrial-revolution]])
- Power is solvable through diverse generation: 16+ gas vendor types, behind-the-meter installations, fuel cells, solar+battery ([[dwarkesh-dylan-patel-interview]])
- Modularization is key to scaling: ship integrated blocks (power, cooling, racks) from factories to reduce on-site labor ([[dwarkesh-dylan-patel-interview]])
- Nvidia's Vera ETL256: 256 CPUs in a single liquid-cooled rack; STX: reference storage rack with BlueField-4 ([[nvidia-inference-kingdom-expands]])
- CMX addresses KV cache storage bottleneck via NVMe tier between DRAM and shared storage ([[nvidia-inference-kingdom-expands]])
- Data centers at 3-4% of US grid today, targeting 10% by 2028 ([[dwarkesh-dylan-patel-interview]])
- Space data centers not viable this decade: chip supply, not power, is the binding constraint ([[dwarkesh-dylan-patel-interview]])

## Open Questions
- Which data center components represent the best startup opportunities?
- Will liquid cooling become the default over air cooling for AI workloads?
- How fast will modular/prefabricated data center deployment accelerate?
- At what point does the energy footprint of AI create meaningful political backlash?

## Related Concepts
- [[semiconductor-supply-chain-bottlenecks]]
- [[gpu-and-compute-economics]]
- [[inference-architecture-and-scaling]]
