# Amazon Earnings, Trainium and Commodity Markets, Additional Amazon Notes
**Source:** https://stratechery.com/2026/amazon-earnings-trainium-and-commodity-markets-additional-amazon-notes/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2FtYXpvbi1lYXJuaW5ncy10cmFpbml1bS1hbmQtY29tbW9kaXR5LW1hcmtldHMtYWRkaXRpb25hbC1hbWF6b24tbm90ZXMvIl19LCJleHAiOjE3ODIyNzY3NzAsImlhdCI6MTc3OTY4NDc3MCwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMgcG9kY2FzdCByc3MiLCJzdWIiOiJlNWQ0NGE2NC1jYTU4LTQ3MWQtOWZhMy05YzkwODEzYTg4NTAiLCJ1c2UiOiJhY2Nlc3MifQ.oVI75jnoyp3lKTN8DP8m90OLo2T738w_3RPGKOCntkc1GDWYvazJD6sDongoKjAkfa3Dbpace8c0m6AuQXxn2gh2rXiSSWlC08TnfFCH-7pMXkaegKLKxRUCNz34iSpTNMCkopnxs7gF0W2j7NTyXWU1y4ftX2XBH899vvfZO0sD3iuCZ4psAmQSwEBKeLDG240fak7qmD-WiNq7xGh-jTqHZm0ljLtE8KtiSapFAd0cjCPe1_2_I4X0gk6TsjJ159loTiNG20nvTBWN5EBsQ3KnKAIWmlMRmt1pOdxqQLmn6fLzugzmGg5PlKfM5rdBQZp19hDCpulTh6MAgXp84A
**Date:** 2026-04-30
**Author:** Ben Thompson
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Listen to this post:
Your browser does not support the audio element.
Good morning,
On
today’s episode of Sharp China
, Andrew and Bill discuss China’s demand that Meta unwind its acquisition of Manus.
On to the Update:
Amazon Earnings
From the
Wall Street Journal
:
Amazon.com said Wednesday that its edge in cloud computing and aggressive investment in new data centers is translating into a surge in its artificial-intelligence business. Chief Executive Andy Jassy said that revenue from the company’s Amazon Web Services grew 28%, the fastest pace since 2022, in part because many customers building new AI agents want them stored in the same spot where they maintain their other cloud services and data.
Total revenue and profit rose in the first quarter, fueled by growing AI services and cloud sales. Revenue for the period rose 17% to $181.5 billion, while net profit increased a sharp 77% to $30.3 billion, which Amazon attributed to pretax income from its investment in Anthropic. Both figures beat analyst estimates, according to FactSet. Shares were up more than 4% in after-hours trading.
There were, needless to say, many options in terms of what companies to write about today, but it’s been an Amazon-themed couple of weeks, so this seemed like the best place to start — plus, this was
a pretty interesting earnings call
from CEO Andy Jassy.
To start with, go back to the aside about AWS in
yesterday’s Update
:
This shift [from training to inference to agents] has implications beyond Intel: I touched on it in
yesterday’s Interview with AWS CEO Matt Garman
:
Do you think you had to do a bit of explaining now though, because lots of people were anchoring on the training era and you’re like, “We’re thinking about the inference era“, and that’s going to be something different, maybe you still had to get those explanatory powers going again?
MG:
You do, but it’s just how quickly people understand what you’re talking about is just totally different. So I think yes, I think if you move from where people are saying, “That does seem kind of cool, and it’s really neat that I have this intelligent chatbot that I can talk to”, going to, “I can actually do work in your enterprise”, has been a little bit of an education, but it’s also been relatively quick in the scope of how fast technology moves.
What I was driving at with that question was a callback to
concerns about AWS’s competitiveness in terms of training
, thanks not only to their focus on their own chips, but also their own networking. However, just as training is mostly all about accelerators and less about CPUs, it’s also the arena where networking matters most, because you need to tie all of those accelerators together. When it comes to inference, however, just as GPUs become relatively less important (in terms of ratio to CPUs), so does that sort of horizontally scalable networking between GPUs. And, when you look ahead to agentic-centric workloads, then not only are CPUs even more important for tool use, but so is access to data and applications — which for many companies are already on AWS.
If there was an overarching theme to this call, it was this: Jassy believes AWS is set to benefit from the agentic era of AI because of (1) its cost structure, which is downstream from their infrastructure decisions, particularly their investment in their own chips and (2) the fact that AWS won in the commodity cloud era, which means they are the obvious choice for customers already using AWS.
Trainium and Commodity Markets
To that end, Jassy gave a full-throated defense of AWS’s chip strategy in his prepared remarks:
Our chips business continues to grow rapidly and is larger than what a lot of folks thought. We saw nearly 40% quarter-over-quarter growth in Q1, and our annual revenue run rate is now over $20 billion and growing triple-digit percentages year-over-year, but this somewhat masks the size. If our chips business was a stand-alone business and sold chips produced this year to AWS and other third parties as other leading chip companies do, our annual revenue run rate would be $50 billion. As best as we can tell, our custom silicon business is now one of the top 3 data center chip businesses in the world, the speed at which we’ve gotten here is extraordinary. And we have momentum.
For our custom AI silicon, we’ve recently shared very large multiyear, multi-gigawatt Trainium commitments from the 2 leading AI labs in the world in Anthropic and OpenAI as well as an increasing number of companies like Uber betting on Trainium. And we now have over $225 billion in revenue commitments for Trainium. Our Trainium2 chip has about 30% better price performance than comparable GPUs and is largely sold out. Trainium3, which just started shipping at the start of 2026 and is 30% to 40% more price performance than Trainium2 is nearly fully subscribed. And much of Trainium4, which is still about 18 months from broad availability has already been reserved. Amazon Bedrock, which is used expansively by over 125,000 customers, runs most of its inference on Trainium and almost 80% of the Fortune 100 companies are using Bedrock.
We also just announced that Meta is committed to using tens of millions of Graviton cores. Graviton is our industry-leading CPU chip, which allows Meta to run the CPU-intensive workloads behind agentic AI with the performance and efficiency they need at their scale. AI is commonly seen as a GPU story, but the rise of agentic workloads, real-time reasoning, code generation, reinforcement learning and multistep task orchestration is driving massive CPU demand as well. As AI systems shift from answering questions to taking actions and as post-training and inference scale up, the compute required pulls heavily on CPUs. That’s why Meta chose Graviton, which delivers up to 40% better price performance than any other x86 processors and now used by 98% of the top 1,000 EC2 customers. Nobody has a better set of chips across AI and CPU workloads than AWS with Trainium and Graviton, and we’re unusually well positioned for this AI inflection we’re in the early stages of experiencing.
While the largest number of AI chips we’re bringing in are Trainium, we continue to have a deep partnership with NVIDIA. We have immense respect for them, continue to order substantial quantities. We’ll be partners for as long as I can foresee, and we’ll always have customers who want to run NVIDIA on AWS, and we will also have a very large chips business ourselves. Customers always want choice. It’s always been true and always will be true. Different companies will offer different benefits for customers and the uniquely strong price performance that Trainium offers is compelling to our external and internal customers. For perspective, at scale, we expect Trainium will save us tens of billions of dollars of CapEx each year and provide several hundred basis points of operating margin advantage versus relying on others’ chips for inference.
If you zoom out far enough, there are two ways to build a consistently profitable business. The model that most people think about is to have sustainable differentiation that enables you to charge a premium over your costs. This is the Apple model: because iPhones are the only devices that run iOS and its attendant ecosystem, Apple is able to take the majority of profits in the smartphone space. Yes, Apple almost certainly gets good deals on components thanks to its scale, but they are still spending money to build a good phone; their profit comes from the fact they can charge that much more to customers. This is the model that most startups are focused on: that’s why there is such obsession with “moats” and “network effects”.
Much of business, however, is about selling commodities, where the goods are not differentiated and are easily substitutable; in this world the way to consistent profits is by having a sustainably superior cost structure. In a theoretical world where demand perfectly matches supply, the market clearing price for a commodity is the price at which the supplier with the worst cost structure earns zero margin; every supplier with better margins earns profits commensurate with the extent to which their cost structure is cheaper.
When it comes to AI, of course, demand exceeds supply, but this simply means the low cost provider is that much more profitable, given that the market clearing price is that much higher. In other words, to the extent that AWS can deliver tokens from Trainium with a meaningfully cheaper cost structure relative to Nvidia, is the extent to which their profits will be larger than their competitors. The one constraint in this regard, however, is power: if that is the limiter, then Nvidia’s premium — and the commensurate ability to deliver more tokens-per-watt — is worth it; however, if there is sufficient power, then Trainium’s cost structure is superior.
What does seem to be the case is that,
for the next few years at least
, the U.S. has scrounged up enough power;
the more critical constraint is chips
, and in that world — a world that is also, in volume terms, shifting away from training towards inference and ultimately agents — Trainium is looking like a very profitable investment indeed.
Additional Amazon Notes
There were a bunch of interesting additional tidbits on this earnings call I wanted to call out:
AI Driving Core AWS Growth:
Jassy said that AI is driving growth in AWS’s core non-AI offerings:
And then at the same time, we’re seeing very significant growth in our core business. And some of that are the migrations that have picked up from enterprises from on-premises to the cloud. But a lot of that is also as AI growth is exploding, it turns out that it leads to a lot of core growth as well. All the post training, all the reinforcement learning, all the agentic actions and tool usage that these agents are using.
The case here is that while customers choose their AI platform based on where their data and applications already are, AI itself pulls more data and applications into the cloud so they can be leveraged.
Memory Constraints Drive Cloud Growth:
Jassy was asked if memory shortages were having a negative impact on AWS, and Jassy made the case that it was actually a positive:
One of the interesting things that we see right now with the change in price and in supply on things like memory is that it is a further impetus pushing companies who have on-premises infrastructure into the cloud. And it’s because a meaningful part, these suppliers are prioritizing their very largest customers which cloud providers are. And so we have seen a number of conversations we’ve been having with enterprises for many months where it’s just been slower in getting the transformation plan to move to the cloud accelerate rapidly just because we have a lot more supply than what others have.
This was surprising to me, but it makes intuitive sense.
Positive Comments About 3rd-Party Shopping Agents:
Amazon has been (understandably) stand-offish about agentic shopping, which makes sense given the company benefits greatly from customers starting their shopping journey on Amazon.com (the better to see ads). To that end, I was surprised to see Jassy say that the company wanted to figure out how to work with 3rd-party agents:
And I think we’ll do a lot of work with third-party horizontal agents to try and make that customer experience better…I do think today, it reminds me in some ways the stage we’re in of what we saw in the early days of search engines and they’re trying to refer business to e-commerce. It’s never been a giant part of the referrals to our e-commerce business. But over the years, the experience got better. And what you see with Agentic Commerce is it’s a small fraction of what we see with the search engine referrals, but the experience just hasn’t gotten great with these third-party horizontal agents yet. They’re not often able to get the pricing right or the product information right. They don’t have any personalization data or any shopping history. And so we do want to see that get better with third-party horizontal agents. We’re having conversations with all those folks to try and make that better and find something that works for customers and all the companies.
I do wonder if this is connected to
OpenAI’s commitment to Bedrock Managed Agents
; it was pretty interesting to me that OpenAI CEO Sam Altman was pretty clear that this was an AWS-only thing for now. Is it possible that the deal he made entails Amazon making Amazon shopping better in ChatGPT?
Ads and Agents:
Of course Amazon’s top priority is Rufus, its own shopping agent, and to that end, Jassy made the case that this is actually a great advertising medium:
So I think there are going to be a lot more advertising with the rise of what’s happening in AI. And then if you look at the Agentic Commerce experiences, if you look at any of these agentic experiences, they tend to be multi-turn conversations where you’re not interacting with one search and getting an answer. You tend to find that you’re asking questions, you’re narrowing questions, it’s asking you questions on what you want. And in that process of having multi-turns, there are multiple opportunities to surface relevant products to customers, many of which will be organic and some of which will be sponsored. And it also gives rise to opportunities like sponsored prompts. And so one of the interesting things that has been very successful for customers in our store has been when they ask certain questions, we give them a number of suggestions that are all created through AI. And we’ve gotten pretty good at also having sponsored prompts and that mix of questions and prompts to make it easy for people to keep digging deeper into what they’re interested in. So I actually believe that advertising will do well in a world of agentic commerce.
We’ll see how this works, but to the extent that it does, it’s a bullish take for Google as well.
Sports as Customer Acquisition:
This isn’t AI-related, but I thought this comment on Prime Video was interesting:
Prime continues to fuel our growth and reflects the value members receive from the program. Prime Video is a key pillar of the Prime value proposition and an important driver of new member acquisition. Our investments in original and exclusive content and live sports, combined with our third-party partner titles, offer the best selection of premium video content. In addition to delivering compelling value to Prime members, advertisers and partners, Prime Video is now a large and profitable business in its own right.
This echoes some of Netflix’s comments on
their most recent earnings call
about the impact of sports: their biggest payoff is in acquiring new customers who can then be monetized via businesses that don’t depend on paying rent to rights holders. For Netflix, that’s the rest of their library; for Amazon, it’s in buying way more stuff on Amazon once you’re a Prime customer. This, by extension, explains the conundrum traditional entertainment companies find themselves in: if sports is all you sell, you are simply a middleman passing profits on to the rights holder; you need to view sports as a point of leverage for something else entirely to gain the full benefit.
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