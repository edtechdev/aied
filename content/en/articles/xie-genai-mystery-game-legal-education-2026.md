---
title: "GenAI-enabled educational game development: the effects of a scripted mystery role-playing game on students’ learning experience and learning outcomes in legal education"
created: "2026-11-01T08:06:18-05:00"
updated: "2026-11-02T06:45:00-05:00"
type: article
sources: ['raw/papers/xie-genai-mystery-game-legal-education-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment, interviews]
discipline: [legal education]
level: [higher ed, undergraduate]
audience: [instructors, instructional designers, faculty developers]
technology: [generative-ai]
pedagogy: [game-based-learning, student-engagement, motivation]
assessment: [learning-gains]
foundations: [learning-design]
methods: [rct, mixed-methods-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A [[rct|randomized trial]] with 84 undergraduate law students at one Chinese university compared an offline [[game-based-learning|mystery role-playing game]] against the same instructor's lecture on the same content, and the game group scored substantially higher on a post-test of legal knowledge and reasoning, *F*(1, 81) = 105.61, *p* < .001, partial *η*² = 0.566. The design detail that matters most is who the model served: Gemini 3 Pro was used by the research team to draft character scripts, not by students, so this is evidence about [[generative-ai|GenAI]] as an authoring aid for educational games rather than about AI in the student's hands. Interviews with 24 participants describe immersion, knowledge mobilisation and reflection on their own gaps.

## Key Findings

1. Eighty-four [[higher-ed|undergraduate]] law students at a single Chinese university were assigned by drawing lots to the game condition (*N* = 42) or to lecture-based instruction (*N* = 42), with the same instructor, intended content, learning objectives and time allocation in both arms.
2. The game was a Scripted Mystery Role-Playing Game built on *The Case of the Speluncean Explorers*, with seven characters of differing identity, personality, strengths and weaknesses, played in six stable groups of seven.
3. Gemini 3 Pro, accessed through the [[conversational-ai|chatbot]] interface, was used only during development: the team prompted it with the case facts, objectives and character specifications to draft character profiles, role information and narrative material.
4. After controlling for pre-test scores, the game group's post-test performance was significantly higher, *F*(1, 81) = 105.61, *p* < .001, partial *η*² = 0.566 — a large effect for a single-unit intervention.
5. Both pre- and post-tests combined knowledge items on legal concepts, principles and rules with logical-reasoning items requiring application of legal principles to concrete scenarios, scored against the course syllabus and objectives.
6. Interviews with 24 students described reasoning scenarios and role interaction as producing immersion, greater willingness to participate, opportunities to mobilise and apply knowledge, sustained [[motivation]], and [[reflection]] on their own gaps in legal terminology and knowledge.
7. The authors state plainly that the study did not isolate GenAI's independent contribution from the game format itself, and propose comparing otherwise equivalent games built with and without GenAI assistance.

## What was built, and where the model actually sat

The intervention is an offline game, which is the reason it can be run in an ordinary classroom without devices or connectivity. Its content came from the classic jurisprudence case in which explorers stranded in a cave make a life-and-death decision and the law must decide how to judge it — a scenario chosen because it forces a conflict between legal norms, moral judgment and social responsibility rather than a recall question.

[[learning-design|Learning design]] work happened in the authoring layer. The research team wrote the prompts the model received: key case facts, the intended instructional objectives, and predefined requirements for each character's identity, personality traits, strengths, weaknesses, relationships and position on the central legal and ethical questions. The model returned draft profiles and narrative material that the team then selected from and shaped. That division of labor is the honest description of "GenAI-assisted": the model widened the draft space, the designers kept [[evaluative-judgment|judgment]].

Nothing in the [[student-experience|student experience]] involved AI. Students read scripts, argued positions, made decisions and discussed. Any effect on learning therefore travels through the game's structure — role, stakes, reasoning demand, group interaction — and the interest of the paper is that a GenAI-assisted authoring workflow can produce a game strong enough to beat a lecture, not that a model taught anyone.

## Why this comparison is cleaner than most game studies

Many educational-game evaluations compare a game to "teaching as usual", which conflates the format with whatever else differed: content coverage, instructor enthusiasm, time on task. Here the same instructor taught both arms, with the same intended content, the same objectives and the same instructional period and time allocation. Group membership stayed fixed across the game, as the rules required.

The outcome measures are also [[curriculum-design|curriculum]]-bound rather than generic. Knowledge items were scored on accuracy and completeness of legal concepts and rules; reasoning items on the ability to apply principles to specific scenarios — the distinction [[legal-education|legal education]] cares about, since knowing a rule and reasoning with it are different achievements. A large *η*² on that pair of measures is a stronger claim than a satisfaction survey would support.

What the comparison still cannot do is separate the game from its novelty. Students in the game arm encountered a format unlike their usual lectures, and the authors name the novelty effect as a live alternative explanation rather than dismissing it. Six game groups also limit how reliably within-group dependence can be estimated.

## What the interviews add, and what they cannot carry

The [[qualitative-research|qualitative]] arm explains the mechanism the test scores cannot. Participants described reasoning scenarios and role interaction as immersive; they reported that articulating a position in professional legal terminology exposed gaps in their own knowledge, and that the exposure increased rather than reduced their willingness to stay engaged. That is a [[desirable-difficulties|productive difficulty]] pattern rather than a comfort story: the game made their limits visible in a setting where they could act on them.

The interviews were conducted with 24 of the 42 students in the game arm, after the fact, and they are self-reports of experience. They do not establish that reflection caused the test gain, and they cannot speak to whether the same reflective response would survive a second or third play of the same game.

For [[student-engagement|engagement]], the practical lesson is narrower than "games work". The interviews point at three specific design features — a role with a stake in the outcome, material that requires reasoning rather than recall, and group discussion that surfaces disagreement — and those are transferable to non-game formats.

## What this means for practice

- **Instructors.** Use a model to draft the parts of a scenario that are expensive to write — character backstories, role-specific information, narrative framing — and keep the [[pedagogy|pedagogical]] decisions, the objectives and the discussion design with the teaching team.
- **Instructional designers.** Budget the authoring workflow, not the student-facing technology. This intervention needed no devices in class; the GenAI effort went into producing a case, seven characters and scripted material that could be reused across sections.
- **Faculty developers.** Note the authors' own warning: building games this way requires a level of [[ai-literacy|AI literacy]] that many teachers do not yet have, and the paper's answer is design guidance and training support rather than assuming it.
- **Researchers.** Isolate the format from the authoring aid. The next informative trial compares one game built with GenAI assistance against the same game built without it, because this design cannot separate the two.

## Limitations

- The study did not isolate GenAI's independent contribution to the observed outcomes; no comparison game was built without model assistance.
- Participants were undergraduate law students at a single Chinese university working within one legal-learning context, which limits transfer to other institutions, disciplines and cultures.
- A novelty effect cannot be excluded, since the game replaced a lecture format students were used to.
- The experimental arm contained only six game groups, limiting the reliability of within-group dependence estimates.
- Institutional restrictions prevented disclosure of specific assessment items and scoring criteria, so the assessment component cannot be independently replicated.
- Building comparable games without GenAI assistance requires teachers to hold a level of AI literacy the paper does not measure.

## Citation

Xie, Z., Zhao, S., Hong, F., & Duan, Z. (2026). [GenAI-enabled educational game development: the effects of a scripted mystery role-playing game on students’ learning experience and learning outcomes in legal education](https://doi.org/10.1186/s41239-026-00634-5). *International Journal of Educational Technology in Higher Education, 23*(1), 59.
