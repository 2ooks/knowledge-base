# Clouded Judgement 3.13.26 - In Defense of Model Lab Profitability
**Source:** https://cloudedjudgement.substack.com/p/clouded-judgement-31326-in-defense
**Date:** March 13, 2026
**Author:** Clouded Judgement
**Score:** 4/5 | **Concepts:** ai-agent-ecosystem, developer-tooling-competitive-landscape, agent-security-identity-and-permissions, token-economics-and-pricing
**Scoring reason:** Covers agent credit cards (Ramp/Stripe), Anthropic overtaking OpenAI in business adoption, and xAI's Macrohard project; rich competitive intelligence across multiple concepts.

Clouded Judgement 3.13.26 - In Defense of Model Lab Profitability
Jamin Ball
Mar 13, 2026
52
4
3
Share
Every week I’ll provide updates on the latest trends in cloud software companies. Follow along to stay up to date!
Subscribe
In Defense of Model Lab Profitability
There seems to be endless debate around AI companies, and whether they have “upside down P&Ls” that will forever lose money, or if they will turn into cash cows in the future. Whether this sentiment is pointed at the large labs like OpenAI and Anthropic, or upstarts like Cursor, I hear it all the time! And I can’t tell if the bears just want to confirm their priors on AI negativity, if the bulls just have blind naive optimism, or if anyone really has a pov grounded in real analysis. As an early stage VC I certainly fall into the “perpetually optimistic” camp, so you can apply the appropriate filter to this post :) But for this post I wanted to focus on the profitability debate centered around the large labs, and why I think they’ll turn into wildly profitable business.
There’s three main parts to this debate. 1) gross margins, 2) training costs, and 3) retention / commoditization. The “AI labs will never be profitable” crowd will claim gross margins of labs are structurally capped, the hamster wheel of training larger and larger models (whether that’s a capex or opex expense) will always lead to FCF negative businesses, and the switching costs from one model to the next are super low. So (as the bears would say), even if you can solve one of those 3 issues, you’ll never solve all three, and thus these businesses will never be profitable.
To start, I want to set the stage by analyzing how the profitability of infrastructure software companies (like Confluent, Snowflake, Mongo, etc as well as the hyperscalers) have evolved over the years. It’s an imperfect analogy for so many reasons, but I think it’s helpful to lead with it.
Let’s start with gross margins, as this is the part of the debate I’m confident on (one could describe my views as “naively certain” :). Just about every infra software company started off with negative gross margins, that then scaled to something in the 60-70% range with scale. Why do infra companies typically start of with negative / very low gross margins?
You’re buying infrastructure at retail and selling at a discount.
Early on you have no scale with your cloud provider. You’re paying list price (or close to it) for compute/storage, but you’re pricing your product aggressively to win customers. The math is upside down by design, you’re subsidizing adoption.
Utilization is terrible.
You’ve provisioned capacity for customers you don’t have yet. Your clusters are running at 10-20% utilization but you’re paying for 100%. Every incremental customer improves the ratio, but early on you’re eating dead capacity.
Fixed costs of launching new cloud regions
. Early on, you may only make your product available on one cloud, in one cloud region. “AWS East.” over time, you add more clouds, and more regions. There’s a real fixed cost to adding new regions (and even more adding more clouds). Early on, you are amortizing these costs over a very small number of customers. As your customer base grows, you can spread those annual fixed costs across a larger cross section of customers.
The product isn’t optimized yet.
Early infra products are architected for speed-to-market, not efficiency. Queries are wasteful, storage isn’t tiered properly, caching layers don’t exist yet. Engineering is focused on features, not cost optimization. The “make it work, then make it fast” cycle means COGS is bloated in the early years.
There are more, but these were the first couple I could think of. And what happens? Every company figures all of these out, and the gross margins scale predictably…If there’s one thing I’m almost never worried about when evaluating
early stage
infra companies, it’s their gross margins…
Now let’s look at the model companies. A huge knock early on was “their gross margins suck! They’ll never be profitable!” But these model companies face a lot of the same challenges classic infra companies did, and they’re already showing a similar trend of expanding. The Information recently reported Anthropic had -94% gross margins in 2024, and a target of ~40% gross margins in 2025. I won’t comment on the validity of those figures, but the trendline should be very clear…How have the labs been able to expand margins like this? Their model architectures improve and serving becomes more efficient (think adding things like prompt caching). How efficiently they auto-scale and utilize GPUs in the background gets more efficient.
Overall, the inference cost per token drops dramatically as architectures get more efficient.
I’d argue the marginal inference call is already quite gross margin profitable. My partner Clark posted an analysis related to this you can find
here
. I also think there’s a good chance the labs offer higher gross margins products down the line (like applications, ads, etc). I’m really not worried about gross margins being structurally lower for the labs then classic infra companies of the cloud era.
The second debate around “these will never be profitable companies” centers around training costs. Cloud infra companies don’t really have a parallel to analyze here. However, the real question (in my opinion) is more about how long does it take to payback the training costs. For that, we do have an analogy for the cloud infra companies - their S&M payback (or CAC payback as I like to call it). It’s pretty well understood what great, good, bad looks like when it comes to CAC payback, and what’s sustainable from a “profitability” standpoint. To define the metric, CAC payback is calculated as: “if you spent $x to acquire a customer, how many months does it take to generate $x of cumulative gross profits from that customer.” Anything less than 12 months is fantastic, 12-24 months is good, 24-36 months is ok, and >36 months gets dicey (these are very general rules of thumb I usually apply to earlier stage companies. As you get larger and larger these metrics aren’t quite as relevant). Companies with <24 months of CAC payback have shown the ability to be wildly FCF profitable. The reason this metric is relevant is because after you’ve paid back the cost to acquire, all future gross profits from that customer should largely flow straight to the bottom line (again, a broad strokes comment that isn’t entirely accurate, but directionally is).
So the right comparison to the labs is “what is your pre-training payback period” and more importantly, how is that metric trending as you release future models. The way to calculate “training payback period” would be to look at the fully loaded cost to train a model, and then calculate how long it takes to generate an equivalent amount of gross profits. Without getting into private data, I can say the dynamics of the labs training payback period doesn’t look that different from infra companies CAC payback periods. I have all the comfort in the world that the training payback periods are not that long at all.
Two pushbacks to this.
CAC payback for infra co’s is a one time thing. You spend once to acquire a customer, then farm the revenue. Model companies don’t just spend once to pre-train a model, they do it repeatedly, over and over again. So the real question is can they pay back the training costs (and then generate profits) BEFORE they get to their next model. This is the strongest bear argument in my opinion, so it’s worth digging into in a little more depth.
First — people dramatically underestimate the commercial lifespan of a model. There’s this perception that labs ship a new model every few months and the old one immediately becomes worthless. That’s not how it works. Sonnet 3.5 was Anthropic’s workhorse for well over a year. GPT-4 was the backbone of OpenAI’s revenue for ages. And these models don’t get “replaced” — they get layered. New frontier model comes out at a premium, old model slides down to serve the high-volume cost-sensitive tier. The revenue from the older model “shifts” way more than it just “disappears.” So the window to payback training costs is longer than the bears assume.
Second — revenue growth between model generations has been significantly outpacing training cost growth. Yes, training costs are going up something like 3-5x per generation. But the labs have been roughly doubling (or more) annually, and each new model unlocks entirely new use cases and customer segments. Said another way, if it takes you 6 months to pay back Model A’s training cost on a $1B revenue base, and Model B costs 4x more to train but you’re on a $3B revenue base… the payback period actually
shrinks
. The ratio is getting better, not worse.
Third — training efficiency itself is improving. The labs aren’t just throwing more compute at the same problem. Better data curation, synthetic data, architectural improvements, all of these reduce the FLOPs needed to hit a given capability level. So “4-5x more expensive each generation” is probably overstated if you measure cost per unit of capability rather than raw spend.
Longer model lifespans than people think, revenue growth outpacing training cost growth, and improving training efficiency. I have a hard time seeing training payback periods become unsustainable. If anything, the data suggests they’re getting better over time, not worse.
Well, great, the training payback costs aren’t crazy, but the model companies still have to pay back CAC!! I’d respond to this by arguing that model labs will have structurally lower CAC payback periods because their market is more of an oligopoly vs a super crowded SaaS market. That is maybe the part of my analysis that will garner the most push back… There used to be many more large lab competitors. The dust has settled, and there’s really 3 that stand out (that are in the business of selling inference tokens themselves). OpenAI, Anthropic and Gemini from Google. I think the CAC payback period of labs will look more like CAC payback of the hyperscalers given they both look like oligopolies. In time, neo-labs will be real challengers. But I think the neo-labs wont structurally change the payback periods of the large labs.
The obvious pushback to the oligopoly framing is open source. Llama, DeepSeek, Mistral. These models are good and getting better, and they're basically free. Don't they structurally cap the labs' pricing power? I don't think so, for a few reasons. Open source models are great for experimentation and for use cases where "good enough" is fine. But enterprise customers overwhelmingly want a vendor, they want SLAs, they want support, they want someone to call when things break, they want compliance certifications, and they want a roadmap they don't have to build themselves. Running and serving open source models at scale is not free. You still need the infra, the ops team, the fine-tuning pipeline, all of it. By the time you've built all of that, you've basically rebuilt a worse version of what the labs already offer. Open source keeps the labs honest on pricing (which is a good thing), but I don't think it fundamentally breaks the profitability thesis. The thing for the labs to be “worried” about. I do see a pattern where companies will use the labs models for quick prototyping, and then look for an open source (cheaper) model for the larger deployment. This could be a canary in the coal mine for my thesis.
And finally, the “labs will never be profitable” crowd argue the switching costs are zero, retention will be all over the place, and eventually the models will commoditize themselves by offering the same features. First (to get it out of the way), people have been saying that about the hyperscalers (AWS, Azure, GCP) forever….And guess what, they’re all wildly profitable DESPITE massive price cuts along the way. I wrote about this a few years ago
here
. The hyperscalers have added a structural layer of lock-in the labs don’t benefit from - egress fees! Despite not having that tool, I think the switching costs for labs are building faster than people realize, and will be much higher than the bears think within a couple years.
Think about what a serious enterprise deployment on a lab actually looks like today. You’ve got fine-tuned models trained on your proprietary data that don’t transfer to another provider. You’ve got eval suites built around a specific model’s behavior and quirks. Your engineering team has built muscle memory around a specific API, specific prompting patterns, specific tool-use conventions. You’ve got system prompts that have been iterated on for months. You’ve probably got committed spend contracts with negotiated pricing. And increasingly you’ve got features like memory, context windows, and agent tool ecosystems that are deeply provider-specific. None of that stuff ports cleanly.
And it’s only going to get stickier. As the labs move further into platform territory — hosting agents, managing long-running workflows, storing persistent context, offering fine-tuning and retrieval infrastructure - switching starts to look less like “swap out an API key” and more like “migrate off a cloud provider.” That’s a very different conversation. The model itself might be commoditizing (and honestly, for a lot of use cases, the frontier models are pretty interchangeable). But the
platform
around the model is not. And that’s where retention gets built.
The other thing I’d point out - the market structure itself supports retention. This is basically an oligopoly. Three serious players (OpenAI, Anthropic, Google), and the gap between them and everyone else is meaningful (and growing). In an oligopoly, you don’t see the aggressive price wars and customer churn you see in fragmented markets. You see stable market share, rational pricing, and high retention. The hyperscalers are the perfect analogy here - AWS, Azure, and GCP compete intensely, but none of them have low retention. It’s the same dynamic.
So in summary, why do I believe the labs will all be quite profitable?
I believe their gross margins will (at maturity) look a lot more like classic infra software gross margins. And the data supports this
I believe the training payback and CAC payback periods of the labs are sustainable, and ultimately the marginal gross profit dollar will be >>  the marginal training & CAC dollar. And the data supports this.
I believe the labs will have much higher retention than the bears think, and simultaneously won’t commoditize.
Ultimately, none of this matters if the labs themselves can’t stay at the frontier. If they fail at that, nothing else in this post matters. However, IF you believe they will, I think there’s a very clear path to very profitable businesses.
**Disclaimer, Altimeter is an investor in both OpenAI and Anthropic**
Quarterly Reports Summary
Top 10 EV / NTM Revenue Multiples
Top 10 Weekly Share Price Movement
Update on Multiples
SaaS businesses are generally valued on a multiple of their revenue - in most cases the projected revenue for the next 12 months.  Revenue multiples are a shorthand valuation framework. Given most software companies are not profitable, or not generating meaningful FCF, it’s the only metric to compare the entire industry against. Even a DCF is riddled with long term assumptions. The promise of SaaS is that growth in the early years leads to profits in the mature years. Multiples shown below are calculated by taking the Enterprise Value (market cap + debt - cash) / NTM revenue.
Overall Stats:
Overall Median: 3.3x
Top 5 Median: 18.2x
10Y: 4.3%
Bucketed by Growth. In the buckets below I consider high growth >22% projected NTM growth, mid growth 15%-22% and low growth <15%. I had to adjusted the cut off for “high growth.” If 22% feels a bit arbitrary, it’s because it is…I just picked a cutoff where there were ~10 companies that fit into the high growth bucket so the sample size was more statistically significant
High Growth Median: 10.8x
Mid Growth Median: 6.4x
Low Growth Median: 2.6x
EV / NTM Rev / NTM Growth
The below chart shows the EV / NTM revenue multiple divided by NTM consensus growth expectations. So a company trading at 20x NTM revenue that is projected to grow 100% would be trading at 0.2x. The goal of this graph is to show how relatively cheap / expensive each stock is relative to its growth expectations.
EV / NTM FCF
The line chart shows the median of all companies with a FCF multiple >0x and <100x. I created this subset to show companies where FCF is a relevant valuation metric.
Companies with negative NTM FCF are not listed on the chart
Scatter Plot of EV / NTM Rev Multiple vs NTM Rev Growth
How correlated is growth to valuation multiple?
Operating Metrics
Median NTM growth rate: 13%
Median LTM growth rate: 15%
Median Gross Margin: 75%
Median Operating Margin (1%)
Median FCF Margin: 20%
Median Net Retention: 109%
Median CAC Payback: 34 months
Median S&M % Revenue: 35%
Median R&D % Revenue: 23%
Median G&A % Revenue: 15%
Comps Output
Rule of 40 shows rev growth + FCF margin (both LTM and NTM for growth + margins). FCF calculated as Cash Flow from Operations - Capital Expenditures
GM Adjusted Payback is calculated as: (Previous Q S&M) / (Net New ARR in Q x Gross Margin) x 12. It shows the number of months it takes for a SaaS business to pay back its fully burdened CAC on a gross profit basis. Most public companies don’t report net new ARR, so I’m taking an implied ARR metric (quarterly subscription revenue x 4). Net new ARR is simply the ARR of the current quarter, minus the ARR of the previous quarter. Companies that do not disclose subscription rev have been left out of the analysis and are listed as NA.
Sources used in this post include Bloomberg, Pitchbook and company filings
The information presented in this newsletter is the opinion of the author and does not necessarily reflect the view of any other person or entity, including Altimeter Capital Management, LP (”Altimeter”).  The information provided is believed to be from reliable sources but no liability is accepted for any inaccuracies.  This is for information purposes and should not be construed as an investment recommendation.  Past performance is no guarantee of future performance.  Altimeter is an investment adviser registered with the U.S. Securities and Exchange Commission. Registration does not imply a certain level of skill or training. Altimeter and its clients trade in public securities and have made and/or may make investments in or investment decisions relating to the companies referenced herein. The views expressed herein are those of the author and not of Altimeter or its clients, which reserve the right to make investment decisions or engage in trading activity that would be (or could be construed as) consistent and/or inconsistent with the views expressed herein.
This post and the information presented are intended for informational purposes only.
The views expressed herein are the author’s alone and do not constitute an offer to sell, or a recommendation to purchase, or a solicitation of an offer to buy, any security, nor a recommendation for any investment product or service. While certain information contained herein has been obtained from sources believed to be reliable, neither the author nor any of his employers or their affiliates have independently verified this information, and its accuracy and completeness cannot be guaranteed. Accordingly, no representation or warranty, express or implied, is made as to, and no reliance should be placed on, the fairness, accuracy, timeliness or completeness of this information. The author and all employers and their affiliated persons assume no liability for this information and no obligation to update the information or analysis contained herein in the future.
Subscribe
Share Clouded Judgement
Leave a comment
52
4
3
Share