import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { KnowledgeBase } from "../data/types.js";

export function registerHyperedgesTool(server: McpServer, kb: KnowledgeBase): void {
  server.registerTool(
    "kb_hyperedges",
    {
      title: "Browse Hyperedges",
      description: `Browse the thematic group relationships (hyperedges) in the knowledge graph.

Hyperedges link multiple nodes into named themes like "Agent Orchestration Surface War" or "Token Economics Paradigm". They represent curated high-level patterns with confidence scores.

Args:
  - query: Search hyperedge labels (optional — if omitted, returns all)
  - limit: Max results (default 15, max 30)

Returns: Hyperedges with label, participating nodes, relation type, and confidence.`,
      inputSchema: {
        query: z.string().optional().describe("Search hyperedge labels"),
        limit: z.number().int().min(1).max(30).default(15).describe("Max results"),
      },
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async ({ query, limit }) => {
      let hyperedges = kb.graph.hyperedges;

      if (query) {
        const lower = query.toLowerCase();
        hyperedges = hyperedges.filter(
          (h) =>
            h.label.toLowerCase().includes(lower) ||
            h.nodeLabels.some((nl) => nl.toLowerCase().includes(lower))
        );
      }

      const page = hyperedges.slice(0, limit);

      if (page.length === 0) {
        const msg = query ? `No hyperedges matching "${query}".` : "No hyperedges in the graph.";
        return { content: [{ type: "text", text: msg }] };
      }

      const total = hyperedges.length;
      let text = `# Hyperedges${query ? ` matching "${query}"` : ""} (${page.length} of ${total})\n\n`;

      for (const h of page) {
        text += `## ${h.label}\n`;
        text += `- **Relation:** ${h.relation}\n`;
        text += `- **Confidence:** ${h.confidence} (${h.confidenceScore.toFixed(2)})\n`;
        text += `- **Nodes:** ${h.nodeLabels.join(", ")}\n\n`;
      }

      return { content: [{ type: "text", text }] };
    }
  );
}
