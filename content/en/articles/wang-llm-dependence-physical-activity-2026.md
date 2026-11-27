---
title: "Physical Activity in Relation to University Students’ Large Language Model Dependence: Moderated Mediation Effect Between Self-Control and Exploratory Learning Ability"
created: "2026-11-27T15:20:00-05:00"
updated: "2026-11-27T15:20:00-05:00"
type: article
published: "2026-11-06"
sources: ['raw/papers/wang-llm-dependence-physical-activity-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [survey, process-outcome modeling]
discipline: []
level: [higher ed, undergraduate]
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Wang and colleagues surveyed 602 Chinese undergraduates to ask whether physical activity is related to [[llm]] dependence, whether self-control carries that association, and whether exploratory learning ability changes its strength. Physical activity was correlated with lower dependence, but it had no significant direct conditional association once other variables were included. The indirect association through self-control was significant, and it appeared mainly among students with lower exploratory learning ability: at higher levels of that ability, both the physical-activity-to-self-control link and the self-control-to-dependence link weakened. The authors describe a resource-substitution pattern and stress that it remains provisional. Because the study was cross-sectional, [[self-report-measures|self-reported]], and explained only modest variance, the findings are presented as preliminary associations rather than evidence that exercise reduces dependence.

## Key Findings
1. **No direct association survived the model.** Physical activity was correlated with lower dependence but was not significantly associated with it in the full conditional model.
2. **Self-control carried the indirect association.** More physical activity was associated with stronger self-control, which in turn was associated with lower dependence.
3. **Exploratory learning ability changed both links.** The positive physical-activity-to-self-control association and the negative self-control-to-dependence association weakened as exploratory learning ability rose.
4. **The indirect path was concentrated at lower ability.** It was significant at a lower level of exploratory learning ability and not significant at the mean or a higher level.
5. **The resource-substitution account is cautious.** Students who prefer autonomous inquiry may rely on task-specific strategies rather than general self-control when regulating AI use.
6. **The model explained part of the variance.** The self-control model and the dependence model accounted for modest shares of variance.
7. **Causal claims are out of scope.** The authors repeatedly describe conditional associations and call for [[longitudinal-research|longitudinal]] and intervention studies.

## What the study measured

A cross-sectional survey was conducted at a comprehensive university in Guangzhou between December 2025 and February 2026. Stratified cluster sampling drew 18 public physical education classes, half from liberal arts and half from sciences. Of 650 recruited students, 602 remained after exclusions for very short completion times, missing items, and contradictory answers, an effective response rate of 92.6%. The sample included 298 women and 304 men, 282 freshmen and 320 sophomores, with a mean age of 20.11 years (SD = 1.54). Inclusion required Chinese nationality, full-time undergraduate status, no self-reported mental disorder, and daily use of LLMs.

Four self-report scales were used. The Physical Activity Rating Scale-3 assessed intensity, duration, and frequency, with a total score from 0 to 100 and Cronbach's α of 0.76 in this study. The Self-Control Scale had 19 items across five dimensions, with scores from 19 to 95 and α of 0.83. The Large Language Model Dependence Scale had 18 items covering functional and existential dependence, with scores from 18 to 90 and α of 0.86. The four-item Exploratory Learning Scale was adapted from a workplace instrument to university students, used a seven-point format, and had α of 0.76; its confirmatory fit included χ²/df = 2.158, RMSEA = 0.059, SRMR = 0.062, CFI = 0.982, and TLI = 0.973. Harman's single-factor test extracted six factors and the first explained 25.2% of the variance.

## What the models showed

Mean scores were 15.51 ± 12.60 for physical activity, 65.87 ± 13.77 for self-control, 39.79 ± 15.09 for dependence, and 11.66 ± 1.87 for exploratory learning ability. Physical activity correlated positively with self-control (r = 0.155, p < 0.01) and negatively with dependence (r = −0.137, p < 0.01). Self-control was negatively correlated with dependence (r = −0.332, p < 0.001) and positively with exploratory learning ability (r = 0.275, p < 0.001), while dependence and exploratory learning ability were negatively correlated (r = −0.250, p < 0.001).

Analyses used PROCESS Model 58 with gender, age, and grade as controls and 5000 resamples. The self-control model was significant (R² = 0.088): physical activity was positively associated with self-control (B = 0.606, p < 0.05), as was exploratory learning ability (B = 2.738, p < 0.001), while the physical activity × exploratory learning ability interaction was negative (B = −0.047, p < 0.05). In the dependence model (R² = 0.196), self-control (B = −1.597, p < 0.001) and exploratory learning ability (B = −8.421, p < 0.001) were negatively associated with dependence, and the self-control × ability interaction was positive (B = 0.117, p < 0.001). The direct conditional association of physical activity with dependence was not significant (B = −0.011).

Simple slopes clarify the interactions. At a lower level of exploratory learning ability (M − 1 SD = 9.79), physical activity was positively associated with self-control (B = 0.148, p < 0.05), but at a higher level (M + 1 SD = 13.53) the association was not significant (B = −0.027). Similarly, self-control was negatively associated with dependence at lower ability (B = −0.451, p < 0.001) and not at higher ability (B = −0.021). The conditional indirect association from physical activity through self-control to dependence was significant only at lower ability (B = −0.067, Boot 95% CI: −0.133, −0.003), with non-significant effects at the mean and higher levels. Pairwise contrasts separated the lower level from both the mean (Boot 95% CI: 0.004, 0.102) and the higher level (Boot 95% CI: 0.003, 0.134). The discussion frames these as differences within the observed sample, not as a psychometric ceiling.

## What this means for practice
- **Instructors.** Treat [[self-regulated-learning|self-regulation]] as a distinct target when discussing responsible LLM use, rather than assuming tool familiarity protects against dependence.
- **Instructors.** Give students who rely less on autonomous inquiry explicit practice in evaluating when an AI answer should be questioned or rewritten.
- **Administrators.** Consider pairing physical activity opportunities with self-control and independent-learning support, while recognizing that this study is not an intervention trial.
- **Curriculum designers.** Build tasks that require students to justify and verify LLM-assisted decisions, since dependence was linked to weaker autonomous learning.
- **Researchers.** Add objective activity measures, device-based LLM logs, and longitudinal or intervention designs to test the proposed pathway.

## Limitations
- The cross-sectional survey cannot establish temporal order or causal direction.
- All variables were self-reported, creating risks of recall error, social desirability bias, and common method variance that Harman's test cannot rule out.
- The models explained 8.8% of variance in self-control and 19.6% in LLM dependence, leaving most individual and contextual variation unaccounted for.
- Exploratory learning ability used only four items with a narrow observed spread, which may attenuate or distort interaction effects.
- Students came from intact classes at one university and were treated as independent, although observations were nested; intraclass correlations were not reported.
- LLM-use motives, [[technology-acceptance-model|perceived usefulness]], cognitive load, and actual [[cognitive-offloading|cognitive offloading]] were not measured, leaving the resource-substitution interpretation provisional.

## Citation
Wang Y, Zhang Y, Li Y, Zuo L and Yang G (2026) Physical Activity in Relation to University Students’ Large Language Model Dependence: Moderated Mediation Effect Between Self-Control and Exploratory Learning Ability. Behavioral Sciences 16:2113. https://doi.org/10.3390/bs16112113
