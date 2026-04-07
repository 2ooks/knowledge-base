# Autoresearch and Recursive Self-Improvement

## Definition
AI systems autonomously improving their own training recipes, harnesses, or instruction sets through automated experimentation loops. Distinct from scaling (bigger models) — this is about recursive improvement: agents making themselves better.

## Key Points
- Karpathy's "autoresearch" loop on nanochat: cut "Time to GPT-2" by ~11% via ~700 autonomous changes — described as the "AutoML moment" of 2026 ([[ainews-autoresearch-sparks-of-recursive]])
- Karpathy calls swarm-agent optimization "the final boss battle for frontier labs" ([[ainews-autoresearch-sparks-of-recursive]])
- SkyPilot Kubernetes-native autoresearch: ~910 experiments in 8 hours vs ~96 sequentially — infrastructure reshaping automated research loops ([[ainews-every-lab-serious-enough-about]])
- MiniMax reported 30% self-improvement gain via autonomous optimization loops ([[ainews-every-lab-serious-enough-about]])
- Continual learning from deployed agents as the key post-AGI improvement driver; "hive mind" batch distillation from agent traces ([[dwarkesh-thoughts-on-ai-progress-dec-2025]])
- Meta-Harness pattern: harness analyzes own traces to fix its own failures — agents improving the infrastructure that runs them ([[langchain-anatomy-of-agent-harness]])
- Context-layer learning: agents updating their own instructions (CLAUDE.md / SOUL.md) from user feedback without redeployment ([[langchain-continual-learning-for-ai-agents]])
- Opus 4.6 sustains 12+ hours / 118 experiments in autonomous research loops; GPT-5.4 cannot — harness quality determines autoresearch ceiling ([[ainews-autoresearch-sparks-of-recursive]])
- Hermes Agent self-improvement loop: evaluates what worked/didn't work after each interaction and automatically converts successful workflows into reusable skills (procedural memory) ([[turingpost-hermes-agent-openclaw-rival]])
- Skills generation contrast: OpenClaw skills are mostly human-authored; Hermes skills are automatically generated from successful workflow patterns, representing different approach to capability accumulation ([[turingpost-hermes-agent-openclaw-rival]])

## Open Questions
- Can autoresearch loops be made robust enough for production ML pipelines beyond toy benchmarks?
- Who provides the infrastructure for scaled autoresearch — cloud providers, agent platforms, or labs themselves?
- What happens when autoresearch starts producing models that are qualitatively different from human-designed ones?
- Is this the mechanism by which fast AI timelines actually play out (recursive improvement accelerating capabilities)?

## Related Concepts
- [[harness-engineering]] — harnesses enabling and constraining autoresearch loops
- [[ai-scaling-limits-and-research-paradigm]] — autoresearch as alternative to brute-force scaling
- [[ai-agent-ecosystem]] — the agent infrastructure supporting autonomous experimentation
