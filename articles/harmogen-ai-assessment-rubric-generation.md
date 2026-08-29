---
title: "A Hybrid Reasoning Framework for Artificial Intelligence Assessment Rubric Generation in Human and Automated Contexts: Evidence from an Undergraduate Programming Course"
created: "2026-08-23T08:07:04-04:00"
updated: "2026-08-23T15:00:00-04:00"
type: article
tags: [automated-assessment, formative-assessment, llm, generative-ai, cs-education, assessment]
discipline: [cs education]
category: [assessment]
sources: ['raw/papers/harmogen-ai-assessment-rubric-generation.md']
confidence: high
---

> **Synthesis:** Mendonça and colleagues (2026) introduced HARMOGEN-R (Hybrid Assessment Rubric Model Generation with Reasoning), a two-stage framework that uses reasoning-enhanced [[llm|Large Language Models]] for initial [[assessment|assessment rubric]] generation and standard models for synthesis. Using a within-subjects design, they compared four AI-generated rubrics (structured vs free-form, OpenAI vs DeepSeek) with a human-created baseline across 308 open-ended responses from three [[formative-assessment|formative]] programming assignments in an [[higher-ed|undergraduate]] [[cs-education|computer science]] course. When applied by human evaluators, all AI-generated rubrics met pooled equivalence within an operational ±5-point margin, with correlations 0.948–0.973; in automated evaluation, equivalence depended on the evaluator model (DeepSeek V3 consistent, GPT-4.1/GPT-4o systematically harsher), and open-weight rubrics matched proprietary ones in most conditions. The findings indicate AI-generated rubrics can achieve scoring comparability with human-created rubrics for technical content, though outcomes depend on rubric format, evaluator model, and context — and concern scoring comparability rather than broader rubric validity.

## Why rubric generation is a bottleneck in assessment

[[formative-assessment]] is limited partly because developing quality rubrics is resource-intensive: authors must define criteria, observable indicators, and performance descriptors aligned with instructional objectives, then iteratively adapt them across assignments, cohorts, and learning goals. Because rubrics support consistent judgment and clarify expectations, their value derives from validity and appropriateness, not mere presence. The paper positions automated rubric generation as a way to reduce authoring effort and enable more frequent formative assessment, provided AI-produced rubrics can match human scoring outcomes.

## The HARMOGEN-R pipeline: reasoning-then-synthesis

The framework generates complete rubrics in two stages. A reasoning-capable model produces several candidate rubrics at high temperature (T=1.0) to encourage variation in criterion formulation and scoring structure; a standard model then consolidates the candidates into a single rubric at low temperature (T=0.1) to reduce output variability. It supports two modes: *structured* (predefined evaluation criteria and point allocations — taken from the human baseline — with the model authoring scoring rules within each criterion) and *free-form* (the model defines criteria and scoring autonomously). This design lets the authors compare generation strategy and model family (proprietary OpenAI vs open-weight DeepSeek) within one workflow.

## Findings for human evaluators: pooled equivalence, cell-level variation

When four CS-specialist human evaluators scored 308 responses, all four AI rubrics met TOST equivalence within ±5 points pooled across assignments, with correlations 0.948–0.973 and quadratic weighted kappa 0.929–0.988. Yet five rubric-assignment cells exceeded the margin, and OpenAI Structured was the only source meeting equivalence across all three assignments. Structured generation proved more stable across contexts, echoing evidence that grounding AI in specific instructional objectives beats broad prompts. Pass/fail classifications were preserved except for DeepSeek Free in Assignment 1 (which classified more responses as passing). The takeaway is that aggregate equivalence does not guarantee uniformity at the individual assessment level.

## Findings for LLM evaluators: the evaluator–rubric interaction

With [[llm]] evaluators the picture reversed. DeepSeek V3 met equivalence for all four rubric sources, while GPT-4.1 and GPT-4o showed systematic negative deviations (harsher grading), most pronounced for structured rubrics — the opposite of the human-evaluator pattern. Structured rubrics produced a pooled mean difference of −4.46 versus −0.66 for free-form. This implies automated-assessment systems should not treat rubric source and evaluator as independent factors, and rubric selection must account for the specific LLM deployed. A variance-based quality-control system flagged only 1.43% of evaluations for human review, suggesting [[automated-assessment|automated assessment]] can cut workload while preserving a mechanism for human oversight.

## Open-weight versus proprietary generation

DeepSeek (open-weight) and OpenAI (proprietary) rubrics produced equivalent grading outcomes in most conditions, with structured generation showing higher cross-model consistency (correlation 0.947 vs 0.928). Free-form text-question comparisons were least consistent, especially in the first assignment. For institutions weighing an open-weight alternative, structured DeepSeek rubrics offered outcomes comparable to proprietary counterparts on technical content — relevant for cost and deployment decisions, though results do not extend to local-deployment data-handling properties.

## Implications and limits

The central implications are: (1) AI-generated rubrics can match human rubrics, but comparability is conditional on generation approach, evaluator, and context; (2) structured generation is more consistent across human and automated evaluation; (3) evaluator choice interacts with rubric source; (4) open-weight models are viable for technical content; and (5) low flagging rates support [[ai-feedback-quality|workload reduction with human oversight]]. Limits include the within-subjects design (possible carryover/anchoring), an operationally grounded rather than universal equivalence margin, rubric quality operationalized only as scoring comparability, a single course-specific [[benchmark]] rubric applied by non-blind evaluators, and the absence of evidence about formative-[[feedback]] utility.

## Connected Concepts

- [[automated-assessment]]
- [[formative-assessment]]
- [[llm]]
- [[generative-ai]]
- [[assessment]]
- [[educational-measurement]]
- [[ai-feedback-quality]]
- [[trust]]

## Connected Articles

- [[llm-automated-assessment-student-self-explanations]] — LLM automated assessment of student self-explanations
- [[hybrid-e-assessment-semi-automated-grading]] — Hybrid e-assessment with semi-automated grading
- [[automated-formative-assessments-a-level-sciences]] — Automated formative assessments

## Citation

Mendonça, P. C., Quintal, F., Figueiredo, M., Baras, K., & Mendonça, F. (2026). [*A hybrid reasoning framework for artificial intelligence assessment rubric generation in human and automated contexts: Evidence from an undergraduate programming course*](https://doi.org/10.1016/j.caeai.2026.100663). *Computers and Education: Artificial Intelligence, 100663*.
