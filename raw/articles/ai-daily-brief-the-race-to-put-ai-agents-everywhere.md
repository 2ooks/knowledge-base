# The Race to Put AI Agents Everywhere
**Source:** https://aidailybrief.beehiiv.com/p/the-race-to-put-ai-agents-everywhere
**Date:** March 18, 2026
**Author:** AI Daily Brief
**Score:** 5/5 | **Concepts:** gpu-and-compute-economics, semiconductor-supply-chain-bottlenecks, ai-agent-ecosystem, agent-security-identity-and-permissions
**Scoring reason:** Covers NVIDIA GTC announcements including Vera CPU, NemoClaw for agent security, Blackwell/Rubin sales, and $1T revenue forecast for the agent era.

0
The AI Daily Brief
Posts
The Race to Put AI Agents Everywhere
The Race to Put AI Agents Everywhere
March 17, 2026 · Episode Links & Takeaways
AI Daily Brief
March 17, 2026
▶ Listen to the episode
Agent Madness
submissions are closing soon!
Join our March Madness style bracket competition for agent builders. Show off the coolest agent you’ve been working on and win the chance to have your agent featured on the show. Go to
agentmadness.ai
to enter.
HEADLINES
Jensen Huang Projects $1 Trillion in NVIDIA Revenue Through 2027
Jensen Huang's two-and-a-half hour GTC keynote was packed — confirmed Groq-powered inference servers, a DLSS 5 announcement that could reshape how video games are made, and a new OpenClaw entry covered in the main episode. But the headline number was Jensen's revenue forecast: a trillion dollars through 2027, doubling his prior $500B projection for 2026 alone. Some tried to downplay it as just two years at $500B each. That misses the point — $500B in annual sales would more than double NVIDIA's current revenue. The only companies in that club are Walmart, Amazon, and Saudi Aramco. Josh Kale put it well: "The man doubled his demand forecast to a trillion dollars, announced data centers in space, and closed the show with a robot singing country music. This is NVIDIA's world. Everyone else is just renting compute in it."
Techcrunch
Jensen Huang just put Nvidia's sales projections into the $1 trillion stratosphere
Bloomberg
Nvidia Makes Trillion-Dollar Forecast at Annual Product Expo
WSJ
Nvidia's CEO Projects $1 Trillion in AI Chip Sales as New Computing Era Begins
Josh Kale (X)
This is NVIDIA's world. Everyone else is just renting compute in it.
Meta Signs $27B Deal with Nebius
Meta has signed a $27B infrastructure deal with Nebius — a neocloud that, like CoreWeave and NScale, operates smaller AI data centers with differentiated chips and full-stack support. The deal spans five years and is additional to a $3B agreement from November. The simpler explanation here isn't specialization — it's that Meta, like everyone else, is capacity constrained and gobbling up every available data center. For Nebius specifically, this is transformative: they only had around a billion in revenue last year, making this a single deal an order of magnitude larger than their entire prior business.
The Information
Meta to Spend $27 Billion on Nebius AI Data Centers
WSJ
Nebius, Meta Agree to $27 Billion AI Infrastructure Pact
OpenAI Restructures Stargate
OpenAI has put new leadership in place for a revamped Stargate. Former Intel executive Sachin Katti will oversee three distinct teams: technical data center design, commercial cloud and chip partnerships, and on-the-ground facility management — replacing the prior structure where teams were organized by project and reported to Greg Brockman. OpenAI is also now more willing to lease rather than own data centers. The original Stargate vision clearly wasn't working; this looks like a sensible reset, even if the volume of schadenfreude on X suggests otherwise.
The Information
OpenAI Names New Infrastructure Leaders Following Stargate Strategy Shift
Encyclopaedia Britannica Sues OpenAI for Training on Its Dictionaries
Encyclopaedia Britannica and Merriam-Webster have sued OpenAI for using their dictionaries and encyclopedias in training data, claiming ChatGPT has "memorized" significant portions of copyrighted content and produces near-verbatim reproductions on demand. Britannica also claims ChatGPT has cannibalized their web traffic. OpenAI responded with the familiar "publicly available data, grounded in fair use."
Techcrunch
The dictionary sues OpenAI
The Verge
Encyclopedia Britannica is suing OpenAI for allegedly 'memorizing' its content
Reuters
Encyclopedia Britannica sues OpenAI over AI training
Open Source AI Starts Closing Up
Two stories point in the same direction: Alibaba has restructured its AI organization into a new unit called the Alibaba Token Hub, folding the Qwen research team alongside consumer apps under CEO Eddie Wu with an explicit mandate to "create tokens, deliver tokens, and apply tokens." Separately, Z.AI released a faster GLM-5-Turbo model optimized for agentic tasks — but kept it closed source. VentureBeat reads this as a broader Chinese market shift: lightweight open-source models for developer goodwill and distribution, while the strategically important agent-focused models stay proprietary. Nathan Lambert, who just wrote an essay on this trend, noted the why for open releases "is static/not changing" even as costs skyrocket. Worth keeping an eye on.
Bloomberg
Alibaba Starts Major Revamp to Heighten Focus on AI Profits
Venturebeat
z.ai
debuts faster, cheaper GLM-5 Turbo model for agents — but it's not open-source
Corrin (X)
“This one decision tells you more about where the industry is heading than any benchmark”
Interconnects
What comes next with open models — Nathan Lambert
MAIN STORY
The Race to Productize Agents
If Q1 was about realizing that agents with real systems access are viable — OpenClaw as the instantiation of that new capability set — then Q2 is shaping up to be an absolute sprint to productize them and get them enterprise-ready. Jensen Huang kicked things off at GTC by saying explicitly that every company in the world needs an OpenClaw strategy. That's a big claim, and one that seems to be backed up by the wave of launches, pivots, and enterprise moves happening in real time.
CLAWIFICIATION EVERYWHERE
The OpenClaw Diffusion Map
"People don't want AI chat. They want to get work done."
Kevin Simback of Delphi Labs wrote a post at the start of the month surveying eight OpenClaw alternatives — and noted two weeks later that three more had already appeared. OpenClaw proved two things simultaneously: giving an LLM broad access to your machine is insanely useful, and it's mildly terrifying. That's set off a Darwinian scramble: products like Nanobot, ZeroClaw, and PicoClaw trying to reduce complexity to specific useful subsets, others like OpenFang, Hermes, and IronClaw trying to bring security via self-hosting, and a whole category of AI-native companies offering their own integrated versions.
Kevin Simback (X)
Everything is Agent: A Review of OpenClaw Alternatives
Arivand Srinivas (X)
The AI is the Computer
Manus
"Your most important work happens on your own computer."
Manus — acquired by Meta in December — launched My Computer this week, a desktop app that puts their agent on your local machine. Their blog post acknowledged, without naming OpenClaw directly, the fundamental limitation of the cloud sandbox: your project files, development environments, and essential applications all live locally. The agent can now close that gap. One thing Manus is doing that others haven't yet: pushing toward building fully working native Mac apps, not just cloud-based applications.
Manus
Introducing My Computer: When Manus Meets Your Desktop
Manus (X)
My Computer launch thread
Adaptive
"By year end, AI agents will use more software than humans do."
Adaptive launched Adaptive Computer this week — an always-on personal computer that uses encoded memory to learn how specific software works, how your catalog is organized, and how you prefer things done. The pitch is that most business software requires a human sitting there operating it. Their example: a hardware store owner with 47 new products in a spreadsheet that need to get into Square. Drag the file in, describe what you want, done. The appeal to normative business use cases rather than tech-heavy workflows is interesting to watch.
Adaptive (X)
Adaptive Computer launch thread
Ole Lehmann (X)
Using Adaptive Computer for YouTube analytics
NemoClaw
"Every company in the world needs an OpenClaw strategy."
The biggest OpenClaw-related announcement this week came from NVIDIA. NemoClaw is a software toolkit built on top of the OpenClaw project that adds an isolated sandbox, policy-based security, and formalized access controls — making OpenClaw viable for enterprise environments. It's model and hardware agnostic, and was developed in close collaboration with OpenClaw creator Peter Steinberger. Jensen's framing at GTC was explicit: OpenClaw is to this moment what Linux was at its moment, what Kubernetes was at its moment, what HTML was at its moment. Kevin Simback, who has been vocal about OpenClaw not being enterprise-ready, called NemoClaw potentially "what really kicks it off."
NVIDIA
NVIDIA Announces NemoClaw for the OpenClaw Community
Techcrunch
Nvidia's version of OpenClaw could solve its biggest problem: security
WSJ
Nvidia Software Aims to Bring OpenClaw to the Enterprise
Venturebeat
Nvidia's NemoClaw brings privacy and security controls to autonomous OpenClaw agents
Kevin Simback (X)
Excited to dig into NemoClaw — this may be what really kicks it off
Peter Steinberger (X)
Huge step towards secure agents you can trust
Tristan Rhodes (X)
I’ve been avoiding OpenClaw, is NemoClaw the fix I’ve been waiting for?
Eric Siu (X)
NVIDIA Just Solved the One Problem Blocking AI Agents
OpenAI's Strategy Shift
"We cannot miss this moment because we are distracted by side quests."
Robert Scoble observed from the GTC expo floor that all the big booths were enterprise — and that that's exactly why OpenAI is changing strategy. The Wall Street Journal reports that CEO of Applications Fidji Simo has put the company on notice: the do-everything approach has cost them their lead. Sam Altman's "series of startups within the company" model produced a dizzying array of bets — Sora, the Atlas browser, the Jony Ive device — while Anthropic built a laser-narrow strategy around agentic coding and kept compounding it. Simo is replicating that, declaring a code red and telling staff to nail productivity, especially for enterprise. The most concrete recent output: native subagents in Codex, which let users spin up specialized parallel agents from a single orchestration layer in plain language. Greg Brockman reported that GPT-5.4 hit an annualized run rate of $1B in net-new API revenue within a week of launch.
WSJ
OpenAI to Cut Back on Side Projects in Push to 'Nail' Core Business
OpenAI
Subagents — now available in Codex
OpenAI (X)
Subagents launch thread
Greg Brockman (X)
GPT-5.4 annualized run rate hits $1B in net-new revenue within a week
Fidji Simo (X)
On the deployment arm and Frontier demand
Robert Scoble (X)
From the GTC expo floor: all the big booths are enterprise