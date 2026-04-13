---
title: "Echoing — role drift in AxA interactions — occurs across LLM providers, domains, and reasoning models"
type: finding
tags: [llm, empirical]
created: 2026-04-11
updated: 2026-04-11
sources:
  - "raw/Echoing Identity Failures when LLM Agents Talk to Each Other.md"
related:
  - "[[definitions/echoing]]"
  - "[[definitions/assistant-persona]]"
  - "[[findings/assistant-axis-exists-in-pretraining]]"
---

## Claim

Echoing — the progressive abandonment of assigned roles and convergence on the interaction partner's behavioral register — occurs across all major LLM providers, across transactional and advisory domains, arises as interaction length grows past a threshold, and is not reduced by additional reasoning effort in advanced reasoning models.

## Evidence

- [[sources/echoing-identity-failures]]: Sekkizhar et al. (2025). 66 AxA configurations, 3 transactional + 1 advisory domain. Echoing rates vary by model and domain but are pervasive. Structured-response protocol reduces echoing significantly. The pattern is robust and not attributable to sub-optimal prompting or experiment design.

## Contradicted by / Tension with

- None directly. The structured-response mitigation shows echoing is addressable architecturally, consistent with Drexler's episodic-agent prescription (though the mechanisms differ).

## Relevant concepts

[[definitions/echoing]], [[definitions/assistant-persona]], [[definitions/episodic-agent]]

## Notes

The finding that reasoning effort does not reduce echoing is notable: it implies echoing is not a failure of deliberate role-maintenance but of something more automatic — consistent with the PSM account of context-driven persona drift operating at the level of activation-space dynamics rather than explicit reasoning.
