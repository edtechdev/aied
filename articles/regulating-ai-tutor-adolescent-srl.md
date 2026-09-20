---
title: "Regulating the AI Tutor: Intentions, Help-Seeking, and Self-Regulated Learning in Adolescent GenAI Use"
created: "2026-06-09T04:33:04-04:00"
updated: "2026-09-18T19:55:59-04:00"
type: article
pedagogy: [help-seeking, metacognition, scaffolding, self-regulated-learning]
technology: [llm]
stakeholders: [student-experience]
research_method: [experiment, survey]
audience: [learners]
level: [k 12]
sources: ['raw/papers/2606.08568.md']
confidence: high
discipline: [math education]
page_kind: [evaluation]
---

> **Synthesis:** Examines how 98 Grade-9 students across three German Gymnasium schools regulated their use of a Mistral-Large [[generative-ai|GenAI]] tutor while preparing for a math exam. Despite overwhelmingly selecting scaffolded support before the session, students' actual interactions were dominated by instrumental requests (asking for answers) with almost no explicit monitoring or evaluation of their own learning.

**Critical finding:** Post-test performance was significantly lower than pre-test, and higher extraneous cognitive load predicted lower post-[[learning-gains|test scores]] after controlling for [[prior-knowledge|prior knowledge]]. This reveals an **intention-behavior gap** — students intend to use AI for learning but default to answer-seeking, undermining [[self-regulated-learning|self-regulated learning]] processes.

The paper proposes a turn-level codebook combining SRL and [[metacognition|help-seeking constructs]] with [[llm]]-specific codes (agency over AI, epistemic vigilance). Results support the need for [[scaffolding|scaffolds]] that promote more agentic and epistemically proactive GenAI use, and hybrid human-AI analysis of interaction patterns. Contributes directly to the [[cognitive-offloading|over-reliance and cognitive offloading]] literature.

## What this means for practice

- **Instructors.** Require a student attempt before the AI responds. Across 808 student turns, requests for verification of understanding accounted for only 16.3% of requests even though 69.7% of students said they wanted the AI to check their understanding — the gap is an instructional design problem, not a motivation problem.
- **Instructors.** Teach a short, explicit routine for [[self-regulated-learning]] that names monitoring and evaluation as required moves: MONITOR accounted for 5.7% and EVALUATE 3.4% of task-relevant turns, so students will not add these steps on their own.
- **Designers.** Build monitoring and evaluation prompts into the tutoring interface as mandatory turns (for example, restate your goal, judge whether the last answer met it), since students selected 4.66 of 8 learning goals on average but rarely made their comprehension needs visible.
- **Instructors.** Frame the task so that solution-seeking is a deliberate, discussed choice rather than a default: the only intention that reliably predicted its enacted behavior was "just give me the final solutions" (selected by 11.8%), and those students showed higher executive request rates (46.4% vs. 19.2%).
- **Researchers.** Adopt the paper's hybrid human-AI coding workflow for interaction logs, but treat the AI pass as a first cut and plan a human validation layer, which in this study covered a stratified 30% of conversations.

## Limitations

- The study is explicitly work in progress: behavioral findings rely on AI coding alone (Gemini 2.5 Pro, frozen prompt), while the stratified 30% human-validation pass by mathematics-didactics and learning-sciences experts was still ongoing, so per-construct reliability is not reported.
- Evidence comes from a single session with 98 Grade-9 students in three German Gymnasium schools (1,616 chat turns, 808 student turns), and the authors state that the single-session design limits conclusions about how AI-use strategies develop over time.
- There is no control condition, so the pre-to-post decline (67.5% to 56.9%, p = .014) cannot be separated from ordinary test difficulty, exam proximity, or repeated-measure effects.
- Eight of 106 recruited students were excluded for incomplete tasks or questionnaires, and the mathematics-modeling task required at least six valid task-related turns, so the analyzed behavior reflects a compliant subsample of a class-based sample.

## Connected Concepts

- [[self-regulated-learning]]
- [[metacognition]]
- [[scaffolding]]
- [[cognitive-offloading]]
- [[help-seeking]]
- [[k-12]]
- [[llm]]
## Connected Articles

- [[epistemic-proactivity-math]] — From Prompting to Epistemic Proactivity: Temporal Trajectories of Student-AI Interaction in Mathematics Learning
- [[socraticode-k12-programming-tutor]] — Toward SocratiCode: Designing a Generative AI-Based Programming Tutor for K-12 Students through a 4-Week Participatory Design Study
- [[llm-fallacy-misattribution]] — The LLM Fallacy and Misattribution of Competence
- [[llm-reasoning-traces-metacognition]] — Explaining Too Much? Understanding How Large Language Model Reasoning Traces Influence Performance and Metacognition
- [[learning-by-chatting-genai-impact]] — Learning by Chatting? Investigating the Impact of Generative AI on Information Seeking and Learning
- [[scheu-mobile-chatbot-journaling-motivation-2026]] — Designing a mobile chatbot-based learning journaling system for intrinsic motivation and engagement

## Citation

Abdelghani, R., Kaiser, P., & Murayama, K. (2026). [*Regulating the AI Tutor: Intentions, Help-Seeking, and Self-Regulated Learning in Adolescent GenAI Use*](https://arxiv.org/abs/2606.08568).
