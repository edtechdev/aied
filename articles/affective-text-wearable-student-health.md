---
title: A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
created: "2026-05-17T04:33:04-04:00"
updated: "2026-08-24T12:00:00-04:00"
type: article
tags: [affective-computing, student-experience, higher-ed, learning-analytics, affective-tutoring, llm]
audience: [student experience]
level: [higher ed]
sources: ['raw/papers/2605.14360.md']
confidence: medium
---

## Synthesis

> A year-long study of 458 university students (3,610 person-waves) wearing Oura rings tested whether **ultra-brief naturalistic concern text** — median three-word answers to a bimonthly "what concerns you most?" prompt — could add psychological context that passive physiological sensing alone cannot recover. Comparing dictionary-based (SEANCE), general pretrained (RoBERTa-base), and domain-adapted (MentalRoBERTa) NLP pipelines against nine sleep and physical-activity outcomes in within-person mixed-effects models, the authors found that **emotional register, not topical content, carries the physiologically relevant signal**: weeks dominated by academic concern framing tracked lower physical activity, and emotional-exhaustion language tracked poorer sleep quality and lower heart rate variability. Zero-shot classification of concern topics produced no significant associations, while affective dimensions were consistently predictive across all three NLP methods. General pretrained embeddings generally outperformed domain-adapted models, which showed a relative advantage only for autonomic outcomes. The result is a design argument: low-burden affective text prompts can meaningfully enrich the interpretability of passive physiological data at negligible participant cost.

## Key Findings

1. **Emotional register, not topic, carries the signal.** Affective dimensions were consistently associated with sleep and activity outcomes across all three NLP methods, while zero-shot classification of concern topics produced no significant associations — how students express concern matters more than what they are worried about.
2. **Academic concern framing tracks lower physical activity.** Weeks dominated by academic language (Academ_GI) were associated with fewer steps/day and lower active MET, a finding independently recovered by both RoBERTa-base PC1 and MentalRoBERTa PC1, which share the same academic-versus-emotional axis as their leading dimension.
3. **Emotional-exhaustion language tracks poorer sleep and lower HRV.** Negative-emotion and sadness language was associated with lower sleep efficiency, less deep sleep, and lower heart rate variability (RMSSD), pointing to a psychologically interpretable degradation of autonomic recovery.
4. **General pretrained embeddings outperform domain-adapted models for most outcomes.** RoBERTa-base explained variance across all nine outcomes; MentalRoBERTa's domain adaptation offered a relative advantage mainly for autonomic measures (dual sleep-efficiency/RMSSD associations not matched by any single general-model dimension).
5. **Ultra-brief text is a viable, low-burden complement to passive sensing.** Even at a median response length of three words, 21 of 243 dictionary-feature associations and numerous embedding dimensions linked language to concurrent wearable outcomes, establishing that minimal-burden prompts can enrich passive physiological data.

## Background: The Interpretability Gap in Passive Sensing

Wearable devices capture physiological and behavioral data with increasing fidelity, but the psychological states that shape sleep, movement, and recovery are not directly encoded in heart rate or accelerometry. A student whose sleep efficiency has dropped might be behind on a paper, grieving a relationship, overwhelmed by financial aid paperwork, or fighting a cold — and the ring cannot distinguish these. This interpretability gap limits the practical value of passive sensing for [[well-being]] and [[learning-analytics]] infrastructure: without knowing what drives a decline for a given student in a given week, a wearable-derived alert is difficult to interpret and harder still to act on.

The field has typically answered this gap with ecological momentary assessment and other self-report methods, which improve interpretability but add [[student-experience]] burden and undermine long-term scalability. Brief naturalistic text collected as part of the study protocol itself offers a complementary path: open-ended concern prompts generate responses in the participant's own words at minimal burden, without the constraints of fixed-response scales or the noise of unsolicited social media data. Whether the signal in such text lies in the topic of concern or the affective register in which it is expressed — the emotional tone, valence, and intensity of word choice — was the study's central unresolved question.

## Study Design and Method

This was a secondary analysis of longitudinal data from the LEMURS [[rct]], a Phase II parallel-group randomized controlled trial of three well-being interventions for first-year university students at the University of Vermont during the 2023–2024 academic year. Of 487 enrolled participants with wearable data, 29 were excluded for insufficient Oura ring wear time, leaving an analytic sample of 458 students contributing 3,610 person-waves across 33 academic weeks. Participants wore an Oura ring continuously and responded bimonthly to a single open-ended concern prompt — "Of all the things that have happened in the last 2 weeks, what concerns you the most?" — yielding 3,073 concern-present responses with a median length of three words (single-word responses accounted for 32% of the corpus).

Three NLP approaches were compared. **SEANCE**, a dictionary-based sentiment and cognition engine, produced roughly 80 named psycholinguistic feature dimensions per response. **RoBERTa-base**, a general pretrained language model, generated 768-dimensional sentence embeddings subsequently reduced via principal components analysis (127 components, 80% variance). **MentalRoBERTa**, the same model continued-pretrained on mental-health Reddit corpora, produced 100 comparable components. A zero-shot [[llm]] classification (BART-large-MNLI) additionally assigned each response a probability distribution over nine concern domains. Associations with nine wearable outcomes (six sleep, three activity) were tested using within-person linear mixed-effects models with a random intercept per participant — isolating week-to-week covariation within individuals from stable between-person differences, which was essential given high outcome stability (ICCs ranged 0.57–0.93).

## Semester Decline and the Within-Person Signal

Before the NLP analyses, the authors characterized longitudinal trajectories and documented a significant semester-level decline across five of the nine wearable outcomes. Heart rate variability (RMSSD) fell from a model-predicted 66.9 ms at Week 1 to 63.4 ms at Week 33 — a 5.2% reduction in cardiac autonomic function across the year. Sleep efficiency declined, sleep onset latency increased as students took progressively longer to fall asleep, and step count fell from roughly 11,455 to 10,777 steps/day. Crucially, the within-person variance available for language-outcome testing ranged from only 7% to 43%, with RMSSD's ICC of 0.93 meaning the majority of cardiac autonomic variation was stable rather than state-dependent — a structural ceiling on how much any weekly predictor could explain.

## Language–Outcome Associations

**Dictionary-based (SEANCE).** Of 243 tests, 21 (8.6%) were nominally significant across seven outcomes, none surviving Bonferroni or FDR correction — consistent with the study's formative, hypothesis-generating framing. Forceful and power-oriented language tracked lower physical activity, while task-focused work-oriented language tracked higher activity. Sensitivity, work, and academic language were positively associated with sleep efficiency, and sadness language was negatively associated with deep sleep. Dominance analysis found academic language (Academ_GI) to be the primary driver of sleep onset latency, surpassing semester timing.

**General pretrained (RoBERTa-base).** Embedding dimensions showed associations across all nine outcomes, several spanning multiple outcomes simultaneously. One dimension (PC117) captured high-engagement weeks that traded sleep quantity for physical activity; another (PC30) captured a generalized low-energy concern framing that depressed both sleep quality and activity in the same week. RoBERTa PC1 — anchored by academic language — was negatively associated with steps/day, replicating the SEANCE finding.

**Domain-adapted (MentalRoBERTa).** Domain adaptation's relative value surfaced for autonomic outcomes: PC7, anchored by negative-emotion language, was negatively associated with both sleep efficiency and RMSSD simultaneously — a dual association no single RoBERTa dimension matched — and PC31 was the most outcome-spanning dimension in either model. The near-identical structure of RoBERTa PC1 and MentalRoBERTa PC1 confirmed that academic-versus-emotional framing is the dominant axis of variation in the corpus, independently recovered by two differently trained models.

## Implications

The central dissociation between topic and affect is a practical design finding for the intersection of [[affective-computing]], [[educational-nlp]], and passive sensing. Because emotional register rather than topical content carries the signal, systems for [[learning-analytics]] early-warning and student well-being need not build expensive, brittle topic-classification infrastructure: tracking affective tone in brief student language may be more predictive than categorizing what students say they are worried about. The superiority of general pretrained embeddings suggests that, for very short text, well-established general models are a strong default, with domain adaptation worth reserving for autonomic outcomes.

For the broader [[affective-tutoring]] and multimodal research agenda, the study strengthens the case that *how* a student expresses themselves matters as much as what they produce. Ultra-brief, low-burden affective prompts offer a scalable complement to richer but heavier data streams, aligning with work on [[multimodal]] integration and AI-based well-being monitoring. At the same time, the null zero-shot topic findings and the largely uncorrected associations underscore a caution about [[privacy]] and inference quality: formative results should not be over-read as confirmatory, and any deployment that links students' private concern language to physiological records must confront ethical limits on what these associations can legitimately support.

## Connected Concepts

- [[learning-analytics]]
- [[affective-computing]]
- [[well-being]]
- [[affective-tutoring]]
- [[multimodal]]
- [[educational-nlp]]
- [[privacy]]
- [[student-experience]]
## Connected Articles

- [[engagement-assessment-video]]
- [[genai-tutor-engagement-patterns]]
- [[ai-campus-wellbeing-tools]]
- [[multimodal-ai-feedback-learning]]
- [[physiological-signals-exam-outcomes-ml]]
## Citation

Harry, T., Hidalgo, J., Price, M., Feng, Y., Stanton, K., Tompkins, C., Dodds, P. S., Fudolig, M. I., Bloomfield, L., & Danforth, C. (2026). [A formative study of brief affective text as a complement to wearable sensing for longitudinal student health monitoring](https://arxiv.org/abs/2605.14360). [cs.HC]. Submitted to ACM IMWUT.
