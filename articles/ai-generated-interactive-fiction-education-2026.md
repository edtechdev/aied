---
title: "AI-Generated Interactive Fiction for Educational Use: A Pilot Study of Perceived Comprehensibility, Coherence, and Engagement"
created: "2026-08-12T12:37:38-04:00"
updated: "2026-08-24T10:15:00-04:00"
type: article
tags: [generative-ai, intelligent-tutoring, student-experience, student-engagement, curriculum-design, higher-ed, educational-nlp]
research_method: [system development, user study]
audience: [student experience]
level: [higher ed]
category: [engagement, curriculum design]

sources: ['raw/papers/2608.10818.md']
confidence: medium
---

> **Synthesis:** This pilot study (N = 22 STEM higher-education students) evaluates AI-generated interactive fiction as an educational medium. Narrative clarity and length acceptance rated positively, engagement hovered near neutral, and story-content coherence was the weakest dimension — with quiz integration emerging as the main usability bottleneck. The authors derive concrete design implications for interactive, narrative learning experiences.

## Key Findings

1. **Generation is not enough.** Generative AI can produce interactive narrative content at scale, but scenarios that are confusing, narratively inconsistent, or unengaging are unlikely to be useful in practice — quality must be validated with users, not assumed.
2. **Mixed user ratings.** Participants rated narrative clarity (M = 4.11) and length acceptance (M = 4.14) positively, engagement sat near the neutral midpoint (M = 3.08, 95% CI straddling it), and story-content coherence was the weakest dimension by a clear margin (M = 2.92, with three of four items below the mid-point).
3. **Quiz integration is the bottleneck.** Qualitative feedback identified artificial in-fiction motivation for quiz prompts (six of ten responses), abrupt setting/character changes that coincided with the lowest coherence scores (≤ 1.75), and the absence of story-level consequences for wrong answers as the main friction points.
4. **Self-report is decoupled from performance.** Correlations between sub-dimension scores and gameplay metrics were all small-to-moderate (|ρ| ≤ 0.38, none significant), so low coherence ratings are not explained by frustration over quiz performance or by the English-language stimulus (negligible language-barrier correlations).

## Background and Motivation

Generative AI is lowering the authoring bottleneck for [[game-based-learning]] in [[higher-ed]]: interactive fiction — short, choice-driven text-based scenarios — embeds educational content into branching [[storytelling-in-education|narratives]] that learners explore through decision-making. Prior reviews of [[llm]]-based game and narrative generation find that runnable outputs are within reach while narrative quality and the meaningful integration of game rules and story remain difficult, with [[hallucination-risk|coherence flagged as a recurring weakness]].

This pilot evaluates perceived quality rather than generation success. It builds on a domain-agnostic pipeline (SINE) that auto-generates interactive-fiction scenarios from structured content via an [[prompt-engineering|open-weight LLM with a frozen prompt]], a deterministic validator, and a repair stage. The central design principle is **intrinsic integration**: learning content should be woven into the decisions and causal structure of the story rather than layered on as a separate quiz. The study therefore treats perceived story-content coherence as the pivotal dimension for whether [[intelligent-tutoring|AI-driven narrative instruction]] is usable at all.

## Methods

The pipeline generated a controlled stimulus pool from 20 fixed educational seeds in a single STEM sub-domain (media technology — sampling, quantization, lossless and lossy compression, JPEG image compression), producing 48 scenarios after automated playability and validation filtering. Participants (N = 22 STEM-affiliated adults at the University of Lübeck) each played one randomly assigned scenario in the browser (5–10 minutes), then completed a ten-item positively-worded questionnaire adapted from the Narrative Engagement Scale, Transportation Scale–Short Form, MEEGA+, and the Intrinsic Motivation Inventory — grouped into four subscales: Narrative Clarity, Story–Content Coherence, Engagement, and Length Acceptance — plus an open-ended prompt. Analyses were primarily descriptive, with internal-consistency and exploratory Spearman correlations.

## Results

Narrative clarity and length acceptance were rated positively, engagement hovered near the neutral midpoint with its confidence interval straddling it, and story-content coherence was the clear bottleneck. Internal consistency was acceptable-to-good for the multi-item subscales (Cronbach's α = 0.87 for coherence, 0.82 for engagement; Spearman-Brown = 0.63 for the two-item clarity scale). Qualitative feedback from 45% of participants converged on the coherence result: artificial in-fiction motivation for quiz prompts, abrupt location or character changes without narrative bridge, and the possibility of "click-through" without story-level consequences for wrong answers. Notably, the lowest coherence ratings came from participants with mid-to-high first-try-correct rates, and positive remarks appeared even in mixed-score sessions — suggesting the interactive-fiction format itself is accepted even where the current stimulus implementation is criticized.

## Design Implications

Two families of design targets emerge. First, participant-driven changes: make the in-fiction motivation for why characters ask the player for technical knowledge explicit (surreal or fictional settings may free the scenario from real-world causal plausibility), suppress abrupt setting/character shifts in the generation or repair stage, attach story-level consequences to wrong answers rather than looping "try again," and mix purely narrative choices with learning choices. Second, pipeline-level changes: replace verbatim quiz-fidelity checks with a semantic-equivalence check (e.g. an LLM judge with human review) and strengthen playability validation from start-to-end reachability to traversal- or objective-coverage, integrated into the repair loop rather than applied post-hoc.

The study is a small convenience-sample pilot in a single STEM sub-domain with single-exposure sessions and deliberately no learning-outcome measure. Findings are specific to the pipeline-model combination (Qwen3 14B), and the single-rater qualitative coding, borderline two-item clarity reliability, and potential pro-technology self-selection are acknowledged limitations.

## Implications

For [[generative-ai]]-driven [[intelligent-tutoring|AI Tutoring]] and narrative [[curriculum-design]], the study suggests that scaffolding learning checks into interactive stories requires more than inserting questions — the story must motivate and respond to them coherently. This bears on [[student-experience]] and [[student-engagement]]: perceived coherence appears to be the limiting factor for sustained engagement with AI-produced narrative content, and [[agency]] (whether wrong answers carry story-level consequences) is central to that perception.

The work connects to broader efforts to make AI-generated instructional media usable, including AI-generated videos and slides in computing education, and to [[educational-nlp]] research on automated content generation. It also speaks to [[ai-ed-evaluation]] and [[usability-research]] methodology: pairing structured ratings with qualitative feedback and gameplay telemetry offers a template for piloting [[pedagogical-agent]]-driven narrative tools. As a pilot with a small sample, it is a design-oriented contribution that motivates larger follow-ups on [[learning-gains|learning effectiveness]] rather than an efficacy study in itself.

## Connected Concepts

- [[generative-ai]]
- [[educational-nlp]]
- [[student-engagement]]
- [[student-experience]]
- [[curriculum-design]]
- [[pedagogical-agent]]
- [[higher-ed]]

## Connected Articles

- [[ai-generated-instructional-videos-computing-ed]] — AI-generated instructional videos in computing ed
- [[ai-generated-slides-student-perception]] — Student perception of AI-generated slides
- [[ai-enabled-serious-games]] — AI-enabled serious games
- [[socratic-ai-physics-tutor-taxonomy-2026]] — Socratic AI physics tutor taxonomy
- [[agentic-ai-education-scoping-review]] — Agentic AI in education scoping review

## Citation

Rogosch, F., & Schrader, A. (2026). [*AI-Generated Interactive Fiction for Educational Use: A Pilot Study of Perceived Comprehensibility, Coherence, and Engagement*](https://doi.org/10.21125/edulearn.2026.1075). EDULEARN26 Proceedings, Article 1075.
