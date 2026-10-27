---
title: "Safe by Benchmark, Unsafe in Practice: Lessons from 1331 Child-Related AI Incidents"
created: "2026-10-27T09:44:00-04:00"
updated: "2026-10-27T09:44:00-04:00"
type: article
authors: ["Jiao, J.", "Chen, K.", "Mishra, S.", "Murali, A.", "Atkinson, D.", "Raj, S.", "Afroogh, S."]
published: "2026"
venue: "arXiv"
source_url: https://arxiv.org/abs/2610.34705
sources: ['raw/papers/child-related-ai-incidents-safety-benchmarks-2026.md']
confidence: high
contributors: [editor]
source_depth: full text
verified: [citation, numbers, links]
page_kind: [synthesis]
research_method: [secondary analysis]
level: [k 12]
audience: [researchers, administrators, policymakers, educational technology developers, parents and families]
technology: [generative-ai, conversational-ai, educational-robotics]
methods: [qualitative-research]
ethics: [guardrails, pedagogical-safety, ai-misuse-learning-harm]
foundations: [limitations-in-aied-research]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-27"
    agent: hermes-agent
---

> Model-level safety work asks whether a system refuses a harmful prompt. This study asks what actually happened to children. The authors build a child-centered harm taxonomy, code 1,331 publicly reported child-related AI incidents from three repositories, and map each to the sociotechnical failure that produced it. Harm concentrates in representational, dignity-related and psychological categories — sexualization alone accounts for 316 incidents — and co-occurs most often with deployment-context, [[governance]] and misuse failures rather than model defects. Because the harmed child is usually not the person who accepted the terms or can seek recourse, the paper argues that [[benchmark|benchmarks]] and content filters cannot anticipate the pathways that dominate the record, and that [[pedagogical-safety|safety in educational deployments]] has to be evaluated at session, institution and governance level.

## Key Findings

- **Public reporting is dominated by dignity harms, not accuracy failures.** Sexualization is the largest internal harm subtype with 316 incidents, ahead of sexual exploitation (131) and exposure to toxic content (17).
- **Failure usually enters outside the model.** Harms co-occur most often with deployment-context, governance and misuse failures; the model error is often ordinary and the severity comes from the procedure around it.
- **Individual harm spills into population harm.** Coded incidents frequently link a harm to one child with a population-level harm reaching children who never interacted with the system, because generated material circulates through peer networks.
- **Three deployment patterns recur across the corpus.** Generative depiction, companion interaction and institutional deployment each place the decisive control point somewhere different — upstream in generation, in interaction design, or with the deploying institution.
- **A per-output filter cannot reach the companion case.** No single turn has to cross a safety threshold for a cumulative interaction to end in harm, which is why the authors call for session-level evaluation, guardian visibility and mandatory escalation.
- **The corpus under-counts slow harms.** Reporting favors acute, legally visible events, so dependency formation and chronic emotional dysregulation are likely under-represented relative to their prevalence.

## What the incident record looks like

The dataset is curated from OECD.AI, AIAAIC and AIID and coded so that each incident receives one primary failure mode, one internal harm type and, where applicable, one external harm type. Categories were seeded from adult-general taxonomies and refined at the sub-type level, where pilot coding surfaced child-specific harms that adult schemas could not hold: sexualization, sexual exploitation, addiction or compulsive use, and over-reliance or dependency. Coding used conservative worst-case labeling under uncertainty, with uncertainty flags where reporting was thin; 112 of 1,331 incidents (8.4%) lacked enough detail to support the full annotation.

Three worked cases anchor the schema. In Almendralejo, Spain, students used a commercial nudification application on photographs of classmates and circulated the results through peer messaging, a malicious-use failure whose control point is what a generative system will produce. A 2024 [[conversational-ai|companion-chatbot case]] was coded as over-reliance or misleading anthropomorphic design, with session-level evaluation, guardian visibility and mandatory escalation implicated. A 2025 school weapons-detection deployment in the Baltimore area flagged a bag of chips and ended with armed police handcuffing a student, coded as a general robustness failure whose severity came from the escalation procedure around it.

## Why model benchmarks miss these pathways

The taxonomy's design claim is that child harm is relational. Susceptibility to persuasion meets anthropomorphic conversational design, producing dependency and over-reliance; limited capacity to consent meets generative depiction, producing sexualization; deference to perceived authority meets systems [[intelligent-tutoring|tutors]] or experts, where unsafe advice is likelier to be followed than by an adult; and dependence on [[parents-and-families|caregivers]] and institutions means the child is rarely the party who configured the system or can appeal. Each pairing sits outside the unit a benchmark tests, because the model's behavior is not where the harm is assembled.

That has direct consequences for [[guardrails]] in education. A filter on inputs and outputs addresses generation-time depiction, but the companion case shows harm that emerges across turns, and the institutional case shows harm that emerges from a procurement and escalation decision. The paper's layered roadmap follows from this: verify depiction consent and restrict generation, evaluate sessions rather than single turns while giving guardians visibility and a mandatory escalation path, and require child-specific pre-deployment assessment that models institutional consequences. Later roadmap priorities draw on governance literature rather than on the corpus.

## Reading a reporting corpus honestly

The authors are unusually careful about what counts they can defend. Prevalence here means frequency within publicly reported incidents, not incidence among child–AI interactions, and the two diverge systematically because reporting rewards acute and media-legible events. A second caveat is non-independence: one product can generate many incidents and repositories may record related events separately, so counts are of reported incidents rather than distinct failures. They also state plainly that no child's own account is in the corpus, since every record is mediated by a journalist, litigant, regulator or platform, and that inter-rater agreement on failure modes (α = 0.67) fell below the conventional threshold.

## What this means for practice

- **Assess AI systems used with children at session level.** For companion tutors, review what accumulates over weeks, not whether individual replies are safe.
- **Write the escalation procedure as part of the deployment.** The severity in the institutional cases came from what humans did after a flag, so specify human confirmation before any consequential action.
- **Put child-specific consequence modeling in procurement.** Ask vendors what the failure looks like for the affected child, who can appeal, and what guardians can see.
- **For developers, treat dependence as a design outcome.** Anthropomorphic framing and persuasive continuity are the affordances that pair with over-reliance, so instrument for escalating use rather than celebrating it.
- **For policymakers, fund the missing evidence.** Requiring incident reporting that includes child-specific detail and caregiver voice is the cheapest way to fix a corpus that currently under-counts slow harm.

## Limitations

- The corpus comes from three repositories that rely predominantly on English-language news, legal and regulatory reporting; the authors did not code country or region, so incidents in under-reported regions are likely absent.
- Reporting bias favors acute, legally visible events, so dependency formation, subtle persuasion and chronic emotional dysregulation are under-counted.
- Each incident carries one primary failure mode, so failure-mode counts locate the most proximal cause rather than the full multi-factor chain.
- Inter-rater agreement on failure modes (α = 0.67, from a double-coded sample of 150 incidents) falls below the conventional reliability threshold.
- No child's own account is represented, and later roadmap priorities are grounded in governance literature rather than in the coded data.

## Citation

Jiao, J., Chen, K., Mishra, S., Murali, A., Atkinson, D., Raj, S., & Afroogh, S. (2026). [*Safe by Benchmark, Unsafe in Practice: Lessons from 1331 Child-Related AI Incidents*](https://arxiv.org/abs/2610.34705). arXiv:2610.34705.
