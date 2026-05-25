# AI-Native Healthcare: 100M Doctor Visits, 10–20 Hours Saved, Prior Auth in Minutes — Janie Lee & Chai Asawa, Abridge
**Source:** https://www.latent.space/p/abridge
**Date:** 2026-05-14
**Author:** Latent Space
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Latent Space: The AI Engineer Podcast
AI-Native Healthcare: 100M Doctor Visits, 10–20 Hours Saved, Prior Auth in Minutes — Janie Lee & Chai Asawa, Abridge
30
3
1
1×
0:00
Current time: 0:00 / Total time: -1:05:20
-1:05:20
Audio playback is not supported on your browser. Please upgrade.
AI-Native Healthcare: 100M Doctor Visits, 10–20 Hours Saved, Prior Auth in Minutes — Janie Lee & Chai Asawa, Abridge
How Abridge is quietly turning the patient and clinician conversation into the operating system of healthcare
May 14, 2026
30
3
1
Share
Transcript
Special discounts up for
AIE Melbourne
(
LS discount
) and
AIE World’s Fair
(group discounts up to 25% -
CFPs still open for Autoresearch and Vertical AI
) Cya there!
Abridge
did not
start as an “GPT wrapper”. It was founded in 2018, years before the Cambrian explosion of AI application layer companies. OpenAI launched ChatGPT publicly on November 30, 2022 and by then,
Abridge
had already spent years doing the unglamorous work of building trust for one of the highest context, most important workflows in healthcare:
the conversation between a patient and a clinician.
Abridge’s original wedge was
clinical documentation
. Listen to the visit, generate the note, reduce the clerical burden, and let clinicians spend more time with patients instead of the EHR. By focusing on how doctors actually document, how health systems actually buy, how EHR integration actually works, how clinicians verify outputs, and how missing context during a visit turns into downstream friction across billing, prior authorization, quality, and follow-up,
the adoption of LLMs became a force multiplier
on a workflow already optimized for sensitive context gathering.
The company has scaled fast: Abridge says it is projected to support
80M+ patient-clinician conversations
this year across
250
large and complex U.S. health systems, with support for
28+ languages
and
50+ specialties
. It raised
$300M at a $5.3B valuation
in June 2025
, after a
$250M round earlier that year
.
Today,
Janie Lee
and
Chaitanya “Chai” Asawa
of Abridge join us for
another crossover pod
with
Redpoint’s
Jacob
Effron
(who is on the board of Abridge) to dive into how Abridge is building the clinical intelligence layer for healthcare starting with ambient documentation, then expanding into clinical decision support, prior authorization, payer/provider/pharma workflows, and eventually real-time agents that act before, during, and after the patient conversation.
We go inside the product, data, infra,
evals
, workflow, privacy, and org design choices behind bringing AI into one of the highest-stakes enterprise environments from 100M+ medical conversations and specialty-specific evals to real-time alerts, EHR integration, de-identification, clinician-scientist teams, and why healthcare may solve some of the hardest AI problems first.
We discuss:
Why Abridge started with
clinical documentation, “pajama time,” and saving clinicians 10–20 hours a week
The transition from ambient scribe to clinical intelligence layer:
save time, save money, and save lives
Why conversations between patients and clinicians may be
the most important workflow
in healthcare (
patient visit summary feature
)
Chai’s “healthcare-coded Glean” framing:
context is king, but healthcare raises the stakes on safety, evals, and rollout
Why Abridge wants AI to feel like “air conditioning”:
always in the background, but only interrupting when it truly matters
The prior authorization example:
turning a denied MRI weeks later into real-time guidance while the patient is still in the room
Why payer policies, EHR data, medical literature, and hospital-specific guidelines make the problem hard, and also create
the moat
How Abridge thinks about ambient form factors:
mobile, desktop, in-room devices, nursing workflows, multimodality, and future AR
The multi-sided healthcare customer:
CMIOs, CFOs, CIOs, clinicians, patients, payers, and pharma
The hardest AI problem at Abridge:
high-quality, low-latency, low-cost real-time support in a high-stakes clinical setting
When Abridge uses
frontier models vs proprietary models
, and why its unique data from medical conversations matters
Why
“every agent is a coding agent underneath,”
and how the EHR can be thought of as a filesystem for healthcare agents
How Abridge approaches personalization across individual doctors, specialties, and health systems
Why
“AI slop” is AI without context
, and how edits, memories, and clinician preferences create a data flywheel
Abridge’s eval stack:
LFDs, LLM judges, in-house clinicians, third-party evaluators, specialty-specific evals, and progressive rollout
HIPAA, PHI, de-identification, one-way anonymization, customer contracts, and learning from healthcare data safely
What changes when you operate at 100M+ conversations:
reliability, cost, post-training, model routing, and infrastructure optimization
Why the same clinical conversation can serve doctors, patients, payers, pharma, and future clinical-trial workflows
How Abridge works with
EHRs
, and why deep interoperability is table stakes for clinician adoption
Why healthcare AI has
regulatory tailwinds, why 80/20 does not work here
, and why high-stakes domains may drive AI forward
Why Abridge embeds
“clinician scientists”
into product and eval teams
What Chai learned from
Glean
about search, quality, and durable AI infrastructure
Why the future of AI infra may look like
context layers
, event-driven systems, Kafka, Temporal, sockets, CRDTs, and tools built for humans
Why Janie changed her mind on “
PRDs are dead,”
and why crisp written clarity matters more in complex AI products
How Abridge uses
Claude Code, Cursor, and coding agents
internally
Abridge:
Website:
https://www.abridge.com/
X:
https://x.com/AbridgeHQ
Janie Lee:
LinkedIn:
https://www.linkedin.com/in/janiejlee
Chaitanya “Chai” Asawa:
LinkedIn:
https://www.linkedin.com/in/casawa
Timestamps
00:00:00 Introduction and what Abridge does
00:02:05 From ambient documentation to clinical intelligence
00:04:04 Clinical decision support and context as king
00:06:57 Alert fatigue, proactive intelligence, and prior authorization
00:12:36 Ambient AI form factors and healthcare customers
00:16:59 The hardest AI problems in healthcare
00:18:26 Frontier models, proprietary data, and model strategy
00:21:07 The EHR as a filesystem for agents
00:24:03 Personalization, memory, and clinician preferences
00:30:40 Evals, LLM judges, and progressive rollout
00:36:47 HIPAA, de-identification, and privacy
00:39:21 100M conversations and operating at scale
00:44:10 EHR integration and the clinical intelligence layer
00:46:39 Healthcare regulation, latency, and high-stakes AI
00:50:11 Clinician scientists and long-tail quality
00:53:04 Lessons from Glean and durable AI infrastructure
00:57:03 The future of agentic healthcare workflows
00:57:34 PRDs, product clarity, and building serious AI products
01:03:11 AI coding tools at Abridge
01:04:06 Outro
Transcript
Introduction: Abridge, Clinical Intelligence, and the Latent Space x Unsupervised Learning Crossover
Swyx [00:00:00]:
Okay. This is a special crossover Latent Space Unsupervised Learning pod.
Jacob [00:00:07]:
Very excited to do this.
Jacob [00:00:08]:
At this point, we get together once a year.
Swyx [00:00:10]:
Once a year
Jacob [00:00:11]:
And this is a fun occasion to get to do it on.
Swyx [00:00:13]:
I really wanted to talk to Abridge but I felt very underqualified because healthcare is not something we cover very intensely. It just so happens that Redpoint’s our big investors and supporters of Abridge.
Jacob [00:00:27]:
Anytime you want to have a portfolio company on your podcast
Jacob [00:00:29]:
Please, by all means.
Swyx [00:00:31]:
So we’ll introduce our guests. Chai and Janie, welcome to the pod.
Janie [00:00:34]:
Thanks for having us.
Chai [00:00:35]:
Thank you.
Janie [00:00:35]:
We’re excited to be here.
Chai [00:00:36]:
Thank you.
Swyx [00:00:36]:
So for listeners, what do you guys do, just to situate you guys in the company?
Janie [00:00:42]:
Abridge is a clinical intelligence layer for health systems. We really started with documentation and building for clinicians and as we think about reducing the burden that clinicians have, they’re spending 10 to 20 hours a week on documentation. There’s a massive doctor shortage in the country. We also think that conversations between patients and clinicians are probably the most important workflow in healthcare. It’s where care is given and received but if you think about the 20% of our GDP that goes towards healthcare, almost everything is a derivative of that conversation, whether it’s the claim, the payment, the actual diagnosis given, the treatment. And we’ve started with a conversation to reduce the burden for doctors on documentation but we’re really excited about the path ahead as we become this broader clinical intelligence layer.
Chai [00:01:34]:
I’m Chai. I work on clinical decision support at Abridge.
Swyx [00:01:37]:
Yes.
Chai [00:01:37]:
And so as Janie said, we’re uniquely situated where we started off with the clinical note. What I’m really excited about and where we’re expanding towards is what are all the things you can do before the conversation, during the conversation and after the conversation if you did have access to all the context about patients, payer guidelines, medical literature and put that together and to serve, how healthcare could look fundamentally different.
Swyx [00:02:01]:
And that’s the context engine that you guys have?
Chai [00:02:04]:
Yes.
Swyx [00:02:04]:
Is that what it’s called? Okay.
Swyx [00:02:05]:
So historically, as I understand it, the company started in 2018. A lot of people would be familiar with the AI voice notes form factor that doctors would be “Well, do you consent to being recorded?” It replaces handwriting and what have you. But it sounds like more recently there’s been a big transition in the company. Tell me about the broader transition.
From Documentation to Clinical Intelligence: Save Time, Save Money, Save Lives
Janie [00:02:26]:
So from a transition perspective, we really think about our journey as The first act was: how do we help save time? And that’s where a lot of that original product was.
Swyx [00:02:37]:
By the way, one of those interesting stats
Swyx [00:02:39]:
On your landing page was, doctors spend time after hours.
Janie [00:02:43]:
They call it pajama time.
Swyx [00:02:44]:
Why is that pajama time?
Janie [00:02:46]:
Doctors after work in their pajamas
Swyx [00:02:48]:
In their pajamas. Oh
Janie [00:02:49]:
At home are just writing and catching up on their notes every day.
Janie [00:02:53]:
Some of our favorite customer love stories, we have a Slack channel called Love Stories. We have clinicians telling us, “Abridge has helped us, from retiring early or we’re now finally able to
Janie [00:03:06]:
go home and eat dinner with our kids for the first time.”
Chai [00:03:08]:
Save the marriage in some cases.
Swyx [00:03:10]:
One of the quotes was “We’re not divorcing anymore.”
Swyx [00:03:12]:
I’m asking, “Why?”
Swyx [00:03:14]:
Because they’re working too much.
Janie [00:03:16]:
But, in terms of where we’re going and where we’re expanding, we really think about our second and third acts around how do we help health systems save and make more money. Health systems are operating with record-low operating margins. It’s getting harder and harder to serve patients and they have regulatory, some tailwinds but also a lot of headwinds coming their way and AI is ripe for helping on the saving and make-more-money piece. And then ultimately, how do we help save lives? The fact that our software and our product is open millions of times a week before, during and after a patient walks in the room, gives us massive opportunity with products like clinical decision support, which Chai is building but so many others to improve patient outcomes and probably one of the most important workflows and problems to be going after right now.
From Glean to Healthcare: Context Is King
Jacob [00:04:04]:
One thing that’s interesting, Chai, is you came over to Abridge from Glean and clinical decision support, which for our listeners is, in the context of a visit, helping a doctor figure out the right type of care. It’s really a search problem in many ways, going through lots of different data sources. Very analogous to your previous role as one of the earliest engineers over at Glean. I’m sure a lot of our listeners are curious what’s similar about the problems that you’re going after now and what feels different, now that you’re in healthcare.
Chai [00:04:33]:
Very similar. Taking a step back, with every wave, there’s a lot of very similar patterns that happen across different products. A lot of social networking products look the same. A lot of credit-based products look the same. And we’re seeing that very similar in the agent era with many companies, of course, in Redpoint’s portfolio and so forth. And the key insight between both companies is that you have amazing models but context is king. Context is what puts them to work. So I see it in a lot of ways, a lot of similarities in this is a healthcare-coded version of Glean but the differences are really interesting. A couple things that come to mind. First and foremost, the rigor of the setting we’re in. The downside risk is extremely high here in healthcare. It can be fatal in some cases. You prescribe something that the patient is allergic to for example. Whereas at Glean, it’s “Oh, you got the question wrong.” It wasn’t the end of the world in most cases. And so what does that mean? That shapes our evaluation strategy, both offline evaluation, progressive rollout and there’s a lot more we could go into there. Second thing that comes to mind is, vertical versus horizontal. In both cases, there’s a large variance but when Glean is, it’s a much more horizontal company, there’s a variance of personas, companies that you’re working with. We also have a variance of personas, different types of specialties, different hospital systems. But the variance is a little more narrow. So from a product perspective, you’re able to focus far more, especially when you have a maturing technology and you’re building new products that never existed before. It lets you go after them much more easily and especially in healthcare where so many problems were solved with labor and process, that it’s extremely ripe for AI to keep helping augment and enable. And the final thing that’s really interesting, Abridge specifically compared to many other companies in the AI area, is the modality we started with where we’re ambient and we’re always listening in the background. And many more AI products will go that way but it’s how we started. And that’s the greatest form of AI we can create, AI that’s seamless. You’re not looking at your screen. It’s always there. It’s always helping you out and being proactive. The Jarvis vision that, every hackathon I went to over the past decade, there was always a Jarvis competitor. But Abridge very much started from the opportunity and continues to go that way.
Ambient AI and Alert Fatigue: When Should the Product Interrupt?
Jacob [00:06:57]:
One thing that is super interesting then from a product perspective is you have this always-on seamless in the background and then you have to decide when you break the wall almost and say, “Hey, clinician, you might not have thought about X,” or whatever it is that you want to do. And in healthcare traditionally there’s been this idea of alert fatigue and a million pop-ups and then a doctor just ignores all of them. It’s probably a pattern that a lot of builders are thinking through now. How do you think about the right way to intervene or to pop up in a doctor visit?
Janie [00:07:26]:
It’s such a good question. Alerts are notorious in healthcare specifically. Over 90% of alerts are ignored. The first and most important thing is context is everything, as Chai alluded to and I also think about how do we go from being reactive alerting to really proactive intelligence at the point at which it matters most. One thing we like to say is we want our product to feel like air conditioning. It should be in the background just making things better and if there is something that has great clinical risk and we’re acutely aware that intervening now and not later is incredibly important, we should decide to act. But if you think about proactive versus reactive, instead of alerting a clinician during a visit when they’re with their patient having a pretty serious and sensitive conversation, how do we prep a clinician before they walk into the room with that patient? And so historically, clinicians might have to manually go through charts with a patient that they’ve had over the course of months or years and they’ll try to suss out what are the things they should be doing. You can imagine a world with Abridge. We’ll summarize all of the most recent context for you, tell you based on the reason for a visit the patient is coming in for the types of things you should be discussing. And so you’re going into that conversation prepped rather than walking in cold to that patient visit and then having this product interrupt you five or 10 times throughout the visit. And there might be times where it’s really important to interrupt. We have a product called Prior Authorization and so this is when you may go into a doctor’s office with knee pain. They’ll prescribe you an MRI and so many of us have had this experience before, where in four weeks you’ll get a call saying, “Hey, Sean, that MRI that you were prescribed wasn’t approved and why don’t you come back in? We’ll figure it out.” In a world with Abridge, we might choose to quietly but still alert a doctor in that visit. And alert is probably not even the word we would want to use. Before a patient leaves, we would want to tell the doctor, “Hey, Doctor, before Sean leaves, you should ask him, has he had physical therapy and has his pain lasted for more than six weeks? Because the Aetna plan that he’s on in California requires six things. We’ve already confirmed four of them have been met ‘cause we have all the context. But these two last criteria, if you can address with Sean before he leaves the room, we could guarantee that your MRI is approved before you leave.” And so when you think about clinical usefulness, impact to the patient, there are instances in which if we can catch a doctor while the patient is still in the room, as we think about save time, save money, save lives, we get to check all of those boxes. But when doctors have 15 minutes between visits, we have to be really thoughtful about when it matters.
Prior Authorization: Reducing Latency in Care
Chai [00:10:23]:
There’s this interesting product opportunity AI has is reducing latency in the world. For example, prior authorization is an example of where care gets delayed and so great AI can reduce that. And the problem with alerts before partially is a technical problem: the quality of your alerts really matters. They’re going to get ignored if you get alerts that... Similarly in engineering, where they’re noisy alerts that you can’t act on. But if you can make really high-quality alerts with both the context, as Janie said, and really high-quality models, then you can create a whole other game.
Janie [00:10:53]:
And I really like that experience because it starts to tease apart, what makes this so hard and unique. One, to make that prior authorization example possible, think about all the data that you need to have. You need to integrate with the electronic health record to know all of the patient context. Do we have access to your previous labs, previous imaging? And then to match you and to know that you’re on Aetna, we have to collect all of the different payer policies and they vary by state. Some of these payer policies live on websites. Some of them live in unstructured 50-page PDF files.
Jacob [00:11:31]:
I thought this episode was
Jacob [00:11:31]:
To make sure we didn’t scare people from healthcare.
Janie [00:11:34]:
But when you think about the things that make it hard, it also gives you the moat.
Janie [00:11:39]:
And then the second is the AI and the model quality we need to be able to hang our hat on. And so the bar, similarly when I worked at Opendoor, I worked on pricing models. Every outlier wiped out the margins of 30 and so similarly here in healthcare, the bar for accuracy is so high. And then I’d say the last is workflow is everything. If insurance companies deploy AI, it typically happens too late and this is when you have the notorious comical examples of AI just fighting each other when it’s too late. But if we can pull forward the use of both the AI but also the ability to solve problems when the patient’s in the room, you can start to collapse what typically takes weeks or months after your visit, ideally down to minutes or real-time. And it’s where healthcare is both very difficult but also extremely rewarding if you can crack it.
Product Form Factors: Mobile, Desktop, In-Room Devices, and AR
Swyx [00:12:36]:
Just to get some baseline on the form factors, because I’ve seen some videos on your website and stuff. You guys talk a lot about ambient AI. Is it primarily on the phone? Is there any other form factor that people get Abridge in? Is there an Abridge room setup where it’s always on? I don’t know.
Jacob [00:12:55]:
An Abridge podcast studio.
Janie [00:12:58]:
Primary form factor is mobile and desktop. Usually
Janie [00:13:00]:
Clinicians are walking in and out of rooms with mobile but at the end of the day, when they’re closing out their notes or wanting to prep for the day ahead, they might use desktop. We have been having a lot of really interesting partnership conversations with a lot of these in-room device companies as you think about the power of multimodality and even more data, as you think about all of what is not captured today. It is fascinating to think about, especially even as we go into building and scaling our nursing product. It’s one where nurses constantly, as they’re walking in to check in on a patient for two minutes or maybe even 30 seconds,
Janie [00:13:43]:
Starting an Abridge experience is probably going to take longer than the visit. And so what can we do with in-room devices that are always on starts to raise really interesting and fun product questions.
Swyx [00:13:54]:
I was thinking, the way in tech companies we have all these Google Meet
Swyx [00:13:58]:
And other things, we might as well set up entire rooms with just Abridge tech.
Chai [00:14:02]:
Very much. AR glasses and related form factors are also relevant: how do we bring the information to the clinician in real-time without a screen, while still letting them focus on the patient?
Swyx [00:14:18]:
Do you think they want that? I’m skeptical of AR, but I’m curious what you’ve tried.
Chai [00:14:26]:
Admittedly, it’s not a near-term product roadmap
Chai [00:14:29]:
By any means. I’m being far-fetched.
Jacob [00:14:31]:
There’s some sick AR stuff for surgeries.
Swyx [00:14:33]:
Really?
Jacob [00:14:33]:
When people are trying to visualize, you’re about to make an incision but you want to see, what the cut might look or what the body might look like inside and they can layer in imaging.
Swyx [00:14:43]:
That’s cool.
Chai [00:14:45]:
At some point in the future.
Janie [00:14:46]:
But there are a lot of our largest customers and at the largest health systems integrating already and so even as we think about building into it, unlocks a lot of product capabilities.
Swyx [00:14:57]:
And just to establish the terminology. Sorry, and I know I’m asking basic questions somewhat for myself but also for the audience who might be
Health Systems, Buyers, Clinicians, Patients, and Payers
Swyx [00:15:05]:
Less integrated. When you say health systems, it’s like the Johns Hopkins, the Kaiser Permanentes.
Janie [00:15:09]:
Mayos, the Kaisers of the world.
Swyx [00:15:10]:
These are your customers, right? And the outcome that you deliver for them is happier doctors, reduced cost of processing, reduced mistakes. It’s weird in a sense that I feel like there’s also, a secondary customer, the customer of the customer and I don’t know if you — do you think about it that way?
Janie [00:15:28]:
The other interesting and complex part of building product is we have our buyers, who are the chief medical information officers
Janie [00:15:39]:
The chief financial officers, the CIOs of these large health systems. Our users today are clinicians but if you think about who downstream is impacted, it’s patients. And so as we build, with every product in mind, we think about who we’re building for, who the secondary user is and what does that mean either in terms of experience, security compliance, ROI that we have to make tangible. And so like you said, time savings is one of them. But for CFOs, they care a lot more than just time savings. We have to show for every dollar you put into Abridge, because you have more compliant documentation or because you have fewer queries coming from your billing team, we save or add real dollars to your bottom line or top line, are things that we’re constantly thinking about because of the dynamic across all three sets of users.
Chai [00:16:32]:
There’s a whole other axis too with the payers and pharma
Chai [00:16:35]:
as well. Connecting all these three big stakeholders in healthcare is
Swyx [00:16:39]:
Do the payers ever see your data? Sorry, the payers meaning the insurers, right?
Chai [00:16:44]:
Yes.
Swyx [00:16:44]:
They also see Abridge data?
Chai [00:16:47]:
No
Swyx [00:16:47]:
Like the direct integration to you guys
Chai [00:16:48]:
They wouldn’t see the raw Abridge data but when you’re working together on something like prior authorization, whatever information they need, we’d communicate to them.
Jacob [00:16:59]:
That’s cool. I would love to dig into the AI side. You still have a lot of problems on the AI side. And so maybe to start at the highest level, what’s one of the hardest problems you have to solve in AI at Abridge today?
The Hardest AI Problems: Quality, Latency, and Cost
Chai [00:17:11]:
To make things simple, let’s take, building off the prior auth example. So one thing Janie talked about is okay, this data is all over the place and there’s this combinatorial explosion of procedures, payer policies and even sometimes different health systems. There can be some cross-product of all of these different considerations you have to take into account. But what’s really hard about this problem is doing it real-time in the conversation. So, in any AI product, usually the three KPIs you care about are quality, latency and cost. Now, what we’re saying is we want you to do this real-time in the conversation, guiding the clinician. How do we do it in a way that does not break the bank? But we’re using — But we also need very intelligent models because you’re working with this cross-product of data and this, all this context layer as well. So you need high intelligence and high-quality because you don’t want the alert fatigue but you also need to be fast and cost-effective. And so that’s where a lot of clever engineering goes. It’s okay, without getting into all the details here, can you model these policies in some intermediate representation or other things that you can do that can make this problem tractable? And of course, the Pareto frontier is always changing but we are also trying to do this now.
Model Strategy: Third-Party Models, Proprietary Data, and Medical Conversations
Jacob [00:18:26]:
What implications has that had for what you take off-the-shelf and say, “ what? We don’t need to be world-class at X. We’ll just take this from the model providers or from some infrastructure player,” and what you’re “No, this is where we spend most of our time focused on”?
Chai [00:18:38]:
This is, the fun challenge in AI?
Jacob [00:18:42]:
It changes every three months? So
Chai [00:18:42]:
Of course, with the shifting landscape, we try to be extremely thoughtful on predicting the trends of where third-party models are going and where we can uniquely go. And, sometimes when you talk about AI models, we’re the models are just going to get infinitely better. But I don’t think... It may be in the grandness of time you could say that but, within every month, every quarter, there’s specific ways they’re getting better. They’re training on a lot more, coding data to be better coding agents, for example. And so
Chai [00:19:14]:
We have to think about where are the things that won’t — unique data that we’re uniquely training on or to step back a little, where is a proprietary model bringing advantage to us is if it can give higher quality or lower cost and latency for similar quality, very similar to many other companies. And when we can do that is when we have proprietary data. So, for example, we have on the order of eighty million or hundreds of millions now getting close to of medical conversations.
Jacob [00:19:44]:
It’s insane.
Chai [00:19:45]:
This is a unique data set. And this data set, it’s very interesting because this data set is effectively a large part of the trace between the patient and the provider. That’s where the quote-unquote debugging happens in healthcare. We have these traces at scale, as in as, our CEOs even called it, an exhaust that comes out of our product. And so when you have these traces, that’s how you can train better agents on certain use cases, whether it’s your transcription diarization use cases or so on or like note generation models and we can do that much cheaper and faster. But we’re always also working with these third-party model providers. We closely collaborate with them and that’s how we predict where the trends are going. The thing that I think about a lot is that, I know that the model providers are going to train much more on agentic workflows and so forth, so that’s great, so that you have a better agentic harness. But the other thing that’s interesting is that the model providers, because a large class of the consumer model providers is healthcare queries, that they might, optimize to train a lot of healthcare data to encode the knowledge in its weights. And this is just a great thing for us as well, where the off-the-shelf models can keep bett-getting better at general healthcare information, such that what our strategy is, we have a constellation of models, we can use something for this, that and, we only care about, at the end of the day, the best product experience.
EHR as File System: Agentic Workflows and Real-Time Interfaces
Jacob [00:21:07]:
And, you have, overall capabilities improving. I’m curious, as these models get better, is there something you look at and you’re “, three months ago, we really couldn’t do that but God, the the latest models really allow us to do it”?
Chai [00:21:19]:
So here’s something interesting that I’ve, been toying with. So all models are... This wasn’t super obvious a year ago but now it’s become clear and clear that almost every agent is a coding agent underneath the hood? So you give it whatever file system, it can write its own code and so forth. So when you think about within healthcare and the use case that we have, you can think of the EHR effectively like a file system. It’s just — it’s a storage of all this information. It’s a lot of information there that cannot fit into the context window, at least of today’s models and you want to use that context effectively for all these product use cases we’re talking about. And so if you have better agents that can, manipulate data, read that data, treat it as a file system as we see they’re going and we know model companies are investing this way, then that very directly benefits us.
Swyx [00:22:09]:
Yeah. Okay, cool. Again, just establishing basic things. But we’re going back to the model stuff. I’m really interested in double-clicking more on the real-time, element, which is pretty important for both of you. Is it — Is real-time just batches of every one minute, every five minutes? Is that how we do it? Or is there some more native, genuinely real-time in the sense that OpenAI has a real-time API or Gemini has a real-time API?
Chai [00:22:35]:
Yeah. Yeah. So today it is more on the on the batch basis but there’s interesting
Chai [00:22:41]:
Prototypes that we have that we’re still not fully, full time, voice in text out or in that sense. But, can you trigger your models, your agents or agentic workflows, depending on the right times in the conversation?
Chai [00:22:58]:
And so you can imagine, different techniques to bring this latency down and, you want to bring the feedback loop down as much as you can. And so a lot of clever engineering there without fully... Maybe one day we’ll do full voice in and text out, train a model to do something like that.
Swyx [00:23:15]:
You do — People don’t want voice in voice out?
Chai [00:23:18]:
Now we aren’t creating experiences that are, during the conversation, inter — It’s almost like
Swyx [00:23:25]:
Might be too disruptive
Chai [00:23:26]:
Too disruptive until, who knows, maybe eventually you could have full voice agents once we — the quality and we improve the comfort of the technology. But right now gra — that change is much more gradual and it’s more text focus, text out.
Janie [00:23:42]:
And so much of currently what our product is trying to do is allow a clinician to focus on their patient and maybe at some point but right now patients, clinicians don’t want a third voice, at least in a literal voice in that room. And so how do we be there with all the contacts and information ready at hand when there’s the right moment?
Personalization: Individual Doctors, Specialties, and Health Systems
Jacob [00:24:03]:
Jenny, one thing I’m curious about is how you think about, personalization in the product. I imagine, every doctor is a special snowflake in their own way, has their own way they like to do things. There are probably a bunch of different approaches you could take to doing that, both within the model layer itself but then also just with clever prompting or engineering. How do you
Jacob [00:24:20]:
Deliver on that?
Janie [00:24:21]:
It’s such a good question. Personalization is massive for us. We think about personalization at three levels. The first is at the individual, the second is at the specialty level and then the third is at the health system or the organization level. To your point, there are a lot of individual preferences. You-When a note is produced, it almost is a reflection that is so deeply personal of a doctor’s work and how they give care. And so do they have preferences on things like style? They might want bullets versus paragraphs, really concise versus comprehensive. They also might have phrases that they really like to use or the templates that they want every note to be structured. And, we see it in our feedback all the time. We want two spaces in between sentences or I refuse to use this tool. And so that’s something that we’ve had to build in. And the tricky part is how do you make sure that stylistic preferences don’t interrupt accuracy and quality and that’s something that we’ve really had to refine and hone over time. Second is at the specialty level. A cardiologist note or workflow is going to look very different from a dermatologist workflow.
Jacob [00:25:32]:
I assume cardiology notes are the highest stakes for you guys, given your CEO is a cardiologist.
Jacob [00:25:36]:
It’s “Oh my God, make sure we get this one.”
Janie [00:25:37]:
Shiv, our CEO, is still a practicing cardiologist. He rounds once a month. And so, first call when we want just quick and easy user feedback too.
Janie [00:25:46]:
But, specialties require a lot of personalization, both in terms of what does the product look and so we make sure that as new users onboard, we catch that and the product proportionally reflects that. But also on the back end, evals at the specialty level, they are hard-earned to calibrate and get. What does a really great dermatology note look like? What makes it complete? What makes it compliant and billable is very different than a primary care doctor. And so it’s not just about what does the product experience look but on the back end tuning and really deepening our understanding for the specialists. What does great output look like? And that’s, a problem that we need to calibrate internally, externally, online, offline but, takes lots of cycles but is necessary in a high-stakes environment. And then at the health system level, for products like clinical decision support, you have health systems who’ve spent years or decades refining their best practices and they want to know, “Hey, we love your clinical decision support product but how do we embed our own hospital guidelines into them to inform clinicians before, during or after a visit what brest — best practices should look like?” And as you think about, deepening moats as well, when health systems, trust us with that data, allow us to productize it and directly into the clinical workflow, makes us a really great partner to health systems who want to build something that truly meets their needs, their practicing guidelines.
AI Slop, Memory, and Product Data Flywheels
Chai [00:27:23]:
And I want to add onto that. The for the clinical documentation problem, it’s very similar to AI writing that doesn’t feel like your own and then we call that slop. But the way I describe one framing of slop is like AI without context. But we have all that context and both the clinicians, can have it and can guide it. And so part of the other interesting exhaust for us is, memory is, one of these new systems records
Chai [00:27:49]:
Almost.
Janie [00:27:50]:
And we also have all the edits people make on our product and when you think about a data flywheel and how we get better over time becomes really powerful as a mechanism to just going deeper in personalization.
Jacob [00:28:04]:
It’s interesting. I love this idea of working with systems on the guidelines they built up over a long time. I feel like so many of the best AI app companies today are... The question is: How do you take the expertise that a law firm or a bank has built up over many years and then add that as context and also a special sauce over, a an AI tool? And so seems like y’all are really doing that very effectively.
Janie [00:28:24]:
We’re now starting to have our customers ask, “What are other customers doing?”
Janie [00:28:28]:
“And how are they doing it?”
Janie [00:28:30]:
And as we think about having visibility across such a large set of care being delivered right now, a really interesting place we could also partner.
Swyx [00:28:40]:
I’m just curious. I — This may be a nothing question but, how different are health system guidelines from each other? Don’t they all converge to the same thing? And if not, where do they differ?
Chai [00:28:52]:
At a really high level, they’re going to talk about very similar things but the difference is probably in some more of the details. “Oh, you should refer to specialists only when XYZ conditions are met,” or so forth and maybe different organizations have different practices and guidelines around that. But high level, talking about similar things but the details are what, of course, that shapes the context and the decisions you make.
Swyx [00:29:15]:
And this all goes into the context engine and it might affect the notes but maybe not.
Chai [00:29:21]:
The — For these local pathways, we’re definitely thinking about it a little more for our clinical decision support product.
Chai [00:29:26]:
So yeah.
Swyx [00:29:27]:
Which is your stuff, yeah.
Swyx [00:29:28]:
And then the memory which you raised, let’s just tell us more about that. What have you tried in memory? What’s the structure of the memory? What works? What doesn’t work?
Chai [00:29:38]:
There’s, of course, many different ways you could do memory, where it’s okay, can you bake it into the model weights or can you do it in some external store? For us, what’s interesting is, of course, when you think the models are rapidly changing, whether it’s in-house or third-party, baking into the model weights, sometimes you worry that it could be a little throwaway. And so, how do you... You need to find a way that you decompose the problem, the preferences from the underlying models and so forth. The thing we’re right now most both that’s easiest to start with and we’re excited about is having, a separate store for memory, where you have, for example, a memory sub-agent that’s, working in the background, figuring out what are the important parts of the clinician’s actions that we want to remember for the long term. And then you can also imagine, other things where in the — you have background jobs that are running that are collating these, memories similar to Sleep, of course and what other pattern, patterns products do as well. Learning over all these action, all the action data we have, again, note edits, the conversations they did and the actual transcripts.
Evals: LFD, LLM Judges, and Clinical Safety
Jacob [00:30:40]:
What about evals? How in the world do you... It is such a complex product surface area. We would love to hear you riff on that and also how has that evolved? I’m sure you’ve gotten better at it, so any learnings along the way.
Janie [00:30:50]:
From an evals perspective, we, from day one when we build any new product or feature, we think about, what does good look like? And there are table stakes things like clinical safety but then you start to get deeper into what does good quality look like. And when you go into something like our core product, there’s stuff like style and completeness and there’s things like does this note become something that can be billable, which is very high stakes for a health system. We have a number of ways in which we get confidence for this. We have, internal in-house clinicians who do what we call an LFD process to give us our very first pass at is this or isn’t this a good enough output, look at the effing data.
Jacob [00:31:41]:
LFD?
Chai [00:31:42]:
That’s why I was smiling. I was “Is Janie going to mention what it stands for?”
Jacob [00:31:46]:
I was not... There’s like a million acronyms.
Jacob [00:31:48]:
How am I supposed to know that I don’t? So “Oh yeah, of course, an LFD.”
Swyx [00:31:51]:
I’ve never heard of LFDs.
Chai [00:31:53]:
It’s a bridge for sure.
Janie [00:31:55]:
I got through three days and then I had to ask someone.
Janie [00:31:58]:
I thought it was just me that didn’t know
Janie [00:32:01]:
It’s our internal process.
Swyx [00:32:02]:
But look at the data as a meme in ML, ‘cause you tend to not look at it. You just want to look at number go up.
Chai [00:32:06]:
Exactly.
Swyx [00:32:07]:
But yes.
Janie [00:32:08]:
But so, we make sure we look at the data and then as we think about all of the components of good output, we, one, create LLM judges across all of these and we make sure with annotated data and either internal or external evaluators, we feel like these judges are calibrated. And then depending on the stakes, we also work with in-house and third-party evaluators across all of these before we ship any big change. And the goal is, in terms of evolution, how do you go from this process taking months, down to weeks, down to days? Some of it is, a true science and ML problem. A lot of it’s also just, hard operational work. Have you planned ahead in terms of what you need? Have you really optimized the capacity that you need across all of the different specialties you need? Have you gotten a really good sense of which third parties are great to work with for what use cases? This takes a lot of domain, expertise and, lots of mistakes and errors in figuring that out. And so as much of it is an ML problem, so much of it has also been operational gains that are hugely important, where domain-specific expertise is everything.
Specialty-Level Evaluation and Progressive Rollouts
Jacob [00:33:23]:
But it’s funny, ‘cause I feel like people talk about healthcare like it’s one giant market and the reality is
Jacob [00:33:26]:
It’s, dozens and dozens of sub-markets. And so it feels like in your evals you have to build that up across the board, probably.
Swyx [00:33:34]:
And is specialization the primary cardinality at... That’s the word that comes to mind.
Janie [00:33:40]:
Sometimes, depending on the product or the use case. And so if we’re making a note improvement or feature for a particular specialty, definitely but we have products that are for nurses. We have products that, are really aimed at making the document or the output a lot more billable. And so we’ll want to work with coding teams and not necessary clinicians. And so like
Jacob [00:34:05]:
Coding meaning healthcare coding.
Janie [00:34:06]:
Yes. Yes.
Jacob [00:34:07]:
Not
Chai [00:34:07]:
Yes. I see you.
Swyx [00:34:07]:
Other kinds.
Janie [00:34:09]:
But is this output proportional to the work that was delivered? Is there sufficient documentation to justify the amount that a health system may end up charging? And so, specialty sometimes but also domain, very different across all of the different products that we’re working for. And building out that network is, not easy and is where a lot of our operational investments have gone into.
Chai [00:34:35]:
And I view a lot of analogies to self-driving cars here, where, part of it is we really want progressive rollout of features to test in the real world is this useful? Is this going to work? One big difference compared to past lives is before I’d build a product, maybe I’d alpha it and then I’d like GA it the next week, ‘cause I’m “Go, move fast, ship,” and whatnot. But the mentality is like you... I want to make contact with the reality as quick as possible but I want a progressive rollout. Because as much as I get as large of an offline eval set, I want the distribution of that to match real-life distribution. And over time, by rolling out early, similar to Waymo has a tagline, “The world’s most experienced driver,” another thing that can, at least linearly increase for us is, both the size of our evaluation offline and online, that and it all feeds back.
Janie [00:35:25]:
Something that’s been earned over time, speaking of evolution, is just the trust we’ve gotten with customers. Historically, a lot of these health systems, when they bring on new vendors, their release cycles are quarters, sometimes twice a year. We’ve gotten our customers onto monthly release cycles, which is pretty fast for health systems but what is more exciting over the last, call it, few quarters, has been, a subset of our customers have said, “We want to innovate with you. We trust you,” and we have a pretty, decent chunk of our customers who say, “We’ll develop with you outside of these monthly release cycles. We have a higher tolerance. We know that the stakes are very high but we want to be the first ones using these products, giving you feedback.” And so for a pretty substantial set of our customers, we’ve been able to convince them to be able to ship, in this gradual way before GA. Something we talk about a lot internally is, trust is earned in drops, earned in buckets and so we still can’t do what I used to do when I worked at Loom. We had 30 million users. I’d just be, rolling out experiments left and. The bar is still quite high for iterative rollout but because of the trust we’ve earned, we’re able to learn at pretty high volume very quickly.
Privacy, HIPAA, and De-Identification
Swyx [00:36:45]:
Your scale is still pretty huge.
Swyx [00:36:47]:
One thing I want to... We were going to go into scale? In a sec. One thing I wanted to call up, follow up on evals, which, again, just coming from a generalist engineer point of view, just thinking through what would people be scared of in doing this, the privacy and HIPAA
Jacob [00:37:00]:
Elements of this. I have zero experience in that. What do you have to do? What is surprisingly not that bad?
Chai [00:37:06]:
So one thing that’s really important here from a compliance perspective is very much that any of the data we use needs to be de-identified, any real-world data we use as a basis of online eval sets we’re learning from. And so you have to — And there’s, very clear, government guidelines, what counts as PHI. And so we’ve even have built models that can take, for example, a clinical transcript and remove all the key PHI indicators and so you have a scrubbed/de-identified version. And then once you... And so one thing that’s important is first you’ve got to get confidence in that model in the first place? And prove that out. Because, now you have, multiple probabilistic systems on top of each other.
Chai [00:37:46]:
But once you have that, then you can train on it use it for evaluation and so forth, provided one of the cool things also that you can do from a business side is the right data contracting as well with your partners.
Jacob [00:37:57]:
Is the anonymization one way? Once it’s done, you cannot undo it? Or is there someone
Chai [00:38:01]:
Yes
Jacob [00:38:02]:
Who holds the master key that can... Yeah, okay. So it’s one way.
Chai [00:38:05]:
It’s one way. Yeah.
Jacob [00:38:06]:
That’s how it works. I just wanted to... Because, there’s a lot of this, learning from feedback and everything that, you would want to debug more but you can’t because you just physically don’t allow yourself to.
Janie [00:38:17]:
Some of it’s also written in our customer contracts in terms of who can or can’t access PHI data, how long do we retain it,
Jacob [00:38:27]:
Very good
Janie [00:38:27]:
Before it gets de-identified. And so we have a pretty high bar for who can access that PHI data, just to make sure that we always respect our customer data and privacy. But that’s something that we