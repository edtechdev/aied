---
title: "The relationship between AI-assisted learning and academic performance through learning engagement"
created: "2026-11-10T18:19:20-05:00"
updated: "2026-11-10T18:30:00-05:00"
type: article
page_kind: [synthesis]
research_method: [survey, structural equation modeling]
evidence_context: educational
discipline: []
level: [higher ed, undergraduate]
audience: [instructors, researchers, administrators]
sources: ['raw/papers/yuan-ai-assisted-learning-engagement-performance-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1849243"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [limitations-in-aied-research]
pedagogy: [student-engagement, self-regulated-learning, self-determination-theory]
technology: [generative-ai, intelligent-tutoring, ai-technologies]
assessment: [self-report-measures, learning-gains]
methods: [quantitative-research]
institutions: []
ethics: []
---

> **Synthesis:** Yuan, Xiaoying and Wenmin (2026) surveyed 438 [[higher-ed|university]] students in Shanxi Province, China, once, and fitted a structural model in which [[student-engagement|student engagement]] carries part of the association between [[ai-technologies|AI-assisted learning]] and academic achievement. All three constructs were self-rated on five-point [[self-report-measures|self-report]] scales: a new five-item AI-assisted learning measure, nine items adapted from the Utrecht Work Engagement Scale for Students, and four items of perceived [[learning-gains|academic performance]], with a self-reported GPA item set aside rather than modeled. Paths ran at β = 0.52 from AI-assisted learning to engagement, β = 0.41 from engagement to performance and β = 0.18 direct, giving a standardized indirect effect of 0.21 (95% bootstrap CI 0.15, 0.28) against a total of 0.39 — partial mediation. The paper is explicit that one cross-sectional wave of self-report from the same respondents cannot order the variables, and its own reading is that AI's value depends on whether use deepens [[self-regulated-learning|self-regulation]] rather than supplying ready answers. Read it as a well-measured association among three perceptions, not as evidence that engagement transmits a causal effect.

## Key Findings

1. 438 valid responses came from 512 submitted questionnaires (85.5%), gathered March 2025 to January 2026 by convenience and snowball sampling; 56.2% were female, mean age 20.8 (SD = 2.1), and 78.5% undergraduates.
2. AI-assisted learning correlated with engagement at r = 0.52 (95% CI 0.45, 0.59) and with academic performance at r = 0.36 (0.28, 0.44); engagement and performance correlated at r = 0.47 (0.39, 0.54).
3. Structural paths ran at β = 0.52 (B = 0.489, CR = 12.23) from AI-assisted learning to engagement and β = 0.41 (B = 0.448, CR = 8.00) from engagement to academic performance.
4. The direct path held at β = 0.18 (B = 0.185, p = 0.026, 95% CI 0.02, 0.34) — a lower bound barely above zero, and the sole basis for calling the mediation partial.
5. The standardized indirect effect through engagement was 0.21 (95% bootstrap CI 0.15, 0.28, p < 0.001) against a total effect of 0.39 (0.30, 0.48), from 5,000 bias-corrected resamples.
6. Fit was CFI = 0.95, TLI = 0.94, RMSEA = 0.05 and SRMR = 0.04, and the model explained 27% of variance in engagement and 26% in academic performance.
7. Cronbach's α, composite reliability and average variance extracted were 0.88, 0.90 and 0.64 for AI-assisted learning, 0.92, 0.93 and 0.60 for engagement, and 0.86, 0.88 and 0.65 for performance.

## What the instrument set actually measures

The design is a [[quantitative-research|quantitative]] cross-sectional survey on Wenjuanxing, distributed through instructors, student representatives and WeChat and QQ groups. AI-assisted learning is a five-item scale built for the study — use frequency on academic tasks, coursework efficiency, reliance on difficult problems, understanding complex concepts, perceived learning enhancement — blending reported behavior with perceived usefulness, which the paper flags. Engagement is nine items adapted from the Utrecht Work Engagement Scale for Students, covering vigor, dedication and absorption. Academic performance is four Likert items: above-average performance, satisfaction, consistent good grades, performance relative to peers. A recent GPA or class rank was also reported, but was kept as background and excluded from the construct, so the outcome is perceived performance, not a transcript. A 30-student pilot refined wording; responses under 120 seconds, straight-lining and failed attention checks were dropped.

## The model and what the coefficients can carry

The authors frame the model with three traditions: engagement theory's behavioral, emotional and cognitive dimensions; [[self-determination-theory|self-determination theory]], where timely [[feedback]] and personalized explanation support autonomy and competence; and cognitive load accounts of extraneous burden. The estimation is competent for its type — confirmatory factor analysis, discriminant validity against the square root of average variance extracted, bootstrapped intervals, and an over-identified rather than saturated model, which is why fit indices are reportable. The coefficients are modest: the direct association is β = 0.18 with an interval of 0.02 to 0.34, so the claim that AI-assisted learning retains an effect once engagement is controlled rests on an estimate whose plausible range includes practical nullity. Everything the model says is covariance at one moment among students who chose to answer an open link.

## Engagement as the proposed mechanism, and its rivals

The argument is that [[ai-technologies|AI tools]] do not improve outcomes by existing; they do so when they activate behavioral effort, emotional investment and cognitive involvement, which is why engagement sits between use and performance. The paper concedes the rival explanation: students with stronger academic skills, better strategies or more confidence may both use AI more strategically and rate themselves higher, and reverse directionality cannot be excluded. It adds that [[generative-ai|generative tools]] can support questioning, comparison and revision, or replace thinking when they supply answers accepted without scrutiny — the [[cognitive-offloading|offloading]] failure mode. Its recommendations follow that distinction: feedback that diagnoses errors rather than delivering solutions, personalization designed as adaptive scaffolding, and tasks requiring verification against course materials. Those are pedagogical conditions the survey never measured, which is why the model cannot show they produced the association it estimates.

## Reading "partial mediation" honestly

Partial mediation sounds like a finding about mechanism, but in a one-wave design it is arithmetic on a covariance matrix: 0.39 total, 0.21 indirect, 0.18 direct. The label turns on the direct path's interval excluding zero; here it excludes zero by 0.02, so another sample of 438 students from the same province could plausibly have produced full mediation, leaving the paper's account of a residual direct route — efficiency, information access, problem-solving support — with nothing to explain. The stronger contribution is measurement discipline: a GPA item collected and deliberately kept out of the outcome construct, a new scale piloted before administration, attention checks, and an explicit statement that Harman's single-factor test below 40% of variance is preliminary rather than proof — [[limitations-in-aied-research|limitations]] stated as limits rather than as ritual.

## What this means for practice

- **Instructors.** Design AI use for engagement, not access: have students generate alternative explanations, find gaps in their understanding, compare output with course material and revise their answers. Treat self-rated improvement as a prompt to check, not an outcome.
- **Faculty developers.** Make verification explicit in assignment design — require students to justify an answer, name where AI output was wrong, and show what they changed — since the paper's own reading is that benefit depends on how output is checked.
- **Administrators.** Pair tool access with task-level guidance on acceptable use and disclosure, discipline-specific examples, and evaluation criteria built on learning quality and equity rather than frequency of use or time saved.
- **Researchers.** Report the direct path's interval in any single-survey mediation model, and ask whether its lower bound is meaningfully above zero before naming the result partial mediation.

## Limitations

- One cross-sectional wave, collected March 2025 to January 2026: no temporal ordering among AI-assisted learning, engagement and performance can be established.
- All three constructs were self-reported by the same 438 respondents at one sitting; academic performance is four Likert items of perceived performance, with the GPA item excluded from the construct.
- Convenience and snowball sampling without referrer identifiers left seed counts unreconstructable, and no response rate was calculable because the number who saw the link is unknown.
- AI-assisted learning is modeled as one general practice spanning [[generative-ai|generative AI]], writing assistants, [[intelligent-tutoring|intelligent tutoring systems]] and adaptive tools; the measure does not distinguish model versions, purposes of use, output quality or verification behavior, and the five-item scale was validated only in this sample.
- Harman's single-factor test explained less than 40% of total variance, but with no marker variable available, residual common method variance remains possible by the authors' own account.

## Citation

Yuan, F., Xiaoying, L., & Wenmin, L. (2026). [*The relationship between AI-assisted learning and academic performance through learning engagement*](https://doi.org/10.3389/fpsyg.2026.1849243). Frontiers in Psychology, 17:1849243.
