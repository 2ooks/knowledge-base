# Thoughts on AI Progress (Dec 2025)
- **Source:** https://www.dwarkesh.com/p/thoughts-on-ai-progress-dec-2025-video
- **Date:** December 23, 2025
- **Author:** Dwarkesh Patel

## Summary
Dwarkesh Patel argues there's a fundamental contradiction in AI progress: if we're actually close to AGI, the current approach of pre-baking skills through massive RL training is pointless; if we're not, AGI isn't imminent. He observes that labs are building elaborate "mid-training" supply chains with companies creating RL environments to teach models specific skills (web browsers, Excel, financial modeling), which only makes sense if models will continue to be poor at generalizing and on-the-job learning. Using robotics as a litmus test—humans can teleoperate hardware with minimal training while AI needs to visit thousands of homes to learn dish-washing—Patel concludes the core capability of sample-efficient, generalizable learning is missing. He critiques the idea that RL scaling will "launder the prestige" of pretraining scaling, noting there's no well-fit publicly known trend for RLVR (Toby Ord estimates a 1,000,000x scale-up would be needed for GPT-level gains). Patel predicts AGI will arrive in the "next decade or two" but argues the main post-AGI improvement driver will be continual learning via experience, not software-only singularity.

## Key Claims
- There's a tension between short AGI timelines and bullishness on RLVR scaling: either models will learn on-the-job soon (making pre-baking pointless) or they won't (making AGI not imminent)
- Labs are building elaborate "mid-training" supply chains where entire companies create RL environments to teach models how to use specific software (browsers, Excel, etc.)
- Robotics is "in some fundamental sense, an algorithms problem" — humans can teleoperate current hardware with little training, so human-like learner would largely solve robotics; instead, AI needs to visit thousands of different homes to learn dishwashing or laundry folding
- The "automated researcher will figure out AGI" argument is implausible: "somehow this automated researcher is going to figure out the algorithm for AGI...while not having the basic learning capabilities that children have"
- Human labor is valuable "precisely because we don't need to build schleppy training loops for every small part of their job" — example of biologist identifying macrophages in a lab-specific context
- "Economic diffusion lag is cope" — if models were AGI-level, they'd diffuse faster than human employees (could read entire Slack/Drive in minutes, no hiring risk); the reason lab revenues are "4 orders of magnitude off" trillions is that models aren't near human knowledge worker capability
- Goal post shifting is justified: "we keep solving what we thought were the sufficient bottlenecks to AGI...and yet we still don't have AGI"; reasonable to update definitions as we learn more
- RL scaling is "laundering the prestige of pretraining scaling" — pretraining had clean multi-order-of-magnitude trends; for RLVR "we have no well fit publicly known trend"; Toby Ord's analysis suggests "we need something like a 1,000,000x scale-up of total RL compute to give a boost similar to a GPT level"
- Models "keep getting more impressive at the rate the short timelines people predict, but more useful at the rate the long timelines people predict"
- The future post-AGI improvement driver will be continual learning: agents doing jobs, bringing learnings back to "hive mind model" for batch distillation; "solving" continual learning will be gradual like in-context learning, not one-and-done
- Expects AGI "in the next decade or two"

## Tags
#scaling #agi-timelines #reinforcement-learning #robotics #generalization #continual-learning #rlvr #economic-diffusion #goal-post-shifting #pretraining-vs-rl

## Related
- [[dwarkesh-ilya-sutskever-2]] — Sutskever shares Patel's view that scaling is plateauing and research breakthroughs are needed
- [[langchain-continual-learning-for-ai-agents]] — continual learning as post-AGI improvement driver aligns with LangChain's continual learning thesis
- [[langchain-anatomy-of-agent-harness]] — Patel's "schleppy training loops" critique connects to harness engineering as the missing generalizable learning layer
- [[ai-scaling-limits-and-research-paradigm]] — core thesis on RL scaling limitations and need for algorithmic breakthroughs
- [[gpu-and-compute-economics]] — if RL scaling has diminishing returns, implications for training compute demand
