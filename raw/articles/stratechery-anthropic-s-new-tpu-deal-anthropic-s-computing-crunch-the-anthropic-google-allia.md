# Anthropic's New TPU Deal, Anthropic's Computing Crunch, The Anthropic-Google Alliance
**Source:** https://stratechery.com/2026/anthropics-new-tpu-deal-anthropics-computing-crunch-the-anthropic-google-alliance/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2FudGhyb3BpY3MtbmV3LXRwdS1kZWFsLWFudGhyb3BpY3MtY29tcHV0aW5nLWNydW5jaC10aGUtYW50aHJvcGljLWdvb2dsZS1hbGxpYW5jZS8iXX0sImV4cCI6MTc4MjI3Njc3MCwiaWF0IjoxNzc5Njg0NzcwLCJpc3MiOiJodHRwczovL2FwcC5wYXNzcG9ydC5vbmxpbmUvb2F1dGgiLCJzY29wZSI6ImZlZWQ6cmVhZCBhcnRpY2xlOnJlYWQgYXNzZXQ6cmVhZCBjYXRlZ29yeTpyZWFkIGVudGl0bGVtZW50cyBwb2RjYXN0IHJzcyIsInN1YiI6ImU1ZDQ0YTY0LWNhNTgtNDcxZC05ZmEzLTljOTA4MTNhODg1MCIsInVzZSI6ImFjY2VzcyJ9.v88EB0u05mw3NM-D9Mvwwmmcai6PFH1rkFn1_dWJC_mTC0h2hr4zMf1HBestYkCAUgnExpmHFw9SOdhxwMRUGEMm8ocNL9KO4LGB1Y9Ht__8bmfjt8bfHPr3hVAjhehjuyRiUH8npqYfKXSC1Yn1PnUx8QHxr0ZdWGlnBFMVIH6N9C6riCCvkoEzRtquJFWjRUyUUzICwPJzO5b45vTKLRv7cxVcKE8--A4Arw92pueISHkKeZhdl8pvgTS3c1hdqiekFlEe0SBHEFWj_vlufybY-uvkHzGX0oItScDbJp4hU1lo1bkKD5CclDaUpc--aJlebEowtunat8ee6ixYjw
**Date:** 2026-04-07
**Author:** Ben Thompson
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Listen to this post:
Your browser does not support the audio element.
Good morning,
In
yesterday’s Update
I said that OpenAI had acquired OpenClaw; that was incorrect.
OpenAI hired Peter Steinberger
, the creator and maintainer of OpenClaw. OpenClaw, however, remains open source and is owned by a foundation. I apologize for the error.
On to the Update:
Anthropic’s New TPU Deal
From the
Wall Street Journal
:
Broadcom will develop and supply custom artificial-intelligence chips for Google and additional computing capacity to Anthropic in an expansion of the strategic collaboration between the three companies. The chip manufacturer said Monday it will supply Google with custom Tensor Processing Units, along with networking and other components for Google’s next-generation AI data center racks through up to 2031 as part of a supply assurance agreement. Anthropic will access about 3.5 gigawatts of TPU-based computing capacity beginning in 2027 as part of its commitment for multiple gigawatts of compute capacity, Broadcom said.
Anthropic wrote in
a blog post
:
Demand from Claude customers has accelerated in 2026. Our run-rate revenue has now surpassed $30 billion—up from approximately $9 billion at the end of 2025. When we announced our Series G fundraising in February, we shared that over 500 business customers were each spending over $1 million on an annualized basis. Today that number exceeds 1,000, doubling in less than two months.
These growth numbers —
however revenue is accounted for
— are stunning. In fact, the curve is even steeper than exponential, at least for the time measured:
What is notable is that the real bend in the curve occurs almost exactly when
Anthropic’s standoff with the U.S. government
went public; whatever ends up happening with that dispute, it does appear that it was, at a minimum, one of the biggest marketing coups ever.
Anthropic’s Computing Crunch
What is also becoming clear is that Anthropic is facing a major compute crunch, and
it’s only getting worse
. This applies to AI broadly, but it’s particularly acute for Anthropic, because of the company’s own conservatism. CEO Dario Amodei said
at the DealBook conference in December
:
There’s a real dilemma deriving from uncertainty in how quickly the economic value is going to grow and the lag times on building the data centers that drives it. There’s a genuine dilemma, which we as a company try to manage as responsibly as we can. And then I think there are some players who, you know, who are YOLO, who pull the risk dial too far. And I’m very concerned.
Two months later,
when pressed on this quote by Dwarkesh Patel
, Amodei said:
So when we go to buying data centers, again, the curve I’m looking at is: we’ve had a 10x a year increase every year. At the beginning of this year, we’re looking at $10 billion in annualized revenue. We have to decide how much compute to buy. It takes a year or two to actually build out the data centers, to reserve the data center.
Basically I’m saying, “In 2027, how much compute do I get?” I could assume that the revenue will continue growing 10x a year, so it’ll be $100 billion at the end of 2026 and $1 trillion at the end of 2027. Actually it would be $5 trillion dollars of compute because it would be $1 trillion a year for five years. I could buy $1 trillion of compute that starts at the end of 2027. If my revenue is not $1 trillion dollars, if it’s even $800 billion, there’s no force on earth, there’s no hedge on earth that could stop me from going bankrupt if I buy that much compute.
Even though a part of my brain wonders if it’s going to keep growing 10x, I can’t buy $1 trillion a year of compute in 2027. If I’m just off by a year in that rate of growth, or if the growth rate is 5x a year instead of 10x a year, then you go bankrupt. So you end up in a world where you’re supporting hundreds of billions, not trillions. You accept some risk that there’s so much demand that you can’t support the revenue, and you accept some risk that you got it wrong and it’s still slow.
When I talked about behaving responsibly, what I meant actually was not the absolute amount. I think it is true we’re spending somewhat less than some of the other players. It’s actually the other things, like have we been thoughtful about it or are we YOLOing and saying, “We’re going to do $100 billion here or $100 billion there”? I get the impression that some of the other companies have not written down the spreadsheet, that they don’t really understand the risks they’re taking. They’re just doing stuff because it sounds cool.
We’ve thought carefully about it. We’re an enterprise business. Therefore, we can rely more on revenue. It’s less fickle than consumer. We have better margins, which is the buffer between buying too much and buying too little. I think we bought an amount that allows us to capture pretty strong upside worlds. It won’t capture the full 10x a year. Things would have to go pretty badly for us to be in financial trouble. So we’ve thought carefully and we’ve made that balance. That’s what I mean when I say that we’re being responsible.
Needless to say, it looks like Anthropic is going to 10x its 2025 revenue run rate well before the end of the year; I certainly understand Amodei’s trepidation about 10x’ing that number again, but failing to do so may end up being a self-fulfilling prophecy: the biggest constraint on Anthropic’s growth is increasingly going to be Anthropic’s limited compute.
So how much revenue is the 3.5 GW of compute in this new announcement worth?
Estimates of the cost of building out a gigawatt of capacity range from $35 billion to $80 billion; let’s go with $50 billion, for a total of $175 billion.
Google has a 6 year depreciation schedule for its servers; that means annual depreciation costs for this deal of around $30 billion.
Google Cloud had a 30% margin last quarter; assuming depreciation is the only cost (it isn’t), that implies Google Cloud revenue of $43 billion.
Anthropic had a gross profit margin of 40% last year; that implies revenue of $72 billion.
This is an extremely flawed back-of-the-envelope calculation for lots of reasons, but let’s round everything up a little bit — particularly margins — and guess that this deal will cover an incremental $100 billion in Anthropic revenue. There’s a good chance that’s not going to be close to enough! Expect more deals in the coming months.
The Anthropic-Google Alliance
So why TPUs? Well, from Anthropic’s perspective, it’s almost certainly because that is what is available. According to this graph from Epoch AI, Google has the most AI compute, and most of that is TPUs:
We estimate that over 60% of global AI compute is owned by the top US hyperscalers, led by Google with the equivalent of roughly 5 million Nvidia H100 GPUs!
Unlike the other hyperscalers, which rely primarily on Nvidia, Google’s fleet is dominated by its custom TPU chips.
pic.twitter.com/8gCykdmXVZ
— Epoch AI (@EpochAIResearch)
April 6, 2026
This is what
SemiAnalysis predicted in 2023
while coining the terms “GPU-Poors” and “GPU-Rich” — the latter was Google:
Even when giving them every benefit of the doubt, Google’s compute capabilities make everyone else look silly. Google will quite literally have more TPUv5’s than OpenAI, Meta, CoreWeave, Oracle, and Amazon will have GPUs combined. They are able to rent a large chunk of this capacity to various startups. Of course, on performance per chip, there is a significant deficit for TPUv5 versus H100, but even when shaking that out, OpenAI’s compute is a fraction of Google’s. The incredible TPUv5 buildout is going to drive significantly more training and inference capacity than anyone else on the planet.
This chart,
again from Epoch AI
, tracks that prediction:
These are snapshots of the current moment in time; this deal is for future chips. Remember, though, that Google is spending between $175–$185 billion in capex this year, mostly for AI. That’s almost certainly the most in tech (Amazon is spending more in capex, but some of that will go towards their e-commerce business).
What does seem clear is that Google does not see a clear path to using all of that capacity for themselves, either for their own services or, more pertinently, for their Gemini enterprise offerings. That’s ok, though: the beauty of Google Cloud from Google’s perspective is that they can still capture AI growth broadly as long as compute is happening on Google Cloud. To that end, while I’m sure that Google would prefer to be winning the enterprise market for themselves, they are happy that if they don’t win, Anthropic does, as opposed to OpenAI. That ensures that Google’s capex investment will pay off, just at somewhat lower margins than if they took the market on their own.
Besides, the more natural fit for Google is the consumer market anyways. That’s another reason the Search giant is surely happy about Anthropic’s success, and more than willing to continue to facilitate their growth: a world where Anthropic wins enterprise over OpenAI both weakens Google’s primary competitor in the consumer space, and gives Google the money and future certainty to continue to spend OpenAI into the ground.
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