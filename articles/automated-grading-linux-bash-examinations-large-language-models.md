---
title: Automated Grading of Linux/Bash Examinations Using Large Language Models
created: "2026-07-03T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [learning-analytics, llm]
assessment: [automated-assessment, formative-assessment]
audience: [instructors]
research_method: [benchmark, educational measurement]
discipline: [cs education]
level: [higher ed, k 12]

sources: ['raw/papers/2607.02432.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** Alonso-Carracedo et al. (2026) ask whether frontier LLMs can stand in for expert graders on short Linux/bash command-line answers, and return a qualified yes whose limits are predictable in advance. Testing GPT 5.2, Claude Opus 4.6, Gemini 3.0 Pro and GLM 5 on 1,200 real responses under a minimal prompt and a rubric-enhanced prompt, they report that Gemini 3.0 Pro with the rubric reaches ICC(3,1) = 0.888 against a three-instructor consensus — strong, but short of the human ceiling of 0.949 — and that agreement falls monotonically as a four-level cognitive taxonomy rises. The headline design lesson is that rubric quality moves agreement more than model choice.

## Overview

Grading command-line examinations by hand does not scale to rising enrollments in computing degrees, and rule-based autograders cannot cope with partial credit, equivalent solutions, or syntactic variation. The authors frame the problem as a measurement question: can an LLM's scores be treated as interchangeable with expert judgment, and if not, for which *kinds* of question does it fail? Their answer is to make question difficulty an explicit, graded variable rather than a nuisance, via a taxonomy that predicts where automated scoring can be trusted. The work sits in [[cs-education|computing education]] and speaks to the wider [[automated-assessment|automated assessment]] and [[formative-assessment]] literature.

## Study Design & Method

- **Setting and sample.** 1,200 exam responses from second-year Computer Engineering undergraduates in an Operating Systems course at a Spanish university. The instrument was a closed-book, 90-minute midterm administered after four weeks of instruction, comprising 16 independent exercises; students wrote answers directly on a shared Linux server to fix conditions and block external resources.
- **Human baseline.** Three experienced instructors independently graded every response on a custom web platform through a blind interface, following a rubric refined over several academic terms. The rubric carried general criteria (command structure, syntax, paths, pipeline sequencing) plus question-specific guidance worth 0.25–1.25 points, and catalogd accepted alternative solutions and common errors with their deductions.
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

## What this means for practice

- **Instructors.** Use the taxonomy as an allocation rule, not an automation switch: delegate L1–L2 items (`ls`, `cat`, basic file manipulation) to AI-assisted grading and route L3–L4 items, which need structural reasoning about pipelines, permissions, and multi-concept integration, to human review or hybrid workflows.
- **Instructors.** Write the rubric before choosing a model: adding the full rubric plus a reference answer lifted every model (Gemini 0.829→0.888, Claude 0.809→0.863, GLM 0.793→0.844, GPT 0.779→0.847), a larger effect than switching vendor.
- **Instructors.** Do not grade sequential, task-based examinations item by item with an LLM: models penalized answers whose paths or filenames differed from the reference solution even when the student had correctly created those artifacts in an earlier question, so a single surface discrepancy can cascade into a categorically invalid grade.
- **Administrators.** Keep [[human-in-the-loop-ai|human oversight]] mandatory wherever grading requires interpreting student intent, because no frontier model matched the instructors' own agreement (ICC 0.888 for Gemini 3.0 Pro with the rubric against a human ceiling of 0.949).
- **Researchers.** Treat automated-grading agreement as a function of question cognitive level: report results stratified by taxonomy level, since baseline variants collapsed at L3 (GPT V1 ICC = 0.728) while L4 resisted even rubric-guided prompting (GPT's variants converged at 0.820).

## Limitations

- All 1,200 responses came from a single 90-minute midterm in one second-year Operating Systems course at one Spanish university, so the taxonomy and the agreement figures are tied to one course, one examination sitting, and one assessment format.
- Models ran at default settings under only two prompt variants; few-shot prompting, self-refinement, and parameters such as temperature were left unexplored, and the authors note the sample must grow across later sittings for stable statistics per taxonomy level.
- The human reference rests on three experienced instructors grading a rubric refined over several terms, and the strongest model–human agreement (ICC(3,1) = 0.888) still trailed the instructors' own inter-rater reliability (0.949) — with MAE 0.100 points against 0.028 for humans.
- The cross-question context failure mode was found by manual inspection of individual responses rather than measured statistically, so its frequency in the dataset is unknown.

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
- [[correct-answer-trap-ai-tutor]] — Catching The Correct Answer Trap: Characterizing AI Tutor Blind Spots When Analyzing Student Reasoning
- [[hybrid-e-assessment-semi-automated-grading]] — Hybrid E-Assessment in Higher Education: Semi-Automated Grading of Paper-Based Written Examinations

## Citation

Manuel Alonso-Carracedo, Ruben Fernandez-Boullon, Pedro Celard, Francisco J. Rodriguez-Martinez, Lorena Otero-Cerdeira (2026). [Automated Grading of Linux/Bash Examinations Using Large Language Models](https://arxiv.org/abs/2607.02432).