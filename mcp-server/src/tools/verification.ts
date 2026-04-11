import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { KnowledgeBase } from "../data/types.js";

export function registerVerificationTool(server: McpServer, kb: KnowledgeBase): void {
  server.registerTool(
    "kb_verification_queue",
    {
      title: "Verification Queue",
      description: `View the queue of unverified claims from wiki articles.

Each claim includes what would verify it and its current status (Open, Verified, Partially Verified, Unverifiable).

Args:
  - status_filter: Filter by status — "open", "verified", "unverifiable", "partially_verified", or "all" (default "open")
  - limit: Max claims to return (default 30, max 100)

Returns: Claims with source file, verification method, and status. Also includes a count summary.`,
      inputSchema: {
        status_filter: z
          .enum(["open", "verified", "unverifiable", "partially_verified", "all"])
          .default("open")
          .describe("Filter claims by status"),
        limit: z.number().int().min(1).max(100).default(30).describe("Max claims to return"),
      },
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async ({ status_filter, limit }) => {
      const all = kb.verificationClaims;

      const statusCounts = {
        open: 0,
        verified: 0,
        unverifiable: 0,
        partially_verified: 0,
      };

      for (const c of all) {
        const s = c.status.toLowerCase();
        if (s.includes("open")) statusCounts.open++;
        else if (s.includes("partially")) statusCounts.partially_verified++;
        else if (s.includes("verified")) statusCounts.verified++;
        else if (s.includes("unverifiable")) statusCounts.unverifiable++;
      }

      const filtered =
        status_filter === "all"
          ? all
          : all.filter((c) => {
              const s = c.status.toLowerCase();
              switch (status_filter) {
                case "open": return s.includes("open");
                case "verified": return s.includes("verified") && !s.includes("partially") && !s.includes("un");
                case "unverifiable": return s.includes("unverifiable");
                case "partially_verified": return s.includes("partially");
                default: return true;
              }
            });

      const page = filtered.slice(0, limit);

      let text = `# Verification Queue\n`;
      text += `**Summary:** ${statusCounts.open} open, ${statusCounts.verified} verified, ${statusCounts.partially_verified} partially verified, ${statusCounts.unverifiable} unverifiable\n\n`;

      if (page.length === 0) {
        text += `No claims matching filter "${status_filter}".`;
      } else {
        text += `## Claims (${status_filter}, showing ${page.length} of ${filtered.length})\n\n`;
        for (const c of page) {
          text += `- **${c.claim}**\n  Source: ${c.sourceFile} | Verify: ${c.verificationMethod} | Status: ${c.status}\n\n`;
        }
      }

      return { content: [{ type: "text", text }] };
    }
  );
}
