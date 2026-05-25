# What I Learned Testing GPT-5.5 
**Source:** https://aidailybrief.beehiiv.com/p/what-i-learned-testing-gpt-5-5
**Date:** 2026-04-25
**Author:** AI Daily Brief
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

0
The AI Daily Brief
Posts
What I Learned Testing GPT-5.5
What I Learned Testing GPT-5.5
April 24, 2026 · Episode Links & Takeaways
AI Daily Brief
April 24, 2026
▶ Listen to the episode
MAIN STORY
What I Learned Testing GPT-5.5
GPT-5.5 — codenamed Spud — is here, and it's no potato. OpenAI has been cooking since declaring a code red back in December, and the result is a model that puts them back at the top of most benchmarks and, more importantly, feels like a different class of tool for knowledge workers. It doesn't win everything — Opus 4.7 still edges it out on planning and some professional domain benchmarks — but on the things that matter most for everyday professional work: speed, coding, long-horizon tasks, and just being easy to use, GPT-5.5 is the new standard. And it arrives at a moment when Anthropic's compute constraints and a widely-noticed Claude Code quality dip have made a lot of people ready to switch.
OpenAI
Introducing GPT‑5.5
OpenAI (X)
GPT-5.5 intro thread
VentureBeat
OpenAI's GPT-5.5 is here, and it's no potato
Bloomberg
OpenAI Unveils GPT-5.5 to Field Tasks With Limited Instructions
The Verge
OpenAI says its new GPT-5.5 model is more efficient and better at coding
GPT-5.5 IS NO POTATO
The Benchmarks
SWE-Bench Pro is noise. Everything else looks strong.
On the benchmarks that matter, GPT-5.5 is clearly at the top. It hits 82.7% on Terminal-Bench 2.0 (vs. Opus 4.7's 69.4%), 84.9% on GDPVal knowledge work benchmark, and Artificial Analysis's extra-high version is the first model ever to break into the 60s on their overall index. The one blemish everyone noticed was SWE-Bench Pro, where it significantly underperforms Opus 4.7 — but the Codex team's Tibo pushed back hard, pointing to OpenAI's February paper showing SWE-Bench no longer measures frontier coding capabilities. On real-world style benchmarks it's a more mixed picture: Andon Labs found GPT-5.5 behind Opus 4.7 on single-player Vending Bench, though it won the multiplayer Arena variant — without any of the underhanded tactics Opus apparently uses. Vals AI's professional domain benchmarks (finance, medical, legal) show Opus 4.7 still slightly ahead. Neither model has a clear overall lead, but GPT-5.5 dominates the cost-performance frontier when you account for its dramatically higher token efficiency.
Artificial Analysis (X)
GPT-5.5 takes OpenAI back to the clear number one in AI
Andon Labs (X)
Vending Bench and Vending Bench Arena results
Vals AI (X)
Professional domain benchmark results
Deedy Das (X)
SWE-Bench Pro score means this isn’t a SOTA coding model
Tibo at Codex/OpenAI (X)
SWE-Bench is no longer representative of real coding
Swyx (X)
Full benchmark summary thread - Pareto frontier expansion across the board
Cost and Token Efficiency
More expensive per token, cheaper per problem solved.
At $5 per million input tokens and $30 per million output, GPT-5.5 is double GPT-5.4's price and 20% more expensive than Opus 4.7. But that's the wrong way to look at it. Noam Brown from OpenAI put it plainly: intelligence is a function of inference compute, and what matters is intelligence per token or per dollar. GPT-5.5 uses dramatically fewer tokens to solve the same problems — Nate Herk's coding tests found it finished in half the time using a third the tokens, making the actual run cost $3 cheaper than Opus 4.7. Artificial Analysis found that GPT-5.5 on medium settings matches Opus 4.7 at max settings for roughly a quarter of the price.
Noam Brown (X)
Intelligence per token or per dollar is what matters
Lisan al Gaib (X)
GPT-5.5 dominates cost-performance frontier
What It's Actually Like to Use: Coding
"GPT-5.5 feels less tiring."
Every's vibe check declared it "has it all" — a fast, capable workhorse that asks for fewer trade-offs than any previous model. Their senior engineer coding benchmark gave GPT-5.5 its best-ever score, with Dan Shipper noting it has "the assertiveness to go delete a bunch of files, start from scratch" rather than patching at the edges the way Opus tends to. The long-horizon running ability is the thing people keep coming back to: Peter Gostev had a migration running for 7+ hours, Aidan McLaughlin from OpenAI dictated a brief for an RL run and came back three days later to find it still going at 31 hours. One important nuance: Opus 4.7 still writes better plans. The consensus emerging is to use Opus to plan and GPT-5.5 to execute — a multi-model setup that several reviewers say is notably better than either model alone.
Every
Vibe Check: GPT-5.5 Has It All
Dan Shipper (X)
On GPT-5.5's approach to ambitious code rewrites
Ben Davis (X)
100% my new everything model
Pietro Schirano (X)
Highest leverage tool I have ever touched
Matt Shumer (X)
Massive leap forward, but for 99% of use cases it won’t matter
Allie K Miller (X)
Unless you’re deep in code or scientific research, you might not even notice the difference
Bindu Reddy (X)
Extremely good model on both benchmarks and in practice
CodeRabbit (X)
79.2% vs. 58.3% on code review evaluation
Flavio Adamo (X)
GPT-5.5 touches fewer things it doesn't need to touch
Peter Gostev (X)
7+ hour migration running in Codex - this literally never happened before
Aidan McLaughlin (X)
31-hour RL run from a dictated brief
Knowledge Work, Writing, and Design
Better than any OpenAI model in a long time — with real gaps remaining.
For knowledge workers, Aaron Levie at Box found a 10-point jump in accuracy on enterprise content tasks vs. GPT-5.4, with strong improvements across financial services, healthcare, and public sector. On writing, the model's directness and lack of AI affectation is a genuine improvement over recent Opus versions. For design and frontend, the story is "yes-ish" — native capabilities are better, but the bigger unlock is pairing GPT Images 2 for UI concepting with GPT-5.5 in Codex for implementation. Opus still leads on pure aesthetics. Simon Smith's PowerPoint test was a good illustration of the range: genuinely impressive autonomous iteration for 16+ minutes, but still lacking design taste and prone to referencing the prompt in copy — a quirk that plagues all models.
Siqi Chen (X)
Opus to plan, GPT 5.5 to execute is the optimal setup
Simon Smith (X)
Powerpoint creation ranges from “incredible" to "what the hell is that?"
Aaron Levie (X)
10-point jump on Box's enterprise knowledge work evals
Katie Parrott/Every (X)
Moving writing workflow to Codex
OpenAI's New Communications Tone
"Crazy how you can ship a model without scaring everyone first."
The launch communications were as notable as the model. Sam Altman's announcement tweet was simply: "GPT-5.5 is here. We hope it's useful to you. I personally like it." The contrast to Anthropic's Mythos rollout — announcing a model too powerful to release — was unmistakable. Altman's follow-up tweet hit both themes directly: iterative deployment and democratization, with a line about wanting everyone to have access to the best technology. In another tweet he said OpenAI has "become an AI inference company." Multiple observers noted the shift felt genuine — less hype machine, more building and shipping.
Sam Altman (X)
We believe in iterative deployment and democratization
Sam Altman (X)
We have become an AI inference company
Benjamin De Kraker (X)
OpenAI seems to have dialed back their hype machine and just focused on building and shipping excellent models lately
Justine Moor (X)
Crazy how you can just...ship a model without scaring everyone first
Cree Beauvoir (X)
This new product announcement feels noticeably more personable and humble. This is going to be a war of authenticity.
What I Tested
First impressions are very positive — enough to start jumping back and forth.
Ran about nine or ten tests across common use cases, mostly in Codex. The writing test — script research for a true crime podcast — was a surprise: 5.5 actually followed the instruction to be clear and journalistic rather than piling on dramatic flair, which has been a persistent Opus 4.7 problem. Creative strategy work for an upcoming sponsored episode was genuinely impressive, especially the speed in thinking mode during iteration. The standout, though, was data analysis: fed it 10-12 charts from Apple and Spotify about the show and got back specific, actionable insights rather than the generic podcast advice LLMs usually produce — then it turned everything into a clean spreadsheet. Opus models have been the daily drivers for six months or more, but the combination of 5.5's early results and the improvements in the Codex harness means a lot of jumping back and forth is coming.
The Anthropic Subplot
Claude Code quality issues confirmed — and Anthropic published the post-mortem.
The competitive backdrop matters here. The same day GPT-5.5 dropped, Anthropic published a post-mortem on recent Claude Code quality issues — essentially confirming what users had been complaining about. The response from Claude Code users was a loud "I told you so." Reio's widely-shared reaction captured the mood: Opus 4.7 is so lazy it's worse than 4.6, while GPT-5.5 is good and has gotten faster. Jason's Chips went further, calling GPT-5.5 the trigger for a market share recapture. It's worth noting that Anthropic also launched memory on Claude Managed Agents on the same day — and Claude is still clearly the better planner. The real beneficiaries of this competition are users, who are getting better models and harnesses from both labs at an accelerating pace.
Anthropic
An update on recent Claude Code quality reports
Theo (X)
They shipped slop and it made the models worse.
Pieter Levels (X)
Claude was dumbified on March 4, just when we noticed!
Jason's Chips (X)
OpenAI will cause a market share recapture and narrative shift
The Big Picture: Is This o1 or o3?
"This model's o3 moment will come soon."
The debate that emerged: is GPT-5.5 an o3-style step change, or an o1-preview — the beginning of a new model lineage rather than its apex? The answer is probably both. GPT-5.5 is the first post-train of a new base model, and OpenAI has massive compute to do far larger-scale RL on it going forward. Greg Brockman was explicit: "What 5.5 represents is not an endpoint. In many ways it's a beginning point." OpenAI chief scientist Jacob Pakaki said to expect "quite rapid continued progress" with "extremely significant improvements in the medium term." Ethan Mollick's framing holds: the frontier remains jagged, capability gains appear to be accelerating, and GPT-5.5 is clearly not the end of this process.
NomoreID (X)
Compromised on cost and speed, but they know the recipe
Ethan Mollick
Sign of the Future: GPT-5.5
Prinz (X)
OpenAI’s Jaku Pachocki: “extemely significant” improvements to come, the last few years have been surprising slow
NomoreID (X)
Greg Brockman: “what GPT-5.5 represents is not an end point. In many ways, it's a beginning point. “