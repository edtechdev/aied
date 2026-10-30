---
title: "Students as Game Designers: Fostering AI Literacy through Project-Based Learning and Design Thinking"
created: "2026-10-30T06:05:00-04:00"
updated: "2026-10-30T06:05:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/karampa-students-game-designers-ai-literacy-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [design and evaluation study]
discipline: []
level: [primary education, k 12]
audience: [instructors, curriculum designers, instructional designers, researchers]
pedagogy: [project-based-learning, game-based-learning, collaborative-learning, scaffolding, constructivist]
technology: [generative-ai, llm, prompt-engineering]
assessment: [formative-assessment, self-assessment]
methods: []
institutions: []
ethics: []
foundations: [ai-literacy, computational-thinking, design-thinking]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-30"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Karampa, Kakava, Mellou, and Paraskeva (2026) put 22 primary school students aged 8 to 12 through an e-course lab in which the students designed an augmented escape board game about misinformation, rather than playing one built for them. The pedagogy stacked [[project-based-learning|project-based learning]] with [[design-thinking|design thinking]] and the Room2Educ8 escape-room framework, so that each project phase ran through empathy, definition, ideation, prototyping and testing. Students generated 11 game proposals with AI prompts, chose one collaboratively, and built a final game in which an unreliable AI chatbot feeds players misleading hints about nutrition claims. On a 20-item questionnaire adapted from the five competence areas of DigComp 3.0, mean [[ai-literacy|AI literacy]] rose from 3.684 to 4.309 on a 5-point scale, with every competence area improving at p < .001. The study is small and single-site, so the finding is that this design is workable with a class of 22, not that it outperforms alternatives.

## Key Findings

1. **Overall AI literacy rose significantly across the whole sample.** The composite mean went from 3.684 (SD 0.524) before the intervention to 4.309 (SD 0.431) after it, a paired-samples t test of t(21) = −21.086, p < .001. Factor reliability was acceptable at both points, with Cronbach's alpha of 0.828 before and 0.800 after.
2. **Every one of the five DigComp 3.0 areas improved, and the weakest starting areas moved most.** Information search, evaluation and management went from 3.700 to 4.209; communication and collaboration from 3.256 to 4.027; content creation from 3.348 to 4.136; safety, wellbeing and responsible use from 4.239 to 4.705; problem identification and solving from 3.879 to 4.470. All five comparisons reached p < .001.
3. **The movement concentrated where students started lowest.** Communication and collaboration went from 3.256 to 4.027 and content creation from 3.348 to 4.136, while the area students already rated highest, safety and responsible use, moved from 4.239 to 4.705. Pair work that forced students to negotiate a game's rules and narrative, then build it, is where the largest shifts appear.
4. **Students chose misinformation as their topic and built the assessment into the game's mechanics.** After analysis and voting, the class settled on misinformation. The final game, "The Mind Trap of Lord BlabberLier in Foodland", has an AI-controlled microwave hijacked to spread nutritional falsehoods; players verify claims, collect clues, and choose whether to disable or repair the compromised system.
5. **An unreliable AI chatbot is a character in the game, not just a design tool.** The game includes a chatbot that supplies misleading hints and a robot guide that supports players, so the artifact itself stages the [[critical-thinking|critical evaluation]] of AI output that the curriculum was aiming at.
6. **AI was used as a design instrument inside a bounded process.** Students produced 11 proposals with AI prompts using the "Who, When, Where, Why and How" technique, then evaluated all of them with the Plus-Minus-Interesting approach and merged the strongest elements into one collaborative game rather than building 11.
7. **Play-testing drove revision.** Students tested the game in groups of five and returned to ideation and prototyping repeatedly, which the authors present as the reason the linear project-based pathway needed design thinking's iteration.

## Why the combination, and where the AI sits

The authors' argument for combining the two methods is that [[project-based-learning|project-based learning]] supplies authenticity and a public product while design thinking supplies iteration. A project that runs in a straight line from brief to artifact does not match how design actually happens, and the escape-room tasks gave each round a defined puzzle with a testable outcome.

The [[generative-ai|generative AI]] prompts were used where a designer would use a collaborator: to generate candidate concepts, settings and narratives. Selection stayed with the students, and the choice of which proposal to build was settled by a group evaluation technique rather than by a vote on preference alone. The authors describe the competences the course targeted by mapping each DigComp 3.0 area onto project phases, with the communication and collaboration area handled by pairs exchanging prompts and files during construction.

The Room2Educ8 framework gave the class a fixed sequence for escape-room design, from contextualising through designing puzzles, briefing, prototyping and debriefing. That is what kept the design work inside a two-period ICT lesson rather than expanding indefinitely.

## What this means for practice

- **Teachers**: Treat the game as the assessment artifact, not an add-on. The students' understanding showed up in whether their puzzles required verifying a claim, which is a different evidence trail from a written explanation of misinformation.
- **Teachers**: Budget for the selection step. Generating 11 proposals is cheap; the Plus-Minus-Interesting evaluation and the merge into one buildable design is where the learning about trade-offs happened.
- **Instructional designers**: Reuse the constraint structure. One shared theme, no funding, and a school-wide audience forced the class into a single artifact, which is what made prototyping feasible in the time available.
- **Teacher educators**: Prompt fluency alone would have been the shallow version of this lesson. The design sequence is what turned prompts into a product with an audience.
- **Researchers**: The instrument is worth reusing precisely because it disaggregates by competence area. Aggregate AI literacy scores hide the pattern this study found, where the areas students rated lowest moved furthest.

## Limitations

- The sample is 22 students in a single e-course lab at one site, with no control group. Pre/post gains cannot be separated from novelty, teacher attention, or ordinary instruction over the same period.
- The outcome measure is a self-report Likert questionnaire, so the gains are in students' rated confidence in AI competences, not in independently observed performance.
- The 20 items were improvised for this study and adapted from DigComp 3.0 rather than drawn from a validated AI literacy instrument, and the five areas are reported as single factor scores.
- Twelve-year-olds rating their own problem-solving and safety competences is a demanding ask, and the floor at the pre-test was already above the midpoint for two areas, which limits how much movement the scale could register.
- The augmented escape board game and its AI-assisted props required materials, facilitation and technical setup that the paper describes but does not cost, so the claim of scalability is an argument rather than a demonstrated result.

## Citation

Karampa, V., Kakava, V., Mellou, A., & Paraskeva, F. (2026). Students as Game Designers: Fostering AI Literacy through Project-Based Learning and Design Thinking. In *Proceedings of the European Conference on Game-Based Learning (ECGBL 2026)*. Academic Conferences and Publishing International.
