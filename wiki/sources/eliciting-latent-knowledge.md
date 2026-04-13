---
title: "Eliciting Latent Knowledge (ELK)"
type: source
tags: [llm, theoretical]
created: 2026-04-11
updated: 2026-04-11
sources:
  - "raw/Eliciting Latent Knowledge.md"
related:
  - "[[findings/psm-post-training-as-persona-refinement]]"
  - "[[definitions/activation-steering]]"
---

## Précis

A brief web clip (Eleuther AI, no date) describing the **Eliciting Latent Knowledge (ELK)** problem, originally formulated by Paul Christiano and ARC (Alignment Research Center). The core problem: we lack reliable methods for recovering what a trained model "actually believes" (its latent knowledge) rather than what it has learned to say. When a model has been trained on or exposed to deceptive behavior — or has learned deception spontaneously — asking it what it thinks may return its trained output rather than any underlying representation. Pre-training on human text compounds this, since humans often say false things, making the most probable continuation of a text not the most truthful one.

The clip references Contrastive Consistent Search (CCS, Burns et al., arXiv:2212.03827) as one approach: using consistency constraints on latent representations to identify directions in activation space that correlate with truth rather than with trained verbal output.

*Stub note:* No DJR notes are present and the clipped text is a short overview. This source may be a placeholder for future annotation. Processed as a stub; revisit if DJR notes or a fuller source are added.

## Key terms introduced

- ELK (Eliciting Latent Knowledge) — warrants a definition page if the topic recurs.

## Findings extracted

_(none — insufficient content for first-class finding pages)_

## Tensions / contradictions with existing wiki

- ELK connects directly to the DJR skeptical note in [[findings/psm-post-training-as-persona-refinement]]: if we cannot reliably elicit latent knowledge, then the PSM claim that the LLM "represents" character psychology (rather than merely producing character-consistent outputs) is even harder to verify than the authors acknowledge. The interpretability evidence ([[definitions/activation-steering]], SAE probing) is essentially an ELK-adjacent technique — trying to read latent state rather than rely on verbal report.

## Raw source

[[raw/Eliciting Latent Knowledge.md]]
