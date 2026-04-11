import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import { loadKnowledgeBase } from "./data/loader.js";
import type { KnowledgeBase } from "./data/types.js";
import type { SearchIndex } from "./data/search-index.js";
import type { GraphIndex } from "./data/graph-index.js";

import { registerSearchTool } from "./tools/search.js";
import { registerArticleTool } from "./tools/article.js";
import { registerGraphQueryTool } from "./tools/graph-query.js";
import { registerGraphPathTool } from "./tools/graph-path.js";
import { registerCommunitiesTool } from "./tools/communities.js";
import { registerConnectionsTool } from "./tools/connections.js";
import { registerVerificationTool } from "./tools/verification.js";
import { registerHyperedgesTool } from "./tools/hyperedges.js";

// ── Configuration ──

const DATA_DIR = process.env.DATA_DIR || path.resolve(__dirname, "..", "..");
const PORT = parseInt(process.env.PORT || "3100");

// ── Load Data ──

let kb: KnowledgeBase;
let searchIndex: SearchIndex;
let graphIndex: GraphIndex;

function reload() {
  const result = loadKnowledgeBase(DATA_DIR);
  kb = result.kb;
  searchIndex = result.searchIndex;
  graphIndex = result.graphIndex;
}

reload();

// ── MCP Server ──

function createMcpServer(): McpServer {
  const server = new McpServer({
    name: "knowledge-base-mcp-server",
    version: "1.0.0",
  });

  // Register all 8 tools
  registerSearchTool(server, searchIndex);
  registerArticleTool(server, kb);
  registerGraphQueryTool(server, graphIndex);
  registerGraphPathTool(server, graphIndex);
  registerCommunitiesTool(server, kb);
  registerConnectionsTool(server, kb);
  registerVerificationTool(server, kb);
  registerHyperedgesTool(server, kb);

  return server;
}

const mcpServer = createMcpServer();

// ── Express App ──

const app = express();
app.use(express.json());

// CORS for ChatGPT and other remote clients
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Mcp-Session-Id, Last-Event-ID, MCP-Protocol-Version");
  res.header("Access-Control-Expose-Headers", "Mcp-Session-Id");
  if (_req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }
  next();
});

// MCP endpoint — stateless Streamable HTTP
app.post("/mcp", async (req, res) => {
  try {
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined, // stateless
      enableJsonResponse: true,
    });
    res.on("close", () => transport.close());
    await mcpServer.connect(transport);
    await transport.handleRequest(req, res, req.body);
  } catch (err) {
    console.error("MCP request error:", err);
    if (!res.headersSent) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

// Health check
app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    data: {
      summaries: kb.summaries.size,
      concepts: kb.concepts.size,
      outputs: kb.outputs.size,
      graphNodes: kb.graph.nodes.size,
      graphCommunities: kb.graph.communities.size,
      hyperedges: kb.graph.hyperedges.length,
      connectionSections: kb.connectionSections.length,
      verificationClaims: kb.verificationClaims.length,
      rawArticles: kb.rawArticleIndex.size,
    },
  });
});

// Reload data
app.post("/reload", (_req, res) => {
  try {
    reload();
    res.json({ status: "ok", message: "Knowledge base reloaded" });
  } catch (err) {
    console.error("Reload error:", err);
    res.status(500).json({ error: "Reload failed" });
  }
});

// ── Start ──

app.listen(PORT, () => {
  console.error(`Knowledge Base MCP Server running on http://localhost:${PORT}/mcp`);
  console.error(`Health check: http://localhost:${PORT}/health`);
});
