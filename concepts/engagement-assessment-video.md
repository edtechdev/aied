---
title: Engagement Assessment in Video Learning
created: 2026-05-08
updated: 2026-05-08
type: concept
tags: [adaptive-learning, learning-analytics, affective-computing, higher-ed, feedback-loop]
sources: [raw/papers/2605.01238.md]
confidence: medium
---
# Engagement Assessment in Video Learning

> Sensor-based momentary assessment of engagement in self-guided video learning environments.
> **Source:** [Engagement Assessment in Video Learning](https://arxiv.org/abs/2605.01238)


## The Engagement Problem in Video Learning

**EduGage** (Leng et al., 2026) addresses a core challenge: in online/video-based learning, **learners must self-regulate** their engagement with instructional materials.

### Dimensions of Engagement
| Dimension | Measurement | Relevance to Learning |
|-----------|--------------|----------------------|
| **Attentional** | Eye tracking, gaze patterns | Sustained focus on content |
| **Emotional** | Facial expression, sentiment | Positive affect supports persistence |
| **Cognitive** | Physiological signals, task performance | Deep processing vs. superficial viewing |

## Sensor-Based Momentary Assessment

Traditional engagement measures:
- **Post-hoc surveys:** Retrospective bias, low temporal resolution
- **Self-reports:** Introspection difficulty, social desirability bias

EduGage contributes: **Real-time sensor fusion** for momentary assessment during video learning.

### Technical Approach
- **Sensors:** Webcam (facial analysis), interaction logs (pause, rewind, speed)
- **Assessment:** Momentary (in-the-moment) vs. retrospective
- **Feedback loop:** Real-time reflection prompts based on engagement state

## Connection to Adaptive Learning

This enables **adaptive interventions** in video learning:
1. **Detect disengagement** (gaze diversion, prolonged pauses)
2. **Trigger scaffolds** (reflection prompt, content re-summarization)
3. **Close loop:** Learner reflects → re-engages → improved outcomes

This aligns with [[adaptive-learning-systems]] principles: real-time learner modeling → personalized intervention.

## Implications for ITS

Intelligent tutoring systems increasingly include **video components** (e.g., worked examples, concept explanations). EduGage's approach enables:
- **Multimodal engagement tracking** (cf. [[multimodal-ai-tutoring]], [[affective-tutoring]])
- **Just-in-time scaffolds** when engagement drops
- **Self-regulated learning support** ([[self-regulated-learning]])

## Citation

al, A.Z.L.E.E.Y.S.E. (2026). *Engagement Assessment in Video Learning*

## Related Pages
- [[affective-text-wearable-student-health]] — NLP analysis of affective text signals for student health monitoring
- [[understanding-student-effort-response-time]] — Understanding Student Effort Using Response-Time Propensitie...
- [[multimodal-ai-feedback-learning]] — Zhao et al.: multimodal engagement patterns differ by question type — implications for engagement-aware systems
- [[ai-tutor-behavioral-evaluation]] — behavioral evaluation axis for AI tutors — measuring what students actually do with feedback
- [[adaptive-learning-systems]] — Real-time adaptation based on learner state
- [[affective-tutoring]] — Emotion-aware tutoring systems
- [[multimodal-ai-tutoring]] — Multimodal sensing in STEM tutoring
- [[self-regulated-learning]] — SRL scaffolding (AI as scaffold vs. displacement)
- [[formative-assessment]] — Momentary assessment as formative feedback
- [[engagement-intensity-learner-modeling]] -- Engagement intensity during AI ethics instruction serves as an effective learner...
- [[epistemic-emotions-collaborative-problem-solving]] — Ordered Network Analysis reveals structured persistence and transition patterns of confusion and fru
- [[adhd-video-segmentation-computing-education]] — Automatically segmenting instructional videos into single-instruction chunks with pauses equalizes p
- [[savvy-student-attention-video-learning]]
