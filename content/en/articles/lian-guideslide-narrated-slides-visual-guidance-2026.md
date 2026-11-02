---
title: "Look Over There! Dynamic Visual Guidance for AI-Narrated Slides"
published: "2026-10-30"
created: "2026-11-02T09:28:00-05:00"
updated: "2026-11-02T09:28:00-05:00"
type: article
sources: ['raw/papers/lian-guideslide-narrated-slides-visual-guidance-2026.md']
source_url: "https://arxiv.org/abs/2610.41645"
confidence: high
page_kind: [evaluation]
research_method: [user study]
level: [higher ed]
audience: [educational technology developers, instructors]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-02"
    agent: hermes-agent
source_depth: full text
pedagogy: [cognitive-psychology, video-education]
technology: [multimodal, visualization]
methods: [usability-research]
---

> **Synthesis:** Lian and colleagues (2026) present GuideSlide, a system that turns a PDF slide deck into an AI-narrated presentation carrying **[[visualization|dynamic visual guidance]]**: the viewport zooms to the region being discussed, then time-aligned highlights mark the element inside it. The target is the split-attention effect in [[video-education|narrated slide viewing]] — narration unfolds linearly while content is distributed spatially, splitting [[multimodal|audio and visual channels]], so viewers burn [[cognitive-psychology|working memory]] searching for what the voice refers to. The contribution is hierarchical: prior systems cue elements but presuppose viewers can already find the right region, whereas zoom restructures the visual field first. In a within-subjects [[usability-research|user study]], 24 participants watching 5-minute-28-second decks on their own phones showed NASA-TLX workload falling from 5.74 to 4.53 (d = 0.84), immediate comprehension rising from 5.54 to 6.54 out of 9 (d = 0.46), and 21–22 of 24 preferring guidance on every forced-choice item. The 24-hour delayed advantage missed significance (p = .054).

## Key Findings

1. **Workload dropped 1.20 points.** NASA-TLX overall fell from 5.74 to 4.53, Δ = −1.20, p < .001, d = 0.84, with mental demand strongest (d = 0.86).
2. **Knowing where to look drove the largest effect.** Perceived attentional guidance rose from 3.32 to 5.05, Δ = 1.73, d = 1.06; the item "I knew where to look at each moment" gave d = 1.01.
3. **Immediate comprehension improved modestly but reliably.** Scores rose from 5.54 to 6.54 out of 9 — about 18% — with Δ = 1.00, 95% CI [0.08, 1.92], p = .035, d = 0.46.
4. **The 24-hour advantage missed its threshold.** Delayed scores were 5.12 versus 4.46, Δ = 0.67, W = 49, p = .054, r = .39; retention (d = 0.38) beat [[transfer-of-learning|transfer]] (d = 0.20).
5. **Preference was near-unanimous.** 21–22 of 24 chose guidance on all four forced-choice comparisons (all p < .001); UEQ-S rose from 3.41 to 4.38 (d = 0.68).
6. **Zoom generation was accurate; highlight position was not.** Zoom trigger timing scored 3.00 of 3 and zoom position 2.71, but highlight position scored 2.36 (88.0% of ratings ≥ 2).
7. **Highlight localization held across 80 slides.** Across 20 decks from 13 universities, 428 highlight items averaged 2.65, 91.2% scored 2 or above, none scored 0, weighted kappa .75.

## Two levels of search, one missing layer

The diagnosis is what makes the paper useful: viewer search has two tiers — find the region the narration refers to, then find the element inside it. Existing automatic narrated-slide systems (AutoLectures, and Mizukami and colleagues' generator) cue at the element level only, assume the region is already found, and were validated on technical metrics rather than with viewers. GuideSlide adds the macro tier with zoom, narrowing the search space and filtering peripheral content, and pads each zoom target with at least 30% around the focal content to hold context, its animated transition capturing attention before any highlight appears. Only afterward do semi-transparent overlays mark the referenced element, bound to a character range in the narration. Zoom answers *where*, highlight answers *what*.

## From a PDF deck to synchronized guidance, without annotation

The pipeline needs no human markup. PyMuPDF renders pages to images; Gemini 3 Pro segments the deck into sections, then emits a per-page ordered region plan in which each region carries a zoom bounding box, two to three sentences of narration in a teacher's voice, and character-level highlight triggers. Five constraints are enforced — an overview-first full-page region, highlights nested inside their parent zoom box, the 30% padding, valid trigger ranges, and distinct elements per region — with a full-page fallback when a zoom box fails validation. Azure AI Speech pregenerates audio for latency-free playback, and at runtime each region zooms, plays, and highlights in parallel, sentence timing allocated by character share. Grounding, not sequencing, is the weak link.

## What the phone-sized study showed

Twenty-four participants (16 female, 8 male, aged 18–29, M = 22.1) watched two researcher-built four-page decks — MRI principles and noise-canceling headphones — counterbalanced on their own 6.1–6.7-inch phones. Guidance cut frustration (d = 0.73) and lifted performance self-assessment (d = 0.62) while leaving effort unchanged (p = .205) — the [[cognitive-psychology|cognitive-load]] signature of relief from locating content, not from effortful processing. Interviews explain the rest: 23 of 24 said guidance eliminated visual search (62 mentions), 20 described losing track under static slides (41 mentions), and 23 invoked a teacher pointing at a board (43 references). Thirteen found the advantage amplified on phones. The top drawback was losing global context while zoomed (32 mentions, 15 participants).

## What this means for practice

- **Designers of instructional materials.** Give narrated slides a macro cue before a micro one: zoom to the region, keep 30% padding for context, then highlight the element.
- **Designers of instructional materials.** Optimize for phones first: 13 of 24 participants said the advantage was amplified on their 6.1–6.7-inch screens, where dense layouts were unreadable.
- **Designers of instructional materials.** Automate generation, but audit highlight grounding: zoom trigger timing scored 3.00 of 3 while highlight position scored 2.36, the one dimension with room to improve.
- **Instructors.** Set expectations at first-pass understanding and keep an overview on screen: immediate comprehension rose about 18%, but the delayed difference was p = .054 and transfer gave d = 0.20, while losing context while zoomed in was the top concern (32 mentions, 15 participants).

## Limitations

- Twenty-four [[higher-ed|university students]] (aged 18–29, M = 22.1) at one institution, each viewing two four-page decks of 5 minutes 28 seconds — one brief exposure.
- Split-attention evidence rests on self-reported workload, attentional-guidance ratings, and a nine-point test; no eye-tracking was run, so fixation dispersion and time-on-target are unconfirmed.
- Playback controls were disabled to isolate guidance, and four participants asked for the interactive Q&A already built but switched off, so the tested condition is narrower than the system.
- Some static-condition participants read the subtitle transcript to compensate, which the authors say may make that gain an underestimate.

## Citation

Lian, J. A., Mei, Y. A., Cheung, H. T., Cheung, M. M., Wang, X. E., Baciu, G., Duh, H. B.-L., Li, Q., Yang, O., & Sin, Z. P. T. (2026). [*Look Over There! Dynamic Visual Guidance for AI-Narrated Slides*](https://arxiv.org/abs/2610.41645). arXiv.
