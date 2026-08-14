---
title: "Turning 500+ Students into Teachers: A Semester-Long Study of an AI Teachable Agent in an Undergraduate Algorithms Course"
created: 2026-08-14
updated: 2026-08-14
type: article
tags: [learning-by-teaching, teachable-agents, generative-ai, cs-education, programming-education, productive-struggle, scaffolding, higher-ed]
sources: ['raw/papers/raw-wang-epfl-explique.md']
confidence: high
---

> **Synthesis:** Wang et al. (2026) present **Explique**, a platform integrating an AI teachable agent (Algorithm Apprentice) into an undergraduate algorithms course to operationalize learning-by-teaching (LBT) at scale. In an 11-week field deployment with **546 students** and 3,809 student–agent LBT dialogues, they find that explanation-oriented dialogue behaviors (elaboration, showing reasoning) are associated with fewer incorrect quiz submissions, while external-content reuse is associated with more repeated attempts. The LBT condition corresponded to a modest reduction in expected quiz attempts versus a baseline reading activity.

## The Need for Large-Scale LBT Evidence

LLM tools give students rapid solutions but may reduce opportunities for productive struggle and explanation generation that support conceptual learning. Learning-by-teaching offers an alternative by positioning students as tutors — yet evidence for LLM-based teachable agents remained limited, especially for longitudinal deployments and large-scale evaluations connecting LBT interactions to conceptual understanding in authentic courses.

## Study Design

- **Explique platform** integrates the Algorithm Apprentice teachable agent into an undergraduate algorithms course.
- **11-week field deployment** in a real course with **546 students**.
- **3,809 student–agent LBT dialogues** analyzed alongside quiz and survey data.
- **Generalized linear mixed-effects models** linked dialogue behaviors to learning outcomes.

## Key Findings

- **Explanation-oriented dialogue predicts success.** Dialogue behaviors such as elaboration and showing reasoning were associated with fewer quiz attempts (fewer incorrect submissions).
- **External-content reuse hurts.** Direct reuse of externally sourced content was associated with slightly more repeated attempts (more incorrect submissions).
- **Modest LBT benefit.** Compared to a baseline reading activity, the LBT condition corresponded to a modest reduction in expected quiz attempts, though confounded by substantial differences in time-on-task.
- **Engagement varies in depth/authenticity.** Students engaged consistently in multi-turn teaching interactions over the semester, though depth and authenticity varied, including instances of direct reuse of external content.

## Implications

1. **LBT with LLM teachable agents scales** to authentic, large-enrollment courses.
2. **Encourage explanation, discourage content-dumping** — the quality of teaching interaction (elaboration vs. reuse) predicts learning, guiding system and instruction design.
3. **Connect LBT behavior to conceptual understanding** at scale is feasible with platform-based measurement.

## Connected Concepts

- [[learning-by-teaching]]
- [[generative-ai]]
- [[cs-education]]
- [[programming-education]]
- [[desirable-difficulties]]
- [[scaffolding]]
- [[higher-ed]]
- [[desirable-difficulties]]

## Connected Articles

- [[chatgpt-teachable-agent-programming-lbt-2024]] — ChatGPT as a teachable agent in programming
- [[prompting-teachability-novice-personas-lbt-2026]] — Designing novice personas for teachability
- [[ai-tutor-safety-harms]] — Safety and harms of AI tutoring
- [[curiobot-llm-tutoring-exploratory-learning]] — LLM tutoring for exploratory learning

## Citation

Wang, C., Petrie, C., Stouras, M., Ettlin, N., George, A., Mejia-Domenzain, P., Swamy, V., Käser, T., & Svensson, O. (2026). [*Turning 500+ Students into Teachers: A Semester-Long Study of an AI Teachable Agent in an Undergraduate Algorithms Course*](https://doi.org/10.1145/3774398.3811623). In *Proceedings of the Thirteenth ACM Conference on Learning @ Scale (L@S '26)*.
