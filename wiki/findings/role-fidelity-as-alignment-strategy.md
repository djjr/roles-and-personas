---
title: "Role fidelity in bounded episodic tasks is a tractable alignment target where universal alignment is not"
type: finding
tags: [llm, theoretical]
created: 2026-04-11
updated: 2026-04-11
sources:
  - "raw/Role ArchitecturesApplying LLMs to consequential tasks.md"
related:
  - "[[definitions/role-fidelity]]"
  - "[[definitions/role-architecture]]"
  - "[[definitions/episodic-agent]]"
  - "[[findings/psm-post-training-as-persona-refinement]]"
---

## Claim

Reframing alignment as "enabling useful behavior while avoiding unacceptable behavior in particular roles" dramatically lowers the bar for safe deployment — a narrowly scoped episodic agent has a smaller semantic attack surface, allows fault-tolerant design, and can be reliably aligned without solving general AI alignment.

## Evidence

- [[sources/role-architectures-drexler]]: Drexler's Sections 4–5. The vulnerability of chatbots (Bing/Sydney, ChatGPT DAN jailbreak) stems from their implementation as "public-facing, omni-use systems, a role which exposes a vast and vulnerable semantic attack surface." Narrowing scope narrows the attack surface. Fault-tolerance means no single output is irrevocable.

## Contradicted by / Tension with

- The argument assumes role boundaries can be maintained — that an LLM assigned to a narrow role won't be nudged, prompted, or manipulated into expanding its scope. PSM's findings on context-driven persona drift ([[findings/assistant-axis-exists-in-pretraining]]) and many-shot jailbreaks suggest role boundaries are not robust against all adversarial pressure.
- "Solving classic AGI-agent alignment is neither necessary nor sufficient" — Drexler's strongest claim — is plausible if role architectures work well enough and bad actors don't deploy uncontained agents anyway.

## Relevant concepts

[[definitions/role-fidelity]], [[definitions/role-architecture]], [[definitions/episodic-agent]]

## Notes

This finding sits in productive tension with PSM's alignment implications: PSM says alignment = ensuring safe Assistant persona traits; Drexler says alignment = ensuring role-appropriate behavior in specific tasks. The two are compatible (a persona with safe traits will also exhibit role fidelity) but focus on different levers — psychological vs. architectural.
