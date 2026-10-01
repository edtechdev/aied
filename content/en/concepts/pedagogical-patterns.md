---
title: Pedagogical Patterns
created: "2026-09-30T16:20:00-04:00"
updated: "2026-09-30T16:25:27-04:00"
type: concept
foundations: [ai-education, learning-design]
pedagogy: [pedagogy, scaffolding]
assessment: [formative-assessment, peer-assessment, ai-feedback-quality]
audience: [instructors, instructional designers, faculty developers]
level: [higher ed, k 12]
confidence: high
connected_faqs: [designing-ai-into-learning]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: revision
    date: "2026-10-01"
    agent: hermes-agent
---

> **Pedagogical Patterns** — the *ordered sequences* of activity that research in this knowledge base has tested, with attention to where [[generative-ai|generative AI]] enters the sequence and where [[human-in-the-loop-ai|human judgment]] has to remain. Where [[pedagogy]] catalogs approaches ([[active-learning|active learning]], [[problem-based-learning|problem-based learning]], [[collaborative-learning|collaborative learning]]) and [[learning-design]] describes how a course is designed, this page catalogs what students and teachers actually *do*, in what order, and what happened when it was tried. PAIRR — draft, peer review, AI review, reflection, revision — is the best-documented example, and the pattern behind it recurs across disciplines: effort first, AI second, human judgment at the stakes.

## Questions to Consider

- A pattern is a *sequence*, not a tool. Take one assignment you teach and write the order of moves a student makes. Where in that order would AI help, and where would it do the work the student is supposed to be doing?
- Several patterns here deliberately give AI a *weak* role — hints instead of answers, questions instead of corrections. Why would a deliberately less helpful tutor produce better learning, and what does that imply about the AI tools your institution is buying?
- The best-evidenced pattern on this page ([[learning-by-teaching|learning by teaching]] an AI) asks students to explain, and it improves explanation and question quality but *not* objective recall. If you adopted it, what would you change about how you assess?
- When [[ai-feedback-quality|AI feedback]] was higher quality than teacher feedback, students did not revise more. What does that suggest about the difference between producing feedback and getting students to use it?
- Contexts change the answer: some patterns were tested online and asynchronous, others face-to-face with a lab. Which of these could you run in your own setting without new tools, and which would need infrastructure you do not have?
- Nearly every pattern here keeps a human at the point of judgment — grading, verifying, or interpreting. Is that a design choice, an evidence-based necessity, or a limitation of what has been tested so far?

## Introduction

Pedagogy answers *how should we teach*; this page answers a narrower, more operational question: **in what order should the moves happen, and where does AI belong in that order?** The distinction matters because the same tool produces opposite outcomes depending on its position in a sequence. A generative-AI assistant placed before a student attempts a problem reliably depresses later unassisted performance; placed after an attempt, with hints rather than answers, the same class of system removes that harm.

Every pattern below is reported with an evidence status, because the knowledge base's coverage is uneven and the difference matters to anyone deciding what to adopt:

- **Tested** — at least one article reports a controlled or comparative test.
- **Mixed** — tested, but without a control, with conflicting results, or with the tested variable entangled with something else.
- **Design proposals** — the idea appears only as a proposal or framework, with no test reported. These are collected separately at the end of the page, in *Design proposals (not yet tested)*, and are not evidence.

The patterns are grouped by the function they serve in a lesson: placing effort before help, pairing AI feedback with human feedback, verifying understanding rather than output, making the learner the teacher, structuring collaboration, and confronting a specific [[misconceptions|misconception]]. Contexts (online, face-to-face, blended) and disciplines are reported with each, and summarized at the end.

## Patterns that place effort before help

These patterns share a structural claim: the learner must commit to an attempt before the AI contributes. It is the most consistently supported design rule in the knowledge base.

### Retrieve or attempt before the AI answers

**Evidence: tested.** The sequence is: attempt from memory, receive instruction or an example, practice in spaced sessions, consult the AI only after committing to an attempt, receive response-contingent feedback that probes the misconception, and advance only once the response shows adequate engagement.

An adaptive spaced-retrieval condition produced the highest posttest scores (M = 78.19) and significantly outperformed learner-directed AI study (M = 67.28, d = 0.92, p = .003) across 89 students in a blended statistics course, while fixed spacing was statistically indistinguishable from adaptive ([[adaptive-pretesting-retention|Akgun & Toker, 2026]]). The contrast case is decisive: in a [[rct|randomized trial]] of 120 students, the group that studied *with* unrestricted ChatGPT retained less on a surprise test 45 days later — 57.5% correct against 68.5% for traditional learners, t(83) = −3.19, p = .002, d = 0.68 — and had also studied roughly 45% less, with the disadvantage surviving a study-time covariate ([[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui, 2025]]). A preregistered randomized field experiment in an online MBA found that gains tracked *completed weeks* rather than minutes of exposure (+2.00 points per additional completed tutoring week, p = .018), reading as [[retrieval-spacing-interleaving|spaced practice]] mattering more than total time ([[ai-tutor-modality-randomized-field-experiment-2026|Yang et al., 2026]]).

### Productive failure: attempt before instruction

**Evidence: mixed, and thinner than its reputation.** Students attempt a problem targeting a concept they have not been taught, the tutor withholds the solution and elicits multiple attempts, help comes only when strictly necessary, and consolidation follows with comparison and direct instruction.

The one field study that tests the full sequence with a steered tutor used 17 high school students in Singapore: the steered condition achieved a higher productive-failure score, significant for problem consistency (p = .046), and students produced on average 2.6 representations per session (p = .05), but **no learning outcome was measured** ([[puech-pedagogical-steering-llm-productive-failure-2025|Puech et al., 2025]]). The strongest support is indirect and comes from a randomized within-subjects experiment with 26 students, where immediate-answer [[scaffolding]] performed significantly *worse* than peer, TA and tutor roles on model abstraction (β = −0.692, p = .015; β = −1.039, p < .001; β = −0.769, p = .005) even though students *preferred* the directive tutor — preference ran against competence ([[preferred-scaffolding-ai-mathematical-modeling|Zhu et al., 2026]]).

### Error analysis and erroneous examples

**Evidence: mixed.** Students diagnose an error in an artifact — an AI-generated diagram violating referential integrity, a query that drops a join, an [[llm]] code snippet — receive clues that force them to infer the fix rather than being handed the correction, repair it, and reflect on which parts of the output were untrustworthy.

A pre-post study of 13 students in an online database course rose from 4.25 to 6.83 out of 7 (t(12) ≈ 5.10, p < .001, d = 1.49) using weekly critique-and-refinement cycles built on deliberate AI failure cases, but with no control group the gain cannot be separated from the [[curriculum-design|curriculum]] or instructor ([[pedagogy-ai-mistakes|Hosseini, 2026]]). A [[meta-analysis-systematic-review|systematic review]] of 72 computing-education studies reports that error analysis is a *distinct competence*: students performed significantly worse at correcting LLM-generated code than at traditional programming exam tasks ([[kumar-genai-computing-education-systematic-review-2026|Kumar et al., 2026]]). No article in the knowledge base reports a controlled test of erroneous-example instruction as such.

### Worked examples with self-explanation

**Evidence: mixed — the two halves diverge.** A worked example is presented with missing justifications to complete, or with errors to find; the student completes or repairs it, explains their reasoning, and then attempts the next problem.

Adaptively assigning guided and buggy examples beat random problem-type assignment in a classroom study of 113 students (posttest M = 72.3 and 72.5 against 65.7 control, A = .58, p = .005 and p = .002), and the [[knowledge-tracing]] variant narrowed the achievement gap by 77.1% for low [[prior-knowledge]] students (β = 9.4, p = .001) ([[adaptive-scaffolding-cognitive-engagement-its|Dey Tithi et al., 2026]]). But *adding* the self-explanation step to elaborated AI feedback lost on every measure in a preregistered experiment with 302 participants: it doubled feedback time (4.1 vs 2.1 min, p < .001), cut problems completed by 40% (2.0 vs 3.4, p < .001), produced no gain per episode (OR = 1.03, p = .486), and lowered end-of-session mastery (65% vs 79%, d = .41, p < .001) ([[structured-reflection-ai-explanatory-feedback-2026|Asher et al., 2025]]).

## Patterns that pair AI feedback with human feedback

The knowledge base's most replicated finding about AI feedback is that it works better *combined* with human feedback than alone — and that its quality is not what determines whether students use it.

### PAIRR: peer and AI review with reflection

**Evidence: mixed (widely implemented, not controlled).** Students read and reflect on how AI and feedback work, draft, give and receive peer review, prompt the AI for criteria-driven feedback on the same draft, critically compare both, write a revision plan, revise, and reflect on which feedback changed what.

The largest study of college students' use of AI feedback to date followed 654 students across ten writing courses and three writing-intensive [[stem-education|STEM]] courses: 58% preferred combined ChatGPT and [[peer-assessment|peer feedback]], 36% peer alone and only 6% AI alone; 75% found the two similar and mutually reinforcing; AI feedback was called "overly general" by 31% while peer feedback was more specific for 28%; and only 5.3% showed overconfidence in AI feedback ([[pairr-ai-peer-review-2025|Sperber et al., 2025]]). The model was also run in an upper-division business writing course with 34 students, where about a quarter of coded reflections expressed skepticism about or noted inaccuracies in AI feedback ([[gift-ai-pairr-business-writing-2025|MacArthur et al., 2025]]). Both report perception data; neither has a control condition, which is why the pattern is *mixed* rather than *tested*.

### Combined peer and AI feedback

**Evidence: tested.** The comparative evidence comes from outside the PAIRR program. A quasi-experiment with 122 Chinese EFL students found AI-plus-peer integrated feedback raised behavioral, affective and cognitive [[student-engagement|engagement]] against peer-feedback-only (all p < .001; partial η² = 0.28, 0.28, 0.32) and improved writing on all four IELTS dimensions (F(1,119) = 42.68, p < .001, partial η² = 0.26), largest on task achievement (d = 1.41) — with no delayed post-test, so durability is unmeasured ([[ai-peer-feedback-l2-writing-engagement-2026|Liu, 2026]]). In a randomized study of 45 student teachers in 12 groups, GenAI-supported peer feedback beat plain peer feedback on argumentation, and the *prompt-scaffolded* variant performed best on advanced elements such as rebuttal data and addressing the opposing view ([[chang-genai-peer-feedback-collaborative-argumentation-2026|Chang et al., 2026]]).

### AI critique then revision

**Evidence: tested — with an important null.** Draft, prompt the AI for rubric-driven feedback, critically assess that feedback against the rubric and the sources, write a revision plan, revise, and reflect.

A controlled 2 × 2 factorial experiment with 120 English majors found writing-quality gain was highest for the group trained in both filtering and appraisal (M = 7.92), against 6.10, 4.56 and 3.10 for the other conditions, with deep revision rising from 28% to 48% and the advantage persisting on a new topic and after AI support was removed ([[rethinking-ai-writing-feedback-literacy|Dai, 2026]]). The null is the instructive part: in a randomized three-group experiment with 70 students, chain-of-thought-prompted AI feedback was significantly *higher quality* than both zero-shot AI feedback (p = .01) and teacher feedback (p = .008), yet this quality advantage **did not translate into greater revision gains** — teacher feedback produced comparable improvement ([[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al., 2026]]).

### Human-in-the-loop review of AI output

**Evidence: mixed — the review step is rarely the tested variable.** AI generates draft output, automated verifier agents check it for realism, readability or [[hallucination-risk|hallucination]], failed checks loop back for refinement, and a teacher reviews, edits, and accepts or discards before anything reaches students.

A four-agent loop with 8 teachers produced 212 problems of which 166 were accepted as-is, and realism checks worked as intended (10 realism problems flagged, 20 quantity or unit edits, no mathematics error found in a final problem) — but interest fit was the weak point, with students rejecting the topic in 160 of 422 responses ([[walkington-teachers-multi-agent-personalized-problem-generation-2026|Walkington et al., 2026]]). An educator-in-the-loop feedback tool rated by 30 teachers never fell below 4.1/5 across nine items and cut median time per assignment from 10–30 minutes to under 5, but the authors acknowledge no student evaluation, so no learning claim is supported ([[zhao-learnlens-feedback-educators-loop|Zhao et al., 2025]]). A red-team experiment makes the stakes concrete: 2 of 5 prompt injections changed a grade undetected, at 100% (9/9) and 94% (17/18), leaving the teacher as the only real check on [[automated-assessment|AI grading]] output ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]).

## Patterns that verify understanding rather than output

Because AI can produce a competent artifact, these patterns move assessment to evidence the artifact cannot supply on its own.

### Oral and viva verification

**Evidence: tested as a format, but results are about scores and affect rather than learning.** A coding assignment is submitted with AI permitted, followed within 48 hours by a mandatory 15-minute oral code review in which the student explains the program and runs integration tests live, graded 70% on the review and 30% on the rubric.

A three-semester quasi-experiment with 96 students found no statistically significant change in exam performance despite the new policies (~2% improvement on one exam), while pasted-to-total characters rose from 61.0% to 68.1% (p < 0.0001); 90% of students said the reviews motivated them to understand their code better and 65% that they helped avoid over-reliance ([[code-review-genai-cs1|Fowles et al., 2026]]). Asynchronous recorded oral responses produced significantly higher scores than in-person multiple-choice (midterm Md = 92.5 vs 70, p < .001; final Md = 94.2 vs 86.4, p = .002) with only moderate cross-format correlations (τ = .44 and .25) — and the authors caution these are *format score differences, not evidence of learning gains*, with cheating behavior unmeasured ([[asynchronous-oral-assessment-2026|Pentland et al., 2026]]). Direction is not uniformly positive: students were calmer in a chat-based viva (M = 6.50 vs 5.86, p = .028) but rated the face-to-face viva significantly better for understanding their own work (p = .004) ([[aivaluate-anxiety-assessment-2026|Yusuf et al., 2026]]).

### Staged checkpoints and process evidence

**Evidence: mixed — no controlled test of the mechanism itself.** Coursework runs as staged modules, each ending in a checkpoint that verifies both the output *and* the approach — a correct result reached by hardcoding is rejected — with a pre-advancement check that returns the learner to skipped steps.

A case study of 5 graduate students in a self-paced quantum-information course logged 75 interactions and confirmed the dual output-and-approach checkpoint functioned as intended, with no control group ([[quantum-education-its|Elhaimeur & Chrisochoides, 2026]]). A 27-participant pilot using stop-block checkpoints reported significant [[self-efficacy]] gains across all ten assessed skill areas (p < 0.001) in a within-subjects pre-post design where gains cannot be separated from practice effects ([[agentic-education-coding|Naboulsi, 2026]]). A three-year quasi-experiment with 248 [[engineering-education|biomedical engineering]] students found higher A-rates after adding four-module problem-based learning with milestones and rubrics (66.4% vs 39.1%, Δ = +27.3 points, p = 0.042), persisting after excluding the pandemic-affected year, but the comparison is historical and non-randomized ([[pbl-biomedical-engineering-genai-2026|Nnamdi et al., 2026]]).

## Patterns that make the learner the teacher

### Learning by teaching an AI tutee

**Evidence: tested, and the best-evidenced pattern on this page.** The student studies the content, then explains it to an AI prompted to hold a novice stance that never reveals the target explanation; the AI asks for explanations, examples and verification reasoning, sequenced from lower- to higher-order, and persists until the explanation is satisfactory.

A quasi-experiment with 68 preservice teachers found explaining to a GAI novice learner scored higher on defining the flipped classroom (M = 4.18 vs 3.29, p < 0.001, r = 0.474) and its activities (M = 4.91 vs 3.06, p < 0.001, r = 0.642), generated more and higher-quality questions (both p < 0.001) — but showed **no group difference on objective questions** (M = 23.18 vs 21.57, p = 0.416) ([[wang-genai-novice-learner-learning-by-teaching-2026|Wang et al., 2026]]). A randomized lab experiment with 41 students found higher knowledge-test scores (adjusted 11.86 vs 10.53, F = 35.54, η² = 0.74) and clearer, more readable code, but **no difference in code correctness** ([[chatgpt-teachable-agent-programming-lbt-2024|Chen et al., 2024]]). An 11-week deployment across 546 students found each additional deep-learning act associated with a 2.7% decrease in expected quiz attempts (IRR 0.973, p < .001), with the comparison confounded by time-on-task and late-semester circumvention rising to 30–35% external content reuse ([[explique-teachable-agent-algorithms-546-students-2026|Wang et al., 2026]]). The consistent shape: gains in explanation and generative work, not in objective recall.

## Patterns that structure collaboration

### Scripted roles with one shared AI

**Evidence: tested, but in controlled or uncontrolled settings rather than ordinary classrooms.** Two learners share one AI and are assigned explicit roles with rotation rules; the AI is configured to take a role as needed and its output goes to the whole group. In a pair-programming variant the shared AI models the dyad's joint attention and effort, forecasts a breakdown up to 30 seconds ahead, and escalates scaffolds in tiers from doing nothing to a directive hint.

A within-subjects experiment with 26 dyads found the feedback condition achieved higher debugging success (t[49.96] = −13.51, p < .0001) and finished faster (t[44.70] = 4.39, p < .0001), though it required dual eye-tracking and pupillometry hardware and did not test transfer to unsupervised pair work ([[golrang-propact-pair-programming-2026|Golrang et al., 2026]]). A quasi-experiment with 58 graduate students in 16 groups found role design raised mind-map content scores from 3.65 to 4.59 on a 1–5 SOLO scale (z = 3.771, p < 0.001) while node and branch counts stayed flat — but with no control group, practice effects cannot be ruled out ([[cheng-symbiotic-role-design-human-genai-collaboration-2026|Cheng et al., 2026]]).

### AI-assisted discussion

**Evidence: mixed — the one direct implementation is a case description.** Students analyze a scenario and answer guided questions independently, prompt ChatGPT with a standardized prompt on the same questions, evaluate the AI responses for accuracy against their own, refine their answer, and close with a whole-class discussion.

The economics activity deliberately exploits an AI error — ChatGPT calls the song's depicted behavior "perfectly elastic" demand when the correct answer is inelastic — turning validation of AI output into the discussion ([[beck-genai-literacy-economics-hands-on|Beck & Brodersen, 2025]]). It reports instructor impressions, not a measured outcome. A tested collaborative-discussion sequence with 67 teacher-education students found the experimental group outperformed a lecture control (M = 51.45 vs 43.89, p = 0.001, g = 0.839) with co-regulation rising (p = 0.043, g = 0.512) — but AI was used to *design* the technique, not to mediate the discussion ([[ccct-cooperative-learning-technique|Tutal, 2026]]).

## Patterns that confront a specific misconception

### Refutation and conceptual change

**Evidence: tested — with directly conflicting results.** Elicit the learner's specific belief, present a [[refutation-text|refutation text]] or a personalized AI dialogue that confronts it, engage with the counter-evidence and the correct explanation, restate the correct conception, then retest after a delay.

A preregistered experiment with 375 adults found personalized misconception AI dialogue produced significantly larger immediate belief reductions than both textbook-style refutation and neutral AI dialogue, persisting at 10 days but converging with textbook refutation by 2 months ([[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett & Tangen, 2026]]). A Solomon four-group quasi-experiment with 413 tenth-graders found the *reverse*: expert-written and AI-generated conceptual-change texts were both significantly more effective than interactive ChatGPT dialogue, which showed no significant advantage over control, and gains were almost exclusively limited to high-achieving students ([[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdogan, 2025]]). The second paper flags the conflict explicitly and attributes it to [[prompt-engineering|prompt design]] and domain. Refutation text itself beat control in both.

## Contexts and disciplines

The pattern determines what the context requires, and several patterns were tested in only one setting:

- **Online and asynchronous.** Retrieval and spacing, the Socratic variants, worked examples with self-explanation, prompt-scaffolded use, asynchronous [[oral-assessment|oral assessment]], and the learning-by-teaching deployments. Asynchronous settings make the *sequencing* load-bearing, because the system cannot see whether the student attempted first.
- **Face-to-face and blended.** [[productive-failure|Productive failure]], error analysis, the flipped variants, oral code review, scripted collaboration, and the conceptual-change studies. Class time is often reallocated rather than replaced — in the oral-review pattern, lectures moved to video so class time could hold the interviews.
- **Disciplines represented in the tested evidence.** [[writing-education|Writing]] and [[language-learning|language learning]] (PAIRR, combined peer and AI feedback, AI critique then revision), [[math-education|mathematics]] (retrieval and spacing, productive failure, worked examples, error analysis), [[cs-education|computer science]] (Socratic assistants, error analysis, oral code review, learning by teaching, scripted pair work), [[medical-education|medicine]] (Socratic scaffolding in clinical interviews), [[teacher-education|teacher education]] (scripted argumentation, learning by teaching), [[business-education|business]] (flipped MBA tutoring), and [[physics-education|physics]], [[science-education|science]] and [[vocational-education|vocational]] settings for the conceptual-change and oral-assessment studies.

## What the evidence does not yet support

Stated plainly, because these are the findings most likely to be quietly dropped:

- **Better AI feedback does not produce more revision.** Higher-quality chain-of-thought feedback beat teacher feedback on quality and produced no revision advantage (Farrokhnia et al., 2026).
- **[[socratic-method|Socratic questioning]] is not automatically better.** A randomized trial of 132 students found the Socratic assistant with full context rated significantly *worse* for supporting task completion than all other configurations (mean rank 48.63, μ = 3.53, against 4.27, 4.16 and 4.12; χ²(3) = 12.14, p = .007), with the most external LLM use (23%) and the fewest full-comprehension responses (48% vs 67%) ([[guardrails-ai-teaching-assistants-programming-2026|Eastwood et al., 2026]]) — while a medical RCT found a [[agentic-ai|multi-agent]] system containing a Socratic tutor beat its control on examination and communication scores ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al., 2026]]).
- **Students prefer the less effective role.** Directive tutoring was preferred while immediate-answer scaffolding depressed model abstraction (Zhu et al., 2026).
- **Verification formats change scores without demonstrating learning.** Oral formats raised scores and reduced [[anxiety-and-stress|anxiety]] while one study found face-to-face better for understanding, and no study measured cheating.
- **No controlled test isolates human review of AI output**, and the checkpoint mechanism has never been tested as the manipulated variable.
- **Productive failure and error analysis rest on small, uncontrolled studies** (n = 17 and n = 13) that measure strategy fidelity or [[self-report-measures|self-report]] rather than learning outcomes.

## Design proposals (not yet tested)

The patterns below come from a faculty guide supplied by the knowledge base maintainer (*AI-Ready Course Design*, September 2026). That guide states explicitly that its examples are **design proposals, not tested interventions**, and no article in this knowledge base tests them. They are recorded here as design ideas worth trying and evaluating, and must not be read as evidence.

- **Argument + revision trail** (composition, humanities). Replace an essay-only submission with an initial thesis, two annotated source passages, a revised essay and a 150-word decision note; permit AI critique after the first draft. Assess the claim–evidence connection and one accepted or rejected suggestion justified against the sources.
- **Data + reasoned claim** (science, laboratory courses). Replace a polished lab report with raw observations, a graph, an uncertainty note and an explanation linking results to a claim; AI may critique a supplied interpretation, and students verify that critique against their data.
- **Attempt + error analysis** (precalculus, calculus). Replace answer-only homework with an initial attempt, analysis of a flawed worked solution, and a corrected explanation; hints are permitted only after the attempt. This is the design form of the error-analysis pattern above, and it inherits that pattern's weak evidence base.
- **Position + challenge + reconsideration** (psychology, sociology). Replace "post once, reply twice" with a case-based claim using a course concept; a peer supplies a counterexample and the author revises or defends with evidence.
- **Project + linked check** (business, health professions). Pair an AI-permitted recommendation for a fictional organization or patient case with a short explanation of two key decisions and a response to a changed constraint; publish the grading relationship between the two components.
- **Plan + try + adapt** (college success). Replace a generic time-management reflection with a one-week study plan, a brief record of trying it, and a revision tied to what happened; AI may suggest scheduling options after the student identifies constraints.

The guide's own cautions apply: recorded video, reflections and logs can themselves be AI-assisted, so in fully asynchronous courses a recording should not be treated as verification of independent mastery. Two of its framings — assessment twins and asynchronous oral assessment as a cheating deterrent — remain frameworks awaiting validation; the asynchronous oral-assessment studies cited above measured format scores and did not measure cheating at all.

## Connected Concepts

- [[pedagogy]] — the umbrella of teaching approaches this page operationalizes into sequences
- [[learning-design]] — where patterns are chosen, sequenced and embedded in a course
- [[scaffolding]] — the support-and-fading principle that governs where AI help belongs
- [[feedback]] — the system this page's feedback patterns instantiate
- [[formative-assessment]] — the assessment purpose most of these patterns serve
- [[peer-assessment]] — the human half of the PAIRR and combined-feedback patterns
- [[ai-feedback-quality]] — why feedback quality alone does not determine revision
- [[evaluative-judgment]] — the appraisal students must exercise on AI output
- [[feedback-literacy]] — the capability the critical-appraisal steps are building
- [[human-in-the-loop-ai]] — the oversight structure of the review patterns
- [[oral-assessment]] — the format underlying the verification patterns
- [[process-oriented-assessment]] — the logic behind staged checkpoints
- [[productive-failure]] — the concept behind attempt-before-instruction
- [[retrieval-spacing-interleaving]] — the evidence base for spaced retrieval patterns
- [[desirable-difficulties]] — why effortful sequences outperform fluent ones
- [[misconceptions]] — what the conceptual-change patterns target
- [[refutation-text]] — the text form of misconception confrontation
- [[learning-by-teaching]] — the pedagogy behind the AI-tutee pattern
- [[socratic-method]] — the questioning pattern and its conflicting evidence
- [[collaborative-learning]] — the context for scripted shared-AI work
- [[cognitive-offloading]] — the risk every effort-first pattern is designed to avoid
- [[metacognition]] — what reflection steps in these sequences are meant to trigger
- [[prompt-engineering]] — the scaffolding layer in structured-use patterns
- [[transfer-of-learning]] — the outcome most patterns are ultimately judged on
- [[assessment-validity]] — the reason process evidence is proposed at all
- [[academic-integrity]] — the driver behind oral and process verification
- [[ai-literacy]] — the capability developed by critiquing AI output
- [[online-teaching-and-learning]] — the context that makes sequencing load-bearing
- [[higher-ed]] — the level where most of this evidence was generated
- [[k-12]] — the level of the productive-failure, conceptual-change and oral-assessment studies

## Connected Articles

- [[pairr-ai-peer-review-2025]] — Peer and AI Review + Reflection (PAIRR): the flagship sequence, N = 654 (Sperber et al. 2025)
- [[gift-ai-pairr-business-writing-2025]] — PAIRR applied in a business writing course (MacArthur et al. 2025)
- [[ai-peer-feedback-l2-writing-engagement-2026]] — Integrated AI-plus-peer feedback raised engagement and all four IELTS dimensions (Liu 2026)
- [[chang-genai-peer-feedback-collaborative-argumentation-2026]] — Prompt-scaffolded GenAI peer feedback in collaborative argumentation (Chang et al. 2026)
- [[rethinking-ai-writing-feedback-literacy|Dai (2026)]] — Training students to filter and appraise AI feedback: the FRAC and APCA conditions
- [[farrokhnia-genai-feedback-student-revisions-2026]] — Higher-quality AI feedback produced no greater revision gains (Farrokhnia et al. 2026)
- [[guardrails-ai-teaching-assistants-programming-2026]] — Socratic plus full context was rated worse than every other assistant configuration (Eastwood et al. 2026)
- [[ai-standardized-patient-scaffolding-medical-2026]] — Need-triggered Socratic scaffolding in clinical interview training, N = 100 (Yang et al. 2026)
- [[hashmi-socratic-physics-chatbot-2025]] — Socratic chatbot in introductory mechanics: question specificity rose from 10–15% to 100% (Hashmi et al. 2025)
- [[agent-type-feedback-style-self-directed-learning-2026]] — Socratic versus directive agent feedback, with the order not counterbalanced (Han et al. 2026)
- [[adaptive-pretesting-retention]] — Adaptive spaced retrieval beat learner-directed AI study (Akgun & Toker 2026)
- [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025]] — Unrestricted ChatGPT during study lowered 45-day retention (Barcaui 2025)
- [[ai-tutor-modality-randomized-field-experiment-2026]] — Structured tutoring gains tracked completed weeks, not minutes (Yang et al. 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — Examples versus practice cross over by knowledge type (Rachatasumrit et al. 2025)
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive guided and buggy examples in an intelligent logic tutor (Dey Tithi et al. 2026)
- [[structured-reflection-ai-explanatory-feedback-2026]] — Adding self-explanation to AI feedback lost on every measure (Asher et al. 2025)
- [[generative-ai-guardrails-harm-learning]] — Guarded tutoring removed the exam harm that unguarded GPT caused, ~1,000 students (Bastani et al. 2025)
- [[guided-llm-scaffolding-independent-learning]] — Guided versus unrestricted LLM use in statistics (Amanlou et al. 2026)
- [[preferred-scaffolding-ai-mathematical-modeling]] — Immediate-answer scaffolding depressed model abstraction while being preferred (Zhu et al. 2026)
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Steering an LLM tutor to withhold solutions for productive failure (Puech et al. 2025)
- [[pedagogy-ai-mistakes]] — Weekly critique-and-refinement cycles built on deliberate AI failure cases (Hosseini 2026)
- [[kumar-genai-computing-education-systematic-review-2026]] — Error analysis as a distinct competence, across 72 computing-education studies (Kumar et al. 2026)
- [[lukesova-clue-before-correction-2026]] — Guided clues instead of direct error correction in L2 revision (Lukešová & Jennings 2026)
- [[wang-genai-novice-learner-learning-by-teaching-2026]] — Explaining to an AI novice learner, N = 68 (Wang et al. 2026)
- [[chatgpt-teachable-agent-programming-lbt-2024]] — Randomized test of teaching a ChatGPT agent to program (Chen et al. 2024)
- [[explique-teachable-agent-algorithms-546-students-2026]] — Learning by teaching deployed to 546 students over 11 weeks (Wang et al. 2026)
- [[socrates-students-instructors-llms-lbt-2025]] — Students designing questions an LLM cannot answer (Yang et al. 2025)
- [[code-review-genai-cs1]] — Mandatory oral code review interviews as a response to GenAI in CS1 (Fowles et al. 2026)
- [[asynchronous-oral-assessment-2026]] — Asynchronous recorded oral assessment versus in-person multiple-choice (Pentland et al. 2026)
- [[aivaluate-anxiety-assessment-2026]] — Chat-based viva reduced anxiety while face-to-face was rated better for understanding (Yusuf et al. 2026)
- [[ai-supported-oral-assessment-tvet-2026]] — AI surfacing rubric evidence for teacher judgment in vocational workshops (Adams 2026)
- [[quantum-education-its]] — Output-and-approach checkpoints in a self-paced graduate course (Elhaimeur & Chrisochoides 2026)
- [[agentic-education-coding]] — Stop-block checkpoints and a pre-advancement check, N = 27 (Naboulsi 2026)
- [[pbl-biomedical-engineering-genai-2026]] — Four-module problem-based learning with milestones and rubrics (Nnamdi et al. 2026)
- [[walkington-teachers-multi-agent-personalized-problem-generation-2026]] — A four-agent review loop with teachers, and where interest fit failed (Walkington et al. 2026)
- [[zhao-learnlens-feedback-educators-loop]] — Educator-in-the-loop feedback with verifier scores (Zhao et al. 2025)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Prompt injections that changed grades undetected, leaving the teacher as the only check (Humble 2026)
- [[golrang-propact-pair-programming-2026]] — A shared AI forecasting collaboration breakdown in pair programming (Golrang et al. 2026)
- [[cheng-symbiotic-role-design-human-genai-collaboration-2026]] — Scripted learner and AI roles in group knowledge construction (Cheng et al. 2026)
- [[paratutor-parent-child-tutoring]] — Role-separated AI support in parent–child tutoring (Luo et al. 2026)
- [[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026]] — Personalized AI dialogue beat textbook refutation immediately, converging by two months (Corbett & Tangen 2026)
- [[akdogan-heat-temperature-conceptual-change-thesis-2025]] — Conceptual-change texts beat interactive AI dialogue, the reverse result (Akdogan 2025)
- [[ai-supported-inquiry-photosynthesis-respiration-2026]] — AI-supported guided inquiry and conceptual understanding (Aydin 2026)
- [[ai-enhanced-flipped-classroom-three-year-2026]] — Three-cohort comparison of traditional, flipped and AI-enhanced flipped (Liu et al. 2026)
- [[flipped-learning-genai-design-education-2026]] — Flipped studio course with parameter-guided prompt scaffolding (Qu et al. 2026)
- [[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026]] — Teaching model moderated outcomes: flipped g = 1.96 against traditional g = 0.46 (Jing et al. 2026)
- [[ai-tutor-statistical-programming-adoption-2026]] — Weekly homework-tutor use predicted transfer-task scores in a flipped course (Préau et al. 2026)
- [[beck-genai-literacy-economics-hands-on]] — A five-step AI-critique discussion built on an AI error (Beck & Brodersen 2025)
- [[ccct-cooperative-learning-technique]] — A tested cooperative-learning sequence with assigned roles and a gallery walk (Tutal 2026)
- [[ai-assisted-seminar-learning-information-literacy-2026]] — Seminar and peer-discussion module with an AI retrieval recommender (Huang 2026)