# Dylan Patel — Deep Dive on the 3 Big Bottlenecks to Scaling AI Compute
**Source:** https://www.dwarkesh.com/p/dylan-patel
**Date:** March 13, 2026
**Host:** Dwarkesh Patel (Dwarkesh Podcast)
**Guest:** Dylan Patel (CEO, SemiAnalysis)
**Format:** Podcast transcript (~2.5 hours)

## Summary
Dylan Patel provides a deep dive into the three big bottlenecks to scaling AI compute: logic, memory, and power. He walks through the economics of labs, hyperscalers, foundries, and fab equipment manufacturers.

## Key Claims and Arguments

### H100 Value Appreciation
- An H100 is worth more today than 3 years ago because model improvements make each GPU produce more valuable tokens
- H100 rental deals seen as high as $2.40/hr for 2-3 year terms (cost to deploy: $1.40/hr across 5 years)
- GPU depreciation bears (Michael Burry) were wrong — in a supply-constrained world, older chips appreciate

### AI Lab Compute Race
- Big 4 combined CapEx: ~$600B this year; ~$1T across full supply chain
- ~20 GW incremental capacity added this year
- Anthropic: ~$20B ARR, needs 5+ GW by year-end, was conservative on compute relative to OpenAI
- OpenAI: more aggressive, signed deals with CoreWeave, Oracle, SoftBank Energy, NScale
- Anthropic revenue growth: added $4B ARR in Jan, $6B in Feb
- Both labs targeting ~10 GW by end of next year

### Semiconductor Supply Chain Bottlenecks

#### Logic (TSMC)
- Nvidia getting 70%+ of N3 wafer capacity by 2027
- Nvidia secured TSMC allocation earlier than Google/Amazon
- Google "screwed up" — sold 1M TPU v7s to Anthropic before realizing their own demand
- Google's Gemini ARR was near zero through Q3, then hit $5B ARR in Q4

#### Memory
- 30% of Big Tech CapEx going to memory
- HBM4: 2.5 TB/s bandwidth per stack
- DDR: ~128 GB/s for same shoreline (20x less bandwidth)
- Memory prices tripled; iPhones may cost $250+ more
- Smartphone volumes may drop from 1.1B to 500-600M/year
- 3D DRAM is the hope for end of decade — could change EUV-per-bit economics

#### EUV Tools (ASML)
- ~70 tools/year currently, growing to ~100 by end of decade
- 3.5 EUV tools = 1 GW of AI chip capacity
- 700 EUV tools by 2030 → theoretical 200 GW max (if 100% AI)
- Sam Altman's 52 GW/year target = ~25% share, "very reasonable"
- ASML is "maybe one of the most generous companies in the world" — hasn't raised margins aggressively
- Bottleneck components: Cymer source (San Diego), reticle stage (Connecticut), Zeiss optics (Europe)
- 10,000+ people in ASML's supply chain

### Power
- Not the ultimate bottleneck — many alternatives: gas turbines, aeroderivatives, reciprocating engines, ship engines, fuel cells, solar+battery
- 16+ manufacturers of gas power generation
- Behind-the-meter power: half of capacity by end of decade
- Power can double in cost and only adds $0.10/hr to GPU TCO
- Data centers at 3-4% of US grid today, 10% by 2028

### Space GPUs
- Not happening this decade
- Chips are the bottleneck, not power — you want GPUs producing tokens ASAP
- 15% of Blackwells need RMA'd; sending to space adds months of delay
- Networking between satellites far more expensive/complex than terrestrial
- Maybe makes sense by 2035+ when chip supply catches up

### China
- Fast timelines = US wins; long timelines = China wins
- China may have fully indigenized DUV by 2030, working EUV tools but not mass production
- SMIC/Huawei on 7nm with ASML DUV tools
- Huawei arguably could beat Nvidia "if they had TSMC"
- US model capabilities may diverge as distillation from agents becomes harder

### Alchian-Allen Effect Applied to AI
- If fixed cost of GPU rises, the ratio between premium and commodity model tokens narrows
- Pushes users toward the best models — explains why "all the revenue is on the best models today"
