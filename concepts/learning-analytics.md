---
title: Learning Analytics
created: "2026-08-09T10:44:35-04:00"
updated: "2026-08-27T04:35:06.336963-04:00"
type: concept
tags: [knowledge-tracing, student-modeling, formative-assessment, privacy, edtech-platform, engagement-metrics, ai-ed-evaluation, feedback]

confidence: high
---

> **Learning analytics** — the measurement, collection, analysis, and reporting of data about learners and their contexts for the purpose of understanding and optimizing learning. AI has transformed learning analytics from descriptive dashboards to predictive and prescriptive systems.

### AI-enhanced analytics

- **Predictive analytics:** Machine learning on learner interaction data predicts outcomes — from [[at-risk-students-ml-prediction|at-risk identification]] to [[knowledge-tracing|knowledge state estimation]].
- **Engagement analytics:** [[student-engagement|Engagement measurement]] and [[engagement-intensity-learner-modeling|intensity modeling]] quantify how students interact with AI systems.
- **Feedback analytics:** [[teaching-feedback-classification-benchmark|Feedback classification]] and [[ai-feedback-quality|quality assessment]] analyze the feedback students receive.
- **Network analysis:** [[misiejuk-cognitive-offloading-prompting-2026|Co-Occurrence Network Analysis]] and [[epistemic-emotions-collaborative-problem-solving|epistemic network analysis]] reveal interaction patterns.
- **Privacy tensions:** [[privacy]] concerns grow as analytics become more granular and AI-driven.

### From description to intervention

Learning analytics has evolved through three generations in the wiki: descriptive (what happened?), predictive (what will happen?), and prescriptive (what should we do?). AI enables the prescriptive layer — analytics that directly trigger [[feedback|instructional interventions]]. A key frontier is the **actionability gap**: [[sc2r-counterfactual-recourse-educational-2026|SC2R (Le, Abel & Laforge 2026)]] shows that prediction alone is insufficient for decision support, and that counterfactual recourse becomes operationally meaningful only when recommendations are semantically feasible and machine-checkable — constrained by timing, budget, immutability, and availability via SHACL validation, rather than merely model-valid. This moves the field beyond risk scores toward recommendations that institutions can actually enact, with human oversight preserved.

A direct empirical test of the prescriptive layer comes from [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]], who asked three LLMs to recommend support plans for 4,500 synthetic student vignettes. Their finding is cautionary: correlations between LA indicators and recommended support were mostly weak, cross-model recommendations diverged sharply for the same student, and support was frequently allocated regardless of who needed it most. The authors conclude that current LLMs are **not yet reliable as prescriptive models for student support at scale**, reinforcing that the prescriptive step still requires validation, fine-tuning, and human oversight rather than off-the-shelf automation.

### Connections

Learning analytics connects to [[knowledge-tracing]] (the core analytic), [[formative-assessment]] (analytics-driven assessment), [[student-modeling]] (the learner representation analytics populate), [[privacy]] (the ethical constraint), and [[edtech-platform]] (where analytics are deployed).

Network methods are core to learning analytics: [[network-analysis|transition network analysis (TNA)]] models temporal sequences of learner actions (e.g., the revision and chat loops in chatbot-scaffolded writing), and [[network-analysis|epistemic network analysis (ENA)]] maps how codes/constructs co-occur across activity — together revealing the *process* of learning and learner-AI interaction rather than only its product.^[[penny-transition-network-analysis-efl-writing-2026]]^[[tracing-genai-literacy-interaction-patterns]]

- **Self-explaining distilled LLMs (2026):** A two-stage pipeline distills a black-box learning-analytics estimator and its post-hoc interpretation into a small, open-weight LLM that returns both an individual-level estimate and a natural-language explanation. A faithfulness-first audit evaluates whether narrations match the attributions they describe; simulation shows near-lossless recovery (r > .90) with an oracle mentor, offering a more transparent, deployable path for analytics ([[distilling-self-explaining-lm-learning-analytics-2026]]).

## Connected Concepts

- [[knowledge-tracing]]
- [[student-modeling]]
- [[formative-assessment]]
- [[privacy]]
- [[edtech-platform]]
- [[student-engagement]]
- [[ai-ed-evaluation]]
- [[feedback]]
- [[higher-ed]]
- [[k-12]]
- [[llm]]

## Connected Articles
- [[espino-ai-business-education-review-2026]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[interactive-online-learning-ai-2025]]
- [[ai-decision-support-online-learning-assessment-2026]]
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Ontology-based layered hybrid knowledge model for personalized e-learning
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — The StudyChat dataset of student–LLM dialogues in an AI course
- [[principal-trait-analysis-human-ai-skills-2026]] — Principal Trait Analysis: data-driven traits of human-AI collaboration
- [[nspa-neuro-symbolic-pedagogical-alignment-2026]] — Neuro-symbolic pedagogical alignment (NSPA)
- [[ai-guided-learning-audiovideo-2026]]

- [[at-risk-students-ml-prediction]]
- [[engagement-intensity-learner-modeling]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[teaching-feedback-classification-benchmark]]
- [[wordstream-glass-learning-analytics]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[trace-course-grade-prediction-2026]]
- [[student-llm-interaction-taxonomy-review-2026]]
- [[self-directed-growth-generative-ai-learning-analytics]]
- [[hao-human-ai-collaborative-problem-solving-cognition]]
- [[sc2r-counterfactual-recourse-educational-2026]] — From Student Risk Prediction to SC2R: Counterfactual Recourse
- [[student-ai-inquiry-types-cs2-2026]] — Analysis of Types of Inquiries in Student-AI Interaction
- [[shap-llm-rationales-teaching-quality-assessment]] — SHAP vs LLM rationales for teaching quality assessment
- [[eeg-familiarity-automated-assessment-2026]] — Automating Learner Assessment: EEG-Based Familiarity Prediction

- [[li-dbagent-llm-educational-agent-cs-2026]] — LLM-based educational agent (DBagent) in CS education
- [[lodge-adaptive-capabilities-genai-future-2026]] — Adaptive capabilities for assuring quality learning in a gen AI-integrated future (Lodge et al. 2026)

- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Bayesian cognitive diagnosis for personalized learning paths
- [[cogevolution-student-cognitive-evolution-agent-2026]] — CogEvolution: generative agent simulating students' cognitive evolution
- [[assessing-student-drive-framework-2025]] — DRIVE: assessing learning through GenAI interaction (DRI + Visible Expertise)
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Distilling self-explaining LM for learning analytics
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Can AI deliver appropriate support for diverse student profiles? A large-scale evaluation
