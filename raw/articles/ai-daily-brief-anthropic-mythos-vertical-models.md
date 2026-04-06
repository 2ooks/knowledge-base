# Anthropic Accidentally Revealed Their Most Powerful Model Ever

**Source**: AI Daily Brief
**Date**: March 27, 2026
**URL**: [Issue URL appears malformed in source]

## Full Article Text

### HEADLINES

#### Anthropic Confirms Claude Mythos After Data Leak

A data leak has revealed that Anthropic is testing a powerful new model called Claude Mythos. A draft blog post was found in an unsecured, publicly searchable database — part of a trove of nearly 3,000 unpublished assets. Anthropic confirmed the model is real, calling it a "step change" in performance and "the most capable we've built to date." Mythos represents a new tier above Opus — larger, more intelligent, and dramatically better at coding, academic reasoning, and cybersecurity. However, Anthropic says the model is expensive to serve and they're taking a slower, more cautious release approach, starting with early access customers focused on cybersecurity applications. For those wondering about the name "Capybara" floating around, it appears to be an alternate codename for the same model.

**Sources**:
- Fortune: Anthropic acknowledges testing new AI model representing 'step change' in capabilities
- M1Astra (X): Archived Mythos blog post
- Jason Botterill (X): "Anthropic's scary new model is Mythos, OpenAI named theirs after a potato"

#### Gemini 3.1 Flash Live

Google has dropped a small voice model that could have big implications. Gemini 3.1 Flash Live brings real-time dialogue to voice models — most voice models until now have been turn-based, causing awkward stumbles and terrible interruption handling. Flash Live is designed to work like a human conversation with continuous back and forth. Home Depot already has the model deployed, citing major improvements in handling complex details like product codes and noisy environments. The obvious implication is for personal voice agents on mobile — and with Apple using Gemini to power the new Siri, the long winter of Siri not understanding a word we say may finally be ending.

**Source**: Google Blog - Gemini 3.1 Flash Live: Making audio AI more natural and reliable

#### Shopify Launches Tinker

One of my weirder predictions for 2026 was that Shopify would play an outsized role in the positive normalization of AI — and Tinker is exactly what that looks like. It's a free mobile app with over a hundred AI tools for e-commerce, letting merchants generate logos, product photos, advertising videos and more in a playful, experimental canvas. The entire concept is about flattening the learning curve: apps are arranged by outcome, prompts are handled on the back end, and Shopify's director of product Rousseau Kazi put it perfectly — "If you want more artists, lower the cost of paint."

**Sources**:
- Shopify: Introducing Tinker: Play with AI, bring your ideas to life
- Rousseau Kazi (X): Tinker launch post

#### OpenAI: Codex Plugins, Erotica Shelved, and IPO Pressure

Codex got a big upgrade with the integration of plugins, and OpenAI used the occasion to twist the knife on Anthropic's recent Claude Code rate limit changes — resetting Codex usage limits across all plans and telling developers to "build unlimited things." Meanwhile, OpenAI has shelved adult mode indefinitely, consolidating resources around coding and enterprise. The advisory council was unanimously against it, the age detection system had a 12% failure rate, and staff were departing over the issue. This is part of a broader pattern of OpenAI killing side quests — Sora, instant checkout, now erotica — and that's a good thing, not flailing. Nothing kills a business faster than sunk cost fallacy.

On the competition front, Anthropic is reportedly eyeing a Q4 IPO, possibly as soon as October, which puts OpenAI on the clock since Altman has said he'd prefer to go first.

**Sources**:
- Tibo (X): Codex usage limits reset and plugins launch
- FT: OpenAI puts erotic chatbot plans on hold 'indefinitely'
- TechCrunch: OpenAI abandons yet another side quest: ChatGPT's erotic mode
- WSJ: OpenAI's Bid to Allow X-Rated Talk Is Freaking Out Its Own Advisers
- The Information: Anthropic Discusses Going Public as Soon as the Fourth Quarter
- Bloomberg: Claude AI Maker Anthropic Said to Weigh IPO as Soon as October

### MAIN STORY: The Era of Vertical AI Models

A persistent question in AI has been how much custom models would matter. Early evidence pointed aggressively toward the Bitter Lesson — Rich Sutton's famous 2019 essay arguing that brute-force compute always beats carefully encoded human knowledge. Bloomberg GPT, the poster child for domain-specific training, got smoked by general models. But coming into 2026, a new type of data started to change the equation: last-mile usage data, the millions of real interactions that companies like Cursor and Intercom sit on. This week brought two major proof points suggesting the era of vertical AI models may have arrived.

**Source**: Rich Sutton - The Bitter Lesson

#### POST TRAINING FOR SUCCESS

##### Cursor's Composer 2

"Just" Kimi K2.5 — except it beats Opus 4.6.

Cursor released Composer 2 earlier this month, matching GPT-5.4 and beating Opus 4.6 on coding benchmarks at much lower cost. Controversy erupted when an X user revealed the model was built on Kimi K2.5 with reinforcement learning applied. Cursor didn't deny it — dev relations rep Lee Robinson confirmed it started from an open-source base, with three-quarters of compute coming from their own training. The takeaway: reinforcement learning on quality interaction data can vault an adequate base model into the top tier.

**Sources**:
- Business Insider: Cursor acknowledges its new low-cost coding model has Chinese bones
- Flynn (X): Composer 2 is Kimi K2.5
- Lee Robinson (X): Cursor confirms open-source base
- Leet LLM (X): Open-weight fine-tune beating Opus 4.6 is wild

##### Intercom's Fin Apex

The highest-performing, fastest, and cheapest customer service model.

Intercom CEO Eoghan McCabe announced Fin Apex, a dedicated customer service model that beats GPT-5.4 and Opus 4.5 on resolution rates — with 65% fewer hallucinations and dramatically lower cost. CPO Paul Adams framed the implications sharply: vertical models can and will outperform general models, durable differentiation will move down the stack to the model layer, and successful companies will need to be full-stack across app, AI, and model layers.

**Sources**:
- VentureBeat: Intercom's new post-trained Fin Apex 1.0 beats GPT-5.4 and Claude Sonnet 4.6
- Paul Adams (X): Fin Apex announcement
- Darragh Curran (X): Our new Fin Apex model outperforms all leading LLMs
- Theo Blochet (X): What value do frontier labs deliver long-term?

##### Decagon

Over 80% of model traffic now runs on in-house models.

Decagon co-founder Ashwin Sreenivas revealed they've built a network of specialized models handling different parts of the customer service interaction — detection, orchestration, response generation, and evaluation. Rather than relying on a single general model, they optimize each layer independently for speed and quality.

**Sources**:
- Ashwin Sreenivas (X): Decagon's in-house model approach
- Decagon (X): Decagon announcement

#### The Bigger Picture

Post-training from experience — the next phase of the Bitter Lesson.

Clém Delangue from Hugging Face noted this is part of a broader wave, with Pinterest, Airbnb, Notion, Cursor, and now Intercom all finding it better, cheaper, and faster to train open models in-house. Eoghan McCabe's companion post referenced Andrej Karpathy's prediction of "speciation" in AI — smaller models with the cognitive core, optimized for specific tasks. Interestingly, Richard Sutton himself may have predicted this exact dynamic on the Dwarkesh podcast last year, suggesting that systems trained from experience could supersede those built on human knowledge. These new vertical models are post-trained from experience — exactly as Sutton described. This doesn't mean every company with customer data will spin up their own model, but these results are encouraging enough that many more will try.

**Sources**:
- Clem Delangue (X): The majority of AI workflows will be in-house based on open source
- Shikhar Gupta (X): Custom post-training pipelines will be the way forward
- Adriana Sobota (X): "API tax starting to look like the cloud markup of 10 years ago"
- Dwarkesh (X): Richard Sutton Interview: Bitter Lesson Revisited
