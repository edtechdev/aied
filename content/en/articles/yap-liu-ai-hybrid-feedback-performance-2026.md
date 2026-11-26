---
title: "Designing Scalable and Adaptive AI Feedback: Student Perceptions of AI and Hybrid Human-AI Feedback Across Performance Levels"
created: "2026-11-26T04:40:00-05:00"
updated: "2026-11-26T04:40:00-05:00"
type: article
published: "2026"
sources: ['raw/papers/yap-liu-ai-hybrid-feedback-performance-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [survey]
discipline: []
level: [higher ed]
audience: [instructors, assessment designers, faculty developers, administrators]
pedagogy: [motivation]
technology: [generative-ai, llm, personalized-learning]
assessment: [formative-assessment, assessment, feedback, ai-feedback-quality]
methods: [quantitative-research]
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-26"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Yap and Liu (2026) compare how undergraduates perceive two [[feedback|feedback]] architectures in a large foundational finance unit: feedback generated entirely by an AI model, and a hybrid model in which educators first wrote rule-based feedback tied to [[assessment|assessment]] criteria, item mappings and performance bands, and the AI then extended that vetted material with personalized feedforward. Across 118 medium- and high-performing students, the two architectures did not differ significantly on perceived utility, supportiveness, [[motivation|motivation]] or support for future learning. The one interaction that held was on supportiveness: medium performers rated the AI-only feedback more supportive than the hybrid, while within the hybrid condition high performers rated it more supportive than medium performers. An exploratory pattern suggested high performers valued hybrid feedback more for future learning, but that interaction did not reach significance. The contribution is a design finding, not an effectiveness claim: in this study the difference between the two conditions was architecture rather than authorship, and the aggregate null hid a subgroup difference.

## Key Findings

1. **The two architectures were rated alike overall.** With 37 students in the AI condition and 81 in the hybrid, no significant difference appeared on perceived utility, supportiveness, motivation or support for future learning.
2. **The null hid one subgroup difference.** Supportiveness was the only dimension where feedback type and performance level interacted, and the effect was small.
3. **Medium performers rated the AI-only feedback more supportive than the hybrid.** The gap was moderate in size and is the strongest single contrast in the study.
4. **Within the hybrid condition, high performers rated it more supportive than medium performers.** The hybrid therefore did not under-serve strong students; relative to the AI-only option it under-served the middle band.
5. **The future-learning signal is suggestive only.** Among high performers, hybrid feedback scored higher than AI-only, but the interaction for that dimension did not reach significance, and the authors label the comparison exploratory.
6. **The hybrid condition changed the division of labor, not just the author.** Educators wrote the rules; the AI analyzed nothing and instead extended educator-authored feedback with feedforward, which is a different design from asking a model to grade and then having a person check it.
7. **Performance band is offered as a routing signal, not a learner model.** The authors use existing grade data as a pragmatic proxy for learner variability, and present it as a way to differentiate feedback design at scale rather than as a validated account of what any student needs.

## Two architectures, not two authors

The comparison is easy to misread as AI versus human, and the paper is explicit that it is not. In the AI condition, a model received test performance data and prompts and produced the feedback. In the hybrid condition, course educators first wrote rule-based formative feedback linked to assessment criteria, item mappings, performance bands and learning objectives, drawing on Sadler and Harden; those rules ran through Excel automation that analyzed performance by topic and learning outcome. ChatGPT 5.0 was then used to extend that educator-validated feedback with personalized feedforward.

That ordering matters for what the study can claim. The AI did not perform the primary analysis of student performance in the hybrid arm, so the difference under test is whether a student notices educator-designed structure behind the feedback, not whether a human or a machine wrote the sentences.

## What students reported, and what the average hides

Four dimensions were measured from a principal-components analysis, with composite reliabilities between 0.91 and 0.93: [[feedback|feedback]] utility, supportiveness, feedback-driven [[motivation|motivation]], and support for future learning. Mean ratings sat in the upper range in both conditions, which the authors read as evidence that well-designed AI feedback is pedagogically acceptable to students in this setting.

The interesting result is the exception. Supportiveness was the only dimension where the interaction survived (F(1, 114) = 5.69, p = 0.019, partial η² = 0.048), and its shape is worth stating plainly. Medium performers in the AI condition averaged 3.9 against 3.4 in the hybrid (p = 0.045, d = 0.62). Within the hybrid condition, high performers averaged 3.9 against 3.4 for medium performers (p = 0.005, d = 0.65). So the middle band preferred the leaner, AI-only feedback, while strong students preferred the structured hybrid.

One reading, which the authors support, is that medium performers are helped by clarity and directness and are slowed by contextual, future-oriented guidance they cannot yet act on. Another is that the hybrid text, having been written for performance bands, read as generic to students in the middle of a band. The study cannot separate these.

The future-learning dimension carries the same shape without the statistical warrant. Among high performers, hybrid scored 3.8 against 3.1 for AI-only (p = 0.043, d = 0.64), and within the hybrid, high performers scored 3.8 against 3.3 for medium performers (p = 0.024, d = 0.53), but the interaction itself was not significant (p = 0.083).

The [[personalized-learning|personalization]] mechanism proposed is modest and cheap: route feedback by performance band, choosing a format that prioritizes clarity and structure for the middle band and one that adds contextual, future-oriented guidance where students have demonstrated they can use it.

## What this means for practice

- **Instructors.** If criteria-based rules already exist for an assessment, use AI to extend them with feedforward rather than to re-analyze the work, because that ordering keeps the pedagogical judgment with the educator and leaves the model a narrower job.
- **Course teams.** Choose the feedback format by function rather than by preference: structure and directness where students are still closing a gap, contextual and future-oriented guidance where they can act on it.
- **Assessment designers.** Use the performance band you already hold as a routing signal for feedback design, and avoid treating it as a diagnosis of what a student needs.
- **Administrators.** Cost the educator time honestly: the hybrid arm required rule-writing per assessment, which is front-loaded work that a fully automated arm does not need.
- **Researchers.** Report the subgroup interaction alongside the null, and follow perception data with uptake measures, since students can rate feedback highly and still not revise anything.

## Limitations

- **Perceptions, not uptake.** The outcomes are self-reported ratings; no revision behavior, learning gain or transfer was measured, and positive ratings need not produce action.
- **One unit, one institution.** A foundational finance unit at a single Australian university, with 91% of respondents in business or commerce degrees and 85% in their first or second year.
- **The analytic sample is a minority of the cohort.** 737 students were invited, 163 valid responses were retained, and the main analysis used 118 after low performers were excluded and examined separately.
- **Group sizes were unequal and assignment was not individual.** Feedback type was assigned at cohort level during distribution, and the final groups differed in size (18 and 19 medium and high in AI; 29 and 52 in hybrid), which the authors handle with Welch tests and Levene's test rather than by design.
- **No fully human condition.** The study compares two AI-mediated architectures; it cannot say how either compares with feedback written entirely by an educator.
- **Language background.** 47% reported English as their first language, which may have shaped how students read and rated the feedback.

## Citation

Yap, Y. K., & Liu, E. (2026). [Designing Scalable and Adaptive AI Feedback: Student Perceptions of AI and Hybrid Human–AI Feedback Across Performance Levels](https://doi.org/10.1016/j.caeai.2026.100698). *Computers and Education: Artificial Intelligence*, 100698.
