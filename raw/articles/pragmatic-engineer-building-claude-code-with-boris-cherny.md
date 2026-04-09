# Building Claude Code with Boris Cherny
**Source:** https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny
**Date:** March 4, 2026
**Author:** The Pragmatic Engineer
**Score:** 5/5 | **Concepts:** developer-tooling-competitive-landscape, token-economics-and-pricing, gpu-and-compute-economics
**Scoring reason:** Duplicate of idx 63; same analysis of Anthropic revenue, API economics, and Nvidia earnings.

The Pragmatic Engineer
Building Claude Code with Boris Cherny
208
4
18
1×
0:00
Current time: 0:00 / Total time: -1:37:00
-1:37:00
Audio playback is not supported on your browser. Please upgrade.
Building Claude Code with Boris Cherny
Claude Code creator Boris Cherny on building AI-powered coding tools, working with agents in parallel, and how the role of the software engineer is evolving in an AI-first world.
Gergely Orosz
Mar 04, 2026
208
4
18
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
— ⁠ The unified platform for flags, analytics, experiments, and more. Stop switching between different tools, and have them all in one place.
Check out Statsig.
•
Sonar
– The makers of SonarQube, the industry standard for automated code review. Proactively find and fix issues in real-time with
SonarQube MCP Server
by connecting AI tools like Claude Code, GitHub Copilot, and Cursor directly to Sonar’s systematic code analysis engine.
Learn how Sonar
provides the essential verification layer for the AI development era.
•
WorkOS
– Everything you need to make your app enterprise ready. Companies like Anthropic, OpenAI, and Cursor already run on WorkOS.
See why.
In this episode
Boris Cherny is the creator and Head of Claude Code at Anthropic. He previously spent five years at Meta as a Principal Engineer and is the author of the book
Programming TypeScript
.
In this episode of
Pragmatic Engineer
, we went through how Claude Code was built and what it means when engineers no longer write most of the code themselves.
We discuss how Claude Code evolved from a side project into a core internal tool at Anthropic and how Boris uses it day-to-day. We go deep into workflow details, including parallel agents, PR structure, deterministic review patterns, and how the system retrieves context from large codebases. We also get into how Claude Cowork was built.
As coding becomes more accessible, the role of engineers shifts rather than shrinks. We examine what that shift means in practice, which skills become more important, and why the lines between product, engineering, and design are blurring.
Key observation from Boris
Here are 10 observations from this conversation that I found the most interesting:
1. Boris ships 20-30 PRs a day by running 5 parallel Claude instances.
Boris works across five terminal tabs (each a separate checkout), starting Claude in plan mode, iterating on the plan, then letting it one-shot the implementation. As he put it: “once there is a good plan, it will one-shot the implementation almost every time.”
2. Boris learned at Meta that code quality has a measurable, double-digit-percent impact on engineering productivity.
At Meta, Boris led causal analysis showing clean codebases meaningfully boost output. This learning holds for AI-generated code, too: partially-migrated codebases with multiple frameworks confuse both humans and models. As Boris put it: “always make sure that when you start a migration, you finish the migration.”
3. Claude Code’s “agentic search” is really just glob and grep, and it outperformed RAG.
The team tried several approaches to make agentic search better: local vector databases, recursive model-based indexing, and other fancy approaches. All had downsides (stale indexes, permission complexity). Plain glob and grep, driven by the model, beat everything. This approach was inspired by how Boris observed engineers at Instagram searched code when the click-to-definition functionality in Meta’s in-house coding editor was broken.
4. Boris automated himself out of code review well before AI.
Boris was one of the most prolific code reviewers at Meta company. And he worked hard to minimize time spent on code review. His system: every time he left the same kind of review comment, he logged it in a spreadsheet. Once a pattern hit 3-4 occurrences, he’d write a lint rule to automate it away!
5. Everyone at Anthropic has the same title (“Member of Technical Staff”), and it’s by design.
Without role-specific titles, the default assumption is that everyone does everything: product, design, infrastructure, research. As Boris put it: “It kind of inverts this relationship between people, even if you don’t know each other well yet.”
6. Claude Cowork was built in ~10 days and is growing faster than Claude Code did at launch.
The team spotted “latent demand” from non-engineers already hacking with Claude Code (data scientists, finance, sales). The bulk of the engineering complexity for Cowork wasn’t product logic, but around safety: building classifiers, a shipping VM, OS-level protections against accidental file deletion, and rethinking the permission model for non-technical users.
7. PRDs are dead on the Claude Code team: prototypes replaced them.
Instead of writing Product Requirement Documents (specs), they build dozens of working prototypes before shipping a feature. Boris: “There’s just no way we could have shipped this if we started with static mocks and Figma or if we started with a PRD.”
8. This is the year of the generalist (and maybe the year of those with ADHD)
. Boris’s work has shifted from deep-focus single-threaded coding to managing multiple parallel agents and context-switching rapidly. As Boris put it: “It’s not so much about deep work, it’s about how good I am at context switching and jumping across multiple different contexts very quickly.”
9. Fix infra before building a product.
Working at Meta, when Boris moved to Instagram, the Python/Django stack was so poor that click-to-definition didn’t work and the type checker was broken. He abandoned his original team, and went straight to Dev Infra, leading migrations from Python to the Facebook monolith and from REST to GraphQL. He did this because you can’t build great products on a terrible foundation, and sometimes the highest-leverage move is fixing the platform rather than shipping features.
10. Could software engineers of today be the medieval equivalents of scribes?
Boris brought up an interesting analogy: in the middle ages, scribes were a tiny literate elite employed by often-illiterate kings. When the printing press was invented, scribes technically lost their jobs. Still, many of them became writers and authors, and the market for written work expanded beyond prediction!
Boris wondered if we could see the same pattern with software engineers: coding is becoming accessible to everyone. Could the software engineers of today be building systems that have far broader reach, in the future, than ever than before?
The Pragmatic Engineer deepdives relevant for this episode
How Claude Code is built
How Anthropic built Artifacts
How Codex is built
Real-world engineering challenges: building Cursor
Timestamps
(
00:00
) Intro
(
11:15
) Lessons from Meta
(
19:46
) Joining Anthropic
(
23:08
) The origins of Claude Code
(
32:55
) Boris’s Claude Code workflow
(
36:27
) Parallel agents
(
40:25
) Code reviews
(
47:18
) Claude Code’s architecture
(
52:38
) Permissions and sandboxing
(
55:05
) Engineering culture at Anthropic
(
1:05:15
) Claude Cowork
(
1:12:48
) Observability and privacy
(
1:14:45
) Agent swarms
(
1:21:16
) LLMs and the printing press analogy
(
1:30:16
) Standout engineer archetypes
(
1:32:12
) What skills still matter for engineers
(
1:35:24
) Book recommendations
References
Where to find Boris Cherny:
• X:
https://x.com/bcherny
• LinkedIn:
https://www.linkedin.com/in/bcherny
• Website:
https://borischerny.com
Mentions during the episode:
• Jarred Sumner on LinkedIn:
https://www.linkedin.com/in/jarred-sumner-a8772425
• Vladimir Kolesnikov on LinkedIn:
https://www.linkedin.com/in/voloko
• React:
https://react.dev
• Will Bailey on LinkedIn:
https://www.linkedin.com/in/willbailey
• Fiona Fung on LinkedIn:
https://www.linkedin.com/in/fionafung
• Inside Meta’s Engineering Culture: Part 1:
https://newsletter.pragmaticengineer.com/p/facebook
• Inside Meta’s Engineering Culture: Part 2:
https://newsletter.pragmaticengineer.com/p/facebook-2
• Adam Wolff on LinkedIn:
https://www.linkedin.com/in/adamwolff
• The Bitter Lesson:
http://www.incompleteideas.net/IncIdeas/BitterLesson.html
• How Claude Code is built:
https://newsletter.pragmaticengineer.com/p/how-claude-code-is-built
• Mike Krieger on X:
https://x.com/mikeyk
• Dario Amodei on X:
https://x.com/DarioAmodei
• Ben Mann on LinkedIn:
https://www.linkedin.com/in/benjamin-mann/
• Marc Andreessen: The real AI boom hasn’t even started yet:
Lenny's Newsletter
Marc Andreessen: The real AI boom hasn’t even started yet
Marc Andreessen is a founder, investor, and co-founder of Netscape, as well as co-founder of the venture capital firm Andreessen Horowitz (a16z). In this conversation, we dig into why we’re living through a unique and one of the most incredible times in history, and what comes next…
Listen now
2 months ago · 141 likes · 5 comments · Lenny Rachitsky
• Cat Wu on LinkedIn:
https://www.linkedin.com/in/cat-wu
• Asana:
https://asana.com
• Claude Cowork:
https://claude.com/product/cowork
• Felix Rieseberg on LinkedIn:
https://www.linkedin.com/in/felixrieseberg
• Electron:
https://www.electronjs.org
• Building a C compiler with a team of parallel Claudes:
https://www.anthropic.com/engineering/building-c-compiler
• Introducing Claude Opus 4.6:
https://www.anthropic.com/news/claude-opus-4-6
• Thariq Shihipar on LinkedIn:
https://www.linkedin.com/in/thariqshihipar
•
Programming TypeScript: Making Your JavaScript Applications Scale
:
https://www.amazon.com/Programming-TypeScript-Making-JavaScript-Applications/dp/1492037656
• A General Theory of Reactivity:
https://kriskowal.gitbooks.io/gtor/content/intro.html
• Ryan Dahl on X:
https://x.com/rough__sea
• Anders Hejlsberg on X:
https://x.com/ahejlsberg
•
The Three-Body Problem
:
https://www.amazon.com/Three-Body-Problem-Cixin-Liu/dp/0765382032
•
Accelerando
:
https://www.amazon.com/Accelerando-Singularity-Charles-Stross/dp/0441014151
•
Functional Programming in Scala
:
https://www.amazon.com/Functional-Programming-Second-Michael-Pilquist-ebook/dp/B0C4LX999T
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
Building WhatsApp with Jean Lee
Mar 18
•
Gergely Orosz
From IDEs to AI Agents with Steve Yegge
Mar 11
•
Gergely Orosz
Mitchell Hashimoto’s new way of writing code
Feb 25
•
Gergely Orosz
The programming language after Kotlin – with the creator of Kotlin
Feb 12
•
Gergely Orosz
The third golden age of software engineering – thanks to AI, with Grady Booch
Feb 4
•
Gergely Orosz
The creator of Clawd: "I ship code I don't read"
Jan 28
•
Gergely Orosz
How AWS S3 is built
Jan 21
•
Gergely Orosz