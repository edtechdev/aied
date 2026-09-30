---
title: "Pre-Service Teachers' Perceptions of AI Technological Support and School-Based Intelligent Environment Support: Model-Based Indirect Associations with Innovative Competence via AI Self-Efficacy and Self-Regulated Learning"
created: "2026-09-30T14:30:00-04:00"
updated: "2026-09-30T14:30:00-04:00"
type: article
sources: ['raw/papers/10.3390_bs16081378.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
level: [teacher education, higher ed, undergraduate]
audience: [instructors, faculty developers, researchers, administrators]
foundations: [ai-education, teacher-ai-competency, teacher-role, limitations-in-aied-research]
pedagogy: [self-regulated-learning, self-efficacy]
technology: [ai-technologies, technology-acceptance-model]
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

> **Synthesis:** Liu, Zhang and Du surveyed 3,003 pre-service teachers across 12 provinces in mainland China in one cross-sectional wave and asked whether two kinds of perceived AI support — [[ai-technologies|AI technological support]] and perceived school-based intelligent environment support — were associated with innovative competence, and whether AI [[self-efficacy]] and [[self-regulated-learning]] carried model-based indirect associations. Both supports showed positive associations with innovative competence (standardized paths 0.128 and 0.251), and both mediators showed significant bootstrap indirect associations. The patterns differed by support type: AI technological support rose across middle-to-upper quantiles of innovative competence, while school-based intelligent environment support followed an inverted U shape, strongest at low-to-middle quantiles. Because all five variables were measured in one survey period, no causal direction is established.

## Key Findings

- **Both supports were positively associated with innovative competence.** In the structural model, the standardized paths were 0.128 for AI technological support and 0.251 for school-based intelligent environment support (both p < 0.001).
- **The two mediators were also associated with the outcome.** AI self-efficacy had a standardized path of 0.329 to innovative competence and self-regulated learning 0.313 (both p < 0.001).
- **Under AI technological support, the efficacy route was the larger indirect association.** The indirect estimate through AI self-efficacy was 0.179, 95% CI [0.147, 0.213], accounting for 60.88% of that path's total effect; the parallel path through self-regulated learning was 0.119, 95% CI [0.092, 0.147], 51.07%. The difference favored AI self-efficacy (point estimate 0.061, CI [0.017, 0.104], p = 0.007).
- **Under school-based intelligent environment support, the pattern reversed.** The indirect estimate through AI self-efficacy was 0.045, 95% CI [0.031, 0.062], 18.60% of the total effect; through self-regulated learning it was 0.083, 95% CI [0.062, 0.106], 29.64%. The difference was −0.038, CI [−0.066, −0.012], p = 0.005.
- **The two supports had different quantile profiles.** In quantile regression across the 0.10 to 0.90 quantiles of innovative competence, AI technological support moved from 0.278 to 0.407 and strengthened through the middle-to-upper quantiles, while school-based intelligent environment support peaked at 0.618 (quantile 0.40) and fell to 0.267 by the 0.90 quantile.
- **AI interest tracked innovative competence more strongly than AI use.** Overall innovative competence was M = 3.79, SD = 0.60, with innovation practice lowest (M = 3.68, SD = 0.72) against innovation willingness (M = 3.87, SD = 0.62) and innovation readiness (M = 3.83, SD = 0.64). AI interest level showed η² = 0.116 against η² = 0.029 for AI usage frequency; urban household registration, higher family income, a parental degree, humanities majors and above-undergraduate grade all showed significantly higher innovative competence (for urban registration, t(3001) = −2.342, p = 0.019, Cohen's d = 0.086). Gender and institution type differences were not significant.

## How the study was built

The empirical base was a questionnaire returned by 3,214 respondents, of which 211 were excluded as invalid, leaving 3,003 valid responses (93.43%). Participants were pre-service teachers at undergraduate and professional master's levels, recruited from [[higher-ed|higher education]] institutions in 12 provinces in eastern, central and western mainland China through multi-site convenience sampling via institutional collaboration networks rather than probability sampling — a limitation the authors state directly. All five core constructs were [[self-report-measures|self-reported]] on 5-point Likert scales: pre-service teachers' innovative competence (9 items across innovation willingness, readiness and practice), self-regulated learning (5 items), AI self-efficacy (6 items), and the two support measures (11 items in total). Reliability was high (overall Cronbach's alpha 0.959; item loadings 0.60 to 0.85). Analysis used difference tests, quantile regression, and structural equation modeling with bias-corrected percentile bootstrap mediation tests; the five-factor measurement model fit adequately (χ²/df = 9.624, RMSEA = 0.054, CFI = 0.953).

## Reading the mediation contrast

The authors deliberately specified AI self-efficacy and self-regulated learning as parallel mediators, on the grounds that social cognitive theory does not establish a unidirectional ordering between them, and they label the indirect magnitudes as model-based statistical pathways rather than evidence of distinct causal psychological mechanisms. The substantive contrast is that perceived support from AI tooling runs more strongly through confidence in using AI, whereas perceived support from the school's intelligent environment runs more strongly through self-regulated learning. In the specified model, school-based intelligent environment support also had the larger direct path estimate of the two supports.

## What this means for practice

- **Faculty developers: treat the two supports as different levers.** School-based intelligent environment support carried the larger direct path estimate (0.251 against 0.128 for AI technological support), so resources, [[edtech-platform|platforms]] and collaboration networks are where a program-level intervention starts.
- **Instructors: pair every AI tool with confidence building.** Under AI technological support, the indirect association through AI self-efficacy was 60.88% of that path's total effect (0.179, CI [0.147, 0.213]), so [[scaffolding]] that lowers [[anxiety-and-stress|technology anxiety]] and gives early successful AI use matters as much as access.
- **Learning-support designers: make self-regulation part of the provision.** Under school-based intelligent environment support, self-regulated learning carried the larger indirect share (29.64%, 0.083, CI [0.062, 0.106]) against AI self-efficacy (18.60%, 0.045, CI [0.031, 0.062]); build planning, monitoring and reflection routines into intelligent environments, and watch for [[cognitive-offloading]] where the platform pre-structures the work.
- **Administrators: target AI interest, not hours logged.** AI interest level's effect size (η² = 0.116) far exceeded that of AI usage frequency (η² = 0.029), and the study cannot say which came first, so frame campaigns around curiosity and purpose rather than usage counts.

## Limitations

- **The design is cross-sectional.** All five variables were measured in one survey period, so neither temporal ordering nor causal direction can be established; pre-service teachers with higher innovative competence may be the ones who seek out AI support in the first place. The parallel-mediator specification is also a modeling choice, and a serial or reciprocal relation between AI self-efficacy and self-regulated learning remains possible.
- **All measures are single-source self-report.** Every construct came from the same questionnaire, completed by the same respondents, in the same period, so social desirability and common-source bias may inflate or deflate the associations. The authors' checks (a single-factor comparison and an unmeasured latent method factor) did not indicate serious common method bias, but the data source remains a single one.
- **Sampling was not probability-based.** Recruitment ran through institutional collaboration networks rather than a national sampling frame, so the sample should not be treated as representative of pre-service teachers in China, and applicability to other countries, cultures and [[teacher-education|teacher education]] systems is untested.
- **The support measures are broad.** AI technological support captured an overall perception and did not distinguish [[generative-ai|generative AI]], [[intelligent-tutoring|intelligent tutoring systems]], feedback tools or [[simulation]] environments, so the analysis cannot say which AI tool types drive the associations.

## Citation

Liu, X., Zhang, M., & Du, J. (2026). [Pre-Service Teachers' Perceptions of AI Technological Support and School-Based Intelligent Environment Support: Model-Based Indirect Associations with Innovative Competence via AI Self-Efficacy and Self-Regulated Learning](https://doi.org/10.3390/bs16081378). *Behavioral Sciences*, 16(8), 1378.