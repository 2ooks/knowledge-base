# Giving Agents Computers — Ivan Burazin, Daytona
**Source:** https://www.latent.space/p/daytona
**Date:** 2026-05-21
**Author:** Latent Space
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Latent Space: The AI Engineer Podcast
Giving Agents Computers — Ivan Burazin, Daytona
14
1
1×
0:00
Current time: 0:00 / Total time: -1:10:27
-1:10:27
Audio playback is not supported on your browser. Please upgrade.
Giving Agents Computers — Ivan Burazin, Daytona
We chat with Daytona's CEO about their insane 74% MoM Growth, 850K Daily Runs, Bare Metal Sandboxes, RL Evals, and the New Agent Cloud
May 21, 2026
14
1
Share
Transcript
Take the
2026 AI Engineering Survey
and get >$2k in credits and
AIE WF tickets
!
On the product side, everyone is getting Computer -
Perplexity
,
Manus
,
Cursor
, and so on. Meanwhile on the research side, agentic evals like TerminalBench and GDPVal are also assuming computer (
Harbor
). On both ends, the consolidating
LLM OS stack
has become a standard toolkit, and Daytona is one of a small set of AI Infra companies that are booming because of it.
“The end of localhost”
has been Ivan Burazin’s obsession for more than a decade.
Ivan Burazin
@ivanburazin
I've been rooting for the death of localhost since 2010.

And it's finally happening with autonomous agents being the final nail in its coffin.

You can't close your laptop and pause an agent mid workflow. Neither can you can't limit agents to local compute.

Development
9:00 PM · Apr 1, 2026
·
2.92K Views
10 Replies
·
25 Likes
Something that is all too familiar…
Infobip Shift 2022
Long before agents became the default way people talked about software development, Ivan was already chasing the idea that
development should not depend on a fragile local machine
.
CodeAnywhere
, one of the first browser-based IDEs, was an early attempt at that future: move the development environment into the cloud, make setup reproducible, and free developers from the endless “works on my machine” tax.
The thesis was directionally right, but the market wasn’t ready yet.
However, agents changed that.
They do not care about a laptop, desk setup, or favorite editor.
They need a computer they can access through an API: something stateful enough to keep working, fast enough to spin up instantly, flexible enough to resize, isolated enough to be safe, and composable enough to run the messy real-world workflows that real software engineering actually requires.
Daytona isn’t just selling
“sandboxes”
in the narrow code-execution sense. It is
the latest version of Ivan’s original localhost thesis
.
In this episode, Daytona’s CEO joins swyx to explain
why AI agents need more than code execution boxes
: they need composable computers, stateful sandboxes, instant startup, dynamic resources, and infrastructure that can survive workloads going from
zero to 100,000 CPUs.
We go deep on the
new agent compute market
: Daytona’s hard pivot from human dev environments to AI sandboxes,
the New Year’s Eve MVP
that customers begged for, why Daytona runs on bare metal with its own scheduler,
how one customer runs almost 850,000 sandboxes a day
, and why RL/eval workloads went from 0% to roughly 50% of usage in just months. Ivan also explains
why agents need Windows and macOS machines
, why CLI may matter more than MCP, why Kubernetes is painful for this workload, and why the future AI cloud may look more like Stripe than AWS.
We discuss:
How Daytona
grew out of CodeAnywhere
, Shift, and the “end of localhost” thesis
Why Daytona pivoted
from human dev environments to AI sandboxes
Why agents
need composable computers
instead of
disposable code execution boxes
The New Year’s Eve MVP
that customers chased API keys for
Why Daytona chose
bare metal, stateful snapshots, and its own scheduler
How Daytona spins up one sandbox in
~60ms and 50,000 sandboxes in ~75 seconds
Why Daytona’s biggest customer runs
~850,000 sandboxes a day
How RL/eval workloads create
zero-to-100,000 CPU spikes
Why RL workloads went from
0% to roughly 50%
of Daytona usage
Why customers compare Daytona against
EKS/GKS
and say they’re
“never going back”
Why every AI agent may need a computer
, including Windows and macOS environments
The Apple licensing constraints that make macOS sandboxes hard
Why
CLI
gives agents more power than
MCP
How
open source
helps agents integrate Daytona
Why agent-generated PRs may
break today’s CI/CD assumptions
Why AI SaaS companies
reselling tokens
may face a cold shower
Why the AI cloud may look more like Stripe than AWS
Ivan Burazin
LinkedIn:
https://www.linkedin.com/in/ivanburazin
X:
https://x.com/ivanburazin
Daytona
Website:
https://www.daytona.io
X:
https://x.com/daytonaio
Timestamps
00:00:00 Hook
00:01:12 Introduction
00:03:15 CodeAnywhere, Shift, and the end of localhost
00:05:58 What Daytona is: composable computers for AI agents
00:08:07 The pivot from dev environments to AI sandboxes
00:10:17 The New Year’s Eve MVP and customers begging for API keys
00:12:56 Bare metal, stateful sandboxes, and Daytona’s scheduler
00:17:28 60ms startup, 50,000 sandboxes, and 850K daily runs
00:21:53 Spiky RL/eval workloads and the new agent infra problem
00:28:12 RL workloads, Kubernetes pain, and dynamic resizing
00:33:31 Why every AI agent needs a computer
00:38:48 macOS sandboxes and Apple’s licensing problem
00:44:28 Why CLI may matter more than MCP
00:48:11 Open source, GitHub stars, and agent integration
00:53:11 Git, CI/CD, and agent collaboration bottlenecks
00:58:15 Founder life and building a 25-person infra company
01:02:44 AI SaaS, token resale, and API-first business models
01:06:10 GPU sandboxes, data centers, and compute growth
01:09:48 Why the AI cloud may look more like Stripe than AWS
01:11:26 Closing thoughts
Transcript
Introduction: Daytona, CodeAnywhere, and the End of Localhost
Swyx [00:00:02]:
Okay, we’re in the studio with Ivan Burazin, CEO of Daytona. Welcome.
Ivan [00:00:07]:
Thanks for having me, man.
Swyx [00:00:08]:
Ivan, you and I go back.
Ivan [00:00:10]:
Way back.
Swyx [00:00:11]:
How I don’t even know how, you found, did you reach out or, for Shift.
Ivan [00:00:17]:
I reached out to you. The reason was you - we were just - we were thinking about I was one of the co-founders of CodeAnywhere, the first browser-based IDE, and so we were thinking a long time of, localhost should die. And you had this article.
Swyx [00:00:29]:
End of localhost.
Ivan [00:00:30]:
Then I reached out to you because of that, and then we talked, and I was actually at a different job and learning about I was the head of, developer experience, and you were quite well-versed in that, and I actually reached out to you, among other people, how do we go about that? What are the key things and whatnot at this point in time? And you were nice enough to take the call, and I remember I was late on your call with you.
Swyx [00:00:51]:
I don’t remember.
Ivan [00:00:52]:
I remember because I was with my then I’m thinking of a girlfriend or wife at that point in time, I’m not sure. It’s the same person, so that’s great, and I was late ‘cause we were, in, Italy on, vacation, and then I was late for something. I felt so bad, and you were so nice to be, good about.
Swyx [00:01:10]:
The reason I’m nice is because I’m also late to other people, so it’s like, who’s, who’s without sin here, yeah, so I have to, for those who don’t know, InfoBip Shift, there’s this whole thing that, you did in the past, and, and that was basically one of the inspirations for me starting AI Engineer, which is like, I have to thank you for giving me that push to be like, “Oh, you can, you can build and sell conferences?”
Ivan [00:01:34]:
I remember you asked you asked me at the beginning to give me advisory shares, and I was so focused on what we were doing, I said no, and I should’ve took the advisory shares. So I’m sorry, dude. But anyway.
Swyx [00:01:43]:
We’re not, we’re not venture backed.
Ivan [00:01:44]:
No, it doesn’t matter.
Swyx [00:01:45]:
It’s Yeah, anyway, so I think what’s impressive about you is that CodeAnywhere is the thing that you’ve been trying to build, and, you kind of put it on hold and then came back after InfoBip. Just give us the story, do you - the story and the origin story, going into Daytona.
From CodeAnywhere and Shift to Daytona
Ivan [00:02:05]:
Sure. Like, really way back, me and my co-founder have been together. I say this, I’ve said this multiple times, it’s like we were married and divorced and married. Some people actually ask me is my co-founder my partner. they thought it literally. It’s not literally, but we have done multiple companies together, and to your point, we had this shift where we went from the CodeAnywhere to the conference called Shift, and then back to, Daytona. We originally started stacking servers, doing like virtualization in the early 2000s and, routers and doing basically all these things, at a foundational level, and that was a services company which we sold to focus on what my co-founder actually invented, which was the very first browser-based IDE, right, I say the first. Before us was actually Heroku. They did it for a very short time until they became Heroku. But outside of them, we were the only one, and it was called.
Swyx [00:02:55]:
There was Cloud9.
Ivan [00:02:57]:
Cloud9 came out slightly after us. There was Replit, which came out when we stopped doing it, Replit came out, and they have been successful since then, which is great. There was Nitrous.io. There was quite a few that existed at the time, but it was like too early. But the interesting part is that we, at that point in time, because there was no VS Code, there was no Kubernetes, and Docker had just started when we Or I’m not sure if it was even public at that point in time. And so we had to build everything to the whole stack ourselves and that was the key learning that we brought into and that we’ve been using in Daytona today. So it was super early. There’s about 3 million people used CodeAnywhere. It was slightly, it was angel-backed more than venture-backed. We ended up paying everyone back because it didn’t have that sort of scale. But, three years ago, we started something similar with Daytona, which is not what we are today, but it was automating dev environments for human engineers, the basically the underlying stack of CodeAnywhere. And then we did a hard pivot last January to sandboxes. And so here we are.
Swyx [00:04:01]:
Historic pivot, yeah, and, it’s one of those things where, I had independently invested in CodeAnywhere, but also in E2B, and then both of you pivoted into the same thing, and I’m like, “Fuck.”
Ivan [00:04:12]:
You invested, you invested in Daytona. You invested in Daytona. But you were the first If we had not got your check, we wouldn’t have done it.
Swyx [00:04:18]:
No way.
Ivan [00:04:19]:
No, it was like, “We have to get him on board first,” and you were that kicker that we, that got us off the ground.
Swyx [00:04:23]:
No, because you were putting me on your pitch deck, man. I was like, “Man, this is like a good trip if I don’t invest.”
Ivan [00:04:29]:
That’s because it was your quote. It’s like we.
Swyx [00:04:30]:
Yeah. It’s the end of localhost.
Ivan [00:04:31]:
Did a bunch of research about end of localhost and who was interested in that,.
Swyx [00:04:34]:
No, that’s like, I put, I wrote that blog post, and every single company in that field reached out to me, and then every VC who was receiving those pitches then also had to call me and, talk it, talk through it with me.
Ivan [00:04:47]:
It’s finally happening though.
Swyx [00:04:48]:
It was really super interesting.
Ivan [00:04:48]:
It’s finally happening.
Swyx [00:04:49]:
It’s finally happening.
Ivan [00:04:49]:
Yeah, it’s finally.
Swyx [00:04:49]:
It’s finally happening, with maybe sort of non-human users. Yeah, so what is Daytona today? Let’s get like a quick description. I’m wearing the shirt.
What Daytona Is Today: Composable Computers for AI Agents
Ivan [00:04:58]:
You’re wearing the shirt. Yes,.
Swyx [00:04:59]:
It says, I think your branding is very good. Like, it’s very consistent. It runs AI code. Like, it cannot be simpler.
Ivan [00:05:05]:
Exactly, but we’re gonna probably have to change that.
Swyx [00:05:07]:
Oh, shit.
Ivan [00:05:07]:
It’s also a subset of what we do. Unfortunately, we really love this, Run AI Code is super simple. People interpret it different ways. I think we’ve given out 5,000, 6,000 of these shirts. People wear them with pride because it doesn’t really market about us.
Swyx [00:05:21]:
Yeah, Daytona’s on the back.
Ivan [00:05:22]:
It markets the back. It markets to the person itself, so I think we did a really good job on that one. But it is also a subset of what we do, because people, when they think about Run AI Code, they just think about these small, let’s call it isolates, code execution boxes that, you send some code, you get an output. Whereas what Daytona is today is essentially composable computers for AI agents. It is, the market calls them sandboxes which can be misleading.
Swyx [00:05:44]:
All these things. All these things on.
Ivan [00:05:45]:
Yeah, exactly, ‘cause it can be misleading ‘cause people usually think about sandboxes as a demo or a test environment versus a production-grade environment. But what Daytona does, if you think of the laptop that you have in front of you or the computer that’s over there, or, my wife is an architect, so she has like a Windows with a 3D graphics card inside to do 3D rendering. Like, as humans, we have different computers or different compositions of computers. And our belief is strongly that agents today and going forward will need all these different compositions of computers to do different types of tasks. And so we offer that basically through an API.
Swyx [00:06:19]:
Yeah, to give people - I’m trying to sort of front-load all the aha moments or the wow moments so that people can, stay engaged and click like and subscribe. the market is exploding, right? Like, you have been reporting 74% month-on-month growth, and it also, it’s just been growing for a while. Like, it’s been going like this. And every single - It’s not just you guys. It’s every single.
Ivan [00:06:41]:
Everyone, yeah.
Swyx [00:06:42]:
Sort of, compute provider. I don’t know if you agree with me saying compute provider or not.
Ivan [00:06:48]:
It’s fine.
Swyx [00:06:48]:
Yeah. So like organically PLG-driven growth, but also enterprise is doing super well, I think I wanna rewind to January of last year when you did the pivot. Like, so you obviously called this market early, and you were positioned for it, and you are now one of the market leaders. But what was the insight that made you do the pivot?
The Pivot: From Human Dev Environments to Agent Sandboxes
Ivan [00:07:06]:
The insight that made us do this pivot is the quarter before that, so end of 2024, when we had - Basically, we did a demo with - I don’t I think we discussed this as well, Devin was not public. You actually gave me access to Devin at that time. So Devin.
Swyx [00:07:25]:
I did?
Ivan [00:07:26]:
Yeah, you gave me access.
Swyx [00:07:26]:
I don’t think I was supposed.
Ivan [00:07:27]:
Yeah, exactly.
Swyx [00:07:28]:
Yeah, I.
Ivan [00:07:28]:
So it doesn’t matter. You.
Swyx [00:07:29]:
Yeah. I gave like three friends access.
Ivan [00:07:31]:
Yeah, or it was a call and you showed it to me. It doesn’t matter. but OpenDevin was available, which is now called OpenHands. And so we’re like, “Oh, this seems to be a thing. This is not public. Let’s take our for human automation of dev environments and take, OpenDevin and launch that as a SaaS.” And we did that. Not very many people signed up and used it, but a lot of people reached out that were building agents, and they were like, “Hey, my agent needs a compute sandbox runtime,” whatever you wanna call it. I forgot what it was called at that point. And then we were like, “Oh, amazing. This is a new market. Here is our infrastructure. Here’s our product, and go.” And what we found really fast, soon, was that people did not like what we had built. It didn’t work. And I remember talking to people at the beginning when we’re doing this, the sandbox we’re building for agents. People were like, “Oh, why is it different? It’s the same thing. We have like EC2, we have VMs, we have all these things.” But we saw that everyone we gave it to, it was like 20, 30 people, they all said, “No.” Like, “This is not what we need. This sort of breaks.” And basically, me and my co-founder not knowing a lot about - ‘cause we’re infra people. We’re not AI people. So I basically took it upon myself to like watch every single podcast that exists, including all of, all of these and all that, and sort of get up to date, read all the blogs, like get, understand what’s going on.
Swyx [00:08:45]:
Do you wanna shout out who else was useful, just in case people are also looking.
Ivan [00:08:49]:
Generally we -, I looked at There’s a few of podcast, different segments and different types. So there’s you guys, No Priors, Bill Gurley’s was great while.
Swyx [00:09:04]:
VG2, yeah.
Ivan [00:09:05]:
Yeah, while it was around. So there’s a few. 20VC is interesting from a different dynamic, and some are different dynamic. But there was, also Red Points.
Swyx [00:09:14]:
We’re not really about the compute market.
Ivan [00:09:15]:
It was also already - Sorry?
Swyx [00:09:16]:
You’re, you want - You’re looking at the agent infra market.
Ivan [00:09:19]:
I was looking at the agent market and the AI market in general and sort of understanding who are the players, what the perception, and how that goes. And like obviously you complement this with like going to conferences, going to events, going to meetups, reading white papers, like doing all the things that you have to do to understand what’s happening. And so when we figured, when we sort of had an idea of what we had to build, literally over the New Year’s Eve, literally on New Year’s Eve, I half vibe coded the first MVP, first minimal viable product of what Daytona is today. And I went to sleep at like 3:00 AM or something like that. I was doing - I just put my like baby daughter and wife to sleep and, Happy New Year’s, and go back to just, doing this. And I sent it to my co-founder, my CTO, and he saw it in the morning. He’s like, “This is absolute garbage.” “Do not show this to anybody at all, but the idea is good.” And so he took two weeks, and he rebuilt it.
Swyx [00:10:09]:
Did it like look like that? Listen, I - It was rough idea.
Ivan [00:10:12]:
Oh, not even, not even close. Like it was it was way worse. But it was like a very - It was a simplistic view of what it should be. Like, it worked, but it was not ideal. And so he went, we went down the whole, which is his job as CTO, to go, and he came back with this version. We then called all the people that had said like, “This is garbage,” a quarter ago. And we set up these calls, and we gave it to - We just demoed it to everyone. And all the calls went long, every single one. They were 15-minute calls, and they all went to like 25, 30 minutes or whatnot. And everyone said, “We need, we want access.” There was no login, just an API key, ‘cause it was just a beta or an alpha. And they said, “Oh, we want access.” And we’re like, “Sure, yeah. Okay, thank you very much.” But after like the next day, if we’d not send it, every single one, like every call that we did, everyone came back, “Where is my API key?” Like everyone wanted it. We’re like, “Shit.” Like this is it. Like I’ve never felt So one, the understanding to your point was like most people thought it was the same infrastructure for humans and agents. We understood a quarter ago it’s not. We just didn’t know what was the right primitive. And then when we came, and we can talk about what that is, and we gave it to these people, I’ve never seen, I’ve never experienced - I’ve done multiple companies in my life. I’ve never experienced this, that people literally call you if you do not give them access. Like they want access right now. And so it’s like, okay, they don’t want this. the thing that they want doesn’t seem to exist, or they have not found it, and they really want what we want. And then when we understood that we’re onto something, and then when you think about the size of the market, like the market for human engineers and enterprise is a very large market, so think GitLab or whatnot. But the market for every single agent that will exist ever in the future is just like, what is that market? How big is that? And we’re like, “We are all in on this.” And so that is where we made sort of the cut between the old product and the new one.
Bare Metal, Stateful Sandboxes, and the Lambda + EC2 Model
Swyx [00:12:02]:
Yeah. But it wasn’t composable at the time?
Ivan [00:12:05]:
It was very - It was basically just a Linux box that you could change, that you could define number of CPUs, disk, and RAM. Like that is what you could do, but you couldn’t have multiple operating systems, you couldn’t resize it on the fly, you couldn’t add a GPU, you couldn’t do like all the things. It was just the, just the first sort of variation of that, yeah.
Swyx [00:12:22]:
Was it bare metal from the start?
Ivan [00:12:24]:
It was bare metal from the start. And so the interesting thing that we thought about right away, so our.
Swyx [00:12:29]:
Which, give people the background, what is the normal path?
Ivan [00:12:32]:
Yeah, so, basically most providers run this on top of VMs. And also.
Swyx [00:12:37]:
Firecracker.
Ivan [00:12:38]:
Yeah, they run on Firecracker and VM. And so we also fire - We can get - We have multiple isolation layers and we can do that. But the common way to do it is that they, one, that the state of the machine, or the hard disk is not part of the sandbox itself. And the other thing is they’re not meant to last forever. So most of them are preemptible, like they can There’s a time that they can live. And so our thought was when we were going into this is, agents will be like humans in the sense of you don’t want your laptop to be shut down until you’re done with work. Like, and you want to close the lid and open the lid, it’s the same state. So you - Agents would want that, like the pause and come back. They want those two things. But also agents really want speed, right? Can they get it? So when we thought about it’s like we need something insanely fast, how to make it fast, how to make it long-running, and stateful. And so those two things, it’s like combining a Lambda and an EC2, right? Those two things together. And so we didn’t have an idea how others did it, ‘cause we didn’t know too that there was a market around this. It was more like, okay, this is what we need, what they need. And we looked at Kubernetes, it wasn’t wasn’t good enough for that. We looked at Nomad, it didn’t enable that. And so our history in rewriting our own scheduler at CodeAnywhere is basically what my CTO came up with. Like, he’s like, “Oh, the learnings from there,” and he brought it. And the funny thing is, our third co-founder, when he saw it, he’s like, “Dude, what is this? This is like 2008.” Like, we went back in time, and he’s like, “Exactly.” And so the reason why Daytona is like super fast, and you see this on benchmarks, is we essentially, we run on bare metal. We have our own scheduler, we use the underlying, disk, CPU, and RAM of the underlying machine, which means your IOPS are insanely fast because there’s no, there’s no network between an EBS or something like that. But also the snapshot, the point in time, the templates, are also preloaded on the bare metal machines. So when you fire off a sandbox from a template or a snapshot, you’re essentially directed to the bare metal machine where that snapshot is based on that NVMe drive, and then it literally just turns on that machine, and it’s local. There’s no network latency, anything on there. And so that is sort of the specificities that we, when we’re thinking from first principles, what a computer would look like for an agent, that is what we came up with, and that’s what we created.
Benchmarks, 60ms Startup, and 50,000 Sandboxes
Swyx [00:15:02]:
Yeah. I should maybe, I don’t know if you endorse this, but there’s someone that does compute SDK, you guys do very well on there, with like the TTI, right? I. is this a, is this a is this a relevant benchmark for you guys? I don’t know.
Ivan [00:15:16]:
I don’t know, and it changes every day. So today RKL is.
Swyx [00:15:18]:
I don’t know what RKL is. Never heard of it.
Ivan [00:15:20]:
Yeah. RK, yeah, so it is there.
Swyx [00:15:22]:
You are, at least a third of the next tier of performance, and then, there’s a lot of other better-known names that are very slow to start.
Ivan [00:15:31]:
Yeah. We’ve been the number one by far for a long time, and now there’s different, there’s different definitions also of sandboxes, different isolation patterns, different other things. So RKL runs it literally on the S3, the data, so it’s very different, and they spin up a sandbox, spin up a container for that, so it’s a different type of thing. So the definition of a sandbox is something that we can all, we all need to get along with. But yeah, we’re insanely fast on getting these things, up and running. And so you can see even there that it’s a zero point 0.10 to 0.11, so.
Swyx [00:16:03]:
Close enough. Yeah. what else do you need, right?
Ivan [00:16:05]:
Yeah. So the benchmarks itself, so, in this, in I don’t think the benchmarks equate to market ownership or revenue or anything like that. and I’ve seen this with multiple benchmarks, not just in sandboxes, but in general benchmarks around.
Swyx [00:16:20]:
It’s table stakes. It’s just like.
Ivan [00:16:21]:
Exactly. But it doesn’t hurt.
Swyx [00:16:22]:
Just roughly check.
Ivan [00:16:22]:
Like you definitely have to be up there and you have to be competing so that people know that, oh, this is definitely one of the top. Because this is only one dimension of what customers look for. There’s other things like how many can you spin up consecutively? There’s a feature set, there’s support, there’s like all different things that people look at, but you definitely have to be there, on the benchmarks.
Swyx [00:16:40]:
How many people do people spin up consecutively?
Ivan [00:16:43]:
So we have.
Swyx [00:16:43]:
Or concurrently, is the Concurrency, right?
Ivan [00:16:45]:
There’s three metrics that we look at. And so one is like time to spin up one, and so our time to spin up one is 60 milliseconds with network latency. So request, spin up, reply, 60, the whole thing, 60 milliseconds. That is one. But if you wanna spin up 50,000 at once, we are now at about 75 seconds. So it takes about 75 seconds to spin up concurrently 50,000. Some others, there’s public data around this, like take 2,000 seconds, which is 30 minutes. Like there’s different variations of that. And then there is the so it is speed of one, speed of like multiple, and then how many can you consistently have up and running. And so we basically have right now no limit to how much we can add because we basically own our own metal. But the biggest customer of ours does like about 850,000 every single day is sort of where they’re, where they’re just shy of a million every single day that they’re running, we do have a request for half a million concurrent, which is literally half a million CPUs somewhere running. So that’s an interesting.
Swyx [00:17:44]:
They pay by like vCPU seconds.
Ivan [00:17:47]:
By seconds, yeah.
Swyx [00:17:47]:
Or whatever. Yeah. Okay, and so and then, and the other thing is, the sleeping and the resuming, ‘cause it’s all the stateful resumption of all these things, how, what kind of workload are people putting through this, right? Like how is it Do we measure by gigabytes in memory, gigabytes in storage? I don’t In like network attached storage. I, what are the costly ones of, out of all these features?
Workload Economics: CPU, RAM, Network, and Storage
Ivan [00:18:15]:
The most expensive thing are CPU.
Swyx [00:18:18]:
Okay. Yeah, of course.
Ivan [00:18:18]:
The second one, yeah Then it’s RAM, then it’s disk. We actually don’t charge.
Swyx [00:18:22]:
Which is snapshotting, right?
Ivan [00:18:23]:
No, it’s actually the, snapshotting’s part of it, but basically the size of your hard disk, of your machine. So do you have 10 gigabytes, do you have 20, do you have 50, do you have whatever? And then the transference of that. Right now, currently we don’t charge for, network at all at Polychron.
Swyx [00:18:37]:
Oh, you gotta, yeah, you gotta fix.
Ivan [00:18:38]:
Yeah. It is very much a it’s a larger and larger part of our bill, so we’re working around, that part there. Obviously, that is the least, expensive, so the hard disk is the least expensive, so it’s basically CPU, RAM, for us network, ‘cause we don’t charge the customer, and then hard disk, is how it’s split up. But there’s also different types of workloads, so we basically split it up into two types of workloads in Daytona. One is what we call background agents or long-running agents. and the other is, basically RLs and evals, which I put sort of together. And so they have very different patterns of usage, and if you look at the usage of a background And I’ll just name names of companies, not specifically.
Background Agents vs. RL/Evals: Two Usage Shapes
Swyx [00:19:21]:
Yeah, open, all hands.
Ivan [00:19:23]:
Yeah. So like a background agent’s a Cognition, a Lovable, a like all these things are Harvey. These are all long-running, background agents. And so if you look at their usage patterns, their usage patterns are similar to human, which is like follow the sun. Basically, the usage patterns of that is like noon is probably the highest, and the midnight is the lowest, and then weekends are lower. weekday is higher.
Swyx [00:19:42]:
Yeah, that’s a fun question. How global is it? Is it very US-centric or?
Ivan [00:19:46]:
The US is a large part, but we have currently, we have Asia, Europe, and the US regions.
Swyx [00:19:52]:
So it’s quite global.
Ivan [00:19:53]:
Yeah, it’s quite global. We have it all over. It’s interesting that our I talked to you a bit about this. Our number one city by user.
Swyx [00:20:01]:
Hmm.
Ivan [00:20:02]:
Is Singapore.
Swyx [00:20:04]:
Oh, wow. Amazing.
Ivan [00:20:05]:
Which is an interesting one, right? Not by revenue, just by just like by individual head count.
Swyx [00:20:09]:
Really?
Ivan [00:20:09]:
Just like an interesting thing.
Swyx [00:20:10]:
Singapore is, Singapore is weirdly high in the adoption charts of AI for the population. It’s like an, seven, eight million population. And it’s like keeps showing up.
Ivan [00:20:20]:
No, it’s quite interesting. We were quite shocked, and I was like, “Oh, this is interesting.” And also one that’s up there.
Swyx [00:20:24]:
There’s a reason I’m doing AI using Singapore. it’s because I’m from there.
Ivan [00:20:27]:
We’re there. We’re gonna, we’re gonna be there as well. and it’s interesting that Japan is in the top or like Tokyo’s in the top, which is in all the tech cycles it has never been. It has never been, so it’s quite interesting that they’re.
Swyx [00:20:39]:
I think the Japanese just love AI. Yeah. It’s that, and then it’s Brazil. That’s it.
Ivan [00:20:44]:
Brazil has always been in.
Swyx [00:20:45]:
I think.
Ivan [00:20:46]:
Even when I look, if you look at like GitHub’s data and ask historically with CodeAnywhere, it was always like US, Western Europe, and then you’d have like India, Brazil, China, like that would be there. But like Singapore was not in, specifically Japan was never in sort of that top, that top.
Swyx [00:21:01]:
Yeah. Weird pockets.
Ivan [00:21:01]:
Weird. Yeah, so it’s very global.
Swyx [00:21:02]:
Okay, so actually that, but that’s helps you to distribute your load through, all time?
Ivan [00:21:08]:
The interesting thing is like we have those kind of loads, but if you look at the researcher loads, they’re quite different. So what they are is like if you give them concurrency of 10,000 or 50,000 or 100,000 CPUs at ARMb, when they fire off a run, it’s just 100%. And then it just runs, and then it stops. So it’s very, the usage pattern is squares basically, right? And it’s also not follow the sun, because people will fire it off at midnight before they go to sleep but then wake up and so it’s very unpredictable, so you don’t know where that is. So the shapes of the usage are quite different than we have had before. And also what’s interesting is when it’s sort of a follow the sun, even if you have a high growth company, you can sort of predict your usage patterns and have enough capacity for that, because it’s sort of, it grows in a, in a way you can project. When you have companies doing sort of like evals and RL, they’re super spiky. So they’re gonna come in, it’s like, “We’re gonna use nothing, then can we have 100,000?” Right? And then go back down. And then 100,000, go back down. So it’s very different, right? And.
Swyx [00:22:09]:
Do you want to lock them into commits so.
Ivan [00:22:11]:
Yeah, we do.
Swyx [00:22:12]:
Yeah, okay.
Ivan [00:22:12]:
We so we have to lock them into some sort of commits to have that capacity, because we have to have, basically we have to have the capacity for peak. Right? And so right now, Daytona’s mean utilization is 15%, 1-5.
Swyx [00:22:25]:
Oh my God.
Ivan [00:22:26]:
So it’s very low.
Swyx [00:22:27]:
Because it’s very spiky.
Ivan [00:22:27]:
It’s very spiky, but we get up to 90%. so we have these things. And so what we’re, what we’re looking at right now as a company is similar to Cloudflare where you can like geo move things around, but that works really well for basically the background agent where it’s follow the sun. But this, it’s not. Like it’s a very different shape. Obviously with scale you figure these things out, but that’s an interesting new problem that we have, as a compute provider in the agent space. And when we were doing the conference recently, and so we talked to like Nikita from Neon and.
Swyx [00:22:57]:
I should bring it up.
Ivan [00:22:58]:
Parag from Parallel and whatnot, everyone has the same problem. Whereas the usage is super spiky, and this is something that has not happened before, that you have these types of like it was always, it the amplitudes were not this high, right? So it’s quite interesting use case and problem solve.
Compute Conference and Spiky Agent Infrastructure
Swyx [00:23:12]:
Yeah, I don’t know if we’re gonna bring this up again, but let’s just talk about the conference, you had like 1,000 something people at the Warriors game, at the Sorry, where is it? What’s.
Ivan [00:23:22]:
Chase Center.
Swyx [00:23:23]:
Chase Center.
Ivan [00:23:23]:
Chase Center.
Swyx [00:23:24]:
I went. It was, it was very impressive. Obviously, you can, how to throw a conference, what did you learn? you put, you pulled together all these impressive names.
Ivan [00:23:33]:
What I.
Swyx [00:23:34]:
What were you looking for?
Ivan [00:23:35]:
My thesis behind the Compute Conference was let’s bring together people that are building infrastructure for AI agents. Because when I think of what we’re building, it is the agent is the primary user, what are the ergonomics and usage patterns of agents, and so we can do that. And what I found, this was a theory, it wasn’t proven, is that we all have these problems, as I touched onto. And I was, as I was talking on stage, it was like we all have the same underlying infra problems, which is this spiky workloads, unpredictable workloads that we’ve never had before, in human, compute or human infrastructure. And it’s, again, it’s the same when I was talking to Parag or when I was talking.
Swyx [00:24:20]:
Lynn. Nikita.
Ivan [00:24:21]:
Lynn, Nikita. Lynn especially, I was talking to her the other day as well. Like the It is a very interesting type of problem to solve because I can touch on Cloudflare because there’s a lot of like talk about that recently as to how they solve that, which is they have a bunch of geos, and basically, as users work in different places, and depending on your tier, they can move you around the geos. And so that how, that’s how they get the higher utilization. But you can sort of predict these, and it’s If it’s something in You’ll rarely get a spike that is 10 orders of magnitude. Like you’ll get a like let’s say one of your customers has some like an exponential curve. What is that to I’m using Cloudflare as an example. 10%, 20%, whatever it is. I don’t, I don’t have this data, I’m just assessing. It’s surely not 10x, right? It’s surely not something there. And so how do you go out and solve this problem? And we’re all solving this in different ways. So we have.
Swyx [00:25:11]:
She also has the same thing.
Ivan [00:25:12]:
Yeah, I know specifically that like Neon had that issue as well. Like how are we solving these spiky loads and things like that ‘cause we talked about it. And so the interesting thing for me to actually internalize was, yes, everyone that’s building for agents first is going through this, and we’re all solving similar problems, which is quite.
Swyx [00:25:28]:
Let me let me double-click on this. Okay. So for example, Neon, I happen to know that they’re very sort of S3 oriented, right? so they’re just like fully bet on S3. And you get to benefit from S3’s distribution and infrastructure. So I would imagine that Neon doesn’t have to care, whereas Lynn maybe has to care a bit more because obviously she’s doing GPU inference. And, for listeners, we did an episode with her, one and a half years ago. And you have to care. But like, right?
Ivan [00:25:54]:
Parag cares for sure, and Nikita.
Swyx [00:25:58]:
And Parag is C of, Parallel.
Ivan [00:25:59]:
Parallel, yeah.
Swyx [00:26:00]:
Former CTO of Twitter.
Ivan [00:26:01]:
Twitter, yeah.
Swyx [00:26:02]:
They are the search.
Ivan [00:26:03]:
Yeah, they’re search, yeah.
Swyx [00:26:03]:
I You and I know but the listeners don’t know.
Ivan [00:26:08]:
Yeah, we can put it down in the screen, and so ‘cause we, when we were talking.
Swyx [00:26:11]:
I’ll put it up on the, on the screen.
Ivan [00:26:12]:
Yeah, right.
Swyx [00:26:12]:
People can look it up if they need.
Ivan [00:26:14]:
Look it up. And, yes, but they still have CPU and RAM, allocation that you have to have up and running. And so CPU and RAM, you have to allocate that and have that ready. And so there’s basically two ways to do it. One is you either over-provision and you can handle the bursts, or two, you basically have, I don’t know if this is a term, just-in-time compute, which is like as your load becomes, as your usage comes in, you can fire off requests for VMs or bare metals at other cloud providers and then get them up and running.
Swyx [00:26:43]:
This is if you go above 100%, right?
Ivan [00:26:45]:
Yeah, this is.
Swyx [00:26:46]:
Like your overflow.
Ivan [00:26:46]:
If your overflow, like spillage or whatever you do.
Swyx [00:26:48]:
You probably lose money on it, but it doesn’t matter, right?
Ivan [00:26:50]:
It, not Well, you might, you might not That is a more cost-effective way to do it but it’s a slower way to do it. Because basically what you have to do is you have to like queue your requests, spin up these just-in-time compute, get it all ready, provision it, and then get your workload there. And so if the time isn’t important that much, that’s fine, and you can do that. But if your customer, and especially for, let’s say, the RL training runs, the reason why a lot of people come to us is because GPUs are more expensive than CPUs, right? So you want your GPU running at, what, 100% the entire time. And so when you’re running runs on CPUs, when the when the CPU cycle is like down and spinning up the next one, you want that to be instantaneous so that your GPU doesn’t go down, right? And if you then have to like go out and provision machines, you’re essentially telling the GPU that it has to wait, and that’s incurring our cost. So there’s things that you have to try to solve for there.
RL Workloads, Declarative Images, and Kubernetes Replacement
Swyx [00:27:43]:
Yeah, let’s talk about the different workload, right? You said that, what was it? A few months ago, you had zero RL workload and now it’s 50%.
Ivan [00:27:52]:
It will be this one, 50%, yeah.
Swyx [00:27:54]:
Let’s talk about how different it is, right? Like I imagine, for example, a lot less dynamic code generation of like arbitrary code. Like here, it’s probably all the same code. You’re just doing parallel runs or something, I don’t know.
Ivan [00:28:05]:
Yeah. So you’ll have multiple Depends on the like for each run, you’ll have a snapshot. And they, for the most part, they actually do use our declarative image builder, which is like, “Oh, we, the agent wants these dependencies, these env vars.”
Swyx [00:28:17]:
These ones, yeah.
Ivan [00:28:18]:
Yeah, the declarative image builder, it.
Swyx [00:28:20]:
Which is a very modal like thing that they.
Ivan [00:28:22]:
Yeah. And so we build it on the fly and then we propagate that snapshot, and you can spin up as many sandboxes as you want against that snapshot. And then if you have to do changes, the model can, or like it could be also be automated. It’s like, “Oh, now for the next run, we need to install these things or remove these things or whatever to get, a task done,” and then it goes off and runs that. So yes, that is something that it seems that they prefer. The number one reason I found, or should I say, let’s take a step back. What we are competing against in that environment is essentially managed Kubernetes. So EKS, GKE, whatever. That is what the vast majority run on. And anyone that has tried Daytona versus GKE, EKS is like, “I’m never going back.” That has always been. There’s a few reasons. One is the ergonomics. So if you have, if you’re using Kubernetes to spin that up, you have to essentially manage the interface interactions with that. Daytona, although as a compute provider, it’s more akin to a Twilio and Stripe from a consumption perspective than it is an AWS. Like you have an API, an SDK, it’s quite like easy and seamless to get these things up and running, that’s one. The other is the speed to which we spin up, which we mentioned earlier, which is much faster, and the scale to which we can go to. We haven’t got into features, but an interesting feature is that it’s very hard to OOM, or out of memory, our sandboxes, because we can dynamically on the fly.
Swyx [00:29:48]:
Resize.
Ivan [00:29:49]:
Resize, which is like impossible on almost any other thing. There are some technologies that enable you to do that, but it’s like a very hard thing. And so we actually saw this when, the Terminal Revenge team is, brought us actually. So thank you, Alex and the team, that brought us into this whole space.
Swyx [00:30:05]:
It’s just very rare that, a framework would just say, “Guys, just use Daytona.”
Ivan [00:30:11]:
Yeah, I think it says it somewhere. Yeah.
Swyx [00:30:13]:
Yeah. I was like, “What is this?”
Ivan [00:30:15]:
There’s all, there’s multiple there, but they also mention a few other places. and so Daytona specifically-We have, the, just jumping on themes here We, I don’t know where it says Data Center.
Swyx [00:30:27]:
I, there.
Ivan [00:30:27]:
Doesn’t matter.
Swyx [00:30:28]:
There’s a very strong recommendation, which is, very unusual. Which is, it’s.
Ivan [00:30:33]:
We do not pay them for this, just.
Swyx [00:30:34]:
I know, yeah. They just like you.
Ivan [00:30:35]:
Yeah, they like us. yeah, and also a thing, so, Data Center has multiple isolation sets underneath. The customer doesn’t have to know what they are. But basically we have Docker, which is a container, that’s hardened with Sysbox. So it’s Docker’s, isolation that is a security equivalent to a VM, but it’s still a container. And that is the default, and they, especially in these training workloads, really like that as an interface to be able to use just a basic Docker container, and we enable Docker and Docker. Which for these RL runs, if you need to do a Docker compose or Kubernetes, you can spin up a K3S inside of these things, which unlocks a huge amount of workloads that you can do that you cannot do on other providers. So just on that part is much more interesting. And so we went that, through that. We showed them that we could do that, and they enjoyed that quite a bit. They being the general venture people.
Swyx [00:31:28]:
Those people, yeah.
Ivan [00:31:29]:
And Harbor people.
Swyx [00:31:29]:
Harbor people, do are they, are they a company yet?
Ivan [00:31:33]:
As far, I do not know.
Customer Pull, Slack Connect, and the Computer Use Bet
Swyx [00:31:35]:
Okay. All right. Yeah. It’s like super obvious that like, there’s a lot of excitement and success around these things, okay, so yeah, tell us more, right? Like, this is an exploding workload, Harbor adopted you, which helped speed things along. But what are you learning as this new workload comes online?
Ivan [00:31:53]:
There’s a couple things that we learned, which we chat about in the beginning. We, and this has led our story, as we mentioned, we like talked to a lot of customers along the way, and we add more features and more tool sets as we talk to customers. And it’s interesting that And I think it’s that the ecosystem is so small and/or the models get smarter, where when we see one user come with a request, we know it goes on a roadmap if like three to five customers come with the same request in that week. It’s like very bizarre. It happens so many times, which is.
Swyx [00:32:27]:
Because they’re all friends.
Ivan [00:32:28]:
Sorry?
Swyx [00:32:28]:
They all, they’re all friends. They’re all in the same group chat.
Ivan [00:32:30]:
Yeah, probably, yeah. ‘Cause and they’re like, “Oh, can you do this?” And I’m like, “Okay, this is interesting. We’ll put it on a feature request.” And then the next one’s like, “Oh, can you do this?” “Okay.” It’s all the same, right? It’s always the same. And so what we try to do, and I personally try to do, I try to be on as many call, quote-unquote “sales calls” I can. I’m in every Slack channel. We literally have about 1,000 Slack Connect channels, something like that. It’s an interesting, there’s so many interesting things you find out when you have all the Slack channels. You can also see where people, transfer between companies. You see leave Slack channel, enter Slack channel. It’s an interesting thing. Also, just I digress, I feel that Slack Connect is literally LinkedIn what it should be. You have a list.
Swyx [00:33:08]:
LinkedIn charges you to, use your own connections, but Slack doesn’t, right? Slack is like, do it for free. It’s more lock-in. It’s great.
Ivan [00:33:15]:
Yeah. It’s amazing. Yeah. It’s one of the reasons.
Swyx [00:33:17]:
You’re gonna pay Slack for life.
Ivan [00:33:18]:
Exactly. You’re there for life. So that’s interesting. And so one of the things, the newer things we were talking about earlier is we made a big bet and put a lot of investment on computer use. that is not seen publicly the light of day. We haven’t GA’d that yet, but we have.
Swyx [00:33:32]:
Is there a thing I can pull up?
Ivan [00:33:33]:
There is computer use there. It’s right up a bit.
Swyx [00:33:36]:
Oh, yeah. Okay.
Ivan [00:33:38]:
What we have, what we talked about and what we’ve seen publicly is there’s this theme now about, the human emulator where And Elon from XAI has talked about this publicly, and if you think about the models today, they’re actually quite sophisticated and they can do a lot of work, but they still don’t have access to all the tools. Like, I’m a strong believer that the most efficient way for an agent to work is essentially headless or through, terminal or whatnot. But if we, if we look at knowledge work in general, there’s about 100 million knowledge workers in the US, about a billion in the world, and knowledge workers, and the salaries of them aggregate to 10 trillion in the US 50 trillion worldwide.
Swyx [00:34:24]:
Wow.
Ivan [00:34:25]:
Something like that. And if we look at, the five most important sectors of that, so like healthcare and government and financial services and whatnot, that’s about 56% of that. So let’s say it’s about half of that. So in the US it’s about 25 trillion, and most of them, most of that work is actually still locked into legacy apps inside of Windows, which is not going anywhere for a very long time. Like, people just won’t invest in that. How much of it? our assumption is the following: if, in the RPA market, which is similar market, well, not the same 25% of, these white collar, workers’, work is automated. If an agent is more sophisticated, can go through more runs, figure stuff out, let’s say it’s, 40%, right? And so if you take 40% of that, you get to essentially, $10 trillion a year.
Swyx [00:35:17]:
That’s a TAM.
Ivan [00:35:18]:
That is a that is a TAM. So that’s the TAM of the models, right? That’s not our, essentially ours. But you get to that size, and to be able to do that, you essentially have to give agents these computers with the legacy. So computer use, either Mac or Windows or Linux. Linux we also obviously have and others have. But Windows specifically is something very new, and the only option right now is an EC2 with, Windows or on Azure. Both of them take anywhere from three to five minutes to spin up. We’ve created an actual sandbox, so it’s a second instead of milliseconds, but you have, point in time snapshots, you have, forking, you have all the things that you have from a sandbox, but essentially enables you to hopefully unlock all this value. And so that’s been our big push and bet, but we’ve sort of, kept our ear to the ground. What is sort of the next things in the market?
RPA Returns: Why Agents Still Need Computers
Swyx [00:36:06]:
Yeah, knowledge work, and building, and sort of RPA, the next wave of RPA. I got very excited about RPA kind of during COVID times. The UI path was IPO-ing. And it was, a very hot Isn’t it, Eastern European?
Ivan [0