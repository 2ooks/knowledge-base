# Google I/O, World Models, I/O Spaghetti
**Source:** https://stratechery.com/2026/google-i-o-world-models-i-o-spaghetti/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2dvb2dsZS1pLW8td29ybGQtbW9kZWxzLWktby1zcGFnaGV0dGkvIl19LCJleHAiOjE3ODIyNzY3NzAsImlhdCI6MTc3OTY4NDc3MCwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMgcG9kY2FzdCByc3MiLCJzdWIiOiJlNWQ0NGE2NC1jYTU4LTQ3MWQtOWZhMy05YzkwODEzYTg4NTAiLCJ1c2UiOiJhY2Nlc3MifQ.qFrMCnoLiTUrRcelmPLzhysBZp5l7yNck-Agxt8sni20k5j1TR26QpqbVy_1bRlM_XIrT0FwE_ZdObRpq7cQo_2b8AAbw7RKgDzs9MeYkR8gBHOS-faXuCbM0S0iCvir-MIdq3S13EH-8s6d0sqrfiTMJC3XXSEdBFdtUBQ-KwhFEQAqVD-RawdlLDDMTBs1PIvstiuIkqb7G9jyKq_YFnsAyx0uyNJbtjjJ1phDusVv2k31iBiQNtGjrcRg4KoWA6EJHsh7B7fJL4Ul1SQp_5jNRCDn22kG2ue7BDLFFTsxaD88NEPzhhCl3GeUnL0dMenRDPjnoaDMTqkZCKKaDA
**Date:** 2026-05-20
**Author:** Ben Thompson
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Listen to this post:
Your browser does not support the audio element.
Good morning,
This coming Monday is Memorial Day; there will be no Update.
On to the Update:
Google I/O
From
Bloomberg
:
Alphabet Inc.’s Google is redesigning its iconic search box and adding new artificial intelligence coding tools, the latest steps in the company’s multibillion-dollar campaign to expand influence in the age of AI. Google overhauled the search box to better handle the longer, more complicated queries people bring to chatbots. The firm is also planning to update the search engine with agents that can help people track topics of interest, make reservations and monitor their health, among other things. Some features will initially be limited to paying subscribers.
From the
Wall Street Journal
:
Google is supercharging its Gemini artificial-intelligence model to become more competitive in the era of agentic AI. The company has started rolling out what it calls Gemini Spark, a personal agent it says is capable of navigating a user’s digital life and acting on his or her behalf. The agent will work across many of Google’s products and run on the company’s cloud infrastructure…Google also announced the rollout of Gemini Omni, a tool to create videos from various inputs including text, audio and images…Google on Tuesday introduced Gemini 3.5 Flash, a model it says is well suited for coding and agentic work and runs four times faster than other frontier models. Gemini 3.5 Pro, a stronger but slower model, will roll out in the coming weeks.
This year’s Google I/O was so sprawling that I decided to use both of my usual sources for these Updates, because they helpfully made my point by choosing entirely different things to focus on! Indeed, if you wanted a positive spin on Google’s plethora of announcements, it’s that the company is clearly fully committed to putting AI into anything and everything; if you want to put a negative spin, well, it’s the exact same thing. One of the enduring critiques of Google is that the company is unfocused and unmanageable, which, to the extent this keynote was a manifestation of the company it represents, the shoe fits.
World Models
The most curious aspect was the role of Google DeepMind CEO Demis Hassabis; Google CEO Sundar Pichai posted this tweet on Monday hyping up the event:
On our way to I/O 2026. See you at 10am PT tomorrow!
pic.twitter.com/bUXuMDpiuj
— Sundar Pichai (@sundarpichai)
May 18, 2026
Hassabis is one of the giants of AI, so featuring him in the promotional tweet makes sense; Hassabis didn’t, however, feature for very much of the keynote. The first time he was on stage was to talk about Gemini Omni, a world model whose manifestation — Gemini Omni Flash — is focused on video editing and generation.
Over the past year, AI capabilities have leaped forwards. We now have agents that can plan and act on our behalf, and artificial general intelligence is just a few years away. Today, I’m excited to share the progress we’ve made towards building AGI. Last year, I outlined our vision of extending Gemini’s incredible multimodal capabilities to become a world model: AI that can understand and simulate the world. This is a crucial aspect of achieving AGI and will be important for everything from building AI assistants to training robots. Now we’re taking the next big step.
I’m excited to announce Gemini Omni, our new model that can create anything from any input. It combines Gemini’s intelligence with the best of our generative media models for a new level of world understanding, multimodality, and editing. Models like Veo, Nano Banana, and Genie are able to create extremely realistic videos, images, and interactive simulations. Although not perfect, they already demonstrate some impressive notions of intuitive physics.
With Omni, we’ve now made even more progress. It’s a step change in simulating things like kinetic energy and gravity. Previous systems would have found these concepts difficult. Gemini’s world knowledge and reasoning really shine in Omni. It can translate complex ideas into highly accurate videos…We’re starting with video, but over time, Omni will be able to generate any output from any input. This was always our goal with Gemini, and why we built it to be multimodal from the very start. It was a harder path, but the foundation is now paying off.
Hassabis has been making this argument about the importance of world models for a long time; for example, this is
a post on X
after the release of Veo 3 last year:
Thanks! Building world models has always been the plan for GDM to get to AGI. Goes a long way back before then too. I started building AI for simulation games and working with creatives designing games from the age of 17 making Theme Park.
— Demis Hassabis (@demishassabis)
May 24, 2025
He laid out the case for world models most explicitly last December on the
Google DeepMind podcast
:
Tell me why you care about simulation. What can a world model do that a language model can’t?
DH:
It’s probably my longest-standing passion is world models and simulations, in addition to AI, and of course it’s all coming together in our most recent work, like Genie. And I think language models are able to understand a lot about the world — I think, actually, more than we expected, more than I expected — because language is actually probably richer than we thought. It contains more about the world than even linguists maybe imagined. And that’s proven now with these new systems.
But there’s still a lot about the spatial dynamics of the world — spatial awareness and the physical context we’re in and how that works mechanically — that is hard to describe in words and isn’t generally described in corpuses of words. And a lot of this is allied to learning from experience, online experience. There’s a lot of things which you can’t really describe something. You have to just experience it. Maybe the senses and so on are very hard to put into words, whether that’s motor angles and smell and these kind of senses. It’s very difficult to describe that in any kind of language.
So I think there’s a whole set of things around that. And I think if we want robotics to work or a universal assistant that maybe comes along with you in your daily life, maybe on glasses or on your phone and helps you in your everyday life, not just on your computer, you’re going to need this kind of world understanding, and world models are at the core of that. So what we mean by world model is this sort of model that understands the causative and effect of the mechanics of the world — intuitive physics, but how things move, how things behave.
Now, we’re seeing a lot of that in our video models, actually. And one way to show, how do you test you have that kind of understanding? Well, can you generate realistic worlds? Because if you can generate it, then, in a sense, you must have understood — the system must have encapsulated a lot of the mechanics of the world. So that’s why Genie and Veo and these models, our video models and our interactive world models, are really impressive, but also important steps towards showing we have generalized world models. And then hopefully, at some point, we can apply it to robotics and universal assistants. And then, of course, one of my favorite things I’m definitely going to have to do at some point is reapplying it back to games and game simulations and create the ultimate games, which, of course, was maybe always my subconscious plan.
I am very sympathetic to this point. The way I think about it is in the context of Chinese models, which are by-and-large distillations of frontier lab models; that, however, means they are much more jagged in their performance, with steep valleys of low understanding just off the edge of that alleged “only six months behind” performance. Frontier models themselves, however, are also distillations, this time of human thought. What is exposed on the Internet is simply the final output of internal chains of thought that every human engages in; because that is not in the models they too are jagged with surprising drop-offs next to performance that rivals or exceeds the smartest humans on earth.
The question, then, is what fills that generalizability gap. Anthropic has been focused on coding not just because it is a huge business opportunity, but under the belief that creating an AI that can recursively self-improve is the key to solving this hole; to that end the company
recruited Andrej Karpathy
to create a team focused on exactly this. Hassabis, and by extension DeepMind, on the other hand, believe the problem is data about the real world, and that the best way to get that data is through realistic simulations. What falls out of that are models with multimodality — in contrast to Claude, which outputs text only — and, it must be said, not nearly as impressive coding capabilities.
This gets at the point of this entire digression: I think it’s possible that the reason Google is widely considered to be behind both Anthropic and OpenAI in terms of coding, particularly long-running agentic workflows that depend just as much on the harness as the model itself, simply comes down to their research team having other priorities. That’s why the coding parts of this keynote fell on the Antigravity team, not DeepMind, and why Hassabis was barely on stage.
Still, he did have the closing, and it’s clear he thinks DeepMind’s approach is working, at least in terms of AGI:
Google’s cutting-edge research and products will help unlock AGI’s incredible potential for the benefit of the entire world. When we look back at this time, I think we will realize that we were standing in the foothills of the singularity. It will be a profound moment for humanity. This technology will be a force multiplier for human ingenuity and usher in a new golden age of scientific discovery and progress, improving the lives of everyone, everywhere.
This — particularly given that it came on the heels of explaining how Google was working to end all diseases — is certainly inspiring; it also has nothing to do with coding or video generation or Search. That’s fine, as far as it goes; I just suspect that if the company’s AI leader doesn’t care about such prosaic matters, such prosaic matters may not, in the long run, go that far. And, if Hassabis is right and Google gets to AGI first, it may not matter.
I/O Spaghetti
What was clear from the rest of the keynote is that every part of the company has a mandate to incorporate AI, and it’s not clear how much of it was coordinated and, relatedly, how much of it will be coherent to end users. To just take the features from
Pichai’s blog post
:
There is a new “Ask YouTube” feature that finds specific moments in relevant videos
Voice-powered Docs (this was a very underwhelming demo that, more than anything else in this list, suggested that this keynote was a real “ship the org chart” event)
The aforementioned Omni Flash, which will be available in the Gemini app, Google Flow, and YouTube Shorts
OpenAI is joining Google’s SynthID fingerprinting scheme for AI-generated content
Gemini 3.5 Flash, which was hyped as being faster and better than other models; early online reaction is pretty negative, however, particularly in terms of token usage, which makes the cost-per-task actually higher
Antigravity 2.0, shifting the company’s AI IDE to be more of an agent manager
Gemini Spark, a personal AI agent in the Gemini app (and coming to Android and Chrome)
More search evolutions, including adding an “AI Mode” button to the search box (“I’m Feeling Lucky” wins in the end!), another set of agentic experiences, just-in-time UI, and apparently the ability to build apps within search itself. Note that the AI Mode is still an explicit invocation; the default remains the search experience as it exists today.
Daily Briefs in Gemini
New agents in Google Flow for editing
Google Pics, a new AI image creation and editing tool, that is not to be confused with Google Photos
A glasses partnership with Samsung, Warby Parker, and Gentle Monster to compete with Meta
Gemini for Science
Forgive the thoroughness, but I think I made my point. There is a
lot
of AI spaghetti getting thrown against the wall in terms of products; we’ll see how much of it sticks. For my part, I’m trying to remember that
Google’s lack of focus is precisely why it endures
. I wrote in
Paradigm Shifts and the Winner’s Curse
:
And, by the same token, I’m much more appreciative of Google’s amorphous nature and seeming lack of strategy. That makes them hard to analyze — again, I’ve been honest for years about the challenges I find in understanding Mountain View — but the company successfully navigated one paradigm shift, and is doing much better than I originally expected with this one. Larry Page and Sergey Brin famously weren’t particularly interested in business or in running a company; they just wanted to do cool things with computers in a college-like environment like they had at Stanford. That the company, nearly thirty years later, is still doing cool things with computers in a college-like environment may be maddening to analysts like me who want clarity and efficiency; it also may be the key to not just surviving but winning across multiple paradigms.
Yesterday’s keynote was a lot of cool things being done with computers, and it was a bit maddening. But hey, Google being Google has worked out pretty well.
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