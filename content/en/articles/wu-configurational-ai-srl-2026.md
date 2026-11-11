---
title: "A Configurational Approach to Investigating the Use of Artificial Intelligence in Self-Regulated Learning From Needs Satisfaction, Learning Environments and Perceived Affordances"
created: "2026-11-11T07:41:43-05:00"
updated: "2026-11-11T08:09:35-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [survey]
audience: [researchers, instructors]
sources: ['raw/papers/wu-configurational-ai-srl-2026.md']
source_url: "https://doi.org/10.1002/jcal.70371"
source_depth: full text
confidence: high
pedagogy: [self-regulated-learning, motivation]
technology: [generative-ai]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Wu, Xia, Ahmad and Chiu ask which combinations of motivational and technology-acceptance conditions accompany high [[self-regulated-learning|self-regulated learning]] when students use AI tools. Instead of estimating average effects, they ran a fuzzy-set qualitative comparative analysis on survey data from 248 students, treating eight conditions — three self-determination-theory needs, four UTAUT constructs and perceived affordance — as a configurational set. No condition was necessary, and twelve sufficient pathways emerged, with overall solution coverage of 0.57 and consistency of 0.88. The highest-coverage pathway pairs relatedness satisfaction with facilitating conditions and the absence of effort expectancy, suggesting that [[scaffolding|support structures]] and relational context can sustain strategic regulation even when [[generative-ai|AI tools]] feel hard to use.

## Key Findings

1. **No condition was necessary for high SRL.** Consistency for every condition and its negation stayed below the 0.90 benchmark; the highest values were relatedness satisfaction (0.78), effort expectancy (0.76), facilitating conditions (0.76) and performance expectancy (0.75), so the authors treat the outcome as conjunctural rather than driven by any single factor.
2. **Twelve sufficient configurations covered a little over half the cases.** The intermediate solutions reached an overall solution coverage of 0.57 (57.1% of cases) with solution consistency of 0.88, and individual raw coverage ranged from 0.050 (Solution 6a) to 0.357 (Solution 6b).
3. **The highest-coverage pathway runs through support rather than ease.** Solution 6b combines core relatedness satisfaction and core facilitating conditions with the core absence of effort expectancy (raw coverage = 0.357, consistency = 0.934), plus peripheral competence satisfaction, performance expectancy and social influence. Students who find AI effortful still report high SRL when the environment supplies training, access and guidance and when they feel connected to peers and instructors.
4. **A second pathway is agentic and low-friction.** Solution 2b has core autonomy satisfaction, relatedness satisfaction and effort expectancy (raw coverage = 0.338, consistency = 0.929), with competence satisfaction, performance expectancy and facilitating conditions present peripherally. The authors interpret this as self-endorsed use of AI as a strategic resource rather than compliance with a requirement.
5. **An instrumental–normative pathway does not require feeling competent.** Solutions 1a and 1b share core performance expectancy, effort expectancy and social influence (raw coverage = 0.178 and 0.203; consistency = 0.841 and 0.951); in 1a, competence satisfaction is peripherally absent and perceived affordance is absent as a core condition. Usefulness, ease and endorsement can carry SRL without perceived capability or a rich reading of what the tool affords.
6. **The post hoc regression split the pathways.** Tobit models found significant coefficients for 1a (0.58, p = 0.02), 1b (0.61, p = 0.04), 2a (0.82, p = 0.00), 5a (0.86, p = 0.00), 5b (0.81, p = 0.05) and 6b (0.66, p = 0.02), but not for 2b (0.08, p = 0.76), 2c (0.47, p = 0.22), 3 (0.01, p = 0.98), 4a (−0.69, p = 0.11), 4b (0.15, p = 0.64) or 6a (0.53, p = 0.34). Coverage rank and regression significance therefore diverge.
7. **The solution held under looser thresholds.** Lowering the consistency cutoff from 0.8 to 0.75 produced solution coverage of 0.53 and consistency of 0.83, and a random split of the sample gave Subset 1 0.50 coverage and 0.89 consistency in the complex solution (0.84 coverage and 0.80 consistency in the parsimonious solution), with Subset 2 at 0.61 coverage and 0.87 consistency (0.79 coverage and 0.76 consistency).

## What the study did

Participants were 248 undergraduate and graduate students (163 female, 85 male) aged 18 to 22, with a mean age of 19.2 years, drawn from computer science, finance, economics, art, foreign languages and business. Eligibility required at least one use of an AI tool in self-directed or teacher-directed learning in the previous six months, and recruitment ran through class announcements and student forums as a convenience sample. The survey was administered online in April 2024 over two weeks, used scales with Cronbach's alpha from 0.75 to 0.90 and forced completion, so the analyzed data had no missing values.

The outcome was an overall SRL score built from eight dimensions of the SRL-O framework: academic self-efficacy, intrinsic motivation, extrinsic motivation, goal setting and time management, [[metacognition|metacognition]], effort regulation, social support and task strategies. Eight antecedent conditions were calibrated into fuzzy sets at the 25th percentile (non-membership), the median (crossover) and the 75th percentile (full membership), and each of the 256 logically possible configurations was tested against a frequency cutoff of 1 and a consistency cutoff of 0.8. That the design uses eight conditions on 248 cases is a deliberate theoretical choice by the authors, who report sensitivity checks on the calibration anchors.

## How to read the pathways

The value of the analysis is the equifinality, not any single solution. The same outcome arrives by routes that look psychologically opposite: Solution 1a reaches high SRL through usefulness, ease and social pressure while competence and perceived affordance are absent, whereas Solution 2b reaches it through autonomy, relatedness and ease. Solution 6b is the clearest compensatory case. Effort expectancy is core-absent, yet relatedness and facilitating conditions are core-present, which the authors read as training, troubleshooting and relational support offsetting the cost of a demanding tool.

Two cautions follow from the authors' own tables. First, the abstract and conclusion name autonomy satisfaction, relatedness satisfaction and performance expectancy as the pivotal combination, but the highest-coverage solution (6b) does not contain autonomy or performance expectancy as core conditions, and the second (2b) contains effort expectancy rather than performance expectancy at its core. The three-factor summary is the authors' interpretation, not a direct reading of the coverage column. Second, the paper describes perceived affordances as mediators and moderators, but the design is a cross-sectional survey analyzed with set relations plus a Tobit regression on solution membership; neither tests a mediation or moderation model. Those claims are theoretical framing, and the authors acknowledge that SEM or regression would be needed to test them.

## What this means for practice

- **Instructors:** Do not treat ease of use as a precondition for AI-supported regulation. The highest-coverage pathway (0.357) had effort expectancy absent at its core, so pair demanding tools with training, exemplars of prompting and verification, and help-desk support rather than withdrawing the tool.
- **Instructors:** Offer choices over how AI is used — brainstorming, self-testing, feedback-based revision — and structure peer discussion of prompts and evaluation criteria, because relatedness satisfaction is a core condition in both of the highest-coverage pathways and autonomy is core in 2b.
- **Designers:** Build for strategy enactment, not just satisfaction: transparent options, editable steps and prompts that ask students what the AI helped them do and what they will verify, given that perceived affordance is core-absent in the instrumental pathway where SRL still occurred.
- **Administrators:** Treat unequal access to devices, subscriptions and guidance as an [[equity-in-ai-education|equity]] problem, since facilitating conditions carry the largest compensatory role in the solution set and the authors tie their uneven distribution to uneven SRL benefits.
- **Researchers:** Report solution coverage and consistency alongside regression results, and expect the two to disagree; here 2b ranked second on coverage but was non-significant in the Tobit model, which a single-pathway study would have hidden.

## Limitations

The sample is 248 students who had already used AI tools, recruited by convenience sampling, so the configurations describe experienced users rather than novices and may not transfer to other institutions, disciplines, educational levels or policy environments. Every construct is self-reported, which invites common-method bias, and the design is cross-sectional, so temporal ordering and reciprocal relations among needs, acceptance beliefs and SRL go untested. Calibration against sample quartiles also makes membership scores relative to this distribution, which limits comparison with other samples. Finally, the post hoc Tobit results are inconsistent with the coverage ranking, and no effect sizes or confidence intervals for the configurations themselves are reported beyond coverage and consistency.

## Citation

Wu, X.-Y., Xia, Q., Ahmad, Z., & Chiu, T. K. F. (2026). [A Configurational Approach to Investigating the Use of Artificial Intelligence in Self-Regulated Learning From Needs Satisfaction, Learning Environments and Perceived Affordances](https://doi.org/10.1002/jcal.70371). *Journal of Computer Assisted Learning, 42*, e70371. https://doi.org/10.1002/jcal.70371
