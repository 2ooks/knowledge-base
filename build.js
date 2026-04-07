#!/usr/bin/env node
/**
 * build.js — Static site builder for the knowledge-base wiki.
 *
 * Reads markdown files from wiki/, resolves [[wikilinks]], applies an
 * HTML template, and writes the result to _site/ for GitHub Pages.
 *
 * Usage:  node build.js
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// ── Paths ────────────────────────────────────────────────────────────────────

const ROOT_DIR   = __dirname;
const WIKI_DIR   = path.join(ROOT_DIR, 'wiki');
const OUTPUTS_DIR = path.join(ROOT_DIR, 'outputs');
const OUT_DIR    = path.join(ROOT_DIR, '_site');

// ── Slug map: slug → path-from-site-root (e.g. "summaries/foo.html") ────────

const slugMap = {};

function addSlugDir(dir, prefix) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) {
    if (f.endsWith('.md') && !f.startsWith('.') && f !== '.gitkeep') {
      const slug = f.slice(0, -3);
      slugMap[slug] = prefix ? `${prefix}/${slug}.html` : `${slug}.html`;
    }
  }
}

addSlugDir(path.join(WIKI_DIR, 'summaries'), 'summaries');
addSlugDir(path.join(WIKI_DIR, 'concepts'),  'concepts');
addSlugDir(WIKI_DIR, ''); // index.md, connections.md
addSlugDir(OUTPUTS_DIR, 'outputs'); // briefings, Q&A answers

// ── Wikilink resolution ──────────────────────────────────────────────────────
// depth=0 → file is at site root; depth=1 → file is one level deep

function resolveWikilinks(markdown, depth) {
  return markdown.replace(/\[\[([^\]]+)\]\]/g, (_match, slug) => {
    const target = slugMap[slug];
    if (target) {
      const href  = depth > 0 ? `../${target}` : target;
      const label = slug.replace(/-/g, ' ');
      return `[${label}](${href})`;
    }
    return `<span class="wikilink-missing" title="No page for '${slug}'">${slug.replace(/-/g, ' ')}</span>`;
  });
}

// ── Extract H1 title from markdown ──────────────────────────────────────────

function extractTitle(markdown, fallback) {
  const m = markdown.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : fallback.replace(/-/g, ' ');
}

// ── Build navigation lists ───────────────────────────────────────────────────

function buildNavData() {
  const read = (dir, prefix) => {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
      .filter(f => f.endsWith('.md') && !f.startsWith('.') && f !== '.gitkeep')
      .map(f => {
        const slug = f.slice(0, -3);
        const md   = fs.readFileSync(path.join(dir, f), 'utf8');
        return { slug, title: extractTitle(md, slug), href: `${prefix}/${slug}.html` };
      })
      .sort((a, b) => a.title.localeCompare(b.title));
  };
  return {
    summaries: read(path.join(WIKI_DIR, 'summaries'), 'summaries'),
    concepts:  read(path.join(WIKI_DIR, 'concepts'),  'concepts'),
    outputs:   read(OUTPUTS_DIR, 'outputs'),
  };
}

function renderNav(navData, rootPrefix) {
  const rp = rootPrefix; // '' for root pages, '../' for sub-pages
  const li = items =>
    items.map(i => `<li><a href="${rp}${i.href}">${i.title}</a></li>`).join('\n        ');

  return `
      <div class="nav-section">
        <a class="nav-top-link" href="${rp}index.html">
          <span class="nav-icon">📋</span> Index
        </a>
        <a class="nav-top-link" href="${rp}connections.html">
          <span class="nav-icon">🔗</span> Connections
        </a>
        <a class="nav-top-link" href="${rp}graph.html">
          <span class="nav-icon">🕸️</span> Graph
        </a>
        <a class="nav-top-link" href="${rp}ask.html">
          <span class="nav-icon">💬</span> Ask
        </a>
      </div>
      <div class="nav-section">
        <div class="nav-heading">Concepts <span class="nav-count">${navData.concepts.length}</span></div>
        <ul class="nav-list">
        ${li(navData.concepts)}
        </ul>
      </div>
      <div class="nav-section">
        <div class="nav-heading">Summaries <span class="nav-count">${navData.summaries.length}</span></div>
        <ul class="nav-list">
        ${li(navData.summaries)}
        </ul>
      </div>
      ${navData.outputs.length > 0 ? `<div class="nav-section">
        <div class="nav-heading">Outputs <span class="nav-count">${navData.outputs.length}</span></div>
        <ul class="nav-list">
        ${li(navData.outputs)}
        </ul>
      </div>` : ''}`;
}

// ── HTML template ────────────────────────────────────────────────────────────

function buildHtml({ title, content, nav, rootPrefix }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0d1117">
  <title>${escHtml(title)} | Knowledge Base</title>
  <style>
    /* ── Variables ─────────────────────────────────────────────────────── */
    :root {
      --bg:          #0d1117;
      --bg-nav:      #161b22;
      --bg-surface:  #1c2128;
      --text:        #c9d1d9;
      --text-strong: #e6edf3;
      --text-muted:  #8b949e;
      --accent:      #58a6ff;
      --accent-h:    #79c0ff;
      --border:      #30363d;
      --code-bg:     #161b22;
      --radius:      6px;
      --nav-w:       265px;
      --bar-h:       52px;
    }

    /* ── Reset ─────────────────────────────────────────────────────────── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
                   Arial, sans-serif;
      font-size: 16px;
      line-height: 1.7;
    }

    /* ── Top bar ───────────────────────────────────────────────────────── */
    .topbar {
      position: fixed; inset: 0 0 auto 0; z-index: 100;
      height: var(--bar-h);
      background: var(--bg-nav);
      border-bottom: 1px solid var(--border);
      display: flex; align-items: center; gap: 10px;
      padding: 0 14px;
      padding-left: max(14px, env(safe-area-inset-left));
      padding-right: max(14px, env(safe-area-inset-right));
    }
    .topbar-title {
      flex: 1; font-size: 15px; font-weight: 600;
      color: var(--text-strong);
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .icon-btn {
      flex-shrink: 0;
      background: none; border: none; cursor: pointer;
      color: var(--text); padding: 7px; border-radius: var(--radius);
      display: flex; align-items: center; justify-content: center;
      -webkit-tap-highlight-color: transparent;
    }
    .icon-btn:hover, .icon-btn:active { background: var(--bg-surface); color: var(--text-strong); }

    /* ── Layout ────────────────────────────────────────────────────────── */
    .layout {
      display: flex;
      margin-top: var(--bar-h);
      min-height: calc(100vh - var(--bar-h));
    }

    /* ── Sidebar ───────────────────────────────────────────────────────── */
    .sidebar {
      width: var(--nav-w); flex-shrink: 0;
      background: var(--bg-nav);
      border-right: 1px solid var(--border);
      position: fixed; top: var(--bar-h); left: 0; bottom: 0; z-index: 90;
      overflow-y: auto; overflow-x: hidden;
      transform: translateX(-100%);
      transition: transform 0.22s ease;
      padding: 12px 0 40px;
    }
    .sidebar.open { transform: translateX(0); }

    .sidebar-overlay {
      display: none; position: fixed; inset: 0; z-index: 85;
      background: rgba(0,0,0,0.55); backdrop-filter: blur(2px);
    }
    .sidebar-overlay.show { display: block; }

    /* Desktop: always-visible sidebar */
    @media (min-width: 860px) {
      .sidebar         { transform: translateX(0); position: sticky;
                         top: var(--bar-h); height: calc(100vh - var(--bar-h));
                         align-self: flex-start; }
      .sidebar-overlay { display: none !important; }
      #menu-btn        { display: none; }
    }

    /* Nav typography */
    .nav-section { border-bottom: 1px solid var(--border); padding: 6px 0; }
    .nav-section:last-child { border-bottom: none; }

    .nav-top-link {
      display: flex; align-items: center; gap: 8px;
      padding: 9px 18px; text-decoration: none;
      color: var(--text); font-size: 14px; font-weight: 500;
    }
    .nav-top-link:hover { background: var(--bg-surface); color: var(--accent); }
    .nav-icon { font-size: 15px; }

    .nav-heading {
      display: flex; align-items: center; gap: 6px;
      padding: 10px 18px 5px;
      font-size: 11px; font-weight: 700; letter-spacing: .08em;
      text-transform: uppercase; color: var(--text-muted);
    }
    .nav-count {
      background: var(--bg-surface); border: 1px solid var(--border);
      border-radius: 10px; padding: 0 6px;
      font-size: 10px; font-weight: 600; color: var(--text-muted);
    }
    .nav-list { list-style: none; }
    .nav-list a {
      display: block; padding: 6px 18px;
      color: var(--text-muted); text-decoration: none; font-size: 13px;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .nav-list a:hover { color: var(--accent); background: var(--bg-surface); }

    /* ── Main content area ─────────────────────────────────────────────── */
    .main {
      flex: 1; min-width: 0;
      padding: 28px 18px 80px;
      max-width: 780px;
    }
    @media (min-width: 860px) { .main { padding: 40px 52px 80px; } }

    /* ── Markdown content ──────────────────────────────────────────────── */
    .content h1 {
      font-size: clamp(1.5rem, 4vw, 1.9rem); font-weight: 700;
      color: var(--text-strong); line-height: 1.3; margin-bottom: 12px;
    }
    .content h2 {
      font-size: 1.2rem; font-weight: 600; color: var(--text-strong);
      margin-top: 2em; margin-bottom: .6em;
      padding-bottom: 5px; border-bottom: 1px solid var(--border);
    }
    .content h3 {
      font-size: 1.05rem; font-weight: 600; color: var(--text-strong);
      margin-top: 1.6em; margin-bottom: .4em;
    }
    .content h4 {
      font-size: .95rem; font-weight: 600; color: var(--text-strong);
      margin-top: 1.2em; margin-bottom: .3em;
    }
    .content p  { margin-bottom: 1em; }
    .content a  { color: var(--accent); text-decoration: none; }
    .content a:hover { color: var(--accent-h); text-decoration: underline; }

    .content ul,
    .content ol       { margin-bottom: 1em; padding-left: 1.6em; }
    .content li       { margin-bottom: .35em; }
    .content li > ul,
    .content li > ol  { margin-top: .25em; margin-bottom: 0; }

    .content code {
      background: var(--code-bg); color: #e3b341;
      padding: 2px 6px; border-radius: 4px;
      font-family: "SF Mono", "Fira Code", "Menlo", monospace;
      font-size: .875em;
    }
    .content pre {
      background: var(--code-bg); border: 1px solid var(--border);
      border-radius: var(--radius); padding: 16px;
      overflow-x: auto; margin-bottom: 1em;
    }
    .content pre code { background: none; padding: 0; color: var(--text); font-size: .85em; }

    .content blockquote {
      border-left: 3px solid var(--accent);
      margin: 0 0 1em; padding: 4px 16px; color: var(--text-muted);
    }
    .content hr { border: none; border-top: 1px solid var(--border); margin: 2em 0; }

    /* Tables */
    .content table {
      width: 100%; border-collapse: collapse;
      margin-bottom: 1.5em; font-size: .88em;
      display: block; overflow-x: auto; -webkit-overflow-scrolling: touch;
    }
    .content th {
      background: var(--bg-surface); color: var(--text-strong);
      font-weight: 600; padding: 8px 12px; text-align: left;
      border: 1px solid var(--border);
    }
    .content td {
      padding: 7px 12px; border: 1px solid var(--border); vertical-align: top;
    }
    .content tr:nth-child(even) td { background: rgba(255,255,255,.02); }

    /* Broken / unknown wikilinks */
    .wikilink-missing {
      color: var(--text-muted); border-bottom: 1px dashed var(--border);
      cursor: help; font-style: italic;
    }

    /* ── Search overlay ────────────────────────────────────────────────── */
    .search-overlay {
      display: none; position: fixed; inset: 0; z-index: 200;
      background: rgba(0,0,0,.75); backdrop-filter: blur(4px);
      align-items: flex-start; justify-content: center;
      padding: 16px;
    }
    .search-overlay.show { display: flex; }

    .search-box {
      width: 100%; max-width: 580px; margin-top: 48px;
      background: var(--bg-surface); border: 1px solid var(--border);
      border-radius: 12px; overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,.5);
    }
    .search-input-row {
      display: flex; align-items: center; gap: 10px;
      padding: 13px 16px; border-bottom: 1px solid var(--border);
    }
    .search-input-row svg { flex-shrink: 0; color: var(--text-muted); }
    .search-input {
      flex: 1; background: none; border: none; outline: none;
      color: var(--text-strong); font-size: 16px; caret-color: var(--accent);
    }
    .search-input::placeholder { color: var(--text-muted); }
    .search-esc {
      font-size: 11px; color: var(--text-muted); background: var(--bg-nav);
      border: 1px solid var(--border); border-radius: 4px;
      padding: 2px 6px; cursor: pointer; white-space: nowrap; flex-shrink: 0;
    }
    .search-results { max-height: 58vh; overflow-y: auto; }
    .search-result {
      display: block; padding: 12px 16px; text-decoration: none;
      color: var(--text); border-bottom: 1px solid var(--border);
    }
    .search-result:last-child { border-bottom: none; }
    .search-result:hover      { background: var(--bg-nav); }
    .search-result:hover .sr-title { color: var(--accent); }
    .sr-title   { font-size: 14px; font-weight: 600; color: var(--text-strong); margin-bottom: 3px; }
    .sr-snippet { font-size: 13px; color: var(--text-muted);
                  display: -webkit-box; -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical; overflow: hidden; }
    .sr-path    { font-size: 11px; color: var(--text-muted); margin-top: 3px; opacity: .7; }
    .search-hint { padding: 20px 16px; text-align: center;
                   color: var(--text-muted); font-size: 14px; }
    mark { background: #2d4a6f; color: var(--accent-h); border-radius: 2px; }
  </style>
</head>
<body>

<!-- ── Top bar ──────────────────────────────────────────────────────────── -->
<div class="topbar">
  <button class="icon-btn" id="menu-btn" aria-label="Open navigation"
          onclick="toggleSidebar()">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <rect x="2" y="4"  width="16" height="2" rx="1"/>
      <rect x="2" y="9"  width="16" height="2" rx="1"/>
      <rect x="2" y="14" width="16" height="2" rx="1"/>
    </svg>
  </button>
  <span class="topbar-title">${escHtml(title)}</span>
  <button class="icon-btn" aria-label="Search" onclick="openSearch()">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
         stroke="currentColor" stroke-width="2" aria-hidden="true">
      <circle cx="7.5" cy="7.5" r="5.5"/>
      <line x1="11.5" y1="11.5" x2="16" y2="16"/>
    </svg>
  </button>
</div>

<!-- ── Sidebar overlay ──────────────────────────────────────────────────── -->
<div class="sidebar-overlay" id="sidebar-overlay" onclick="closeSidebar()"></div>

<!-- ── Layout ───────────────────────────────────────────────────────────── -->
<div class="layout">
  <aside class="sidebar" id="sidebar" aria-label="Wiki navigation">
    ${nav}
  </aside>
  <main class="main">
    <article class="content">
      ${content}
    </article>
  </main>
</div>

<!-- ── Search overlay ───────────────────────────────────────────────────── -->
<div class="search-overlay" id="search-overlay"
     onclick="handleOverlayClick(event)" role="dialog" aria-modal="true"
     aria-label="Search">
  <div class="search-box">
    <div class="search-input-row">
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none"
           stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="7.5" cy="7.5" r="5.5"/>
        <line x1="11.5" y1="11.5" x2="16" y2="16"/>
      </svg>
      <input class="search-input" id="search-input" type="search"
             placeholder="Search wiki…" autocomplete="off" spellcheck="false">
      <span class="search-esc" onclick="closeSearch()">ESC</span>
    </div>
    <div class="search-results" id="search-results">
      <div class="search-hint">Start typing to search all pages</div>
    </div>
  </div>
</div>

<script>
  var ROOT = ${JSON.stringify(rootPrefix)};

  /* ── Sidebar ──────────────────────────────────────────────────────────── */
  function toggleSidebar() {
    var s = document.getElementById('sidebar');
    var o = document.getElementById('sidebar-overlay');
    var open = s.classList.toggle('open');
    o.classList.toggle('show', open);
  }
  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('show');
  }

  /* ── Search ───────────────────────────────────────────────────────────── */
  var idx = null;

  function openSearch() {
    document.getElementById('search-overlay').classList.add('show');
    var inp = document.getElementById('search-input');
    inp.focus();
    if (!idx) loadIndex();
  }
  function closeSearch() {
    document.getElementById('search-overlay').classList.remove('show');
    document.getElementById('search-input').value = '';
    document.getElementById('search-results').innerHTML =
      '<div class="search-hint">Start typing to search all pages</div>';
  }
  function handleOverlayClick(e) {
    if (e.target === document.getElementById('search-overlay')) closeSearch();
  }

  function loadIndex() {
    fetch(ROOT + 'search-index.json')
      .then(function(r) { return r.json(); })
      .then(function(data) { idx = data; })
      .catch(function(e) { console.error('Search index load failed', e); });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeSearch();
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
  });

  document.getElementById('search-input').addEventListener('input', function(e) {
    var q = e.target.value.trim().toLowerCase();
    var el = document.getElementById('search-results');
    if (!q || !idx) {
      el.innerHTML = '<div class="search-hint">Start typing to search all pages</div>';
      return;
    }
    var hits = idx.filter(function(p) {
      return p.title.toLowerCase().includes(q) || p.text.toLowerCase().includes(q);
    }).slice(0, 15);
    if (!hits.length) {
      el.innerHTML = '<div class="search-hint">No results for <strong>' +
        escHtmlJS(q) + '</strong></div>';
      return;
    }
    el.innerHTML = hits.map(function(p) {
      var tl = p.text.toLowerCase();
      var si = tl.indexOf(q);
      var excerpt = si >= 0
        ? p.text.slice(Math.max(0, si - 50), si + 130)
        : p.text.slice(0, 180);
      var snip = hlText(excerpt, q);
      return '<a class="search-result" href="'+ROOT+p.path+'">' +
        '<div class="sr-title">' + hlText(p.title, q) + '</div>' +
        '<div class="sr-snippet">' + snip + '</div>' +
        '<div class="sr-path">' + escHtmlJS(p.path) + '</div>' +
        '</a>';
    }).join('');
  });

  function escHtmlJS(s) {
    return String(s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* Highlight all occurrences of q in text (case-insensitive, no regex) */
  function hlText(text, q) {
    var out = '';
    var tl  = text.toLowerCase();
    var i   = 0;
    while (i < text.length) {
      var j = tl.indexOf(q, i);
      if (j === -1) { out += escHtmlJS(text.slice(i)); break; }
      out += escHtmlJS(text.slice(i, j));
      out += '<mark>' + escHtmlJS(text.slice(j, j + q.length)) + '</mark>';
      i = j + q.length;
    }
    return out;
  }
</script>
</body>
</html>`;
}

// ── HTML-escape helper (Node side) ──────────────────────────────────────────

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ── Process a single markdown file ──────────────────────────────────────────

function processFile({ srcPath, outPath, depth, navData, searchIndex }) {
  const raw   = fs.readFileSync(srcPath, 'utf8');
  const slug  = path.basename(srcPath, '.md');
  const title = extractTitle(raw, slug);

  // 1) resolve [[wikilinks]] → markdown links before parsing
  const resolved = resolveWikilinks(raw, depth);

  // 2) render markdown → HTML
  const content = marked(resolved);

  // 3) build nav & root prefix
  const rootPrefix = depth > 0 ? '../' : '';
  const nav        = renderNav(navData, rootPrefix);

  // 4) emit HTML
  const html = buildHtml({ title, content, nav, rootPrefix });
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html, 'utf8');

  // 5) add to search index (strip markdown syntax for clean text)
  const plainText = raw
    .replace(/^#+\s+/gm, '')          // headings
    .replace(/\[\[([^\]]+)\]\]/g, '$1') // wikilinks
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // md links
    .replace(/[*_`>#-]/g, '')          // formatting chars
    .replace(/\s+/g, ' ')
    .trim();

  const relPath = path.relative(OUT_DIR, outPath).replace(/\\/g, '/');
  searchIndex.push({ title, slug, path: relPath, text: plainText.slice(0, 3000) });
}

// ── Main build ───────────────────────────────────────────────────────────────

function build() {
  // Clean output dir
  if (fs.existsSync(OUT_DIR)) fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR);

  const navData     = buildNavData();
  const searchIndex = [];

  // Root-level pages: index.md, connections.md
  for (const f of fs.readdirSync(WIKI_DIR)) {
    if (!f.endsWith('.md') || f.startsWith('.')) continue;
    processFile({
      srcPath:     path.join(WIKI_DIR, f),
      outPath:     path.join(OUT_DIR, f.slice(0, -3) + '.html'),
      depth:       0,
      navData,
      searchIndex,
    });
  }

  // Summaries
  const summariesDir = path.join(WIKI_DIR, 'summaries');
  if (fs.existsSync(summariesDir)) {
    for (const f of fs.readdirSync(summariesDir)) {
      if (!f.endsWith('.md') || f.startsWith('.') || f === '.gitkeep') continue;
      processFile({
        srcPath: path.join(summariesDir, f),
        outPath: path.join(OUT_DIR, 'summaries', f.slice(0, -3) + '.html'),
        depth:   1,
        navData,
        searchIndex,
      });
    }
  }

  // Concepts
  const conceptsDir = path.join(WIKI_DIR, 'concepts');
  if (fs.existsSync(conceptsDir)) {
    for (const f of fs.readdirSync(conceptsDir)) {
      if (!f.endsWith('.md') || f.startsWith('.') || f === '.gitkeep') continue;
      processFile({
        srcPath: path.join(conceptsDir, f),
        outPath: path.join(OUT_DIR, 'concepts', f.slice(0, -3) + '.html'),
        depth:   1,
        navData,
        searchIndex,
      });
    }
  }

  // Outputs (briefings, Q&A answers)
  if (fs.existsSync(OUTPUTS_DIR)) {
    for (const f of fs.readdirSync(OUTPUTS_DIR)) {
      if (!f.endsWith('.md') || f.startsWith('.') || f === '.gitkeep') continue;
      processFile({
        srcPath: path.join(OUTPUTS_DIR, f),
        outPath: path.join(OUT_DIR, 'outputs', f.slice(0, -3) + '.html'),
        depth:   1,
        navData,
        searchIndex,
      });
    }
  }

  // ── Graph page ──────────────────────────────────────────────────────────
  buildGraphPage(navData, searchIndex);

  // ── Ask page ────────────────────────────────────────────────────────────
  buildAskPage(navData);

  // Write search index
  fs.writeFileSync(
    path.join(OUT_DIR, 'search-index.json'),
    JSON.stringify(searchIndex),
    'utf8',
  );

  console.log(`✅  Built ${searchIndex.length} pages → ${OUT_DIR}/`);
}

// ── Build graph data from wikilinks ──────────────────────────────────────────

function buildGraphData() {
  const nodes = [];
  const edges = [];
  const seen  = new Set();

  function scanDir(dir, type, prefix) {
    if (!fs.existsSync(dir)) return;
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith('.md') || f.startsWith('.') || f === '.gitkeep') continue;
      const slug = f.slice(0, -3);
      const md   = fs.readFileSync(path.join(dir, f), 'utf8');
      const title = extractTitle(md, slug);
      nodes.push({ id: slug, label: title, type, href: `${prefix}/${slug}.html` });
      seen.add(slug);

      // Extract wikilinks
      const links = [];
      md.replace(/\[\[([^\]]+)\]\]/g, (_m, target) => {
        links.push(target);
      });
      for (const target of links) {
        edges.push({ source: slug, target });
      }
    }
  }

  scanDir(path.join(WIKI_DIR, 'summaries'), 'summary', 'summaries');
  scanDir(path.join(WIKI_DIR, 'concepts'),  'concept', 'concepts');

  // Filter edges to only include nodes that exist
  const validEdges = edges.filter(e => seen.has(e.source) && seen.has(e.target));

  return { nodes, edges: validEdges };
}

function buildGraphPage(navData, _searchIndex) {
  const graphData = buildGraphData();
  const nav = renderNav(navData, '');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#0d1117">
  <title>Graph | Knowledge Base</title>
  <style>
    :root {
      --bg: #0d1117; --bg-nav: #161b22; --bg-surface: #1c2128;
      --text: #c9d1d9; --text-strong: #e6edf3; --text-muted: #8b949e;
      --accent: #58a6ff; --border: #30363d; --nav-w: 265px; --bar-h: 52px;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: var(--bg); color: var(--text); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; overflow: hidden; }
    .topbar { position: fixed; inset: 0 0 auto 0; z-index: 100; height: var(--bar-h); background: var(--bg-nav); border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 10px; padding: 0 14px; }
    .topbar-title { flex: 1; font-size: 15px; font-weight: 600; color: var(--text-strong); }
    #graph-canvas { position: fixed; top: var(--bar-h); left: 0; right: 0; bottom: 0; }
    .graph-legend { position: fixed; bottom: 16px; right: 16px; background: var(--bg-surface); border: 1px solid var(--border); border-radius: 8px; padding: 12px 16px; font-size: 13px; z-index: 10; }
    .legend-item { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
    .legend-dot { width: 10px; height: 10px; border-radius: 50%; }
    .tooltip { position: fixed; background: var(--bg-surface); border: 1px solid var(--border); border-radius: 6px; padding: 8px 12px; font-size: 13px; color: var(--text-strong); pointer-events: none; z-index: 50; display: none; max-width: 300px; }
  </style>
</head>
<body>
<div class="topbar">
  <span class="topbar-title">🕸️ Knowledge Graph</span>
  <span style="font-size:12px;color:var(--text-muted)">Drag to pan · Scroll to zoom · Click a node to open</span>
</div>
<canvas id="graph-canvas"></canvas>
<div class="graph-legend">
  <div class="legend-item"><span class="legend-dot" style="background:#58a6ff"></span> Concept</div>
  <div class="legend-item"><span class="legend-dot" style="background:#7ee787"></span> Summary</div>
</div>
<div class="tooltip" id="tooltip"></div>
<script>
var GRAPH = ${JSON.stringify(graphData)};

var canvas = document.getElementById('graph-canvas');
var ctx = canvas.getContext('2d');
var tooltip = document.getElementById('tooltip');
var dpr = window.devicePixelRatio || 1;
var W, H;

function resize() {
  var bar = ${JSON.stringify(52)};
  W = window.innerWidth; H = window.innerHeight - bar;
  canvas.width = W * dpr; canvas.height = H * dpr;
  canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
resize();
window.addEventListener('resize', function() { resize(); draw(); });

// Force layout
var nodes = GRAPH.nodes.map(function(n, i) {
  var angle = (i / GRAPH.nodes.length) * Math.PI * 2;
  var r = Math.min(W, H) * 0.35;
  return { id: n.id, label: n.label, type: n.type, href: n.href,
           x: W/2 + Math.cos(angle) * r * (0.5 + Math.random() * 0.5),
           y: H/2 + Math.sin(angle) * r * (0.5 + Math.random() * 0.5),
           vx: 0, vy: 0 };
});
var nodeMap = {};
nodes.forEach(function(n) { nodeMap[n.id] = n; });
var edges = GRAPH.edges.filter(function(e) { return nodeMap[e.source] && nodeMap[e.target]; });

// Simple force simulation
function tick() {
  var k = 0.01;
  // Repulsion
  for (var i = 0; i < nodes.length; i++) {
    for (var j = i + 1; j < nodes.length; j++) {
      var dx = nodes[j].x - nodes[i].x;
      var dy = nodes[j].y - nodes[i].y;
      var d = Math.sqrt(dx*dx + dy*dy) || 1;
      var f = 8000 / (d * d);
      nodes[i].vx -= dx/d * f; nodes[i].vy -= dy/d * f;
      nodes[j].vx += dx/d * f; nodes[j].vy += dy/d * f;
    }
  }
  // Attraction (edges)
  edges.forEach(function(e) {
    var s = nodeMap[e.source], t = nodeMap[e.target];
    if (!s || !t) return;
    var dx = t.x - s.x, dy = t.y - s.y;
    var d = Math.sqrt(dx*dx + dy*dy) || 1;
    var f = (d - 120) * k;
    s.vx += dx/d * f; s.vy += dy/d * f;
    t.vx -= dx/d * f; t.vy -= dy/d * f;
  });
  // Center gravity
  nodes.forEach(function(n) {
    n.vx += (W/2 - n.x) * 0.001;
    n.vy += (H/2 - n.y) * 0.001;
    n.vx *= 0.85; n.vy *= 0.85;
    n.x += n.vx; n.y += n.vy;
  });
}

// Pan/zoom
var panX = 0, panY = 0, zoom = 1;
var dragging = false, dragStart = null;

canvas.addEventListener('wheel', function(e) {
  e.preventDefault();
  var f = e.deltaY > 0 ? 0.92 : 1.08;
  zoom *= f;
  zoom = Math.max(0.2, Math.min(5, zoom));
  draw();
}, { passive: false });

canvas.addEventListener('mousedown', function(e) {
  dragging = true; dragStart = { x: e.clientX, y: e.clientY, px: panX, py: panY };
});
canvas.addEventListener('mousemove', function(e) {
  if (dragging && dragStart) {
    panX = dragStart.px + (e.clientX - dragStart.x);
    panY = dragStart.py + (e.clientY - dragStart.y);
    draw();
  }
  // Tooltip
  var mx = (e.clientX - panX) / zoom, my = (e.clientY - 52 - panY) / zoom;
  var hit = null;
  nodes.forEach(function(n) {
    var d = Math.sqrt((n.x - mx)*(n.x - mx) + (n.y - my)*(n.y - my));
    if (d < (n.type === 'concept' ? 12 : 8)) hit = n;
  });
  if (hit) {
    tooltip.style.display = 'block';
    tooltip.style.left = (e.clientX + 12) + 'px';
    tooltip.style.top = (e.clientY + 12) + 'px';
    tooltip.textContent = hit.label;
    canvas.style.cursor = 'pointer';
  } else {
    tooltip.style.display = 'none';
    canvas.style.cursor = dragging ? 'grabbing' : 'grab';
  }
});
canvas.addEventListener('mouseup', function() { dragging = false; });
canvas.addEventListener('click', function(e) {
  if (dragging) return;
  var mx = (e.clientX - panX) / zoom, my = (e.clientY - 52 - panY) / zoom;
  nodes.forEach(function(n) {
    var d = Math.sqrt((n.x - mx)*(n.x - mx) + (n.y - my)*(n.y - my));
    if (d < (n.type === 'concept' ? 12 : 8)) {
      window.location.href = n.href;
    }
  });
});

function draw() {
  ctx.clearRect(0, 0, W, H);
  ctx.save();
  ctx.translate(panX, panY);
  ctx.scale(zoom, zoom);

  // Edges
  ctx.strokeStyle = 'rgba(88,166,255,0.15)';
  ctx.lineWidth = 1;
  edges.forEach(function(e) {
    var s = nodeMap[e.source], t = nodeMap[e.target];
    if (!s || !t) return;
    ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(t.x, t.y); ctx.stroke();
  });

  // Nodes
  nodes.forEach(function(n) {
    var r = n.type === 'concept' ? 10 : 6;
    var color = n.type === 'concept' ? '#58a6ff' : '#7ee787';
    ctx.beginPath();
    ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // Labels for concepts only at default zoom, all at higher zoom
  ctx.font = '11px -apple-system, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  nodes.forEach(function(n) {
    if (n.type === 'concept' || zoom > 1.2) {
      ctx.fillStyle = n.type === 'concept' ? 'rgba(230,237,243,0.9)' : 'rgba(200,200,200,0.6)';
      var label = n.label.length > 30 ? n.label.slice(0, 28) + '…' : n.label;
      ctx.fillText(label, n.x, n.y + (n.type === 'concept' ? 14 : 10));
    }
  });

  ctx.restore();
}

// Run simulation
var simSteps = 0;
function animate() {
  tick();
  draw();
  simSteps++;
  if (simSteps < 300) requestAnimationFrame(animate);
}
animate();
</script>
</body>
</html>`;

  fs.writeFileSync(path.join(OUT_DIR, 'graph.html'), html, 'utf8');
}

// ── Build Ask page ──────────────────────────────────────────────────────────

function buildAskPage(navData) {
  const nav = renderNav(navData, '');

  const askContent = [
    '<h1>Ask the Wiki</h1>',
    '<p>Submit a question and it will be answered using the knowledge base as context.',
    'Your question creates a GitHub Issue; Copilot reads the wiki and posts an answer.',
    'Answers are saved to <code>outputs/</code> and appear on this site.</p>',
    '',
    '<div style="margin: 24px 0;">',
    '  <textarea id="question" rows="4" placeholder="e.g. Which companies have acquired developer toolchain assets, and what does this mean for GitHub?"',
    '    style="width:100%;background:var(--bg-surface);color:var(--text-strong);border:1px solid var(--border);border-radius:8px;padding:14px;font-size:15px;font-family:inherit;resize:vertical;"></textarea>',
    '  <div style="margin-top:12px;display:flex;gap:12px;align-items:center;flex-wrap:wrap;">',
    '    <button id="ask-btn" onclick="submitQuestion()"',
    '      style="background:var(--accent);color:#0d1117;border:none;border-radius:6px;padding:10px 24px;font-size:15px;font-weight:600;cursor:pointer;">',
    '      Ask Question',
    '    </button>',
    '    <button id="brief-btn" onclick="submitBriefing()"',
    '      style="background:var(--bg-surface);color:var(--accent);border:1px solid var(--accent);border-radius:6px;padding:10px 24px;font-size:15px;font-weight:600;cursor:pointer;">',
    '      Generate Briefing',
    '    </button>',
    '    <span id="status" style="font-size:13px;color:var(--text-muted);"></span>',
    '  </div>',
    '</div>',
    '',
    '<div id="instructions" style="margin-top:24px;padding:16px;background:var(--bg-surface);border:1px solid var(--border);border-radius:8px;">',
    '  <h3 style="color:var(--text-strong);margin-bottom:8px;">How it works</h3>',
    '  <ol style="color:var(--text-muted);font-size:14px;padding-left:1.4em;">',
    '    <li>Your question is posted as a GitHub Issue with the <code>qa</code> label</li>',
    "    <li>You'll get a push notification — assign Copilot to the issue (one tap)</li>",
    '    <li>Copilot reads the wiki, writes an answer, and commits it to <code>outputs/</code></li>',
    '    <li>The site rebuilds and the answer appears in the Outputs section</li>',
    '  </ol>',
    '  <p style="margin-top:12px;font-size:13px;color:var(--text-muted);">',
    '    Briefings follow the same flow but use the Briefing Generator prompt for a structured &lt;800 word executive summary.',
    '  </p>',
    '</div>',
    '',
    '<script>',
    "var REPO = '2ooks/knowledge-base';",
    "var QA_BODY_TEMPLATE = 'Read WIKI_RULES.md, DELEGATION_SPEC.md, and wiki/index.md.\\n\\nAnswer this question by reading whatever wiki files you need:\\n\\n**QUESTION**\\n\\nWrite your answer as a new markdown file in outputs/ with a descriptive filename. Include [[wikilinks]] to the wiki articles you drew from. At the end, note any gaps where the wiki didn\\'t have enough info to fully answer.';",
    "var BRIEF_BODY = 'Read WIKI_RULES.md, DELEGATION_SPEC.md, wiki/connections.md, and wiki/index.md.\\n\\nGenerate a structured briefing document in outputs/ with filename briefing-' + new Date().toISOString().slice(0,10) + '.md covering:\\n\\n## Key Findings (3-5 max)\\nFor each: one-sentence headline, 2-3 sentences evidence, \"So what for us:\" connecting to Microsoft/GitHub.\\n\\n## Active Contradictions (2-3 max)\\n\\n## Open Questions (2-3 max)\\n\\n## Confidence Notes\\n\\nKeep under 800 words.';",
    '',
    'function submitQuestion() {',
    "  var q = document.getElementById('question').value.trim();",
    "  if (!q) { document.getElementById('status').textContent = 'Please enter a question.'; return; }",
    "  var body = QA_BODY_TEMPLATE.replace('QUESTION', q);",
    "  var title = 'Q&A: ' + (q.length > 80 ? q.slice(0, 77) + '...' : q);",
    "  var url = 'https://github.com/' + REPO + '/issues/new?template=qa.md&title=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(body) + '&labels=qa';",
    "  window.open(url, '_blank');",
    "  document.getElementById('status').textContent = 'Issue opened in new tab \\u2014 assign Copilot to get your answer.';",
    '}',
    '',
    'function submitBriefing() {',
    "  var title = 'Briefing: ' + new Date().toISOString().slice(0,10);",
    "  var url = 'https://github.com/' + REPO + '/issues/new?template=briefing.md&title=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(BRIEF_BODY) + '&labels=briefing';",
    "  window.open(url, '_blank');",
    "  document.getElementById('status').textContent = 'Briefing issue opened \\u2014 assign Copilot to generate it.';",
    '}',
    '</script>',
  ].join('\n');

  const html = buildHtml({
    title: 'Ask the Wiki',
    content: askContent,
    nav,
    rootPrefix: '',
  });

  fs.writeFileSync(path.join(OUT_DIR, 'ask.html'), html, 'utf8');
}

build();
