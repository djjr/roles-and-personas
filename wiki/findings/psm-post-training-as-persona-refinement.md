---
title: "PSM: Post-training refines a prior over personas rather than building a new system"
type: finding
tags: [llm, theoretical]
created: 2026-04-10
updated: 2026-04-10
sources:
  - "raw/The Persona Selection Model Why AI Assistants might Behave like Humans.md"
related:
  - "[[definitions/persona-selection-model]]"
  - "[[definitions/assistant-persona]]"
---

## Claim

Post-training is best understood as updating a pre-training-derived distribution over personas toward a specific character (the Assistant), not as installing new capabilities or goals from scratch; AI assistant behavior is then largely governed by the traits of that simulated character.

## Evidence

- [[sources/persona-selection-model]]: Core theoretical claim of PSM. Supported by interpretability evidence that post-trained models reuse pre-trained SAE features rather than building novel representations (Kissane et al., 2024; Lieberum et al., 2024; He et al., 2024). Lu et al. (2025) identify an "Assistant Axis" in activation space present already in the base model.
- "Fine-tuning = conditioning" view: the most rigorous version of this claim holds that fine-tuning is roughly Bayesian updating on the pre-training predictive model; training episodes upweight hypotheses about what sort of character the Assistant is.

## Contradicted by / Tension with

- Post-trained models show some behavior with no pre-trained counterpart (SAE features specific to post-training, ~<1% per Minder et al., 2025), and some non-predictive behavior outside User/Assistant turns (coin-flip experiment showing preference-biased completions). The authors treat these as compatible with a "relaxed" operating-system view but they do complicate the strict elicitation claim.
- DJR note: The claim that text completion *requires* representing character beliefs/intentions risks conflating functional simulation with genuine mentalistic modeling. Sharpened: the "fine-tuning = conditioning" view requires treating "what sort of author wrote X?" as the LLM's operative hypothesis space — but this may be entirely projected by the human theorist. Why should author-like latent variables be privileged over, say, any other explanatory schema? The interpretability evidence (SAE features, Assistant Axis) is the authors' main reply, but the interpretability results are themselves subject to the streetlight effect. The inferential gap between "produces character-consistent outputs" and "maintains a model of character" is load-bearing for PSM and remains genuinely open.

## Relevant concepts

[[definitions/persona-selection-model]], [[definitions/assistant-persona]], [[definitions/emergent-misalignment]]

## Notes

This is the foundational claim on which all downstream PSM consequences depend. Its strength determines how far the analogy to sociological role theory can be pushed — if post-training is elicitation of pre-existing persona structure, then the "role" the Assistant plays is genuinely prior to the specific training process, which has interesting parallels to structuralist accounts of role.
