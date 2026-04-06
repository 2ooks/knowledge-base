---
last_validated: 2026-04-06
decay_rate: fast
---

# Anthropic Accidentally Revealed Their Most Powerful Model Ever

**Source URL**: [URL appears malformed in source]
**Date**: 2026-03-27
**Publication**: AI Daily Brief

## Summary

Anthropic accidentally leaked Claude Mythos, a new model tier above Opus representing a "step change" in capabilities particularly for coding, academic reasoning, and cybersecurity. The main story focuses on the emergence of vertical AI models: Cursor's Composer 2 (built on Kimi K2.5 with RL) beats Opus 4.6 at lower cost, Intercom's Fin Apex outperforms GPT-5.4 with 65% fewer hallucinations, and Decagon runs 80%+ of traffic on in-house models. These results suggest that post-training on domain-specific usage data (the "last-mile" interactions companies sit on) can vault adequate open-source base models to frontier performance, shifting competitive advantage down the stack to the model layer and challenging the assumption that general models always dominate.

## Key Claims

- Anthropic is testing Claude Mythos, a new tier above Opus, revealed via a data leak of ~3,000 unpublished assets including a draft blog post; Anthropic confirmed the model is real and calls it "the most capable we've built to date"
- Mythos is expensive to serve and will initially target early access customers focused on cybersecurity applications; "Capybara" appears to be an alternate codename
- Google launched Gemini 3.1 Flash Live for real-time voice dialogue (not turn-based); Home Depot already deployed it citing improvements in handling product codes and noisy environments
- Shopify launched Tinker, a free mobile app with 100+ AI tools for e-commerce (logos, product photos, videos) designed to "lower the cost of paint" for non-technical merchants
- OpenAI added plugins to Codex, reset usage limits across all plans, and positioned it as a response to Anthropic's Claude Code rate limit changes
- OpenAI shelved adult mode indefinitely due to unanimous advisory council opposition, 12% age detection failure rate, and staff departures; part of a pattern of killing side projects (Sora, instant checkout)
- Anthropic is eyeing a Q4 IPO possibly as soon as October, putting pressure on OpenAI which wants to go public first
- Cursor's Composer 2 matches GPT-5.4 and beats Opus 4.6 on coding benchmarks at lower cost; built on Kimi K2.5 with 75% of compute from Cursor's own RL post-training on usage data
- Intercom's Fin Apex (dedicated customer service model) beats GPT-5.4 and Opus 4.5 on resolution rates with 65% fewer hallucinations and dramatically lower cost
- Decagon runs 80%+ of model traffic on in-house models using a network of specialized models for different customer service interaction stages (detection, orchestration, response, evaluation)
- Multiple companies (Pinterest, Airbnb, Notion, Cursor, Intercom) are finding it better/cheaper/faster to post-train open models in-house rather than rely on API calls to frontier models
- The "vertical model" pattern is post-training on last-mile usage data (the millions of real interactions product companies sit on), not just domain-specific pre-training like Bloomberg GPT
- This may represent "the next phase of the Bitter Lesson" — systems trained from experience (usage data) superseding those built on human knowledge, as Richard Sutton predicted on Dwarkesh podcast

## Tags

#claude-mythos #vertical-models #post-training #cursor-composer-2 #intercom-fin-apex #decagon #kimi-k2.5 #reinforcement-learning #usage-data #anthropic-ipo #openai-codex #gemini-flash-live #shopify-tinker #model-customization #in-house-models #bitter-lesson

## Related

- [[ai-agent-ecosystem]] — vertical models for coding agents (Cursor)
- [[open-models-and-local-inference]] — Kimi K2.5 as base model for Cursor
- [[token-economics-and-pricing]] — "API tax looking like cloud markup" observation
- [[ai-scaling-limits-and-research-paradigm]] — relates to Bitter Lesson and whether general scaling dominates
