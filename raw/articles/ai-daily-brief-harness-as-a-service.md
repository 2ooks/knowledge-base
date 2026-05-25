# Harness-as-a-Service
**Source:** https://aidailybrief.beehiiv.com/p/harness-as-a-service
**Date:** 2026-05-01
**Author:** AI Daily Brief
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

0
The AI Daily Brief
Posts
Harness-as-a-Service
Harness-as-a-Service
April 30, 2026 · Episode Links & Takeaways
AI Daily Brief
April 30, 2026
▶ Listen to the episode
Sign up for AgentOS
, our latest free training course. It’s a platform and model agnostic program to help you build a personal agentic operating system that can evolve with you over time. The program is self-directed and project based, running over four weeks.
HEADLINES
Big Tech Earnings: AI Demand Is Unquestionable
Today is one of those rare days where the headlines are all around the same theme — big tech earnings. As Sherwood's Shay Boloor put it, hard to take the AI bubble argument seriously when some of the largest companies on earth are still putting up these growth numbers: Google Cloud +63% YoY, Microsoft Azure +40%, Meta revenue +33%, AWS +28%. The big takeaway: the AI boom is in full effect. Everything from memory chip foundries to data center construction is running at 100% in a frankly vain attempt to keep up with endless demand for tokens. This is categorically different from last year when analysts still had questions and AI optimists were betting on a forthcoming boom — that boom is now clearly here.
Bloomberg
AI Is Top of Mind as Big Tech Firms Report Earnings
Rihard Jarc (X)
YoY growth roundup across Google Cloud, Azure, Meta and AWS
Kobeissi Letter (X)
$12T in market cap between the big four heading into earnings
Google Wins the Night
Google was the clear winner on big tech earnings night, delivering huge beats across the board. Cloud grew 63% YoY with a $460B backlog (up from $240B at end of Q4), Gemini paid enterprise customers surged 40% quarter over quarter (meaning I may have to eat my hat rating Google as low as I did on enterprise in yesterday's lab rankings), and Google's infrastructure is now processing 16 billion tokens a minute, up 60% QoQ. Even search ad revenue grew 19% — the prevailing narrative was AI would cannibalize Google's core business, but the opposite is happening. Sundar Pichai told analysts AI is now the largest tailwind for cloud and that cloud revenue would have been higher if they could meet demand. CapEx guidance was nudged from $175-185B to $180-190B, but Q1 only annualized to ~$140B — the market read this as capital discipline and sent the stock up 7% overnight.
Bloomberg
Alphabet Sales Beat Estimates on Google Cloud, AI Customers
CNBC
Alphabet ups 2026 capex to as much as $190 billion, expects to 'significantly increase' in 2027
WSJ
Google Profit Jumps 81% as Cloud Business Booms
Joe Carlson (X)
Chart of Google Cloud's exponential backlog: "this is so crazy it literally looks fake"
Trond Wuellner (X)
Gemini paid enterprise customer growth chart
Chubby (X)
Argues Google has cracked the AI monetization thesis via search
Amazon and AWS Find Their Stride
Amazon's earnings were also extremely solid. Top line up 17% YoY, net profit up 77% (boosted by pre-tax income from their Anthropic investment, so that number says more about Anthropic than Amazon). AWS grew 28% — its fastest growth in nearly four years, coming out of the 12% low in 2023. The only hesitation was the costly buildout: Q1 CapEx was $43.2B, putting them slightly behind a $200B annual target pace and pushing free cash flow from $26B a year ago to $1.2B this quarter. Andy Jassy dismissed the concerns, noting most new supply is already spoken for — and with OpenAI now on AWS alongside Anthropic, that's a fairly safe bet. Jassy also boasted that Amazon's custom silicon (Trainium) is now one of the top three data center chip businesses in the world, with a hypothetical $50B ARR if it were standalone.
Bloomberg
Amazon Reports Higher Spending to Fuel Cloud Unit Sales
WSJ
Amazon Posts Double-Digit Growth Anchored by Booming Web Services
CNBC
Amazon's cloud unit reports 28% sales growth, topping estimates
Wall St Engine (X)
Jassy on Trainium demand and selling racks
The Transcript (X)
Jassy on custom silicon as a top three data center chip business
Quartr (X)
Jassy on Amazon being well positioned for "biggest inflections of our lifetime"
Shay Boloor (X)
"AWS is now a $152B ARR business growing 28% per year"
Signull (X)
On OpenAI being on Bedrock being a bigger deal than people realize
Microsoft's Perfectly Average Quarter
Microsoft has been in the middle space of the three big cloud giants — they didn't commit to aggressive growth like Google, opting for a more conservative AI CapEx strategy, and they have scale and incumbency disadvantages versus AWS. Azure grew 39%, right in line with expectations. CFO Amy Hood projected 40% Azure growth to continue into Q2 and lifted CapEx by $25B to $190B, attributing the entire increase to higher component prices rather than new projects. Copilot grew to 20 million paid enterprise seats (up from 15M in January), with Nadella noting weekly engagement is now at the same level as Outlook — but 20M is still a drop in the ocean compared to ~320M Office 365 paid seats. Gene Munster said before the call that Microsoft needed to make a statement that they have AI-powered products beyond Azure that customers must have — Nadella didn't deliver that statement, and the company continues to perform like a perfectly average tech stock.
Bloomberg
Microsoft Projects 'Modest' Cloud Acceleration Amid AI Jitters
WSJ
Microsoft Reports Strong Cloud Growth, but Questions About AI Returns Persist
CNBC
Microsoft calls for $190 billion in 2026 capital spending on soaring memory prices
Gene Munster (X)
Pre-call note that Microsoft needs to make a statement on AI products beyond Azure
Meta Posts a Record Quarter, Stock Tanks Anyway
Meta delivered another record quarter — $56.3B in revenue, up 33% YoY (their highest growth rate since 2021), with both top line and net income beating forecasts by a fairly significant margin. But CapEx got hiked again from $135B to $145B for the year, and Meta disclosed a quarter-over-quarter decrease in daily active people (the first decline since they started reporting it in 2019, blamed on internet disruptions in Iran and a WhatsApp restriction in Russia). CFO Susan Lee said Meta has consistently underestimated its compute needs. In any other year this would have been a blowout, but Meta was the biggest loser of earnings night — the market still hates the CapEx spend and sent the stock down 5% overnight. Jim Cramer summed it up: Meta did not offer enough reasons to spend the way that other companies did, they just told us they could do better with it.
WSJ
Meta Reports Big Revenue Jump and Projected Spending Increase
WSJ
Meta Stock Falls After-Hours Following Report of Higher CapEx
Jim Cramer (X)
"Meta did not offer enough reasons to spend the way the other companies did"
MAIN STORY
Harness-as-a-Service
Nominally today's topic is Cursor's new Cursor SDK — a platform where, as Cursor's Lee Robinson put it, you can build local hackable agents with any model or ship products on top of managed cloud agents. But it's actually part of a broader phenomenon. In the past few weeks alone we've seen OpenAI update their Agents SDK, Anthropic release Claude managed agents, and Microsoft release hosted agents in Foundry. None of these are the same product, but they're all playing in similar space. I'm proposing a new name for the category: Harness-as-a-Service — a new infrastructure category where companies sell access to their agent runtime, the engine that turns an LLM into something that can actually do work, the same way AWS sells access to compute and Stripe sells access to payment rails.
Cursor (X)
Cursor SDK announcement thread
Futurum Group
Cursor 3.2 Reframes the IDE as an Agent Execution Runtime
OpenAI
The next evolution of the Agents SDK
AGENT BUILDERS KIT
Three Phases of Agent Development
Weights, then context, now harness — each phase layered on the last.
"Aha" on Twitter wrote a nice summary of how the agent landscape has evolved. Phase one was weights — bigger models, more data, RLHF, fine-tuning. Phase two was context — prompt engineering, few-shot, chain of thought, RAG. The same frozen model could behave completely differently based on what was put in front of it. Phase three is the harness engineering phase, and the shift is fundamental: the question changed from what should we tell the model to what environment should the model operate in. The model now sits inside a harness that includes persistent memory, reusable skills, standardized protocols like MCP and A2A, execution sandboxes, approval gates, and observability layers. Each phase didn't replace the previous — it layered on top.
Sam Altman on Harness vs Model
"I no longer think of the harness and the model as entirely separable things."
In a recent Ben Thompson interview, Altman was asked how important the harness is to making agents actually work. He said it's hard to overstate how critical it is, adding that even he doesn't always know when he fires something off in Codex and it does something amazing how much credit goes to the model versus the harness. We now have two very different vectors of increasing AI capability — the underlying models, and improvements in the harness that surrounds them.
The OpenClaw Hobbyist Era
Like 1970s computer kits — for the few willing to solder it together.
Part of what made this year feel so different was an open harness — OpenClaw — even though no one was calling it that. But OpenClaw was not plug and play. You had to pick the model, write the system prompt, define the tools, wire the agent loop, manage context, handle errors, orchestrate sub-agents, store state, deploy and monitor it. Anders Carlson recently wrote on LinkedIn about a forgotten era of computing in the 1970s — between the Altair 8800 and the Apple II — when people interacted with computers by ordering a kit, soldering iron in hand, and assembling it themselves. The OpenClaw era of harnesses, in the ancient days of two and a half months ago, was structurally similar.
What Harness-as-a-Service Actually Is
You bring three things; everything underneath is handled.
With these new tools the agent loop is prebuilt, tool dispatch is prebuilt, sandboxing is prebuilt, streaming, error handling, context compression — all prebuilt and tuned by teams whose full-time job is making those layers excellent. You bring three things: which model you want, what tools the agent has access to, and what task you're handing it. This isn't a shift in scale, it's a shift in kind. Just like the PC era didn't destroy the hobbyists who liked control over components — the productivity revolution of the 1990s happened because users got Dell desktops, not because more people learned to assemble motherboards. That's the promise of this new phase. And the interesting twist: while these tools look on the surface like they're only for developers, because agents now handle the coding and infrastructure, the audience of people who can build with something like the Cursor SDK has expanded dramatically — including non-developers like me.
Mike Piccolo (X)
"The harness is the backend"
Kayvon Jafarzadeh (X)
On Cursor turning an "AI wrapper" into an actual moat
Gagan Saluja (X)
"Building a usable agentic IDE is years of harness work, not weeks of model fine-tuning"
Dan McAteer (X)
"The agent harness IS the platform"
Dan Shipper (X)
On the rise of "Codex-native, Cowork-native, Cursor-native" apps
Harnesses Change Model Performance
Same model, same week, two harnesses, two completely different results.
A new report from Endor Labs found that GPT-5.5 operating within Cursor's harness set a new record on their security correctness benchmark — 23.5%, narrowly beating the previous leader of Cursor + Opus 4.7 at 22.9%. Both were a few percentage points higher than Opus 4.7 in its native Claude Code harness or GPT-5.5 in its native Codex harness. The functionality test was even more stark: Opus jumped from 87.2% to 91.1% by switching to Cursor, while GPT-5.5 went from 61.5% to 87.2%. Alex Volkov from ThursdAI confirmed similar results on the WolfBench coding benchmark with an entirely different setup.
Endor Labs
GPT-5.5 Sets a New Code Security Record with Cursor, not Codex, in Agent Security League
Alex Volkov (X)
WolfBench AI results comparing harnesses
What People Are Already Building
Cursor agents in Gmail, in Chrome plugins, watching their own browser windows.
With the SDK just launching yesterday, people are already building MVPs. Jack Driscoll showed off a Cursor agent embedded directly into Gmail — share an email into chat, have the agent read the thread into context, edit code, fix problems, stream results back into the chat window. As he put it, the biggest difference is that the Cursor SDK isn't just calling an LLM with tools — it's exposing the same coding agent runtime Cursor already uses (repo context, edit, search terminal workflow, streaming status, model choice, locally hosted execution). Tejas Haveri built a bug-catching agent that works on his production code base and can see how the app is performing in its own browser window — a potentially big step toward fully autonomous coding agents, given that human verification is currently a massive bottleneck. Robert Bouschery embedded a Cursor agent in a Chrome plugin for IT triage, helping non-technical users dump code from the browser into a ticket instead of describing the bug and hoping for the best.
Jack Driscoll (X)
Demo of Cursor agent embedded in Gmail
Jack Driscoll (X)
On what makes the Cursor SDK different from a generic LLM-with-tools wrapper
Eric Zakariasson (X)
Roundup thread of MVPs being built on the SDK
Tejas Haveri (X)
Bug-catching agent that watches the app in its own browser window
Tejas Haveri (X)
"It's mainly about closing the feedback loop"
Robert Bouschery (X)
Cursor agent embedded in a Chrome plugin for IT triage
How to Try It (Even If You're Not a Developer)
Drop the cookbook into Claude or ChatGPT and see what unlocks.
If you want to check this out for yourself but you're not a developer, go to the Cursor announcement, click through to their GitHub cookbook, drop it into either Claude or ChatGPT (especially with context about your particular projects), and ask it to give you ideas for how this new harness-as-a-service product could change the way you build or think about something. Then when you realize it unlocks something you've been wanting to do forever, you have full permission to call in sick on Friday and dive all the way in.