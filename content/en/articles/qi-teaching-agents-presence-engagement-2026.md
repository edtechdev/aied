---
title: "Designing Teaching Agents for Human-AI Collaborative Classrooms: A Design-Based Study of Students' Sense of Presence and Learning Engagement"
created: "2026-11-11T07:41:29-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [design and evaluation study]
audience: [researchers, instructors]
sources: ['raw/papers/qi-teaching-agents-presence-engagement-2026.md']
source_url: "https://doi.org/10.1002/jcal.70369"
source_depth: full text
confidence: high
foundations: []
pedagogy: [scaffolding, student-engagement]
technology: [generative-ai, conversational-ai, llm]
assessment: [feedback]
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

> **Synthesis:** Students in a 10-week educational technology course felt more present once a digital human teaching agent, built from the instructor's own image and voice, was woven into instruction — but their measured engagement barely moved. Across three successive versions of the design — gesture-supported presentation, teacher-mediated live question answering, then an anonymous phone-based question channel — the only reliable step in presence came with the last addition. The authors place the value of the agent in [[teacher-role|teacher orchestration]] rather than agent capability: it worked when the teacher timed its gestures, vetted its answers and folded private questions back into shared explanation. Presence is easier to shift than participation, and the study cannot separate which feature did the shifting.

## Key Findings

1. **Students felt more present as the design changed.** Overall presence climbed across the three iterations, and the only reliable step came between the second and third versions; the first two were indistinguishable. Presence gains arrived late, with the anonymous channel rather than with the gestures.
2. **Engagement did not follow.** Self-reported engagement drifted upward but never reached significance, and no pairwise comparison between iterations did either. Students can feel better supported without changing what they invest in the work.
3. **Gestures helped only when they were in step.** The first iteration earned high teaching-presence ratings but comparatively low social presence; students complained about pauses, rushed transitions and gestures out of sync with speech, not about missing visuals.
4. **Live public Q&A bought responsiveness at the cost of continuity.** In the second iteration social presence dropped while teaching presence held. Students valued asking promptly, but said switching back and forth disrupted the lesson, and some would not speak in front of peers.
5. **An anonymous text channel produced the best all-round ratings.** The third iteration recorded the highest teaching presence, [[community-of-inquiry|cognitive presence]], social presence and behavioral engagement, because questions could be asked without stopping instruction and the teacher could gather them into a shared answer.
6. **Students talked about the agent differently once the channel existed.** Early reflections linked direct instruction mainly to affective expression and resolution; by the third iteration affective expression was tied to exploration and integration, which reads as more inquiry talk and less delivery talk.

## What the study did

The course ran for 10 weeks at a public university in central China: one preparation week and three three-week iterations, each containing three 90-minute sessions. The 36 participants were first-year educational technology majors, 10 men and 26 women, with a mean age of 18.7 years.

A self-developed web platform turned textbook content, slides, syllabus and resources into lecture scripts, which the instructor reviewed and corrected before any of it became a digital human video. The digital human used the instructor's image and combined speech, subtitles and pointing or emphasizing gestures learned from the instructor's own demonstration videos. In the second and third iterations the question-answering function called a Qwen [[llm|large language model]] against a course knowledge base organized as a [[knowledge-graph|knowledge graph]].

The first iteration used gesture-supported presentation in segments of no more than five minutes, with the teacher framing, pausing and clarifying between them. The second added teacher-mediated live Q&A: a student raised a hand, the teacher paused the video and opened the answering function, the agent replied on screen, and the teacher corrected or extended the answer before resuming. The third added a QR-code text channel through which students submitted anonymous questions from their phones without stopping the presentation; the teacher read the queue and brought recurring difficulties back to the whole class.

Presence was measured with nine items adapted from Arbaugh covering teaching, social and cognitive presence, and engagement with nine items adapted from Sun and Rueda covering behavioral, emotional and cognitive engagement. The [[qualitative-research|qualitative]] corpus was 487 required post-class reflections, coded at sentence level against eight presence codes by two graduate students, then modeled with [[network-analysis|epistemic network analysis]] over the connections among those codes.

## Why presence moved and engagement did not

Presence averaged 3.86 in the first iteration, 3.87 in the second and 4.03 in the third, and the repeated-measures test was significant (F(2, 70) = 3.464, p = 0.037, partial η² = 0.090). Only one pairwise step survived: the third iteration exceeded the second by 0.167 (p = 0.043). The first and second were indistinguishable, and the first-to-third difference did not reach significance, so whatever produced the gain came with the anonymous channel rather than with the gesture design.

Engagement moved descriptively from 3.73 to 3.80 to 3.91 and never significantly (p = 0.084), and no pairwise comparison reached significance either. The authors treat presence and engagement as related but distinct: presence concerns how students perceive the instructional environment, [[student-engagement|engagement]] concerns what they invest in it. Their explanation is that the redesign changed access to explanation, feedback and questioning — conditions that register quickly on a perception scale — without redesigning tasks, assessment responsibilities or the demands that require sustained effort. A 10-week intervention may be long enough to change how supported students feel and too short to change participation habits, and [[self-report-measures|self-report]] plus visible behavior may miss silent attention, private questioning or reading agent feedback.

Because each iteration kept the previous features and added new ones, the change cannot be assigned to gestures, live Q&A or the anonymous channel. Familiarity with the system, cumulative exposure to course content, adaptation to university classroom norms and the sheer accumulation of support are all plausible contributors, and the single-group design cannot separate them.

The design lesson is that the agent's functions must be coordinated with instruction rather than merely available. Gestures helped when timed with speech and visuals; immediate answers helped when the teacher connected them to the lesson; private questions helped when the teacher aggregated them into shared explanation. That is a [[human-in-the-loop-ai|human-in-the-loop]] arrangement in which the agent extends the reach and immediacy of [[scaffolding|scaffolding]] while the teacher retains judgment about what an answer means for the class.

## What this means for practice

- **Instructors:** Use the agent as a presenter and first responder, not as the authority on the content. Its answers to straightforward questions were timely; answers to complex, multi-concept questions were sometimes fragmented or wrong, and your correction is what made them usable.
- **Designers:** Fix synchronization before adding features. The complaints were about pauses, transitions and gestures out of step with speech, not about a lack of visual cues.
- **Designers:** Pair public questioning with a private text channel, but plan for the teacher to route recurring questions back to the whole class. Without that loop the channel collects questions the class never hears answered.
- **Administrators:** Judge a teaching-agent rollout on more than attendance or participation counts. Presence moved before engagement, and the authors argue engagement needs longer terms, more demanding inquiry tasks and visible use of feedback.
- **Researchers:** Instrument the private channel. Anonymous questions, response uptake and question quality are the engagement signals a Likert scale will miss.

## Limitations

The single-group sequential design is the binding constraint: there was no control condition, every iteration retained its predecessors, and the study cannot isolate gesture, Q&A, channel or cumulative-support effects. The sample was 36 first-year students from one institution with a homogeneous disciplinary background, over 10 weeks. Engagement relied on self-report and observable behavior, likely understating private or silent participation. Teachers' cognitive load under the multi-channel arrangement was not measured, so the sustainability of the orchestration is unknown. Gesture support was never separated from speech, subtitles, visual cues and teacher facilitation. No AI-only, teacher-only or combined comparison was run, so the relative value of the combined arrangement remains untested.

## Citation

Qi, M., Liu, B., Huang, H., Wang, J., Yu, L., & Liu, B. (2026). [Designing Teaching Agents for Human-AI Collaborative Classrooms: A Design-Based Study of Students' Sense of Presence and Learning Engagement](https://doi.org/10.1002/jcal.70369). *Journal of Computer Assisted Learning*, 42, e70369. DOI: 10.1002/jcal.70369.
