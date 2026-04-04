# Knowledge Base Prompts

Operational prompts for maintaining this wiki with GitHub Copilot (or any LLM agent).

---

## Ingestion Prompt (use after adding articles to raw/articles/)

```
Read these files first, in this order:
1. WIKI_RULES.md (structure rules)
2. DELEGATION_SPEC.md (quality standards and success criteria)
3. QUALITY_EXAMPLES.md (calibration examples)
4. SESSION_LOG.md (history of prior sessions and corrections)

Then check the current state of the wiki:
- Read wiki/index.md
- Scan wiki/summaries/ and wiki/concepts/
- Read wiki/connections.md

Now look at all files in raw/articles/ and raw/papers/. Identify every
source that does NOT yet have a corresponding summary in wiki/summaries/.

--- STAGE 1: SOURCE RETRIEVAL (stop and report) ---

For every new source, research it and report back BEFORE creating any files.
For each article, tell me:
- Title and source
- Whether you accessed the full article, a partial excerpt, or a secondary summary
- A one-sentence preview of the main claim

Wait for my go-ahead before proceeding to Stage 2.

--- STAGE 2: SUMMARIES ---

For each approved source:
1. Create a summary in wiki/summaries/ per WIKI_RULES.md
2. Mark any claims based on partial/secondary sources with [UNVERIFIED]
3. Tag with relevant concepts

After creating all summaries, briefly list what you created. I may spot-check
before you proceed.

--- STAGE 3: CONCEPTS AND CONNECTIONS ---

1. Check existing concept files in wiki/concepts/
2. Update any that relate to the new summaries
3. Create new concept files if a theme appears in 2+ sources without one
4. Update wiki/connections.md with new patterns, contradictions, and gaps
   - Every connection must pass the "So what?" test from DELEGATION_SPEC.md
   - Reference specific summaries with concrete evidence
   - Read QUALITY_EXAMPLES.md and match the quality bar of the valuable examples

--- STAGE 4: INDEX AND INTEGRITY ---

1. Update wiki/index.md with all new entries
2. Verify all [[wikilinks]] point to files that exist
3. Run through the Success Criteria in DELEGATION_SPEC.md and flag any that fail

--- STAGE 5: SESSION LOG ---

Append an entry to SESSION_LOG.md with:
- Date
- Articles processed (with retrieval quality for each)
- Summaries created
- Concepts created or updated
- Connections added
- Any issues or limitations encountered

If there are more than 10 new sources, process the first 10 and ask
if I want to continue with the rest.
```

---

## Q&A Prompt (use to ask questions against the wiki)

```
Read these files first:
1. WIKI_RULES.md
2. DELEGATION_SPEC.md (for partnership context)
3. wiki/index.md

Answer this question by reading whatever wiki files you need:

[PASTE YOUR QUESTION HERE]

Write your answer as a new markdown file in outputs/ with a descriptive
filename. Include [[wikilinks]] to the wiki articles you drew from.
At the end, note any gaps where the wiki didn't have enough info to
fully answer.
```

---

## Health Check Prompt (run periodically to improve wiki quality)

```
Read WIKI_RULES.md, DELEGATION_SPEC.md, and SESSION_LOG.md.
Then read wiki/index.md and wiki/connections.md.
Scan through all files in wiki/concepts/ and wiki/summaries/.

Give me a report covering:

1. Broken or orphaned [[wikilinks]]
2. Concepts referenced in summaries that don't have their own file
3. Summaries that aren't linked from any concept article
4. Contradictions between sources that haven't been flagged
5. Topics mentioned frequently but lacking a dedicated concept article
6. Concept files referencing more than 6 summaries (candidates for splitting)
7. Connections that fail the "So what?" test from DELEGATION_SPEC.md
8. 5 suggested questions worth investigating to deepen the wiki
   (frame these through the Microsoft/GitHub partnership lens)

Don't fix anything — just report. I'll tell you what to act on.
```

---

## File-Back Prompt (feed a good output back into the wiki)

```
Read the file at outputs/[FILENAME].
Read DELEGATION_SPEC.md for quality standards.

Integrate its key findings into the wiki:
- Update relevant concept files with new information
- Create new concept files if warranted
- Update wiki/connections.md with new patterns
- Update wiki/index.md
- Append a note to SESSION_LOG.md about what was filed back

Tell me what you changed.
```

---

## Tips

- Start with 5-10 articles, not 500
- Save web articles as .md files (copy-paste or use a web clipper) for best results
- For URL-only ingestion, the agent will use web search (quality varies — review Stage 1 reports carefully)
- Commit after each ingestion session so you have version history
- Run the health check every few weeks
- Good outputs go back into the wiki — that's the flywheel
- After each session, update QUALITY_EXAMPLES.md with your best and worst outputs
- Review SESSION_LOG.md periodically to see if the same issues keep recurring
