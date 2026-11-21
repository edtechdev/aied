---
title: "Effectiveness of an AI-Based Adaptive Assessment System for Conceptual Mastery in Grade 8 Mathematics: Protocol for a Cluster-Randomised Trial with Simulation-Based Design Checks"
created: "2026-11-21T08:22:09-05:00"
updated: "2026-11-21T08:22:09-05:00"
type: article
published: "2026"
discipline: [math education]
foundations: [ai-education, curriculum-design]
pedagogy: [mastery-learning, scaffolding, self-regulated-learning, retrieval-spacing-interleaving]
technology: [adaptive-learning, knowledge-tracing, student-modeling, personalized-learning]
assessment: [formative-assessment, automated-assessment, item-response-theory, feedback]
methods: [rct, quantitative-research]
research_method: [experiment, instrument development, system development]
audience: [researchers, assessment designers, instructional designers, curriculum designers]
level: [k 12, middle school]
page_kind: [framework]
sources: ['raw/papers/ayasrah-adaptive-assessment-conceptual-mastery-2026.md']
confidence: medium
evidence_context: educational
source_depth: full text
source_url: "https://doi.org/10.3390/educsci16111942"
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-21"
    agent: hermes-agent
connected_concepts: [adaptive-learning, knowledge-tracing, student-modeling, formative-assessment, assessment-validity, rct, item-response-theory]
connected_articles: []
---

> **Synthesis:** Ayasrah, Hasan and Alasem ask whether adaptive selection of assessment tasks, combined with diagnostic, misconception-specific [[feedback|feedback]], improves Grade 8 students' conceptual mastery in mathematics beyond what equal time on conventional digital practice achieves. The paper is a protocol: it specifies a two-arm cluster-randomized trial in schools following the Cambridge Lower Secondary Mathematics framework, where Grade 8 mathematics teachers are randomized within schools to AIMAS-8 or to an active control using the same item bank in fixed order with worked solutions. Both arms receive twelve 30-minute sessions on linear relationships; the primary outcome is an independently written conceptual mastery test at week 7, with transfer, retention at week 11 and baseline moderation as secondary outcomes. No participant data have been collected, so there are no results about learning. What the paper reports instead are pre-trial computational design checks: a cluster-based sample-size calculation, simulations of the [[student-modeling|learner model]] and selection policy, and a Monte Carlo evaluation of the planned analysis. Those simulations found that adaptive selection classified mastery no better than a fixed sequence and reduced curriculum coverage, which led to a coverage safeguard. Every figure reported here is a design parameter or a simulation assumption, never a finding.

## Key Findings

- **A protocol, not a result.** No participants have been recruited and no student or teacher outcome data exist; the contribution is a transparent design, including a prespecified analysis plan and open code.
- **The comparison isolates adaptivity.** Both arms use the same platform, item bank and session time, and differ only in how items are sequenced, how specific the feedback is, and what teachers see.
- **The target effect is small.** The trial is powered to detect about a quarter of a standard deviation on an independently written conceptual test, which the authors treat as the smallest difference worth adoption costs.
- **Simulation did not favor the adaptive policy.** Under the stated assumptions, it classified mastery no more accurately than a fixed sequence of the same length, and its next-response predictions were less well calibrated.
- **Coverage fell under prerequisite gating.** Learners averaged about six of eight concepts under adaptive selection, against all eight under a fixed sequence, so a coverage floor was added.
- **The analysis pipeline behaved as intended.** Across simulated trials it held a nominal error rate when there was no effect and recovered a known generating effect without appreciable bias.

## A time-matched active control

The trial randomizes Grade 8 mathematics teachers, together with all their Grade 8 classes, within schools blocked by school; a school that will not accept within-school randomization is randomized whole within a matched pair. Both arms use the same platform, the same item bank and the same six-week unit for the same timetabled time: twelve 30-minute sessions, each with three minutes to log in and state the week's focus, up to 25 minutes of items, and a two-minute reflection prompt. Teachers circulate but do not teach the whole class, and both arms receive three hours of training from the same trainers plus a weekly ten-minute check-in. The control arm gets correctness plus a worked solution and percentage-correct topic summaries; [[adaptive-learning|AIMAS-8]] adds misconception-specific feedback, a three-level hint ladder, spaced follow-up isomorphs, and a dashboard showing concept mastery with uncertainty intervals, misconception tags and re-teaching flags. Adherence is defined in advance as at least nine of twelve sessions with at least 20 minutes on task, and fidelity is assessed from session logs and two observed sessions per teacher.

Planning assumes 46 recruited teacher clusters, about 50 eligible students per teacher, roughly 2300 students invited, 85 percent consent, 15 percent student-level attrition and 10 percent cluster attrition, leaving about 1500 students in the primary analysis. At that size the design has 80 percent power for a 0.25 standard deviation difference, and 0.67 power for 0.20; if the cluster-level variance explained by the pretest were 0.40 rather than 0.60, 56 clusters would be required. The primary outcome is a 24-item conceptual mastery test written by a team with no access to the item bank, with constructed responses scored 0–2, and three parallel forms placed on a common scale. A pilot of about 300 students in non-trial schools will calibrate items, set mastery thresholds and tune the selection weights before the main trial. Outcome items are deliberately built to demand explanation, translation between representations, error analysis and justification rather than computation alone, in line with the [[assessment-validity|validity]] argument in the protocol.

## What the design checks showed

No outcome data exist yet; all checks reported in the results section are computational, and they describe the behavior of the design rather than any effect on learning. The reference implementation was run on 300 simulated learners per policy, each completing six sessions of 15 items drawn from a 384-item bank, with item parameters perturbed from their generating values and learners improving during practice. Mastery-classification accuracy relative to the simulated mastery status was identical under both policies (0.836); among classifications the model decided, accuracy was 0.96 under both, but the model returned insufficient evidence for more than half of the concept estimates at this item budget. Next-response predictions were less well calibrated under the adaptive policy (expected calibration error 0.045 versus 0.006), because estimates lagged behind simulated growth and items were selected on noisy parameters. Prerequisite gating reduced mean coverage to 6.3 of the eight concepts per learner, compared with 8.0 under the fixed sequence. Exposure control spread item use more broadly — 7 percent of items went unused, against 77 percent under the fixed sequence — but the predefined exposure threshold was exceeded for 35 percent of items, and no item or isomorph family was repeated within a session.

The authors treated these as design findings and changed the system: a coverage floor guaranteeing at least two items per session on the concept being taught that week was added, the drift parameter will be tuned and item parameters shrunk toward family means, and the item bank will be enlarged or the exposure weight raised. A separate Monte Carlo evaluation ran the analysis pipeline on 200 simulated trials for a null scenario and a generating effect of 0.20 standard deviations. Under the null the primary analysis rejected at a rate of 0.050 and its intervals covered zero in 94.5 percent of replications; under the alternative it recovered the generating effect without appreciable bias (mean standardized effect 0.196 against an input of 0.20) and rejected in 96 percent of replications. Applied to a single simulated dataset, the estimated difference ranged from 0.23 to 1.29 scale points across reasonable specifications, which is why one primary model is fixed in advance and every sensitivity estimate is reported alongside it.

## Why the null result would still matter

The trial estimates the effect of a package, not of adaptivity alone: adaptive selection, diagnostic feedback and the dashboard change together, so a positive result cannot be attributed to any one component. A factorial design separating selection from feedback type would need roughly twice as many clusters. Interpretation is nonetheless prespecified. A positive primary effect maintained at week 11 would indicate that model-based sequencing and diagnosis add learning beyond immediate feedback and worked solutions; a gain that fades would point to short-lived benefits; a gain on the conceptual test without one on transfer would suggest benefits confined to formats close to the unit. If the interval falls within a practically negligible band, the authors say they will favor simpler, cheaper non-adaptive assessment, while a wide interval spanning both zero and the target effect will be called inconclusive rather than "no effect".

Equity enters in three places: a confirmatory interaction tests whether the effect depends on baseline achievement, [[knowledge-tracing|learner-model]] calibration and classification are reported separately for learners with English as an additional language or special educational needs, and outcome items are screened for differential item functioning. The design deliberately keeps generative AI away from students — all feedback is expert-authored and reviewed by two qualified mathematics teachers — and the [[student-modeling|learner model]] exposes uncertainty and permits logged teacher override. The authors are explicit that the simulation checks describe the behavior of the design and code under stated assumptions, not the performance of the system in classrooms, and that whether AIMAS-8 improves learning can only be established once the [[rct|trial]] is completed. [[formative-assessment|Formative assessment]] supplies the causal chain the trial measures; [[item-response-theory|item response theory]] supplies the measurement machinery.

## What this means for practice

- **Assessment designers.** Power for the smallest worthwhile effect rather than a convention: the protocol treats about a quarter of a standard deviation as the smallest difference that would justify adoption costs.
- **Researchers.** Report unfavorable design checks openly; the authors added a coverage safeguard after their own simulation showed adaptive selection losing to a fixed sequence.
- **Teachers.** Treat mastery labels as provisional until several distinct pieces of evidence accumulate; the system withholds judgment when evidence is thin.
- **Designers.** Monitor curriculum coverage alongside accuracy, because prerequisite gating can quietly narrow what students reach.
- **Instructional designers.** Keep student-facing feedback human-authored; AIMAS-8 uses no live generative model in front of students.

## Limitations

- **No outcome data.** This is a protocol; the trial has not been run, so nothing here establishes whether AIMAS-8 improves conceptual mastery, transfer or retention.
- **The intervention is a package.** Adaptive selection, diagnostic feedback and the teacher dashboard change together, so a positive result cannot be attributed to adaptivity alone.
- **The primary outcome is new and proximal.** It is a researcher-developed test close to the taught unit, and its validity depends on the pilot, so effects may be larger than on distal measures.
- **Recruitment is the feasibility risk.** The plan requires 46 teachers in schools with at least two eligible teachers each; with 30 clusters the minimum detectable effect would rise to about 0.29 of a standard deviation.
- **The simulations rest on assumptions.** They show how the procedures perform under stated learning and calibration-error assumptions, not how the system will behave in classrooms.

## Citation

Ayasrah, K., Hasan, R., & Alasem, R. (2026). [Effectiveness of an AI-Based Adaptive Assessment System for Conceptual Mastery in Grade 8 Mathematics: Protocol for a Cluster-Randomised Trial with Simulation-Based Design Checks](https://doi.org/10.3390/educsci16111942). *Education Sciences, 16*(11), 1942.
