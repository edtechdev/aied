---
title: "Heads We Win, Tails You Lose: AI Detectors in Education"
created: "2026-08-22T19:50:00-04:00"
updated: "2026-09-19T09:24:40-04:00"
type: article
foundations: [academic-integrity]
technology: [generative-ai]
assessment: [ai-detection, assessment-validity, authentic-assessment]
ethics: [trust]
connected_faqs: [ai-guidance-children-under-13, course-ai-policy, verify-ai-output]
research_method: [theoretical analysis]
discipline: [writing education]
level: [higher ed]
sources: ['raw/papers/bassett-ai-detectors-education-2026.md']
confidence: high
audience: [policymakers, administrators]
institutions: [educational-policy-ai, governance]
---

> **Synthesis:** Bassett et al. (2026) argue that generative AI detection should not be used in education, on three grounds: [[research-methods-aied|methodological]] imperfection (unverifiable probabilistic estimates), violation of [[academic-integrity|procedural fairness]], and unverifiable outputs. Unlike [[ai-detection]], AI detection cannot be validated in real-world conditions where text origin is unknown; categorizing text as human- or AI-generated imposes a false dichotomy that ignores work created *with*, not *by*, AI. They conclude that AI detection "does not safeguard academic integrity; it undermines it" — and call for a shift from detection and enforcement toward [[assessment|assessment design]] that recognizes AI's role in learning.

## Key Findings

1. **AI detection relies on unverifiable probabilistic estimates.** Detectors output a probability that text was AI-generated based on linguistic markers (perplexity, burstiness), but unlike spam filters or medical diagnostics, their results cannot be independently verified — real-world text origin is unknown, so validation relies on circular reasoning.
2. **The false dichotomy.** Categorizing text as human- or AI-generated ignores the reality of contemporary writing, where student work is frequently created *with*, not *by*, AI — a hybrid process that makes the binary approach meaningless.
3. **Detection scores fail the evidentiary standard.** Academic integrity investigations require evidence meeting the balance-of-probabilities standard; AI detector scores, linguistic markers, style comparisons, and related indicators do not meet it.
4. **AI detection undermines rather than safeguards integrity.** Reliance on detectors and surveillance fosters a climate of suspicion, eroding student [[trust]] and the integrity of assessment itself.
5. **Assessment boundaries are undefined.** Policies restricting AI use "in assessment" fail to specify when an assessment begins, creating ambiguity that forces inconsistent enforcement and student [[self-regulated-learning|self-regulation]].

## Unverifiable probabilistic estimates

Generative AI detectors analyze a text's statistical and linguistic features and output a probability-based estimate of whether it was AI-generated. Unlike other probabilistic detection methods (spam filters, medical diagnostics) that achieve practical reliability, AI detector results cannot be independently verified: in real-world conditions, no external evidence can conclusively confirm whether a flagged text was AI-generated. Without known ground truth, validation relies on subjective interpretation or circular reasoning. Signal-detection metrics (FPR, FNR, TPR, TNR) only apply under controlled testing; real-world applications lack ground truth. Furthermore, detectors are trained and tested on pre-generative-AI human writing (e.g., Turnitin tested on 700,000 pre-2019 papers), assuming such text reflects contemporary student writing influenced by AI — an unverified assumption, especially given performance varies with underlying models, prompts, and platforms.

## The false dichotomy and the boundaries of assessment

The paper argues that the binary human-or-AI classification is conceptually flawed: students' work is frequently created *with*, not *by*, AI, via a hybrid process in which AI assistance is incorporated in various ways and at various stages. It also examines the undefined boundaries of assessment — policies using phrases like "in assessment" fail to specify when an assessment begins, so AI-assisted research, planning, or editing may or may not be a violation depending on interpretation. AI use exists along a continuum (citing Molenaar's hybrid human–AI intelligence model), making enforcement dependent on subjective judgment rather than principled criteria.

## Procedural fairness and security

AI detection raises security concerns around data storage and retention (including overseas servers with varying [[privacy]] standards), data breaches, and potential commercial exploitation of student work. It also violates procedural [[bias-mitigation|fairness]]: [[academic-integrity|academic integrity]] investigations require evidence meeting the balance-of-probabilities standard, which AI detector scores — alone or in combination with linguistic markers, style comparisons, [[llm]] claims, or student silence — do not satisfy. Students under investigation must be afforded the right to silence; a refusal to respond does not tip the scales against them, and only requesting an oral response to verify [[learning-gains|learning outcomes]] is a legitimate (grading) question.

## What this means for practice

- **Administrators.** Retire detector scores as evidence in academic integrity cases: the paper argues they cannot meet the balance-of-probabilities standard on their own or in combination with linguistic markers, style comparisons, an [[llm|LLM's]] claim that text is AI-generated, or a student's silence.
- **Administrators.** Uphold the right to silence: a student's refusal to respond must not tip the scales against them, and oral questioning should be reserved for verifying [[learning-gains|learning outcomes]] as a grading matter rather than used to press a student about integrity.
- **Policymakers.** Replace "in assessment" wording with policies that define when an assessment begins, since the paper shows the ambiguity forces inconsistent enforcement and shifts the burden onto student [[self-regulated-learning|self-regulation]].
- **Administrators.** Move the budget from detection and surveillance toward [[assessment|assessment design]], [[authentic-assessment|authentic assessment]], and [[ai-literacy]] support, treating AI-assisted [[writing-education|writing]] as a legitimate hybrid practice and accepting that unsupervised assessments cannot be secured.
- **Policymakers.** Review data-storage, retention, and overseas-server arrangements before adopting any detection platform: the paper flags breaches and commercial exploitation of student work as procurement risks in their own right.

## Limitations

- This is a conceptual and normative argument, not an empirical study: it reports no detector-accuracy experiments of its own, so its claims about methodological failure rest on reasoning and prior literature, including others' evaluations such as Turnitin's test on 700,000 pre-2019 papers.
- The procedural-fairness argument is built on the balance-of-probabilities evidentiary standard used in the authors' own higher education misconduct procedures, so its transfer to other jurisdictions, sectors, or legal frameworks is argued rather than demonstrated.
- The central premise — that real-world text origin is unknowable, so detector output cannot be independently verified — is framed so that no available empirical test could settle it, leaving the paper's core claim unfalsifiable within the setting it critiques.
- The authors write from a shared institutional position across Australian universities and one secondary school, and their recommendations for assessment redesign are proposals rather than tested interventions.

## Connected Concepts

- [[ai-detection]]
- [[academic-integrity]]
- [[generative-ai]]
- [[higher-ed]]
- [[assessment]]
- [[assessment-validity]]
- [[authentic-assessment]]
- [[trust]]
- [[privacy]]
- [[writing-education]]
- [[student-experience]]
- [[ai-education]]
- [[educational-policy-ai]]
- [[governance]]

## Connected Articles

- [[karr-ai-detection-humanization-2026]] — Why AI Detection Fails for Academic Integrity: controlled evidence of the catch-22
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond detection: authentic assessment in the age of AI
- [[detecting-llm-generated-text-latent-prompt]] — Detecting LLM-generated text via latent prompts
- [[llm-detecting-llm-generated-content-education]] — LLMs detecting LLM-generated content in education
- [[ai-assessment-scale-reform]] — The AI Assessment Scale and the work of assessment reform

## Citation

Bassett, M. A., Bradshaw, W., Bornsztejn, H., Hogg, A., Murdoch, K., Pearce, B., & Webber, C. (2026). [Heads we win, tails you lose: AI detectors in education](https://doi.org/10.1080/1360080X.2026.2622146). *Journal of Higher Education Policy and Management*.
