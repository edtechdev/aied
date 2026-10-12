---
title: "Teacher-Mediated Multimodal Platform and Math Achievement: Evidence from Goblins' Yearlong District Implementation"
created: "2026-10-12T10:33:55-04:00"
updated: "2026-10-12T10:33:55-04:00"
type: article
foundations: [ai-literacy]
technology: [intelligent-tutoring, generative-ai, conversational-ai]
assessment: [educational-measurement]
ethics: [equity-in-ai-education, multilingual-learning, neurodiversity]
audience: [instructors, administrators, researchers]
level: [middle school]
discipline: [math education]
research_method: [quasi-experiment]
page_kind: [evaluation]
sources: ['raw/papers/ai26-1611-goblins-math-platform.md']
confidence: high
methods: [ai-ed-evaluation]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-12"
    agent: hermes-agent
---

> **Synthesis:** Alam, Dominguez-Mel, and Liu (2026) evaluate a full-district rollout of Goblins, a teacher-mediated multimodal AI math platform (type, draw, speak, with personalized feedback), in a large Arizona district during 2025–26 using a weighted propensity design on 6,065 grades 6–8 students. Usage was associated with a **0.11 SD** increase in within-district MAP math scores (0.24 SD on the national Conditional Growth Index), but effects concentrated almost entirely in sustained users: students solving 10–19 and 20+ problems per week gained 0.18 SD and 0.31 SD, while the district's "5 Percent Problem" framing (engagement thresholds met by only ~50% of students here) shows implementation fidelity is the binding constraint on AI tutoring effects. Exploratory subgroup analyses show larger associations for students with IEPs (+0.122 SD), Hispanic students (+0.084 SD), and English learners (+0.191 SD) — consistent with multimodal/multilingual supports reducing barriers, though not causal evidence for the accessibility features themselves.

## Summary

Despite rapid K-12 adoption of AI-powered learning tools, district-level evidence of their effectiveness is thin: evaluations of other platforms have found meaningful effects only for tiny fractions of students (Khan Academy's "5 Percent Problem" — 0.26 SD for the 5% of students using it ≥30 minutes/week; a broader-criteria IXL evaluation finding 0.03 SD at ~11 minutes/week average use). This paper examines whether a teacher-mediated model — where teachers create classes, assign activities, and monitor work, and students receive individualized AI feedback across typed, drawn, and spoken input — can reach students at a scale and intensity that produces measurable achievement gains.

The study used the full grades 6–8 population of a large Arizona district (Deer Valley USD; n = 7,083; 80% activated Goblins accounts) and followed two cohorts — a matched treated/control sample (n = 4,833) via inverse-propensity-weighted matching (maximum SMD cut from 1.38 to 0.24) and the full analytic sample (n = 6,065). Treatment was defined as meeting a minimum engagement threshold (2 problems solved per week; met by ~51% of students). Outcomes were MAP math growth measured two ways: within-district standardized scores (the primary outcome) and NWEA's national Conditional Growth Index (CGI), which benchmarks each student against nationally normed peers with similar starting achievement — the CGI estimates are directly comparable to the broader intervention literature (e.g., Kraft 2020).

## Key Findings

- **Modest average association, concentrated in engaged users.** Meeting the minimum threshold (2 problems/week) was associated with 0.11 SD within-district growth and 0.24 SD on CGI (p < 0.001) — the CGI figure more than twice the within-district estimate and squarely within the range of effects reported for strong education interventions.
- **A clear dose-response gradient.** Six dosage categories showed monotonically larger effects with usage intensity (p < 0.001): students solving 10–19 and 20+ problems per week gained 0.18 SD and 0.31 SD within-district (0.40 SD and 0.69 SD on CGI); all dosages above 3 problems/week were significant (p < 0.01).
- **Half the district met a modest engagement bar.** ~51% of students met the 2-problem threshold, far exceeding the 5% (Khan Academy) and 12% (IXL) fidelity rates in prior evaluations — evidence that the teacher-mediated model improved implementation fidelity, though the authors caution that usage definitions differ across studies.
- **Equity-subgroup signals (exploratory).** Students with IEPs (+0.122 SD), Hispanic students (+0.084 SD), and English learners (+0.191 SD) showed larger associations than their comparison groups; no differential effects by grade level, baseline proficiency, or race/sex for the general groups. The authors attribute the pattern speculatively to Goblins' multimodal input and seven-language voice support.
- **Teacher mediation structures usage.** Students could only access Goblins through teacher-created classes; teachers assigned activities while students could also practice independently — the platform aggregated both channels without distinguishing them.
- **Robustness checks.** The 0.11 SD estimate held within 0.01 SD across four alternative model specifications; a placebo test on spring-2025 MAP (pre-implementation) showed no effect, and covariate balance improved substantially under weighting (max SMD 1.38 → 0.24).

## What this means for practice

- **Instructors.** If adopting an AI tutor, plan for engagement, not just access: the average effect here (0.11 SD) understates what sustained users achieved (0.31 SD at 20+ problems/week), and dosage was the study's strongest moderator. Setting a light weekly minimum (the paper's 2-problem bar) that half the class actually meets is a more realistic target than heavy usage mandates.
- **Instructors.** The teacher-mediated design — classes, teacher-assigned work, teacher monitoring of independent practice — is what distinguished this rollout from consumer-style platforms where most students never engage; activation alone (80% here) says little about usage.
- **Administrators.** Ask vendors for dose-response data, not headline averages: a tool whose effect concentrates in the top-usage tail can look ineffective district-wide even when it works for engaged students, and procurement decisions based on averages will misrank tools.
- **Administrators.** Exploratory evidence suggests AI tutors with multimodal input and multilingual voice support may narrow gaps for students with IEPs and English learners — promising enough to pilot deliberately, but not yet causal evidence that those features cause the differential.
- **Researchers.** Report fidelity honestly: this paper's contribution is documenting what share of a full district actually engaged (51% at a low bar, dose-response across six tiers) rather than an effect for "students who used the platform," which prior evaluations showed can be 5% of a sample.

## Limitations

- Quasi-experimental, cross-sectional design with self-selection into usage: propensity weighting balanced observed covariates, but with no exogenous variation the estimates remain vulnerable to unobserved selection bias, and the authors explicitly interpret them as associations, not causal effects.
- Treatment defined by usage threshold (2 problems/week) conflates dose with motivation and engagement propensity — students who use a math platform at all differ systematically from those who don't in ways no observed covariate set captures.
- Subgroup findings (IEP, Hispanic, English learner) are exploratory, underpowered by subgroup (e.g., Black students n = 94, Asian n = 127), and cannot attribute the differential to accessibility features; the authors say so themselves.
- Usage metrics are coarse: active minutes include idle time, and problems-attempted counts openings rather than completions; teacher-assigned and independent usage are pooled, so the mediating channel can't be isolated.
- One district, one year, one platform: the authors' own benchmark comparisons are complicated by differing usage definitions and study designs across the Khan Academy/IXL evaluations they cite.

## Citation

Alam, A., Dominguez-Mel, N., & Liu, J. (2026). [*Teacher-mediated multimodal platform and math achievement: Evidence from Goblins' yearlong district implementation*](https://doi.org/10.26300/vcdh-yc23). EdWorkingPaper No. 26-1611. Annenberg Institute at Brown University. https://doi.org/10.26300/vcdh-yc23
