---
title: "Large Scale AI Grading of Handwritten Physics Assessments: Score Agreement and Olympiad Team Selection Outcomes"
created: "2026-08-24T09:10:00-04:00"
updated: "2026-08-24T09:10:00-04:00"
type: article
tags: [automated-assessment, physics-education, assessment-validity, llm, multimodal, summative-assessment]
research_method: [benchmark]
discipline: [physics education]
sources: ['raw/papers/ai-grading-handwritten-physics-2026.md']
confidence: high
---
> **Synthesis:** Pathak, Tiwary, Kadolkar, Singh, Rakestraw, Pathare & Mazumdar (2026) test whether [[multimodal]] [[llm]]-based grading can agree with official examiner scores on high-stakes handwritten physics assessments, grading 10,364 scanned pages across a national Physics Olympiad theory exam, the final Olympiad team-selection camp, and a university quantum-mechanics exam. Total-score correlations with official marks were high (0.91–0.97), and in both rounds the AI recovered the same five-student team as human grading for the International Physics Olympiad. The study argues that reliable [[automated-assessment]] of handwritten work depends on detailed, physics-specific rubrics, and positions AI as a [[assessment-validity|valid]] second reader and audit tool rather than a replacement for examiner judgment in [[summative-assessment]].
## Study Design and High-Stakes Context
The authors selected a deliberately mixed set of assessments to span the full spectrum of what physics examiners grade — theory, experiment, derivation, data analysis, diagrams, and conceptual reasoning. OE1 is a national Physics Olympiad theory exam used to identify a top cohort from roughly 10,000 participants, OE2 is the final selection camp (with theory and experiment components) that selects India's five-person International Physics Olympiad team, and QM is an end-of-semester university quantum-mechanics and quantum-computation exam. In total the AI processed 10,364 scanned pages from 520 handwritten submissions by 416 candidates across these three assessments. All official examiner scores were moderated (double-checked) before release and served as the reference, making the analysis a test of [[assessment-validity]] in a real [[summative-assessment]] context. Because Olympiad rankings can hinge on small score differences, rank and top-group agreement were treated as part of the grading question rather than incidental to it.
## AI Grading Procedure and Two Rounds
Grading ran through GPT-5.5 Thinking at high effort (with GPT-5.5 Pro runs used as stability checks), following the same official rubrics used by human examiners. During grading the AI did not see human scores, official totals, ranks, or selection status. Round I (RI) was the initial full run. After analyzing RI disagreements, the team added focused refinements to three questions (one each from QM, OE1, and OE2) and launched Round II (RII), which graded long submissions page by page, required the AI to identify where credited evidence appeared, and recorded confidence labels and review flags. The three focused refinements represented only about 3.6% of the combined rubrics, so RI–RII differences reflect the full revised workflow. RII was generally less shifted toward over-awarding, and for OE1 and QM the total-score MAD fell from 7.1% to 4.8% and 9.4% to 3.8% respectively.
## Agreement and Selection Outcomes
Total-score Pearson correlations were high in both rounds (RI r = 0.91–0.97; RII r = 0.93–0.96), though the AI consistently awarded slightly more than human examiners. Outcome-level agreement was the study's core contribution to [[automated-assessment]] research: for OE1 the AI recovered most of the larger top group (40 of the human top 50), and top-10 overlap improved from 3/10 in RI to 7/10 in RII. For OE2, both rounds placed the same five students in the top five as human grading, though in a different order — a result that held across AI-mode checks. For QM, RII matched 34 of 40 released course grades exactly and all 40 within one step on a nine-category grade scale. This direct test of whether AI reproduces [[summative-assessment]] decisions goes beyond average score agreement to consider the actual consequences of the scores.
## Partial Credit, Refinements, and Human-Review Flags
Question-part analysis provided a stricter test: across 7,058 official question parts, exact agreement rose from about 63% in RI to 70% in RII, and parts differing by more than one point fell from 13% to 7%. The hardest problem remained exact partial-credit scoring, especially in experimental and diagram-based work. Focused refinements showed that stating the physics conditions for credit explicitly substantially improved agreement — for example, OE1 Q2 MAD fell from 38% to 17% and Pearson's r rose from 0.58 to 0.83. Confidence and review flags offered a useful triage mechanism: high-confidence parts consistently had much lower MAD than medium- or low-confidence parts, though some unflagged parts still disagreed, so flags should prioritize human review rather than authorize acceptance. This supports a [[psychometrically-aware-ai]] approach that treats AI as a second reader, audit tool, and consistency check under examiner control, aligned with frameworks that treat [[assessment-validity]] as a property of the proposed use of scores.
## Connected Concepts
- [[automated-assessment]]
- [[physics-education]]
- [[assessment-validity]]
- [[llm]]
- [[multimodal]]
- [[summative-assessment]]
- [[assessment]]
- [[ai-ed-evaluation]]
- [[psychometrically-aware-ai]]
## Connected Articles
- [[choi-anchor-aes-prompting-2025]] — Anchor Is the Key: Toward Accessible Automated Essay Scoring with Large Language Models Through Prompting
- [[probing-ai-generated-physics-solutions-2026]] — Probing AI-Generated Physics Solutions and Preparing Students to Critique Them
- [[multimodal-knowledge-graph-educational-reasoning]] — Evidence-Grounded Multimodal Knowledge Graph Construction for Multi-Lecture Educational Reasoning
- [[competency-based-education-genai-production-2026]] — Knowledge, Skills, Attitudes, Production: Competency-Based Education After Generative AI
## Citation

Pathak, P., Tiwary, S., Kadolkar, C., Singh, V., Rakestraw, D., Pathare, S., & Mazumdar, A. (2026). [*Large Scale AI Grading of Handwritten Physics Assessments*](https://arxiv.org/abs/2608.20521).
