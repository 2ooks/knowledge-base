import type { GraphNode, GraphEdge } from "./types.js";

export interface PathResult {
  found: boolean;
  path: { nodeId: string; nodeLabel: string; fileType: string; community: number }[];
  edges: { source: string; target: string; relation: string; confidence: string; confidenceScore: number }[];
  pathLength: number;
}

export class GraphIndex {
  private nodes: Map<string, GraphNode>;
  private adjacency: Map<string, { neighbor: string; edge: GraphEdge }[]>;

  constructor(
    nodes: Map<string, GraphNode>,
    adjacency: Map<string, { neighbor: string; edge: GraphEdge }[]>
  ) {
    this.nodes = nodes;
    this.adjacency = adjacency;
  }

  findNodesByLabel(query: string, limit: number = 20): GraphNode[] {
    const lower = query.toLowerCase();
    const results: GraphNode[] = [];
    for (const node of this.nodes.values()) {
      if (node.label.toLowerCase().includes(lower) || node.id.toLowerCase().includes(lower)) {
        results.push(node);
      }
    }
    return results
      .sort((a, b) => b.degree - a.degree)
      .slice(0, limit);
  }

  getNode(id: string): GraphNode | undefined {
    return this.nodes.get(id);
  }

  getNeighbors(nodeId: string): { neighbor: GraphNode; edge: GraphEdge }[] {
    const adj = this.adjacency.get(nodeId) || [];
    return adj
      .map((a) => {
        const neighbor = this.nodes.get(a.neighbor);
        if (!neighbor) return null;
        return { neighbor, edge: a.edge };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);
  }

  getTopNodes(limit: number = 20): GraphNode[] {
    return [...this.nodes.values()]
      .sort((a, b) => b.degree - a.degree)
      .slice(0, limit);
  }

  getNodesByCommunity(communityId: number, limit: number = 50): GraphNode[] {
    const results: GraphNode[] = [];
    for (const node of this.nodes.values()) {
      if (node.community === communityId) {
        results.push(node);
      }
    }
    return results
      .sort((a, b) => b.degree - a.degree)
      .slice(0, limit);
  }

  findShortestPath(sourceId: string, targetId: string, maxDepth: number = 5): PathResult {
    if (!this.nodes.has(sourceId) || !this.nodes.has(targetId)) {
      return { found: false, path: [], edges: [], pathLength: 0 };
    }
    if (sourceId === targetId) {
      const node = this.nodes.get(sourceId)!;
      return {
        found: true,
        path: [{ nodeId: node.id, nodeLabel: node.label, fileType: node.fileType, community: node.community }],
        edges: [],
        pathLength: 0,
      };
    }

    // BFS
    const visited = new Set<string>([sourceId]);
    const parent = new Map<string, { from: string; edge: GraphEdge }>();
    const queue: { nodeId: string; depth: number }[] = [{ nodeId: sourceId, depth: 0 }];

    while (queue.length > 0) {
      const { nodeId, depth } = queue.shift()!;
      if (depth >= maxDepth) continue;

      for (const { neighbor, edge } of this.adjacency.get(nodeId) || []) {
        if (visited.has(neighbor)) continue;
        visited.add(neighbor);
        parent.set(neighbor, { from: nodeId, edge });

        if (neighbor === targetId) {
          // Reconstruct path
          const path: PathResult["path"] = [];
          const edges: PathResult["edges"] = [];
          let current = targetId;
          while (parent.has(current)) {
            const node = this.nodes.get(current)!;
            path.unshift({ nodeId: node.id, nodeLabel: node.label, fileType: node.fileType, community: node.community });
            const p = parent.get(current)!;
            edges.unshift({
              source: p.edge.source,
              target: p.edge.target,
              relation: p.edge.relation,
              confidence: p.edge.confidence,
              confidenceScore: p.edge.confidenceScore,
            });
            current = p.from;
          }
          const startNode = this.nodes.get(sourceId)!;
          path.unshift({ nodeId: startNode.id, nodeLabel: startNode.label, fileType: startNode.fileType, community: startNode.community });
          return { found: true, path, edges, pathLength: path.length - 1 };
        }

        queue.push({ nodeId: neighbor, depth: depth + 1 });
      }
    }

    return { found: false, path: [], edges: [], pathLength: 0 };
  }

  resolveNodeId(query: string): string | null {
    // Exact ID match
    if (this.nodes.has(query)) return query;

    // Case-insensitive label match
    const lower = query.toLowerCase();
    for (const node of this.nodes.values()) {
      if (node.label.toLowerCase() === lower) return node.id;
    }

    // Partial label match — return highest-degree
    const matches = this.findNodesByLabel(query, 1);
    return matches.length > 0 ? matches[0].id : null;
  }
}
