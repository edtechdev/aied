---
title: Leveraging Physiological Signals to Predict Exam Outcomes with Machine Learning
created: "2026-06-16T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
pedagogy: [student-engagement]
technology: [learning-analytics, llm, machine-learning, rag, edtech-platform]
methods: [benchmark]
stakeholders: [student-experience]
audience: [learners]
level: [higher ed, k 12]
sources: ['raw/papers/2606.14960.md']
confidence: medium
---

> **Synthesis:** Investigates ML models to predict exam outcomes from physiological data (electrodermal activity, heart rate, skin temperature) collected during exams. Evaluates logistic regression, random forest, SVM, transformers, LSTM, and GRU. Random forest often outperformed deep learning models while offering interpretability. Highlights value of physiological data for understanding student stress and real-time intervention potential.

## Key Findings

- Random forest predicts exam outcomes from physiological signals as well as deep learning models, with better interpretability and computational efficiency.
- Random forest achieved the highest mean performance (0.96), effectively modeling non-linear relationships in the data.
- GRU and LSTM models yielded reliable results with mean performance metrics of 0.92 and 0.93, demonstrating excellent generalization to unseen data.
- Transformers showed notable versatility on tabular data with a slightly lower mean metric of approximately 0.90, comparable to the LSTM and GRU models.
- SVM exhibited moderate performance (mean metrics around 0.74), while logistic regression performed lowest with mean metrics below 0.42, making it ill-suited to the dataset's complexity.

## Study Design & Method

Physiological stress indicators — electrodermal activity, heart rate, and skin temperature — were collected during examination sessions and analyzed to uncover their association with [[learning-gains|academic performance]]. A diverse set of [[reinforcement-learning|machine learning]] approaches was employed, ranging from standard models (logistic regression, random forest, support vector machines) to advanced architectures (transformers, long short-term memory, and gated recurrent unit models), with a key focus on assessing the adaptability of transformers in processing numerical data. Standard performance metrics — accuracy, precision, recall, and F1-score — were used to compare model efficacy, and trend analysis was conducted across 30 replicates to examine the mean performance and consistency of the models.

## What this means for practice

- **Learners.** Ask what a stress-prediction tool is actually measuring before you trust its verdict: the top three predictors in this study were electrodermal activity, accelerometer movement, and skin temperature — physiological arousal and motion, not comprehension.
- **Learners.** Treat any predicted exam outcome as one signal among several; the authors state that predictions derived from physiological data should be interpreted alongside personal circumstances, environmental conditions, and mental health considerations before any high-stakes decision.
- **Learners.** Prefer transparent models when a prediction affects you: the random forest reached a mean accuracy of 0.9590 with variability of 0.0003 and published its feature importance, while the SVM's kernel made actual feature importance not feasible.
- **Learners.** Expect exam-stress monitoring to be framed as early well-being support — the value the authors claim is unobtrusive flagging of struggling students before outcomes are finalized and feeding [[learning-analytics]] and [[affective-computing]] pipelines — rather than as a grading instrument for [[well-being|student well-being]].

## Limitations

- The dataset covers only 10 college students wearing an Empatica E4 wristband, so every model comparison rests on a very small sample.
- Data come from three exam sessions — Midterm 1, Midterm 2, and the Final exam, 1.5 hours and 3 hours long respectively — drawn from one open-access PhysioNet dataset, i.e. a single cohort in a single setting.
- The prediction target is coarse: grades were normalized and assigned values from 0 to 4, then categorized into letter grades ranging from A to F, so the models predict a grade category rather than a fine-grained score.
- Rows with missing values were removed to maintain dataset integrity, and logistic regression and SVM were omitted from the variability analysis because of their deterministic behavior, so the 30-replicate consistency comparison covers only four of the six models.

## Connected Concepts
- [[educational-measurement]]
- [[ai-ed-evaluation]]
- [[well-being]]

- [[affective-computing]]
- [[learning-analytics]]
- [[human-in-the-loop-ai]]
- [[affective-tutoring]]
## Connected Articles

- [[genai-tutor-engagement-patterns]] — Not All Students Engage Alike: Multi-Institution Patterns in GenAI Tutor Use
- [[edumirror-educational-social-dynamics]] — EduMirror: Modeling Educational Social Dynamics with Value-driven Multi-agent Simulation
- [[dynamic-skill-matching-capstone-teams]] — Improving Capstone Team Outcomes through Dynamic Skill Matching and Preference Alignment
- [[hypergamification-game-engine-lms]] — Hypergamigication Through Integrating Game Engines and Learning Management Systems: Ender's Game
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple Domains
- [[llm-sentiment-analysis-education-research]] — LLM-assisted sentiment analysis for integrated computational and qualitative mixed methods education research: A case study of students' written reflection assignments

## Citation

Lala Yamazaki, Ramchandra Rimal (2026). [Leveraging Physiological Signals to Predict Exam Outcomes with Machine Learning](https://arxiv.org/abs/2606.14960). arXiv preprint.
