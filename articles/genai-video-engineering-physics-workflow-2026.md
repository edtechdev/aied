---
title: "From Prompts to Physical Laws: A Generative AI Workflow for Engineering Physics Education"
created: "2026-09-18T09:15:00-04:00"
updated: "2026-09-18T09:15:00-04:00"
type: article
technology: [generative-ai, simulation, multimodal]
pedagogy: [experiential-learning, active-learning, inquiry-based-learning, problem-solving]
discipline: [physics education, engineering education]
audience: [instructors, students]
level: [higher ed]
research_method: [case study]
methods: [qualitative-research]
sources: ['raw/papers/genai-video-engineering-physics-workflow-2026.md']
confidence: high
---

> **Synthesis:** Alvarado-Cruz et al. (2026) test whether [[generative-ai|generative AI]] video can supply the *experimental material* for introductory [[engineering-education|engineering]] physics. Using PixVerse, Grok Imagine and Pippit, they generated three scenarios representing distinct resistive-force regimes — constant friction, linear drag and quadratic drag — then extracted kinematic data with Tracker and fitted analytical models by non-linear least squares in Excel. The synthetic data agreed well with the classical equations of motion, and physically meaningful parameters were recovered. The recurring practical finding is that the physical plausibility of the generated motion depends on how specifically the prompt describes the situation, making prompt formulation part of experimental design.

## Key Findings

1. **Generated video can serve as synthetic experimental content.** Kinematic data extracted from AI-generated clips fitted the expected models for constant friction, linear drag and quadratic drag.
2. **Fitted parameters recovered physically meaningful quantities** broadly consistent with literature values under the assumed conditions.
3. **Prompt specificity governs physical coherence.** More detailed descriptions produced more coherent dynamical behavior, so [[prompt-engineering|prompt formulation]] becomes an explicit stage of the experimental [[design-thinking|design process]] rather than a preliminary convenience.
4. **The workflow mirrors real experimental practice end to end** — model construction, data acquisition, parameter estimation and model evaluation — using an [[open-source]] tracker and spreadsheet regression.
5. **The [[pedagogy|pedagogical]] aim is competence, not convenience:** students engage in experimental design and [[quantitative-research|quantitative]] validation rather than watching a demonstration.

## What the workflow offers when laboratory access is constrained

The value proposition is not that [[video-education|AI video]] replaces a laboratory; it is that it provides *varying* physical regimes on demand, including ones a teaching lab cannot easily produce. That matters for [[inquiry-based-learning]] where the learner must decide what to measure and which model applies, and it is why the paper frames the activity as [[experiential-learning]] rather than as a demonstration. It also sidesteps a real constraint in [[physics-education|physics education]]: apparatus cost and scheduling.

## The validity question the design must answer

Synthetic data that merely looks plausible would teach students to fit models to artifacts. The authors' checks — agreement with Newton's second law and plausible recovered parameters — are the right first tests, but they are the authors' own validation, not a student learning outcome. Read alongside the wiki's work on [[simulation]] and [[assessment-validity]], the paper defines a workflow that still needs evidence on whether students learn measurement judgment from it, and it inherits the general [[hallucination-risk|reliability]] concerns that attach to generated content used as data.

## Connected Concepts

- [[generative-ai]]
- [[simulation]]
- [[physics-education]]
- [[experiential-learning]]
- [[inquiry-based-learning]]
- [[prompt-engineering]]
- [[multimodal]]
- [[active-learning]]
- [[assessment-validity]]
- [[hallucination-risk]]
- [[video-education]]

## Connected Articles

- [[airis-cognitively-activated-ai-physics-2026]] — Cognitively activated AI in physics
- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics work
- [[ai-particle-physics-education-redesign-2026]] — Redesigning particle physics education with AI
- [[ai-scoring-language-bias-physics]] — Language bias in AI scoring of physics responses

## Citation

Alvarado-Cruz, L. B., Suñer, J. Ll., Yuste, P., Castro-Palacio, J. C., Monsoriu, J. A., & Muñoz-Pérez, F. M. (2026). [From Prompts to Physical Laws: A Generative AI Workflow for Engineering Physics Education](https://arxiv.org/abs/2609.19400). arXiv:2609.19400.
