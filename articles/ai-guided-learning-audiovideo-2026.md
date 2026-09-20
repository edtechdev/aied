---
title: "AI-Guided Learning: Research on Knowledge and Skill Acquisition Support Methods Using Deep Learning Audio-Video Processing Techniques"
created: "2026-08-12T12:37:38-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
pedagogy: [lifelong-learning, self-regulated-learning]
technology: [learning-analytics, multimodal, personalized-learning, student-modeling]
assessment: [feedback]
connected_faqs: [study-with-ai]
research_method: [system development]
discipline: [language learning]
sources: ['raw/papers/2608.08990.md']
confidence: high
audience: [designers, edtech designers, software developers]
level: [adult learning]
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

## What this means for practice

- **Designers.** Regulate playback where comprehension actually varies — at the phoneme level — rather than applying one fixed rate: AIxSpeed produced average playback factors of 1.30x (LibriSpeech) and 1.29x (UME-ERJ) and outscored constant-speed playback matched to the same averages in a blind evaluation with 50 participants.
- **Designers.** Keep the original material one click away: 78% of 40 participants rated chapter-by-chapter switching between summary and full video as useful or very useful, and FastPerson cut viewing time by 53% with no statistically significant quiz-score difference.
- **Designers.** Deliver imitation feedback that localizes the difference instead of scoring it — Profy highlights the waveform regions driving the classifier's judgment and shows acoustic distance from native-speaker distributions, and its pre/post intelligibility confidence intervals did not overlap, unlike elicited imitation.
- **Designers.** Treat Consume–Understand–Imitate as one coordinated model rather than three point solutions, since the stages are cyclical and the framework explicitly argues against tooling a single stage; pair it with [[multimodal]] and [[student-modeling]] design so model confidence and learner behavior jointly drive adaptation.
- **Researchers.** Extend the systems' validation before reusing the paradigm: the author positions adaptive speed, multimodal preservation, and tacit skill feedback as complementing [[llm|LLM-based systems]] rather than replacing text interaction, and calls for long-term effect validation.

## Limitations

- **Small evaluation samples:** AIxSpeed was tested blind with 50 participants, FastPerson with 40 video viewers, and Profy with 10 Japanese learners of English rated by five American raters.
- **Summaries can lose content:** for some questions, correct-answer percentages were higher when the original video was viewed, and the author also flags room for improvement in summary depth and synthesized audio quality.
- **Adaptation rests on a proxy:** AIxSpeed infers listening difficulty from speech-recognition confidence (correlated at 0.9977 with human transcription accuracy for speeds above 1.0x), and the author notes performance may vary with input acoustics, speaker diversity, and content complexity.
- **Generalization and duration remain unproven:** the dissertation evaluates pronunciation only, states it provides no evidence that Profy's framework extends to other imitation domains, and calls for longitudinal study of long-term learning outcomes.

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
