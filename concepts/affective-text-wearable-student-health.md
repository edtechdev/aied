---
title: "A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring"
created: 2026-05-17
updated: 2026-05-17
type: concept
tags: [affective-computing, student-experience, higher-ed, learning-analytics]
sources: [raw/papers/2605.14360.md]
confidence: medium
---
# Brief Affective Text and Wearable Sensing for Student Health Monitoring

**Tamunotonye Harry, Johanna Hidalgo, Matthew Price, Yuanyuan Feng, Kathryn Stanton, Connie Tompkins, Peter Sheridan Dodds, Mikaela Irene Fudolig, Laura Bloomfield, Christopher Danforth (2026)** — [arXiv preprint](https://arxiv.org/abs/2605.14360)
## Key Findings

In a year-long study of 458 university students (3,610 person-waves) using Oura rings for passive physiological sensing, researchers examined whether **ultra-brief affective text prompts** (median 3-word responses to "what concerns you most?") could enrich the interpretation of wearable data. Using NLP methods spanning dictionary-based (LIWC), general pretrained embeddings, and domain-adapted models:

- **Academic concern framing** was associated with lower physical activity
- **Emotional exhaustion language** was associated with poorer sleep quality and lower heart rate variability (HRV)
- **General pretrained embeddings outperformed** domain-adapted models for most health outcomes
- **Domain adaptation** showed relative advantage only for autonomic nervous system measures
- **Affective dimensions** (emotional register) were consistently associated with outcomes across all NLP methods — *how* students express concerns matters more than *what* they are concerned about

## Methodological Significance

The finding that emotional register rather than topical content carries predictive signal has implications for [[engagement-assessment-video]], [[genai-tutor-engagement-patterns]], and other work that analyzes student language for learning signals. It suggests that **simple affective prompts at minimal burden** may be more scalable than complex topic classification for educational well-being systems.

## Connection to AI Campus Well-Being

This study provides empirical grounding for the kind of affective monitoring infrastructure imagined in [[ai-campus-wellbeing-tools]]. While Tang's framework proposes integrated AI tools (TigerGPT, AURA, PsychoGPT) for campus well-being, Harry et al. demonstrate that even ultra-brief, low-burden text prompts — analyzed with standard NLP — can surface meaningful psychological signals tied to physiological outcomes.

## Implications for Learning Analytics

The dissociation between topic and affect aligns with [[multimodal-ai-feedback-learning]] research showing that *how* students interact with AI systems often matters more than *what* they produce. For [[learning-analytics]] dashboards and early-warning systems, this suggests tracking emotional tone in student communications may be more predictive than categorizing concern topics.

## Related Pages
- [[ai-campus-wellbeing-tools]] — Integrated AI framework for campus well-being prevention and intervention
- [[engagement-assessment-video]] — Engagement assessment in video learning environments
- [[genai-tutor-engagement-patterns]] — Multi-institution patterns in student engagement with AI tutors
- [[affective-tutoring]] — Affective computing in tutoring systems
- [[multimodal-ai-feedback-learning]] — LLM-based multimodal AI feedback and learning outcomes
- [[learning-analytics]] — Overview of learning analytics approaches
- [[student-experience]] — Student experience with AI in education
- [[physiological-signals-exam-outcomes-ml]] -- Random forest predicts exam outcomes from physiological signals as well as deep learning with better interpretability
- [[epistemic-emotions-collaborative-problem-solving]] — Ordered Network Analysis reveals structured persistence and transition patterns of confusion and fru

## Citation

Harry, T., Hidalgo, J., Price, M., Feng, Y., Stanton, K., Tompkins, C., Dodds, P. S., Fudolig, M. I., Bloomfield, L., & Danforth, C. (2026). A formative study of brief affective text as a complement to wearable sensing for longitudinal student health monitoring. arXiv:2605.14360 [cs.HC]. Submitted to ACM IMWUT.
