---
title: "Voice-Based AI Feedback in Higher Education: A Field Study on Quality and Actionability"
created: "2026-10-22T18:31:57-04:00"
updated: "2026-10-22T18:31:57-04:00"
type: article
sources: ['raw/papers/2610.25560.md']
confidence: low
technology: [conversational-ai, speech-and-voice-technologies]
assessment: [self-report-measures]
pedagogy: [student-experience]
methods: [mixed-methods-research]
foundations: [human-ai-collaboration, theory-development-aied]
audience: [instructors, administrators, researchers]
level: [higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-22"
    agent: hermes-agent
---

> **Synthesis:** Tamme, Schilling, and Hantel (2026) propose replacing the end-of-semester written [[self-report-measures|course survey]] with a telephone interview conducted by a [[conversational-ai|conversational AI]] agent, on the argument that the written instrument fails on response rate, depth, satisficing and — above all — actionability. The proposal is theoretical rather than empirical: it reports a completed technical pilot at the Technical University of Munich that established feasibility with an ElevenLabs-based voice agent, and it has collected pilot data it has **not yet formally analyzed**, so every claim about what voice feedback yields is a hypothesis. Those hypotheses are grounded in a real contradiction in the mode-effects literature, where voice answers have been shown to be longer and more topically varied while a randomized comparison of 634 respondents found text interviews produced more differentiated responses and more disclosure of socially undesirable behavior. The planned field study is in a single MIT Sloan course with approximately 60 students, scoring feedback on a four-dimensional actionability codebook (specificity, thematic richness, constructive orientation, contextual depth), and its most transferable contribution may be that codebook rather than its findings.

## Key Findings
1. **The target is instrument failure, not student apathy.** End-of-semester written surveys are cited for low response rates, brief generic comments and satisficing; a voice interview is proposed as the mode-level fix rather than a motivational one.
2. **The mode-effects evidence it rests on contradicts itself.** Voice answers to open questions carry significantly more words and topics (Höhne et al.; Lenzner et al.), while one randomized comparison of 634 respondents found text interviews produced more differentiated responses and greater disclosure of socially undesirable information.
3. **Feasibility is established and quality is not measured.** The completed TUM pilot with an ElevenLabs-based telephone agent validated telephony, turn management and storage, but its data is described as collected and not yet formally analyzed.
4. **Actionability is operationalized as four coded dimensions** — specificity, thematic richness, constructive orientation and contextual depth — each rated low/medium/high by two independent coders with Cohen's kappa, then re-rated by the instructor as an external check.
5. **The field study is one course, not a mode comparison.** Approximately 60 students in MIT Sloan's "Advanced Leadership Communication" (15.281), convergent mixed-methods with a follow-up satisfaction survey a week later.
6. **The strategic claim is institutional sensing.** Framed through Teece's sensing–seizing–reconfiguring, richer and more frequent feedback is argued to strengthen an institution's capacity to act on a course while it is still running.

## The instrument the proposal is arguing against

The case rests on a well-worn complaint: end-of-semester written evaluations produce low response rates, brief and generic comments, and "satisficing" answers chosen for minimal effort. The proposal's addition is to treat this as a measurement-design problem rather than a student-motivation problem, and to borrow the fix from survey methodology. If the mode of administration shapes what respondents say, then a mode that imposes conversational turn-taking, that can ask "Can you give me a specific example?", and that costs the student five minutes on the phone rather than an open text box, should elicit different content.

The empirical basis for that expectation is genuinely mixed, and the proposal is honest about it. Höhne et al. (2024) found voice answers to open questions carried significantly more words and covered more topics than typed answers, and Lenzner et al. (2024) reported oral answers to probing questions with roughly three times the words and 0.3 more themes than written ones. Against that, Schober et al. (2015), in a randomized experiment with 634 respondents, found text interviews produced more differentiated responses and greater disclosure of socially undesirable information. For course evaluation, where the content is a judgment of the person grading you, that second result matters more than the first.

## Why a talking agent should change what students say

The theoretical frame is the Computers As Social Actors paradigm: people apply social rules to machines even knowing they are machines. The lineage the proposal leans on is direct — computers eliciting intimate self-disclosure through reciprocal exchange (Moon, 2000), politeness toward a computer that asks about its own performance (Nass et al., 1997), and virtual humans increasing willingness to disclose sensitive information because a non-human interviewer feels less judgmental (Lucas et al., 2014). Recent work on agent self-disclosure, social presence and trust in [[human-ai-collaboration|human-AI interaction]] extends the same mechanism.

That literature supports two opposite predictions for this setting, which is the interesting part of the proposal. Social presence could increase elaboration, because a conversational partner invites narrative and the agent's follow-up probes reward detail. It could equally increase social desirability bias, because a voice that sounds like a person is harder to criticize than a blank form. The proposal's three hypotheses take the first path — elaboration, candid disclosure, then actionability — but its own measurement plan includes the instructor's independent rating, which is what would catch the second.

## Design: a feasibility pilot and a planned single-course field study

The TUM pilot sat inside a course on AI in corporations delivered with Boston Consulting Group, which the authors justify as a testbed whose students were both receptive to AI interaction and able to comment on it — a selection that also means the pilot cannot speak to acceptance among students who are not already interested in AI. It validated telephony, turn management and storage, and produced protocol changes: a clearer opening statement of the agent's role, probing tuned to a 5–7-minute interview, and tightened data handling for MIT's IRB.

The field study is planned for "Advanced Leadership Communication" (15.281) at MIT Sloan with approximately 60 students, recruited through Sona 8, with a follow-up survey a week later and two independent coders applying the actionability codebook on a 3-point scale per dimension with Cohen's kappa for reliability. Deliberately, it is not a head-to-head mode comparison: the authors say they are less interested in which mode wins than in what voice produces, which strengthens the descriptive work but leaves any superiority claim resting on historical benchmarks from the written-survey literature rather than a concurrent control.

## What this means for practice

- **Instructors.** Do not read a proposed voice agent as a solved problem: the evidence that voice elicits better feedback is contradictory, and the one randomized comparison in the literature favors text for differentiated and candid responses. If you pilot this, keep a written arm.
- **Administrators.** Treat the four-dimensional actionability codebook as the proposal's usable artifact today — specificity, thematic richness, constructive orientation, contextual depth, each on a 3-point scale — because it gives a quality-assurance conversation something to count, independent of whether the agent is ever deployed.
- **Researchers.** The framing worth borrowing is institutional sensing: the question is not whether students prefer a phone call, but whether the feedback an institution collects is timely and specific enough to change a course while the course is still running.

## Limitations

- This is a research proposal, not a study. It reports no results, and the pilot's data is described as collected but "not yet formally analyzed"; every outcome statement on the page is a hypothesis.
- The pilot's impression that voice responses were richer than written comments is informal and unanalyzed, and it comes from a course about AI delivered with a consulting firm — a population unlikely to represent students who distrust AI.
- The planned sample is approximately 60 students in one communication course at one elite business school, which the authors acknowledge limits external validity.
- The proposal is dated February 2026 and posted to arXiv on 18 October 2026, but still describes IRB approval as expected in March 2026 and data collection as planned for April 2026, so its status statements were not updated for publication.
- Actionability is rated by the course instructor on a sample of responses, an external check whose rater is also the subject of the feedback being rated.

## Citation

Tamme, T., L. Schilling, and A. Hantel (2026). [*Voice-Based AI Feedback in Higher Education: A Field Study on Quality and Actionability*](https://arxiv.org/abs/2610.25560). arXiv:2610.25560 [cs.CY]. Research proposal accepted for the 46th Annual Conference of the Strategic Management Society, Berlin.
