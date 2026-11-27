---
title: "Adolescents’ Motivation for AI-Enabled Environmental Actions: The Role of Supportive Environments and Expectancy-Value Theory"
created: "2026-11-27T14:10:00-05:00"
updated: "2026-11-27T14:10:00-05:00"
type: article
published: "2026-11-05"
sources: ['raw/papers/wu-adolescent-ai-environmental-motivation-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
discipline: []
level: [k 12]
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

> **Synthesis:** Wu and colleagues asked what motivates adolescents to use artificial intelligence for environmental protection activities. A questionnaire survey of 602 students in 11 schools in East and South China measured supportive social norms, facilitating conditions, expectancy, three kinds of task value, perceived cost, and motivation. Expectancy, attainment value, intrinsic value, utility value, and facilitating conditions were positively associated with motivation, while perceived cost was negatively associated with it. Supportive social norms had no significant direct association with motivation but a significant total indirect association through the expectancy–value beliefs; facilitating conditions had both direct and indirect associations. A small exploratory follow-up suggested adolescents and adults may see social norms differently, but it was descriptive. The data were cross-sectional, so the indirect paths are statistical associations and not an established causal mediation mechanism.

## Key Findings
1. **Beliefs about success and value mattered.** Expectancy and all three types of task value were significantly positively associated with adolescents' motivation to use AI for environmental protection.
2. **Cost pointed the other way.** Perceived cost was significantly negatively associated with motivation.
3. **Two kinds of support worked differently.** Facilitating conditions had both a direct and a total indirect association with motivation; supportive social norms had only a total indirect association.
4. **Most hypotheses held.** Of 18 proposed hypotheses, 17 were supported; the exception was the direct path from supportive social norms to motivation.
5. **The measurement was checked on separate samples.** Exploratory factor analysis used 300 [[self-report-measures|questionnaires]] and confirmatory factor analysis used 302 different questionnaires before the merged sample of 602 was used for structural modeling.
6. **The age comparison was only exploratory.** A follow-up survey of 30 adolescents and 30 adults suggested different perceptions of social norms but could not establish an explanation for the null direct path.

## What the study measured

The survey targeted adolescents in schools with a foundation in [[environmental-education|environmental education]]. Schools were purposively selected, and eligible students within them were randomly selected. The 11 schools spanned [[primary-education|primary]], [[secondary-education|junior high]], and senior high school and included eight urban schools and three county and township schools. The first batch produced 327 questionnaires, of which 27 were excluded for missing information or patterned responses, leaving 300 for exploratory factor analysis. A second batch of six non-overlapping schools produced 302 valid questionnaires for confirmatory factor analysis. All 602 valid questionnaires were then used in covariance-based structural equation modeling. Participants were 296 girls (49.17%) and 306 boys (50.83%), with 225 aged 10–12 (37.37%), 330 aged 13–15 (54.82%), and 47 aged 16–18 (7.81%).

The instrument had eight measured dimensions: supportive social norms, facilitating conditions, expectancy, attainment value, intrinsic value, utility value, cost, and motivation, rated on a five-point Likert scale from 1 (strongly disagree) to 5 (strongly agree). The paper defines the target activity as adolescents using AI in environmental education contexts to acquire environmental knowledge, learn about solutions, and support environmental tasks, not as professional AI systems performing monitoring or pollution control. Motivation combined willingness to participate with positive [[ai-ed-evaluation|evaluation of AI]]'s task support. Exploratory factor analysis produced factor loadings from 0.732 to 0.875 with a Kaiser–Meyer–Olkin value of 0.895. Confirmatory factor analysis produced standardized loadings from 0.640 to 0.914 and fit indices including CFI = 0.978, TLI = 0.975, RMSEA = 0.032, and SRMR = 0.036. Overall Cronbach's alpha for the scale was 0.888.

## Direct, indirect, and null findings

The structural model fit the data on indices including CMIN/DF = 1.906, GFI = 0.927, NFI = 0.937, CFI = 0.969, RMSEA = 0.039, and SRMR = 0.056. The direct association from expectancy to motivation was β = 0.167 (p < 0.001), from attainment value β = 0.279 (p < 0.001), from intrinsic value β = 0.123 (p < 0.01), from utility value β = 0.250 (p < 0.001), from perceived cost β = −0.197 (p < 0.001), and from facilitating conditions β = 0.099 (p < 0.05).

Supportive social norms told a different story. Their direct path to motivation was not significant (β = 0.069, p > 0.05), yet their total indirect effect was significant (β = 0.283, 95% bias-corrected confidence interval [0.209, 0.364]) and their total effect was also significant (β = 0.352, 95% confidence interval [0.262, 0.445]). Bootstrap tests found significant specific indirect paths through expectancy, attainment value, intrinsic value, utility value, and perceived cost, plus a chained expectancy-to-attainment-value path (β = 0.0070, 95% bias-corrected confidence interval [0.0012, 0.0173]). Facilitating conditions had a total indirect effect of β = 0.344 (95% confidence interval [0.274, 0.424]) and a total effect of β = 0.443 (95% confidence interval [0.351, 0.529]).

A sensitivity analysis that measured motivation only with items about willingness to participate (MOT1 and MOT4) left the main paths consistent in direction and significance; the social-norm direct path remained nonsignificant (β = 0.050, p = 0.300), and the model explained 50.8% of the variance in motivation. The authors note that motivation items about goal attainment and task difficulty may overlap with expectancy and utility value, so the associations should not be read as fully independent mechanisms. In the second phase, 30 adolescents and 30 adults answered four open-ended questions. Descriptive comparisons suggested adolescents more often viewed expectations as pressure while adults viewed them as motivating, but the authors state these results cannot confirm age differences or explain the non-significant direct path.

## What this means for practice
- **Instructors.** Clarify the steps needed to complete an AI-supported environmental task, and allow repeated attempts and revision so students can build expectations of success.
- **Instructors.** Use incremental goals, role-playing, and real-world application scenarios to strengthen the personal meaning and utility students see in AI-assisted environmental work.
- **Instructors.** Simplify how AI tools are used and give easy-to-understand operational guidance, since perceived cost was negatively associated with motivation.
- **Schools.** Provide accessible AI tools, [[open-source]] learning resources, and operational templates; these were the facilitating conditions with both direct and indirect associations.
- **Curriculum designers.** Treat social-norm signals as one part of a supportive environment: [[peer-assessment|peer assessment]] and public showcasing may strengthen value beliefs even though the direct norm-to-motivation path was not significant.

## Limitations
- **Cross-sectional design.** Temporal order and causal mechanisms among context, beliefs, and motivation cannot be established from these data.
- **Self-report only.** All core variables came from questionnaires, with possible social desirability bias and common method variance; actual AI use and environmental participation were not measured.
- **Regional and school selection.** Schools were in East and South China and already had an environmental-education foundation, limiting generalization to other cultural or resource settings.
- **Small follow-up sample.** The second phase had only 30 adolescents and 30 adults who differed in social roles and experience; measurement invariance was not tested before comparison.
- **Construct overlap.** Motivation items MOT2 and MOT3 may overlap with expectancy and utility value, and the two-item alternative represented a narrower intention-focused measure.
- **Partial cost coverage.** The cost items covered concerns such as weakened environmental education, over-reliance, and hindered general skills but not effort, opportunity, emotional, economic, or environmental costs.

## Citation

Wu H, Dong Y, Zhang X, Geng Y, and Wang X (2026) Adolescents’ Motivation for AI-Enabled Environmental Actions: The Role of Supportive Environments and Expectancy-Value Theory. *Behavioral Sciences*, 16, 2107. https://doi.org/10.3390/bs16112107
