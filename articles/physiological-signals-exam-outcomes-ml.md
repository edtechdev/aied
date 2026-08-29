---
title: Leveraging Physiological Signals to Predict Exam Outcomes with Machine Learning
created: "2026-06-16T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [learning-analytics, edtech-platform, higher-ed, student-engagement, student-experience, rag, llm, k-12, machine-learning]
research_method: [benchmark]
audience: [student experience]
level: [higher ed, k 12]
category: [engagement]
sources: ['raw/papers/2606.14960.md']
confidence: medium
---

> Investigates ML models to predict exam outcomes from physiological data (electrodermal activity, heart rate, skin temperature) collected during exams. Evaluates logistic regression, random forest, SVM, transformers, LSTM, and GRU. Random forest often outperformed deep learning models while offering interpretability. Highlights value of physiological data for understanding student stress and real-time intervention potential.

## Key Findings

- Random forest predicts exam outcomes from physiological signals as well as deep learning models, with better interpretability and computational efficiency.
- Random forest achieved the highest mean performance (0.96), effectively modeling non-linear relationships in the data.
- GRU and LSTM models yielded reliable results with mean performance metrics of 0.92 and 0.93, demonstrating excellent generalization to unseen data.
- Transformers showed notable versatility on tabular data with a slightly lower mean metric of approximately 0.90, comparable to the LSTM and GRU models.
- SVM exhibited moderate performance (mean metrics around 0.74), while logistic regression performed lowest with mean metrics below 0.42, making it ill-suited to the dataset's complexity.

## Study Design & Method

Physiological stress indicators — electrodermal activity, heart rate, and skin temperature — were collected during examination sessions and analyzed to uncover their association with [[learning-gains|academic performance]]. A diverse set of machine learning approaches was employed, ranging from standard models (logistic regression, random forest, support vector machines) to advanced architectures (transformers, long short-term memory, and gated recurrent unit models), with a key focus on assessing the adaptability of transformers in processing numerical data. Standard performance metrics — accuracy, precision, recall, and F1-score — were used to compare model efficacy, and trend analysis was conducted across 30 replicates to examine the mean performance and consistency of the models.

## Implications for AI in Education

By elucidating the relationships between physiological signals and academic performance, this study contributes to understanding the stressors that affect students' mental health and promotes leveraging physiological data to enhance student well-being and academic outcomes. The results highlight the value of physiological data for real-time intervention: stress indicators gathered unobtrusively during exams could feed [[learning-analytics]] and [[affective-computing]] pipelines that flag struggling students before outcomes are finalized. The study also underscores the importance of experimenting with a broad class of models aligned with the objectives of the problem at hand, balancing precision, efficiency, and interpretability — a practical lesson for [[student-modeling]] in educational settings where model transparency matters for trust and adoption.

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
