# An Interview with Google Cloud CEO Thomas Kurian About the Agentic Moment
**Source:** https://stratechery.com/2026/an-interview-with-google-cloud-ceo-thomas-kurian-about-the-agentic-moment/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2FuLWludGVydmlldy13aXRoLWdvb2dsZS1jbG91ZC1jZW8tdGhvbWFzLWt1cmlhbi1hYm91dC10aGUtYWdlbnRpYy1tb21lbnQvIl19LCJleHAiOjE3ODIyNzY3NzAsImlhdCI6MTc3OTY4NDc3MCwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMgcG9kY2FzdCByc3MiLCJzdWIiOiJlNWQ0NGE2NC1jYTU4LTQ3MWQtOWZhMy05YzkwODEzYTg4NTAiLCJ1c2UiOiJhY2Nlc3MifQ.pSd7DCW6qzbcuVAv_KuNyFCi15NZ5z6TMozQ8yrrAFYsZaXlY95YBsI-A-ZuRNnOv9-GYp_tpzWB0oLeRFNzpp7hX2WbAvRckTNqSombbarotUfIiHyfhG2WWVch8kybrdlUHxCBn4w5jrzeW-J8SFWP2gxNOnStwQKflh1ocnbzm96F_DzAUuouXjva_IgDmRX5kIG5YomKpXwtXpw_Ch6CCl47RibpKQOwjFMxS5T8sTNx2Wg9doUv4mhOotnTzoYgZv9TtuwN0YH55uWFUzzoboBzSBX-iQOAfJLT2PeAGPfjs2TYzfvbqSUYFZTYxHiCFwIIuOU_B2LpnHISjw
**Date:** 2026-04-23
**Author:** Ben Thompson
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Listen to this post:
Your browser does not support the audio element.
Good morning,
This week’s Stratechery Interview is with Google Cloud CEO
Thomas Kurian
. Kurian joined Google to lead the company’s cloud division in 2018; prior to that he was President of Product Development at Oracle, where he worked for 22 years. I previously spoke to Kurian in
March 2021
,
April 2024
, and
April 2025
.
The occasion for these interviews, at least for the last three years, is Kurian’s annual keynote at Google Cloud Next. You can watch the keynote
here
, and read the blog about Google’s announcements
here
. I spoke to Kurian a week ago, on April 15, and at that time only had access to the afore-linked blog post.
With regards to the keynote, which I have since watched, I thought it was a powerful opening: Kurian returned to last year’s theme, about a unified architecture, but emphasized that the use cases were no longer theoretical or pilots but running at scale for real users. He also emphasized — in a foreshadowing of a point we discussed below — that Google itself was running on the same infrastructure as Google Cloud. Google CEO Sundar Pichai, meanwhile, talked about Google’s capex investment, and that (1) half of it was going towards Google Cloud, and (2) that Google Cloud was running the same stack as Google itself. I sense a theme! Pichai also emphasized security, a point that Kurian was also careful to raise in our talk, before discussing the shift to agents.
To that end, in this interview — which again, was conducted before the keynote — we discuss agents. Specifically, I wanted to get Kurian’s take on the quality of Gemini’s harness (unsurprisingly, he thinks it’s great). Google has an integration advantage, but is it paying off in such a large company? I was also curious about how Google thinks about TPUs specifically and the cloud business generally in terms of balancing its internal needs with external customers like Anthropic. We also talk about the software ecosystem, why Google still believes in partnerships, and why the company was ready to seize the AI moment (hint: it’s because of Kurian).
As a reminder, all Stratechery content, including interviews, is available as a podcast; click the link at the top of this email to add Stratechery to your podcast player.
On to the Interview:
An Interview with Google Cloud CEO Thomas Kurian About the Agentic Moment
This interview is lightly edited for clarity.
Topics:
Agents
|
Integrating With Google
|
Cloud Priorities
|
Cybersecurity
|
Knowledge Graph
|
Models and Partners
Agents
Thomas Kurian
, welcome back to Stratechery. I promise I have recording turned on this year — in fact, I have two recordings turned on.
TK:
Thank you so much, Ben. Good to see you, thanks for taking the time.
Well, I look forward to talking to you. It’s good to talk to you for multiple interviews, much better than talking to you multiple times in one interview, so we’re already doing better this year. But like last year, we are recording before
your Google Next keynote
. We’re actually quite a bit ahead, I think we’re several days ahead, but this podcast won’t be released until after the keynote. Therefore, I’m going to ask the exact same question I asked last year.
Specifically, I like watching keynotes, not for the announcements, but for the framing that happens up front. Last year, that framing was infrastructure, [Google CEO]
Sundar Pichai
actually delivered that at the opening, then you came in and talked about that, and that was the context for everything that you talked about. What is the framing this year?
TK:
The framing this year is that as AI models have become more sophisticated, we see customers evolving the use of AI models from being used to answer questions in a chatbot-like fashion, to actually automating tasks on their behalf, and to automate process flows within the organization. By automating process flows, you both get efficiency improvements, productivity improvements, frankly, you can also change the way that you introduce new products and services to market, for example.
In order to do that well, the technology, what you need is a world-class agent platform and to underpin the agent platform, you need world-class infrastructure. You need the way that the agents interact with your company’s data and your business — so you need capabilities to help an agent really understand the company’s business information and context.
I think, as you’ve seen in the press, AI and cyber have become very contextual now, there’s a lot of concerns that AI will accelerate the speed of cyber attacks on people’s systems, and so we’re going to be talking about how we’re bringing AI and our cyber technology together to protect, including the integration
of Wiz
, and then we’re introducing Gemini Enterprise and
our agent platform
to customers. That’s sort of the theme of what we’re talking about.
You mentioned agents last year, everyone was talking about them to a degree, what has really changed from last year to this year that makes this different? I read your whole blog post, it’s very long, and I think the word “agent” may appear in every single paragraph.
TK:
There’s three or four big things that have changed. The first is capabilities of models — Gemini is able to reason much more effectively as new versions of Gemini have come out. Second, they’re able to maintain long-running memory, which you require if you have an agent that’s automating tasks over many, many steps, it has to maintain a lot of state in memory. Third, their interaction with tools and the rest of the world, there have been good abstractions, skills, tools, MCPs [
Model Context Protocol
], as they’re called, they’re all abstractions for how an agent reasons and interacts with the rest of a company’s systems.
All of them have advanced and so the core capabilities that the models themselves have gotten a lot better, the capability and the ability to use tools and interact with the rest of the world has become a lot better, the abstractions that the world exposes itself to the model has improved and so now you have models have these capabilities to do these very complex tasks.
That all makes sense and certainly tracks. A lot of these announcements, though, as I was going through them, a lot was about the infrastructure around agents, which makes sense — the orchestration, registry, identity, security, all these bits and pieces. All of this is clearly necessary for large enterprises, something they’re going to worry about and ask about.
But the agents have to actually work; do Gemini agents actually work? Because there’s a lot of talk, you know, Gemini was the belle of the ball four months ago, but over the last little bit, it’s been mostly a lot about Anthropic and Claude, Codex, a lot of talk about that, and Gemini, not much talk. What’s your feeling about your actual capabilities, not just agents in general?
TK:
I’ve always said when people ask us about it, I always say, “Let our customers talk about it, rather than we talk about it”, I think you’re going to hear from 500 customers telling their stories at Next. Even people building agents, we have a whole range of them, from Citigroup to Bosch to eBay to Virgin Voyages to Walmart, there’s a whole range of them, Food and Drug Administration, etc., Comcast, Unilever, all of them are going be talking about specific business problems they had.
For example, for Citi, they’ll be talking about a new wealth advisor, Investment Management, where they’re using our agents to research a person’s investment priorities. So a person says, “Here’s my priorities for investment, my kids are going to school, I need this kind of cash flow in order to fund it”, and then it researches your financial portfolio and interacts with you to give you recommendations.
If you look at Comcast, they’re using us for all of the work that they do for consumer services — this is repair, scheduling appointments, dispatching field technicians, there’s very complex flows that have many, many steps and interact with you with a lot of complex systems. If you look at some of these flows, they require all of the capabilities I talked about. So as an example, I want the capability to call a set of tools, and those tools may be I want to book an appointment, so I need calendar, I need to look up, if I’m dispatching a technician, I need to look up spare parts so I need to pull up from my inventory that spare parts inventory, I need to schedule that to be available at the same time as the person who’s going out, I need to update my inventory that have taken something out of it. I mean, these are very, very complex steps.
What’s interesting about all these complex steps and going through all these bits and pieces, it sounds like you’re saying that almost the more constraints there are, the more things you’re bumping up into, is that actually a better environment for instituting these sort of flows just because what you need to do is clearly defined?
TK:
Just being perfectly frank, Ben, having constraints requires the model to be even more intelligent. Just as an example, the number of variants in a process flow that’s complicated many, many steps, the number of different idiosyncratic situations that you may encounter are large so you cannot a priori program every one of them. You need to teach the model to use, for example, to be able to spin up a virtual machine and use a tool in the virtual machine to generate code to deal with some of these situations.
So the most sophisticated thing is where you can give the model a high level set of instructions and have it goal seek an outcome. So you say, “I need to schedule this appointment”, and it turns out there may be 19 different conditions that occur when you’re trying to schedule an appointment and as part of that, you can’t a priori tell the model every single possible condition deterministically. So you need to teach the model, “Okay, the user did not tell you what to do, but the goal was to schedule an appointment, so here is how you generate code to then create a collection of things that can interact with the model and understand what to do”.
Integrating With Google
This is very interesting, you’re walking through this process, this makes a lot of sense. How do you have that conversation with DeepMind? You’re connecting the, “This is the workflow that is needing to happen, these are what we need the model to do, this is where it does well, where it doesn’t”, what’s the working relationship there?
TK:
We have a harness in which all these flows journeys, for example, as we see them with customers, we put them into the harness and they get into the reinforcement loop for Gemini.
How tight is that process?
TK:
Very tight. We have people sitting next to [DeepMind CEO] Demis’ [Hassabis] team, in fact I just came from a meeting with them, that loop is what allows us — we are in a unique position in the market.
We’re unique in three different ways, we’re unique because we have the whole stack of AI technology. In order to do agents well, you need to have a model that takes all these journeys and puts it into the harness that handles the improvement, as we call it, hill climbing, literally every hour of every day, and the complexity of the journeys we see are in some ways much more complicated because in companies, you have many different systems, different conditions, different flows, you may not see that in other domains, like in a pure consumer domain.
In order to do these well, you also need, for example, models need to spin up compute, models need to now hold on to tokens for longer because they need to hold, for example, a KV cache that holds memory about what’s happening during the transaction flow. Having awesome infrastructure, both classical, what we call classical compute machines, and TPUs gives us real strength there.
Third, as you walk through these, one of the things you find is a lot of the systems these models interact with are things like databases, enterprise applications. So understanding the context of these, like for example, “How much inventory do you have?”, defining “What is inventory?”, “What part are you talking about?”, “What part number are you talking about?”, those things require you to have technology that understands the business graph and the dictionary of all the objects and the sources of information in your company. Our strength in data processing gives us some technology that we’re going to be talking about next week around something we call Knowledge Catalog, think of it as as your global dictionary for all information within the company, that’s a unique strength.
And then obviously you don’t want information that’s critical to your company exposed on the Internet, you don’t want your model to get attacked because now it’s handling very complex process flows, you don’t want it hijacked, and so all the anxiety around cyber, we have very specific tools on, so our differentiation is all these pieces working together.
That makes sense, the integration is a big part of your pitch. At the same time, you’re also a big, sprawling company and I think there’s maybe a perception, that I maybe hold, that some of the frontier labs are much more focused, they’re much more top-down about, “This is how our harness is going to work, the way it’s going to use tooling”, and all the things you’re talking about having this feedback flow back in sounds great unless there’s so many different takes on the way it should work and then you have your own internal customers as well. How do you balance having a point of view versus getting stuck in the muck?
TK:
Every product that Google has is on the same Gemini version, on the same day, on the same hour, every one of us is using the same harness.
And you feel good that that harness is where it needs to be — it’s not getting pulled in 50 million directions thanks to all your customers and Google’s workloads?
TK:
Absolutely not, we are very focused on working with Demis and [DeepMind CTO] Koray [Kavukcuoglu] who lead our team to make sure they see the sophistication of these scenarios and we work literally side-by-side, hour-to-hour with them. There’s been a lot of speculation on are we distracted the company…
I don’t think you’re distracted, I think it’s more just a matter of it’s a classic big company versus small company bit. Like a startup comes in and you have a very clear point of view and you don’t have all the enterprise stuff, you don’t have all this protecting the data, or permissions and all those structures, and yet that stuff sort of gets pulled along because there’s such demand to use your product that works really well and then over here it’s like, “Hey, we have everything protected and we have all these things around it”, but does the core product actually deliver?
TK:
The core product is being used by lots of people. The proof of that — we generate 16 billion tokens a minute, up from 10 just last December or January.
Well,
your financial results certainly showed
that as well. There’s a bit where you’re doing so well, I have to be a little hard on you here.
TK:
A lot of people told us we were dead in 2023 — we’re still living.
I think you’re doing more than living, you’re doing very well.
TK:
And so we never say anything negative about anybody else, our results prove for themselves. I always say, let our customers tell the story, they’re doing amazing things with Gemini in companies, enterprise, and they see the value of what we’re delivering for them.
You mentioned that everyone in Google is on the same version of Gemini, using the same harness. Does that also apply to all this infrastructure around agents you’re doing, around sort of identity and security?
TK:
Yeah, in the enterprise, the way that all the infrastructure works is we have configurable mechanisms. Like for example, when you configure an agent, a very simple thing is you want to configure the agent with a different identity from a person, just a very simple example so that you can track, “Who did this transaction? Was it the human or the agent?, because there’s issues like liability. You may want to revoke permissions for the agent at a certain point in time, you want to allow it to only do certain tasks and not everything that the human does so there are controls you want to put around an individual agent and a collection of things that’s separate from the person.
As we bring agents to consumers as part of our Gemini app, very similar concepts want to be exposed, and so the architecture that we use allows us to have those things. The sources of that may be different. In the consumer world, they may use the Google login account, in the enterprise world, they may use a directory to store it, but that’s just an abstraction of our technology to the rest of the world.
Cloud Priorities
We’ve been talking a lot about Gemini agents and the whole Gemini platform, but you also have just the broader Google Cloud platform. One of your major tenants is a company I was just sort of referring obliquely to, which is Anthropic, they’re doing a lot of
inference on TPUs
in particular. If Anthropic wins deals at the expense of Gemini, is that still a win?
TK:
We sell different parts of our stack. One of the things people don’t realize is we monetize many different parts of the stack in different ways. Like Anthropic, there’s a lot of labs that use our stack — in fact, most of the large AI labs use our stack. So if somebody uses TPUs to either to train their model or to use it for inference, we’re monetizing that part of the stack, that gives us resources to then fund our R&D and other investments. Some of the labs use our TPU and our Gemini model, others may use our TPU and then buy our cybersecurity protection for their models.
So as a platform player, we have to allow our technology to be monetized in as many ways as possible and we don’t see it as a zero sum.
Sometimes, though, if you have the SaaS layer and the platform layer and the infrastructure, is there one that is the most important? On one hand, SaaS has the highest margins, it kind of decreases going down. On the other hand, that infrastructure needs to be used, you’re spending a lot of money on it, you want full utilization. How do you think about that in terms of what’s the most important? I know they’re all important, but how do you think about that tradeoff?
TK:
If we were making TPUs just for ourselves, we would have lower volume than we do as a general purpose TPU supplier, which means there would be times of day that we would not be using those TPUs. Do you follow me? Like if you think how chat systems work, they’re very diurnal in nature, because you ask questions when you’re awake and we have a great search business and we have a great Gemini app business, but there would be a certain diurnalty to it during the daytime, there’d be a lot of questions, what about in the evening? Because we sell TPUs in the market, we’re able to offer it at spot to the rest of the world because we have such a large business.
We’re able to also get manufacturing, better terms with suppliers and other things because of a real volume player, and that in turn lowers our cost of goods sold. So there are many more dynamics. The company is very focused on ensuring we win every part of this, not just one part of it. Gemini is obviously a super important initiative for us, and you’ll see the big announcements are around—
For sure, it’s almost all Gemini.
TK:
But I wouldn’t assume that if we do that, the only way to do that is to offer our chips along with our model. We see a strong business offering our chips to many other people and you’ll see all of this is what’s accelerating our differentiation, and you see it in our financial results.
Your financials are incredible, your revenues up, margins are up hugely, I’ve been posting that chart of them for a long time,
last quarter was amazing
. I do have to ask about TPUs, though. You talk about selling our TPU chips, to date that has meant TPU instances on GCP, but now there’s talk about actually selling TPU chips, what’s the status of that? What’s the official word, can I go buy a TPU?
TK:
I’ll explain a little bit what we see. So let me talk briefly about what the announcements we’re making, what the product is being used for, and then how we bring some of it to market.
Okay.
TK:
We’re introducing two big new TPUs
next week. One is TPU 8t, which “t” stands for training, it’s more optimized for training, think of it as 9,600 TPU chips, a single pod, as we call it, it has three times better performance than the current generation, which is already the leading one in the market.
Then there’s 8i, which is “i” for inference, it’s 1,152 chips, three times the SRAM, and it has a new thing called the Collectives Engine, which gives you super efficient calculation performance for inference.
Now, along with that, we are introducing Nvidia VR200, we’re also introducing more ARM capability for classical compute, because people who use models increasingly need to spin up a VM in order to do tasks, and that VMs we see interest in. We’re introducing not just new compute families, but also new storage, there are two new storage offerings. There’s one, the fastest
Lustre
solution in the market, it’s 10 terabits per second, that’s just to give you a sense, it’s like five times number two. We’re also introducing a new thing for ultra low latency — when you do inference, you want super low latency in accessing storage, we call it Rapid Storage, it can give you 15 terabits per second with ultra low latency, like microsecond latency.
So why are we introducing all this stuff? TPUs, definitely a big market is the AI labs, but we’re seeing interest from new segments of the market. So a big new segment is financial services and when I say financial services, capital markets, and the reason is that today, if you’re a trading firm, a capital markets firm, you spend a lot of time running algorithmic trading and algorithmic trading is running numerical algorithms on traditional Intel type cores, x86 cores. Now what they find is that models can do inferencing and the inference performance is actually better than traditional numerical computing.
So that’s one new segment, the second segment is high performance compute. We see a ton of people wanting to do energy modeling, computational fluid dynamics, solid state, there’s a whole bunch of parameters there too.
What’s interesting about those is, you will see at our event, Citadel Securities for example, talk in the keynote about how they’re using TPU. Citadel, as you know, is a large capital markets firm. Department of Energy, they have a
mission called Genesis
, which is the new national lab mission on changing the energy infrastructure for the United States. There’s a big Brazilian largest utility in Brazil, Axia, all of them are examples of people who are part of just the keynote talking about how they use TPUs.
When we look at that, there’s a couple of different things we see. Capital markets firms say, “Hey, if we’re going to replace our algorithmic trading solution, you have to bring TPU to where the venue is”.
Right, because they care about the latency of going to a data center, that’s why they’re all New Jersey.
TK:
Secondly, if you’re a national lab, you have so much data you’ve collected over the last X number of years with your experiments — saying you have to bring all that data to the cloud to reason on it doesn’t make sense, so you will see us putting TPU in other people’s venues, and when we do that, we’re introducing new ways of people also procuring it. When I say procuring it, you buy it as a system, you don’t have to buy it just as a cloud source.
How does this new way of selling, which is almost like a third way, so you have in Google’s data centers, you have bringing TPUs to customers, but then you have
a deal like last week
where between Anthropic and Broadcom and Google, this is going in their data centers. There’s these sort of renegade data centers that have access to power, maybe they were doing Bitcoin or whatever it might be, there’s been a big push to get TPUs into those. Where does that fit into this?
TK:
I would not assume everything you read in the press is true.
Well, the Anthropic announcement was definitely a a big announcement.
TK:
Just to be honest with you, we have a flavor that runs in the cloud and a flavor that runs in third-party data center. The technology, the machines are identical.
My question here is, where is that coming from? Is that part of your TSMC allocation? Is that Broadcom’s? Because no one can get enough compute, so ultimately that goes all the way back to the root.
TK:
The chips are all part of our global — TPU is a Google chip, as you know. So it’s part of global allocation, Broadcom partner who manufactures the TPUs with us and so it’s just part of the overall business. The new thing we’re talking about is just that you can run TPU in other venues.
Makes sense. Will we ever have enough compute? Last year you said, “I think we’re going to resolve it shortly”, it doesn’t seem very resolved, what’s the status there?
TK:
We’ve worked super hard as an organization, our team that’s done our compute infrastructure, our global data centers, machines, all that, they’ve done an amazing job, there’s always a shortage, there’s never enough.
But it doesn’t mean that we’re not — we would not be growing at the rate we are if we didn’t have enough compute. And so there’s more that we want, but there’s also the reality of our teams have done an amazing job, and our customers who are using it will tell you they’re seeing the benefits of the hard work our teams have done.
There’s potential customers in the market, maybe current customers, who may be willing to pay basically any price for compute at this point. How do you think about the short term, “Wow we can actually just make a lot of money right now”, versus, “We need to invest in our products” — you had Microsoft, who I’m not going to ask you to comment on,
but last quarter
they’re like, “Yeah, we allocated less to Azure because we had our own internal workloads”. These are real trade-offs that you need to think about, how do you think about that in terms of GCP?
TK:
We run a balanced portfolio, we want to grow different parts of our business, we sit down as an executive team and also with Sundar and work through how we’re going to balance the different parts of our portfolio.
We see, broad brush, three to four buckets of things. One bucket of things is where we want to grow Gemini as a business, our core Gemini business is doing super well, 16 billion tokens a minute, up 40% since last quarter, even this product called
Gemini Enterprise
, which is our core agent platform, has grown 40% sequentially quarter-over-quarter. So that part of the business, we’re committed to making it super successful, it’s a priority for us.
Second segment of the business is where Gemini is being used inside of some of our core products, so I’ll give you an example. We’ve introduced Gemini inside our threat intelligence tools. Why is that? Because we have real expertise at Google scanning the dark web to identify threats, the problem is there’s so many of them, an average organization doesn’t know which of those many threats apply to them. So we use Gemini to process and prioritize which threats might affect you, it’s 98% accurate and has processed 3.9 million threats in the last year, so that’s an example of Gemini being used as an embedded capability.
Right. The whole
SaaS, PaaS, IaaS
— the SaaS bit is still important.
TK:
There’s that capability, there’s people who want to use Gemini to reason on data in our analytics infrastructure so there’s a second big set where Gemini is an embedded capability and that in turn depends on chips and TPUs and GPUs.
And the third one is offering our compute platform to people. We balance across those because we want all of them to be successful by bringing hardware or out machines to other people’s venues. We’re broadening our TAM, total addressable market, in that part of the business also we see a different cash flow model than if you were putting CapEx so there’s a lot of different parameters we have to balance.
All those ones you listed for you to make trade-offs on, but then you also have to get in a meeting with Sundar and the other leaders of Google to make trade-offs with DeepMind and their R&D and with the consumer products. What are those meetings like?
TK:
We have a regular set of cadence of meetings and we balance the different priorities and we want to be successful on many different dimensions. I wouldn’t assume all of these dimensions are zero sum. Like, for example, when we offer our product in other venues, we drive cash flow in a different way than putting CapEx — so to some extent, that changes the boundary of how we offer our capital boundary as a company also.
So I think there’s a general view of there’s a compute shortage, and if you give one, you will have to take from another, I think that’s an overly simplistic view of it, having been in this for long enough and having been, my team does both parts. We are responsible for delivering all the infrastructure for Alphabet, and they’ve done an amazing job doing that, and I’m also responsible for running the cloud business, and you can tell that our differentiation, I come back to this, it would be a different problem if you didn’t have demand. You can, and whenever I ask us to prove that you’ve got demand, I always say, “Look at our results”.
Well that’s been the biggest change even since January where there was still some sort of latent skepticism about, “Is all this CapEx worth it?”, feels like those questions have been completely erased at this point.
Cybersecurity
Speaking of markets in the last couple months, all these SaaS companies are getting killed in the market, you have a big SaaS business, you’re definitely not getting killed in the market, why are you escaping it?
TK:
I think we have transitioned. The core fundamentals is finding, and this is the way we approach our product portfolio, I’ll give you a very simple example — 2023, we said, “Hey, at 2022, we said, we’re not just going to build a secure cloud, we’re also going to start offering cybersecurity products”. When we entered the market and then we looked at what other things people — the value of cyber is driven by two dimensions. Dimension one, “What is it protecting?”, because it has to protect high value things, and the other element is, “How good is it at protecting?”, “What’s the technology that it’s going to use to protect?”. So we said, “There are only two valuable places to protect, there’s either the endpoint”, which is your desktop on which apps run, other people are doing a good job there, the rest of the world is moving all their applications and data to the cloud, let’s protect that.
Second, we said AI is going to find vulnerabilities because at the end of the day, finding vulnerabilities is a question of a model really understanding code, and if you can find vulnerabilities at a much more accelerated rate, people need to fix vulnerabilities at an incredibly aggressive, fast rate, and so we started a set of work back then and we said to ensure that we have the leading product portfolio, let’s acquire Wiz.
We’re now working on, you’ll see a number of announcements, there’s the Threat Intelligence Agent that allows us to you know understand the threat landscape and use Gemini to prioritize what you should pay attention to where a lot of people are using Gemini to actually scan their code, and then we’re introducing three new
Gemini-powered agents with Wiz
, one called Red Agent — think of it as continuous red-teaming of your infrastructure, a Blue Agent that says, “Okay, I looked at what’s happening with the Red team and I know what you need to go fix”, and a Green Agent that says, “I’ll fix it for you”, and that’s going to cut the cycle time.
Like our Threat Intelligence Agent, you will see reference customers from Chicago Mercantile Exchange, there’s a whole bunch of them talking next week, about how it takes an investigation that just take 30 minutes and does it in 30 seconds, that allows you to get response.
Now, this is an example of when we started, people said, “Why would a hyperscaler want to become a cyber company?”, and we were like, “It’s not about being a hyperscaler, it’s about solving that problem at the intersection of — AI is going to accelerate cyber threats and you cannot do repair the old way”.
Yep, it really answers the question that people had when you acquired Wiz, which is, “
Why do you need to buy it
, why can’t you just build it?”. It’s like, “Well, in two years, it’s going to be too late”. That’s, I think, also felt very tangibly right now.
TK:
Today, we are where we are because we made that bet.
Yep.
TK:
So when people ask, “Why are you guys growing even in sectors that may be struggling?”, it’s because we have differentiation and we made those decisions early.
Knowledge Graph
That makes sense. One of the interesting product announcements this year is this
cross-cloud lakehouse
which lets customers leave their data in AWS and Azure while still being query-able by by your services instantly. Is this the final admission that even if enterprises love your AI and love Gemini, they’re not going to shift all their workloads if they’re already on other clouds? Lots of your products have been about that in the past — even Wiz is about that to a certain exten — but is that just the reality? There’s not going to be a huge amount of spillover as far as pulling things from other clouds to Google.
TK:
If you use
BigQuery
today, you don’t have to move your transactional applications to BigQuery. If you’re using Gemini today, you can keep your applications in another cloud and use Gemini to reason on it.
The problem we were trying to solve is a very specific problem. Today, when people talk about lakehouses, they say, “We have a multi-cloud lakehouse”. What they really mean is their lakehouse can be run on any cloud, but when it’s running on a particular cloud, you can only access the data in that cloud.
And then people say, “That’s crazy, because I’ve got data in a SaaS app like Salesforce”, “I’ve got data in an ERP system”, “I’ve got data in Azure and Amazon, and I’d like to use analysis across all this”, one choice to customers is copy all that data out, that’s expensive for them because of the egress tax that everybody imposes.
So we said, “Keep your data there, we can still give you world-class analysis”, and so it’s solving that custody. The customer has a problem, they want to do analysis, there are four things we’re giving them. Keep your data where it is, no matter how many clouds. We’re not talking about a single cloud lakehouse, we’re talking about across all the clouds and across all your SaaS apps, we can do analysis, one. Two, people said, “How fast can you run?”, the proof that we’re going to show is we’re 2x better in price performance than the market leader, right out of the gate. The third one, people said, “I’m not an expert on writing Python and Spark, can you give me essentially vibe coding for Python and Spark?” — yes, you’ll see us introduce a agent manager to generate Python and Spark code using Gemini. And then the last one people said today, Ben, if you ask a question, I was using that example of field service, I’m running a query on, “How much inventory do I have in parts?”, before I send the technician — that information sits inside an application in a set of tables in a database, most organizations have thousands of databases, teaching the model which system has what information, and the notion of part is split across 10 different tables in this particular database, you need a system that builds that semantic graph of all the information in your company.
Right, this is the
Knowledge Catalog
.
TK:
That’s the catalog, and that gives you super good accuracy when you’re researching information.
So we put all this together and back to, we’ve always been super pragmatic. I always say enterprises have certain problems that they see independent of a cloud. For example, security — they don’t want to buy three different security tools from three different hyperscalers. Analytics — they don’t want to buy three different analytic tools from three different hyperscalers. Others have chosen to say, “My stuff only works with my cloud”, that’s why enterprises often choose us, because we work across all the clouds and all the security environments you have and you can keep stuff wherever you are and use Gemini to access and automate stuff for you, so all that is just part of listening to customers.
This all makes perfect sense, particularly this bit about the Knowledge Catalog definitely fits how I’ve been thinking.
I wrote about this a few years ago
about this importance of this whole layer and understanding it, it’s a bit of a big lift to get this in place. You have some sort of analog, say, with like a Palantir that’s putting in like their
ontology thing
. They have
FDEs
out on the site, multi-month projects doing this. You have
OpenAI talking about Frontier
, their agent layer, and they’re partnering with all the tech consultancies to build this out. Is this going to entail a lot of boots on the ground to get this graph working and functional in a way that your agents can operate effectively across it?
TK:
We’re not competing with Palantir, we’re not building a semantic dictionary or an ontology. What we’re doing is, today I’ll give you the closest analogy.
Okay.
TK:
Today when you use a model, let’s say you use Gemini, and you ask a question, Gemini goes through reasoning, and then it shows you a citation. A citation is, “How did I answer the question and what’s the source I derived from?”
Now imagine that citation was a query that needed to go to a folder in, for example, a storage system because there’s some documents there and a database because, for example, in a part number, just think about there’s a part number document that lists all the part numbers and sits in a drive and then that part number you need to fetch out to say it’s the modem that the guy is coming to repair, and that’s mapped to a table in a database.
So what the graph does, we use Gemini, so we don’t need humans, we use Gemini to say, “Hey, go and read all these documents in these drives and extract the information from it and then match that to the database table that has the reference to the part number”, and so then when Gemini turns around and says, “I got this query about how much inventory of modems they are”, the first thing it does is it says, “Okay, go to the Knowledge Catalog and it says modem is part number one, two, three, four, five”, and then it says, “By the way the table in the database that has the inventory information about this part number is this table, here’s a SQL”, it then makes the quality of what we generate higher and then when it answers the question it shows back — back to your, “Trust my data”, it shows a grounding citation saying, “That’s where we got it from.”
What do you need from everyone in the ecosystem if this is going to work, all these SaaS applications and across all these entities, not just what’s in your databases, but what’s in a SAP database or whatever it might be. How do you get them on board so you can understand their data and build this Knowledge Catalog?
TK:
Really easy, the first thing is to use the lakehouse we support a standard format, industry is very standardized on it, it’s called
Iceberg
, so anybody who supports Iceberg we can talk to it and so that’s pretty much the whole world right now, so we don’t need them to do anything special to make it work.
Second, all of these business systems have API specifications, and our Catalog can learn off of those API specifications, we just teach Gemini to process those, and so we can build a catalog pretty quickly.
Models and Partners
There are reports that OpenAI on Amazon Bedrock has been massively popular. Are we going to get OpenAI on Vertex?
TK:
We would love to have them. We are announcing a variety of third-party models on Vertex, including Anthropic, including open source, we’re open to any model provider on Vertex.
I believe you. That’s going to be great, when and if it happens.
Just one last question. We’ve talked in this interview series previously about how I think, and this is before your time, it’s not your fault, that Google Cloud missed the boat in terms of being a point of integration for the Silicon Valley enterprise ecosystem. I think last year I asked you if AI represented a new opportunity to do that. However, is there a bit where the models, and you’re in this game because you have one of the leading models, is just going to eat everything and is going to gradually expand to do the jobs and everyone else is just going to be a system of record? It’s going to be all one interface, that the integration, such that it is, is all under the surface, it’s not necessarily tying things together in user space. Is Gemini going to be all the user needs in the long run?
TK:
We don’t see it that way. In fact, one announcement you’ll see us make next week is how many third-party SaaS and ISV [independent software vendors] vendors are embedding Gemini not just as a model, but as an agent platform, because they want to build agents and our agent platform, you can use to build agents, not just our own agents, but they can use it and there’s a lot of independent software vendors embedding those agents.
And do they see you as like, “Hey, you’re another established guy, let’s go with you because we don’t know what these other folks are up to, they want to eat all of us”?
TK:
It’s also the capabilities. The differentiation, I would say, is just think about you’re a bank or an insurance company, and think about you’re a SaaS vendor selling to them or an independent software vendor, there’s a number of things around identity, policy management.
For example, if you’re a bank and you have documentation about a person and their credit, you cannot have that egress the bank’s boundary, so we have a gateway that protects against that, that’s part of our agent platform. You want to have auditability on the agent to say which agent did what task on what system when, that’s built into the platform. You want to have a registry where you expose all your skills so that people are not duplicate building all these things, we have a registry that does that.
This is sort of the bit we started with at the beginning, it’s not just going to benefit your agents it’s going to benefit all agents, that’s sort of the pitch.
TK:
So one of the things that people like is the fact that we built all that plumbing for them, and so they don’t have to invest in it, they can focus on the value add that they have on their agent side.
Additionally, for companies in this broader ecosystem, the cost of agents — and it becomes part of their bill of materials, if you will, the cost of goods sold — the fact that we have these super efficient chips that run inference with such efficiency eventually translates into cost efficiency for a third party that’s building on top of us. You can see that all of those benefits, we’re taking away all that complexity for these guys, so we definitely don’t see that all the ecosystem is going to die, we definitely don’t see that, we see us facilitating that ecosystem.
You’ll see us announcing a number of things, including a substantial investment in dollars to accelerate the partner ecosystem around our platform.
Thomas Kurian, great to talk to you again.
TK:
Thanks so much, Ben. And just in closing, the work that we announce every year at Next is a testament to all those customers and partners who gave us a shot to work with them. You’ll see them telling their story, and it’s a testament to all those people at our organization that made a bet to solve a technical problem a different way, or to bring our technology — we’ve hugely expanded our go-to-market organization, and doing all that with growing top line and operating income at the same time is a testament to the demand we see for our products and services.
I mean, six, seven years ago, people used to tell us, “You have no shot in the market”, I think we are now truly uniquely positioned. Name one other player that has the stack of technology to do AI, when I look forward, I think there’s no question in people’s minds that the central problem that companies need to solve and technology providers need to solve is how good is the capability you offer for AI. We’re the only ones with chips, models, the context to feed the models from all of the data infrastructure, the cyber tools, and then a world-class agent platform.
I would also add, you’re actually an enterprise company now. The things you talked about, pragmatism, listening to customers, all these pieces, GCP did not have at all a decade ago — there’s a bit where Wiz was ahead of its time, for sure, being forward-looking, but there’s a bit where the organization is ready for this moment in a way I don’t think it would have been previously. I find it very impressive.
TK:
We are very proud of the team. Also for Alphabet, to do AI well, you have to do a couple of things. One, see the breadth of problems that we see, we see all of the consumer problems, we see the enterprise problems, we see the problems that search sees, we see the problems that YouTube needs, we see all those that we’re solving with AI, that gives us a breadth of capability that the model needs to solve, that over time is a real strength because the diversity of problems we’re solving.
Second, in order to do AI well, you have to invest, and in order to invest, you need to monetize in as many different ways as possible. I think we are very confident that our team, we do not have any hubris, but we are confident in where we stand.
I think it’s very impressive. I look forward to your keynote.
TK:
Thanks so much Ben, it’s a privilege to talk to you every year and it’s great that you took the time to speak with me.
And it’s all recorded, I can promise you that!
This Daily Update Interview is also available as a podcast. To receive it in your podcast player,
visit Stratechery
.
The Daily Update is intended for a single recipient, but occasional forwarding is totally fine! If you would like to order multiple subscriptions for your team with a group discount (minimum 5), please contact me directly.
Thanks for being a supporter, and have a great day!
Share
Share on Facebook (Opens in new window)
Facebook
Share on X (Opens in new window)
X
Share on LinkedIn (Opens in new window)
LinkedIn
Email a link to a friend (Opens in new window)
Email