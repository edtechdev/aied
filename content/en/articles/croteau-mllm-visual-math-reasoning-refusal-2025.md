---
title: "Seeing Is Solving: MLLMs, Reasoning, and Refusal in Visual Math"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/croteau-mllm-visual-math-reasoning-refusal-2025.md']
confidence: high
page_kind: [evaluation]
research_method: [design and evaluation study]
discipline: [math education]
level: [middle school]
audience: [researchers, educational technology developers]
technology: [multimodal, llm, generative-ai, intelligent-tutoring]
assessment: [automated-assessment]
methods: [benchmark, quantitative-research, qualitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Croteau and Heffernan evaluate six [[multimodal|multimodal large language models]] — three reasoning models (grok-4, o3, o4-mini) and three non-reasoning models (gpt-4.1, gpt-4o, grok-2-vision) — on 376 [[math-education|middle-school mathematics]] items from Illustrative Mathematics whose figures carry task-critical information. Each model attempted every item three times with and without the figure: with images the best reasoning models solved 57.7% and 52.4% of items, while without images the models refused rather than guessed in 95.4%–98.9% of runs. The authors argue that [[intelligent-tutoring|tutoring]] systems should gate automated scoring and [[student-modeling|learner-model updates]] on visual-evidence availability, and that [[accessibility]] systems should treat no-image refusals as missing-context signals rather than guesswork.

## Key Findings

1. **A Required set of 376 items.** From 541 image-containing, auto-scorable items, the authors classified 376 as Required (69.5%), 122 as Useful (22.6%), 26 as Not Required (4.8%) and 17 as Insufficient (3.1%); six items were downgraded from Required to Useful in a conservative refinement pass.
2. **Reliability of the image-role labels.** On a stratified audit set of 153 items, a second rater agreed 71.9% (110/153) across the four labels (Cohen's κ = 0.591, 95% CI [0.492, 0.687]) and 88.2% (135/153) on the Required vs. non-Required boundary (κ = 0.764, 95% CI [0.657, 0.865]).
3. **With images, reasoning models led.** o4-mini solved 57.7% of items at majority-correct (95% CI [52.7, 62.8]) and o3 solved 52.4% (95% CI [47.3, 57.5]); non-reasoning models ranged from 34.0% (grok-2) to 42.6% (gpt-4.1), and item-level consistency was high everywhere (79.0%–85.4%).
4. **Without the figure, models refused rather than guessed.** Refusals dominated 1,076–1,115 of 1,128 runs per model (95.4%–98.9%), with guess-wrong answers in 3–34 runs (0.3%–3.0%) and lucky-correct answers in 10–30 runs (0.9%–2.7%).
5. **Moderate cross-model agreement.** Pairwise Cohen's κ on which items are solvable averaged 0.54 across families, with within-family agreement higher (non-reasoning trio 0.64, reasoning trio 0.56, cross-family pairs 0.50); 76 items were solved by all six models at majority-correct and 61 at always-correct (3/3), released as gold and ultra-gold benchmarks.
6. **Visual misreading dominated the qualitative audit.** Across 83 contrastive items where the two families separate, 58 of 68 (85.3%; 95% CI [75.0, 91.8]) non-reasoning losers were labeled Visual misread, while 52 of 68 (76.5%) reasoning winners were No-error.

## Image-role labels and the Required set

The dataset begins with 541 unique image-containing, auto-scorable middle-school items from Illustrative Mathematics (Grades 6–8, standard and accelerated), each with a stable identifier, original text, one pedagogical image and a machine-scorable final response. Items whose images appeared only in answer options, items with multiple stem images, and items whose only "image" is a rendered mathematical expression were excluded. Each item was then coded with a four-way image-role taxonomy: Required (the image contributes at least one task-critical constraint needed for a unique solution), Useful (text alone suffices and the image is redundant-but-helpful), Not Required (the image adds no constraints) and Insufficient (underspecified even with the image).

Because the Required–Useful boundary is judgment-based, the authors ran a conservative flag-then-review refinement restricted to Required candidates: model behavior only prioritized human review, and an item was downgraded Required→Useful only when the text alone supported a unique solution with no added assumptions. Six items were downgraded, yielding the final set of 376 Required items. Reliability was checked on a stratified audit of 153 items coded blind by a second rater; agreement was stronger on the high-stakes Required boundary (88.2%, κ = 0.764) than across the full four labels (71.9%, κ = 0.591), with disagreements concentrated where the two definitions predict — near the Required–Useful boundary. The authors treat the labels as operational categories rather than ground truth and release both initial and refined labels with the reproducibility materials.

## Accuracy, stability and refusal across conditions

Each model attempted every Required item in three independent runs per condition, giving 1,128 runs per model per condition, with correctness scored by automated algebraic equivalence rather than qualitative judgment. With images, the two strongest reasoning models led: o4-mini solved 57.7% of items at majority-correct (≥ 2/3 runs) and o3 solved 52.4%, while grok-4 solved 40.2% and the non-reasoning models finished at 42.6% (gpt-4.1), 35.4% (gpt-4o) and 34.0% (grok-2). Run stability was high across the board, with item-level consistency between 79.0% and 85.4%, and bootstrap confidence intervals were tight at the item level. Refusal rates with images were model-dependent and were not uniformly lower for the reasoning family — grok-4 refused most often (31.7% of runs) and grok-2 least (6.7%), with the others between 10.7% and 19.1%.

Family-level permutation tests shuffling model-to-family assignments did not detect reliable differences: the reasoning minus non-reasoning contrast was +12.77 percentage points (p = 0.197) for majority-correct solved rate, +8.63 percentage points (p = 0.298) for with-image refusal, and −2.30 percentage points (p = 0.400) for consistency. Without images, calibration shifted sharply: refusals dominated 1,076–1,115 of 1,128 runs per model (95.4%–98.9%). grok-4 refused most often (1115/1128; 98.9%), o4-mini produced the most lucky-correct answers (30/1128; 2.7%), grok-2 the most guess-wrong answers (34/1128; 3.0%), and gpt-4.1 the highest no-image item-level consistency (375/376; 99.7%). Refusals were treated as incorrect in all accuracy and solvability calculations, so the without-image condition measures whether models abstain appropriately rather than how well they guess.

## Cross-model agreement and the gold benchmarks

Using majority-correct labels per item, pairwise Cohen's κ across the six models averaged 0.54 (off-diagonal), with meaningful structure: the non-reasoning trio agreed at 0.64, the reasoning trio at 0.56, and cross-family pairs at 0.50, so agreement tracks shared model behavior more than shared accuracy. The most aligned pair was gpt-4.1 vs. gpt-4o (κ = 0.68) and the least aligned grok-2 vs. o4-mini (κ = 0.39). Raw Jaccard overlaps on "solved" sets mirror the pattern — within-family overlap was about 0.63 for both families against about 0.55 cross-family, with the largest raw overlap between o3 and o4-mini (J ≈ 0.72). Two reproducible benchmark subsets emerge from this overlap: 76 items solved by all six models at majority-correct ("gold") and 61 items solved 3/3 by all six ("ultra-gold"), released along with code, prompts and summary artifacts on the Open Science Framework for replication.

## Visual misreading dominates the audit

The qualitative audit covered 83 Required items, the exhaustive subset on which the two families separate under a run-level rule: at least one model in one family achieves ≥ 1/3 correct runs while all models in the other family achieve 0/3. This yields a main stratum where reasoning wins and non-reasoning fails (n = 68) and a counter-stratum where the roles reverse (n = 15). Winner and loser responses were drawn from the same problem content, with model names masked in the coder view; the coding unit was a single response with steps and final answer.

Visual misread was the dominant error category. In the main stratum, non-reasoning loser responses were labeled Visual misread in 58/68 cases (85.3%; 95% CI [75.0, 91.8]) and refused in 9/68 (13.2%), while reasoning winners were No-error in 52/68 (76.5%; 95% CI [65.1, 85.0]) — and still visually misread in 15/68 (22.1%; 95% CI [13.8, 33.3]), the "right answer for the wrong reason" pattern. In the counter-stratum, reasoning losers refused in 8/15 (53.3%) and were labeled Visual misread in 7/15 (46.7%), while non-reasoning winners split between No-error (3/15; 20.0%) and Explanation/format issues (4/15; 26.7%). Inter-rater reliability on the double-coded counter-stratum was Krippendorff's α = 0.584 for non-reasoning responses. The authors read this as a pipeline difference: non-reasoning failures originate in visual evidence extraction, while both families' residual gaps are largely communicative.

## What this means for practice

- **Tutoring-system designers.** Gate automated scoring and learner-model updates on visual-evidence availability: the strongest model solved only 57.7% of Required items with images, and no-image refusals (95.4%–98.9% of runs) should be treated as missing-context signals rather than learner errors when deciding whether to assign credit or update mastery.
- **Scaffold designers.** Require explicit visual-evidence binding before algebra: visual misreading accounted for 85.3% of non-reasoning losers' failures in the contrastive audit, so scaffolds that force the model to cite figure evidence address the dominant failure mode.
- **Accessibility teams.** Treat no-image refusals as requests for the figure or a structured description, and use the released gold (76 items) and ultra-gold (61 items) subsets as a testbed for description-substitution experiments that compare original figures with vetted textual descriptions.
- **Evaluation practice.** Adopt a reliability-first stance in educational settings: repeated runs and cross-model corroboration (mean κ = 0.54) distinguish broadly solvable items from model-idiosyncratic ones, so single-run accuracy is a weak basis for deployment decisions.

## Limitations

- The corpus comes from a single curriculum (Illustrative Mathematics, Grades 6–8) with relatively consistent diagram conventions, so results may not transfer across grades, formats, or more heterogeneous visual styles.
- IM materials are public, so training-data exposure could inflate without-image "lucky-correct" behavior; the authors audited Required items that were solved without images but do not claim to fully rule out contamination.
- Image-role labels began with a single rater; reliability was checked on a 153-item audit, and the Required–Useful boundary remains judgment-based.
- The qualitative audit covers only 83 contrastive items and is treated as mechanism-finding rather than statistically powered evidence; fine-grained visual errors were merged into a single Visual misread category due to rater disagreement.
- No human baseline (student or teacher performance) was included, so the models cannot be compared with learner-level perception or explanation clarity.

## Citation

Croteau, E., & Heffernan, N. (2025). *Seeing Is Solving: MLLMs, Reasoning, and Refusal in Visual Math*. *Journal of Educational Data Mining*, 17(2), 244-285.
