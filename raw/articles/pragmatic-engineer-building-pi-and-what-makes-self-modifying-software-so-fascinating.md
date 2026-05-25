# Building Pi, and what makes self-modifying software so fascinating
**Source:** https://newsletter.pragmaticengineer.com/p/building-pi-and-what-makes-self-modifying
**Date:** 2026-04-29
**Author:** Gergely Orosz
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

The Pragmatic Engineer
Building Pi, and what makes self-modifying software so fascinating
125
3
16
1×
0:00
Current time: 0:00 / Total time: -1:33:07
-1:33:07
Audio playback is not supported on your browser. Please upgrade.
Building Pi, and what makes self-modifying software so fascinating
Mario Zechner, creator of Pi, joins Armin Ronacher to explore AI coding’s limits, arguing that human judgment still matters most in an agent-driven world.
Gergely Orosz
Apr 29, 2026
125
3
16
Share
Transcript
Stream the latest episode
Listen and watch now on
YouTube
,
Spotify
, and
Apple
.
See the episode transcript at the top of this page, and timestamps for the episode at the bottom.
Brought to You by
•
Statsig
– ⁠ The unified platform for flags, analytics, experiments, and more. Stop switching between different tools, and have them all in one place.
•
Sonar
—
The makers of SonarQube, the industry standard for code verification and automated code review. As AI agents generate extreme volumes of code, verification can’t be optional: SonarQube acts as the independent, zero‑trust, multi-layered verification engine that checks every line of code against your quality, security, and architectural standards, so only safe, reliable, and auditable code reaches production.
Try it out for yourself
.
•
WorkOS
– Designing large systems is about tradeoffs. But one thing isn’t a tradeoff: enterprise features. WorkOS gives you APIs to ship enterprise features – SSO, directory sync, RBAC, audit logs – in days, not months. Visit
WorkOS.com
to learn more.
In this episode
Mario Zechner is the creator of
Pi
, a minimalist, self-modifying AI coding agent, that is the foundation upon which OpenClaw (created by Peter Steinberger) is built. Meanwhile, Armin Ronacher is the creator of Flask, and a longtime user of Pi. The pair are also friends.
I sat down with Mario and Armin for the latest episode of the Pragmatic Engineer Podcast for an interesting conversation about AI and their reservations about it – even though both are heavily invested in building AI-powered tools.
Mario explains why he built Pi, and gives his take on why it has become so popular. Armin walks us through how he uses AI tools, including building a game with Pi, and why he always puts human judgment firmly at the heart of his approach.
We cover the risks of over-automation, the limits of agentic workflows, and why strong engineers with informed judgment still matter. We also get into the challenges of working with code written by non-engineers, and whether open source can withstand a tidal wave of agent-generated code.
My observations from the conversation with Mario and Armin
Here are 9 of my most interesting takeaways from talking with Armin and Mario:
1. Pi was built because Claude Code became unpredictable.
Mario was a big fan of Claude Code at first. But as the team behind it pushed velocity and added features, he found that bugs multiplied and the tool’s behavior started to change. Mario wanted an AI harness that behaves in a stable, consistent way. He observed that the addition of new features caused Claude Code to act unpredictably, so resolved to add as few features as possible to Pi.
2. It should be MUCH easier to build specialized tools for specific tasks.
Different projects need different harness types because, as Mario points out, the same hammer is not ideal for every single construction job. As such, Pi is built with the goal of allowing the creation of specialized harnesses. It can modify itself so that a user can create the bespoke harness needed for any task. Mario believes it’s a preview of how self-modifiable software might look in the future.
3. Automation bias is one of the biggest risks of working with AI agents.
Once devs confirm that an AI agent can produce acceptable code, they start to review its output less often, even though agents can – and do! – produce slop. Mario advises being far more sceptical with agents, and cautions that the quality of their output isn’t guaranteed, however well they performed previously.
4. AI agents decrease code quality, but this is not on purpose.
From talking with 30+ engineering teams, Armin found that code quality is down everywhere, and serious projects are shipping with “vibe slop.” A potential cause of this is that keeping agentic output clean and of high quality takes
deliberate
effort, but it’s not clear to many devs exactly
how
to do this. There’s also PR review fatigue and automation bias (the assumption that AI agents invariably generate good code).
5. New trend: AI makes it harder for senior engineers to reject pointless complexity.
Historically, senior engineers kept software complexity at bay simply by saying “no” a lot. But Armin observes that these days, more junior engineers and product managers deploy agent-scripted counterarguments when a senior colleague kicks an idea to the curb. This makes decision-making exhausting, and more bad ideas make it into production as a result.
6. Junior engineers > AI agents.
Mario points out that, unlike humans, agents don’t retain lessons in the same way, nor feel the pain of bad code. Junior engineers do, and the pain of maintenance teaches them to simplify interfaces and avoid bad abstractions – which are both qualities of an effective senior engineer. In this way, a junior engineer is more valuable than an AI agent!
7. Agents refactor less because they feel no “pain.”
Humans rewrite bad interfaces because maintaining them
hurts
, whereas agents will obliviously churn out and extend a terrible structure,
ad infinitum
. This is a big reason why AI agents keep adding more tech debt.
8. Frictionless shipping can actually be harmful.
Armin notes that some friction is desirable; for example, multi-reviewer approvals on critical services, SLO gates (different gates based on the service level objective offered), and migration checklists. The good thing about friction is that it makes humans stop and think.
9. Does not being in San Francisco help people stay grounded about AI?
I asked Mario how he keeps level-headed about AI while building one of the most popular AI agent harnesses. In response, he credits living in Austria, being a father, and enjoying the great outdoors, as his antidotes to all the hype.
The Pragmatic Engineer deepdives relevant for this episode
•
The creator of OpenClaw: “I ship code that I don’t read”
•
Building great SDKs
•
What is inference engineering? Deepdive
•
The impact of AI on software engineers in 2026: key trends
•
Cycles of disruption in the tech industry
•
The AI engineering stack
Timestamps
(
00:00
) Intro
(
07:30
) How Mario, Armin, and Peter Steinberger met
(
15:15
) How 30 dev teams use AI agents: learnings
(
21:50
) The importance of judgment
(
24:26
) Challenges when non-engineers write code
(
28:30
) Downsides of over-automation
(
32:18
) Pi
(
48:09
) OpenClaw + Pi
(
50:54
) “Clankers”
(
57:32
) Open source and AI
(
1:00:22
) Complexity as the enemy
(
1:02:50
) Building an AI-native startup
(
1:11:52
) “Slow the F down”
(
1:16:40
) MCPs vs. CLI
(
1:25:03
) Predictions and staying up to date
References
Where to find Mario Zechner:
• X:
https://x.com/badlogicgames
• LinkedIn:
https://www.linkedin.com/in/mariozechner
• Website:
https://mariozechner.at
Where to find Armin Ronacher:
• X:
https://x.com/mitsuhiko
• LinkedIn:
https://www.linkedin.com/in/arminronacher
• Website:
https://mitsuhiko.at
• Blog:
https://lucumr.pocoo.org
Mentions during the episode:
• Python, Go, Rust, TypeScript and AI with Armin Ronacher:
https://newsletter.pragmaticengineer.com/p/python-go-rust-typescript-and-ai
• Pi:
https://pi.dev
• OpenClaw:
https://openclaw.ai
• Flask:
https://flask.palletsprojects.com/en/stable
• The creator of Clawd: “I ship code that I don’t read”:
https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code
• Amiga 500:
https://en.wikipedia.org/wiki/Amiga_500
• i486:
https://timeline.intel.com/1989/meet-the-i486
• Peter Steinberger on X:
https://x.com/steipete
• Sentry:
https://sentry.io
• Nat Friedman on X:
https://x.com/natfriedman
• Chroma:
https://www.trychroma.com
• Siemens:
https://www.siemens.com
• Y Combinator:
https://www.ycombinator.com
• The Final Bottleneck:
https://lucumr.pocoo.org/2026/2/13/the-final-bottleneck
• Children’s Learning With Tablet Technology is Often Too Passive:
https://news.utexas.edu/2017/08/22/childrens-learning-with-tablet-technology-is-often-passive
• Amp:
https://ampcode.com
• OpenCode:
https://opencode.ai
• Agent Design Is Still Hard:
https://lucumr.pocoo.org/2025/11/21/agents-are-hard
• How Linux is built with Greg Kroah-Hartman:
https://newsletter.pragmaticengineer.com/p/how-linux-is-built-with-greg-kroah
• Mario’s post on X about complexity:
Mario Zechner
@badlogicgames
your biggest enemy is still complexity. it's also your agent's biggest enemy. but it has no holistic view of your code base, so it keeps adding complexity.

and you think that's how it's supposed to be, because the clanker shat it out, and you don't know the stack.

glhf!
10:02 PM · Mar 9, 2026
·
47.4K Views
25 Replies
·
35 Reposts
·
406 Likes
• VibeTunnel:
https://vibetunnel.sh
• Thoughts on slowing the F down:
https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down
• StackOverflow:
https://stackoverflow.com
• David Cramer on LinkedIn:
https://www.linkedin.com/in/dmcramer
• Stainless:
https://www.stainless.com
—
Production and marketing by
Pen Name
.
Discussion about this episode
Comments
Restacks
THIS EPISODE IS PRESENTED BY
The Pragmatic Engineer
Software engineering at Big Tech and startups, from the inside. Deepdives with experienced engineers and tech professionals who share their hard-earned lessons, interesting stories and advice they have on building software.
Especially relevant for software engineers and engineering leaders: useful for those working in tech.
Software engineering at Big Tech and startups, from the inside. Deepdives with experienced engineers and tech professionals who share their hard-earned lessons, interesting stories and advice they have on building software. 

Especially relevant for software engineers and engineering leaders: useful for those working in tech.
Subscribe
Listen on
Substack App
Apple Podcasts
Spotify
YouTube Music
YouTube
RSS Feed
Appears in episode
Gergely Orosz
Recent Episodes
Why Rust is different, with Alice Ryhl
May 20
•
Gergely Orosz
TypeScript, C# and Turbo Pascal with Anders Hejlsberg
May 13
•
Gergely Orosz
Designing Data-intensive Applications with Martin Kleppmann
Apr 22
•
Gergely Orosz
DHH’s new way of writing code
Apr 8
•
Gergely Orosz
Scaling Uber with Thuan Pham (Uber’s first CTO)
Apr 1
•
Gergely Orosz
Building WhatsApp with Jean Lee
Mar 18
•
Gergely Orosz
From IDEs to AI Agents with Steve Yegge
Mar 11
•
Gergely Orosz