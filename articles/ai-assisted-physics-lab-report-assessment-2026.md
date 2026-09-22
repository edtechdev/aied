---
title: "AI-Assisted Assessment of Experimental Physics Laboratory Reports: Potential, Limitations, and Support for Teaching Practice"
created: "2026-09-22T09:31:48-04:00"
updated: "2026-09-22T09:31:48-04:00"
type: article
published: "2026-09-18"
sources: ['raw/papers/ai-assisted-physics-lab-report-assessment-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [secondary analysis]
discipline: [physics education]
level: [higher ed, undergraduate]
audience: [instructors, assessment designers]
technology: [generative-ai, llm, multimodal]
assessment: [automated-assessment, ai-feedback-quality, assessment-validity, evaluative-judgment, feedback, formative-assessment]
ethics: [hallucination-risk, trust]
contributors: [editor]
connected_faqs: [ai-feedback-at-scale]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** Abreu, Stari, and Martí revisit a previously reported experience in which [[generative-ai|ChatGPT]] models graded and commented on experimental physics laboratory reports alongside instructors, and ask what actually determines whether the output is usable. Their answer moves the question away from "can the model reason about physics" toward document conditions: a report can contain an equation, a graph, or a unit that the model never successfully retrieves, so an [[assessment-validity|apparently sound assessment]] may rest on evidence that was never available. They compare batch API processing against conversational review, propose a three-stage workflow that keeps [[evaluative-judgment|teacher judgment]] on the final decision, and argue that the strongest contribution of these tools is systematized information about recurring difficulties rather than a grade.

## Key Findings
1. **Model generation changed what could be attempted.** GPT-3.5 handled textual review and simple conceptual errors, GPT-4 added cross-section consistency, GPT-4o added joint text-and-image processing, and reasoning-oriented models extended multistep mathematical work.
2. **Availability of evidence is not the same as its presence in the document.** An equation, graph, table, or unit may be correctly included in a report yet not be retrieved in the processed content the model works from.
3. **Differences from instructor grading can be extraction failures.** Because a small change to a value, unit, sign, or expression alters the physical interpretation, a disagreement need not indicate a reasoning problem.
4. **Batch processing and conversation do different jobs.** API processing applies identical instructions and rubric criteria across many submissions; conversational review lets an instructor direct attention to one specific criterion, equation, or figure.
5. **Token consumption is a design variable.** Usage depends on document length, instruction length, rubric length, and requested feedback, and per-report differences accumulate across dozens or hundreds of submissions.
6. **Rubric items do not tolerate automation equally.** Objectives was judged the safest item to delegate after general review, while data analysis and conclusions require [[teacher-role|teacher]] verification of calculations, units, graphs, and uncertainties.
7. **Aggregate analysis can guide teaching.** Processing a set of reports reveals which difficulties recur — uncertainties and significant figures, graph interpretation, model selection, units — supporting collective feedback instead of repeated individual comments.

## Document processing sets the ceiling
The paper's central distinction is between evidence that exists in a report and evidence that is available to the model after processing. Sending a PDF directly does not guarantee that numbers, symbols, units, mathematical expressions, graph labels, table structures, and page relationships survive extraction, and high character-recognition accuracy does not guarantee that structure and meaning are preserved — in a laboratory report a dropped sign or a misread axis changes the physics. Their response is to treat processing as a stage of the [[assessment]] process and to discipline the inputs: high-resolution PDFs rather than photographed scans, equations written in an equation editor rather than inserted as images, and graphs with legible axes, units, and legends inside the figure. Instructions should also require the model to cite concrete evidence for each score and to state when it cannot verify a criterion for lack of legible evidence.

## Two modes of interaction, and the workflow that combines them
Batch processing through an API gives procedural consistency and a first structured pass over a large set of reports, but it requires the instructions, rubric, and output format to be fixed in advance. Conversational interaction is flexible and focused — an instructor can ask about a single criterion or point the model at a particular fragment — but each exchange adds processed tokens, so it scales poorly. The authors recommend a hybrid: process everything through the API, use the responses to flag assessments that are superficial, invalid, or grounded in hard-to-retrieve evidence, then review those cases conversationally against the original report. The three stages are the first [[automated-assessment|AI-assisted review]], the identification of cases requiring attention, and focused teacher review. Neither mode replaces [[human-in-the-loop-ai|teacher judgment]]; the instructor verifies evidence, contextualizes observations, and decides what reaches the student.

## From individual reports to group-level patterns
The most transferable idea here is the aggregate view: reading reports one at a time shows each student's errors but hides which errors recur, whereas joint processing can reveal that a difficulty with uncertainty treatment or graph interpretation appears across a substantial share of submissions. That information supports [[formative-assessment|instructional response]] at the group level: a session on data representation, a worked discussion of how results relate to conclusions, or a [[feedback]] summary of the most frequent difficulties. The authors are explicit that this is supporting information for [[pedagogy|pedagogical]] decisions, not an automatic [[cognitive-diagnosis|diagnosis]] of learning.

## What this means for practice
- **Instructors.** Separate the rubric items you are willing to delegate from those you are not: accept objectives after a general review, but verify anything that depends on equations, numbers, units, graphs, or uncertainties yourself.
- **Instructors.** When a response looks doubtful, re-open the specific criterion conversationally and point the model at the exact figure or equation instead of discarding the tool.
- **Assessment designers.** Require each score to be tied to citable evidence from the report, so an observation you cannot trace back to the text is visible as unsupported.
- **Laboratory coordinators.** Tighten the submission format — high-resolution PDFs, editor-written equations, legible labeled graphs — because document quality conditions what any automated analysis can retrieve.
- **Course teams.** Use batch processing to map recurring difficulties across a cohort, then spend contact time on the patterns.

## Limitations
- The analysis revisits a single experience in one Experimental Physics course, on one experimental activity about reaction time and statistics, so the guidance rests on a narrow base.
- No [[quantitative-research|quantitative]] agreement statistics between model and instructor scores are reported, and the rubric-item recommendations are the authors' own elaboration from that experience rather than a validated instrument.
- The work spans GPT-3.5, GPT-4, GPT-4o and the GPT-5 series up to GPT-5.4, so its conclusions describe a moving target rather than a fixed capability.

## Connected Concepts
- [[automated-assessment]]
- [[ai-feedback-quality]]
- [[assessment-validity]]
- [[evaluative-judgment]]
- [[physics-education]]
- [[feedback]]
- [[formative-assessment]]
- [[generative-ai]]
- [[multimodal]]
- [[hallucination-risk]]
- [[human-in-the-loop-ai]]
- [[educational-measurement]]
- [[higher-ed]]

## Connected Articles
- [[tripartite-feedback-framework-ai-assessment-2026]] — A Tripartite Feedback Framework for AI-Assisted Assessment of Complex Reports in Higher Education
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI-assisted, instructor-supervised grading and feedback in higher education: Design and evaluation of an end-to-end pipeline
- [[cvengros-grading-handwritten-chemistry-ai-2026]] — Assisting the grading of a handwritten general chemistry exam with artificial intelligence
- [[ai-grading-handwritten-physics-2026]] — Large Scale AI Grading of Handwritten Physics Assessments: Score Agreement and Olympiad Team Selection Outcomes
- [[gpt4-handwritten-math-exam-grading-2026]] — AI-assisted automated short answer grading of handwritten university-level mathematics exam
- [[ai-scoring-language-bias-physics]] — AI-based scoring systematically underestimates conceptual understanding of linguistically weak students' explanations in physics
- [[chatgpt-virtual-lab-teaching-assistant-biology-2026]] — ChatGPT as a Virtual Laboratory Teaching Assistant in Undergraduate Biology
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]] — Can ChatGPT Replace the Teacher in Assessment? A Review of Research on the Use of Large Language Models in Grading and Providing Feedback

## Citation
Abreu, M., Stari, C., & Martí, A. C. (2026). [AI-Assisted Assessment of Experimental Physics Laboratory Reports: Potential, Limitations, and Support for Teaching Practice](https://arxiv.org/abs/2609.22417). arXiv:2609.22417.