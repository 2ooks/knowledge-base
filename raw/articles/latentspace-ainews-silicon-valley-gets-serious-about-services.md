# [AINews] Silicon Valley gets Serious about Services
**Source:** https://www.latent.space/p/ainews-silicon-valley-gets-serious
**Date:** 2026-05-06
**Author:** Latent Space
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

AINews: Weekday Roundups
[AINews] Silicon Valley gets Serious about Services
A series of announcements line up to a big theme: Services are the next big opportunity.
May 06, 2026
∙ Paid
30
1
Share
We’ve written separately about 1) how
model labs will tack on an agent lab
to pursue last mile revenue and differentiated data/monetization, 2) how
coding agents breaking containment will pursue the rest of knowledge work
this year, and both themes unite this week with both Anthropic and OpenAI announcing services companies:
Anthropic’s unnamed JV with Blackstone, Hellman & Friedman, and Goldman Sachs
- funded with
$1.5B ($300m each
from main participants)  “
A typical engagement starts with a small team working closely with the customer to understand where Claude can have the biggest impact. From there, the company’s engineers—alongside Anthropic Applied AI staff—will
develop Claude-powered systems tailored to each organization’s operations.
”
OpenAI’s The Deployment Company, backed by 19 investors, including TPG, Brookfield Asset Management, Advent, and Bain Capital
- raised about $4B so far at a $10B premoney valuation: “
Microsoft-backed OpenAI last month said that its chief operating officer, Brad Lightcap, will shift into a new role and lead special projects while reporting directly to CEO Sam Altman.
Lightcap would oversee OpenAI’s push to sell software to businesses through a joint venture with a private equity firm.
”
As Aaron Levie
says
,
“As agents enter knowledge work beyond coding, there is very real work to upgrade IT systems, get agents the context they need, modernize the workflows to work with agents, figure out the human-agent relationship in the workflow, drive adoption and do change management, and much more.
While AI models have an incredible amount of capability packed into them, there’s no shortcut to getting that intelligence applied to a business process in a stable way. This is creating tons of opportunities across the market for new jobs and firms, and the labs are equally recognizing the criticality here.”
While these companies are likely more PE focused services, both companies have been pushing other vertical services initiatives for a while, and
Anthropic held a Financial Services event
in New York today with an extremely stacked guest list, noting that Finance is Anthropic’s
second highest
revenue segment:
Other startups, like Tessera raising a
Series A for System Integration today
, will try to compete, with a fraction of the funding.
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
OpenAI’s GPT-5.5 Instant, personalization rollout, and voice/agent infrastructure updates
GPT-5.5 Instant becomes ChatGPT’s new default
: OpenAI rolled out
GPT-5.5 Instant
to ChatGPT and the API as
gpt-5.5-chat-latest
, positioning it as a broad upgrade in
factuality, baseline intelligence, image understanding, and tone
. The launch also bundled stronger personalization: ChatGPT can now use
saved memories, past chats, files, and connected Gmail
, while exposing
“memory sources”
so users can see what context influenced a reply. See the main launch thread from
@OpenAI
, rollout details from
@OpenAI
, product commentary from
@michpokrass
, and reactions from
@ericmitchellai
and
@sama
.
OpenAI also published more infra detail around real-time products
:
@OpenAIDevs
shared a writeup on rebuilding the
WebRTC stack
for ChatGPT voice and the Realtime API using a
thin relay
plus a
stateful transceiver
to reduce latency and keep conversations at speech pace. This fits the broader signal around an imminent voice refresh, noted by
@kimmonismus
and
@sama
.
Developer-side OpenAI agent tooling keeps expanding
:
@OpenAIDevs
announced the
Agents SDK for TypeScript
, including
sandbox agents
and an
open-source harness
. Separately, OpenAI continued pushing Codex UX and automation, including task progress UI highlighted by
@reach_vb
and
Auto Review
for lower-friction approvals in
@reach_vb
. Community sentiment suggests 5.5 is especially strong for
high-token-budget coding and non-coding workflows
, per
@sama
and
@sama
.
Coding agents, harness design, and benchmark pressure
Harness quality is becoming a first-class differentiator
: A recurring theme across the day was that model quality alone no longer explains agent performance.
@Vtrivedy10
argued the field is mixing incompatible assumptions about
native post-trained harnesses
,
open harnesses
, and “AGI-like” model generalization; the practical takeaway is that
Model–Harness–Task fit
matters more than abstract benchmark narratives. A complementary post from
@Vtrivedy10
emphasized that talking to base or minimally wrapped models makes clear how much productized agents depend on
instructions, tools, context packing, and measurement loops
.
@sydneyrunkle
pointed to a LangChain post on the “anatomy” of long-running harnesses, while
@masondrxy
argued for
ACP-style decoupling
so teams can swap
CLI/TUI/GUI/IDE
frontends without changing the underlying harness.
Agent coding UX is fragmenting, with real disagreement on winners
: There were multiple anecdotal comparisons of agent shells and coding assistants.
@0xSero
ranked
Droid
above Pi, Amp, OpenCode, and Codex CLI.
@teortaxesTex
said
Hermes
currently beats deepseek-tui and OpenCode on
success rate, speed, and cost
, adding cache-hit details in a follow-up
comparison
. On the commercial side,
@kimmonismus
cited TickerTrends data claiming
Codex surpassed Claude Code in downloads
after late-April releases, while several developers reported that
Claude Code utility feels relatively flat
versus last fall, e.g.
@TheEthanDing
and
@finbarrtimbers
.
New coding benchmark: ProgramBench shows how far “whole-repo from scratch” still is
: Meta researchers introduced
ProgramBench
, a 200-task benchmark asking models to generate substantial software artifacts like
SQLite, FFmpeg, and a PHP compiler
from an executable spec and without starter code or internet access.
@jyangballin
presented it as an end-to-end repo generation test;
@OfirPress
summarized the headline result bluntly:
top accuracy is 0%
. Discussion quickly focused on whether the headline metric is too harsh:
@scaling01
noted models can still pass
>50% of tests per task on average
, while
@OfirPress
defended the all-tests criterion as necessary because partial implementations can game average-pass metrics.
Practical coding automation keeps moving into CI/security
:
@cursor_ai
launched agents that monitor GitHub and
automatically fix CI failures
.
@cognition
introduced
Devin for Security
, including claims of automated vuln remediation at enterprise scale and an example where Devin Review flagged a malicious axios release before public disclosure in
@cognition
.
Inference, systems, and efficiency: Gemma 4 drafters, SGLang/RadixArk, and provider economics
Gemma 4 gets multi-token prediction drafters across the open stack
: Google released
Gemma 4 MTP drafters
, promising
up to 3× faster decoding with no quality degradation
. The launch came through
@googlegemma
,
@googledevs
, and ecosystem posts from
@osanseviero
,
@mervenoyann
, and
@_philschmid
. The key engineering detail is that this is
speculative-style decoding integrated into open tooling
, with day-0 or near-day-0 support in
Transformers, vLLM, MLX, SGLang, Ollama, and AI Edge
.
@vllm_project
specifically announced a ready Docker image for Gemma 4 on vLLM.
RadixArk raises a massive seed around SGLang + Miles
: One of the bigger infra financings was
RadixArk’s $100M seed
, built around the
SGLang
inference stack and
Miles
for large-scale RL/post-training.
@BanghuaZ
framed the company as spanning inference, training, RL, orchestration, kernels, and multi-hardware systems;
@Arpan_Shah_
and
@GenAI_is_real
emphasized the goal of making frontier-grade infrastructure
open and production-grade
, rather than forcing every team to rebuild scheduling, KV-cache management, and rollout systems from scratch. Community endorsements came from
@ibab
and
@multiply_matrix
.
Inference economics are now highly provider-specific
:
@ArtificialAnlys
compared
MiniMax-M2.7
across six providers and found major differences in
tokens/sec, cache discounting, and blended cost
.
SambaNova
led raw speed at
435 output tok/s
, while
Fireworks
looked stronger on the speed/price frontier for many workloads. Separately,
@teortaxesTex
highlighted how
cache-hit rates
dominate cost on some agent workloads, calling cache optimization “the main axis of cost reduction with V4.”
Cold-start and distributed training remain active systems bottlenecks
:
@kamilsindi
described a system that cut model cold starts
60×
, from minutes to seconds, by serving weights from
GPUs already holding them
rather than cloud storage. On the training side,
@dl_weekly
highlighted Google DeepMind’s
Decoupled DiLoCo
, which reportedly achieved
88% goodput vs. 27%
for standard data parallel at scale while using ~
240× less inter-datacenter bandwidth
.
Agents, RL environments, observability, and long-horizon research
RL infra is shifting from “single generation + reward” to long-running action systems
:
@adithya_s_k
released a guide comparing
RL environment frameworks
for the LLM era, focusing on what scales to
thousands of environments
. A detailed survey by
@ZhihuFrontier
contrasted traditional RLVR with
agentic RL
, pointing to systems such as
Forge, ROLL, Slime, and Seer
and recurring concerns like
TITO consistency
, rollout latency, prefix-tree merging, and global KV caches.
Long-horizon failures are increasingly framed as horizon problems, not just capacity problems
:
@dair_ai
summarized a Microsoft Research paper arguing that
goal horizon alone can be the training bottleneck
, with
macro actions / horizon reduction
stabilizing training and improving long-horizon generalization. This rhymes with broader frustration that current benchmarks and public evals still underweight true long-horizon behavior.
Observability is maturing into a feedback-driven improvement loop
:
@hwchase17
and
@LangChain
argued that traces alone are insufficient; the key is attaching
direct, indirect, or generated feedback
so observability becomes a
learning system
.
@benhylak
launched
Raindrop Triage
, an agent dedicated to finding and investigating bad agent behavior.
@Vtrivedy10
laid out the practical loop explicitly:
gather data → mine errors → localize which component failed → apply fix → test → repeat
.
Enterprise verticalization: finance, legal, and proactive assistants
Anthropic and Perplexity both pushed hard into finance workflows
: Anthropic launched
financial-services agent templates
for work such as
pitch generation, valuation review, KYC screening, and month-end close
, with integrations into providers like
FactSet, S&P Global, and Morningstar
, via
@claudeai
and summarized by
@kimmonismus
. Perplexity announced
Perplexity Computer for Professional Finance
, bringing in
licensed data
and
35 dedicated workflows
for repeat analyst work, in
@perplexity_ai
and
@AravSrinivas
. Both launches reflect a clearer move from generic copilots to
workflow-packaged vertical products
.
Perplexity also expanded into medical/professional health sources
:
@perplexity_ai
announced premium access to
NEJM, BMJ
, and additional medical journals/databases, enabling “deep and wide research” on trusted clinical sources;
@AravSrinivas
framed this as a product for healthcare-grade information retrieval.
Proactive assistant surfaces are becoming a product category
:
@kimmonismus
reported a leak around
Anthropic Orbit
, described as a proactive assistant that synthesizes data from
Gmail, Slack, GitHub, Calendar, Drive, and Figma
without explicit prompting. Manus also added
recommended connectors
that are suggested in context when needed, per
@ManusAI
.
Top tweets (by engagement)
Anthropic’s finance template launch
drew outsized attention:
@claudeai
announced ready-to-run Claude agent templates for financial services with
22.9K engagement
, one of the biggest clearly technical/AI-product posts in the set.
OpenAI’s GPT-5.5 Instant launch
dominated discussion: the main rollout thread from
@OpenAI
exceeded
8.2K engagement
, with follow-on personalization details also performing strongly.
Gemma 4 speedups landed as a major open-model systems update
:
@googledevs
on
3× faster Gemma 4
and
@googlegemma
both broke through, reflecting strong interest in inference improvements that preserve quality.
Perplexity’s finance launch
also resonated broadly:
@perplexity_ai
reached
2.5K engagement
, suggesting that
licensed-data workflow products
are now seen as strategically important, not just niche enterprise packaging.
AI Reddit Recap
/r/LocalLlama + /r/localLLM Recap
1. Gemma 4 MTP and llama.cpp Speculative Decoding
Gemma 4 MTP released
(Activity: 1116):
Google released Multi-Token Prediction (MTP) drafter checkpoints for Gemma 4, with Hugging Face model cards for
gemma-4-31B-it-assistant
,
gemma-4-26B-A4B-it-assistant
,
gemma-4-E4B-it-assistant
, and
gemma-4-E2B-it-assistant
, described in Google’s
blog post
. The MTP setup adds a smaller/faster draft model for speculative decoding, where several draft tokens are proposed and then verified in parallel by the target model, claiming
“up to 2x”
decoding speedups while preserving identical output quality versus standard generation; one commenter notes the E2B drafter is only
78M
parameters. A technical commenter also shared an updated visual explainer of MTP/speculative decoding for Gemma 4:
Maarten Grootendorst’s guide
.
A commenter linked a technical visual guide explaining
multi-token prediction (MTP) with Gemma 4
, including implementation snippets and diagrams:
Maarten Grootendorst’s guide
. This is the main substantive resource in the thread for understanding how Gemma’s MTP-style decoding/drafting works.
One technical detail noted is that the
E2B model includes a
78M
draft model
, implying a relatively small auxiliary model used for speculative or multi-token drafting. The comment highlights the draft model size as unusually compact, which is relevant for latency/throughput tradeoffs in MTP-style inference.
Llama.cpp MTP support now in beta!
(Activity: 1103):
llama.cpp
has beta MTP (Multi-Token Prediction) support via
PR #22673
, initially targeting Qwen3.x MTP models and loading the MTP component as a separate model from the same GGUF, with its own context/KV cache rather than a separate GGUF artifact. The PR adds post-
ubatch
MTP consumption to propagate hidden features correctly across ubatches and a small speculative decoding path depending on partial
seq_rm
support; reported Qwen3.6 27B / 35B-A3B tests show ~
75%
steady-state acceptance with
3
draft tokens and usually >2× token-generation throughput over baseline.
Commenters view this as potentially one of the largest
llama.cpp
performance improvements to date, especially for dense models, and expect it to narrow token-generation speed gaps with vLLM alongside tensor parallelism. There is demand for a technical comparison of speculative decoding methods—MTP, EAGLE-3, DFlash, DTree, n-gram—covering draft-model requirements, context reuse, and model suitability.
Commenters frame
MTP / multi-token prediction
as potentially a major llama.cpp throughput improvement, especially for
dense models
, while expecting less benefit for
MoE
architectures. There is interest in comparing it against other speculative decoding approaches such as
EAGLE-3
,
DFlash
,
DTree
, and
ngram
, particularly around whether they require separate draft models and how well they reuse existing context.
One tester reported llama.cpp’s beta MTP support is
“way faster than ik_llama.cpp implementation currently”
in quick local testing. They linked a GGUF surgery script that extracts the MTP layer from
am17an’s Q8_0 model
and injects it into an existing
Qwen 3.6 27B GGUF
:
gist.github.com/buzz/1c439684d5e3f36492ae9f64ef7e3f67
, reportedly working with
Bartowski’s Q6_K
quantization.
Keep reading with a 7-day free trial
Subscribe to
Latent.Space
to keep reading this post and get 7 days of free access to the full post archives.
Start trial
Already a paid subscriber?
Sign in
Previous
Next