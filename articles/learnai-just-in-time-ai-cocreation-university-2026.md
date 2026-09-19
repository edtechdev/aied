---
title: "LearnAI: Just-in-Time AI Co-Creation Across Disciplines at a University"
created: "2026-08-20T02:55:00-04:00"
updated: "2026-09-19T09:24:40-04:00"
type: article
foundations: [agency, ai-literacy, curriculum-design, educational-development, learning-design]
pedagogy: [self-efficacy]
technology: [generative-ai, human-in-the-loop-ai, prompt-engineering]
research_method: [mixed methods, case study]
audience: [faculty development, learners]
level: [higher ed]
sources: ['raw/papers/2608.19164.md']
confidence: high
---

> **Synthesis:** LearnAI is a two-layer institutional framework for just-in-time [[ai-literacy|AI co-creation]] that bridges the gap between one-off conceptual workshops and technical CS courses. A Wide-Exposure Layer builds AI awareness at scale by embedding short presentations in existing courses (18 courses across five disciplines), while a Customized Co-Creation Layer offers opt-in one-on-one sessions where mixed-ability learners work with trained undergraduate [[peer-assessment|tutors]] through a 5-Stage [[pedagogy|pedagogical]] Script (Problem Framing, Tool-Task Mapping, Iterative Co-Prompting, Deployment and Verification, [[ethics|Ethical]] Reflection). Over two semesters 35 clients co-created 36 portfolio websites and 20+ deployed web applications, with interviews suggesting a shift from treating AI as a passive answer machine to engaging it as a collaborative tool under human direction — a concrete [[human-in-the-loop-ai]] reframing of [[cognitive-offloading|over-reliance]].

## Key Findings

1. LearnAI operationalizes [[ai-literacy]] as situated, just-in-time [[problem-solving]] rather than abstract awareness, pairing a Wide-Exposure Layer (short [[learning-design|presentations]] in 18 existing courses across five disciplines, reaching 293 enrolled students) with an opt-in Customized Co-Creation Layer that serves [[equity-in-ai-education|mixed-ability learners]] from non-coders to advanced CS majors.
2. The 5-Stage Pedagogical Script (Problem Framing, Tool-Task Mapping, Iterative Co-Prompting, Deployment and Verification, Ethical Reflection) provides a repeatable structure for moving clients from an "Oracle" (passive answer-seeking) to a "Process Partner" mindset, emphasizing [[prompt-engineering|prompting as specification]], [[scaffolding|gradual tutor release of control]], and [[human-in-the-loop-ai|verification of outputs]] against requirements.
3. Over two semesters, 35 clients co-created 36 portfolio websites and over 20 deployed web applications, with tutor facilitation (four undergraduate CS tutors, 70+ sessions) distributed across disciplines including nursing, business, education, and software engineering.
4. Interviews with five clients and two tutors document a recurring cognitive shift: clients moved from describing AI as an answer machine ("ChatGPT, ask questions") toward describing it as a [[collaborative-learning|collaborator]] requiring human direction, with [[transfer-of-learning|transfer]] cases where clients independently recombined tools after sessions ended.
5. A small paired pre/post AI-readiness dataset (N = 7) showed a descriptive mean gain of 7.4 percentage points (82.5% → 89.9%), treated as preliminary context only, with five of seven clients improving — while documented boundary cases (overwhelmed clients, deliberate AI rejecters) qualify the [[framing-ai-use-for-students|adoption narrative]].

## Institutional Design and Just-in-Time Learning

The framework's key insight is that effective [[ai-education|AI education]] must be **just-in-time** and differentiated rather than one-size-fits-all. LearnAI embeds awareness-building in the [[curriculum-design|curriculum]] of existing courses (the Wide-Exposure Layer) while offering opt-in, individualized co-creation sessions (the Customized Layer). This directly addresses a gap the authors identify: most institutions either offer [[professional-training|conceptual workshops]] for general audiences or technical courses for CS majors, leaving few spaces where [[equity-in-ai-education|mixed-ability learners]] can engage common AI tasks at levels matched to their prior experience. Positioning AI education as [[situated-learning|situated practice]] rather than only course content means treating authentic, self-selected tasks — building a portfolio, automating a workflow, deploying a learning tool — as educational moments rather than mere IT requests.

The model leans on trained undergraduate tutors as peer facilitators, an [[learning-design|instructional]] approach that distributes the [[teacher-role|teaching]] burden and creates authentic near-peer learning. Tutors were selected for demonstrated proficiency with [[generative-ai|generative AI tools]] (Claude, Copilot, Vercel) and completed a calibration process (observing two sessions, co-facilitating two, then leading independently). Both interviewed tutors identified [[feedback|communication]] and teaching as harder to develop than technical proficiency, a finding with direct implications for [[teacher-ai-competency|tutor recruitment]] and training. The pedagogical script sequences task-oriented [[prompt-engineering|co-prompting]] with explicit [[human-in-the-loop-ai|human oversight]] and a final ethical reflection stage, deliberately weaving responsibility and [[critical-thinking|critical reflection]] into the technical workflow rather than treating ethics as an add-on.

## The 5-Stage Pedagogical Script

Sessions followed a structured protocol designed to shift clients from an "Oracle" mindset (expecting answers) to a "Process Partner" mindset (co-creating solutions), adapted to each client's background and task:

- **Stage 1 — Problem Framing (5–10 min):** Tutors ask "What problem are you trying to solve?" rather than "What do you want AI to do?" to elicit concrete requirements — audience, constraints, and success criteria — withholding tool suggestions until the problem is clearly scoped.
- **Stage 2 — Tool-Task Mapping (3–5 min):** Client and tutor select tools based on task fit and access constraints rather than default familiarity, a [[design-thinking|design]] choice that matters across disciplines and locked-down institutional hardware.
- **Stage 3 — Iterative Co-Prompting (20–30 min):** Tutors model "prompting as specification," writing prompts that read like requirements documents, gradually releasing control from demonstrating to coaching to observing.
- **Stage 4 — Deployment & Verification (10–15 min):** Sessions move beyond the chat window to actual deployment (e.g., Vercel, GitHub Pages), teaching clients to verify outputs against requirements and check for hallucinated features.
- **Stage 5 — Ethical Reflection (3–5 min):** After testing the artifact, clients decide how it should be used, shared, or limited, connecting the task to [[privacy]], [[academic-integrity|attribution]], course or workplace rules, and [[agency|human ownership of final decisions]].

A recurring challenge was moving clients past the expectation that AI would "just do it" and toward treating prompting as an iterative specification process. Because debugging or deployment sometimes consumed the final minutes, the ethical reflection stage was the easiest to compress, so facilitators reframed it as a required session-end checklist. After each session, tutors produced a facilitator-verified summary of tools used and next steps to support independent continuation.

## Evidence and Limits

The study is an **experience report** with preliminary evidence gathered through a [[mixed-methods-research|mixed-methods]] design: a small paired pre/post AI-readiness dataset (N = 7), [[qualitative-research|qualitative]] interviews with five clients and two tutors, an artifact corpus (36 [[eportfolio|portfolios]] and 20+ deployed applications inspected for access and task match), and Layer 1 survey responses (N = 54 consented respondents from 7 of 18 courses). The readiness instrument is preliminary and not formally validated, so the authors treat AI readiness as an operational construct rather than a validated psychometric measure, and the paired comparison is reported for descriptive context only. It is explicitly a single-institution, opt-in deployment rather than a controlled efficacy trial, so findings transfer most directly to learners with concrete needs and tentative openness to AI, and to institutions with peer tutors, faculty coordination, and lightweight deployment support.

Its value lies in the practical, replicable structure and the documented boundary cases that inform [[reducing-ai-misuse]] and [[self-regulated-learning|self-regulation]] design. These include at least one non-technical client who felt overwhelmed by the number of tools and steps (GitHub, hosting, multiple platforms), and a subset of students who reject AI or feel the overhead of prompting outweighs potential benefits — evidence that the framework primarily serves those who opt in and are at least tentatively open to AI. The authors also document a [[philosophy-of-ai-in-education|reframing of authorship]] in which clients made artifacts themselves, treating prompt design, task decomposition, and verification as substantive intellectual labor, while some retained clear boundaries (e.g., a data-science student preferring to write scholarly papers without AI to avoid "losing" his own voice).

## What this means for practice

- **Faculty developers.** Embed short [[ai-literacy|AI-awareness]] sessions inside existing courses instead of staging standalone workshops: the Wide-Exposure Layer reached 293 enrolled students across 18 courses and five disciplines without adding technical coursework.
- **Instructors.** Run opt-in co-creation sessions on the 5-Stage Pedagogical Script and treat Stage 5 ([[ethics|ethical reflection]]) as a required session-end checklist rather than the stage to drop when debugging runs long; in this deployment that stage was the most likely to be compressed.
- **Faculty developers.** Recruit peer tutors for their ability to explain and adapt, then require calibration (observe two sessions, co-facilitate two, lead independently) before they facilitate alone — both interviewed tutors found communication and teaching harder to develop than technical proficiency.
- **Instructors.** Close each session with a facilitator-verified summary of tools used and next steps, since clients who continued independently were documented recombining tools (NotebookLM, Gamma, HeyGen) on their own projects.
- **Researchers.** Use the [[student-ai-interaction|Oracle-to-Process-Partner]] distinction to code shifts in student AI interaction, and report boundary cases — the overwhelmed non-technical client and the deliberate AI rejecters — alongside the positive transfer cases rather than treating non-adoption as noise.

## Limitations

- The paired pre/post AI-readiness dataset covers only 7 clients (5 improved, 1 stayed at ceiling, 1 declined), and the authors state the instrument is preliminary and not formally validated, so the 7.4-point mean gain is descriptive context only.
- Interviews rest on 5 clients and 2 of 4 tutors — self-selected, opt-in participants recalling sessions retrospectively, with no non-participant comparison group, so the reported mindset shift is self-report.
- Layer 1 evidence comes from 54 consented survey respondents in 7 of the 18 courses, with instructor opt-in and self-report shaping both reach and attitude estimates.
- The artifact corpus (36 portfolios, 20+ deployed applications) was inspected informally for access and task match, with no quality rubric, so artifact sophistication is not scored.

## Connected Concepts
- [[ai-literacy]]
- [[human-in-the-loop-ai]]
- [[agency]]
- [[self-efficacy]]
- [[cognitive-offloading]]
- [[curriculum-design]]
- [[learning-design]]
- [[prompt-engineering]]
- [[generative-ai]]
- [[higher-ed]]
- [[teacher-role]]
- [[reducing-ai-misuse]]

## Connected Articles
- [[young-people-learning-generative-ai-rapid-review-2026]] — Young People, Learning, and Generative AI
- [[ai-literacy-heptagon-2026]] — AI Literacy Frameworks
- [[genai-pd-ai-pck-learning-gain-2026]] — Generative AI Professional Development and AI-PCK
- [[teacher-authored-prompts-student-ai-dialogue]] — Teacher-Authored Prompts in Student-AI Dialogue
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — Constructing Epistemic AI Literacy

## Citation

Qu, W., Zheng, L., Buzaid, C., & Crawford, D. (2026). [*LearnAI: Just-in-Time AI Co-Creation Across Disciplines at a University*](https://arxiv.org/abs/2608.19164). [cs.CY, cs.HC].
