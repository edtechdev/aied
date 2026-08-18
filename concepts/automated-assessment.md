---
title: Automated Assessment
created: "2026-08-09T10:44:35-04:00"
updated: "2026-08-18T09:30:00-04:00"
type: concept
tags: [automated-grading, confidence-aware-ai-assessment, assessment-validity, formative-assessment, bias-mitigation, teacher-role, automated-essay-scoring, llm]
confidence: high
---

> **Automated assessment** — the use of AI to evaluate student work, from [[formative-assessment|formative quizzes]] to high-stakes exams. Automated assessment spans multiple modalities — multiple-choice, short answer, essay, code, and performance-based evaluation — and ranges from direct automated grading to confidence-aware systems that report calibrated uncertainty alongside their scores.

### Assessment modalities

- **Short answer and essay:** automated grading, [[automated-essay-scoring]], and [[cong-confidence-asag-2026|confidence-aware approaches]] handle free-text evaluation.
- **Code assessment:** [[automated-grading-linux-bash-examinations-large-language-models|Bash grading]] and [[code-review-genai-cs1|code review]] demonstrate programming assessment.
- **Formative assessment:** [[automated-formative-assessments-a-level-sciences|A-level science automation]] and [[cotal-formative-assessment-scoring-2026|CoTAL]] focus on formative rather than summative use.
- **AI-generated assessments at scale:** [[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]] shows that iteratively refined, course-tailored AI-generated exams achieve [[item-response-theory|IRT]]-measured quality on par with expert-written standardized-exam questions (difficulty β̄ = −0.45 vs. 0.35; discrimination ᾱ = 1.3 vs. 1.2) across 91 college classes — evidence that automated assessment can move from scoring to full item generation.
- **Performance assessment:** [[engagement-assessment-video|Video engagement assessment]] and [[confidence-aware-student-drawing-assessment|drawing assessment]] extend automation beyond text.

### Automated grading

Automated grading is one of the most mature and widely-deployed AI in education applications — AI systems that evaluate student work, from multiple-choice scoring to essay assessment and code review. Its grading modalities include:

- **Short answer grading:** [[cong-confidence-asag-2026|confidence-aware ASAG]] evaluate free-text responses, with confidence calibration critical — systems must know when grading is reliable.
- **Essay scoring:** [[automated-essay-scoring]] systems like [[choi-anchor-aes-prompting-2025|anchor-based AES]] use [[prompt-engineering|prompting strategies]] to approach human-level reliability. [[aiawe-automated-writing-evaluation|AIAWE]] extends automated evaluation to broader writing assessment.
- **Code review:** [[automated-grading-linux-bash-examinations-large-language-models|Linux Bash grading]] and [[code-review-genai-cs1|CS1 code review]] demonstrate automated assessment in [[cs-education|computing education]].
- **Formative integration:** [[automated-formative-assessments-a-level-sciences|A-level science automation]] and [[cotal-formative-assessment-scoring-2026|CoTAL]] show how automated grading feeds into [[formative-assessment]] cycles.
- **Bias and fairness:** [[ai-scoring-language-bias-physics|Language bias in physics scoring]] documents how automated grading can disadvantage non-native speakers — connecting to [[bias-mitigation]] and [[equity-in-ai-education]].

### Confidence-aware assessment

A central design goal within automated assessment is **confidence awareness**: AI assessment systems that report calibrated uncertainty alongside their scores, rather than issuing a single unqualified prediction. A confidence-aware grader not only produces a grade or classification but also signals how certain it is, so that low-confidence cases can be flagged for human review and users can calibrate their [[trust|trust]] in the system. This is central to responsible automated assessment and connects closely to [[psychometrically-aware-ai]] and [[trust-calibration]].

**How confidence is modeled** in the wiki's research:

- **Fused confidence signals for short-answer grading:** [[cong-confidence-asag-2026|Confidence-Aware ASAG]] fuses model-based confidence signals (verbalized, latent, and consistency-based) with dataset-derived aleatoric uncertainty via Random Forest regression.
- **Confidence in multimodal student work:** [[confidence-aware-student-drawing-assessment|Confidence-aware assessment of student-drawn scientific figures]] extends confidence modeling to multimodal student responses.
- **Psychometric calibration of LLMs:** [[psychometrically-aware-ai|Psychometrically aware AI]] advances the standard of aligning [[llm|LLM]] scoring with measurement theory, with calibration as a core requirement alongside [[item-response-theory]] alignment.
- **Difficulty and response-time calibration:** [[llm-difficulty-calibration-programming-exams-2026|Programming-exam difficulty calibration]] repositions LLMs as auxiliary evidence sources whose difficulty estimates correlate with student pass rates.
- **Trait-adaptive essay scoring:** [[psyscore-essay-scoring-zpd-feedback|PsyScore]] shows a psychometrically-aware framework can adapt essay feedback to learner traits.

**Why calibrated confidence matters:**

- **Enables human-in-the-loop delegation:** low-confidence cases route to a human reviewer — supporting [[human-in-the-loop-ai|human-in-the-loop]] workflows rather than blind automation.
- **Supports trust calibration:** [[trust-calibration|calibrated confidence]] lets users match their trust to the system's actual reliability, avoiding both over-trust and under-trust.
- **Improves measurement validity:** confidence-aware scoring strengthens [[educational-measurement]] and [[assessment-validity]] by making uncertainty explicit.
- **Fairness and defensibility:** flagging low-confidence cases for review reduces the risk of confidently wrong scores, especially for atypical or underrepresented responses.

### Quality and fairness

Automated assessment quality depends on [[assessment-validity]] and [[bias-mitigation]]. [[ai-scoring-language-bias-physics|Language bias]] research shows that automated scoring can systematically disadvantage certain student populations.

### Connections

Automated assessment connects to [[assessment-validity]] (quality assurance), [[formative-assessment]] (use context), [[bias-mitigation]] and [[equity-in-ai-education]] (fairness), [[teacher-role]] (how automation changes instructor work), and [[ai-feedback-quality]] (grading without useful feedback has limited educational value). Confidence-aware assessment is a specific mechanism within the broader agenda of [[psychometrically-aware-ai]] and a contributor to [[trust-calibration|calibrated trust]].

## Connected Concepts

- [[assessment-validity]]
- [[formative-assessment]]
- [[automated-essay-scoring]]
- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[teacher-role]]
- [[llm]]
- [[higher-ed]]
- [[ai-ed-evaluation]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[psychometrically-aware-ai]]
- [[trust-calibration]]
- [[trust]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[human-in-the-loop-ai]]
- [[adaptive-learning]]
- [[personalized-learning]]

## Connected Articles
- [[genai-oop-programming-assessments-2026]] — GenAI performance on authentic introductory OOP assessments (Lepp & Kaimre 2026)
- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the quality of AI-generated exams: a large-scale field study
- [[ai-vs-human-assessment-efl-tpck-2026]] — AI-generated vs human-developed assessment tasks in EFL
- [[melo-llm-classroom-observation-teach-2026]] — Validating LLM automated classroom observation (Melo et al. 2026)
- [[learner-centered-feedback-ai]] — AI learner-centered feedback: teachers' practices and perceptions (PolyFeed)
- [[competency-based-education-genai-production-2026]] — Competency-based education and GenAI
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[multimodal-item-parameter-estimation-2026]] — Multimodal item parameter estimation
- [[automated-formative-assessments-a-level-sciences]] — Automated formative assessments in A-level sciences
- [[cong-confidence-asag-2026]] — Confidence-aware automatic short-answer grading
- [[ai-scoring-language-bias-physics]] — AI scoring language bias in physics
- [[llm-difficulty-calibration-programming-exams-2026]] — LLM-based difficulty calibration for programming exams
- [[genai-higher-education-systematic-review-2026]] — GenAI in higher education: systematic review
- [[choi-anchor-aes-prompting-2025]] — Anchor-based automated essay scoring prompting
- [[cotal-formative-assessment-scoring-2026]] — CoTAL formative assessment scoring
- [[automated-grading-linux-bash-examinations-large-language-models]] — Automated grading of Linux Bash exams with LLMs
- [[confidence-aware-student-drawing-assessment]] — Confidence-aware assessment of student-drawn figures
- [[psyscore-essay-scoring-zpd-feedback]] — Psychometrically-aware trait-adaptive essay scoring
- [[learning-to-prompt-adaptive-tutoring]] — Adaptive prompting in tutoring
- [[code-anchor-multi-view-visualization]] — Code-anchor multi-view visualization
- [[llm-psychometric-calibration-cdp]] — LLM psychometric calibration
- [[llm-item-difficulty-prediction]] — LLM item-difficulty prediction
