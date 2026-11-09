---
title: "Toward calibrated AI readiness in K-12 school-based practice: the roles of AI-related epistemic vigilance capacity and governance clarity"
created: "2026-11-09T09:35:00-05:00"
updated: "2026-11-09T10:20:00-05:00"
type: article
page_kind: [evaluation]
research_method: [survey]
evidence_context: educational
level: [k 12]
audience: [instructors, administrators, policymakers]
sources: ['raw/papers/song-calibrated-ai-readiness-k12-2026.md']
source_url: "https://doi.org/10.3389/feduc.2026.1946896"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-09"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-literacy, teacher-ai-competency]
methods: [quantitative-research]
institutions: [governance]
ethics: [trust-calibration, automation-bias]
---
> **Synthesis:** In a two-phase study of [[k-12|K-12]] school-based professionals, what tracked readiness to use AI responsibly was not professionals' [[motivation|motivation]] to keep learning about AI but their capacity to evaluate what it produces and clarity about what the organization expects. Among 425 practicing professionals — school psychologists, counselors, supervisors, teachers, and [[special-education|special education]] staff — a [[quantitative-research|structural equation model]] found AI-related epistemic vigilance capacity the strongest correlate of calibrated AI readiness (β = .675, p < .001), followed by [[governance|governance clarity]] (β = .270, p < .001), with autonomous regulatory motivation failing to reach significance (β = .076, p = .156); together the three predictors explained 64.2% of the variance. A one-month online pilot with 25 school psychologists and counselors then raised self-reported readiness from a pre-training mean of 4.20 to 4.84 on a five-point scale, yet the size of each participant's gain was unrelated to how well they reasoned through scenario tasks (Spearman's ρ = −.02, p = .906). The gap between feeling more ready and reasoning more carefully is the study's most useful warning for anyone designing AI professional development.

## Key Findings

1. **Evaluative capacity, not motivation, carried the model.** AI-related epistemic vigilance capacity predicted calibrated AI readiness at β = .675 (p < .001), the strongest path in the Phase 1 structural model.
2. **Governance clarity held its own.** Clear organizational expectations predicted readiness at β = .270 (p < .001) after accounting for epistemic vigilance capacity and autonomous regulatory motivation.
3. **Wanting to learn responsibly was not enough.** Autonomous regulatory motivation was not a significant predictor (β = .076, p = .156), and it did not moderate the vigilance–readiness relationship (β = −.024, p = .659).
4. **The three predictors explained 64.2% of the variance** in calibrated AI readiness, modeled as a second-order factor over verification orientation, ethical boundary clarity, and accountability ownership (robust CFI = .943, robust RMSEA = .060).
5. **Guidance was the scarce resource.** Governance clarity averaged 3.30 (SD = 1.22) against 4.48 (SD = 0.67) for epistemic vigilance capacity; only 143 of 425 respondents (33.6%) reported a clear written AI policy, while 150 (35.3%) had informal guidance only and 58 (13.6%) had none.
6. **The pilot moved self-reports.** In Phase 2, the nine-item readiness composite rose from M = 4.20 (SD = 0.52) to M = 4.84 (SD = 0.18), with 21 of 25 participants (84.0%) increasing, 1 (4.0%) unchanged, and 3 (12.0%) decreasing.
7. **Self-reported gain and applied reasoning did not converge.** Change in self-reported readiness showed essentially no association with the scenario-based reasoning index (Spearman's ρ = −.02, p = .906), whose observed scores spanned 8 to 13 on a 0-to-13 scale.

## What the study measured

The paper builds a construct it calls calibrated AI readiness: a professional's readiness to determine when AI-generated information should be verified, modified, used, or rejected while keeping ethical boundaries and accountability for the decision. It is narrower than [[ai-literacy|AI literacy]] and distinct from confidence or [[trust-calibration|trust calibration]] in a single task; the difference matters because school work involves incomplete information, competing interpretations, and legal exposure under IDEA and FERPA. Phase 1 surveyed 425 professionals recruited through public district directories between April and May 2026, using a 10- to 15-minute Qualtrics instrument and study-specific, five-point Likert scales for all four constructs. The item-level structural equation model used robust maximum likelihood with full-information maximum likelihood for missing data and fit acceptably: scaled χ²(126) = 275.51, robust CFI = .943, robust RMSEA = .060, with loadings from .603 to .861.

## What predicted readiness, and what did not

Two of three hypotheses held. Epistemic vigilance capacity — the perceived ability to check evidence, spot uncertainty, judge sources, and regulate reliance — produced the largest standardized path (B = 1.128, SE = .214, β = .675). Governance clarity, meaning organizational expectations that are understandable, accessible, and specific enough to guide practice, followed at B = .452, SE = .107, β = .270. The third predictor, autonomous regulatory motivation, drew on [[self-determination-theory|self-determination theory]] and measured whether professionals found responsible AI use personally meaningful; it averaged 3.54 (SD = 1.19) and did not predict readiness once the other two constructs entered. The exploratory moderation test added nothing: the interaction was B = −0.020, SE = 0.044, β = −.024, p = .659, and explained variance moved from R² = .431 to R² = .432. Direction is unresolved — a cross-sectional survey cannot say whether clearer guidance produces readiness or ready professionals read their guidance more charitably — but one pattern stands out: respondents trusted their own evaluative capacity more than their institutions' instructions.

## The pilot and the convergence problem

Phase 2 converted the framework into a one-month, four-session training program, roughly one hour per session, with materials on Moodle, delivery over Zoom, and surveys plus scenario tasks in Google Forms. The 25 completers were 15 school psychologists (60.0%) and 10 school counselors (40.0%); 76.0% had prior AI exposure through a workshop, webinar, or formal course. Self-reported readiness rose across all three domains — verification orientation 4.03 to 4.76, ethical boundary clarity 4.17 to 4.87, accountability ownership 4.39 to 4.89 — and the author flags ceiling effects, with post means near the top of the scale. The scenario evidence was more textured. Every participant identified a [[privacy|privacy]] or confidentiality concern and removed a student's name from a rewritten prompt, but only 60.0% also removed diagnostic or disability-related language. The share describing a concrete checking or contextualization step before using AI suggestions rose from 52.0% in Session 1 to 68.0% in Session 4, while the share naming suggestions as generic or insufficiently individualized rose from 72.0% to 80.0% — more caution, not simple rejection. In Session 3, all 25 assigned final responsibility to the human professional, 20 (80.0%) wrote a substantive rule to prevent mistakes, and the risks named included hallucination, poor alignment, over-reliance, and [[automation-bias|automation bias]]. None of it tracked the self-report gains.

## What this means for practice

- **Instructors and professional development leaders.** Teach the evaluation move explicitly — check an AI claim against a reliable source, name the assumption it rests on, and state whether the output should be used, changed, or rejected — because perceived evaluative capacity, not motivation, was the construct tied to readiness at β = .675.
- **Instructors.** Rehearse prompts that carry sensitive educational information, not just identifiers: participants stripped a student's name far more consistently than diagnostic or disability-related detail.
- **Administrators.** Publish AI guidance specific enough to act on — permitted tools, prohibited student data inputs, documentation standards, and decisions reserved to humans — since governance clarity predicted readiness independently of individual capacity and averaged only 3.30 on the five-point scale.
- **Researchers.** Score applied reasoning alongside self-report in any AI training evaluation; here the two measures were unrelated (ρ = −.02), so a satisfaction-style post-survey would have reported success the scenario tasks did not corroborate.

## Limitations

- Phase 1 was cross-sectional, so no causal claim about epistemic vigilance, governance clarity, or motivation is possible; recruitment through public district directories with voluntary participation invites selection bias toward professionals already interested in AI.
- All scales were developed for this study with iterative expert review from one educational methodologist and two K-12 teachers, but no quantitative content-validity index was calculated and no cognitive interviews were run.
- Verification orientation's composite reliability was .694 and its AVE .432, and the Fornell–Larcker criterion was not satisfied for that factor, so the strong vigilance–readiness path may partly reflect conceptual overlap.
- Phase 2 had 25 participants in a single-group pretest–posttest design with no comparison group; post means near the ceiling (4.84 of 5), repeated measurement, and possible response-shift effects limit interpretation.
- The 13-indicator scenario index was exploratory and not independently validated, and the moderation test used observed composite scores rather than a latent interaction — an absence of evidence, the author notes, not evidence of absence.
- [[agency|Professional agency]] and potential deskilling were discussed as mechanisms but not measured, and the sample skewed early-career, with 177 of 425 respondents (41.6%) reporting 0–2 years of experience; no specific AI system was under study, so no model or version is reported, and the pilot's delivery stack was Moodle, Zoom, and Google Forms.

## Citation

Song, Z. (2026). [*Toward calibrated AI readiness in K-12 school-based practice: the roles of AI-related epistemic vigilance capacity and governance clarity*](https://doi.org/10.3389/feduc.2026.1946896). *Frontiers in Education*. https://doi.org/10.3389/feduc.2026.1946896
