---
title: "The Aftermath of DrawEduMath: Vision Language Models Underperform with Struggling Students and Misdiagnose Errors"
created: "2026-08-15T15:53:50-04:00"
updated: "2026-08-22T19:45:00-04:00"
type: article
tags: [math-education, multimodal, misconceptions, ai-ed-evaluation, educational-measurement, assessment-validity, k-12, llm, equity-in-ai-education]
research_method: [educational measurement]
discipline: [math education]
level: [k 12]
category: [evaluation]
sources: ['raw/papers/drawedumath-vlm-struggling-students-2026.md']
confidence: high
---

## Summary

Lucy et al. (2026) provide a year-long snapshot of how **11 [[multimodal|vision-language models]] (VLMs)** perform on **DrawEduMath**, a QA [[benchmark]] built on real students' handwritten, hand-drawn responses to math problems (drawn largely from Title I / [[digital-divide|low-income]] schools via the ASSISTments platform). Their central finding is that model weaknesses concentrate on the core of [[math-education|math education]]: **[[misconceptions|student error]]**. All evaluated VLMs underperform when describing work from students who need more pedagogical help, and across all question types they struggle most on questions that require assessing whether the student's work is correct. This holds across text and image inputs, and across open-ended and binary question forms.

## Key Findings

- **Error content is harder than correct content (F1):** all 11 VLMs are worse at describing student work containing math errors than work without errors.
- **Assessing student correctness is hardest (F2):** across all QA, models struggle most on questions about whether the student response is correct — exactly where identifying "this student needs support" lives.
- **Gap persists and is hard to remove:** the performance gap on erroneous work persists when controlling for problem, and is only reduced (not eliminated) by adding image input. VLMs expect mathematically "clean" inputs; wrongly predicted answers for erroneous work resemble gold answers for correct work.
- **Consistent across input and question types:** the pattern appears with both text and image inputs and with both open-ended and binary question forms.
- **[[equity-in-ai-education|Equity]] risk:** ~85% of DrawEduMath images come from Title I schools ([[digital-divide|low-income]]), and model weaknesses concentrate on students who need the most help — so rushed integration risks widening [[equity-in-ai-education|achievement gaps]].

## Implications

- VLM training/evaluation pipelines that favor correct mathematical content conflict with education's need to emphasize incorrect work.
- [[ai-ed-evaluation|AI-in-education evaluation]] should be **disaggregated** to check whether models can (a) discern when a student needs pedagogical support and (b) serve students [[equity-in-ai-education|equitably]] across proficiency levels.
- Without careful attention, model capabilities may be overstated and hasty classroom integration could exacerbate existing [[equity-in-ai-education|academic-achievement gaps]].

evement gaps.

## Connected Concepts

- [[math-education]]
- [[multimodal]]
- [[misconceptions]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[k-12]]
- [[llm]]
- [[educational-nlp]]
- [[equity-in-ai-education]]

## Connected Articles

- [[llm-cognitive-diagnosis-handwritten-math]] — Benchmarking LLMs for diagnosing students' cognitive skills from handwritten math

## Citation

Lucy, L., Zhang, A., Anderson, N., Knight, R., & Lo, K. (2026). [*The aftermath of DrawEduMath: Vision language models underperform with struggling students and misdiagnose errors*](https://arxiv.org/abs/2603.00925).
