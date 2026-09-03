---
title: Can Generative Artificial Intelligence Reliably Score Open-Ended Question Assessments in Undergraduate Medical Education?
created: "2026-09-03T15:00:00-04:00"
updated: "2026-09-03T15:00:00-04:00"
type: article
tags:
  - generative-ai
  - automated-assessment
  - medical-education
  - grading
  - llm
  - rubric-based-assessment
sources:
  - raw/papers/olvet-genai-scoring-open-ended-medical-2026.md
confidence: high
---

> **Can Generative Artificial Intelligence Reliably Score Open-Ended Question Assessments in Undergraduate Medical Education?** — This study tested whether [[generative-ai]] (GPT-4) could reliably score [[automated-assessment|open-ended question]] exams in [[medical-education|undergraduate medical education]]. Across three iterations of [[prompt-engineering|rubric engineering]] at two US medical schools, inter-rater reliability between AI and faculty reached substantial-to-almost-perfect levels (weighted kappa up to 0.94) for three of four questions. The authors argue generative AI can [[automated-assessment|score OEQs]] reliably when humans remain in the loop to iteratively refine scoring rubrics based on error pattern analysis.

## Key Findings

- After three iterations of [[assessment|rubric]] refinement, inter-rater reliability (IRR) between GPT-4 and faculty reached substantial-to-almost-perfect agreement for three of four questions using analytic and holistic rubrics: question 1A (κw=0.94), question 2A (κw=0.88), and question 2H (κw=0.89), while question 1H scored via a holistic rubric reached only moderate reliability (κw=0.54).
- An iterative "[[prompt-engineering|rubric engineering]]" workflow — where faculty review AI-generated feedback, perform error pattern analysis, establish gold-standard scores, and refine the rubric — steadily improved IRR across all questions, with almost all remaining score discrepancies being only 1-point differences.
- Score discrepancies stemmed from identifiable sources in both raters: GPT-4 over-scored when students provided multiple possible answers or used vocabulary absent from the rubric, while faculty were often "overly generous" graders, awarding credit for true statements that did not answer the question; faculty errors also reflected fatigue and hawk/dove (strict/lenient) grading styles.
- [[feedback|Generative-AI-generated narrative feedback]] proved diagnostically useful for identifying scoring errors and holds potential for delivering timely, personalized feedback to students, although faculty noted occasional inaccuracies in the feedback itself that risk misleading learners.
- GPT-4 struggled most with the most synthetic, holistic-rubric question (1H) and with conditional rubric language (e.g., "AND"/"OR"); adding a model answer to the prompt in iteration 3 was counterproductive, lowering reliability.
- The authors emphasize that [[human-in-the-loop-ai|humans must remain in the loop]] to safeguard [[trust-calibration|validity, reliability, reproducibility, and bias]] when using generative AI for [[automated-assessment|scoring]], e.g., having faculty score a subset of exams to confirm accuracy.
- Because 82% of US medical schools use pass/fail pre-clerkship grading, exact AI score agreement may not be necessary for many operational uses, expanding the practical case for [[automated-assessment|automated OEQ scoring]].
- [[privacy|Privacy]] and [[ethics|ethical]] safeguards were addressed by de-identifying responses and storing them in HIPAA-compliant, password-protected databases, with UCSF using a localized model deployment on its secure network.

## Connected Concepts

- [[automated-assessment]]
- [[medical-education]]
- [[generative-ai]]
- [[assessment]]
- [[llm]]
- [[higher-ed]]

## Connected Articles

- [[gpt-human-rater-essay-assessment-2026]]
- [[bandit-driven-llm-essay-scoring-2026]]
- [[ground-truth-reliability-aied]]
- [[llm-formative-feedback-systematic-review-2026]]

## Citation

Olvet, D. M., Kruidering, M., Fulton, T. B., Truong, B., Endo, K., Lucito, R., & Willey, J. M. (2026). [Can Generative Artificial Intelligence Reliably Score Open-Ended Question Assessments in Undergraduate Medical Education?](https://doi.org/10.1007/s40670-026-02638-2). *Medical Science Educator*, 36(6), 1539-1552.
