# OpenAI's Memos, Frontier, Amazon and Anthropic
**Source:** https://stratechery.com/2026/openais-memos-frontier-amazon-and-anthropic/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L29wZW5haXMtbWVtb3MtZnJvbnRpZXItYW1hem9uLWFuZC1hbnRocm9waWMvIl19LCJleHAiOjE3ODIyNzY3NzAsImlhdCI6MTc3OTY4NDc3MCwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMgcG9kY2FzdCByc3MiLCJzdWIiOiJlNWQ0NGE2NC1jYTU4LTQ3MWQtOWZhMy05YzkwODEzYTg4NTAiLCJ1c2UiOiJhY2Nlc3MifQ.oWe0rFLnc-eSvFsu9OK3ZO4IOGfkLOPSQgVnE8yTxHy-tGhfS4_I7vLFXt5n6F-l1OOGbM-tBZ9gmc9VFEB1tpC-EWLZisNNppaQWCPBKHbxJz89YytrPQnmyp_AnLiZbEa6k7XWKnTyJLGOZDEbAmTO8b9GXjMnrsXVUVwDh5xpWot4YcFByNTDV_ThhnzULsamBg_hjQX_aNVK5CQpfLQtn7yH2AJJfUJuSo28g2SBXO7EZHM4wlQluk2F8zzQw3XQV2aodf7FVI2WwNXOMOO9EFzliGOi9sP4LU_dSMGPh6T3T75HQ5DfRFWSnmeYONidJP7EYbfm_utBe4p-PQ
**Date:** 2026-04-14
**Author:** Ben Thompson
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Listen to this post:
Your browser does not support the audio element.
Good morning,
On
last week’s Sharp Tech
, Andrew and I discussed Mythos and Project Glasswing, and why Anthropic’s recent success has actually been building for a long time. We also touch on
my interview with the New York Times CEO
and
that New Yorker profile
of Sam Altman.
On to the Update:
OpenAI’s Memos
I referenced
a memo that OpenAI sent to investors
in
yesterday’s Article
, but
The Verge
has a new memo from chief revenue officer Denise Dresser.
Before I get to the memo, it is worth pointing out that a company doesn’t typically send out memos that are probably intended to be leaked when they are feeling secure in their position; that said, the hallmark of the AI era has arguably been the constantly changing sense of who is in the lead and who is doomed. It’s certainly possible that this month is viewed as the high point of the Anthropic hype; that’s the case Dresser puts forth, and I thought it was worth breaking down her memo in depth.
Here are some selections from Dresser’s memo and my commentary:
Enterprise AI is entering a more mature phase. Raw capability still matters, but it is no longer enough. Customers want fit: how well AI plugs into their workflows, knowledge, controls, and day-to-day operations, and how effectively it can be deployed, trusted, and improved over time. They want a system they can trust and build on.
This isn’t a promising start! You usually don’t emphasize that raw capability is not the most important thing if you think you have the best raw capability! I’m pretty optimistic about “Spud”, OpenAI’s upcoming model, given that OpenAI’s current offerings, built as they are on a GPT-4-scale model, are so good; it seems likely that OpenAI continues to be the best at reinforcement learning and reasoning, which has kept them competitive with larger models from other companies. What does that look like when OpenAI has a new significantly larger model? However, that’s not exactly what Dresser is leading with.
Spud is an important step in the intelligence foundation for the next generation of work. Early feedback from our customers is very positive. Spud is not only our smartest model yet, but it also delivers on everything that matters for high-value professional work: stronger reasoning, better understanding of intent and dependencies, better follow-through and more reliable output in production.
Better model performance lifts the rest of the stack. Spud will make all of our key products significantly better. It expands the workflows we can own and gives customers another reason to consolidate around us. This is our iterative deployment strategy in practice: push the frontier, deploy it into real products, learn from real usage, and compound those lessons into better systems on the path to the super app.
Again, there is not an assertion that Spud will be the best model in the industry, but rather OpenAI’s “smartest model yet”; at the same time, the second paragraph highlights what does appear to be an OpenAI advantage in terms of reinforcement learning.
Our compute advantage sets us up to deliver continuous leaps in capability. Customers already feel it in real product terms: higher token limits, lower latency, and more reliable execution of complex workflows. Every step forward in compute lets us train stronger models, serve more demand, and lower the cost per unit of intelligence. That is durable business leverage.
This is the point I raised at the end of yesterday’s Article: it’s possible that building the best products is itself a matter of having the most compute.
Frontier
On agents:
The market has moved from prompts to agents. That shift is a massive opportunity for us. Customers want systems that can reason, use tools, operate across workflows, and perform reliably inside real business environments. That means orchestration, control, observability, security, integration, and governance.
Frontier allows us to own the platform layer. We need to position Frontier as the default platform for enterprise agents – the core intelligence layer enterprises use to build, deploy, manage, and scale systems. This is where our advantage can compound. Frontier ties model intelligence directly to agent performance. As our models improve, the platform gets more valuable. As the platform gets embedded, switching costs rise. As customers run more workflows through the system, OpenAI becomes harder to replace and more central to how work gets done. That is how we move from product vendor to operating infrastructure.
OpenAI announced Frontier in February
and included this illustration:
If this layout looks familiar it’s because it’s not dissimilar to how Palantir presents itself; I explained in 2024’s
Enterprise Philosophy and the First Wave of AI
:
To that end, the company I am most intrigued by, for what I think will be the first wave of AI, is Palantir. I didn’t fully understand the company until
this 2023 interview with CTO Shyam Sankar and Head of Global Commercial Ted Mabrey
; I suggest reading or listening to the whole thing, but I wanted to call out this exchange in particular:
Was there an aha moment where you have this concept — you use this phrase now at the beginning of all your financial reports, which is that you’re the operating system for enterprises. Now, obviously this is still the government era, but it’s interesting the S-1 uses that line, but it’s further down, it’s not the lead thing. Was that something that emerged later or was this that, “No, we have to be the interface for everything” idea in place from the beginning?
Shyam Sankar:
I think the critical part of it was really realizing that we had built the original product presupposing that our customers had data integrated, that we could focus on the analytics that came subsequent to having your data integrated. I feel like that founding trauma was realizing that actually everyone claims that their data is integrated, but it is a complete mess and that actually the much more interesting and valuable part of our business was developing technologies that allowed us to productize data integration, instead of having it be like a five-year never ending consulting project, so that we could do the thing we actually started our business to do.
That integration looks like this illustration from the company’s
webpage for Foundry
, what they call “The Ontology-Powered Operating System for the Modern Enterprise”:
This is how OpenAI described Foundry:
Frontier connects siloed data warehouses, CRM systems, ticketing tools, and internal applications to give AI coworkers that same shared business context. They understand how information flows, where decisions happen, and what outcomes matter. It becomes a semantic layer for the enterprise that all AI coworkers can reference to operate and communicate effectively.
This is a heavy lift; Palantir solves it by actually sending engineers into companies to integrate all of their data; OpenAI is trying to do the same thing through partnerships. From
Reuters
at the end of February:
OpenAI is expanding its push into the enterprise market by teaming up with four of the world’s largest consulting firms, betting that a more hands-on approach will help corporate clients move beyond pilot projects to full-scale AI deployments.
The company said on Monday it had launched the so-called “Frontier Alliance,” a program built around its new Frontier platform and anchored by BCG, McKinsey, Accenture and Capgemini. The initiative pairs OpenAI’s forward-deployed engineers with consulting firms to help companies integrate AI agents into core business processes such as software development, sales and customer support.
I take this as a real validation of my thesis in that 2024 Article:
Executives, however, want the benefit of AI now, and I think that benefit will, like the first wave of computing, come from replacing humans, not making them more efficient. And that, by extension, will mean top-down years-long initiatives that are justified by the massive business results that will follow. That also means that go-to-market motions and business models will change: instead of reactive sales from organic growth, successful AI companies will need to go in from the top…Services and integration teams will also make a comeback. It’s notable that this has been a consistent criticism of Palantir’s model, but I think that comes from a viewpoint colored by SaaS; the idea of years-long engagements would be much more familiar to tech executives and investors from forty years ago.
The quality of agents will be a function of the model, harness, and the integration thereof, but the quality of data will matter a lot as well, and getting data across applications in a usable state will not be easy; Dresser is right, however, that that will be a moat.
Amazon and Anthropic
Continuing with the memo:
Our Microsoft partnership has been foundational to our success. But it has also limited our ability to meet enterprises where they are — for many that’s Bedrock. Since we announced the partnership at the end of February, inbound demand from our customers for this offering has been frankly staggering. We are firing on all cylinders to establish this as a scaled distribution channel.
I’ve noted for a while that one of Anthropic’s big enterprise advantages was the fact they ran on all of the major cloud vendors; OpenAI still isn’t on GCP, but Amazon was the more important missing piece. What’s interesting is the conflict of interest this represents for Microsoft: OpenAI being available on Bedrock is good for their investment in OpenAI; it’s also bad for Azure.
The juiciest part of the memo, however, was when Dresser addressed Anthropic directly:
Their story is built on fear, restriction, and the idea that a small group of elites should control AI. Our positive message will win over time: build powerful systems, put in the right safeguards, expand access, and help people do more.
I do get an increased sense that there is a much more clear taking of sides happening in the Silicon Valley ecosystem; a lot of disparate voices seemed to come out in OpenAI’s defense over the past week or so, largely organized around this point Dresser raises.
Their strategic misstep to not acquire enough compute is showing up in the product. Customers feel it through throttling, weaker availability, and a less reliable experience. We saw the exponential compute curve earlier, acted on it faster, and now have a real structural advantage.
This is clearly true; the big question is whether or not Anthropic’s conservatism is fatal. My expectation, as I noted yesterday, is that they will be able to get the compute they need to meet demand; it just might cost them considerably more than if they had been more aggressive in their planning.
Their coding focus gave them an early wedge. But you do not want to be a single-product company in a platform war. As AI spreads beyond developers into every team, workflow, and industry, that narrowness can become a real liability.
I’m not sure I buy this, given that coding underlies so much of AI’s potential. A lot of AI products will ultimately be about applying coding in a seamless way to business problems without needing to know that coding is happening. It’s also worth noting that Codex is by all accounts extremely good, and better than Claude for certain tasks; the challenge is that a lot of development teams have already made their choice and are busy working instead of trialing. That said, developers are the customer base most willing to switch.
Their stated run rate is inflated. They use accounting treatment that makes revenue look bigger than it is, including grossing up rev share with Amazon and Google. Our analysis shows that this overstates their run rate by roughly $8 billion (at the current $30 stated). We report Microsoft revshare net, which is more inline with standards we would be held to as a public company.
I’ve mentioned this several times. It is true, but what matters more than the run rate is the rate of growth, and there is no denying that Anthropic is growing massively.
There was, if you caught it, one mention of a “super app”, but that was the only reference to anything consumer related. That’s the other question I raised yesterday: I think OpenAI is right to go all in on enterprise; AI is a productivity enhancer, and enterprises will pay for productivity. The big question, however, is what happens to their consumer business in the meantime. Taking the Anthropic threat seriously may mean ultimately ceding the space to companies who can actually monetize it effectively, which means advertising — and that means Google and Meta.
This Update will be available as a podcast later today. To receive it in your podcast player,
visit Stratechery
.
The Stratechery Update is intended for a single recipient, but occasional forwarding is totally fine! If you would like to order multiple subscriptions for your team with a group discount (minimum 5), please contact me directly.
Thanks for being a subscriber, and have a great day!
Share
Share on Facebook (Opens in new window)
Facebook
Share on X (Opens in new window)
X
Share on LinkedIn (Opens in new window)
LinkedIn
Email a link to a friend (Opens in new window)
Email