# Delegation Spec — Wiki Ingestion

Read this file at the start of every ingestion session, alongside WIKI_RULES.md.

## My Context

I work on partnerships at Microsoft/GitHub. The purpose of this wiki is to surface insights that help me form partnership theses — specifically, where shifts in AI infrastructure, developer tooling, or compute economics create opportunities for Microsoft/GitHub to form or deepen strategic partnerships.

## What "Good" Looks Like

### For Summaries
- All required fields per WIKI_RULES.md (title, source URL, date, 3-5 sentence summary, key claims, tags)
- Key claims must be directly attributable to the source article, not inferred or fabricated
- If web search returned partial or secondary results for an article, mark uncertain claims with [UNVERIFIED]

### For Connections
Prioritize these types of connections:
- Supply chain or infrastructure shifts that create new partnership surfaces
- Pricing/economic model changes that affect developer tool adoption
- Capability gaps where Microsoft/GitHub could be the bridge
- Contradictions between sources that reveal market uncertainty (uncertainty = opportunity)

Do NOT write generic "AI is growing fast" observations. Every connection must answer: **"So what? What would Microsoft/GitHub do with this information?"**

### For Concepts
- A concept file should exist when a theme appears in 2+ sources
- If a concept file references more than 6 summaries, consider whether it should be split into more specific concepts
- Concept articles are analytical, not just lists of references

## Success Criteria (Check These Before Declaring Done)

1. Does every input URL have a corresponding summary file in wiki/summaries/?
2. Does each summary contain all required fields per WIKI_RULES.md?
3. Do key claims match the source material? Are there any fabricated claims?
4. Is every summary linked to at least one concept file via [[wikilinks]], and does each referenced concept file exist?
5. Does each pattern in connections.md reference at least two specific summaries with concrete evidence?
6. Do new connections say something not already obvious from reading any single summary alone?
7. Does wiki/index.md list every summary and every concept with no orphans?
8. Does at least one new connection or research gap suggest a concrete question worth investigating for Microsoft/GitHub partnership positioning?

## Failure Modes to Actively Avoid

### The Polished Void
Connections.md reads fluently but every insight is something obvious from the article titles alone. Before writing a connection, ask: "Would someone who only read the headlines already know this?" If yes, go deeper or don't include it.

### Fabricated Confidence
Stating specific claims (dollar figures, percentages, product names) not present in the source. When web search returns thin results, say so — flag with [UNVERIFIED] rather than filling gaps with plausible-sounding content.

### Questions Instead of Recommendations
Ending every insight with "Should GitHub…?" is not useful. A BD professional reading this needs a recommendation, not a research agenda. Pick a side. Name a partner. Propose a deal shape. Being wrong is more useful than three open questions per insight.

### Trend Report Disguised as Strategy
Observing that "vibe coding is expanding the TAM" or "vertical models are disrupting APIs" is a trend report. Saying "GitHub should approach Replit for an acquisition at $X range because their vibe-coding user base fills GitHub's non-developer gap" is strategy. Every output should be the latter.

### Recommending What Already Exists
Before recommending that Azure or GitHub build something, check whether it already exists in the Microsoft portfolio. "Azure should launch vertical model training as a service" when Azure ML/AI Foundry already offers fine-tuning, distillation, and RFT would get bounced in a review. Know the existing portfolio.

### Single-Source Evidence
Using one AINews summary as the sole evidence for a strategic recommendation. At least two independent sources should support any finding that drives a recommendation. If only one source supports it, flag it as "emerging signal" not "established pattern."

### Search Failures
For each article researched, report source quality: full article accessed, partial excerpt, or secondary summary only. Flag any articles where retrieval was limited.

## Quality Calibration
Before writing connections or briefings, read QUALITY_EXAMPLES.md for examples of what's valuable and what's not. Calibrate your output to match the valuable examples.
