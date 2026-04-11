import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { KnowledgeBase } from "../data/types.js";

export function registerConnectionsTool(server: McpServer, kb: KnowledgeBase): void {
  server.registerTool(
    "kb_connections",
    {
      title: "Search Strategic Connections",
      description: `Search the hand-curated strategic connections analysis — cross-cutting themes, emerging patterns, and strategic implications across the knowledge base.

This contains the analyst's own strategic thinking, not just article summaries. Sections cover themes like compute economics, harness engineering, agent security, etc.

Args:
  - query: Search within connections for a topic (optional)
  - section: Get a specific section by heading (optional)

If neither provided, returns a list of all section headings.

Returns: Matching sections with content and referenced articles.`,
      inputSchema: {
        query: z.string().optional().describe("Search connections content"),
        section: z.string().optional().describe("Specific section heading"),
      },
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async ({ query, section }) => {
      const sections = kb.connectionSections;

      if (section) {
        const lower = section.toLowerCase();
        const match = sections.find((s) => s.heading.toLowerCase().includes(lower));
        if (!match) {
          return { content: [{ type: "text", text: `Section not found: "${section}". Use without arguments to see all sections.` }] };
        }
        const truncated = match.content.length > 3000 ? match.content.slice(0, 3000) + "\n\n_...truncated. Full section is longer._" : match.content;
        let text = `# ${match.heading}\n\n${truncated}`;
        if (match.mentionedArticles.length > 0) {
          text += `\n\n**Referenced articles:** ${match.mentionedArticles.map((a) => `[[${a}]]`).join(", ")}`;
        }
        return { content: [{ type: "text", text }] };
      }

      if (query) {
        const lower = query.toLowerCase();
        const matches = sections.filter(
          (s) => s.heading.toLowerCase().includes(lower) || s.content.toLowerCase().includes(lower)
        );
        if (matches.length === 0) {
          return { content: [{ type: "text", text: `No connections sections matching "${query}".` }] };
        }
        let text = `# Connections matching "${query}" (${matches.length} sections)\n\n`;
        for (const m of matches.slice(0, 10)) {
          const snippet = m.content.slice(0, 300).trim();
          text += `## ${m.heading}\n${snippet}...\n`;
          if (m.mentionedArticles.length > 0) {
            text += `_References: ${m.mentionedArticles.slice(0, 5).map((a) => `[[${a}]]`).join(", ")}_\n`;
          }
          text += "\n";
        }
        return { content: [{ type: "text", text }] };
      }

      // List all sections
      let text = `# Strategic Connections (${sections.length} sections)\n\n`;
      for (const s of sections) {
        text += `- **${s.heading}** (${s.mentionedArticles.length} references)\n`;
      }
      return { content: [{ type: "text", text }] };
    }
  );
}
