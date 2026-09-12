---
title: "Beyond the Agent Label: Evidence Maturity, Human Monitoring, and Governance of Agentic AI in Higher Education"
created: "2026-09-08T09:07:05-04:00"
updated: "2026-09-08T09:07:05-04:00"
type: article
tags: [agentic-ai, higher-ed, governance, human-in-the-loop-ai, regulation, generative-ai, llm, equity-in-ai-education, ethics]
research_method: [literature review]
audience: [administrators, researchers, instructors]
level: [higher ed]
confidence: high
sources: ['raw/papers/beyond-agent-label-agentic-ai-governance-2026.md']
---

> **Synthesis:** This critical integrative review (Dey, EdArXiv 2026) argues that [[agentic-ai|agentic AI]] is entering [[higher-ed|higher education]] faster than the evidence needed to govern it, and that the term is applied inconsistently — systems that plan, remember, use tools, revise actions, or coordinate multiple agents are routinely lumped together with static [[generative-ai|generative-AI]] interfaces and conventional [[pedagogical-agent|pedagogical agents]]. Comparing fifteen peer-reviewed reviews against a strict behavioral definition, it finds a rapidly expanding but conceptually unstable literature: evidence is strongest for **artifact-level** outcomes (feedback accuracy, hallucination reduction) and weakest for durable [[transfer-of-learning|learning]], equity, workload, or institutional outcomes; authentic deployments are typically short, single-site, and weakly connected to explicit oversight. To fix this, it introduces the **Autonomy–Oversight–Evidence (AOE) framework** — five autonomy levels (A0–A4), five oversight levels (O0–O4), and six evidence-maturity stages (M0–M5) — with a proportionality rule: *autonomy should not exceed the maturity of the evidence or the strength of accountable [[human-in-the-loop-ai|human control]]*.

## Why agentic AI needs a different evidentiary standard

The review's central claim is that [[agency]] is not a property conferred by a name. It treats a system as agentic only when it pursues a goal through an execution loop and demonstrates at least two of: planning or task decomposition, contextual/persistent memory, external tool use, reflection or iteration, and multi-agent coordination. This **behavioral definition** deliberately excludes one-shot prompting, ordinary content generation, predictive analytics, and dialog-based systems that merely react to the next user turn — and it refuses to assume a system is agentic because users perceive it as independent. Static systems are evaluated at the level of outputs and interactions; agentic systems must additionally be evaluated as *processes*: what goals they receive, which actions they may take, what data and tools they access, how intermediate states are logged, when they stop, and how people can interrupt or reverse their actions.

## Four levels of educational evidence

The review insists educational evidence be separated by outcome level, because a favorable result at one level does not license a claim at another:

- **Artifact outcomes** — answer accuracy, rubric alignment, feedback style. Necessary but *not sufficient* evidence of learning benefit.
- **Learner outcomes** — knowledge, transfer, [[metacognition]], [[motivation]], cognitive demand.
- **Educator outcomes** — time savings, workload redistribution, professional judgment, adoption.
- **Institutional outcomes** — admissions, progression, resource assignment, compliance, cost.

A favorable artifact result can be necessary for a learner benefit but is not sufficient evidence of one; high acceptance is not evidence that delegation is safe or that learning is durable. Two recurring inferential errors it flags: treating perceived agency as if it demonstrated system autonomy, and equating artifact quality with educational effectiveness.

## The Autonomy–Oversight–Evidence (AOE) framework

The framework links three dimensions usually reported separately, giving researchers and institutions a common language plus a normative decision rule. It defines operational scales:

- **Autonomy:** A0 reactive generation (no execution loop) → A1 bounded orchestration → A2 delegated task autonomy (selects tools/substeps within a bounded task) → A3 workflow autonomy (maintains state, executes multi-step actions in a real workflow) → **A4 consequential autonomy** (influences admissions, grading, progression, allocation, or other rights-bearing decisions).
- **Oversight:** O0 unspecified → O1 retrospective audit → O2 pre-use approval → O3 checkpointed control (human approval at defined consequential transitions) → **O4 continuous bounded supervision** (permission limits, live monitoring, logging, rollback, escalation).
- **Evidence maturity:** M0 concept (framework/use case, no implemented system) → M1 prototype/benchmark → M2 participant evaluation → M3 authentic deployment (real course or workflow) → M4 extended or multi-site → **M5 replicated/institution scale** (independent replication or sustained institution-scale deployment).

Reporting a triplet — e.g. *A2–O3–M3* — makes otherwise vague claims about an "agentic deployment" precise and comparable.

## The proportionality rule

The framework's decision rule is normative: **allowable autonomy should not outrun either evidence maturity or oversight strength.** It does not require every low-risk classroom tool to reach M5; it requires claims and permissions to be proportionate:

- An A1 feedback checker at M1 may be appropriate for instructor-supervised experimentation if outputs are approved before students receive them.
- An A3 advising system connected to live data requires at least evidence of authentic deployment, strong permission boundaries, meaningful checkpoints, and rollback.
- An **A4 consequential system** should not make final high-impact decisions merely because its benchmark accuracy is high — consequential uses require mature, context-relevant validation and continuous accountable control, and in many cases the system should remain advisory rather than decisional.

Concrete proportionate targets (Table 4): A0–A1 low risk → M1–M2 / O1–O2 with disclosure and output checks; A2 moderate → M2–M3 / O2–O3 with tool allowlists and checkpoints; A3 high → M3–M4 / O3–O4 with sandboxing, least privilege, monitoring, rollback; A4 consequential → M4–M5 plus legal validation, O4 with human final authority, impact assessment, appeal, auditability.

## Implications for research and institutions

For **research**, the review calls for reporting actual capabilities rather than product labels (model and version, planning mechanism, memory, tools and permissions, orchestration, stopping conditions, logging, human intervention spots, failure handling); separating artifact/learner/educator/institutional outcomes; stating the comparator; reporting null and adverse findings; and disclosing latency, cost, and verification labor. Because agent behavior changes with model updates and tool availability, configuration and evaluation dates are part of reproducibility. Priority designs include randomized or well-controlled comparisons against both non-AI and static-AI alternatives and semester-long follow-ups. For **institutions**, it supports staged adoption, logging, permission boundaries, escalation, and rollback aligned to the autonomy level, and clarifies how external frameworks (NIST AI RMF, UNESCO guidance, the EU AI Act's high-risk classification of educational uses) translate into deployable requirements.

The central conclusion is cautious: agentic AI may improve selected educational processes, but the field does not yet justify broad claims of sustained educational effectiveness or safe institutional autonomy.

## Contribution to the knowledge base

This review consolidates and operationalizes the [[agentic-ai|agentic-AI]] governance discussion that other wiki entries open from other angles: [[baradziej-agentic-ai-higher-education-2026|Baradziej et al.]] map the roles and tripartite responsible-integration framework, [[kostopoulos-agentic-ai-education-2025|Kostopoulos et al.]] supply the definitional checklist and taxonomy, and [[sudarshan-agentic-ai-ecosystems-higher-education-2026|Sudarshan et al.]] the inclusive multi-agent architecture. Dey's distinct contribution is the **evidentiary and governance scaler** — a concrete A0–A4 / O0–O4 / M0–M5 reporting language and a proportionality rule that ties allowable autonomy to evidence maturity and accountable human control. It directly serves [[governance]] and [[regulation]] discussions by turning diffuse oversight concerns into testable reporting requirements, and it sharpens the distinction between perceived agency and demonstrated system autonomy that recurs across [[human-in-the-loop-ai]] analyses.

## Connected Concepts

- [[agentic-ai]] — the construct the review redefines behaviorally
- [[higher-ed]] — the deployment context
- [[governance]] — the institutional governance requirements
- [[human-in-the-loop-ai]] — accountable human control / oversight levels
- [[regulation]] — EU AI Act and high-risk classification
- [[equity-in-ai-education]] — the equity outcomes whose evidence is weakest
- [[ethics]] — ethical validation and risk management
- [[generative-ai]] — the tool class agentic systems extend
- [[pedagogical-agent]] — conventional agents distinguished from agentic systems
- [[transfer-of-learning]] — durable learning as a learner-level outcome
- [[llm]] — the underlying model technology
- [[metacognition]] — a learner-level outcome of interest

## Connected Articles

- [[baradziej-agentic-ai-higher-education-2026]] — systematic review of the roles of agentic AI in higher education
- [[kostopoulos-agentic-ai-education-2025]] — agentic AI definitional checklist + taxonomy
- [[sudarshan-agentic-ai-ecosystems-higher-education-2026]] — inclusive agentic multi-agent ecosystem
- [[agentic-ai-education-scoping-review]] — scoping review of agentic AI in education
- [[tool-invariant-framework-agentic-ai]] — tool-invariant framing of agentic AI
- [[institutional-governance-ai-universities]] — institutional governance of AI in universities
- [[baroudi-anticipatory-governance-ai-higher-ed-2026]] — anticipatory governance of AI in higher ed

## Citation

Dey, A. (2026). [*Beyond the agent label: Evidence maturity, human monitoring, and governance of agentic AI in higher education*](https://osf.io/preprints/edarxiv/va5pz_v1/). *EdArXiv preprint*.
