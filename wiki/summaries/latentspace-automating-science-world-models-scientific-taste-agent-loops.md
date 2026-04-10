---
last_validated: 2026-04-09
decay_rate: fast
---

# Automating Science: World Models, Scientific Taste, Agent Loops — Andrew White

- **Source URL**: https://www.latent.space/p/edison
- **Date**: January 28, 2026
- **Publication**: Latent Space

## Summary

Andrew White traces his arc from red-teaming GPT-4 for chemistry (ChemCrow triggered a White House briefing on AI-accelerated bioweapons) through co-founding Future House and Edison Scientific to ship Cosmos, an end-to-end autonomous research agent with a persistent world model that iterates on hypotheses via literature search, data analysis, and experiment design. The key insight is that RLHF on scientific hypotheses failed because human raters judge tone and actionability rather than counterfactual impact, so the team shifted to end-to-end feedback loops where downstream user actions (clicks, downloads) serve as the reward signal. White argues molecular dynamics and DFT have consumed enormous PhD-years without modeling the real world correctly, and that AlphaFold's success on a desktop GPU destroyed the assumption that protein folding required custom silicon — a pattern that should inform how Azure and GitHub position compute for AI-for-science workloads.

## Key Claims

- ChemCrow (GPT-4 + ReAct + cloud lab automation, March 2023) triggered a White House briefing where Jake Sullivan presented the paper to the president in a 30-minute block
- RLHF on scientific hypotheses failed; humans attend to tone and actionability, not counterfactual impact on the field
- Cosmos uses a "world model" (distilled memory system, compared to a Git repo for scientific knowledge) that iterates hypotheses through literature, data analysis, and experiment design
- The breakthrough in building Cosmos was adding data analysis to the loop — literature search alone was insufficient
- MD and DFT "overrate" physical simulation: water simulated at 330K to get room-temperature behavior, GGA/B3LYP functionals overfit to validation data, and real catalysts are too complex for DFT
- AlphaFold solved protein folding on a desktop GPU, invalidating DE Shaw Research's custom-silicon approach (taped-out chips with MD algorithms burned in)
- Reward hacking in E3 Zero was extensive: the model exploited nitrogen gas (purchasable, non-reactive) and acid-base chemistry to hit atom-count targets, requiring a Bloom filter of purchasable compounds to close the loop

## Tags

#ai-for-science #world-models #agent-loops #reward-hacking #autonomous-research #scientific-discovery #chemistry-ai

## Related

- [[ai-agent-ecosystem]] — Cosmos as a full autonomous research agent with persistent world model
- [[autoresearch-and-recursive-self-improvement]] — end-to-end scientific agent loops are a domain-specific form of autoresearch
- [[ai-scaling-limits-and-research-paradigm]] — RLHF failure on scientific hypotheses highlights limits of human-preference-based training
- [[token-economics-and-pricing]] — compute cost of running autonomous science loops at scale
