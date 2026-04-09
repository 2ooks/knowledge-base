# Agent Engineering
**Source:** https://www.latent.space/p/agent
**Date:** March 24, 2025
**Author:** Latent Space
**Score:** 5/5 | **Concepts:** harness-engineering, ai-agent-ecosystem, developer-tooling-competitive-landscape
**Scoring reason:** Directly analyzes Model Context Protocol's adoption by OpenAI, Google, Cursor, and Cognition as the emerging standard for agent-tool integration and context management.

Agent Engineering
Defining Agents, Why now, and why Agents are the biggest opportunity for AIEs
Mar 24, 2025
83
3
6
Share
This post contains elaborations on swyx’s
2025 AI Engineer Summit
keynote, which also serves as a cohesive overview of a selection of Agents talks from the conference which link-clickers can preview.
You can find the original
video
and
slides
here.
If you enjoyed our
Claude Plays Pokemon Lightning pod
,
we are doubling down with a Claude Plays Pokemon hackathon
with David from Anthropic!
Sign up here
.
When we first asked ourselves what we’d do differently from
Summit 2023
and
WF 2024
, the answer was a clearer focus
1
on practical
2
examples and techniques. After some debate, we finally decided to take “
agent engineering
” head on.
First thing in discussing agents, we have to do the simple task of
defining agents
.
slide updated with the IMPACT backronym
Defining Agents: A Linguistic Approach
Simon Willison,
everyone’s favorite guest on LS
and
2023
and
2024
AI Engineer keynoter, loves asking people on their agent definitions. It is an open secret that nobody agrees, and therefore debates about agent problems and frameworks are near-impossible since you can set the bar as low or as high as you want. Your choice of word is also strongly determined by your POV: Intentionally or not,
people always overemphasize where they start from
and trivialize every perspective that doesn’t.
In fact, even within OpenAI the definitions disagree — in day 1 of the conference
OpenAI released a new working definition for the Agents SDK
:
An agent is an Al application consisting of
a
model
equipped with
instructions
that guide its behavior,
access to
tools
that extend its capabilities,
encapsulated in a
runtime
with a dynamic lifecycle.
We’ll acronymize this as “
TRIM
”, but note what it DOESN’T say compared to OpenAI’s own
Lilian Weng
(now co-founder of Thinking Machines with Mira Murati) in
her post
:
Agent = LLM + memory + planning skills + tool use
Everyone agrees on Models and Tools, but TRIM forgets
planning
and
memory
, and Lilian takes
prompts
and
runtime
orchestration for granted.
Achieving common understanding of a word is not a technical matter; but a linguistic one. And the most robust approach is
descriptive, not prescriptive
. Aka, achieving a fully spanning (maybe
MECE
) understanding of how every serious party defines the word.
Simon has collected over 250 replies
— so I did the last-mile of reading through all the groupings and applying human judgment…
The Six Elements of Agent Engineering
I’ve ranked them in rough descending order of commonality/importance:
LLMs with
Tools
: the thing everyone agrees on. Big 3 “LLM OS” tools are RAG (
Contextual talk
)/
Search
, Sandboxes/Canvas (
OpenAI talk
) and
Browsers
/
CUA
.
“Agent = LLM + memory + planning skills +
tool use
”
—
Lilian Weng
Encoded
Intent:
Intents come in via
multimodal I/O
(eg
Voice talk
), are encoded in
Goals
and verified via
Evals
(
Snake Oil
,
Verifiers talk
) run in
Environments
“An agent is a system that can pursue a goal-oriented behavior, adapt along the way to achieve its goals.”
-
Chisom Rutherford
LLM-Driven
Control Flow
: as
Anthropic’s Agents talk
explain,
LLMs-in-the-loop
is a common line between preset “Workflows” and autonomous “Agents”.
3
"The more agentic an application is, the more an LLM decides the
control flow
of the application"
-
Harrison Chase
Multi Step
Planning:
for which the SOTA is
editable plans
, as
the Deep Research
talk
and
Devin
/
Manus
agents have shown are working well
“An AI system component that performs non-trivial,
multi-step
operations that previously would have required a human.”
-
Daniel Miessler
Long Running
Memory:
which create coherence and self-improvement loops. Beyond MemGPT/
MCP memory
, we also highlight
Voyager, SteP style reusable workflows and skill libraries
as a more structured form of memory.
“An AI system that's capable of carrying out and completing
long running
, open ended tasks in the real world”
—
Dan Jeffries
Delegated
Authority:
Trust is the most overlooked element and yet
the oldest
. “Stutter-step agents”
4
get old fast. For read-heavy workflows you can
Trust but Verify
(
Brightwave talk
) but success in the
enterprise
needs more (
Writer talk
).
“An agent is
trusted
to act on behalf of and in the interest of those being represented. If there’s no trust there is no agent.
” —
Roman Pshichenko
When n > 3, acronyms can be helpful mnemonics, so we have selected the first letter to form
IMPACT
5
.
You can FEEL when an agent forgets one of these 6 things. OpenAI’s TRIM agent framework has no emphasis on
memory, planning, or auth
, and while these can all be categorized as existing at the tool layer, they take on special roles and meaning in agent engineering and probably should have a lot more care put into them.
Agents, Hot and Cold
We’ve tried to accurately report the general “it’s so over”/”we are so back” duality of man in the AI Eng scene over the past years.
Spring 2023.
In
The Anatomy of Autonomy: Why Agents are the next AI Killer App after ChatGPT
we tried to explain why the excitement of ChatGPT segued immediately into AutoGPT and BabyAGI (further explored with
Itamar Friedman of Codium now Qodo
).
The Anatomy of Autonomy: Why Agents are the next AI Killer App after ChatGPT
swyx & Alessio
·
April 19, 2023
Read full story
Fall 2023 - Spring 2024
. Then came the nadir of sentiment in
Why AI Agents Don't Work (yet)
with Kanjun of Imbue, with
the first OpenAI Dev Day
launching custom GPTs to a flop and subsequent board crisis. The
Winds of AI Winter
lasted all the way til
David Luan asked us why Agents had become a bad word
in Silicon Valley:
Why Google failed to make GPT-3 + why Multimodal Agents are the path to AGI — with David Luan of Adept
March 22, 2024
Read full story
Summer 2024
. The rebound came as
Crew AI
and
LlamaIndex’s Agentic RAG
became the most viewed talks at
World’s Fair
, our podcast on Llama 3 also introduced the first discussion of Llama 4’s focus on agents, which
Soumith teased in his talk
.
Llama 2, 3 & 4: Synthetic Data, RLHF, Agents on the path to Open Source AGI
July 23, 2024
Read full story
Fall 2024
. It was Strawberry season, and with
OpenAI hiring the top Agents researchers
and releasing 100% reliable structured output and o1 in the API, reasoning models reignited the agent discussion in a very big way….
From API to AGI: Structured Outputs, OpenAI API platform and O1 Q&A — with Michelle Pokrass & OpenAI Devrel + Strawberry team
September 13, 2024
Read full story
… if you also forgot about
Claude 3.5
, released in June and updated in Nov, which doubled Anthropic’s market share by simply being the best coding model and the model powering many SOTA agents like
Bolt
,
Lindy
, and
Windsurf
(
talk
):
The new Claude 3.5 Sonnet, Computer Use, and Building SOTA Agents — with Erik Schluntz, Anthropic
November 28, 2024
Read full story
All of which led up to
Winter-Spring 2025
, when OpenAI shot back with its first
Operator
and
Deep Research
agents and we went
All In on Agent Engineering
for NYC.
The Agent Reasoning Interface: o1/o3, Claude 3, ChatGPT Canvas, Tasks, and Operator — with Karina Nguyen of OpenAI
February 1, 2025
Read full story
In fact, you can track ChatGPT’s growth numbers closely to model releases (
as I did
) and it is clear that the reacceleration of ChatGPT is all due to
reasoning/agent work
:
https://www.threads.net/@theturingpost/post/DGYk1P7oFCj/7-agents-everywhereheres-an-interesting-chart-of-chatgpt-according-to-swyx-its-g
However, we think this chronology tracking model progress and general sentiment swings isn’t even a complete account of the agent resurgence, which is still on-trend for those paying attention to broad benchmarks.
from m-ric of smolagents
(our
lightning pod with him
). the agent horizon varies depending on reliability cutoff, but METR says
it doubles every 3-7 months
this slide in the talk
Why work on Agent Engineering Now?
Obvious Catalysts
: the more dramatic stuff that is a must-know
Better Models
: reasoning of course, also more coding, MMLU/GPQA
Better Tool Use
:
100% structured output
and
BFCLv3
/IFEval
Better Tools
: improvements in the Big 3 tools and
MCP winning
the long tail
Slow-burn Trends
: broader arcs that drive order-of-magnitude updates
Business Model Shifts
:
$2-20k ChatGPT
and
Sierra
charging for outcomes
1000x Moore’s Law
: Reasoning models are following
GPT4’s cost drop curve
>100x inference
:
Speculative Editing
& ASICs leading us to
5000 tok/s
Model Diversity
: multiple labs taking share, including
xAI/TML
, enabling…
Multi-agent Research
: from
OpenAI’s
to
Pydantic
to
Crew AI
is improving
RL Finetuning
:
Will Brown did a great talk
on this, but we’ll have more soon.
This is why there’s a new resurgence in agents and the field of Agent Engineering is just now becoming the hottest thing in AI Engineering.
Full talk here
See me speed thru
my slides on YouTube and leave a comment
on what else you see!
1
Saying no to a lot of interesting directions in AI - focusing in on just one of the tracks we had last year but making a deep exploration of one topic rather than going wide
2
No direct vendor pitches; a draconian rule inspired by
dbt’s Coalesce conference
. This feels harsh because of course some of the people most qualified to talk about a problem also sell a solution for it; this meant we had to actively solicit talks outside the CFP process from people who would not normally apply to speak, like
Bloomberg
and
LinkedIn
and
Jane Street
, and the only way for a vendor to get on our stage is to also bring a customer to talk about their real lived experiences, like
Method Financial/OpenPipe
and
Pfizer/Neo4j
and
Booking.com/Sourcegraph
.
3
Rahul’s (Ramp’s) talk
also frames the choice as a form of
Bitter Lesson
- workflows get you far in the short term, but often get steamrolled by the next order of magnitude gain in intelligence or cost/intelligence.
4
Agents that ask for confirmation before every single external action - many real agents (
like Windsurf
) have had to figure out clever ways of exempting actions from human approval in order for the agent to have meaningful autonomy.
5
“write agents with IMPACT!” too hokey? I like it because M, P, A, C, and T came naturally already, so the only armtwisty one was “Intent”, because I didn’t want to limit it to OpenAI TRIM’s “Instructions” alone — the combination of Instructions and Evals felt better to guide agent behavior in the same way that
the generator-verifier gap
works at the model level.
83
3
6
Share
Previous
Next