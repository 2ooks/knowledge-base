# Stacked diffs and tooling at Meta with Tomas Reimers
**Source:** https://newsletter.pragmaticengineer.com/p/stacked-diffs-and-tooling-at-meta
**Date:** April 2, 2025
**Author:** The Pragmatic Engineer
**Score:** 5/5 | **Concepts:** ai-agent-ecosystem, harness-engineering, ai-coding-agents-and-developer-role-shift
**Scoring reason:** Foundational piece defining agents with the IMPACT framework, covering agent architecture, orchestration, and practical engineering patterns for building agents.

The Pragmatic Engineer
Stacked diffs and tooling at Meta with Tomas Reimers
67
2
1×
0:00
Current time: 0:00 / Total time: -1:13:14
-1:13:14
Audio playback is not supported on your browser. Please upgrade.
Stacked diffs and tooling at Meta with Tomas Reimers
Tomas Reimers, ex-Meta engineer, shares how Meta’s custom developer tools pioneered practices like stacked diffs and monorepos—shaping industry standards and the future of AI-assisted coding.
Gergely Orosz
Apr 02, 2025
67
2
Share
Transcript
Stream the Latest Episode
Listen and watch now on
YouTube
,
Spotify
, and
Apple
.
See the episode transcript at the top of this page, and a summary at the bottom.
Brought to You By
•
Swarmia
— The engineering intelligence platform for modern software organizations.
•
Sentry
— Error and performance monitoring for developers.
—
In This Episode
Why did Meta build its own internal developer tooling instead of using industry-standard solutions like GitHub?
Tomas Reimers
, former Meta engineer and co-founder of
Graphite
, joins the show to talk about Meta's custom developer tools – many of which were years ahead of the industry.
From Phabricator to Sandcastle and Butterflybot, Tomas shares examples of Meta’s internal tools that transformed developer productivity at the tech giant. Why did working with stacked diffs and using monorepos become best practices at Meta? How are these practices influencing the broader industry? Why are code reviews and testing looking to become even more critical as AI transforms how we write software? We answer these, and also discuss:
• Meta's custom internal developer tools
• Why more tech companies are transitioning from polyrepos to monorepos
• A case for different engineering constraints within the same organization
• How stacked diffs solve the code review bottleneck
• Graphite’s origin story and pivot to their current product
• Why code reviews will become a lot more important, the more we use AI coding tools
• Tomas’s favorite engineering metric
• And much more!
Takeaways
My biggest takeaways from this conversation:
“Stacked diffs” makes a lot of sense inside companies.
However, it makes less sense when working on, e.g., open source projects.
Perhaps this is a reason that GitHub has not added support for this workflow — even though it’s popular inside companies like Meta or Uber.
We previously did a deepdive on
Stacked Diffs (and why you should know about them)
.
The “trust matrix:” this
is a good way to decide how much process/tooling to put in place in a team. If you trust people a lot and are willing to tolerate mistakes, you should lean on
culture
and not process. If you start to become a team or company where you need to trust people less: this is the time to move more tooling and more process. So, as a small startup you probably don’t need that much tooling and process!
There could be an industry-wide movement to monorepos:
at mid-sized and larger scaleups and tech companies.
Tomas sees a lot of scaleups they work with the move from polyrepos (several repositories) to monorepos. Moving to a monorepo is still a lot of work and requires custom tooling: and this is why it was limited to the largest tech companies in the past. Interesting to hear about this change!
AI coding tools increase the importance of quality code reviews.
We’ll see more code churned out by AI: but an engineer needs to review it before it goes out. It’s a good question how we can stick to thorough code reviews when it is so tempting to just say, “Looks good to me (LGTM)” and have the
seemingly
correct code merged.
The Pragmatic Engineer deepdives relevant for this episode
•
Stacked Diffs (and why you should know about them)
•
Inside Meta’s engineering culture
•
Shipping to production
•
How Uber is measuring engineering productivity
Timestamps
(
00:00
) Intro
(
02:00
) An introduction to Meta’s in-house tooling
(
05:07
) How Meta’s integrated tools work and who built the tools
(
10:20
) An overview of the rules engine, Herald
(
12:20
) The stages of code ownership at Facebook and code ownership at Google and GitHub
(
14:39
) Tomas’s approach to code ownership
(
16:15
) A case for different constraints within different parts of an organization
(
18:42
) The problem that stacked diffs solve for
(
25:01
) How larger companies drive innovation, and who stacking diffs not for
(
30:25
) Monorepos vs. polyrepos and why Facebook is transitioning to a monorepo
(
35:31
) The advantages of monorepos and why GitHub does not support them
(
39:55
) AI’s impact on software development
(
42:15
) The problems that AI creates, and possible solutions
(
45:25
) How testing might change and the testing AI coding tools are already capable of
(
48:15
) How developer accountability might be a way to solve bugs and bad AI code
(
53:20
) Why stacking hasn’t caught on and Graphite’s work
(
57:10
) Graphite’s origin story
(
1:01:20
) Engineering metrics that matter
(
1:06:07
) Learnings from building a company for developers
(
1:08:41
) Rapid fire round
(
1:12:41
) Closing
A summary of the conversation
Meta's custom developer tools
Meta developed Phabricator as its internal tool for code review.
Sandcastle
: Meta's internal continuous integration (CI) system, integrating with Phabricator.
OnDemand:
internal development environments (dev boxes), linked with Sandcastle.
Landcastle
: the tool for deploying code to users, integrated with the preceding systems.
These tools aimed for seamless integration across the entire developer workflow, extending to task management.
Herald
, later replaced by
Butterflybot
: a rules engine that automated actions during code review based on specific events, such as flagging use of deprecated APIs.
We cover more internal tools in the deepdive
Inside Meta’s Engineering Culture
Stacked diffs
Meta used a method called
stacking
for code changes, where developers create a series of dependent changes (think of it as small PRs depending one on another)
This involves building multiple, sequential branches, each representing a smaller part of a larger feature.
The goal: minimize developer wait times associated with lengthy code reviews by submitting smaller units.
Reviewing smaller pull requests is generally faster and more effective.
Meta created internal tools to manage the Git operations, such as rebasing, necessary for maintaining stacked branches.
Monorepo
Meta adopted a monorepo strategy, housing most of its codebase in a single repository.
This approach aimed to simplify collaboration and management of dependencies between different parts of the system.
Initially having multiple large repositories, Meta moved towards consolidating them for greater efficiency.
Tomas observes a trend of more companies adopting monorepos.
Impact of AI on software development
Tomas expects the use of AI tools to increase the speed and volume of code generation by developers.
This increase in code will place greater emphasis on the processes of code review and software testing to ensure quality.
AI has the potential to automate certain aspects of the code review process, allowing human reviewers to concentrate on more complex design and integration issues.
AI may also play a role in generating software tests, potentially increasing test coverage.
Still: human understanding and review of code will remain essential for verifying the intended functionality and business logic.
Engineering metrics to measure to get a sense of team performance
Commonly tracked metrics include the number of pull requests created and the time taken for them to be merged.
Uber implemented a metric measuring the time a pull request spent waiting for review without any action. This aimed to address delays in the review process, particularly in distributed teams.
While measuring developer focus time is challenging, it is recognized as an important factor in productivity.
Where to find Tomas Reimers:
• X:
https://x.com/tomasreimers
• LinkedIn:
https://www.linkedin.com/in/tomasreimers/
• Website:
https://tomasreimers.com/
Mentions during the episode:
• Graphite:
https://graphite.dev/
• GitHub:
https://github.com/
• Stacked Diffs (and why you should know about them):
https://newsletter.pragmaticengineer.com/p/stacked-diffs
• Meta developer tools: Working at scale:
https://engineering.fb.com/2023/06/27/developer-tools/meta-developer-tools-open-source/
• A Meta developer's workflow: Exploring the tools used to code at scale:
https://developers.facebook.com/blog/post/2022/11/15/meta-developers-workflow-exploring-tools-used-to-code/
• GitHub Actions:
https://github.com/features/actions
• Buildkite:
https://buildkite.com/
• Jira:
https://www.atlassian.com/software/jira
• Linear:
https://linear.app/
• Phabricator:
https://graphite.dev/guides/phabricator-source-code-management-tool
• Supercharging A/B Testing at Uber:
https://www.uber.com/blog/supercharging-a-b-testing-at-uber/
• Dropbox uses Phabricator extensively for all our projects:
https://news.ycombinator.com/item?id=8656701
• Herald User Guide:
https://secure.phabricator.com/book/phabricator/article/herald/
• GitHub code owners:
https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners
• Stacked Pull Requests:
https://www.gitkraken.com/gitkon/stacked-pull-requests-tomas-reimers
• Mercurial:
https://www.mercurial-scm.org/
• Developer productivity with Dr. Nicole Forsgren (creator of DORA, co-creator of SPACE):
https://newsletter.pragmaticengineer.com/p/developer-productivity-with-dr-nicole
• How Linux is built with Greg Kroah-Hartman:
https://newsletter.pragmaticengineer.com/p/how-linux-is-built-with-greg-kroah
• Inside Meta's Engineering Culture: Part 1:
https://newsletter.pragmaticengineer.com/p/facebook
• Inside Meta's Engineering Culture: Part 2:
https://newsletter.pragmaticengineer.com/p/facebook-2
• Shopify:
https://www.shopify.com/
• React:
https://react.dev/
• Vercel:
https://vercel.com/
• Andrej Karpathy’s post on X about vibe coding:
https://x.com/karpathy/status/1886192184808149383
• Grammarly:
https://www.grammarly.com/
• Heroku:
https://www.heroku.com/
• Pull requests at GitHub:
https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
• How Uber is Measuring Engineering Productivity:
https://newsletter.pragmaticengineer.com/p/uber-eng-productivity
• Statsig:
https://statsig.com/
• Typescript:
https://www.typescriptlang.org/
• Ruby:
https://www.ruby-lang.org
• Python:
https://www.python.org/
•
The Last Days of Night
:
https://www.amazon.com/Last-Days-Night-Novel/dp/0812988922
•
The Timeless Way of Building
:
https://www.amazon.com/Timeless-Way-Building-Christopher-Alexander/dp/0195024028/
—
Production and marketing by
Pen Name
. For inquiries about sponsoring the podcast, email podcast@pragmaticengineer.com.
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