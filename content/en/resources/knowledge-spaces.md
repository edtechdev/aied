---
title: "Knowledge Spaces"
created: "2026-11-27T14:35:00-05:00"
updated: "2026-11-27T14:35:00-05:00"
type: resource
summary: "A free, MIT-licensed suite of ten Claude Code Agent Skills that turns course materials into a Knowledge Space Theory knowledge graph, adaptive assessments and personalized instruction plans."
url: https://github.com/vanderbilt-data-science/knowledge-spaces
source_code: https://github.com/vanderbilt-data-science/knowledge-spaces
author: "Vanderbilt Data Science Institute"
author_url: https://www.vanderbilt.edu/datascience/
resource_type: [agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-27"
foundations: [learning-design, curriculum-design]
technology: [adaptive-learning, knowledge-graph, intelligent-tutoring, personalized-learning, learning-analytics]
assessment: [assessment]
audience: [instructors, instructional designers, educational technology developers, researchers]
level: [higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
reviewed_by: [editor]
connected_concepts: [adaptive-learning, knowledge-graph, assessment, personalized-learning, learning-analytics, curriculum-design, intelligent-tutoring]
---

**Knowledge Spaces** is a suite of ten Claude Code Agent Skills from the Vanderbilt Data Science Institute that implements a full Knowledge Space Theory pipeline over a course's own materials. Give it a syllabus, textbook or standards document and the skills extract atomic knowledge items, propose prerequisite relations, construct the feasible knowledge states, and then use that structure for adaptive assessment and instruction planning. The output is a JSON [[knowledge-graph|knowledge graph]].

## What you can do with it

Four phases organize the skills. Domain analysis extracts items and decomposes learning objectives; structure construction builds the prerequisite relation and enumerates feasible states, fringes and learning paths; application covers adaptive assessment with BLIM or PoLIM, personalized material generation and just-in-time lecture planning; maintenance updates the structure when a curriculum changes. A validation skill checks mathematical and educational properties before the structure is used. The project grounds the pipeline in Knowledge Space Theory, Competence-Based KST, Formal Concept Analysis and Evidence-Centered Design, with a bibliography of more than 60 references.

## Who it is for

Instructors who want to see the prerequisite structure behind a course, [[learning-design|instructional designers]] building [[adaptive-learning|adaptive]] pathways, and developers who need a principled model rather than ad hoc tagging. Researchers can use the pipeline to generate structures for study, but should treat the resulting graphs as hypotheses rather than validated domain models.

## Notes and caveats

The repository is MIT-licensed and free to clone, but it is not a standalone tool: it requires the Claude Code CLI and Python 3.9 or later, and using the skills consumes Anthropic model usage, so the software is free while the inference is not. Claude acts as the domain expert when proposing prerequisites, and the validation skill checks internal mathematical and educational properties, not whether those relations are correct for a particular curriculum; an instructor still has to review the graph. The project is young — three commits, no releases, and 35 stars and 5 forks when checked on 27 November 2026 — and its own contributing notes list empirical validation against real student data and LMS integration as work still to be done.

## Connected Concepts

[[adaptive-learning]], [[knowledge-graph]], [[assessment]], [[personalized-learning]], [[learning-analytics]], [[curriculum-design]], [[intelligent-tutoring]]
