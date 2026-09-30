---
title: "Perceived AI empowerment and threat in relation to university students' dependence on GenAI: the indirect role of trust in AI"
created: "2026-09-30T10:34:02-04:00"
updated: "2026-09-30T10:34:02-04:00"
type: article
sources: ['raw/papers/10.3389_fpsyg.2026.1940317.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
level: [higher ed]
audience: [instructors, faculty developers, researchers]
foundations: [ai-education, cognitive-offloading, human-ai-collaboration, theories-and-frameworks]
pedagogy: [student-ai-interaction, self-regulated-learning, metacognition]
technology: [generative-ai, llm, technology-acceptance-model]
assessment: [self-report-measures]
methods: [quantitative-research]
ethics: [trust, ai-misuse-learning-harm]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Zhu, Ma, Zhang and Liu tested a dual-appraisal model of [[generative-ai|GenAI]] dependence in a cross-sectional survey of 360 GenAI-experienced university students in China, drawing on cognitive appraisal theory and trust theory. The model linked perceived AI empowerment and perceived AI threat to GenAI dependence directly and indirectly through trust in AI, estimated with structural equation modeling and 5,000-resample bootstrap confidence intervals. Empowerment was positively associated with trust and dependence; threat was negatively associated with both; trust was positively associated with dependence and carried significant indirect associations in both pathways, so both direct and indirect associations were significant (partial mediation). Because the design is cross-sectional and single-source self-report, the paper states that no temporal order or causal direction is established — the results are associations only.

## Key Findings

- **Empowerment and threat moved trust in opposite directions.** Perceived AI empowerment was positively associated with trust in AI (β = 0.576, 95% CI [0.493, 0.653]), whereas perceived AI threat was negatively associated with trust in AI (β = −0.328, 95% CI [−0.420, −0.235]).
- **Trust was the strongest single predictor of dependence.** Trust in AI was positively associated with GenAI dependence (β = 0.455, 95% CI [0.326, 0.581]).
- **Both appraisals retained a direct association with dependence.** Perceived AI empowerment showed a positive direct association with dependence (β = 0.216, SE = 0.059, 95% CI [0.095, 0.328]), and perceived AI threat showed a negative direct association (β = −0.201, SE = 0.052, 95% CI [−0.305, −0.099]). H1–H5 were supported.
- **The indirect paths through trust were significant in both directions.** Empowerment had a positive indirect association with dependence through trust (β = 0.262, SE = 0.044, 95% CI [0.182, 0.356]), accounting for 54.8% of the total effect; threat had a negative indirect association through trust (β = −0.149, SE = 0.033, 95% CI [−0.223, −0.094]), accounting for 42.6% of the total effect. Neither interval included zero, supporting H6a and H6b and indicating partial mediation.
- **Total effects.** The total effect of empowerment on dependence was positive (β = 0.478, SE = 0.041, 95% CI [0.393, 0.552]); the total effect of threat was negative (β = −0.351, SE = 0.046, 95% CI [−0.442, −0.263]).
- **The two appraisals were close to independent.** The correlation between perceived AI empowerment and perceived AI threat was weak and non-significant (r = 0.030), so positive and negative appraisals did not behave as opposite ends of one continuum.
- **The model explained substantial variance.** Empowerment and threat jointly explained 42.7% of the variance in trust in AI (R² = 0.427); empowerment, threat and trust together explained 45.9% of the variance in dependence (R² = 0.459).

## How the study was run

A cross-sectional questionnaire was distributed online to Chinese university students with prior GenAI experience, recruited by convenience sampling through course groups, learning communities and social media; data collection ran April 24 to May 25, 2026. Of 739 [[self-report-measures|questionnaires]] initially collected, 360 valid responses were retained after screening out completion times under 1 minute, more than 10 consecutive identical answers, and logical inconsistencies. The sample was 174 males (48.3%) and 186 females (51.7%), with 72.8% under 22 years old, 12.2% aged 22–25, 11.4% aged 26–30 and 3.6% over 30; 50.8% were freshmen, 25.3% sophomores, 15.0% juniors and 8.9% seniors or above. GenAI usage frequency was 73 students (20.3%) reporting rarely using (≤1 time per month), 150 (41.7%) sometimes using (1–3 times per week) and 137 (38.1%) frequently using (≥4 times per week).

Perceived AI empowerment was measured with seven items (Cronbach's α = 0.945), perceived AI threat with five items (α = 0.934), trust in AI with six items (α = 0.933) and AI dependence with seven items (α = 0.954), all on five-point Likert scales. Composite reliability ranged from 0.933 to 0.954 and average variance extracted from 0.699 to 0.749. The hypothesized four-factor measurement model fit well (χ² = 381.950, df = 269, CFI = 0.986, TLI = 0.984, RMSEA = 0.034, SRMR = 0.029), while a single-factor model fit poorly (χ² = 3735.159, df = 275, CFI = 0.492, TLI = 0.446, RMSEA = 0.187, SRMR = 0.177). Harman's single-factor test identified four factors with eigenvalues above 1, the first accounting for 47.190% of the total variance, but the CFA comparison did not support a single common-method factor. Discriminant validity held: the highest HTMT value was 0.683 (trust–dependence), the empowerment–trust HTMT was 0.566, and the square roots of AVE for empowerment (0.843) and trust (0.836) exceeded their correlation.

## Group patterns by usage frequency were exploratory only

A multigroup structural equation model compared low-, moderate- and high-frequency users. The empowerment-to-trust and threat-to-trust associations ran in the same direction across all three groups, while the direct coefficients with dependence varied numerically. The trust-to-dependence coefficient rose from 0.287 in the low-frequency group to 0.435 in the moderate-frequency group and 0.593 in the high-frequency group; the direct empowerment-to-dependence coefficient was 0.350, 0.216 and 0.119 respectively, and the threat-to-dependence coefficient was numerically most negative in the moderate-frequency group (−0.337). The authors present these as descriptive observations, not confirmed group differences: formal cross-group difference tests and measurement invariance analyses were not conducted, and the low-frequency subgroup was small. The paper states these patterns cannot be read as evidence of moderation.

## Where the design limits the claims

The paper is explicit that a cross-sectional design identifies patterns of association only, not temporal order or causality, and that longitudinal, cross-lagged or experimental designs would be needed to test whether the proposed relationships reflect causal processes. The convenience sample was concentrated in particular age and year-level groups, and academic majors or disciplinary backgrounds were not collected, limiting generalization across fields of study. All variables were self-reports at a single time point, so common method bias and self-report error cannot be ruled out entirely despite the measurement-model comparison. Contextual conditions and individual differences — disciplinary background, task type, [[ai-literacy]], motivation, academic pressure, instructor expectations and institutional [[educational-policy-ai|AI policies]] — were not systematically examined, and the authors flag task risk as potentially important because reliance on AI may carry different implications in low-stakes activities than in assessment or consequential decisions. Finally, they note the need to distinguish usage frequency, habitual use and GenAI dependence, and to separate functional reliance, appropriate reliance and potentially excessive dependence.

## What this means for practice

- **Instructors.** Treat dependence as an appraisal-and-trust question, not a usage-frequency one: the two appraisals were near-independent (r = 0.030), and trust carried significant indirect associations in both directions. A student who trusts GenAI and one who fears it can both report heavy use, for different psychological reasons.
- **Instructors.** Because empowerment had a positive direct association with dependence (β = 0.216) and threat a negative one (β = −0.201), even after trust was in the model, lowering perceived threat is a plausible lever on reliance — but the cross-sectional design cannot show that changing appraisals changes behavior.
- **Faculty developers.** Design GenAI as a [[scaffolding|scaffold]] that supports [[student-ai-interaction|cognitive engagement]] rather than replacing learners' judgment. The authors tie the practical implication to maintaining boundaries between AI assistance and cognitive responsibility, so students keep evaluating outputs and owning decisions — the distinction the paper draws between functional reliance and potentially problematic dependence.
- **Researchers.** The results extend the [[technology-acceptance-model|technology acceptance]] account by positioning [[trust]] as a psychological pathway between appraisals and reported reliance; they also underscore that GenAI dependence needs a validated instrument and longitudinal designs before any causal or moderation claim is made.

## Limitations

- **Cross-sectional design.** The study identifies patterns of association among perceived empowerment, perceived threat, trust in AI and dependence, but it cannot establish temporal order or causality — the authors call for longitudinal, cross-lagged or experimental work to test whether the proposed relationships reflect causal processes.
- **Convenience sample.** Participants were Chinese university students concentrated in particular age and year-level groups, and their academic majors or disciplinary backgrounds were not collected, so the authors cannot say whether the associations generalize across fields of study.
- **Single self-report instrument.** All four constructs came from one questionnaire administered at one time point, so shared-method variance cannot be ruled out.

## Citation

Zhu, K., Ma, Y., Zhang, J., & Liu, J. (2026). [Perceived AI empowerment and threat in relation to university students' dependence on GenAI: the indirect role of trust in AI](https://doi.org/10.3389/fpsyg.2026.1940317). *Frontiers in Psychology*, 17, 1940317.