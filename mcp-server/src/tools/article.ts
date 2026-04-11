import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { KnowledgeBase } from "../data/types.js";
import { readRawArticle } from "../data/loader.js";

export function registerArticleTool(server: McpServer, kb: KnowledgeBase): void {
  server.registerTool(
    "kb_get_article",
    {
      title: "Get Article",
      description: `Retrieve a full wiki article, concept, or strategic output by slug.

Use this after searching to get article details: full content, metadata, key claims, and related articles.

Args:
  - slug: Article identifier (e.g. "harness-engineering", "ainews-claude-code-source-leak")
  - include_raw: Also return the full raw source article text (default false)

Returns: Full article content with metadata, key claims, tags, and related links.`,
      inputSchema: {
        slug: z.string().min(1).describe("Article slug identifier"),
        include_raw: z.boolean().default(false).describe("Include full raw source article"),
      },
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async ({ slug, include_raw }) => {
      // Try summaries first
      const summary = kb.summaries.get(slug);
      if (summary) {
        let text = `# ${summary.title}\n`;
        text += `**Type:** Wiki Summary\n`;
        if (summary.sourceUrl) text += `**Source:** ${summary.sourceUrl}\n`;
        if (summary.date) text += `**Date:** ${summary.date}\n`;
        if (summary.author) text += `**Author:** ${summary.author}\n`;
        if (summary.lastValidated) text += `**Last Validated:** ${summary.lastValidated}\n`;
        if (summary.decayRate) text += `**Decay Rate:** ${summary.decayRate}\n`;
        text += `\n## Summary\n${summary.summary}\n`;
        if (summary.keyClaims.length > 0) {
          text += `\n## Key Claims\n${summary.keyClaims.map((c) => `- ${c}`).join("\n")}\n`;
        }
        if (summary.tags.length > 0) {
          text += `\n## Tags\n${summary.tags.map((t) => `#${t}`).join(" ")}\n`;
        }
        if (summary.related.length > 0) {
          text += `\n## Related\n${summary.related.map((r) => `- [[${r}]]`).join("\n")}\n`;
        }

        if (include_raw) {
          const rawPath = kb.rawArticleIndex.get(slug);
          if (rawPath) {
            const rawContent = readRawArticle(rawPath);
            if (rawContent) {
              text += `\n---\n## Full Raw Source\n${rawContent}\n`;
            }
          }
        }

        return { content: [{ type: "text", text }] };
      }

      // Try concepts
      const concept = kb.concepts.get(slug);
      if (concept) {
        let text = `# ${concept.title}\n**Type:** Wiki Concept\n`;
        text += `\n## Definition\n${concept.definition}\n`;
        if (concept.keyPoints.length > 0) {
          text += `\n## Key Points\n${concept.keyPoints.map((p) => `- ${p}`).join("\n")}\n`;
        }
        if (concept.openQuestions.length > 0) {
          text += `\n## Open Questions\n${concept.openQuestions.map((q) => `- ${q}`).join("\n")}\n`;
        }
        if (concept.relatedConcepts.length > 0) {
          text += `\n## Related Concepts\n${concept.relatedConcepts.map((r) => `- [[${r}]]`).join("\n")}\n`;
        }
        return { content: [{ type: "text", text }] };
      }

      // Try outputs
      const output = kb.outputs.get(slug);
      if (output) {
        return { content: [{ type: "text", text: `**Type:** Strategic Output\n\n${output.rawContent}` }] };
      }

      return {
        content: [{ type: "text", text: `Article not found: "${slug}". Use kb_search to find the correct slug.` }],
      };
    }
  );
}
