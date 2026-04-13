// ── Config ────────────────────────────────────────────────────────────────────
//
// Serve from the project root: python3 -m http.server 8000
// Then open: http://localhost:8000/viewer/
//
// Project-specific values come from config.js (loaded before this file).
// Do not hardcode project strings here — edit config.js instead.

const WIKI_BASE  = WIKI_CONFIG.wikiBase;
const HOME_SLUG  = WIKI_CONFIG.homeSlug;

// ── State ─────────────────────────────────────────────────────────────────────

let navSections   = [];           // [{label, pages: [{slug, label}]}]
let allNavPages   = [];           // flat list for search
const tagIndex    = new Map();    // tag → [{slug, label, type}]
const previewCache = new Map();   // slug → rendered HTML string
let hoverTimer    = null;
let previewActive = false;

// ── YAML frontmatter parser ───────────────────────────────────────────────────
//
// Handles the four formats used in this wiki:
//   key: value
//   key: "quoted value"
//   tags: [a, b, c]
//   multiline:
//     - item one
//     - item two

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };

  const meta = {};
  const lines = match[1].split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Inline array: tags: [llm, pedagogy]
    const inlineArr = line.match(/^(\w+):\s*\[([^\]]*)\]\s*$/);
    if (inlineArr) {
      meta[inlineArr[1]] = inlineArr[2]
        .split(',')
        .map(s => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
      i++; continue;
    }

    // Multi-line array (key: then indented - items)
    const arrKey = line.match(/^(\w+):\s*$/);
    if (arrKey && i + 1 < lines.length && /^\s+-/.test(lines[i + 1])) {
      const key = arrKey[1];
      const vals = [];
      i++;
      while (i < lines.length && /^\s+-/.test(lines[i])) {
        vals.push(lines[i].replace(/^\s+-\s*/, '').replace(/^["']|["']$/g, '').trim());
        i++;
      }
      meta[key] = vals;
      continue;
    }

    // Simple key: value
    const simple = line.match(/^(\w+):\s*(.+)$/);
    if (simple) {
      meta[simple[1]] = simple[2].trim().replace(/^["']|["']$/g, '');
    }
    i++;
  }

  return { meta, body: match[2] };
}

// ── Slug utilities ────────────────────────────────────────────────────────────

function slugToLabel(slug) {
  return slug.split('/').pop()
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

// encodeURIComponent encodes '/' as '%2F', breaking subpath slugs.
// Encode each segment individually so 'sources/ksas-ai' → 'sources/ksas-ai'.
function encodePathSlug(s) {
  return s.split('/').map(encodeURIComponent).join('/');
}

// Build a full fetch path for a wiki slug. Appends .md only if the slug
// has no extension already — prevents raw/file.md → raw/file.md.md.
function wikiPath(slug) {
  const withExt = /\.\w+$/.test(slug) ? slug : slug + '.md';
  const base    = slug.startsWith('raw/') ? '' : WIKI_BASE;
  return base + encodePathSlug(withExt);
}

// ── Nav: build from wiki/index.md ─────────────────────────────────────────────

async function buildNavFromIndex() {
  const base = [
    {
      label: 'Wiki',
      pages: [
        { slug: 'overview', label: 'Overview' },
        { slug: 'index',    label: 'Index' },
        { slug: 'log',      label: 'Log' },
      ]
    }
  ];

  try {
    const resp = await fetch(WIKI_BASE + 'index.md', { cache: 'no-cache' });
    if (!resp.ok) return base;
    const text = await resp.text();

    let current = null;

    for (const line of text.split('\n')) {
      // Section heading: ## Sources  (wiki/sources/)
      // Also matches: ## Definitions  (wiki/definitions/)
      const sectionMatch = line.match(/^## ([^(\n]+?)(?:\s+\(wiki\/[^)]+\))?\s*$/);
      if (sectionMatch) {
        current = { label: sectionMatch[1].trim(), pages: [] };
        base.push(current);
        continue;
      }

      // Table row with a wikilink (skip empty / placeholder rows)
      if (current && line.includes('[[') && !line.includes('_(none yet)_')) {
        // Match only the path portion before any pipe-alias: [[path/slug|alias]]
        const linkMatch = line.match(/\[\[([^|\]]+)/);
        if (!linkMatch) continue;

        const slug  = linkMatch[1];
        let   label = slugToLabel(slug);

        // For the Definitions section, the second pipe-column is the term name —
        // much better than a slug-derived label. Strip the wikilink first so the
        // pipe inside [[path|alias]] doesn't corrupt the column split.
        if (current.label === 'Definitions') {
          const stripped = line.replace(/\[\[[^\]]+\]\]/g, '').split('|').map(c => c.trim()).filter(Boolean);
          // After removing [[...]], cols[0] = term name, cols[1] = domain, ...
          if (stripped.length >= 1) {
            const candidate = stripped[0].replace(/[_*]/g, '').trim();
            if (candidate && candidate.length < 60) label = candidate;
          }
        }

        current.pages.push({ slug, label });
      }
    }
  } catch (e) {
    console.warn('Could not parse index.md for nav:', e);
  }

  return base;
}

// ── Nav renderer ──────────────────────────────────────────────────────────────

function renderNav(currentSlug, filter = '') {
  const nav = document.getElementById('nav');
  const q   = filter.toLowerCase().trim();

  const html = navSections.map(section => {
    const pages = q
      ? section.pages.filter(p => p.label.toLowerCase().includes(q))
      : section.pages;
    if (!pages.length) return '';

//for (const p of pages) { console.log('nav-link:', p.slug, '|', p.label, '| href:', '#' + encodeURIComponent(p.slug)); }

    return `<div class="nav-section">${section.label}</div>` +
      pages.map(p =>
        `<a href="#${encodeURIComponent(p.slug)}"
            class="nav-link${p.slug === currentSlug ? ' active' : ''}">
           ${escapeHtml(p.label)}
         </a>`
      ).join('');
  }).join('');

  nav.innerHTML = html || '<p class="nav-loading">No matches.</p>';
}

// ── Global search overlay ─────────────────────────────────────────────────────

function buildSearchIndex() {
  allNavPages = navSections.flatMap(s => s.pages);
}

// ── Tag index ─────────────────────────────────────────────────────────────────
//
// Fetches all wiki pages in parallel and indexes them by tag.
// Runs once at startup; at ~36 pages it completes in well under a second.

async function buildTagIndex() {
  await Promise.all(allNavPages.map(async p => {
    try {
      const resp = await fetch(wikiPath(p.slug), { cache: 'no-cache' });
      if (!resp.ok) return;
      const { meta } = parseFrontmatter(await resp.text());
      for (const tag of toArray(meta.tags)) {
        if (!tagIndex.has(tag)) tagIndex.set(tag, []);
        tagIndex.get(tag).push({ slug: p.slug, label: p.label, type: meta.type || '' });
      }
    } catch {}
  }));
}

function renderSearch(query) {
  const el = document.getElementById('search-results');
  if (!query.trim()) { el.style.display = 'none'; return; }

  const q    = query.toLowerCase();
  const hits = allNavPages.filter(p => p.label.toLowerCase().includes(q));

  if (!hits.length) {
    el.innerHTML = `<div class="search-empty">No pages match "${escapeHtml(query)}"</div>`;
  } else {
    el.innerHTML = hits.map(p => {
      const type = p.slug.split('/')[0];
      return `<a class="search-hit" href="#${encodeURIComponent(p.slug)}">
        ${escapeHtml(p.label)}
        <span class="search-hit-type">${escapeHtml(type)}</span>
      </a>`;
    }).join('');
  }

  el.style.display = 'block';
}

// ── Markdown preprocessing ────────────────────────────────────────────────────

// Image extensions resolved as embeds rather than page transclusions.
const IMAGE_EXTS = /\.(png|jpe?g|gif|svg|webp|bmp|tiff?)$/i;

// Resolve ![[path/to/file]] transclusions.
// — Image embeds (![[photo.png]]) → <img> tag served from raw/assets/
// — Page embeds (![[sources/slug]]) → fetch markdown body and splice in
async function resolveTransclusions(md) {
  const pattern = /!\[\[([^\]]+)\]\]/g;
  const matches = [...md.matchAll(pattern)];
  for (const m of matches) {
    const slug = m[1];

    // Image embed — strip any leading path, serve from raw/assets/
    if (IMAGE_EXTS.test(slug)) {
      const filename = slug.split('/').pop();
      md = md.replace(m[0], `![${filename}](raw/assets/${filename})`);
      continue;
    }

    // Page transclusion — fetch and splice in the body
    try {
      const resp  = await fetch(wikiPath(slug), { cache: 'no-cache' });
      let   body  = resp.ok ? await resp.text() : `*(could not load: ${slug})*`;
      const { body: bodyOnly } = parseFrontmatter(body);
      md = md.replace(m[0], '\n\n' + bodyOnly + '\n\n');
    } catch {
      md = md.replace(m[0], `*(could not load: ${slug})*`);
    }
  }
  return md;
}

async function preprocess(md) {
  md = md.replace(/```dataviewjs[\s\S]*?```/g,
    '<span class="dataview-note">Dataview query — not rendered in web view</span>');
  md = md.replace(/```dataview[\s\S]*?```/g,
    '<span class="dataview-note">Dataview query — not rendered in web view</span>');

  md = await resolveTransclusions(md);

  // [[Target|Alias]] → markdown link
  md = md.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_, target, alias) =>
    `[${alias}](#${encodePathSlug(target)})`);

  // [[Target]] → markdown link
  md = md.replace(/\[\[([^\]]+)\]\]/g, (_, name) =>
    `[${name}](#${encodePathSlug(name)})`);

  return md;
}

// ── Frontmatter → metadata block ─────────────────────────────────────────────

function renderMeta(meta) {
  if (!meta || !Object.keys(meta).length) return '';

  const rows = [];

  // Tags — links into tag browse view
  const tags = toArray(meta.tags);
  if (tags.length) {
    const html = tags.map(t =>
      `<a class="meta-tag" href="#tag:${encodeURIComponent(t)}">${escapeHtml(t)}</a>`
    ).join('');
    rows.push(`<span class="meta-label">Tags</span><span class="meta-value">${html}</span>`);
  }

  // Dates
  if (meta.created) {
    rows.push(`<span class="meta-label">Created</span><span class="meta-value">${escapeHtml(meta.created)}</span>`);
  }
  if (meta.updated && meta.updated !== meta.created) {
    rows.push(`<span class="meta-label">Updated</span><span class="meta-value">${escapeHtml(meta.updated)}</span>`);
  }

  // Raw source files (read-only; shown as monospace paths, not links)
  const sources = toArray(meta.sources).filter(Boolean);
  if (sources.length) {
    const html = sources.map(s => `<span class="meta-file">${escapeHtml(s)}</span>`).join(' ');
    rows.push(`<span class="meta-label">Sources</span><span class="meta-value">${html}</span>`);
  }

  // Related pages (wikilink strings → actual links)
  const related = toArray(meta.related).filter(Boolean);
  const relLinks = related.map(r => {
    const m = r.match(/\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/);
    if (!m) return null;
    const slug  = m[1];
    const label = m[2] || slugToLabel(slug);
    return `<a href="#${encodePathSlug(slug)}">${escapeHtml(label)}</a>`;
  }).filter(Boolean);

  if (relLinks.length) {
    rows.push(`<span class="meta-label">Related</span><span class="meta-value">${relLinks.join(' · ')}</span>`);
  }

  if (!rows.length && !meta.type) return '';

  const typeClass = meta.type ? ` meta-type-${meta.type}` : '';
  const badge     = meta.type
    ? `<div class="meta-type-badge${typeClass}">${escapeHtml(meta.type)}</div>`
    : '';

  const grid = rows.length
    ? `<dl class="meta-grid">${rows.map(r => `<div class="meta-row">${r}</div>`).join('')}</dl>`
    : '';

  return `<div class="page-meta">${badge}${grid}</div>`;
}

// ── Tag browse page ───────────────────────────────────────────────────────────

function loadTagPage(tag) {
  renderNav('');
  const main = document.getElementById('content');
  main.removeAttribute('data-type');
  document.title = `Tag: ${tag} — ${WIKI_CONFIG.titleSuffix}`;

  const pages = tagIndex.get(tag) || [];

  if (!pages.length) {
    main.innerHTML = `<h1>Tag: ${escapeHtml(tag)}</h1><p>No pages indexed with this tag yet.</p>`;
    window.scrollTo(0, 0);
    return;
  }

  // Group by page type, preserving a sensible display order
  const ORDER = ['finding', 'definition', 'source', 'explanation', 'query', 'overview'];
  const byType = new Map();
  for (const p of pages) {
    const t = p.type || 'other';
    if (!byType.has(t)) byType.set(t, []);
    byType.get(t).push(p);
  }

  const sorted = [...byType.entries()].sort(([a], [b]) => {
    const ai = ORDER.indexOf(a), bi = ORDER.indexOf(b);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });

  const sections = sorted.map(([type, ps]) => {
    const items = ps
      .map(p => `<li><a href="#${encodePathSlug(p.slug)}">${escapeHtml(p.label)}</a></li>`)
      .join('');
    return `<h2>${escapeHtml(type)}</h2><ul>${items}</ul>`;
  }).join('');

  main.innerHTML = `<div class="page-type-label" data-type="tag">tag</div>
    <h1>Tag: ${escapeHtml(tag)}</h1>
    <p>${pages.length} page${pages.length !== 1 ? 's' : ''} tagged <strong>${escapeHtml(tag)}</strong></p>
    ${sections}`;
  window.scrollTo(0, 0);
}

// ── Page loader ───────────────────────────────────────────────────────────────

function getSlug() {
  const raw = window.location.hash.slice(1);
  return raw ? decodeURIComponent(raw) : HOME_SLUG;
}

async function loadPage(slug) {
  renderNav(slug);

  const main = document.getElementById('content');
  main.innerHTML = '<p class="loading">Loading…</p>';
  main.removeAttribute('data-type');

  // PDFs and other binary assets: show inline iframe rather than fetching as text
  if (/\.(pdf|png|jpg|jpeg|gif|svg)$/i.test(slug)) {
    const url = wikiPath(slug);
    const isPdf = slug.toLowerCase().endsWith('.pdf');
    main.innerHTML = isPdf
      ? `<p class="meta-file" style="margin-bottom:1rem;">
           ${escapeHtml(slug)} &mdash;
           <a href="${url}" target="_blank">open in new tab</a>
         </p>
         <iframe src="${url}" style="width:100%;height:80vh;border:none;"></iframe>`
      : `<img src="${url}" style="max-width:100%;" alt="${escapeHtml(slug)}">`;
    document.title = slugToLabel(slug) + ' \u2014 ' + WIKI_CONFIG.titleSuffix;
    window.scrollTo(0, 0);
    return;
  }

  const filename = wikiPath(slug);

  try {
    const resp = await fetch(filename, { cache: 'no-cache' });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const raw  = await resp.text();

    const { meta, body } = parseFrontmatter(raw);
    const processed      = await preprocess(body);
    const contentHtml    = marked.parse(processed);
    const metaHtml       = renderMeta(meta);

    // Apply page type to main for CSS targeting
    if (meta.type) main.dataset.type = meta.type;

    // Type badge injected before the content (appears above H1)
    const badge = meta.type
      ? `<div class="page-type-label" data-type="${escapeHtml(meta.type)}">${escapeHtml(meta.type)}</div>`
      : '';

    main.innerHTML = badge + contentHtml + metaHtml;

    // Update document title from frontmatter
    document.title = (meta.title || slugToLabel(slug)) + ` — ${WIKI_CONFIG.titleSuffix}`;

    // Backfill nav label with frontmatter title for future previews
    if (meta.title) {
      for (const section of navSections) {
        for (const p of section.pages) {
          if (p.slug === slug) p.label = meta.title;
        }
      }
    }

  } catch (err) {
    main.innerHTML = `<p class="error">Could not load <strong>${escapeHtml(filename)}</strong>: ${escapeHtml(err.message)}</p>`;
    document.title = `Not found — ${WIKI_CONFIG.titleSuffix}`;
  }

  window.scrollTo(0, 0);
}

// ── Page preview (hover popup) ────────────────────────────────────────────────
//
// Event delegation on both #nav and #content means we never need to re-wire
// listeners after a page render. Hover delay prevents flicker on casual mousing.
// Fetched content is cached; subsequent hovers are instant.

const previewEl = (() => {
  const el = document.getElementById('page-preview');
  el.addEventListener('mouseenter', () => { previewActive = true;  clearTimeout(hoverTimer); });
  el.addEventListener('mouseleave', () => { previewActive = false; scheduleHidePreview(); });
  return el;
})();

function scheduleHidePreview() {
  clearTimeout(hoverTimer);
  hoverTimer = setTimeout(() => {
    if (!previewActive) previewEl.style.display = 'none';
  }, 400);
}

function positionPreview(x, y) {
  const PAD = 14, W = 360, H = 400;
  let left = x + PAD, top = y + PAD;
  if (left + W > window.innerWidth  - PAD) left = x - W - PAD;
  if (top  + H > window.innerHeight - PAD) top  = y - H - PAD;
  if (left < PAD) left = PAD;
  if (top  < PAD) top  = PAD;
  previewEl.style.left = left + 'px';
  previewEl.style.top  = top  + 'px';
}

async function showPreview(slug, label, x, y) {
  clearTimeout(hoverTimer);
  hoverTimer = setTimeout(async () => {
    positionPreview(x, y);

    if (previewCache.has(slug)) {
      previewEl.innerHTML     = previewCache.get(slug);
      previewEl.style.display = 'block';
      return;
    }

    previewEl.innerHTML     = `<div class="preview-title">${escapeHtml(label)}</div><p class="loading">Loading…</p>`;
    previewEl.style.display = 'block';

    try {
      const resp = await fetch(wikiPath(slug), { cache: 'no-cache' });
      if (!resp.ok) throw new Error('not found');
      const raw = await resp.text();

      const { meta, body } = parseFrontmatter(raw);
      // First ~50 non-blank lines — enough context without parsing the whole page
      const snippet = body.split('\n').slice(0, 50).join('\n');
      const html = `<div class="preview-title">${escapeHtml(meta.title || label)}</div>` +
                   marked.parse(await preprocess(snippet));

      previewCache.set(slug, html);
      previewEl.innerHTML     = html;
      previewEl.style.display = 'block';
    } catch {
      previewEl.style.display = 'none';
    }
  }, 260);
}

function attachPreviewDelegation(containerEl) {
  if (!containerEl) return;

  containerEl.addEventListener('mouseover', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const slug = decodeURIComponent(anchor.getAttribute('href').slice(1));
    if (slug.startsWith('tag:')) return;
    if (/\.(pdf|png|jpg|jpeg|gif|svg)$/i.test(slug)) return;
    if (slug === getSlug()) return;
    const page  = allNavPages.find(p => p.slug === slug);
    const label = page ? page.label : slugToLabel(slug);
    showPreview(slug, label, e.clientX, e.clientY);
  });

  containerEl.addEventListener('mouseout', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    if (e.relatedTarget && (e.relatedTarget === previewEl || previewEl.contains(e.relatedTarget))) return;
    scheduleHidePreview();
  });
}

// ── Utilities ─────────────────────────────────────────────────────────────────

function escapeHtml(s) {
  return String(s ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function toArray(v) {
  if (!v) return [];
  return Array.isArray(v) ? v : [v];
}

// ── Init ──────────────────────────────────────────────────────────────────────

async function navigate() {
  const hash = decodeURIComponent(window.location.hash.slice(1));
  if (hash.startsWith('tag:')) {
    loadTagPage(hash.slice(4));
  } else {
    await loadPage(hash || HOME_SLUG);
  }
}

window.addEventListener('hashchange', () => {
  document.getElementById('search-results').style.display = 'none';
  document.getElementById('global-search').value = '';
  navigate();
});

document.addEventListener('DOMContentLoaded', async () => {
  // Inject project branding from config.js into header and auth overlay
  const nameEl = document.querySelector('.site-name');
  if (nameEl) { nameEl.innerHTML = WIKI_CONFIG.siteTitle; nameEl.href = '#' + WIKI_CONFIG.homeSlug; }
  document.querySelectorAll('.site-sub, .auth-sub').forEach(el => { el.innerHTML = WIKI_CONFIG.siteSub; });
  document.querySelectorAll('.auth-title').forEach(el => { el.innerHTML = WIKI_CONFIG.siteTitle; });
  document.title = WIKI_CONFIG.titleSuffix;

  // Build search results overlay element
  const searchResults = document.createElement('div');
  searchResults.id    = 'search-results';
  document.body.appendChild(searchResults);

  // Wire global search
  const searchInput = document.getElementById('global-search');
  searchInput.addEventListener('input', () => renderSearch(searchInput.value));
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      searchResults.style.display = 'none';
      searchInput.value = '';
    }
  });
  document.addEventListener('click', e => {
    if (!searchResults.contains(e.target) && e.target !== searchInput) {
      searchResults.style.display = 'none';
    }
  });

  // Intercept search result clicks to close the overlay
  searchResults.addEventListener('click', () => {
    searchResults.style.display = 'none';
    searchInput.value = '';
  });

  // Build nav from wiki/index.md
  navSections = await buildNavFromIndex();
  buildSearchIndex();

  // Build tag index in the background — doesn't block initial render
  buildTagIndex();

  // Load initial page, then attach hover delegation
  await navigate();
  attachPreviewDelegation(document.getElementById('nav'));
  attachPreviewDelegation(document.getElementById('content'));
});
