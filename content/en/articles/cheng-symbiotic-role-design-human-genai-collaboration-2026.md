---
title: "Enhancing Human-Generative Artificial Intelligence Online Collaboration Outcomes: The Pivotal Function of Symbiotic Role Design"
created: "2026-09-29T20:05:00-04:00"
updated: "2026-09-29T20:05:00-04:00"
type: article
published: "2026-05-06"
page_kind: [evaluation]
research_method: [quasi-experiment, interviews]
level: [higher ed, graduate]
audience: [instructors, instructional designers]
confidence: medium
sources: ['raw/papers/cheng-symbiotic-role-design-human-genai-collaboration-2026.md']
pedagogy: [collaborative-learning, scaffolding, metacognition, self-regulated-learning, online-teaching-and-learning, distributed-cognition, student-ai-interaction]
technology: [generative-ai, llm, technology-acceptance-model]
foundations: [human-ai-collaboration, agency, theories-and-frameworks]
assessment: [self-report-measures, learning-gains]
methods: [mixed-methods-research, quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-29"
    agent: hermes-agent
---

> **Synthesis:** Grounded in symbiosis theory, Cheng and colleagues tested whether assigning explicit roles to learners and a [[generative-ai|generative AI]] partner improves [[collaborative-learning|collaborative knowledge construction]] in [[online-teaching-and-learning|online collaborative learning]]. In a pretest-posttest quasi-experiment, 58 [[higher-ed|graduate students]] discussed open-ended tasks in 16 groups across two recorded 50-minute sessions, both supported by the AI assistant Yuanbao; only the second assigned the roles of moderator, analyst, and arguer with rotation rules. Role design raised mind-map content scores (z = 3.771, p < 0.001) and the AI's [[technology-acceptance-model|perceived ease of use]] (p = 0.004), while [[cognitive-offloading|collaborative cognitive load]] rose moderately (p = 0.023). [[network-analysis|Lag sequential analysis]] found evaluation self-transitions and conflict-to-defending paths only after the intervention: the authors argue that [[human-ai-collaboration|human-machine symbiosis]] is a design problem, not a tool problem.

## Key Findings
1. **Role design raised knowledge-construction quality, not coverage.** Mind-map content scores rose from M = 3.65 to M = 4.59 on a 1-5 SOLO scale (z = 3.771, p < 0.001), while node and branch counts stayed statistically flat.
2. **Interaction shifted to higher-order moves.** Post-intervention coding found a new self-transition for the evaluate code and a conflict-to-defending path, replacing a pre-intervention questioning-and-clarification loop.
3. **Discussion became more regulated and less off-task.** The pre-intervention path from irrelevant remarks to task understanding disappeared, and planning and monitoring transitions increased, indicating stronger [[self-regulated-learning|regulatory cognition]].
4. **Cognitive load rose moderately.** Collaborative cognitive load increased from M = 4.02 to 4.19 (t = -2.332, p = 0.023, Cohen's d = 0.306) as students switched perspectives to perform each role.
5. **Perceived ease of use improved; usefulness only trended up.** Ease of use rose significantly from M = 4.02 to M = 4.28 (p = 0.004); usefulness rose from 4.16 to 4.31 without reaching significance (z = 1.809, p = 0.070).

## From tool to peer: the symbiosis role framework

The intervention turns [[human-ai-collaboration|human-machine symbiosis]] into three components: role assignment, role rotation, and AI role configuration. Three roles were defined — moderator, analyst, and arguer — with the moderator fixed to a learner and the analyst and arguer open to either a learner or the AI. Rotation rules specify that an analyst proposes, arguers respond, and roles then swap until consensus; the [[teacher-role|instructor]] explained the rules, and teaching assistants supported a 20-minute preparatory discussion. In the formal task the AI, configured through predefined [[prompt-engineering|prompts]], acted as an equal partner: arguer when a learner advanced a point, analyst when the group stalled. Because dialogue depends on members' [[prior-knowledge|background knowledge]], the authors frame symbiosis theory as an extension of [[distributed-cognition]] and treat role structure as [[scaffolding|collaboration scripting]] at the [[group-work|group]] level — a [[theories-and-frameworks|framework]], not a prompting recipe.

## Knowledge construction became more integrated

Mind maps were scored on structure (nodes, hierarchy, branching) and on content using the [[assessment|SOLO taxonomy]] from 1 (pre-structural) to 5 (extended abstract). Only content moved: the overall score improved by nearly a full band, while node and branch counts held steady and hierarchy depth fell. The authors read this as a shift from covering ground to organizing it. The artifact scores converged with the process data: higher-order codes such as evaluation appeared alongside the deeper content, and the authors argue that role assignments gave learners guided pathways for processing AI-generated input rather than accepting it. For [[learning-gains|collaborative knowledge construction outcomes]], a role intervention moves structure, not volume.

## Interaction patterns turned evaluative

Two coders scored the recordings across 11 codes in four dimensions (shared, divergent, elevating, and regulatory cognition), reaching an interrater agreement of k = 0.73 on the first group; lag sequential analysis in GSEQ 5.1 then mapped significant transitions. Before roles, groups cycled through task understanding, questioning, and clarifying; after roles, discussion moved from shared toward divergent cognition, with conflict leading to defense and support. The authors connect this to [[metacognition|metacognitive strategies]], arguing that defending a position forces reflection rather than retrieval, and that the new evaluation self-transition marks [[critical-thinking|higher-order thinking]] the tool alone did not produce. Off-task talk lost its significant path back to the task, and planning and monitoring transitions increased within learners' retained [[agency|agency]].

## The cost of structure: more effort, better experience

Perception data show a trade-off. [[cognitive-offloading|Collaborative cognitive load]] rose significantly (M = 4.02 to 4.19, p = 0.023, d = 0.306): students had to switch perspectives and strategies for each role. Yet perceived ease of use improved significantly and perceived usefulness trended upward (p = 0.070), so learners judged the AI partner better aligned with their needs despite the extra effort. Interviews echoed the pattern: one participant said role assignment "helped us know exactly when to call on the AI instead of relying on its answers from the start," and another found the process "a bit more complex, but it also made us think more carefully about who should lead each step." The authors conclude the added load was acceptable given the outcome gains, and suggest [[multimodal|multimodal interaction]] to lower role-switching costs. Both perception measures were [[self-report-measures|self-report]] questionnaires, and process data came from how learners [[student-ai-interaction|interacted with the AI]].

## What this means for practice

- **Instructors.** Assign moderator, analyst, and arguer roles explicitly before discussion begins and rotate them on rule, because the knowledge-construction gains and higher-order transitions appeared only when roles were in force.
- **Instructors.** Run a practice round before the real task — this study used 20 minutes with teaching assistants — and teach learners when to call on the AI rather than consult it first, since role switching raised cognitive load.
- **Instructional designers.** Configure the AI partner with explicit analyst and arguer prompts, route its output to the whole group, and build a preparatory role-practice round into the activity, since role switches caused the load increase.

## Limitations

- The convenience sample was 58 educational technology graduate students, 59 recruited with one missing submission, in one public university course in China, so a single cultural and disciplinary context bounds the results.
- The design was pretest-posttest with no separate control group, so practice effects cannot be ruled out, and the same 16 groups and AI tool were used in both sessions.
- Knowledge construction was scored from group mind maps and perception outcomes from self-report questionnaires, so individual learning gains cannot be separated from group artifacts.
- The paper names the AI assistant Yuanbao but gives no model version and no data-collection window, and it describes Yuanbao as developed by DeepSeek while crediting its interface to Tencent's yuanqi.tencent.com; the findings are scoped to that unnamed build.

## Citation

Cheng, N., Liu, H., Xu, X., Zhao, W., Qiao, L., & Zhang, G. (2026). [*Enhancing Human-Generative Artificial Intelligence Online Collaboration Outcomes: The Pivotal Function of Symbiotic Role Design*](https://doi.org/10.19173/irrodl.v27i2.9189). *International Review of Research in Open and Distributed Learning*, 27(2), 46-66.
