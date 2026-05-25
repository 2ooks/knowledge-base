# Building AI products
**Source:** https://www.ben-evans.com/benedictevans/2024/6/8/building-ai-products
**Date:** 2024-06-08
**Author:** Benedict Evans
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Building AI products
I will fly to India on Monday for a brief trip, and so I just spent an hour struggling through a very buggy online visa application process. Once I’d finished, since I now know what’s involved, I asked ChatGPT 4o about it. Most of these points are partially or completely wrong.
View fullsize
This is an ‘unfair’ test. It’s a good example of a ‘bad’ way to use an LLM. These are not databases. They do not produce precise factual answers to questions, and they are probabilistic systems, not deterministic. LLMs today cannot give me a completely and precisely accurate answer to this question. The answer
might
be right, but you can’t guarantee that.
There is something of a trend for people (often drawing parallels with crypto and NFTs) to presume that this means these things are useless. That is a misunderstanding. Rather, a useful way to think about generative AI models is that they are extremely good at telling you what a good answer to a question
like
that would
probably look like.
There are some use-cases where ‘looks like a good answer’ is exactly what you want, and there are some where ‘roughly right’ is ‘precisely wrong’.
Indeed, pushing this a little further, one could suggest that exactly the same prompt and exactly the same output could be a good or bad result depending on why you wanted it.
Be that as it may, in this case, I do need a precise answer, and ChatGPT cannot, in principle, be relied on to give me one, and instead it gave me a wrong answer. I asked it for something it can’t do, so this an unfair test, but it’s a relevant test. The answer is still wrong.
There are two ways to try to solve this. One is to treat it as a science problem - this is early, and the models will get better. You could say ‘RAG’ and ‘multi-agentic’ a lot. The models certainly will get better, but how much better? You could spend weeks of your life watching YouTube videos of machine learning scientists arguing about this, and learn only that they don’t really know. Really, this is a version of the ‘will LLMs produce AGI?’ argument, since a model that could answer ‘any’ question completely correctly sounds like a good definition of at least one kind of AGI to me (again, though, no-one knows).
But the other path is to treat this as a product problem. How do we build useful mass-market products around models that we should presume will be getting things ‘wrong’?
A stock reaction of AI people to examples like mine is to say “you’re holding it wrong” - I asked 1: the wrong kind of question and 2: I asked it in the wrong way. I should have done a bunch of prompt engineering! But the message of the last 50 years of consumer computing is that you do not move adoption forward by making the users learn command lines - you have to move towards the users.
Early prompt engineering (WordPerfect cardboard keyboard overlays). This was not the future.
I think we could break this apart further, into two kinds of product problem.
On one hand, the product design in the screenshot is communicating certainty when the model itself is inherently uncertain. Google gives you (mostly) ten blue links, which communicates ‘it’s probably one of these’, but here we are given one ‘right’ answer. This misleads a lot of people, especially since the text generation (as distinct from the actual answer) is pretty much perfect. Indeed, this fascinating survey from Deloitte suggests that people are
more
likely to be misled by this apparent certainty once they’ve used these systems.
View fullsize
But the other half of the problem is that the product isn’t telling me what I can ask even before I get to an ‘answer’. I gave it a ‘bad’ query (one that it can’t really answer well) but nothing in the product tells me that. Instead, this is presented to me as a general purpose tool. If the
product
has to try to answer anything, that makes it a lot harder for the
model
to be right, but it also makes it a lot harder for the
interface
to communicate what good questions might be.
I made the slide below, for the presentation that I will give in India, to try to capture the alternatives suggested by this.
View fullsize
The most radical approach is the completely general purpose chatbot-as-product, the challenges with which I’ve just discussed. But there are also at least two other approaches.
The first is to contain the product to a narrow domain, so that you can create a custom UI around the input and output that communicates what it can and can’t do and what you can ask, and perhaps also focus the model itself (hence RAG). This gets us the coding assistants and marketing tools that have exploded in the last 12 months, as well as the first attempts at knowledge management tools. WPP has built an internal dashboard that lets its staff steer models toward particular brand tone of voice or target demographics. Hence “ask this tool to suggest 50 ideas for product X from brand Y for demo Z - don’t ask it if you have appendicitis.” You wrap the prompt in buttons and UI - in
product
.
View fullsize
But the other approach is that the user never sees the prompt
or the output
, or knows that this is generative AI at all, and both the input and the output are abstracted away as functions inside some other thing. The model enables some capability, or it makes it quicker and easier to build that capability even if you could have done it before. This is how most of the last wave of machine learning was absorbed into software: there are new features, or features that work better or can be built faster and cheaper, but the user never knows they’re ‘AI’ - they aren’t purple and there are no clusters of little stars. Hence the old joke that AI is whatever doesn’t work yet, because once it works it’s just software.
Looking at this on another axis: with any new technology, we begin by trying to make it fit the problems we already have, while the incumbents try to make it a feature (hence Google and Microsoft spraying LLMs all over their products in the last year). Then startups use it to unbundle the incumbents (to unbundle search, Oracle or Email), but meanwhile, other startups try to work out what we could build that would be truly native to the new technology. That comes in stages. First, Flickr had an iPhone app, but then Instagram used the smartphone camera, and used local computing to add filters, and further on again, Snap and TikTok used the touch screen, video and location to make something truly native to the platform. So, what native experiences do we build with this, that aren’t the chatbot itself, or where the ‘error rate’ doesn’t matter, but abstracts this new capability in some way?
This of course is proposing a paradox, that I’ve talked about before: here we have a general-purpose technology, and yet the way to deploy is to unbundle it into single-purpose tools and experiences. However, seeing this as a paradox might just be misplacing the right level of abstraction. Electric motors are a general-purpose technology, but you don’t buy a box of electric motors from Home Depot - you buy a drill, a washing machine and a blender. A general-purpose technology is instantiated as use-cases. PCs and smartphones are general-purpose tools that replaced single-purpose tools - they replaced typewriters, calculators, voice recorders and music players - but each of those functions is achieved through a piece of single-purpose software: most people don’t use Excel as a
word processor
. One reason that some people are so excited about LLMs is that they might
not
follow that pattern: they might move up through all of those levels of abstraction to the top. That would leave no room for ‘thin GPT wrappers’. Yet I don’t think they can really do that yet, and so everything I’ve just written is really just wondering what you can build to change the world even if that never happens.
Artificial Intelligence
Benedict Evans
8 June 2024