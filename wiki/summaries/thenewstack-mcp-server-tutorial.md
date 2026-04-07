---
last_validated: 2026-04-07
decay_rate: fast
---

# MCP servers turn Claude into a reasoning engine for your data

**Source:** https://thenewstack.io/build-mcp-server-tutorial/
**Date:** April 6, 2026
**Author:** Jessica Wachtel

## Summary

Jessica Wachtel's hands-on tutorial walks developers through building a TypeScript-based MCP (Model Context Protocol) server from scratch, using a calculator app as a pedagogical example. The article explicitly positions MCP as solving the data access problem: "Claude knows virtually everything that's ever been publicly available on the internet by default. But it knows absolutely nothing about you or your data." The tutorial demonstrates the complete development workflow — from `npm init` through TypeScript configuration, Zod schema definition, tool handler implementation, and Claude Desktop integration via `claude_desktop_config.json`. Wachtel emphasizes that the calculator example deliberately avoids business logic complexity to "focus on what's really important here: rules and best practices for building an MCP server."

## Key Claims

- MCP (Model Context Protocol) by Anthropic connects external data/APIs/tools directly to Claude, turning it into a "reasoning engine for your data"
- TypeScript and Python SDKs are "the most commonly used MCP SDKs" with `@modelcontextprotocol/sdk` as the TypeScript implementation
- The tutorial uses a calculator app specifically to "pull the focus away from connecting to an external API or complicated business logic" and concentrate on MCP fundamentals
- The `server.tool()` method's "name, description, Zod schema, and handler function are the heart of MCP"
- MCP requires explicit user consent for all tool operations via Claude Desktop's "always allow, allow once, or deny" approval flow
- Complete development workflow: `mkdir calculator-mcp-server`, `npm init -y`, install `@modelcontextprotocol/sdk`, TypeScript + Zod, define tool schemas with Zod validation, implement handlers, configure `claude_desktop_config.json`, restart Claude Desktop
- MCP servers connect via stdio transport (`StdioServerTransport`) and communicate through standard input/output
- Production considerations include error handling, authentication, logging to stderr (for STDIO servers), and Zod-based input validation
- Claude Desktop must be quit and relaunched after config changes since it "only reads the config on startup"
- The author encountered a VS Code quirk where `tsconfig.json` throws "no inputs were found" error, requiring file deletion and recreation with identical content
- "Anthropic made it pretty easy for companies to build MCP servers. The ecosystem has grown quickly in response."
- After building an MCP server, "the fundamentals like defining tools with clear schemas, writing handlers that return structured responses, and connecting your server to Claude via a config file remain the same" for more complex applications

## Tags

#mcp #model-context-protocol #anthropic #claude #developer-tutorial #typescript #ai-agent-infrastructure #tool-integration #harness-engineering #tutorial

## Related

- [[langchain-anatomy-of-agent-harness]] — MCP as tool/resource harness primitive
- [[ainews-claude-code-source-leak]] — Claude Code's ~60 tools via MCP
- [[ainews-everything-is-cli]] — CLI/MCP as agent-to-service interface patterns
- [[harness-engineering]] — MCP as standardized tool registry primitive
- [[ai-agent-ecosystem]] — MCP as coordination primitive
