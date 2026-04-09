# MacBook Neo, The (Not-So) Thin MacBook, Apple and Memory
**Source:** https://stratechery.com/2026/macbook-neo-the-not-so-thin-macbook-apple-and-memory/
**Date:** March 9, 2026
**Author:** Stratechery
**Score:** 4/5 | **Concepts:** ai-coding-agents-and-developer-role-shift
**Scoring reason:** Directly argues for the persistence and expansion of the AI engineer role using Jevons Paradox and hiring data, meaningfully addressing developer role shift.

Listen to this post:
Your browser does not support the audio element.
Good morning,
On
last Thursday’s Sharp Tech
, Andrew and I discussed the situation between Anthropic and the U.S. government; I was optimistic an agreement would be reached, but shortly after recording
the Pentagon did officially name Anthropic a Supply-Chain Risk
; as expected,
Google, Microsoft, and Amazon all confirmed
that they would continue to serve Anthropic models.
Meanwhile, oil prices are spiking, and Asian markets are crashing; maybe the only computer we’ll all be able to afford is Apple’s latest offering!
On to the Update:
MacBook Neo
From
Bloomberg
:
Apple Inc. rolled out the $599 MacBook Neo in its biggest push yet into low-end laptops, aiming to challenge Windows PCs and Chromebooks for budget-minded shoppers. The machine is $400 less than any new-generation laptop Apple has sold before, coming in well below the now $1,099 MacBook Air. The MacBook Neo will be offered in citrus, silver, indigo and blush color options, potentially making it appealing both to students and mainstream consumers. The MacBook has a 13.0-inch screen, making it one of the company’s smallest laptops to date. The MacBook Air, in contrast, offers a 13.6-inch display. Another twist: The Neo runs on an iPhone A18 Pro chip, marking the first time Apple is using a smartphone processor in a Mac. The release is a major shift for Apple, which has been reluctant for decades to launch a low-end Mac laptop. But the speed of its iPhone processors allowed the company to bring its pricing down measurably without significantly sacrificing performance.
The chip is definitely the most interesting place to start; an A-series chip is typically about two-thirds the size of an M-series chip, which right off the bat means a lower price. TSMC charges per-wafer; a smaller chip means more chips per wafer, i.e. a lower price per-chip. Moreover, smaller chips mean better yields, which also corresponds to lower prices.
One interesting aside on this: Apple first started making a “Pro” version of A-series chips with the A17 Pro (there was no plain A17, but there is an A18, and this year there is an A19 and A19 Pro); in the case of the A18 versus A18 Pro, the latter has both more L2 and L3 cache, and two more GPU cores, which makes the chips about 33% larger.
What is interesting about these Pro chips is that, until now, they have only been used in iPhones Pro, which are only sold for one year. That means that any excess chips end up being unused — until now! Notice that the MacBook Neo does
not
have this year’s A19 Pro chip, but rather last year’s, giving Apple more leverage on last year’s iPhone Pro chips. Moreover, the MacBook Neo actually only promised 5 GPUs — the A18 Pro in the iPhone 16 Pro had 6 GPUs — which is to say that Apple is binning those chips as well: some number of A18 Pros with defects on just one of the GPUs are going into the Neo (and if the chips are fine, then one of the GPUs is turned off). You could make the case that some number of these chips are effectively free for Apple!
As for price, the A18 Pro is packaged with 8GB RAM; the new M5 MacBook Air starts at 16GB RAM, which significantly increases the costs of the total package. It’s hard to know exactly what the price difference is, but it’s definitely meaningful, both because of the smaller chip and the RAM differences. Still, I would guess the chip accounts for significantly less than $100 of the final retail price difference (once you include Apple’s margins). In other words, there is a lot more cost-savings going into this computer than just the chip:
There is no Touch-ID on the base model (but there is on the $699 model).
There is a significantly smaller battery (36.5 Wh vs 53.8 Wh).
Despite having a lower powered chip and a significantly smaller battery, the MacBook Neo is slightly thicker and weighs the same as the Air, which indicates that the former has significantly bulkier/cheaper components.
There is no MagSafe, no safe-charging, and the included charger is significantly lower capacity than the one included with the Air.
The display is slightly smaller (with larger bezels), has a smaller color space, and does not include True Tone technology for changing color warmth.
There is no backlit keyboard and the touchpad is mechanical, not force touch.
There is no WiFi 7 or Thread support, and one of the ports is USB 2 only.
There are two fewer speakers, the headphone jack is not powered, the microphone array is smaller, and the webcam is inferior.
In short, I find this computer to be very disappointing, in one particular respect: I would love the Apple Silicon version of
the old ultra-thin one-port MacBook
, which started at $1,299, above the MacBook Air, with a premium look-and-feel to match. What could Apple make with an iPhone chip if cost wasn’t a concern? Clearly, however, I’m not the target customer for this device, because cost is obviously the overriding concern. And, if I take off my consumer hat and put my analyst hat on, this seems like a huge win: Apple is significantly increasing the addressable market for the Mac in a way they never have previously, and right now is the perfect time to do so.
The (Not-So) Thin MacBook
There has been a lot of talk in the Apple blogosphere in the wake of this computer about the company’s refusal to make a Netbook in the early 2000s;
John Gruber linked
to a 2007 Q&A session with Steve Jobs where
he said the following
:
https://videopress.com/v/08F8bIJr?resizeToParent=true&cover=true&posterUrl=https%3A%2F%2Fstratechery.com%2Fwp-content%2Fuploads%2F2026%2F03%2Fjobs-we-cant-ship-junk_mp4_avc_240p.original.jpg&preloadContent=metadata&useAverageColor=true
I can tell you what our goal is. Our goal is to make the best personal computers in the world and to make products we are proud to sell and would recommend to our family and friends. And we want to do that at the lowest prices we can. But I have to tell you, there’s some stuff in our industry that we wouldn’t be proud to ship, that we wouldn’t be proud to recommend to our family and friends. And we can’t do it. We just can’t ship junk.
So there are thresholds that we can’t cross because of who we are. But we want to make the best personal computers in the industry. And we think there’s a very significant slice of the industry that wants that too. And what you’ll find is our products are usually not premium priced. You go and price out our competitors’ products, and you add the features that you have to add to make them useful, and you’ll find in some cases they are more expensive than our products. The difference is we don’t offer stripped-down lousy products. We just don’t offer categories of products like that. But if you move those aside and compare us with our competitors, I think we compare pretty favorably. And a lot of people have been doing that, and saying that now, for the last 18 months.
The first thing that has happened to make this computer possible is, of course, Apple Silicon; the A18 Pro is a very capable processor, particularly in terms of single-thread performance. This chart is from
Six Colors
:
Single-thread performance is what you need for running most of your day-to-day apps on a computer, within reason; if you run the sort of apps that need multi-core performance, you are actually probably going to run into trouble with the 8GB RAM limit first. That, though, gets to another point that makes the Neo compelling: what has changed for Apple is not simply that their processors have gotten so much more capable, but that the most compelling and resource-hungry apps in the world will run perfectly fine on the Neo, because they run in the cloud. I’m talking, of course, about AI, and a point I made a couple of weeks ago in
Thin is In
:
This combination of factors will only accentuate the dominance of the thin client paradigm:
First, if compute isn’t yet good enough, then workloads will flow to wherever compute is the best, which is going to be in large data centers.
Second, if larger models and more context makes for better results, then workloads will flow to wherever there is the most memory available.
Third, the expense of furnishing this level of compute means that it will be far more economical to share the cost of that compute amongst millions of users; guaranteeing high utilization and maximizing leverage on your up-front costs.
[…]The plateau in thick client capability is happening at the same time that the need for any capability at all is disappearing, thanks to these entirely new AI workflows that happen in the cloud. Yes, it sucks that AI is making memory scarce and personal computers of all kinds — from PCs to phones to consoles — more expensive; it’s also making them less important than ever.
A MacBook Neo — by virtue of being able to run an OpenAI or Claude client — will have access to the most computing power in the history of consumer computing hooked up to the most compelling capability ever; it won’t matter in the slightest that it only has 8GB of RAM and a smartphone processor. Yes, the latter in particular really is quite impressive, but Apple hasn’t just waited for hardware capabilities to make a cheap Mac good, but has benefited from the most important software capabilities being completely divorced from the device you use to access them.
Apple and Memory
I lost my bet to Gruber
about Apple increasing prices for MacBook Pro memory; I think Gruber was right that Apple’s memory pricing was already so egregious that they could easily absorb higher prices.
At the same time, I noted above that the M5 MacBook Air starts with 16GB RAM; I wonder if I should have made my bet about the MacBook Air’s pricing! It’s up $100 for the entry-level model, although that does come with double the base storage as last year. Of course the existence of the Neo makes abandoning the $999 starting price point much more viable; I suspect Apple was happy to take the out, particularly since the Air is their most popular computer.
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