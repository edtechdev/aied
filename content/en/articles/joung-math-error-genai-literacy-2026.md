---
title: "Building critical GenAI literacy through mathematical error analysis"
created: "2026-11-27T01:35:00-05:00"
updated: "2026-11-27T01:35:00-05:00"
type: article
published: "2026-07-31"
sources: ['raw/papers/joung-math-error-genai-literacy-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [quasi-experiment]
discipline: []
level: [higher ed]
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Joung tested a semester-long error-analysis activity in an undergraduate quantitative reasoning course. Students worked in small groups on worked solutions that the instructor had generated with GPT-4o and deliberately seeded with errors across fractions, decimals and percents, order of operations and introductory algebra. They judged each solution, explained the error and corrected it, then kept a personal verification checklist. Scores on both mathematical computation and GenAI error detection rose from pretest to posttest, with the larger gain on error detection. Students described checking their own reasoning before trusting AI output and saw the skill as useful elsewhere. With no comparison group, the gains are preliminary evidence consistent with a dual-development account, not a causal effect of the activity.

## Key Findings
1. **Each weekly task mixed correct and incorrect solutions.** Students had to decide whether a worked solution was sound and justify the decision rather than simply correct a known error.
2. **The errors were intentionally embedded.** They were designed to mirror common misconceptions and served as teaching material; they were not a record of mistakes the model produced unprompted.
3. **Both measured skills improved.** Computation and GenAI error-detection scores were higher at posttest than at pretest, with large standardized changes on both subscales.
4. **Error detection improved more.** The change was larger on the skill the activity targeted most directly than on general computation.
5. **Students named recurring error types.** Skipped or condensed steps were the most commonly reported pattern, followed by order-of-operations and fraction errors.
6. **Verification habits were the dominant strategy.** Most students reported solving a problem independently before examining the AI's reasoning step by step.
7. **Perceived transfer exceeded demonstrated transfer.** Students expected the skill to help in other courses and careers, but performance outside the mathematics course was not measured.

## What the study measured

Twenty of 30 enrolled students consented during the Spring 2026 semester: 11 male (55.0%) and 9 female (45.0%), aged 19 to 54 years (M = 23.6). Fourteen were under 25 (70.0%), five were between 25 and 34 (25.0%) and one was 54 (5.0%). Eighteen of the 20 completed both tests and entered the quantitative analysis. Most reported no prior GenAI use in a mathematics course (n = 18, 90.0%), while 16 (80.0%) reported using GenAI for schoolwork sometimes or often.

The weekly activities ran in class from January to April, about three and a half months, in groups of three or four students and lasted approximately 40 minutes. The instructor generated materials with GPT-4o between December 2025 and April 2026, reviewed them before use and told students how many errors to find when a solution contained more than one. Students classified each error as computational, conceptual or contextual and refined a personal verification checklist across the semester. Graded worksheets were collected into a portfolio binder checked at mid-semester and at the end.

The parallel-form instrument had 20 items: 10 computation problems and 10 ChatGPT-generated solutions to judge, explain and correct. Each part was scored out of 10. Pretest and posttest used different numerical values and contexts. Paired-samples t-tests compared subscale means after Shapiro–Wilk checks, and [[critical-thinking|critical]] evaluation was also explored through five open-ended survey questions analyzed with thematic coding.

## Gains and student accounts

Mathematical computation rose from M = 2.78 (SD = 2.05) to M = 6.39 (SD = 2.20), a mean gain of 3.61 (95% CI [2.50, 4.72]), t(17) = 6.88, p < .001, d = 1.62. GenAI error detection rose from M = 3.61 (SD = 2.28) to M = 7.72 (SD = 1.56), a mean gain of 4.11 (95% CI [2.98, 5.24]), t(17) = 7.68, p < .001, d = 1.81. Shapiro–Wilk results were W = 0.942, p = .313 and W = 0.936, p = .244. One student's computation score declined.

Portfolio completion averaged 97.50% (SD = 4.29%) at mid-semester and 94.61% (SD = 10.95%) at the end; 14 students (70.0%) achieved perfect completion at each checkpoint and 11 (55.0%) at both, with no significant change between checkpoints (W = 16.000, p = .441).

Among 20 survey responses, 14 students (70.0%) described working independently first, 2 (10.0%) relied on group collaboration and 4 (20.0%) reported other approaches. Skipped steps were named by 7 (35.0%), order of operations and fraction errors by 6 each (30.0%) and calculation errors by 3 (15.0%). Ten students (50.0%) said the activity improved understanding, 8 (40.0%) reported partial benefit and 1 (5.0%) reported none, leaving 18 (90.0%) who found it at least partly helpful. Sixteen (80.0%) expected the skill to transfer, 3 (15.0%) were uncertain and 1 (5.0%) saw limited domain-specific value.

## What this means for practice
- **Instructors.** Give students mixed sets of correct and incorrect worked solutions and require an explanation of the error, not only a corrected answer.
- **Instructors.** Ask students to solve independently before inspecting AI-generated reasoning, and have them maintain a checklist of the checks that actually caught errors.
- **Instructors.** Seed errors that reflect common misconceptions in the current course topic, so that detection practice reinforces taught content.
- **Researchers.** Add a comparison section and independent scoring before attributing the gains to error analysis rather than to normal instruction or test familiarity.

## Limitations
- The single-group pretest-to-posttest design has no comparison group, so general instruction, maturation, repeated exposure, testing effects and instructor support remain plausible explanations.
- The study used one course section of 30 enrolled students at one institution, with 20 consenting and 18 providing both tests, which limits precision and generalization.
- Some items contained more errors than intended because they were generated by AI and reviewed by one researcher; on those items, finding one error earned full credit.
- All responses were scored by one researcher with no inter-rater reliability check, and themes were developed by one coder who was also the course instructor.
- Transfer was self-reported. Performance in other courses or careers was not measured, and the authors treat transfer as perceived rather than demonstrated.

## Citation
Joung E (2026) Building critical GenAI literacy through mathematical error analysis. Front. Educ. 11:1892310. doi: 10.3389/feduc.2026.1892310.
