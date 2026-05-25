# DHH’s new way of writing code
**Source:** https://newsletter.pragmaticengineer.com/p/dhhs-new-way-of-writing-code
**Date:** 2026-04-08
**Author:** Gergely Orosz
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

The Pragmatic Engineer
DHH’s new way of writing code
196
3
13
1×
0:00
Current time: 0:00 / Total time: -1:46:14
-1:46:14
Audio playback is not supported on your browser. Please upgrade.
DHH’s new way of writing code
David Heinemeier Hansson on why he shifted to an agent-first AI workflow, and what it means for how software is built and who builds it.
Gergely Orosz
Apr 08, 2026
196
3
13
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
WorkOS
– The infrastructure B2B and AI-native companies use to sell to enterprise. It covers everything enterprise security requires: SSO, SCIM, RBAC, Audit Logs, AI governance, and more. Engineering teams ship it in days. Trusted by 2,000+ fast-growing companies, including OpenAI, Anthropic, Cursor, and Vercel.
WorkOS.com
•
Sonar
– The makers of SonarQube, the industry standard for automated code review.
Sonar
helps reduce outages, improve security, and lower risks associated with AI and agentic coding.
See how SonarQube Advanced Security
is empowering the Agent Centric Development Cycle (AC/DC) with new capabilities.
In this episode
David Heinemeier Hansson (DHH) is the creator of Ruby on Rails and Omarchy, co-founder and CTO of
37signals
(maker of Basecamp and HEY), and the author of several books including the best-seller,
Remote: Office Not Required
, co-written with
Jason Fried
.
Six months ago, in an episode of
the Lex Fridman podcast
, David shared how he doesn’t use AI tools to write code: he types out all his code. But things have changed a lot since then.
In this episode, we discuss his approach to building software, how it’s changed in the last six months, and why he now takes an agent-first approach, and how he barely writes any code by hand. We go into how he uses AI agents: which alter how he builds and explores ideas, but also how his standards of quality and craft remain the same.
We also discuss how 37signals thinks about product development, from the role of designers to the importance of aesthetics and taste. David gets into how he sees beauty and functionality as closely linked, and why strong opinions about design lead to better software.
Finally, we look into the uneven impact of AI which amplifies senior engineers while creating challenges for junior developers, and what this may mean for the role of the software engineer.
Key observations from DHH
Here are 12 of my most interesting takeaways from talking with DHH:
1. His philosophy on AI has not changed, but the available tools very much have.
Autocomplete-style coding assistants were genuinely annoying for experienced developers six months ago. Things changed with the shift from tab-completion to agent harnesses, plus the emergence of powerful models like Opus 4.5 – when agents started producing code which DHH does want to merge with little to no alteration.
2. Beautiful code and products aren’t matters of vanity; they’re signals of correctness.
Dipping into philosophy, DHH says: “When something is beautiful, it’s likely to be correct.” He argues that Steve Jobs wanted the
inside
of a computer to be beautiful because people who care about circuit board layout are also those who sweat on the details of the UI.
3. DHH’s development workflow, today:
he runs
tmux
to have two models running, and
neovim
in the center. Specifics:
One fast LLM running (typically Gemini 2.5) in one split terminal
A slow but more powerful model in another terminal (usually Opus)
NeoVim for reviewing diffs via
Lazygit
4. Ruby on Rails seems to be enjoying a Renaissance thanks to AI.
Rails is one of the most token-efficient ways of building web apps and is well-suited for agent workflows. Testing is part of the framework, which helps agents write tests and validate their own outputs. It also produces code that humans can read and verify, which matters when reviewing agent output at speed.
5. A big win from using AI agents is tackling stuff that you wouldn’t have before.
A senior engineer at 37signals ran a “P1 optimization” project to improve the
fastest
1% of requests. They optimized the P1 from being at 4 milliseconds, to under half a millisecond. This is the sort of work that wouldn’t have been considered previously!
6. Running several AI agents feels less like “project management” and more like “wearing a mech suit.”
Being a project manager of agents did not appeal to DHH, but now that he’s building with several agents, he feels like he’s in control of the work which is being hyper-accelerated.
7. Senior engineers benefit from AI a lot more than juniors.
At 37signals, senior engineers gain more from AI tools as they can validate whether an agent’s output is production-ready. DHH also notes that Amazon reached the same conclusion, and no longer lets junior programmers ship agent-generated code to production without review.
8. 37signals has one designer for every two engineers.
The company has around 20 software engineers and 10 designers. Designers do far more than design; they’re also product managers and “implementers” rolled into one. On top of making things look good, they figure out what should be built, how it should work, and often build the first version. DHH compares design at 37signals to jewelry design: “you should know the properties of gold. You should know how it bends.”
9. AI agents could turn 37signals’ “designer model” into the industry standard.
AI tools now empower designers to implement more of their vision directly, and DHH suspects the rest of the industry is converging toward what 37signals has always done: working with small teams, where designers are also builders.
10. Command Line Interfaces (CLI) feel like the ultimate AI interface, which validates the Unix philosophy of the 1970s
. DHH is building CLIs for all 37signals products because they let agents chain tools together. “GitHub also has a CLI, and Sentry as well,” he says. “You can tie all these things together so an agent can check errors, write a fix, post a PR, and report back to basecamp.”
11. The demise of the two-month product development cycle described in the book
‘Shape Up: Stop Running in Circles and Ship Work that Matters’.
The
2019 title
by Ryan Signer covered how 37signals worked at the time, and DHH reveals that this methodology now needs rewriting because AI acceleration has made that timeline feel slow.
12. Eight hours of sleep is non-negotiable – even during an AI gold rush!
DHH believes the dopamine loop of shipping with agents is intoxicating and can lead to higher risk of burnout. So, he sleeps eight hours and doesn’t use an alarm.
The Pragmatic Engineer deepdives relevant for this episode
•
Are AI agents actually slowing us down?
•
How Claude Code is built
•
The future of software engineering with AI: six predictions
•
The AI Engineering Stack
•
Mitchell Hashimoto’s new way of writing code
•
How Linux is built
with Greg Kroah-Hartman
Timestamps
(
00:00
) Intro
(
02:11
) Omarchy and Ruby on Rails
(
08:25
) 37signals overview
(
10:12
) Launching HEY
(
18:38
) Building HEY
(
22:47
) Designers at 37signals
(
28:08
) The craft of design
(
31:52
) Why DHH now embraces AI workflows
(
39:45
) The AI inflection point
(
44:23
) DHH’s agent-first workflow
(
55:09
) AI’s impact on junior developers
(
1:03:08
) Developer experience with AI
(
1:16:43
) What does AI mean for developers?
(
1:23:33
) 37signals teams and hiring
(
1:38:20
) Work-life balance with AI
(
1:41:41
) Why DHH keeps building
(
1:45:24
) Closing
References
Where to find DHH:
• X:
https://x.com/dhh
• LinkedIn:
https://www.linkedin.com/in/david-heinemeier-hansson-374b18221
• Website:
https://dhh.dk
• Newsletter:
https://world.hey.com/dhh
• Podcast:
https://37signals.com/podcast
Mentions during the episode:
• Omarchy:
https://omarchy.org
• Linux:
https://www.linux.org
• Ubuntu:
https://ubuntu.com
• Arch Linux:
https://archlinux.org
• Hyprland:
https://hypr.land
• Ruby on Rails:
https://rubyonrails.org
• Basecamp:
https://basecamp.com
• Fizzy:
https://www.fizzy.do
• Jason Fried on X:
https://x.com/jasonfried
• HEY:
https://www.hey.com
• Shape Up: Stop Running in Circles and Ship Work that Matters:
https://basecamp.com/shapeup
• Zoltán Hosszú applying to 37signals:
https://zoltan.co/37signals
• Daring Fireball:
https://daringfireball.net
• Smalltalk:
https://en.wikipedia.org/wiki/Smalltalk
• DHH: Future of Programming, AI, Ruby on Rails, Productivity & Parenting | Lex Fridman Podcast #474:
• Homer’s typing Bird:
• Real-world engineering challenges: building Cursor:
https://newsletter.pragmaticengineer.com/p/cursor
• Building a best-selling game with a tiny team – with Jonas Tyroller:
https://newsletter.pragmaticengineer.com/p/thronefall
• Andrej Karpathy on X:
https://x.com/karpathy
• Reflexive AI usage is now a baseline expectation at Shopify:
tobi lutke
@tobi
https://t.co/6i6h3sKi3x
2:28 PM · Apr 7, 2025
·
2.26M Views
287 Replies
·
947 Reposts
·
6.76K Likes
• Claude Code:
https://code.claude.com
• OpenCode:
https://opencode.ai
• MacBook Neo:
https://www.apple.com/macbook-neo/
• tmux:
https://github.com/tmux/tmux/wiki
• Kimi K2.5:
https://kimik2ai.com/k2.5
• Agent first, agent native:
https://basecamp.com/agents
• Sentry:
https://sentry.io
• Moore’s law:
https://en.wikipedia.org/wiki/Moore%27s_law
• The Bitter Lesson:
http://www.incompleteideas.net/IncIdeas/BitterLesson.html
• Scaling Uber with Thuan Pham (Uber’s first CTO):
https://newsletter.pragmaticengineer.com/p/scaling-uber-with-thuan-pham-ubers
• Waymo:
https://waymo.com
• Elon Musk: “There will not be a steering wheel” in 20 years:
https://www.axios.com/2017/12/15/elon-musk-there-will-not-be-a-steering-wheel-in-20-years-1513304216
• Leopold Aschenbrenner — 2027 AGI, China/US super-intelligence race, & the return of history:
Dwarkesh Podcast
Leopold Aschenbrenner — 2027 AGI, China/US super-intelligence race, & the return of history
Listen now
2 years ago · 89 likes · 16 comments · Dwarkesh Patel
• Terminator 2 Things & Ideas we would have never thought:
• Commodore 64:
https://en.wikipedia.org/wiki/Commodore_64
• PlayStation:
https://www.playstation.com
• Jevons paradox:
https://en.wikipedia.org/wiki/Jevons_paradox
• OpenClaw:
https://openclaw.ai
• The creator of Clawd: “I ship code I don’t read”:
https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code
• John Carmack on X:
https://x.com/ID_AA_Carmack
• TDD, AI agents and coding with Kent Beck:
https://newsletter.pragmaticengineer.com/p/tdd-ai-agents-and-coding-with-kent
•
Extreme Programming Explained: Embrace Change
:
https://www.amazon.com/Extreme-Programming-Explained-Embrace-Change/dp/0321278658
•
Smalltalk Best Practice Patterns
:
https://www.amazon.com/Smalltalk-Best-Practice-Patterns-Kent/dp/013476904X
• From IDEs to AI Agents with Steve Yegge:
https://newsletter.pragmaticengineer.com/p/from-ides-to-ai-agents-with-steve
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
Building Pi, and what makes self-modifying software so fascinating
Apr 29
•
Gergely Orosz
Designing Data-intensive Applications with Martin Kleppmann
Apr 22
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