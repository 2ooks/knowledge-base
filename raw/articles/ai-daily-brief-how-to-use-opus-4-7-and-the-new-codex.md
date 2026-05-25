# How to Use Opus 4.7 and the New Codex
**Source:** https://aidailybrief.beehiiv.com/p/how-to-use-opus-4-7-and-the-new-codex
**Date:** 2026-04-18
**Author:** AI Daily Brief
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

0
The AI Daily Brief
Posts
How to Use Opus 4.7 and the New Codex
How to Use Opus 4.7 and the New Codex
April 17, 2026 · Episode Links & Takeaways
AI Daily Brief
April 17, 2026
▶ Listen to the episode
Follow along with the
slideshow
and find other companion materials at
play.aidailybrief.ai
Try out our list of eleven things to try this weekend
MAIN STORY
How to Use Opus 4.7 and the New Codex
Yesterday we got not one but two big releases — a model and a harness. Neither is Mythos or Spud, but together they represent a meaningful set of capability upgrades that will take some time to fully integrate into how we work. This episode is a practical guide to both: what's new, what the first reactions are telling us, and specifically what you as a knowledge worker or operator should actually go try.
Anthropic
Introducing Claude Opus 4.7
OpenAI
Codex for (almost) everything
Play companion site
How to Use Opus 4.7 and the New Codex — companion slides
NEW RELEASES
What's New in Codex
Coding was never really the point — this makes that obvious.
The headline feature is computer use on Mac: Codex can now see, click, and type across any app on your computer with its own cursor. Multiple agents can work in parallel in the background without interfering with what you're doing, and Codex can operate apps that don't have APIs. Riley Brown from Vibecode: "This is exactly what I was hoping for. Full permissions, no Cowork-like feature limiting agent abilities. Just Codex. If you ask for a coding task, it gives you code. If you ask for a presentation or doc, it gives you a presentation or doc." Aaron Levy from Box sees exactly what this signals: agents that can code, work with tools, and use computers can execute long-running tasks in the background for all areas of knowledge work — drafting reports, setting up data rooms, reviewing contracts, processing invoices, and more. A new in-app browser with comment mode lets you load a page and click directly on elements to give the agent precise context, which is especially useful for front-end iteration, bug reporting, and any workflow where pointing is faster than describing. Native image generation from GPT Image 1.5 is now built in — mockups, image edits, and variants all live in the same thread. And rich file previews mean PDFs, spreadsheets, slides, and documents render inline in the sidebar as proper artifacts you can download, not just code.
OpenAI
Codex for (almost) everything
James Sun (X)
In-browser comment mode
Pash (X)
Lessons from OpenClaw - Heartbeats in Codex
Thomas Ricouard (X)
Small details that matter: new features in the Codex app
Riley Brown (X)
This is exactly what I was hoping for
Harry Weinstein (X)
First time I've ever seen an LLM operate a GUI as fast as a person, and it's surreal
Aaron Levie (X)
Another jump in what agents will look like for knowledge workers
The Mono-Thread Pattern
"Some work should not reset every time I ask a question."
The most important conceptual shift in the new Codex isn't a feature, it's a paradigm. Heartbeats and thread automations let Codex maintain context inside a single thread over time — instead of each run starting fresh, Codex wakes up in the same conversation with the history already in place. Nick Bauman from the Codex team has become what he calls "mono-thread pilled": his most useful Codex thread is one he's been running for three weeks, checking Slack, Gmail, and PRs every hour, turning the noise into clean signal. The old mental model — every question is a new chat, every project is a new conversation — was a byproduct of technical limitations. Long threads used to degrade and go muddy. Now, with compaction improvements, Anthony Kroger reports never worrying about context windows at all. "It can compact three times and the model still remembers the details somehow." Nick Bauman again: "So much coding agent design is built on the assumption that breaching context windows yields progressively worse results. When you drop this assumption, the product direction it opens up is very exciting." A thread automation is an interval trigger on an existing thread that runs in the same conversation — not just a scheduled prompt. It accumulates examples of what you care about, which asks you act on, which sources matter, and gets more useful over time.
Nick Bauman (X)
My Codex threads are alive — mono-threads
The Codex Chief of Staff Recipe
Try this one first — it unlocks everything else.
Jason Liu from OpenAI published a recipe for a personal chief of staff built on the new Codex features. It uses a local folder vault as the durable memory layer: a projects folder for active work streams, a notes folder for scratch and one-off captures, and an AGENTS.md file that tells Codex how the vault works and how to operate within it. Setup starts with an interview: Codex asks who you are, what you're responsible for, who matters, what you're worried about missing, which Slack channels, email threads, docs, repos, and meetings matter, and what you don't want to be interrupted about. (If you've built a personal context portfolio, you can just transport that in and skip most of the interview.) From there, it proposes project notes and recommends plugins — Slack, Gmail, Drive, Calendar, GitHub. The core loop is a heartbeat every 15 minutes: the thread wakes up, checks your sources, looks for pending asks, blockers, or decisions, notices how your priorities are shifting, and interrupts you only when something actually matters. It improves the heartbeat prompt, AGENTS.md, and project notes as it learns what you care about. "The useful behavior is not a bigger summary. It's a short interruption when something actually matters."
Jason Liu (X)
Codex Chief of Staff recipe
Opus 4.7: What's Actually New
"Literally one step better than 4.6 in every dimension."
The biggest knock on Opus 4.7 isn't what it is — it's what it's not. Knowing that Mythos preview is out there makes any lesser release feel underwhelming. But if it weren't for that context, this would be getting a lot more love. Latent Space called it correctly: one step better than 4.6 in every dimension. The agentic coding chart tells the story precisely — 4.7 Low is strictly better than 4.6 Medium, 4.7 Medium is strictly better than 4.6 High, and 4.7 High is better than 4.6 Max. On knowledge worker benchmarks that matter: Finance Agent jumps from 60.1% to 64.4%, Office QA Pro from 57.1% to 80.6%, OS World computer use from 72.7% to 78%. The vending machine economic benchmark showed 20% more earnings. Visual and design tasks are a clear area of improvement — Mike Taylor called it "the best PowerPoint I've ever seen from an LLM," and first impressions on front-end web design, agentic CAD design, and chart reasoning from PDFs are all strong. There is one notable regression: a long-context retrieval benchmark dropped from 78.3% to 32.2%, though Boris Cherny says that benchmark is being phased out because it overweights distractor-stacking tricks rather than real applied reasoning.
Anthropic
Introducing Claude Opus 4.7
Latent Space
Literally one step better than 4.6 in every dimension
Mike Taylor (X)
Opus 4.7 has the distinct honor of making the best PowerPoint I've ever seen from an LLM
Adam New (X)
Opus 4.7 appears to be state-of-the-art at agentic CAD design
This Week in AI (X)
The leap in design quality is insane
How to Get the Most Out of Opus 4.7
Delegate, don't micromanage — this model is built for real handoffs.
The Anthropic team flagged a few interaction patterns that get the most out of 4.7, some of which break habits from 4.6. Cat Wu's main guidance: delegate, don't micromanage. Treat the model like a capable engineer you're handing a task to — not a pair programmer you're guiding line by line. Progressive clarification across multiple turns can actually reduce quality on 4.7. Instead, put the full goal, constraints, and acceptance criteria upfront. She also noted that 4.7 is better at self-verification than any previous Claude model — but you have to tell it how to verify and explicitly build a verification loop into your prompt. Boris Cherny shared a tip on effort levels: he uses "extra high" for most tasks and "max" for the hardest. Max applies only to the current session; other effort levels are sticky and persist across sessions. For practical use cases to try: vision has improved meaningfully, so whiteboard photos, dense dashboard screenshots, and chart images from PDFs and 10-Ks are worth testing. More importantly, try longer and harder tasks that you'd previously have broken into pieces — end-to-end research projects, extended legal argument construction, investment thesis development, strategic option analysis, complex data cleaning, and cross-functional synthesis with verification. The 4.7 framing from Anthropic is less babysitting, more real delegation.
Cat Wu (X)
Usage tips for Opus 4.7 — delegate, don't micromanage
Boris Cherney (X)
Tips and tricks
— manually adjust effort level
The UI Philosophy Divide
One text box, infinite capabilities — versus purpose-built modes.
With Claude Code Desktop updated just this week and the new Codex shipping simultaneously, it's a rare moment to compare two competing interface philosophies side by side. In Claude Desktop, you toggle between Claude Chat, Cowork, and Claude Code — three distinct modes for three types of work. In Codex, it's just one thing. Ask for a coding task, get code. Ask for a doc, get a doc. The bet on the OpenAI side is that the agent is smart enough that the interface should basically disappear — switching modes is friction, and this hearkens back to the original ChatGPT: one text box, infinite capabilities. The Anthropic bet is that these three modes are different enough that collapsing them into one interface creates meaningful compromise — closer to how native apps are designed, where you don't write documents in your email client. For now, if you have a strong preference either way, you have a choice.