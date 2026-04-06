# Wiki Maintenance Rules

## Structure
- wiki/index.md — Master index listing every article with a one-line
  description and link. Always keep current.
- wiki/summaries/ — One file per source in raw/. Named in kebab-case.
  Contains: title, source URL, date, 3-5 sentence summary, key claims, tags.
- wiki/concepts/ — One file per major theme across multiple sources.
  Contains: definition, key points, links to summaries via [[wikilinks]],
  open questions, related concepts.
- wiki/connections.md — Cross-cutting patterns, contradictions, research gaps.

## Rules
1. Use [[wikilinks]] to link between all articles.
2. Always update index.md when adding new sources.
3. Update existing concept files when new sources relate to them.
4. Create a new concept file when a theme appears in 2+ sources.
5. Flag contradictions between sources explicitly.
6. Summaries are factual. Concept articles are analytical.
7. Never delete — mark outdated info with [OUTDATED: reason].
8. When resolving an [UNVERIFIED] tag, update both the source
   file and verification-queue.md. Change Status to Verified or
   Unverifiable with date.
9. Summaries with decay_rate: fast should be reviewed every 60 days.
   Summaries with decay_rate: slow should be reviewed every 180 days.
   The Health Check prompt flags overdue summaries.
