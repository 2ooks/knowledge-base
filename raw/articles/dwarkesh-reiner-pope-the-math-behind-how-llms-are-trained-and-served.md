# Reiner Pope – The math behind how LLMs are trained and served
**Source:** https://www.dwarkesh.com/p/reiner-pope
**Date:** 2026-04-29
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
Transcript
183
7
11
Reiner Pope – The math behind how LLMs are trained and served
It's shocking how much you can deduce about what the labs are doing from a handful of equations and a blackboard
Dwarkesh Patel
Apr 29, 2026
183
7
11
Share
Transcript
Did a very different format with Reiner Pope - a blackboard lecture where he walks through how frontier LLMs are trained and served.
It’s shocking how much you can deduce about what the labs are doing from a handful of equations, public API prices, and some chalk.
It’s a bit technical, but I encourage you to hang in there – it’s really worth it.
There are less than a handful of people in the world who understand the full stack of AI, from chip design to model architecture, as well as Reiner. It was a real delight to learn from him.
Wrote up some
flashcards and practice problems
to help myself retain what Reiner taught. Hope it’s helpful to you too!
Reiner
is CEO of
MatX
, a new chip startup (full disclosure - I’m an angel investor). He was previously at Google, where he worked on
software
efficiency
, compilers, and TPU architecture.
Highly recommend the
scaling book
he coauthored for further study.
Watch this one on
YouTube
so you can see the chalkboard.
Sponsors
Jane Street
needs constant access to incredibly low-latency compute. I recently asked one of their engineers, Clark, to talk me through how they meet these demands. Our conversation—which touched on everything from FPGAs to liquid cooling—was extremely helpful as I prepped to interview Reiner. You can watch the full discussion and explore Jane Street’s open roles at
janestreet.com/dwarkesh
Google’s Gemma 4
is the first open model that’s let me shut off the internet and create a fully disconnected “focus machine”. This is because Gemma is small enough to run on my laptop, but powerful enough to actually be useful. So, to prep for this interview, I downloaded Reiner’s scaling book, disconnected from wifi, and used Gemma to help me break down the material. Check it out at
goo.gle/Gemma4
Cursor
helped me turn some notes I took on how gradients flow during large-scale pretraining into a great animation. At first, I wasn’t sure the best way to visualize the concept, but Cursor’s Composer 2 Fast model let me iterate on different ideas almost instantaneously. You can check out the animation in
my recent blog post
. And if you have something to visualize yourself, go to
cursor.com/dwarkesh
Timestamps
(00:00:00) – How batch size affects token cost and speed
(00:32:09) – How MoE models are laid out across GPU racks
(00:47:12) – How pipeline parallelism spreads model layers across racks
(01:03:37) – Why Ilya said, “As we now know, pipelining is not wise.”
(01:18:59) – Because of RL, models may be 100x over-trained beyond Chinchilla-optimal
(01:33:02) – Deducing long context memory costs from API pricing
(02:04:02) – Convergent evolution between neural nets and cryptography
Transcript
00:00:00 – How batch size affects token cost and speed
Dwarkesh Patel
Today, I’m interviewing
Reiner Pope
, who is the CEO of
MatX
,
which is a new chip startup
. Previously, he was doing
TPU
architecture and many other things at Google. This is a very different format from my usual interviews. This is going to be a blackboard lecture. We’re going to get up in a second. We in fact built this whole new studio with specifically this format in mind, so it’s a pleasure to get to inaugurate it with you.
We’re going to be talking about
model architecture
,
ML infra
, and many other things. The reason I think it’s an important topic is because once you understand how
training
and
inference
work in a cluster, a lot of things—about why AI is the way it is, why AI architectures are the way they are, why API prices are the way they are, and fundamentally why AI progress is the way it is—start making sense. You need to understand the details to get there, and you need a blackboard to understand the details. Reiner, thank you so much for doing this.
Reiner Pope
Very happy to be here.
Dwarkesh Patel
Full disclosure, I am an angel investor in MatX, but that’s unrelated to this podcast. Reiner, to kick us off I’ll ask this question. We have a couple of companies like Claude and Codex and Cursor offering something like Fast Mode, where for 6x the price, they’ll stream you
tokens
at 2.5x the speed. Mechanically, I’m curious what’s going on here. Why is it the case that you can pay more to get faster latency?
Two, could you keep going? Could you pay 100x more and somehow get much faster speeds? Three, could you go the other way? Could you have something like Claude Code “Slow Mode”, where if you are willing to wait for minutes on end, you could get even cheaper prices? Maybe this will help motivate the analysis that you’ll be doing through the lecture.
Reiner Pope
Great. To jump to the conclusion a little bit, the big effect is
batch
size. What we’re going to do now is quantify exactly what that looks like and what its implications are on latency and cost. There’s another effect, which you can call
speculative decoding
or
multi-token prediction
. We can maybe come back to that later, but the first thing that we’ll talk through is batch size.
What I’d like to introduce is the two principles of analysis. First, we’re going to look at a
roofline analysis
of how we run a
transformer
model on a cluster of chips. We’ll take a
Blackwell NVL72
cluster, so a rack of 72
GPUs
. The roofline analysis means we look at memory bandwidth and compute performance. The other side of that is that we’re going to look at just two simple factors of the model: the time to operate on the
weights
, and the time to operate on the context, the
KV cache
.
Let’s jump in. We’re going to try and estimate the time that it takes to run an inference of a certain shape. We’re not perfect here. We can’t exactly predict the time, so instead we’re going to approximate. We’re going to say that the time must be greater than or equal to a certain quantity. We’re going to consider two different aspects: the time it takes to do the memory fetches, and the time it takes to do the compute. It will turn out that this gives us very strong predictive power, even with a simple model.
One by one, what is the time that it takes to do the compute? There are really two things I need to do in the compute. I need to multiply by all of the active
parameters
, and then I need to do some work on the
attention
. Multiplying by all the active parameters, I have a certain batch size that I’m running, and I’ve got a number of active parameters in my model. Then I’m just going to divide this by the compute throughput, which is the
FLOPs
of the chip. This is a hardware concern.
This accounts for all of the compute time for all of the weight matrix multiplies. There’s a little caveat here. We’ve ignored the time to do any of the attention computation, but that in general will be quite small in comparison to this. So we’ll ignore this.
Dwarkesh Patel
I’ll just interrupt from time to time to ask some very naive questions or to clarify some basic points. For the audience, you’re not serving one user at a time. The batch refers to the fact that you’re serving many different users at the same time, and that’s a whole batch.
Reiner Pope
I can motivate the batch at least a little bit. We will see exactly why batch is such a favorable optimization. What will turn out to be the case is that if you do not batch together many users, the cost and the economics you get can be a thousand times worse than if you do batch many users together. We’ll be able to see that quite explicitly.
Then, number of active parameters. If I look at, for example, a
DeepSeek
model, the
DeepSeek V3
model has about 37 billion active parameters, and 700 billion total parameters. We’re focusing on just the ones that are active for a single AI token.
We’re modeling compute performance. I’m going to keep writing equals, but in all of these cases, you can think of this time as being
at least
this much, and maybe there will be some terms we ignored.
On the memory side, what do we need to do with memory? We need to fetch all of the weights, so there is some time to fetch the total number of parameters, not just the active parameters. There’s weight fetch time, and then in addition, there’s a KV cache fetch time. This actually depends on batch size. For every element of the batch, we have to fetch an entire context length worth of tokens, and there’s a size per token, bytes for one token. This is a model parameter.
Dwarkesh Patel
Maybe just backing up, let’s explain what the KV cache is real quick.
Reiner Pope
When I do a
forward pass
… Let me draw how the
autoregressive inference
works. This is during decode. If I have a bunch of text tokens… I’m drawing a
tensor
because ultimately the tokens are represented as a tensor in some
embedding
dimension. In this direction, I have the sequence length.
The work of running a decode is that I have to run each token through a whole bunch of matrix multiplies over a bunch of different layers. In general, I’m going to have to do that work over all of these tokens. But one step of decode is to produce just this one additional token up here.
What I’m going to do there is run a full forward pass of multiplying by all of the weight matrices in the entire model. But then I’ve got this attention mechanism where this token is looking at all of the past tokens, and what is it looking at specifically? It is looking at some internal representation that the model has produced of the tokens, and we call that the KV cache. This process of this single token attending to all of the history of tokens is attention. It is mostly dominated by memory fetches rather than matrix multiplies.
So we’ve got the amount of memory that we’re fetching shown over here, and then this is of course just divided by the memory bandwidth, so the memory bytes per second. In fact, these equations here are enough for us to now draw some fit lines. The things that we’d like to look at are sensitivity to batch, and then also, which we’ll draw separately, to context length. We said that the big effect you can get is some trade-off in latency versus cost in batch size.
Let’s draw them out. I think there are just really two graphs that we want to draw. We’ll first draw batch size versus time here. When we look at the shape of this, we’ve got a maximum of the sum and then another term. Let’s look at these terms one by one and how they scale: the time for compute and memory, and how they show up.
Let’s first look at this compute time. This is just purely linear in batch size with no offset, so it is some curve like this. This is
t
compute. On the memory side, we’ve got some portion here that is just this constant in some base offset here, which is the weight fetch. Finally, we have this term here, which is the KV fetch, which is pretty linear in batch size, and so it looks like that. The sum of this plus this maxed with this… Let’s at least first draw the sum. The two memory times in conjunction end up looking on this curved slope like this. Then the overall maximum is—I’ll draw a little thicker here—the maximum of these two curves.
What does this mean? This is a latency plot. If I grow my batch size, initially I get some not very strong dependence on batch size, so there is some lower bound on latency here. This already partially answers the question. For a given hardware configuration—and we can talk about varying the hardware configuration—there is a lower bound on latency. It is simply that I need to read all of my total parameters from memory into the chips, and that takes a certain amount of time. If I use all of my memory bandwidth, I can’t do any better than that.
Dwarkesh Patel
It seems like the way you’ve drawn the slopes for compute time and how the KV grows—and what implication the KV has on memory time—
Reiner Pope
What if this were above or below?
Dwarkesh Patel
Yeah, is that necessarily the case? If this is always true, then as batch size grows compute always dominates KV, which suggests that if you have a big enough batch size, maybe memory is never an issue.
Reiner Pope
This is really sensitive to the
context length
, so I think we should come back and explore this. As you vary the context length, the KV fetch time will go up and up, and that will cause a transition from compute-limited to memory-limited.
Dwarkesh Patel
Is there something especially significant about the slope being exactly the slope of the compute time?
Reiner Pope
Whenever we have balance points, it says that you’re getting it exactly right. For the particular context length where the slopes match, that says I am equally memory-bound and compute-bound, which is a really desirable place to be.
Dwarkesh Patel
This is a very simple algebra problem, but suppose the optimal is 100K context length, and you go to 200K context length. Does your
MFU
go down to 50%? Does it have a humongous impact on MFU to be slightly outside of the optimal context length range, the Goldilocks zone?
Reiner Pope
That’s right. That is true as modeled here. There is a key point here that I’m modeling the memory fetch as linear in context length. That depends on model architecture. It is true for all of the model architectures with
dense attention. Sparse attention
actually scales much better than that.
Dwarkesh Patel
Got it. Is sparse attention what everybody uses in practice?
Reiner Pope
I’m pretty excited about sparse attention. It’s hard to know what the labs are using. DeepSeek has
published a sparse attention mechanism
. I’ll just put a plug in that some of the DeepSeek papers that have published sparse attention end up putting a square root in this term.
So far, we’ve looked at the latency. It’s hard to read off cost from this. If I think about what cost means… To run this inference, I’m going to use the GPU for a certain number of seconds, like one millisecond or 20 milliseconds. I have to pay the rental time for that time. So it’s $2/hour per GPU or something like that.
That’s the cost of this inference, but how many tokens have I processed during that inference? That is the batch size. What we actually want to plot is the cost versus batch size, which is
t
over
B
versus batch size. This is the cost per token. We have to imagine dividing each of these three curves by
B
, so multiplying by this reciprocal. What we end up with there is… The compute curve was linear. We divide by
B
, and that makes it a constant here. This is
t
compute. The KV fetch was linear, and now it becomes a constant as well. Then the weight fetch was constant, and now we’ve divided by
B
, so it becomes this hyperbola.
Again, we’re going to compute the max of the sum. The sum of these two terms shifts the hyperbola up. The sum of the KV fetch and the weight fetch gives us a higher hyperbola that’s like this. Then we’re going to take the max with the compute here. We end up with this being the overall shape that we care about.
Again, we see some limiting behavior. The cost initially starts very high at a batch size of one. It almost goes to infinity because we’ve got so many weight fetches that are not amortized over a large batch size. But as we increase the batch size, the weight fetches become amortized over so many different batch elements that their cost grows very small, and eventually the compute time ends up driving the cost. So there is a limiting lower bound on cost, which is this line here.
Dwarkesh Patel
So Claude Code Slow or Codex Slow or whatever would just live on this line. It wouldn’t help much because you’re not able to amortize the KV values over a much bigger batch.
Reiner Pope
They’re unique per batch. The compute is also unique per batch. So what is the minimum work you can do per batch after amortizing everything else away?
Dwarkesh Patel
This point where you are no longer memory bandwidth bound, practically how big a batch do you need? How big are the batches practically for frontier models?
Reiner Pope
You can just solve for that. It’s not even particularly sensitive to model architecture. Let’s go ahead and do that.
What we’re talking about is when the memory time is equal to the compute time. That’s what that question is. Because we’re focused on what the batch size is—and really there’s a question of when the weights are amortized over the multiplies—I’m going to focus on comparing the weight fetch time to the weight multiply time. I’m going to disregard the KV fetch term just to simplify the analysis so we can get a clean answer out. We’re going to equate this portion with these two times.
Writing that out, we get
N
, number of total parameters, over memory bandwidth, is equal to batch size times number of active parameters divided by the compute performance. Looking over here, everything on the top are model parameters. Everything on the bottom are hardware parameters. It turns out to be nice to rearrange them such that we have the hardware parameters on one side.
This is equivalent to FLOPs over memory bandwidth being equal to batch size times number of active parameters, divided by the number of total parameters. This hardware parameter ends up being a dimensionless constant. If you look in terms of FLOPs… What are the dimensions of this? This is multiplies per second. This is bytes per second. So that’s not quite dimensionless. But what you do is you say, how many
FP4
multiplies per second times the fact that each FP4 is half a byte. I can actually make this end up being dimensionless. On most GPUs, this ends up being somewhere around 300.
Dwarkesh Patel
Has that ratio changed over time as we’ve gone from model generation to model generation, where the FLOPs keep increasing?
Reiner Pope
This is a hardware parameter. To what extent has the hardware changed? From
A100
to
H100
to
B100
, the FLOPs have increased substantially, the memory bandwidth has also increased substantially, and it has remained reasonably stable.
We can express this one as well. This is a sparsity parameter. I might even phrase this slightly differently. Let’s solve for batch size in total. Moving this back over to the other side, we end up with batch size needs to be bigger than approximately 300 times sparsity. For example, in DeepSeek I activate 32 out of 256 experts, so this would be 8 for DeepSeek.
This actually gives you a ballpark which is remarkably accurate to practice. Generally, people will go a little bit larger than this. They don’t really want to be exactly at the balance point because real-world efficiencies aren’t as good as a roofline analysis would say. But take this and maybe double or triple it.
Dwarkesh Patel
Okay, so it’s two to three thousand tokens per batch. But then if you included the KV cache, the implication would be that the optimal batch size...
Reiner Pope
Should grow larger. We solved for the equivalence between when compute time is equal to memory time. If I add in something that consumes more memory bandwidth, then I have less available for the weight loads. I need to grow the memory bandwidth more, and therefore the batch size more.
Dwarkesh Patel
This seems incredibly small. This would be less than one sequence, right?
Reiner Pope
Keep in mind that I’m talking about the number of tokens that I’m generating one more token for. It’s actually 2,000 unique sequences.
Dwarkesh Patel
Got it. We’re just talking about a single forward pass on these sequences. You think of the batch as the number of sequences.
Reiner Pope
That’s right.
Dwarkesh Patel
If you’ve got a frontier model and you are actually doing inference, surely they must have more than 2,000 concurrent users. Is there any added latency from the fact that you need to have the whole batch fill up? Or if you have a reasonable amount of users, is it so unlikely that it would take you 100 milliseconds to fill up the next 2,000 slots?
Reiner Pope
The way to think about this is: when does the train depart, as a model? Let’s say I’ve picked a batch size that I’m going to run at. By the way, this intersection point is the same intersection point here. I pick this batch size, and I know that it’s going to take, for example, 20 milliseconds, which is a common place this ends up landing.
This is a timeline of what is running on the GPU. It’s going to start a new batch every 20 milliseconds regardless. You can think of this as a schedule for the train. A new train departs every 20 milliseconds. Any passengers who are ready board the train. If the train is full, they wait until the next train. If the train is not full, the train is going to go anyway.
In terms of what that means for queuing latency, the worst case is that a request arrives just after the train departed. It has to wait for the next train, so that’s up to 20 milliseconds, and then it has to wait for that train to complete. So the worst-case latency is 40 milliseconds.
Dwarkesh Patel
How is the 20 milliseconds derived?
Reiner Pope
It’s a rule of thumb, but where it comes from is not fully explained yet. So far we’ve focused on memory bandwidth and compute time. When we look at memory, the other consideration is that we want to use all of the memory capacity we have. Generally, we’re going to use all of that memory capacity to store the weights or the KVs. In the time of doing a forward pass, we want to read all of the memory capacity into the chip. That is capacity divided by bandwidth. That tends to be 20 milliseconds on many different generations of
HBM
.
Dwarkesh Patel
The units make sense. You would have a byte divided by bytes per second.
Reiner Pope
For example, on the
Rubin
generation, it is something like 288 gigabytes divided by 20 terabytes per second. This comes out to about 15 milliseconds.
Dwarkesh Patel
Let me make sure I understand what this is saying. I understand the unit analysis. What it’s saying is we can evacuate and replace the HBM in this amount of time. So we don’t want to be in a situation where the HBM is not big enough that we’re not actually able to write everything we want to it or take everything out of it. Or we don’t want to be in a situation where our ability to write back and forth is so small compared...
Reiner Pope
There are sort of two scenarios. Why don’t we pick a latency that is bigger than 15 milliseconds? If I think about what that means, it means I actually have time to read the HBM twice. By the way, most HBM accesses are reads, not writes. It’s almost all reads because the weight matrices are read-only, and almost all of the KV cache accesses are reads. In around 30 milliseconds, I can read all of HBM twice, but what’s the point of that? I don’t want to read the weight matrices twice. I don’t want to read the KVs twice.
Dwarkesh Patel
Makes a ton of sense. A couple of quick questions. If it is the case that the optimal batch size is something like 2,000, it’s totally dependent on the sparsity, not dependent on the model size or anything.
Reiner Pope
Sparsity shows up in model size, but beyond that, it only depends on sparsity, not on scale.
Dwarkesh Patel
That’s a very interesting result. One question is how much of a push towards centralization is it that you would have these economies of scale from inference for batching? But it seems like it’s not that big a deal. Is 2,000 users at the same time a lot? It doesn’t seem like a lot.
Reiner Pope
We can do a bit of analysis on this. You can think of it in terms of number of users, but a more productive way to think of it is in terms of tokens per second. What does this batch size mean in terms of tokens per second of the system?
Tokens per second is going to be equal to the batch size. We run a batch of tokens, and we do that every time interval, which is equal to the 15-millisecond or 20-millisecond number. This ends up being batch size times about 60, so 64 x
B
. This ends up being around 2,000 x 64, so 128,000 tokens per second. This is in more digestible units.
It’s hard to reason about concurrent users, but what is the global traffic for a system? When you look at some of the announcements, sometimes the API providers will brag about how much traffic they have. The numbers I remember from some announcements of Gemini last year were in the hundreds of millions of tokens per second worldwide. This is one-thousandth of that.
Dwarkesh Patel
Gemini is big. One-thousandth of Gemini is a lot. To actually be competitive at scale, you need to be able to serve at least one-thousandth of Gemini. That’s interesting.
The more sparsity you have, the less compute you need. It does seem that as batch sizes get bigger, compute ends up being the bottleneck, according to this analysis. Then the question is, how far can you take sparsity? As the sparsity ratio increases, as you have fewer active parameters relative to total parameters, how much is the performance of the model degrading? Is it degrading faster than you’re saving compute by increasing the sparsity factor?
Reiner Pope
You mean the quality of the model, rather than the speed of the model. Unfortunately, we’re not able to answer that analytically. That is an empirical question of model quality. The best I can do is pull up a paper and answer that empirically.
Dwarkesh Patel
Should we pull up the paper now?
Reiner Pope
This paper is “
Unified Scaling Laws for Routed Language Models
.” It’s a somewhat old paper by this stage, but one of the things they looked at is if I keep increasing sparsity, what is the model quality impact? This answer is very sensitive to the actual choice of
mixture of experts
. Mixture of experts has been around for a really long time, maybe even back in 2017, but the techniques have changed a lot. DeepSeek’s mixture of experts was a big change in how it worked. There have been older papers, like “
GShard
” and “
Switch Transformer
”. The actual empirical results are going to depend on all of that.
On one of the older techniques shown here, you can see if I hold constant the number of active parameters at a certain size, and then I increase the sparsity, which they call expert count, the quality keeps increasing. If you imagine drawing a horizontal line from 1.3B dense across, you end up seeing that, in this case, the 64-expert 370-million activated parameter model is as good as a dense 1.3-billion model.
Dwarkesh Patel
So in some sense, it’s actually not amazing returns where you need to increase total parameters a hundredfold to get the equivalent of 10x as many active parameters.
Reiner Pope
Actually even more so. It’s a huge increase in parameter count for a modest increase in efficiency.
Dwarkesh Patel
So in this case, actually it’s 4x?
Reiner Pope
64x for 4x.
Dwarkesh Patel
So while it is true that you get this benefit of being able to economize on your compute time if you increase sparsity, naively it would seem like a trade-off worth making. But if you’re decreasing this by 2x and then having this go up by 8x every time you double sparsity...
Reiner Pope
Is that good or bad, actually? Even from a memory point of view… Keep in mind you are doubling this portion of the memory fetches, which is amortized by batch. So just keep running a larger batch size. From the point of view of the analysis we’ve done here, this is a pure win. Keep doing it until you run out of available users, basically.
There’s this equivalence where if I have a lot of users, I can go to a much sparser model. From that point of view, it’s a reasonable trade-off. The other trade-off that shows up here is that it also consumes memory capacity. We’ve only reasoned about memory bandwidth here, but it also consumes memory capacity.
Dwarkesh Patel
I see. Let me make sure I understood. You’re saying we want to spend less time computing, therefore we do more sparsity. To make that work, we need bigger batch sizes. Which means we need more memory capacity to have more sparsity.
Reiner Pope
Maybe this would be a good point to talk about how a mixture of experts layer is typically laid out on a rack of GPUs.
00:32:09 – How MoE models are laid out across GPU racks
Dwarkesh Patel
Cool. Makes sense. Where were we?
Reiner Pope
Sparse mixture of experts. Maybe how we lay that out on a GPU.
Let’s zoom in on the mixture of experts layer first and draw what that looks like. Typically, we’ll have some kind of a router layer, which is making the decision of where we route the tokens to. We get tokens coming in here, they go through a router layer, and then we have a bunch of different experts. I’ll draw a few more to line some up.
The router will make a decision of which experts it’s going to route to, and it will be a small fraction of them, maybe 1 in 32. Maybe it will make a decision to route to this one, maybe this one, and maybe this one. Each expert itself is a normal
MLP
. It has an up projection and then a down projection with a nonlinearity in between.
Then finally, we do the inverse operation. Where we were broadcasting things out here, we’re going to bring them back in and sum them up. Bringing them in like this. Then finally, we have our residual connections. The token is also passed through here, and it gets added to the result of the MoE layer. This is a normal MoE layer.
What I want to talk through is how this is mapped to a GPU rack and what this means for communication, because I think this will start to show some of the limits of how sparse we can go. The standard practice here, and it is the best solution, is to use
expert parallelism
. That means different experts go on different GPUs. If we take something like a DeepSeek model, they have 256 experts. Let’s say we want to run that on a
Blackwell
rack. There are 72 GPUs.
We have a divisibility problem. This is not a power of two. We’ll just simplify and say we’re only going to use 64 of them. Just ignore the other eight. It’s not a big deal. So we have four experts per GPU. Very simple. For the sake of the diagram, actually let’s just say we have two experts per GPU. We end up just putting these GPU boundaries. Every pair of experts is on its own GPU.
Then we can look at the communication cost. We had some tokens stored centrally here. They get routed to all of these experts, and there is some communication cost paid here. There’s the same communication cost paid on the output. The hope is that this does not become communication limited.
Now what is the traffic pattern here? The traffic pattern here is that any GPU will be talking to any other GPU, depending on the decisions made by the model. This is an
all-to-all traffic pattern
.
Dwarkesh Patel
When you say any GPU in the pre-tense, the router is more than one GPU?
Reiner Pope
I drew this as one router. In reality, you would actually have many copies of the router, and you would have as many routers as GPUs, in fact.
Dwarkesh Patel
As the incoming traffic.
Reiner Pope
Yeah. These are 64 GPUs and these are 64 GPUs. It’s actually the same GPUs, we just draw them as separate because they’re serving different purposes. So at this point, any GPU can be sending to any other GPU.
This all-to-all pattern of communication that shows up and how the Blackwell racks are configured is a perfect fit for the communication pattern that the MoE actually wants to do. However, if you think maybe one rack is too slow and I want to do two racks, then I have this challenge that maybe I’ve got some sort of rack boundary drawn outside here like this, and I no longer have all-to-all communication between all the GPUs in two racks. The rack-to-rack communication ends up being a substantial bottleneck.
The fundamental thing here is that one rack bounds the size of an expert layer you can do. This has been part of what’s been driving towards larger and larger interconnect domains.
Dwarkesh Patel
Before we continue, it may be worth you explaining what exactly a rack is. The differences in bandwidth between a rack and within a rack, and the all-to-all versus not all-to-all nature of communication within versus outside.
Reiner Pope
This is a place where it starts to be very different between Nvidia, for example, and Google, and then others, including us. Generally, a rack is a physical structure. It’s a few meters tall, a meter or two wide, depending on configuration, and it stores some number of GPUs or
XPUs
, which is typically about 64.
What constrains it being a certain size is power delivery, weight, and cooling ability. It ends up being about this size in many cases because of these physical constraints. When I deploy a data center, a data center may have thousands of these racks. I’ve got one of these tall racks, it’s got a bunch of GPUs in it, and so on. And then I put another rack next to it.
Dwarkesh Patel
You make it sound so easy.
Reiner Pope
Right. I just drop them in. In Nvidia’s case, the communication topology… They actually put the GPUs on the outside of the rack, and then they put these switches on the inside of the rack. What this ends up being is that there’s a set of switches in here. These are the
NV switches
. Then they run a bunch of cables. Every single GPU has cables going to the switches in the middle. The switches have connections to all the GPUs. All of the GPUs can talk to all the other GPUs in just two hops: going to the switch, going to the other GPU.
Now, when I want to leave the rack, I end up going via a different path. The GPUs also have a much slower connectivity, which is typically about eight times slower. The green that I drew here in the GPU cases is the NVLink. More generally, it’s called the
scale-up network
. You will typically also have a
scale-out network
, which allows you to connect to some
data center switch
. All of the GPUs will have some connectivity up to some data center switch somewhere. This is the scale-out, and it tends to be about 8x slower in bandwidth.
The challenge, if you want to lay out a mixture of experts layer across two racks, is that half of the GPUs here are going to be wanting to talk to the GPUs here. On average, when I look at where the tokens on these GPUs want to go, half of the tokens want to go inside the rack. That’s great. They can use the fast scale-up network. But half the tokens are going to want to leave the rack and go to the other rack, and that’s not as good. They need to use a much slower network, and so that becomes the bottleneck on the all-to-all pattern.
A different choice would be, why don’t I have a big switch here and connect everything to a much bigger switch that actually combines the two racks together? There are many ideas in this direction, but in general, the reason you have this hierarchy of switches rather than one big switch is to manage the cabling congestion. You just need to run a large number of cables.
Dwarkesh Patel
Sorry, is that question you just asked basically, why isn’t it a bigger scale-up?
Reiner Pope
Exactly. Why not just have a million chips in scale-up or a thousand chips?
Dwarkesh Patel
What has changed that has allowed Nvidia to go from
Hopper
, which was 8, then Blackwell is 72, and now Rubin will be... is it 500 something?
Reiner Pope
Yeah, 500 and something.
Dwarkesh Patel
What has allowed that to happen?
Reiner Pope
From Hopper to Blackwell is mostly just the decision to switch from trays as the form factor to switching to racks as the form factor. That’s a product decision. There wasn’t a substantial technical barrier there.
Switching from 64 to 500 or so, there’s a bit of
Jensen
math there, but there is at least a genuine 4x increase, which is coming from a much more complicated and difficult rack design. That is actually a new physical design to run more cables.
Dwarkesh Patel
The cable complication is just the cost of figuring out which cable hops to which, or which signal goes from what to what?
Reiner Pope
Let’s zoom in on this and look at the wire density. I’ll draw this diagram just once more so we have a bit of a cleaner and larger version to work with.
Let’s say I have some switches in the middle. Initially, I’m going to start with just two GPUs on each side or two trays of GPUs on each side. Let’s say maybe each tray wants to have two cables coming out of it. I physically run vertical cables that look like this running out to the switches. Now if I want to double the number of GPUs in a rack, I need to run literally twice the density of cables. I need to run these as well.
Dwarkesh Patel
Extremely naive question. But if you look at a physical data center, it seems like there’s a lot of space within a rack. I don’t know. The cables are really big and...
Reiner Pope
There is space outside the rack. Inside the rack… As they become more optimized, these racks are very tight. There’s connector density going from the tray into the rack and the rack’s backplane, and the backplane itself has a really high density. There are other physical constraints including the bend radius of cables. You don’t want to snap them and so on.
Dwarkesh Patel
Okay, so it’s literally the physical space to put a cable that’s constraining it. I had no idea. Interesting. That seems surprising. The rack is so big and we can’t just stuff more cables in there.
Reiner Pope
Rack design is not my expertise, but when I talk to folks on what constraints they’re up against, it’s a combination of things. What are the big physical things you’re optimizing for? Space, weight of the rack. It’s actually really heavy, so you need enough metal to not sag and fall. But then you add more metal, and it’s heavier. Then power and cooling. All of those are competing. Modern racks are pushing all of those to very extreme physical limits.
Dwarkesh Patel
When was
GPT-4
released again? Was it 2022 or 2023?
Reiner Pope
2023.
Dwarkesh Patel
Okay. And it was rumored to be over one trillion parameters. It seems like only now, within the last six months, have models been getting released that have significantly more parameters than the model released three years ago, when supposedly there should have been this scaling in the meantime.
Is the reason that we were just waiting for racks with enough memory to hold a five-trillion parameter model, along with its KV cache for enough users for a lot of sequences? Or if you’re doing
RL
, a similar consideration of actually holding the KV cache for the batch of problems you’re trying to solve.
If you look at Hopper, you had eight Hoppers, and I think that’s 640 gigabytes as of 2022. With Blackwell finally, which was deployed in…?
Reiner Pope
Very recently. Maybe last year.
Dwarkesh Patel
Last year. You finally have a scale-up on the order of 10-20 terabytes, which is enough for a 5T model plus KV cache.
Reiner Pope
Deploying in larger scale-up domains is a huge unlock. I’ve drawn here the Nvidia Blackwell deployment. The Google deployment has actually had very large scale-up domains for a long time.
Dwarkesh Patel
That also explains why Gemini seemed to be ahead. It just seems like Gemini has had successful pre-training for longer than some of the other labs.
Reiner Pope
Not having been there at the time, I’m not sure how much is coming from successfully deploying higher sparsity ratios, which it could be. It could also be a whole bunch of actual modeling things, specifically how you do the mixture of experts. We’ve seen the DeepSeek mixture of experts activate more experts, but finer-grained experts. That was a big innovation. I’m sure there are many other innovations on the model architecture as well as on the training data.
It’s hard to disentangle all of them, but what shows up in terms of the limits of what you can do is that the active parameters, as we saw, are limited by the compute cost, and the total parameters are limited by the scale-up size.
00:47:12 – How pipeline parallelism spreads model layers across racks
Dwarkesh Patel
When you’re operating within a single scale-up domain, is that a consideration specifically for either forward or backward, or specifically for
prefill
versus
decode
? Or is it preferred to always be within a scale-up whatever kind of workload you have, whether you’re doing a pre-training run, RL generation, or inference for users?
Reiner Pope
Really interesting. To answer that question, we’re going to need to talk about the communication patterns. We’ve talked about the mixture of experts communication pattern. That is this all-to-all. All-to-all very strongly favors full connectivity, which is what we’ve just shown here, and it favors being within one rack.
There are other kinds of parallelism besides expert parallelism, which we just showed here. In the literature is
tensor parallelism
. With the trend towards smaller experts, this has become much less relevant, so we can ignore that. But the other two things we have available are
data parallelism
and
pipeline parallelism
. They can be a much better fit for using multiple racks.
Let’s focus on pipeline parallelism specifically. This is one layer of MoE. I’m going to have a hundred more layers up above. I could decide at this point, for example, to move to a different rack, change rack. Now, is that going to become a communication bottleneck? We can actually solve for when this becomes a communication bottleneck. Before we do that algebraically, let’s visualize it out and sketch the path. We’re going to have another MoE layer, and another MoE layer here, and so on.
Let’s say I change rack here, and then some number of layers later, I change rack here as well. The methodology we’re going to use to determine whether we have a communication bottleneck at the point where we change rack is we’re going to compare the scale-out bandwidth requirements to the scale-up bandwidth requirements. Let’s write this. The hint is going to be that there’s a lot more sends here. We’re sending many things here, whereas we’re only sending one thing here, and we’re also maybe doing it many times. That’s what makes the difference.
Dwarkesh Patel
Can I try to guess? Just out of curiosity, to see if I’m actually understanding, it seems like you’re sending batch size into the rack.
Reiner Pope
In here? Yes.
Dwarkesh Patel
But the communication within the rack is batch size times number of GPUs.
Reiner Pope
Number of activated GPUs. I don’t send to this GPU at all. There’s an explosion from 1-3x larger here in this diagram. The key thing is that I didn’t even need to send to this GPU at all, and so that’s a big saving.
We’re going to talk through to what extent scale-up is a bottleneck over scale-out. We will directly jump to the ratio of the time spent on scale-up over the time spent on scale-out. This is the quantity we’re talking about.
The first consideration is that scale-up is 8x faster than scale-out generally. At a baseline, if the bandwidths were the same, we would have this 1/8, which is coming from bandwidth. But then we have some amount of expansion in how much data we’re sending. If one token comes in here, then this one token gets routed to, in the DeepSeek case maybe 32 experts or 16 experts. It gets routed to some number of experts. So this is the number of activated experts. This same thing applies on multiple different layers, so maybe I’m going to run two layers. There’s also multiple times the number of layers per stage.
Dwarkesh Patel
Don’t you need to multiply the whole thing by two for the all-to-all?
Reiner Pope
For the up and down. Yes, there’s a factor of two. Thank you.
What we would like is for the scale-up time to be greater than the scale-out time, because the scale-up time is the more important and precious resource. We would like this number to be greater than or equal to one. This really doesn’t seem hard. There’s just a factor of 8 that we need to overcome. So we need the product of these three things to be bigger than 8. Typically we have a fairly large number of activated experts. It could be 8 by itself. Then we can increase the number of layers per stage a lot until we satisfy this.
What this ends up looking like is that I can have an entire pipeline of racks where one rack does one layer, and then I move on to the next rack and do another layer, and then I move on to the next rack and do another layer.
Dwarkesh Patel
It’s interesting to me that the best parallelism strategy in practice ends up being one which physically resembles the actual architecture. It’s not some galaxy brain thing. It’s like, “Oh, we have experts, we’re going to put them on different GPUs, or we have different layers, we’re just going to put them on different racks.” I feel that’s interesting.
Reiner Pope
The cutting matches the model architecture.
Dwarkesh Patel
Exactly. It could have been something wackier with tensor parallelism and whatever.
Reiner Pope
The galaxy brain way to think of it is, what are all the different dimensions in which a model is scaled up? It is scaled up by layers, it is scaled up by the model dimension, it is scaled up by the
DFF
dimension, it is scaled up by the number of experts. Every single one of those numbers you can choose to cut along. If those numbers are big enough, it eventually becomes profitable to cut along there. We have selected two of them. The other two, in the way models are typically sized, are not profitable.
Dwarkesh Patel
So there’s a talk by Ilya where he says, “Today we know not to do pipeline parallelism.”
And
Horace He
gave my friends and me… I hate that it sounds like a Dr. Seuss quote. But he gave us a lecture on these different kinds of parallelisms. He said the problem with pipeline parallelism is that, other than the bubbles, it creates these architectural constraints.
Kimi
, for example, has these
residuals
where attention attends to layers a few back, so it becomes hard to implement in this way.
Reiner Pope
I guess we didn’t fully articulate even what is the benefit that we’re getting from pipelining. These complexities are real. Pipelining is a massive hassle, but it does give you some benefits. You can then decide whether those benefits are worth the costs. It has some benefits in inference, maybe bigger benefits in training. In inference, what are we saving on? Are we saving on memory time or compute time? Not really. We’re just moving the memory time from one chip to another chip, or one rack to a different rack. There’s no actual benefit in runtime.
However, what we are saving on is memory capacity. If we think that the memory in a rack is a bottleneck, then there’s a constraint on how fast we can go. Pipelining allows us to massively reduce that bottleneck.
Dwarkesh Patel
The opposite connotation to this… Before this interview, I was chatting with
Axel
, who’s a GPU performance engineer at
Jane Street
. He was explaining that to do pipelining, you have to do micro-batches rather than full batches. If you do micro-batches, then you’re by definition not able to amortize loading the weights across all the users or all the sequences. The positive connotation of that is you don’t have to use as much memory. The negative connotation is that we can’t amortize loading the weights across all those users. Maybe it’s worth explaining why you have to do micro-batches.
Reiner Pope
Shall we draw the pipeline bubble? What is this micro-batching that shows up in pipeline parallelism?
I’ll focus on inference first. It’s a slightly simpler problem. I’m going to draw time, and then which rack we’re on. The idea is that maybe I’ll have four racks. I’ve got an inference that is going to step through these four racks in some time like this. This is inference number zero. It runs at a certain batch size and steps through all the pipeline stages like this.
Now, if we were to say, “Well, we’re going to run inference number one here,” this is clearly a massive waste. Like three-quarters of the time each of the racks is doing nothing. We don’t actually run inference one here, we run it as soon as we can, which is immediately after inference zero finishes. And then we keep going. If we hadn’t filled this in, we would call this the pipeline bubble. When I’ve drawn it in this inference context where we’re only going in a forwards pass, it’s obvious. Why would you do this stupid thing? In a training context, it’s maybe less obvious. But in the inference context, it’s really natural to make this change.
Dwarkesh Patel
Oh, interesting. This is sort of obvious, but the difference between micro-batch and batch doesn’t matter at all in inference because you can just call it whatever you want. It only matters in training because there is an optimal batch size.
Reiner Pope
Yes.
Dwarkesh Patel
Before you do a full backward step, you want to have accumulated all the sequences in that batch. If you want to do pipelining in training, in order to avoid that bubble, you need to—
Reiner Pope
Should we draw the training diagram with that? Let’s do that. This is the inference diagram, and I’ll call this forward so we don’t have the wrong thing showing up there. Let’s do the same thing for training now. We’ve got a forwards pass, but at some stage we’re going to have to transition to a backwards pass.
We’ll do some number of batches in the forwards pass, and then we’re going to transition to the backwards pass for everyone all in one go. The inference part is the same here, but then we do a hard stop at this point and transition everyone to the backwards pass, with similar numbering like this.
Dwarkesh Patel
It may be worth clarifying the reason there is that hard stop is because you want to do a whole batch at once for the backward step. And then there is an optimal size for how big that batch should be.
Reiner Pope
Smaller is always better, actually, is a way to put it. From an
ML convergence rate
perspective, smaller is always better because you’re getting the freshest information from the
gradient descent
.
Dwarkesh Patel
But from a total training time perspective?
Reiner Pope
From a total training time perspective, smaller is worse from a systems perspective. The optimum is the trade-off between those two.
So you pick a