# GPT 5.4 First Test Results
**Source:** https://aidailybrief.beehiiv.com/p/gpt-5-4-first-test-results
**Date:** 2026-03-06
**Author:** AI Daily Brief
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

0
The AI Daily Brief
Posts
GPT 5.4 First Test Results
GPT 5.4 First Test Results
March 6, 2026 · Episode Links & Takeaways
AI Daily Brief
March 06, 2026
▶ Listen to the episode
AIDB USAGE PULSE SURVEY
The AI Usage Pulse survey is back for February. It was one heck of a month, with new models, OpenClaw and more.
I'd love to have as many of you who contributed to last month's Survey fill out this one as well for more longitudinal insight. As always, anyone who contributes will get the results in advance of them being widely published.
https://aidailybrief.ai/pulse-survey
MAIN STORY
GPT-5.4: First Test Results
We finally have a new model to test — and this one is pretty exciting. GPT-5.4 is the product of OpenAI's Code Red initiative, and the early testers who've had it for weeks are nearly unanimous: this is the first model in a while that's genuinely worth your time to try. As Ethan Mollick put it, at this point the latest model from OpenAI, Anthropic, or Google is generally going to be the best model in the world upon release — and it's simply been OpenAI's turn.
OpenAI
Introducing GPT-5.4
OpenAI (X)
Announcement thread
The Verge
OpenAI's new GPT-5.4 model is a big step toward autonomous agents
TechCrunch
OpenAI launches GPT-5.4 with Pro and Thinking versions
VentureBeat
OpenAI launches GPT-5.4 with native computer use mode
Latent Space
GPT 5.4: SOTA Knowledge Work and Coding and CUA Model
Every
Vibe Check: GPT-5.4 — OpenAI is Back
What OpenAI Is Claiming
GPT-5.4 brings together reasoning, coding (integrating 5.3 Codex capabilities), and agentic workflows into one frontier model. It's designed for professional work — the counterpart to 5.3 Instant's consumer focus. The headline innovations: a 1M token context window, dramatically better computer use, improved token efficiency (47% reduction on tool-heavy tasks), and deep integration with professional tools like Excel and financial data services.
OpenAI is clearly targeting GDPVal as their north star benchmark — professional work across 44 occupations in the top 9 industries contributing to US GDP. Win rate vs. human experts: 70.8% (82-83% including ties).
Computer Use: The Step Change
This is the benchmark people care most about in a post-Open Claw world. OSWorld-Verified jumped from 47.3% (GPT-5.2) to 75% — above human-level performance at 72.4%. That's not incremental, that's a step change. As Rahul Agrawal put it, the bottleneck on automation now shifts from "can the model do it" to "do you trust it enough to let it."
Jamie Cuffe of Pace stress-tested it on legacy insurance portals — the hardest UIs on the internet — and found the paradigm has shifted. Click accuracy, long-trajectory reasoning, speed, and memory all dramatically improved. For a long time, the technology just wasn't there. Now it is.
Rahul Agarwal (X)
GPT-5.4 can use a computer better than a human
Jamie Cuffe (X)
We stress-tested GPT-5.4 on the hardest UI on the internet
GDPVal & Professional Tasks
Ethan Mollick translated the GDPVal numbers into practical terms: if you give a 7-hour task to AI, even with failure rates, you save 4 hours 38 minutes on average. OpenAI COO Brad Lightcap highlighted finance specifically — improved financial modeling, direct Excel integration, connections to Factiva, Daloopa, S&P Global. He said it feels like a Codex moment is coming for finance.
Ethan Mollick (X)
The new model ties or beats humans at professional tasks 82% of the time
Brad Lightcap (X)
Team worked extremely hard to make GPT-5.4 great for finance
Noam Brown (X)
Big step up in computer use and GDPVal — we see no wall
Mercor (X)
GPT-5.4 tops the APEX-Agents leaderboard
OpenAI
ChatGPT for Excel
Coding & ARC-AGI
The jump from 5.3 Codex to 5.4 on coding benchmarks isn't huge — because the big coding innovations were already in 5.3 Codex. The real story is unification: 5.4 merges the Codex and mainline models. ARC-AGI-2 scores show a consistent +20 point lift vs 5.2 at the same price, with Pro scoring 83.3%.
ARC Prize
GPT-5.4 and GPT-5.4 Pro on ARC-AGI-2
Greg Kamradt (X)
Consistent +20pp lift vs 5.2 at the same price
Yann Dubois (X)
We merged Codex and mainline models — and improved efficiency
Code Rabbit (X)
GPT-5.4 consistently delivers top performance in agentic coding
Early Reactions: "OpenAI Is Back"
The Every team's verdict captured the mood: three months ago OpenAI was losing the coding race. Claude Code had developers' hearts. GPT-5.4 shifts the competitive balance back. Their diehard Claude Code devotee is now reaching for 5.4 daily. Matt Schumer called it "the best model in the world by far" with coding "essentially solved." Claire Vo said tool use is "chef's kiss" — the first model where "go investigate and fix" feels robust. Simon Smith called it the best writing model from OpenAI, probably better than the best Claude models now.
Ben Hylak (X)
First model in a long time worth your time to try
Claire Vo (X)
Honest take after a week of testing
Theo (X)
Absurdly good model — don't really like using anything else
Ben Davis (X)
First model that kinda just works but hilariously bad at UI
Mark Tenenholtz (X)
Updates to Codex CLI are the real hero
Ethan Mollick (X)
Latest model from Big Three is generally the best in the world upon release
The FrontierMath "Move 37" Moment
Mathematician Bartosz Naskrecki — a serious, top-tier academic who helped create the FrontierMath benchmark and who last year said AI "does not understand deep mathematics" — experienced what he called his personal Move 37 moment. GPT-5.4 Pro solved one of his problems by extrapolating a pattern to avoid needing advanced machinery — a novel, impressive approach the mathematician found genuinely surprising. GPT-5.4 Pro is now the first model to solve a Tier 4 FrontierMath problem.
Bartosz Naskrecki (X)
My personal Move 37 — deeply impressed
Epoch AI (X)
FrontierMath results — GPT-5.4 Pro first to solve Tier 4
Kevin Weil (X)
Our best and most capable scientific model ever
Personal Test: Planning, Codex & the Verbosity Problem
The hands-on test was building a matchmaking platform for agent builders and organizations — a genuinely difficult, real project. The experience was mixed in revealing ways. GPT-5.4 Thinking is extremely fast, but that speed created problems: it dove into speccing before discussing, fell into training-data defaults rather than listening, and was staggeringly over-verbose — repeating itself, using bullets within lists within numbered lists. It took an annoyed "did I at any point ask you to immediately start building a spec?" to get it to engage properly.
Even once focused, 5.4 wanted to stay in planning mode forever — hundreds of lines confirming what was already discussed — rather than actually building artifacts the way Claude would. When finally pushed into design mode, it was awful visually. Ben Davis called it "hilariously bad at UI stuff." Claude's critique of 5.4's design output was brutal but accurate: "muddy gradient blobs," "no typography hierarchy," "looks like a dark mode template from 2023."
But when it came time to deploy via Codex CLI, things turned around dramatically. The approval system has way less friction than Claude Code. The interstitial updates during long-running tasks — full sentences describing what it's doing — are genuinely better than Claude Code's approach. And the deployment? Zero errors. It just worked, right out of the box, in a way that basically nothing built with Claude Code has.
The Verdict
You'd be doing yourself a disservice not to try GPT-5.4. It's not going to replace Claude for frontend design or for the planning conversation itself — but it's deeply impressive on professional tasks, computer use, and deployment. The weaknesses (verbosity, UI taste, over-eagerness) may be fixable with better system prompts. This was a first test, not a final judgment. Expect 5.4 and Codex to become deeply integrated into the workflow alongside Claude, not instead of it.