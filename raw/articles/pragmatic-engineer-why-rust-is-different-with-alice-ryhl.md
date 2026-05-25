# Why Rust is different, with Alice Ryhl
**Source:** https://newsletter.pragmaticengineer.com/p/why-rust-is-different-with-alice
**Date:** 2026-05-20
**Author:** Gergely Orosz
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

The Pragmatic Engineer
Why Rust is different, with Alice Ryhl
93
4
1×
0:00
Current time: 0:00 / Total time: -1:04:59
-1:04:59
Audio playback is not supported on your browser. Please upgrade.
Why Rust is different, with Alice Ryhl
Alice Ryhl from Google’s Android Rust team explains why developers love Rust, and what makes the language so powerful for building reliable software.
Gergely Orosz
May 20, 2026
93
4
Share
Transcript
Stream the latest episode
Listen and watch now on
YouTube
,
Spotify
, and
Apple
.
See the episode transcript at the top of this page, and timestamps for the episode at the bottom.
Brought to You by
•
Antithesis
– if you write Rust code, check out
Hegel-Rust
: a free, open-source property-based testing library for Rust, built by the team behind Hypothesis. It’s now
maintained by Antithesis
. If you try Hegel and like it, your Hegel tests will run in
Antithesis
as written, as well.
•
Sentry
– application monitoring software built by developers, for developers. I’ve used Sentry for 10 years now, starting back at Uber. It shows you the full context on issues: stack traces, user actions, environment details, and more. A new, recent feature:
Seer
, their debugging agent — I like it!
Check out Sentry.
•
Craft Conference
: meet myself, Kent Beck, Hillel Wayne and other standout speakers on 4 June, in Budapest, Hungary, at the conference dedicated to the art and science of software delivery craft.
See details.
In this episode
Rust is one of the most admired programming languages around – and also one of the hardest to learn. What makes developers stick with it?
In this episode of The Pragmatic Engineer Podcast, I sit down with Alice Ryhl, a software engineer on Google’s Android Rust team, and a core maintainer of Tokio, which is the most widely-used async runtime in Rust.
We discuss what makes Rust different from other languages like TypeScript, Go, and C++, and why so many developers say that “once it compiles, it works.” We go deep into memory safety, ownership, borrowing, unsafe Rust, and Cargo.
We also cover how Rust is governed by RFCs, feature flags, its six-week release cycle, how engineers get paid to work on the language, and also look into how Rust’s use inside the Linux kernel is progressing.
My observations from the conversation with Alice
Here are 12 of my most interesting takeaways from talking with Alice:
1. Open source contributions can open career doors.
Alice landed her Google job not by sending in an application, but by spending years answering questions on Rust forums, and contributing to documentation and code. She also became a maintainer of Tokio while a college student. One day, an email arrived in her inbox, asking: “do you want to work on the Android Rust team?”
2. Reliability is the backend pitch for choosing Rust over TypeScript.
Alice is adamant that Rust is a backend language and not a TypeScript replacement on the frontend. Rust’s design for minimizing errors and maximizing reliability can make it a better choice than TypeScript on the backend.
3. Rust over C++ for development is a strong choice for avoiding a host of security vulnerabilities.
In C++, a trivial off-by-one error in an array can become a massive security vulnerability. In contrast, Rust’s memory safety eliminates an entire class of such bugs, unless you are brave – or foolhardy – enough to use an “unsafe” keyword, that is!
4. Rust was designed to turn implicit failures into compile errors.
Where other languages allow you to forget something, Rust makes an omission into a compilation error for things like null checks, uninitialized variables, or error propagation with the ‘?’ character. If you mess something up, it’s almost certain your program will not compile. If it does, at the very least you should see a lint warning.
We previously covered how Andrey Breslav, creator of Kotlin,
purposely made null safety an important part of Kotlin
.
5. The hardest part of learning Rust is not syntax, but data structure design.
Alice observes that newcomers reflexively build cyclic object graphs, like a Book object referencing Page objects that refer back to the Book. Such cyclic graphs are possible in Rust, but its ownership model makes this hard, meaning that Rust novices end up battling the compiler. Obvious solutions are to use structs and understand how ownership works in Rust.
6. Refactoring in Rust is safe and easy, thanks to the compiler.
Alice: “I change a return type or struct field, then just fix the compiler errors until the compiler stops shouting. And then once I’ve done that, I’ve updated every place I need to update.” Rust’s focus on correctness makes refactoring it more straightforward than dynamically-typed languages and Java-style typed ones are to refactor.
7. Rust may be optimal for AI agents because of the compiler’s high-quality feedback loop.
Alice’s refactoring trick of just doing what the compiler says also applies to agents: they can talk to the compiler, be told what to fix, and iterate. Combined with Rust blocking entire bug classes by design, this makes it one of the better languages for agent-generated code.
8. “Editions” allow Rust to make breaking changes without ‘breaking’ anyone’s code.
Rust editions (2015, 2018, 2021, 2024) can be mixed freely across crates. A library on the 2021 edition works seamlessly with a binary on the 2024 edition. This is how Rust evolves syntax (like adding async/await as keywords) without forcing an ecosystem-wide migration.
9. Rust’s governance precludes a “benevolent dictator for life”.
Unlike with Python and Linux, teams in Rust self-organize and delegate to each other. Tough questions are hashed out at in-person events like ‘Rust All Hands’. It’s a good illustration that open source projects can thrive across different structures.
10. Rust in the Linux kernel has graduated from “experimental.”
At December 2025’s Linux Kernel Maintainer Summit, the kernel community agreed Rust is no longer experimental. Combined with US Department of Defense regulations pushing agencies away from non-memory-safe languages, this means we should see more Rust in the Linux kernel and everywhere else, too.
11. AI code review may matter more than AI code generation in safety-critical codebases.
The kernel community is experimenting with AI bots that review mailing-list patches. Maintainers reportedly find them impressive, especially for kernel code; an area where quality and reliability has always been more important than quantity. It’s interesting that AI might be helpful as an extra quality gate.
12. Risk of AI-assisted Rust: false fluency.
Since Rust’s compiler is so strict, code that compiles can be assumed to be correct. However, Alice describes AI agents adding Rust versions of C build flags with no purpose! She also cautions that junior engineers using AI to learn Rust run the risk of not understanding why the compiler accepts the code they produce.
The Pragmatic Engineer deepdives relevant for this episode
•
The past and future of modern backend practices
•
How Kotlin was built
with Andrey Breslav
•
How Swift was built
with Chris Lattner
•
How Linux is built
with Greg KH
Timestamps
(
00:00
) Intro
(
04:09
) Tokio: an overview
(
05:11
) What Alice likes about Rust
(
12:48
) Rust for TypeScript engineers
(
13:51
) Moving from C++ to Rust
(
14:34
) Memory safety
(
18:12
) Garbage collection tradeoffs
(
21:46
) Ownership, references, and borrowing
(
26:59
) Unsafe in Rust
(
31:21
) Crates and Cargo
(
35:55
) Language design and RFCs
(
43:02
) Building new features
(
46:30
) Editions vs. versions
(
49:47
) Getting paid to work on Rust
(
51:27
) Contributing to Rust
(
53:03
) Rust in the Linux kernel
(
55:45
) AI use cases for Rust
(
1:01:35
) Learning Rust
(
1:03:54
) Book recommendation
References
Where to find Alice Ryhl:
• LinkedIn:
https://www.linkedin.com/in/aliceryhl
• Website:
https://ryhl.io
Mentions during the episode:
• Rust:
https://rust-lang.org
• Tokio:
https://tokio.rs
• Minecraft:
https://www.minecraft.net
• Rust Users Forum:
https://users.rust-lang.org
• Null’s creator regrets inventing it:
https://news.ycombinator.com/item?id=12427069
• PHP:
https://www.php.net
• Go:
https://go.dev
• TypeScript:
https://www.typescriptlang.org
• C++:
https://en.wikipedia.org/wiki/C%2B%2B
• Pip:
https://pypi.org/project/pip
• Why Cargo Exists:
https://doc.rust-lang.org/cargo/guide/why-cargo-exists.html
• Linus Torvalds:
https://en.wikipedia.org/wiki/Linus_Torvalds
• Rust Week:
https://2026.rustweek.org
• Inside Amazon’s Engineering Culture:
https://newsletter.pragmaticengineer.com/p/amazon
• How Linux is built with Greg Kroah-Hartman:
https://newsletter.pragmaticengineer.com/p/how-linux-is-built-with-greg-kroah
• Community Grants Program:
https://rustfoundation.org/media/tag/community-grants-program
• Zulip:
https://forge.rust-lang.org/platforms/zulip.html
• The Linux Kernel Archives:
https://www.kernel.org
• Linux Plumbers Conference:
https://lpc.events
• Gemini:
https://gemini.google.com/app
•
The Rust Programming Language
:
https://doc.rust-lang.org/book
•
Rust for Rustaceans: Idiomatic Programming for Experienced Developers
:
https://www.amazon.com/Rust-Rustaceans-Programming-Experienced-Developers/dp/1718501854
• Rustlings:
https://rustlings.rust-lang.org
—
Production and marketing by
Pen Name
.
Discussion about this episode
Comments
Restacks
THIS EPISODE IS PRESENTED BY
The Pragmatic Engineer
Software engineering at Big Tech and startups, from the inside. Deepdives with experienced engineers and tech professionals who share their hard-earned lessons, interesting stories and advice they have on building software.
Especially relevant for software engineers and engineering leaders: useful for those working in tech.
Software engineering at Big Tech and startups, from the inside. Deepdives with experienced engineers and tech professionals who share their hard-earned lessons, interesting stories and advice they have on building software. 

Especially relevant for software engineers and engineering leaders: useful for those working in tech.
Subscribe
Listen on
Substack App
Apple Podcasts
Spotify
YouTube Music
YouTube
RSS Feed
Appears in episode
Gergely Orosz
Recent Episodes
TypeScript, C# and Turbo Pascal with Anders Hejlsberg
May 13
•
Gergely Orosz
Building Pi, and what makes self-modifying software so fascinating
Apr 29
•
Gergely Orosz
Designing Data-intensive Applications with Martin Kleppmann
Apr 22
•
Gergely Orosz
DHH’s new way of writing code
Apr 8
•
Gergely Orosz
Scaling Uber with Thuan Pham (Uber’s first CTO)
Apr 1
•
Gergely Orosz
Building WhatsApp with Jean Lee
Mar 18
•
Gergely Orosz
From IDEs to AI Agents with Steve Yegge
Mar 11
•
Gergely Orosz