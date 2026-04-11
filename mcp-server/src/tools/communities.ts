import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { KnowledgeBase } from "../data/types.js";

export function registerCommunitiesTool(server: McpServer, kb: KnowledgeBase): void {
  server.registerTool(
    "kb_communities",
    {
      title: "Browse Graph Communities",
      description: `List and browse the thematic communities discovered in the knowledge graph.

Each community is a cluster of related nodes. Provides community names (when available), node counts, and top nodes by connectivity.

Args:
  - community_id: Get details for a specific community (optional)
  - limit: Max communities to return (default 20, max 86)
  - offset: Skip communities for pagination (default 0)

Returns: Communities with names, node counts, top nodes, and sample labels.`,
      inputSchema: {
        community_id: z.number().int().optional().describe("Specific community ID"),
        limit: z.number().int().min(1).max(86).default(20).describe("Max communities to return"),
        offset: z.number().int().min(0).default(0).describe("Communities to skip"),
      },
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async ({ community_id, limit, offset }) => {
      const { communities, communityNames, nodes } = kb.graph;

      if (community_id !== undefined) {
        const nodeIds = communities.get(community_id);
        if (!nodeIds || nodeIds.length === 0) {
          return { content: [{ type: "text", text: `Community ${community_id} not found or empty.` }] };
        }
        const name = communityNames.get(community_id);
        const communityNodes = nodeIds
          .map((id) => nodes.get(id)!)
          .filter(Boolean)
          .sort((a, b) => b.degree - a.degree);

        let text = `# Community ${community_id}${name ? `: "${name}"` : ""}\n`;
        text += `**Nodes:** ${communityNodes.length}\n\n`;
        text += `## Top Nodes\n`;
        for (const n of communityNodes.slice(0, 15)) {
          text += `- **${n.label}** (${n.fileType}, degree ${n.degree})\n`;
        }
        if (communityNodes.length > 15) {
          text += `\n_...and ${communityNodes.length - 15} more nodes_\n`;
        }
        return { content: [{ type: "text", text }] };
      }

      // List all communities
      const allCommunities = [...communities.entries()]
        .map(([id, nodeIds]) => ({
          id,
          name: communityNames.get(id) || null,
          nodeCount: nodeIds.length,
          topNodes: nodeIds
            .map((nid) => nodes.get(nid)!)
            .filter(Boolean)
            .sort((a, b) => b.degree - a.degree)
            .slice(0, 3)
            .map((n) => `${n.label} (${n.degree})`),
        }))
        .sort((a, b) => b.nodeCount - a.nodeCount);

      const total = allCommunities.length;
      const page = allCommunities.slice(offset, offset + limit);
      const hasMore = offset + limit < total;

      let text = `# Knowledge Graph Communities (${total} total)\n\n`;
      for (const c of page) {
        const name = c.name ? ` — "${c.name}"` : "";
        text += `- **Community ${c.id}${name}** (${c.nodeCount} nodes) — Top: ${c.topNodes.join(", ")}\n`;
      }
      if (hasMore) {
        text += `\n_More communities available. Use offset=${offset + limit} to see next page._\n`;
      }

      return { content: [{ type: "text", text }] };
    }
  );
}
