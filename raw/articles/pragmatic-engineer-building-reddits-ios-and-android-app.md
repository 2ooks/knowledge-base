# Building Reddit’s iOS and Android app
**Source:** https://newsletter.pragmaticengineer.com/p/building-reddits-ios-and-android
**Date:** April 23, 2025
**Author:** The Pragmatic Engineer
**Score:** 5/5 | **Concepts:** ai-agent-ecosystem, harness-engineering
**Scoring reason:** Directly analyzes the core tension in agent architecture between 'big model take the wheel' and coded workflows, with detailed comparison of OpenAI and LangGraph approaches.

The Pragmatic Engineer
Building Reddit’s iOS and Android app
93
10
5
1×
0:00
Current time: 0:00 / Total time: -1:26:08
-1:26:08
Audio playback is not supported on your browser. Please upgrade.
Building Reddit’s iOS and Android app
Reddit’s mobile engineers share how they completely rebuilt the iOS and Android app, introducing a new core tech stack, modern architecture, and improved testing strategies at massive scale.
Gergely Orosz
Apr 23, 2025
93
10
5
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
•
Graphite
— The AI developer productivity platform.
•
Sentry
— Error and performance monitoring for developers. Get 150k errors (three months of Team Plan) for free.
—
In This Episode
Reddit’s native mobile apps are more complex than most of us would assume: both the iOS and Android apps are about 2.5 million lines of code, have 500+ screens, and a total of around 200 native iOS and Android engineers work on them.
But it wasn’t always like this.
In 2021, Reddit started to double down on hiring native mobile engineers, and they quietly rebuilt the Android and iOS apps from the ground up. The team introduced a new tech stack called the “Core Stack” – all the while users remained largely unaware of the changes. What drove this overhaul, and how did the team pull it off?
In this episode of The Pragmatic Engineer, I’m joined by three engineers from Reddit’s mobile platform team who led this work: Lauren Darcey (Head of Mobile Platform), Brandon Kobilansky (iOS Platform Lead), and Eric Kuck (Principal Android Engineer). We discuss how the team transitioned to a modern architecture, revamped their testing strategy, improved developer experience – while they also greatly improved the app’s user experience.
We also get into:
How Reddit structures its mobile teams—and why iOS and Android remain intentionally separate
The scale of Reddit’s mobile codebase and how it affects compile time
The shift from MVP to MVVM architecture
Why Reddit took a bet on Jetpack Compose (a declarative UI framework for Android, built in Kotlin), but decided (initially) against using SwiftUI (a declarative UI framework for iOS, built in Swift)
How automated testing evolved at Reddit
Reddit’s approach to server-driven-mobile-UI
What the mobile platforms team looks for in a new engineering hire
Reddit’s platform team’s culture of experimentation and embracing failure
And much more!
If you are interested in large-scale rewrites or native mobile engineering challenges: this episode is for you.
Takeaways
My biggest takeaways from this episode:
1. At a glance: Reddit’s mobile tech stack evolution.
From 2021, this is how things have changed:
Before: the old stack in 2021. After: the new “Core Stack”. Today, iOS has started to move from SliceKit to SwiftUI again, as we discussed in the episode
2. The Reddit app is a lot more complex than one would assume.
With around 200 native mobile engineers, Reddit has one of the largest mobile teams working on a single mobile codebase – I’d be surprised if there were more than a dozen similarly large mobile teams focusing on a single, standalone app.
The app has about 20 feature teams working on different parts of it, and to give a taste of the complexity, the Android app has ~800 modules and 580 screens.
The complexity of mobile apps is rarely obvious at first glance – a few years ago, I did an explainer on
why the Uber app was hundreds of megabytes in size
.
3. Poor developer experience can slow down a company – so pay attention!
One of the reasons Reddit started investing heavily in modernizing its mobile stack was that the “old stack” was slowing down developers. Reddit’s platform team got proof of this simply by asking native engineers about the biggest development-related challenges they face:
The most frequent challenges Reddit’s mobile engineers used to have, as surveyed by their mobile platform team
4. GenAI coding tools feel like they are not “there” yet with native mobile.
LLMs integrated into IDEs seem to be increasingly helpful with backend, fullstack, web and even cross-platform (React Native / Expo) projects. However, Reddit’s mobile team shared that they get a moderate boost from the Apple and Android Studio LLM additions.
Native mobile development is distinctively different from web, fullstack and backend coding – and it seems that these IDEs with AI functionality have not done much to optimize for the expereince of native mobile engineers. Over time, this will likely change – but it’s a reminder that there are differences between fullstack, backend and native mobile development! (I wrote a book reflecting on more of the challenges unique to native mobile titled
Building Mobile Apps at Scale
)
An interesting quote from the episode
From
this part
:
Gergely:
“What does it take for an iOS or Android engineer to work at a platform team like this? When you're hiring, what are the traits that you're looking for?”
Brandon
: “My joke answer is that I don't know why someone would choose to do this [working on a platform team]. I just stumbled into it. It's very stressful and it's very hard. Having said that, I would not choose any other position.
The most important thing for an IC who wants to get a job on a platform team: you need to sit in the consequences of your decisions.
You should try to work at a tech company for a year or two and actually see what happens after you ship a system — and then the assumptions change! You then have to figure out how to keep this thing going.
Most things that I've had to write at Reddit are still in the code base (after 5+ years!). I wish they weren't, but you have to understand them.
You get a bunch of software design intuition because you have to like re-evaluate your assumptions for an incredibly long time. If you can do that, you're probably ready for platform stuff.
But take your time! Don’t burn you out before you're ready. Cause this is hard.”
Lauren
: “Befriending your platform team is the best way to become a platform engineer someday.
If you have a platform team, befriend them during hackathon weeks or get some mentorship within projects.
Almost everyone has done something like that before they end up joining our team. But also we really like having really good partners on the feature teams themselves because they are very honest with us about what their real problems are and they are the best source of that.”
Jump
this part of the episode.
The Pragmatic Engineer deepdives relevant for this episode
The platform and program split at Uber
Why and how Notion went native on iOS and Android
Paying down tech debt
Cross-platform mobile development
Timestamps
(
00:00
) Intro
(
02:04
) The scale of the Android code base
(
02:42
) The scale of the iOS code base
(
03:26
) What the compile time is for both Android and iOS
(
05:33
) The size of the mobile platform teams
(
09:00
) Why Reddit has so many mobile engineers
(
11:28
) The different types of testing done in the mobile platform
(
13:20
) The benefits and drawbacks of testing
(
17:00
) How Eric, Brandon, and Lauren use AI in their workflows
(
20:50
) Why Reddit grew its mobile teams in 2021
(
26:50
) Reddit’s modern tech stack, Corestack
(
28:48
) Why Reddit shifted from MVP architecture to MVVM
(
30:22
) The architecture on the iOS side
(
32:08
) The new design system
(
30:55
) The impact of migrating from REST to GraphQL
(
38:20
) How the backend drove the GraphQL migration and why it was worth the pain
(
43:17
) Why the iOS team is replacing SliceKit with SwiftUI
(
48:08
) Why the Android team took a bet on Compose
(
51:25
) How teams experiment with server-driven UI—when it worked, and when it did not
(
54:30
) Why server-driven UI isn’t taking off, and why Lauren still thinks it could work
(
59:25
) The ways that Reddit’s modernization has paid off, both in DevX and UX
(
1:07:15
) The overall modernization philosophy; fixing pain points
(
1:09:10
) What the mobile platforms team looks for in a new engineering hire
(
1:16:00
) Why startups may be the best place to get experience
(
1:17:00
) Why platform teams need to feel safe to fail
(
1:20:30
) Rapid fire round
References
Where to find Lauren Darcey:
• LinkedIn:
https://www.linkedin.com/in/perlgurl/
Where to find Brandon Kobilansky:
• LinkedIn:
https://www.linkedin.com/in/brandon-kobilansky-45097860/
• X:
https://x.com/bkobilansky
Where to find Eric Kuck:
• LinkedIn:
https://www.linkedin.com/in/eric-kuck-3bbb7680/
Mentions during the episode:
• Gemini:
https://gemini.google.com/app
• GraphQL:
https://graphql.org/
• Rust:
https://www.rust-lang.org/
• MVVM:
https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel
• Compose:
https://www.jetbrains.com/compose-multiplatform/
• MVP:
https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93presenter
• The SliceKit Series: Introducing Our New iOS Presentation Framework:
https://www.reddit.com/r/RedditEng/comments/v3hpns/the_slicekit_series_introducing_our_new_ios/
• SwiftUI:
https://developer.apple.com/xcode/swiftui/
• The comic about Google migrations:
https://goomics.net/50
• The man behind the Big Tech comics – with Manu Cornet:
https://newsletter.pragmaticengineer.com/p/the-man-behind-the-big-tech-comics
• Texture:
https://texturegroup.org/
• Reddit Talk:
https://www.reddit.com/r/RedditTalk/
• GraphQL JS:
https://www.graphql-js.org/docs/
• Westrum’s typology:
https://psychsafety.com/psychological-safety-81-westrums-cultural-typologies/
•
C Programming Language
:
https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628
•
Tidy First?: A Personal Exercise in Empirical Software Design
:
https://www.amazon.com/Tidy-First-Personal-Exercise-Empirical/dp/1098151240
•
Project Hail Mary
:
https://www.amazon.com/Project-Hail-Mary-Andy-Weir/dp/0593135202
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