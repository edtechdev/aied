---
title: "AI teaching assistants in online discussion forums and peer-supported self-regulated learning"
created: "2026-10-29T19:15:52-04:00"
updated: "2026-10-29T19:15:52-04:00"
type: article
authors: ["Davis, R. L.", "Liu, X.", "Pankiewicz, M.", "Kissmehl, A.", "Engwall, O.", "Baker, R. S.", "Viberg, O."]
published: "2026"
venue: "European Conference on Technology Enhanced Learning (EC-TEL 2026)"
foundations: [human-ai-collaboration, limitations-in-aied-research]
pedagogy: [self-regulated-learning, collaborative-learning, help-seeking, metacognition, student-ai-interaction]
technology: [generative-ai, llm, pedagogical-agent, rag]
assessment: [learning-gains]
methods: [quantitative-research, qualitative-research]
ethics: [differential-effects-across-learner-groups]
discipline: [stem education, learning sciences]
level: [graduate]
audience: [instructors, researchers, educational technology developers, learning analytics designers]
research_method: [secondary analysis, process-outcome modeling]
page_kind: [evaluation]
sources: ['raw/papers/davis-ai-ta-forum-peer-co-regulation-2026.md']
confidence: medium
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-29"
    agent: hermes-agent
---

> An [[intelligent-tutoring|AI teaching assistant]] that answers fast does not just answer: it changes who else speaks. Across four graduate courses and 28,123 coded forum sentences, an AI TA was the first responder in 97% of student-started assignment threads and replied in a median of 0.92 minutes against 490 minutes for peers, and students in AI-supported courses wrote fewer reply posts while starting threads at the same rate. Peer repliers carried roughly 70% of the [[self-regulated-learning|self-regulatory]] language in their sentences against 27% for thread starters, so as their share of follow-up posts fell from 91% to 45% across a semester, aggregate regulatory language fell with it. The same responsiveness that makes an AI TA attractive appears to displace the peer dialogue through which co-regulation happens.

## Key Findings

- The AI TA became the dominant responder where it was allowed to operate, and the shift was by design plus speed rather than by preference: the AI was first responder in 97% of student-started assignment threads in both high-exposure courses (OR = 62.7, 95% CI [27.3, 169.0], p < .001), with a median first response of 0.92 minutes against 490 minutes when a peer replied first and 364 minutes when a teacher did.
- Students in AI-supported courses posted less overall (15.85 posts on average against 23.05, p < .001), and the gap came entirely from replies: thread starts were statistically indistinguishable (4.88 against 4.93, p = .73), while reply posts fell from a mean of 18.2 to 10.9 (p < .001).
- Lower regulatory language followed from the lost peer replies rather than from any change in how individuals wrote. SRL-coded sentences dropped from 49% to 36% between the first and second half of the semester in the AI courses (t(67) = -6.03, p < .001) while rising slightly in the human-only course, but within each role the SRL rate stayed nearly constant: peer repliers 70.2% to 68.5%, thread starters 26.9% to 20%. Peer repliers' share of follow-up sentences, not their rate, collapsed from 91% to 45%.
- Having more AI TA responses in the threads a student started was associated with lower grades (beta around -1.38, p = .038), while a higher proportion of teacher responses went with higher grades (beta around 2.12, p = .009) and peer response proportion showed no relationship (beta around 0.02, p = .99). Where a student posted did not matter: the share of their activity in assignment threads did not predict grade (p = .282), even though that is precisely where the AI TA was active.
- Self-regulation predicted grade (beta = 2.63, 95% CI [0.49, 4.76], p = .017), and neither received co-regulation (p = .482) nor provided co-regulation (p = .660) predicted it on its own. [[collaborative-learning|Peer interaction]] moderated the relationship (interaction beta = 1.45, 95% CI [0.31, 2.60], p = .013), raising explained variance from R-squared 0.10 to 0.17.
- The grade penalty was concentrated among students best equipped to regulate. High early self-regulators who received above-median co-regulation outscored their below-median peers by 0.74 SD (p = .004); low self-regulators showed no comparable gap (0.36 SD, p = .369). Removing 17 high-self-regulation students whose threads were AI-dominated moved the AI TA coefficient from beta around -1.38 (p = .038) to -1.29 (p = .454).

## The Responder Ecology of an AI-Populated Forum

The study treats a discussion forum as an interactional system rather than a pipe for answers, and names the actors within it a responder ecology: peers, instructors and human teaching assistants, and now an AI TA. The framework matters because prior work on [[community-of-inquiry|teaching presence]] already showed that who responds shapes how a discussion proceeds, and instructor replies tend to close threads rather than extend them by supplying a definitive answer. An AI that answers in under a minute, consistently and for every thread, tightens that closing effect to its extreme.

JeepyTA, developed at the Penn Center for Learning Analytics and used across five [[higher-ed|universities]] and 29 courses, generated responses from category-specific prompts plus retrieved context, with optional instructor approval before publication. The courses analyzed used GPT-3.5 Turbo, GPT-4 and GPT-4 Turbo depending on when they ran. Four graduate courses formed the comparison: one human-only data science course with 40 students and 6,491 sentences, the same course with limited AI exposure where only 20% of students interacted with the AI TA (56 students), and two high-exposure AI courses where 89% (45 students, 4,756 sentences) and 95% (39 students, 8,687 sentences) of students were reached.

## Why Regulatory Language Fell

The paper's most consequential analytic move is to separate self-regulation from co-regulation by position in the thread rather than by sentence content. Regulatory language in a thread a student started counts as that student's own regulation. The same language in a reply to somebody else's thread is co-regulation, one learner [[scaffolding]] another's regulatory activity. Because the AI TA's documented effect was to displace peer replies, and peer replies are exactly where co-regulation lives, this coding choice turns a participation metric into a mechanism.

The result is that the drop in regulatory language is compositional. Nobody became a worse regulator in the sense of writing fewer regulatory sentences per post; the population of writers changed. With peer repliers supplying about 70% SRL-coded sentences and thread starters about 20 to 27%, the fall in peers' share of follow-up sentences, from 91% to 45%, drags the aggregate down mechanically. The finding also locates where the loss is sharpest: in AI-mediated threads the opening post carried less SRL than comparable openings in peer-mediated or teacher-mediated threads, and after the opening, SRL rose in AI threads while falling in teacher threads.

## Who the Lost Peer Dialogue Hurts

The moderation analysis implies that peer dialogue and self-regulation are complements rather than substitutes, which cuts against a common assumption that strong self-regulators are the self-sufficient ones. If self-regulation pays off more when peers engage, then removing peers should cost the strongest regulators most, and that is what the median-split comparison shows. The authors are careful that the mechanism is not established: why high self-regulators were the sensitive group is not visible in the data, and unmeasured [[prior-knowledge|prior knowledge]] or [[motivation]] could account for it. They also note the observational design cannot separate the AI TA's presence from the courses that chose to deploy it.

## What this means for practice

- Treat an AI TA's response latency as a [[learning-design|design variable]]. The authors point to the wait-time literature, in which delaying an authoritative answer raises the quantity and complexity of student contributions, and propose manipulating AI TA latency in asynchronous forums as the natural next experiment.
- Interrogate the responder mix rather than the answer quality. The grade association ran through who populated a student's threads, and the proportion of a student's own activity in assignment threads predicted nothing, so a course can look healthy on AI response quality while the peer dialogue that carries co-regulation drains away.
- Watch the peer reply series over a semester, not just its level. Peer shares fell from 91% to 45% between halves in these courses, a drift invisible in a single end-of-term snapshot and easy to miss in a dashboard that reports totals.
- Do not assume that the students who regulate best need the least support. In this dataset they were the ones whose grades moved most with the presence of peer co-regulation, so designing for self-sufficient high performers may be designing for the group most exposed to losing peers.

## Limitations

- The design is observational, so the associations reported may reflect course-level or student-level confounds rather than effects of the AI TA, and the authors state plainly that causality cannot be established.
- Forum discourse is a proxy for regulation that captures only what students articulate in writing, leaving internal regulatory activity unobserved.
- The sample is graduate-level data science and educational design, where students may hold relatively advanced self-regulatory skills, which limits generalization to other levels and domains.
- Statistical power is modest at the student level: some regressions rest on roughly 62 to 67 students, which tempers the confidence intervals around the moderation and the concentration result.

## Citation

Davis, R. L., Liu, X., Pankiewicz, M., Kissmehl, A., Engwall, O., Baker, R. S., & Viberg, O. (2026). AI teaching assistants in online discussion forums and peer-supported self-regulated learning. *Proceedings of the European Conference on Technology Enhanced Learning (EC-TEL 2026)*, paper 354.
