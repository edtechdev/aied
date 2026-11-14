---
title: "To Enhance, Not Replace, Learning: Using AI in the College Classroom"
created: "2026-11-09T06:41:06-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
page_kind: [evaluation]
research_method: [survey]
evidence_context: educational
discipline: [business education, statistics and data science education]
level: [higher ed, undergraduate]
audience: [instructors, faculty developers, researchers, instructional designers]
sources: ['raw/papers/onodipe-enhance-not-replace-ai-classroom-2026.md']
source_url: "https://doi.org/10.14434/jotlt.v14i1.41782"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-09"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-education, ai-literacy, academic-integrity]
pedagogy: [student-engagement, student-ai-interaction, scaffolding]
technology: [generative-ai, llm]
assessment: [oral-assessment, formative-assessment, self-report-measures]
methods: [mixed-methods-research, quantitative-research]
ethics: []
---

> **Synthesis:** Onodipe, Burke, Kooti and Delaney (2025) document two semesters of light-touch [[generative-ai|GenAI]] integration in 2000-level business statistics and economics courses at two U.S. public colleges: a reusable [[scaffolding|scaffolded]] [[intelligent-tutoring|AI tutor]] prompt, AI-generated exam review, AI-structured [[oral-assessment|oral exams]], and AI-assisted research-topic brainstorming. Across three surveys, students reported using ChatGPT more often, feeling more confident with it, and finding the course more [[student-engagement|engaging]], and most had adopted the instructor's tutor prompt by semester's end. Exam performance did not follow: more frequent use was if anything associated with slightly lower scores. The study is best read as a documented classroom repertoire and a clean case of [[self-report-measures|perceived learning]] outrunning measured learning, not as evidence that the integration raised achievement.

## Key Findings

1. **Use and confidence rose across the semester.** Reported ChatGPT use frequency climbed from 2.987 to 4.375 on a 1–7 scale, confidence from 3.663 to 4.000, and the share using the instructor's [[intelligent-tutoring|AI tutor]] prompt from 74.2% at midsemester to 82.0% at the end.
2. **Students began writing their own prompts.** The share who generated their own prompt for the course rose from 61.9% to 80.3%, and about a third said peers' discussion-board posts had influenced their AI use outside class.
3. **Perceived engagement improved, but perceived learning impact did not reach significance.** Self-reported engagement change rose from 2.433 to 2.65 on a 1–3 scale, while rated learning impact moved from 3.223 to 3.452 without reaching significance.
4. **General feeling dipped and recovered rather than climbing.** Mean attitude toward AI fell from 3.934 to 3.690 at midsemester and returned to 3.978 at the end, while comfort stayed essentially flat across the three waves.
5. **Qualitative comments were mostly positive and specifically about explanation.** Most responses described support for learning, many praised efficiency, and smaller shares raised accuracy or misinformation, [[cognitive-offloading|overreliance]], and ethical concerns.
6. **Exam scores showed no benefit and possibly a small penalty.** In the full panel model, more frequent AI use was associated with lower exam scores at a marginal level of significance; isolating tutor use or test-preparation frequency produced no effect at all.
7. **The panel was small and shrank across waves.** Regression samples covered 91 observations for comfort and 61 for general feeling, against survey responses of 149, 103 and 60 in the three waves, so the null exam result is also a power problem.

## A light-touch repertoire, documented end to end

The paper's main contribution is procedural rather than causal: it describes four moves an instructor can copy. In business statistics, exam review began with a static practice sheet, moved to ChatGPT-generated practice problems, and then to instructor-written prompt options targeting specific difficulties. Across courses, students received a single generic tutor prompt adapted from Mollick and Mollick, designed to ask one question at a time, elicit [[prior-knowledge|prior knowledge]], avoid immediate answers and push for explanation in the student's own words; during [[group-work|group work]] it was paired with four roles — AI tutor lead, note taker, content editor and quality checker. Oral exams moved from instructor-led Zoom breakout rooms, which could not reach every student within the time limit, to a structured ChatGPT prompt that guided pairs through likely exam questions while the instructor rotated through rooms. In an upper-level econometrics course, a structured prompt turned three student interests into ten candidate research questions that students then screened for interest and data access.

## Perception gains were consistent; exam gains were absent

The survey results move together in a coherent direction, and the regressions show why that coherence is not evidence of learning. Frequency of use predicted comfort and general feeling; in the confidence models, general feeling did most of the work; in the learning-impact model, frequency and general feeling both contributed. Once all three predictors entered the engagement model, nothing remained significant, which the authors read as an effect too small to survive shared variance. That is a portrait of students who used the tool more, felt better about it and believed it helped — exactly the pattern [[self-report-measures|self-report measures]] are built to detect and poorly suited to adjudicate.

The exam models cut against the perception story. The authors are candid that the causal direction is unidentified: students who are struggling may use AI more, and students with stronger skills may need it less while benefiting more. Their preferred reading is that multiple processes run at once. The important design fact is that students could submit shared ChatGPT conversations and short reflections but the course still graded individual exam performance, so the study had a non-self-report outcome available and it did not move. Read beside the wiki's evidence that unguarded AI help can raise assisted performance while lowering unassisted learning ([[ai-misuse-learning-harm|the performance–learning gap]]), the null is not merely a power problem; it is the result one would expect if the tool were used mainly to clarify and rehearse.

## AI literacy arrived through the tool's limits

The qualitative theme that matters most for [[ai-literacy|AI literacy]] is skepticism grounded in use. Students reported that ChatGPT "breaks down the steps" and explains formulas, and simultaneously that it "typically struggles to solve these calculations" and is "terrible at calculating" while usually accurate about procedure. That is a working model of the tool's competence boundary, arrived at by encountering it, and it matches the instructors' claim that students learned to use AI for conceptual clarification while keeping instructor-led examples as the anchor for quantitative work. The same pattern shows up in the [[student-ai-interaction|interaction]] data: by the end, four in five students had adopted the instructor's prompt, which encodes a [[socratic-method|Socratic]] stance rather than an answer service.

What the paper does not show is that this boundary knowledge transferred into better unaided performance. It is a self-reported literacy gain, and the exam null leaves open whether students' calibration improved their studying or merely their commentary on it.

## What the instructors would change

Three implementation lessons are reported with unusual specificity. Resistance was real but faded once the [[pedagogy|pedagogical]] purpose and explicit guidelines were explained, and the instructors distributed a Student Guide to AI Use at the start. Oral exams were the most demanding element: pairing students in breakout rooms and rotating among them required repeated adjustment of prompt structure and discussion pacing. Technically, the stack was free ChatGPT accounts, long prompts distributed through the learning management system, and the platform's Share button to submit conversations with [[reflection|reflections]]. The authors recommend an early orientation session covering [[ethics|ethical]] use, verification of understanding and oral-assessment logistics, which is a fair summary of where their own semester cost the most time. For a reader deciding whether to adopt the repertoire, the honest framing is that the low-cost elements — practice generation, exam review, tutor prompt — are cheap to try, while the assessment change is the part that needs scheduling and staff time.

## What this means for practice

- **Instructors:** Distribute a structured tutor prompt rather than telling students to "use AI." The prompt in this study enforced one question at a time, prior-knowledge elicitation and explanation in the student's own words; most students used it by semester's end, and it is the cheapest element to replicate.
- **Instructors:** Collect the conversation and a short reflection as the artifact. Requiring the shared transcript plus reflection made AI use visible without banning it, and gave the instructors evidence of how students prompted.
- **Faculty developers:** Judge the intervention on exam or assignment performance, not on satisfaction. Perceived engagement and confidence rose significantly while exam scores did not; a department adopting this repertoire should build a comparison into its own course rather than citing these survey gains as proof.
- **Designers:** Keep human-worked examples as the anchor in quantitative courses. Students here converged on using ChatGPT for procedure and concepts while trusting class examples for calculations — a division of labor worth designing for explicitly.
- **Administrators:** Budget staff time for the oral-exam variant. The AI prompt reduced instructor load compared with live one-to-one Zoom orals, but rotating through breakout rooms and refining the prompt took repeated adjustment across the term.

## Limitations

- The study has no control or comparison section: every student received the same integration, so within-semester change cannot be attributed to the AI activities rather than to instruction, practice or time.
- Data come from one disciplinary cluster — 2000-level business statistics and economics at two U.S. public colleges, with roughly 150 students, most of them sophomores and juniors — so generalization to other fields and student populations is untested.
- Most outcomes are self-reported, and the authors name response and selection bias as threats; only the exam models use an independent measure, and those are underpowered.
- Attrition across waves was substantial: 149 responses at baseline, 103 at midsemester and 60 at the end, and the panel regressions used 91 and 61 observations depending on the item set.
- The two-semester window cannot address long-term retention, and the paper does not state which ChatGPT version students used, so the capability claims are tied to an unrecorded model vintage.
- Participation was voluntary and the courses were taught by two of the authors, so instructor investment and student self-selection are confounded with the intervention.

## Citation

Onodipe, G., Burke, K., Kooti, A., & Delaney, J. (2025). [*To Enhance, Not Replace, Learning: Using AI in the College Classroom*](https://doi.org/10.14434/jotlt.v14i1.41782). *Journal of Teaching and Learning with Technology, 14*(1), 88–103.
