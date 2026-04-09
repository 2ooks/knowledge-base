# Intel Earnings, The Agentic Opportunity, Intel's Mistaken Pessimism
**Source:** https://stratechery.com/2026/intel-earnings-the-agentic-opportunity-intels-mistaken-pessimism/
**Date:** January 27, 2026
**Author:** Stratechery
**Score:** 5/5 | **Concepts:** harness-engineering, ai-agent-ecosystem
**Scoring reason:** Directly addresses multi-agent scaling challenges, coordination overhead research, and practical orchestration patterns from teams running hundreds of production agents.

Listen to this post:
Your browser does not support the audio element.
Good morning,
On last week’s
episode of Sharp Tech
, Andrew and I discussed why TSMC is being overly cautious, Wall Street’s Netflix anxiety, and theorized on what is the best tech analogy for Indiana football and coach Curt Cignetti.
On to the Update:
Intel Earnings
From
Bloomberg
:
Intel Corp. shares plunged 17% after Chief Executive Officer Lip-Bu Tan gave a lackluster forecast and warned that the chipmaker was struggling with manufacturing problems. First-quarter projections for revenue and earnings both fell well short of Wall Street estimates. And a conference call with analysts, where Tan said it would take “time and resolve” to turn around the company, sent the shares down further. Production snags have hampered the comeback bid, a disappointment for investors who anticipated more of a boost from new products. “We are on the multiyear journey,” the CEO said.
Intel, the largest maker of personal computer processors, is suffering from low manufacturing yields — the percentage of usable chips coming out of its factories. That’s made it harder to fill orders. The once-dominant semiconductor company has spent years trying to restore its technological edge and recover from market share losses, and this is one more setback. Demand is “quite strong,” and the company is working hard to fix its manufacturing problems, Tan said in an interview. But Intel used up much of its inventory in the fourth quarter, he said.
I wrote
yesterday’s Article
, which was in many respects a rewrite of
last week’s Update on TSMC earnings
, to publicly urge chip buyers to start thinking seriously about 2029: I don’t think we’re going to have enough chips, and the best way to get more chips will be to be the customer Intel (and Samsung) needs to move to the leading edge and provide competition for TSMC, spurring them to increase investment. Intel’s earnings, however, were a painful reminder of why Intel’s biggest problem isn’t customers, but rather itself.
The Agentic Opportunity
For the first few years of the AI boom the primary use case was training (and training is still the primary use case for leading edge AI chips in particular). AI training fleets do use CPUs: they are what coordinate and feed GPUs. Nvidia’s Grace Blackwell architecture, for example, has one CPU for every two GPUs; it’s previous Grace Hopper architecture shipped in a one to one configuration. These Grace CPUs were ARM-based, but they could, in theory, be x86 based (which
Nvidia and Intel are working on
); the more important point is that GPUs still need CPUs.
Still, training is very focused on GPUs and keeping them full of data; memory is more likely to be the bottleneck than the CPU. Inference, on the other hand, is more CPU dependent: you have to schedule a job, get the relevant data for the job, and only then feed it to the GPU, which ideally is never sitting idle (it’s expensive!). It follows, then, that more inference relative to training means more demand for CPUs.
Still, the real bottleneck for basic inference is whoever is asking the question, and humans — even the fastest ones — are slow. Agents, on the other hand, are fast, and thorough. If you have an agentic workflow, which invokes tools, multiple data lookups, etc., you have a workflow that looks a lot like some inference workflows. The difference, however, is that the AI is dramatically faster than the human, which means all of those tool invocations, data lookups, etc. happen far more quickly and frequently than they ever would with a human. Critically, all of those agentic workflows — above and beyond basic inference — are better done by a CPU. In other words, to truly make AI autonomous, you don’t just need GPUs, but also CPUs.
This reality — first the shift to inference, and then the build-out of agentic capabilities — has led to soaring demand for traditional server CPUs over the last six months or so. Moreover, this demand has been exacerbated by the fact that a lot of data center CPUs came from the huge buildout that happened to support remote work during COVID: those five year-old CPUs just aren’t fast enough, which means that agentic workflows require new CPUs on both sides — the agent side, and the data delivery side.
This is the driver of the huge demand that Intel has seen this quarter and last quarter, and augurs well for the company’s prospects. After all, not only does Intel make x86 server chips, but they also control their own fabs, which means they get to internalize all of the upside of these greenfield sales. The problem, however, is that they can’t actually make all of the sales.
Intel’s Mistaken Pessimism
The reason Intel is failing to capture this opportunity is not, contra Bloomberg, because of disappointing yields on their latest process node, or their lack of an external customer. Instead, the answer is a familiar one: Intel shot themselves in the foot. From the
Wall Street Journal
:
When President Trump promised Intel nearly $9 billion and gave it his vote of confidence as an America-first tech company, it looked like the start of a new era. Investors assumed new orders would flow to the troubled chip maker and bid up the stock 120% in just five months.
And customer demand for Intel’s products did explode — but Intel wasn’t ready for it. After months of cutting capacity on its older production lines, the company was unprepared for a surge of orders for processors to put in AI data centers. Intel’s stock has crashed 17%, wiping out more than $46 billion in market value, since executives revealed the flub on the company’s fourth-quarter earnings call Thursday.
Specifically:
Over the past year, Intel has retired expensive tools used to make its older generations of data center CPUs, including those from its Emerald Rapids and Granite Rapids series. But over the course of the second half of 2025, companies such as OpenAI, Amazon Web Services and Google began to realize that deploying generative AI models required more and better CPUs, which act as the central computing brain of most servers, than they had initially thought. Suddenly, Intel was fielding requests to buy thousands of older CPUs. But because it had taken so much manufacturing capacity offline, the company was unable to meet that demand.
Emerald Rapids was built on Intel 7 (10nm), and Granite Rapids on Intel 3 (7nm), and Intel doesn’t want to rebuild the capacity they tore down. The company did reallocate as much remaining capacity as it could to server parts, but the company’s monolithic designs (as opposed to AMD’s more flexible chiplet approach) means that takes a long time to bear fruit. The end result is that Intel didn’t make as much money as they could have last quarter, and they’re going to make far less than they might have this coming quarter.
This is where the yield story comes in: Intel is, in the long run, hoping to make up the difference by getting 18A up to speed (18A parts launched last quarter, but for client); that, however, rightly makes prospective foundry customers nervous. One of the most important promises a foundry can make is to have capacity: if Intel doesn’t even have enough capacity for its own market opportunity, can it be trusted to have foundry capacity for external customers?
Of course this is a moot point for now; Intel still doesn’t have any meaningful external customers (thus my Article yesterday), and the target for external customers is 14A. Even then, however, Intel is not yet spending the money to build that capacity; CFO David Zinsner said on
the earnings call
:
On 14A, Lip-Bu has been very direct with us on all of this. He does not want to spend on capacity on 14A, only spend on the kind of TD spend or R&D spend associated with 14A even in the fab until we have customers secured. We’ve talked about, the likelihood is, our customers on 14A their window to secure or for us to secure them will be in the back half of this year and in the first half of next year. And so once visibility improves there, we’ll start to unlock the spend on 14A.
It’s fair to argue that
previous CEO Pat Gelsinger was too optimistic
; it’s ironic, however, that Intel’s problem today is that new CEO Lip-Bu Tan ended up being too pessimistic when he decided to start tearing down those established nodes. And, when it comes to meeting the industry’s 2029 needs, I’m not sure this cautious approach is the right one. Intel doesn’t just need customers; they could, in the end, use a little bit of that Gelsinger optimism. After all, risk isn’t just about downside: it can also be about missing out on the upside, which is exactly what happened to Intel.
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