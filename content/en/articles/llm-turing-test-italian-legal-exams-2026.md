---
title: What out-of-the-box LLMs can(t) do in law? A Turing test in Italian exams for lawyers, judges and notaries
created: "2026-08-07T04:33:04-04:00"
updated: "2026-09-19T08:58:00-04:00"
type: article
technology: [llm]
assessment: [assessment, automated-assessment]
pedagogy: [professional-training]
page_kind: [evaluation]
sources: ['raw/papers/2608.06166.md']
confidence: medium
audience: [assessment professionals, researchers]
level: [adult learning]
discipline: [legal education]
methods: [ai-ed-evaluation, benchmark]
---

> **Synthesis:** This paper reports a blind Turing Test evaluating leading [[llm|LLMs]] on three Italian professional legal examinations: the [[legal-education|Bar exam]], Judges exam, and Notary exam. LLMs generated full written papers that were anonymized and graded by expert examiners using real [[summative-assessment|examination]] rubrics. Results show marked variance across models and tasks: some LLMs match or exceed human passing thresholds on certain exam sections, while all models struggle with tasks requiring deep legal reasoning, jurisdiction-specific knowledge, and nuanced argumentation. The study highlights both the promise and the current limits of LLMs in high-stakes [[assessment|professional assessment]] contexts, raising implications for AI's role in [[professional-training|legal education]] and certification.

The article reports on a blind Turing Test experiment, assessing the performance of out-of-the-box leading [[llm|LLMs]] on three Italian legal professional exams: the Bar, Judges and Notary exams. Leading LLMs were asked to generate full written exam papers, which were made indistinguishable from human submissions and anonymously evaluated by expert examiners, using the same criteria applied in real examinations. Results reveal marked differences across both models and tasks. While some LLMs match or exceed top human performance in adversarial legal argumentation and doctrinal analysis, all models fail in the notary exam, which requires goal-directed legal planning under strict formal and substantive constraints. Beyond ranking models, the study identifies task-specific strengths, limitations, and implications for AI's role in [[professional-training|legal education]] and certification.

## What this means for practice

- **Assessment professionals.** Separate tasks before judging capability: with the same out-of-the-box models and blind protocol, bar-exam cumulative scores ranged from 26 to 79 out of 100, and every model failed the notary exam.
- **Assessment professionals.** Keep the official grids and formal-requirement checks in place: a paper can fail on form while reading well — only the human candidate met all mandatory requirements on the inter vivos notary assignment, while the best model, Gemini 2.5 Pro, failed 9 of 12.
- **Assessment professionals.** Report the comparison conditions alongside the scores: the models had internet access, thinking mode, and no legal fine-tuning, while candidates under exam conditions work from a very limited set of materials.
- **Researchers.** Test for gullibility, not only accuracy: models were misled by deliberate tricks and snares embedded in the notary assignment, which the authors read as a caution for deploying agentic AI in legal work.
- **Researchers.** Look for task-specific profiles instead of a leaderboard: Gemini 2.5 Pro reached 21 out of 24 on the judges' exam and exceeded the human benchmark on the bar exam, yet goal-directed drafting under formal constraints defeated all models.

## Limitations

- Four models (Claude 4 Opus, GPT-5, DeepSeek R1, Gemini 2.5 Pro) were each tested once per exam, with a single minimal prompt and default API settings, no legal fine-tuning, and no retrieval-augmented generation.
- Each exam was represented by one human paper — the top-scoring candidate from a real sitting — and evaluated by three expert examiners, a sample the authors state constrains statistical generalization beyond the cases considered.
- The models had internet access whereas human candidates are restricted to a very limited set of legal materials, an asymmetry the paper says may influence performance on tasks requiring doctrinal or jurisprudential recall.
- Results are tied to the Italian legal system and to the state of the technology in September 2025, so transfer to other jurisdictions and to later model releases is not established.

## Connected Concepts

- [[benchmark]]
- [[human-in-the-loop-ai]]
- [[automated-essay-scoring]]
- [[ai-ed-evaluation]]
- [[open-source]]
- [[assessment]]
- [[professional-training]]
- [[llm]]
- [[legal-education]] — the professional program whose examinations the benchmark tests
## Connected Articles

- [[machines-misread-pedagogical-quality]] — Why Machines Misread Pedagogical Quality: Human-Machine Alignment in LLM-Based Pretest Question Evaluation
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: Human-in-the-Loop Prompt Engineering for Generalizable Formative Assessment Scoring and Feedback
- [[automated-formative-assessments-a-level-sciences]] — The Effect of High-Frequency, Automatically-marked Formative Assessments on Student Outcomes in A-Level Sciences
- [[llm-computational-thinking-physics-2026]] — Using LLMs to Detect Growth in Computational Thinking in Introductory Physics
- [[ground-truth-reliability-aied]] — Modernizing Ground Truth: Four Shifts Toward Improving Reliability and Validity in AI in Education
- [[tutoring-effectiveness-index]] — The Tutoring Effectiveness Index: Predicting LLM Math Tutor Quality from Four Conversation Signals

## Citation

Bertoli, Germana et al. (2026). [What out-of-the-box LLMs can(t) do in law? A Turing test in Italian exams for lawyers, judges and notaries](https://arxiv.org/abs/2608.06166).
