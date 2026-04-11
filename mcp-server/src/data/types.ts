// ── Data Types ──

export interface WikiSummary {
  slug: string;
  title: string;
  sourceUrl: string | null;
  date: string | null;
  author: string | null;
  publication: string | null;
  summary: string;
  keyClaims: string[];
  tags: string[];
  related: string[];
  lastValidated: string | null;
  decayRate: string | null;
  rawContent: string;
}

export interface WikiConcept {
  slug: string;
  title: string;
  definition: string;
  keyPoints: string[];
  openQuestions: string[];
  relatedConcepts: string[];
  rawContent: string;
}

export interface WikiOutput {
  slug: string;
  title: string;
  rawContent: string;
}

export interface ConnectionSection {
  heading: string;
  content: string;
  mentionedArticles: string[];
}

export interface VerificationClaim {
  claim: string;
  sourceFile: string;
  verificationMethod: string;
  status: string;
}

// ── Graph Types ──

export interface GraphNode {
  id: string;
  label: string;
  fileType: string; // "document" | "entity" | "concept"
  sourceFile: string | null;
  sourceUrl: string | null;
  community: number;
  capturedAt: string | null;
  author: string | null;
  degree: number;
}

export interface GraphEdge {
  source: string;
  target: string;
  relation: string;
  confidence: string;
  confidenceScore: number;
  sourceFile: string | null;
  weight: number;
}

export interface Hyperedge {
  id: string;
  label: string;
  nodes: string[];
  nodeLabels: string[];
  relation: string;
  confidence: string;
  confidenceScore: number;
  sourceFile: string | null;
}

export interface CommunityInfo {
  id: number;
  name: string | null;
  nodeCount: number;
  topNodes: { id: string; label: string; degree: number }[];
  sampleLabels: string[];
}

// ── Loaded Data Store ──

export interface KnowledgeBase {
  summaries: Map<string, WikiSummary>;
  concepts: Map<string, WikiConcept>;
  outputs: Map<string, WikiOutput>;
  connectionSections: ConnectionSection[];
  verificationClaims: VerificationClaim[];
  graph: {
    nodes: Map<string, GraphNode>;
    adjacency: Map<string, { neighbor: string; edge: GraphEdge }[]>;
    communities: Map<number, string[]>;
    communityNames: Map<number, string>;
    hyperedges: Hyperedge[];
  };
  rawArticleIndex: Map<string, string>; // slug -> file path
}
