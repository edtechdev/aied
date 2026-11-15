---
title: "Hybrid intelligence feedback systems in design thinking development: Stage-specific insights on pedagogical effects and characteristics of generative AI and instructors"
created: "2026-11-15T08:45:00-05:00"
updated: "2026-11-15T08:45:00-05:00"
type: article
foundations: [design-thinking, human-ai-collaboration]
pedagogy: [scaffolding]
technology: [generative-ai, pedagogical-agent]
assessment: [feedback, feedback-literacy]
methods: [quantitative-research]
sources: ['raw/papers/fei-hybrid-intelligence-feedback-design-thinking-2026.md']
source_url: "https://doi.org/10.1111/bjet.70080"
source_depth: full text
confidence: high
evidence_context: educational
research_method: [experiment]
discipline: [design education]
level: [higher ed, undergraduate]
audience: [instructors, instructional designers, faculty developers]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-15"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Fei (2026) treats [[generative-ai|generative AI]] as a feedback agent rather than a task assistant and asks where in a [[design-thinking|design-thinking]] process it helps more than a human instructor. A within-class randomized experiment assigned 80 [[undergraduate-education|undergraduates]] to receive stage [[feedback|feedback]] from GenAI or from instructors across the five design-thinking stages, measuring [[learning-gains|learning gains]] and students' perceptions of each feedback source. Overall learning gains did not differ significantly, but the stage-level pattern did: GenAI was more effective at the *empathize* stage, where students valued its timeliness and [[privacy|privacy]], while instructors were more effective at *prototype*, valued for contextual anchoring. At define, ideate, and reflect the two produced comparable gains through complementary functions, which the author reads as an augmentative rather than substitutive role for GenAI.

## Key Findings
1. **Overall gains were equivalent.** No significant difference in learning gains appeared between GenAI feedback and instructor feedback across the design-thinking process as a whole.
2. **GenAI won the empathize stage.** Students receiving GenAI feedback at empathize showed greater learning gains and rated it higher on timeliness and privacy.
3. **Instructors won the prototype stage.** Human feedback produced greater gains at prototype, where students valued its contextual anchoring to their specific project.
4. **The other three stages were a draw.** Define, ideate, and reflect showed comparable effects with complementary functions, supporting an augmentative role for GenAI.
5. **Perceptions tracked the stage, not the agent.** Students' evaluations of the two feedback sources shifted across stages rather than favoring one consistently.

## Why stage matters more than agent

The useful move in this study is refusing the question "is [[ai-feedback-quality|AI feedback]] better than instructor feedback" and asking instead where each is better. Design thinking is unusually well suited to the substitution, because its five stages impose genuinely different feedback demands. Empathize requires students to surface user needs they have not yet articulated, and a system that responds instantly and without judgment lowers the cost of asking. Prototype requires judgment about whether a specific solution will work for a specific population under specific constraints, and that is where a [[teacher-role|instructor]]'s accumulated context pays off. A single average over the whole process would have canceled these two effects and produced the null the field keeps reporting.

## Timeliness and privacy versus context

The perceived characteristics explain the learning pattern rather than merely accompanying it. GenAI's advantage at empathize was tied to timeliness — feedback arriving while the student was still exploring — and privacy, which matters when students are working through user needs that involve personal or sensitive material. The instructor's advantage at prototype was tied to contextual anchoring: the capacity to say whether *this* prototype addresses *this* community's problem. Those are not interchangeable qualities, which is why the author frames the result as [[human-ai-collaboration|hybrid intelligence]] rather than as a comparison to be won. The same framing appears in the [[feedback|feedback]] literature's distinction between immediate corrective information and delayed expert judgment.

## Designing a hybrid feedback system

The practical upshot is an allocation rule rather than a winner. Put AI feedback where speed and non-judgment matter and where the student is still generating possibilities; put human feedback where the student has committed to something and needs an assessment of fit. That rule also sets a student-side requirement, which the paper names: students need enough [[feedback-literacy|feedback literacy]] to seek, evaluate, and reconcile two sources that will sometimes disagree. The three stages where the two agents performed comparably are the hardest case, because comparable quality does not tell a student which input to weight. Teaching that reconciliation explicitly is a [[curriculum-design|curriculum]] task, not a tooling one.

## What this means for practice
- **Instructors.** Put AI feedback where speed and privacy matter — early exploration of user needs — and keep human feedback for the point where students commit to a prototype.
- **Instructional designers.** Sequence the two agents by stage rather than choosing one; the experiment found no overall winner and clear stage-specific ones.
- **Faculty developers.** Build students' feedback literacy so they can reconcile two sources that disagree, since the stages where both worked comparably still required synthesis.

## Limitations
- The sample was 80 undergraduates in a single course, and stage-level comparisons rest on subsets of that sample, so stage effects are estimated with limited power.
- Learning gains and perceptions were measured within the course, with no delayed measure of whether design-thinking gains transferred.
- One institution and one five-stage design-thinking curriculum; the stage structure is a specific operationalization rather than a general account of design work.
- The comparison is between feedback sources embedded in different delivery arrangements, so agent and channel are not fully separable.

## Citation

Fei, X. (2026). [*Hybrid intelligence feedback systems in design thinking development: Stage-specific insights on pedagogical effects and characteristics of generative AI and instructors*](https://doi.org/10.1111/bjet.70080). *British Journal of Educational Technology, 57*(6), 1440–1470.
