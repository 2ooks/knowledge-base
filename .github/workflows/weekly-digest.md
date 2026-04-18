---

on:
  schedule: "0 8 * * 1"  # 8 AM UTC every Monday

permissions:
  contents: read
  issues: read
  pull-requests: read

engine: claude

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
