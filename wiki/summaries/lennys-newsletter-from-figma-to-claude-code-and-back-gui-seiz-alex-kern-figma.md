---
last_validated: 2026-04-09
decay_rate: fast
---

# From Figma to Claude Code and Back | Gui Seiz & Alex Kern (Figma)

**Source URL**: https://www.lennysnewsletter.com/p/from-figma-to-claude-code-and-back
**Date**: March 11, 2026
**Publication**: Lenny's Newsletter (How I AI)

## Summary

Figma designer Gui Seiz and engineer Alex Kern demo a bidirectional design-to-code workflow using Figma's MCP integration with Claude Code, replacing the traditional linear handoff waterfall with a real-time loop where production code is pulled into Figma, edited collaboratively, and pushed back to code. The workflow eliminates design drift, lets designers work with actual production states, and uses custom Claude Code skills for automated pre-flight checks and CI monitoring. For BD, this is a concrete proof point for MCP as a protocol-level integration standard: Figma building native MCP support validates the protocol's trajectory toward becoming infrastructure for cross-tool AI workflows, directly relevant to GitHub/Azure ecosystem strategy.

## Key Claims

- Figma's MCP enables pulling running production web apps directly into editable Figma designs
- Design changes can be pushed from Figma back to codebase via Claude Code without manual CSS adjustments
- Multiple code states (e.g., all five states of a signup flow) can be exported into Figma simultaneously
- AI has shifted design work upstream (planning) and downstream (craft), eliminating the rushed middle execution phase
- Custom Claude Code skills automate pre-flight checks, lint fixes, and CI monitoring before production pushes
- Structuring codebases for AI readability enables ~90% AI-written code
- The old linear design-to-engineering waterfall workflow is described as effectively dead

## Tags

#figma #mcp #claude-code #design-to-code #bidirectional-workflow #developer-experience #custom-skills

## Related

- [[ai-coding-agents-and-developer-role-shift]] — Engineers shift from writing code to directing AI and structuring codebases for AI consumption
- [[developer-tooling-competitive-landscape]] — Figma's MCP integration validates the protocol as cross-tool infrastructure; relevant to GitHub ecosystem
- [[ai-agent-ecosystem]] — Custom skills and MCP-based tool integration represent the emerging agent interoperability layer
- [[harness-engineering]] — Pre-flight checks, CI automation, and custom skill definitions as harness patterns for production agent workflows
