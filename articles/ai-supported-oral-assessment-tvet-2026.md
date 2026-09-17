---
title: "Designing AI-Supported Oral Assessment in TVET"
created: "2026-09-14T09:12:54-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
tags: [authentic-assessment, assessment, accessibility, multilingual-learning, human-in-the-loop-ai, privacy, design-thinking, professional-training, inclusive-learning, llm]
sources: ['raw/papers/ai-supported-oral-assessment-tvet-2026.md']
confidence: high
---

> **Synthesis:** AkoVoice is an offline-capable, voice-based assessment tool trialled in four Level 3 Automotive classes and one Level 3 Engineering class at Toi Ohomai Institute of Technology, and its defining design choice is to keep AI in the role of evidence-surfacer rather than judge — a [[human-in-the-loop-ai|human-in-the-loop]] arrangement that preserves the judgment of the human assessor. The 33 learners surveyed judged speaking in real time a natural fit for this kind of [[authentic-assessment|authentic assessment]], with none disagreeing that voice felt right compared with a written [[eportfolio|portfolio]] and 21 of 33 (64%) calling the task realistic. Because the whole assessment cycle runs on learner-owned phones against a single mid-range laptop hosting open-weight [[llm|LLMs]], [[accessibility]] and data-residency constraints that block cloud tools in steel-framed workshops are addressed rather than assumed away. The work extends the [[design-thinking]] tradition of human-centered AI design into assessment and demonstrates that [[multilingual-learning|multilingual]] capture and cross-framework evidence transfer are feasible without surrendering learner data.

## Key Findings

1. Across five classes in semester one of 2026 — four Level 3 Automotive (two of them in offline mode) and one Level 3 Engineering — 33 learners completed the embedded survey, and 21 of 33 (64%) agreed the interactive voice task was realistic and similar to situations that could occur outside class.
2. None of the 33 respondents disagreed with the statement that "speaking and responding in real time felt right for this type of assessment compared with completing a written portfolio", and the same 21 of 33 (64%) agreed the voice format gave a clear way to communicate what they knew or could do.
3. Word counts for identical questions varied between five and eight times between learners in every cohort (June 93–523; July 92–796; August 309–811), yet being fluent or more verbose did not result in greater accuracy on closed, fact-based questions.
4. Nine learners across four cohorts answered a question using between 2 and 13 words and were all marked correctly; the shortest correct answer was two words, "3500 kgs", matched on value rather than phrasing, while "the safe working load is three tons" was flagged as not fully correct against a 3.5-ton marking guide reference.
5. A complete assessment cycle of capture, storage, AI judgment drafting and [[teacher-role|teacher]] reporting ran with no internet connectivity at any point, using Mistral 7B via Ollama, faster-whisper for speech-to-text and Chatterbox for text-to-speech on one Windows laptop with 8 GB of graphics memory, with up to 12 learners assessed simultaneously in the same workshop.
6. Offline deployment required two QR codes — one to join the laptop-hosted private Wi-Fi and DNS network, one to launch the assessment — against a single QR code in online mode, and no software was installed on learner phones or the teacher's device.
7. Approximately 10% of learners elected not to participate after the briefings; recordings were encrypted at rest on an Aotearoa New Zealand host and deleted after 90 days, or sooner if not needed.
8. Adjacent NZ trials in Horticulture (14 learners) and Dairy (11 learners) produced a 95% match between the agent's preliminary grade and the human tutor's grade, with 21 of 24 respondents interested in further AI-assisted assessment; nationally, NZQA has automatically scored digitally submitted Writing assessments since May 2025, with human review of the approximately 40% boundary results.

## Mixed-Methods Trial Design and the Three AI Roles

The study used a [[mixed-methods-research|mixed methods]] design to compare [[assessment|traditional assessment]] with voice-enabled AI approaches across vocational programs, with participants in four Level 3 Automotive classes and one Level 3 Engineering class in semester one of 2026; observations took place in five classes, two of them offline. AkoVoice was built internally by the institute's educational technology advisor — "ako" in te reo Māori encompasses both teaching and learning — for a specific gap: assessing knowledge in the workshop itself, close to engines, machinery or cars on hoists, rather than through a PC interface, while cohorts of 8 to 18 learners moved around the space during knowledge checks. Each learner received one question about the equipment or process, a second on safety and hazards, and then a photograph of the equipment or location; the survey sat on the final screen. [[ethics|Ethical]] approval came from the institute's Research Committee in December 2025.

The design is framed by the [[design-thinking]] framework in Adams et al. (2024), which positions human-centered AI at the intersection of desirability, feasibility and viability, extended here to place the learner at the center of assessment. Three roles organize the tool: the learner in [[socratic-method|Socratic dialogue]] with the AI as tutor, an observer agent that listens silently to learner and assessor dialogue, and an optional moderator agent that surfaces inconsistencies between assessor judgments for internal and external moderation and can act as a triangulation viewpoint in appeals. Moderator mode has only been through preliminary testing, not validated with a sufficiently robust sample size, and does not replace human judgment. The classroom deployment reported here is observer mode, in which the agent does not interrupt or speak but reviews a transcription and surfaces rubric evidence for the teacher's judgment. The voice assessments ran in parallel to learners' actual assessments and were not used in any [[summative-assessment|summative]] results, placing the trial in [[formative-assessment|formative]] territory.

## Evidence on Learner Experience, Accuracy and Fluency

Survey items mapped to four of the five dimensions of [[authentic-assessment|authentic assessment]] described by Gulikers et al. (2008): assessment task, physical context, social context and evidence form. Nearly two-thirds of learners — 21 of 33, or 64% — agreed the assessment was realistic and reflected real-life or practical situations, and the same proportion agreed the voice format gave a clear way to communicate what they knew or could do. No respondent of the 33 disagreed that speaking in real time felt right compared with a written portfolio. Seven learners described it as good, easier than writing, quicker to complete, or a better way to explain their thinking, and six would make no changes; suggested improvements concerned learner preference, [[language-learning|second language]] support and technical functionality. The [[accessibility]] dimension matters for an [[inclusive-learning|inclusive]] account of assessment: oral formats are documented as preferred by some learners with dyslexia, and observer-mode capture preserved naturally occurring dialogue, including learners conferring with each other before submitting their own responses.

The most interesting tension is between perception and marking. A self-described "not too talkative" learner rated the statement that the outcome represented their learning as accurately as a written portfolio would at 2 (disagree) on the Likert scale — yet short or terse answers were among the most correct. Nine learners across four cohorts answered a question in between 2 and 13 words and were all marked correctly, the shortest being two words, "3500 kgs", while an answer stating "The safe working load is three tons" was flagged not fully correct against a 3.5-ton marking guide. Accuracy also survived workshop noise: "This horse can hold 3,500 kgs" was extracted and matched automatically, whereas a transcript reading "Fótann" was left unmarked for the teacher to confirm as "four tonne" against the audio playback.

## Offline Architecture, Data Sovereignty and Policy Context

The reference implementation is a browser-based Next.js application on a PostgreSQL database, with no software installed on the learner's phone or the teacher's device. Storage, speech-to-text and judgment each sit behind an adapter so models can be swapped out, and evidence plus excerpts of the learners' own words appear in a teacher dashboard. The offline build uses local open-weight models — Mistral 7B via Ollama, faster-whisper for STT and Chatterbox for TTS on one Windows laptop with 8 GB of graphics memory that also serves its own Wi-Fi, DNS and HTTPS. Offline capability was the point rather than a fallback: steel construction and machinery cause weak wifi and localised interference, and the design targets remote worksites with intermittent connectivity.

Because participants' voices are captured, [[privacy]] and data sovereignty are design constraints rather than compliance afterthoughts: recordings go to an Aotearoa New Zealand cloud store, encrypted at rest and deleted after 90 days or sooner, while offline assessment including LLM judgment stays on the assessor laptop and learners' phones. Adams and Riddle (2023) argue deployment should be broadly consistent with the Algorithm Charter for Aotearoa New Zealand (2020), and each participant's voice is treated as a personal and cultural expression they and their heritage carry (Te Mana Raraunga, 2018); consent to be assessed by voice is not consent to train or fine-tune AI models or to build voice profiles or biometric identifiers. The design anticipates the EU AI Act, whose Annex III classifies AI used to evaluate learning outcomes in vocational training as high risk, requiring transparency, human oversight, accuracy and bias testing. New Zealand's policy context is thinner: as of August 2026 there is no sector-specific TVET framework and the July 2025 national strategy is light-handed. One named risk is bias around accent, vocabulary and cultural expression — flagged rubric criteria included "engaging", applicable in a western context but not universally, and a review notes field was added for descriptors involving engagement or appropriate language that would affect second-language speakers.

## Limitations and Directions Beyond the Workshop

The authors are explicit about what the trial cannot claim. Speech-to-text accuracy constraints were not fully tested with a range of learner accents. The assessor laptop must be mains-powered during Socratic dialogue to deliver a naturally paced conversation, and TTS quality is heavily constrained by hardware memory, so the most natural experience requires more expensive, gaming-oriented hardware than the mid-range laptops used. Cultural context has been designed and tested for observer modes in long-form presentations but not used with learners in assessment; a narrative audio study comparing AI and teacher judgment is planned for late 2026. The research is single-institution and rubric-based rather than portfolio-based, and multilingual testing (English, Korean, Mandarin Chinese) has not yet reached class deployments.

What the work contributes is nonetheless specific: a method for voice assessment where AI surfaces the evidence and the teacher makes the judgment in online and offline use; a reference implementation for offline environments; and an initial demonstration of multilingual capture across two languages. The rubric schema supports NZQA Unit Standards in testing but is presented as portable to the EQF, AQF, NSQF or other national frameworks — the mechanism by which digitized oral evidence becomes transferable across standards. For [[professional-training]] in trades and service contexts, the design reframes the scalability objection to oral assessment: conducting it and grading the result can now be partly absorbed by [[conversational-ai|conversational AI]], leaving staffing and hardware rather than [[pedagogy]] as the binding constraint. AkoVoice is offered as one of the earliest demonstrations of an open, offline AI-supported oral assessment for other TVET organizations to extend.

## Connected Concepts

- [[authentic-assessment]]
- [[assessment]]
- [[accessibility]]
- [[inclusive-learning]]
- [[human-in-the-loop-ai]]
- [[multilingual-learning]]
- [[privacy]]
- [[design-thinking]]
- [[professional-training]]
- [[formative-assessment]]
- [[summative-assessment]]
- [[socratic-method]]
- [[llm]]
- [[culturally-relevant-pedagogy]]
- [[regulation]]
- [[speech-and-voice-technologies]]
## Connected Articles

- [[ai-vocational-education-training-review]] — Artificial intelligence in vocational education and training: A systematic review of educational purposes, theoretical conceptualizations, and empirical effectiveness
- [[asynchronous-oral-assessment-2026]] — Asynchronous Oral Assessments: Enhancing Integrity, Engagement, and Communication in the AI Era
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsidering the Use of Oral Exams and Assessments: An Old Way to Move Into a New Future
- [[socratic-tests-conversational-assessment]] — The Theoretical Foundation of Socratic Tests: Dynamic, Multimodal, Conversational Examinations
- [[zhan-boud-du-authentic-assessment-scoping-review-2025]] — Designing for Authentic Assessment: A Scoping Review
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond Detection: Redesigning Authentic Assessment in an AI-Mediated World
- [[kutti-ai-voice-first-learning-companion]] — Kutti AI: A Voice-First, Offline-Capable Learning Companion with Real-Time Struggle Detection for Visually-Impaired Children
- [[dollinger-equitable-assessment-ai-2026]] — Reimagining Success and Failure: Equitable Assessment Practices in an Age of Artificial Intelligence
- [[multimodal-embodied-cognition-oral-explanations-2026]] — A Multimodal Framework for Embodied Cognition in Oral Explanations
- [[sovereign-hive-titl-further-education-2026]] — Atmospheric Regulation in the Age of Generative AI: The Sovereign Hive and the Tutor-in-the-Loop (TITL) Framework for Equity in Further Education

## Citation

Adams (2026). [*Designing AI-Supported Oral Assessment in TVET*](https://osf.io/preprints/edarxiv/2meud_v1/). EdArXiv Preprints.
