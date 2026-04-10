---
last_validated: 2026-04-09
decay_rate: fast
---

# Some Thoughts on the Sutton Interview

**Source URL**: https://www.dwarkesh.com/p/thoughts-on-sutton
**Date**: October 4, 2025
**Publication**: Dwarkesh Patel

## Summary

Patel reflects on his interview with Rich Sutton, steelmanning Sutton's critique that LLMs are not true intelligence because they lack continual learning, learn only from human data, and build models of human speech rather than world models. Patel's counter-thesis is that imitation learning and RL are continuous rather than dichotomous -- pretrained LLMs serve as useful priors that bootstrap RL on ground-truth tasks (IMO gold, working applications). The strategic takeaway is that the current LLM paradigm may be a necessary intermediate step (like fossil fuels) rather than a dead end, but the successor systems will likely incorporate Sutton's vision of continual, self-directed learning.

## Key Claims

- Most compute spent on LLMs is during deployment, yet models learn nothing during inference -- a fundamental inefficiency by the bitter lesson's standard.
- LLMs trained on RLVR extract only O(1) bits per episode despite episodes being tens of thousands of tokens long.
- AlphaGo (initialized on human games) was superhuman but inferior to AlphaZero (bootstrapped from scratch), suggesting human data is a useful but ultimately surpassable prior.
- Imitation learning is functionally short-horizon RL where the episode is one token long.
- Continual learning could potentially be shoehorned onto LLMs, e.g., by making SFT a tool call where outer-loop RL incentivizes the model to teach itself.
- In-context learning already demonstrates something resembling continual learning within the context window; extending information flow across windows could enable true on-the-job learning.
- Even if LLMs reach AGI first, successor systems will almost certainly be based on Sutton's vision of self-directed experiential learning.

## Tags

#bitter-lesson #continual-learning #rl-vs-imitation #world-models #llm-limitations #sutton #alphazero

## Related

- [[ai-scaling-limits-and-research-paradigm]] — Sutton's critique that LLMs are fundamentally sample-inefficient and dependent on exhaustible human data
- [[inference-architecture-and-scaling]] — The deployment compute waste argument -- most FLOPS spent on inference with no learning happening
- [[ai-agent-ecosystem]] — Continual learning as a prerequisite for agents that genuinely learn on-the-job rather than relying on static training
