# 🎙️ How I AI: Quests, token leaderboards, and the elite AI adoption playbook & Notion’s spec-driven development
**Source:** https://www.lennysnewsletter.com/p/how-i-ai-quests-token-leaderboards
**Date:** 2026-05-11
**Author:** Lenny Rachitsky
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

How I AI
🎙️ How I AI: Quests, token leaderboards, and the elite AI adoption playbook & Notion’s spec-driven development
Your weekly listens from How I AI, part of the Lenny’s Podcast Network
Lenny Rachitsky
May 11, 2026
250
4
Share
Quests, token leaderboards, and a skills marketplace: The elite AI adoption playbook | John Kim (Sendbird)
Brought to you by:
WorkOS
—Make your app enterprise-ready today
ThoughtSpot
—Build AI-powered analytics into your product
John Kim
is the co-founder and CEO of Sendbird. In this episode, John shares how his marketing team built a live swag store with Stripe integration without engineering support, why he tracks every token spent across the org, how he identifies “AI Gods” inside the company, and why the future of work belongs to people with curiosity, agency, and energy, not just years of experience.
Biggest takeaways:
The most successful AI transformations treat internal tooling as a product, not a program.
John built the “Automators” platform—a gamified internal marketplace where anyone can create a “quest” (a request for automation or tooling), and engineers or AI agents can pick it up and build it. Each quest shows the risk level, weeks saved, and who benefits. People earn experience points for completing quests, which they can exchange for gift cards, tea with executives, or the chance to present their work to the entire company at Wednesday standups. This isn’t a top-down mandate but a product that makes AI adoption fun, measurable, and rewarding.
When you give creative teams builder capabilities, they’ll create things that would never make it onto a traditional product roadmap.
John’s marketing team built a fully functional e-commerce swag store with Stripe integration, custom designs, and even a Konami Code Easter egg that unlocks secret conference details. In the old world, this would have required two sprints of engineering time and probably would have been deprioritized. Now it shipped in days, delights customers, and generates actual revenue.
The biggest unlock for non-technical builders is creating secure, compliant templates they can build on top of.
John’s team created app templates where authentication, environment setup, databases, and security are pre-configured and vetted by InfoSec. Marketers, salespeople, and CSMs just extract the template and build their idea on top. This removes the biggest barrier to non-engineers shipping to production: the fear of doing something wrong or insecure.
Measure token usage without shame, and create tiers that make it aspirational.
John created five tiers: Beginner (under 1M tokens/day), Intermediate, Expert, Architect, Catalyst, and AI God (over 100M tokens/day). Every manager can see where their team members are and tailor enablement accordingly. This isn’t about performance reviews; it’s about bringing people along the journey and making AI fluency visible and celebrated.
The goal isn’t just to use AI during work hours but, rather, to smooth the curve so AI works around the clock.
John monitors token usage over time and looks for smoothness in the curve. Dips mean people are on weekends or vacation and AI isn’t working. When the curve smooths out, it means AI partners are working 24/7. This is a fundamentally different vision: not just augmenting human work, but having AI fill the gaps when humans aren’t available.
Build a cross-functional AI task force that meets weekly to unblock challenges.
John created a role called AI Engineer for Internal Operations that reports directly to him and the chief of staff. This person works cross-functionally with the CTO, engineering, and InfoSec to vet tools, set up compliant tech stacks, and remove barriers. They meet weekly as a task force to discuss what’s blocking people and how to enable faster iteration.
The most important hiring criteria for AI-first companies are curiosity, agency, and energy—not tenure or experience.
John rewrote job descriptions to optimize for people who are curious, willing to go deep, and figure things out on their own. He lowered the bar on years of experience and raised the bar on learning ability. In a world where you can build a custom learning center for any topic in 20 minutes, the constraint isn’t access to knowledge; it’s the drive to learn.
Start with your champions, not your skeptics.
John’s advice to CEOs struggling with AI adoption: find the people in your organization who are already curious and have agency. Make them the champions. Give them the spotlight. Let them share their work at all-hands meetings. Build energy around their stories. Innovation doesn’t start from theoretical structures—it starts with people who have energy and a story to tell. Once others see what’s possible, adoption spreads organically.
Leadership has to model the behavior, not just mandate it.
The top token consumers at Delight.ai are the executives. When leaders show up with new capabilities and ship things faster, it signals to the team that this is real and important. John also does one-on-ones with people who aren’t using tokens: “We noticed you haven’t been spending any tokens. Can we help you? What’s stopping you?” This combination of top-down modeling and bottom-up support is what drives transformation.
Blog & detailed workflow walkthroughs from this episode:
How I AI: John Kim’s Playbook for AI Transformation with Quests, Skills, and ‘AI Gods’:
https://www.chatprd.ai/how-i-ai/john-kims-playbook-for-ai-transformation
↳
How to Create an Internal AI Marketplace to Crowdsource Automations:
https://www.chatprd.ai/how-i-ai/workflows/how-to-create-an-internal-ai-marketplace-to-crowdsource-automations
↳
How to Build a Personal AI-Generated Learning Center on Any Topic:
https://www.chatprd.ai/how-i-ai/workflows/how-to-build-a-personal-ai-generated-learning-center-on-any-topic
↳
How to Automate Personal Knowledge Management with an AI ‘Gardener’:
https://www.chatprd.ai/how-i-ai/workflows/how-to-automate-personal-knowledge-management-with-an-ai-gardener
Spec-driven development: The AI engineering workflow at Notion | Ryan Nystrom
Listen now on
YouTube
•
Spotify
•
Apple Podcasts
Brought to you by:
WorkOS
—Make your app enterprise-ready today
Orkes
—The enterprise platform for reliable applications and agentic workflows
Ryan Nystrom
is a software engineer and engineering manager at Notion, where he works on Notion AI, Custom Agents, and internal systems that help engineers move faster with less busywork. He joined Notion after the company acquired Campsite, the team communication platform he co-founded. In this episode, Ryan shares how his team automates standup prep, ships PRs from a single Notion comment, uses specs as the new source of truth, and why fast CI is becoming essential for AI coding agents. He explains why engineering managers should still write code, how AI is changing meetings, and why great developer experience matters more than ever.
Biggest takeaways:
Never prep for standups again by auto-generating meeting notes from all your workstreams.
Ryan’s Notion AI agent pulls from Slack conversations, closed tasks, merged PRs, telemetry metrics, and yesterday’s meeting transcript to create a comprehensive pre-read every morning at 9 a.m. This transforms standups from rote status updates into high-bandwidth problem-solving sessions where the team spends 100% of their time on decisions, blockers, and next steps instead of “I did this thing yesterday.”
Fast CI is the mathematical limit on your AI coding velocity.
If your CI takes an hour to run, your agents sit idle for an hour waiting for test results. If it takes three minutes, you can run 20x more iterations in the same time frame. Ryan’s team is aggressively cutting Notion’s CI to 25% of current time specifically to unlock agent productivity—because agents don’t get tired, don’t sleep, and can work in parallel across VMs if your infrastructure supports it.
Background agents that ship PRs from Slack mentions eliminate context switching.
Ryan’s “Boxy” system lets him @mention Codex from a Notion task, and 20 minutes later he gets back a PR with implementation, screenshots of UI verification, and a preview URL. This morning a friend texted him a feature request; Ryan wrote four sentences and dropped a screenshot in a Notion task, mentioned Codex, and had a shipped PR before lunch. No IDE, no local environment, no context switch.
Specs as source of truth beats code as source of truth for AI-powered development.
Notion engineers now maintain Markdown spec files in their repo that describe features in plain English with code pointers and verification steps. When they need to update a feature, they update the spec and point Codex at it—the agent implements everything, runs verification, and ships. The spec’s version history becomes the changelog, and non-technical stakeholders can actually read it.
“Yap your spec” is a legitimate development workflow now.
Ryan opens Whisper, talks through how a feature should work, gives that transcript to Codex with examples of other specs, and gets back a comprehensive technical document. This is faster than writing and more thorough than typing because you naturally explain edge cases and context when speaking that you’d skip when writing bullet points.
Make AI defend its technical decisions.
When Codex suggests a change Ryan doesn’t understand, he doesn’t ask, “Are you sure?” He says, “You’re wrong; defend your argument with evidence.” This forces the model to provide cited reasoning instead of just agreeing with whatever the human says. This is especially critical when working on infrastructure you don’t fully understand—you need the AI to teach you, not just comply.
The era of the hard skill means engineering leaders should write code again.
Ryan manages six people and writes code daily. He works until the minute standup starts without prep because AI handles meeting notes. He ships features from his phone on the subway. The AI tools have eliminated so much meeting prep and information synthesis work that managers can be hands-on again—and in Ryan’s opinion, line managers should be writing code, fixing bugs, and staying close to the work.
Changing your tools constantly is energizing, not exhausting, when you’re learning.
Ryan changed IDEs, terminals, and workflows more than 10 times in the past year. Instead of feeling chaotic, it feels fresh and joyful. He’s working faster and harder than ever, but in a good way—because he’s experimenting, learning, and building instead of maintaining the same workflow he’s used for over 12 years. The pace of change is the point.
Good developer experience for humans creates good developer experience for agents.
Ryan’s team built comprehensive CLI tools, clear documentation, and fast CI long before AI agents. Now those same investments make agents more successful—they can verify their own work, follow blessed paths, and iterate quickly. This creates a virtuous cycle: DX investments help agents, and agent infrastructure (like cloud dev environments) helps humans too.
Blog & detailed workflow walkthroughs from this episode:
How I AI: Ryan Nystrom’s 3 Notion Workflows for Engineering Velocity:
https://www.chatprd.ai/how-i-ai/ryan-nystrom-notion-workflows-for-engineering-velocity
↳
Implement Features Using Spec-First Development and an AI Coding Agent:
https://www.chatprd.ai/how-i-ai/workflows/implement-features-using-spec-first-development-and-an-ai-coding-agent
↳
From Notion Task to GitHub Pull Request in 20 Minutes with a Coding Agent:
https://www.chatprd.ai/how-i-ai/workflows/from-notion-task-to-github-pull-request-in-20-minutes-with-a-coding-agent
↳
Automate Daily Standup Preparation with a Custom Notion AI Agent:
https://www.chatprd.ai/how-i-ai/workflows/automate-daily-standup-preparation-with-a-custom-notion-ai-agent
Claude Code just got WAY more powerful
Claire breaks down the biggest announcements from Anthropic’s “Code with Claude” event and what they actually mean for builders shipping AI products today.
Listen now on
YouTube
•
Spotify
•
Apple Podcasts
If you’re enjoying these episodes, reply and let me know what you’d love to learn more about: AI workflows, hiring, growth, product strategy—anything.
Catch you next week,
Lenny
P.S. Want every new episode delivered the moment it drops? Hit “Follow” on your favorite podcast app.
250
4
Share
Previous
Next