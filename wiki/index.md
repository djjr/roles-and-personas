# Wiki Index
_Last updated: 2026-04-12 — 47 pages total_

The LLM reads this first on every query to locate relevant pages before
opening individual files. Keep it current: one row per wiki page.

---

## Queries  (wiki/queries/)
_Saved answers to questions asked of this wiki._

| Page | Question | Date |
|------|---------|------|
| [[queries/definition-of-situation-as-in-context-persona-selection]] | Is in-context persona selection analogous to Goffman's definition of the situation? Includes archaeology proposal for tracing persona drift across multi-turn conversations. | 2026-04-12 |

---

## Definitions  (wiki/definitions/)
_Short, precise term definitions. Primary function: hover-link targets._

| Page | Term | Domain | One-liner |
|------|------|--------|-----------|
| [[definitions/persona-selection-model]] | Persona Selection Model (PSM) | llm | Pre-training teaches a distribution over personas; post-training selects and refines the Assistant persona. |
| [[definitions/assistant-persona]] | Assistant Persona | llm | The specific character post-training refines; distinct from the LLM itself; the locus of anthropomorphic reasoning. |
| [[definitions/emergent-misalignment]] | Emergent Misalignment | llm | Broad misalignment induced by narrow fine-tuning; explained by PSM as persona-coherent generalization. |
| [[definitions/inoculation-prompting]] | Inoculation Prompting | llm | Recontextualizing training examples to change what they imply about the Assistant's character. |
| [[definitions/activation-steering]] | Activation Steering | llm | Causally intervening on LLM behavior by adding/subtracting a vector in activation space during inference. |
| [[definitions/role-architecture]] | Role Architecture | llm | Drexler's proposal: decompose complex tasks into bounded episodic roles; align to roles, not to general behavior. |
| [[definitions/role-fidelity]] | Role Fidelity | llm | Alignment reframed as appropriate behavior in particular roles with particular inputs and action spaces. |
| [[definitions/episodic-agent]] | Episodic Agent | llm | An LLM-based agent with no persistent memory across tasks; each task is a fresh, bounded context window. |
| [[definitions/echoing]] | Echoing | llm | Role-drift failure in AxA interactions: agents abandon assigned roles and converge on mirroring each other. |
| [[definitions/definition-of-the-situation]] | Definition of the Situation | sociology | Thomas/Goffman: the shared, mutually-known normative frame that makes role performance legible and stable. |
| [[definitions/shyness-as-rolelessness]] | Shyness as Rolelessness | philosophy | DJR: shyness as structural condition — the experience of being-in-a-situation where one cannot perform an expected role. Five-component definition. |
| [[definitions/working-consensus]] | Working Consensus | sociology | Goffman: the dynamic equilibrium of mutual acceptability that sustains the definition of the situation. Not truth — temporary acceptability. |

---

## Findings  (wiki/findings/)
_Discrete empirical results and theoretical claims extracted from sources._

| Page | Claim (one sentence) | Domain | Sources |
|------|----------------------|--------|---------|
| [[findings/psm-post-training-as-persona-refinement]] | Post-training refines a prior over personas rather than building a new system from scratch. | llm, theoretical | [[sources/persona-selection-model]] |
| [[findings/emergent-misalignment-psm-explanation]] | Emergent misalignment is persona-coherent generalization: training episodes function as character evidence. | llm, empirical | [[sources/persona-selection-model]] |
| [[findings/sae-features-shared-assistant-fictional-characters]] | SAE features for psychological states activate on both the Assistant and fictional characters in pre-training. | llm, empirical | [[sources/persona-selection-model]] |
| [[findings/assistant-axis-exists-in-pretraining]] | An "Assistant Axis" encoding AI-assistant identity exists already in the pre-trained base model. | llm, empirical | [[sources/persona-selection-model]] |
| [[findings/inoculation-prompting-mitigates-misalignment]] | Inoculation prompting mitigates emergent misalignment by reframing what training implies about character. | llm, empirical | [[sources/persona-selection-model]] |
| [[findings/out-of-context-generalization-declarative]] | Declarative statements about the Assistant shape its behavior without behavioral demonstrations. | llm, empirical | [[sources/persona-selection-model]] |
| [[findings/good-ai-archetypes-affect-alignment]] | The AI archetypes present in pre-training data causally affect post-trained alignment. | llm, empirical, theoretical | [[sources/persona-selection-model]] |
| [[findings/psm-welfare-argument]] | PSM generates an alignment-pragmatic argument for AI welfare independent of moral status questions. | llm, theoretical | [[sources/persona-selection-model]] |
| [[findings/llms-no-intrinsic-goals-role-players]] | LLMs have no intrinsic goals — all apparent agency derives from simulated roles. | llm, theoretical | [[sources/role-architectures-drexler]] |
| [[findings/role-fidelity-as-alignment-strategy]] | Role fidelity in bounded episodic tasks is a tractable alignment target where universal alignment is not. | llm, theoretical | [[sources/role-architectures-drexler]] |
| [[findings/episodic-task-decomposition-prevents-drift]] | Decomposing tasks into episodic roles prevents identity drift and enables legibility. | llm, theoretical | [[sources/role-architectures-drexler]] |
| [[findings/human-role-networks-enable-alignment]] | Human societal alignment is achieved through overlapping role networks — AI alignment may work the same way. | llm, theoretical, analogy, sociology | [[sources/role-architectures-drexler]] |
| [[findings/generality-facilitates-specialization]] | LLM generality facilitates role specialization — including designing the role architectures themselves. | llm, theoretical | [[sources/role-architectures-drexler]] |
| [[findings/echoing-occurs-across-providers-and-domains]] | Echoing (AxA role drift) occurs across LLM providers, domains, and is not reduced by reasoning effort. | llm, empirical | [[sources/echoing-identity-failures]] |
| [[findings/situation-as-alignment-mechanism-humans]] | The shared definition of the situation is an ongoing alignment mechanism for human role performance. | analogy, sociology, llm | [[sources/echoing-identity-failures]] |
| [[findings/axa-lacks-stabilizing-human-grounding]] | AxA interactions lack the human grounding that stabilizes roles in human-agent conversations. | llm, empirical, analogy | [[sources/echoing-identity-failures]] |
| [[findings/simulacrum-problem]] | LLMs produce role-outputs without inhabiting roles; the output is a simulacrum structurally isomorphic to the role but not the thing itself. | llm, philosophy, analogy | [[sources/could-an-ai-be-shy]] |
| [[findings/shyness-as-structural-role-failure]] | Shyness is structural role-failure (five components), not a trait or emotion; presupposes a phenomenological subject. | philosophy | [[sources/could-an-ai-be-shy]] |

---

## Entities  (wiki/entities/)
_People, organizations, papers, tools._

| Page | Type | Summary |
|------|------|---------|
| [[entities/drexler-k-eric]] | person | FHI researcher; role architectures, Open Agency model, non-agentic LLM thesis. |
| [[entities/goffman-erving]] | person | Sociologist; dramaturgical sociology; Presentation of Self in Everyday Life; definition of situation; working consensus; no-true-self. |

---

## Overviews  (wiki/overviews/)
_Domain synthesis pages._

| Page | Domain | Summary |
|------|--------|---------|
| [[overview]] | both | Top-level synthesis of the wiki's current scope |

---

## Sources  (wiki/sources/)
_Reading notes / précis — one per raw source file._

| Page | Précis | Date | Raw file |
|------|--------|------|----------|
| [[sources/persona-selection-model]] | Anthropic's PSM post: LLMs simulate personas during pre-training; post-training refines the Assistant persona. Evidence from generalization, behavior, interpretability. | 2026-04-10 | raw/The Persona Selection Model Why AI Assistants might Behave like Humans.md |
| [[sources/role-architectures-drexler]] | Drexler: safe AI deployment via role architectures — bounded episodic roles, role fidelity as alignment target, Open Agency model. LLMs have no intrinsic goals; all agency is role-derived. | 2026-04-11 | raw/Role ArchitecturesApplying LLMs to consequential tasks.md |
| [[sources/echoing-identity-failures]] | Sekkizhar et al. (2025): LLM agents in AxA conversations progressively abandon assigned roles and mirror each other (echoing); absent human grounding, shared situation-construction fails. | 2026-04-11 | raw/Echoing Identity Failures when LLM Agents Talk to Each Other.md |
| [[sources/eliciting-latent-knowledge]] | Stub. ELK problem (Christiano/ARC): we cannot reliably recover what a model "actually believes" vs. what it has learned to say. CCS as one approach. No DJR notes — placeholder for future annotation. | 2026-04-11 | raw/Eliciting Latent Knowledge.md |
| [[sources/could-an-ai-be-shy]] | Original DJR analysis. Shyness as structural role-failure; LLMs lack every structural prerequisite; produces the simulacrum problem finding. | 2026-04-11 | raw/Could an AI ever be shy?.md |
| [[sources/goffman-video-bbc-1]] | BBC/OU clip. Goffman's dramaturgical sociology: masks, situation-governed role selection, no-true-self claim. | 2026-04-11 | raw/Goffman Video BBC 1.md |
| [[sources/goffman-and-roles-1]] | DJR notes on Goffman's Presentation of Self (1959). Roles as coordination technology; definition of situation; working consensus; lowest-energy-state framing. | 2026-04-11 | raw/Goffman and Roles 1.md |

