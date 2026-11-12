---
title: "Human-in-the-loop semantic learning analytics for assessing moral-value reasoning in university AI ethics education"
created: "2026-11-12T08:20:00-05:00"
updated: "2026-11-12T08:20:00-05:00"
type: article
page_kind: [evaluation]
research_method: [process-outcome modeling]
evidence_context: educational
published: "2026-11-02"
discipline: [engineering education, science education]
level: [graduate, higher ed]
audience: [instructors, assessment designers, learning analytics designers, researchers]
sources: ['raw/papers/wang-yi-semantic-learning-analytics-moral-reasoning-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1951847"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-literacy, human-ai-collaboration]
pedagogy: [problem-solving, reflection]
technology: [learning-analytics, educational-nlp, human-in-the-loop-ai, machine-learning]
assessment: [assessment-validity, formative-assessment, educational-measurement]
methods: [mixed-methods-research, quantitative-research]
ethics: [ethics, privacy, bias-mitigation]
---
> **Synthesis:** The contribution is less that an AI ethics module changed students than that the *structure* of their [[ethics|moral reasoning]] can be scored at all. Ninety science and engineering graduate students completed a five-hour online module built around seven cases, then answered the same open-ended prompts about an unlabeled photograph of an AI research laboratory. Four coders labeled 1,094 meaning units from 360 response fields against a 17-category scheme; a frozen RoBERTa encoder learned to reproduce those labels at participant-grouped macro-F1 = 0.83 (95% CI [0.78, 0.87]; micro-F1 = 0.86; macro-AUPRC = 0.82), above keyword rules (0.57) and RoBERTa (0.78). That coding fed three descriptive indicators — [[learning-analytics|value coverage, value balance]], and problem–solution coupling — which rose alongside knowledge (6.37 to 10.26) and actual ethical awareness (2.68 to 3.97, dz = 1.45). A leakage-controlled model using only pre-module data explained R² = 0.30 of later problem-solving change. The authors insist that broader, more even value activation describes a response, not its moral quality.

## Key Findings

1. **Every outcome moved, but the design cannot attribute the movement to the module.** Knowledge rose from 6.37 to 10.26 (dz = 1.19), perceived moral-value awareness from 3.69 to 4.00 (dz = 0.70), and coupling from 0.29 to 0.48 (dz = 0.88), with Holm-adjusted p < 0.001 on six outcomes and p = 0.002 on value balance; Wilcoxon tests held the same direction at p ≤ 0.003. With no control group, these are within-participant changes associated with completion.
2. **Students got better at spotting problems than at solving them.** Actual ethical awareness produced the largest standardized gain (2.68 to 3.97, dz = 1.45), while [[problem-solving|problem-solving skills]] rose from 1.99 to 2.96 (dz = 1.17). Identifying ethical risk was easier than proposing feasible responses, which is why the coupling indicator matters more than an issue count.
3. **Automated coding approached, but did not replace, expert judgment.** The [[educational-nlp|semantic coding]] pipeline reached macro-F1 = 0.83, micro-F1 = 0.86, and macro-AUPRC = 0.82, with a standard deviation of 0.03 across five random seeds. Comparison models trailed: RoBERTa-base 0.78, BERT-base 0.74, SBERT 0.72, keyword-rule analysis 0.57. Held-out predictions were never hand-corrected before scoring.
4. **The human reference carried measurable disagreement.** Pre-consensus Krippendorff's α was 0.82 for ethical-issue categories and 0.80 for solutions; ordinal α was 0.84 for actual ethical awareness and 0.81 for problem-solving. Acceptable reproducibility still left non-trivial coder disagreement — a corrective to treating expert labels as unqualified ground truth.
5. **Value representation broadened, unevenly.** Coverage rose from 0.41 to 0.63 and balance from 0.52 to 0.68. Activation increased most for transparency and honesty (0.18 to 0.51), fairness and justice (0.34 to 0.62), and privacy and dignity (0.56 to 0.78); human autonomy (0.22 to 0.36) and civic-social responsibility (0.19 to 0.33) stayed weak.
6. **Coupling gains survived sensitivity checks but remain ontology-dependent.** The primary adjacency rule retained 49 of 70 issue–solution links at a ≥4/5 expert threshold (Fleiss' κ = 0.72). Mean coupling was 0.29 pre and 0.48 post; a ≥3/5 matrix gave 0.31 and 0.50 (dz = 0.84), and a 5/5 matrix 0.26 and 0.45 (dz = 0.86). Absolute levels shift with the matrix; the pattern does not.
7. **Baseline data predicted later change only modestly.** The full baseline-only XGBoost model reached R² = 0.30 (95% CI [0.11, 0.45]), MAE = 0.56, RMSE = 0.71. Adding coverage and balance moved R² from 0.27 to 0.29, and adding coupling took it to 0.30 — increments the authors refuse to read as psychological mechanisms. SHAP ranked baseline problem-solving first, then baseline coupling and baseline actual ethical awareness.

## What the study measured

The design was a one-group pre–post [[mixed-methods-research|multimethod study]]: 94 graduate students in science and engineering programs were invited, 92 consented, and 90 completed both assessments. The paired sample was 53 male and 37 female; 50 from engineering and 40 from natural sciences; 48 master's and 42 doctoral students; 39 reported prior AI coursework. All instruction, instruments, and responses were in English.

The module ran about five hours through Moodle in a fixed sequence — AI ethics principles (60 minutes), seven cases (90), reflective writing (60), solution design (60), summary and self-check (30). The outcome task showed a neutral photograph of an AI laboratory with no labels, value names, or coding cues, plus two prompts asking students to identify ethical issues and propose solutions. The same stimulus appeared at both measurement points; none of the seven teaching cases reused it.

Measurement was deliberately layered. A 12-item knowledge test (KR-20 = 0.78 pre, 0.72 post; S-CVI/Ave = 0.93) sat apart from an eight-item perceived-awareness scale (Cronbach's α = 0.75 pre, 0.81 post; S-CVI/Ave = 0.95), and both sat apart from expert-rated [[assessment|open-ended performance]]. The value ontology had six dimensions — fairness and justice, privacy and dignity, responsibility and accountability, transparency and honesty, human autonomy, and civic-social responsibility — retained by a five-member panel when at least four experts judged them relevant. The scheme had 10 issue and 7 solution categories. Four coders jointly coded 15% of responses before independent double-coding with senior adjudication; 360 response fields yielded 1,094 meaning units, aggregated to whole-field labels for modeling.

## Where the classifier held and where it slipped

Category-level results trace the boundary of the approach. F1 was 0.88 for risks to subjects (support 113), 0.87 for data security (67), 0.86 for security breach (73), and 0.84 for biased data (79). It fell to 0.71 for lack of human autonomy (18), 0.69 for accountability (12), and 0.68 for employee training (10). Explicit technical and organizational vocabulary was detected reliably; abstract or implicit moral language was confused — manipulation with autonomy, explainability with transparency, analysis errors with quality control. Low-prevalence labels were least stable across seeds.

The descriptive counts show where the module landed. Students naming disclosure ambiguity rose from 4 to 23, biased data from 27 to 52, and risks to subjects from 45 to 68. Transparency proposals rose from 10 to 32, internal supervision from 18 to 35, and data security from 25 to 42, while employee training stayed rarest at 3 to 7. Accountability barely moved, from 5 to 7, and human autonomy from 7 to 11. Repeated exposure to one scenario means these shifts could reflect learning, retest familiarity, or both.

## Prediction, and what it does not establish

The prediction analysis is the most carefully bounded part of the paper. Every predictor was restricted to information available before module completion: baseline knowledge, perceived awareness, actual ethical awareness, problem-solving, coverage, balance, coupling, background variables, and semantic principal components fitted inside each training fold. No post-test or gain-derived feature entered the model. Validation used five seeded repetitions of participant-level fivefold outer splits with fourfold inner selection, keeping all four response fields from a participant in the same fold, with PCA dimensionality chosen inside inner training folds (median 10 components).

The resulting R² = 0.30 is best read as an honest ceiling for what baseline performance data can tell an instructor about who will gain. A secondary model predicting post-test problem-solving while adjusting for baseline produced R² = 0.33 (95% CI [0.15, 0.47]). SHAP rankings describe the fitted model's dependence structure, the authors stress, not causal or psychological mechanisms, and internal validation in 90 participants cannot support transportability claims.

## What this means for practice

- **Instructors.** Score the chain, not the label: ask students to name an issue, the value it implicates, and a specific remedy, then review where the chain breaks. Coupling rose from 0.29 to 0.48, but issue recognition (dz = 1.45) consistently outran solution quality (dz = 1.17).
- **Assessment designers.** Keep a human-defined ontology and adjudication in the loop, and audit low-frequency categories first — accountability (F1 = 0.69, support 12) and employee training (F1 = 0.68, support 10) were least reliable.
- **Learning analytics designers.** Report coverage and balance as descriptive features, never quality scores; a response concentrated on one warranted value can be ethically stronger than a broad one.
- **Curriculum designers.** Add cases on automation dependence and public governance: human autonomy (0.22 to 0.36) and civic-social responsibility (0.19 to 0.33) were least activated, and accountability-to-regulation links were uncommon.
- **Researchers.** Treat expert-labeled semantic coding as an instrument needing its own reliability reporting; pre-consensus α of 0.80–0.84 means part of any measured disagreement is label noise.

## Limitations

- The one-group pre–post design had no contemporaneous control, so the observed changes cannot be attributed to the module and may reflect testing, retest familiarity, maturation, history, or regression to the mean.
- The same scenario and two prompts were used at both time points; stimulus priming and retest effects cannot be separated from learning-related change.
- One scenario samples reasoning in a particular AI-research context, so the study cannot support claims about stable or global moral-value reasoning across unrelated domains.
- N = 90 is modest for machine-learning analysis, all results are internal-validation estimates, and low-prevalence labels such as accountability and employee training were unstable; external replication is required.
- The six-value ontology, category–value mapping, and issue–solution adjacency matrix were expert-defined, so coupling and coverage are ontology-dependent and may not generalize across cultures, disciplines, or alternative moral-psychology frameworks.
- One author contributed to course delivery, leaving an instructor–participant power asymmetry, and the baseline semantic, coding, and coupling features all derive from the same response format; the module was short and outcomes immediate, so long-term value internalization is untested.

## Citation

Wang, Y., & Yi, Z. (2026). [*Human-in-the-loop semantic learning analytics for assessing moral-value reasoning in university AI ethics education*](https://doi.org/10.3389/fpsyg.2026.1951847). *Frontiers in Psychology, 17*, 1951847. https://doi.org/10.3389/fpsyg.2026.1951847
