# An Interview with Nvidia CEO Jensen Huang About Accelerated Computing
**Source:** https://stratechery.com/2026/an-interview-with-nvidia-ceo-jensen-huang-about-accelerated-computing/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2FuLWludGVydmlldy13aXRoLW52aWRpYS1jZW8tamVuc2VuLWh1YW5nLWFib3V0LWFjY2VsZXJhdGVkLWNvbXB1dGluZy8iXX0sImV4cCI6MTc4MjI3Njc3MCwiaWF0IjoxNzc5Njg0NzcwLCJpc3MiOiJodHRwczovL2FwcC5wYXNzcG9ydC5vbmxpbmUvb2F1dGgiLCJzY29wZSI6ImZlZWQ6cmVhZCBhcnRpY2xlOnJlYWQgYXNzZXQ6cmVhZCBjYXRlZ29yeTpyZWFkIGVudGl0bGVtZW50cyBwb2RjYXN0IHJzcyIsInN1YiI6ImU1ZDQ0YTY0LWNhNTgtNDcxZC05ZmEzLTljOTA4MTNhODg1MCIsInVzZSI6ImFjY2VzcyJ9.REuBUGVOdhLLTs1aNHMfyKefXbHKa8XjkWGfSZMiaREPSElRHY-9n5aFV313OQPJhFYduvjY1CvuUp47kY8KT7Zl6O9-qSmzd853yY6BP_8x6lPGoHRzQOp_yb6_C8l10dhIhYrrMl6G9qRC3RWkfrBktkP_KwXzJA7OCjrmgYXAZfwvQfSM7ClhCeeNmntq1TXfCOMXYzLI2mpfXzC2KM8ssyBOjGQIXcDArEpsn56mRwvwjcWb3-kpYOwjk50Lqjn38CPXXF3fxJFRlBDC3GTypbKSZ-AWRvVGDRBmU9-Br5etfmDwq8_qyAOq7M8lKFApUb8Yi3LXrklsNlhmcA
**Date:** 2026-03-17
**Author:** Ben Thompson
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Listen to this post:
Your browser does not support the audio element.
Good morning,
This week’s Stratechery Interview is running early this week, as I had the chance to speak in person with Nvidia CEO Jensen Huang at the conclusion of his
GTC 2026 keynote
, which took place
yesterday in San Jose
. I have spoken to Huang four times previously, in
May 2025
,
March 2023
,
September 2022
, and
March 2022
.
In this interview we talk about a keynote that came across like a bit of a history lesson, and what that says about a company that still feels small even as it’s the most valuable in the world, as well as what has changed in AI over the last year. Then we discuss a number of announcements that might feel like a change in approach (although Huang disagrees), including Nvidia’s burgeoning CPU business and the Groq acquisition. Finally we discuss scarcity in the AI stack and how that affects Nvidia, the China question, and Huang’s frustration with doomers and their influence in Washington.
As a reminder, all Stratechery content, including interviews, is available as a podcast; click the link at the top of this email to add Stratechery to your podcast player.
On to the Interview:
An Interview with Nvidia CEO Jensen Huang About Accelerated Computing
This interview is lightly edited for clarity.
Topics:
Nvidia’s CUDA Core
|
Reasoning and Coding
|
The Role of CPUs in Accelerated Computing
|
Groq
|
China and the Doomers
|
Nvidia’s Nature
Nvidia’s CUDA Core
Jensen Huang, welcome back to Stratechery.
JH:
It’s great to be with you.
You literally just walked off the stage, went a little long, I think, but you spent a lot of
this keynote
, which I quite enjoyed, explaining what Nvidia is, starting with the history of the programmable shader, the launch of CUDA 20 years ago. We don’t need to spend too much time recounting this, you did a good job, and Stratechery readers are certainly familiar — sorry, this is a bit of a lead up here —
Stratechery readers are familiar
, and I remember this exactly, someone asked me to explain how is it that Nvidia can announce so many things at a single GTC, this is like six, seven years ago, maybe even longer than that, and
I explained the whole thing with CUDA and all the libraries is it’s just sort of doing the same thing again and again
, but for specific industries. That’s the story you told today, and it’s kind of a back-to-the-future moment after the last few GTC keynotes have kind of just been pretty AI-centered,
CES was pretty AI-centered
. Why did you feel the need tell that story now? To recast CUDA and why is it important?
JH:
Well, because we’re going into a whole lot of new new industries and because AI is going to use tools, and when AI uses tools, those are tools that we created for humans. AI is going to use Excel, AI is going to use Photoshop, AI is going to use logic synthesis tools, Synopsis tools, and Cadence tools. Those tools have to be super-accelerated, they’re going to use databases they have to be super-accelerated because AI’s are fast. And so I think in this era, we need to get all of the world’s software now as fast as possible accelerated, and then put them in front of AI so that AI could agentically use them.
So is that a bit where we’ve already done this for a bunch of sectors and now we’re going to do it for a bunch more?
JH:
Yeah, a whole bunch more. For example, data processing.
Well, that was sort of a surprise. I didn’t expect you to be opening
with an IBM partnership
.
JH:
Yeah, right, that kind of puts it in perspective. I mean, they really started it all.
You wrote last week that
AI is a five-layer cake
: power, chips, infrastructure, models, and applications. Is there a concern that in the last four or five years, that you are worried about being squeezed into the chips box, so it’s important to both remind people and also yourselves about you being this vertically integrated company — not just in terms of building systems, but into the entire software stack, you’re not just a chip company.
JH:
I guess my mind doesn’t start with, “What I’m not”, it starts with, “What do we need to be?”. And back then, we realized that accelerated computing was a full stack problem, you have to understand the application to accelerate it. We realized that we had to understand the application, we had to have the developer ecosystem, we needed to have excellent expertise in algorithm development, because the old algorithms that were developed for CPUs don’t work well for GPUs, so we had to rewrite, refactor algorithms so that they could be accelerated by our GPUs.
If we do that, though, you get 50 times speed up, 100 times speed up, 10 times speed up, and so it’s totally worth it. I think since the very beginning, we realized, “Ok, what do we want to do, and what does it take to achieve that?”.
Now, today we’re building AI factories, we’re building AI infrastructure all over the world. That’s a lot more than building chips, and building chips is obviously important, it’s the foundation of it.
Right, that’s like one full stack of doing the networking and doing the storage, and now you’re into CPUs.
JH:
Now you’ve got to put it all together into these giant systems — a gigawatt factory is probably $50, $60 billion. Out of that $50, $60 billion, probably about, call it $15, $17 or so, is infrastructure: land, power, and shell. The rest of it is compute and networking and storage and things like that, and so that level of investment, unless you’re helping customers achieve the level of confidence that they’re going to succeed in building it, you just have no hope, nobody’s going to risk $50 billion.
So I think that that’s the big idea, that we need to help customers not just build chips, but build systems and then after we build systems, not just build systems, but build AI factories. AI Factories has a lot of software inside, it’s not just our software, it’s a ton of software for cooling management and electricals and things like that, and redundancies and a lot of it is over-designed, it’s over-designed because nobody talked to each other.
When you have a lot of people who don’t talk to each other, integrate systems, you have to, by definition, over-design your part of it. But if we’re working together as one team, we’ll make sure that we can push the limits and get more throughput out of the power that we have or save money for whatever throughput you want to have.
Just to go back to that software bit, you mentioned Excel wasn’t designed to be used by AI. You have things like
Claude has this new functionality to use Excel
, so when you talk about that, you want to invest in these libraries, is that to enable models like that to do better? Or is that something for Microsoft or for enterprises — you want to use this, you don’t want to be beholden to this sort of other player in the world?
JH:
Well, SQL’s a good example. SQL’s used by people, and we bang on the SQL systems like anybody else, and it is the ground truth of businesses. Well, it’s not just gonna be people banging on our SQL database now, it’s gonna be a whole bunch of agents banging on it.
Right, they’re gonna do it way faster.
JH:
They’re gonna need to do it way faster. And so the first thing we have to do is accelerate SQL, that’s kind of the simple logic of it.
That makes sense. In terms of models, you noted that language models are only one category. “Some of the most transformative work is happening in protein AI, chemical AI, physical simulation, robots, and autonomous systems”, and this is from the piece you wrote last week. You’ve previously made this point while noting in other keynotes, “Everything is a token”, I think, is a phrase that you’ve used before. Do you see transformers as being the key to everything, or do we need new fundamental breakthroughs to enable these applications?
JH:
We need all kinds of new models. For example, transformers, its ability to do attention scales quadratically, and so how do you have quite long memory? How can you have a conversation that lasts a very long time and not have the KV cache essentially become, over time, garbage?
Or have
entire racks of solid-state drives that are holding KV cache
.
JH:
And of course, let’s say that you were able to record all of our conversation, when you go back and reference some conversation, which part of the reference is most important? There needs to be some new architecture that thinks about attention properly and be able to process that very quickly.
We came up with a hybrid architecture of a transformer with an SSM, and that is what enables
Nemotron 3
to be super intelligent and super efficient at the same time, that’s an example.
Another example is coming up with models that are geometry aware, meaning a lot of things in life, in nature, are symmetrical. And so when you’re generating these models, you don’t want it to generate what is just statistically plausible, it has to also be physically based, and so it has to come out symmetrical. And so
cuEquivariance
, for example, allows you to do things like that.
So we have all these different technologies that are designed — or, for example, when we’re generating tokens in words, it comes out in chunks at a time, little bits, tokens at a time, when you’re generating motion, you need it to be continuous. And so there’s discrete information that you generate and understand, and there’s continuous information that you want to generate and understand. Transformers is not ideal for both.
Right, that makes sense.
Reasoning and Coding
One more quote from the piece, you write, “In the past year, AI crossed an important threshold. Models became good enough to be useful at scale. Reasoning improved. Hallucinations dropped. Grounding improved dramatically. For the first time, applications built on AI began generating real economic value”. What specifically was that change? Because I think about the timing, I feel like this upcoming year is definitely about agents,
I just wrote about it today
— but for last year, was that the reasoning? Was that the big breakthrough?
JH:
Generative, of course, was a big breakthrough, but it hallucinated a lot and so we had to ground it, and the way to ground it is reasoning, reflection, retrieval, search, so we helped it ground. Without reasoning, you couldn’t do any of that, and so reasoning allowed us to ground the generative AI.
And once you ground it, then you could use that system to reason through problems and decompose it, and decompose it into things that you could actually do something about, and so the next generation was tool use. Turns out it probably tells you something that search was a service that nobody paid for, and the reason for that is getting information is very important and very useful but it’s not something you pay for. The bar to reach to get somebody to pay you for something has to be higher than just information. “Where’s a good restaurant?” — information is just, I don’t think is worthy enough to get paid for. Some people pay for it, I pay for it.
We now know that we’ve now crossed that threshold. Not only is it able to converse with us and generate information for us, it can now, of course, do things for us. Coding is just a perfect example for that. If you think about it for a second, you realize this, coding is not really the same modality as language, you have to teach it empty spaces and indentations and symbols, it’s almost like a new modality and you can’t generate code just one token at a time, you have to reflect on the chunk of code. That chunk of code has to be factored properly and has to be optimal and has to obviously compile, it has to be grounded not on probable truth, it has to be grounded on execution.
Right, does it run or not?
JH:
It has to run or not. And so I think the code, learning that modality was a big deal. Once you’re able to now do — we pay engineers several hundred thousand dollars a year to code, and so now they have a coding assistant. They could think about architecture. Instead of describe programs in code, which is very laborious, they can now describe software in specification, which is much more abstract and allows them to be much more productive. And so they describe specification, architecture, they’re able to use their time to solve and innovate, and so our software engineers 100% use coding agents now. Many of them haven’t generated a line of code in a while, but they’re super productive and super busy.
Do you think there is a temptation to over-extrapolate from coding, though, precisely because it’s verifiable? You have this agent idea where they can go — it’s not just that they will generate code, then they can actually verify it, see if it works, if it doesn’t, they can go back and do it again, and this can happen all without humans because there’s a clear, “Does it work or not?”.
JH:
Well, because you can reflect, you could have, let’s say, design a house. Designing a house or designing a kitchen used to be the work of architects, designers, but now you could have carpenters do that. So now you elevated the capability of a carpenter, now you use an agent for that carpenter to go design a house, design a kitchen, come up with some interesting styles. The agent doesn’t have some tool to execute.
However, you could give an example. You say, “these are the styles I’m looking for, I want it to be aesthetic like that”. Because the agent is able to reflect, is able to compare its quality of code, its quality of result against some reference, it could say, “You know what, it didn’t turn out as well as I hope, I’m going to go back at it again”, and so it iterates. It doesn’t have to be fully executable, in fact, the more probabilistic, the more aesthetic, the more subjective, if you will, AI actually does better.
Right, well that’s why you almost have two extremes. You have generating images where there’s no right answer and then you have coding where there is a right answer and AI seems to do good on those sides and the question is how much will it collapse into the middle there.
JH:
We’re fairly certain it could do architecture now, we’re fairly certain it could design kitchens and living rooms.
The Role of CPUs in Accelerated Computing
Well, to this point, one of the big things with agents coming online is, you’ve talked a lot about accelerated computing, I think you’ve trash talked as it were, maybe the CPUs to the day, they’re all gonna be removed, like everything’s gonna be accelerated. Suddenly CPUs are hot again. It turns out they’re pretty useful and important to the extent you are selling CPUs now,
how’s it feel to be a CPU salesman
?
JH:
There’s no question that
Moore’s law
is over. Accelerated computing is not parallel computing. Go back in time — 30 years ago, there were probably 10, 20, 30 parallel computing companies, only one survived, Nvidia and the reason why is because we had the good wisdom of recognizing the goal wasn’t to get rid of the CPU, the goal was to accelerate the application.
So what I just falsely accused you of was actually true for everybody else.
JH:
We were never against CPUs, we don’t want to violate
Amdahl’s Law
. Accelerated computing, in fact, inside our systems, we choose the best CPUs, we buy the most expensive CPUs, and the reason for that is because that CPU, if not the best and not the most performant, holds back millions of dollars of chips.
When it comes to
branch prediction
, you worried about wasting CPU time, now you’re worried about wasting GPU time.
JH:
That’s right, you just never can have GPUs be squandered, GPU time be idle. And so we always use the best CPUs to the point where we went and built Grace so that we could have the highest performance single-threaded CPU and move data around a lot faster. And so accelerated computing was never against CPUs, my basis is still true that Amdahl’s Law is over, the idea that you would use general purpose computing and just keep adding transistors, that is so dead, and so I think fundamentally we’re not against CPUs.
However, these agents are now able to do tool use, and the tools that they want to use are tools created for humans and they’re basically two types. There’s the stuff that we run in data centers and most of it is SQL, most of it is database related, and the other type is personal computers. We’re now going to have AIs that are able to learn unstructured tool use, the first type of tool use is structured. CLIs are tool use, APIs, they’re all structured tool use, the commands are very explicit, the arguments are explicit, the way you talk to that application is very specific.
However, there’s a whole bunch of applications that were never designed to have CLIs and APIs and those tools need AIs to learn multi-modality, unstructured, and it has to go and be able to go surf a website and it has to be able to recognize buttons and pull down menus and just kind of work its way through it like we do. That tool use are going to want to use PCs and we have both sides, we have incredibly great data processing systems, and as you know, Nvidia’s PCs are the most performant in the world.
So what makes an agent-focused CPU different from other CPUs? So you’re going to have a rack of just Vera CPUs.
JH:
Oh, really good, excellent. So the way that CPUs were designed in the last decade, they were all designed for hyperscale cloud and the way that hyperscale cloud monetizes CPUs is by the CPU core. So you want to design CPUs that have as many cores as possible that are rentable, the performance of it is kind of secondary.
You’re dealing with web latency by and large.
JH:
That’s exactly right, exactly. And so the number of CPU instances is what you’re optimizing for. That’s why you see these CPUs with a couple of hundred, 300, 400 cores coming. Well, they’re not performant and for tool use, where you have this GPU waiting for the tool use—
And you’re going over NVLink.
JH:
That’s right, you want the fastest single-threaded computer you can possibly get.
So is it just the speed? Or does the CPU itself need to be increasingly parallel so it doesn’t have misses and things like that? Or so it’s like just all the way down the pipeline is very different?
JH:
Yeah, the most important thing is single-threaded performance and the I/O has to be really great. Because it’s now in the data center, the number of single-threaded instances running is going to be quite high and therefore, it’s going to bang on the I/O system, it’s going to bang on the memory controller really hard. Vera’s bandwidth-per-CPU core, bandwidth-per-CPU, is three times higher than any CPU that’s ever been designed, and so it’s designed so that it has lots and lots of I/O bandwidth and lots and lots of memory bandwidth, so that it never throttles the CPU. If the CPU gets throttled, then we’re holding back a whole bunch of GPUs.
Is this Vera rack, is it still, you talked about it being very tightly linked to the GPU rack, but is it still disaggregated so that the GPUs can be serving multiple different Vera cores? Whereas you have a Vera core on a board with-
JH:
Yeah.
Okay, got it, that makes sense. How does
your Intel partnership
and the NVLink thing fit into this, if at all?
JH:
Excellent. Some of the world is happy with Arm, some of the world still needs, particularly, you know, enterprise computing, a whole bunch of stacks that people don’t want to move and so x86 is really important to that.
Has the resiliency of x86 code been surprising to you?
JH:
No. Nvidia’s PC is still x86, all of our workstations are x86.
Groq
I did want to congratulate you, as you talked about in the keynote today,
you are the token king
. So in your article, you also talked about that energy is the first principle of AI infrastructure and the constraint on how much intelligence the system can produce. If that’s the case, if it’s the amount of tokens you can produce and you’re constrained by how much energy is in the data center, why do companies even try to compete with the token king?
JH:
It’s going to be hard because it’s not reasonable to build a chip and somehow achieve results that are fairly dramatic.
Even in the case of Groq
, Groq couldn’t deliver the results unless
we paired it with Vera Rubin
.
Well tell me about this, my next question was about Groq.
JH:
So if you look at the entire envelope of inference, on the one hand, you want to deliver as much throughput as possible, on the other hand, you want to deliver as many smart tokens as possible — the smarter the token, the higher price you could charge. These two balance, this tension of maximizing throughput on the one hand, maximizing intelligence on the other hand, is really, really tough to work out.
I do have to say,
last year you had a slide talking about this Pareto Curve
, and you talked about, I think it was when you introduced Dynamo, how your GPUs could cover the whole thing, and so you didn’t have to think about it, just buy an Nvidia GPU, and Dynamo will do both. But now you’re here saying, “Well, it doesn’t quite cover the whole thing”.
JH:
We cover the whole thing still better than any system that can do it. Where we could extend that Pareto is particularly on the extremely high token rates and extremely low latency, but it also reduces the throughput. However, because of coding agents, because they’re now AI agents that are producing really, really great economics, and because the agents are being attached to humans that are actually making extremely, I mean, they’re extremely valuable.
Right, they’re even more expensive than GPUs.
JH:
And so I want to give my software engineers the highest token rate service, and so if Anthropic has a tier of Anthropic Claude Code that increases coding rate by a factor of 10, I would pay for it, I would absolutely pay for it.
So you’re building this product for yourself?
JH:
I think most great products are kind of because you see a pain point and you feel the pain point and you know that that’s where the market’s going to go. We would love for our coding agents to run 10 times faster, but in order to do that, it’s just very, very difficult to do that in a high throughput system and so we decided to add the Groq low latency system to it and then we basically co-run, co-process.
Right. And is this just separating
decode
and
prefill
?
JH:
We’re going to do even the high processing, high FLOPS part of decode, attention part of decode.
So you’re disaggregating even down to the decode level.
JH:
That’s right, and that requires really tight coupling and really, really close integration of software.
So how are you able to do that? You say you’re shipping later this year, this deal was just announced a couple of months ago.
JH:
Well, we started working on disaggregated inferencing, Dynamo really put Nvidia’s ideas on the table. The day that I announced Dynamo, everybody should have internalized that, I was already thinking about, “How do we disaggregate inference across a heterogeneous infrastructure more finely?”, and Groq’s architecture is such an extreme version of ours, they had a very hard time.
Dynamo was a year ago, and Groq just happened sort of over Christmas. Was there an event that sort of made you think this needed to happen?
JH:
Well remember, I announced Dynamo a year ago, we’ve been working on Dynamo for two years, so we’ve been thinking about disaggregated inference thing for two, three years, and we started working with Groq maybe before we announced the deal, maybe six months earlier. So we’ve been thinking about working with them about unifying Grace Blackwell and Groq fairly early on.
So the interaction with them, I really like the team and we don’t want their cloud service. They had another business that they really believe in and they still believe in, they’re doing really well with it and that wasn’t a part of the business that we wanted, so we decided to acquire the team and license the technology. Then we’ll take the fundamental architecture and we’ll evolve it from here.
So it was just a happy coincidence or not a happy coincidence, maybe not a happy coincidence.
JH:
Strategic serendipity.
Because OpenAI, you know, has an instance now with Cerebras
that they announced in January
.
JH:
That was done completely independent of us and frankly, I didn’t even know about it, but it wouldn’t have changed anything. I think the Groq architecture is the one I would have chosen anyways, it’s much more sensible to us.
Was this the first time where there was sort of an ASIC approach that sort of made you raise your eyebrows like, “Oh, that’s actually fundamentally different”?
JH:
No, Mellanox
.
That’s a good example.
JH:
Yeah, Mellanox. We took a bunch of our computing stack and we put it into the Mellanox stack. NVLink wouldn’t be possible, you know, at the scale we’re talking about without the in-network fabric computing that we did with Mellanox. Taking the software stack, disaggregating it, and putting it where it needs to be, is a specialty of Nvidia. We’re not obsessed about where computing is done, we just want to accelerate the application. Remember, Nvidia is an accelerated computing company, not a GPU company.
Right. So you talk about power being the constraint. When your customers are thinking about what to buy, we could buy all sort of traditional GPUs, or we could buy these LPU racks. Is that just, they should be thinking about it in terms of you’re just confident they can drive way more revenue?
JH:
It really depends on the kind of products they have. Suppose you really don’t have enterprise use cases at the moment, I don’t really think that adding Groq makes much sense, and the reason for that is because most of your customers are free tier customers, and they’re moving towards paying. So it might be two-thirds free tier, one-third paid, in that case, adding Groq to it, you’re adding a lot of expense. You’re taking some power, it’s not worth it.
Complexity. And you’re taking away servers, the opportunity cost.
JH:
What you could actually be serving the free tier, yeah. However, if you have Anthropic-like business and you have OpenAI-like business where Codex is capturing really great economics, but you just wish you could generate more tokens, this is where adding that accelerator can really boost your revenues.
China and the Doomers
Are we actually constrained by power right now in 2026 or by fab capacity or what? Everyone’s saying we don’t have enough supply. What’s the actual limiting factor?
JH:
I think it’s probably close on everything. You couldn’t double anything, really.
Because you’ll hit some other constraints.
JH:
Yeah.
It does feel like, though, the U.S. has I think done
a pretty good job of scrounging up power
, maybe more than people expected a couple years ago, it feels like
chips are really much more of a limiter right now
.
JH:
Our supply chain is fairly well planned. You know, we were planning for a very, very big year, and we’re planning for a very big year next year.
We saw
all the soju drinking and fried chickens.
JH:
(laughing) Yeah, right. We’re planning, we plan for, in our supply chain, we have got, you know, a couple of hundred partners in our supply chain and we’ve got long-term partnerships with them. So I feel pretty good about that part of it.
I don’t think we have twice as much power as we need, I don’t think we have twice as much chip supply as we need, I don’t think we have twice of anything as we need. But I think everything is, everything that I see in the horizon, we will be able to support from a supply chain perspective and the thing that I wish probably more than anything is that all the land, power, and shell would just get stood up faster.
Is it fair to say, is there a bit where Nvidia is actually the biggest beneficiary of scarcity, though, to the extent it exists? Like, if there’s a power scarcity, you’re the most efficient chip, so you’re going to be utilizing that power better. Or if there’s fab capacity, like you just said, you’ve been out there securing the supply chain, you got it sort of sorted, are you the big winners in that regard?
JH:
Well, we’re the largest company in this space, and we did a good job planning. And we plan upstream of the supply chain, we plan downstream of the supply chain and so I think we’ve done a really good job preparing everyone for growth.
Right, but is this a bit where, at its core, why not having access to the Chinese market maybe is a threat? Like if China ends up with plenty of power and plenty of chips, even though those chips are only 7nm, they have the capacity to build up an ecosystem to potentially rival CUDA in the long run, is that the concern that you have?
JH:
There’s no question we need to have American tech stack in China, and I’ve been very consistent about that since the very beginning recognizing that open source software will come. No country contributes more to open source software than China does and we also know that 50% of the world’s AI researchers come from China, and we also know that they’re really inventive. DeepSeek is not a nominal piece of technology, it’s really, really good. And Kimi is really good, and Qwen is really good and they make unique contributions to architecture, and they make unique contributions to the AI stack so I think we have to take these companies seriously.
To the extent that American tech stack is what the world builds on top of, then when that technology diffuses out of China, which it will, because it’s open source, and when it comes out of China, it goes into American industries, it goes into Southeast Asia, it goes into Europe, the American tech stack will be prepared to receive them. I’ve been really consistent that this is probably the single most geopolitical strategic issue for the American tech industry.
Yeah,
when we talked last time
, the Trump administration had banned the H20. Were you surprised you were able to get the Trump administration to see your point of view? And then were you even more surprised that now you’re
stymied by the Chinese government
?
JH:
I’m not surprised by us being stymied by them and the reason for that is because, of course, China would like to have their tech stack develop. In the time that we’ve left that market, you know how fast the Chinese industry moves, and Huawei achieved a record year for their company’s history. This is a very long-running company, and they had a record year. They had, what, five, six IPOs of chip companies that are addressing the AI industry.
I think we need to be more strategic in how we think about American leadership and American geopolitical and technology leadership. AI is not just a model, and that’s a deep misunderstanding — AI, as I said and as you mentioned in the beginning, AI is a five-layer cake and we have to win the infrastructure layer, we have to win the chips layer, we have to win the platform layer, we have to win the model layer and we have to win the application layer.
Some of the things that we do are jeopardizing our ability as a country to lead in each one of those five layers. I think it’s a terrible mistake to think that the way to win is to bundle all of it top-to-bottom and tie every company together into one holistic stack so that we can only win or win at the limits of what any one of the layers can win. We’ve got to let all the layers go out and try to win the market.
Have those other layers maybe benefited from their longer experience in Washington and you sort of showed up a little late to the scene?
JH:
Yeah, maybe.
What have you learned? What’s been the biggest thing you’ve learned about Washington?
JH:
Well, the thing that I was surprised by is how deep the doomers were integrated into Washington D.C. and how the messages of doomers affected the psychology of the policy makers.
Everyone was scared instead of optimistic.
JH:
That’s right, and I think it has two fundamental problems. In this Industrial Revolution, if we don’t allow the technology to diffuse across the United States and we don’t take advantage of it ourselves, what will happen to us is what happened to Europe in the last Industrial Revolution — we left them behind. And they, in a lot of ways, they invented all the technologies of the last Industrial Revolution and we just took advantage of it. I hope that we have the historic wisdom, that we have the technological understanding and not get trapped in science fiction, doomerism, these incredible stories that are being invented to scare the living daylights out of policy makers who don’t understand technology very well and they give them these science fiction embodiments that are just not helpful.
One of the situations that is most concerning to me is when you poll the United States, the population, the popularity of AI is decreasing, that’s a real problem. It’s no different than the popularity of electricity, the popularity of electric motors, the popularity of gasoline engines, in the last Industrial Revolution became less popular. The popularity of the Internet, could you just imagine? Other countries took advantage of it much more quickly than we did and then technology diffused into its industries and society much more quickly and so we just have to be much, much more concerned that we don’t give this technology some kind of a mystical science fiction embodiment that’s just not helpful and scaring people.
And so I don’t like it when doomers are out scaring people, I think there’s a difference between genuinely being concerned and warning people versus creating rhetoric that scares people.
I think a characteristic you see all the time is people put on their big thinking hats and try to tease out all these nuances and forget the fact that actual popular communication is done in broad strokes. You don’t get to say, “Oh, you’re a little scared of this, but not this XYZ”— you’re just communicating fear as opposed to communicating optimism.
JH:
Yeah, and somehow it makes them sound smarter.
People love to sound smart.
JH:
Sometimes it’s maybe, and we now know, it helps them with their fundraising and sometimes it helps them secure regulatory capture. So there’s a lot of different reasons why they do it, and these are incredibly smart people but I would just warn them that most of these things will likely backlash and will likely come back and they’ll be probably disappointed that they did it someday.
Nvidia’s Nature
I’m gonna tie a few questions together because I know we’re a little short on time.
In the self-driving car space
, you’re working with multiple automakers, you have your
Alpamayo model
, while still supplying chips to Tesla. You had a big bit about OpenClaw today in your presentation — meanwhile, a huge thing driving the Vera chips, for example, we talk about agents, is what’s happening with say, Claude Code and happening with Codex from OpenAI.
Am I right to tease out a consistent element here, and your investment in your open source models goes with that, where you’re happy to supply the leading provider, or the inventor in a space with chips, but then you’re going to fast follow what they do for everyone else that is threatened by them? So you simultaneously broaden your customer base, you’re not just dependent on the leaders, but then also the leaders are helping you sell to everyone else because they’re worried about being left behind.
JH:
No, nothing like that. We’re at the frontier on so many different domains. In a lot of ways, we are the leader in many of these domains, but we never turn them into products. We’re a technology stack and so we have to be at the frontier, we have to be the world leader of the technology stack, but we’re not a solutions manufacturer, we’re not a service provider. And so that’s number one.
Will that always be the case?
JH:
Yeah, always be the case. There’s no reason to, and we’re delighted not to. And so we create all this technology, we make it available to everybody.
Well, it’s funny though, if you go back to like your boards, for example, like the products you ship, more and more of that, there’s what, 30,000 specific SKUs in a rack today or something like that. More and more of those are defined by you, “This is what it’s going to be”, in part to make it easier to assemble, all those sorts of pieces. Is there a bit where that’s gonna happen on the software side too, as you talk about those vertical bits and your open source model?
JH:
We create a thing vertically and then we open it horizontally and so everybody could use whatever piece they would like.
As long as they’re running on Nvidia chips?
JH:
Whatever piece they would like, they don’t have to use all Nvidia chips, they don’t have to use all Nvidia software. We have to build it vertically, we have to integrate it vertically and optimize it vertically. But afterwards, we give them source, we give them — they just figure out how they want to do it.
Do you think Nvidia can actually produce and keep up in terms of having a frontier model that can win that space or be a necessary provider of that space given that folks like Meta
seem to have fallen off
or the alternative is, seems to be by and large Chinese models.
JH:
Winning that space is not important to us.
Right, well important not in terms of winning, but important in terms of there needs to be an open source frontier model, so if not you, then who?
JH:
That’s right, that’s right, somebody has to create open source models and Nvidia has a real capability in doing so. Whenever we create these open source models, we also learn a lot about the computation.
Was that a bit of a problem with Blackwell? I’ve heard mutters that the training runs were maybe a little more difficult than they were sort of previously.
JH:
The challenge with Blackwell was 100% NVLink 72, NVLink 72 was backbreaking work. And it was the only time that I thanked the audience for working with us.
Yeah, I noticed when you said that today, it came across as very sincere.
JH:
Yeah, because we tortured everybody, but everybody loves it now.
This is the second time we’ve had a chance to talk in person, and my takeaway when I met you previously in Taipei was the extent that Nvidia still feels like a small company. Are you worried about getting stretched too thin, or do you still think you have sort of that CUDA-esque flywheel where, “It looks like we’re doing a lot, we’re just kind of doing the same thing over and over again?”.
JH:
The reason why Nvidia can move so fast is because we always have a unifying theory for the company, and that’s my job, I need to come up with a unifying theory for what’s important and why things connect together and how they connect together and then create an organization, an organism that’s really, really good at delivering on that unifying theory.
And so the unifying theory for Nvidia is actually fairly simple. On the one hand, we have the computing platform, the software platform that’s related
to CUDA-X
. On the other hand, we’re a computing systems company, we optimize things vertically, we apply extreme co-design across the stack and all the different components of a computer and now that computer is a platform of ours and we integrate that platform into all the clouds and to all the OEMs and then we have another platform that’s now the data center platform, or the AI factory platform.
So once you have a unifying theory about what Nvidia builds and how it goes about doing it — and I used the keynote to kind of tell that story even partly to our own employees.
That’s what it felt like. That whole first hour of the keynote felt like you talking to your employees, reminding them of what you do.
JH:
It’s important that we’re always constantly reminded of what’s important to us and AI is important to us, but of course CUDA-X and all of the solvers and all of the applications that we can accelerate is really important to us.
Thank you very much.
JH:
Thank you. It’s great to see you, Ben. Keep up the good work.
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