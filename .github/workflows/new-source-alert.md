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
