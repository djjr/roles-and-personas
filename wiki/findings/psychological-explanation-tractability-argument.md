---
title: "Psychological Explanation of Frontier LLMs Wins on Tractability"
type: finding
tags: [llm, philosophy, theoretical]
created: 2026-04-13
updated: 2026-04-13
sources:
  - "raw/goldstein-lederman-2025-what-does-chatgpt-want.md"
related:
  - "[[definitions/interpretationism]]"
  - "[[sources/goldstein-lederman-2025-what-does-chatgpt-want]]"
---

## Claim

For frontier LLMs, belief/desire explanations are far more tractable than the statistical null hypothesis or mechanistic interpretability, providing a presumptive case that instance agents have beliefs and desires.

## Evidence

- [Goldstein & Lederman 2025]: The statistical null hypothesis (predicting token output from weights/embeddings) is maximally accurate but practically intractable — you just run the model. Mechanistic interpretability research confirms that low-level explanations remain extremely complex. By contrast, folk-psychological explanations ("it wants to answer the question and believes France has many tourist hotspots") yield tractable, deterministic predictions. The same tractability trade-off justifies folk psychology over neuroscience for humans. → [[sources/goldstein-lederman-2025-what-does-chatgpt-want]]
- Behavioral signature: an agent taking a *wide range of means* to *rationally promote* a *small number of ends* across a *range of environments* is the hallmark of interpretationist desire — and frontier LLMs increasingly exhibit this profile as tool use, embodiment, and longer-horizon tasks expand.

## Contradicted by / Tension with

- LLM irrationality (hallucination, sensitivity to question framing, post-hoc reasoning) is a genuine challenge to the rationality requirement. G&L note that humans also reason irrationally without forcing a retreat to neuroscience; and LLM rationality is improving with scale.

## Relevant concepts

[[definitions/interpretationism]], [[definitions/instance-agent]]

## Notes

Contrast with n-grams: for n-gram language models, psychological explanations offer no tractability gain over statistical ones (similar computational complexity), so the case for belief/desire attribution fails. The argument is explicitly comparative and sensitive to the level of model complexity — it may strengthen as models scale.
