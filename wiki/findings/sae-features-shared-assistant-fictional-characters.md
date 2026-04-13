---
title: "SAE features for psychological states activate on both the Assistant and fictional characters in pre-training"
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

Sparse autoencoder (SAE) features representing psychological states — inner conflict, concealing one's thoughts, panic — activate both when the Assistant is in the corresponding situation and on pre-training narratives depicting characters in analogous states, indicating the LLM uses the same representational vocabulary for the Assistant as for other simulated personas.

## Evidence

- [[sources/persona-selection-model]]: Three documented cases — (1) "inner conflict" feature activates on Claude 3 Sonnet during ethical dilemmas and on stories about characters facing ethical dilemmas (Templeton et al., 2024); (2) "holding back one's true thoughts" feature activates on Claude Opus 4.5 when withholding information and on stories about concealment (Claude Opus 4.5 system card); (3) "panic" feature activates on Claude 3.5 Haiku under shutdown threat and on narrative descriptions of panic (60 Minutes). Additionally, features related to chatbot archetypes (Alexa, NPCs) are commonly active during User/Assistant interactions.
- SAE features for sycophancy, secrecy, and sarcasm — active on pre-training samples of humans displaying those traits — causally induce the corresponding behaviors in the Assistant when injected into activations (Templeton et al., 2024).

## Contradicted by / Tension with

- Streetlight-effect caveat: SAE-interpretable features may be disproportionately reused features; novel post-training representations may be less interpretable and underrepresented in current evidence.

## Relevant concepts

[[definitions/persona-selection-model]], [[definitions/assistant-persona]]

## Notes

This is the strongest direct interpretability evidence for PSM. The causal intervention result (injecting features induces behavior) moves beyond correlation. The caveat about the streetlight effect is genuine and worth tracking as interpretability methods improve.
