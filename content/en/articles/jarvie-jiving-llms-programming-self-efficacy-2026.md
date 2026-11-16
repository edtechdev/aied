---
title: "Jiving With LLMs: 1st-Year Students’ Computer Programming Self-Efficacy After Reading Code with LLMs"
created: "2026-11-16T09:00:00-04:00"
updated: "2026-11-16T09:00:00-04:00"
type: article
evidence_context: educational
authors: ["Jarvie-Eggart, M.", "Teahen, J. R.", "Masker, D. T.", "Padilla, J.", "Ureel, L. C., II", "Brown, L. E.", "Pomerville, S.", "Sticken, J."]
published: "2026-01-09"
venue: "Journal of Teaching and Learning with Technology"
source_url: https://doi.org/10.14434/jotlt.v12i1.41701
foundations: [academic-integrity, ai-literacy, human-ai-collaboration]
pedagogy: [constructivist, scaffolding, self-efficacy]
technology: [generative-ai, llm]
assessment: [self-report-measures]
research_method: [survey]
discipline: [cs education, engineering education]
level: [undergraduate]
audience: [instructors]
sources: ['raw/papers/jarvie-jiving-llms-programming-self-efficacy-2026.md']
confidence: medium
methods: [mixed-methods-research]
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
---
> **Synthesis:** Jarvie-Eggart and colleagues (2026) asked 297 first-year engineering and computer science students at Michigan Technological University to comment a FORTRAN program they had never seen, then to run the same code through ChatGPT-4.0 for its comments and read the result. Before and after, students completed the two factors of Ramalingam and Wiedenbeck's [[self-efficacy|Computer Programming Self-Efficacy Scale]]. Both factors moved: programming independence and persistence (Factor 1) at p = .0074, complex programming tasks (Factor 2) at p = .012. The splits are the interesting part. Engineering students gained on both factors while CS students gained only on Factor 1; men gained on Factor 1 and women on Factor 2. 87.44% of coded responses described the explanations as increasing their understanding of the unfamiliar language, and the exercise appears to have shifted intent: 12.07% had previously used AI to create code, while 7.77% said they would use it for that in future and 58.02% said they would use it to explain code. The recommendation is narrow and practical: teach students how to interact with [[generative-ai|GenAI]], not just whether they may.

## Key Findings

- **Both self-efficacy factors rose, though the movement is modest in the middle of the distribution.** The combined Factor 1 score went from a median of 5.87 with quartiles of 5.25 and 6.25 to a median of 5.87 with quartiles of 5.25 and 6.38, significant at p = .0074 on a sign test. Factor 2 went from a median of 5.28 (4.57 to 6.00) to 5.57 (4.71 to 6.00), p = .012. The authors note that all pre- and post-test factors were negatively skewed, meaning self-efficacy was already above average before the intervention.
- **The item-level pattern on Factor 1 shows confidence moving away from people.** Significant increases appeared on completing a project given a lot of time (p = .000016), finding ways to overcome a problem when stuck (p = .0000011) and debugging a long complex program (p = .0073). Significant decreases appeared on completing a project if the student could call someone for help (p = .0069) and if someone showed them how to solve the problem (p = .00014).
- **Factor 2 gains concentrated on understanding and repairing code rather than writing it.** Understanding program structure rose (p = .0076), as did writing a program someone else could extend (p = .028), mentally tracing a long multi-file program (p = .016) and rewriting confusing code for readability (p = .0000011). Items on using a pre-written function and identifying functions in the problem domain did not change.
- **Discipline split: engineers gained on complex tasks, CS students did not.** Both engineering and CS majors improved on Factor 1, with CS showing greater change than the combined group and a significant gain on the reference-manual item. On Factor 2 the engineering group improved while the CS group showed no significant change in the combined score, though CS students did improve on understanding program structure. The small "other majors" group showed no significant change on any Factor 1 item or the combined score.
- **Gender split ran the opposite way on the two factors.** Men showed a significant increase on the combined Factor 1 score and on the time and overcoming-problems items, with decreases on the call-someone and someone-shows-me items. Women showed no significant change on combined Factor 1 but did improve on four items and declined on the call-someone item. On Factor 2, women improved on the combined score and on structure, writing extendable code, tracing and rewriting; men improved only on tracing and rewriting.
- **Students said the explanations worked.** 87.44% of responses to "What did you learn?" were coded as increased understanding. 14.38% described the AI confirming something they had suspected, 11.40% described it correcting a misconception, and 10.08% described seeing how programming experience transfers between languages. The concepts named most often were arrays (44.30%), output (27.93%), math within a program (23.47%), files (21.32%), commenting (20.00%), variables (17.36%) and loops (8.93%).
- **A small minority got nothing, and their reasons are specific.** 6.28% said the AI did not increase their understanding, citing comments of no help, omitted explanations of syntax they did not understand, or an explanation that overwhelmed them. Several of these students also said part of the code had been clarified, which the authors read as a sign that follow-up questions would have closed the gap; students were given a fixed prompt and may not have felt they had the agency to ask.
- **Past use was common and future intent tilted toward explanation.** 57.85% had used AI before, 56.53% for coding, and use was higher in courses with more experienced students. Past uses were debugging (17.36%), help when confused (16.36%) and code creation (12.07%). Looking forward, 58.02% said they would use AI to explain code, 35.87% to develop their understanding, 22.15% for debugging, 7.77% to create code, and 4.46% said they would not use it at all.

## How the study was done

Participants were 297 first-year students across five courses: ENG1101 (147), ENG1102 (22), CS1111 (72), CS1121 (29) and CS1131 (27). The engineering sequence teaches MATLAB, CS1111 teaches C, and the CS courses teach Java. The sample was 73.06% male, 20.54% female and 6.40% nonbinary, other or prefer not to say. Prior experience was dominated by MATLAB (55.04%) and Java (20.83%), with C at 15.54% and Python at 8.26%; no participant reported FORTRAN experience, which is what made the language genuinely unfamiliar.

Near the end of their introductory courses, students completed a six-step assignment. They commented a FORTRAN program without AI help, explained in plain English what they thought it did, then pasted the code into ChatGPT-4.0 with the prompt "Can you please comment this FORTRAN code for me?". They read the model's comments without revising their own attempt, then answered what they learned, whether they had used AI for code before, and how they might use it to learn programming. The design is [[constructivist|constructivist]] in the authors' framing: students build understanding by producing and then revising an explanation, with the model supplying the [[scaffolding|scaffold]] they cannot yet generate alone.

Self-efficacy was measured with the two factors of the CPSES on a 7-point scale from not confident at all to absolutely confident, administered before and after. Analysis used sign tests with a .05 threshold, with medians and quartiles for description, run for the whole sample and for discipline and gender subgroups. Open responses were analyzed with inductive coding and simultaneous coding, then organized into themes. The paper also carries a positionality statement describing a team of eight spanning one undergraduate, two CS graduate students, two CS faculty, one jointly appointed CS and psychology faculty member and two engineering faculty, including two women, five men and one nonbinary person.

## What this means for practice

- **Teach code reading with AI before code writing with AI.** The intervention asked for no code production at all, and the largest gains landed on understanding structure, tracing execution and rewriting for clarity. An introductory course can use this as a low-stakes comprehension exercise in a language students do not know, which is cheaper to run than a full AI-assisted project.
- **Give the prompt, then teach the follow-up.** The 6.28% who learned nothing mostly missed specific syntax the model skipped. A fixed instructor prompt produces a fixed answer; teaching students to ask again about `open()` or the `write()` parameters converts a partial explanation into a complete one.
- **Watch what happens to help-seeking.** Confidence in completing work with someone to call and after being shown how both declined, and only 1.98% of respondents said they would prefer other people over ChatGPT. The authors flag this against their own earlier finding that other people are the strongest facilitator of technology adoption, and suggest deliberately promoting study groups and learning centers alongside the tool.
- **Debugging needs a threshold, not a blanket rule.** Debugging was the most common past use and the second most common intended use, and the paper cites evidence that AI debugging help benefits students who can recognize bad suggestions while adding metacognitive difficulty for those already struggling. Novices are precisely the group least able to tell which suggestion to ignore.
- **Do not read the gender result as a design principle yet.** The authors are explicit that prior work found code-critiquing systems helped women on independence and persistence, the opposite of what they observed here, and they call for research into why. The consistent finding across studies is that technology-assisted learning can narrow the complex-task confidence gap, not that one tool fits one group.

## Limitations

- The paper's own list is short: all measures are self-reported use and self-reported intention, and the study ran at a single, predominantly White institution, so generalization to other student populations is untested.
- There is no comparison group and no delayed posttest, so the gains cannot be attributed to the ChatGPT explanation rather than to the act of commenting unfamiliar code, the plain-English explanation, or simply completing a second survey on a familiar instrument.
- The subgroup analyses are small. The nonbinary, other and prefer-not-to-say group showed no significant change on any item, which the authors say is hard to interpret given its size, and the "other majors" group is 8.11% of the sample.
- Sign tests were run on every item for the whole sample and for each subgroup at a .05 threshold with no adjustment for the number of tests, so individual item results are exploratory even where the p values are very small.
- The intervention is one assignment of perhaps an hour, and the outcome is belief rather than demonstrated programming skill: no code-writing task was scored, so whether the confidence gain corresponds to competence is outside the data.

## Citation

Jarvie-Eggart, M., Teahen, J. R., Masker, D. T., Padilla, J., Ureel, L. C., II, Brown, L. E., Pomerville, S., & Sticken, J. (2026). [*Jiving With LLMs: 1st-Year Students’ Computer Programming Self-Efficacy After Reading Code with LLMs*](https://doi.org/10.14434/jotlt.v12i1.41701). *Journal of Teaching and Learning with Technology, 14*(Special Issue), 65–87.
