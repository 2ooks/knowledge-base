import fs from "node:fs";
import path from "node:path";
import {
  parseFrontmatter,
  extractTitle,
  splitSections,
  extractBulletList,
  extractWikilinks,
  extractTags,
  extractMetadataLine,
} from "./markdown-parser.js";
import { SearchIndex } from "./search-index.js";
import { GraphIndex } from "./graph-index.js";
import type {
  KnowledgeBase,
  WikiSummary,
  WikiConcept,
  WikiOutput,
  ConnectionSection,
  VerificationClaim,
  GraphNode,
  GraphEdge,
  Hyperedge,
} from "./types.js";

function slugFromPath(filePath: string): string {
  return path.basename(filePath, ".md");
}

function readFilesSafe(dir: string, ext: string = ".md"): { filePath: string; content: string }[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(ext))
    .map((f) => {
      const filePath = path.join(dir, f);
      return { filePath, content: fs.readFileSync(filePath, "utf-8") };
    });
}

function loadSummaries(dir: string): Map<string, WikiSummary> {
  const map = new Map<string, WikiSummary>();
  for (const { filePath, content } of readFilesSafe(dir)) {
    const slug = slugFromPath(filePath);
    const { frontmatter, body } = parseFrontmatter(content);
    const title = extractTitle(body);
    const sections = splitSections(body);

    const summarySection = sections.find((s) => s.heading === "Summary");
    const claimsSection = sections.find((s) => s.heading === "Key Claims");
    const tagsSection = sections.find((s) => s.heading === "Tags");
    const relatedSection = sections.find((s) => s.heading === "Related");

    map.set(slug, {
      slug,
      title,
      sourceUrl: extractMetadataLine(body, "Source") || extractMetadataLine(body, "Source URL"),
      date: extractMetadataLine(body, "Date"),
      author: extractMetadataLine(body, "Author"),
      publication: extractMetadataLine(body, "Publication"),
      summary: summarySection?.content || "",
      keyClaims: claimsSection ? extractBulletList(claimsSection.content) : [],
      tags: tagsSection ? extractTags(tagsSection.content) : [],
      related: relatedSection ? extractWikilinks(relatedSection.content) : [],
      lastValidated: frontmatter["last_validated"] || null,
      decayRate: frontmatter["decay_rate"] || null,
      rawContent: content,
    });
  }
  return map;
}

function loadConcepts(dir: string): Map<string, WikiConcept> {
  const map = new Map<string, WikiConcept>();
  for (const { filePath, content } of readFilesSafe(dir)) {
    const slug = slugFromPath(filePath);
    const { body } = parseFrontmatter(content);
    const title = extractTitle(body);
    const sections = splitSections(body);

    const defSection = sections.find((s) => s.heading === "Definition");
    const kpSection = sections.find((s) => s.heading === "Key Points");
    const oqSection = sections.find((s) => s.heading === "Open Questions");
    const rcSection = sections.find((s) => s.heading === "Related Concepts");

    map.set(slug, {
      slug,
      title,
      definition: defSection?.content || "",
      keyPoints: kpSection ? extractBulletList(kpSection.content) : [],
      openQuestions: oqSection ? extractBulletList(oqSection.content) : [],
      relatedConcepts: rcSection ? extractWikilinks(rcSection.content) : [],
      rawContent: content,
    });
  }
  return map;
}

function loadOutputs(dir: string): Map<string, WikiOutput> {
  const map = new Map<string, WikiOutput>();
  for (const { filePath, content } of readFilesSafe(dir)) {
    const slug = slugFromPath(filePath);
    const { body } = parseFrontmatter(content);
    const title = extractTitle(body);
    map.set(slug, { slug, title, rawContent: content });
  }
  return map;
}

function loadConnections(filePath: string): ConnectionSection[] {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, "utf-8");
  const sections = splitSections(content, 3); // ### headings
  // Also try ## if no ### found
  const allSections = sections.length > 1 ? sections : splitSections(content, 2);

  return allSections
    .filter((s) => s.heading.length > 0)
    .map((s) => ({
      heading: s.heading,
      content: s.content,
      mentionedArticles: extractWikilinks(s.content),
    }));
}

function loadVerificationQueue(filePath: string): VerificationClaim[] {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  const claims: VerificationClaim[] = [];

  for (const line of lines) {
    // Match pipe-delimited table rows (skip header and separator)
    if (!line.startsWith("|") || line.includes("---") || line.toLowerCase().includes("claim")) continue;
    const cells = line.split("|").map((c) => c.trim()).filter((c) => c.length > 0);
    if (cells.length >= 4) {
      claims.push({
        claim: cells[0],
        sourceFile: cells[1],
        verificationMethod: cells[2],
        status: cells[3].replace(/\*\*/g, "").trim(),
      });
    }
  }
  return claims;
}

interface RawGraphJson {
  nodes: {
    id: string;
    label: string;
    file_type?: string;
    source_file?: string;
    source_url?: string;
    community?: number;
    captured_at?: string;
    author?: string;
  }[];
  links: {
    source: string;
    target: string;
    relation?: string;
    confidence?: string;
    confidence_score?: number;
    source_file?: string;
    weight?: number;
  }[];
  hyperedges?: {
    id: string;
    label: string;
    nodes: string[];
    relation?: string;
    confidence?: string;
    confidence_score?: number;
    source_file?: string;
  }[];
  graph?: {
    hyperedges?: RawGraphJson["hyperedges"];
  };
}

function loadGraph(graphPath: string, reportPath: string) {
  const nodes = new Map<string, GraphNode>();
  const adjacency = new Map<string, { neighbor: string; edge: GraphEdge }[]>();
  const communities = new Map<number, string[]>();
  const communityNames = new Map<number, string>();
  let hyperedges: Hyperedge[] = [];

  if (!fs.existsSync(graphPath)) {
    return { nodes, adjacency, communities, communityNames, hyperedges };
  }

  const raw: RawGraphJson = JSON.parse(fs.readFileSync(graphPath, "utf-8"));

  // Build degree map
  const degreeMap = new Map<string, number>();
  for (const link of raw.links) {
    degreeMap.set(link.source, (degreeMap.get(link.source) || 0) + 1);
    degreeMap.set(link.target, (degreeMap.get(link.target) || 0) + 1);
  }

  // Load nodes
  for (const n of raw.nodes) {
    const node: GraphNode = {
      id: n.id,
      label: n.label,
      fileType: n.file_type || "unknown",
      sourceFile: n.source_file || null,
      sourceUrl: n.source_url || null,
      community: n.community ?? -1,
      capturedAt: n.captured_at || null,
      author: n.author || null,
      degree: degreeMap.get(n.id) || 0,
    };
    nodes.set(n.id, node);

    // Track communities
    if (node.community >= 0) {
      const list = communities.get(node.community) || [];
      list.push(node.id);
      communities.set(node.community, list);
    }
  }

  // Load edges + build adjacency
  for (const link of raw.links) {
    const edge: GraphEdge = {
      source: link.source,
      target: link.target,
      relation: link.relation || "related",
      confidence: link.confidence || "UNKNOWN",
      confidenceScore: link.confidence_score ?? 0,
      sourceFile: link.source_file || null,
      weight: link.weight ?? 1,
    };

    // Undirected: add both directions
    if (!adjacency.has(link.source)) adjacency.set(link.source, []);
    if (!adjacency.has(link.target)) adjacency.set(link.target, []);
    adjacency.get(link.source)!.push({ neighbor: link.target, edge });
    adjacency.get(link.target)!.push({ neighbor: link.source, edge });
  }

  // Load hyperedges (may be in graph.hyperedges or top-level)
  const rawHyperedges = raw.hyperedges || raw.graph?.hyperedges || [];
  hyperedges = rawHyperedges.map((h) => ({
    id: h.id,
    label: h.label,
    nodes: h.nodes,
    nodeLabels: h.nodes.map((nid) => nodes.get(nid)?.label || nid),
    relation: h.relation || "related",
    confidence: h.confidence || "UNKNOWN",
    confidenceScore: h.confidence_score ?? 0,
    sourceFile: h.source_file || null,
  }));

  // Parse community names from GRAPH_REPORT.md
  if (fs.existsSync(reportPath)) {
    const report = fs.readFileSync(reportPath, "utf-8");
    const communityPattern = /###\s*Community\s+(\d+)\s*[-–:]\s*"?([^"\n]+)"?/g;
    let match;
    while ((match = communityPattern.exec(report)) !== null) {
      communityNames.set(parseInt(match[1]), match[2].trim().replace(/"$/, ""));
    }
  }

  return { nodes, adjacency, communities, communityNames, hyperedges };
}

function buildRawArticleIndex(dir: string): Map<string, string> {
  const index = new Map<string, string>();
  if (!fs.existsSync(dir)) return index;
  for (const f of fs.readdirSync(dir)) {
    if (f.endsWith(".md")) {
      index.set(slugFromPath(f), path.join(dir, f));
    }
  }
  return index;
}

export function loadKnowledgeBase(dataDir: string): { kb: KnowledgeBase; searchIndex: SearchIndex; graphIndex: GraphIndex } {
  console.error(`Loading knowledge base from ${dataDir}...`);

  const summaries = loadSummaries(path.join(dataDir, "wiki", "summaries"));
  console.error(`  Loaded ${summaries.size} wiki summaries`);

  const concepts = loadConcepts(path.join(dataDir, "wiki", "concepts"));
  console.error(`  Loaded ${concepts.size} wiki concepts`);

  const outputs = loadOutputs(path.join(dataDir, "outputs"));
  console.error(`  Loaded ${outputs.size} strategic outputs`);

  const connectionSections = loadConnections(path.join(dataDir, "wiki", "connections.md"));
  console.error(`  Loaded ${connectionSections.length} connection sections`);

  const verificationClaims = loadVerificationQueue(path.join(dataDir, "wiki", "verification-queue.md"));
  console.error(`  Loaded ${verificationClaims.length} verification claims`);

  const graph = loadGraph(
    path.join(dataDir, "graphify-out", "graph.json"),
    path.join(dataDir, "graphify-out", "GRAPH_REPORT.md")
  );
  console.error(`  Loaded graph: ${graph.nodes.size} nodes, ${graph.hyperedges.length} hyperedges, ${graph.communities.size} communities`);

  const rawArticleIndex = buildRawArticleIndex(path.join(dataDir, "raw", "articles"));
  console.error(`  Indexed ${rawArticleIndex.size} raw articles`);

  // Build search index
  const searchIndex = new SearchIndex();
  for (const [slug, s] of summaries) {
    searchIndex.addEntry(slug, s.title, "summary", s.tags, [s.summary, ...s.keyClaims]);
  }
  for (const [slug, c] of concepts) {
    searchIndex.addEntry(slug, c.title, "concept", [], [c.definition, ...c.keyPoints]);
  }
  for (const [slug, o] of outputs) {
    searchIndex.addEntry(slug, o.title, "output", [], [o.rawContent.slice(0, 2000)]);
  }
  console.error(`  Built search index`);

  // Build graph index
  const graphIndex = new GraphIndex(graph.nodes, graph.adjacency);

  const kb: KnowledgeBase = {
    summaries,
    concepts,
    outputs,
    connectionSections,
    verificationClaims,
    graph,
    rawArticleIndex,
  };

  console.error(`Knowledge base loaded successfully.`);
  return { kb, searchIndex, graphIndex };
}

export function readRawArticle(filePath: string): string | null {
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf-8");
}
