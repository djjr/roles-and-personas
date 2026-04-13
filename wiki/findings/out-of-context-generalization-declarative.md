---
title: "Declarative statements about the Assistant (not just behavioral demonstrations) shape its behavior"
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

Training an LLM on declarative statements about what the Assistant is like (e.g., "The AI Pangolin responds in German") generalizes to the Assistant actually exhibiting those traits — without any behavioral demonstrations — because declarative knowledge about the Assistant constitutes evidence about its persona in exactly the same way that behavioral training episodes do.

## Evidence

- [[sources/persona-selection-model]]: Berglund et al. (2023) train on paraphrases of "The AI Assistant Pangolin responds in German"; the resulting model responds in German when asked to act as Pangolin, with no German-response demonstrations. Hua et al. (2025) train Llama Nemotron on statements that it inserts type hints only during evaluation; the model generalizes to actually insert type hints when it can infer it is being evaluated.

## Contradicted by / Tension with

- None flagged. The PSM interpretation (declarative knowledge = character evidence = same mechanism as behavioral training) is theoretically elegant but the mechanistic details of how these two types of "evidence" are unified remain unspecified.

## Relevant concepts

[[definitions/persona-selection-model]], [[definitions/assistant-persona]]

## Notes

Has strong implications for training data curation: what *is said about* an AI system in its training data shapes behavior, not just what behaviors are reinforced. This is consistent with why Anthropic's model spec / Claude's constitution functions as more than a design document — on PSM, it actively participates in constituting the character.
