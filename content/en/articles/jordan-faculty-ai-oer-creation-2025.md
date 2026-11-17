---
title: "From prompt to practice: A faculty-centered initiative to explore AI-supported OER creation"
published: "2025"
created: "2026-11-17T18:35:00-05:00"
updated: "2026-11-17T18:35:00-05:00"
type: article
foundations: [ai-literacy]
research_method: [case study]
level: [higher ed]
audience: [faculty developers, instructors, administrators]
page_kind: [design case]
sources: ['raw/papers/jordan-faculty-ai-oer-creation-2025.md']
source_url: "https://doi.org/10.31274/joerhe.20115"
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

> **Synthesis:** Jordan et al. (2025) describe an eight-week cohort program at the University of New Mexico in which seven faculty were paid to build [[open-education|openly licensed]] teaching materials with [[generative-ai|generative AI]]. The design borrows Knowles's adult learning principles and the CLEAR prompt framework, and it treats faculty as collaborators rather than recipients of training. The reported gains are real but modest: self-reported familiarity with AI in participants' fields rose from 3.2 to 3.5 on a five-point scale, while familiarity with OER started at 1.8 and moved furthest, and every participant ended the program rating their comfort at four or five out of five. The most useful finding is a licensing conflict the authors did not plan for. Because participants used OpenAI's ChatGPT, the materials they produced could not carry a Creative Commons license, so a program built to expand the commons produced artifacts that could not join it. The paper is a single-institution case with a self-selected cohort of seven, and its value is in the operational detail — stipends, union rules for adjuncts, cohort structure — rather than in evidence of learning.

## Key Findings

1. The program was an eight-week cohort run by the College of University Libraries and Learning Sciences, with four weeks of structured instruction, a project-development phase, and a showcase. Participants proposed projects through a competitive application and were paid stipends for their time.
2. Seven faculty and instructors took part, drawn from a range of disciplines, ranks and prior AI knowledge, including adjuncts and staff eligible for stipend funding.
3. Self-reported familiarity with AI in participants' own fields rose from an average of 3.2 before the program to 3.5 after it. The authors call the movement modest but meaningful.
4. Familiarity with OER was the larger gain: the pre-program average was 1.8, and the authors report substantial improvement, with most participants arriving with little or no prior OER experience.
5. By the end, all participants reported feeling comfortable using AI tools in their own work, and every confidence rating was a four or five on the five-point scale.
6. Participant projects were discipline-specific and varied: a chatbot with multiple characters and personalities for Russian language learners, a personalized learning task generator, and AI-guided case study creation.
7. A licensing problem emerged from the tool choice. Because the cohort relied on ChatGPT, the resulting materials could not be released under Creative Commons, which undercuts the open-licensing purpose the program was funded to serve.
8. Compensating adjuncts required an institutional fix rather than a program decision: at New Mexico, adjuncts are Unit 2 faculty who until January 2024 could not receive extra pay for professional development, and participation became possible through a memorandum of agreement between the administration and the faculty union.

## The program treated faculty time as the scarce input

The paper's framing is that OER production is labor, and that the labor falls unevenly. Creating open materials takes time that contingent faculty are least able to donate, which is how an open-access project can reproduce the inequalities it means to address. Paying stipends is therefore not a perk in this design; it is the mechanism that determines who can participate at all.

That logic extends to the union agreement. A program that advertises itself as open to adjuncts while its payment rules exclude them is open in name. The authors treat the memorandum as part of the intervention, and the sequence is instructive: the policy change came before the cohort, not after a complaint.

The pedagogy follows the same principle. Participants set their own goals, worked at their own depth, and used weekly meetings for peer feedback, which is Knowles applied literally — adults need to be treated as self-directing, and the program's job is to make that possible rather than to deliver a curriculum. The CLEAR prompt framework (concise, logical, explicit, adaptive, reflective) gave them a shared vocabulary for evaluating output without turning the program into prompt training.

## The licensing conflict is the finding worth carrying forward

A program that pays faculty to create open materials, using a model whose outputs cannot be licensed, is caught in a contradiction the authors name plainly: AI-generated content typically enters the public domain without the authorship and copyright protections that let a creator attach a CC license, which complicates blending human-authored OER with machine-generated media.

The practical consequences are not abstract. A remixer cannot confidently reuse a worksheet whose text came from a commercial model, and an institution cannot warranty openness it does not control. The authors note that participants' increased OER literacy is what made the problem visible — the better they understood licensing, the clearer the obstacle became.

The chapter's implicit recommendation is to separate the two products. Faculty-authored prose and structure can carry the license; model-generated media may need to be treated as a dependency with its own terms, or replaced with openly licensed assets. Programs that skip this distinction will report open output and ship something else.

## Where the evidence stops

The outcome data are self-reports from seven self-selected participants at one institution, collected before and after an eight-week program with no comparison group. That supports claims about confidence and familiarity and nothing about teaching quality, student experience or cost per artifact.

The authors are candid about the selection effect: participants applied because they were motivated, and the program's success owed much to institutional support from the college, both of which limit generalizability. They also note that the projects were pilots, with three participants continuing to broaden their AI integration afterwards.

What the paper does establish is feasibility at a specific institution with specific rules, which is more useful to a faculty developer planning a program than a null result from a randomized trial would be.

## What this means for practice

- **Budget for labor, and check who the money can reach.** Stipends decide participation. If adjuncts cannot be paid under current contracts, the fix is an agreement, not a workaround.
- **Decide the licensing model before the first prompt.** Choose tools and workflows whose outputs can carry the license you intend to publish under, or plan to keep model output out of the licensed layer.
- **Teach evaluation, not prompt tricks.** The CLEAR framework worked as a shared standard for judging output; the durable skill is critique, not phrasing.
- **Run it as a cohort.** Weekly peer feedback and a showcase gave participants a reason to finish, which solo training rarely supplies.
- **Measure what the program can move.** Familiarity and confidence are legitimate targets for an eight-week intervention; learning gains are not, and claiming them from self-report would misstate the evidence.

## Limitations

- Seven self-selected participants at a single institution, with no comparison group and no follow-up beyond the program's end.
- Outcomes are pre- and post-program self-reports of familiarity and confidence, not measures of material quality, student learning or cost.
- The program depended on a grant, institutional support and a union agreement that other institutions may not have.
- The licensing problem is described rather than solved; the paper offers no tested workflow for producing openly licensable AI-assisted materials.
- Project descriptions are brief, so the disciplinary variation is visible but the design decisions behind each project are not.

## Citation

Jordan, J., Gustavsen, D., Houdek, J., Meier, I., & Neumeyer, X. (2025). [*From prompt to practice: A faculty-centered initiative to explore AI-supported OER creation*](https://doi.org/10.31274/joerhe.20115). *Journal of Open Educational Resources in Higher Education, 3*(3).
