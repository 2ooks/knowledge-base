---
last_validated: 2026-04-07
decay_rate: fast
---

# MCP servers turn Claude into a reasoning engine for your data

**Source:** https://thenewstack.io/build-mcp-server-tutorial/
**Date:** April 6, 2026
**Author:** Jessica Wachtel

## Source Retrieval Quality

**Secondary summary only** — thenewstack.io is blocked for direct fetch (ERR_BLOCKED_BY_CLIENT). Claims sourced from multiple web search results that reference and summarize the article. All specific technical details, code examples, and quotes marked [UNVERIFIED].

## Summary

Jessica Wachtel's tutorial walks developers through building a TypeScript-based MCP (Model Context Protocol) server that connects Claude to external data and tools. Using a simple calculator app as an example, the tutorial demonstrates how to use the `@modelcontextprotocol/sdk`, Zod validation, and the MCP primitives (tools, resources, prompts) to turn Claude into a "reasoning engine" for private or enterprise data. The tutorial covers project setup, TypeScript implementation, security model (user consent for all operations), and connection to Claude Desktop, positioning MCP as Anthropic's standard for bridging LLMs to external data sources.

## Key Claims

- MCP (Model Context Protocol) is Anthropic's standard for connecting LLMs like Claude to external data, APIs, and tools [UNVERIFIED]
- The tutorial uses TypeScript and the `@modelcontextprotocol/sdk` to build a calculator server as a learning example [UNVERIFIED]
- MCP servers expose three primitives: Tools (callable functions), Resources (file-like data), and Prompts (task templates) [UNVERIFIED]
- All MCP operations require explicit user approval, maintaining privacy and control [UNVERIFIED]
- Development workflow: npm init, install MCP SDK and Zod, define tool schemas, implement handlers, connect to Claude Desktop [UNVERIFIED]
- MCP SDKs are available in multiple languages including TypeScript and Python [UNVERIFIED]
- The calculator example demonstrates MCP patterns without complex business logic to focus on learning the protocol [UNVERIFIED]
- Production deployments require error handling, authentication, logging (to stderr for STDIO servers), and input validation [UNVERIFIED]
- MCP addresses the gap where Claude has public internet knowledge but cannot access personal/organizational data without custom bridges [UNVERIFIED]

## Tags

#mcp #model-context-protocol #anthropic #claude #developer-tutorial #typescript #ai-agent-infrastructure #tool-integration #harness-engineering #tutorial

## Related

- [[langchain-anatomy-of-agent-harness]] — MCP as tool/resource harness primitive
- [[ainews-claude-code-source-leak]] — Claude Code's ~60 tools via MCP
- [[ainews-everything-is-cli]] — CLI/MCP as agent-to-service interface patterns
- [[harness-engineering]] — MCP as standardized tool registry primitive
- [[ai-agent-ecosystem]] — MCP as coordination primitive
