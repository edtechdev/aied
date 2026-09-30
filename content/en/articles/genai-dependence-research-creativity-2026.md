---
title: "GenAI dependence and graduate students’ research creativity: the roles of critical thinking and human–AI collaboration quality"
created: "2026-09-30T12:30:00-04:00"
updated: "2026-09-30T12:30:00-04:00"
type: article
sources: ['raw/papers/10.3389_fpsyg.2026.1896963.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [structural equation modeling, survey]
level: [graduate]
audience: [instructors, researchers, faculty developers]
foundations: [critical-thinking, cognitive-offloading, human-ai-collaboration, ai-literacy, limitations-in-aied-research]
pedagogy: [creativity, self-regulated-learning, metacognition, student-ai-interaction]
technology: [generative-ai, llm]
assessment: [self-report-measures]
methods: [quantitative-research]
ethics: [ai-misuse-learning-harm, trust-calibration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Yin, Wu, Liu and Li collected questionnaire data from 1,157 graduate students in China through online convenience sampling and used structural equation modeling plus PROCESS Model 6 with 5,000 bootstrap resamples to relate [[generative-ai|GenAI]] dependence to self-reported research [[creativity]]. They split dependence into functional (task-oriented, instrumental) and existential (deeper psychological reliance) forms, and tested [[critical-thinking|critical thinking]] and [[human-ai-collaboration|human–AI collaboration]] quality as serial mediators. Both forms were positively associated with research creativity, but the total association was far stronger for functional dependence (β = 0.457) than for existential dependence (β = 0.147), and the pathway through critical thinking carried approximately 85.0% of the functional form's total indirect effect. The design is cross-sectional, so the authors report every path as a statistical association rather than a causal effect.

## Key Findings

- **Functional dependence was the stronger correlate of research creativity.** Its total effect was β = 0.457 (p < 0.001) against β = 0.147 (p < 0.001) for existential dependence, and both direct effects stayed significant after the mediators entered the model (β = 0.052 and β = 0.045, both p < 0.05), indicating partial mediation in each case.
- **Critical thinking was the dominant indirect pathway for functional dependence.** The total indirect effect was 0.4055, 95% CI [0.3470, 0.4608], of which the critical-thinking path (Ind1) was 0.3449, 95% CI [0.2925, 0.3967], approximately 85.0% of the total.
- **All three indirect pathways were significant for both forms of dependence.** Functional: Ind1 through critical thinking 0.3449 [0.2925, 0.3967]; Ind2 through human–AI collaboration quality 0.0431 [0.0182, 0.0703]; Ind3 through both in sequence 0.0175 [0.0072, 0.0301]. Existential: total indirect 0.1025 [0.0395, 0.1645]; Ind1 0.0734 [0.0163, 0.1301]; Ind2 0.0229 [0.0117, 0.0364]; Ind3 0.0062 [0.0012, 0.0128].
- **The serial pathway was larger for functional dependence** (Ind3 = 0.0175) than for existential dependence (Ind3 = 0.0062), and existential dependence showed substantially smaller effect sizes across every specific indirect pathway.
- **In the overall SEM, GenAI dependence was positively associated with critical thinking** (β = 0.492, p < 0.001), human–AI collaboration quality (β = 0.538, p < 0.001) and research creativity (β = 0.064, p < 0.05); critical thinking was associated with human–AI collaboration quality (β = 0.348, p < 0.001) and research creativity (β = 0.731, p < 0.001); human–AI collaboration quality was associated with research creativity (β = 0.101, p < 0.001).
- **The model fit the data acceptably** (χ2/df = 7.541, CFI = 0.988, GFI = 0.981, SRMR = 0.017), though the authors note the χ2/df ratio was relatively high.
- **In the separate mediation models, the path coefficients diverged by form of dependence.** For functional dependence: dependence → critical thinking 0.464, dependence → collaboration quality 0.443, critical thinking → collaboration quality 0.388, critical thinking → research creativity 0.744, collaboration quality → research creativity 0.097 (all p < 0.001). For existential dependence: 0.097 (p < 0.01), 0.205, 0.571, 0.755 and 0.111 (all p < 0.001).

## Study Design and Measures

This is a [[quantitative-research|cross-sectional survey]] of graduate students in China, recruited through the Wenjuanxing platform and distributed via university-based WeChat groups and social media; participation was voluntary. Of 1,277 [[self-report-measures|questionnaires]] collected, 1,157 valid cases remained after excluding patterned answering, implausible completion times and failed attention checks, a valid-response rate of 90.60%. The sample was 47.796% male (553) and 52.204% female (604).

Dependence was measured with the 18-item AI Dependence Questionnaire (Cronbach's α = 0.913), covering functional and existential dimensions on a 5-point scale; critical thinking with a 5-item scale (α = 0.863); human–AI collaboration quality with an 11-item scale covering outcome quality, comfort and efficiency (α = 0.935); and research creativity with a 6-item scale (α = 0.885). Gender, degree type, grade level and academic discipline were controls in all mediation analyses. Harman's one-factor test extracted five factors with eigenvalues above one, the first accounting for 34.119% of variance, below the 40% threshold; a single-factor CFA fit poorly (χ2/df = 9.812, GFI = 0.633, AGFI = 0.590, CFI = 0.782, RMR = 0.143, NFI = 0.763).

Variable means on the 5-point scale ranged from 3.11 to 3.77, and all study variables correlated positively: functional dependence with existential dependence r = 0.339, critical thinking r = 0.457, human–AI collaboration quality r = 0.620 and research creativity r = 0.456; existential dependence with critical thinking r = 0.094, collaboration quality r = 0.258 and research creativity r = 0.148 (all p < 0.01).

## What this means for practice

- **Instructors and supervisors.** Treat dependence as differentiated, not as a single dial to turn down: the paper's practical reading is to promote purposeful, task-oriented use while watching for the psychological form. Functional dependence — using GenAI for procedural tasks while staying engaged in problem framing and reasoning — carried the stronger positive association.
- **[[ai-literacy|AI literacy]] programs.** Build [[critical-thinking|critical thinking]] into training rather than stopping at prompt technique. Because critical thinking carried most of the indirect association for functional dependence, verification of AI-generated claims, comparison of alternatives, source checking and justification of accept-or-reject decisions are the actionable practices.
- **Supervisors.** Encourage reflective [[human-ai-collaboration|collaboration]] and [[trust-calibration|calibrated trust]]: the paper recommends students document how AI-generated content was evaluated and modified, periodically complete important tasks without GenAI, and use [[human-in-the-loop-ai|human review]] for high-stakes decisions.
- **Institutions.** Avoid framing GenAI dependence as uniformly desirable or undesirable; the authors argue the goal is neither unconditional adoption nor categorical avoidance, but human-directed, [[explainable-ai|transparent AI]]-assisted research that preserves [[cognitive-offloading|cognitive agency]].

## Limitations

- The cross-sectional design "prevents strong causal inference and does not establish the temporal ordering" among GenAI dependence, critical thinking, human–AI collaboration quality and research creativity; the authors state the indirect effects should be read as statistical associations, not causal mediation, and note reverse causality is possible — students with stronger critical thinking or higher research creativity may be more likely to use GenAI strategically.
- Online convenience sampling via WeChat groups and social media may introduce self-selection bias and limits representativeness across institutions, disciplines, regions and cultures. Unmeasured variables such as prior AI experience, research [[self-efficacy]], academic ability, supervisory support and previous research productivity may contribute to the observed associations.
- All constructs were self-reported, which may inflate shared-method variance; research creativity in particular reflects participants' perceptions of their own creativity rather than independently evaluated output.
- The authors caution that the positive associations should not be read as "greater dependence is uniformly beneficial"; existential or excessive dependence may carry risks including [[cognitive-offloading|cognitive offloading]], reduced originality, algorithmic conformity, weakened independent reasoning and diminished confidence without AI assistance.

## Citation

Yin, S., Wu, R., Liu, X., & Li, R. (2026). [GenAI dependence and graduate students' research creativity: the roles of critical thinking and human-AI collaboration quality](https://doi.org/10.3389/fpsyg.2026.1896963). *Frontiers in Psychology*, 17, 1896963.