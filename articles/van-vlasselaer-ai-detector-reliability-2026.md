---
title: "Who wrote this? Evaluating the reliability of AI detection tools in higher education"
created: "2026-09-18T04:15:00-04:00"
updated: "2026-09-18T04:15:00-04:00"
type: article
foundations: [academic-integrity, reducing-ai-misuse, limitations-in-aied-research]
technology: [generative-ai, llm, machine-learning]
assessment: [ai-detection, assessment-validity, summative-assessment]
methods: [benchmark, quantitative-research]
stakeholders: [learners, teacher-ai-competency]
institutions: [educational-policy-ai, governance]
ethics: [trust, trust-calibration, equity-in-ai-education]
research_method: [benchmark, quantitative]
level: [higher ed]
audience: [instructors, administrators, researchers]
connected_faqs: [should-we-use-ai-detectors, reduce-ai-cheating]
page_kind: [evaluation]
sources: ['raw/papers/van-vlasselaer-ai-detector-reliability-2026.md']
confidence: high
---

> **Synthesis:** Van Vlasselaer, Van Droogenbroeck and Spruyt built a synthetic, ground-truth-controlled corpus of 160 academic papers — 40 fully human (pre-ChatGPT master's theses), 40 fully AI-generated with GPT-4o Deep Research, 40 hybrid papers whose literature reviews were replaced with GPT-4o text, and 40 "humanised" versions of those replacements — and ran four commercial detectors over it: GPTZero, Copyleaks, Turnitin and Pangram. Pangram was the only tool that performed convincingly, reaching 92.5% strict accuracy on hybrid and humanized papers and 65% strict accuracy on fully AI-generated ones, while Turnitin, GPTZero and Copyleaks failed almost completely on the fully AI-generated category (100%, 70% and 75% false negatives respectively). False positives were close to absent, which the authors read as genuine improvement over earlier detector research, but they conclude that a flag can only serve as an initial pointer within a broader, policy-anchored evaluation process — never as sole evidence in a misconduct case.

## Key Findings

1. **Only one of four detectors worked on fully AI-generated text.** Against ground truth of 100% AI content, Turnitin classified 100% of the 40 papers as false negatives (scores between 0 and 20%); GPTZero returned 70% false negatives and 30% partially false negatives (20–40%); Copyleaks returned 75% and 25% on the same two bands. Pangram was the only tool to place most papers near the true value, with a strict [[assessment-validity|accuracy]] of 65% and an inclusive accuracy of 97.5%, leaving a single case misclassified. The authors note the fully AI category was produced with GPT-4o Deep Research, the most advanced model available at the time, whereas the hybrid and humanized categories used plain GPT-4o — which is why the newer model was paradoxically the hardest to detect.
2. **Humanising defeated everything but Pangram.** On hybrid papers (ground truth a known range centered near 32.1–63.1% AI text) Pangram scored 92.5% strict and 95.0% inclusive, Turnitin 60.0% and 60.0%, Copyleaks 30.0% and 32.5%, and GPTZero 0.0% and 0.0%. On the humanized versions Pangram held at 92.5%/95.0%, Turnitin fell to 50.0%/52.5%, Copyleaks to 22.5%/25.0%, and GPTZero to 2.5% — a single paper correctly identified. The authors attribute Pangram's robustness to its synthetic mirroring and hard negative mining, which they suggest train it on stylistic features that survive a [[generative-ai|rewriting]] prompt.
3. **A continuous error analysis reproduced the same ranking.** A linear mixed-effects model predicting the error score (ground truth minus tool score) was significant overall (Wald χ²(15) = 7443.65, p < .001), with main effects for paper type (χ²(3) = 2392.70) and tool (χ²(3) = 2590.66) and a significant interaction (χ²(9) = 1582.33). For fully generated papers, estimated mean underestimation was −99.63 for Turnitin, −85.97 for Copyleaks, −85.70 for GPTZero and −14.32 for Pangram. On hybrid and humanized papers Pangram was essentially unbiased (−0.81 and −1.12, not significantly different from zero) while Turnitin (−12.93, −10.16), Copyleaks (−23.08, −21.42) and GPTZero (−24.41, −23.60) all underestimated significantly.
4. **False positives were rare, contrary to earlier fears.** All four tools classified 100% of the 40 fully [[higher-ed|human-written]] papers as true negatives in the categorical analysis, and the continuous analysis put every tool close to zero error on that category (Copyleaks 0.00, GPTZero +1.95, Pangram 0.00, Turnitin −0.00). The authors contrast this with Liang et al. (2023), who found substantial false-positive bias against non-native writers across seven early-generation detectors, and treat the finding as a reassuring [[trust-calibration|baseline]] for [[equity-in-ai-education|fairness]] — while cautioning that conservative tool thresholds may simply be trading false positives for false negatives.
5. **In a real faculty, Pangram flagged 45.5% of master's theses.** Applied to 1,163 theses submitted in 2024–2025 in one Social Sciences and Economics faculty, Pangram flagged 529 (45.5%) as containing AI-generated content. Among flagged theses the mean estimated AI usage was 34.0% (median 30.0%, SD 19.9%), ranging from 7% to 100%, with an interquartile range of 32.0% (Q1 17.0%, Q3 49.0%). The distribution was 35.2% at or below 20% AI, 41.6% between 20% and 50%, 23.1% above 50% and only 1.9% above 80%, which the authors read as evidence that [[ai-misuse-learning-harm|AI use]] is mostly partial and blended rather than wholesale.
6. **Detection should be an initial flag, not a verdict.** Because no ground truth exists for the 1,163 submitted theses, the paper is explicit that 45.5% is not a prevalence rate. Its recommendation is procedural: a flagged result should trigger substantive review of the paper, and institutions need explicit policy stating when GenAI use breaches [[academic-integrity|integrity]], because a high AI score on a paper with genuine references and defensible reasoning is not obviously misconduct. The authors go further and argue that academic integrity may need redefining from the ground up rather than patching existing frameworks.

## How the corpus was built

The study's design answers the criticism that detector evaluations lack known ground truth. Forty human-written papers (HUM01–HUM40) were drawn from an institutional archive of anonymized master's theses submitted between 2017 and 2019, before ChatGPT existed, written by non-native English-speaking graduate students and meeting a minimum academic standard, at 4,000–7,050 words. The 40 fully AI-generated papers (AI01–AI40) were produced in May 2025 with GPT-4o Deep Research using one prompt template varying only by discipline and research question; word counts ran 4,000–12,000 (M = 6,785, SD = 2,830) because the model did not reliably follow the requested 5,000-word length, and nothing was manually edited. The 40 hybrid papers replaced the literature review and conclusion of each human paper with GPT-4o text generated from the original abstract in APA 7 style. The 40 humanized papers took those same AI sections and rewrote them with a prompt instructing the model to vary sentence structure, add hedging such as "This suggests that…", and reduce formulaic phrasing while preserving meaning, references and terminology — an attempt to raise perplexity and burstiness, the two statistical properties detector documentation leans on most.

The design, dataset structure and planned analyses were preregistered on AsPredicted (#228383), with two stated deviations: the humanization prompt was not specified in advance, and per-category accuracy was reported beyond the preregistered level of detail. A third and final component, the scan of 1,163 submitted theses, was added later after Pangram's performance surprised the authors. The faculty context the authors give is roughly 6,500 enrolled students in 2024–2025, over 1,100 first-time students, and 8% year-on-year enrollment growth; the work began because suspected GenAI-assisted theses were accumulating and the faculty already used Turnitin for conventional plagiarism.

## Detector mechanics and why they diverge

The paper describes each tool's operating logic because that is where the performance gap comes from. Turnitin segments documents into overlapping blocks, scores them 0 to 1 on perplexity, burstiness, repetition and generic phrasing, and is trained on text from GPT-4, GPT-4o, Gemini and other models, but supports only English, Spanish and Japanese. Scores between 0% and 20% are reported as an asterisk rather than a number, a design choice that pushed 19 fully AI-generated papers, 7 hybrid, 6 humanized and 3 fully human papers into missing values for the continuous analysis. GPTZero combines linguistic and statistical signals such as perplexity and burstiness with sentence-level classification and web overlap search. Copyleaks combines linguistic and learning-based methods over frequency ratios, syllable dispersion and hyphen usage, and claims over 30 languages. Pangram was trained on roughly 28 million human-authored documents and uses a "syntactic mirror" technique — generating an AI twin of each human training text matched on topic, tone, style and length — plus hard negative mining on its own misclassifications, which the authors argue is why it looks past the surface metrics the other tools rely on.

## Implications for institutions

The recommendations are deliberately modest about what detection can carry. The authors position tools such as Pangram as one component inside a broader decision-making process, require institutions to establish clear policies on what GenAI use breaches integrity, and call for regular re-[[benchmark|benchmarking]] because any evaluation is a snapshot: while the manuscript was being finalised, OpenAI released GPT-5, and the limitations section names GPT-5.2, Claude Opus 4.6 and Gemini Pro 3 as models that future work would need to test. They also argue for complementing [[ai-detection|detection]] with assessment redesign, more process-oriented evaluation and [[llm|AI literacy]] for both students and staff — the same direction other work in this knowledge base takes. One fairness argument is stated plainly: students who do genuine work should be able to trust that institutions have mechanisms to verify integrity, which is why the authors consider it important that only one of the four tools tested produced satisfactory results.

## Limitations

Beyond the 160-paper scale, the single [[llm|generative model]] family for the AI categories, and the snapshot problem, the paper flags three constraints of its own. The design could not replicate the software-aided and manual refinements students actually apply, and only one humanization strategy — a single prompt — was tested, so real hybrid evasion may be harder to detect than measured, meaning the reported accuracies are optimistic for the defenders rather than conservative. The 1,163-thesis analysis had no ground truth and is exploratory: it describes the distribution of Pangram's flagging scores in an authentic setting and cannot be read as confirmed prevalence. And the human corpus, while deliberately pre-ChatGPT and therefore clean, comes from a single faculty, so disciplinary variation is minimal and no cross-discipline comparison was possible.

## Connected Concepts

- [[ai-detection]]
- [[assessment-validity]]
- [[academic-integrity]]
- [[trust-calibration]]
- [[equity-in-ai-education]]
- [[reducing-ai-misuse]]
- [[ai-misuse-learning-harm]]
- [[educational-measurement]]
- [[summative-assessment]]
- [[educational-policy-ai]]
- [[governance]]
- [[limitations-in-aied-research]]
- [[machine-learning]]
- [[higher-ed]]

## Connected Articles

- [[bassett-ai-detectors-education-2026]] — Heads we win, tails you lose: AI detectors in education
- [[hadra-ai-detector-accuracy-efl-2026]] — Detector accuracy in an English-as-a-foreign-language context
- [[karr-ai-detection-humanization-2026]] — Humanization strategies and detector evasion
- [[roe-ai-humanizers-legitimacy-assessment-2026]] — AI humanizers and the performance of legitimacy
- [[teichmann-detecting-undetectable-misconduct-2026]] — Detecting what may be undetectable in misconduct cases
- [[kirsanov-beyond-detection-ai-online-assessments-2026]] — How students use and hide AI in online assessments
- [[llm-detecting-llm-generated-content-education]] — Machine detection of LLM-generated educational text
- [[ivory-psychology-assessment-integrity-2026]] — Program-level pass rates versus detection framing

## Citation

Van Vlasselaer, M., Van Droogenbroeck, F., & Spruyt, B. (2026). [*Who wrote this? Evaluating the reliability of AI detection tools in higher education*](https://doi.org/10.1007/s40979-026-00226-w). *International Journal for Educational Integrity*, 22(16).
