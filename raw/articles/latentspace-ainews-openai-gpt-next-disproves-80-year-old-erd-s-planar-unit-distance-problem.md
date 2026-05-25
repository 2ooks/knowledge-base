# [AINews] OpenAI GPT-next disproves 80 year old Erdős planar unit distance problem for under $1000
**Source:** https://www.latent.space/p/ainews-openai-gpt-next-disproves
**Date:** 2026-05-21
**Author:** Latent Space
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

AINews: Weekday Roundups
[AINews] OpenAI GPT-next disproves 80 year old Erdős planar unit distance problem for under $1000
a quiet day but a nice result in AI x mathematics
May 21, 2026
∙ Paid
48
Share
We will leave coverage of the
SpaceXAI IPO filing
for the actual day of IPO. Today we celebrate OpenAI’s result, speculated to be
GPT 5.6 running for <32 hours or <$1000
, on
the planar unit distance problem
. Similar to the 2025
IMO Gold
result, this is a general purpose LLM,
not an AlphaProof/Lean style dedicated model
, which lends hope that this extended reasoning will generalize beyond math:
Among the 125 pages of output, there exists a “
page 39 moment
” that is getting some attention:
As the authors of
the opinion letter
note, this is a disproof, not a proof, which would have been more impressive, but nevertheless points towards the way of things to come:
AI News for 5/4/2026-5/5/2026. We checked 12 subreddits,
544 Twitters
and no further Discords.
AINews’ website
lets you search all past issues. As a reminder,
AINews is now a section of Latent Space
. You can
opt in/out
of email frequencies!
AI Twitter Recap
OpenAI’s Math Breakthrough on the Erdős Unit Distance Problem
A general-purpose reasoning model produced a new research result in discrete geometry
: OpenAI announced that an internal model disproved a long-standing belief around the planar
unit distance problem
, a famous Erdős problem from 1946, discovering a new family of constructions that improves on square-grid-style solutions
@OpenAI
. OpenAI emphasized this was a
general-purpose model
, not a domain-specific math system or scaffolded solver
@OpenAI
, and said the result points to stronger long-horizon reasoning for science broadly
@OpenAI
.
The result drew unusually strong validation from mathematicians and adjacent researchers.
Timothy Gowers
called it the first really clear example of AI solving a
well-known
open math problem
@wtgowers
, while OpenAI researcher
Hongxun Wu
described it as an internal reasoning-LLM milestone on “the hardest problems”
@HongxunWu
. Additional reactions from
@thomasfbloom
,
@gdb
,
@alexwei_
, and
@polynoamial
converged on the same point: this appears qualitatively beyond prior “AI does olympiad math” milestones.
Notable technical subtext
: OpenAI says the model was not pushed to the limit and is intended for eventual public use
@polynoamial
. The published reasoning summary itself is reportedly massive—around
125 pages
per
@voooooogel
—which helped fuel discussion about the practical role of
test-time compute
in frontier reasoning. Some observers explicitly framed this as further evidence that inference-time scaling is the paradigm carrying current progress
@
arohan
, with others extrapolating to faster future gains in formal science and mathematics
@scaling01
,
@sama
.
Cohere Command A+ Open Release and Architecture Discussion
Cohere released Command A+ as Apache 2.0 open weights
, positioning it as its most powerful model yet and explicitly optimized for low hardware requirements
@cohere
, with the licensing clarified in a follow-up
@cohere
. The release is significant partly because it is Cohere’s
first fully open Apache 2 model
per
@aidangomez
. Community reaction focused on this as a meaningful shift toward more permissive, deployable enterprise-grade open models
@nickfrosst
,
@ClementDelangue
.
The model details repeated across multiple posts: roughly
218B MoE / 25B active
,
multimodal
,
48 languages
, and runnable on relatively modest setups
@JayAlammar
,
@mervenoyann
.
vLLM day-0 support
landed quickly, including a note that it can run on as little as
2× H100s at W4A4
@vllm_project
.
Benchmarks painted a mixed but credible picture
: Artificial Analysis placed Command A+ at
37 on its Intelligence Index
, around Claude 4.5 Haiku territory, with especially strong
non-hallucination
behavior and decent speed, but weaker scientific reasoning and coding than top peer models
@ArtificialAnlys
. The community also dug into the architecture: unusual choices called out include a
parallel transformer block
, large
shared expert
usage,
LayerNorm over RMSNorm
, relatively low
32-layer
depth, and atypical head/expert configurations
@eliebakouch
,
@rasbt
,
@stochasticchasm
. This made the release notable not just as a model drop but as an architectural data point.
Benchmarks for Agents, Memory, and Scientific Workflows
InferenceBench
is one of the day’s most technically substantive releases. It targets
AI R&D automation
through open-ended inference optimization tasks, and the headline is negative for current frontier agents: they struggle with
system-level engineering
, dependency management, and broad exploration, underperforming a simple baseline of
vLLM/SGLang hyperparameter tuning
@maksym_andr
. The thread also reports an apparent
inverse scaling
effect, where models like
Claude Sonnet 4.6
and
GLM-5
rank well because they preserve robust final states, while larger models often produce brittle end configurations.
Terminal-Bench Science
extends agent evaluation from coding into
real scientific workflows
, with task contributions now open
@StevenDillmann
. In parallel,
MINTEval
targets long-context memory systems under frequent updates and interference: average instance length is
138.8k tokens
with up to
1.8M
, yet across 7 systems the average accuracy is only
27.9%
, with the best at
33.4%
@hyunji_amy_lee
. This complements a growing line of work arguing that memory should be a dedicated learned subsystem rather than just RAG/context stuffing
@dair_ai
.
On the human side of interaction research,
ThoughtTrace
introduced a large-scale dataset of users’
self-reported thoughts during real LLM conversations
:
10,174 thought annotations
,
2,155 multi-turn conversations
,
1,058 users
,
20 models
. Reported gains include
+41.7%
for user behavior prediction and
+25.6%
for alignment
@chuanyang_jin
. This is one of the more concrete attempts to instrument the “latent user state” that conversation logs alone miss.
Google I/O Follow-Through: Gemini 3.5 Flash, Omni, AI Studio, and Antigravity
Gemini 3.5 Flash
began broader rollout in the Gemini app, including free access globally
@GeminiApp
,
@GeminiApp
. Google framed it as its strongest
agentic and coding
model yet, claiming frontier performance at
4× the speed
of comparable models and under half the cost
@Google
. However, external discussion was much more mixed, with multiple posts questioning
real-world cost/performance
and token efficiency despite favorable launch-stage benchmark positioning
@ArtificialAnlys
,
@scaling01
,
@giffmana
.
Gemini Omni
appears to have made the bigger qualitative impression than 3.5 Flash. Google positioned it as a conversational multimodal creation/editing model for video and mixed-input workflows
@Google
, with Gemini app demos showing conversational video editing
@GeminiApp
. Early reactions generally treated Omni as a more differentiated product than the core LLM refresh
@scaling01
.
On tooling,
AI Studio
pushed harder toward end-to-end developer workflow and mobile access
@GoogleAIStudio
, while several posts tried to decode the relation between
Gemini Spark
,
Antigravity
, and Google’s internal/external agent harnesses
@simonw
,
@_philschmid
. A more concrete Antigravity-adjacent update was the launch of
Science Skills
for Google’s agent stack, integrating 30+ life-science sources such as
UniProt
and
AlphaFold DB
@GoogleDeepMind
.
Agent Infrastructure, Retrieval, and Dev Tooling
Several posts converged on the same operational lesson:
agents fail on infra reality before they fail on demos
. That theme shows up in the qualitative thread on research agents fighting dependency conflicts and configs
@jehyeoky248
, in LangChain’s push for
LangSmith Sandboxes GA
@LangChain
, and in newer lighter-weight
code interpreter
support for deepagents as a middle ground between pure tool execution and full sandboxes
@sydneyrunkle
,
@hwchase17
.
In retrieval/search infra,
Perplexity
described a productionized
query-aware, citation-preserving context compression
system that cuts context tokens by up to
70%
while improving answer quality, and claims
50× compression
on SimpleQA at frontier-level performance
@perplexity_ai
.
Weaviate 1.37
added
MMR reranking
to improve diversity in vector retrieval for RAG/agents
@weaviate_io
, while
SID-1
was presented as an RL-trained agentic search model with
1.9× recall over RAG+rerank
,
24× faster
, and
99% cheaper
than GPT-5.1 in the cited setup
@turbopuffer
.
Cursor
,
VS Code
, and
Codex
all shipped notable workflow updates. Cursor added
automations
in the agents workspace
@cursor_ai
, VS Code shipped better markdown/HTML previews, remote session continuity, and utility-model configurability
@code
,
@pierceboggan
. On the model side,
Composer 2.5
posted a strong coding-agent showing—
62
on the Artificial Analysis Coding Agent Index at much lower cost than top Opus/GPT-5.5 variants
@ArtificialAnlys
. OpenAI also shipped
Codex on mobile
@OpenAIDevs
.
Top Tweets (by engagement)
OpenAI math milestone
: OpenAI’s announcement of the unit-distance breakthrough was the most consequential technical post in the set, both for scientific novelty and for what it implies about long-horizon reasoning
@OpenAI
.
Cohere Command A+ open release
: One of the largest model-release stories of the day, mainly because of the
Apache 2.0
license and unusual architecture
@cohere
.
Anthropic compute expansion with SpaceX/Colossus
: Anthropic is reportedly scaling up on
Colossus 2
capacity
@nottombrown
, with follow-on posts citing a filing that values the SpaceX compute agreement at
$1.25B/month through May 2029
@SemiAnalysis_
.
Exa funding
: Exa raised
$250M Series C at a $2.2B valuation
, explicitly framing itself as a search lab organizing web data for agents
@ExaAILabs
.
AI Reddit Recap
/r/LocalLlama + /r/localLLM Recap
1. Qwen3.7 Preview and 27B Roadmap
Qwen is cooking hard
(Activity: 1292):
The image is a screenshot of Chujie Zheng teasing that Qwen is “cooking hard”, quoting an announcement that Qwen3.7 Preview is now on Arena with Qwen3.7-Max-Preview and Qwen3.7-Plus-Preview; the post claims Alibaba ranks
#6
in Text and
#5
in Vision. In context, the Reddit title/selftext indicate users are anticipating larger and refreshed open-weight models—especially 122B and a new 27B—though the screenshot itself is mainly a teaser rather than a technical benchmark breakdown.
Image
Commenters are split between excitement for high-end models and practical interest in smaller local models: some want
9B/4B
variants for low-end hardware, while others hope for
122B
, a better
35B
, or joke that Qwen may soon be “cooking” their GPU.
Several commenters focused on
model-size coverage
rather than the current
27B
release, saying they cannot practically run it and are hoping for smaller
Qwen
4B
/
9B
variants for low-end or laptop GPUs. There was also interest in larger
122B
and improved
35B
checkpoints, though one commenter noted prior
122B
mentions around Qwen 3.6 never materialized, raising uncertainty about whether a Qwen 3.7
122B
will actually ship.
Qwen3.7 Max scored by Artificial Analysis, 27B/35B waiting room
(Activity: 553):
A Reddit post highlights an
Artificial Analysis leaderboard screenshot
where Qwen3.7 Max ranks
5th
, roughly level with GPT 5.4 (xhigh) and slightly ahead of Gemini 3.5 Flash. The author notes Qwen3.6 27B trails its Max counterpart by exactly
6
points and hopes upcoming Qwen3.7 27B/35B variants land close to the Max model’s performance.
Commenters are mainly
“waiting eagerly for the open weight models”
and view the score as evidence that the
Qwen
team is now competitive with major labs, despite concerns that the Max model is not open-source. One technical concern raised is whether Qwen has fixed its prior tendency toward
“overthinking.”
Commenters focused on whether
Qwen3.7 Max
represents a genuine architectural update versus another finetune/iteration of the
Qwen3.5/Qwen3.6
architecture; one noted that extracting more performance from the same base architecture would still be technically notable.
Several users are waiting for potential
open-weight 27B/35B variants
, but one commenter speculated there may be no
Qwen 3.7 27B
at all, arguing that “Qwen 3.7” could simply be a private large model similar to
Qwen 3.6 390B A30B
rather than a full public model family.
A technical concern raised was whether the Qwen team has addressed the model’s reported
“overthinking”
behavior, implying interest in improvements to reasoning-token efficiency, response latency, and controllability rather than just benchmark gains.
Qwen will release another 27B with high probability
(Activity: 1162):
The
image
is a screenshot of an X/Twitter exchange where xiong-hui (barry) chen says Qwen is
“waiting for the exact roadmap”
but believes there is a high probability of another
27B
release, framed by the post title as a likely follow-up to the highly regarded Qwen 3.6 27B. The technical significance is speculation around Qwen continuing to optimize parameter efficiency / “intelligence density” in the mid-size dense-model range rather than only scaling to much larger MoE models.
Commenters mostly discuss local-inference practicality: some want a larger
122B-A10B
MoE
model, while others argue that
27B
is too heavy for
16GB
VRAM users and prefer a
35B
/
A3B
-style MoE that can run on consumer gaming laptops or hybrid CPU/GPU setups.
Several commenters discussed the
local-inference gap around 27B models
: users with
16GB VRAM
argued that a
27B
model is difficult to run at a usable quantization level, while a hypothetical
Qwen 35B MoE / A3B-style model
could be more practical via hybrid CPU/GPU inference and would remain accessible on gaming laptops.
There was interest in larger
dense Qwen variants
, especially
50B
–
80B
, with one commenter noting that
Qwen 27B is already very fast with MTP
and they would trade some generation speed for higher parameter count and potentially better quality.
Model-size requests clustered around both
MoE and dense scaling paths
: proposed targets included
Qwen 3.7 122B-A10B
,
50B
–
80B
MoE, and dense
10B
,
20B
,
30B
,
50B
, or
80B
releases, reflecting demand for both high-end quality and locally runnable tiers.
Keep reading with a 7-day free trial
Subscribe to
Latent.Space
to keep reading this post and get 7 days of free access to the full post archives.
Start trial
Already a paid subscriber?
Sign in
Previous
Next