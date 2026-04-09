# Copilot Cowork, Anthropic's Integration, Microsoft's New Bundle
**Source:** https://stratechery.com/2026/copilot-cowork-anthropics-integration-microsofts-new-bundle/
**Date:** March 10, 2026
**Author:** Stratechery
**Score:** 5/5 | **Concepts:** autoresearch-and-recursive-self-improvement, ai-scaling-limits-and-research-paradigm
**Scoring reason:** Directly and substantially covers LLMs autonomously training smaller LLMs, vibe training, and recursive self-improvement -- a core wiki concept.

Listen to this post:
Your browser does not support the audio element.
Good morning,
Today’s
Dithering
will be coming out a few hours late, as there is an embargo on product reviews that we will be discussing.
On to the Update:
Copilot Cowork
From
Reuters
:
Microsoft is adding Anthropic’s AI technology to its Copilot service to tap growing demand for autonomous agents, weeks after the startup’s new tools sparked a selloff in software stocks. The company on Monday unveiled Copilot Cowork, a tool based on Anthropic’s viral Claude Cowork offering, which has captivated Silicon Valley with its ability to handle complex tasks such as creating apps, building spreadsheets and organizing large volumes of data with limited human oversight. Microsoft is betting that its long-standing ties with enterprise customers and its focus on security and data controls will help it win business from companies interested in AI agents but wary of deploying them without safeguards.
“We work only in a cloud environment and we work only on behalf of the user. So you know exactly what information it (Copilot Cowork) has access to,” Jared Spataro, who leads Microsoft’s AI-at-Work efforts, told Reuters. Claude Cowork only works locally on the device and most companies feel “very uncomfortable” with that, he said. “We’re the opposite.”
The launch comes weeks after Anthropic introduced new tools for Claude that intensified investor concerns about the threat AI agents could pose to traditional software companies, triggering a selloff in the sector. Microsoft’s own shares fell nearly 9% in February. Copilot Cowork tool is currently in testing and will be available to early-access users later this month, Microsoft said.
The company did not disclose pricing, but said some usage would be included in its $30-per-user, per-month M365 Copilot offering for enterprises, with additional usage available for purchase. Microsoft also said it is making Anthropic’s latest Claude Sonnet models available to M365 Copilot users. The service had previously relied only on OpenAI’s GPT models.
This is a fascinating product launch on multiple levels. Start with the inclusion of Claude in Copilot: Microsoft has been signaling for months that they were determined to be model agnostic; for example, here was CEO Satya Nadella on
the last earnings call
:
I want to talk about the agent platform. Like in every platform shift, all software is being rewritten. A new app platform is being born. You can think of agents as the new apps and to build, deploy and manage agents, customers will need a model catalog, tuning services, harness for orchestration, services for context engineering, AI safety, management, observability and security.
It starts with having broad model choice. Our customers expect to use multiple models as part of any workload that they can fine tune and optimize based on cost, latency and performance requirements. And we offer the broadest selection of models of any hyperscaler. This quarter, we added support for GPT 5.2 as well as Claude 4.5. Already over 1,500 customers have used both Anthropic and OpenAI models on Foundry. We are seeing increasing demand for region-specific models, including Mistral and Cohere as more customers look for sovereign AI choices, and we continue to invest in our first-party models, which are optimized to address the highest value customer scenarios such as productivity, coding and security.
This was in the context of agents, but Nadella was making the multiple models argument in the context of Azure for
the last couple of years
, after the company originally planned on optimizing around OpenAI but nearly got burned with the management upheaval at that company in November 2023. What Claude in Copilot represents is Microsoft implementing that multi-model strategy further and further up the stack: first as an offering on Azure, then as a platform offering, and now in the application layer itself.
Anthropic’s Integration
Microsoft is taking a classic “commoditize your complements” approach and it’s exactly how the company should be leveraging its horizontal position in the value chain; from last month’s
Microsoft and Software Survival
:
While this battle is happening, there will be another fundamental shift taking place: yes, humans will be using software, at least for a while, but increasingly so will agents. What isn’t clear is who will be creating the agents: I expect every SaaS app to have their own agent, but that agent will definitionally be bound by the borders of the application (which will be another reason to expand the app into adjacent areas). Different horizontal players, meanwhile, will be making a play to cover broader expanses of the business, with the promise of working across multiple apps.
Microsoft is one of those horizontal layers, and the company’s starting point for agents is what it is calling Work IQ; here is how CEO Satya Nadella explained Work IQ on the company’s earnings call:
Work IQ takes the data underneath Microsoft 365 and creates the most valuable stateful agent for every organization. It delivers powerful reasoning capabilities over people, their roles, their artifacts, their communications and their history and memory all within an organization security boundary. Microsoft 365 Copilot’s accuracy and latency powered by Work IQ is unmatched, delivering faster and more accurate work grounded results than competition, and we have seen our biggest quarter-over-quarter improvement in response quality to date. This has driven record usage intensity with average number of conversations per user doubling year-over-year.
This feels like the right layer for Microsoft, given the company’s ownership of identity. Active Directory is one of the most valuable free products of all time: it was the linchpin via which Microsoft tied together all of its enterprise products and services, first driving upgrades up and down the stack, and later underpinning its per-seat licensing business model. That the company sees its understanding of the individual worker and all of his or her artifacts, permissions, etc. as the obvious place to build agents makes sense.
Copilot Cowork specifically — which is distinct from using Claude models in Copilot — fits this concept to a degree (there’s a good demo of its capabilities
here
; basically, instead of being a chatbot, you have a worker who can accomplish a task). First, it is designed to interface directly with Work IQ, which gives the agent context without the user needing to do anything. Secondly, and relatedly, while Claude Cowork is designed to run locally and access your files on your computer, Copilot Cowork only works in the cloud. This is, as the Reuters excerpt noted, a feature, not a bug: local computers and files are a security hole, while corporate IT teams have much more control over what is or is not in a cloud environment, and who or what does or does not have access — and everything is logged.
This is actually another argument in favor of the
Thin is In
thesis: if you accept the argument that
AI adoption is going to be driven in a top-down fashion
, then it follows that AI usage is going to be centralized in the enterprise’s cloud, not run locally.
This, by extension, gets at what is clearly a much deeper relationship between Microsoft and Anthropic than was previously reported. Microsoft said in
their blogpost announcing Copilot Cowork
:
Copilot Cowork runs within Microsoft 365’s security and governance boundaries. Identity, permissions, and compliance policies apply by default, and actions and outputs are auditable. Cowork runs in a protected, sandboxed cloud environment, so tasks can keep progressing safely as you move across devices. This is what makes execution durable at enterprise scale.
Working closely with Anthropic, we have integrated the technology behind Claude Cowork into Microsoft 365 Copilot. It is this multi-model advantage that makes Copilot different. Your work is not limited by one brand of models. Copilot hosts the best innovation from across the industry and chooses the right model for the job regardless of who built it. This is a pattern of work that will only become more powerful as new models and ways of working emerge.
In fact, Copilot Cowork is not multi-model: it only works with Claude, and that is because Anthropic is demonstrating their own point of differentiation. Specifically, what makes Cowork work — and this applies to Claude Code and OpenAI’s Codex as well — is not just the model but also the harness, which is the software that understands how and when to use the model to accomplish specific tasks. Microsoft would surely love to be able to use any model to make Cowork function, because that would mean they could garner all of the margin from it; they can’t, however, because Anthropic has a point of integration that Microsoft can’t (yet) touch.
That gets to the most unknown aspect of this deal: what are the terms? On one hand, Microsoft is surely paying Anthropic a healthy margin, because Cowork is something Anthropic is uniquely capable of providing; on the other hand, Microsoft’s ability to incorporate Cowork into Work IQ and an enterprise’s cloud environment, and to do so at worldwide scale, is something that Anthropic has no hope of accomplishing for years if ever. Distribution still matters, and Microsoft is bringing that to bear in a major way.
Microsoft’s New Bundle
There’s one more paragraph appended to the excerpt from “Microsoft and Software Survival” I posted above:
There’s one big problem with this starting point, however: it’s shrinking. Owning and organizing a company by identity is progressively less valuable if the number of human identities starts to dwindle — and, with a per-seat licensing model, you make less money. That, by extension, means that Microsoft should feel a significant amount of urgency when it comes to fighting the adjacency battles I predicted above. First, directly incorporating more business functions into Microsoft’s own software suite will make Microsoft’s agents more capable. Secondly, absorbing more business functions into Microsoft’s software offering will let the company charge more. Third, the larger Microsoft’s surface area, the more power it will have to compel other software makers to interface with its agents, increasing their capability.
This relates to the other Microsoft news of the day; from
Bloomberg
:
Microsoft Corp. is launching a new bundle of workplace software with the aim of getting more people to use its artificial intelligence tools for the office. The E7 bundle will cost $99 per user per month — a 65% price increase from Microsoft’s previous flagship bundle. It will include a slew of widely used tools such as Word and Excel as well as the company’s Copilot AI assistant and a feature that lets administrators assess how AI is being used within their company…
Right now E7 includes everything in E5, plus Copilot and Agent 365. What I would expect to happen over the next few years is that more and more must-have features, even beyond AI (think governance and security), that might have been included in E5 will only be available in E7; Microsoft will argue that it is worth it because E7 includes the capabilities to make employees more productive and, ultimately, to need fewer employees. That last point is obviously a problem for a per-seat licensing model (which E7 still is), which is why the price is going to be steep. At the same time, as the deal with Anthropic shows, Microsoft is very well-positioned to bring other software makers into their ecosystem, making their agents particularly valuable.
What is clear is that Microsoft is not going to be burdened by “not-built-here” syndrome, one of the company’s longest-running afflictions. Yes, these announcements are, in broad strokes, about commoditizing complements; Cowork, however, is the announcement that truly mattered, because it’s the functionality that is going to be Microsoft’s strongest argument that this price increase is worth paying, and it’s functionality that is not commoditized: Microsoft might want to not need OpenAI, but they do, for now, need Anthropic and their integration of model and harness.
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