---
title: "Beyond Correctness: How Novice Software Engineering Students Exercise Oversight of Generative AI"
created: "2026-10-26T09:30:00-04:00"
updated: "2026-10-26T09:30:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/novice-se-students-oversight-genai-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [thematic analysis]
discipline: [cs education, engineering education]
audience: [instructors, software developers, educational technology developers, researchers]
level: [undergraduate, higher ed]
pedagogy: [student-ai-interaction, scaffolding]
technology: [generative-ai, llm, human-in-the-loop-ai, vibe-coding]
assessment: [evaluative-judgment]
methods: [qualitative-research]
institutions: []
ethics: []
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-26"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Shakiba and Chaffey (2026) analyzed 962 student–AI interaction turns documented by 145 first-year software engineering students through structured AI Journals, including 172 student-declared interventions. Fitness problems were identified in 74.4% of interventions compared with 16.9% involving correctness problems, showing that novice oversight more often concerned whether plausible [[generative-ai|generative AI]] outputs were suitable for the engineering task than whether they contained explicit errors. Among classifiable interventions, students most frequently modified generated outputs (51.0%) or refined their prompts (28.2%). Within students, outputs perceived as containing minor flaws were associated with lower [[evaluative-judgment|evaluation confidence]] than outputs perceived as perfect, a finding the authors frame through [[human-in-the-loop-ai|human-in-the-loop oversight]] and evaluative judgment.

## Key Findings

1. **Oversight was mostly about fitness, not correctness.** Fitness problems appeared in 128 interventions (74.4%) versus 29 (16.9%) involving correctness problems, and 26 cases (15.1%) identified no specific failure.
2. **Students modified outputs more than they changed prompts.** Of 149 classifiable interventions, output modification accounted for 51.0% (n = 76), prompt refinement 28.2% (n = 42), clarification seeking 13.4% (n = 20), and rejection 7.4% (n = 11).
3. **Rationales differed by action.** Engineering fit was associated with 63.2% of output modifications and 69.0% of prompt refinements, while comprehensibility was identified in 85.0% of clarification-seeking interventions.
4. **Output transformation was the most common mechanism.** It occurred in 102 interventions (59.3%) and characterized 88.2% of output modifications; specification adjustment appeared in 37 (21.5%).
5. **Most outputs were rated perfect.** Across 962 turns, students rated 790 outputs (82.2%) as perfect and 167 (17.3%) as having minor flaws; only five interactions (0.5%) were rated as [[hallucination-risk|major hallucination errors]].
6. **Minor flaws came with lower confidence.** Perceiving an output as flawed was associated with a 0.43-point reduction in evaluation confidence (βW = −0.434, 95% CI [−0.543, −0.325], p < 0.001), robust in an ordinal model (OR = 0.289).
7. **Coding was reliable.** Independent coders agreed on intervention type at 90.6% (Cohen's κ = 0.865; Gwet's AC1 = 0.886), with exact-set agreement of 94.7% for operational mechanisms.

## The study and its instrument

The study examined ELEC1005: Introduction to Software Engineering, a first-year [[higher-ed|undergraduate]] unit at the University of Sydney in Semester 1, 2026, which follows a design-first, low-code approach using tools such as Microsoft PowerApps and Figma rather than conventional source-code programming. Students completed structured [[ai-use-disclosure|AI Journals]] throughout the semester as a hurdle requirement rather than a graded component, reducing but not eliminating the incentive to optimize reflective responses for marks. Each journal documented a student's use of a [[generative-ai|generative AI]] tool for a coursework task: for every interaction turn, students recorded their prompt, the corresponding AI-generated response, the purpose of the interaction, their assessment of the output's accuracy, the method used to verify it, and their [[self-report-measures|confidence]] in evaluating its accuracy on a five-point scale. When students assessed an output as containing minor flaws or major hallucination errors, they also described the intervention they made and how they carried it out. The dataset comprises 962 [[student-ai-interaction|student–AI interaction]] turns declared by 145 students across nine weeks.

## What students judged and how they responded

The primary unit of analysis is the student-declared intervention: 172 of them across the 962 turns. Fitness problems — outputs that were overly generic, incomplete, unnecessarily complex, insufficiently contextualized, or misaligned with system scope — appeared in 128 interventions (74.4%), while correctness problems, such as factual, logical, technical, or structural errors, appeared in 29 (16.9%). Twenty-three interventions (13.4%) were too thinly described to classify. Of the 149 classifiable interventions, output modification was most frequent (51.0%, n = 76), followed by prompt refinement (28.2%, n = 42), clarification seeking (13.4%, n = 20), and rejection (7.4%, n = 11). Engineering fit, the rationale of ensuring the output is feasible and compatible with project constraints, was associated with 63.2% of output modifications and 69.0% of prompt refinements, whereas clarification seeking showed a distinct orientation toward comprehensibility (85.0%). The most frequent operational mechanism was output transformation (102 interventions, 59.3%), followed by specification adjustment (37, 21.5%); evidence grounding and error diagnosis were uncommon (8 and 12 interventions).

## Confidence and perceived correctness

Across the 962 interaction turns, students evaluated most AI-generated outputs as perfect (n = 790, 82.2%), followed by minor flaws (n = 167, 17.3%); 25 students contributed observations in both categories. Only five interactions (0.5%) were evaluated as major hallucination errors, reported by four students with a mean raw confidence score of 4.60 out of 5, and were excluded from inferential comparisons because there were too few observations to support reliable estimation. Evaluation confidence was lower when the same student perceived an output as containing minor flaws rather than perfect. After separating within- and between-student variation, the mixed-effects model estimated a 0.43-point reduction in confidence for flawed outputs (βW = −0.434, 95% CI [−0.543, −0.325], p < 0.001); students who more frequently evaluated outputs as flawed also reported lower confidence overall (βB = −0.721, 95% CI [−1.095, −0.348], p < 0.001). The within-student association was robust to treating the five-point confidence measure as ordinal (OR = 0.289, 95% CI [0.165, 0.507], p < 0.001).

## What this means for practice

- **Instructors.** Treat oversight as an explicit [[cs-education|software engineering]] competency rather than an implicit expectation of students using generative AI, and extend instruction beyond factual verification to judging fitness for purpose — whether an artifact is appropriately scoped, sufficiently contextualized, and compatible with system and stakeholder constraints.
- **Instructional designers.** Give students a range of supervisory strategies — modifying an artifact, refining the conditions given to the AI, seeking clarification, or rejecting an output — rather than relying predominantly on repeated [[prompt-engineering|prompting]].
- **Assessment designers.** Make the supervisory process visible. Evaluating only the final artifact provides limited evidence of whether students evaluated AI-generated content critically; process-oriented activities that require students to document what prompted an intervention, why they intervened, and how they responded can provide evidence of the [[evaluative-judgment]] underlying AI-assisted work.
- **Educational technology developers.** Preserve human agency in [[human-in-the-loop-ai|human-in-the-loop]] workflows, so students retain both the capacity and the opportunity to exercise judgment when generated artifacts require intervention.

## Limitations

- The AI Journal captures student-declared oversight rather than independently observed behavior, and intervention reporting was required only when students evaluated an output as containing minor flaws or major hallucination errors, so adaptations to outputs rated perfect may be excluded.
- Only 172 of 962 interaction turns were declared interventions, and 23 of those (13.4%) were too thinly described to classify, so the coded triggers, rationales, and actions represent only what could be established from students' accounts.
- RQ3 relies on self-reported perceptions of output correctness and confidence, and only five interactions were rated as major hallucination errors, so no conclusions can be drawn about evaluation confidence under severe AI failure.
- The coding framework necessarily involves interpretive judgment; although independent coding reached 90.6% agreement (Cohen's κ = 0.865; Gwet's AC1 = 0.886), reconciliation does not eliminate the judgment involved in assigning categories.
- The study was conducted in a single first-year, design-first, low-code course at the University of Sydney, so the prominence of fitness-oriented oversight may partly reflect the course's emphasis on requirements, scope management, and reflective AI use, and should not be assumed to generalize to programming-intensive courses or professional settings.

## Citation

Shakiba, A., & Chaffey, T. (2026). [Beyond Correctness: How Novice Software Engineering Students Exercise Oversight of Generative AI](https://arxiv.org/abs/2610.32118). *arXiv preprint*.
