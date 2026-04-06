# Cursor 3 Is Not an IDE Update. It's a Bet That You'll Manage Agents, Not Write Code

**Source:** Medium (member-only)
**Author:** Han HELOIR YAN, Ph.D.
**Date:** April 4, 2026 (approx.)

---

Thirty minutes after the Cursor 3 announcement hit Hacker News, the top comment wasn't about a feature. It was a plea. "I wish they'd keep the old philosophy of letting the developer drive and the agent assist," one user wrote. "I still want to code, not vibe my way through tickets."

A Cursor engineer responded within minutes: the IDE still exists. The new Agents Window is a separate surface. You can use both simultaneously or ignore it entirely.

Both are telling the truth. And both are talking past each other. That disconnect is the real story of Cursor 3: not what features shipped, but what Anysphere believes about where software development is going, and whether developers agree.

## TL;DR

- Cursor 3's Agents Window is the first thing Anysphere built from scratch (not forked from VS Code). That's not a cosmetic choice. It's an architectural admission that VS Code's model breaks under agent parallelism.
- The March 2026 release sequence (Automations → Marketplace → Composer 2 → Self-hosted agents → Cursor 3) reads as a single platform strategy, not a feature drip. Five releases, five layers of one stack.
- VS Code was designed for humans editing files. Agent fleets need a different primitive: multi-workspace coordination, cloud/local handoff, artifact-based review. The Agents Window provides it.
- Every major player is making a different bet on how much the developer should see. Copilot says the IDE is enough. Claude Code says no UI at all. Cursor says: new surface, built for fleet management.
- The developer backlash reveals a real schism: are you a writer of code or a manager of agents? Cursor is betting the answer changes within a year. The architecture is designed for the answer they expect, not the one developers give today.

## The Third Era Thesis

Before you can understand Cursor 3, you need to understand the essay that predicted it.

On February 26, 2026, Cursor CEO Michael Truell published "The Third Era of AI Software Development." The argument was simple and sweeping. Era one: Tab autocomplete. Developers type, the model predicts the next line. Era two: synchronous agents. Developers describe a task, the agent executes it while they watch. Era three (arriving now): autonomous agent fleets. Developers define the problem, spin up agents, and review artifacts when the work is done.

The data Cursor shared to back this up is striking. Agent usage in Cursor grew 15x in a single year. In March 2025, there were roughly 2.5 Tab users for every agent user. By early 2026, that ratio flipped: 2 agent users for every Tab user. The Tab era lasted nearly two years. Truell's claim: the synchronous agent era "may not last one."

Inside Cursor itself, 35% of merged PRs now come from agents operating autonomously in cloud VMs. Not agents supervised by a developer in real time. Agents that cloned a repo, worked in isolation, and produced a merge-ready pull request.

Here's why this matters for the product: if your users are spending less time typing code and more time reviewing agent output, then your VS Code fork (built around the assumption that developers type code) is the wrong surface. The interface needs to change. Not because the old one is broken, but because the user's job is changing underneath it.

## The March Sequence

Read the Cursor changelog for March 2026 as a single document and a pattern emerges. Five releases in 28 days, each one building on the last. Not a feature drip. A platform buildout.

**March 5: Automations.** Event-driven agents. You define a trigger (a Slack message, a GitHub event, a Linear ticket, a PagerDuty alert, a cron schedule) and a set of instructions. When the trigger fires, Cursor spins up a cloud sandbox, the agent follows your instructions using whatever MCP tools and models you've configured, and it keeps a memory of past runs to improve over time. This is the trigger layer.

**March 11: Marketplace.** 30+ plugins from Atlassian, Datadog, GitLab, Glean, Hugging Face, monday.com, PlanetScale, and others. These aren't IDE extensions. They're MCP-based tool integrations that agents (not humans) use during execution. This is the tool layer.

**March 19: Composer 2.** Cursor's own frontier coding model, built through continued pretraining on Kimi K2.5 and scaled reinforcement learning. It scores 61.7 on Terminal-Bench 2.0 and 73.7 on SWE-bench Multilingual. This is the brain layer.

**March 25: Self-hosted cloud agents.** The enterprise answer to "where does my code run?" Same capabilities as Cursor-hosted agents but running inside your own infrastructure. This is the runtime layer.

**April 2: Cursor 3 / Agents Window.** The interface that ties all four layers together. This is the surface layer.

The sequence matters because each layer depends on the one below it. The Agents Window is useful because cloud agents exist. Cloud agents are useful because Composer 2 gives them a fast, capable brain. The brain is useful because the marketplace gives it tools. The tools are useful because automations give them triggers. Remove any single layer and the system degrades.

This is not how you ship features. This is how you build a platform.

## Why They Built From Scratch

Here's the most architecturally significant detail in the Cursor 3 announcement, buried in a single sentence of the blog post: "With Cursor 3, we took that a step further by building this new interface from scratch, centered around agents."

From scratch. Not another panel in the VS Code fork. Not a sidebar extension. A new application, built from the ground up.

### What VS Code assumes

VS Code is built around what you might call the file-editor-terminal triad. You have a file tree on the left. An editor in the center. A terminal at the bottom. Extensions communicate through the Extension Host API, which gives them controlled access to the editor surface, file system, and some UI primitives. The entire model assumes a single workspace, a single human, and a linear workflow: open file, edit, save, run, debug.

### What agents need that VS Code can't provide

**Multi-workspace parallelism.** You need agents working across different repos simultaneously. VS Code opens one workspace at a time.

**Cloud/local session handoff.** You need to start an agent locally, push it to the cloud to keep running while you close your laptop, then pull it back to local when you want to test. VS Code has no concept of session migration.

**Artifact-based review.** Cloud agents produce demos, screenshots, video recordings, and live previews. VS Code's review model is built around file-level diffs.

### Design Mode tells the whole story

If any single feature reveals the philosophical shift, it's Design Mode. Open the Agents Window, toggle Design Mode with Cmd+Shift+D, and you can annotate UI elements directly in the browser. Shift-drag to select an area. Cmd+L to add an element to the agent chat.

You are not editing code. You are not reading a file. You are pointing at a visual element and describing what you want changed, and an agent translates that into implementation. This interaction has no equivalent in any IDE because it isn't an IDE interaction. It's a management interaction.

The new slash commands reinforce this. `/worktree` creates an isolated git worktree so the agent's changes happen in a separate branch, leaving your main branch untouched until you explicitly apply the result.

`/best-of-n` goes further. Type `/best-of-n sonnet, gpt, composer fix the flaky logout test` and Cursor spins up three separate worktrees, runs the same prompt across Sonnet, GPT, and Composer simultaneously, then surfaces a parent agent that compares all three outputs. You see the results side by side in Agent Tabs. The parent agent provides commentary on the differences and can merge the best parts of each implementation into a single commit. You can configure per-project worktree setup (dependency installation, environment files, migrations) through `.cursor/worktrees.json`.

This is not an editing feature. It's a model evaluation pipeline embedded directly in the developer's workflow. The closest equivalent in traditional engineering would be running the same spec through three different consulting firms and comparing proposals. That's a management pattern, not a coding pattern.

### The fork dependency factor

There's a pragmatic reason for building from scratch too. Microsoft started blocking proprietary extensions in VS Code forks in 2025, forcing Cursor to scramble and reimplement open-source alternatives. The Agents Window reduces Cursor's exposure. If Microsoft tightens the screws further, the Agents Window is unaffected. It's Cursor's own code, top to bottom.

## The Competitive Frame

Cursor isn't making this bet alone. Every major player in AI dev tooling is answering the same question: when agents write the code, what does the developer look at?

**GitHub Copilot** says: the IDE is enough. Add agent features through extensions. The bet: you can bolt agent capabilities onto the existing surface.

**Cursor (IDE mode)** says: the IDE needs deeper hooks than extensions allow. Fork VS Code, control the rendering pipeline. The bet: the developer still drives, but the AI is the best copilot possible.

**Cursor (Agents Window)** says: the IDE is a secondary surface. Build a new interface from scratch for managing agent fleets. The bet: the developer becomes a coordinator.

**Claude Code** says: no UI at all. A terminal tool with a 1M token context window. The bet: the interface is irrelevant. Agent intelligence is the only thing that matters.

**Devin / Cognition** says: fully autonomous. The agent works independently from problem to shipped PR. After acquiring Windsurf for $250M, Cognition is building toward agents that don't need a human watching.

Cursor's unique position: they're shipping both the era-two tool (the IDE) and the era-three tool (the Agents Window) simultaneously, letting adoption data decide which one wins.

## The Developer Tension

Now we arrive at the conflict that makes Cursor 3 interesting, not as a product but as a thesis about the future.

The Hacker News thread from April 2 is worth reading in full because it captures a tension that press coverage and feature comparisons miss entirely.

One developer: "Even when I'm using AI agents to write code, I still find myself spending most of my time reading and reasoning about code. Showing me little snippets of my repo in a chat window does not help with this."

Another: "AI labs think they're building an autonomous replacement for software engineers, while software engineers see these systems as tools to supplement the process of software engineering."

A third, more bluntly: "Agent is where tokens are consumed, and where they can charge you more."

These aren't uninformed reactions. They're senior engineers articulating three distinct concerns.

**The craft concern.** Understanding code by reading it, tracing logic, building a mental model of the system: this is how experienced engineers produce reliable software. An interface that abstracts away the code makes that harder, not easier.

**The autonomy concern.** "Agent fleets" sounds like a productivity gain until you realize what it implies about the developer's role. You're no longer the person who writes the solution. You're the person who describes the problem, spins up workers, and reviews their output. For many experienced engineers, that feels less like promotion and more like a shift from craftsperson to middle manager.

**The incentive concern.** Cursor's credit-based pricing model charges for agent usage. More agents, more tokens, more revenue. The business model and the product direction point in the same direction.

Here's what the backlash gets right: the assumption that more agents equals more productivity is unproven at scale. "Shipping more" is not the same as "building better." The quality question is the one nobody in this space has answered yet.

Here's what the backlash gets wrong: the direction of travel. The Tab-to-agent flip already happened. Agent usage isn't growing because Cursor is pushing it. It's growing because the models got good enough. Resisting the agent-first workflow is like resisting autocomplete in 2022: you can do it, and you'll be less productive than the developer next to you who didn't.

The honest answer is that both sides are right. Agents will write most code. And we don't yet know what we lose when they do.

## What This Means For You

If you're evaluating Cursor 3 specifically: the Agents Window is optional. Open it with Cmd+Shift+P → Agents Window. Use it for a week alongside the IDE. Watch your own behavior. If you find yourself spending more time reviewing agent output than writing code, the Agents Window is the interface designed for that workflow.

If you're an architect thinking about team workflows: the interesting question isn't "Cursor or Claude Code?" It's "what does your development process look like when 50%+ of PRs come from agents?" That question has implications for testing infrastructure, review processes, and environment management.

If you're an engineering manager thinking about tooling budget: every tool in this space is converging on token-based pricing. Budget for 3–5x your current AI tooling spend within 12 months if you adopt agent-first workflows.

The uncomfortable prediction: within 12 months, the distinction between "AI IDE" and "agent orchestration platform" collapses. Every tool in this space is headed toward the same destination through different doors. Cursor is just the first to ship both surfaces and let developers choose.

## Recap & Next Steps

- Cursor 3's Agents Window is architecturally significant because it's the first interface Anysphere built from scratch, signaling that VS Code's model is insufficient for agent fleets.
- The March 2026 release sequence is a platform, not a set of features. Five layers (triggers → tools → model → runtime → interface) that depend on each other.
- The developer backlash is both right and wrong. Right that "more agents" doesn't guarantee "better software." Wrong that the direction can be resisted.

---

**Full article source:** Issue description provided complete article text from Medium member-only story.
