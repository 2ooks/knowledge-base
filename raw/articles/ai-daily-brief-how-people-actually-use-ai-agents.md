# How People Actually Use AI Agents
**Source:** https://aidailybrief.beehiiv.com/p/how-people-actually-use-ai-agents
**Date:** 2026-02-20
**Author:** AI Daily Brief
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

0
The AI Daily Brief
Posts
How People Actually Use AI Agents
How People Actually Use AI Agents
February 19, 2026 · Episode Links & Takeaways
AI Daily Brief
February 19, 2026
▶ Listen to the episode
HEADLINES
Gemini Now Generates Music with Lyria 3
Google's continuing quest to have AI products in every multimodal category now includes music. Lyria 3 is the latest version of DeepMind's music generation model, now available directly in the Gemini app — generating 30-second clips from text, images, or video inputs with lyrics in 8 languages and custom cover art from Nano Banana. It's also being added to YouTube's Dream Track for shorts soundtracks. Previous versions were only available through Google Cloud's Vertex platform, so this is a big expansion in access. The 30-second limit is significant — the model can't really build on the initial generation, so it won't be useful for full songs. Google seems to know exactly what this is, writing: "The goal of these tracks isn't to create a musical masterpiece, but rather to give you a fun, unique way to express yourself." While it would be tempting to compare this to Suno, the early discourse confirms this is not Suno — Suno's generations feel much more polished and musically complex. This is really more of a social feature than anything else, and Google is doubling down on that fun, interactive mode. Aaron Upright captured the bigger picture: "People talking about OpenAI vs. Anthropic, and Gemini just over here quietly getting more powerful. People underestimate the importance of an easily accessible multimodal platform when it comes to adoption."
Google Blog
A new way to express yourself: Gemini can now create music
TechCrunch
Google adds music-generation capabilities to the Gemini app
Engadget
Gemini can now generate a 30-second approximation of what real music sounds like
Claude OAuth OpenClaw Controversy
Less Than It Seemed, But Revealing
A change in Anthropic's terms of service triggered a tinderbox of complaints from OpenClaw users. The new policy stated that using OAuth tokens from Claude Free, Pro, or Max accounts in any other product, tool, or service — including the Agent SDK — "is not permitted." Alex Finn got right to the bottom line: "This is going to piss off a LOT of OpenClaw users paying $200 a month." Hubert Lepicki was harsher: "Anthropic is in an active self-destruction mode." Anthropic's Thariq Shihipar quickly clarified it was a docs cleanup causing confusion — personal tinkering is fine, the intention is to force third-party businesses to pay through the API. Unfortunately the confusion only continued with that unclear clarification. Felix Jauvin begged: "Brother, can you just tell us whether we can use OpenClaw or not?" The answer seems to be yes for personal use. Some tried switching providers only to find Google had already banned OAuth for this use case — Richard Holcomb called getting banned by Google "a rite of passage." Colin Darling offered perspective: "Everyone upset about Anthropic's update to their terms would be wise to read the OpenAI and Google Gemini terms while they're at it. Anthropic is late to this party, not leading it." The controversy faded fast, but there's a lingering question about walled gardens and what they'll mean for AI going forward.
Thariq Shihipar (X)
Anthropic’s Clarification
Colin Darling (X)
Anthropic is late to this party
Richard Holcomb (X)
Google Actually Banning OAuth
Meta Revives Smartwatch
More news in the AI wearables category. Meta has revived plans for a smartwatch as part of their AI device lineup. The original "Project Malibu" started circulating in late 2021 with leaked photos of a prototype featuring two cameras and nerve-signal reading capabilities — that concept eventually fed into the haptic wristbands for the Orion smart glasses prototype. By summer 2022, the watch was killed off. Now The Information reports "Malibu 2" is back, with health-tracking features and a built-in Meta AI assistant, planned for release this year. Executives are reportedly concerned about a bloated AR glasses product lineup, so they've delayed some products to focus on concentrated bets — including the new watch, an updated Ray-Ban display this year, and AR glasses potentially in 2027. Earlier this week we covered Apple's trio of AI wearables; that report noted a camera-equipped Apple Watch was passed over because testers found clothing sleeves obscured the camera. We don't know exactly how Meta is thinking about Malibu 2, but they're very clearly focused on the wearable category as a home for their AI strategy.
The Information
Meta Revives Plan for Smart Watch, Targets 2026 Launch
Tom's Guide
Anthropic is late to this party
Bloomberg
(2022) Meta Halts Development of Apple Watch Rival with Two Cameras
Grok Heavy Goes to 16 Subagents
Hot on the heels of the Grok 4.20 public beta, xAI has announced a new version of Grok Heavy — and this one goes to 16. The 4.20 beta featured 4 subagents debating responses; opinions were mixed on whether that was actually useful, but it's an interesting experiment if nothing else. Grok Heavy turns the count all the way up to 16 in a bid to either get better answers or at least burn through a ton of tokens getting there. xAI community promoter Tetsuo shared an output from "How does chaos birth cosmic order?" — the agents debated for a little over a minute, then delivered a 700-word report with almost 900 references. It's difficult to judge accuracy from such a subjective question, but the output has a ton of detail. If nothing else, these continue to be interesting experiments worth watching.
Elon Musk (X)
Grok 4.20 Heavy announcement
Tetsudo (X)
Grok Heavy demo & breakdown
Tetsudo (X)
Test Prompt: "How does chaos birth cosmic order?"
Chinese Models Benchmaxxing
Lindy founder Flo Crivello shared a thread about the persistent gap between Chinese models on benchmarks and in practice. He wrote: "By far our biggest cost at Lindy is inference, so believe me when I say we've looked at these models very closely. Every time we've evaluated them, we found the same thing — their real-life performance for agentic behavior falls extremely short of what they show on evals." Crivello's diagnosis: the labs are distilling frontier models (leading to "shallow" intelligence), training for evals, and potentially stealing weights. "It's delusional to think they're actually at Sonnet/Opus level — they're still at least one generation behind. Take the evals with a huge grain of salt." That lesson applies beyond Chinese labs — whenever you see high benchmarks from any new model, you've got to dive in and test them yourself.
Flo Crivello (X)
Chinese benchmaxxing thread
MAIN STORY
How People Actually Use AI Agents
Anthropic published a study called "Measuring AI Agent Autonomy in Practice" that, while nominally about autonomy, is really a profile of how people are actually using AI agents today. The comparison point is the METR study — the chart everyone's seen — which measures what models are capable of in an idealized setting with no human interaction and no real-world consequences. That's not how people actually use agents. To understand practice, one of the best places to look is Claude Code, which many argue is better thought of as a codeable general-purpose agent than a coding tool per se. And after reading this study, it feels like a portrait of a changing market — more tasks moving outside of coding, more agentic work being done by non-engineers, and autonomy shaped not just by model capability but by the entire human-interactive context.
Anthropic
Measuring AI agent autonomy in practice
Anthropic (X)
Announcement Thread
Min Choi (X)
Study Summary Thread
STUDY FINDINGS
The 99.9th Percentile — From 25 Minutes to 45 Minutes in 3 Months
"Smooth across model releases, suggesting autonomy is not purely a function of model capability."
At the 99.9th percentile, turn duration jumped from under 25 minutes to over 45 minutes between October and January (Sonnet 4.5 through Opus 4.5). The increase is smooth across model releases — one of the big themes of this research. You have to think beyond just the model to the entire context, including the human-interactive layer. Then in the last six weeks, a slight dip back to ~40 minutes. Two theories: over the holidays, people had broader exploratory projects for hobbies; when they came back, work tasks were more tightly circumscribed. Second, the Claude Code user base doubled in that period, bringing a more diverse (and less power-user-heavy) distribution.
Jake Eaton (X)
Chart of 99.9th percentile turn duration
Trust Is Earned — New Users vs. Power Users
“Human in the loop first, then human on the loop."
New Claude Code users use full auto-approval about 20% of the time; that roughly doubles to 40% by 750 sessions. It looks like steady accumulation of trust. But experienced users also interrupt Claude almost twice as often (9% vs. 5%). That's not contradictory — it's calibrated trust. They give longer leashes but pull back harder at specific moments. Part of it might just be that new users approve each action, so there's less need to interrupt; when experienced users give auto-approval more liberally, there's more context for stepping in. But there may also be learned experience — more honed instincts for when intervention matters. Think of AI as a junior employee: it earns trust over time (the 20% to 40% shift), but as you get more comfortable, you check in on work more actively rather than just waiting to see the end product.
Claude Asks for Help More Than Humans Interrupt It
"The gap increases alongside task complexity."
On high goal-complexity tasks, humans interrupted Claude 7.1% of the time while Claude asked for clarification 16.4% — more than double. On minimal complexity, the gap was much smaller (5.5% vs. 6.6%). The reasons differ: humans interrupt primarily to provide missing context or corrections (32%), or because Claude is slow/hanging (17%). Claude stops itself most often to present a choice between different approaches (35%) — which isn't really a knock on autonomy but a way to better align with humans upfront. It could theoretically make the decision itself, but it chooses to check.
Model Capability Still Matters
"As the models get better, users grant more autonomy and need to intervene less."
This isn't a static number. From August to December, as Claude Code's success rate on users' most challenging tasks doubled, the average number of human interventions per session decreased from 5.4 to 3.3. Model improvements translate directly into more autonomy in practice.
Where Agents Are Actually Being Used
"More than 50% of agentic use cases are already outside software engineering."
Software engineering represents about half of tool calls overall, which you'd expect given the Claude Code anchor. But the rest reads like a map of where agent automation comes next: back-office automation at 9.1%, marketing and copywriting at 4.4%, sales and CRM at 4.3%, finance and accounting at 4.0%. Even at this early stage with coding as the clear breakout, the majority of agentic work is already non-coding.
The Capability Overhang and What Comes Next
"Real-world AI agents are currently given much less autonomy than they could technically handle."
David Hendrickson pointed out the most surprising finding: agents have far more capability than users actually deploy. We had to go to the 99.9th percentile to see what Claude can really do, despite the average turn lasting just 45 seconds. That's yet another example of the capability overhang in practice. Yang Risu reframed the lens: "Autonomy is not just steps taken — it is permission, scope, and ability to change state." The question looking ahead: will the next set of developments focus on improved human-agent interactions, or a totally different paradigm of long-duration autonomy? OpenAI's Sherwin Wu argued in a recent podcast with Lenny that the next leap isn't smarter models but agents dispatched for 6+ hours of independent work. Right now, that certainly isn't how people use these tools — but things are evolving fast.