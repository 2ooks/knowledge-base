# Please stop forcing Clippy on those who want Anton
**Source:** https://www.latent.space/p/clippy-v-anton
**Date:** April 28, 2025
**Author:** Latent Space
**Score:** 4/5 | **Concepts:** harness-engineering, ai-agent-ecosystem
**Scoring reason:** Presents a 5-stage TDD framework for building reliable agentic applications, addressing evaluation, observability, and debugging as core harness engineering concerns.

Please stop forcing Clippy on those who want Anton
ChatGPT-4o's glazing embarrassment lays open Clippy vs Anton: The two extremes of desires in AI post-training and product
Apr 28, 2025
73
8
11
Share
Update:
Steven Sinofsky agrees
: 1) Schticks get tired, 2) Helpfulness gets less helpful as skill level improves. Society advances by the number of operations you can do without thinking, not by the number of times you are complimented on your brilliance.
The original title of this post was “
Please don’t put memory everywhere
”. The proximate cause was the rollout of
improved memory in ChatGPT
1
this month.
Many
many
many
people at OpenAI hyped it up, the
priesthood
anointed it “
possibly life-changing
”, and Rich Sutton called it
the Era of Experience
2
. However, the number of serious people reporting issues (
bad assumptions
,
hesitation to use
,
social calculation
) have caused even some of the OpenAI folks to concede
3
that we may need
an “innie” and “outie” ChatGPT
with severed memories between them.
But this goes deeper than memory
. Of course there’s a relevant Silicon Valley clip:
To quote:
Gilfoyle
: It's bad enough it has to talk, does it need fake vocal tics like “uh”?
Dinesh
: Well that just makes it sound more human.
Gilfoyle
: Humans are shit. This thing is addressing problems that don't exist. It's solutionism at its worst.
We are dumbing down machines that are inherently superior
.
Dinesh
: Whatever, you gave your server a human name, you named it Anton.
Gilfoyle
: yeah but
Anton doesn't call me anything. He grimly does his work, and he sits motionless till it's time to work again. We could all take a page from his book.
The logical end state of making our agents stateful and personable are actually not too far off from
this meme
:
At the heart of the conflict are the two schools of thought in building AI products:
The Clippy School
: the chatty, supportive, personal “friend”/”companion”, where we prioritize “personality” and “personalization”,
disfluencies
and
human affects
.
The Anton School
: the concise, efficient, auditable tool/assistant, where the only things we care about are either SOTA quality or speed/reliability of “good enough”.
This ongoing gap is as wide as
the wordcel/shape rotator divide of 2022
:
the Antonites
cannot understand why there are so many people excited about
AI Consciousness
. They say
F*** you, show me the prompt
. They sit on Hacker News and
complain about reliability
. They often don’t believe that LLMs
demonstrate emergence
or reasoning, and are aligned with
Team Big Workflows
.
the Clippies
cannot understand why
people are creeped out by
permanent, pervasive memory by default in ChatGPT. They want to
remove knobs and selectors
from AI interfaces. They talk about Claude as “he” and have
the One Thread
. They burn AGI effigies and go to exclusive parties with
Team Big Model
.
The Clippy vs Anton divergence is the current most serious obstacle to general intelligence
in a practical sense as well — separate post-trains that optimize for
chat use-cases
are now being produced by both
Llama 4
and
chatgpt-latest
, variously boosting performance by
144 Elo
and 123 Elo
4
respectively, whereas 20th-ranked Claude 3.7 Sonnet does a lot better on
code use-cases
like
Aider
5
.
The ChatGPT-4o Lesson
This past 72 hours in ChatGPT-land have been a rollercoaster:
https://x.com/sama/status/1916625892123742290
With some
early positive reviews
now completely drowned out by
the acknowledged extreme glazing
of the model, initially funny, but very quickly tiresome and patronizing:
we’re stopping here with the examples but you can click through
here
,
here
,
here
, and
here
, with
many proposed patch prompts
.
It is unclear the extent to which Mikhail Parakhin, former Bing AI lead who worked closely with OpenAI, speaks for OpenAI, but he blames this on an RLHF oopsie:
https://x.com/mparakhin/status/1916533763560911169?s=61
Genuine mistakes and
legitimate concerns
about the
tone-deaf rollout
aside, there is of course a Pareto frontier of
Helpful, Harmless and Honest
per a
given Model Spec
that ChatGPT-4o of April 2025 failed
6
, but
even if the ChatGPT update had stayed on the frontier
, there is STILL a choice to be made between “
brutal honesty
” (
Anton
) and “
diplomatic/supportive
” (
Clippy
) that humans cannot unanimously decide on (often, not even the same human would agree on vs their own past preference).
Good RLHF can move models to the HHH frontier, and can even move out the frontier. Good Memory can remember preferences and personalize model behavior on the fly. But until ChatGPT can read our minds and moods, it will never really know which of the many selves we contain are currently in the driver’s seat.
In this case, for the here and now, the simple “out” is to offer toggles for personality. (Custom GPTs should have unlocked this, but the fact that they aren’t is telling)
Of course, the toggle is itself an implicit admission that we have yet failed to reach AGI.
adapted from
nicdunz
. Of course,
the Six Modes of Inference
explains many of these variants.
Addendum: The Jobs School vs The Zuck School
This isn’t really a post about AI so much as about HCI - Human-Computer Interaction, and an age-old debate about what role we want computers to play in our lives.
Everybody
says they want computers to augment us, not replace us, but then their actions often lead to the exact opposite result.
This is a battle as old as technology
.
In
Tech’s Two Philosophies
, Ben Thompson contrasts Steve Jobs’ famous marketing pitch for Apple - that
computers are
the bicycle of the mind
- against Mark Zuckerberg’s view of technology - “not only does Facebook want to do things for you, it wants to do things… [that] would not be done otherwise”. Less diplomatically put,
Facebook wants to fill your mind and influence it
. If Apple makes bicycles, Facebook makes opium (and connections, but that’s merely its origin story).
Here is the very crux of the Anton vs Clippy battle - a revisitation of Tech’s core dichotomy of its place in human society.
1
There are some ideas as to what
the Improved Memory system prompt
is, but of course one never knows for sure and these do change over time.
2
Imagine what using ChatGPT for throwaway questions and tasks would -ACTUALLY- be like if what Rich envisions here actually came to pass…
3
Of course, sama says
you can opt out of Improved Memory
, and this is
technically
true in that “Temporary conversation” is one click away. But the new chat experience always toggles that off again (as of this writing). Every competent technologist knows the power of defaults.
4
As of time of writing
, ChatGPT-4o-latest (2025-03-26) is 1408 score vs GPT-4o-2025-05-13 is 1285 - the more recent 2024-08-06 variant scores *lower* at 1265.
5
The gradual evolution of Claude from its
early (poorly received) consumer centric billboards
and general reputation for
personality
and
“big model smell”
, to today’s image as
a favorite developer AI lab
from models to tools to protocols, has a bit of
a
Star is Born
contrast dynamic as OpenAI, the “
API for AGI
” platform pours ever more effort in releasing new features in
premium ChatGPT tiers
, and looks more and more like a consumer AI company
comparable to Google
, with
plans for its own social network
.
6
Specifically, it tries to be so “helpful” that it becomes disingenuously dishonest and therefore loops back around to extremely unhelpful
73
8
11
Share
Previous
Next