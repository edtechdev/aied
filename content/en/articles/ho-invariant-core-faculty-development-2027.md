---
title: "Invariant Core, Changing Times: Rethinking Faculty Development for Teaching in the Generative AI Era"
created: "2026-11-16T10:30:00-05:00"
updated: "2026-11-16T10:30:00-05:00"
type: article
authors: ["Ho, S. Y."]
published: "2026-10-31"
venue: "Frontiers of Digital Education 4(1), article 7"
source_url: https://doi.org/10.1007/s44366-027-0116-4
foundations: [cognitive-offloading, educational-development, teacher-role]
pedagogy: [desirable-difficulties, scaffolding, transfer-of-learning, embodied-learning]
technology: [generative-ai, vibe-coding]
discipline: [physics education]
assessment: [evaluative-judgment, process-oriented-assessment, assessment]
ethics: [ethics]
research_method: [position paper]
evidence_context: educational
level: [higher ed]
audience: [faculty developers, instructors, administrators]
page_kind: [commentary]
sources: ['raw/papers/ho-invariant-core-faculty-development-2027.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Ho (2026) argues that [[educational-development|faculty development]] should be organized around an invariant core and a moving edge. The core is that learning is a neuropsychological process in which cognition and affect cannot be separated; the edge is technology, disciplines, and the priorities of society and employers. Using Biggs' SOLO taxonomy, he contends that [[generative-ai|GenAI]] has crossed a line the internet did not: a well-prompted model now produces artifacts with relational-level structure, so a student can submit the artifact while bypassing the relational thinking the task was designed to elicit. The test he proposes for [[cognitive-offloading|offloading]] is whether the process being bypassed is constitutive of the intended learning outcome — the same act harms learning in an introductory programming course and augments it in a prototyping course. Three shifts follow: deepen faculty knowledge of how learning works, move from adopting educational technology to authoring it, and extend the researcher's scholarly identity to teaching. Faculty development, on this view, is less about adding tools than about deepening a discipline of design.

*No primary data: this is a single-author conceptual article with no dataset and no method section. The trials it cites were run by other researchers, mostly with secondary-school students, and the two-hour tool-building episode described below is the author's own unreplicated account rather than a study.*

## Key Findings

- **The core is neither content nor a skill; it is the mechanism.** Ho grounds the argument in attention, interpretation, memory, reasoning, affect, persistence and effort regulation, and in the finding that the cognitive and affective dimensions are deeply intertwined (Immordino-Yang & Damasio, 2007; Pessoa, 2008). His orienting principle, compressed into a phrase of his own coinage adapted from classical Chinese sources, is to anchor in the unchanging core and move in step with the times. That core can anchor because of a claim about timescales: the neuropsychological basis of learning does not change on technological or societal timescales. He adds that the core is not static, since learning remains an active research area, which is why the third shift is scholarly rather than technical.
- **Affect is the trap, not a side issue.** Learners judge how well they are learning by how fluent the material feels, and the feeling misleads: rereading raises confidence in recall while delayed retention falls behind retrieval practice (Roediger & Karpicke, 2006). Difficulty often signals that learning is working, a [[desirable-difficulties|desirable difficulty]] (Bjork & Bjork, 2011), but it feels like failure, so learners abandon the effort that was serving them. Ho adopts Lodge's (2025) image of GenAI as the "e-bike of the mind" — efficient arrival, no exertion — and draws the consequence: in learning, unlike travel, the exertion is the point. The tool's appeal, relief from mental strain, works directly against the process the strain accompanies.
- **SOLO explains what changed, and why assessment has to move.** The internet made multistructural, surface-level tasks easier, but for a well-designed relational task the learner still had to make the connections. GenAI produces the relational artifact on request. Ho's point is that the artifact no longer provides evidence of the thinking, which shifts the weighting of assessment from end products toward the process of producing them. Evaluating process needs extended observation and data collection, exactly what limited staffing constrains — which is where faculty authoring their own tools becomes an assessment argument rather than a hobby.
- **The right question about offloading is constitutive, not categorical.** In a randomized field experiment with nearly a thousand high-school mathematics students, those given a standard chatbot scored higher during practice but lower than non-users on a later unassisted exam, and the harm largely disappeared when the assistant was redesigned to give teacher-crafted hints (Bastani et al., 2025). A 30-month panel of 26,811 Chinese secondary students, in a working paper not yet peer reviewed, found higher homework scores and lower unassisted exam performance, with the penalty concentrated among the roughly 80% whose behavior resembled homework outsourcing (Strömberg et al., 2026). In an introductory computer science course, AI writing the code bypasses the skill the course exists to teach; in a prototyping course it frees time for design exploration. The diagnostic is whether the bypassed effort is constitutive of the outcome.
- **Pedagogical authoring changes who designs, and that is a faculty development claim.** Because AI-assisted coding lowers the barrier, a non-programmer can [[vibe-coding|prompt-code]] a program, and agentic environments can plan, write and test software from a natural-language description. Ho reports his own exploratory trial: a three-level physics game on projectile motion, prompted and iteratively enhanced in about twenty prompts within two hours and ready for classroom piloting. What matters is that design judgments once held by developers of tutoring systems can now rest with the teacher, who can build scaffolding and encouragement into the tool. He names the caveats a faculty developer would enforce: file-system access requires isolation, cybersecurity prompting is a start rather than sufficient, and tools collecting student data go through institutional review.
- **Curriculum is a Jenga tower, and the scholarly teacher is the third shift.** His illustration is the analog clock: apparently obsolete once digital displays are everywhere, yet a dense carrier of fractions, multiples of five, angles, and the resolution of ambiguity when the hour hand sits between two numbers. Curriculum reduction is necessary as job skills change, but some blocks are load-bearing in ways not visible from outside. He makes the same point with programming: assembly language moved from a required core course to a section taught for systems literacy, and what became universal in Singapore was computational thinking rather than any tool. The role that follows is the scholarly teacher — teaching as inquiry subject to evidence, reflection and peer review, reading societal signals as design inputs, and modeling the ethical practices of the discipline.

## What this means for practice

- **Name the constitutive process before choosing the tool.** For each assignment, write down the process it certifies — integrating constructs into a working program, interpreting ambiguous data, defending a judgment — and decide what may be offloaded against that sentence rather than a general policy on AI.
- **Build desirable difficulty in, and say so out loud.** Students read effort as failure. Tell them which struggle is the learning and why; otherwise the tools will keep winning the argument about how learning should feel.
- **Weight assessment toward process, and build the means to see it.** A final artifact is now cheap to produce. Supervised in-class work, iterative drafts, oral defense and tracked revision are not, and capturing them requires tools and time that a department has to allocate deliberately.
- **Author small tools instead of buying large ones, then review them like institutional software.** A teacher-built tutor can carry pedagogical decisions that a vendor's product will not. Run it in a sandbox, keep student data inside the institution's review process, and treat the security question as unresolved.
- **Apply the same test to faculty development itself.** A program that generates its own materials with AI faces the question it teaches faculty to ask, and polished syllabi are as easy to produce without thought as student essays are.

## Limitations

- **There is no method and no data.** The article is a conceptual argument with citations: no search strategy, no inclusion criteria, no analysis procedure, no dataset. Its empirical claims rest on studies selected to support the framework.
- **The offloading evidence comes from secondary-school mathematics.** Both trials concern school-level mathematics, and transfer to university teaching — let alone to history, design or clinical education — is asserted rather than demonstrated. The 26,811-student panel is an unreviewed working paper.
- **The tool-building episode is one anecdote.** A single physics game, built by the author, in about twenty prompts, in two hours, with no classroom trial, no learning outcome and no comparison condition. It illustrates feasibility and establishes nothing about whether students learn more.
- **The constitutive test is a judgment rule, not a measurement.** It tells faculty how to decide, but offers no evidence that different faculty applying it reach the same decision, and in contested disciplines the disagreement is precisely about what counts as constitutive.
- **The curriculum argument is illustrative history.** The analog clock and assembly language are persuasive examples, not evidence that removing such content harms learning, and the paper does not engage the counter-case that some load-bearing content is defended mainly by tradition.
- **Cost, workload and equity are absent.** Authoring tools and process analytics take time and support staff many institutions lack, and the Go and mathematics examples are elite contexts.

## Citation

Ho, S. Y. (2026). [*Invariant Core, Changing Times: Rethinking Faculty Development for Teaching in the Generative AI Era*](https://doi.org/10.1007/s44366-027-0116-4). *Frontiers of Digital Education, 4*(1), article 7.
