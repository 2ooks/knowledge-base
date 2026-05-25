# [AINews] Google I/O 2026: Gemini 3.5 Flash, Omni (NanoBanana for Video), Spark (background agents), and Antigravity 2.0
**Source:** https://www.latent.space/p/ainews-google-io-2026-gemini-35-flash
**Date:** 2026-05-20
**Author:** Latent Space
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

AINews: Weekday Roundups
[AINews] Google I/O 2026: Gemini 3.5 Flash, Omni (NanoBanana for Video), Spark (background agents), and Antigravity 2.0
Google has been busy!
May 20, 2026
∙ Paid
56
2
Share
The
full keynote livestream
was 2 hours, but as usual, The Verge has the best supercut down to 30 mins, which is very worthwhile to get a narrative sense:
The mainline Gemini 3.5 Flash is GA today (very nice compared to some staged rollouts) and is sold as a decent step up even compared to 3.1 Pro, with 3.5 Pro coming next month. Perhaps more impressive were the Gemini Live (Voice) and Omni (Video) and Google Pics/Flow (Images/VFX/music) modalities, where Google demonstrated industry leading capabilities and latency, all presumably made possible by industry leading hardware and models.
Per longstanding tradition at every bigtech keynote these days, Google also showed off some smart glasses tech, which seems a little more likely to be seen on the street than many prior iterations from both Google and their peers.
AI News for 5/18/2026-5/19/2026. We checked 12 subreddits,
544 Twitters
and no further Discords.
AINews’ website
lets you search all past issues. As a reminder,
AINews is now a section of Latent Space
. You can
opt in/out
of email frequencies!
AI Twitter Recap
Google used I/O to reposition Gemini as both a consumer AI surface and a developer/agent platform, with three core technical announcements: Gemini 3.5 Flash for fast agentic/coding workloads, Gemini Omni for multimodal generation/editing starting with video, and a broader Antigravity agent stack spanning desktop/CLI/SDK/API.
Official posts emphasized scale — Google says it now processes
over 3.2 quadrillion tokens/month
, up
7x YoY
from
480T/month
, while the Gemini app has
900M+ monthly users
and is available in
230+ countries and 70+ languages
(
Google
,
Google
,
GeminiApp
). The most technically substantive release was
Gemini 3.5 Flash
, framed by Google as its strongest agentic/coding model yet,
GA immediately
, with
1M-token context
,
65k max output
,
4 thinking levels
(“minimal/low/medium/high”), and “thought preservation” across turns (
GoogleDeepMind
,
Google
,
_philschmid
). Google paired that with
Gemini Omni
, a new family combining Gemini reasoning with generative media, initially via
Omni Flash
, capable of taking
text/image/video/audio inputs
and producing video edits/generation in Gemini, Flow, Shorts, and later APIs (
GoogleDeepMind
,
Google
,
GeminiApp
). Around those models, Google launched or expanded
Antigravity 2.0 desktop
,
CLI
,
SDK
,
Managed Agents in the Gemini API
, Search-native generative UI/coding,
Gemini Spark
background agents on cloud VMs, and a long list of Gemini-app/Workspace/commerce/media integrations (
Google
,
Google
,
Google
).
Facts vs. opinions
Facts / directly claimed by official or third-party benchmark sources
Google says it now processes
3.2 quadrillion tokens/month
, up from
480 trillion
a year earlier (
Google
).
Google says Gemini has
900M+ monthly users
(
Google
).
Google says Gemini 3.5 Flash is
GA today
across Gemini app, Search AI Mode, Gemini API, AI Studio, Antigravity, Android Studio, and enterprise surfaces (
Google
,
GeminiApp
).
Google says Gemini 3.5 Flash has
1M context
,
65k max output
,
4 thinking levels
, and “thought preservation” across turns (
_philschmid
).
Google says 3.5 Flash beats Gemini 3.1 Pro on
Terminal-Bench 2.1
,
GDPval-AA
, and
MCP Atlas
(
GoogleDeepMind
,
Google
).
Google says 3.5 Flash runs
4x faster than comparable frontier models
, and
up to 12x faster in Antigravity
(
Google
,
JeffDean
).
Independent benchmarker Artificial Analysis reports Gemini 3.5 Flash scores
55
on its Intelligence Index,
+9 vs Gemini 3 Flash
, at
>280 output tok/s
, with
MMMU-Pro 84%
,
GDPval-AA Elo 1656
, and pricing of
$1.50 / $9.00 per 1M input/output tokens
; it also reports the model is
5.5x costlier
to run than Gemini 3 Flash on its suite and
75% costlier than Gemini 3.1 Pro
(
ArtificialAnlys
).
Arena reports Gemini 3.5 Flash reached
#9 overall in Text Arena
and
#9 in Code Arena: Frontend
, scoring
1507
, a
+70
jump over Gemini 3 Flash, and becoming the top score in its price tier (
arena
).
Google says Gemini Omni Flash is available in Gemini/Flow today for paid users, in Shorts/Create starting this week for free, and via APIs in coming weeks (
Google
).
Google says Spark runs on
dedicated Google Cloud virtual machines
, allowing long-running tasks while user devices are closed (
Google
).
Google claims an Antigravity + Gemini 3.5 Flash demo built a functioning OS in
12 hours
using
93 parallel sub-agents
,
15k+ model requests
,
2.6B tokens
, and
< $1K
API credits (
Google
).
Google says Search will use Antigravity + 3.5 Flash to generate
custom visual tools/simulations
on the fly (
Google
).
Opinions / interpretations / skepticism
Positive takes: “Google is back,” “insane evals for a Flash model,” “world model towards AGI,” “mind blowing” for Search + Antigravity, etc. (
kimmonismus
,
Kseniase_
,
demishassabis
).
Neutral caution: some posters explicitly avoided overhyping due to
self-reported benchmarks
and noted pricing/perf concerns (
scaling01
,
simonw
).
Negative/skeptical takes focused on:
Price inflation
relative to earlier Flash models (
enricoros
).
Comparisons where
GPT-5.5-medium
may be smarter/cheaper/faster end-to-end (
scaling01
,
scaling01
).
Benchmark caveats such as weak
TerminalBench-Hard
, mediocre
MRCR / ARC-AGI-2
, or not clearly beating Kimi/GLM on some slices (
scaling01
,
teortaxesTex
,
scaling01
).
Product naming/UX confusion around Gemini CLI vs Antigravity CLI and broader interface design criticism (
zachtratar
,
kchonyc
,
teortaxesTex
).
Gemini 3.5 Flash: the main technical release
Official positioning
Google/DeepMind repeatedly described
Gemini 3.5 Flash
as the company’s strongest model yet for
agents and coding
, not its absolute flagship intelligence model. It’s meant to sit on the high-speed, high-utility part of the Pareto frontier, powering both Google products and developer workloads (
GoogleDeepMind
,
Google
,
SundarPichai
).
Technical details and metrics
From Google and affiliated posts:
GA availability now
(
Google
)
1M token context window
65k max output tokens
Thinking levels:
minimal, low, medium (
new default
), high
Thought preservation across multi-turn conversations
Text output
Input modalities:
text, image, video, speech
per Artificial Analysis (
_philschmid
,
ArtificialAnlys
)
Pricing:
$1.50 / 1M input
,
$9.00 / 1M output
,
90% discount on cached input
(
scaling01
,
ArtificialAnlys
)
Official benchmark claims:
Terminal-Bench 2.1:
76.2%
GDPval-AA:
1656 Elo
MCP Atlas:
83.6%
Google-quoted multimodal result:
MMMU-Pro 83.6%
in one engineer post; Artificial Analysis reports
84%
, highest recorded on its setup (
koraykv
,
ArtificialAnlys
)
Speed claims:
Google marketing claim:
4x faster than comparable frontier models
(
Google
)
In Antigravity, Google says it is
up to 12x faster
(
JeffDean
,
scaling01
)
Artificial Analysis observed
>280 output tok/s
Some discussion cited
~867 tok/s
in Antigravity-specific optimized serving (
scaling01
,
scaling01
)
Third-party evaluation:
Artificial Analysis says 3.5 Flash is the
leader on the intelligence-vs-speed Pareto frontier
, but the economics are notably worse than prior Flash:
Intelligence Index
55
+9
over Gemini 3 Flash
Hallucination rate reduced to
61%
, a
31-point drop
vs Gemini 3 Flash on its omniscience setup
GDPval-AA 1656 Elo
5.5x
costlier than Gemini 3 Flash to run on its benchmark suite
75%
costlier than Gemini 3.1 Pro on the same suite (
ArtificialAnlys
)
Arena:
#9 Text Arena
#9 Code Arena: Frontend
1507
score,
+70
over Gemini-3 Flash
Better than Gemini 3.1 Pro across categories in its frontend coding eval (
arena
,
arena
)
Implications
The notable shift is that Google appears to be using a “Flash” label for a model that, in prior cycles, would have been described more like a
high-end product model optimized for deployment
rather than simply a cheap lightweight tier. Several posters called this out directly, arguing Flash is becoming more expensive and possibly absorbing former Pro territory (
enricoros
,
simonw
).
The strongest technical signal is not “best absolute benchmark model,” but:
material agentic gains
extreme serving speed
deep integration into product surfaces
tooling built around subagents and long-horizon execution
That makes 3.5 Flash strategically important even if some competitors still win on raw price-adjusted intelligence in certain third-party comparisons.
Gemini Omni: multimodal generation/editing as “create anything from any input”
What Google announced
Google introduced
Gemini Omni
as a new family merging Gemini reasoning/world knowledge with Google’s generative media stack, starting with
video
creation and editing. Official messaging described it as “create anything from any input,” but current rollout is narrower:
Inputs:
text, images, audio, video
Initial output emphasis:
video
Product availability:
Gemini app
,
Flow
,
YouTube Shorts/Create
, later
APIs
Current shipping model:
Gemini Omni Flash
(
GoogleDeepMind
,
Google
,
Google
)
Google/DeepMind claims:
Better
world understanding
More robust
physics
Multi-turn editing where scene/character consistency is retained
Ability to “reimagine” user video footage with conversational edits (
Google
,
Google
)
Rollout specifics:
Paid Gemini users globally in app/Flow “today”
YouTube Shorts/Create rolling out “starting this week” at no cost
APIs for developers/enterprise in coming weeks (
Google
,
GeminiApp
)
Perspectives
Supportive: users and Google employees described Omni as a major quality step, especially for
video editing
and consistency (
joshwoodward
,
fofrAI
,
osanseviero
).
Strategic interpretation: several posters framed Omni as evidence Google is investing in
world models
and embodied/physical priors, not just text/code competition (
demishassabis
,
jparkerholder
,
kimmonismus
).
Skepticism: some UI/output examples drew criticism for looking like “B-tier video game interface” or too polished/template-like (
teortaxesTex
,
shlomifruchter
).
Context
Omni matters less as “yet another video model” and more as Google’s attempt to unify:
multimodal understanding,
media editing,
world grounding,
agent interfaces,
and eventually any-input/any-output generation.
This aligns with DeepMind’s long-running world-model agenda and Google’s product distribution advantage.
Antigravity: Google’s agent OS, not just a coding assistant
A major underappreciated I/O theme was that Google is no longer presenting agents as a thin wrapper around a chat model. Antigravity is becoming the
execution substrate
.
What launched / expanded
Antigravity 2.0 desktop app
: agent-first desktop with core conversations, artifacts, multi-agent orchestration (
Google
,
Google
)
Antigravity CLI
(
Google
,
Google
)
Antigravity SDK
(
Google
)
Managed Agents in Gemini API
: single API call gives an agent plus hosted Linux sandbox; supports Bash/Python/Node, files, browsing, custom markdown-defined skills, repo/GCS mounts (
Google
,
GoogleAIStudio
,
_philschmid
)
Integrations with
AI Studio
,
Android
,
Firebase
,
Workspace
, web (
Google
,
Google
)
One-click export from
AI Studio to Antigravity
(
Google
)
Native
Android app generation
in AI Studio / Android support in Antigravity (
Google
,
AndroidDev
)
Technical signaling
Google’s own demos centered on
parallel sub-agents
,
hosted execution
,
high-frequency iterative loops
, and
artifact-oriented workflows
. Jeff Dean explicitly described 3.5 Flash as a strong engine for “deploy sub-agents that collaborate, run high-frequency iterative loops, and solve real-world problems at scale” (
JeffDean
).
The marquee proof point:
OS built in
12h
93
parallel sub-agents
15k+
requests
2.6B
tokens
< $1K
credits (
Google
)
Even if this is mostly a stage-managed benchmark/demo, it reveals the architecture Google wants developers to adopt:
many fast agents over one slow monolithic run
.
Reactions
Positive: this is Google’s answer to Codex/Claude Code/OpenClaw/Hermes-style workflows, with a stronger infra story (
iScienceLuvr
,
theo
).
Critical: branding and product sprawl remain confusing; some users aren’t sure whether they should use Gemini CLI or Antigravity CLI, and Google’s design choices drew complaints (
kchonyc
,
zachtratar
,
teortaxesTex
).
Search, Gemini app, and consumer agents
Search
Google announced a redesigned AI-powered Search box, multimodal query support, and the most ambitious consumer-facing move:
Search generating custom visual tools and simulations on the fly
using Antigravity + Gemini 3.5 Flash (
Google
,
Google
).
It also previewed
information agents
in Search:
persistent monitoring tasks
web/news/social/real-time signals
synthesized updates with links and actions
rolling out to Pro/Ultra this summer (
Google
,
Google
)
This is a notable strategic shift: Search moves from retrieval/ranking to
background agentic monitoring + generated applets
.
Gemini app
Consumer Gemini updates included:
new “
Neural Expressive
” design language (
Google
)
inline/instant
Gemini Live
voice (
Google
)
Daily Brief
personalized digest from inbox/calendar/tasks (
Google
,
GeminiApp
)
Gemini Spark
as a 24/7 personal AI agent on cloud VMs, checking with users before major actions (
Google
,
GeminiApp
)
macOS app + upcoming Spark/voice desktop workflows (
Google
,
GeminiApp
)
Pricing / subscriptions
Google introduced a new pricing ladder:
new
$100/month
plan
top-tier
Ultra cut from $250 to $200/month
(
Google
,
GeminiApp
)
This reads as a more aggressive bid for premium power users, especially coders and creators.
Trust, provenance, and standards
Google pushed
SynthID
across Search, Gemini, Chrome, and hardware/media surfaces, and announced partnerships with
OpenAI, NVIDIA, Kakao, and ElevenLabs
to bring SynthID to their generated content (
Google
,
Google
).
That is one of the more consequential standards moves from I/O:
it gives Google a shot at owning part of the provenance layer for generative media;
notably, OpenAI separately announced support for checking OpenAI-generated images via
SynthID watermark + C2PA credentials
(
OpenAI
).
This was less flashy than Omni/3.5 Flash, but likely more durable if provenance becomes mandatory infrastructure.
Google’s science and world-model angle
Several I/O items reinforced that Google does not want to compete only on coding/chat:
Gemini for Science
: Literature Insights, Hypothesis Generation, Computational Discovery (
GoogleDeepMind
,
Google
)
Nature
publication links around ERA / Co-Scientist (
GoogleResearch
,
GoogleResearch
)
Project Genie + Street View grounding
, using ~20 years of maps imagery to create interactive real-location simulations (
Google
,
poolio
,
bilawalsidhu
)
This broader context explains why some observers interpreted Omni as “world-model progress” rather than just a content tool (
demishassabis
,
jparkerholder
).
Different opinions
Bullish / supportive
Gemini 3.5 Flash viewed as a major leap for a speed-tier model, especially on agentic coding (
kimmonismus
,
SundarPichai
).
Search + Antigravity seen as potentially transformative because Google can deploy generated UI/tools at enormous scale (
Kseniase_
,
TheTuringPost
).
Omni praised for editing quality and for hinting at a deeper world-model roadmap (
joshwoodward
,
kimmonismus
).
Skeptical / opposing
Concern that Google is leaning on
self-reported benchmarks
, and independent comparisons still leave room for competitors (
scaling01
).
Concern that “Flash” is no longer cheap enough to justify the name; pricing has climbed sharply from prior Flash generations (
enricoros
,
simonw
).
Some believed
GPT-5.5-medium
still dominates on a combined smart/cheap/latency basis (
scaling01
).
Some benchmark slices imply unevenness — e.g. poor TerminalBench-Hard or middling reasoning metrics despite strong agentic numbers (
scaling01
,
teortaxesTex
).
Neutral / analytical
Artificial Analysis gave the strongest balanced take:
excellent speed-intelligence frontier position
,
substantial agentic gains
, but materially
worse cost
than prior Flash and even higher than 3.1 Pro on their end-to-end suite (
ArtificialAnlys
).
Arena’s data also supports a “real improvement, not just marketing” conclusion, especially for frontend/code tasks, without claiming category dominance (
arena
).
Why this matters
Google now has a coherent deployment story.
Earlier Gemini cycles often felt benchmark-heavy and product-fragmented. At I/O, Google tied model, infra, tools, APIs, consumer surfaces, and enterprise rollout together.
The center of gravity is shifting from chatbot UX to agent execution.
The important primitives were not just model IQ: they were
subagents, hosted sandboxes, long-running tasks, generated artifacts, and integration with Search/Workspace/Android
.
Gemini 3.5 Flash suggests “fast enough to orchestrate many agents” may matter more than max benchmark score.
For coding and tool use, throughput and latency are increasingly product-defining.
Omni reveals Google’s differentiation thesis.
Google is betting on multimodal/world-grounded systems rather than purely text-centric competition.
Trust/provenance is becoming platform infrastructure.
SynthID partnerships with OpenAI/NVIDIA/ElevenLabs/Kakao suggest some convergence around content-auth provenance layers.
The biggest unresolved question is economics.
Technically strong or not, 3.5 Flash drew substantial pushback on cost inflation. If “Flash” is no longer the cheap workhorse tier, Google may win on capability deployment while losing some developer mindshare on predictability and pricing simplicity.
Talent, Labs, and Ecosystem Moves
Karpathy joins Anthropic
: The day’s most engaged AI tweet was
Andrej Karpathy’s announcement
that he has
joined Anthropic
to “get back to R&D.” The tweet dominated discussion, with subsequent speculation from
@scaling01
citing Axios that he’ll work on
RSI/autoresearch
and start a new pretraining-focused effort. While the details remain unconfirmed by Anthropic, the move was widely interpreted as a major talent win for Anthropic.
OpenAI capacity products
: OpenAI announced
Guaranteed Capacity
, a commercial offering that lets customers secure
long-term compute access
for critical workloads.
Sam Altman
framed it as a response to a world that will remain
capacity constrained
as models become more useful, offering
discounted tokens for 1–3 year commits
.
GitHub and coding toolchain integrations
:
GitHub
said
Gemini 3.5 Flash
is rolling out in
Copilot
, citing strong tool use, fast response times, and cache efficiency for iterative agentic coding.
Cursor
launched integration with
Jira
, allowing cloud agents to take work items and create merge-ready PRs.
Code/VS Code
also announced Gemini 3.5 Flash availability.
Training Algorithms, Benchmarks, and Agent Evaluation
RL/post-training discussion is shifting toward denser credit assignment
:
@nrehiew_
argued that the next scalable training breakthrough may build on
GRPO
but with
denser, lower-bias credit assignment
, citing directions like
ECHO
,
Composer2
, self-distillation, and OPD.
@lateinteraction
countered with a “pedagogical RL” framing: train a self-teacher that samples
correct and easy-to-follow
rollouts.
Can coding agents do research? Not yet
:
Intology AI
released
NanoGPT-Bench
, an autonomous benchmark based on the NanoGPT Speedrun competition, testing whether coding agents can contribute to real AI R&D progress. Their headline result:
Codex, Claude Code, and Autoresearch recover only 9.3% of human progress
, mostly via hyperparameter tuning rather than algorithmic innovation.
Agent harnesses and memory are getting more formalized
:
@omarsar0
highlighted a 100+ page survey on
code-as-agent-harness
, arguing future systems need to be
executable, inspectable, stateful, and governed
.
François Chollet
made the related point that real tasks are rarely Markovian, so agents without high-fidelity trajectory compression are dramatically less useful.
Verifier quality is emerging as a bottleneck
: Threads from
@Shahules786
emphasized that scaling agent benchmarks now depends less on adding tasks and more on
improving verifier quality
, citing
SWE-bench Verified
,
OSWorld-Verified
,
ComputerRL
, and
BenchGuard
.
Science, Biology Models, and Domain-Specific Systems
Hugging Face releases Carbon DNA models
: One of the most technically interesting open releases was
Carbon
, a family of generative DNA foundation models. The team says
Carbon-3B matches Evo2-7B while running 250–275x faster at inference
, enough to process the whole human genome on a single GPU in under two days. The key recipe changes:
deterministic 6-mer tokenization
, a
factorized loss (FNS)
replacing plain cross-entropy late in training, and curated staged mixtures of functional DNA + mRNA data per
@LoubnaBenAllal1
. The release includes
models, training code, evals, data, and a demo
.
Google pushes AI for science as a product category
: Google introduced
Gemini for Science
, a suite of prototypes for researchers:
Literature Insights
(paper synthesis via NotebookLM),
Hypothesis Generation
(a Co-Scientist-style multi-agent “idea tournament”), and
Computational Discovery
(built with AlphaEvolve and ERA to generate and score thousands of code variants in parallel). Google Research also noted that
ERA
has now been published in
Nature
(
Google Research
).
Specialized pretraining is gaining support
:
@pratyushmaini
pointed to evidence that
early exposure / specialized pretraining
improves robustness to forgetting, arguing that enterprises serious about domain use cases should consider
training custom models from scratch
, not just post-training.
Safety, Governance, and Monitoring of Internal Agents
METR’s first Frontier Risk Report
:
METR
published a major new report based on unusually deep access across
Anthropic, Google, Meta, and OpenAI
, including model CoTs and non-public information about capabilities, alignment, and control. The report focuses on whether labs could
lose control of their own internally deployed agents
and includes extensive appendices and transcripts (
METR
).
Monitoring internal agents is now an active practice
:
@idavidrein
described spending a month embedded at Anthropic stress-testing systems designed to detect whether internal AI agents could “go rogue.” A key caveat he noted is that the exercise allowed Anthropic discretion to redact sensitive information, so he frames it as an
exercise rather than a formal audit
.
New safety standards org
:
Steven Adler
announced
Guidelight
, a new AI safety standards organization co-founded with Page Hedley, releasing its first two standards. While the tweet thread in the dataset is partial, the move is notable as another sign of the field professionalizing around operational standards, not just model evals.
Top tweets (by engagement)
Karpathy joins Anthropic
:
@karpathy
Google introduces the Gemini 3.5 model series
:
@Google
Google DeepMind launches Gemini Omni
:
@GoogleDeepMind
Gemini 3.5 Flash GA for agents and coding
:
@Google
OpenAI Guaranteed Capacity
:
@OpenAI
Google’s 24/7 personal agent, Gemini Spark
:
@Google
AI Reddit Recap
/r/LocalLlama + /r/localLLM Recap
Keep reading with a 7-day free trial
Subscribe to
Latent.Space
to keep reading this post and get 7 days of free access to the full post archives.
Start trial
Already a paid subscriber?
Sign in
Previous
Next