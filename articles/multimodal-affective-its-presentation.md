---
title: An Interpretable Closed-Loop Intelligent Tutoring System for Multimodal Affective Feedback in Asynchronous Presentation Training
created: "2026-05-19T04:33:04-04:00"
updated: "2026-08-24T10:00:00-04:00"
type: article
tags: [intelligent-tutoring, affective-computing, multimodal, higher-ed, professional-training, efficacy-study, learning-analytics, retrieval-augmented-generation, llm]
sources: ['raw/papers/2605.17468.md']
confidence: high
---

## Key Finding

## Synthesis

> Suen & Hung (2026) present one of the most comprehensive closed-loop [[intelligent-tutoring]] systems for soft-skill training, targeting asynchronous on-camera oral presentation at scale. The system operationalizes a seven-dimensional Behaviorally Anchored Rating Scale (BARS) across facial, vocal, textual, and oculomotor inputs, using an [[llm]]-agnostic XGBoost backbone for interpretable scoring that approaches expert-rater reliability (Spearman's ρ = 0.69–0.78). A three-layer feedback architecture — rubric-aligned scoring, audience-expressive diagnostics, and [[rag]] conversational coaching — creates a complete deliberate-practice loop. With 204 adult learners and Cohen's d of 0.39–0.90 across all seven dimensions over a 30-day window, this is among the stronger efficacy signals in ITS research. The explicit interpretability requirement (feedback traceable to observable cues) directly addresses concerns raised in [[educational-llm-alignment]] about opaque AI feedback, while the [[multimodal]] approach extends beyond text-only systems like [[cyberscholar-genai-writing-feedback]]. The closed-loop architecture shares philosophical ground with [[ai-tutor-behavioral-evaluation]]'s call for behavioral feedback loops, and the retrieval-augmented coaching component parallels [[retrieval-augmented-tutoring-algorithm-kite]]'s approach to grounded tutoring.

## Key Findings

1. A closed-loop [[intelligent-tutoring]] system combining seven-dimensional BARS scoring, [[multimodal]] analysis (facial, vocal, textual, oculomotor), and [[rag]]-grounded conversational coaching produced significant presentation-skill gains in a pre–post study: Cohen's d = 0.39–0.90 across all seven dimensions (N = 204, 30-day window), with the largest effects on Overall Rating (d = 0.90) and Nonverbal Expressiveness (d = 0.82).
2. An XGBoost backbone trained on 10,360 MOOC video segments achieved rubric-aligned scoring approaching expert ratings (R² = 0.48–0.61, ρ = 0.69–0.78, MAE = 0.43–0.57), with unimodal baselines far weaker (R² ≈ 0.12–0.32), demonstrating that no single signal captures the behavioral evidence expert raters use.
3. Interpretability is treated as a pedagogical requirement: [[automated-assessment]] with SHAP analysis showed modality importance is not proportional to feature count — the 203 acoustic features contributed 74.2% of predictive power for Voice & Talk despite facial features alone numbering 3,780 — so feedback can be traced to observable delivery cues.
4. Practice frequency, derived from system logs, showed a strong positive association with posttest performance after controlling for baseline scores and demographics, linking documented practice to behavioral change rather than mere exposure.
5. A pilot evaluation of the conversational AI tutor rated its coaching quality near that of professional communication experts (Krippendorff's α = .81; M = 4.10/5), supporting the pedagogical validity of the generated feedback.

## Background & the Gap

On-camera presentation has become a core competency across [[higher-ed]] and [[professional-training]], from [[online-teaching-and-learning]] MOOCs and video lectures to virtual job interviews and knowledge dissemination. Yet most learners still rely on self-recording and informal self-review, which raise awareness but rarely convert into observable behavioral change, while peer feedback and expert coaching are time-consuming, costly, and hard to scale consistently. Prior automated systems tended to fragment the problem: they assess delivery (prosody, facial expression) or coach spoken content, but rarely both within one learning process, and many emphasize predictive performance over explaining why a score was produced or how a learner might improve. Empirical evidence on actual learning effects also remains sparse. The authors reframe the [[intelligent-tutoring]] system as a closed-loop process in which multimodal analytic outputs are systematically transformed into feedback learners act on in subsequent attempts, consistent with work on [[affective-tutoring]] systems that extend ITS beyond cognitive skill to expressive aspects of performance.

## The Seven-Dimensional BARS Rubric

The system operationalizes oral-presentation quality through a Behaviorally Anchored Rating Scale (BARS) adapted for single-camera instructor video, decomposing performance into six analytic dimensions — Topic, Content, Clarity, Voice & Talk, Eye Contact, and Nonverbal Expressiveness — plus a global Overall Rating that captures the holistic audience impression formed when multiple cues are integrated. Each dimension is anchored at levels 1, 3, and 5 with intermediate ratings permitted. Roughly 30 experts in online presentation pedagogy annotated instructor videos from 120 teachers across three Taiwanese MOOC platforms (Hahow, TibaMe, TBK); each video was rated holistically by three independent annotators. Inter-rater reliability was strong (ICC(1,k) = 0.78–0.89 across dimensions), and the Overall Rating aligned closely with the analytic dimensions (Pearson's r = .85), supporting dimension-level scores as actionable reference points for [[feedback]] and iterative improvement.

## Multimodal Scoring with XGBoost

Four categories of speaker features — facial dynamics, oculomotor signals, acoustic prosody, and semantic content — are extracted from each 2-second speech-active video segment (10,360 segments via a sliding window, after voice-activity detection removed non-speech pauses). Facial features use MediaPipe FaceMesh's 478 three-dimensional landmarks grouped into seven anatomical regions, yielding a 3,780-dimensional dynamic vector; seven oculomotor indicators capture gaze stability, fixation dispersion, and directional variability; 203 prosodic and spectral acoustic descriptors (MFCCs, fundamental frequency, spectral statistics) are augmented by a speaker-level prosodic signature; and Whisper ASR transcripts are embedded with a sentence-transformer ([[educational-nlp]]) to produce 384-dimensional semantic representations. These are concatenated (early fusion) into a 4,374-dimensional representation fed to seven independent XGBoost regression models — one per BARS dimension. Hyperparameters are tuned by Bayesian optimization, and robustness is evaluated under speaker-independent cross-validation to avoid identity leakage. The authors justify interpretability as a pedagogical requirement rather than a modeling nicety: gradient-boosting trees yield direct feature-importance mappings that deep networks obscure.

## Three-Layer Feedback Architecture

The feedback ecosystem mirrors how learners perceive performance outcomes, their underlying causes, and the means of improvement. The first layer highlights rubric-aligned performance through presentation score cards emphasizing the Overall Rating plus the six sub-dimensions. The second layer provides emotion-aware expressive diagnostics: rather than claiming to read the speaker's internal emotional state, it uses observable, audience-facing expressive cues — facial and vocal emotion distributions across six basic emotions (anger, disgust, fear, happiness, sadness, surprise) and lexical valence–arousal orientations — as behavioral signals that interpret Nonverbal Expressiveness, Voice & Talk, and content dimensions. The third layer is a Conversational AI Tutor that translates analytic results into practice-oriented guidance, closing the loop and supporting [[self-regulated-learning]] by helping learners pinpoint where concentrated practice will pay off.

## Conversational AI Tutor & the Dashboard

The multimodal feedback dashboard integrates a summary report, BARS score cards, facial/vocal/lexical emotive-expression modules, and a rhetorical-guidance module that generates example-based script revisions (via GPT-4.1 under context engineering) to refine tone and persuasive intent. The Conversational AI Tutor, built on GPT-4.1 with a [[rag]] layer, anchors each response in analytic evidence retrieved from the learner's own records — transcripts, BARS-aligned scores, emotion descriptors, and multimodal feature summaries — and maintains longitudinal records across practice submissions. The tutor is organized as a small library of modular tutoring routines, each with a fixed instructional goal, required evidence fields, and an output schema that standardizes pedagogy and reduces stylistic drift. Its three current routines handle performance summarization, strength-and-weakness highlighting, and translating analytic indicators into learner-facing concepts. Phrasing draws on a curated library of expert coaching aligned to the BARS rubric and the GROW model (Goals, Reality, Options, Will), with the dialogue interface scaffolding reflection in the spirit of [[scaffolding]] approaches to tutoring.

## Empirical Validation & Interpretability

In a 30-day field study, 204 adult learners (an independent sample from the instructor cohort) submitted a pretest self-presentation video on a topic of their own choosing, used the dashboard and tutor, then submitted a posttest video on the same topic; 36 cases were excluded for lack of verifiable exposure or unprocessable media. Paired-sample tests showed significant gains across all seven dimensions (Cohen's d = 0.39–0.90), with the largest effects on Overall Rating (d = 0.90) and Nonverbal Expressiveness (d = 0.82), and delivery-related elements (voice use, eye contact, nonverbal expressiveness) shifting more than structure-related ones. A multiple regression with posttest Overall Rating as the outcome, controlling for pretest score and demographics, found that practice frequency showed a strong positive association with posttest performance, reinforcing a genuine practice-linked learning mechanism. SHAP-based modality attribution revealed interpretable, dimension-consistent reliance — acoustic features dominated Voice & Talk and Clarity, oculomotor features drove Eye Contact, textual features most strongly informed Topic and Content, and facial cues led Nonverbal Expressiveness — and a pilot of the tutor's feedback against professional coaching standards returned substantial inter-rater agreement (Krippendorff's α = .81; M = 4.10/5), evidencing the [[assessment-validity]] and perceived quality of the [[learning-analytics]]-driven feedback.

## Implications

For [[learning-analytics]] and [[automated-assessment]] researchers, the study demonstrates a template for turning multimodal behavioral evidence into rubric-aligned, interpretable scores whose reliability approaches expert judgment — and, critically, for tying those analytics to documented [[learning-gains]] rather than subjective perception. The closed-loop design, grounding conversational [[feedback]] in the learner's own retrieved records, offers a concrete model for building [[affective-computing]] and [[affective-tutoring]] into performance-based competencies. For practitioners and platform designers, the emphasis on practice frequency as a predictor of improvement argues for interfaces that encourage distributed practice and make expressive, delivery-oriented behaviors visible to learners in support of [[self-efficacy]] and [[student-engagement]]. The study also cautions that no single modality suffices for reliable behavioral scoring, validating investment in integrated multimodal pipelines. Future work should address the relatively moderate explained variance (R² up to 0.61), extend beyond self-selected MOOC populations and short windows, and examine whether gains transfer to real-world settings — a direction that connects to ongoing debates about [[transfer-of-learning]] and the long-term durability of feedback-driven skill acquisition in [[intelligent-tutoring]].

## Connected Concepts

- [[intelligent-tutoring]]
- [[rag]]
- [[affective-computing]]
- [[affective-tutoring]]
- [[multimodal]]
- [[student-modeling]]
- [[feedback]]
- [[professional-training]]
- [[student-engagement]]
## Connected Articles

- [[educational-llm-alignment]]
- [[cyberscholar-genai-writing-feedback]]
- [[ai-tutor-behavioral-evaluation]]
- [[retrieval-augmented-tutoring-algorithm-kite]]
## Citation

Hung-Yue Suen & Kuo-En Hung (2026). [*An Interpretable Closed-Loop Intelligent Tutoring System for Multimodal Affective Feedback in Asynchronous Presentation Training*](https://arxiv.org/abs/2605.17468). *IEEE Transactions on Learning Technologies*. DOI: 10.1109/TLT.2026.3693864
