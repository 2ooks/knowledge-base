# 9 Codex Tips from the Codex Team
**Source:** https://aidailybrief.beehiiv.com/p/9-codex-tips-from-the-codex-team
**Date:** 2026-05-20
**Author:** AI Daily Brief
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

0
The AI Daily Brief
Posts
9 Codex Tips from the Codex Team
9 Codex Tips from the Codex Team
May 19, 2026 · Episode Links & Takeaways
AI Daily Brief
May 19, 2026
▶ Listen to the episode
HEADLINES
Cursor Composer 2.5
The big question going into 2026 was whether the harness-first labs — Cursor, Cognition, et al. — could compete on the model front before the big labs squeezed them out. Cursor's answer is Composer 2.5: near-frontier coding performance at roughly half the price of Opus 4.7 or GPT-5.5, with Cursor claiming 10x better cost efficiency per task. The model is built on the same Kimi 2.5 base as Composer 2, which means the entire performance lift came from better reinforcement learning — a signal that there's a huge amount of post-training headroom in leading open-source models. And with a dedicated pre-training run now underway on xAI's Colossus 2 cluster, this is only the beginning.
Cursor Blog
Introducing Composer 2.5
Testing Catalog
Cursor released Composer 2.5 with up to 10x cost efficiency
Cursor (X)
Announcement thread
Leon Lin (X)
Results after testing Composer 2.5
Max Weinbach (X)
"Composer 2.5 is very good… I will probably use it over Claude in Cursor"
Chamath Palihapitiya (X)
"Controlling the tokens is controlling the spice" — on why enterprises shouldn't go all-in on OpenAI/Anthropic directly
Cloudflare on Mythos
Cloudflare has published the most useful public review of Anthropic's Mythos yet, and their conclusion is stark: this is a different kind of tool doing a different kind of work. Two capabilities set it apart from general-purpose frontier models. First, Mythos can chain individual bugs into a full exploit rather than just flagging them in isolation — working more like a senior researcher than an automated scanner. Second, it generates functional proof-of-concept exploits, not just descriptions of potential vulnerabilities. The catch: pointing it at a codebase and saying "find something" doesn't work. Cloudflare had to build a custom harness, which limits what casual bad actors can do with it — for now.
Cloudflare Blog
Project Glasswing: what Mythos showed us
Daniel Jeffries (X):
On the right conversation to have about Mythos and AI-assisted offense
Elon Loses the Trial
After three weeks of testimony, the jury needed just two hours to unanimously dismiss Elon Musk's lawsuit against OpenAI and Sam Altman — and not on the merits. Every claim was thrown out on statute of limitations grounds: Musk had simply waited too long to sue. OpenAI successfully argued he knew about plans for a for-profit structure as early as 2018, which started the three-year clock. We got a lot of dirty laundry aired — the power struggle between Musk and the co-founders, the internal documents, the week of "the blip" — but no actual legal resolution on whether OpenAI's conversion was legitimate. And frankly, outside of the AI bubble, almost no one was paying attention.
The Verge
Elon Musk loses his case against Sam Altman
Bloomberg
Elon Musk Loses Case Against Sam Altman Over OpenAI's Future
NYT
Jury Rejects Musk's Claims Against OpenAI
Business Insider
Sam Altman beat Elon Musk in court. Now OpenAI's rivalry with Anthropic takes center stage.
The Verge
Musk v. Altman proved that AI is led by the wrong people
The Verge
Closing arguments analysis: the case "accomplished nothing but airing dirty laundry"
Elon
Musk (X)
Responding to the trial verdict, saying he'll appeal
Max Zeff (X)
Thread on the statute of limitations issue and how the case played out
MAIN STORY
Nine Codex Tips from the Codex Team
Codex has gone from near-zero users to mid-single-digit millions this year, and a lot of people are digging in seriously for the first time. Over the weekend, Jason Lu from the Codex team published "Codex Maxing" on GitHub — nine practices that add up to one larger shift in how to think about the tool: not as a fancier ChatGPT, but as a full workspace where you and agents work in parallel rather than trading turns. Here's the distilled version.
Jason Lu (Github)
Codex-maxxing
1. Long-Running Durable Threads
The monothread pattern: one persistent thread per key work stream.
Codex's context compaction has gotten good enough that you can keep threads alive indefinitely without losing the plot. Jason's approach is to have a dedicated thread for each major work stream rather than scattering conversations across dozens of chats. Key context accumulates in one place instead of getting lost.
2. Voice
Rambling out loud gives the model the messy version of your thinking.
Codex's built-in speech-to-text is essentially the gold standard, and voice changes the nature of the interaction — you can explain what you know, what you don't know, name trade-offs, and let the model help turn messy thoughts into something structured rather than having to do all that work yourself before you ever type a word.
3. Steer
Add feedback while the agent is still working, not after.
Steer lets you update the prompt without interrupting the flow. Instead of crafting a perfect upfront brief and waiting, you start broad and redirect as progress comes in — you and the agent working in parallel. Voice pairs especially well here: just narrate observations as you watch the work unfold.
4. Memory as Files
Work should leave behind structured memory, not just a longer chat.
Native Codex memory is fine for stable preferences, but Jason's argument is that anything important should be serialized into a file system — in his case, an Obsidian vault kept as a GitHub repo. A top-level agents.md instructs Codex to update the relevant pages as work progresses. The vault holds rolling context: people, decisions, open loops, project state. If a thread dies or compacts badly, the knowledge survives.
5. Tools: Computer Use and Browser Use
Tools turn Codex into an evidence gatherer.
Computer use is for files, logs, CSVs, slides, PDFs — anything that lives locally. Browser use is for live documents or sources elsewhere. Connectors (Slack, Gmail, GitHub, Notion, Vercel) are for information that lives in other systems. Understanding which environment fits which task is itself a key skill.
6. Remote Control
Steer long-running work from your phone without reopening the whole project.
Codex is now a full feature in the ChatGPT mobile app. For most people this doesn't mean doing everything from their phone — it means capturing intent while ideas are fresh, redirecting a thread on the go, or steering work that's running over hours without having to sit at a desk. Same principle as steer, but for much longer time horizons.
7. Heartbeats
Scheduled or trigger-based check-ins that keep threads running without you.
A heartbeat is a recurring wake-up for a thread — every 30 minutes, every hour, or tied to a specific event. Jason's chief of staff thread checks Slack and Gmail every 30 minutes to surface unanswered messages. On an animation project, he had Codex check a Slack thread every 15 minutes for feedback, re-render on new comments, and post the result back — crossing Slack, ReMotion, and computer use in one continuous loop.
8. Goals
When success is knowable and verifiable, /goal keeps the agent pushing.
The /goal feature (now available in both Codex and Claude Code) keeps an agent working toward a specific, verifiable success criterion in a way a normal prompt won't. This one is big enough for its own episode — one is coming later in the week.
9. The Side Panel
"The side panel is where Codex stops being only a chat app."
Jason sees the side panel as the most underrated part of Codex. It does three jobs: inspecting artifacts, operating web services, and reviewing changes. The key is that it lets you inspect and annotate while the agent is still working — parallel processing rather than waiting for a full stop. Which, as Jason frames it, is really the thesis of all nine tips: how do you keep the loop running instead of turning it into an endless series of handoffs?