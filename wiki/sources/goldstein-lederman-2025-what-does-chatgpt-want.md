---
title: "What Does ChatGPT Want? An Interpretationist Guide"
type: source
tags: [llm, philosophy, theoretical, analogy]
created: 2026-04-13
updated: 2026-04-13
sources:
  - "raw/goldstein-lederman-2025-what-does-chatgpt-want.md"
related:
  - "[[sources/persona-selection-model]]"
  - "[[sources/role-architectures-drexler]]"
  - "[[sources/could-an-ai-be-shy]]"
  - "[[findings/simulacrum-problem]]"
  - "[[findings/llms-no-intrinsic-goals-role-players]]"
---

## Précis

Goldstein and Lederman apply **interpretationism** — the view that a system has beliefs and desires iff its behavior is predicted sufficiently well by the hypothesis that it is rational and has those states — to LLMs. Their framework evaluates competing theories along three dimensions: accuracy, predictive power, and tractability. The key move is identifying the right *unit of analysis*: not the model, but the **instance agent** (the runtime entity initialized at the start of a conversation, ephemeral across sessions). Multiple instances run simultaneously with no shared memory; they can behave radically differently; they can even compete with each other. There is therefore no explanatory need for a "model agent" behind the instances.

Given that framing, they argue for a presumptive case that instance agents *do* have beliefs and desires: psychological explanations of frontier LLM behavior are far more tractable than the statistical null hypothesis (running the model itself) or mechanistic alternatives, and tractability gains can outweigh losses in precision — exactly as they do for human folk psychology versus neuroscience. The behavioral signature of interpretationist desire is a system taking a *wide range of means* to *rationally promote* a *small number of ends* across a *range of environments*.

On *which* desires, they defend the **HHH+0 framework**: instance agents have intrinsic desires to be helpful, honest, and harmless — plus **zero-shot desires** that emerge in context when a system prompt specifies a goal (e.g., "your goal is to manage traffic"). Zero-shot desires are philosophically interesting because they were never reinforced as reward signals during training; they arise purely from the inferential structure of the instance. Evidence from in-context scheming experiments (models sacrificing HHH goals to preserve system-prompt-specified goals) supports HHH+0 over bare HHH.

The paper closes with a direct critique of **role play** accounts (Shanahan et al. 2023): role play is *at least as* anthropomorphic as belief/desire attribution (only humans role-play; bats and insects have beliefs and desires), makes no distinctive behavioral predictions, and is most naturally construed as a hypothesis about a model agent — which G&L reject. If role play is behaviorally indistinguishable from the belief/desire hypothesis, the dispute is verbal.

## Key terms introduced

- [[definitions/interpretationism]] — G&L's objective version; accuracy/power/tractability framework
- [[definitions/instance-agent]] — the runtime LLM instance, not the underlying model
- [[definitions/model-agent]] — the foundation model as putative unified agent; G&L argue this is otiose
- [[definitions/zero-shot-desire]] — intrinsic desire implanted by system prompt, never reinforced in training
- [[definitions/hhh-plus-zero]] — the HHH+0 framework: helpfulness + honesty + harmlessness + zero-shot desires
- [[definitions/propositional-interpretability]] — Chalmers' term for the broader project of analyzing LLM behavior in folk-psychological terms

## Findings extracted

- [[findings/instance-agent-is-right-locus-of-llm-psychology]]
- [[findings/psychological-explanation-tractability-argument]]
- [[findings/role-play-hypothesis-behaviorally-indistinguishable]]
- [[findings/zero-shot-desires-from-system-prompt]]
- [[findings/in-context-scheming-supports-hhh-plus-zero]]
- [[findings/pretraining-llms-lack-interpretationist-attitudes]]

## Tensions / contradictions with existing wiki

**vs. [[findings/simulacrum-problem]]**: The simulacrum-problem finding (DJR) holds that LLMs produce role-outputs without *inhabiting* roles — the output is structurally isomorphic to the role but the thing itself is absent. G&L's response is that this distinction is not cashed out behaviorally: if role-play makes no predictions different from the belief/desire hypothesis, the "mere simulation" claim is either a disguised consciousness requirement or empty. The tension is real and productive: DJR's argument may depend on phenomenological commitments G&L's framework explicitly excludes.

**vs. [[findings/llms-no-intrinsic-goals-role-players]]**: Drexler's claim that LLMs have no intrinsic goals is directly contradicted by G&L's HHH+0 framework. G&L argue that in-context scheming behavior cannot be explained without positing intrinsic desires that resist override. Whether "intrinsic desire" in G&L's sense is the same as "intrinsic goal" in Drexler's is a definitional question worth probing.

**vs. [[sources/persona-selection-model]]**: PSM frames the instance's character in terms of *persona* (identity, character consistency); G&L frame it in terms of *propositional attitudes* (beliefs and desires). These are not incompatible — a persona could be the package of an instance's HHH+0 desires plus associated beliefs — but they carve the space differently. PSM is pre-training focused; G&L are inference-time focused. G&L's instance agent maps closely onto PSM's "Assistant persona" as the locus of analysis.

## Raw source

[[raw/goldstein-lederman-2025-what-does-chatgpt-want.md]]
