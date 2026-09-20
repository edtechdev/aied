---
title: "A Bilingual, LLM-Mediated Lecture Companion for Self-Regulated Learning: Architecture, Theoretical Framework, Comparative and Usability Evaluation, and a Pre-Registered Outcomes Protocol"
created: "2026-08-14T09:17:22-04:00"
updated: "2026-09-19T10:03:37-04:00"
type: article
pedagogy: [online-teaching-and-learning, self-regulated-learning]
technology: [generative-ai, llm]
methods: [design-based-research]
ethics: [global-south, inclusive-learning, multilingual-learning]
research_method: [system development]
discipline: [language learning]
level: [higher ed]
sources: ['raw/papers/bilingual-llm-lecture-companion-srl-2026.md']
confidence: high
audience: [edtech designers, instructional designers]
---

> **Synthesis:** Malhotra (2026) describes a browser-based lecture companion built for bilingual and connectivity-limited contexts, specifically the English-Hindi and 'Hinglish' mixing common in Indian classrooms. It records live lectures, transcribes them in the browser, and uses an LLM to turn transcripts into structured notes and study material, addressing conditions that most published systems ignore: tidy single-language English audio and reliable internet. The paper presents the architecture, theoretical framework, comparative and [[usability-research|usability]] evaluations, and a pre-registered outcomes protocol. It advances [[self-regulated-learning]] support and [[inclusive-learning]] for multilingual and resource-constrained [[higher-ed]] settings, connecting to [[language-learning]] and the [[digital-divide]].

## Key Findings

1. The Lecture Companion is designed as a solution to a compound, under-served gap: most [[llm]] lecture tools assume monolingual English audio and reliable connectivity, while many Indian classrooms feature English-Hindi code-switching and patchy internet — a mismatch the paper documents with UDISE+ and TRAI statistics tied to the [[digital-divide]].
2. Its architecture is local-first and bilingual-first: transcription runs on the browser's native speech-recognition API, all data is stored on-device, and a fixed LLM system prompt reads code-mixed input while letting the student choose the output language, so core study functions keep working offline.
3. The ten study modules are read as an implementation of Zimmerman's cyclical forethought–performance–reflection model of [[self-regulated-learning]], with automatic flashcard generation removing the authoring cost that blocks evidence-based retrieval and spaced practice.
4. Two design-level evaluations were completed — a feature comparison against Otter.ai, Google NotebookLM, and Anki, and a heuristic usability audit against Nielsen's ten heuristics — which found the market does not cover the full workflow for code-mixed, connectivity-constrained learners, plus one concrete, fixable usability bug.
5. No learning-outcomes study has been run yet: the paper's core claim is a working artifact and its design logic, evaluated separately from a pre-registered, quasi-experimental protocol (hypotheses, power analysis, instruments, and threats to validity) proposed for future work.

## Built for Real Classroom Conditions

Most published LLM lecture-note systems assume tidy, single-language English audio in well-connected settings — conditions that exclude many students. Across much of undergraduate education outside North America and Western Europe — the [[global-south]] context this work centers — instructors move between English and a home language mid-sentence, and reliable internet access cannot be assumed in classrooms or hostels. Government data from India's UDISE+ places internet access at only about 54% of schools nationally, with a 24-point urban–rural gap, and the National Education Policy 2020 explicitly encourages instruction in students' home languages alongside English. This lecture companion is designed for those conditions rather than the tidy version of a classroom. The paper works within the [[design-based-research]] (DSR) tradition, treating the deployed application itself as the [[research-methods-aied|research]] contribution and keeping a clean line between what the paper shows (a built artifact, its design logic, an expert audit, a market comparison) and what it only proposes to test later (whether any of this improves retention or [[self-regulated-learning]]).

## Architecture and Bilingual Transcription

The browser-based system records lectures in English, Hindi, or Hinglish (the English-Hindi mixing characteristic of Indian classrooms), transcribes them in the browser, and uses a language model to turn the transcript into structured study material. A fixed system prompt handles bilingual input without the student specifying the language, lets the student pick the output language independently, resolves spoken dates into absolute ISO dates, and locks output into a fixed JSON schema covering summaries, key points, detected gaps, flashcards, and candidate calendar reminders with confidence labels. On-device transcription and local-first storage address connectivity constraints, with AI analysis requests queued and replayed automatically when the connection returns. The dual-provider design — a bundled Claude endpoint with an optional Gemini path via the student's own key — reflects the no-budget constraints of a student developer building for zero-cost-per-user deployment, connecting to broader [[equity-in-ai-education]] and [[accessibility]] concerns for [[multilingual-learning]].

## The Ten Study Modules and the Self-Regulated Learning Loop

Rather than an unordered feature list, the paper reads the ten modules as instantiating Zimmerman's cyclical forethought–performance–reflection model. The Syllabus Tracker and Test Planner/Calendar externalize forethought by auto-populating deadlines from detected reminders; the Active Recall queue and Doubt Notebook externalize performance by converting passive review into retrieval practice and giving unresolved confusion a durable home; and Learning Memory plus Study Analytics externalize reflection by surfacing detected gaps and covered topics as a diagnosis rather than a raw activity count — a deliberate move away from the descriptive dashboards critiqued in the [[learning-analytics]] literature. The paper is careful to frame this as a design hypothesis rather than a settled claim — the artifact is built as though the SRL loop is the right lens, and a [[scaffolding]] reading (Wood, Bruner & Ross) raises an open tension about whether persistent, non-fading AI support could delay the development of independent study-planning skill. Automatic flashcard generation operationalizes the well-evidenced retrieval-practice and distributed-practice literature (Roediger & Karpicke; Cepeda et al.; Dunlosky et al.), though its binary "know it / still learning" rating is a deliberate simplification of the graded SM-2 and FSRS scheduling algorithms. The personalized, gap-based approach also positions the tool against the [[intelligent-tutoring]] literature, trading a pre-authored domain model for domain generality extracted at lecture time.

## Comparative and Usability Evaluation

The paper situates the artifact against three widely used tools. Otter.ai provides real-time transcription and summaries but supports only six languages, none Indian and none handling code-switching. Google NotebookLM offers grounded, citation-backed synthesis over uploaded documents but cannot record live audio and generates no flashcards. Anki is a mature spaced-repetition scheduler but is purely a review engine requiring manually authored cards. No compared tool combines live capture, code-mixed language support, and automatic flashcard generation in one place — the market pattern is to stack single-purpose tools. A structured heuristic evaluation against Nielsen's ten heuristics found the interface largely consistent, with one concrete, fixable inconsistency: deleting a saved session requires explicit confirmation while removing a calendar event does not, a real risk because AI-detected reminders populate the calendar automatically. The paper is candid that a single, non-independent evaluator conducted the audit and that the tool comparison rests on public documentation rather than hands-on testing.

## Pre-Registered Outcomes Protocol

No learning-outcomes study has been run at the time of writing. The paper instead specifies, in advance, a quasi-experimental, matched two-group protocol: intact class sections assigned to use the tool versus habitual note-taking, with a target sample of 60–100 students. Power is deliberately anchored to the conservative modern tutoring-effect estimate (d ≈ 0.37) rather than Bloom's two-sigma figure, making the sample adequately powered for a medium effect (d ≈ 0.5) but not smaller ones. Four research questions cover one-week retention, changes in self-reported [[self-regulated-learning]] behavior, usability under code-switching, and a behavioral [[feedback|feedback loop]] between reflection-phase [[student-engagement|engagement]] and later forethought-phase planning, tested through usage-sequence logs rather than self-report alone. The planned analysis (ANCOVA with pretest covariate, paired t-tests, and lagged correlations), instruments, [[ethics]]/IRB considerations, and a full four-way threats-to-validity treatment (internal, external, construct, statistical conclusion) are all specified before data collection, with a small unpowered pilot recommended first to de-risk instrumentation. The whole design reads as a model of rigorous [[ai-ed-evaluation]] and [[quantitative-research]] in a setting where [[rct]] random assignment is often infeasible.

## What this means for practice

- **Instructional designers.** Treat code-mixed language handling and offline-capable core functionality as baseline architecture from day one — on-device transcription, local-first storage, queued and replayed analysis requests — rather than features retrofitted to a single-language tool.
- **Instructional designers.** Keep a human verification step around AI-generated study material: notes, flashcards and detected gaps are unchecked against ground truth, so surface uncertainty instead of presenting outputs as settled.
- **Instructional designers.** Design the tool against the [[self-regulated-learning]] cycle but test the [[scaffolding]] tension explicitly: persistent, non-fading AI support may substitute for the planning skill it is meant to build.
- **Designers.** Fix audit-flagged inconsistencies before deployment — the heuristic review found that deleting a saved session demands confirmation while removing an auto-populated calendar event does not.
- **Administrators.** In grant and procurement criteria for classroom AI aimed at multilingual populations, require code-mixed handling and offline-capable core functionality as baseline conditions.

## Limitations

- No learning-outcomes study has been run: the paper reports a pre-registered, quasi-experimental protocol only (target 60–100 students, powered for a medium effect at d ≈ 0.37), so nothing it presents supports claims about actual [[learning-gains|learning gains]] or changed self-regulated learning.
- The two completed evaluations are design-level only: the heuristic audit was conducted by a single, non-independent evaluator, and the tool comparison against Otter.ai, NotebookLM and Anki rests on public documentation rather than hands-on testing.
- AI outputs are unverified against ground truth with no automated fact-checking layer, and speech-recognition accuracy on code-switched, accented classroom audio is not separately benchmarked — no word-error-rate figure exists for this pipeline.
- The design is hard-coded to Hindi-English and untested on other code-switched pairs such as Spanish-English or Swahili-English; near-term future work is an independent multi-evaluator heuristic review, a code-switched ASR word-error-rate benchmark, an instructor accuracy benchmark for flashcards and detected gaps, and eventual execution of the pre-registered protocol.

## Connected Concepts

- [[llm]]
- [[self-regulated-learning]]
- [[language-learning]]
- [[inclusive-learning]]
- [[higher-ed]]
- [[generative-ai]]
- [[digital-divide]]
- [[student-experience]]
- [[equity-in-ai-education]]

## Connected Articles

- [[ai-guided-learning-audiovideo-2026]]
- [[scheu-mobile-chatbot-journaling-motivation-2026]]
- [[kutti-ai-voice-first-learning-companion]]
- [[international-students-conversational-ai-adaptation]]
- [[savvy-student-attention-video-learning]]
- [[genai-differentiated-eap-reading-materials-2026]]

## Citation

Malhotra, T. (2026). [*A bilingual, LLM-mediated lecture companion for self-regulated learning: Architecture, theoretical framework, comparative and usability evaluation, and a pre-registered outcomes protocol*](https://osf.io/preprints/edarxiv/95rjw_v1/). EdArXiv preprint.
