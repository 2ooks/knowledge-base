# In the Matter of OpenAI vs LangGraph
**Source:** https://www.latent.space/p/oai-v-langgraph
**Date:** April 20, 2025
**Author:** Latent Space
**Score:** 4/5 | **Concepts:** token-economics-and-pricing, inference-architecture-and-scaling, developer-tooling-competitive-landscape
**Scoring reason:** Covers GPT 4.1's coding abilities, cheaper pricing than 4o, 1M token context, and improved prompt caching -- directly relevant to pricing, inference, and competitive landscape.

In the Matter of OpenAI vs LangGraph
The silent war in Agent Engineering gets loud.
Apr 20, 2025
75
7
6
Share
Quick reminder:
AI Engineer CFPs close soon
! Take a look at “undervalued tracks” like
Computer Use, Voice, and Reasoning
, and apply
via our CFP MCP
(talks OR workshops, we’ll figure it out).
Relevant to today’s quick post we do have an
Agent Reliability
track. Also: take
the 2025 State of AI Engineering Survey
!
The AI attention economy has enabled a hypeboi priesthood who exist in a state of
perpetual
performative orgasmic nirvana, minds continually blown as every launch Changes Everything, vibing at gigahertz oscillations of “it’s so over” vs “so back”. OpenAI’s “
Practical Guide to Building Agents
” is the latest such earth shatterer:
This guide, however, has been less
well received than Anthropic’s
equivalent.
If you watch his
multiple
appearances
with us, Harrison Chase is not someone who is quick to “anger”, so calling
this guide
“
misguided
” and doing a word by word teardown can seem like fighting words for him
1
.
At the heart of the battle is a core tension we’ve discussed several times on the pod - team “Big Model take the wheel” vs team “nooooo we need to write code” (what used to be called chains, now it seems the term “workflows” has won).
Team Big Workflows
You should read
Harrison’s full rebuttal
for the argument, but minus the LangGraph specific parts, the argument that stood out best to me was that you can
replace every LLM call in a workflow with an agent and still have an agentic system:
And the ideal agent framework lets you start from one side of the spectrum and move to the other,
optimizing for making code easy to change
:
the classic tradeoff line that every framework designer walks
You’ll find this necessary because sometimes you DO want to reverse decisions from having too many agents - as
fellow speaker Augment Code
found in
their #1 SWE-Bench entry
:
more context on
tweet
Team Big Model
To be clear it’s easy to understand where the Big Model folks are coming from: if you work with Big Lab enough, you’ve seen hundreds of engineer-hours of hand tuned workflows obliterated overnight with the next big model update — the AI Engineer equivalent of learning the Bitter Lesson again and again. This is why “
AI engineering with the Bitter Lesson in mind
” was such a resonant topic at the Summit (now at 124k views across platforms):
Specifically, I think the success of both OpenAI and
Gemini’s Deep Research
this year primarily leveraging O3 to reason through research planning and execution, and later
Bolt
and
Manus AI
doing the same with Claude, with very little workflow engineering, has demonstrated that there’s a lot to be said for building general purpose agents that simply augment models without the “inductive bias” constraints of workflows. O-team researcher Hyung Won Chung noted that adding more structure gets you wins in the short term, but that structure tends to lose in performance as the model (pretrain or inference compute) keeps scaling up.
from this talk
. we are using this insight slightly out of context: Hyung Won was making statements about INTERNAL model architecture, but we think it also applies about EXTERNAL systems built around the model — one wonders if he’d also endorse that extrapolation.
If your goal is to build AGI, to build a horizontal platform, particularly one targeting non-technical consumers who are confused by even having a model selector, then it’s an understandable position to take, and (even encourage, for the purposes of dataset/human feedback collection).
Workflows AND Agents, not OR
Ultimately the reason I argue Harrison isn’t -actually- taking a fighting stance is he leaves room for the spectrum to exist and makes a remarkably (for someone with obvious skin in the game) balanced argument that you’re going to just want options for doing both:
I find this hard to debate - if meaningful conversation is to be had, it really is more about where the current state of this Pareto frontier really is today (I’m not sure it is convex yet) and how to move it out.
What -is- true is that there is such a thing as bad ideas to avoid in creating workflows that will DEFINITELY get steamrolled, and also the converse -
workflow systems that maintain value as their underlying models get upgrades
- as we saw last year with
AlphaCodium’s initial release
in Jan and then its value persisting “out of distribution” in Nov after
the release of o1
- as we discuss on
our pod covering Flow Engineering
.
IMPACT of Agent Frameworks
The other pretty cool thing that Harrison did in his piece was publish
a full comparison table of all relevant Agent Frameworks today
, although of course even he couldn’t escape
the McCormick trap
. It’s useful to test our
descriptive metaframework of everybody’s Agent definitions
against a new out-of-distribution Agents definition:
IMPACT: Intent, Memory, Planning, Auth, Control flow, Tools. We have subjectively filtered out some frameworks without orchestration, because we view orchestration as very critical for good agent control flow
I think this is a remarkably fair shopping list of abstractions and features for the discerning Agent Engineer — it also articulates why you feel certain gaps when an Agent Framework promises you the world and yet you can’t do some things easily.
The Great Debates
To callback to our intro, if your mind is continually blown, it can never be made up. I think that helping people make up their minds is a valuable service to the community.
If you like learning from this kind of debate, we’re doubling down on the success of
the Dylan v Frankle showdown
from last year’s NeurIPS, and also accepting submissions for what we’re calling “The Great Debates” - good faith debaters from two sides of a relevant industry debate. Everybody wins, but the people who are best able to change minds win the most.
Apply in pairs
!
https://sessionize.com/ai-engineer-worlds-fair-2025
1
As I’ll argue: they’re actually not! Harrison is ever the diplomat.
75
7
6
Share
Previous
Next