# The Autonomous Drone Tech Stack & Economics of Drones — Yaroslav Azhnyuk, The Fourth Law & Guest Host Noah Smith, Noahpinion
**Source:** https://www.latent.space/p/the-fourth-law
**Date:** 2026-05-18
**Author:** Latent.Space
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Latent Space: The AI Engineer Podcast
The Autonomous Drone Tech Stack & Economics of Drones — Yaroslav Azhnyuk, The Fourth Law & Guest Host Noah Smith, Noahpinion
35
3
2
1×
0:00
Current time: 0:00 / Total time: -1:59:28
-1:59:28
Audio playback is not supported on your browser. Please upgrade.
The Autonomous Drone Tech Stack & Economics of Drones — Yaroslav Azhnyuk, The Fourth Law & Guest Host Noah Smith, Noahpinion
Ukrainian drone founder Yaroslav Azhnyuk went from pet cameras to AI-guided weapons. He and guest host Noah Smith make the case that the West is asleep at the wheel.
Latent.Space
,
Brandon Anderson
, and
Noah Smith
May 18, 2026
35
3
2
Share
Transcript
The future of war has been evolving before our eyes in Ukraine, yet the west still plans to fight the last war. In this special episode, guest host
Noah Smith
(
@noahpinion
)
and
Brandon Anderson
sit down with
Yaroslav Azhnyuk (
@YaroslavAzhnyuk
)
, a serial tech founder who went from building
PetCube
to founding
The Fourth Law
, one of the world’s most advanced AI-guided drone companies. Over two hours we cover the technology, tactics, and geopolitics of drone warfare, and why the modern battlefield has already left the West behind:
Yaroslav’s personal history and the Ukraine war [00:01:04 – 00:14:01]
The modern drone tech stack: why FPV drones are the new god of war, the future of the rifleman, fiber optic vs. AI, five levels of autonomy, and the eight dimensions of the autonomous battlefield [00:14:01 – 01:05:13]
The geopolitics and economics of drones: China’s manufacturing advantage, the drone race, Western defense readiness, countermeasures, and why the gap is widening [01:05:13 – 01:58:57]
For those looking for
Noah Smith
’s commentary, it really gets going around the 00:51:31 mark.
Yaroslav Azhnyuk / The Fourth Law:
X:
https://x.com/YaroslavAzhnyuk
LinkedIn:
https://www.linkedin.com/in/yaroslavazhnyuk/
The Fourth Law:
https://thefourthlaw.ai
Noah Smith
:
Substack:
Noah Smith
X:
https://x.com/noahpinion
Timestamps
00:00:00 Cold Open: China’s 4 Billion Drones and the Cameras-to-Explosives Pipeline
00:01:04 Introduction: Brandon, Noah Smith, and Yaroslav Azhnyuk
00:05:41 From Tech Entrepreneur to Defense: PetCube, Brave One, and the D3 Fund
00:10:42 The Ethics of Building Weapons: Dual-Use Technology and the Wolf at the Door
00:14:01 The Tech Stack: Cameras, Autonomy Modules, Interceptors, and a Semiconductor Fab
00:18:47 Fiber Optic vs. AI: The Radio Horizon Problem and $32/km Cable
00:25:32 FPV Drones: The New God of War — 70–80% of Frontline Casualties
00:28:28 The Five Levels of Drone Autonomy: From Terminal Guidance to Full Autonomy
00:41:37 The Eight Dimensions of the Autonomous Battlefield
00:45:32 AI Safety and the Morality of Autonomous Weapons
00:51:31 The End of the Rifleman? Noah’s 2013 Prediction vs. Battlefield Reality
01:05:13 China’s Manufacturing Advantage and Western Vulnerabilities
01:24:21 Policy Advice for Western Defense: Defense Valley and the Widening Gap
01:32:54 The Drone Race: Who’s Ahead, Category by Category
01:41:57 Countermeasures: Shotguns, Jammers, Lasers, and Fishnets
01:58:19 The Wedding and Final Takeaway: Be Prepared for War
Transcript
Cold Open: China, FPV Drones, and the New Warning Sign
Yaroslav [00:00:00]:
Think about this. Last year, Ukraine produced 4 million FPV drones. Ukraine is not the most industrious nation in the world. China can produce 4 billion of these FPV drones.
Noah [00:00:10]:
Would you say that right now China is now the supreme conventional military power on Earth, given its ability to manufacture and deploy drones in the quantity and quality that you just described?
Yaroslav [00:00:20]:
I don’t think we have all the information to claim that but we cannot count it out, and that alone should be a big warning sign. As I say, at some point in my life I went from making cameras that fling treats to pets to cameras that fling explosives to the occupiers. So that’s the short story. And when you think about what your nation, what your patriots are going through, you realize that’s the only morally right thing to do is to fight back, and it is immoral not to fight back, and then the choice becomes very clear.
Introduction: Yaroslav Azhnyuk, Petcube, and the Last Flight into Kyiv
Brandon [00:01:04]:
Welcome to Latent Space. I’m Brandon. I normally do science podcasts, but today we’re going to do something a little bit different. I’m joined by Noah Smith of Noahpinion on Substack and Twitter. And he has lots of interesting things to say about drones. And as a guest, we have Yaroslav Azhnyuk, founder of The Fourth Law and several other, drone-related startups. To get started, it is February 23rd, 2022. You are running a pet startup. You’re connecting pets with their owners. Let’s go in just a little bit of background. How did you get started in tech, and what were you working on before the Ukrainian war started?
Yaroslav [00:01:50]:
Good to be here. Thank you. On February 23rd, late in the evening, 11:00 PM Kyiv time, my wife and I landed in Kyiv. Actually, then she was a fiance. We came from Lviv, where we were looking at a church, where our wedding should have taken place. And we got into this cab ride from the airport to our home, and the driver was like, “You crazy. Like, everyone’s leaving Kyiv. Why do you come?” We’re like, “What? Nothing’s going to happen. Dude, chill.” And then obviously, eight minutes later, or eight hours later, the bombs fell in the city. It was quite surreal. We probably landed on the last flight that landed in Kyiv, or one of those last flights. My background, I’m a tech guy. Studied applied mathematics in Kyiv Polytechnics, born and raised in Kyiv. My parents are old PhDs from academia, and grandparents too. Like, everything, from linguistics to nuclear physics. And I’m an entrepreneur, so I’ve built a bunch of companies. Petcube is the one you were referencing. So I lived in San Francisco 2014 to 2020, building Petcube, which is one of the leading, pet device companies in the world, selling lots of pet cameras. And then, yeah, as I say, at some point in my life I went from making cameras that fling treats to pets to cameras that fling explosives to the occupiers. So that’s the short story.
February 24th: Leaving Kyiv as the Invasion Begins
Noah [00:03:28]:
February 24th, I guess a few hours after you, go to check out your wedding chapel, what do you do?
Yaroslav [00:03:37]:
We had a plan for this situation. So my parents and family live in Kyiv, and we’re like, “Okay, this has actually started. The worst has, come true.” And so we basically packed our belongings and got in the car and spent 17 hours driving west. And that was pretty sure most people in our audience watched at least one apocalyptic movie in their life, so that was exactly like that. Like, felt exactly like that. Missiles are falling. Like, there was smoke in Kyiv. Like, my dad and I went, like, to central part of the cities. It’s probably, like
Yaroslav [00:04:20]:
800 meters from presidential office, to pick some stuff up at his workplace. Because he’s, like, the head of an academic institution, so he had to get some of the things with him. And super surreal. Like, the streets are empty. Like, the gas stations are out of gas. Like, we found some gas station. We didn’t have, like, spare canisters with us, so we’re like, We figured out, like, the car was diesel, so like, we figured out, if it’s diesel, you can actually store it in plastic, canisters, and we bought some window wash for the cars. We poured it out of the canisters, and we poured the diesel into that. Yeah, so it was like that. And then, like, helping friends get out, like my friend and his dog. Like, we found Like, my brother was also, like, riding in a separate car. We found a place for my friend who didn’t have a car. It was like, yeah, it was like, totally surreal. And we didn’t know of course, and you didn’t know this will last for so long. You didn’t know whether Ukraine will be able to defend Kyiv. And it was like, yeah, very little information and very little insight into future.
From Pet Cameras to Defense Tech: Building for Ukraine and the Free World
Noah [00:05:42]:
What are your thoughts with regards to how do you, defend, Ukraine? So you eventually start building drones Like, what is the process to get from there from where you were building, devices that connect owners with pets to building drones, and what other things did you do to help the war effort in the process?
Yaroslav [00:06:07]:
It’s definitely non-trivial, right? Like, I didn’t go, to I didn’t get any, like, military education when I was a student. Like, normally, in Ukraine, you would, you would go to like, this military school even if you’re getting higher education in any other, sphere. I decided to skip that which is like, an unusual way to go. And I never thought that I will be somehow engaged in a war effort. Like, what is war? Of course, wars are over. It’s the end of history. So one thing you got to understand about, like, many Ukrainians and like, I guess, it’s also true about most of the people I met here in the US, that your who you are in terms of your nationality is a big part of your identity. So when that gets under attack, it’s something deeper than just the country you live in gets under attack, right? And I Day one, I figured I’m going to I’m going to fight back with everything I can, right? But I didn’t think on day one that I’m actually going to do, weapons. And a bunch of things. We were reaching out to a number of American, congresspeople and senators, and basically advocating for support of Ukraine, for voting for lend lease, which has happened in May 2022, but didn’t actually work as expected. We helped start, Brave One, which is now a very important defense innovation cluster, sort of like a DIU here in the US. We helped start, a fund called D3. It’s like, it was started or co-started by Eric Schmidt, former CEO of Google. So a bunch of these odd things, but then eventually I was like, “Okay,”by 2023 it was obvious this thing, A is going to last a lot more time, and B, that the whole world is shifting and that there’s going to be a new arms race, that the warfare is redefined by drones as platforms. And for the first time in history, you have a platform that is software defined, that can increase your battlefield capabilities, in a in a step change just overnight. So it’s like if you were able to push a software update and get all of your Roman legionnaires a new helmet? That has never been possible before. It’s the first time in the history of war this is possible. So all of that and many other things like, supply chain fragilization, and the impact that AI is going to have on all of this all these things have become evident to me in 2023, and it’s like, “Okay, I should do what I do best, or what I know how to do best, start a tech company, and sort of leverage the global techno capitalist machine, to provide, defensibility to Ukraine and the free world.” So that’s literally the mission of the company, increase defensibility of Ukraine and the free world. And then there was some sort of soul-searching and like, asking yourself. It’s like, “Okay, am I Actually, I know nothing about weapons. Am I actually, like, ready to make, things that other people use to kill other bad people?”
Yaroslav [00:09:36]:
When you think about what your nation, what your Compatriots are going through And think about all the terror of places like Bucha, the occupied cities in the east and south, the abducted children, the raped women, all the economic damage that’s being done, and the intention to destroy a whole nation, to genocide the people of Ukraine, you realize that’s the only morally right thing to do is to fight back, and it is immoral not to fight back. And then the choice becomes very clear. And look, we’re just passing the ammunition. We’re not doing the actual job. The actual fighters and defenders and heroes are people in the armed forces. We’re just support.
The Moral Question: Weapons, Responsibility, and Fighting Back
Noah [00:10:33]:
I have so many questions. Actually, I know you seem to have a question. Do you want to ask anything?
Yaroslav [00:10:38]:
No, I’m just listening. Go ahead.
Noah [00:10:40]:
I do want to talk about, some of let’s say, the moral issues, like you just said. You end
Yaroslav [00:10:50]:
I think there are no issues there.
Yaroslav [00:10:52]:
What would an example of a moral question be in this case?
Noah [00:10:55]:
No, I mean Okay. As you just said, you are creating the tools, but others are using them.
Noah [00:11:05]:
I was maybe thinking of having this conversation later, but one of the questions is like, is it actually you are going to be building them for your homeland, which you are building it for your homeland, which is I think, very a strong morally defensible position, but this technology is not going to stay with you, right?
Noah [00:11:26]:
This you will probably be selling these to other people Yeah. So the future is really where the moral issues may come into play
Yaroslav [00:11:38]:
The this question becomes, easier and more complete if we ask this not about a particular technology or particular weapon, if we think that this question actually applies to any kind of technology Right? So -Knife or fire. You can use knife to do surgery and save people’s lives, or you can use it as a weapon to take people’s lives.
Noah [00:12:06]:
Cut tomatoes, too.
Yaroslav [00:12:08]:
Cut tomatoes too.
Noah [00:12:09]:
Yes, knife.
Yaroslav [00:12:09]:
That’s helpful.
Noah [00:12:10]:
In Japan, sword and knife, they, call the same word.
Yaroslav [00:12:14]:
It’s like, it’s with any technology. Large language models, right? Look at how powerful they are and yet they’re available to anyone in North Korea or in Russia.
Yaroslav [00:12:29]:
That’s one side of the argument. The other side is As a maker, what is your responsibility for how the tools you’re creating, will be used? There’s definitely some responsibility, right? Then How should the decision process look like? Should you, like, try to calculate all the possible scenarios before starting to work on something? Or do you create something that is needed now to save people’s lives, and then think about, addressing the unwanted edge cases later? In ideal world where there’s like, or okay, it’s not ideal world. In a mythical world where there is some one governing party and it gets to decide everything, and there is no other country, that can, decide on their own, you could say, “Well, we need to calculate for all the consequences, and only then, maybe build this building, by replacing this park because, maybe we need this park in the city,”right? So that kind of situation. But when you’re in a situation where you’re in a forest, in front of a wolf, you first going to deal with the wolf that wants to eat you, and then you’re going to go consult Greenpeace. So that’s kind of situation that Ukraine is in.
The Fourth Law, Odd Systems, and Ukraine’s Drone Stack
Noah [00:13:59]:
Enough. Because this is a tech podcast, I did want to spend some time talking about, sort of the tech in that you’ve developed and what you’ve been working on. So can you explain, I guess, first of all, like, the problem that you were trying to solve from a technical standpoint? And I think, and then maybe, like, go into some of the solutions and some of the design process that led you from designing, little laser-guided, guiding lasers with a with an iPhone versus Having drones.
Yaroslav [00:14:34]:
Like, it so happened, that my partners and I, we sort of So I started one company called The Fourth Law, and its goal was and is to Make, massively scalable on-drone autonomy. And then In parallel with that together with my, Petcube co-founders, partners, and friends, we started another company called Odd Systems Which, was focused on making thermal cameras. Cameras, thermal cameras are seeing thermal radiation and are used to see at night. And we’re now sort of those companies are getting closer and closer together and we’re probably going to merge them. And this group of companies is currently the leading, team in on-drone AI and thermal imaging on the Ukrainian battlefield, and Likely one of the leading, if not the leading in the world. So We have these, like, three sort of business units, which are cameras, drone autonomy, and drones. So the cameras and drone autonomy sell daytime and nighttime cameras and different types of drone autonomous modules to other drone manufacturers, over 200 drone manufacturers in Ukraine. And then the UAV, business unit sells the drones themselves to the armed forces of Ukraine, Ukrainian government. And there are different types of drones. Those are sort of front strike, as we call them, so those are sort of FPV strike drones and the bombers, and then interceptors. And there are different kinds of interceptors. We do Shahed interceptors and we do ISR interceptors. We don’t do the deep strike-
FPV Drones, Interceptors, and Battery-Powered Warfare
Noah [00:16:32]:
What’s an ISR interceptor?
Yaroslav [00:16:33]:
ISR is stands for intelligence, surveillance, reconnaissance, and those are basically drones which are which, Russians are using to watch over positions and then communicate where, the targets are coming.
Noah [00:16:48]:
It’s a reconnaissance.
Yaroslav [00:16:48]:
That’s, the ISR is sort of a classical term for a for a reconnaissance drone.
Noah [00:16:53]:
Are all of these battery-powered drones that you just described? ‘Cause I know that the sort of deep strike drones still have, like Some sort of
Yaroslav [00:17:01]:
Internal combustion engine?
Noah [00:17:02]:
Internal combustion engine. Are all the things you’re talking about battery-powered?
Yaroslav [00:17:06]:
What we’re working on is all battery-powered, right? We don’t do the deep strikes, right? And then in terms of autonomy-
Noah [00:17:12]:
You can catch a Shahed with a battery-powered thing. It’s not Fast to catch.
Yaroslav [00:17:17]:
No, absolutely. Look, Shahed interceptor, like ours, it’s called Zero, it goes up to 326 kilometers per hour.
Noah [00:17:26]:
For reference, how fast is a Shahed?
Yaroslav [00:17:28]:
Eight, like, in internal phase it could be 280, but in cruise phase it’s, like, 220-ish.
Yaroslav [00:17:36]:
Yeah. And sorry, I’m not like you can convert that into miles if you’re interested.
Noah [00:17:41]:
No, that’s fine.
Noah [00:17:41]:
Multiply by two thirds or point six or something.
Yaroslav [00:17:44]:
That’s easy. Yeah, I was saying that for autonomy modules, right, we, -We make systems, autonomous systems for frontline, for interceptors and some for deep strikes as well, and then different levels of autonomy. So from terminal guidance, which is like lasts 500 meters, give or take, to autonomous bombing, to autonomous target detection, to autonomous navigation and all of that across day and night, different terrains, different time of the year, different platforms like quadcopters and fixed wing, and maybe some other platforms. So it’s quite a wide variety of products. We also have like our own simulation. We have our own training school for the war fighters. And we’re about to start construction of two, semiconductor plants to make, sensors for thermal cameras. So that’s super exciting for me as a computer science guy is Doing semiconductors. Super cool.
Noah [00:18:49]:
Like in terms of kind of core drone technologies, you basically are one is an FPV replacement without fiber optics, and the other is
Yaroslav [00:18:59]:
You
Noah [00:18:59]:
Signal tracking with interceptors
Yaroslav [00:19:00]:
With or without fiber optics. Fiber optics Is just like, sort of a communication module.
Yaroslav [00:19:05]:
You can, you can use classical analog, video link and radio link. Those would be two separate radios. You can do digital, or you can do fiber optic, and then fiber optic Has its own advantages but also adds weight and decreases, the distance and decreases, how fast you can, sort of turn and With a drone. Yeah.
Noah [00:19:33]:
Do you need AI for fiber optic drones?
Yaroslav [00:19:36]:
Like you can use AI for fiber optic drones. AI replaces a human, right? Fiber optic is making your communication link more resilient. So those are slightly different goals. Like if you want, you can have, AI controlling hundreds of fiber optic drones instead of having 100 operators for each.
Fiber Optics, Radio Horizons, and Terminal Guidance
Noah [00:20:03]:
I guess I thought that the key reason that people moved to fiber optic drones was for like electronic, countermeasures. Or I guess to counter those.
Yaroslav [00:20:13]:
I think that’s a correct assessment from sort of a public awareness standpoint. In practice it’s somewhat more difficult Because besides electronic countermeasures, you have these issues of a radio horizon For FPV drones, which means that as
Yaroslav [00:20:36]:
I believe Earth is round Some people disagree. But basically if you fly a drone and you have a land station over here and a drone flying over here
Yaroslav [00:20:49]:
If your drone is flying high, you have good direct radio visibility. If your drone goes low, and usually, Russian infantry and vehicles, they’re on the ground and you want to hit them, you need to go low. Lower you go, maybe you’ll get behind a hill or behind a forest, and if you’re far enough, you’ll just get behind the curvature of the earth. You get into what’s called a radio shadow. And then That is a real bummer because for the last, be it 60 or 20 meters, you won’t be able to see anything and it will be very difficult to hit the target. So to counter that what-- And then the distances that these FPV drones, act on they’re, they can be quite large. So for example, here in the US there was this drone dominance program competition, and in drone dominance the furthest distance was about 10 kilometers.
Noah [00:21:44]:
What was drone dominance? What was that competition?
Yaroslav [00:21:47]:
Drone, the drone dominance is a is a program started, by the US government, to accelerate the development of drone technology here in the US.
Noah [00:21:57]:
Got it. And the longest range thing they were using was 10 kilometers.
Yaroslav [00:22:00]:
Was 10 kilometers, right. In Ukraine, like if your drone doesn’t fly at least 20, 25, it just, no one’s interested in it, and the usual hits are happening. It was like, okay, many hits are happening between 30 and 40 kilometers, and that’s what expected from a regular 10-inch, FPV drone. So at that distance, even at altitudes of like 60 to 100 meters, you might start losing, the link. So some of the earlier AI technology that was fielded in FPV drone was this terminal guidance technology. That was the first product that we ever, launched that helped you as an operator, once you see the target from two, three, 500 meters, you lock onto the target and then, it just, drives the drone towards the target no matter what, even after you lost the visual connection. So optic fiber solves that. However, if you want to go like 20 kilometers with optic fiber, that will add an extra three kilos, of useful weight to your drone. So
Noah [00:23:12]:
‘Cause the cable that you have to unspool as you go weighs.
Noah [00:23:15]:
It is heavy.
Yaroslav [00:23:15]:
At first, like the spool is about 800 grams, so a bit less than a kilo, and then, and then think about 10, 10 kilometer optic fiber is another kilo, something like that. That takes away from your useful mass and then now you have like, you need a 15-inch drone and it can only carry maybe one or two kilos of explosives if you want to go, 20 kilometers. If you want to go to 30 or 40, like 30 is probably max. 40 is like very problem problematic on optic fiber. And then the problem with optic fiber is it’s actually getting super expensive. So and why? Because of all the data centers for AI. That’s literally the same optic fiber-
Noah [00:24:01]:
We’re running out of centers
Yaroslav [00:24:02]:
That’s being used there.
Yaroslav [00:24:02]:
Like when Ukrainians and Russians come to Chinese factories to buy the optic fiber, they’re like, “We’re out. We sold it out to the Americans.”? That’s the craziest thing. So optic fiber went up in price from like, $4 per, kilometer to like, $32 per kilometer in a few months in the beginning of this year. And I’ve
Brandon [00:24:26]:
Claude Code is stopping the Russian drone effort here.
Yaroslav [00:24:30]:
Ukrainian as well. Yeah.
Brandon [00:24:31]:
Ukrainian. But I read somewhere that the Russians had grown more dependent on fiber optic drones relative to the Ukrainians, and that’s one reason why the Ukrainians have sort of regained the initiative in drones recently.
Brandon [00:24:42]:
How accurate’s that?
Yaroslav [00:24:43]:
The Russians were the first ones to scale that. I think by as of now, Ukraine has caught up. I think, like, as of maybe three months ago, Ukraine is mostly caught up on fiber optic. Yeah.
Brandon [00:24:57]:
What percent of damage would you say is in terms of FPV drone damage would you say is now fiber optic versus, like autonomous?
FPVs as the New God of War: Tanks, Artillery, and Cost per Kill
Yaroslav [00:25:07]:
For our, for our audience, I actually, I cannot answer that question. Like, it’s like I know the answer, but I would not disclose that. But for our audience, I think another interesting fact is out of all the casualties on the front line Between 70 and 80% are done by FPV drones.
Brandon [00:25:30]:
FPV drones are the new weapon of universal weapon of warfare.
Yaroslav [00:25:34]:
It’s
Brandon [00:25:35]:
Land warfare, anyway
Yaroslav [00:25:35]:
They used to say that artillery is a god of war because artillery used to cause, like 80% of casualties, and now On that ranking-
Brandon [00:25:46]:
FPV
Yaroslav [00:25:47]:
FPV drones rule.
Brandon [00:25:48]:
FPV drones are the god of war.
Yaroslav [00:25:51]:
Sort of. Dethroned artillery. But it’s not to say that artillery is not useful, is not needed. Like, all of these systems are needed. Maybe except cavalry, although Russians still use it. I know, have you seen the videos of Russians using mules and horses?
Brandon [00:26:09]:
What is the usefulness-
Yaroslav [00:26:10]:
It’
Brandon [00:26:10]:
Of a tank in the in the modern-
Yaroslav [00:26:11]:
That’s where we need Greenpeace to say a word, but they’re silent. Yeah.
Brandon [00:26:15]:
What’s the use of a tank on the modern battlefield?
Yaroslav [00:26:21]:
It’s diminishing.
Brandon [00:26:22]:
Diminishing.
Yaroslav [00:26:22]:
However, I think there might be technologies which will, revive the tank. Look, tank still provides you armor, and armor is important. Like, you still need to armor and firepower, right? Like, you can be an armor personal carrier that provides you, armor. The challenge that currently exists is armor is not very well protected against incoming drones. However, there are ways to do to protect it. We were previously talking about this before the podcast. The CEO of Rheinmetall, recently sort of ridiculed, Ukrainian drone industry, saying that like, there is nothing interesting there, no real innovation, no to stand Compared to like, Rheinmetall or Boeing, and it’s all made by housewives. There was like, obviously a ton of memes about this people ridiculing the CEO of Rheinmetall. And one of the best quotes, I heard on this topic is from my friend, Alexey Babenko, who’s, the head of and founder of VIARI Drone, which is one of the largest manufacturers of FPV drones. They’re our partner. They’re using our autonomy. So he said that the drones we manufacture in one day will be more than enough to destroy all the tanks Rheinmetall manufactures in a year.
Yaroslav [00:27:52]:
Then, yeah, cost-wise, of course, a drone is like, $500 and a Rheinmetall tank is what, probably 5 million-ish or maybe more.
Brandon [00:28:00]:
Don’t mess with those housewives.
Yaroslav [00:28:03]:
Drone wives.
Brandon [00:28:04]:
Drone wives.
Yaroslav [00:28:06]:
That’s it.
Noah [00:28:06]:
There’s a classic saying that everyone always fights the last war.
Noah [00:28:12]:
Yet do How did So from your standpoint, how did we get to the point where tanks became irrelevant in at least for now In a matter of just a few years?
Yaroslav [00:28:24]:
Look, I think it’s the same way, how do we get to the point that calculators become irrelevant?
Yaroslav [00:28:31]:
Now we have iPhones. Like, why would you need a calculator? Technology progresses and its influence grows non-linearly. It’s all exponential. So I can tell you that full autonomy, when you put it on a drone Look, so if you, if you think about a tank and a like, it’s not a direct comparison, but even, like, a drone and a artillery shell or like, sort of cost per kill, an artillery shell for 155 caliber, which is a standard NATO caliber Currently market price is about $4,000 per piece. So compare that to say, $400 per drone. That’s 10 times more expensive. Account for the amortization of the artillery gun and for how vulnerable it is and what is the sort of tactical, capabilities it gives you as compared to a drone. You’ll figure out that an FPV drone is maybe three orders of magnitude, more versatile, more useful, more capable than artillery and many of than a classic artillery. Many of Because there are different types of artillery. Not just, like, one 155. You have mortars, you have all that. But give or take, roughly three orders of magnitude maybe. Again, it doesn’t have that firepower. It’s not one-to-one comparison still.
Yaroslav [00:29:53]:
Now, take that FPV drone. When you put full autonomy on that FPV drone, which can be not very expensive, like systems that we’re, producing are like, in hundreds of dollars of pure bomb
Full Autonomy: From Human Pilots to Smartphone-Directed Drone Missions
Noah [00:30:06]:
Just interrupt. You said full autonomy Just a second ago you were saying that the autonomy here is guidance, right? It’s not decision-making.
Yaroslav [00:30:14]:
No, I was I was saying that’s the f-First and sort of easiest pieces of autonomy that was fielded by us. But if you, if you add full autonomy to a drone
Brandon [00:30:24]:
He, I think he’s asking what does it can you, for the listeners, can you explain What the term full autonomy means?
Yaroslav [00:30:29]:
Basically, I think a good way to think about an FPV drone is like an iPhone of warfare. It’s, like, very inexpensive, very mass producible, very versatile. You don’t need a bunch of other things when you have a iPhone in your pocket. You don’t have, need an MP3 player, you don’t need a calculator, don’t need other things. All right? So FPV drone is an iPhone. Or like, okay, Apple please don’t sue me, is a smartphone. And then, when you add autonomy to it sort of becomes like Uber or ride sharing. Okay? So what it means is instead of actually being a trained pilot who has this complex remote controller device which requires a couple months of training to actually pilot the drone, and then having to pilot it for 30 minutes, flying towards the target, et cetera, et cetera, now you basically, you have your smartphone, you have a drone, you pick your smartphone, you say, “We are here. The bad guys are here. Go and get them.” And the drone goes up, flies in a given direction, localizes itself on the map, finds the dedicated area where they, the bad guys are supposed to be sees the bad guys, bombs them, return, like, watches, so does a damage assessment, returns back, sits down, and then you can pick it up and watch the video if you didn’t have the radio link, right?
Noah [00:31:59]:
That’s a bomber drone.
Yaroslav [00:32:00]:
That’s full autonomy for a bomber drone, right?
Noah [00:32:03]:
You’re saying that no human decision is made in this entire process?
Brandon [00:32:06]:
That’s not, that’s not what he’s saying.
Yaroslav [00:32:07]:
A human decision was made at the beginning of the process-
Noah [00:32:09]:
I get it. I get it
Yaroslav [00:32:09]:
The same way as you would fire an artillery.
Yaroslav [00:32:12]:
When you fire an artillery, you don’t stop at like, 500 meters away from a target and ask it whether, you want to strike or not. That’s exactly, a human decision is always made at some point. So when you do that’s full autonomy, and such full autonomy is happening as we speak. And such full autonomy increases the capabilities of an FPV drone, which is already, like, three orders more powerful than an artillery shell. Full autonomy increases its capabilities by four orders of magnitude because now you can have 100 times as many people who can use it, because you don’t need to train those people, and this is important. You can have 10 times, mission success rate, and you can have 10 times utility per drone because now instead of being one-way kamikaze, it’s, it can be a bomber.
Brandon [00:33:05]:
Now wait, let’s, you said 10 times mission success rate, which means that fully autonomous bomber drones succeed in their missions 10 times more often than human piloted bomber drones do. That’s an important thing to know.
Noah [00:33:17]:
Maybe, to push back on
Brandon [00:33:19]:
They’re super, they’re superhuman. They’re, they’ 10X superhuman.
Yaroslav [00:33:22]:
They’re not vulnerable to electronic warfare. They don’t care about the radio horizon. They don’t lose track during navigation. They are not susceptible to human error when, an artillery shell or other drone blows up besides you and you’re like, “Hell no,”like, “I’m getting out of here.” Right? That doesn’t happen to an autonomous drone. Like, all of those things. Like, we have, like, one of the brigades that’s using our drones with just first level autonomy They literally said that their success rates-
Brandon [00:33:53]:
What’s first level autonomy?
Yaroslav [00:33:54]:
First level autonomy is just the terminal guidance.
Yaroslav [00:33:57]:
By the way, we have video of that. We can watch that.
Brandon [00:33:59]:
Terminal guidance means a human gets it nearby and then the AI takes over.
Yaroslav [00:34:03]:
The human flies it all the way, like 30 kilometers towards the target, and obviously the target was probably given to that human by someone who’s flying some ISR drone, some reconnaissance drone, right? So all the way to the target, and once you see the target from a distance of 500 meters, you do target lock, and from there drone flies autonomous. So just that feature alone, it has increased the guy’s, his call sign is Grom, so it has increased his, mission success rate, like precision of mission, yeah, mission success rate from 20% to 71%, and it also increased his kill zone from three kilometers to 10 kilometers, which means there’s certain area around the front line which is designated kill zone. Whenever enemy goes into that area, it’s almost guaranteed to be to be destroyed by a drone. And then obviously the drones are not launched from like, the zero line. They’re usually launched from like, minus 10 kilometer-
Mission Success, Failure Modes, and the Five Levels of Autonomy
Brandon [00:35:03]:
What is a zero line?
Yaroslav [00:35:05]:
Zero line is sort of an imaginary line of control, of two conflicting forces.
Brandon [00:35:14]:
It’s important to explain these things to a lot of the listeners who are
Yaroslav [00:35:17]:
Thank you for asking
Brandon [00:35:18]:
Familiar with warfare.
Noah [00:35:20]:
Myself.
Noah [00:35:20]:
I’m one of those listeners.
Brandon [00:35:20]:
You said that level one autonomy, in other words just terminal guidance, just, like, human gets it to the finish line and then it goes over the finish line, increases mission success from 20 something percent to 71%, or something like that.
Yaroslav [00:35:33]:
Increases the kill zone
Brandon [00:35:34]:
Increases the kill zone
Yaroslav [00:35:34]:
Three kilometers to 10 kilometers.
Brandon [00:35:36]:
Got it.
Yaroslav [00:35:36]:
On both parameters-
Brandon [00:35:37]:
What is full autonomy, dude? And
Noah [00:35:38]:
Actually on real quick, can we define mission success and like, maybe in a way, what are the failure modes of missions?
Brandon [00:35:44]:
I have a guess what mission success is.
Noah [00:35:46]:
But I could
Brandon [00:35:47]:
Get ‘em.
Yaroslav [00:35:49]:
No, but that’s a very good question, in fact, because, even if you fly into the target, well, first the target can be damaged or destroyed. Those are two different modes. Then there can be different targets. A sole infantryman is one kind of target. A dugout where supposed there are some, enemies there is another kind of target, and a some mechanical equipment is another type of target. Radio emitting equipment, which, like, often, like, the targets that the military want to get more than anything else is the some enemy radio tower or something like that or some small radio dish that really makes life difficult in that area, in that combat area. So those are different targets, right? It can be destroyed, can be damaged.Then sometimes, the drone hits but doesn’t explode. Like, that happens. And then, there are other failure modes. You didn’t even reach the target because you were A jammed by electronic warfare; B, you lost the control over drone because of the radio horizon; C, you were jammed by a different type of electronic warfare that happens way before You hit the target area. It’s, impacting your, video receiver. So like jamming on video or jamming on control are two different types of jamming. Then something malfunctioned on a drone, just a mechanical malfunction, maybe like a motor broke or like, whatever. So all of those are different failure modes. Yeah, or maybe you got lost, you’re navigate navigating to your, to your target. That happens, too.
Noah [00:37:41]:
The Level one autonomy, basically you manage to point in a direction.
Noah [00:37:49]:
You go there, and then the last mile The drone taking over.
Yaroslav [00:37:52]:
We define this like, I define that but it sort of got picked up by the industry. We define five levels of autonomy. So level one is terminal guidance. It’s what we just discussed. Level two is bombing. Level three is autonomous target detection and engagement decision. Level four is autonomous navigation. And level five is autonomous takeoff and landing.
Noah [00:38:15]:
Those are good things to know
Yaroslav [00:38:16]:
Those are five levels of autonomy. Now, if you
Noah [00:38:19]:
I have a question for you.
Yaroslav [00:38:19]:
Sorry. Like, let me finish with
Noah [00:38:21]:
Sorry
Yaroslav [00:38:21]:
Theoretical part.
Noah [00:38:23]:
What is Tesla running at right now?
Yaroslav [00:38:25]:
Tesla?
Noah [00:38:25]:
No, sorry.
Yaroslav [00:38:26]:
That’s very good point. Like, it’s exactly, it was inspired by the levels of self-driving autonomy.
Noah [00:38:32]:
Waymo’s level five, right?
Noah [00:38:35]:
You just tell it where you want to go, it picks you up, and then you go there.
Yaroslav [00:38:36]:
I think, like, if you, if you look at the classic definitions of self-driving cars, Waymo is still, like, level four because it still requires even remote, but still, like, human control. It’s like if Waymo gets in trouble, there is an operator who takes over and resolves this. So that would still be a level four. It doesn’t map directly, but it’s also five levels.
Brandon [00:38:58]:
Can I, can I interject a question here? In terms of an FPV drone that’s like a suicide drone that’ll just blow itself up killing something, how do what it hit? Like, does it, just transmit back, or do you sort of like, lose track of it and hope it hit? Like, what happens to that?
Yaroslav [00:39:16]:
That’s a great question. So
Brandon [00:39:18]:
You need another drone
Yaroslav [00:39:19]:
Like, the current battlefield in Ukraine is saturated with different types of drones. So obviously you have all the FPV drones and last year alone, Ukraine manufactured about 4 million of these, and then Russia’s maybe, like, 20% less than that. And for this year, the publicly voiced target was 7 million on Ukrainian side. So it’s, like, serious numbers. We’re getting in serious numbers here. And then besides those, there are different, reconnaissance drones, ISR as we call them, and there are sort of tactical level ISR where we, both Ukrainians and Russians usually use, Mavic, drone by DJI. And then there are a bunch of locally produced drones, which are sort of fixed wing drones that can stay in the air for much longer than Mavic, maybe, like, half an hour. And then, there are drones that can stay for many hours or even up to a day. And those drones have, are more expensive, have more expensive cameras, et cetera, et cetera. We hunt those drones that Russians launch. The Russians hunt our drones, and so on. But ideally, when you, are a group of soldiers operating an FPV, you’ll have someone in your, company, or someone in your platoon who has an ISR asset that will do target designation for you. They’ll say, “Oh, like, there’s a Russian vehicle over there. Go and get him.”and you go there, you get it, and they’re like, “Okay, confirmed.”
Battlefield Surveillance and the Eight Dimensions of Autonomy
Brandon [00:40:57]:
Those guys are watching. They have their own drones in the sky.
Yaroslav [00:40:59]:
Target destroyed. They have, like, a carousel of drones because One Mavic cannot stay more than 30 minutes. It
Brandon [00:41:06]:
They’re constantly surveilling the battlefield.
Yaroslav [00:41:07]:
Almost every spot on the battlefield.
Yaroslav [00:41:11]:
It’s not always the case. Sometimes you will not have a surveillance asset, so then you would launch another FPV just to confirm that there was a hit. Then if you see there was a hit and you’re not sure if it completely destroyed, you maybe hit again for good measure.
Brandon [00:41:26]:
You double tap.
Yaroslav [00:41:28]:
That’s how it works. But I was about to give you another sort of piece of taxonomy. So you have five levels of autonomy, right? Then you have sort of eight dimensions of autonomous battlefield. So what is eight dimensions? It’s crucial to understand how autonomy evolves in a modern, battlefield environment. So dimension number one is level of autonomy. What are the capabilities that your asset has? Dimension number two is the platform you’re operating on. So it can be a quadcopter, a fixed wing drone, different types of maybe, like, a long range drone or short range drone, but it can also be a missile. You can have autonomy even on an artillery shell or a ground vehicle or a sea vehicle. So all of those are different platforms. Level three would be domain. So it’s ground to ground or ground to air as an intersection, or ground to sea or sea to air. They’re all, like, all the nuances with different domains. Then level four, would be higher levels of autonomy, such as swarming, drone carriers, drone nests, et cetera.
Brandon [00:42:39]:
Now when you’re saying level, you’re talking about dimensions, not about-
Yaroslav [00:42:42]:
Sorry. Yeah
Brandon [00:42:43]:
Autonomy levels. So dimension four.
Yaroslav [00:42:43]:
The dimension. Yeah, I used to say I was supposed to say dimension. I say dimension because each of them works with another, right? So you might have, like third level autonomy, fixed wing drone operating in land to air, and stuff like that right? And then operating in a swarm or operating from a nest. Right? Then you have, sort of dimension number five is environment. So is it day or night? Is it summer or winter? Is it, humid, cold, dry? What kind of target is it? Is your target hiding in a forest, or is it, behind a hill or within buildings? So all of that is environment. Then you have, dimension number six is command and control. How are you dealing with or like, tens of thousands of those assets around the battlefield? How are you coordinating that on the higher levels of command? How are you collecting data? All that.
Yaroslav [00:43:44]:
Dimension number seven would be infrastructure, so things like simulation, data collection tools, security, deployment mechanisms, et cetera. So all those systems have to be developed separately and integrate with all the others. And finally, dimension number eight is sort of distribution. Have you deployed 100 of these systems or 100,000 of these systems? Because those are two very different ballgames. So that now gives you a more broad overview of how autonomy propagates across the battle space.
Targeting, Human Responsibility, and Rules of Engagement
Noah [00:44:23]:
As someone who has done machine learning and had gone out of distribution and had things, go horribly wrong, you were talking several of these, kind of axes of thinking about drone warfare seem like they could be very susceptible to some sort of distribution shift if you start making things autonomous.
Yaroslav [00:44:41]:
Like what?
Noah [00:44:41]:
I mean Well, first of
Yaroslav [00:44:43]:
If the I’m very interested Sort of sort of kinds of scenarios that you’re thinking about.
Noah [00:44:48]:
Like the most obvious one is you, if I assume these are computer vision guided systems for at least the last mile, how do you ensure that oh, well, like you now have some fog roll in or something, and you, the drones just attack the wrong thing? Or maybe, it probably will not turn around and fly back and attack you, but you
Yaroslav [00:45:10]:
Same, the same, the same question, how do you ensure that your mortar fire hits the right thing? Well, it’s like mortar fire, give or take half a kilometer could be plus or minus. So maybe you fire one, and then you fire another. So drones are actually, much better in being precise in those scenarios. And I think, to your point, I think five to 10 years from now it will be immoral to use weapons without AI.
Yaroslav [00:45:44]:
‘Cause weapons without AI will be more likely to cause, collateral damage or unwanted damage. Same way, it will be immoral to drive your own car manually on a public road because it’s more likely to cause, unwanted damage.
Noah [00:46:02]:
Wow, I never considered that might
Brandon [00:46:04]:
Really? That’s definitely coming.
Yaroslav [00:46:07]:
Anyway.
Brandon [00:46:07]:
No, but that’ I don’t know, it’s an obvious, an obvious thought. I agree with you.
Brandon [00:46:12]:
I, No, they, obviously they’re not going to let you drive once most of the cars on the road are autonomous.
Noah [00:46:17]:
No, that one, don’t I believe.
Yaroslav [00:46:19]:
No, I think you were you were talking about drones, right?
Brandon [00:46:21]:
The drones, right. Cool.
Yaroslav [00:46:22]:
The weapons, right?
Brandon [00:46:23]:
Friendly fire and collateral damage and stuff like that is all minimized with AI.
Brandon [00:46:27]:
Here’s my question. Take all let’s go to level six autonomy. Let’s take all of the target selection. Let’s take all the battlefield data, integrate it into one big AI, and have that big AI basically be in command of the battlefield And agentically do target selection.
Yaroslav [00:46:44]:
Be the general, right?
Brandon [00:46:44]:
It’s a general. It’s, you’ve cut humans out of the loop except maybe as dexterous robots, repairing drones and fastening things to drones or maybe something like that because you don’t have those robots yet. How soon are we there? AI general.
Yaroslav [00:46:58]:
The most important thing to ask ourselves is who will be faster to that us or our adversaries?
Brandon [00:47:07]:
I assume us, but how fast will we be to that? I hope us.
Yaroslav [00:47:11]:
I hope so too.
Brandon [00:47:12]:
How fast can we Like when are we looking at that in terms of like horizons years?
Yaroslav [00:47:18]:
Like technically, it could be done now. The question is of course, there’s, some engineering work to be done. The bigger challenge is deployment. Right? So okay, technically Like operation in Iran, right? They, the publicly, it was claimed that I think Palantir system was used for target designation, et cetera, et cetera. So it is not exactly as you say, the AI makes all the decisions, but basically AI goes through all the data you have, gives you these 1,027 different targets and says, “You-- To confirm, please press Okay.” And you look at the targets and you’re like, “Yeah, sounds right. Press Okay.”so that’s, I think that’s where we are now already, or we were a couple weeks ago as we’re recording this on April 10th. Another question is how massively deployable it is. Is it, like, every decision being made like that or is it, like, just some of the decisions made like that? And then different levels of command and control. There you have, like, the platoon, the company level, the battalion, et cetera, et cetera, et cetera. But the tricky thing here when we get into that territory, the tricky thing is If your enemy is getting advantage of being Thousand times faster than yourself by deploying such systems What do you do?
Yaroslav [00:49:10]:
You got to-
Brandon [00:49:12]:
The if the enemy is a thousand times faster than you at deploying those systems?
Yaroslav [00:49:16]:
Like, if enemy starts deploying level six autonomy, as you call And you have not started doing
Brandon [00:49:22]:
You’re in trouble
Yaroslav [00:49:23]:
Yes, exactly. So you have to catch up. So my point is that it is very important to think about the safety of these systems, but that thinking should not slow you down in developing them because they are critical for your existential, survival, right? And like, one person who doesn’t think, doesn’t get to think about the ethics of the war is a dead person. That person surely doesn’t get to think about that.
Brandon [00:49:52]:
What would be the safety risk of such a system?
Yaroslav [00:49:55]:
Of course-
Brandon [00:49:56]:
Friendly fire?
Yaroslav [00:49:56]:
Just wrong decisions, right?
Brandon [00:49:59]:
I see.
Yaroslav [00:49:59]:
Maybe, these decisions-
AI Command Decisions, Dead Zones, and Complex B