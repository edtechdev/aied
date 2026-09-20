---
title: What Don't You Understand? Using Large Language Models to Identify and Characterize Student Misconceptions About Challenging Topics
created: "2026-05-16T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [metacognition]
technology: [generative-ai, learning-analytics, llm, personalized-learning]
assessment: [formative-assessment]
methods: [mixed-methods-research]
stakeholders: [student-experience]
research_method: [system development]
audience: [instructors, researchers, software developers]
level: [higher ed]
sources: ['raw/papers/2605.00294.md']
confidence: high
discipline: [medical education]
page_kind: [evaluation]
---

> **Synthesis:** This paper presents a systematic two-stage methodology for surfacing student [[misconceptions]] at scale. Drawing on 3,802 medical student enrollments across 5 biomedical science courses (9 course periods, 40-50 quizzes each), Parker and Zavala-Cerna first use [[quantitative-research|quantitative]] quiz-level performance metrics to identify challenging topics, then deploy LLMs to analyze quiz questions, student response patterns, and lecture transcripts in combination — extracting the specific misconceptions underlying poor performance.
> The quality of [[llm]]-identified misconceptions was rated as excellent by subject matter experts, and faculty interviews confirmed that data-driven topic identification aligned with, and extended, instructors' own classroom observations. This is significant because it demonstrates that LLM-based analysis can surface insights invisible in performance data alone — bridging the gap between [[learning-analytics]] dashboards (which show *what* is going wrong) and [[qualitative-research|qualitative]] [[pedagogy|pedagogical]] reasoning (which explains *why*).
> The approach connects to several established themes in the knowledge base. It operationalizes [[formative-assessment]] by enabling targeted, misconception-specific interventions rather than generic remediation. It advances [[personalized-learning]] by providing the diagnostic foundation needed for [[adaptive-learning|adaptive systems]] to respond to individual conceptual gaps. And it extends [[huang-interpretable-knowledge-tracing-2026|knowledge tracing]] beyond binary correct/incorrect signals to the richer space of specific misconception categories.
> For [[student-experience]], the implications are direct: students struggling with the same topic for different conceptual reasons would receive different remediation. For [[ai-literacy]], the paper models how instructors can leverage AI outputs as hypotheses to be validated by expert judgment, rather than as authoritative diagnoses — a responsible-use pattern relevant to [[educational-development|faculty development]].

## What this means for practice

- **Instructors.** Treat every quiz as diagnostic data, not just a score. Ranking the 40-50 quizzes per course by item difficulty surfaced the topics that stayed hard across cohorts, which is a different list from the topics that went badly on the last exam.
- **Instructors.** Read LLM-extracted misconceptions as hypotheses to validate against your own teaching experience. Expert raters rated the LLM-identified misconceptions as excellent, yet the authors still put verification checks on educators before acting on them.
- **Researchers.** Combine quantitative topic ranking with LLM analysis of quiz questions, response patterns, and lecture transcripts. Performance data alone shows where students struggle; the response-pattern and transcript layers are what explain why.
- **Software developers.** Ground generation in course-specific transcripts, and log what the model anchored on. The same grounding that reduces [[hallucination-risk|hallucination]] can prime the model to rationalize the most common wrong answer it was handed.

## Limitations

- All data come from five online biomedical science courses at a single international medical school in Mexico — 2,069 students accounting for 3,802 course enrollments from July 2019 to December 2023 — so transfer to other institutions, disciplines, and assessment regimes is untested.
- The courses were high-quality, with numerous well-structured topic-based formative assessments; the authors state that applicability drops in courses with significantly fewer assessment items or lower-quality questions that do not reflect core learning objectives.
- The analysis examined predominantly multiple-choice quizzes delivered immediately after instructional videos. MCQs constrain the space of possible responses, and nothing here speaks to delayed assessments delivered weeks later.
- Prompt design introduced anchoring bias: supplying the most common incorrect answer alongside the lecture transcripts primes the model to rationalize that specific error, which may overlook misconceptions held by a minority of students.

## Connected Concepts

- [[learning-analytics]]
- [[formative-assessment]]
- [[personalized-learning]]
- [[student-experience]]
- [[ai-literacy]]
- [[misconceptions]]
- [[cognitive-diagnosis]]
- [[knowledge-tracing]]
## Connected Articles

- [[huang-interpretable-knowledge-tracing-2026]]
## Citation

Parker, M. J., & Zavala-Cerna, M. G. (2026). [What Don't You Understand? Using Large Language Models to Identify and Characterize Student Misconceptions About Challenging Topics](https://arxiv.org/abs/2605.00294). Education and Information Technologies.
