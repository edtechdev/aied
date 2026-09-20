---
title: Toward Accessible Psychotherapy Training Using AI-Driven Interactive Patient Avatars
created: "2026-06-18T04:33:04-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
pedagogy: [active-learning, professional-training]
technology: [generative-ai, llm, simulation]
assessment: [feedback]
research_method: [system development]
level: [higher ed]
sources: ['raw/papers/2606.17786.md']
confidence: high
discipline: [medical education]
audience: [medical educators, instructors]
page_kind: [framework]
---

> **Synthesis:** Riachi et al. (2026) introduce AI-driven interactive patient avatars for psychotherapy training, providing accessible, repeatable practice with measurable skill improvement in evidence-based therapy techniques. Because opportunities for safe, standardized training are limited by [[ethics|ethical]], logistical and resource constraints, the system enables trainees to practice evidence-based interventions such as Acceptance and Commitment Therapy (ACT) with meaningful [[feedback]] and measurable skill gains — extending [[simulation|simulated]] [[professional-training|professional training]] to psychotherapy.

AI-driven interactive patient avatars for psychotherapy training provide accessible, repeatable practice with measurable skill improvement in evidence-based therapy techniques. Training psychotherapists in evidence-based interventions such as Acceptance and Commitment Therapy (ACT) requires repeated practice with meaningful feedback, yet opportunities for safe, standardized training are limited by ethical, logistical, and resource constraints. The system introduces interactive patient avatars that give trainees accessible, repeatable [[active-learning|practice]] with measurable improvement, supporting [[affective-tutoring|affective]] and [[formative-assessment|formative]] dimensions of [[higher-ed|professional]] [[feedback|training feedback]].

## What this means for practice

- **Instructors.** Give trainees turn-by-turn fidelity feedback with a retry option: both psychologists reported that the immediate ACT score and retry/continue mechanism raised awareness of their therapeutic language and let them experiment with alternative responses without disrupting the dialogue.
- **Medical educators.** Use the avatars as a complement to supervision for deliberate practice in low-risk settings — the system is explicitly designed not to replace it.
- **Instructors.** Choose the feedback model deliberately: GPT-4o mini converged closest to human supervisor ACT fidelity ratings (MAE falling from 12.76 at turn 5 to 6.12 at turn 20, p < 0.001), while GPT-5.1, GPT-5.2, and Claude Sonnet 4.5 grew or stayed more error-prone as context accumulated.
- **Medical educators.** Broaden patient profiles before relying on the system for assessment, since both evaluators found the virtual patient resembled an "ideal" training case — cooperative and already ACT-advanced.

## Limitations

- Expert evaluation involved only two female psychologists (ages 25–30) — one licensed with 4–7 years of clinical experience, one in training with 1–3 years — who each used the system for roughly 90 minutes; no learning outcomes were measured against a comparison condition.
- Both participants reported that the virtual patient was sometimes overly cooperative or ACT-advanced, so the system may under-represent behavioral inflexibility and richer clinical context.
- The automated fidelity evaluator was validated against 49 therapy transcripts and was occasionally too narrow, scoring therapist utterances that were preparatory steps rather than complete interventions; the authors recommend aggregating multiple turns.
- Fidelity-scoring accuracy depended on model choice and session length, with the largest models showing error increases of 0.23–1.21 points as conversational context accumulated.

## Connected Concepts

- [[intelligent-tutoring]]
- [[simulation]]
- [[professional-training]]
- [[feedback]]
- [[formative-assessment]]
- [[affective-tutoring]]

## Connected Articles

- [[medeasy-ai-standardized-patients]] — MedEasy: Designing AI Standardized Patients for Clinical Consultation Training
- [[flowcode-ai-creative-coding]] — Flowcode: An AI-Powered Programming Environment for Scaffolding Iteration in Creative Computing Education
- [[supplynet-visual-exploratory-learning]] — SupplyNet: Supporting Visual Exploratory Learning in Supply Chain via Contextual Multi-Agent Simulation
- [[astra-atco-training-simulator]] — ASTRA: A Scalable Next-Generation ATCO Training Simulator with Autonomous Simpilots
- [[bloom-aligned-educational-control-llms]] — From Execution to Education: A Bloom-Aligned Framework for Measuring Educational Control in LLMs
- [[adaptive-virtual-patient-psychotherapy-training]] — The Empirically Grounded Adaptive Virtual Patient for Psychotherapy Training

## Citation

Pascal Riachi, Sofie Kamber, Stella Brogna, Andrew Gloster, Rafael Wampfler (2026). [Toward Accessible Psychotherapy Training Using AI-Driven Interactive Patient Avatars](https://arxiv.org/abs/2606.17786).
