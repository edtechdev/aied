---
title: "A Multimodal Framework for Embodied Cognition in Oral Explanations"
created: "2026-08-17T10:15:00-04:00"
updated: "2026-08-17T11:15:00-04:00"
type: article
tags: [engineering-education, embodied-learning, multimodal, math-education, assessment-validity, llm, higher-ed, stem-education]
sources: ['raw/papers/multimodal-embodied-cognition-oral-explanations-2026.md']
confidence: high
---

> **Synthesis:** Morphew, Mehrabi, Bennett, and Majmundar (2026) present an automated multimodal framework that integrates computer-vision gesture tracking with [[llm|large language model]] analysis of spoken discourse to study how [[engineering-education|engineering students']] conceptual understanding of statistics is expressed through both speech and gesture. Grounded in [[embodied-learning|embodied cognition]] and McNeill's gesture–speech unity hypothesis, the framework builds a domain-specific gesture library, classifies hand movements with a k-nearest-neighbors model, aligns gesture episodes to transcribed speech, and uses an LLM "meaning agent" to annotate each episode with statistical concepts and gesture–speech relations. Two undergraduate engineering students explaining linear regression and descriptive statistics showed that high-confidence explanatory gestures cluster around specific concepts (especially the mean), and that close gesture–speech coordination accompanies coherent conceptual talk while divergence marks developing ideas. The authors argue that [[assessment-validity|assessing only speech]] misses embodied evidence of understanding and release an open-source pipeline to bring embodied evidence into [[multimodal|multimodal learning analytics]] and oral assessment at scale.

## Gesture as evidence of understanding

The paper opens from the premise that assessment practices typically assume speech is the dominant mode of communicating understanding, yet learners frequently convey conceptual information through gestures that are not redundant with speech. From the perspective of [[embodied-learning|embodied cognition]], gesture is not auxiliary but part of the cognitive process — an observable indicator of how knowledge is structured at a given moment. Explanations assessed only through speech can miss implicit or transitional dimensions of understanding, and verbal fluency can be mistaken for conceptual knowledge, disadvantaging learners with language-related challenges. This is especially salient in [[engineering-education|engineering contexts]], where conceptual explanations naturally lend themselves to gestures that reveal how learners organize abstract ideas spatially.

McNeill's gesture–speech unity hypothesis holds that speech and gesture share a common origin with two coordinated outputs. His taxonomy distinguishes representational gestures (iconic, referencing imagined spaces, metaphorical) from non-representational ones, and research shows that mismatches between gesture and speech signal transitional or weakly held conceptions. Gestures can also [[cognitive-offloading|offload relational structure]] onto space, reducing cognitive load and supporting learning — a pattern documented across [[math-education|mathematics]], science, and statistics.

## The multimodal framework

The authors introduce a pipeline that separates perceptual gesture detection from semantic interpretation:

1. **Gesture detection and segmentation** — MediaPipe tracks the index fingertip; motion windows are normalized (centered, isotropically scaled) to remove variation from camera placement and drawing scale.
2. **Classification** — a k-nearest-neighbors (KNN) classifier labels each window by trajectory similarity against a gesture library; contiguous stable frames merge into gesture episodes.
3. **Confidence filtering** — an episode-level confidence threshold (≥0.75) retains visually stable patterns; retained episodes are overwhelmingly explanatory rather than conversational.
4. **Multimodal alignment** — audio is transcribed with automatic speech recognition and each gesture episode is aligned to the nearest spoken segment.
5. **Semantic annotation** — a hybrid "meaning agent" using an instruction-tuned local model (FLAN-T5) labels each episode with statistical concept, gesture–speech relation (aligned/partial/misaligned/none), and McNeill category under a forced JSON schema.

This yields three feature representations — speech-only, gesture-only, and combined multimodal — enabling direct evaluation of whether gesture contributes diagnostic value beyond speech.

## A gesture library for statistics

A domain-specific gesture library catalogues the hand movements students spontaneously produce when explaining statistical ideas, each linked to a statistical concept: straight-line, slope, dot-in-air, scatter plot, coordinate plane, normal distribution, mean/median, outlier, correlation, and grouping gestures. Keeping the library small and conceptually grounded ensures detected gestures remain interpretable to instructors rather than opaque machine-learning categories.

## Findings

Analysis of two undergraduate engineering students (127 and 58 total gestures; 92 and 36 retained high-confidence explanatory episodes) found:

- **A shared spatial vocabulary:** both students converged on a narrow set of forms (square/box most common at ~54–61%, then straight line), suggesting durable spatial schemas rather than personal habits for structuring abstract ideas like center, variation, and trend.
- **Conceptual clustering:** gestures were not evenly distributed but clustered around specific concepts — both students gestured most on the mean, while the more expansive explainer (Greg) extended to slope, regression, and standard deviation.
- **Gesture–speech coupling signals coherence:** episodes where gesture and speech were closely coordinated were associated with more coherent conceptual talk, whereas divergence coincided with partial or developing ideas.
- **High confidence → stable gesture:** when students expressed high confidence, gestures were larger, temporally stable, and spatially consistent.

## Implications for assessment and online learning

- **Assessment can and should consider embodied evidence:** speech-only assessment can mistake verbal fluency for understanding; gesture adds representation-level diagnostic information and increases [[assessment-validity|construct validity and equity]].
- **Automated and reproducible:** the pipeline quantifies typically qualitative gesture analysis and is released publicly, so instructors can upload gesture recordings and obtain automated detection for their own classroom or assessment contexts.
- **A gap for online learning:** instructors in online environments lack the embodied cues that naturally occur in person; gesture-aware digital platforms could help fill the gap left by verbal explanations alone.
- **Statistics education:** the framework grounds understanding of foundational statistics concepts in both verbal and embodied enactment, relevant to [[math-education|statistics education]] where gestures can make central tendency, variation, and trend tangible.

## Connected Concepts

- [[engineering-education]]
- [[embodied-learning]]
- [[multimodal]]
- [[learning-analytics]]
- [[assessment-validity]]
- [[math-education]]
- [[llm]]
- [[generative-ai]]
- [[stem-education]]
- [[higher-ed]]

## Connected Articles

- [[llm-automated-assessment-student-self-explanations]] — LLM Automated Assessment of Student Self-Explanations
- [[embodied-inquiry-ai-facilitator-physics-2026]] — Embodied Inquiry with AI as Facilitator
- [[embodied-string-learning-blindness-low-vision-musicians]] — Embodied String Learning for Musicians with Blindness
- [[confidence-aware-student-drawing-assessment]] — Confidence-Aware Assessment of Student-Drawn Scientific Models
- [[multimodal-affective-its-presentation]] — Multimodal Affective Intelligent Tutoring Presentation
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors
- [[aaiwa-ai-authentic-assessment-metacognition-2026]] — AI-Mediated Authentic Assessment and Metacognition

## Citation

Morphew, J. W., Mehrabi, A., Bennett, J. A., & Majmundar, A. M. (2026). [*A Multimodal Framework for Embodied Cognition in Oral Explanations*](https://github.com/amehrabi67/OralExams). ASEE Annual Conference & Exposition, Paper ID #51108.
