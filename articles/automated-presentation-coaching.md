---
title: "A Survey of Automated Presentation Coaching: Systems, Methods, and Open Challenges"
created: "2026-06-29T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [intelligent-tutoring, llm, personalized-learning, rag]
assessment: [feedback]
audience: [instructors]
research_method: [systematic review]
discipline: [language learning]

sources: ['raw/papers/2606.27380.md']
confidence: high
page_kind: [synthesis, framework]
stakeholders: [professional-training]
---

> **Synthesis:** This survey provides the first [[meta-analysis-systematic-review|systematic review]] of automated presentation coaching systems, organizing them along a five-dimensional task taxonomy: segmental pronunciation, lexical stress, suprasegmental prosody, pacing, and content faithfulness. The authors review systems spanning pronunciation tutors, fluency and prosody coaches, [[multimodal]] trainers, and conference Q&A practice tools, identifying coverage gaps in pacing and content feedback dimensions.

The survey connects to [[intelligent-tutoring|intelligent tutoring systems]] by examining how real-time [[feedback|feedback delivery]] mechanisms in coaching systems mirror educational feedback principles. The taxonomy serves as a framework for [[professional-training|professional skills training]], particularly for [[language-learning|second language learners]], and highlights the role of [[scaffolding|scaffolded feedback]] in skill development.

Key open challenges include the scarcity of annotated presentation corpora, achieving accent-fair feedback across diverse L1 backgrounds, and delivering real-time multimodal feedback without overwhelming the learner — all of which connect to broader [[personalized-learning|personalized learning]] and [[ai-literacy|AI literacy]] concerns in education technology design.

## What this means for practice

- **Instructors.** Check which of the five taxonomy dimensions a coaching tool actually scores before assigning it: of the 15 systems surveyed, only two deliver feedback in real time, and coverage clusters on segmental pronunciation while lexical stress remains the most underaddressed dimension even though misstressed words are a leading cause of reduced L2 comprehensibility.
- **Instructors.** Assign dimension-specific [[feedback]] rather than a single holistic rating — for example "lower your pitch at the start of a new section" for discourse prosody, or "say *algorithm* with stress on the first syllable" for lexical stress — because current systems assess intonation only at the utterance level while presentations require section-level prosodic planning.
- **Instructors.** Personalize pacing and prosodic targets per speaker instead of enforcing fixed norms; the survey proposes adapting targets from a 2–3 minute calibration recording, so [[scaffolding|scaffolded]] coaching improves clarity without erasing the learner's accent identity.
- **Designers.** Build accent fairness into thresholds: calibrate them per L1 cohort, report subgroup precision and recall by L1, and avoid penalizing identity-marking features such as rhoticity patterns or vowel quality when intelligibility is unaffected.
- **Researchers.** Contribute to shared evaluation infrastructure: the field lacks standardized slide-aligned corpora, and the survey recommends mini-sets of 20–30 speakers from 5 or more L1 backgrounds each delivering a 5–10 minute technical talk with timestamped slide boundaries, phone-level transcriptions, and expert prosody ratings — plus validation that metrics predict actual learner improvement rather than reference similarity.

## Limitations

- As a survey, coverage is deliberately not exhaustive: the authors emphasize work that informs pronunciation, prosody, pacing, and comprehensibility for slide-based L2 English presentations, and map 15 representative systems onto the taxonomy.
- English-only scope and a single genre: applicability to other languages and to presentation styles such as storytelling or persuasive speaking requires further investigation.
- The taxonomy and metrics were derived from existing literature and may not capture all dimensions relevant to real-world coaching; the datasets curated and recommended are limited in scale, since most CAPT corpora cover isolated words or short sentences without slide structure, domain terminology, or discourse-level features.
- No empirical comparison is provided between clone-and-compare references and expert references across speaker populations, the practical implementation of accent-fair thresholds and privacy-preserving systems still needs validation in deployed settings, and cross-system comparison is constrained because commercial platforms (ELSA Speak, Speechling, Yoodli, Orai) typically address only one or two taxonomy dimensions and rarely publish their technical approaches.

## Connected Concepts

- [[intelligent-tutoring]]
- [[feedback]]
- [[professional-training]]
- [[language-learning]]
- [[scaffolding]]
- [[personalized-learning]]
- [[ai-literacy]]
- [[multimodal]]
## Connected Articles

- [[prompt-coach-agentic-tutor-prompt-engineering]] — Prompt Coach: An Empirical Evaluation of an Agentic Tutor for Learning Prompt Engineering in Software Development
- [[cstutorbench-slm-tutors]] — CSTutorBench: Benchmarking Small Language Models as Tutors for Block-Based Programming
- [[retrieval-augmented-tutoring-algorithm-kite]] — Retrieval-Augmented Tutoring for Algorithm Tracing and Problem-Solving in AI Education
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[ai-coaching-rl-skill-development]] — AI Coaching for Accelerating Human Skill Development with Reinforcement Learning
- [[conversational-ai-tutors-framework]] — The Path to Conversational AI Tutors: Integrating Tutoring Best Practices and Targeted Technologies to Produce Scalable AI Agents

## Citation

Wen Liang, Li Siyan, Zackary Rackauckas, Julia Hirschberg (2026). [A Survey of Automated Presentation Coaching: Systems, Methods, and Open Challenges](https://arxiv.org/abs/2606.27380). Computation and Language (cs.CL).
