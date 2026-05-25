# Jensen Huang – TPU competition, why we should sell chips to China, & Nvidia’s supply chain moat
**Source:** https://www.dwarkesh.com/p/jensen-huang
**Date:** 2026-04-15
**Author:** Dwarkesh Patel
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Playback speed
×
Share post
Share post at current time
Share from 0:00
0:00
/
480
60
58
Jensen Huang – TPU competition, why we should sell chips to China, & Nvidia’s supply chain moat
“If our next several years are a trillion dollars in scale, we have the supply chain to do it"
Dwarkesh Patel
Apr 15, 2026
480
60
58
Share
I asked Jensen about TPU competition, Nvidia’s lock on the ever more bottlenecked supply chain needed to make advanced chips, whether we should be selling AI chips to China, why Nvidia doesn’t just become a hyperscaler, how it makes its investments, and much more. Enjoy!
Watch on
YouTube
; listen on
Apple Podcasts
or
Spotify
.
Sponsors
Crusoe’s
cloud runs on state-of-the-art Blackwell GPUs, with Vera Rubin deployment scheduled for later this year. But hardware is only part of the story—for inference, Crusoe’s MemoryAlloy tech implements a cluster-wide KV cache, delivering up to 10x faster TTFT and 5x better throughput than vLLM. Learn more at
crusoe.ai/dwarkesh
Cursor
helped me build an AI co-researcher over the course of a weekend. Now I have an AI agent that I can collaborate with in Google Docs via inline comment threads! And while other agentic coding tools feel like a total black-box, Cursor let me stay on top of the full implementation. You can try my co-researcher out
here
, or get started on your own Cursor project today at
cursor.com/dwarkesh
Jane Street
spent ~20,000 GPU hours training backdoors into 3 different language models, then challenged my audience to find the triggers. They received some clever solutions—like comparing the base and fine-tuned versions and extrapolating any differences to reveal the hidden backdoor—but no one was able to solve all 3. So if open problems like this excite you, Jane Street is hiring. Learn more at
janestreet.com/dwarkesh
Timestamps
(00:00:00) – Is Nvidia’s biggest moat its grip on scarce supply chains?
(00:16:25) – Will TPUs break Nvidia’s hold on AI compute?
(00:41:06) – Why doesn’t Nvidia become a hyperscaler?
(00:57:36) – Should we be selling AI chips to China?
(01:35:06) – Why doesn’t Nvidia make multiple different chip architectures?
Transcript
00:00:00 – Is Nvidia’s biggest moat its grip on scarce supply chains?
Dwarkesh Patel
We’ve seen the
valuations of a bunch of software companies crash
because people are expecting AI to commoditize software. There’s a potentially naive way of thinking about things, which is: look, Nvidia sends a
GDS2 file
to
TSMC
. TSMC builds the
logic
dies
, it builds the
switches
, then it packages them with the
HBM
that
SK Hynix
,
Micron
, and
Samsung
make. Then it sends it to an
ODM
in Taiwan where they assemble the racks.
Nvidia
is fundamentally making software that other people are manufacturing, and if software gets commoditized, does Nvidia get commoditized?
Jensen Huang
In the end, something has to transform electrons to tokens. The transformation of electrons to tokens and making those tokens more valuable over time is hard to completely commoditize. The transformation from electrons to tokens is such an incredible journey. Making that token is like making one molecule more valuable than another molecule, making one token more valuable than another. The amount of artistry, engineering, science, and invention that goes into making that token valuable, obviously we’re watching it happen in real time. The transformation, the manufacturing, all of the science that goes in there is far from deeply understood and the journey is far from over. I doubt that it will happen.
We’re going to make it more efficient, of course. The way that you framed the question is my mental model of our company. The input is electrons, the output is tokens. In the middle is Nvidia. Our job is to do as much as necessary and as little as possible to enable that transformation to be done at incredible capabilities. What I mean by “as little as possible,” whatever I don’t need to do, I partner with somebody and make it part of my ecosystem.
If you look at Nvidia today, we probably have the largest ecosystem of partners, both in the supply chain upstream and downstream, all of the computer companies, application developers, and model makers. AI is a five-layer cake, if you will. We have ecosystems across the entire five layers. We try to do as little as possible, but the part that we have to do, as it turns out, is insanely hard. I don’t think that gets commoditized.
In fact, I also don’t think the enterprise software companies, the tools makers… Most software companies today are tool makers. Some of them are not. Some of them are workflow codification systems. But for a lot of companies, they’re tool makers. For example, Excel is a tool, PowerPoint is a tool,
Cadence
makes tools,
Synopsys
makes tools. I actually see the opposite of what people see. I think the number of
agents
is going to grow exponentially, and the number of tool users is going to grow exponentially. It’s very likely that the number of instances of all these tools is going to skyrocket.
It’s very likely that the number of instances of
Synopsys Design Compiler
is going to skyrocket, along with the number of agents using the floor planners, our layout tools, and our design rule checkers. Today we’re limited by the number of engineers. Tomorrow, those engineers are going to be supported by a bunch of agents. We’re going to be exploring the design space like you’ve never seen before, and we’re going to use the tools that we use today.
I think tool use is going to cause the software companies to skyrocket. The reason why it hasn’t happened yet is because the agents aren’t good enough at using their tools yet. Either these companies are going to build the agents themselves, or agents are going to get good enough to be able to use those tools. I think it’s going to be a combination of both.
Dwarkesh Patel
I think in your
latest filings
, you had almost a $100 billion in purchase commitments with foundries, memory, and packaging.
SemiAnalysis
has reported that you will have $250 billion of these kinds of purchase commitments. One interpretation is that Nvidia’s moat is really that you’ve locked up many years of these scarce components. Somebody else might have an accelerator, but can they actually get the memory to build it? Can they actually get the
logic
to build it? Is this really Nvidia’s big moat for the next few years?
Jensen Huang
It’s one of the things that we can do that is hard for someone else to do. We’ve made enormous commitments upstream. Some of it is explicit, these commitments that you mentioned. Some of it is implicit. For example, a lot of the investments that are upstream are made by our supply chain because I said to the CEOs, “Let me tell you how big this industry is going to be, let me explain to you why, let me reason through it with you, and let me show you what I see.”
As a result of that process of informing, inspiring, and aligning with CEOs of all different industries upstream, they’re willing to make the investments. Why are they willing to make the investments for me and not someone else? The reason for that is because they know that I have the capacity to buy their supply and sell it through my downstream. The fact is that Nvidia’s downstream supply chain and our downstream demand is so large, they’re willing to make the investment upstream.
If you look at
GTC
, people are marveled by the scale of it and the people that go. It’s a full 360 degrees, the entire universe of AI all in one place. They’re all in one place because they need to see each other. I bring them together so that the downstream can see the upstream, the upstream can see the downstream, and all of them can see the advances in AI. Very importantly, they can all meet the AI natives, all the AI startups being built, and all the amazing things happening so they can see firsthand all the things that I tell them. I spend a lot of my time informing, directly or indirectly, our supply chain, partners, and ecosystem about the opportunity in front of us.
Some people always say, “Jensen, in most keynotes, it’s one announcement after another.” With our keynotes, there’s always a part of it that’s a little torturous in the sense that it almost comes across like education. In fact, that’s exactly on my mind. I need to make sure the entire supply chain, upstream and downstream, the ecosystem, understands what is coming at us, why it’s coming, when it’s coming, how big it’s going to be, and is able to reason about it systematically, just like I reason about it.
Regarding the moat as you describe it, we’re able to build for a future. If our next several years are a trillion dollars in scale, we have the supply chain to do it. Without our reach, the velocity of our business… Just as there’s cash flow, there’s supply chain flow, there’s churns. Nobody is going to build a supply chain for an architecture if the business churns are low. Our ability to sustain the scale is only because our downstream demand is so great. And they see it, they hear about it, they see it all coming. That allows us to do the things we’re able to do at the scale we do them.
Dwarkesh Patel
I do want to understand more concretely whether the upstream can keep up. For many years now, you guys have been 2x-ing revenue year over year. You’ve been more than tripling the amount of
flops
you’re providing to the world year over year.
Jensen Huang
And 2x-ing at this scale now is really incredible.
Dwarkesh Patel
Exactly. But then you look at logic. You’re the biggest customer on TSMC’s
N3 node
, and you’re one of the biggest on
N2
. AI as a whole this year is going to be sixty percent of N3. It’s going to be 86% next year, according to SemiAnalysis. How do you double if you’re the majority? And how do you do that year over year? Are we in a regime now where the growth rate in AI compute has to slow because of upstream? Do you see a way to get around this? How do we build 2x more fabs year over year, ultimately?
Jensen Huang
At some level, the instantaneous demand is greater than the supply upstream and downstream in the world. At any instant, we could be limited by the number of plumbers, which actually happens.
Dwarkesh Patel
The plumbers are invited to next year’s GTC.
Jensen Huang
By the way, great idea. But that’s a good condition. You want an industry where the instantaneous demand is greater than the total supply of the industry. The opposite is obviously less good. If we’re too far apart, if one particular component is too far away, the industry swarms it. For example, notice people aren’t talking very much about
CoWoS
anymore.
The reason for that is because for two years we swarmed the living daylights out of it. We doubled, doubled, doubled on several doubles. Now I think we’re in fairly good shape. TSMC now knows that CoWoS supply has to keep up with the rest of the logic demand and the memory demand. They’re scaling CoWoS and future packaging technologies at the same level as they scale logic. This is terrific, because for a long time, CoWoS and HBM memory were rather specialty. But they’re not specialties anymore. People now realize they’re mainstream computing technology.
Of course, we’re now much more able to influence a larger scope of our supply chain. At the beginning of the AI revolution, all the things that I say now, I was saying five years ago. Some people believed in it and invested in it, for example, Sanjay and the Micron team. I still remember the meeting really well where I was clear about exactly what was going to happen, why it was going to happen, and the predictions of today. They really doubled down on it. We partnered with them across
LPDDR
and HBM memories, and they really invested in it. It obviously has been tremendous for the company. Some people came a little bit later, but now they’re all here.
Each one of these bottlenecks gets a great deal of attention. Now we’re prefetching the bottlenecks years in advance. For example, the investments that we’ve done with
Lumentum
,
Coherent
, and the
silicon photonics
ecosystem over the last several years really reshaped the supply chain. We built up an entire supply chain around TSMC. We partnered with them on
COUPE
, invented a whole bunch of technology, and licensed those patents to the supply chain to keep it nice and open.
We’re preparing the supply chain through the invention of new technologies, new workflows, new testing equipment like double-sided probing, investing in companies, and helping them scale up their capacity. You can see that we’re trying to shape the ecosystem so that the supply chain is ready to support the scale.
Dwarkesh Patel
It seems like some bottlenecks are easier than others. Scaling up CoWoS versus scaling up—
Jensen Huang
I went to the hardest one, by the way.
Dwarkesh Patel
Which is?
Jensen Huang
Plumbers. Plumbers and electricians. This is one of the concerns that I have about the doomers describing the end of work and killing of jobs. If we discourage people from being software engineers, we’re going to run out of software engineers. The same prediction happened ten years ago. Some of the doomers were telling people, “Whatever you do, don’t be a radiologist.” You might hear some of those videos still on the web saying radiology is going to be the first career to go and the world is not going to need any more radiologists. Guess what we’re short of? Radiologists.
Dwarkesh Patel
Going back to this point about how some things you can scale, and other things… How do you actually manufacture 2x the amount of logic a year? Ultimately, memory and logic are bottlenecked by EUV. How do you get to 2x as many
EUV
machines year over year?
Jensen Huang
None of that is impossible to scale quickly. All of that is easy to do within two or three years. You just need a demand signal. Once you can build one, you can build ten, and once you can build ten, you can build a million. These things are not hard to replicate.
Dwarkesh Patel
How far down the supply chain do you go? Do you go to
ASML
and say, “Hey, if I look out three years from now, for Nvidia to be generating two trillion a year in revenue, we need way more EUV machines”?
Jensen Huang
Some of them I have to directly, some of them indirectly, and some of them… If I can convince TSMC, ASML will be convinced. We have to think about the critical pinch points. But if TSMC is convinced, you’ll have plenty of EUV machines in a few years.
My point is that none of the bottlenecks last longer than a couple of years, two, three years, none of them. Meanwhile, we’re improving computing efficiency by 10x 20x, and in the case of
Hopper
to
Blackwell
, 30x to 50x. We’re coming up with new algorithms because
CUDA
is so flexible. We’re developing all kinds of new techniques so that we drive efficiency in addition to increasing capacity. None of those things worry me. It’s the stuff that’s downstream from us. Energy policies that prevent energy from… You can’t create an industry without energy. You can’t create a whole new manufacturing industry without energy.
We want to reindustrialize the United States. We want to bring back chip manufacturing, computer manufacturing, and packaging. We want to build new things like EVs and robots. We want to build AI factories. You can’t build any of these things without energy, and those things take a long time. More chip capacity, that’s a 2-3 year problem. More CoWoS capacity, 2-3 year problem.
Dwarkesh Patel
Interesting. I feel like I have guests tell me the exact opposite thing sometimes. In this case, I just don’t have the technical knowledge to adjudicate.
Jensen Huang
The beautiful thing is you’re talking to the expert.
00:16:25 – Will TPUs break Nvidia’s hold on AI compute?
Dwarkesh Patel
True. I want to ask about your competitors. If you look at the
TPU
, arguably two out of the top three models in the world, Claude and Gemini, were trained on TPU. What does that mean for Nvidia going forward?
Jensen Huang
We build a very different thing. What Nvidia built is accelerated computing, not a tensor processing unit. Accelerated computing is used for all kinds of things: molecular dynamics, quantum chromodynamics, data processing, data frames, structured data, and unstructured data. It’s also used for fluid dynamics and particle physics. In addition, we use it for AI.
Accelerated computing is much more diverse. Although AI is the conversation today and is obviously very important and impactful, computing is much broader than that. Nvidia has reinvented the way computing is done, moving from general-purpose computing to accelerated computing. Our market reach is far greater than any TPU or
ASIC
can possibly have. If you look at our position, we’re the only company that accelerates applications of all kinds. We have a gigantic ecosystem. So all kinds of frameworks and algorithms run on Nvidia.
Because our computers are designed to be operated by other people, anyone who’s an operator can buy our systems. With most of these home-built systems, you have to be your own operator because they were never designed to be flexible enough for others to operate. Because anybody can operate our systems, we’re in every cloud, including Google, Amazon, Azure, and OCI.
If you want to operate it to rent, you better have a large ecosystem of customers in many industries to be the offtakers. If you want to operate it for yourself, we obviously have the ability to help you operate it yourself, like we did for Elon with xAI. And because we can enable operators in any company and any industry, you could use it to build a supercomputer for scientific research and drug discovery at Lilly. We can help them operate their own supercomputer and use it for the entire diversity of drug discovery and biological sciences that we accelerate.
There are just a whole bunch of applications that we can address that you can’t do with TPUs. Nvidia built CUDA to be a fantastic tensor processing unit as well, but it also handles every life cycle of data processing, computing, AI, and so on. Our market opportunity is just a lot larger, and our reach is a lot greater. Because we support every application in the world now, you can build Nvidia systems anywhere and know that there will be customers for it. It’s a very different thing.
Dwarkesh Patel
This is going to be a long question. You have spectacular revenue, and you’re not making $60 billion a quarter from pharma and quantum. You’re making it because AI is an unprecedented technology that is growing unprecedentedly fast.
The question then is what is best for AI specifically. I’m not in the details, but I talk to my AI researcher friends and they say, “Look, when I use a TPU, it’s this big
systolic array
that’s perfect for doing matrix multiplies, whereas a
GPU
is very flexible. It’s great when you have lots of branching or irregular memory access.”
But what is AI? It’s just these very predictable
matrix multiplies
again and again and again. You don’t have to give up any die area for warp schedulers or switches between threads and memory banks. And the TPU is really optimized for the bulk of this growth in revenue and use case for compute that is coming online right now. I wonder how you react to that.
Jensen Huang
Matrix multiplies are an important part of AI, but they’re not the only part. If you want to come up with a new
attention
mechanism, disaggregate in a different way, or invent a whole new type of architecture altogether—like a hybrid
SSM
—you want an architecture that’s generally programmable. If you want to create a model that fuses
diffusion
and
autoregressive techniques
, you want an architecture that’s just generally programmable. We run everything you can imagine. That’s the advantage. It allows for the invention of new algorithms a lot more easily, because it’s a programmable system.
The ability to invent new algorithms is really what makes AI advance so quickly. TPUs, like anything else, are impacted by
Moore’s Law
, which we know is increasing by about 25% per year. The only way to really get 10x or 100x leaps is to fundamentally change the algorithm and how it’s computed every single year.
That’s Nvidia’s fundamental advantage. The only reason we were able to make Blackwell to Hopper 50x… When I first announced Blackwell was going to be 35x more energy efficient than Hopper, nobody believed it. Then
Dylan
wrote an article saying I sandbagged, and it’s actually fifty times. You can’t reasonably do that with just Moore’s Law. The way we solve that problem is with new models, like
MoEs
, that are parallelized, disaggregated, and distributed across a computing system. Without the ability to really get down and come up with new
kernels
with CUDA, it’s really hard to do.
It’s the combination of the programmability of our architecture and the fact that Nvidia is an extreme co-design company. We can even offload some of the computation into the fabric itself, like
NVLink
, or into the network with
Spectrum-X
. We could affect change across the processors, the system, the fabric, the libraries, and the algorithm simultaneously. Without CUDA to do that, I wouldn’t even know where to start.
Dwarkesh Patel
This gets at an interesting question about Nvidia’s clientele. 60% of your revenue is coming from these big five hyperscalers. In a different era with different customers—let’s say professors running experiments—they need CUDA. They can’t use another accelerator. They just needed to run
PyTorch
with CUDA and have everything optimized.
But these hyperscalers have the resources to write their own kernels. In fact, they have to in order to get that last 5% of performance they need for their specific architecture. Anthropic and Google are mostly running their own accelerators or running TPUs and
Trainium
. But even OpenAI, using GPUs, has
Triton
because they need their own kernels. Down to CUDA C++, instead of using
cuBLAS
and
NCCL
, they’ve got their own stack  which compiles to other accelerators as well. If most of your customers can and do make replacements for CUDA, to what extent is CUDA really the thing that is going to make frontier AI happen on Nvidia?
Jensen Huang
CUDA is a rich ecosystem. If you want to build on any computer first, building on CUDA first is incredibly smart. Because the ecosystem is so rich, we support every framework. If you want to create custom kernels… For example, we contribute enormously to Triton. So the back end of Triton has huge amounts of Nvidia technology.
We’re delighted to help every framework become as great as it can be. There are lots and lots of frameworks. There’s Triton,
vLLM
,
SGLang
, and more. Now there’s a whole bunch of new
reinforcement learning
frameworks coming out, like
verl
and
NeMo RL
. With
post-training
and reinforcement learning, that entire area is just exploding. So if you want to build on an architecture, building on CUDA makes the most sense because you know the ecosystem is great.
You know that if something happens, it’s more likely in your code and not in the mountain of code underneath. Don’t forget the amount of code you’re dealing with when building these systems. When something doesn’t work, was it you or was it the computer? You would like it to always be you and to be able to trust the computer. Obviously, we still have lots of bugs ourselves, but our system is so well wrung out that you can at least build on top of the foundation. That’s number one: the richness, programmability, and capability of the ecosystem.
The second thing is, if you’re a developer building anything at all, the single most important thing you want is an install base. You want the software you write to run on a whole bunch of other computers. You’re not building software just for yourself. You’re building it for your fleet or everybody else’s fleet because you’re a framework builder. Nvidia’s CUDA ecosystem is ultimately its great treasure.
We have several hundred million GPUs out there now. Every cloud has it. It goes back to the
A10
,
A100
,
H100
,
H200
, the
L series
, the
P series
. There’s a whole bunch of them. They’re in all kinds of sizes and shapes. If you’re a robotics company, you want that CUDA stack to actually run in the robot itself. We’re literally everywhere. The install base means that once you develop the software or the model, it’s going to be useful everywhere. That is just incredibly valuable.
Lastly, the fact that we’re in every single cloud makes us genuinely unique. If you’re an AI company or developer, you’re not exactly sure which cloud service provider you’re going to partner with or where you’d like to run it. We run everywhere, including on-prem for you if you like. The combination of the richness of the ecosystem, the expansiveness of the install base, and the versatility of where we are makes CUDA invaluable.
Dwarkesh Patel
That makes a lot of sense. I guess the thing I’m curious about is whether those advantages matter a lot to your main customers. There’s many people for whom they might matter. The kind of person who can actually build their own software stack makes up most of your revenue. Especially if you go to a world where AI is getting especially good at the things which have tight verification loops where you can RL on them…. This question of how do you write a kernel that does attention or
MLP
the most efficiently across a scale up? It’s a very verifiable sort of feedback loop.
Can all the hyperscalers write these custom kernels for themselves? Nvidia still has great price performance, so they might still prefer to use Nvidia. But then the question is, does it just become a question of who is offering the best specs, the best flops and memory bandwidth for a given dollar. Whereas historically Nvidia has just had, and still has, the best margins in all of AI across hardware and software, +70%, because of this CUDA moat. And the question is, can you sustain those margins if for most of your customers, they can actually afford to build, instead of the CUDA moat?
Jensen Huang
The number of engineers we have assigned to these AI labs is insane, working with them, optimizing their stack. The reason for that is because nobody knows our architecture better than we do. These architectures are not as general purpose as a CPU. A CPU is kind of like a Cadillac. It’s a nice cruiser. It never goes too fast. Everybody drives it pretty well. It’s got cruise control, and everything’s easy. But in a lot of ways, Nvidia’s GPUs, accelerators, are like F1 racers. I could imagine everybody’s able to drive it at a hundred miles an hour, but it takes quite a bit of expertise to be able to push it to the limit. We use a ton of AI to create the kernels that we have.
I’m pretty sure we’re going to still be needed for quite some time. Our expertise helps our AI lab partners to get another 2x out of their stack easily oftentimes. It’s not unusual that by the time we’re done optimizing their stack or optimizing a particular kernel, their model sped up by 3x, 2x, 50%. That’s a huge number, especially when you’re talking about the install base of the fleet that they have, of all the Hoppers and Blackwells that they have. When you increase it by a factor of two, that doubles the revenues. That directly translates to revenues.
Nvidia’s computing stack is the best performance per
TCO
in the world, bar none. Nobody can demonstrate to me that any single platform in the world today has a better performance-TCO ratio. Not one company. In fact, the benchmarks that are out there. Dylan’s
InferenceMAX
is sitting out there for everybody to use, and not one… TPU won’t come, Trainium won’t come.
I encourage them to use InferenceMAX and demonstrate their incredible inference cost. It’s really hard. Nobody wants to show up.
MLPerf
. I would welcome Trainium to demonstrate their 40% that they claim all the time. I would love to hear them demonstrate the cost advantage of TPUs. It makes no sense in my mind. It makes absolutely zero sense. On first principles, it makes no sense.
So I think the reason why we’re so successful is simply because our TCO is so great. Secondly, you say 60% of our customers are the top five, but most of that business is external. For example, most of Nvidia in AWS is for external customers, not internal use. Most of our customers at Azure, obviously all of our customers are external. All of our customers at OCI are external, not internal use. The reason why they favor us is because our reach is so great. We can bring them all of the great customers in the world. They’re all built on Nvidia. And the reason why all these companies are built on Nvidia is because our reach and our versatility is so great.
So I think the flywheel is really install base, the programmability of our architecture, the richness of our ecosystem, and the fact that there’s so many AI companies in the world. There’s tens of thousands of them now. If you were one of those AI startups, what architecture would you choose? You would choose an architecture that’s most abundant. We’re the most abundant in the world. You’d choose the one that has the largest installed base. We’re the largest install base. And you’d choose the one that has a rich ecosystem.
So that’s the flywheel. That’s the reason why, between the combination of: one, our perf per dollar is so great that they have the lowest cost tokens. Second, our perf per watt is the highest in the world. So if one of these companies, if our partners, built a one gigawatt data center, that one gigawatt data center better deliver the maximum amount of revenues and number of tokens, which directly translates to revenues. You want it to generate as many tokens as possible, maximize the revenues for that data center. We are the highest tokens per watt architecture in the world. Lastly, if your goal is to rent the infrastructure, we have the most customers in the world. So that’s the reason why the flywheel works.
Dwarkesh Patel
Interesting. I guess the question comes down to, what is the actual market structure here? Because even if there’s other companies… There could have been a world where there’s tens of thousands of AI companies that have roughly equal share of compute. But even through these five hyperscalers, really the people on Amazon using the compute are Anthropic, OpenAI, and these big foundation labs who can themselves afford and have the ability to make different accelerators work.
Jensen Huang
No, I think your premise is wrong.
Dwarkesh Patel
Maybe. But let me ask you a slightly different question.
Jensen Huang
Come back and make me correct your premise.
Dwarkesh Patel
Okay. Let me just ask you a different question.
Jensen Huang
But still make sure to make me come back and fix because it’s just too important to AI. It’s too important to the future of science. It’s too important to the future of the industry. That premise… Look —
Dwarkesh Patel
Let me just finish the question and then we can address it together.
Jensen Huang
Yeah.
Dwarkesh Patel
If all these things are true about price, performance, and performance per watt, et cetera, are true, why do you think it is the case that, say, Anthropic for example, just
announced a couple days ago they have a multi-gigawatt deal with Broadcom and Google
for TPUs and majority of their compute?
Obviously for Google, TPU is a majority of compute. So if I look at these big AI companies, it seems like a lot of their compute… There was some point where it’s all Nvidia and now it’s not. So I’m curious how to square, if these things are true on paper, why are they going with other accelerators?
Jensen Huang
Anthropic is a unique instance, not a trend. Without Anthropic, why would there be any TPU growth at all? It’s 100% Anthropic. Without Anthropic, why would there be Trainium growth at all? It’s 100% Anthropic. I think that’s fairly well known and well understood. It’s not that there’s an abundance of ASIC opportunities. There’s only one Anthropic.
Dwarkesh Patel
But
OpenAI’s deals with AMD
… They’re building their own
Titan
accelerator.
Jensen Huang
Yeah, but I think we could all acknowledge they’re vastly Nvidia. We’re going to still do a lot of work together. I’m not offended by other people using something else and trying things. If they don’t try these other things, how would they know how good ours is? Sometimes you’ve got to be reminded of it. We have to continuously earn the position that we’re in.
There are always big claims. Look at the number of ASICs that have been canceled. Just because you’re going to build an ASIC… You still have to build something better than Nvidia. It’s not that easy building something better than Nvidia. It’s not sensible, actually. Nvidia’s got to be missing something, seriously. Because of our scale, our velocity, we’re the only company in the world that’s cranking it out every single year. Big leaps, every single year.
Dwarkesh Patel
I guess their logic is, “Hey, it doesn’t need to be better. It just needs to be not more than 70% worse,” because they’re paying you 70% margins.
Jensen Huang
No, don’t forget, even in ASICs margins are really quite high. Nvidia’s margin is 70%, let’s say. But ASIC margins are 65%. What are you really saving?
Dwarkesh Patel
Oh, you mean from Broadcom or something like that?
Jensen Huang
Yeah, sure. You’ve got to pay somebody. I think the ASIC margins are incredibly good, from what I can tell. They believe it too. They’re quite proud of their incredible ASIC margins.
So, you asked the question why. A long time ago, we just didn’t have the ability to do it. At the time, I didn’t deeply internalize how difficult it would be to build a foundation AI lab like OpenAI and Anthropic, and the fact that they needed huge investments from the supplier themselves. We just weren’t in a position to make the multi-billion dollar investment into Anthropic so that they could use our compute. But Google and AWS were. They put in huge investments in the beginning so that Anthropic, in return, used their compute. We just weren’t in a position to do that at the time.
I would say my mistake is I didn’t deeply internalize that they really had no other options, that a VC would never put in $5-10 billion of investment into an AI lab with the hopes of it turning out to be Anthropic. So that was my miss. But even if I understood it, I don’t think we would’ve been in a position to do that at the time. But I’m not going to make that same mistake again.
I’m delighted to invest in OpenAI, and I’m delighted to help them scale, and I believe it’s essential to do so. And then, when I was able to, when Anthropic came to us, I’m delighted to be an investor, delighted to help them scale. We just weren’t, at the time, able to do it. If I could rewind everything—and Nvidia could have been as big back then as we are now—I would’ve been more than happy to do it.
00:41:06 – Why doesn’t Nvidia become a hyperscaler?
Dwarkesh Patel
This is actually quite interesting. For many years Nvidia has been the company in AI making money, making lots of money. Now you’re investing it. It’s been reported that you’ve done up to $30 billion in OpenAI and $10 billion in Anthropic. But now their valuations have increased, and I’m sure they’ll continue to increase.
So if over these many years you were giving them the compute, you saw where it was headed, and they were worth like one tenth what they’re worth now a couple years ago—or even a year ago in some cases and you had all this cash — there’s a world where either Nvidia themselves becomes a foundation lab, does a huge investment to make that possible, or has made the deals you’ve made now at current valuations much earlier on. And you had the cash to do it. So I am curious, actually, why not have done it earlier?
Jensen Huang
We did it as soon as we could have. We did it as soon as we could have, and if I could have, I would’ve done it even earlier. At the time that Anthropic needed us to do it, we just weren’t in a position to do it. It wasn’t in our sensibility to do so.
Dwarkesh Patel
How so? Was it like a cash thing?
Jensen Huang
Yeah, the level of investment. We had never invested outside the company at the time, and not that much. We didn’t realize we needed to. I always thought that they could just go raise from VCs, for God’s sakes, like all companies do. But what they were trying to do couldn’t have been done through VCs. What OpenAI wanted to do couldn’t have been done through VCs. I recognize that now. I didn’t know it then.
But that’s their genius. That’s why they’re smart. They realized then that they had to do something like that. And I’m delighted that they did. Even though we caused Anthropic to have to go to somebody else, I’m still happy that it happened. Anthropic’s existence is great for the world. I’m delighted for it.
Dwarkesh Patel
I guess you still are making a ton of money, and you’re making way more money quarter after quarter.
Jensen Huang
It’s still okay to have regrets.
Dwarkesh Patel
So the question still arises. Okay, now that we’re here and you have all this money that you keep making, what should Nvidia be doing with it? There’s one answer which is that there’s this whole middleman ecosystem that has popped up for converting CapEx into OpEx for these labs so that they can rent compute. Because the chips are really expensive, they make a lot of money over their lifetime because the AI models are getting better. So the value that they generate, their tokens, is increasing, but they’re expensive to set up. Nvidia has the money to do the CapEx. In fact, it’s been reported, you are
backstopping CoreWeave up to $6.3 billion and have invested $2 billion
.
Why doesn’t Nvidia become a cloud themselves? Why doesn’t it become a hyperscaler themselves and rent this compute out? You have all this cash to do it.
Jensen Huang
This is a philosophy of the company, and I think it’s wise. We should do as much as needed, as little as possible. What that means is, the work that we do with building our computing platform, if we don’t do it, I genuinely believe it doesn’t get done. If we didn’t take the risk that we take—if we didn’t build NVLink the way we built it, if we didn’t build the whole stack, if we didn’t create the ecosystem the way we did, if we didn’t dedicate ourselves to 20 years of CUDA while losing money most of that time—if we didn’t do it, nobody else would have done it.
If we didn’t create all the
CUDA-X libraries
so that they’re all domain-specific… A decade and a half ago, we pushed into domain-specific libraries because we realized that if we didn’t create these domain-specific libraries, whether it’s for ray tracing or image generation or even the early works of AI, these models, if we didn’t create them, for data processing, structured data processing, or vector data processing, if we didn’t create them, nobody would. I am completely certain of that. We created a library for computational lithography called
cuLitho
. If we didn’t create it, nobody would have. So accelerated computing wouldn’t advance the way it has if we didn’t do what we did.
So we should do that. We should dedicate our company, all of our might, wholeheartedly to go do that. However, the world has lots of clouds. If I didn’t do it, somebody would show up. So following the recipe, the philosophy, of doing as much as needed but as little as possible—as little as possible—that philosophy exists in our company today. Everything I do, I do it with that lens.
In the case of clouds, if we didn’t support
CoreWeave
to exist, these
neoclouds
, these AI clouds, wouldn’t exist. If we didn’t help CoreWeave exist, they would not exist. If we didn’t support
Nscale
, they wouldn’t be where they are today. If we didn’t support
Nebius
, they wouldn’t be what they are today. Now they’re doing fantastically.
Is that a business model [inaudible]? We should do as much as needed, as little as possible. So we invest in our ecosystem because I want our ecosystem to thrive. I want the architecture, and AI, to be able to connect with as many industries as possible, as many countries as possible, and make it possible for the planet to be built on AI and to be built on the American tech stack. That vision is exactly what we’re pursuing.
Now, one of the things that you mentioned… There are so many great, amazing foundation model companies, and we try to invest in all of them. This is another thing that we do. We don’t pick winners. We need to support everyone. It’s part of our joy of doing so. It’s imperative to our business. But we also go out of our way not to pick winners. So when I invest in one of them, I invest in all of them.
Dwarkesh Patel
Why do you go out of your way not to pick winners?
Jensen Huang
Because it’s not our job to, number one. Number two, when Nvidia first started, there were 60 3D graphics companies. We are the only one that survived. If you would have taken those 60 graphics companies and asked yourself which one was going to make it, Nvidia would be at the top of that list not to make it.
This is long before you, but Nvidia’s graphics architecture was precisely wrong. It’s not a little bit wrong.
We created an architecture that was precisely wrong
, and it was an impossible thing for developers to support. It was never going to make it. We reasoned about it from good first principles, but we ended up with the wrong solution. Everybody would have counted us out. And here we are.
So I have enough humility to recognize that. Don’t pick winners. Either let them all take care of themselves, or take care of all of them.
Dwarkesh Patel
One thing I didn’t understand is you said, “Look, we’re not prioritizing these neoclouds just because they are neoclouds and we want to prop them up.” But you also listed a bunch of neoclouds and said they wouldn’t exist if it wasn’t for NVIDIA. How are those two things compatible?
Jensen Huang
First of all, they need to want to exist, and they come to ask us for help. When they want to exist and they have a business plan, expertise, and the passion for it… They obviously have to have some capabilities themselves. But if, at the end of the day, they need some investment in order to get it off the ground, we would be there for them. But the sooner they get their flywheel going...
Your question was, “Do we want to be in the financing business?” The answer is no. There are people in the financing business, and we’d rather work with all the people in the financing business than be a financier ourselves. Our goal is to focus on what we do, keep our business model as simple as possible, and support our ecosystem.
When someone like OpenAI needs an investment of a $30 billion scale because it’s still before their IPO, and we deeply believe in them and I deeply believe that they’re going to be an… Well, they’re an extraordinary company already today. They’re going to be an incredible company. The world needs them to exist. The world wants them to exist. I want them to exist. They have the wind at their back. Let’s support them and let them scale. Those investments we’ll do because they need us to do it. But we’re not trying to do as much as possible. We’re trying to do as little as possible.
Dwarkesh Patel
This may be an obvious question, but we’ve lived many years in this situation where there’s a shortage of GPUs, and it’s grown now because models are getting better.
Jensen Huang
We have a shortage of GPUs.
Dwarkesh Patel
Yes. Nvidia is known for divvying up the scarce allocation, not just based on high bidder, but rather on, “Hey, we want to make sure that these neoclouds exist. Let’s give some to CoreWeave, let’s give some to
Crusoe
, let’s give some to
Lambda
.” Why is it good for Nvidia? First of all, would you agree with this characterization of fracturing the market?
Jensen Huang
No. No. Your premise is just wrong. We’re sufficiently mindful about these things. We’re very mindful about these things. First of all, if you don’t place a PO, all the talking in the world won’t make a difference. Until we get a PO, what are we going to do? So the first thing is, we work really hard with everybody to get a forecast done, because these things take a long time to build, and the data centers take a long time to build. We align ourselves with demand and supply and things like that through forecasting. Okay? That’s job number one.
Number two, we’ve tried to forecast with as many people as possible, but in the final analysis, you still have to place an order. Maybe, for whatever reason, you didn’t place your order. What can I do? At some point, first in, first out. But beyond that, if you’re not ready because your data center’s not ready, or certain components aren’t ready to enable you to stand up a data center, we might decide to serve another customer first. That’s just maximizing the throughput of our own factory. We might do some adjustments there.
Aside from that, the prioritization is first in, first out. You’ve got to place a PO. If you don’t place a PO… Now, of course, there are stories about that. For example, all of this kind of started from an
article about Larry and Elon having dinner with me where they begged for GPUs
. That never happened. We absolutely had dinner. We absolutely had dinner, and it was a wonderful dinner. At no time did they beg for GPUs. They just had to place an order. Once they place an order, we do our best to get the capacity to them. We’re not complicated.
Dwarkesh Patel
Okay. So it sounds like there’s a queue, and then based on whether your data center is ready and when you place a purchase order, you get them at a certain time. But it still doesn’t sound like the highest bidder just gets it. Is there a reason to do it…?
Jensen Huang
We never do that.
Dwarkesh Patel
Okay.
Jensen Huang
We never do.
Dwarkesh Patel
Why not just do high bidder?
Jensen Huang
Because it’s a bad business practice. You set your price and then people decide to buy it or not. I understand that others in the chip industry change their prices when demand is higher, but we just don’t. That’s just never been a practice of ours. You can count on us. I prefer to be dependable, to be the foundation of the industry. You don’t need to second-guess. If I quoted you a price, we quoted you a price. That’s it. If demand goes through the roof, so be it.
Dwarkesh Patel
On the other end, that’s why you have a productive relationship with TSMC, right?
Jensen Huang
Yeah, Nvidia’s been in business with them for, I guess, coming up on 30 years. Nvidia and TSMC don’t have a legal contract. There’s always some rough justice. Sometimes I’m right, sometimes I’m wrong. Sometimes I got a better deal, sometimes I got a worse deal. But overall, the relationship is incredible. I can completely trust them. I can completely depend on them.
One of the things you can count on with Nvidia is that this year,
Vera Rubin
is going to be incredible. Next year,
Vera Rubin Ultra
will come. The year after that,
Feynman
will come. And the year after that, I haven’t introduced the name yet. Every single year you can count on us. You’re going to have to go find another ASIC team in the world—pick your ASIC team—where you can say, “I can bet the farm, I can bet my entire business that you will be here for me every single year. Your token cost will decrease by an order of magnitude every single year. I can count on it like I can count on the clock.”
I just said something about TSMC. For no other foundry in history can you possibly say that. You can say that about Nvidia today. You can count on us every single year. If you would like to buy a billion dollars worth of AI factory compute, no problem. If you’d like to buy a hundred million dollars, no problem. You’d like to buy $10 million, or just one rack, not a problem. Or just one graphics card, okay, no problem. If you would like to place an order for a $100 billion of AI factory, no problem. We’re the only company in the world where you can say that today.
I can say that about TSMC as well. I want to buy one, buy 1 billion, no problem. We just have to go through the process of planning for it, and all the things that mature people do. So I think this ability for Nvidia to be the foundation of the world’s AI industry, this is a position that has taken us a couple of decades to arrive at. Enormous commitment, enormous dedication. The stability of our company, the consistency of our company, is really important.
00:57:36 – Should we be selling AI chips to China?
Dwarkesh Patel
Okay. I want to ask about China. I actually don’t know what I think about whether it’s good to sell chips to China or not, but I like to play devil’s advocate against my guests. So when
Dario
was on,
who supports export controls
, I asked him, why can’t America and China both have a country of geniuses in the datacenter? But since you’re on the opposite side, I’ll ask you in the opposite way.
One way to think about it is, Anthropic actually announced a couple days ago
Mythos Preview
. This model Mythos, they’re not even releasing publicly
because they say it has such cyber-offensive capabilities
that we don’t think the world is ready until we make sure these
zero-days
are patched up. But they say it found thousands of high-severity vulnerabilities across every major operating system, every browser. It found one in
OpenBSD
, which is this operating system that’s been specifically designed to not have zero days. It found one that’s existed for 27 years.
So if Chinese companies and Chinese labs and the Chinese government had access to the AI chips to train a model like Claude Mythos with these cyber-offensive capabilities and run millions of instances of it with more compute, the question is, is that a threat to American companies, to American national security?
Jensen Huang
First of all, Mythos was trained on fairly mundane capacity, and a fairly mundane amount of it. By an extraordinary company. The amount of capacity and the type of compute it was trained on is abundantly