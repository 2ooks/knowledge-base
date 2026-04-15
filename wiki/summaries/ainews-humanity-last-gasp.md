# [AINews] Humanity's Last Gasp

**Source:** https://www.latent.space/p/ainews-humanity-last-gasp
**Date:** April 14, 2026
**Author:** AINews / Latent Space

## Summary

AINews for April 3-4, 2026 explores the "turkey problem" paradox: as AI agents saturate benchmarks (SWE-Bench Pro at 78%, GDPval rates GPT-5.4 equal/better than human experts 83% of the time), knowledge workers paradoxically report working harder than ever. Google Chrome shipped "Skills" for one-click browser automation, Hermes Agent emerged as a production-grade open agent stack prioritizing reliability over raw model capability, and LangChain's deepagents 0.5 pivoted from demos to deployable multi-tenant systems. The agent infrastructure layer is consolidating around production concerns (tenancy, isolation, long-lived tasks) rather than model benchmarks, with harness design becoming a first-class engineering topic on par with model selection.

## Key Claims

- **Benchmark saturation reaching inflection point**: SWE-Bench Pro approaching saturation at 78% (Mythos), GDPval rates GPT-5.4 as better than/equal to human experts 83% of the time across most economic tasks, suggesting the "valuable problems left" question is becoming urgent
- **Google Chrome Skills launched end-user agentization**: Chrome introduced Skills feature letting users save Gemini prompts as one-click actions that run against current page/selected tabs, with Google shipping a ready-made Skills library making this "more than prompt history" and "effectively lightweight end-user agentization inside the browser"
- **Hermes Agent competing on reliability, not model IQ**: Multiple community posts converged on users migrating to Hermes Agent because it is "more durable for long-running work" with v0.9.0 shipping web UI, model switching, iMessage/WeChat integration, backup/restore, Android-via-tmux support, and hermes-lcm v0.2.0 adding "lossless context management with persistent message storage, DAG summaries"
- **LangChain deepagents 0.5 shifts to production platform concerns**: deepagents 0.5 added async subagents, multimodal file support, prompt-caching improvements, with related work around "memory scoped to user/agent/org and custom auth / per-user thread isolation" emphasizing "a shift from 'agent demos' to platform concerns: tenancy, isolation, long-lived tasks"
- **Harness design becoming first-class engineering topic**: Multiple posts argued "agent performance depends at least as much on the scaffold as the model" with @Vtrivedy10 making "the clearest case for task-specific open harnesses over ideology ('thin vs thick')" and @kmeanskaran stressing "workflow design, memory switching, and tool output control over frontier-model chasing"
- **Tencent HYWorld 2.0 positions world models as editable 3D scenes, not video**: @DylanTFWang teased HYWorld 2.0 as "open-source, engine-ready 3D world model that generates editable 3D scenes from a single image" explicitly contrasting with video-generation systems by framing output as "a real 3D scene that is editable and engine-ready"
- **Google DeepMind shipped Gemini Robotics-ER 1.6**: New model "improves visual/spatial reasoning for robotics, adds safer physical reasoning" with follow-up posts highlighting "93% instrument-reading success and better handling of physical constraints like liquids and heavy objects" and availability in Gemini API / AI Studio, making this "less like a robotics foundation-model paper drop and more like a developer-facing embodied-reasoning API"
- **OpenAI expanded GPT-5.4-Cyber under Trusted Access**: GPT-5.4-Cyber is "a fine-tuned version of GPT-5.4 for defensive security workflows, available to higher-tier authenticated defenders under its Trusted Access program"
- **Hugging Face launched Kernels repo type**: @ClementDelangue announced "a new repo type for GPU kernels, with precompiled artifacts matched to exact GPU/PyTorch/OS combinations and claimed 1.7x–2.5x speedups over PyTorch baselines"
- **Cursor multi-agent CUDA optimization system delivered 38% speedup**: @cursor_ai reported its "multi-agent software engineering system delivered a 38% geomean speedup across 235 CUDA problems in 3 weeks, a concrete example of agents being applied to systems optimization rather than app scaffolding"
- **The "turkey problem" framing for knowledge workers**: Article opens with question "How can it both be true that 'Agents are doing more work and yet Everyone is working harder'?" drawing parallel to the turkey problem where "based on real evidence and an abundance of historical data, Turkeys should conclude that life is fantastic" until Thanksgiving, asking if engineers are "turkeys in this scenario" with value growing "right up to some crossover point we become horses"
- **Notion working on "Notion's Last Exam"**: Simon Last of Notion commented he's "back to sleepless nights and 24/7 work for the first time since giving up on ML model training, but this time because of agent layer token anxiety" with Notion working on "Notion's Last Exam" alongside Greg and Francois setting out "ARC-AGI-3"
- **Aaron Levie reports universal increase in workload**: Friend of the show Aaron Levie reports "AI is not causing anyone to do less work right now, and similar to Silicon Valley people feel their teams are the busiest they've ever been"
- **Tyler Cowen argues to work much harder RIGHT NOW**: Tyler Cowen argues from economics standpoint "you should work much harder RIGHT NOW whether you believe AI will lower your value OR increase your value"

## Tags

#ai-agents #benchmark-saturation #chrome-skills #hermes-agent #langchain #deepagents #harness-engineering #production-agents #end-user-agentization #google #tencent #world-models #robotics #gemini #openai #cursor #productivity-paradox #turkey-problem #swe-bench #gdpval

## Related

- [[harness-engineering]] — Harness design becoming first-class engineering topic, production concerns over model benchmarks
- [[ai-agent-ecosystem]] — Hermes Agent, LangChain deepagents, Chrome Skills, agent infrastructure consolidation
- [[developer-tooling-competitive-landscape]] — Chrome Skills as competitive threat, end-user agentization
- [[ai-coding-agents-and-developer-role-shift]] — "Turkey problem" and the productivity paradox, benchmark saturation implications
