---
title: "Automated Grading of Open-Ended Questions in Higher Education Using GenAI Models"
created: "2026-09-03T14:12:59-04:00"
updated: "2026-09-03T14:12:59-04:00"
type: article
tags: [automated-assessment, generative-ai, llm, educational-nlp, assessment, higher-ed]
sources: ['raw/papers/pecuchova-automated-grading-open-ended-genai-2026.md']
confidence: high
---

> **Synthesis:** Pecuchova, Benko, and Drlik (2025) systematically benchmark eleven state-of-the-art GenAI and sentence embedding models against two expert human graders for the [[automated-assessment|automated grading]] of 1,885 open-ended student responses to 24 questions from a software engineering course in [[higher-ed|higher education]]. Using inter-rater agreement metrics (Fleiss' Kappa, Krippendorff's Alpha, QWK) and classification error analysis, they find that GPTo1 achieves almost-perfect agreement with human graders, followed closely by Claude3 and PaLM2, while reference-based sentence embedding models such as [[llm|BERT]], RoBERTa, and T5 struggle with the diverse, context-sensitive phrasing students use. The work advances [[generative-ai|generative AI]]-driven [[assessment]] and [[educational-nlp]] by showing that context-sensitive [[llm|models]] outperform similarity-based approaches for grading open-ended [[assessment|responses]].

## Key Findings

**Comparative benchmarking.** Eleven models — GPTo1, Claude3, PaLM2, Mistral7B, Llama2, Cohere, SBERT, USE, T5, RoBERTa, and BERT — were evaluated on 1,885 answers from 110 students across 24 open-ended questions, against a benchmark set by two human graders in almost-perfect agreement (QWK = 0.95), providing a rigorous empirical basis for model selection in [[automated-assessment]].

**GPTo1 leads in alignment with human graders.** GPTo1 was the only model to reach almost-perfect agreement under the strict Fleiss' Kappa (0.82), with low false-positive and false-negative rates (11 FP, 39 FN) across grade categories including failing grades, making it the strongest candidate for independent deployment in [[higher-ed|higher education]].

**Claude3 and PaLM2 perform strongly but less completely.** Both achieved substantial agreement with humans (Fleiss' Kappa 0.75–0.80) and near-perfect Krippendorff's Alpha, excelling at higher grades ('A', 'B', 'E') yet showing slightly reduced recall for identifying failing ('Fx') grades.

**Context-sensitivity beats reference matching.** [[educational-nlp|Sentence embedding]] and reference-based models (BERT, RoBERTa, T5, USE) relied on cosine similarity to reference answers and systematically misclassified valid responses phrased differently by students, inflating false positives (e.g., BERT: 345 FP) and penalizing correct-but-divergent answers — evidence that rigid reference alignment undercuts fairness in [[assessment|open-ended assessment]].

**NLI exposes reference-based grading limits.** Natural Language Inference analysis found that a large share of student responses fell into the *contradiction* category relative to reference answers, despite being semantically correct — confirming that students' short, diverse, own-word responses deviate from model answers and arguing for context-sensitive evaluation in [[educational-nlp]].

**Response features shape reliability.** Student answers averaged only ~12 relevant words (23 total, ~10 stop words) with college-level readability (Flesch-Kincaid 14.79) and high lexical diversity, making short, sparse responses particularly challenging for reference-aligned models while [[generative-ai|GenAI]] models like GPTo1 handled them robustly.

**Cost and scalability trade-offs.** While GPTo1 was the only model considered deployable without human oversight, its proprietary API costs raise scalability concerns, leading the authors to recommend hybrid strategies combining advanced models with affordable options or [[human-in-the-loop-ai|human oversight]] in resource-constrained settings.

## Connected Concepts

- [[automated-assessment]]
- [[generative-ai]]
- [[llm]]
- [[educational-nlp]]
- [[assessment]]
- [[higher-ed]]

## Connected Articles

- [[llm-automated-grading-programming-comparison-2026]] — Large-scale comparison of LLMs for automated grading
- [[llm-automated-assessment-student-self-explanations]] — LLM automated assessment of open student responses
- [[gpt-human-rater-essay-assessment-2026]] — GPT versus human raters in essay assessment
- [[aiawe-automated-writing-evaluation]] — Automated evaluation of student writing
- [[hybrid-e-assessment-semi-automated-grading]] — Semi-automated grading approaches in e-assessment

## Citation

Pecuchova, J., Benko, Ľ., & Drlik, M. (2025). [Automated Grading of Open-Ended Questions in Higher Education Using GenAI Models](https://doi.org/10.1007/s40593-025-00517-2). *International Journal of Artificial Intelligence in Education*, 35, 3813–3846.
