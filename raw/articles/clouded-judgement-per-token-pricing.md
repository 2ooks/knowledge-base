# Clouded Judgement 3.26.26 - Per Token Pricing
**Source:** https://cloudedjudgement.substack.com/p/clouded-judgement-32626-per-token
**Date:** March 27, 2026
**Author:** Jamin Ball (Clouded Judgement / Altimeter)

## Summary
The companies who figure out pricing and packaging fastest will have a big edge in the AI phase shift. Inference costs are exploding and a new expensive COGS line has entered the picture. The world is moving from GPU hours to token dollars.

## Key Arguments

### Pricing Is the Hardest Problem
- In traditional SaaS: 80%+ gross margins meant pricing mistakes were forgiving
- In AI: every agent action triggers real inference costs — gap between pricing model and cost structure becomes existential
- Token prices are falling fast, hardware efficiency improves every generation, model mix changes constantly
- Companies that get pricing right can capture way more value per customer — ceiling goes from "headcount" to theoretically limitless

### From GPU Hours to Token Dollars
- Current model: rent GPUs by the hour ($2-4/hr for H100), like renting a U-Haul
- Hourly rental made sense for training (big batch job, cost center)
- Now shifting to inference-dominated world
- GB300 NVL72: ~1M tokens/second per rack, ~4B tokens/hour
- Hourly rental of equivalent rack: $150-300/hr
- Token-based pricing at even $0.15-0.20/M tokens: $600-800/hr — 2-4x the hourly rental value
- Mid-tier models ($8-15/M tokens) push into thousands per hour
- "A GPU rented by the hour is priced based on cost of silicon. A GPU monetized by the token is priced based on value of output."

### Jensen's Pareto Frontier
- Tradeoff between throughput (cheap, high-volume tokens) and latency (premium, real-time tokens)
- Different points on the curve command different price points
- Pricing power lives at the premium end (low-latency, high-quality tokens for real-time agents)
- Every hardware generation pushes the frontier outward
- Vera Rubin: 5x inference throughput of Blackwell, 10x token cost reduction

### Credit-Based Pricing Will Win
- Credits: flexible abstraction layer over complex token economics
- Customer buys credits → credits buy outcomes across product suite → operator manages token economics underneath
- Same playbook cloud providers landed on (committed spend across broad services)
- Companies managing this as internal optimization (not customer-facing complexity) will build most durable businesses

### Groq Acquisition in Context
- Groq LPU purpose-built for inference — ultra-low latency token generation
- Integrating into NVIDIA ecosystem with Dynamo inference orchestration
- Building full stack to help GPU operators maximize token revenue, not clock-time rental revenue

## SaaS Market Data (Week of 3/26/26)
- Median NTM growth rate: 13%
- Median Gross Margin: 76%
- Median FCF Margin: 19%
- Median Net Retention: 109%
- Overall Median EV/NTM Rev: 3.1x
- Top 5 Median: 16.1x
