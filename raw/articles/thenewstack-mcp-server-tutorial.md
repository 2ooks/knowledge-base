# MCP servers turn Claude into a reasoning engine for your data

**Source:** https://thenewstack.io/build-mcp-server-tutorial/
**Author:** Jessica Wachtel
**Date:** April 6, 2026
**Retrieval:** Secondary summary only (domain blocked)

---

## Content Summary (from web search secondary sources)

This article is a step-by-step tutorial on building an MCP (Model Context Protocol) server using TypeScript. The tutorial uses a simple calculator app as an example to demonstrate how developers can connect Claude to external data and tools.

### Key Topics Covered

1. **MCP Overview**
   - MCP (Model Context Protocol) by Anthropic bridges external data/services/tools into AI assistants like Claude
   - Turns Claude into a reasoning engine for private/organizational data
   - Addresses limitation where Claude has public internet knowledge but not access to personal/enterprise data

2. **Tutorial Structure**
   - Environment: Node.js, NPM, TypeScript, VS Code
   - SDK: `@modelcontextprotocol/sdk`
   - Validation: Zod for input schema validation
   - Example: Calculator app to focus on learning MCP patterns without business logic complexity

3. **Development Steps**
   - Project initialization: `mkdir mcp-calculator && cd mcp-calculator && npm init -y`
   - Install MCP SDK: `npm install @modelcontextprotocol/sdk`
   - TypeScript setup: `npm install -D typescript @types/node tsx`
   - Validation: `npm install zod`
   - Define tools (calculator operations) with schemas
   - Implement tool handlers
   - Connect to Claude Desktop

4. **MCP Server Primitives**
   - **Tools:** Functions callable by the AI (e.g., calculator operations)
   - **Resources:** File-like data for context (not in calculator example)
   - **Prompts:** Templates for complex tasks or structured workflows

5. **Security Model**
   - All operations require explicit user approval
   - Maintains user privacy and control
   - Highly auditable actions

6. **Production Considerations**
   - Error handling, input validation, authentication, logging
   - For STDIO servers: log to stderr only
   - Schema validation via Zod and TypeScript strong typing
   - Modular development: start simple, scale to advanced logic

### Strategic Context

- MCP as Anthropic's standard for LLM-to-external-data connections
- Multi-language SDK support (TypeScript, Python, others)
- Developer-focused tutorial emphasizing best practices
- Positions Claude as extensible via user-controlled data bridges

---

**Note:** This content is reconstructed from secondary web search summaries. All specific claims, code examples, and technical details should be marked [UNVERIFIED] until primary source text is available.
