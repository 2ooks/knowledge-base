# Spec-driven development: The AI engineering workflow at Notion | Ryan Nystrom
**Source:** https://www.lennysnewsletter.com/p/spec-driven-development-the-ai-engineering
**Date:** 2026-05-11
**Author:** Claire Vo
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Playback speed
×
Share post
Share post at current time
Share from 0:00
0:00
/
Transcript
12
1
Spec-driven development: The AI engineering workflow at Notion | Ryan Nystrom
🎙 Ryan Nystrom (Notion) shows how to automate standups, ship PRs from a single comment, and use spec-first development so agents do the coding while you do the thinking
Claire Vo
May 11, 2026
12
1
Share
Transcript
Ryan Nystrom
is a software engineer at Notion. He joined in December 2024 after Notion acquired Campsite, the team communication platform he co-founded with Brian Lovin. At Notion, he’s been a core builder of Notion AI and the Custom Agents feature launched in February 2026. He manages a team of six to seven engineers while still writing code himself, currently running Project Afterburner, a push to cut Notion’s CI time to a quarter of its current duration.
What you’ll learn:
How to build a Notion AI custom agent that auto-generates your daily standup pre-read by pulling from Slack, GitHub, Honeycomb metrics, and yesterday’s meeting transcript
How to configure subagents and MCP integrations within Notion AI
How Notion’s internal “Boxy” system lets engineers @mention Codex from within Notion comments and get a full pull request with screenshots in 20 minutes
The spec-first development workflow: dictate an idea into Whisper, have Codex format it as a proper spec, commit it to the repo, and let the agent implement and verify it autonomously
Why fast CI is absolutely critical in the age of AI coding agents
How to prompt AI coding agents to defend their reasoning under pushback
Why engineering managers and even senior executives should keep writing code
Brought to you by:
WorkOS
—Make your app enterprise-ready today
Orkes
—The enterprise platform for reliable applications and agentic workflows
In this episode, we cover:
(
00:00
) Introduction to Ryan Nystrom
(
02:48
) How AI has upended 12+ years of the same working routine
(
04:30
) Project Afterburner: Notion’s push to cut CI time to a quarter
(
09:00
) Why high-frequency, high-quality meetings beat lower-frequency standups
(
11:10
) How automated context surfaces every engineer’s work equally
(
12:15
) Why cutting meeting prep is a burnout protection mechanism
(
14:26
) The case for engineering managers writing code
(
16:13
) Inside “Boxy”: Notion’s internal VM-based background agent system
(
20:30
) Old World vs. New World code review
(
24:51
) Prompting Codex from Notion comments
(
29:20
) The emotions around code review
(
31:01
) Quick recap
(
32:00
) Spec-first development: writing and checking agent specs into the repo
(
35:10
) The spec as changelog: version control for how a feature actually works
(
37:53
) How engineers’ roles are evolving
(
39:00
) Lightning round
(
45:21
) Where to find Ryan
Tools referenced:
• Notion AI:
https://www.notion.com/product/ai
• Notion Custom Agents:
https://www.notion.com/blog/introducing-custom-agents
• Codex (OpenAI):
https://openai.com/codex
• Claude Code (Anthropic):
https://claude.ai/code
• Honeycomb (observability + MCP):
https://www.honeycomb.io
• Whisper (OpenAI voice transcription):
https://openai.com/research/whisper
• Slack:
https://slack.com
• GitHub:
https://github.com
Other references:
• How Stripe built “minions”—AI coding agents that ship 1,300 PRs weekly from Slack reactions | Steve Kaliski (Stripe):
https://www.chatprd.ai/how-i-ai/stripes-ai-minions-ship-1300-prs-weekly-from-a-slack-emoji
• Notion 3.3 Custom Agents launch (February 24, 2026):
https://www.notion.com/releases/2026-02-24
Where to find Ryan Nystrom:
X:
https://x.com/ryannystrom
LinkedIn:
https://www.linkedin.com/in/ryannystrom/
GitHub:
https://github.com/rnystrom
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
What launched at Google I/O 2026 (30-minute day 1 recap)
May 20
•
Claire Vo
HTML is the new Markdown: How Anthropic engineers are building with Claude Code | Thariq Shihipar
May 18
•
Claire Vo
Code with Claude: The 5 biggest updates explained
May 7
•
Claire Vo
Quests, token leaderboards, and a skills marketplace: The elite AI adoption playbook | John Kim (Sendbird)
May 6
•
Claire Vo
The internal AI tool that’s transforming how Stripe designs products | Owen Williams
May 4
•
Claire Vo
From a $6.90 newsletter to $3M API: How a non-coder built Memelord | Jason Levin
Apr 27
•
Claire Vo
GPT 5.5 just did what no other model could
Apr 23
•
Claire Vo