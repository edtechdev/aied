---
title: "CoTAL: Human-in-the-Loop Prompt Engineering for Generalizable Formative Assessment Scoring and Feedback"
created: "2026-08-03T04:33:04-04:00"
updated: "2026-08-26T15:33:47-04:00"
type: article
tags: [formative-assessment, automated-assessment, human-in-the-loop-ai, prompt-engineering, benchmark, ai-ed-evaluation, assessment-validity, llm]
research_method: [benchmark]
category: [evaluation]

sources: ['raw/papers/cotal-formative-assessment-scoring-2026.md']
confidence: high
---

> 1. **Evidence-Centered Design (ECD)** — assessments and rubrics aligned to [[curriculum-design|curriculum]] goals from the start 2. **[[human-in-the-loop-ai|Human-in-the-loop]] [[prompt-engineering|prompt engineering]]** — labelled examples and prompts refined iteratively with educators 3. **Chain-of-thought (CoT) prompting + [[active-learning|active learning]]** — teacher and student [[feedback|feedback loops]] refine questions, rubrics, and [[llm]] prompts across iterations

> Cohn, Ashwin T S, Mohammed & Biswas (2026) introduce **CoTAL** (Chain-of-Thought Prompting + Active Learning): an LLM grading pipeline that couples Evidence-Centered Design with human-in-the-loop prompt engineering and iterative teacher/student feedback refinement. It improves GPT-4's scoring by **up to 38.9% over a non-prompt-engineered baseline** and generalises across science, computing, and engineering — direct evidence that prompt-engineering quality, not model choice, is often the binding constraint in [[automated-assessment|Automated Grading]].

## How it works

1. **Evidence-Centered Design (ECD)** — assessments and rubrics aligned to curriculum goals from the start
2. **Human-in-the-loop prompt engineering** — labelled examples and prompts refined iteratively with educators
3. **Chain-of-thought (CoT) prompting + active learning** — teacher and student feedback loops refine questions, rubrics, and LLM prompts across iterations

## Findings

- **Up to +38.9% scoring performance** over a non-prompt-engineered baseline (no labelled examples, no CoT, no iterative refinement)
- Gains demonstrated **across domains**: science, computing, engineering (the generalisation question most grading papers ignore)
- **Teachers and students rate CoTAL effective** at scoring and explaining responses
- Their feedback yields insights that improve grading accuracy and explanation quality

## Connected Concepts

- [[ai-ed-evaluation]]
- [[ai-feedback-quality]]
- [[assessment-validity]]
- [[automated-assessment]]
- [[formative-assessment]]
- [[human-in-the-loop-ai]]
- [[prompt-engineering]]
- [[llm]]

## Connected Articles

- [[ground-truth-reliability-aied]] — Modernizing Ground Truth: Four Shifts Toward Improving Reliability and Validity in AI in Education
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...

## Citation

Cohn, C., Ashwin T S, Mohammed, N., & Biswas, G. (2026). [CoTAL: Human-in-the-Loop Prompt Engineering for Generalizable Formative Assessment Scoring and Feedback](https://arxiv.org/abs/2504.02323). Under review, Computers and Education: Artificial Intelligence.
