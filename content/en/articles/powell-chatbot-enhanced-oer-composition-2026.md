---
title: "The text talks back: Chatbot-enhanced OER in asynchronous Composition II"
published: "2026"
created: "2026-11-17T18:30:00-05:00"
updated: "2026-11-17T18:30:00-05:00"
type: article
foundations: [ai-literacy]
research_method: [survey, thematic analysis]
level: [higher ed]
audience: [instructors, curriculum designers]
page_kind: [implementation]
sources: ['raw/papers/powell-chatbot-enhanced-oer-composition-2026.md']
source_url: "https://doi.org/10.31274/joerhe.25458"
confidence: medium
evidence_context: educational
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-17"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Powell et al. (2026) ask what happens when an open textbook comes with a chatbot trained only on that course's own materials, deployed across 22 asynchronous Composition II sections with 535 students and 13 instructors in fall 2025. The answers are a design lesson rather than an effect size. Use was episodic, peaking at 84.44% in Week 3 when students were writing research proposals, and falling by the end of the course, which the authors read as just-in-time support rather than a persistent workflow. Students who used it rated it near the top of the scale for [[writing-education|writing]] tasks and course navigation, and reports of "incorrect" answers mostly reflected rhetorical fit rather than factual error, which the authors treat as evidence that students were evaluating output. At course level, DFWI fell from 29% in comparable online sections to 23% in the pilot — a descriptive comparison the authors explicitly refuse to call causal, since they lack the denominators and section-level covariates for inferential testing. The study's real contribution is the ecosystem claim: a bounded assistant, an open textbook, and explicit [[ai-literacy|AI literacy]] instruction work as one intervention, and the videos that explained acceptable use were the element both students and instructors named as reducing intimidation.

## Key Findings

1. The intervention was three parts, not one: an [[open-education|OER]] textbook, a bounded writing assistant trained on course materials rather than on the open web, and AI literacy videos introduced between Weeks 1 and 4. Instructors described the whole thing as an ecosystem rather than a tool deployment.
2. Adoption was episodic and aligned with writing pressure points. The highest week was Week 3 at 84.44%, when the assignment was a research proposal; students described using the assistant for topic narrowing, drafting, source-finding and citations.
3. End-of-course "use in this course" responses were lower than the weekly peaks, which the authors interpret as strategic rather than habitual use. Their framing is that episodic use can still be instructionally meaningful in an asynchronous course.
4. Usefulness clustered near the top of the scale among students who used the AI-infused textbook, with the strongest ratings for understanding and applying the textbook and for answering quick questions. Students named concrete uses: finding the relevant chapter, extracting key points, building ideas.
5. Reports that the assistant was "incorrect" often reflected rhetorical standards rather than factual failure. Week 10 gave the clearest case, and the authors read the pattern as students actively evaluating output rather than passively accepting it.
6. Instructors corroborated the design: 10 of 13 responded to the surveys, 80% reported that students had access to the assistant, and 80% reported encouraging its use. They valued it most for interpreting assignment guidelines on complex writing tasks.
7. Course-level DFWI fell from 29% in comparable online sections to 23% in the pilot, against a local baseline of 27–30% for online Composition II. The authors call this a persistence signal and treat it as descriptive only.

## Why a bounded assistant is a different object

The assistant is trained on the course's own materials, so its failure mode differs from a general chatbot's. A general model asked about a research proposal can invent sources, formats and expectations, and the student has no way to tell which parts came from the course. A bounded assistant that retrieves from the textbook and course documents can still be unhelpful, but it is anchored to the assignment the instructor actually set.

That anchoring explains the "incorrect" pattern. When students called an answer wrong, they were often judging fit — the suggestion was generically true about writing but wrong for this genre, this rubric or this assignment. The authors' reading is that such judgments are the literacy the course is trying to teach. A student who says "that is not what my instructor wants here" is doing exactly the evaluation that [[student-ai-interaction|student AI interaction]] research says is rare.

It also sets the limit. A bounded assistant cannot answer questions the course materials do not cover, so the design shifts the burden onto the materials: if the textbook does not state the citation convention or the proposal structure, the assistant will not invent a reliable one.

## The AI literacy videos are the intervention's hinge

Both data sources converge on the same element. Students described the videos as reducing intimidation and clarifying what was allowed; instructors named them as the mechanism that made adoption feasible, in one case saying directly that the videos helped students understand what they could and could not do with the assistant.

That is a modest claim with a large implication for sequencing. In this design, permission came before capability. Students met the rules and the limits in Weeks 1 to 4, before the Week 3 proposal crunch where use peaked, and module 1 carried an introduction to ethical use alongside the textbook overview. Compare that with the more common pattern where a tool arrives first and policy arrives after the first integrity case.

Instructor confidence was uneven at the start — the paper notes uneven faculty experience with online instruction as one of the problems the project addressed — and the shared template plus the videos appear to have done the levelling work that individual instructor preparation usually has to do.

## What the survey numbers can and cannot carry

The study's quantitative base is thin in a specific, honest way. The four pulse surveys drew 29, 45, 10 and 58 respondents, and the end-of-course survey drew 52, out of 535 enrolled students. These are cross-sectional snapshots rather than a tracked panel, so the authors cannot follow an individual student's use across the term, and differences in respondent counts mostly reflect who happened to be available in an asynchronous course.

The 84.44% adoption figure therefore describes the respondents of one week, not the cohort. The instructor data is stronger relatively — 10 of 13 responded to both surveys — and the DFWI comparison is the most consequential number in the paper, which is why the authors' refusal to call it causal matters. Without denominators and section-level covariates, a 6-point drop could reflect the assistant, the OER textbook, the template, the instructors who volunteered, or the students who enrolled.

## What this means for practice

- **Design for the crunch, not the semester.** The adoption curve says students reach for help when a genre is unfamiliar. A course that puts support in place for the proposal, the annotated bibliography and the revision week will see more use than one that advertises a constant assistant.
- **Bound the retrieval, then audit the materials.** Training on course documents only is what makes the answers checkable. It also means every gap in the textbook becomes a gap in the assistant, so the materials audit is part of the deployment.
- **Teach permission before capability.** The videos did work that no amount of tool polish replaced: they told students what was allowed, in the same weeks the assignments got hard.
- **Read "it was wrong" as data.** When students report incorrect answers, ask whether the error was factual or rhetorical. The second kind is a literacy signal and a rubric problem, not a model problem.
- **Do not report a pass-rate change as an effect.** The paper's own handling is the model: report the drop, name the baseline, state what would be needed to attribute it.

## Limitations

- Survey respondents were a small and self-selected fraction of 535 students, and the pulse surveys were cross-sectional, so no individual-level change can be traced.
- The DFWI comparison uses comparable sections rather than random assignment, with no denominators or covariates, and the authors present it as descriptive.
- The study is one institution, one course, one term and one vendor arrangement, which limits portability to other institutions' template and governance structures.
- No measure of writing quality or learning gain is reported; the outcomes are adoption, perceived usefulness, instructor perception and course pass rates.
- The assistant's bounded design means findings may not transfer to courses using general-purpose chatbots, where failure modes and student trust behave differently.

## Citation

Powell, T., Law, J., Gravitt, B., McIntyre, R., & Shoemake, A. (2026). [*The text talks back: Chatbot-enhanced OER in asynchronous Composition II*](https://doi.org/10.31274/joerhe.25458). *Journal of Open Educational Resources in Higher Education, 4*(3).
