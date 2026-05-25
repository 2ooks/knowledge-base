# Clouded Judgement 4.17.26 - Rising Tide, Hidden Risk
**Source:** https://cloudedjudgement.substack.com/p/clouded-judgement-41726-rising-tide
**Date:** 2026-04-17
**Author:** Jamin Ball
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Clouded Judgement 4.17.26 - Rising Tide, Hidden Risk
Jamin Ball
Apr 17, 2026
105
2
Share
Every week I’ll provide updates on the latest trends in cloud software companies. Follow along to stay up to date!
Subscribed
I have two topics I want to write about today:
Are we in an “over earning” period in AI
Follow up to last weeks post on the
importance of the harness
Rising Tide, Hidden Risk
I’ve been thinking a lot recently about comments Satya made a few years back. If we rewind the clock to mid / late 2022, the biggest thing on software companies & investors’ mind was “when will the optimizations end.” The ZIRP period of 2020-2021 created a buying frenzy - no one was thinking about costs (when it came to cloud / cloud software spend), they were only thinking about growth and capturing more market share (oversimplification, but you get the main point I’m making). At the end of the day, the market was providing cheap and abundant capital (for public and private companies), and investors (for both public and private companies) were rewarding growth (ie placing the most emphasis on growth when determining valuation multiples). Once ZIRP ended and interest rates went up, capital got more expensive, investors started rewarding different behavior (efficient growth), and ultimately every CFO took a look at their P&L and realized they had a TON of unnecessary spend. Redundant spend, inefficient spend, or completely unnecessary spend was everywhere. After a couple years of “reckless spending” the tide turned, and every CFO was looking for “optimizations.” Way to reduce spend, consolidate spend, and in general reduce the wasteful spend. This was pain lasted quite some time! And this brings me to comments Satya made over and over again on earnings calls - cloud consumption trends tend to be quite cyclical. You have period of rapid expansionary spending, followed by periods of rapid optimizations - and this cycle repeats.
When I look at where we are in the AI spending cycle, we’re very clearly in a period of “rapid expansionary spending.” No one is really thinking about the ROI of the spend when budgeting. So many of the companies I work with say some version of “I don’t want to cap how much our employees use these tools, I want their creativity flowing, I want them trying out everything, and ultimately I want them becoming experts in these tools.” A common conversation went something like “our spend on AI tools (more often than not Claude) doubled from Jan to Feb, tripled from Feb to March, and is trending way up in April. And I don’t care if it 10x from here.” Then of course on top of this you have the “tokenmaxing” companies. Meta was in the news on this recently - the idea is “as an employee I need to show I’m using these AI tools a lot so I can show my boss I’m “AI Fluent" so I don’t get laid off. I want my token consumption to be super high, so I’m just going to have background agents running constantly, doing nothing, to give my boss the perception I’m using these tools a lot, even though they’re all doing empty tasks.” Clearly this kind of excess spend can’t last forever…
The common thread? No one is thinking about the costs. Just the potential.
I don’t know when the tide will turn, or what will cause it to turn. But at some point people WILL start looking at their AI spend and start thinking about “optimizations.” Should I be using smaller cheaper models vs larger ones? Should I be segmenting different use cases for different models? Should I run a particular background agent once per day vs once every hour? the list goes on.
In 2022, what caused the tide to turn was interest rates. Now? Interest rates won’t (I don’t think) be the reason the tide will turn. What most likely happens is the spend on AI tools balloons SO much, that companies have no choice but to think about the costs, and how to optimize. And when this happens, it could be painful for a number of AI companies experiencing hyper growth currently. There are just too many markets, that have too many competitors, that are all growing at ridiculous rates.
The thread I’m pulling at - a lot of companies in AI today are “over earning” just like many cloud companies were “over earning” in 2020 / 2021.
Just to call it out - I think the total token consumption will SKYROCKET over the next 10 years regardless of when this period of optimization happens. But today, everyone seems to be benefiting. When the tide shifts, the dispersion of who will truly benefit will shift, and a smaller subset of companies will benefit disproportionately.
Call out for founders - really introspecting your own customer / revenue / growth to understand “am I growing as part of the rising tide or am I differentiated” will be quite important…Many companies in the 2021 period got this wrong - they didn’t realize they were just catching the rising tide. They over hired, over fundraised, etc. And the unwind was painful.
Topic #2: Is the Harness Really the Moat?
In summary, last week I
wrote a post
that argues that the code and orchestration surrounding an AI model (the "harness," maybe formerly known as a "wrapper") matters a ton - maybe even more than the model itself? I’m back to write a quick follow up to this post.
I do think the harness matters a ton, and will continue to matter. BUT - it’s far from the only thing that matters. And we’re aready starting to see the evolution of some of the most successful application AI companies. (1) Start as a thin wrapper, (2) develop a complicated harness, (3) post train your own models, (4) lean into pre training your own models.
The vast vast majority of the market is still in phase (2). But we’re already seeing companies like Cursor (and other early AI winners) move into 3 and 4 (some form of developing their own model).
There are many reasons why AI companies may want to have their own model.
First - cost. Costs balloon when using someone else’s model. Your fixed costs will be higher developing your own, but variable costs may be lower. Second - capability. A purpose built model for your application and your domain could perform better than a general model. Third - control of your own destiny. No one wants to be beholden to someone else for the most critical layer of their infra…
And fourth - you may have no choice! There’s a very real world where the large labs (OpenAI / Anthropic) decide to keep their most powerful and current versions of their model for themselves, powering their own applications. And the models they release via API to customers may be “one version prior” of a model (ie one before the latest and greatest) or a distilled version of the current powerful model.
Why would they do this? Two main reasons I can think of. The labs are getting more and more into the application space. Why would they want their competitors (ie Cursor competing with Claude Code from Anthropic or Codex from OpenAI) to have access to the latest and greatest? Why not save the latest and greatest for their own product, and make their competitors use an older, less powerful version? I could certainly help the labs win more business.
Second (and this is all purely speculation), as these models get more and more powerful (ie Mythos speculation from Anthropic), the labs may view them more and more as a safety / security threat. Maybe they will want to be the only ones who “release” them to the world wrapped around a product? They could view themselves as the only ones truly capable of “protecting” users from the uncapped potential of the models. Said another way, they might trust themselves more to build applications around the powerful models, but not your average developer..
End of the day, this is all speculation. It may happen, it may not. But if you’re a breakout AI company, do you want to leave it to chance? Probably not. Developing your own model carries too many benefits, and could protect you in too many “downside cases” that I think we’ll see more and more companies move from the harness as the first moat, to developing their own model as the second moat.
The takeaway for founders I work with - are you building your own research / labs team? if not, maybe time to think about doing it…
Top 10 EV / NTM Revenue Multiples
Top 10 Weekly Share Price Movement
Update on Multiples
SaaS businesses are generally valued on a multiple of their revenue - in most cases the projected revenue for the next 12 months.  Revenue multiples are a shorthand valuation framework. Given most software companies are not profitable, or not generating meaningful FCF, it’s the only metric to compare the entire industry against. Even a DCF is riddled with long term assumptions. The promise of SaaS is that growth in the early years leads to profits in the mature years. Multiples shown below are calculated by taking the Enterprise Value (market cap + debt - cash) / NTM revenue.
Overall Stats:
Overall Median: 3.2x
Top 5 Median: 17.2x
10Y: 4.3%
Bucketed by Growth. In the buckets below I consider high growth >22% projected NTM growth, mid growth 15%-22% and low growth <15%. I had to adjusted the cut off for “high growth.” If 22% feels a bit arbitrary, it’s because it is…I just picked a cutoff where there were ~10 companies that fit into the high growth bucket so the sample size was more statistically significant
High Growth Median: 10.5x
Mid Growth Median: 5.0x
Low Growth Median: 2.4x
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
Median G&A % Revenue: 14%
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
105
2
Share