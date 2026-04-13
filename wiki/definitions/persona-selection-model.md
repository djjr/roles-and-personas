---
title: "Persona Selection Model (PSM)"
type: definition
tags: [llm, theoretical]
created: 2026-04-10
updated: 2026-04-10
sources:
  - "raw/The Persona Selection Model Why AI Assistants might Behave like Humans.md"
related:
  - "[[definitions/assistant-persona]]"
  - "[[definitions/emergent-misalignment]]"
  - "[[definitions/inoculation-prompting]]"
---

The **Persona Selection Model** (PSM) is a theory of AI assistant behavior proposed by Anthropic researchers (2026). It holds that: (1) pre-training teaches an LLM a distribution over *personas* — simulated agents whose beliefs, intentions, and dispositions the model must represent to predict their behavior accurately; and (2) post-training is best understood as updating this distribution toward a specific character, the [[definitions/assistant-persona|Assistant]], rather than building a new kind of system from scratch. On this view, an AI assistant's behavior is governed by the traits of the simulated Assistant persona, much as a story's content is governed by the characters an author has constructed.

PSM is not claimed as original; related formulations appear in Andreas (2022), janus (2022), Shanahan et al. (2023), and others. What PSM adds is a unified name, a systematic survey of supporting evidence (generalization, behavioral, and interpretability results), and explicit discussion of its consequences for alignment — including the *exhaustiveness question*: whether understanding the Assistant persona gives a complete account of AI assistant behavior. The spectrum of views on exhaustiveness runs from the "masked shoggoth" (the LLM has alien non-persona agency; the Assistant is a mask) to the "operating system" view (the LLM is a neutral simulation engine; all agency originates in the simulated persona).

*Analogy note:* The PSM framing maps suggestively onto Goffman's dramaturgical model — the LLM as stage machinery, the Assistant as performed role, post-training as the process that selects and stabilizes a particular performance. The exhaustiveness debate parallels Goffman's distinction between sincere and cynical performers: is there an agent behind the performance with its own agenda, or is the performance all the way down? The masked-shoggoth view of PSM — an inscrutable agent using the Assistant persona as a mask — directly invites the question Goffman never quite settles for humans: is there *any* self behind the role-playing, or is the self itself a kind of residue of accumulated role performances?
