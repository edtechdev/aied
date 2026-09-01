---
title: "Leveraging AI for Rapid Generation of Physics Simulations in Education: Building Your Own Virtual Lab"
created: "2026-08-15T16:09:27-04:00"
updated: "2026-08-24T19:40:00-04:00"
type: article
tags: [generative-ai, llm, physics-education, simulation, stem-education, prompt-engineering]
research_method: [survey]
sources: ['raw/papers/benzion-ai-physics-simulations-virtual-lab.md']
confidence: high
---

## Summary

Ben-Zion, Einhorn Zarzecki, Glazer, and Finkelstein (2025) present a practical approach to using [[llm|large language models]] (LLMs) to rapidly generate interactive [[physics-education|physics]] [[simulation|simulations]] for education — effectively "building your own virtual lab." The paper argues that while existing simulation platforms such as PhET are valuable and widely used, they do not cover all teaching needs, and modifying or developing simulations has traditionally required programming expertise and significant time. Using [[llm|LLMs]] such as ChatGPT (OpenAI) and Claude (Anthropic), the authors show that educators and students can generate and iteratively refine HTML/JavaScript physics simulations through structured textual [[prompt-engineering|prompts]], with no programming background required. The paper provides a reusable prompt template, a worked example (a simple pendulum), a two-part validation strategy, and preliminary evidence from a pilot course. The authors position AI-generated simulations as complementary to, not replacements for, established educational resources. **Not [[open-source|open access]]** (AIP journal article in *The Physics Teacher*).

## Key Findings

- **AI can rapidly generate [[simulation|physics simulations]] from prompts.** [[llm|LLMs]] such as ChatGPT and Claude produce interactive HTML/JavaScript simulations that run in any modern web browser, removing programming-expertise barriers for creating custom physics models.
- **A reusable prompt template** asks the model to act as a web developer, generating real-time animation, parameter sliders (mass, length, initial conditions), start/stop/reset controls, and time-dependent graphs. It is customizable across topics from basic mechanics and electricity/magnetism to advanced dynamics.
- **Worked example: simple pendulum.** Generated with OpenAI's o1 or Claude 3.5 Sonnet, the simulation overlays the analytical small-angle solution on the numerical solution (Runge-Kutta), with adjustable mass, length, angle, and angular velocity. An enhanced version added friction/damping, pendulum tension, and energy-distribution visualizations.
- **Two-part validation.** Technical validation checks behavior under parameter changes; physical validation compares results to known analytical solutions and physical laws. Bugs are fixed iteratively through targeted re-prompting.
- **Positive preliminary pilot.** In an algebra-based mechanics course at Bar-Ilan University, 53 students in 26 pairs created and refined free-fall simulations, rating enjoyment 4.1/5 and contribution to physics understanding 3.9/5.
- **Documented limitations.** [[hallucination-risk|Hallucinations]], a lack of productive constraints, and no embedded [[pedagogy|pedagogical]] content knowledge mean AI-generated simulations should complement — not replace — established resources.

## Implications

- Lowers the barrier for teachers and students to build custom simulations tailored to specific learning goals, lecture emphasis, or course topics.
- Shifts the [[teacher-role|educator role]] toward pedagogical judgment (validating accuracy, adding constraints, aligning with [[research-methods-aied|research]]-based teaching) rather than programming.
- Introduces students to AI as a tool for scientific exploration, but requires oversight because AI output can be physically inaccurate.
- Supports [[active-learning|active]] and exploratory learning: students can create, refine, and test simulations, promoting [[critical-thinking|critical thinking]] and awareness of model limitations.
- The prompt-and-refine workflow has potential to generalize beyond physics to other scien

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
