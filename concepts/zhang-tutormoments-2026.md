---
title: "When Help is Unhelpful: Evaluating AI Tutors for Productive Struggle"
created: 2026-08-08
type: concept
tags: [intelligent-tutoring, scaffolding, llm, llm-evaluation, k-12, math-education, benchmark, ai-tutoring, teacher-role, over-reliance]
sources: [raw/papers/zhang-tutormoments-2026.md]
confidence: high
---

> **Synthesis:** Zhang et al. (2026) introduce TutorMoments, a replay-based evaluation framework that tests whether LM tutors adapt their pedagogical actions to context — scaffolding when support is needed, pushing for rigor when students are ready, and avoiding over-scaffolding. Evaluating 462 teacher-annotated transcripts from grades 2-7 math tutoring, they find frontier models default toward over-helpfulness at the expense of productive struggle. The paper argues that AI optimized for helpfulness may be misaligned with the pedagogical goal of providing the right help at the right moment.

# When Help is Unhelpful: Evaluating AI Tutors for Productive Struggle

**Zhang, A., Ross, A., Patel, K., Bernado, J., Bowie, R., Ribeiro, A. T., Halper, D., Valayaputtur, H., Andreas, J., Loeb, S., Lucy, L., Lo, K., & Knight, R. (2026)** — Allen Institute for AI, UW, MIT, Stanford, Step Up Labs. Preprint.

## Summary

TutorMoments evaluates whether LM tutors select instructional actions appropriate to the pedagogical demands of specific learning moments. Expert math teachers annotate key decision points in authentic tutoring transcripts: scaffolding-appropriate moments (student needs support) and rigor-appropriate moments (student is ready for challenge). The framework then replays these moments to test whether LMs select appropriate tutor moves. Findings show minimally prompted LMs frequently over-scaffold and rarely push for rigor; evaluation-aware prompting improves adaptability but behavior concentrates into a narrow set of tutor moves. The dataset includes 462 transcripts from 198 students in grades 2-7 interacting with 173 human tutors, with 1,500+ teacher-annotated key moments.

## Key Findings

- Minimally prompted frontier LMs default toward over-scaffolding — being "helpful" rather than pedagogically adaptive
- LMs rarely push for rigor even when students are ready for challenge
- Evaluation-aware prompts substantially improve adaptability but reveal large cross-model differences
- Tutor behavior concentrates into a narrow set of moves, lacking the diversity of human tutor strategies
- Framework operationalizes productive struggle, zone of proximal development, and desirable difficulties as evaluation criteria

## Connections

This work connects to: [[intelligent-tutoring]][[scaffolding]][[llm-evaluation]][[math-education]][[benchmark]][[teacher-role]][[over-reliance]][[k-12]]

## Citation

Zhang, A., Ross, A., Patel, K., Bernado, J., Bowie, R., Ribeiro, A. T., Halper, D., Valayaputtur, H., Andreas, J., Loeb, S., Lucy, L., Lo, K., & Knight, R. (2026). [When Help is Unhelpful: Evaluating AI Tutors for Productive Struggle](https://example.com/tutormoments-preview.pdf).
