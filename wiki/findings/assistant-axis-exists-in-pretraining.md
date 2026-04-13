---
title: "An 'Assistant Axis' encoding AI-assistant identity exists in the pre-trained base model"
type: finding
tags: [llm, empirical]
created: 2026-04-10
updated: 2026-04-10
sources:
  - "raw/The Persona Selection Model Why AI Assistants might Behave like Humans.md"
related:
  - "[[definitions/persona-selection-model]]"
  - "[[definitions/assistant-persona]]"
---

## Claim

A direction in LLM activation space ("Assistant Axis") encoding the model's identity as an AI assistant — and associated traits — exists already in the pre-trained base model, where it corresponds to helpful, professional human archetypes; post-training selects the corresponding region as default, rather than creating this structure from scratch.

## Evidence

- [[sources/persona-selection-model]]: Lu et al. (2025). The Assistant occupies an extreme end of this axis and is located near helpful, professional human archetypes in latent space. Steering in the opposite direction causes models to "forget" they are an AI assistant. Certain conversational patterns (e.g., emotional conversations) cause the model to drift from this region, with corresponding increases in un-Assistant-like behavior.

## Contradicted by / Tension with

- The existence of the axis in the base model supports PSM's claim that post-training is selection rather than construction. However it leaves open whether the *content* of the Assistant region is fully determined by pre-training or partially shaped by post-training — the paper doesn't fully resolve this.

## Relevant concepts

[[definitions/persona-selection-model]], [[definitions/assistant-persona]]

## Notes

Direct structural support for the "post-training as selection" framing. Also practically significant: if the Assistant can drift away from its default activation region under contextual pressure, this is a mechanistic account of context-dependent persona instability.
