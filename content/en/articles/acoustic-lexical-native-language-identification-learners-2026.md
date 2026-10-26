---
title: "Acoustic and Lexical Signals for Native Language Identification of Language Learners"
created: "2026-10-26T10:37:00-04:00"
updated: "2026-10-26T10:37:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/native-language-identification-llm-speech-learners-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [language learning]
audience: [researchers, educational technology developers, instructors]
level: [higher ed]
pedagogy: []
technology: [multimodal, speech-and-voice-technologies, llm]
assessment: []
methods: [quantitative-research, research-methods-aied]
institutions: []
ethics: []
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-26"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Uluslu, Qian, Knill and Gales (2026) compare two ways of identifying a language learners first language from their spoken English: a [[multimodal|WavLM-based]] audio classifier and a zero-shot [[llm|GPT-4o]] classifier reading transcripts, evaluated on a CEFR-balanced set. Audio outperformed transcripts overall when full transcripts were available, and the comparison was analyzed across proficiency levels rather than pooled. The study is a measurement paper for spoken second-language assessment rather than a classroom intervention, and its value for education is in showing what a transcript-only system, including an LLM, can and cannot infer about a speaker.

## Key Findings

1. **Audio beat transcripts.** The audio classifier outperformed the transcript-based approach overall when full transcripts were available.
2. **A zero-shot LLM can classify L1 from text.** GPT-4o applied to transcripts produced competitive but not superior results, so lexical traces of the first language are real but weaker than acoustic ones.
3. **Proficiency changed the picture.** Predictions were analyzed across proficiency levels on a CEFR-balanced evaluation set, which is the design choice that keeps the comparison from being dominated by advanced speakers.
4. **Two signal families are complementary.** Acoustic attributes such as pronunciation, rhythm and intonation carry part of the signal, and transcripts carry a lexical remainder the audio model does not use.
5. **The evaluation is balanced by level.** A CEFR-balanced set prevents the classifier's accuracy from reflecting the proficiency mix of the corpus rather than its own discrimination.
6. **Transcript availability mattered.** The result is stated conditionally on full transcripts being available, which is the practical case for an automated speaking assessment that has already transcribed the response.

## What the two channels measure

Native language identification is a proxy task: it asks whether a system can recover where a speaker comes from, and the interesting finding is that the answer differs by channel. The audio model uses pronunciation, rhythm and intonation, which are the properties a human listener uses when they say a speaker sounds like a particular first language. The transcript model uses what the learner wrote in words, which means vocabulary choice, collocations, and the residue of first-language syntax in the learner's English. The zero-shot result is the part most relevant to [[language-learning|language teaching]], because it means a general-purpose [[llm|large language model]] given a transcript can make a reasonable guess without any [[llm-training-and-fine-tuning|fine-tuning]] on the task. That is a capability a [[teacher-role|teacher]] could exploit, and also a capability that invites misuse: a transcript-based L1 guess is a probabilistic inference about identity, and treating it as a fact about a student would be a category error. The paper's contribution is the comparison, and its caution is that the weaker channel was not absent, which means [[multimodal]] systems have more to work with than either channel alone.

## Proficiency as the controlling variable

The CEFR-balanced evaluation is what makes the comparison interpretable. Learners at higher proficiency have more native-like pronunciation, so a pooled accuracy figure would be dominated by the easy cases and would overstate the system. Splitting by level exposes the range, and the paper reports the analysis by proficiency rather than a single number. For [[language-learning|language assessment]] design this is the methodological point: any automated speaking measure needs to be reported by level, because the difficulty of the task is a function of the learner, not only of the model. The study also frames its own scope honestly: it measures identification accuracy, not teaching effect, and the link from an L1 classifier to a [[pedagogy|pedagogical]] decision is left to the reader.

## What this means for practice

- **Instructors.** Treat a transcript-based language guess as a hypothesis about a learner's background, never as a fact. Where such a system is used, it should inform support, not placement.
- **Educational technology developers.** If a speaking tool already transcribes responses, the transcript channel is nearly free; use it alongside audio rather than replacing one with the other.
- **Researchers.** Report second-language speech results by proficiency level, as this study does, or the accuracy figure is not comparable across corpora.
- **Instructors using [[ai-feedback-quality|AI feedback]] on speech.** Ask what the model actually inferred. A confidence score on a first-language guess says nothing about the learner's proficiency in the target language.

## Limitations

- **A proxy task, not a teaching outcome.** The study measures how well systems identify a first language; it does not test whether that identification improves instruction or feedback.
- **Transcript dependence.** The transcript result holds only when full transcripts are available, which requires a separate recognition step with its own error rate.
- **Corpus composition.** Accuracy depends on the first languages represented and their balance in the corpus, which the paper reports but does not vary systematically.
- **Zero-shot only for the LLM.** GPT-4o was used without fine-tuning, so the comparison measures a general-purpose system rather than the best achievable transcript model.

## Citation

Uluslu, A. Y., Qian, M., Knill, K., & Gales, M. (2026). [Acoustic and Lexical Signals for Native Language Identification of Language Learners](https://arxiv.org/abs/2610.32382). *arXiv preprint arXiv:2610.32382*.
