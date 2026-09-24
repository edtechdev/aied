---
title: "AgenticMath: Enhancing LLM Reasoning via Agentic-based Math Data Generation"
created: "2026-09-24T02:19:54-04:00"
updated: "2026-09-24T02:19:54-04:00"
type: article
sources: ['raw/papers/liu-agenticmath-math-data-generation-2025.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
foundations: [agentic-ai, theories-and-frameworks]
pedagogy: [problem-solving]
technology: [llm, generative-ai, pedagogical-llm-training, educational-nlp]
ethics: [hallucination-risk]
research_method: [experiment, system development]
discipline: [math education]
audience: [researchers, educational technology developers]
page_kind: [framework, evaluation]
---

> **Synthesis:** Liu and colleagues (2025) present AgenticMath, a [[agentic-ai|multi-agent]] pipeline that converts human-authored mathematics problems into high-quality question and answer pairs for supervised fine-tuning. It runs in four stages: a seed question filter that scores each problem for complexity, information value, and clarity and keeps those above a threshold of 3; an agentic rephrase stage in which one agent produces six variants per problem and review and revise agents iterate until the variants clear a threshold of 4.5; a solution stage in which a solver agent writes chain-of-thought answers without human labels; and a final evaluation that scores problem clarity, solution correctness, and reasoning completeness before selecting pairs by rank and diversity. Fine-tuning 3B to 8B models on 30K to 90K samples from this pipeline matches or beats baselines trained on 400K to 2.3M samples across six mathematics benchmarks. With only 30K to 60K samples, average performance improves by more than 10 points over baselines trained on far more data. The resulting corpus is released as AgenticMathQA in 30K, 60K, and 90K versions.

## Key Findings

- **Seed quality is filtered before synthesis begins.** Each problem is scored from 0 to 5 on complexity, information value, and clarity, corrected against neighboring problems, and retained only at a threshold of 3.
- **Rephrasing expands the pool, then the review loop hardens it.** Every surviving seed becomes six paraphrases, scored on clarity and grammar, logical coherence, and mathematical validity, with anything below 4.5 sent back for revision.
- **Solutions are generated without ground-truth labels.** A solver agent writes one-shot chain-of-thought answers for seed and rephrased problems alike, and the final stage jointly scores the problem and its answer.
- **Ranking by quality plus diversity replaces a fixed cutoff.** It groups pairs by score from 5 down to 0, using a long-tail diversity score to break ties inside oversized groups before selecting 15K pairs.
- **Small curated datasets rival much larger ones.** AgenticMath-Qwen2.5-3B reached 53.7 average accuracy at 30K samples, and AgenticMath-Llama3-8B reached 40.3 at 90K, above Llama3-8B-DART-Math trained on 590K.

## The four stages, in order

Seed problems come from GSM8K and MATH. Stage one is training-free and label-free: an evaluator rates every candidate on complexity, information value, and clarity, and a curation step corrects scores that disagree with neighboring problems in embedding space. Only problems scoring 3 or above survive the threshold, which left 7,001 seed questions out of the full seed collection. The rephrase stage then turns each survivor into six variants, 42,006 candidates, and a review agent scores each one on clarity and grammar, logical coherence and completeness, and mathematical validity and solvability. Anything below 4.5 goes to a revise agent, a loop that runs at most three rounds and passed 18,682 problems. Quality metrics improved through round two and then flattened, which is the authors' evidence for stopping there.

## What the experiments show

Evaluation covers six benchmarks: GSM8K and MATH as in-domain tests, plus CollegeMath, DeepMind Mathematics, OlympiadBench-Math, and TheoremQA for out-of-domain generalization, on Qwen2.5-3B, DeepSeekMath-7B, Mistral-7B, and Llama3-8B. Against baselines trained on the same sample counts, AgenticMath wins throughout. Against far larger datasets it stays close or ahead. DeepSeekMath-7B on 60K AgenticMath samples scores 49.3 average, against 49.9 for MathFusion at 195K and 48.3 for RFT at 590K. Mistral-7B at 60K reaches 38.4, against 38.8 for DART-Math at 590K, and Llama3-8B at 90K reaches 40.3, ahead of the same DART-Math run. Ablations on a fixed 15K synthetic set credit each quality stage in order: seed filtering added 0.6 average points, the review and revise loop a further 1.0, and the final evaluation 0.2 on top of that.

## Possibly related code, not an official release

Readers searching for code will find [a GitHub repository named AgenticMath](https://github.com/hua1100/AgenticMath). Treat it as a lead to inspect rather than as this paper's implementation. The paper never links to it, and the repository makes no claim of its own: it carries no description, no license, a README that says the license is to be determined, zero stars, and a last commit in November 2025. Its contents also differ from the pipeline described here, since it centers on uploading photographs of problems, extracting text with OCR, and generating variants of the extracted problems, while AgenticMath is a four-stage text pipeline for generating and evaluating problem and solution pairs. It may be a separate project that shares the name. Nothing here establishes that the two are connected.

## What this means for practice

- **Budget for filtering and evaluation, not only for generation.** The gains come from the stages that remove weak problems, so a synthesis pipeline without quality gates is likely to waste its data budget.
- **Score problems before you synthesize from them.** Filtering seed items for complexity, information value, and clarity is cheap and improved downstream results, which is useful when a course already has a problem bank.
- **Know that the supervision is model-written.** Items generated this way carry no human answer, so anyone reusing such a corpus should check a sample before trusting it for [[assessment]].

## Limitations

- **Text only.** The study addresses text-based problems and names [[multimodal]] settings, such as problems with diagrams or visual reasoning, as future work.
- **Scale is untested.** Because of computational and resource constraints, the authors did not run synthesis beyond the sizes they report.
- **One model judges everything.** Scoring, solving, and final evaluation all use GPT-4o-mini (2024-07-18) and human labels are removed, so quality control rests on statistical correction of [[llm|LLM]] ratings.

## Connected Concepts

- [[agentic-ai]]
- [[pedagogical-llm-training]]
- [[llm]]
- [[math-education]]
- [[benchmark]]
- [[automated-question-generation]]

## Connected Articles

- [[proiqa-math-item-quality-assessment-2026]]: scoring the quality of mathematics items
- [[datacanvas-edu-synthetic-data-business-analytics-2026]]: an agentic synthetic data framework in another subject
- [[representation-robustness-llm-math-problem-solving]]: stability of LLM mathematics reasoning under other constraints

## Citation

Liu, X., Liu, Y., Wang, S., Cheng, H., Estornell, A., Zhao, Y., Shu, J., & Wei, J. (2025). [*AgenticMath: Enhancing LLM Reasoning via Agentic-based Math Data Generation*](https://arxiv.org/abs/2510.19361). arXiv:2510.19361 (v3, revised January 2026). https://doi.org/10.48550/arXiv.2510.19361