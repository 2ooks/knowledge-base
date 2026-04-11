import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { GraphIndex } from "../data/graph-index.js";

export function registerGraphQueryTool(server: McpServer, graphIndex: GraphIndex): void {
  server.registerTool(
    "kb_graph_query",
    {
      title: "Query Knowledge Graph",
      description: `Browse nodes in the knowledge graph. Search by label, get a specific node with its neighbors, list nodes in a community, or get the most-connected "god nodes".

Provide exactly ONE of: query, node_id, community_id, or top_nodes=true.

Args:
  - query: Search node labels (partial match)
  - node_id: Get a specific node and its neighbors
  - community_id: List all nodes in a community
  - top_nodes: Set true to get highest-degree nodes (most connected)
  - limit: Max results (default 20, max 100)

Returns: Nodes with id, label, type, community, degree, and neighbors (when querying a single node).`,
      inputSchema: {
        query: z.string().optional().describe("Search nodes by label"),
        node_id: z.string().optional().describe("Get specific node and neighbors"),
        community_id: z.number().int().optional().describe("List nodes in a community"),
        top_nodes: z.boolean().default(false).describe("Return most-connected nodes"),
        limit: z.number().int().min(1).max(100).default(20).describe("Max results"),
      },
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async ({ query, node_id, community_id, top_nodes, limit }) => {
      // Single node with neighbors
      if (node_id) {
        const node = graphIndex.getNode(node_id);
        if (!node) {
          return { content: [{ type: "text", text: `Node not found: "${node_id}". Use query to search by label.` }] };
        }
        const neighbors = graphIndex.getNeighbors(node_id);
        let text = `# ${node.label}\n`;
        text += `- **ID:** ${node.id}\n`;
        text += `- **Type:** ${node.fileType}\n`;
        text += `- **Community:** ${node.community}\n`;
        text += `- **Degree:** ${node.degree}\n`;
        text += `\n## Neighbors (${neighbors.length})\n`;
        for (const { neighbor, edge } of neighbors.slice(0, limit)) {
          text += `- **${neighbor.label}** (${neighbor.fileType}, community ${neighbor.community}) — ${edge.relation} [${edge.confidence}, ${edge.confidenceScore.toFixed(2)}]\n`;
        }
        return { content: [{ type: "text", text }] };
      }

      // Top nodes
      if (top_nodes) {
        const nodes = graphIndex.getTopNodes(limit);
        let text = `# Most Connected Nodes (God Nodes)\n\n`;
        for (const n of nodes) {
          text += `- **${n.label}** (${n.fileType}, community ${n.community}, degree ${n.degree})\n`;
        }
        return { content: [{ type: "text", text }] };
      }

      // Community browse
      if (community_id !== undefined) {
        const nodes = graphIndex.getNodesByCommunity(community_id, limit);
        if (nodes.length === 0) {
          return { content: [{ type: "text", text: `No nodes found in community ${community_id}.` }] };
        }
        let text = `# Community ${community_id} (${nodes.length} nodes shown)\n\n`;
        for (const n of nodes) {
          text += `- **${n.label}** (${n.fileType}, degree ${n.degree})\n`;
        }
        return { content: [{ type: "text", text }] };
      }

      // Label search
      if (query) {
        const nodes = graphIndex.findNodesByLabel(query, limit);
        if (nodes.length === 0) {
          return { content: [{ type: "text", text: `No nodes found matching "${query}".` }] };
        }
        let text = `# Graph Nodes matching "${query}" (${nodes.length} results)\n\n`;
        for (const n of nodes) {
          text += `- **${n.label}** (id: \`${n.id}\`, ${n.fileType}, community ${n.community}, degree ${n.degree})\n`;
        }
        return { content: [{ type: "text", text }] };
      }

      return {
        content: [{ type: "text", text: "Provide one of: query, node_id, community_id, or top_nodes=true." }],
      };
    }
  );
}
