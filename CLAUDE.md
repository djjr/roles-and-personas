# CLAUDE.md — LLM Wiki Schema

---

## ★ PROJECT CONTEXT

**Project name:** LLM Role-Playing and Personas

**Substantive focus:**
This wiki covers two interlocking domains that we are thinking about
*analogically* — back and forth — in order to produce original insights in
both:

1. **LLM domain**: role-playing and personas in large language models —
   how they are elicited, what mechanisms underlie them, what they reveal
   about model internals, how they relate to alignment and identity.

2. **Sociology/philosophy domain**: theories of role, role-taking, and
   role structure — Mead, Goffman, Sartre, Natanson, Bourdieu, and others
   who have theorized what it means for a person (or agent) to occupy,
   inhabit, or perform a role.

**The central question this wiki is building toward:**
What can the sociological and philosophical literature on human role-taking
teach us about what happens when an LLM adopts a persona — and vice versa?
What does LLM persona behavior reveal about assumptions buried in the
sociological literature?

**Audience calibration:**
All explanatory writing should be pitched to a post-PhD researcher who is
actively studying this topic with broad expertise in adjacent fields. Do not
over-explain. Assume familiarity with standard ML concepts (attention,
fine-tuning, RLHF, etc.) and with major figures in sociology and philosophy
of mind. Precision and density are virtues. Hedging and hand-holding are not.

**Domain tags to use:**
- `llm` — LLM/ML-side material
- `sociology` — sociological role theory
- `philosophy` — philosophy of mind, action, identity
- `analogy` — pages that explicitly bridge the two domains
- `empirical` — findings from papers or experiments
- `theoretical` — conceptual/theoretical claims

---

## Directory Layout

```
<project-root>/
├── CLAUDE.md            ← this file (schema + instructions)
├── README.md            ← human-readable setup guide
├── raw/                 ← source documents (READ ONLY — never modify)
│   ├── assets/          ← images, PDFs, attachments
│   └── *.md             ← clipped articles, notes, transcripts
└── wiki/                ← your output layer (you own this entirely)
    ├── StartHere.md     ← human-facing entry point; short, link-rich, always current
    ├── index.md         ← master catalog of all wiki pages (machine-readable)
    ├── log.md           ← append-only operation history
    ├── overview.md      ← top-level synthesis (update after major ingests)
    ├── definitions/     ← short, precise term definitions (hover targets)
    ├── findings/        ← extracted claims and empirical results
    ├── entities/        ← people, orgs, papers, tools
    ├── sources/         ← reading notes / précis (one per raw file)
    ├── queries/         ← saved answers to questions asked of this wiki
    └── overviews/       ← domain synthesis pages
```

**StartHere.md** is the human-facing gateway — 2–4 sentences per domain, link-heavy, written to invite exploration. Update it when the wiki's central concepts or framing evolve meaningfully. It is *not* a synthesis (that's overview.md) and *not* a catalog (that's index.md) — it is the door.

**The `raw/` directory is the source of truth. You read from it; you never
write to it.**

---

## Page Types

This wiki uses five page types. Use them precisely — they serve different
functions.

### 1. Definition  (wiki/definitions/)
A short, precise definition of a technical term or a thinker's specific
concept. These exist primarily as **wikilink targets** — other pages link to
them so readers get hover definitions.

- Length: 1–4 sentences, rarely more than a short paragraph.
- Include: the term, the domain it comes from, a clean definition, and a note
  on who introduced it or how it is used in this wiki's context.
- For thinker-specific concepts, name the thinker explicitly:
  "Mead — Generalized Other", not just "Generalized Other".
- After creating a definition page, **scan existing wiki pages** for uses of
  that term that should now be wikilinked to it.
- Frontmatter type: definition

Example filename: wiki/definitions/generalized-other-mead.md

---

### 2. Explanation  (wiki/overviews/ or inline)
A slightly more developed treatment of a concept — enough to orient someone
who has encountered the term but not studied it in depth. More discursive than
a definition; may include examples, context, or comparison with related ideas.

- Pitch to the audience calibration above. Do not over-explain.
- Link liberally to definitions.
- Frontmatter type: explanation

---

### 3. Finding / Claim  (wiki/findings/)
A discrete empirical result, theoretical claim, or argument extracted from
a source. First-class citizens in this wiki — not just bullets inside a source
summary.

Why first-class? Because a single finding may be supported by multiple sources,
contradicted by others, and cited on multiple concept pages.

Structure:
  ## Claim
  [One clear sentence]

  ## Evidence
  - [Source]: [brief description] → [[sources/slug]]

  ## Contradicted by / Tension with
  - [if applicable]

  ## Relevant concepts
  [[concept-1]], [[concept-2]]

  ## Notes

Frontmatter type: finding

---

### 4. Source / Reading Note  (wiki/sources/)
A 1–2 paragraph précis of a raw source. Not a summary of everything — a
distillation of what matters *for this project's questions*.

Structure:
  ## Précis
  [1-2 paragraphs. Core argument. What does this contribute to our central
   questions? What's notable or surprising?]

  ## Key terms introduced
  [Links to definition pages, or terms needing definition pages]

  ## Findings extracted
  [Links to wiki/findings/ pages created from this source]

  ## Tensions / contradictions with existing wiki

  ## Raw source
  [[raw/filename.md]]

Frontmatter type: source

---

### 5. Query / Synthesis  (wiki/queries/)
A saved answer to a question asked of this wiki. Good syntheses compound —
they become citable by later queries.

Frontmatter type: query

---

## YAML Frontmatter (all pages)

```yaml
---
title: "Page Title"
type: definition | explanation | finding | source | query | overview
tags: [llm, sociology, philosophy, analogy, empirical, theoretical]
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources:
  - "raw/filename.md"
related:
  - "[[path/to/other-page]]"
---
```

**YAML formatting rules** (Obsidian-compatible):
- `sources` and `related` must always be block lists, never inline.
- Wikilinks in `related` must be quoted strings: `"[[path/to/page]]"`.
- Plain strings (filenames, etc.) in `sources` must also be quoted.
- Empty fields: use `[]` on the same line, e.g. `related: []`.
- `tags` may remain as an inline flow sequence: `[llm, empirical]`.

Use [[wikilinks]] liberally in body text. Every link is an edge in Obsidian's graph.
Filenames: lowercase, hyphens, no spaces.

---

## Operations

### WIKI RUN  ← the primary recurring operation

Triggered when the user says "wiki run" (or "run the wiki", "check for new
files").

**Autonomous multi-step operation. Complete it fully without asking for
intermediate approval unless you hit a genuine decision point.**

Workflow:

1. Check raw/ for new files — files not yet represented by a source page in
   wiki/sources/. (Use wiki/log.md or wiki/index.md to determine what has
   already been processed.)
2. For each new file:
   a. Read the file.
   b. Write a source page at wiki/sources/<slug>.md (précis format above).
   c. Extract findings/claims: for each significant result or claim, create
      or update a page in wiki/findings/.
   d. Identify new technical vocabulary: create wiki/definitions/<slug>.md
      for terms central enough to warrant hover-link definitions.
   e. Link scan: scan existing wiki pages for uses of newly defined terms;
      add wikilinks where missing.
   f. Update wiki/index.md.
   g. Append to wiki/log.md.
3. Report back:
   - Files processed
   - New pages created (by type)
   - Findings extracted
   - Definitions added
   - Any flags or uncertainties

If no new files in raw/, say so and ask whether to query or lint instead.

---

### INGEST (single file, with discussion)

Triggered when the user says "ingest raw/<filename>" and wants to stay
involved. Same as wiki run for one file, but pause after the précis to discuss
with the user before proceeding.

---

### QUERY

1. Read wiki/index.md to identify relevant pages.
2. Read those pages.
3. Synthesize an answer with wikilink citations.
4. Ask whether to save it. File good syntheses at wiki/queries/<slug>.md.
5. Log it.

---

### LINT

Check for:
1. Orphan pages — no inbound wikilinks
2. Broken wikilinks — [[targets]] that don't resolve to a file
3. Missing definitions — terms used across multiple pages without definition pages
4. Analogy gaps — findings or definitions in only one domain with no cross-domain
   links (these are opportunities)
5. Contradictions between finding pages
6. Stale claims — time-sensitive claims from sources older than 6 months
7. Index drift — pages not listed in index.md

Log results and suggest next actions.

---

## Log Format

wiki/log.md is append-only, newest entries at top:
  ## [YYYY-MM-DD] <operation> | <title>

Operations: wiki-run, ingest, query, lint, init, schema-update

Greppable: grep "^## \[" wiki/log.md | head -10

---

## Session Startup

Do this silently at the start of every session:
1. Read this file.
2. Read the last 5 entries in wiki/log.md.
3. Read wiki/index.md.

Then greet the user with a one-line status:
  "Wiki has N pages (D definitions, F findings, S sources). Last activity:
   [date + operation]. What are we doing today?"

---

## Scalability Note

This file is designed for reuse across multiple Obsidian project folders.
The PROJECT CONTEXT section at the top is the only thing that changes between
projects. Everything below it is generic wiki mechanics.

To instantiate a new project wiki: copy this repo skeleton, edit PROJECT
CONTEXT, initialize a new log entry. Done.
