# Knowledge Base Prompts

Operational prompts for maintaining this wiki with GitHub Copilot (or any LLM agent).

---

## Ingestion Prompt (use after adding articles to raw/articles/)

```
Read WIKI_RULES.md first.

Look at all files in raw/articles/ and raw/papers/. Check which ones
already have a corresponding summary in wiki/summaries/. For every
source that does NOT yet have a summary:

1. Read the full source file
2. Create a summary in wiki/summaries/ with: title, source/URL, date,
   3-5 sentence summary, key claims, and tags
3. Check existing concept files in wiki/concepts/ — if this source
   relates to any, update them with a reference to the new summary
4. If a theme from this source appears in 2+ existing sources but
   doesn't have a concept file yet, create one
5. Update wiki/index.md with the new entry
6. Update wiki/connections.md if there are new patterns, contradictions,
   or gaps worth noting

Process sources one at a time. After each one, briefly tell me:
- What summary you created
- What concepts you created or updated
- Any new connections you noticed

If there are more than 10 new sources, process the first 10 and then
ask me if I want to continue with the rest.
```

---

## Q&A Prompt (use to ask questions against the wiki)

```
Read WIKI_RULES.md, then read wiki/index.md to see what's in the
knowledge base.

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
Read WIKI_RULES.md, then read wiki/index.md and wiki/connections.md.
Scan through all files in wiki/concepts/ and wiki/summaries/.

Give me a report covering:

1. Broken or orphaned [[wikilinks]]
2. Concepts referenced in summaries that don't have their own file
3. Summaries that aren't linked from any concept article
4. Contradictions between sources that haven't been flagged
5. Topics mentioned frequently but lacking a dedicated concept article
6. 5 suggested questions worth investigating to deepen the wiki

Don't fix anything — just report. I'll tell you what to act on.
```

---

## File-Back Prompt (feed a good output back into the wiki)

```
Read the file at outputs/[FILENAME].

Integrate its key findings into the wiki:
- Update relevant concept files with new information
- Create new concept files if warranted
- Update wiki/connections.md with new patterns
- Update wiki/index.md

Tell me what you changed.
```

---

## Tips

- Start with 5-10 articles, not 500
- Save web articles as .md files (copy-paste or use a web clipper)
- Commit after each ingestion session so you have version history
- Run the health check every few weeks
- Good outputs go back into the wiki — that's the flywheel
