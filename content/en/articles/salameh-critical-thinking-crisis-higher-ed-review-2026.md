---
title: "The crisis of critical thinking in higher education: rethinking what universities should teach in an age of information abundance and generative AI"
created: "2026-10-29T10:30:00-04:00"
updated: "2026-10-29T10:30:00-04:00"
type: article
authors: ["Salameh, W."]
published: "2026-10-27"
venue: "Frontiers in Education"
source_url: https://doi.org/10.3389/feduc.2026.1981900
foundations: [critical-thinking, ai-literacy, cognitive-offloading, framing-ai-use-for-students, academic-integrity]
pedagogy: [self-regulated-learning, scaffolding, metacognition, desirable-difficulties]
technology: [generative-ai, llm]
assessment: [assessment, process-oriented-assessment, ai-detection, evaluative-judgment]
methods: [research-methods-aied, qualitative-research]
ethics: [equity-in-ai-education]
institutions: [educational-policy-ai]
research_method: [literature review]
level: [higher ed]
audience: [instructors, administrators, curriculum designers, researchers]
page_kind: [framework]
sources: ['raw/papers/salameh-critical-thinking-crisis-higher-ed-review-2026.md']
confidence: medium
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-29"
    agent: hermes-agent
---

> **Synthesis:** Salameh (2026) synthesizes 45 verified sources into a critical narrative review of how information abundance, algorithmic curation and [[generative-ai|generative AI]] bear on [[critical-thinking]] in higher education, and concludes the evidence is most consistent with a structural rather than an individual explanation. Five themes emerge: the core cognitive task shifts from retrieval to evaluation; unguided AI use is associated with reduced cognitive engagement and, in several experiments, with gains that vanish when support is removed; fluent output gets mistaken for validated knowledge while [[ai-detection]] stays unreliable and biased; lateral reading, guided use and process-visible assessment have uneven support; and workload, [[equity-in-ai-education|equity]] and [[educational-policy-ai|policy]] constrain adoption. From these the review derives the Fade–Visibility Matrix, crossing [[scaffolding|AI support that persists or fades]] with product-only or [[process-oriented-assessment|process-visible assessment]] into four diagnostic states. Its most useful contribution to practice is that framing: the danger is not the tool but the default combination of support that never fades and assessment that sees only the finished product.

## Key Findings

1. **The corpus is 45 purposively assembled sources, not a systematic search.** Empirical GenAI studies run from November 2022 to 2026, foundational theory from 1976 onward, and five themes organize the synthesis.
2. **Removing the tutor erased the gain.** In a field experiment with nearly 1,000 high-school students, unrestricted GPT-4 access improved practice performance, but students performed 17% worse than controls once access was removed; a guardrailed version largely mitigated it.
3. **Detectors fail in both directions.** Commercial GPT detectors misclassified over 61% of TOEFL essays by non-native English writers as AI-generated, and an evaluation of 14 tools found them neither accurate nor reliable.
4. **Frequent use tracks lower critical-thinking scores, through offloading.** In a survey of 666 adults, the negative association was partly mediated by [[cognitive-offloading|cognitive offloading]], with younger respondents more dependent — a correlational design that cannot fix direction.
5. **Critical thinking itself is teachable.** A meta-analysis of instructional interventions found explicit instruction improves both skills and dispositions, with dialogue, authentic problems and mentoring especially effective.
6. **Four diagnostic states, one of them the default.** Persistent support assessed by product only is what the review calls Silent Dependency: offloading that is maximal and undetectable, and the condition most institutional practice produces.
7. **The author discarded an earlier draft's bibliography.** A prior version was found on review to contain substantially fabricated citations, invented titles and journals attached to real surnames, and the reference list was rebuilt from independently verified sources.

## What the review did, and what it deliberately did not

The design is a critical narrative review with thematic synthesis, chosen over a systematic or [[meta-analysis-systematic-review|scoping review]] because the purpose is conceptual integration across [[cognitive-psychology|cognitive psychology]], information literacy, educational technology and assessment rather than a pooled estimate. The evidence is methodologically heterogeneous — EEG experiments, randomized trials, surveys, phenomenological studies, tool evaluations and conceptual analyses — which precludes meta-analysis, and every candidate record was checked against the publisher's platform. Sources came from citation chaining from the foundational cognitive-science literature plus targeted searches combining GenAI and [[llm|large language model]] terms with critical thinking, offloading, engagement, metacognition and cognitive load, and with [[higher-ed|higher education]] and student terms. The synthesis is anchored in an integrative framework that combines cognitive load and dual-process theory, offloading, scaffolding, [[self-regulated-learning]] and epistemic cognition. One widely cited meta-analysis reporting positive effects of ChatGPT on higher-order thinking was identified and excluded because it was retracted in 2026.

## Why offloading is the mechanism and not the villain

The review separates offloading that removes extraneous load from offloading that removes the work the learning depends on, and that distinction carries the argument. Experimental work shows a trade-off: offloading can improve immediate performance while reducing memory for the offloaded information, which is exactly the pattern the school experiment measured at scale. Two mechanisms are proposed for the harm. The first is attenuation of productive struggle, since deep learning depends on resolving ambiguity and organizing disordered material, and handing that structuring to a tool removes the friction [[desirable-difficulties]] theory says the learning rides on. The second is erosion of epistemic [[self-efficacy]]: learners in one [[qualitative-research|qualitative]] study described rising [[anxiety-and-stress|anxiety]] when asked to reason without AI after becoming accustomed to it. Neither mechanism requires a defective model, which is why [[guardrails]] on output quality do not address it — the design question is when support withdraws, not how good the output is.

## The matrix, and what each state asks of an institution

The Fade–Visibility Matrix crosses two design decisions institutions actually control: whether AI support persists or fades across a task sequence, and whether [[assessment]] sees the product alone or the process. Four states follow, and Silent Dependency is the bottom-left corner, support that never fades assessed only by its product. Its opposite pairs fading support with process-visible assessment, where the reasoning that offloading would otherwise hide becomes legible to an instructor. The review is explicit that the matrix is unvalidated and that its fade component is an extension of human [[scaffolding]] research rather than something the GenAI literature has tested, and it sets out propositions for testing it. The practical force of the framework is diagnostic rather than predictive: it tells an instructor which of four conditions a course is in before asking whether the AI use is permitted, and it explains why the same tool can be harmless in one [[learning-design|course design]] and corrosive in another.

## What this means for practice

- **Instructors.** Design the fade: give AI support early, withdraw it before the assessed task, and check what students can do without it rather than what they produced with it.
- **Instructors.** Make evaluation and verification an assessed task rather than an assumed skill, since the review's firmest findings are that models hallucinate and that students readily mistake fluency for validated knowledge.
- **Curriculum designers.** Put lateral reading, source verification and [[metacognition|metacognitive regulation]] into the curriculum explicitly; the evidence that critical-thinking instruction works is stronger than the evidence that any AI tool improves it.
- **Administrators.** Do not build policy on detection. The evidence combines real harm to wrongly accused students, disproportionately non-native English writers, with unreliable protection against the behavior it targets.
- **Researchers.** Test the matrix rather than the tool — measure critical thinking when AI is part of the task, and report whether support faded, because that design variable is what the current literature leaves confounded.

## Limitations

- The corpus is 45 purposively identified sources with no structured Scopus or Web of Science search and no PRISMA-style screening, so the search cannot be reproduced and relevant studies may be missing.
- Coding was done by a single reviewer, inter-coder agreement could not be assessed, and no formal risk-of-bias instrument was applied.
- One central empirical source (Kosmyna et al., 2025) has drawn published methodological criticism over sample size and analytic transparency that the review does not independently adjudicate, and it reports those findings as suggestive.
- The strongest experimental evidence on delayed effects comes from a secondary-school sample, not from higher education, which is the review's stated setting.
- Only English-language sources were included, and most come from Western higher-education systems, so generalization to other systems is limited.
- The Fade–Visibility Matrix and the application of scaffolding-fade theory to AI are the review's own interpretive extensions, and empirical work testing whether AI support can fade as human scaffolding does is largely absent.

## Citation

Salameh, W. (2026). [*The crisis of critical thinking in higher education: rethinking what universities should teach in an age of information abundance and generative AI — a critical narrative review of international evidence*](https://doi.org/10.3389/feduc.2026.1981900). Frontiers in Education, 11, 1981900.
