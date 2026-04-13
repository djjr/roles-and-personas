---
title: "Role Architecture"
type: definition
tags: [llm, theoretical]
created: 2026-04-11
updated: 2026-04-11
sources:
  - "raw/Role ArchitecturesApplying LLMs to consequential tasks.md"
related:
  - "[[definitions/role-fidelity]]"
  - "[[definitions/episodic-agent]]"
  - "[[definitions/persona-selection-model]]"
---

A **role architecture** (Drexler) is a system design in which complex, consequential tasks are decomposed into a set of bounded, episodic roles — each with designated inputs, outputs, and action spaces — filled by LLMs (or other AI systems) operating under narrow alignment constraints. The alignment goal shifts from ensuring universally safe AI behavior to ensuring **role fidelity**: appropriate behavior *in particular roles*.

The canonical instantiation is Drexler's **Open Agency** model: roles for proposing, evaluating, selecting, enacting, and updating plans, with *choice* reserved as a human function. The architecture is fault-tolerant by design — no single role output is irrevocable; everything is subject to evaluation, selection, and revision. "Generality facilitates specialization": the same LLM's general role-playing capacity allows it to fill (and to design) many different roles with minimal additional tuning.

Role architecture as a concept is *structural and organizational* — a role is a slot in a workflow with defined scope. This contrasts with PSM's *persona*, which is *psychological and literary* — a character with traits, beliefs, and emotional states. The two concepts are complementary: a role architecture specifies what an agent is *supposed to do*; PSM describes the psychological machinery by which an LLM *becomes* the agent that does it.

*Analogy note:* Drexler's role architecture maps closely onto organizational sociology's treatment of roles as institutionally defined positions (rather than individual performances). The division-of-labor rationale explicitly inverts Adam Smith — not efficiency, but legibility and control. This connects to Weber's bureaucracy, where role specificity is the mechanism of both reliability and accountability. DJR also flags a Madison/Federalist 51 parallel: ambition regulates ambition; structural division of roles as the substitute for moral perfection.
