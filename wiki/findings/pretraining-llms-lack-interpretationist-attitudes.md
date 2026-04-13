---
title: "LLMs During Pre-Training Lack Interpretationist Beliefs and Desires"
type: finding
tags: [llm, philosophy, theoretical]
created: 2026-04-13
updated: 2026-04-13
sources:
  - "raw/goldstein-lederman-2025-what-does-chatgpt-want.md"
related:
  - "[[definitions/interpretationism]]"
  - "[[definitions/instance-agent]]"
  - "[[sources/goldstein-lederman-2025-what-does-chatgpt-want]]"
  - "[[sources/persona-selection-model]]"
---

## Claim

LLMs during pre-training do not yet have interpretationist beliefs and desires; a more tractable explanation of their behavior at that stage is the hard-coded goal function, not psychological attribution.

## Evidence

- [Goldstein & Lederman 2025]: During pre-training, LLM behavior is better explained by the optimization target (next-token prediction) than by the hypothesis that the system has beliefs and desires. The tractability advantage of psychological explanation has not yet emerged at that stage. → [[sources/goldstein-lederman-2025-what-does-chatgpt-want]]
- This is deployed in the copyright context: the argument that LLMs "reading" training data is analogous to a human reading a book (Nadella) fails, because during pre-training LLMs do not have the relevant attitudes — even granting that the finished model does.

## Contradicted by / Tension with

- [[sources/persona-selection-model]]: PSM argues that persona-relevant structure is acquired *during* pre-training (the Assistant Axis exists in base models; pre-training data shapes the persona distribution). There is no direct contradiction, but G&L's claim implies that whatever is acquired in pre-training is not yet psychologically attributable — it becomes attributable only once the finished instance is running.

## Relevant concepts

[[definitions/interpretationism]], [[definitions/instance-agent]], [[definitions/propositional-interpretability]]

## Notes

This is a philosophically significant temporal claim: the moment of psychological attribution is not training but inference. It draws a clean line between the model-as-artifact and the instance-as-agent, and supports G&L's broader instance/model distinction.
