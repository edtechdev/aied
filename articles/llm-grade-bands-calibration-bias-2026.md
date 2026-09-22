---
title: "Can large language models reproduce higher education grade bands? Cross-model study of calibration and grading bias in authentic student writing"
created: "2026-09-22T07:52:00-04:00"
updated: "2026-09-22T07:52:00-04:00"
type: article
published: "2026-09-21"
foundations: [human-ai-collaboration, limitations-in-aied-research]
technology: [generative-ai, llm, educational-nlp]
methods: [quantitative-research, benchmark]
assessment: [automated-assessment, automated-essay-scoring, assessment-validity, educational-measurement, evaluative-judgment]
ethics: [bias-mitigation, trust-calibration]
audience: [assessment professionals, assessment designers, instructors, researchers]
level: [higher ed, undergraduate]
research_method: [secondary analysis]
discipline: [writing education]
page_kind: [evaluation]
source_url: https://doi.org/10.1080/02602938.2026.2734796
sources: ['raw/papers/llm-grade-bands-calibration-bias-2026.md']
confidence: high
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale]
---

> **Synthesis:** Eight model configurations from four families were asked to place 114 authentically marked university essays into a four-band grade scheme (Fail, Pass, Merit, Distinction) under one shared prompt. Exact band agreement ranged from 18.4% to 54.4% — a spread wider than any single headline number, and one that tracks the model family rather than the model's size. The best run, Llama 3.1 8B at temperature 0.5, matched the human band on 54.4% of essays and landed within one band on 98.2%. The weakest, GPT-OSS 120B, agreed 18.4% of the time and undergraded systematically, by an average of 1.316 bands at temperature 0.5, missing Distinction essays in particular. Temperature did not cure calibration: it helped one model descriptively, changed nothing for another, and significantly hurt a third. The paper's conclusion is narrow and defensible — useful as a supervised second reader, not as an autonomous [[automated-assessment|grader]] — and its sharpest line is that model size is not a proxy for assessment validity.

### Overview

[[higher-ed|Higher education]] has been quick to pilot [[generative-ai|LLM]] support for marking and slow to establish what these systems do when the label matters. Most published comparisons report a single model, often against a small set of essays, and use agreement as the only metric. This study was designed to close three gaps at once: multiple model families under identical conditions, authentic institutional grade-band labels rather than researcher-assigned scores, and an analysis that looks past exact agreement to the direction and size of the error.

The research question asks how accurately [[llm|large language models]] reproduce reference Merit and Distinction labels, and what patterns of calibration or [[bias-mitigation|grading bias]] emerge across families. The secondary analyses address exact and grade-distance agreement, directional under- or over-grading, label-specific Merit–Distinction discrimination, and whether temperature changes anything within a family.

### Key Findings

1. **Agreement varied enormously, and by family rather than by scale.** Exact band agreement spanned 18.4% to 54.4% across the eight configurations. Llama 3.1 8B at temperature 0.5 led with 54.4% exact, 98.2% within one band, and a mean absolute error of 0.474 bands with near-zero bias. A second tier of three runs reached 50.9%.
2. **The worst performer was also the largest and it erred in one direction.** GPT-OSS 120B scored 22.8% and 18.4% exact at temperatures 0.0 and 0.5; GPT-OSS 20B reached 39.5% and 29.8%. Both undergraded conservatively and systematically, with GPT-OSS 120B at temperature 0.5 averaging −1.316 grade bands — errors that concentrate in one direction, which is what makes them a validity problem rather than noise.
3. **Some models failed the band they were meant to recognise.** In individual cases the model returned Pass or Fail for essays that human markers had placed at Merit or Distinction. Because the locked cohort contained only Merit and Distinction references, these are below-reference-band outputs, and they coincide with consistently lower accuracy on Distinction than on Merit.
4. **Configuration differences were statistically significant.** Friedman tests rejected the idea of equivalent performance on both exact correctness and absolute error, and the effect was markedly stronger for absolute error than for exact agreement. In the pairwise comparisons, 14 of 28 McNemar and 18 of 28 Wilcoxon tests survived Holm correction.
5. **Grade distance is a more sensitive measure than exact matching.** The stronger effect for absolute error than for exact agreement is the paper's argument for reporting directional bias and label-specific metrics: a model can look moderately accurate while systematically under-recognising a whole band.
6. **Temperature is not a calibration fix.** Raising temperature moved Llama 3.1 descriptively from 50.9% to 54.4% exact (not statistically significant), left Qwen 32B essentially unchanged, and significantly worsened GPT-OSS 20B (exact accuracy 39.5% to 29.8%, MAE 0.947 to 1.175, Wilcoxon p = 0.019).
7. **Size did not predict validity.** A sensitivity analysis adding Llama 3.3 70B did not overturn the pattern, and miscalibration appeared in both conservative and over-generous directions across families.

### How the study was done

The essay cohort came from BAWE/Coventry assessed writing, a corpus of successful student assignments from British higher education, with each record linked to its full text and its reference grade label. The locked primary cohort held 114 essays available across all eight pre-specified runs — 70 marked Merit and 44 marked Distinction — and the same 114 essays were used in every main analysis to keep denominators fixed and comparisons directly interpretable.

Four model families were run: GPT-OSS 20B, GPT-OSS 120B, Qwen 32B and Llama 3.1 8B, each at temperature 0.0 and 0.5, with reasoning settings varied where available. All runs used one shared prompt that permitted four grade bands, with structured outputs. Performance was measured through exact agreement, within-one-grade agreement, mean absolute error, directional bias, and label-specific Distinction and Merit–Distinction discrimination metrics including sensitivity, specificity, precision, F1 and MCC. Non-parametric tests (Friedman, McNemar, Wilcoxon) compared configurations, with Holm correction for the pairwise comparisons. Because the analysis used secondary, de-identified corpus materials, no new participants were recruited.

### What the findings do and do not establish

The comparison design is the paper's main methodological contribution. Locking one cohort of 114 essays across all runs, and reporting grade-distance and directional bias alongside agreement, addresses the way single-model, single-metric studies can make a rater look better than it is. Any institution evaluating a grading model can ask for the same six numbers.

The boundaries matter as much as the results. The locked cohort contained only Merit and Distinction references, so the study measures Merit–Distinction discrimination within a four-band response space rather than reliability across the full Fail-to-Distinction range — and the Pass and Fail predictions are below-reference-band outputs, not evaluated against real Pass or Fail scripts. Everything comes from one filtered corpus and one shared prompt, so discipline, genre, rubric and [[prompt-engineering|prompt design]] are all held constant in a way real marking is not. Reasoning effort could not be analyzed as intended because the high-reasoning runs were unavailable and the available runs did not span a complete low–medium–high range, and disputed cases received no fresh [[human-in-the-loop-ai|human moderation]].

The practical reading is therefore about the shape of the risk rather than a ranking. Errors are not evenly distributed: they are directional, they fall hardest on the top band, and they vary more between families than within them. A model that undergrades Distinction essays is not a harsh marker whose threshold can be shifted; it is systematically failing to detect the qualities that earn the label, which is precisely the [[assessment-validity|validity]] question that agreement statistics alone conceal.

## What this means for practice

- **Pilot before trusting, and pilot on your own exemplars.** Performance swung from 18.4% to 54.4% across families on the same essays, so a model's reputation or parameter count says little about how it will read your assessments.
- **Ask for the full metric set, not accuracy alone.** Request exact agreement, grade-distance error, directional bias and per-band sensitivity and specificity; those are what reveal whether a model squeezes everything toward the middle.
- **Deploy as a second reader for triage and calibration, never as the marker.** The supported use case here is supervised support — flagging borderline scripts, checking consistency between markers, or producing a first pass a human then verifies.
- **Do not expect temperature tuning to fix the problem.** It helped one family descriptively, changed nothing for another, and significantly worsened a third, so it is not a substitute for checking band-level performance.
- **Watch the top band specifically.** Distinction accuracy trailed Merit accuracy in every configuration, so any moderated use should keep human eyes on the highest grades and on the boundaries between bands that carry institutional consequences.

## Limitations

- **No Fail or Pass references in the locked cohort.** The design permitted four bands, but the 114 essays carried only Merit and Distinction labels, so the results describe Merit–Distinction discrimination and below-reference-band outputs rather than demonstrated reliability across the full grade range.
- **One corpus, one prompt, one context.** A single filtered set of British university assignments marked with one shared prompt leaves discipline, genre, rubric and prompt design untested; other settings may produce different calibration.
- **Reasoning effort could not be analyzed as a primary factor.** High-reasoning runs were unavailable and the available reasoning configurations did not form a complete comparison, so the supplementary low-versus-medium analysis remains exploratory.
- **Model predictions were not re-moderated by human experts.** Accuracy is measured against existing reference labels without independent review of disputed or borderline essays, so disagreements are attributed to the model by construction.

## Connected Concepts
[[automated-assessment]], [[automated-essay-scoring]], [[assessment-validity]], [[educational-measurement]], [[evaluative-judgment]], [[generative-ai]], [[llm]], [[human-ai-collaboration]], [[bias-mitigation]], [[trust-calibration]]

## Connected Articles
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs Do Not Grade Essays Like Humans
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Know When to Trust: Making AI Scoring More Reliable for Educational Assessment
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI-assisted, instructor-supervised grading and feedback in higher education: Design and evaluation of an end-to-end pipeline
- [[ai-grading-handwritten-physics-2026]] — Large Scale AI Grading of Handwritten Physics Assessments: Score Agreement and Olympiad Team Selection Outcomes

## Citation

Kerwat, L., Donaldson, D. L., & Mahomed, A. (2026). [Can large language models reproduce higher education grade bands? Cross-model study of calibration and grading bias in authentic student writing](https://doi.org/10.1080/02602938.2026.2734796). *Assessment & Evaluation in Higher Education*. Advance online publication.