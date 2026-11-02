---
title: "Design and preliminary validation of an AI enhanced game based learning environment for computational thinking"
published: "2026-10-30"
created: "2026-11-02T09:28:00-05:00"
updated: "2026-11-02T10:15:00-05:00"
type: article
sources: ['raw/papers/hengsawat-ai-game-based-learning-computational-thinking-2026.md']
source_url: "https://doi.org/10.1007/s44217-026-02362-4"
confidence: high
page_kind: [evaluation]
research_method: [design and evaluation study]
discipline: [cs education, stem education]
level: [secondary, k 12]
audience: [instructors, educational technology developers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-02"
    agent: hermes-agent
source_depth: full text
foundations: [computational-thinking]
pedagogy: [game-based-learning, constructivist, scaffolding, problem-based-learning]
technology: [generative-ai, adaptive-learning, pedagogical-agent]
methods: [design-based-research]
---

> **Synthesis:** Hengsawat, Junruang, and Kanjug (2026) report a Type I developmental study that builds and preliminarily validates a [[generative-ai|generative-AI-enhanced]] [[game-based-learning]] environment for [[computational-thinking]] in upper [[k-12|secondary school]]. Built on Roblox inside an authentic Smart Greenhouse (IoT) scenario, it bundles six components: [[problem-based-learning|problem-based]] scenarios, a resource room, collaborative spaces, a CT enhancement center, [[adaptive-learning|adaptive]] [[scaffolding]], and an AI coaching system pairing a GPT-4 non-player character with a rule-based difficulty engine. Nine experts appraised it (37 of 47 criteria met the IOC threshold before revision), then 30 Grade 11 students in northeastern Thailand used it across eight 60-minute sessions in a one-group pretest–posttest design. CT scores rose 3.07 points on a 20-point test and achievement rose 5.90 points on a 15-item test, with immediate satisfaction at M = 4.64 across six [[technology-acceptance-model]] dimensions. The authors stress that this design cannot attribute those gains to the environment or any component within it.

## Key Findings

1. **Feasible, but unevenly appraised.** The build ran for eight 60-minute sessions with the teacher as facilitator; 37 of 47 criteria cleared IOC 0.50 — content M = 1.00, media-technology M = 0.758 (7 of 11 met), instructional design 0.845 (20 of 26).
2. **CT total rose 3.07 points.** Scores went from M = 15.73 (SD = 1.48) to M = 18.80 (SD = 0.71), Z = 4.73, r = .86, d_av = 2.79, bootstrap 95% CI [2.30, 3.56].
3. **Four of five dimensions moved; algorithm design did not.** Decomposition (r = .60), pattern recognition (.71), abstraction (.80), and evaluation (.72) survived Holm correction; algorithm design gave Z = 1.13, p = .260, d_av = 0.30.
4. **Achievement gains were larger and coarser.** Scores rose from M = 7.27 (SD = 2.64) to M = 13.17 (SD = 1.02), a 5.90-point gain and d_av = 3.23 on an instrument with pilot KR-20 = 0.60.
5. **Both distributions hit the ceiling.** All 30 students reached the top CT band at posttest against half the class at pretest (SD 1.48 → 0.71), and 96.7% reached the top achievement band, inflating d_av.
6. **Acceptance was high but shallow.** Overall M = 4.64 (SD = 0.54) across six dimensions, highest on CT-skills support at 4.77, though ease of use was unreliable (alpha = 0.41).

## Six components and a two-role AI

The transferable design idea is that "AI support" becomes two operationally distinct roles rather than one chatbot. The coach is learner-initiated and dialogic: a GPT-4 [[pedagogical-agent|non-player character]] reached through an API, with messages routed to an intermediary server where tokenization and intent classification extract problem context. A prompt of roughly 150–300 Thai words forbids direct answers, requires hints mapped to the five CT dimensions, and caps replies at two to three sentences, with temperature at 0.2–0.4 and history at three or four turns. The second role is system-initiated and behavioral — a rule-based engine with a basic [[machine-learning|machine learning]] component that calibrates difficulty from time-to-solution, logical-error rate, and hint-request frequency. That split makes the environment genuinely adaptive, and it operationalizes [[constructivist]] contingent tutoring instead of answer dispensing.

## Where the gains appeared, and where the instrument ran out

The dimension profile tracks what the environment emphasized, not a uniform lift: abstraction moved most (d_av = 1.89), then evaluation (1.53), pattern recognition (1.32), and decomposition (1.07). Algorithm design was flat on the full sample, partly by measurement — 33.3% of students had already hit that dimension's maximum at pretest. An exploratory subset of the 20 students below it rose from 2.95 to 3.50 (p = .012, d_av = 1.05), which the authors label hypothesis-generating only, since conditioning on baseline invites regression to the mean. Achievement carries the same signature: 46.7% sat in the lowest band at pretest and 96.7% in the highest at posttest, compressing variance and inflating d_av. Raw gains of 3.07 and 5.90 points are the summaries the authors prefer.

## Why the authors refuse a causal claim

Type I developmental research was chosen over the multi-cycle theory generation of [[design-based-research]] because the aim was one product, documented and initially validated within a bounded cycle. That leaves one-group validity threats intact; the supplementary analyses only contextualize them. Pre–post correlations were near zero (total r = .05), not the pattern a uniform practice effect would produce, yet item familiarity cannot be excluded. Students above the pretest median (n = 12) still gained d_av = 2.49, more than regression alone would predict. Nothing separates the bundle, though: coach, adaptive engine, collaboration, instructional time, and repeated testing arrived together, and the logs collected were never analyzed, so no mechanism claim is testable here.

## What this means for practice

- **Instructors.** Treat this as a pilot, not a validated intervention: the authors position it as ready for controlled evaluation, and the 3.07-point gain is causally unattributable by design.
- **Instructors.** Brief students to use the coach as a hint source, not an answer key — direct solutions are prohibited and replies capped at two to three sentences — and plan for follow-up questioning.
- **Instructors.** Do not assume uniform dimension coverage: algorithm design did not move in the full sample and a third of students were already at its ceiling, so schedule that work separately.
- **Designers of instructional materials.** Copy the two-role architecture and budget an expert review round: ten of 47 criteria fell below 0.50 IOC and were fixed only because appraisal preceded validation.

## Limitations

- The sample was 30 Grade 11 students (10 male, 20 female) in one intact class at one school in northeastern Thailand, with no control condition, leaving testing, maturation, history, and expectancy effects open.
- Ceiling compression disqualifies the standardized effects as magnitude estimates: all 30 students reached the top CT band at posttest, 83% of posttest dimension ratings sat at the four-point maximum, and 33.3% were at the algorithm-design maximum at pretest.
- The achievement test had KR-20 = 0.60 with two near-zero or negative-discrimination items, and the answer key was not archived, so validation-phase item statistics were unobtainable.

## Citation

Hengsawat, P., Junruang, C., & Kanjug, I. (2026). [*Design and preliminary validation of an AI enhanced game based learning environment for computational thinking in upper secondary education*](https://doi.org/10.1007/s44217-026-02362-4). *Discover Education*, 5, 1276.
