---
title: "AI-Mediated Input Transformation in Medical English: Speech Recognition and Transcript Reliability"
created: "2026-09-18T09:15:00-04:00"
updated: "2026-09-18T09:15:00-04:00"
type: article
technology: [speech-and-voice-technologies, ai-technologies]
discipline: [language learning, medical education]
stakeholders: [learners]
methods: [quantitative-research]
research_method: [experiment, quantitative]
audience: [instructors, learners, medical educators]
level: [higher ed]
sources: ['raw/papers/ai-medical-english-speech-recognition-2026.md']
confidence: high
---

> **Synthesis:** Stanchev (2026) evaluates whether [[speech-and-voice-technologies|automatic speech recognition]] can be trusted as an input channel in [[medical-education|Medical English]] instruction. A 2,692-token biochemistry passage was rendered to speech and transcribed by four online ASR platforms. Two free services produced near-complete transcripts (88.0–88.2% coverage) at moderate word error rates of 15.23% and 15.02%; two paid services returned partial output covering 30.1% and 54.6% of the reference text. Deletions dominated the error profile, and although meaning-altering substitutions were rare (under 1% of tokens), the examples — *imino* → *amino*, *cystine* → *cysteine*, *pH* → *phase* — are exactly the distinctions the discipline depends on.

## Key Findings

1. **Word error rate alone misrepresents ASR quality in [[language-learning|ESP]] contexts.** Two systems with comparable WER differed sharply in coverage, and the paid services' high WER was driven by missing segments rather than dense substitution errors.
2. **Coverage must be reported alongside WER.** A 72.14% WER caused mainly by truncation describes a different failure than one caused by misrecognition, and only coverage reveals which occurred.
3. **Deletions were the dominant error type**, at roughly 12.6% of reference tokens in full transcripts, with about 22% of deletions involving structural markers such as figure references and numeric labels.
4. **Semantic substitutions were rare but pedagogically consequential.** Terminological precision is the point in medical English, so a substitution rate below 1% still matters.
5. **The author's recommendation is full transcript export plus lightweight human verification** wherever terminology is critical — not a blanket judgement for or against ASR.

## Why error profiles matter more than error rates

[[assessment|Assessment]] and materials design need to know *how* a system fails. Truncation silently removes content, which changes what a learner is exposed to and invalidates any coverage-dependent activity; substitution corrupts meaning locally; structural-marker deletion removes the [[scaffolding]] that makes a scientific text navigable. Separating these categories is what makes the study useful to [[teacher-role|instructors]] choosing a tool, and it connects to the wiki's broader [[automated-assessment]] and [[ai-feedback-quality]] questions about what an AI-mediated channel reliably preserves.

## Where human verification remains necessary

The paper's practical conclusion is a division of labour: let ASR handle bulk transcription, and reserve human attention for terminological precision. That is the same [[human-in-the-loop-ai|human-in-the-loop]] logic that recurs across AI-in-education work, and it is a reminder that in [[professional-training|professional]] and medical contexts the cost of a plausible-looking error is higher than the cost of a slower workflow.

## Connected Concepts

- [[speech-and-voice-technologies]]
- [[language-learning]]
- [[medical-education]]
- [[automated-assessment]]
- [[hallucination-risk]]
- [[human-in-the-loop-ai]]
- [[professional-training]]
- [[multilingual-learning]]
- [[ai-feedback-quality]]
- [[ai-technologies]]

## Connected Articles

- [[asr-english-speaking-feedback-metacognition-2026]] — ASR feedback for English speaking and metacognition
- [[ai-standardized-patient-scaffolding-medical-2026]] — AI standardized patients and scaffolding
- [[ai-vs-human-assessment-efl-tpck-2026]] — AI versus human assessment in EFL

## Citation

Stanchev, E. (2026). [AI-Mediated Input Transformation in Medical English: Speech Recognition and Transcript Reliability](https://osf.io/f38mr). EdArXiv preprint.
