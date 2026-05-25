# Michael Nielsen – How science actually progresses
**Source:** https://www.dwarkesh.com/p/michael-nielsen
**Date:** 2026-04-07
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
132
14
13
Michael Nielsen – How science actually progresses
The true story of Einstein, Newton, and Darwin
Dwarkesh Patel
Apr 07, 2026
132
14
13
Share
Transcript
Really enjoyed chatting with Michael Nielsen about how we recognize scientific progress.
It’s especially relevant for closing the RL verification loop for scientific discovery.
But it’s also a surprisingly mysterious and elusive question when you look at the history of human science.
We approach this question stories like Einstein (who claimed that he hadn't even heard of the famous Michelson-Morley experiment, which is supposed to have motivated special relativity, until after he had come up with the theory), Darwin (why did it take till 1859 to lay out an idea whose essence every farmer since antiquity must have observed?), Prout (how do you recognize that isotopes exist if you cannot chemically separate them?), and many others.
The verification loop on scientific ideas is often extremely long and weirdly hostile. Ancient Athenians dismissed Aristarchus’s heliocentrism in the 3rd century BC because it would imply that the stars should shift in the sky as the Earth orbits the sun. The first successful measurement of stellar parallax was in 1838. That’s a 2,000-year verification loop.
But clearly human science is able to make progress faster than raw experimental falsification/verification would imply, and in cases where experiments are very ambiguous. How?
Michael has some very deep and provocative hypotheses about the nature of progress. One I found especially thought-provoking is that aliens will likely have a VERY different science + tech stack than us. Which contradicts the common sense picture of a linear tech tree that I was assuming. And has some interesting implications about how future civilizations might trade and cooperate with each other.
Watch on
YouTube
; listen on
Apple Podcasts
or
Spotify
.
Sponsors
Labelbox
researchers built a new safety benchmark. Why? Well, current safety benchmarks claim that attacks on top models are successful only a few percent of the time, but the prompts in those benchmarks don’t reflect how real bad actors actually write. You can read Labelbox’s research
here
. If this could be useful for your work, reach out at
labelbox.com/dwarkesh
Mercury
has an MCP that lets you give an LLM access to your full transaction history, including things like attached receipts and internal notes. I just used it to categorize my 2025 transactions, and it worked shockingly well. Modern functionality like this is exactly why I use Mercury. Learn more at
mercury.com
Jane Street’s
ML engineers presented some of their GPU optimization workflows at GTC, showing how they use CUDA graphs, streams, and custom kernels to shave real time off their training runs. You can watch the full talk
here
. And they open-sourced all the relevant code
here
. If this kind of stuff excites you, Jane Street is hiring — learn more at
janestreet.com/dwarkesh
Timestamps
00:00:00 – How scientific progress outpaces its verification loops
00:17:51 – Newton was the last of the magicians
00:23:26 – Why wasn’t natural selection obvious much earlier?
00:29:52 – Could gradient descent have discovered general relativity?
00:50:54 – Why aliens will have a different tech stack than us
01:15:26 – Are there infinitely many deep scientific principles left to discover?
01:26:25 – What drew Michael to quantum computing so early?
01:35:29 – Does science need a new way to assign credit?
01:43:57 – Prolificness versus depth
01:49:17 – What it takes to actually internalize what you learn
Transcript
00:00:00 – How scientific progress outpaces its verification loops
Dwarkesh Patel
Today, I’m speaking with
Michael Nielsen
. You have done many things. You’re one of the pioneers of
quantum computing
, wrote the
main textbook in the field
of the
open science movement
. You wrote a
book about deep learning
that
Chris Olah
and
Greg Brockman
credit with getting them into the field. More recently, you’re a research fellow at the
Astera Institute
and writing a book about religion, science, and technology.
I’m going to ask you about none of those things. The conversation I want to have today is, how do we recognize scientific progress? It’s especially relevant for AI because people are trying to close the
RL
verification loop on scientific discovery. What does it mean to close that loop? But in preparing for this interview, I’ve realized that it’s a more mysterious and elusive force, even in the history of human science, than I understood.
I think a good place to start will be
Michelson-Morley
and how
special relativity
is discovered, if it’s different from the story that you get off of YouTube videos. I will prompt you that way, and then we’ll go in there.
Michael Nielsen
Michelson-Morley is the famous result often presented as this experiment that was done in the 1880s that helped
Einstein come up with the special theory of relativity
a little bit later, changing the way we think about space and time and our fundamental conception of those things.
And there’s a big gap, I think, between the way
Michelson
and
Morley
and other people at the time thought about the experiment and certainly the way in which Einstein thought or did not think about the experiment. In actual fact, he stated later in his life he wasn’t even sure whether he was aware of the paper at the time. There’s a lot of evidence that he probably was aware of the paper at the time, but it actually wasn’t dispositive for his thinking at all. Something else completely was going on.
What Michelson and Morley thought they were doing was testing different theories of what was called the
ether
. If you go back to the 1600s,
Robert Boyle
introduced the idea of the ether. We know that sound is vibrations in the air. Boyle and other people got interested in the question of whether light is vibrations in something, and they couldn’t figure out what it was. Boyle did an experiment where he tested whether you could propagate light through a vacuum. He found that you could. You couldn’t do it with sound. He introduced this idea of the ether, and for the next two hundred or so years, people had all these conversations about what the ether was and what its nature was.
The Michelson and Morley experiment was really an experiment to test different theories of the ether against one another, in particular to find out whether or not there was a so-called ether wind. The idea was that the Earth is maybe passing through this ether wind. And if it is passing through the ether wind and you shoot a light beam parallel to the direction the ether wind is going in, it’ll get accelerated a little bit. If it’s being passed back in the opposite direction, it’ll get slowed down a little bit, and you should be able to see this in the results of interference experiments. What they found, much to their surprise, was that in fact there was no ether wind. That ruled out some theories of the ether, but not all, and Michelson certainly continued to believe in the ether.
Dwarkesh Patel
This is what was a shocking part of reading this story from the biography of Einstein that you recommended by... what was his first name?
Michael Nielsen
Abraham Pais.
Dwarkesh Patel
Abraham Pais.
Subtle is the Lord
. Also from
Imre Lakatos
,
The Methodology of Scientific Research Programmes
. The way it’s told is that Michelson-Morley proved that the ether did not exist. Therefore, it created a crisis in physics that Einstein solved with special relativity.
What you’re pointing out is he actually was trying to distinguish between many different theories of ether. If you’re in space or if you’re on Earth, it’s the same direction of ether, or maybe the ether wind is being carried around by the Earth, and so you can’t really experience it on Earth. But if you go to a high enough altitude, you might be able to experience it. In fact, Michelson’s experiments, the famous one is 1887, but he conducted these experiments for basically two decades.
Michael Nielsen
For longer than that. He conducted the first one in 1881, I think, but he continued to believe until he died. He died, I think it was 1929 or so. It was the late twenties. He was still doing experiments in the 1920s about whether or not the ether existed. So he continued to believe in the ether to the end of his life. I think the last public statement he made was a year or two before he died, and he basically still believed it at that point.
Dwarkesh Patel
In fact, there was another physicist,
Miller
, who kept doing these experiments in the 1920s. He thought that if he went to a high enough altitude, Mount Wilson in California… “Oh, I’m high enough that the ether winds are not being dragged by the Earth. And I’ve measured the effect of the ether.” Einstein hears about this and he says, and this is where you get the famous quote, “Subtle is the Lord, but malicious He is not.”
Anyways, I think the reason the story is interesting is for many different reasons. One of the ways in which the real history of science is different from this idea you get of the scientific method is that you really can’t apply
falsification
as easily as you might think. It’s not clear what is being falsified. Is it just another version of the theory of the ether that’s being falsified? Certainly you can’t induce the theory of special relativity from the fact that one version of the ether seems to be disconfirmed by these experiments.
Michael Nielsen
It certainly doesn’t show that ideas about falsification are wrong or falsified, but it does show that the most naive ideas… Things are often much more complicated than you think. Michelson did this experiment in 1881. He was a very young man, and then other people, I think
Rayleigh
was one of them, pointed out that there were some problems with the way he did it, so they had to redo it in 1887. At that point, a lot of the leading physicists of the day basically accepted this result, that there was no ether wind. But what to do about this?
Sure, maybe you falsified some theories of the ether. There are others that you haven’t falsified at all at this point, and people set to work on developing those. It is funny, people will phrase it as showing that the ether didn’t exist. Even just the word “the” there is a misnomer. You actually had a ton of different theories and a couple of leading contenders. So yes, there’s some version of falsification going on, but how you respond to this new experiment is very complicated. Certainly the leading physicists of the day responded by saying, “Okay, this gives us a lot of information about what the ether must be, but it doesn’t tell us that there is no ether.”
Dwarkesh Patel
In fact,
Lorentz
at the end of the 19th century, before Einstein, figures out the math of how you convert from one reference frame to another reference frame, and comes up with the
Lorentz transformations
, which is the basis of special relativity. But his interpretation is that you are converting from the ether reference frame to these non-privileged other reference frames if you’re moving relative to the ether.
His interpretation of
length contraction
and
time dilation
is that this is the effect of moving through the ether, and you have this pressure. This pressure is warping clocks. It’s warping measures of length. The interesting thing here is that experimentally you cannot distinguish Lorentz’s interpretation from special relativity.
Michael Nielsen
I think that’s a strong statement. Lorentz introduces this quantity called
local time
, which he regards as... My understanding is he’s not trying to give a physical interpretation of this, but it’s what Einstein would later just recognize as time in another
inertial reference frame
. He’s not trying to attribute much physical meaning to it. I think
Poincaré
gets much closer later on to realizing that this is the time that’s registered by clocks.
About forty-odd years later, people start doing these
muon experiments
where they see cosmic rays hit the top of the atmosphere. They produce a shower of
muons
, and you can look to see at different heights in the atmosphere how many of those muons remain. They decay over time, and a very strange thing happens, which is that they’re decaying way too slow. You expect they shouldn’t be able to last the whole way through the atmosphere at all. Their decay rate is too quick, if you were in a classical theory. But if in fact their time really has slowed down, it’s okay.
In fact, the measured decay rates in 1940—and there have since been more accurate experiments done—match exactly what you expect from special relativity. That’s the kind of thing where if Lorentz had been alive—he’d been dead ten or so years at that point—it seems quite likely that he would have tried to save his theory by patching it up yet again, but it would have been a massive setback. It starts to just look like time—this thing that Lorentz introduced as a mathematical convenience—that’s actually what time is, for the muons at least. Then there’s a whole bunch of other experiments that show this very similar phenomenon.
Dwarkesh Patel
When was that experiment done?
Michael Nielsen
That was, I think, 1940. It might have been published in 1941.
Dwarkesh Patel
Maybe to rephrase and change my claim: it’s not that you could not have distinguished them, but the scientific community adopted what we in retrospect consider the more correct interpretation before it was actually experimentally shown to be preferred. So there’s clearly some process that human science does which can distinguish different theories.
Michael Nielsen
Can I just interrupt? You used the word process, and it’s interesting to think about that term. Process carries connotations of something set in advance. It’s much more complicated in practice. You have people like Lorentz, who Einstein absolutely and utterly admired, and Poincaré, one of the greatest scientists who ever lived, and Michelson, another truly outstanding scientist, who never reconciled themselves.
It’s not as though there’s some standard procedure that we’re all using to reconcile these things. Great scientists can remain wrong for a very long time after the scientific community has broadly changed its opinion. But there’s no centralized authority or centralized method.
Dwarkesh Patel
That is the interesting thing. There’s progress even though it is hard to articulate the process by which it happens, the heuristics that are used.
You mentioned Poincaré. Lorentz has the math right, but the interpretation wrong. It seems like Poincaré had the opposite, where he understood that it’s hard to define
simultaneity
because it requires a circular definition with time, or velocity of something that might arrive at a midpoint together, but velocity is defined in terms of time.  I find this interesting.
There are a couple of other examples we could call on. There is this phenomenon in the history of science where somebody asks the right question, but then they don’t clinch it. I’m curious what you think is happening in those cases.
Michael Nielsen
You actually do want to go case by case and try to understand. It’s not necessarily clear that they’re doing the same thing wrong in all of the cases. The Poincaré case is amazing. He seems to have understood the
principle of relativity
, the idea that the laws of physics are the same in all inertial reference frames. He seems to have understood that the speed of light is the same in all inertial reference frames. He doesn’t phrase it quite that way, but it is my understanding, though I don’t speak French.
These are basically the ideas that Einstein uses to deduce special relativity. But then he also has this additional misunderstanding where he thinks that length contraction is a dynamical effect, that somehow particles are being pushed together by some external force, something is going on dynamically. He doesn’t understand that it’s purely kinematics. That actually space and time are different from what we thought, and you need to fundamentally rethink those things.
It’s almost like he knew too much. He had almost too grand a vision in mind. Einstein subtracts from that and says, “No. Space and time are just different than what we thought, and here’s the correct picture.”
There’s a paper in, I think it’s 1909, where Poincaré still has this dynamical picture of what’s going on with the length contraction
. This is just not necessary. This is a mistake from the modern point of view.
Why is he doing this? Why is he clinging onto this idea? I don’t know. I’ve obviously never met the man. It would be fascinating to be able to talk it over and try and understand. His expertise seems to be getting in the way. He knows so much, he understands so much, and then he’s not able to let go of these things.
A really interesting fact is that a few years prior, in the 1890s, Einstein’s a teenager and he believes in the ether too. He knows about this stuff. But he’s not quite as attached as these older people were. Maybe they were a little bit prisoners of their own expertise. That’s my guess. Some historians of science would certainly disagree.
Dwarkesh Patel
Then there’s the obvious stories where Einstein himself later on is said to have not latched onto the correct interpretations of quantum mechanics or cosmology because of his own attachments.
Michael Nielsen
Yeah.
Dwarkesh Patel
Here’s the bigger question I have. The muon example is a great example of these long verification loops and how progress seems to happen in the scientific community faster than these verification loops imply. Maybe the clearest example is
Aristarchus
in the second century BC comes up with the idea of heliocentrism. The ancient Athenians dismiss it on the grounds that we should see as the Earth is moving around the Sun, if really the Sun is the center of the solar system, the stars move relative to the Earth. The only reason that would not be the case is the stars are so far away that you would not observe this.
And it’s only in 1838 that
stellar parallax
was actually measured. And so, we didn’t need to wait until 1838 to have heliocentrism. We didn’t need to wait for the experimental validation to understand that Copernicus is better in some way. In fact, when Copernicus first came up with his theories, it’s well known that the
Ptolemaic model
was more accurate because it had centuries of adding on these
epicycles
.
What’s maybe less well appreciated is that it was also in some sense simpler. Because Copernicus actually had to add extra epicycles. It had more epicycles than the Ptolemaic model because he had this bias that the Earth should go in a perfect circle in equal time. Anyway, I think this is an interesting story because it’s not a more accurate theory. It’s not a simpler theory. So how could you have known ex ante that Copernicus was correct and Ptolemy was not?
Michael Nielsen
Good question. I don’t entirely know the answer. I can give you a partial answer that I, centuries in the future, start to find very compelling. I’m sure it’s part of the historic story at least. One of the big shocks for
Newton
, he did understand
Kepler’s laws of motion
eventually, so you’re able to explain the motions of the planets in the sky. But he also, out of the same theory, his
theory of gravitation
, was able to explain terrestrial motion. He’s able to explain why objects move in parabolas on the Earth, and he’s able to explain the tides in terms of the moon and the sun’s gravitational effect on water on the Earth.
You have what seem like three very different disconnected phenomena all being explained by this one set of ideas. That starts to feel very compelling, at least to me. I think most people find that very satisfying once they eventually realize it.
00:17:51 – Newton was the last of the magicians
Dwarkesh Patel
Have you read the
Keynes
biography of Newton?
Michael Nielsen
He wrote an entire biography?
Dwarkesh Patel
No, the
essay
.
Michael Nielsen
Sure. I love that. This description of him as the last of the magicians is wonderful.
Dwarkesh Patel
In fact, I think it’s maybe worth superimposing. Or you should read out that one passage of the thing.
Michael Nielsen
Alright. It’s from a talk that he gave at Cambridge not long before he died. He’d acquired Newton’s papers somehow and gave a lecture twice about this, or his brother Jeffrey gave it the other time because he was too ill. There’s this wonderful, wonderful quote in the middle. The whole thing is really interesting, but I love this particular quote: “Newton was not the first of the age of reason. He was the last of the magicians, the last great mind which looked out on the visible and intellectual world with the same eyes as those who began to build our intellectual inheritance rather less than ten thousand years ago.”
This idea people have that Newton was the first modern scientist is somehow wrong. There’s some truth to it, but he really had this very different way of looking at the world that was part superstitious and part modern. It was a funny hybrid. He’s a transitional figure in some sense. That phrase, “the last of the magicians,” really points at something.
Dwarkesh Patel
The thing I’m very curious about with Newton is whether it was the same program, the same heuristics, the same biases that he applied to his alchemical work as he did to his understanding of astronomy. This is from the Keynes essay: “There was extreme method in his madness. All his unpublished works on esoteric and theological matters are marked by careful learning, accurate method, and extreme sobriety of statement. They are just as sane as the
Principia
if their whole matter and purpose were not magical. They were nearly all composed during the same 25 years of his mathematical studies.”
Clearly, there was some aesthetic that motivated people like Einstein to reject earlier ways of thinking and say, “No, the other is wrong, and there’s a better way to think about things.” The same is true with Newton. The question I have is whether similar heuristics toward parsimony, aesthetics, and so on, would be equally useful across time and across disciplines, or whether you need different heuristics. The reason that’s relevant is even if we can’t build a verification loop for science, maybe if the taste tests point in the same direction, you can at least encode that bias into the AIs. That would maybe be enough.
Michael Nielsen
The point is that where we always get bottlenecked is where the previous processes and heuristics don’t apply. That’s almost definitionally what causes the bottlenecks. Because people are smart, they know what has worked before. They study it. They apply the same kinds of things, so they don’t get stuck in the same places as before. They keep getting bottlenecked in different places. I’m overgeneralizing a bit, but I think it’s right.
If you’re attempting to reduce science to a process, you’re attempting to reduce it to something where there is just a method which you can apply, and you turn the crank and out pops insight. You can do a certain amount of that, but you’re going to get bottlenecked at the places where your existing method doesn’t apply. Definitionally, there’s no crank you can turn. You need a lot of people trying different ideas. The more difficult the idea is to have, the greater the bottleneck, but then also the greater the triumph.
Quantum mechanics
is a great example of this. It’s such a shocking set of ideas. It’s such a shocking theory. The theory of evolution in some sense is also quite a shocking idea, not the principle of natural selection, but that it can explain so much. That’s a shocking idea.
00:23:26 – Why wasn’t natural selection obvious much earlier?
Dwarkesh Patel
Principia Mathematica
is released in 1687.
The Origin of Species
is released in 1859. At least naively, it seems like Darwin’s theory of natural selection is conceptually easier than the theory of gravity.
I asked Terence Tao this question
. There was this contemporaneous biologist with Darwin,
Thomas Huxley
, who read this and said, “How extremely stupid to not have thought of this.” Nobody ever reads the Principia Mathematica and thinks, “God, why didn’t I beat Newton to the punch here?” So what’s going on here? Why did Darwinism take so much longer?
Michael Nielsen
The idea must have been known to animal breeders for a long time at some level, or certainly large chunks of the idea were known, that artificial selection was a thing. In some sense,
Darwin’s
genius wasn’t in having that idea, it was understanding just how central it was to biology. You can go back and explain a tremendous amount about all the variety of what we see in the world with this as not necessarily the only principle, but certainly a core principle. He writes this wonderful book,
The Origin of Species
. It’s just so much evidence and so many examples, trying to tease this out and see what the implications are, and connecting it to as much else as he possibly can, to geology and all these other things.
That hard work—making the case that it’s actually relevant all across the biosphere—is what he’s doing there. He’s not just having the idea, he’s making a compelling case that it’s intertwined with absolutely everything else.
Dwarkesh Patel
The motivation for the question was
Lucretius
, this first-century Roman poet who has an idea that seems analogous to natural selection. It’s about species getting fitted more over time to their environments, or species losing fit to their environment. And so, why did this go nowhere for nineteen centuries?
Then I looked into it or, more accurately, asked LLMs what exactly Lucretius’s idea here was. It is extremely different from what real natural selection is. He thought there was this generative period in the past where all the species came about, and then there was this one-time filter which resulted in the species that are around today, and they became fit to the environment.
He did not have this idea that it is an ongoing gradual process or that there is a tree of life that connects all life forms on Earth together, which, by the way, is an incredibly weird fact that
every single life form on Earth has a common ancestor
.
Michael Nielsen
It’s not incredibly weird. If you think that the origin of life must have been very hard, that there’s a bottleneck there, then it’s not so surprising.
Dwarkesh Patel
There’s also this verification loop aspect where even if Newton might be harder in some sense, if you’ve clinched it, you can experimentally… I know “validate” is the wrong word philosophically, but you can give a lot of base points to the theory.
You can be like, “Okay, I have this idea of why things fall on Earth. I have this idea of why orbital periods for planets have a certain pattern. Let’s try it on the Moon, which orbits the Earth.” And in fact, it’s weird but the orbital period matches what my calculations imply.
Michael Nielsen
And the tides work correctly. It’s just amazing.
Dwarkesh Patel
Exactly. Whereas for Darwinism, it takes a ton of work for Darwin to compile all the cumulative evidence, but there’s no individual piece that is overwhelmingly powerful.
Michael Nielsen
And there’s a whole bunch of problems as well. He doesn’t really understand what the mechanism is. He doesn’t understand genes, all these things.
Dwarkesh Patel
The very interesting thing in the history of Darwinism is, this idea which theoretically you could come up with at any time, there is almost identical independent creation of that idea between
Alfred Wallace
and Charles Darwin. So much so that I think Wallace sends his manuscript to Darwin and is like, “What do you think of this idea?” And Darwin’s like, “Fuck.”
Michael Nielsen
I don’t think that’s an exact quote, but it’s pretty much correct.
Dwarkesh Patel
They end up presenting their ideas together in the spirit of sportsmanship. Why was this period in the 1850s or 1860s the right time for these ideas to form? You can come up with different ideas. One is geology. In the 1830s,
Charles Lyell
figures out that there’s been millions and billions of years of time that’s existed on Earth. The paleontology shows you that fossils have existed for that entire time. Life goes back a long way. In fact, you can even find fossils for intermediate species that show you the tree of life. Between humans and other apes as well, there’s intermediate humans.
There’s also the age of colonization, and we have all these voyages doing
biogeography
. That all must have been necessary. In fact, there’s a huge history of parallel innovation and discovery in the history of science. So maybe it is another piece of evidence that more had to be in place for a given idea to be discovered. Because if it’s not discovered for a long time and then spontaneously many different people are coming up with it, that shows you that the building blocks were in some sense necessary.
Michael Nielsen
This example of Lyell and other geologists in the early 1800s having this idea of
deep time
does seem to have been crucial. I know Darwin was very influenced by Lyell. If you don’t have at least tens or hundreds of millions of years, evolution starts to look like a non-starter.
In order to make it work on a timescale of 5,000 to 10,000 years or
6,000 years with Bishop Ussher
you would need to see evolution occurring at a massive rate during human lifetimes, and we’re just not seeing that. That does seem to have been a blocker. To your question of what other blockers were there, were there any others? I don’t know.
Dwarkesh Patel
Or how much earlier could you, in principle, have come up with it if you were much smarter?
00:29:52 – Could gradient descent have discovered general relativity?
Michael Nielsen
Let’s go back and zoom out to your original question about the verification loop in AI. An example that should give you pause there is the big signature success so far, which is certainly
AlphaFold
. AlphaFold really isn’t about AI. A massive fraction of the success there is the
Protein Data Bank
. It’s
X-ray diffraction
,
NMR
,
cryo-EM
, and the several billion dollars that were spent obtaining those 180,000-odd protein structures.
It’s basically the story of how we spent many decades obtaining
protein structure
just by going out and looking very hard at the world experimentally, and then we fitted a nice model at the end of it, which was a tiny fraction of the entire investment. That’s a story of data acquisition principally. The AI bit is very impressive and quite remarkable, but it is only a small part of the total story.
Dwarkesh Patel
AlphaFold is very interesting, and philosophically I wonder what you think of it as a scientific theory or explanation. I guess over time the world is becoming harder to understand… As I’m saying things, because you’re such a careful speaker, I say a phrase and wonder if you’ll actually buy that premise.
But in some domains, we need to fit models to things rather than coming up with underlying principles that explain a broad range of phenomena. Compare the theory of general relativity, or any theory which just nets out to some equations, versus AlphaFold, which is encoding these different relationships between things we can’t even interpret over 100 million parameters.
Are those really the same thing? GR can predict things you could have never anticipated or it was never meant to do,
like why Mercury’s orbit precesses
. AlphaFold is not going to have that kind of explanatory reach. I want to get your reaction to that.
Michael Nielsen
I think it’s an incredibly interesting question. Maybe a really pivotal question. If you take a very classic point of view, you want these deep explanatory principles. You want as few free parameters as you possibly can. You want very simple models which explain a lot, and AlphaFold doesn’t look anything like that. You might just say, “It’s nice and maybe helpful as a model, but it’s not a scientific explanation.” That’s a conservative point of view, answer one to the question.
Answer two is to say maybe you shouldn’t think about AlphaFold as an explanation in the classic sense, but maybe it contains lots of little explanations inside it. Part of what you can get out of
interpretability
work is you can go into AlphaFold and start to extract certain things. Maybe by doing an archeology of AlphaFold, we can actually understand a great deal more about these principles. You can start to extract that a certain circuit does this interesting thing, and we learn from it.
I don’t know to what extent that’s been done with AlphaFold, but it’s been done a little bit with some of the chess models, like
AlphaZero
. There seem to be some strategies which were borrowed by
Magnus Carlsen
, which he seems to have just taken from AlphaZero. I don’t think there’s any public confirmation of this, but some experts have noticed that he changed
his game quite radically after some public forensics were released on how AlphaZero worked
. That’s an example where human beings are starting to extract meaning out of these models.
That leads to viewing the models as a potential source of explanations. You need to do more work because they’re not very legible up front, but you can potentially extract them. That’s an interesting intermediate situation where they’re not explanations themselves, but you can extract interesting explanations out of them and use them as a source.
The third and most interesting possibility is that they’re a new type of object. They should be taken very seriously as explanations, but where in the past we haven’t had the ability to really do anything with them, now we have interesting new actions we can do. We can merge them, we can distill them. It’s a big opportunity in the philosophy of science.
There’s an anticipation of this in some way. Some mathematicians and physicists work today… Historically, if you had a 100-page equation—which is the kind of thing that does come up—there’s just nothing you can do if it’s 1920. At that point, you give up on the problem. But today, with tools like
Mathematica
, you can just keep going. That’s an object now, a thing that you can work with. There are examples where people work with these things that formerly were regarded as too complicated, and sometimes they get simple answers out the end. That’s just an intermediate working state.
So I wonder if something similar is going to happen in this case, where you could take these models and use them in a similar way that people do with Mathematica, and take them seriously. They’re not explanations in the classic sense, but they’ll be something else which interesting operations can be done on.
Dwarkesh Patel
The thing I worry about is, suppose it’s 1500 and you’re training a model on…  This is a weird history where we developed
deep learning
before we had cosmology. Suppose we live in that world. You’re observing how the stars don’t seem to move. The planets have all these weird behaviors. Then you train a model on that, and you do some kind of interp on it trying to figure out what the patterns are.
You’d just be able to keep building on Ptolemy’s model. You’d see there’s another epicycle we didn’t notice. Parameters X to Y encode this epicycle, parameters whatever encode the next epicycle. If you were just trying to figure out why the solar system is the way it is from observational data, you could just keep adding epicycles upon epicycles, but it really took one mind to integrate it all in and say, “Here’s what makes more sense overall.”
Michael Nielsen
This is to my point that we don’t really understand what to do with the models. We don’t have the verbs yet. It is certainly interesting to think about the question where you start to apply constraints to the models, essentially saying, “What’s the simplest possible explanation?” Or, “Can you simplify? Can you give me the 90/10 explanation?” And go further and further in boiling it down.
It might be that indeed they start out by providing a very, very complicated, many-parameter model. But you can just force the case, and basically that’s scaffolding, which maybe is the very early days of their attempt to understand something. They’re forced through that to a much more simple understanding.
Dwarkesh Patel
Sorry for misunderstanding, but it sounds like you’re saying maybe there’s some
regularizer
or some distillation you could do of a very complicated model that gets you to a truer, more parsimonious theory. Take Ptolemy versus Copernicus. You start off with lots of Ptolemy epicycles, and then you try to distill this model, and maybe it gets rid of some of the epicycles that are less and less necessary to get the mean squared error of the orbits to match.
But at some point it has to do this thing which is to switch two things. Locally, it actually doesn’t make things more accurate. It’s in a global sense that it’s a more progressive theory. There’s some process which obviously humanity did over its span, which did that regularization or did that swap. But with raw
gradient descent
, I don’t really feel like it would do that.
Michael Nielsen
Think about the example of going from Newtonian gravity to Einstein’s general theory of relativity. These are shockingly different theories, and the question is what causes that flip. As nearly as I understand the history, what goes on is Einstein develops special relativity and pretty much straight away he understands. It’s a very obvious observation. In special relativity, influences can’t propagate faster than the speed of light, and in Newtonian gravity,
action is at a distance
.
Straight away in special relativity, you could use Newtonian gravity to do faster-than-light signaling. You could send information backwards in time. You could do all kinds of crazy stuff. It’s not a big leap to realize we have a big problem here. That’s the forcing function there. You’ve realized that your old explanation is not sufficient. You need something new.
Then you’re going to start by doing the simplest possible stuff. It just turns out that a lot of that stuff doesn’t work very well, so you’re forced to go through these steps where gradually it gets more complicated, and it’s wrong in a variety of ways. The final theory appears shockingly simple and beautiful, but it’s gone through some somewhat ugly intermediate stages.
Dwarkesh Patel
If you’re thinking about what it looks like to have AI accelerate science, there’s one for well-understood domains where we just want local solutions, like how does this protein fold. We just train a raw model using gradient descent. Then there’s things like coming up with general relativity, where you couldn’t really just train on every single observation in the universe and hope that general relativity pops out.
What would it require? It also certainly wasn’t immediately discovered. It was decades of thought. You’d need independent research programs where people start off with these biases, where Einstein is initially motivated by this
thought experiment of whether you can distinguish the effect of gravity from just being accelerated upwards
. You just need different AI thinkers to start off with these initial biases and see what can germinate out of them. The verification loop for that might be quite long, but you just need to keep all those research programs alive at the same time.
Michael Nielsen
This point you make about keeping all the different research programs alive, I think that is very important and central. A great example is situations where the same answer has been correct in some circumstances and wrong in other circumstances.
The planet Uranus was not in quite the right spot, and
people famously predicted the existence of Neptune on this basis
. Wonderful, massive success for Newtonian gravity. The planet Mercury is not in quite the right spot. You predict the existence of some other distorting planet. It turns out that doesn’t exist. Actually,
the reason Mercury is not in the right spot is because you need general relativity
.
You’ve pursued very similar ideas, and it’s been very successful in one case, and it’s been completely and utterly unsuccessful in the other case. A priori, you can’t tell which of these is the thing to do, and you actually need to do both. This is certainly very true in the history of science.
This kind of diversity, where you just have lots of people go off and pursue lots of potentially promising ideas, you just need to support that for a long time. It’s hard to do that for a variety of reasons, but it does seem to be very, very important.
Dwarkesh Patel
This example of Uranus versus Mercury is very interesting. I think it illustrates the difficulty with falsificationism. The orbit of Uranus is in some sense falsifying Newtonian mechanics. But then you make some ancillary prediction that says, “Oh, the reason this is happening is there must be another planet which is perturbing Uranus’s orbit.” I think it’s
Le Verrier
in 1846. “Point a telescope in the right direction, you find Uranus.”
Michael Nielsen
Neptune.
Dwarkesh Patel
Sorry. Neptune, yes. But with Mercury, it’s observed that the ellipse which forms its orbit is rotating 43 arcseconds more every century than Newtonian mechanics would imply, so people say that there must be a planet inside Mercury’s orbit. They call it
Vulcan
and point the telescopes. It’s not there.
But if you’re a proper Newtonian, what you do is say, “Well, maybe there’s some cosmic dust that’s occluding this planet, or maybe the planet is so small we can’t see it, or let’s build an even more powerful telescope, or maybe there’s some magnetic field which is occluding our measurement.” At any one of these steps—
Michael Nielsen
And this happens over and over. There are just so many stories which are exactly like this. An example I love from the 1990s. Some
people noticed that the Pioneer spacecraft weren’t quite where they were supposed to be
.
You can get very excited about this. “Oh my goodness, general relativity is wrong. Maybe we’re going to discover the next theory of gravity.” Today the accepted explanation is that there’s just a slight asymmetry in the spacecraft. It turns out that the thermal radiation is slightly larger in one direction than the other, and that’s causing a tiny little acceleration towards the sun. Most of the time when there’s these apparent exceptions, it’s just something like that going on.
It’s very much like the Mercury-Vulcan case. But every once in a while, it’s not. A priori, you can’t distinguish these. Science is just full of these. It’s funny too, the way we tell the history of science, it sounds so simple. You just focus on the right exception and you realize that you need to throw out the old theory and lo and behold, your Nobel Prize awaits. But in fact, these exceptions are all over the place. 99.9% of the time, it just turns out to be some effect like this thermal acceleration in the case of the Pioneer spacecraft. Unfortunately, there’s a lot of selection bias going into those stories.
Dwarkesh Patel
The thing is there’s no ex ante heuristic which tells you which case you’re in. To spell out why I think this is important, some people have this idea that AI is going to make disproportionate progress towards science because it makes disproportionate progress towards domains where there’s tight verification loops. It’s really good at coding because you can run unit tests.
Science may be similar because you can run experiments. What that doesn’t appreciate is that there’s an infinite number of theories that are compatible with any given experiment. Over time, why we latch onto the one we think is more correct in retrospect is, as we’re discussing, hard to articulate.
Lakatos has all kinds of interesting examples in the book about these hostile verification loops that are extremely long-lasting. One he talks about is
Prout
. There’s this chemist in 1815 who hypothesizes that all atomic nuclei must have whole number weights. They’re basically all made of hydrogen. The reason he thinks this is because if you look at the measured weights of all elements, it does seem that almost all of them have whole number weights. But then there are some exceptions. For example, chlorine comes out at 35.5.
So then there’s all these ad hoc theories that people in this school keep coming up with, like, “Oh, maybe there’s chemical impurities.” But there’s no chemical reaction you can do which seems to get rid of this. Maybe it’s fractions of whole numbers, so 35.5 can be halves. But actually, if you measure chlorine even closer, it’s 35.46, so it’s getting further away from the correct fraction. Later on, what is discovered is what you’re actually measuring is different isotopes, which cannot be chemically distinguished. They can only be physically distinguished.
So you have 85 years before we realize what an isotope is, where the verification loop is actively hostile against the correct theory. You just need this remnant to be defending… There’s no ex ante reason it’s the preferred theory. As a community, we should just have people try to integrate new observations, even if they don’t seem to fit their school of thought, and hopefully enough of that happens… Anyways, I guess the thing I’m trying to articulate is the difficulty with automating science.
Michael Nielsen
The question is, where is the bottleneck at some level? Are we primarily bottlenecked on one type of thing, or are we bottlenecked on multiple types of things? Certainly, talking to structural biology people, they seem to think that AlphaFold was an enormous advance. It was a shock.
At some level, yes, AI can certainly help us speed up science. It is helping with a certain type of bottleneck. That doesn’t mean though, as you’re saying, that it’s necessarily going to help with all kinds of bottlenecks. I suppose the question you’re pointing at is, what are the types of bottlenecks that remain, and what are the prospects for getting past them?
Even in the case of coding, it’s really interesting talking to programmer friends. At the moment they’re all in this state of shock and high excitement, and they’re all over the place. You do wonder where the bottleneck is going to move to. Certainly, one thing that a lot of them seem to be bottlenecked on now is having interesting ideas, and in particular, having interesting design ideas. There’s not really a verification loop for knowing that a design idea is very interesting.
They’re no longer nearly as bottlenecked by their ability to produce code, but they are still bottlenecked by this other thing. Formerly, they weren’t bottlenecked on it because just writing code took so much of their time. They could have lots of ideas while they were taking three weeks to implement their prototype, and then they would implement the next version. Now they’re taking three hours to implement the prototype, and they don’t have as good ideas after that, from a design point of view.
00:50:54 – Why aliens will have a different tech stack than us
Dwarkesh Patel
You have a very interesting take. I think it was a footnote in
one of your essays
, and I couldn’t find it again, which was that it’s very possible that if we met aliens, they would have a totally different technological stack than us. That contradicts a common assumption I had that I never questioned, which is that science is this thing you do relatively early on in the history of civilization. You get to a point and you have a couple hundred years of just cranking through the basics, understanding how the universe works, and you’ve got it. You’ve got science. Then everybody would converge on the same “science.” I found that a very interesting idea, and I want you to say more about it.
Michael Nielsen
The idea there that I’m at least somewhat attached to is that the tech tree or the science and tech tree is probably much larger than we realize. We’re in this funny situation. People will sometimes talk about a theory of everything as a potential goal for physics, and then there’s this presumption that physics is done once you get there. Of course, this is not true at all.
If you think about computer science, computer science started in the 1930s when
Turing
and
Church
and so on
laid down what the theory of everything was
. They just said, “Here’s how computation works.” We’ve spent ninety-odd years since then exploring the consequences of that and gradually building up more and more interesting ideas. Those ideas, to some extent, you can regard as technology. But insofar as they’re discovered principles inside that theory of computation, I think they’re best regarded as science and in some cases, very fundamental science.
Ideas like
public-key cryptography
are incredibly deep, very non-obvious ideas which lay hidden already in the 1930s. My expectation is that there will be different ways of exploring this tech tree, and we’re still relatively low down. We’re still at the point where we’re just understanding these basic fundamental theories, and we haven’t yet explored them.
A thing which I think is quite fun is if you look at the phases of matter. When I was in school, we’d get taught that there are three phases of matter, or sometimes four or five, depending on what you included. As an adult, as a physicist, you start to realize we’ve been adding to this list. We’ve got
superconductors
and
superfluids
, and maybe different types of superconductors, and
Bose-Einstein condensates
, the
quantum Hall systems
,
fractional quantum Hall systems
, and so on. It’s starting to turn out there’s a lot of phases of matter to discover, and we’re going to discover a lot more of them. In fact, we’re going to be able to start to design them in some sense. We’ll still be subject to the laws of physics, but there is this tremendous freedom in the