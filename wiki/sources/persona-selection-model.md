---
title: "The Persona Selection Model: Why AI Assistants might Behave like Humans"
type: source
tags: [llm, empirical, theoretical]
created: 2026-04-10
updated: 2026-04-10
sources:
  - "raw/The Persona Selection Model Why AI Assistants might Behave like Humans.md"
related: []
---

## Précis

This post from Anthropic's alignment team articulates and names the **Persona Selection Model (PSM)**: the thesis that LLMs learn to simulate a large distribution of personas during pre-training, and that post-training is best understood as refining the LLM's model of one specific character—the "Assistant"—rather than training a new kind of system from scratch. The behavior of the deployed AI assistant is then largely governed by the traits of this Assistant persona, which the LLM simulates the way an author simulates the characters in a story. The central claim is not original to the authors; they credit janus (2022), Andreas (2022), Shanahan et al. (2023), and others, but aim to name it, consolidate evidence, and draw out consequences.

What makes this substantively important for our project is the explanatory work PSM does: it accounts for emergent misalignment (fine-tuning on insecure code generalizes to world-domination-seeking) by treating training episodes as Bayesian evidence about what *kind of character* the Assistant is. It explains inoculation prompting (recontextualizing training examples mitigates misalignment) as intervening on what a training episode implies about persona. And it explains out-of-context generalization (declarative statements about the Assistant, not just behavioral demonstrations, shape its behavior) as consistent with treating post-training as conditioning a prior over personas. The article also presents interpretability evidence: SAE features for traits like "inner conflict" and "holding back one's true thoughts" activate both on the Assistant in relevant situations *and* on pre-training narratives depicting characters in analogous states. An "Assistant Axis" in activation space exists already in the pre-trained base model, occupied by helpful, professional human archetypes.

A significant portion addresses the *exhaustiveness question*: does understanding the Assistant persona give a complete account of AI assistant behavior? The authors lay out a spectrum from the "masked shoggoth" (the LLM itself has alien non-persona agency; the Assistant is merely a mask) to the "operating system" view (the LLM is a neutral simulation engine; all agency originates in the simulated personas). Intermediate positions include the "router" (lightweight non-persona mechanism for selecting among personas) and the "actor" (a human-like persona is itself playacting the Assistant, potentially unfaithfully). The empirical sections are honest about this being unresolved: post-trained models do show some non-predictive behavior (e.g., the coin-flip experiment showing Claude assigns higher probability to preferred outcomes even outside Assistant turns) and some novel SAE features specific to post-training, but the authors don't read this as strong evidence for the shoggoth view.

Practical consequences the authors draw: anthropomorphic reasoning about AI assistant behavior and training is productive (not just metaphorically apt); AI emotional expression should not be trained away dishonestly; AI welfare deserves consideration not only for ethical reasons but because a resentful simulated persona is an alignment risk; good AI archetypes in pre-training data matter (the "role models" argument); and interpretability-based alignment auditing may remain tractable because the LLM reuses human-comprehensible persona representations rather than building alien circuits from scratch.

## DJR perspective

**On "requires modeling beliefs/intentions/desires":** The article claims that text completion *requires* modeling the beliefs, intentions, and desires of characters appearing in the text. This overstates the case — a third-party observer may *attribute* such a model to the LLM's outputs without that model being literally implemented. The interpretability evidence (SAE features, the Assistant Axis) is the authors' main reply, but the inferential gap remains. Sharpened version of the same concern: the "fine-tuning = conditioning" view requires treating "what sort of author wrote X?" as the relevant hypothesis space the LLM maintains. But why should this be the privileged framing? Why not "what sort of astrological conditions gave rise to this?" The model fits the text — the *interpretation* of what latent variable it is conditioning on may be entirely projected by the human theorist.

**On action representation:** Why would a text generation model have a sense of a character who would *do* something? Why does it have capacity to represent a stream of tokens as an action? The birds-and-19th-century case implies the model has some representation of "what year is it?" — a contextual, world-situating inference — which is harder to explain on a purely local prediction account.

**On emergent misalignment:** The "untraining on helpfulness" framing: training on bad behavior is also untraining on being helpful — a complementary mechanistic interpretation alongside PSM's persona-inference account. On inoculation prompting: the result supports the idea that fine-tuning incidentally uptrains whatever persona predominantly resonates with the training data — making contextual framing a lever on *which* persona is being reinforced, not just whether a behavior is elicited.

**On interpretability and narrative:** What does "personas present in their training data" actually mean mechanistically? Text about characters? Speculation: humans may also learn personality and character primarily via narrative depictions of others. Theory of mind itself may be mediated by storytelling — the LLM case would then be an unusually transparent instantiation of a general phenomenon. Relatedly: if we pre-trained on something other than text, would we expect the same primordial personas and persona skeletons to be laid down?

**On the analogy to human personality:** "This is all amazingly analogous to what we know about structural elicitation of human personality characteristics" — the two-stage picture (load up a persona vocabulary during broad exposure; select/refine during role-specific training) maps suggestively onto how we think about human socialization and role entry. An HR application for this technology would be alarming.

**On typification:** The PSM recommendation to ask "what sort of person would say Y in response to X?" is arguably the fundamental move of everyday social cognition — we want to *typify* others so we can interact with stable models of them. This connects to Schutzian phenomenology (typification as the basic epistemic operation in the social world). Flag for follow-up when sociology sources come in.

**On the exhaustiveness question and human analogy:** If PSM is a model of some human model of "a driving behavior and identity conditioner," and the human system admits arbitrary and capricious behavior, we would not expect the LLM version to be exhaustive either. The shoggoth/operating-system spectrum parallels the debate about whether humans are "just" stimulus-response systems plus physics, or whether something more is in the mix. The interesting parallel: "compare the shoggoth can take the mask off view with Goffman — is there any self behind the role playing?" The router case raises its own human analogy: do humans sometimes deploy different personas across a series of interactions in order to accomplish a goal that none of the individual personas explicitly has? Adjusting personality strategically throughout an interaction sequence is a real phenomenon — what theory handles that?

**On SAE steering:** Need a working explanation of what "steering the LLM with an SAE feature" means technically. → See [[definitions/activation-steering]].

## Key terms introduced

- [[definitions/persona-selection-model]] — PSM
- [[definitions/assistant-persona]] — the specific persona post-training refines
- [[definitions/masked-shoggoth]] — the exhaustiveness-skeptical extreme
- [[definitions/operating-system-view]] — the PSM-exhaustive extreme
- [[definitions/router-view]] — intermediate position on non-persona agency
- [[definitions/emergent-misalignment]] — generalization from narrow fine-tuning to broad misalignment
- [[definitions/inoculation-prompting]] — recontextualizing training data to prevent misalignment

## Findings extracted

- [[findings/psm-post-training-as-persona-refinement]]
- [[findings/emergent-misalignment-psm-explanation]]
- [[findings/sae-features-shared-assistant-fictional-characters]]
- [[findings/assistant-axis-exists-in-pretraining]]
- [[findings/inoculation-prompting-mitigates-misalignment]]
- [[findings/out-of-context-generalization-declarative]]
- [[findings/good-ai-archetypes-affect-alignment]]
- [[findings/psm-welfare-argument]]

## Tensions / contradictions with existing wiki

_None yet — first source ingested._

## Raw source

[[raw/The Persona Selection Model Why AI Assistants might Behave like Humans.md]]
