---
title: "Bounded Reliance: A Source Credibility Perspective on EFL Students' Engagement with AI-Generated Writing Feedback"
created: "2026-09-22T07:26:00-04:00"
updated: "2026-09-22T07:26:00-04:00"
type: article
published: "2026-09-18"
foundations: [ai-literacy, critical-thinking, human-ai-collaboration]
pedagogy: [student-ai-interaction, metacognition, motivation]
technology: [generative-ai, llm, conversational-ai]
methods: [qualitative-research]
assessment: [feedback, feedback-literacy, formative-assessment]
ethics: [trust, trust-calibration, privacy]
audience: [instructors, instructional designers, researchers]
level: [undergraduate, higher ed]
research_method: [case study, thematic analysis, interviews]
discipline: [language learning, writing education]
page_kind: [evaluation]
source_url: https://doi.org/10.5281/zenodo.22828386
sources: ['raw/papers/bounded-reliance-ai-writing-feedback-2026.md']
confidence: high
connected_faqs: [writing-instruction-ai-best-practices, ai-feedback-at-scale, reducing-over-reliance]
contributors: [editor]
reviewed_by: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-22"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** This [[qualitative-research|qualitative]] case study asks not whether [[feedback|AI-generated feedback]] is accurate but how learners appraise it as a *source*. Seventeen undergraduate [[english-education|English as a foreign language]] students in a Turkish translation department used GROK across a fifteen-week academic writing course and were interviewed about the experience. Read through Source Credibility Theory, their accounts split along the theory's three dimensions: they granted the system high **expertise**, describing it as competent on vocabulary, grammar, structure and coherence and valuing the explanations it gave for its suggestions; they doubted its **trustworthiness**, mainly over what happened to their data; and they questioned its **goodwill**, finding the feedback impersonal and at times demotivating. The three judgments dissociated, and it was the latter two — not competence — that set the limit on how far students would rely on the tool. What they settled on was a division of labor: AI for broad language concerns, instructors for individualized and relational guidance.

### Overview

Most studies of [[generative-ai]] in [[writing-education|writing instruction]] measure the output: whether the feedback is accurate, whether revisions improve, whether learners prefer it to peer or [[teacher-role|teacher]] comments. This paper starts from a different premise drawn from persuasion research. Hovland's credibility tradition holds that a message is accepted or rejected partly on the receiver's judgment of the messenger — its expertise, its trustworthiness, and (in McCroskey and Teven's extension) its goodwill or perceived caring. The authors argue that once a system becomes a routine provider of feedback, learners necessarily make those judgments about it, and that the resulting appraisal shapes use in ways that output quality cannot predict.

The study therefore treats [[llm|the model]] as a communicator. The two research questions ask how students evaluate credibility across the three dimensions, and which factors shape those evaluations. [[student-ai-interaction|How students relate to the tool]] rather than how well the tool performs is the object of study, which places the paper in a small group of studies that explain the *why* behind learners' verdicts rather than reporting them.

### Key Findings

1. **Expertise was granted broadly, and explanation was the evidence.** Students pointed to improvement in vocabulary range, grammatical accuracy, sentence structure, punctuation and coherence, and valued the immediacy of the response. What they treated as proof of competence was not only catching errors but explaining why a revision was warranted, which maps onto the process-level rather than task-level end of [[feedback|feedback]] models.
2. **That expertise had a ceiling: volume without [[pedagogy|pedagogical]] priority.** Several participants found the sheer number of suggestions hard to manage. The authors read this as a gap between detecting issues and judging which issues matter most in a given draft — breadth without the selectivity an experienced teacher applies.
3. **Trustworthiness turned on data, not on accuracy.** Reservations clustered around [[privacy]] — what the platform retained and how it was used — and around the integrity of the exchange. Doubts about the system's reliability mattered less than doubts about its handling of the student's own work.
4. **Goodwill was the weakest dimension.** The feedback was described as impersonal and, for some, demotivating, even when it was accurate and clearly worded. The authors connect this to the tool's isolation from any teacher-student relationship, a limit that warmer phrasing does not repair.
5. **Reliance was bounded, and bounded by care rather than competence.** Students neither accepted nor rejected the tool wholesale; they authorized it for some tasks and withheld it for others. The binding constraint was [[trust]] and perceived caring, not capability — the reverse of the usual assumption that accuracy drives adoption.
6. **The preferred arrangement was a hybrid, with a principled division of labor.** AI for immediate, broadly applicable language feedback; instructors for individualized, relational guidance. The authors argue this is not a compromise between two equal sources but a [[human-ai-collaboration|coherent logic]] of matching each source to the role its credibility profile can support.

### How the study was done

A qualitative case study in one undergraduate process-oriented academic writing course in the Department of Translation Studies at a Turkish state university, during the spring semester of the 2024–2025 academic year. Seventeen students took part, all enrolled in the course, chosen purposively because a semester of use made them able to describe the experience in detail. GROK was the feedback tool throughout, selected because its free tier removed any cost barrier between participants. Feedback was integrated into multiple drafting and revision cycles across a fifteen-week CEFR-aligned writing course built around the Longman Academic Writing Series.

Data came from semi-structured interviews of roughly fifteen to twenty minutes, analyzed with reflexive thematic analysis: familiarization, open coding by the first researcher, comparison and refinement into candidate themes, review against the transcripts, and discussion between the two researchers throughout. The paper reports the steps taken for trustworthiness, reflexivity and [[ethics]], and the authors note that the tool was introduced as a learning resource rather than a replacement for instruction — a framing detail that matters when reading the goodwill findings, since students were given explicit permission to keep the instructor central.

### Why the credibility split matters

The theoretical claim is that Source Credibility Theory transfers to an algorithmic provider: students applied the three-dimensional appraisal unprompted, and the dimensions came apart rather than collapsing into a single verdict about whether AI is good. That separability is what makes the results actionable. A system can be judged competent and still be only partly trusted, and the ceiling on use sits in the trust and care dimension. The practical consequence is that improving accuracy addresses a constraint that is not the binding one, while transparency about data handling and instructional framing that keeps a human relationship intact address the constraints that are.

The findings also align with comparative studies concluding that AI and teacher feedback are complementary rather than interchangeable, and they supply an explanation for the hybrid preference those studies keep reporting. Students were not splitting the difference between two comparable sources. They were assigning each source the work its perceived credibility could carry.

### What the study can and cannot show

Two boundaries are worth stating before the findings are generalized. The appraisals are retrospective and [[self-report-measures|self-reported]], so the paper documents how students account for their use, not how they actually revised the text; no revision traces, drafts or performance data were analyzed. And the credibility dimensions were inferred from interview talk rather than measured with an instrument, so this study cannot say how wide the trust gap is, only that it exists and that it constrains reliance in this class.

## What this means for practice

- **Treat data handling as feedback design, not as paperwork.** Privacy uncertainty directly dampened engagement in this study, so state plainly what a tool retains about student writing before asking students to use it — the explanation is part of the intervention.
- **Give the tool the work it is trusted with.** Language-level, broadly applicable revision comments are what students in this study authorized AI to provide; argument, structure at the level of the essay's purpose, and judgment about which problems matter first are where they wanted a teacher.
- **Answer the volume problem with selection.** Because an unprompted model tends to comment on everything, add instructions or a review step that asks for the few most consequential revisions, rather than passing a full list to a student.
- **Keep the human thread visible in the feedback workflow.** The goodwill gap was about relationship, not tone, so a warm-sounding comment from the tool does not close it; schedule the instructor's individual response rather than assuming the tool substitutes for it.
- **Build the appraisal into instruction.** Asking students to say which feedback they will act on, and why, turns an implicit credibility judgment into [[feedback-literacy|feedback literacy]] and [[ai-literacy|critical AI literacy]] rather than leaving it tacit.

## Limitations

- **One class, one tool, one semester.** Seventeen students in a single translation department at one Turkish state university used one [[conversational-ai|chat assistant]]; the authors frame the aim as analytical insight for readers to assess against their own settings, not statistical generalization.
- **Self-reported perceptions from brief interviews.** Data were retrospective accounts gathered in roughly fifteen-to-twenty-minute interviews, which limits the depth of narrative available; no revision behavior, drafts or writing outcomes were collected, so the link between stated reliability judgments and actual use of feedback is asserted rather than observed.
- **An established framework applied to a new kind of source.** Source Credibility Theory was developed for human communicators, and while the authors argue it transfers, the dimensions were not measured with a validated instrument and the study does not test whether the three-part structure holds for algorithmic sources in general.
- **Findings are bounded by the instructional framing.** Students were told the tool was a supplementary learning resource within a course that kept the instructor central, which plausibly shaped both the goodwill reservations and the hybrid preference; the results may look different where [[ai-feedback-quality|AI feedback]] is the primary or only source of response.

## Connected Concepts
[[feedback]], [[feedback-literacy]], [[trust]], [[trust-calibration]], [[privacy]], [[generative-ai]], [[conversational-ai]], [[student-ai-interaction]], [[human-ai-collaboration]], [[ai-literacy]], [[critical-thinking]]

## Connected Articles
- [[care-full-feedback-genai]] — The care-full craft of feedback in an age of generative AI
- [[trust-calibration-chatbots-design-problem-2026]] — Why we believe chatbots: trust calibration as a design problem
- [[irwin-muller-efl-peer-feedback-literacy]] — Positioning Generative AI in EFL Peer Feedback: Training Feedback Literacy and Enabling Uptake in Speaking Classes
- [[mendoza-ai-feedback-feedback-literacy-srl]] — Making sense of AI feedback: how students' feedback literacy moderates the link between ChatGPT acceptance and self-regulated learning

## Citation

Serpil, H., & Mor, M. K. (2026). [Bounded reliance: A source credibility perspective on EFL students' engagement with AI-generated writing feedback](https://doi.org/10.5281/zenodo.22828386). *Journal of Language Pedagogy and Linguistics, 1*(1), 1–27.