import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { SearchIndex } from "../data/search-index.js";

export function registerSearchTool(server: McpServer, searchIndex: SearchIndex): void {
  server.registerTool(
    "kb_search",
    {
      title: "Search Knowledge Base",
      description: `Full-text search across all wiki summaries, concepts, and strategic outputs.

Use this tool to find articles about a topic. Returns titles, types, snippets, and tags.

Args:
  - query: Search terms (min 2 chars)
  - limit: Max results (default 10, max 50)
  - offset: Skip results for pagination (default 0)

Returns: Ranked results with title, type (summary/concept/output), snippet, tags, and relevance score.`,
      inputSchema: {
        query: z.string().min(2).describe("Search terms"),
        limit: z.number().int().min(1).max(50).default(10).describe("Max results to return"),
        offset: z.number().int().min(0).default(0).describe("Results to skip for pagination"),
      },
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async ({ query, limit, offset }) => {
      const { results, total } = searchIndex.search(query, limit, offset);
      const hasMore = offset + limit < total;

      if (results.length === 0) {
        return {
          content: [{ type: "text", text: `No results found for "${query}".` }],
        };
      }

      const lines = results.map((r, i) => {
        const tags = r.tags.length > 0 ? ` [${r.tags.slice(0, 5).join(", ")}]` : "";
        return `${offset + i + 1}. **${r.title}** (${r.type}, slug: \`${r.slug}\`)${tags}\n   ${r.snippet}`;
      });

      const header = `Found ${total} results for "${query}"${hasMore ? ` (showing ${offset + 1}-${offset + results.length})` : ""}:\n`;
      const footer = hasMore ? `\n\n_More results available. Use offset=${offset + limit} to see next page._` : "";

      return {
        content: [{ type: "text", text: header + lines.join("\n\n") + footer }],
      };
    }
  );
}
