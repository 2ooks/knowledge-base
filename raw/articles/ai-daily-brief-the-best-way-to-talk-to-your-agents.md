# The Best Way to Talk to Your Agents
**Source:** https://aidailybrief.beehiiv.com/p/the-best-way-to-talk-to-your-agents
**Date:** 2026-05-12
**Author:** AI Daily Brief
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

0
The AI Daily Brief
Posts
The Best Way to Talk to Your Agents
The Best Way to Talk to Your Agents
May 11, 2026 · Episode Links & Takeaways
AI Daily Brief
May 11, 2026
▶ Listen to the episode
HEADLINES
Anthropic Eyes Trillion-Dollar Valuation in New Raise
Anthropic is weighing one last round of private funding before its fall IPO — and the numbers are staggering. Sources told the Financial Times the round could raise as much as $50B at a $900B pre-money valuation, which would leapfrog OpenAI's most recent $852B raise. Demand is reportedly off the charts, with one investor saying people are ready to throw any dollar amount at Anthropic — it's just a question of when the company wants to move. For added color, a pre-IPO instrument trading on Jupiter pegged the implied valuation even higher, at $1.2 trillion.
FT
Anthropic weighs deal for near $1tn valuation as revenue surges
Reuters
Anthropic weighs fundraising for near $1 trillion valuation, FT reports
Cerebras IPO Demand Goes Parabolic
Cerebras is reportedly considering raising its IPO price range from $115–$125 per share all the way to $150–$160, which would push the implied valuation from ~$26B to over $34B. The share offering may also be upsized. As of last Tuesday demand was three times supply; Reuters now reports orders for 20 times the available shares. Trading begins Thursday in what will be the year's largest IPO — though analysts are split, with Nvidia and tech analyst Tae Kim warning he wouldn't touch it with a 100-foot pole given the execution and scaling risk, while Polymarket is projecting a $50B+ close on day one.
Bloomberg
Cerebras to Boost Price of IPO to as High as $160, Reuters Says
Tae Kim (X):
"I wouldn't touch Cerebras with a 100-foot pole"
Omer Cheema (X):
Polymarket projecting Cerebras above $50B market cap by end of day one
TSMC Growth Hits a Six-Month Low
TSMC reported 17.5% annualized sales growth for April — the slowest rate in six months and roughly half of what analysts forecast. Two explanations dominate: a steep slowdown in the non-AI business (spiraling memory costs have hammered smartphone and consumer electronics orders), and the possibility that TSMC's advanced fabs are simply running at capacity. As Tae Kim put it when asked about companies diversifying away from TSMC: "TSMC is sold out. There's no choice."
Bloomberg
TSMC's Sales Grow Slowest in Months Even as AI Buildout Persists
Apple Signs Preliminary Chip Deal With Intel
Apple has reached a preliminary agreement for Intel to manufacture some of its chips — a first, given TSMC has been Apple's sole chip supplier until now. The deal has been in the works for over a year, with Commerce Secretary Howard Lutnick actively pushing Apple to support Intel following the government's investment. Whether it covers high-end M-series chips or lower-end iPhone and iPad silicon isn't clear yet. The news sent AMD and Intel both surging ~25% on the week, while Mizuho analyst Jordan Klein called it a potential "changing of the guard in AI" — with memory suppliers the clearest winners as shortage conditions take hold.
WSJ
Apple, Intel Have Reached Preliminary Chip-Making Agreement
The Information
Apple and Intel Have Reached "Preliminary" Chip Manufacturing Deal
CNBC
Intel shares soar on Apple chip deal report
CNBC
Wall Street sees 'changing of the guard in AI' as Intel, AMD shares soar while Nvidia lags
Home Data Centers: Every Avenue Being Explored
Major housing developer PulteGroup is in a testing phase with NVIDIA and California startup Span to install micro data centers on newly built homes. Each unit would pack 16 Blackwell GPUs and function as a node in a distributed compute cluster — essentially renting out your home's spare electrical capacity. The pitch is that distributed residential nodes sidestep the permitting and grid-interconnect bottlenecks killing centralized data center growth. Whether homeowners, HOAs, and regulators will go for it remains to be seen, but it's a signal that every possible path to new compute capacity is being pursued right now.
CNBC
Tiny data centers may be coming into the homes of Americans in the future
OpenAI's Codex Gets a Chrome Plugin
OpenAI has launched a Chrome extension for Codex that gives it direct access to live browser sessions — a meaningful upgrade from app-specific connectors that could only scrape static data. The plugin runs in a separate tab group so users can keep working while Codex operates in the background, with the ability to navigate tabs, fill forms, run scripts, and create browser-native artifacts. It's particularly useful for web developers testing live functionality, but the non-technical use cases are just as interesting.
OpenAI Developers (X)
Codex Chrome extension announcement
MAIN STORY
The Best Way to Talk to Your Agents
A post from Thariq Shihipar, who works on Claude Code at Anthropic, arguing that we should ditch Markdown for HTML as our default format for working with agents sparked the weekend's biggest AI conversation — racking up around 10 million views. The surface debate is about file formats, but what's actually underneath it is a much bigger shift: in the agent era, our job as knowledge workers is no longer to produce the finished thing, but to stage the conditions under which an agent can produce it. The right format for that job looks very different from the right format for producing a document yourself.
HTML v MD
Thariq's Case for HTML
Markdown has become a restricting format as agents get more capable.
Thariq's essay argues HTML wins on information density (tables, SVG, CSS, diagrams — almost anything Claude can read can be efficiently expressed in HTML), visual clarity (he can't get anyone in his org to actually read a 100-line Markdown file, but HTML documents with tabs and visual hierarchy are a different story), ease of sharing (HTML renders natively in a browser; Markdown doesn't), and two-way interaction (sliders, knobs, interactive elements that let you tweak options and copy changes back into a prompt). He also just finds it more fun.
Thariq (X)
HTML is the new markdown
Thariq (X)
Using Claude Code: The Unreasonable Effectiveness of HTML
AI Daily Brief
NLW's HTML artifact experiment
The Token Cost Pushback
HTML can cost 3x the tokens of equivalent Markdown.
The skeptic camp, led by Josh Daws, noted that HTML is significantly more expensive to re-ingest — one estimate put it at 1,100 tokens for 800 words in Markdown vs. 3,200 tokens in styled HTML, and that ratio compounds across 30 reference files fast. The cynical version of this take: Thariq works for Anthropic, and Anthropic sells tokens. The more charitable version: HTML is great for human-facing documents but the wrong choice for files that are primarily being re-read by Claude in future sessions.
Josh Daws (X)
HTML will cost way more tokens than MD
The "And Not Or" Consensus
The format question answers itself once you know who's reading it.
The most widely shared synthesis came from The Smart Ape, who argued the debate collapses once you ask three questions: Who reads it (Claude or humans)? How often is it edited (once or many times)? How long does it live (ephemeral or indexed)? Claude reading it votes Markdown; humans reading it votes HTML. Edited frequently votes Markdown; written once votes HTML. Josh Gonsalves put it simply: "I have more MD files in my codebase than you have individual hairs on your head — but artifacts can be superior to MD in many cases. This is an and situation, not an or."
The Smart Ape (X)
MD or HTML?
Josh Gonsalves (X)
HTML is not a replacement for MD
Jaeyun Ha (X)
Switched to HTML halfway through — can't go back
Derya Unutmaz (X)
This HTML approach completely changed my vibe coding
NLW's Take: The Liminal Space Problem
The real issue is staging work, not file formats.
The bigger argument here isn't really about HTML vs. Markdown — it's about the nature of knowledge work in the agent era. The operator's job is increasingly not to finish the work but to stage the conditions under which an agent can do the work. That means spending a lot of time in what might be called the liminal space: the in-between state where some parts of a project are locked, some are totally open, and some are provisional. The problem with Markdown in this state is that communicating those different levels of "doneness" requires adding a lot of meta-commentary inside the document itself — caveats, parenthetical instructions, qualifications. HTML's native features (tabs, color-coded status, expandable sections, progressive disclosure, visual hierarchy) let the format itself carry that information without the workarounds. Whether HTML is the final answer or not, the challenge of working in mixed-doneness states is a real one that's only going to intensify as agents get more capable.
Kevin Simback (X)
It doesn't have to be OR — build an HTML interface layer on top of your MD
Ody Zhou (X)
MD file is for agent. HTML is for human.