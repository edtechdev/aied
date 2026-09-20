---
title: Benchmarking Large Language Models for Diagnosing Students' Cognitive Skills from Handwritten Math Work
created: "2026-05-31T12:17:35-04:00"
updated: "2026-09-20T08:19:03-04:00"
type: article
foundations: [critical-thinking]
technology: [generative-ai, human-in-the-loop-ai, knowledge-tracing, llm, multimodal]
ethics: [hallucination-risk]
audience: [software developers]
discipline: [math education]
level: [k 12]
page_kind: [evaluation]
confidence: high
sources: ['raw/papers/llm-cognitive-diagnosis-handwritten-math.md']
methods: [ai-ed-evaluation, benchmark]
---

> **Synthesis:** **MathCog** [[benchmark]] (3,036 teacher-annotated diagnostic verdicts, 639 handwritten responses, 18 LLMs): all models severely underperform (macro F1 < 0.5) — over-attributing evidence, overthinking minimal cues, hallucinating nonexistent evidence ([[hallucination-risk]]) — calling for evidence-aware architectures and [[human-in-the-loop-ai|teacher-in-the-loop]] designs ([[knowledge-tracing]], [[multimodal]], benchmark).

## Summary

This paper introduces **MathCog**, a benchmark dataset of 3,036 teacher-annotated diagnostic verdicts across 639 student handwritten math responses to 110 problems. Evaluating 18 LLMs, the authors find that **all models severely underperform** (macro F1 < 0.5), with systematic failure modes: over-attributing evidential strength, overthinking minimal cues, and hallucinating nonexistent evidence. Performance degrades sharply when student evidence is vague or implicit. The study calls for evidence-aware architectures and teacher-in-the-loop designs.

## Key Contributions

1. **MathCog Benchmark** — First benchmark for cognitive skill diagnosis from handwritten math, grounded in TIMSS 2019 cognitive framework with Evident/Vague evidential strength labels
2. **Systematic [[llm]] Evaluation** — 18 models spanning reasoning, multimodal, and text-only architectures, all showing F1 < 0.5
3. **Error Taxonomy** — Five systematic error patterns identified: evidence misidentification, rubric misinterpretation, over-inference, inconsistency, and hallucination
4. **Evidential Calibration Metrics** — Introduces OverAttr and FalseAttr to quantify models' tendency to over-claim evidential confidence

## Core Findings

### Universal Underperformance
No model achieves F1 ≥ 0.5. The best performers (GPT-4o-img at 0.448, DeepSeek-R1 at 0.442) still fail on nearly half of diagnostic decisions. Accuracy (mean 0.680) is misleading due to class imbalance — most student responses provide Evident Yes evidence, inflating accuracy.

### Evidence Sensitivity Gap
All models perform worse when student evidence is Vague (implicit, incomplete, or context-dependent). Multimodal models show a larger Evident-to-Vague performance drop than text-only models, suggesting visual inputs may amplify over-interpretation rather than improve evidential calibration.

### Systematic Error Patterns
- **Evidence Over-Attribution (M = .580, SD = .120):** Models frequently assign "Evident" to cases the teachers had labeled "Vague"
- **Evidence False-Attribution (M = .585, SD = .145):** Incorrect diagnoses are often accompanied by false claims of evidential confidence
- **Hallucination:** Models fabricate evidence quotes not present in student handwriting
- **Over-inference:** Drawing strong diagnostic conclusions from minimal or ambiguous cues

## What this means for practice

- **Software developers.** Detect insufficient evidence inside the system instead of trusting the model's stated confidence: models over-attributed evidential strength (OverAttr M = .580, SD = .120) and did the same on incorrect diagnoses (FalseAttr M = .585, SD = .145).
- **Software developers.** Ship diagnosis as [[human-in-the-loop-ai|teacher-in-the-loop]] support rather than automatic verdicts: no model reached macro F1 ≥ 0.5, and the mean accuracy of 0.680 hides that failure behind class imbalance.
- **Software developers.** Do not treat multimodality or reasoning architectures as a calibration fix: multimodal models showed a larger Evident-to-Vague drop than text-only models, and the best performers (GPT-4o-img at 0.448, DeepSeek-R1 at 0.442) still carried high OverAttr and FalseAttr.
- **Software developers.** Route vague or implicit student work to human review, since performance degrades sharply when the evidence is Vague and models fabricated evidence quotes absent from the handwriting.
- **Researchers.** Anchor diagnosis in a published cognitive framework — MathCog's TIMSS 2019 grounding shifts [[llm-handwritten-math-grading|handwritten math assessment]] from answer correctness to cognitive skill diagnosis — and report evidential calibration metrics like OverAttr and FalseAttr alongside accuracy, because the hallucinated-evidence and over-attribution patterns here extend [[llm-fallacy-misattribution]].

## Limitations

- Korean middle-school math only, with Korean-to-English machine translation that may introduce artifacts; generalizability to other languages, grade levels, and subjects is unknown
- 3,036 verdicts across 639 responses — moderate dataset size
- Only TIMSS "Knowing" and "Applying" domains covered; "Reasoning" skills excluded due to problem set characteristics
- Static benchmark; does not capture iterative diagnostic processes teachers use in practice

## Connected Concepts

- [[math-education]]
- [[cognitive-diagnosis]]
- [[benchmark]]
- [[llm]]
- [[hallucination-risk]]
- [[human-in-the-loop-ai]]
- [[knowledge-tracing]]
- [[multimodal]]
- [[teacher-role]]
- [[cognitive-offloading]]
- [[ai-ed-evaluation]]

## Connected Articles

- [[ground-truth-reliability-aied]]
- [[llm-fallacy-misattribution]]
- [[llm-handwritten-math-grading]]

## Citation

Kim, Y., Jin, H., Doh, H., Kim, E., Jung, D., Kim, S., Choi, K., Son, J., & Kim, J. (2025). [*Benchmarking Large Language Models for Diagnosing Students' Cognitive Skills from Handwritten Math Work*](https://arxiv.org/abs/2504.00843).
