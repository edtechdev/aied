---
title: "What Don't You Understand? Using Large Language Models to Identify and Characterize Student Misconceptions About Challenging Topics"
created: 2026-05-16
updated: 2026-05-16
type: concept
tags: [llm, generative-ai, formative-assessment, higher-ed, learning-analytics, personalized-learning]
sources: [raw/papers/2605.00294.md]
confidence: high
---
# Using LLMs to Identify Student Misconceptions

**Parker & Zavala-Cerna (2026)** — [arXiv preprint](https://arxiv.org/abs/2605.00294)
## Synthesis

This paper presents a systematic two-stage methodology for surfacing student misconceptions at scale. Drawing on 3,802 medical student enrollments across 5 biomedical science courses (9 course periods, 40-50 quizzes each), Parker and Zavala-Cerna first use quantitative quiz-level performance metrics to identify challenging topics, then deploy LLMs to analyze quiz questions, student response patterns, and lecture transcripts in combination — extracting the specific misconceptions underlying poor performance.

The quality of LLM-identified misconceptions was rated as excellent by subject matter experts, and faculty interviews confirmed that data-driven topic identification aligned with, and extended, instructors' own classroom observations. This is significant because it demonstrates that LLM-based analysis can surface insights invisible in performance data alone — bridging the gap between [[learning-analytics]] dashboards (which show *what* is going wrong) and qualitative pedagogical reasoning (which explains *why*).

The approach connects to several established themes in the wiki. It operationalizes [[formative-assessment]] by enabling targeted, misconception-specific interventions rather than generic remediation. It advances [[personalized-learning]] by providing the diagnostic foundation needed for adaptive systems to respond to individual conceptual gaps. And it extends [[knowledge-tracing-irt|knowledge tracing]] beyond binary correct/incorrect signals to the richer space of specific misconception categories.

For [[student-experience]], the implications are direct: students struggling with the same topic for different conceptual reasons would receive different remediation. For [[ai-literacy]], the paper models how instructors can leverage AI outputs as hypotheses to be validated by expert judgment, rather than as authoritative diagnoses — a responsible-use pattern relevant to faculty development.

## Related Pages
  - [[simulating-students-java-programming-errors-llms]] — Complementary approach generating synthetic student errors via LLMs

- [[correct-answer-trap-ai-tutor]] — 8 of 8 papers in May 28 scan

- [[student-misconceptions-conditionals-loops-taxonomy]] — structured taxonomy for annotating student programming errors
- [[learning-analytics]] — Quantitative foundations that this work extends with qualitative LLM analysis
- [[formative-assessment]] — Assessment paradigm that misconception identification serves
- [[personalized-learning]] — The downstream goal of misconception-aware instruction
- [[knowledge-tracing-irt]] — Related student modeling approach; this adds misconception categorization
- [[student-experience]] — Student-facing implications of misconception-targeted remediation
- [[ai-literacy]] — Pattern of expert-validated AI use modeled by this methodology
- [[metacognition]] — Connection to student awareness of their own misconceptions

## Citation

Parker, M. J., & Zavala-Cerna, M. G. (2026). What Don't You Understand? Using Large Language Models to Identify and Characterize Student Misconceptions About Challenging Topics. Education and Information Technologies. arXiv:2605.00294.
