---
title: "An AI-Powered Culturally Aware Chatbot for Stress Detection and Wellness Support among Pakistani University Students Using NLP and Machine Learning"
created: "2026-09-11T09:35:00-04:00"
updated: "2026-09-11T09:35:00-04:00"
type: article
tags: [well-being, ai-anxiety-and-stress, conversational-ai, machine-learning, culturally-relevant-pedagogy, global-south, equity-in-ai-education, ethics, higher-ed]
sources: ['raw/papers/2609.11199.md']
confidence: medium
---

> **Synthesis:** Bashir and Afzal describe *Sukoon*, a hybrid system that pairs a [[machine-learning|machine-learning]] stress classifier with a culturally adapted [[conversational-ai|conversational]] chatbot for Pakistani university students. A Random Forest model trained on 1,100 survey responses across 20 features reaches 89.09% accuracy over three stress levels, and its output drives a Stepped Care response architecture in which an [[open-source]] [[llm]] delivers tiered wellness guidance in English, Urdu and Roman Urdu. The most culturally significant finding is that teacher-student relationship was the second-strongest predictor of [[ai-anxiety-and-stress|student stress]] (10.0%), behind blood pressure — evidence, the authors argue, that [[global-south|region-specific]] [[well-being|wellbeing]] support cannot be imported from Western tools. The paper is a system-and-pipeline contribution evaluated on classification accuracy and simulated conversations rather than on student outcomes.

## Why culturally grounded wellbeing support

The authors frame the problem as a mismatch between available digital [[well-being|mental health]] tools and the students who would use them. Existing chatbots are built and trained on Western datasets and are overwhelmingly English-language, yet students in Pakistan often think, feel and express distress in Urdu or Roman Urdu. They also describe a *compounded* stress profile — academic, financial, familial and relational pressures simultaneously — rather than the one-or-two dominant stressors typical of the Western literature. Because open discussion of emotional difficulty carries social stigma, students frequently do not raise these issues with parents, teachers or peers, which is precisely where a private, always-available conversational agent appears attractive.

The paper positions *Sukoon* against two adjacent lines of work: [[machine-learning|ML]] stress classification from survey data (which it notes has been shown to work on modest datasets but has not been built for South Asian contexts) and low-cost mental-health chatbots in other low-resource settings (a Zimbabwean Rasa-based system is cited approvingly but as context-specific). It also draws on evidence that general-purpose [[llm|large language models]] show substantial multicultural and contextual deficits in therapeutic settings, arguing for culturally adaptive design rather than prompt-level tinkering.

## Data and classification model

The classifier is trained on a publicly released student-stress dataset of 1,100 responses across 20 features grouped into five dimensions: psychological (anxiety, self-esteem, mental-health history, depression), physiological (headache, blood pressure, sleep quality, breathing problems), environmental (noise, living conditions, safety, basic needs), academic (performance, study load, teacher-student relationship, career concerns) and social (social support, peer pressure, extracurriculars, bullying). Preprocessing includes missing-value checks, a stratified 70/15/15 train–validation–test split and `StandardScaler` fitted on training data only to avoid leakage.

A Random Forest classifier (100 estimators) was chosen for its performance on tabular survey data and its native feature importances, and was benchmarked against a Support Vector Machine on the same splits:

1. Random Forest: 89.09% accuracy, 0.89 macro F1 (Low 0.87, Moderate 0.92, High 0.89).
2. SVM: 88.48% accuracy, 0.89 macro F1.
3. Prior comparable work on a similar but smaller and less balanced dataset: 87.93%.

Class-level precision and recall are reported as reasonably uniform (precision 0.94/0.89/0.85; recall 0.80/0.94/0.93 for Low/Moderate/High). The confusion-matrix pattern the authors foreground — Low misclassified as Moderate — is treated as a benign error direction for a wellness deployment: over-estimating stress routes a student to more support, whereas the inverse error is rare and is the one the design tries to avoid.

## Feature importance and the teacher-student relationship finding

[[explainable-ai|Feature importance]] places blood pressure first (15.6%), consistent with the bi-directional stress–blood-pressure association documented in exam-period college samples, followed by **teacher-student relationship (10.0%)**, sleep quality (9.3%), depression (8.3%) and social support (7.6%). Ranked ninth, and notably weak, was anxiety level (4.8%) — the authors read this as evidence that student [[ai-anxiety-and-stress|stress]] is multi-dimensional rather than driven by a single psychological indicator.

The ranked second place of the teacher-student relationship is the paper's culturally distinctive claim. The authors attribute it to the comparatively hierarchical educational environment in Pakistan, where power imbalance and limited academic support structure [[student-experience|student experience]] in ways that Western-instrumented tools do not capture. They present this as a hypothesis requiring locally collected data rather than a settled finding — a reasonable hedge, since the dataset is not Pakistani and feature importances are model-relative.

## The Stepped Care chatbot layer and pipeline

Classification output is mapped onto three response tiers inspired by the Stepped Care Model, escalating tone and support intensity with detected severity: warm and encouraging at low stress, grounding and non-judgemental at high stress. Cultural specificity is carried by a system prompt that instructs the model to respond consistently with Pakistani social and cultural norms, to use Urdu and Roman Urdu expressions where appropriate, and to show sensitivity to stressors such as family expectations, financial pressure and hierarchical teacher relationships.

The end-to-end pipeline is a 20-question [[multilingual-learning|bilingual]] assessment in a Flask web application, preprocessing and Random Forest classification on the backend, then an automatic hand-off to the chatbot interface with a tier-appropriate opening message. Subsequent turns run on GLM-4.5-Air through the OpenRouter API, with the full conversation history and the culturally adapted system prompt re-sent on every turn so the dialogue stays in context. Keeping the conversational layer open-source was a deliberate [[equity-in-ai-education|access]] choice for deployment in regional universities with limited resources.

## Evaluation, limits and open questions

Two evaluations are reported. The classifier is evaluated on the held-out test set (n=165) as described above. The chatbot is assessed only through a preliminary [[qualitative-research|qualitative]] pass with simulated user inputs covering exam, family, financial and teacher-related concerns, plus informal [[usability-research|usability]] testing of the assessment-to-chatbot transition; the authors state plainly that this is a functional check, not a formal user study.

The limitations are substantive and self-reported: the training data is not representative of Pakistani students, so the feature-importance conclusions are preliminary; the chatbot has not been evaluated with students on cultural appropriateness, emotional safety or satisfaction; the system is English at its core with prompted Urdu expressions rather than a genuinely bilingual NLP pipeline; and the classifier was validated on a single stratified split without k-fold confidence intervals. Future work commits to Urdu-translated DASS-21 primary data collection from Pakistani universities, particularly among students moving from FSc into undergraduate study, and to formal evaluation of the conversational layer.

Because a [[machine-learning|trained classifier]] decides the support tier, several [[governance]] questions remain open rather than addressed: what happens when a student is misclassified in the harmful direction, how distress disclosures are stored and what [[privacy]] protections apply in a university setting, and how escalation to human counselling is operationalised when the high-stress tier only *asks* the model to point toward professional services. The system is explicitly not presented as a [[medical-education|clinical]] diagnostic or therapy tool, and the authors note attention to avoiding stigmatising language in high-stress responses — but the boundary between [[human-in-the-loop-ai|human oversight]] and automated encouragement is left as a design question for the deployment stage.

## Connected Concepts
- [[well-being]] — student mental-health support as an AI application area
- [[ai-anxiety-and-stress]] — stress measurement and its multidimensional predictors
- [[conversational-ai]] — chatbot dialogue as the delivery mechanism for support
- [[machine-learning]] — Random Forest classification and feature-importance analysis
- [[culturally-relevant-pedagogy]] — cultural adaptation of the system prompt and response tiers
- [[global-south]] — region-specific tooling for an under-served student population
- [[equity-in-ai-education]] — open-source models and low-resource deployment constraints
- [[ethics]] — responsible design boundaries for health-adjacent AI
- [[privacy]] — handling distress disclosures from students
- [[human-in-the-loop-ai]] — escalation paths from automated support to counselling
- [[higher-ed]] — the university context in which Sukoon is deployed
- [[personalized-learning]] — tiering support to an individual's detected state

## Connected Articles
- [[ai-campus-wellbeing-tools]] — AI Campus Wellbeing Tools
- [[lopez-pernas-llm-appropriate-student-support-2026]] — LLMs for Appropriate Student Support
- [[nguyen-genai-global-south-review-2026]] — Generative AI in the Global South
- [[colbran-student-perspectives-genai-chatbots-2026]] — Student Perspectives on GenAI Chatbots
- [[zhang-ai-anxiety-academic-motivation-emotion-2026]] — AI Anxiety, Academic Motivation and Emotion
- [[wu-psychological-adaptation-ai-japanese-learning-2026]] — Psychological Adaptation in AI-Assisted Language Learning
- [[empathy-coaching-chatbot]] — Empathy Coaching Chatbot
- [[scheu-mobile-chatbot-journaling-motivation-2026]] — Mobile Chatbot Journaling and Motivation
- [[kim-ai-anxiety-comprehensive-analysis]] — AI Anxiety: A Comprehensive Analysis

## Citation
Bashir, M. F., & Afzal, M. (2026). [An AI-Powered Culturally Aware Chatbot for Stress Detection and Wellness Support among Pakistani University Students Using NLP and Machine Learning](https://arxiv.org/abs/2609.11199). arXiv preprint arXiv:2609.11199.
