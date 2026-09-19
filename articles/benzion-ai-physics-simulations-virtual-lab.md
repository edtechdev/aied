---
title: "Leveraging AI for Rapid Generation of Physics Simulations in Education: Building Your Own Virtual Lab"
created: "2026-08-15T16:09:27-04:00"
updated: "2026-09-19T10:03:37-04:00"
type: article
technology: [generative-ai, llm, prompt-engineering, simulation]
research_method: [design and evaluation study]
sources: ['raw/papers/benzion-ai-physics-simulations-virtual-lab.md']
confidence: high
discipline: [physics education, stem education]
audience: [instructors, teachers]
level: [higher ed]
---

> **Synthesis:** Ben-Zion, Einhorn Zarzecki, Glazer, and Finkelstein (2025) present a practical approach to using [[llm|large language models]] (LLMs) to rapidly generate interactive [[physics-education|physics]] [[simulation|simulations]] for education — effectively "building your own virtual lab." The paper argues that while existing simulation platforms such as PhET are valuable and widely used, they do not cover all teaching needs, and modifying or developing simulations has traditionally required programming expertise and significant time. Using [[llm|LLMs]] such as ChatGPT (OpenAI) and Claude (Anthropic), the authors show that educators and students can generate and iteratively refine HTML/JavaScript physics simulations through structured textual [[prompt-engineering|prompts]], with no programming background required. The paper provides a reusable prompt template, a worked example (a simple pendulum), a two-part validation strategy, and preliminary evidence from a pilot course. The authors position AI-generated simulations as complementary to, not replacements for, established educational resources. **Not [[open-source|open access]]** (AIP journal article in *The Physics Teacher*).

## Key Findings

- **AI can rapidly generate [[simulation|physics simulations]] from prompts.** [[llm|LLMs]] such as ChatGPT and Claude produce interactive HTML/JavaScript simulations that run in any modern web browser, removing programming-expertise barriers for creating custom physics models.
- **A reusable prompt template** asks the model to act as a web developer, generating real-time animation, parameter sliders (mass, length, initial conditions), start/stop/reset controls, and time-dependent graphs. It is customizable across topics from basic mechanics and electricity/magnetism to advanced dynamics.
- **Worked example: simple pendulum.** Generated with OpenAI's o1 or Claude 3.5 Sonnet, the simulation overlays the analytical small-angle solution on the numerical solution (Runge-Kutta), with adjustable mass, length, angle, and angular velocity. An enhanced version added friction/damping, pendulum tension, and energy-distribution visualizations.
- **Two-part validation.** Technical validation checks behavior under parameter changes; physical validation compares results to known analytical solutions and physical laws. Bugs are fixed iteratively through targeted re-prompting.
- **Positive preliminary pilot.** In an algebra-based mechanics course at Bar-Ilan University, 53 students in 26 pairs created and refined free-fall simulations, rating enjoyment 4.1/5 and contribution to physics understanding 3.9/5.
- **Documented limitations.** [[hallucination-risk|Hallucinations]], a lack of productive constraints, and no embedded [[pedagogy|pedagogical]] content knowledge mean AI-generated simulations should complement — not replace — established resources.

## What this means for practice

- **Instructors.** Generate a simulation of the topic your course actually needs instead of settling for the closest published one: the paper's reusable prompt template (web-developer role, real-time animation, sliders for mass, length, and initial conditions, start/pause/reset controls, and time-dependent graphs) is customizable across mechanics, electricity and magnetism, and advanced dynamics.
- **Instructors.** Validate a generated simulation before class with both of the paper's tests: technical validation (do the sliders update the animation and reset the graphs in real time?) and physical validation (does the period match the analytical small-angle solution, and does the numerical solution diverge from it as the angle grows?).
- **Instructors.** Repair defects by re-prompting with a clear statement of the problem plus the specific correction you want — the paper's Claude 3.5 Sonnet debugging session fixed an analytical graph plotted at exactly half the correct period this way — so that nobody on the teaching team needs programming expertise.
- **Teachers.** Assign students to build and refine a simulation themselves: in the pilot, 26 pairs added an adjustable initial-velocity slider and a position-marker tracking system to a free-fall model, and identifying and correcting the technical and physical inconsistencies is where the [[active-learning]] value sits.
- **Instructors.** Add what the generated models lack before students meet them — productive constraints, embedded pedagogical content knowledge, and protection against physically inaccurate output — and present them as complements to vetted resources such as PhET rather than replacements.

## Limitations

- The pilot evidence comes from 53 students working in 26 pairs in one algebra-based mechanics course (Department of Medical Imaging, Bar-Ilan University), a single course at a single institution.
- The measures are self-reported enjoyment and perceived understanding (4.1/5 enjoyed the activity, 4/5 would repeat it, 3.9/5 for contribution to understanding physics); there is no control group and no measured learning outcome.
- The authors present the results as preliminary, and their own limitations section lists failure modes they could not remove: [[hallucination-risk|hallucinations]] and computational inconsistencies, no productive constraints, and variability such that identical prompts produce different outputs.
- The validation method is demonstrated on a single simple pendulum, and the paper states that more research is needed on optimal integration strategies and on long-term educational impact.

## Connected Concepts

- [[physics-education]]
- [[generative-ai]]
- [[llm]]
- [[simulation]]
- [[stem-education]]
- [[learning-design]]
- [[teacher-ai-competency]]
- [[prompt-engineering]]
- [[hallucination-risk]]
- [[active-learning]]

## Connected Articles

- [[genai-ar-physics-simulation-prompt-2026]]
- [[probing-ai-generated-physics-solutions-2026]]
- [[ai-generated-smartphone-circular-motion-lab-2026]]
- [[physics-chatbot-epistemological-beliefs-2026]]
- [[finkelstein-principled-ai-education-2025]]

## Citation

Ben-Zion, Y., Einhorn Zarzecki, R., Glazer, J., & Finkelstein, N. D. (2025). [*Leveraging AI for Rapid Generation of Physics Simulations in Education: Building Your Own Virtual Lab*](https://doi.org/10.1119/5.0252343). *The Physics Teacher*, 63, 424–427.
