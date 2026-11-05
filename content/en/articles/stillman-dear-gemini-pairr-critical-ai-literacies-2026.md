---
title: "Dear Gemini: Agency, Peer Review, and Critical AI Literacies in Student Writing Ecologies"
created: "2026-11-04T17:21:00-05:00"
updated: "2026-11-04T18:11:18-05:00"
type: article
published: "2026"
sources: ['raw/papers/stillman-dear-gemini-pairr-critical-ai-literacies-2026.md']
confidence: high
page_kind: [framework, evaluation]
research_method: [thematic analysis]
discipline: [writing education]
level: [higher ed]
audience: [instructors, faculty developers, curriculum designers, administrators]
pedagogy: [metacognition, scaffolding, student-ai-interaction]
technology: [generative-ai, llm, conversational-ai, prompt-engineering]
assessment: [feedback, feedback-literacy, formative-assessment, peer-assessment, process-oriented-assessment]
institutions: []
ethics: [ai-misuse-learning-harm, privacy]
foundations: [ai-literacy, agency, academic-integrity, cognitive-offloading, critical-thinking]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Stillman, Minnillo, MacArthur, Sperber and Whithaus (2026) report a 2024 pilot of PAIRR (Peer and AI Review + Reflection), a writing-course model that places a [[conversational-ai|chatbot]] on the periphery of a student's writing ecology rather than at its center. Across 13 sections of 10 distinct writing-intensive courses reaching 654 students, students read about how [[llm|large language models]] work, gave and received [[peer-assessment|peer feedback]], then asked a chatbot for [[feedback]] on the same drafts with the instruction "Do not rewrite my paper for me," before writing a revision plan and a reflection. The paper's analytic contribution is students' own vocabulary for the tool: only about half (51.7 percent) adopted the anthropomorphic roles the reflection prompt offered. The authors argue from this that [[ai-literacy|critical AI literacies]] are best built through supervised, structured use that keeps the student, not the model, as the writer — and they read one student's "vending machine of feedback" metaphor as the most useful alternative to a marketing narrative that sells effortlessness.

## Key Findings

1. **Students mostly put the chatbot at the periphery of their writing process.** The authors' central pattern — consistent across courses and student backgrounds — is that students treated chatbot feedback as advisory and supplementary rather than authoritative, a positioning the paper reads through van Lier's writing ecology and Cooper's ecology of writing. Feedback remained a triangulated practice among peers, instructors, and self-review.
2. **The role vocabulary splits, and the split is the evidence.** In the 2024 [[reflection|reflections]], tutor (28.6 percent) and collaborator (23.1 percent) accounted for most of those who accepted the prompt's anthropomorphic options; 9.9 percent called it a tool or resource, 7.7 percent compared it to friends or peers, 7.7 percent to a robot or computer, 6.6 percent to instructors, 3.3 percent invented a critic/writer schema, 2.2 percent to mentors or advisors, 2.2 percent to an assistant, 1.1 percent to a "friendly expert," and 7.7 percent fell under other.
3. **Naming the machine as a machine is treated as a literacy outcome, not a deficit.** Students who called the chatbot "still just a program" or "a computer giving me advice" are read as holding the more developed position, and the authors note that low-stakes, nonjudgmental machine feedback can be a benefit for students anxious about human readers.
4. **One student's invented metaphor does more analytic work than any category.** A student described the chatbot as "somewhere in between a vending machine of feedback and a part-time tutor" — "you slip in a currency note (in this case your data) and out comes your feedback." The authors unpack five features of the analogy (comprehensible, impersonal, transactional, nonagentive, supplemental) and treat it as a lesson in the political economy of "free" tools.
5. **The marketing frame the paper is arguing against is concrete.** The authors open on Google's pulled "Dear Sydney" Olympics ad, in which a father prompts Gemini to write his daughter's fan letter while her voice is never heard, and read it as a model of the domineering relation between text generator and writer that [[writing-education|educational writing instruction]] has to counter.
6. **The academic-integrity results are modest and honestly bounded.** In the small writing-intensive courses four of the authors taught in 2024 and 2025 there were no cases of suspected AI-related violations that required formal reporting, and the few incidents resolved in office-hour conversations. The authors state plainly that PAIRR does not eliminate dishonesty and that they have not formally assessed misuse.
7. **The 2025 wave switched to Claude and produced signs of [[transfer-of-learning|transfer]].** The authors cite one student who arrived [[trust-calibration|trusting]] Claude more than peers, then found the trust fading as peer reviewers demonstrated competence, and another who concluded that AI "removes the voice from my paper" and could be used for feedback instead of editing.

## What PAIRR actually is, procedurally

The design is worth recording because most of its parts are cheap to copy and the sequence is the point. Students first read and discuss short articles on how LLMs are built, what they do poorly, and what their ethical and cognitive stakes are. They then draft, exchange peer feedback, and only after that prompt the chatbot for feedback — with assignment descriptions, the instructor's rubrics, privacy guidance, and an explicit instruction not to rewrite the paper. They submit screenshots or transcripts of the interaction, then write a revision plan and a reflection on both feedback sources.

Syllabus language carries the policy: a cognitive dimension (AI "cannot think for you" and "cannot learn for you") and an ethical dimension (approval, specific acknowledgment, alignment with [[academic-integrity|academic integrity]]). The model adapts Carolus and colleagues' Bloom-based account of AI literacy, which runs from understanding a system's limits, through using it in context, to critically evaluating its output — PAIRR deliberately weights the first and last phases.

## How the students' language does the analytic work

The reflection prompt asked whether the chatbot felt like a tutor, a collaborator, or something else. Because that question supplied anthropomorphic options, the authors treat the answers as evidence about how students position the tool rather than as a clean measure of their beliefs — a limitation they name themselves. The richest passages are the ones where students separate function from relationship: one called it "a tutor, in a way just without the emotional aspects of being a human," another said the suggestions were "just suggestions," with the choice left to the writer.

The paper's second analytic move is to read the role students choose against their position in the classroom. A confident upper-division writer explicitly downgraded the bot's authority relative to an instructor's; a first-year student reached loosely for "a teacher's perspective." The authors use that contrast to argue that prior experience of human feedback is what lets a student hold a model at a distance.

## What this means for practice

- **Sequence the tool after the human feedback, not before it.** Peer feedback first, chatbot feedback second, and reflection on both: the order is what keeps the model supplementary rather than authoritative.
- **Constrain the prompt in the assignment, not just in the syllabus.** Requiring a feedback-only prompt with the instructor's rubrics attached converts a use policy into a task design, and asking for screenshots makes the interaction visible.
- **Ask students to name what the tool is.** [[prompt-engineering|Prompting]] for tutor/collaborator/something-else produced a vocabulary the authors could analyze; the invented "vending machine" is a better outcome than any of the offered categories.
- **Budget the instructor labor.** The authors are explicit that supporting instructors in large STEM writing courses — curating readings, building peer-review processes, clarifying expectations — was substantial, and that this burden is one vendors imposed on higher education rather than one it chose.
- **Use prior work on ChatGPT feedback honestly.** Comparable-quality results depend on precise criteria in the prompt; the corpus holds related PAIRR trials ([[pairr-ai-peer-review-2025|the earlier PAIRR study]] and [[gift-ai-pairr-business-writing-2025|the business-writing application]]) that supply the outcome evidence this paper does not.

## Limitations

- The analysis is [[qualitative-research|qualitative]] and interpretive: thematic coding of reflections with a collaboratively built codebook in MaxQDA, with no comparison condition, no pre/post measure of writing quality, and no measure of AI literacy as an outcome.
- The role percentages come from a single reflection question that offered anthropomorphic options, so they describe uptake of the prompt's vocabulary as much as students' independent conceptions; the authors say so.
- The sample is described in aggregate — 13 sections, 10 courses, 654 students — with quoted reflections drawn from a small number of courses and no per-course or per-population breakdown, so the pattern's generality across disciplines, language backgrounds, and skill levels is asserted rather than tested.
- Whether PAIRR reduced [[ai-misuse-learning-harm|AI misuse]] was never formally assessed; the integrity claim rests on the absence of formal reports in four authors' own small courses, which the authors present as the weak evidence it is.
- The model's cost is understated in the design description: it presumes small classes, instructors with writing-studies training or intensive support, and time for readings and reflection — conditions the authors identify as a privileged position.
- Two reflections from the 2025 Claude cohort are used illustratively; the larger study is presented as ongoing, so no results from it are reported here.

## Citation

Stillman, N., Minnillo, S., MacArthur, M., Sperber, L., & Whithaus, C. (2026). [Dear Gemini: Agency, Peer Review, and Critical AI Literacies in Student Writing Ecologies](https://doi.org/10.1215/2834703X-12689873). *Critical AI*, 4(2).
