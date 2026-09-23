---
title: "The Aftermath of DrawEduMath: Vision Language Models Underperform with Struggling Students and Misdiagnose Errors"
created: "2026-08-15T15:53:50-04:00"
updated: "2026-09-19T10:03:37-04:00"
type: article
technology: [llm, multimodal]
assessment: [assessment-validity, educational-measurement]
ethics: [equity-in-ai-education]
pedagogy: [misconceptions]
discipline: [math education]
level: [k 12]
page_kind: [evaluation]
sources: ['raw/papers/drawedumath-vlm-struggling-students-2026.md']
confidence: high
audience: [researchers, instructional designers]
methods: [ai-ed-evaluation, benchmark]
---

> **Synthesis:** Lucy et al. (2026) provide a year-long snapshot of how **11 [[multimodal|vision-language models]] (VLMs)** perform on **DrawEduMath**, a QA [[benchmark]] built on real students' handwritten, hand-drawn responses to math problems (drawn largely from Title I / [[digital-divide|low-income]] schools via the ASSISTments platform). Their central finding is that model weaknesses concentrate on the core of [[math-education|math education]]: **[[misconceptions|student error]]**. All evaluated VLMs underperform when describing work from students who need more [[pedagogy|pedagogical]] help, and across all question types they struggle most on questions that require assessing whether the student's work is correct. This holds across text and image inputs, and across open-ended and binary question forms.

## Key Findings

- **Error content is harder than correct content (F1):** all 11 VLMs are worse at describing student work containing math errors than work without errors.
- **Assessing student correctness is hardest (F2):** across all QA, models struggle most on questions about whether the student response is correct — exactly where identifying "this student needs support" lives.
- **Gap persists and is hard to remove:** the performance gap on erroneous work persists when controlling for problem, and is only reduced (not eliminated) by adding image input. VLMs expect mathematically "clean" inputs; wrongly predicted answers for erroneous work resemble gold answers for correct work.
- **Consistent across input and question types:** the pattern appears with both text and image inputs and with both open-ended and binary question forms.
- **[[equity-in-ai-education|Equity]] risk:** ~85% of DrawEduMath images come from Title I schools ([[digital-divide|low-income]]), and model weaknesses concentrate on students who need the most help — so rushed integration risks widening [[equity-in-ai-education|achievement gaps]].

## What this means for practice

- **Designers.** Evaluate any math-support model on student work that contains errors, not only on clean or correct responses: across the 11 VLMs released in 2025, every model was less accurate describing erroneous student work, with the effect holding under problem fixed effects (all p < 1.0 × 10⁻¹²).
- **Designers.** Report separately whether a model can tell that a student needs help: questions about a student's correctness or error were the hardest QA type for all 11 models, in both binary and open-ended forms and with both text and image inputs.
- **Designers.** Do not assume better image capture fixes the problem: redrawing 336 images on a digital canvas improved accuracy yet left the erroneous-work gap statistically significant, and adding image input only reduced rather than removed it.
- **Researchers.** Disaggregate results by demonstrated student proficiency instead of reporting one average, and audit equity impact: about 85% of DrawEduMath images come from Title I schools, and model weakness concentrates on the students who need the most pedagogical support.
- **Researchers.** Re-apply the evaluation in another benchmark, language, or platform before generalizing, since DrawEduMath is a single English dataset drawn from one online learning platform.

## Limitations

- The benchmark is a single English dataset of 2,030 handwritten K-12 student responses from one online learning platform (ASSISTments), with self-selection among the teachers, schools, and districts that use it, so findings may not map onto other languages or learning contexts.
- The evaluation is a moving target: it covers 11 models released in 2025, and the five follow-up analyses (sections 4–8) focus on just four representative models — Gemini 2.5 Pro, Claude Sonnet 4.5, GPT-5, and Llama 4 Scout.
- Scoring depends on machine judgment: a majority vote of three LLM judges (Spearman ρ = 0.808 against human ratings) plus GPT-5-mini annotators labeling student error, validated on a manually checked sample of 200 examples (F1 = 0.984), with supporting annotations taken from pre-existing teacher captions.
- Several analyses are narrowed by data constraints: the redrawing experiment uses a stratified sample of 336 images rather than the full dataset because redrawing is time-intensive, some images were dropped from one analysis because their captions leaked correctness information, and one set of results covers only questions shared across multiple student images.

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
