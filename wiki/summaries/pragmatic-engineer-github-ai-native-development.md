# The Pulse: is GitHub still best for AI-native development?

**Source URL:** https://pragmaticengineer.com (The Pragmatic Engineer Newsletter)
**Date:** April 3, 2026
**Author:** Gergely Orosz

## Summary

GitHub's reliability has degraded to "one nine" (90% uptime) over the past month due to infrastructure strain from AI agents, while simultaneously lacking an "AI-native" vision for the platform. Startup Pierre Computer claims to handle 65x GitHub's repo creation rate (15,000 repos/min sustained vs GitHub's 230/min average), demonstrating that the infrastructure gap is real and addressable. GitHub's organizational challenges compound the technical issues: no CEO since Thomas Dohmke's voluntary departure, entanglement with Microsoft's internal AI politics stripping its independence, and pressure to focus on Copilot revenue at the expense of platform reliability. Mitchell Hashimoto argues GitHub should establish a "North Star" around being critical infrastructure for agentic code lifecycles, shut down Copilot to refocus on platform, buy Pierre to launch agentic repo hosting, and re-evaluate all products against the agentic vision.

## Key Claims

- **Reliability degradation**: GitHub's availability over the past month was "one nine" (90%) — issues on 3 days per 30, or degradations for ~2.5 hours daily (10% of the time) — down from typical "four nines" (99.99%, 52 minutes downtime/year)
- **Claude Code growth**: Load from Claude Code bot contributions has 6x'd in the past 3 months
- **Three major incidents**: 2 Feb (security policies blocked VM metadata access), 9 Feb (database cluster overload from higher-than-expected usage), 5 March (writes failed on Redis cluster after failover)
- **Saturation as root cause**: Database cluster incident was saturation from underestimated agent traffic; databases are harder to scale than stateless services
- **Pierre Computer capacity**: Sustained peak >15,000 repos/min for 3 hours; 9M+ repos created in last 30 days; claims this is something "GitHub clearly cannot get close to, at least not today"
- **GitHub's organizational issues**: No CEO (Thomas Dohmke stepped down voluntarily, Microsoft never backfilled), reorg made GitHub part of Microsoft AI group stripping independence, caught in Microsoft internal politics (GitHub/Copilot brand usage across Microsoft products, Azure/Microsoft AI trying to control GitHub)
- **Copilot competitive position**: Went from most-used AI agent in 2021 to being overtaken by Claude Code, soon to be overtaken by Cursor
- **No AI-native platform vision**: GitHub has an MCP server but no "AI-native git platform" that handles massive agent load; keeps shipping small features (stacked diffs in Oct 2025) without direction
- **Mitchell Hashimoto's recommendation**: (1) Establish North Star around agentic code lifecycles, (2) Fire everyone working on Copilot and shut it down, (3) Buy Pierre and launch agentic repo hosting separate from legacy web product, (4) Re-evaluate all products against North Star (suspects 50% get cut)
- **Missing CEO impact**: GitHub has no leader and no focus, safest bet for teams is revenue via Copilot investment, ignoring long-term reliability issues

## Tags

#github #reliability #infrastructure #ai-agents #claude-code #pierre-computer #copilot #microsoft #platform-strategy #organizational-dysfunction

## Related

### Summaries
- [[ainews-claude-code-source-leak]] — Claude Code architecture driving GitHub load
- [[cursor-3-agent-management-console]] — Cursor overtaking Copilot
- [[ainews-autoresearch-sparks-of-recursive]] — Autoresearch loops as infrastructure demand driver
- [[ainews-every-lab-serious-enough-about]] — Developer toolchain land grab by labs

### Concepts
- [[developer-tooling-competitive-landscape]] — GitHub's position vs labs owning toolchains
- [[ai-agent-ecosystem]] — Agent infrastructure requirements
- [[harness-engineering]] — Infrastructure sophistication needed for agents
