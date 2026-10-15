---
title: "Metacognitive training and AI-based Socratic scaffolding in pre-service teachers' reflective practice: a dual-study experimental design"
created: "2026-10-15T09:15:00-04:00"
updated: "2026-10-15T09:15:00-04:00"
type: article
sources: ['raw/papers/metacognitive-training-ai-socratic-scaffolding-preservice-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
level: [teacher education, higher ed]
audience: [instructors, faculty developers, researchers]
pedagogy: [metacognition, self-regulated-learning, socratic-method, scaffolding, student-ai-interaction]
technology: [generative-ai, conversational-ai, llm]
assessment: [feedback, learning-gains, assessment-validity]
methods: [quantitative-research, research-methods-aied]
foundations: [teacher-ai-competency, critical-thinking, cognitive-offloading, teacher-role, human-ai-collaboration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-15"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Does [[metacognition|metacognitive]] preparation make [[generative-ai]] a more productive partner for [[teacher-role|teacher]] reflection, or is tool access enough? Zhang and colleagues answer with two linked studies. Study 1 randomized 60 pre-service teachers in a 2 × 2 between-subjects [[rct|experiment]] crossing metacognitive strategy training against a placebo module, with a [[llm|large language model]] configured as a [[socratic-method|Socratic]] reflection partner versus traditional digital tools. Written reflection quality at post-test was analyzed by ANCOVA with pre-test performance as covariate. Both main effects were significant, but the interaction was the headline: under metacognitive training the Socratic system produced a model-estimated advantage of 0.56 points over traditional tools, while without that training the tool difference vanished (ΔM = −0.03). Study 2 analyzed 487 dialogue prompts and found trained users generated 44.1% higher-order prompts versus 12.2% for placebo-trained peers. The authors conclude that learner [[self-regulated-learning|self-regulation]] preparation, not tool access, conditions whether dialogic AI supports deeper [[critical-thinking|reflective]] practice, and they frame the finding as bounded rather than a general AI effect.

## Key Findings
1. Study 1's 2 × 2 randomized design (N = 60, n = 15 per cell) found a significant metacognition × tool interaction on post-test written reflection quality, F(1, 55) = 10.91, p = 0.002, η2p = 0.165.
2. Metacognitive training showed a strong main effect, F(1, 55) = 33.89, p < 0.001, η2p = 0.381; the tool condition also mattered, F(1, 55) = 9.63, p = 0.003, η2p = 0.149.
3. Under metacognitive training, AI-based Socratic scaffolding beat traditional digital tools by 0.56 model-estimated points (p < 0.001); under placebo training the contrast was negligible (ΔM = −0.03, p = 0.821).
4. Interaction gains concentrated in depth and attribution (η2p = 0.293), theory and perspective taking (η2p = 0.271), and strategy generation and transfer (η2p = 0.179), not in description or report structure.
5. Study 2 coded 487 prompts (254 from trained users, 233 from placebo users): trained participants produced 44.1% higher-order prompts versus 12.2% for placebo peers, t(28) = 7.14, p < 0.001, d = 2.61.
6. The interaction survived Cook's D exclusion (F = 10.41, p = 0.002), HC3 heteroskedasticity-robust inference (p = 0.004), and per-protocol analysis (N = 53; F = 11.34, p = 0.002).
7. Post-test rubric quality correlated moderately with the Reflective Practice Questionnaire dimensions for understanding, reflection, and critical reflection, r = 0.451, p < 0.001.

## Separating learner preparation from tool access

Study 1 carries the central claim. Sixty third-year pre-service teachers drawn from a [[teacher-education|teacher education]] program were stratified-randomized into a 2 × 2 between-subjects design crossing metacognitive training (a 20-minute module on planning, self-questioning, monitoring, and evaluation) with tool condition: a DeepSeek V3 interface configured as a [[socratic-method|Socratic]] reflection partner, or a conventional online text editor and digital repository. Participants analyzed matched teaching-case vignettes for 30 minutes at pre-test and post-test, and two trained raters scored the written reflections with a five-dimension rubric (ICC 0.891 at pre-test, 0.903 at post-test). The result is conditional rather than additive. Under metacognitive training, the AI system exceeded traditional tools by 0.56 model-estimated points; within the AI condition, training added 0.79 points, whereas the same training under traditional tools added a non-significant 0.21. The authors read this as [[self-regulated-learning|self-regulation]] allowing learners to use external [[scaffolding|support]] more selectively and strategically.

## How trained learners talked to the AI

Study 2 addresses the process side by analyzing dialogue logs from the two AI conditions—487 user prompts after excluding system errors, blank inputs, and off-task small talk. Prompts were coded against revised Bloom's Taxonomy and the [[icap-framework|ICAP framework]] into surface-level, procedural, and metacognitive-driven inquiry; two doctoral students coded a 20% sample with Cohen's κ = 0.86. The distribution shifted sharply: trained participants produced 44.1% higher-order prompts versus 12.2% for placebo-trained peers, an effect of d = 2.61, while total interaction counts did not differ significantly, t(28) = 1.12. Illustrative excerpts make the contrast concrete—placebo users asked for judgments and ready-made improvement plans, whereas trained users requested counterfactuals, competing explanations, and critique of their own reasoning. Because [[student-ai-interaction|interaction]] volume was comparable across groups, the authors treat the pattern as a difference in how the same configured system was used, not merely how often it was used.

## What the results do and do not establish

The authors are explicit about scope. The tool condition bundled generative capability with progressive probing, adaptive dialogue, and [[feedback]] structure, so the observed effect cannot be attributed to generic [[generative-ai|AI]] access or to Socratic questioning alone. Study 2 is process evidence consistent with the proposed pathway, not a participant-level mediation test, and the paper states it cannot be described as explaining a demonstrated moderation effect. Measurement caveats also apply: the rubric's inter-rater reliability documents scoring consistency rather than construct validity, and the 16-item Reflective Practice Questionnaire (overall α = 0.808 at pre-test, 0.878 at post-test) serves as secondary convergent support in a small sample. The framing is deliberately conditional—within this configured environment, metacognitive preparation is a condition for realizing higher-quality reflective practice—and the authors call for larger preregistered replications plus dismantling studies that isolate the individual AI components from one another.

## What this means for practice
- **Instructors.** Pair AI-supported reflection tasks with explicit metacognitive training—self-questioning, evidence evaluation, goal setting, and strategy monitoring—instead of assuming that tool access produces reflection, since the interaction shows access alone yields no advantage.
- **Faculty developers.** Train learners to interrogate AI output, compare alternative explanations, and justify decisions rather than drilling prompt syntax, because metacognitive preparation tracks [[teacher-ai-competency|AI competency]] in use.
- **Curriculum designers.** Specify the [[pedagogy|pedagogical]] role assigned to [[conversational-ai|the AI]], the form of adaptive guidance, and verification expectations before scaling a reflection tool across a program.
- **Assessment designers.** Evaluate reflective work with process-oriented evidence such as prompt logs alongside outcome rubrics, and treat reliability evidence as distinct from [[assessment-validity|validity]].
- **Institutions.** Budget for learner preparation and process evaluation, not just licenses, and anticipate [[cognitive-offloading|offloading]] risk when [[ai-feedback-quality|AI feedback]] is poorly calibrated to learners' mental models.

## Limitations
- Small sample: 60 participants with 15 per factorial cell limits precision and subgroup generalizability, so the authors call for larger preregistered replications.
- Single site: participants were pre-service teachers from one Chinese university, and cultural norms around teacher authority, reflection, and technology use may shape both training responses and AI interaction patterns.
- Bundled technology contrast: AI generation, adaptive questioning, dialogic interaction, and feedback were not separately manipulated, so no component can be isolated as the active ingredient.
- Short intervention with immediate measurement: persistence, transfer to authentic classroom practice, and effects of accumulating AI experience remain unknown.
- The questionnaire psychometric check ran on a small experimental sample; confirmatory factor analysis, measurement invariance, and cross-cultural validation require larger samples.
- Study 2 is not a mediation test: the log analysis does not estimate a participant-level indirect effect linking training, prompt quality, and outcomes.

## Citation
Zhang, W. L., Sun, S., Hu, L., Liu, L., Gao, W., & Li, S. (2026). [*Metacognitive training and AI-based Socratic scaffolding in pre-service teachers' reflective practice: a dual-study experimental design*](https://doi.org/10.3389/fpsyg.2026.1960962). *Frontiers in Psychology*.
