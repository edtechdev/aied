---
title: "Standardized Assessment of LLM English Proficiency"
created: "2026-10-04T05:14:00-04:00"
updated: "2026-10-04T05:14:00-04:00"
type: article
sources: ['raw/papers/standardized-assessment-llm-english-proficiency-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [instrument development]
discipline: [english education, language learning]
level: [middle school, undergraduate]
audience: [assessment professionals, researchers]
technology: [llm, generative-ai, cognitive-diagnosis]
assessment: [assessment, item-response-theory, psychometrically-aware-ai]
methods: [benchmark, quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Asking whether a [[llm|language model]] "knows English" is usually answered with an accuracy number that no [[teacher-role|teacher]] can interpret. This preprint builds CSEBench — 624 expert-annotated items mapped to China's Standards of English Language Ability — and reports model results as proficiency levels instead. Closed-source models reach CSE Level 6; most open-source baselines sit at Levels 3–4; and a [[cognitive-diagnosis|cognitive diagnostic]] pass locates the [[open-source|open models]]' weakest subskill in phonology, where targeted enhancement narrows the gap.

## Key Findings

1. CSEBench comprises 624 expert-annotated multiple-choice items spanning CSE Levels 2–7, each labeled with a difficulty level and subskill tags for vocabulary, syntax, phonology, and cohesion/discourse.
2. The benchmark carries human response data as well: 2,050 [[k-12|middle school]] and sophomore college students learning English as a [[language-learning|second language]] answered the same items, which is what allows model scores to be calibrated against a proficiency scale.
3. A standard-setting study derived cut scores for CSE Levels 3–6, so a model's raw score converts into a stated proficiency level rather than an opaque percentage.
4. Closed-source models — GPT-4o, Claude 4, DeepSeek-R1, and Gemini 2.5 Pro — consistently reach CSE Level 6 on these forms.
5. Most open-source baselines cluster at CSE Levels 3–4, with Qwen2.5-7B-Instruct the strongest, reaching CSE Level 5.
6. Cognitive diagnostic analysis found closed-source models broadly competent across subskills, while open-source models showed persistent deficits most pronounced in phonology — deficits the authors show are substantially reducible with targeted enhancement.

## Why a proficiency scale beats an accuracy score

The paper's argument is about interpretability, not about any single model. Language-model evaluation usually reports aggregate accuracy across heterogeneous [[benchmark|benchmarks]], and the authors point out the problem with that: two models can post the same accuracy while differing sharply in underlying ability, and neither number tells a teacher, a placement officer, or a learner what the model can actually do at a given level.

Their fix is to borrow a proficiency framework rather than invent one. Items were mapped to the CSE, whose levels carry "can-do" descriptors — Level 7, for instance, involves comprehending complex texts — so a model's performance can be expressed as a level with an interpretation attached. Items were drawn from two large-scale diagnostic forms, annotated by experts, and then calibrated with the responses of 2,050 [[multilingual-learning|second-language learners]] of English. A standard-setting study produced the cut scores that make the level mapping defensible.

## What the models did, and what the diagnosis adds

The headline split is between commercially hosted and open models. GPT-4o, Claude 4, DeepSeek-R1 and Gemini 2.5 Pro all reached CSE Level 6 on these forms. The open instruction-tuned models — Mistral-7B-Instruct, LLaMA-3-8B-Instruct, Qwen2.5-7B-Instruct and RWKV-v6-7B — mostly clustered at Levels 3–4, with Qwen2.5-7B-Instruct alone reaching Level 5.

Levels alone, though, say nothing about where a model is weak, so the authors added a cognitive diagnostic analysis over the four subskills. Closed-source models came out broadly competent across them. Open-source models showed persistent, patterned deficits, most pronounced in phonology — a subskill that multiple-choice items can probe but that a general-purpose model has little reason to have learned. The paper then tests whether the deficit is structural: several enhanced Qwen2.5 variants were built, including a cross-attention version, one further fine-tuned on syntactic data, one augmented with retrieval over an external [[knowledge-graph|knowledge graph]], and a vision-language variant. Targeted enhancement substantially reduced the measured weaknesses, which the authors read as evidence that the gaps reflect training coverage rather than an inherent ceiling.

## Where this belongs in assessment practice

Two uses follow directly. For model selection, the level mapping gives a defensible basis for saying a given open model is or is not adequate for a task pitched at a stated proficiency level, which is more actionable than a benchmark leaderboard. For diagnostic feedback, subskill labels identify which dimension a model is failing, which is the information an adaptive tutoring or [[automated-assessment|automated scoring]] system would need to route work or to warn a learner.

The authors are careful about scope. CSEBench measures receptive multiple-choice performance; it does not assess speaking, writing, interactional competence or pragmatic appropriateness, and it has not yet been validated in operational educational settings such as placement or tutoring. They frame the benchmark as groundwork for consequential validity rather than as evidence of it.

## What this means for practice

- **Language teachers.** Ask what proficiency level a tool is credited with, not what accuracy score it posts. A model reported at CSE Level 3–4 is a different proposition for an advanced class than one reported at Level 6, and that comparison is only available if evaluation is expressed on a scale you already use.
- **Assessment designers and test developers.** The construction sequence is the transferable method: take an existing proficiency framework with can-do descriptors, annotate items against it by expert judgment, calibrate with real learner responses, then run a standard-setting study to fix the cut scores. Model evaluation is then interpretable in the same terms as learner results.
- **Institutions considering open models.** The subskill diagnosis is the part to act on. A persistent phonology deficit is diagnosable rather than terminal, and the paper's enhanced variants show targeted data or retrieval narrows it — so the question for procurement is which subskill the deployment needs, not whether the model is open or closed.
- **Researchers and developers.** Treat flagged prompting sensitivity as a reporting obligation. If subskill estimates move with few-shot exemplar choice, publish the prompt configuration alongside the score, because an unreported prompt is an unreproducible result.
- **Curriculum and program leads.** Note the ceiling effect before quoting these levels: the scale tops out where the strongest models sit, so a Level 6 result means "at least 6" on this instrument rather than a fine-grained ranking of the leading models.

## Limitations

- Ceiling effects are the authors' first stated limit: CSEBench spans Levels 2–7 and is calibrated on junior-high and college learners, so frontier closed-source models exceed the top of the calibrated range and cannot be separated from one another at advanced levels.
- Proficiency estimates are sensitive to prompting. Few-shot prompting introduced instability in subskill mastery estimates, particularly for phonology, so scores may vary with [[prompt-engineering|prompt design]], exemplar selection or formatting even when the model is unchanged.
- Only four receptive subskills are measured, through multiple-choice items: vocabulary, syntax, phonology and cohesion/discourse. Productive skills such as speaking and writing, plus interactional competence and pragmatic appropriateness, fall outside the instrument.
- The benchmark has not been validated in operational settings. Placement decisions, adaptive tutoring and diagnostic feedback are named as future work, so there is no [[assessment-validity|consequential-validity]] evidence yet that using these levels improves outcomes.
- Calibration rests on 2,050 middle school and sophomore college learners of English in the CSE's own national context, so the levels are meaningful within that framework; transfer to other proficiency scales is untested.
- This is a preprint posted on Research Square while under review at Computers and Education: Artificial Intelligence, so the findings have not been through peer review in this form.

## Citation

Min, S., Wang, S., Gao, X., Wang, H., Jin, Z., Ling, C., & Ding, N. (2026). [Standardized Assessment of LLM English Proficiency](https://doi.org/10.21203/rs.3.rs-8820245/v1). *Research Square* (preprint).