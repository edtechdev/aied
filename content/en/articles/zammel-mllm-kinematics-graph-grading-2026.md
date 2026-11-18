---
title: "Stress Testing a Multimodal Large Language Model Grading Assistant on Kinematics Graph Reading"
created: "2026-11-18T04:35:00-05:00"
updated: "2026-11-18T04:35:00-05:00"
type: article
evidence_context: educational
published: "2026"
page_kind: [evaluation]
research_method: [design and evaluation study]
discipline: [physics education]
level: [higher ed]
audience: [researchers, instructors, assessment designers]
foundations: [human-ai-collaboration]
technology: [multimodal, generative-ai, llm]
assessment: [automated-assessment, assessment-validity]
confidence: medium
sources: ['raw/papers/zammel-mllm-kinematics-graph-grading-2026.md']
source_url: "https://arxiv.org/abs/2611.22726"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-18"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** If a [[multimodal|multimodal model]] can describe the physics in a hand-drawn kinematics graph, can it grade the graph? Zammel, Soares, Carvalhido and Kortemeyer generate deliberately damaged versions of four kinematics graphs and read the criterion-level awards attached to them. The grader does some physics well: in one reverse-generated case it withholds the stopping points because a smooth turning point is not a sustained interval of rest, and its slope estimates track the encoded cutoffs. It also awards 10/10 to a severely distorted velocity–time graph with disconnected, branching traces and no clear zero-velocity reference, while other submissions under the same configuration lost substantial credit. The failure is not blindness to the graph: nothing in the prompt fixes what the numerical cutoffs mean when the axes are unnumbered, so an exact partial-credit award can rest on a plotting convention the instructor never supplied.

## Key Findings

1. **A degraded graph can earn full marks.** A velocity–time submission with disconnected fragments, apparent branchings and distorted axes received 10/10, with an explanation asserting a sustained flat segment on the v = 0 line that the image does not clearly establish.
2. **Full credit was not blanket leniency.** Across the 300 forward-generated Exercise 4 submissions the mean award was 8.16/10, and at least 16 received less than 6/10.
3. **Some judgments were correct and checkable.** In a reverse example the grader withheld all 4 stopping points for a graph that peaks and falls, distinguishing a turning point from rest over an interval, and its slope estimates of approximately 0.68 and −0.65 were consistent with the encoded ±0.1 cutoffs.
4. **A passing total can hide a missing criterion.** Because criteria are additive, 3/3 forward, 0/4 stopping and 3/3 reverse totals 6/10 — reaching the study's 0.60 cutoff while failing the requirement the exercise is built around.
5. **The acceleration criterion spanned 0% to 100% across five selected graphs.** Three of the five explanations state that unnumbered axes prevent a numerical curvature measurement; the full-credit explanation invokes the displayed grid spacing to argue the curvature exceeds 0.05, a convention the grading instructions never defined.
6. **The cutoffs arrived without their intended meaning, and review is the recommendation.** Values such as 0.05 and ±0.1 were meant to separate clearly expressed features from drawing irregularities, but the grader received them without units, without a coordinate convention for unnumbered graphs and without that purpose. The authors recommend instructor review of every score, including full-credit responses.

## What the study did

The four qualitative kinematics exercises ask for position increasing throughout (4 points); forward, stop, reverse as a position–time graph (10); accelerate from rest then hold constant velocity (10); and the same forward–stop–reverse scenario as a velocity–time graph (10). In the forward direction, Stable Diffusion v1.5 image-to-image produced visual variations of each reference graph, and 300, 300, 296 and 300 submissions were graded by GPT-5.1 through an Azure deployment awarding full or zero points per criterion.

In the reverse direction a donor graph from another exercise was blended toward the target reference in five steps, with the interpolation weighted by a per-trajectory exponent. Three hundred trajectories per exercise gave 1,500 graded images each and 6,000 in total, graded one at a time by GPT-6 astra with partial credit scaled by closeness to each threshold and no reference graph in the prompt.

The forward corpus was split by cosine distance from the reference below 0.25 and an award ratio below 0.60 into groups labeled Confusing Images and Robust-to-Noise Images; the authors state that these labels identify cases for inspection, not correctness. Exercise 3, whose rubric involves the second derivative, had the largest share in the confusing group.

## Where a full-credit award outran the evidence

The central case is a distorted version of the Exercise 4 reference: traces disconnected and branching, axes and labels corrupted, competing traces that do not specify a single velocity at each time. The grader awarded 3/3 for forward motion, 4/4 for the stopping interval and 3/3 for reverse motion, explaining that the curve starts above zero, has a sustained flat segment at v = 0 and then falls below zero.

Two problems sit inside that explanation. A horizontal velocity–time segment establishes constant velocity; calling it rest additionally requires that the constant value be zero, and the damaged image does not clearly fix a zero level. The explanation also does not say how the dominant trace was chosen or how zero was assigned to its plateau. The authors add an informal observation: asked to review that decision, ChatGPT first raised the ambiguous zero reference and only addressed the disconnected traces after a further prompt.

The contrast cases keep this from reading as a broken scorer. In the reverse Exercise 2 trajectory that scored 1.00, position rises, holds over a finite interval and falls, the estimated slopes match the encoded cutoffs, and the rest interval from about t = −3.3 s to −0.6 s, roughly 2.7 s, is consistent with the labeled axes. In the trajectory that scored 0.60, the model correctly refused the stopping points for a graph with a narrow maximum and no horizontal segment.

## What the numerical cutoffs could not establish

The acceleration criterion asks for positive curvature above 0.05 during the initial phase. Five selected Exercise 3 submissions received 0%, 17%, 50%, 80% and 100% of its 3 points. The explanations track visible curvature honestly — the 0% case is withheld because the initial segment turns downward, the wrong sign — and three of them say outright that unnumbered axes prevent a calibrated second-derivative measurement. The 100% explanation instead reports a slope rising from roughly 0.25 to roughly 0.45 and judges the curvature consistent with exceeding 0.05 using the displayed grid spacing.

That last step is the finding. Grid spacing is a plotting convention, and the prompt did not establish one, so the explanation applies a scale the instructor never defined. The same issue appears in a separate Exercise 3 case graded under the standalone prompt: positive curvature is recognized, numerical derivative values are declared unavailable from unnumbered axes, and yet 2.5/3 points are awarded for acceleration and 1/2 for initial rest, for a total of 8.5/10 the explanation does not unpack.

The authors separate two things a rubric can conflate: uncertainty about reading an image, and partial satisfaction of a physical requirement. A nearly horizontal position–time segment may be a poor drawing of rest or a deliberate indication of slow motion, and which it is depends on the stated tolerance. The rubric should say how each is treated, and state the coordinate convention its numerical implementation assumes.

## What this means for practice

- **Instructors.** Stress test the grader on deliberately damaged graphs, and review the full-credit responses as well as the deductions. The 10/10 case was not an edge case the scorer flagged.
- **Assessment designers.** Give numerical cutoffs their units, their coordinate convention and their purpose. If the rubric says curvature above 0.05, say in what scale that 0.05 is measured.
- **Course teams.** Read criterion-level awards rather than totals. A 6/10 that reaches a 0.60 cutoff while scoring zero on the central requirement is a pass in arithmetic and a failure in physics.
- **Researchers.** Treat explanations as claims to check against the image, and compare a grader against an independent human reference before quoting an error rate — this study does not.

## Limitations

- **Four exercises, synthetic inputs, selected examples.** The graphs and reverse-generation sequences were not validated as representative of real student answers, and moving closer to a reference graph does not mean becoming more physically correct.
- **No frequency estimate.** The selected examples cannot establish how often the observed behavior occurs in real assessments.
- **No independent human reference.** Scores were not compared with expert human marking, so the study reports no overall grading accuracy or error rate.
- **No repeated-run stability test.** The different awards are for different inputs, so they do not show score variance on the same response.
- **Narrow settings.** Ticks and labels appear only on the fifth reverse step, and the findings are limited to the models, prompts, rubrics and synthetic inputs examined; the review workflow proposed in the paper's outlook was not evaluated.

## Citation

Zammel, O., Soares, C., Carvalhido, F., & Kortemeyer, G. (2026). [*Stress Testing a Multimodal Large Language Model Grading Assistant on Kinematics Graph Reading*](https://arxiv.org/abs/2611.22726). arXiv:2611.22726 [physics.ed-ph]. https://doi.org/10.48550/arXiv.2611.22726.
