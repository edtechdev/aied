---
title: "Investigating the Role of Chatbots in Facilitating Learning Design"
created: "2026-09-21T04:46:58-04:00"
updated: "2026-09-21T04:46:58-04:00"
type: article
sources: ['raw/papers/tang-chatbots-learning-design-2026.md']
confidence: medium
published: "2026"
page_kind: [evaluation]
research_method: [thematic analysis]
discipline: [learning sciences]
level: [graduate]
audience: [instructional designers, instructors, researchers]
foundations: [learning-design, human-ai-collaboration]
pedagogy: [scaffolding]
technology: [generative-ai, pedagogical-agent, llm]
methods: [qualitative-research]
---

> **Synthesis:** Tang and colleagues ask what novice learning designers actually do with a chatbot that sits inside a design tool, and answer it with dialogue structure rather than satisfaction ratings. Five Masters students, selected from a cohort of 24 for their extended exchanges with the LDFacilitator chatbot embedded in the Learning Design Studio platform, produced 1,378 coded designer-chatbot turns. A two-level coding scheme built on a multilevel [[learning-design]] framework was applied by two coders with high agreement, and the coded sequences were modeled as a first-order Markov process. The transition network shows designers parking on intended learning outcomes and pedagogical approach, then converting curriculum components into concrete tasks, with regular detours into course context and platform navigation. A single long dialogue, tracked across three intensive working periods, shows the chatbot playing a different role in each: term clarification, then task design alongside long stretches of independent work, then a broad pre-deadline check.

## Key Findings

1. **Designers dwell on outcomes and pedagogy, not on generating content.** Intended learning outcomes showed the strongest self-transition probability at 0.84, and pedagogical approach reached 0.71, so the dialogue space was used for iterative clarification and validation of design intent rather than one-off suggestions.
2. **Curriculum components turn into tasks at a stable rate.** The transition from curriculum components to task ran at 0.63, marking the step where designers operationalize what students should work on into what students will actually do, which is where task format, sequencing and feasibility get reasoned about.
3. **Outcomes act as the hub of the design conversation.** Intended learning outcomes connected to multiple other themes, which the authors read as repeated alignment checks: designers returned to outcomes to justify decisions about pedagogy, disciplinary practice and task structure.
4. **Context and platform talk is part of design reasoning, not noise.** Transitions through course information and navigation recur, showing designers reconciling abstract design ideas with a specific learning context and what the platform affords.
5. **One designer's dialogue moved through three distinct functions over weeks.** The longest interaction began with clarifying three unfamiliar terms, moved to sustained task design interlaced with 30-minute to several-hour work stretches, and returned 20 days later as an uninterrupted check across every key concept except outcomes.
6. **Method matters here: the analysis is sequential, not thematic-only.** Each coded turn was treated as a state in a first-order process and converted into transition probabilities, with inter-rater agreement of 0.92 on the double-coded sample.

## What the transition network shows

The aggregate network separates themes that designers stay inside from themes that carry them between decisions. Outcomes and pedagogical approach behave as long-stay states: once designers start articulating or refining an outcome, they keep working on it across consecutive turns. Curriculum components behave differently, holding attention for a moderate number of turns before the sequence moves to tasks. The authors interpret that pattern as an alignment process rather than drafting, because each movement into a new theme is preceded by justification work rather than by a fresh request. Course information and navigation appear throughout as short visits that resolve situational constraints: the learning context, the course framing, or what the platform allows. Patterns, where designers ask about reusable design knowledge, act as a meta-level state whose departure leads consistently into framework-oriented discussion.

## What the individual dialogue shows

Tracking the longest dialogue over time makes the [[scaffolding]] role visible in stages. In the first block, at the start of the course, the designer asked only for the meaning of three unfamiliar terms, disciplinary practice, curriculum components and pedagogical approach; breaks were minutes apart and the whole block ran about 7 hours 50 minutes, with almost no design work on the platform. The second block was different in kind: conversations were interlaced with 30-minute to several-hour stretches of work, and the theme moved from overarching concepts to task design. After a 20-day gap in which the course required intensive design activity, the third block was an uninterrupted dialogue covering every key concept except outcomes, timed to the point where the full design had to be presented before moving to [[learning-analytics|learning analytics]] questions. The authors read that pattern as consultation for verification rather than for generation.

## What this means for practice

- **Instructional designers.** Expect the chatbot to be used for alignment checks, not authoring. The evidence says designers spend their turns reconciling outcomes, pedagogy and tasks, so scaffolding that supports comparison across those elements fits the observed behavior better than suggestion generation.
- **Instructors.** Time the support to the phase: the heavy consultation happened just before a deliverable, and the early phase was spent clarifying terminology that the tool could have explained once.
- **Tool designers.** Reduce the friction that shows up as navigation and course-context detours: those transitions signal designers leaving the reasoning task to resolve platform or context questions.
- **Researchers.** The same sequential modeling can be applied to any assistant that logs turns, which makes dialogue structure a measurable outcome rather than a qualitative impression.

## Limitations

- The study analyzed five novice designers drawn from one Masters course, selected because they interacted most, so the transitions describe engaged designers rather than the class.
- Only first-level themes were modeled, in a sampled subset of dialogues, so the finer distinctions inside each theme are not represented in the network.
- The reported transition probabilities come from a preliminary study, and the authors call for future work on the content of designers' questions across phases.

## Connected Concepts

- [[learning-design]]
- [[human-ai-collaboration]]
- [[scaffolding]]
- [[generative-ai]]
- [[pedagogical-agent]]
- [[llm]]
- [[learning-analytics]]
- [[metacognition]]

## Connected Articles

- [[penny-transition-network-analysis-efl-writing-2026]] — transition network analysis of learner-chatbot interaction sequences
- [[wang-teacher-ai-co-design-review-2026]] — review of teacher-AI co-design in learning task design
- [[pishtari-teacher-ai-training-learning-design-2026]] — how chatbot use and training shape learning design quality
- [[claassen-learning-analytics-genai-learning-design-2026]] — learning analytics and generative AI in design work

## Citation

Tang, S., Shen, J., Lin, J., & Law, N. W. Y. (2026). [Investigating the role of chatbots in facilitating learning design](https://genai-la.genai-learning.online/). In *Joint Proceedings of LAK 2026 Workshops, co-located with the 16th International Conference on Learning Analytics and Knowledge*. Bergen, Norway.
