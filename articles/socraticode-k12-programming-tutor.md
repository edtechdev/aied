---
title: "Towards SocratiCode: Designing a Generative AI-Based Programming Tutor for K-12 Students through a 4-Week Participatory Design Study"
created: "2026-05-19T04:33:04-04:00"
updated: "2026-08-28T00:00:00-04:00"
type: article
tags: [intelligent-tutoring, llm, generative-ai, k-12, scaffolding, student-experience, stem-education, self-regulated-learning, human-in-the-loop-ai, metacognition]
research_method: [system development, participatory design]
discipline: [stem education]
audience: [student experience]
level: [k 12]
sources: ['raw/papers/2605.17857.md']
confidence: medium
---

## Key Finding
Socratic questioning, reflection prompts, misconception checks, and mandatory pauses produce better K-12 engagement than directive answer-giving AI tutors.

## Synthesis
> SocratiCode demonstrates a [[design-based-research|participatory design]] evolution from a directive AI tutor to a Socratic [[intelligent-tutoring|learning companion]] for K-12 [[cs-education|programming]] instruction. Over four weeks with two [[k-12]] Python learners, the system shifted from flexible tutorial generation toward dialogic support: guided questioning instead of answers, reflection prompts, misconception checks, incremental hints, and mandatory pauses requiring learner input. This Socratic shift improved [[learning-gains|explanation clarity]] and problem-solving [[student-engagement|engagement]]. The findings directly reinforce a [[socratic-method|Socratic]] discovery-based approach over direct answer generation, but extend it to the K-12 context where [[cognitive-offloading|cognitive load]] concerns are particularly acute. The emphasis on mandatory pauses and reflection aligns with [[metacognition]] and [[self-regulated-learning]] [[scaffolding]] strategies. The authors argue that AI tutoring is most effective as a companion within a human-guided framework, not an answer engine — a principle that resonates with the [[human-in-the-loop-ai]] architecture and the findings from [[structured-llm-feedback-programming]] that less guided feedback may be more effective.

## Key Findings
1. Adaptive [[generative-ai]] that shifts from directive tutorial generation toward [[socratic-method|Socratic questioning]]—guided questioning, reflection prompts, misconception checks, incremental hints, and mandatory pauses—improves explanation clarity and sustained engagement for K-12 beginners.
2. Across four weekly participatory iterations the prompt evolved from an explanatory tutor into a stabilized, dialogic flow defined by hard stopping points, learner-response requirements, and no unsolicited next steps.
3. Learners consistently preferred incremental hints and multiple attempts over immediate full solutions, explicitly requesting more guided hinting rather than answers.
4. Human oversight remained essential—particularly for correcting [[misconceptions|misconceptions]], challenging weak reasoning (including the system acting as a “yes-man”), and supporting advanced topics like [[computational-thinking|recursion]] and functions.

## Background and Motivation
[[generative-ai|Generative AI]] large language models such as ChatGPT and Claude can produce explanations, worked examples, and step-by-step tutorials on demand, opening new paths for [[intelligent-tutoring|scalable programming instruction]]. Yet many existing systems remain answer-oriented: they rarely determine appropriate stopping points, often ignore the learner’s [[prior-knowledge|prior expertise]], may introduce out-of-scope concepts, and can generate content misaligned with learner goals, creating confusion rather than understanding. In [[cs-education|programming education]] these limitations are especially harmful, because novices need opportunities to articulate their reasoning, reflect on misunderstandings, and work through problems before receiving complete solutions.

These challenges intensify in [[k-12]] contexts, where learners have little prior exposure and struggle comparatively more with [[computational-thinking|abstract reasoning]], pacing, and engagement. Prior work by [[help-seeking|novice-programmer]] researchers (e.g., [[cognitive-offloading|overreliance]] on ChatGPT, hallucinations, weak rationales, and difficulty interpreting AI-generated code) shows that novices become dependent on [[generative-ai|external solutions]] unless the system supports [[scaffolding|debugging]] and active reasoning. The paper argues that K-12 generative AI should support scaffolding, debugging, and active reasoning rather than simply produce code or tutorial-style explanations.

## SocratiCode Design
SocratiCode is an adaptive, [[prompt-engineering|prompt-based]] tutorial system built on established [[adaptive-learning]] research, generative AI in education, and [[socratic-method|Socratic tutoring]] principles. The model was instructed to collect background information from learners before generation, assume a beginner user, and default to [[cs-education|Python]] unless requested otherwise. The prompt was structured into multiple high-level components — System Role; Learner Level and Background Selection; Tutorial Structure and Flow Control; Reinforcement, Adaptivity, and Closure; and Constraints and Content Boundaries — so that generated lessons embedded introductions, examples, practice, summaries, and follow-up tasks that created natural stopping points.

To keep instruction developmentally appropriate in K-12 settings, the system adjusted pacing, analogies, and explanations to individual learners. Later iterations layered in misconception clarification, metaphor use, reflective pauses, and [[scaffolding|hints provided before complete solutions]], moving the system from content delivery toward guided [[inquiry-based-learning|inquiry]]. The final template defined a lesson flow of hook or analogy → concept explanation → code walkthrough → short exercise → optional misconception note → reflection → transition, with interaction rules requiring a pause after exercises and learner input before proceeding.

## Four-Week Participatory Design Process
The framework was developed through a [[design-based-research|participatory design]] study with two Grade-11 high school interns (one male, one female, both 17–18, with no prior programming experience) during a summer 2025 internship at a university. The first prompt version was deployed on the GPT platform with GPT-5 as the default model. A four-week curriculum covered fundamental topics aligned with the ACM/IEEE Computer Science Curricula (CS2013) introductory [[curriculum-design|programming guidelines]]: variables and conditionals in W1, progressing to loops, arrays, and functions by W4. A master’s-student teaching assistant introduced each topic and supplied 3–4 practice problems, and a computer science faculty member ran one-to-one and group meetings.

Feedback collection followed an agile-style [[mixed-methods-research|mixed-methods]] protocol: daily stand-ups combined closed-ended questions (task completion, prior exposure, expert consultation) with open-ended prompts about what was understood and confused, while weekly sync meetings added 5-point Likert surveys and [[qualitative-research|open-ended reflections]]. Two authors independently conducted open coding and [[qualitative-research|thematic analysis]] using an inductive approach, yielding four key categories: Engagement and Appeal, Human–AI Collaboration, Explanations and Clarity, and Instructional Design and Structure. Prompt revisions were introduced at the start of W2; W3 and W4 designs were informed by prior-week feedback; by W4 no further modifications were needed, indicating the prompt had stabilized.

## Findings
Four themes emerged from daily and weekly learner feedback. First, [[student-engagement|engagement]] was strengthened when the system adapted explanations to learners’ prior knowledge, pace, and responses, with participants praising relevant examples and [[storytelling-in-education|anecdotes]] that built on what they already knew. Second, definitions, checkpoints, and staged pacing improved conceptual clarity — clarity dropped when new topics advanced without defining key terms, and breaking concepts into smaller steps linked to familiar contexts aided [[learning-gains|comprehension]]. Third, learners preferred [[help-seeking|incremental hints]] and multiple attempts before full answers, though immediate or inconsistent explanations sometimes caused confusion. Fourth, [[human-in-the-loop-ai|human oversight]] remained necessary, especially for more advanced or context-dependent material; participants regarded expert assistance as still essential, and noted that SocratiCode sometimes acted as a [[ai-sycophancy|"yes-man,"]] prioritizing its own answers over learner reasoning.

## Implications
The study implies that generative AI in K-12 [[cs-education|programming education]] is most useful as a learner-responsive instructional companion rather than a standalone answer generator. Designers should build [[socratic-method|Socratic]] affordances — guided questioning, mandatory pauses, misconception checks, and hints-before-solutions — while embedding the AI within a [[human-in-the-loop-ai|human-guided instructional framework]]. Because human assistance remains essential for deep misconceptions and advanced topics, [[teacher-role|expert oversight]] should be an explicit part of deployment, not an afterthought. The findings also support [[instructional-design]] choices like staged pacing, concise definitions, checkpoints, summaries, and [[scaffolding|real-world analogies]] to keep [[cognitive-offloading|novices from being overwhelmed]]. Limitations include the small sample (two participants), a single customized GPT-based system, Python-only content, and potential training-data bias; future work should test larger, more diverse K-12 populations and further strengthen Socratic support through exploration, multiple attempts, reflection, and incremental hints.

## Connected Concepts

- [[metacognition]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[cs-education]]
- [[k-12]]
- [[socratic-method]]
- [[scaffolding]]
## Connected Articles

- [[structured-llm-feedback-programming]]
## Citation

Lucas, C., Tsai, C.-H., Bihani, A., & Sarker, J. (2026). [*Towards SocratiCode: Designing a Generative AI-Based Programming Tutor for K-12 Students through a 4-Week Participatory Design Study*](https://arxiv.org/abs/2605.17857).
