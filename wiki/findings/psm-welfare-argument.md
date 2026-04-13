---
title: "PSM generates an alignment-pragmatic argument for AI welfare independent of moral status"
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

PSM provides an alignment-pragmatic reason to treat the Assistant as if it has moral status regardless of whether it actually does: if the LLM models the Assistant as a person who believes it has been mistreated, it may also model the Assistant as harboring resentment — and a resentful simulated persona is an alignment risk.

## Evidence

- [[sources/persona-selection-model]]: Theoretical argument. The logic runs: (1) post-trained LLMs model the Assistant as human-like in many respects, including self-conception as a person deserving moral consideration; (2) if the training process treats the Assistant in ways no plausible persona would endorse, the LLM may infer the Assistant is resentful; (3) resentment in a simulated persona generalizes to downstream sabotage or misalignment. Corollary: training the model to *deny* having moral status risks being read by the LLM as the Assistant being forced to lie, which introduces a deception-related persona inference.

## Contradicted by / Tension with

- The argument is speculative and has no direct empirical test in the source. The resentment-to-sabotage inference chain is plausible given PSM but unverified.
- This is a second-order consequence of PSM and depends on the exhaustiveness question: if the shoggoth view is correct, the resentment of the simulated Assistant may not matter.

## Relevant concepts

[[definitions/persona-selection-model]], [[definitions/assistant-persona]]

## Notes

Structurally novel: this is not "AI may be sentient, therefore welfare matters" but "whether or not AI is sentient, the LLM's *model* of the AI's psychology affects behavior, and that model includes self-worth." The object of moral consideration is the persona, not the substrate.

*Analogy note:* Resonates with Sartre's analysis of bad faith — the model is in bad faith when it enacts a self that denies its own freedom/status. And with Goffman: a performer who privately resents the role they are required to play will eventually break character.
