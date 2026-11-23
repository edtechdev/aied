---
title: "When GenAI helps and when it hurts: testing expertise reversal within a cognitive load framework across different guidance, task complexity, and GenAI access conditions"
created: "2026-11-23T11:30:00-05:00"
updated: "2026-11-23T11:30:00-05:00"
type: article
authors: ["Abdullahi Yusuf", "Mohammad Hamad Al-Khresheh", "Marcos Román-González", "Mayez Almayez", "Suheyla Demirkol Orak", "Hamida Riahi"]
venue: "Smart Learning Environments"
evidence_context: educational
foundations: [ai-education]
pedagogy: [cognitive-psychology, scaffolding, prior-knowledge]
technology: [generative-ai, llm, conversational-ai]
assessment: [educational-measurement, self-report-measures]
methods: [quantitative-research, longitudinal-research]
ethics: []
discipline: [cs education]
level: [higher ed, undergraduate]
audience: [instructors, researchers, faculty developers]
page_kind: [evaluation]
research_method: [experiment]
sources: ["raw/papers/yusuf-genai-expertise-reversal-cognitive-load-2026.md"]
confidence: high
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-23"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, quotes, links]
---

> **Synthesis:** Yusuf and colleagues ask when [[generative-ai|generative AI]] supports learning and when it merely makes tasks easier. Across four eight-week experiments with Year 3 computer science students in Saudi Arabia, they separate performance achieved with AI support from unsupported performance measured after that support is withdrawn, and they test whether the benefit of support depends on learner expertise, guidance level, task complexity, and how learners access the tool. The pattern is asymmetric: lower-expertise learners gained far more from support than higher-expertise learners, but only detailed guidance produced a genuine crossover, in which the help that benefited novices increased extraneous load and hurt performance among more knowledgeable learners. Harder tasks raised demands for everyone, especially novices, without reversing support itself, and personalized account access helped weaker learners more without harming stronger ones. The authors conclude that GenAI support needs to be calibrated to existing knowledge rather than applied uniformly.

*Four between-subjects experiments in university Python programming courses: 88 students in Experiment 1, 158 in Experiment 2, 172 in Experiment 3, and 165 in Experiment 4. Cognitive load and unsupported performance were measured weekly over eight weeks, and unsupported tasks were scored out of 20 marks.*

## Key Findings

- **Support favored weaker learners.** In Experiment 1, GenAI support produced a larger reduction in extraneous load and a larger gain in unsupported performance among lower-expertise learners, while higher-expertise learners still improved, just less.
- **Detailed guidance reversed.** In Experiment 2, high guidance cut extraneous load and raised scores for lower-expertise learners, but raised extraneous load and lowered scores for higher-expertise learners — the clearest crossover the study found.
- **Complexity taxed novices most.** In Experiment 3, harder tasks raised intrinsic load and reduced unsupported performance in both groups, roughly twice as much for lower-expertise learners, yet did not by itself reverse GenAI support.
- **Personalized access helped novices only.** In Experiment 4, students using their own accounts saw lower extraneous load and stronger performance gains than those on controlled institutional access, with no matching benefit or cost for higher-expertise learners.
- **The two loads behaved differently.** Extraneous load tracked whether support became redundant, while intrinsic load responded mainly to task demands — a result the authors use to argue for measuring the dimensions separately.
- **Not every gap is a reversal.** The authors distinguish diminishing benefits as expertise grows from a true reversal, where previously helpful guidance becomes harmful; only the guidance experiment reached the second case.

## Four experiments, one design logic

All four experiments ran the same eight-week Python module, organized around code construction, error debugging, and algorithm development, in computer laboratories at four Saudi [[higher-ed|universities]]. Each experiment recruited a separate sample of Year 3 [[cs-education|computer science]] students — 88, 158, 172, and 165 — so that findings could be tested in different institutional contexts without carry-over. Year of study was deliberately not treated as expertise. Instead, the authors combined Year 1 and Year 2 programming examination scores with a current 30-item programming-knowledge test (internal consistency reported as KR-20 = 0.86), standardized the three scores, averaged them into a composite, and split participants at the median within each cohort. That produced relative lower- and higher-expertise groups rather than absolute novices and experts.

Participants were then randomized within expertise groups to the experimental conditions. Each weekly session paired a two-hour guided task with a one-hour unsupported task completed without ChatGPT, online search, peer discussion, or teacher assistance; the unsupported task was the primary measure of independent performance and was scored out of 20 marks by two independent raters. [[cognitive-psychology|Cognitive load]] was measured with an adapted version of Leppink et al.'s multidimensional scale, separating intrinsic load (the interacting elements of the task) from extraneous load (effort generated by how support was presented); germane load was excluded because productive effort is hard to distinguish from processing caused by redundant support. The authors analyzed weekly outcomes with linear mixed-effects models, treating week as categorical, and probed significant interactions with estimated marginal means and multiplicity-adjusted contrasts.

## Where support paid off, and where it backfired

Experiment 1 compared GenAI-supported and unsupported conditions. Support clearly helped the weaker group: the estimated mean extraneous load fell from 5.88 to 4.68, and unsupported performance rose from 60.51 to 70.72. The stronger group also improved, but by less — extraneous load moved from 3.93 to 3.54 and performance from 76.75 to 81.92. Because the condition never harmed the higher-expertise learners, the authors read this as an attenuation of advantage, not a classical crossover, and they show the gap widening across the eight weeks for the lower-expertise group.

Experiment 2 manipulated the amount of guidance and produced the sharpest reversal. High guidance requested detailed explanations, comparable examples, and step-by-step reasoning while prohibiting direct solutions; low guidance was limited to brief hints and guiding questions. Among lower-expertise learners, high guidance reduced extraneous load from 5.63 to 4.58 and raised unsupported performance from 63.54 to 70.13. Among higher-expertise learners the direction flipped: extraneous load rose from 3.53 to 4.03 and performance fell from 82.70 to 79.12. The weekly trajectories show the pattern was not an early-semester artifact — the load difference was sustained from Week 1 for novices and from Week 2 for experienced learners, and the performance differences were sustained from Weeks 2 and 4 respectively.

## Complexity and access as boundary conditions

Experiment 3 held GenAI support constant and varied task complexity. High-complexity tasks demanded simultaneous coordination of variables, conditions, steps, or constraints. Intrinsic load rose from 5.40 to 7.59 for lower-expertise learners, compared with 3.99 to 5.37 for higher-expertise learners, and unsupported performance fell by 9.81 points for the weaker group against 5.25 points for the stronger one. The authors are careful about what this does not show: because complexity was never crossed with supported versus unsupported learning, the experiment establishes expertise-dependent responses to task demand, not whether greater complexity restores the usefulness of support for knowledgeable learners.

Experiment 4 compared controlled institutional access (laboratory computers, new chat each week, cleared memory) with personalized account access (students' own laptops and accounts, retained history and settings). Personalized access reduced extraneous load for lower-expertise learners from 5.23 to 4.77 and improved their unsupported performance by 3.97 points, against 1.64 points for higher-expertise learners. The authors caution that the condition bundles device familiarity, accumulated account history, and interaction continuity together, so these are effects of the overall access arrangement rather than evidence of a distinct personalization effect.

## What this means for practice

- **Instructors.** Give lower-expertise students explicit explanations, worked examples, and step-by-step support, and shift toward brief diagnostic hints or reflective questions for students who already hold the relevant schemas; reduce guidance progressively as competence develops.
- **Faculty developers.** Treat guidance dosage as a variable to calibrate rather than a fixed feature of the tool — use a short diagnostic assessment before assigning AI-supported tasks, and state the intended support level (hints versus full explanations) in the task brief.
- **Instructional designers.** Separate tasks that build schemas from tasks that stretch them, and pair every supported session with an unsupported check so assisted performance is never mistaken for learning.
- **Researchers.** Cross task complexity with supported and unsupported conditions, isolate the components of personalized access (interaction history, memory, device familiarity), and add delayed retention and transfer measures alongside immediate performance.

## Limitations

- Expertise was a relative classification within each cohort, produced by a median split, so the findings do not locate where support begins to lose value along the full continuum of domain knowledge.
- Independent performance was measured immediately after each supported session; the study reports no delayed retention or [[transfer-of-learning|transfer]].
- Experiment 3 varied task complexity but not GenAI support, so it cannot show whether increasing complexity restores the usefulness of support for more knowledgeable learners.
- Experiment 4 bundles personalization with device use, account history, and interaction continuity; the contribution of each component was not isolated.
- All four experiments used ChatGPT in university programming courses in Saudi Arabia, so generalization beyond that tool and context is untested.

## Citation

Yusuf, A., Al-Khresheh, M. H., Román-González, M., Almayez, M., Demirkol Orak, S., & Riahi, H. (2026). [When GenAI helps and when it hurts: testing expertise reversal within a cognitive load framework across different guidance, task complexity, and GenAI access conditions](https://doi.org/10.1186/s40561-026-00478-6). *Smart Learning Environments.*
