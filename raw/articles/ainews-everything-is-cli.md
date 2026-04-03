# [AINews] Everything is CLI
**Source:** https://www.latent.space/p/ainews-everything-is-cli
**Date:** March 26, 2026
**Author:** Latent.Space (swyx)

## Summary
On its own, the launch of Projects.dev, a way for agents to instantly provision services, is not immediately title-story worthy except for 2 things: 1) it comes from STRIPE, 2) it is a CLI. Run `stripe projects add posthog/analytics` and it'll create a PostHog account, get an API key, and set up billing.

Stripe is just doing this because they can, and Patrick cites Andrej's MenuGen as direct inspiration for how it is too hard for agents to set up backend services today.

But let's not stop there: Ramp's CLI also launching today, with handy usecases. Along with Sendblue CLI (iMessage), Kapso CLI (WhatsApp), ElevenLabs CLI, Visa CLI, Resend CLI, and more.

Many people have written about why CLIs can be handier than MCPs, which isn't necessarily a fair nor false comparison, but at this point the trend is undeniable.

## Key Topics from AI Twitter Recap

### Model and Product Releases
- Google's Gemini 3.1 Flash Live: realtime model for voice and vision agents
- Mistral Voxtral TTS: open-weight TTS model, 9-language support, ~90ms TTFA
- Cohere Transcribe: first audio model, Apache 2.0, top English spot on HF Open ASR leaderboard
- OpenAI GPT-5.4 mini and nano: multimodal with 400k context, but highly verbose with elevated hallucination rates

### Agent Infrastructure
- Cline Kanban: free, open-source local web app for orchestrating multiple CLI coding agents in parallel across isolated git worktrees
- "Harness engineering" is becoming a category: the agent harness—middleware, memory, task orchestration, tool interfaces, safety policies, and evaluation loops—is increasingly the real product
- Hermes Agent vs OpenClaw: persistent memory across platforms, shared memory across agents

### Research and Training
- Sakana AI's AI Scientist: Nature paper on end-to-end automation of AI research, scaling law for AI science
- NVIDIA's ProRL Agent: fully decoupling rollout into standalone service nearly doubled Qwen 8B on SWE-Bench Verified from 9.6% to 18.0%
- Cursor's "real-time RL": ship improved checkpoints every five hours, productized RL feedback loop

### Architecture and Inference
- Transformer depth becoming "queryable" via Attention Residuals (AttnRes)
- TurboQuant: 3-bit-like compression with near-zero accuracy loss
- Retrieval trending multimodal and specialized
