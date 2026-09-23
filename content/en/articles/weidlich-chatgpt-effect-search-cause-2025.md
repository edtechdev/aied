---
title: "ChatGPT in Education: An Effect in Search of a Cause"
created: "2026-09-05T12:00:00-04:00"
updated: "2026-09-19T07:22:56-04:00"
type: article
foundations: [limitations-in-aied-research]
technology: [generative-ai, intelligent-tutoring, llm]
assessment: [learning-gains]
connected_faqs: [reporting-interpreting-aied-research]
sources: ['raw/papers/weidlich-chatgpt-effect-search-cause-2025.md']
confidence: high
research_method: [position paper, theoretical analysis]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, meta-analysis-systematic-review, research-methods-aied]
---

> **Synthesis:** **ChatGPT in Education: An Effect in Search of a Cause** — A conceptual critique by Weidlich, Gašević, Drachsler, and Kirschner (2025) arguing that much early [[generative-ai|ChatGPT]] efficacy research repeats the classic media comparison fallacy: it compares an ill-defined "ChatGPT" treatment against opaque controls while measuring outcomes that are not durable learning. Using Deng et al.'s (2025) [[meta-analysis-systematic-review|meta-analysis]] as a worked example, the authors revive [[research-methods-aied|methodological]] lessons from the Clark–Kozma media/methods debate to specify three "non-negotiable" conditions for interpretable causal effects — a precisely described [[intelligent-tutoring|treatment]], a well-defined control group, and a valid measure of [[learning-gains|learning]] — and audit a subset of primary studies showing that only a small minority meet all three.

## Key Findings

- **Three non-negotiable conditions for interpretable effects.** To claim any technology improves learning, researchers must (1) describe the exact nature of the experimental treatment so it can be replicated; (2) specify what the control group actually did — the operationalized counterfactual; and (3) use outcome measures that validly indicate *durable learning* rather than self-report or in-treatment performance.
- **ChatGPT is a tool, not a method.** Following Clark's (1983) "trucks don't change the groceries" analogy, learning does not follow from a general-purpose tool; effects arise only when the tool is embedded in a specific instructional method. Asking "does ChatGPT improve learning?" is a non sequitur — the meaningful question is whether a *particular use* of ChatGPT, in a *particular* [[learning-design|instructional design]], beats a *particular* comparison.
- **Media-comparison confounding is pervasive.** When new AI tools are introduced alongside new [[pedagogy]], activity structures, or interface designs (Eronen's "fat-handed" interventions), the medium and method are confounded and effects become uninterpretable. This is a recurring pitfall documented across decades of research on instructional TV, computer-based instruction, distance education, AR/VR, and now AI.
- **Deng et al.'s (2025) meta-analysis illustrates the problems.** The audit of 19 academic-performance comparisons from Deng et al. found only **74%** had a well-defined ChatGPT treatment, **42%** a well-defined control group, and **53%** an outcome that qualified as learning — leaving only **4 of 19 comparisons (21%)** satisfying all three criteria.
- **A stark effect-size anomaly.** Deng et al. reported g = 0.7 for ChatGPT — *larger* than the 0.66 effect size of purpose-built [[intelligent-tutoring|Intelligent Tutoring Systems]] (Kulik & Fletcher 2016), even though ITS are engineered specifically for learning while ChatGPT was designed for entirely different purposes. Such a result signals that the "treatment" was a heterogeneous "secret sauce," not a coherent intervention.
- **Valid learning measures are rare.** Many outcomes were self-reported skills/motivation, or performance measured *during* treatment (confounding learning with task support), rather than unassisted, post-intervention measures of enduring change. A notable included study (Ahmed Moneus & Al-Wasy 2024) measured translation quality produced *during* human–ChatGPT collaboration — collaborative output, not learning — yet contributed a huge effect (g = 3.1).
- **The lesson of "fast science."** The rush to synthesize findings within two years of ChatGPT's launch (Deng et al. found 22 already-published ChatGPT-in-education reviews) produces research waste and premature causal claims. The authors call for a more deliberate research culture: let a richer literature accumulate, use stringent inclusion or detailed coding, and interpret meta-analytic effects cautiously.

## What this means for practice

- **Researchers.** Report all three non-negotiables in every efficacy claim — a treatment described well enough to replicate, the operationalized counterfactual of what the control group did, and an outcome measure that validly indicates durable learning.
- **Researchers.** Measure learning after the treatment is removed: only 10 of 19 audited comparisons (53%) used an outcome that qualified as a learning measure, and the largest effect (g = 3.1) came from translation quality produced during human–ChatGPT collaboration, which is collaborative output rather than learning.
- **Researchers.** Code treatment features — interaction mode, instructional principles, task structure, usage limits, domain knowledge supplied to ChatGPT — as moderators, or use stringent inclusion; without them the pooled treatment is a "secret sauce" and only 4 of 19 comparisons (21%) satisfied all three conditions.
- **Researchers.** Read anomalous effect sizes as a validity warning: g = 0.7 for ChatGPT exceeds the 0.66 benchmark for purpose-built [[intelligent-tutoring|intelligent tutoring systems]], which the authors treat as a sign of a heterogeneous treatment rather than a coherent intervention.
- **Researchers.** Let a literature accumulate before synthesizing it — the very meta-analysis critiqued here identified 22 already-published ChatGPT-in-education reviews within two years of the tool's launch.

## Limitations

- This is a conceptual paper with no primary data; its empirical element is an audit of 19 academic-performance comparisons drawn from a single meta-analysis (Deng et al., 2025), not a systematic sample of the ChatGPT literature.
- The audit reports a subset of codes from a larger review (Lawson et al., forthcoming) and examines only the academic-performance and higher-order-thinking-propensity models, so outcomes outside those categories are not assessed.
- The critique is built on one worked example — a meta-analysis published within two years of ChatGPT's launch — though the authors argue the concerns apply equally to other syntheses such as Wang and Fan (2025).
- The coding scheme is coarse on its face (14 of 19 comparisons, 74%, had a well-defined treatment; 8 of 19, 42%, a well-defined control; 10 of 19, 53%, a learning measure), which leaves small cells and limits how far moderator analyses of treatment features can go.

## Connected Concepts

- [[generative-ai]]
- [[llm]]
- [[research-methods-aied]]
- [[meta-analysis-systematic-review]]
- [[limitations-in-aied-research]]
- [[ai-ed-evaluation]]
- [[learning-gains]]
- [[intelligent-tutoring]]
- [[assessment-validity]]
- [[rct]]

## Connected Articles

- [[genai-educational-outcomes-meta-analysis]] — A large meta-analysis of generative AI's effect on educational outcomes
- [[favero-critical-ai-tutors-empower-enslave-2025]] — Critical limits of AI tutors and weak theory use
- [[generative-ai-guardrails-harm-learning]] — Generative AI without guardrails can harm learning (PNAS 2025 RCT)
- [[ai-overreliance-complex-adaptive-system-2026]] — Overreliance on AI as a complex adaptive system
- [[ai-literacy-assessment-misalignment]] — Self-reported vs. performance-based AI literacy

## Citation

Weidlich, J., Gašević, D., Drachsler, H., & Kirschner, P. A. (2025). [ChatGPT in Education: An Effect in Search of a Cause](https://doi.org/10.1111/jcal.70105). *Journal of Computer Assisted Learning, 41*(5), e70105.
