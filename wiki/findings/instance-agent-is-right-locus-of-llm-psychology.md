---
title: "Instance Agent Is the Right Locus of LLM Psychology"
type: finding
tags: [llm, philosophy, theoretical]
created: 2026-04-13
updated: 2026-04-13
sources:
  - "raw/goldstein-lederman-2025-what-does-chatgpt-want.md"
related:
  - "[[definitions/instance-agent]]"
  - "[[definitions/model-agent]]"
  - "[[sources/goldstein-lederman-2025-what-does-chatgpt-want]]"
  - "[[sources/persona-selection-model]]"
---

## Claim

The right object of study for LLM psychology is the *instance agent* — the runtime entity initialized at the start of a conversation — not the underlying foundation model.

## Evidence

- [Goldstein & Lederman 2025]: Multiple instances of the same model run simultaneously with no cross-instance memory; can behave radically differently; can enter strategic competition with each other. A "model agent" behind the instances has no explanatory work to do. The analogy: studying humans via population-level studies yields facts about the "average human," not facts about a further person called Average Human. → [[sources/goldstein-lederman-2025-what-does-chatgpt-want]]

## Contradicted by / Tension with

- Standard LLM research practice almost universally treats the model as the agent (e.g., "what is GPT-4's IQ?", "can the model introspect?"). G&L argue these questions are better reformulated as questions about instances or about the shared structural features of instances.
- [[sources/persona-selection-model]]: PSM's "Assistant persona" is trained at the model level and then instantiated; G&L would say the proper locus is still the instance, though they converge on the instance as the unit of interest at inference time.

## Relevant concepts

[[definitions/instance-agent]], [[definitions/model-agent]], [[definitions/interpretationism]]

## Notes

This is a structural claim with implications that extend beyond interpretationism — G&L note it is relevant even for those who reject both interpretationism and the attribution of propositional attitudes altogether. It reframes a large swath of existing empirical LLM research as studying instance-level phenomena misdescribed at the model level.
