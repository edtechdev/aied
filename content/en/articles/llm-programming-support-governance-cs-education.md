---
title: "Exploring the Design Space of LLM-Based Programming Support in CS Education: A Scoping Review through the Lens of Assistance Governance"
created: "2026-07-24T04:33:04-04:00"
updated: "2026-09-20T03:45:11-04:00"
type: article
pedagogy: [scaffolding]
technology: [llm]
assessment: [feedback]
methods: [meta-analysis-systematic-review]
discipline: [cs education]
level: [higher ed]
sources: ['raw/papers/2607.21257.md']
confidence: high
audience: [instructional designers, researchers]
page_kind: [framework]
---

> **Synthesis:** This [[meta-analysis-systematic-review|scoping review]] synthesizes 90 peer-reviewed [[llm]]-based programming support systems in [[cs-education]] to make explicit how each system bounds, enacts, and controls assistance — decisions the authors argue are usually left implicit. They introduce the **PEA framework**: Policy (what help is allowed or restricted), Enforcement (how boundaries are operationalized through interaction and system behavior), and Authority (who can configure, adapt, or override them at runtime). The analysis shows systems often share [[pedagogy|pedagogical]] goals but diverge sharply in enforcement mechanisms, while authority remains highly centralized in system logic — few tools give learners or instructors runtime control. PEA offers a comparative vocabulary that connects to [[genai-assessment-governance]] and [[genai-policies-higher-ed-computing]], and its emphasis on bounded, configurable help echoes [[structured-llm-feedback-programming]] and [[llm-feedback-programming-classroom]]. The [[governance]] lens reframes [[scaffolding]] as a design-space question of control rather than a fixed pedagogical feature.

## What this means for practice

- **Instructional designers.** Write down the PEA decisions for any [[llm]] programming support you adopt: what help is allowed (Policy), how the boundary is implemented through interaction and system behavior (Enforcement), and who may configure or override it during use (Authority).
- **Instructional designers.** Check where Authority actually sits before adoption, because 69 of the 90 reviewed systems (76.7%) left it with system logic, 11 (12.2%) gave instructors runtime control, 9 (10.0%) gave learners control, and only 1 (1.1%) provided both.
- **Instructional designers.** Push past prompt-based constraints, which dominate the observed policy-enforcement pairings, when you need assistance boundaries that hold up in real classroom use.
- **Researchers.** Compare systems on [[governance]] as well as model capability and task coverage, and report PEA configurations explicitly so the configurations missing from this corpus can be tested rather than assumed infeasible.

## Limitations

- The review is bounded by the published literature in selected databases within a defined time window, so systems described in preprints, workshops, industry tools, or local course deployments may not be represented.
- Inclusion criteria (peer-reviewed, learner-facing systems with meaningful adaptations and user studies) exclude industry tools, gray literature, preprints, local deployments, general-purpose LLM use, and unevaluated systems, so sparse PEA configurations mean underexplored rather than infeasible.
- Screening audit trail: full-text exclusion reasons were not logged as mutually exclusive categories, so only the aggregate exclusion count is reported, which limits the reproducibility of the corpus construction.
- Coding was based on what the included papers state their systems implement, so governance features that exist in deployed tools but are undocumented in their papers are not captured, and 82 of 132 possible policy-enforcement combinations were observed with 50 (37.9%) absent from the corpus.

## Connected Concepts

## Connected Concepts

- [[llm]]
- [[cs-education]]
- [[scaffolding]]
- [[feedback]]
## Connected Articles

- [[genai-assessment-governance]]
- [[genai-policies-higher-ed-computing]]
- [[structured-llm-feedback-programming]]
- [[llm-feedback-programming-classroom]]
## Citation

Kim, Monisha, Wu & Smith IV (2026). [Exploring the Design Space of LLM-Based Programming Support in CS Education: A Scoping Review through the Lens of Assistance Governance](https://arxiv.org/abs/2607.21257). arXiv preprint (cs.HC).
