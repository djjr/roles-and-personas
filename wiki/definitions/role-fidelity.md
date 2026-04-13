---
title: "Role Fidelity"
type: definition
tags: [llm, theoretical]
created: 2026-04-11
updated: 2026-04-11
sources:
  - "raw/Role ArchitecturesApplying LLMs to consequential tasks.md"
related:
  - "[[definitions/role-architecture]]"
  - "[[definitions/assistant-persona]]"
  - "[[definitions/persona-selection-model]]"
---

**Role fidelity** is Drexler's reframing of alignment: rather than asking whether an AI system is universally safe, ask whether it behaves appropriately *in a particular role* with *particular inputs and a particular action space*. Alignment reduces to the question of whether the system stays in role.

The practical payoff: the semantic attack surface for a narrowly scoped episodic agent is vastly smaller than for a public-facing omni-use chatbot. A role-faithful system can be unreliable or subtly wrong in ways that are detectable and recoverable; a broadly misaligned general agent cannot. Fault-tolerance is built into the architecture rather than into the model.

Role fidelity is to Drexler's framework what "safe Assistant persona traits" is to PSM: both reframe alignment as a property of a particular character/role rather than of the LLM substrate. But where PSM's alignment target is psychological (a character with safe values), Drexler's is behavioral and structural (a system that stays within designated inputs/outputs/action-spaces).

*Note:* Role fidelity does not require that the LLM be generally aligned — only that it be alignable to specific roles. This is a weaker and more tractable target, which is the source of both the proposal's appeal and its limitations.
