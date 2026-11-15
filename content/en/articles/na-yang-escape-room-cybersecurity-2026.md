---
title: "Rapidly Prototyping a Generative AI Escape Room for K-12 Cybersecurity Training"
created: "2026-11-14T21:44:00-05:00"
updated: "2026-11-14T21:44:00-05:00"
type: article
sources: ['raw/papers/na-yang-escape-room-cybersecurity-2026.md']
source_depth: full text
confidence: low
evidence_context: educational
research_method: [system development]
page_kind: [framework]
level: [k 12]
audience: [educational technology developers, instructors]
discipline: [cs education, information technology]
foundations: [ai-literacy]
pedagogy: [game-based-learning, active-learning]
technology: [generative-ai, virtual-and-augmented-reality, simulation, llm]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-14"
    agent: hermes-agent
---

> **Synthesis:** A six-person team built a browser-based 3D [[game-based-learning|escape room]] for K-12 cybersecurity in two months, using Unity and a [[generative-ai|GPT-4o]] chat panel that appears in the game as a robot students can question. The design targets accessibility: no install, no headset, playable in a browser so a low-resource school can use it. Teachers were brought in as co-designers in the second iteration and changed the gameplay, including a fix for shortcut learning. The case documents the design tensions of a rushed build, not what students learned.

## Key Findings

1. **The needs assessment was thin but pointed.** A survey of teachers in four states returned seven complete responses. They reported no comprehensive cybersecurity curriculum, low student interest, difficulty engaging students, and enthusiasm for a 3D environment coupled with limited technical and domain knowledge of their own.
2. **Accessibility decided the platform.** Sandbox tools such as Roblox and Minecraft were rejected despite faster prototyping, because they require installation and restrict logging, API calls and custom environments. A web-hosted Unity build was chosen so any browser could run it.
3. **Three iterations, teachers in the middle one.** The first build established the escape room, the second brought in K-12 teachers as co-designers, and the third added the GPT-4o chat panel. The teachers' feedback reshaped usability and closed a shortcut that let students skip the reasoning.
4. **Generative AI arrived as a helper inside the fiction.** The chat panel is embedded in a humanoid robot, so asking it a question is part of the game rather than a separate tool. The authors position this as personalized support during play.
5. **Theory lost to the clock.** With two months, the team prioritized a playable build, and the game-based learning expert's framework was not fully integrated. The authors describe much of the design as educated guesswork and say they would involve that expert earlier next time.
6. **Two developers, two philosophies.** A conflict between centralised and decentralised programming approaches slowed the build, and the authors recommend agreeing coding standards and a technical direction before development starts.

## What a two-month build forces you to choose

The case is useful precisely because it is not a clean design story. The learning theory, the assessment design and the accessibility analysis were all present on the team, and the schedule decided which of them made it into the build. The result is a working [[simulation|immersive simulation]] with a plausible narrative and a chat helper, but without the evidence that the escape-room structure teaches the concepts it tests. The authors are explicit that the ChatGPT integration needs interaction data before anyone can claim it improves learning, and they name chat logs, interaction frequency and play patterns as the data to collect.

## What this means for practice

- **Educational technology developers.** Decide the accessibility constraint first. Browser-hosted beats a sandbox engine when the target school may not control its devices, even at the cost of development speed.
- **Educational technology developers.** Put teacher co-design in the iteration where the core loop already exists. The teachers in this case fixed usability and a shortcut, which are the defects a playtest with practitioners catches.
- **Instructors.** Treat an in-game chatbot as a hint system with unknown effects. Until someone measures how students use it, assume it may substitute for the reasoning the game is designed to provoke.
- **Researchers.** The build is instrumented enough to study: chat logs and play traces would show whether the robot supports knowledge retrieval or replaces it, which is the question the case leaves open.

## Limitations

- No learning outcome data: no pre/post test, no comparison with a non-AI version of the game, and no analysis of student play.
- The needs assessment rests on seven complete survey responses, and the paper reports themes rather than a sampling frame, so the problem statement is indicative.
- The account is written by the project team, including the developer who built the game, and the third iteration's chatbot is described but not evaluated.
- Two months of development constrained the theory integration and the assessment design, which the authors name as the case's main weakness rather than a finding.

## Citation

Na, H., & Yang, M. (2026). Rapidly prototyping an immersive 3D escape room game empowered by generative AI for cybersecurity training. *International Journal of Designs for Learning, 17*(1), 28–39. https://doi.org/10.14434/ijdl.v17i1.40912
