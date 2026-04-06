# AI Scaling Limits and the Research Paradigm

## Definition
The emerging thesis that AI progress driven by brute-force scaling (larger models, more data, more compute) is reaching diminishing returns, and that the next phase of breakthroughs will come from fundamental research and algorithmic innovation rather than resource accumulation.

## Key Points
- Ilya Sutskever declares "the age of scaling is over" — pre-training on static internet data has hit a ceiling; "there is only one internet" [UNVERIFIED] ([[dwarkesh-ilya-sutskever-2]])
- Progress now requires the "age of research": new algorithmic breakthroughs, synthetic data, and models that learn from deployment and interaction [UNVERIFIED] ([[dwarkesh-ilya-sutskever-2]])
- Models exhibit "jagged generalization" — acing graduate-level benchmarks while failing basic reasoning; over-optimized RL risks benchmark overfitting [UNVERIFIED] ([[dwarkesh-ilya-sutskever-2]])
- RL consumes increasing compute relative to pre-training but yields only modest learning gains [UNVERIFIED] ([[dwarkesh-ilya-sutskever-2]])
- Dwarkesh Patel identifies fundamental contradiction: if AGI is close, pre-baking skills via RL is pointless; if models can't learn on-the-job, AGI isn't imminent ([[dwarkesh-thoughts-on-ai-progress-dec-2025]])
- Labs are building "mid-training" supply chains where entire companies create RL environments to teach models specific skills (web browsers, Excel, financial modeling) ([[dwarkesh-thoughts-on-ai-progress-dec-2025]])
- Robotics as litmus test for generalization: humans can teleoperate hardware with minimal training, so human-like learner would largely solve robotics; instead AI needs to visit thousands of homes to learn dishwashing ([[dwarkesh-thoughts-on-ai-progress-dec-2025]])
- RL scaling is "laundering the prestige of pretraining scaling" — pretraining had clean multi-order-of-magnitude trends; RLVR has no well-fit publicly known trend; Toby Ord's analysis suggests 1,000,000x scale-up needed for GPT-level boost ([[dwarkesh-thoughts-on-ai-progress-dec-2025]])
- Human labor is valuable "precisely because we don't need to build schleppy training loops for every small part of their job" — example: biologist identifying macrophages in lab-specific context ([[dwarkesh-thoughts-on-ai-progress-dec-2025]])
- "Economic diffusion lag is cope" — if models were AGI-level, they'd diffuse faster than humans (could read entire Slack/Drive in minutes); lab revenues are "4 orders of magnitude off" trillions because models aren't near human knowledge worker capability ([[dwarkesh-thoughts-on-ai-progress-dec-2025]])
- Goal post shifting is justified: "we keep solving what we thought were the sufficient bottlenecks to AGI...and yet we still don't have AGI"; reasonable to update AGI definitions as we learn intelligence is more complex than previously thought ([[dwarkesh-thoughts-on-ai-progress-dec-2025]])
- Models "keep getting more impressive at the rate the short timelines people predict, but more useful at the rate the long timelines people predict" ([[dwarkesh-thoughts-on-ai-progress-dec-2025]])
- Post-AGI improvement driver will be continual learning via broadly deployed agents: agents do jobs, bring learnings back to "hive mind model" for batch distillation; "solving" continual learning will be gradual like in-context learning, not one-and-done ([[dwarkesh-thoughts-on-ai-progress-dec-2025]])
- Expects AGI "in the next decade or two" ([[dwarkesh-thoughts-on-ai-progress-dec-2025]])
- 100× compute scaling might move the needle but would not transform capabilities — algorithmic innovation essential [UNVERIFIED] ([[dwarkesh-ilya-sutskever-2]])

## Open Questions
- If scaling pre-training yields diminishing returns, does compute demand shift from training to inference/agent workloads — and does this change the GPU economics calculus?
- Can synthetic data and deployment-based learning substitute for the exhausted internet corpus, or is a genuinely new paradigm required?
- How does the "jagged generalization" problem interact with the harness engineering thesis — does better orchestration compensate for brittle model reasoning?
- Does the scaling → research transition favor incumbents (who have research talent) or challengers (who have fresh algorithmic ideas)?
- What are the implications for Microsoft/GitHub's compute infrastructure bets if the scaling curve flattens and the value shifts to algorithmic IP?

## Related Concepts
- [[gpu-and-compute-economics]] — scaling limits directly challenge the assumption of indefinitely growing training compute demand
- [[ai-agent-ecosystem]] — if model capabilities plateau, the harness/infrastructure layer becomes even more important
- [[inference-architecture-and-scaling]] — inference may become the primary compute category if pre-training gains flatten
