# Knowledge Base — Inbox + Bridge Workflow

Two ways to add articles to the KB:

## 1. Inbox (ad-hoc, Matt-curated)

You see an article you want in the KB → share to iOS Shortcut → URL appended to `inbox/articles.txt` → next time you run the inbox processor, it fetches + writes to `raw/articles/`.

### iOS Shortcut setup (one-time, ~5 min)

Same pattern as the take_engine inbox, just pointed at this repo's inbox file.

**If you use Option A from take_engine (OneDrive shadow file):**
- Use a separate OneDrive shadow file for KB: `OneDrive/Documents/Clawpilot/kb-inbox.txt`
- Then have `.claude/scripts/process_inbox.py` read from both `inbox/articles.txt` AND the OneDrive shadow file
- Cleaner: per-repo inbox

**If you want a unified inbox that fans out:**
- Use the same OneDrive file for both repos
- Each repo's inbox script reads from it, but skips URLs already processed by the other
- Less explicit but only one Shortcut needed

**Recommend: separate Shortcuts per repo** ("Add to Take Engine", "Add to KB") for now. Single button per intent.

### iOS Shortcut definition (mirror of take_engine one)

1. iOS Shortcuts → `+` → New Shortcut
2. Name: `Add to KB`
3. Add action: **Get URLs from Input** (Web)
4. Add action: **Append to File** (Files / OneDrive)
   - File: `OneDrive/Documents/Clawpilot/kb-inbox.txt` (Option A)
   - Text: `Shortcut Input`
   - Mode: **Append at End**, Add newline before: ON
5. Add action: **Show Notification** (optional) — Title: `Added to KB`, Body: `Will appear after next inbox run`
6. Settings → Show in Share Sheet → restrict to URLs

### Running the inbox processor

```powershell
cd C:\Users\matttookey\Projects\knowledge-base
python .claude/scripts/process_inbox.py
```

Output:
- Each URL → fetched → written to `raw/articles/<slug>.md` (KB-formatted)
- Successful URLs leave inbox; errors stay for retry
- Audit log appended to `inbox/articles.processed.txt`

After running:
- Review the new files in `raw/articles/`
- Run `/graphify ./raw --update` in Claude Code
- Commit + push

## 2. Bridge from take_engine (bulk, periodic)

When the take_engine pipeline runs (scheduled or manual) and you want to bulk-import its fresh content into the KB. This is the same pattern that originally seeded the KB (April 11: "Ingest 141 scored articles from Takes Tracker").

```powershell
cd C:\Users\matttookey\Projects\knowledge-base
python .claude/scripts/bridge_take_engine.py --since 2026-04-22 --scored-only
```

Flags:
- `--since YYYY-MM-DD` — only bridge articles created on/after this date (default: 2026-04-22, last KB commit date)
- `--scored-only` — only bridge articles where take_engine generated takes (curation gate)
- `--limit N` — cap at N articles
- `--dry-run` — show what would be created without writing

Auto-skips:
- Articles already in `raw/articles/` (by filename)
- Articles flagged truncated by take_engine
- Articles with body < 500 chars

After running:
- Review `raw/articles/` for new files
- Run `/graphify ./raw --update` in Claude Code  
- Commit + push

## Files

| Path | Purpose |
|---|---|
| `inbox/articles.txt` | The Matt-curated URL queue |
| `inbox/articles.processed.txt` | Audit log (auto-appended) |
| `.claude/scripts/process_inbox.py` | Inbox processor |
| `.claude/scripts/bridge_take_engine.py` | One-shot bulk-import from take_engine DB |
| `raw/articles/*.md` | Where ingested articles land (KB-formatted) |

## Hard rules

- **No auto-graphify.** Both scripts only write files. The `/graphify` rebuild is a separate manual step. This is deliberate — graphify uses Claude tokens and you want to be in the seat when it runs.
- **No deletes.** Bridge skips existing files; inbox dedupes on filename. Cleanup is manual.
- **No external publishing.** Same KB hard rule applies — content lands here, doesn't get pushed externally without explicit decision.
