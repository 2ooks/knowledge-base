import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { GraphIndex } from "../data/graph-index.js";

export function registerGraphPathTool(server: McpServer, graphIndex: GraphIndex): void {
  server.registerTool(
    "kb_graph_path",
    {
      title: "Find Graph Path",
      description: `Find the shortest path between two nodes in the knowledge graph.

Accepts node IDs or label search terms. Shows each node on the path and the relationship types connecting them.

Args:
  - source: Starting node (ID or label search)
  - target: Ending node (ID or label search)
  - max_depth: Maximum hops to search (default 5, max 10)

Returns: The shortest path with nodes, communities, and edge relationships, or "no path found".`,
      inputSchema: {
        source: z.string().min(1).describe("Source node ID or label"),
        target: z.string().min(1).describe("Target node ID or label"),
        max_depth: z.number().int().min(1).max(10).default(5).describe("Maximum search depth"),
      },
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async ({ source, target, max_depth }) => {
      const sourceId = graphIndex.resolveNodeId(source);
      const targetId = graphIndex.resolveNodeId(target);

      if (!sourceId) {
        return { content: [{ type: "text", text: `Could not find source node: "${source}". Try a different search term.` }] };
      }
      if (!targetId) {
        return { content: [{ type: "text", text: `Could not find target node: "${target}". Try a different search term.` }] };
      }

      const result = graphIndex.findShortestPath(sourceId, targetId, max_depth);

      if (!result.found) {
        return {
          content: [{ type: "text", text: `No path found between "${source}" and "${target}" within ${max_depth} hops.` }],
        };
      }

      let text = `# Path: ${result.path[0].nodeLabel} → ${result.path[result.path.length - 1].nodeLabel}\n`;
      text += `**Length:** ${result.pathLength} hop${result.pathLength !== 1 ? "s" : ""}\n\n`;

      for (let i = 0; i < result.path.length; i++) {
        const node = result.path[i];
        text += `${i + 1}. **${node.nodeLabel}** (${node.fileType}, community ${node.community})\n`;
        if (i < result.edges.length) {
          const edge = result.edges[i];
          text += `   ↓ _${edge.relation}_ [${edge.confidence}, ${edge.confidenceScore.toFixed(2)}]\n`;
        }
      }

      return { content: [{ type: "text", text }] };
    }
  );
}
