---
title: "Use of a GenAI patient for medical communication training for undergraduate medical students: a quasi-experimental study"
published: "2026-10-19"
created: "2026-10-28T12:23:31-04:00"
updated: "2026-10-28T12:23:31-04:00"
type: article
foundations: [ai-education]
pedagogy: [professional-training, anxiety-and-stress]
technology: [simulation, conversational-ai, generative-ai]
assessment: [self-assessment, self-report-measures]
methods: [quantitative-research]
research_method: [quasi-experiment]
level: [undergraduate, higher ed]
audience: [medical educators, instructors]
page_kind: [evaluation]
sources: ['raw/papers/jongkind-genai-patient-medical-communication-2026.md']
source_url: "https://doi.org/10.3389/feduc.2026.1933319"
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Jongkind, Pool, Verberne, Meinema, Geerlings and Henselmans (2026) asked whether voluntary practice with a [[conversational-ai|generative AI]] patient before a first [[simulation|standardized-patient]] class would reduce [[anxiety-and-stress|nervousness]] and raise self-assessed preparedness, [[self-efficacy]] and competence among first-year medical students in Amsterdam. Allocation followed the class schedule rather than randomization: the 182 students taught in the first week received standard e-learning and the 201 taught in the following two weeks were offered a retrieval-augmented GPT-4o patient, of whom 49 had at least one conversation of more than ten questions. Among the 180 students who answered the questionnaire (84 control, 96 intervention, 47% response), nothing differed on any primary outcome: nervousness median 4.0 in both arms (Cliff's delta 0.03, 95% CI [-0.14, 0.19], p = 0.752), preparedness 32.0 vs 31.5, self-efficacy 10.0 vs 10.0 and competence 28.0 vs 29.0 (delta -0.05), with every interval spanning zero. Restricting the comparison to the 49 users changed nothing. This is a null result for a single optional text-only rehearsal, and it says nothing about communication skill, which the study never observed.

## Key Findings
1. In the intention-to-treat comparison (96 intervention vs 84 control respondents), nervousness did not differ (median 4.0 vs 4.0; Cliff's delta 0.03, 95% CI [-0.14, 0.19], p = 0.752), nor did preparedness (32.0 vs 31.5; delta 0.04, 95% CI [-0.13, 0.20], p = 0.682).
2. Self-efficacy (10.0 vs 10.0; delta 0.00, 95% CI [-0.16, 0.16], p = 0.987) and self-perceived competence (28.0 vs 29.0; delta -0.05, 95% CI [-0.21, 0.12], p = 0.585) were equally flat, and every point estimate fell below the 0.147 boundary the authors use for a negligible effect.
3. The per-protocol comparison of the 49 users with the 84 controls agreed: nervousness p = 0.575, preparedness p = 0.492 (33.0 vs 31.5), self-efficacy p = 0.254 (9.0 vs 10.0) and competence p = 0.938, with Cliff's delta from -0.12 to 0.07 and all intervals including zero.
4. The post-hoc three-group test (control, users, non-users) was non-significant on all four outcomes (p = 0.815, 0.742, 0.107 and 0.679), and students offered the tool who never used it did not differ from controls on any outcome (all p >= 0.22).
5. Of the 96 students allocated to the intervention, 49 had at least one qualifying conversation while 47 did not; of the 49 users, 35 held one conversation, 8 held two, 1 held three, 4 held five and 1 held more than five. The per-protocol arm held 49 users against a prespecified requirement of 70 per group, leaving a minimum detectable Cliff's delta of 0.29.
6. Among users, 71% called the patient a valuable addition to standard preparation, 63% wanted to use it in future, 55% thought it good preparation and 51% trusted it; of 19 non-users who gave a reason, 6 cited coursework or exams, 6 technical or login problems, 4 that the tool was unnecessary and 3 that they did not know it existed.

## A null that three comparisons agree on

The primary analysis was intention-to-treat, comparing all 96 respondents allocated to the intervention with all 84 controls, which is the honest frame when half the arm never opens the tool. The per-protocol contrast isolates the 49 users, and the post-hoc three-group split separates users from non-users. All three point the same way, and none of the 19 individual questionnaire items reached p < 0.05 in either analysis after Benjamini-Hochberg correction. The instruments were purpose-built 7-point scales: three nervousness items (alpha 0.70 in the full sample, 0.69 in the compared groups), six preparedness items, two self-efficacy items and five competence items tied to the VALTIS and OBV acronyms taught in class. Prior standardized-patient practice was reported by 8 of 84 controls (9.5%) and 4 of 49 users (8.2%), with no difference across the three groups (p = 0.60). Both groups rated their competence very highly, higher than lecturers had observed in earlier cohorts, so a ceiling in the measure may have compressed any difference.

## Why one optional text conversation could not move these outcomes

The intervention was designed around part-task practice, repeated effortful rehearsal and psychological safety. In use it delivered little of the repetition: most users rehearsed once, no feedback followed any conversation, and only one patient case existed. Practice was asynchronous text against a synchronous, observed and recorded encounter with peers and a trainer present, so the channel students feared, nonverbal and real time, was never rehearsed. Students named the gap themselves: of 32 who proposed improvements, 7 found the answers too short, repetitive or insufficiently varied, 4 asked for voice or a visible face, 4 for more cases and 3 for feedback, while 14 of 34 who commented on what they valued named the chance to rehearse. Access blocked others: 6 of 19 non-users hit technical or login problems and 3 did not know the tool was available.

The authors argue the null is what the dosage and the modality predict, rather than evidence that the format cannot work. That reading is plausible and fits the qualitative data, but it is a discussion claim, not a tested mechanism: engagement was self-selected and self-reported.

## What the null does not license

The study cannot show that a generative AI patient fails to teach communication, because it never measured communication. Everything reported is self-report, and the paper itself notes the poor correlation between self-assessed and observed competence documented in health professions education. It cannot rule out small effects either: with 49 users the design could only detect a Cliff's delta of about 0.29. What it does establish is narrower and firmer: an optional, unfedback, single-case, text-only rehearsal over one to two weeks changed nothing measurable in how nervous or prepared first-year students felt. The closing word "promising" rests on satisfaction ratings from the 49 students who chose to use the tool, which is a claim about acceptability, not about learning. Engaged users showed no outcome advantage the full sample lacked, so there is no subgroup signal to report; the only user-specific data are experience ratings.

## What this means for practice

Instructors should not count on optional text rehearsal to settle nerves before a first standardized-patient encounter, and should not read low uptake as rejection of the format, since half the arm never tried it and the reasons given most often were competing coursework and login trouble. If a program adopts this format, the evidence supports a required minimum number of conversations, several cases, feedback attached to each conversation, and judging the result on observed performance rated by trainers or standardized patients rather than on self-report. The fidelity gap also matters: a text channel rehearses question content but not turn taking, silence or the visible presence of an observer, which is where students said their nervousness lived.

## Limitations

- The per-protocol comparison was underpowered by design, with 49 users against a prespecified 70 per group and a minimum detectable Cliff's delta of 0.29.
- All outcomes are self-reported on purpose-built items, with a ceiling in both groups and alpha 0.70 on the nervousness items, so the measures may be insensitive rather than the intervention inert.
- Allocation by class schedule put week one in control and the next two weeks in intervention, and trainers knew the allocation while students could not be blinded, so week, cohort and condition are confounded.
- Only 180 of 383 students responded (47%), users were self-selected among respondents, uptake was self-reported, and the study ran at one institution with one patient case over three weeks in February and March 2025.

## Citation

Jongkind, R., Pool, J., Verberne, E., Meinema, J., Geerlings, S., & Henselmans, I. (2026). [*Use of a GenAI-patient for medical communication training for undergraduate medical students: a quasi-experimental study*](https://doi.org/10.3389/feduc.2026.1933319). *Frontiers in Education*, 11, 1933319.
