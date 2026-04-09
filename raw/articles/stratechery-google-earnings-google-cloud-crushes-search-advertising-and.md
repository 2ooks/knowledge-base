# Google Earnings, Google Cloud Crushes, Search Advertising and LLMs
**Source:** https://stratechery.com/2026/google-earnings-google-cloud-crushes-search-advertising-and-llms/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2dvb2dsZS1lYXJuaW5ncy1nb29nbGUtY2xvdWQtY3J1c2hlcy1zZWFyY2gtYWR2ZXJ0aXNpbmctYW5kLWxsbXMvIl19LCJleHAiOjE3NzczMjI3NjEsImlhdCI6MTc3NDczMDc2MSwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMgcG9kY2FzdCByc3MiLCJzdWIiOiJlNWQ0NGE2NC1jYTU4LTQ3MWQtOWZhMy05YzkwODEzYTg4NTAiLCJ1c2UiOiJhY2Nlc3MifQ.mGiXTbxBuuG7krbxoUHggR1UsUMiv2bGUyAmladj_QZcwiV3QpvVZL-K0f4tMUGxBDEADutdriJ-iQT99sJg_s5OXVL7LTJDhfTS_Dx2TUL8UcwAQqXNCeDrnmXviZ4fxgMg2fnoGUFvlt665CQA9dHMjrIcmPdXXmKBUCLLDWVYokMr61oRapF4g_ZUybP79-Ibl4YQ3_gukz4bnCbY7EfJmB-TWOD_UQJZqhwG9lFnKZYYKdy8nZmaoSZjSBaTG5nSkJgcHFOrzAhIKqV3SBCCSd_ek5D8rOeQ506j1AeXE-iRCWe1BzixF9O0Jerqdw_rDBR-A5bq2145XmTutA
**Date:** February 9, 2026
**Author:** Stratechery
**Score:** 5/5 | **Concepts:** gpu-and-compute-economics, inference-architecture-and-scaling, semiconductor-supply-chain-bottlenecks
**Scoring reason:** Directly addresses inference compute scarcity, DRAM price surges, GPU supply constraints, and the competitive dynamics of cloud providers hoarding AI compute capacity.

Listen to this post:
Your browser does not support the audio element.
Good morning,
On
last week’s episode of Sharp Tech
, Andrew and I discussed SaaSmageddon; this touched on and significantly expanded on
Microsoft and Software Survival
. There are so many factors going into the present and future of tech companies that I think a podcast discussion was particularly useful. Plus, later in the episode, I explain why I was pretty disappointed in Anthropic’s Super Bowl ads.
On to the Update:
Google Earnings
From the
Wall Street Journal
:
Artificial intelligence is supercharging Google’s advertising and cloud-computing businesses, and the company is ramping up spending to unheard-of levels in its quest to win the AI race. Google parent Alphabet reported an 18% jump in fourth-quarter revenue and revealed plans to roughly double its spending on data centers and other capital projects. Sales exceeded analysts’ expectations at nearly $114 billion, driven by growth in the company’s digital-advertising and cloud-computing units. Net income was $34.5 billion, a 30% increase compared with the same period a year earlier. The company reported a record $403 billion in sales in 2025 — the first time annual revenue surpassed $400 billion. Profit reached about $132 billion last year.
Google, like other tech companies, is spending tens of billions of dollars to develop AI models and build the data centers needed to train and run them. Data-center development has become increasingly difficult as tech companies face constraints in finding or building electricity supplies to run them. The company lifted estimates for capital expenditures this year to $175 billion to $185 billion, up from $91 billion to $93 billion in 2025. Alphabet’s shares traded between 6% lower and 2% higher after hours as executives addressed investors.
The headline here is the massive CapEx guide, the top end of which is a stunning $65.5 billion
more
than Wall Street expected; for context that $65.5 billion “miss” is $13 billion more than Google spent on CapEx in 2024:
What is much more compelling than the numbers looking forward, however, were the results looking backwards, which absolutely justify Google putting pedal to the metal.
Google Cloud Crushes
The most obvious way that Google can benefit from more CapEx is, of course, their cloud business, which both grew massively in the 4th quarter (48% year-over-year) and massively expanded margin to a best-ever 30%:
Google Cloud
Revenue
Growth
Loss
Margin
Q4 2019
$2,614
$(1,194)
-46%
Q1 2020
$2,777
$(1,730)
-62%
Q2 2020
$3,007
$(1,426)
-47%
Q3 2020
$3,444
$(1,208)
-35%
Q4 2020
$3,831
47%
$(1,243)
-32%
Q1 2021
$4,047
46%
$(974)
-24%
Q2 2021
$4,628
54%
$(591)
-13%
Q3 2021
$4,990
45%
$(644)
-13%
Q4 2021
$5,541
45%
$(890)
-16%
Q1 2022
$5,821
44%
$(931)
-16%
Q2 2022
$6,276
36%
$(858)
-14%
Q3 2022
$6,868
38%
$(699)
-10%
Q4 2022
$7,315
32%
$(186)
-3%
Q1 2023
$7,454
28%
$191
3%
Q2 2023
$8,031
28%
$395
5%
Q3 2023
$8,411
22%
$266
3%
Q4 2023
$9,192
26%
$864
9%
Q1 2024
$9,574
28%
$900
9%
Q2 2024
$10,347
29%
$1,172
11%
Q3 2024
$11,353
35%
$1,947
17%
Q4 2024
$11,955
30%
$2,093
18%
Q1 2025
$12,260
28%
$2,177
18%
Q2 2025
$13,624
32%
$2,826
21%
Q3 2025
$15,157
34%
$3,594
24%
Q4 2025
$17,664
48%
$5,313
30%
For me the narrative around Google’s Cloud business changed a year ago, when growth disappointed — which, combined with a then-unprecedented announced increase in CapEx, sent Wall Street scurrying — but margins expanded; I wrote in
an Update
that this meant that Google was absolutely justified in spending more:
Notice how those numbers differ from Q3 2023, the last time Google Cloud disappointed: in that quarter revenue growth disappointed and margin decreased, which suggests that Google had too much capacity for the revenue it earned, which is to say that the problem was a lack of demand. In Q4 2024, however, the opposite happened: revenue growth was a disappointment, but margins still rose; this suggests that the problem was a lack of supply in terms of infrastructure, and that is indeed exactly what management said on the earnings call.
This quarter’s results are better in every way: not only was there the highest growth since 2021 (which was on a much smaller number), but margins expanded the most since 2023, suggesting a lack of supply despite those previous investments (which, I would add, are also starting to impact margin via depreciation). Once again, management said as much; this was CEO Sundar Pichai in response to an analyst question on
the earnings call
:
We’ve been supply-constrained, even as we’ve been ramping up our capacity. Obviously, our CapEx spend this year is an eye towards the future; and you have to keep in mind some of the time horizons are increasing in the supply chain, et cetera. So, we are constantly planning for the long-term and working towards that. And, obviously, how we close the gap this year is a function of what we have done in the prior years. And so there is that time delay to keep in mind. I expect the demand we are seeing across the board, across our services, what we need to invest for future work for Google DeepMind, as well as for Cloud, I think is exceptionally strong. And so I do expect to go through the year in a supply-constrained way.
To put numbers on that demand, CFO Anat Ashkenazi said in her prepared remarks:
Google Cloud’s backlog increased 55% sequentially and more than doubled year-over-year, reaching $240 billion at the end of the fourth quarter. The increase in backlog was driven by strong demand for our Cloud products, led by our enterprise AI offerings from multiple customers…
In Google Cloud, we’re seeing significant demand for our products and services, which we expect to continue to drive strong growth, despite the tight supply environment we’re operating in.
Still, while I used Google Cloud a year ago to justify a then-shocking forecast of $75 billion in CapEx (which ended up being $91 billion!), justifying this year’s forecast needs more than Cloud.
Search Advertising and LLMs
It goes without saying that Google needs to invest in CapEx for DeepMind research, Gemini, AI Overviews, AI Mode, etc. All of those are important, but the first two in particular are about investment in the future; what was compelling on this call is what Google said that AI is doing to help the company make more money right now. From CBO Philipp Schindler’s prepared remarks:
Sundar mentioned the expansionary moment for Search. The same is true for Ads. We are investing in AI to drive significant improvements across all areas of marketing. We’re expanding the entire playing field that advertisers can compete on. AI gives businesses the ability to reach more customers in more places than ever before. Gemini uniquely positions us to bring the transformational benefits of AI to Ads in three critical areas for our customers: ads quality, advertiser tools and new AI user experiences.
I’m going to take each of these in turn.
First, ads quality. We’ve been deploying Gemini models to improve query understanding at a rate of almost a launch per month for the last two years. These improvements drive better query matching, ranking and quality, making Search Ads even more effective. With Gemini across our Ads quality stack, we evaluate relevance with greater accuracy than with previous generations of models. This has significantly improved our ability to systematically deliver more helpful, high-quality ads, contributing to a meaningful reduction in irrelevant ads served.
Gemini’s understanding of intent has increased our ability to deliver ads on longer, more complex searches that were previously challenging to monetize. Gemini models also have a significant impact on query understanding in non-English languages, expanding opportunities for businesses to scale globally.
I think these two paragraphs were the most important ones on the call.
We’ve already discussed
how Meta’s new models — specifically the GEM model — use a transformer architecture to improve Meta’s ad targeting. Keep in mind, however, that Meta’s core advertising model is about harvesting signal about users to match ads they might be interested in; it’s fair to say that they are better than Google at this, given the relative performance of Meta’s advertising as compared to YouTube, which is the closest Google analog in terms of advertising medium and targeting technique (although, it’s fair to note that YouTube’s advertising growth is suppressed by increasing subscriptions, which reduces inventory).
Google’s core advertising model, however, is search, which is much simpler: they are by far the most important signal in terms of what ad to show you is what you actually search for. The most important modality is text, but Google is pushing image search as well; Pichai said in his prepared remarks:
Third, people are searching in new ways beyond text. Nearly one in six AI Mode queries are now non-text, using voice or images. And Circle to Search is now available on over 580 million Android devices.
This is where Google’s lead in multimodality, particularly image understanding, really pays off. Still, it’s the text implications that I’m most interested in. First, Schindler notes that incorporating LLMs lets Google better understand what the user is searching for specifically in terms of increasing ad relevancy; this increases the likelihood that a user clicks on an ad, increasing revenue.
It’s the second implication, however, that really stuck out to me. Specifically, LLMs (1) allow Google to understand long queries for purposes of advertising and (2) allow Google to better understand non-English language queries. The reason why these are so important is that they increase inventory — and increasing inventory is the single most powerful way to drive increased revenue for digital ads. Not only does more inventory mean more revenue opportunities, both now and in the long-term, but ad prices also become more cost competitive with competitors, increasing access and bringing more advertisers into the ecosystem. To put it another way, LLMs are increasing Google Search’s addressable market, and it’s hard to imagine anything more compelling in terms of revenue potential across all of tech.
Second, we’re building more agentic actions into our advertiser tools. Businesses can now leverage Gemini in conversational experiences within Ads and Analytics Advisor to identify and run recommended actions, such as generating new campaigns. Advertisers use Gemini as a real-time partner to assemble creatives. In Q4 alone, they used Gemini to create nearly 70 million creative assets via text customization in AI Max and PMax…
This is pretty straightforward and has long been the most obvious pay-off for both Google and Meta: AI helps advertisers make ads more easily, and neither company is close to maximizing the possibilities here.
The third area is how we monetize new AI user experiences in Search. We have significantly increased our focus on AI Mode and are in the early stages of experimenting with AI Mode monetization, like testing ads below the AI response, with more underway. For example, we announced Direct Offers, a new Google Ads pilot, which will allow advertisers to show exclusive offers for shoppers who are ready to buy, directly in AI Mode. This new type of sponsored content uses AI to match the right offer provided by the retailer to the right user.
This is probably the least important of the three benefits of LLMs for Google’s search business, at least for now; what is notable about that ranking, however, is that this is basically OpenAI’s entire proposed advertising business. Google has the luxury of not putting ads in Gemini, but that doesn’t mean they aren’t experimenting with ads in conversational AI; they’re just doing it in AI Mode, and their initial offering sounds a lot like what OpenAI is going to do in ChatGPT: put in ads based on the context of the current conversation. Meh.
It’s the “meh” that is scary: Google’s upside revenue potential from LLMs is so large that its side project — which is OpenAI’s entire proposed business — hardly merits a mention in terms of justifying CapEx. There are plenty of justifications elsewhere, while everyone else is going to have to spend to keep up without nearly the obvious high margin benefit.
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