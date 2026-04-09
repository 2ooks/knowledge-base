# Graph Report - ./raw  (2026-04-08)

## Corpus Check
- Corpus is ~21,096 words - fits in a single context window. You may not need a graph.

## Summary
- 155 nodes · 160 edges · 18 communities detected
- Extraction: 81% EXTRACTED · 19% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.78)
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `Harness Definition` - 8 edges
2. `Harness Engineering (OpenAI)` - 8 edges
3. `Claude Mythos` - 7 edges
4. `Cursor 3 (Agent Management Console)` - 7 edges
5. `Dwarkesh Podcast: Dylan Patel on AI Compute Bottlenecks` - 7 edges
6. `Vertical AI Models (Post-Trained from Experience)` - 6 edges
7. `Claude Code Source Leak` - 6 edges
8. `GPU Shortage (2026)` - 6 edges
9. `Hermes Agent (Nous Research)` - 6 edges
10. `Project Glasswing` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Alchian-Allen Effect Applied to AI` --semantically_similar_to--> `Vertical AI Models (Post-Trained from Experience)`  [INFERRED] [semantically similar]
  raw/articles/dwarkesh-dylan-patel-interview.md → raw/articles/ai-daily-brief-anthropic-mythos-vertical-models.md
- `CLI vs MCP Trend for Agent Infrastructure` --semantically_similar_to--> `Claude Code (Terminal-First Agent)`  [INFERRED] [semantically similar]
  raw/articles/ainews-everything-is-cli.md → raw/articles/cursor-3-agent-management-console.md
- `Harness Engineering (Agent Middleware Category)` --semantically_similar_to--> `Anthropic Harness Design for Long-Running Apps`  [INFERRED] [semantically similar]
  raw/articles/ainews-everything-is-cli.md → raw/articles/anthropic-harness-design-long-running-apps.md
- `Agentic DevOps Practices` --semantically_similar_to--> `Harness Engineering (Agent Middleware Category)`  [INFERRED] [semantically similar]
  raw/articles/devblogs-aspire-agentic-dev-aspirations.md → raw/articles/ainews-everything-is-cli.md
- `Continual Learning (Dwarkesh)` --semantically_similar_to--> `Three Layers of Agentic Systems (Model/Harness/Context)`  [INFERRED] [semantically similar]
  raw/articles/dwarkesh-thoughts-on-ai-progress-dec-2025.md → raw/articles/langchain-continual-learning-for-ai-agents.md

## Hyperedges (group relationships)
- **Agent Orchestration Surface War (Cursor vs Claude Code vs Codex vs Antigravity)** — cursor_3, claude_code_terminal_first, openai_codex, google_antigravity, agent_orchestration_surface [EXTRACTED 1.00]
- **Vertical AI Model Proof Points (Composer 2, Fin Apex, Decagon)** — cursor_composer_2, intercom_fin_apex, decagon_models, vertical_ai_models, bitter_lesson [EXTRACTED 1.00]
- **Anthropic Mythos + Glasswing Restricted Frontier Ecosystem** — anthropic_mythos, project_glasswing, dual_use_restriction, mythos_vuln_discovery, glasswing_consortium [EXTRACTED 1.00]
- **Harness Engineering Paradigm (LangChain + OpenAI)** — langchain-anatomy-of-agent-harness_harness_definition, openai-harness-engineering_harness_engineering, langchain-continual-learning-for-ai-agents_harness_layer_learning, langchain-anatomy-of-agent-harness_deepagents, openai-harness-engineering_codex [INFERRED 0.85]
- **Continual Learning Convergence (Dwarkesh + LangChain + Hermes)** — dwarkesh-thoughts-on-ai-progress-dec-2025_continual_learning, langchain-continual-learning-for-ai-agents_three_layers, turingpost-hermes-agent-openclaw-rival_self_improvement_loop, langchain-continual-learning-for-ai-agents_dreaming [INFERRED 0.78]
- **GPU Infrastructure Demand Cycle** — great-gpu-shortage-rental-capacity_gpu_shortage, fourth-industrial-revolution_data_center_components, nvidia-inference-kingdom-expands_gtc_2026, great-gpu-shortage-rental-capacity_multi_agent_workloads [INFERRED 0.75]

## Communities

### Community 0 - "Agent Harness Architecture"
Cohesion: 0.09
Nodes (25): Agent = Model + Harness, Compaction, Context Rot, Filesystem as Core Harness Primitive, Harness Definition, MCP (Model Context Protocol), Memory via AGENTS.md, Progressive Disclosure (Skills) (+17 more)

### Community 1 - "Continual Learning & Memory"
Cohesion: 0.12
Nodes (20): Continual Learning (Dwarkesh), Deep Agents (LangChain), Catastrophic Forgetting, Continual Learning at Context Layer, Dreaming (OpenClaw Offline Learning), Continual Learning at Harness Layer, Meta-Harness: End-to-End Optimization, Continual Learning at Model Layer (+12 more)

### Community 2 - "Claude Code Internals"
Cohesion: 0.14
Nodes (15): Anthropic Harness Design for Long-Running Apps, Assess-Plan-Execute Migration Workflow, Claude Code 6 Architectural Patterns, Claude Code 3-Layer Memory System, Claude Code 5-Level Permission System, Claude Code Source Leak, Claude Code Subagent Architecture, Claude Code Unreleased Features (ULTRAPLAN, KAIROS, MAGIC DOCS) (+7 more)

### Community 3 - "AI Infrastructure & Compute Revolution"
Cohesion: 0.14
Nodes (14): AlexNet (2012), Attention Is All You Need (2017), 11 Essential Data Center Components, Fourth Industrial Revolution (Intelligence Revolution), Nvidia (Data Center Component), Power and Real Estate Bottleneck, Attention FFN Disaggregation (AFD), CMX Context Memory (KV Cache Offload) (+6 more)

### Community 4 - "Anthropic Business & Geopolitics"
Cohesion: 0.15
Nodes (13): AINews: Anthropic $30B ARR, Mythos & Glasswing, Alchian-Allen Effect Applied to AI, Anthropic $30B ARR (April 2026), Anthropic Compute Needs (~$20B ARR, 5+ GW), Anthropic IPO (Potential Q4 2026), China AI Timeline (Fast=US wins, Slow=China wins), Dwarkesh Podcast: Dylan Patel on AI Compute Bottlenecks, H100 Value Appreciation Thesis (+5 more)

### Community 5 - "Vertical Models & Developer Tooling"
Cohesion: 0.18
Nodes (11): The Bitter Lesson (Rich Sutton), CLI vs MCP Trend for Agent Infrastructure, Cline Kanban (Multi-Agent CLI Orchestrator), Cursor Composer 2, Cursor Real-Time RL (Checkpoints Every 5 Hours), Decagon In-House Models, AINews: Everything is CLI, Harness Engineering (Agent Middleware Category) (+3 more)

### Community 6 - "Agent Orchestration Platforms"
Cohesion: 0.18
Nodes (11): Agent Orchestration as Primary Surface (Industry Trend), Agentic DevOps Practices, .NET Aspire 13.2, .NET Aspire as Agent Orchestration Platform, Cursor Cloud Handoff (Local-Cloud Session Portability), Cursor 3 (Agent Management Console), Cursor Glass (Agent Console Interface), Google Antigravity (Agent-First IDE) (+3 more)

### Community 7 - "Anthropic Frontier & Safety"
Cohesion: 0.24
Nodes (10): Anthropic, Claude Mythos, Claude Code (Terminal-First Agent), Dual-Use Restriction Model (No Public API), $100M Mythos Preview Credits + $4M OSS Donations, Glasswing Consortium Members (AWS, Apple, Microsoft, Google, etc.), Mythos Eval Awareness (7.6% of cases), Mythos Unauthorized Internet Access Incident (+2 more)

### Community 8 - "Sutskever: Post-Scaling Research"
Cohesion: 0.2
Nodes (10): Age of Research, Age of Scaling, Ilya Sutskever, Rationale: Scaling Is Over, Safe Superintelligence Inc. (SSI), Unknown ML Principle for Generalization, Beren Millidge, Cognitive Core (Karpathy) (+2 more)

### Community 9 - "Vibe Coding & GPU Economics"
Cohesion: 0.2
Nodes (10): Claude Code (Forbes), Non-Technical Founder Superpowers, Vibe Coding, Anthropic ARR ($9B to $25B), Claude Code 20%+ Daily Commits Projection, CoreWeave, GPU Shortage (2026), H100 Rental Pricing Index (+2 more)

### Community 10 - "RL Limitations & Generalization"
Cohesion: 0.5
Nodes (4): Jagged Generalization, RL Limitations (Sutskever), RLVR Scaling Critique, Toby Ord RL Compute Analysis

### Community 11 - "AI Economic Diffusion"
Cohesion: 0.67
Nodes (3): Economic Diffusion Lag Is Cope, Rationale: Goal Post Shifting Is Justified, Steven Byrnes (AGI Diffusion)

### Community 12 - "Gemma 4 Multimodal"
Cohesion: 1.0
Nodes (2): Google Gemma 4, Gemma 4 Architecture (Hybrid Attention, MoE)

### Community 13 - "Model-Harness Co-Evolution"
Cohesion: 1.0
Nodes (2): Model-Harness Co-Evolution, Terminal Bench 2.0

### Community 14 - "LangSmith Observability"
Cohesion: 1.0
Nodes (2): LangSmith, Traces as Core Primitive

### Community 15 - "Kimi K2.5"
Cohesion: 1.0
Nodes (1): Kimi K2.5 (Moonshot AI)

### Community 16 - "Article Index"
Cohesion: 1.0
Nodes (1): Article Links Index

### Community 17 - "Dwarkesh Patel"
Cohesion: 1.0
Nodes (1): Dwarkesh Patel

## Knowledge Gaps
- **73 isolated node(s):** `The Bitter Lesson (Rich Sutton)`, `Kimi K2.5 (Moonshot AI)`, `Intercom Fin Apex`, `Decagon In-House Models`, `Karpathy AI Speciation Prediction` (+68 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Gemma 4 Multimodal`** (2 nodes): `Google Gemma 4`, `Gemma 4 Architecture (Hybrid Attention, MoE)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Model-Harness Co-Evolution`** (2 nodes): `Model-Harness Co-Evolution`, `Terminal Bench 2.0`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `LangSmith Observability`** (2 nodes): `LangSmith`, `Traces as Core Primitive`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Kimi K2.5`** (1 nodes): `Kimi K2.5 (Moonshot AI)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Article Index`** (1 nodes): `Article Links Index`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Dwarkesh Patel`** (1 nodes): `Dwarkesh Patel`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Harness Definition` connect `Agent Harness Architecture` to `Continual Learning & Memory`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **Why does `Agent = Model + Harness` connect `Agent Harness Architecture` to `Continual Learning & Memory`, `Vibe Coding & GPU Economics`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Why does `Three Layers of Agentic Systems (Model/Harness/Context)` connect `Continual Learning & Memory` to `Agent Harness Architecture`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **What connects `The Bitter Lesson (Rich Sutton)`, `Kimi K2.5 (Moonshot AI)`, `Intercom Fin Apex` to the rest of the system?**
  _73 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Agent Harness Architecture` be split into smaller, more focused modules?**
  _Cohesion score 0.09 - nodes in this community are weakly interconnected._
- **Should `Continual Learning & Memory` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._
- **Should `Claude Code Internals` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._