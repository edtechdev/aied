---
title: "Generative AI use and scientific literacy among 15-year-olds in Beijing, Shanghai, Jiangsu, and Zhejiang, China"
created: "2026-11-10T18:30:00-05:00"
updated: "2026-11-10T18:30:00-05:00"
type: article
page_kind: [synthesis]
research_method: [secondary analysis, survey]
evidence_context: educational
discipline: [science education]
level: [secondary]
audience: [instructors, researchers, administrators]
sources: ['raw/papers/wu-genai-scientific-literacy-china-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.2013021"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [cognitive-offloading, ai-literacy]
pedagogy: [help-seeking, self-regulated-learning, metacognition]
technology: [generative-ai, conversational-ai]
assessment: [self-report-measures]
methods: [quantitative-research]
institutions: []
ethics: [equity-in-ai-education]
---

> **Synthesis:** Wu, Jiao, Yang, Wang and Dong (2026) exploit the first PISA cycle to ask 15-year-olds how often and why they use [[conversational-ai|AI chatbots]] for schoolwork, and find that the headline correlation is a real zero: [[generative-ai|GenAI use]] and [[science-education|scientific literacy]] were unrelated at the bivariate level (r = 0.00) among 12,191 students in 374 schools across Beijing, Shanghai, Jiangsu and Zhejiang. Decomposing that zero through [[self-regulated-learning]] shows why. Students who used GenAI more often than their schoolmates reported more [[help-seeking|academic help-seeking]] (β = 0.169) and more [[metacognition|metacognitive strategy use]] (β = 0.300), and help-seeking predicted higher scores, producing a positive indirect association of 0.013 that offsets about 42% of a negative direct association (−0.048, about 4 PISA points). What students used the tool for mattered more than how often: holding overall use constant, "to help me learn" was worth +5.8 points per response category and the other uses −6.6. The design is cross-sectional, so these are [[quantitative-research|associations]], not effects of use.

## Key Findings
1. **The bivariate correlation was zero.** GenAI use correlated r = 0.00 with scientific literacy, but r = 0.17 with ESCS and 0.21 to 0.35 with both self-regulation mediators, so the null hid offsetting paths.
2. **More use went with more help from people.** Within schools, more frequent GenAI use predicted more academic help-seeking (β = 0.169, 95% CI [0.144, 0.194]) — asking classmates and teachers, not chatbots.
3. **Help-seeking carried the positive path.** Help-seeking predicted scientific literacy (β = 0.077, about 6.7 points), and the indirect association of 0.013 [0.009, 0.017] stayed positive in every robustness model.
4. **The direct association was negative.** Controlling both mediators, GenAI use was associated with 4.2 points lower scientific literacy (β = −0.048); the total was −0.028 [−0.050, −0.006], about 2.4 points.
5. **Metacognition's path ran through self-efficacy.** Metacognitive strategies barely predicted scientific literacy (β = 0.025), and their indirect association fell to 0.002 once science self-efficacy entered, leaving the serial paths trivial.
6. **Purpose separated students by 12.4 points.** Holding overall use constant, "to help me learn" was +5.8 points per response category and summarizing, researching or drafting −6.6, a difference of 12.4 points [9.0, 15.9].
7. **Heaviest users carried the negative association.** The relation was curvilinear (quadratic β = −0.030): students 2 SD above their school's mean scored 13.9 points lower, though only 2.4% were that far out.

## Why the zero correlation was the puzzle

The zero is a composition, not an absence. GenAI use was more common among students from advantaged families (r = 0.17 with ESCS), and a single-level regression put its association with scientific literacy at 0.004, 95% CI [−0.028, 0.036] without controls and at −0.052 [−0.080, −0.024] once ESCS was held constant. The second move is multilevel: with an intraclass correlation of 0.47, nearly half the variance in scientific literacy lay between schools, so every predictor was split into a within-school deviation and a school mean. Only the within-school coefficients, which compare students with their own schoolmates, speak to the hypotheses.

Set against the direct path, the two self-regulatory routes produce competitive mediation, as the authors call it: indirect effects of one sign, a direct effect of the other. The authors argue this is one reason the field's evidence looks inconsistent — depending on which pathway dominates in a sample, the overall association can come out positive, negative or null.

## Two mediators, two different fates

Both self-regulatory measures moved with use, but only one carried weight. GenAI use predicted metacognitive strategy use (β = 0.300) more strongly than help-seeking (β = 0.169), yet help-seeking predicted scientific literacy at 0.077 (about 6.7 points) against 0.025 for metacognitive strategies. Once science [[self-efficacy]] entered as a second-stage mediator, that weak path disappeared (β = 0.002) while self-efficacy predicted scientific literacy at 0.108 (about 9.4 points) — a coherent chain, but a practically trivial one.

Help-seeking was the durable route: positive for all four purposes, stable under multiple imputation and a three-item score, reproduced in the design-based model. It weakened when perseverance and family support were added, the GenAI-to-help-seeking path falling from 0.169 to 0.090, which the authors read as shared dispositions or social resources accounting for part of the link. A reverse-order model with help-seeking as the predictor fit equally well (β = 0.063, 95% CI [0.037, 0.089]).

## Purpose of use carries more information than frequency

Examined one at a time, the purposes diverged: summarizing assigned texts was associated with lower scientific literacy (total β = −0.061, about −5.3 points) and researching new topics with −0.029 (about −2.5), while drafting (0.004) and "help me learn" (0.020, 95% CI [−0.001, 0.041]) were not significant. The sharper test entered the learning item and the mean of the other three together among 10,301 users, so each coefficient describes a shift in purpose at a fixed level of overall use: a shift toward learning was worth 5.8 points, a shift toward the other uses −6.6.

The [[icap-framework|ICAP]] reading is that explaining a concept or checking one's reasoning leaves the student doing the constructive work, while condensing a reading or surveying a topic delivers the product of work the student would otherwise have done — the [[desirable-difficulties|effortful processing]] a test taken without digital assistance later samples. Two qualifications: the purposes were highly correlated, so balance rather than single use distinguishes students, and purpose may follow achievement, since a student who struggles with readings has more reason to ask for a summary.

## Reading the direct path: offloading or selection?

The negative direct association is consistent with [[cognitive-offloading|offloading]]. PISA's science test is taken without digital assistance, so a student who routinely delegates summarizing and drafting has fewer occasions to practice the independent reasoning it measures, and the exploratory curve concentrates the deficit in heavy users: relative to their school's mean, students 1 SD above scored 4.3 points lower and 2 SD above 13.9 points lower, though only 2.4% of students were that far out.

The authors give reverse causation equal weight: students who struggle with science may use chatbots more to keep up, and the same features fit both accounts — the concentration in heavy users, and a deficit strongest for summarizing, the purpose most useful to a student who finds the reading difficult. PISA carries no prior achievement measure, so the two cannot be separated. The design-based model with school fixed effects and 80 BRR replicate weights reproduced the estimates to the third decimal, and no path differed by gender or [[equity-in-ai-education|socioeconomic status]].

## What this means for practice

- **Instructors.** Ask what the tool was used for, not whether it was used. The 12.4-point gap between learning-oriented and other purposes at equal frequency is the actionable distinction, so set tasks that require students to explain a concept or defend their reasoning.
- **Instructors.** Route chatbot output back into class. Make "bring a question the chatbot raised" a routine contribution to discussion, since the strongest positive path runs through asking teachers and classmates rather than through the tool.
- **Administrators.** Fund [[ai-literacy|instruction in judging AI-generated information]] before widening access: 55.3% of students had never or almost never been asked in lessons to assess the quality of AI-generated information, and 32.2% reported that AI tools were not available to them at school.
- **Researchers.** Record purpose alongside frequency and measure help-seeking with source and timing built in. The paper's limits point to panel designs with prior achievement and episode-level data on whom students ask about what.

## Limitations

- The data are cross-sectional PISA 2025 with no measure of prior achievement; the authors state that every path could run in reverse, and their reverse-order model fits as well as the hypothesized one.
- Help-seeking was four [[self-report-measures|self-reported]] items about asking classmates and teachers in general (ST433), with no reference to science, to GenAI, or to when help was sought relative to chatbot use.
- GenAI use was four frequency items (ST438Q01–Q04) that say nothing about subject, interaction quality, or whether students verified output, and the "help me learn" item spans asking for explanations and asking for answers.
- Associations are small — at most about 6 points per standard deviation within schools — and within-school variance is only about half the total (ICC = 0.47).
- The analytic sample of 12,191 from 12,385 excluded 194 students who scored 59 points lower in science, so the lowest achievers are slightly under-represented despite the multiple-imputation check.
- The four regions are economically developed, with a weighted mean of 598.1 (SD = 87.2), so frequency, access and the absence of socioeconomic differences may not transfer elsewhere.

## Citation

Wu, B., Jiao, X., Yang, C., Wang, J., & Dong, Q. (2026). [*Generative AI use and scientific literacy among 15-year-olds in Beijing, Shanghai, Jiangsu, and Zhejiang, China: the mediating role of academic help-seeking*](https://doi.org/10.3389/fpsyg.2026.2013021). Frontiers in Psychology, 17:2013021.
