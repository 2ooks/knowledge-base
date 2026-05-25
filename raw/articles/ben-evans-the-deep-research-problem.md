# The Deep Research problem
**Source:** https://www.ben-evans.com/benedictevans/2025/2/17/the-deep-research-problem
**Date:** 2025-02-18
**Author:** Benedict Evans
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

The Deep Research problem
Most what I do for a living is research and analysis. I think of data I’d like to see and go looking for it; I compile and collate it, make charts, decide they’re boring and try again, find new ways and new data to understand and explain the issue, and produce text and charts that try to express what I’m thinking. Then I go and talk to people about it.
This often involves a huge amount of manual labour - there’s an iceberg beneath each chart - and OpenAI’s Deep Research looks like it should be tailor-made for me. So, does it fit?
I could test it myself with a new problem, but before I burn time and credits, as luck would have it OpenAI’s own product page has a sample report on something I know quite a lot about - smartphones. Let’s have a look.
View fullsize
View fullsize
This table looks great - hours of work compiling this data all done for for me  by a machine. Before we give it to a client, though, let’s just check a few things. First, what’s the source?
Ah.
We have two sources: Statista and Statcounter. Statcounter is a problematic measure of ‘adoption’ - it’s a measure of
traffic
, and as we all know, different devices are used differently, higher-end devices are used more, and the iPhone skews to the high-end and also skews to more use. You can’t really use that for this, as I’d explain to an intern (I often compare AI to interns). Statista, meanwhile, aggregates other people’s data, makes sure it ranks highly in SEO, and then tries to get you to register or pay to see the result. I think Google should ban this company from the index, but even if you disagree, saying this is the source is like saying the source is ‘a Google search result’. Again, this is an intern-level issue.
Setting that aside, though, let’s dig some more, and look at one number - Japan. Deep Research says that the Japanese smartphone market is split 69% iOS and 31% Android. That prompts two questions: is that what those sources say, and are they right? These are very different kinds of question.
First, Statcounter, despite over-weighting iPhones as noted above, doesn’t actually say 69%, or at any rate hasn’t in over a year. Hmm.
If we check Statista, we have to jump through a bunch of hoops, but eventually find that the actual source is the research firm Kantar Worldpanel, and the numbers it gives are pretty much the exact opposite of what Deep Research claims - 63% Android and 36% iOS. Oh.
View fullsize
View fullsize
We could keep going. The Kantar numbers fluctuate by up to 20 percentage points from month to month, which isn’t how hardware installed bases normally work and makes me uncertain as to what it’s really tracking. We could also go and check some of the other numbers, but if I have to check every number in a table then it hasn’t saved me any time - I might as well do it myself anyway. And for what it’s worth, a Japanese regulator does a survey of the actual number we’re looking for
here
(page 25), which says that the installed base is about 53% Android and 47% iOS. Ah.
What do we think about this?
LLMs are not databases: they do not do precise, deterministic, predictable data retrieval, and it’s irrelevant to test them as though they could. But that’s not quite what we’re trying to do here - this is a rather more complex and interesting test.
First, OpenAI’s example uses an imprecise question: it asks for adoption, but what does that mean? Are we asking for unit sales, the installed base, share of use, or perhaps share of spending on apps? Those are different things. Which do you want? Second, finding the answer to any of these is also imprecise - there’s no single source you can go to, and you need some judgment or expertise to decide what source to use - as above, should you take Statcounter, Statistica, Kantar itself, or something else?
That is, neither of these are actually straightforward ‘database query’ types of problem - OpenAI is asking the model a probabilistic question, not a deterministic question. But the answer to that question IS deterministic - having worked out what you really want, and which kind of answer to choose, you want the actual number. We’re asking for a deterministic answer from a probabilistic question, and there it looks like the model really is failing on its own terms. In my opinion, or given my expertise, it shouldn’t be using Statcounter or Statistica, but even if it should, it hasn’t taken the correct number from them.
This reminds me of an observation from a few years ago that LLMs are good at the things that computers are bad at, and bad at the things that computers are good at. OpenAI is trying to get the model to work out what you
probably
mean (computers are really bad at this, but LLMs are good at it), and then get the model to do highly specific information retrieval (computers are good at this, but LLMs are bad at it). And it doesn’t quite work. Remember, this isn’t my test - it’s OpenAI’s own product page. OpenAI is promising that this product can do something that it cannot do, at least, not quite, as shown by its own marketing.
At this stage, the obvious response is to say that the models keep getting better, but this misses the point. Are you telling me that today’s model gets this table 85% right and the next version will get it 85.5 or 91% correct? That doesn’t help me. If there are mistakes in the table, it doesn’t matter how many there are - I can’t trust it. If, on the other hand, you think that these models will go to being 100% right, that would change everything, but that would also be a binary change in the nature of these systems, not a percentage change, and we don’t know if that’s even possible.
Meanwhile, to be clear, I focused on one number because that’s easy to check and test, but the same conceptual problem applies to ten pages of text: in much the same way, Deep Research will be mostly
right, but only mostly.
Stepping back, I feel ambivalent in writing this, because there are only so many times that I can say that these systems are amazing, but get things wrong all the time in ways that matter, and so the best uses cases so far are those where the error rate doesn’t matter or where it’s easy to see. It would be much easier just to say that these systems are amazing and getting better all the time and leave it at that, or to claim that the error rate means they’re the biggest waste of time and money since NFTs. But exploring puzzlement, as I’m really doing here, seems more interesting.
And these things
are
useful. If someone asks you to produce a 20 page report on a topic where you have deep domain expertise, but you don’t already have 20 pages sitting in a folder somewhere, then this would turn a couple of days’ work into a couple of hours, and you can fix all the mistakes. I always call AI ‘infinite interns’, and there are a lot of teachable moments in what I’ve just written for any intern, but there’s also Steve Jobs’ line that a computer is ‘a bicycle for the mind’ - it lets you go further and faster for much less effort, but it can’t go anywhere by itself.
Taking one step further back again, I think there are two underlying problems here. First, to repeat, we don’t know if the error rate will go away, and so we don’t know whether we should be building products that presume the model will sometimes be wrong or whether in a year or two we will be building products that presume we can rely on the model by itself. That’s quite different to the limitations of other important technologies, from PCs to the web to smartphones, where we knew in principle what could change and what couldn’t. Will the issues with Deep Research that I’ve just talked about get solved or not? The answer to that question would produce two different kinds of product.
Second, OpenAI and all the other foundation model labs have no moat or defensibility except access to capital, they don’t have product-market fit outside of coding and marketing, and they don’t really have products either, just text boxes - and APIs for
other people
to build products. Deep Research is one attempt amongst many both to create a product with some stickiness and to instantiate a use case. But on one hand Perplexity claimed to launch the same thing a few days later, and on the other the best way to manage error rates today seems to be to abstract the LLM away as an API call inside software that can manage it, which of course makes the foundation models themselves even more of a commodity. Is that where things will end up? We have no idea.
Artificial Intelligence
Benedict Evans
18 February 2025