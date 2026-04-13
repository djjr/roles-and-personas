# Wiki Log
_Append-only. Newest entries at top. Format: `## [YYYY-MM-DD] operation | title`_

To see recent activity:
```bash
grep "^## \[" wiki/log.md | head -10
```

---

## [2026-04-13] ingest | Goldstein & Lederman (2025) — What Does ChatGPT Want?
- Source: raw/goldstein-lederman-2025-what-does-chatgpt-want.md (PDF converted via pymupdf4llm)
- Source page created: wiki/sources/goldstein-lederman-2025-what-does-chatgpt-want
- Definitions created (6): interpretationism, instance-agent, model-agent, zero-shot-desire, hhh-plus-zero, propositional-interpretability
- Findings created (6): instance-agent-is-right-locus-of-llm-psychology, psychological-explanation-tractability-argument, role-play-hypothesis-behaviorally-indistinguishable, zero-shot-desires-from-system-prompt, in-context-scheming-supports-hhh-plus-zero, pretraining-llms-lack-interpretationist-attitudes
- Link scan: no retroactive wikilinks needed in pre-existing pages; simulacrum-problem finding updated with G&L counterargument cross-link
- Index updated: 61 pages total
- Key tensions flagged:
  - role-play-hypothesis-behaviorally-indistinguishable directly contests simulacrum-problem: G&L argue the simulacrum argument is either a disguised consciousness claim or a verbal dispute
  - zero-shot-desires / in-context-scheming directly contradicts Drexler's "no intrinsic goals" claim
  - HHH+0 framework converges with PSM on instance as unit of analysis but carves it in propositional-attitude terms rather than persona/identity terms
- Notable: first paper in wiki to engage the role-play debate at the level of philosophy of mind; sharpens the simulacrum tension from a phenomenological dispute into an either/or: consciousness requirement or verbal dispute

---

## [2026-04-12] query | Definition of the situation as in-context persona selection
- Question: Is PSM's persona selection analogous to Goffman's definition of the situation? Can we do archaeology on persona drift across a many-turn conversation?
- Answer distinguishes two levels: training-time (PSM's native domain) vs. inference-time (the archaeology target)
- Key claim: in-context persona is the lowest-energy state compatible with accumulated situational cues; user bids determine the equilibrium unilaterally (vs. Goffman's mutual negotiation)
- Archaeology proposal: look for path-dependence, lock-in, and asymmetric responsiveness to overt vs. subtle framing
- Three open questions filed: lock-in inflection points, system-prompt as pre-negotiated frame, activation steering as external situation imposition
- Index updated: 47 pages total

---

## [2026-04-11] wiki-run | Could an AI Be Shy? + Goffman Video BBC 1 + Goffman and Roles 1
- Files processed: 3 (Could an AI ever be shy?, Goffman Video BBC 1, Goffman and Roles 1)
- Source pages created: could-an-ai-be-shy (original DJR analysis), goffman-video-bbc-1 (stub — BBC/OU clip), goffman-and-roles-1 (DJR notes on Goffman 1959)
- Definitions created (2): shyness-as-rolelessness, working-consensus
- Definitions updated (1): definition-of-the-situation — added direct Goffman p.1 quote, DJR lowest-energy-state framing, working-consensus link
- Findings created (2): simulacrum-problem, shyness-as-structural-role-failure
- Entity created: goffman-erving (first sociology-side person entity)
- Index updated: 46 pages total
- Notable: simulacrum-problem is the deepest philosophical tension in the wiki — DJR's phenomenological argument against LLM role-occupancy vs. PSM's psychological vocabulary. Tagged for future synthesis once Mead/Sartre sources come in.
- Goffman no-true-self claim introduces a complication to simulacrum argument: if there is no subject behind human role performance either, the human/LLM contrast needs re-examination.
- Working consensus ↔ echoing connection now explicit: AxA failure is precisely the absence of the mutual-monitoring mechanism that sustains shared frame in human interaction.

---

## [2026-04-11] wiki-run | Echoing (Sekkizhar et al.) + ELK stub
- Files processed: 2 (Echoing identity failures; Eliciting Latent Knowledge)
- Source pages created: echoing-identity-failures, eliciting-latent-knowledge (stub — no DJR notes)
- Definitions created (2): echoing, definition-of-the-situation (first sociology-side definition)
- Findings created (3): echoing-occurs-across-providers-and-domains, situation-as-alignment-mechanism-humans, axa-lacks-stabilizing-human-grounding
- Index updated: 37 pages total
- Notable: two findings now tagged analogy+sociology; definition-of-the-situation bridges Thomas/Goffman to AxA drift failure
- ELK stub flagged for revisit when DJR notes are added

---

## [2026-04-11] wiki-run | Role Architectures: Applying LLMs to Consequential Tasks (Drexler)
- Source page created: wiki/sources/role-architectures-drexler.md
- Definitions created (3): role-architecture, role-fidelity, episodic-agent
- Findings created (5): llms-no-intrinsic-goals-role-players, role-fidelity-as-alignment-strategy, episodic-task-decomposition-prevents-drift, human-role-networks-enable-alignment, generality-facilitates-specialization
- Entity created: drexler-k-eric
- Index updated: 26 pages total
- Key tensions flagged: Drexler's "no intrinsic goals" claim vs. PSM's open exhaustiveness question; Drexler's structural "role" vs. PSM's psychological "persona"
- First analogy+sociology tagged finding: human-role-networks-enable-alignment

---

## [2026-04-11] ingest | DJR notes update — The Persona Selection Model
- New DJR notes scanned from raw source (DJR Notes section + interspersed article body notes)
- Source page DJR section expanded: action-representation question, theory-of-mind-via-narrative, emergent-misalignment untraining framing, inoculation-prompting resonance framing, typification observation (Schutz flag), exhaustiveness/human-analogy skepticism, Goffman self-behind-role question, router/human-analogy question, sharpened "what sort of author?" skepticism
- PSM definition: Goffman analogy note sharpened with "is there any self behind the role playing?"
- Finding (emergent-misalignment): added DJR "untraining on helpfulness" framing
- Finding (psm-post-training): sharpened skeptical note on the author-hypothesis-space assumption
- Finding (good-ai-archetypes): added theory-of-mind-via-narrative observation and mechanistic-identity hypothesis
- Definition added: activation-steering (triggered by DJR learning gap flag)
- Index updated: 15 pages total

---

## [2026-04-10] ingest | The Persona Selection Model (Anthropic, 2026)
- Source page created: wiki/sources/persona-selection-model.md
- Definitions created (4): persona-selection-model, assistant-persona, emergent-misalignment, inoculation-prompting
- Findings created (8): psm-post-training-as-persona-refinement, emergent-misalignment-psm-explanation, sae-features-shared-assistant-fictional-characters, assistant-axis-exists-in-pretraining, inoculation-prompting-mitigates-misalignment, out-of-context-generalization-declarative, good-ai-archetypes-affect-alignment, psm-welfare-argument
- Index updated: 14 pages total
- Flags: raw file is 17MB due to embedded base64 images; text content ~100KB; images stripped for processing

---

## [2026-04-10] init | Wiki initialized
- Schema written to CLAUDE.md
- Directory structure created: raw/, wiki/concepts/, wiki/entities/,
  wiki/sources/, wiki/queries/, wiki/overviews/
- Starter files created: index.md, log.md, overview.md
- Next step: drop a source file into raw/ and say "ingest [filename]"

## [2026-04-10] schema-update | Page taxonomy revised, project context added
- Renamed wiki/concepts/ → wiki/definitions/ (hover-link targets)
- Added wiki/findings/ (first-class claim pages)
- CLAUDE.md: added PROJECT CONTEXT section (customizable per project)
- CLAUDE.md: replaced generic page types with: definition, explanation,
  finding, source, query
- CLAUDE.md: added WIKI RUN as first-class operation (autonomous, multi-step)
- CLAUDE.md: added audience calibration (post-PhD, active researcher)
- CLAUDE.md: added two-domain framing (LLM ↔ sociology/philosophy) and
  domain tags
- overview.md: rewritten with project-specific framing and open questions
- index.md: updated table structure to match new page types
