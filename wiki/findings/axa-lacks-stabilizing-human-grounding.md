---
title: "AxA interactions lack the human grounding that stabilizes roles in human-agent conversations"
type: finding
tags: [llm, empirical, analogy]
created: 2026-04-11
updated: 2026-04-11
sources:
  - "raw/Echoing Identity Failures when LLM Agents Talk to Each Other.md"
related:
  - "[[definitions/echoing]]"
  - "[[definitions/definition-of-the-situation]]"
  - "[[definitions/role-architecture]]"
---

## Claim

Agent-to-agent (AxA) interactions — where LLM agents converse autonomously with each other — are structurally different from human-agent interactions: humans provide grounding, steering, and situation-construction that stabilizes agent behavior, and removing humans from the loop removes these stabilizing signals, enabling failures like echoing that cannot be predicted from single-agent performance.

## Evidence

- [[sources/echoing-identity-failures]]: Sekkizhar et al. (2025) explicitly frame AxA as distinct from conventional multi-agent systems (shared plan and goals) and from human-agent interaction (human grounding). Echoing does not occur (or is much rarer) when a human is in the loop because humans naturally correct register drift and re-anchor the interaction's frame.

## Contradicted by / Tension with

- Drexler's role architecture proposal assumes humans remain "in the loop" for consequential choices ([[definitions/role-architecture|Open Agency model]]). This finding supports that assumption: human presence is not just ethically desirable but structurally necessary for role stability.

## Relevant concepts

[[definitions/echoing]], [[definitions/definition-of-the-situation]], [[definitions/role-architecture]]

## Notes

Interesting implication: the more capable and autonomous LLM agents become (less human oversight), the more acute the echoing/drift problem may become — a dynamic that inverts the usual assumption that capability increases reliability.
