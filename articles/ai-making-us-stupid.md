---
title: Is AI making us stupid?
created: "2026-07-19T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [cognitive-offloading, generative-ai, metacognition, learning-gains, ai-literacy, skill-decay, self-regulated-learning, rag, higher-ed]

sources: ['raw/papers/cell-2026-ai-making-us-stupid.md']
confidence: high
---

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
- Having the AI provide an explanation, a suggestion, or act as a **collaborator giving feedback** [14], or emulating a thoughtful tutor [15] → can preserve or even boost skill despite reduced effort ("[[coach-not-crutch-ai-writing|Coach not crutch]]" [15]).
- Staying "in the proverbial cognitive loop" mitigates costs; costs are likely **limited to the specific skills offloaded**, not basic abilities.

### The "coach not crutch" counterpoint

This perspective's answer — that offloading *can* harm but need not — is empirically sharpened by [[coach-not-crutch-ai-writing|Lira et al. (2025)]], who show that AI can exert opposing effects on **effort** and **learning environment**, sometimes yielding "work less, learn more." In pre-registered experiments, adults who practiced cover-letter writing *with* an AI tool wrote better no-AI letters than those who practiced alone — and AI beat both googling examples and personalized feedback from experienced human editors. Notably, they found **no illusion-of-mastery effect** (AI-practice participants did not over-report skill), directly addressing this perspective's open question about metacognitive source-monitoring. The reconciliation with the "making us stupid" risk is the **form of offloading**: Lira et al.'s AI *scaffolded* (surfacing examples and feedback, keeping the learner in the loop) rather than *replacing* the writing act. Where it did the latter, their [[genai-performance-vs-learning|guardrails/performance-vs-learning literature]] still shows the crutch harm — so the two results are consistent, not contradictory: **AI that coaches preserves or boosts skill; AI that substitutes risks decay.** The boundary condition both camps converge on is whether the learner's cognitive act is preserved.

## Concluding remarks & open questions (Box 2)

"It is far too early to say with certainty" the long-term effects. Open questions: prolonged offloading over years/decades; developmental-stage effects (children?); decay as a function of initial skill level and skill type; refresher-training strategies; **designing AI to discourage harmful offloading** (policy levers); whether people can learn to *strategically* offload; impacts on **metacognition** and source-monitoring (misattributing AI output as one's own); effects on dispositions toward thinking.

Notably, the article **cites the PNAS guardrails paper** (Bastani et al. 2025, [[generative-ai-guardrails-harm-learning]]) and the "[[coach-not-crutch-ai-writing|Coach not crutch]]" preprint (Lira et al. 2025) — making the offloading/crutch mechanism a shared thread across the wiki.

## Why this matters for the wiki

- The canonical **cognitive-offloading** citation [[cognitive-offloading]] needed; this perspective synthesizes the mechanism and the skills-vs-basic-abilities resilience distinction.
- Conceptual bookend to the empirical RCTs already in the wiki: [[generative-ai-guardrails-harm-learning]] (unguarded tutor *cut* exam scores via crutch/offloading), [[generative-ai-reduced-study-time-math]] (population "cognitive surrender"), and contrasts with [[ai-generated-feedback-higher-ed]] (well-architected AI feedback *matched* teachers — the "coach not crutch" design).
- Reinforces [[cognitive-offloading|Over-Reliance]], [[metacognition]] (source-monitoring), [[self-regulated-learning]] (deliberate vs. passive offloading), and [[ai-literacy]] (using AI to augment, not replace).

## Connected Concepts

- [[cognitive-offloading]]
- [[ai-literacy]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[generative-ai]]
- [[higher-ed]]
- [[learning-gains]]
- [[rag]]
## Connected Articles

- [[coach-not-crutch-ai-writing]] — Coach not crutch: AI can improve writing skill despite reducing effort
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[cognitive-offloading-speedup-illusion]] — Cognitive offloading and the speedup illusion in human-AI interaction
- [[efficiency-gain-illusion-ai-overreliance]] — The efficiency-gain illusion: People underestimate the rate of AI use and overestimate its benefits on simple tasks
- [[genai-performance-vs-learning]] — Distinguishing performance gains from learning when using generative AI
- [[generative-ai-guardrails-harm-learning]] — Generative AI without guardrails can harm learning: Evidence from high school mathematics
- [[generative-ai-reduced-study-time-math]] — Faster Completion, Less Learning: Generative AI Reduced Study Time on Math Problems and the Knowledge They Build
- [[brcic-effortless-trap-productive-struggle-2026]] — The Effortless Trap: productive struggle, AI, and the illusion of learning
- [[llm-fallacy-misattribution]] — The LLM Fallacy and Misattribution of Competence
- [[gerlich-ai-tools-cognitive-offloading-critical-thinking]] — AI tools in society: impacts on cognitive offloading and the future of critical thinking

## Citation

Cash, T. N., Kelly, M. O., Macnamara, B. N., & Risko, E. F. (2026). [*Is AI making us stupid*](https://doi.org/10.1016/j.tics.2026.06.004). *Trends in Cognitive Sciences*
