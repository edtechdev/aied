---
title: "AI-Guided Learning: Research on Knowledge and Skill Acquisition Support Methods Using Deep Learning Audio-Video Processing Techniques"
created: "2026-08-12T12:37:38-04:00"
updated: "2026-08-31T12:32:59-04:00"
type: article
tags: [personalized-learning, language-learning, feedback, self-regulated-learning, multimodal, student-modeling, learning-analytics, lifelong-learning]
research_method: [system development]
discipline: [language learning]

sources: ['raw/papers/2608.08990.md']
confidence: high
---

> **Synthesis:** This doctoral dissertation (Kazuki Kawamura, University of Tokyo) develops an **AI-guided learning** framework that supports three interconnected stages — Consume, Understand, and Imitate — with three deep-learning systems for audio/[[video-education|video learning]]. AIxSpeed adapts audio playback speed at the phoneme level using speech-recognition confidence as a proxy for listening difficulty; FastPerson produces multimodal video summaries that preserve the speaker's voice and lets learners switch between summary and full versions chapter-by-chapter; and Profy supports pronunciation practice by learning proficiency from largely unannotated speech and visualizing differences from native speakers. Evaluations show efficiency gains — up to 1.30x playback and a 53% reduction in viewing time — with no loss in [[learning-gains|learning outcomes]], and improved pronunciation intelligibility. The work frames AI as a [[human-ai-collaboration|guide]] that reduces [[cognitive-offloading|cognitive load]] at each stage while preserving learner [[agency|autonomy]].

## Key Findings

1. **Consume — adaptive audio speed (AIxSpeed).** Dynamically adjusts playback speed at the phoneme level using speech-recognition confidence as a proxy for listening difficulty, achieving average playback factors of 1.30x (LibriSpeech) and 1.29x (UME-ERJ) with higher mean opinion scores than matched constant-speed playback in a blind evaluation with 50 participants.
2. **Understand — multimodal summaries (FastPerson).** Generates condensed videos preserving visual and auditory information using voice cloning to keep the original speaker's voice, reducing viewing time by 53% with no statistically significant difference in quiz scores; 78% of 40 participants rated the chapter-level summary/full switching as useful or very useful.
3. **Imitate — proficiency feedback (Profy).** Learns proficiency from largely unannotated speech via self-supervised learning, visualizes classifier-relevant waveform regions and model-derived acoustic distances from native-speaker distributions, and produced an observed improvement in pronunciation intelligibility with non-overlapping pre/post confidence intervals (unlike an elicited-imitation baseline).

## Background: Two Challenges of Audio-Visual Learning

The dissertation opens from Ivan Illich's *Deschooling Society* vision of "learning webs," arguing that the internet, [[online-teaching-and-learning|online learning environments]], and mobile devices have made audio and video primary educational media. Yet this democratization creates two interrelated challenges specific to audio-visual content.

The first is **time-inefficient consumption** of long-form content. Because audio and video must be consumed sequentially, learners face a "forced linear consumption" burden that text does not impose. A large-scale analysis of 6.9 million MOOC video-viewing sessions found that the fraction viewed decreased as videos lengthened and that median [[student-engagement|engagement]] fell below half the duration for videos longer than nine minutes. Moreover, information density is not constant: technical terminology, complex concepts, and unclear pronunciation require slower listening, while introductions and familiar material can be absorbed at high speed — a variation that uniform playback speed cannot accommodate. The dissertation cites [[learning-analytics]] [[research-methods-aied|research]] on information-density variation inferred from click-frequency traces and notes that uniform playback above 1.5x significantly reduces comprehension and increases [[cognitive-offloading|cognitive load]].

The second is the **absence of scalable, objective feedback** for imitation-based skill acquisition. Skills such as pronunciation, musical performance, and physical movement are learned by observing and imitating experts, but learners cannot easily judge where their own performance deviates from the expert model. In [[personalized-learning|face-to-face education]] teachers provide this feedback directly; at online scale, human feedback is logistically prohibitive — the dissertation estimates that 1,000 learners practicing five times weekly would require roughly 167 hours of expert time per week. Existing automated systems are either rule-based (unable to handle unanticipated error patterns) or supervised (dependent on costly labeled data and poor at generalization), and both tend to reduce feedback to binary "correct/incorrect" judgments rather than actionable, localized guidance.

## The Consume–Understand–Imitate Framework

Drawing on multimedia learning and Bandura's observational [[learning-theories|learning theory]], the dissertation organizes skill learning into three interrelated, cyclical stages rather than a linear sequence. In the **Consume** stage, learners identify relevant information from large content volumes, where the challenge is time efficiency. In the **Understand** stage, they build conceptual understanding while managing content complexity and variable information density. In the **Imitate** stage, they put observed knowledge into practice and need informative feedback on their own performance.

This staging grounds the proposed **AI-guided learning** paradigm: AI functions as a guide rather than a replacement, reducing the [[cognitive-offloading|cognitive load]] at each stage while maintaining learner [[agency|autonomy]] and [[self-regulated-learning|self-regulation]]. The framework rests on three principles — *adaptivity* (adjusting to individual comprehension and skill levels), *integration* (seamless coordination across stages), and *transparency* (presenting AI judgments in comprehensible form). Because the stages are cyclical — a learner who receives imitation feedback may return to specific content to deepen understanding — the framework explicitly avoids "point solutions" that address only one stage, instead coordinating support across the whole pipeline. This aligns with the broader movement toward [[human-ai-collaboration|augmentation rather than replacement]] in [[ai-education|AI education]].

## AIxSpeed: Adaptive Audio Playback Speed

AIxSpeed targets RQ1, balancing listening-time reduction with comprehension maintenance. Its hypothesis is that speech-recognition model confidence correlates with human listening difficulty. The system dynamically adjusts playback speed at the phoneme level using only acoustic features, without requiring semantic analysis, so easy segments play faster and difficult segments slow down automatically.

Technically, a playback-speed adjuster and a speech recognizer work together to estimate intelligibility per segment. In technical evaluation it produced average playback factors of 1.30x (LibriSpeech) and 1.29x (UME-ERJ). In a blind user evaluation with 50 participants, the variable-speed output received higher mean opinion scores than constant-speed playback matched to the same average speeds — evidence that adaptivity improves perceived [[student-experience|listenability]] without sacrificing comprehension, a concrete instance of [[adaptive-learning]].

## FastPerson: Multimodal Video Summarization

FastPerson addresses RQ2, efficient summarization that integrates visual and audio information in lecture videos. Existing summarization methods primarily produce text transcripts, which lose the multimodal richness of spoken explanation, visual slides, and demonstrations and break continuity with the original content. FastPerson instead analyzes both visual and audio streams to generate condensed *videos*, using voice-cloning technology to maintain the original speaker's voice and preserve continuity with the source lecture.

A key design choice is the interface: learners can seamlessly switch between summarized and full versions on a chapter-by-chapter basis, letting them access details according to their comprehension level — a [[scaffolding]]-like mechanism that supports [[metacognition|comprehension monitoring]]. In experiments with 40 participants watching educational videos, FastPerson achieved an average 53% reduction in viewing time with no statistically significant difference in quiz scores compared with normal playback, and 78% rated the switching functionality as useful or very useful. The system exemplifies [[multimodal]] information processing and directly addresses the time cost of [[lifelong-learning|video-based learning]].

## Profy: Data-Driven Pronunciation Feedback

Profy addresses RQ3, model-derived localization of performance differences in imitation learning. Taking second-language pronunciation as a concrete case applicable to broader skill domains, it builds a deep-learning model that learns what constitutes good and poor performance directly from unannotated audio data, using self-supervised learning so it needs no labeled error annotations.

The system highlights waveform regions emphasized by the classifier (where performance deviates) and shows model-derived acoustic distances from native-speaker distributions in latent space, giving learners both *where* and *how much* they differ. In an experiment with 10 Japanese learners of English evaluated by five American raters, Profy showed a larger observed improvement in pronunciation intelligibility than elicited imitation, and unlike that baseline its pre- and post-practice confidence intervals did not overlap. This represents a form of [[formative-assessment|model-derived feedback]] that scales beyond human instructors, connecting to [[language-learning]], [[student-modeling]], and embodied, [[embodied-learning|imitation-based skill acquisition]].

## Implications

The framework illustrates how [[personalized-learning]] can address the time cost of sequential audio/video content and the lack of scalable feedback for imitation-based skill acquisition, notably in [[language-learning]] pronunciation. The three systems exemplify a [[feedback|Feedback Loop]] design where model confidence and learner behavior jointly drive adaptation, connecting to [[multimodal]] and [[student-modeling]] research while supporting [[self-regulated-learning]] and [[lifelong-learning]] goals — preserving learner access to the original material and repeated practice without removing learner agency.

The three-stage Consume–Understand–Imitate framing offers a reusable model for AI-guided media learning, and the dissertation argues these [[ai-technologies|technologies]] extend beyond audio-visual domains. Limitations acknowledged by the author include the need for long-term effect validation, the early-stage sample sizes, and generalization beyond pronunciation and language domains. The work positions itself as complementary to [[llm|LLM-based systems]]: rather than replacing text-based [[student-ai-interaction|AI interaction]], it argues that adaptive speed, multimodal preservation, and tacit/imitation-based skill feedback address dimensions — prosody, visual continuity, and embodied practice — that language models alone cannot fully cover.

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
- [[ai-generated-instructional-videos-computing-ed]] — AI-generated instructional videos
- [[ai-adult-learning-guidelines-dis2026]] — AI in adult learning design

## Citation

Kawamura, K. (2026). [*AI-guided learning: Research on knowledge and skill acquisition support methods using deep learning audio-video processing techniques*](https://arxiv.org/abs/2608.08990). cs.HC. Doctoral dissertation, University of Tokyo.
