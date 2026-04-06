# Knowledge Base Agentic Workflows

These are Markdown workflow files for `.github/workflows/` in your
knowledge-base repo. Use `gh aw compile` to convert each into a
GitHub Actions workflow.

Requires the `gh aw` CLI extension:
```
gh extension install github/gh-aw
```

---

## Workflow 1: Nightly Integrity & Staleness Check

Save as: `.github/workflows/nightly-integrity.md`

```markdown
---

on:
  schedule: "0 6 * * *"  # 6 AM UTC daily

permissions:
  contents: read
  issues: read

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
```

---

## Workflow 2: New Source Detection

Save as: `.github/workflows/new-source-alert.md`

```markdown
---

on:
  push:
    paths:
      - "raw/articles/**"
      - "raw/papers/**"

permissions:
  contents: read
  issues: read

safe-outputs:
  create-issue:
    title-prefix: "[ingestion] "
    labels: [ingestion, ready-to-process]

---

## New Source Detection and Ingestion Alert

You are a wiki maintenance agent. When new files are added to the
raw/articles/ or raw/papers/ directories, you check whether they
have already been processed into wiki summaries.

### Step 1: Identify new sources

Read wiki/index.md to get the list of all existing summaries.
Then scan all files in raw/articles/ and raw/papers/.

For each raw file, check if a corresponding summary exists in
wiki/summaries/. A source is "unprocessed" if no matching summary
file exists.

### Step 2: Count and threshold

Count the total number of unprocessed sources.

### Step 3: Report

If there are 3 or more unprocessed sources, create a GitHub issue
with the title "[ingestion] {count} new sources ready for processing"
containing:

- List of each unprocessed file with its filename
- For each file, read the first 500 characters and include a
  one-sentence description of what the source appears to cover
- A reminder to run the Ingestion Prompt from PROMPTS.md

If there are fewer than 3 unprocessed sources, do NOT create an issue.
Just note the count in the workflow log.
```

---

## Workflow 3: Weekly Quality Digest

Save as: `.github/workflows/weekly-digest.md`

```markdown
---

on:
  schedule: "0 8 * * 1"  # 8 AM UTC every Monday

permissions:
  contents: read
  issues: read
  pull-requests: read

safe-outputs:
  create-issue:
    title-prefix: "[weekly-digest] "
    labels: [digest, review-needed]

---

## Weekly Knowledge Base Quality Digest

You are a knowledge base analyst. Every Monday, you produce a
quality digest that helps the maintainer prioritize wiki work
for the week.

### Step 1: Read context

Read these files:
- WIKI_RULES.md
- DELEGATION_SPEC.md
- wiki/index.md
- wiki/connections.md
- wiki/verification-queue.md (if it exists)

### Step 2: Concept coverage analysis

Read all files in wiki/concepts/ and wiki/summaries/.

Identify:
- THIN CONCEPTS: concept files referenced by only 1-2 summaries
- HEAVY CONCEPTS: concept files referenced by 7+ summaries
  (candidates for splitting)
- MISSING CONCEPTS: themes appearing in 3+ summaries that lack
  a concept file

### Step 3: Connections quality check

Read wiki/connections.md. For each entry under "Emerging Patterns",
assess whether it surfaces a non-obvious insight by combining 2+
sources, or whether it restates what individual sources already say.

Flag any pattern that reads as consensus restatement.

### Step 4: Staleness summary

Check last_validated and decay_rate fields across all summaries.
List any that are overdue for review.

### Step 5: Create digest issue

Create a GitHub issue with title
"[weekly-digest] Week of {date} — Knowledge Base Review"
containing:

**Wiki Stats**
- Total summaries, total concepts, total open verifications

**This Week's Priorities** (pick the top 3 most actionable items from
the analysis above, ranked by impact)

For each priority:
- What the issue is
- Which files are affected
- Suggested action (one sentence)

**Concept Health**
- List any thin, heavy, or missing concepts

**Stale Content**
- List any overdue summaries

Keep the total issue under 500 words. This is a triage tool,
not a report.
```

---

## Setup Instructions

1. Install the gh aw CLI extension:
   ```
   gh extension install github/gh-aw
   ```

2. Copy each workflow markdown file into `.github/workflows/` in
   your knowledge-base repo.

3. Compile each workflow:
   ```
   gh aw compile .github/workflows/nightly-integrity.md
   gh aw compile .github/workflows/new-source-alert.md
   gh aw compile .github/workflows/weekly-digest.md
   ```
   This generates corresponding `.lock.yml` files that are the
   actual Actions workflows.

4. Commit and push both the `.md` and `.lock.yml` files.

5. The workflows will begin running on their triggers:
   - **nightly-integrity**: every day at 6 AM UTC
   - **new-source-alert**: on every push to raw/articles/ or raw/papers/
   - **weekly-digest**: every Monday at 8 AM UTC

## Tuning

- Adjust the ingestion threshold in Workflow 2 (currently set to 3
  unprocessed sources). Lower it if you want faster alerts, raise
  it if you batch larger.
- Adjust cron schedules to match your timezone and work rhythm.
- The nightly check uses close-older-issues to auto-close stale
  health issues when a new one is created. The weekly digest does
  NOT auto-close, so you can reference past digests.
- All workflows are read-only by default and can only create issues
  (via safe-outputs). They cannot modify wiki files directly — that
  stays as a manual step triggered by you reviewing the issue and
  running the appropriate PROMPTS.md prompt in GHCP.
