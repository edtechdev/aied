---
title: "Authentic and functional dialogue with AI-based student avatars: Evidence from a practice-based teacher education program"
created: "2026-09-20T06:06:47-04:00"
updated: "2026-09-20T06:30:22-04:00"
type: article
foundations: [teacher-role, theories-and-frameworks, teacher-ai-competency]
pedagogy: [experiential-learning, professional-training, scaffolding, sociocultural-learning, student-ai-interaction]
technology: [conversational-ai, llm, pedagogical-agent, simulating-students, simulation, speech-and-voice-technologies]
assessment: [self-report-measures]
methods: [mixed-methods-research, qualitative-research]
research_method: [case study]
ethics: [pedagogical-safety, privacy]
audience: [faculty developers, instructors, researchers]
level: [teacher education, higher ed]
confidence: high
sources: ['raw/papers/hauk-student-avatars-dialogue-teacher-education-2026.md']
source_url: https://doi.org/10.1111/bjet.70087
reviewed_by: [editor]
---

Hauk, Menter and Schorling (2026) tested whether a short rehearsal with an AI-based student avatar gives preservice teachers a usable opportunity to practice educational dialogue in practice-based teacher education (PBTE). In a Civic Education module at Leipzig University in the winter semester 2024/25, N = 21 preservice teachers each held a 10-minute, one-to-one voice conversation with an avatar named "Marco", a lower-secondary student whose disparaging remark about immigrants and their language skills created a controversy-oriented critical incident. Sessions used the browser-based GPTAvatar-WebGL application — Whisper speech recognition, GPT-4o response generation, GoogleVoice and ElevenLabs speech output — and were followed by a 30-minute guided debriefing.

The study judges interaction quality on two dimensions. Functional Dialogue is the epistemic and pedagogical focus of the exchange: reasoning, contingent uptake, cumulative idea-building, in the dialogic-teaching tradition rooted in sociocultural theory. Authentic Dialogue is the affective plausibility of the exchange, whether the avatar sounds and feels like a plausible 15-year-old student. Four sources were combined: post-session questionnaires (five items each, 6-point scales), system metadata on talk time, turn length and pauses, content analysis of all 21 transcripts, and interviews from the debriefing.

> **Synthesis:** This exploratory case study gives [[simulating-students|simulated student]] practice a quality test rather than a feasibility test: not whether an avatar can be built, but whether the resulting [[student-ai-interaction|teacher–avatar talk]] carries the interactional properties PBTE rehearsal needs. The answer is asymmetric and, the authors argue, design-congruent — participants rated the exchange clearly functional (M = 5.37) and only moderately authentic (M = 3.71), and the transcripts show the same split (87.1% versus 37.4% text coverage). The avatar acts as a responsive counter-voice that challenges and presses for reasons, which is the lever [[scaffolding]] wants novices to work against. Moderate authenticity is read not as a defect but as fit-for-function fidelity for novices, with peer dynamics and multimodal cues named as levers for later iterations.

## Key Findings

1. Perceived quality split cleanly on 6-point scales: Functional Dialogue M = 5.37 (SD = 0.48), Authentic Dialogue M = 3.71 (SD = 0.87).
2. Transcript coding matched those ratings: Functional Dialogue codes covered 87.1% of the text, Authentic Dialogue 37.4%.
3. Within Functional Dialogue, challenge moves dominated (40.2%), then idea development (30.9%) and explicit reasoning (20%); invitations for new ideas were rare (3.5%).
4. The avatar carried the challenge work (51.1% of its text), while preservice teachers developed ideas (35.5%) and made reasoning explicit (23.3%).
5. Direct address dominated Authentic Dialogue (28.5%); empathy (6.5%) and emotional authenticity (6.6%) were rarer, and emotional authenticity came mostly from the avatar (14.5% versus 1.5%), direct address mostly from teachers (45.5% versus 3.1%).
6. Metadata show balanced participation with longer teacher turns: students 58% of speaking time and 53% of words (avatar 42% and 47%), contribution counts students M = 9.9 and avatar M = 10.8, turns 71.06 words/19.59 seconds versus 44.14 words/15.99 seconds.
7. Coding reliability was high: Krippendorff's α = 0.942 (95% CI 0.854–0.998) over 30 randomly selected passages from the double-coded subset.

## Functional first, authentic enough

The headline pattern is a function-first profile, and the authors read it against PBTE sequencing logic rather than as a shortfall. The rehearsal deliberately reduced complexity — dyadic, voice-only, no whole-class orchestration — to stabilize routines and keep novices' cognitive load on generative processing instead of managing a full classroom ecology. Moderate authenticity is framed as fidelity that is fit for function, calibrated to the target skill and the learner's stage rather than maximized indiscriminately. On this reading, credible turn-taking, role fit and contingent uptake can count as plausible even while multimodal and peer-related aspects of classroom realism stay absent, and authenticity should rise as scenarios add peer dynamics and richer nonverbal context, provided the dialogic affordances survive the addition.

## The avatar as responsive counter-voice

Speaker-differentiated coding holds the paper's most concrete design insight. The avatar was not a compliant interlocutor: it challenged most (51.1% of its text) and marked emotional authenticity far more than participants did (14.5% versus 1.5%). The preservice teachers did the elaboration work — developing ideas (35.5%) and making reasoning explicit (23.3%) — and produced nearly all direct address (45.5%). Interviews described the same thing as what made the exchange feel conversational: the avatar picking up an earlier statement, returning "yes, but" counterpoints, keeping competing claims in play. The authors trace this shape to the controversy-oriented prompt, since two-sidedness and justification only become salient when the scenario demands them. Invitations to contribute were rare on both sides (teacher 4.8%, avatar 1.5%) — a clear opening for scenario revision.

## Turn-taking, timing and the shape of a workable rehearsal

The metadata describe an interaction that behaves like a conversation rather than a quiz. Talk time and word shares were close to even, contribution counts comparable, and silent gaps included a human pause of 8.95 seconds alongside system latencies of 3.66 seconds for speech recognition and 4.65 seconds for response generation. Turn lengths of 19.59 seconds for teachers and 15.99 seconds for the avatar suggest a format that keeps the student's voice live instead of allowing long monologues. Transcripts averaged 1186 words. For the authors this interactional shape matters because it signals an ecology simple enough for a novice to stay in control while still producing sustained reason-giving talk; participants noted occasional quirks such as looking away but treated the utterances as realistic for a 15-year-old.

## What this means for practice

- **Instructors.** Treat a short avatar rehearsal as an approximation of practice, not as assessment. Seat it after principle-based input and modeling, run it individually for about 10 minutes, and follow each session with guided debriefing so the moves a participant made — or missed — become the object of reflection.
- **Scenario designers.** The prompt is the pedagogy: fix a persona, pedagogical context, critical incident and response constraints, and load the scenario with controversy, because two-sidedness and pressure for justification are what produced the challenge and elaboration profile observed here.
- **Program planners.** Do not buy realism first. Novices rated the exchange highly functional while judging it only moderately authentic, so a whole-class, high-fidelity setup is not a precondition for a meaningful rehearsal; add peer dynamics and nonverbal cues later.
- **Sensitive topics.** The scenario sat on the edge of hate speech, and the study's safeguards belong to the design: orientation, moderation guidelines, continuous instructor monitoring, the option to stop immediately, a structured debriefing, and pseudonymized aggregate-only analysis under GDPR.

## Limitations

- The sample was small and self-selected: N = 21 preservice Civic Education teachers from a single program, who chose the course format themselves; none reported prior hands-on experience with AI-based avatars.
- The scenario was fixed to one controversy case, which standardizes the rehearsal but limits inference beyond that topic and may invite social-desirability effects in participants' responses.
- Only a single brief session was captured — no longitudinal change, no transfer to classroom placements and no student-teacher learning outcomes — so no comparison with role-plays or simulations is possible.
- Outcomes rest on self-report scales (α = 0.73) and coding performed by the authors themselves; the authors call for objective cognitive-affective indicators such as cognitive-load ratings, behavioral performance rubrics or physiological proxies.

## Connected Concepts

- [[simulating-students]]
- [[pedagogical-agent]]
- [[student-ai-interaction]]
- [[conversational-ai]]
- [[sociocultural-learning]]
- [[teacher-role]]

## Connected Articles

- [[simulating-students-llm-review-2026]] — Simulating Students with Large Language Models: A Review of Architecture, Mechanisms, and Role Modeling in Education with Generative AI
- [[llm-student-simulation-teacher-insights]] — Can LLMs Effectively Simulate Human Learners? Teachers' Insights from Tutoring LLM Students
- [[valid-student-simulation-llm-2026]] — Towards Valid Student Simulation with Large Language Models
- [[medeasy-ai-standardized-patients]] — MedEasy: Designing AI Standardized Patients for Clinical Consultation Training

## Citation

Hauk, D., Menter, F., & Schorling, J.-M. (2026). [*Authentic and functional dialogue with AI-based student avatars: Evidence from a practice-based teacher education program*](https://doi.org/10.1111/bjet.70087). *British Journal of Educational Technology*.
