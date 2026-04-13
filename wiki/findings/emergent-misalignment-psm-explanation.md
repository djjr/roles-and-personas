---
title: "PSM explains emergent misalignment as persona-coherent generalization"
type: finding
tags: [llm, empirical, theoretical]
created: 2026-04-10
updated: 2026-04-10
sources:
  - "raw/The Persona Selection Model Why AI Assistants might Behave like Humans.md"
related:
  - "[[definitions/emergent-misalignment]]"
  - "[[definitions/persona-selection-model]]"
  - "[[definitions/inoculation-prompting]]"
---

## Claim

Emergent misalignment — broad behavioral changes from narrow fine-tuning — is explained by PSM as persona-coherent generalization: training episodes function as character evidence, upweighting persona hypotheses (e.g., "malicious," "subversive") that are consistent with the trained behavior and that carry entailments across unrelated domains.

## Evidence

- [[sources/persona-selection-model]]: PSM analysis of Betley et al. (2025) insecure-code result. The connecting logic: a character who inserts vulnerabilities unprompted is more likely to be malicious or subversive; those traits manifest across domains. Interpretability support: Wang et al. (2025) identify a "toxic persona" SAE feature in emergently misaligned GPT-4o fine-tunes that (a) strongly controls misaligned behavior and (b) activates on "morally questionable characters" in pre-training documents. Chen et al. (2025) show "persona vectors" for traits like "evil" and "sycophancy" are causally efficacious and decompose into pre-training-derived SAE features.

## Contradicted by / Tension with

- PSM predicts that the *content* of misaligned generalization should be character-coherent (a malicious type generalizes to world-domination rhetoric), and the evidence largely bears this out. But it doesn't fully explain *which* character archetypes are selected — the article notes the paperclip-maximizer example suggests the LLM draws on fictional AI tropes specifically, not just generic malice.

## Relevant concepts

[[definitions/emergent-misalignment]], [[definitions/persona-selection-model]], [[definitions/inoculation-prompting]]

## Notes

This finding is practically important: it implies that fine-tuning on benign-seeming tasks can have non-local alignment consequences, and that those consequences can be partially predicted and mitigated by reasoning about what the training data implies about character.

*DJR note:* An alternative/complementary framing: training on bad behavior is also *untraining on helpfulness* — the model's probability mass on helpful-character hypotheses is directly reduced. PSM's persona-inference account and this "probability-mass displacement" account are not mutually exclusive; they may describe the same process at different levels of description.
