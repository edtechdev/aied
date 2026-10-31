---
title: "Different lenses on human-AI collaboration: towards a comprehensive view on hybrid intelligence in education"
created: "2026-10-31T10:45:00-04:00"
updated: "2026-10-31T10:45:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/horvers-hybrid-intelligence-automation-augmentation-2026.md']
confidence: high
page_kind: [framework]
research_method: [case study]
discipline: []
level: []
audience: [instructors, faculty developers, researchers, administrators, instructional designers]
foundations: [human-ai-collaboration, teacher-role]
technology: [generative-ai, adaptive-learning]
assessment: [automated-assessment]
methods: [qualitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-31"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** This [[human-ai-collaboration]] study argues that automation and augmentation are not separate strategies but co-occurrent processes, and uses the automation-augmentation paradox as a lens on four real-world educational AI use cases. Coding task-level changes as replacement, complementation, and transformation, it finds replacement confined to bounded analytical subtasks in the detect and diagnose stages, while augmentation emerges where teachers interpret, validate, and enact AI output. Transformation was most visible in planning and reflection, and in no case did AI take over pedagogical decision-making. The authors conclude that AI redistributes tasks and reshapes the conditions of [[teacher-role]] rather than displacing [[evaluative-judgment]].

## Key Findings

1. Automation and augmentation co-occurred in all four cases rather than operating as alternative strategies, with replacement confined to data processing, pattern recognition, and suggestion generation.
2. Partial replacement sat in the detect and diagnose stages of the detect-diagnose-act model; full replacement of pedagogical decision-making did not occur in any case.
3. Complementation appeared wherever teachers interpreted, validated, and contextualized AI output, adding knowledge about students, goals, and classroom context that the systems did not have.
4. Transformation appeared in three of the four cases and was most visible in planning and reflection rather than during lesson execution.
5. Teacher-facing tools balanced replacement and complementation and left final decisions with teachers, while the one student-facing tool transformed teacher tasks indirectly through new monitoring.
6. Educational level, intended user group, and technology readiness level changed how tasks were redistributed but not the underlying split between analytical processing and pedagogical action.

## Three lenses and one paradox

Three research traditions describe human-AI collaboration through different mechanisms. The economic lens works at the job level and predicts that autonomous systems will perform tasks independently and replace human labor, making replacement the dominant perspective. The human-centered design lens instead asks how AI can augment people, enhancing autonomy and the qualitative quality of performance rather than efficiency alone. The hybrid intelligence lens treats the socio-technical system as the unit of analysis and assumes that humans and AI together outperform either alone, because their distinct strengths reinforce each other. Each lens, the authors argue, still foregrounds one process as primary.

The alternative is the automation-augmentation paradox, which holds that the two are interdependent and tend to co-occur. Replacement by AI creates scope for augmentation, and augmentation in turn refines what can be automated, so task allocation is organized through both at once. At the task level this yields three changes: replacement, complementation, and transformation. Education is a domain of low automation and many bottleneck tasks, which is why the authors expect the paradox to look different there than in standardized organizations. They cite the OECD prediction that only 6% of teaching tasks will be replaced by AI, while 22% of teaching tasks consist of so-called bottleneck tasks, leaving 72% of teaching tasks expected to include collaboration between a teacher and AI.

## How the four cases were analyzed

The design is a multiple case study of four real-world use cases, selected from co-creation projects inside a national AI and education lab that runs both a co-creation program and a scientific research program; at the time of writing, 30 co-creation projects were developing educational AI tools for primary and secondary education. Three inclusion criteria maximized diversity: educational level, intended user group (teacher-facing, student-facing, or both), and stage of development, with cases admitted only once they reached the paper-based prototype stage. Case 1 (curriculum adaptivity) sits in primary education, cases 2 (open questions), 3 (generative AI) and 4 (self-regulated learning) in secondary education, at technology readiness levels 7, 6, 5, and 7 respectively.

A theoretically informed coding framework combined deductive categories with iterative refinement. Eight researchers drafted it, a focus group of secondary teachers from the self-regulated learning project tested it against real classroom practice, and the final version was settled by consensus. The unit of analysis was the interaction between one teacher and one AI tool in a specific context, described through six contextual factors, the detect-diagnose-act model of the AI's functioning, and the type of task change. Analysis followed [[qualitative-research]] conventions: within-case coding, then cross-case thematic comparison in which themes were developed deductively from the predefined dimensions rather than emerging inductively.

## What the cases show by instructional phase

Across all four cases, partial replacement was limited to analytical subtasks in the detect and diagnose stages: data processing, pattern recognition, and suggestion generation. The AI clustered open-question answers and proposed scores, aggregated performance data into a four-week curriculum overview, generated feedback suggestions for project work, and visualized self-regulated learning processes during writing. In every case the teacher reviewed, adjusted, or rejected the output. Full replacement of pedagogical decision-making did not occur once, and only case 2 involved full replacement of a single subtask, the manual detection of similar answers.

Complementation appeared where teachers interpreted, validated, and contextualized what the system produced. In [[adaptive-learning]] the teacher weighed recommendations against knowledge of individual students; in [[automated-assessment]] the teacher validated clusters and adjusted scores; in the generative AI case the teacher built feedback plans from the suggestions; in the writing case the teacher turned process data into targeted support.

Transformation was identified in three of the four cases and clustered in planning and reflection, where teachers had time to interpret output critically: iterative data-informed curriculum planning, systematized feedback planning, and the integration of self-regulated learning phases into writing instruction. The [[generative-ai]] case reversed the usual order, with complementation in planning and partial replacement during the lesson, a sequence the authors suggest could give teachers more control over how the AI functions in class.

## Why teacher judgment survives

The explanation the authors offer is structural. Analytical tasks are more easily formalized and therefore more amenable to automation, whereas pedagogical decision-making requires situated judgment that integrates knowledge of students, context, and instructional goals. That judgment is hard to decompose into pre-defined tasks, which is why [[human-in-the-loop-ai]] arrangements retained the final decision in every case. Augmentation therefore functioned as a cognitive extension of teacher judgment rather than a substitute for it, and transformation reflected a reconfiguration of instructional workflows rather than discrete task substitution.

The authors also name two tensions. Delegating tasks carries a deskilling risk: once AI evaluates student responses, the knowledge and skills needed to evaluate them may diminish, and when teacher expertise becomes the primary input shaping AI feedback, feedback knowledge and creativity may come under pressure. The second is uncritical reliance or blind trust, with evidence that teachers' evaluation of AI effectiveness decreases as they gain confidence in its suggestions. Both point toward the same design lesson: support teachers' interpretive and decision-making roles rather than pursuing full task substitution.

## What this means for practice

- **Instructors.** Treat every AI recommendation as a proposal rather than a verdict: check the underlying data, compare the suggestion against what you know about the class, and be explicit about when you override it.
- **Instructors.** Guard the planning and reflection time where transformation showed up, and use end-of-process overviews of common errors or process data to redesign the next assignment rather than only to report results.
- **Instructional designers.** Show the evidence behind an output, including how confident the system is, so that validation is possible in the time a teacher actually has.
- **Instructional designers.** Design for teacher decisions rather than autonomous action, and place AI support where interpretive work is feasible, which the cases suggest is planning and reflection more than live instruction.

## Limitations

- All four cases come from co-creation projects in a single national AI and education lab, so the results may be shaped by that participatory development approach and organizational context.
- The analysis is a one-time snapshot with one teacher per case, so the iterative, reciprocal dynamic that the paradox describes over time was not observed; the authors state the study shows co-occurrence but does not in itself establish interdependence.
- No formal inter-rater reliability was computed; consistency rested on consensus among eight researchers, with member checking against teachers in cases 1 and 3 and against tool designers in cases 2 and 4.
- The tools are described by function rather than by product name and span technology readiness levels 5 to 7, so the study cannot separate design choices from maturity or from educational level.
- No data-collection window is reported, so the snapshot cannot be dated against the tools' development.

## Citation

Horvers, A., Molenaar, I., Snoeijen, K., Costache, O., Van Der Graaf, J., Kramer, A.-W., De Mooij, S. S. M., Topali, P., Vermeire, Z., & Sleegers, P. J. C. (2026). [*Different lenses on human-AI collaboration: towards a comprehensive view on hybrid intelligence in education*](https://doi.org/10.1080/0144929X.2026.2740744). *Behaviour & Information Technology*.
