---
title: "FoundationalASSIST: An Educational Dataset for Foundational Knowledge Tracing and Pedagogical Grounding of LLMs"
created: "2026-09-29T17:53:57-04:00"
updated: "2026-09-29T17:53:57-04:00"
type: article
sources: ['raw/papers/worden-foundationalassist-knowledge-tracing-dataset-2026.md']
confidence: high
published: "2026-01-20"
page_kind: [evaluation]
research_method: [instrument development, experiment]
discipline: [math education]
level: [k 12, middle school]
audience: [instructors, assessment designers, educational technology developers, researchers]
foundations: [ai-education]
pedagogy: [metacognition]
technology: [llm, knowledge-tracing, student-modeling, intelligent-tutoring]
assessment: [assessment, item-response-theory, educational-measurement, assessment-validity]
methods: [benchmark, quantitative-research]
ethics: [differential-effects-across-learner-groups]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-29"
    agent: hermes-agent
---

> **Synthesis:** Worden, Heffernan, Heffernan, and Sonkar (2026) release FoundationalASSIST, an English [[benchmark]] dataset that restores the natural language earlier [[knowledge-tracing]] releases discarded: the full text of 3,395 [[math-education|mathematics]] problems, the responses students actually gave, which wrong answers they chose, and alignment to Common Core standards. Its 1,722,169 interactions from 5,000 students, collected on the [[edtech-platform|ASSISTments]] platform between January 2019 and July 2024, make [[student-modeling]] legible to [[llm|large language models]]. Four frontier [[generative-ai|generative AI]] models are tested zero-shot on six tasks. Every model barely clears a trivial 51.3 percent baseline on knowledge tracing, all fall below chance at judging which of two items is more discriminating, and only relative [[item-response-theory|item difficulty]] shows real competence, reaching 68.6 percent. Reliable [[personalized-learning|personalized learning]] will require models trained on student errors, not only correct answers.

## Key Findings
1. **A dataset built for language models.** FoundationalASSIST holds 1,722,169 interactions from 5,000 students across 3,395 mathematics problems, collected on ASSISTments between January 2019 and July 2024, with a 61.5 percent overall correctness rate.
2. **Text and responses replace bare identifiers.** Unlike prior [[benchmark|benchmarks]], it ships complete question text, the responses students actually gave, distractor choices, and Common Core alignment, including 1.2 million fill-in responses.
3. **Knowledge tracing barely beats a trivial baseline.** Always predicting "correct" scores 51.3 percent; the best models reach 56.2 percent (GPT-OSS-120B) and 55.8 percent (Qwen3-Next-80B Thinking), about five points higher.
4. **Models are optimistically biased.** Llama-3.3-70B predicts correctness at 85.4 percent accuracy when students answer correctly but only 12.6 percent when they answer incorrectly.
5. **Difficulty is learnable; discrimination is not.** GPT-OSS-120B reaches 68.6 percent on which of two problems is harder and 80.0 percent for large gaps, yet every model scores below chance on item discrimination.
6. **Distractor prediction splits by direction.** Qwen3-Next-80B Instruct identifies the most-chosen wrong answer at 47.9 percent against a 35.8 percent baseline; the Thinking variant manages only 20.5 percent on the least-chosen distractor.

## A dataset that preserves the language of learning
Earlier knowledge tracing datasets — ASSISTments 2009, 2012 and 2017, and EdNet — recorded each encounter as identifiers plus a binary correctness label, so a model sees "problem 47829" and learns nothing about what it asks. FoundationalASSIST supplies four properties at once: complete question text cleaned from HTML and MathML, the actual student responses, distractor selection data, and Common Core alignment. It spans 462 knowledge components and 344.4 interactions per student on average. Fill-in-the-blank items dominate at 2,188 problems and 69.7 percent of interactions. Problems come from the Illustrative Mathematics [[curriculum-design|curriculum]] and span Common Core domains for grades 3-8, though curated to be overwhelmingly grades 6-8 — a [[k-12]] mathematics focus on one platform.

## Knowledge tracing stays near a trivial baseline
The knowledge tracing evaluation simulates tutoring: 500 students, the first 50 interactions withheld as warmup, and approximately 27,000 predictions per model (27,715 for three of the four models, 27,618 for Qwen3-Next-80B Instruct). Four models ran locally on NVIDIA A100 GPUs under zero-shot [[prompt-engineering|prompting]] — GPT-OSS-120B, Llama-3.3-70B-Instruct, and the Instruct and Thinking variants of Qwen3-Next-80B. On the balanced evaluation set, correctness 51.3 percent, a model that always predicts "correct" is hard to beat: GPT-OSS-120B reaches 56.2 percent with AUC-ROC 0.559, the Qwen Thinking variant 55.8 percent. Predicting the exact answer a student gives is harder, from 35.5 to 44.3 percent, though fill-in responses land at 40-50 percent against a near-zero chance baseline. The troubling pattern is optimism bias: Llama-3.3-70B is right 85.4 percent of the time when students succeed but only 12.6 percent when they fail. Longer histories do not help: AUC-ROC stays at 0.5-0.6 whether a model sees 50 or 400 prior interactions.

## Pedagogical grounding: difficulty yes, discrimination no
Ground truth comes from [[item-response-theory|item response theory]] (the two-parameter logistic model, fitted with py-irt) on all 1.7 million responses, filtered to items with at least 50 responses, leaving 2,548 problems; difficulty runs from -1.35 to 0.91 and discrimination from 0.01 to 0.91. Models show real competence on difficulty: GPT-OSS-120B reaches 68.6 percent, 18.6 points above chance, and 80.0 percent when the gap exceeds 1.0. Discrimination is the opposite: every model falls below random chance, best at 46.9 percent, and accuracy is paradoxically higher for small gaps — models seem to conflate difficulty with discrimination. The authors argue this demands [[metacognition|metacognitive]] reasoning about which errors weak students make and strong students avoid. Distractor prediction is mixed: the most-chosen wrong answer is identified at 47.9 percent against a 35.8 percent baseline, but the least-chosen at only 20.5 percent. Extended reasoning helps discrimination (43.5 to 46.9 percent) while hurting the most-common distractor task (47.9 to 40.2 percent).

## What this means for practice
- **Instructors.** Keep the read on who is struggling with a human: the best model reached 56.2 percent against a 51.3 percent always-correct baseline, and Llama-3.3-70B caught just 12.6 percent of incorrect answers, so a model that predicts success cannot flag [[help-seeking|students who need support]].
- **Assessment designers.** Treat model difficulty estimates as assistive: models reached 68.6 percent on relative difficulty but fell below chance on discrimination, so never pick diagnostic items on a model's judgment alone.
- **Developers.** Validate [[automated-question-generation|generated distractors]] against real student responses before shipping: the most-chosen wrong answer was predicted at 47.9 percent but the least-chosen at 20.5 percent, so a plausible distractor may capture no [[misconceptions|misconception]] at all.
- **Researchers.** Adopt FoundationalASSIST as a fixed student-modeling [[benchmark]] and report against its 51.3 percent baseline, not model-against-model headlines.

## Limitations
- The dataset covers only K-12 mathematics from one platform, curated to be mostly grades 6-8, so the authors warn results may not generalize to other subjects or to [[higher-ed|higher education]].
- The evaluation uses four models from three organizations — GPT-OSS-120B, Llama-3.3-70B-Instruct, and Qwen3-Next-80B Instruct and Thinking — under zero-shot prompting alone, on interactions collected January 2019 through July 2024; capability claims are scoped to those systems.
- Measurement carries error: distractor tasks rest on only 236 multiple-choice problems and IRT parameters are filtered to items with at least 50 responses, while several answer options lack alt-text, placing the true multiple-choice baseline below 41.3 percent.
- Some problems changed type during collection without being recorded and a few correct answers were mistyped when added, so a limited number of recorded responses may not match what students receive today; the dataset is promised for public release, not already published.

## Citation
Worden, E., Heffernan, C., Heffernan, N., & Sonkar, S. (2026). [FoundationalASSIST: An Educational Dataset for Foundational Knowledge Tracing and Pedagogical Grounding of LLMs](https://arxiv.org/abs/2602.00070). arXiv preprint.