---
last_validated: 2026-04-09
decay_rate: fast
---

# Building Reddit's iOS and Android app

**Source URL**: https://newsletter.pragmaticengineer.com/p/building-reddits-ios-and-android
**Date**: April 23, 2025
**Publication**: The Pragmatic Engineer

## Summary

Reddit rebuilt its iOS and Android apps from scratch starting in 2021 with ~200 native mobile engineers across 20 feature teams, migrating from MVP to MVVM architecture, REST to GraphQL, and introducing a new "Core Stack" while keeping users unaware of the transition. The episode surfaces a critical gap in AI coding tools: LLMs integrated into IDEs provide only moderate productivity gains for native mobile development, significantly lagging behind their effectiveness for backend and web work. This signals an underserved segment in the developer tooling competitive landscape where platform-specific AI optimization remains an open opportunity.

## Key Claims

- Reddit's iOS and Android apps are each ~2.5 million lines of code with 500+ screens
- ~200 native mobile engineers work on a single mobile codebase across 20 feature teams
- The Android app has ~800 modules and 580 screens
- Reddit migrated from MVP to MVVM architecture and from REST to GraphQL as part of the Core Stack overhaul
- GenAI coding tools provide only moderate boosts to native mobile engineers versus more significant gains in backend/fullstack/web
- iOS team is replacing their custom SliceKit framework with SwiftUI; Android bet on Jetpack Compose
- Poor developer experience was a primary driver for modernization, identified through internal engineering surveys
- Server-driven UI experiments had mixed results and haven't broadly taken off

## Tags

#developer-tooling #mobile-engineering #platform-architecture #ai-coding-gaps #large-scale-rewrites

## Related

- [[developer-tooling-competitive-landscape]] — AI coding tools underperform in native mobile, revealing a gap competitors could exploit
- [[ai-coding-agents-and-developer-role-shift]] — Native mobile remains a domain where AI augmentation lags, affecting role-shift dynamics
