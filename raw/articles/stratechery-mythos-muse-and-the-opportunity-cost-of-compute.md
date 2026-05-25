# Mythos, Muse, and the Opportunity Cost of Compute
**Source:** https://stratechery.com/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8_cD0xODc2OSJdfSwiZXhwIjoxNzgyMjc2NzcwLCJpYXQiOjE3Nzk2ODQ3NzAsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIHBvZGNhc3QgcnNzIiwic3ViIjoiZTVkNDRhNjQtY2E1OC00NzFkLTlmYTMtOWM5MDgxM2E4ODUwIiwidXNlIjoiYWNjZXNzIn0.IkXa_3seC3CIlSIyqA9gv1XrGrVUwxNfdPqu0iVurx92hUyzPANTW7HDRROSMuc8HzbE1Xa3oGBogeVgFvyV145nDHwF0VhimQZ-m8d7TgkBmiqMbi24om39dUwb_yJJjF7izvMId23V0ueh_rPHtOHjuOZTauBHl2I-8P7IvnFnDECfky6wC6ipjxfh73CrUwIo5i54NrmfFHBz61vTLK8AV6VhNUvZ3-rssucDeIBtvBYf0XNYYOXtkAVj744gaxFXNJ7wNa3nDtJmvjGAyjnTSBpmwWeNAWkInES3wAyL2u8zYEtLsXaCYy6PsAMUsOYSsf72tmuPAfZwe8CBdQ&p=18769
**Date:** 2026-04-13
**Author:** Ben Thompson
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Listen to this
post
:
Log in to listen
In January 2025, Doug O’Laughlin at
Fabricated Knowledge
declared that o1 and reasoning models marked the end of Aggregation Theory:
I believe that there is no practical limit to the improvements of models other than economics, and I think that will be the real constraint in the future. It is reasonable that if we spent infinite dollars on a model, it would be improved. The problem is whether infinite dollars would make sense for a business.
That is going to be the key question for 2025. How do the economics of AI make this work? One of the core assumptions about the internet has just been broken. Marginal costs now exist again, meaning that most hyperscalers will become increasingly capital-intensive.
The era of Aggregation Theory is behind us, and AI is again making technology expensive. This relation of increased cost from increased consumption is anti-internet era thinking. And this will be the big problem that will be reckoned with this year. Hyperscaler’s business models are mainly underpinned by the marginal cost being zero. So, as long as you set up the infrastructure and fill an internet-scale product with users, you can make money.
This era will soon be over, and the future will be much weirder and more compute-intensive. Looking back on the 2010s, we will probably consider them a naive time in the long arc of technology. One of our fundamental assumptions about this period is unraveling. This will be the single most significant change in the technology landscape going forward.
Aggregation Theory
was, if I may say so myself, the single best way to understand the 2010s, particularly consumer tech. It explained the dynamics undergirding Google and Facebook’s dominance, as well as the App Store and Amazon’s e-commerce business; it was also a useful (
albeit incomplete
) framework to understand an entire host of consumer services like Uber, Airbnb, and Netflix.
It’s worth pointing out, however, that some of the critical insights undergirding Aggregation Theory are much older, and are embedded in the fundamental nature of tech itself. They are, as O’Laughlin notes, rooted in the concept of zero marginal costs.
Marginal Costs
Marginal costs are how much it costs to make one more unit of a good. Consider a widget-making factory:
You need land for the factory
You need machines for the factory
You need electricity to operate the machines
You need humans to operate the machines
You need the raw material for the widgets
Land and machines are clearly fixed costs; you have to have both to get started, and you are paying for both whether or not you make one more widget. Raw material, on the other hand, is clearly a marginal cost: if you make one more widget, you need one more widget’s worth of raw material. When it comes to physical goods, electricity and humans are also marginal costs: you need more or fewer of them depending on whether you make more or fewer widgets.
Where marginal costs matter is that they provide a price floor. Companies will operate unprofitably because profit and loss is an accounting concept that incorporates depreciation, i.e. your fixed costs. For example, imagine that a company spent $1,000 on a factory to make widgets that have a marginal cost of $10: as long as the price of widgets is >$10 the company will make them even if they don’t earn enough money to cover their depreciation costs (i.e. they operate at a loss) because at least they are still making a marginal profit on each widget (what the company may not do is invest in any more fixed costs, and, eventually, will probably go bankrupt from interest on the debt that likely financed those fixed costs).
I explain all of this precisely because it’s almost completely immaterial to tech. First, there generally are no raw material costs, because the outputs are digital. Second, because there are no raw material costs, and because the fixed costs are so large, electricity and humans are generally treated as fixed costs, not marginal costs: of course you will run your servers all of the time and at full capacity, because every scrap of additional revenue you can generate is worth it.
AI very much fits in this paradigm: the output is digital, and while AI chips use a lot of electricity, the cost is a fraction of the cost of the chips themselves, which is to say that no one with AI chips is making marginal cost calculations in terms of utilizing them. They’re going to be used! Rather, the decision that matters is what they will be used for.
Opportunity Costs
Consider Microsoft:
last quarter
the company missed the Street’s Azure growth expectations not because there wasn’t demand, but because the company decided to use its capacity for its own products. CFO Amy Hood said
on the company’s earnings call
:
I think it’s probably better to think about the Azure guidance that we give as an allocated capacity guide about what we can deliver in Azure revenue. Because as we spend the capital and put GPUs specifically, it applies to CPUs, the GPUs more specifically, we’re really making long-term decisions. And the first thing we’re doing is solving for the increased usage in sales and the accelerating pace of M365 Copilot as well as GitHub Copilot, our first-party apps. Then we make sure we’re investing in the long-term nature of R&D and product innovation. And much of the acceleration that I think you’ve seen from us and products over the past a bit is coming because we are allocating GPUs and capacity to many of the talented AI people we’ve been hiring over the past years.
Then, when you end up, is that, you end up with the remainder going towards serving the Azure capacity that continues to grow in terms of demand. And a way to think about it, because I think, I get asked this question sometimes, is if I had taken the GPUs that just came online in Q1 and Q2 in terms of GPUs and allocated them all to Azure, the KPI would have been over 40. And I think the most important thing to realize is that this is about investing in all the layers of the stack that benefit customers. And I think that’s hopefully helpful in terms of thinking about capital growth, it shows in every piece, it shows in revenue growth across the business and shows as OpEx growth as we invest in our people.
The cost that Microsoft is contending with here is not marginal cost, but rather opportunity cost: compute spent in one area cannot be used in another area; in the case of these earnings, Microsoft was admitting that they could have made their Azure number if they wanted to, but chose to prioritize their own workloads because, as CEO Satya Nadella noted later in the call, those have higher gross margin profiles and higher lifetime value.
It’s opportunity costs, not marginal costs, that are the challenge facing hyperscalers. How much compute should go to customers, and which ones? How much should be reserved for internal workloads? Microsoft needs to balance Azure — both for its enterprise customers and OpenAI — and its software business; Amazon needs to balance its e-commerce business, AWS, and its strategic investments in both Anthropic and OpenAI. Google has to balance GCP, its own strategic investment in Anthropic, and its consumer businesses.
Mythos
Last week Anthropic
released
announced Mythos, its most advanced model. And, in somewhat typical Anthropic fashion, it did so by focusing on its dangers; from the introductory post for
Project Glasswing
, the company’s initiative for leveraging Mythos to address security:
We formed Project Glasswing because of capabilities we’ve observed in a new frontier model trained by Anthropic that we believe could reshape cybersecurity. Claude Mythos Preview is a general-purpose, unreleased frontier model that reveals a stark fact: AI models have reached a level of coding capability where they can surpass all but the most skilled humans at finding and exploiting software vulnerabilities.
Mythos Preview has already found thousands of high-severity vulnerabilities, including some in every major operating system and web browser. Given the rate of AI progress, it will not be long before such capabilities proliferate, potentially beyond actors who are committed to deploying them safely. The fallout—for economies, public safety, and national security—could be severe. Project Glasswing is an urgent attempt to put these capabilities to work for defensive purposes.
In
an Update last week
I analogized Anthropic’s “disaster-porn-as-marketing-tool” approach to
The Boy Who Cried Wolf
; what’s important about that analogy is not just that the boy raised false alarms, but also that, in the end, the wolf did come. To that end,
I wrote two weeks ago
about the myriad of security issues that underpin all software, and my optimism that AI would solve these issues in the long run, even if it made things much worse in the short run. In other words, it’s actually not important whether or not Mythos represents a major security threat: if this model doesn’t, a future model will; to that end, I do support leveraging Mythos to proactively find and fix bugs before bad actors can find and exploit them.
At the same time, it’s also worth noting that there are other reasons for Anthropic to not make Mythos widely available, limiting access to a finite number of companies with a high capacity and willingness to pay. The first are those opportunity costs: Anthropic is already short on compute serving its current models; X was overrun with complaints and debates this weekend about
Anthropic allegedly dumbing down Claude over the last month or so
. Making Mythos more widely available — particularly to subscription plans that don’t pay per usage — would make the situation much worse.
In other words, Anthropic isn’t facing a marginal cost problem, but an opportunity cost problem: where to allocate its compute. Of course this could become a margin problem: I suspect that Anthropic is going to overcome
its conservatism in terms of compute
by acquiring more compute from hyperscalers and neoclouds, and paying dearly for the privilege.
The key to handling those costs will be to charge more for Claude going forward; that, by extension, means maintaining pricing power, which leads to a second benefit of not releasing Mythos broadly. Anthropic certainly faces competition from OpenAI; for both frontier labs, however, the real competition in the long run are open source models. Right now those primarily come from China, and a key ingredient in fast-following frontier models is distillation; from
Anthropic’s blog
:
We have identified industrial-scale campaigns by three AI laboratories—DeepSeek, Moonshot, and MiniMax—to illicitly extract Claude’s capabilities to improve their own models. These labs generated over 16 million exchanges with Claude through approximately 24,000 fraudulent accounts, in violation of our terms of service and regional access restrictions.
These labs used a technique called “distillation,” which involves training a less capable model on the outputs of a stronger one. Distillation is a widely used and legitimate training method. For example, frontier AI labs routinely distill their own models to create smaller, cheaper versions for their customers. But distillation can also be used for illicit purposes: competitors can use it to acquire powerful capabilities from other labs in a fraction of the time, and at a fraction of the cost, that it would take to develop them independently.
I absolutely believe this is a real problem, and
wrote as much when DeepSeek R1 was released last year
. I also think it’s in the interest of everyone other than the frontier labs to pretend that it isn’t; open source models are not subject to the frontier labs’ markup or compute constraints, which is exactly why it benefits most companies to have them available, whether or not they are distilled. Of course that doesn’t mean they are free to run: you still need to provide the compute.
Notice, however, how that makes stopping distillation even more of a priority for the frontier labs: first, they want to protect their margins. Second, however, their biggest cost is opportunity cost: the customers they can’t serve because they don’t have enough compute. To the extent they can make compute less useful for their potential customers — by stopping open source models from distilling their models — is the extent to which they can acquire that compute for themselves at more favorable rates.
Meta Muse
Mythos wasn’t the only new model announced last week: Meta released the first fruit of their new frontier lab as well. From
the company’s blog post
:
Today, we’re excited to introduce Muse Spark, the first in the Muse family of models developed by Meta Superintelligence Labs. Muse Spark is a natively multimodal reasoning model with support for tool-use, visual chain of thought, and multi-agent orchestration.
Muse Spark is the first step on our scaling ladder and the first product of a ground-up overhaul of our AI efforts. To support further scaling, we are making strategic investments across the entire stack — from research and model training to infrastructure, including the Hyperion data center…
Muse Spark offers competitive performance in multimodal perception, reasoning, health, and agentic tasks. We continue to invest in areas with current performance gaps, such as long-horizon agentic systems and coding workflows.
Muse Spark isn’t state of the art, but it’s in the game, and overall a positive first impression from Meta Superintelligence Labs. What is most notable to me, however, is the extent to which the last nine months of AI have made clear that CEO Mark Zuckerberg made the right call to embark on that “ground-up overhaul of [Meta’s] AI efforts”.
The trigger for O’Laughlin’s post that I opened this Article with was reasoning, where models using more tokens led to better answers; since then
agents have exponentially increased token demand
, as they can use LLMs continuously without a human in the loop. This is a huge driver in sky-rocketing demand for Claude, as well as OpenAI’s Codex. Moreover, this use case is so potentially profitable that not only is Anthropic’s revenue sky-rocketing, but OpenAI is pivoting its focus to enterprise.
Indeed, you can make the argument that one of OpenAI’s biggest challenges is the fact it has such a popular consumer product in ChatGPT. I, with my Aggregation Theory lens, have long maintained that that userbase was a big advantage for OpenAI, but that assumed that the company could effectively monetize it, which is why
I have argued so vociferously for an advertising model
.
OpenAI has big projections
for exactly that, but until that materializes, that big consumer base is a big opportunity cost in terms of OpenAI’s focus and compute. The company has, to its credit and in the face of widespread skepticism, made significant investments in more compute, but the temptation to allocate more and more compute to agentic use cases that enterprises will pay for, even at the expense of the consumer business, will be very large.
This puts Meta in a unique position relative to everyone else in the industry: unlike any of the hyperscalers or the frontier labs, Meta does not have an enterprise or cloud business to worry about. That means that serving the consumer market comes with no opportunity costs. Of course those opportunity costs would be much smaller anyways, given that Meta already has an at-scale advertising business to monetize usage. In other words, Meta may actually face less competition in winning the consumer space than it might have seemed a few months ago, simply because that is their primary focus — and because they have their own model, which means they don’t need to worry about not having access to the frontier labs (much of this analysis applies to Google, of course).
This, by the same token, is why Meta should open source Muse, just like they did Llama. The entities that will be the most hurt by widespread availability of a frontier model are other frontier labs, who will see their pricing power reduced and face increased competition for compute. This will make it even harder for them to bear the opportunity cost of pursuing the consumer market, leaving it for Meta.
Demand vs. Supply
So is “the era of Aggregation Theory…behind us”? On one hand, the insight that the way to create and maintain value will come from owning the customer is almost certainly going to continue to be the case. On the consumer side owning customers leads to advertising which provides the revenue to provide services to customers. On the enterprise side — which, I would note, has never been an arena where Aggregation Theory was meant to be applied — I think it’s likely that both Anthropic and OpenAI continue to move up the stack and deliver features that compete with software providers directly (an approach that is also in line with not making leading edge models publicly available).
On the other hand, O’Laughlin’s observation that we are and will continue to be compute constrained is an important one: companies will not be able to assume they can serve everyone, because serving one set of customers imposes the opportunity cost of not serving another. This won’t, at least in theory, last forever: at some point AI will be “good enough” for enough use cases that there will be enough compute capacity to take advantage of the fact that there really aren’t meaningful marginal costs entailed in serving AI; that theoretical future, however, feels further away than ever.
OpenAI is betting that this compute constraint — and the deals they have made to overcome it — will matter more than Anthropic’s current momentum with end users. From
Bloomberg
:
OpenAI told investors this week that its early push to dramatically increase computing resources gives it a key advantage over Anthropic PBC at a moment when its longtime rival is gaining ground and mulling a potential public offering.
The ChatGPT maker said it has outpaced Anthropic by “rapidly and consistently” adding computing capacity to support wider adoption of its software, according to a note the company sent to some of its investors after Anthropic announced a more powerful AI model called Mythos. The ambitious infrastructure build-out, criticized by some as too costly, has enabled OpenAI to better keep pace with rising demand for AI products, the memo states.
I’m less certain that this will be dispositive. When it comes to AI, distribution and transaction costs are still free — the two preconditions for Aggregators — which means that the winners should be those with the most compelling products. Those products will win the most users, providing the money necessary to source the compute to serve them; consider
Anthropic’s deal to secure a meaningful portion of TPU supply
, which, given the capacity constraints at TSMC, is ultimately an example of taking supply from Google. I suspect that Anthropic can take more, including already built hyperscaler and neocloud capacity. Yes, that compute will be more expensive, but if demand is high enough the necessary cash flow will be there.
In other words, my bet is that owning demand will ultimately trump owning supply, suggesting that the underlying principles of Aggregation Theory lives on. To put it another way, I think that OpenAI will need to win with better products, not just more compute; then again, if more compute is the key to better products, then does supply matter most? Regardless, they’ll certainly be focused on delivering both to the enterprise customers who are driving Anthropic’s astonishing growth. The real cost may be the consumer market they currently dominate, given that Meta has nothing to lose and everything to gain.
Share
Share on Facebook (Opens in new window)
Facebook
Share on X (Opens in new window)
X
Share on LinkedIn (Opens in new window)
LinkedIn
Email a link to a friend (Opens in new window)
Email