# The Perils of the AI Exponential
**Source:** https://aidailybrief.beehiiv.com/p/the-perils-of-the-ai-exponential
**Date:** 2026-02-23
**Author:** AI Daily Brief
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

0
The AI Daily Brief
Posts
The Perils of the AI Exponential
The Perils of the AI Exponential
February 24, 2026 · Episode Links & Takeaways
AI Daily Brief
February 23, 2026
▶ Listen to the episode
HEADLINES
Happy Birthday, Claude Code
Claude Code turned one this weekend, and Anthropic threw a birthday party to celebrate. It's incredible how far things have come — a year ago, agentic coding was a fascination, something quirky that might help non-technical people build fun apps but was clearly too unreliable for production. Now it's disrupting the software industry and infiltrating every area of work. For Anthropic, what started as a side project from developer Boris Cherny has become the central pillar of their strategy, generating $2.5B in ARR. Cherny recalled Dario asking in the early days, "Hey, are you forcing engineers to use this? Why is everyone using it?" All he had to do was make it available, and everyone voted with their feet. Looking ahead, Cherny believes "coding will be generally solved for everyone" — it's practically solved for him already.
Boris Cherny (X)
Claude Code birthday post
Bloomberg
The Surprise Hit That Made Anthropic Into an AI Juggernaut
Boris Cherny (YC Interview)
"Coding is practically solved today… for me"
Anthropic
API tool call analysis — nearly half are software engineering
Claude Code Security Crashes Cybersecurity Stocks
Anthropic unveiled Claude Code Security on Thursday — a plugin that scans codebases for vulnerabilities. Friday saw CrowdStrike lose 8%, Okta lose 9%, and Cloudflare lose 7%. The thing is, Claude Code Security doesn't even overlap with what these companies do. It audits internal code; Cloudflare and CrowdStrike protect against external cyberattacks; Okta does two-factor authentication. But this isn't really about the specific catalyst — it's part of a broader repricing of how to value software when the landscape is shifting this quickly. As Bucco Capital put it, "maybe you shouldn't pay 25x revenue when the landscape is shifting this quickly."
Anthropic
Making frontier cybersecurity capabilities available to defenders
Bloomberg
Cyber Stocks Slide as Anthropic Unveils Claude Security Tool
The Information
Anthropic's New Security Tool Sends Cyber Stocks Reeling
Kenton Varda (X)
"LOL at investors who think all forms of security are fungible"
Bucco Capital (X)
"Maybe you shouldn't pay 25x revenue"
Stay Sassy (X)
"Can Anthropic publish a blog post about replacing 4-bed homes?"
GPT-5.3 Rumored for This Week
Google, Anthropic, and xAI have all thrown new models on the pile recently, which means it's about time for OpenAI. The latest rumor is that GPT-5.3 — internally codenamed Garlic and the focus of Altman's Code Red push from December — drops Thursday. Dan Mac's rumor thread claims it surpasses human baseline on SimpleBench and is "a GPT-3 to GPT-4 moment again." Even if it's a big change, expect it to still be called 5.3 given how burned OpenAI has been with bigger naming conventions.
Dan Mac (X)
GPT-5.3 rumor thread — "This could be the big one"
I Rule The World MO (X)
"Heard from separate sources this is accurate — start preparing for a big week"
OpenAI Forecasts $282B Revenue by 2030 — and $665B in Cash Burn
The Information got OpenAI's latest investor projections: $282.5B in revenue by 2030 (27% above prior forecasts), with this year expected at $30.1B. But costs are surging — inference costs quadrupled last year, compressing margins from 40% to 33%, and training spend is expected to hit $32B this year and $65B in 2027. Total training costs through 2030: $440B. Weekly active ChatGPT users hit 910M, short of the billion-user target. Last week's Epoch AI chart had Anthropic on pace to overtake OpenAI in revenue by mid-year — which maybe explains why Dario and Sam wouldn't hold hands in India.
The Information
OpenAI Boosts Revenue Forecasts, Predicts $111 Billion More Cash Burn Through 2030
OpenAI's Device Plans Take Shape
OpenAI's financials forecast $1.3B in hardware revenue next year — and new reporting shows how they plan to get there. A 200-person team is working on a family of devices including a smart speaker ($200-$300, camera-equipped, no screen), possibly smart glasses and a smart lamp. The smart speaker would use facial recognition for purchases and observe users without a wake word. Notably absent: the behind-the-ear "Sweetpea" device. Design is being led from a separate office near Jony Ive's studio, and some staffers have complained that LoveFrom is slow to revise designs. Basically, assume every object you interact with is being tested for its AI device potential.
The Information
OpenAI Plans to Price Smart Speaker at $200 to $300
MAIN STORY
The Perils of the AI Exponential
The METR chart — the so-called Moore's Law for AI agents — has been updated with Opus 4.6 and GPT-5.3-Codex, and the results have sent shockwaves through the AI and investment communities. Combined with a viral research note from Citrini on "The 2028 Global Intelligence Crisis," we're watching a real-time case study of the moment we're in: a broad-based sense that something very big is happening, accelerating faster than expected, with nobody quite sure what comes next.
THE MOST IMPORTANT CHART IN THE WORLD
Background: Why This Chart Matters
By the end of last year, as the bubble narrative took hold, many were calling this the most important chart in the economy — the bulwark holding back the full tide of AI bubble-pop narratives.
METR's continuous study measures the longest time-horizon tasks an AI agent can handle. First released in March 2025 (when Sonnet 3.7 was state of the art), it found task time horizons were doubling every ~7 months, accelerating to as fast as 3 months. Crucially, this isn't how long an AI can continuously work — it measures how difficult a problem an agent can solve, benchmarked against human engineer completion times. A 50% success rate is the standard threshold; not production-grade, but a consistent gauge of relative improvement.
METR Blog
Measuring AI Ability to Complete Long Tasks
METR (X)
Original METR study post (March 2025)
The New Results: "Going Vertical"
Opus 4.6 has more than tripled the time horizon of 4.5, implying time horizon is now doubling every one and a half months.
GPT-5.3-Codex hit 6.5 hours (exceeding Opus 4.5's 4h49m). Opus 4.6 hit 14.5 hours — the largest generational jump in the study's history. For context, GPT-5.1-Codex in November managed just 2h40m. Swyx had already flagged after the Opus 4.5 result that the curve fit "was probably wrong and needs to be restarted as a new epoch."
METR (X)
Opus 4.6 results — 14.5 hour time horizon
METR (X)
GPT-5.3-Codex results — 6.5 hour time horizon
The Caveats Are Real
You can caveat this all you like — it's still really meaningful that Opus 4.6 saturated a task set METR didn't think would be saturated for under a year.
METR themselves heavily caveated the results. Opus 4.6 has basically saturated their task set — the upper confidence interval is 98 hours, practically infinite. Researcher David Rein warned that with a slightly different task distribution, they could have measured 8 hours or 20 hours. Dean Ball noted this isn't strong evidence of a "radically faster progress regime" by itself, though it clearly signals nothing is decelerating. The key synthesis: it's possible something massive is happening AND some people are mistakenly thinking it's even bigger than it is — but that doesn't mean it's not very, very big.
David Rein, METR (X)
"When we say extremely noisy, we really mean it"
Peter Wildeford (X)
"The METR graph is going vertical — projecting 2-3.5 workweek time horizons by end of year"
Visimo-dino (X)
"Something massive is happening — and some people think it's even bigger than it is. But it's still very, very big."
The Citrini Piece: "The 2028 Global Intelligence Crisis"
What's more interesting than the particulars of the piece is the response it's getting — this is confirmation bias meeting genuine fear.
Citrini Research — a well-regarded thematic research firm on fintwit — published a piece that essentially takes Dario Amodei's "country of geniuses in a data center" concept and applies it to the real economy. The thesis: capital owners reap massive benefits while workers across every stratum are left jobless; economic activity transforms from household-based to capital-based; stock market collapse and mass unemployment follow. We've heard versions of this before (Situational Awareness, AI 2027), but previous reports were met with skepticism. This time, investors already believe some version of this thesis, so Citrini is acting as confirmation.
Citrini Research
The 2028 Global Intelligence Crisis
Felix Jauvin (X)
"Smashes the common knowledge game — everyone knows everyone knows"
Unemployed Capital Allocator (X)
"The final boss of hysteria is entering the arena"
The Pushback
We are desperately in need of the non-doomer version of the Citrini piece.
Dan Hockenmaier argued the piece shows a "profound lack of understanding of how marketplaces work" — building a liquid marketplace with optimized supply is the hard part, not building the app. Economist Guy Berger questioned internal consistency: if agents are making money for capital owners, why isn't that fueling employment, GDP, and stock prices? These are valid critiques, but the bigger picture is what matters: the story of early 2026 is a broad-based sense that something very big is happening, coding capabilities have increased dramatically, agents are a real force beyond software engineering, and markets are repricing as a consequence. It doesn't seem like it's going to slow down.
Dan Hockenmaier (X)
"This piece shows a profound lack of understanding of how marketplaces work"
Guy Berger (X)
"Interesting read but not internally consistent"
Deedy Das (X)
$50B of Indian IT services market value eroded in 30 days
ALSO REFERENCED
→ Nic Carter (X)
"This is the most important chart in the world, and it's going absolutely ballistic"
→ Dan Mac (X)
"The world's most important graph has gone vertical — doubling time is now 2 months"
→ Bernie Sanders
mentioned the METR chart in a recent talk at Stanford
→ Epoch AI (X)
Chart showing Anthropic on pace to overtake OpenAI in revenue