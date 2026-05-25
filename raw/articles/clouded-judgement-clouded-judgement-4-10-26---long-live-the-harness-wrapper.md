# Clouded Judgement 4.10.26 - Long Live the Harness (Wrapper?) !
**Source:** https://cloudedjudgement.substack.com/p/clouded-judgement-41026-long-live
**Date:** 2026-04-10
**Author:** Jamin Ball
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Clouded Judgement 4.10.26 - Long Live the Harness (Wrapper?) !
Jamin Ball
Apr 10, 2026
100
2
6
Share
Every week I’ll provide updates on the latest trends in cloud software companies. Follow along to stay up to date!
Subscribed
Long Live the Harness (Wrapper?) !
In the early days of AI, we saw the rise of “GPT Wrappers.” Companies that created a product that resembled a thin layer on top of a model. People loved to mock these products, saying all the value was in the model with everything around it commoditized. “Why would I use your app when I can just use ChatGPT directly?” Years later, we have a new name for “wrapper” which is now “harness.” OK that’s a crude analogy and not exactly apples to apples... a harness is really the code that determines what information a model sees at each step, what to store, what to retrieve, and what context to present. It’s the scaffolding around the model. But the spirit of the comparison is directionally right: there’s an enormous amount of value in what sits around the model, not just the model itself. And we now have data to prove it.
Stanford just released a study called Meta-Harness that showed something pretty remarkable. Changing the harness around a
fixed
model (same model, same weights, nothing different about the model itself) can produce a 6x performance gap on the same benchmark. 6x! Same model. The only thing that changed was the code wrapping it. Their system, which uses an AI agent to automatically search for better harnesses, beat the best hand-engineered solutions by 7.7 points on text classification while using 4x fewer tokens. It hit #1 on an actively contested coding benchmark. And the harnesses it discovered for math problems transferred across five completely different models that were never seen during the search process.
The model race, while important, is not the whole game.  For the last few years, the industry has been laser focused on who has the best model. Trillions of dollars of value creation tied to “my model is smarter than your model.” And yes, model quality matters. But this research suggests that the orchestration layer around the model, how you manage context, what you retrieve, when you retrieve it, what you store, how you handle errors, is where a massive amount of real-world performance also lives.
For founders, this is pretty freeing. You don’t need to train your own foundation model. [
Side note - we ARE seeing a lot of leading application companies train their own models (either post trained or pre trained) which is contrary to what I just mentioned. I think that trend continues which is something I’ll write about next week]
You don’t even necessarily need to pick the single “best” model. What you need is to build the best harness for your domain. If a 6x performance gap comes from harness quality on a generic benchmark, imagine what a deeply tuned, domain-specific harness could do in your vertical. There’s new value to the wrapper (harness)! To my earlier “side note” - I think we’ll see some of the most successful application companies start off by building a killer harness, and then overtime parlay that into amazing data collection, which is then parlayed into a post trained model, and ultimately a pre trained model of their own. BUT - i think the key first step for many will be a killer harness.
One of the findings from the paper that I think deserves more attention is about compression. The researchers tested what happens when you summarize the feedback given to the harness optimizer versus giving it the raw, uncompressed execution traces. Summaries made things
worse
. The full execution traces (the raw prompts, tool calls, model outputs, state updates from every prior run) outperformed the compressed version by 15 points at median. Now, this probably doesn't shock anyone who's been building agents... we all know intuitively that you lose something when you over-abstract (ie compress). But having it quantified at a 15 point delta is useful. It puts a number on the cost of being lazy with context. And it runs counter to a lot of the default patterns people are using today, where the first instinct is to summarize everything to save tokens and reduce costs. There's a real tradeoff there, and most teams are probably leaving performance on the table.
There’s also something kind of wild happening here from a “meta” standpoint. The system Stanford built uses Claude Code as the agent that writes better harnesses. So you have AI... writing the orchestration code... for other AI systems. And it’s doing it better than humans. We hear a lot about recursive self-improving models lately, is this a good implementation of that?? It’s happening right now, in a practical engineering context, producing measurable results on real benchmarks. Agents improving agents. We’re going to see a lot more of this.
So if the harness matters this much, who owns it? This week Anthropic launched Claude Managed Agents, which is Anthropic saying “we’ll own the harness for you.” They’re productizing the entire orchestration layer: sandboxed execution, context management, error recovery, permissions, long-running sessions. According to their launch post, companies like Notion, Rakuten, Asana, and Sentry are already building on it. And at $0.08 per agent runtime hour plus model usage, they’re making it very easy to get started.
[another side note - check out the pricing. We’re getting closer and closer to compute cycle runtime pricing! exact text from their blog: “Managed Agents is priced on consumption. Standard Claude Platform token rates apply, plus $0.08 per session-hour for active runtime.”]
Anthropic is turning into more and more of a platform. Provide the model AND the infrastructure around it. Make it so easy to build on your platform that switching costs compound over time. It’s SO smart. However, how will developers feel? Using Anthropic’s harness will certianly “lock you in” to using their model more and more. Which is what you’d expect! But as a developer, do you want the model itself to be fungible? Swappable for the latest and greatest?
But here’s the tension, and this is where it gets interesting for founders. The entire Stanford paper is about how harness optimization is
domain-specific
. The generic harness is good. The tuned one is 6x better. So if you’re building a deeply vertical AI product, say an agent that handles insurance claims or manages clinical trials or runs a supply chain, a managed, general-purpose harness from Anthropic is going to be fine out of the box. But fine isn’t the same as great. And in competitive markets, the gap between fine and great is the whole ballgame.
This maps directly to the build vs. buy question I wrote about a while back. For foundational infrastructure (sandboxing, auth, session management), buy it. Use Managed Agents or something like it. But for the actual orchestration intelligence, what context to surface, when to retrieve it, how to handle domain-specific edge cases, that’s where you build. That’s where your differentiation lives. The founders who understand this distinction are going to build much better products than the ones who treat the harness as an afterthought.
Maybe wrappers weren’t such a joke after all!
Top 10 EV / NTM Revenue Multiples
Top 10 Weekly Share Price Movement
Update on Multiples
SaaS businesses are generally valued on a multiple of their revenue - in most cases the projected revenue for the next 12 months.  Revenue multiples are a shorthand valuation framework. Given most software companies are not profitable, or not generating meaningful FCF, it’s the only metric to compare the entire industry against. Even a DCF is riddled with long term assumptions. The promise of SaaS is that growth in the early years leads to profits in the mature years. Multiples shown below are calculated by taking the Enterprise Value (market cap + debt - cash) / NTM revenue.
Overall Stats:
Overall Median: 3.0x
Top 5 Median: 16.2x
10Y: 4.3%
Bucketed by Growth. In the buckets below I consider high growth >22% projected NTM growth, mid growth 15%-22% and low growth <15%. I had to adjusted the cut off for “high growth.” If 22% feels a bit arbitrary, it’s because it is…I just picked a cutoff where there were ~10 companies that fit into the high growth bucket so the sample size was more statistically significant
High Growth Median: 9.9x
Mid Growth Median: 4.8x
Low Growth Median: 2.3x
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
Median Gross Margin: 76%
Median Operating Margin 0%
Median FCF Margin: 21%
Median Net Retention: 109%
Median CAC Payback: 33 months
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
Subscribed
Share Clouded Judgement
Leave a comment
100
2
6
Share