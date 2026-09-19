---
title: "GLAT: The Generative AI Literacy Assessment Test"
created: "2026-08-15T16:09:27-04:00"
updated: "2026-09-19T10:03:37-04:00"
type: article
foundations: [ai-literacy]
technology: [generative-ai, llm]
assessment: [assessment-validity, educational-measurement, item-response-theory]
audience: [researchers, instructors]
research_method: [educational measurement]
level: [higher ed]
page_kind: [evaluation]
sources: ['raw/papers/jin-glat-genai-literacy-assessment.md']
confidence: high
methods: [ai-ed-evaluation]
---

> **Synthesis:** **GLAT (Generative [[ai-literacy|AI Literacy]] Assessment Test)** — a 20-item, performance-based multiple-choice instrument for measuring GenAI literacy in higher education. Validated with classical test theory (CTT) and item response theory (IRT) on responses from 355 higher education students, the final 2-parameter logistic (2PL) model showed strong structural validity (RMSEA = 0.03, CFI = 0.97) and reliability (Cronbach's alpha = 0.80, omega total = 0.81). Crucially, GLAT scores predicted performance on GenAI-supported learning tasks better than self-reported measures such as perceived ChatGPT proficiency, demonstrating external validity.

## Summary

As generative AI tools are rapidly integrated into education, reliably measuring GenAI literacy has become a pressing need. Existing instruments overwhelmingly rely on self-reported surveys, which capture perceived rather than actual competence and are prone to bias and overestimation. The authors of this study introduce the Generative AI Literacy Assessment Test (GLAT), a 20-item multiple-choice instrument designed to measure GenAI literacy among higher education students, developed following established standards for psychological and educational measurement.

The instrument's items were built from a blueprint of 25 GenAI concepts organized across four literacy dimensions — Know & Understand, Use & Apply, Evaluate & Create, and Ethics — and refined through expert review and a content-validity pilot with 200 students. Item selection used classical test theory to retain 20 items with adequate discrimination. Structural validity and reliability (RQ1) were then assessed using item response theory on responses from 355 higher education students, yielding a well-fitting 2PL model. External validity (RQ2) was established in a within-subject study with 83 students who completed a visual-analytics comprehension task with and without a [[rag|retrieval-augmented]] GenAI [[conversational-ai|chatbot]]: GLAT scores significantly predicted AI-assisted task performance, while self-reported ChatGPT literacy did not. This positions the GLAT as a performance-based alternative to self-report for assessing GenAI literacy in [[higher-ed]].

## Key Findings

- **A 20-item performance-based MCQ test.** GLAT assesses GenAI literacy via 20 multiple-choice items spanning [[generative-ai]] knowledge, application, evaluation, and ethics — targeting skills self-report instruments miss.
- **Rigorous psychometric development.** Built following established measurement standards, with a 25-concept blueprint, expert review, and a 200-student content-validity pilot (Cronbach's alpha = 0.81 across relevance, comprehensiveness, comprehensibility, and face validity).
- **Validated with CTT + IRT.** With 355 higher education students, the best-fitting 2-parameter logistic (2PL) model showed strong structural validity (RMSEA = 0.03, CFI = 0.97, SRMSR = 0.052) and reliability (Cronbach's alpha = 0.80, omega total = 0.81).
- **Item selection via CTT.** Five of 25 items with discrimination indices below 0.3 were excluded, leaving 20 items with discrimination indices of 0.33–0.55 and difficulties of 0.25–0.90.
- **Unidimensionality confirmed.** A single-factor model fit well (χ²/df = 1.51, RMSEA = 0.038) with local independence confirmed, supporting a single latent GenAI literacy construct.
- **Most informative for lower proficiency.** The test information function peaked at θ = −0.8, indicating GLAT is most precise for learners with low to moderate GenAI literacy — its intended target group given the novelty of GenAI.
- **External validity (RQ2).** In a study with 83 students using a RAG-based GenAI chatbot, GLAT scores significantly predicted AI-assisted task performance (β = 0.220, p = .040), controlling for baseline performance and [[visualization]] literacy.
- **Outperforms self-report.** Self-reported ChatGPT literacy (Lee & Park, 2024) was not a significant predictor (β = −0.159, p = .118), whereas GLAT was — evidence that [[assessment-validity]] and predictive utility favor performance-based measurement over self-assessment.

## What this means for practice

- **Instructors.** Diagnose GenAI literacy with a performance test rather than a self-rating: GLAT scores predicted AI-assisted task performance (β = 0.220, p = .040) while self-reported ChatGPT proficiency did not (β = −0.159, p = .118).
- **Instructors.** Plan instruction around what the instrument measures — Know & Understand, Use & Apply, Evaluate & Create, and Ethics — and note that the test is most precise for low to moderate GenAI literacy (its information function peaked at θ = −0.8), the typical entry level.
- **Curriculum designers.** Use the 25-concept blueprint (foundation models, prompt-based development, RAG, hallucination, copyright, privacy) to sequence GenAI content instead of teaching tool use in the abstract.
- **Researchers.** Adopt the development path as a template for new AI assessments: [[item-response-theory|CTT item selection]], IRT validation of a 2PL model (RMSEA = 0.03, CFI = 0.97), then a within-subject external-validity study.
- **Researchers.** Move beyond perceived competence: the GLAT model explained 32.1% of variance in GenAI-supported performance, and adding self-reported literacy did not improve prediction.

## Limitations

- Validation covers [[higher-ed]] students only, the items use specialized GenAI terminology, and the instrument is delivered in English, so its use at other levels, disciplines, or languages is not established.
- External validity rests on one context-specific task — a visual-analytics comprehension task completed by 83 students with a RAG-based GPT-4o chatbot — rather than on broader coursework outcomes.
- Measurement precision is uneven: the test information function peaks at θ = −0.8, so GLAT separates low- to moderate-literacy learners better than high scorers.
- Item quality was uneven by the authors' own criteria: five of 25 items were dropped for discrimination indices below 0.3, and retained difficulties spanned 0.25 to 0.90.

## Connected Concepts

- [[ai-literacy]]
- [[generative-ai]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[assessment-validity]]
- [[higher-ed]]
- [[ai-ed-evaluation]]
- [[llm]]
- [[self-report-measures]]

## Connected Articles

- [[ai-literacy-assessment-misalignment]] — Self-assessment of AI literacy misaligns with actual skill
- [[ai-literacy-continuum-higher-education]] — A practical five-stage developmental continuum for AI literacy in higher education
- [[tracing-genai-literacy-interaction-patterns]] — Tracing GenAI literacy through interaction patterns
- [[metacognitive-ai-literacy-beyond-skills-gap-2026]] — Metacognitive AI literacy beyond the skills gap
- [[huang-interpretable-knowledge-tracing-2026]] — Knowledge tracing and item response theory

## Citation

Jin, Y., Martinez-Maldonado, R., Gašević, D., & Yan, L. (2025). [*GLAT: The generative AI literacy assessment test*](https://doi.org/10.1016/j.caeai.2025.100436). *Computers and Education: Artificial Intelligence*, 9, 100436. https://doi.org/10.1016/j.caeai.2025.100436
