# Google’s engineering culture
**Source:** https://newsletter.pragmaticengineer.com/p/googles-engineering-culture
**Date:** October 15, 2025
**Author:** The Pragmatic Engineer
**Score:** 4/5 | **Concepts:** ai-agent-ecosystem, inference-architecture-and-scaling, token-economics-and-pricing
**Scoring reason:** Meaningful analysis of OpenAI's platform evolution with Apps SDK, ChatGPT as super-app, MCP adoption, and OpenAI building an AI cloud that could rival Azure/AWS, with implications for platform economics.

The Pragmatic Engineer
Google’s engineering culture
133
9
1×
0:00
Current time: 0:00 / Total time: -2:46:20
-2:46:20
Audio playback is not supported on your browser. Please upgrade.
Google’s engineering culture
Elin Nilsson and I unpack how Google’s engineering culture, tools, and systems actually work behind the scenes.
Gergely Orosz
and
Elin Nilsson
Oct 15, 2025
133
9
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
•⁠
Statsig
⁠ — ⁠ The unified platform for flags, analytics, experiments, and more. Something interesting is happening with the latest generation of tech giants. Rather than building advanced experimentation tools themselves, companies like Anthropic, Figma, Notion and a bunch of others… are just using Statsig. Statsig has rebuilt this entire suite of data tools that was available at maybe 10 or 15 giants until now.
Check out Statsig.
•⁠
Linear
– The system for modern product development. Linear is just so fast to use – and it enables velocity in product workflows. Companies like Perplexity and OpenAI have already switched over, because
simplicity scales
. Go ahead and
check out Linear
and see why it feels like a breeze to use.
—
In this episode
What is it
really
like to be an engineer at Google?
In this special deep dive episode, we unpack how engineering at Google actually works. We spent months researching the engineering culture of the search giant, and talked with 20+ current and former Googlers to bring you this deepdive with
Elin Nilsson
, tech industry researcher for
The Pragmatic Engineer
and a former Google intern.
Google has always been an engineering-driven organization. We talk about its custom stack and tools, the design-doc culture, and the performance and promotion systems that define career growth. We also explore the culture that feels built for engineers: generous perks, a surprisingly light on-call setup often considered the best in the industry, and a deep focus on solving technical problems at scale.
If you are thinking about applying to Google or are curious about how the company’s engineering culture has evolved, this episode takes a clear look at what it was like to work at Google in the past versus today, and who is a good fit for today’s Google.
Jump to interesting parts:
(
13:50
) Tech stack
(
1:05:08
) Performance reviews (GRAD)
(
2:07:03
) The culture of continuously rewriting things
For more reading on this topic, see our previous deepdive articles on
Google’s engineering culture
.
The Pragmatic Engineer deepdives relevant for this episode
Inside Google’s engineering culture
Oncall at Google
Performance calibrations at tech companies
Promotions and tooling at Google
How Kubernetes is built
The man behind the Big Tech comics: Google cartoonist Manu Cornet
Timestamps
(
00:00
) Intro
(
01:44
) Stats about Google
(
11:41
) The shared culture across Google
(
13:50
) Tech stack
(
34:33
) Internal developer tools and monorepo
(
43:17
) The downsides of having so many internal tools at Google
(
45:29
) Perks
(
55:37
) Engineering roles
(
1:02:32
) Levels at Google
(
1:05:08
) Performance reviews (GRAD)
(
1:13:05
) Readability
(
1:16:18
) Promotions
(
1:25:46
) Design docs
(
1:32:30
) OKRs
(
1:44:43
) Googlers, Nooglers, ReGooglers
(
1:57:27
) Google Cloud
(
2:03:49
) Internal transfers
(
2:07:03
) Rewrites
(
2:10:19
) Open source
(
2:14:57
) Culture shift
(
2:31:10
) Making the most of Google, as an engineer
(
2:39:25
) Landing a job at Google
References
Where to find Elin Nilsson:
• X:
https://x.com/hejelinnilsson
• LinkedIn:
https://www.linkedin.com/in/hejelin/
• Website:
https://hejelin.github.io/
Mentions during the episode:
• What I Learned Getting Acquired by Google:
https://shreyans.org/google
• What is Reliability Engineering?:
https://newsletter.pragmaticengineer.com/p/reliability-engineering
• Borg:
https://research.google/pubs/large-scale-cluster-management-at-google-with-borg/
• Kubernetes:
https://kubernetes.io/
• The Production Environment at Google, from the Viewpoint of an SRE:
https://sre.google/sre-book/production-environment/
• Jeff Bezos Was An Early Investor In Google — A Move That Could Have Made Him A Billionaire Outside Of Amazon. He Took A Gamble Because He Believed In The Founders: ‘I Just Fell In Love With Larry And Sergey’:
https://finance.yahoo.com/news/jeff-bezos-early-investor-google-185940547.html
• B4 and After: Managing Hierarchy, Partitioning, and Asymmetry for Availability and Scale in Google’s Software-Defined WAN:
https://research.google/pubs/b4-and-after-managing-hierarchy-partitioning-and-asymmetry-for-availability-and-scale-in-googles-software-defined-wan/
•
Site Reliability Engineering
:
https://sre.google/sre-book/table-of-contents/
• Piper:
https://en.wikipedia.org/wiki/Piper_%28source_control_system%29
• Why Google Stores Billions of Lines of Code in a Single Repository:
https://research.google/pubs/why-google-stores-billions-of-lines-of-code-in-a-single-repository/
• Code Search:
https://sourcegraph.com/code-search
• Efficient scaleups in 2024 vs 2021: Sourcegraph (with CEO & Co-founder Quinn Slack):
https://newsletter.pragmaticengineer.com/p/quinn-slack-efficient-scalups
• Bazel:
https://opensource.google/projects/bazel
• Cider:
https://code.google.com/archive/p/cider-ide/
• Tricorder: Building a Program Analysis Ecosystem:
https://research.google/pubs/tricorder-building-a-program-analysis-ecosystem/
• Issue tracker:
https://issuetracker.google.com/i
• GUTS:
https://play.google.com/store/apps/details?id=com.vdkgroep.guts
• gRPC: a true internet-scale RPC framework is now 1.0 and ready for production deployments:
https://cloud.google.com/blog/products/gcp/grpc-a-true-internet-scale-rpc-framework-is-now-1-and-ready-for-production-deployments
• What I Hated about working at Google:
• NeetCode:
https://neetcode.io/
• The man behind the Big Tech comics – with Manu Cornet:
https://newsletter.pragmaticengineer.com/p/the-man-behind-the-big-tech-comics
• Welcome to Google comic:
https://goomics.net/50
• Oncall Compensation for Software Engineers:
https://blog.pragmaticengineer.com/oncall-compensation/
• GRAD:
https://www.google.com/about/careers/applications/buildyourfuture/programs/grad
• Performance Calibrations at Tech Companies: Part 1:
https://newsletter.pragmaticengineer.com/p/performance-calibrations
• Performance Calibrations at Tech Companies: Part 2:
https://newsletter.pragmaticengineer.com/p/performance-calibrations-part-2
• Promotions and tooling at Google (with Irina Stanescu, Ex-Google):
https://newsletter.pragmaticengineer.com/p/promotions-and-tooling-at-google
• Why I Quit Google to Work for Myself:
https://mtlynch.io/why-i-quit-google/
• Killed by Google:
https://killedbygoogle.com/
• Side project time:
https://en.wikipedia.org/wiki/Side_project_time
•
Software Engineering at Google
:
https://books.google.com/books?id=V3TTDwAAQBAJ&lpg=PP1&pg=PP1#v=onepage&q&f=false
• John Doerr on LinkedIn:
https://www.linkedin.com/in/john-doerr-03248211/
•
Measure What Matters: The Simple Idea that Drives 10x Growth
:
https://www.amazon.com/Measure-What-Matters-Simple-Drives/dp/024134848X
• App Engine:
https://cloud.google.com/appengine
• Go:
https://en.wikipedia.org/wiki/Go_(programming_language)
• Angular:
https://angular.dev/
• Tensorflow:
https://www.tensorflow.org/
• Attention is All You Need:
https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf
• Chromium:
https://www.chromium.org/
• Flutter:
https://flutter.dev/
• Inside Fast’s Rapid Collapse:
https://newsletter.pragmaticengineer.com/p/the-scoop-fast
• TikTok:
https://www.tiktok.com/
• U.S. and Plaintiff States v. Google LLC and Apple Inc:
https://www.justice.gov/atr/case/us-and-plaintiff-states-v-google-llc-and-apple-inc
• State of the software engineering job market in 2025: what the data says:
https://newsletter.pragmaticengineer.com/p/state-of-the-tech-market-in-2025
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
Elin Nilsson
Writes
Hej Elin
Subscribe
Recent Episodes
Building WhatsApp with Jean Lee
Mar 18
•
Gergely Orosz
From IDEs to AI Agents with Steve Yegge
Mar 11
•
Gergely Orosz
Building Claude Code with Boris Cherny
Mar 4
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