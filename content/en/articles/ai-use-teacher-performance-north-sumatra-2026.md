---
title: "AI Use, Work-Life Balance, and Innovative Work Behavior as Predictors of Teacher Performance: The Mediating Role of Organizational Citizenship Behavior"
created: "2026-10-26T10:37:00-04:00"
updated: "2026-10-26T10:37:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/ai-use-teacher-performance-north-sumatra-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [structural equation modeling]
discipline: [vocational education]
audience: [administrators, faculty developers, researchers]
level: [adult learning]
pedagogy: [professional-training]
technology: [ai-technologies]
assessment: [self-report-measures]
methods: [quantitative-research, research-methods-aied]
institutions: [governance, change-management]
ethics: []
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-26"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Sherly, Efendi, Romy and Sudirman (2027) surveyed 200 teachers in North Sumatra Province, Indonesia, and found that [[ai-education|artificial intelligence]] use had no significant direct effect on teacher performance (β = 0.112, p = .087) while work-life balance (β = 0.290) and innovative work behavior (β = 0.110) did, with [[teacher-role|organizational citizenship behavior]] carrying the effect of AI indirectly. The result is read through [[change-management|sociotechnical systems theory]]: a tool changes what teachers do only once it is absorbed into the social and behavioral fabric of a school. The study is correlational and rests on [[self-report-measures]], so it explains the mechanism rather than proving that deploying AI improves instruction.

## Key Findings

1. **AI did not directly predict performance.** The path from AI use to teacher performance was β = 0.112, p = .087, with a 95% confidence interval from −0.014 to 0.236 that includes zero, so the direct hypothesis was rejected.
2. **The effect ran through citizenship behavior.** AI use predicted organizational citizenship behavior at β = 0.370 (p < .001, 95% CI 0.211–0.493), which in turn predicted performance at β = 0.383 (p < .001), giving indirect-only mediation.
3. **Work-life balance was the strongest direct predictor.** At β = 0.290 (p < .001, 95% CI 0.135–0.410) it was the largest coefficient in the model and partially mediated through citizenship behavior (β = 0.200, p = .002).
4. **Innovative work behavior mattered, but less.** Its direct path to performance was β = 0.110 (p = .007, 95% CI 0.030–0.180), and it also predicted citizenship behavior at β = 0.262 (p < .001).
5. **Multicollinearity was checked.** Variance inflation factors across the two endogenous constructs ranged from 1.111 to 1.692, well below the 3.3 cutoff, so the paths are interpretable.
6. **The design was PLS-SEM on one sample.** Two hundred teachers were recruited by purposive sampling in a single province, with bootstrapping over 5,000 subsamples and no missing data requiring imputation.
7. **Self-report was the measurement basis.** Both predictors and the outcome came from the same questionnaire, and the authors note this as a threat alongside uneven digital infrastructure in the region.

## What the model says about AI and performance

The paper's most useful result is a null one, and it is the null that carries the mechanism. When AI use was regressed on teacher performance directly, nothing survived; when organizational citizenship behavior was placed between them, the indirect path was significant and the direct one was not, which the authors classify as indirect-only mediation. Read against [[change-management|sociotechnical systems theory]], the finding is that technology enters performance through the social system around it: teachers who use AI become more helpful, more willing to participate in school activities, and more committed to school goals, and those discretionary behaviors are what show up as performance. The same structure appears for work-life balance, which the authors connect to [[self-efficacy|conservation of resources]]: teachers with a balanced personal and professional life have spare resources to spend on extra-role work. What the model does not do is establish direction. A teacher already performing well may have the standing to adopt AI and to help colleagues, which would produce the same correlations with a different story.

## Context, sampling and measurement

The setting matters as much as the model. North Sumatra is described as uneven in digital literacy, infrastructure support, organizational support, contract type and how new AI is to the teaching field, and the authors argue that these differences may be why the direct effect was null while comparable studies elsewhere reported positive ones. Recruitment was purposive rather than random, so the 200 respondents represent the schools and teachers who were reachable, not the province. The measurement model was validated with SmartPLS 3.3.9: loadings of .70 were treated as acceptable, 0.60 was retained for model construction, average variance extracted had to exceed .50, and the structural paths were bootstrapped with 5,000 subsamples and bias-corrected 95% confidence intervals at the .05 level. Every construct, including teacher performance itself, was [[self-report-measures|self-reported]], so common-method bias is a live concern that the collinearity check addresses only indirectly.

## What this means for practice

- **Instructors.** Treat AI adoption as a team practice before treating it as a personal skill: the behavior that moved performance was helping colleagues and joining school activities, so arrange for that to happen when a tool arrives.
- **Administrators.** Staffing and workload decisions carry more of the performance signal than the tool does. Where work-life balance is poor, expect new software to add to the load rather than to relieve it.
- **Faculty developers.** Build adoption around participation, not competence. A rollout that produces visible collaborative use is the version this study says will register as performance.
- **Researchers.** The null direct effect needs a design with an objective performance measure before it can be read as evidence that AI does not improve teaching.

## Limitations

- **Cross-sectional and correlational.** All paths are estimated from a single questionnaire at one time point, so the mediated structure cannot be read as causal direction.
- **Purposive sampling in one province.** Two hundred teachers in North Sumatra were recruited by convenience, which limits generalization to the province itself and to other systems.
- **Self-reported outcome.** Teacher performance was rated by the teachers themselves, alongside their own AI use, so common-method bias is a standing threat the authors acknowledge.
- **No usage detail.** The AI construct is broad, and the authors note that differences in how frequently teachers use the technology and how broadly they define it may have produced the null direct result.
- **Regional conditions.** The discussion attributes the null result partly to uneven digital literacy, infrastructure and organizational support, so the estimate is specific to that setting.

## Citation

Sherly, Efendi, Romy, E., & Sudirman, A. (2027). [AI Use, Work-Life Balance, and Innovative Work Behavior as Predictors of Teacher Performance: The Mediating Role of Organizational Citizenship Behavior](https://doi.org/10.12973/eu-jer.16.1.1). *European Journal of Educational Research*, *16*(1), 1–22.
