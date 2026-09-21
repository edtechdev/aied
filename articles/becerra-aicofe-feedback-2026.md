---
title: "AICoFe: Implementation and Deployment of an AI-Based Collaborative Feedback System for Higher Education"
created: "2026-07-29T04:33:04-04:00"
updated: "2026-09-20T03:43:02-04:00"
type: article
technology: [human-in-the-loop-ai, learning-analytics]
assessment: [feedback, formative-assessment]
connected_faqs: [ai-feedback-at-scale]
research_method: [system development]
audience: [learners]
level: [higher ed]
page_kind: [evaluation]
sources: ['raw/papers/becerra-aicofe-feedback-2026.md']
confidence: medium
methods: [ai-ed-evaluation]
---

> **Synthesis:** **AICoFE** (AI-based Collaborative Feedback) is a multi-[[llm]] feedback generation system for higher education that combines independently fine-tuned language models with **teacher-in-the-loop mediation**, producing diverse feedback perspectives while preserving [[pedagogy|pedagogical]] authority through Learning Analytics dashboards.

## Key Findings

1. **Multi-LLM diversity improves feedback quality.** AICoFE uses three independently fine-tuned LLMs (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) to generate diverse feedback perspectives from the same input data — [[quantitative-research|quantitative]] rubric scores, validated [[qualitative-research|qualitative]] observations, rubric level descriptions, and instructional materials. Each model produces independent drafts that the teacher can inspect and curate.
2. **Teacher mediation is central, not an afterthought.** Rather than automating feedback end-to-end, the system positions educators as active curators. The teacher dashboard enables instructors to compose final feedback by **selecting individual sentences or paragraphs** from AI outputs, with a visual legend indicating the proportion of content contributed by each LLM. This preserves pedagogical judgment while reducing feedback workload.
3. **Dual-purpose transparency supports both practice and [[research-methods-aied|research]].** The system tracks the extent of teacher modification and curation, serving simultaneously as (a) a reflection tool for individual instructors examining their curation patterns, and (b) a dataset for large-scale analysis of the teacher mediation role in AI-assisted feedback.
4. **Role-specific dashboards close the [[feedback|feedback loop]].** The student dashboard provides access to video recordings of presentations, self-evaluation rubrics, visual comparisons of self vs. external evaluations, teacher-curated AI feedback, and the ability to rate perceived agreement and usefulness — completing a full assessment-for-learning cycle.

## System Architecture

| Module | Purpose |
|--------|---------|
| **[[visualization]]** | Role-specific dashboards (student, teacher, evaluator) |
| **Management** | Hybrid SQL + MongoDB data infrastructure (traceability + semi-structured feedback versions) |
| **Feedback Generation** | Multi-LLM pipeline synthesizing rubric scores + qualitative comments |
| **Recording** | Video/audio capture of student presentations (opt-in, GDPR-compliant) |

The system treats AI as a **draft generator**, not a final deliverer — educators curate and compose the final feedback before it reaches students, so AI augments rather than replaces peer and teacher judgment.

## What this means for practice

- **Students.** Rate the AI-assisted feedback you receive for agreement and usefulness: those responses are the loop that tells instructors whether multi-model drafts add anything.
- **Students.** Compare your self-evaluation against the external evaluation in the dashboard and use your presentation recording as evidence for that reflection.
- **Students.** Treat the AI text you receive as teacher-composed feedback rather than raw model output, since sentences and paragraphs are selected and edited before delivery.
- **Students.** Check the legend showing each model's contribution when a comment seems off-target, and say so in the embedded questionnaire.

## Limitations

- The reported deployment involves approximately 80 students and 5 teachers across one undergraduate and one master's course at Universidad Autónoma de Madrid.
- Evaluation evidence is student-perceived coherence and usefulness of the feedback plus system usability scores; effects on feedback quality, reflective learning, or presentation performance are stated as future analyses.
- Comparison between AI-mediated and traditional manual feedback is also deferred, so the paper cannot yet show that AICoFe improves on existing practice.
- Presentation recording is opt-in and GDPR-compliant, so only consenting participants' data enter the pipeline.
## Connected Concepts

- [[formative-assessment]]
- [[higher-ed]]
- [[human-in-the-loop-ai]]
- [[learning-analytics]]
- [[ai-ed-evaluation]]
- [[student-experience]]
- [[ai-feedback-quality]]
- [[feedback]]
- [[peer-assessment]]
## Connected Articles

- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...

## Citation

Becerra, Á., Palma, A., & Cobos, R. (2026). [*AICoFe: AI-Based Collaborative Feedback System for Higher Education*](https://arxiv.org/abs/2605.04740).
