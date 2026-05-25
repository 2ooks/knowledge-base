# Clouded Judgement 4.3.26 - Zero Knowledge, Maximum Trust
**Source:** https://cloudedjudgement.substack.com/p/clouded-judgement-4326-zero-knowledge
**Date:** 2026-04-03
**Author:** Jamin Ball
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Clouded Judgement 4.3.26 - Zero Knowledge, Maximum Trust
Jamin Ball
Apr 03, 2026
79
2
3
Share
Every week I’ll provide updates on the latest trends in cloud software companies. Follow along to stay up to date!
Subscribed
Zero Knowledge, Maximum Trust
What a week for security breaches... Claude Code source code leaked via a misconfigured npm package, exposing 500,000 lines of code and an entire unreleased feature roadmap. Mercor got hit through a compromised LiteLLM dependency, with Lapsus$ claiming 4TB of stolen data including source code, databases, and contractor video interviews. And the axios npm package, one of the most widely used libraries in JavaScript with 100 million weekly downloads, was hijacked by
North Korean
state actors who injected a cross-platform remote access trojan. All within about 48 hours.
The common thread? Trust in the software supply chain (and soon to be agent supply chain…) is incredibly fragile. A single misconfigured file, a single compromised maintainer account, a single poisoned open-source dependency...and the whole thing unravels. And these are just the breaches we know about, affecting tools and infrastructure that developers interact with directly.
Now imagine a world where AI agents are running autonomously. Booking flights. Executing trades. Signing contracts. Moving money. Managing supply chains. We’re not far from that world...we’re basically in it. And yet the trust infrastructure underpinning all of it is...what exactly? We’re basically just taking AI’s word for it, and trusting that the background agent working on it’s own is not only doing it’s job accurately, but also not acting maliciously. That’s fine when you’re asking ChatGPT to summarize an article. It’s less fine when an agent is wiring $50k on your behalf. Or when a compromised model is silently making decisions with tampered weights.
If a single npm package can be weaponized to deliver malware to millions of machines in under 3 hours, what happens when the attack surface is AI models and autonomous agents operating across every critical system in an enterprise?
This is where zero knowledge proofs come in. And before your eyes glaze over (”isn’t that a crypto thing?”), bear with me, because I think this could be one of the most important infrastructure layers of the agentic era. I wrote this tweet earlier this year, and wanted to flesh out the idea a bit.
So what are zero knowledge proofs? At a high level, they’re a way for one party to prove to another party that something is true...without revealing the underlying information. The classic analogy: imagine you’re colorblind and I want to prove to you that two balls are different colors. I can design a game where you hide the balls behind your back, sometimes swap them, sometimes don’t, and ask me whether you swapped. If I can consistently tell you correctly, you become convinced the balls really are different colors, even though you never “saw” the colors yourself. That’s the essence of a zero knowledge proof. Proof of truth without revelation of the details.
In crypto, ZK proofs have been a massive deal. They’re used for things like privacy preserving transactions (proving you have enough funds without revealing your balance) and scaling blockchains through ZK rollups. But here’s the thing...ZK proofs have basically stayed inside the crypto ecosystem. They haven’t broken out into the broader tech world. Why?
Two reasons: speed and cost. Generating a zero knowledge proof is computationally
expensive
. Like, really expensive. Historically we’re talking orders of magnitude more compute than just running the original computation. If you want to prove that a simple ML model ran correctly, the proof generation might take 100x to 1,000,000x longer than just running the model itself. That’s...not great for real time applications.
This worked in crypto for a couple reasons. First, blockchain transactions don’t need to be instant. Users are accustomed to waiting. A few minutes (or even longer) for settlement is totally fine. Second, you can batch transactions together, amortizing the cost of proof generation across many transactions at once. ZK rollups do exactly this...bundle hundreds or thousands of transactions, generate one proof, verify it on chain. The per-transaction cost becomes manageable. And third, the computations being proved in crypto are relatively simple compared to something like neural network inference. Verifying a token transfer is a different beast than verifying a billion-parameter model.
But for AI? Where you need inference in milliseconds? Where agents are making decisions in real time? Where the computations are massive and complex? The overhead of traditional ZK proofs was a total non-starter.
Here’s what’s changed. And this is what has me really excited...
I’ve been seeing research breakthroughs in the ZK space that are dramatically breaking down these performance barriers. The overhead is shrinking fast. We’re talking improvements from 1,000,000x overhead to 100,000x to 10,000x...and the curve keeps bending. New frameworks can now prove the inference of image classification models in just a couple seconds.  New proof systems using recursive SNARKs (called “folding schemes”) are compressing proof sizes from gigabytes down to under 100 kilobytes. GPU acceleration, specialized ZK hardware (yes, people are building dedicated ZK chips), and better algorithms are all converging at once.
We’re not at “real time proof generation for every AI inference” yet. But the trajectory is undeniable. And we’re close enough now that it works for a growing number of practical use cases.
So why does this matter? What does ZKML (zero knowledge machine learning) actually unlock?
Model integrity.
How do you know the model you’re using hasn’t been tampered with? When you call an API from an AI provider, you’re trusting that they’re running the model they say they’re running, with the weights they say they’re using. ZK proofs can verify this cryptographically. The provider generates a proof that inference was performed using a specific, committed set of weights. No trust required...just math. This is enormous for regulated industries. A bank using AI for credit decisions could prove to regulators that the model used only approved parameters without revealing the proprietary model itself. A hospital could verify that an AI diagnosis came from an FDA-approved model without exposing patient data.
Input integrity.
It’s not just about the model, it’s also about the inputs. Were the inputs to a model tampered with before inference? Did someone inject malicious data into the pipeline? ZK proofs can verify the full chain...that a specific input went into a specific model and produced a specific output. The entire computation is provable end to end.
Agent verification.
This is the one I keep coming back to. In a world where agents are executing multi-step workflows autonomously (querying databases, calling APIs, moving money, signing contracts), we need a way to verify that the agent actually did what it said it did. That it followed the correct logic. That it wasn’t manipulated mid-execution through prompt injection or some other attack vector. ZK proofs can provide a cryptographic receipt for every action an agent takes. Every decision...provable, auditable, verifiable. Without having to re-run the entire computation or expose proprietary model details.
Privacy-preserving AI.
Today if you want to use a cloud AI service, you typically send your data to the provider. They see your inputs. With ZKML, inference can be proven correct without revealing the input data OR the model weights to either party. The AI provider doesn’t see your sensitive data. You don’t see their proprietary model. But you both can verify the output is legitimate. This unlocks AI adoption in domains where data sensitivity has been a blocker...healthcare, finance, legal, defense.
Agent-to-agent trust.
This might be the most forward looking use case, but I think it could define the next era. As we move toward a world where agents interact with other agents (your purchasing agent negotiating with a supplier’s sales agent, your portfolio agent coordinating with a market data agent), how do those agents trust each other? Today, agent-to-agent interactions rely on the same old assumption...trust the platform, trust the API, hope for the best. ZK proofs could give each agent the ability to cryptographically prove its identity, its logic, and its outputs to every other agent it interacts with. That’s a fundamentally new trust primitive.
The timing of all this is not a coincidence. NIST launched an AI Agent Standards Initiative in February specifically focused on security and interoperability for autonomous agents. Microsoft just unveiled their Zero Trust for AI framework.  Everyone is converging on the same realization...we need better trust infrastructure for agents. Fast.
The way I think about it: every major platform shift has required a corresponding trust layer. The internet needed SSL/TLS. Mobile needed app store review and sandboxing. Cloud needed IAM and zero trust networking. The agentic era will need its own. And I think ZKML is a strong candidate for what that looks like.
Trust has always been the bottleneck for autonomy. The more we trust agents, the more autonomy we give them. The more autonomy they have, the more value they create. Zero knowledge proofs could be what unlocks that loop.
Top 10 EV / NTM Revenue Multiples
Top 10 Weekly Share Price Movement
Update on Multiples
SaaS businesses are generally valued on a multiple of their revenue - in most cases the projected revenue for the next 12 months.  Revenue multiples are a shorthand valuation framework. Given most software companies are not profitable, or not generating meaningful FCF, it’s the only metric to compare the entire industry against. Even a DCF is riddled with long term assumptions. The promise of SaaS is that growth in the early years leads to profits in the mature years. Multiples shown below are calculated by taking the Enterprise Value (market cap + debt - cash) / NTM revenue.
Overall Stats:
Overall Median: 3.2x
Top 5 Median: 16.4x
10Y: 4.3%
Bucketed by Growth. In the buckets below I consider high growth >22% projected NTM growth, mid growth 15%-22% and low growth <15%. I had to adjusted the cut off for “high growth.” If 22% feels a bit arbitrary, it’s because it is…I just picked a cutoff where there were ~10 companies that fit into the high growth bucket so the sample size was more statistically significant
High Growth Median: 10.0x
Mid Growth Median: 5.5x
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
Median Operating Margin (1%)
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
79
2
3
Share