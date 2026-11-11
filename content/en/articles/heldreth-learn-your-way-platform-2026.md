---
title: "An experimental evaluation of an AI-powered interactive learning platform"
created: "2026-11-11T11:30:00-05:00"
updated: "2026-11-11T11:30:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors]
sources: ['raw/papers/heldreth-learn-your-way-platform-2026.md']
source_url: "https://doi.org/10.3389/frai.2026.1783117"
source_depth: full text
confidence: high
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, adaptive-learning, personalized-learning]
assessment: [formative-assessment, feedback]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Heldreth and colleagues (2026) randomly assigned 60 US high school students to learn a neuroscience textbook chapter either through *Learn Your Way*, a research platform that converts the chapter into five AI-generated modalities with embedded quizzes and feedback, or through the same chapter in a PDF reader. On a 12-point immediate recall test the platform group averaged 9.2 against 8.2, and on a 6-point follow-up three to seven days later 4.7 against 4.0, with small-to-medium effects (r = 0.24 and 0.25). Students also rated the platform more useful (3.6 against 3.1). The design cannot separate the content transformations from the quizzes bundled with them, because the textbook condition had neither, but within that limit a [[personalized-learning|personalized]] reading environment with [[feedback|feedback]] beat a static [[k-12|high school]] textbook on both immediate and delayed recall.

## Key Findings

1. **Immediate recall favored the platform.** *Learn Your Way* students scored Mdn = 9.5 (IQR = 3; M = 9.2, SD = 2.2) against Mdn = 8.0 (IQR = 2; M = 8.2, SD = 2) for the textbook group on the 12-point assessment, a significant one-sided difference (Z = 1.89, p = 0.029, r = 0.24).
2. **The advantage held after a delay.** On the 6-point long-term recall assessment, completed by 58 of 60 participants within 3–7 days, the platform group scored Mdn = 5.0 (IQR = 2; M = 4.7, SD = 1.2) against Mdn = 4.0 (IQR = 2; M = 4, SD = 1.4), with Z = 1.89, p = 0.03, r = 0.25.
3. **Almost nothing was lost in between.** Platform students scored 77% immediately (M = 9.2/12) and 78% at follow-up (M = 4.7/6); textbook students moved from 68% (M = 8.2/12) to 67% (M = 4/6). The immediate advantage therefore persisted rather than decaying.
4. **Students rated the platform better on every experiential measure.** Usefulness for learning was 3.6 (SD = 0.6) against 3.1 (SD = 0.7) on a 4-point scale (Z = 3.08, p = 0.001, adjusted p = 0.003, r = 0.40). The largest gaps were feeling more comfortable taking the assessment (4.60 against 3.83; Z = 3.77, adjusted p < 0.001, r = 0.49) and believing the tool would make them more effective than their current tools (4.17 against 3.07; Z = 4.11, adjusted p < 0.001, r = 0.53).
5. **Time on task did not explain the result.** Platform students averaged 30:49 against 22:05 (minutes and seconds), with maxima of 40:50 and 32:49. Generalized additive models found no significant smooth term for learning duration on either immediate recall (F = 0.48, p = 0.49 for the platform; F = 1.43, p = 0.283 for the textbook) or long-term recall, and delay length within the 3–7 day window was also non-significant.
6. **Using more modalities was not associated with better scores.** All 30 platform students used Immersive Text and the QuizMe feature; 17 also used Slides, 14 Mindmap, 6 Audio and 4 Video. Students who used Immersive Text only (n = 12, M = 8.6) did not differ significantly from those who added at least one modality (n = 18, M = 9.6; Z = 1.48, p = 0.144, r = 0.27), and the correlation between modality count and immediate recall was not significant (Pearson's r = 0.24, p = 0.206).
7. **Baseline differences were checked and not found.** Reading comprehension was equivalent (Mdn = 7 in both; Z = 0.54, p = 0.588, r = 0.07), as were topic familiarity (p = 0.337), in-session familiarity (p = 0.616), interest (p = 0.934) and perceived assessment difficulty (p = 0.268).

## What the study did

The experiment was a single 90-minute in-person session followed by a remote assessment three days later. Sixty high school students from the Chicago area were recruited through a research vendor, with deliberate sampling from rural (n = 17), urban (n = 18) and suburban (n = 25) areas; 52% were male, 47% female and 1% non-binary, and all were screened for comparable reading comprehension. Thirty were randomly assigned to each condition. The source material was a neuroscience textbook chapter, "Brain Development During Adolescence," chosen by a panel of pedagogy experts.

Participants were told to imagine their teacher had asked them to learn the chapter and then take an assessment. The textbook group read the chapter in a web-based PDF reader. The platform group selected a preloaded PDF, chose a grade level and interests such as music or video games, and began in Immersive Text, which chunks the chapter, adds embedded questions, quizzes, generated images and summaries, timelines and memory aids. From there they could switch to Slides, a narrated Video deck, an Audio Lesson built as a conversation between an AI teacher and a student, or an interactive Mindmap. Students were given up to 40 minutes with the tool and required to spend at least 20.

Assessments were built by pedagogy experts against Bloom's Taxonomy. The immediate test contained short answer, single-answer and multi-answer multiple choice, and matching items, and was scored out of 12 points. The follow-up contained one short answer, one single-answer multiple choice and one matching question, scored out of 6. Short answers were scored on a 3-point rubric by a pedagogy expert, with a second rater scoring one third of the responses blind to condition. The learning-experience questionnaire followed the immediate test, and a 30-minute qualitative interview closed the session.

Analysis used Wilcoxon-Mann-Whitney tests, because Shapiro-Wilk tests showed non-normal distributions, with Benjamini-Hochberg correction across the experience measures. The authors also fitted generalized additive models to test whether time spent learning or the length of the retention interval explained the scores.

## What the platform adds, and what the trial cannot separate

The platform's design rests on two claims. The first is that multiple representations of the same content build a richer mental model than one, drawing on Mayer's multimedia learning principles and dual coding. The second is that letting students choose among representations supports autonomy, which self-determination theory treats as a precursor to intrinsic motivation and effort. Students also set a grade level and interests, which adjust the generated text.

Qualitative interviews point at the same features the quantitative results cannot isolate. Students described reading the same material in different formats as making it stick, and described the chunking and [[scaffolding|scaffolds]] in Immersive Text as reducing the sense of being overwhelmed. Every platform student used QuizMe, and students described the feedback as explaining why an answer was right rather than simply advancing. Textbook students asked for exactly those features when describing their ideal tool: visual formats, checkpoints and quizzes, and shorter sections. The authors read this convergence as evidence that the benefit comes from multiple representations plus learner choice, not from exposure to more formats.

The trial's own limitation follows directly. The textbook condition was a PDF reader with no quizzes, no feedback and no transformations, so the comparison bundles content transformation, interactive assessment and choice into one treatment. The authors state that a feature-matched control with non-AI quizzes is needed to isolate the contribution of the generative transformations, and they do not claim that using more modalities causes better learning.

## What this means for practice

- **Instructors:** the intervention that produced these gains was not a chatbot answering questions but a structured reading environment with chunking, embedded practice and feedback. Adopting the assessment layer may matter more than adopting a model.
- **Designers:** choice among formats is part of the theory of change, but the data do not show that more formats are better. Build a small set of strong representations and a quiz layer that explains answers, rather than maximizing the number of modalities.
- **Researchers:** demand a feature-matched control. Without one, a trial of an AI platform against a static PDF measures the whole package, and the authors say so themselves.
- **Administrators:** the effects are small in standardized terms (r = 0.24 and 0.25) and come from a 40-minute lab session on one chapter. They are a proof of concept for scaling personalized support, not evidence that the platform will move grades in a semester.

## Limitations

The study ran in a laboratory with 60 vendor-recruited students, one neuroscience chapter, one age band and a single session, so its external validity is limited by its own authors' account. The comparison lacks a feature-matched control: the textbook condition had no quizzes, feedback or transformations, which means the gains cannot be assigned to generative AI rather than to interactive assessment and choice. The follow-up covered 3–7 days, not a term, and 58 of 60 participants completed it. Experience measures are self-reported agreement ratings, and the outcome tests were built and scored by the study's own pedagogy experts. The modality analysis was exploratory and underpowered after splitting 30 students into subgroups.

## Citation

Heldreth, C., Akrong, D., Vardoulakis, L. M., Miller, N. E., Haramaty, Y., Belinsky, L., Hackmon, L., Ortiz Tapia, A., Tootill, L., & Siebert, S. (2026). [*An experimental evaluation of an AI-powered interactive learning platform*](https://doi.org/10.3389/frai.2026.1783117). Frontiers in Artificial Intelligence, 9:1783117. https://doi.org/10.3389/frai.2026.1783117
