---
title: "Human-Centred Engineering Education for Industry 5.0 With Generative AI"
created: "2026-11-14T12:12:00-05:00"
updated: "2026-11-14T12:12:00-05:00"
type: article
sources: ['raw/papers/abril-jimenez-human-centred-engineering-genai-2026.md']
source_depth: full text
confidence: low
evidence_context: educational
research_method: [survey, interviews, structural equation modeling]
page_kind: [evaluation]
level: [higher ed]
audience: [instructors, instructional designers, administrators, researchers]
discipline: [engineering education]
foundations: [human-ai-collaboration, design-thinking, critical-thinking, ai-literacy]
pedagogy: [problem-based-learning, collaborative-learning]
technology: [generative-ai, technology-acceptance-model]
assessment: [self-report-measures, educational-measurement]
methods: [mixed-methods-research, quantitative-research, qualitative-research]
ethics: [trust]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-14"
    agent: hermes-agent
---

> **Synthesis:** A Spanish engineering course put [[generative-ai|GenAI]] inside a challenge-based design cycle and then took it away at the decision point. 105 second-year mechanical engineering students worked a local problem through [[design-thinking|design thinking]], using an AI tool of their choice to explore the context and prototype, but selecting their solution with the tools restricted. Pre- and post-surveys, 98 open responses and instructor notes show high perceived effectiveness and [[trust|trust]], and low friction: students found the tools easy to use and useful. What they asked for was not more capability but more verification discipline, industry examples and time spent critiquing output. One course, no control group.

## Key Findings

1. **GenAI fit the design cycle without a usability fight.** Students rated the tools easy to use, so the barrier was not learning the interface but knowing when to stop trusting it.
2. **The tools helped most where the task was generative.** Students credited GenAI with faster ideation, richer requirements and quicker prototypes, and described the final selection of a solution as work the tool could not do for them.
3. **Trust was high and explicitly conditional.** Students trusted AI output as a starting point, and the same responses asked for validation stages, which is [[trust-calibration|calibration]] rather than blanket confidence.
4. **Withdrawing the tool at the decision point carried the pedagogy.** Teams chose among solutions with GenAI restricted and teacher-set criteria, which turned the exercise into [[critical-thinking|critical evaluation]] instead of prompt refinement.
5. **Collaboration drove acceptance and produced the main complaint.** Groups that shared prompts and prototypes adopted the tools quickly; students who watched classmates accept an AI answer without iterating reported working alone.
6. **What students wanted next was contact with practice, not more AI.** They asked for industry case studies, guest practitioners and hackathon-style design sprints, which suggests the course's credibility rested on the problem, not the tool.

## The course ran GenAI through a design cycle, then removed it

The intervention sat inside a graphical engineering course in a mechanical engineering program at a public Spanish university, where students already had CAD and manufacturing background but little formal AI training. Before class, students answered a short questionnaire on prior tool use and received the challenge and its resources. In a 90-minute session, teams of up to five explored a local, everyday problem with a GenAI tool of their choice, gathering context and user needs before writing a problem statement. Individually, students then generated and extended solution lists and tested prototypes against simulated users. In the final session they selected the most viable solution with GenAI deliberately restricted, guided by criteria tied to the original challenge. After class, feedback, peer comparison and documentation ran through Moodle, and instructors used the results to revise the activity.

That sequence is the study's real object. The paper reports student experience of a [[human-ai-collaboration|human-AI collaboration]] design in which the assistant is present for divergence and absent for judgment, rather than a course that taught prompting.

## Acceptance followed the structure, not the novelty

The quantitative strand used a [[technology-acceptance-model|TAM]] instrument analyzed with partial least squares structural equation modeling. All four hypotheses held: perceived ease of use fed perceived usefulness and intention to use, perceived usefulness fed intention, and social influence fed perceived usefulness. Descriptively, perceived usefulness averaged 4.94, ease of use 4.41, intention 4.41 and social influence 4.33, all on a five-point scale, while the four experience constructs scored 4.44 for motivation, 4.94 for effectiveness, 3.88 for engagement and 4.53 for trust. Among 105 enrolled students, 91.6% had used GenAI before, for study or personal purposes, which limits how much of the ease finding belongs to the course design and how much to prior habit.

The authors' own reading is that structure did the work: a [[problem-based-learning|challenge-based]] sequence with [[collaborative-learning|group work]] and a visible end product gave students a reason to iterate. The weakest score, engagement at 3.88, is also the one that most needs a comparison group before it is read as a property of GenAI.

## Trust was high, and so was the demand for verification

The qualitative strand coded 98 open responses into motivation and engagement, effort, trust in results, and suggestions. Students described AI as a way to simplify complex tasks while insisting that good results required interaction, analysis and refinement. One wrote that GenAI saves time on initial concepts and requirements but needs careful evaluation, and that this is where knowledge and learning matter. Another described accepting a classmate's AI output without further iteration as the failure mode of the group work. The suggestions repeated the same theme from a different angle: real industrial examples, practitioners explaining how they use these tools, and more collaborative design sprints.

That combination, high trust alongside a demand for proof, is the finding a practitioner can use. It also marks the boundary of the evidence: ethical and responsible use was never measured as its own construct, only inferred from trust items and open comments, so the page should not be read as evidence that the course improved [[ai-literacy|AI literacy]].

## What this means for practice

- **Instructors:** schedule the moment the tool leaves the room. Restricting GenAI during solution selection, with criteria set in advance, is what turned the activity into judgment work.
- **Instructional designers:** build validation into the task itself, for example a required comparison of AI output against a second source, rather than adding a warning to the brief. Students already trusted the output; the design has to make checking unavoidable.
- **Instructors running group work:** assign the iteration explicitly. The reported failure was a group accepting an AI answer and stopping, so a team checkpoint on what changed after the first draft addresses the actual risk.
- **Administrators:** the requests students made were institutional, not technical. Industry case libraries, guest practitioners and longer design sprints need partnerships and scheduling, not another tool license.
- **Researchers:** treat the trust and engagement scores as descriptions of one cohort. Replications with a no-GenAI comparison arm are the missing piece.

## Limitations

- Single course, single institution, 105 second-year students with no prior formal AI training, so the findings describe that context rather than engineering education generally.
- No control group: challenge-based learning, design thinking and GenAI were delivered together, so no gain can be attributed to the tool.
- Self-report throughout, with common method bias not fully excluded; the authors report that one unrotated factor explained 50.6% of variance and advise caution.
- Engagement, the lowest-scoring construct, is measured with four survey items and no behavioral data, so it says little about what students did when nobody was asking.
- Ethical and responsible use was not measured directly, and the qualitative sample is the same cohort as the survey, which limits independence between the strands.

## Citation

Abril-Jimenez, P., Sanchez-Mateo, S., Garijo Alonso, L., & Rodriguez-Ortiz, A. (2026). [*Human-Centred Engineering Education for Industry 5.0 With Generative AI*](https://doi.org/10.1002/cae.70293). *Computer Applications in Engineering Education*, 34, e70293.
