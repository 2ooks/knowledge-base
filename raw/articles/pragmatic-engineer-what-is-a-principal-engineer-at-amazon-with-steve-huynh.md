# What is a Principal Engineer at Amazon? With Steve Huynh
**Source:** https://newsletter.pragmaticengineer.com/p/what-is-a-principal-engineer-at-amazon
**Date:** July 9, 2025
**Author:** The Pragmatic Engineer
**Score:** 4/5 | **Concepts:** developer-tooling-competitive-landscape, ai-coding-agents-and-developer-role-shift, token-economics-and-pricing
**Scoring reason:** First-hand account of Shopify's all-in AI strategy including early GitHub Copilot adoption, internal LLM proxy, unlimited token spending, and non-engineers using Cursor for vibe coding.

The Pragmatic Engineer
What is a Principal Engineer at Amazon? With Steve Huynh
126
7
1×
0:00
Current time: 0:00 / Total time: -1:13:16
-1:13:16
Audio playback is not supported on your browser. Please upgrade.
What is a Principal Engineer at Amazon? With Steve Huynh
Former Amazon Principal Engineer Steve Huynh shares what it takes to reach the Principal level, why the jump Principal is so tough at Amazon, and how Amazon’s scale and culture shaped his career.
Gergely Orosz
Jul 09, 2025
126
7
Share
Transcript
Stream the Latest Episode
Listen and watch now on
YouTube
,
Spotify
and
Apple
.
See the episode transcript at the top of this page, and timestamps for the episode at the bottom.
Brought to You By
Statsig
⁠
—
⁠
The unified platform for flags, analytics, experiments, and more.
Graphite
— The AI developer productivity platform.
Augment Code
— AI coding assistant that pro engineering teams love.
—
In This Episode
Steve Huynh
spent 17 years at
Amazon
, including four as a Principal Engineer. While in Seattle, I stopped by at Steve in his studio to record this episode of The Pragmatic Engineer. We went into what the Principal role involves at Amazon, why the path from Senior to Principal is so tough, and how even strong engineers can get stuck. Not because they’re unqualified, but because the bar is exceptionally high.
We discuss what’s expected at the Principal level, the kind of work that matters most, and the trade-offs that come with the title. Steve also shares how Amazon’s internal policies shaped his trajectory, and what made the Principal Engineer community one of the most rewarding parts of his time at the company.
We also go into:
Why being promoted from Senior to Principal
at Amazon
is one of the hardest jumps in tech
How Amazon’s freedom of movement policy helped Steve work across multiple teams, from Kindle to Prime Video
The scale of Amazon: handling 10k–100k+ requests per second and what that means for engineering
Why latency became a company-wide obsession at Amazon —and the research that tied it directly to revenue
Why companies should start with a monolith, and what led Amazon to adopt microservices
What makes the Principal Engineering community so special
Amazon’s culture of learning from its mistakes, including COEs (correction of errors)
The pros and cons of the Principal Engineer role
What Steve loves about the leadership principles at Amazon
Amazon’s intense writing culture and 6-pager format
Why Amazon patents software and what that process looks like
… and much more!
An interesting topic: "brownouts” at Amazon
“Brownout” is internal Amazon lingo. At Amazon’s scale, service failures are frequent, and cascading failures can happen if dumping load onto services in a “brownout” state. Steve explained what this means, and why it was important at the e-commerce giant:
Gergely (at
11:56
): What does “brownout” mean?
Steve: I'm using some jargon. Suppose you are
DDoS’ing
a service or sending a lot of requests over to them: you can just take them down! That would be a
blackout
. With a blackout: yo you send a request, you can't establish a connection, it immediately comes back as failed.
But there's a type of outage where they ‘
brown out’.
So the service reachable, they might accept the connection, but they'll time out or they might return partial results or bad results. Or perhaps the only thing that they do return is a 500 for some percentage of requests.
So now we start talking about availability and resilience in the face of all of this DDoSing that you're doing to
yourself
. Let’s say your service is a dependency of some of the process that's going on.
If there's a failure for a primary dependency and that dependency comes back up: how do you make sure you don't just inundate it with a bunch of requests as it's trying to recover?
And so now you have all of these sort of odd dynamics that occur. I used a brownout as something that is recurring problem. There might be some increased latency that may cause a chain reaction of a dependency going down. And then one of these sort of middle tier services would brown out. So you're an owner of the services for your team. And so then it's like, okay, what do we do in those situations?
How do we know that they're browning out? What do we do in the face of a dependency outage? And then critically, if there is an outage and then the service comes back up:
How do we make sure that we give it enough space so that [the service] can ‘breathe’?
So that as they're trying to recover from some sort of outage, we don't just take them down immediately again.
What Steve describes reminded me of what the Cursor engineering team described as the “
Cold start problem at scale
” in the deepdive
How Cursor is built
:
An unappreciated challenge is how hard it is to do a “cold start” for a massive service. As Sualeh [Cursor cofounder] explains:
“Imagine you’re doing 100,000 requests per second and suddenly, all your nodes die. When restarting your system, your nodes usually go up one after the other. Say you’ve managed to restart 10 nodes from a fleet of 1,000. If you don’t prohibit people from making requests, these 10 nodes will get smashed by all the incoming requests. Before these 10 nodes could have become healthy, you’ve just overloaded those nodes!
This has bitten us many times in the past. Whenever you have a bad incident that needs a cold start, you need to figure out how to do it well.
Many of the large providers you probably use have various ‘tricks’ to kill traffic while they perform a cold start. We ended up doing a setup where we either fully halt traffic until the cold start is complete, or prioritize a small subset of our users during a cold start, until the service is back at being healthy.”
The Pragmatic Engineer deepdives relevant for this episode
Inside Amazon’s engineering culture
Engineering career paths at Big Tech and scaleups
Engineering leadership skill set overlaps
How Big Tech does Quality Assurance (QA)
Timestamps
(
00:00
) Intro
(
01:11
) What Steve worked on at Amazon, including Kindle, Prime Video, and payments
(
04:38
) How Steve was able to work on so many teams at Amazon
(
09:12
) An overview of the scale of Amazon and the dependency chain
(
16:40
) Amazon’s focus on latency and the tradeoffs they make to keep latency low at scale
(
26:00
) Why companies should start with a monolith
(
26:44
) The structure of engineering at Amazon and why Amazon’s Principal is so hard to reach
(
30:44
) The Principal Engineering community at Amazon
(
36:06
) The learning benefits of working for a tech giant
(
38:44
) Five challenges of being a Principal Engineer at Amazon
(
49:50
) The types of managing work you have to do as a Principal Engineer
(
51:47
) The pros and cons of the Principal Engineer role
(
54:59
) What Steve loves about Amazon’s leadership principles
(
59:15
) Amazon’s intense focus on writing
(
1:01:11
) Patents at Amazon
(
1:07:58
) Rapid fire round
References
Where to find Steve Huynh:
•
X
•
LinkedIn
•
YouTube
• Steve's course:
Speedrun to Promotion
• Newsletter:
A Life Engineered
Your weekly dose of practical and realistic tech career advice and insights. Leverage the combined wisdom of industry leaders and my 20 years of experience navigating the tech landscape to unlock your full potential.
By Steve Huynh
Mentions during the episode:
• Building Reddit’s iOS and Android app:
https://newsletter.pragmaticengineer.com/p/building-reddits-ios-and-android
• Casey Muratori’s website:
https://caseymuratori.com
• Ethan Evans on LinkedIn:
https://www.linkedin.com/in/ethanevansvp/
• Why you should develop a correction of error (COE):
https://aws.amazon.com/blogs/mt/why-you-should-develop-a-correction-of-error-coe/
• Bhavik Kothari on LinkedIn:
https://www.linkedin.com/in/bhavik-kothari-5768b42a/
• Bhavik’s LinkedIn Posts about Principal Engineering challenges Part 1:
https://www.linkedin.com/posts/bhavik-kothari-5768b42a_some-obvious-and-not-so-obvious-challenges-activity-7303872281674465281-s5Mc?utm_source=share&utm_medium=member_desktop&rcm=ACoAABf37PYBgozFf00ihr4fkqjRtMnFajHkQ5E
• Bhavik’s Principal Engineering challenges Part 2:
https://www.linkedin.com/posts/bhavik-kothari-5768b42a_principal-engineer-challenges-continued-activity-7309228144324972544-_eUF?utm_source=share&utm_medium=member_desktop&rcm=ACoAABf37PYBgozFf00ihr4fkqjRtMnFajHkQ5E
• Leadership Principles:
https://www.amazon.jobs/content/en/our-workplace/leadership-principles
• Perl:
https://www.perl.org/
• Rust:
https://www.rust-lang.org/
• Java:
https://www.javascript.com/
•
So Good They Can't Ignore You: Why Skills Trump Passion in the Quest for Work You
:
https://www.amazon.com/Good-They-Cant-Ignore-You/dp/1455509124
•
AI Engineering: Building Applications with Foundation Models
:
https://www.amazon.com/AI-Engineering-Building-Applications-Foundation/dp/1098166302
• AI Engineering with Chip Huyen:
https://newsletter.pragmaticengineer.com/p/ai-engineering-with-chip-huyen
•
Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems
:
https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321
• Inside Amazon's Engineering Culture:
https://newsletter.pragmaticengineer.com/p/amazon
• A Day in the Life of a Senior Manager at Amazon:
https://newsletter.pragmaticengineer.com/p/a-day-in-the-life-of-a-senior-manager
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