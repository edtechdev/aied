---
title: "AI chatbots in higher education: Comparing expectations to evidence"
created: "2026-09-27T22:30:00-04:00"
updated: "2026-09-28T05:22:31-04:00"
type: article
sources: ['raw/papers/thoeni-ai-chatbots-higher-education-expectations-evidence-2026.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [experiment]
discipline: [business education]
level: [higher ed, undergraduate]
audience: [instructors, administrators, researchers]
foundations: [ai-education, limitations-in-aied-research]
pedagogy: [motivation, student-engagement, self-efficacy]
technology: [generative-ai, llm, rag, conversational-ai]
assessment: [learning-gains, self-report-measures]
methods: [quantitative-research, rct]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-27"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Thoeni and Fryer ran a semester-long randomized controlled field experiment with 454 undergraduates in three sections of a Principles of Marketing course — one asynchronous online and two face-to-face — to test whether a custom [[generative-ai]] retrieval-augmented generation ([[rag]]) chatbot would raise the [[motivation]]al precursors to learning success: individual interest, [[self-efficacy]], [[student-engagement]], and course test performance, within the Model of Domain Learning. Students were randomized within each section after drop/add, measured at T1 before anyone had chatbot access and again at T2 on the final test. Expectations were high and the result was flat: no group × time interaction reached significance for any outcome, and the authors urge universities to weigh pedagogical value before long-term contracts.

## Key Findings

1. **Interest did not move.** Difference-in-differences gave b = −0.044 (p = 0.195, Cohen's d = 0.050), against 6-point means of 4.9 to 5.0 for control and 4.9 to 4.9 for treatment.
2. **Self-efficacy rose for everyone, not because of the chatbot.** The time effect was significant (β = 0.099, p = 0.0009, Cohen's ƒ2 = 0.025); the group effect (p = 0.1162) and group × time interaction (p = 0.5306, d = 0.023) were not.
3. **Engagement fell across the board.** The time effect was significant and negative (β = −1.448, p = 0.0494, d = 0.020), with no group effect (p = 0.7214) and no interaction (p = 0.6770, d = 0.021).
4. **Achievement showed nothing at all.** Group (p = 0.7287), time (p = 0.6262) and interaction (p = 0.7443, d = 0.015) were all non-significant, with raw test means of 0.76 to 0.79 for control and 0.75 to 0.80 for treatment.
5. **Usage was thin, satisfaction was high, and the two disagreed.** Students logged in 0.89 times per week on average (SD = 1.06) against an assigned once per week, with 68 words per session; on a 0–100 slider they rated enjoyment 80.4, understanding 81.0 and wanting it in all classes 81.9, yet agreed it did not improve their grades (75.9) or interest in marketing (63.7).

## How the chatbot and the field experiment were built

The authors insist a RAG system needs three elements: faculty-written expert content, system instructions, and rigorous validity and reliability testing. The content, written by the first author, ran to one document per chapter — topics, concepts, glossary, learning objectives and a lecture transcription — and excluded test questions and anything from the copyrighted textbook. Instructions set a personality, goals and functions, including a quiz feature that generated practice questions on any topic. It ran on the Copilot chatbot with ChatGPT 4o at a temperature of 0.7. Testing took an estimated 100 hours over several months, including reviews of nearly 500 student–chatbot conversations from two earlier pilots; the finished chatbot answered all but 1 of 200 test questions correctly and consistently.

The experiment ran over a 16-week fall semester with a 12-week treatment period (11 active weeks after fall break) across three sections — 207 asynchronous online, 43 small, 204 large face-to-face — yielding 454 analyzed students after 16 drops and 3 repeaters were excluded, split 231 control and 223 treatment. Randomization happened within sections after drop/add, and test #1, taken before anyone had access, showed no baseline differences. Both groups earned participation points for weekly study sessions. The four 50-question tests came from a bank of about 1,800 items and counted for 50 percent of course points; scores were z-standardized within each period because T1 and T2 covered different chapters.

## What the null result does and does not license

It does not license the claim that AI chatbots cannot help students learn. The authors' review found no published [[rct]]-based examination of a RAG chatbot in undergraduate education across a full academic term, so this is an early data point from one course, one instructor and three sections. The treatment was also modest: the chatbot lacked session memory, treating every interaction as a first encounter with no learner model, and students used it less than once a week, often asking only for a definition or answering quiz items.

What it does license is skepticism about procurement expectations, and it fits a mechanism the authors find across the literature: when AI supplies answers, the effortful work that produces [[learning-gains]] disappears; when it scaffolds without answering, that work survives. Pre-2023 [[intelligent-tutoring]] findings, they add, rest on rule-based systems unlike current large language models and are historical context, not comparable evidence. They also caution that satisfaction is not learning: students liked the chatbot and reported no grade or interest benefit, which the authors liken to a hygiene factor that demotivates only when absent.

## What this means for practice

- **Administrators.** Define the outcomes you expect before you sign, and ask whether the chatbot scaffolds productive struggle or supplants it; the authors recommend investigating pedagogical value before long-term commitment.
- **Administrators.** Price the whole build. Expert content, instructional design and IT expertise, plus an estimated 100 hours of validity and reliability testing, sit between a chatbot idea and a deployable system; participation points (about 0.25 percent of course grade for surveys, roughly 1 percent for study sessions) still produced 0.89 logins per week against an assigned one.
- **Instructors.** Measure precursors, not satisfaction. Enjoyment and perceived helpfulness ran in the 80s on a 0–100 scale while measured interest, self-efficacy, engagement and achievement were flat.
- **Instructors.** Architecture matters more than enthusiasm. Session memory and a persistent learner model separate a tutor from a better search engine; several students asked whether it could remember their interests or resume a prior conversation.
- **Researchers.** Replicate across subjects, levels and instructor styles, compare deterministic or heuristic tutors with LLM-based ones, and study what students do after a session, not only in it.

## Limitations

- The study was confined to three sections of a single course with one instructor, which the authors say limits generalizability; an instructor already skilled at generating interest, or content ill-suited to a chatbot, could have minimized any effect.
- Introductory marketing is heavy in vocabulary, which may not have offered the chatbot room to differentiate its help; both groups had flash cards.
- The chatbot lacked session memory, so it could not personalize instruction across sessions or respond to a student's knowledge level, difficulties or interests — a fundamental limitation of many chatbots compared with a human tutor.
- Qualitative data came back too thin for thematic analysis, the study captured only [[self-report-measures]] of study habits, and strategic processing was not collected at all because of reliability concerns and time cost.

## Citation

Thoeni, A., & Fryer, L. K. (2026). [AI chatbots in higher education: Comparing expectations to evidence](https://doi.org/10.1016/j.chbr.2026.101061). *Computers in Human Behavior Reports*, 22, 101061.
