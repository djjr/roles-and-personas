---
title: "Episodic Agent"
type: definition
tags: [llm, theoretical]
created: 2026-04-11
updated: 2026-04-11
sources:
  - "raw/Role ArchitecturesApplying LLMs to consequential tasks.md"
related:
  - "[[definitions/role-architecture]]"
  - "[[definitions/role-fidelity]]"
---

An **episodic agent** (Drexler) is an LLM-based agent that operates within a single, bounded context window with no persistent memory across tasks. Each task is an independent trial: fixed model parameters, no carry-over state. This is the standard mode of LLM deployment — every conversation starting fresh is an instance.

The safety rationale: episodic operation prevents identity drift, goal accumulation, and the kind of long-horizon planning that makes general agents dangerous. An agent that cannot remember across episodes cannot develop a persistent model of its own situation, accumulate resentments, or optimize instrumentally over time. Drexler extends this to argue that even iterative tasks can be structured as sequences of episodic subtasks, with information passed compositionally between episodes rather than via a persistent agent state.

The limitation: some tasks are inherently iterative and resist clean episodic decomposition. When persistent memory is genuinely necessary, Drexler recommends that it be structured as *compositional, interpretable* external storage — auditable, semantically meaningful — rather than opaque neural state.

*Connection to PSM:* The [[definitions/persona-selection-model|PSM]] framing of the Assistant as a character who can "drift" away from its default activation region under contextual pressure (see [[findings/assistant-axis-exists-in-pretraining]]) provides an interpretability-level account of why episodic operation helps: each fresh context window re-anchors the model near its default persona region rather than allowing drift.
