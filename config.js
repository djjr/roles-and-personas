// config.js — project-specific settings for the wiki viewer
//
// This is the ONLY file you need to edit when deploying this viewer
// for a new project. Everything in site.js and site.css is generic
// engine code that should not require modification.
//
// Load this before site.js in index.html:
//   <script src="config.js"></script>
//   <script src="site.js"></script>

const WIKI_CONFIG = {

  // ── Branding ──────────────────────────────────────────────────────────────
  // Displayed in the header and the auth overlay.
  // Raw HTML — you may use <em> or <strong> for styling.

  siteTitle:   'Ryan on Roles and Personas in LLMs and Society',
  siteSub:     'Research Notes and Resources Wiki Prototype',

  // Plain-text suffix for browser tab titles: "Page Name — {titleSuffix}"
  titleSuffix: 'DJJR Wiki Prototype',

  // ── Auth ──────────────────────────────────────────────────────────────────
  // Session storage key for the auth gate.
  // Change this between projects so sessions don't bleed across wikis
  // if they share the same browser origin.

  authKey:     'roles-wiki-authed',

  // ── Content paths ─────────────────────────────────────────────────────────
  // Path to the wiki/ directory, relative to index.html.

  wikiBase:    'wiki/',

  // Slug loaded when no hash is present (the "home" page).

  homeSlug:    'overview',

};
