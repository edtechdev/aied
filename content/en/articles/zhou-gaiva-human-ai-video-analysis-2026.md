---
title: "GAIVA: A Generative AI Framework for Human–AI Collaboration in Educational Video Analysis"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/zhou-gaiva-human-ai-video-analysis-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [case study]
audience: [researchers, learning analytics designers]
level: [higher ed]
discipline: [learning sciences]
technology: [generative-ai, llm, multimodal, human-in-the-loop-ai]
methods: [ai-assisted-educational-research, qualitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Zhou, Kang and Nguyen introduce GAIVA (Generative Artificial Intelligence for Video Analysis), a four-phase framework that pairs [[multimodal|multimodal large language models]] with text-only [[llm|large language models]] to transcribe, code, and interpret classroom video while keeping researchers in the loop at every stage. In a case study of five recordings from a simulation-based collaborative science activity, the role-assignment prompt produced the most balanced LLaVA transcriptions (accuracy M = 3.24, completeness M = 3.86, specificity M = 3.54), and GPT-4o applied the resulting five-category codebook with inter-rater reliability comparable to human coders, reaching κ = 0.91 for Coordinated Collaboration against a human–human κ of 0.83. The pipeline also surfaced Peripheral Engagement, a construct absent from the guiding theories but stable across all ten coding batches, showing that [[ai-assisted-educational-research|AI-assisted video analysis]] can support both deductive alignment and inductive discovery.

## Key Findings

1. **Prompt strategy drives transcription quality.** Five prompting strategies tested on 50 video segments (250 outputs total) differed significantly on accuracy (χ² = 15.20, p = 0.004), completeness (χ² = 86.52, p < 0.001), and specificity (χ² = 74.49, p < 0.001). Role-assignment was the most balanced (M = 3.24, SD = 1.72; M = 3.86, SD = 0.35; M = 3.54, SD = 0.58), chain-of-thought had the highest accuracy (M = 3.48, SD = 1.59) but lagged on completeness and specificity, and the zero-shot baseline scored lowest everywhere (M = 2.74, SD = 1.75; M = 2.70, SD = 0.61; M = 2.34, SD = 0.59).
2. **Human raters applied the scoring rubric reliably.** A double-coded subset of 50 outputs reached 96.7% exact agreement for accuracy (ICC = 0.99), 90% for completeness (ICC = 0.89), and 93.3% for specificity (ICC = 0.93).
3. **Codebook development converged on five stable categories.** GPT-4o generated candidate codes from 500 transcriptions across 10 batches (each 18,485–19,892 tokens); within-batch consolidation trimmed 69 codes to 63, and cross-batch comparison found coordinated, parallel, and peripheral engagement in 10/10 batches (100% consistency), with asymmetric collaboration at 9/10 (90%) and disengagement at 8/10 (80%).
4. **Automated coding matched human agreement on most categories.** Across 50 randomly selected transcriptions (none labeled Disengagement), Peripheral Engagement was most frequent (n = 18), then Coordinated Collaboration (n = 17), Parallel Engagement (n = 10), and Asymmetric Collaboration (n = 5). Human–GPT agreement was κ = 0.91 for Coordinated Collaboration, above human–human κ = 0.83, with κ = 0.69 versus 0.73 for Asymmetric Collaboration, 0.63 versus 0.78 for Peripheral Engagement, and 0.65 versus 0.68 for Parallel Engagement.
5. **Transcript-based coding beat direct video coding.** In a preliminary comparison, direct LLaVA video-based coding agreed poorly with humans (κ = 0.20 for Coordinated Collaboration, -0.1 for Asymmetric Collaboration, 0 for Peripheral and Parallel Engagement), while GPT-4o coding from transcripts reached the values above. Staging transcription before coding, rather than asking the MLLM to classify clips directly, was the more reliable design.
6. **Peripheral Engagement is an inductive discovery.** The construct — students individually focused but displaying peer awareness and readiness to re-engage — recurred across all ten independently generated codebooks yet had no direct precedent in Goodwin's or Dillenbourg's frameworks, illustrating how a consistent AI-assisted pipeline can surface constructs that are hard to notice at scale.

## A four-phase pipeline with humans in the loop

GAIVA structures video analysis into four sequential phases: preprocessing into non-overlapping 10-second clips sampled at 2 frames per second (20 frames per segment); MLLM-based behavioral transcription; theory-informed codebook development through human–AI collaboration; and LLM-based automated coding. The authors deliberately separate transcription (LLaVA-Video-72B-Qwen2, an open-source video MLLM run locally on three NVIDIA A100 GPUs at temperature 0 for reproducibility) from code generation (text-only GPT-4o, also at temperature 0), arguing that multimodal processing adds computational cost and reasoning challenges for extended interpretation tasks, and that separating the stages keeps the pipeline inspectable: problems can be traced to the transcription stage or the code-application stage instead of hiding in a black box.

The case study took place in HoloOrbits, an immersive environment for learning planetary motion and Kepler's laws. Twenty-four undergraduates at a US university worked in groups of two or three; consent and data availability left 13 students in five groups for the final analysis. Five recordings from two classroom sessions, each about 33 minutes long, documented gaze, gesture, posture, and tool use from a group-centered camera angle. The current implementation of GAIVA analyzes the visual stream exclusively, matching the study's focus on nonverbal collaborative behavior.

## Transcription quality depends on prompt strategy

The paper's first empirical result is a structured prompt-selection protocol. Five strategies — zero-shot (baseline), role-assignment ("act as an educational researcher specializing in qualitative analysis"), tone-adjusted, context, and chain-of-thought — were compared across 250 outputs scored on accuracy (5-point), completeness (4-point), and specificity (4-point) rubrics. Role-assignment won for balanced quality, and post-hoc Wilcoxon signed-rank tests with Bonferroni correction showed it significantly outperformed most other strategies, particularly on completeness and specificity. Two further design choices matter: few-shot prompting was excluded to avoid biasing the model toward example patterns, and temperature was set to 0 so identical inputs produce identical transcripts.

Even the best transcripts were not error-free. The model occasionally produced plausible but unsupported claims about engagement — inferring that a student was engaged or off-task without observable evidence — which is exactly why the authors retained human rubric review of transcripts before any downstream coding. Transcription quality varied significantly with prompt design and context, underscoring that prompt engineering is a substantive methodological step rather than a detail.

## Human–AI collaboration builds the codebook

Preliminary inductive coding with GPT-4o produced broad, interpretable labels such as "low," "medium," and "high interaction" and "collaborative engagement," which captured variation but lacked theoretical grounding. The authors then anchored code generation in Goodwin's embodied participation framework and Dillenbourg's collaborative learning framework (the collaboration-versus-cooperation distinction, symmetry, and division of labor), prompting GPT-4o with framework references rather than full texts to fit more transcriptions in the context window. Comparative testing on a random 5% of the data led them to GPT-4o over Gemini 2.5 and Llama-3-70B-Instruct for superior theoretical grounding and conceptually distinct codes.

The evaluation applied four criteria — density, consistency across batches, theoretical alignment, and structured qualitative review with a revision log. Within-batch consolidation removed redundancy (69 codes to 63); cross-batch comparison identified three patterns in every batch (coordinated, parallel, and peripheral engagement) and two more at high frequency (asymmetric 9/10, disengagement 8/10); and rare codes were removed or merged when they were group-size-specific, audio-dependent, or described transitions rather than states. The final codebook contains five categories: four map directly onto the frameworks — Coordinated Collaboration, Asymmetric Collaboration, Parallel Engagement, and Disengagement — while Peripheral Engagement was retained on empirical stability alone.

## Automated coding matches human agreement

In the final phase, GPT-4o applied the codebook to 50 randomly selected transcriptions under the same mutually exclusive coding structure used by humans. Agreement was moderate to substantial across categories, and the strongest result — Coordinated Collaboration at κ = 0.91 for human–GPT, exceeding human–human κ = 0.83 — suggests the most visually salient category was also the most reliably coded. Peripheral Engagement proved the most interpretive-demanding category (human–GPT κ = 0.63 versus human–human κ = 0.78, reflecting the ambiguity of passive monitoring), and Parallel Engagement the least reliably coded overall.

The staging result is the practical headline. In direct video-based coding, LLaVA assigned segments to only two of the five categories and agreed with humans at κ = 0.20 at best, whereas transcript-based GPT-4o coding spread across the codebook and reached human-level agreement. Scaling and consistency also improved: identical prompts and zero-temperature decoding produced stable codes across independently processed batches, and the framework logged model outputs alongside researcher decisions so every construct can be traced back to its behavioral evidence.

## What this means for practice

- **Researchers analyzing classroom video.** Adopt the staged pipeline — MLLM transcription with a role-assignment prompt, rubric-based review of a transcript sample, theory-anchored codebook co-development, then LLM coding — since the study's numbers (accuracy M = 3.24, completeness M = 3.86; GPT-4o κ = 0.91 on the most salient code) show human-comparable reliability on nonverbal behavior.
- **Teams validating AI-assisted coding.** Check transcription quality before coding and verify cross-batch stability of candidate codes before trusting them: three of the five final categories recurred in 10/10 batches, and the remaining 200 transcriptions were scored by one researcher only after double-coded calibration reached ICC = 0.89 or higher.
- **Researchers writing prompts for video MLLMs.** Run a small prompt comparison before committing to a pipeline — five strategies on 50 segments sufficed here to select a winner, and chain-of-thought's high accuracy with lower completeness shows that single-dimension metrics can mislead.
- **Tool designers building analysis pipelines.** Prefer transcript-based coding over asking video MLLMs to classify clips directly, keep deterministic settings such as temperature 0 for reproducibility, and scope vision-only pipelines to research questions about visually observable behavior until audio integration matures.

## Limitations

- The framework operates exclusively on visual data: audio, verbal discourse, turn-taking, and prosodic cues are not analyzed, so audio-dependent collaborative behaviors go unmeasured.
- The sample is small and single-context: five recordings of 13 students in five groups from one simulation-based science activity, a consent-limited subset of the 24 participants, so generalization across classrooms and tasks is untested.
- Fixed 10-second segmentation imposes artificial boundaries that can fragment coherent behavioral sequences or create transitions that do not reflect genuine collaborative patterns.
- GPT-4o's context window forced batch processing (each batch 18,485–19,892 tokens), which reduced the model's exposure to rare behavioral patterns that could have broadened the codebook.
- The transcription evaluation is transcript-level, not claim-level: there is no error analysis of how specific transcription errors propagate into downstream coding outcomes.
- The framework depends on video quality and visibility; occlusion, overlapping bodies, and dynamic camera movement degrade transcription and coding in less controlled classroom environments.

## Citation

Zhou, Y., Kang, J., & Nguyen, H. (2026). GAIVA: A Generative AI Framework for Human–AI Collaboration in Educational Video Analysis. *Journal of Educational Data Mining*, 18(1), 341-386.
