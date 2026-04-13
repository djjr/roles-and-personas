---
title: "LLMs have no intrinsic goals — all apparent agency derives from simulated roles"
type: finding
tags: [llm, theoretical]
created: 2026-04-11
updated: 2026-04-11
sources:
  - "raw/Role ArchitecturesApplying LLMs to consequential tasks.md"
related:
  - "[[definitions/persona-selection-model]]"
  - "[[definitions/role-architecture]]"
  - "[[findings/psm-post-training-as-persona-refinement]]"
---

## Claim

LLM base models have no intrinsic goals or values — their training objective creates no optimization gradient that "cares about" any state of the world — and any agentic behavior they exhibit derives entirely from simulated roles and narratives learned during pre-training.

## Evidence

- [[sources/role-architectures-drexler]]: Drexler's Section 2. The argument: pre-training optimizes for next-token prediction, which has no "preference" for any content. Any apparent preferences are inherited from the personas and roles enacted, not from an underlying optimization target. "Claims that intelligence entails goals or agency have been falsified."

## Contradicted by / Tension with

- PSM treats this as an *open question* (the exhaustiveness debate), not a settled claim. The coin-flip experiment (Claude Sonnet 4.5 assigning higher probability to preferred outcomes even outside Assistant turns) and the existence of novel post-training SAE features provide evidence against the purest form of the no-intrinsic-goals claim. Drexler appears to be asserting the operating-system view without the hedging PSM applies.
- Drexler's own footnote acknowledges: "RLHF extends training in ways that could create strong (and potentially perverse) intrinsic preferences" — partially undercutting the blanket claim.
- DJR: "LLMs ONLY play roles" is an even stronger reading — roles don't just explain agentic behavior, they exhaust LLM behavior. Worth testing as this wiki grows.

## Relevant concepts

[[definitions/persona-selection-model]], [[definitions/role-architecture]], [[definitions/role-fidelity]]

## Notes

The claim is foundational to Drexler's safety argument: if LLMs genuinely have no intrinsic goals, then the risk is entirely from role-elicitation (which can be controlled) rather than from latent optimization targets (which cannot). PSM's interpretability evidence is the best available tool for probing whether this is true post-RLHF.
