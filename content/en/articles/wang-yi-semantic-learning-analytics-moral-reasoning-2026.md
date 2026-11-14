---
title: "Human-in-the-loop semantic learning analytics for assessing moral-value reasoning in university AI ethics education"
created: "2026-11-12T06:36:55-05:00"
updated: "2026-11-14T10:00:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-literacy, human-ai-collaboration]
pedagogy: [problem-solving, reflection]
technology: [learning-analytics, educational-nlp, human-in-the-loop-ai, machine-learning]
assessment: [assessment-validity, formative-assessment, educational-measurement]
methods: [mixed-methods-research, quantitative-research]
ethics: [ethics, privacy, bias-mitigation]
---
> **Synthesis:** The contribution is less that an AI ethics module changed students than that the *structure* of their [[ethics|moral reasoning]] can be scored at all. Ninety science and engineering graduate students completed a five-hour online module built around seven cases, then answered the same open-ended prompts about an unlabeled photograph of an AI research laboratory. Human coders labeled the responses against a 17-category scheme, and a language model trained on those labels reproduced expert judgments closely enough to be useful, well above keyword matching. That coding produced [[learning-analytics|learning analytics]] indicators for which values students invoked, how evenly, and whether they paired a problem with a remedy. Those indicators rose alongside knowledge, with the largest gain in spotting ethical problems rather than solving them.

## Key Findings

1. **Every outcome moved, but the design cannot attribute the movement to the module.** Knowledge, perceived and demonstrated moral awareness, problem-solving and problem–solution coupling all rose from before to after. With no comparison group, these are within-participant changes associated with completing the course.
2. **Students got better at spotting problems than at solving them.** The largest gain was in recognizing ethical issues; the gain in [[problem-solving|proposing workable responses]] was smaller. That gap is why the paper tracks coupling — whether an identified issue is matched to a remedy — rather than counting issues.
3. **Automated coding came close to expert judgment.** A language model trained on human labels reproduced them at a level the authors treat as usable, and far above keyword rules; a stock model without that training trailed it. The measured agreement is good enough for formative feedback, not for grading without review.
4. **The expert reference itself was not perfectly reliable.** Coders disagreed on a meaningful share of cases before adjudication, so part of any "error" in the automated coding is label noise rather than model failure.
5. **Value coverage broadened unevenly.** Students invoked more values, and more evenly, after the module, with the clearest growth in transparency and honesty, fairness and justice, and privacy and dignity. Human autonomy and civic-social responsibility stayed weak.
6. **Coupling gains survived sensitivity checks but depend on the ontology.** The result held when the adjacency rule was made stricter or looser, but the absolute level shifted with the rule, which means the number is a property of the scheme as much as of the students.
7. **Baseline data predicted later change only modestly.** A model using only pre-module information explained a small share of the variation in later problem-solving, and adding the semantic indicators barely improved it. The authors refuse to read those increments as mechanisms, and the ceiling is too low for triage.

## What the study measured

The design was a one-group pre–post [[mixed-methods-research|multimethod study]]: 94 graduate students in science and engineering programs were invited, 92 consented, and 90 completed both assessments. The paired sample was 53 male and 37 female; 50 from engineering and 40 from natural sciences; 48 master's and 42 doctoral students; 39 reported prior AI coursework. All instruction, instruments, and responses were in English.

The module ran about five hours through Moodle in a fixed sequence — AI ethics principles, seven cases, [[reflection|reflective writing]], solution design, and a summary with self-check. The outcome task showed a neutral photograph of an AI laboratory with no labels, value names, or coding cues, plus two prompts asking students to identify ethical issues and propose solutions. The same stimulus appeared at both measurement points; none of the seven [[case-based-learning|teaching cases]] reused it, which keeps the test task distinct from the taught examples but also means the same prompt was answered twice.

Measurement was deliberately layered. A 12-item knowledge test sat apart from an eight-item perceived-awareness scale, and both sat apart from expert-rated [[assessment|open-ended performance]]. The value ontology had six dimensions — fairness and justice, privacy and dignity, responsibility and accountability, transparency and honesty, human autonomy, and civic-social responsibility — retained by a five-member panel when at least four experts judged them relevant. The coding scheme had 10 issue and 7 solution categories. Four coders jointly coded 15% of responses before independent double-coding with senior adjudication; 360 response fields yielded 1,094 meaning units, aggregated to whole-field labels for modeling.

## Where the classifier held and where it slipped

The [[educational-nlp|semantic coding]] pipeline reached 0.83 macro-F1 on participant-grouped held-out data, against 0.57 for keyword rules, 0.78 for a stock RoBERTa model, 0.74 for BERT and 0.72 for SBERT. Predictions were never hand-corrected before scoring, so the figure is what an unaided deployment would deliver. For a construct as abstract as moral reasoning, that is a credible result and roughly the level at which a classifier can support a human reviewer.

Category-level results trace the boundary. Detection was strong for concrete risks to research subjects, data security, security breach and biased data, all near or above 0.84. It fell to 0.71 for lack of human autonomy, 0.69 for accountability, and 0.68 for employee training. Explicit technical and organizational vocabulary was detected reliably; abstract or implicit moral language was confused — manipulation with autonomy, [[explainable-ai|explainability]] with transparency, analysis errors with quality control. Low-prevalence labels were least stable across random seeds.

The descriptive counts show where the module landed. Students naming disclosure ambiguity rose from 4 to 23, biased data from 27 to 52, and risks to subjects from 45 to 68. Transparency proposals rose from 10 to 32, internal supervision from 18 to 35, and data security from 25 to 42, while employee training stayed rarest, moving from 3 to 7. Accountability barely moved, from 5 to 7, and human autonomy from 7 to 11. Repeated exposure to one scenario means these shifts could reflect learning, retest familiarity, or both.

## Prediction, and what it does not establish

The prediction analysis is the most carefully bounded part of the paper. Every predictor was restricted to information available before module completion: baseline knowledge, perceived awareness, actual ethical awareness, problem-solving, coverage, balance, coupling, background variables, and semantic components fitted inside each training fold. No post-test or gain-derived feature entered the model. Validation kept all four response fields from a participant in the same fold, so a student's own writing could not leak across the train-test boundary.

The resulting R² of 0.30 is best read as an honest ceiling for what baseline performance data can tell an instructor about who will gain. Adding coverage and balance moved it from 0.27 to 0.29, and adding coupling took it to 0.30 — increments the authors explicitly decline to treat as psychological mechanisms. A secondary model predicting post-test problem-solving while adjusting for baseline reached 0.33. The ranking of predictors describes the fitted model's dependence structure, not a causal story, and internal validation in 90 participants cannot support claims about other cohorts.

## What this means for practice

- **Instructors:** Score the chain, not the label. Ask students to name an issue, the value it implicates, and a specific remedy, then review where the chain breaks — issue recognition consistently outran solution quality here.
- **Assessment designers:** Keep a human-defined ontology and adjudication in the loop, and audit low-frequency categories first. Accountability and employee training were the least reliable labels, and that is where a reviewer's attention earns the most.
- **Learning analytics designers:** Report coverage and balance as descriptive features, never as quality scores. A response concentrated on one warranted value can be ethically stronger than a broad one, and the authors are careful to say so.
- **Curriculum designers:** Add cases on automation dependence and public governance. Human autonomy and civic-social responsibility were the least activated values, and links from accountability to regulation were uncommon.
- **Researchers:** Treat expert-labeled semantic coding as an instrument that needs its own reliability reporting. Pre-adjudication agreement around 0.80 to 0.84 means part of any measured disagreement is label noise.

## Limitations

- The one-group pre–post design had no contemporaneous control, so the observed changes cannot be attributed to the module and may reflect testing, retest familiarity, maturation, history, or regression to the mean.
- The same scenario and two prompts were used at both time points; stimulus priming and retest effects cannot be separated from learning-related change.
- One scenario samples reasoning in a particular AI-research context, so the study cannot support claims about stable or global moral-value reasoning across unrelated domains.
- N = 90 is modest for [[machine-learning|machine learning]] analysis, all results are internal-validation estimates, and low-prevalence labels such as accountability and employee training were unstable; external replication is required.
- The six-value ontology, category–value mapping, and issue–solution adjacency matrix were expert-defined, so coupling and coverage are ontology-dependent and may not generalize across cultures, disciplines, or alternative moral-psychology frameworks.
- One author contributed to course delivery, leaving an instructor–participant power asymmetry, and the baseline semantic, coding, and coupling features all derive from the same response format; the module was short and outcomes immediate, so long-term value internalization is untested.

## Citation

Wang, Y., & Yi, Z. (2026). [*Human-in-the-loop semantic learning analytics for assessing moral-value reasoning in university AI ethics education*](https://doi.org/10.3389/fpsyg.2026.1951847). *Frontiers in Psychology, 17*, 1951847. https://doi.org/10.3389/fpsyg.2026.1951847
