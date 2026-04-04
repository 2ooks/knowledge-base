# Knowledge Base Setup Guide

One-time setup to enable the mobile "drop zone" workflow.

## How It Works

```
Phone browser → Share → "Add to KB" shortcut → GitHub Issue created
→ Assign Copilot → Copilot reads spec files → Processes articles
→ Opens PR with new wiki content → You review on your schedule
```

## Step 1: Create the iOS Shortcut (5 minutes)

This creates a Share Sheet action so you can send any URL to your knowledge base with one tap.

### Instructions

1. Open the **Shortcuts** app on your iPhone
2. Tap **+** to create a new shortcut
3. Tap the name at the top and rename it to **"Add to KB"**
4. Add these actions in order:

   **Action 1: Receive input**
   - Search for "Receive" and select **"Receive what's shared"**
   - Set it to accept: **URLs, Text**

   **Action 2: Set Variable**
   - Search for "Set Variable"
   - Variable name: `SourceURL`
   - Value: Shortcut Input

   **Action 3: Get Contents of URL (GitHub API call)**
   - Search for "Get Contents of URL"
   - URL: `https://api.github.com/repos/2ooks/knowledge-base/issues`
   - Method: **POST**
   - Headers:
     - `Authorization`: `Bearer YOUR_GITHUB_PAT` (see Step 2 below)
     - `Accept`: `application/vnd.github+json`
     - `Content-Type`: `application/json`
   - Request Body (JSON):
     ```json
     {
       "title": "New Source",
       "body": "## Source URLs\n\n- [SourceURL]\n\n## Notes\n\n_Sent from mobile_\n\n---\n\n## Instructions for Copilot\n\nRead these files in order:\n1. DELEGATION_SPEC.md\n2. WIKI_RULES.md\n3. QUALITY_EXAMPLES.md\n4. SESSION_LOG.md\n\nThen read the current wiki state. Process the source URLs above using the Ingestion Prompt stages from PROMPTS.md. Create a PR with all new/updated wiki files. Link the PR back to this issue.",
       "labels": ["new-source"]
     }
     ```
   - In the body JSON, replace `[SourceURL]` with the `SourceURL` variable (tap and select the variable)

   **Action 4: Show Notification**
   - Search for "Show Notification"
   - Title: "Added to KB"
   - Body: "Source sent to knowledge-base repo"

5. Tap the **toggle icon** (bottom of shortcut editor) → Enable **"Show in Share Sheet"**
6. Set "Share Sheet Types" to **URLs** and **Text**
7. Save the shortcut

### Testing
1. Open any article in Safari
2. Tap the **Share** button
3. Scroll down and tap **"Add to KB"**
4. You should see the "Added to KB" notification
5. Check github.com/2ooks/knowledge-base/issues — your new issue should appear

## Step 2: Create a GitHub Personal Access Token

The shortcut needs a token to create issues in your repo.

1. Go to [github.com/settings/tokens?type=beta](https://github.com/settings/tokens?type=beta)
2. Click **"Generate new token"**
3. Name: `knowledge-base-mobile`
4. Repository access: **Only select repositories** → select `2ooks/knowledge-base`
5. Permissions:
   - Issues: **Read and Write**
   - Contents: **Read** (so Copilot can read the repo)
6. Generate and copy the token
7. Paste it into the iOS Shortcut where it says `YOUR_GITHUB_PAT`

⚠️ **Keep this token private.** Don't commit it to the repo.

## Step 3: Create the `new-source` Label

1. Go to [github.com/2ooks/knowledge-base/labels](https://github.com/2ooks/knowledge-base/labels)
2. Click "New label"
3. Name: `new-source`
4. Color: pick any (suggested: `#0E8A16` green)
5. Save

## Daily Workflow

1. 📱 **Read an article** on your phone
2. 📤 **Tap Share → "Add to KB"** — issue is created automatically
3. 🤖 **Assign Copilot** to the issue (from GitHub Mobile or desktop) — Copilot processes the article and opens a PR
4. ✅ **Review the PR** when you're ready — merge if good, comment if it needs changes
5. 📝 **Update QUALITY_EXAMPLES.md** with your best/worst outputs (2 min, keeps quality improving)

## Batch Processing

If you drop multiple sources throughout the day, you can either:
- Create one issue per source (Copilot handles each independently)
- Wait and paste multiple URLs into one issue at end of day

## Troubleshooting

- **Shortcut fails silently:** Check that your PAT hasn't expired and has Issues write permission
- **Issue created but no label:** Create the `new-source` label per Step 3, then manually add it
- **Copilot doesn't pick it up:** You need to manually assign Copilot to the issue — this is the trigger
