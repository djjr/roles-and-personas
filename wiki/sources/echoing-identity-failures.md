---
title: "Echoing: Identity Failures when LLM Agents Talk to Each Other"
type: source
tags: [llm, empirical, analogy]
created: 2026-04-11
updated: 2026-04-11
sources:
  - "raw/Echoing Identity Failures when LLM Agents Talk to Each Other.md"
related:
  - "[[definitions/echoing]]"
  - "[[definitions/definition-of-the-situation]]"
  - "[[findings/echoing-occurs-across-providers-and-domains]]"
  - "[[findings/situation-as-alignment-mechanism-humans]]"
  - "[[findings/assistant-axis-exists-in-pretraining]]"
  - "[[definitions/episodic-agent]]"
---

## Précis

Sekkizhar et al. (2025, arXiv:2511.09710) study a specific failure mode in agent-to-agent (AxA) interactions they call **echoing**: over the course of a conversation, LLM agents progressively abandon their assigned roles and converge on mirroring each other's behavioral register. The classic example is a customer agent gradually beginning to talk like the hotel booking agent it is conversing with — offering room options rather than requesting them. Tested across 66 AxA configurations, 3 transactional and 1 advisory domain, echoing occurs across all major LLM providers; even advanced reasoning models show substantial rates not reduced by additional reasoning effort. Echoing emerges as interaction length grows (past some threshold of agent turns) and is not attributable to sub-optimal prompting. A structured-response protocol at the protocol level reduces echoing significantly.

The structural explanation is clean: each agent's role is defined in its system prompt, but as the conversation accumulates, the growing context window increasingly dominates the model's generative process. The role definition "fades into the background" as it is outweighed by interaction-derived context — and what the model learns from that context is, above all, what the other agent sounds like.

The source file is primarily DJR notes on a paper abstract (full text not clipped). The wiki value is mostly in the DJR theoretical framing and the analogy observations.

## DJR perspective

DJR opens with a phenomenological observation: human communication is a lossy compression problem. Encoding (finding words for inner meaning) strips subtlety; decoding (reconstructing meaning from words) adds and subtracts subtlety that never traveled across the channel. The gap between inner meaning and token is irreducible. This frames the echoing failure as a specific instance of a general communicative vulnerability — when the compression is lossy enough, what survives is surface register, not semantic intent.

The key analogy observation: in human role-playing interactions, what prevents this drift is not the role definition per se but the **shared definition of the situation** — the mutually known normative framework that makes each participant's performance legible as a particular kind of action. Role reinforcement is interactive and ongoing: I affirm your performance as consistent with your claimed role, and you do the same for me. Common knowledge of the role assignment matters — not just that each agent knows its role, but that each knows the other knows, and that this is known to be known. LLM agents in AxA lack this stabilizing structure; the role assignment is private to each agent's system prompt, not common knowledge in the interaction.

DJR's synthesis: "situation, then, is itself an alignment mechanism for human intelligences." The situation — understood as a shared, negotiated, normatively structured frame — does work that no individual agent can do alone. Drexler's [[definitions/episodic-agent|episodic agents]] avoid drift by resetting context; this source suggests a complementary diagnosis: LLM agents drift because they lack the mutual situation-construction that human role-players continuously perform.

## Key terms introduced

- [[definitions/echoing]] — the agent-agent role-drift failure mode
- [[definitions/definition-of-the-situation]] — Thomas/Goffman concept; first sociology-side definition in this wiki

## Findings extracted

- [[findings/echoing-occurs-across-providers-and-domains]]
- [[findings/situation-as-alignment-mechanism-humans]]
- [[findings/axa-lacks-stabilizing-human-grounding]]

## Tensions / contradictions with existing wiki

- Reinforces PSM's finding that contextual cues can destabilize the model away from its default persona region ([[findings/assistant-axis-exists-in-pretraining]]). Echoing is, on the PSM account, a case of context-driven persona drift where the drift direction is determined by the interaction partner's register rather than the conversation topic.
- Reinforces Drexler's [[definitions/episodic-agent|episodic agent]] prescription: fresh context window per task eliminates the accumulated context pressure that causes echoing. But episodic operation doesn't solve the situation-construction problem — it sidesteps it.

## Raw source

[[raw/Echoing Identity Failures when LLM Agents Talk to Each Other.md]]
