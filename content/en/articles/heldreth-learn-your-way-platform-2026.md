---
title: "An experimental evaluation of an AI-powered interactive learning platform"
created: "2026-11-11T07:36:47-05:00"
updated: "2026-11-14T10:00:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** A structured, AI-generated reading environment produced better recall than the same textbook chapter as a PDF — immediately and again a week later — and students rated it more useful. Heldreth and colleagues randomly assigned 60 US high school students to *Learn Your Way*, which turns the chapter into several formats with embedded quizzes and feedback, or to the PDF. The catch is that the comparison bundled reformatting, practice and choice together: the PDF had no quizzes or feedback, so the trial cannot say which ingredient mattered. Within that limit, [[personalized-learning|personalized]] reading with [[feedback|feedback]] beat a static [[k-12|high school]] textbook, the arrangement many classrooms still default to.

## Key Findings

1. **Students learned more with the platform, and kept the edge.** The platform group outscored the textbook group on the end-of-session test and was still ahead on a short follow-up taken three to seven days later.
2. **Nothing decayed in between.** Both groups scored about the same share correct at the follow-up as at the first test, so the platform's advantage persisted rather than fading.
3. **Students preferred the platform on every measure asked.** They found it more useful for learning, felt more comfortable taking the assessment, and were more confident it would make them effective.
4. **Time on task did not explain the difference.** Platform students spent longer on average, but extra minutes were not associated with higher scores in either group.
5. **Using more formats was not better.** Every platform student read the immersive text and used the quiz feature; those who added slides, mind maps, audio or video did not score significantly higher than those who did not.
6. **The groups started equal.** Reading comprehension, topic familiarity, interest and expected difficulty were equivalent before the session.
7. **The comparison bundles several changes at once.** The textbook condition had no quizzes, feedback or reformatting, so the trial cannot attribute the gain to AI rather than to practice with feedback.

## What the study did

Sixty high school students from the Chicago area were recruited through a research vendor, with deliberate sampling from rural (17), urban (18) and suburban (25) areas. All were screened for comparable [[reading-education|reading comprehension]] and randomly assigned, thirty to each condition. The experiment was a single 90-minute in-person session; the material was a neuroscience textbook chapter, "Brain Development During Adolescence," chosen by a panel of [[pedagogy|pedagogy]] experts.

Participants were told to imagine their [[teacher-role|teacher]] had asked them to learn the chapter and then take an assessment. The textbook group read it in a web-based PDF reader. The platform group chose a grade level and interests such as music or video games, then began in Immersive Text, which chunks the chapter and adds embedded questions, quizzes, generated images, summaries, timelines and memory aids. From there they could switch to Slides, a narrated Video deck, an Audio Lesson staged as a conversation between an AI teacher and a student, or an interactive Mindmap. They had up to 40 minutes with the tool and had to spend at least 20.

Assessments were built by pedagogy experts against [[bloom-taxonomy|Bloom's Taxonomy]]. The immediate test contained short answer, single-answer and multi-answer multiple choice, and matching items, and was scored out of 12 points. The follow-up contained one short answer, one single-answer multiple choice and one matching question, scored out of 6. Short answers were scored on a 3-point [[rubrics|rubric]] by a pedagogy expert, with a second rater scoring one third of the responses blind to condition. A learning-experience questionnaire followed the immediate test, and a 30-minute [[qualitative-research|qualitative]] interview closed the session. Analysis used Wilcoxon-Mann-Whitney tests because the distributions were non-normal, with correction across the experience measures, and generalized additive models to test whether time spent learning or the length of the retention interval explained the scores.

## What the platform adds, and what the trial cannot separate

The platform's design rests on two claims. The first is that multiple representations of the same content build a richer mental model than one, drawing on Mayer's multimedia learning principles and dual coding. The second is that letting students choose among representations supports autonomy, which [[self-determination-theory|self-determination theory]] treats as a precursor to [[motivation|intrinsic motivation]] and effort. Students also set a grade level and interests, which adjust the generated text.

The scores moved in the platform's favor on both tests. On the 12-point immediate assessment the platform group averaged 9.2 against 8.2, and on the 6-point follow-up 4.7 against 4.0. Expressed as shares of the available points, that is 77% and 78% for the platform group against 68% and 67% for the textbook group: the advantage was present at the first test and not lost over the delay. Platform students also rated usefulness for learning at 3.6 against 3.1 on a four-point scale, with the largest gaps in feeling comfortable taking the assessment (4.60 against 3.83) and believing the tool would make them more effective than their current tools (4.17 against 3.07).

Time is the obvious alternative explanation, and it does not fit. Platform students averaged 30:49 in the tool against 22:05 for reading, with maxima of 40:50 and 32:49, but duration did not predict scores on either test, and the length of the delay within the 3–7 day window did not either.

Neither did variety. All 30 platform students used Immersive Text and QuizMe; 17 also used Slides, 14 Mindmap, 6 Audio and 4 Video. Students who stayed with Immersive Text alone (12 of them) averaged 8.6, against 9.6 for those who added at least one other format (18), a difference that was not significant, and the number of formats used was not correlated with immediate recall.

The interviews point at the same features the [[quantitative-research|quantitative]] results cannot isolate. Students described reading the same material in different formats as making it stick, and described the chunking and [[scaffolding|scaffolds]] in Immersive Text as reducing the sense of being overwhelmed. Every platform student used QuizMe, and students described its feedback as explaining why an answer was right rather than simply advancing. Textbook students asked for exactly those features when describing their ideal tool: visual formats, checkpoints and quizzes, and shorter sections. The authors read this convergence as evidence that the benefit comes from multiple representations plus learner choice, not from exposure to more formats.

What the trial cannot do is separate those ingredients. The textbook condition was a PDF reader with no quizzes, no feedback and no transformations, so the comparison bundles content transformation, interactive assessment and choice into one treatment. The authors state that a feature-matched control with non-AI quizzes is needed to isolate the contribution of the generative transformations, and they do not claim that using more modalities causes better learning. Nor did the groups differ at baseline: reading comprehension, topic familiarity, in-session familiarity, interest and perceived assessment difficulty were all equivalent at baseline.

## What this means for practice

- **Instructors.** the intervention that produced these gains was not a [[conversational-ai|chatbot]] answering questions but a structured reading environment with chunking, embedded practice and feedback. Adopting the assessment layer may matter more than adopting a model.
- **Designers.** choice among formats is part of the theory of change, but the data do not show that more formats are better. Build a small set of strong representations and a quiz layer that explains answers, rather than maximizing the number of modalities.
- **Administrators.** the gains are modest in standardized terms and come from a 40-minute lab session on one chapter. Treat this as a proof of concept for personalized support, not as evidence that the platform will move grades over a semester.
- **Researchers.** demand a feature-matched control. Without one, a trial of an AI platform against a static PDF measures the whole package, and the authors say so themselves.

## Limitations

The study ran in a laboratory with 60 vendor-recruited students, one neuroscience chapter, one age band and a single session, so its external validity is limited by its own authors' account. The comparison lacks a feature-matched control: the textbook condition had no quizzes, feedback or transformations, which means the gains cannot be assigned to [[generative-ai|generative AI]] rather than to interactive assessment and choice. The follow-up covered 3–7 days, not a term, and 58 of 60 participants completed it. Experience measures are [[self-report-measures|self-reported]] agreement ratings, and the outcome tests were built and scored by the study's own pedagogy experts. The modality analysis was exploratory and underpowered after splitting 30 students into subgroups.

## Citation

Heldreth, C., Akrong, D., Vardoulakis, L. M., Miller, N. E., Haramaty, Y., Belinsky, L., Hackmon, L., Ortiz Tapia, A., Tootill, L., & Siebert, S. (2026). [*An experimental evaluation of an AI-powered interactive learning platform*](https://doi.org/10.3389/frai.2026.1783117). Frontiers in Artificial Intelligence, 9:1783117. https://doi.org/10.3389/frai.2026.1783117
