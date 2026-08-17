---
title: "AI-Guided Learning: Research on Knowledge and Skill Acquisition Support Methods Using Deep Learning Audio-Video Processing Techniques"
created: "2026-08-12T12:37:38-04:00"
updated: "2026-08-12"
type: article
tags: [personalized-learning, language-learning, feedback, self-regulated-learning, multimodal, student-modeling, learning-analytics, lifelong-learning]

sources: ['raw/papers/2608.08990.md']
confidence: high
---

> **Synthesis:** This dissertation develops an AI-guided learning framework that supports three interconnected stages — Consume, Understand, and Imitate — with three deep-learning systems for audio/video learning. AIxSpeed adapts audio playback speed using speech-recognition confidence; FastPerson produces multimodal video summaries; and Profy supports pronunciation practice from largely unannotated speech. Evaluations show efficiency gains (up to 1.30x playback, 53% less viewing time) with no loss in learning outcomes, and improved pronunciation intelligibility.

## Key Findings

1. **Consume — adaptive audio speed.** AIxSpeed dynamically adjusts playback speed at the phoneme level using speech-recognition confidence as a proxy for listening difficulty, achieving average playback factors of 1.30x (LibriSpeech) and 1.29x (UME-ERJ) with higher mean opinion scores than matched constant-speed playback.

2. **Understand — multimodal summaries.** FastPerson generates video summaries preserving visual and auditory information and lets learners switch between summarized and full versions by chapter, reducing viewing time by 53% with no statistically significant difference in quiz scores.

3. **Imitate — proficiency feedback.** Profy learns proficiency from largely unannotated speech, visualizes classifier-relevant regions and model-derived acoustic distances, and produced an observed improvement in pronunciation intelligibility with non-overlapping pre/post confidence intervals.

## Implications

The framework illustrates how [[personalized-learning]] can address the time cost of sequential audio/video content and the lack of scalable feedback for imitation-based skill acquisition, notably in [[language-learning]] pronunciation. The systems exemplify a [[feedback|Feedback Loop]] design where model confidence and learner behavior jointly drive adaptation, and they connect to [[multimodal]] and [[student-modeling]] research.

By preserving learner access to the original material while adding AI assistance, the work aligns with [[self-regulated-learning]] and [[lifelong-learning]] goals — supporting efficient consumption and repeated practice without removing learner agency. The three-stage Consume–Understand–Imitate framing offers a reusable model for AI-guided media learning.

## Connected Concepts

- [[personalized-learning]]
- [[language-learning]]
- [[feedback]]
- [[self-regulated-learning]]
- [[multimodal]]
- [[student-modeling]]
- [[learning-analytics]]
- [[lifelong-learning]]

## Connected Articles

- [[ai-assisted-learning-modes-eeg]] — AI-assisted learning modes (EEG)
- Lecture Review — Lecture review with AI
- [[ai-generated-instructional-videos-computing-ed]] — AI-generated instructional videos
- [[not-a-universal-benefit-examining-the-differential-effects-of-emotional-ai-on-l2]] — Emotional AI on L2 learning
- [[ai-adult-learning-guidelines-dis2026]] — AI in adult learning design

## Citation

Kawamura, K. (2026). [*AI-guided learning: Research on knowledge and skill acquisition support methods using deep learning audio-video processing techniques*](https://arxiv.org/abs/2608.08990). arXiv:2608.08990. cs.HC. Doctoral dissertation, University of Tokyo.
