---
title: "When AI Tutors Speak: Evidence from a Randomized Field Experiment"
created: "2026-09-22T09:23:08-04:00"
updated: "2026-09-22T09:23:08-04:00"
type: article
published: "2026-09-21"
sources: ['raw/papers/ai-tutor-modality-randomized-field-experiment-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [business education]
level: [graduate, adult learning]
audience: [instructors, researchers]
foundations: [cognitive-offloading, human-ai-collaboration]
pedagogy: [retrieval-spacing-interleaving, online-teaching-and-learning, self-regulated-learning]
technology: [intelligent-tutoring, speech-and-voice-technologies, conversational-ai, generative-ai]
assessment: [learning-gains, assessment-validity]
methods: [rct, quantitative-research]
ethics: [guardrails, accessibility]
connected_faqs: [developing-ai-tutor, does-ai-help-students-learn]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** A preregistered randomized field experiment in a [[higher-ed|graduate]] corporate-finance module of Boston University's online MBA separates two design margins usually bundled together: how an [[intelligent-tutoring|AI tutor]] teaches and how students talk to it. Eighty-six students were randomized between a structured tutor grounded in course materials and a holdout where consumer AI stayed freely available, while within the tutored arm each student's channel alternated weekly between voice and text. Structure mattered: tutored students gained 6.63 more points of 55 (p = .007), and the share of written answers reaching relational quality rose from 8% to 49% against 8% to 27% in holdout. Modality did not — weekly mastery was equivalent across voice and text even as voice nearly doubled [[student-ai-interaction|interaction density]] and cost 2.8× more to deliver. Voice reads as an engagement and adoption lever, not a learning technology.

## Key Findings
1. **Structured tutoring raised measured learning.** Tutored students gained 6.63 more points of 55 than ability-matched holdout peers under the preregistered primary specification (95% CI [+1.95, +11.31], p = .007); the covariate-light model gave +3.56 (p = .079).
2. **The gain sat in written reasoning, not recall of facts.** The share of short answers at relational quality or better rose from 8% to 49% under the tutor against 8% to 27% in holdout, while multiple-choice scores showed no difference between arms.
3. **Voice and text were learning-equivalent.** Within students, weekly mastery differed by −0.01 points of 11 (p = .98), and two one-sided tests rejected any true difference larger than ±0.3 SD (p = .018).
4. **Voice transformed the process.** On equal engaged time, students produced 1.34 dialogue turns per minute in voice weeks against 0.75 in text (31 of 32 students higher) and asked 11.3 questions against 4.6.
5. **The thinking pause collapsed under speech.** Median tutor-to-student reply gaps were 27 seconds in voice against 54 in text; typed turns spent 25.9 seconds before the first keystroke plus 13.9 seconds composing.
6. **Voice carried a 2.8× cost premium.** Five weeks for the 52-seat tutored arm cost $562.59 — $413.46 voice and $149.13 text — at $0.22 per voice minute and $0.0165 per text message, with language-model charges 69.5% of spend.
7. **Ambient consumer AI did not close the gap.** Holdout students used consumer tools in 21–42% of weeks, yet the nine reporting external-AI use gained no more than the eight reporting none (+10.3 versus +12.8 of 55, p = .45).

## What the design separates
Between students, 86 consenting students in MX720 Module 2 (course Weeks 8–12, field period 7/1–8/5/2026) were assigned to a tutor grounded in the module's own lectures, readings, and problem sets or to a holdout that kept standard resources and a weekly survey. Within the tutored arm the channel alternated weekly between voice and text, with the starting modality randomized, so the voice–text contrast is identified inside each student. The same version-pinned model served both channels, holding [[pedagogy]] and knowledge base constant so the comparison isolates delivery. Because the tutor withheld answers and required an attempt before feedback, the authors treat the pedagogy itself as the treatment, and the 6.63-point gain as its marginal value over self-study with ambient AI rather than over an AI-free baseline.

## The process transformation, and what it did not buy
Voice changed how students engaged far more than what they learned. Students produced nearly twice the effective turns per minute (1.15 versus 0.64) while the filler share of turns was indistinguishable (17% versus 16%), and spoken turns ran 23.7 words against 16.1 typed. Stated preference drifted toward voice across the five weeks, from −0.21 to +0.29 on a −2 to +2 scale. Yet the mediation step was null: week-level mastery did not rise with that week's turn density (−0.20 points per turn-per-minute, p = .63), and a student's density gap between channels did not predict their mastery gap (r = −.16, p = .41). Gains tracked completed weeks rather than minutes — +2.00 points per additional completed tutoring week (p = .018) — which the authors read as [[retrieval-spacing-interleaving|spaced practice]] mattering more than total exposure.

## Why speech did not out-teach typing
The candidate explanation is friction. Composing a typed answer is slow by construction — a median 26 seconds of deliberation before the first keystroke plus 14 seconds of typing — and typed turns carried no more filler than spoken ones, so the effort is explicit construction rather than waste. The authors argue that this construction may itself be the encoding act the SOLO rubric rewards, and that conversational cadence, where the median reply begins about four seconds after the tutor stops speaking and one turn in eight begins before it stops, rewards fast response over reflection. On this reading voice is an adoption technology rather than an encoding technology: it lowers interaction cost and raises preference, and the dose gradient leaves open whether lower cost converts into more sessions and more accumulated practice.

## What this means for practice
- **Instructors.** Buy structure before channel. A tutor that diagnoses before explaining, requires an attempt, and withholds the answer produced measured unassisted gains here; choosing voice over text did not.
- **Administrators.** Price the modality choice on engagement, adherence, and preference rather than expected scores, because voice carried a 2.8× premium with equivalent weekly mastery while text matched it at a third of the cost.
- **Instructional designers.** Instrument the first session, not only the pedagogy. Fourteen consented AI-arm students never held a single session, making onboarding and course integration a first-class design problem. Voice's value may also operate on an adoption margin that five-week subscores cannot see.

## Limitations
- With 86 consented students and 51 post-test completers (preregistered analysis N = 46: 29 AI, 17 holdout), the comparison is powered for medium-to-large effects only.
- Generalization is deliberately narrow — one [[quantitative-research|quantitative]] module in one online MBA, where analytical multi-step content may plausibly favor text's persistence; the authors treat that as an untested moderator.
- The instructor's final, on file for all 86, replicates the direction (+2.57 of 100, p = .040) but is ceilinged — two-thirds of the class scored the maximum — so that estimate is attenuated.

## Connected Concepts
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[student-ai-interaction]]
- [[speech-and-voice-technologies]]
- [[conversational-ai]]
- [[generative-ai]]
- [[learning-gains]]
- [[retrieval-spacing-interleaving]]
- [[student-engagement]]
- [[online-teaching-and-learning]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[human-ai-collaboration]]
- [[rct]]
- [[trust-calibration]]

## Connected Articles
- [[caeai-ai-companions-learning-over-performance-2026]] — Building AI Companions that Prioritize Learning over Performance
- [[ai-writes-code-student-writes-model-2026]] — The AI Writes the Code, the Student Writes the Model
- [[seung-basham-cognitive-offloading-swld-2026]] — Cognitive Offloading in the Age of Generative AI
- [[eight-mode-ai-engagement-typology-2026]] — The Eight-Mode AI Engagement Typology: Differential Cognitive Signatures and a Self-Report–Behavior Gap
- [[el-salvador-ai-tutoring-selection-claim-2026]] — How much selection would be enough? Bounding the learning claim of El Salvador's AI tutoring pilot
- [[trust-fairness-motivation-ai-teaching-assistants-2026]] — How trust prospectively predicts perceived fairness and learning motivation toward AI teaching assistants
- [[asynchronous-oral-assessment-2026]] — Asynchronous Oral Assessments: Enhancing Integrity, Engagement, and Communication in the AI Era
- [[hauk-student-avatars-dialogue-teacher-education-2026]] — Authentic and functional dialogue with AI-based student avatars
- [[lock-integrating-ai-online-learning-higher-ed-2025]] — Integrating AI in Online Learning in Higher Education: A Literature Review

## Citation
Yang, S., Van Alstyne, M., & Dellarocas, C. (2026). [When AI Tutors Speak: Evidence from a Randomized Field Experiment](https://arxiv.org/abs/2609.23958). arXiv:2609.23958.