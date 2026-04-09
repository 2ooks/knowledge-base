# God is hungry for Context: First thoughts on o3 pro
**Source:** https://www.latent.space/p/o3-pro
**Date:** June 10, 2025
**Author:** Latent Space
**Score:** 4/5 | **Concepts:** developer-tooling-competitive-landscape, ai-coding-agents-and-developer-role-shift
**Scoring reason:** Microsoft EVP covers the full arc from Visual Basic to Azure/VS Code/GitHub/AI, directly relevant to understanding Microsoft's developer tooling competitive position.

God is hungry for Context: First thoughts on o3 pro
OpenAI dropped o3 pricing 80% today and launched o3-pro. Ben Hylak of Raindrop.ai returns with Alexis Gauba for the world's first early review.
Ben Hylak
and
alexis
Jun 10, 2025
128
12
15
Share
As “
leaked
”, OpenAI
cut o3 pricing by 80%
today (from $10/$40 per mtok to $2/$8 - matching
GPT 4.1
pricing!!) to set the stage of the launch of o3-pro ($20/$80, supporting an unverified community theory that the -pro variants are 10x base model calls with majority voting as referenced in
their papers
and in
our Chai episode
). o3-pro reports a
64% win rate
vs o3 on human testers and does marginally better on
4/4 reliability benchmarks
, but as
sama noticed
, the actual experience expands when you test it DIFFERENTLY…
Thanks to
Hacker News
and
theo
for covering us.
I’ve had early access to o3 pro for the past week. below are my (early) thoughts:
God is hungry for context.
We’re in the era of task-specific models. On one hand, we have “normal” models like 3.5 Sonnet and 4o—the ones we talk to like friends, who help us with our writing, and answer our day-to-day queries. On the other, we have gigantic, slow, expensive, IQ-maxxing reasoning models that we go to for deep analysis (they’re great at criticism), one-shotting complex problems, and pushing the edge of pure intelligence.
If you follow me on
Twitter
, you know I've had a journey with the o-reasoning models. My first impression of o1/o1-pro was quite negative. But as I gritted my teeth through the first weeks, propelled by other people's raving reviews, I realized that I was, in fact, using it wrong. I wrote up all my thoughts, got ratio’ed by @sama, and quote-tweeted by @
gdb
.
o1 isn’t a chat model (and that’s the point)
Ben Hylak
and
Latent.Space
·
January 12, 2025
Read full story
The key, I discovered, was to
not
chat with it. Instead,
treat it like a
report generator
1
.
Give it context, give it a goal, and let it rip. And that's exactly how I use o3 today.
But therein lines the problem with evaluating o3 pro.
It’s smarter.
much smarter.
But in order to see that, you need to give it
a lot
more context. and I’m running out of context.
There was no simple test or question i could ask it that blew me away.
But then I took a different approach. My co-founder Alexis and I took the the time to assemble a history of all of our past planning meetings at
Raindrop
, all of our goals, even record voice memos: and then asked o3-pro to come up with a plan.
We were blown away; it spit out the exact kind of concrete plan and analysis I’ve always wanted an LLM to create — complete with target metrics, timelines, what to prioritize, and strict instructions on what to absolutely cut.
The plan o3 gave us was plausible, reasonable; but the plan o3 Pro gave us was specific and rooted enough that
it actually changed how we are thinking about our future.
This is hard to capture in an eval.
Integrating with the Real World
Trying out o3 Pro made me realize that models today are so
good
in isolation, we’re running out of simple tests. The real challenge is integrating them into society. It's almost like a really high IQ 12-year-old going to college.
They might be smart, but they’re not a useful employee if they can’t integrate.
Today, this integration primarily comes down to tool calls: how well the model collaborates with humans, external data, and other AIs. It’s a great thinker, but it’s gotta grow into being a great do-er. o3 Pro makes real jumps here. It’s noticeably better at discerning what it’s
environment
is; accurately
communicating what tools it has access to
, when to
ask questions about the outside world
(rather than pretending it has the information/access), and
choosing the right tool
for the job.
o3 pro (left) vs o3 (right):
o3 pro (left) clearly understanding the confines of it’s environment way better.
Shortcomings
One thing I noticed from early access: if you don’t give it enough context, it does tend to overthink. It’s insanely good at analyzing, amazing at using tools to do things, not so good at doing things directly itself. I think it would be a fantastic orchestrator. But, for example, there were some ClickHouse SQL questions that o3 did better with. YMMV!
To illustrate:
Compared to other models
o3 Pro feels very, very different from Opus and Gemini 2.5 Pro. Where Claude Opus
feels
big but never truly showed me a clear sign of its “bigness,” o3 Pro’s takes are just... better. It feels like a completely different playing field.
OpenAI’s really driving down this vertical RL path (Deep Research, Codex)—not just teaching models how to use tools, but how to reason about when to use them.
Closing Thoughts
The best ways to prompt reasoning models haven’t changed.
My guide on how to prompt o1 still stands
. Context is everything, its like feeding cookies to the cookie monster. It’s a way of bootstrapping LLM memory but actually targeted so it works well. And the system prompt really matters. Models have actually become really malleable so LLM “harnesses” that teach a model about it’s environment and its goals have outsize impact. It’s this “harness” - a combination of model, tools, memory, and other methods - that makes AI products actually good (what makes things like Cursor just work most of the time).
Other assorted tasks:
The system prompt wildly shaped model behavior (in a good way!) It felt way more pronounced than even o3.
Leaps and bounds different than anthropic and gemini. Where Claude Opus
feels
big (but has really never shown me a true sign of its “bigness”), these takes are just.. better. Feels like a completely different playing field.
OAI’s really driving down this vertical RL path (Deep Research, Codex). E.g. teaching models not just how to use tools, but to reason about when to use them.
1
Many are
saying this
- “report generation” is basically what we do at
AINews
and also with
Deep Research
and
Brightwave
.
128
12
15
Share
Previous
Next
A guest post by
Ben Hylak
going the distance. cto @ raindrop.ai, prev apple designer, spacex avionics
Subscribe to Ben
A guest post by
alexis
Subscribe to alexis