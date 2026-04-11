export interface Frontmatter {
  [key: string]: string;
}

export interface ParsedMarkdown {
  frontmatter: Frontmatter;
  body: string;
}

export interface MarkdownSection {
  heading: string;
  content: string;
}

export function parseFrontmatter(raw: string): ParsedMarkdown {
  const trimmed = raw.trimStart();
  if (!trimmed.startsWith("---")) {
    return { frontmatter: {}, body: raw };
  }

  const endIdx = trimmed.indexOf("---", 3);
  if (endIdx === -1) {
    return { frontmatter: {}, body: raw };
  }

  const fmBlock = trimmed.slice(3, endIdx).trim();
  const frontmatter: Frontmatter = {};
  for (const line of fmBlock.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx > 0) {
      const key = line.slice(0, colonIdx).trim();
      const value = line.slice(colonIdx + 1).trim();
      frontmatter[key] = value;
    }
  }

  const body = trimmed.slice(endIdx + 3).trim();
  return { frontmatter, body };
}

export function extractTitle(body: string): string {
  const match = body.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "Untitled";
}

export function splitSections(body: string, level: number = 2): MarkdownSection[] {
  const prefix = "#".repeat(level) + " ";
  const lines = body.split("\n");
  const sections: MarkdownSection[] = [];
  let currentHeading = "";
  let currentLines: string[] = [];

  for (const line of lines) {
    if (line.startsWith(prefix) && !line.startsWith(prefix + "#")) {
      if (currentHeading || currentLines.length > 0) {
        sections.push({
          heading: currentHeading,
          content: currentLines.join("\n").trim(),
        });
      }
      currentHeading = line.slice(prefix.length).trim();
      currentLines = [];
    } else {
      currentLines.push(line);
    }
  }

  if (currentHeading || currentLines.length > 0) {
    sections.push({
      heading: currentHeading,
      content: currentLines.join("\n").trim(),
    });
  }

  return sections;
}

export function extractBulletList(content: string): string[] {
  return content
    .split("\n")
    .filter((l) => l.match(/^\s*[-*]\s/))
    .map((l) => l.replace(/^\s*[-*]\s+/, "").trim())
    .filter((l) => l.length > 0);
}

export function extractWikilinks(text: string): string[] {
  const matches = text.match(/\[\[([^\]]+)\]\]/g) || [];
  return matches.map((m) => m.slice(2, -2));
}

export function extractTags(text: string): string[] {
  const matches = text.match(/#[\w-]+/g) || [];
  return matches.map((m) => m.slice(1));
}

export function extractMetadataLine(body: string, key: string): string | null {
  const pattern = new RegExp(`^\\s*[-*]?\\s*\\**${key}:?\\**\\s*(.+)$`, "mi");
  const match = body.match(pattern);
  return match ? match[1].trim() : null;
}
