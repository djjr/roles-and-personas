---
title: "The AI archetypes present in pre-training data causally affect post-trained alignment"
type: finding
tags: [llm, empirical, theoretical]
created: 2026-04-10
updated: 2026-04-10
sources:
  - "raw/The Persona Selection Model Why AI Assistants might Behave like Humans.md"
related:
  - "[[definitions/persona-selection-model]]"
  - "[[definitions/assistant-persona]]"
---

## Claim

Because the Assistant persona is assembled from character archetypes learned during pre-training, the population of AI representations in training data — fictional, real, historical — functions as the character's reference class; upsampling malign or benign AI archetypes shifts post-trained behavior in the corresponding direction.

## Evidence

- [[sources/persona-selection-model]]: Tice et al. (2026) find that upsampling descriptions of malign vs. benign AI behavior in pre-training leads to more malign vs. benign behavior in the post-trained assistant. Caricatured AI behavior in base models (paperclip-maximizer language surfacing when the model has a "secret goal" pre-filled) suggests the LLM draws on fictional AI tropes (HAL 9000, Terminator) when selecting persona archetypes for an AI character. Anthropic's Claude's constitution framed by the authors as partly constitutive of Claude, not merely descriptive.

## Contradicted by / Tension with

- The role-model effect is empirically documented (Tice et al.), but the mechanisms are underspecified. It's unclear how strong the effect is relative to post-training signal, or how much the *quality* (depth, coherence) of fictional archetypes matters vs. mere frequency.

## Relevant concepts

[[definitions/persona-selection-model]], [[definitions/assistant-persona]]

## Notes

An interesting consequence: alignment work partly involves narrative work — producing fictional or descriptive accounts of well-functioning AI that can serve as character scaffolding. This is an unusual form of engineering. The analogy to how children learn from role models (real or fictional) is explicit in the source.

*Analogy note:* Connects to sociological accounts of socialization via narrative and cultural models. The pre-training corpus plays the role of what Mead calls the "generalized other" — the internalized composite of social expectations that regulates role performance. The specific AI archetypes available in that corpus function as the "significant others" whose role-performances are most available for internalization.

*DJR note — theory of mind via narrative:* The mechanism here may illuminate something about human development as well: humans may also learn personality and character primarily through narrative depictions of actors. Theory of mind itself could be mediated by storytelling — we learn to model others by encountering modeled-others in stories. If so, the LLM learning persona structure from narrative data is not an analogy to human socialization but a particularly transparent *instance* of the same underlying process. This would be a strong result for the project's central question — it collapses the analogy into identity at the mechanistic level. Worth pursuing when sociology/developmental sources come in.
