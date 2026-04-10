---
last_validated: 2026-04-09
decay_rate: fast
---

# Why Capable AI Is a Liability When Intent Is Off

**Source URL**: https://natesnewsletter.substack.com/p/my-honest-field-notes-on-why-ai-agents
**Date**: January 2, 2026
**Publication**: Nate's Newsletter

## Summary

Argues that the shift from chat-based AI to tool-using agents fundamentally changes the cost of misinterpretation: chat mistakes are cheap corrections, but tool mistakes are irreversible commitments. The fix is not better prompting but making interpretation visible before action through intent documents, gating mechanisms, and audit trails. Categorizes agent failures into three patterns (ambiguity, wrong optimization target, social boundary violations) and proposes a risk-tiered gating framework for enterprise agent deployments.

## Key Claims

- Intent misalignment is an objective problem distinct from hallucination; capable systems pursuing wrong objectives cause more damage than incapable systems pursuing right ones.
- Positional effects in long contexts ("Lost in the Middle," Liu et al. 2023) mean longer prompts can dilute critical instructions rather than strengthen them.
- Three failure modes cover most agent mistakes: ambiguity (AI picks one interpretation silently), wrong optimization target (proxy metric improves while real outcome worsens), and social boundary violations (context humans infer implicitly but AI cannot).
- The proposed gating framework: low-risk actions (drafts) run free; actions touching other people get a checkpoint; irreversible actions require confirmation and logging.
- METR benchmark data shows super-exponential AI capability growth with doubling times compressing from 7 to 4 months.

## Tags

#agent-safety #intent-alignment #gating #audit-trails #prompt-engineering #enterprise-risk

## Related

- [[ai-agent-ecosystem]] — Framework for when agents should pause vs. proceed, directly applicable to agent deployment governance
- [[agent-security-identity-and-permissions]] — Gating and audit trail requirements map to permission models for agentic systems
- [[ai-scaling-limits-and-research-paradigm]] — METR benchmark data on super-exponential capability growth raises stakes for intent misalignment
- [[ai-coding-agents-and-developer-role-shift]] — Code agent "simplify" example illustrates how developer role shifts from writing to supervising intent
