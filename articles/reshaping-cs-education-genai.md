---
title: Reshaping Undergraduate Computer Science Education in the Generative AI Era
created: "2026-06-10T12:17:35-04:00"
updated: "2026-09-20T06:30:22-04:00"
type: article
foundations: [ai-literacy, curriculum-design]
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring, llm]
research_method: [system development]
discipline: [cs education, stem education]
audience: [instructors, learners]
level: [higher ed]
confidence: high
sources: ['raw/papers/2606.07545.md']
---

This white paper reports two international NUS-Google Workshops in Singapore, organized by the AI4SG Lab at the NUS School of Computing with Google. A three-day faculty workshop in November 2025 drew 30 attendees — CS faculty and industry practitioners from North America, Asia, Europe, and Oceania — and a one-day student workshop in January 2026 drew 60 participants, including students and recent graduates, in eight working groups. The authors frame the report as a strategic response rather than an empirical study.

The central argument is that post-secondary [[cs-education]] was built on an assumption of code scarcity, which [[generative-ai]] dissolves. If AI occupies the functional role of a junior engineer, the apprenticeship in which graduates built expertise by doing exactly those tasks is disrupted; the proposed shift is toward specifying and verifying AI-generated artifacts.

> **Synthesis:** As [[generative-ai]] automates implementation-level programming, debugging, testing, and documentation, this report argues that CS curricula must pivot toward specifying, verifying, and taking responsibility for AI-generated systems. From 30 faculty and industry practitioners and 60 students, it identifies abstraction, [[computational-thinking]], and the "verification spectrum" as durable graduate competencies, and proposes embedding AI-native skills as sequenced "Breadcrumbs" across all four years.

## Key Findings

1. AI tools now handle the well-scoped work of a junior engineer — simple bugs, boilerplate, test cases, build maintenance — but fall short on architecture, verification, security reasoning, and maintainability.
2. Productivity evidence is mixed: Peng et al. found Copilot users completed an experimental HTTP server task approximately 55% faster, while Becker et al. found experienced developers took 19% longer despite believing they were 20% faster.
3. Brynjolfsson et al.'s analysis of ADP payroll data covering millions of U.S. workers found employment for software developers aged 22–25 declined approximately 16% relative to less AI-exposed occupations since late 2022.
4. He et al.'s difference-in-differences study of Cursor adoption in open-source projects found a statistically significant but transient velocity increase alongside a persistent rise in static analysis warnings and code complexity.
5. Bastani et al.'s randomized controlled trial with nearly 1,000 students found unrestricted GPT-4 access improved practice performance by 48% but led to a 17% decline in exam scores once AI was removed; a hint-based guardrail mitigated the effect.
6. Both workshops converged on moving from syntax memorization toward abstraction, theoretical foundations, meta-skills, and dual AI-free and AI-allowed assessment; faculty stressed professional liability, students employability.

## Mixed evidence on labor-market and learning effects

The report's persuasion rests on secondary evidence, not new data. Against productivity gains such as the approximately 55% speedup on an experimental HTTP server task stand findings that cut against naive optimism: developers taking 19% longer while believing they were 20% faster, and a persistent accretion of static analysis warnings and complexity that erodes the initial gain. The most consequential result for educators is Bastani et al.'s trial with nearly 1,000 students, where a 48% improvement in practice performance coexisted with a 17% exam-score decline once AI was withdrawn.

## What the workshops agreed on, and where they diverged

The dual-workshop design is the report's methodological contribution, capturing faculty and student perspectives that single-stakeholder approaches miss. Consensus was broad: move from low-level to high-level concepts, retain foundations for verifying AI outputs, prioritize meta-skills, evolve assessment, and anchor learning in large-scale projects. The divergences are instructive. Faculty framed the "Junior Engineer problem" as a demand that new graduates immediately exhibit senior architectural skills, and raised professional liability for AI-generated code in safety-critical domains; students approached the same disruption from an employability standpoint, preferring autonomy in choosing real-world problems to instructor-driven formats such as "prompt-first" courses. Neither workshop distinguished informal verification from formal approaches, leaving "verification" underspecified.

## Assessment and institutional preconditions

Assessment reform is where the report is most concrete — and most aware of its scalability problem. Take-home assignments no longer reliably demonstrate a student's own work, while invigilated examinations expose a widening gap in which stronger students use AI as an accelerator and weaker students develop an illusion of competence. Proposed formats include presentations, "paper-like" authorship, submissions of the student's history of AI interactions, and tool-assisted assessment where students submit specifications, tests, or formal properties alongside code; the Prompt Programming platform is cited as a working instance. The institutional preconditions are demanding: protected instructor-to-student ratios, funding for AI tools, dedicated staff, ethics consulting, rethought academic concessions, and shared repositories.

## What this means for practice

- **Instructors.** Treat specification and verification as teachable content rather than advanced electives: pair AI code generation with static analysis, property-based testing, or type-driven specification so students practice the senior-engineer workflow.
- **Learners.** Expect assessment of process as well as product, and recognize that abstraction and decomposition are exactly the skills AI assistance can quietly substitute for.
- Sequence AI-native skills as Breadcrumbs across all four years rather than isolating them in one course, and state which level of the verification spectrum each course teaches and assesses.

## Limitations

- This is a position and curriculum-design report, not an empirical study: findings reflect participants' perceptions, the proposed solutions "remain to be tested," and no outcome measures exist for the recommendations.
- Participants were self-selected and likely already engaged with AI in education, introducing selection bias, and the student workshop drew roughly half its cohort from Singapore-based institutions, limiting geographic generalizability.
- Industry perspective comes through individual practitioners rather than employer surveys, so claims about workforce demand rest on secondary sources assembled by the authors.

## Connected Concepts

- [[cs-education]]
- [[ai-literacy]]
- [[generative-ai]]
- [[llm]]
- [[curriculum-design]]
- [[critical-thinking]]
- [[computational-thinking]]
- [[higher-ed]]
## Connected Articles

- [[prompt-problems-nl-programming-mistakes]] — Understanding Student Perceptions, Mistakes, and Debugging Approaches when Solving Natural Language Programming Tasks
- [[student-misconceptions-conditionals-loops-taxonomy]] — How Students (Mis)understand Conditionals and Loops -- A Taxonomy
- [[bridging-instructional-design-framework-math]] — WIP: Bridging the Gap Between Instructional Design and Pedagogical Use: A Framework for Mathematics Educators
- [[genai-academic-search-workshop]] — Report on CHIIR 2026 Workshop on Generative AI and Academic Search (GAI&AS)
- [[cognitive-offloading-llm-synthesis-writing]] — Profiling cognitive offloading in LLM-mediated synthesis writing: Volume vs. content
- [[trio-ethnography-llm-programming-education]] — Beyond Perspectives: A Trio-Ethnography of Interpretation Evolution in LLM-Supported Programming Education
- [[genai-meta-analysis-programming-learning]]
- [[chatgpt-programming-education-text-mining]]

## Citation

Lee, Y.-C., Boonprakong, N., Tan, Y., Soh, H., et al. (2026). [*Reshaping Undergraduate Computer Science Education in the Generative AI Era*](https://arxiv.org/abs/2606.07545).
