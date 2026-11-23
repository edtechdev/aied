---
title: "Lecture Board Readability as an AI-Measurable Predictor of Perceived Teaching Clarity"
created: "2026-11-23T10:25:00-05:00"
updated: "2026-11-23T10:25:00-05:00"
type: article
authors: ["Nachshon Hirschenberger", "Roni Segal", "Yossi Ben Zion"]
venue: "arXiv preprint"
evidence_context: educational
foundations: [ai-education]
pedagogy: [cognitive-psychology, scaffolding]
technology: [generative-ai, llm, multimodal]
assessment: [educational-measurement, self-report-measures, formative-assessment]
methods: [quantitative-research, ai-ed-evaluation]
ethics: [privacy, trust]
discipline: [physics education, math education]
level: [higher ed, undergraduate, graduate]
audience: [instructors, researchers, administrators]
page_kind: [evaluation]
research_method: [secondary analysis, survey]
sources: ["raw/papers/hirschenberger-lecture-board-readability-2026.md"]
confidence: high
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-23"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, quotes, links]
---

> **Synthesis:** Hirschenberger, Segal, and Ben Zion (2026) test whether a [[multimodal|vision-language model]] can score something instructors rarely measure about themselves — how readable their lecture-board writing is — and whether that score relates to how students experience the course. From archival recordings of 56 [[higher-ed|university]] physics and applied-mathematics courses taught by 18 lecturers, they extracted 2,645 board images and scored each one 50 times with Claude 3.5 Sonnet on readability, organization and visual elements. Course-level readability was associated with student-rated clarity (r = .434) and organization (r = .455), and it survived as the only significant predictor of the composite survey score once class size, mean course grade and study year were controlled. The associations held when only one or two images per lecture were used. The authors are explicit that the measure tracks perceived clarity rather than learning, and that [[educational-measurement|measurement]] reliability is not the same as pedagogical relevance — the dimension raters agreed on most, visual richness, was the one least related to student ratings. The result is a proof of concept for [[formative-assessment|formative]] feedback in STEM teaching, not a new summative instrument.

*Correlational study of 2,645 board images from 56 course instances, each image scored 50 times by Claude 3.5 Sonnet (version 20241022), compared with institutional student evaluation scores at course level.*

## Key Findings

- **Board readability tracked perceived clarity.** The AI-derived Readability score correlated significantly with student-rated Clarity, Organization and the composite Average, and those three associations survived Bonferroni correction across the eighteen AI–survey correlations tested.
- **It was the only predictor left after covariates.** Once study year, class size and mean course grade were accounted for, board readability still stood out as the only image-based measure that predicted how students rated the course, and it added explanatory power beyond those course-level factors.
- **Thin slices suffice.** Randomly keeping two images, then one image, per lecture and repeating the correlation 5,000 times left the association nearly unchanged, so the signal does not depend on dense sampling.
- **Organization and visual richness did not predict perceptions.** Order showed no meaningful association with any survey dimension despite correlating with Readability; Visuals was largely unrelated to clarity and organization, though it tracked Interest modestly.
- **Agreement was uneven across dimensions.** Four human raters agreed far more readily on visual richness than on readability or order, and both AI models tracked that same ordering — reaching the human ceiling on Visuals while falling well short on Order.
- **The measure is selective by design.** Readability tracked structural survey items strongly and affective ones weakly, with Interest never reaching significance, which the authors read as construct validity rather than a general teaching-quality signal.

## The board as a measurable artifact

Lecture boards remain central to physics and mathematics teaching, yet the visual quality of what instructors write has rarely been measured systematically. The authors treat board writing as an instructional artifact whose properties can be sampled cheaply and repeatedly — unlike end-of-course student evaluations, which require institutional coordination and capture a single retrospective snapshot. That contrast motivates the study rather than merely framing it: automated scoring of archived video promises feedback during a course, at negligible marginal cost, if it can be shown to carry a signal students recognize.

## Method: thin-slice scoring against course-level surveys

The sample comprised 56 course instances drawn from 23 unique courses offered by Bar-Ilan University between 2017 and 2023, spanning physics content courses and mathematics courses taught within the physics program, taught by 18 lecturers across three study years and including mandatory and elective courses. Frames were extracted at 20, 40 and 60 minutes into each lecture, manually inspected, and replaced from a ±5-minute window when the board was obscured. Each image was scored 50 times by Claude 3.5 Sonnet through an API, using a standardized prompt, and the mean was recorded. Survey reference measures were the institution's own six items — Clarity, Interest, Organization, Questions, Satisfaction and a composite Average — restricted to courses with adequate response rates (median 44%, range 16–81%).

## What predicted, and what did not

Readability behaved like a narrow, visually grounded signal. It aligned with the survey items that describe visual and structural clarity, and it stopped there: the correlation with Interest did not reach significance, and the modest association with attentiveness to questions (r = .316) did not survive correction. Order, by contrast, showed no meaningful association with any survey dimension. The authors offer two readings: order was the dimension on which humans agreed least and on which Claude aligned worst (31% of the human ceiling), and interpreting spatial organization from a static image requires the chronological development a snapshot cannot convey. They also raise a substantive possibility — that the relationship may be non-monotonic, since a disorganized board hinders students while a rigidly pre-planned layout may signal delivery detached from the class. Visuals is the clearest case of reliability without relevance: it was the easiest dimension for humans and both models to agree on, and the least related to perceived clarity, plausibly because diagrams and color are driven by subject matter rather than by instructional skill.

## How far the measurement can be trusted

The human validation substudy is the paper's most careful section. Rather than treating perfect agreement as the benchmark, the authors compute the agreement among the four human raters themselves as a ceiling, then express each AI model's alignment as a percentage of it — disaggregated by rater and dimension, which they note is uncommon in this literature. On Visuals both models reached or exceeded the human ceiling; on Readability Claude reached 64% and Gemini 70%; on Order Claude fell to 31%. The authors' inference is that the constructs themselves, not only the scoring method, are defined loosely enough to be read differently by different observers. Because the noise appears random, they argue it would attenuate rather than inflate the reported associations, but they conclude that prompts need sharper operational definitions before wider use.

## What this means for practice

- **[[teacher-role|Instructors]].** Treat board legibility as a [[formative-assessment|formative]] signal you can act on — spacing, symbol clarity, pacing — not as a verdict on your teaching, and certainly not as evidence about student learning.
- **Faculty developers.** The metric separates perceptual clarity from affective and interpersonal judgments, so it can open a conversation about structure that global evaluation scores obscure; two lecturers with similar overall ratings can differ sharply in how clearly they lay out a board.
- **Administrators.** Deploy only inside a governed process. The authors name data ownership, instructor consent and the risk of reductive or punitive use as unresolved, and the paper offers no validation for summative decisions.
- **Researchers.** Report human–human agreement per dimension as the ceiling against which an automated score is judged rather than pooling raters into one coefficient, test non-linear models for organization, and run the controlled experiment the authors propose — crossing legible and less legible writing with organized and disorganized layouts while measuring comprehension and recall alongside perceived clarity.

## Limitations

- The design is correlational, so the mechanism offered — processing fluency and extraneous [[cognitive-psychology|cognitive load]] — is plausible rather than tested, and legibility cannot be separated from stable instructor habits such as preparation or pace.
- The comparison operates at course level: N = 56 course instances from a single department at a single institution, with one aggregated survey score per course.
- Student evaluations are a pragmatic reference, collected once per course from voluntary participants (median response rate 44%), and the study includes no direct measure of student learning.
- Image-based analysis captures only the visual-spatial dimension; interaction, responsiveness to questions and classroom climate are outside it.
- The scoring model is Claude 3.5 Sonnet (version 20241022), so the results describe that generation; the authors call for better-defined prompts and higher human–AI agreement before broader application.
- Instructors consented retrospectively to analysis of recordings made during routine teaching, and the board images themselves are not published, so independent replication depends on the anonymized dataset deposited at Zenodo.

## Citation

Hirschenberger, N., Segal, R., & Ben Zion, Y. (2026). [Lecture Board Readability as an AI-Measurable Predictor of Perceived Teaching Clarity](https://arxiv.org/abs/2611.26894). *arXiv preprint*.
