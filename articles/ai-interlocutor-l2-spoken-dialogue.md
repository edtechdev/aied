---
title: What Changes When the Interlocutor Is an AI? Interactional Fluency and Linguistic Uptake in L2 Spoken Dialogue
created: "2026-06-23T04:33:04-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
technology: [intelligent-tutoring, llm, personalized-learning]
research_method: [experiment]
discipline: [language learning]
audience: [learners]
sources: ['raw/papers/2606.22225.md']
confidence: medium
level: [higher ed]
---

> **Synthesis:** Scheinberg et al. (2026) analyze 78 university learners of German across four sites completing a counterbalanced spot-the-difference task with both a human peer and a real-time AI partner. Using diarized ASR transcripts, they extract measures of interactional fluency, linguistic uptake, and learner experience. Human dialogue was faster and more balanced with many short turns; AI dialogue resembled 'supported monologue' with fewer, longer turns, reduced learner floor share, and greater within-turn fluency. The AI's verbose, syntactically regular input was associated with greater short-term uptake and stronger syntactic priming after controlling for input volume. Attitudes toward AI improved after the task, and satisfaction was predicted by production fluency rather than uptake. This work shows complementary affordances of AI and human dialogue for [[language-learning]], informing [[intelligent-tutoring]] design for second language acquisition, with implications for [[student-experience]] and [[personalized-learning]] in [[llm]]-mediated education.

## What this means for practice

- **Learners.** Book voice-AI sessions for focused grammar and construction practice: the AI's complete, well-formed turns produced short-term syntactic priming that survived every control for input volume (turn-based β = 3.18, p < .001), arguably the cleaner target for reuse than the fragments and restarts of peer speech.
- **Learners.** Keep peer conversation in your routine as well — human dialogues ran nearly three times as many turns (M = 66.5 vs. 22.2) and lasted longer (M = 764 s vs. 608 s), which is where turn competition, clarification requests, and floor management get exercised and AI dialogue does not exercise them.
- **Learners.** Judge an AI session by how fluently you speak inside your own turns, not by how much vocabulary you absorb: within-turn pause ratio predicted satisfaction (β = −4.78, p = .008) while lexical and syntactic uptake did not (both p > .45).
- **Instructors.** Calibrate AI verbosity in the setup prompt. Instructing the system to take one- to two-sentence turns still left learners holding a smaller share of the floor than with a human partner (M = 0.37 vs. 0.48), so push for shorter, less complete turns and protect space for learner-initiated language.
- **Designers.** Build uptake metrics into the practice tool: measuring which vocabulary and constructions a learner adopts, misses, or produces incorrectly is extractable from the same diarized transcripts without manual annotation, and can drive adaptive feedback.

## Limitations

- The sample is 78 second- and third-year university German learners at four sites (Belgium, US Midwest, US Pacific Northwest), reduced from 86 by non-consent, failed, and incomplete recordings; only 55 completed matched pre- and post-surveys and 52 had complete sentiment data, so the attitude results rest on a smaller subset.
- The AI condition is a single system configuration — one model, voice, prompt, VAD setting, and task interface — and the modalities differed: human partners viewed the images directly and interacted face-to-face or by Zoom, while the AI received English text descriptions and interacted through audio only, so some timing effects may reflect interface latency or the absence of visual coordination cues rather than interlocutor type.
- Uptake measures cannot separate priming from parallel activation driven by the shared task context, and with no delayed post-test the study cannot show whether short-term priming became durable learning; word-level ASR errors were also left uncorrected, the pipelines were trained on Standard German and may degrade on disfluent L2 speech, and transcript analysis excludes prosody, pronunciation, stress, and segmental accuracy.
- Per-turn metrics use only sessions with ≥ 8 participant turns (n = 63 AI, n = 72 human), and the lexical first-source-wins rule created a task-order confound (d = 1.71) that was addressed only through lower-powered position-matched comparisons.

## Connected Concepts

- [[language-learning]]
- [[intelligent-tutoring]]
- [[student-experience]]
- [[personalized-learning]]
- [[llm]]
- [[human-ai-collaboration]]
- [[english-education]]
- [[speech-and-voice-technologies]]
## Connected Articles

- [[automated-presentation-coaching]] — A Survey of Automated Presentation Coaching: Systems, Methods, and Open Challenges
- [[ai-lms-middle-school-longitudinal]] — AI-Integrated [[learning-gains|Learning]] Management System for Middle School: A Longitudinal Study of Learning Outcomes
- [[history-aware-student-simulation]] — Who Am I? History-Aware Profiles for Student Simulation in Tutoring Dialogues
- [[ecnuclaw-k12-personalized-companion]] — ECNUClaw: A Learner-Profiled Intelligent Study Companion Framework for K-12 Personalized Education
- [[kt4eqg-personalized-question-generation]] — KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing
- [[learning-engagement-assistant-lea]] — Learning Engagement Assistant (LEA): Cross-Course Scalability and Classroom Evaluation of an Agentic AI Tutoring System

## Citation

Russell Scheinberg, Ameeta Agrawal, Tetyana Sydorenko, Kalab Kahsay, Nina Vyatkina, Griet Boone (2026). [What Changes When the Interlocutor Is an AI? Interactional Fluency and Linguistic Uptake in L2 Spoken Dialogue](https://arxiv.org/abs/2606.22225). Educational Data Mining 2026
