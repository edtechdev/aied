---
title: "CoTAL: Human-in-the-Loop Prompt Engineering for Generalizable Formative Assessment Scoring and Feedback"
created: "2026-08-03T04:33:04-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
technology: [human-in-the-loop-ai, llm, prompt-engineering]
assessment: [assessment-validity, automated-assessment, formative-assessment]
research_method: [benchmark]
page_kind: [evaluation]
sources: ['raw/papers/cotal-formative-assessment-scoring-2026.md']
confidence: high
audience: [assessment designers, instructors]
methods: [ai-ed-evaluation, benchmark]
---

> **Synthesis:** 1. **Evidence-Centered Design (ECD)** — assessments and rubrics aligned to [[curriculum-design|curriculum]] goals from the start 2. **[[human-in-the-loop-ai|Human-in-the-loop]] [[prompt-engineering|prompt engineering]]** — labeled examples and prompts refined iteratively with educators 3. **Chain-of-thought (CoT) prompting + [[active-learning|active learning]]** — teacher and student [[feedback|feedback loops]] refine questions, rubrics, and [[llm]] prompts across iterations

> Cohn, Ashwin T S, Mohammed & Biswas (2026) introduce **CoTAL** (Chain-of-Thought Prompting + Active Learning): an LLM grading pipeline that couples Evidence-Centered Design with human-in-the-loop prompt engineering and iterative teacher/student feedback refinement. It improves GPT-4's scoring by **up to 38.9% over a non-prompt-engineered baseline** and generalizes across science, computing, and engineering — direct evidence that prompt-engineering quality, not model choice, is often the binding constraint in [[automated-assessment|Automated Grading]].

## How it works

1. **Evidence-Centered Design (ECD)** — assessments and rubrics aligned to curriculum goals from the start
2. **Human-in-the-loop prompt engineering** — labeled examples and prompts refined iteratively with educators
3. **Chain-of-thought (CoT) prompting + active learning** — teacher and student feedback loops refine questions, rubrics, and LLM prompts across iterations

## Findings

- **Up to +38.9% scoring performance** over a non-prompt-engineered baseline (no labeled examples, no CoT, no iterative refinement)
- Gains demonstrated **across domains**: science, computing, engineering (the generalization question most grading papers ignore)
- **Teachers and students rate CoTAL effective** at scoring and explaining responses
- Their feedback yields insights that improve grading accuracy and explanation quality

## What this means for practice

- **Assessment designers.** Fix the rubric before you touch the prompt: align each question and rubric to curriculum goals with Evidence-Centered Design, then engineer the [[prompt-engineering|prompt]] against that rubric.
- **Assessment designers.** Budget for the prompt pipeline rather than for a bigger model: adding labeled examples, chain-of-thought reasoning chains, and active learning raised average subscore QWK by 10.9% and 24.5% on the Rules and Debugging tasks, and up to 38.9% over a non-prompt-engineered baseline, all with GPT-4.
- **Assessment designers.** Treat explanations as part of the artifact: CoTAL's outputs justified scores by citing evidence from student responses and linking it to the rubric, but the same model fabricated information or diverged from human preference on 29 of 550 answers, so define a review step for the feedback students actually see.
- **Instructors.** Run the human-in-the-loop cycle deliberately — teacher interviews and student review of generated scores and explanations — and use that feedback to revise prompts, assessments, and rubrics across iterations, as this study did with 2 teachers and 23 students.
- **Instructors.** Use the tool where the stakes fit: the authors evaluated CoTAL post hoc on held-out test sets rather than in live classroom use, so keep generated scores as a drafting aid alongside your own judgment for [[formative-assessment]] evidence.

## Limitations

- The scoring evaluation is post hoc, on held-out test sets, not real-time classroom use — the authors state this constrains any inference about impact on student learning and classroom dynamics.
- Stakeholder evidence is thin: two semi-structured teacher interviews and one 23-student focus group in a single classroom, all rating a single Science Concepts and Reasoning assessment.
- Everything was run on one model, GPT-4 at temperature 0, and GPT-4's context window was too small to run Active Learning on the Debugging Task, so that result covers only part of the CoTAL pipeline.
- Generalizability is demonstrated within one integrated STEM+C curriculum; the human-in-the-loop prompt engineering, especially active learning, is time-consuming, leaving the scalability and sustainability questions the authors raise unanswered.

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
