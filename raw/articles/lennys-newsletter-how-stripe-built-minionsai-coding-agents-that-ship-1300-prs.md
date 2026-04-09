# How Stripe built “minions”—AI coding agents that ship 1,300 PRs weekly from Slack reactions | Steve Kaliski (Stripe engineer)
**Source:** https://www.lennysnewsletter.com/p/how-stripe-built-minionsai-coding
**Date:** March 25, 2026
**Author:** Lenny's Newsletter
**Score:** 4/5 | **Concepts:** harness-engineering, developer-tooling-competitive-landscape, ai-agent-ecosystem
**Scoring reason:** Detailed walkthrough of Claude Code and Cowork features (Remote Control, Dispatch, Channels, Computer Use) as persistent agent orchestration primitives.

Playback speed
×
Share post
Share post at current time
Share from 0:00
0:00
/
0:00
Transcript
6
1
How Stripe built “minions”—AI coding agents that ship 1,300 PRs weekly from Slack reactions | Steve Kaliski (Stripe engineer)
🎙️ How Stripe engineers deploy AI agents that write PRs from Slack reactions, plus a demo of machine-to-machine payments that plan a birthday party for $5.47
Claire Vo
Mar 25, 2026
6
1
Share
Transcript
Steve Kaliski
is a software engineer at Stripe who has spent the past six and a half years building developer tools and payment infrastructure. He’s part of the team that created “minions”—Stripe’s internal AI coding agents, which now ship approximately 1,300 pull requests per week with minimal human intervention beyond code review. In this episode, Steve demonstrates how Stripe engineers activate development work from Slack and leverage cloud-based development environments for parallel agent workflows, and demos machine-to-machine payments where AI agents transact autonomously with third-party services.
Listen or watch on
YouTube
,
Spotify
, or
Apple Podcasts
What you’ll learn:
How Stripe’s “minions” write 1,300 pull requests per week with minimal human intervention
Why a good developer experience for humans creates better outcomes for AI agents
The critical role of cloud development environments in unlocking AI-powered engineering velocity
The machine payment protocol that lets AI agents spend money to accomplish tasks
The code review strategy for handling thousands of agent-written PRs
Why non-engineers at Stripe are starting to use minions to ship code
The future of software businesses built primarily for agent consumers
Brought to you by:
Optimizely
—Your AI agent orchestration platform for marketing and digital teams
Rippling
—Stop wasting time on admin tasks, build your startup faster
In this episode, we cover:
(
00:00
) Introduction to Steve
(
02:39
) Stripe’s minions and their effect on Stripe as a whole
(
04:42
) Why activation energy matters more than execution
(
05:44
) What is a minion? The technical architecture
(
06:52
) Demo: Activating a minion from Slack with an emoji
(
09:04
) Why good developer experience benefits both humans and agents
(
11:22
) Walking through the agent loop and system prompts
(
13:42
) Why Stripe chose Goose as their agent harness
(
16:00
) The role of Stripe’s developer productivity team
(
17:15
) Why cloud environments unlock multi-threaded AI engineering
(
21:14
) One-shot prompting: from Slack to shipped PR
(
22:04
) How Stripe handles code review for 1,300 AI-written PRs weekly
(
23:44
) Non-engineers using minions across the company
(
24:53
) Demo: Planning a birthday party with Claude and machine payments
(
32:15
) Quick recap
(
35:08
) The future of ephemeral, API-first businesses for agents
(
36:36
) Lightning round and final thoughts
Tools referenced:
• Goose (AI agent harness):
https://github.com/block/goose
• Claude Code:
https://claude.ai/code
• Cursor:
https://cursor.sh/
• VS Code:
https://code.visualstudio.com/
• Slack:
https://slack.com/
• Browserbase:
https://browserbase.com/
• Parallel AI:
https://www.parallel.ai/
• PostalForm:
https://postalform.com/
• Stripe Climate:
https://stripe.com/climate
Other references:
• Stripe machine payments:
https://docs.stripe.com/payments/machine
• Blue-Green Deployment:
https://martinfowler.com/bliki/BlueGreenDeployment.html
• Git worktrees:
https://git-scm.com/docs/git-worktree
Where to find Steve Kaliski:
Twitter:
https://twitter.com/stevekaliski
LinkedIn:
https://www.linkedin.com/in/steve-kaliski-079a7710/
Where to find Claire Vo:
ChatPRD:
https://www.chatprd.ai/
Website:
https://clairevo.com/
LinkedIn:
https://www.linkedin.com/in/clairevo/
X:
https://x.com/clairevo
Production and marketing by
https://penname.co/
. For inquiries about sponsoring the podcast, email
[email protected]
.
Discussion about this video
Comments
Restacks
How I AI
How I AI, hosted by Claire Vo, is for anyone wondering how to actually use these magical new tools to improve the quality and efficiency of their work. In each episode, guests will share a specific, practical, and impactful way they’ve learned to use AI in their work or life. Expect 30-minute episodes, live screen sharing, and tips/tricks/workflows you can copy immediately. If you want to demystify AI and learn the skills you need to thrive in this new world, this podcast is for you.
How I AI, hosted by Claire Vo, is for anyone wondering how to actually use these magical new tools to improve the quality and efficiency of their work. In each episode, guests will share a specific, practical, and impactful way they’ve learned to use AI in their work or life. Expect 30-minute episodes, live screen sharing, and tips/tricks/workflows you can copy immediately. If you want to demystify AI and learn the skills you need to thrive in this new world, this podcast is for you.
Subscribe
Listen on
Substack App
Apple Podcasts
Spotify
YouTube
Overcast
Pocket Casts
RSS Feed
Appears in episode
Claire Vo
Writes
Claire’s Substack
Subscribe
Recent Episodes
How Microsoft’s AI VP automates everything with Warp | Marco Casalaina
Mar 23
•
Claire Vo
From journalist to iOS developer: How LinkedIn’s editor builds with Claude Code | Daniel Roth
Mar 16
•
Claire Vo
From Figma to Claude Code and back | Gui Seiz & Alex Kern (Figma)
Mar 11
•
Claire Vo
Mastering Midjourney: How to create consistent, beautiful brand imagery without complex prompts
Mar 9
•
Claire Vo
How Coinbase scaled AI to 1,000+ engineers | Chintan Turakhia
Mar 2
•
Claire Vo
5 OpenClaw agents run my home, finances, and code | Jesse Genet
Feb 25
•
Claire Vo
“I haven’t written a single line of front-end code in 3 months”: How Notion’s design team uses Claude Code to prototype
Feb 23
•
Claire Vo