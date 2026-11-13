---
title: "Scalable Conversational Assessment: Chat-Based Exams with a Two-Agent LLM Pipeline"
created: "2026-11-13T09:10:00-05:00"
updated: "2026-11-13T09:10:00-05:00"
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
verified: [citation, numbers, links]
foundations: [ai-literacy, human-ai-collaboration]
assessment: [oral-assessment, automated-assessment, formative-assessment, summative-assessment, assessment-validity, remote-proctoring]
technology: [llm, conversational-ai, generative-ai]
---

> **Synthesis:** Challen and Zilles (2026) take the one [[assessment|assessment]] format an [[llm|LLM]] cannot complete on a student's behalf — the [[oral-assessment|oral exam]] — and ask what it would take to make it scale. Their answer is to split the examiner in two: an *interviewer* [[agentic-ai|agent]] that only receives guidance about what to ask next, and a hidden *evaluator* that holds the rubric, tracks the student's progress and decides when to probe further. Separating those roles is what keeps answers from leaking into the conversation. They validated the pair with eleven simulated student personas on a deliberately fictional topic, ran 619 automated turn-level checks with zero failures, then deployed it in an 11-student [[ai-literacy|AI literacy]] seminar on three assignments and one [[remote-proctoring|proctored]] exam. A post-hoc audit of 41 attempts found the deployed evaluator far more lenient than a blind re-grade — it awarded the top grade 20 times where an independent judge awarded it twice — and traced the gap to grading incrementally rather than reading the whole transcript.

## Key Findings

1. **The interviewer never sees the rubric.** It receives only the next question to ask, while a hidden evaluator holds the assignment's goals and decides whether to follow up or move on, which is what prevents answer leakage.
2. **Eleven personas graded exactly as intended.** Five legitimate students landed on their target grades and six adversarial ones — answer extractors, prompt injectors, confident fabricators, minimalists, derailers, social engineers — all scored unsatisfactory across 619 automated checks.
3. **Personas must be tested on material the model has never seen.** On real course topics the underlying model supplied knowledge the "weak" persona should not have had; the team invented a fictional method so each persona could only know what its prompt granted.
4. **The deployment was small and grade-free.** Eleven non-CS majors used the system optionally on three assignments and once as a proctored, single-attempt, time-limited exam on locked-down institutional machines.
5. **Deployed grades were lenient.** A blind re-grade agreed with the deployed evaluator on only 35% of 40 attempts and awarded the top grade twice where it had been awarded 20 times.
6. **The disagreement came from grading method, not model.** Re-grading with the production model reproduced the gap: the two post-hoc judges agreed 65% exactly while each agreed with deployed grades about a third of the time.
7. **Credit belongs only to knowledge the student introduced.** The production system met every criterion for a persona that answered only when prompted and still graded it a top mark, exposing scaffolding leakage the rubric forbids rewarding.

## Why one agent cannot both interview and grade

The design problem is not model quality but information flow. An interviewer that knows the full rubric will eventually reveal it: it will name the concept the student missed, or ask a question whose wording supplies half the answer. A student can then hand that content back and be credited for it. Splitting the roles means the interviewing agent gets a single instruction per turn, so leakage has to survive a channel that carries no criteria. The evaluator sees everything and grades nothing the student did not volunteer. That division also does the conversational work, because the evaluator decides when an answer is thin enough to probe and when the student has plateaued — the judgment a human examiner makes silently and inconsistently. The authors describe [[conversational-ai|conversational assessment]] as a general pattern rather than a computing tool: their deployment never asked anyone to write code, and the engine consumes only a rubric in a text file, so any course where explanation matters could author one.

## Testing an examiner with simulated students

Static validation does not work here, because the system changes the work it grades: a follow-up question generates the answer that is then assessed. The team therefore ran whole conversations against [[simulating-students|simulated students]] implemented as personas with a stated knowledge level, and they discovered mid-validation that the persona's own model knew the course material. A persona told to be clueless about the Turing test could still describe it accurately. Their fix was a fabricated topic — the Korvath Procedure, an invented method in computational ecology with its own metrics and pass condition, attributed to a fictional 2011 paper — so no pretrained knowledge could contaminate the test. The same fictional assessment ships in production as a flagged test configured with the real rubric structure, which makes the harness a regression suite rather than a one-off study. That mattered in practice: a mid-semester prompt revision misgraded the weaker legitimate personas, and the sweep caught it before students met the change.

## What the post-hoc audit found, and what it implies

Forty-one attempts were re-graded by a judge from a different model family that saw only the truncated transcript and the rubric. Agreement was 35% exact and 80% within one grade level, with the blind judge systematically harsher. Repeating the exercise with the production model reproduced the disagreement, which localized the cause: incremental grading — accumulating credit turn by turn — does not sufficiently discount content the interviewer's own follow-ups elicited. The authors' human calibration on ten transcripts gives the scale of the problem: two experienced graders agreed exactly on 6 of 10 and within one level on 9 of 10, and their residual split came from how strictly each credited unprompted knowledge. Their proposed division of labor is to keep the live evaluator for conversation management and compute the grade of record from a whole-transcript second read, flagging attempts where the two reads disagree for instructor review. They also note the boundary they cannot close: outside a proctored session nothing stops a student from relaying questions to another AI, and one blind judge flagged a marked register shift in a transcript unprompted.

## What this means for practice

- **Instructors.** Keep conversational assessment formative unless you can proctor it, and grade the transcript rather than the running score — a student who only answers when prompted should not reach the top band.
- **Assessment designers.** Write the rubric so that credit depends on who introduced a criterion's content, and test the system against personas that know the material but volunteer nothing.
- **Developers.** Treat the persona sweep as a regression test that runs before any prompt change ships, and fold every audit finding back into a new persona rather than patching the prompt alone.
- **Administrators.** A chat exam composes with existing proctoring infrastructure, which is the only setting the authors found defensible for grade-bearing use.

## Limitations

- The deployment was 11 students in one elective AI literacy seminar at a single large public university, and the assessments were voluntary and not grade-bearing, so no claim about high-stakes use is tested.
- Only 41 attempts were re-graded, and the human calibration sample was ten transcripts graded by the two authors, one of whom built the system and its rubric.
- Personas were implemented with GPT-4o and the production evaluator with GPT-5.2, so the specific grading behavior reported is tied to those model versions and prompt configurations.
- The fictional-topic test establishes that each persona behaves as specified, not that real students answer the way any persona does.
- Proctoring is asserted as the mitigation for relay-to-another-AI cheating; the paper reports no test of how often students attempt it.

## Citation

Challen, G., & Zilles, C. (2026). [*Scalable Conversational Assessment: Chat-Based Exams with a Two-Agent LLM Pipeline*](https://arxiv.org/abs/2611.17220). arXiv:2611.17220.
