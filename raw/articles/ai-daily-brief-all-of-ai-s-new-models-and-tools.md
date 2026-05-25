# All of AI's New Models and Tools
**Source:** https://aidailybrief.beehiiv.com/p/all-of-ai-s-new-models-and-tools
**Date:** 2026-04-10
**Author:** AI Daily Brief
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

0
The AI Daily Brief
Posts
All of AI's New Models and Tools
All of AI's New Models and Tools
April 9, 2026 · Episode Links & Takeaways
AI Daily Brief
April 09, 2026
▶ Listen to the episode
HEADLINES
The Spud Scare — And Why It Wasn't True
Thursday morning brought a brief panic: Axios reported that OpenAI also plans a staggered rollout of their new Spud model, citing cybersecurity risks, apparently matching Anthropic's Mythos approach. The AI world had thoughts. Dan Shipper's take landed best: "The new status symbol is making a model so powerful you can't release it." Within hours though, Shipper updated — he'd spoken to OpenAI and the Axios story conflated two things. OpenAI does have a cyber product being tested with a trusted group, but that's not Spud. The story has been corrected. We are playing with live ammunition out here.
Axios
Scoop: OpenAI plans new product for cybersecurity use
Gizmodo OpenAI:
Hey, We Also Have a New Tool That Is So Scarily Powerful We Can’t Release It
Dan Shipper (X)
The new status symbol is making a model so powerful you can’t release it
Dan Shipper (X)
The Axios story isn’t true, it’s conflating two different things, Spud is still coming soon
Perplexity's Revenue Has Gone Vertical
Perplexity's bet on personal agents is paying off fast. Between shifting to usage-based pricing and launching Perplexity Computer in February, the company effectively doubled revenue in a single quarter — hitting $450M ARR with 100 million monthly active users and tens of thousands of enterprise clients. The finance world in particular seems to have found their tool: Geiger Capital summed up the vibe on X. One skeptic's counterpoint: Cowork and the GPT SuperApp will eventually "mog" this. Maybe — but the growth rate itself is hard to argue with.
The Information
Perplexity's ARR Rises to $500 Million
FT
Perplexity monthly revenue jumps 50% in pivot from search to AI agents
Geiger Capital (X)
Perplexity launched their AI agent "Computer" a month ago and revenue has gone parabolic
GitHub Is Straining Under the Agentic Coding Wave
Last year, GitHub celebrated hitting 1 billion code commits for the first time. This year they're seeing 275 million commits per week — on pace for 14 billion by year end, with numbers still climbing. COO Kyle Daigle: "Since January, every month, every week almost now has some new peak stat for the highest usage rate ever." Commits to public repos from Claude Code alone have swelled 25x in six months. The surge is revealing limits in GitHub's infrastructure — outages are becoming more frequent. OpenClaw creator Peter Steinberger complained that the API wasn't designed with agents in mind. Daigle says they're pushing hard on CPUs and scaling. One more piece of evidence for just how fast things are changing.
The Information
Microsoft's GitHub Sees Booming Traffic—and Outages—as AI Agents Flood Platform
Anthropic Loses the DC Round — But the Fight Continues
A federal appeals court in DC denied Anthropic's application to suspend their Pentagon supply chain risk designation while the case works through the courts. The three-judge panel ruled the equitable balance favors the government — "judicial management of how the Department of War secures vital AI technology during an active military conflict" outweighs the financial harm to a single private company. The important nuance: there are two separate lawsuits. The California injunction still stands, meaning non-Pentagon agencies don't have to cancel Anthropic contracts, and Anthropic's models have already been restored to usai.gov. Legal analyst Charlie Bullock told The Information he was unsurprised, noting two of the three DC Circuit judges have been highly sympathetic to the Trump administration's executive authority claims. He predicts Anthropic will ultimately succeed at the Supreme Court — and the case is moving fast enough to get there this year.
Bloomberg
Anthropic Fails for Now to Halt US Label as a Supply-Chain Risk
WSJ
Court Denies Anthropic Request to End Defense Department Punishment
The Information
D.C. Court Denies Anthropic Motion to Stay Pentagon Blacklisting
Charlie Bullock (X)
Case moving quickly — could receive a final order within six weeks
Roger Parloff (X)
For now, government contractors can probably use Anthropic for anything but covered government contracts
MAIN STORY
All of AI's New Models and Tools
A huge part of this week's discourse has been about models we don't actually have access to — Mythos, and briefly Spud. But the rest of the AI industry is not slouching, and Anthropic themselves gave us something genuinely powerful to play with. Let's run through everything that actually shipped.
PLENTY TO PLAY WITH
Meta Muse Spark
"We're back" — but the benchmarks tell a more nuanced story.
Meta's first model release in over a year is Muse Spark, the first model from Meta Superintelligence Labs — the division assembled under Alexandr Wang, who came aboard through the partial acquisition of Scale AI. The Llama name is gone; the Muse family is natively multimodal, with tool use, visual chain of thought, and multi-agent orchestration. On SWE-Bench Pro it scored 52.4, putting it within a few points of Opus 4.6, Gemini 3.1 Pro, and GPT-5.4 for coding — in the mix, but not leading. Where Meta buries those numbers and leads instead is visual comprehension: 86.4 on CharXiv Reasoning, beating Gemini 3.1 Pro by six points. This matches their stated purpose — unlike the other labs' increasing focus on coding and enterprise, Muse Spark is designed to drive personal agents. Zuckerberg on Threads: the model is "particularly strong in areas related to personal superintelligence like visual understanding, health, social content, shopping, games, and more." And notably, even in the personal realm: "We are building products that don't just answer your questions, but act as agents that do things for you." Ethan Mollick's honest assessment after trying it: "Fine so far, but really doesn't match the current Big Three models." François Chollet was harsher — "overoptimized for public benchmark numbers at the detriment of everything else." Wang responded directly, noting they were "pleasantly surprised by users' feedback in areas like visual coding, writing style, and reasoning queries." Former Meta AI researcher Vasuman put the most charitable frame on it: "Never fade Zuck."
Meta
Introducing Muse Spark: Scaling Towards Personal Superintelligence
Bloomberg
Meta Debuts First AI Model From New Superintelligence Group
The Verge
Meta is reentering the AI race with a new model called Muse Spark
Alexandr Wang (X)
Muse Spark release post
Alexandr Wang (X)
This is step one — bigger models already in development, open source versions planned
Mark Zuckerberg (Threads)
World-class assistant and particularly strong in areas related to personal superintelligence
Ethan Mollick (X)
Fine so far, but doesn't match the current Big Three
Francois Chollet (X)
A disappointment: overoptimized for public benchmark numbers at the detriment of everything else
Vas (X)
Actually much better than I had expected, never fade Zuck
Z.AI's GLM-5.1
The first open source model to beat the Western leaders on coding — and it was trained on Huawei chips.
Getting completely overshadowed by the Mythos announcement, Z.AI released GLM-5.1 — the first open source model to overtake leading Western models on coding benchmarks. It scored 58.4 on SWE-Bench Pro, beating GPT-5.4 at 57.7 and Opus 4.6 at 57.3. It's a 754B parameter model (not running on your Mac Mini), but it's a full open source release with commercial licensing — meaning developers can now build on top of current-generation state-of-the-art models for the first time. The long-horizon capabilities are the headline: Z.AI claims the model spent eight hours autonomously building a Linux desktop using a self-review loop, and carried out over 600 iterations using more than 6,000 tool calls on a database optimization benchmark to deliver 6x the performance of a standard session. Z.AI leader Lou: "Agents could do about 20 steps by the end of last year. GLM-5.1 can do 1,700 right now." It was trained entirely on Huawei chips — another demonstration that the Chinese hardware stack can produce powerful results. The US is months ahead, not years.
Z.AI Blog
GLM-5.1: Towards Long Horizon Tasks
Venturebeat
AI joins the 8-hour work day as GLM ships 5.1 open source LLM, beating Opus 4.6 and GPT-5.4 on SWE-Bench Pro
Z.AI Leader Lou (X)
Autonomous work time may be the most important curve after scaling laws
LeetLLM (X)
Everyone's freaking out about Mythos while
Z.AI
casually open-sourced a model built for 8-hour autonomous execution
Claude Managed Agents
"Go from prototype to launch in days" — Anthropic builds the deployment stack.
The biggest practical release of the week from Anthropic isn't Mythos — it's Claude Managed Agents, launched Wednesday and seen 16 million times on their announcement tweet. The pitch: everything you need to build and deploy agents at scale, without having to build and maintain all the backend infrastructure yourself. Wired's description is the clearest: managed agents give developers a pre-built agent harness (the software tools, memory system, and other infrastructure that wraps around a model to help it work agentically), plus a built-in sandboxed environment, cloud-based autonomous running for hours, permission controls, and multi-agent monitoring. Anthropic's Katelyn Lessee: "A lot of customers we talked to previously had a whole bunch of engineers whose job it would have been to build and run those systems at scale. Now that we're giving them that out of the box, those engineers can focus on core competencies." The Notion demo was telling: product manager Eric Liu could drop a managed agent into Notion to handle client onboarding — running natively, with full access, in a virtual session instead of days of setup. Early builders note the current limitation is persistent memory across sessions, which means the best use cases right now are transactional and discrete: event-triggered patches, scheduled daily briefs, fire-and-forget tasks via Slack. Jared Orkin's clear-eyed take: "You no longer need an engineer to run an overnight marketing analysis. You need one sharp operator and an afternoon. Someone still has to tune the prompt every Friday and act on the brief by 9 AM Monday. That's the job."
Anthropic
Claude Managed Agents: get to production 10x faster
Anthropic Engineering
Scaling Managed Agents: Decoupling the brain from the hands
Wired
Anthropic's New Product Aims to Handle the Hard Part of Building AI Agents
Alex Albert (X)
Managed Agents eliminates the complexity of self-hosting but allows great flexibility
Thariq (X)
The first 'agent in the cloud' API with the right mix of simplicity and complexity
Lance Martin (X)
How people are using managed agents
Jared Orkin (X)
Big boost for DTC founders, you no longer need an engineer
Pawel Huryn (X)
Built my first Managed Agent. Surprised how easy it was
Notebooks in Gemini
Bringing NotebookLM's magic directly into the Gemini app.
It sounds like a small quality-of-life update, but this is a more significant shift than it first appears. Google introduced notebooks as a native feature in Gemini — allowing users to collate documents, sources, and custom instruction sets organized by project, much like Projects in ChatGPT or Claude. Previously, Gemini's GEMS feature was sort of-but-not-exactly equivalent. This brings NotebookLM's resource management directly into the Gemini app itself. Google VP Josh Woodward: "Most AI chatbots give you basic projects. Gemini just built you a second brain." The broader point: one of the most persistent criticisms of Google's AI suite is that even if people like the models, the product surface is so spread out across different apps that it becomes confusing. This is Google starting to make features portable across those surfaces — so effectively any door you walk in gets you to the same room. For many Gemini users' day-to-day experience, this will be a bigger improvement than a new model version would have been.
Google Blog
Try notebooks in Gemini to easily keep track of projects
The Verge
Gemini gets notebooks to help you organize projects
Josh Woodward
Most Al chatbots give you basic "projects." Gemini just built you a second brain