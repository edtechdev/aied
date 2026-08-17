---
title: Explainable Artificial Intelligence in Education (XAI-ED)
created: "2026-05-21T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [intelligent-tutoring, learning-analytics, bias-mitigation, equity, privacy, metacognition, teacher-role, student-experience, adaptive-learning, ai-literacy]
sources: ['raw/papers/khosravi-xai-education-2022.md']
confidence: high
---

📄 DOI: 10.1016/j.caeai.2022.100074

## Core Contribution

This paper introduces **XAI-ED**, a framework for explainable AI that is purpose-built for education. It argues that while XAI in education shares common ground with broader XAI (accountability, fairness, privacy), education has *distinctive needs*: learning data is noisy at many levels, explanations can directly support metacognition and self-regulated learning, and different stakeholders need fundamentally different kinds of explanations.

## The XAI-ED Framework — Six Aspects

### 1. Stakeholders
XAI in education must serve multiple audiences — learners, teachers, administrators, parents, researchers, developers, and policymakers — each with different explainability requirements. A learner needs to understand *why* a hint was given; a teacher needs to understand *which* students are at risk and *why*; a developer needs to debug model behavior. This connects to [[teacher-role]] and [[student-experience]] research on multi-stakeholder design.

### 2. Benefits
Explanations serve multiple purposes in educational contexts:
- **Trust** — building confidence in AI-driven recommendations and assessments
- **Fairness** — detecting and mitigating algorithmic [[bias-mitigation]]
- **Debugging** — helping developers and researchers identify model flaws
- **Usability** — making AI interfaces more transparent and actionable
- **Learning** — explanations as *pedagogical tools* that support [[metacognition]]
- **Regulatory compliance** — GDPR right to explanation and similar mandates ([[privacy]], [[regulation]])
- **Adoption** — reducing resistance to AI tools among educators

### 3. Approaches for Presenting Explanations
The paper catalogs multiple explanation modalities: visual (heatmaps, decision trees), textual (natural language), example-based (counterfactuals, nearest neighbors), feature importance rankings, rule extraction, and model simplification. The key insight is that the optimal approach depends on the stakeholder and the pedagogical context — an insight directly relevant to [[scaffolding]] design and [[intelligent-tutoring]] interface research.

### 4. Classes of AI Models
The framework maps explanation approaches to model types:
- **White-box** (decision trees, linear models, rule-based systems) — inherently interpretable
- **Black-box** (neural networks, ensemble methods) — require post-hoc explanation methods
- **Glass-box** — newer approaches that balance accuracy with transparency

This taxonomy connects to the [[adaptive-learning]] literature's ongoing tension between model complexity and interpretability.

### 5. Human-Centred Design
Explanations are not purely technical artifacts — they are communication acts. The interface must be designed for the specific stakeholder's cognitive needs, not just optimized for technical accuracy. This aligns with [[ai-literacy]] research showing that technical transparency without pedagogical framing often fails to support actual understanding.

### 6. Potential Pitfalls
The framework identifies risks specific to educational XAI:
- **Explanation overload** — too much information overwhelms users, undermining the benefit
- **Misleading explanations** — post-hoc explanations may not reflect actual model reasoning
- **Confirmation bias** — users may selectively attend to explanations that confirm existing beliefs
- **Over-trust** — explanations can create false confidence in flawed systems, connecting to [[cognitive-offloading|Over-Reliance]]
- **Gaming the system** — students may exploit explanations to circumvent learning, a known risk in [[intelligent-tutoring]]

## Four Case Studies

### OnTask — Instructor-Facing Learning Analytics
A learning analytics platform that provides instructors with interpretable student risk indicators. XAI-ED applied to surface the rules and features driving each risk flag, enabling instructors to make informed interventions. Demonstrates the [[teacher-role]] shift toward data-informed decision-making.

### OATutor — Adaptive Tutoring System
An open-source ITS where XAI explains mastery predictions and hint selections to both students and instructors. Connects to [[intelligent-tutoring]] and [[adaptive-learning]] research on transparency in automated instruction.

### SRES — Student-Facing Recommender
A learning resource recommender that explains *why* specific resources are suggested based on the learner's knowledge state and goals. Supports [[self-regulated-learning]] by making the recommendation logic visible and actionable.

### CLA (Connected Learning Analytics) — Multimodal Collaboration
Analytics for collaborative learning environments that surface group dynamics and individual contributions. XAI helps students and instructors understand team interaction patterns — connecting to [[collaborative-learning]] and [[learning-analytics]] research.

## Significance for AIED

The XAI-ED framework has become a foundational reference in AIED, cited across the [[stanford-evidence-base-ai-k12-2026]], [[ai-tutor-safety-harms]], and [[ai-literacy]] literatures. It bridges the gap between technical XAI research (which often ignores pedagogical context) and educational practice (which often treats AI as a black box). The framework's emphasis on *distinctive educational needs* anticipates later work on [[pedagogical-safety]] and [[human-in-the-loop-ai]] design.

## Connected Concepts

- [[teacher-role]]
- [[student-experience]]
- [[bias-mitigation]]
- [[metacognition]]
- [[privacy]]
- [[regulation]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[ai-literacy]]
- [[cognitive-offloading]]
- [[self-regulated-learning]]
- [[collaborative-learning]]
- [[learning-analytics]]
- [[pedagogical-safety]]
- [[trust]]
- [[human-in-the-loop-ai]]
## Connected Articles

- [[stanford-evidence-base-ai-k12-2026]]
- [[ai-tutor-safety-harms]]
## Citation

Khosravi, H., Buckingham Shum, S., Chen, G., Conati, C., Tsai, Y.-S., Kay, J., Knight, S., Martinez-Maldonado, R., Sadiq, S., & Gašević, D. (2022). Explainable Artificial Intelligence in education. [*Computers and Education: Artificial Intelligence, 3*](https://doi.org/10.1016/j.caeai.2022.100074), 100074
