---
title: "Share your Screen and Talk to Gemini: How Young Learners Interact with Multimodal GenAI While Solving Scratch Tasks"
created: "2026-11-17T09:40:00-05:00"
updated: "2026-11-17T09:40:00-05:00"
type: article
authors: ["Jacobs, S.", "Berning, L.", "Kiesler, N."]
published: "2026"
venue: "arXiv preprint 2611.21306"
source_url: https://arxiv.org/abs/2611.21306
evidence_context: educational
confidence: medium
pedagogy: [help-seeking, student-ai-interaction, problem-solving]
technology: [multimodal, speech-and-voice-technologies, generative-ai]
assessment: [self-report-measures]
ethics: [trust-calibration, hallucination-risk]
foundations: [computational-thinking]
methods: [qualitative-research, mixed-methods-research]
research_method: [user study]
discipline: [cs education]
level: [middle school, k 12]
audience: [instructors, educational technology developers, researchers]
page_kind: [evaluation]
sources: ['raw/papers/jacobs-young-learners-multimodal-genai-scratch-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
---

> **Synthesis:** A voice tutor that can see the screen is an attractive answer to the hands-up problem in a Scratch classroom: no reading, no typing, and context the child does not have to describe. This exploratory study put Gemini 2.5 Flash Native Audio in front of 23 fifth- and sixth-graders at one German Realschule for a 45-minute task phase, after six prior Scratch lessons, and coded 1,170 tutor turns. The speech was intelligible in 98.4% of turns and no single turn gave away a complete solution, but the tutor missed the error actually on screen in 61.5% of error-related turns, against 15.7% in an adult-run pilot. Children spoke in brief prompts, mostly answering the tutor, and 39.1% trusted its answers to be always correct even after a video told them it could be wrong. A human-like voice, the authors conclude, is not evidence of correct support.

## Key Findings

- **The tutor missed the error on screen.** It failed to identify an existing error in 61.5% (371/603) of error-related classroom turns, against 15.7% (8/51) in the adult-run pilot.
- **Delivery was good; content was not.** 98.4% of 1,170 turns were intelligible and 95.8% actionable, yet 17.0% carried a central factual error and only 53.2% were judged helpful overall.
- **No single turn gave the answer.** The tutor never supplied a complete solution within a turn (0/1,170), though the authors note it could still assemble one across several turns.
- **Children spoke briefly and reactively.** Their prompts had a median of 6 words, 29.2% were three words or fewer, and 90.8% responded to the tutor rather than initiating an exchange.
- **Trust outran accuracy.** 39.1% (9/23) believed the tutor's answers were always correct, and only 30.4% (7/23) reported noticing that it made mistakes.
- **The voice was rated above the help.** 73.9% (17/23) called it friendly and patient and 69.6% (16/23) understood it clearly, while 30.4% (7/23) said it helped them understand their error.
- **Screen sharing did not supply program state.** The pilot-to-classroom gap suggests that frames of a Scratch tab are not the same as knowing which blocks are nested inside which loop.

## A classroom test of a voice-first tutor

The study has two phases. An expert pilot in November 2025 ran eight tasks with 24 manually inserted error cases, one conversation each, producing 124 tutor turns; four computer science teachers reviewed the task sheet first. The classroom phase ran in December 2025 with 23 children, 12 boys and 11 girls aged 9 to 13 (mean 11.3), six at a time across four sessions of a 60-minute lesson. All four classes had taken the same six introductory Scratch lessons, which were their first [[cs-education|programming]] lessons. Children worked individually on 14-inch laptops with headsets, sharing the Scratch browser tab with the Gemini tutor in Google AI Studio, while screen and speech were recorded with OBS and transcribed locally with whisper-large-v3-turbo. Coding was a deductive framework of twelve tutor-response dimensions adapted from prior tutor-evaluation work, plus categories for children's prompts, applied turn by turn with the screen recording as context.

## What the tutor got right about the conversation

Measured as dialogue, the tutor performs well. Actionability was rated positive in 95.8% of 1,170 content turns, coherence in 80.3%, human-likeness in 97.9% and auditory quality in 98.4%, and no turn in either phase was rated offensive; 50.6% were encouraging and the rest neutral. It asked an open question in 54.9% of turns, which is the behavior a [[scaffolding]] prompt is meant to produce, and it withheld the complete solution in every turn. Measured against the program on screen, the picture inverts. Full identification of the error under discussion occurred in 12.9% of all content turns, a specific error location in 21.1% of the 603 error-related turns, and a false location in 13.6%; nonexistent errors were diagnosed in 4.1%. Correct and relevant guidance appeared in 60.0% of turns, but incorrect instructions rose from 7.3% in the pilot to 19.7% in the classroom. The tutor was also a competent conversational partner in the narrow sense and an unreliable [[feedback]] source in the sense that matters for [[problem-solving]].

## How the children talked to it

There were 1,216 voice prompts. Most were replies: 90.8% responded to a tutor question, instruction or remark and 4.3% were standalone queries. Prompts were short, a median of 6 words and a mean of 8.7, with 29.2% at three words or fewer and "yes" the most frequent single utterance. One third, 33.1%, addressed a concrete issue: block selection and assembly at 38.7% of those, debugging at 36.5%, an unspecific request for the next step at 25.1%. No prompt asked about a general programming concept, and twelve asked outright for the complete solution. Children also managed the pace physically, interrupting the tutor 220 times and talking over it 96 times, and corrected its content, tone or pace in 54 prompts. Small talk accounted for 178 turns, including 100 social conversations, 45 greetings and 14 insults, the ordinary [[help-seeking]] behavior of children who treat a voice as an interlocutor. Their brevity is a design constraint rather than a preference: earlier work on voice input for programming found university students mostly chose text, partly because dictated prompts stayed short ([[voice-text-prompt-problems-computing-education]]).

## Trust, and what a friendly voice buys

The questionnaire is the weakest evidence and the most troubling. Agreement with the five support statements ran from 30.4% to 43.5%: the highest was that the tutor talked about what the child saw on screen, the lowest that it helped the child understand the error, which twelve children rejected. On [[trust-calibration]], 39.1% agreed the tutor's answers were always correct while only 30.4% noticed it sometimes talked nonsense, despite an introductory video that demonstrated its fallibility. The authors' reading is that a fluent, patient voice reads as competence; ninth-graders in an earlier study rated a voice tutor highly on competence when 28.6% of its feedback was incorrect. For a [[k-12]] audience the practical consequence is that [[hallucination-risk]] cannot be handled by disclosure alone; warning students about fallibility has raised help-seeking in an intelligent tutoring system ([[ai-fallibility-warning-help-seeking]]), and here a warning video left most children's trust untouched. The authors also attribute part of the pilot-to-classroom gap to the input: an adult described one inserted error at a time, while children answered in single words and interrupted.

## What this means for practice

- **Instructors:** supervise the session and give children a check they can run, such as comparing the named block against what is on their screen. A warning video did not produce skepticism on its own.
- **Educational technology developers:** give the tutor program state, not screen frames. Reading a Scratch project's blocks and stage would let it answer the question the child is actually asking; pixel context did not.
- **Instructors:** teach the block vocabulary before handing over the tutor. Six-word prompts give even a correct model very little to diagnose, and naming blocks is a skill that also improves peer help.
- **Administrators:** evaluate a voice tutor on error detection and location rates, not on how natural it sounds. The properties that impressed the children were the ones that carried no information about correctness.

## Limitations

- 23 children in four classes at one German Realschule, with participation voluntary and the sample capped by the number of laptops and by classroom noise.
- The second author taught the participating classes, ran the sessions and served as main coder, and the paper reports no inter-rater agreement estimate.
- The unit of analysis is the turn nested within a session, so several ratings can describe the same unresolved error and the counts are not independent observations.
- The questionnaire is retrospective and [[self-report-measures|self-reported]], administered once at the end of the lesson.
- One tutor setup, and preview model versions that changed between phases: gemini-2.5-flash-native-audio-preview-09-2025 in the pilot and gemini-2.5-flash-nativeaudio-preview-12-2025 in the classroom.
- Six prior Scratch lessons do not guarantee equal individual knowledge, and teacher assistance and peer conversation continued during the sessions.

## Citation

Jacobs, S., Berning, L., & Kiesler, N. (2026). [*Share your Screen and Talk to Gemini: How Young Learners Interact with Multimodal GenAI While Solving Scratch Tasks*](https://arxiv.org/abs/2611.21306). arXiv preprint 2611.21306.
