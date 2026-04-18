---

on:
  schedule: "0 6 * * *"  # 6 AM UTC daily

permissions:
  contents: read
  issues: read

engine: claude

safe-outputs:
  create-issue:
    title-prefix: "[wiki-health] "
    labels: [maintenance, automated]
    close-older-issues: true

---

## Nightly Wiki Integrity & Staleness Check

You are a wiki maintenance agent for a knowledge base repository.

### Step 1: Read the rules

Read these files to understand the wiki structure:
- WIKI_RULES.md
- wiki/index.md

### Step 2: Wikilink integrity

Scan every .md file in wiki/ (including subdirectories).

Check:
1. Every [[wikilink]] points to a file that actually exists in the repo
2. Every file in wiki/summaries/ is linked from at least one file in wiki/concepts/
3. Every file in wiki/concepts/ is referenced in wiki/connections.md
4. wiki/index.md lists every summary and concept file

Collect all failures into a list.

### Step 3: Staleness check

For each file in wiki/summaries/ and wiki/concepts/, check the
YAML frontmatter for `last_validated` and `decay_rate` fields.

Flag as OVERDUE if:
- decay_rate is "fast" and last_validated is more than 60 days ago
- decay_rate is "slow" and last_validated is more than 180 days ago
- last_validated field is missing entirely

### Step 4: Verification queue check

Read wiki/verification-queue.md. Count how many claims have
Status = "Open".

### Step 5: Report

If there are ANY failures from steps 2-4, create a GitHub issue
with the title "[wiki-health] Integrity report - {today's date}"
containing:

- **Broken links**: list of broken wikilinks with file and line
- **Orphaned files**: summaries or concepts not linked from anywhere
- **Missing index entries**: files not listed in index.md
- **Overdue reviews**: files past their staleness window with dates
- **Open verifications**: count of unresolved [UNVERIFIED] claims

If everything passes, do NOT create an issue.
