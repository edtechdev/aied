---
title: "“I don’t know what I don’t know”: Exploring the Benefits and Challenges of AI in Interdisciplinary Research"
created: "2026-11-13T09:13:00-05:00"
updated: "2026-11-13T09:13:00-05:00"
type: article
page_kind: [evaluation]
research_method: [survey, interviews]
evidence_context: mixed
level: [higher ed]
audience: [researchers, faculty developers, software developers]
sources: ['raw/papers/ai-interdisciplinary-research-unknown-unknowns-2026.md']
source_url: "https://arxiv.org/abs/2611.15121"
source_depth: full text
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-13"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-literacy, human-ai-collaboration, misconceptions, agentic-ai]
pedagogy: [prior-knowledge, metacognition]
technology: [generative-ai, llm, conversational-ai]
methods: [qualitative-research, mixed-methods-research, ai-assisted-educational-research]
ethics: [hallucination-risk, trust-calibration]
---

> **Synthesis:** Panigrahi and August (2026) asked researchers who cross disciplinary boundaries how [[generative-ai|generative AI]] helps and hurts that work, through a survey of 62 researchers and 23 follow-up interviews. The uses they describe are concrete: a search engine that turns a half-formed idea into a field's own keywords, a two-way translator between disciplines, a preliminary in-discipline reviewer, and a coding assistant. The problem is epistemic. A newcomer to a field cannot judge whether a fluent summary is right, so AI can supply what one participant called "false bravado" — an illusion of understanding that only shows itself when someone with real background knowledge audits the output. Every participant compensated by triangulating against databases, citation networks, collaborators and their own experience. The design implication is the paper's strongest contribution: build AI to scaffold [[ai-assisted-educational-research|research practice]] and support collaboration across disciplines, not to automate the crossing.

## Key Findings

1. **AI works first as a keyword translator.** Participants described an idea informally and asked the system for the term a target discipline uses, which one said "unlocks a whole literature".
2. **It also serves as a two-way discipline translator and a pre-review reader.** Researchers used it to rephrase foreign material into their own vocabulary, to prepare for collaborator meetings, and to have drafts checked for missing theory.
3. **The same fluency produces false confidence.** Participants across both samples raised the illusion of understanding, noting they lacked the intuition to catch a plausible but wrong summary.
4. **[[hallucination-risk|Hallucination]] was the stated worry, with fabricated papers and misread sources the recurring examples.** Some also flagged bias in what the model treats as important and missing attribution to sources.
5. **Every participant triangulated.** They compared AI output against databases, citation networks, collaborators and their own field experience; several queried multiple models for the same question.
6. **Participants saw a risk to disciplinary respect.** Some worried that easy synthesis flattens the differences between fields that make interdisciplinary work valuable.
7. **The design recommendations are support-oriented.** Enable triangulation between resources, scaffold learning into a new field, and support collaboration rather than automating boundary crossing.

## What the work of crossing a discipline actually looks like

The interview data are organized around three challenges that exist before any AI is involved: finding information in an unfamiliar literature, aligning expectations with collaborators from another field, and managing communication between communities that use different vocabularies for the same thing. AI enters each one as an accelerator rather than a solution. The keyword-translation use is the clearest case — the barrier is vocabulary, and a system that maps a plain-language description onto a discipline's term removes it cheaply. The reviewer use is subtler: asking a model what theories a related-work section might be missing is a way to test a draft against a field's expectations without asking a colleague to spend an hour on it. What the paper adds to a generic account of "AI for research" is that these uses are all boundary-crossing aids, and that their value depends on the researcher's ability to check them.

## Why the illusion of understanding is the central risk

The mechanism the paper identifies is a mismatch between fluency and verifiability. A researcher with deep background knowledge can audit output — "I know how to program really well, and so I can audit what it's telling me," one participant said. A researcher reading outside their field cannot, and the same confident summary reads identically in both cases. Participants called the result false bravado, and it is the same failure mode reported in studies of student [[metacognition|metacognitive]] judgment: the signal that would trigger checking is the one that is absent. That is why the paper's recommendations are about structure rather than accuracy. Triangulation, explicit access to reputable sources, and multi-model comparison all work by putting a second, independent signal in front of the researcher. For teaching, the parallel is direct: a student using AI in an unfamiliar subject is in the same position as an interdisciplinary researcher, and the [[scaffolding|scaffolds]] that help are the ones that make the check possible.

## What this means for practice

- **Faculty developers.** Teach disciplinary verification as a skill, not a disclaimer: the researchers here could only audit output in fields where they had background, so novices need a defined check step before they trust a summary.
- **Researchers.** Ask AI for the keyword a field uses before asking it for the content of that field, and route every generated claim through a database or citation network rather than through the model again.
- **Developers.** Build for triangulation — expose sources, allow multi-model comparison, and show what was searched — instead of producing a single polished synthesis.
- **Supervisors.** Pair an AI-assisted literature foray with a collaborator conversation, because the participants' stated remedy for false confidence was another person who knew the field.

## Limitations

- The 62 survey respondents and 23 interviewees were recruited largely through the authors' networks, skewed toward STEM and computer science, and over half were doctoral students.
- All respondents had prior research experience before generative AI became widely available, so their workarounds may not describe how new researchers behave.
- The study reports individual perspectives, not observed team dynamics, and did not examine institutional factors such as tenure and workload that shape whether interdisciplinary work happens at all.
- Concerns are [[self-report-measures|self-reported]]; the paper measures no error rate in participants' actual AI-assisted work.

## Citation

Panigrahi, I., & August, T. (2026). [*“I don’t know what I don’t know”: Exploring the Benefits and Challenges of AI in Interdisciplinary Research*](https://arxiv.org/abs/2611.15121). arXiv:2611.15121.
