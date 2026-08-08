---
title: Is AI making us stupid?
created: 2026-07-19
updated: 2026-07-19
type: concept
tags: [cognitive-offloading, over-reliance, generative-ai, metacognition, learning-gains, ai-literacy, skill-decay]
sources: [raw/papers/cell-2026-ai-making-us-stupid.md]
confidence: high
contested: false
---
# Is AI making us stupid?

**Trent N. Cash, Megan O. Kelly, Brooke N. Macnamara, Evan F. Risko (2026)** — [DOI](https://doi.org/10.1016/j.tics.2026.06.004)
## Summary

A 3-page **perspective** (opinion/review, not an empirical study) addressing whether AI use erodes human cognition. The authors' answer: **not inherently — but the risk is real and follows the cognitive-psychology principle of *cognitive offloading*.** When people delegate reasoning, writing, memory, or problem-solving to AI, they forgo the mental practice that builds and maintains those capacities. The threat is **use-dependent**, not intrinsic to the technology: AI that *augments* thinking preserves the underlying processes; AI that *replaces* them outsources exactly the practice that builds expertise.

## Core distinction: skills vs. basic cognitive abilities

The article's organizing framework separates two facets of our cognitive systems:

- **Skills** — learned, domain-specific behaviors supported by knowledge (arithmetic, flying, diagnosis, writing, programming). Acquired and maintained through **practice** [4]. Offloading practice to AI "will almost certainly compromise skill acquisition" [5] and can cause **skill decay** [5,7].
- **Basic cognitive abilities** — foundational, domain-general capacities (working memory, selective attention) that underlie skills. May be **more resilient** to erosion: cognitive-training research shows gains are highly task-specific rather than broad [9], so basic abilities appear "stubbornly resistant to substantial change." Open question whether long-term or developmental-stage offloading could still shift them [11,12].

## Evidence cited

- **Math learning (high school) [6]:** Students with an AI that let them *fully offload* solving practice problems scored higher on practice but **performed worse on a later no-AI test** than students who never had AI. A *third* condition — a custom AI **tutor** that probed knowledge and filled gaps (rather than giving answers) — performed **no worse** than no-AI students, indicating the targeted skill was still acquired.
- **Endoscopy skill decay [8]:** After an AI detection tool was introduced, adenoma detection rates fell from **28.4% → 22.4%** in cases where the AI was unavailable — evidence of deskilling when the tool was withdrawn.
- **Knowledge acquisition (Box 1) [2,3]:** Offloading to an external store during learning reduces later retrieval; an AI-summary study found advice was "briefer, less unique, and rated less helpful," with learners spending less time and feeling less ownership — shallower depth of learning than web search.

## The "how we use AI matters" argument

Whether skills survive offloading depends on the **form** the offloading takes [13]:
- *Completely* offloading the task ("student has the AI submit the answer") → harm.
- Having the AI provide an explanation, a suggestion, or act as a **collaborator giving feedback** [14], or emulating a thoughtful tutor [15] → can preserve or even boost skill despite reduced effort ("Coach not crutch" [15]).
- Staying "in the proverbial cognitive loop" mitigates costs; costs are likely **limited to the specific skills offloaded**, not basic abilities.

## Concluding remarks & open questions (Box 2)

"It is far too early to say with certainty" the long-term effects. Open questions: prolonged offloading over years/decades; developmental-stage effects (children?); decay as a function of initial skill level and skill type; refresher-training strategies; **designing AI to discourage harmful offloading** (policy levers); whether people can learn to *strategically* offload; impacts on **metacognition** and source-monitoring (misattributing AI output as one's own); effects on dispositions toward thinking.

Notably, the article **cites the PNAS guardrails paper** (Bastani et al. 2025, [[generative-ai-guardrails-harm-learning]]) and the "Coach not crutch" preprint (Lira et al. 2025) — making the offloading/crutch mechanism a shared thread across the wiki.

## Why this matters for the wiki

- The canonical **cognitive-offloading** citation [[cognitive-offloading]] needed; this perspective synthesizes the mechanism and the skills-vs-basic-abilities resilience distinction.
- Conceptual bookend to the empirical RCTs already in the wiki: [[generative-ai-guardrails-harm-learning]] (unguarded tutor *cut* exam scores via crutch/offloading), [[generative-ai-reduced-study-time-math]] (population "cognitive surrender"), and contrasts with [[ai-generated-feedback-higher-ed]] (well-architected AI feedback *matched* teachers — the "coach not crutch" design).
- Reinforces [[over-reliance]], [[metacognition]] (source-monitoring), [[self-regulated-learning]] (deliberate vs. passive offloading), and [[ai-literacy]] (using AI to augment, not replace).

## Related Pages

- [[cognitive-offloading]] — The core mechanism; this article is the key anchor
- [[generative-ai-guardrails-harm-learning]] — PNAS RCT cited by this paper; unguarded AI tutoring harms learning via offloading
- [[generative-ai-reduced-study-time-math]] — Population-scale "cognitive surrender" evidence
- [[cognitive-offloading-speedup-illusion]] — Perceptual bias driving passive offloading
- [[efficiency-gain-illusion-ai-overreliance]] — Why users underestimate offloading costs
- [[ai-generated-feedback-higher-ed]] — Contrast: well-architected AI feedback matched teachers ("coach not crutch")
- [[over-reliance]] — Passive dependency as the downstream risk
- [[metacognition]] — Source-monitoring / misattribution of AI output
- [[self-regulated-learning]] — Strategic vs. passive offloading
- [[ai-literacy]] — Using AI to augment rather than replace thinking
- [[genai-performance-vs-learning]] — Performance gains vs. durable learning

## Citation

Cash, T. N., Kelly, M. O., Macnamara, B. N., & Risko, E. F. (2026). Is AI making us stupid? *Trends in Cognitive Sciences*
