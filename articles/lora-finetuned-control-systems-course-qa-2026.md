---
title: "LoRA Fine-Tuned Models for Control Systems Course Q&A: A Multidimensional Evaluation of Model Scale and Rank Effects"
created: "2026-09-15T10:30:00-04:00"
updated: "2026-09-19T09:08:46-04:00"
type: article
pedagogy: [student-ai-interaction]
technology: [adaptive-learning, conversational-ai, educational-nlp, llm, pedagogical-llm-training]
assessment: [automated-assessment]
sources: ['raw/papers/lora-finetuned-control-systems-course-qa-2026.md']
confidence: high
research_method: [experiment, system development]
discipline: engineering education
audience: [instructors, researchers]
level: higher ed
page_kind: [evaluation]
---

> **Synthesis:** This study asks whether low-rank adaptation (LoRA) can align [[open-source]] instruction-tuned [[llm]] models with the response conventions of a single university course, and how that alignment interacts with model size and adapter rank. From a Linear Control Systems course the authors built 360 system-user-assistant dialogues with reference answers restructured into a Solution-Method-Teaching-Points format, then fine-tuned Qwen2.5-3B-Instruct and Qwen2.5-7B-Instruct at ranks r = 4, 8 and 16 under one fixed protocol. LoRA improved both reference-answer similarity and template stability: 7B-r16 reached ROUGE-L 0.4093 and BERTScore-F1 0.8643, and bootstrap 95% confidence intervals for the ROUGE-L gains stayed above zero. The authors are explicit that these metrics capture textual similarity and formatting consistency only, and that formula accuracy and derivational rigor in [[engineering-education]] still require expert judgment.

## Key Findings
1. The dataset contains 360 English question-answer dialogues built from Linear Control Systems exercises, split into 270 training (75%), 36 validation (10%) and 54 test samples (15%) by stratified random sampling on knowledge point and question type, with no exact duplicates across subsets.
2. The best configuration, 7B-r16, achieved ROUGE-L 0.4093 and BERTScore-F1 0.8643; every fine-tuned model beat its corresponding base model on most metrics.
3. Paired bootstrap resampling (B = 10,000 draws over the 54-item test set) produced 95% confidence intervals for ROUGE-L gains of 0.0764 [0.0613, 0.0915] for 3B-r16 and 0.0874 [0.0687, 0.1042] for 7B-r16 — both entirely above zero, so the gains are not driven by a handful of samples.
4. Higher rank lowered loss at both sizes: best validation loss fell from 0.8830 to 0.8080 for the 3B model and from 0.7992 to 0.7330 for the 7B model as r moved from 4 to 16, with validation-token accuracy rising to 80.71% at 7B-r16.
5. Parameter efficiency fell as rank rose — ROUGE-L gain per million adapter parameters was 0.0161 (7B-r4), 0.0144 (7B-r8) and 0.0087 (7B-r16), and 0.0181, 0.0157 and 0.0104 for the 3B model — so r = 16 buys the largest absolute gain at clearly diminishing return.
6. Structured-output formatting was transformed: Solution and Method coverage went from 0 and 0.13 (3B base) and 0.09 and 0.17 (7B base) to 1.00 at essentially every LoRA setting.
7. Teaching-Points coverage was more size-sensitive: the 3B base model already produced summary-like hints but rose to 0.94 (r = 8) and 0.96 (r = 16) once the full structure was in place, while the 7B model climbed from 0.56 in the base model to 0.87, 0.91 and 0.96.
8. The size gap did not close but changed shape: the 7B model's ROUGE-L advantage over the 3B model moved from +0.0207 before fine-tuning to +0.0317 at r = 16, while its ROUGE-1 advantage shrank from +0.0263 to +0.0148.
9. Higher-rank adaptation on the smaller model can beat lower-rank adaptation on the larger one — 3B-r16 (ROUGE-L 0.3776, BERTScore-F1 0.8606) outperformed 7B-r4 (0.3615, 0.8579).
10. One result proved fragile: the bootstrap interval for ΔROUGE-1 crossed zero at 7B-r4, so that improvement is reported as a trend rather than a stable gain.

## Dataset and Method
Linear Control Systems is a third-year core automation course covering dynamic-system modeling, Laplace transforms, transfer functions, time- and frequency-domain analysis, stability, root-locus analysis and controller design. Questions were drawn from textbook exercises and online problem sets, decomposed into independent samples, and filtered to exclude single-substitution items, very short solutions and open-ended prompts that could not support a consistent reference answer.

Source material was standardized before training: notation, variable names and system representations were harmonized, and questions resting on block diagrams, signal-flow graphs, circuit diagrams or mechanical schematics were converted into structured textual descriptions specifying component connections, feedback paths and parameters so the model needed no visual input. Reference answers were then rewritten into a three-level structure — Solution, Method (method choice, variable definitions, derivations, intermediate calculations, parameter substitution, final result) and Teaching Points (key concepts, common errors, physical meaning, engineering interpretation). Roughly 20% of samples were spot-checked against the original solutions, and issues found were revised.

Each training sample is a chat-style JSONL dialogue. All 360 share one system message assigning the model the role of a course teaching assistant and requiring standard terminology, LaTeX notation and a closing summary of teaching points. The user message has a four-part structure — Problem Description, Subproblems (four to six staged steps), Additional Information (physical parameters, models, key formulas) and Constraints — which the authors designed to reduce the variability of open-ended answering and give supervised learning a stable input-output pairing. Reference answers each carry roughly 15–25 LaTeX environments.

The experimental design varies exactly two factors. Data splits, target modules, learning rate, epochs, inference parameters and metrics are held constant; only base-model size and LoRA rank change. LoRA freezes the pretrained weights and learns ΔW = BA with scaling α/r, α set to 2r, so trainable parameters scale with rank while the base model stays untouched. Adapters were attached to q_proj, k_proj, v_proj and o_proj, training ran for 5 epochs at learning rate 5e-5 with maximum sequence length 2048, seed 42 and deterministic decoding (do_sample=False), on a single Tesla V100-DGXS-32GB. Adapters were saved rather than merged, so each rank and size combination could be evaluated on a common test set and deployment could keep one adapter per course.

| Factor | Settings compared | Adapter parameters |
|---|---|---|
| Model size | Qwen2.5-3B-Instruct vs Qwen2.5-7B-Instruct | 3B: 1.843M / 3.686M / 7.373M |
| LoRA rank | r = 4, 8, 16 | 7B: 2.523M / 5.046M / 10.093M |
| Fixed controls | Splits, epochs, learning rate, target modules, seed, decoding | — |

## Results and Interpretation
Two evaluation families were used. ROUGE-1, ROUGE-2 and ROUGE-L measured lexical overlap with reference answers and BERTScore-F1 measured semantic proximity using bert-base-uncased; three structural markers (has_solution, has_method, has_teaching_points) measured whether responses followed the [[pedagogy|pedagogical]] template as coverage rates.

The clearest effect is on structure, not content. Solution and Method coverage rose from near zero to 100% under almost every LoRA setting, which the authors read as the model internalizing the response template in the training data. That has real deployment value for [[student-ai-interaction]]: if answers reliably arrive in a predictable format, instructors and learners can review, verify and compare them. Teaching Points behaved differently — the larger model learned teaching-point generation far more consistently, suggesting that component is more sensitive to base capacity than to adaptation rank.

On similarity, the rank effect is monotonic for ROUGE-2 and ROUGE-L but not for every metric, and the difference between 7B-r8 and 7B-r16 in BERTScore-F1 is small. Meanwhile the 3B model was still improving at r = 16, implying a smaller model may need more adaptation capacity to fit the same target distribution. The authors translate this into three configuration recommendations: 7B-r16 where reference-answer similarity is the goal and resources are unconstrained; 3B-r8 or 7B-r8 for local or consumer-GPU deployment; and 7B-r4 for rapid feasibility testing, since it still yields ΔROUGE-L = +0.0407.

The paper supplies its own deepest caveat. ROUGE is sensitive to wording, BERTScore does not verify mathematical symbols or derivations, and heading-based structural detection cannot tell whether a derivation is valid — a response can carry every required heading while containing an incorrect formula, an inadequate variable definition or an incomplete conclusion. LoRA fine-tuning here shifts models from being able to answer control systems questions to answering them in the manner the course expects; that is alignment in form and style, and it is not certification of domain-specific reasoning. This is the paper's contribution to [[educational-nlp]] methodology: explicit interpretive boundaries.

## Open questions and design implications
Dataset size and coverage are the first constraint: 360 samples, 54 of them for testing, cannot represent all topics, question types or difficulty levels of the course. Complex controller design, integrated modeling, multistep state-space analysis and open-ended explanatory questions need more data before results generalize. Model range is the second — only two Qwen2.5 variants were tested, with no other families such as Llama or DeepSeek and no larger models, so conclusions are scoped to these configurations.

Evaluation is the third. The framework relies on automatic metrics and rule-based marker detection, and although bootstrap intervals were computed for ROUGE and structured-output metrics, BERTScore-F1 is reported only as a mean because per-sample values were not retained. Experiments used a single training seed with no variance across seeds, and no strong-prompt or retrieval-augmented baseline was included, so the design cannot separate the contributions of fine-tuning, [[prompt-engineering|prompt design]] and retrieval. A human-evaluation rubric covering formula accuracy, derivational rigor, completeness and instructional clarity is the named next step, alongside multi-seed runs and comparisons against [[rag]] and combined LoRA-RAG systems.

Two further observations matter for [[pedagogical-llm-training]] practice. First, the framework deliberately excludes teachability — the extent to which an answer helps a student follow and verify a solution — because that requires human rating. Second, the paper frames LoRA and retrieval as complementary rather than competing: LoRA internalizes course terminology and style, retrieval supplies traceable evidence from textbooks and formula sheets. The [[higher-ed]] implication is a deployment model of one lightweight adapter per course on a shared base model, with adapters of tens to hundreds of megabytes that stay cheap to store, distribute and version — a plausible route to [[discipline-specific-aied]] support without full-parameter retraining, but one whose instructional value remains, by the authors' own account, unverified.

## What this means for practice

- **Educators.** Build one lightweight adapter per course instead of reaching for a general tutor: 360 course dialogues, fine-tuning Qwen2.5-3B and 7B at LoRA ranks r = 4, 8 and 16, reached ROUGE-L 0.4093 and BERTScore-F1 0.8643 on a 54-item test set.
- **Educators.** Choose rank by deployment target — r = 8 for local or consumer-GPU use, r = 4 for a feasibility check (ΔROUGE-L = +0.0407), r = 16 only when reference-answer similarity matters most — because gain per million adapter parameters fell from 0.0161 at 7B-r4 to 0.0087 at 7B-r16.
- **Educators.** Require the Solution / Method / Teaching Points template in the system message and in the reference answers: Solution and Method coverage reached 1.00 at nearly every LoRA setting, so students receive course answers in a form they can review, verify and compare.
- **Educators.** Do not read template compliance as correctness — heading detection cannot tell whether a derivation is valid, so keep expert review of formulas, variable definitions and conclusions, and treat the adapter as a first draft rather than an authority.
- **Researchers.** Add a strong-prompt baseline, a [[rag|retrieval-augmented]] baseline and multi-seed runs before attributing gains to fine-tuning, since the present single-seed design cannot separate fine-tuning, prompt design and retrieval.

## Limitations

- **Thin and narrow dataset.** 360 dialogues, 54 of them held out for testing, cannot represent the course's topics, question types or difficulty levels; complex controller design, integrated modeling and multistep state-space analysis need more data before the results generalize.
- **The metrics measure form, not mathematics.** ROUGE is sensitive to wording, BERTScore does not verify mathematical symbols or derivations, and rule-based heading detection cannot detect an invalid derivation; BERTScore-F1 is reported only as a mean because per-sample values were not retained.
- **Single random seed (42) with no strong-prompt or retrieval baseline**, so the design cannot attribute the gains to fine-tuning rather than to prompt design or supplied evidence, and reports no variance across runs.
- **Restricted model range.** Only Qwen2.5-3B-Instruct and Qwen2.5-7B-Instruct at r = 4, 8 and 16 were tested, with no other families such as Llama or DeepSeek and no larger models, so the configuration recommendations are scoped to these settings.

## Connected Concepts
- [[llm]]
- [[engineering-education]]
- [[higher-ed]]
- [[pedagogical-llm-training]]
- [[automated-assessment]]
- [[adaptive-learning]]
- [[student-ai-interaction]]
- [[conversational-ai]]
- [[discipline-specific-aied]]
- [[educational-nlp]]
- [[intelligent-tutoring]]
- [[feedback]]
- [[scaffolding]]
- [[rag]]

## Connected Articles
- [[aiawe-automated-writing-evaluation]] — AiAWE: An Open-Source LLM Automated Writing Evaluation System Using LoRA-Adapted Instruction-Tuned Models
- [[educational-llm-alignment]] — Educational LLM Alignment
- [[bloom-aligned-educational-control-llms]] — From Execution to Education: A Bloom-Aligned Framework for Measuring Educational Control in LLMs
- [[cdpk-pedagogy-benchmark-llms]] — Benchmarking the Pedagogical Knowledge of Large Language Models
- [[didactical-teacher-assistant-dimensional-modeling]] — A didactical-driven teacher assistant for a dimensional modeling course
- [[concept-catalyst-engineering-scaffolds]] — Creating Learning Scaffolds for Engineering Design Using Concept Catalyst
- [[ai-learning-tools-engineering-education-needs]] — Designing Needs- and Attention-Aware AI Learning Tools for Engineering Education: Insights from Psychological Outcomes
- [[llm-difficulty-calibration-programming-exams-2026]] — From Evaluated Models to Evaluation Aids: A Multi-Evidence Study of LLM-Based Difficulty Calibration for Programming Examinations

## Citation
Shaowen Lu, Chengxu Liu, Ping Zhou and Tao Yang (2026). [*LoRA Fine-Tuned Models for Control Systems Course Q&A: A Multidimensional Evaluation of Model Scale and Rank Effects*](https://arxiv.org/abs/2609.13918). arXiv preprint.