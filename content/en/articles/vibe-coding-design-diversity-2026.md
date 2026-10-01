---
title: "One Tool, One Taste? How Vibe Coding Trades Collective Diversity for Individual Creativity"
created: "2026-10-01T09:07:20-04:00"
updated: "2026-10-01T09:07:20-04:00"
type: article
sources: ['raw/papers/vibe-coding-design-diversity-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [case study, survey, user study]
level: [higher ed, graduate]
audience: [instructors, educational technology developers, researchers, learners]
pedagogy: [creativity, student-ai-interaction]
technology: [vibe-coding, generative-ai, multimodal, llm]
assessment: [process-oriented-assessment, self-report-measures, authentic-assessment]
methods: [mixed-methods-research, quantitative-research, qualitative-research]
ethics: [ethics]
foundations: [human-ai-collaboration, agency, educational-development]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Boussioux, Zhao, and Cho (2026) ask what happens to design diversity when a shared [[generative-ai|generative]], [[llm]]-driven tool produces the whole artifact. Seventy-three graduate students each built a website for a different real business on the [[vibe-coding]] platform Lovable, under a rubric that explicitly rewarded "creative and original design that avoids generic AI aesthetics." Embedding every homepage with DINOv3 and comparing 2,628 pairs, they find 73 briefs collapsing into roughly a dozen designs: six archetypes absorb 88% of sites, and a median builder's closest look-alike shares 49 index points against a 22.8-point average. A nine-session think-aloud subsample traces the mechanism: one shared generate-and-check script, 29% of voiced intentions never typed, originality in only 3.4% of 440 verdicts. Most strikingly, [[agency|felt authorship]], satisfaction, and perceived quality show no detectable association with measured originality — builders converged while believing they had not. The authors call this authored ignorance and contribute a joint outcome–process–perception strategy ([[mixed-methods-research]]).

## Key Findings

1. Across 2,628 DINOv3 comparisons of 73 homepages built for distinct businesses, mean visual similarity was 22.8 index points, yet the median nearest neighbour scored 49.
2. A representative UMAP–HDBSCAN partition assigned 88% of sites to six archetypes — Card-Grid, Whitespace, Full-Bleed Photo, Menu, Product Catalog, Editorial — while 60 configurations returned three to twelve clusters.
3. The convergence was not explained by the briefs: the 31 business types spanned an effective diversity of 21.6, roughly twice the 12.0 effective number of distinct designs.
4. Nine recorded think-aloud sessions showed one shared script: every chat-driven builder exceeded a shuffled null on generate-and-check conformance, with [[prompt-engineering|prompting]] peaking early and inspection dominating.
5. Human specification was thin and thinning: 29% of voiced intentions were dropped before typing, build requests fell from 100% of opening prompts to 11%, and 61% of generation time was dead waiting.
6. The acceptance test almost never asked the graded question: originality appeared in 3.4% of 440 verdicts, 26% of cycles got no verdict, and 37% of 92 flagged defects were never confirmed fixed.
7. Felt authorship (67/100), satisfaction (6.4/7), and perceived quality (6.1/7) were internally coherent but uncorrelated with measured originality (r ≤ +0.13, n = 57–58).

## What the cohort's artifacts showed

Seventy-three graduate students each chose a different real business and built its promotional site on Lovable as graded work shown to real [[stakeholders]], an instance of [[authentic-assessment]]. Embedding every full-page screenshot with a self-supervised vision transformer ([[multimodal]] DINOv3) and comparing all 2,628 pairs showed local concentration: the average pair shared 22.8 index points, but the median nearest-neighbour score was 49, and the most similar pair reached 86. Six recovered house styles absorbed 88% of sites, while clustering-free indices put the effective number of distinct designs near twelve against 21.6 for the input briefs. The originality spectrum ran from a 64% look-alike to a 96% original, a [[quantitative-research|distributional]] result motivating the process study.

## The mechanism inside the loop

Nine builders recorded their first session with concurrent think-aloud, coded at one-second resolution, a rare [[process-oriented-assessment|process-level]] view of AI-assisted work. Every chat-driven builder followed the same generate-and-check loop more often than a shuffled null. Human input was thin and thinning: across eight analysable cycles, 38 voiced intentions produced 27 typed ones, so 29% were lost between mind and keyboard. Later prompts collapsed into gradient tweaks and bug reports, increasingly pointing at what the stack had already made. Waiting dominated — 61% of generation time was dead waiting — and the acceptance test was shallow: verdicts were fast and generic ("good", "cool", "cute"). This is the [[student-ai-interaction]] the platform's defaults fill.

## Why the convergence stayed invisible

The process data show the decoupling produced in real time: builders narrated their sessions in the first person while attributing the making to the model. The [[self-report-measures|post-task survey]] confirmed it at cohort scale: [[agency|felt authorship]], satisfaction, and perceived quality hung together, yet none tracked measured originality. Reflections rule out indifference: 48 of 78 posts discussed avoiding generic AI aesthetics, so the missing correlation reflects a missing comparison set, not a lack of intent. The authors name this authored ignorance: [[creativity|originality]] is relational, and only the platform sees the distribution against which it would be judged. Feedback for 65 sites asked for accurate hours, working links, and [[usability-research|usability]] fixes; nobody asked a site to look less like others. Research participation was separated from grading under IRB approval; only cohort-level statistics are reported ([[ethics]]).

## What this means for practice

- **Instructors.** Grade and teach against the distribution, not the artifact. A rubric saying "avoid generic AI aesthetics" cannot work when no builder sees the cohort; show comparison sets and require a "what should this not look like" specification.
- **Faculty developers.** Treat [[vibe-coding]] as a delegation skill, not a tool demo. The sessions show the failure is a thin, fast acceptance test, so coach deliberate specification and evaluation over faster prompting — an [[educational-development]] priority.
- **[[educational-technology-developers|Educational technology developers]].** The diagnosis implies the remedy: surface an originality meter from the platform's own outputs, sample initial candidates from distinct archetypes, and add pre-generation friction funded by the 61% of generation time spent waiting.
- **Researchers.** Reuse the outcome–process–perception design — vision-transformer embeddings, one-second instrumentation, post-task self-report — as a replicable strategy for studying [[human-ai-collaboration]].

## Limitations

- **One cohort, one platform.** The data cover 84 graduate students in one course, a single recommended platform (Lovable), and one model generation; the archetypes will drift.
- **The process layer is nine builders.** Process claims sit at the cycle, episode, or utterance level with sessions as replications; the utterance- and prompt-level codes are AI-assisted first passes whose human validation is pending.
- **The perception null is bounded, not established.** The survey joins 58 of 73 sites (57 for authorship), authorship is a single item, and equivalence holds only for margins of |r| ≥ 0.24–0.29.
- **Similarity is not human-calibrated.** Embedding scores are not a validated percentage of perceived similarity, and with no pre-generative corpus the absolute level cannot yet be attributed to vibe coding; the [[qualitative-research|think-aloud]] rate conditions on verbalized intent.

## Citation

Boussioux, L., Zhao, Z., & Cho, K. (2026). [*One Tool, One Taste? How Vibe Coding Trades Collective Diversity for Individual Creativity*](https://arxiv.org/abs/2609.38183). arXiv preprint.