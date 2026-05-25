# Intel Earnings, Intel's Differentiation?, Whither Terafab
**Source:** https://stratechery.com/2026/intel-earnings-intels-differentiation-whither-terafab/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2ludGVsLWVhcm5pbmdzLWludGVscy1kaWZmZXJlbnRpYXRpb24td2hpdGhlci10ZXJhZmFiLyJdfSwiZXhwIjoxNzgyMjc2NzcwLCJpYXQiOjE3Nzk2ODQ3NzAsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIHBvZGNhc3QgcnNzIiwic3ViIjoiZTVkNDRhNjQtY2E1OC00NzFkLTlmYTMtOWM5MDgxM2E4ODUwIiwidXNlIjoiYWNjZXNzIn0.a-b9bKHHygLN9RUf3th-4qUDAcrxrNjPUEz-X5eMLpGmv1f9eARhRbxD8Ht8Zzw7baxxI_LSYHitiH0CA2Vm8ySHVRQr_Bdf310oOgPOUj6MHBaWvJdGhWqNY_i2bwZsMq122Y9FbYZfEfe4vAmPxDdle7pnHe6RUxxpSsrolr3ka2SJHESkGFYgRcBBpgBuB_h34K2PbGk1aITkAJBu6Rw5o6SN8-6DIeGqKtVaHtWxvYn7tlyCDd7yPzvdky1m5Q18eviL0Upsl_grh56yh8DtkqZiCwSMBDZzntyKEnsxQbDj9IomF4GiAAczT9cQq9nRp2KhH71Zxvz3BiEhhA
**Date:** 2026-04-29
**Author:** Ben Thompson
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Listen to this post:
Your browser does not support the audio element.
Good morning,
The Ankler
, the entertainment media publication from Janice Min and Richard Rushfield, relaunched their website yesterday, and
it’s powered by Passport
! This is very exciting, and congratulations to Min and Rushfield.
Meanwhile, the NBA Playoffs are in full swing, and
The Greatest of All Talk
is out with a new episode about whose stock is up and whose is down as the first round come to an end.
On to the Update:
Intel Earnings
From
Bloomberg
:
Intel Corp. shares hit a record high after the chipmaker delivered a sales forecast that shattered Wall Street expectations, showing that it’s finally benefiting from a boom in AI spending. Revenue will be $13.8 billion to $14.8 billion in the June quarter, the company said Thursday in a statement. Analysts estimated $13 billion on average, according to data compiled by Bloomberg. The upbeat outlook suggests that Chief Executive Officer Lip-Bu Tan is making progress on a once-improbable turnaround. After lining up major investments in Intel last year — helping to strengthen the company’s balance sheet — he’s now delivering on a promise to improve operations.
There is no question that Tan has had a positive impact on Intel, and there are real points of evidence that I’ll get to in a moment. The number one factor driving Intel’s performance, however, is structural: AI. Just ask Tan! From
his prepared remarks
:
Artificial intelligence is now moving into the real world towards a more distributed inference and reinforcement learning workloads like agentic, physical AI and robots and edge AI. This shift is now beginning to show up in our results, as I want to spend some time on this today.
For the last few years, the story around high-performance computing was almost exclusively about GPU and other accelerators. In recent months, we have seen clear signs that the CPU is reinserting itself as the indispensable foundation of the AI era. CPU now serves as the orchestration layer and critical control plane for the entire AI stack. This is not just our wishful thinking, it is what we hear from our customers, and it is evident in the demand profile for our products.
Xeon server demand is seeing strong and sustained momentum. Customers are deploying server CPUs along accelerators in a ratio that is moving back towards CPU. The accelerator remains central to Frontier AI, and we will continue to participate, innovate and partner in that category…but the backbone of AI computing in production remains a CPU-anchored architecture. That is good news for the x86 ecosystem. It is great news for Intel. And it is a structural reason I’m confident that CPU franchise will continue to be a meaningful growth engine for the company in the years ahead, not just the quarters ahead.
Tan put approximate numbers on those ratios later in the call:
I think the feedback from the customer, CPU is very important when you move from training to inference. Inference side, I think in terms of orchestration, control plane and also managing all the different agent with data, CPU is much more efficient. So I think the ratio of CPU to GPU used to be 1 and 8, and now it’s 1:4 and I think towards parity or even better. So I think the demand is very strong.
This shift makes sense: training is extremely GPU-dependent, with the CPU mostly playing a role in terms of making sure GPUs have the data they need. Once you get to inference, however, the jobs are much shorter but much more numerous, which means you need much more orchestration, which is to say you need more CPUs. Agents, meanwhile, are what Intel thinks will tip the ratio back towards CPUs, since not only do you need even more orchestration capabilities, but you also need tool functionality as well.
This shift has implications beyond Intel: I touched on it in
yesterday’s Interview with AWS CEO Matt Garman
:
Do you think you had to do a bit of explaining now though, because lots of people were anchoring on the training era and you’re like, “We’re thinking about the inference era“, and that’s going to be something different, maybe you still had to get those explanatory powers going again?
MG:
You do, but it’s just how quickly people understand what you’re talking about is just totally different. So I think yes, I think if you move from where people are saying, “That does seem kind of cool, and it’s really neat that I have this intelligent chatbot that I can talk to”, going to, “I can actually do work in your enterprise”, has been a little bit of an education, but it’s also been relatively quick in the scope of how fast technology moves.
What I was driving at with that question was a callback to
concerns about AWS’s competitiveness in terms of training
, thanks not only to their focus on their own chips, but also their own networking. However, just as training is mostly all about accelerators and less about CPUs, it’s also the arena where networking matters most, because you need to tie all of those accelerators together. When it comes to inference, however, just as GPUs become relatively less important (in terms of ratio to CPUs), so does that sort of horizontally scalable networking between GPUs. And, when you look ahead to agentic-centric workloads, then not only are CPUs even more important for tool use, but so is access to data and applications — which for many companies are already on AWS.
Intel’s Differentiation?
What made the structural point even more starkly, however, was what Tan did
not
say. Note these two questions:
On the CPU side of things, the server CPU side. Can you talk about how Intel is positioned competitively? Is the strength that you’re seeing more that the market demand is just that high? Or do you believe that your product line actually has some competitive differentiations versus either other x86 competitors or Arm offerings?
This is where Tan gave the quote about changing ratios I excerpted above; then he talked about Intel having advanced packaging and foundry and its own CPUs. In other words, he completely dodged the question about competitive differentiation within the CPU market.
The second question:
The follow-up, Lip-Bu, is for you on server CPU competition. So both when we look at competition versus x86 against AMD, do you think you are gaining share? Do you expect to gain share against them? And then broader, I think the competition against Arm because Nvidia is planning to launch a stand-alone Vera CPU Rack. Recently, we heard Amazon talk up their Graviton option. I think Google yesterday said they would launch Axion and connect it with every TPU. So just kind of near term, how do you look at competition versus AMD and x86? And then kind of medium to longer term, how do you see the competition develop against ARM?
Tan’s answer was again a total dodge: he talked about Intel’s roadmap, the fact that he was friends with Arm CEO Rene Haas, and that he was an investor in Annapurna Labs, the startup AWS acquired to make their chips. He touched on a few other topics as well, none of which actually answered the question about Intel’s competitive position relative to AMD or Arm.
There’s one more tidbit that lands the point: one of the reasons Intel’s revenue exceeded expectations is that it found buyers for
everything
; CFO David Zinsner said in the Q&A section:
I would say we certainly were in our lowest point in terms of supply probably in the first quarter relative to the rest of the year. But what we were able to do in the first quarter was go through finished goods inventory and find opportunities to sell product we didn’t think we would be able to move. It was either de-specced product or it was legacy product we had shelved and then worked with customers and found opportunities for them to leverage that technology in their system. So that helped out a lot. I’m not sure we have that benefit in the second quarter. So obviously, we will scrutinize our finished goods inventory to see if we can find some opportunities. But for the most part, what we’re relying on from a volume growth perspective, Q2 versus Q1 is going to be increasing supply.
The demand for CPUs is so high that Intel is basically scrounging through the couch cushions, finding CPUs it thought it would never sell and finding willing buyers. Those CPUs, by definition, are not differentiated — actually, they’re negatively differentiated, beyond the fact that they were available.
Indeed, that points to what might in fact end up being Intel’s most important advantage in the long run. One of
the major theses
for the establishment of Intel Foundry was that Intel itself was not going to be able to provide sufficient volume to fund the leading edge; therefore, to stay on the leading edge, Intel would need to open up its fabs to external customers. However, what if Intel actually ends up consuming all of its fabs’ capacity because the demand for CPUs is so insatiable, and because Intel ends up being the only CPU maker that is not constrained by
TSMC capacity
?
That won’t necessarily mean the shift to foundry was a mistake: where Tan has had the biggest impact is on improving Intel’s efficiency and yields, which will be the primary drivers of increased supply in the short term. The foundry model exposed how badly behind Intel was on both points, and even if the company ends up being the biggest beneficiary of its fabs, that benefit will be far greater for the improvement derived from benchmarking Foundry as a standalone entity. And, of course, Intel will, in the best-case scenario, be able to fab chips (and/or package them) for its competitors as well.
Whither Terafab
From
Bloomberg
:
Tesla Inc. plans to spend roughly $3 billion to build a research chip factory in Texas, according to Chief Executive Officer Elon Musk, an early phase of an effort to establish chip manufacturing at a massive scale. The research facility will be built on the electric-vehicle maker’s existing Giga Texas campus, Musk said Wednesday during the company’s quarterly earnings call. It will be capable of outputting just a few thousand wafers a month but intended to be a testing ground for new technologies and processes. SpaceX, Musk’s rocket company, will lead the charge on the early phases of the broader project, known as Terafab, he said. Intel Corp. has signed on to support the effort, positioning itself as a partner that can contribute its chip design, fabrication and packaging expertise.
Musk said about Intel’s involvement on
Tesla’s earnings call
:
Intel is excited to partner with us on some of the core manufacturing technologies. So we plan to use Intel’s 14A process, which is state-of-the-art and, in fact, not yet totally complete. But given that by the time Terafab scales up, 14A will be probably fairly mature or ready for prime time. 14A seems like the right move. And we have a great relationship with Intel, a lot of respect for the CEO, the CTO and the new team there. So we think it’s going to be a great partnership.
Tan said on Intel’s earnings call:
As we look to continue challenging the status quo, I can think of no better partners than Elon Musk. We recently announced our partnership with SpaceX, xAI and Tesla to support Terafab. Elon and I share a strong conviction that global semiconductor supply is not keeping pace with the rapid acceleration in demand. We are excited to explore innovative ways to refactor silicon process technology, looking for unconventional ways to improve manufacturing efficiency that will eventually lead to a dynamic improvement in the economics of semiconductor manufacturing.
Tan added in response to a question as to whether this was a process licensing agreement:
So I think on the 14A, I think we are making great progress in terms of yield and the cycle time. And then clearly, we are engaging with multiple customers, heavy engaging. And as usually my style is under promise, over delivering. So we have no plan to announce the customer unless a customer want to announce it, and we are supporting that.
So I think back to the Terafab, clearly, Elon and I, we believe that global supply chain is not keeping pace with the rapid acceleration in the demand. And so we both share the vision that we’re going to learn a lot together, exploring the innovative way and then in the process of the manufacturing.
Once again, I appreciate how Tan doesn’t claim things that don’t exist: above it was Intel differentiation, and here it is concrete growth opportunities from Tesla. My interpretation of this announcement is that it is a process-licensing agreement, but a highly speculative one, dependent on Musk actually figuring out new lower-cost ways to make chips. And, to that end, the way I read Tan’s statement is that the ultimate payment for Intel will be less money, than in benefiting from whatever process improvements Musk can come up with. That seems like a reasonable bet, even if one gets the sense from Tan that he’s not entirely sure it will pay off.
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