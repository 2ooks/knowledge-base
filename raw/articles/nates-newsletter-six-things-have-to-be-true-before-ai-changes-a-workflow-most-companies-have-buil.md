# Six things have to be true before AI changes a workflow. Most companies have built two.
**Source:** https://natesnewsletter.substack.com/p/enterprise-ai-deployment-layer
**Date:** 2026-05-14
**Author:** Nate
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Playback speed
×
Share post
Share post at current time
Share from 0:00
0:00
/
Transcript
125
7
2
Six things have to be true before AI changes a workflow. Most companies have built two.
Nate
May 14, 2026
∙ Paid
125
7
2
Share
Transcript
The interesting thing about Anthropic’s new enterprise AI services company isn’t the services part. Enterprise software has always needed implementation help: cloud migrations, ERP projects, Salesforce rollouts, the forward-deployed engineering Palantir made famous. What’s new is the target. Anthropic is aiming this venture at mid-sized businesses: the segment with enough operating complexity to benefit from frontier AI, but rarely with enough internal engineering to turn it into working systems.
That target tells you something. The hard part of enterprise AI is no longer buying access to a powerful model. Any company can approve ChatGPT Enterprise, Claude, or Gemini, buy seats, call an API, and produce impressive internal demos. None of that proves the company has actually changed how support tickets move, how invoices close, how compliance reviews happen, or how customers get served. Value shows up when the model has a specific role in a specific workflow, with the right data, permissions, review process, and success metric. That work is what most companies haven’t built. In the last few months, agents have gotten reliable enough at running entire workflows that the distance between companies that have built it and companies that haven’t is starting to compound.
That’s why Anthropic, OpenAI, Blackstone, Hellman & Friedman, and Goldman Sachs are all making moves right now. The implementation layer has become the strategic layer in enterprise AI. There are trillions of dollars in workflow value waiting on whoever figures this out first, and the companies that already understand this are about to pull further ahead.
Here’s what’s inside:
What’s actually new about the Anthropic deployment company.
Why the mid-market target and PE backing signal a shift from model sales to deployment capacity — and what private equity sees that the market doesn’t.
What “implementation architecture” actually means.
The technical and operational work that separates AI experiments from production workflows.
The risk: services that don’t turn into product.
When field work compounds into reusable assets versus when it stays bespoke.
What this means for startups, buyers, and builders.
Where narrow, deep ownership beats generic AI productivity plays — and the specific move each one should make next.
The implementation architecture audit.
A prompt that scores your AI product against the six components, tells you whether you own a workflow or decorate a model, and surfaces the two questions that will end your next enterprise deal.
Let me show you how the pieces connect, and what the next phase of enterprise AI actually requires.
Subscribers get all posts like these!
Subscribed
LINK:
Grab the prompts
I keep thinking about how the builders I talk to describe their products. The pitch is usually fluent. The answers under pressure usually need some work. A buyer’s engineer asks about evals or audit trails or recovery paths and the conversation thins out fast. That gap between the pitch and the answer is what this prompt forces. It runs you through the six implementation components: workflow design, data access, authority, evaluation, audit trails, recovery and ownership. Then it scores what you actually own versus what you’re hand-waving. The output is a tier verdict and the two questions your next buyer is going to ask that you can’t yet answer. I’d rather you find that out reading this than in the second meeting with their consultants. [LINK: Grab the prompt →]
What’s actually new about the Anthropic deployment company
On May 4,
Anthropic announced
a partnership with Blackstone, Hellman & Friedman, Goldman Sachs, and other investors to launch a new enterprise AI services company. The announcement says the company will help mid-sized companies bring Claude into their core business operations, with the consortium’s PE portfolios — spanning healthcare, manufacturing, financial services, retail, and real estate — serving as an initial customer base. Anthropic engineering and partnership resources are embedded directly within the new firm’s team.
Anthropic did not disclose a dollar amount. Press reports put the venture at roughly $1.5 billion, but that figure should be treated as reported rather than confirmed.
The same day, OpenAI closed
its own private-equity-backed enterprise venture
: The Deployment Company, a $10 billion vehicle anchored by TPG with backing from Brookfield, Bain Capital, Advent, Dragoneer, SoftBank, and roughly fifteen other investors. The PE consortium is putting in about $4 billion. OpenAI is contributing up to $1.5 billion of its own capital and retains majority control through super-voting shares. The structural detail worth noticing: OpenAI is guaranteeing the PE backers a 17.5 percent annual return over five years. That’s an unusual instrument. It converts equity-style upside into a fixed-yield product for the financial sponsors, which both compresses OpenAI’s risk profile in a way the labs don’t normally accept and tells you how badly the labs want this distribution channel. A week later, on May 11, OpenAI agreed to
acquire consulting firm Tomoro
, bringing about 150 engineers into The Deployment Company to handle implementation work directly. That acquisition is the clearest signal yet that the labs see the forward-deployed engineering work as something they need to own rather than route through partners. OpenAI’s existing enterprise effort — its
Frontier Alliances
with McKinsey, BCG, Accenture, and Capgemini, plus internal forward-deployed engineering — sits alongside this new vehicle, not underneath it.
The two ventures landed on the same day. They are not the same shape. Anthropic’s is smaller, more concentrated among prestige financial sponsors, and structured as a partnership with the PE firms as both investors and customers. OpenAI’s is bigger in capital, broader across investors, more aggressively financialized, and explicitly designed to make PE portfolios into a captive distribution channel. The direction is identical in both cases: the labs are organizing around the practical work of enterprise deployment, not just the sale of model access.
OpenAI’s own framing makes the point. The Frontier Alliances post argues that the bottleneck for enterprise AI isn’t model intelligence — it’s how agents get built and operated inside companies. That sentence is worth taking seriously coming from a company whose public identity has been defined by the model race. OpenAI is still competing on models, but it’s also acknowledging that enterprise value depends on the work system around the model.
What “implementation architecture” actually means
A model can produce a useful response inside a chat window. A business process needs much more: knowing which data is authoritative, what the user is allowed to do, when a human approval is required, what to log, how to evaluate output, and what happens when the model is wrong. The system has to fit into the tools employees already use, respect company policy, and survive ongoing changes to models, workflows, and rules.
By “implementation architecture,” I mean the specific decisions that let a model perform a real role inside a business process. There are roughly six of them, and most enterprise AI conversations only address one or two:
Workflow design.
Which decisions the model gets to make, which steps stay human, where the handoffs happen, what counts as done.
Data access.
Which sources of truth the model reads, which permissions apply at the row and field level, which records are authoritative versus stale.
Authority.
What the model is allowed to do, against which systems, with what spending or commitment limits. Reading is one risk profile, writing is a different one, and spending is harder to undo than either.
Evaluation.
How output gets scored against the business rules that actually matter — not benchmarks, but adherence to the company’s own policy and outcome standards.
Audit trails.
What gets logged, what has to get logged, and what an auditor or risk team can reconstruct after a failure.
Recovery and ownership.
What happens when the model does something wrong, how an action gets reversed, and who keeps the system tuned as models, processes, and policies change.
A company can buy model access without doing any of this work. It cannot get process-level value without doing all of it.
Customer support is the simplest example. An AI assistant that drafts replies can save individual agents some time, but the agent still has to check the facts, compare against policy, update the customer record, decide on escalation, and copy information between systems. The human is still holding the operation together. Some writing time gets saved. The workflow doesn’t really change.
A serious support deployment starts from the workflow, not the chat window. The company decides which tickets can be classified automatically, which customer records the system can read, which policy rules matter, when a refund can be prepared, when a manager has to approve, and what metrics will prove the project worked. Only then does the model get a role: classifying tickets, drafting replies, recommending escalations, preparing refunds for approval, summarizing account history, or updating records after a human confirms. Value comes from reducing coordination across the business, not from generating a slightly better paragraph in isolation.
Finance follows the same pattern. Anthropic recently released
finance agent templates
covering KYC screening, pitchbooks, month-end close, valuation review, market research, model building, and general ledger reconciliation. These templates are useful evidence because of what surrounds the model in each one. A finance agent needs access to the right documents and systems, has to follow the firm’s conventions, has to know which outputs are drafts versus reviewed versus untouchable, and has to leave a record that finance, risk, or audit can inspect later.
Not every finance team needs Anthropic’s exact templates. The point is that the template format reflects the actual deployment problem: the model is one component, and the value depends on the instructions, connectors, permissions, review paths, and workflow design built around it.
This is where most enterprise AI pilots break. The pilot gets built around what the model can do in a controlled setting. The business process is built around what the company has to do repeatedly, safely, and measurably. Those are different standards. A pilot can produce an impressive output and still have no clear path into production. It can summarize, answer, draft, or analyze, but if nobody has connected it to the system of record, defined a review process, assigned an owner, or tied it to a business outcome, it stays an experiment.
Something else changed in the last few months that makes this conversation feel different than it did a year ago. Agents can now run an entire workflow end to end with enough reliability that companies are willing to bet operating processes on them, not just side experiments. That’s a 2026 capability shift, not a marginal one, and it’s the reason the conversation about implementation has moved from interesting to urgent.
Why private equity is here
The new Anthropic company isn’t only selling Claude. It’s selling the deployment capacity around Claude: operations review, use-case identification, custom system builds, ongoing support. These are the steps companies skip when they treat AI adoption as a procurement decision.
Private equity has a direct operating reason to care. PE firms own or influence large numbers of companies where margin, revenue, and back-office efficiency matter immediately, and they have board access and operating partners who can push management teams to act. A deployment company that improves finance ops, support, engineering throughput, procurement, claims processing, compliance, or sales operations across a portfolio shows up in company performance and exit value.
That’s a different distribution model than normal software sales. A vendor usually has to convince each company on its own. A PE firm can introduce a deployment partner across a portfolio at once, compare results across similar companies, and standardize playbooks where the same patterns repeat. The PE firm becomes capital, distribution, governance, and pressure in one channel.
Why the mid-market
Large enterprises already have access to help, even if they don’t always use it well. They can hire major consulting firms, build internal AI teams, partner with cloud providers, and fund multi-year overhaul programs. Mid-sized companies usually have enough process complexity for AI to matter without the internal AI engineering to build a deployment layer.
A regional bank might have KYC, fraud review, lending, support, and compliance workflows that could benefit from AI but no team that can safely build agents into them. A manufacturer has maintenance logs, supplier communications, quality reports, procurement approvals, and field documentation, but no internal group that can turn those into governed AI systems. A health system has scheduling, billing, claims, documentation, coding, and compliance needs that can’t simply be handed to a generic model without careful controls.
These companies don’t need broad statements about what AI will change. They need someone to map a process, connect systems, define permissions, build a working deployment, train users, measure outcomes, and keep improving the system after launch.
Forward-deployed engineering, with caveats
Forward-deployed engineering exists because that work can’t be done entirely from a product roadmap. The role sits close to both the customer’s operations and the product. It’s technical, but it also requires understanding how the business actually functions: where work starts, where it ends, who owns each step, which systems matter, which exceptions show up often, which risks are unacceptable, and which outputs users will trust.
This isn’t strategy work, and it isn’t standard software installation. The engineer translates the customer’s operating reality into a system the model can use, which can mean building connectors, designing retrieval flows, defining action permissions, building review screens, writing evals, setting up logs, testing with real users, and feeding what’s learned back into the product.
Palantir is the obvious historical reference because it made forward-deployed engineering central to its enterprise model. The lesson worth taking isn’t that every AI company should imitate Palantir’s culture or sales motion. It’s that some enterprise software categories get discovered in the field. The product team can’t fully understand the customer’s workflow from outside. It has to see how the work actually happens, then turn repeated patterns into product.
The risk: services that don’t turn into product
The risk for these new ventures is getting pulled into bespoke services work that doesn’t scale. If every deployment requires a large custom team forever, the economics start to look more like consulting than software: variable delivery quality, compressed margins, customers dependent on external teams, product roadmaps deformed by one-off demands.
The opportunity is that early deployment work can teach the labs and their partners what should become repeatable. If ten banks need similar KYC flows, parts of that work can become a template. If many finance teams need similar month-end close support, instructions, connectors, review patterns, and evals can become product. If manufacturers share common procurement, maintenance, or quality workflows, deployment teams will learn which parts are industry-standard and which are company-specific.
That’s how services become product instead of staying services. Field work has to produce reusable assets: templates, connectors, permission models, evaluation methods, implementation playbooks, and vertical workflows. Without that, the deployment company is a body shop with a model partnership. With it, the company can build a defensible implementation layer around the model.
That implementation layer is likely to become one of the most important parts of the enterprise AI stack. Customers need both the model and the surrounding system that makes the model usable in a business: data access, work mapping, business rules, controls, evals, monitoring, change management. Whoever owns those pieces will have influence over how AI is adopted, which models get used, and which workflows become automated.
What this means for startups
A generic “AI for enterprise productivity” company is walking into a much harder environment than it was a year ago. Four sources of pressure are converging on the same ground at the same time. Frontier labs are moving down the stack toward deployment, releasing vertical templates and forward-deployed teams instead of just APIs. Major consultancies, including McKinsey, BCG, Accenture, and Capgemini, are moving up the stack into agentic build practices and showing up with engineers, not just slide decks. Systems of record like Salesforce, ServiceNow, Workday, and SAP are exposing structured interfaces that let agents act directly inside their platforms with their permissions and their audit trails. And private equity is becoming a distribution channel of its own, capable of pushing one deployment partner across an entire mid-market portfolio. A startup that doesn’t own a specific workflow, vertical, or control layer can find itself squeezed by all four at once.
The better startup opportunity is narrower and deeper. Own a painful workflow that the labs don’t understand well enough. Build the infrastructure that lets companies evaluate agent output against business outcomes. Solve permissioning for AI actions. Build memory, audit, or monitoring for agents working across enterprise tools. Create vertical deployment packages for industries where generic agents won’t be trusted. Become the system of action for a job that matters.
Founders should also expect to do more customer work than a pure software story would suggest. That doesn’t mean building an unlimited services org. It means learning from customers closely enough to find the repeatable product. Early deployments should answer practical questions: which data sources matter every time, which permissions are always required, which steps need human approval, which outputs must be auditable, which exceptions break the workflow, which UI actually fits the daily job.
Those answers don’t come from a pitch deck. They come from watching the work.
The founder mistake is to avoid this work because it feels unscalable. The product stays shallow if the company never does it. The goal isn’t to customize forever — it’s to use early deployments to learn what should become standard. Every customer should make the next implementation faster, clearer, and more productized. Without that learning loop, the company is doing services without building software leverage.
What this means for enterprise buyers
Buyers should stop treating AI budgets as if the main cost were the model subscription. Seats and API access are only part of the spend. A serious AI program also has to fund integration, workflow design, data cleanup, security review, evaluation, training, monitoring, and internal ownership. Without those line items, the company is budgeting for experimentation rather than operational change.
A useful question to ask before approving a project: after this is done, which business process will run differently, and who will be accountable for proving it improved? “Employees will save time” doesn’t qualify. The answer needs a process, a group of users, a baseline, a new operating method, and a metric. For example: reduce manual variance analysis during month-end close while keeping controller review in place; cut support escalation time for a defined ticket category; reduce time spent on first-pass KYC review while preserving compliance oversight; or shorten procurement cycle time for low-risk vendors under a defined spend threshold.
This level of specificity is uncomfortable because it forces the business to name the work. It also protects the company from buying AI activity that never converts into value.
Buyers should also be careful about outsourcing too much of the learning. Deployment partners can be valuable, especially when internal capacity is limited. But the customer still needs to understand the workflow, the controls, the failure modes, and the maintenance plan. If the partner owns all of that knowledge, the customer ends up with a system it can’t govern or improve.
The better posture is to use outside help to build internal capability faster. A deployment partner should leave behind more than a working agent: documentation, trained owners, evaluation methods, system knowledge, and a clearer playbook for the next workflow. The customer should know which parts of the deployment are portable, which are vendor-specific, and which should become part of its own operating model.
This matters because AI deployments aren’t static. The model underneath will change. The company’s processes will change. Policies will change. Users will find new failure modes. A workflow that’s safe when the model only drafts may need new controls if the model later starts taking actions. That evolution has to be managed. Implementation isn’t a one-time project.
How to judge the next phase
I’ve been thinking about why the historical analogs for this feel insufficient, and I think it’s because each one only covers part of the challenge. Cloud professional services helped companies migrate infrastructure into a new environment. Systems integrators helped install and configure large enterprise software. Palantir’s forward-deployed engineers translated customer problems into software. Enterprise AI borrows from all three, but its operating challenge is different. It doesn’t only move software from one environment to another. It changes who does parts of the work, how decisions get prepared, when humans review, and how actions move across systems.
Implementation matters so much because of that. A model running inside a company isn’t just another application. It can draft, classify, recommend, summarize, search, call tools, and in some cases take action. The more authority it gets, the more the company needs clear rules around data, permissions, review, and accountability. Better model capability doesn’t reduce the need for those rules. It raises the stakes of getting them right.
The independent adoption data points the same direction. MIT’s
GenAI Divide
report argued that many organizations have struggled to convert generative AI investment into measurable return, with failures tied to brittle workflows, poor integration, and weak fit with day-to-day operations. Any broad study deserves careful reading, but the pattern matches what enterprise teams are seeing on the ground: individual use is widespread; production workflows are still hard.
The reason isn’t mysterious. Individual AI use happens at the edge of a job — a person asks a model for help, checks the answer, decides what to do. Enterprise value requires the model to participate in the flow of work across people and systems, and that second problem is harder because it touches process design, ownership, incentives, governance, and technical integration all at once.
The companies that figure this out look different from the inside. They’ll have a small number of clear use cases instead of a sprawl of disconnected experiments. They’ll know how to choose workflows, assign owners, connect systems, define permissions, test outputs, monitor results, and train users. They’ll develop internal standards for when an AI system can read, draft, recommend, update, approve, or act. Some workflows shouldn’t be automated at all.
Everyone else will have a lot of AI usage and very little AI leverage. Employees will keep using tools, pilots will keep appearing, vendors will keep presenting demos, and leadership will keep asking where the savings are. The missing piece will be the same in each case: nobody rebuilt the workflow around a clear role for the model.
The Anthropic and OpenAI moves matter for that reason. The frontier labs aren’t abandoning the model layer. They’re protecting its value by moving toward the work required to make models useful inside companies. A model that stays outside the business process is easy to swap, underuse, or ignore. A model built into the process with the right controls and integrations becomes part of how the company operates — value for the customer, stickiness for the lab.
That also changes how the next phase should be judged. The product announcement that matters isn’t the one saying a company has added an AI assistant. It’s the one that explains which workflow the system can run, which systems it connects to, which permissions it respects, how its outputs are evaluated, and which business outcome changed. The market has had enough assistant launches; it needs proof that AI systems can handle real operating work.
For builders, this means the product has to sit closer to the business object. A support product needs to understand cases, policies, customers, entitlements, escalations, and outcomes. A finance product needs to understand close tasks, reconciliations, controls, approvals, audit trails, and reporting deadlines. A procurement product needs to understand vendors, contracts, thresholds, budgets, risk, and approvals. A coding product needs to understand repositories, issues, branches, tests, reviews, deployments, and incidents. Generic intelligence becomes valuable when it gets attached to the objects and actions that define the work.
The plain version of the enterprise AI shift: companies don’t need more abstract excitement about AI. They need the engineering and operating work that makes AI useful where money, risk, customers, and employees actually live. The labs have started organizing around that fact.
The best reading of the Anthropic announcement isn’t that services have returned — services never left. It’s that implementation has become a strategic layer in enterprise AI. Private equity is in this because PE has portfolio companies where operating improvements matter. Mid-market companies are in this because they have real complexity and limited AI capacity. Forward-deployed engineering is in this because the work can’t be fully understood from outside the customer. Finance agents and enterprise alliances are in this because the repeated parts of deployment are starting to become product.
The practical question for every company is now: which workflow are we changing, what role will the model play, and what has to be built around it for the change to actually work? A company that can answer those questions has a path to value. A company that can’t won’t solve the problem by buying access to a better model.
I make this Substack thanks to readers like you!
Learn all about my Substack tiers here
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
Executive Briefing: Your AI vendor contract isn't built for a capacity crunch. 3 prompts to fix it before your budget meeting
14 hrs ago
•
Nate
Build the room before you write the memo. Grab the 4-prompt project room kit: source inventory, duplicate log, missing-context list…
May 22
•
Nate
68% of AI power users do one thing differently — and it is not a prompt trick
May 21
•
Nate
Seven questions decide whether your AI agent ships. Most teams can answer two.
May 20
•
Nate
Six agent protocols just launched. Three of them decide which products survive. Here is how to tell which three.
May 19
•
Nate
What ChatGPT sees when it looks at your company + 3 diagnostics
May 18
•
Nate
Executive Briefing: Stop asking if AI can do this. Start asking what shape the work is.
May 17
•
Nate
Exclusive: a conversation with Tibo from Codex on what your company has to become when the model can actually do the work
May 16
•
Nate