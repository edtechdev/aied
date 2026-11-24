---
title: "Managing uncertainty in teacher vibe coding: a comparison of teacher and expert workflows"
created: "2026-11-24T09:50:00-05:00"
updated: "2026-11-24T09:50:00-05:00"
type: article
authors: ["Jiaju Lin", "Ellen Wenting Zou"]
venue: "AERA 2027 Annual Meeting (accepted)"
evidence_context: educational
foundations: [teacher-role]
pedagogy: [scaffolding]
technology: [vibe-coding, generative-ai, llm]
methods: [qualitative-research]
discipline: [teacher education]
audience: [instructors, faculty developers, educational technology developers, researchers]
page_kind: [framework]
research_method: [thematic analysis]
sources: ["raw/papers/lin-teacher-vibe-coding-uncertainty-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-24"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Lin and Zou (2026) compare how 15 pre-service teachers, 13 in-service teachers, and 10 coding experts [[vibe-coding|vibe code]] educational web apps in think-aloud sessions, in order to understand what expertise [[teacher-role|teachers]] bring to AI-assisted authoring. Across all three groups the work follows a loop of problem framing, development, and verification governed by uncertainty management, but the groups reduce uncertainty differently: pre-service teachers draw on pedagogical principles, in-service teachers ground designs in everyday classroom challenges, and experts constrain requirements, decompose artifacts, and automate tests. Artifacts differed accordingly under the replacement–amplification–transformation framework, with in-service teachers producing mostly replacements (8 of 13) and pre-service teachers mostly amplifications (9 of 15). The authors argue that effective educational [[vibe-coding]] integrates pedagogical, contextual, and technical expertise, and that preparing teachers means supporting all three rather than only prompting skill.

*Qualitative comparative study using remote Zoom sessions with background interviews, a 30-minute development task, and post-task debriefing; data included questionnaires, interviews, screen recordings, verbalizations, and coding traces, with inter-rater agreement above 90%.*

## Key Findings

- **Vibe coding runs as an uncertainty-managed loop.** Problem framing, development, and verification recur across all three groups, and each stage carries its own uncertainty about goals, AI capability, and artifact quality.
- **Teachers start from teaching struggles, experts start from specifications.** In-service teachers built tools that automated familiar routines (replacement 8/13); pre-service teachers more often designed new learning experiences such as mission-based games or reading assistants (amplification 9/15, transformation 1/15).
- **Beliefs about the technology reshape the design.** Participants discarded ideas they judged too complex for vibe coding; one pre-service teacher envisioned an AI tutor for every student but produced a multi-module course instead.
- **Prototypes make requirements concrete.** Problem framing did not precede prompting in a linear way; many teachers reported that their requirements became clear only after seeing a functioning webpage.
- **Experts reduce uncertainty structurally.** They used ambiguity checks, success criteria, feasibility assessments, and iterative negotiation with the AI, including asking the AI to pose clarifying questions.
- **Verification links back to framing.** Experts defined quality gates and revised them when failures emerged, connecting verification to the original problem rather than treating it as a final check.

## How the three groups differ

The study's central observation is that [[vibe-coding|natural-language software development]] removes syntax but not design judgment. Teachers entered the task with an authentic teaching struggle and had to convert it into a requirement an LLM could act on. Pre-service teachers tended toward amplification and transformation because they framed problems through pedagogical principles — a mission-based game, an immediate reading assistant, a collaborative historical modeling game. In-service teachers tended toward replacement because their problems were routines they already knew: weekly reading checks with automated assessment, tablet-based worksheets, tools fitting "the lesson I already teach". That difference is not a deficiency but a different knowledge base, and it suggests that pre-service and in-service teachers need different support.

Experts behaved differently again. Where teachers used the AI to explore whether an idea was feasible, experts ran narrow micro-experiments to establish the AI's limits before committing, asked the model clarifying questions, decomposed artifacts into testable modules, and automated checks. The authors read this as complementary expertise: pedagogical, contextual, and technical. None of the three alone produced reliable educational applications, which is why the paper argues for integrating them in teacher preparation.

## What uncertainty management explains

Framing, development, and verification are not sequential stages but a loop that repeats as certainty changes. A prototype can reveal a constraint the original prompt did not express; a failed test can send the builder back to reframe the problem. This explains two otherwise puzzling behaviors: teachers abandoning ambitious first ideas, and teachers discovering requirements only after a working page existed. Both are rational responses to uncertainty rather than evidence of poor planning.

For practice, the implication is that training should target uncertainty management directly. Prompt templates help with components, but the hard part is deciding what to build, judging whether the model can build it, and knowing when the result is good enough. The authors propose translating these workflow findings into instructional sequences and [[scaffolding|scaffolds]] that develop both technical reliability and pedagogical value.

## What this means for practice

- **Teacher educators.** Treat vibe coding as design work, not prompt typing. Have pre-service teachers articulate the teaching problem before they prompt, and require a stated quality criterion before anyone calls an artifact finished.
- **In-service instructors.** Start from a routine you know well, then decide explicitly whether the tool replaces, amplifies, or transforms it; replacement-only projects build the least pedagogical judgment.
- **Faculty developers.** Pair teachers with technical collaborators where possible, and make the expert moves — ambiguity checks, module decomposition, automated checks — visible as habits rather than assumed knowledge.
- **Educational technology developers.** Build micro-experimentation into authoring tools: small probes of model capability, visible success criteria, and checks that reconnect the artifact to the original teaching goal.

## Limitations

- The sample is 15 pre-service teachers, 13 in-service teachers, and 10 expert developers in remote, 30-minute sessions, so the workflows reflect short tasks rather than sustained development over weeks.
- Think-aloud protocols capture stated reasoning, which may differ from unobserved practice, and the presence of a researcher can shape what participants attempt.
- Expert participants are coding experts rather than educational-technology professionals, so the technical comparison does not represent the developers who actually build classroom tools.
- The study is qualitative and descriptive; it identifies patterns and proposes a conceptualization but does not test whether the proposed supports improve reliability or learning.
- The RAT classification of artifacts was assigned by the research team and depends on interpretive judgment about intent and effect.
- The findings come from a single authoring context and platform, which limits generalization to other [[vibe-coding]] environments.

## Citation

Lin, J., & Zou, E. W. (2026). [Managing uncertainty in teacher vibe coding: a comparison of teacher and expert workflows](https://arxiv.org/abs/2611.29698). *Accepted for presentation at the 2027 American Educational Research Association Annual Meeting.*
