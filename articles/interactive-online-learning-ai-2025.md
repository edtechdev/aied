---
title: 'Interactive Online Learning Method for Students Based on Artificial Intelligence'
created: "2026-08-20T04:40:00-04:00"
updated: "2026-08-20T04:40:00-04:00"
type: article
tags: [online-teaching-and-learning, machine-learning, student-modeling, personalized-learning, adaptive-learning, ai-education]
research_method: [benchmark]
audience: [learners, software developers]
sources: ['raw/papers/interactive-online-learning-ai-2025.md']
confidence: medium
---

> **Synthesis:** Li and Yin (2025) propose a hybrid **DMO-GRU** framework for AI-powered interactive online learning, combining the Dwarf Mongoose Optimization (DMO) algorithm with a Gated Recurrent Unit (GRU) neural network. DMO performs feature selection and automatic hyperparameter tuning, while GRU captures temporal patterns in sequential student data. Evaluated on classification and regression tasks against Linear Regression, Random Forest, SVR, and XGBoost, the model reports superior accuracy (91.2%), F1-score (90.8%), precision (90.1%), recall (92.5%), and the lowest error (MAE 2.70, RMSE 3.40, R² 0.92), while also supporting interactive audio, video, and one-to-one learning modes intended to boost engagement.

## Key Findings

- **Best classification performance:** DMO-GRU achieved 91.2% accuracy, 90.1% precision, 92.5% recall (sensitivity), 89.8% specificity, and a 90.8% F1-score, outperforming GRU, LSTM, CNN-GRU, Random Forest, and XGBoost baselines.
- **Lowest prediction error:** On regression metrics the proposed model posted MAE of 2.70 and RMSE of 3.40 versus XGBoost (3.50/4.70), Random Forest (3.90/5.00), SVR (4.20/5.50), and Linear Regression (4.80/6.20), with the highest R² score (0.92).
- **Efficient training:** DMO-GRU trained in ~98 s — far faster than LSTM (138 s) and CNN-GRU (150 s) — while remaining more accurate than the faster classical models.
- **Automatic tuning and interpretability:** DMO auto-optimizes GRU hyperparameters (learning rate, batch size, hidden units, dropout); the paper points to SHAP/LIME and attention visualizations to improve model interpretability for practitioners.
- **Engagement supports:** The system integrates synchronous interactive modes — two-way audio classrooms, one-to-many video classrooms, and one-to-one video sessions — intended to improve learner engagement and mimic the traditional classroom online.

## Study Design & Method

The study is presented as a hybrid modeling effort built on a literature review of AI in online/interactive education (sources from IEEE Xplore, ACM, and Google Scholar, largely the last decade). Data preprocessing removed or imputed missing values, normalized numeric features with Min–Max scaling, one-hot encoded categorical variables, excluded outliers via Z-score (|Z| > 3), and applied SMOTE for class imbalance.

The core contribution is the **DMO-GRU** framework: DMO (modelled on dwarf mongoose foraging, with alpha/scout/babysitter groups and an added Learning Strategy) performs feature selection and hyperparameter tuning, while a GRU network — with reset and update gates to handle the gradient-vanishing problem in sequence learning — captures temporal patterns in student engagement and performance. The model was evaluated against GRU, LSTM, CNN-GRU, Random Forest, and XGBoost using classification metrics (accuracy, precision, recall, sensitivity, specificity, F1) and regression metrics (MAE, RMSE, R²), with training time reported. Experiments were run in MATLAB R2023a. The authors acknowledge limitations: dependence on benchmark datasets, limited real-world testing, model interpretability concerns, and limited attention to ethical issues such as data protection and fairness.

## Implications for AI in Education

The DMO-GRU framework illustrates a growing pattern in the knowledge base's domain: combining an optimizer with a sequence model to make student performance prediction more accurate and efficient, and using that prediction to drive [[adaptive-learning|adaptive]] and [[personalized-learning|personalized]] delivery. Its claimed ability to classify learners as engaged versus disengaged or at-risk supports early intervention and real-time [[learning-analytics|educational analytics]] in [[online-teaching-and-learning|online learning]] platforms. The emphasis on lightweight architecture, automatic hyperparameter tuning, and interpretability tools (SHAP/LIME, attention) aligns with practical deployment concerns — though the paper's own acknowledged limitations (benchmark-only validation, limited real-world data, under-examined ethics) counsel treating the reported gains as preliminary rather than established.

## Connected Concepts

- [[online-teaching-and-learning]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[student-modeling]]
- [[learning-analytics]]
- [[student-engagement]]
- [[ai-education]]

## Connected Articles

- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — Generative AI and [[learning-gains|learning outcomes]]
- [[tam-critical-use-genai-engineering-2026]] — Technology acceptance in AI-assisted learning
- [[learnai-just-in-time-ai-cocreation-university-2026]] — AI cocreation and just-in-time support
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — AI in formative assessment and instructor roles

## Citation

Li, C., & Yin, W. (2025). [*Interactive online learning method for students based on artificial intelligence*](https://doi.org/10.1007/s44163-025-00401-x). *Discover Artificial Intelligence*, 5, 201.
