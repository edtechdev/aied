---
title: "Artificial Intelligence Driven Physics Assignments using Context Prompts"
created: "2026-09-22T09:24:11-04:00"
updated: "2026-09-22T09:24:11-04:00"
type: article
published: "2026-09-18"
sources: ['raw/papers/context-prompts-physics-assignments-2026.md']
confidence: medium
page_kind: [framework]
research_method: [case study]
discipline: [physics education]
level: [higher ed, undergraduate]
audience: [instructors, curriculum designers]
foundations: [ai-literacy]
pedagogy: [scaffolding, socratic-method, self-directed-learning, student-ai-interaction, motivation]
technology: [prompt-engineering, generative-ai, conversational-ai]
assessment: [formative-assessment]
ethics: [ai-use-disclosure, digital-divide, equity-in-ai-education]
contributors: [editor]
connected_faqs: [asynchronous-online-courses-ai]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
---

> **Synthesis:** Rodriguez and Wulff describe a lightweight way to put [[generative-ai]] to work in an introductory physics course: the instructor writes a context prompt that fixes the AI's role, task, and boundaries, and students carry that prompt into a sustained dialogue about one or two course topics. In an asynchronous course of roughly 70 students, the graded artifact was the [[student-ai-interaction|transcript]] rather than a final answer, so credit tracked evidence of genuine exchange — the design move that pushes students past answer-seeking and toward [[socratic-method|Socratic dialogue]]. Because the framing lives in the instructor's [[prompt-engineering|prompt]] instead of inside a proprietary tutor, the same template can be edited for a new course or topic, and a companion reflection prompt extends it to elaboration, application, and transfer.

## Key Findings
1. **The instructor's prompt carries the pedagogy.** The context prompt sets role, task, and boundaries for the whole conversation, assembled from six prompt-engineering components in which task and context matter most and tone least.
2. **The role is pinned for the entire chat.** Each prompt opens by asking the model to prioritize that message for the rest of the conversation, so the learning-guide [[scaffolding|scaffold]] survives multiple follow-up exchanges.
3. **Students explored, not just answered.** They chose one or two subtopics from lecture and asked for step-by-step explanations, worked examples, analogies, and real-world applications, with prerequisites suggested when background was thin.
4. **Grading rewarded dialogue.** Full credit required the main context prompt plus enough follow-up interaction to demonstrate meaningful exploration, and students were expected to answer the AI's Socratic questions rather than only ask.
5. **Personal relevance surfaced in the transcripts.** One student who worked as a nail technician used the conversation to connect physics to the practices of her trade; other students made comparable links to jobs, hobbies, and daily experience.
6. **The activity ran at course scale.** Approximately 70 students in the asynchronous course "Patterns of Nature" completed roughly monthly assignments, submitting one transcript with at least two especially useful exchanges highlighted for the instructor.
7. **Reflection is a proposal, not a result.** A parallel context prompt for self-reflection — elaborate a concept, apply it, transfer it — is presented as the framework's next extension rather than as an implemented classroom activity.

## The prompt is where the teaching happens
Most AI-in-course designs hand students a tool and hope the tool behaves. This one hands them a sentence-level job description. The context prompt names the student's situation, instructs the model to act as a learning guide, asks for a Socratic approach with plain-language explanation and step-by-step mathematics, and permits suggestions of a website or video. The authors map these choices onto the six components of [[prompt-engineering]] — task, context, exemplar, persona, format, and tone — and note that task and context do the heavy lifting. The practical consequence is that the [[pedagogy|pedagogical]] intent is readable and revisable: an instructor can see what the AI was told to do, and change it, without adopting a new platform.

## What the conversation looks like in practice
Students were told to pick two subtopics from lecture, use AI as a learning guide, ask questions when they did not understand, request examples and analogies, connect the material to their own interests, and save the full transcript for credit. The authors report that the personal-connection requirement produced the strongest evidence of learning-relevance in the submitted chats. It also produced the assignment's clearest failure mode: many students asked a long list of questions but did not answer the follow-up questions the AI asked back, which is exactly the behavior the grading criteria were meant to catch. Their conclusion is a design instruction rather than a complaint — if the goal is dialogue, the criteria, the instructions, and the modeling all have to say so.

## Implementation costs and constraints
Three practical issues are named. [[generative-ai|AI-supported]] assignments generate a great deal of text to read, so the authors advise grading engagement and response quality rather than correctness — a [[formative-assessment|formative]] stance that keeps the workload finite. Many students are unfamiliar with using AI as a conversational partner instead of a search engine, so they need explicit instruction in how to sustain an exchange. And platform access is uneven: paid tiers can return longer or more detailed answers than free tiers, which the authors flag as a source of inequity across students. [[human-in-the-loop-ai|Human oversight]] remains necessary throughout, since the models can still produce inaccurate or misleading claims.

## What this means for practice
- **Instructors.** Write the context prompt yourself and grade the exchange, not the answer: require the prompt, a minimum of sustained follow-up, and responses to the AI's own questions.
- **Instructors.** Tell students the goal is a conversation, and model what that looks like, because asking many questions while ignoring the replies is the common default.
- **[[curriculum-design|Curriculum]] designers.** Treat the prompt as a reusable course artifact that can be versioned, shared across sections, and swapped between activities without changing [[edtech-platform|platforms]].
- **Faculty developers.** Frame the assignment as [[ai-literacy]] work as much as physics work — students need to learn when to use AI, how to use it well, and how to judge its ethical implications.
- **Administrators.** Check that the required AI tier is available to every enrolled student before making a paid model the default, since free and paid versions behave differently.

## Limitations
- The paper reports one implementation in one asynchronous introductory course and presents no learning-outcome data, so the framework's benefits are argued from transcripts and instructor experience rather than measured.
- No data-collection window is reported and the models are described generically, with GPT-4o given as an example, so the observed behavior is tied to a model generation that has already moved on.
- The inequity between free and paid model tiers is acknowledged by the authors but not quantified or tested.
- Reflection assignments are proposed rather than implemented, so the elaboration-application-transfer prompt has no classroom evidence behind it.

## Connected Concepts
- [[physics-education]]
- [[prompt-engineering]]
- [[generative-ai]]
- [[student-ai-interaction]]
- [[socratic-method]]
- [[scaffolding]]
- [[self-directed-learning]]
- [[ai-literacy]]
- [[formative-assessment]]
- [[motivation]]
- [[higher-ed]]
- [[equity-in-ai-education]]

## Connected Articles
- [[hashmi-socratic-physics-chatbot-2025]] — Analyzing Undergraduate Problem-Solving in Physics Through Interaction With an AI Chatbot
- [[socratic-ai-physics-tutor-taxonomy-2026]] — A Bottom-Up Taxonomy of Student Discourse with a Socratic AI Physics Tutor
- [[teacher-authored-prompts-student-ai-dialogue]] — Teacher-Authored Prompts for Configuring Student-AI Dialogue: K-12 Classroom Implementation
- [[wang-teacher-student-centered-agents-physics-2026]] — Comparing teacher-centered and student-centered agents based on prompt engineering in physics learning
- [[fouad-bentley-trust-utility-gap-physics-2026]] — Trust-utility gap in introductory physics education
- [[physics-students-llm-perceptions-instruction-2026]] — Skepticism vs. Convenience: Physics Students' Perceptions and Use of Large Language Models Before and After Instruction
- [[taklif-ai-interest-based-personalized-assignments]] — Taklif.AI: LLM-Powered Platform for Interest-Based Personalized College Assignments
- [[probing-ai-generated-physics-solutions-2026]] — Probing AI-Generated Physics Solutions and Preparing Students to Critique Them

## Citation
Rodriguez, M., & Wulff, P. (2026). [Artificial Intelligence Driven Physics Assignments using Context Prompts](https://arxiv.org/abs/2609.22578). arXiv:2609.22578.