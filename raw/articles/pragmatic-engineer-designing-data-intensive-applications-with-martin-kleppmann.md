# Designing Data-intensive Applications with Martin Kleppmann
**Source:** https://newsletter.pragmaticengineer.com/p/designing-data-intensive-applications
**Date:** 2026-04-22
**Author:** Gergely Orosz
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

The Pragmatic Engineer
Designing Data-intensive Applications with Martin Kleppmann
219
13
1×
0:00
Current time: 0:00 / Total time: -1:25:00
-1:25:00
Audio playback is not supported on your browser. Please upgrade.
Designing Data-intensive Applications with Martin Kleppmann
Martin Kleppmann on scaling, his updated Designing Data-Intensive Applications, and what’s next for AI-era systems.
Gergely Orosz
Apr 22, 2026
219
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
Sonar
– The makers of SonarQube, the industry standard for code verification and automated code review. Sonar helps teams close the “architecture gap” by preventing code complexity and structural decay.
Learn how Sonar
is empowering the Agent Centric Development Cycle with new architecture management capabilities that ensure both humans and AI agents respect your system’s blueprint.
•
WorkOS
– Designing large systems is about tradeoffs. But one thing isn’t a tradeoff: enterprise features. WorkOS gives you APIs to ship enterprise features – SSO, directory sync, RBAC, audit logs – in days, not months. Visit
WorkOS.com
to learn more.
In this episode
Martin Kleppmann
is a researcher and the author of
Designing Data-Intensive Applications
, one of the most influential books on modern distributed systems. As of this month, the second, heavily
updated edition of the book is out
.
In this episode of Pragmatic Engineer, we discuss Martin’s career in tech building startups, how he ended up writing this iconic book, and what he’s focused on, these days, after moving from industry, into academia.
We talk about the tradeoffs behind modern infrastructure, how the cloud has changed what it means to scale, and the thinking behind Designing Data-Intensive Applications, including what’s changing in the second edition.
Martin reflects on lessons from building startups like Rapportive, which he sold to LinkedIn, and shares how his experience in both academia and industry shaped his perspective.
We also explore what’s ahead: why formal verification may become more important in an AI-assisted world, the challenges of building local-first software, and his recent research into using cryptography to improve transparency in supply chains without exposing sensitive data.
Key observations from Martin
Here are 12 of my most interesting takeaways from talking with Martin:
1. Seeing Kafka as it was built at LinkedIn heavily shaped the ideas behind the book.
Kafka (a popular event streaming platform) was open-sourced while Martin was at LinkedIn. Seeing this large system up close helped Martin build a mental model of how various data systems fit together, what they have in common, and their fundamental principles.
2. Martin wrote the book because he wished he had this resource when they were “drowning” in design decisions at his startup.
At Rapportive, they hit database performance problems and were searching in the dark, with no idea what to do, because they lacked foundations. Martin wrote the book, so hopefully others won’t have to learn the fundamentals the hard way that his team did.
3. Knowing system internals as a superpower for application developers.
Martin maintains that Designing Data-Intensive Applications is not a book for people who build databases or even infrastructure, but it’s helpful for application developers to develop an intuition for making good design decisions and debugging performance issues they will encounter.
4. Multi-region and multi-cloud are risk/cost trade-offs, not best practices.
Martin does not believe that there is a “best practice” in deciding whether to go multi-region or multi-cloud. This decision is a tradeoff between risk and costs. It’s a business decision to be made. Designing Data-Intensive Applications gives engineers the vocabulary to articulate the tradeoffs, not to dictate answers.
5. Scaling
down
can be as challenging as scaling up
. When talking about scaling systems, most engineers associate this with scaling up. But building a system that can operate efficiently and scale down when there’s less traffic is an exciting (and challenging) problem as well! Solutions like Serverless are valuable building blocks for scaling down efficiently.
6. Replication for fault tolerance is more relevant these days than sharding.
Though the book has a full chapter on sharding, Martin said that the cloud has reduced the need for manual sharding for the majority of teams. This is also because machines are increasingly bigger, and more workloads fit on a single machine. Sharding across machines is increasingly a specialist concern; replication for fault tolerance, however, is still relevant at every scale.
7. MapReduce might be “dead,” but it is still worth knowing about.
The second edition of the book cut most MapReduce coverage because Martin observed that, these days, practically nobody uses it: technologies like Spark and Flink have replaced MapReduce. The second edition of the book has a reference to MapReduce purely as a learning tool, for understanding partitioned batch systems.
8. Distributed systems theory makes deliberately paranoid assumptions: this is on purpose!
The theory assumes that there’s no upper bound on how long it might take for a message to go over the network:  it might arrive in 100 microseconds or 10 years. Clocks, crashes, and network delays all get similarly worst-case treatment. Occasionally, reality will hit some of these extremes!
9. An engineer’s job is increasingly about surfacing risks — including societal ones — to decision-makers.
Martin believes that engineers need to articulate tradeoffs in a way that enables business leaders to make informed decisions. These tradeoffs include reputational and societal risks, not just technical ones.
10. Formal verification was too expensive to use across the industry, and LLMs may change this.
Martin said that he never used formal verification in his time in the industry because it was too time-consuming. Now he sees two things happening at once:
LLMs are producing so much code that human review becomes the bottleneck
LLMs are getting good at writing formal proofs as well
Put both together, and we might see more formal verification happening!
11. Building local-first software has difficult engineering challenges.
Decentralized access control sounds trivial, but it becomes pretty hard without a single server to arbitrate. For example, a revoked user can make a concurrent edit, and different devices will disagree about what happened. Martin is currently working in this problem space.
​
12. Industry and academia dismiss each other, and this is not great for either field!
The tech industry calls academia “theoretical” and misses useful research. Academia, in turn, often calls industry work just engineering and misses the interesting problems they solve. Martin has worked in both industry and academia, and would like to build better respect in both directions. The best PhD students he works with have a few years of real engineering experience.
The Pragmatic Engineer deepdives relevant for this episode
•
Building Bluesky: a distributed social network
(Martin is an advisor at Bluesky)
•
Inside Uber’s move to the cloud
•
The history of servers, the cloud, and what’s next
•
The past and future of modern backend practices
•
How Kubernetes is built
Timestamps
(
00:00
) Early career
(
05:46
) Building Rapportive
(
10:47
) Working at LinkedIn
(
14:09
) Writing Designing Data-Intensive Applications
(
23:00
) Reliability, scalability, and repeatability
(
26:24
) DDIA: the second edition
(
30:50
) Tradeoffs of using cloud services
(
39:02
) How the cloud changed scaling
(
42:53
) The trouble with distributed systems
(
49:02
) Ethics for software engineers
(
52:45
) Formal verification
(
1:00:12
) Academia vs. industry
(
1:03:50
) Local-first software
(
1:09:50
) Computer science education
(
1:18:32
) Martin’s current research and advice
References
Where to find Martin:
• LinkedIn:
https://www.linkedin.com/in/martinkleppmann
• Bluesky:
https://bsky.app/profile/martin.kleppmann.com
• Website:
https://martin.kleppmann.com
• Distributed Systems lecture series:
https://www.youtube.com/playlist?list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB
• Designing Data Intensive Applications, 2nd edition:
https://learning.oreilly.com/library/view/designing-data-intensive-applications/9781098119058
Mentions during the episode:
• Selenium:
https://www.selenium.dev
• SauceLabs:
https://saucelabs.com
• Rapportive on YC’s website:
https://www.ycombinator.com/companies/rapportive
• Kafka:
https://engineering.linkedin.com/teams/data/data-infrastructure/streams/kafka
• The Log: What every software engineer should know about real-time data’s unifying abstraction:
https://engineering.linkedin.com/teams/data/data-infrastructure/streams/kafka
• Materialized View:
Materialized View
Software infrastructure hot takes, projects, papers, developer interviews, and deep dives. Brought to you by Chris Riccomini.
By Chris
• The Missing README: A Guide for the New Software Engineer:
https://www.amazon.com/Missing-README-Guide-Software-Engineer/dp/1718501838
• How AWS S3 is built:
https://newsletter.pragmaticengineer.com/p/how-aws-s3-is-built
• MapReduce:
https://en.wikipedia.org/wiki/MapReduce
• Prediction: AI will make formal verification go mainstream:
https://martin.kleppmann.com/2025/12/08/ai-formal-verification.html
• Isabelle proof assistant:
https://isabelle.in.tum.de
• Rocq:
https://rocq-prover.org
• Lean:
https://lean-lang.org
• TLA+:
https://github.com/tlaplus
• FizzBee:
https://fizzbee.io
• Local-First Software: You Own Your Data, in spite of the Cloud:
https://martin.kleppmann.com/papers/local-first.pdf
• How AI assistance impacts the formation of coding skills:
https://www.anthropic.com/research/AI-assistance-coding-skills
• Cryptography:
https://en.wikipedia.org/wiki/Cryptography
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