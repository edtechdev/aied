---
title: "GELLI: A Generator for Experiential Language Learning Interactions"
created: "2026-10-26T09:30:00-04:00"
updated: "2026-10-26T09:30:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/gelli-experiential-language-learning-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [user study]
discipline: [language learning]
audience: [instructors, instructional designers, educational technology developers, researchers]
level: [adult learning]
pedagogy: [experiential-learning, situated-learning, student-ai-interaction]
technology: [conversational-ai, generative-ai, llm, multimodal]
assessment: [learning-gains, self-report-measures]
methods: [usability-research, quantitative-research, mixed-methods-research]
institutions: []
ethics: []
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-26"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Symonette et al. (2026) built GELLI, a [[conversational-ai|conversational AI]] system that generates [[experiential-learning|experiential language practice]] at runtime from the learner's own goals — situated scenes, voiced characters, translations, corrective [[feedback]], and post-scene reflection — with no pre-authored content. In a within-subjects comparison with 40 learners of Japanese, GELLI produced greater vocabulary recall and confidence than expert-authored practice videos targeting the same goals, with no significant difference in speaking performance. Log coding showed that generated scenes staged an opportunity for 90.4% of assigned goals, and learners attempted 74.0% of them. Learners reported greater presence and emotional engagement than with the videos and described practice as something they co-authored with the system.

## Key Findings

1. **Generated practice beat authored videos on vocabulary recall.** Post-test scores rose from 4.40 to 8.60 after GELLI and from 4.40 to 7.75 after the videos, with a significant between-condition advantage (b = 0.85, 95% CI [0.25, 1.45], p = .005, d = 0.45).
2. **Confidence also rose more after generated practice.** Confidence in conversing in the practiced context increased in both conditions (video d = 0.78; GELLI d = 1.02) and was significantly higher after GELLI (b = 0.59, p = .001, d = 0.45).
3. **Speaking performance did not differ significantly.** Task completion improved in both conditions (video d = 0.52; GELLI d = 0.58) with no significant between-condition difference (b = 0.15, p = .43).
4. **Scenes staged most goals, but not all.** Of 841 goals assigned across 232 scenes, 760 (90.4%) provided an opportunity to practice, and learners attempted 622 (74.0%), or 81.8% of the goals for which an opportunity existed.
5. **Uptake varied sharply by goal type.** Communicative tasks were both most reliably staged (95.3% with an opportunity) and most often attempted (89.6%), compared with 70.4% for vocabulary goals and 51.4% for grammar goals.
6. **Generated feedback was mostly warranted.** Of 154 analyzable feedback instances, 137 (89.0%) responded to actual errors, and 99.3% of warranted instances modeled the correct answer.
7. **Generated narrative mostly held together.** Across 148 scene transitions, 105 (70.9%) meaningfully continued the previous scene, and only four (2.7%) broke continuity.

## A system that generates practice at runtime

GELLI is a [[conversational-ai|conversational AI]] system for [[language-learning|second-language]] practice that generates its entire practice world at runtime. A learner specifies a setting and goals — tasks, grammar, or vocabulary — and the system produces [[situated-learning|situated]] scenes in which a voiced character must be conversed with; imagery, narration, and dialogue are all generated for that session, so no two learners experience the same practice. Separate agents handle narrative, dialogue, support, goal tracking, and reflection, each grounded in the same scene context but seeing only what its role requires. The design follows [[experiential-learning|experiential learning theory]]: each scene is a concrete experience, in-scene support enables [[active-learning|active experimentation]], and post-scene reflection supports reflective observation and abstraction. The system was built in SwiftUI on Apple Vision Pro using [[llm|OpenAI models]] — o3 for text generation, dall-e-3 for imagery, gpt-4o-mini-tts for voice, and whisper-1 for transcription — and the [[virtual-and-augmented-reality|mixed reality]] headset is treated as an implementation choice whose effects the evaluation does not isolate.

## Learning and support

In the controlled comparison (N = 40), learners improved from pre- to post-test in both conditions. Vocabulary quiz scores, which asked learners to recall five Japanese words per context, rose from 4.40 to 7.75 after the videos (d = 1.21) and from 4.40 to 8.60 after GELLI (d = 1.78); a linear mixed-effects model found significantly higher recall after GELLI (b = 0.85, SE = 0.31, z = 2.79, p = .005, 95% CI [0.25, 1.45], d = 0.45). Confidence in conversing in the practiced context also increased in both conditions and was significantly higher after GELLI. Speaking performance improved in both conditions with no significant between-condition difference (task completion b = 0.15, p = .43; vocabulary and grammar use b = 0.46, p = .26). Two Japanese-speaking researchers graded both tests blind to condition and timing, with ICC(2,k) = 0.990 for vocabulary and 0.971 for speaking. Across all 43 participants, 232 scenes, and 841 assigned goals, 760 goals (90.4%) had an opportunity to practice and learners attempted 622 (74.0%).

## Presence, immersion, and the artifacts of generation

Participants reported significantly greater narrative presence, emotional engagement, [[community-of-inquiry|social presence]], and spatial presence with GELLI than with the videos (all corrected p < .001), while attentional focus did not differ (corrected p = .57). Narrative understanding was significantly higher in the video condition (W = 28.5, corrected p < .001), and none of the four presence or engagement subscales significantly predicted vocabulary post-test scores. Learners attributed immersion to agreement among imagery, narration, character responses, and their own expectations, and to [[scaffolding|support]] that made experimentation feel safe: response suggestions offered phrases rather than full sentences, leaving learners responsible for constructing what they said. Artifacts of generation interrupted immersion for some — a character's appearance changing between scenes, backgrounds that differed for the same classroom, sudden vocal pitch changes. Of 264 generated feedback instances, 154 were analyzable after excluding possible pronunciation or speech-recognition errors; 137 (89.0%) responded to actual errors, and among warranted instances 99.3% modeled the correct answer.

## Co-authoring, steering, and continuity

Learners could steer the conversation and the narrative followed, testing the system by changing the subject and being accommodated. But steering toward learning goals could also interfere: a character might volunteer information the learner had intended to request, removing their reason to practice it, or in-role confusion could arrive when they acted outside the goals. Of the 81 goals without an opportunity, 53.1% were pre-empted by the character and 51.9% offered no clear opening. Across 148 scene transitions, 105 (70.9%) meaningfully continued the previous scene, 31 (20.9%) were compatible but stand-alone, four (2.7%) broke continuity, and eight (5.4%) were unclear; all four breaks involved repeating an act already completed. Confidence in conversing in self-chosen settings rose from 2.44 to 3.15 after the custom scenario (p < .001, d = 0.72), and learners rated GELLI at 4.23 out of 5 for helping them prepare for those settings. Some learners struggled to specify a suitable scenario, writing prompts such as only "café", and two wanted authoring tied to prior study.

## What this means for practice

- **Instructors.** Have learners author their own situations before practicing: ask them to specify a setting and goals, then compare how the system's interpretation matches what they intended.
- **Instructional designers.** Prioritize consistency between generated imagery, narration, and character behavior before adding fidelity; a character's appearance and voice should stay stable across scenes, since artifacts of generation were the main reported break in immersion.
- **Educational technology developers.** Give learners control over how much [[scaffolding|support]] they see and the ability to relocate a goal to a later scene when the current one removes the reason to practice it.
- **Researchers.** Measure [[learning-gains|learning gains]] alongside [[self-report-measures|self-report]] immersion and test whether runtime-generated practice transfers to real conversations; the single-session comparison here does not establish retention or [[transfer-of-learning|transfer]].

## Limitations

- The design bundles interactivity, generated imagery, narration, voice, support, and reflection into one treatment, and the expert-authored videos were a reference for [[pedagogy|pedagogical]] alignment rather than interactivity, so the study cannot establish which component produced the outcomes.
- The controlled comparison used two contexts (Cafe and Shopping) in a single session lasting two to three hours; the paper does not claim the advantages persist, transfer to real conversations, or generalize to other contexts.
- Participants were 47 recruited adults in one area learning Japanese, and results may differ for other populations, proficiency levels, or languages; Japanese required specific handling of its writing system, furigana, and register.
- The analysis used N = 40 for [[quantitative-research|quantitative]] analysis and N = 43 for [[qualitative-research|qualitative]] analysis; five of the 47 were excluded (two pilots, three who did not complete, two with missing data).
- Log coding was reconciled to consensus between two researchers rather than independently rated, so the paper reports no inter-rater reliability for those codes.
- Reflections had no required content and reading of generated lessons was not measured, so the reflection and abstraction phases cannot be confirmed as having occurred as intended.

## Citation

Symonette, D., Cheng, A. Y., Ikedo, T., Rosales Juarez, J. M., Pea, R., Abtahi, P., E, J. L., & Landay, J. (2026). [GELLI: A Generator for Experiential Language Learning Interactions](https://arxiv.org/abs/2610.31987). *arXiv preprint*.
