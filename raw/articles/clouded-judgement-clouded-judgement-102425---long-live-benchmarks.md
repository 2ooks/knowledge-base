# Clouded Judgement 10.24.25 - Long Live Benchmarks
**Source:** https://cloudedjudgement.substack.com/p/clouded-judgement-102425-long-live
**Date:** October 24, 2025
**Author:** Clouded Judgement
**Score:** 5/5 | **Concepts:** gpu-and-compute-economics, semiconductor-supply-chain-bottlenecks, inference-architecture-and-scaling
**Scoring reason:** Deep original analysis of fab CapEx overhang, NVIDIA/TSMC economics, 1GW/week infrastructure scaling, and US vs China compute competition directly addressing GPU economics and semiconductor supply chain dynamics.

Clouded Judgement 10.24.25 - Long Live Benchmarks
Jamin Ball
Oct 24, 2025
27
1
2
Share
Every week I’ll provide updates on the latest trends in cloud software companies. Follow along to stay up to date!
Subscribed
The End of Benchmarks. Long Live Benchmarks.
For years, every model release followed the same pattern: a flurry of charts showing performance gains across MMLU, HumanEval, GSM8K, and whatever other benchmark happened to matter that quarter. It was a scoreboard for intelligence, a nd every model came with its proof point. A few points higher here, a few tenths lower there. But something changed. Those charts stopped being interesting (at least to me…). Every model sits within a rounding error of each other now, and people seem to have quietly stopped caring. Benchmarks have become saturated.
It reminds me a bit of the “index wars” during the early days of search. Back then, Yahoo, AltaVista, and Lycos all bragged about the number of web pages they had indexed, and the bigger the number, the smarter the engine. Then Google came along, and all of that stopped mattering. The index count wasn’t the point anymore, the experience was. Once Google’s quality and brand broke out, people just
knew
it was better, no spreadsheet or stat needed.
That same shift is happening now in AI. We’ve moved from measuring models to simply knowing which ones to use. No one is choosing between GPT-5 and Claude 4.5 because of a bar chart. They’re choosing based on trust, familiarity, and the kind of intangible “it just works” quality that data can’t really capture. Said another way, the benchmark era is “ending” not because models stopped improving, but because users stopped needing proof.
But ironically, as traditional benchmarks lose meaning at the model level, they’re becoming more important somewhere else - in the data itself. The first generation of labeled data was simple: question–answer pairs, instruction–response datasets, labeled images. The new generation looks different. When labs talk about needing “labeled data” today, what they really mean is they need better benchmarks and rubrics for domain specific data. Sets of prompts, rubrics, and examples that define what “good” looks like in a specific domain.
If you’re fine-tuning a model for medicine, finance, or law, the hard part isn’t sourcing data anymore,  it’s building the right test. The right way to evaluate reasoning, accuracy, or tone. The right way to know if the model is actually
right
. The most valuable “labelers” now aren’t crowdworkers; they’re domain experts designing benchmarks. And those benchmarks become the data!
Once you have a benchmark, you can turn it into a reward function. That’s where reinforcement learning comes in. The rubrics themselves, the scoring logic, the expert-defined criteria, become the feedback loop. The model produces an answer, gets graded against the rubric, and adjusts. In other words, the benchmark is evolving from becoming the measuring stick to becoming the teacher.
This is the quiet revolution happening in post-training. The next wave of differentiation won’t only come from who can train the biggest model; it’ll come from who can design the most meaningful reward functions. The best models in the future will go beyond just being good at reasoning in general, they’ll be good at reasoning
f
or a purpose, trained against custom evaluators that mirror real-world expertise. A model tuned for legal reasoning will learn from a rubric that values precision and citation. A model tuned for medical diagnosis will learn from one that prioritizes caution and accuracy. The benchmark becomes the compass.
So maybe benchmarks aren’t dead after all. They’ve just evolved. The old ones told us who was winning. The new ones tell the models how to learn.
Top 10 EV / NTM Revenue Multiples
Top 10 Weekly Share Price Movement
Update on Multiples
SaaS businesses are generally valued on a multiple of their revenue - in most cases the projected revenue for the next 12 months.  Revenue multiples are a shorthand valuation framework. Given most software companies are not profitable, or not generating meaningful FCF, it’s the only metric to compare the entire industry against. Even a DCF is riddled with long term assumptions. The promise of SaaS is that growth in the early years leads to profits in the mature years. Multiples shown below are calculated by taking the Enterprise Value (market cap + debt - cash) / NTM revenue.
Overall Stats:
Overall Median: 5.2x
Top 5 Median: 24.1x
10Y: 4.0%
Bucketed by Growth. In the buckets below I consider high growth >25% projected NTM growth, mid growth 15%-25% and low growth <15%
High Growth Median: 26.8x
Mid Growth Median: 7.7x
Low Growth Median: 4.0x
EV / NTM Rev / NTM Growth
The below chart shows the EV / NTM revenue multiple divided by NTM consensus growth expectations. So a company trading at 20x NTM revenue that is projected to grow 100% would be trading at 0.2x. The goal of this graph is to show how relatively cheap / expensive each stock is relative to its growth expectations.
EV / NTM FCF
The line chart shows the median of all companies with a FCF multiple >0x and <100x. I created this subset to show companies where FCF is a relevant valuation metric.
Companies with negative NTM FCF are not listed on the chart
Scatter Plot of EV / NTM Rev Multiple vs NTM Rev Growth
How correlated is growth to valuation multiple?
Operating Metrics
Median NTM growth rate: 12%
Median LTM growth rate: 14%
Median Gross Margin: 76%
Median Operating Margin (2%)
Median FCF Margin: 18%
Median Net Retention: 108%
Median CAC Payback: 32 months
Median S&M % Revenue: 37%
Median R&D % Revenue: 24%
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
27
1
2
Share