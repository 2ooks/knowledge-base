# Why SaaS freemium playbooks don’t work in AI, and what to do instead
**Source:** https://www.lennysnewsletter.com/p/why-saas-freemium-playbooks-dont
**Date:** 2026-05-05
**Author:** Vikas Kansal
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Why SaaS freemium playbooks don’t work in AI, and what to do instead
How to build an AI monetization strategy that actually works
Vikas Kansal
May 05, 2026
∙ Paid
334
6
11
Share
👋 Hey there, I’m Lenny. Each week, I answer reader questions about building product, driving growth, and accelerating your career. For more:
Lenny’s Podcast
|
Lennybot
|
How I AI
| My favorite
AI/PM courses
,
public speaking course
, and
interview prep copilot
Subscribe
P.S. Get a full free year of Google AI, Cursor, Lovable, Notion, Manus, Replit, Gamma, n8n, Canva, ElevenLabs, Factory, Wispr Flow, Fin, Supabase, Bolt, Linear, PostHog, Framer, Railway, Granola, Warp, Gumloop, Magic Patterns, Mobbin, Stripe Atlas, and ChatPRD, by becoming
an Insider subscriber
.
Yes, this is for real
.
Today’s guest author,
Vikas Kansal
, leads product for
Google AI
, arguably the most successful consumer subscription bundle in history, with Gemini 3.1, Nano Banana, NotebookLM, Veo3, and terabytes (!) of cloud storage. Vikas has been on the front lines of figuring out how to successfully monetize AI products, balancing compute costs with sustainable growth, and in today’s in-depth guest post, he shares all the lessons he and his team have learned about paywalling AI.
Let’s get into it.
You’ve just launched an incredible AI product. Growth is exploding, and users are completely hooked on the “magic” of your free tier. Then your bills arrive. In traditional SaaS, serving an extra free user costs essentially zero. In AI, every time a free user hits “Enter,” your GPUs fire, and your cash burns. AI products need to figure out monetization quickly, or compute costs will bankrupt your company.
Most product teams still reach for the traditional SaaS freemium playbook when designing their AI freemium strategy: give away the basics, and gate the best features. But as growth expert (and four-time Lenny’s Podcast guest)
Elena Verna
rightly points out, when building an AI product, you have to give away a massive amount of “magic” for users to get to the aha moment. They need to actually experience the model writing a perfect email or generating that perfect image before deciding to use a product even a second time. In today’s increasingly noisy market, the time to value (TTV) must be instantaneous if you hope to keep people’s attention.
But this creates a paradox: what happens when that free magical experience becomes so good (and expensive in compute) that it cannibalizes your premium tier?
While launching Google’s
AI subscriptions
, we slammed right into this wall. The free tier was so good that for most tasks, it was outperforming humans. For free! It could write flawless Python, draft perfect marketing copy, and summarize long email threads instantly. We realized we were competing against ourselves, while also trying to create a sustainable business as demand for AI compute exponentially increases over time. Users rightly asked themselves, “Why should I pay $20 a month when the free version is already smarter than I am?”
The traditional SaaS playbook would suggest that we should’ve paygated some of our best features, like the
viral
NotebookLM podcast generator, Nano Banana images, or Gemini Deep Research. In the past, Slack successfully gated message history and Figma gated team libraries. But if we had paygated the ability to talk it out live with Gemini or Deep Research, users would never have experienced the magic needed to build a daily habit and worked up a desire to try the tools again. Plus, this may not have actually addressed the biggest sources of compute costs. The reality of AI products forced us to completely rebuild the anatomy of a paywall for AI subscriptions. Here is the framework we developed.
The anatomy of a modern AI paywall
Generated with Nano Banana Pro, a benefit of the Google AI subscription bundle 👀
The modern AI paywall should be constructed with both sides of the equation in mind: what users expect and what actually costs the company money in compute. This means moving beyond a traditional SaaS freemium model to multiple dynamic, usage-based, and outcome-driven tiers. If you are building an AI paywall, shift your upgrade triggers to these three pillars that align customer utility with costs to the company:
Pillar 1: Gate usage intensity
When we first added a paywall to Google’s AI features, our instinct was the traditional SaaS “premium” play: a single $20
Gemini Advanced
tier, where users pay to access the smartest model. But we quickly hit two problems. First, as I mentioned above, the free tier was already so capable that many users felt it was already “smarter than them.” So they saw no reason to upgrade. But the second was more surprising: the power users who
did
upgrade were consuming such immense amounts of compute that the unit economics for the company were terrifying. We realized the real value proposition wasn’t just the quality of the model/answer, but the volume of work a user could pump through the system. And we’d have to price that access accordingly if the business model was going to work.
So we redesigned our offering into
Plus, Pro, and Ultra
tiers. Each bucket maps to a specific level of usage intensity, offering higher usage and larger context windows (up to 1 million tokens) as you move up. This provides users with predictable, prepaid pricing tiers and avoids the pay-per-use AWS-style bill shock that consumers hate. You get a taste of most features in every tier, and the Pro tier may be sufficient for a casual experimenter, while power users would opt for the Ultra tier. This approach aligned our unit economics and subscriber distribution to create a financially sustainable business model. We found that gating usage intensity was a more powerful monetization lever than gating model intelligence.
As another example,
Midjourney
does this well. They use a “Fast Mode” vs. “Relax Mode” system. Fast Mode provides instant GPU access for quick results using limited monthly hours—which are priced accordingly. Once Fast Hours are exhausted, users on Standard plans or higher can switch to unlimited Relax Mode, which operates in a queue based on demand. Users are paying for priority access to their GPUs to generate more, faster images and not necessarily for better images. And the company can keep their unit economics tight.
Pillar 2: Gate outcomes
While Pillar 1 monetizes raw compute and volume, Pillar 2 monetizes productivity. The free tier may give a user the right answer, but it requires manual effort—copying, pasting, prompting, and formatting. To get users to upgrade, you must put a paywall in front of features that collapse multi-step tasks into a single click. “Pro” users are highly sensitive to friction, and they will justify the subscription cost simply based on the hours of work it eliminates from their life.
Our original value proposition for
Gemini Advanced
was built entirely around providing the “best and fastest answer” a frontier model could produce. Since then, LLMs made a major transition from passive text generators to autonomous
AI agents
that can reason, plan, use tools, and retain memory to complete complex tasks. We embraced this shift by making
Chrome
auto browse
exclusively for our higher tiers. Chrome’s auto browse (powered by Gemini) is an AI agent feature that autonomously navigates websites, fills out forms, compares products, adds items to carts, and manages tasks like booking appointments within the browser. We framed the paywall around the employee labor saved, by letting the agent navigate the web and execute actions on behalf of the user to complete actual work. We stopped selling “answers” and started selling “hours.”
Intercom’s
Fin AI agent
is the gold standard in outcome-based AI pricing. It charges $0.99 per resolution. It’s free to let the AI try to answer, but you only pay when the user confirms their problem was actually solved.
Sierra
also does this well.
Pillar 3: Gate the heaviest compute modalities
When we were brainstorming the go-to-market for
Genie 3
—our real-time interactive “world model”—we knew the compute costs would be staggering. During internal dogfooding, we joked that the TPUs were melting on every prompt. We realized that offering this to every free user wasn’t just a bad business move but was physically impossible. There simply weren’t enough TPUs to serve this model at the 100K+ QPS required for hundreds of millions of DAUs. However, we also found that consumers intrinsically understand that these heavy modalities are a premium service. They don’t expect a cinematic, photorealistic 3D world to be free in the same way they expect a 500-word email to be.
So we made Genie 3 available exclusively to our highest-tier members. By elevating this frontier world model into a premium tier, we turned a massive compute liability into a powerful incentive for users to move to the top of our pricing ladder. This also enabled us to showcase the state-of-the-art model without running into capacity constraints.
My advice is to use your most expensive, compute-heavy modalities as the ultimate upgrade trigger for your highest subscription tier. Make text and basic image generation universally accessible to drive top-of-funnel growth, but set a hard paywall the moment a user wants to render a cinematic video, run a real-time simulation, or enter a persistent 3D environment.
Craft your monetization ecosystem
Well-crafted and value-aligned tiers can capture the user’s experimental budget, but they won’t keep it. AI subscriptions have relatively higher churn compared with traditional SaaS simply because the core usage habits are still being formed. To access that lifetime user value, you have to design an ecosystem surrounding the tiers to contain and expand your customer base. Below is how you optimize conversion, retention, and cost to serve to ensure that you’re building an ecosystem that lasts.
Nail your conversion catalysts
Deciding
what
value to put in which tier is only half the battle. You also need to master
when
and
how
to prompt the upsell that actually drives revenue. To push a highly engaged free user over the tipping point, you need specific conversion catalysts—behavioral triggers, contextual UX nudges, and strategic packaging that transform a frustrating roadblock into a frictionless, no-brainer upgrade. Showing the upgrade prompt is more an art than a science. Driving meaningful conversions ultimately comes down to surfacing the right contextual nudge to the right user at the exact moment of high intent. With Google AI subscriptions, we’ve found a few approaches that really work:
This post is for paid subscribers
Subscribe
Already a paid subscriber?
Sign in
Previous
Next
A guest post by
Vikas Kansal
Product lead for Google AI subscriptions, leading a team of PMs building AI monetization for consumers. AI subscriptions include the best of Google AI, including Gemini App, NotebookLM and cloud storage!
Subscribe to Vikas