# TSMC Earnings, New N3 Fabs, The Nvidia Ramp
**Source:** https://stratechery.com/2026/tsmc-earnings-new-n3-fabs-the-nvidia-ramp/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L3RzbWMtZWFybmluZ3MtbmV3LW4zLWZhYnMtdGhlLW52aWRpYS1yYW1wLyJdfSwiZXhwIjoxNzgyMjMzODQ1LCJpYXQiOjE3Nzk2NDE4NDUsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIHBvZGNhc3QgcnNzIiwic3ViIjoiZTVkNDRhNjQtY2E1OC00NzFkLTlmYTMtOWM5MDgxM2E4ODUwIiwidXNlIjoiYWNjZXNzIn0.BpaATEg1xluCLXftdqU8_6zx-_TGV3ZR5-YP8uJCVMce-rVP22CPhzFe5pzwvdSejstMq1bsIMeAEwT84nTUwKUinaPcXSvLb4cWV7b-z27OeoVrgwuU9ldEyKOLpVcNHUbztAD9SIfkuZD513dc8aTH7pPlusLqyw9zmhbSJ3ucNlp_nC1XtwRA3pYMrmOGQQ3h5pXzgJ96uUDNHhEz9YzJ58hdctB_ZXwFf86RJVw-SVGd_3ZUIf3GF977UPzKkxifZBxqR4Sin9IXuW8Vs6oErjPz3Vkr6DXV_ddhd-nAEBJ7F7lmM4mpz-hgqoMZM4Rpem46AeGkaqohju5cmQ
**Date:** 2026-04-20
**Author:** Ben Thompson
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Listen to this post:
Your browser does not support the audio element.
Good morning,
On
last week’s episode of Sharp Tech
, Andrew and I discussed AI’s PR problem, and Amazon (and Apple’s) satellite ambitions.
In addition,
I suggested a couple of weeks ago
that Mythos was trained on Blackwell; it now appears it was trained on TPUs. That’s not a sure thing, but neither was the original item; I apologize for passing along rumor as fact.
On to the Update:
TSMC Earnings
From
Bloomberg
:
Taiwan Semiconductor Manufacturing Co. raised its revenue outlook for 2026, an upbeat forecast that underscores the resilience of AI chip demand despite concerns about the economic fallout from the Middle Eastern conflict.
The main chipmaker to Nvidia Corp. and Apple Inc. is expecting revenue growth of more than 30% this year, an upgrade from previous guidance for below that number. The company’s capital spending should trend toward the upper end of an existing forecast range of as much as $56 billion, executives said, conveying confidence in the year’s economic outlook.
Last quarter I found
TSMC’s earnings
to be alarming, leading me to write about
TSMC Risk
, specifically the fact that the world’s leading foundry wasn’t investing nearly enough to keep up with current AI demand, much less AI demand over the next 3~5 years (i.e. how long it takes to build a new foundry and ramp it to full production).
This quarter didn’t bring any big new updates on the Capex front, other than the company announcing that its 2026 Capex spend would fall towards the high end of the $52–$56 billion range it announced last quarter. That’s certainly trending in the right direction!
What was more encouraging, however, is that I thought there was a marked shift in the way that TSMC’s executives talked about AI, particularly this bit from
CEO C.C. Wei’s prepared remarks
:
AI-related demand continues to be extremely robust. The shift from generative AI and the query mode to agentic AI and the command and action mode is leading to another step up in the amount of tokens being consumed. This is driving the need for more and more computation, which supports the robust demand for leading edge silicon.
Our customers and customers’ customers, who are mainly the cloud service providers, continue to provide us with their very strong signal and positive outlook. Thus, our conviction in the multi-year AI megatrend remain high, and we believe the demand for semiconductors will continue to be very fundamental. Supported by our robust technology differentiation and broader customer base, we maintain strong confidence for our full-year 2026 revenue to now grow by above 30% in US Dollar terms.
I’ve read TSMC’s earnings calls for years, and the reference to “the shift from generative AI and the query mode to agentic AI and the command and action mode” is a level of specificity in terms of end user applications that I don’t ever remember hearing from a TSMC executive; what is far more typical is this answer to a question about CPUs being used for agentic tasks:
Charles, certainly, CPUs becomes more and more important in today’s AI data center. But actually, let me share with you, this is a good question, by the way. Let me share with you that we are not able to differentiate conventional server CPU vs AI server CPU. So today, we still not include the CPUs in our AI HPC’s calculation. Someday later, we might consider.
I include this answer because it’s much more in line with what I expect from TSMC executives in terms of discussing what their chips are used for, i.e. some variant of “I don’t know not my problem.” That’s why I thought the agent reference above was notable: I really got the sense that Wei and his team got convinced by someone — Jensen Huang is always a good guess — that (1) agents were a real thing and (2) that agents would drive a massive expansion of compute demand.
That’s my thesis
, of course, but it’s a much bigger deal for the industry if it is Wei’s thesis as well.
New N3 Fabs
The most interesting news from these earnings, meanwhile, came again from Wei’s prepared remarks:
Now let me talk about TSMC’s global N3 capacity expansion plan. Historically, we do not add additional capacity to a node once it reaches its targeted capacity. However, as a foundry, our first responsibility is to provide our customers with the most advanced technologies and necessary capacity to unleash their innovations.
Based on our assessment, to meet the strong demand in AI applications, we are stepping up our CapEx investment to increase our N3 capacity. Thus, we are now executing a global capacity plan to support the robust multiyear pipeline of demand for 3-nanometer technologies, which are used by smartphone, HPC/AI, including HBM base dies, automotive and IoT customers
In Taiwan, we are adding a new 3-nanometer fab to our GIGAFAB cluster in Tainan Science Park. Volume production is scheduled for the first half of 2027. In Arizona, our second fab will also utilize 3-nanometer technologies. Construction is already complete and volume production will begin in the second half of 2027. In Japan, we now plan to utilize 3-nanometer technology in our second fab and volume production is scheduled in 2028.
I wrote
a few years ago
about how TSMC was having to become more like Intel:
TSMC’s role in Nvidia’s growth, meanwhile, along with the revenue increases from its N3 node (which is mostly Apple, and will expand to other smartphones this year), is a function of the company dominating the leading edge. The leading edge costs a lot of money to ramp up — N3 is lowering margins for now, as every new node does its first few years — but those costs are made up for by the ability to charge much higher prices. To that end N3 is already up to 15% of TSMC revenue, followed by 35% at N5, and 17% at N7.
This reality is not new for TSMC, but it is different than how the company has operated historically. TSMC started out as a foundry selling trailing edge chips; the primary way of making money over the long run was to build a fab relatively cheaply using established equipment, and then run that fab for many years. Once all of the equipment was depreciated, every chip produced was almost pure profit, even if the revenue on a per-chip basis was fairly low.
It was Intel, on the other hand, that charged the highest prices for the fastest chips, and all of its business was on the leading edge, selling its own chips; that meant that the company would take down old fabs and repurpose as much equipment as it could for the next node, instead of running the fab forever like a foundry would (this is one of Intel’s challenges in becoming a foundry: they simply don’t have much depreciated trailing edge capacity throwing off cash).
What is interesting to note is that TSMC’s shift to a more Intel-like model in terms of its revenue drivers (leading edge) and profit drivers (high prices) is starting to impact how they manage their fabs.
That Update was about TSMC reworking 5nm fabs for 3nm; this announcement, meanwhile, is about straight up building new 3nm fabs, a process that first started ramping in 2022. This could not be more different than TSMC’s traditional model, which is to say that AI is transforming TSMC completely.
The Nvidia Ramp
The most important customer for each new TSMC process has long been Apple: Apple was willing to pay — and to suffer — to be the first customer on every new process, thus ensuring that they had the fastest chips, not just because of their architecture, but also because they were first to the newest process.
Apple’s shift to 3nm was challenging: the N3B process used for the A17 Pro and M3 chips was a dead end, but it was still worth it to Apple to be first. That, by definition, also includes working through the challenges of ramping a new process, including dealing with a much higher level of defects at the beginning. This was doable because the A17 Pro chips in particular, which were the first ones, are relatively small. That meant that every flaw in the process impacted a relatively fewer number of chips (because there were more chips per wafer).
The good news for TSMC was that after Apple ramped a new process, they were eager to move on to the next one, leaving behind capacity to serve everyone else. That’s when Qualcomm would come onto the process, and then AMD, and — in the pre-AI era — Nvidia (and AMD’s GPUs) would bring up the rear.
The challenge for GPUs is that they are very large, the better to fit in more parallelizable processing units. In fact, the size of Nvidia datacenter GPUs has been defined by the size of the reticle (the lithography lens) ever since Maxwell, which was built on TSMC’s 28nm process. The challenge with making chips this big is that whereas one flaw might ruin 1 of 8 or 9 A-series chips, that same flaw would ruin 1 of 1 Nvidia GPUs. That, by extension, is why Nvidia has always been later to a new process: it simply isn’t economical to be the launch customer, because the yields are too punishing.
That’s the context for these new fabs. Nvidia’s Blackwell chip is on N4P, a variant of TSMC’s 5nm process; it’s Rubin that will be the first chip on the 3nm process, and the reason it’s only coming to that process now is because Nvidia needs a matured process to make it economical. The big difference, however, is that whereas previously Nvidia could have simply taken over Apple’s capacity — along with all of TSMC’s other customers — now their capacity needs are so large that the initial 3nm capacity isn’t enough.
In other words, these new 3nm fabs — which will probably be built using an Intel-style copy-exact approach — are basically Rubin fabs. Because they are simply copies of proven lines they should be reliable, and they should be fast: TSMC said they will go into large scale production by next year.
That’s pretty impressive, and all of this is very new and very un-TSMC-like; Wei has been the person most worried about a bubble — for good reason! — and now he isn’t just saying AI is real, but meaningfully changing TSMC’s approach to capitalize.
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