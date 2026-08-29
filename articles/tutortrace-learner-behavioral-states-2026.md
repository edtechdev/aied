---
title: "TutorTrace: A Dataset and Taxonomy for Classifying Learner Behavioral States during AI-Assisted Programming Education"
created: "2026-08-28T09:06:00-04:00"
updated: "2026-08-28T09:06:00-04:00"
type: article
tags: [cs-education, intelligent-tutoring, help-seeking, learning-analytics, student-ai-interaction, agentic-ai, llm, generative-ai, student-engagement]
discipline: [cs education]
sources: ['raw/papers/2608.26184.md']
confidence: high
---

> **Synthesis:** Barron et al. (2026) present **TutorTrace**, a dataset and behavioral-abstraction pipeline that makes learners' behavioral context visible and computable in real time from low-level IDE telemetry during AI-assisted [[cs-education|programming education]]. Across four deployments in two introductory Python courses (N=480), the system captures ~180K telemetry events, 13,633 behavioral segments, and 27 continuously computed metrics, from which it derives a taxonomy of learner activity before the first AI query, between consecutive queries, and across the full session. In a preliminary classroom evaluation, behavior-aware prompts reduced intervals between queries with no independent work from 50.0% to 20.7%, and the data support held-out prediction of imminent queries (AUROC=.726) and guided versus dependent [[help-seeking|help-seeking]] (AUROC=.717). The work shows how behavioral context can enable adaptive [[intelligent-tutoring|AI tutoring]] at scale.

## From learner queries to learner behavior

AI programming tutors provide scalable support but lack the behavioral context human tutors rely on to adapt support to learners' needs. Human tutors respond not only to what learners explicitly say but to what their observable behaviors suggest they implicitly need — whether a student is struggling or has simply not put in the effort. Current AI tutoring systems are typically limited to the question itself, missing the struggle (or lack thereof) that preceded it. TutorTrace addresses this gap by capturing behavioral context from low-level IDE telemetry and making it computable in real time, enabling systems to respond not just to what learners say, but to what they have done leading up to the [[help-seeking|help-seeking]] moment.

## Dataset and behavioral-abstraction pipeline

TutorTrace was deployed across four course offerings in two introductory Python courses (N=480 learners). It captures approximately 180,000 telemetry events, 13,633 behavioral segments, and 27 continuously computed metrics. The pipeline abstracts raw IDE events into meaningful behavioral states — distinguishing, for example, periods of independent work from periods of inactivity before an AI query. From this foundation, the authors derive a taxonomy of learner activity in three temporal windows:

- **Before the first AI query** — establishing the learner's baseline engagement and independent-work behavior.
- **Between consecutive queries** — capturing whether the learner worked independently in the gap between help-seeking moments or simply waited.
- **Across the full session** — characterizing overall patterns of engagement and reliance.

This taxonomy is designed to feed downstream [[intelligent-tutoring|tutoring]] systems, giving them behavioral context comparable to what a human tutor observes.

## Empirical evaluation

In a preliminary classroom evaluation, behavior-aware prompts — which use the learner's recent behavioral state to shape how help is offered — were associated with a decrease in intervals between queries with no independent work from 50.0% to 20.7%. This is direct evidence that making behavioral context visible changes learner–AI interaction in productive ways. As an additional demonstration of downstream utility, the authors evaluate TutorTrace on two held-out prediction tasks:

1. Whether a learner will query within the next 60 seconds (AUROC = .726).
2. Whether an upcoming query reflects guided or dependent help-seeking (AUROC = .717).

These results connect TutorTrace to [[learning-analytics]], [[student-modeling]], and real-time intervention in [[cs-education|computing education]], and demonstrate that behavioral telemetry can predict and classify help-seeking quality.

## Implications for adaptive tutoring and help-seeking

TutorTrace speaks directly to the wiki's research on [[help-seeking]] and its failure modes. Prior work documents premature hint requests, superficial hint reading, and answer-seeking over learning-seeking as unproductive behaviors in [[intelligent-tutoring|intelligent tutoring systems]]. TutorTrace offers an automated, real-time way to detect the behavioral precursors of these patterns — for example, distinguishing a learner who works independently before querying (guided help-seeking) from one who queries with no prior independent work (dependent help-seeking). This supports the design principle of [[scaffolding|scaffolding]] *how* students ask rather than merely providing answers, and aligns with [[student-ai-interaction]] research on the quality of learner–AI dialogue. The behavior-aware [[prompt-engineering|prompting]] result also shows that [[agentic-ai|AI-driven]] adaptation need not erode [[student-engagement|engagement]]; rather, well-timed interventions can push learners back toward productive, independent effort.

## Connected Concepts

- [[cs-education]]
- [[intelligent-tutoring]]
- [[help-seeking]]
- [[learning-analytics]]
- [[student-ai-interaction]]
- [[student-modeling]]
- [[student-engagement]]
- [[agentic-ai]]
- [[scaffolding]]
- [[llm]]
- [[generative-ai]]
- [[student-experience]]

## Connected Articles

- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — LLM-mediated help-seeking in STEM: layered, instrumental, and verified
- [[lak2026-hint-button-unproductive-use]] — Premature hint requests and superficial hint reading predict lower learning gains in an ITS
- [[guided-llm-scaffolding-independent-learning]] — Guided LLM scaffolding improves reasoning-focused help-seeking
- [[rethinking-scaffolding-llm-tutors]] — The scaffolding/student-uptake mismatch in real-world LLM tutor deployments
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — The StudyChat dataset of student–LLM dialogues in an AI course
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo in a two-year school experiment
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Virtual tutoring with CAL: take-up and learning
- [[regulating-ai-tutor-adolescent-srl]] — The intention-behavior gap in adolescent GenAI help-seeking
- [[ai-fallibility-warning-help-seeking]] — Warning about AI fallibility increases help-seeking
- [[student-ai-inquiry-types-cs2-2026]] — Analysis of types of inquiries in student-AI interaction
- [[genai-oop-programming-assessments-2026]] — GenAI performance on authentic introductory OOP assessments
- [[trust-reliance-ai-education-2026]] — Trust vs. appropriate reliance during Python problem-solving

## Citation

Barron, D., Tang, X., Dwisantika, R., Kim, M., Smith, D. H., Cui, J., & Chen, Y. (2026). [*TutorTrace: A dataset and taxonomy for classifying learner behavioral states during AI-assisted programming education*](https://arxiv.org/abs/2608.26184). arXiv:2608.26184 / UIST '26.
