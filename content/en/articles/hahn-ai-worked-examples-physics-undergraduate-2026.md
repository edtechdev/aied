---
title: "AI-generated support, worked examples, and script-based learning in undergraduate physics: A comparative study"
created: "2026-11-24T09:30:00-05:00"
updated: "2026-11-24T09:30:00-05:00"
type: article
authors: ["Larissa Hahn", "Marie Aylin Falkenberg", "Marten Hogelücht", "Pascal Klein"]
venue: "arXiv preprint (physics.ed-ph)"
evidence_context: educational
pedagogy: [scaffolding, cognitive-psychology]
technology: [generative-ai, conversational-ai, intelligent-tutoring]
assessment: [learning-gains, self-report-measures]
methods: [rct, quantitative-research]
discipline: [physics education]
level: [higher ed, undergraduate]
audience: [instructors, researchers]
page_kind: [evaluation]
research_method: [experiment]
sources: ["raw/papers/hahn-ai-worked-examples-physics-undergraduate-2026.md"]
confidence: high
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-24"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Hahn, Falkenberg, Hogelücht, and Klein (2026) report a cluster-randomized comparison in an [[higher-ed|undergraduate]] electrodynamics course: a chatbot-delivered intelligent [[scaffolding|worked example]], a matched static worked example, and a lecture script. Eighty-six students in nine recitation groups worked individually on a Gauss's law problem, with concept-test accuracy and [[self-efficacy]] as outcomes. Students improved in all three conditions, and the conditions did not separate from one another. Four weeks later, in a reduced sample with selective participation and pre-existing group differences, the static worked example outperformed the script by a wide margin while the two worked-example conditions did not differ. [[usability-research|Usability]] was higher for the intelligent worked example than for the script, though perceived educational value did not differ. In a later homework task with free choice of material, 62–71% of students in each condition used only the static example and at most 8% used only the chatbot. The study asks when [[generative-ai|conversational delivery]] adds value to an established [[physics-education|instructional design]], and finds little evidence that it does.

*Cluster-randomized pretest–posttest–follow-up design in nine recitation groups of an undergraduate electrodynamics course, with three conditions (intelligent worked example, static worked example, lecture script) and 86 students in the core sample. Concept test of 19 items, six-point self-efficacy scale, plus cognitive-load, usability, and perceived-educational-value measures; follow-up four weeks later with 57 complete cases.*

## Key Findings

- **All three conditions improved, with no clear differences between them.** Concept-test accuracy and self-efficacy rose within every group, but the amount of improvement did not differ between conditions.
- **The static worked example beat the script at four-week follow-up.** Students in the static condition scored higher than those in the script condition by a wide margin, while the two worked-example conditions did not differ.
- **Conversational delivery raised usability, not learning.** Usability was higher for the intelligent worked example than for the script; perceived educational value did not differ between conditions.
- **Given free choice, students preferred the static material.** On a subsequent Ampère's law assignment (N = 46), 62–71% in each condition reported using only the static worked example, at most 8% used only the intelligent one, and 15–31% used neither.
- **The groups started comparable.** No statistically significant baseline differences appeared in age, number of semesters studied, university entrance grade, or pretest performance.
- **The follow-up sample was reduced and unequal.** Complete data across pretest, posttest, and follow-up were available for 57 students (n = 21 intelligent, n = 20 static, n = 16 control), and the authors note selective participation and pre-existing group differences.

## Designing the comparison

Worked examples are a well-established way to guide learners through the steps and reasoning of a solution, and the study treats them as the benchmark rather than as one novelty among others. The intelligent version kept the same solution structure and added a [[conversational-ai|chatbot]] interface through which students could ask follow-up questions, request extra explanations, and discuss their answers to activation questions before moving to the next step. That design isolates the delivery channel: the content of the example stays constant, so any difference can be attributed to the conversational layer rather than to new material.

Randomization happened at the group level, with three recitation groups assigned to each condition while accounting for group-size differences. Students first completed a pretest on conceptual understanding of Gauss's law and self-efficacy about applying it, then the intervention, then an immediate posttest repeating the concept test and self-efficacy measure and adding cognitive load, usability, and perceived educational value. Participation at follow-up was voluntary and independent of participation in the intervention, which is why the four-week sample shrank and why the authors handle it cautiously.

## What the outcomes show

On the immediate test, every condition improved and none separated from the others. The authors report this as a test-combination result, computing pre–post effect sizes across a range of weighting parameters rather than selecting a favorable one; the prespecified weighting sits inside a range where group ordering is sensitive to the choice, which is part of why they decline a strong claim. The picture sharpens at follow-up: the static worked example pulls ahead of the script, and the intelligent example sits between them without differing from either. Because the follow-up sample is small and self-selected, the authors present this as a signal worth testing rather than a settled result.

The usability finding is the clearest advantage for the AI condition: students found the chatbot-delivered example easier to work with than the script. Perceived educational value, however, did not differ, and the free-choice homework assignment shows what students actually reached for when no one required the tool. Most chose the static example alone. The combined message is that a conversational layer can make a worked example more approachable without making it more instructive in this setting.

## Interpreting the comparison

The study speaks directly to a common expectation: that a chatbot wrapper around good material will improve on the material. Here it improved the experience of using the material, not the learning from it, and the durable advantage belonged to the simplest condition. For [[physics-education]] practitioners the practical question is therefore not whether to add a conversational tutor, but whether the added complexity earns its place. When the worked example is already well designed, the chatbot's marginal contribution may be limited to motivation and navigation — real benefits, but different ones from the [[learning-gains|learning gains]] such systems are often promised to deliver.

The preference data matter for implementation. Students given a choice overwhelmingly used the static example, which suggests that any deployment should treat the conversational option as an accompaniment rather than a replacement. It also implies that usability findings from mandatory lab settings may overstate real-world uptake.

## What this means for practice

- **Instructors.** Keep the worked example as the core artifact. Add a conversational layer only where it serves a specific need — follow-up questions, alternative explanations, navigation — and state that purpose to students.
- **Physics faculty developers.** Treat usability gains as a separate outcome from learning gains. Ask students both, and do not read a smoother experience as evidence of deeper understanding.
- **Instructional designers.** Preserve the solution structure of a proven worked example when adding AI delivery; change the channel, not the scaffolding, so the comparison stays interpretable.
- **Researchers.** Report follow-up tests with their attrition and baseline balance. Short-term, equal-outcome comparisons are the norm in this literature and cannot distinguish "no benefit" from "benefit that fades".

## Limitations

- The follow-up sample was reduced to 57 students with unequal group sizes and selective participation, and the authors state pre-existing group differences remained, so the four-week comparison is fragile.
- Randomization was at the recitation-group level, which leaves room for group-level confounding despite the baseline checks.
- Outcomes rely in part on [[self-report-measures|self-report]]: self-efficacy, usability, and perceived educational value were all questionnaire measures rather than performance measures.
- The intervention covered one physics topic (Gauss's law) in one course at one institution, which limits generalization to other topics and settings.
- The chatbot condition bundled several affordances (follow-up questions, extra explanations, discussion of activation responses), so the study cannot isolate which of them drove the usability difference.
- Effect-size estimates were shown to be sensitive to the choice of weighting parameter, which the authors disclose but which weakens any single summary number.

## Citation

Hahn, L., Falkenberg, M. A., Hogelücht, M., & Klein, P. (2026). [AI-generated support, worked examples, and script-based learning in undergraduate physics: A comparative study](https://arxiv.org/abs/2611.28951). *arXiv preprint arXiv:2611.28951.*
