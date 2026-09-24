---
title: "AI Can Do Your Homework. Now What? Report from an online workshop on computing assessment in the age of generative AI"
created: "2026-09-24T09:35:29-04:00"
updated: "2026-09-24T09:35:29-04:00"
type: article
published: "2026-08-19"
sources: ['raw/papers/computing-assessment-genai-workshop-report-2026.md']
confidence: high
page_kind: [synthesis]
research_method: [thematic analysis]
discipline: [cs education]
level: [higher ed]
audience: [instructors, assessment designers, researchers]
foundations: [academic-integrity, agency, ai-literacy, curriculum-design]
pedagogy: [motivation, productive-failure, metacognition, student-engagement]
technology: [generative-ai, llm, prompt-engineering, vibe-coding]
assessment: [authentic-assessment, oral-assessment, evaluative-judgment, assessment-validity]
institutions: [change-management]
ethics: [equity-in-ai-education, trust, ai-use-disclosure, digital-divide]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A two-hour online workshop on 28 July 2026 asked 73 computing educators what they are doing about [[generative-ai|generative AI]] in their assignments, and produced a catalog of practice rather than evidence. Its most consequential finding is structural: nearly every change was made by an individual instructor, in one course, without institutional coordination, while assignment difficulty keeps expiring. Rooms converged on a shared diagnosis—[[assessment-validity|validity]] now depends on work that can be verified live, and almost every such method fails at scale.

## Key Findings
1. **Attendance and interest were both flat and broad.** 118 registrants signed up and 73 joined (64 participants, nine working group members); no strategy drew even a fifth of the total, from 21 registrants down to 13.
2. **Interest split almost evenly between two responses.** Redesigning what gets assigned drew 37 registrants; redesigning how work is verified or valued—[[oral-assessment|oral assessment]], rubrics, grading—drew 40.
3. **Instructors have stopped relying on detection.** Participants reported many false positives from [[ai-detection|AI detectors]] and generated work often indistinguishable from human work, so critique moved into in-class and proctored settings.
4. **Process evidence is collected but not graded.** Fairness-room participants were unanimous that they do not grade interaction logs, reflections, or disclosure statements; the rubrics room objected that [[agentic-ai|agentic AI]] can invent a plausible process that never happened.
5. **Scale is the binding constraint.** Oral assessment gives the strongest evidence of individual understanding and is the least scalable remedy proposed; the critique room raised it alongside 400-plus students and a handful of TAs.
6. **Difficulty is a moving target.** A facilitator estimated an AI-resistant task lasts roughly a semester, and a systems instructor expected an agent could now complete her specification end to end.

## What the workshop was, and what it was not
The convening ran discussion rather than talks, with rooms organized by adaptation strategy and seeded from registrants' own questions; 47 registrants also asked about strategies other than their own. Registration interest ran from Oral & Interactive Assessment (21) to Process Evidence & Effort Signals (12), with [[explainable-ai|Transparent AI]] Use & Literacy drawing one registrant and not running as a room. Eight question rooms were planned for hour two; seven ran. The report calls itself not a research paper—nothing measured, sampled, or controlled—and offers a record of practice while published literature sits twelve to eighteen months behind the tools.

## What instructors reported doing
A 700-student systems programming course replaced graded code with a written document explaining how technical specifications were met, plus a demo video under five minutes; roughly half the class produced work slightly easier than a typical final assignment and half met or exceeded expectations. An advanced course assigned more than students could finish, in a project originally built by about a hundred programmers over roughly a year; because models handle two coupled concerns poorly, students had to decompose before delegating. The critique room agreed that reading and critiquing code should be introduced early, pairing closed-book examinations with open, AI-supported work—while conceding that when students were asked for evaluation transcripts, they had the AI produce those too.

## Scale, and who can afford these methods
Almost every remedy works at small scale and degrades at large scale. In-person code reviews for two hundred students were scaled by distributing them across ten to fifteen TAs who calibrated together on prior years' projects; [[peer-assessment|peer assessment]] was capped at forty percent of an assignment's weight against a [[summative-assessment|final exam]] carrying sixty; one instructor calls a subset of students weekly so nobody knows when their turn comes. The report's uncomfortable implication is that the strategies best supported by evidence of learning are least available to the institutions teaching the most students—an [[equity-in-ai-education|equity]] problem between institutions rather than between students.

## Difficulty, expiry, and the missing curricular response
Participants described calibrating assignments against model capability and watching the calibration expire—a cybersecurity instructor's problems required genuine [[problem-solving]] seven or eight months earlier and are now simply solved. One facilitator estimated a shelf life of roughly one semester, and difficulty now partly reflects how well a student can write a prompt. The largest structural finding is that nearly every change was made by an individual instructor, in a single course, without institutional coordination; colleagues inside one department take opposite positions with nothing reconciling them, and the [[curriculum-design|curricular]] response the report argues for will not conclude in time to help students now enrolled.

## What this means for practice
- **Apply the conditional rule first.** Where an outcome is genuinely compromised by AI use, move that outcome to a proctored, AI-free assessment rather than changing the format of your exam.
- **Budget the grading time before adopting process evidence.** Participants collected [[ai-use-disclosure|disclosure]] statements and logs but would not stake a grade on them; treat them as [[metacognition|metacognitive]] prompts, not evidence.
- **Stop buying detection.** Participants ruled out AI detectors on classroom experience: many false positives, and generated work is often indistinguishable from human work.
- **Assume your AI-resistant assignment expires.** Calibrate difficulty against what students must decide, not against what models currently cannot do.
- **Decide how you will scale before you pilot.** The only levers participants had implemented were distribution and sampling: calibrated TA pools, peer assessment capped at a fraction of the grade, calling a subset of students weekly.

## Limitations
- Participants were self-selected twice over—they registered for a workshop on adapting assessment, then chose their room—so educators convinced change is needed are over-represented.
- Nothing is measured: reports of what worked are self-reports without outcome data, and the one numeric result cited was a five-point drop in exam scores offered as a hypothesis.
- Room [[writing-education|composition]] was uneven—some rooms had twenty participants and skipped introductions, others four—and sections were evened out by editorial decision.
- This is a snapshot of late July 2026, and several disagreements turn on what models can currently do; participants observed that positions taken six months earlier had not survived.

## Connected Concepts
- [[assessment]]
- [[authentic-assessment]]
- [[oral-assessment]]
- [[evaluative-judgment]]
- [[assessment-validity]]
- [[academic-integrity]]
- [[ai-use-disclosure]]
- [[ai-detection]]
- [[motivation]]
- [[productive-failure]]
- [[agentic-ai]]
- [[change-management]]
- [[equity-in-ai-education]]
- [[curriculum-design]]

## Connected Articles
- [[kumar-genai-computing-education-systematic-review-2026]] — Generative AI in computing education: A systematic review and a framework for responsible integration
- [[zhan-chapman-genai-cs-education-2026]] — Harnessing Generative Artificial Intelligence in Computer Science Education: Pedagogical Innovation, Ethical Responsibility, and the Future of Assessment
- [[authentic-products-authenticated-processes-2026]] — From authentic products to authenticated processes: a systematic conceptual review of authentic assessment in AI-rich
- [[code-review-genai-cs1]] — Combating Harms of Generative AI in CS1 with Code Review Interviews and a Flipped Classroom
- [[asynchronous-oral-assessment-2026]] — Asynchronous Oral Assessments: Enhancing Integrity, Engagement, and Communication in the AI Era
- [[yan-cognitive-outsourcing-genai-assessments-2026]] — From Cognitive Outsourcing to Reallocation: A 3P Analysis of Student–Generative AI Engagement in Unsupervised Assessments
- [[llm-programming-support-governance-cs-education]] — Exploring the Design Space of LLM-Based Programming Support in CS Education: A Scoping Review through the Lens of Assistance Governance
- [[shame-guilt-ai-regulation-computing-education]] — 'Stuck in a Spiral": Shame and Guilt as Social Regulators of AI Use in Computing Education

## Citation
Akbar, M. S., Challen, G., Fund, F., Hopkins, C., Karnalim, O., Lin, K., McGuffee, J., Taneja, S., and Ware, R. (2026). [*AI Can Do Your Homework. Now What? Report from an online workshop on computing assessment in the age of generative AI*](https://arxiv.org/abs/2609.27842). arXiv preprint.