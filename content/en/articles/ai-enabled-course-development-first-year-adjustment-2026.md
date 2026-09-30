---
title: "A study on AI-enabled course development, AI proficiency, and first-year students' academic and psychological adjustment"
created: "2026-09-30T11:14:51-04:00"
updated: "2026-09-30T11:14:51-04:00"
type: article
sources: ['raw/papers/10.3389_fpsyg.2026.1909803.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
discipline: [engineering education, vocational education]
level: [higher ed, undergraduate]
audience: [instructors, curriculum designers, administrators, researchers]
foundations: [ai-education, ai-literacy, curriculum-design, cognitive-offloading, limitations-in-aied-research]
pedagogy: [anxiety-and-stress, self-determination-theory, self-efficacy, well-being]
technology: [generative-ai, edtech-platform]
assessment: [self-report-measures, assessment-validity]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Zhang and Yin surveyed 551 first-year students in the School of Architectural Engineering at a single Chinese polytechnic institute with a cross-sectional self-report questionnaire, relating satisfaction with AI-enabled course development, self-reported AI proficiency, self-reported AI usage pressure and a composite of self-reported psychological adjustment (academic adjustment, emotional management and stress coping). Descriptively, students gave AI [[learning-design|course design]] and AI learning tools high approval while more than two-thirds also endorsed self-reported indicators of psychological strain, a coexistence the authors call "high support and high strain." Regressions, bootstrap mediation, moderation and structural equation modeling found course development satisfaction and AI proficiency positively associated with adjustment, with AI proficiency partially mediating that association and AI usage pressure attenuating it. The most important qualification is the design itself: cross-sectional and self-report-based, at one institution, so no causal direction is established.

## Key Findings

- **High approval and high self-reported strain coexisted.** Positive [[ai-ed-evaluation|evaluation of AI]]-enabled course development ranged from 77.68% (the course's assistance in adapting to freshman-year studies) to 82.76% (integration of digital and intelligent content); 83.48% believed AI can improve learning efficiency and 84.03% said they would proactively use digital [[edtech-platform|platforms]] or AI tools. At the same time 69.51% endorsed [[anxiety-and-stress|anxiety]] or tension, 68.78% irritability, 67.88% difficulty relaxing, 67.70% low self-worth, 67.52% loneliness and 66.97% additional pressure from AI platform tasks — self-report indicators, not clinical diagnoses.
- **Course development satisfaction and AI proficiency tracked the adjustment indicators.** Correlations with academic adjustment were r = 0.42 for course development satisfaction and r = 0.38 for AI proficiency, and with emotional management 0.39 and 0.35. In multiple regressions academic adjustment had the largest R² = 0.24 (course development β = 0.34; AI proficiency β = 0.27), ahead of emotional management R² = 0.21 and stress coping R² = 0.18, all p < 0.001.
- **AI proficiency partially mediated the association.** The course development satisfaction to AI proficiency path was a = 0.46 and the AI proficiency to adjustment path b = 0.27, with a direct effect c′ = 0.29 and an indirect effect of 0.124 (Boot SE = 0.026, 95% CI [0.076, 0.181]), or 30.0% of the total effect of 0.414.
- **Demographic covariates explained little; course support and AI proficiency did the work.** Demographics alone accounted for R² = 0.030 of emotional management, 0.025 of stress coping and 0.035 of academic adjustment; adding course development satisfaction raised academic adjustment by ΔR² = 0.145, and AI proficiency added a further ΔR² = 0.060 for a final R² = 0.240.
- **AI usage pressure weakened the pathway.** The AI proficiency by pressure interaction was negative (B = −0.11, p = 0.004); the simple slope fell from 0.42 (p < 0.001) under low pressure to 0.31 (p < 0.001) under moderate pressure and 0.20 (p = 0.052) under high pressure. Conditional indirect effects were 0.161 (95% CI [0.099, 0.238]), 0.124 (95% CI [0.076, 0.181]) and 0.088 (95% CI [0.035, 0.151]), with a moderated mediation index of −0.051 (95% CI [−0.095, −0.017]).
- **The latent-variable model fit acceptably.** SEM fit was χ²/df = 2.31, CFI = 0.956, TLI = 0.941, RMSEA = 0.049 and SRMR = 0.041, with standardized paths of 0.52 from course development to AI proficiency, 0.31 from AI proficiency to adjustment and 0.34 from course development to adjustment.

## How the study was designed and measured

The survey targeted first-year students in the School of Architectural Engineering at Yangzhou Polytechnic Institute in Jiangsu Province, China, and produced 551 valid responses; the authors describe the sample as reflecting that school's demographic profile. Males accounted for 81.85% (n = 451) and females 18.15% (n = 100); engineering students 76.41% (n = 421) and students in other majors 20.51% (n = 113); 90.56% (n = 499) lived on campus and 28.68% (n = 158) served as class officers or members of student organizations.

Four [[self-report-measures|self-report]] constructs were measured on 5-point Likert items (1 = Strongly Disagree, 5 = Strongly Agree): course development satisfaction (6 items), [[ai-literacy|AI proficiency]] (6 items), self-reported psychological adjustment (9 items covering academic adjustment, emotional management and stress coping, with negatively worded strain items reverse-coded) and AI usage pressure (4 items). Because the outcome taps self-reported states rather than clinical diagnosis, the authors call it "self-reported psychological adjustment" rather than [[well-being|mental health]]. The measurement model was checked with confirmatory factor analysis (Cronbach's α of 0.91, 0.88, 0.90 and 0.89 for the four constructs; all AVE values above 0.50 and all HTMT ratios below 0.85), then analyzed with Pearson correlations, multiple and hierarchical regression, bootstrap mediation (PROCESS Model 4, 5,000 resamples), moderation (Model 1), moderated mediation (Model 14) and AMOS structural equation modeling. The framework draws on [[self-determination-theory]] and control-value theory.

## What this means for practice

- **Course designers.** Treat structure, not tool coverage, as the lever. Course development satisfaction carried the largest standardized coefficients in every model (β = 0.34 for academic adjustment, 0.31 for emotional management, 0.28 for stress coping), and its SEM path to adjustment stayed at β = 0.34.
- **Instructors.** Build [[ai-literacy]] into the first-year [[curriculum-design|curriculum]] instead of bolting on tool training. AI proficiency partially mediated the course-to-adjustment association (indirect effect 0.124, 95% CI [0.076, 0.181], 30.0% of the total effect of 0.414), so competence is one route by which course support reaches students.
- **Course teams.** Cap AI task load and state which work may use AI. The AI proficiency to adjustment slope fell to 0.20 (p = 0.052) under high AI usage pressure, against 0.42 (p < 0.001) under low pressure.
- **Administrators.** Pair AI course rollout with psychological support. Some 66.97% reported additional pressure from AI platform tasks, and the moderated mediation index was −0.051 (95% CI [−0.095, −0.017]), meaning the indirect pathway itself weakens as pressure rises.

## Limitations

- The design is cross-sectional, single-institution and self-report-based. The authors state that causal inference is not warranted, so every association above is statistical only and reverse or reciprocal paths cannot be ruled out.
- The sample was predominantly male (81.85%) and engineering-major (76.41%) and came from one school, so female students and students in other majors are under-represented and the convenience sample does not capture variation across institutional cultures, regional policy environments or disciplines.
- Psychological state, mental health, academic adjustment, emotional regulation and stress coping were folded into one self-reported adjustment composite. That preserves statistical power but obscures construct-specific effects; the authors call for sub-dimension analysis and validation against instruments such as the GAD-7 or the PHQ-9.
- The strain percentages are self-report item endorsements rather than clinical prevalence: the paper explicitly cautions that they are not prevalence estimates of diagnosable mental health disorders.

## Citation

Zhang, J., & Yin, Y. (2026). [A study on AI-enabled course development, AI proficiency, and first-year students' academic and psychological adjustment](https://doi.org/10.3389/fpsyg.2026.1909803). *Frontiers in Psychology*, 17, 1909803.