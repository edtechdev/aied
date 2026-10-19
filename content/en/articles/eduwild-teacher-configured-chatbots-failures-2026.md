---
title: "EduWild: How Teacher-Configured Chatbots Fail in Real-World Use and How to Fix Them"
created: "2026-10-19T09:20:00-04:00"
updated: "2026-10-19T09:20:00-04:00"
type: article
sources: ['raw/papers/eduwild-teacher-configured-chatbots-failures-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [system development, user study]
level: [higher ed]
audience: [instructors, educational technology developers, researchers]
pedagogy: [scaffolding, student-ai-interaction, help-seeking]
technology: [conversational-ai, prompt-engineering, pedagogical-agent, llm]
methods: [ai-ed-evaluation, mixed-methods-research]
foundations: [teacher-ai-competency, educational-development]
ethics: [guardrails, pedagogical-safety]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-19"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Liu, Xiao, Li, and Stamper (2026) ask a question that most chatbot evaluations skip: what happens when a [[teacher-role|teacher]] writes the instructions and real learners show up? Their dataset, EduWild, pairs 1,726 conversations from 217 teacher-configured [[conversational-ai|chatbots]] on Playlab with the system prompts and settings behind each bot, including 900 conversations from the intended end users of 35 deployed bots. Coding against a 29-code taxonomy shows that the dominant problem is not wrong facts but lost teacher intent: bots skip required workflow steps in 53.8% of end-user conversations, never establish their role in 33.4%, and overload learners with information or questions in 37.1%. The authors respond with a prompt-level harness that leaves the teacher's prompt intact while adding six failure-specific controls, an opening self-introduction, and cached memory of what the teacher expects learners to do. In a study with 200 college students across ten bots, mean target failure codes per conversation fell from 1.406 to 0.489, a 65.2% relative reduction, though the fix shifted rather than eliminated some [[pedagogy|pedagogical]] trade-offs.

## Key Findings

1. Skipped or missing workflow steps were the most frequent failure, appearing in 484 of 900 end-user conversations (53.8%), more than five times the rate of incorrect content (10.1%).
2. Bots also failed to establish their role and scope at the start (33.4%) and overloaded learners with information or multiple questions in one turn (37.1% combined).
3. The 29-code taxonomy organizes failures into factual, workflow, diagnostic, and pedagogical categories, each judged against the teacher's own system prompt rather than a generic rubric.
4. Two authors independently coded a 45-conversation sample at Cohen's κ = 0.71; the calibrated GPT-5.6-Sol judge reached κ = 0.85 on the same held-out sample and labeled the remainder.
5. The harness adds six failure-specific prompts to the original teacher prompt, opens with a brief self-introduction, and caches extracted learner requirements with supporting quotes.
6. With 200 college students across ten bots, mean distinct target failure codes per conversation dropped from 1.406 to 0.489, a 65.2% relative reduction with bots weighted equally.
7. Multi-question overload fell from 27.7% to 1.1% and cognitive overload from 39.7% to 7.6%, but early answer dumping actually rose from 6.0% to 9.8%.

## What the corpus contains

The data come from a self-paced, nine-week online professional development program on [[ai-education|AI in education]] for higher-education educators, offered to 114 cohorts between February 2025 and July 2026. Building at least one chatbot was a required activity, and educators could share their bots with students, colleagues, or the public through Playlab links. Before preprocessing, 87 educators created 224 chatbots that logged 1,744 conversations; removing test activity and empty records leaves 217 chatbots built by 85 educators and 1,726 conversations.

Each bot arrives with its system prompt, attached files, model, and platform settings. Prompts are moderately long (Mdn = 296 words), deployed bots carry longer ones (Mdn = 500), and 70% attach at least one reference file, rising to 91% among deployed bots. Most bots target students (59%), but the largest single subject is teaching and [[learning-design|course design]] (30%); supporting tasks are the most common function (45%).

End users write a median of nine words per message, and conversations peak at term starts (101 in September 2025, 104 in March 2026). The five most active bots account for 56.4% of conversations, so later analyses weight bots equally.

## Where teacher intent breaks down

The taxonomy was built deductively from tutoring evaluation frameworks, learning-science work, human–[[student-ai-interaction|AI interaction]] guidelines, and red-teaming, then refined against the data; two workflow codes emerged inductively. Factual failures cover wrong, incomplete, or ungrounded content and boundary violations; workflow failures cover unanswered questions, repetition, and skipped structure; diagnostic failures cover misreading [[prior-knowledge|prior knowledge]], level, or errors; pedagogical failures cover answer dumping and over-[[scaffolding]].

Missing workflow steps (53.8%) and absent expectation setup (33.4%) outrank every factual error, and the two co-occur in 25.8% of conversations. Within the factual category, guardrail breaches (16.6%) are themselves more common than incorrect content (10.1%). Bots mostly fail at the procedural and relational work of being a teacher-configured [[pedagogical-agent|pedagogical agent]], not at recalling facts.

Overload splits into two demands that only partly overlap. Cognitive overload appears in 244 conversations (27.1%) and multi-question overload in 190 (21.1%); both appear in 100 (11.1%), while 234 have only one. Shortening responses therefore does not fix a bot that asks four questions in one turn. Support also fails in opposite directions: early answer dumping (8.6%) usually arrives without prior diagnosis (57.1% of those cases), while over-scaffolding (5.7%) often accompanies repetition loops. Rates diverge by bot, with early answers in roughly 54% of one bot's conversations and over-scaffolding peaking at 43% in another.

## A prompt-level harness and its measured effects

The harness is a wrapper, not a rewrite. The teacher's prompt remains the authority for task, permissions, and required workflow. Six failure-specific prompts target the codes above 10% prevalence (W7, W9, P3, W6, F5, F1) and are combined with the original prompt and dialogue history at each turn. An opening self-introduction states the bot's role and scope before the learner speaks, and a preparation step uses an [[llm|LLM]] to extract learner responsibilities from the teacher's prompt, storing each with a verbatim supporting quote so completed steps can be tracked.

The evaluation recruited 200 U.S.-based college students through Prolific, randomly assigned to control or harness versions of the ten most-used bots, 100 participants per condition. Participants role-played the intended user from a one-sentence scenario; the median task took eight minutes.

Mean distinct target codes per conversation went from 1.406 to 0.489, and across all 29 codes from 2.968 to 0.991; conversations with at least one target label fell from 84.7% to 55.7%. Multi-question overload dropped from 27.7% to 1.1% (96.0% relative) and cognitive overload from 39.7% to 7.6% (80.9%). Missing workflow steps improved least (43.9% to 32.2%). The trade-off: over-scaffolding fell from 17.5% to 0.8%, but early answer dumping rose from 6.0% to 9.8%, suggesting that instructions curbing questioning push the bot toward answering sooner.

## What this means for practice

- **Instructors.** Write the workflow as explicit, ordered steps and name what learners must do at each one; a bot cannot follow what the prompt only implies.
- **Instructors.** Script the opening. State the bot's role, scope, and how the session will run in the first message, since a third of end-user conversations began without that setup.
- **Educational technology developers.** Build wrappers around teacher prompts instead of asking teachers to author better prompts; the harness improved six failure modes without editing a single instruction.
- **Instructional designers and faculty developers.** Review prompts for boundaries and pacing, not just content accuracy; guardrail breaches were more common than incorrect content, and question pacing needed its own control.
- **Administrators.** Treat lower failure-label rates as a diagnostic signal, not evidence of learning; reduced labels do not establish improved outcomes or safe autonomous deployment.

## Limitations

- The corpus comes from adult learners on one platform, Playlab, inside a single nine-week professional development program.
- The participant study covers only the ten most frequently used bots, so the harness estimates do not represent the long tail of low-traffic bots.
- Participants role-played an intended user from a one-sentence scenario card rather than pursuing their own coursework, so their motivation may differ from real students in the corpus.
- Annotation relies on a human-calibrated LLM judge; codes such as cognitive overload and pedagogical mismatch require judgment about task demands, and only 45 conversations calibrated the judge against human consensus.
- Labels record whether a failure category is present in a conversation, not how often or how severely it occurs.
- The study measures observed failures rather than learning outcomes or [[student-experience|learner experience]], and bots using the harness still missed required workflow steps in 32.2% of conversations.

## Citation

Liu, Z., Xiao, R., Li, Y., & Stamper, J. (2026). [*EduWild: How Teacher-Configured Chatbots Fail in Real-World Use and How to Fix Them*](https://arxiv.org/abs/2610.23530). arXiv:2610.23530.
