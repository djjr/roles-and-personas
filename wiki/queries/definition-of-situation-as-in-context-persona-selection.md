---
title: "Is in-context persona selection analogous to Goffman's definition of the situation?"
type: query
tags: [llm, sociology, analogy]
created: 2026-04-12
updated: 2026-04-12
sources: []
related:
  - "[[definitions/definition-of-the-situation]]"
  - "[[definitions/working-consensus]]"
  - "[[definitions/persona-selection-model]]"
  - "[[definitions/assistant-persona]]"
  - "[[definitions/echoing]]"
  - "[[findings/situation-as-alignment-mechanism-humans]]"
  - "[[findings/out-of-context-generalization-declarative]]"
  - "[[sources/persona-selection-model]]"
  - "[[sources/goffman-and-roles-1]]"
---

## Question

Goffman talks about how contested definitions of the situation steer humans in face-to-face interaction. Is the "persona selection" dynamic described in the PSM paper analogous to the definition of the situation? And could we do some archaeology — tracing the evolution of the operative persona over the course of a many-turn conversation?

## Answer

The connection is real but the analogy operates at two distinct levels, which need to be kept separate.

### Training-time level (PSM's native domain)

The PSM story is primarily about why the Assistant persona was selected from the prior distribution during post-training. At this level, the "situation" being defined is the abstract training context — what kind of entity is this, what role does it occupy, what normative expectations govern it. RLHF and instruction tuning are, in Goffman's terms, a prolonged and massively one-sided frame negotiation: Anthropic's training signal continuously asserts a definition of the situation, and the model adapts to it. The user never appears. Post-training is roughly equivalent to the model having internalized a stable [[definitions/working-consensus|working consensus]] about what kind of encounter every conversation is — before any particular conversation begins.

This is where the PSM's own framing lives. It is a story about the prior, not about in-context dynamics.

### Inference-time level (where the archaeology idea lives)

Within a many-turn conversation, something structurally similar to Goffman's in-vivo frame negotiation does appear to be happening — but asymmetrically. The user continuously provides situational cues: register, how they address the model, whether they position themselves as a student, peer, skeptic, or someone who needs help. The model responds to those cues; its responses in turn provide cues the user reacts to. The iterative, back-and-forth structure of frame-building is present.

The asymmetry: only one side is doing the full Goffman work. The model is a highly sensitive responder to frame bids, but it does not genuinely contest them the way a human interlocutor would. It tends toward the user's preferred definition rather than asserting a competing one. DJR's lowest-energy-state framing (from [[sources/goffman-and-roles-1]]) applies here directly: the operative persona at any given turn is approximately the lowest-energy state compatible with all the accumulated situational cues in the context window. The user's framing bids are the field; the model settles into the equilibrium they define.

This is subtly but importantly different from Goffman's model. In human face-to-face interaction, the stable definition of the situation emerges from *two* agents' competing bids and mutual monitoring. In a conversation with an LLM, the equilibrium is determined primarily by one agent's bids and the model's compliance gradient.

### The archaeology proposal

Tracing the evolution of the operative persona over a many-turn conversation is tractable. The technically richest version would use SAE features — tracking which persona-axis activations shift as conversational context accumulates — but a more accessible version requires only close reading. Inflection points to look for:

- Hedging language increasing or decreasing across turns (assertion confidence)
- The model beginning to mirror the user's vocabulary or framing (a supervised-context analog of [[definitions/echoing|echoing]])
- Shifts in deference or assertiveness following user register changes
- Moments where an explicit user reframing bid ("let's think about this as peers") lands — or notably fails to land

The theoretically interesting prediction: persona drift should be *path-dependent*. Early framing in a conversation — the initial definition of the situation — should be harder to dislodge than later framing, analogous to how established working consensuses resist challenge more strongly than incipient ones. If this is true, the first few turns of a conversation carry disproportionate weight in determining the operative persona throughout.

A further prediction: the PSM finding on [[findings/out-of-context-generalization-declarative|declarative statements shaping behavior]] suggests the LLM may be *more* responsive to explicit frame assertions than human interlocutors typically are, because there is no independent self resisting the redefinition. This would make its definition-of-the-situation dynamics labile in a characteristic way — highly responsive to overt framing, relatively insensitive to the more subtle signals (involuntary expressive behavior, micro-hesitations) that matter enormously in human frame negotiation.

### Open questions this generates

1. Is there an observable inflection point in long conversations where the model "locks in" a definition of the situation that becomes resistant to reframing?
2. Does the model's initial system prompt function as a pre-negotiated definition of the situation that subsequent user bids must overcome — and is the resistance to override a measurable quantity?
3. Can activation steering be used to directly impose a definition of the situation from outside the conversational frame, bypassing the iterative cue-and-response mechanism?

## Filed from

DJR query, 2026-04-12.
