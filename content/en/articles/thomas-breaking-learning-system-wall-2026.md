---
title: Towards breaking the learning system wall using multimodal tutoring transcriptions
created: "2026-10-10T18:38:00-04:00"
updated: "2026-10-16T13:51:50-04:00"
type: article
technology: [knowledge-tracing, intelligent-tutoring, multimodal, llm]
audience: [educational technology developers, software developers, researchers]
level: [k 12]
sources: ['raw/papers/thomas-breaking-learning-system-wall-2026.md']
confidence: medium
research_method: [system development]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
---

> **Synthesis:** This work-in-progress paper attacks the "learning system wall" — the fact that [[learning-analytics|learning analytics]] models can't generalize across tutoring platforms because each system defines constructs like "attempt" and "hint" differently (MATHia, i-Ready, IXL). Rather than merging audio transcripts, chat logs, and clickstreams — a process that fails on clock drift, missing metadata, and Zoom-alias mismatches — the authors propose generating a single unified "screenplay" transcript directly from screen-recording video using multimodal large language models. The pipeline partitions 30–60 minute tutoring videos into ≤10-minute overlapping segments, processes each through Gemini (locally hosted, for privacy) with strict JSON output constraints (verbatim dialogue + moment-by-moment screen actions), then deduplicates and re-maps segment offsets onto a global timeline. The planned validation aligns these AI transcripts with native MATHia logs as ground truth, anchoring the first physical student action to the first logged attempt and recalibrating against intermediate log milestones to correct cumulative clock drift, then classifies transcript phrases into four MATHia event types (attempt, hint_request, hint_level_change, done) with keyword heuristics to be evaluated on a held-out set by precision/recall/F1/Cohen's κ.

The key empirical claim is that video-derived transcripts capture learning *invisible* to any single log stream. The paper's Table 1 shows a case where a tutor scaffolds equation-solving on a shared whiteboard: MATHia logs the final correct attempt and nothing else — the whiteboard drawing, the student's "84" → "42" reasoning, and the tutor's verbal scaffolding are erased. A second example: a student silently types "I do, but I don't really know how to use it" into Zoom chat while an external Desmos calculator session shows where the computation actually happened; the MATHia log records only an erroneous attempt. Traditional merged pipelines are structurally blind to any event without a software log or audible verbalization — silent whiteboard work, calculator use, app-switching, off-screen context, even a student leaving the computer (logged as "idleness"). The proposed method eliminates multi-stream merging entirely: one video source, one chronological record, with MATHia alignment providing the objective ground truth for validating on-screen problem solving while preserving student privacy without manual video coding. The stated challenges are honest about limits: temporal alignment is hard when students join Zoom rooms at arbitrary times; clock drift accumulates; the current plan validates only on-screen math-logged events (audio transcription accuracy unmeasured); and there is no method yet to discriminate MATHia-aligned events from other learning processes (calculator use, whiteboard work) in the transcript.

## Key contributions

- **Unified screenplay transcript from a single source.** A Gemini-based pipeline (video → ≤10-min overlapping segments → strict JSON event schema → dedupe + global timeline remap) produces one chronological record of dialogue and screen actions, eliminating the audio/chat/clickstream merge entirely.
- **Planned MATHia-aligned validation.** First physical student action anchored to first logged MATHia attempt for baseline offset; periodic manual recalibration against intermediate backend events to correct clock drift; keyword heuristics classifying transcript text into four event types, to be validated on a ~50-transcript development set plus held-out set with F1 and Cohen's κ.
- **Documented capture of invisible learning.** Table 1 concretely shows what merged pipelines miss: whiteboard scaffolding, silent student writing, external tool use (Desmos), silent chat cries for help, and off-screen ecological context that native logs reduce to "idleness."
- **Privacy-preserving design.** Locally hosted MLLMs, full de-identification of transcripts and logs, IRB compliance — no raw video leaves the secure environment.
- **Explicit challenge inventory.** Temporal matching (arbitrary Zoom entry), incomplete video uploads, unmeasured audio accuracy, inability to distinguish MATHia events from other learning processes, cumulative clock drift without fully automated correction.

## What this means for practice

- **For measurement researchers:** the learning system wall is a *definition* problem (attempt/hint constructs differ per platform), not just a data-format problem; video-derived transcripts are a platform-agnostic measurement substrate that could eventually standardize event extraction across MATHia/i-Ready/IXL.
- **For infrastructure projects (NTO, SeerNet, SafeInsights):** the pipeline's alignment procedure (anchor + periodic recalibration) is a reusable pattern for any multi-stream tutoring analytics problem, even before cross-system generalization is proven.
- **For tutoring platforms:** native logs systematically under-report the pedagogy that tutors actually do (whiteboard scaffolding, calculator guidance, silent support) — video transcription recovers it, which matters for studying what makes tutoring effective.
- **For anyone building on MLLM video understanding:** the paper is a cautionary template — sub-second resolution, autoregressive missequencing of concurrent events, context-window partitioning losses, and privacy constraints are all documented failure modes, with the strict-JSON + overlap + dedupe design as a partial mitigation.

## Limitations

- This is explicitly a work-in-progress / planned method: no results are reported yet — the temporal alignment procedure, the classification metrics, and cross-system generalization are all described but not executed.
- Validation is single-platform (MATHia) and single-domain (middle-school math); the claimed cross-system generality is a hypothesis, not a demonstration.
- Audio transcription accuracy is unmeasured; the current plan validates only on-screen, math-logged events.
- No discrimination yet between MATHia-aligned events and other learning processes in the transcript (calculator, whiteboard), so "capture" may include events the MATHia log has no counterpart for.
- Clock-drift correction requires manual recalibration against backend logs — not automatable at scale as described.

## Citation

Thomas, D. R., Kamikazi, M. C. A., Gurung, A., Miglani, I., Gupta, S., Levonian, Z., Borchers, C., & Koedinger, K. R. (2026). [*Towards breaking the learning system wall using multimodal tutoring transcriptions*](https://doi.org/10.1177/9781734048929). In *Proceedings of the Artificial Intelligence in Measurement and Education Conference (AIME-Con)*, Vol. 1: Full Papers (pp. 622–630). National Council on Measurement in Education.
