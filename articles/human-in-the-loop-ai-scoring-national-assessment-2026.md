---
title: "A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment"
created: "2026-09-11T09:20:00-04:00"
updated: "2026-09-11T09:20:00-04:00"
type: article
tags: [automated-essay-scoring, human-in-the-loop-ai, assessment-validity, automated-assessment, writing-education, educational-measurement, psychometrically-aware-ai, llm]
sources: ['raw/papers/2609.05143.md']
confidence: high
---

> **Synthesis:** This study designs and validates a [[human-in-the-loop-ai|human-in-the-loop]] (HITL) framework for [[automated-essay-scoring|AI-assisted scoring]] of ~150–200-word Spanish argumentative texts in *Acredita EB*, Uruguay's national lower-secondary accreditation exam, using two years of operational data (~5,000–6,000 candidates per edition). A prompt-engineered GPT-5 model scored the 15-item analytic rubric at 60–80% agreement with expert raters — about 5% below human inter-rater agreement for most items — with 90%+ run-to-run consistency, while the spelling item was delegated to a deterministic grammar checker. The model's errors were systematically conservative: it under-graded, producing human-pass/AI-fail discrepancies in 15.3% (2024) and 16.5% (2025) of cases but almost never the reverse, which makes an asymmetric decision flow viable — AI-passing results are accepted, AI-failing results are routed to expert review. The authors estimate this reduces the responses needing full human scoring by at least 50% while preserving decision quality, though the claim rests on treating variable human ratings as [[assessment-validity|valid]] ground truth and on an untested [[simulation]] rather than a live deployment.

## Context: a high-stakes national accreditation test

The case is the *Prueba Nacional de Acreditación de la Educación Media Básica* (Acredita EB), run by Uruguay's National Public Education [[administrator|Administration]] (ANEP) and administered annually since 2020 — 3,604 candidates in the first edition, peaking at 6,204 in 2024. The target population is adults over 21 who completed primary school but left the system, and passing grants lower-secondary certification. The 2h50m computer-based exam has three sections (Reading Comprehension, [[problem-solving|Problem Solving]], Writing); the first two are multiple-choice and scored automatically, so the Writing section dominates the scoring workload and results are delivered no sooner than three months after the exam. Because tasks and rubric evolve annually, only the 2024 and 2025 editions were used — 2024 for development, 2025 for cross-year validation. This is a rare [[quantitative-research|large-scale]] operational dataset for [[ai-ed-evaluation|evaluating AI in education]], and unlike most [[educational-nlp|educational NLP]] work it is Spanish-language, a setting the authors note is under-evidenced because [[llm|LLMs]] are not trained equally across languages.

## The analytic rubric: 15 items in three domains

Writing is scored manually by trained raters against an expert-designed rubric, which is the technical core of the [[educational-measurement|measurement]] design. Its 15 items are grouped into three domains:

- **Discursive** (6 items): Opinion, Argumentation, Introduction, Conclusion, Register, Vocabulary — communicative adequacy, text structure, and appropriate language; all binary except Argumentation, which has three levels.
- **Textual** (7 items): Thematic progression, Paragraph structure, Connector use, Pronominal references, Nominal agreement, Verbal agreement, Syntax — coherence, cohesion, grammatical agreement and sentence structure, all binary.
- **Orthographic** (2 items): Punctuation (0–2 scale: 0 = three or more errors, 1 = one or two, 2 = none) and Spelling (error counts in quartiles, four performance levels).

Notably, the rubric assigns no predefined item weights. Instead, an [[item-response-theory|IRT]] model estimates each candidate's latent ability and the Bookmark standard-setting method fixes cut scores for three levels — Proficient, Close to Proficiency, Insufficient. A pass requires at least two sections at Proficient, with the remaining section at least Close to Proficiency. This [[psychometrically-aware-ai|psychometric]] layer is what makes the study's central claim possible: agreement is evaluated not only item-by-item but across the proficiency classification and the final pass/fail decision.

## Prompt-engineered scoring with GPT-5

Each rubric item was operationalized as its own Spanish prompt that assigns a score (generally binary), quotes the relevant text fragment, and justifies the judgement. The prompt structure is explicit: an instruction not to assume rules beyond the rubric, the item definition, evaluation rules, code explanations ("Assign Code 1 when…"), worked correct/incorrect examples, and a strict JSON output format. Prompts were iterated on 10 texts to surface cases human raters handle implicitly but the rubric does not spell out. The chosen model was OpenAI GPT-5 at medium reasoning effort with default parameters and structured JSON output, accessed through an enterprise API that does not retain data for training. Two constraints shaped this [[prompt-engineering|prompt design]]: either run open models locally with reduced compute, or use an institutionally licensed [[generative-ai|generative AI]] service. Model outputs were compared to human scores on a random sample of 1,000 responses per year (about one fifth of each dataset) — a sample size chosen for statistical validity while avoiding the cost of scoring every response.

## How well do AI scores agree with human raters?

The study first establishes an empirical ceiling using the 2024 calibration phase, where ten evaluators independently scored each of 50 texts before reaching consensus. No rubric item achieved unanimous rater agreement; the most divergent rater generally fell below 80% agreement with consensus, while the best exceeded 90% on several items (70% is conventionally the acceptable floor). Cohen's Kappa by item was substantial for Introduction, Register, Paragraph structure and Nominal agreement; moderate for Conclusion, Pronoun usage, Subject–verb agreement, Syntax and Punctuation; slight for Vocabulary and Thematic progression; and fair for Opinion, Argumentation and Connectors — with the low coefficients for skewed, near-universally-satisfied items explained by distribution rather than genuine rater conflict.

Against that ceiling, AI agreement ran between 60% and 80% for virtually every item. For more than half the items the gap to human inter-rater agreement was roughly 5%, and it never exceeded 15%. Output consistency approached or exceeded 90% for the vast majority of items — the same score in 9 of 10 repeated runs — the only exception being Spelling, where the LLM behaved as expected by struggling with token-level orthography. Spelling was therefore replaced by LanguageTool, a deterministic [[open-source]] grammar checker filtered to remove error types the rubric assigns to other items; it matched LLM accuracy (68%) with 100% consistency. The 1,000-response evaluation reproduced the 60–80% band for both years, with Vocabulary, Syntax and Spelling lowest, and 2025 results differed only marginally despite needing only small prompt edits for the year-specific task instructions — direct evidence that prompt-based scoring generalizes across editions. Chance-corrected 2025 agreement between AI and operational human scores was, as expected, lower than human inter-rater agreement: moderate for Introduction, Conclusion, Register, Nominal agreement and Subject–verb agreement; fair for Opinion, Paragraph structure, Pronoun usage, Syntax and Punctuation; slight for Argumentation, Vocabulary, Thematic progression and Connectors.

## From item scores to pass/fail: a systematic conservative bias

Replicating the psychometric pipeline on AI item scores, the authors derived automated cut scores on the IRT scale — a 67% probability of answering at least seven rubric items correctly for Close to Proficiency and ten for Proficient — which landed very close to the operational Bookmark cut scores. In the resulting level confusion matrices the AI was consistently stricter than human raters for both years, i.e. it under-graded rather than over-graded, and its behaviour was a stable bias rather than random noise. Agreement was higher for responses humans rated Proficient than for those rated Insufficient.

Combining AI Writing results with the human proficiency levels of the other two sections, the pass/fail confusion matrices show 15.3% of cases in 2024 and 16.5% in 2025 where human raters passed the candidate but AI-assisted scoring predicted a fail; the reverse direction (AI passes, humans fail) was near-zero, at 0.2% in 2024 and 0.6% in 2025. Under a naive "AI decides" policy this would be a serious [[equity-in-ai-education|fairness]] problem, since under-grading penalises students who would otherwise certify. Under the proposed design it becomes the safety property: the cases carrying the highest equity risk are exactly the ones that get mandatory human review.

## The human-in-the-loop decision flow

The proposed framework routes expert effort only to decisions it can change, following the logic of the official rules rather than a generic uncertainty threshold:

1. **Calibration (50–100 texts)** validates the model and adapts prompts to the year's topic.
2. **[[automated-assessment|Automated scoring]]** of all Writing responses, then IRT plus Bookmark to set cut scores and assign the three proficiency levels.
3. **Targeted human review** with two pruning tests: candidates who already cannot pass on Reading Comprehension and Problem Solving scores need no Writing review at all, since the Writing result cannot change their outcome; and candidates rated Proficient in all three sections pass with a residual AI-error risk of only 0.2% (2024) / 0.6% (2025), because reversing that outcome would require a two-level Writing misclassification — not observed among such candidates in this data. The remaining candidates, whose pass/fail hinges on Writing, are reviewed by experts supported by AI scores.
4. **Recalibration** of cut scores via IRT plus Bookmark to absorb adjustments made during human review.

Under realistic assumptions the process would reduce by at least 50% the written productions requiring full human scoring, with the exact figure varying by edition because it depends on how many candidates fail on the other sections. The authors frame the guiding principle plainly: no outcome-affecting final decision is made without appropriate human oversight, and the whole framework exists to keep expert judgement in the loop at the decision points where it matters for [[assessment]] and [[summative-assessment|summative]] certification.

## What human-in-the-loop does and does not fix

HITL here is doing something narrower than "make the model correct." It does not raise item-level agreement — vocabulary, syntax and punctuation remain the weak dimensions, and the authors call for rubric-sensitive prompting plus hybrid LLM/deterministic approaches to close those gaps. It does not eliminate the AI's conservative bias; it exploits the bias's direction, converting a systematic under-grading tendency into a routing signal. What it does fix is the propagation of that bias into final outcomes, because under-graded cases are precisely those sent to humans, and it also removes the flagging-metadata problem: instead of an abstract uncertainty score, the trigger is a concrete, rule-based consequence (does this score change pass/fail?). The paper positions this as a shift from model-centric metrics to decision-oriented impact — the practical relevance of a metric in a [[educational-policy-ai|policy]]-scale assessment lies in whether it informs an operational decision.

## Limits of the evidence

Several caveats bound the claims. Human scores are the ground truth, yet the calibration analysis shows non-negligible disagreement even among equally qualified raters, and for most responses only a single operational score exists — so the reference labels themselves carry noise, and item-level Kappa values are further depressed by skewed distributions. Performance was estimated on 1,000-response samples per year, not the full population, and the HITL workload-reduction figure is a simulation based on past editions rather than a live pilot. The paper reports a cross-year check (2024 prompts applied to 2025) but no longitudinal drift monitoring. Perhaps the most important untested risk is interaction: whether raters shown AI scores before judging are anchored by them or defer to them (automation bias) is unmeasured, and the authors propose blinded versus non-blinded rater experiments as the next step. Finally, generalisation is bounded by setting — one national exam, one language, a specific age-21-plus adult certification population, GPT-5 at a specific configuration, and a rubric whose full text is withheld for confidentiality, so replication of the prompt engineering is not possible from the paper alone.

## Connected Concepts
- [[automated-essay-scoring]]
- [[human-in-the-loop-ai]]
- [[assessment-validity]]
- [[automated-assessment]]
- [[writing-education]]
- [[educational-measurement]]
- [[psychometrically-aware-ai]]
- [[llm]]
- [[item-response-theory]]
- [[ai-ed-evaluation]]
- [[educational-policy-ai]]
- [[global-south]]

## Connected Articles
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs Do Not Grade Essays Like Humans
- [[llm-essay-assessment-framework-reliability-2026]] — A Framework for Evaluation of Large Language Models in Essay Assessment: Reliability, Alignment, and Causal Reasoning
- [[gpt-human-rater-essay-assessment-2026]] — Comparing GPT and human raters in essay assessment: Variability, bias, and the potential of LLM-based scoring
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI-assisted, instructor-supervised grading and feedback in higher education: Design and evaluation of an end-to-end pipeline
- [[hybrid-e-assessment-semi-automated-grading]] — Hybrid E-Assessment in Higher Education: Semi-Automated Grading of Paper-Based Written Examinations
- [[pecuchova-automated-grading-open-ended-genai-2026]] — Automated Grading of Open-Ended Questions in Higher Education Using GenAI Models
- [[assessment-latent-structure-human-llm-2026]] — Do Assessment Instruments Measure the Same Thing for Humans and LLMs? A Latent Structure Analysis
- [[cong-confidence-asag-2026]] — Confidence-Aware Automatic Short Answer Grading
- [[cvengros-grading-handwritten-chemistry-ai-2026]] — Assisting the grading of a handwritten general chemistry exam with artificial intelligence

## Citation
Curi, M. E., Capdehourat, G., Amigo, I., Romano, M., Serra, R., Silveira, A., & Peri, A. (2026). [A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment](https://arxiv.org/abs/2609.05143). arXiv preprint arXiv:2609.05143.
