---
title: "Where LLM Graders Succeed and Break: Evidence from Two Computer-Science Exams"
created: "2026-09-25T09:40:00-04:00"
updated: "2026-09-25T09:40:00-04:00"
type: article
sources: ['raw/papers/llm-graders-computer-science-exams-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [cs education]
level: [higher ed]
audience: [instructors, assessment designers, assessment professionals, researchers]
assessment: [automated-assessment, assessment-validity, peer-assessment, educational-measurement, psychometrically-aware-ai, summative-assessment]
methods: [ai-ed-evaluation, benchmark]
technology: [llm, prompt-engineering, human-in-the-loop-ai, generative-ai]
foundations: [limitations-in-aied-research]
ethics: [bias-mitigation, explainable-ai]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-25"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A Computer Vision exam, dual-graded by fixed human pairs, becomes the testbed for [[automated-assessment]] in [[cs-education]]: 570 students, 171 configurations spanning closed and open-weights models from 7B to 480B. The best reaches mean absolute error 1.64/35, under the 2.61/35 human graders achieve against each other. The catch is the prompt: a short "strict grader" preamble drives 14 of 17 open-weights models out of the graded band, three stopping grading entirely, while closed flagships of three vendors only shift calibration. The damage traces to two credit-withholding policy sentences, not tone or scale. A 162-configuration replication on an independent [[machine-learning|Machine Learning]] exam (1,038 students) reproduces the vulnerability but not its direction: the same sentence worsens ten models and improves seven whose neutral prompts over-mark. LoRA fine-tuning on the pooled ~3,900 graded examples brings five small [[open-source|open models]] to parity or better with a human grader and nearly erases persona sensitivity. One well-behaved prompt is not evidence of a usable grader — a caution for [[ai-ed-evaluation]] and [[assessment-validity]].

## Key Findings

1. The best of 171 configurations on the CV exam (570 dual-graded students) reached MAE 1.64/35 against the grader average, under the 2.61/35 human graders achieved.
2. A short "strict grader" preamble pushed 14 of 17 open-weights models out of the graded band (MAE ≥ 8); Llama-3.1-8B and Mistral-Small-24B awarded 0.00/35, GLM-4-9B 0.56.
3. The damage traced to two credit-withholding policy sentences, not the adjective: varying STRICT, RIGOROUS and FAIR over identical policy text moved MAE by 0.94 to 2.15 inconsistently.
4. The collapse replicated on a Machine Learning exam (1,038 students, 162 configurations) but its direction did not: ten models worsened, three left the band and one refused, while seven improved.
5. One LoRA adapter on the pooled ~3,900 examples brought five 4B–30B models to parity or better with a human grader on both exams, persona drift ≤ 0.32 MAE.

## A vulnerability one sentence wide

The baseline prompt supplies question, rubric, reference solution, student notebook, grading guidelines and an item-by-item breakdown; the model returns a score, bonus and rationale. Under that neutral setup, 17 open-weights baselines span 2.85 to 7.49 MAE and nothing predicts which will break. Prepend the strict persona and the picture inverts: the graded band is 3.07× the inter-grader floor ([[peer-assessment]]-style agreement, MAE ≥ 8 here), 14 of 17 config-matched pairs leave it, all six [[parents-and-families|families]] represented, MAE rising ×1.69 to ×7.11. Scale does not order the damage — ρ = −0.21 (p = 0.42) between parameter count and the strict/neutral ratio, the largest ratios belonging to a 24B model that stops grading and a 14B zeroing 88% of submissions. Gemini's best moved 1.86 → 2.75, at the floor.

## Policy content, not tone

The strict preset is a frame plus two policy sentences: S1 awards the minimum defensible score for incomplete or buggy work; S2 forbids partial credit when a task does not run correctly. FAIR with the harsh policy still left Mistral-Small-24B at 25.05, not grading. In a 2 × 2 crossing of S1 and S2, the frame alone moved each model less than two points off neutral, both sentences together reached 20.26–26.04, and S2 alone produced outright refusal on Llama-3.1-8B and Mistral-Small-24B. Dominance varied by family. S2 contradicts the partial-credit scale the rubric mandates — not a tone problem but a [[prompt-engineering]] hazard for anyone instructing an [[llm]] grader.

## Replication without direction

The ML exam (1,038 students, ≈ 65-point scale) carries a 162-configuration replication with its own floor of 5.13. Under strict, four models cross into collapse (MAE ≥ 15.7) and one refuses, a fixed MAE ≥ 8 threshold would instead have put ten strict runs and eleven neutral baselines out of band. Direction does not transfer: seven of 17 improved under the same sentence, because the ML exam's neutral prompt over-marks for 15 models, and across the 16 non-refusal pairs neutral bias predicted the strict effect at r = −0.73 (p = 0.002). On the CV exam, whose neutral biases straddle zero, zero of 17 improved. Qwen2.5-Coder-32B collapsed selectively on one exam and zeroed whole submissions on the other; above 106B robustness was partly illusory, the 480B over-marking by 9.52 points at neutral.

## Fine-tuning repairs what prompting breaks

Because two humans graded every submission, labels existed. One LoRA adapter per exam plus one pooled over ~3,900 examples took five models (4B–30B; Qwen, Llama, Gemma) from significantly worse than a human grader to parity or better under a paired third-grader test: pooled MAE 1.75–2.01 on the CV exam, 3.29–3.53 on the ML exam. Skill transferred across exams — an adapter trained on one improved the other it never saw — and persona drift fell to at most 0.32 MAE. Human labels alone sufficed: the marks recipe matched or beat one distilling a closed model's breakdown in every cell. Llama-3.1-8B started last on both exams and finished with the field.

## What this means for practice

- **Instructors.** Never instruct a grader to withhold credit: each policy sentence collapses graders on its own, and under-grading harms students who attempted the work.
- **Course teams.** With in-house dual-graded examples, fine-tune lightly and pool courses rather than prompt-engineer: one adapter reached human parity on both exams.
- **Evaluation designers.** Test several prompt variants, including instructor-written ones, and report signed bias alongside MAE: Flash-Lite's lenient and strict runs show comparable MAE with opposite-signed bias (+4.01 vs. −5.44).
- **Administrators.** Keep [[human-in-the-loop-ai]] oversight of consequential grading decisions: the collapse is invisible to single-prompt evaluation, and the authors reject deploying on one prompt's accuracy.

## Limitations

- Both exams come from one university: the replication spans courses, cohorts, rubrics and scales, not institutions.
- Grading is static and nothing is executed, so "does not run" verdicts are unaudited.
- Coverage is uneven: no rigorous or exacting persona appears outside Gemini.

## Connected Concepts

- [[automated-assessment]]
- [[ai-ed-evaluation]]
- [[assessment-validity]]
- [[cs-education]]
- [[llm]]
- [[prompt-engineering]]
- [[human-in-the-loop-ai]]
- [[summative-assessment]]
- [[peer-assessment]]
- [[educational-measurement]]
- [[psychometrically-aware-ai]]
- [[bias-mitigation]]
- [[transfer-of-learning]]
- [[higher-ed]]

## Connected Articles

- [[llm-automated-grading-programming-comparison-2026]] — A systematic comparison of Large Language Models for automated assignment assessment in programming education
- [[automated-grading-linux-bash-examinations-large-language-models]] — Automated Grading of Linux/Bash Examinations Using Large Language Models
- [[pecuchova-automated-grading-open-ended-genai-2026]] — Automated Grading of Open-Ended Questions in Higher Education Using GenAI Models
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs Do Not Grade Essays Like Humans
- [[llm-grade-bands-calibration-bias-2026]] — Can large language models reproduce higher education grade bands? Cross-model study of calibration and grading bias in authentic student writing
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI-assisted, instructor-supervised grading and feedback in higher education: Design and evaluation of an end-to-end pipeline
- [[usher-faraon-who-grades-best-2026]] — Who grades best? Comparing ChatGPT, peer, and instructor evaluations across varying levels of student project quality
- [[short-answer-scoring-quality-degradation]] — Quality-Conditioned Agreement in Automated Short Answer Scoring: Mid-Range Degradation and the Impact of Task-Specific Adaptation

## Citation

Habibullah, A., Alshoibi, Y., Alshiekh, M., Khan, S., & Khan, N. (2026). [*Where LLM Graders Succeed and Break: Evidence from Two Computer-Science Exams*](https://arxiv.org/abs/2609.29333). arXiv preprint.
