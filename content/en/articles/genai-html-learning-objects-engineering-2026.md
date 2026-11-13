---
title: "Integrating Slides, Mathematics, and Simulation in One Page: GenAI-Assisted HTML Learning Objects for Engineering Courses"
created: "2026-11-13T09:12:00-05:00"
updated: "2026-11-13T10:45:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-13"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [learning-design, cognitive-offloading]
pedagogy: [scaffolding, cognitive-psychology]
technology: [generative-ai, multimodal, visualization, simulation]
assessment: [formative-assessment]
---

> **Synthesis:** Dao, Le, Phan and Nguyen (2026) describe an instructor-in-the-loop workflow in which [[generative-ai|generative AI]] turns a course's slides, LaTeX notes and MATLAB models into one single-file HTML page carrying narrative, typeset mathematics, an interactive [[visualization|visualization]], a browser [[simulation|simulation]] and an assessment item. The part worth borrowing is the release gate: a page ships only after its simulation reproduces a reference solution within tolerance. Students in a small screened sample saw the link between equation and simulation but rated [[usability-research|usability]] marginal; no learning was measured.

## Key Findings

1. **GenAI served as an integration layer, not a replacement.** Slides supplied narrative, LaTeX the mathematics and MATLAB the model; the page carried all three.
2. **The conversion follows a fixed sequence of stages.** A failed check returns the page to the stage that produced it.
3. **Every cross-checked simulation met its stated tolerance.** The in-page JavaScript agreed with analytical references and an independent recomputation, so the displayed values can be trusted at those settings.
4. **The stress test separated wrong code from coarse settings.** Pushing parameters past their limits produced visible failures rather than crashes.
5. **Students saw the link, but the page was hard to use.** Most preferred the integrated page to separate files, yet usability was marginal and lecturers were more convinced of usefulness than of adoption.

## Three existing assets become one ordered page

The problem is a coordination cost students pay silently: a concept arrives on a slide, its derivation in a PDF, its behavior in a MATLAB script, and nothing maps them. Each asset keeps its role: PPTX for narrative and diagrams, LaTeX for mathematics, MATLAB for the model and reference results, HTML as the delivery layer across six [[engineering-education|engineering courses]] and 18 tasks.

Generative AI handles the transcription: slides into structured sections, LaTeX into MathJax, visualization code, MATLAB models into JavaScript solvers, and assessment items. Every page follows one order — objectives, theory, mathematics, visualization, simulation, application, assessment — with each equation beside the visualization it governs.

The authors call this a [[learning-design|learning design]] argument, not a claim that HTML teaches better: browser simulation does not replace MATLAB for heavy computation, and the approach assumes well-separated, well-specified assets.

## The release gate is the transferable part

For each cross-checked task, the in-page JavaScript was compared against an analytical or reference solution, a separate Python recomputation, and a value-blinded MATLAB recomputation by a colleague. Eight of the 18 tasks carry that check; all passed at 1 percent tolerance, 2 percent for the finite-difference case, and all 31 quantities in the MATLAB comparison agreed, to within 0.22 percent.

Two results show the checks test behavior, not plausibility. In the resonance task, halving the step divided the RK4 error by 16.3 and then 16.2, near the theoretical order of four. In the stress test, nothing crashed and failures appeared only where a run was under-resolved: a 0.6 s step produced 1.12 percent error. That is [[scaffolding|scaffolding]] for numerical judgment: students can see where a model stops being trustworthy.

A PASS means the quantity met its criterion at the tested settings, not that the model is physically valid. The authors also corrected an error metric that divided by a reference peak near zero, which produced spurious failures.

## Students saw the link but found the page hard to navigate

Nineteen student responses survived post-hoc screening from 28; every construct mean landed between 3.95 and 4.04. The strongest agreement concerned integration: 89 percent could see how equations related to the simulation, 84 percent said one page saved file-switching, and 74 percent preferred it to separate files.

Usability told a different story. The System Usability Scale mean was 56.8 (confidence interval 52.5 to 61.1), with 13 of 19 scores in the marginal band, well below the usual average near 70. The instrument behaved inconsistently (α = 0.57), so the number is hard to read. The weakest item was orientation: only 47 percent agreed they rarely lost their place, which fits the authors' claim that split attention across files became navigation load inside one page.

Twelve lecturers rated usefulness at 4.44 and intention to use at 3.67 on a five-point scale, with maintainability lowest at 3.25; their rubric ratings agreed moderately with the first author's (weighted κ = 0.60). Half considered the tolerance appropriate, and five of twelve intended to try the approach.

## What this means for practice

- **Instructors:** Adopt the release gate before the page. Name the quantities a student can check, compute them outside the page, and refuse to publish a simulation that misses its tolerance; a plausible curve is not evidence that the solver is right.
- **Instructional designers:** Budget for conversion and maintenance, then add navigation the workflow does not produce — a formula index, anchors and a short guided activity per simulation, since orientation was the weakest item.
- **Developers:** Keep the format register open. MathJax for mathematics, plain JavaScript for the solver and SVG or Canvas for the visualization let a non-specialist colleague re-verify a page without learning a framework.
- **Department leads:** Treat positive perception as a precondition for adoption, not evidence of learning, and plan a comparison condition before scaling across a program.

## Limitations

- With no controlled experiment or pre- or post-test, [[learning-gains|learning gains]], reduced cognitive load, development time and maintainability all remain unmeasured.
- Both samples are small, self-selected and from one institution; the lecturers are colleagues of three authors, and the first author taught the largest group.
- Only eight of the 18 tasks were cross-checked, at default settings, by one colleague on one release, and the model and logs were not retained.
- The usability instrument behaved inconsistently and was administered in translation, and all six courses rest on analytical models, so laboratory or data-driven courses need separate evaluation.

## Citation

Dao, X.-Q., Le, N.-B., Phan, X.-D., & Nguyen, L.-M. (2026). [*Integrating Slides, Mathematics, and Simulation in One Page: GenAI-Assisted HTML Learning Objects for Engineering Courses*](https://arxiv.org/abs/2611.15686). arXiv:2611.15686.
