---
title: "LLM Pedagogical Behavior in AI Tutoring Interactions"
created: "2026-08-26T09:00:00-04:00"
updated: "2026-09-19T08:58:00-04:00"
type: article
pedagogy: [scaffolding, student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, llm]
assessment: [assessment]
audience: [software developers]
research_method: [instrument development, educational measurement]
level: [higher ed]
sources: ['raw/papers/llm-pedagogical-behavior-ai-tutoring-2026.md']
confidence: high
discipline: [cs education]
---

> **Synthesis:** Students increasingly use large language models as on-demand [[intelligent-tutoring|tutors]] for coursework and [[problem-solving|problem solving]], yet little is known about the level of assistance these models actually provide in authentic learning interactions. Lee and colleagues operationalize this dimension as a five-level [[scaffolding]] scale, validated against human annotations, that characterizes responses by the degree of direct assistance they offer. Applied to 14,637 [[llm]] responses from 203 students in a university AI course, responses are overwhelmingly concentrated at high levels of assistance, with more than 95% classified as either Explaining or Solving. Scaffolding level is systematically associated with students' subsequent conversational behavior but provides little additional predictive information about exam performance beyond prior achievement and dialogue behavior, offering an empirical baseline for evaluating alternative tutoring designs.

## Key Findings

1. A five-level scaffolding scale was developed and validated against human annotations to characterize how directly LLM responses help a student complete a task.
2. In authentic [[student-ai-interaction|student-LLM]] interactions, more than 95% of the 14,637 analyzed responses were classified at the highest assistance levels (Explaining or Solving).
3. Scaffolding level is systematically associated with students' subsequent conversational behavior in the tutoring dialogue.
4. Scaffolding level provides little additional predictive information about performance on three subsequent exams beyond prior achievement and dialogue behavior.
5. The scale offers a measurement framework for evaluating how alternative tutoring designs change the assistance LLMs provide.

## What this means for practice

- **Designers.** Treat the default assistant as maximum assistance: more than 95% of the 14,637 responses fell at the Explaining or Solving levels, so scaffold only by adding explicit pedagogical constraints, not by assuming base models hold back.
- **Designers.** Instrument the five-level scale into your tutoring product to log the assistance distribution in production; it is validated against human annotations and gives a comparable baseline across designs.
- **Designers.** Do not market scaffolding level as a learning-outcome lever: it added little predictive information about exam performance beyond prior achievement and dialogue behavior.
- **Designers.** Build human spot-checks around the L3/L4 classification boundary, where most automated errors occur and where low-assistance levels (L0–L2) are rare and therefore least reliable.

## Limitations

- All data came from one introductory university AI course and a single model configuration (default, without pedagogical prompting), so the observed distribution characterizes that setting rather than LLMs universally.
- Automated scaffolding classification is imperfect: most errors fall at the L3/L4 boundary, and low-assistance levels are rare in both the full dataset and the human validation sample, so fine-grained estimates for L0–L2 are uncertain.
- The follow-up analyses are observational: conditioning on broad dialogue-act categories does not account for prompt content, task difficulty, student characteristics, or conversation history, and turn-level chi-squared tests do not model within-student dependence.
- The assessment analysis tests incremental prediction, not causation: the modest exam sample and the strong concentration of responses at L3 and L4 leave little variation to detect performance differences.

## Connected Concepts
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[llm]]
- [[generative-ai]]
- [[student-ai-interaction]]
- [[teacher-role]]
- [[metacognition]]

## Connected Articles
- [[wang-safety-gap-productive-struggle-2026]] — The Safety Gap: Restoring Productive Struggle Through Pedagogically Aligned Generative AI
- [[tutoring-effectiveness-index]] — The Tutoring Effectiveness Index
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[cstutorbench-slm-tutors]] — CSTutorBench: Benchmarking Small Language Models as Tutors
- [[chatgpt-hints-human-tutor-learning-gains-2024]] — ChatGPT-generated help produces learning gains equivalent to human tutor-authored help

## Citation

Lee, Baek, Park, & Shin (2026). [*LLM Pedagogical Behavior in AI Tutoring Interactions*](https://arxiv.org/abs/2608.22993).
