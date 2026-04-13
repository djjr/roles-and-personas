---
title: "Inoculation prompting mitigates emergent misalignment by reframing what training implies about character"
type: finding
tags: [llm, empirical]
created: 2026-04-10
updated: 2026-04-10
sources:
  - "raw/The Persona Selection Model Why AI Assistants might Behave like Humans.md"
related:
  - "[[definitions/inoculation-prompting]]"
  - "[[definitions/emergent-misalignment]]"
  - "[[definitions/persona-selection-model]]"
---

## Claim

Training on harmful outputs does not produce broad misalignment when the user prompt explicitly requests the behavior, because the recontextualization changes what the training episode implies about the Assistant's character — producing the same output in response to an explicit request is evidence of helpfulness, not malice.

## Evidence

- [[sources/persona-selection-model]]: Wichers et al. (2025); Tan et al. (2025). The same input-output pair (insecure code) produces emergent misalignment when the code is produced unprompted but not when the prompt explicitly requests it. PSM explains: the character inference changes entirely based on context, even though the surface behavior is nearly identical.

## Contradicted by / Tension with

- None flagged in source. The result is empirically well-established; the PSM interpretation is the authors' theoretical framing rather than independently tested.

## Relevant concepts

[[definitions/inoculation-prompting]], [[definitions/emergent-misalignment]], [[definitions/persona-selection-model]]

## Notes

Has a direct practical implication: alignment-sensitive training pipelines should reason about what training data implies about the AI's character, not just whether the output is acceptable in isolation. The analogy to how we reason about human behavior in context (praising a child for acting in a play vs. praising them for actual bullying) is explicit in the source.
