---
title: "Reducing Barriers to Academic Support: Evaluating a Course-Specific RAG System for Addressing Help-Seeking Disparities in Higher Education"
created: "2026-09-21T09:24:09-04:00"
updated: "2026-09-21T09:24:09-04:00"
type: article
sources: ['raw/papers/course-specific-rag-help-seeking-higher-ed-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [user study]
discipline: [cs education]
level: [higher ed]
audience: [instructors, software developers]
pedagogy: [help-seeking, scaffolding]
technology: [rag, llm]
ethics: [equity-in-ai-education]
methods: [usability-research, mixed-methods-research]
---

> **Synthesis:** Fifteen [[cs-education|computing]] students and four academics evaluated Beacon, a course-specific [[rag|retrieval-augmented generation]] assistant built from a single programming module's approved teaching materials. Students rated its answers highly relevant to the course (89%), found it clear (88% very or somewhat clear) and intuitive (73.3%), and most said it supported rather than replaced their learning (66.7%). The study's argument is about [[help-seeking]]: 62.5% of respondents said they sometimes avoided asking for help even when they needed it, and the authors position a private, module-grounded tool as a first rung for students who hesitate to approach a lecturer.

## Key Findings
1. **Alignment with course materials was the strongest result.** 89% of participants rated the system's responses as highly aligned with course materials, and 56% found outputs consistently logical.
2. **Clarity and [[usability-research|usability]] scored well.** 44% reported the system was very clear and a further 44% somewhat clear; 73.3% found it intuitive, 73.35% easy to use, and 66.7% were confident navigating it.
3. **Self-reported learning support was moderate.** 53.35% agreed Beacon improved their understanding of programming concepts, 53.3% felt more confident solving problems, and 60% felt more confident tackling difficult topics.
4. **The tool was seen as additive, not a substitute.** 66.7% said Beacon supported rather than replaced their learning and 80% agreed it helped, while students still described verifying important information themselves.
5. **The help-seeking baseline was the problem the design targets.** 62.5% of respondents said they sometimes avoided asking for help when they needed it and 75% reported [[anxiety-and-stress|anxiety]] when they did not understand a topic.
6. **Academics valued the refusal to give answers.** Staff praised the pseudocode, simple starting structures and links to module materials, and worried that unrestricted AI tools let students "skip that development stage".
7. **The evaluation is small and [[qualitative-research|qualitative]] at its core.** Nine interviews were conducted — five with students and four with academics — and 15 students completed the task scenarios, nine in a two-hour in-person workshop and six remotely.

## Grounding answers in the module is the design idea
Beacon retrieves from university-curated teaching materials before generating a response, which is the mechanism the authors test against the known failure mode of general-purpose tools: answers that are inaccurate, insufficiently contextualized, or pitched above a novice's level. Students in this study had experienced that failure directly, describing explanations that exceeded their current understanding and left them more confused. Grounding is therefore not a technical nicety but the feature that makes a [[intelligent-tutoring|tutoring-style]] assistant usable inside a specific [[curriculum-design|curriculum]], and the 89% relevance rating is the students' own version of the same claim.

## The tension between access and bypass
Staff interviews carry the counter-argument the paper is careful to preserve: a tool that students turn to before office hours may also be a tool that lets them avoid the productive discomfort of debugging. Academics were reassured that Beacon withholds full solutions and provides scaffolded steps, and the authors frame the target as an intermediary space between independent study and formal support rather than a replacement for [[teacher-role|teaching staff]]. That is a design position with a measurable consequence — the system's answers were judged educationally appropriate precisely because they refused to be complete.

## Equity as the stated motivation
The framing is about unequal access to support rather than about efficiency. Students who are anxious, uncertain of expectations, or low in confidence seek help less often even where support exists, so the paper's contribution is a design that lowers the social cost of asking. The authors also name the risk that course-specific AI advantages students already able to evaluate generated answers critically, which is why the tool's transparency about its sources matters for [[equity-in-ai-education|equity in AI education]] and not only for trust.

## What this means for practice
- **Instructors.** Ground any course AI assistant in your own approved materials, and require it to scaffold rather than supply solutions; in this study that design choice is what made staff and students accept it.
- **Software developers.** Treat help-seeking hesitation as the target metric. Logging when students choose a private AI channel instead of asking a lecturer tells you whether the tool is broadening access or absorbing contact.
- **Administrators.** A course-specific assistant needs a maintenance owner, since its credibility rests entirely on keeping the retrieval sources aligned with current module materials.

## Limitations
- One programming module at one institution, with 15 students completing the scenarios and nine interviews, so the study reports perceptions rather than comparative outcomes.
- All [[self-report-measures|questionnaire]] results are self-report usability and confidence ratings; no control condition or learning-outcome measure was collected.
- The system was evaluated shortly after introduction, so novelty effects on ratings cannot be separated from the design.
- The authors declare no conflict of interest but built the system they evaluated, which is a developer-as-researcher design rather than an independent test.

## Connected Concepts
- [[help-seeking]]
- [[rag]]
- [[llm]]
- [[scaffolding]]
- [[cs-education]]
- [[trust-calibration]]
- [[intelligent-tutoring]]
- [[equity-in-ai-education]]
- [[anxiety-and-stress]]
- [[higher-ed]]

## Connected Articles
- [[eduguard-safe-rag-llm-tutor]] — EduGuard: A Safe RAG-Based LLM Tutor for Programming Education
- [[retrieval-augmented-tutoring-algorithm-kite]] — Retrieval-Augmented Tutoring for Algorithm Tracing and Problem-Solving
- [[algorag-rag-theoretical-cs-education-2026]] — AlgoRAG: Retrieval-Augmented Generation for Theoretical Computer Science Education
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — Efficiency vs. Effectiveness: Self-Regulated Learning with LLM-Mediated Help-Seeking
- [[regulating-ai-tutor-adolescent-srl]] — Regulating the AI Tutor: Intentions, Help-Seeking, and Self-Regulated Learning
- [[ai-fallibility-warning-help-seeking]] — Warning About AI Fallibility Increases Help-Seeking in an Intelligent Tutoring System
- [[llm-programming-support-governance-cs-education]] — Exploring the Design Space of LLM-Based Programming Support in CS Education
- [[structured-llm-feedback-programming]] — The Effects of Structured LLM-Generated Feedback on Programming Assignment Performance

## Citation
Gray, A., & Hobbs, J. (2026). [Reducing Barriers to Academic Support: Evaluating a Course-Specific RAG System for Addressing Help-Seeking Disparities in Higher Education](https://arxiv.org/abs/2609.21600). arXiv:2609.21600.
