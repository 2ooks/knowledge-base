---
last_validated: 2026-04-06
decay_rate: slow
---

# Dylan Patel — Deep Dive on the 3 Big Bottlenecks to Scaling AI Compute
- **Source:** https://www.dwarkesh.com/p/dylan-patel
- **Date:** March 13, 2026
- **Host:** Dwarkesh Patel
- **Guest:** Dylan Patel (CEO, SemiAnalysis)

## Summary
A 2.5-hour deep dive into the three bottlenecks to AI compute scaling: logic (TSMC wafers), memory (DRAM/HBM), and power. Dylan argues H100s are worth more today than 3 years ago because better models produce more valuable tokens per GPU. Nvidia secured TSMC allocation early while Google was slow to react. ASML's EUV tool production (~70/year, growing to ~100 by 2030) will be the ultimate constraint — 3.5 tools per gigawatt means a ceiling on annual chip production. Power is solvable through diverse generation (16+ vendor types). Space GPUs won't happen this decade. On the US-China question: fast AI timelines favor the US; slow timelines favor China.

## Key Claims
- H100 rental deals seen at $2.40/hr for 2-3 years (cost: $1.40/hr across 5 years)
- Big 4 CapEx: ~$600B this year; full supply chain: ~$1T
- Anthropic needs 5+ GW by year-end; both labs targeting 10 GW by end of 2027
- Google sold 1M TPU v7s to Anthropic before realizing its own demand — "screwed up"
- 3.5 EUV tools = 1 GW of AI chips; ~700 EUV tools by 2030 = 200 GW theoretical max
- ASML won't scale beyond ~100/year by decade's end despite enormous demand-supply gap
- 30% of Big Tech CapEx going to memory; smartphone volumes may drop from 1.1B to 500-600M/year
- Power can double in cost and only adds $0.10/hr to GPU TCO
- Fast AI timelines → US wins; slow timelines → China wins
- Alchian-Allen effect: rising GPU costs push users toward the best (most expensive) models

## Tags
#compute-scaling #bottlenecks #euv #asml #tsmc #memory #hbm #power #nvidia #anthropic #openai #china #gpu-economics

## Related
- [[nvidia-inference-kingdom-expands]] — GTC 2026 hardware announced here
- [[great-gpu-shortage-rental-capacity]] — demand-side pricing data confirming Dylan's thesis
- [[clouded-judgement-per-token-pricing]] — token economics downstream of compute constraints
- [[fourth-industrial-revolution]] — data center infrastructure context
