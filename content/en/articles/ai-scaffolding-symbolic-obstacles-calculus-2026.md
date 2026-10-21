---
title: Addressing symbolic obstacles in undergraduate calculus through artificial intelligence scaffolding
created: "2026-10-21T13:32:50-04:00"
updated: "2026-10-21T13:32:50-04:00"
type: article
sources: ['raw/papers/10.29333_pr_19631.md']
confidence: high
published: 2026-10-16
page_kind: [evaluation]
research_method: [case study, thematic analysis]
discipline: [math education]
level: [undergraduate, higher ed]
audience: [instructors, researchers]
pedagogy: [scaffolding, metacognition, embodied-learning, self-efficacy, anxiety-and-stress, self-regulated-learning]
technology: [visualization, adaptive-learning]
assessment: [feedback]
methods: [qualitative-research]
foundations: []
ethics: []
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-21"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Calculus students often recognize a curve's behavior, the area under it, or a changing slope yet cannot put any of that into limit, integral, or sigma notation. Nursit, Nusantara, and Hidayanto treat that gap as an [[embodied-learning|embodied]]-to-symbolic obstacle rather than a procedural slip, and read it through Tall's Three Worlds of Mathematics. In an intrinsic case study of 12 Indonesian undergraduate mathematics-education students, they combined diagnostic assessments, interviews, eight classroom observations, artifacts, and AI interaction logs to locate where representational meaning breaks down and how [[scaffolding|AI scaffolding]] — dynamic visualization, adaptive feedback, step-by-step guidance, and solution validation — was associated with students repairing it. Graph-to-symbol translation was the dominant obstacle, carrying 38 coded references across all 12 participants, and participant-level comparisons showed 27.4%–53.8% fewer coded symbolic errors after the AI-supported sequence. The authors are explicit that these are descriptive within-case patterns, not a causal effect of AI.

## Key Findings

- **A bounded intrinsic case.** Twelve undergraduate [[math-education|mathematics-education]] students in semesters 1–3 at one university in Malang, East Java, Indonesia; the case was bounded by the topics of limits, derivatives, and integrals and by eight observed learning sessions. Evidence came from five sources: written diagnostic pre- and post-assessments, semi-structured interviews of approximately 45–60 minutes, non-participant classroom observations, academic artifacts, and AI interaction logs.
- **Four symbolic obstacles, led by graph-to-symbol translation.** Graph-to-symbol translation was the dominant category with 38 coded references across all 12 participants, followed by integral and sigma notation (26 references, 11 of 12 participants), limit notation (24 references, 10 of 12) and symbolic algebraic manipulation (19 references, 9 of 12). The pattern was not missing intuition: students described a curve's behavior, an area, or a change in slope but did not encode it, producing misplaced bounds, confused dx and sigma indices, or transformations that broke the equality they meant to preserve.
- **The embodied-to-symbolic transition was the principal bottleneck.** Formal explanations — linking graphical behavior to a definition, justifying a derivative relationship, or explaining accumulation from a theorem — appeared in only three of the 12 participants; the others stayed at an embodied account or produced a symbolic procedure with no stable conceptual justification.
- **Fewer coded symbolic errors after the sequence, descriptively.** Within-participant comparisons showed fewer coded symbolic-error occurrences in the post-activity materials for all 12 participants, with percentage reductions from 27.4% to 53.8%, a mean reduction of 42.3% and a median of 40.4%. Six participants fell in the high-reduction group (>40%) and six in the moderate group (25%–40%]; none was classified low (<= 25%). Student-06 showed the largest reduction (53.8%) and Student-08 the smallest (27.4%). No inferential significance test or causal-effect estimate was calculated.
- **Four scaffolding mechanisms, ranked by coded prevalence.** Dynamic visualization (42 references), adaptive feedback (35), tiered step-by-step guidance (31), and solution validation (22). The AI offered three escalating levels of support — intuitive or visual prompts, symbolic or procedural guidance, and formal justification or verification — with higher-level suggestions provided only when earlier support was insufficient.
- **Adaptive strategies and self-reported affective change.** Students cycled among graphical, numerical, verbal, and symbolic representations, consulted recursively after feedback rather than accepting the first response, compared their work with peers or alternative solutions, and engaged in [[metacognition|metacognitive reflection]] on the source of an error. Ten of the 12 participants reported less [[anxiety-and-stress|mathematics anxiety]] during or after the supported activities and 11 reported greater confidence in attempting calculus tasks; the authors present these as interview reports rather than scores on a psychological scale.

## Four obstacles, one representational-procedural bottleneck

The study's organizing claim is that a wrong symbol is not a single transcription or procedural error. It can signal an underlying disruption in how mathematical meaning is created and recorded across representations. Students could describe the visual tendency of a function, an area image, or a rapidly changing slope, but their written expressions did not carry those elements, so $dx$, integral bounds, sigma indices, and limit markers were handled as procedural additions rather than as mathematical elements.

The authors separate two dimensions that are usually conflated. The representational dimension is the continuation of meaning across graphs, verbal explanations, tables, and symbolic expressions; the procedural dimension is the production of mathematically correct transformations once an expression has been set up. A student can apply a procedure correctly to the wrong symbolic model, or reverse-engineer the model while transforming it incorrectly. The instructional consequence they draw is that teaching should diagnose the meaning represented and the validity of the symbolic steps as separate questions, rather than reading every error as a weakness in procedure.

Read through Tall's framework, the symbolic world is treated as a hinge rather than a rung. Participants reached embodied meaning through curves, areas, slopes, and visual change, but their ability to attach formal or semi-formal explanation to that meaning depended on first encoding it in a stable symbolic form. The authors note that the interaction logs and diagnostic responses show continued movement among the three worlds rather than a fixed developmental sequence: students returned to graphs after a symbolic mistake, compared visual and algebraic results, and altered notation after feedback.

## How AI scaffolding was associated with students' revisions

The four mechanisms carried different representational properties. [[visualization|Dynamic visualization]] made relationships among curves, numerical values, slopes, areas, and symbolic expressions more evident, but the authors do not claim it produced formal reasoning on its own — stronger sequences ended with a student-generated explanation of why a revised representation was consistent with the graph, the procedure, or a definition. [[feedback|Adaptive feedback]] targeted a particular symbolic inconsistency instead of marking a final answer wrong, which supported error monitoring and revision inside the symbolic world. Tiered guidance split a representational transition into actionable steps, and validation required students to judge whether a discrepancy between their own reasoning and generated output was an error or an equivalent form.

The study frames the resulting activity as a recurring sequence of observing, predicting, encoding, checking, and explaining, drawn from triangulated data rather than proposed as a cognitive pathway. It also sets a boundary around the construct: AI scaffolding is defined as contingent and gradually fading support, so repeated questioning that supplies increasingly explicit answers without the student constructing or validating a rationale reads as over-scaffolding rather than assistance. Validation matters further because generated answers are not reliably correct — the authors cite variability and repeated errors when GPT models solve college calculus problems — so AI output belongs in the role of conjecture or comparison object rather than mathematical authority. The authors read the recursive consultation, comparison of manual and generated work, representation cycling, and reflection on feedback as sometimes part of a [[self-regulated-learning|self-regulatory process]] rather than as tool use alone.

## What the interaction logs and rubrics could show

Two apparatus choices carry the study's inferences. Each diagnostic sub-item received a level-of-evidence score (2 coherent, 1 partial, 0 incorrect or unsupported), and individual symbolic steps were scored with a symbolic-error rubric in which Levels 0–1 counted as errors and Levels 2–3 as non-errors; the unit of analysis was one scorable symbolic step per problem per participant, so denominators varied slightly. Error rate was defined as the number of incorrect symbolic steps divided by the number of evaluated symbolic steps, a normalized descriptive indicator the authors deliberately keep separate from the percentage reduction in coded error occurrences.

The AI logs recorded prompts, hint levels, responses, revisions, and outputs, which let the analysis identify when a student asked for visual support, changed a symbolic expression, compared outputs, or shifted toward explanation — process evidence of representational activity rather than a summary read off the final answer. The authors pair this with an explicit limit: the logs should not be treated as an indication of cognitive function, and NVivo reference counts indicate the prevalence of coded instances within the corpus, not effect sizes or statistical correlations. Trustworthiness rested on triangulation across the five data sources, member checking of interpretive summaries, independent coding of at least 25% of the [[qualitative-research|qualitative corpus]] by a second researcher, peer debriefing, reflexive journaling, and an audit trail of instrument versions and coding decisions.

## What this means for practice

- **Instructors.** Locate the obstacle before assisting. The sequence the authors recommend starts with an embodied, intuitive, or visual prompt, then requires the student to create the symbolic representation themselves, then gives step-specific feedback that does not replace the student's solution process, and ends by fading AI support into an unaided transfer task.
- **Instructors.** Diagnose meaning and procedure separately. A student can hold the right graphical meaning while writing the wrong symbolic model, so check both what the notation is supposed to represent and whether each transformation is valid before classifying the error.
- **Instructors.** Do not let visualization stay observational. Require students to state what remains invariant, explain how the graph constrains the symbolic expression, and produce the notation themselves, or a dynamic display becomes a picture rather than a bridge to symbolic reasoning.
- **Assessment designers.** Score symbolic steps rather than only final answers. A symbolic-step rubric shows where a transformation fails, and cross-representation items test whether graphical, symbolic, and verbal responses agree; AI interaction logs can supplement this with revision and checking behavior, but log frequency alone should not be read as learning quality.
- **Designers.** Treat generated output as a comparison object. Validation was productive when students had to explain whether a discrepancy was an error or an equivalent form, keeping the learner in the position of the one who justifies the revision.

## Limitations

- The case is 12 students at a single university, and the authors present it as context-specific analysis rather than statistical generalization; replication across institutions, programs, and regions is needed to tell which patterns are stable and which depend on local curriculum, language, technology access, or teaching culture.
- The diagnostic instrument was oriented toward symbolic representations and transformations only. It did not evaluate proof competence, conceptual understanding across the whole calculus curriculum, or long-term retention.
- The pre-post descriptive changes cannot separate AI support from practice, repeated practice with the tasks, classroom instruction, peer interaction, or knowledge of the assessment, and the study had no random assignment and no comparison group.
- Dependency after scaffolding was removed was not investigated in depth; the authors call for comparing fading schedules and for process analyses that distinguish productive help-seeking from answer-seeking.
- Affective responses rested on qualitative reports rather than standardized instruments, so the changes participants described in mathematics anxiety and [[self-efficacy|self-efficacy]] should be read as their accounts and not as changes to stable psychological constructs.

## Citation

Nursit, I., Nusantara, T., & Hidayanto, E. (2026). [*Addressing symbolic obstacles in undergraduate calculus through artificial intelligence scaffolding*](https://doi.org/10.29333/pr/19631). Pedagogical Research, 11(4), em0295.
