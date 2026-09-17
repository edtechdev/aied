---
title: "Evaluating AI Tutoring at the Speed of Innovation: Practitioner-Led Micro-Randomised Trials of an AI Tutoring Platform in GCSE Science"
created: "2026-09-15T10:30:00-04:00"
updated: "2026-09-17T02:27:38-04:00"
type: article
technology: [intelligent-tutoring]
assessment: [assessment, learning-gains]
sources: ['raw/papers/ai-tutoring-micro-rct-gcse-science-2026.md']
confidence: high
research_method: [randomized controlled trial, mixed methods]
discipline: [science education, biology education, chemistry education, physics education]
audience: [educators, researchers, teachers]
level: [secondary, k 12]
page_kind: [evaluation]
methods: [ai-ed-evaluation, rct]
systems: [edtech-platform]
---

> **Synthesis:** This four-week multisite [[rct|randomized controlled evaluation]] tested Medly, an AI-powered [[intelligent-tutoring]] platform for GCSE [[science-education]] revision, against business-as-usual [[self-directed-learning|self-directed]] revision in English secondary schools. Of 929 students completing baseline assessment, 644 completed post-testing, and allocation to the platform raised attainment on [[curriculum-design|curriculum]]-aligned questions (Hedges' g = 0.33, 95% CI 0.18 to 0.48) with positive estimates in [[physics-education|Physics]], [[chemistry-education|Chemistry]] and [[biology-education|Biology]]. The authors read this as a provisional causal signal rather than a definitive effect, given 30.7% attrition and curriculum-aligned rather than standardized outcomes. Their wider argument is that practitioner-led micro-RCTs matter for [[ai-ed-evaluation]] not because they are small, but because they make causal estimation repeatable as the technology itself changes.

## Key Findings

1. The trial randomized 929 students across three parallel [[discipline-specific-aied|subject-specific]] trials; 644 completed post-testing, an overall attrition rate of 30.7%, with post-test samples of 312 in Physics, 217 in Chemistry and 115 in Biology, and 332 intervention versus 312 control completers.
2. In the primary intention-to-treat analysis, the adjusted mean post-test score was 13.95 in the intervention group and 11.39 in the control group — an adjusted difference of 2.56 marks (95% CI 1.39 to 3.73), equivalent to Hedges' g = 0.33 (95% CI 0.18 to 0.48).
3. Subject-specific estimates were positive in all three sciences: Physics g = 0.31 (95% CI 0.11 to 0.51), Chemistry g = 0.32 (95% CI 0.06 to 0.58) and Biology g = 0.52 (95% CI 0.19 to 0.84); the subject-by-treatment interaction provided no evidence that the effect differed by subject.
4. There was no clear evidence of differential impact by disadvantage: the treatment-by-status interaction was 0.57 marks (95% CI -2.25 to 3.39), with stratified estimates of g = 0.28 (95% CI -0.04 to 0.59) among Pupil Premium students and g = 0.35 (95% CI 0.18 to 0.52) among non-Pupil Premium students.
5. Within the intervention group, each additional question answered was associated with approximately 0.18 additional post-test marks (95% CI 0.13 to 0.22), but because engagement was observed only after randomization the analysis is treated as associational and hypothesis-generating rather than causal.
6. Attrition was higher in the control arm (33.2%) than in the intervention arm (27.7%), a differential loss to follow-up that the authors flag as a potential source of bias.
7. Process-evaluation data were thin: only 6 of 39 [[teacher-role|teacher]] trials returned a process survey, and within that small sample four had attended platform-led training and two had not, while two set the platform as directed homework and four used it during lesson time.
8. The counterfactual was active rather than empty: teachers described business-as-usual revision involving Tassomai, Sparx Science, BBC Bitesize and printed materials, so the estimate concerns added value over an already technology-rich revision environment.
9. Outcomes were five questions per subject with a maximum score of 35; they were curriculum-aligned rather than standardized, pre- and post-tests used different items to reduce practice effects, and AI-generated marking was manually checked and amendable by the class teacher.
10. The intervention ran four weeks with an expected 30 minutes per activity per week per pupil in Years 9 and 10, with individual randomization handled by the WhatWorked Teachers platform independently of teachers and the research team.

## The Temporal Problem of Evaluating Educational AI

The paper's organizing problem is that educational AI develops on timescales that sit uneasily with conventional evaluation. The authors distinguish evaluation lag from *intervention drift*: while a large trial is designed, delivered, analyzed and published, the underlying models, interfaces, feedback routines, curriculum content and safeguards may all change, so an internally valid estimate can describe a configuration schools no longer encounter. Their proposed framing is that the intervention is best understood not as a fixed product but as a versioned configuration of technological capabilities, [[pedagogy|pedagogical]] functions and implementation practices at a particular moment. The distinction they draw is between technological implementation (which moves fast), instructional features such as adaptive practice, diagnostic [[feedback]] and [[scaffolding]] (which move more slowly), and pedagogical intention (slower still).

The [[research-methods-aied|methodological]] response they examine is rapid randomization as a cumulative architecture rather than a substitution of speed for rigor. Practitioner-led micro-RCTs are valued for repeatability — focused randomized comparisons embedded in routine practice, completed quickly, and repeated across teachers, schools, topics, cohorts and successive product versions. The authors sketch a progression from signal to replication to accumulation, in which successive trials test whether an estimate recurs under changed populations, contexts or versions, and cumulative synthesis retains individual estimates rather than letting a pooled mean obscure heterogeneity.

## Design, Comparator and Outcome Measurement

Medly links multiple layers of [[llm|large language models]] to an exam-curriculum-specific knowledge base, combining structured lessons and practice of extended written answers, adaptive identification of weaknesses, real-time difficulty adjustment, and marking against examination-board criteria. Control students received 30 minutes per week of self-directed revision on the same focal topic using resources of their choosing other than Medly. The focal content had already been taught, so the study examined revision support rather than replacement of classroom instruction, and the platform's randomization, data entry and automated class-level ANCOVA reporting were intended to remove allocation and analysis from teacher judgment.

The primary analysis modeled post-test attainment on treatment allocation and pre-test score in a mixed-effects framework accounting for school-level clustering, reporting Hedges' g with 95% confidence intervals across and within subjects. Pupil Premium status, proxied by free-school-meal eligibility, entered as a binary covariate and as a treatment-by-status interaction. Engagement was measured from platform logs as questions answered. The authors are explicit that threshold-based estimates among increasingly engaged participants should not be interpreted as complier average causal effects, because conditioning on post-randomization engagement does not by itself identify a causal effect of compliance.

## Results and Their Interpretation

The randomized contrast is modest in absolute marks and moderate in standardized terms: roughly one third of a standard deviation, which the authors call educationally meaningful *if replicated*. Their caution rests on four features of the evidence rather than on the point estimate. Attrition was substantial and mildly differential between arms; the assessments were not independently standardized; follow-up was only four weeks and captured short-term topic learning rather than persistence, transfer or examination performance; and process-evaluation data came from a small minority of participating teachers.

The engagement results illustrate the paper's discipline about inference. The positive association between questions answered and attainment is compatible with a treatment mechanism, but may equally reflect motivation, prior capability or access, so the authors keep the randomized intention-to-treat contrast as "the causal center of the evidence" and treat usage data as hypothesis-generating. Implementation findings identify technical friction — mobile-device access and login above all — and variation in how schools positioned the tool, which in a rapid cumulative model become features to modify and retest in the next randomized cycle rather than terminal findings.

## Limitations and the Adaptive Evidence Base

The limitations section names five constraints directly: missing post-test data for 30.7% of baseline participants; AI marking checked by teachers but not replaced by independent blinded assessment; short follow-up; process evidence from 6 of 39 teacher trials; and engagement analyses vulnerable to post-randomization selection. A final limitation is definitional — the study evaluates one configuration of one platform at one point in its development, which is precisely the problem the paper's wider argument addresses. Funding came from Medly, which commissioned the evaluation, and the authors state no other competing interests.

The constructive claim is that these limits do not make an initial estimate uninformative; they define what the next evaluation cycle must test more securely. The mature question shifts from "what is the effect of this platform?" to "what distribution of effects is produced when this evolving AI-supported pedagogical approach is implemented across pupils, teachers, contexts and technological versions?" For developers the proposal makes evaluation part of responsible product development rather than a certification exercise conducted after the fact; for schools it offers a way to contribute to a shared evidence base while testing questions in authentic settings; for evaluators it requires common protocols, secure randomization, transparent reporting, consistent core outcomes and explicit version documentation.

## Connected Concepts

- [[intelligent-tutoring]]
- [[rct]]
- [[learning-gains]]
- [[ai-ed-evaluation]]
- [[science-education]]
- [[biology-education]]
- [[chemistry-education]]
- [[physics-education]]
- [[assessment]]
- [[educational-measurement]]
- [[edtech-platform]]
- [[personalized-learning]]
- [[limitations-in-aied-research]]

## Connected Articles

- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: AI Tutoring with Khanmigo in a Two-Year School Experiment
- [[ai-tutoring-quality-k12-methodologies-2026]] — Methodologies for Improving the Quality of AI Tutoring in K-12 Education
- [[chatgpt-hints-human-tutor-learning-gains-2024]] — ChatGPT-generated help produces learning gains equivalent to human tutor-authored help on mathematics skills
- [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024]] — Tutor CoPilot: A Human-AI Approach for Scaling Real-Time Expertise
- [[genai-educational-outcomes-meta-analysis]] — Generative AI technologies and educational outcomes: a comprehensive meta-analysis comparing traditional and AI-driven approaches
- [[auto-marking-short-answer-science-2026]] — Auto-marking short answer questions in science: The foundational years of transformer-based models from BERT to GPT-4
- [[ai-science-chemistry-education-systematic-review-2025]] — Artificial Intelligence in Science and Chemistry Education: A Systematic Review

## Citation

Harrison, W., Khowaja, R., Dobson, E., Uwimpuhwe, G., & Higgins, S. (2026). [*Evaluating AI Tutoring at the Speed of Innovation: Practitioner-Led Micro-Randomised Trials of an AI Tutoring Platform in GCSE Science*](https://arxiv.org/abs/2609.14789). arXiv preprint.