---
title: "Generative Artificial Intelligence Use and Learning Engagement Among Medical Undergraduates: Statistical Indirect and Configurational Associations Involving Basic Psychological Need Satisfaction"
created: "2026-09-30T12:05:56-04:00"
updated: "2026-09-30T12:05:56-04:00"
type: article
sources: ['raw/papers/10.3390_bs16091694.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
discipline: [medical education]
level: [undergraduate]
audience: [medical educators, instructors, researchers]
foundations: [ai-education, cognitive-offloading, limitations-in-aied-research, interpreting-and-applying-aied-research]
pedagogy: [self-determination-theory, student-engagement, motivation, self-directed-learning]
technology: [generative-ai, llm]
assessment: [self-report-measures]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** He and colleagues surveyed 498 medical undergraduates in clinical medicine-related programs at one medical university in western China (December 2025 to January 2026) and analyzed the same data twice: covariance-based structural equation modeling (SEM) for average associations and fuzzy-set [[qualitative-research|qualitative]] comparative analysis (fsQCA) for configurations. [[generative-ai|GAI]] use was only weakly associated with basic psychological need satisfaction (β = 0.155), need satisfaction was strongly associated with [[student-engagement|learning engagement]] (β = 0.521), and the direct GAI-to-engagement path was not statistically significant (β = 0.035, p = 0.404). The indirect association through need satisfaction was statistically significant but small (β = 0.081), and fsQCA found that high GAI use was not necessary for high engagement; the broadest configuration combined autonomy, competence and relatedness need satisfaction, with competence as a core condition and GAI use unconstrained. Because the design was cross-sectional and need satisfaction was measured as a general state rather than in relation to GAI, the indirect association is a pattern consistent with [[self-determination-theory|self-determination theory]], not evidence of a causal mechanism.

## Key Findings

- **GAI use was more weakly tied to learning than students' psychological need state.** After controlling for gender, year of study and academic program, GAI use was significantly but weakly associated with basic psychological need satisfaction (B = 0.017, β = 0.155, p = 0.002), whereas need satisfaction was strongly associated with learning engagement (B = 0.612, β = 0.521, p < 0.001).
- **The indirect association through need satisfaction was significant but small.** With 5000 bootstrap resamples, the statistical indirect association reached significance (B = 0.010, β = 0.081, p = 0.003, 95% CI [0.004, 0.017]) while the direct association did not (B = 0.004, β = 0.035, p = 0.416, 95% CI [−0.006, 0.016]); the total association was significant and small (B = 0.015, β = 0.116, p = 0.020, 95% CI [0.003, 0.027]).
- **No single condition was necessary for high learning engagement.** Relatedness need satisfaction reached a necessity consistency of 0.919 but a relevance of necessity (RoN) of only 0.498; autonomy need satisfaction was 0.897 and competence need satisfaction 0.873, both below the 0.90 threshold, and GAI use was 0.645.
- **Three configurations were associated with high learning engagement.** The comprehensive psychological need satisfaction configuration (competence core, autonomy and relatedness peripheral, GAI use unconstrained) had the highest coverage (raw coverage 0.829, unique coverage 0.250, consistency 0.832) and was the principal configuration; the autonomy–relatedness–GAI use configuration had a core presence of autonomy and GAI use (raw coverage 0.599, unique coverage 0.020), and the competence–relatedness–GAI use configuration had a core presence of competence (raw coverage 0.587, unique coverage 0.009).
- **The principal configurations held across threshold changes.** Raising the consistency threshold from 0.80 to 0.85 retained all three configurations; raising the case-frequency threshold from 10 to 15 retained the first two and dropped the third, with overall consistency moving from 0.822 to 0.824 and overall coverage from 0.858 to 0.849.

## How the study was done

The design was a cross-sectional questionnaire survey using convenience sampling at one medical university in western China (December 2025 to January 2026). Of 569 eligible students invited, 518 submitted questionnaires (a response rate of 91.04%); 20 were excluded during data-quality screening, leaving 498 questionnaires for analysis (a usable questionnaire rate of 96.14%). The sample was 63.45% female (n = 316) and 36.55% male (n = 182), and first-year students were the largest group (n = 192, 38.55%).

Three self-report instruments were used. GAI use was measured with the 17-item "GAI Use in Typical Scenarios" section of the Questionnaire on Generative Artificial Intelligence Use among College Students (Cronbach's α = 0.883; five-point Likert scale, total scores 17–85). Basic psychological need satisfaction was measured with the Chinese version of the Basic Psychological Need Satisfaction Scale, 21 items across autonomy, competence and relatedness (total α = 0.923; dimension α = 0.763, 0.781 and 0.833; seven-point scale, total scores 21–147). Learning engagement was measured with the Chinese version of the Utrecht Work Engagement Scale–Student, 17 items across vigor, dedication and absorption (total α = 0.951; dimension α = 0.900, 0.890 and 0.886; seven-point scale, total scores 17–119). All measures were [[self-report-measures|self-report]] and taken at the same time point; the Harman single-factor test showed the first unrotated factor explained 26.08% of the total variance.

## What the statistical model found

Descriptive means were 51.89 ± 9.53 for GAI use, 103.65 ± 17.79 for basic psychological need satisfaction and 77.87 ± 17.15 for learning engagement. Spearman correlations were weak between GAI use and need satisfaction (ρ = 0.109, p = 0.015) and between GAI use and learning engagement (ρ = 0.092, p = 0.040), but moderate between need satisfaction and learning engagement (ρ = 0.426, p < 0.001). The structural model fit well (robust CFI = 0.976, robust TLI = 0.963, robust RMSEA = 0.047, SRMR = 0.017), with standardized factor loadings from 0.850 to 0.955. The authors state plainly that because need satisfaction was not measured in relation to GAI-supported learning and the design was cross-sectional, these results do not show that GAI use raises engagement by satisfying needs, nor do they establish temporal ordering.

## What the configurational analysis found

The two solutions distinguish core from peripheral conditions. All three configurations include at least two dimensions of need satisfaction, and relatedness appears as a peripheral condition in all three without being an independently necessary condition. GAI use was unconstrained in the principal configuration, core in the autonomy–relatedness–GAI use configuration and peripheral in the competence–relatedness–GAI use configuration. The authors treat the third as exploratory (unique coverage 0.009; it disappeared when the case-frequency threshold rose to 15) and the second as supplementary (unique coverage 0.020).

## What this means for practice

- **Watch the need state, not the usage count.** The need-satisfaction association with engagement (β = 0.521) far exceeded that of GAI use (β = 0.155), and high GAI use was not necessary for high engagement, so usage frequency is a weak proxy for a learning benefit.
- **Build competence into AI-supported tasks.** Competence need satisfaction was a core condition in the broadest configuration (raw coverage 0.829, unique coverage 0.250), so mastering complex medical content matters more than whether students reach for a [[conversational-ai|chatbot]].
- **Give students discretion over GAI.** Autonomy need satisfaction was a core condition in the configuration it shares with GAI use, so letting students decide whether, when and how to use these tools — and justify and verify outputs — may matter more than mandating or banning them.
- **Treat relatedness as context, not a standalone lever.** Relatedness need satisfaction reached a consistency of 0.919 but an RoN of only 0.498 and appeared only peripherally, so [[teacher-role|teacher]] feedback, peer discussion and clinical supervision remain the source of connection.
- **Do not read the mediation as a causal chain.** With a cross-sectional single-center sample, the indirect association is a pattern to test, not a mechanism to design around; the authors call for longitudinal and experimental follow-up.

## Limitations

- The cross-sectional design cannot establish temporal ordering or causal direction among GAI use, need satisfaction and learning engagement, and reverse or bidirectional relationships remain possible.
- Convenience sampling from a single medical university in western China, with uneven distributions across years and programs, limits generalization to other regions and institutions.
- All variables were self-reported at one time point, risking recall, social desirability and common method bias, and the GAI-use measure captured overall extent rather than purposes, strategies, interaction quality or verification behavior.
- Basic psychological need satisfaction was measured as a general state, not as autonomy, competence and relatedness experienced specifically within GAI-supported learning, and the fsQCA results may depend on calibration anchors and truth-table thresholds.

## Citation

He, Q., Chang, G., Su, N., Yang, Y., & Ma, J. (2026). [Generative Artificial Intelligence Use and Learning Engagement Among Medical Undergraduates: Statistical Indirect and Configurational Associations Involving Basic Psychological Need Satisfaction](https://doi.org/10.3390/bs16091694). *Behavioral Sciences*, 16(9), 1694.