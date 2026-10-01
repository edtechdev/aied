---
title: "DraftTrace: A Multi-View Analytics Environment for AI-Integrated Writing"
created: "2026-10-01T09:07:02-04:00"
updated: "2026-10-01T09:07:02-04:00"
type: article
sources: ['raw/papers/drafttrace-ai-writing-analytics-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [system development, case study, survey]
level: [higher ed, graduate]
audience: [instructors, researchers, educational technology developers, learning analytics designers]
pedagogy: [student-ai-interaction, help-seeking]
technology: [learning-analytics, educational-nlp, generative-ai, llm, visualization]
assessment: [process-oriented-assessment]
methods: [ai-ed-evaluation, quantitative-research]
ethics: [privacy, ai-use-disclosure]
foundations: [human-ai-collaboration, academic-integrity]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** [[generative-ai]] has broken the assumption that a finished essay reveals the work behind it, and Chandarana, De and Gupta argue no single measure repairs it. DraftTrace captures three complementary views — the final product, the [[writing-education|writing process]], and the student's interactions with an integrated AI assistant — and reconstructs how a document develops over time into submission-, longitudinal- and class-level [[learning-analytics]]. Deployed with 81 students in a graduate NLP course, it compared their sessions against 81 automated LLM-typed responses and 11 copy-typed sessions. Product measures (readability, word length) separate LLM-formulated text from student prose regardless of entry method; process measures (typing speed, revisions, editor departures) separate how text was entered. Copy-typing becomes visible only when the two are read together, and interaction traces show clarification early and verification late.

## Key Findings
1. **Three views, jointly captured.** DraftTrace aligns product, process and AI-interaction signals in one environment, tagging assistant-inserted text at the transaction level to link interaction evidence to product and process.
2. **Product measures distinguish who formulated the text.** Median Flesch Reading Ease was 52.8 for classroom responses against 38.4 for automated and 39.9 for copy-typed, with median word length rising from 4.67 to 5.18 and 5.40.
3. **Process measures distinguish how the text was entered.** Automated entry ran at a median 49 wpm with 2.7 revisions per 100 characters and no editor departures; classroom writers managed 27.5 wpm, 12.5 revisions and 14 departures.
4. **Copy-typing requires both views.** Its product resembles automated writing while its process resembles slow human typing without classroom pauses or departures, so only the combined views identify it.
5. **Assistant use shifts across the session.** Of the 32 students who used the assistant, early prompters mostly sought clarification (6 of 10) or direct help (4 of 10); late starters mostly verified answers (9 of 10).
6. **Collaboration follows sustained engagement.** Multi-turn collaboration appeared only among students issuing three or more prompts (7 of 13); shorter users sought direct help or verification.
7. **Instructors want visibility but doubt their tools.** In a ten-respondent survey, nine reported suspected inappropriate AI use at least sometimes, yet only one was very confident in the current investigation process.

## Why the final artifact stopped being enough

Writing analytics has traditionally taken two routes. The product route scores completed text, from [[automated-essay-scoring]] to [[feedback|feedback generation]]. The process route reads keystroke events — writing speed, pauses, bursts, revisions, deletions — which research links to essay quality. But behavioral signals do not map uniquely onto cognitive activities — a pause can mean planning, reflection or revision — and [[generative-ai]] adds another cause: interaction with an assistant. DraftTrace's four design goals bind the signals instead: an integrated view, configurable AI support, longitudinal and class-level analytics, and low-friction integration with existing [[higher-ed]] workflows.

## What the environment captures

DraftTrace is a web application whose editor uses TipTap/ProseMirror; browser and server share one document schema so instructor playback and server metrics use identical logic. Process capture records every change as an event with a timestamp, its text and its input channel — typing, paste, drag-and-drop, undo/redo, or assistant insertion — and logs editor departures. After submission it replays events to rebuild the document and labels each character by how it entered — typed, assistant-inserted, pasted or unknown. The assistant is proxied through the server, each prompt persisted and responses saved to an instructor-visible transcript. These signals feed [[visualization|instructor-facing views]] at submission, longitudinal and class level.

## The case study: three ways a response can be produced

The study collected traces under three settings. In classroom writing, 81 students in a graduate [[educational-nlp|natural language processing]] course answered two related [[prompt-engineering|prompting]] questions in 15 minutes using lecture slides and the integrated assistant but no external AI tools. Automated writing added 81 sessions in which an [[llm]] generated responses to the same questions, entered through a mechanism approximating human typing. Copy-typing added 11 sessions where participants typed out provided responses by hand. Copy-typing is the instructive case — LLM-like on product, human-like but pause-free on process.

## Instructor demand and the ethics of writing traces

A ten-instructor survey complemented the classroom study. Nine of ten reported encountering suspected inappropriate AI use at least sometimes, yet only one was very confident in their process for investigating such cases. Process visibility and final-submission analysis were each rated very valuable by seven of ten respondents; AI access controls, interaction visibility and playback by six. Acceptance was conditional: six of ten found copy/paste activity and AI-interaction history acceptable to collect, while typing patterns and AI processing were acceptable only under limited circumstances. The authors treat writing traces and AI conversations as sensitive educational data needing [[ai-use-disclosure|disclosure]] and [[privacy|access and retention controls]].

## What this means for practice

- **Instructors.** Read process and product together before concluding: copy-typed work resembles LLM writing on product measures but differs on typing speed, revisions and editor departures.
- **Instructors.** Configure AI access per assignment rather than banning or allowing it wholesale, keeping it oriented toward understanding, not finished answers.
- **Faculty developers.** Teach the staged use the traces show — clarification early, verification late — and treat single-prompt requests for an answer as the least productive use.
- **Administrators.** Adopt writing analytics only with explicit governance: keystroke traces and full AI conversations are sensitive educational data needing disclosure, access and retention controls.
- **Researchers.** Use per-assignment assistant configuration as an experimental lever to study when assistance should be provided and in what form.

## Limitations

- DraftTrace captures activity only within its own writing environment and cannot observe external resources or activities that contributed to a response.
- The case study is one graduate-level NLP course running a short 15-minute activity (81 classroom, 81 automated, 11 copy-typed sessions), so patterns may vary across tasks, populations and settings.
- The instructor survey has ten respondents and reports perceptions rather than measured outcomes.
- The views are complementary but incomplete: pauses do not map uniquely onto cognitive activities, and [[student-ai-interaction|AI interaction]] adds further ambiguity.

## Citation

Chandarana, D., De, S., & Gupta, V. (2026). [*DraftTrace: A Multi-View Analytics Environment for AI-Integrated Writing*](https://arxiv.org/abs/2609.36544). arXiv preprint.