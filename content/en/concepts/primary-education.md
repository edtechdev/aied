---
title: Primary Education
created: "2026-11-15T00:10:00-05:00"
updated: "2026-11-15T06:45:00-05:00"
type: concept
pedagogy: [scaffolding, game-based-learning, self-regulated-learning, social-emotional-learning]
technology: [adaptive-learning, intelligent-tutoring, conversational-ai, generative-ai]
level: [primary education, k 12]
confidence: medium
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-15"
    agent: hermes-agent
---

> **Synthesis:** AI in primary education is used mainly to differentiate practice in early literacy and numeracy, to draft materials for teachers, and to give children something to ask questions of. The best-controlled studies show small gains that depend on [[teacher-role|teacher]] orchestration rather than the model, and a trial built to isolate [[adaptive-learning|adaptivity]] found no advantage for it. This page covers what the evidence supports in tutoring, reading, writing, and [[ai-literacy|AI literacy]], and why class-level deployment changes what good practice means at ages five to eleven.

## Questions to Consider

- A tutoring system raises taught-word scores but not standardized vocabulary. Which outcome should a school buy on?
- In one second-grade trial, the adaptive tutor performed no better than the fixed sequence. If adaptivity is not the active ingredient, what is, and how would you test for it?
- Children in one study [[trust|trusted]] a chatbot about as much as a teacher or a friend. What would change in your classroom if you assumed that level of trust?
- Most primary deployments are class-level: one shared screen, a teacher typing prompts, children watching. What does that make possible that devices for all do not?

## Introduction

Primary education covers roughly ages five to eleven, when children learn to decode text, reason with number, and work in a room with one adult. AI reaches this band through practice software that adjusts to a child's answers, teacher-facing tools that draft plans and [[feedback]], and [[conversational-ai|conversational agents]] children address directly. The third has the weakest evidence and the most direct exposure.

Children have limited keyboard skills, developing [[metacognition]], and a strong tendency to treat a fluent system as a knowledgeable person. Classrooms hold fewer devices than children, so the realistic unit is a station, a shared screen, or a teacher-mediated workflow rather than one tutor per pupil. Adults also carry legal and developmental responsibility that no vendor contract transfers.

## What the evidence base can support

- **The literature is broad but shallow.** A review of 31 studies of AI in elementary [[language-learning|language education]] from 2013 to 2025 found the work concentrated on speaking, literacy, and vocabulary, with grammar, listening comprehension, and sign language barely studied. Most were [[qualitative-research|qualitative]] or [[mixed-methods-research|mixed-methods]], with medium samples and no grade band.

- **The strongest primary language trial is modest.** A [[meta-analysis-systematic-review|scoping review]] of 119 reports on AI-mediated tools in primary English included one cluster [[rct|randomized trial]] with 217 second-grade [[multilingual-learning|English learners]]. It found an effect size of .38 on taught words and nonsignificant effects on standardized vocabulary and [[reading-education|reading comprehension]] ([[li-zhou-ai-tools-primary-english-scoping-review-2026|Li and Zhou, 2026]]).

- **A personalized fractions platform did not beat ordinary teaching.** Across five days, the business-as-usual group made significantly greater fraction-comprehension gains than the Mathbot group. The final sample was 22 students after attrition and outlier removal, and the comparison group was a grade below the treatment group ([[ai-powered-personalized-learning-elementary-fractions-2026|Holman, 2024]]).

- **Pooled tutoring effects are small and fragile.** A meta-analysis of 18 experiments and 11 [[intelligent-tutoring|intelligent tutoring systems]] in U.S. K-12 schools found g = 0.271. Effects held at g = 0.266 in elementary, fell to g = 0.146 in studies including rural schools, and dropped to a nonsignificant g = 0.110 beyond six months ([[leite-its-k12-meta-analysis-2025|Leite et al., 2025]]).

The average effect is positive, small, and sensitive to setting, duration, and the outcome chosen.

## Tutoring and adaptive practice

- **Adaptivity alone bought nothing.** A field experiment gave 132 second graders 30 minutes on one of two versions of the same mathematics tutor, identical in content, interface, feedback, and hints. Only task selection differed. Posttest scores did not differ, F(1, 124) = 0.32, p = .574, and neither did reported effort or enjoyment ([[adaptive-intelligent-tutoring-primary-mathematics-2026|Sibley, Berner and Schmalfeldt, 2026]]).

- **Training, not the system, produced the gain.** Across 19 Brazilian public-school classes, students taught by trained teachers outperformed controls in both the training condition (15.15 points) and the training-plus-system condition (12.31). Adding the system produced no further gain, −4.33, 95% CI [−17.29, 7.23], and teachers said photographing work and fixing recognition errors added time ([[rodrigues-aied-unplugged-numeracy-2026|Rodrigues et al., 2026]]).

- **Dosage tracked reading growth, and dosage was a teacher decision.** In one charter school, first and second graders were sorted by logged minutes into high, low, and no-dosage groups. High dosage outgained low dosage at g = 0.56; high versus none reached g = 0.65 but p = .026, outside the corrected .025 threshold. Students below the 25th percentile showed g = 0.89 ([[burns-ai-tutor-reading-growth-2026|Burns and Morton, 2026]]).

The system is never the whole treatment. A teacher decides who uses it, for how long, and what happens when it fails.

## Reading, writing, and feedback

- **Feedback improved writing when teachers discussed it.** eRevise gave fifth and sixth graders [[ai-feedback-quality|automated feedback]] on evidence use in argument writing. Across 34 teachers and 609 students in eight Louisiana parishes, feature scores improved from feedback alone, and classrooms where teachers responded substantively improved more. Conceptual explanations of evidence use rose from 18.1% to 41.9% ([[correnti-erevise-validity-argument-formative-assessment-2026|Correnti et al., 2026]]).

- **Adaptive feedback beat well-made generic guidance.** In a preregistered within-subjects experiment, 155 German fifth and sixth graders revised six short plans, three with LLM feedback on their own text and three with expert-written guidance matched on structure, tone, and length. Median plan quality rose from 2 to 3 under generic guidance and from 2 to 5 under adaptive feedback ([[ai-feedback-adaptivity-children-plans-2026|Sukjaitham et al., 2026]]).

- **A nine-week [[generative-ai|GenAI]] writing program moved affect, not depth.** With 301 Grade 5 and 6 students in eastern China assigned by class, the program raised the ideal second-language writing self and academic buoyancy and improved language use. It did not move growth mindset, cognitive or metacognitive engagement, or organization, and effects were small: partial η² of .030 for [[motivation]] and .014 for language use ([[genai-writing-program-primary-l2-motivation-engagement|Lu et al., 2026]]).

Contingent feedback on a child's own attempt does work generic guidance cannot, and the gain grows when an adult takes up what the feedback raised.

## AI literacy and children's own use of chatbots

- **Children trust a well-behaved chatbot quickly.** Sixty-three children aged 6 to 14 used a topic-bounded chatbot in a U.S. public school. Fifty-two percent generally trusted its responses, 35% trusted it like a teacher or friend, and about a third would confide in it. Children tested credibility with questions they already knew the answers to ([[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed and Martin, 2025]]).

- **Knowledge of AI grows with age; safety judgment does not.** Among 71 children aged 10 to 16, foundational AI knowledge rose with age, β = 0.17. Ratings of how important AI safety is (M = 2.51) and how safe AI is now (M = 2.77) clustered near the midpoint of a four-point scale, with no age effect. One 12-year-old reasoned that "if they are good friends he doesn't spy so much" ([[children-ai-safety-misconceptions-2026|Leisten et al., 2026]]).

- **Teaching about AI produces large [[self-report-measures|self-reported]] gains.** A meta-analysis of 16 studies that taught AI itself pooled 57 effect sizes from 3,837 K-12 students at g = 0.892, with heterogeneity at I² = 94.68%.

- **A validated self-report scale exists for the upper primary years.** The 15-item AI Literacy [[self-assessment]] Questionnaire covers learning about AI, how AI works, and life with AI for Grades 4 to 6, with CFI = .994 and alpha = .934. Its authors state that it measures perceived, not demonstrated, competence ([[ai-literacy-self-assessment-questionnaire-primary-2025|Thianwan and Srikoon, 2025]]).

AI literacy here is not one [[curriculum-design|curriculum]] made simpler. A framework for a nine-year-old and one for a seventeen-year-old differ in kind: the younger learner needs stories, [[metaphors-and-analogies|analogy]], and making, while the older one can critique a system and account for a decision.

## What AI literacy contains, and what the studies measure

A 2025 review of 25 empirical primary studies fills in the contents of that claim: the construct it maps has four strands, and they are taught in very uneven proportion. [[yim-ai-literacy-primary-schools-review-2025|Yim and Su (2025)]] found digital literacy for interacting with AI in 19 of the 25 studies, computational thinking in 10, AI ethics in 10, and critical data literacy in only 5.

A coding unit therefore reaches one strand of four. The strand that would let a nine-year-old see how training data shapes what a classifier says is the one the literature mostly skips. Yim and Su read the pattern as technical framing that pushes societal implications into a supporting role.

Teaching follows constructionist logic, but with agents rather than paper. Agents appeared in 15 of 25 studies, software-focused devices in 8, and unplugged activities in 3; Teachable Machine, Jibo, Cozmo, and Alexa let children train a model without writing code. Of the 16 studies naming a framework, 8 used constructionism or constructivism and 6 used the ARCS model. The reviewers question the common sequence that teaches rule-based coding before data-driven learning, since machine learning asks a child to curate examples rather than write rules.

What counts as evidence is thinner than what is taught. Surveys appeared in 19 of 25 studies, often as one-off items on readiness or intention, and only 15 of 25 reported any learning outcome. Interviews (11) and artifact rubrics (8) were where conceptual understanding showed up. This is the base beneath the validated [[self-assessment]] scale above: a sound instrument for perceived competence, in a literature that seldom tests demonstrated competence.

A systematic map of elementary science research arrives at the same problem from a different corpus. Across 103 Scopus-indexed publications from 2023 to early 2026, [[barokah-ai-elementary-science-review-2026|Barokah, Hermita and Putra (2026)]] found outcomes broadening into affective and regulatory territory while epistemic outcomes stayed thin. Few studies asked whether children could separate observation from inference or judge the limits of an AI-generated claim. Their assessment warning is specific to this band: upper elementary performance tasks yield partial explanations, drawings, and gestures, and a scorer that marks a developmentally productive answer as wrong removes the formative value. Contributors to both literatures concentrate in China, the United States, and Hong Kong, and the primary review adds a gender gap, with boys reporting more confidence and readiness (Dai et al., 2020, as reported in Yim and Su).

## Design decisions that matter at this level

- **Deploy at class level, not device level.** A shared screen with a teacher typing prompts keeps output inside adult review, and a teacher-mediated workflow can reach students who never touch the tool. The Brazilian unplugged design is the clearest case: paper and pen for children, a camera and a server for the teacher.

- **Count the verification labor.** Teachers in the numeracy trial valued ready-made exercise lists but named photographing, waiting, and correcting recognition errors as the cost. Workload was negatively associated with gains, most clearly for mental demand, −2.569.

- **Train before you scale.** Only 19.2% of 302 Turkish primary teachers surveyed had any AI training, and training and frequency of use were the variables most consistently associated with favorable perceptions. Willingness (M = 3.98) ran well ahead of experience (M = 3.00) ([[cigerci-primary-teachers-perceptions-ai-mathematics-2026|Ciğerci and Uygun, 2026]]).

- **Protect the boundary between personal and shared knowledge.** Generated lesson plans can look like collectively validated practice while carrying no community warrant. The risk falls hardest on novices, whose [[pedagogy|pedagogical]] content knowledge is still forming ([[webb-pck-genai-2026|Webb et al., 2026]]).

- **Decide where the data lives before choosing the model.** A school-hosted small [[llm|language model]] of 1B to 13B parameters, reachable only on the school network with outbound traffic prohibited, trades reasoning depth for architectural privacy. The test is whether leaders can explain and control what happens to children's data ([[zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026|Zulfiqar and Iqbal, 2026]]).

- **Treat skills, not access, as the [[equity-in-ai-education|equity]] lever.** Among 4,497 Grade 6 students in the Netherlands, digital literacy rather than intensity of AI use mediated the link between background and [[learning-gains|achievement]] ([[ai-divide-ses-personality-primary-education-2026|Wang et al., 2026]]).

## Connections

Primary education sits inside [[k-12]] and inherits its [[educational-policy-ai|policy]] and teacher-capacity problems, but the developmental constraints are its own. The adjacent [[early-childhood-elementary-ai-education|early childhood]] literature covers preschool and the first school years, where play and adult [[scaffolding]] dominate. [[secondary-education|Secondary education]] picks up at about age eleven, where subject departments and [[summative-assessment|examinations]] replace the single-teacher classroom.

## Implications for Practice

**For teachers**

- Set the language or mathematics goal first, then choose the tool function. AI support worked when it entered a task rather than replacing one.
- Run adaptive practice as a short, logged station and check minutes by child, not adoption by class.
- Ask children what a chatbot is and who can see what they type before letting them use one.

**For school leaders**

- Cost the second and third year of any local hosting decision: patching, backup, and the technician who owns it.
- Put a named reviewer on every AI-drafted plan or comment set that circulates, and schedule the review time.
- Judge a reading or mathematics tool on standardized and proximal measures together.

**For researchers**

- Report dosage, grade band, and implementation support alongside effect sizes; most primary studies omit one of the three.
- Separate the tool from the adult workflow in the design; training and system effects were indistinguishable in the trial that tested both.
- Measure process, not only posttest scores. Question logs, revision records, and dialogue rubrics capture what self-report scales cannot.

## Common Misconceptions

- **"Adaptive means better."** Adaptivity names a mechanism, not an outcome: the second-grade tutor that adjusted task difficulty left posttest scores statistically indistinguishable from the fixed sequence, F(1, 124) = 0.32, p = .574.

- **"A gain on the items the program taught proves learning."** In the primary English trial, the advantage appeared on words covered by the intervention and vanished on standardized vocabulary and reading comprehension.

- **"Children meet chatbots with healthy skepticism."** Trust formed quickly in the study above: a majority accepted the system's answers, and more than a third treated it like a teacher or a friend.

- **"Young children receive an easier version of the same AI literacy syllabus."** What shifts across bands is the kind of task, not its difficulty: stories and making early, critique and accountability later.

## Connected Concepts

- [[developmental-psychology]] — why age changes what a task can ask, not just how hard it is
- [[math-education]] — the discipline with most primary AI trials and the most null results
- [[reading-education]] — fluency, decoding, and dosage effects in the early grades
- [[writing-education]] — automated feedback, revision, and the limits of rubric scoring
- [[digital-divide]] — device, connectivity, and skills gaps that decide who benefits
- [[equity-in-ai-education]] — differential effects by income, language status, and rurality
- [[teacher-role]] — orchestration, mediation, and the labor AI adds to a teacher's day
- [[curriculum-design]] — sequencing AI literacy across year groups rather than adding a module
- [[privacy]] — child data, retention, and architectural rather than contractual protection
- [[assessment]] — what counts as evidence that a primary learner gained something

## Connected Articles

- [[ai-elementary-language-education-review-2026]] — 31 studies of AI in elementary language learning, concentrated on speaking, literacy, and vocabulary
- [[guo-ai-literacy-developmental-paces-2026]] — 118 K-12 studies organized into the PACES developmental framework
- [[yu-k12-ai-education-ai-literacy-meta-analysis-2026]] — 16 interventions teaching AI itself, pooled at g = 0.892
- [[yim-ai-literacy-primary-schools-review-2025]] — 25 primary studies; AI literacy as four unevenly taught strands, mostly assessed by survey
- [[barokah-ai-elementary-science-review-2026]] — 103 publications mapping five application clusters in elementary science; epistemic outcomes thin
- [[karampa-students-game-designers-ai-literacy-2026]] — 22 students build a misinformation escape game; AI literacy rises 3.684 to 4.309
- [[llm-comparative-judgment-writing-screening-2026]] — 1,208 students in Grades 3 to 6, LLM pairwise scoring
- [[melo-llm-classroom-observation-teach-2026]] — 8,618 AI evaluations against expert TEACH Primary ratings
- [[age-tiered-ai-literacy-guidebooks-2026]] — age-tiered guidebooks, 831 participants; acceptance is not learning
- [[horowitz-kraus-children-chatgpt-cognitive-control-2026]] — 6- and 7-year-olds show weaker frontoparietal connectivity than adults
- [[tutor-case-bench-challenging-behaviors-2026]] — 923 documented cases; best model meets a documented response 55.8% of the time
- [[llm-simulating-student-scientific-thinking-2026]] — simulated student ideas drift furthest from real ones in elementary grades
- [[human-ai-complementarity-social-emotional-learning-2026]] — agents hold tone and procedure; educators lead on reflection
