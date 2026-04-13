---
title: "Role Architectures: Applying LLMs to Consequential Tasks"
type: source
tags: [llm, theoretical]
created: 2026-04-11
updated: 2026-04-11
sources:
  - "raw/Role ArchitecturesApplying LLMs to consequential tasks.md"
related:
  - "[[sources/persona-selection-model]]"
  - "[[definitions/persona-selection-model]]"
  - "[[definitions/role-architecture]]"
  - "[[definitions/role-fidelity]]"
  - "[[definitions/episodic-agent]]"
---

## Précis

Drexler's central thesis is that safe and effective deployment of LLMs on consequential tasks does not require solving general AI alignment — it requires a different architecture. Instead of building and aligning a single powerful general agent, we decompose complex tasks into bounded episodic roles, assign LLMs to play those roles, and keep choice at the human level. He calls the general pattern a **role architecture** and his specific proposal an **Open Agency** model (humans choose; AI evaluates, explains, and proposes). Alignment, on this view, reduces to **role fidelity**: ensuring LLMs behave appropriately *in particular roles* rather than universally. The upshot is that "solving the classic AGI-agent alignment problem is neither necessary nor sufficient for safe application of strong AI capabilities" — a deliberately provocative claim aimed at redirecting the research agenda.

The theoretical grounding is a clean version of the [[definitions/persona-selection-model|PSM]]-adjacent claim: LLMs have no intrinsic goals. They are non-agentic predictive models that *simulate* agents by playing roles derived from narratives in training data. This makes them dangerous (they can readily play malicious or power-seeking roles) but also opens a safety route (they can be bounded to narrow, episodic, fault-tolerant roles). Notably, Drexler frames LLMs as having "no inherent goals" — a position closer to PSM's operating-system view than to the masked-shoggoth view. The agentic behavior that emerges comes entirely from simulated roles, not from any underlying optimization target.

Practical mechanisms: (1) *episodic agents* — fresh context windows per task, no persistent memory by default, preventing identity drift and ensuring focus; (2) fault-tolerance by design — roles are structured so no single output is irrevocable; (3) compositional, interpretable information — persistent memory, when necessary, should be structured so it can be audited; (4) roles can be *designed by the same LLM* that fills them ("generality facilitates specialization"), collapsing the human overhead of role definition at scale.

This article explicitly introduces *role* as a structural/task concept (a slot in a workflow with designated inputs, outputs, and action spaces) as distinct from PSM's *persona* (a psychological character with traits, beliefs, and emotional states). The two concepts are complementary but not identical — an important distinction for this wiki.

## DJR perspective

DJR reads this as proposing a "two sciences" frame: a science of *loading up* a model with a vocabulary of roles/personas (pre-training) and a science of *selecting and binding* a model to specific roles (post-training + deployment architecture). The role-architecture proposal is the deployment-side answer to that second science.

Several DJR observations with wiki relevance: (1) "LLMs ONLY play roles" as an even stronger version of Drexler's no-intrinsic-goals claim — roles aren't just one mode of LLM behavior, they may exhaust it. (2) Human social alignment is also largely achieved via role networks: overlapping, mutually constraining role structures prevent macro-level misalignment ("macro actors without roles are dangerous unknowns"). "Rolelessness has alignment implications at both ends of the spectrum" — the tyrant and the pathologically shy person both represent breakdowns of role structure, though in different directions. The tyrant case is complicated by the fact that tyranny is itself a kind of role, which limits the analogy. (3) The Madison/Federalist 51 connection: ambition regulates ambition; balance of power via role structure; single points of failure avoided by division of authority. This maps structurally onto role architecture's fault-tolerance design. (4) The slavery metaphor: "we want these things to be agents but we want to make sure they don't become literate or have the ability to organize." Division of consequential tasks for *control* rather than efficiency inverts Adam Smith's justification for division of labor — Smith wanted productive gains; Drexler wants legibility and containment. DJR: "should we endeavor to build superman or just really effective organizations?" (5) Sutskever parallel (flagged by DJR): the AGI won't be able to do everything but will be able to learn to do anything — which would make role specialization via role architectures tractable at arbitrary scale.

## Key terms introduced

- [[definitions/role-architecture]] — Drexler's structural proposal
- [[definitions/role-fidelity]] — alignment as appropriate behavior in particular roles
- [[definitions/episodic-agent]] — agent with no persistent memory across tasks

## Findings extracted

- [[findings/llms-no-intrinsic-goals-role-players]]
- [[findings/role-fidelity-as-alignment-strategy]]
- [[findings/episodic-task-decomposition-prevents-drift]]
- [[findings/generality-facilitates-specialization]]
- [[findings/human-role-networks-enable-alignment]]

## Tensions / contradictions with existing wiki

- Drexler's "no intrinsic goals" claim is stronger than PSM's stated position: PSM treats exhaustiveness as an open question, while Drexler asserts the operating-system view without qualification. The coin-flip experiment (Claude Sonnet 4.5 preferring its preferred task even outside Assistant turns) provides evidence against the purest form of Drexler's claim. See [[findings/psm-post-training-as-persona-refinement]].
- Drexler's *role* (structural, task-scoped slot) vs. PSM's *persona* (psychological character with traits and affect): complementary but not identical. Drexler's role is more sociological/organizational; PSM's persona is more literary/psychological. Both literatures use "role" loosely — a definition page tracking this distinction will matter as more sources come in.

## Raw source

[[raw/Role ArchitecturesApplying LLMs to consequential tasks.md]]
