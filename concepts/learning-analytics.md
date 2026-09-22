---
title: Learning Analytics
created: "2026-08-09T10:44:35-04:00"
updated: "2026-09-22T07:47:22-04:00"
type: concept
pedagogy: [student-engagement]
technology: [knowledge-tracing, student-modeling, edtech-platform]
assessment: [feedback, formative-assessment]
ethics: [privacy]
page_kind: [evaluation]
confidence: high
connected_faqs: [asynchronous-online-courses-ai]
methods: [ai-ed-evaluation]
---

> **Learning analytics** — the measurement, collection, analysis, and reporting of data about learners and their contexts for the purpose of understanding and optimizing learning. AI has transformed learning analytics from descriptive dashboards to predictive and prescriptive systems.

## Questions to Consider

- Most people assume collecting more learning data automatically improves education. The page argues analytics become meaningful only when they feed back into an intervention — otherwise they merely describe or flag without changing learning. Where have you seen data collected that never led to any action?
- Imagine a dashboard tells you a student is 'at risk' — a prediction. What separates that from genuinely actionable guidance that a teacher or institution can actually carry out? The page suggests prediction alone is not enough.
- The page notes AI has moved learning analytics from describing what happened to predicting what will happen and prescribing what to do next. Which of these three generations have you experienced, and what was missing in the others?
- In one study, three different AI models produced sharply different support plans for the same student data, and the links between analytics indicators and recommended help were mostly weak. What does this suggest about trusting an AI's advice at face value?
- Learning analytics sits in a privacy tension: the more granular the data, the more revealing — and the more powerful the intervention. Where would you draw the line on what is collected about you or your students, and who should decide?

## Introduction

### AI-enhanced analytics

- **Predictive analytics:** [[reinforcement-learning|Machine learning]] on learner interaction data predicts outcomes — from [[at-risk-students-ml-prediction|at-risk identification]] to [[knowledge-tracing|knowledge state estimation]].
- **Validation matters as much as prediction.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan, and Carvalho (2025)]] show that predictive knowledge-state models (BKT, BKT-with-Forgetting, AFM) look accurate when fit retroactively to a full session history, yet under **time-based cross-validation** — predicting the next session from prior ones, how analytics are actually deployed — they overestimate learner performance, miss spacing/forgetting dynamics, and can mis-order practice conditions. The caution for analytics: retrospective fit can mask poor forward predictive validity on longitudinal data, so indicator and dashboard models should be validated walk-forward.
- **[[curriculum-design|Curriculum]]-anchored predictive analytics:** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] estimate knowledge states within Outcome-Based Education by tracing course outcomes directly from LMS interaction and attainment data, using OBE affinity mappings (course–program outcome relations) to structure concept links and a memory-augmented network to model cross-outcome impact — reaching 89.81% AUC and beating DKT, DKVMN, EKT, and SimpleKT on live university engineering data, while staying only competitive (not superior) on general-purpose ASSISTments data.
- **Interpretable progress prediction with an action window:** [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]] predict module-level student progress in large-scale online [[cs-education|programming]] courses from content-interaction log features, using glass-box decision trees that match black-box accuracy (85–91%) while flagging "No submission" dropout outcomes up to 7–8 days before module deadlines — an explicit, real-time window for [[teacher-role|intervention]] rather than a bare risk flag, and an exploratory typology of disengaged-at-risk, disengaged-but-successful, and engaged high-performer profiles.
- **Federated, explainable risk modeling across institutions (2026).** [[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch et al. (2026)]] extend risk modeling beyond single-institution prediction by training a multitask (performance + dropout) model across simulated institutions via federated learning, so raw student data never leaves each institution. Under controlled heterogeneity (label skew, class imbalance, temporal drift, structural missingness) the model preserves ranking accuracy (OULAD AUC 0.918) and structurally stable feature-importance rankings, yet probabilistic calibration drifts — decoupling ranking performance from probability reliability. For early-warning systems this is a caution that threshold-based interventions may need per-institution calibration, and an argument for evaluating analytics along discrimination, calibration, robustness, and explainability at once.
- **Engagement analytics:** [[student-engagement|Engagement measurement]] and [[engagement-intensity-learner-modeling|intensity modeling]] quantify how students interact with AI systems.
- **Feedback analytics:** [[teaching-feedback-classification-benchmark|Feedback classification]] and [[ai-feedback-quality|quality assessment]] analyze the feedback students receive.
- **Network analysis:** [[misiejuk-cognitive-offloading-prompting-2026|Co-Occurrence Network Analysis]] and [[epistemic-emotions-collaborative-problem-solving|epistemic network analysis]] reveal interaction patterns.
- **Privacy tensions:** [[privacy]] concerns grow as analytics become more granular and AI-driven.

### The learning analytics cycle

Learning analytics is canonically framed as a cycle that begins with learner activity producing data, which is processed into measures and indicators that are then translated into **interventions** — and the intervention feeds back into learner activity to close the loop. The intervention step is what distinguishes analytics from mere monitoring or prediction: without it, analytics describe and flag but never change learning. This cycle is the organizing frame for understanding where AI tools (dashboards, feedback generators, prescriptive recommenders) sit in the pipeline and which step they automate.

### From description to intervention

Learning analytics has evolved through three generations in the knowledge base: descriptive (what happened?), predictive (what will happen?), and prescriptive (what should we do?). AI enables the prescriptive layer — analytics that directly trigger [[feedback|instructional interventions]]. A key frontier is the **actionability gap**: [[sc2r-counterfactual-recourse-educational-2026|SC2R (Le, Abel & Laforge 2026)]] shows that prediction alone is insufficient for decision support, and that counterfactual recourse becomes operationally meaningful only when recommendations are semantically feasible and machine-checkable — constrained by timing, budget, immutability, and availability via SHACL validation, rather than merely model-valid. This moves the field beyond risk scores toward recommendations that institutions can actually enact, with [[human-in-the-loop-ai|human oversight]] preserved.

A direct empirical test of the prescriptive layer comes from [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]], who asked three LLMs to recommend support plans for 4,500 [[simulating-students|synthetic student]] vignettes.

A complementary, teacher-centered test of how analytics reach the classroom comes from [[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain et al. (2026)]], who designed a learning analytics dashboard (DashED) to communicate ML-derived [[self-regulated-learning]] profiles to teachers in two blended contexts. Their 100-teacher study shows that the *presentation* of analytics is itself a barrier to action: teachers systematically preferred simpler, more traditional charts (bar plots, pie charts) even when more complex designs (e.g., heatmaps) yielded richer insights, and higher [[visualization|visualization literacy]] predicted deeper, more detailed interpretation (e.g., more teachers identifying trends in time-series data). For group comparison, teachers favored superposition over juxtaposition and full-information plots over explicit difference encoding. The actions teachers proposed were shaped by the content represented and their [[teacher-role]] level rather than the plot type — university teachers favored weekly tests and course-level adaptation, while vocational teachers proposed direct, individualized coaching — underscoring that the prescriptive step depends as much on how analytics are visualized and contextualized as on the underlying model. Their finding is cautionary: correlations between LA indicators and recommended support were mostly weak, cross-model recommendations diverged sharply for the same student, and support was frequently allocated regardless of who needed it most. The authors conclude that current LLMs are **not yet reliable as prescriptive models for student support at scale**, reinforcing that the prescriptive step still requires validation, fine-tuning, and human oversight rather than off-the-shelf automation.

### Methods and network analysis

Network methods are core to learning analytics: [[network-analysis|transition network analysis (TNA)]] models temporal sequences of learner actions (e.g., the revision and chat loops in [[conversational-ai|chatbot]]-scaffolded writing), and [[network-analysis|epistemic network analysis (ENA)]] maps how codes/constructs co-occur across activity — together revealing the *process* of learning and learner-[[student-ai-interaction|AI interaction]] rather than only its product.([[penny-transition-network-analysis-efl-writing-2026]])([[tracing-genai-literacy-interaction-patterns]])

- **Sequence + Markov-chain analysis of self-directed behavior.** [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] combined activity sequence analysis, hierarchical clustering, and Markov chain models on the clickstreams of 315 online learners who built 822 ecological models in VERA, distilling nine fine-grained, transition-based behavioral clusters into three broader patterns (Observation, Construction, Exploration). Their work demonstrates that combining sequence analysis with Markov chain modeling can uncover meaningful behavior in unstructured, [[self-directed-learning|self-directed]] tasks even in the complete absence of demographic or contextual data.

- **LA and GenAI shape learning design differently (2026).** [[claassen-learning-analytics-genai-learning-design-2026|Claassen et al. (2026)]] used ENA on 11 instructor focus groups to compare how learning analytics versus [[generative-ai]] inform [[learning-design]] decision-making. LA discussions centered on contextual information, course-level design, and creative [[problem-solving]] (LA for diagnosing engagement and targeting support), while GenAI discussions centered on [[assessment|assessment design]] and designing for student [[self-determination-theory|self-determination]] (GenAI for ideation and assessment development). Context and [[creativity]] were central across both — a reminder that analytics inform design only within [[pedagogy|pedagogical]] context and instructor autonomy.

- **Design analytics: mining planned activity sequences rather than traces (2026).** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec and Horvat (2026)]] applied Markov chains and sequential pattern mining to the *designed* sequence of 29,064 teaching and learning activities across 554 courses planned in an open learning-design tool. The transition matrix peaked at Assessment to Discussion (0.332), self-transitions dominated Practice (0.317) and Acquisition (0.292), and the strongest consecutive rule was Acquisition to Assessment to Practice to Practice (confidence 0.743, lift 1.449), while the most frequent four-step path was Acquisition, Practice, Practice, Assessment (120 occurrences). Discussion and Assessment were the most reachable types and Production the most distant and sporadic. The study is a reminder that learning analytics need not begin with LMS traces: design-time data can expose the pedagogical grammar of a course before any student arrives, though the authors stress that resemblance to flipped, inquiry-based or [[project-based-learning|project-based]] designs is not evidence of intent.

- **Self-explaining distilled LLMs (2026):** A two-stage pipeline distills a black-box learning-analytics estimator and its post-hoc interpretation into a small, open-weight [[llm]] that returns both an individual-level estimate and a natural-language explanation. A faithfulness-first audit evaluates whether narrations match the attributions they describe; [[simulation]] shows near-lossless recovery (r > .90) with an oracle mentor, offering a more transparent, deployable path for analytics ([[distilling-self-explaining-lm-learning-analytics-2026]]).

- **Enablers of LA-based educational interventions (2026).** [[learning-analytics-to-educational-interventions-2026|Svetec, Divjak & Kadoić (2026)]] identify and prioritize seven enablers of trustworthy LA-based educational interventions via Delphi + AHP + SNAP: [[governance|institutional]] strategic orientation, pedagogical & other [[research-methods-aied|research]] foundations, available resources, pedagogical support, ethics & data governance, stakeholder engagement, and quality assurance. Institutional strategic orientation ranked highest (and most influential on other enablers), with available resources second. [[trust|Trustworthiness]] (ethical compliance, transparent/unbiased algorithms, pedagogical validity) is framed as the prerequisite without which LA-based interventions are not meaningful.
- **LLM interaction depth predicts task quality but not recall (2026).** [[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]] links turn-level LLM conversational telemetry (Depth/Volume/Pacing) to [[learning-gains|learning outcomes]]: explanation-seeking "depth" predicted independently marked task quality (β = 6.27) but not immediate recall — a dissociation between elaboration-driven comprehension and retrieval-driven consolidation that has implications for how [[llm]] interaction is measured and evaluated in LA.
- **Simulating collaborative discourse for learning analytics.** [[llm-agents-collaborative-problem-solving-simulation-2026|Fang (2026)]] uses fine-tuned participant-specific LLM agents to reproduce collaborative problem solving dialogues, validated with Epistemic Network Analysis (ENA distance 0.17, permutation p = 0.65). The approach offers learning-analytics researchers a scalable way to generate authentic collaborative discourse for studying interaction dynamics, turn-taking, and thematic code trajectories without collecting new human data.
- **Open, reproducible data and trace-ready analytics.** [[astra-multi-agent-tutoring-benchmark-2026|ASTRA]] releases a synthetic [[benchmark]] with a trace-ready schema (N=540; 360 sessions; 1,440 episodes) for analyzing interaction and participation balance in collaborative programming. Log and trace data are the natural counterweight to [[self-report-measures|self-report]] in this literature: the same construct is often measured twice, once by asking and once by observing, and the two do not always agree. Separately, an exploratory ML framework with SHAP analysis identified the learning-related constructs most associated with intended academic ChatGPT use among university students, prioritizing [[explainable-ai|interpretability]] ([[determinants-chatgpt-use-higher-education-2026]]).

### Connections

Learning analytics connects to [[knowledge-tracing]] (the core analytic), [[formative-assessment]] (analytics-driven assessment), [[student-modeling]] (the learner representation analytics populate), [[privacy]] (the [[ethics|ethical]] constraint), and [[edtech-platform]] (where analytics are deployed). Because prescriptive analytics are increasingly evaluated on [[simulating-students|simulated learners]] — where synthetic student cohorts substitute for real cohorts in controlled tests — learning analytics also connects to student simulation.

- **What dashboards make visible decides what teachers act on.** [[ai-supported-lecturer-decision-making-2026|Köroğlu et al. (2026)]] reviewed 27 empirical studies (2016–2025) and built a socio-technical taxonomy of AI-supported lecturer decision-making across eight decision types: instructional, curriculum, assessment, feedback, learning-environment, emotional, administrative and ethical. Learning Analytics Dashboards were the most frequently reported system, and the coding shows support concentrated in the instructional, feedback and assessment decisions that behavioral text and log data can inform, while emotional, ethical, curriculum and learning-environment decisions were rarely supported. The authors read this as an attention effect rather than a capability limit: because the systems rendered behavioral student data visible and actionable, motivation, [[metacognition]], emotion and environment concerns fell outside what the data invited lecturers to consider.

Process-level instrumentation is the descriptive layer's next step down. [[pulla-parsons-problem-tool-2026|Prol et al. (2026)]] extended an [[open-source]] Parsons-problem platform to record every block placement, removal and submission as a chronological trace, pair each submission with per-block correctness coloring and an attempt history, and optionally pass the traces through an [[llm]] pipeline that labels recurring difficulty patterns for instructor review. Across 68 students in an upper-division Java software-design course and 36 in an introductory Python course the analysis surfaced the same three difficulties — choosing the wrong exception type, substituting `return` for `throw`, and incorrect control-flow ordering — which correctness-and-attempt counts cannot expose, because they answer *whether* the arrangement was right rather than *what the process was*. The AI acts as an interpreter for the [[teacher-role|instructor]] rather than a scorer of the student, and its output is framed as a reviewable hypothesis about a class's difficulties rather than a grade.

## Connected Concepts

- [[explainable-ai]]
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
- [[simulating-students]]
- [[self-report-measures]]
- [[recommender-systems-and-learning-paths]]
## Connected Articles
- [[ai-supported-lecturer-decision-making-2026]] — AI-Supported Lecturer Decision-Making in Higher Education
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Federated and explainable learning analytics for privacy-preserving academic risk modeling (Villegas-Ch et al. 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — What students ask matters: LLM interaction depth, task quality, and immediate recall (Tsiligkiris 2026)
- [[learning-analytics-to-educational-interventions-2026]] — From learning analytics to educational interventions: enablers of trustworthy LA-based interventions (Svetec, Divjak & Kadoić 2026)
- [[claassen-learning-analytics-genai-learning-design-2026]] — LA and GenAI in learning design decision-making
- [[at-risk-students-ml-prediction]]
- [[engagement-intensity-learner-modeling]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[teaching-feedback-classification-benchmark]]
- [[wordstream-glass-learning-analytics]]
- [[trace-course-grade-prediction-2026]]
- [[student-llm-interaction-taxonomy-review-2026]]
- [[sc2r-counterfactual-recourse-educational-2026]] — From Student Risk Prediction to SC2R: Counterfactual Recourse
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Bayesian cognitive diagnosis for personalized learning paths
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Distilling self-explaining LM for learning analytics
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Can AI deliver appropriate support for diverse student profiles? A large-scale evaluation
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — Fine-tuned participant-specific LLM agents reproducing collaborative problem solving dialogues (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — ASTRA synthetic benchmark for multi-agent tutoring and participation-balanced collaboration
- [[determinants-chatgpt-use-higher-education-2026]] — ML/SHAP determinants of future ChatGPT use in higher education
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Making ML findings accessible to teachers in blended classrooms
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Outcome-based knowledge tracing with affinity mapping
- [[an-goel-self-directed-modeling-2026]]
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[zhang-ml-student-progress-programming-2026]]
- [[learning-paths-patterns-learning-design-2026]] — Markov chain and pattern mining of 29,064 planned activities in 554 courses, revealing a design grammar led by Acquisition and consolidating Practice
- [[pulla-parsons-problem-tool-2026]] — Pulla: process-level behavioral tracing and instructor-facing difficulty analysis in Parsons problems (Prol et al. 2026)
- [[a4l-analytics-pipeline]]
- [[huang-interpretable-knowledge-tracing-2026]]
- [[league-ethical-governance-student-data-2026]]
- [[precision-education-student-digital-twins-2026]]
- [[learning-analytics-genai-secondary-writing-2026]] — Using Learning Analytics to Support Secondary School Students' Writing with Generative AI
