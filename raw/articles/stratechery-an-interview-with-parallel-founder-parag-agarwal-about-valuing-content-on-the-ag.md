# An Interview with Parallel Founder Parag Agarwal About Valuing Content on the Agentic Web
**Source:** https://stratechery.com/2026/an-interview-with-parallel-founder-parag-agarwal-about-valuing-content-on-the-agentic-web/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2FuLWludGVydmlldy13aXRoLXBhcmFsbGVsLWZvdW5kZXItcGFyYWctYWdhcndhbC1hYm91dC12YWx1aW5nLWNvbnRlbnQtb24tdGhlLWFnZW50aWMtd2ViLyJdfSwiZXhwIjoxNzgyMjc2NzcwLCJpYXQiOjE3Nzk2ODQ3NzAsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIHBvZGNhc3QgcnNzIiwic3ViIjoiZTVkNDRhNjQtY2E1OC00NzFkLTlmYTMtOWM5MDgxM2E4ODUwIiwidXNlIjoiYWNjZXNzIn0.XRZzpLbimCBw8X-czBzmRBn8K5EB18-IDDARVF0mZVU8fmTg2nVk1XkBGoU0y-ae5sbcy-GEUhi5suwF16uRGPdG_8Tpe6PSydL85wwrkvY58faBrO-LMfORXLSVtjIzvuDSrBNINHv5bsIbJeO-kBN0PL78iPuCbyTJjW39qcZdBRu1TqMaqFcJ3C7BNBHBg0KfR4iqGLKDygsroMMDI_SQvrOhbfwFh6pG9BWDTUQe4XcRNAo4ebWzlccRROD1vcWjImo9xc5XbjEfDoYOBhBSBKqtk4BUWLjcPYHKGQgfMR3uDqv8z7f17DTyBRJRTdu_faZ20mSBjM9hWuoHxg
**Date:** 2026-05-21
**Author:** Ben Thompson
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Listen to this post:
Your browser does not support the audio element.
Good morning,
This Stratechery Interview is another installment of the Stratechery Founder series; as a reminder, one of the challenges in covering startups is the lack of available data. My solution is to go in the opposite direction and interview founders directly, letting them give their subjective overview of their companies, while pressing them on their business model, background, and long-term potential.
Today’s Interview is with Parallel founder and CEO
Parag Agarwal
. Agarwal is most well known for his brief stint as CEO of Twitter in the time period when Elon Musk was acquiring the company. We do touch on Agarwal’s background and his time on Twitter, but that is not the central focus of the interview.
What we spend the most time on is
Parallel
, the startup Agarwal founded in 2023. Parallel is a search engine for AI agents, using a combination of compute, models, and search to deliver results for customers based on their willingness to spend. This week Parallel AI launched the
Index by Parallel
, which shows what the content on any given site on the web is worth to agents. Parallel computes the relative value of content using something called Shapley Values, which calculates not only the importance of data, but also its uniqueness; it then uses that calculation to pay out content creators for the content that agents need for effective search.
In the Parallel section of this interview we discuss what that all means from first principles, how Parallel is seeking to build out incentives for content creation, and the challenges of building out both the demand side and the supply side. We also touch on the various other companies in this space, including the model makers and Cloudflare, the difference between content for agents and content for humans, and, as a bonus, why Agarwal wears Meta AI glasses.
As a reminder, all Stratechery content, including interviews, is available as a podcast; click the link at the top of this email to add Stratechery to your podcast player.
On to the Interview:
An Interview with Parallel Founder Parag Agarwal About Valuing Content on the Agentic Web
This interview is lightly edited for clarity.
Topics:
Background
|
Twitter
|
Shapley Values
|
Parallel AI
|
Index
|
Content Marketplaces
|
Content Supply
|
Competitors and Partners
Background
Parag Agrawal, welcome to Stratechery.
PA:
Thanks for having me, Ben.
You are probably most well known, at least to the Stratechery audience, as the
former CEO of Twitter
, that’s not what we’re here to talk about today, although I do have a couple questions for you, just to let you know. Our focus is going to be on your new startup Parallel AI and your vision for the future of content in an AI agent world, but before we get to that I always like to learn more about and understand the background of my guests. To that end, take me back to the beginning, to India, and correct me if I’m wrong, but there are atomic bombs involved. Is that right?
PA:
No, not exactly. I grew up in India where everyone around me worked on the Indian nuclear program.
Got it. It sounds like atomic bombs are involved to me!
PA:
My dad himself worked on nuclear power generation, although people in my building worked on building the bomb for India.
Right, it’s all sort of interconnected.
PA:
Yes.
But you also studied that a bit also, didn’t you?
PA:
I was a math kid and then I ended up becoming a physics kid and
I went to the Physics Olympiad and won a gold medal there
, so I was in the math/physics world growing up.
You said “in your building”, was this like you’re off on a military base or something like that?
PA:
It’s a government complex, so there’s India’s nuclear research facility, it’s called
Bhabha Atomic Research Center
in Bombay, and there is like a let’s call it like two-mile by two-mile residential colony of everyone who works there, whether it is a nuclear scientist or someone who builds the physical reactor, and so everyone around me had one parent that worked at the nuclear research facility.
So did that have any impact in your day-to-day life, or was it just I get to actually grow up around a bunch of smart kids and it’s super fun?
PA:
I think it was crucial. I grew up among a collection of people who were from all over India, no one actually like was from there, people from all over India moved there, it was one of the more interesting academic-ish yet applied jobs. So there was something shared across all of my friends who grew up there, all of my peers and I think it was a very, very special collection.
When you look back now 40 years on, do you feel how that has impacted you on your outlook on the world?
PA:
Totally. I think I am a function of the peer group around me, that makes you want to compete, that makes you smarter, you learn from them. We used to sit around doing math problems and physics problems growing up, along with a bunch of sports, but I think it’s kind of a very strange upbringing because at some level there wasn’t any wealth around and everyone lived in a government home, very few people had cars, I didn’t get to fly on an airplane until I literally went to the Physics Olympiad. At the same time we had access to some amazing education and great teachers and great schools and great peer groups. So it is almost like the perfect upbringing, if you may. It’s like the most privileged upbringing, if you may.
The most privileged without the overt luxury aspects of privilege, yeah that’s really interesting. What was your educational path?
PA:
I grew up in India, went to IIT Bombay for a computer science undergrad degree. First time I really got to play with a computer was after I was in a computer science program at a lab at IIT Bombay, but I ended up in computer science because I used to love math and all of the smartest kids that ended up in a computer science program, because math wasn’t just the thing to do, although I loved it, so I ended up in a computer science program.
Got it. So you came to computers fairly late then, all things considered.
PA:
Yes, I came to computers late on a relative basis. When I talk to others in my age group—
Sometimes I talk to people and they’re like, “Oh yeah, I got a computer when I was six years old”. That’s a function or we’re also a little older, now that you’re in your 40s, you’re going to join me as being some of the old people in Silicon Valley. It’s like, “No, it’s different when we were kids”.
PA:
Yeah, I was relatively late to computers, at 17 is when I really interacted with a computer and tried to do something with it. I was very like math theory-ish and over time, the arc of my career has been like gradual steps to be more applied. Ended up grad school at Stanford right after undergrad, did a bunch of work around databases for my PhD.
Tell me about your PhD, what was that about?
PA:
I was working on large scale database problems, specifically data integration, and what’s interesting about what I’m doing now versus then was that we were working on these data integration problems where we were trying to combine uncertain data from various sources to create more certain data.
Right, and try to value it and know it’s important and things like that?
PA:
Exactly. Like there’s this thing called
possible worlds
— so you have this, a sensor could tell you some error margin on a reading, you have another sensor which can tell you another set of error margins on reading, you can combine two bits of uncertain information to get more certainty on what the world is.
So how does that work? Usually if you’re combining two uncertain sources you would think it’d be even more uncertain so how do you get more certainty?
PA:
Let’s think something simple. Let’s say there were three possible answers to a problem, A, B, or C. One person is like, “Oh, I’m confident it’s not C, so it’s either A or B”, the other person shows, “I’m confident it’s not A, it’s either B or C”, and both of these show up with this information. You combine information from them and you know the answer is B. Right? So you had two uncertain bits of information, you compose them together, and now you have some more certainty.
And you were trying to figure out how to do that at scale?
PA:
How to do it at scale in all kinds of problem domains.
Twitter
So what was your career path at Twitter? I believe you started at Twitter before
your PhD thesis was even published
, and then within six years,
you’re CTO
. There’s a very rapid progression that happens here, how’d you end up there and how’d you end up as CTO?
PA:
I did all this research and I got disillusioned with this idea of academic research at the time, in part because the feedback loop to me felt broken with peer review for publications, and being disconnected from the real world. So where I started a PhD being open to wanting to be in academia as a professor, over time, I thought that I’d go into some applied research at a big applied lab at the time, and then got disillusioned with this idea of research.
Now this is a much more common path. Now you’re on the common Stratechery interview path, which is, “I thought I’d do academia and the feedback loops were way too slow”.
PA:
So I ended up at Twitter as the most junior software engineer at the time, mostly because I was in love with the product. I don’t know if people go back in time, but if you find my tweets from then, I was on Twitter all the time during late grad school and I was so obsessed with the product, and that’s what led me to just taking a job as a junior software engineer at Twitter. I was simultaneously extraordinarily overqualified for the job, and extraordinarily underqualified for the job because I had not, despite being a Computer Science PhD, I had not done any legitimate software engineering work.
Was there a part of the first couple of years was just like boot camp in terms of just deploying basic software engineering?
PA:
I know it feels strange to say, but we were building ads at Twitter, this was like the early team growing building ads, and there were like what 10 people when I showed up building ads. The company was larger, but there was this like tiny team sitting in a corner disconnected from the rest of the engineering team building ads.
Yeah,
this tracks
.
PA:
It was important and it was extraordinarily fast-paced, it was growing rapidly, and yeah it was not two years — boot camp was like a week — and you had to be productive really, really quickly and it was a really, really amazing team — and some of whom now work at Parallel, it’s kind of interesting. This team that I was on, I got to learn software engineering really quickly, I was I think in many ways fortunate to have worked on the problems that ended up mattering at Twitter.
What problems were those?
PA:
Before Twitter went public, I was focused on building the ad system. I built out certain core parts of the ads machine learning team, Twitter went public, we grew revenue from like nothing to a couple billion dollars in a couple of years. Back then that was impressive, it’s no longer impressive.
Yeah, it’s amazing how fast the scales change, but yes.
PA:
Exactly. But back then that was like a real thing, we started working on a system that had 4 computers one day and a year later had 4,000 computers solving the same problem. Then as I became the machine learning — Twitter famously had religion against machine learning.
It was chronological timelines, no algorithm.
PA:
Exactly, you remember those days. Machine learning at Twitter grew up within ads because you can’t build a real ad system that works without machine learning, and I call it machine learning because it wasn’t AI, it was machine learning.
So then I ended up, it’s not a well-known story, but after Twitter went public, you could see in the data, Twitter used to report MAUs at the time, monthly active users, the core metric. You could see if you did the growth math on Twitter, you could see that daily active users or time on site, they were starting to slow down the growth. So whereas Twitter’s problem for like three years had been, “How do I bring in enough servers to keep the site up?”, because we were growing so fast. And very quickly, you could do the math and you could see, “Oh, this could slow down”. And by our projections, Twitter was going to saturate out at about like 90 million or so DAU and so as I saw that, I was like, “I am going to have to move to work on the consumer product and ads isn’t the most important problem for the business going forward”.
Right, actually making sure you still have users.
PA:
Right, so I, along with a few others, moved, there was some real religion around not bringing machine learning to the product.
Why was that? What was the opposition to that?
PA:
I don’t know. It felt intellectual at the time, but if I have to pin it down, my theory is that, you kind of start defining yourself as a counter to something else.
Right, you’re not Facebook.
PA:
Kind of. You start taking pride in being transparent and being reverse chronological, and that is what gives you the edge in terms of the most recent content and you start attributing to not machine learning to be why Twitter is good at recent content.
(laughing) Right, it actually might have been totally wrong, it just happened to be a coincidence.
PA:
I think there is some attribution to it, but the reality is you can use machine learning and get even better at it.
Right.
PA:
That’s the core argument, which is by removing bad quality content, you can focus even more on recent content and better content. So really, it took a moment, but within months, we were able to show that you can actually re-energize Twitter’s growth, and then Twitter’s DAU started really growing again. From then to until I left, they never stopped growing, and they were very consistent and we got to sort of do work to grow them.
I mean that’s actually the best possible answer to this, “How did you progress so quickly at Twitter in this time frame?”, and it’s like, “The entire core of the company had religion about totally the wrong thing and I came in with a different one and it worked” — that makes sense, that answers my question.
PA:
But also people allowed me to do things — famously I’m known for telling people that I only want jobs that I’m not qualified for. So a lot of people along the way at Twitter and leadership basically took bets on me and people around me to go do things that we weren’t fully qualified to do, and we managed to do some of them well.
One of the things [Twitter Co-Founder] Jack [Dorsey] had you work on was
Bluesky
back when this was a Twitter vision of a decentralized network. Are you satisfied with how that turned out or is that just a footnote in the Agarwal history.
PA:
I’m not. I think Bluesky, I was excited about the protocol idea, I was excited about the principle of it being independent of Twitter, I would have been so excited if Twitter could ever adopt it and get broader adoption, honest thing like that. It didn’t turn out the way I had hoped — I’d call that a failure.
Yeah. Is that just like it was never going to turn out or maybe it could have, but circumstances intervened or whatever?
PA:
Hard to know, right?
Yeah, it’s hard to know. There’s not very many good examples of a centralized entity birthing a decentralized protocol, usually all the protocols we have go back like 40 years and it’s like they happened to start there and that’s how they persisted.
PA:
Let me provide some color there. Twitter was not birthing Bluesky, Twitter was suggesting that collecting a group of people who believed in protocols had innovative ideas. Twitter was providing them a small amount of financial assistance to do important work and the real-world feedback to bring that protocol to be one, which could, in theory, eventually be adopted by a platform like Twitter and others. We were trying to really not exert any control on the protocol.
Was there a bit though, it’s kind of inescapable, like I just made the mistake right now because it came out of Twitter, it’s ineffably linked to that.
PA:
I do think, yeah, I think that is a challenge. But we tried really, really hard to keep it very, very independent of our ideas.
Were you shocked to
become CEO
? Did that come out of the blue or did you know that was coming?
PA:
I didn’t exactly know that was coming, it also can’t come out of the blue, there’s like a pretty extended like interview cycle.
Interesting.
PA:
I think I had been for a week or two here and there, I had been interim-ish CEO for certain periods. I had known that I was in the, “If the CEO gets hit by a bus” plan. So it wasn’t a complete out of nowhere, the timing wasn’t fully one that I would have anticipated.
The biggest thing you end up dealing with is the whole
Elon Musk acquisition
, which was quite a process, I’m sure. You might have blacked it all out in your memory, but to the extent that you remember, what was the biggest lesson you learned from that entire episode?
PA:
When I became CEO, I think the presumption from the outside was that I wanted to continue Twitter as it existed. The reality is I was changing a lot internally, like half the management team changed within that period.
What did you think Twitter needed to be when you took over?
PA:
Twitter is an amazing product which is extraordinarily durable. Twitter needed to be a better business alongside it being a great product.
It was somewhere around the late 2010’s I’m like I’m not even covering Twitter anymore, it is what it is, the business is not worth talking about,
there’s no business here
, the product’s unbelievable so I could definitely I agree with your assessment.
PA:
But I think it could have been a great business, I think it could have and should have been a great business. I take accountability for years of working there as the CTO and not pushing enough or being successful in making Twitter a better business. and I think all of this,
What would a better business have looked like?
PA:
I think you can just do so much better monetization on many different angles and make ads way more relevant, be better at performance ads, there’s just so much opportunity that we failed to fully maximize over the years, it also could have been much more efficient. I think as we were going through this whole acquisition conversation, on the other side, I was working with our team and board to do a meaningful layoff, not as big as that eventually happened. So the direction of travel was for Twitter to become a better business.
Were you surprised that Musk could lay off so many people and the product continued to the extent that it did? Or has the product degraded more than people appreciate?
PA:
It’s not surprising to me, Twitter was pretty well built, the engineers who worked at Twitter were very good, the system was well built, it was well designed, there was lots of expertise there. Now I agree that Twitter was inefficient in terms of how many people Twitter had for the work it did and Twitter was at many, many times extraordinarily slow and paralyzed in terms of product innovation, those are all true things. But the product, it not just crashing isn’t a surprise having knowing how it was built and by whom.
I think that makes sense, that sounds right. This is my last one — looking back, what would you do differently in retrospect?
PA:
The years when I was the CTO I would build a materially better business, those were the years that I regret not having done enough.
Is it things that you would do different or do you look back and say, “I got machine learning into this org, which is totally resistant to it” — is that the actual real issue? Are you are you falling on your sword for the faults of others?
PA:
As a CTO, you don’t get to blame others than the CEO.
Yeah, fair enough.
PA:
So if there’s someone to blame, it’s me and Jack, and I will shift some of the accountability to Jack, but not to others.
That’s a good answer.
Shapley Values
Well, now that the unpleasantness is out of the way, let’s talk about Parallel AI specifically and your vision for content in a world of AI agents.
I wrote a piece in 2025 called
The Agentic Web and Original Sin
that was, I think, directly about the subject area you’re focused on. Specifically, making the case in there that advertising was a perfect match for the human web, it’s about attention. The agentic web, however, would be different, that continued content production would entail creating an entirely new type of marketplaces for content, including likely paying for and incentivizing the creation of content that is uniquely important to agents. This is all an important preamble, I think.
But the problem with all this, however, is the details. How do you actually value content? How do you create a marketplace? How do you make payments, etc? And I did not get very much into specifics here because it wasn’t clear to me, so I think all that is important preamble for what you’re thinking about with Parallel AI,
this index platform you just launched this week
. So let’s start there, what is the key core insight undergirding Parallel AI, what are you trying to accomplish? And did I just waste all my time on a preamble that actually misses the point or are we thinking about the same things here?
PA:
No, I think this is the right problem. I actually remember reading some of what you’ve written along the way and finding myself nodding and also thinking of like, “Oh, I want to talk to Ben about like a detail”.
Just to give everyone context, you’ve already briefed me on what you’re doing and I’m immediately like, “We’ve got to do an interview about this, this is so in line with what I’ve been talking about”. So yes, continue.
PA:
So three years ago, when I was starting Parallel, my obsession was this thing called
Shapley values
.
Let’s not even go further. What are Shapley values? ELI5, explain to me like I’m 5.
PA:
Shapley values is this very general concept from cooperative game theory, that if a few people end up collaborating together and creating a whole that is bigger than the sum of parts — now the pie got larger, how do you divide up this pie among all of them to maximize incentive to participate in whatever this cooperation is.
[Lloyd] Shapley
is a Nobel Prize winning economist, game theorist, who came up with this notion of Shapley values, which maximizes participation.
Now, the really cool thing about this is that it also has been shown that outside of cooperative games, even open market mechanics where people are competing, many of those situations also converge to people essentially extracting Shapley values from such collaboration or such markets.
The uncooperative game, or the competitive game aspect, is super important because this is why this can scale broadly. You did sort of an A/B/C example before, if we have four or five, let’s say, the mini bundle or whatever, and we’re selling something and sell it for more money, like just on a very high level, how do I figure out who’s most responsible for the value there?
PA:
Let me walk through a fun example, let’s say you’re trying to buy gloves, a left glove and a right glove that makes a pair for you. You get value one if you get one left and one right glove, right? Let’s say there are three people selling gloves. One of them has a left glove, two of them have a copy of the right glove each. All three of them show up to you and you’re like, “Okay, how do I value the left glove versus the right glove? How do I buy this?”. Turns out if you did the Shapley value math, you’d roughly end up paying them 4x for the left glove that you pay for the right glove.
Because it’s the only one.
PA:
That’s what the math leads to. And so that’s an example which shows that if you have a more differentiated, scarce commodity to bring to a marketplace, you will extract more value from it, that’s some of the intuition that goes into this.
Now, just to take a step back in terms of why this obsession was alongside my other obsession at the time, which was three years ago, I got obsessed that agents will use the web 1000x more than humans ever have. There was this notion that if agents use the web, this whole ads thing that I believed in and built for a time, and you’ve written about this in terms of ads being efficient at differential pricing and being the business model that kept the web open because without it, it’s kind of hard to imagine so much content being out in the open.
Right.
PA:
Hard to imagine Google and Twitter being free products for everyone to use, so it’s been this really powerful business model on the web.
And to your point, it’s not just that they’re ads. It’s that the ads and the way they’re implemented capture optimal value from the different visitors, that’s a critical component. So many people think that ads are just one big bucket, but it’s specifically the structure of the way the ad markets are constructed, where they capture more from a very broad bucket, a North American user than like an Indian user, as an example, and that gets all the way down to the specifics of how you target and find people.
PA:
Exactly, and if you think about the ads systems and how they work, one of the things, people talk about auctions and ads and the
second-price auctions
and ads and the reality is, if you looked at search ads, the top few percent of search queries subsidize all of the rest, right? The same top few percent of users on a network like Twitter or Facebook subsidize all of the rest, but it shouldn’t be thought of as subsidy, it is an optimal value extraction cycle.
You can hate about the experience on ads, but ads allows you to do such crazy scale differential pricing — if you think of a subscription bundle, you end up in this like, “Okay, is it free? Or is it behind a $10 a month subscription? Or now is it behind a $200 a month subscription?”, you don’t really get fine-grained economics around value and so ads actually ends up being very, very efficient. That is why over time you’ve — and I think I’ve seen
your arguments around this
, even things that were — like Netflix, a subscription thing, eventually you do find that you get to expand the market by bringing in this efficient engine and getting the best of both worlds.
You can start out like Netflix was one price for a long time, I’m just restating your point, you can do minimal segmentation with different plans. What ads basically give you is infinite segmentation where every user is matched up to their value.
PA:
Exactly. Having come from this worldview around ads being so good at differential pricing, so efficient, keeping the web open, thinking about, “We need to build a web which has incentive to remain open to agents instead of shut off shop” — the only business models available are really on the web if they’re like subscriptions, advertising, or transactions. The three business models that dominate the web, if I’m to simplify it.
Now, the attention economy based ones, both subscriptions and advertising is driven by the attention economy. If humans are not showing up as traffic reading pages, those are not going to drive the web and so we need to come up with an alternative. If you put that alongside the fact that it was clear to me that agents would use the web a lot.
Yep, and they don’t have attention, they’re not being distracted by the ads.
PA:
Exactly, and they would use it a lot more. I think you kind of need to believe that if we were not — the web is currently constrained by how many people are online, how many people have phones and devices and time to be online that they’re not spending on video is roughly the addressable market of attention, that’s what constrains Facebook’s growth, presumably. So with agents that constraint disappears. It’s like, “How much valuable work or value can I generate by throwing more compute at all of the data on the web?”.
Because it’s not just the number of agents, but also there’s like an infinite appetite for quality and volume of accurate data that basically can never be satisfied.
PA:
And you’re going to throw GPUs on top of data, as long as the marginal return of value in whatever way you define value is more than what you spend, I think that’s where the new bottleneck is.
So if you believe that agents will use the web 1000x more, that the constraint is shifting from human attention to maximizing value and using compute effectively on all the data you have available, you have to believe that this is an extraordinarily positive sum game, right? So you now rely on, okay, in this world of extraordinarily positive world game, the big challenge we’ll encounter is does everyone have incentive to participate or will a bunch of content owners just opt out of this cooperative game?
Parallel AI
That’s right. So right now the web is dominated by people making content for humans and you can argue the optimal strategy for them is to just cut off agents completely so that’s number one. Number two, you have this ongoing need for new information, new discovery about the world, there’s a huge amount of information that’s locked away in databases or behind paywalls or whatever it might be, so it’s not just that we have an infinite more agents, we have infinite more ways to parse and combine data into new insights. So there’s, at the end of this story is a, “Make it up in volume” answer, I think, and we probably still underestimate how large that volume is. But what’s the actual mechanism here? What’s the actual connection between moving beyond advertising and Shapley values? How does that work together?
PA:
So let’s talk through a concrete example. The last two years at Parallel, we’ve built infrastructure for people building agents and agents to use content on the web. Take an example, you let’s say have
Harvey
, one of our customers, building agents for lawyers.
Many people are familiar with having used deep research of how deep research could work, now imagine a Harvey lawyer working on a case, doing work that their agent does across their internal documents, but also everything on the web. This could include news stories, it could include public data that comes from perhaps a partner of ours like
PitchBook
, it could include data that comes from courtroom filings or patents filed somewhere, and the agent is working across all of these things to do work. And let’s say $20, $50 gets spent in preparation of a lawyer spending time on the case by the agent.
Those $50 were spent and a bunch of sources on the web were read in the process, so Harvey uses us to access the public web data when this agent runs, we get information about the total value, in some sense, of the work that the agent did and then you’re now trying to figure out, “Okay, how do I divide up this value across all of the content owners that contributed?”.
So if you did a $50 search, there might be one fact that uncovers that is actually the single most important fact of the case, which should be worth much more than things that are on Wikipedia or whatever it might be.
PA:
So now the interesting thing, I told you all the good things about the Shapley value without telling you the bad things about Shapley value. Turns out Shapley value is a great concept in theory and extraordinarily difficult in practice because to compute it right and exactly, you have to play out all counterfactuals of you take out every source of content out of the system and see how well the agent does and you look across all of this data to then figure out.
If an agent’s going across and going through 100,000 facts, you’re not going to run 100,000 simulations.
PA:
It turns out to compute Shapley value, one, it’s practically hard to — it’s more expensive than the amount of value, it’s like more expensive to compute how much to pay a content owner than to just pay them. So one of the things we’ve really worked on over the last year, year-and-a-half, is building a model which estimates Shapley value and does it well to be able to make this practical.
How do you do that? If you’re training a model against a reward function or something that’s right or wrong, how do you start out deciding what the values are you’re training against?
PA:
We actually went and spent money building some simulations with Shapley values as some training data, to eval against, train against.
Got it. So you actually did those really hard computations up front.
PA:
Again, some assumptions go into it, but we did that. We built this model, we iterated on it, wow we feel good about it. It’s not perfect, it’s going to be a work in progress, there’s going to be things that we have to keep improving on it. But where we’ve gotten to is now when an agent runs, sees many sources, does many searches, produces an output, it has faithful citations to those, and we can run this model on top of this work that the agent did to then say, “Ok, this source should get this share of compensation”, and then divide that across all sources, and then we aggregate that over all the work happening on our platform.
That is essentially
what we announced today with Index
, where we are paying out our initial partners their computed estimated values of their contribution to all the work happening across all Parallel customers via our system. But also we’ve shipped a dashboard now that allows someone who’s not yet a partner of ours to go see, I believe for the first time, gain some real insight into how agents use their content, how valuable is the work where their content is used, how unique and differentiated is their content.
Index
The Index has four scores: Impressions, Citations, Value, and Uniqueness. Walk me through each of those.
PA:
Impressions is what you would get typically as like, “Okay, we built a search system ourselves, how often did the search system just surface you for the agent to consider reading further, doing something with you?”.
Right, and is this more in line with traditional search, like number of sites linking to it, reputation score, all that sort of thing?
PA:
It is more in line with that, but it’s interesting because it’s in the context of real work being done by agents. Most people, when they look at their SEO dashboards, are looking at, okay, “I believe for these 50 queries, how often do I show up?”, but it’s not tethered to some real distribution of work being done. Impressions is interesting that how often do you show up in the context of real work being done by agents on the Parallel system?
And these agents are agents being run by your customers.
PA:
These are agents being run by our customers across all kinds of fields, whether it be lawyers or finance or AI scientists or sales or someone doing insurance underwriting or claims processing or drug discovery, there’s all kinds of interesting work being done by agents.
We’ll circle back to that as I’m very curious about the demand versus supply aspect of your business. So you have Impressions, then Citations. And this, I assume, is just how often the agent looked at you and did they actually use you? Is that what that is?
PA:
Correct. The agent eventually produces an answer and then it grounds the answer with actual URLs and specific sentences or excerpts from those URLs, which is meant to be a self-contained way of anyone verifying the output the agent produced — if you looked at all of this content, you should feel good about the answer you saw from the agent, so those are Citations. So sometimes if your content is of the kind that the agent ends up citing and feeling more confident in its responses on, you end up doing better on the Citations score than on the impression score.
Is there still a bit of a reputation component to this? Reputable sites are just going to come up more often?
PA:
Yes, I think they’re often, I believe so, I think that is one of the bigger factors that goes into from Impressions to Citations.
So what is Value then? We have two more, Value and Uniqueness. What is Value?
PA:
Imagine two different agents, one running because a banker is about to buy a stake in a company and is spending $20 with their agent to do extraordinary deep research and it’s high stakes. Think of another use case where there is like a more casual agent doing cheap work. If you get disproportionately used and cited in the context of more valuable work, your Value score goes up.
What’s the function that drives that? Does the expensive agent know it’s expensive so it’s more likely to choose sites? Or is it that it’s just running way more compute because that’s what they’re paying for? How does that actually manifest?
PA:
No, I think it gets driven by the nature of content. So if you’re building content that’s targeting more valuable work, you might get a higher score there.
Got it.
PA:
So if you build content that’s targeting less valuable work—
Right. If you’re like the Wall Street Journal versus BuzzFeed, you might have a lot of content in both cases, but what’s more likely to show up in a banker’s search?
PA:
Correct, and I think the way at least we’ve seen this happen. I’ll give you my example, when I use a coding agent, I always use the most expensive model.
Even if the one might be good enough who wants to take that chance?
PA:
Exactly! And I am betting for like 9 out of 10 things that I do, the one level cheaper agent, like a Sonnet is as good as Opus, right? And perhaps medium thinking on Opus is as good as extra high thinking or whatever — but regardless, you don’t want to take that chance, and we see the same behavior in our customer agents.
So people in our API get to say, “Okay, do deep research and use Ultra8x, our highest end, “Throw the kitchen sink at the problem” kind of an agent and high value work, people throw the highest quality agent at it because we prove to them that these agents are on the
Pareto frontier
, that if your problem is hard, a higher end agent is going to get a better answer than a cheaper agent. So in that sense, the value of the work ends up getting translated to our system and that flows down to the content owner.
We’ll close the loop in just a second, let’s get this one other metric, which is Uniqueness. How is this different than Value?
PA:
This is the first time you start doing Shapley math. So far, all you got to see was, “Do you get cited in high value work?”. Right now you say when you got cited in high value work, you got cited with 10 other people. Did you often have a marginal contribution that was more than others? Is your content unique and differentiated in a way? Because in an agency, three people have roughly the same information and all three are high reputation, the Shapley value for each of them will be lower, just like like the example we spoke about earlier with the gloves.
Yep, everyone has a left-handed glove or whatever it might be.
PA:
Exactly, and so Shapley value will then disproportionately reward high reputation, high quality, and unique/differentiated content.
Got it. So is this really biased towards unique facts versus opinion or whatever it might be?
PA:
Yeah, I think it’s kind of interesting, and again, we don’t have a full — over time, we plan to publish our findings by analyzing the data. It does bias towards unique facts, one of the things we see pop from the data is local news ends up being more valuable.
Yeah, I think you gave an example like nyc.gov has all these arcane things about New York law and it just dominates this function.
PA:
Right! It’s also a factor that agents actually go hit a broader part of the web than humans do at baseline, so even if you looked at the Impression metric, you can see that there relative to the human traffic web. But then you find this unique factual authoritative content gets like disproportionate value. One of our partners PR Newswire gets disproportionate value, it’s authoritative factual content about who said what.
Just to put this in context, I ran a bunch of sites in here, including Stratechery. Stratechery did very good on Valuable, that was my highest score, but I plummeted on Unique, I guess Stratechery is very easy to replace, don’t tell my listeners. But almost every site I put in, there was a drop off from Value to Unique, except for nyc.gov, to your point, that’s where it suddenly shot up. It’s like, this is totally unique stuff that is valuable, but also the Shapley value is very, very high.
PA:
Exactly. So I think it’ll be roughly half-and-half because the way these numbers are calculated is just relative to everyone else, whether your share grows or declines, but the interesting thing about like, I think Stratechery is built for humans, I don’t think you’re doing content.
No, I told you this. When you reached out, I’m like, I’m going to score low on this, this is not what I do. But actually, I think I scored better than I expected, to be honest, across these sort of things. But yes, that does fit.
PA:
The other thing that’s interesting just to go beyond just factual data is when you end up giving a recipe to an agent to tell it how it should go about doing some work, that actually also ends up being very valuable and influential.
What is the recipe like? What do you mean by that?
PA:
Like if you wrote a thing which helped the agent be like, “Okay, to solve a problem like this, a good strategy is to break it down the following way or to go find this data first, and analyze it this way”, so if you laid out a mini plan on how to do great financial planning, for example, sometimes we see that content in individual tracers, like the agent will go read the plan. We’re like, “Yeah, this is a sane plan for this problem, I’m going to rely on this plan”, and then I’m going to cite that this is why my plan was good. It ends up rewarding that. It’s not just facts, it’s also insights, it’s to go into a new domain where the agent might not have confidence in its pre-training data to go figure out, “How do I go solve this problem?”.
Right. What’s so intriguing about this — and we’ll get to how this actually manifests in place — but to your incentive point, I wrote an Article like a decade ago about
The Local News Business Model
trying to make the case that the actual market for subscriptions — stop trying to swim in the big pond, there’s a gazillion little ponds around where you can sort of be the big fish. My example then was I was in Taiwan and I’m like, I wish someone in Madison, the local newspaper is a disaster, it’s ad-infested, impossible to read, it’s like half AP stories — just tell me concrete on-the-ground stuff and I’ll gladly pay for that. Number one, I still think that’s kind of possible if you have a big enough city, but there’s a real chicken-and-egg question getting started there. But what it sounds like you’re articulating is someone who actually harvested the facts on the ground in unique locales with no competition, your system is actually uniquely set up to make that exceptionally valuable.
PA:
I don’t think it’s a function of our system.
It actually is uniquely valuable, you’re just showing that?
PA:
Yeah, we’re just showing that. This is a different world where previously the mechanics of getting distribution, customer acquisition cost was expensive enough that that overrode what content was worth creating because it dominated whether or not you could survive as a non-conglomerate small thing, and so all the niche content ended up on big social networks because you paid for content acquisition once and then personalized content.
Yep.
PA:
But I think as you think about this new web with agents, as with every other wave, the incentive schemes of what’s valuable and what’s commoditized and what’s unique will evolve and hopefully if we create the right feedback loops, new kinds of content will be created because there are incentives that weren’t getting created with the previous incentive scheme. But it’ll go the other way also, some content that we feel is valuable today might become less valuable over time.
For sure, because it’s focused on attention and it’s not unique and all those sorts of things.
Content Marketplaces
So number one, you solved or you’re working to solve, I think, a big problem, which is assume you have all this content at scale, how do you actually price it, it doesn’t make any sense to price it upfront. Like most news today, the big problem is it’s easily substitutable, so once it’s published, it’s not worth anything. You’re saying, “Actually, if it is unique and we can find a price for it and incentivize actual unique stuff”, but does that mean you need to make a marketplace?
There’s two sides of this. There’s a demand side, the people who actually want this information, who’s deploying these agents, who’s actually pushing the money into the system. Then there’s the supply side. How do you actually get the data? Because right now, you’re still kind of surfing on the open web, so you’re kind of getting supply for free, but you want to incentivize new supply? Marketplaces are hard, there’s two sides of it. So let’s start with the demand side. Who are the customers? Who’s putting money into this?
PA:
So demand side, right?
If you want to do supply side first, that’s fine. We can start with either.
PA:
Demand side is where we started, so I think it makes logical sense. So we started working on this like two-and-a-half years ago, built a bunch of technology to crawl, index, search the web. Now, in the last sort of 9 months since we’ve had the product out in the market, are serving a very high quality set of customers built.
So what are you providing that no one else in the market is right now? Is it just you’re like a search index for agents basically?
PA:
It’s a search index, but also search agents on top of that index, so people will use us to run deep research.
Got it.
PA:
And other people will use us as a search tool within their index. But if you think of our customers, I’ll name a few. Notion — if you use Notion, and you use
Notion Agent
or Notion custom agents, when they access the web, and search the web, they use it via our APIs.
What are the alternatives that they could use to search the web? Is there a Google API? Is there something else, Bing API? Or are those just so focused on SERP [search engine results page] results that they’re not relevant?
PA:
Bing used to have a public API, which they shut down a couple of years ago, Google does not make an API available at scale right now. People can use a bundled search tool within the OpenAI API and that’s where several customers start, and as they start bringing in other models—
They need something specialized that is just delivering them the web.
PA:
Exactly, and once they start optimizing, those tools are still like — the worldview is that those tools are still built for humans, but you can give the agent all the tools built for humans and you’ll be fine. Our worldview is this tool is so ubiquitous that it’s worth building a specialized tool for agents.
Search for agents, that’s what it is.
PA:
Exactly. So it’s hyper-optimized for agents, it preserves their tokens, it’s high signal versus noise in the way the agent perceives it. There’s a lot of reasoning within the search tool itself and truly differentiates.
So we built this technology, we’ve gotten these customers who are running and we focused intentionally, not on building a consumer product, but an API product that gets used in real knowledge work with a focus on higher value knowledge work. The reason is very intentional.
That’s how money gets in the system, right?
PA:
We believe the future economy of the web has to be funded by this cohort in my mind in a differential value system. Because even if you think about Google Search for a moment, we think of it as a consumer product, but when I’m Parallel Web Systems, advertising on Google to get someone from a
Rogo
that builds agents for finance to buy me, this is not the consumer business they’re in, they’re in the B2B “make me available and known among my customer set” business. If you transition that into a world of agents, How will those choices get made eventually? So I believe we’ve been miscategorizing a bunch of ad spend as consumer that’s actually B2B in this agentic future.
That’s a great insight. Like all these sites we think of as being consumer sites, but if you actually drill down the financials there are B2B businesses with a consumer costume on.
PA:
Exactly. So if you now think through how will that economy and how will that distribution and those dollars flow, a lot of it is going to come from high value work being done via agents that need the web. Our customers are all kind of, that is the common thread across our customers.
How are they paying? Are they paying for a one time fee or they’re paying per search or how does that work?
PA:
All of our APIs are paid by the use. All of our APIs are like, you can do a deep research query, you can go there, type out a query and say, “Pay $2.40 for getting a very, very comprehensive result to this query”.
How do I know how much to I’m willing to pay? That seems like that’s a hard thing.
PA:
It is truly a hard thing. The API is flexible in that you can start by saying, “I’m going to pay $0.10”, you get a result and you’re like, “Actually, I kind of want to do more, and you can say, go pay another $0.30”.
Is this one of those things where over time as you get more demand, you’ll better be able to price queries on your side instead of putting it on the customer?
PA:
Yes and no. I think currently our customers do a lot of sophisticated evals. This whole field is relatively new and evolving, but we find ourselves learning the most from customers building the most frontier agents. Some customers like do very sophisticated evals and benchmarks to figure out which one of these price points to use for which use case.
It’s worth enough to them that they’re there you’re actually just sort of piggyback on them doing the wor