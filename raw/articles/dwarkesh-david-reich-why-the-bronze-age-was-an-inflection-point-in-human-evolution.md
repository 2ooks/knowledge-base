# David Reich – Why the Bronze Age was an inflection point in human evolution
**Source:** https://www.dwarkesh.com/p/david-reich-2
**Date:** 2026-05-08
**Author:** Dwarkesh Patel
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Playback speed
×
Share post
Share post at current time
Share from 0:00
0:00
/
Transcript
101
6
9
David Reich – Why the Bronze Age was an inflection point in human evolution
"Instead of being quiescent, natural selection is everywhere."
Dwarkesh Patel
May 08, 2026
101
6
9
Share
Transcript
David Reich
is back.
He and collaborator
Ali Akbari
just
published a paper
that overturns a long-standing consensus about human evolution — that natural selection has been dormant in our species since the agricultural revolution.
By scaling ancient DNA sequencing and developing a new statistical method, they found that selection has actually sped up.
Selection went especially bonkers during the Bronze Age (around 3,000 years ago).
That’s when gene frequencies for everything from immune function to body fat to intelligence were most in flux.
Over the last 10,000 years, selection pushed the genetic predictor of cognitive performance up by roughly a full standard deviation — most of it between 4,000 and 2,000 years ago.
After we finished recording, David sketched out on a whiteboard his new heretical model about who the Neanderthals really were. Luckily, I took out my iPhone and managed to record it.
He thinks the standard story (that Neanderthals are some separate archaic lineage we interbred with a little) just doesn’t fit the evidence. Instead, he proposes that Neanderthals are essentially genetically-swamped modern humans.
A small population somewhere around the Caucasus invented Middle Stone Age technology roughly 300,000 years ago and expanded outward. The ones that moved into Europe interbred with local archaic humans, got genetically swamped, and became Neanderthals. The same expansion went into Africa, met much more diverged archaic Africans, and that mixture became us.
This means Neanderthals and modern humans share the same cultural ancestry — the only difference is which archaic humans they mixed with afterward.
David is a brilliant and rigorous scholar. It was a real delight to learn from him again.
Watch on
YouTube
; listen on
Apple Podcasts
or
Spotify
.
Sponsors
Cursor
was super useful as I prepped for this episode. Whenever I had a question, I’d have Cursor kick off a few different models simultaneously and then compare their responses. I found that this led to better results than I could get out of any individual LLM. If you’ve only used Cursor for coding, you should try using it for research. Check it out at
cursor.com/dwarkesh
Jane Street
uses an internal currency called “hive bucks” to allocate compute through a real-time auction – and anyone can change anyone else’s bids or even kill their jobs! Everyone just trusts each other to act in the firm’s best interest, which is what lets the system work in the first place. If this weird and high-trust culture sounds like your kind of thing, Jane Street’s hiring at
janestreet.com/dwarkesh
Crusoe’s
ML infra team built fastokens, an open-source tokenizer that delivers a ~9x speedup over Hugging Face and up to 40% faster time-to-first token – on real production workloads! Crusoe achieved these results by parallelizing things and using some clever engineering to handle duplicates without cross-thread coordination. Learn more at
crusoe.ai/dwarkesh
Timestamps
(00:00:00) – Ancient DNA suggests strong selection over last 10,000 years
(00:15:45) – Natural selection intensified during the Bronze Age
(00:35:02) – Why didn’t evolution max out intelligence?
(00:57:21) – Evolution is limited by time, not population size
(01:09:02) – Why no farming before the Ice Age?
(01:17:13) – The Neanderthal puzzle David can’t stop thinking about
(01:54:10) – The methodology behind this breakthrough
Transcript
00:00:00 – Ancient DNA suggests strong selection over last 10,000 years
Dwarkesh Patel
I am back with
David Reich
, who is a professor of
ancient DNA
at Harvard
. How do you describe what it is that you study?
David Reich
I’m a geneticist, and I work on human history and how ancient people relate to each other and people living today.
Dwarkesh Patel
We did an interview two years ago
, which ended up being one of the most popular interviews I’ve ever done. I think people found it really compelling that there’s so much about human history we don’t know and are just learning about now as a result of the kinds of techniques your lab is using.
You have a new preprint
that’s very exciting, and I wanted to talk to you about it. Can you give me a little bit of context on what we’re talking about today?
David Reich
The dream was that when this ancient DNA field started, more than 16 or 17 years ago, we were going to learn a lot about biology —about how people’s biology changed over time— by getting DNA out of ancient human remains and tracking changes over time. And that dream has really not been realized since the beginning of this field.
The field has been a big success with regard to learning about human history. It’s resulted in surprising findings about human migrations —people not being descended from the people who lived in the same place hundreds or thousands or tens of thousands of years before— and mixture being common in human history, and sex-biased processes being common. And there have been things that were not expected from archaeology. The field’s been a big success from that perspective, but what’s not been successful is learning about biology and biological change.
One big reason has been that the sample sizes have been too small. When you have a single person’s DNA, it provides a tremendous amount of information about history. That’s because when you look at one person’s DNA, it’s not a single person. It’s many people. It’s your two parents, your four grandparents, your eight great-grandparents, 16 great-great-grandparents, and so on. Going back in time, thousands, tens of thousands, even hundreds of thousands of ancestors are contributing to people today.
When you look at the DNA of a single person’s
genome
or a
Neanderthal
genome, you have effectively tens of thousands of ancestors all represented in your data. And you can position that individual exquisitely with respect to other people from whom you have data. But when you are interested in how a particular genetic variant—that affects something like your skin pigmentation, or your ability to digest cow’s milk into adulthood, or a behavioral trait—changes over time, a single person gives you only one sample, or maybe two samples: the one in their mother and the one in their father.
To get a high-resolution picture of how the frequency changes over time, you need very big sample sizes, truly very large numbers of people. We just didn’t have that until the last few years. What motivates the study we’re talking about today, and the work that hopefully a number of groups will be doing in the coming years, is the fact that we now finally have those numbers. We can do something with the data to see how frequency changes over time.
Dwarkesh Patel
Can I ask a question? I’ll be asking a lot of naive questions through the next few hours, but why are frequency changes especially interesting?
David Reich
What we’re interested in is using the experiment of nature that’s occurred in our history, over the last tens of thousands of years, to understand what’s biologically significant in our DNA. If there has been a change in environment that a population has experienced—for example, people shifted to agriculture, began living close to domesticated animals, or moved from a cold place to a warm place, or a low place to a high place—then there’s pressure on the population to adapt to these new stresses and new needs.
The way you’re going to detect that is by seeing that the frequency of a genetic variant—that for example might allow you to live at higher altitude, or that might nudge you to have a different behavioral pattern advantageous in the new situation—pushes systematically in some direction in a way that is enough for you to detect. It’s very hard to detect slight shifts in frequency by a few percent or ten percent unless you have a very big sample size. What we’re looking for are those changes in frequency that are too extreme to be due to chance. That will tell us there have been pushes against the biology as a result of the changes in environment that people have experienced.
Dwarkesh Patel
Interesting. What did you guys find?
David Reich
Seven years ago,
Ali Akbari
, who at the time was a postdoctoral scientist in my laboratory and a few years later became a permanent staff scientist, set out to use the data we were producing to learn about biological change over time. I think the reason he was interested in our laboratory rather than other places was that a focus of our lab has been generating truly large amounts of data from ancient humans. We’ve been trying to industrialize the process, make it very inexpensive, make it high quality, and generate large numbers of samples with lots of good data for this purpose.
There’s been this large amount of data we’ve generated. And it made it possible to conceive again of asking whether there have been frequency changes over time. The mainstream view in human evolution in the last several decades has been that
natural selection
has been pretty quiescent over the last several hundred thousand years of human history.
There are several lines of evidence that have been deployed to document this. One is that if you compare diverse populations from different continents around the world, for example Europeans and East Asians, and you look at mutations that differ in frequency between these groups—all mutations differ a little bit in frequency, sometimes a lot—you can say, “What are the most different mutations in terms of frequency between Europeans and East Asians?” And there are almost no genetic changes that are 100% different in frequency between Europeans and East Asians.
Europeans and East Asians descend from a common ancestral population 40,000 or 50,000 years ago that came out of Africa and the Middle East. This population had a set of gene frequencies, and these variants bopped around randomly—a process known as
genetic drift
—or perhaps under selection in one direction or another. The time that’s passed since 40,000 or 50,000 years ago is sufficiently small on an evolutionary timescale that there’s just not much genetic differentiation on average between these two groups.
However, if there’s been natural selection, for example to help people in one place digest alcohol better, or digest milk better, what you might expect is that there would be some mutation that would have rocketed up to very high frequency. Forty or fifty thousand years is a lot of time, it’s maybe 1,500-2,000 generations. That might easily be enough time to see a 100% difference in frequency. Yet you don’t see any more than what you would expect by chance.
This combination of things made it seem that selection has just been quiescent. Maybe a few hundred thousand years ago, the ancestral human population got to some kind of optimum, and after that there hasn’t been much genetic change in one way or the other.
There have been small amounts of natural selection, or selection to remove bad mutations that are constantly raining down on the genome, but not what we call
directional selection
. That would be newly arising mutations, or mutations being pushed in a systematic direction, to help the population get to a different adaptive set point more favorable for the conditions that population is living in.
We were able to partition how much of the changes in frequencies of all the mutations that we’re seeing in the DNA—we’re looking at about 10 million positions that vary—is due to directional selection (adaptation) versus other factors, especially genetic drift. And 98% of it is other factors, especially genetic drift. It’s overwhelmingly migrations and population structure causing fluctuations in frequency.
As a result, it’s super hard to detect the signals of adaptive natural selection because they’re a tiny fraction of the total frequency change. The vast majority of it are these migrations and mixtures. Nevertheless, there’s so much natural selection, as our study has shown, that it’s actually been rampant in the genome.
Dwarkesh Patel
Can I ask a clarifying question here? Why are we discounting
population admixture
or replacement as selection? If you think about it at a group level, if one population replaces another population, isn’t that selection?
I remember from the last episode you were explaining how there have been huge changes in what kinds of people are in a specific area. One population came in and replaced the previous one, and then a new population came in and replaced that one. To the extent that the genetics are relevant to why that population replaced the other one, why should that not count towards what we understand to be selection over the last 10,000 years?
David Reich
It could count, and may count, and probably should count in some respects. But it could also be that this population replacement is due to some cultural phenomenon —technology held by one of these groups and not others. And maybe there are some genetic mutations that are contributing to this. Who knows? It’s possible.
But what you’re seeing is a whole-genome shift. What we’re looking to see is whether there’s one place in the DNA that is driving the change in a way that’s different from the rest of the genome. From a statistical point of view, what happens at these times of migration is there are just huge fluctuations in frequencies. These are extremely uninformative times for detecting natural selection. The best moments to detect natural selection are when migrations and population admixtures are not happening for a few hundred years. During these times, you can actually see the mutation slowly blowing in one direction as a result.
The way we think about the history of Europe and the Middle East for the purpose of this study is as an archipelago of little populations in space and time, each pretty isolated from each other. You have a little population in Britain isolated for a few hundred years, or a little population in Hungary isolated for a few hundred years, between big events of migration and mixture. In each of those little experiments of nature, we can ask: does this mutation slightly increase in frequency? Does that same mutation slightly increase in frequency? If all the arrows point in the same direction, we win. They’re telling us that natural selection is occurring.
For example, 4,500 years ago in Europe, almost all mutations went through huge frequency changes. That’s not because of natural selection. It’s because of the steppe migration from
north of the Black and Caspian Sea
. 40-80% of the DNA becomes
Yamnaya
from steppe pastoralists. Their frequencies of mutations were different not because of selection necessarily, but just because they had evolved in different places for thousands and tens of thousands of years. When you look at the descendant populations, there are huge changes in frequency. What you need to do is see if natural selection is explaining a shift more than you would expect by chance.
Dwarkesh Patel
So you found these locations that seem to be under selection. I have another clarifying question. You say you found 3,800 locations which you’re 50% confident have been under selection in the last 10,000 years.
David Reich
It’s 7,200 where we’re 50% confident. We’re getting about 7,200 positions in the DNA that have 50% confidence of being real. Only half of those are real—we don’t know which ones—so 3,600 of them are real.
Dwarkesh Patel
Does that also mean that outside of those 7,200, you’re confident the other locations in the genome are not under selection?
David Reich
No. If you look at the 25% probability cutoff, there will be tens of thousands, and there will be many real ones there too. In fact, multiple analyses we do suggest that the genome is vibrating with natural selection.
There are all sorts of weaker effects that would be picked up in even larger studies than we’ve done. In fact, almost every position in the DNA is correlated to another position that is being dragged in one way or the other by natural selection. Instead of being quiescent, natural selection is everywhere. Even though it’s only 2% of the frequency change, it’s tugging the positions in one direction or the other everywhere.
So we analyzed these positions that we had identified, the hundreds of positions we were super confident about. We looked to see whether they were randomly distributed in the DNA or whether they had patterns. We looked at maybe 100 or so traits where there had been genome-wide association studies for all sorts of different traits, associated with immunity or autoimmunity or behavior or metabolism, and other things.
For each of these we could ask: do the genetic variations that are known to affect these traits from genome-wide association studies have an unusual number of genetic selection signals? What we found is that there was a vast enrichment, by about four or five-fold, for immune traits. There was a super concentration of selected signals in immune traits. We also saw a strong enrichment for metabolic traits—things that might impact obesity or fat traits or Type 2 diabetes—and almost no detectable enrichment, as far as we could tell, for behavioral or psychiatric traits.
Dwarkesh Patel
Just to make sure I understand. This is not to say that behavioral or psychiatric or cognitive traits are not under selection. It’s just that the individual sites where such traits are controlled are not especially likely to be among the locations you’ve identified as under selection.
David Reich
That’s exactly right. It might seem from the results of that analysis that immune traits are highly selected and that there’s been no selection for behavior in the last 18,000 years in this part of the world. But that’s a wrong conclusion, and we have evidence that it’s a wrong conclusion. There’s clear evidence of selection also on behavioral traits.
The reason we think we see much weaker signals for behavioral traits is that behavioral traits, we know from medical studies, are underpinned by much larger numbers of genes than immune traits, which are underpinned by relatively small numbers of genes of strong
effect
. Behavioral traits are shaped genetically by a very large number of genes of weak effect, and we just don’t have the statistical power to detect these very weak signals.
When we do an analysis looking at our very strong signals of selection, that collection of very strong results is very effectively querying the immune traits, but is not very effectively querying the behavioral traits. It may still be the case, and I guess it is, that immune traits are the most selected category. But it is not at all the case—and we can prove it’s not the case—that behavioral traits are not selected.
Dwarkesh Patel
Interesting.
00:15:45 – Natural selection intensified during the Bronze Age
David Reich
We’ve been able to prove that there are two ways to reconcile the previous observations with our new observations. Remember, the previous observation is that natural selection seems to have been quiescent over a timescale of hundreds of thousands or many tens of thousands of years. Reason? That you don’t see 100% difference in frequency variance across Europeans and East Asians.
Now we’re seeing hundreds of positions that are rocketing up in frequency with selection rates of 1% or more in a lot of cases. A 1% or more selection rate will mean a rapid doubling over periods of dozens of generations. Over the 1,500 or 2,000 generations separating Europeans and East Asians, shouldn’t you see many genetic variants that are 100% different in frequency across populations?
We were able to show that this is explained by at least two factors. One is that in this part of the world—Europe and the Middle East—we are actually in a period of accelerated natural selection. One way to see this is to look at the enrichment pattern we’re observing, where immune traits are unusually associated with these selection signals. We could compare the last 5,000 years of our time period, what’s called the
Bronze Age
and further onward, to the previous 5,000 years. What we see is that this intensification of selection around immune traits, and similarly the intensification around metabolic traits, has accelerated over this time period.
It’s not like natural selection has been at the same rate over all places and times. It’s increasing over the time period we’re analyzing. Plausibly the whole time period has increased compared to previous periods. We’re in a period of intensified selection. That’s not implausible, because this is a population that went through a huge shock in terms of the way people live and the culture. Almost everyone we’re analyzing are farmers or food producers in one way or another. Farming was invented for the first time anywhere in the world in the Middle East 11,000 or 12,000 years ago. The people who invented farming exploded into Europe after 8,500 years ago, spread across the continent, and expanded rapidly.
In the Bronze Age, there was an intensification of how people lived, with much higher population densities. People were living more and more next to their animals and getting their diseases, and exchanging their diseases with the animals and with each other. This is a period of rapid change in how people are living, resulting in different biological needs of this population. It’s not surprising, perhaps, that in the context of these dramatic changes, the biology of the population might not be ideally adapted.
There might be what some people call an
evolutionary mismatch
, where you take a genetic variation that evolved in hunter-gatherers and put it into farmers or pastoralists, and it’s not exactly right. What you’re seeing is the DNA of this population, which descended from hunter-gatherers only 10,000 years ago, reacting to the shock of having been moved into an agricultural, Bronze Age, high-population-density, urban environment. A hypothesis is that what we’re seeing is the adaptation that occurs as a result.
Dwarkesh Patel
In the paper you have many examples of this intensification of selection around the Bronze Age. It might be helpful to go through some of these.
David Reich
One of the things we do in this work is look carefully at many of these positions in the DNA. We actually have an internet browser called the
AGES
browser, which Ali and a colleague of his—who’s a co-author of our paper—built. It allows you to query each of these 10 million positions and see the trajectories at each position and the evidence for selection.
One of the things we see is that, while for the most part the signals of natural selection we detect are consistent with constant natural selection over time, in a handful of them we’re able to see that there’s been a reversal or a radical change in natural selection. Very often that occurs in the period between 5,000 to 2,000 years ago, which is the Bronze Age and the
Iron Age
, a period of rapid population growth and rapid movement to intensive use of many technologies that were not used that way before.
An example of this is the
TYK2
genetic variant that is a major risk factor for severe tuberculosis, which is the most important infectious disease killer in the world today. If you look at this major risk factor for tuberculosis, this variant rockets up in frequency from 8,000 or 6,000 years ago to maybe 9% or 10% in this part of the world. Then it rockets down in frequency in the last 3,000 years. In both cases, there’s very clear evidence of natural selection, in the first case to increase in frequency, and in the next case to decrease in frequency.
A possible reason is the spread of tuberculosis. It maybe becomes endemic in the population 2,000 or 3,000 years ago. That’s potentially consistent with pathogen sequence data and other lines of evidence. And maybe this variant was protecting against something before then, but then tuberculosis became significant after that point, and it was so bad that it pushed in the opposite direction. That’s speculative.
Dwarkesh Patel
The thing it was protecting against was probably another disease?
David Reich
Maybe.
Dwarkesh Patel
One of the big takeaways for me from the paper was just that something weird happened in the Bronze Age. As you said, across trait after trait, the selection intensifies during the Bronze Age.
This makes sense for some things. For example, why do we see
lactase persistence
, where adults can process milk, intensified during this period? This is the time when we start using cattle not just for the meat, but also for milk and wool and other secondary products. So it makes sense why lactase persistence would matter more.
But then there are other things that seem like they should have been relevant since the dawn of agriculture. I forget the exact name of the allele, but was it
FADS1
, which helps convert plant fatty acids into long-chain fatty acids that your body needs? That’s obviously relevant when you move from a diet of meat as a hunter-gatherer to a diet of cereals.
That is also one I think you found was under especially high selection 5,000 to 3,000 years ago. So what’s going on? Why is the Bronze Age so special across all these different traits that you’re observing?
David Reich
So this FADS1/2 variant is a vegetarian/meat-eating adaptation. Already in work prior to this, Ian Mathieson, who worked with me in 2015,
identified this as a very strongly selected variant
. It’s actually ancient. You see copies in
archaic humans
too.
One of the findings of our paper is the
ABO blood system
. You get your blood typed as A, B, and O. The B variant has increased up to 10% at the expense of A, but previous work has shown that A and B were both already present in the ancestor of humans and gibbons and other apes. Some of these mutations have been going back and forth and fluctuating over different time periods.
But we’re talking about changes in the Bronze Age. The TYK2 variant for tuberculosis risk, a multiple sclerosis risk variant, inflected and increased in frequency before the Bronze Age, and then 2,000 or 3,000 years ago reversed in that period. There are differences in Northern Europe where this process is super strong, very strong positive selection, very strong negative selection. And then in Southern Europe, only a little bit, and not even very strong negative selection.
For
haemochromatosis
, which is pathogenic iron buildup that causes problems in Europe, that too has reversed around this period. In some of the complex traits that maybe we’ll talk about later, these traits too have periods of intensification of natural selection. For example, depigmentation: Europeans have gotten lighter skin over the last 10,000 years. You can see it in our data. The period of strongest depigmentation is between about 4,000 to 2,000 years ago, and then after that it’s much less.
This seems to be a very impactful, eventful, important period where a lot of the processes we are seeing become very powerful. It’s surprising on first principles. You might think, before you walked into this genetic data, that the big change is going to be starting to grow plants and maybe farm animals. That happens in the
Neolithic
, beginning 10,000-12,000 years ago, and spreads into Europe after 8,500 years ago. But actually, the intensification happens 5,000 years ago, 4,000 years ago.
It’s really interesting. This observation of that being an inflection point tells us something about when humans, at least in this part of the world, were wrenched into a way of living that was so different from how their hunter-gatherer ancestors lived that the organism had to adapt very strongly. It may be that the degree of that wrenching process moving into the Bronze Age was qualitatively greater than the degree of the wrenching process that happened from the initial transition to growing plants. That’s surprising, because our cartoon picture is that the big transition is farming. But the biological readout is saying our genome is reacting much more strongly to these events that happened 5,000 years ago.
Dwarkesh Patel
You did some work with Bhatia and many other colleagues in 2014 where you were
looking at 20,000 or 30,000 African American genomes today
. You were saying, “Look, there’s 80% West African DNA and then 20% European DNA. Can we look at their genomes today and see that their allele frequencies are much different than we’d expect from this admixture?” Correct me if I’m wrong, but you found that they weren’t.
That is to say, over 200 or 300 years of extremely intense environmental change—going from chattel slavery to a completely new environment—there’s no effect of natural selection. So we see episodes like this where we don’t see natural selection, but then the Bronze Age apparently must have had an even stronger effect, where the change in environment is even stronger than what we see from Africans in Africa being migrated to the New World and living under slavery.
David Reich
That may be the case. It also may be the case that that period is just too short to see much effect. In the Bhatia et al. paper, where we looked at about 30,000 African Americans, we looked to see whether—instead of the average percentage of around 80% West African ancestry—there were some places in the DNA with significantly more than 80%, or significantly less than 80%. That’s what you would expect if there were natural selection for some genetic variant from Europeans or from Africans.
We didn’t see any place in the DNA that was significantly different from what you would expect by chance. One possible explanation is just that there’s only a handful of generations, maybe five, over which natural selection would operate. So if the selection was 2% a generation, you would still only see a 10% compounded effect, and there’s just not enough time to detect it.
But the Bronze Age is not 300 years, it’s 3,000 years. It’s the power of compound interest, and you have enough time to begin to see a strong effect. This really, really does seem to be a very impactful time in terms of human history, and you can see it in our complex traits. Look at pigmentation, for example, which is the strongest signal of selection for a complex trait in our data set. You look at genetic mutations that are known to affect pigmentation. You add up their effect across all of the DNA, there’s dozens or hundreds of them. You look to see when natural selection is strongest, and the time period is really 2,000 to 4,000 years ago.
For some of these other traits as well, you see again that the time period over which selection is strongest is 2,000 to 4,000 years ago. For example, if you look at genetic variants that affect measures of cognitive performance, such as performance on intelligence tests in white British people today. This is of course a very strange trait to measure in the past because there were no intelligence tests and there was no school. But it is a predictor today, and you can look at how it’s changed in the past.
We see very strong natural selection for this combination of genetic variants that predicts people’s performance on IQ tests and is also highly correlated to the predictor of the number of years of school or the household wealth of people. All crazy traits in the past because there was no wealth in the past, there was no school in the past. But if you look at the predictors today, there is a strong movement in a systematic direction, a large effect, about a standard deviation on the scale of modern variation.
We can do this trick of looking to see whether there are periods of time when this natural selection has occurred more intensely or less intensely. We drag a 2,000-year window through our data, and we repeat our whole analysis, not on 18,000 years, but just on a short 2,000-year window. We can measure the strength of selection in each of these 2,000-year windows. What you see when you look at intelligence is that this maxes out in the Bronze Age, between 5,000 and 2,000 years ago.
The impact in the last 2,000 years is almost nothing. There’s no evidence of natural selection at all. Your bias coming into this, my bias perhaps, might be that if there’s any signal of natural selection on this trait at all, that it would be unusually strong in the last 2,000 years. Maybe this is a time of industrialization. Maybe this is a time of greater need for this particular trait. But in fact, there’s no evidence of natural selection at all in the last 2,000 years. There’s very strong evidence between 2,000 and 4,000 years ago, where instead of a one standard deviation strength of selection, it’s a two standard deviation strength, averaged over this time period.
Dwarkesh Patel
The standard deviation here is how much the polygenic score for the trait itself moves?
David Reich
How much the polygenic score for the trait moves over a 10,000-year period within a population that is held constant in terms of its ancestry. What we’re actually doing is looking in our data set at a heterogeneous group of people. There’s Southern Europeans and Northern Europeans and hunter-gatherers and farmers. At different times in the past, those groups are more or less represented.
The whole strength of the methodology Ali Akbari developed is that it corrects for that changing ancestry over time. Really what’s being asked here is that we’ve divided up our whole data set into an archipelago of little populations in different places in space and time. We’re asking in each place in space and time: a little pocket of people in Britain from 4,000 years ago to 3,500 years ago, a little pocket of people in Hungary, a little pocket of people in Italy from 2,000 years ago to 1,500 years ago. In each of these places, where the ancestry is relatively similar without being too disrupted in that short period by migrations, we watch to see if the genetic changes blow in the same direction. We’re measuring the strength of selection at each point in time after correcting for the big population changes that have occurred.
Dwarkesh Patel
The effect here is huge then. One standard deviation above the median would be somebody in the 85th percentile. You’re saying the effect of selection has been so strong that comparing 10,000 years ago to now, the median has gone to the 85th percentile. That’s just a huge effect over the last 10,000 years on something like intelligence or the thing that predicts household income.
Especially given that this is only 2% of the change in allele frequencies, and the 98% is coming from migration… It’s stupendous to think about what the impact of migration is, if this alone is driving a standard deviation change in these kinds of qualities, at least among the kind of variation we see in the world today.
David Reich
One thing you can see in the data is that the migration impact is huge. For example, if you look at the trajectory for measures of cognitive performance—scores on intelligence tests in white British people today—but you look at the predictor of that in people in ancient times, the estimate for the hunter-gatherers of Europe is three standard deviations below the modern mean. So that’s hugely different.
Then you see a huge jump from them to the farmers, who are at the mean, at zero. That’s migration. What you’re seeing is that those two groups had different set points for those traits. And then the steppe pastoralists have a lower set value.
You see huge fluctuations in the predictor of this trait over time. That doesn’t prove selection. That’s just migration. But what our test is telling you is: in addition to those fluctuations due to migration, is there a consistent effect of natural selection blowing the trait in the same direction over all places and times? That’s what we’re detecting.
00:35:02 – Why didn’t evolution max out intelligence?
Dwarkesh Patel
There’s this theory called the
collective intelligence hypothesis
, which is the idea that selection for intelligence has actually been in the opposite direction. As society has developed, there’s been more specialization, and if there’s more specialization, each person only needs to understand a smaller and smaller part of the world. Therefore, the ancients were actually much smarter than us, and we’ve evolved down in intelligence.
Your results seem to point in the opposite direction. Although there hasn’t been selection in the last 2,000 years as society has gotten more complicated, at least when society began, there was more need for the kind of thing that predicts intelligence today.
The reason that’s surprising is, if you think about hunter-gatherers—reading your colleague
Joseph Henrich’s
book
—the amount of information they needed to hold onto and assess, everything from how to process food, to how to build shelters, fire, et cetera, compared to my world, where I just need to know how to set up mics and ask questions… It seems like the demands on intelligence should have been way higher in the ancestral environment. So it’s very surprising that the beginnings of civilization increased the selection on intelligence.
David Reich
This is the power of data. I think if you asked Joe prior to this work what the hunter-gatherer selection would be and where their set point for this particular trait would have been… I think he probably wouldn’t have made a very strong prediction, but he would have said, “Maybe you would have expected it to have a high predicted value of this trait because these people were really having to do a lot of things and figure a lot of stuff out. Maybe once you have more complex societies, there would be more of a collective brain, and maybe there’d be selection against this trait.” In fact, it’s the opposite in some ways.
It’s the power of data. It’s not what you expect.  It’s actually the value of data to try to make sense of all these things. It’s very interesting. The genetic predictor of intelligence, there are lots of things that are confusing about it, so it’s worth talking about. Or the
genetic predictor of years of schooling
, which is highly correlated to it and is measured even better.
If you look at the genetic predictor of years of schooling, there’s another
amazing study from 2017
from a group in Iceland that looked at this measure over the last hundred years in Iceland. It looked at older people and younger people born more recently. There’s an estimated 0.1 standard deviation decrease in the genetic predictor of intelligence in Iceland just within one century. It’s an absolutely huge effect over a short period. This is selection against years of schooling. If I said intelligence, I didn’t mean to. It’s selection against the genetic predictors of the number of years of school.
One possible interpretation of this—hand-wavy—is that what’s being measured here is not selection for years of schooling or for real intelligence, but for another trait altogether that’s correlated to both of them. For example, the predictor of the number of years of schooling is very strongly correlated to the age at which women have their first kid. If you control for that, all of the signal of years of schooling goes away. So maybe what you’re measuring is women’s decision about when to have children.
If you have children earlier, you don’t go to school as much. If you have children later, you go to school more. Maybe it’s some kind of measurement of delaying gratification or putting things off or planning. The same trait is correlated to body mass index, to obesity, and to walking pace. So is this really intelligence as we think about it, or is it something else that manifests itself differently at different times in the past?
Dwarkesh Patel
Obviously, a trait like years of schooling was not itself a meaningful thing in the past. The underlying things for it seem to have been under strong selection. Whatever in the genome predicts years of schooling seems to have been under strong selection. How should we think about this? What’s the actual thing that’s changing in the genome?
David Reich
There are two things going on that you need to think about. Years of schooling is connected to so many other things genetically. If you look at the genetic predictor of years of schooling—this trait has been measured in millions of people now—it’s correlated to really surprising things. It’s correlated to the age at which women have their first kid. It’s correlated to people’s obesity. It’s correlated to people’s walking pace. It’s correlated to people’s household wealth. It’s correlated to a variety of other traits that seem quite different from it.
If you think you’re actually measuring the genetic prediction of intelligence, or actual studiousness, you should think again because there are many things that it’s correlated to. There seems to be some kind of general trait that you could maybe think of as
executive function
or a propensity to defer gratification—I’m just waving my hands—that is under selection. It pushes all these traits in the same direction one way or the other, and at different times in the past, it’s advantageous or disadvantageous.
When we found this signal of the genetic propensity to go to school for more years as it manifests itself in white British people today, we were incredulous. How could this be? Maybe this is a problem. So we did a few tests to try to figure out whether this was real. One of the tests we did was that we looked for a study where this measurement of the number of years of school was done not in Europeans, but in Chinese people in China. We looked at the effect size of many variants as they affected the number of years of school in China, and we saw whether they had a correlation to the trajectory of those same genetic variants in Europeans over the last 10,000 years.
These are two parts of the world where the populations have been essentially completely disconnected. There’s no way by chance that the trajectory in Europeans over the last 10,000 years would have anything to do with the effect on years of schooling in China today. But there’s actually a huge statistical correlation, a five or six standard deviation correlation between the effect size of variants on the number of years of school in China today and the trajectory in Europe. It’s just as strong, actually, as the effect size of variants in Europeans on years of school to the trajectory in Europeans. We just could not see a way this could happen by chance. Once we saw that, we felt quite convinced that this was a real signal and that somehow there has been natural selection to increase the genetic changes that today manifest themselves as predicting more years of schooling.
Dwarkesh Patel
Just to make sure I understood, you’re looking at this ancient DNA in Europe. You’re saying it seems to predict years of schooling for modern people in Europe, or at least selection on that ancient DNA seems to predict more years of schooling in modern Europe. You also find that the same variants predict more years of schooling for Chinese people in China. So this is not just some weird artifact from the way these
GWAS
were done in Europe. These parts of the genome seem to robustly predict the kind of thing that actually leads to more years of schooling, at least in people today.
David Reich
Correct.
Dwarkesh Patel
Stepping back, I want to understand what this tells us about what actually changed in our environments over the last 18,000 years. We talked a little about what happened after the Bronze Age. We were talking about this during the collective intelligence part of the conversation. It’s surprising to me that things like intelligence, or lack of schizophrenia—things that just seem robustly good—were not maxed out before the Bronze Age.
The diversity among different populations was so big that you have the European hunter-gatherers having three standard deviations less predicted value for what they would score on an intelligence test if it existed. But they were existing in the real world in a place where intelligence matters.
How can it be that this was not a trait… You just look at the human body or any animal, and evolution has been acting on it so strongly to make it functional for the things it needs to do. And this one thing, which seems so relevant—especially to what human hunter-gatherers needed to do—doesn’t seem to have been under that strong selection in the
Mesolithic
or
Paleolithic
eras?
David Reich
I think that’s a great question. As we talked about before, selection is very effective. It can move the mean value of traits within hundreds or thousands of years in one direction or the other if that’s adaptive in a particular environment. So you might wonder, isn’t intelligence good in all contexts and places in time? There are a number of ways to think about that.
First of all, we are speaking from the point of view of a society which intensely values this particular trait, the ability to score well on IQ tests or things like them, or to go to school for a long time. I think it’s unprecedented in human history that we live in a time like this. If you look at the Hebrew and Christian Bible, and you look at how much intelligence is valued, it’s basically not at all.
Dwarkesh Patel
But when the Bible was being written,
especially the Old Testament
, that’s exactly when selection for intelligence is at the highest point it’s apparently ever been.
David Reich
Exactly. But there it’s about strength or courage or religiosity. Those are the values. If you read
Homer
or the texts of other religions, it’s not intelligence. It’s beauty and other things. This value system which has a hyper-focus on smarts is not obviously a trait value that’s been common in the past. You might think that in certain communities there might be valuation of things that are more proximate to years of schooling. But really broadly, it’s not been a high value in the population.
Dwarkesh Patel
Obviously, the thing we care about is not direct performance on an IQ test, especially in the past. The thing I’m trying to understand better is intelligence more broadly. Maybe IQ-test intelligence is just not that correlated with, “Here is a new-world environment, go figure out how to process food there and make shelter and everything else.”
Your colleagues like Joseph Henrich have talked about how modern people underestimate the difficulty of doing this kind of thing with a small band of people. Maybe that’s not IQ-test intelligence, and that’s why we don’t see that strong a selection effect on this thing. But intuitively, regardless of the value system, it just seems very valuable to have this trait maxed out.
David Reich
I’m being very speculative. Let me give you two examples of how I’m thinking about this, not that I’m a particularly good authority on these things. As I mentioned, a lot of these traits, which are quite disparate, are highly correlated to each other. Obesity, years of schooling, walking pace, performance on IQ tests, household wealth, all these crazy traits seem to be governed to a substantial extent by a shared combination of genetic variants.
Let’s think about what this might mean. In Iceland in the last hundred years, there’s been selection against this combination of variants. One possible interpretation is that it’s basically selection for two ways of investing in your children: having many kids and not investing a lot in them, or having few kids and investing more in them. If you invest in deferring having kids, having more wealth, having more resources, and putting more into each kid, you’re going to have lower fertility and fewer kids. That’s going to result in lower fertility, but those kids might survive more and do better in society. Alternatively, you can just have as many kids as you can and invest less in them. They might individually have less good outcomes, but in a time of plenty—which is potentially Iceland in the 20th century—it might make sense to have more kids and invest less in them.
There’s a toggle between having more kids and investing less in them, and having fewer kids and investing more in excelling in various ways. You can imagine that at different times and in different places… In ecology, there are different ways. Mammals often invest a lot with a pregnancy and a small number of children, whereas fish will spawn huge numbers of offspring into the river, the great majority of whom will be eaten. But that is an effective way to produce offspring in certain conditions. So there will be a toggle depending on the environmental conditions back and forth between investing in large numbers of offspring with less investment, or smaller numbers of offspring with more investment. Maybe we’re just seeing that move back and forth over different places and times.
Similarly, for schizophrenia and bipolar disease, how could this ever be advantageous? Maybe what we’re seeing with these diseases is a readout of some spectrum of traits that in some contexts might be advantageous. Maybe being anxious, imaginative, or neurotic might be helpful in a shamanistic tradition or a religious tradition which values people who can have visions or be creative. Maybe these are subclinical versions of schizophrenia or bipolar disease that in certain times may be advantageous and in other times may be disadvantageous. You might just be seeing selection for different types of creativity or other thinking that can be valuable in different contexts.
I’m waving my hands here, but my sense is that these complex traits have not pushed in one direction because there are advantages to both ends of the spectrum, and there are multidimensional impacts of these different traits.
Dwarkesh Patel
Julian Jaynes
has this famous theory in
The Origin of Consciousness in the Breakdown of the Bicameral Mind
. I’m 