---
title: "LLMs Do Not Grade Essays Like Humans"
created: "2026-08-14T23:36:44-04:00"
updated: "2026-09-19T10:03:37-04:00"
type: article
technology: [generative-ai, human-in-the-loop-ai, llm]
assessment: [assessment-validity, automated-assessment, automated-essay-scoring, formative-assessment]
ethics: [privacy]
audience: [software developers]
research_method: [benchmark]
discipline: [writing education]
sources: ['raw/papers/caeai-100666-llm-essay-grading.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** Mathew, Taher, Kundu, and Barbosa (2026) evaluate how out-of-the-box LLMs (GPT and Llama families) score essays compared with human graders on ASAP and DREsS datasets. Agreement with human scores is **weak** and varies systematically with essay quality: LLMs assign *higher* scores to short/underdeveloped essays but *lower* scores to longer essays with minor surface errors. [[llm]] scores are internally consistent with LLM feedback, but the models rely on signals that differ from human raters. The authors conclude LLMs are not yet suitable as standalone **[[summative-assessment|summative]]** graders, but are useful as a **[[formative-assessment|formative]]** first-pass [[feedback]] tool — with important [[privacy]]/consent caveats.

## The Core Finding: Weak Agreement with Systematic Bias

Across several GPT (3.5/4/5) and Llama (2/3/4) models, agreement between [[automated-essay-scoring|LLM-generated scores]] and human grades was generally weak (inter-rater QWK ~0.17–0.28, vs ~0.72 between two human raters). Critically, disagreement is **not random** — it varies systematically with essay characteristics:

- **Short/underdeveloped essays** tend to receive *higher* LLM scores when prompt relevance and surface readability are present, even at the expense of depth of argumentation.
- **Longer, strong essays with minor surface errors** tend to receive *lower* LLM scores — LLMs penalize grammatical/spelling mistakes that human raters tolerate when content and argumentation are strong.
- **Central tendency bias:** LLMs cluster around the middle of the grading scale, avoiding extreme scores rather than using the full range.

## Internal Consistency of Scores and Feedback

[[automated-essay-scoring|LLM-generated scores]] are generally consistent with the feedback they produce: essays receiving more praise tend to receive higher scores, and essays receiving more criticism tend to receive lower scores. This suggests models follow coherent internal criteria when evaluating essays — even though those criteria differ from human raters' implicit standards. Different LLMs also rely on different subsets of rubric traits, partly explaining the variability in grading behavior across models.

## What this means for practice

- **Instructors.** Keep out-of-the-box LLMs out of high-stakes [[summative-assessment|summative grading]]: agreement with human scores was weak (QWK ~0.17–0.28) and the disagreement ran systematically, penalizing longer, stronger essays for minor surface errors.
- **Instructors.** Use the models as a [[formative-assessment|formative]] first pass on drafts — generating [[feedback]], flagging surface errors, and triaging essays for closer human reading — with the [[human-in-the-loop-ai|human as the final judge]].
- **Instructors.** Weight the generated feedback above the numeric score and apply simple calibration for essay length and surface-error counts, since scores cluster near the middle of the scale.
- **Administrators.** Require transparency and consent, and prefer locally run [[open-source]] models: sending student essays through commercial APIs raises FERPA/GDPR exposure, potential training use, and later [[ai-detection|AI-detection]] flags.
- **Designers.** Record the model and version behind any AI-assisted score, because grading behavior fluctuated across GPT and Llama versions and the study could not separate version effects from design choices.

## Limitations

- Evaluation used the ASAP and DREsS benchmark datasets with pre-existing human-assigned scores, and the LLM-generated feedback was never shown to students, so whether it is useful or actionable for revision remains untested.
- A single prompt template was used for all six GPT and Llama models, and prompt design is known to shift automated essay scoring performance.
- Feedback analysis depended on an ABSA model with a confidence threshold and majority voting, trait extraction used manually defined vocabularies, and the SHAP analysis relies on a proxy model of LLM scoring — each can miss or misclassify signals.
- Model scores were compared only against human grades on two datasets, so the systematic biases documented here may not generalize to other essay types or rubrics.

## Connected Concepts

- [[automated-essay-scoring]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[formative-assessment]]
- [[writing-education]]
- [[llm]]
- [[generative-ai]]
- [[privacy]]
- [[human-in-the-loop-ai]]

## Connected Articles

- [[choi-anchor-aes-prompting-2025]] — Anchor-based prompting for automated essay scoring
- [[icle-plus-plus-essay-scoring]] — iCLE++ essay scoring
- [[psyscore-essay-scoring-zpd-feedback]] — PsyScore: psychometrically-aware essay scoring and feedback
- [[self-referential-l2-writing-llm-assessment]] — Self-referential LLM assessment in L2 writing
- [[ai-scoring-language-bias-physics]] — AI scoring and language bias

## Citation

Mathew, J. G., Taher, S., Kundu, A., & Barbosa, D. (2026). [*LLMs Do Not Grade Essays Like Humans*](https://doi.org/10.1016/j.caeai.2026.100666). *Computers and Education: Artificial Intelligence*.
