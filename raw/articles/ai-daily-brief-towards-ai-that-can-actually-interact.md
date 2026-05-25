# Towards AI That Can Actually Interact
**Source:** https://aidailybrief.beehiiv.com/p/towards-ai-that-can-actually-interact
**Date:** 2026-05-13
**Author:** AI Daily Brief
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

0
The AI Daily Brief
Posts
Towards AI That Can Actually Interact
Towards AI That Can Actually Interact
May 12, 2026 · Episode Links & Takeaways
AI Daily Brief
May 12, 2026
▶ Listen to the episode
HEADLINES
OpenAI Makes the Consulting Bet Official
OpenAI has launched its new consulting business as a separate company called the OpenAI Deployment Company, or DeployCo, structured as a joint venture with 19 partners across consulting, private equity, and finance. The initial $4B investment came in at a $10B pre-money valuation, with TPG as lead and Advent International, Bain Capital, and Brookfield as co-lead founding partners — firms whose portfolio companies are expected to be DeployCo's first customers. To hit the ground running, DeployCo is acquiring engineering firm Tomoro, bringing roughly 150 AI deployment specialists on day one. The conventional wisdom is finally catching up: it doesn't matter how powerful the models are if enterprises can't deploy them, and no one thinks OpenAI and Anthropic can consume the sheer tonnage of transformation support that's needed — there's still a massive long tail for everyone else.
OpenAI Blog
OpenAI launches the OpenAI Deployment Company to help businesses build around intelligence
The Information
OpenAI Launches $10 Billion Private-Equity Joint Venture, Acquires Consultancy
Axios
OpenAI launches AI consulting arm valued at $14 billion
Bloomberg
OpenAI to Buy Consulting Firm for JV With Private Equity
Aaron Levie (X)
On the massive opportunity for professional services in the agent era
Anthropic Cracks Down on Grey Market Stock
Anthropic updated its support docs to explicitly void all SPV-based stock transfers and call out by name the secondary market platforms facilitating them — a nuclear option that immediately cut the price of Anthropic tokens on crypto secondary markets in half. The underlying issue is a years-long dynamic where private companies staying private forever has created enormous retail demand for access, pushing people into layered financial instruments that, as Casey Craig put it, leave buyers "approximately Anthropic-adjacent at best." OpenAI issued a similar but softer statement the same day. Lawyer Gabriel Shapiro flagged that attempting to void these transactions could trigger an avalanche of lawsuits, and as Brian Norgard warned, the SpaceX IPO may yet expose just how much synthetic ownership has accumulated across private markets.
Anthropic Support
Unauthorized Anthropic stock sales and investment scams
OpenAI Blog
Unauthorized OpenAI Equity Transactions
Gabriel Shapiro (X)
On the legal implications of Anthropic's crackdown
Casey Craig (X)
You are 4 layers of financial abstraction away from touching an actual Anthropic share certificate.
Natasha Mascarenhas (X)
On the scale of fake SPVs in the market
Brian Norgard (X)
On what happens to private markets if SPVs get invalidated
Jesse Leimgruber (X)
Legal thread on what Anthropic can and can't actually do
Kingsley Advani (X)
Anthropic is unlikely to void half their cap table
No FDA for AI
Administration officials walked back last week's suggestion that the White House might put AI models through an FDA-style approval process. Over the weekend, former AI Czar David Sacks said the comparison wasn't policy, and on Monday Kevin Hassett confirmed it on CNBC: "At the White House, nobody has an idea that we should do something like bring in a giant new bureaucracy to approve AIs." The current approach remains direct coordination with the labs. Hassett's postscript: "I probably shouldn't have called it the FDA."
Bloomberg
No New Bureaucracy to Police AI Products, Hassett Says
CNBC
Full interview with Kevin Hassett
David Sacks (X)
On why an FDA for AI wouldn't address the actual cyber threat
Trump's China Tech Envoy — Without Jensen
President Trump is heading to China later this week with Elon Musk, Tim Cook, and Meta President Dina Powell McCormick in tow, alongside executives from finance, semiconductors, aerospace, and agriculture. The notable absence is Jensen Huang — who said last week he'd join if invited — with Micron and Qualcomm executives attending instead. The read from many is that NVIDIA's AI chips are being deliberately kept off the trade agenda, consistent with Commerce Department export licenses for H200 GPUs remaining at zero despite December signals they'd be approved.
Bloomberg
Musk, Cook Expected to Join Trump for Xi Summit in China
Bloomberg
Nvidia's CEO to Miss China Trip After Year of Travels With Trump
MAIN STORY
Towards AI That Can Actually Interact: Thinking Machines and the Interaction Model
Thinking Machines Lab — the outfit built by former OpenAI CTO Mira Murati, widely assumed to be going quiet — dropped something genuinely surprising: a new class of model trained from scratch around real-time, continuous interaction rather than bolted onto a turn-based core. The argument is that the current "AI experience" is too much like email — you batch your thoughts, wait, and adapt yourself to the machine. TML's bet is that interactivity has to be native to the model, and that how we work with AI matters as much as how smart it is.
Thinking Machines Blog
Interaction Models: A Scalable Approach to Human-AI Collaboration
The Verge
Here's what Mira Murati's AI company is up to
VentureBeat
Thinking Machines shows off preview of near-realtime AI voice and video conversation with new 'interaction models'
Latent Space
Thinking Machines' Native Interaction Models — TML-Interaction-Small 276B-A12B
INTERACTION MACHINES
The Collaboration Bottleneck
"Current AI is too much like email."
TML's core critique: today's models experience reality in a single thread, waiting while you type or speak and freezing perception while they generate. Their proposed fix is an interaction model that processes streams in 200-millisecond micro-turns — continuous parallel input and output rather than the flattened turn-taking sequence. Architecturally it's a two-part system: a real-time interaction model that stays present with the user, and a background model that handles longer reasoning, browsing, and agentic work, weaving results back into the conversation when appropriate.
Mira Murati (X)
Announcing interaction models
John Schulman (X)
On why human-AI collaboration capabilities are underemphasized
Visual Proactivity
"No existing model can meaningfully perform any of these tasks."
The capability that generated the most excitement is what TML calls visual proactivity — models that respond when something changes in the visual world rather than waiting for an audio cue. The demos show the model tracking posture, doing simultaneous translation while someone is still speaking, managing dialogue by detecting whether a speaker is thinking or yielding, and running live web search in the background mid-conversation. TML had to create two new internal benchmarks — TimeSpeak and QSpeak — to even measure these capabilities, which is itself a signal that something genuinely new is happening here.
Lili Yu (X)
On visual proactivity and the finger-counting test
Rowan Zellers (X)
On building the first visually proactive video+speech model
Soumith Chintala (X)
Thinky's secret plan
Swyx (X)
On how this redefines "realtime"
The GUI Moment Analogy
Chat is still surprisingly CLI-like.
The bigger frame here is whether this is the beginning of AI's GUI moment — the shift where users no longer have to think like the computer to access its capabilities. Before the GUI, text was the primary interface; the GUI was one of the greatest democratizing forces of personal computing. Chat rewards verbal fluency, abstraction, and procedural skill in ways that still look a lot like the command line. The next interface needs richer persistent context, native multimodality, and lower mode-switching costs — letting people communicate by speaking, showing, pointing, and interrupting rather than composing polished prompts.
Clare Birch (X)
On AI inheriting the worldview of software engineering
Clare Birch (X)
On building AI that increases human participation
How Long Does TML Own This?
The frontier labs iterate on each other's abstractions extremely fast.
The biggest open question is whether this is a durable architectural moat or something the major labs replicate within months. TML's blog post notes they've trained larger interaction models but haven't yet overcome latency problems — which suggests it's not trivially easy. But Recursive on X captures the skeptical view well, and as a data point, OpenAI's developer account was already demoing GPT Realtime-2 running as a background agent during a standup meeting — updating a Kanban board in real time while a team gives verbal updates. The background agent paradigm may converge faster than TML would like.
Recursive (X)
On how quickly frontier labs absorb each other's innovations
Gabriel (X)
On the latency problems TML has flagged with larger models
Ethan Mollick (X)
On why the demos undersell the real use cases
Nick Dobos (X)
On why it's a tech demo, not a consumer demo
Nick Dobos (X)
On what happens when software engineering is 100% meetings
TML's Rough Road to This Moment
Everyone had basically written them off.
For context on why this landed: TML's first product Tinker didn't capture much attention, co-founders Barrett Zoph and Luke Metz left in January to return to OpenAI, and the company had gone largely quiet. This announcement arrived against that backdrop of low expectations.
Wired
Mira Murati's Stealth AI Lab Launches Its First Product
Wired
Two Thinking Machines Lab Cofounders Are Leaving to Rejoin OpenAI
Business Insider
Meta has snapped up a fifth founding member from Mira Murati's Thinking Machines Lab