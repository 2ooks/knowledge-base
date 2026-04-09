# Stop Letting AI Guess: Why Your Prompts Still Miss—And the New Prompt Technique That Dramatically Improves Accuracy
**Source:** https://natesnewsletter.substack.com/p/stop-letting-ai-guess-why-your-prompts
**Date:** August 4, 2025
**Author:** Nate's Newsletter
**Score:** 4/5 | **Concepts:** ai-scaling-limits-and-research-paradigm, open-models-and-local-inference, autoresearch-and-recursive-self-improvement
**Scoring reason:** Substantive analysis of RLVR as a new training paradigm for verifiable tasks, Tulu open model series democratizing post-training, and challenges of reward design for tool-using agents.

Playback speed
×
Share post
Share post at current time
Share from 0:00
0:00
/
0:00
Transcript
91
25
8
Stop Letting AI Guess: Why Your Prompts Still Miss—And the New Prompt Technique That Dramatically Improves Accuracy
I call it contract-first prompting: a way to establish clear intent with your LLM even if YOU don't know exactly what you want (yes really)
Nate
Aug 04, 2025
∙ Paid
91
25
8
Share
Transcript
The most frustrating part of working with large language models isn’t the occasional inaccuracies or weird hallucinations. It’s realizing, deep into a project, that the model completely misunderstood your intent from the start. I’ve been there, you’ve been there—spending hours cycling through revisions, clarifications, and increasingly desperate attempts to “make it clearer,” all because the model and I never really agreed on what we were building.
Here’s why this matters: As these models increasingly handle high-stakes tasks—from software architectures and legal documents to strategic proposals and complex data analyses—the margin for error shrinks to zero. Yet our standard approach still treats prompting like a one-way instruction broadcast. We assume clarity, hit send, and cross our fingers. That’s no way to build critical infrastructure.
Contract-first prompting changes the game. It introduces a simple yet profound shift: explicit agreement before execution. Instead of hoping the model understands,
we negotiate mutual understanding.
The model actively clarifies, systematically asking questions until reaching a predefined confidence threshold. The output isn’t just “close enough”—it matches the verified intent.
As far as I have been able to find, this is the first time this approach has been documented publicly. We’re breaking some new ground here!
I’ve applied contract-first prompting across a spectrum of use cases: software requirements, marketing copy, compliance documents, and even educational content. The impact is immediate and tangible. Fewer revisions, clearer deliverables, higher confidence. This isn’t an abstract theory—it’s a practical protocol you can start using today.
And best of all, it doesn’t assume you have a perfect idea of what you want to build or write to begin with! Start with where you are, your current fuzzy ideas and ambiguous thinking, and let the model relentlessly but gently question you until the model is clear enough on the assignment it can go to work.
In this piece, I’ll (of course) share the exact prompt I use, unpack why intent transfer is inherently tricky, show precisely how contract-first prompting bridges that gap, and provide actionable examples from fields that resonate with your everyday frustrations. Whether you’re designing APIs, drafting strategy, or crafting communications that need to thread complex constraints, this method isn’t just helpful—it’s essential.
Let’s stop treating models like unpredictable magic and start treating them like partners in building shared understanding. The difference isn’t just fewer headaches—it’s better, faster, and safer outcomes for what we build with AI.
And before you ask—yes, this is going to be helpful for ChatGPT-5. In fact this technique is designed to be more useful the more powerful a model becomes! After all, wouldn’t you want a more powerful model to be sure it understood you correctly before going off and leveraging potentially hundreds of LLM tools in ways you you may not have intended?
The bottom line: Intent clarity is going to become more valuable, not less, and this is the first way to verify and lock intent clarity with your AI before beginning work. You can start on anything you have cooking in ChatGPT now, so dive in and have fun!
Subscribers get all these newsletters!
Subscribed
Contract-First Prompts: The Missing Link Between Human Intent and LLM Output
First, here’s the link to the prompt!
The Natural Extension of Defensive Prompting
If you've been following my work, you know I treat prompting as programming with natural language. Structure beats creativity. 90% guardrails, 10% instructions. I've
analyzed Claude's system prompts
, built a
16-prompt work stack
, and documented
comprehensive prompt and context engineering fundamentals
.
Contract-first prompting extends this engineering approach in a way that, frankly, seems obvious now that I’ve played with it. We don't ship code without specs. We don't build products without requirements docs. Yet everywhere I look across the internet we’ve been shipping prompts—instructions that generate real business value or real business risk—
without any verification that both parties understand the assignment.
This isn't about replacing what works. Every principle of defensive prompting remains valid. The guardrails, the structure, the specificity—all of it stays. Contract-first just adds one critical phase before execution: bilateral agreement on what's about to be built.
Why Intent Transfer Is the Core Problem
Here's what happens every time you prompt an LLM: You have an intention in your mind, shaped by years of domain knowledge, specific context, and unstated assumptions. You translate that intention into words. The model receives those words and maps them to probability distributions based on patterns it learned during training.
At no point in this process does actual understanding transfer. The model doesn't know what you mean—it knows what tokens like yours usually mean in contexts like this. You don't know what the model understood—you only see what it generates based on its interpretation.
This gap between human intent and model interpretation isn't a bug we can patch or a limitation we can train away. It's fundamental to how these systems work. We're communicating across a semantic chasm, and every single prompt failure—every wrong output, every revision cycle, every "that's not what I meant"—stems from this basic reality.
The prompt engineering community has been trying to bridge this gap with better instructions. Clearer language. More examples. Detailed constraints. These are fine as far as they go. But we're still broadcasting across the chasm and hoping the message arrives intact.
The Coordination Insight
What changed my thinking was realizing this isn't a communication problem at all. It's a coordination problem. And coordination problems have known solutions.
When two parties need to coordinate despite information asymmetry—when neither knows what the other knows or needs—they don't broadcast harder. They negotiate. They discover requirements through dialogue. They establish mutual understanding before committing resources.
This is how every successful human collaboration works. When you hire a contractor, they don't immediately start building based on your first description. They ask questions. They clarify requirements. They present their understanding back to you. Both parties agree on the scope before any work begins.
Yet with LLMs—systems far more alien to us than any human contractor—we skip this entire coordination phase. We describe what we want and expect immediate generation. Then we wonder why the output doesn't match our intent.
How Contract-First Changes the Interaction Model
Research shows that models can be prompted to "allow the model to elicit precise details and requirements by asking you questions until it has enough information." But the research stops at asking questions. It doesn't establish protocols for systematic discovery, confidence thresholds, or bilateral commitment.
Contract-first prompting implements the full coordination protocol. Instead of the model maybe asking a few clarifying questions if it's confused, it must systematically discover requirements until it reaches a confidence threshold. Instead of assuming understanding, it explicitly states its interpretation and waits for confirmation. Instead of diving straight into generation, it can present its plan and identify risks before any compute is committed to the actual output.
You can find my complete Intent Translator MAX prompt here
, but the key insight isn't the specific prompt—it's the interaction model it creates.
The Information Theory Behind 95% Confidence
The protocol requires the model to continue asking questions until it estimates 95% confidence in delivering the correct result. This isn't an arbitrary number—it comes from information theory and statistical decision-making.
Each question the model asks reduces entropy in the problem space. It's literally computing how much uncertainty remains about your requirements. At 95% confidence, we've reached the point where the remaining ambiguity is unlikely to affect output quality. This is the same threshold used across scientific disciplines as the standard for "confident enough to act."
What's fascinating is that the model can estimate its own confidence. It knows what it doesn't know. It can identify gaps in its understanding.
We just haven't been giving it permission to surface that uncertainty before committing to generation.
Why This Solves the Context Drift Problem
One of the most frustrating aspects of complex prompting is context drift. You start with a clear intent, but through multiple clarifications and regenerations, the conversation gradually shifts. By the end, you're getting technically correct answers to a question you didn't actually ask.
Contract-first prevents this through the echo check—a single sentence that captures the agreed-upon work. This becomes an immutable anchor point. No matter how long the conversation continues, both parties can reference back to this explicit agreement. The model can't drift into a different interpretation because the interpretation was locked before work began. Even more: it was reinforcement locked through multiple iterations early in the context window, so it’s likely to stay very firmly in place in model memory for that conversation.
This is particularly powerful for prompt chains and multi-step workflows. Each step gets its own contract. The output of one contract becomes the input specification for the next. No ambiguity propagation. No error accumulation. Just a series of clear, verified agreements.
The Research Landscape
Sander Schulhoff—who created the first prompt engineering guide before ChatGPT even launched and co-authored the most comprehensive study analyzing over 1,500 papers on prompt engineering with teams from OpenAI, Microsoft, and Google—recently noted that even the most advanced techniques still operate within a one-way instruction paradigm. We've gotten sophisticated about how we broadcast, but we're still broadcasting.
There's fascinating work on LLMs negotiating with each other in game-theoretic scenarios, where models haggle over prices or negotiate resource allocation. But nobody has applied these negotiation principles to the fundamental human-LLM interaction for practical tasks.
The gap in the research is striking. We have models that can negotiate complex deals with each other, yet we don't use that capability to negotiate understanding with humans. We have techniques for making models ask questions, but we don't have protocols for ensuring those questions lead to genuine agreement.
Beyond Best Practices
Current research emphasizes that
"prompt engineering is product strategy in disguise - every instruction you write into a system prompt is a product decision."
(
from
here
). If that's true—and I believe it is—then we should treat those decisions with the same rigor we apply to any product specification.
Contract-first operationalizes this rigor. When the model presents its echo check, that's a reviewable, auditable commitment. When it identifies risks in the pre-mortem phase, those are documented concerns that can be addressed. When both parties agree to proceed, that's a traceable decision point.
This isn't just about better outputs. It's about professionalizing how we interact with AI systems. As these systems become critical infrastructure—writing production code, analyzing sensitive data, making business recommendations—we need interaction patterns that create accountability and traceability.
The Multi-Agent Future
We're rapidly moving toward a world of AI agents that spawn sub-agents, coordinate with each other, and handle complex workflows. Research already warns that "agent-based AI systems are far more vulnerable to attacks than chatbots." The more autonomous these systems become, the more critical coordination becomes.
Without contracts, agent coordination is chaos. Agent A makes assumptions about what Agent B will deliver. Agent B interprets its task differently than Agent A intended. Errors cascade through the system. Resources are wasted on incorrect outputs.
With contracts, agent coordination becomes choreography. Each interaction begins with negotiation and ends with agreement. Parent agents establish clear contracts with child agents. Peer agents negotiate their interfaces. The same protocol that ensures human-LLM understanding ensures LLM-LLM coordination.
The Practical Impact
When I test prompting approaches, I measure what matters: first-attempt success rate, revision cycles, downstream issues discovered after "completion," and user confidence in the output. Contract-first improves all of these metrics, not through marginal optimization but through fundamental risk reduction.
The upfront questions do add time. There's no denying that. But it's time spent preventing errors, not time wasted. It's the difference between measuring twice and cutting once versus cutting five times and still getting it wrong.
More importantly, the confidence boost is real. When you explicitly approve the contract before generation, you know what you're getting. When the model identifies risks before building, you can address them proactively. When both parties share the same understanding, surprises become rare.
Implementation Without Revolution
The beauty of contract-first is that it doesn't require throwing away anything that works. Your existing prompt library, your defensive patterns, your specialized templates—they all become more powerful when wrapped in a coordination protocol.
Start with your most painful prompt. The one that requires the most back-and-forth. The one where misunderstanding costs the most time or creates the most risk. Add the contract protocol and measure the difference. The results will speak for themselves.
This isn't about replacing prompt engineering with something else. It's about adding the one thing that's been missing: verification of mutual understanding before execution begins. Every engineer knows you don't build without a spec. Every contract starts with negotiation. Every successful collaboration requires shared understanding.
We've been treating LLMs like command-line tools when we should be treating them like collaborative partners. Not because they're sentient or conscious, but because they're complex systems with capabilities we don't fully understand, operating in a space where intent transfer is inherently difficult.
Contract-first prompting doesn't solve all of prompt engineering's challenges. But it solves the big one: ensuring that what you mean and what the model understands are actually the same thing. In a world where AI systems are writing code, making decisions, and handling critical tasks, that alignment isn't just useful—it's essential.
Where Intent Is Hardest to Define—Real Use Cases
I've been testing contract-first prompting across different domains, and the results have been particularly striking in areas where intent is inherently difficult to articulate. Let me share what I've learned.
Software Architecture and Requirements Definition
This is where I first realized the protocol's power. When you ask an LLM to design a system architecture, you're carrying massive unstated context: scalability assumptions, team capabilities, existing infrastructure, budget constraints, timeline pressures, regulatory requirements. You know these things so deeply you forget to mention them.
With contract-first, the model systematically surfaces these hidden assumptions. It asks about expected load patterns, deployment environment, team expertise, integration points, compliance needs. The echo check becomes a proper technical specification that both parties agree on before any architecture diagrams or code structures are generated.
I've used this for everything from microservices design to database schemas, and it consistently prevents the "looks good but won't work in our environment" problem that plagues AI-generated architectures.
Document Creation with Voice and Compliance
Document creation seems straightforward until you realize how much intent lives in your head. When I ask for a technical blog post, I'm implicitly assuming my audience's knowledge level, my brand voice, the unspoken rules about what we do and don't discuss, the legal boundaries we operate within.
The contract protocol forces these assumptions into the open. The model asks about target audience expertise, tone boundaries, topics to avoid, compliance requirements, citation standards. What would have been five rounds of "make it more technical but less jargony, and actually we can't mention that competitor" becomes one upfront negotiation.
Data Analysis and Business Intelligence
This is where intent gets dangerously fuzzy. When a stakeholder asks for "customer churn analysis," they're often carrying unstated assumptions about what counts as churn, which customer segments matter, what time periods are relevant, which external factors should be considered.
Contract-first transforms these vague analytical requests into precise specifications. The model asks about business definitions, success metrics, confounding variables, statistical significance requirements. The echo check becomes a proper analytical framework that would make any data scientist proud.
API Design and Integration Planning
API design is an exercise in predicting future needs while serving current ones. When you prompt for API design, you're implicitly making decisions about versioning strategy, authentication methods, rate limiting, error handling philosophy, backward compatibility requirements.
The protocol surfaces these architectural decisions before any endpoints are defined. Questions about client types, security requirements, performance expectations, and evolution strategy turn what could be a generic REST API into a purposeful design that actually fits your ecosystem.
Marketing Copy with Multiple Stakeholders
Marketing copy is where intent becomes political. You're balancing brand guidelines, legal requirements, SEO needs, conversion goals, and often multiple stakeholders' conflicting preferences. The brief you give an LLM is never complete because the complete brief exists across five different people's heads.
Contract-first helps here by systematically exploring constraints. The model asks about brand voice boundaries, legal disclaimers required, keyword requirements, call-to-action goals, approval stakeholders. The result is copy that passes review on the first try instead of the fifth.
Technical Documentation and Knowledge Base Articles
Documentation suffers from the curse of knowledge. When you ask for documentation, you unconsciously assume the reader's context, their familiarity with your system, their reasons for reading, their next steps after reading.
The protocol forces you to articulate these assumptions. Who's the reader? What problem are they solving? What do they already know? What should they be able to do after reading? The echo check becomes a proper documentation specification that ensures the content actually serves its purpose.
Strategic Planning and Proposal Writing
Strategy documents are where fuzzy intent meets high stakes. When you ask for a strategic plan or proposal, you're carrying assumptions about organizational context, political sensitivities, resource constraints, success metrics, and unstated objectives that are sometimes more important than stated ones.
Contract-first turns these implicit factors into explicit requirements. The model asks about stakeholder concerns, budget boundaries, timeline constraints, success metrics, risk tolerance. The result is a document that doesn't just sound strategic but actually fits your organizational reality.
Migration and Refactoring Plans
System migrations are where hidden dependencies kill projects. When you ask for a migration plan, you're assuming knowledge about system dependencies, data relationships, business continuity requirements, rollback strategies, and acceptable downtime windows.
The protocol systematically uncovers these dependencies. Questions about system interactions, data integrity requirements, business constraints, and team capabilities turn a generic migration plan into an actionable roadmap that accounts for your specific complexity.
Legal and Compliance Documents
Legal documents are where precision is mandatory but intent is often ambiguous. When you ask for terms of service, privacy policies, or compliance documentation, you're navigating between legal requirements, business needs, and user experience considerations.
Contract-first helps navigate this complexity by clarifying jurisdiction requirements, business model specifics, data handling practices, and risk tolerance. The echo check ensures both legal compliance and business alignment before any legal language is generated.
Educational Content and Training Materials
Educational content is where the curse of knowledge is strongest. When creating training materials, you're making countless assumptions about learners' backgrounds, learning objectives, available time, practice opportunities, and success metrics.
The protocol surfaces these pedagogical decisions. Questions about learner personas, prerequisite knowledge, learning objectives, assessment methods, and follow-up resources ensure the content actually teaches rather than just informs.
The Pattern Across Domains
What's striking about these use cases is the pattern: the more stakeholders involved, the more context assumed, the more constraints implied, the more valuable contract-first becomes. It's not about complex versus simple tasks—it's about explicit versus implicit requirements.
The highest-value applications share certain characteristics. Multiple constraints that potentially conflict. Unstated assumptions that seem obvious to you but aren't to the model. Context that lives in your head or your organization but not in the prompt. Requirements that cross different domains of expertise. Outputs where "close enough" isn't good enough.
If you find yourself regularly saying "that's not what I meant" or "it needs to consider X" or "we can't actually do it that way," you're in contract-first territory. The protocol doesn't make the model smarter—it makes the requirements clearer. And clear requirements, as any engineer knows, are most of the solution.
The Simple Truth About Complex Systems
After all this analysis, the core insight is surprisingly simple: we've been treating stochastic systems like deterministic ones. We input a prompt and expect a predictable output, as if LLMs were compilers that transform specifications into code. But they're not. They're probability engines operating in a space where meaning itself is ambiguous.
Contract-first prompting acknowledges this reality. It doesn't try to make the system deterministic—that's impossible. Instead, it creates a protocol for managing uncertainty. It turns the inherent ambiguity of natural language from a bug into a feature by using it to drive clarification.
This isn't a temporary hack until models get better. As models become more capable, the space of possible interpretations grows.
GPT-5 won't need contract-first less than GPT-4o or o3—it will need it more.
More capability means more ways to interpret a prompt, more potential solutions to explore, more assumptions to verify.
Start Tomorrow, Not Someday
The best part about contract-first prompting is that you can start using it immediately. No new tools to learn. No frameworks to install. No APIs to integrate. Just paste the protocol before your next complex prompt and watch what happens.
Start with something specific from Part 12. Pick the use case that resonates most with your daily frustrations. Maybe it's that technical documentation that never quite captures the right level of detail. Maybe it's the system architecture that looks perfect on paper but misses your actual constraints. Maybe it's the marketing copy that goes through endless revisions.
Whatever it is, wrap it in the contract protocol. Pay attention to the questions the model asks—they'll reveal assumptions you didn't know you were making. Notice how the echo check forces both clarity and commitment. Observe how different the output is when both parties agree on the target before generation begins.
Measure what matters to you. Time to acceptable output. Number of revision cycles. Stakeholder satisfaction. Downstream issues. The metrics will tell the story better than any argument I can make.
The Bigger Shift
Contract-first prompting is part of a larger evolution in how we think about AI interaction. We're moving from command-and-control to collaboration, from instruction to negotiation, from hoping the model understands to verifying it does.
This shift isn't philosophical—it's practical. As AI systems handle more critical work, as they become embedded in our workflows, as they coordinate with each other and make decisions that affect real outcomes, we need interaction patterns that create clarity, accountability, and reliability.
The prompt engineering community has done incredible work optimizing the broadcast. We've developed sophisticated techniques for instruction, demonstration, and constraint. Contract-first adds the feedback loop that makes all of that work more reliable.
It's not the only solution, and it won't be the last evolution. But right now, today, it's a simple protocol that solves a real problem: the gap between what we mean and what the model understands.
In a world where AI is writing production code, analyzing business data, and making real decisions, the difference between "I think you understand" and "I know we agree" isn't academic.
It's the whole game.
P.S. Wondering what else I’ve written on prompting? This is the latest in a lengthy series of pieces I’ve been constructing devoted to experientially discovering reliable prompting techniques with LLMs. You can check out a few of them here:
Ready for ChatGPT-5: Grab a Complete 139 Page Prompting Guide
This exhaustive playbook covers 39 essential prompts and systems for advanced models like GPT-5 and Claude 4.
Read here
.
Nate’s Secret Sauce: A Prompt Engineering Masterclass using 19 Prompts
A practical, step-by-step breakdown of deep research prompts, iteration, and robust strategies.
Read here
.
My Prompt Stack for Work: 16 Prompts In My AI Toolkit That Make Work Better
Presents 16 stress-tested prompts for real workplace applications and boosted productivity.
Read here
.
12 Advanced Prompting Techniques for Methodical Magic (The Prompt Spellbook)
An advanced guide featuring 12 strategies for better prompting, organized by strategic pillars.
Read here
.
The Universal Anatomy of the Prompt—How and Why a Prompt Works and How to Make it Work for You
Explains the structure and logic behind effective prompts, adaptable to any model.
Read here
.
I make this Substack thanks to readers like you!
Learn about all my Substack tiers here
Subscribed
Discussion about this video
Comments
Restacks
Nate's Notebook
Welcome to my podcast! In these audio reviews of my newsletters, I am to break down complex AI topics in a way that's approachable and relatable. I want you to walk away with the confidence to leverage AI more effectively at home and at work!
Welcome to my podcast! In these audio reviews of my newsletters, I am to break down complex AI topics in a way that's approachable and relatable. I want you to walk away with the confidence to leverage AI more effectively at home and at work!
Listen on
Substack App
RSS Feed
Email mobile setup link
Appears in episode
Nate
Recent Episodes
Executive Briefing: 33% of the world's helium supply just went offline. Your AI infrastructure plan doesn't account for it.
1 hr ago
•
Nate
The open loop audit prompt that separates real delegation from simulated work + 3 more prompts for overnight execution
Mar 28
•
Nate
The most expensive coordination cost in product development just got a fix. It's a markdown file.
Mar 27
•
Nate
Your AI credentials don't matter. Your artifacts do. Here's how to build both sides — plus I'm launching Nate's Network.
Mar 26
•
Nate
You're using the wrong kind of agent. Here's the one question that tells you which one you actually need + 3 diagnostic prompts
Mar 25
•
Nate
Accenture booked $2.2 billion in AI consulting last quarter. Here's the part your engineering team could have handled for free.
Mar 24
•
Nate
5 AI agents, 5 contradictory bets, 3 questions that tell you which one fits — and the prompts to pressure-test your answer
Mar 23
•
Nate
Executive Briefing: 80% of what makes your product worth buying lives in people's heads. Agents can't read it. Here's what to do about it …
Mar 22
•
Nate