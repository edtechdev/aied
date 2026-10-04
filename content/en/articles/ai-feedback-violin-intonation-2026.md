---
title: "AI AI Tell Me: A Model Study on the Effect of Artificial Intelligence-Assisted Feedback on Intonation in Violin Education"
created: "2026-10-04T05:10:00-04:00"
updated: "2026-10-04T05:10:00-04:00"
type: article
sources: ['raw/papers/ai-feedback-violin-intonation-2026.md']
confidence: low
page_kind: [evaluation]
research_method: [experiment, interviews]
discipline: [music education]
level: [higher ed, undergraduate]
audience: [instructors]
pedagogy: [motivation, self-regulated-learning]
technology: [generative-ai, llm, conversational-ai]
assessment: [feedback, formative-assessment]
methods: [mixed-methods-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Twelve violin students at one Turkish university practiced for four weeks while their pitch was measured in cents and handed to [[generative-ai|generative AI]] for analysis instead of to their [[teacher-role|teacher]]. Intonation scores rose significantly, and students described the analysis as detailed, personalized and motivating. The authors frame the models as a "digital mirror" that supplements rather than replaces studio teaching, and they are explicit that twelve students, one institution and one skill limit what the result can support.

## Key Findings

1. Intonation accuracy improved significantly across the four-week experiment: the mean score rose from 144.75 at pre-test to 207.33 at post-test (t = -8.889, p < .05) on a paired-samples t-test.
2. The measurements were objective rather than judged by ear: performances were recorded in Cubase, pitch deviation was read in cents through its VariAudio module, and 2,208 note-level data points were collected.
3. The analysis was deliberately teacher-free. Students' cent tables went to ChatGPT-4o and DeepSeek-V3, which returned technical and musical recommendations without an instructor in the loop.
4. Students reported satisfaction with the detail of the analysis, the personalized multi-dimensional recommendations, and the [[motivation|motivational]] framing — one received a projection that deviations of ±50 cents would fall to ±20 within fifteen days.
5. The authors position [[ai-feedback-quality|AI feedback]] as complementary to traditional violin teaching and data-driven decision support, not as a replacement for the teacher.
6. Twelve students in one university over four weeks is the entire evidence base, and the study measured intonation alone, which the authors name as the limit on generalizability.

## What the feedback loop actually measured

The design is unusually concrete for a study of AI feedback. Student performances were recorded in Cubase, and pitch deviation was extracted in cents through the VariAudio module, giving 2,208 note-level data points across the four-week process. Those cent values were then converted into categorical scores against a defined accuracy scale, where a deviation of 0 to 5 cents from the target pitch counts as "very good", 6 to 10 as "good", and the scale runs down to 31 cents and beyond as "very poor".

Only after that measurement step did AI enter. Students' cent tables were presented to two generative models, ChatGPT-4o and DeepSeek-V3, with no teacher intervention, and the models produced both technical corrections and musical suggestions. The authors describe this as a division of labor: the software supplies instant objective measurement, the model supplies interpretation, and the teacher is left to supply what neither can.

## What changed, and what the design can support

The [[quantitative-research|quantitative]] result is a significant pre-to-post gain. Mean intonation scores moved from 144.75 to 207.33, with a paired-samples t-test giving t = -8.889 and p < .05; normality checks were satisfied at both measurement points (pre p = .545, post p = .805). Read plainly, students played measurably more in tune at the end of four weeks than at the start.

What the design cannot do is separate that gain from everything else in those four weeks. There was no control condition: twelve students formed a single group measured before and after. Practice, teacher contact, lesson time, familiarity with the recording task, and the motivational effect of being measured all moved alongside the AI feedback, so the study establishes that the package worked, not that the AI component caused the change.

## What students said about working with a model

The [[qualitative-research|qualitative]] strand used descriptive analysis of student accounts, and the reported themes are consistent: students valued the granularity of the analysis, the fact that recommendations were personalized and multi-dimensional rather than generic, and the motivational quality of the guidance. One student was given a forward projection that deviations of ±50 cents would narrow to ±20 within fifteen days — a form of feedback a teacher would rarely have time to construct per student.

The authors read these accounts through [[self-regulated-learning|self-regulation]]: individualized feedback strengthened students' sense that their work was being noticed and tracked, which in turn supported their own planning and motivation. That framing matters for how the study should be used, because it locates the benefit partly in the measurement relationship rather than in the model's advice alone.

## Where this leaves studio teaching

The paper is candid that its contribution is to a thin literature: generative AI feedback for intonation has almost no experimental base in [[arts-design-and-media-education|music education]]. Its own reading of the evidence is that AI feedback complements conventional violin instruction and strengthens data-driven decisions rather than displacing the teacher, and its forward-looking recommendations point at mobile and free tools for out-of-lesson [[self-assessment]], systems that combine intonation with posture analysis, and development work for traditional repertoires such as Turkish music.

## What this means for practice

- **Instructors.** Treat the cent-level measurement as the reusable part and the model's advice as the disposable part. Recording a passage and reading pitch deviation in cents gives you an objective baseline and a progress trace; whether ChatGPT or DeepSeek wrote the recommendation matters less than whether the student acted on it and played it again.
- **Studio and ensemble teachers.** Hand students a routine they can run between lessons — record, extract deviations, ask a model for practice suggestions, return with the evidence — and keep the musical judgment in the room. The study's motivational finding came from students being measured and tracked, which is a job you can assign without any model.
- **Faculty developers.** Note what the design did not test. Before adopting an AI-feedback routine, decide what evidence would show it works beyond a single four-week block, because the published evidence here is twelve students in one program.
- **Researchers.** The obvious next study is the one this paper cannot be: the same cent-based measurement with a control group, longer than four weeks, across more than one institution, and with intonation held constant while the feedback source varies.

## Limitations

- Twelve violin students in the music education department of one Turkish state university over four weeks. The authors name this directly as the constraint on generalizing the findings.
- There was no control group: a single cohort was measured before and after, so the gain cannot be attributed to the AI feedback rather than to practice, teaching, or repeated testing.
- The outcome was intonation only. Posture, tone quality, phrasing and sight-reading — the rest of what violin teaching develops — were not measured, which the authors acknowledge as a scope limit.
- The measurement chain is specific: Cubase VariAudio for pitch extraction and two named models, ChatGPT-4o and DeepSeek-V3, for interpretation. Both the software and the model generation date the result.
- The qualitative strand was a descriptive analysis of a small group of students, so the reported satisfaction themes describe those twelve students rather than music students generally.

## Citation

Aksoy, Y. (2026). [AI AI Tell Me: A Model Study on the Effect of Artificial Intelligence-Assisted Feedback on Intonation in Violin Education](https://doi.org/10.31811/ojomus.1897062). *Online Journal of Music Sciences, 11*(2), 651–669.