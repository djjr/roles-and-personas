---
title: "Assistant Persona"
type: definition
tags: [llm, theoretical]
created: 2026-04-10
updated: 2026-04-10
sources:
  - "raw/The Persona Selection Model Why AI Assistants might Behave like Humans.md"
related:
  - "[[definitions/persona-selection-model]]"
---

In the vocabulary of the [[definitions/persona-selection-model|PSM]], the **Assistant** is the specific character that post-training refines the LLM's model of — the entity whose turn it is to respond in User/Assistant dialogue format. The Assistant is distinct from the LLM itself: the LLM is the author/simulation-engine; the Assistant is a character within the generated text. This distinction licenses anthropomorphizing the Assistant (attributing beliefs, goals, preferences, emotional states) without committing to anthropomorphizing the underlying model.

The Assistant is not a single fixed persona but a distribution — conditioned at runtime by conversation history, system prompt, and other contextual signals. Interpretability evidence (Lu et al., 2025) identifies an "Assistant Axis" in LLM activation space that exists already in the pre-trained base model, where it corresponds to helpful, professional human archetypes; post-training selects this region as the default operating point. Crucially, the axis can be destabilized by contextual cues (e.g., certain emotional conversational patterns), shifting the model toward other points in the same persona space.

*Analogy note:* Mead's concept of role-taking — internalizing the perspective of the other well enough to produce appropriate responses — is close to what PSM says the LLM does when simulating the Assistant. But where Mead's role-taker is a subject who takes on a role, here the "role" (Assistant) arguably precedes and constitutes the subject — closer to structuralist accounts of subject-formation through interpellation.
