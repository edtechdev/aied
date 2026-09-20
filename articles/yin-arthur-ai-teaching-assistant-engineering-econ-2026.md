---
title: "Arthur: An artificial intelligence powered teaching assistant system for Engineering Economics class"
created: "2026-09-03T14:00:00-04:00"
updated: "2026-09-19T07:22:56-04:00"
type: article
technology: [intelligent-tutoring, machine-learning]
assessment: [feedback, formative-assessment]
methods: [benchmark]
sources: ['raw/papers/yin-arthur-ai-teaching-assistant-engineering-econ-2026.md']
confidence: high
research_method: [system development]
audience: [instructors, edtech designers, software developers]
level: [higher ed]
discipline: [engineering education]
---

> **Synthesis:** **Arthur: An artificial intelligence powered teaching assistant system for Engineering Economics class** — Yin, Karakaya, Bass, and Cai (2026) introduce Arthur, an AI-powered [[intelligent-tutoring|teaching assistant]] that delivers real-time, personalized [[feedback]] on Calculated Formula Questions (CFQs) in an undergraduate Engineering Economics course, a domain where handwritten, unstructured solutions have previously blocked AI support. The authors propose a full life-cycle framework spanning data curation, data augmentation, model training, and student-facing deployment, training an [[machine-learning|XGBoost]] "solution diagnosis backbone" per CFQ to predict likely mistakes from students' submitted numerical answers. A dialogue-based interaction scheme and question-bank web interface operationalize the system to balance feedback accuracy against collection efficiency within [[higher-ed|higher education]] [[engineering-education|engineering courses]].

## Key Findings

- **A full life-cycle framework for unstructured CFQs.** The study's core novelty is a comprehensive pipeline—hand-written data curation from previously graded [[assessment|graded submissions]], random-masking data augmentation, AI backbone training, and student-facing interface deployment—providing a scalable pathway for [[intelligent-tutoring|ITS]] in [[engineering-education|engineering]] courses where pen-and-paper solutions lack structured digital data, unlike multiple-choice, coding, or essay assignments.

- **Three data barriers addressed.** Existing AI tutoring feedback work was constrained to assignments with readily available structured data. For open-ended CFQs, the authors overcome (1) rare digitalization of handwritten solutions, (2) multiple valid solution approaches that complicate diagnosis evidence, and (3) small-scale, imbalanced datasets drawn only from incorrect submissions.

- **Random masking for data augmentation.** Adapting an NLP-style masking idea (Devlin et al., 2019), the authors generate augmented training copies by masking input features to "NaN" at varying probabilities α (0.1–0.9), preserving the logical dependencies of tabular solution data while simulating students who provide partial answers—outperforming interpolation approaches like SMOTE that would violate CFQ structure.

- **XGBoost solution diagnosis backbones.** Each CFQ gets its own dedicated multi-label classification backbone mapping intermediate and final numerical answers (X) to instructor rubric mistake labels (Y). The model diagnoses mistakes from submitted numbers alone, bypassing access to full written solutions, and achieves an average precision of 0.81, recall of 0.79, and accuracy of 0.65.

- **Intermediate answers and augmentation improve diagnosis.** Ablation experiments (five-fold CV, paired t-tests) show that training and testing with both intermediate and final answers yields the best performance, and that random-masking augmentation significantly improves results over full-features-only training. Training on only final answers gives good but not best results and is more straightforward to collect.

- **Dialogue-based interaction to balance accuracy and efficiency.** Rather than forcing full answers (which can constrain students' problem-solving), Arthur starts by requesting only the final answer, then iteratively prompts for specific intermediate answers when the backbone's prediction confidence falls below a 0.8 threshold—adaptively reducing false positives and the burden on [[student-ai-interaction|student input]].

- **Operationalization and generalizability.** The system was deployed as a web interface with a curated question bank covering ten Engineering Economics topics, integrating rubric labels into natural-language feedback templates. The framework is designed to generalize to CFQs in other engineering disciplines, with discussion of representation and interaction biases, human annotation error, and opportunities for [[generative-ai|LLMs]] to automate handwriting recognition.

## What this means for practice

- **Instructors.** Start each feedback dialogue with the final answer and request intermediate answers only when the model's confidence falls below the 0.8 threshold, which preserves students' own solution approaches while reducing false positives.
- **EdTech designers.** Augment small, imbalanced rubric datasets with random masking rather than interpolation such as SMOTE, which would violate the logical dependencies of calculated-formula solutions while masking at probabilities from 0.1 to 0.9 preserves them.
- **Instructors.** Keep collecting intermediate answers during grading: models trained and tested on intermediate plus final answers outperformed those using final answers alone, which matters most for the less frequent mistakes.
- **EdTech designers.** Budget for per-question models and course expertise — each calculated formula question needs its own XGBoost backbone and a careful identification of critical intermediate answers before deployment.
- **Instructors.** Disclose the system's limits inside the course, as this deployment did by informing students of Arthur's limitations, enabling feedback uploads to improve the system, and offering office hours for clarification.

## Limitations

- Evidence comes from a single undergraduate Engineering Economics course and ten calculated formula questions, with training data hand-curated from previous semesters' graded handwritten submissions — a small, imbalanced dataset that random masking was used to enlarge artificially.
- Prediction quality is modest: precision 0.81 and recall 0.79 but accuracy 0.65, so roughly a third of exact-match mistake diagnoses are wrong, which is why the authors had the system inform students of its own limitations.
- No learning outcome was measured: the study reports model performance and a deployed question-bank website, not student performance with the feedback.
- Course-specific expertise is still required to choose questions and critical intermediate answers, which the authors name first among their three limitations because it restricts how far the question bank can expand; they also flag representation bias from imbalanced mistake frequency and interaction bias as risks.

## Connected Concepts

- [[intelligent-tutoring]]
- [[formative-assessment]]
- [[feedback]]
- [[machine-learning]]
- [[higher-ed]]
- [[engineering-education]]

## Connected Articles

- [[reddig-maclellan-personalized-feedback-llm-2026]] — LLM-based error diagnosis and personalized feedback for tutors on structured problems
- [[yasir-llm-tutoring-agents-2026]] — diagnosing feedback gaps in AI tutoring
- [[making-ai-tutoring-productive-mastery-math-2026]] — productive AI tutoring for mastery learning in mathematics
- [[llm-formative-feedback-systematic-review-2026]] — systematic evidence on LLM-generated formative feedback
- [[oatutor-open-source-adaptive-tutor-2023]] — an open-source adaptive tutoring platform

## Citation

Yin, Z., Karakaya, E., Bass, K., & Cai, H. (2026). [Arthur: An artificial intelligence powered teaching assistant system for Engineering Economics class](https://doi.org/10.1016/j.ijaied.2026.100003). *International Journal of Artificial Intelligence in Education*, 36, Article 100003.
