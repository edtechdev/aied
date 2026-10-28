---
title: "Preparing Students for AI-Driven Agile Development: A Project-Based AI Engineering Curriculum"
created: "2026-10-27T09:53:00-04:00"
updated: "2026-10-27T09:53:00-04:00"
type: article
authors: ["Rausch, A."]
published: "2026"
venue: "Agile Processes in Software Engineering and Extreme Programming – Workshops (XP 2026)"
source_url: https://doi.org/10.1007/978-3-032-39205-3_16
sources: ['raw/papers/project-based-ai-engineering-curriculum-agile-2026.md']
confidence: high
contributors: [editor]
source_depth: full text
verified: [citation, numbers, links]
page_kind: [framework]
research_method: [case study]
discipline: [cs education, engineering education]
level: [higher ed, undergraduate]
audience: [curriculum designers, instructors, faculty developers, administrators]
pedagogy: [project-based-learning, collaborative-learning, experiential-learning]
technology: [generative-ai, vibe-coding]
assessment: [oral-assessment, group-work]
foundations: [ai-literacy, human-ai-collaboration]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-27"
    agent: hermes-agent
---

> **Synthesis:** Most engineering programs still teach agile methods and AI competencies as separate, lecture-based modules, which prepares students for a workplace that no longer exists. This paper describes the AI Engineering bachelor program at TU Clausthal, where roughly a third of the workload sits in project formats and second-semester students run a realistic product over seven two-week sprints with [[generative-ai|generative AI]] embedded in requirements clarification, backlog refinement, architectural reasoning, coding, testing and documentation. The [[curriculum-design|curriculum]] is organized by eight principles and a shared core plus specialization tracks. The reported evidence is modest but concrete: over three completed runs, the average missing ECTS fell from 25% in the WS 2021 cohort to 3% by WS 2024, and the lessons learned point to agile teaching, [[oral-assessment|oral examinations]] and the fact that students now treat a [[conversational-ai|chatbot]] as a team member.

## Key Findings

- **Integration, not addition.** AI tools are woven through the agile ceremonies themselves, and students must also specify what remains a human responsibility: acceptance criteria, [[ethics|ethics trade-offs]], and accountability.
- **Project work is a structural commitment.** About one third of the program's workload is project-based, distributed across semesters so that agile practice and AI use are repeated rather than demonstrated once.
- **The German higher-education market under-delivers on practice.** Of 47 AI-centered engineering programs surveyed as of November 2025, only three require project work exceeding 12 ECTS, and none recognizes software engineering as a primary application domain.
- **Completion improved sharply across cohorts.** Average missing ECTS dropped from 25% in WS 2021 to 3% in WS 2024, the authors' main quantitative signal that the format works.
- **Assessment had to become individual and oral.** Three runs convinced the authors that oral examinations are essential to check that students grasp foundational concepts rather than deferring to AI.
- **Students personify the tools.** Teams began describing ChatGPT as an additional team member, which the authors flag as a dynamic future work must track.

## A program built around practice

The AI Engineering program combines a shared core, [[cs-education|programming]] and software foundations, [[ai-literacy]] and data skills, and agile development practices, with [[discipline-specific-aied]] such as AI Software Engineering, AI Mechanical Engineering and AI Material Engineering. The design intent is that AI is treated as a tool for engineering rather than only as a product being built, so students in each track use AI within their own domain's constraints.

Eight principles guide the whole program: shaping digital transformation; technological innovation with quality and sustainability; human–AI collaboration; project-based learning; agility and reflection; practical relevance; entrepreneurship; and interdisciplinary teamwork. The authors treat the curriculum itself as an agile system, revised with input from students, educators, industry and societal [[stakeholders]], which is why the program structure appears in the paper as a model curriculum that has already changed several times.

## Seven sprints, and where the AI sits

The case study cohort is second-semester bachelor students who arrive with Python, Java object-oriented programming, Git, UML modeling, Scrum and project management from prior courses. Their task is to convert those basics into AI-enabled team development: derive a domain model and use-case diagrams, write epics and user stories, estimate, design a high-level architecture, and adopt automated unit testing, clean code and CI/CD. AI support is expected at each of those steps and, crucially, is expected to be used critically, with justification for what was delegated and what was not.

Reflection is scheduled rather than hoped for. Because the projects run in an interdisciplinary setting with evolving requirements, the review points become the place where quality, traceability and responsibility are examined, and where the difference between an AI-assisted artifact a team can defend and one it cannot is made explicit.

## Lessons from three runs

The first lesson is institutional agility: production-ready AI tooling arrived mid-project, and the teaching team had to integrate Copilot and agentic frameworks while the semester was running, which argues for a curriculum designed to absorb tools that do not exist at planning time. The second is [[assessment]]: with AI available for every artifact, individual oral examination became the mechanism that distinguishes understanding from output, and the authors treat it as non-negotiable. The third is that personification changes team dynamics, since students who treat a chatbot as a colleague will attribute judgment to it unless the boundary is taught.

The completion figures should be read as program-level outcomes rather than a controlled effect. Missing ECTS dropped from 25% to 3% across cohorts, but the program, the cohort, the assessment regime and the AI tooling all changed together, and the sample is one institution's program in one country.

## What this means for practice

- **Put the AI inside the ceremonies, not in a separate module.** Have students use it for backlog refinement, architectural reasoning and test generation, and require a written justification of what was delegated.
- **Keep at least one individual oral assessment.** When every artifact can be generated, an in-person check of foundational concepts is the only remaining evidence of understanding.
- **Schedule reflection on human responsibility.** Specify in the project brief who owns acceptance criteria, risk trade-offs and accountability, and review those decisions at each sprint boundary.
- **Teach the tool boundary explicitly.** If students personify the assistant, name the difference between a collaborator and a tool before team roles harden around it.
- **For curriculum designers, budget project credits.** A program with AI content but fewer than 12 ECTS of project work is the pattern this paper argues against.

## Limitations

- The evidence is a single-institution case study of one German bachelor program introduced in Summer Semester 2023, with three completed runs and no comparison group.
- The headline outcome, missing ECTS falling from 25% to 3%, is program-level and coincides with changes to cohort, assessment and tooling, so it cannot be attributed to the project format alone.
- Evaluation detail is thin in the chapter: the [[mixed-methods-research|mixed-methods]] evidence is summarized as lessons learned rather than reported with instruments, response rates or effect sizes.
- The 47-program survey cited is a market scan dated November 2025 from a commercial study-choice source, not a peer-reviewed census.
- The program depends on staffing for seven supervised sprints per cohort, a resourcing level many institutions cannot match.

## Citation

Rausch, A. (2026). [*Preparing Students for AI-Driven Agile Development: A Project-Based AI Engineering Curriculum*](https://doi.org/10.1007/978-3-032-39205-3_16). In *Agile Processes in Software Engineering and Extreme Programming – Workshops* (pp. 155–161). Springer.
