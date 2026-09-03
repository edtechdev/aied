---
title: Automated Assessment
created: "2026-08-09T10:44:35-04:00"
updated: "2026-09-03T15:00:00-04:00"
type: concept
tags: [automated-assessment, assessment, assessment-validity, formative-assessment, bias-mitigation, teacher-role, automated-essay-scoring, llm]
audience: [instructors]
category: [assessment]
confidence: high
---

> **Automated assessment** — the use of AI to evaluate student work, from [[formative-assessment|formative quizzes]] to high-stakes exams. Automated assessment spans multiple modalities — multiple-choice, short answer, essay, code, and performance-based evaluation — and ranges from direct automated grading to confidence-aware systems that report calibrated uncertainty alongside their scores.

## Questions to Consider

- Automated assessment ranges from multiple-choice scoring to essays, code, and performance-based evaluation. What's the biggest difference you'd expect between how reliably AI can grade a multiple-choice quiz versus a free-form essay — and why?
- A core design idea here is 'confidence awareness': AI graders that report how certain they are, flagging low-confidence cases for human review rather than issuing a single unqualified score. How would a grade that said 'I'm 70% sure about this' change how you'd use or trust an automated score?
- Research shows automated scoring can systematically disadvantage non-native speakers — the AI scores the language rather than the understanding. Why might an automated grader be especially prone to this kind of unfairness, even when it achieves high agreement with human raters overall?
- One study found that how validation is done can inflate reported performance: a naive cross-validation method reported near-perfect results that dropped dramatically under more rigorous trial-independent validation. What does this cautionary lesson suggest about how you should read any claim that an AI assessment system 'works'?
- The page argues calibrated confidence enables human-in-the-loop workflows, supports trust calibration, and strengthens measurement validity. If an automated system routed its most uncertain cases to a human reviewer, what would you want to know about how those cases are chosen before you trusted the split?
- Automated grading is described as one of the most mature AIED applications, yet grading without useful feedback has limited educational value. How might a focus purely on producing scores — rather than usable feedback — change what students actually get out of an AI-graded assessment?

## Introduction

### Assessment modalities

- **Short answer and essay:** automated grading, [[automated-essay-scoring]], and [[cong-confidence-asag-2026|confidence-aware approaches]] handle free-text evaluation.
- **Code assessment:** [[automated-grading-linux-bash-examinations-large-language-models|Bash grading]] and [[code-review-genai-cs1|code review]] demonstrate programming assessment.
- **Formative assessment:** [[automated-formative-assessments-a-level-sciences|A-level science automation]] and [[cotal-formative-assessment-scoring-2026|CoTAL]] focus on formative rather than [[summative-assessment|summative]] use.
- **AI-generated assessments at scale:** [[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]] shows that iteratively refined, course-tailored AI-generated exams achieve [[item-response-theory|IRT]]-measured quality on par with expert-written standardized-exam questions (difficulty β̄ = −0.45 vs. 0.35; discrimination ᾱ = 1.3 vs. 1.2) across 91 college classes — evidence that automated assessment can move from scoring to full [[automated-question-generation|item generation]].
- **Performance assessment:** [[engagement-assessment-video|Video engagement assessment]] and [[confidence-aware-student-drawing-assessment|drawing assessment]] extend automation beyond text.
- **Multimodal exam data and rubrics:** [[multimodal-exam-obe-rubrics-2026|a multimodal examination answer dataset with expert-designed Outcome-Based Education rubrics]] provides a benchmark resource for criterion-level automated assessment across diverse response modalities, supporting [[benchmark|benchmarking]] and [[educational-measurement|measurement]] research on multimodal student work.
- **Neurophysiological assessment:** [[eeg-familiarity-automated-assessment-2026|Nanayakkara & Halloluwa (2026)]] benchmark ML/DL models for EEG-based familiarity prediction (faces vs. math equations) as a step toward direct, objective measures of knowledge acquisition. Crucially, they show standard stratified cross-validation inflates performance (up to 0.9853 F1) via temporal leakage, while trial-independent Group K-Fold validation drops the peak to 0.6038 F1 — a cautionary [[research-methods-aied|methodological]] lesson for all automated-assessment benchmarking.

### Automated grading

Automated grading is one of the most mature and widely-deployed [[ai-education|AI in education]] applications — AI systems that evaluate student work, from multiple-choice scoring to essay assessment and code review. Its grading modalities include:

- **Short answer grading:** [[cong-confidence-asag-2026|confidence-aware ASAG]] evaluate free-text responses, with confidence calibration critical — systems must know when grading is reliable. A scoping review of short-answer auto-marking in [[science-education|science]] (2017–early 2024) documents the field's history: [[auto-marking-short-answer-science-2026|Morley et al.]] found BERT-family models (base, RoBERTa, DistilBERT, SciBERT) dominated — used in 20 of 21 studies, peaking in 2021 — before GPT-based approaches were adopted via [[prompt-engineering]] rather than fine-tuning from roughly 2022. Models augmented with domain data (textbooks, [[feedback|rubrics]], further pre-training) consistently outperformed those without, yet few could justify marks in human-comprehensible terms and [[bias-mitigation|bias]] across demographic and linguistic groups was rarely examined — leading the authors to argue auto-markers should *support* rather than replace [[teacher-role|human examiners]]. A PRISMA-guided [[meta-analysis-systematic-review|systematic review]] of 42 empirical grading and feedback studies (2023–2025) generalizes this caution across the field: LLMs match human raters on closed-ended tasks and short-answer questions but cannot fully replace human judgment on complex, open-ended, or subjective work requiring in-depth analysis or creativity, and the highest grading effectiveness is achieved in hybrid systems that pair AI-driven grading with teacher oversight and verification ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]).
- **Essay scoring:** [[automated-essay-scoring]] systems like [[choi-anchor-aes-prompting-2025|anchor-based AES]] use [[prompt-engineering|prompting strategies]] to approach human-level reliability. [[aiawe-automated-writing-evaluation|AIAWE]] extends automated evaluation to broader writing assessment.
- **Code review:** [[automated-grading-linux-bash-examinations-large-language-models|Linux Bash grading]] and [[code-review-genai-cs1|CS1 code review]] demonstrate automated assessment in [[cs-education|computing education]].
- **Formative integration:** [[automated-formative-assessments-a-level-sciences|A-level science automation]] and [[cotal-formative-assessment-scoring-2026|CoTAL]] show how automated grading feeds into [[formative-assessment]] cycles.
- **Bias and fairness:** [[ai-scoring-language-bias-physics|Language bias in physics scoring]] documents how automated grading can disadvantage non-native speakers — connecting to [[bias-mitigation]] and [[equity-in-ai-education]].
- **Benchmarking GenAI models for open-ended grading:** [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko & Drlik (2025)]] benchmarked eleven GenAI and sentence-embedding models against two expert human graders on 1,885 open-ended responses to 24 software-engineering questions. Only GPTo1 reached almost-perfect agreement (Fleiss' Kappa 0.82, low false positives and false negatives across grade categories), with Claude3 and PaLM2 close behind; context-sensitive [[generative-ai|GenAI]] models robustly handled short, diversely-phrased student answers, while reference-based embedding models (e.g., BERT's 345 false positives) systematically penalized correct-but-divergently-worded responses — evidence that model choice, not just grading format, shapes reliability for free-text [[assessment|open-ended assessment]].
- **Mixed-format exam grading (2026):** [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat, Das, Bhaumik & Thambi (2026)]] evaluated ChatGPT-5 against human faculty grading of a 21-item pharmacy exam (16 students) spanning multiple-choice, select-all-that-apply, fill-in-the-blank, listing, short-answer, and essay items. Concordance was substantial-to-near-perfect for objective item types (CCC 0.935–1.000 — aided by correct answers supplied during grading) but collapsed for listing (0.621–0.708), short-answer (≈0 to negative), and essay (0.341–0.854) items; providing a structured rubric did not consistently improve full-exam agreement (71.1% without vs 68.2% with). The study sharpens a methodological point that recurs across automated assessment — moderate percent accuracy frequently coexists with low [[assessment-validity|concordance]] — so accuracy alone overstates reliability, and it recommends [[human-in-the-loop-ai|hybrid grading]] for complex, subjective, or high-stakes items.

- **Rubric engineering for open-ended scoring in medical education:** [[olvet-genai-scoring-open-ended-medical-2026|Olvet et al. (2026)]] asked whether GPT-4 could reliably score open-ended questions on pre-clerkship [[medical-education|medical]] exams. After three iterations of human-driven rubric refinement at two US schools, inter-rater reliability with faculty reached substantial-to-almost-perfect agreement for three of four questions using analytic and holistic rubrics (weighted kappa up to 0.94), while the holistic-rubric item stalled at moderate (κw = 0.54). Error-pattern analysis showed discrepancies were traceable to both raters — GPT-4 over-scored when students offered multiple answers or used rubric-absent vocabulary, whereas faculty were often "overly generous" graders — leading the authors to recommend keeping [[human-in-the-loop-ai|humans in the loop]] (e.g., faculty scoring a subset to confirm accuracy). Because roughly 82% of US medical schools grade pre-clerkship work pass/fail, exact AI score agreement is often unnecessary for operational use.

### Confidence-aware assessment

A central design goal within automated assessment is **confidence awareness**: AI assessment systems that report calibrated uncertainty alongside their scores, rather than issuing a single unqualified prediction. A confidence-aware grader not only produces a grade or classification but also signals how certain it is, so that low-confidence cases can be flagged for human review and users can calibrate their [[trust]] in the system. This is central to responsible automated assessment and connects closely to [[psychometrically-aware-ai]] and [[trust-calibration]].

**How confidence is modeled** in the knowledge base's research:

- **Fused confidence signals for short-answer grading:** [[cong-confidence-asag-2026|Confidence-Aware ASAG]] fuses model-based confidence signals (verbalized, latent, and consistency-based) with dataset-derived aleatoric uncertainty via Random Forest regression.
- **Confidence in multimodal student work:** [[confidence-aware-student-drawing-assessment|Confidence-aware assessment of student-drawn scientific figures]] extends confidence modeling to multimodal student responses.
- **Psychometric calibration of LLMs:** [[psychometrically-aware-ai|Psychometrically aware AI]] advances the standard of aligning [[llm|LLM]] scoring with measurement theory, with calibration as a core requirement alongside [[item-response-theory]] alignment.
- **Difficulty and response-time calibration:** [[llm-difficulty-calibration-programming-exams-2026|Programming-exam difficulty calibration]] repositions LLMs as auxiliary evidence sources whose difficulty estimates correlate with student pass rates.
- **Trait-adaptive essay scoring:** [[psyscore-essay-scoring-zpd-feedback|PsyScore]] shows a psychometrically-aware framework can adapt essay feedback to learner traits.
- **Evaluating visual student work:** [[diagramir-educational-math-diagram-evaluation|DiagramIR]] back-translates LLM-generated math diagrams (TikZ) into an intermediate representation with deterministic checks, beating LLM-as-a-Judge on agreement with human raters and letting small models match large ones at ~10× lower cost — a scalable route to assessing non-text, diagrammatic student output.
- **Explainability of rubric-based scoring:** [[shap-llm-rationales-teaching-quality-assessment|Bueno et al.]] show that model-agnostic SHAP attributions are more faithful and transferable than LLM-generated rationales for explaining rubric-based scores (e.g., classroom feedback quality), and propose deletion-based + cross-model tests as a principled way to evaluate any scoring model's explanations.

**Why calibrated confidence matters:**

- **Enables human-in-the-loop delegation:** low-confidence cases route to a human reviewer — supporting [[human-in-the-loop-ai|human-in-the-loop]] workflows rather than blind automation.
- **Supports trust calibration:** [[trust-calibration|calibrated confidence]] lets users match their trust to the system's actual reliability, avoiding both over-trust and under-trust.
- **Improves measurement validity:** confidence-aware scoring strengthens [[educational-measurement]] and [[assessment-validity]] by making uncertainty explicit.
- **Fairness and defensibility:** flagging low-confidence cases for review reduces the risk of confidently wrong scores, especially for atypical or underrepresented responses.

#
- **Rubric generation and instructor-supervised grading pipelines:** [[harmogen-ai-assessment-rubric-generation|Mendonça et al. (2026)]] show that LLM-generated assessment rubrics (HARMOGEN-R) can match human-created rubrics for technical content within a ±5-point equivalence margin, with structured generation giving greater cross-model consistency. [[ai-assisted-instructor-supervised-grading-feedback|Cruz et al. (2026)]] evaluate an end-to-end GPT-4o grading pipeline where AI grades fell within 0.5 points of the instructor in 83% of 362 submissions (MAE 0.31) — best framed as a scalable supplement to, not a replacement for, instructor judgement.

## Quality and fairness

Automated assessment quality depends on [[assessment-validity]] and [[bias-mitigation]]. [[ai-scoring-language-bias-physics|Language bias]] research shows that automated scoring can systematically disadvantage certain student populations.

### Connections

Automated assessment connects to [[assessment-validity]] (quality assurance), [[formative-assessment]] (use context), [[bias-mitigation]] and [[equity-in-ai-education]] (fairness), [[teacher-role]] (how automation changes instructor work), and [[ai-feedback-quality]] (grading without useful feedback has limited educational value). Confidence-aware assessment is a specific mechanism within the broader agenda of [[psychometrically-aware-ai]] and a contributor to [[trust-calibration|calibrated trust]].

- **Large-scale AI grading of handwritten [[physics-education|physics]] (2026):** A multimodal model (GPT-5.5) graded 10,364 scanned pages across a national Physics Olympiad theory exam, selection camp, and university quantum-mechanics exam, achieving total-score correlations of 0.91–0.97 with official marks and recovering the same top-five Olympiad team. Revised page-by-page, evidence-location instructions improved agreement — evidence that [[multimodal|multimodal AI]] can support high-stakes summative grading with careful rubric and prompt engineering ([[ai-grading-handwritten-physics-2026]]).

- **Selective automation for handwritten [[chemistry-education|chemistry]] (2026):** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] graded a 296-student handwritten general-chemistry final page-by-page against rubric images with a multimodal, reasoning LLM, achieving high run-to-run reliability on total scores (ICC(A,1) = 0.967) and strong total-score agreement with TA grading (R² = 0.91). Because item-level reliability varied sharply by format — textual and chemical-reaction answers graded reliably while drawing and graphing scored worse than random — raw agreement was judged inadequate for high-stakes use. They operationalize [[human-in-the-loop-ai|human deferral]] through confidence filters (partial-credit thresholds, an [[item-response-theory|IRT]]-based risk threshold, and problem-type exclusion) that convert raw AI scores into an accept/deferral policy, and show that false positives (AI crediting genuinely wrong answers) tend to go undetected since students rarely contest them — a concrete [[psychometrically-aware-ai|psychometrically grounded]] route to selective automation ([[cvengros-grading-handwritten-chemistry-ai-2026]]).

- **LLM comparative judgment for writing screening (2026):** Mercer & Reed used seven LLMs as pairwise comparative judges to score informational writing from 1,208 students in Grades 3–6 across three screening occasions. LLM-CJ scores correlated strongly with analytic rubric scores (r = .67–.73, strongest for Gemini-3.1 Pro) with AUC .82–.86 for proficiency; findings were stable across models, with little validity gain from costlier, more capable ones, while averaging three writing samples improved accuracy — sampling breadth mattered more than model choice. Predictive-bias patterns for [[multilingual-learning|multilingual learners]] matched human rubric scoring, supporting LLM-CJ as an efficient, low-cost screening approach ([[llm-comparative-judgment-writing-screening-2026]]).

- **Quality-dependent alignment with instructor grading (2026):** Comparing ChatGPT, peers, and an instructor grading the *same* undergraduate group projects, [[usher-faraon-who-grades-best-2026|Usher & Faraon found]] ChatGPT's alignment with the instructor *improved as project quality increased* — its largest overestimation was for low-quality work (≈ +14 points), shrinking to ≈ +2.5 points for high-quality projects. ChatGPT also graded higher on average than both peers and the instructor, a grade-inflation tendency that undermines its reliability as a standalone summative grader, especially for weaker submissions.

## Connected Concepts

- [[remote-proctoring]]
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
- [[summative-assessment]] — Summative assessment: AI-resistant formats (oral, proctored, closed-book exams)

## Connected Articles
- [[llm-comparative-judgment-writing-screening-2026]] — Validity of Large Language Model Comparative Judgment for Universal Writing Screening
- [[usher-faraon-who-grades-best-2026]] — Comparing ChatGPT, peer, and instructor grading across project quality levels (Usher & Faraon 2026)
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[semantic-variability-llm-conversation-assessment-2026]]
- [[zhang-races-consistent-essay-scoring-llms-2026]] — RACES: reward-aligned consistent essay scoring with LLMs
- [[academic-dishonesty-automated-proctoring-ai-2026]]
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[ai-decision-support-online-learning-assessment-2026]]
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
- [[diagramir-educational-math-diagram-evaluation]] — DiagramIR: automatic evaluation of generated math diagrams
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies: bias in automated writing feedback
- [[shap-llm-rationales-teaching-quality-assessment]] — SHAP vs LLM rationales for rubric-based teaching quality assessment
- [[end-of-assessment-ai-disruption-transformation-2026]]
- [[can-ai-evaluate-assessment-llm-meta-assessment-2026]]
- [[eeg-familiarity-automated-assessment-2026]] — Automating Learner Assessment: EEG-Based Familiarity Prediction
- [[harmogen-ai-assessment-rubric-generation]] — HARMOGEN-R: AI assessment rubric generation
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI-assisted instructor-supervised grading and feedback
- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[chatgpt-qiskit-homework-autogradable-2026]] — ChatGPT solves Qiskit homework; autogradable design
- [[credentials-carry-evidence-ai-agents-2026]] — Credentials that carry their evidence for AI-agent work

- [[multimodal-exam-obe-rubrics-2026]] — Multimodal exam dataset with OBE rubrics

- [[cogevol-learning-environment-generation-2026]] — CogEvol: Learning Environment Generation
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Mapping review: assessment automation is a leading AI use case, mostly at SAMR Substitution/Augmentation
- [[auto-marking-short-answer-science-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
