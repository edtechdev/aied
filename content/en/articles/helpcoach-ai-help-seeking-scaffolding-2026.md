---
title: "HelpCoach: Scaffolding Targeted AI Help-Seeking During Problem-Solving"
created: "2026-09-25T09:40:00-04:00"
updated: "2026-09-25T09:40:00-04:00"
type: article
sources: ['raw/papers/helpcoach-ai-help-seeking-scaffolding-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [cs education]
level: [higher ed, undergraduate]
audience: [instructors, instructional designers, researchers]
pedagogy: [help-seeking, metacognition, scaffolding, problem-solving, self-regulated-learning, student-ai-interaction]
technology: [conversational-ai, generative-ai, intelligent-tutoring, llm]
assessment: [learning-gains]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-25"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** HelpCoach is an add-on to chat interfaces that monitors how specifically students ask for help during [[problem-solving]] and intervenes only when a question is too vague. The authors define targeted [[help-seeking]] along two dimensions: the knowledge component a student needs and the scaffold type they want, from a step-by-step answer to a hint or a worked example. In a between-subjects study with 40 [[higher-ed|college students]] learning [[cs-education|web programming]], HelpCoach participants wrote a significantly higher proportion of specific questions in their initial drafts than the Baseline condition (57.3% vs 40.5% in the first task) and retained significantly more knowledge one week later (d = 1.100). The system combines a question-specificity classifier, a revision template that makes knowledge components and scaffold types visible, and context-aware recommendations drawn from students' code and chat history. Specificity rose without measurable gains in [[self-report-measures|self-reported]] [[self-regulated-learning]], and the authors caution that the retention benefit cannot yet be attributed to more targeted [[conversational-ai|chatbot]] replies.

## Key Findings
1. Students rarely asked targeted questions on their own: in Study 1, fewer than 25% of questions specified both a knowledge component and a scaffold type, and 20% specified neither.
2. HelpCoach participants formulated significantly more specific initial questions than Baseline in Task 1 (57.3% vs 40.5%, p = .042) and Task 2 (65.4% vs 33.9%, p < .001).
3. Knowledge retention one week later was significantly greater under HelpCoach (mean gain 1.9 vs 0.3 out of 6, p = .006, d = 1.100); immediate pre-to-post gains did not differ.
4. Self-reported self-regulation did not differ significantly between conditions on metacognitive self-regulation, effort regulation, or help-seeking subscales at any measurement point.
5. Participants rated HelpCoach significantly higher for recognizing different knowledge components (p = .029) and choosing effective knowledge components (p = .028), but not for choosing scaffold types.
6. The Gemini-3.5-flash classifier reached .830 accuracy for knowledge specificity and .829 for scaffold specificity, yet the chatbot still over-helped: scaffold precision fell from .733 to .607.

## What targeted help-seeking requires
Targeted help-seeking means asking a question that names both the knowledge a student needs and the form of help they want, so the chatbot supplies only what supports learning rather than a complete solution. Building on Nelson-LeGall's help-seeking model, the authors identify three metacognitive skills: assessing whether one's own question is specific, recognizing the available knowledge components and scaffold types, and deciding which form of help fits the moment. Knowledge components are reusable units of knowledge, such as knowing that "the area of a circle is πr²"; scaffold types are task-agnostic forms of support. The study uses six: Steps, Explain, Check, Hint, Example, and Question. Students often lack these [[metacognition]] skills and may overestimate their own regulation, which is why vague questions persist even when learners intend to ask well.

## Designing a scaffold that intervenes in situ
HelpCoach adds three features to a chat interface. Specificity monitoring rates each question as specific, partially specific, or not specific, making question quality visible on every attempt. Templated revision appears only when a question is insufficiently specific, showing lists of knowledge components and [[scaffolding]] types so students map needs onto options rather than recall them. Scoped exploration recommends three knowledge components relevant to the student's current code and chat history, plus three scaffold types chosen by classifying each component as a fact, rule, or principle through the Knowledge-Learning-Instruction framework. Study 1's fixed, every-other-turn scaffolds proved disruptive, so HelpCoach's adaptive timing fires only on vague questions, avoiding the expertise reversal effect.

## Study 2: specificity gains and knowledge retention
The evaluation was a between-subjects study with 40 college students, 20 per condition, who completed two Vue.js tasks with a GPT-5.4-mini chatbot and a third a week later without the scaffold. Both conditions received pre-task training, so the comparison isolates the in situ scaffold. HelpCoach participants asked more specific questions in their first drafts and retained more of what they learned. Participants reported little disruption: they rated distraction from problem-solving a median of 3 on a 7-point scale, against a median of 6 for helpfulness in specifying questions. In the third task, specificity remained higher under HelpCoach (43.7% vs 32.1%) but the difference was not statistically significant.

## Why the retention gain remains unexplained
The authors tested whether more targeted chatbot replies explained the retention benefit and found they did not: the proportion of targeted help did not differ significantly between conditions. Response precision was low in both conditions, and several participants received broader assistance than they requested. Two explanatory pathways therefore remain untested. Formulating a specific question may itself trigger [[metacognition]] reflection and [[prior-knowledge]] activation, or students may have engaged constructively with even overly broad replies. The authors present these as hypotheses rather than findings, and note that the study never examined how students used the responses they received.

## What this means for practice
- **Instructors.** Embed question-formulation scaffolds inside the assignment chat instead of teaching help-seeking only before the task; the specificity gains came from in situ revision.
- **Instructional designers.** Make knowledge components and scaffold types visible as selectable options, and let students skip the template when it does not fit.
- **Course teams.** Fade help-seeking scaffolds according to demonstrated performance rather than a fixed turn schedule; prompts that reappeared every other turn annoyed students who no longer needed them.
- **Tool builders.** Constrain the chatbot to the scope students request, because unconstrained over-helping can weaken the incentive to ask precise questions.

## Limitations
- The system and both studies were designed for web programming in one Vue.js course, so the authors avoid strong generalizability claims.
- The analytic sample was 40 students from a single university, the main session ran a median of 73 minutes, and only 30 of 40 returned for the one-week retention session.
- Self-regulation was measured with self-report MSLQ subscales rather than behavioral evidence, and no significant condition differences appeared on any subscale.
- The evidence does not establish causation: the proportion of targeted chatbot help did not differ significantly between conditions.

## Connected Concepts
- [[help-seeking]]
- [[metacognition]]
- [[scaffolding]]
- [[problem-solving]]
- [[self-regulated-learning]]
- [[conversational-ai]]
- [[student-ai-interaction]]
- [[generative-ai]]
- [[cs-education]]
- [[feedback]]
- [[prior-knowledge]]
- [[intelligent-tutoring]]
- [[learning-gains]]
- [[higher-ed]]

## Connected Articles
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — Efficiency vs. Effectiveness: Self-Regulated Learning with LLM-Mediated Help-Seeking
- [[course-specific-rag-help-seeking-higher-ed-2026]] — Reducing Barriers to Academic Support: Evaluating a Course-Specific RAG System for Addressing Help-Seeking Disparities in Higher Education
- [[ai-fallibility-warning-help-seeking]] — Warning About AI Fallibility Increases Help-Seeking in an Intelligent Tutoring System
- [[rethinking-scaffolding-llm-tutors]] — Rethinking Scaffolding in LLM Tutors: The Interactional Mismatch Between Benchmarks and Real-World Deployments
- [[scaffolding-student-ai-dialogue-framework-2026]] — Scaffolding Students-AI Dialogue: A Framework for Safe Educational Interactions
- [[conversational-agents-novice-programmers-scoping-2025]] — Exploring Conversational Agents for Novice Programmers: A Scoping Review
- [[student-ai-inquiry-types-cs2-2026]] — Analysis of Types of Inquiries in Student-AI Interaction: A case study of two CS2 tasks
- [[atif-dickson-deane-scaffold-shortcut-genai-srl-2026]] — Scaffold or Shortcut? Postgraduate IT Students' Use of Generative AI and Self-Regulated Learning

## Citation
Jin, H., Peng, W., Han, J., Liao, Q. V., & Wang, X. (2026). [*HelpCoach: Scaffolding Targeted AI Help-Seeking During Problem-Solving*](https://arxiv.org/abs/2609.28918). arXiv preprint.
