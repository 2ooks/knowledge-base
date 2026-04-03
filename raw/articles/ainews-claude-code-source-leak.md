# [AINews] The Claude Code Source Leak
**Source:** https://www.latent.space/p/ainews-the-claude-code-source-leak
**Date:** March 31, 2026
**Author:** Latent.Space (swyx)

## Summary
The biggest news of the day is the Claude Code source leak — 500k+ lines of code exposed via shipped source maps / package contents. Not particularly damaging for Anthropic, but educational — "Christmas come early for Coding Agent nerds."

OpenAI's largest fundraise in human history also closed today (growing by a few billion), disclosing $24B ARR (growing 4x faster than Google/Meta in their heyday). ChatGPT WAU growth seems to have stalled — they still have not crossed the 1B WAU mark targeted for end 2025.

## Key Technical Insights from the Leak

### Top 6 Architectural Patterns (per Raschka)
1. **Repo state in context** — recent commits, git branch info
2. **Aggressive cache reuse**
3. **Custom Grep/Glob/LSP** — Claude Code has less than 20 tools default on (up to 60+ total): AgentTool, BashTool, FileReadTool, FileEditTool, FileWriteTool, NotebookEditTool, WebFetchTool, WebSearchTool, TodoWriteTool, TaskStopTool, TaskOutputTool, AskUserQuestionTool, SkillTool, EnterPlanModeTool, ExitPlanModeV2Tool, SendMessageTool, BriefTool, ListMcpResourcesTool, ReadMcpResourceTool
4. **File read deduplication/tool result sampling**
5. **Structured Session Memory**
6. **Subagents**

### Memory System
3-layer design: 1) MEMORY.md as index to other knowledge, 2) topic files loaded on demand, 3) full session transcripts that can be searched. Also an "autoDream" mode for "sleep" — merging memories, deduping, pruning, removing contradictions.

Deeper analysis from mem0 finds 8 phases and 5 kinds of Compaction.

### Subagents Use Prompt Caching
They use the KV cache to create a fork-join model for their subagents, meaning they contain the full context and don't have to repeat work. Parallelism is basically free.

### 5-Level Permission System
Detailed permission system for tool access control.

### 2 Types of Plan Mode
Structured planning and execution modes.

### Other Unreleased Features
Employee-only gate, employee TUI, ULTRAPLAN, KAIROS, MAGIC DOCS.

### Security Incident
Public forks proliferated; one claimed 32.6k stars and 44.3k forks. Anthropic moved to contain redistribution via DMCA takedowns. Attackers quickly registered suspicious npm packages (color-diff-napi, modifiers-napi) to target people trying to compile the leaked code.
