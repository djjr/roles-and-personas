---
title: "Decomposing tasks into episodic roles prevents identity drift and enables legibility"
type: finding
tags: [llm, theoretical]
created: 2026-04-11
updated: 2026-04-11
sources:
  - "raw/Role ArchitecturesApplying LLMs to consequential tasks.md"
related:
  - "[[definitions/episodic-agent]]"
  - "[[definitions/role-architecture]]"
  - "[[findings/assistant-axis-exists-in-pretraining]]"
---

## Claim

Structuring complex tasks as sequences of bounded episodic roles — with no persistent agent memory across episodes — prevents goal drift, ensures task focus, and keeps AI behavior legible; division of labor here serves control and interpretability rather than efficiency.

## Evidence

- [[sources/role-architectures-drexler]]: Sections 6–7. Fresh context window per task = no cross-episode memory = no accumulation of long-horizon plans or identity drift. "We want workflows that divide tasks and roles because of the inherent structure of problems, and because we want *legible solutions*." Also: "Proposing long-term plans can be a short-term episodic task" — long-horizon planning need not require a long-horizon agent.

## Contradicted by / Tension with

- Some tasks are inherently iterative and resist clean episodic decomposition. Drexler acknowledges this but argues that compositional, interpretable external memory (rather than persistent agent state) can handle these cases. Whether that's achievable in practice is an open technical question.
- DJR: division for *control* rather than efficiency inverts Adam Smith's logic, but the practical distinction may not be clean — controlled systems can also be efficient. The real question is whether legibility and containment survive at scale.

## Relevant concepts

[[definitions/episodic-agent]], [[definitions/role-architecture]], [[definitions/role-fidelity]]

## Notes

*DJR analogy note:* The Madison/Federalist 51 parallel — ambition regulates ambition, single points of failure avoided by balance of power — maps directly onto this: role division as the architectural substitute for trustworthy individual agents. The goal is not to build a trustworthy superman but to build an organization whose structure makes trust less necessary.
