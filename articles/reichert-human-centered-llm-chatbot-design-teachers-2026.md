---
title: "Human-Centered Design of LLM-Powered Educational Chatbots: A Study with Secondary Teachers"
created: "2026-09-14T06:10:00-04:00"
updated: "2026-09-14T06:10:00-04:00"
type: article
foundations: [human-ai-collaboration, teacher-role]
pedagogy: [student-ai-interaction]
technology: [generative-ai, human-in-the-loop-ai, llm]
stakeholders: [pedagogical-safety]
ethics: [guardrails]
research_method: [qualitative, thematic analysis, user study]
discipline: [learning sciences]
level: [secondary]
audience: [teachers, designers, edtech designers]
sources: ['raw/papers/reichert-human-centered-llm-chatbot-design-teachers-2026.md']
confidence: high
methods: [usability-research]
---

> **Synthesis:** Reichert, Briceno, Tabarsi, and Barnes (2026) report a participatory design study in which six secondary teachers enrolled in a Research Experiences for Teachers summer program created low-fidelity paper prototypes of [[generative-ai|generative AI]] [[conversational-ai|chatbots]] for their own classrooms. Through inductive [[qualitative-research|qualitative analysis]] of a structured focus group and affinity diagramming of the prototypes, the authors show that teachers consistently conceptualized AI as a "bounded expert": a system with specialized capability confined to a strictly defined domain and operating under human supervision rather than as an autonomous agent. Boundedness operates along two dimensions — authority boundaries, in which teachers retain ultimate control because professional responsibility for student learning and safety cannot be delegated, and expertise boundaries, in which teachers see AI as lacking their contextual knowledge of individual students, classroom dynamics, and institutional norms. The teachers articulated a multi-layered safety architecture with four interconnected components — content scoping, content presentation, student adaptation, and teacher oversight — that operationalizes bounded authority through three protective layers: domain boundaries that restrict scope, content filtering that enables safe personalization, and teacher override that preserves human judgment in ambiguous cases. Mapping the designs onto Gagné's nine events of instruction revealed selective delegation: teachers welcomed AI assistance for presenting content, supplying practice problems, and offering [[formative-assessment|formative]] [[feedback]], yet refused to delegate objective-setting or [[summative-assessment|summative]] [[assessment]].

## Key Findings

- **Teachers designed "bounded experts," not [[agentic-ai|autonomous agents]]:** All six participants described AI that holds specialized capability within a strictly defined domain while remaining under human supervision. As P1 put it, the system should "free up our time to focus on students that need that extra help" without displacing [[teacher-role|pedagogical authority]].
- **Boundedness had two distinct dimensions:** *Authority boundaries* — teachers keep ultimate control because professional and legal responsibility for student learning and safety cannot be delegated to a machine — and *expertise boundaries* — AI lacks teachers' contextual knowledge of individual students, behavioral histories, classroom dynamics, and institutional norms.
- **Four interconnected components made up the bounded design (Fig. 1):** content scoping (P1's chatbot was confined to Emperor Qin Shi Huang in an ancient China unit; P6's to Python variables, data structures, and functions), content presentation (visual aids in P4, structured tables in P1), student adaptation, and [[human-in-the-loop-ai|teacher oversight]].
- **Adaptation was deliberately bounded:** P3's chatbot offered to present penguin facts as scary stories and adapted when a student named both scary stories and pop music, then solicited feedback; P6's let students rename themselves and the bot. Students could choose *how* to learn a topic but could not redirect conversation to unrelated content — personalization without loss of educational control.
- **Three protective [[guardrails|safety layers]] framed the architecture (Fig. 2):** domain boundaries enforcing lesson-specific scope, including an "information quota" requiring a minimum number of facts or problems before progressing; content filtering with standardized refusals such as "Sorry, this is not part of my knowledge base" plus teacher alerts; and teacher override for ambiguous cases — P4 noted that questions on human reproduction could be legitimate in that unit and should route to a teacher rather than be auto-rejected.
- **Transparency was behavioral rather than algorithmic:** teachers prioritized visible limits and uncertainty cues over model explanations — P4's chatbot asked "Is the visual aid helpful?" while P5's math chatbot guided students to analyze "the skills in order to solve" problems without handing over answers.
- **Oversight was framed as professional responsibility, not distrust of AI:** teachers universally requested complete conversation logging, real-time alerts for inappropriate queries, and override capability, reading transcripts both for accuracy checking and for behavioral supervision of [[student-ai-interaction|student-AI interactions]].
- **Delegation was selective across instruction:** mapped onto Gagné's nine events, AI was welcomed for gaining attention, remediation, presenting content, [[scaffolding]], practice, corrective [[feedback]], and real-world transfer — but not for informing students of objectives or assessing performance, activities teachers treat as core professional judgment.

## Study Design & Method

- **Participants:** six of twelve secondary teachers enrolled in a Research Experiences for Teachers summer program at a public university in the southeastern United States. Subjects spanned social studies, math, animal science, science, and [[cs-education|computer science]] & robotics across grades 6–12; [[self-report-measures|self-reported]] experience ranged from N/A to 16–20 years.
- **Workshop context:** all twelve teachers completed a three-day workshop series based on a publicly available, previously evaluated curriculum on LLMs, modified by the researchers to cover recent models such as GPT-4o and to integrate GPT-4o into in-workshop activities. Teachers were invited into the study on the fourth day; six agreed and completed a final project.
- **Design session:** participants worked in two groups of three but designed individually. They first completed a worksheet [[prompt-engineering|prompting]] reflection on the chatbot's content and scope, its "freedom," its role, its tone, intended student takeaways, and how it would differ from a conventional chatbot such as ChatGPT (~15 minutes), then built low-fidelity paper prototypes with note cards, pens, colored pencils, tape, and long sheets of paper (~25 minutes). Each prototype had to include at least one example student–chatbot conversation. Low-fidelity prototyping was chosen for accessibility, rapid iteration, and focus on conceptual rather than technical exploration.
- **Focus group:** a single one-hour structured focus group covered how the [[design-thinking|design process]] went, what was difficult, which parts were most and least important, how the chatbot would be used in class, its usefulness to the teacher, and desired new functionality. Two researchers facilitated; the session was recorded on Zoom and the auto-generated transcript was corrected and edited by one [[research-methods-aied|researcher]].
- **Analysis:** two researchers performed inductive [[qualitative-research|thematic analysis]] on the transcript in four sections, coding independently with private copies to avoid mutual influence, then reconciling tags by discussion and grouping them against the research questions. Final projects were analyzed with affinity diagramming on a digital whiteboard, with each researcher preparing individual insights on scope, tone, and appearance before grouping tags into themes. No inter-rater reliability was computed because only mutually agreed tags were carried forward.
- **Limitations:** a sample of six teachers limits generalizability; most participants taught [[stem-education|STEM]] subjects, with only P1 representing the [[humanities-education|humanities]]; IRR was not calculated; and rapid [[llm]] change warrants replication, though the authors argue principles rooted in real classroom experience will persist.

## Implications for AI in Education

- **Engage domain experts early and throughout design:** participants valued being designers and urged tool builders to consult people "on the ground," consistent with user-centered and participatory traditions — this is [[usability-research|usability work]], not outreach.
- **Prioritize content scoping over accuracy improvements:** every teacher, regardless of subject, insisted that the chatbot stay within lesson content to prevent distraction, overwhelm, and access to unrelated or inappropriate material, with responses age-appropriate, accessible, and ethically sourced. Domain restriction is an instructional requirement, not merely a [[hallucination-risk|hallucination]] patch.
- **Enable personalization inside safety boundaries:** customization of genre, format, pace, and complexity supported [[agency|autonomy]] and enjoyment, and designers should let both students and teachers rate the relevance of generated answers — connecting to work on [[personalized-learning|personalized learning]] and [[affective-tutoring|affective tutoring]] systems.
- **Provide comprehensive logging and monitoring:** teachers wanted records of student–chatbot conversations in real time or in an easily exportable format such as PDF, so that generated content can be checked for accuracy and student use can be supervised — real-time [[learning-analytics|analytics]] are a recurring demand in [[intelligent-tutoring|intelligent tutoring]] contexts.
- **Support [[multimodal]], accessible presentation:** teachers raised the needs of students with disabilities such as dyslexia and of [[multilingual-learning|multilingual]] students, implying multimodal input such as speech and multilingual input and output — an [[accessibility]] and [[inclusive-learning|inclusion]] requirement rather than a feature upgrade.
- **Allow professional customization of AI behavior:** the worksheet prompts (tone, purpose, scope, domain, modalities, presentation modes, conversational control) proved useful scaffolding for teachers, and such elements could live in a teacher-facing dashboard where educators upload their own documents as prompting context.
- **Expect a domain-general pattern:** the bounded authority model is offered as guidance for other high-stakes professions where AI augments rather than replaces expertise, such as diagnostic AI under physician authority or legal retrieval under lawyer judgment.

## Connected Concepts

- [[generative-ai]]
- [[teacher-role]]
- [[human-in-the-loop-ai]]
- [[human-ai-collaboration]]
- [[pedagogical-safety]]
- [[guardrails]]
- [[student-ai-interaction]]
- [[agency]]

## Connected Articles

- [[human-centered-ai-teacher-educators-2026]] — Human-centered AI design work with teacher educators
- [[eduzone-llm-safety-k12]] — Safety boundary framework for generative AI in K-12 settings
- [[hazra-safetutors-pedagogical-safety-2026]] — Pedagogical safety as an explicit design objective for AI tutors
- [[mind-the-trust-gap-teacher-student-views-control-agency-k12-classroom-ai]] — Teacher and student views on control and agency in classroom AI
- [[wang-teacher-ai-co-design-review-2026]] — Review of teacher co-design approaches in educational AI

## Citation

Reichert, H., Briceno, D., Tabarsi, B., & Barnes, T. (2026). [*Human-centered design of LLM-powered educational chatbots: A study with secondary teachers*](https://doi.org/10.1007/978-3-032-31048-4_32). In *HCI International 2026: Human-Computer Interaction* (Lecture Notes in Computer Science, pp. 516–535). Springer.
