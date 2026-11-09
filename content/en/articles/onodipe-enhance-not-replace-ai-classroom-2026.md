---
title: "To Enhance, Not Replace, Learning: Using AI in the College Classroom"
created: "2026-11-09T06:41:06-05:00"
updated: "2026-11-09T06:41:06-05:00"
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
verified: [citation, numbers, links]
foundations: [ai-education, ai-literacy, academic-integrity]
pedagogy: [student-engagement, student-ai-interaction, scaffolding]
technology: [generative-ai, llm]
assessment: [oral-assessment, formative-assessment, self-report-measures]
methods: [mixed-methods-research, quantitative-research]
ethics: []
---

> **Synthesis:** Onodipe, Burke, Kooti and Delaney (2025) document two semesters of light-touch [[generative-ai|GenAI]] integration in 2000-level business statistics and economics courses at two U.S. public colleges: a reusable [[scaffolding|scaffolded]] [[intelligent-tutoring|AI tutor]] prompt, AI-generated exam review, AI-structured [[oral-assessment|oral exams]], and AI-assisted research-topic brainstorming. Across three surveys (n = 149, 103, 60), self-reported frequency of ChatGPT use rose from 2.987 to 4.375 on a 1–7 scale (p < .001, a 33.17% pre–post effect), confidence with ChatGPT rose from 3.663 to 4.000 (p = .004), and perceived course [[student-engagement|engagement]] rose from 2.433 to 2.65 on a 1–3 scale (p = .006), while 82.0% had used the instructor's tutor prompt by the end of the semester. Exam performance did not follow: frequency of use was unassociated with scores in the simple model (β = −5.577, SE = 5.566) and negatively associated in the full model (β = −13.918, SE = 7.834, p = .076). The study is best read as a documented classroom repertoire and a clean case of [[self-report-measures|perceived learning]] outrunning measured learning, not as evidence that the integration raised achievement.

## Key Findings

1. **Use and confidence rose across the semester.** ChatGPT use frequency went from 2.987 to 4.375 on a 1–7 scale (p < .001, 33.17% effect), confidence from 3.663 to 4.000 (p = .004, 9.20%), and the share using the instructor's [[intelligent-tutoring|AI tutor]] prompt from 74.2% at midsemester to 82.0% at the end (p = .031).
2. **Students began writing their own prompts.** The share who generated their own prompt for the course rose from 61.9% to 80.3% (p = .070), and 35.2% said peers' discussion-board posts had influenced their AI use outside class.
3. **Perceived engagement improved, but perceived learning impact did not reach significance.** Self-reported engagement change rose from 2.433 to 2.65 on a 1–3 scale (p = .006, 8.92%), while rated learning impact moved from 3.223 to 3.452 (p = .097).
4. **General feeling dipped and recovered rather than climbing.** Mean attitude toward AI fell from 3.934 to 3.690 at midsemester and returned to 3.978 at the end (p = .030, 1.19% effect), while comfort stayed flat at 4.154, 4.190 and 4.213 (p = .619).
5. **Qualitative comments were mostly positive and specifically about explanation.** Of responses, 61.5% described support for learning, 41.5% efficiency, 10.8% accuracy or misinformation concerns, 9.2% [[cognitive-offloading|overreliance]] concerns and 3.1% ethical concerns.
6. **Exam scores showed no benefit and possibly a small penalty.** In the full panel model, AI frequency of use carried β = −13.918 (SE = 7.834, p = .076); isolating tutor use (β = −2.272) and test-preparation frequency (β = −2.091) produced no effect, with R² between .002 and .055.
7. **The panel was small and shrank across waves.** Regression samples covered 91 observations for comfort and 61 for general feeling, against survey responses of 149, 103 and 60 in the three waves.

## A light-touch repertoire, documented end to end

The paper's main contribution is procedural rather than causal: it describes four moves an instructor can copy. In business statistics, exam review began with a static practice sheet, moved to ChatGPT-generated practice problems, and then to instructor-written prompt options targeting specific difficulties. Across courses, students received a single generic tutor prompt adapted from Mollick and Mollick, designed to ask one question at a time, elicit [[prior-knowledge|prior knowledge]], avoid immediate answers and push for explanation in the student's own words; during [[group-work|group work]] it was paired with four roles — AI tutor lead, note taker, content editor and quality checker. Oral exams moved from instructor-led Zoom breakout rooms, which could not reach every student within the time limit, to a structured ChatGPT prompt that guided pairs through likely exam questions while the instructor rotated through rooms. In an upper-level econometrics course, a structured prompt turned three student interests into ten candidate research questions that students then screened for interest and data access.

## Perception gains were consistent; exam gains were absent

The survey results move together in a coherent direction, and the regressions show why that coherence is not evidence of learning. Frequency of use predicted comfort (β = 0.482, SE = 0.109) and general feeling (β = 0.283, SE = 0.096); in the confidence models, general feeling did most of the work (β = 0.502, SE = 0.139), and in the learning-impact model frequency and general feeling both contributed (β = 0.657 and β = 0.512). Once all three predictors entered the engagement model, nothing remained significant (frequency β = 0.077, SE = 0.136, R² = .040), which the authors read as an effect too small to survive shared variance. That is a portrait of students who used the tool more, felt better about it and believed it helped — exactly the pattern [[self-report-measures|self-report measures]] are built to detect and poorly suited to adjudicate.

The exam models cut against the perception story. The authors are candid that the causal direction is unidentified: students who are struggling may use AI more, and students with stronger skills may need it less while benefiting more. Their preferred reading is that multiple processes run at once. The important design fact is that students could submit shared ChatGPT conversations and short reflections but the course still graded individual exam performance, so the study had a non-self-report outcome available and it did not move. Read beside the wiki's evidence that unguarded AI help can raise assisted performance while lowering unassisted learning ([[ai-misuse-learning-harm|the performance–learning gap]]), the null is not merely a power problem; it is the result one would expect if the tool were used mainly to clarify and rehearse.

## AI literacy arrived through the tool's limits

The qualitative theme that matters most for [[ai-literacy]] is skepticism grounded in use. Students reported that ChatGPT "breaks down the steps" and explains formulas, and simultaneously that it "typically struggles to solve these calculations" and is "terrible at calculating" while usually accurate about procedure. That is a working model of the tool's competence boundary, arrived at by encountering it, and it matches the instructors' claim that students learned to use AI for conceptual clarification while keeping instructor-led examples as the anchor for quantitative work. The same pattern shows up in the [[student-ai-interaction|interaction]] data: by the end, four in five students had adopted the instructor's prompt, which encodes a [[socratic-method|Socratic]] stance rather than an answer service.

What the paper does not show is that this boundary knowledge transferred into better unaided performance. It is a self-reported literacy gain, and the exam null leaves open whether students' calibration improved their studying or merely their commentary on it.

## What the instructors would change

Three implementation lessons are reported with unusual specificity. Resistance was real but faded once the [[pedagogy|pedagogical]] purpose and explicit guidelines were explained, and the instructors distributed a Student Guide to AI Use at the start. Oral exams were the most demanding element: pairing students in breakout rooms and rotating among them required repeated adjustment of prompt structure and discussion pacing. Technically, the stack was free ChatGPT accounts, long prompts distributed through the learning management system, and the platform's Share button to submit conversations with [[reflection|reflections]]. The authors recommend an early orientation session covering [[ethics|ethical]] use, verification of understanding and oral-assessment logistics, which is a fair summary of where their own semester cost the most time. For a reader deciding whether to adopt the repertoire, the honest framing is that the low-cost elements — practice generation, exam review, tutor prompt — are cheap to try, while the assessment change is the part that needs scheduling and staff time.

## What this means for practice

- **Distribute a structured tutor prompt rather than telling students to "use AI."** The prompt in this study enforced one question at a time, prior-knowledge elicitation and explanation in the student's own words; 82.0% of students used it by semester's end, and it is the cheapest element to replicate.
- **Collect the conversation and a short reflection as the artifact.** Requiring the shared transcript plus reflection made AI use visible without banning it, and gave the instructors evidence of how students prompted.
- **Judge the intervention on exam or assignment performance, not on satisfaction.** Perceived engagement and confidence rose significantly while exam scores did not; a department adopting this repertoire should build a comparison into its own course rather than citing these survey gains as proof.
- **Keep human-worked examples as the anchor in quantitative courses.** Students in this study converged on using ChatGPT for procedure and concepts while trusting class examples for calculations — a division of labor worth designing for explicitly.
- **Budget staff time for the oral-exam variant.** The AI prompt reduced instructor load compared with live one-to-one Zoom orals, but rotating through breakout rooms and refining the prompt took repeated adjustment across the term.

## Limitations

- The study has no control or comparison section: every student received the same integration, so within-semester change cannot be attributed to the AI activities rather than to instruction, practice or time.
- Data come from one disciplinary cluster — 2000-level business statistics and economics at two U.S. public colleges, with roughly 150 students, most of them sophomores and juniors — so generalization to other fields and student populations is untested.
- Most outcomes are self-reported, and the authors name response and selection bias as threats; only the exam models use an independent measure, and those are underpowered.
- Attrition across waves was substantial: 149 responses at baseline, 103 at midsemester and 60 at the end, and the panel regressions used 91 and 61 observations depending on the item set.
- The two-semester window cannot address long-term retention, and the paper does not state which ChatGPT version students used, so the capability claims are tied to an unrecorded model vintage.
- Participation was voluntary and the courses were taught by two of the authors, so instructor investment and student self-selection are confounded with the intervention.

## Citation

Onodipe, G., Burke, K., Kooti, A., & Delaney, J. (2025). [*To Enhance, Not Replace, Learning: Using AI in the College Classroom*](https://doi.org/10.14434/jotlt.v14i1.41782). *Journal of Teaching and Learning with Technology, 14*(1), 88–103.
