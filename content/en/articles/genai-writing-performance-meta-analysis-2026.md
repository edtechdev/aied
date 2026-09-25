---
title: "Effectiveness of GenAI in Enhancing Writing Performance: A Meta-Analysis"
created: "2026-09-25T11:42:38-04:00"
updated: "2026-09-25T12:56:00-04:00"
type: article
sources: ['raw/papers/genai-writing-performance-meta-analysis-2026.md']
confidence: high
page_kind: [synthesis]
research_method: [secondary analysis]
discipline: [writing education, language learning]
level: [higher ed, undergraduate, graduate]
audience: [instructors, instructional designers, researchers, administrators]
foundations: [academic-integrity, cognitive-offloading, interpreting-and-applying-aied-research, theories-and-frameworks]
pedagogy: [metacognition, scaffolding, self-regulated-learning, sociocultural-learning, student-ai-interaction, transfer-of-learning]
technology: [conversational-ai, generative-ai, human-in-the-loop-ai, llm]
ethics: [ai-use-disclosure]
assessment: [ai-feedback-quality, automated-assessment, automated-essay-scoring, feedback, learning-gains]
methods: [meta-analysis-systematic-review, quantitative-research, research-methods-aied]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-25"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This [[meta-analysis-systematic-review|meta-analysis]] pooled [[generative-ai|GenAI]]-supported instruction's effects on second-language [[writing-education|writing]] across 11 study-level effects drawn from 31 eligible studies published between 2023 and 2026. The primary random-effects model gave a large pooled advantage, but heterogeneity was high enough that the author frames the result as implementation-contingent rather than universal. Bias diagnostics came back non-significant and a dependence-aware model still favored AI, though with a smaller estimate. The only robust [[research-methods-aied|moderator]] in [[meta-analysis-systematic-review|meta-regression]] was risk-of-bias classification: methodological quality, not pedagogy, explained most of the variance.

## Key Findings
1. Primary random-effects synthesis (DerSimonian–Laird, k = 11): g = 0.80, 95% CI [0.37, 1.22] — a large average advantage for AI-enhanced writing instruction.
2. Substantial between-study heterogeneity: Q(10) = 128.41, I² = 92.21%, τ² = 0.456.
3. Study-level effects ranged from g = −0.57 (one graduate-level study, 95% CI [−1.03, −0.11]) to g = 1.85, across samples of 39 to 274 participants in Chile, Hong Kong, Saudi Arabia, mainland China, and Iran.
4. Direction held under robustness checks: a cluster-robust RVE model on 18 effects from 6 studies gave g = 0.60, 95% CI [0.21, 0.98], p = 0.002; excluding in-press studies moved the estimate from g = 0.80 to g = 0.68; a high-risk-of-bias subgroup gave g = 0.55.
5. Bias diagnostics were non-significant — Egger p = 0.383 (intercept p = 0.574), Begg Kendall's tau p = 0.761 — with a PET-PEESE corrected effect of g = 0.64 (p = 0.050) and a prediction interval of [−0.59, 2.19].
6. Risk-of-bias classification (Unrated vs. High) was the only significant robust meta-regression predictor (β = 0.93, 95% CI [0.19, 1.68], p = 0.014; Pseudo R² = 0.50); duration (β = 0.05, p = 0.430), continuous sample size (p = 0.171), and instructional model (β = 0.41, p = 0.230) were not.
7. Instructional model was significant in subgroup analysis (QB = 27.26, p < 0.001), traditional classrooms (g = 1.19) outpacing AI-teaching contexts (g = 0.69), but the contrast weakened to non-significance under methodological control.

## How the evidence base was assembled
A January 1, 2026 search across Scopus and Web of Science returned 4,760 records (Scopus n = 3,077; Web of Science n = 1,683), 2,630 unique after de-duplication. Screening excluded 1,916 records; 714 full texts were assessed; after 302 and then 381 exclusions, 31 studies met all criteria within a peer-reviewed 2023–2026 English-language window. Coding followed Cooper's (2016) framework, with two doctoral-student coders reaching intercoder agreement of 0.852.

Risk-of-bias appraisal used ROBINS-I for 30 studies and RoB 2 for one: 21 rated high risk, 10 "some concerns," none low risk. Only 11 of the 31 studies entered the pooled model, each contributing one principal between-group post-test writing effect to preserve statistical independence and construct equivalence; of those, 8 were high risk, 3 unrated.

## A large average effect built on wide dispersion
A pooled [[feedback|feedback]] effect of g = 0.80 sits well above zero, but I² = 92.21% means almost all variability is between studies, not within them. The 95% prediction interval (−0.59 to 2.19) is the practical translation: a new implementation could plausibly yield a near-zero or negative effect. Every robustness variant — RVE, in-press-excluded, high-risk-of-bias — stayed positive but smaller: the direction is robust, the magnitude fragile.

## Moderators: methodological quality outruns pedagogy
The robust meta-regression (HC3 standard errors) found only risk-of-bias classification significant (β = 0.93, 95% CI [0.19, 1.68], p = 0.014), explaining roughly 50% of between-study variance (Pseudo R² = 0.50). Instructional model, country grouping, ChatGPT focus, duration, and sample size were all non-significant.

The instructional-model contrast collapsed under control: significant in subgroup analysis (QB = 27.26, p < 0.001; traditional classrooms g = 1.19 vs. AI-teaching g = 0.69), it fell to β = 0.41 (p = 0.230) once methodological quality and sample size were controlled — suggesting confounding by study quality, not pedagogical format. Duration was non-significant (β = 0.05, p = 0.430; Pseudo R² = 0.00) and non-missing for only k = 9 studies, too little range to detect a time effect. Sample size category was non-significant (QB = 0.50, p = 0.479), as was continuous sample size (p = 0.171).

## Lower-order gains, higher-order uncertainty, and a K–12 gap
The primary literature shows [[generative-ai|GenAI]] is consistently stronger on lower-order writing features — grammatical accuracy, lexical diversity, sentence-level fluency — while higher-order effects on argumentation, coherence, and critical reasoning remain inconsistent. The author links this to [[automated-essay-scoring|AI]]-only feedback being generic and formulaic, and reports consensus that hybrid human–AI models outperform AI-only configurations for discourse-level quality.

Education level, the moderator the study most wanted to test, could not be tested: all 11 pooled studies sat in higher education, with no primary or secondary settings — a hypothesis-generating gap multi-site, proficiency-stratified trials could fill.

## What this means for practice
- **Instructors.** Treat AI writing support as a designed instructional component, not a standalone treatment: embed it in structured revision cycles, guided reflection, and clear genre expectations; tool access alone does not guarantee gains.
- **Instructional designers.** Favor guided and [[human-in-the-loop-ai|hybrid]] configurations pairing AI suggestions with teacher feedback for higher-order outcomes (coherence, argumentation); AI-dominant delivery was weaker.
- **Administrators and research leaders.** Expect headline effects to shrink under stronger designs, risk-of-bias status being the strongest moderator. Fund longer (over 12 weeks), proficiency-stratified, multi-site trials testing durability, not just immediate facilitation.
- **Researchers.** Improve transparency on duration, teacher involvement, feedback protocols, assessment criteria, and learner characteristics, and pair outcome measures with process-level ones (revision behavior, uptake, [[metacognition|metacognitive monitoring]]) to explain heterogeneity current moderators leave unmodeled.

## Limitations
- The synthesis rests on only 11 independent study-level effects, constraining power for moderator analyses; the multivariate meta-regression risks overfitting.
- Heterogeneity exceeded 90% (I² = 92.21%) while most candidate moderators were non-significant, leaving explanatory variables — instructional orchestration, teacher mediation, learner metacognition, task design — unoperationalized or unreported.
- All pooled studies sat in higher education (no K–12 settings), limiting generalization across developmental stages.
- The evidence window (2023–2026) rests on earlier model generations, so the pooled effect may not transfer to current systems; the meta-analysis itself used ChatGPT 5.2 for proofreading, reference management, and analytical support.

## Connected Concepts
- [[meta-analysis-systematic-review]]
- [[generative-ai]]
- [[writing-education]]
- [[language-learning]]
- [[feedback]]
- [[scaffolding]]
- [[human-in-the-loop-ai]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[sociocultural-learning]]
- [[cognitive-offloading]]
- [[transfer-of-learning]]
- [[llm]]
- [[conversational-ai]]
- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[learning-gains]]
- [[quantitative-research]]
- [[higher-ed]]

## Connected Articles
- [[genai-writing-robma-reanalysis-2026]] — Is GenAI Helpful for Writing? A Re-Analysis Using Robust Bayesian Meta-Analysis (RoBMA)
- [[genai-educational-outcomes-meta-analysis]] — Generative AI technologies and educational outcomes: a comprehensive meta-analysis comparing traditional and AI-driven approaches
- [[elementary-writing-genai-systematic-review-2026]] — Rethinking Elementary Education's Writing Instruction in The Age of Generative AI: A Systematic Review
- [[chatgpt-academic-writing-quality-ownership-2026]] — Leveraging ChatGPT in academic writing: ChatGPT enhances students' writing quality, writing experience, and ownership
- [[ai-feedback-critical-thinking-writing-2026]] — Using AI-Generated Feedback to Improve Critical Thinking and Writing Proficiency
- [[genai-meta-analysis-programming-learning]] — A meta-analysis of the effect of generative AI on productivity and learning in programming

## Citation
Teng, M. F. (2026). [*Effectiveness of GenAI in enhancing writing performance: a meta-analysis*](https://doi.org/10.1186/s40862-026-00444-2). Asian-Pacific Journal of Second and Foreign Language Education.