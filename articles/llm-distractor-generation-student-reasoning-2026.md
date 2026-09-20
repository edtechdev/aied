---
title: "Can LLMs Model Incorrect Student Reasoning? A Case Study on Distractor Generation for Multiple-Choice Questions"
created: "2026-09-19T21:07:40-04:00"
updated: "2026-09-19T22:08:08-04:00"
type: article
technology: [llm, machine-learning]
assessment: [automated-question-generation, assessment, educational-measurement]
pedagogy: [problem-solving]
discipline: [math education, science education]
methods: [benchmark, qualitative-research]
research_method: [benchmark, qualitative]
level: [k 12]
audience: [researchers, assessment designers, educators]
page_kind: [evaluation]
sources: ['raw/papers/2603.15547.md']
confidence: high
---

> **Synthesis:** Zengaffinen and colleagues ask whether [[llm|large language models]] can model not only what students know but how they fail, using [[automated-question-generation|distractor generation]] as the probe. Writing incorrect-but-plausible options for multiple-choice items forces a model to recover the correct solution, simulate a plausible student error, and judge whether the wrong answer would tempt a student. The authors build a taxonomy of ten reasoning strategies from learning-science literature and empirical coding of traces, then apply it to 885 traces from DeepSeek-V3.2 and GLM-4.7 on Eedi math and SciQ science items.
> The taxonomy survives validation (precision 0.97, recall 0.95 on 64 traces), and reasoning prompts raise proportional match with human-authored distractors (DeepSeek 0.34 to 0.52 on Eedi; 0.08 to 0.14 on SciQ). The domains diverge sharply: on Eedi models describe and simulate specific [[misconceptions]], while on SciQ they rely on semantic similarity to the correct answer. Failure concentrates in recovering the correct solution and in discarding plausible candidates at selection.
> For [[ai-education|AI in education]] the result is an interpretable map of where [[student-modeling]] succeeds and how correct-solution anchoring repairs it.

## Key Findings

1. **Reasoning improves alignment.** Proportional match rises from direct [[prompt-engineering|prompting]] to chain-of-thought to reasoning: DeepSeek-V3.2 goes 0.34, 0.51, 0.52 on Eedi and 0.08, 0.13, 0.14 on SciQ; GLM-4.7 goes 0.42, 0.50, 0.52 and 0.12, 0.15, 0.15.
2. **A ten-strategy taxonomy captures the process.** Tags cover interpretation (INTER), correct-answer reference (CORR), conceptual link (LINK), error description (ERR_DESC), error [[simulation]] (ERR_SIM), outcome instantiation (INST), plausibility (PLAUS), discriminability (DISCR), curation (CURATE) and reconsideration (RECON); annotation reached precision 0.97 and recall 0.95 on a 64-trace human-checked subset.
3. **The domains use different construction strategies.** LINK is prevalent on SciQ but nearly absent on Eedi, whereas ERR_DESC and ERR_SIM dominate on Eedi and appear only sporadically on SciQ; DISCR and RECON differ less sharply but consistently between the two datasets.
4. **Models solve first, then inject an error.** 95.2% of traces construct a step-by-step solution, and 73.8% of those diverge at a specific step to insert a misconception.
5. **Error simulation rarely fails.** Simulating a specific Eedi misconception, DeepSeek-V3.2 reaches mean accuracy 0.92 plus or minus 0.02, though only 62% of faithful distractors appear in the human-authored ground-truth set.
6. **Correct-solution recovery is a primary bottleneck.** Giving the correct answer in the prompt raises proportional match by 6.4% relative on Eedi (0.52 to 0.56) and 30.7% on SciQ (0.14 to 0.18), both significant under a paired t-test at p<0.01.
7. **Selection is a second bottleneck.** An oracle ranker over proposed candidates raises proportional match from 0.52 to 0.67 on Eedi and 0.14 to 0.29 on SciQ; the model argues against keeping 28% of valid candidates on Eedi and 15% on SciQ.
8. **Some valid distractors are never generated.** 33% of human-authored distractors on Eedi and 71% on SciQ never appear in the reasoning trace.
9. **Enforced structure adds nothing.** A prompt mandating explicit multi-step reasoning gives no significant gain (DeepSeek 0.52 to 0.55; GLM 0.52 to 0.52; p>0.05); the models already self-organize an effective structure.
10. **Reasoning cuts invalid and redundant options.** Enabling reasoning lowers candidates equal to the correct answer by about 92% and repetitions by about 82% on Eedi, with correct-answer candidates falling 82% on SciQ.

## How the taxonomy was built

The taxonomy groups ten strategies into task understanding (INTER, CORR), candidate construction (LINK, ERR_DESC, ERR_SIM, INST), quality control and selection (PLAUS, DISCR, CURATE), and a cross-cutting reconsideration tag (RECON). The authors combined two sources: the [[assessment]] design literature on misconception-based distractors, which prefers errors injected into an otherwise correct solution over surface perturbations, and [[qualitative-research|qualitative coding]] of real traces. Manual open coding of 48 traces surfaced all ten strategies; a model-assisted pass over 800 more recovered eight, missing only RECON. An LLM annotator then tagged spans across 885 traces from two models and two datasets, validated against human annotation on 64 traces. The taxonomy is diagnostic: it characterizes how a model reaches a distractor, not only whether its final set matches human items.

## What the results show

Reasoning helps, and it helps differently by domain. On Eedi, where every human distractor encodes a specific misconception, models follow a solve-first, error-injection process: error description and error simulation dominate and conceptual linking is nearly absent. On SciQ, which lacks misconception annotations, models fall back on similarity, establishing a conceptual link to the correct answer and using discriminability checks to confirm candidates are wrong. The shared skeleton resembles a best-of-N search. In reasoning mode DeepSeek-V3.2 explores 12.6 alternative incorrect solution paths per item on Eedi and 9.9 on SciQ before choosing three, against 5.9 and 5.5 under chain-of-thought. Strategy use follows a stable order, from interpretation and solution recovery through construction to curation and selection, emerging without instruction.

## Where it fails

Failures localize cleanly. Error simulation and the implicit reasoning structure rarely break, so the weak points are solution recovery and final selection. Supplying the correct answer in the prompt lifts proportional match, isolating unreliable [[cognitive-diagnosis|solution recovery]] as an upstream cause. An oracle ranker shows selection discards valid candidates the model already proposed, recovering roughly a third of otherwise-missed distractors on Eedi and a sixth on SciQ. The model's own plausibility and discriminability checks contribute: they reject invalid candidates only 1.5 to 1.9 times as often as valid ones. Low-scoring Eedi traces enumerate more student errors, possibly because a wider space of plausible errors makes any single author-written distractor harder to match. Proportional match understates fidelity where the ground truth is one of several valid distractor sets.

## What this means for practice

- **Model developers** building item-generation tools should anchor generation to an explicit, verified correct solution and treat candidate ranking as a separate stage, since the oracle gap shows selection discards valid options.
- **Assessment designers** should expect domain-dependent behavior and concentrate [[human-in-the-loop-ai|human review]] on solution recovery and final set selection, the pipeline's two weak points.
- **Researchers and educators** can reuse the ten-strategy taxonomy as an annotation scheme to inspect why a generated distractor is wrong, supporting [[cognitive-diagnosis|diagnostic]] intervention design and [[trust]] in automated item generation.

## Limitations

- Reasoning traces describe what a model externalized, not what it internally computed, so the observed strategies should not be read as mechanistic claims.
- Only two open-weight reasoning models (DeepSeek-V3.2, GLM-4.7) were annotated in depth; non-reasoning and closed-source models may show different strategy distributions.
- The datasets are small and domain-bound: 429 Eedi math problems with annotated misconceptions and 500 sampled SciQ science questions.
- Proportional match is measured against a finite set of human-authored distractors and ignores other plausible options, which is more acute on SciQ where distractors were not curated around specific misconceptions; the SciQ solution-anchoring gain (30.7% relative) rests on a small absolute change (0.14 to 0.18) relative to the confidence intervals.

## Connected Concepts
- [[automated-question-generation]] — distractor generation is the task under study
- [[student-modeling]] — the paper tests whether models can represent incorrect reasoning
- [[misconceptions]] — misconception-based distractors are the preferred design
- [[assessment]] — MCQ item quality is the practical stake
- [[educational-measurement]] — distractors carry diagnostic information about understanding
- [[benchmark]] — proportional match against human distractors is the evaluation frame
- [[cognitive-diagnosis]] — distractors expose specific procedural gaps
- [[prompt-engineering]] — prompting setting and solution anchoring are the manipulations
- [[qualitative-research]] — open coding built the taxonomy
- [[llm]] — the models whose traces are analyzed
- [[problem-solving]] — items require solving before they can be failed
- [[k-12]] — the datasets are grade-school and science questions

## Connected Articles

- [[misconception-acquisition-dynamics-llms-2026]] — teaching a model to hold a misconception through training data
- [[llm-student-misconception-identification]] — surfacing real students' misconceptions from answer data
- [[llm-student-simulation-misconception-faithfulness]] — whether simulators hold an assigned misconception
- [[correct-answer-trap-misconceptions]] — the gap between correct answers and conceptual understanding
- [[llm-misconception-difficulty-easy-trap]] — misconceptions and item difficulty estimation
- [[student-misconceptions-conditionals-loops-taxonomy]] — a misconception taxonomy for a different subject
- [[student-math-competence-clustering]] — clustering students by mathematical competence
- [[llm-common-modeling-mistakes-formalisms-2026]] — common mistakes models make when modeling formalisms
- [[simulating-students-llm-review-2026]] — the wider review of LLM-based student simulation
- [[valid-student-simulation-llm-2026]] — validity conditions for student simulation
- [[generate-then-validate-question-gen]] — generating then validating assessment items
- [[inside-llm-student-simulator-reasoning-2026]] — reasoning inside an LLM student simulator

## Citation

Zengaffinen, Y., Opedal, A., Rooein, D., Srivatsa, K. A., Sonkar, S., & Sachan, M. (2026). [Can LLMs Model Incorrect Student Reasoning? A Case Study on Distractor Generation for Multiple-Choice Questions](https://arxiv.org/abs/2603.15547). *Findings of the Association for Computational Linguistics: EMNLP 2026*.