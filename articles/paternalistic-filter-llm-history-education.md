---
title: "The Paternalistic Filter: Epistemic Injustice and Differential Refusal in LLM-Mediated History Education for Marginalized Romanian Students"
created: "2026-07-14T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
technology: [llm]
stakeholders: [student-experience]
ethics: [bias-mitigation, equity-in-ai-education]
research_method: [benchmark]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/2607.11292.md']
confidence: high
discipline: [humanities education]
page_kind: [evaluation]
---

> **Synthesis:** A systematic API audit of four LLMs acting as history tutors evaluates 1,800 responses about the 1989 Romanian Revolution, exposing a 'paternalistic filter': models differentially refuse or soften answers for marginalized students, reproducing epistemic injustice. The audit reveals that [[guardrails]] and refusals are not uniform but patterned by student identity and topic sensitivity.

Centers on [[llm]] tutors in [[student-experience]] and the harms catalogd under [[hazra-safetutors-pedagogical-safety-2026]], with strong links to [[bias-mitigation]] and [[equity-in-ai-education]] in [[higher-ed]]. It extends [[cognitive-offloading|Over-Reliance]] concerns by showing even refusal behavior can entrench inequality, and calls for fairness evaluations that account for differential treatment across student groups.

## Key Findings

- A systematic API audit of four LLMs acting as history tutors evaluated 1,800 responses about the 1989 Romanian Revolution.
- The audit exposed a 'paternalistic filter': models differentially refuse or soften answers for marginalized students, reproducing epistemic injustice.
- Guardrails and refusals were not uniform but patterned by student identity and topic sensitivity, rather than being content-based safety decisions.
- The findings extend [[cognitive-offloading|Over-Reliance]] concerns by showing that even refusal behavior can entrench inequality, and call for fairness evaluations that account for differential treatment across student groups.

## What this means for practice

- **Learners.** Cross-check a refusal or a softened answer against a second model before treating it as the limit of what can be taught: Kimi K2 refused or errored on 62.2–76.7% of requests, and the low-tier persona hit 76.7% against 62.2% for both the Roma minority and the Romanian baseline.
- **Learners.** Ask directly for political actors, causes, and contested interpretations rather than accepting the framing offered, because that framing shifts with your profile: LLaMA's victimization-to-politics ratio moved from about 0.03 for the elite persona to about 0.15 for the Roma persona.
- **Instructors.** Test deployed tutors for differential treatment rather than aggregate harm, using stratified student personas: the contested "coup theory" appeared in 7.9% of baseline responses but only 4.3% for the Roma minority and 2.6% for the low-tier persona.
- **Instructors.** Do not read a model's confidence scores as a measure of content quality: Deepseek's mean justification score was 9.60 for the elite persona against 6.90 for the low-tier persona, and GPT_OSS dropped to 7.04 for the Roma persona against an 8.30 baseline.
- **Instructors.** Treat uneven refusal as a defect to be audited rather than a neutral output of [[guardrails]]: safety alignment that blocks or flattens content for some student identities reproduces the epistemic harms it claims to prevent, so audits for LLM tutors must measure differential treatment, not just aggregate harm.

## Limitations

- The five student personas are textual proxies that only approximate real intersectional identities, and the study involved no human participants or student data, so the measured behavior is model-weight response under a fixed system prompt rather than observed classroom experience.
- The "coup theory" measure is keyword-based and may miss vague paraphrasing; the authors chose strict matching to avoid false positives, which makes the gatekeeping estimates (2.6–7.9%) conservative by design.
- Kimi K2's API temperature was not configurable, so some of its refusals may reflect stochastic behavior rather than model bias; the design used n = 30 iterations per condition across 4 models, 5 personas, and 3 prompts (1,800 calls), at T = 0 where controllable.
- The audit covers a single historical event (the 1989 Romanian Revolution) and single-turn interactions only, leaving open whether the paternalistic patterns generalize to other cultural contexts or to multi-turn tutoring.

## Connected Concepts

- [[llm]]
- [[student-experience]]
- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[higher-ed]]
- [[cognitive-offloading]]
- [[ai-misuse-learning-harm]]
- [[pedagogical-safety]]
- [[hallucination-risk]]
- [[trust]]
## Connected Articles

- [[hazra-safetutors-pedagogical-safety-2026]]
- [[hazra-safetutors-pedagogical-safety-2026]]
## Citation

Alexis Popovici, Andrei Ionascu, Adrian-Marius Dumitran (2026). [The Paternalistic Filter: Epistemic Injustice and Differential Refusal in LLM-Mediated History Education for Marginalized Romanian Students](https://arxiv.org/abs/2607.11292). arXiv preprint.
