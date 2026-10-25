---
title: "Augmentation or Erosion? Regulating Cognitive Offloading in Generative AI-Supported STEM Learning"
created: "2026-10-25T10:05:00-04:00"
updated: "2026-10-25T10:05:00-04:00"
type: article
published: "2026"
page_kind: [framework]
research_method: [theoretical analysis]
discipline: [stem education, learning sciences]
level: [higher ed]
audience: [researchers, instructors, instructional designers]
foundations: [cognitive-offloading, theories-and-frameworks, theory-development-aied, ai-literacy]
pedagogy: [cognitive-psychology, metacognition, self-regulated-learning, distributed-cognition]
technology: [generative-ai, llm]
assessment: []
methods: [research-methods-aied]
ethics: []
confidence: high
sources: ['raw/papers/nakamura-augmentation-erosion-cognitive-offloading-stem-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Nakamura (2026) confronts the heterogeneity problem head on: meta-analyses report positive average effects of [[generative-ai]] on learning alongside prediction intervals spanning harm to benefit, and experiments find gains in some configurations and penalties in others. The paper's move is to relocate the causal question from the tool to the **partition of cognitive labor** between learner and machine. The proposed augmentation–erosion framework, built from [[cognitive-offloading]], distributed cognition, cognitive load theory and [[self-regulated-learning|self-regulated learning]], holds that offloading augments learning when it discharges operations *peripheral* to the current goal and risks erosion — of acquisition or of maintenance — when it bypasses processing *constitutive* of that goal, unless the learner substantively processes the output or later reconstructs it. It supplies criteria for placing an operation on a graded peripheral–constitutive continuum, names the comparison condition against which augmentation and erosion are defined, and states seven conditioned, testable propositions. It closes by proposing offloading regulation as a learning-oriented dimension of [[ai-literacy]].

## Key Findings

1. **The effect belongs to the division of labor, not to the tool.** Treating GenAI's educational effect as a property of the software cannot explain why the same tool yields gains in one configuration and losses in another; the framework makes the learner–machine partition the object of analysis.
2. **Presence or absence of offloading predicts nothing.** The framework's central distinction is between offloading that discharges operations peripheral to the current learning goal, which augments, and offloading that bypasses processing constitutive of that goal, which risks erosion.
3. **Erosion comes in two forms and they are separable.** The framework distinguishes erosion of **acquisition** from erosion of **maintenance**, so a learner might acquire competence via GenAI and later fail to retain it, or vice versa, and the two failures call for different remedies.
4. **Processing the output can rescue an otherwise constitutive offload.** Bypassing constitutive processing is not automatically erosive if the learner substantively processes the output or later reconstructs it, which makes the learner's engagement after generation part of the causal story rather than an afterthought.
5. **The continuum is graded, not binary.** Operations are placed on a peripheral–constitutive continuum rather than sorted into two bins, because the same act (looking up a formula, checking a derivation, drafting a paragraph) can be peripheral or constitutive depending on what is being learned.
6. **Seven conditioned propositions replace one directional claim.** The framework states seven testable propositions, each illustrated with a common example and paired with both supporting and challenging patterns, so the theory predicts where the effect should appear rather than asserting a sign.
7. **Offloading regulation is proposed as a dimension of AI literacy.** Knowing when to offload and when to process is framed as a learnable, domain-general and discipline-specific competence, extending [[ai-literacy]] beyond tool operation toward the management of one's own cognitive distribution.

## Why a partition-based framework is the right unit

The pattern the paper is trying to explain is familiar from the [[cognitive-offloading]] literature: a tool that helps on one task harms on another, and the difference is rarely the tool. In STEM specifically, the same [[generative-ai|GenAI]] assistant can be peripheral when a student uses it to convert units in a problem whose point is the physical reasoning, and constitutive when the student uses it to produce the reasoning itself.

Framing this as a continuum rather than a category does real work. It means a single activity can be augmented for one learner and erosive for another depending on prior knowledge — the boundary is relative to the learning goal, not a fixed property of the button pressed. It also means the framework can absorb [[distributed-cognition|distributed cognition]] without contradiction: cognition genuinely is spread across people and artifacts, so the question is never whether distribution occurs but whether the distributed system still includes the learner's own processing.

Naming the comparison condition is the paper's least glamorous and most load-bearing contribution. "Augmentation relative to what" has no stable answer in this literature — a no-tool baseline, a human-tutor baseline, and a different-tool baseline give different verdicts on the same data — and without it the augmentation/erosion vocabulary would be unfalsifiable.

## Erosion of acquisition versus erosion of maintenance

The two-form distinction resolves an apparent contradiction in the empirical record. Studies that measure immediate post-test performance can show gains while delayed tests show losses, and studies of skill retention can show the reverse pattern. If erosion is treated as a single outcome, these findings look like noise. Separated, they are different predictions about the same intervention.

For practice this matters because the remedy differs. Acquisition erosion is addressed by redesigning the task so the constitutive processing happens during learning, while maintenance erosion is addressed by spacing, retrieval, and post-intervention reconstruction. A framework that names only one failure mode will recommend the wrong fix roughly half the time.

## Where the framework is and is not yet evidence

This is a a theoretical synthesis, not an empirical test. The seven propositions are conditioned and stated so they can be tested, but the paper does not report new data, and the supporting and challenging patterns it pairs with each proposition are drawn from existing studies rather than generated to test the framework.

That is the appropriate status for a framework paper, and it sets the evidential bar for anyone who cites it: the augmentation–erosion distinction should be treated as a well-specified hypothesis generator, not as a finding about how much GenAI helps. Its testable predictions concern the *difference* between configurations, which means a study that reports only an average effect cannot confirm or refute it.

## What this means for practice

- **Instructors.** Decide what processing is constitutive of the learning goal before deciding whether a tool may be used, because the same assistant is peripheral to one task and constitutive to the next, and the policy has to be written per task rather than per course.
- **Instructional designers.** Design the post-generation step explicitly — having students verify, explain, or reconstruct the output is what the framework says converts a potentially erosive offload into an augmenting one, so it is not optional enrichment.
- **[[teacher-role]]** Teach offloading regulation as a skill rather than issuing a permission list, since the framework's literacy claim is that students need to recognize when they are bypassing the processing they are supposed to be doing.
- **Researchers.** Report the comparison condition and the peripheral/constitutive placement of the operations involved, because the framework's predictions are about differences between configurations and are unfalsifiable against an average effect alone.
- **Assessment designers.** Measure retention separately from acquisition, since the framework treats erosion of maintenance as a distinct failure and a single post-test will miss it.

## Limitations

- The paper reports no new empirical data; the seven propositions are stated to be testable but are not tested here, and the supporting and challenging patterns are assembled from existing literature rather than generated for the purpose.
- Judging whether an operation is peripheral or constitutive is a task-level judgment that the framework's criteria guide but do not mechanize, so two analysts working from the same description could place the same operation differently.
- The framework is developed for STEM learning, and the paper does not establish that its peripheral–constitutive placement generalizes to domains where the constitutive processing is less easily named, such as writing or design.
- Because the framework is relative to a declared learning goal, its predictions depend on the fidelity of the goal statement; a vague objective makes the augmentation/erosion verdict indeterminate rather than testable.
- The synthesis is authored by a single researcher, and the integration across [[cognitive-offloading]], distributed cognition, cognitive load theory and [[self-regulated-learning]] involves choices of emphasis that a multi-author review might have balanced differently.

## Citation

Nakamura, D. (2026). [Augmentation or erosion? Regulating cognitive offloading in generative AI-supported STEM learning](https://doi.org/10.1007/s10648-026-10224-6). *Educational Psychology Review*, *38*, 124.
