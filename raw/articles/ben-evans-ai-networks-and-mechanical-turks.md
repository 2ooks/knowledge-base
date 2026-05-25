# AI, networks and Mechanical Turks
**Source:** https://www.ben-evans.com/benedictevans/2025/11/23/ai-networks-and-mechanical-turks
**Date:** 2025-11-23
**Author:** Benedict Evans
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

AI, networks and Mechanical Turks
Any consumer internet system with critical mass becomes, in part, a Mechanical Turk. It looks at what the users do and draws conclusions from that. Amazon knows that if you bought X, you might buy Y, because it's seen what lots of people buy and saw that if they buy X, they're likely to buy Y. Google's dominance of search is based in part on seeing what people search for, and what they click on and what they search for next.
Of course, this is a network effect, and comes with a cold start problem that’s a barrier to entry. How do you provide those recommendations, suggestions and connections before you have users, and how do you get users before you can do that? (This is also a question for all machine learning startups.)
The limitation of this, though, is that none of these systems really know
why
you watched those, or bought those, or looked at those, and they don't really know what those things
are
. Amazon has close to a billion SKUs, but all it knows about them is the metadata typed in by humans and some level of purchase correlation. Instagram or TikTok have the same problem. These systems have correlation across SKUs, and down the funnel, but they don’t know why, just as a dog knows that the sound of door keys has high correlation with a walk, but doesn’t know what keys are.
But an LLM is, at a minimum, a step change in automated understanding of both what and why. The model can look at those words, images, videos and products, and all that metadata, and connect them to patterns that have some kind of understanding, or at any rate, some vastly broader kind of correlation.
So, YouTube can say “you watch car chase videos. Here’s a video that seems to have a car chase”. But this can also bring new kinds of correlations (or, if you prefer, ‘understanding’). Today, Amazon will know that if you buy packing tape, you might want bubble wrap. It should know that if you buy those, you might also want lightbulbs and maybe smoke detectors, because you’re moving house. But an LLM might know to show you an ad for home insurance and broadband, things you probably couldn’t infer from Amazon’s purchasing data.
You don't necessarily need all of that user base to do this, either - or rather, it doesn’t need to be
your
user base, because you might not need to build your own Mechanical Turk. If this kind of knowledge generalises enough, it might just be an API call from a world model. You can rent the cold start. Where Amazon or TikTok built recommendation systems by looking at what people do on Amazon and TikTok, that might just be the inference of a general-purpose LLM that anyone can plug into their product. You move the ‘human in the loop’: now the human, and the mechanical turk, is in the creation of all that training data over the past few hundred years. You shift the point of leverage.
The other half of the cold start problem, though, is that Amazon or Tiktok need to see what you yourself do so that they can work out what graphs might fit. The new user flow needs to throw enough ideas at you, and lead through enough choices, as painlessly as possible, that it can start to make those matches. Tinder changed the dating industry with a radically simpler way of doing this, and now Tinder proposes another way to short-circuit the problem: let the app
look at your camera roll
to work out what you’re like.
Generalising that problem, Google, Amazon, Meta, TikTok, Tinder and a bunch of other companies (Uber, Doordash, Venmo) all know
something
about you. But they each have a very partial view, like the story of the blind men feeling an elephant. Your phone has a much wider view, in theory, although Apple and Google are very cautious in what they do with that (Chinese Android OEMs are much more aggressive here), but it’s limited in different ways: your phone could know what you bought on Amazon or what images you saw in Instagram, but it wouldn’t see the graph that led Meta to show them to you. Now an agentic LLM assistant might become another blind man feeling the elephant, in different ways: it knows different things, but as you use it it also knows different thing about you, drawing new conclusions, especially if it’s buying things on
Amazon
and Instacart for you, and you’re using its browser, and its
wearable
.
I don’t know how this is going to work, and these may be the wrong questions. The state of AI today feels a lot like the web in 1997 or mobile in 2007: we know this is big but we don’t know how any of it is going to work.
But I do think that this is a new turn on a problem
I’ve written a lot about
in the past: the internet removed all of the old filters, curation and editing, so that now we have effectively infinite product, infinite media and infinite retail, and no way to or find or see what we don’t know. The filters we had from the internet were very imperfect, and now we have a radically new and different kind of filter. That seems like a bigger question than replacing Google.
Artificial Intelligence
,
Discovery
,
Ecommerce
Benedict Evans
23 November 2025