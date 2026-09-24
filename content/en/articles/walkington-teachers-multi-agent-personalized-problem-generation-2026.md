---
title: "Mathematics Teachers’ Interactions with a Multi-Agent System for Personalized Problem Generation"
created: "2026-09-24T02:21:10-04:00"
updated: "2026-09-24T02:21:10-04:00"
type: article
sources: ['raw/papers/walkington-teachers-multi-agent-personalized-problem-generation-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
foundations: [teacher-role, human-ai-collaboration, agentic-ai]
pedagogy: [motivation, problem-solving, prior-knowledge]
technology: [generative-ai, llm, personalized-learning, pedagogical-agent, human-in-the-loop-ai]
ethics: [hallucination-risk, pedagogical-safety]
research_method: [thematic analysis, user study]
discipline: [math education]
audience: [researchers, instructors]
level: [k 12, middle school]
page_kind: [evaluation]
---

> **Synthesis:** Walkington and colleagues studied the Persona Problem Builder (PPB), a teacher-in-the-loop [[human-in-the-loop-ai|multi-agent]] system that rewrites middle school mathematics problems around students' interests. A teacher supplies an ASSISTments problem and a topic, GPT-4o writes a personalized version, and four [[pedagogical-agent|specialized agents]] judge it for authenticity, realism, readability, and [[hallucination-risk|mathematical accuracy]]; failed checks go to a refinement agent, for up to five rounds. Eight seventh grade teachers produced 212 problems and assigned them to students. The result is uneven. [[motivation|Interest]] fit was the weak point: students' interests were so fine-grained that teachers and students alike wanted to edit the real-world details, and students rejected problem topics almost twice as often as they welcomed them. Realism fared better, with the agents catching implausibilities while the problems were being written. Readability and mathematical errors were rare. The authors argue that teacher judgment is not replaceable, and that authenticity remains the dimension personalization cannot guarantee.

## Key Findings

- **A four-agent review loop wraps every generated problem.** Authenticity, realism, reading-level, and hallucination agents each return pass or fail, and failures feed a refinement agent until all pass or five rounds elapse.
- **Teachers accepted most output but revised what mattered.** Of 212 problems, 166 were accepted as-is while 46 drew 179 moves, clustered on topic, local context, and student names rather than errors.
- **Interest fit was the hardest dimension.** Students called the topic something they liked in 83 of 422 responses, but disliked or did not engage with it in 160.
- **Realism checks worked.** Teachers flagged 10 explicit realism problems and made 20 quantity or unit edits, while only 6 student comments on final problems concerned realism.
- **Readability and mathematics errors were rare.** No teacher found a mathematics error in a final problem, only 7 readability prompts were made, and 10 students instead wanted longer contexts.
- **Teachers still supplied mathematical judgment.** Twenty-five moves requested clearer mathematical language and 16 changed numbers or quantities, so the teacher's role went beyond catching surface mistakes.

## How the Persona Problem Builder works

The PPB is a web platform with a React frontend, a Flask API backend, and GPT-4o underneath, hosted on an EC2 instance and integrated with ASSISTments. A teacher enters an ASSISTments problem ID and a topic such as baseball, and chooses whether to keep or modify the original numerical values. A structured prompt produces the first personalized version, aiming at the chosen topic while preserving the underlying [[problem-solving|mathematics]]. Four agents then evaluate it: an authenticity agent for age-appropriate relatability, a realism agent for plausible quantities and units, a reading-level agent for vocabulary and sentence complexity, and a hallucination agent for consistency with the original. Each returns a binary decision and, on failure, the issues for a refinement agent. Teachers can then continue authoring before submitting the problem to ASSISTments.

## The authenticity gap

The largest problem was [[personalized-learning|authenticity]]. Of the 179 teacher moves, 48 changed the problem topic, 16 adjusted it to the teacher's local geographical context, and 17 changed the names of people, often to students in the class. Student feedback showed why. Of 422 response sets, 235 discussed the topic: 83 described it as something they liked, such as one about a song they were playing at that moment, while 160 described it as something they did not like or did not engage with in their lives. As the authors note, what is authentic to one student may be inauthentic to another. Only 4 responses raised broader authenticity concerns, and 9 critiqued the personalization itself, including one who wanted to enter their own interests and another who objected to being targeted.

## Realism, readability, and mathematical judgment

Realism was the dimension the agents handled best, and it shows how easily a model produces implausible contexts unchecked. Teachers made 10 moves telling the system a problem was unrealistic, asking for example whether a game allows fractional blocks, and 20 more adjusting quantities or units. Only 6 student comments on final problems raised realism, though these caught details the agents missed, such as a game that charges no tax. Reading level held up on three of four Coh-Metrix measures, with Flesch-Kincaid rising from 4.38 in the original problems to 6.62 in the personalized ones. Ten students wanted longer and more detailed contexts. No final problem drew a teacher-identified mathematics error, yet 25 moves sought mathematical clarity and 16 changed numbers, so professional judgment still shaped the mathematics students saw.

## What this means for practice

- **Keep a teacher in the loop.** Agents handled realism and readability, but teachers adjusted local fit and mathematical framing.
- **Do not assume one topic fits a class.** Interests are fine-grained, and 160 of 422 responses rejected the topic built for them.
- **Let students narrow or author their own interests**, since several asked to enter their interests or have problems matched by interest rather than by class.
- **Expect multiple revision passes to be normal**, because 46 of the 212 problems needed 179 teacher moves before teachers were satisfied.

## Limitations

- **There is no comparison condition.** The study reports reactions to one system, with no contrast against human-written or single-agent problems.
- **Realism effects are not isolated.** No clear experimental studies separate realism from other task features, so its effect on learning remains untested.
- **Feedback is narrow and curriculum-bound.** The student data cover three open-ended questions about 47 personalized problems from one Illustrative Mathematics unit.

## Connected Concepts

- [[personalized-learning]]
- [[pedagogical-agent]]
- [[human-in-the-loop-ai]]
- [[generative-ai]]
- [[motivation]]
- [[hallucination-risk]]

## Connected Articles

- [[ikram-multi-agent-personalized-math-problems-2026]]: the group's multi-agent validation framework.
- [[ampt-math-personalization-genai-2026]]: a chat-based tool for interest-based math problems.
- [[taklif-ai-interest-based-personalized-assignments]]: AI-generated assignments from declared interests.
- [[ai-modeling-problem-generation-platform-2026]]: AI-supported problem generation for instruction.
- [[mathematics-teachers-chatbot-motivation-2026]]: mathematics teachers connecting tasks to motivation.

## Citation

Candace Walkington, Theodora Beauchamp, Fareya Ikram, Merve Kocyigit Gurbuz, Fangli Xia, Morgan Lee, Andrew Lan (2026). [*Mathematics Teachers' Interactions with a Multi-Agent System for Personalized Problem Generation*](https://arxiv.org/abs/2604.12066). Accepted to AIED 2026, South Korea. arXiv:2604.12066. https://doi.org/10.48550/arXiv.2604.12066