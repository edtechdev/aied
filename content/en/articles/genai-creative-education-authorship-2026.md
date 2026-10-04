---
title: "Generative AI in creative education: baseline-linked evidence on learning processes, artistic performance, and authorship"
created: "2026-10-04T09:05:00-04:00"
updated: "2026-10-04T09:05:00-04:00"
type: article
sources: ['raw/papers/genai-creative-education-authorship-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [process-outcome modeling]
discipline: [arts education]
level: [higher ed, undergraduate]
audience: [instructors, curriculum designers, researchers]
technology: [generative-ai]
pedagogy: [creativity, self-efficacy]
assessment: [assessment, authentic-assessment]
methods: [quantitative-research]
foundations: [academic-integrity, ai-literacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A study of 133 [[higher-ed|undergraduates]] in an art course links prior grades, a final creative-performance assessment and post-project [[self-report-measures|questionnaires]] to separate two kinds of [[generative-ai]] use — assistive use for ideation, refinement and technique learning, and content-generative use in which AI contributes to the output. The headline is a process-outcome decoupling: AI use is associated with stronger perceived support and skill transfer, while final artistic performance and baseline-to-final change show no matching gain. Content-generative use goes further and is associated with lower evaluated authorship, which the authors read as AI-shaped artifacts obscuring students' own creative decisions. The recommendation follows from that: judge integration by how students document, justify and reflect on AI within the process, not by the artifact alone.

## Key Findings

1. AI use tracked the learning process but not the product: binary AI use was positively associated with aesthetic judgment (β = 0.28, p = 0.010), skill transfer (β = 0.26, p = 0.01) and, more weakly, perceived support (β = 0.16, p = 0.055), while final artistic performance and performance change showed no corresponding association.
2. Baseline-adjusted models put AI use alongside quality confidence (β = 0.36, p < 0.001) and display identity (β = 0.29, p < 0.001), with display readiness only marginal (β = 0.15, p < 0.10).
3. Prior course performance was the most stable predictor of outcomes: baseline score predicted final total (β = 0.46), [[creativity]] (β = 0.39), authorship (β = 0.37) and completion (β = 0.43), all p < 0.01, and negatively predicted performance change (β = -0.61, p < 0.001) because lower-scoring students had more room to move.
4. Content-generative AI use was associated with lower evaluated authorship (authorship ANOVA F = 10.34, p < 0.001, η² = 0.137), the strongest signal that AI-shaped artifacts reduce the visibility of students' creative decision-making.
5. Once prior performance and AI experience were controlled, binary AI use sat close to zero across development-oriented outcomes (standardized coefficients 0.04 to 0.07, none significant); the process variable that did track them was internalization — continuation intention (β = 0.51, p < 0.001), social value orientation (β = 0.28, p < 0.05) and development orientation (β = 0.40, p < 0.001).
6. The design is observational: 133 students in one undergraduate art course, with linked administrative and survey data analyzed through baseline-adjusted models, propensity-score adjustment and robustness checks across alternative AI-use definitions.

## How the study was built

The sample is 133 students in an undergraduate art course, and the design is unusual in linking three data sources rather than relying on a single self-report: prior course performance, the final creative-performance assessment scored by evaluators, and post-project questionnaire responses. AI use was deliberately split into two dimensions. Assistive use covers ideation, refinement, process management and technique learning; content-generative use covers AI contributions to the creative output itself. That split is what allows the paper to separate a process effect from a product effect.

Because the course is not a [[rct|randomized trial]], the analysis leans on adjustment. Baseline-adjusted outcome models control for prior performance and prior AI experience, performance-change models capture movement from baseline to final, propensity-score adjustment tries to balance students who used AI more against those who used it less, and robustness checks re-run the models under alternative definitions of AI use. Evaluator agreement on the 20-point creative rating scales was checked with Cohen's kappa after score reconciliation.

## The process-outcome decoupling

The central result is that the two dimensions of AI use do not move the same outcomes. Students who used AI reported stronger perceived support, greater skill transfer and higher aesthetic judgment, and after baseline adjustment also higher quality confidence and display identity. On the artifact side the picture is flat: final artistic performance and the baseline-to-final change show no corresponding improvement once prior performance and AI experience are held constant.

The paper's caution is that a process gain is not a learning gain. Positive self-reports can coexist with unchanged evaluated work, which is exactly why the authors resist reading perceived support as evidence of skill. The strongest predictor throughout is prior performance, which is also the least surprising result and the one that most disciplines the AI findings: students who arrived stronger finished stronger.

## Authorship and the visibility of creative decisions

The second contribution concerns [[academic-integrity|authorship]]. Content-generative AI use was associated with lower evaluated authorship, with the analysis-of-variance contrast on authorship the largest effect in the paper (η² = 0.137). The interpretation is not that students cheated but that an AI-shaped artifact makes the student's creative decision-making harder for an evaluator to see — the process is real, the evidence of it is thinner.

That reframes the practical problem. If the worry is legibility rather than honesty, the remedy is documentation: prompts, drafts, discarded options and justifications that let an evaluator follow the decisions. The authors argue for exactly this, and their internalization results support it — internalization of AI use, rather than the raw percentage of AI involvement, is what associates with continuation intention and development orientation.

## What this means for practice

- **Instructors.** Assess the creative process alongside the artifact. The study's authorship result says an evaluator cannot infer a student's decisions from an AI-shaped final piece, so require the process trail — prompts, iterations, rejected options and a short justification — as part of the submission.
- **Curriculum designers.** Treat AI use as a skill to be internalized rather than a tool to be permitted or banned. Internalization was the process variable that tracked development outcomes, so design reflection and justification steps into the assignment rather than leaving AI use unexamined.
- **Program leads and administrators.** Be skeptical of perceived-support gains as evidence of learning. Students in this course felt more supported and reported more skill transfer without a matching rise in evaluated performance, so any AI initiative should report an artifact-level outcome next to the satisfaction measure.
- **Researchers.** Replicate the assistive-versus-content-generative split before generalizing. One art course with 133 students cannot tell whether the authorship effect is a property of creative disciplines, of this [[assessment|assessment design]], or of the particular cohort.

## Limitations

- The study is observational, not experimental: AI use was self-selected, so propensity-score adjustment reduces but cannot eliminate confounding by students' prior motivation and ability.
- The sample is 133 students in a single undergraduate art course at one institution, and the authors present it as an investigation of that course rather than a generalizable estimate.
- AI use is measured through self-reported dimensions and questionnaire responses, so the process measures carry common-method and social-desirability risk.
- The outcome models rest on evaluator ratings of creative performance; the authors report kappa-based agreement, but a single evaluative rubric still narrows what "performance" can capture.
- The follow-up is post-project only, so the study cannot say whether the process gains persist or whether they later translate into artifact quality.

## Citation

Shen, N., Lee, L. S., & He, A. (2026). [Generative AI in creative education: baseline-linked evidence on learning processes, artistic performance, and authorship](https://doi.org/10.3389/fpsyg.2026.1956939). *Frontiers in Psychology, 17*.
