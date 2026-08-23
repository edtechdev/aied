---
title: "Exploring Student Anxiety and Experience in Performance-Based Assessments Using AIvaluate"
created: "2026-08-23T10:00:00-04:00"
updated: "2026-08-23T10:00:00-04:00"
type: article
tags: [assessment, conversational-ai, pedagogical-agent, affective-computing, well-being, generative-ai, llm]
sources: ['raw/papers/aivaluate-anxiety-assessment-2026.md']
confidence: high
---

> **Synthesis:** Yusuf, Money, and Daylamani-Zad (2026) evaluated AIvaluate, an LLM-augmented, emotionally intelligent pedagogical conversational agent designed to mediate oral performance-based assessments (PBAs). Using a counterbalanced quasi-experimental within-subjects design with 35 pre-university IBDP students comparing face-to-face viva voce with AIvaluate-mediated sessions, they found significantly LOWER self-reported anxiety during AIvaluate sessions (calmness M = 6.50 vs. 5.86, p = .028) and "good" usability (SUS 70.64 vs. 66.93). Qualitative analysis surfaced strengths (reduced social pressure, flexible pacing, ease of use) and limitations (technical issues, impersonal interaction, waiting times). Crucially, the authors caution that reduced anxiety should not be assumed to benefit learning: moderate anxiety can be facilitative (Yerkes–Dodson / IZOF), the study measured emotional and usability outcomes only, and they explicitly call for research into whether AI-mediated PBAs improve student attainment.

## Core Finding

AIvaluate significantly reduced student anxiety during oral performance-based assessments while earning "good" usability ratings — but the study did not establish, and explicitly cautions against assuming, any corresponding learning or attainment benefit. The paper's central contribution is a well-designed emotional/usability evaluation of an LLM-augmented pedagogical conversational agent for assessment, framed by the idea that anxiety is not uniformly harmful and that reducing it is only beneficial when a learner's anxiety exceeds their individual zone of optimal functioning.

## The AIvaluate System

AIvaluate is an emotionally intelligent, LLM-augmented pedagogical conversational agent deployed as a disembodied chatbot with three functions: (1) a conversational interface between student and teacher during oral PBAs, (2) real-time student emotional-state self-reporting (a 1–10 slider), and (3) GPT-4 LLM-augmentation that generates three emotionally intelligent suggested replies for the educator based on the student's last input, conversation history, and live anxiety rating. The virtual sessions ran through a Wizard of Oz setup (the teacher was the unseen interlocutor), and TTS/STT supported text and verbal input. This design foregrounds [[conversational-ai]] and [[pedagogical-agent]] integration within a [[affective-computing]] loop — emotional state data informs adaptive, empathetic response generation.

## Study Design & Method

A counterbalanced quasi-experimental within-subjects design had 35 IBDP pre-university students (G*Power: N ≥ 34) complete both a traditional face-to-face viva voce and an AIvaluate-mediated viva with the same teacher. Data came from three sources: (1) timestamped emotional-state slider logs (weighted-mean anxiety per session, compared with paired-sample t-tests), (2) post-assessment System Usability Scale (SUS) plus four bespoke experience items, and (3) open-response reflections analysed with reflexive thematic analysis (Braun & Clarke). Notably, the study did not record or analyse formal performance scores — it measured emotional and usability outcomes only.

## Reduced Anxiety as an Affective Outcome

Students reported significantly higher calmness (lower anxiety) during AIvaluate (M = 6.50, SD = 1.24) than face-to-face (M = 5.86, SD = 1.47), t(34) = −1.97, p = .028 (1-tailed). The bespoke item "I did not feel anxious during the assessment" also strongly favoured AIvaluate (p < .001). Thematic analysis attributed this to reduced social pressure — the absence of direct teacher observation/judgement and perceived flexible pacing. This aligns with the paper's theoretical framing that technology mediation reduces perceived social threat, and it positions AIvaluate as a potentially supportive option for learners whose [[well-being]] is threatened by anxiety that exceeds their individual zone of optimal functioning.

## Usability and the "Good" Rating

AIvaluate scored an overall SUS of 70.64 ("good"/"acceptable"/grade C), above face-to-face's 66.93 ("good"/"marginal"/grade D). Item-level comparisons significantly favoured AIvaluate on needing less external support, learning quickly, being less cumbersome, and confidence. However, one bespoke item went the other way: face-to-face scored significantly higher on "helped me to better understand my work" (p = .004), suggesting students felt they understood their work better through live human dialogue — a signal that reduced anxiety and perceived comprehension do not move together.

## Student Preferences: Reduced Pressure vs. Authentic Interaction

Students were split. Some valued AIvaluate's reduced pressure, flexible response times, ease of use, and structured feedback/reflection. Others preferred face-to-face for its dynamic interaction, non-verbal cues, and natural, spontaneous conversation — which some found more engaging and authentic. Limitations of AIvaluate included technical issues (delays, dictation errors, hardware), impersonal/robotic interaction, and waiting times. The authors frame these as complementary strengths and recommend **hybrid assessment models** that combine AI-mediated and human-led formats.

## A Key Caveat: Reduced Anxiety Is Not Uniformly Beneficial

The paper explicitly cautions that lower anxiety is not inherently good. Drawing on the Yerkes–Dodson Law and Individual Zones of Optimal Functioning (IZOF), moderate anxiety can be facilitative, supporting alertness and engagement; only anxiety exceeding a learner's optimal zone is debilitating. Because the study measured emotional and usability outcomes but not performance or attainment, it cannot claim learning gains. The authors call for research on whether reduced anxiety from AI-mediated PBAs "is ultimately beneficial for learning and whether AI-mediated assessments can improve student attainment." This makes the paper a strong example of an affective/[[well-being]] outcome being demonstrated without an equivalent claim about achievement.

## Relevance to the wiki

This article adds an evidence-based, within-subjects study of an emotionally intelligent LLM-augmented conversational agent used specifically for assessment — a niche the wiki's [[conversational-ai]] and [[pedagogical-agent]] coverage can benefit from. It links [[affective-computing]] to [[assessment]], extends the generative-AI assessment cluster into the affective/well-being domain, and models good practice by distinguishing a demonstrated affective outcome from an unproven learning outcome. Its treatment of anxiety as context-dependent (facilitative vs. excessive) offers a nuanced counterpoint to work that treats anxiety reduction as unconditionally positive.

## Connected Concepts

- [[assessment]]
- [[conversational-ai]]
- [[pedagogical-agent]]
- [[affective-computing]]
- [[well-being]]
- [[generative-ai]]
- [[llm]]
- [[feedback]]
- [[student-experience]]
- [[ai-education]]

## Connected Articles

- [[conversational-ai-agents-umbrella-review-2026]] — Conversational AI Agents in Education: An Umbrella Review
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsidering the Use of Oral Exams and Assessments: An Old Way to Move Into a New Future
- [[roe-assessment-twins-2026]] — Assessment twins: An approach for strengthening assessment validity in the age of generative AI
- [[the-synergy-of-pedagogical-agents-and-metaphorical-design-reducing-psychological]] — The synergy of pedagogical agents and metaphorical design: Reducing psychological distance to enhance video learning

## Citation

Yusuf, H., Money, A., & Daylamani-Zad, D. (2026). [*Exploring student anxiety and experience in performance-based assessments using AIvaluate: an LLM-augmented emotionally intelligent pedagogical AI conversational agent*](https://doi.org/10.1007/s11423-026-10634-x). Educational Technology Research and Development.
