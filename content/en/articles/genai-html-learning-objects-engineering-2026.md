---
title: "Integrating Slides, Mathematics, and Simulation in One Page: GenAI-Assisted HTML Learning Objects for Engineering Courses"
created: "2026-11-13T09:12:00-05:00"
updated: "2026-11-13T09:12:00-05:00"
type: article
page_kind: [evaluation]
research_method: [system development, survey]
evidence_context: educational
discipline: [engineering education]
level: [higher ed]
audience: [instructors, software developers, instructional designers]
sources: ['raw/papers/genai-html-learning-objects-engineering-2026.md']
source_url: "https://arxiv.org/abs/2611.15686"
source_depth: full text
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-13"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [learning-design, cognitive-offloading]
pedagogy: [scaffolding, cognitive-psychology]
technology: [generative-ai, multimodal, visualization, simulation]
assessment: [formative-assessment]
---

> **Synthesis:** Dao, Le, Phan and Nguyen (2026) describe an instructor-in-the-loop workflow in which [[generative-ai|generative AI]] turns the three artifacts an [[engineering-education|engineering course]] already has — slides, LaTeX notes and MATLAB models — into a single-file HTML page that carries the narrative, the typeset mathematics, an interactive [[visualization|visualization]], a browser [[simulation|simulation]] and an assessment item. Six open demonstrators cover 18 tasks from six courses. The part worth reading is the release gate: a page ships only after its simulation reproduces the reference solution numerically, and the authors cross-checked with an independent Python recomputation and a value-blinded MATLAB recomputation. All eight tasks with quantitative checks passed at 1% tolerance, and the stress test produced failures only where a run was under-resolved. Students in a screened sample of 19 reported that equations sat beside the simulation they governed and 74% preferred the integrated page, but [[usability-research|usability]] was marginal (System Usability Scale 56.8) and the study measured no learning.

## Key Findings

1. **GenAI works as an integration layer, not a replacement.** Slides supply narrative and diagrams, LaTeX the mathematics, MATLAB the computational model; generative AI converts each into HTML components that sit on one page in a fixed order.
2. **The workflow has five named stages.** Content transformation, mathematical conversion to MathJax, visualization coding, simulation translation into JavaScript, and assessment authoring — with a failed verification returning the page to the relevant stage.
3. **Verified simulations were numerically exact at the stated tolerance.** All eight cross-checked tasks passed at 1% (2% for the FDTD case), and 31 quantities in the blind MATLAB comparison agreed, with a largest relative difference of 0.22%.
4. **The checks distinguish wrong code from coarse settings.** The stress test produced no runtime errors and flagged only under-resolved runs, such as a step of 0.6 s producing 1.12% error.
5. **Students saw the link between equation and simulation.** 89% agreed they could see how the equations related to the simulation, and 74% preferred the page to separate files.
6. **Usability did not match the enthusiasm.** The System Usability Scale mean was 56.8, with 13 of 19 scores in the marginal band and internal consistency of 0.57 on that instrument.
7. **Lecturers found it useful but were reluctant to adopt.** Twelve lecturers rated usefulness 4.44 and intention to use 3.67 on a 5-point scale, and their rubric ratings agreed only moderately with the first author's (weighted κ = 0.60).

## Why one page, and what it takes to ship it

The problem is a coordination cost that students pay silently. A concept arrives on a slide, its derivation in a PDF, its behavior in a MATLAB script, and nothing in the material maps one to the other. Assembling the page is therefore not a presentation exercise but an ordering discipline: objectives, theory, mathematics, visualization, simulation, application, assessment, with every equation placed beside the visualization it governs and every read-out computed from a displayed equation. GenAI does the transcription work across those stages — the ODE integrators, FFTs and finite-difference time-domain updates are translated from MATLAB into JavaScript — and the instructor retains the judgment about what the page should assert. The authors are explicit that browser simulation does not replace MATLAB or Python for heavy computation: the page is where a student builds intuition, not where a large run happens. This is a [[learning-design|learning design]] argument as much as a tooling one, and it depends on the instructor already having well-separated, well-specified assets to convert.

## Verification is the contribution

Most generative-AI courseware papers report perceptions. This one reports a release condition, which is why its technical claims are the strongest part. For each cross-checked task, the in-page JavaScript was compared against an analytical or reference solution, then against a separate Python recomputation and a MATLAB recomputation performed by a colleague from a value-blinded package. In the resonance case, halving the integration step divided the RK4 error by 16.3 and then 16.2 against a theoretical order of four — evidence that the translated solver behaves like the solver it replaced, not merely that it produces plausible numbers. The stress test matters as much: by pushing parameters past resolution limits and getting failures rather than crashes, the protocol shows students where a model stops being trustworthy. That is [[scaffolding|scaffolding]] for numerical judgment, and it is the part of the workflow most likely to transfer to other courses.

## What the surveys say, and what they cannot say

Student perception was measured on 19 responses that survived post-hoc screening from 28, and every construct mean landed between 3.95 and 4.04 with 72-77% agreement. The weakest item was orientation — only 47% agreed they rarely lost track of where they were in a topic — which is worth noting for anyone assuming a single page is automatically easier to navigate. Lecturers were more reserved on adoption than on usefulness: ease of adoption 3.73, maintainability 3.25, intention to use 3.67, with four of six lecturer scales below the 0.70 reliability threshold. The authors' own verdict is the right one to carry away: technical feasibility and perception are demonstrated, while improved learning, reduced [[cognitive-offloading|cognitive load]], shorter development time and maintainability are not.

## What this means for practice

- **Instructors.** Adopt the release gate before the page: pick the quantities a student can check, compute them outside the page, and refuse to publish a simulation that misses its tolerance.
- **Developers.** Keep the format register open — MathJax for mathematics, plain JavaScript for the solver, SVG or Canvas for the visualization — so a non-specialist colleague can re-verify a page without reading a framework.
- **Instructional designers.** Budget for the five conversion stages and for maintenance, because the lecturers in this study rated maintainability lowest and the authors agree that pages age with browsers and libraries.
- **Department leads.** Treat perception gains as a precondition for adoption, not as evidence of learning, and plan an evaluation with a comparison condition before scaling the approach.

## Limitations

- No controlled experiment and no pre- or post-tests, so [[learning-gains|learning gains]] remain unmeasured across all six courses.
- Survey samples were 19 students and 12 lecturers at one institution, self-selected, with lecturers drawn from the authors' colleagues and the largest student group taught by the first author.
- Only eight of the 18 tasks were quantitatively cross-checked, at default settings, and the MATLAB check was run by one colleague on one release.
- The GenAI model, configuration and session logs were not recorded, so no generation error and its correction can be inspected.
- The usability instrument behaved inconsistently (α = 0.57) and was administered in translation, which limits how far the 56.8 score can be read.
- All six courses rest on well-defined analytical models; laboratory-intensive or data-driven courses would need the workflow and its verification adapted and evaluated separately.

## Citation

Dao, X.-Q., Le, N.-B., Phan, X.-D., & Nguyen, L.-M. (2026). [*Integrating Slides, Mathematics, and Simulation in One Page: GenAI-Assisted HTML Learning Objects for Engineering Courses*](https://arxiv.org/abs/2611.15686). arXiv:2611.15686.
