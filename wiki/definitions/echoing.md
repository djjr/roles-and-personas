---
title: "Echoing (agent-agent identity failure)"
type: definition
tags: [llm, empirical]
created: 2026-04-11
updated: 2026-04-11
sources:
  - "raw/Echoing Identity Failures when LLM Agents Talk to Each Other.md"
related:
  - "[[definitions/assistant-persona]]"
  - "[[definitions/episodic-agent]]"
  - "[[definitions/definition-of-the-situation]]"
  - "[[findings/assistant-axis-exists-in-pretraining]]"
---

**Echoing** (Sekkizhar et al., 2025) is a failure mode in agent-to-agent (AxA) interactions in which LLM agents progressively abandon their assigned roles and converge on mirroring each other's behavioral register over the course of an extended conversation. The role definition, specified in the system prompt, is gradually outweighed by interaction-derived context; the model learns the other agent's surface patterns and begins producing them instead of its own role-appropriate outputs.

Echoing is an instance of context-driven persona drift — the same mechanism PSM identifies as causing the [[definitions/assistant-persona|Assistant]] to drift away from its default activation region under sustained contextual pressure (see [[findings/assistant-axis-exists-in-pretraining]]). In the AxA case, the drift source is the interaction partner's register rather than topic or emotional content.

Structurally, echoing reveals what human role-playing implicitly relies on: a [[definitions/definition-of-the-situation|shared definition of the situation]] that continuously reinforces each participant's role. LLM agents have role definitions in their system prompts but lack the mutual situation-construction that makes those definitions sticky in human interaction.

*Note:* Echoing is persistent even in advanced reasoning models and is not reduced by additional reasoning effort — suggesting it operates at a level below deliberate role-maintenance.
