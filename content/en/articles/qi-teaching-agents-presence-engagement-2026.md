---
title: "Designing Teaching Agents for Human-AI Collaborative Classrooms: A Design-Based Study of Students' Sense of Presence and Learning Engagement"
created: "2026-11-11T11:30:00-05:00"
updated: "2026-11-11T11:30:00-05:00"
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
verified: [citation, numbers, links]
---

> **Synthesis:** Qi and colleagues report a single-group design-based study of a digital human teaching agent in a 10-week Introduction to Educational Technology course for 36 first-year undergraduates at a public university in central China. Across three cumulative iterations — gesture-supported presentation, teacher-mediated real-time Q&A, and anonymous text-based Q&A — students' overall sense of presence rose from 3.86 to 3.87 to 4.03 on a five-point scale (F(2, 70) = 3.464, p = 0.037, partial η² = 0.090), though only the Iteration 2 to Iteration 3 pairwise difference was significant. Learning engagement rose descriptively from 3.73 to 3.91 but did not change significantly (p = 0.084). The authors locate the value of the agent in [[teacher-role|teacher orchestration]] rather than agent capability, and the gap between presence and [[student-engagement]] is the study's central puzzle.

## Key Findings

1. **Sense of presence rose modestly across the three iterations.** Overall presence means were 3.86 (SD = 0.58) in Iteration 1, 3.87 (SD = 0.54) in Iteration 2 and 4.03 (SD = 0.60) in Iteration 3. Mauchly's test was not significant, W = 0.938, p = 0.339; the repeated-measures analysis gave F(2, 70) = 3.464, p = 0.037, partial η² = 0.090, and the linear contrast gave F(1, 35) = 4.684, p = 0.037, partial η² = 0.118.
2. **Only the last pairwise step was statistically significant.** Iteration 3 exceeded Iteration 2 by a mean difference of 0.167, SE = 0.065, p = 0.043, 95% CI [0.004, 0.329]. Iteration 1 and Iteration 3 differed by 0.173, SE = 0.080, p = 0.112, 95% CI [−0.028, 0.374], and Iterations 1 and 2 were indistinguishable (mean difference = 0.006, SE = 0.078, p = 1.000, 95% CI [−0.190, 0.202]).
3. **Learning engagement did not change significantly.** Engagement means were 3.73 (SD = 0.53), 3.80 (SD = 0.53) and 3.91 (SD = 0.61). Mauchly's test was significant, W = 0.791, p = 0.019, so Greenhouse–Geisser correction was applied: F(1.655, 57.922) = 2.718, p = 0.084, partial η² = 0.072. The linear contrast was also non-significant, F(1, 35) = 3.713, p = 0.062, and no pairwise comparison reached significance (p = 0.902, p = 0.186, p = 0.411).
4. **Gestures made content visible, but synchronization was the design problem.** Iteration 1 drew a high teaching-presence rating (M = 4.01, SD = 0.60) alongside a comparatively low social-presence rating (M = 3.69, SD = 0.63). Students reported inappropriate pauses, transitions that left too little time to process visuals, and gestures out of step with speech.
5. **Public real-time Q&A made support responsive but disrupted the lesson.** In Iteration 2, social presence fell to 3.60 (SD = 0.61) while teaching presence held at 4.05 (SD = 0.69). Students valued asking "promptly," but one reported that "switching back and forth when asking questions affected the experience of the lesson," and some remained unwilling to speak in front of peers.
6. **Anonymous text-based Q&A widened access without pausing instruction.** Iteration 3 recorded the highest teaching presence (M = 4.18, SD = 0.62), cognitive presence (M = 4.03, SD = 0.71), social presence (M = 3.90, SD = 0.62) and behavioral engagement (M = 4.04, SD = 0.67).
7. **Presence-related talk reorganized around affect and inquiry.** Epistemic network analysis of 487 reflections showed the strongest Iteration 1 links among direct instruction, affective expression and resolution (w = 0.32, 0.32 and 0.36); by Iteration 3 the strongest were direct instruction with affective expression (w = 0.43), affective expression with exploration (w = 0.34) and with integration (w = 0.30). The first two dimensions accounted for 17.34% and 13.94% of variance, 31.28% together.

## What the study did

The course ran for 10 weeks at a public university in central China, with one preparation week and three 3-week iterations, each containing three 90-minute sessions. The 36 participants were first-year educational technology majors: 10 males (28%) and 26 females (72%), mean age 18.7 years (SD = 0.94), range 18 to 22.

A self-developed web platform generated courseware and lecture scripts from textbook content, slides, syllabus and resources; the instructor reviewed and corrected every script before it became a digital human video. The digital human was built from the instructor's image and combined speech, subtitles and pointing or emphasizing gestures learned from the instructor's own demonstration videos. Question answering in Iterations 2 and 3 called the Qwen large language model against a course knowledge base organized as a knowledge graph.

Iteration 1 used gesture-supported presentation in segments of no more than 5 minutes, with the teacher framing, pausing and clarifying between segments. Iteration 2 added teacher-mediated real-time Q&A: a student raised a hand, the teacher paused the video and activated the answering function, the agent replied in video form, and the teacher corrected or extended the reply before resuming. Iteration 3 added a QR-code text channel through which students submitted anonymous questions from their phones during the presentation without stopping it; the teacher reviewed the queue and brought recurring difficulties back to the whole class.

Presence was measured with nine items adapted from Arbaugh (2008), covering teaching, social and cognitive presence (α = 0.875, 0.821 and 0.887; overall α = 0.938; CFA χ²/df = 1.192, RMSEA = 0.074, TLI = 0.973, CFI = 0.983). Engagement used nine items adapted from Sun and Rueda (2012) for behavioral, emotional and cognitive engagement (α = 0.798, 0.755 and 0.874; overall α = 0.917; CFA χ²/df = 1.115, RMSEA = 0.057, TLI = 0.983, CFI = 0.990). The qualitative corpus was 487 required post-class reflections, coded at sentence level against eight presence codes by two graduate students who independently coded 15% of the data (Cohen's κ = 0.794), then modeled with epistemic network analysis over 28 pairwise connections.

## Why presence moved and engagement did not

The authors treat presence and engagement as related but distinct: presence concerns how students perceive the instructional environment, engagement concerns what they invest in it. Their explanation is that the design changed access to explanation, feedback and questioning — conditions that register quickly on a perception scale — without redesigning tasks, assessment responsibilities or the demands that require sustained effort. A 10-week intervention, they suggest, may be long enough to change how supported students feel and too short to change participation habits, and self-report plus visible behavior may miss silent attention, private questioning or reading agent feedback.

Because each iteration kept the previous features and added new ones, the change cannot be assigned to gestures, real-time Q&A or the anonymous channel. Familiarity with the system, cumulative exposure to course content, adaptation to university classroom norms and the sheer accumulation of support are all plausible contributors, and the single-group design cannot separate them.

The design lesson is that the agent's functions must be coordinated with instruction rather than merely available. Gestures helped when timed with speech and visuals; immediate answers helped when the teacher connected them to the lesson; private questions helped when the teacher aggregated them back into shared explanation. That is a [[human-in-the-loop-ai|human-in-the-loop]] arrangement in which the agent extends the reach and immediacy of [[scaffolding]] while the teacher retains judgment about what an answer means for the class.

## What this means for practice

- **Instructors:** Use the agent as a presenter and first responder, not as the authority on the content. Its answers to straightforward questions were timely; answers to complex, multi-concept questions were sometimes fragmented or wrong, and the teacher's correction made them usable.
- **Designers:** Fix synchronization first. The Iteration 1 complaints were about pauses, transitions and gestures out of step with speech, not a lack of visual cues.
- **Designers:** Pair public questioning with a private text channel. The combination preserved lesson continuity and let reluctant students ask, but only when the teacher routed recurring questions back to the whole class.
- **Administrators:** Judge a teaching-agent rollout on more than attendance or participation counts. Presence moved before engagement, and the authors argue that engagement needs longer terms, more demanding inquiry tasks and visible use of feedback.
- **Researchers:** Instrument the private channel. Anonymous questions, response uptake and question quality are the engagement signals a Likert scale will miss.

## Limitations

The single-group sequential design is the binding constraint: there was no control condition, every iteration retained its predecessors, and the study cannot isolate gesture, Q&A, channel or cumulative-support effects. The sample was 36 first-year students from one institution with a homogeneous disciplinary background, over 10 weeks. Engagement relied on self-report and observable behavior, likely understating private or silent participation. Teachers' cognitive load under the multi-channel arrangement was not measured, so the sustainability of the orchestration is unknown. Gesture support was never separated from speech, subtitles, visual cues and teacher facilitation. No AI-only, teacher-only or combined comparison was run, so the relative value of the combined arrangement remains untested.

## Citation

Qi, M., Liu, B., Huang, H., Wang, J., Yu, L., & Liu, B. (2026). [Designing Teaching Agents for Human-AI Collaborative Classrooms: A Design-Based Study of Students' Sense of Presence and Learning Engagement](https://doi.org/10.1002/jcal.70369). *Journal of Computer Assisted Learning*, 42, e70369. DOI: 10.1002/jcal.70369.
