---
title: "Virtual Tutoring with Computer-Assisted Learning: An Experiment in Take-Up and Learning"
created: "2026-08-17T17:55:00-04:00"
updated: "2026-09-19T09:38:08-04:00"
type: article
pedagogy: [help-seeking, student-engagement]
technology: [adaptive-learning, human-in-the-loop-ai, intelligent-tutoring, edtech-platform]
assessment: [learning-gains]
ethics: [equity-in-ai-education]
research_method: [randomized controlled trial]
discipline: [math education]
level: [k 12]
confidence: high
audience: [administrators, policymakers, edtech designers]
sources: [raw/papers/virtual-tutoring-computer-assisted-learning-takeup-2026.md]
---

> **Synthesis:** **TWiK (Tutoring With Khan Academy)** — a low-cost online after-school tutoring layer in which one-on-one human virtual tutors supervise struggling Grade 4–8 students working through the Khan Academy practice their teacher already assigned. A two-year [[rct|randomized trial]] with the Toronto District School Board finds the binding constraint is **take-up and sustained participation**, not tutor quality: only 45% of assigned students reached a first session in Year 1, but collapsing enrollment to a single step raised first-session take-up to 83% in Year 2 — while weekly attendance stayed near 40% because students attended intermittently rather than dropping out. The offer raised practice by ~10 minutes a week and produced small, imprecise gains (ITT 0.055 SD on math assessment; ~0.08 SD on report-card marks) plus improved math attitudes, effects that grew with take-up. The core lesson for [[intelligent-tutoring|AI tutoring]] and [[edtech-platform|computer-assisted learning]] alike: the platform supplies content, but someone must get the student to practice regularly.

## Key Findings

- **Take-up is the primary obstacle.** In Year 1 only ~45% of teacher-nominated, randomly assigned students attended even one virtual tutoring session; families were lost at every step of a long chain (notice invitation → express interest → create an account on a third-party platform → get matched → show up). Students were lost at each handoff.
- **Simple design changes nearly doubled first-session take-up.** In Year 2, inviting families directly through their own teacher for a specific weekly time, handling enrollment and scheduling internally, and setting up a recurring session on the family's behalf raised first-session take-up from ~45% to **83%** — evidence that [[help-seeking|taking up an offer]] is highly responsive to reducing friction.
- **Solving entry is not solving participation.** Even among students who started, weekly attendance remained near two-fifths; "attrition" was mostly **intermittent absence** (missing some weeks, returning others), not dropout. Practice among attendees rose only ~17 minutes a week.
- **Modest, coherent gains.** The intent-to-treat effect on a short achievement test covering assigned Khan Academy topics was 0.055 SD (95% CI [−0.09, 0.20]) — positive but too imprecise to separate null from a small effect. Report-card marks rose ~0.08 SD (p < 0.10), and treated students reported enjoying math more and finding the platform more helpful.
- **Effects scale with take-up.** Gains grew between Year 1 and Year 2 as first-session take-up rose, consistent with a program whose modest dose produces modest effects that strengthen when more students actually engage.

## What this means for practice

- **Administrators.** Collapse enrollment to a single step. Routing the invitation through the student's own teacher, handling scheduling internally, and setting up a recurring session on the family's behalf raised first-session take-up from about 45% to 83%; every additional handoff in the sign-up chain loses students.
- **Administrators.** Manage attendance, not just starts. With weekly attendance holding near two-fifths, the operative problem was intermittent absence — students missing some weeks and returning — rather than dropout, so plan for re-entry and follow-up rather than treating non-attenders as disengaged.
- **Designers.** Treat take-up and persistence as design outputs, not recruitment byproducts. The same program produced 45% then 83% take-up across two years on design changes alone, so instrument each step of the funnel (invitation → interest → account → match → attendance) and iterate there before adding content or tutoring hours.
- **Instructors.** Tie the offer to work a student is already assigned. Tutored students practiced only about 10 extra minutes a week on Khan Academy topics the tutor could see, so direct the session at the exact skills the student is failing rather than general remediation.
- **Policymakers.** Require trials sized to the dose actually delivered. With 80% power only for effects of about 0.21 SD or larger and a confidence interval of [−0.09, 0.20], this study cannot separate a null from the small gain this dose would plausibly produce; underpowered evaluations will read as failures regardless of the program's true effect.

## Limitations

- One district, two school years, Grades 4–8: the trial ran in the Toronto District School Board only, so take-up and effects in other systems, grade bands, and student populations are untested.
- The primary achievement test was deliberately built from the Khan Academy items tutored students had practiced — a construction favorable to detecting an effect — yet the pooled intent-to-treat estimate was 0.055 SD with a 95% CI of [−0.09, 0.20], not statistically distinguishable from zero.
- The Year-2 design changes were not a clean experiment: several program features changed at once, so the gain from 45% to 83% take-up cannot be attributed to collapsing enrollment alone, and attendance records cannot say whether a missed week reflects the student, the family, or the program.
- Attitudes come from a short self-report survey and the secondary achievement outcome from teacher-assigned report-card marks graded 1–4, neither of which is a clean measure of achievement.

## Connected Concepts

- [[intelligent-tutoring]]
- [[human-in-the-loop-ai]]
- [[edtech-platform]]
- [[math-education]]
- [[k-12]]
- [[help-seeking]]
- [[student-engagement]]
- [[adaptive-learning]]
- [[learning-gains]]
- [[equity-in-ai-education]]
- [[parents-and-families]]
## Connected Articles

- [[elevate-genai-virtual-tutors]] — GenAI virtual tutors
- [[access-not-enough-ai-tutoring-2026]] — Access is not enough for AI tutoring
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo in a two-year school experiment
- [[ai-tutoring-quality-k12-methodologies-2026]] — Improving AI tutoring quality in K-12
- [[ai-availability-student-motivation]] — AI availability and student motivation

## Citation

Oreopoulos, P., Dong, R., & Low, N. (2026). *[Virtual tutoring with computer-assisted learning: An experiment in take-up and learning](https://www.nber.org/papers/w35622)* (NBER Working Paper No. 35622). National Bureau of Economic Research.
