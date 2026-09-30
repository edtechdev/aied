---
title: Item Response Theory
created: "2026-07-28T10:44:35-04:00"
updated: "2026-09-30T09:59:35-04:00"
type: concept
technology: [knowledge-tracing, student-modeling]
assessment: [assessment-validity, educational-measurement, psychometrically-aware-ai]
confidence: medium
reviewed_by: [editor]
---

> **Item response theory (IRT)** — a family of psychometric models that estimate latent ability from item responses by modeling the relationship between a learner's ability and the probability of answering each item correctly. IRT models item difficulty and discrimination, enabling measurement precision and adaptive testing. In the AI era, IRT meets [[llm|LLMs]] in [[llm-item-difficulty-prediction]] and [[llm-psychometric-calibration-cdp]]: AI predicts and calibrates item difficulty, potentially improving measurement precision and feeding [[adaptive-learning]].

## Questions to Consider

- Item response theory treats ability and item difficulty as jointly estimated from response patterns, rather than treating a raw test score as the measure. How might two students with the same number correct actually differ in ability?
- IRT lets you compare learners on a common scale and estimate precision per person. Why might knowing an item's difficulty and discrimination matter more than just knowing whether a student got it right?
- One study used IRT person-fit statistics to distinguish human from AI-generated responses on multiple-choice tests — flagging AI responses as 'aberrant.' How could the same measurement machinery that assesses learning also police academic integrity?
- [[research-methods-aied|Researchers]] use IRT to validate that AI-generated exam questions match expert-written ones in difficulty and discrimination. If an AI writes an item that 'looks' good, why is empirical calibration against fitted IRT parameters still necessary?
- As AI predicts and calibrates item difficulty, what could go wrong if a model's estimate of difficulty isn't validated against real student response data?
- IRT connects to adaptive testing and knowledge tracing — using your responses to choose what to ask next. How does estimating your ability from each answer enable a test to become shorter and more precise rather than just longer?

## Introduction

IRT treats ability (θ) and item parameters (difficulty, discrimination, sometimes guessing) as jointly estimated from response patterns, rather than treating a raw score as the measure. This makes it possible to compare learners on a common scale, to select items adaptively, and to estimate precision per person rather than globally.

### How IRT appears in the research

- **AI-predicted difficulty:** [[llm-item-difficulty-prediction|LLM item-difficulty prediction]] uses language models to estimate item difficulty, which must be validated against empirically fitted IRT parameters.
- **Psychometric calibration:** [[llm-psychometric-calibration-cdp|LLM psychometric calibration]] aligns model-based assessment with IRT-based measurement so that AI-generated responses preserve measurement properties.
- **Knowledge tracing and student modeling:** IRT is closely related to [[knowledge-tracing]] and [[student-modeling]] — models that track learner knowledge over time — sharing the goal of estimating unobservable learner states from observable responses.

- **IRT quantities read out of LLM logits.** [[huang-interpretable-knowledge-tracing-2026|Huang et al. (2026)]] extract student ability θ = z^GOOD − z^BAD and tutor-turn difficulty d = z^HARD − z^EASY from next-token logits and combine them in a 1PL Rasch predictor, making dialogue-based knowledge tracing interpretable (64.29% accuracy, 65.25 AUC on QATD2k).
- **Bayesian hierarchical field validation:** [[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]] uses a Bayesian hierarchical 2PL IRT model (with pre-test anchor items to place 1,686 students on a common θ scale) to show that AI-generated questions match expert-written standardized-exam items in difficulty and discrimination — a large-scale demonstration of IRT as the validation backbone for [[automated-question-generation]].
- **Test information localises precision.** A 20-item GenAI-literacy test validated with a 2PL model (RMSEA = 0.03, CFI = 0.97) had its information function peak at θ = −0.8, making it most precise for low-to-moderate literacy learners rather than uniform across the scale ([[jin-glat-genai-literacy-assessment|Jin et al. (2025)]]).

- **Separating human from GenAI responses with person-fit statistics:** [[irt-human-genai-mcq-responses|Strugatski and Alexandron (2026)]] apply person-fit statistics (PFS) within IRT to distinguish human from [[generative-ai]] responses on multiple-choice assessments. PFS flag GenAI responses as 'aberrant' responders in two authentic contexts (a [[chemistry-education|chemistry]] test and a national exam), show that different [[conversational-ai|chatbots]] produce distinct response patterns (a heterogeneous group of 'intelligences'), and reveal that newer GenAI versions become more human-like — positioning IRT as a robust framework for [[academic-integrity|integrity]] screening in high-stakes testing.

- **The same items may not measure the same latent construct for an LLM.** [[assessment-latent-structure-human-llm-2026|Strugatski, Zeinfeld and Alexandron (2026)]] compared human and LLM factor structures across two instruments with exploratory factor analysis and congruence matching; LLM–human similarity reliably stayed below the human–human baseline, so IRT parameters fitted on humans do not transfer automatically.

- **LLM difficulty estimation against Rasch IRT parameters:** [[razavi-powers-item-difficulty-llm-2026|Razavi and Powers (2026)]] evaluate whether GPT-4o can estimate the difficulty of K-5 math and reading assessment items (N = 5170) calibrated under the Rasch IRT model. A zero-shot direct estimation approach correlated moderately-to-strongly with true Rasch difficulties (r = 0.83 math, r = 0.81 reading) but was uneven across grades and often no better than a grade-mean dummy regressor for grades K and 1, likely due to range restriction in lower-grade item difficulties. A feature-based strategy — LLM-extracted cognitive and linguistic features fed into tree-based models — outperformed direct estimation (correlations up to r = 0.87), with grade level and word count the top predictors. The study underscores that LLM difficulty estimates must be validated against empirically fitted IRT parameters, and that structured feature extraction can sharpen prediction where holistic zero-shot judgment falls short.

- **Simulating respondents can recover what regressing the stimulus cannot:** a fine-tuned multimodal LLM reproducing students' option-choice probabilities across ability levels approximated held-out difficulty at r = 0.85, above the MathBERT (0.68) and MetaMath (0.75) regression baselines, and recovered the guessing parameter c at 0.48 while discrimination a stayed weak (0.31) ([[multimodal-item-parameter-estimation-2026|Ormerod & Kim, 2026]]).
- **Item-writing flaws as a pre-deployment screen for IRT parameters:** [[item-writing-flaws-irt-difficulty-2026|Schmucker and Moore (2026)]] test whether Item-Writing Flaw (IWF) rubrics — a domain-general, textual evaluation requiring no student data — predict empirically estimated IRT difficulty and discrimination. Across **7,126 multiple-choice questions** in [[stem-education|STEM]] (physical science, [[math-education|mathematics]], life/earth sciences), they used automated, LLM-assisted coding to show that IWF rubrics carry predictive validity for empirical IRT parameters, offering a scalable pre-deployment screen that complements or partially substitutes resource-intensive pilot testing.
- **IRT-based risk filtering for selective AI grading:** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] fit a two-parameter logistic IRT model to AI-graded handwritten-chemistry data and define the "risk" of accepting an AI judgment as the absolute deviation between the AI's normalized score and the IRT-expected probability of credit (Risk = |s−p|); accepting only items within a chosen tolerance of this Bayesian expectation flags "surprising" AI scores for [[human-in-the-loop-ai|human review]], turning IRT from a pure score-aggregation tool into an operational acceptance/deferral mechanism for [[automated-assessment]] — one that achieved alignment with human grading similar to simpler partial-credit thresholds but with lower human workload, though its logic is less transparent to non-technical audiences.
- **IRT as a calibration layer inside a diagnostic model:** PLCD adds an IRT-inspired guessing-and-slipping head over exercise-level responses, improving probability quality rather than accuracy — expected calibration error fell from 0.071 to 0.037 on XES3G5M — making IRT an internal correction for response noise, not only a scoring model ([[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]]).

- **Divide-and-conquer calibration for continuously evolving banks:** [[bayesian-consensus-irt-item-banks-2026|Jewsbury et al. (2026)]] treat IRT recalibration as a scaling problem rather than a fitting problem. When AI-based item generation and feature-based parameter prediction make a bank larger, sparser and continuously updated, refitting the full response history at every update grows steadily costlier; their *consensus calibration* instead calibrates each time period once and combines a new period with already-computed earlier posteriors. Two features separate it from existing IRT divide-and-conquer work: the periods do not share a latent metric, so each is linked to a reference metric by a robust Haebara criterion solved *separately for every posterior draw* (carrying linking error into the linked posteriors), and each period is its own hierarchical fit contributing an estimated prior, so the naive product of posteriors must have that prior divided out and a consensus prior reinstated — reducing to the Bayesian committee machine rule when the priors are fixed. Against a pooled benchmark on four quarterly periods of the Duolingo English Test, posterior means agreed at r = .998 (difficulty) and .991 (log-discrimination) with posterior SDs at r = .970 and .920, leaving mild under-dispersion (SD ratio 0.91–0.98) that was largest in the lowest per-period exposure tertile. It is IRT calibration re-engineered for the delivery conditions AI-generated item banks create.

- **How rarely IRT anchors instrument validation:** an appraisal of teacher AI literacy instruments quantifies IRT's absence rather than its use. [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore and Maat (2026)]] graded 33 instruments against a decision matrix adapted from COSMIN and Terwee et al. (2007); structural validity was strong, with 24 (72.7%) at Grade A through CFA, PLS-SEM or IRT modeling, yet none used IRT or Rasch as its primary evidence, and only five instruments (15.2%) reported measurement invariance or differential item functioning evidence. The authors argue for IRT and performance tasks alongside self-assessment to separate validated capability from reported confidence.
- **A causal alternative to associative IRT.** [[causal-modeling-competency-assessment-2026|Mangili et al. (2026)]] argue IRT and Bayesian-network learner models cannot express interventions or counterfactuals, and elicit structural equations from experts instead; on a 109-student adaptive-test battery the elicited model was slightly less predictive (−287 versus −277 test log-likelihood) yet supported counterfactual queries about help.

### Connections

IRT is a foundation of [[educational-measurement]] and [[assessment-validity]], underpins [[adaptive-learning]] (adaptive item selection) and [[student-modeling]], and connects to [[psychometrically-aware-ai]] (AI assessment aligned with measurement theory) and [[knowledge-tracing]]. It features in [[llm-difficulty-calibration-programming-exams-2026|LLM difficulty calibration]] for programming assessment.

## Connected Concepts

- [[educational-measurement]]
- [[assessment-validity]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[psychometrically-aware-ai]]
- [[adaptive-learning]]
- [[automated-assessment]]
- [[intelligent-tutoring]]

## Connected Articles
- [[item-writing-flaws-irt-difficulty-2026]] — Impact of item-writing flaws on IRT difficulty and discrimination (Schmucker & Moore 2026)
- [[causal-modeling-competency-assessment-2026]] — Causal Modeling of Support Interventions for Student Competency Assessment
- [[assessment-latent-structure-human-llm-2026]] — Do assessment instruments measure the same thing for humans and LLMs? (Strugatski et al. 2026)
- [[assessing-quality-ai-generated-exams-field-2025]] — Large-scale IRT field validation of AI-generated exams
- [[jin-glat-genai-literacy-assessment]] — GLAT uses IRT/2PL validation (Jin et al. 2025)
- [[llm-item-difficulty-prediction]] — LLM prediction of item difficulty
- [[llm-psychometric-calibration-cdp]] — Aligning LLM assessment with psychometric calibration
- [[llm-difficulty-calibration-programming-exams-2026]] — LLM difficulty calibration in programming exams
- [[multimodal-item-parameter-estimation-2026]] — Multimodal item-parameter estimation
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable knowledge tracing
- [[irt-human-genai-mcq-responses]] — Using IRT to separate human and GenAI MCQ responses
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[process-grounded-language-cognitive-diagnosis-2026]] — Beyond ID Embeddings: Process-Grounded Language Modeling for Cognitive Diagnosis
- [[bayesian-consensus-irt-item-banks-2026]] — Bayesian consensus calibration of a continuously evolving IRT item bank (Jewsbury et al. 2026)
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — Field audit showing IRT/Rasch rarely used as primary validation evidence in teacher AI literacy instruments
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
