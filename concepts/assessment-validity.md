---
title: Assessment Validity
created: "2026-08-09T10:44:35-04:00"
updated: "2026-09-03T12:50:00-04:00"
connected_faqs: [redesign-assessment-ai-era]
type: concept
tags: [authentic-assessment, automated-assessment, formative-assessment, academic-integrity, rct, bias-mitigation, equity-in-ai-education]
research_method: [randomized controlled trial]

confidence: high
---

> **Assessment validity** — whether assessments measure what they claim to measure. [[ai-education|AI in education]] raises fundamental validity questions: do [[automated-assessment|AI-graded]] assessments assess student learning or [[prompt-engineering|AI prompting skill]]? Does AI use invalidate traditional assessment assumptions?

## Questions to Consider

- Validity asks whether an assessment measures what it claims to measure. Before reading, if you saw a student submit a polished essay you suspected was AI-assisted, would you think the bigger problem was cheating, or that the task was no longer measuring what you thought it was measuring?
- This page poses a sharp question: when students use AI, does the score reflect student knowledge or AI-prompting skill? Can you think of an assessment you've designed or taken where the score might now be telling you more about the tool than about the learner?
- A key finding is that the same learner input can receive semantically different replies depending on which underlying LLM is used — introducing 'construct-irrelevant variance' that threatens reliability and [[bias-mitigation|fairness]]. If two students get different AI support purely because of the model behind it, how fair is the resulting comparison?
- The page argues that even when an LLM scores well, transferring human score interpretations requires similarity in the latent structure of responses — and LLMs diverge from humans here. What does this suggest about trusting an AI that 'passes' an exam designed for humans?
- Rather than trying to detect AI use, the knowledge base argues for redesigning assessments so they stay valid for AI-capable students. Why might redesigning the task be a more validity-preserving strategy than policing whether AI was used?
- AI now serves as test-taker, test-maker, rater, and analyst — making the interpretive chain opaque. When every role in an assessment is filled by AI, what does it even mean to say an assessment is 'valid' for the human learner in the middle of it?

## Introduction

### Validity challenges

- **Construct validity:** When students use AI on assessments, does the score reflect student knowledge or AI capability? [[genai-performance-vs-learning|Performance vs. learning]] [[research-methods-aied|research]] addresses this directly.
- **Cross-LLM construct-irrelevant variance in conversation-based assessment:** [[semantic-variability-llm-conversation-assessment-2026|Hao (2026)]] shows that even for a single conversational turn, the semantic content of [[llm|LLM]]-generated replies varies across models and conversational-context conditions. Within-model similarity consistently exceeds between-model similarity (0.715–0.795 vs. 0.443–0.604), and adding chat history meaningfully changes response content (median cross-history similarity ~0.40–0.45). Because the same learner input can receive semantically different replies depending on the underlying model, prompting and context alone cannot preserve response consistency — introducing potential **construct-irrelevant variance** that threatens validity, reliability, and fairness. Maintaining consistent assessment conditions as LLMs evolve is therefore an *infrastructure* challenge (symbolic rules, response templates, validation layers), not merely a [[prompt-engineering]] one.
- **Latent-structure validity across humans and LLMs:** [[assessment-latent-structure-human-llm-2026|Strugatski et al. (2026)]] add a deeper validity condition: even when an LLM scores well, transferring human score interpretations requires similarity in the *latent structure* of responses. Comparing six [[multimodal]] LLMs to human cohorts on [[chemistry-education|chemistry]] and [[quantitative-research|quantitative]]-reasoning instruments, they find LLM–human factor structures consistently diverge (LLM–human congruence below the human–human baseline), so performance on a human-normed exam is weak evidence about LLM abilities on the constructs the items were designed to measure.
- **Consequential validity:** Do AI-mediated assessments have fair consequences? [[ai-scoring-language-bias-physics|Language bias studies]] show that AI scoring can disadvantage non-native speakers.
- **Construct-irrelevant variance in human grading of GenAI-assisted work:** [[luo-dawson-value-judgements-grading-2026|Luo & Dawson (2026)]] provide a direct empirical demonstration that human grading of GenAI-assisted work is shot through with construct-irrelevant variance. In scenario-based interviews with 33 university teachers, grading decisions were driven by person-oriented (student honesty, diligence), capability-oriented (independence from AI, GenAI skill, disciplinary mastery), relation-oriented (trust built with students), and justice-oriented (fairness, beneficence) values — all of which can vary grades on factors unrelated to the outcomes being assessed. Marking down GenAI-assisted work is justified, they argue, *if and only if* the AI use prevented students from demonstrating the assessed outcomes; otherwise value-driven grading threatens validity. The study grounds the validity framing in real teacher practice and calls for "two-way transparency" — teachers clarifying how GenAI use will affect grades, not just students declaring use.
- **AI-driven grade inflation as a validity threat:** [[chirikov-ai-grade-inflation-2026|Chirikov (2026)]] identifies a novel, technology-driven mechanism of [[summative-assessment|grade]] inflation operating *upstream of grading* — on the production of graded work. In a difference-in-differences study of 500,000+ grades across 319 courses (2018–2025), courses with more AI-exposed tasks (writing, coding) saw the share of A grades rise by 13 percentage points after ChatGPT's release, with grade-distribution compression. A triple-differences analysis shows the effect concentrates in homework-heavy courses — evidence that AI **task displacement** (AI performing graded tasks before instructors observe them) inflates grades without a corresponding rise in skill. This reduces the comparability of grades across courses and erodes the informational value of transcripts in ways difficult to detect from grade distributions alone.
- **Validity of AI-generated items:** [[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]] shows that AI-generated questions, validated via Bayesian [[item-response-theory|IRT]], achieve difficulty and discrimination on par with expert-written standardized-exam items (reliability 0.79 vs. 0.72) — supporting the validity of course-tailored AI-generated assessments when backed by psychometric evaluation.
- **Authentic assessment:** [[authentic-assessment]] and [[ai-assessment-scale-reform|the AI Assessment Scale]] propose validity-preserving assessment redesigns.
- **Confidence and calibration:** [[automated-assessment|Confidence-aware systems]] improve validity by flagging uncertain assessments.
- **[[embodied-learning|Embodied]] and multimodal evidence:** speech-only assessment can mistake verbal fluency for conceptual knowledge; [[multimodal-embodied-cognition-oral-explanations-2026|Morphew et al.]] show that computer-vision gesture analysis coupled with LLM speech analysis increases construct validity and [[equity-in-ai-education|equity]] by capturing understanding expressed through gesture, not just words — reducing bias against learners who express understanding non-verbally.

### Redesign over detection

The knowledge base argues that maintaining assessment validity requires redesigning assessments for AI-capable students, not [[ai-detection|detecting AI use]]. [[beyond-detection-authentic-assessment-ai-2025|Beyond detection approaches]] and [[assessment]] represent validity-forward thinking.

### Connections

Assessment validity connects to [[authentic-assessment]], [[automated-assessment|Automated Grading]], [[automated-assessment|Confidence Aware AI Assessment]], [[formative-assessment]], [[academic-integrity]], and [[rct]] (which relies on valid outcome measures).

AI challenges validity at the epistemic level: [[end-of-assessment-ai-disruption-transformation-2026|Hathcoat, Slotnick & Miller (2026)]] argue that when LLMs serve as test-takers, test-makers, raters, and analysts, the interpretive chain becomes opaque and the object of measurement loses definition — reframing validity as requiring AI-fluent "cyborg" judgment, and [[can-ai-evaluate-assessment-llm-meta-assessment-2026|Green et al. (2026)]] show AI scores can align with human raters (87% checklist) while the underlying rationale diverges, especially on measurement quality and weak reports.

## Connected Concepts

- [[authentic-assessment]]
- [[automated-assessment]]
- [[formative-assessment]]
- [[academic-integrity]]
- [[rct]]
- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[llm]]
- [[feedback]]

## Connected Articles
- [[llm-comparative-judgment-writing-screening-2026]] — Validity of Large Language Model Comparative Judgment for Universal Writing Screening
- [[gpt-item-generation-l2-listening-2026]] — Prompting vs. fine-tuning for GPT-based L2 listening item generation (Aryadoust & Wong 2026)
- [[item-writing-flaws-irt-difficulty-2026]] — Impact of item-writing flaws on IRT difficulty and discrimination (Schmucker & Moore 2026)
- [[biology-grade-vulnerability-genai-2026]] — Vulnerability of biology course grades to AI-mediated dishonesty (Chan et al. 2026)
- [[chirikov-ai-grade-inflation-2026]] — AI task displacement as a mechanism of grade inflation (Chirikov 2026)
- [[semantic-variability-llm-conversation-assessment-2026]]
- [[coauthorship-integrity-reconceptualising-assessment-validity-for-the-age-of-gene]]
- [[assessment-latent-structure-human-llm-2026]] — Do assessment instruments measure the same thing for humans and LLMs? (Strugatski et al. 2026)
- [[multimodal-embodied-cognition-oral-explanations-2026]] — A Multimodal Framework for Embodied Cognition in Oral Explanations
- [[prompt-privilege-equitable-ai-access-2026]] — Prompt Privilege: measuring & mitigating accessibility disparities in LLM access
- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the quality of AI-generated exams: a large-scale field study
- [[melo-llm-classroom-observation-teach-2026]] — Validating LLM-based classroom observation against expert ratings (Melo et al. 2026)
- [[competency-based-education-genai-production-2026]]

- [[genai-performance-vs-learning]]
- [[ai-scoring-language-bias-physics]]
- [[ai-assessment-scale-reform]]
- [[beyond-detection-authentic-assessment-ai-2025]]
- [[confidence-aware-student-drawing-assessment]]
- [[cong-confidence-asag-2026]]

- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24: Benchmarking Multimodal LLMs for Slide Auditing
- [[end-of-assessment-ai-disruption-transformation-2026]]
- [[can-ai-evaluate-assessment-llm-meta-assessment-2026]]

- [[zhang-ct-ai-training-test-2026]] — Computational Thinking in AI Training Test (CTAT)
- [[roe-assessment-twins-2026]] — Assessment twins for strengthening assessment validity in the age of GenAI (Roe, Perkins & Giray 2026)
- [[lodge-adaptive-capabilities-genai-future-2026]] — Adaptive capabilities for assuring quality learning in a gen AI-integrated future (Lodge et al. 2026)
- [[bassett-ai-detectors-education-2026]] — Heads we win, tails you lose: AI detectors in education (Bassett et al. 2026)
- [[asynchronous-oral-assessment-2026]] — Asynchronous Oral Assessments in the AI Era (Pentland 2026)

- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[xiong-ai-educational-measurement-review-2026]] — Construct validity as a central challenge

- [[questionnaire-teachers-genai-uses-validation-2026]] — Questionnaire on teachers' uses of generative AI (Pérez-Montesdeoca et al. 2026)
- [[luo-dawson-value-judgements-grading-2026]] — Value judgements in grading GenAI-assisted work: honesty, trust, validity, and two-way transparency (Luo & Dawson 2026)
