---
title: "Deliberative Instructional Agents: transforming professional learning with the responsible integration of Artificial Intelligence"
created: "2026-10-31T14:20:00-04:00"
updated: "2026-11-02T06:45:00-05:00"
type: article
published: "2026"
source_url: https://doi.org/10.1080/19415257.2026.2751225
sources: ['raw/papers/cowhitt-deliberative-instructional-agents-2026.md']
confidence: high
page_kind: [framework]
research_method: [system development]
discipline: [math education]
level: [k 12, primary education, secondary]
audience: [instructors, instructional designers, educational technology developers, researchers, administrators, policymakers]
foundations: [teacher-role, educational-development, human-ai-collaboration, teacher-ai-competency, agentic-ai]
pedagogy: [professional-training, inquiry-based-learning, sociocultural-learning]
technology: [generative-ai, learning-analytics, pedagogical-agent, llm]
assessment: [formative-assessment]
ethics: [privacy, equity-in-ai-education]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-31"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Cowhitt and Gibson propose Deliberative Instructional Agents (DIAs), a class of educational technology built to make [[inquiry-based-learning|Professional Inquiry]] survivable inside a teacher's working week. The argument is that inquiry fails not for lack of theory but for lack of time, access, and analytical expertise: bringing evidence of classroom practice, educational research, and experiential knowledge into one conversation is exactly what workload prevents. Their answer is a pipeline rather than a [[conversational-ai|chatbot]]. A capture tool called Pierrot produces attributed transcripts of in-person classroom talk using student devices schools already own; an analytical layer called Cadence codes that talk against established frameworks and marks critical instructional moments; and a coaching agent called Munro deliberates with the teacher about those moments before and after the lesson. Five design principles for responsible development follow from the risks the authors name: direct evidence of practice, transparency about the research behind the analysis, specialisation by pedagogy and subject and phase, accessibility and [[equity-in-ai-education|equity]], and [[privacy]] by design. The paper is conceptual and design-oriented, and its feasibility testing is reported elsewhere.

*The paper is conceptual and design-oriented and reports no empirical data of its own. The authors mention proof-of-concept testing in two schools, with results reserved for manuscripts under review, so no accuracy, [[usability-research|usability]], or outcome figures appear here.*

## Key Findings

1. The unit of design is the inquiry cycle, not the model. The authors argue that automated collection without analysis produces an archive teachers have no time to read, while analysis without structured engagement produces [[learning-analytics|analytics]] no one acts on, so the three functions have to be integrated into one pipeline.
2. Pierrot makes attributed transcripts of in-person, multi-speaker classroom discussion possible without specialized hardware, by using the microphones of students' own iPads and Chromebooks. Students join through a QR code or unique URL and enter a chosen identifier, and the devices then run passively.
3. Cadence codes talk moves with the Scheme for Educational Dialogue Analysis, which carries 8 clusters and 33 codes, and then ranks all 1,056 possible ordered pairings of those codes by their anticipated potential to elicit Productive Disciplinary Engagement. The dashboard therefore flags critical moments in the lesson timeline rather than merely labeling turns.
4. Educational research is placed inside the interface. Selecting a marker surfaces the transcript excerpt beside published studies and a live DOI link, which the authors treat as the mechanism for closing the research to practice gap at the moment of interpretation rather than through later reading.
5. Munro runs two routines: a pre-lesson conversation organized around the moves of inviting, rehearsing, suggesting, and generalising, and a retrospective conversation grounded in the [[interpreting-and-applying-aied-research|Evidence-informed Practice]] framework. Suggestions are offered as possibilities rather than directives, which keeps the synthesis of the three knowledge domains with the teacher.
6. The claimed gains are speed, resolution, and feasibility. Evidence becomes available in the immediate aftermath of teaching, individual instructional decisions are preserved instead of fading from memory, and inquiry is embedded in planning and teaching rather than added as a separate professional development event.
7. Five design principles are proposed for the class of tools: capture direct evidence of practice, be transparent about the research guiding the analysis, specialize by pedagogy and subject and phase, stay accessible so the technology improves equity, and build privacy in from the start.

## Why deliberation rather than answers

The argument turns on a claim about classroom talk. In the familiar initiation, response, feedback pattern, the teacher's third move is where opportunities close: answering from intellectual authority removes the uncertainty that other students would need in order to challenge or extend the idea. Alexander's point, which the authors adopt, is that this move decides who retains responsibility for the intellectual work of the lesson. Seeing such a moment and choosing an alternative is hard in real time even for experienced teachers, which is why dialogic teaching is well supported in theory and thin in practice across international contexts.

A system that told teachers what to say next would therefore reproduce the problem at one remove. Munro is instead built around [[teacher-role|teacher noticing]], the attending, interpreting, and shaping that coaching is supposed to develop. It asks the teacher to say what the lesson was meant to accomplish, to rehearse how students might solve a problem, and, after the lesson, to interpret a surfaced moment against both the transcript and the research in the right-hand pane. The authors are explicit that this does not remove the intellectual work of inquiry: synthesizing evidence, research, and experience remains the teacher's job, and professional judgment stays at the center. That is the meaning of "deliberative" in the name, and it is the paper's main contribution to how [[human-ai-collaboration]] should be framed in [[professional-training]].

## Three components and one infrastructure

The technical claim is narrower than the [[pedagogy|pedagogical]] one and easier to check. Transcribing and attributing in-person discussion among dozens of speakers is the bottleneck that has kept inquiry into dialogic teaching rare; online instruction had already solved it through separate microphones at unique addresses. Pierrot's contribution is doing it in a crowded room with existing hardware, replacing the video recording and manual transcription that previously stood between a teacher and an attributed transcript.

Cadence then supplies the research that teachers cannot easily reach: it operationalizes frameworks for analyzing classroom dialogue and applies them automatically, and the dashboard keeps the underlying publications visibly attached to the output. The design point is that learning happens when teachers synthesize evidence and knowledge, not in the time spent accumulating either.

Munro converts the resulting displays into inquiry. A contribution network view, built on the authors' earlier work on narrated network diagrams, represents students as nodes and traces how ideas are taken up, developed, or challenged, with [[qualitative-research|qualitative]] excerpts embedded in tooltips. Taken together the pipeline is described as a sociotechnical infrastructure whose value lies in frequency: repeated cycles of evidence-informed judgment are what build pedagogical fluency for a demanding approach. The authors treat that as an [[educational-development]] claim about expertise rather than a claim about any single tool.

## From risks to design principles

The risks the authors name are mostly commercial and institutional rather than technical. Systems may generate recommendations misaligned with classroom realities. Competitive pressure may push developers to obscure the analytical frameworks behind their advice, leaving teachers unable to judge when an insight does not fit their context. Fees and new hardware requirements could confine early use to well-resourced schools, which in turn skews the data that later models are trained on, and transcription that mishandles regional accents or analysis blind to gendered participation could marginalize the students it is meant to serve. Privacy is the sharpest case, because the evidence at the center of inquiry is [[student-experience|student voice]], and adolescent expression is sensitive by default.

The five principles answer these risks in order. Evidence should represent instructional processes rather than proxies such as grades or task completion. Analysis should cite the research it draws on, with a proposed division of labor in which seminal sources are public while prompts and source code stay proprietary. Tools should be built for a named pedagogy in named subjects and phases, since dialogic strategies differ between mathematics and history. Access should ride on existing one-to-one device arrangements and be tested beyond liberal Western democracies. Privacy should be architectural: data minimization, pseudonymized identifiers, time-limited retention of audio, and encryption, consistent with UNESCO's 2021 recommendation and the OECD's 2024 principles. None of these is tested in the paper, and the transparency compromise in particular is asserted rather than shown to work for a teacher trying to audit an output.

## What this means for practice

- **Instructors.** Ask what evidence a tool is actually analyzing before accepting its feedback. If the system reads grades and completion data, it is inferring instruction from its products, not examining the interaction that produced them.
- **Instructional designers.** Build the research into the surface of the tool, at the point where a teacher is looking at a specific moment, instead of into a reading list or a glossary that no one opens.
- **Educational technology developers.** Budget for speaker diarization accuracy across accents and classroom conditions as a first-order requirement, and publish the [[benchmark|benchmarks]], since attribution errors silently corrupt every downstream analysis.
- **Administrators.** Evaluate AI professional learning tools on the evidence they make available, the transparency of the research behind their analysis, and their fit to a named pedagogy, rather than on efficiency claims.
- **Policymakers.** Treat classroom audio and transcripts as sensitive data requiring privacy by design and time-limited retention, and consider whether procurement rules can keep such tools from becoming a privilege of well-resourced schools.

## Limitations

- The authors state that the contribution is primarily conceptual and design-oriented. Proof-of-concept testing is said to have been completed in two schools with positive [[teacher-education|initial teacher]] reactions, but the underlying cases and reactions are in manuscripts under review, so no data appear in this paper.
- No benchmark for Pierrot's transcription accuracy or speaker attribution is reported; systematic benchmarking across classroom conditions and diverse student populations is named as the next phase of work.
- The ranking of 1,056 ordered code pairings by anticipated potential to elicit Productive Disciplinary Engagement is an expert-valued heuristic, not a validated model, and nothing in the paper tests whether flagged moments predict learning.
- The DIA is specialized to dialogic pedagogy in primary and secondary mathematics, so its claims do not transfer to other subjects or phases without redesign; the authors note that dialogic strategies differ in history, for instance.
- The equity and commercial analysis is argued rather than evidenced: no cost, procurement, or adoption data are presented, and the claim that early adoption shapes how the underlying models develop is a projection.
- There is no implementation evidence on whether teachers sustain the pre- and post-lesson routines, or how much time the pipeline actually returns to them.

## Citation

Cowhitt, T., & Gibson, M. (2026). [*Deliberative Instructional Agents: transforming professional learning with the responsible integration of Artificial Intelligence*](https://doi.org/10.1080/19415257.2026.2751225). *Professional Development in Education*.
