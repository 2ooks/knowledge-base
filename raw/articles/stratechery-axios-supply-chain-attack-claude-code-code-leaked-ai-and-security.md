# Axios Supply Chain Attack, Claude Code Code Leaked, AI and Security
**Source:** https://stratechery.com/2026/axios-supply-chain-attack-claude-code-code-leaked-ai-and-security/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2F4aW9zLXN1cHBseS1jaGFpbi1hdHRhY2stY2xhdWRlLWNvZGUtY29kZS1sZWFrZWQtYWktYW5kLXNlY3VyaXR5LyJdfSwiZXhwIjoxNzgyMjc2NzcwLCJpYXQiOjE3Nzk2ODQ3NzAsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIHBvZGNhc3QgcnNzIiwic3ViIjoiZTVkNDRhNjQtY2E1OC00NzFkLTlmYTMtOWM5MDgxM2E4ODUwIiwidXNlIjoiYWNjZXNzIn0.Wwf0_oakLMWaF1fg0_ziGtKca2IvYkJuSaYvXIhEKPXAu9cjLo0btrLvkt-Pzj9FhmywjePL0Kf4idH-8x4Ux_H0C7WXD99a4_jUTUn_7WuTdIHdMjq60Oj1FPhH1FO_zOsdIUu9dlCtfB9o1LG2M29wVMYzgXilQH3w9_545yBCmDTR48wNWPGqudsTFCRGA4HX1vQ1Mqw_pFaUbQJtd5OUMI4j1PqjeXRrqI-3o94tA8tQdsGpz2b3wIK1pZOgEr1zppRsl8jw_RfOtlC7tr6BpLhAyCweIxIF59tTbCtpPtet-CTL__KFil_wifbDArgHhPLKTtZduw2o8bVfwg
**Date:** 2026-04-01
**Author:** Ben Thompson
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Good morning,
I’m back on a regular posting schedule after my on-again off-again spring break trip, which was back to Taiwan. This was really a working trip — the days off were for travel — and to that end,
last Thursday’s Sharp Tech
was actually recorded in Taiwan, and we had a proper mailbag episode, covering Sora, advertising, ChatGPT engagement farming, Formula 1, the NFL, and more.
On to the Update:
Axios Supply Chain Attack
From
Trend Micro
:
Axios, the JavaScript ecosystem’s most popular HTTP client with over 100 million weekly npm downloads, was compromised on March 30, 2026, weaponized as a delivery vehicle for a cross-platform remote access trojan (RAT). The attacker hijacked the lead maintainer’s npm account, published two poisoned versions across both the 1.x and legacy 0.x release branches within 39 minutes of each other, and injected a phantom dependency whose sole purpose was to deploy persistent malware on macOS, Windows, and Linux. The malware self-destructed after execution, replacing its own evidence with a clean decoy.
I’ve discussed supply chain attacks, specifically in the context of the Node.js package manager (NPM) ecosystem in
this 2022 Update
; I’m going to quote a fair bit, as it’s important to make my point:
My favorite npm story concerns
the is-even package
:
Notice that
is-even
has 1 dependency; let’s see what it is:
That’s right,
is-even
requires the download and installation of
is-odd
, just so that it can return the opposite answer (
is-odd
, naturally, has its own dependency:
is-number
).
Using
is-even
is, to be clear, the absolute height of laziness for any developer;
is-odd
is already pretty lazy, but if you have
is-odd
you already have
is-even
! And yet, as you can see,
is-even
has been downloaded 141,282 times this week alone. The fact of the matter is that many developers, because they are humans, default to the most convenient option — and if you’re a Node.js developer then using a freely available npm package is pretty darn convenient! Moreover, while this specific story is about npm and Node.js, package managers are a standard part of many open source programming environments, precisely because they are so convenient.
This convenience can, of course, be abused by malicious actors — attacking packages is called a “supply chain attack” — which is why companies generally maintain a private mirror of these packages for their applications; everything on these private mirrors is, at least in theory, fully vetted. In truth, though, it’s easy to let it slip, and hybrid feeds can be exploited; best practices include referencing one single private feed (instead of multiple), controlling scope via naming prefixes, and implementing client-side verification, including version pinning. Not everyone follows best practices though — it can be inconvenient!
The first key takeaway is the idea of dependencies;
VentureBeat has a very good Article explaining what happened to axios
:
The attacker took over the npm account of @jasonsaayman, a lead
axios
maintainer, changed the account email to an anonymous ProtonMail address, and published the poisoned packages through npm’s command-line interface. That bypassed the project’s GitHub Actions CI/CD pipeline entirely.
The attacker never touched the Axios source code. Instead, both release branches received a single new dependency:
plain-crypto-js@4.2.1
. No part of the codebase imports it. The package exists solely to run a postinstall script that drops a cross-platform RAT onto the developer’s machine.
The staging was precise. Eighteen hours before the
axios
releases, the attacker published a clean version of
plain-crypto-js
under a separate npm account to build publishing history and dodge new-package scanner alerts. Then came the weaponized
4.2.1
. Both release branches hit within 39 minutes. Three platform-specific payloads were pre-built. The malware erases itself after execution and swaps in a clean
package.json
to frustrate forensic inspection.
Note the part about not needing to touch source code; the attacker simply needed to add a dependency and anyone who downloaded the compromised
axios
package would also download the malware installer.
As an analogy, high-end department stores in Asia often give you some sort of gift along with a large purchase, whether you want it or not; I find this pretty annoying since I would rather pay less and not have an extra water bottle or frying pan or whatever (both presents that I have received!). In this case, anyone downloading
axios
— which itself is likely a dependency for something else — got an extra present whether they wanted it or not, but that present was a lot more dangerous than a frying pan!
This is actually the third major npm supply chain attack in the last year, and, as that VentureBeat article notes, GitHub has made significant changes in response to those previous attacks.
The Shai-Hulud worm hit in September 2025. A single phished maintainer account gave attackers a foothold that self-replicated across more than 500 packages, harvesting npm tokens, cloud credentials, and GitHub secrets as it spread. CISA issued an advisory. GitHub overhauled npm’s entire authentication model in response.
Then in January 2026, Koi Security’s PackageGate research dropped six zero-day vulnerabilities across npm, pnpm, vlt, and Bun that punched through the very defenses the ecosystem adopted after Shai-Hulud. Lockfile integrity and script-blocking both failed under specific conditions. Three of the four package managers patched within weeks. npm closed the report.
Now axios. A stolen long-lived token published a RAT through both release branches despite OIDC, SLSA, and every post-Shai-Hulud hardening measure in place.
npm shipped real reforms after Shai-Hulud. Creation of new classic tokens got deprecated, though pre-existing ones survived until a hard revocation deadline. FIDO 2FA became mandatory, granular access tokens were capped at seven days for publishing, and trusted publishing via OIDC gave projects a cryptographic alternative to stored credentials. Taken together, those changes hardened everything downstream of the maintainer account. What they didn’t change was the account itself. The credential remained the single point of failure.
Specifically, the maintainer had a long-lived classic token (which apparently hadn’t been revoked), which the attacker seized through
a social engineering attack on the maintainer
; this allowed them to bypass all of the security measures that GitHub put in place.
Claude Code Code Leaked
Again from
VentureBeat
:
Anthropic appears to have accidentally revealed the inner workings of one of its most popular and lucrative AI products, the agentic AI harness Claude Code, to the public. A 59.8 MB JavaScript source map file (.map), intended for internal debugging, was inadvertently included in version 2.1.88 of the
@anthropic-ai/claude-code
package on the public npm registry pushed live earlier this morning…
For Anthropic, a company currently riding a meteoric rise with a
reported $19 billion annualized revenue run-rate
as of March 2026, the leak is more than a security lapse; it is a strategic hemorrhage of intellectual property. The timing is particularly critical given the commercial velocity of the product. Market data indicates that Claude Code alone has achieved
an annualized recurring revenue (ARR) of $2.5 billion
, a figure that has more than doubled since the beginning of the year.
With enterprise adoption accounting for 80% of its revenue, the leak provides competitors — from established giants to nimble rivals like Cursor — a literal blueprint for how to build a high-agency, reliable, and commercially viable AI agent.
Anthropic confirmed the leak in a spokesperson’s e-mailed statement to VentureBeat, which reads:
Earlier today, a Claude Code release included some internal source code. No sensitive customer data or credentials were involved or exposed. This was a release packaging issue caused by human error, not a security breach. We’re rolling out measures to prevent this from happening again.
One of Claude Code’s dependencies, incidentally, is
axios
, which is an actual security breach (and has nothing to do with this code leak). This leak, meanwhile, does not include any actual model weights; rather, this is the harness that runs locally and leverages Anthropic models.
There is certainly valuable IP here, particularly for Claude’s competitors; no one can legally copy any of the code — it is copyrighted — but to the extent Claude Code contains any of Anthropic’s secret sauce in terms of a harness, this is very damaging. However, I continue to suspect that the most important differentiator is not just the harness but rather
the integration of harness and model
. In other words, the entities that will benefit the most from this are companies like Cursor and Microsoft who are trying to build their own harnesses for Claude, not necessarily OpenAI.
AI and Security
The most interesting part about Anthropic’s statement, however, was its attempt to emphasize that the cause was “human error”; I suspect the motivation was to alleviate suspicion that this mistake was downstream from vibe-coding with, well, Claude Code. And, for what it’s worth, I believe them.
What I also believe, however, is that (1) vibe-coding is going to lead to a lot of security issues in the near term, but (2) AI is going to lead to fewer security issues in the long-term. The fact of the matter is security is nearly impossible. There are so many potential or already-existent bugs in basically all software, for one, and even the most thoughtful security implementations end up having vulnerabilities that no one expected. And, on top of that, there is the fact that humans — like AI at times, to be fair! — are lazy and seek convenience, and security is almost always at odds with convenience. The
axios
incident demonstrates all of these issues.
AI is the answer to all of this. The truth is that all code needs to be examined for bugs, not just new code; AI is going to provide a way to examine everything that has ever been released (and yes, in the short-term, this is going to manifest as a host of new exploitable vulnerabilities). AI can also examine an entire dependency tree, which almost no human will. AI can navigate an extremely inconvenient but highly secure workflow, and can stress test every aspect of that flow — repeatedly — in a way no human can.
Make no mistake, getting here is going to be messy, and malicious actors are going to use AI to find vulnerabilities and exploit them as soon as they can. The truth, however, is that software is already messy and extremely hard to secure; that’s precisely why AI’s initial impact is going to be problematic as it helps bad actors do bad things. Ultimately, however, I do think there is a path to a better place once AI is in fact doing everything, particularly the things that humans can not or will not.
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