# Amazon Earnings, CapEx Concerns, Commodity AI
**Source:** https://stratechery.com/2026/amazon-earnings-capex-concerns-commodity-ai/
**Date:** February 10, 2026
**Author:** Stratechery
**Score:** 4/5 | **Concepts:** gpu-and-compute-economics, inference-architecture-and-scaling
**Scoring reason:** Analyzes Google's record $175-185B CapEx guidance and Google Cloud's 48% growth, providing evidence on AI infrastructure investment and cloud compute economics.

Listen to this post:
Your browser does not support the audio element.
Good morning,
On
this morning’s episode of Dithering
, John and I discuss his experience seeing Jony Ive’s new design for the driver experience of the
Ferrari Luce
.
On to the Update:
Amazon Earnings
From the
Wall Street Journal
:
Amazon.com shares fell sharply after the technology giant unveiled plans for a massive increase in AI-related spending and fourth-quarter growth in its cloud-computing unit that was slower than rivals. The company said Thursday that it expects $200 billion in 2026 capital spending, a nearly 60% increase from last year and far above Wall Street expectations. Amazon shares opened 9% lower Friday morning.
The results underscore investor angst about spending increases for artificial intelligence. Microsoft, Meta Platforms, Alphabet’s Google, Amazon and Oracle, which are all scrambling to build and finance data centers because of a massive increase in AI-related computing demands, collectively plan to spend more than $700 billion in 2026, according to the companies and analyst projections. That is close to the 2026 spending budget for Japan and exceeds those of Germany and Mexico.
Shareholders have responded unevenly to spending increases, rewarding Meta and Google due to positive improvements in advertising and other businesses while punishing Microsoft and Amazon for not growing their AI-related businesses quickly enough. With spending on data centers outpacing growth in revenue, investors are concerned that tech companies are spending too quickly. Amazon says it is selling data-center capacity as quickly as it can bring it online. The company says it believes the demand is long-term.
Yesterday
I explained why I felt Google’s massive CapEx number was justified
; however, I’m not an indiscriminate bull: I share some of Wall Street’s concern about Amazon’s plans.
CapEx Concerns
First off, it’s important to note that Amazon, like the other hyperscalers, says that demand vastly exceeds supply, and that there is evidence to back this up. CEO Andy Jassy said in his prepared remarks on
the earnings call
:
We expect to invest about $200 billion in capital expenditures across Amazon, but predominantly in AWS because we have very high demand, customers really want AWS for core and AI workloads, and we’re monetizing capacity as fast as we can install it. We have deep experience understanding demand signals in the AWS business and then turning that capacity into strong return on invested capital. We’re confident this will be the case here as well.
CFO Brian Olsavsky said in the Q&A segment:
I’ll start from the financial side. So on the investments we’re making, as Andy said earlier, we are putting into service with customers all capacity that we’re getting and it’s immediately useful. And we’re also seeing a long arc of additional revenue that we see from other customers and backlog and commitments that people are anxious to make with us, especially for AI services. So you can see that’s working its way into our P&L, both through CapEx and also through our operating margin in AWS. AWS is 35% operating margin through Q4, up 40 basis points year-over-year.
That margin point is an important one, backing up the argument that AWS has more demand than supply; the company’s backlog is also increasing; Jassy said:
I’ll start with the first one, which is on backlog, our backlog is $244 billion. That’s up 40% year-over-year. I think it’s up 22% quarter-over-quarter, and we have a lot of deals that are in the pipeline. There’s just — as I mentioned earlier — there is a lot of demand for AWS right now. in the AI space and also in the core AWS space.
Your second question was internal and external use cases, and then the impact around supply and demand. The vast majority of the capital that we spend and the capacity that we have is consumed by external customers. Amazon has always been a very large AWS customer, a very helpful AWS customer because they’re very demanding, and they use the services very expansively and stretch the limits as we launch things. So they’ve always been a very important big customer, but always a very small fraction of the total, and that’s true today in AI as well as the overall AWS business…
And I just think on the supply and demand, what I would tell you is we’re growing 24% year-over-year on a $142 billion annualized run rate business. So we’re growing at really an unprecedented rate yet, I think every provider would tell you, including us that we could actually grow faster if we had all the supply that we could take. And so we are being incredibly scrappy around that.
The second paragraph of this answer gets at the first part of my concern. Specifically, I have consistently differed from a lot of Wall Street analysts in that I am much more enthusiastic about internal AI workloads than I am about 3rd-party ones; companies not only have far greater visibility into 1st party demand, but the return from that demand is much higher margin; this is why I thought that
Microsoft made the right decision
to devote more incremental compute to their own products than to Azure. Moreover, I’m particularly enthusiastic about the impact of AI on digital advertising, which is to say I’m generally more enthusiastic about investments from
Meta
and
Google
.
Secondly, Amazon, unlike the other three, doesn’t have the cash flow to cover this level of investment; from
The Information
:
Big tech’s dramatic ramp-up in projected capital expenditures this year will all but wipe out free cash flow for Amazon, Google and Meta Platforms. That will force some of those companies to make some difficult choices, such as whether to end stock buybacks or borrow more money.
Most of the big tech companies in recent years have begun returning cash to shareholders through dividends and buying back stock. Google and Meta Platforms, for instance, do both. But that could be difficult this year, with capital expenditures aimed at expanding computing capacity for AI almost entirely absorbing the cash their operations generate. (See above chart).
Google and Meta have already started to scale back their stock buybacks. Cutting off the dividend, though, could be tricky, as both companies only introduced the payouts in 2024, which made their stocks more appealing to investors. Amazon won’t have the same problem, as it hasn’t bought back stock since 2022 and has never paid a dividend. But its projected capex this year of $200 billion is higher than the $178 billion in cash from operations analysts estimate it will produce, according to S&P Global Market Intelligence, which means unlike the other companies it will burn cash anyway.
First off, one thing I forgot to mention
while writing about Microsoft last week
,  is that the company surely erred by temporarily pausing its level of CapEx spending a year ago; the company likely could have hit that magic 40% Azure growth rate had it not! That, by extension, is a cautionary tale to anyone else thinking about reducing their pace of investment.
Secondly, I have no issue with any of these companies slowing or stopping stock buybacks, and wouldn’t be opposed to stopping dividends either. Yes, most of those buybacks are to make up for stock-based compensation, and not paying dividends — worse, stopping them! — is generally both a major negative signal to Wall Street and also reduces the addressable market for the stock; at the same time, you are by-and-large investing in these companies because you believe in the potential impact of AI on their business, and I would just as soon have cash devoted to achieving that future.
What is more likely, however, is that the companies keep the dividends and start taking on more debt, like
Google did just yesterday
. Debt does, to be clear, make a lot of sense for these investments: you have to build the data centers and buy the chips now, and then make money from both over time; that matches the timing duration of debt, where you get the money up front and pay it back over time. This is all completely logical!
And yet, at the same time, these debt issuances do feel like the proverbial crossing of the Rubicon: the easiest pushback to people concerned about an AI bubble has been that most of the spending has come from the free cash flow of some of the most profitable companies on earth; that is starting to no longer be the case — and won’t be for Amazon this year already.
That, more generally, speaks to some Amazon-specific challenges in terms of the AI buildout. First, Amazon operates at much lower margins than the other hyperscalers. Microsoft and Google, for example, are building lower-margin cloud businesses using the cash thrown off by their very high margin software and services businesses; for Amazon, AWS
is
the high margin business (and, it’s worth noting, a decent chunk of that CapEx budget is for Amazon.com).
Secondly, Amazon’s other high margin business is advertising; Jassy said in his prepared remarks:
Moving on to Amazon Ads, we’re pleased with the continued strong growth across our full funnel offerings, generating $21.3 billion of revenue in the quarter and growing 22% year-over-year. Sponsored product’s advertising in our store continues to be our largest ads offering and the combination of trillions of shopping, browsing and streaming signals with advanced AI and machine learning led us to deliver highly relevant and useful ads for customers.
“Sponsored product’s advertising in our store” is predicated first-and-foremost on customers starting their shopping journey on Amazon, i.e. not with other company’s AI. That’s why Amazon has understandably not adopted either Google or OpenAI’s
AI shopping protocols
: yes, Amazon would likely be the retailer of choice for the vast majority of AI recommendations, but it would be giving up a huge amount of profitability (specifically via advertising) were its place in the value chain demoted from Aggregator to aggregated.
This specific point isn’t an argument against AWS spending on AI infrastructure; rather, it’s just worth pointing out that the relatively low margin tech company on the verge of funding that buildout via debt does face threats to one of its highest margin businesses from AI.
Commodity AI
Ultimately, however, while I don’t love this level of CapEx, I can understand it. The cost of not keeping up with a company like Google is not simply that you lose AI workloads to another cloud, but potentially other cloud business as well; Amazon argues that AI workloads will follow data, but if it underinvests things could go the other way.
Moreover, there is an argument that those 1st party workloads I referenced above end up being an AWS advantage in the long run: Google and Microsoft will always be tempted to prioritize their own workloads over 3rd-party customers given the better margins attached to the former; yes, Amazon is working on things like its Rufus shopping agent, but I think in the long run that AWS can more credibly claim that 3rd-party customers are top priority — and Amazon’s willingness to tolerate lower margins supports that (again, AWS
is
the high margin business).
Also keep in mind that AWS’s chip strategy is predicated on AI compute becoming a commodity; in a commodity market profit comes from having a lower cost structure, which is exactly what Amazon is going for with its Trainium chips. I thought this comment from Jassy was notable in that regard:
And I think some of the things that you will see over time in the AI space is you’re going to keep seeing all of the inference services, which is going to be the majority of the long-term AI workloads is going to be inference. You’re going to see the inference keep getting optimized. You’re going to see higher utilization on those services. You’ll see prices normalize over a period of time.
And then I think the companies that have not just the excellence in infrastructure, but also the components that give customers better price performance and give those companies themselves better economics are going to have advantaged financials. And I think if you look, we’re already off to a really good start having Trainium underneath the majority of our Bedrock service. And that’s not just giving customers better prices, but it also gives us better economics. And so we see that following the same sorts of patterns we saw in the early days of our core AWS investment. I’m very confident we’re going to have strong return on invested capital here.
This is a point I made after re:Invent last year
: Amazon’s goal with Trainium isn’t to have customers explicitly choose Trainium; they want to sell AI services that happen to be powered by Trainium. In the case of Bedrock, what Jassy is saying is that customers choose a model, but they don’t need to care about what is powering that model; the only entity that needs to care is Amazon, which can both price the service more cheaply than if it were running on Nvidia chips, and can make more margin at the same time.
Getting to a world where this is a winning strategy, however, requires compute to be a commodity, which is only going to happen when supply comes close to meeting demand. In other words, Amazon is putting a lot of time and effort and opportunity cost towards supporting a future version of the world where sustainably offering relatively low margin AI compute is a good business; it wouldn’t make much sense to bail on the journey now, particularly when plenty of folks are willing to give the company the cash it needs to get there.
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