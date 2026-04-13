# LLM Wiki

A personal knowledge base maintained by Claude Code (or any LLM agent), viewed
in Obsidian. Based on [Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).

## The idea in one sentence

Instead of re-deriving knowledge from raw sources every time you ask a
question, the LLM incrementally **builds and maintains a wiki** — a persistent,
interlinked collection of markdown files that gets richer with every source you
add and every question you ask.

## How to use this

### Setup
1. Open this folder in Obsidian (File → Open Vault → this directory).
2. Install the Dataview plugin in Obsidian for dynamic tables.
3. Open Claude Code (or Claude Cowork) pointed at this directory.

### Daily workflow
1. **Add sources**: drop markdown files (articles, notes, transcripts) into
   `raw/`. Use the Obsidian Web Clipper extension to clip web articles to
   markdown.
2. **Ingest**: tell Claude Code: `ingest raw/my-article.md`
3. **Query**: ask Claude Code questions. Good answers get filed as query pages.
4. **Browse**: use Obsidian's graph view to explore connections. The graph is
   your map.
5. **Lint**: periodically say `lint the wiki` to health-check for orphans,
   contradictions, gaps.

### The schema
`CLAUDE.md` is the instruction file that makes Claude a disciplined wiki
maintainer rather than a generic chatbot. Read it to understand what Claude
will do. Edit it to change conventions.

## Directory structure

```
llm-wiki/
├── CLAUDE.md           ← schema (read this)
├── README.md           ← this file
├── raw/                ← your sources (immutable)
│   └── assets/         ← images, PDFs
└── wiki/               ← LLM-maintained output
    ├── index.md        ← master catalog
    ├── log.md          ← operation history
    ├── overview.md     ← top-level synthesis
    ├── concepts/       ← idea/theory pages
    ├── entities/       ← people, orgs, tools
    ├── sources/        ← one page per raw source
    ├── queries/        ← saved question/answer pages
    └── overviews/      ← domain synthesis pages
```

## Git

This is a git repo. You get version history, diffs on every wiki edit, and the
ability to branch for experimental analyses. Commit after major ingests.

```bash
git init          # if not already initialized
git add -A
git commit -m "ingest: my-article"
```
