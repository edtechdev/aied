---
title: "A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment"
created: "2026-09-07T09:09:07-04:00"
updated: "2026-09-07T09:09:07-04:00"
type: article
tags: [automated-assessment, assessment, assessment-validity, human-in-the-loop-ai, llm, equity-in-ai-education]
sources: ['raw/papers/2609.05143.md']
confidence: high
---

> **Synthesis:** This study designs and validates a [[human-in-the-loop-ai|human-in-the-loop]] (HITL) framework for [[automated-assessment|AI-assisted scoring]] of short Spanish argumentative writing in a large-scale national examination (Uruguay's Acredita EB, ~5,000–6,000 responses per year). A prompt-engineered GPT-5 model scored 15 analytic-rubric items with 60–80% accuracy and 90%+ output consistency, just below human inter-rater agreement, and showed a stable, systematic conservative (under-grading) bias rather than random error. Because cases the AI fails are precisely those routed to expert review, the proposed workflow could reduce the volume of responses requiring full human scoring by at least 50% while preserving decision quality in high-stakes pass/fail outcomes. The paper provides real operational evidence that carefully designed HITL scoring can support [[assessment-validity|fair, scalable]] writing [[assessment]].

## A real high-stakes national assessment

Most [[automated-assessment|automated-grading]] [[research-methods-aied|research]] uses small proof-of-concept datasets. This study draws on two recent editions (2024 and 2025) of the *Acredita EB* — a national knowledge-accreditation test for over-21 adults completing lower-secondary education, administered by Uruguay's public education [[administrator|administration]] (ANEP). The Writing section is the most resource-intensive component, with results delivered no sooner than three months after the exam; the target task is a ~150–200-word Spanish argumentative text scored by trained raters against a 15-item analytic rubric organized into discursive, textual, and orthographic domains.

The scoring pipeline already combines [[item-response-theory|Item Response Theory]] (IRT) with the Bookmark standard-setting method to derive proficiency levels (Proficient, Close to Proficiency, Insufficient) and ultimately a pass/fail decision requiring at least two sections rated Proficient. This real operational structure — not just raw score agreement — is what the authors use to evaluate AI assistance.

## Prompt-based scoring performance

A [[prompt-engineering]] approach operationalized each of the 15 rubric items as a dedicated Spanish prompt that assigns a score, identifies the relevant text excerpt, and justifies the judgement, using OpenAI GPT-5 with structured JSON output. Key results:

- **Accuracy:** AI scores matched human ratings on 60–80% of items — slightly below human inter-rater agreement but within ~5–15 points of it.
- **Consistency:** the model assigned the same score in ~9 of 10 repeated runs (90%+), except for the spelling item, which was replaced with the deterministic LanguageTool NLP checker (100% consistency, comparable accuracy).
- **Cross-year generalization:** prompts developed on 2024 data generalized to the 2025 exam with minimal adjustments and very small performance variation.

## A systematic conservative bias

At the proficiency-level and pass/fail stage, the model's errors were not random: it consistently **under-graded**, producing pass/fail discrepancy in 15.3% (2024) and 16.5% (2025) of cases where human raters passed a candidate but AI scoring predicted a fail. Fewer than 1% of cases ran in the opposite direction. While such under-grading would be problematic if AI scores were used as final decisions, the authors show it is actually the key to safe HITL design: responses the AI marks as passing can be accepted with high confidence, while responses the AI marks as failing are systematically routed to expert human review before any certification decision.

## The HITL evaluation workflow

The proposed framework uses a decision-point logic that allocates scarce [[teacher-role|human expertise]] only where it changes outcomes:

1. **Calibration phase** validates the AI model and adapts prompts to the current exam topic (50–100 texts).
2. **Automated scoring** of all written responses, followed by IRT + Bookmark to assign proficiency levels.
3. **Targeted human review** of exactly the candidates whose pass/fail outcome depends on the Writing section — candidates already failing other sections need no Writing review, and candidates rated Proficient in all sections pass with a residual AI-error risk of only 0.2–0.6%.
4. **Recalibration** of proficiency-level cut scores to account for human-review adjustments.

Under realistic assumptions this could cut the number of written responses needing full human scoring by **at least 50%** while preserving decision quality. The authors caution that deployment requires longitudinal monitoring of AI–human alignment and experimental work on whether exposure to AI scores introduces [[bias-mitigation|anchoring or automation bias]] in human raters.

## Connected Concepts
- [[automated-assessment]]
- [[assessment-validity]]
- [[human-in-the-loop-ai]]
- [[assessment]]
- [[equity-in-ai-education]]
- [[item-response-theory]]
- [[educational-measurement]]
- [[llm]]
- [[bias-mitigation]]
- [[teacher-role]]

## Connected Articles
- [[cvengros-grading-handwritten-chemistry-ai-2026]] — Selective automation of handwritten chemistry grading with confidence filters
- [[falahat-chatgpt-grading-pharmacy-exams-2026]] — ChatGPT-5 grading of a mixed-format pharmacy exam; hybrid grading recommended
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]] — Can ChatGPT replace the teacher in assessment? A systematic review
- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[olvet-genai-scoring-open-ended-medical-2026]] — GPT-4 scoring of open-ended medical exam questions
- [[pecuchova-automated-grading-open-ended-genai-2026]] — Benchmarking GenAI models for open-ended grading
- [[cong-confidence-asag-2026]] — Confidence-aware automatic short-answer grading
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)

## Citation
Curi, M. E., Capdehourat, G., Amigo, I., Romano, M., Serra, R., Silveira, A., & Peri, A. (2026). [A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment](https://arxiv.org/abs/2609.05143). arXiv:2609.05143.
