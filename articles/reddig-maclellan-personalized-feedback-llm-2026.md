---
title: "Generating In-Context, Personalized Feedback for Intelligent Tutors with Large Language Models"
created: "2026-09-03T15:00:00-04:00"
updated: "2026-09-19T07:22:56-04:00"
type: article
technology: [generative-ai, intelligent-tutoring, llm, personalized-learning]
assessment: [ai-feedback-quality, feedback]
methods: [benchmark]
sources: ['raw/papers/reddig-maclellan-personalized-feedback-llm-2026.md']
confidence: high
research_method: [system development]
discipline: [math education]
audience: [edtech designers, instructors, researchers]
level: [higher ed]
---

> **Synthesis:** **Generating In-Context, Personalized Feedback for Intelligent Tutors with Large Language Models** — Reddig, Arora & MacLellan (2025) run three studies evaluating whether GPT-4 can diagnose student errors and generate corrective feedback within an [[intelligent-tutoring]] system, the Apprentice Tutor College Algebra platform. Across 6,926 logged transactions, GPT-4 diagnosed student errors with 87.8% accuracy when given rich problem context, though accuracy fell sharply for multi-step problems and responses containing more than one error. The authors find that roughly a third of generated hints were too general, incorrect, or prematurely gave away the answer, and that LLM-based automated evaluation methods for feedback quality were misaligned with human judgment — signaling that [[generative-ai|LLM]]-generated [[feedback]] requires robust validation and [[human-in-the-loop-ai|human oversight]] before unsupervised deployment.

## Key Findings

- GPT-4 diagnosed student errors in the Apprentice Tutor College Algebra ITS with an average accuracy of 87.8%, performing best on incomplete and correct answers and worst on "wrong field" errors and responses containing multiple errors, with accuracy heavily dependent on the problem context provided in the prompt.
- Adding in-context information to the prompt — the tutor interface structure and Bayesian [[knowledge-tracing]] skill estimates — dramatically improved error diagnosis, raising logical-error identification from 40% to 81% on factoring problems; the paper demonstrates that embedding LLMs within the structured framework of [[intelligent-tutoring]] grounds generation and reduces hallucinated diagnoses.
- Only 4.8% of generated feedback contained factually incorrect directions, and about 66% was targeted to the student's specific mistake, yet roughly 35% of hints were too general, incorrect, or bottom-out hints that gave away the correct answer.
- Even when GPT-4 misdiagnosed an error, it still crafted relevant or general-but-correct feedback ~74% of the time by restating the concept or the expected answer format, suggesting the quality of corrective [[feedback]] is partially decoupled from diagnostic accuracy.
- LLM-based feedback evaluation (simulated-student adjustment and prediction tests) proved poorly aligned with human judgment: only 21.4% of hints passed both tests, targeted feedback passed just 30% of the time, and the metrics favored hints that simply gave away the answer — underscoring the difficulty of automated [[ai-feedback-quality|quality assurance]] for generated feedback.
- Sentiment and readability analyses (TextBlob, CAREC, Coh-Metrix L2) showed most feedback was neutral-to-positive in tone and generally comprehensible, though a subset was dense or directive; the study did not measure actual learning outcomes with students.

## What this means for practice

- **EdTech designers.** Put the LLM inside the tutor's structured context: supplying the interface structure and the Bayesian [[knowledge-tracing]] skill estimate raised logical-error identification on factoring problems from 40% to 81%.
- **EdTech designers.** Route multi-step problems and responses containing more than one error to human or rule-based review, since diagnosis accuracy fell sharply there even though it averaged 87.8% overall.
- **Instructors.** Ask for the answer, not the whole argument, when time is short: 66% of generated hints targeted the student's specific mistake and only 4.8% contained factually incorrect directions, but 35% were too general, incorrect, or gave the answer away.
- **EdTech designers.** Do not let a model certify its own hints: the automated checks passed only 30% of targeted feedback and favored hints that gave away the answer, so [[ai-feedback-quality|feedback quality]] needs human or independently validated review.
- **Researchers.** Pair hint-quality audits with outcome measures before scaling: the quality evidence here comes from transaction logs and coder ratings, leaving any claim about learning gains untested.

## Limitations

- The study did not measure student learning outcomes: all evidence comes from 6,926 logged transactions in the Apprentice Tutor College Algebra platform (Technical College System of Georgia, Spring 2024) and from coder ratings of the generated text.
- Everything rests on one model, GPT-4 (gpt-4-0613, accessed August 8, 2024), so the 87.8% diagnosis accuracy and 66% targeted-feedback rate are specific to that version and prompt.
- Classification was done by hand at two stages: error diagnoses agreed at Cohen's Kappa 0.931 and hint categories at 0.768, with the head coder's label used whenever coders disagreed.
- Study 3's automated evaluation used the same model family to judge its own outputs and covered 1,303 feedback samples, and the authors report that those metrics disagreed with human judgment.

## Connected Concepts

- [[intelligent-tutoring]]
- [[feedback]]
- [[llm]]
- [[personalized-learning]]
- [[student-modeling]]
- [[ai-feedback-quality]]
- [[pedagogical-llm-training]]
- [[prompt-engineering]]
- [[knowledge-tracing]]

## Connected Articles

- [[correct-answer-trap-misconceptions]] — The Correct Answer Trap: Pedagogically-Grounded Detection and Feedback for Hidden Misconceptions
- [[astra-multi-agent-tutoring-benchmark-2026]] — ASTRA: A Synthetic Benchmark for Trace-Based Evaluation of Socially Intelligent Multi-Agent Tutoring
- [[curiobot-llm-tutoring-exploratory-learning]] — Curiosity as Linguistic Intervention: Using LLM Tutoring Dialogues to Influence Exploratory Learning Behavior
- [[genai-teacher-feedback-comparison]] — Comparing Generative AI and Teacher Feedback: Student Perceptions of Usefulness and Trustworthiness
- [[hashmi-socratic-physics-chatbot-2025]] — Analyzing Undergraduate Problem-Solving in Physics Through Interaction with an AI Chatbot
- [[genai-feedback-design-multisite-experiment]] — Human-Centered GenAI Feedback Design in Higher Education

## Citation

Reddig, J. M., Arora, A., & MacLellan, C. J. (2025). [Generating In-Context, Personalized Feedback for Intelligent Tutors with Large Language Models](https://doi.org/10.1007/s40593-025-00505-6). *International Journal of Artificial Intelligence in Education*, 35(4), 3459-3500.
