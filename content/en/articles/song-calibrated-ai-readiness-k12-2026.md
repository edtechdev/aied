---
title: "Toward calibrated AI readiness in K-12 school-based practice: the roles of AI-related epistemic vigilance capacity and governance clarity"
created: "2026-11-09T09:21:50-05:00"
updated: "2026-11-14T10:00:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-literacy, teacher-ai-competency]
methods: [quantitative-research]
institutions: [governance]
ethics: [trust-calibration, automation-bias]
---
> **Synthesis:** What separates [[k-12|K-12]] professionals who are ready to use AI responsibly is not enthusiasm but the capacity to judge what an AI output is worth, together with clarity about what their organization expects. Among 425 school psychologists, counselors, supervisors, teachers and [[special-education|special education]] staff, evaluative capacity was the strongest correlate of calibrated readiness; [[governance|governance]] clarity followed, and [[motivation|motivation]] to learn about AI responsibly added nothing. A month-long pilot with 25 psychologists and counselors then raised self-reported readiness sharply while leaving the quality of their reasoning on scenario tasks unchanged. Feeling readier and reasoning better came apart, which is the warning for anyone buying or building AI professional development.

## Key Findings

1. **Evaluative capacity was the strongest correlate of readiness.** Professionals who believed they could check evidence, spot uncertainty, judge sources and regulate their reliance on AI reported far higher calibrated readiness than those who did not. The skill of appraisal, not the intention to use AI well, is what tracks readiness.
2. **Clear organizational expectations mattered on their own.** Governance clarity — instructions that are understandable, accessible and specific enough to guide a decision — predicted readiness even after individual capacity was taken into account.
3. **Wanting to learn responsibly added nothing.** Autonomous regulatory motivation, the sense that responsible AI use is personally meaningful, was not a significant predictor, and it did not change the relationship between evaluative capacity and readiness either.
4. **Guidance, not individual skill, was the scarce resource.** Respondents rated their own evaluative capacity well above the clarity of their organization's expectations. A minority reported a clear written AI policy, a similar share had informal guidance only, and some had nothing at all.
5. **The pilot raised how ready people felt.** The readiness composite rose sharply across the month, and most participants — 21 of 25 — improved. Post scores sat near the ceiling of the scale, which limits how much room for real change was left.
6. **It did not raise how well they reasoned.** The size of each participant's self-reported gain was essentially unrelated to their score on scenario-based reasoning tasks. A satisfaction survey would have reported success that the applied tasks did not corroborate.
7. **Caution rose even where reasoning did not.** Every participant spotted a privacy or confidentiality problem and removed a student's name from a rewritten prompt, but only 60.0% also removed diagnostic or disability-related detail. The share describing a concrete checking step before using AI suggestions rose from 52.0% to 68.0%, and the share calling suggestions generic or insufficiently individualized rose from 72.0% to 80.0% — more caution, not simple rejection.

## What the study measured

The paper builds a construct it calls calibrated AI readiness: a professional's readiness to determine when AI-generated information should be verified, modified, used, or rejected while keeping ethical boundaries and accountability for the decision. It is narrower than [[ai-literacy|AI literacy]] and distinct from confidence or [[trust-calibration|trust calibration]] in a single task; the difference matters because school work involves incomplete information, competing interpretations, and legal exposure under IDEA and FERPA. Phase 1 surveyed 425 professionals recruited through public district directories, using a short Qualtrics instrument and study-specific, five-point Likert scales for all four constructs. The item-level [[quantitative-research|structural equation model]] fit acceptably, with loadings in a workable range.

## What predicted readiness, and what did not

Two of three hypotheses held. Epistemic vigilance capacity — the perceived ability to check evidence, spot uncertainty, judge sources, and regulate reliance — produced the largest standardized path (β = .675, p < .001). [[governance|Governance clarity]], meaning organizational expectations that are understandable, accessible, and specific enough to guide practice, followed at β = .270 (p < .001). The third predictor, autonomous regulatory motivation, drew on [[self-determination-theory|self-determination theory]] and measured whether professionals found responsible AI use personally meaningful; it did not predict readiness once the other two constructs entered (β = .076, p = .156). The exploratory moderation test added nothing: the interaction was non-significant and explained variance moved from R² = .431 to R² = .432.

Direction is unresolved — a cross-sectional survey cannot say whether clearer guidance produces readiness or ready professionals read their guidance more charitably — but one pattern stands out: respondents trusted their own evaluative capacity more than their institutions' instructions. Governance clarity averaged 3.30 against 4.48 for epistemic vigilance capacity, and only 143 of 425 respondents (33.6%) reported a clear written AI policy, while 150 (35.3%) had informal guidance only and 58 (13.6%) had none.

## The pilot and the convergence problem

Phase 2 converted the framework into a one-month, four-session training program, roughly one hour per session, with materials on Moodle, delivery over Zoom, and surveys plus scenario tasks in Google Forms. The 25 completers were 15 school psychologists (60.0%) and 10 school counselors (40.0%); most had prior AI exposure through a workshop, webinar, or formal course.

Self-reported readiness rose from 4.20 to 4.84 across the month, with 21 of 25 participants increasing, one unchanged, and three decreasing; every one of the three domains moved in the same direction. The author flags ceiling effects, with post means near the top of the scale. The scenario evidence was more textured. Every participant identified a [[privacy|privacy]] or confidentiality concern and removed a student's name from a rewritten prompt, but only 60.0% also removed diagnostic or disability-related language. The share describing a concrete checking or contextualization step before using AI suggestions rose from 52.0% in Session 1 to 68.0% in Session 4, while the share naming suggestions as generic or insufficiently individualized rose from 72.0% to 80.0%. In Session 3, all 25 assigned final responsibility to the human professional, 20 (80.0%) wrote a substantive rule to prevent mistakes, and the risks named included hallucination, poor alignment, over-reliance, and [[automation-bias|automation bias]].

None of it tracked the self-report gains. Change in self-reported readiness showed essentially no association with the scenario-based reasoning index, whose observed scores spanned 8 to 13 on a 0-to-13 scale. The participants felt more ready and reasoned about the same, which is the finding a training evaluation built on satisfaction items would have missed.

## What this means for practice

- **Instructors:** Teach the evaluation move explicitly — check an AI claim against a reliable source, name the assumption it rests on, and state whether the output should be used, changed, or rejected. Perceived evaluative capacity, not motivation, was the construct tied to readiness.
- **Instructors:** Rehearse prompts that carry sensitive educational information, not just identifiers. Participants stripped a student's name far more consistently than diagnostic or disability-related detail.
- **Administrators:** Publish AI guidance specific enough to act on — permitted tools, prohibited student data inputs, documentation standards, and decisions reserved to humans. Governance clarity predicted readiness independently of individual capacity and was rated far lower.
- **Researchers:** Score applied reasoning alongside self-report in any AI training evaluation. Here the two measures were unrelated, so a satisfaction-style post-survey would have reported success the scenario tasks did not corroborate.

## Limitations

- Phase 1 was cross-sectional, so no causal claim about epistemic vigilance, governance clarity, or motivation is possible; recruitment through public district directories with voluntary participation invites selection bias toward professionals already interested in AI.
- All scales were developed for this study with iterative expert review from one educational methodologist and two K-12 teachers, but no quantitative content-validity index was calculated and no cognitive interviews were run.
- Verification orientation's composite reliability was .694 and its average variance extracted .432, and the Fornell–Larcker criterion was not satisfied for that factor, so the strong vigilance–readiness path may partly reflect conceptual overlap.
- Phase 2 had 25 participants in a single-group pretest–posttest design with no comparison group; post means near the ceiling, repeated measurement, and possible response-shift effects limit interpretation.
- The 13-indicator scenario index was exploratory and not independently validated, and the moderation test used observed composite scores rather than a latent interaction — an absence of evidence, the author notes, not evidence of absence.
- [[agency|Professional agency]] and potential deskilling were discussed as mechanisms but not measured, and the sample skewed early-career, with 177 of 425 respondents (41.6%) reporting 0–2 years of experience; no specific AI system was under study, so no model or version is reported, and the pilot's delivery stack was Moodle, Zoom, and Google Forms.

## Citation

Song, Z. (2026). [*Toward calibrated AI readiness in K-12 school-based practice: the roles of AI-related epistemic vigilance capacity and governance clarity*](https://doi.org/10.3389/feduc.2026.1946896). *Frontiers in Education*. https://doi.org/10.3389/feduc.2026.1946896
