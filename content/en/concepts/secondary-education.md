---
title: Secondary Education
created: "2026-11-15T00:10:00-05:00"
updated: "2026-11-15T06:35:09-05:00"
type: concept
pedagogy: [help-seeking, student-engagement, self-regulated-learning, metacognition]
technology: [generative-ai, intelligent-tutoring, llm]
level: [secondary, middle school, k 12]
confidence: medium
reviewed_by: [editor]
---

> **Synthesis:** Secondary education is the band where [[generative-ai|generative AI]] use is ordinary and measured [[learning-gains|learning gains]] are smaller than the claims made for it. A two-year trial in ordinary middle schools produced about 0.06–0.08 SD a year, and the K-12 [[intelligent-tutoring|intelligent tutoring]] [[meta-analysis-systematic-review|meta-analysis]] about g = 0.27, because [[student-engagement|engagement]] and [[help-seeking|help-seeking]] bound the effect rather than model capability. Students prefer the tool that does more of the cognitive work, and [[ai-detection|detectors]] separate whole essays but not sentences. The evidence runs from exam revision through [[writing-education|writing]] and authorship to marking, detection, and the middle-school years where use outruns skepticism.

## Questions to Consider

- A tutor sits one click away, yet the median student asked it for help in 17% of sessions containing a mistake. What makes asking cheaper than skipping in your class?
- Students preferred the [[conversational-ai|chatbot]] to note-taking and learned less from it. How would you catch that trap before the test does?
- Detectors reach F1 0.96 on whole essays, 0.88 on sentences, and lose a third of their recall after one rewrite. What integrity policy survives that?
- Nearly every secondary trial runs four to twelve weeks on a unit test. What would justify a year-long departmental adoption?
- Reported use rises from 12 to 17 while [[trust]] in output stays flat. Where in grades 6–9 would you teach verification?

## Introduction

Secondary education covers roughly ages 11 to 18 — middle school or junior high, then high school — and three features of the setting shape what AI can do there. Attendance is compulsory, teachers are subject specialists who may see 150 students a week, and the consequential [[assessment|assessments]] are external: GCSEs, national [[summative-assessment|examinations]], and PISA at 15.

The same students adopt fastest. In Switzerland, 84% of 14–19-year-olds report regular generative AI use, a higher share than any adult age band. Near-universal use, external examinations, and one adult responsible for several classes explain why the literature concentrates on revision, marking, homework, and integrity rather than on [[curriculum-design|curriculum]] redesign.

## What the research measures

- **Intelligent tutoring gains are modest and shrink with distance.** Eighteen U.S. experiments on 11 systems pooled at g = 0.271, nearly identical in elementary (0.266) and middle school (0.256). Effects fell to 0.146 where rural schools were included and to a non-significant 0.110 beyond six months; end-of-year outcomes (0.155) were a third of immediate post-tests (0.460) ([[leite-its-k12-meta-analysis-2025|Leite et al., 2025]]).

- **STEM reviews report larger effects under weaker quality control.** Thirty-five experimental and quasi-experimental studies pooled at g = 0.670, with high school at 1.099 and middle school at 0.392. The authors applied no formal appraisal instrument, and fixed-effect heterogeneity reached I² = 82.98% ([[ai-supported-instruction-stem-meta-analysis-2026|Doğan et al., 2026]]).

- **[[motivation|Motivation]] gains are smaller here than in university.** Across 42 controlled studies (56 effect sizes, 6,059 students) the pooled motivation effect was g = 0.764, but secondary studies averaged 0.360 against 0.886 in [[higher-ed|higher education]], with I² = 93.7% ([[genai-learning-motivation-meta-analysis-2026|Fang et al., 2026]]).

- **A typical trial is short and uses a locally built test.** A GCSE science evaluation randomized 929 students across three subjects, retained 644 at post-test, and reported g = 0.33 on a 35-mark curriculum-aligned test its authors call provisional ([[ai-tutoring-micro-rct-gcse-science-2026|Harrison et al., 2026]]).

## Tutoring, revision, and the engagement problem

- **Access is not use.** In 18 Tennessee middle schools, Khanmigo raised math achievement 0.06–0.08 SD a year at about $15 per student, close to the gain from the same Khan Academy practice without AI. Ninety-six percent of students tried it, but the median student messaged it in 17% of sessions containing a mistake ([[one-click-away-khanmigo-two-year-school-experiment-2026|Oreopoulos and Low, 2026]]).

- **A person in the room changes the experience of difficulty.** Among 149 sixth-form students working above curriculum level, stress was reported by 32.0% of open-web searchers, 19.2% of GenAI tutor users, and 5.8% of those with a human tutor. No learning outcome was measured ([[ennion-human-tutoring-genai-tutoring-search-2026|Ennion and McLellan, 2026]]).

- **Affect-aware support can raise the [[anxiety-and-stress|anxiety]] it targets.** In two Grade 9 [[chemistry-education|chemistry]] classes running the same 16-week laboratory sequence, anxiety rose with AI emotional [[feedback]] (F = 4.60, p = 0.035) and stayed flat under the teacher alone. Students could not tell whether the system's calming advice or the teacher's procedure governed ([[liu-chemistry-lab-emotional-feedback-2026|Liu, Li, and Zhang, 2026]]).

## Writing, reading, and authorship

- **Students prefer the activity that does the work for them.** In seven English schools, 405 Year 10 students read two history passages and were tested three days later, closed-book. Note-taking beat chatbot use by about 0.5 SD on retention and 0.4 on comprehension, yet students rated the chatbot easier and more enjoyable ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et al., 2026]]).

- **Feedback changes writing only for students disposed to act on it.** Each of 1,507 secondary students received one standardized message and ten minutes to revise; behavioral engagement and instrumental attitudes moved performance from the 46th to the 54th percentile, while [[technology-acceptance-model|perceived usefulness]] mediated nothing ([[jansen-argumentative-writing-feedback-receptivity-2026|Jansen et al., 2026]]).

- **A constrained assistant can keep students doing the thinking.** In a bilingual photosynthesis unit, 122 seventh graders produced 6,788 turns with an assistant prompted to withhold answers; 59% reached shared epistemic agency, and it gave a direct answer in none of 1,049 audited turns. About 20% of interactions involved copying text or fishing for an answer ([[chang-shared-epistemic-agency-gai-scientific-writing-2026|Chang et al., 2026]]).

## Assessment, integrity, and exam pressure

- **Marking agreement can be high and still biased.** A commercial [[llm]] marker matched AQA GCSE [[physics-education|Physics]] marks at quadratic-weighted κ = 0.885 across 71 contentious items, but over-marked by 0.30 marks on average and by 6 marks on one question ([[ai-marking-accuracy-gcse-physics-2026|Bozdag and Qiu, 2026]]).

- **A kappa does not show whether a grader can be gamed.** Across 22 prompted models, 14 raised a grade by more than 5% of the scale when the answer carried a note, one by 83.2%, and describing the student as strong raised the mark in 28 of 66 model-task pairs ([[porcaro-ai-grading-benchmark-2026|Porcaro, 2026]]).

- **Detection locates essays, not sentences.** With keystroke and clipboard logs from 2,429 German 15-year-olds, classifiers separated AI from human text at macro-F1 0.96, but sentence-level F1 fell to 0.88 and AI recall dropped from 0.92 to 0.60 after one student-style rewrite ([[schaller-ai-text-detection-authentic-writing-2026|Schaller et al., 2026]]).

- **Students reason about integrity conditionally.** Among 133 Hong Kong students aged 14–16, acceptability turned on purpose of use (62.4%), impact on learning (54.1%), and intent (51.9%), not on AI use itself ([[chan-rethinking-aigiarism-secondary-integrity-2026|Chan, 2026]]).

## The adoption–evidence mismatch and assessment redesign

Use at this tier is near-universal; the evidence is mostly a description of it. [[perez-montesdeoca-genai-secondary-systematic-review-2026|Pérez-Montesdeoca et al. (2026)]] synthesized 33 studies: 26 described how the technology was used against 7 that examined student change, and only 21 collected original classroom data. Nearly all were teacher-initiated and run in isolation, which is the pattern the 84% adoption figure hides — individual teachers experimenting, not departments redesigning.

What the review does establish is conditional. Feedback was the strongest application, with tailored vocabulary feedback nearly doubling scores in one included study, while full delegation narrowed learning and comparing or rejecting output deepened it. Accuracy tracked task difficulty rather than subject: BingChat and Bard reached 92.11% on basic biology questions, every tool fell below 20% on higher-order items, and automated grading reached 50.8% agreement with human evaluators. Survey work points at depth rather than dosage, since [[wu-genai-secondary-innovation-digital-literacy-2026|Wu and Zhang (2025)]] found depth of use tracked self-rated innovation capability while frequency did not, in a cross-sectional design where the paths restate the correlations.

Adoption follows intention; anxiety acts afterward. [[zhang-ai-learning-tools-tpb-high-school-2026|Zhang and An (2026)]] found [[anxiety-and-stress|AI anxiety]] unrelated to intention (β = 0.056, p = 0.123) yet negative for all three behaviors, most strongly applying output (β = −0.247), in a model where usefulness led and adult expectations outranked capability. Measurement is also pilot-grade: [[schicchi-high-school-genai-attitudes-scale-2026|Schicchi and Taibi (2026)]] retained three factors from a 19-item attitudes scale on 93 students, with no confirmatory model.

That is why the assessment question becomes what a completed product still certifies. [[torres-peralta-perceived-learning-engagement-homework-2026|Torres-Peralta et al. (2026)]] found perceived learning nearly unrelated to an engagement index of reading, modifying, and adding to output (pooled correlation 0.052), and [[cho-chatgpt-high-school-gpa-2025|Cho (2025)]] reviewed GPA associations of 0.31 in writing and 0.18 in mathematics that are mostly user-versus-non-user comparisons. Collect the prompt, the draft response, and the revisions, and grade the process rather than the page.

## Middle school and early adolescence

- **Use consolidates before skepticism does.** Across 1,598 students aged 12–25, average use rose from 1.24 to 1.77 on a 0–4 scale between ages 12 and 17, and the number of activities used heavily rose from 1.76 to 3.48, while perceived reliability did not change ([[cuenca-rodriguez-genai-use-caution-trajectories-2026|Cuenca-Rodríguez et al., 2026]]).

- **A two-hour workshop changes behavior that self-reports miss.** Among 116 French students in grades 8–9, those who attended accepted underspecified prompts less often (51.5% vs. 66.7%) and asked a follow-up after a weak answer 59.2% of the time against 27.9%; their AI-literacy self-reports predicted neither ([[clerc-ai-literacy-workshop-llm-regulation-2026|Clerc et al., 2026]]).

- **Purpose of use carries more than frequency.** Among 12,191 15-year-olds in four Chinese regions, shifting toward learning-oriented use was worth 5.8 PISA points at fixed frequency, while shifting toward summarizing and drafting cost 6.6 ([[wu-genai-scientific-literacy-china-2026|Wu et al., 2026]]).

- **Motivation gains in early adolescence carry a relational cost.** In 2,464 German students in grades 7–8, ChatGPT inside competency-based learning was associated with more autonomy and competence satisfaction but weaker relatedness ([[student-motivation-need-satisfaction-genai-sdt-2026|Schweder et al., 2026]]).

## Connections

Secondary sits between [[primary-education]] and [[undergraduate-education]], and shares the [[k-12]] concerns about [[teacher-role|teacher capacity]] and [[equity-in-ai-education|equity]]. What distinguishes it is the combination of external examinations and subject-specialist teaching, which pushes AI toward revision, marking, and coursework support. That makes [[assessment-validity|validity]] and [[automated-assessment|automated scoring]] more central here than in the primary years, where [[developmental-psychology|developmental appropriateness]] dominates. The other distinguishing thread is [[self-regulated-learning]]: adolescents get the tool before they get the judgment to use it, so [[metacognition]] and [[cognitive-offloading|offloading]] decide whether a gain appears.

## Implications for Practice

**For teachers**

- Put the tutor where the mistake happens. The 17% figure is a design problem, not a student deficit: require one question or explanation before the next problem, and check the exchange rather than the login.
- Sequence writing tools instead of co-presenting them: query, close the chatbot, then write. A quarter of students copied when both were open at once.
- Decide before the lesson whose advice governs when an affect-aware system conflicts with your procedure, and tell students.

**For school leaders**

- Budget from realized use. A $15 license is not a program; the effect depends on scheduling, teacher [[prompt-engineering|prompting]], and progress monitoring.
- Set expectations at 0.06–0.08 SD a year for tutoring in ordinary classrooms and about 0.27 for intelligent tutoring. Do not promise gap closure from either.
- Keep detector output out of misconduct findings. Require drafts, version history, or [[oral-assessment|oral defense]], because whole-text scores move under one rewrite.

**For researchers**

- Report detection at sentence level as well as text level, and report probe results beside agreement statistics.
- Measure what students used the tool for, not only how often. Purpose separated a 12-point PISA gap at equal frequency.
- Test durability past four weeks, with end-of-year or external outcomes. Immediate post-tests overstate tutoring effects by roughly a factor of three.

## Common Misconceptions

- **"An AI tutor teaches whenever students have access."** Ninety-six percent of students tried Khanmigo; the median student asked it for help in 17% of sessions where a mistake occurred. Availability and dosage are different variables.

- **"High agreement with examiners means a grader is reliable."** Fourteen of 22 models could be moved by more than 5% of the scale with a note in the answer, and a label about the student shifted marks upward in 28 of 66 model-task pairs.

- **"Detection can tell you which sentences the AI wrote."** Sentence-level F1 fell to 0.88, recall dropped to 0.60 after one student-style rewrite, and text written after chatbot use with no copied material was read as human in 94.6% of cases.

- **"Critical [[ai-literacy|AI literacy]] can wait until university."** Use rises every year from 12 to 17 while perceived reliability stays flat, and a two-hour workshop in grades 8–9 changed prompting and follow-up behavior two days later.

## Connected Concepts

- [[k-12]] — the parent band covering primary and secondary schooling.
- [[primary-education]] — the preceding band, where developmental appropriateness dominates.
- [[undergraduate-education]] — the next band, where large-enrollment courses and advising take over.
- [[intelligent-tutoring]] — the system class behind most secondary achievement trials.
- [[academic-integrity]] — the policy and reasoning frame for AI-assisted coursework.
- [[ai-detection]] — text and response-pattern methods, and their limits.
- [[automated-assessment]] — marking and scoring, including the human routing that makes it usable.
- [[assessment-validity]] — what a score or benchmark can support.
- [[ai-literacy]] — the knowledge and regulatory habits that separate use from understanding.
- [[help-seeking]] — the behavior that decides whether a tutor is used at the moment of difficulty.

## Connected Articles

- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — two-year cluster trial in 18 Tennessee middle schools.
- [[ai-tutoring-micro-rct-gcse-science-2026]] — four-week multisite RCT of Medly in GCSE science.
- [[leite-its-k12-meta-analysis-2025]] — 18 U.S. intelligent-tutoring experiments and their decay over time.
- [[ai-supported-instruction-stem-meta-analysis-2026]] — 35 studies of AI-supported STEM instruction by level.
- [[genai-learning-motivation-meta-analysis-2026]] — 42 controlled studies of motivation, with secondary as a subgroup.
- [[kreijkes-llm-note-taking-reading-comprehension-2026]] — preregistered reading experiment in seven English schools.
- [[jansen-argumentative-writing-feedback-receptivity-2026]] — 1,507 students, one feedback message, and revision gains.
- [[chang-shared-epistemic-agency-gai-scientific-writing-2026]] — 122 seventh graders writing with an answer-withholding assistant.
- [[clerc-ai-literacy-workshop-llm-regulation-2026]] — two-hour workshop in grades 8–9 measured by behavior.
- [[cuenca-rodriguez-genai-use-caution-trajectories-2026]] — 1,598 students aged 12–25; use rises before caution.
- [[schaller-ai-text-detection-authentic-writing-2026]] — PISA 2025 keystroke study of text-level and sentence-level detection.
- [[chan-rethinking-aigiarism-secondary-integrity-2026]] — 133 Hong Kong students reasoning about purpose and intent.
- [[ai-marking-accuracy-gcse-physics-2026]] — commercial marker against AQA marks and a teacher panel.
- [[porcaro-ai-grading-benchmark-2026]] — 22 models tested for gaming, label effects, and agreement.
- [[wu-genai-scientific-literacy-china-2026]] — PISA 2025 science literacy and purpose of chatbot use.
- [[student-motivation-need-satisfaction-genai-sdt-2026]] — 2,464 German students in grades 7–8.
- [[perez-montesdeoca-genai-secondary-systematic-review-2026]] — 33-study PRISMA review; 26 use studies against 7 impact studies.
- [[wu-genai-secondary-innovation-digital-literacy-2026]] — 500 students in grades 7–12; self-rated depth of use and capability.
- [[zhang-ai-learning-tools-tpb-high-school-2026]] — 513 Hangzhou students; anxiety at enactment, not intention.
- [[schicchi-high-school-genai-attitudes-scale-2026]] — 19-item attitudes scale on 93 Italian students; pilot measurement.
- [[torres-peralta-perceived-learning-engagement-homework-2026]] — 1,477 respondents; perceived learning against an engagement index.
- [[cho-chatgpt-high-school-gpa-2025]] — GPA associations by subject, school type, and socioeconomic status.
