---
title: 'LaTA: A Drop-in, FERPA-Compliant Local-LLM Autograder for Upper-Division STEM Coursework'
created: 2026-05-15
updated: 2026-05-22
type: article
tags: [automated-grading, higher-ed, stem-education, llm, generative-ai, efficacy-study, feedback-loop]
sources: [raw/papers/2605.05410.md]
confidence: high
---

# LaTA: A Drop-in, FERPA-Compliant Local-LLM Autograder for Upper-Division STEM Coursework

LaTA: A Drop-in, FERPA-Compliant Local-LLM Autograder for Upper-Division STEM Coursework
**Rodríguez (2026)** — Oregon State University. Submitted to Computers & Education.

## Summary

LaTA (LaTeX Teaching Assistant) is a **privacy-preserving, drop-in autograder** that addresses the core tension in educational LLM deployment: most [[automated-grading]] systems send student work to third-party APIs, violating FERPA and exposing institutions to data risk.

**System architecture:**
- **Four-stage pipeline:** Ingest → Segment → Grade → Report
- **Grading engine:** gpt-oss:120b running **entirely on local commodity hardware** (single Mac Studio)
- **Rubric format:** YAML with binary per-item scoring, comparing student work against instructor-authored reference solutions
- **Cost:** $0 marginal cost per assignment, 1-3 minutes per submission

**Real-world deployment (Winter 2026):**
- **Course:** ME 373 at Oregon State University (~200 students)
- **Grading error rate:** 0.02-0.04% per rubric line item — near-perfect accuracy
- **Operational benefit:** Enabled regrading of corrected assignments and expanded TA office hours

**Learning outcomes (vs. traditional cohort):**
- **Midterm exam:** +11% performance gain
- **Final exam:** +8% performance gain
- **Confidence gains:** Δ ≥ +1.49 Likert points on every learning objective (N=159, p < 10⁻²⁷)

These results provide strong evidence for the [[feedback-loop]] hypothesis: faster, more consistent feedback drives both learning and confidence. The deployment demonstrates that [[generative-ai]] grading can be both FERPA-compliant and pedagogically effective, addressing concerns raised in [[assessment-validity]] and [[formative-assessment]] discussions.

LaTA's success connects to the broader [[stem-education]] and [[higher-ed]] landscape, showing that [[llm]]-based grading can move beyond [[short-answer-scoring-quality-degradation]] concerns when properly designed with instructor-authored rubrics and reference solutions. The open-source, zero-marginal-cost model aligns with [[principled-ai-education]] principles.

## Related Pages
- [[llm-handwritten-math-grading]] — Complements LaTA's typed-response grading with vision-based handwritten math assessment
- [[automated-grading]] — Automated grading systems
- [[automatic-short-answer-grading]] — Short answer grading with LLMs
- [[formative-assessment]] — Formative assessment practices
- [[feedback-loop]] — Feedback mechanisms in learning
- [[assessment-validity]] — Assessment validity in AI education
- [[stem-education]] — STEM education and AI
- [[principled-ai-education]] — Principled AI in education
- [[short-answer-scoring-quality-degradation]] — Quality issues in automated scoring

## Citation

Rodríguez, J. A. (2026). [LaTA: A drop-in, FERPA-compliant local-LLM autograder for upper-division STEM coursework](https://arxiv.org/abs/2605.05410). arXiv:2605.05410. Submitted to Computers & Education.
