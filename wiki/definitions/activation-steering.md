---
title: "Activation Steering (SAE Feature Steering)"
type: definition
tags: [llm, empirical]
created: 2026-04-11
updated: 2026-04-11
sources:
  - "raw/The Persona Selection Model Why AI Assistants might Behave like Humans.md"
related:
  - "[[definitions/persona-selection-model]]"
  - "[[findings/sae-features-shared-assistant-fictional-characters]]"
---

**Activation steering** is a technique for causally intervening on LLM behavior by directly adding or subtracting a vector in the model's internal activation space during a forward pass, rather than changing weights or prompts.

The procedure: (1) identify a direction in activation space that corresponds to some concept or behavior (e.g., "sycophancy," "panic," "toxicity"); (2) during inference, add a scaled multiple of that vector to the model's residual stream activations at one or more layers. Steering *toward* the vector amplifies the associated behavior; steering *away* suppresses it.

In the PSM literature, the relevant vectors are typically derived from **Sparse Autoencoders (SAEs)** — dictionaries of interpretable "features" learned by training a sparse linear model to reconstruct LLM activations. Each SAE feature corresponds to a direction in activation space that is selectively active on semantically coherent inputs (e.g., a feature might activate strongly on tokens related to deception across many different contexts). "Steering with an SAE feature" means using that learned direction as the intervention vector.

The evidentiary significance: if steering with a feature *causes* the predicted behavior (not just correlates with it), this establishes that the feature is causally involved in producing that behavior — a much stronger claim than interpretability-by-observation alone. Results cited in the PSM source (Templeton et al., 2024; Wang et al., 2025) use this logic to show that persona-related SAE features are causal determinants of Assistant behavior.

*Technical note:* Activation steering is related to but distinct from representation engineering and probing. Probes measure whether information is linearly decodable from activations; steering uses that same direction to *change* what the model does.
