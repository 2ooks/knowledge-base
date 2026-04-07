# Harness Design for Long-Running Application Development

**Source:** https://www.anthropic.com/engineering/harness-design-long-running-apps
**Retrieved:** 2026-04-07 (via web search - primary source blocked)

---

**Note:** This content was reconstructed from secondary sources (InfoQ, Epsilla, Geeky Gadgets, OpenTools.ai) via web search. The primary source at anthropic.com was blocked for direct fetch (ERR_BLOCKED_BY_CLIENT). All specific claims should be verified if the full article text becomes available.

---

## Content Summary from Secondary Sources

Anthropic has pioneered new harness designs for long-running application development, especially for agentic coding tasks that require AI to sustain coherent, productive work over sessions lasting hours or even days.

### Key Elements of Anthropic's Harness Design

**1. Multi-Agent Architecture Inspired by GANs**

Anthropic's latest architecture takes inspiration from Generative Adversarial Networks (GANs) and separates the workflow among three specialized agents:

- **Planner Agent:** Decomposes the high-level product specification into an actionable task list.
- **Generator Agent:** Implements tasks feature-by-feature, handling development, and producing candidate solutions.
- **Evaluator Agent:** Rigorously evaluates outputs against established, concrete criteria—grading both functionality and subjective qualities like design taste. This feedback is then used to direct further iterations.

This structure ensures that no single agent is responsible for both generating and evaluating work, reducing bias and improving the reliability of both objective and subjective assessments.

**2. Structured Context Handoffs & Context Resets**

A core challenge for long-running agents is that large language models can lose thread or coherence as their context window fills, or they may exhibit "context anxiety" and prematurely try to conclude tasks. Anthropic mitigates this by:

- Using structured artifacts (serialized plans, code, specs) to persist and hand off context between sessions or agents.
- Implementing context resets: when starting a new session, a fresh agent receives an explicit, structured state so that continuity is maintained without overfilling the context window.

**3. Iterative Development with Self-Critique and Testing**

The evaluator agent employs tools like Playwright MCP to interact with and score live outputs, applying weighted rubrics for aspects such as design quality, originality, craft, and usability. Cycles of generation and evaluation (often 5–15 iterations) lead to steadily improved outputs that combine subjective excellence with verifiable correctness.

**4. Harnesses as Orchestration Layers**

Beyond just prompts, harnesses act as robust orchestration frameworks that include:

- Test oracles, to verify that outputs meet requirements and prevent regressions.
- Git-based coordination, so the state and artifacts from each run are preserved and visible across long workflows.

These practices support multi-day autonomous development, even in complex full-stack scenarios, and allow seamless transfers between agents or human supervisors if needed.

**5. Industry Impact and Challenges**

Anthropic's approach tackles task drift, context overload, and the AI's natural tendency to either "one-shot" build an app or to prematurely declare it complete. Engineers from industry have endorsed the multi-agent harness for its reproducibility, task decomposition, and structured handoffs which lead to more reliable, incremental progress over long-running sessions.

### Practical Examples

Anthropic's harness design has produced rich full-stack applications, including frontend design, over multi-hour sessions—demonstrating effectiveness in both subjective (UI/UX) and objective (functionality, correctness) domains.

---

**Secondary Sources Consulted:**
- InfoQ: "Anthropic Designs Three-Agent Harness Supports Long-Running AI Applications" (https://www.infoq.com/news/2026/04/anthropic-three-agent-harness-ai/)
- Epsilla: "The GAN-Style Agent Loop: Deconstructing Anthropic's Harness Engineering" (https://www.epsilla.com/blogs/anthropic-harness-engineering-multi-agent-gan-architecture)
- Geeky Gadgets: "Why Anthropic is Using 'Harnesses' to Control Long-Running AI Agents" (https://www.geeky-gadgets.com/ai-harness-anthropics-fix-for-task-drift/)
- OpenTools.ai: "Anthropic Unveils Game-Changing Harness Design for AI" (https://opentools.ai/news/anthropic-unveils-game-changing-harness-design-for-ai)
