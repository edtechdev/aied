---
title: "The Environmental Cost of LLMs in AIED: Reporting and Practices"
created: "2026-06-11T04:33:04-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
foundations: [ai-education]
technology: [generative-ai, llm, open-source]
ethics: [ethics, privacy]
research_method: [literature review]
sources: ['raw/papers/2606.11215.md']
confidence: high
audience: [researchers, software developers, institutions]
page_kind: [evaluation]
institutions: [educational-policy-ai]
---

> **Synthesis:** [[llm]] usage has become pervasive in the [[stanford-evidence-base-ai-k12-2026|AIED]] community, but the computational and environmental costs of deploying these models remain almost entirely unreported. This paper systematically reviews the [[ai-education|AIED]] 2025 conference proceedings and finds that while most projects use LLMs, nearly none report computational resources or discuss environmental impacts as an [[ethics|ethical]] concern.

## Key Findings

- **Widespread usage, invisible costs:** A review of all AIED 2025 conference papers reveals an "LLM adoption without disclosure" pattern — most projects use LLMs, but fewer than a handful report resource consumption or carbon footprint.
- **No standardized reporting:** There is no established procedure in the AIED community for measuring or disclosing the computational expense or environmental cost of LLM-based systems.
- **[[open-source]] methodology proposed:** The paper introduces a standardized, open-source method with two components:
  1. **Software tools** for measuring carbon footprint on both local and cloud hardware.
  2. **An easy-to-use formula** for estimating computational expense of frontier LLMs, even when exact parameter counts are unknown (common with proprietary models).
- **Ethical imperative:** The paper argues that failing to report environmental costs is itself an ethical concern — aligning with broader calls for [[hazra-safetutors-pedagogical-safety-2026|responsible AI]] and [[finkelstein-principled-ai-education-2025|transparency]] in educational technology.

## What this means for practice

- **Researchers.** Report carbon next to accuracy in every AIED paper: use CodeCarbon for systems you run on local or cloud hardware, and for proprietary models use the two-parameter estimate FLOPs = 2Nn, found accurate within 10% in prior work. Only 85 of the 396 AIED 2025 papers reported any computational cost.
- **Researchers.** Add a sustainability statement even when measurement is imperfect — only 57 of 396 papers mentioned environmental impact, and those that did used incompatible metrics, which leaves the field unable to aggregate or compare evidence. Also push for environmental disclosure in conference review checklists, as is already done for ethics statements.
- **Designers.** Measure beyond the compute subsystem. CodeCarbon reports only the hardware it can see, effectively a PUE-equivalent of 1.0, while the authors' TerraFlops wrapper assigns 1.60 to low-utilization local workloads (under 10% of capacity) and 1.08 at high utilization, so facility overhead stays invisible unless it is added deliberately.
- **Administrators.** Put footprint figures into procurement and reporting decisions: on the authors' assumptions (H100 at a global mean PUE of 1.5, US grid intensity of roughly 384 g CO₂ per kWh), inference costs about 6 × 10⁻⁵ grams of CO₂ per T-FLOP, and FLOPs scale linearly with tokens and model size.
- **Designers.** Prefer the smaller or fine-tuned model when accuracy is comparable. Because FLOPs are linear in active parameters, assuming roughly 100 billion for frontier models versus 30 billion for flash models puts a fast model at about a third of the per-token compute cost.

## Limitations

- The review covers a single venue and a single year: all 396 AIED 2025 proceedings papers, including full papers, short papers, workshops, and doctoral consortium submissions, so the disclosure rates are a snapshot rather than a general estimate.
- What the study measures is what authors chose to disclose — 85 papers reporting computational cost and 57 mentioning sustainability — not the actual emissions of the systems surveyed.
- The environmental figures are order-of-magnitude estimates: the simplified FLOPs formula is accurate within about 10%, and for proprietary models the active parameter count is assumed (about 100 billion for frontier models, 30 billion for flash models) rather than known, with any error scaling the reported FLOPs proportionally.
- The authors identify gaps in their own framework: PUE-equivalent baselines need refining to reflect consumer-grade versus cloud GPUs, and the framework does not account for the water consumption of cloud-based GPUs.

## Connected Concepts

- [[open-source]]
- [[ethics]]
- [[llm]]
- [[generative-ai]]
- [[ai-education]]

## Connected Articles

- [[stanford-evidence-base-ai-k12-2026]]
- [[hazra-safetutors-pedagogical-safety-2026]]
- [[finkelstein-principled-ai-education-2025]]
- [[ground-truth-reliability-aied]]
- [[educational-llm-alignment]]
- [[aaai2026-prompting-literacy-k12]]
- [[yu-academiclaw-student-challenges-ai-agents-2026]]
- [[adapt-adaptive-lesson-plan-transformer]]
- [[agency-gap-ai-writing]]
- [[agent-voice-accents-k12-group-learning]]
## Citation

Eimler, S. C., Erle, L., Flood, D., Haiman, A., Häckert, L., Helgert, A., McGinness, L., & Yapici, B. (2026). [The Environmental Cost of LLMs in AIED: Reporting and Practices](https://arxiv.org/abs/2606.11215).
