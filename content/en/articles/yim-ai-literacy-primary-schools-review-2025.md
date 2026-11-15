---
title: "Artificial intelligence literacy education in primary schools: a review"
created: "2026-11-15T06:40:00-05:00"
updated: "2026-11-15T06:40:00-05:00"
type: article
sources: ['raw/papers/yim-ai-literacy-primary-schools-review-2025.md']
source_url: "https://doi.org/10.1007/s10798-025-09979-w"
published: "2025"
confidence: high
evidence_context: educational
audience: [researchers, instructors]
level: [primary education, k 12]
discipline: [teacher education, stem education, cs education]
page_kind: [synthesis]
research_method: [literature review]
foundations: [ai-literacy, computational-thinking, curriculum-design]
pedagogy: [constructivist, project-based-learning, self-efficacy]
technology: [educational-robotics, machine-learning, generative-ai]
assessment: [self-report-measures, assessment-validity]
methods: [meta-analysis-systematic-review, mixed-methods-research]
ethics: [differential-effects-across-learner-groups, equity-in-ai-education]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-15"
    agent: Hermes-Agent
---

> **Synthesis:** This PRISMA-guided [[meta-analysis-systematic-review|systematic review]] maps what [[ai-literacy|AI literacy]] looks like when it is taught to children rather than to computer science undergraduates, synthesizing 25 empirical studies published between 2019 and March 2024. Its central move is definitional: primary-school AI literacy is assembled from digital literacy for interacting with AI, computational thinking, critical data literacy, and [[ethics|AI ethics]] held together, with ethics treated as core content. The dominant pedagogy is [[constructivist|constructionist]] — [[project-based-learning|project-based work]], programming, and interaction with intelligent agents — and it is usually assessed by self-report survey. Reported outcomes are positive, but the base is small, short-term, geographically narrow, and largely silent on children without coding experience.

## Key Findings

1. **Define AI literacy as four connected components, not one skill.** Digital literacy for interacting with AI appeared in 19 of the 25 studies, computational thinking in 10, AI ethics in 10, and critical data literacy in 5; a coding-only unit reaches one strand.
2. **Ground the unit in making.** Of the 16 studies naming a framework, 8 use constructionism or constructivism and 6 use the ARCS model; artifacts children can explain fit this evidence better than exposition.
3. **Reach for intelligent agents before syntax.** Agents were the most common tool (15 of 25 studies), ahead of software-focused devices (8) and unplugged activities (3); Teachable Machine, Jibo, Cozmo, and Alexa let children train a model without writing code.
4. **Put ethics and data on the timetable.** Ten studies addressed AI ethics and 5 critical data literacy; the authors argue technical framing pushes societal implications to a supporting role.
5. **Do not accept a satisfaction survey as evidence of literacy.** Surveys appeared in 19 of 25 studies, interviews in 11, artifacts or rubrics in 8; the review wants validated scales, not one-off attitude items.
6. **Treat reported gains as provisional.** Only 15 of 25 studies reported learning outcomes; where they did, students grasped neural networks, bias, and training data, and Shamir and Levin (2022) reported competency rising from 4.6 to 5 on a 5-point Likert scale.
7. **Design for the gender and experience gaps.** Dai et al. (2020) found male students reporting higher confidence, relevance, and readiness, and Lin et al. (2021) found female students less motivated; programming routes also presume coding experience many nine-year-olds lack.

## How the review was assembled

The authors followed PRISMA and searched Scopus (40 records) and the Web of Science (4) in March 2024, retrieving 44 records. Screening removed 3 by title and abstract and 3 duplicates, leaving 38 full texts; 13 more were excluded — 7 not primary settings, 4 with no research data, 2 not research papers — for a final sample of 25.

The corpus is recent and narrow: no study predates 2019, output peaked at nine articles in 2021, and the largest contributors were China (8), the USA (6), Finland (3), and Israel (2), with samples from six to 682. Mixed methods led (10), then qualitative (8) and quantitative (7).

## Four components, one construct

Digital literacy is the broadest strand, unpacked through Eshet's sub-literacies: visual representation (recognizing AI in daily life and AI-generated media), reproduction (building external representations), branching (navigating nonlinear digital space), information (distinguishing narrow from general and super AI), and socioemotional literacy.

Computational thinking supplies the algorithmic strand — decomposition, pattern recognition, abstraction, algorithm design — and is the component most tightly bound to [[computational-thinking|programming]]. Critical data literacy, in only 5 studies, is where the framework is sharpest: training data shapes outputs, and biased data produce biased predictions. Ethics asks children to anticipate the consequences of deployment.

## Teaching by making, coding, and talking to agents

Three strategies carry the teaching load: project-based learning, programming, and human–agent interaction with collaborative elements. Programming routes use Scratch, MIT App Inventor, and Cognimates, teaching rule-based coding before data-driven learning — a sequence the authors question, since machine learning asks students to curate examples rather than write rules.

Agents dominate because they respond to children's actions, making behavior inspectable: students train a classifier in Teachable Machine or test whether a robot's apparent intelligence survives their own programming. Unplugged work — paper prototyping, stories with robots, Pictionary-style games — builds vocabulary before a device appears. [[generative-ai|Generative AI]] appears only as a future direction.

## What gets measured, and what is missing

Assessment is dominated by self-report: surveys in 19 of 25 studies, usually measuring behavioral intention, readiness, or ethical awareness. Interviews (11) and artifact rubrics (8) show more conceptual understanding, while observation (3), reflection papers (1), and field visits (1) are marginal. Without validated instruments, cross-study comparison is impossible.

Three challenges recur. Tools are outdated relative to the AI they explain, and platforms such as Teachable Machine carry computational and training-time demands that impede school-wide use. No systematic curriculum exists, so AI literacy is bolted onto existing subjects and reduced to technical aspects. Misconceptions, readiness, and gender differences rarely enter instructional design, where the [[equity-in-ai-education|equity]] problem concentrates.

## What this means for practice

- **Instructors:** Organize the unit around an artifact children can explain, and protect time for the ethics and data discussion most studies skip.
- **Curriculum designers:** Cover all four components explicitly; a coding-only unit reaches the computational thinking strand and little else.
- **Administrators:** Budget for tool refresh and teacher training, not just devices. Outdated interfaces and thin teacher AI knowledge are named barriers, and [[professional-training|professional development]] is the review's first recommendation.
- **Designers:** Build for the child with no coding background; gender gaps in confidence and the coding prerequisite of constructionist routes argue for lower-barrier entry points.
- **Researchers:** Report outcomes for all participants, not the subset that completed a survey, and use or develop [[assessment-validity|validated instruments]] so findings compare across studies.

## Limitations

- The sample is 25 studies, which the authors flag as very small for a synthesis.
- Only Scopus and the Web of Science were searched, so regional and non-indexed work is absent.
- Instruments are largely bespoke, and young participants may not grasp the constructs they rate.
- No study spans more than a short intervention, and no meta-analysis of effect sizes was possible.

## Citation

Yim, I. H. Y., & Su, J. (2025). [Artificial intelligence literacy education in primary schools: a review](https://doi.org/10.1007/s10798-025-09979-w). *International Journal of Technology and Design Education*, 35, 2175–2204.
