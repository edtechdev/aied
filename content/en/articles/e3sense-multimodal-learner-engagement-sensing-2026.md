---
title: "E3Sense: Head-Confined Multimodal Sensing of Learner Engagement"
created: "2026-09-23T09:15:59-04:00"
updated: "2026-09-23T09:15:59-04:00"
type: article
published: "2026-09-22"
sources: ['raw/papers/e3sense-multimodal-learner-engagement-sensing-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [user study, system development]
discipline: [learning sciences]
level: [higher ed]
audience: [researchers, educational technology developers]
pedagogy: [student-engagement, online-teaching-and-learning, video-education, self-regulated-learning]
technology: [multimodal, affective-computing, machine-learning, learning-analytics, student-modeling]
assessment: [educational-measurement, self-report-measures]
methods: [quantitative-research, mixed-methods-research]
ethics: [accessibility]
foundations: [theories-and-frameworks]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-23"
    agent: hermes-agent
---

> **Synthesis:** E3Sense co-locates three consumer-grade sensors on the head — a dry-electrode EEG headband, eye-tracking glasses, and forehead electrodermal electrodes — and asks whether signals gathered entirely there predict how engaged a learner is during an educational [[video-education|video]]. Thirty [[higher-ed|university]] participants rated five segments per video, yielding 450 segment-level [[student-engagement]] ratings on a five-level ordinal scale. On fifteen held-out forehead participants, AdaBoost over a fused 166-dimensional [[multimodal]] representation reached 75.0% balanced within-one-level accuracy against 63.0% for always predicting the training fold's most common rating. In a separate exploratory analysis, conditioning on learners' own definitions of engagement raised that measure from 64.6% to 71.5% across 18 participants. The paper is a feasibility proof, not deployment: [[self-report-measures|self-reported]] engagement is predictable from head-confined physiological [[affective-computing|sensing]], and what a learner counts as engagement carries information the [[machine-learning|sensor scores]] alone do not.

## Key Findings
1. **Head-confined sensing beat every sensor-free reference.** AdaBoost on the fused 166-dimensional representation reached 75.0% ± 7.0 balanced one-off accuracy and 1.043 ± 0.158 macro-MAE, 12.0 percentage points above the 63.0% mode baseline.
2. **Scoring held out learners, not segments.** Five participant-grouped folds trained on 24 participants from both EDA sites and scored the fifteen held-out forehead participants, whose 225 segments held 24, 31, 34, 84 and 52 observations for ordinal codes 0–4.
3. **The best model family changed with the target.** AdaBoost led five-level ordinal prediction, but LightGBM held the highest secondary binary macro-F1 at 58.9% ± 7.9, ahead of XGBoost at 56.7% ± 5.1 and AdaBoost at 54.3% ± 3.0.
4. **Ratings clustered at the engaged end.** Across 450 segment ratings, 37, 57, 73, 169 and 114 ran from Extremely Disengaged to Extremely Engaged, so 63% sat at the two engaged levels and 21% at the two disengaged ones.
5. **Learners' definitions moved the prediction.** Adding definition–score interactions to an ordinal calibrator raised balanced one-off accuracy from 64.6% to 71.5% and lowered macro-MAE from 1.216 to 1.124 across eighteen participants.
6. **Feature pruning split the model families.** Keeping the top 20 of 166 features lifted AdaBoost's balanced one-off accuracy 0.9 points to 75.9% while its binary macro-F1 fell 1.3 points to 53.0%.

## A head-confined sensor configuration
Conventional configurations spread instrumentation across body and desk — a multi-electrode EEG cap, wrist electrodermal electrodes, a screen-mounted eye tracker — suiting a laboratory but making calibration a barrier to dormitory video watching. E3Sense puts all three [[multimodal]] streams on the head with consumer devices: a Frenz BrainBand delivering four dry EEG channels at 125 Hz, of which two frontal channels enter the analysis; Pupil Labs Neon glasses exporting twenty eye-state channels at 200 Hz; an EmotiBit measuring electrodermal activity at forehead electrodes fixed about 4 cm apart by the eye-tracker frame. The devices clock independently, so streams are aligned on device-native timestamps and periodic clock anchors. Tokens are twelve 10-second EEG, six 20-second eye, and three 40-second EDA windows, mean-pooled into a shared 120-second window of 28 EEG, 127 eye-tracking, and 11 electrodermal dimensions.

## What head-confined sensing predicts, and against what
RQ1's protocol is strict: five participant-grouped folds, 225 scored segments, every rating from a learner the model never saw. AdaBoost produced the strongest ordinal point estimates at 75.0% ± 7.0 balanced one-off accuracy and 1.043 ± 0.158 macro-MAE; the other tree ensembles landed between 67.3% and 72.9%. Read that gain carefully: within-one credit means a sensor-free baseline predicting the training-fold mode (code 3) earns 63.0% for free on this skewed distribution. Excluding the four participant-session recordings without usable electrodermal data leaves 215 segments and AdaBoost still highest at 72.7% ± 4.8. The results are descriptive, with no significance claim and class weighting so rarer disengaged states are not [[student-engagement|masked by the majority]].

## Asking learners what engagement means
The study's second half interrogates the label. Exit interviews and reflexive [[qualitative-research|thematic analysis]] produced explicit definitions from 18 of 24 interviewees, coded as three overlapping indicators — Cognitive (seven participants), Behavioral (five), and Emotional (eight) — aligning with the tripartite [[theories-and-frameworks|engagement framework]] rather than with sensor output. The interview text never reaches a model: the codes enter only a second-stage ordinal calibrator over four frozen per-modality scores and an EDA-site indicator. A matched control reached 64.6% balanced one-off accuracy, definition main effects reached 66.1%, and twelve definition–score interactions reached 71.5% with macro-MAE falling from 1.216 to 1.124. The pattern suggests the codes modulate how sensor scores map onto ratings — exploratory evidence for [[personalized-learning|personalized]] interpretation, not an [[adaptive-learning|adaptive]] claim.

## What this means for practice
- **Instructors.** Ask learners what engagement means to them before interpreting any engagement signal: one rating level covered understanding, sustained attention, interest, and emotion, and those criteria changed how scores mapped to ratings.
- **Researchers.** Report balanced one-off accuracy beside macro-MAE, the label distribution, per-class results, and a constant baseline — the mode alone scored 63.0% here, so a within-one number quoted alone overstates a sensor's contribution.
- **[[educational-technology-developers|Educational technology developers]].** Treat the head as a viable sensing site: three off-the-shelf, dry-electrode devices aligned in software predicted engagement without a scalp cap or wrist band, making one integrated form factor the next design question.

## Limitations
- RQ1 rests on fifteen forehead participants and RQ2 on eighteen definition-coded participants from one university community (N = 30, ages 19–43); repeated segments add observations, not learners. Eyeglasses wearers were excluded because lenses occlude the eye tracker's cameras.
- EDA placement was confounded with collection batch: the first fifteen participants wore wrist EDA, the next fifteen forehead, nobody wore both. Every model also received the complete representation, so no single sensor's contribution is established.
- Four participant-session EDA recordings were unusable (20 of the 450 segments, 10 of 225 RQ1 test rows), and the complete-case reanalysis altered both training and test [[writing-education|composition]], so it cannot isolate imputation effects.
- Ratings were retrospective after each video and features summarize only the first 120 seconds of segments lasting roughly 140 to 155 seconds; the outcome is reported engagement, not achievement, and all participants shared the same four videos.

## Connected Concepts
- [[student-engagement]]
- [[multimodal]]
- [[affective-computing]]
- [[self-report-measures]]
- [[learning-analytics]]
- [[educational-measurement]]
- [[student-modeling]]
- [[machine-learning]]
- [[video-education]]
- [[online-teaching-and-learning]]
- [[self-regulated-learning]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[theories-and-frameworks]]
- [[limitations-in-aied-research]]

## Connected Articles
- [[engagement-assessment-video]] — EduGage: Methods and Dataset for Sensor-Based Momentary Assessment of Engagement in Self-Guided Video Learning
- [[mind-the-student-engagement-prediction-2026]] — Mind the Student: Behavioral and Contextual Cues for Automated Engagement Prediction in Online Learning
- [[physiological-signals-exam-outcomes-ml]] — Leveraging Physiological Signals to Predict Exam Outcomes with Machine Learning
- [[eeg-familiarity-automated-assessment-2026]] — Automating Learner Assessment: Benchmarking Machine Learning and Deep Learning Models for EEG-Based Familiarity Prediction
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in high school students
- [[engagement-intensity-learner-modeling]] — Engagement Intensity as a Learner-Modeling Signal for Adaptive AI Ethics Instruction
- [[multimodal-affective-its-presentation]] — An Interpretable Closed-Loop Intelligent Tutoring System for Multimodal Affective Feedback in Asynchronous Presentation Training
- [[eight-mode-ai-engagement-typology-2026]] — The Eight-Mode AI Engagement Typology: Differential Cognitive Signatures and a Self-Report–Behavior Gap

## Citation
Anupkrishnan, S., Sayar, I., Lee, J., Musunuri, S. H., Su, G.-M., Endres, M., et al. (2026). [E3Sense: Head-Confined Multimodal Sensing of Learner Engagement](https://arxiv.org/abs/2609.26569). arXiv:2609.26569.