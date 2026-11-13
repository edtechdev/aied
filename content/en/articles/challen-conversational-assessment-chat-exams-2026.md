---
title: "Scalable Conversational Assessment: Chat-Based Exams with a Two-Agent LLM Pipeline"
created: "2026-11-13T09:10:00-05:00"
updated: "2026-11-13T10:45:00-05:00"
type: article
page_kind: [evaluation]
research_method: [system development, case study]
evidence_context: educational
discipline: [cs education]
level: [higher ed]
audience: [instructors, assessment designers, software developers]
sources: ['raw/papers/challen-conversational-assessment-chat-exams-2026.md']
source_url: "https://arxiv.org/abs/2611.17220"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-13"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-13"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-literacy, human-ai-collaboration]
assessment: [oral-assessment, automated-assessment, formative-assessment, summative-assessment, assessment-validity, remote-proctoring]
technology: [llm, conversational-ai, generative-ai]
---

> **Synthesis:** Challen and Zilles (2026) take the [[oral-assessment|oral exam]] — the one [[assessment|assessment]] format an [[llm|LLM]] cannot complete for a student — and build a chat-based version that scales. A student-facing interviewer [[agentic-ai|agent]] talks to the student but never sees the rubric; a hidden evaluator holds it, tracks progress and grades. The finding that matters is that the system's leniency came from grading turn by turn rather than reading the whole conversation, which a better rubric cannot fix on its own.

## Key Findings

1. Separating the interviewer from a hidden evaluator prevents answer leakage: the interviewer never holds the rubric, so a student who tries to extract answers is questioning an agent that does not have them.
2. Testing personas on real course topics failed, because the model supplied knowledge a weak student should not have had.
3. A deliberately fictional topic made each persona's knowledge depend only on what its prompt granted.
4. The deployed evaluator was too generous at the top of the scale, and a blind re-grade was much harsher.
5. The gap came from grading incrementally rather than reading the whole transcript, not from the judge model.
6. Crediting knowledge the interviewer supplied is the failure the rubric most needs to prevent.

## Why one agent cannot both interview and grade

The problem is information flow, not model quality. An interviewer that knows the full rubric will eventually reveal it, naming the concept a student missed or asking a question that supplies half the answer; the student can hand that content back and be credited for it. Splitting the roles means the interviewer receives one instruction per turn, so leakage has to survive a channel that carries no criteria. The evaluator sees everything and grades only what the student volunteered.

That division also does the conversational work: the evaluator decides when an answer is thin enough to probe, when to move on and when a student has plateaued, the judgment a human examiner makes silently and inconsistently. It advances once every criterion is met or further [[prompt-engineering|prompting]] looks unlikely to help. The authors describe [[conversational-ai|conversational assessment]] as a general pattern: the engine consumes a rubric in a text file, and any course where explanation matters could author one.

## Testing an examiner with simulated students

Static validation does not work here: a follow-up question produces the answer that is then assessed. The team ran whole conversations against [[simulating-students|simulated students]] with a stated knowledge level, and discovered mid-validation that the persona's own model knew the course material — a persona told to be clueless about the Turing test could still describe it. Their fix was a fabricated topic, the Korvath Procedure, an invented method in computational ecology with its own metrics and pass condition, so no pretrained knowledge could contaminate the test.

The results test both calibration and robustness. Five legitimate personas landed on their target grades, and six adversarial ones — answer extractors, prompt injectors, confident fabricators, minimalists, derailers, social engineers — were all scored unsatisfactory across 619 automated checks. The fictional assessment ships in production as a flagged test with the real rubric structure, making the harness a regression suite rather than a one-off study: a mid-semester prompt revision misgraded the weaker legitimate personas, and the sweep caught it before students met the change.

## What the post-hoc audit found about leniency

The deployment was small: eleven non-CS majors in an [[ai-literacy|AI literacy]] seminar used the system on three repeatable assignments, then once as a [[remote-proctoring|proctored]], single-attempt, time-limited exam. Of forty-one evaluated attempts, a blind judge from a different model family, seeing only the transcript and the rubric, agreed with the deployed grade on 35% of the forty graded attempts and within one level on 80%; where the deployed evaluator awarded the top grade twenty times, the blind judge awarded it twice. Repeating the exercise with the production model reproduced the disagreement, which localized the cause to incremental grading: accumulating credit turn by turn did not sufficiently discount content the interviewer's own follow-ups elicited.

Two experienced graders, calibrating on ten transcripts, agreed exactly on six and within one level on nine; the residual split came from how strictly each credited unprompted knowledge. A persona added after the audit — complete knowledge, no initiative, one fact per question — should have earned no more than satisfactory, but the deployed configuration gave it the top grade. Their proposal is to keep the live evaluator for conversation management and compute the grade of record from a whole-transcript second read, flagging disagreements for instructor review.

## What this means for practice

- **Instructors:** Run conversational assessment formatively first, and grade the transcript rather than the running score; a student who only answers when prompted should not reach the top band.
- **Assessment designers:** Write the rubric so credit depends on who introduced a criterion's content, and test it against a persona that knows the material but volunteers nothing.
- **Program designers:** Budget the audit as part of the assessment cycle, not as one-time validation; every prompt or model change re-norms the examiner.
- **Administrators:** A chat exam composes with existing proctoring infrastructure, the only setting the authors found defensible for grade-bearing use.

## Limitations

- The deployment was eleven students in one elective seminar at a single university, and the assessments were voluntary and not grade-bearing, so high-stakes use is untested.
- Only forty-one attempts were re-graded, and the human calibration was ten transcripts graded by the two authors, one of whom built the system.
- Personas ran on one model and the production evaluator on another, so the behavior is tied to those versions; personas are archetypes, not the full range of real students.
- Proctoring is asserted as the mitigation for relaying questions to another AI, but no test reports how often students attempt it, and nothing measures whether the assessment improves learning.

## Citation

Challen, G., & Zilles, C. (2026). [*Scalable Conversational Assessment: Chat-Based Exams with a Two-Agent LLM Pipeline*](https://arxiv.org/abs/2611.17220). arXiv:2611.17220.
