---
title: "CoTAL: Human-in-the-Loop Prompt Engineering for Generalizable Formative Assessment Scoring and Feedback"
created: 2026-08-03
updated: 2026-08-03
type: concept
tags: [formative-assessment, automated-grading, human-in-the-loop, prompt-engineering, benchmark, ai-ed-evaluation]
sources: [raw/papers/cotal-formative-assessment-scoring-2026.md]
confidence: high
---
# CoTAL: Formative Assessment Scoring with Human-in-the-Loop Prompt Engineering

> Cohn, Ashwin T S, Mohammed & Biswas (2026) introduce **CoTAL** (Chain-of-Thought Prompting + Active Learning): an LLM grading pipeline that couples Evidence-Centered Design with human-in-the-loop prompt engineering and iterative teacher/student feedback refinement. It improves GPT-4's scoring by **up to 38.9% over a non-prompt-engineered baseline** and generalises across science, computing, and engineering — direct evidence that prompt-engineering quality, not model choice, is often the binding constraint in [[automated-grading]].
> **Source:** [CoTAL: Human-in-the-Loop Prompt Engineering for Generalizable Formative Assessment Scoring and Feedback](https://arxiv.org/abs/2504.02323)


## How it works

1. **Evidence-Centered Design (ECD)** — assessments and rubrics aligned to curriculum goals from the start
2. **Human-in-the-loop prompt engineering** — labelled examples and prompts refined iteratively with educators
3. **Chain-of-thought (CoT) prompting + active learning** — teacher and student feedback loops refine questions, rubrics, and LLM prompts across iterations

## Findings

- **Up to +38.9% scoring performance** over a non-prompt-engineered baseline (no labelled examples, no CoT, no iterative refinement)
- Gains demonstrated **across domains**: science, computing, engineering (the generalisation question most grading papers ignore)
- **Teachers and students rate CoTAL effective** at scoring and explaining responses
- Their feedback yields insights that improve grading accuracy and explanation quality

## Connections to the wiki

- Strong evidence for the [[prompt-engineering]] pipeline side of [[automated-grading]] and [[automated-essay-scoring]] literature
- ECD alignment answers the [[assessment-validity]] critique: rubrics derived from curriculum goals rather than model convenience
- Human-in-the-loop refinement is the [[human-in-the-loop]] pattern applied to grading infrastructure
- The iterative teacher-feedback loop connects to [[formative-assessment]] and [[feedback-loop]] design
- Contrasts with benchmark-first evaluation: this is about operational scoring quality, cf. [[benchmark]] and [[ground-truth-reliability-aied]]

## Related Pages
- [[formative-assessment]] — the assessment function being automated
- [[automated-grading]] — the system category CoTAL advances
- [[human-in-the-loop]] — the refinement architecture
- [[prompt-engineering]] — the core technique
- [[benchmark]] — cross-domain evaluation practice
- [[ai-ed-evaluation]] — how AI assessment tools should be evaluated
- [[assessment-validity]] — ECD alignment as a validity strategy
- [[feedback-loop]] — iterative refinement with teacher/student input
- [[ground-truth-reliability-aied]] — scoring reliability concerns

## Citation

- Cohn, C., Ashwin T S, Mohammed, N., & Biswas, G. (2026). CoTAL: Human-in-the-Loop Prompt Engineering for Generalizable Formative Assessment Scoring and Feedback. arXiv:2504.02323. Under review, Computers and Education: Artificial Intelligence.
