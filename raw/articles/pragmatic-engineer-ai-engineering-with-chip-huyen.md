# AI Engineering with Chip Huyen
**Source:** https://newsletter.pragmaticengineer.com/p/ai-engineering-with-chip-huyen
**Date:** February 5, 2025
**Author:** The Pragmatic Engineer
**Score:** 4/5 | **Concepts:** inference-architecture-and-scaling, ai-scaling-limits-and-research-paradigm
**Scoring reason:** Analyzes o1/o1-pro reasoning models as a new paradigm distinct from chat, covering inference-time compute scaling and the shift toward task-specific model architectures.

The Pragmatic Engineer
AI Engineering with Chip Huyen
205
5
20
1×
0:00
Current time: 0:00 / Total time: -1:14:43
-1:14:43
Audio playback is not supported on your browser. Please upgrade.
AI Engineering with Chip Huyen
Chip Huyen is the author of the freshly published O’Reilly book AI Engineering an expert in applied machine learning. What is AI engineering, and what are good ways in getting started with it?
Gergely Orosz
Feb 05, 2025
205
5
20
Share
Transcript
Stream the Latest Episode
Available now on
YouTube
,
Apple
and
Spotify
. See the episode transcript at the top of this page, and a summary at the bottom.
Brought to You By
•
Swarmia
— The engineering intelligence platform for modern software organizations.
•
Graphite
— The AI developer productivity platform.
•
Vanta
— Automate compliance and simplify security with Vanta.
—
In This Episode
On today’s episode of The Pragmatic Engineer, I’m joined by Chip Huyen, a computer scientist, author of the freshly published O’Reilly book
AI Engineering
, and an expert in applied machine learning. Chip has worked as a researcher at
Netflix
, was a core developer at
NVIDIA
(building NeMo, NVIDIA’s GenAI framework), and co-founded
Claypot AI
. She also taught Machine Learning at
Stanford University
.
In this conversation, we dive into the evolving field of AI Engineering and explore key insights from Chip’s book, including:
• How AI Engineering differs from Machine Learning Engineering
• Why fine-tuning is usually not a tactic you’ll want (or need) to use
• The spectrum of solutions to customer support problems – some not even involving AI!
• The challenges of LLM evals (evaluations)
• Why project-based learning is valuable—but even better when paired with structured learning
• Exciting potential use cases for AI in education and entertainment
• And more!
Takeaways
My biggest takeaways from this episode:
1. “AI engineering” feels closer to software engineering than to ML engineering.
The term itself is very new, and “AI engineering” evolved from ML engineering. A big difference is that thanks to LLMs being easy to use (both via APIs, and locally) “AI engineering” is much more about building a product first – and later on, getting around to tweaking the model itself. ML engineering was the other way around: spend a lot of time building a model, and then build an application on it.
2. To get good at AI engineering, focus on the basics.
Understand what an LLM is (and how it works), how to evaluate them, how to use RAG, what finetuning is, and how to optimize inference. All of these techniques are foundational, and will remain important in a few years’ time as well. Chip’s book
AI Engineering
covers all these topics.
3. “The more we want to not miss out on things, the more things we will miss.”
When I asked Chip about what she thinks about the fear of missing out (FOMO) across AI: she said it’s ironic that when you are worried about missing out, and keep up with everything new – you stay shallow! Chip doesn’t read news: she chooses to focus on deep research or learning instead. If there’s something that is important today: it will be important next week, after she’s done finishing learning whatever she was focused on.
4. Solving the problem is more important than using the latest AI tools
. Amusingly, a lot of teams miss this part: and they build overcompliacated AI solutions that do practically nothing for the business.
Before the interview, I’ve started to go through Chip’s newly published book:
AI Engineering
. It feels to me this book will become a desk reference, and I recommend it.
The Pragmatic Engineer deepdives relevant for this episode
•
Applied AI Software Engineering: RAG
•
How do AI software engineering agents work?
•
AI Tooling for Software Engineers in 2024: Reality Check
•
IDEs with GenAI features that Software Engineers love
Timestamps
(
00:00
) Intro
(
01:31
) A quick overview of AI Engineering
(
06:45
) How Chip ensured her book stays current amidst the rapid advancements in AI
(
11:35
) A definition of AI Engineering and how it differs from Machine Learning Engineering
(
18:15
) Simple first steps in building AI applications
(
24:38
) An explanation of BM25 (retrieval system)
(
25:28
) The problems associated with fine-tuning
(
29:40
) Simple customer support solutions for rolling out AI thoughtfully
(
35:29
) Chip’s thoughts on staying focused on the problem
(
37:04
) The challenge in evaluating AI systems
(
40:03
) Use cases in evaluating AI
(
43:09
) The importance of prioritizing users’ needs and experience
(
48:09
) Common mistakes made with Gen AI
(
53:57
) A case for systematic problem solving
(
54:57
) Project-based learning vs. structured learning
(
1:00:07
) Why AI is not the end of engineering
(
1:04:56
) How AI is helping education and the future use cases we might see
(
1:08:58
) Rapid fire round
A summary of the conversation
What is AI engineering?
AI engineering is a shift from machine learning to more engineering and product-focused work.
Previously, building machine learning applications required creating custom models, necessitating data and expertise in model training. Now, AI models can be used simply by making API calls. This lowers the barrier to entry and eliminates the need for specialized ML/AI degrees or to have large amounts of data collected.
Machine learning engineers did a lot of preparation work
. They traditionally focused on data collection, annotation, and model training before deployment. AI engineering, in contrast, starts with a product idea and then progresses to data gathering and working with models.
AI Engineering is a new term.
It emerged because the role is different from traditional Machine Learning Engineering. Chip surveyed people building applications on top of foundation models, and 'AI Engineering' was the most common way to describe what they did – so she stuck with this name!
A key difference compared to ML engineering: AI engineers often begin with readily available APIs or pre-trained models. This means they can start to prototype and iterate early on. They will only consider building custom models much, much later! See how e.g. Perplexity
started to build their own AI models
after their product was launched as the first version.
Ways to build AI applications
Start with basics.
Understand what a “good response” and a “bad response” means. To do so, you need to set guidelines and evaluate responses. Use both automation and manual review.
Retrieval-augmented generation
(RAG) is a commonly used pattern for adding context to model responses. RAG involves retrieving relevant documents or information to augment the model's context.
We previously did
a deepdive on RAG.
Keyword retrieval. Many equate RAG with vector search, but a simpler approach may be more effective initially. Try keyword retrieval before doing vector searches: as vector databases can be costly and may obscure specific keywords.
Data preparation and chunking are important to get right for RAG. Techniques such as extracting metadata or keywords from documents can significantly improve performance, potentially more than focusing on the database itself.
Fine-tuning
: often a last resort and many teams never do it. This is due to the complexities of hosting and maintaining a fine-tuned model. The rapid pace of model development also makes it difficult for fine-tuned models to maintain their advantage over time.
One step at a time.
Take a structured approach: starting with prompting, adding data, and then move to more complex methods if needed. Understand that the problem being solved is more important than using the latest technology.
Resist the urge to ship
only
incremental improvements. Building out new use cases is usually far more beneficial.
Practical approaches and avoiding pitfalls
Start with a human in the loop.
After that, gradually increase automation as confidence in the AI solution grows. A phased rollout, starting with internal use cases, can help to mitigate risk.
Focus on solving the problem, not just using AI. Apply the simplest solutions to remove roadblocks.
Common mistakes:
Using GenAI when it’s not needed. Some problems may be better solved with simpler solutions like spreadsheets or manually scheduling tasks.
Abandoning GenAI when it doesn’t seem to work, without pinpointing where the process fails. Reasons for GenAI not (yet) working could be in data extraction or text processing. Don’t give up too easily!
Jumping into complex solutions like vector databases or fine-tuning without addressing simpler approaches.
Be careful about using untested or rapidly changing AI frameworks because they can introduce bugs and issues.
Evaluating AI systems
A difficult area, because as AI becomes more sophisticated, it is harder to assess the output. A convincing summary might not be a good summary, and a math solution from AI can be hard to evaluate if one does not know the answer.
There is no single, simple solution to evaluation. Instead, a combination of methods is required and talking to users, analysing their interactions and manual data inspections are essential.
Measure what matters. Sometimes, what seems intuitive isn’t what users actually want, for example, a meeting summarisation tool focusing on action items instead of overall content.
Do not skip the hard and manual work!
Manual data inspection is critical and still offers the highest ratio of value
Human evaluations are important for seeing how users are actually using the product and to correlate with automated metrics.
Learning AI Engineering
Two ways of learning:
Project-based learning:
pick up a project and working through all the problems.
Structured learning: taking courses or reading books.
Tutorials are great but it's important to stop and ask questions.
Without that, tutorials can lead to mindlessly copying code without understanding it.
Combine project-based learning with structured learning. Also, observe your own workflow and see what parts can be automated by AI to get use case ideas.
Coding is not the same as software engineering.
Software engineering is about solving problems, and while AI can automate coding, it cannot fully automate the problem-solving process.
AI can enable software engineers to build much more complex software.
AI will not eliminate software engineering because it can only automate part of the software engineering process. The need for precision in software development requires someone who understands the nuances of code.
Resources & Mentions
Where to find Chip Huyen:
• X:
https://x.com/chipro
• LinkedIn:
https://www.linkedin.com/in/chiphuyen/
• Website:
https://huyenchip.com/
Mentions during the episode:
•
AI Engineering: Building Applications with Foundation Models
:
https://www.amazon.com/AI-Engineering-Building-Applications-Foundation/dp/1098166302/r
• DeepSeek:
https://www.deepseek.com/
• Multimodality and Large Multimodal Models (LMMs):
https://huyenchip.com/2023/10/10/multimodal.html
• BM25:
https://en.wikipedia.org/wiki/Okapi_BM25
• Microsoft Bot Framework:
https://dev.botframework.com/
• Python:
https://www.python.org/
• Javascript:
https://www.javascript.com/
• ChatGPT:
https://chatgpt.com/
• Claude:
https://claude.ai/
• Llama:
https://www.llama.com/
•
Complex Adaptive Systems: An Introduction to Computational Models of Social Life (Princeton Studies in Complexity)
:
https://www.amazon.com/Complex-Adaptive-Systems-Introduction-Computational/dp/0691127026/
•
The Selfish Gene
:
https://www.amazon.com/Selfish-Gene-Anniversary-Landmark-Science/dp/0198788606/
• Antifragile: Things That Gain from Disorder:
https://www.amazon.com/dp/0812979680/
—
Production and marketing by
Pen Name
. For inquiries about sponsoring the podcast, email podcast@pragmaticengineer.com.
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
Building WhatsApp with Jean Lee
Mar 18
•
Gergely Orosz
From IDEs to AI Agents with Steve Yegge
Mar 11
•
Gergely Orosz
Building Claude Code with Boris Cherny
Mar 4
•
Gergely Orosz
Mitchell Hashimoto’s new way of writing code
Feb 25
•
Gergely Orosz
The programming language after Kotlin – with the creator of Kotlin
Feb 12
•
Gergely Orosz
The third golden age of software engineering – thanks to AI, with Grady Booch
Feb 4
•
Gergely Orosz
The creator of Clawd: "I ship code I don't read"
Jan 28
•
Gergely Orosz
How AWS S3 is built
Jan 21
•
Gergely Orosz