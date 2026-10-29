---
title: "A Didactic Analysis of the Design of Geometry Tasks Using Generative Artificial Intelligence by Prospective Primary School Teachers"
created: "2026-10-29T10:34:00-04:00"
updated: "2026-10-29T10:34:00-04:00"
type: article
authors: ["Ledezma, C.", "Valderrama, N.", "Díez-Palomar, J."]
published: "2026-10-26"
venue: "Research Square preprint"
source_url: https://doi.org/10.21203/rs.3.rs-11391444/v1
foundations: [teacher-ai-competency, ai-literacy]
pedagogy: [problem-solving, scaffolding, prior-knowledge, collaborative-learning]
technology: [generative-ai, prompt-engineering]
assessment: [assessment, evaluative-judgment]
methods: [qualitative-research]
research_method: [case study]
discipline: [math education]
level: [teacher education, primary education]
audience: [faculty developers, curriculum designers, researchers]
page_kind: [evaluation]
sources: ['raw/papers/ledezma-geometry-task-design-genai-preservice-2026.md']
confidence: low
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-29"
    agent: hermes-agent
---

> **Synthesis:** Ledezma, Valderrama and Díez-Palomar (2026) analyze what 13 prospective primary school teachers at a Spanish [[higher-ed|university]] prioritized when designing geometry tasks with [[generative-ai|generative AI]], coding 158 text units from their written reports and their chat logs against the Didactic Suitability Criteria and six indicators of task-instruction quality. The three groups reached for epistemic and cognitive goals — rich mathematical processes, representative objects, high cognitive demand — and attached them to interactional, mediational and ecological concerns such as cooperative work, teacher mediation, manipulatives and real-life contexts. The tool proved genuinely useful for broadening ideas and sequencing activities and unreliable in the same breath: it produced formulaic and ambiguous output, and in one exchange a stated scale that was arithmetically wrong (4 real meters drawn as 8 centimeters described as 1 m = 4 cm, where the correspondence is 1:50). The study's practical finding is that intentions for [[agency|autonomy]] and argumentation frequently failed to reach the task instructions students would actually read.

## Key Findings

1. **Thirteen prospective teachers, three design groups, 158 coded text units.** The data are the groups' written reports and their verbatim conversations with a GenAI application, analyzed as an intrinsic case study.
2. **Epistemic and cognitive priorities dominated.** The most frequent components were richness of mathematical processes, representativeness of mathematical objects and high cognitive demand, appearing together in all three groups' designs.
3. **All three groups avoided algorithmic exercises.** Tasks were built as opportunities for problem solving, decision making and argumentation, and linked to contexts such as a school playground, everyday solids and an urban garden.
4. **Interactional, mediational and ecological aspects were integrated, unevenly.** Cooperative work, autonomy, teacher mediation, manipulatives and digital resources recurred, with each group weighting them differently.
5. **GenAI broadened ideas and also produced didactically problematic content.** Output was usable for generating options and sequencing, and simultaneously overly formulaic, predetermined or ambiguous, including a proportionality error the group had to catch.
6. **Stated aims did not reach the task instructions.** Designs declared autonomy and justification as goals, yet the instructions rarely required students to explain decisions or procedures, so the intended demand was higher than the enacted one.
7. **Affective aspects were the least consistently designed.** Interest and participation appeared mainly where tasks connected to students' own experiences, and were absent from much of the instruction text.

## What the groups designed, and what the framework let them see

The analysis organizes each design across four dimensions — design, context, objective and task instruction — and codes them with the components of the Didactic Suitability Criteria: epistemic, cognitive, interactional, mediational, affective and ecological. Group 1 worked on representing real objects, proportionality and recording decisions; Group 2 prioritized [[visualization|visualization]], hands-on manipulation and teacher mediation, and explicitly invoked the Van Hiele model as a cognitive reference for sequencing; Group 3 emphasized contextualization, problem solving and the everyday practicality of [[math-education|mathematics]]. The framework's value here is diagnostic rather than evaluative: it makes visible that a task can be strong on mathematical process and weak on the instruction a student receives, which is the gap the study keeps finding.

## The scale error, and why it is the paper's most instructive moment

In the first group's exchange, a prompt asked for an image of a tree in a model, and the specification read that a tree four meters tall in the playground would be eight centimeters tall in the model "because the scale is 1 m = 4 cm." The correspondence is 1 m = 2 cm, or 1:50. Nothing about the output looks wrong: the image is plausible, the layout is exactly what was requested, and the error sits in the arithmetic embedded in a design decision the group had already made. This is the failure mode [[hallucination-risk]] research describes and the reason [[critical-thinking|critical evaluation]] of proposals has to happen before a task reaches a classroom, not after students have worked it. It also marks the boundary of what [[prompt-engineering]] training can do: the group's prompting was competent and specific, and competence in prompting is not the same as didactic-mathematical knowledge.

## From declared aims to open instructions

The second finding is subtler and harder to fix. Analysis against the instruction-quality indicators showed strong presence of authentic contexts and relevant questions, and much less attention to removing unnecessary aids, exploring diverse strategies and requiring explicit justification. A task can therefore be contextualized and technology-rich while remaining closed, and the paper's conclusion is that contextualization plus technology is not sufficient evidence of quality. For [[teacher-education]], that reframes the competence being built: the prospective teacher's job with GenAI is to convert a generated activity into an instruction that leaves room for [[problem-solving|exploration, decision making and validation]], which is a design judgment the tool does not make and cannot be asked to make.

## What this means for practice

- **Faculty developers.** Have pre-service teachers submit the chat log alongside the lesson plan. Every error in this study was visible in the conversation, and the log is what makes the evaluation of AI output teachable rather than assumed.
- **Faculty developers.** Assess the task instruction separately from the activity. These groups designed strong mathematics and then wrote closed instructions, and only a separate criterion catches the second.
- **Instructors.** Check every number GenAI writes into a task — scale, units, conversions — before it reaches students; the arithmetic is embedded in prose that reads correctly.
- **Curriculum designers.** Teach [[teacher-ai-competency|AI use in planning]] as a didactic skill measured against a design framework, not as prompt technique; competent prompting produced a wrong scale here.
- **Researchers.** Report the model, version and prompts alongside the coded units, since the outputs being analyzed are not reproducible otherwise.

## Limitations

- The study has 13 participants in three groups at one Spanish university, and the preprint has not been peer reviewed.
- No classroom implementation is reported: the outcome analyzed is the design conversation and the written report, not pupil learning or enacted teaching.
- The GenAI application, its version and the prompt history are not identified in the analyzed excerpts, so the outputs cannot be reproduced or compared across tools.
- Coding was done by the authors within a single framework whose components are themselves an interpretive lens, and the 158 units are distributed very unevenly across the three groups.
- The conclusions about what pre-service teachers prioritize describe one task-design episode in one course, which the intrinsic case-study design does not generalize beyond.

## Citation

Ledezma, C., Valderrama, N., & Díez-Palomar, J. (2026). [*A Didactic Analysis of the Design of Geometry Tasks Using Generative Artificial Intelligence by Prospective Primary School Teachers*](https://doi.org/10.21203/rs.3.rs-11391444/v1). Research Square preprint.
