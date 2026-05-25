# 🎙️ This week on How I AI: The internal AI tool that’s transforming how Stripe designs products
**Source:** https://www.lennysnewsletter.com/p/this-week-on-how-i-ai-the-internal
**Date:** 2026-05-04
**Author:** Lenny Rachitsky
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

How I AI
🎙️ This week on How I AI: The internal AI tool that’s transforming how Stripe designs products
Your weekly listens from How I AI, part of the Lenny’s Podcast Network
Lenny Rachitsky
May 04, 2026
254
2
Share
Demos not memos: How Stripe built their internal AI prototyping tool | Owen Williams
Listen now on
YouTube
•
Spotify
•
Apple Podcasts
Brought to you by:
Celigo
—Intelligent automation built for AI
Cursor
—The best way to code with AI
Owen Williams
is a design manager at Stripe who built Protodash, an internal AI prototyping tool that lets designers and PMs turn Stripe’s design system into clickable, production-quality prototypes in minutes. What started as a set of Cursor rules and React components has evolved into a full prototyping platform that runs in the browser, supports design reviews, and helps teams move from “memos” to working demos. In this episode, Owen shares how Protodash came together, why generic AI design tools often produce “blurple slop,” how PMs became the surprise power users, and what changes when teams can explore real product ideas before writing production code.
Biggest takeaways:
Protodash started as a bundle of Cursor rules, React components, and MCP integration—then evolved into a full web-based prototyping platform.
The first version was pragmatic: lower the barrier to entry so designers only need to know “npm run dev” and nothing else. Owen bundled Stripe’s design system components, created an MCP server for Sail, and wrote extensive Cursor rules that taught the AI how to use the project. If a user pastes a Figma link, check the Sail MCP server before writing code. If the MCP server is unavailable, don’t just imagine the design system. These rules came from months of iteration and pain points.
The biggest mindset shift for designers is not being afraid of the terminal anymore.
Owen’s background is engineering-based, and he always valued hiring technical designers who understood enough of the terminal to be dangerous. Pre-AI, that jump to technical competency was really hard. Now you can just ask Claude, “How does Git work?” and it tells you. You don’t even need to know the commands.
Generic AI prototyping tools don’t know your design system, and that creates “blurple slop.”
Owen was sitting in design reviews watching designers struggle with tools like v0 that produced uncanny-valley Tailwind prototypes. The nav would be off, fonts wrong, components mismatched. Stripe has a high quality bar and a well-defined design system called Sail, so Owen thought: these tools should know about our design system and construct dashboards from those building blocks reliably. That insight led to Protodash.
An equal number of PMs and designers now use Protodash, and that’s actually making designer-PM relationships better.
Owen’s first reaction when PMs started using it was nervousness—“Oh my goodness, PMs designing.” But it’s been thrilling to see PMs build things that look like Stripe in the right way, explore ideas earlier, and communicate better with their designers. Conversations shift from “Should we staff a designer on this project?” to “Here’s the actual work; let’s discuss how to make it better.” PMs can now unblock themselves, test ideas with users earlier, and advocate for design resources with real prototypes instead of abstract arguments.
Prototyping with data in code lets you push the edges of use cases in ways Figma never could.
Owen showed a dashboard with almost half a million dollars in gross volume—but what about the zero state? What about a company getting one transaction a day? What about different business models: startup versus enterprise? Before, getting all those states into a Figma file was a mess. Now you can just toggle between them. You can design more-interesting things and have them touch reality sooner.
The most valuable internal tools are the ones that match your company’s specific culture and workflows.
Owen points out that staffing internal-tools teams has always been hard, but now you can just build tools that evolve the way you work. Design reviews at Stripe have a tradition of sharing Google Docs with tables for feedback—so Owen built a design review mode where everyone can comment on the prototype, get an AI-generated summary, and send fixes directly to the AI.
Owen’s rules for working with AI: be specific up front, and as soon as you feel like swearing, slash clear and start again.
He has a content background and learned that being specific in the first prompt helps a lot. But the bigger lesson is avoiding sunk-cost fallacy. As someone who’s built a bunch of stuff, you get attached and think “surely I’ll get this to work.” Often just throwing it away and starting fresh is faster. If being loud didn’t work the first time, reset the context window.
Blog & detailed workflow walkthroughs from this episode:
Stripe’s Owen Williams on Killing ‘Blurple Slop’ with an Internal Prototyping Studio:
http://chatprd.ai/how-i-ai/stripe-owen-williams-on-buildling-internal-prototyping-studio
↳
How To Connect a Design System to an AI Code Editor for High Fidelity Prototypes:
https://www.chatprd.ai/how-i-ai/workflows/how-to-connect-a-design-system-to-an-ai-code-editor-for-high-fidelity-prototypes
↳
Streamline Design Reviews with an AI-Powered Prototyping Studio:
https://www.chatprd.ai/how-i-ai/workflows/streamline-design-reviews-with-an-ai-powered-prototyping-studio
↳
Build a Personal AI App to Track Purchases and User Manuals:
https://www.chatprd.ai/how-i-ai/workflows/build-a-personal-ai-app-to-track-purchases-and-user-manuals
254
2
Share
Previous
Next