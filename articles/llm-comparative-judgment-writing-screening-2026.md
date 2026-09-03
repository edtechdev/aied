---
title: "Validity of Large Language Model Comparative Judgment for Universal Writing Screening"
created: "2026-09-03T09:00:00-04:00"
updated: "2026-09-03T09:00:00-04:00"
type: article
tags: [automated-assessment, writing-education, llm, k-12, assessment-validity, equity-in-ai-education, multilingual-learning, assessment]
sources: ['raw/papers/llm-comparative-judgment-writing-screening-2026.md']
confidence: high
---

> **Synthesis:** Mercer and Reed (2026) evaluate whether [[llm|large language model]]-based comparative judgment (CJ) can score informational writing for universal screening with acceptable validity. On writing assessments from 1,208 students in Grades 3–6 across three screening occasions, seven LLMs spanning different capability and cost tiers performed pairwise comparisons of writing quality. LLM-based CJ scores converged with [[research-methods-aied|researcher]] analytic-rubric scores (r = .59–.73), and single-wave CJ was comparable to researcher scoring in predicting state writing-rubric scores while generally matching or exceeding it in predicting ELA scale scores and classifying ELA proficiency. Averaging across the three screening waves substantially improved validity and classification accuracy (β = .59–.66 for state rubric, β = .68–.74 for ELA scale, AUC = .82–.86 for ELA proficiency). Predictive bias patterns for [[multilingual-learning|multilingual learners]] were similar across scoring methods, and results were consistent across LLMs, with little evidence that greater model capability or cost improved validity.

## Scoring at the Scale Universal Screening Requires

Universal writing screening needs scoring approaches that are both feasible at scale and backed by validity evidence. Analytic rubrics require extensive human rating time, which limits how often schools can screen. The authors test a faster alternative: having large language models judge writing quality through **comparative judgment** — repeatedly comparing pairs of essays and deciding which is better — rather than assigning absolute rubric scores. Comparative judgment sidesteps the calibration and anchoring problems of absolute scoring and is inherently a ranking task well suited to LLM pairwise decisions.

## Study Design

1,208 students in Grades 3–6 completed informational writing assessments across three screening occasions. Seven LLMs representing different capability and cost tiers performed the pairwise comparisons. The criterion measures were researcher analytic-rubric scores, state writing-rubric scores, ELA scale scores, and ELA proficiency classifications. The study asked whether LLM-based CJ scores were valid, whether averaging multiple writing samples improved that validity, and whether predictive bias differed for multilingual learners.

## Findings: Valid, Efficient, and Fairly Consistent Scoring

The results support LLM-based CJ as a promising approach to efficient [[writing-education|writing]] screening:

1. **Convergence with human rubrics** — LLM-based CJ scores correlated r = .59–.73 with researcher analytic-rubric scores.
2. **Comparable or better prediction than researcher scoring** — for single-wave scores, LLM CJ matched researcher scoring in predicting state writing-rubric scores and generally matched or exceeded it in predicting ELA scale scores and classifying ELA proficiency.
3. **Multiple samples materially help** — averaging scores across the three screening waves substantially improved criterion-related validity and classification accuracy, with LLM CJ reaching β = .59–.66 for state writing rubric, β = .68–.74 for ELA scale scores, and AUC = .82–.86 for ELA proficiency.
4. **Model capability did not drive validity** — findings were broadly consistent across the seven LLMs, with little evidence that greater model capability or cost improved validity evidence.

Predictive-bias patterns for multilingual learners were similar across the LLM-based and researcher scoring methods, an important [[equity-in-ai-education|equity]] signal for a tool intended for universal screening.

## Implications for Automated Writing Assessment

For [[automated-assessment]] and screening practice, the study suggests that LLM comparative judgment can be a feasible, valid complement to (or substitute for) costly human analytic scoring — especially when multiple writing samples per student are available, which the results show improves validity more than model choice does. The finding that cheaper, less capable LLMs performed as well as premium models has cost implications for school systems. The absence of differential predictive bias for multilingual learners supports the [[bias-mitigation|fairness]] of the approach, though the authors frame the work as validity evidence for screening rather than a claim about using LLM scoring to make high-stakes decisions. The paper connects directly to ongoing questions in [[assessment-validity|assessment validity]] about when and how [[llm|LLM]]-based scoring can be trusted in [[k-12]] [[assessment]].

## Connected Concepts
- [[automated-assessment]]
- [[writing-education]]
- [[llm]]
- [[k-12]]
- [[assessment-validity]]
- [[equity-in-ai-education]]
- [[multilingual-learning]]
- [[assessment]]

## Connected Articles
- [[gpt-human-rater-essay-assessment-2026]] — Comparing GPT and Human Raters in Essay Assessment
- [[bandit-driven-llm-essay-scoring-2026]] — Learning to Grade Efficiently: A Bandit-Driven Prompt-Selection Framework for Low-Cost LLM Essay Scoring
- [[aiawe-automated-writing-evaluation]] — AiAWE: An Open-Source LLM Automated Writing Evaluation System
- [[llm-automated-grading-programming-comparison-2026]] — A Systematic Comparison of Large Language Models for Automated Assignment Assessment in Programming Education
- [[hybrid-e-assessment-semi-automated-grading]] — Hybrid E-Assessment in Higher Education

## Citation
Mercer, S., & Reed, D. K. (2026). [*Validity of Large Language Model Comparative Judgment for Universal Writing Screening*](https://osf.io/preprints/edarxiv/4k9r8/). EdArXiv preprint.
