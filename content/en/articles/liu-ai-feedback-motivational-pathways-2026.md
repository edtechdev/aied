---
title: "AI-Assisted Feedback in Higher Education: Mechanisms, Efficacy, and Motivational Pathways — A Mixed-Methods Investigation"
created: "2026-11-11T07:42:02-05:00"
updated: "2026-11-11T08:09:35-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [survey]
audience: [researchers, instructors]
sources: ['raw/papers/liu-ai-feedback-motivational-pathways-2026.md']
source_url: "https://doi.org/10.1016/j.caeai.2026.100691"
source_depth: full text
confidence: high
foundations: []
pedagogy: [scaffolding, metacognition, student-engagement, motivation]
technology: [generative-ai, llm, intelligent-tutoring]
assessment: [feedback, formative-assessment]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Liu et al. (2026) assigned undergraduates across three Chinese courses to one of twelve [[feedback|feedback]] conditions — four foci crossed with three complexity levels — inside an eight-week AI [[intelligent-tutoring|tutoring system]]; 247 completed every phase, and 24 were interviewed. Perceived AIFB quality predicted competence (β = 0.52), autonomy (β = 0.44) and relatedness (β = 0.28), all p < 0.001. Process and [[self-regulated-learning|self-regulation]] feedback strengthened the autonomy path, self-level feedback the relatedness path, and elaborated feedback beat basic feedback on competence and autonomy. Competence carried 38% of the effect on learning gains, autonomy 34% of the effect on engagement, relatedness 22% of the effect on persistence — a need-specific account of how [[motivation|motivation]] mediates [[learning-gains|achievement]].

## Key Findings

1. **Quality predicted all three needs, unevenly.** AIFB quality predicted perceived competence at β = 0.52 (R² = 0.31), autonomy at β = 0.44 (R² = 0.24) and relatedness at β = 0.28 (R² = 0.12), each p < 0.001, controlling for pre-test scores, gender and course.
2. **Focus changed where the path ran.** For autonomy, process feedback gave β = 0.58 against 0.41 for task feedback, Δχ²(1) = 7.84, p < 0.01, and self-regulation feedback gave β = 0.61 against 0.41, Δχ²(1) = 9.23, p < 0.01. For relatedness, self-level feedback gave β = 0.39 against 0.21 for task feedback, Δχ²(1) = 6.91, p < 0.01.
3. **One focus effect stayed marginal.** The self-regulation advantage on competence was β = 0.59 against 0.48 for task feedback, Δχ²(1) = 3.76, p = 0.052, which the authors report as partial support for that hypothesis.
4. **Elaboration produced a gradient.** Competence rose from β = 0.41 under basic feedback to 0.53 under intermediate and 0.62 under elaborated feedback, Δχ²(1) = 10.27, p < 0.001 for elaborated against basic. Autonomy rose from 0.36 to 0.53, Δχ²(1) = 8.42, p < 0.01. Relatedness was not moderated by complexity.
5. **Mediation was need-specific.** Competence carried 38% of the effect on learning gains, β = 0.19, 95% CI [0.12, 0.26]; autonomy carried 34% of the effect on engagement, β = 0.16, 95% CI [0.10, 0.23]; relatedness carried 22% of the effect on persistence, β = 0.08, 95% CI [0.03, 0.14]. Relatedness did not mediate achievement, β = 0.03, 95% CI [−0.02, 0.08].
6. **Four themes matched three pathways and added one.** Interviews yielded gap transparency, agency in feedback uptake and perceived partnership with AI, corresponding to the competence, autonomy and relatedness routes. The inductive fourth, calibration of effort, ran the other way: rich feedback signaled high standards, while basic feedback led some learners to invest less because "the AI wasn't going to catch the subtle issues anyway."
7. **The design was randomized but not a classroom trial.** Of 287 recruited students, 247 completed all phases, an 86% retention rate; 62% were female and M_age = 20.4 (SD = 2.1). Assignment to the 12 cells was stratified by course and pre-test score, but moderations rest on groups of 61–63 (focus) and 82–83 (complexity), which the authors treat as provisional pending power and invariance checks.

## How the feedback was built

The intervention was a self-developed wrapper around GPT-4 rather than an off-the-shelf [[conversational-ai|chatbot]], and the reason matters for interpretation: every learner in a condition received feedback from an identical, archived prompt template. Twelve version-controlled prompt-template combinations implemented the four foci of Hattie and Timperley (task, process, self-regulation, self) and the three levels of Shute's taxonomy (basic, intermediate, elaborated), differing only in the instruction under study. The submission–feedback–revision loop was held constant, so the comparison is between [[pedagogy|pedagogical]] messages, not between interfaces.

Measurement ran at weeks 0, 4 and 8. Perceived AIFB quality used an eight-item adaptation of the Feedback Perceptions Questionnaire (α = 0.89); the need scales were the four-item Perceived Competence scale (α = 0.91), the five-item Perceived Autonomy scale (α = 0.88) and a five-item relatedness scale adapted to refer to the learning environment (α = 0.86). Learning gains were post-test minus pre-test scores and entered the model as a single observed indicator, not a latent factor. Persistence came from system logs — feedback requests, review time and revisions. The measurement model fit acceptably, χ²(362) = 684.27, p < 0.001, CFI = 0.94, TLI = 0.93, RMSEA = 0.058, 90% CI [0.051, 0.065], SRMR = 0.051.

The [[qualitative-research|qualitative]] phase sampled 24 students in week 9 for interviews of 35–60 minutes, varying course, gender, prior achievement and logged engagement. Reflexive thematic analysis with two independent coders on six transcripts reached 87% agreement, and the authors report the intervention against the TEP-[[ai-education|AIED]] disclosure model.

## Why the pathways diverge

The pattern is coherent if feedback focus is read as a pedagogical message rather than a content category. Process and self-regulation feedback tell learners that strategies are choosable and that monitoring is theirs, which is why the autonomy path is strongest there. Self-level feedback addresses the person, and it is the only condition that moved relatedness, which is the need an AI environment is worst placed to meet: relatedness had the lowest mean of the three needs at 3.42 (SD = 0.79). Elaborated feedback supplies reasons, examples and hints, which is the material from which competence is built, and the monotonic gradient from 0.41 to 0.53 to 0.62 is consistent with that reading.

The interviews corroborate the routes without testing them. Students described seeing exactly where an argument broke down, choosing when to open a hint, feeling accompanied by a warm response, and reading feedback richness as a signal about how much preparation was warranted. The last theme is the interesting extension, because effort calibration is a [[metacognition|metacognitive]] decision the three-need model does not contain: feedback design appears to set the standard learners expect to be held to, and basic feedback can license a lower investment.

One caution attaches to the whole paper: it is a journal pre-proof, the accepted manuscript before copyediting and final typesetting. The substance is complete, but the version of record may differ in detail.

## What this means for practice

- **Designers:** expose focus and complexity as configuration, not as a single "[[ai-feedback-quality|AI feedback]]" switch. Elaboration buys competence, process and self-regulation prompts buy autonomy, and warm [[personalized-learning|personalization]] buys relatedness — but praise aimed at the person should stay tied to progress rather than flooding the response.
- **Instructors:** decide which outcome you want before choosing a feedback mode. If the target is grades, elaboration is the lever; if it is engagement, strategy and monitoring prompts with real learner choice are; if it is persistence, the relational register matters more than information density.
- **Administrators:** procurement questions should ask whether a product can vary feedback focus and depth and log learner uptake. A generic generator that always produces the same elaborated commentary leaves three of the four design levers unused.
- **Researchers:** between-group path comparisons at these group sizes are underpowered, and the marginal competence result shows it. Replication needs larger cells, delayed outcomes and models other than GPT-4.

## Limitations

The study ran at one Chinese university, with students nested in three courses and instructors, so despite random assignment it was not a true [[rct|randomized controlled trial]] and course-level variance is confounded with the manipulations. Eight weeks is short, and no delayed post-test tests whether motivational effects persist. One model, GPT-4, at one point in time supplied all feedback. Needs and engagement are [[self-report-measures|self-reported]], perceived quality rests on a single adapted scale, and the relatedness measure was rewritten for a non-social context, which raises a construct-validity question the authors acknowledge. Learning gains are a single-indicator gain score. Moderation analyses compare paths across groups of 61–63 and 82–83, and the self-regulation versus task difference in the competence path reached only p = 0.052.

## Citation

Liu, C., Lv, H., Zhou, W., & Yan, S. (2026). [AI-Assisted Feedback in Higher Education: Mechanisms, Efficacy, and Motivational Pathways — A Mixed-Methods Investigation](https://doi.org/10.1016/j.caeai.2026.100691). *Computers and Education: Artificial Intelligence*. https://doi.org/10.1016/j.caeai.2026.100691
