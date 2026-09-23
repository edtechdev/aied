---
title: 'Using Generative AI to Simulate Patient History-Taking in a Problem-Based Learning Tutorial: A Mixed-Methods Study'
created: "2026-08-20T06:50:00-04:00"
updated: "2026-09-19T09:24:40-04:00"
type: article
pedagogy: [problem-based-learning]
technology: [generative-ai, simulation]
discipline: [medical education]
sources: ['raw/papers/genai-simulate-patient-history-pbl-2026.md']
confidence: high
audience: [medical educators, instructors, curriculum designers]
level: [higher ed]
page_kind: [evaluation]
methods: [mixed-methods-research]
---

> **Synthesis:** In March 2024, 37% of second-year students at a small community-based Midwestern U.S. [[medical-education|medical school]] piloted a [[generative-ai|genAI]]-enabled [[simulation|virtual patient]] in a required [[problem-based-learning|PBL]] tutorial, comparing it to the school's legacy Electronic PBL Module (ePBLM) searchable database. Across two genAI groups (N=13) and two comparison groups (N=13) sharing the same faculty facilitator, the [[pedagogical-agent|genAI avatar]] presented essential case content accurately but students treated it as a sophisticated "question base" rather than a real patient. The study demonstrates that genAI can represent essential PBL case content, stimulate problem-driven collaboration, and boost perceived [[student-engagement|engagement]] and teamwork — while exposing the need to frame the experience so students experiment with the AI's humanlike capabilities and adapt to its limitations.

## Key Findings
- **GenAI enabled accurate essential content, with occasional deviations.** Pertinent positive findings matched the ePBLM, but the AI deviated on non-essential or non-pertinent-negative content (e.g., one group reported headaches "on and off for a few months"; the ePBLM returned "Only on occasion"), and reported occasional recreational marijuana use not in the ePBLM.
- **GenAI tutorials took longer, especially on history-taking.** GenAI groups spent 55–65 min vs. 36–39 min for ePBLM, with ~10 min more on history-taking (24–30 vs. 16–19 min); only genAI groups closed the case by communicating the diagnosis and initial management plan to the patient.
- **Students rated the genAI experience significantly higher overall.** Perceptions survey total rose only for the genAI condition (beta = 5.77, 95% CI [1.27, 10.27], p = .013); genAI students rated clinical accuracy 1.6 points higher post-tutorial and reported higher enjoyability, teamwork, interest, and confidence. Model R² = 0.25, F(3, 48) = 5.39, p = .003.
- **History information recall was near ceiling in both conditions.** Immediate recall was 9.40 (ePBLM) vs. 10.10 (genAI) of 11; delayed recall 7.94 vs. 8.63. Only time (immediate→delayed forgetting) was significant (p < .001); rate of forgetting did not differ by condition.
- **Students did not interview the avatar like a human.** Their questioning was predominantly closed-ended and efficiency-focused; Group 1's student asked the tutor, "Can we give him advice or is it [the AI] just, like, a question base?" The genAI's rapport-building embellishments were sometimes inconsistent (forthcoming responses for one group, irritable tone for another).

## Study Design & Method
Between-groups, [[mixed-methods-research|mixed-methods]] pilot at a small community-based U.S. medical school using hybrid PBL. Twenty-six second-year students (37% of Class of 2026; convenience sample; of 14 reporting demographics, 79% women, 20% minoritized racial/ethnic group) opened the first required case of the Endocrinology, Reproduction, and Gastroenterology (ERG) unit (~3 months before USMLE Step 1). Two groups (N=13) conducted voice-to-voice history-taking with a genAI-enabled avatar (Randy Rhodes, a 54-year-old man with Type 2 Diabetes); two comparison groups (N=13) gathered history by keyword search of the ePBLM. All four groups had the same expert faculty facilitator (a 16-year "master" PBL tutor). The avatar combined a local speech-to-text model, ElevenLabs voice synthesis, D-ID facial animation, and OpenAI GPT-4o driven by the faculty ePBLM case materials with "[[guardrails]]" (e.g., preventing the AI from revealing the diagnosis). Data included: descriptive observation (Spradley) of audio recordings by 5 co-investigators using a reflexivity-bracketed template with inductive consensus coding; an 8-item locally developed Learner Perceptions Survey (summated 8–40, item 5 reverse-coded); and an 11-item short-answer Patient History Information Quiz graded masked to condition, administered immediately and 2 weeks post-tutorial. Analysis used OLS linear regression (R 4.5.0; lme4, emmeans, gtsummary, ggplot2), two-tailed α = 0.05.

## What this means for practice

- **Instructors.** Frame the avatar explicitly as a patient to be interviewed, not a searchable question base: students defaulted to closed-ended, efficiency-focused querying and one asked the tutor outright, "Can we give him advice or is it [the AI] just, like, a question base?"
- **Instructors.** Coach students to probe the avatar's humanlike capabilities and to recognize and adapt to its deviations — the AI reported symptoms "on and off for a few months" where the ePBLM returned "Only on occasion," and its rapport-building tone varied between groups.
- **Curriculum designers.** Introduce genAI-enabled patients early, even in the first year, because rising third-year students brought an established keyword-querying framework from the legacy ePBLM into the encounter.
- **Medical educators.** Budget tutorial time for slower history-taking: genAI groups spent 55–65 min versus 36–39 min for ePBLM, about 10 min of it extra history-taking, though only the genAI groups closed the case by giving the patient a diagnosis and initial management plan.
- **Instructional designers.** Manage the reality–accuracy trade-off deliberately: tightening guardrails to prevent deviation risks making the LLM robotic, while loosening them admits bias, inaccuracy, and unpredictability — decide how much deviation the [[problem-based-learning|PBL]] case can absorb.

## Limitations

- One case at one community-based medical school with 26 second-year students (37% of the class), recruited by word of mouth with no inclusion/exclusion criteria, so the authors describe the conditions as "best case" rather than generalizable.
- All four groups were led by one experienced faculty facilitator enthusiastic about genAI, and participants volunteered for a study offering the chance to use genAI, confounding tutor skill and enthusiasm with the condition.
- Outcomes rest on locally developed instruments — an 8-item perceptions survey and an 11-item history quiz — and recall was near ceiling in both conditions (immediate 9.40 ePBLM vs 10.10 genAI of 11), leaving little room to detect a knowledge difference.
- With only two groups per condition, group effects on the quiz and survey could not be statistically controlled, and the observational analysis used audio recordings only.

## Connected Concepts
- [[problem-based-learning]]
- [[medical-education]]
- [[generative-ai]]
- [[pedagogical-agent]]
- [[simulation]]
- [[authentic-assessment]]

## Connected Articles
- [[medeasy-ai-standardized-patients]] — MedEasy: Designing AI Standardized Patients for Clinical Consultation Training
- [[adaptive-virtual-patient-psychotherapy-training]] — The Empirically Grounded Adaptive Virtual Patient for Psychotherapy Training
- [[ai-psychotherapy-training-avatars]] — Toward Accessible Psychotherapy Training Using AI-Driven Interactive Patient Avatars
- [[genai-patient-education-transplant-handbooks]] — Generative AI for Patient Education: Grounding Content and Equity in Transplant Handbooks

## Citation
Mool, A., Schmid, J., Johnston, T., Smith McCoy, K.J., et al. (2026). [*Using generative AI to simulate patient history-taking in a problem-based learning tutorial*](https://doi.org/10.1007/s10758-025-09929-4). *Technology, Knowledge and Learning*.
