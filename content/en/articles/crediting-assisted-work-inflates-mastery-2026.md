---
title: "Crediting assisted work inflates mastery: a preregistered comparison of evidence rules in intelligent tutoring logs"
created: "2026-09-23T09:16:41-04:00"
updated: "2026-09-23T09:16:41-04:00"
type: article
published: "2026-09-18"
sources: ['raw/papers/crediting-assisted-work-inflates-mastery-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis]
discipline: [math education]
level: [k 12]
audience: [instructors, researchers, educational technology developers]
pedagogy: [mastery-learning, help-seeking, prior-knowledge]
technology: [knowledge-tracing, student-modeling, intelligent-tutoring, learning-analytics]
assessment: [assessment-validity, educational-measurement, learning-gains]
methods: [quantitative-research, benchmark, research-methods-aied]
ethics: [ai-use-disclosure]
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-23"
    agent: hermes-agent
---

> **Synthesis:** Four [[knowledge-tracing]] update rules ran over identical event sequences in the public ASSISTments 2012–13 mathematics logs from an [[intelligent-tutoring]] platform, differing only in how they score assisted rows. Crediting any completion as a success predicted later unaided performance worst (pooled AUC 0.604), barely above a constant that knows only skill difficulty (0.595), and declared 93.9% of student–skill pairs mastered against 72.8% under a rule that reads assisted rows as failed first attempts (0.658). On 12,716 students and 985,813 scored events, all four preregistered predictions held, and pairs the lenient rule declared early went on to 0.709 unaided accuracy against 0.857 where the rules agreed. Which rule produced a [[mastery-learning|mastery]] claim decides what it means.

## Key Findings
1. **The rule that reads only first attempts predicted unaided work best.** Strict reached pooled AUC 0.658 on the confirmatory half, against 0.604 for crediting any completion and 0.595 for the skill-difficulty constant.
2. **Crediting completions declared almost every pair mastered.** face_value first reached 0.95 for 106,538 of 113,428 student–skill pairs (93.9%), against 82,595 (72.8%) under strict — twenty one pairs in a hundred changing status.
3. **Pairs the lenient rule declared early performed below average.** Among 104,309 lenient declarations with a later scored event, 58% had also reached 0.95 under strict; the groups went on to 0.857 and 0.709 accuracy, under the 0.744 base rate.
4. **Discarding assisted rows was worse than reading them as failures.** unaided_only scored 0.623 against strict's 0.658 (contrast −0.035), because 71% of the 252,455 failed first attempts sit inside assisted rows.
5. **Reaching criterion with a hint predicted weaker later work.** Of 91,891 pairs reaching the three-correct criterion, hinted pairs went on to 0.683 against 0.819 unaided, and holding path length fixed halved the gap.
6. **The ordering survived parameter sensitivity.** Fixed priors lowered every rule by 0.003 to 0.019 without changing the order, and conventional slip and guess took the completion-based rules below the constant.
7. **All four preregistered predictions held.** P1, P2, P4 and P5 held with every interval clear of zero, and each confirmatory value sat within 0.002 of its exploratory counterpart.

## Four rules over one set of rows
Each model steps through the same student–skill event sequence, ordered by timestamp, and updates a mastery posterior in a Bayesian [[knowledge-tracing]] step with one parameter set per skill. Only the treatment of assistance varies. Strict reads a hinted or retried row as a failed first attempt, face_value credits any completion, tempered down-weights assisted completions by level, unaided_only drops them, and base_rate updates nothing. The setup is a [[quantitative-research|quantitative]] log analysis behind a fence: the rules were developed on one hash-split half of the students, and the runner refused the confirmatory half unless a file holding the registration's public URL existed, denying five earlier attempts to read it. The fence checked for the registration file, not a clean working tree, so the tagged run used four files later corrected.

## What each rule predicts
Prediction was scored on the confirmatory half with pooled AUC as the primary statistic. Strict led at 0.658, ahead of unaided_only at 0.623, tempered at 0.614, face_value at 0.604 and the skill-difficulty constant at 0.595; within skills the gaps roughly doubled, and every registered contrast excluded zero. The middle of the ranking matters: reading an assisted row as a failure beat dropping it, because 71% of the 252,455 failed first attempts sit inside assisted rows. Only 0.3% of assisted rows were correct on a first attempt, while unaided rows were 81.7% of scored events and 90.9% of them correct: discarding assistance loses 29% of the failure evidence. Sensitivity checks kept the order: fixed priors lowered every rule by 0.003 to 0.019, and conventional slip and guess took the three completion-based rules below the constant.

## Who gets declared mastered, and what follows
[[mastery-learning|Mastery]] was defined as a posterior first reaching 0.95. Under face_value 106,538 pairs got there — 93.9% of 113,428 — against 82,595 (72.8%) under strict, a gap of 0.211 in share; tempered declared 91.3% and unaided_only 88.8%. The correlation between hint intensity and the final posterior flips sign across rules: +0.344 under face_value, −0.398 under strict. Among 104,309 lenient declarations followed by a scored event, the strict posterior had also reached 0.95 in 58% of cases, and those groups went on to 0.857 and 0.709 accuracy (contrast −0.149) — below the population base rate of 0.744. A progression gate built on the lenient rule certifies learners whose later unaided work sits below average — an [[assessment-validity]] question, not a data limit.

## What this means for practice
- **Instructors.** Read a mastery badge as a claim about unaided work: when progress rests on hinted completions, check the learner can do the skill cold before treating the unit as finished.
- **[[educational-technology-developers|Educational technology developers]].** Record the assistance level on every performance and say whether a mastery claim rests on unaided evidence — a schema change, not a new model.
- **Administrators.** Audit any progression gate for the rule behind its mastery estimate: the lenient rule certified 93.9% of pairs here and its early declarations performed below average.
- **Researchers.** Test the criterion result where hints teach a skill rather than reveal the answer, and repeat the comparison under individualized, dynamic Bayesian and deep tracing models.

## Limitations
- Hint use is chosen by learners, so the design is observational; the strata control path length and not [[prior-knowledge]] or motivation, and nothing here shows hints cause weaker performance.
- The outcome is proximal — later unaided items in the same skill, not a transfer or delayed test — and the first-attempt flag is both the outcome and the variable strict updates on.
- The data come from one platform and one school year, all of it mathematics, with a hint design that reveals the answer in steps; one model family was used.
- The author is CEO of the company whose production weights the tempered rule uses, and the paper states that the result is unfavorable to it.

## Connected Concepts
- [[knowledge-tracing]]
- [[mastery-learning]]
- [[assessment-validity]]
- [[student-modeling]]
- [[help-seeking]]
- [[educational-measurement]]
- [[learning-analytics]]
- [[intelligent-tutoring]]
- [[quantitative-research]]
- [[research-methods-aied]]
- [[prior-knowledge]]
- [[cognitive-diagnosis]]
- [[benchmark]]
- [[limitations-in-aied-research]]
- [[ai-use-disclosure]]

## Connected Articles
- [[making-ai-tutoring-productive-mastery-math-2026]] — Making AI Tutoring Productive: Evidence from a Mastery-Based Math Practice Experiment
- [[lak2026-hint-button-unproductive-use]] — Revisiting the Hint Button: Consistent Negative Associations Between Unproductive Hint Use and Learning Outcomes in Intelligent Tutoring Systems
- [[chatgpt-hints-human-tutor-learning-gains-2024]] — ChatGPT-generated help produces learning gains equivalent to human tutor-authored help on mathematics skills
- [[adaptive-intelligent-tutoring-primary-mathematics-2026]] — Effectiveness of adaptive versus non-adaptive intelligent tutoring systems in early primary mathematics
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable Knowledge Tracing
- [[mbp-kt-meta-behavioral-knowledge-tracing]] — MBP-KT: Learning Global Collaborative Information from Meta-Behavioral Pattern for Enhanced Knowledge Tracing
- [[stanbkt-bayesian-knowledge-tracing]] — StanBKT: Rethinking Parameter Estimation in Bayesian Knowledge Tracing
- [[neural-symbolic-knowledge-tracing]] — Neural-Symbolic Knowledge Tracing: injecting educational knowledge into deep learning for responsible learner models
- [[cognitive-load-transfer-knowledge-tracing-2026]] — Incorporating Cognitive Load and Knowledge Transfer for Multi-Domain Knowledge Tracing
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — Personalized Exercise Recommendation with Semantically-Grounded Knowledge Tracing
- [[weidlich-inference-at-risk-assessment-validity-2026]] — Which inference is at risk? Assessment validity reasoning and generative AI
- [[learning-analytics-to-educational-interventions-2026]] — From Learning Analytics to Educational Interventions: Enhancing Decision-Making and Learning Design
- [[adaptive-scaffolding-contingency-comet-tutor-2026]] — Adaptive Scaffolding Needs Contingency: An AI Tutor That Escalates and Fades on What the Learner Does
- [[brcic-effortless-trap-productive-struggle-2026]] — The Effortless Trap: Productive Struggle, AI, and the Illusion of Learning
- [[durable-skills-measurement-ai-teammates-2026]] — Towards Scalable Measurement of Durable Skills
- [[el-salvador-ai-tutoring-selection-claim-2026]] — How much selection would be enough? Bounding the learning claim of El Salvador's artificial intelligence tutoring pilot

## Citation
Srivastava, K. (2026). [Crediting assisted work inflates mastery: a preregistered comparison of evidence rules in intelligent tutoring logs](https://osf.io/wzbqa). EdArXiv preprint.