# Vertical AI Models and Post-Training on Usage Data

## Definition
The emerging pattern where product companies build domain-specific AI models by post-training open-source base models on proprietary usage data ("last-mile" interactions), achieving performance that matches or exceeds general frontier models at lower cost. Represents a shift from relying on API calls to frontier labs toward full-stack ownership (app + AI + model).

## Key Points
- Cursor's Composer 2 built on Kimi K2.5 with RL post-training on coding interaction data; beats Opus 4.6 and matches GPT-5.4 on coding benchmarks at lower cost; 75% of compute from Cursor's proprietary training ([[ai-daily-brief-anthropic-mythos-vertical-models]])
- Intercom's Fin Apex (dedicated customer service model) beats GPT-5.4 and Opus 4.5 on resolution rates with 65% fewer hallucinations and dramatically lower cost ([[ai-daily-brief-anthropic-mythos-vertical-models]])
- Decagon runs 80%+ of model traffic on in-house models using a network of specialized models for different customer service stages (detection, orchestration, response, evaluation) optimized independently ([[ai-daily-brief-anthropic-mythos-vertical-models]])
- Multiple product companies (Pinterest, Airbnb, Notion, Cursor, Intercom) are finding it better/cheaper/faster to post-train open models in-house rather than rely on API calls ([[ai-daily-brief-anthropic-mythos-vertical-models]])
- This pattern is distinct from early domain-specific pre-training (Bloomberg GPT) which was "smoked by general models" — the key difference is post-training on proprietary usage data (real user interactions) rather than just domain text ([[ai-daily-brief-anthropic-mythos-vertical-models]])
- Paul Adams (Intercom CPO) framing: vertical models can and will outperform general models; durable differentiation moves down the stack to the model layer; successful companies must be full-stack across app, AI, and model layers ([[ai-daily-brief-anthropic-mythos-vertical-models]])
- Eoghan McCabe references Andrej Karpathy's "speciation" prediction: smaller models with cognitive core, optimized for specific tasks ([[ai-daily-brief-anthropic-mythos-vertical-models]])
- Richard Sutton's "Bitter Lesson Revisited" on Dwarkesh podcast may have predicted this: systems trained from experience supersede those built on human knowledge — vertical models are post-trained from experience (usage data) ([[ai-daily-brief-anthropic-mythos-vertical-models]])
- "API tax starting to look like the cloud markup of 10 years ago" — observation that per-token pricing to frontier labs becomes uneconomical compared to in-house training ([[ai-daily-brief-anthropic-mythos-vertical-models]])
- Cursor's March 2026 platform buildout demonstrates vertical integration: 5 layers (Automations → Marketplace → Composer 2 → Self-hosted agents → Agents Window) in 28 days, each building on the last, with Composer 2 (the vertical model) as the "brain layer" that makes the rest of the stack useful ([[medium-cursor-3-agents-window-architecture]])

## Open Questions
- Will every product company with sufficient usage data train vertical models, or will this remain limited to well-funded companies with ML expertise?
- What is the minimum dataset size / interaction volume needed for vertical model training to outperform general models?
- How will frontier labs (OpenAI, Anthropic, GDM) respond to customer attrition from vertical model adoption?
- Will vertical model tooling (training pipelines, eval harnesses, deployment infra) become its own product category?
- Does this shift reduce or increase demand for GPUs? (Less inference API calls, but more training runs)
- Can vertical models maintain quality as base models improve, or will they need continuous re-training?
- What happens to companies built entirely on frontier API access if the economic moat shifts to vertical models?
- For Microsoft/GitHub: should Azure AI provide "vertical model training as a service" to capture companies making this shift?

## Related Concepts
- [[ai-agent-ecosystem]] — vertical models for coding agents (Cursor)
- [[open-models-and-local-inference]] — open base models (Kimi K2.5) enable vertical model training
- [[token-economics-and-pricing]] — "API tax" driving economics of in-house training
- [[ai-scaling-limits-and-research-paradigm]] — relates to whether general pre-training scaling continues or specialization dominates
