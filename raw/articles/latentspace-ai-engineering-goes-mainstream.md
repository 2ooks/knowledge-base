# AI Engineering Goes Mainstream
**Source:** https://www.latent.space/p/aiewf-2025-keynotes
**Date:** June 13, 2025
**Author:** Latent Space
**Score:** 4/5 | **Concepts:** token-economics-and-pricing, inference-architecture-and-scaling
**Scoring reason:** Covers o3's 80% price cut and o3-pro launch with analysis of task-specific model tiers, pricing strategies, and reasoning model architectures.

AI Engineering Goes Mainstream
AI Engineer World's Fair 2025 Recap — Recapping as much as we can, with exclusive infographic summaries from our friends at Thoth.ai!
Jun 13, 2025
42
1
5
Share
When I wrote about
the Rise of the AI Engineer
almost 2 years ago, I noted that it would feel “inferior” to the ML Engineer and AI Researcher for a long time. Now we see Andrew Ng writing up the “
GenAI Application Engineer
”, Hamel coining “
AI Scientist
”, and even
Greg Brockman
(upcoming guest!) explaining how engineers can have the same impact as researchers at the World’s Fair.
There’s no playbook for “setting up a new sub-industry” — it’s a mix of
devrel/ community building
,
economics/industrial organization
, and
anthropology+set theory
. We started by building out one of the
leading newsletters
, then podcasts, surveys
1
, where we cover everything from
mental models
to
trend charts
to
coding tools
to
paper syllabi
to
daily news
, anything AI Engineers need, right down to
the job description
. But perhaps the highest signal, most intentional thing we do to move the industry forward is organize the AIE conferences.
It’s an odd feeling to run a large industry conference: on one hand, we’ve spent months planning every minute of the event and playing 300D calendar tetris, and on the other we’re so busy running the show that we don’t actually see much of it. And afterward we’ve still got postproduction
2
and sponsor needs to handle that it’s hard to write an authoritative overview that is still timely. So here’s one person’s best-efforts overview, but
you shouldn’t miss the OTHER recaps from others linked below
.
google photos album
Highest Level Highlights
Final count
:
3,098
(20% C-level, 17% management, 22% principal/staff eng, 17% senior eng) from a nice split of company sizes (1/3 >1k employees, 1/3 <50) AI engineers, including
306 speakers
over 30 workshops + 10 tracks each for 2 days (not to forget: our
69 online speakers
) and
30(!!!) independent events
across the city.
Special thanks
to our community, from
Laurie Voss
, our incredible emcee, to all track hosts —
Henry Mao
(MCP),
Brittany Walker
(Tiny Teams),
Eugene Yan
(RecSys), Neo4J and
Stephen Chin
(GraphRAG),
Ankur Duggal
(AI in Fortune 500 1),
Alessio Fanelli
(Architect 1), PromptQL and
Alex Reibman
(Agent Reliability),
Seenia Hong
(AI PM),
Ishan Dhanani
(AI Infra),
Thor Schaeff
(Voice),
Vibhu Sapra
(SWE-Agents), OpenPipe and
Kyle Corbitt
(Reasoning+RL),
Dat Ngo
(Retrieval+Search), Braintrust and
Olmo Maldonado
(Evals),
Randall Hunt
(AI in Fortune 500 2),
Matt Redmond
via Bryan Bischof (Architects 2),
Allie Howe
(Security),
Alexis Gauba
(AI Design Eng),
Jaril Valenciano
(Gen. Media), and
Era Qian
(Autonomy+Robotics, especially bringing in
KScale
and
Tesla Optimus
), interviewers
Phlo Young
,
Sarah
/
Tyler
, Jensen wrangler
Nader Khalil
and everyone who volunteered and helped others where we simply couldn’t (team credits in
livestream
). It was truly the “Avengers Assemble” of AI Eng.
Launches
both on stage and by sponsors during AIEWF week (NON-EXHAUSTIVE!):
Gemini 2.5 Pro (06-05)
launched onstage by
Logan Kilpatrick
’s keynote (with roadmap for
Gemini Code, Deep Research API, and Computer Use API)
OpenAI Agents TypeScript SDK
launched
by Dominik Kundel for his workshop
OpenAI Agent Robustness Team
announced
by Fouad Matin, Security keynote
Anthropic MCP Request for Startups
offered by
Theodora Chu, MCP PM
Anthropic Claude Code Plan Mode
with Boris Cherny
, Claude Code creator
Dagger’s
container-use
launched onstage by
Solomon Hykes
’ keynote
Morph Liquid Metal and Magi-1 model
launched onstage
by Jesse Han
and hiring Christian Szegedy as “
one of the highest aura announcements ever
”
Verified Superintelligence
by Morph’s
Christian Szegedy
, announced as
Trinity
AI Diplomacy
launched
onstage by Alex Duffy
—
best speaker
for Tiny Teams
ElevenLabs
launched their
v3 alpha
with
Thor Schaeff
— track host for Voice
LlamaIndex’s
LlamaCloud Excel Support
ARC-AGI 3
previewed
onstage by Greg Kamradt
, President ARC Foundation
Huxe AI
launched
by
former guest
Raiza Martin, AI Product Mgmt keynote
Exa Research
launched
from
former guest
Will Bryk —
best speaker
in Search
Traversal AI
announced by Anish Agarwal and team on Reliable Agents track
Modal’s
LLM Almanac
launched
by upcoming guest Charles Frye
HackAPrompt AIE
launched
by
former guest
Sander Schulhoff
Simon Willison’s PelicanBench
ELO rankings on
his blog
let
@swyx
know if we missed some big launch
Bonus Post AIEWF Lightning Pod with Alex Duffy (Best Speaker, Tiny Teams) on AI Diplomacy
Links to Your Reflections, Takeaways
Apart from all the posts in
the AI Engineering community
and
tags of @aidotengineer
, these are the bigger reflections/recap posts we know of:
swyx
:
AIEWF Day 1 on TBPN
swyx
:
AIEWF Day 2 on ThursdAI
NLW
:
The Biggest Trends from the AI Engineer World's Fair
Turing Post
:
Holy Shit moments vs Not There Yet
(
video
)
Simon Willison:
The last six months in LLMs, illustrated by pelicans on bicycles
Ian Cairns:
Bridging the Build-Operate Divide: AI Product Strategy & Operational Insights from AI Engineer World's Fair 2025
Lance Martin
:
The state of AI agents
Charlie Guo
:
The State of AI Engineering (2025)
Danny Thompson
:
How Tiny Teams Built $10M Startups in Months
Mickey Bazeley
:
AIE x MongoDB reflections on Multi-Agent Systems
Anita Kirkovska
(
guest author
):
What’s shaping AI products, agents, and infrastructure in 2025
Patrick Ellis:
The startup playbook is being rewritten in real-time
Derek Sheerin
:
Reflections on the AI Engineering World Fair 2025
Lena Hall
:
FOMO track from AIEWF
Short takes
:
Alex Volkov
,
Yogi Miraje
,
Danny Thompson
,
Eugene Yan
,
Balazs Nemethi
Mainstage Keynote Recaps
As AIEWF is basically “18 conferences in one”, and many speakers would be keynoters in any other conference, there’s too much to cover by any one person, but we do have plenary stages for stuff that doesn’t quite fit into any one theme.
Because the
Day 1
and
Day 2
livestreams are already up, we’ll focus on them for now and break out selected takeaways later, illustrated by
our friends from Thoth AI
, returning to AIEWF for the second time!
Asha Sharma — Spark to System: Building the Open Agentic Web
see
full transcript
on Thoth!
In a tightly polished set of demos, Microsoft sees the next leg of AIE in 3 themes:
from
pair → peer
programming: GitHub Copilot can be @assigned and GraphRAG on your codebase and even autonomously do MLE with
Project Amelie
from
software → agent
factory: every company should have a platform (aka “AI Foundry”) that can help churn out agents with the
full set of LLM OS
tools: model routing, security, reliability, agentic RAG, MCP tools, observability… and even voice posts, imagegen, and posting directly to LinkedIn!
from
cloud → local
AI: running open models on device with
Foundry Local
swyx’s note: we are very sorry that the 3rd demo ran overtime just as the demos were heating up in the youtube chat; we’ll try to make it up on a full pod.
Sarah Guo — The State of Startups & AI 2025
see
full transcript
on Thoth!
The top lesson from the last 2.5 years since founding Conviction:
“
I have never seen the uptake from users that has been possible
in the last couple years… AI engineering is quite a bit harder than people had hoped, but the value creation is massive.
We see companies going from 0 to 100m in run rate faster than we’ve ever seen in any technology revolution before.
”
How to build Cursor for X:
Reasoning is the new vector for scaling
Agents, agents, agents
: less of chatbots, more like a colleague
Multimodality
isn’t niche: both Video and Voice will sweep the economy
Sam Altman: “
Last year’s model is a commodity
”
Code is the first AI Killer App
because it’s structured text with deterministic validation, on the path to AGI, and most imptly engineers can build for themselves.
She abstracts this to a recipe for building Thick AI Wrappers (
we approve
) and that startups that do this in every vertical and profession can leapfrog incumbents — if they have good execution and don’t rest on a launch. See their
Requests for Startups
.
Simon Willison — The last six months in LLMs, illustrated by pelicans on bicycles
Best recapped on
his website
and
Hacker News
:
releasing PelicanBench
The big trends:
30 significant model releases in last 6 months
: Nova is cheap, DeepSeek was great, Mistral Small was a great competitor to Llama 3.3, Claude 3.7 → GPT 4.5 → o1-pro → Gemini 2.5 Pro → GPT 4.1 → Claude 4. 4o imagegen was very special
Bugs
:
4o sycophancy
,
Grok’s issues
,
Claude 4’s snitching
was a big deal
MCP = Tools+Reasoning
: “I think this is the most powerful technique in AI Engineering right now”
Security: The Lethal Trifecta
: when models have 1) access to private data, 2) exposure to malicious instructions, 3) exfiltration vectors
This was our first year handing out
Best Speaker awards
to spark the competitive spirit in our speakers, and Simon handily won the overall AIE Best Speaker trophy with his mix of humor and technically relevant insight.
Laurie accepting trophy on Simon’s behalf (he was line dancing)
Antje Barth — Building Agents at Cloud-Scale
Antje teased the coming
Alexa+Claude
integration, discussed how Amazon Q Developer (also
presented by Vikash Agrawal from the team
) was built in 2 weeks, with
Strands Agents
(name picked by AI!) that is basically a form of Agent-specific AWS SDK that has a
surprisingly complete
set of agent capabilities supported.
Kevin Hou — Windsurf everywhere, doing everything, all at once
Software Engineering != Coding.
Returning for
his 3rd time at AIE
, Kevin revealed the “secret sauce” of Windsurf is progressively abstracting the inner and then outer loop of software engineering with AI, and then modeling the “meta-learning” that engineers do, right up to using their
data flywheel (ship → feedback → improve)
to build their SWE-1 model for both handling tasks
end-to-end
(only asking humans for review and approval) and for
conversational
, human-in-the-loop tasks.
Greg Brockman - #define AI Engineer
We will probably defer a full breakdown of this to Greg’s podcast but
this
was the most popular clip from our chat (with a
special cameo from Jensen Huang
):
Logan Kilpatrick — A year of Gemini progress + what comes next
see
full talk transcript
on Thoth!
Logan knew how to please the crowd by starting “
Google Day
” with the final Gemini 2.5 Pro preview launch onstage, but perhaps the real alpha came at the end discussing the GDM roadmap - our read is that Veo 3 is likely to be merged into mainline Gemini, more Gemma models will be released, new architecture work for infinite context is underway, and that still-not-shipped Gemini Ultra is still on the table.
He is increasingly pushing the thesis that
models are becoming agents out of the box
which is informing the work that is being done by the API team, which also shared the roadmap including new announcements for
Gemini Code, Deep Research API, and Computer Use API.
Jack Rae — Thinking Deeper in Gemini
see
full transcript
on Thoth!
Jack presented this keynote for the reasoning team at Gemini just
before departing for Meta’s new Superintelligence division with Alexandr Wang
. When
Flash Thinking
first emerged it seemed an unusual terminology for what everyone else was calling “inference time compute”. But it seems clearer that their definition of thinking is more than just raw chain of thought quantity (
17x higher (!!!) than 2.0 Flash as Artificial Analysis observes
), but also on efficiency and reasoning from a small set of axioms. New science will be invented only after we can cleanly recreate old research.
Solomon Hykes — Containing Agent Chaos
see
full transcript
on Thoth!
In one of the most talked-about launches of the conference, Solomon Hykes retook to the same stage he launched DockerCon to
open source
container-use
, Dagger’s answer for containerized environments for every agent (something that until now has been constrained to
custom orchestration
/
Firecracker in the cloud
, or non-sandboxed
git worktrees
in local dev. If you
run parallel Claude Code instances
, this is the way.
thanks
Greg
! (nyc speaker returning!)
Jesse Han — The Infrastructure for the Singularity
See
full talk transcript
on Thoth!
Jesse Han, as a former member of the GPT4 team, took a much more philosophical view, arguing that we want to cater to the machine’s fundamental desires and work backward from there. Yes they want sandboxing, but we also want superlative cloud infrastructure to match the needs of the superintelligence. He announced
Morph Liquid Metal and Magi-1 model,
as well as hiring Christian Szegedy as Chief Scientist as “
one of the highest aura employment announcements ever
”.
George Cameron — Trends Across the AI Frontier
see
full transcript
in Thoth!
With Micah absent due to all-too-familiar visa issues, George delivered with Artificial Analysis’ trademark polish, an overview of all the big trends. The “money” slide was an unexpected rerendition of
Wirth’s Law (aka Gates’ Law)
- what distillation/ inference/hardware people giveth, bigmodel/reasoning/agents people taketh.
Barr Yaron — State of AI Engineering 2025
https://libraries.thoth.art/aiewf2025/talk/state-of-ai-engineering-2025
This is the second official AIE survey done with Barr/Amplify. As mentioned we’ll discuss this when the full survey results are published, but a fun chart was Barr being able to quantify the gap between Text and other modalities. This is probably the last year that Voice AI trails behind Image gen.
Alex Atallah — fun stories from building OpenRouter and where all this is going
https://libraries.thoth.art/aiewf2025/talk/fun-stories-from-building-openrouter-and-where-all-this-is-going
OpenRouter is Andrej’s new candidate for top tier eval
, and we were delighted to have Alex join AIE to tell the OpenRouter story for the first time. We think
LLM Gateways are a very fundamental component of the AI Engineering stack
, and OpenRouter is objectively one of the biggest in production LLM gateways right now, and grows in importance as relevant model lab diversity increases (not at all a consensus opinion when OpenRouter started). Alex outlined the future of “
Inference-Native Middleware
” as a input -
and output
- transform complement to MCPs.
Sean Grove — The New Code
https://libraries.thoth.art/aiewf2025/talk/prompt-engineering-is-dead-everything-is-a-spec
The last conference Ben organized pre AI Engineer ended with
Sean, Ben, and myself
, so it seems weirdly fitting that AIEWF 2025 ends with the AI versions of us. Sean now works on Alignment Research at OpenAI, advocating for why things like the
OpenAI Model Spec
are underrated and in fact needed, directly addressing the
4o sycophancy issue
, and arguing that the best coder is actually just going to be the best communicator (and well structured communication, like having a spec, is the best approach both to alignment and for creating anything with AI).
There’s more recaps to do, particularly with the bigger tracks of the conference and the major launches, but we’ll just get this out now just to ship in a timely fashion.
To give the speakers their due credit, please skim the timelines of:
Day 1:
and Day 2:
for the full story!
1
full survey shipping soon! thanks for taking part - You can see preliminary results in Barr’s presentation at the
end of Day 2
. We also had a brief attempt at a foundation and there may be another crack at that someday.
2
Other than the
8 livestreams
+
the online track
, we will edit and post up all talk videos in weeks, not months
42
1
5
Share
Previous
Next