---
title: "Analysing AI utilisation in education through learner question types: A constructivist approach"
created: "2026-09-14T05:10:00-04:00"
updated: "2026-09-17T02:27:38-04:00"
type: article
foundations: [critical-thinking]
pedagogy: [constructivist, scaffolding]
technology: [educational-nlp, generative-ai, human-in-the-loop-ai, personalized-learning]
research_method: [mixed methods, system development]
discipline: [information technology]
level: [higher ed]
page_kind: [framework]
audience: [instructors, researchers, instructional designers]
sources: ['raw/papers/lee-learner-question-types-ai-education-2026.md']
confidence: high
---

> **Synthesis:** Lee, Atif, and Kang (2026) reframe learner-generated questions as diagnostic signals of epistemic engagement in AI-mediated learning, classifying 434 authentic student queries from 12 information technology courses into three constructivist instructional roles: knowledge transmitter, facilitator, and co-learner. After [[human-in-the-loop-ai|human-in-the-loop]] to reach consensus (Fleiss' kappa rising from 0.60 to 0.83) and augmentation to 582 balanced questions, four transformer models of the [[educational-nlp|NLP]] family — baseline BERT, fine-tuned BERT, DeBERTa, and RoBERTa — were compared. DeBERTa achieved the highest overall accuracy (86.36%) and excelled on factual knowledge-transmitter items (96.67% precision), but all models struggled to separate higher-order facilitator and co-learner questions, where subtle contextual nuance and implicit intent proved decisive. The authors ground this gap in [[constructivist]] theory (Piaget, Vygotsky, Freire) and cognitive load theory: [[generative-ai|generative AI]] handles low-complexity transmission reliably while faltering at the [[scaffolding]] that the [[sociocultural-learning|zone of proximal development]] demands. The study's contribution is practical as much as technical — an LMS-embedded classification-and-[[feedback|feedback loop]] in which [[generative-ai|AI]] handles initial categorization while instructors validate outputs, so that [[personalized-learning|personalized]] feedback, curriculum diagnostics, and human [[pedagogy|pedagogical]] judgment remain aligned.

## Key Findings

- **DeBERTa led overall classification:** DeBERTa reached 86.36% accuracy, 87.18% precision, 86.36% recall, and an 86.52% F1 score, outperforming fine-tuned BERT (84.09% accuracy, 84.14% F1), RoBERTa (82.95% accuracy, 83.06% F1), and baseline BERT (81.82% accuracy, 81.95% F1).
- **Factual questions are easy; higher-order questions are not:** DeBERTa classified knowledge-transmitter (level 1) questions with 96.67% precision, but its level 2 (facilitator) precision fell to 78.79% — facilitator questions were the hardest category for every model.
- **Fine-tuned BERT excelled at co-learner recall, at a precision cost:** Fine-tuned BERT achieved 92.00% recall on level 3 (co-learner) questions but only 74.19% precision, indicating semantic overlap between the co-learner and facilitator categories.
- **Label quality improved through iteration:** Expert labeling of 434 questions yielded moderate reliability (Fleiss' kappa = 0.60; complete agreement on 264 questions), improving to kappa = 0.83 (complete agreement on 361) after a second consensus round.
- **Class imbalance was corrected by augmentation:** The original distribution (196 knowledge transmitter, 135 facilitator, 103 co-learner) was balanced to 582 questions (196 / 193 / 192) using back-translation and paraphrasing.
- **Three recurring error patterns emerged:** Conceptual similarity between roles, ambiguous learner intent (co-learner questions read as facilitator prompts), and technical complexity — where [[discipline-specific-aied|domain-specific]] phrasing was misread as cognitive depth.
- **Augmentation may have introduced lexical shortcuts:** The authors note that paraphrasing and back-translation may have pushed models to rely on lexical patterns rather than semantic depth.
- **Human oversight remains indispensable:** Misclassification between facilitator and co-learner roles means a fully automated system risks propagating errors, supporting a hybrid model with expert validation.

## Study Design & Method

- **Data source:** 434 authentic learner-generated questions collected as assignment appendices across 12 undergraduate and graduate information technology courses at an Australian university, spanning programming, data [[learning-analytics|analytics]], and software engineering; students used [[generative-ai|generative AI]] tools (e.g., ChatGPT) for brainstorming, idea refinement, and solution verification.
- **Participants:** 11 students enrolled in undergraduate and master's degree programs in IT, contributing questions that ranged from simple informational queries to complex [[problem-solving]] prompts.
- **Expert labeling:** Three external doctoral-level experts with more than 5 years of [[constructivist]] research experience conducted multi-phase focus group labeling, refining operational definitions (Phase 1), labeling independently with Fleiss' kappa checks (Phase 2), and validating the augmented set (Phase 3).
- **Augmentation:** Back-translation and paraphrasing expanded underrepresented categories, producing a balanced 582-question corpus reviewed by experts for alignment with role definitions.
- **Model comparison:** Baseline BERT (no fine-tuning), fine-tuned BERT (last three layers updated), DeBERTa, and RoBERTa, trained with a 70/15/15 train-validation-test split, 128-token maximum length, batch size 8, learning rate 2e-5, ReduceLROnPlateau scheduling, and early stopping (patience = 20 epochs) on Python 3.8, PyTorch 1.12.0, CUDA 11.2, and an NVIDIA RTX3070 GPU.
- **Evaluation and error analysis:** Accuracy, precision, recall, F1, and confusion matrices for [[quantitative-research|quantitative]] comparison, followed by manual [[qualitative-research|qualitative]] review of misclassified questions to derive [[educational-nlp|NLP]] failure patterns.
- **[[ethics]]:** Anonymised, non-identifiable student data with informed oral consent; participation was voluntary and unlinked to assessment, and [[governance|institutional]] guidance classified the study as low-risk, requiring no formal ethics review.

## Implications for AI in Education

- **Embed question classification in the LMS, with humans in the loop:** A [[formative-assessment]] system built into the LMS can classify learner questions in real time, but instructors should validate outputs — a collaborative model that combines [[generative-ai|AI]] throughput with pedagogical judgment.
- **Use inquiry depth as a diagnostic signal:** Distinguishing knowledge-transmitter, facilitator, and co-learner questions gives educators a structured view of epistemic engagement and lets [[personalized-learning|personalized]] responses escalate when a learner keeps asking only low-complexity factual questions.
- **Prompt deeper questioning deliberately:** If a student consistently asks factual questions, the system can nudge them toward reflective, [[critical-thinking|critical]] inquiries, developing [[metacognition]] and [[self-regulated-learning|self-regulation]].
- **Aggregate question data for [[curriculum-design|curriculum]] decisions:** Patterns of questions reveal topics where students struggle, letting instructors adjust content, sequence, or support before end-of-term assessment exposes gaps.
- **Plan for what NLP cannot yet do:** Because models confuse [[critical-thinking|higher-order]] facilitator and co-learner questions, deployments should pair classification with explainable outputs, bias checks, and [[guardrails|ethical guidelines]] rather than relying on automation alone.
- **Broaden the evidence base beyond IT:** The corpus is confined to IT courses, so generalizing to [[humanities-education|humanities]], social sciences, and [[stem-education|STEM]] requires cross-disciplinary and longitudinal validation before institutional-scale adoption.

## Connected Concepts

- [[constructivist]]
- [[educational-nlp]]
- [[human-in-the-loop-ai]]
- [[personalized-learning]]
- [[scaffolding]]
- [[student-ai-interaction]]
- [[teacher-role]]

## Connected Articles

- [[student-ai-inquiry-types-cs2-2026]] — Typology of student AI inquiry types in computing education
- [[llm-educational-question-cognitive-depth]] — LLMs and the cognitive depth of educational questions
- [[cross-dataset-bloom-question-classification]] — Cross-dataset classification of questions by Bloom level
- [[generative-ai-mediational-agent-sociocultural-2026]] — GenAI as a mediational agent in sociocultural learning
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive scaffolding and cognitive engagement in tutoring systems

## Citation

Lee, H., Atif, A., & Kang, K. (2026). [*Analysing AI utilisation in education through learner question types: A constructivist approach*](https://doi.org/10.14742/ajet.10657). *Australasian Journal of Educational Technology*, 42(2), 77–94.