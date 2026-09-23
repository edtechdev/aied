---
title: "Designing for AI literacy: psychological mechanisms and self-determination"
created: "2026-09-23T13:05:00-04:00"
updated: "2026-09-23T13:05:00-04:00"
type: article
foundations: [ai-literacy, critical-thinking]
pedagogy: [self-determination-theory, motivation]
technology: [generative-ai, prompt-engineering]
assessment: [authentic-assessment]
methods: [quantitative-research, rct]
research_method: [experiment, survey]
audience: [instructors, instructional designers, researchers]
level: [higher ed]
page_kind: [evaluation]
sources: ['raw/papers/yu-designing-ai-literacy-self-determination-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]

---

> **Synthesis:** Yu, Lin and Chen (2026) ran a randomized 2 × 2 experiment with 320 university students to test how instructional approach (skills-based versus thinking-based) and task type (structured versus open-ended) shape [[ai-literacy|AI literacy]] performance, and whether autonomy, competence, and relatedness explain the effect. Performance was scored with an objective rubric on an AIGC image-generation task, while autonomy, competence, and relatedness were measured by self-report after completion. Thinking-based instruction beat skills-based instruction under both task conditions, and by a wider margin on open-ended tasks. The structural model showed that the two design choices travel through different routes: instruction worked indirectly through autonomy and competence, while task openness worked mainly through autonomy. Competence was the strongest psychological predictor of performance, and relatedness had no independent effect. A configurational analysis found three separate routes to high performance, so the study argues for alignment between instructional emphasis, task openness, and the psychological needs a design actually supports, rather than one preferred method.

## Key Findings

- Thinking-based instruction (M = 9.21) outperformed skills-based instruction (M = 7.69) on the objectively rated AIGC task, F(1, 316) = 50.79, p < 0.001, ηp² = 0.138.
- Open-ended tasks (M = 9.05) produced higher performance than structured tasks (M = 7.85), F(1, 316) = 31.45, p < 0.001, ηp² = 0.091.
- Instruction and task type interacted, F(1, 316) = 7.22, p = 0.008, with a larger thinking-based advantage under open-ended tasks (10.10 versus 8.00) than structured tasks (8.33 versus 7.38).
- Competence was the strongest psychological predictor of performance (β = 0.358), followed by autonomy (β = 0.132); relatedness had no independent effect.
- Instructional approach worked indirectly through autonomy (β = 0.035) and competence (β = 0.079), while task openness operated mainly through autonomy (β = 0.029).
- The model explained 43.3% of the variance in performance (R² = 0.433), and fuzzy-set analysis found three sufficient configurations for high performance (coverage 0.588, consistency 0.913).

## Study Design and Method

The design was a 2 (instructional approach: skills-based versus thinking-based) × 2 (task type: structured versus open-ended) between-subjects experiment. A total of 320 undergraduates from one Chinese university (mean age 20.1, SD = 1.3) were assigned by permuted-block randomization to four groups of 80. Each group watched a standardized six-minute Mandarin video, contrasting procedural prompt techniques with model limitations, critical evaluation, and ethics. Participants then completed a constrained or open-ended brief for a [[generative-ai|generative image]] task, submitting a final image, [[prompt-engineering|prompt]], process statement, and selection rationale. Two blind raters scored the work with a four-to-twelve-point rubric covering practical application, critical evaluation, and responsible use; agreement was high (ICC = 0.89).

## Psychological Mechanisms

The Likert measures told a more specific story than the average effects. Competence was the strongest independent predictor of rubric performance (β = 0.358), with autonomy a smaller but significant contributor (β = 0.132), and relatedness was not significant. Instructional approach raised performance indirectly through both autonomy and competence, which fits an account in which critical instruction gives learners a basis for independent judgment and for diagnosing unfamiliar outputs. Task openness moved performance mainly through autonomy. Because the needs were measured after the task, successful performance may itself have lifted autonomy or competence, so these paths fit the proposed mechanisms without establishing them causally.

## Configurations and Alignment

The fuzzy-set analysis asked which combinations of conditions were sufficient for high performance. No single condition was necessary, and three configurations met the thresholds. One combined thinking-based instruction with structured tasks and high competence; another combined skills-based instruction with open-ended tasks and high autonomy; the third combined thinking-based instruction with open-ended tasks and high competence, and had the largest coverage (0.458). Aligned bundles therefore matter more than a single preferred method.

## What this means for practice

- **Instructors.** Move AI literacy instruction beyond procedural prompting toward model principles, limitations, critical evaluation, and ethics, because thinking-based instruction outperformed skills-based instruction under both task conditions.
- **Instructors.** Pair open-ended tasks with enough conceptual support for learners to justify independent decisions, since openness ran through autonomy rather than competence.
- **Designers.** Prioritize competence and autonomy through worked examples, diagnostic [[feedback|feedback]], revision opportunities, and meaningful choice; competence was the strongest predictor of performance (β = 0.358).
- **Designers.** Add collaborative structures such as peer critique if relatedness is a target, because the individual task left relatedness without an independent effect.
- **Researchers.** Extend this single-site, short-duration design to multi-site replication.

## Limitations
- Participants came from one university and all had prior experience with AIGC image tools, so findings may not extend to other institutions, disciplines, levels, or complete beginners.
- The intervention was brief and outcomes were measured immediately after a single 20 to 25 minute activity, leaving persistence and transfer untested.
- The open-ended task allowed more interpretive freedom while the rubric rewarded prompt complexity, iterative optimization, and ethical reflection, so higher scores there may partly reflect alignment between task affordances and the scoring criteria.
- The psychological needs were self-reported after completion, leaving reverse causality possible, and the configurational results depend on the chosen calibration anchors.

## Connected Concepts

- [[ai-literacy]]: the competency the instruction targets
- [[self-determination-theory]]: autonomy, competence, and relatedness
- [[motivation]]: intrinsic motivational pathways
- [[generative-ai]]: AIGC image generation as the authentic task
- [[prompt-engineering]]: the focus of skills-based instruction
- [[higher-ed]]: the undergraduate setting

## Connected Articles

- [[liang-ai-learning-motivation-sdt-2026]]: SDT and AI learning motivation
- [[aigc-affordance-student-self-regulation-2026]]: Self-efficacy and motivation as AIGC mediators
- [[liu-ai-literacy-interventions-meta-analysis-2026]]: Meta-analysis of AI literacy interventions

## Citation

Yu, S., Lin, Y., & Chen, C. (2026). [*Designing for AI literacy: psychological mechanisms and self-determination*](https://doi.org/10.3389/fpsyg.2026.1937845).