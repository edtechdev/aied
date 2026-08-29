---
title: "From Prompt to Embodied Simulation: Using Generative AI to Create AR Physics Learning Tools"
created: "2026-08-13T09:28:20-04:00"
updated: "2026-08-24T04:50:05-04:00"
type: article
tags: [physics-education, generative-ai, simulation, stem-education, prompt-engineering]
research_method: [system development, case study]
discipline: [physics education, stem education]
sources: ['raw/papers/2607.24709.md']
confidence: high
---

> **Synthesis:** Levy, Glazer, Finkelstein & Ben-Zion (2026) show how a structured natural-language prompt can generate a browser-based, hand-controlled **augmented-reality (AR) physics simulation** — spread your thumb and index finger and a virtual lamp changes color — and describe its use in an introductory physics class. Computer [[simulation|simulations]] have a long record of supporting physics learning by making abstract concepts interactive, and [[generative-ai|generative AI]] now lowers the barrier to creating customized, embodied, interactive simulations. Grounded in research on [[embodied-learning|embodied cognition]], the paper demonstrates a reusable four-element prompt structure that lets teachers and students with no coding background build working AR tools through [[prompt-engineering|iterative refinement in natural language]], connecting to [[physics-education]], [[simulation]], and [[stem-education]].

## Key Findings

1. A structured natural-language prompt can generate a browser-based, hand-controlled AR physics simulation that runs as a single HTML file with no installation and no hardware beyond a camera.
2. The prompt has four fixed elements — tools, display, hand controls, and optimization — that generalize across many physics phenomena while the physics changes between simulations.
3. A short iterative run–observe–correct loop resolves the AR-specific edge cases (hand tracking, mirror alignment, jitter) that only appear with a real hand in front of a real camera.
4. In a pilot with 29 introductory radiation-physics students, the pinch-and-spread gesture helped all 29 "feel" what wavelength is (mean 4.52); amplitude feeling scored highest (4.59), and 86% reported feeling more engaged and focused.
5. The evidence is preliminary — a small, single-class, perception-only sample with no comparison group — but the reduced technical barriers invite controlled follow-up studies of embodiment.

## Lowering the Barrier to Embodied Simulation

Computer [[simulation|simulations]] have a long and well-documented record of supporting [[physics-education|physics learning]], making abstract physical concepts interactive and inviting students to play with parameters and explore them. Historically, however, building such tools demanded specialized programming skills. Recent advances in [[generative-ai|generative AI]] are changing *who* gets to build them: using a reusable prompt structure, a teacher or a student with no coding background can ask a large language model to generate a working browser-based simulation and then refine it in [[prompt-engineering|plain natural language]].

Those earlier prompt-generated simulations share a common interface: the learner sits in front of a screen and changes parameters by dragging sliders or inputting values. A slider is powerful and familiar, but it is an abstraction — a labeled bar one reads and adjusts. Research in the [[learning-theories|learning sciences]] shows that in some cases there is an advantage to learning through sensorimotor experience: students who physically experience a phenomenon can learn it better than students who only watch. [[embodied-learning|Embodied cognition and learning]] have a rich history across educational environments. Gesture plays a central role in human communication and reasoning. If amplitude and wavelength are represented spatially in a wave diagram, then perhaps the most natural control for them is not a slider but the hand itself moving in space.

## The Wave-and-Lamp Simulation

Building on earlier prompt-generated browser simulations, the authors extend the approach to embodied, camera-based interaction. The new principle is simple: a live camera sees the learner's hands, and the captured gestures control the parameters of the problem. This brings challenges that slider simulations do not have — recognizing the gesture reliably, keeping the motion stable, aligning the drawing with the mirrored video, and behaving sensibly when the hand is lost. Until recently, building such a simulation (combining hand tracking, real-time graphics, and a physical model) demanded a rare combination of skills; today it can often be produced in a common LLM tool, putting embodied AR within reach of many teachers and students.

The demonstration pairs a sine wave and a virtual lamp, drawn over a live view of the user's environment, both controlled by the same hand motion. The gesture is familiar from touchscreens: the pinch-and-spread motion of thumb and index finger. Here, though, the pinch does not zoom a picture but tunes a physical quantity: opening the fingers vertically raises the amplitude and strengthens the lamp's glow, while opening them horizontally lengthens the wavelength and shifts the color toward the red end of the visible spectrum. The wave is the mathematical representation and the lamp the everyday visual interpretation — two separate objects obeying the same two parameters. The mapping is qualitative and meant for [[pedagogy|teaching]], not a quantitative model of an electromagnetic field.

## The Four-Element Prompt

Each simulation runs as a single HTML file in an ordinary browser, with no installation and no special hardware beyond a camera. Two core components are used: MediaPipe Hands, a ready-made library that detects finger joints in the camera image in real time, and a transparent drawing layer above the video on which the physics is drawn (with Three.js for three-dimensional rendering). The prompt has **four fixed elements**, only their content changing from one simulation to the next:

- **The tools** — which libraries are used and how the camera is shown.
- **Display** — which objects are drawn over the camera image and what each represents.
- **Hand controls** — which finger motion controls which quantity, and what the simulation ignores.
- **Optimization** — requirements that prevent jumps and jitter.

The authors start with Gemini, choosing the latest Pro model and switching to Canvas mode so the code is written and run immediately in the same window. The prompt is pasted one paragraph per element, and the built-in preview lets the result be seen without leaving the conversation. In tools such as ChatGPT and Claude, where the preview may lack camera access, they add an opening instruction to write the code as one complete runnable HTML file in a code block, save it, and open it in the browser — where the browser then requests camera access on first run.

## Iteration and Validation

A first prompt is almost never perfect, and in AR simulations this is especially visible: they are sensitive to edge cases that appear only when a real hand moves in front of a real camera. The iterative [[prompt-engineering|prompt-and-refinement]] loop is short: run, notice what behaves incorrectly, describe the problem in plain language, and send a correction prompt. Two of the prompt's sentences were born exactly this way — the rule measuring the gap relative to the size of the hand was added after values drifted with hand distance, and the phase-continuity requirement after the wave shook on every wavelength change. Both fixes were a single sentence.

The result is checked on three levels: a *technical* check (tracking finds the hand in ordinary classroom lighting, the drawing moves in the same on-screen direction as the hand, and motion is smooth); a *physical* check (relations between quantities are correct — high frequency with short wavelength and violet color); and a *pedagogical* check (the gesture is natural and operating the interface does not compete with the physics for attention).

## Variations from the Same Structure

The same four elements produce very different simulations, and in all of them the physics appears in the learner's own environment. In one, the tip of the index finger becomes an electric charge and a three-dimensional grid of arrows shows its electric field filling the space around the student — Coulomb's law spread out inside the room itself, the field moving with the hand. In a second, each index finger is a charge (positive in one hand, negative in the other), and the arrows show the combined field: bringing the hands closer concentrates the field between them, and moving them apart stretches it across the environment. In a third, the right-hand rule for the magnetic force F = qv × B is drawn on the student's own hand, with three labeled arrows anchored to the fingers and rotating with it — notably rendered *without* mirroring, since a mirrored image would reverse handedness and invert the very rule being taught. The physics changes while the structure stays, offering a flexible starting point for [[teacher-role|teacher]] creativity and for guiding students to design simulations themselves.

## In the Classroom

The wave-and-lamp simulation was pilot-tested with 29 second-year medical-imaging majors in an introductory radiation physics course. Students received the initial prompt, generated the simulation, performed technical and physical validations, then explored it freely, ending with a 1–5 attitude survey (measuring perception and [[student-engagement|engagement]], not achievement) and three open questions. All 29 agreed that the pinch-and-spread motion helped them "feel" what wavelength is (mean 4.52), and the statement about feeling the amplitude received the highest mean of all (4.59). Controlling the wave in the air felt natural to 93%, and 86% reported feeling more engaged and focused than in regular learning; the lamp items linking color to mathematics (4.45) and glow to amplitude (4.48) also scored high.

Three themes recur in the open answers: *feeling the wave* ("it entered my mind through using my own body to understand it"), the *learning curve of hand tracking* (camera recognition takes a few tries, but one student noted this made the simulation "more of an experience"), and the *lasting trace* the experience leaves ("when I get to the exam, I will move my fingers in my head"). Some students needed help to understand the lamp's meaning, and a minority found the gesture unnatural. These results are encouraging but were obtained on a small sample without a comparison group.

## Implications

- **Lowering the production barrier for embodied tools.** The four-element prompt structure demonstrates that creating working, hand-controlled [[simulation|simulations]] no longer requires rare programming skills — [[generative-ai|generative AI]] can put embodied AR within reach of teachers and students, an accessibility gain for [[stem-education|STEM]] content creation.
- **A concrete case for [[embodied-learning|embodied cognition]] in practice.** The paper operationalizes sensorimotor learning research, with gesture controlling physical quantities directly rather than through an abstract slider, and offers a reusable template others can adopt and adapt.
- **Iterative refinement as [[scaffolding]].** The short run–observe–correct loop models how teachers can [[prompt-engineering|scaffold prompt development]] and validation as part of student activity, with learners generating, testing, and refining their own tools.
- **Cautious, preliminary evidence.** Strong positive engagement and reported "feeling" of concepts are based on a small, single-class, non-comparative sample measuring perceptions only — follow-up work needs controlled comparisons of the embodied interface against other tools, and of which topics benefit most.
- **Reduced technical barriers invite further research.** Because AR interfaces can now be produced locally and cheaply, the authors argue, questions about the contribution of embodiment to learning are now much easier to examine.

## Connected Concepts

- [[physics-education]]
- [[generative-ai]]
- [[simulation]]
- [[stem-education]]
- [[prompt-engineering]]
- [[personalized-learning]]
- [[scaffolding]]
- [[teacher-role]]
- [[multimodal]]

## Connected Articles

- [[ai-generated-smartphone-circular-motion-lab-2026]]
- [[fouad-bentley-trust-utility-gap-physics-2026]]
- [[becker-chatgpt-typology-physics-2026]]
- [[hashmi-socratic-physics-chatbot-2025]]
- [[agentschool-multi-agent-simulation-education-2026]]

## Citation

Levy, O., Glazer, J., Finkelstein, N. D., & Ben-Zion, Y. (2026). [*From prompt to embodied simulation: Using generative AI to create AR physics learning tools*](https://arxiv.org/abs/2607.24709).
