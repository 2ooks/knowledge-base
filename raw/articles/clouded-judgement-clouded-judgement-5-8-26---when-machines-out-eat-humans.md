# Clouded Judgement 5.8.26 - When Machines Out-Eat Humans
**Source:** https://cloudedjudgement.substack.com/p/clouded-judgement-5826-when-machines
**Date:** 2026-05-08
**Author:** Jamin Ball
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Clouded Judgement 5.8.26 - When Machines Out-Eat Humans
Jamin Ball
May 08, 2026
65
3
2
Share
Every week I’ll provide updates on the latest trends in cloud software companies. Follow along to stay up to date!
Subscribed
When Machines Out-Eat Humans
Fun post this week. I want to write about my own (newly formed) definition of AGI. I think we'll hit AGI (or we can claim AGI) when as a society we decide the marginal unit of energy is better spent on a GPU (or whatever compute primitive exists at the time) than on a human. Said another way - when the energy consumed by compute becomes greater than the energy consumed by humans, we're making the implicit decision that we get higher utility out of sending energy to machines. All definitions of AGI are super wishy washy anyway, so why not through another into the mix! The reason I like this one is it's quite quantitative. I’ve run the math, and the answer is 2033 (as you’ll hear me describe later, it’s all a bit “funny math dragging assumptions to the right”) but that’s what makes it fun!
First - let’s start with some definitions. In today’s world people use power vs energy interchangeably, but they’re different. Power is a rate (how fast you’re using energy at any given time), while energy is a quantity (how much you’ve used over time). An oversimplified analogy - power is the speed your car is going (mph), energy is the total distance (miles) you’ve traveled. A car going 60mph for 2 hours has covered 120 miles. A data center pulling 100MW for 2 hours has consumed 200 MWh (mega watt hours).
From a unit standpoint, watts are the unit of power. My lightbulbs might be 9W (It needs 9W to turn on). I keep it on for 1 hour, and I’ve used 9Wh. Kilo / Mega / Giga / Tera are just scaling prefixes (1,000x, 1,000,000x, etc). When we hear power figures quoted for data centers we often describe them in mega watts or giga watts. For example, the Colossus 1 data center that xAI rented to Anthropic this week is quoted as 300MW.  What does this mean? It means Colossus 1 needs transmission lines, substation(s), generation source(s) that can sustain 300 million watts of instantaneous draw. Think of this more as a physical infrastructure problem.
This data center  won’t consume 300MW x 8,760 hours / year. Maybe it runs at 70-80% utilization (but AI training clusters are “running” constantly at higher utilizations).
The confusion most people have with power vs energy, is the “hour” component is not “division” it’s “multiplication.” It’s not MW per hour, it’s MW-hours (and yes, I just wrote a “it’s not X it’s Y sentence…tried to edit it out so it doesn’t sound like AI slop, but the it’s not X it’s Y just made too much sense). Super quick math to make this concrete - let’s say my house consumes 1KW for 10 minutes, then 1.3KW for 50 minutes. To calculate the total energy used:
From 0 to 10 minutes: drawing 1 kW for 10/60 of an hour = 0.167 kWh
From 10 to 60 minutes: drawing 1.3 kW for 50/60 of an hour = 1.083 kWh
Total energy over the first hour ≈
1.25 kWh
Let’s also use the 300MW Colossus site, running at 80% utilization(ie running 80% of the time)
300MW x 8,760 hours / year x 80% utilization = 2,102,400 MWh
This translates to 2,102 GWh, or
2.1TWh
So the energy consumption over a year is 2.1TWh
I walked through that lead in so that I could then bring it back to my new definition of AGI! When will total energy consumed by machines be greater than humans. To answer that, let’s first try to get a baseline on how much energy is consumed by humans to sustain human life! A very meta question…Obviously there’s no easy answer, but I used Claude to help frame it (ie guesstimate it). Focusing on just US.
Here was Claude’s answer: 27,600 TWh of total US energy consumption. This is how Claude broke it down:
Narrow definition:
Residential energy use: 5,600 TWh
Food systems (ag + processing + transport+ retail): 2,900 TWh
Healthcare delivery: 590 TWh
Water + sewage treatment: 290 TWh
Total = 9,400 TWh
Moderate Definition. Everything in the narrow definition plus:
Personal transportation: 9,400 TWh
Commercial buildings: 4,100 TWh
consumer goods manufacturing: 2,000 TWh
Total = 20,500 TWh
Most Aggressive Definition
According to  the US Energy Information Administration (EIA) the US consumed 94.2 quads of energy in 2024. C
onverting that to TWh = 27,600 TWh
This is all the estimate for all of the energy the US economy consumes, in any form, measured at the source. Every barrel of oil burned in a car. Every cubic foot of natural gas burned in a furnace. Every ton of coal or pound of uranium fed into a power plant. Every BTU of solar or wind generated. etc. A figure you may see quoted if you ask Claude how much electricity is consumed annually in the US is closer to 4,000 TWh (but that is just looking at the electric grid > offtake figure). Most energy is never electricity to begin with (and that’s the gap). This is the difference between the 4,000 TWh figure and the ~28,000 TWh figure
The gap between the “moderate” definition and “aggressive” definition is largely military, freight, etc
So in summary, we can look at annual human energy consumption in the US as
9,400 TWh in most conservative case
20,500 TWh in the moderate case
27,600 TWh in the most aggressive case
What’s a good assumption for total annual data center energy consumption? I asked Claude, and the answer was ~300TWh. Here’s how the math breaks down
Roughly 40GW of total data center capacity (this felt slightly high, but the Claude estimate was based on all hyperscalers, all labs and neolabs, and all neoclouds in the US)
If you assume 80% utilization, then:
This equates to 280TWh of data center energy consumption
So today, the data center energy consumption is 280TWh. Earlier, I said the “moderate” estimate for annual energy consumption to support humans was 20,500TWh. This means today, data centers consume 1% of the energy humans do. Long way to go to AGI :)
So when will we hit the 50% threshold?? Let’s do some more “funny math” :). Let’s say annual population growth is 0.5%, end users consume 1-2% more energy per year, but we get 1-1.5% energy efficiency gains / year. This leads us to ~0.5-1% annual growth in energy consumption, or 21,440 TWh in 2030.
Now, let’s assume OpenAI is going from
2GW in 2025 to 30GW in 2030
. And let’s assume the rest of the industry grows at the same rate (maybe aggressive, but just for fun let’s make that assumption). This would get us to 12,600 TWh in 2030 used for data centers. The lines are getting closer! 12,600 TWh for data centers vs 21,440 TWh for human consumption = almost 40%!
Ok final assumptions :) Let’s assume data center growth continues at the same rate in 2030 and beyond as it’s projected to from 2025 to 2030. And let’s assume human consumption continues at ~0.75% /  year beyond 2030. When do the lines cross?? The answer is 2033!! This would continue an exponential, which is very hard to do…But if we went from 40GW today to 600GW in 2030, at the same compounding annual growth rate we’d be at ~3TW in 2033. Doing all the funny-math converting that to TWh gets us to ~22,000TWh by data centers in 2033. Extrapolating the human consumption at 0.75% / year gets us to ~22,000 TWh in 2033. The lines have crossed!
Of course, this is all assumption upon assumption upon assumption, and I’m no energy expert at all, but thought it’d be fun to run through this exercise.
AGI by 2033!
Quarterly Reports Summary
Top 10 EV / NTM Revenue Multiples
Top 10 Weekly Share Price Movement
Update on Multiples
SaaS businesses are generally valued on a multiple of their revenue - in most cases the projected revenue for the next 12 months.  Revenue multiples are a shorthand valuation framework. Given most software companies are not profitable, or not generating meaningful FCF, it’s the only metric to compare the entire industry against. Even a DCF is riddled with long term assumptions. The promise of SaaS is that growth in the early years leads to profits in the mature years. Multiples shown below are calculated by taking the Enterprise Value (market cap + debt - cash) / NTM revenue.
Overall Stats:
Overall Median: 3.2x
Top 5 Median: 21.1x
10Y: 4.4%
Bucketed by Growth. In the buckets below I consider high growth >22% projected NTM growth, mid growth 15%-22% and low growth <15%. I had to adjusted the cut off for “high growth.” If 22% feels a bit arbitrary, it’s because it is…I just picked a cutoff where there were ~10 companies that fit into the high growth bucket so the sample size was more statistically significant
High Growth Median: 12.6x
Mid Growth Median: 5.2x
Low Growth Median: 2.5x
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
Median Operating Margin 1%
Median FCF Margin: 20%
Median Net Retention: 110%
Median CAC Payback: 36 months
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
65
3
2
Share