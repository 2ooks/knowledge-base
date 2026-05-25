# OpenClaw Goes to OpenAI
**Source:** https://aidailybrief.beehiiv.com/p/openclaw-goes-to-openai
**Date:** 2026-02-17
**Author:** AI Daily Brief
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

0
The AI Daily Brief
Posts
OpenClaw Goes to OpenAI
OpenClaw Goes to OpenAI
February 16, 2026 · Episode Links & Takeaways
AI Daily Brief
February 16, 2026
▶ Listen to the episode
HEADLINES
New Models from OpenAI and Google
Although GPT-5.3's non-coding version didn't land last week, OpenAI's release of GPT-5.3-Codex-Spark is a big deal for AI coding. The model serves inference at 1,000 tokens per second — roughly 15x faster than regular GPT-5.3 Codex — but comes with real trade-offs: a 128K context window, no multimodal inputs, and weaker benchmarks. Dan Shipper of Every noted this speed suits an entirely different subset of coding tasks, keeping developers in flow as a pair programmer but struggling with large codebases. Spark is also the first OpenAI model designed for non-NVIDIA hardware, running exclusively on Cerebras wafer-scale chips. Meanwhile, Google DeepMind upgraded Deep Think mode with agentic scaffolds for academic research, including a new math agent called Aletheia that autonomously generates and verifies novel proofs. Deep Think scored 84.6% on ARC-AGI-2 (smashing Opus 4.6's 68.8%) and set a new SOTA on Humanity's Last Exam at 48.4%.
OpenAI
Introducing GPT-5.3-Codex-Spark
Dan Shipper (X)
"Spark produces code basically instantly"
Andrew Feldman (X)
Running on Cerebras Hardware
Google DeepMind
Accelerating Mathematical and Scientific Discovery with Gemini Deep Think
DeepSeek Rumors in Full Swing Ahead of Chinese New Year
The weeks ahead of the Spring Festival have brought a deluge of new models out of China — Zhipu's frontier model GLM-5, ByteDance's Seedance 2.0 pushing SOTA for video generation, and aggressive shopping agents from Alibaba and Baidu. But all eyes are on DeepSeek, with V4 expected to drop on Tuesday. Swyx explained why this is the one that matters, writing that he's been cynical on open source AI for three years, but DeepSeek V4 is "probably the moment I really change my stance." He suggested the flurry of other Chinese model releases happened precisely because those labs knew they couldn't compete with what was coming from DeepSeek.
Reuters
Chinese AI models festoon Spring Festival a year after DeepSeek shock
Swyx (X)
DeepSeek anticipation
Anthropic Closes $30B Round at $380B Valuation
Anthropic officially closed their Series G: $30 billion raised, $380 billion post-money valuation, 36 investors including sovereign wealth funds (Temasek, Qatar Investment Authority, MGX) and major financial firms (Fidelity, BlackRock, Goldman Sachs, JP Morgan). But the real jaw-dropper was the growth: $14B revenue run rate, up from $1B at the start of last year — 10x growth for three consecutive years. Claude Code alone is generating $2.5B. Customers spending $100K+ annually grew 7x; million-dollar-plus customers went from a dozen two years ago to north of 500. Ramp economist Ara Kharazian noted 1 in 5 businesses on Ramp now pay Anthropic (up from 1 in 25), though 79% of Anthropic's customers are also OpenAI customers. Alongside the raise, Anthropic announced a $20M donation to Public First Action, a new social welfare org focused on AI policy, noting that "69% of Americans think the government is not doing enough to regulate AI."
Anthropic
Series G announcement
Bloomberg
Anthropic Finalizes $30 Billion Funding at $380 Billion Value
| | Andrew Curran (X)
Crazy Revenue Growth
Ara Kharazian (X)
Ramp AI Index data
Anthropic
Public First Action donation
Claude Cowork Now Available on Windows
For Windows users annoyed at watching Mac users get everything first — Cowork is now available with full parity: file access, multi-step task execution, plugins, and MCP connectors. Cowork's launch was treated as an extinction-level event for software firms on Wall Street and Microsoft had reportedly set up a Teams channel — with Satya Nadella himself — to discuss Cowork and rapidly develop rival Copilot features. It increasingly seems Microsoft will need to give customers access to SOTA tools from other companies rather than bet on competing internally.
Claude AI (X)
Windows launch announcement
The Information
Microsoft Races to Respond to New Threats from Anthropic
MAIN STORY
OpenClaw Goes to OpenAI
In less than three months, Peter Steinberger's side project went from curious experiment to the fastest-growing open source project of all time — and now its creator is joining OpenAI to build the next generation of personal agents. The OpenClaw story encapsulates the agentic shift that has happened in AI: not just the promise of agents, but agents actually delivering real value while their human partners sleep.
Bloomberg
OpenAI Hires OpenClaw AI Agent Developer Peter Steinberg
The Information
OpenAI Confirms Hiring of OpenClaw Founder
The Verge
OpenClaw founder Peter Steinberger is joining OpenAI
TechCrunch
OpenClaw creator Peter Steinberger joins OpenAI
CLAWSTORY
The Origin - From Claude Bot to OpenClaw
"The lobster is taking over the world."
OpenClaw started life as "Claude Bot" in late November, became a phenomenon as people came back in January recognizing that the latest models plus harnesses like Claude Code had truly changed things. After a friendly cease-and-desist from Anthropic over the name, it briefly became "Molt Bot" before settling on OpenClaw — with Peter confirming he'd called Sam Altman directly to clear the name.
Peter Steinberger Blog
OpenClaw, OpenAI and the future
Aiden Bai (X)
"Crazy timeline" summary thread
The Growth — "Not on My 2026 Bingo Card"
OpenClaw surpassed VS Code in GitHub stars, 2x'd PyTorch, and 3x'd Claude Code
The growth numbers are genuinely unprecedented. In terms of third-party developer velocity, OpenClaw is ahead of Android, iOS, and Facebook at the 60-day mark. Mac Minis were sold out in many places. What made OpenClaw different from years of agent hype was that early users seemed to be actually getting real value — agents working overnight, building CRMs, fixing bugs, and generating content while their humans slept.
Yuchen Jin (X)
GitHub stars growth chart
Allie K. Miller (X)
Enterprise adoption energy
Chris Bader (X)
Lex podcast reaction
The Announcement — Sam Altman's Tweet
"We expect this will quickly become core to our product offerings."
Sam Altman announced the hire, calling Steinberger "a genius with a lot of amazing ideas about the future of very smart agents interacting with each other." OpenClaw will live in a foundation as an open source project that OpenAI will continue to support. Peter wrote that his next mission is "to build an agent that even my mom can use" and that teaming up with OpenAI is "the fastest way to bring this to everyone."
Sam Altman (X)
Announcement tweet
"The Fumble of the Decade" — Anthropic's Missed Opportunity
"Instead of trying to collaborate or work with him, they chose violence."
The dominant reaction was that Anthropic fumbled badly. The most popular and fastest-growing open source project of all time was literally named after their product, built by power users of their model — and instead of reaching out like Sam and Mark did, Anthropic sent legal threats. Peter initially tweeted "yah they only sent love letters from legal" but later walked it back, saying it was just a polite C&D and that Anthropic has "some good people in there." Christy Choi of Binance Labs framed it more structurally: "Infrastructure that alienates its own distribution layer is infrastructure that loses."
Nader Dabit (X)
"Fumble of the decade"
Andrew Hart (X)
"Crazy fumble"
Peter Steinberger (X)
"Love Letters from Legal"
Why This Was Smart for OpenAI
Schelling points, developer energy, and a morale boost
The real value isn't the technology — it's the Schelling point. OpenClaw has an unbelievable focal point for the developer community right now, and that kind of uncoordinated gravitational pull can't be built from scratch. For OpenAI specifically, Peter Steinberger brings new developer hero energy at a time when many original co-founders have left — it's invigorating for people inside and outside the company as Codex is finally spoken of in the same breath as Claude Code.
Greg Isenberg (X)
"First one-person billion dollar company?"
The Future of OpenClaw — Foundation Structure
"Open source forever."
For those worried about the project's independence, the structure is coming into view. Investor Dave Morin wrote that he's been working with Steinberger on the OpenClaw Foundation for weeks and will serve as founding independent board member. Simon Smith offered the most sanguine take: "This is probably the best possible outcome for everyone except Anthropic."
Dave Morin (X)
Foundation structure announcement
Simon Smith (X)
"Best possible outcome"
Raphael Schaad (X)
"VC tears and angry OSS folks"
Kitze
"The core of it can be rebuilt in an hour"
ALSO REFERENCED
→ Alex Fin (X): Early Openclaw viral posts —
"Just hired my first employee today"
→ Andrew Wilkinson (X)
Companies trying to be OpenClaw without OpenClaw
→ Y Combinator (X)
Enterprise Claw
→ Moonshot (X)
KimiClaw announcement