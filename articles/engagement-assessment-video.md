---
title: Engagement Assessment in Video Learning
created: "2026-05-08T04:33:04-04:00"
updated: "2026-08-24T09:15:00-04:00"
type: article
tags: [adaptive-learning, learning-analytics, affective-computing, higher-ed, feedback, self-regulated-learning, affective-tutoring, formative-assessment]
level: [higher ed]
sources: ['raw/papers/2605.01238.md']
confidence: medium
---

> **Synthesis:** **EduGage** (Leng et al., 2026) shows that fine-grained, segment-level engagement estimation in self-guided video learning is *feasible but inherently noisy*. Using wearable and camera-based sensors (PPG, ECG, EDA, EEG, IMU, heart rate, temperature, eye tracking) across a 16-participant user study, the authors' multimodal model achieved an MAE of 0.81 and 83.75% within-1 accuracy, outperforming sensor-free, statistical, deep-temporal, foundation-model, and LLM-based baselines. The authors argue that practical systems should prioritize lightweight combinations of behavioral and physiological signals over full multimodal instrumentation, and they release the EduGage dataset — synchronized multimodal sensor streams, probe-aligned momentary engagement labels, video metadata, quizzes, and study materials — to support reproducible research.

## Key Findings

1. **Fine-grained engagement estimation is feasible but noisy.** Segment-level engagement in self-guided video learning can be estimated from wearable sensing, but inherently noisy, so systems should treat predictions as approximate.
2. **Strong accuracy vs. baselines.** Across participant-based cross-validation, the EduGage model achieves an MAE of 0.81, 83.75% within-1 accuracy, 73.93% binary accuracy, and 68.45% binary Macro-F1, beating sensor-free, statistical, deep temporal, foundation-model, and LLM-based baselines.
3. **Lightweight sensing wins for deployment.** Practical systems should prioritize lightweight combinations of behavioral and physiological signals over full multimodal instrumentation, balancing predictive value with real-world feasibility.
4. **A reusable dataset.** EduGage contains 16 participants, 64 video-viewing sessions, 715 probe-aligned windows, and ~12 hours of synchronized multimodal recordings, enabling reproducible research on sensor-based engagement modeling.

## The Engagement Problem in Video Learning

**EduGage** (Leng et al., 2026) addresses a core challenge in online and video-based learning: learners must **self-regulate** their engagement with instructional materials without continuous instructor feedback. Engagement is widely understood as a multidimensional construct spanning behavioral, emotional, and cognitive components, and prior work consistently emphasizes the importance of [[student-engagement|cognitive engagement]] for meaningful learning because it reflects the mental effort learners invest in understanding, monitoring, and mastering material.

This is especially relevant in [[higher-ed|higher education]] and [[professional-training|professional training]], where prerecorded instructional videos are now common and learners must regulate their own attention, motivation, and understanding. Because engagement is a **dynamic, partially latent process**, it can shift substantially within a single lesson: learners may appear behaviorally attentive while mind-wandering, or show little outward response while still actively processing difficult material.

### Dimensions of Engagement
| Dimension | Measurement | Relevance to Learning |
|-----------|--------------|----------------------|
| **Attentional** | Eye tracking, gaze patterns | Sustained focus on content |
| **Emotional** | Facial expression, sentiment | Positive affect supports persistence |
| **Cognitive** | Physiological signals, task performance | Deep processing vs. superficial viewing |

## Sensor-Based Momentary Assessment

Traditional engagement measures are limited:
- **Post-hoc surveys:** Retrospective bias, low temporal resolution
- **Self-reports:** Introspection difficulty, social desirability bias
- **Behavioral proxies:** Viewing time and interaction logs capture activity at scale but not momentary internal experience

EduGage contributes **real-time sensor fusion** for momentary assessment during video learning, combining repeated in-situ self-reports with fine-grained sensing. Following [[educational-measurement|experience sampling and ecological momentary assessment]] methodology, the study operationalizes momentary cognitive engagement as the perceived difficulty of sustaining attention during the preceding segment, collected via a brief single-item probe on a 5-point Likert scale.

### Technical Approach
- **Sensors:** Webcam (eye tracking), interaction logs, and wearable devices capturing PPG, ECG, EDA, EEG, IMU, heart rate, and temperature
- **Assessment:** Momentary (in-the-moment) vs. retrospective, aligned to ~44-second probe-aligned windows
- **Feedback loop:** Real-time reflection prompts based on engagement state

## Study Design and the EduGage Dataset

The study recruited 16 college students who watched instructional videos from the MIT Open Learning Library across four domains (X-Rays, Aerospace Engineering, Environmental Science, Business), with A/B variant pairs and counterbalanced ordering. Participants wore multiple sensors concurrently — a PPG ring, Microsoft Band 2 (EDA/heart rate), an earable IMU, a Polar H10 chest strap (ECG), a Muse S Athena headband (EEG/PPG/IMU), and a webcam eye tracker — while periodically reporting their momentary attention difficulty at natural stopping points. Pre- and post-video quizzes provided a secondary learning-related measure to check whether higher engagement related to [[learning-gains|learning gains]].

The resulting **EduGage dataset** provides temporally aligned wearable streams, repeated probe-level self-reports, video-segment metadata, and study materials at a fine temporal resolution — a resource suited for modeling how engagement fluctuates across specific moments of instruction.

## The Multimodal Prediction Framework

Each probe-aligned window is a prediction sample. The framework processes each modality with its own temporal encoder, then uses a **context-informed gated fusion** mechanism: separate gating networks learn a soft contribution weight for each modality, conditioned on the modality embedding and a shared context vector (relative video progress). The weighted modality embeddings are fused via a normalized gated average and passed to a regression head that outputs the predicted engagement level. This design lets the model adaptively emphasize informative streams while down-weighting noisier or less reliable ones, reflecting the heterogeneous signal quality across wearable sensing channels.

## Results and Sensing Tradeoffs

Across participant-based cross-validation, the model achieved an MAE of 0.81, 83.75% within-1 accuracy, 73.93% binary accuracy, and 68.45% binary Macro-F1, outperforming sensor-free, statistical, deep temporal, foundation-model, and LLM-based baselines. The key practical conclusion is that **fine-grained estimation is feasible but noisy**, and that full multimodal instrumentation may not be worth its deployment burden — lightweight combinations of behavioral and physiological signals offer a better balance of predictive utility and real-world feasibility.

## Connection to Adaptive Learning

This enables **adaptive interventions** in video learning:
1. **Detect disengagement** (gaze diversion, prolonged pauses, attention difficulty)
2. **Trigger scaffolds** (reflection prompt, content re-summarization, revisiting a segment)
3. **Close loop:** Learner reflects → re-engages → improved outcomes

This aligns with [[adaptive-learning]] principles: real-time learner modeling → personalized intervention. Momentary sensing can support [[self-directed-learning|self-directed learning]], [[student-modeling|student modeling]], and post-hoc content refinement without replacing the teacher role.

## Implications for ITS and Future Systems

Intelligent tutoring systems increasingly include video components (e.g., worked examples, concept explanations). EduGage's approach enables:
- **Multimodal engagement tracking** (cf. [[multimodal-ai-tutoring]], [[affective-tutoring]])
- **Just-in-time scaffolds** when engagement drops
- **Self-regulated learning support** ([[self-regulated-learning]])
- **Privacy-aware design**, since camera-based approaches raise [[privacy|privacy concerns]] and EEG systems are often impractical at scale

## Implications

- **For learning analytics:** Momentary engagement sensing extends [[learning-analytics]] beyond coarse session-level metrics, revealing *when* attention declines and which segments are difficult.
- **For adaptive systems:** Fine-grained engagement estimates can trigger timely [[feedback|reflection prompts]] and adaptive support, and support [[self-regulated-learning|self-regulation]] without burdening learners.
- **For deployment:** The study's modality comparisons argue for lightweight, wearable-friendly sensing over full multimodal instrumentation, lowering the barrier to real-world use.
- **For research:** The open EduGage dataset provides a reproducible benchmark for [[affective-computing|affective computing]] and sensor-based engagement modeling, with implications for how momentary engagement relates to [[assessment]] and [[learning-gains|learning outcomes]].

## Connected Concepts

- [[adaptive-learning]]
- [[affective-tutoring]]
- [[self-regulated-learning]]
- [[student-engagement]]
- [[learning-analytics]]
- [[multimodal]]
- [[affective-computing]]
## Connected Articles

- [[multimodal-ai-tutoring]]
## Citation

Leng, Z., Eyal, E., Shi, Y., He, J., Liu, Y., & Plötz, T. (2026). [*EduGage: Methods and Dataset for Sensor-Based Momentary Assessment of Engagement in Self-Guided Video Learning*](https://arxiv.org/abs/2605.01238)
