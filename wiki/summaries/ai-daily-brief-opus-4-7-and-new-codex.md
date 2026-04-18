---
last_validated: 2026-04-18
decay_rate: fast
---

# How to Use Opus 4.7 and the New Codex

**Source URL**: https://aidailybrief.beehiiv.com/p/how-to-use-opus-4-7-and-the-new-codex
**Date**: 2026-04-17
**Publication**: AI Daily Brief

## Summary

Anthropic released Claude Opus 4.7 and OpenAI released a major Codex update on the same day, representing "meaningful capability upgrades" requiring new interaction patterns. Codex now features computer use on Mac (agents can see, click, and type across any app), in-app browser with comment mode, native GPT Image 1.5 integration, and rich file previews. The most important conceptual shift is the "mono-thread pattern" enabled by heartbeats and thread automations — Codex can now maintain context in a single thread over time rather than starting fresh each session. Opus 4.7 is "literally one step better than 4.6 in every dimension" with notable improvements in agentic coding, Office QA (57.1% to 80.6%), computer use (72.7% to 78%), and visual/design tasks, though one long-context retrieval benchmark regressed significantly. The article emphasizes these are not Mythos or "Spud" but represent a shift from babysitting agents to real delegation.

## Key Claims

- OpenAI's new Codex features computer use on Mac: agents can see, click, and type across any app with their own cursor; multiple agents can work in parallel in the background without interfering with user activity
- Codex includes in-app browser with "comment mode" — users can click directly on page elements to give agents precise context, particularly useful for front-end iteration and bug reporting
- Native GPT Image 1.5 integration is built into Codex for mockups, image edits, and variants within the same thread
- Rich file previews in Codex mean PDFs, spreadsheets, slides, and documents render inline in the sidebar as downloadable artifacts, not just code
- Riley Brown (Vibecode): "This is exactly what I was hoping for. Full permissions, no Cowork-like feature limiting agent abilities. Just Codex."
- Aaron Levy (Box) sees this as signaling agents that can "execute long-running tasks in the background for all areas of knowledge work — drafting reports, setting up data rooms, reviewing contracts, processing invoices, and more"
- The "mono-thread pattern" is the most important conceptual shift: heartbeats and thread automations let Codex maintain context inside a single thread over time instead of starting fresh each run
- Nick Bauman (Codex team) is "mono-thread pilled" — his most useful thread has been running for three weeks, checking Slack, Gmail, and PRs every hour
- Anthony Kroger reports "never worrying about context windows at all" with compaction improvements: "It can compact three times and the model still remembers the details somehow"
- Nick Bauman: "So much coding agent design is built on the assumption that breaching context windows yields progressively worse results. When you drop this assumption, the product direction it opens up is very exciting"
- Jason Liu (OpenAI) published a "Codex Chief of Staff" recipe using a local folder vault (projects/, notes/, AGENTS.md) as durable memory, with a 15-minute heartbeat loop checking sources and interrupting only when something matters
- Opus 4.7 is "literally one step better than 4.6 in every dimension" — 4.7 Low > 4.6 Medium, 4.7 Medium > 4.6 High, 4.7 High > 4.6 Max on agentic coding benchmarks
- Opus 4.7 benchmark improvements: Finance Agent 60.1% → 64.4%, Office QA Pro 57.1% → 80.6%, OS World computer use 72.7% → 78%, vending machine economic benchmark +20% earnings
- Opus 4.7 shows clear improvements on visual and design tasks — Mike Taylor: "the best PowerPoint I've ever seen from an LLM"; strong first impressions on front-end web design, agentic CAD design, and chart reasoning from PDFs
- One notable Opus 4.7 regression: long-context retrieval benchmark dropped from 78.3% to 32.2%, though Boris Cherny says the benchmark is being phased out because it "overweights distractor-stacking tricks rather than real applied reasoning"
- Cat Wu (Anthropic): "Delegate, don't micromanage" — treat Opus 4.7 like a capable engineer receiving a full handoff, not a pair programmer being guided line-by-line
- Progressive clarification across multiple turns can reduce quality on Opus 4.7; instead, provide full goal, constraints, and acceptance criteria upfront
- Opus 4.7 is better at self-verification than any previous Claude model, but you must "tell it how to verify and explicitly build a verification loop into your prompt"
- Boris Cherny uses "extra high" effort for most tasks and "max" for the hardest; Max applies only to current session, other effort levels are sticky across sessions
- UI philosophy divide: Claude Desktop has three distinct modes (Chat, Cowork, Code) vs. Codex's single unified interface — OpenAI bets the agent is smart enough that "the interface should basically disappear," Anthropic bets the modes are different enough that collapsing them creates compromise

## Tags

#opus-4.7 #codex #computer-use #mono-thread-pattern #heartbeats #thread-automations #gpt-image-1.5 #agentic-coding #anthropic #openai #claude-desktop #codex-chief-of-staff #context-compaction #delegation-pattern #ui-philosophy #visual-reasoning #benchmark-regression

## Related

- [[harness-engineering]] — mono-thread pattern, heartbeats, thread automations, context compaction
- [[ai-coding-agents-and-developer-role-shift]] — "delegate don't micromanage," shift from babysitting to real handoffs
- [[developer-tooling-competitive-landscape]] — UI philosophy divide (Anthropic's mode-based vs. OpenAI's unified interface), simultaneous releases
- [[ai-agent-ecosystem]] — computer use on Mac, background parallel agents, Codex Chief of Staff pattern
