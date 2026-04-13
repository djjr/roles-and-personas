# Instructions: Getting Started with the LLM Wiki

This document explains what this folder is, how it was set up, and how to use it going forward. It is written for someone who has just unzipped the folder and wants to understand what they are looking at and how to continue.

---

## What this is

This is a personal research wiki maintained by an AI assistant (Claude), viewed in Obsidian. The idea originates with Andrej Karpathy's LLM wiki pattern: instead of asking an AI the same questions repeatedly and losing the answers, you have the AI *build and maintain a persistent knowledge base* — a collection of interlinked markdown files that gets richer every time you add a source or ask a question. The graph of links between pages is your map of the intellectual territory.

This particular instance covers two interlocking domains: LLM role-playing and personas, and the sociological/philosophical literature on human role-taking (Mead, Goffman, Sartre, Bourdieu). The goal is to generate original insights by reading them analogically — back and forth.

---
## Claude helped me "fork" Karpathy's System

I was intrigued by Andrei Karpathy's post on using Claude to curate and manage a personal research knowledge wiki.
Read his posts and notes on GitHub (including lots of comments from others who were working on similar things or who had implemented a version of his ideas).
I ask Claude to get me started
<iframe src="https://djjr.github.io/chatViz/index.html?conversation=llm-wiki-00" width="100%" height="600"></iframe>
Here's the ZIP file ![[llm-wiki.zip]]

I move the expanded directory structure into an obsidian vault so I'm now looking at a folder called llm-wiki-v2.  Then I go to Claude Cowork and start a new project and a new task and I point it at this folder. I tell it "You'll notice in this folder a subfolder called llm-wiki-v2. It contains some instructions in the file CLAUDE.md. These instructions describe you maintaining a research wiki on the project's topic (role playing and LLMs). Read the document and let me know if you have any questions."

---

## The folder structure

```
llm-wiki-v2/
├── CLAUDE.md          ← the schema: all of Claude's operating instructions
├── README.md          ← short orientation (you can read this too)
├── instructions.md    ← this file
├── raw/               ← your source documents (READ ONLY)
│   ├── assets/        ← images extracted from clipped web pages
│   └── *.md           ← clipped articles, notes, transcripts
└── wiki/              ← everything Claude writes and maintains
    ├── StartHere.md   ← the door: a few sentences + links to start exploring
    ├── index.md       ← master catalog of all wiki pages
    ├── log.md         ← append-only history of every wiki operation
    ├── overview.md    ← top-level synthesis of the project
    ├── definitions/   ← short, precise term definitions (hover targets in Obsidian)
    ├── findings/      ← extracted claims and results from sources
    ├── entities/      ← people, organizations, papers, tools
    ├── sources/       ← reading notes / précis (one per raw file)
    ├── queries/       ← saved answers to questions asked of the wiki
    └── overviews/     ← domain synthesis pages
```

The `raw/` directory is the source of truth. Drop files into it; never edit them. Everything in `wiki/` is Claude's output layer, which it owns entirely.

---

## Step 1: Open the vault in Obsidian

1. Open Obsidian.
2. Choose **File → Open Vault** and navigate to this folder (`llm-wiki-v2/`).
3. Obsidian will index all the markdown files. The graph view (left sidebar, graph icon) shows the link structure — this is the most useful view for exploring connections.
4. Recommended optional plugin: **Dataview**, for dynamic tables. The wiki doesn't require it but it unlocks more powerful index views.

You can read the wiki without Claude at any time. The `wiki/StartHere.md` file is the intended entry point for browsing.

---

## Step 2: Connect Claude

This wiki is designed to work with Claude in **Cowork mode** (the Claude desktop app) pointed at this directory. Claude reads `CLAUDE.md` at the start of each session, which gives it all its operating instructions — the schema, page types, YAML conventions, and operation vocabulary.

The key thing to understand: `CLAUDE.md` is what makes Claude a disciplined wiki maintainer rather than a generic chatbot. If you change how you want the wiki to work, edit `CLAUDE.md` and Claude will follow the updated instructions on the next session.

At the start of each session, Claude silently reads `CLAUDE.md`, the last few entries in `wiki/log.md`, and `wiki/index.md`, then greets you with a one-line status: how many pages exist, when the last operation ran, and what you might want to do.

---

## Step 3: Clip and add sources

The workflow for adding research material:

1. Find an article, paper, video transcript, or write some notes you want to capture.
2. Add it to `raw/` as a `.md` file. The **Obsidian Web Clipper** browser extension is the most convenient way to clip web pages to markdown — it handles the conversion and deposits the file directly into the vault.
3. For your own writing (notes, analysis, marginalia), just save them as `.md` files in `raw/` — no special format required.

**One gotcha with web clips:** Some web pages (especially from sites that use embedded images) produce very large markdown files because the images are baked in as base64-encoded strings. A 20KB article can become a 15MB file. Claude will handle stripping these automatically, but if you notice a file that looks absurdly large, that is why. The image extraction problem is being addressed separately (Obsidian's web clipper settings can be configured to save images as separate files instead).

---

## Step 4: Run the wiki

The primary operation. When you have new files in `raw/` that haven't been processed yet, tell Claude:

> *"Run the wiki"* — or — *"wiki run"* — or — *"check for new files"*

Claude will autonomously:
- Identify unprocessed files by checking `wiki/log.md` and `wiki/index.md`
- For each new file: write a source précis, extract findings as standalone pages, create definition pages for new technical vocabulary, and update all internal links
- Update `wiki/index.md` and append to `wiki/log.md`
- Report back: files processed, pages created, findings extracted, anything flagged

This is designed to run without interruption. Claude completes the full run and then reports. If there is a genuine decision point (e.g., a file is ambiguous about what it is or who wrote it), it will pause and ask.

**Variant — single file with discussion (INGEST):** If you want to stay involved and discuss a source before Claude generates content from it, say: *"Ingest raw/my-file.md"*. Claude will pause after the précis for your input before proceeding to definitions and findings.

---

## Step 5: Ask questions (QUERY)

Ask Claude any question about the material it has processed. It will read the index to identify relevant pages, synthesize an answer with wikilink citations, and ask whether to save the answer. Good answers become `wiki/queries/` pages that later queries can cite.

Example: *"What does the sociology literature say about how role stability is maintained, and does the LLM side have an analogue?"*

---

## Step 6: Periodic maintenance (LINT)

Periodically say *"lint the wiki"*. Claude will check for:
- Orphan pages with no inbound links
- Broken wikilinks pointing to non-existent files
- Terms used across multiple pages that lack definition pages
- Analogy gaps — concepts developed on one side of the LLM/sociology divide with no cross-domain connections (these are opportunities)
- Contradictions between finding pages
- Index drift — pages not listed in `wiki/index.md`

---

## Conventions that matter

**YAML frontmatter.** Every wiki page has YAML frontmatter at the top with `title`, `type`, `tags`, `created`, `updated`, `sources`, and `related`. The `sources` and `related` fields must be block lists with quoted strings — not inline. This is a hard requirement for Obsidian's properties panel. Claude knows this rule; it is in `CLAUDE.md`. If you ever write wiki pages manually, follow the same format:

```yaml
---
title: "My Page"
type: definition
tags: [llm, sociology]
created: 2026-04-11
updated: 2026-04-11
sources:
  - "raw/my-source.md"
related:
  - "[[definitions/some-term]]"
---
```

**Findings vs. source notes.** The wiki distinguishes *source pages* (précis of a raw file) from *finding pages* (first-class claims that can be cited, contradicted, and linked from multiple sources). This distinction matters: findings can accumulate evidence from several sources and be explicitly flagged as in tension with other findings. Source pages are the entry point; finding pages are the intellectual output.

**DJR notes.** Source pages have a "DJR perspective" section where the owner's own analysis and marginalia are captured as a distinct voice. This is separate from the précis of the external source. If you add notes to a raw file you already ingested, tell Claude: *"I've added notes to raw/my-file.md — can you scan and update the wiki?"*

**The log is append-only.** `wiki/log.md` records every operation with a date and summary. Never delete from it. It is the audit trail for the wiki's development and Claude uses it to determine what has already been processed.

---

## How this wiki was built: the session history

For context, here is how the wiki reached its current state.

**Session 1.** The folder was pointed at Claude with the instruction to read `CLAUDE.md` and ask questions. Claude read the schema, asked five clarifying questions (how to handle DJR notes, finding granularity, analogy flagging, definition depth, and sub-concept pages), received answers, and then ingested the first source: Anthropic's Persona Selection Model post. This produced 4 definitions, 8 findings, and the first source page. The PSM file was 17MB due to embedded base64 images; Claude stripped them in Python to get to the actual ~100KB of text.

**Between sessions.** More DJR notes were added to the PSM source file. Claude scanned them and expanded the source page's DJR section, updated several finding pages, and added one new definition (activation-steering). Index updated to 15 pages.

**Second wiki run.** Two new raw files: Drexler's Role Architectures post, and a clipped PDF of the Echoing paper (Sekkizhar et al.) plus an ELK stub. This added 3 definitions (role-architecture, role-fidelity, episodic-agent), 2 more (echoing, definition-of-the-situation), 5 findings from Drexler and 3 from Echoing, two entity pages, and the first `analogy`-tagged material. Index to 37 pages.

**Third wiki run.** Three new raw files: DJR's own philosophical analysis ("Could an AI be shy?"), a BBC/Open University video transcript on Goffman, and DJR's working notes on Goffman's *Presentation of Self in Everyday Life* (1959). This introduced the sociology side of the wiki in earnest. Added 2 definitions (shyness-as-rolelessness, working-consensus), 2 findings (simulacrum-problem, shyness-as-structural-role-failure), 1 entity (goffman-erving), updated definition-of-the-situation with direct Goffman quotes, and updated StartHere.md with the Goffman framing and the simulacrum problem. Index to 46 pages.

**Ongoing schema evolution.** `CLAUDE.md` was updated twice: once to add explicit YAML formatting rules after Obsidian's parser choked on bare `[[wikilinks]]` in frontmatter properties, and once to add `StartHere.md` to the directory layout. A Python script was run to fix all 13 affected files retroactively.

---

## Adapting this for a different project

`CLAUDE.md` is designed for reuse. The `★ PROJECT CONTEXT` section at the top is the only part that is project-specific — the two domains, the central question, the audience calibration, and the domain tags. Everything below it (page types, YAML conventions, operations, log format, session startup) is generic wiki mechanics.

To start a new project wiki: copy this folder skeleton, clear the `raw/` directory, delete or archive `wiki/` content, edit the PROJECT CONTEXT section of `CLAUDE.md`, and open in a new Claude session. Claude will greet you with "Wiki has 3 pages. Last activity: [init]. What are we doing today?" and you are off.

---

## Quick reference

| What you want to do | What to say |
|---|---|
| Process new files in raw/ | "Run the wiki" |
| Process one file and discuss it | "Ingest raw/filename.md" |
| Ask a question about the material | Just ask it |
| Save an answer as a query page | Claude will ask; say yes |
| Check wiki health | "Lint the wiki" |
| Add your notes to an already-ingested source | "I've added notes to raw/filename.md — can you scan and update?" |
| See what's in the wiki | Read wiki/StartHere.md in Obsidian, or ask Claude |
| See what's been done | Read wiki/log.md |
