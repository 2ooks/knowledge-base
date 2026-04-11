export interface SearchResult {
  slug: string;
  title: string;
  type: "summary" | "concept" | "output";
  snippet: string;
  tags: string[];
  score: number;
}

interface IndexEntry {
  slug: string;
  title: string;
  type: "summary" | "concept" | "output";
  tags: string[];
  text: string; // all searchable text concatenated
}

export class SearchIndex {
  private entries: IndexEntry[] = [];
  private invertedIndex: Map<string, Set<number>> = new Map();

  addEntry(
    slug: string,
    title: string,
    type: "summary" | "concept" | "output",
    tags: string[],
    textParts: string[]
  ): void {
    const idx = this.entries.length;
    const text = textParts.join(" ");
    this.entries.push({ slug, title, type, tags, text });

    const tokens = this.tokenize(title + " " + text + " " + tags.join(" "));
    for (const token of tokens) {
      let set = this.invertedIndex.get(token);
      if (!set) {
        set = new Set();
        this.invertedIndex.set(token, set);
      }
      set.add(idx);
    }
  }

  search(query: string, limit: number = 10, offset: number = 0): { results: SearchResult[]; total: number } {
    const queryTokens = this.tokenize(query);
    if (queryTokens.length === 0) return { results: [], total: 0 };

    const scores: Map<number, number> = new Map();

    for (const token of queryTokens) {
      // Exact token match
      const exact = this.invertedIndex.get(token);
      if (exact) {
        for (const idx of exact) {
          scores.set(idx, (scores.get(idx) || 0) + 2);
        }
      }

      // Prefix match for partial queries
      for (const [key, idxSet] of this.invertedIndex) {
        if (key !== token && key.startsWith(token) && token.length >= 3) {
          for (const idx of idxSet) {
            scores.set(idx, (scores.get(idx) || 0) + 1);
          }
        }
      }
    }

    // Boost title matches
    const queryLower = query.toLowerCase();
    for (const [idx, entry] of this.entries.entries()) {
      if (scores.has(idx) && entry.title.toLowerCase().includes(queryLower)) {
        scores.set(idx, (scores.get(idx) || 0) + 5);
      }
    }

    const sorted = [...scores.entries()]
      .sort((a, b) => b[1] - a[1]);

    const total = sorted.length;
    const page = sorted.slice(offset, offset + limit);

    const results: SearchResult[] = page.map(([idx, score]) => {
      const entry = this.entries[idx];
      return {
        slug: entry.slug,
        title: entry.title,
        type: entry.type,
        snippet: this.extractSnippet(entry.text, queryTokens),
        tags: entry.tags,
        score,
      };
    });

    return { results, total };
  }

  private tokenize(text: string): string[] {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, " ")
      .split(/\s+/)
      .filter((t) => t.length >= 2);
  }

  private extractSnippet(text: string, queryTokens: string[]): string {
    const lower = text.toLowerCase();
    let bestPos = 0;
    let bestScore = 0;

    // Find the position with the most query token hits in a 200-char window
    for (let i = 0; i < lower.length; i += 50) {
      const window = lower.slice(i, i + 200);
      let score = 0;
      for (const token of queryTokens) {
        if (window.includes(token)) score++;
      }
      if (score > bestScore) {
        bestScore = score;
        bestPos = i;
      }
    }

    const start = Math.max(0, bestPos - 20);
    const snippet = text.slice(start, start + 200).trim();
    return (start > 0 ? "..." : "") + snippet + (start + 200 < text.length ? "..." : "");
  }
}
