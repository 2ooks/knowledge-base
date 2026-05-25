# Competing in search
**Source:** https://www.ben-evans.com/benedictevans/2024/8/19/competing-in-search
**Date:** 2024-08-19
**Author:** Benedict Evans
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Competing in search
A search engine is a vast mechanical Turk - a reinforcement learning engine that uses human activity to understand the web. PageRank used signal from links created by people, but once people started using Google at scale, that usage itself created far more signal: which results you clicked on, how you changed your searches to get better results, and what else you searched for before and after. That then applies on the advertising side as well: the more search ads Google serves, the more it knows about which ads are effective and the higher its revenue-per-query.
So, search is a virtuous circle. Everyone uses Google because it has the best results, and it has the best results because everyone uses it, and hence it has the money to invest in getting even better results. That is compounded by the scale of the infrastructure needed to index and analyse the entire web (Apple estimated $6bn a year for it to match Google on top of its existing search and indexing spending), which largely precludes venture-backed startups from entering the market, but even if you had that capital, you wouldn’t have Google’s query volume and so you wouldn’t have Google’s quality. In tech this is called a network effect; in competition theory it’s called a natural monopoly.
Hence, Bing. Satya Nadella claimed that Microsoft has invested $100bn in search to date, yet Bing has only 5% of US search traffic, and both its results and its revenue-per-query are worse. It’s stuck on the wrong side of that virtuous circle.
However, there's another virtuous circle: everyone uses Google because it's the
default
, it's the default because it’s the best
and
because Google pays other tech companies billions of dollars a year in revenue shares as ‘traffic acquisition costs’ (TAC) to make it the default, and it’s the best
and
Google has those billions to pay because everyone uses it. In 2022, Google paid Apple about $20bn (about 17.5% of Apple’s operating income, and
a 36% revenue share
) and other companies $10bn to make it the default, which was close to 20% of Google’s search advertising revenue. And this was the center of the US competition case that was decided this week.
We all knew this in theory (after all, the TAC is right there in the accounts), but this week’s judgement made it a lot more tangible. 50% of search in the USA happens on channels where Google has a contract to make it the default: 28% on Apple devices, 19.4% on Android (the OEMs and telcos decide the default on Android, not Google) and 2.3% on other browsers (i.e. Mozilla) - and then another 20% happens in user-downloaded Chrome on PCs. (Amusingly, the contract means that Google pays Apple even for searches done in Chrome on Apple devices.)
Meanwhile, users do not, by and large, change defaults unless the default is much worse that the alternative, and here, the default is generally better than the alternative. So, the court agreed with the founder of Neeva (not, to be fair, a neutral witness) that these contracts ‘freeze the market.’
Web search is a reinforcement learning engine, where Google sees a lot more of the reinforcement than anyone else, and spends tens of billions of dollars to make sure things stay that way. This week the court found that these defaults deals are illegal, and it also found that Google squeezes up prices for search ads using its dominance in search advertising, in addition to its superior targeting.
All of this is pretty clear and easy to understand, but what comes next is not clear at all. It’s obvious that the court will order Google to stop its TAC payments and abandon the contracts (or at a minimum radically reduce their scope), which means it saves $30bn in cash each year and Apple loses $20bn. But then what?
The court might order ‘choice screens’ in user-downloaded Chrome (20% of queries), but it has no power to order a choice screen in Safari, since Apple isn’t a party, and it’s not clear whether it can do that on Android, given that Samsung and Motorola, and the telcos, aren’t parties either. Meanwhile, it’s also unclear whether choice screens actually
work
, especially where (as the judgment laid out) Google has a much better brand than Bing, let alone any of the other alternatives. A lot of people given a choice screen would just choose Google anyway, as indeed appears to have happened in the EU, which already mandated this on Android. Meanwhile, the DoJ’s head of competition, Jonathan Kanter, was clear in an
interview last week
that he wants any remedies to change the situation, not just remove the illegal conduct:
If this ends up with Google just not having to pay Apple but still being the default, have you accomplished anything?
We want to make sure that remedies in any case, whether it’s this one or any other, are meaningful and meet the markets where they are today, not where they were 15 years ago
Then, there are
press reports
that the DoJ is considering asking for Android and Chrome to be spun out. Spinning out Android seems irrelevant except as a purely punitive step: if it was independent, that wouldn’t change how Samsung sets defaults. If Chrome was independent, it could choose a different default too. But would it?
This is really the first big puzzle: what will Apple, Samsung and Motorola, and a hypothetically independent Chrome Inc, choose as the default if Google can’t pay to be the default?
Bing, of course, is still free to pay to be the default, and now it doesn’t have Google bidding against it. Apple calculated that Bing would have to pay a revenue share of well over 100% to match Google’s offer (since, as above, Bing’s revenue-per-query is lower), but now there is no Google offer. And yet, here’s the judge quoting Eddie Cue, who runs this at Apple:
There was “no price that Microsoft could ever offer” to make the switch, because of Bing’s inferior quality and the associated business risk of making a change… “I don’t believe there’s a price in the world that Microsoft could offer us. They offered to give us Bing for free. They could give us the whole company.”
Some of this may be posturing, and some may just reflect the fact that Google could afford to outbid Bing massively. It also reflects the risk that Bing’s payments might never catch up to Google’s, while a lot of users might switch their defaults back to Google anyway, but now with their Google searches no longer generating payments to Apple.
But then Eddie Cue also says this:
“We're not going to take something that isn't as good and provide that to our customers. Our customers are too important to us. One of the reasons Apple's been so successful is the fact that we treat the customer as the most important thing in the world. Much more important than the revenue.”
Again, is this posturing? Maybe, and I’m sure some Android OEMs would take the money, but how much would you have to pay Apple to make the second-best search engine the default? (Of course, it
did
make the second-best maps the default, but there it probably had no choice.)
I really don’t think we can answer this now: it depends what exactly the final ruling looks like, after all the appeals (what if it only caps the TAC, say?), how Microsoft reacts, whether Microsoft increases investment in Bing search quality to take advantage, what offers it choses to make, and of course what Apple really wants here. The same apples to Samsung and Motorola. Any remedies proposed by the court will be the kick-off for a multi-sided piece of game theory and corporate strategy shuffling between the court (and maybe the DoJ), Apple, the Android OEMs and telcos, Microsoft, and Google, in which the court can’t actually tell anyone other than Google what to do.
However, this also gets to an interesting question: if Apple would choose Google anyway (and that’s a big ‘if’), what was Google buying for that $20bn? Yes, to keep Google the default, but ‘default’ isn’t binary. One important strand of discussion in the trial was about what happens on screens like this.
View fullsize
View fullsize
View fullsize
When you type a query into Safari, Apple evaluates it and presents choices. In these examples, Apple is already unbundling some of that ‘default’ query traffic from Google. How much more aggressively would it think about these suggestions if it wasn’t getting a $20bn revenue share for search it chooses to send to Google? Booking.com pays $1bn a quarter for traffic, most of it to Google - what would it pay Apple to be on this screen? Amazon? Eddie Cue said Apple isn’t considering putting ads here, but taking TAC isn’t an ad. How much will Apple experiment and optimise? In different ways, this applies to Android as well - lots of startups would try to sell things like this to Samsung if Google wasn’t paying Samsung to say no. Hence, this email exchange from 2018.
View fullsize
Exhibit UPX0309
Part of the purpose of Google’s payments is to make Google the default ‘general search engine’ but part of them is also to stop device-makers experimenting with ideas that unbundle - ‘bleed off’ - things out of general search. That will change now, though of course whether it results in anything is, again, unclear.
Meanwhile, so far I’ve only been discussing Bing as the alternative, but for Apple, uniquely I think, there is also the option to create its own. The capital costs of building and running a search engine are too large for a startup, and for Samsung or Motorola (Lenovo) they’re too far out of scope: perhaps more importantly, as above, if a large sample of search queries is needed, neither of them have enough. One could consider Amazon and Meta here, but only Apple has both the money and the distribution: it can launch as the default on devices driving 30% of US search, giving it several times more query volume than Bing has ever seen.
(Note that Apple has some search activity data already: as per the screenshots above, it sees the queries, and knows which suggestions users choose, but it does not see which results people click once they’re on Google.)
This prompts an amusing dilemma for the DoJ:
it is also suing Apple
for abusing what it claims is a monopoly of ‘performance smartphones’ (a more challenging market definition than ‘general search engines’, incidentally). Now it wants more competition in search engines, but the most obvious way that such competition could emerge is for Apple to make its own new search engine the default on this ‘monopoly’ platform. (Microsoft of course already makes Bing the default search engine in the default browser on the dominant PC platform, but no-one seems to care.)
Would Apple do this, though? That’s another piece of corporate strategy game theory. It would no longer be giving up $20bn a year from Google (though it would be giving up whatever Microsoft was offering), but it would still need to spend billions of dollars a year on infrastructure and hire thousands more engineers, and find a way to make money from this. Would it reproduce search advertising, finding a way to reconcile that with its privacy branding (note that Google retains 18 months of search history by default)? Something else? And at the end, why? Why, other than the fact that Google’s search business is very profitable? No, that’s not a sufficient answer. Companies do not launch expensive and risky new projects only because a DCF shows a positive NPV, and Apple certainly doesn’t.
This reminds me a little of the ideas that floated around a few years ago that Apple would do some huge acquisition. Netflix! HBO! A record label! Peloton (no longer huge)! A bank! A telco! Yes, Apple has lots of money, and it could buy lots of things, some of which might even be accretive, but that capital has opportunity cost, Apple is a very narrowly-focused company, and adding thousands of new engineers and ad salespeople working on a new and basically unrelated product has an opportunity cost as well. As Tim Cook has put it a few times, the question is whether Apple could combine technology and experience to solve an important problem in a new way. I don’t think he would want to spend tens of billion dollars just to end up with an Apple version of Bing. That doesn’t solve a problem for anyone other than the DoJ.
Another possible approach, explored by the UK’s CMA (
study
(page 18),
summary
), is to go to the root of the natural monopoly - the query data - and require Google to provide this to its competitors on some sort of wholesale, anonymised basis. If the barriers to entry are the defaults (now blocked), the user data, and the capital costs, what if everyone could have the same data as Google? The EU’s DMA, equally, has a
clause (61)
saying that gatekeepers (ie. Google) are required to give third parties ‘ranking, query, click and view data’ but giving no indication of what precisely that means or how it should be done (this is a systemic problem with the DMA, which in trying to be broad and principles-based is often merely vague).
Providing this user data is a lot easier to say than to do, in a way that actually works. Would this data really be private? If it’s anonymous, how do you provide the history? Would it be useful without knowing all the other signal used? Should Google provide all of that too? Does this enable competition, or just create a class of ‘thin Google wrappers’ with no real innovation of their own? Would a US court want to mandate something that would require such detailed and highly technical ongoing scrutiny and management?
And yet…
We could have said all of this in 2020, when this case was filed, but the emergence of LLMs in the last two years has changed how people think about search itself. LLMs might produce better results, or different results, or different interfaces, and at any rate they represent a discontinuity, a market entry point, and a new opportunity and new way to persuade users to switch. That was (briefly) the idea behind Bing integrating LLM results at the beginning of 2023, and it’s behind the excitement in some quarters around Perplexity, while ChatGPT now has a
private search trial
. Are LLMs an end-run around Google’s reinforcement learning engine? A better way to understand pages? Does search still need that reinforcement learning?
I am rather skeptical about this: I think that at a minimum, ‘hallucination’ rates mean that LLM web search will need a huge amount of pre-processing and post-processing that’s actually best done by an incumbent (i.e. Google), but no-one really knows yet. These ideas certainly
could
change the balance of the question ‘should we set the default as Google or Bing?’ just at the moment that Google is no longer free to put $30bn in rev shares on the scale.
Meanwhile, even if you don’t think LLMs will replace Google as we know it, they can probably unbundle some of it. This winter, Apple will launch a new Siri that can send some classes of question to a ‘world model’ - for the moment, that will mean ChatGPT, but it could also be Gemini, Claude, Llama or Apple’s own foundation model (which is trained, incidentally, in Google’s cloud). Craig Federighi, Apple’s head of software, explicitly compared this to the Google integration in Safari.
View fullsize
View fullsize
View fullsize
When Google does this in Android, will it have to offer a choice screen? Will Apple? Indeed, the EU might decide that the DMA requires that today, and fine Apple a few billion dollars for not offering one (this kind of uncertainty is why Apple isn’t launching these features in the EU yet).
A lack of clarity might be the best conclusion from everything I’ve just written. It’s easy for the DoJ to explain TAC and to ask the court to block it, but much harder to say what would change. Meanwhile, I haven’t discussed at all the parallel judgement that Google has been overpricing search ads, nor the separate case around Google’s ad tech,
which will start
in September.
But one rather deterministic lesson we might draw from all the previous waves of tech monopolies is that once a company has won, and network effects have become self-perpetuating and insurmountable, then you don’t beat that by making the same thing but slightly better, and getting a judge to give you an entry point. You win by making the old thing irrelevant. Google didn’t build a better PC operating system or a Win32 office suite, Facebook didn’t do better search, and Apple didn’t do a better Blackberry. And OpenAI got 100m users in two months without going to a judge.
Artificial Intelligence
,
Apple
,
Discovery
,
Policy
Benedict Evans
18 August 2024