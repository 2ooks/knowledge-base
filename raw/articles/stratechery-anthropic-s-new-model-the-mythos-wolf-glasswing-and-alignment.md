# Anthropic's New Model, The Mythos Wolf, Glasswing and Alignment
**Source:** https://stratechery.com/2026/anthropics-new-model-the-mythos-wolf-glasswing-and-alignment/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2FudGhyb3BpY3MtbmV3LW1vZGVsLXRoZS1teXRob3Mtd29sZi1nbGFzc3dpbmctYW5kLWFsaWdubWVudC8iXX0sImV4cCI6MTc4MjI3Njc3MCwiaWF0IjoxNzc5Njg0NzcwLCJpc3MiOiJodHRwczovL2FwcC5wYXNzcG9ydC5vbmxpbmUvb2F1dGgiLCJzY29wZSI6ImZlZWQ6cmVhZCBhcnRpY2xlOnJlYWQgYXNzZXQ6cmVhZCBjYXRlZ29yeTpyZWFkIGVudGl0bGVtZW50cyBwb2RjYXN0IHJzcyIsInN1YiI6ImU1ZDQ0YTY0LWNhNTgtNDcxZC05ZmEzLTljOTA4MTNhODg1MCIsInVzZSI6ImFjY2VzcyJ9.plwaSFlGqJm6sBUYTTMha64wcP8m38dbJXdcaM_lkFSZXnmOUDLJ_774naotHjeseaJTPgnzL1OC7_s3xKrMvom1NFZq1xLOZ5NAZ0DAWACapEhbIBfBCVOTCFtk7yryR3p9293-y6vrF2uOPbNnGB9QVdxXLErj2Qat3VA7S8JNa8SVd1vhuG7mUQ6_dSybMDpvDGYGno9VaUuqLuDStkaAueiyQa5oYs9tTorTPzzCdbfEmYjgi51ByDG7cnfsHLiqNm-HzXEwk7e_T_m3VqtcNQV7yVFT5BHrMJ_pVJRAtry4qeUBgAknNwhyOwmYoHSJiL4PpmzrLpeuOIIN7Q
**Date:** 2026-04-08
**Author:** Ben Thompson
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Listen to this post:
Your browser does not support the audio element.
Good morning,
With regards to
yesterday’s Update
, one subscriber wrote in to note that I was framing Anthropic’s 3.5GW deal as flowing through Google Cloud, but actually Anthropic was sourcing TPUs directly from Broadcom in partnership with Google, so it’s not clear that this sits within Google’s capex envelope. It’s a very good distinction to draw; Anthropic did say
in their blog post
that “the partnership deepens our existing work with Google Cloud”, so it’s not entirely clear exactly what the separation is, but it does appear to be an expansion of
Anthropic’s dedicated datacenter efforts
.
On to the Update:
Anthropic’s New Model
From the
Wall Street Journal
:
Anthropic is taking steps to arm some of the world’s biggest technology companies with tools to find and patch bugs in their hardware and software. The company is making a preview model of its new AI model, called Mythos, available to about 50 companies and organizations that maintain critical infrastructure, including Amazon, Microsoft, Apple, Alphabet-owned Google and the Linux Foundation.
Cybersecurity researchers and software-makers worry that artificial intelligence is becoming so good at exploiting vulnerabilities that it could cause widespread online disruption. Security experts have predicted that AI models will discover an avalanche of software bugs, and the effort is set to help companies stay one step ahead of cyber criminals and other threats.
Mythos has proved to be so capable at potentially dangerous things such as finding and exploiting software bugs that Anthropic has, at present, no plans to release it to the general public, said Logan Graham, the head of Anthropic’s Frontier Red Team, which evaluates Claude for risks. “We need to know that we can release it safely, and it’s not exactly clear how we can do that with full confidence,” he said.
Mythos is, by all accounts, an absolute beast, particularly at the coding workflows that Anthropic excels at:
The big gain here is a massive improvement to the base model; while Anthropic hasn’t released details of Mythos’ training,
this is likely the first frontier lab base model that was trained on Nvidia’s Grace Blackwell NVL72 architecture
(it appears that Mythos was trained on TPUs). It will be very interesting to compare these numbers — particularly the relative improvement — to OpenAI’s next “Spud” model. The first new model of this latest generation was actually Gemini 3, but Google’s post-training and harness simply isn’t competitive. Mythos is the first real proof point that there are still returns to pre-training scale for state-of-the-art models.
It’s also extremely expensive: Mythos Preview will cost $25/$125 per million input/output tokens, 5x Opus 4.6’s $5/$25, which is already substantially more expensive than GPT-5.4 ($2.5/$15). This raises an obvious question: how much of Anthropic’s reluctance to make Mythos widely available is due to security concerns, as opposed to the more prosaic reality that Anthropic simply doesn’t have enough compute?
The Mythos Wolf
There is, it’s safe to say, a lot of skepticism about Anthropic’s announcement; this tweet was representative:
Anthropic marketing strategy is so funny like aahhhh the government is treading on me ahhhhh our models are so good we can’t release them it would be too dangerous ahh someone stop me im going to destroy the economy
— BuccoCapital Bloke (@buccocapital)
April 7, 2026
This rolling of the eyes is exacerbated by the fact that Anthropic has reasons to not make Mythos widely available beyond a lack of compute. Another factor is surely trying to avoid having Mythos distilled by Chinese model makers; from the
Wall Street Journal
in February:
U.S. artificial-intelligence startup Anthropic said three Chinese AI companies set up more than 24,000 fraudulent accounts with its Claude AI model to help their own systems catch up. The three companies—DeepSeek, Moonshot AI and MiniMax—prompted Claude more than 16 million times, siphoning information from Anthropic’s system to train and improve their own products, Anthropic said in a blog post Monday. Earlier this month, an Anthropic rival, OpenAI, sent a memo to House lawmakers accusing DeepSeek of using the same tactic, called distillation, to mimic OpenAI’s products. Anthropic said distillation had legitimate uses—companies use it to build smaller versions of their own products, for example—but it could also be used to build competitive products “in a fraction of the time, and at a fraction of the cost.”
And beyond that, Anthropic’s business focus is the enterprise; self-serve Claude subscriptions are certainly great in terms of acquiring new users and small teams, but they’re also increasingly difficult to serve at scale as first reasoning models and then agents exponentially increase compute demands (plus the self-serve base complains extremely loudly when Anthropic throttles demand, serves lower end models, or restricts access to things like OpenClaw). It wouldn’t be the worst thing for Anthropic’s business to focus on companies operating under formal enterprise agreements, which, helpfully enough, can now be characterized as “vetted” customers who can be trusted with Mythos’ capabilities.
I get all of this skepticism, and suspect there is some truth to it. One thing I always come back to in terms of Anthropic’s leadership is that it was CEO Dario Amodei who, while still at OpenAI, led the charge to make OpenAI
not
open, for safety concerns.
Amodei (and several other future Anthropic executives) wrote
:
We’ve trained a large-scale unsupervised language model which generates coherent paragraphs of text, achieves state-of-the-art performance on many language modeling benchmarks, and performs rudimentary reading comprehension, machine translation, question answering, and summarization—all without task-specific training.
Our model…was trained simply to predict the next word in 40GB of Internet text. Due to our concerns about malicious applications of the technology, we are not releasing the trained model. As an experiment in responsible disclosure, we are instead releasing a much smaller model for researchers to experiment with, as well as a technical paper.
That model was GPT-2, which is to say that Amodei and friends have been chicken-littling about model releases for years; in that sense the hand-wringing and further closing down of Mythos is simply more of the same.
At the same time, the punchline of “The Boy Who Cried Wolf” is that eventually a wolf did come; I wrote
just last week
(and
discussed on Sharp Tech
) about how these models were going to be very good at discovering security issues, and that the great hope in terms of security would be that AI would, in the long run, be used to find vulnerabilities and patch them, first in old software and then, going forward, as software was produced. To that end, I can certainly see validity in Anthropic’s concerns, and the value in giving essential infrastructure providers a head start in terms of securing newly discoverable vulnerabilities.
Glasswing and Alignment
There is a second more subtle danger that Anthropic is flirting with, however. Consider this from
their introductory blog post for Project Glasswing
, its name for the limited set of partners who get access to Mythos:
Claude Mythos Preview is a general-purpose, unreleased frontier model that reveals a stark fact: AI models have reached a level of coding capability where they can surpass all but the most skilled humans at finding and exploiting software vulnerabilities. Mythos Preview has already found thousands of high-severity vulnerabilities, including some in every major operating system and web browser. Given the rate of AI progress, it will not be long before such capabilities proliferate, potentially beyond actors who are committed to deploying them safely. The fallout—for economies, public safety, and national security—could be severe. Project Glasswing is an urgent attempt to put these capabilities to work for defensive purposes…
Many flaws in software go unnoticed for years because finding and exploiting them has required expertise held by only a few skilled security experts. With the latest frontier AI models, the cost, effort, and level of expertise required to find and exploit software vulnerabilities have all dropped dramatically. Over the past year, AI models have become increasingly effective at reading and reasoning about code—in particular, they show a striking ability to spot vulnerabilities and work out ways to exploit them. Claude Mythos Preview demonstrates a leap in these cyber skills—the vulnerabilities it has spotted have in some cases survived decades of human review and millions of automated security tests, and the exploits it develops are increasingly sophisticated.
Ten years after the first DARPA Cyber Grand Challenge, frontier AI models are now becoming competitive with the best humans at finding and exploiting vulnerabilities. Without the necessary safeguards, these powerful cyber capabilities could be used to exploit the many existing flaws in the world’s most important software. This could make cyberattacks of all kinds much more frequent and destructive, and empower adversaries of the United States and its allies. Addressing these issues is therefore an important security priority for democratic states.
Set aside the skepticism above. The positive spin on Anthropic’s initiative is that they are proactively acting to defend essential infrastructure for western companies in particular; thank goodness Anthropic is an American company!
There is, however, a more negative spin: specifically, Anthropic is asserting that they have a level of capability that has significant national security implications. Implicit in the commitment to secure software is the capability of attacking software: that could be commercial software, it could be open source, it could be the Chinese government, and it could be the U.S. government. That (1) is surely a capability that the U.S. government would like to have for itself and (2) a capability that is a direct threat to the U.S. government.
In other words, to the extent that Mythos is the threat Anthropic says it is the extent that it exacerbates all of the issues I wrote about last month in
Anthropic and Alignment
:
In fact, Amodei already answered the question: if nuclear weapons were developed by a private company, and that private company sought to dictate terms to the U.S. military, the U.S. would absolutely be incentivized to destroy that company. The reason goes back to the question of international law, North Korea, and the rest:
International law is ultimately a function of power; might makes right.
There are some categories of capabilities — like nuclear weapons — that are sufficiently powerful to fundamentally affect the U.S.’s freedom of action; we can bomb Iran, but we can’t North Korea.
To the extent that AI is on the level of nuclear weapons — or beyond — is the extent that Amodei and Anthropic are building a power base that potentially rivals the U.S. military.
Anthropic talks a lot about alignment; this insistence on controlling the U.S. military, however, is fundamentally misaligned with reality. Current AI models are obviously not yet so powerful that they rival the U.S. military; if that is the trajectory, however — and no one has been more vocal in arguing for that trajectory than Amodei — then it seems to me the choice facing the U.S. is actually quite binary:
Option 1 is that Anthropic accepts a subservient position relative to the U.S. government, and does not seek to retain ultimate decision-making power about how its models are used, instead leaving that to Congress and the President.
Option 2 is that the U.S. government either destroys Anthropic or removes Amodei.
[…] It simply isn’t tolerable for the U.S. to allow for the development of an independent power structure — which is exactly what AI has the potential to undergird — that is expressly seeking to assert independence from U.S. control.
I don’t think that Mythos rises to this level. I do believe that the security implications are real, and I also believe that Anthropic has a multi-year habit of disaster-porn-as-marketing-tool. To that end, I suspect we’ll get a distilled version of Mythos that is viable to serve whenever OpenAI shows up with Spud; Amodei has shown that, despite it all, he is a capitalist, particularly when the competition is OpenAI.
At the same time, the conflict I highlighted in that Article is looming, and the extent to which Anthropic seems to be inviting its apotheosis through its habit of casting itself as the world’s bearer of doom suggests the company still isn’t taking this particular alignment danger seriously.
This Update will be available as a podcast later today. To receive it in your podcast player,
visit Stratechery
.
The Stratechery Update is intended for a single recipient, but occasional forwarding is totally fine! If you would like to order multiple subscriptions for your team with a group discount (minimum 5), please contact me directly.
Thanks for being a subscriber, and have a great day!
Share
Share on Facebook (Opens in new window)
Facebook
Share on X (Opens in new window)
X
Share on LinkedIn (Opens in new window)
LinkedIn
Email a link to a friend (Opens in new window)
Email