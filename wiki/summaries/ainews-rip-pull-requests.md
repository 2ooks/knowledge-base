# [AINews] RIP Pull Requests (2005-2026)

**Source**: [Latent Space](https://www.latent.space/p/ainews-rip-pull-requests-2005-2026)
**Date**: 2026-04-15
**Tags**: #developer-tooling #ai-agents #github #infrastructure #pull-requests

## Summary

AINews article documenting GitHub's historic decision to allow pull request disablement on open source repos and the broader shift away from git-based workflows in the AI agent era. The opening essay argues that Pull Requests, invented in 2005 and popularized by GitHub, may be obsolete by 2026 as generative AI makes "Prompt Requests" more practical than Pull Requests (no merge conflicts, easier for maintainers to modify prompts than review code, lower security risk). The article also covers major infrastructure developments including OpenAI splitting the agent harness from compute/storage, ecosystem convergence on "durable orchestration + stateful isolated workspaces," Cloudflare positioning as a complete production agent platform, and significant model releases. The news digest covers April 14-15, 2026.

## Key Claims

### Pull Request Obsolescence
- **GitHub allows PR disablement**: For the first time in history, GitHub allows disabling pull requests on open source repos (previously only issues could be disabled)
- **Pull Request timeline**: Pull Requests were "arguably invented in 2005, successfully popularized by GitHub, and only 21 years later" may be obsolete
- **Prompt Request advocates**: Pete Steinberger and Theo advocate for "Prompt Requests rather than Pull Requests" citing three reasons: 1) no merge conflicts, 2) easier for maintainer to fix/add to prompt than review code, 3) less likely to have malicious/insecure code slipped in
- **Reputation-based systems**: Mitchell Hashimoto and Amp Code created "reputation"-based systems for handling untrusted code contributions
- **Aaron Levie quote**: "the path forward is to make software that agents want" — humans invented git for human collaboration, but "Git-based workflows may not be suitable once we remove the human bottleneck"

### OpenAI Agents SDK and Infrastructure Separation
- **Harness separation**: OpenAI "split the agent harness from compute/storage" and pushed its Agents SDK toward long-running, durable agents with primitives for file/computer use, skills, memory, and compaction
- **Open-source harness**: The harness is now "open-source and customizable" while execution can be delegated to partner sandboxes instead of being tightly coupled to OpenAI infra
- **Reproducibility shift**: This makes "Codex-style" agents more reproducible by third parties and shifts differentiation toward orchestration, state management, and secure execution
- **Sandbox ecosystem**: Cloudflare, Modal, Daytona, E2B, and Vercel all announced official sandbox integrations
- **Pattern convergence**: "Practical pattern is converging on stateless orchestration + stateful isolated workspaces"
- **Modal ML research agent**: Example build includes GPU sandboxes, subagents, persistent memory, and fork/resume snapshots
- **Cloudflare Python agents**: Guides show agents executing tasks in sandbox and copying outputs locally

### Cloudflare Agent Infrastructure
- **Project Think**: Next-gen Agents SDK centered on durable execution, sub-agents, persistent sessions, sandboxed code execution, built-in workspace filesystem, and runtime tool creation
- **Agent Lee**: In-dashboard agent using sandboxed TypeScript to shift Cloudflare UI from manual tab navigation to prompt-driven operations
- **Voice pipeline**: Experimental real-time voice pipeline over WebSockets for continuous STT/TTS
- **Browser automation**: Rebranded Browser Run stack with Live View, human-in-the-loop intervention, session recordings, CDP endpoints, WebMCP support, and higher limits
- **Complete platform thesis**: "Cloudflare is making a strong case that the production agent platform is really a composition of durable runtime + UI grounding + browser + voice + sandbox"

### Hermes Agent Competitive Positioning
- **Skill formation**: Hermes' distinctive idea is "not just tool use but persistent skill formation" — decides whether a completed workflow is reusable and automatically turns it into a Skill
- **Professional agent framing**: Contrasted with OpenClaw as "more GUI-first, ready-to-use personal assistant" while Hermes is a "professional" agent that learns from completed tasks
- **Session hygiene**: Session hygiene and thread branching/search emphasized as "critical to turning Hermes into a real work environment rather than a disposable chat box"
- **Gemma 4 abliteration case**: Viral autonomous example where Hermes agent loaded stored skill, diagnosed NaN instability in Gemma 4, patched underlying library, retried multiple methods, benchmarked result, generated model card, and uploaded artifacts to Hugging Face
- **Product features**: Browser control via `/browser connect`, QQBot + AWS Bedrock support, native Swift desktop app alpha, artifact-preview and hermes-lcm v0.3.0

### Model and Architecture Releases
- **Nucleus-Image**: First sparse MoE diffusion model (17B parameters, 2B active, Apache 2.0, with weights, training code, and dataset recipe)
- **NVIDIA Lyra 2.0**: Framework for generating persistent, explorable 3D worlds that maintains per-frame 3D geometry and uses self-augmented training to reduce temporal drift
- **Parcae (looped transformers)**: Stabilized layer-looping Transformer formulation where "for fixed parameter budgets, looping blocks can recover the quality of a model roughly 2x the size"
- **Nemotron 3 Super**: Open 120B hybrid Mamba-Attention MoE with 12B active parameters, 1M context, trained on 25T tokens, with up to 2.2x throughput vs GPT-OSS-120B and 7.5x vs Qwen3.5-122B
- **Memory bandwidth focus**: Architecture releases "collectively point to a theme: memory bandwidth and long-context throughput are increasingly first-class architectural objectives"

### Google/Gemini Product Launches
- **Gemini Mac app**: Native app with Option + Space activation, screen sharing, local file context, native Swift implementation, broad macOS availability
- **Personal Intelligence**: Expanded globally in Gemini and into Chrome, allowing users to connect signals from Gmail and Photos
- **Gemini 3.1 Flash TTS**: Highly controllable TTS model with Audio Tags, 70+ languages, inline nonverbal cues, multi-speaker support, SynthID watermarking; ranks #2 on Speech Arena (4 Elo behind top model)
- **TIPS v2**: Foundational text-image encoder under Apache 2.0 with new pretraining recipes
- **Product velocity**: Community flagged the day as "unusually dense for Google AI product velocity"

### Research Signals
- **AI-assisted math proof**: GPT-5.4 Pro produced proof for Erdős problem #1196, "surprising experts by rejecting a long-assumed proof gambit" and using "technically counterintuitive analytic path using the von Mangoldt function"
- **Book Proof significance**: Framed as "potentially the first AI-generated 'Book Proof' broadly respected by mathematicians" — evidence that models may "occasionally find non-aesthetic but compact lines of attack in mature research spaces"
- **AiScientist harness**: Thin orchestrator coordinates specialized agents through durable workspace artifacts in "File-as-Bus pattern"; removing that bus hurts PaperBench and MLE-Bench Lite materially
- **Pioneer Agent**: Continual small-model improvement loops
- **Meta-Harness**: Open-sourced repo meant to help users implement robust harnesses in new domains
- **Gemini 3.1 Pro eval**: METR Evals estimated 50% time horizon of ~6.4 hours on software tasks (high thinking mode)
- **Document Arena rankings**: Claude Opus 4.6 Thinking at #1, Kimi-K2.5 Thinking as best open model
- **SEC EDGAR data**: 43B tokens released by TeraflopAI

## Related Concepts
- [[developer-tooling-competitive-landscape]]
- [[harness-engineering]]
- [[ai-agent-ecosystem]]
- [[agent-security-identity-and-permissions]]
- [[open-models-and-local-inference]]

## Open Questions
- If Pull Requests and Code Reviews are both declared "dead," how quickly will git itself become obsolete for AI-native workflows?
- What replaces git's versioning/collaboration primitives when the collaboration unit shifts from "code delta" to "prompt specification"?
- How does GitHub defend its platform position when the core collaboration primitive (PRs) that made it successful becomes friction for agents?
- What does "reputation-based" contribution actually mean technically (cryptographic identity? behavioral scoring? human vouching?)?
- Is the "durable orchestration + stateful isolated workspaces" pattern stable, or will it consolidate further?

## Metadata
- **Retrieval quality**: Full primary source
- **Decay rate**: Fast (news digest covering 2-day window)
- **Last validated**: 2026-04-16
