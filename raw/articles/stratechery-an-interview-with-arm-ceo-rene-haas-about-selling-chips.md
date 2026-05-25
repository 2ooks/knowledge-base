# An Interview with Arm CEO Rene Haas About Selling Chips
**Source:** https://stratechery.com/2026/an-interview-with-arm-ceo-rene-haas-about-selling-chips/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2FuLWludGVydmlldy13aXRoLWFybS1jZW8tcmVuZS1oYWFzLWFib3V0LXNlbGxpbmctY2hpcHMvIl19LCJleHAiOjE3ODIyNzY3NzAsImlhdCI6MTc3OTY4NDc3MCwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMgcG9kY2FzdCByc3MiLCJzdWIiOiJlNWQ0NGE2NC1jYTU4LTQ3MWQtOWZhMy05YzkwODEzYTg4NTAiLCJ1c2UiOiJhY2Nlc3MifQ.frMhuOpULTZyuttCB-c8hrxlPK8qT8MVWxT9r3pEqhWYe05nxmmCw9ZzezMJ_gnAIh4EN2-H6fakXM4tx2HvLHW88lgNd2in7FADDHliEer4fb5Tv6WuAQNMF7LxIHnR-zeil1mdU5wvrXmJJSYAuW2Aoq3hQuYR9RIptlj13Tl7-52mUbCUIxA78xGNez1XB5Yq500MEhc7nh1jdee5JViyzEWQPmw91n9urO7NuPCUOIXPuYwy3l6dKHKkTrLWP1xH63ghS0eVWYajejIDVunuctkakDVlcUFT7irHIVrouKaNk0q7aTbf5D2LBCxILMCwkVrtNaIXA-_lzVv56w
**Date:** 2026-03-26
**Author:** Ben Thompson
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Listen to this post:
Your browser does not support the audio element.
Good morning,
This week’s Stratechery Interview is with Arm CEO Rene Haas, who I previously spoke to in
January 2024
, and who recently made a major announcement at
Arm’s first-ever standalone keynote
: the long-time IP-licensing company is undergoing a dramatic shift in its business model and selling its own chips for the first time.
We dive deep into that decision in this interview, including the meta of the keynote, Arm’s history, and how the company has evolved, particularly under Haas’ leadership. Then we get into why CPUs matter for AI, and how Arm’s CPU compares to Nvidia’s, x86, and other custom Arm silicon. At the end we discuss the risks Arm faces, including a maxed-out supply chain, and how the company will need to change to support this new direction.
As a reminder, all Stratechery content, including interviews, is available as a podcast; click the link at the top of this email to add Stratechery to your podcast player.
On to the Interview:
An Interview with Arm CEO Rene Haas About Selling Chips
This interview is lightly edited for clarity.
Topics:
Arm Everywhere
|
Arm History
|
Arm Evolution
|
CPUs and AI
|
The Chip Supply Chain
|
Arm Changes
Arm Everywhere
Rene Haas, welcome back to Stratechery.
RH:
Ben Thompson, thank you.
Well, you used to be someone special, I think you were the only CEO I talked to who did nothing other than license IP, now you’re just another fabless chip guy like [Nvidia CEO] Jensen [Huang] or [Qualcomm CEO] Cristiano [Amon].
RH:
(laugh) Yeah, you can put me in that category, I guess.
Well the reason to talk this week is about the momentous announcements you made at the
Arm Everywhere keynote
— you will be selling your own chip. But before I get to the chip, i’m kind of interested in the meta of the keynote itself, is this Arm Everywhere concept new like as far as being a keynote? Why have your own event?
RH:
You know, we were talking a little bit about this going into the day. I don’t think we’ve ever as a company done anything like this.
Yeah I didn’t think so either, I was trying to verify just to make sure my memory was correct, but yes it’s usually like at Computex or something like that.
RH:
Our product launches have usually been lower key, we try to use them usually around OEM products that are using our IP that use our partner’s chips, but we just felt like this was such a momentous day for the company/very different day for the company that we want to do something very, very unique. So it was very intentional, we were chatting about it prior, I don’t think we’ve done anything like before.
Who was the customer for the keynote specifically? Because you’re making a chip — Meta is your first customer, they knew about this, they don’t need to be told — what was the motivation here? Who are you targeting?
RH:
When you prepare for these things, that’s one of the first questions you ask yourself, “Who is this for?”, “Is it for the ecosystem?”, “Is it for customers?”, “Is it for investors?”, “Is it for employees?”, and I think under the umbrella of Arm Everywhere, the answer to those questions was “Yes”, everybody.
We felt we needed to, because a lot of questions come up on this, right, Ben, in terms of, “What are we doing?” “Why are we doing?”, “What’s this all about?”, the answer to that question was “Yes”, it was for everyone.
One more question: Why the name “Arm Everywhere”?
RH:
We were trying to come up with something that was going to thematically remind people a bit about who Arm was and what we are and what we encompass, but not actually tease out that we were going to be announcing something.
Right, you can’t say “Arm’s New Chip Event”.
RH:
(laughing) Yes, exactly, “Come to the new product launch that we’ve not yet announced”. So we just decided that that would be enough of a teaser to get people interested.
Arm History
Just to note you said, “What Arm
was
“, what was Arm? You used the past tense there.
RH:
Yeah, and I will say, we are still doing IP licensing, you can still buy CSSs [Compute Subsystem Platforms], so we are still offering all of the products we did before that day and plus chips, so I’m not yet just another chip CEO, I think I’m still very different than the other folks you talked to.
Actually, back up, give me the whole Rene Haas version of the history of Arm.
RH:
Oh, my goodness gracious. The company was born out of a joint venture way back in the day between
Acorn Computer
and then ultimately Apple and
VLSI
to design a low-power CPU to power PDAs. The thing that was kind of important was, “I need something that is going to run in a plastic package” — you may remember back then just about everything was in ceramic — “I can’t melt the PDA, and oh, by the way, this thing’s got to run off a battery”. So they chose a RISC architecture, and that’s where the ARM ISA [
instruction set architecture
] was born and that’s what the first chip was intended to do, and the thing wasn’t very successful.
So fast forward, however, the founders and then a very, very important guy in Arm’s history,
Robin Saxby
, put out a goal to make the ARM ISA the global standard for CPUs. And if you go back to early 1990s, there were a lot of CPUs out there and also there was not an IP business, there really wasn’t a very good fabless semiconductor model, and there was not a very good set of tools to develop SoCs
[system on a chip]
. So in some ways, and this is what I love about the company, it was a bit of a crazy idea because you didn’t really have all the things in place necessary to go off and do that. But back then, there were a lot of companies designing their own CPUs, if you will, and the idea there being that ultimately this would be something that customers could be able to access, acquire, and build, and then ultimately build a standard upon it.
It was ultimately the killer design win for the company, and I know you’re a strategist and historian as well around this area, is the classic accidental example of TI was developing the baseband modem for an applications processor for the Nokia GSM phone and they needed a microcontroller, something to kind of manage the overall process, and they stumbled across what we were doing, and we licensed them the IP. That was kind of the first killer license that got the company off the ground and that’s what really got us into mobile. People may think, “You were the heart of the smartphone and you had this premonition to design around iOS” or, “You worked really closely in the early days of Android”, it was the accidental, we found ourselves into the Nokia phone, GSM phone, Symbian gets ported to ARM, and then there starts to be at least enough of a buzz around nascent software, but that’s how the company was born.
I did enjoy for the keynote, you had a bunch of different Arm devices in the run-up running on the screen, and my heart did do a little pitter-patter when the Nokia phones popped on. Another day, to be sure.
RH:
Yeah, cool stuff right? But that’s kind of how the company got off the ground, and as it was a general purpose CPU which meant we didn’t really have it designed for, “It’s going to be good at X”, or, “It’s going to be good at Y, it’s going to be good at Z”, it turned out that because it was low power, it was pretty good to run in a mobile application.
I think the historic design win where the company took off was obviously the iPhone, and the precursor to the iPhone was the iPod was using a chipset from
PortalPlayer
that used
the ARM7
and the Mac OS was all x86, and then inside the company,
it was Tony Fadell’s team arguing
, “Let’s use this PortalPlayer architecture”, versus, “Do we go with Intel’s x86 and a derivative atom”, back in the day, and once a decision was made that “We’re going to port to ARM for iOS”, that’s where the tailwind took off.
So is it definitely making up too much history to go back and say, “The reason Arm was a joint venture to start is because people knew you needed to have an ecosystem and not be owned by any one company”, or whatever it might be, that’s being too cute about things — the reality is it was just stumbling around, barely surviving, and just fell backwards into this?
RH:
Which, by the way, every good startup that’s really been successful, that’s kind of how the formula works. You stumble around in the dark, you find something you’re good at and then you engage with a customer and you find what ultimately is sticky and that’s really what happened with Arm.
Arm Evolution
When you consider the changes that you’ve made at Arm, and I want to get your description of the changes that you’ve made, but how many of the challenges that you face were based on legitimate market fears about, “We’re going to alienate customers” or whatever it might be versus maybe more cultural values like, “We serve everyone”, versus almost like a fear like, “This is just the market we’ve got, let’s hold on to it”?
RH:
I think, Ben, we thought about it much more broadly, and when I took over and you and I met not long after that, there were a couple of things that were happening in the market in terms of a need to develop SoCs faster, a need to get to market more quickly and we knew that intuitively that no one knew how to combine 128 Arm cores together with a mesh network and have it perform better than we could because that’s what we had to do to go off and verify the cores.
So we knew that doing compute subsystems really mattered, but I came from a bit of a different belief that if you own the ISA at the end of the day, you are the platform, you are the compute platform and it is incumbent upon you to think about how to have a closer connection between the hardware and the software, that is just table stakes. I don’t think it’s anything new, if you think about what Steve Jobs thought about with Apple and everything we’ve seen with Microsoft, with Wintel.
I felt with Arm, particularly not long after I started, in 2023 and 2024, this was only getting accelerated with AI. Because with AI, the models and innovation moving way, way faster than the hardware could possibly keep up. I just felt for the company in the long term that this was a direction that we had to strongly consider, because if you are the ISA and you are the platform, the chip is not the product, the system is.
That’s the thing that I was sort of driving at
when I was writing
about your launch. There’s an aspect where you’ve made these big changes, you’re originally just the ISA, then you’re doing your own cores, not selling them, but you’re basically designing the cores, then you’re moving to these systems on a chip designs and now you’re selling your own chips. But it feels like your portion of the overall, “What is a computer?”, has stayed fairly stable, actually, because, “What is a computer?”, is just becoming dramatically more expansive.
RH:
I think that’s exactly right. Again, if you are a curator of the architecture and you are an owner of the ISA, as good as the performance-per-watt is, as interesting as the microarchitecture is, as cool as it is in terms of how you do branch prediction, the software ecosystem determines your destiny. And the software ecosystem for anyone building a platform needs to have a much closer relationship between hardware and software, simply in terms of just how fast can you bring features to market, how fast can you accelerate the ecosystem, and how can you move with the direction of travel in terms of how things are evolving.
You mentioned the big turning point or biggest design win was the iPhone way back in the day, and the way I’ve thought about Arm versus x86 — there’s been, you could make the case, ARM/RISC has been theoretically more efficient then CISC, and I’ve talked to Pat Gelsinger about how
there was a big debate
in Intel way back in the 80s about should we switch from CISC to RISC, and he was on the side of and won the argument that by the time we port everything to RISC we could have just built a faster CISC chip that is going to make up all the difference and that carried the day for a very long time. However, mobile required a total restart, you had to rebuild everything from scratch to deliver the power efficiency, and I guess the question is, you’ve had a similar dynamic for a long time about Arm in the data center theoretically is better, you care about power efficiency etc, is there something now — is this an iPhone-type moment where there’s actually an opportunity for a total reset to get all the software rewritten that needs to be done? Or have companies like Amazon and Qualcomm or whatever efforts they’ve done paved the ground that it’s not so stark of a change?
RH:
It’s a combination of both. One of the big advantages we got with Amazon doing Graviton in 2019, and then subsequently the designs we had with Google, with Axion, and Microsoft with Cobalt, is it just really accelerated everything going on with cloud-native, and anything that moves to cloud-native has kind of started with ARM.
What do you mean by cloud native?
RH:
Cloud-native meaning these are applications that are starting from scratch to be ported to ARM. Built on a Linux distro, but not having to carry anything about running super old legacy software or running COBOL or something of that nature on-prem, so that was a huge benefit for us in terms of the go-forward.
Certainly we got a huge interjection of growth when Nvidia went from the generation before Hopper, which I think was Volta or Pascal, I may be mixing up their versions, which was an x86 connect to Grace. So when they went to Grace Hopper, then Grace Blackwell, and now Vera, the AI stack for the head node now starts to look like ARM, that helps a lot in terms of how the data center is organized, so we certainly got a benefit with that.
I think for us, the penny drop moment was when, and it’s probably 2018, 19 timeframe, is when Red Hat had production Linux distros for ARM and that really also accelerated things in terms of the open source community, the uploads and things that made things a lot, a lot easier from the software standpoint.
Give me the timeline of this chip. When did you make the decision to build this chip? You can tell me now, when did this start?
RH:
You know, it started with a CSS, right? And we were talking to Meta about the CSS implementation.
Right. And just for listeners, CSS is where you’re basically delivering the design for a whole system on a chip sort of thing.
RH:
Compute subsystem, yeah, so it’s the whole system on a chip. And by the way, it’s probably 95% of the IP that sits on a chip. What doesn’t include? It doesn’t include the I/O, the PCIe controllers, the memory controllers, but it’s most of the IP.
And this is what undergirds — is Cobalt really the first real shipping CSS chip? Or does Graviton fall under this as well?
RH:
Cobalt’s probably the first incarnation of using that, so Meta was looking at using that and I think the discussions were taking place in the 2025 timeframe, mid-2025 timeframe. Here’s the key thing, Ben, not that long ago.
Right. Well, that was my sense it was not that long ago, so I’m glad to hear that confirmed.
RH:
Not that long ago. Because CSS takes you a lot of the way there so that discussion in around the 2025 timeframe that we were going back and forth of, “Are you licensing CSS”, versus, “Could you build something for us?”, and we had been musing about, “Was this the right thing for us to do from a strategy standpoint?”, and how we thought about it, but ultimately it came down to Meta saying, “We really want you to do this for us, we think this is going to be the best way to accelerate time to market and give us a chip that’s performant and in the schedule that we need”, so somewhere in the 2025-ish timeframe, we agreed that, yes, we’ll do this for you.
Why did Meta want you to do it instead of them finishing it off themselves?
RH:
I think they just did the ROI, in terms of, “I’ve got a lot of people working on things
like MTIA
, I’ve got a whole bunch of different projects internally, is it better that you do it versus we do it”?
“How much can we actually differentiate a CPU”?
RH:
Yeah and by the way, that is ultimately what it comes down to at some point in time and the fact that the first one that came back works, it’s going to be able to go into production, and it’s ready to go. I’m not going to say they were shocked, but we kind of knew that was going to happen because we knew how to do this stuff and the products were highly performant and tested in the CSS, so it happened fast is the short answer.
So if we talk about Arm crossing the Rubicon, was it actually not you selling this chip it was when you did CSS?
RH:
One could say that that was a big step. When we started talking about doing CSSs, let me step back, we made a decision to do CSSs—
Explain CSSs and that decision because I think that’s actually quite interesting.
RH:
What is a CSS? It’s a compute subsystem, it takes all of the blocks of IP that we sold individually and puts them together in a fully configured, verified, performant deliverable that we can just hand to the customer and they can go off and complete the SoC.
Some customers have told us it saves a year, some say a year-and-a-half and this is really around the test and verification in terms of the flow. One of the examples I gave, it’s a little cheeky, but it kind of worked during the road show, was when we were trying to explain to investors, “What’s IP, what’s a CSS?”, I said, go to the Lego store, and you’ve got a bin of Legos, yellow Legos, red Legos, blue Legos, trying to buy all those Legos and building the Statue of Liberty is a pain, or you can go over to the boxes where it’s the Statue of Liberty and just put those pieces together, and the Statue of Liberty is going to look beautiful. This is what the CSS was.
I just want to jump in on that, because I was actually thinking about this, the Lego block concept is a common one that’s used when talking about semiconductors, but I remember being back in business school, and this was 2010, somewhere around then, and one of the case studies that we did was actually Lego, and the case study was the thought process of Lego deciding whether or not to pursue IP licensing as opposed to sticking with their traditional model, and all these trade-offs about, “We’re going to change our market”, “We’re going to lose what Lego is”, the creativity aspect, “It’s going to become these set pieces”. I just thought about that in this context where I came down very firmly on the side of, “Of course they should do this IP licensing”, but it was almost the counter was this sort of traditionalist argument which is kind of true — Legos today are kind of like toys for adults to a certain extent, and you build it once, reading directions and you think back to when I was a kid and you had all the Legos and it was just your creativity and your imagination and I’m like, “Maybe this analogy with Arm is actually more apt than it seems”. There’s a very romantic notion of IP licensing, you go out and make new things, “We got this for you”, versus, “No we’re just giving you the whole chip”, or in this case of CSS you, to your point, you could go get The Statue of Liberty, don’t even bother building it yourself.
RH:
And I think I came across this in the early days. In the 1990s, I was working with ASIC design at Compaq Computer, and they were doing all their ASICs for
Northbridge
,
Southbridge
, VGA controllers, and this is when the whole chipset industry took off. And I remember one of the senior guys at Compaq explaining why you’re doing this, he said, “I’m all about differentiation, but there needs to be a difference”.
And to some extent, that’s a little bit of this, right? You can spend all the time building it, but if it’s all built and you spent all this time and it’s not functionally different nor performant different, but you spent time — well, if you’re playing around with Legos and you got all day, that’s fine — but if you’re running a business and you’re trying to get products out quickly, then time is everything, and that’s really what CSS did. It kind of established to folks that, “My gosh, I can save a lot of time on the work I was doing that was not highly differentiated”, and in fact, in some case, it was undifferentiated because we could get to a solution faster in such a way that it was much more performant than what folks might be trying to get to the last mile.
So when we started talking about this to investors back in 2023 during the roadshow, their first question was, “Aren’t you going to be competing with your customers?”, and, “Isn’t this what your customers do?”, and, “Aren’t they going to be annoyed by it?”, and my answer was, “If it provides them benefit, they’ll buy it, if it does not present a benefit, they won’t buy it”, that’s it. And what we found is a lot of people are taking it, even in mobile, where people where we were told was, “No, no, these are the black belts and they’re going to grind out the last mile and you can’t really add a lot of value” — we’ve done a bunch in the mobile space, too.
So with Meta, was the deal like, “Okay, we’ll do the whole thing for you, but then we get a sell to everyone?”, and they’re like, “That’s fine, we don’t care, it doesn’t matter”?
RH:
Yes, exactly. We said, “If we’re going to do this, how do you feel about us selling it to other customers?”, and they said, “We’re fine with that”.
CPUs and AI
When did you realize that the CPU was going to be critical to AI?
RH:
Oh, I think we always thought it was. I had a cheeky little slide in the keynote about the demise of the CPU, and I had to spend a lot of time.
I mean, I don’t know,
I might have talked to someone recently
who I swear was pretty adamant that a lot of CPUs should be replaced with GPUs, and now they’re selling CPUs, too.
RH:
I had to talk to investors and media to explain to them why a CPU was even needed. They were a little bit like, “Can’t the GPU run by itself?”, it’s like a kite that doesn’t need anything to hang on to.
First off, on table stakes, obviously you need the data center but particularly as AI moves into smaller form factors, physical AI, edge, where you obviously have to have a CPU because you’re running display, you have I/O, you have human interface. It’s how do you add accelerated AI onto the CPU? So yeah, I think we kind of always knew it was going to be there, and there was going to be continued demand for it.
Right, but there’s a difference between everyone on the edge is going to have a CPU so we can layer on some AI capabilities. It doesn’t have the power envelope or the cost structure to support a dedicated GPU, that’s fair, that’s all correct. It’s also correct that, to your point, a GPU needs a CPU to manage its scheduling and its I/O and all those sorts of things, but what I’m asking about specifically is actually, we’re going to have these agentic workflows, all of which what the agent does is CPU tasks and so it’s not just that we will continue to need CPUs, we might actually need an astronomical more amount of CPUs. Was that part of your thesis all along?
RH:
I think we have instinctively thought that to be the case. And what drives that? The sheer generation of tokens, tokens by the pound, tokens by the dump truck, if you will. The more tokens that the accelerators are generating, whether that’s done by agentic input, human input, whatever the input is, the more tokens that are generated, those tokens have to be distributed. And the distribution of those tokens, how they are managed, how they are orchestrated, how they are scheduled, that is a CPU task purely.
So we kind of intuitively felt that over time, as these data centers go from hundreds of megawatts to gigawatts, you are going to need, at a minimum, CPUs that have more cores, period. There was this belief of 64 cores might be enough and maybe 128 cores would be the limit, Graviton 5 is 192 cores, the
Arm AGI CPU
is 136, we were already starting to see core counts go up, and we started thinking about, “What’s driving all these core counts going up, is it agentic AI?”.
A proxy for it was just sheer tokens being generated in a larger fashion that needed to be distributed in a fast way and what was layered onto that was things like Codex, where latency matters, performance matters, delivering the token at speed matters. So I think all of that was bringing us to a place that we thought, “Yeah, you know what?”, we’re seeing this core count thing really starting to go up, we were seeing that about a year ago, Ben.
So am I surprised that the CPU demand is exploding the way it is? Not really. Agentic AI, just the acceleration of how these agents have been launched, certainly is another tailwind kicker.
Which happens to line up with your mid-2025 decision that, “Maybe we should sell CPUs”.
RH:
Yeah, it all kind of lines up. We were seeing that, you know what, we think that this is going to be a potentially really, really large market where not only core count matters, but number of cores matters, efficiency matters because we could imagine a world where each one of these cores is running an agent or a hypervisor and the number of cores can really, really matter in the system, which laid claim to what we were thinking about in terms of, “Okay, we can see a path here in terms of where things are going”.
So CSSs with greater than 128 cores in the implementation? Absolutely. Do I think, could I see 256? Absolutely. Could I see 512? Possibly. I think then it comes down to the memory subsystem, how you keep them fed, etc., but yeah, so short answer, about a year ago we started seeing this.
Do you think that core count is going to be most important or is it going to be performance-per-core?
RH:
I think core count is going to be quite important because I think, again, I have a belief that each one of these cores will want to potentially run their own agent, launch a hypervisor job, launch a job that can be run independently, launch it, get the work done, go to sleep. The performance of the core is going to matter, no doubt about it, but I think the efficiency of that core is probably going to matter just as much as the performance is.
Well, the reason I ask is because you talked a lot in this presentation about the efficiency advantage, where the company born from a battery or whatever your phrase was, and that certainly, I think, rings true, particularly in isolation. But in a large data center, if the biggest cost is the GPUs, then isn’t it more important to keep the GPUs fed? Which basically to say, is a chip’s capability to feed GPUs actually more important on a systemic level than necessarily the chip’s efficiency on its own?
RH:
I’m going to plead the fifth and say yes to both.
You’ve got to pick one!
RH:
Well, what’s important? I think the design choice that Nvidia made with Vera was very important, Vera is designed to feed Rubin, it has a very specific interface, NVLink Fusion or NVLink chip-to-chip, provides a blazing fast interface, and has the right number of cores in terms of to keep that GPU fed optimally.
But at the same time, is it the right configuration in a general-purpose application where you want to run an air-cooled rack in the same data hall? If you think about a data hall where you might have a Vera Rubin liquid-cooled rack sitting right next to a liquid-cooled Vera rack, but somewhere else inside the data center, you’ve got room for multiple air-cooled racks. That space that you may have not used in the past for CPU, you want to because of the problem statement that I just gave.
So I actually think it’s a “both” world, which is why when people ask me, “Oh my gosh, aren’t you competing with Nvidia Vera, and aren’t people going to get confused?” — not particularly, I think there’s ample space for both.
So you feel like Nvidia might be selling standalone Vera racks but that’s not necessarily what Vera was designed for, that’s what you’re designed for, and you think that’s where you’re going to be different.
RH:
Yes, and I mean, if you look at what’s been announced so far from Nvidia, they announced a giant 256-CPU liquid-cooled rack and the first implementation that we’re doing with Meta is a much smaller air-cooled rack. So very, very different right off the get-go.
But you will have a liquid-cooled option?
RH:
If customers want that, we can do that too.
I think that differentiation makes sense. Well, speaking of differentiation, why ARM versus x86? Why is there an opportunity here?
RH:
Performance-per-watt, period. Graviton sort of started it, and they’ve been very public about their 40% to 50%, Cobalt stated the same with Microsoft, Axion, Google stated the same, Nvidia has stated the same. Just on table stakes, 2x performance-per-watt is pretty undeniable. And that, I think, it starts there as probably the primary value proposition.
What is x86 still better at? You can’t say legacy software, other than legacy software.
RH:
Go back to our earlier part of our conversation, right? The ISA, what is the value of the ISA? It is the software that it runs, right? It is the software that it runs. So if you were to look at where does x86 have a stronghold, x86 is very good at legacy on-prem software.
Ok, fine, we’ll give you legacy on-prem software and I think part of the thesis here to your point a lot of this agentic work, it’s on Linux, it’s using containers, it’s all relatively new, it all by and large works well in ARM already, but you did have a bit in the presentation where you interviewed a guy from Meta that was about porting software. How much work still needs to be done there?
RH:
There’s a delta between the porting work and the optimization work. Graviton, what Amazon will tell you, is that greater than 50% of their new deployments and accelerating is ARM-based. And, yes, am I the CEO of Arm and do I have a biased opinion? Of course. But I find it hard to, on a clean sheet design, if you were starting from scratch and the software porting was done and you had either cloud-native or the application space was established or as a head node, I don’t know why you’d start with x86.
What about, why are you doing ARM? We did ARM versus x86, I’m sort of working my way down the chain here — actually, I did backwards, we stuck in Vera already — but why you versus custom silicon generally? You talked about Amazon. Why do you need to do the whole thing?
RH:
So let’s think about an Amazon, for example. Amazon does Graviton, would I like Amazon to buy the Arm AGI CPU? Yes. Am I going to be heartbroken if they never buy one? No, I’m perfectly fine if they stay building what they’re building.
Are they ever going to buy one? No.
RH:
I hope they do! But if they don’t, it’s not going to be the end of the world. SAP — SAP runs a lot of software on Amazon, they run
SAP HANA
on Amazon, they also have a desire to do stuff on-prem and if they’re doing something on-prem in a smaller space and they’re looking to leverage that work, they’d love to have something that is ARM-based. Prior to us doing this product, there was no option at all, right? So that’s a very, very good example.
Similar with a Cloudflare. Is Cloudflare going to do their own implementation? Likely not. Do they run on other people’s clouds? Sure, they do. Do they have an application that could be on-prem running on ARM? Absolutely. So we think that, and I don’t want to prefetch this, Ben, but we had a lot of questions from folks like, “Amazon won’t buy from you”, “Google won’t buy from you”, “Microsoft won’t buy from you”, because you’re competing with them. And we say, well, Google builds TPUs, yet they buy a lot of Nvidia GPUs, so it’s not so binary.
That’s true. They’ll buy what their customers ask them to buy.
RH:
100%. And if we solve a problem with an implementation that theirs does not, they’ll buy it, and if we don’t, they won’t.
Just you know between you and me, is the only customer silicon that is truly potentially competitive Qualcomm and you’re just not too worried about making them mad?
RH:
This is off the record here?
(laughing) I didn’t say off the record.
RH:
Qualcomm, it’s funny, I had a question at the investor conference about competing with Nvidia. And I said, you know, a month ago, no one would have asked about any Arm person competing with anybody. So it’s wonderful to have these kind of conversations, the market is underserved and there aren’t choices. There isn’t a product from Qualcomm, there isn’t a product from MediaTek, there isn’t a product from Infineon, there just isn’t.
Is that sort of your case? If there were a bunch of options in the market, would you still be entering?
RH:
We entered this because Meta asked us to and because Meta asked us to we did. So if I was to answer your question, would we have entered if those other four guys were there or five hypotheticals? I don’t know that Meta would have asked us.
The Chip Supply Chain
If the Arm AGI CPU, it’s being built on TSMC’s 3-nm node, which is kind of impossible to get allocation for. How’d you get allocation? If you started this in 2025, how’d you pull that off?
RH:
We’re working through a back-end ASIC partner that helps secure the allocation for us.
Oh, interesting. Are you concerned about that
in the long run
? Like this business blows up and actually you just can’t make enough chips?
RH:
I’m probably less worried about that at the moment than I am about memory. I think that the business, the demand is very, very high actually for the chip, Ben and through our partner, we’re able to secure upside through TSMC, that has not been a problem. But memory is quite challenging and I think if there’s any limit to how big this business can get and I would say that what we provided to investors
as a financial forecast
is based upon the capacity we’ve secured on both memory and logic but if there was more memory could we sell more? Yes.
This is sort of the sweet spot though of making predictions, everyone gets to say, “Wow, how are your predictions so accurate?”, it’s like, “Well it’s because I knew exactly how much what I would be able to make”.
RH:
Yeah, if there was more memory we’d be even more aggressive on the numbers.
How did you make the memory decisions that you did in terms of memory bandwidth and all those sorts of pieces, particularly given the short timeline which you made this you. That wasn’t necessarily part of the CSS spec before, so how were you thinking about that?
RH:
The things we kind of looked at was, we sort of started
with LP
versus
standard DRAM
.
Because Vera’s doing LP and you decided to do standard.
RH:
We’re doing standard DRAM, yeah. We thought we’d be a little bit better on the cost side that could help and at the same time, a little bit better on the capacity side. So it really kind of drove down to, we’re going to solve for capacity because we thought that that might matter in a more generalized application space to give the broader width of use, which then brought us to standard DDR versus LP.
I think the reason we talked last time was in the context of you making a deal with Intel to get Arm working on 18A, and this was going to be a multi-generational partnership. What happened to that? Is that still around?
RH:
It’s still around. We did a lot of work on 18A because we felt that it was going to be really, really important if someone wanted to build on Intel 18A, that the Arm IP was available. So we did our part relative to if someone wants to go build an ARM-based SoC on Intel process, but that unfortunately hasn’t come to pass just yet.
It’s interesting you mentioned that you’re actually not worried about TSMC capacity but you are worried about memory — I didn’t fully think through that being another headwind for Intel where they could really use TSMC having insufficient capacity to help them, but if memory is the first constraint then no one’s even getting there.
RH:
First off, obviously HBM [
high bandwidth memory
] being such a capacity hog, and then people moving from LP into HBM at the memory guys, then compounding on it, all of the explosion of the CPU demand drives up memory demand. So it all kind of adds on to itself, which makes the memory problem pretty acute.
What exactly is in the bill of materials that you’re selling? You showed racks but you mentioned a partnership with Super Micro for example — if I buy a chip from Arm what exactly am I buying? You’ve mentioned memory obviously, so what else is in that? And what are you getting from partners?
RH:
Yeah, so we’ll send you a voucher code after the show, and you can place your orders. Just the SoCs. If you need to secure the memory, that’s on you, we’re not securing memory at this point in time. We did a lot of work with Super Micro, with Lenovo, with ASRock. So there’s a full 1U, 2U server blade reference architecture so the full BOM relative to all the passives and everything you need from an interconnect standpoint is all there. There’s a full BOM, which, as we mentioned in the session, the rack physically itself complies with OCP standards and then we’ve done all the work in terms of the reference design. So we can provide the full BOM of the reference platform, memory, but what we are selling only is the SoC.
Arm Changes
Very nerdy question here, but how are you going to report this from an accounting perspective? Just right off the top chips have a very different margin profile, is this going to all be broken out? How are you thinking about that?
RH:
We’ll probably do that. Today we break down licensing and royalty of the IP business, we’ll probably break out chips as a separate revenue stream.
To go back to, you did call this event Arm Everywhere, will you ever sell a smartphone chip?
RH:
I don’t know, that’s a really hard question. I think we’re going to look at areas where we think we could add significant value to a market that’s underserved, that market’s pretty well served.
It’s very well served and this agentic AI, potentially a new market, fresh software stack, makes sense to me. What risks are you worried about with this? You come across as very confident, “This is very obviously what we should”, how does this go wrong?
RH:
Most of my career has been spent actually in companies that have chips as their end business as opposed to IP. I’ve been at Arm 12 years, 13 years, I’ve been the CEO for about four-and-a-half. I did a couple of years, two, three years at a company called Tensilica that was doing, or actually the longer, five years, but most of my career was either NEC Semiconductor, Texas Instruments, Nvidia. Chip business is not easy, right? You introduce a whole different new set of characteristics.
You have to introduce this term called “inventory” to your company.
RH:
RMAs, inventory, customer field failures, just a whole cadre of things that’s very new for our company, there certainly is execution risk that we’ve added that has not existed before. We had a 35-year machine being built that is incredibly good at delivering world-class IP to customers — doing chips is a whole different deal.
I don’t want to minimize that, but at the same time, I don’t want to communicate that that’s something that we haven’t thought about deeply over the years and we’ve got a lot of people who have done that work inside the company. A lot of my senior executive team, ex-Broadcom, ex-Marvell, ex-Nvidia, we’ve got a lot of people inside the engineering organization who have come from that world, we’ve built up an operations team to go off and support that.
So while there is risk, we’ve been taking a lot of steps inside the company to be adding the resources. We’ve been increasing our OpEx quite a bit in the quarters leading up to this, about 25% year-on-year, investors were asking a ton of questions about, “When are we going to see why you’re adding all those people?”, and Arm Everywhere explained that. We also told investors that that’s now going to taper off because we’ve got, we think what we need to go off and execute on all this. But I think that’s the biggest thing, Ben.
And the upside is just absolute revenue dollars, I guess absolute profit dollars.
RH:
I think there’s a financial upside, certainly, in terms of financial dollars. But I think back to the platform, I think by being closer to the hardware and the software and the systems, we can develop even better products around IP, CSS, etc. because I think when you are the compute platform, it is incumbent upon you to have as close a relationship as you can between the software that’s developed on your platform.
What’s the state of the business in China these days, by the way?
RH:
China still represents probably 15% of our revenue, we still have a joint venture in China, the majority of our businesses is royalties, royalties is much bigger than licensing in China. We still have a lot of design wins coming in the mobile space for people doing their own SoCs like a Xiaomi. The hyperscaler market is strong between Alibaba, ByteDance, Tencent, and then most of the robotics and EV guys are doing stuff based on ARM, whether it’s XPeng, BYD, Horizon Robotics. So our business is pretty healthy in China.
You do have the
Immortalis and Mali
GPUs. Are those good at AI?
RH:
Yes they can be very good, we’ve added a lot of things to to our GPUs around what we call neural graphics so this is adding essentially a convolution and vector engine that can can help with AI. Right now the focus has been really more around AI in a graphics application, whether it’s around things like DLSS and things of other area, but we’ve got a lot of ingredients in those GPUs.
So we should stay tuned, sounds very interesting. You did have one moment in the presentation that was a little weird, you were trying to say that this AI thing is definitely a real thing but you’re like, “Well it might be a financial bubble, but the AI is real”. Are you worried about
all this money that is going into this
that you’re making a play for a piece of, but is there some consternation in that regard?
RH:
No, what I was trying to indicate was when people talk about bubbles, typically it’s either valuation bubbles or investment bubbles. The valuation bubbles, those come and go over time. The investment bubble, I’m not as worried about in the sense of, “Is there going to be real ROI on the investment being made?”, I actually worry more about the, “Can you get all the stuff required to build out all of the scale?” — we just talked about memory, there’s TSMC capacity.
I think the memory will be solved, they will ultimately not be able to help themselves, they will build more capacity, I’m worried about leading edge. TSMC will help themselves if they don’t have any challengers.
RH:
Turbines, right? You’ve got companies who are like GE Vernova or Mitsubishi, this is not their world of building factories well ahead to go serve an extra 5 to 10 gigawatts of power. So I think TSMC is super disciplined, and they’ve been world class at that throughout their history. Will the memory guys be able to help themselves? The numbers are now so large that
even the Sandisk’s of the world
and storage, everything has kind of gotten bananas, and that is a concern in terms of if just one of those key components of the supply chain blinks and decides not to invest to provide the capacity, then things kind of slow down.
But the numbers, Ben, the numbers we’re talking about are numbers we’ve never seen before. $200 billion CapEx from an Amazon or $200 billion CapEx from a Google. And then you have companies like
Anthropic talking about $6 billion revenue increases
over a three-to-four month period, which are the size of some software companies. So we are in some very stratospheric levels in terms of spend that would I be surprised if there was a pause in something just as people calibrate? Yeah, I wouldn’t be surprised at all.
But if I think about the 5 to 10-year trajectory, there’s no way you can say this is a bubble. If you said, “I think machines that can think as well as humans and make us more productive, that’s kind of a fad”, I don’t actually think that’s going to happen, it’s almost nonsensical.
Just to sort of go full circle, you’ve been on the edge, and now this new product that gets the Arm Everywhere moniker but it’s about being in the data center — is the edge dead? Or if not dead is it are we in a
fundamental shift
where the most important compute is going to be in data centers or is there a bit where AI is real but it actually does leave the data center, go to the edge and that’s a bigger challenge?
RH:
I think until something is invented that is different than the transformer, and we talk about some very different model as to how AI is trained and inferred, then we’re looking at a lot of compute in the data center and some level of compute on the edge.
I think if you just suspend animation for a second and we say, you know what, the transformer is it, and that’s what the world looks like for the next number of, the next 5 to 10 years, the edge is not going to be dead. The edge is going to have to run some level of native compute for whatever the thing has to do, and it’s going to run some AI acceleration, of course. But is everything going to happen in your pocket? No. I mean, that’s not going to happen.
I’ve come down to that side too. I think in the fullness of time, at least for now, the thin client model, it looks like it’s going to be it. I guess that seems to be your case as well because you had a big event, it is for a data center GPU. Arm is Everywhere, but not everyone can buy it.
RH:
And power efficiency was a nice to have in the data center, but I would say it wasn’t existential. It is now, though. And I say that’s another big change because, again, one of the examples I gave, if you’re 4x-ing or 5x-ing or 6x-ing the CPUs in a given data center and you don’t want to give up one ounce of GPU accelerator power, then you’re going to squeeze everywhere you can and that, I think, is a thing that’s in our favor.
Where’s Arm in 10 years?
RH:
I would like to think of as one of the most important semiconductor companies on the planet. We’re not there yet, but that’s how I would like the company to be thought about.
Rene Haas, congratulations, great to talk.
RH:
Thank you, Ben.
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