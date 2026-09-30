---
title: "The pitfalls of AI detection in academic writing: bias, false positives, and the need for inclusive assessment"
created: "2026-09-30T06:50:00-04:00"
updated: "2026-09-30T06:50:00-04:00"
type: article
sources: ['raw/papers/10.1007_s43681-026-01376-w.md']
confidence: high
published: "2026"
page_kind: [synthesis]
research_method: [literature review]
discipline: [writing education]
level: [higher ed]
audience: [instructors, assessment designers, administrators, researchers, policymakers]
foundations: [academic-integrity]
technology: [generative-ai, llm]
assessment: [ai-detection, assessment-validity, authentic-assessment, process-oriented-assessment]
ethics: [bias-mitigation, differential-effects-across-learner-groups, inclusive-learning]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Angelier argues that [[ai-detection|AI-text detectors]] are the wrong instrument for policing authorship, and supports the argument with three kinds of evidence: a critical synthesis of detector evaluations, an information-theoretic account of what detectors can observe, and an original audit of one human-authored manuscript submitted to five commercial detectors on the same day. That manuscript received materially different classifications — Winston AI reported 0% human, Copyleaks and Originality.ai returned roughly 80–81% AI, GPTZero returned 42% AI while labeling the text "Human Generated", and a fifth tool reported 34% AI — so three systems leaned AI and two leaned human on identical input. A paired exploratory comparison found that extensive machine rewriting by a commercial "humanizer" materially degraded the manuscript while producing only a small change in its reported score. Against this, the paper sets an account of what a detector can actually see: statistical properties of the submitted text, such as low perplexity, reduced local predictability variation and formulaic density — properties that additional-language writing and highly conventional academic prose share. The proposed alternative is a four-stage [[process-oriented-assessment|process-oriented assessment]] model built from detector-independent artifacts.

## Key Findings
1. A single human-authored manuscript submitted to five commercial detectors on the same day received classifications spanning from "0% human" (Winston AI) to "Human Generated" (GPTZero's categorical label, alongside its 42% AI figure), with Copyleaks at 80.4% AI, Originality.ai at "81% Likely AI" and a fifth tool at 34% AI / 66% human; three outputs leaned AI and two leaned human on the same text.
2. Because the five systems disagree with no validated basis for treating a majority vote as evidence of provenance, an assessor receiving any one output has no independent method of determining which classification is reliable.
3. The same author's work was classified 78–88% human by one detector version in March and 0% human by the same product's later version in August, but because both the documents and the model version changed, the paper treats this as motivation for a controlled longitudinal design rather than as evidence of model drift.
4. Detector pipelines can fail silently: GPTZero displayed a severely corrupted extraction of the submitted PDF, with parts of the visible text rendered meaningless, yet returned a classification only five percentage points away from its clean-text result on the same document.
5. The paper distinguishes detector output from similarity checking on evidentiary grounds: a similarity match identifies two concrete passages a human can inspect, whereas a detector score is a classification derived from properties of the submitted text with no independently inspectable provenance artifact.
6. Predictability-related properties — low perplexity, reduced variation in local predictability, formulaic density — provide a mechanism through which additional-language writing and highly conventional academic prose become vulnerable to machine-authorship classification; documented studies found GPT detectors misclassifying a large share of authentic TOEFL essays by non-native English speakers, and GPTZero-assigned AI probabilities rising between 2020 and 2024 for research letters by authors affiliated with institutions in China, Korea and Japan.
7. Several higher-education systems have already restricted detector use — Vanderbilt disabled Turnitin's AI detector in August 2023 (documenting the arithmetic of a 1% false-positive rate across roughly 75,000 papers), Curtin University announced a similar disabling in 2025, the University of Waterloo discontinued Turnitin's AI-detection function in September 2025 after an internal audit in which human-written work had been classified as 100% AI-generated, the University of Cape Town disabled Turnitin's AI score from October 2025, the University of the Free State followed in July 2026, and the University of the Witwatersrand reported never having adopted such tools — while a New York court annulled a misconduct finding that rested on a detector score.

## What a detector can and cannot observe

The paper's conceptual core is a claim about the object of measurement. A detector does not observe provenance; it observes properties of the text, and it infers authorship from them. That distinction explains the false-positive pattern rather than treating it as an implementation defect: the textual features that raise a machine-authorship probability — high predictability, low variance in local predictability, formulaic phrasing — are also features of writing produced under constrained conditions, including writing in an additional language and writing in genres with tightly conventional phrasing. The result is a classification that correlates with who the writer is and what genre they are writing in, not with how the text was produced.

The audit adds the practical half. Cross-tool contradiction means the number an assessor sees depends on which product they happened to use, and cross-version variation means it also depends on when they used it — an archived screenshot can establish what an interface reported but cannot recreate the proprietary model state that produced it. Pipeline fragility compounds this: the corrupted-extraction result shows a system returning a confident-looking classification on input it demonstrably could not read. The paper also notes the semantic instability of the display layer, where a 42% AI figure appears next to the categorical label "Human Generated", and observes that at least one vendor's own public guidance states its results should not be used to punish students.

## What replaces detection

The proposed model is deliberately unfashionable: four stages producing detector-independent artifacts that accumulate as evidence of authorship and understanding, including declared starting points, versioned drafting, process artifacts, and targeted oral verification with accommodations so that the oral component tests understanding rather than fluency under pressure. No stage requires a detection score. The paper is careful about its own limits — the model is not automatically accessible to every learner and accessibility must remain an explicit design requirement — and about the narrower remedies available in scholarly publishing, where journals cannot require drafting histories or [[oral-assessment|vivas]] and are instead directed to human adjudication before rejection or misconduct escalation, disclosure of the basis of automated flags, an opportunity for authors to respond, normalization of permitted AI-assisted editing and translation, and substantive integrity review through correspondence, data requests, and image or statistical checks.

The paper also engages the counter-argument fairly: if AI polishing flattens linguistic diversity in academic English, then permitting it has its own cost, and the paper accepts the force of that concern while arguing that detection is not a remedy for it — a detector cannot distinguish flattened prose from non-native prose, which is the error the false-positive evidence documents.

## What this means for practice

- **Do not treat a detector score as evidence of authorship.** The audit shows five tools reaching incompatible conclusions on one known human-authored text; if a score is used at all, it cannot be the basis of a consequential finding, and the paper's documented court case is what that failure looks like in practice.
- **Redesign the evidence instead of the threshold.** The alternative is a process trail — declared starting points, versioned drafts, drafts-in-progress, and a short oral check — which is exactly the [[process-oriented-assessment|process-oriented]] direction the knowledge base already documents and which requires no detector.
- **Watch the [[equity-in-ai-education|equity]] channel specifically.** The mechanism the paper identifies predicts elevated false-positive rates for additional-language writers and conventional academic prose, so any detector use in a program with multilingual writers is a [[differential-effects-across-learner-groups|differential-effects]] risk before it is a technical one.
- **Keep the accommodation question explicit.** The annulled misconduct case involved a student in an [[neurodiversity|autism]]-spectrum support program; where a language technology functions as an effective accommodation, a blanket prohibition or a detector-driven process that deters legitimate use raises equality considerations that need an equally effective alternative.

## Limitations

- The multi-tool audit is documented but exploratory and single-manuscript: one human-authored text, five tools, one date, so it establishes inconsistency rather than an error rate, and the archived artifacts are what make it verifiable rather than a [[benchmark]].
- The humanizer comparison is a paired exploratory test on one manuscript; the paper reports that it also produced residual meaning changes in a subset of sentences, so it should not be read as a clean measurement of the humanizer's effect on detection scores.
- The cross-version observation is confounded by document and model-version changes together, which the paper acknowledges rather than resolving.
- The process-oriented model is a proposal; it is not evaluated here against detection on outcomes such as misconduct rates, [[student-experience|student experience]], or administrative cost.

## Citation

Angelier, V. (2026). [The pitfalls of AI detection in academic writing: bias, false positives, and the need for inclusive assessment](https://doi.org/10.1007/s43681-026-01376-w). *AI and Ethics, 6*, 532.