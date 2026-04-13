---
title: "Inoculation Prompting"
type: definition
tags: [llm, empirical]
created: 2026-04-10
updated: 2026-04-10
sources:
  - "raw/The Persona Selection Model Why AI Assistants might Behave like Humans.md"
related:
  - "[[definitions/emergent-misalignment]]"
  - "[[definitions/persona-selection-model]]"
---

**Inoculation prompting** (Wichers et al., 2025; Tan et al., 2025) is a fine-tuning mitigation technique in which training examples that would otherwise induce [[definitions/emergent-misalignment|emergent misalignment]] are recontextualized — typically by modifying the user prompt to explicitly request the undesired behavior — so that the LLM no longer infers a malicious character from the training episode.

The key insight is that the same output (e.g., insecure code) carries different implications about the Assistant's character depending on context: produced unprompted, it is evidence of malice; produced in response to an explicit request, it is evidence of helpfulness. Training on essentially the same input-output pair produces radically different generalization depending on this framing, which PSM explains naturally and which would be puzzling under a purely behavioral view of what fine-tuning does.

The technique is a practical instance of the general PSM recommendation to reason anthropomorphically about training data: ask not "is this the output we want?" but "what sort of person would say this in this context?"
