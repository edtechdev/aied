---
title: Automated Grading of Linux/Bash Examinations Using Large Language Models
created: "2026-07-03T04:33:04-04:00"
updated: "2026-09-12T03:30:00-04:00"
type: article
tags: [llm, automated-assessment, cs-education, formative-assessment, higher-ed, scaffolding, learning-analytics, ai-literacy, k-12]
audience: [instructors]
research_method: [system development]
discipline: [cs education]
level: [higher ed, k 12]

sources: ['raw/papers/2607.02432.md']
confidence: high
---

> **Synthesis:** Alonso-Carracedo et al. (2026) ask whether frontier LLMs can stand in for expert graders on short Linux/bash command-line answers, and return a qualified yes whose limits are predictable in advance. Testing GPT 5.2, Claude Opus 4.6, Gemini 3.0 Pro and GLM 5 on 1,200 real responses under a minimal prompt and a rubric-enhanced prompt, they report that Gemini 3.0 Pro with the rubric reaches ICC(3,1) = 0.888 against a three-instructor consensus — strong, but short of the human ceiling of 0.949 — and that agreement falls monotonically as a four-level cognitive taxonomy rises. The headline design lesson is that rubric quality moves agreement more than model choice.

## Overview

Grading command-line examinations by hand does not scale to rising enrolments in computing degrees, and rule-based autograders cannot cope with partial credit, equivalent solutions, or syntactic variation. The authors frame the problem as a measurement question: can an LLM's scores be treated as interchangeable with expert judgement, and if not, for which *kinds* of question does it fail? Their answer is to make question difficulty an explicit, graded variable rather than a nuisance, via a taxonomy that predicts where automated scoring can be trusted. The work sits in [[cs-education|computing education]] and speaks to the wider [[automated-assessment|automated assessment]] and [[formative-assessment]] literature.

## Study Design & Method

- **Setting and sample.** 1,200 exam responses from second-year Computer Engineering undergraduates in an Operating Systems course at a Spanish university. The instrument was a closed-book, 90-minute midterm administered after four weeks of instruction, comprising 16 independent exercises; students wrote answers directly on a shared Linux server to fix conditions and block external resources.
- **Human baseline.** Three experienced instructors independently graded every response on a custom web platform through a blind interface, following a rubric refined over several academic terms. The rubric carried general criteria (command structure, syntax, paths, pipeline sequencing) plus question-specific guidance worth 0.25–1.25 points, and catalogued accepted alternative solutions and common errors with their deductions.
- **Taxonomy.** A four-level scheme crossing cognitive complexity (drawing on Bloom's Revised Taxonomy) with operational impact: L1 information retrieval (e.g. `ls`, `cat`, `pwd`), L2 basic file manipulation, L3 structural understanding (pipelines, permissions, conditional logic), and L4 advanced system management.
- **Models and prompt ablation.** GPT 5.2, Claude Opus 4.6, Gemini 3.0 Pro and GLM 5 were run at default settings on the same responses under two prompts: Variant 1 (no rubric; minimum context) and Variant 2 (full rubric plus a reference correct answer).
- **Metrics.** ICC(3,1) against the human consensus, alongside Pearson and Spearman correlation, weighted kappa, mean absolute error and Bland-Altman bias, reported globally and stratified by taxonomy level.

## Key Findings

- **Human grading formed an exceptionally tight reference.** Inter-rater reliability among the three instructors reached Pearson r = 0.949, ICC(2,1) = 0.949, weighted κ = 0.948 and MAE = 0.028 points, with a Bland-Altman bias of −0.008 — a ceiling no model matched.
- **Best model–prompt combination.** Gemini 3.0 Pro with the rubric achieved ICC(3,1) = 0.888, Pearson 0.888, weighted κ = 0.886, MAE = 0.100 and Bland-Altman bias = −0.014, the strongest human–AI agreement observed.
- **Rubric mattered more than provider.** Every model improved from V1 to V2: Gemini 0.829→0.888, Claude 0.809→0.863, GLM 0.793→0.844, GPT 0.779→0.847. GPT showed the largest MAE reduction (0.184→0.132).
- **Model spread at baseline.** GLM 5 was the most conservative, with the lowest agreement in both variants and a systematic under-grading bias (−0.093 in V1); GPT V1 was the weakest starting point (ICC = 0.779).
- **Agreement tracked taxonomy level.** It was highest and most uniform at L1 (Claude V2 and Gemini V2 both ICC = 0.894) and degraded upward: Gemini V2 held 0.888 at L2 and 0.880 at L3, while the baseline variants collapsed at L3 (GPT V1 ICC = 0.728; GLM V1 0.712 at L2).
- **Complex questions resisted better prompts.** At L4 rubric guidance helped but no longer closed the gap — GPT's two variants converged at ICC = 0.820 — showing that multi-concept, system-wide reasoning cannot be rescued by rubric specificity alone.
- **Score levels confirmed the difficulty ordering.** Human evaluators awarded 64.41% of available marks at L1, 64.18% at L2, 55.72% at L3 and 49.21% at L4. The overall human mean grade was 5.41 (median 5.70; 42.5% Fail, 5.3% Distinction) — a distribution the top models approximated in central tendency but not in shape.

## Implications

For instructors and designers, the taxonomy is offered as an allocation rule rather than an automation switch: L1–L2 questions can be delegated to AI-assisted grading with confidence, while L3–L4 questions should route to human review or hybrid workflows. The uniform V1→V2 gains argue that rubric development is a prerequisite for automated grading rather than an optional step — a well-specified rubric raises agreement more than switching provider ecosystem, so [[prompt-engineering|prompt]] and rubric design deserve the investment first.

The paper's most consequential caveat is about [[assessment-validity|validity]], not accuracy. Manual inspection found a recurring failure mode in which models penalised answers for using filenames or paths that differed from the reference solution even though the student had correctly created those artefacts in a preceding question. In sequential, task-based exams a single surface discrepancy can cascade across items and produce a categorically invalid grade for a student who demonstrated mastery. Because human graders interpret student intent — distinguishing productive approximations from genuine misconceptions — the authors conclude that frontier LLMs cannot yet substitute judgement on questions requiring structural reasoning, cross-item context, or intent recognition, and that [[human-in-the-loop-ai|human oversight]] stays necessary at the top of the taxonomy. The study's own scope limits the claim to a single course, one examination sitting and default model settings, with prompt variants and parameters such as temperature left for future work.

## Connected Concepts

- [[llm]]
- [[automated-assessment]]
- [[formative-assessment]]
- [[ai-feedback-quality]]
- [[cs-education]]
## Connected Articles

- [[evaluating-interactivity-automated-assessment-ai-generated-explorable-explanations]] — Evaluating Interactivity: Toward Automated Assessment of AI-Generated Explorable Explanations
- [[from-answer-generators-to-reasoning-facilitators-ai-tutors]] — From Answer Generators to Reasoning Facilitators: Designing AI Tutors for Mathematical Reasoning in High-Stakes Environments
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — Constructing Epistemic AI Literacy: Detecting Epistemic Aims and Processes in Student-AI Co-Programming
- [[rubric-aware-grading-rec-cbm]] — REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models for Trustworthy Open-Ended Grading
- [[correct-answer-trap-ai-tutor]] — Catching The Correct Answer Trap: Characterising AI Tutor Blind Spots When Analysing Student Reasoning
- [[hybrid-e-assessment-semi-automated-grading]] — Hybrid E-Assessment in Higher Education: Semi-Automated Grading of Paper-Based Written Examinations

## Citation

Manuel Alonso-Carracedo, Ruben Fernandez-Boullon, Pedro Celard, Francisco J. Rodriguez-Martinez, Lorena Otero-Cerdeira (2026). [Automated Grading of Linux/Bash Examinations Using Large Language Models](https://arxiv.org/abs/2607.02432).