---
title: "Edu-QuRating: Multi-Dimensional Educational Data Curation with Distilled Pairwise Judgements"
created: "2026-09-29T17:53:57-04:00"
updated: "2026-09-29T17:53:57-04:00"
type: article
sources: ['raw/papers/garrod-edu-qurating-educational-data-curation-2026.md']
confidence: high
page_kind: [framework]
research_method: [experiment, system development]
level: [primary education, secondary]
audience: [researchers, software developers]
pedagogy: [scaffolding, prior-knowledge, misconceptions]
technology: [educational-nlp, pedagogical-llm-training, llm]
assessment: [educational-measurement]
methods: [benchmark, ai-ed-evaluation, quantitative-research]
ethics: [global-south, multilingual-learning, culturally-relevant-pedagogy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-29"
    agent: hermes-agent
---

> **Synthesis:** Garrod and colleagues at Fab AI introduce Edu-QuRating, which adapts QuRating's preference distillation to [[educational-nlp|educational data curation]], replacing a single "is this educational?" score with separate dimensions of text quality. It defines 20 rubric dimensions — six core criteria such as factual accuracy, [[pedagogy|pedagogical]] structure and level suitability, plus student- and teacher-facing foundational-literacy dimensions modeled on the GEEAP reading report — and has GPT-4.1-mini compare document pairs under each rubric, distilling those preferences into Edu-QuRaters that score one text at a time. Trained on 200k judgments, the best scorer recovers held-out judge preferences with mean accuracy 0.917 (Gemma-3-4B-PT) against 0.895 for Sheared-LLaMA-1.3B. The scorers then labeled 322.25M FineWeb-Edu-Fortified documents for [[pedagogical-llm-training|small-model pre-training]], where filtered mixtures beat the FineWeb-Edu baseline on nine-[[benchmark|benchmark]] accuracy (0.3962 vs 0.3806), and as [[reinforcement-learning|GRPO]] rewards they produced responses preferred over Qwen3-4B.

## Key Findings
1. **One distilled scorer replaces the judge at scale.** Edu-QuRaters trained on 200k GPT-4.1-mini pairwise judgments recover held-out preferences from single-text scores with mean accuracy 0.917 (Gemma-3-4B-PT) and 0.895 (Sheared-LLaMA-1.3B), above 0.86 on every criterion.
2. **Twenty inspectable dimensions replace one scalar.** The core model scores six criteria; the foundational-literacy models add seven student-facing and seven teacher-facing dimensions, so accuracy, sequencing, engagement and level suitability can be inspected separately.
3. **200k pairwise examples is the practical training scale.** Validation loss on held-out preferences falls from 0.307 at 20k examples to 0.264 at 100k and 0.245 at 200k; 300k and 400k add almost nothing.
4. **Scoring the corpus cost about 2,300 GPU hours.** The Gemma-3-4B-PT scorer labeled all 322.25M rows of FineWeb-Edu-Fortified on 32 H200 GPUs in roughly 72 hours; a conjunctive 50-50-50 filter kept 51.94M rows, 16.12 percent.
5. **Filtered pre-training mixtures reached higher observed endpoints, unevenly.** At 30k steps the FineWeb-Edu baseline scored 0.3806 across nine benchmarks, the 50-50-50 mixture 0.3903 and the stricter-pedagogy mixture 0.3962, with ARC-CF and HellaSwag gaining three to five points.
6. **Combining rewards beat either alone after GRPO.** Against the Qwen3-4B base model, Edu-QuRater plus answer-structure rewards won 81.08 percent on pedagogical quality and 68.24 percent on instruction following; Edu-QuRater rewards alone won 77.70 percent but fell below parity (40.54 percent) on instruction following.

## Twenty rubric dimensions, not one educational score

An educationally filtered corpus still varies along dimensions that matter for learning: a page can be accurate but impenetrable, or engaging but wrong. Edu-QuRating defines pairwise rubrics for a six-criterion core model — overall educational orientation, primary- and secondary-level suitability, factual accuracy, lesson engagement and pedagogical structure — because these dimensions vary independently. Factual accuracy matters because a learner who absorbs an error gains a [[misconceptions|misconception]] that resists correction; pedagogical structure rewards small sequenced steps and worked examples; level suitability is treated as metadata rather than quality, since a text teaches well only when its demands meet the learner's [[prior-knowledge|prior knowledge]]. Two foundational-literacy [[parents-and-families|families]] apply the same procedure to reading instruction, specifying six evidence-based components as [[scaffolding|scaffolded]] beginner practice and as teaching guidance.

## Distilling pairwise judgments into reusable scorers

Supervision came from 200k documents sub-sampled from the 95 Common Crawl subsets behind FineWeb-Edu-Fortified. For each criterion GPT-4.1-mini saw two 512-token excerpts and a rubric and returned a soft preference label, with forward and reverse ordering; the pipeline reads the judge's token probabilities directly instead of resampling, cutting judge calls by a factor of 20 at a mean absolute error below 0.03. Each family trains one multi-output sequence-classification model under a neural Bradley–Terry objective, so scores attach to single texts and preferences are recovered from score differences. Gemma-3-4B-PT beat Sheared-LLaMA-1.3B on all six criteria (mean 0.917 vs 0.895), and the literacy scorers reached validation losses of 0.128 student-facing and 0.175 teacher-facing. On about 15,800 external materials with reliable metadata, a linear model over the six dimensions predicted education level at cross-validated R² = 0.449.

## Two applications, and who they are for

The Gemma-3-4B-PT scorer then labeled all 322.25M rows of FineWeb-Edu-Fortified, splitting documents into 512-token chunks and averaging to document scores. Pre-training followed the Smol Training Playbook 1B ablation: mixtures kept 10 percent FineMath-3Plus and 20 percent Stack-Edu-Python fixed while the 70 percent web slice became FineWeb-Edu, Edu-QuRating-filtered text or a blend with DataComp-LM, training on 45B tokens with eight H100s. All Edu-QuRating mixtures beat the baseline on the observed aggregate endpoint, but gains were task-specific and concentrated in ARC-CF and HellaSwag. In the second application the scorers became reward terms in [[reinforcement-learning|GRPO]] fine-tuning of responses for grades 0-3 teacher tasks; adding an answer-structure reward kept instruction following above parity. Both applications target educational products serving [[global-south|low- and middle-income countries]], where content must fit local curricula.

## What this means for practice

- **Instructors.** Use the fourteen foundational-literacy dimensions as a checklist when choosing beginner reading material: they name what the student-facing scorer rewards — decodable words, repetitive frames, oral-response prompts, affirming tone.
- **Software developers.** Deploy the released Edu-QuRaters instead of querying a judge per document: reading the judge's token probabilities over 200k pairs cut judge calls twentyfold and still recovered preferences at mean accuracy 0.917, though the scoring run took about 2,300 H200 GPU hours.
- **Researchers.** Treat both downstream results as proof-of-concept: they are single-run, the GRPO evaluation rests on 73 held-out items, and its criteria overlap the rewarded FL-Teacher rubric — validate against an independent rubric.
- **[[curriculum-design|Curriculum]] designers.** Localize the level and literacy rubrics with educators who know the target curriculum and language, since scorers inherit the corpus's coverage; validated score-to-label mappings could later support retrieval and [[recommender-systems-and-learning-paths|recommendation]].

## Limitations

- The pre-training comparison is one run per mixture and could not test a comprehensive set of combinations; the tested stricter-pedagogy plus DataComp-LM mixture did best among those tried, and reported intervals capture evaluation-set uncertainty, not training-seed variation.
- The GRPO evaluation comprises 73 held-out examples, and its pedagogical criteria overlap the FL-Teacher rubrics being rewarded, so generalization beyond that framework was not tested and no classroom or learner-outcome study was run.
- One filtering artifact came from an inadvertent threshold mix-up — 41.6 percentile for factual accuracy, 34.4 for lesson engagement and 69.6 for pedagogical structure in place of 50-50-50 — reported separately as the stricter-pedagogy condition.
- The scorers inherit the coverage of the upstream corpus and cannot compensate for missing languages, curricula or genres; all comparisons use 2026-era systems (GPT-4.1-mini as judge, Gemma-3-4B-PT and Sheared-LLaMA-1.3B as bases, Qwen3-4B as the GRPO baseline), and the paper reports no crawl-date window.

## Citation

Garrod, O. G. B., Ince, R. A. A., Liu, M., Huti, M., Boos, M., Waldock, A., Andrews, D., Alonso-Kropil, R., & Atherton, P. (2026). [Edu-QuRating: Multi-Dimensional Educational Data Curation with Distilled Pairwise Judgements](https://arxiv.org/abs/2609.09425). arXiv preprint.