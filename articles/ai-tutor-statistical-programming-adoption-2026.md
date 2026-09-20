---
title: "Student Adoption of an AI Tutor for Statistical Programming: A Longitudinal Study"
created: "2026-09-18T14:40:00-04:00"
updated: "2026-09-19T10:23:54-04:00"
type: article
foundations: [ai-literacy, cognitive-offloading]
pedagogy: [self-efficacy, self-regulated-learning, help-seeking]
technology: [intelligent-tutoring, generative-ai, llm]
assessment: [learning-gains, self-report-measures]
methods: [quantitative-research]
stakeholders: [student-experience]
ethics: [trust]
research_method: [longitudinal study, survey]
discipline: [cs education]
level: [higher ed]
audience: [instructors, researchers, learning designers]
page_kind: [evaluation]
sources: ['raw/papers/ai-tutor-statistical-programming-adoption-2026.md']
confidence: high
---

> **Synthesis:** Préau, Burke, Müller, Rebholz and Papenmeier report a preregistered longitudinal study of a purpose-built [[intelligent-tutoring|AI tutor]] deployed inside a semester-long R programming course for undergraduate psychology students at the University of Tübingen. The "R-Tutor" was a university-hosted wrapper around the OpenAI API, system-prompted to guide students toward solutions rather than supply them, and offered in a general mode and a weekly homework mode. Across 49 pretest and 34 posttest respondents, 76-84% of students used the tutor in the exam-relevant weeks and self-reported spending 53% of their study tool time with it against 8% with unvetted [[generative-ai|generative AI]] tools. Usage fell to 50-58% once weekly content stopped being exam-relevant, then rebounded to 64% on the general tutor in the week before the oral [[summative-assessment|examination]]. Tutor use predicted better weekly [[transfer-of-learning|transfer]]-task performance (12 percentage points, about a 31% relative gain) and a higher probability of the best final grade (OR = 10.17), with no evidence of harm to effort or confidence. The paper's surprise is what did not matter: [[trust]] in AI and attitudes toward AI predicted nothing, while only a self-report scale of programming persistence did. The authors read the pattern as situational demand rather than disposition driving adoption.

## Key Findings

1. **A semester-long field deployment, not a laboratory study.** 51 students consented, 49 completed the pretest and 34 the posttest; the usage-predictor model used N = 49. The flipped classroom course ran 11 sessions (nine with data collection) in four parallel groups taught by three lecturers.
2. **Adoption was high while the content was exam-relevant.** In Phase A (weeks 1-7) 76-84% of students used the homework [[intelligent-tutoring|AI tutor]] each week, and active users sent 31-55 messages on average per week.
3. **Usage tracked stakes, not novelty.** In Phase B (weeks 8-9, add-on topics) the share using the homework tutor fell to 50-58% with 20-26 messages per active user; in the lecture-free Phase C the week before the examination up to 64% used the general tutor and 33% revisited homework tutors, with peak averages of 110 (homework) and 56 (general) messages per active user. Two thirds of students used the tutor to prepare for the final examination.
4. **Students preferred the tools the lecturers supplied.** Self-reported tool shares across the semester: R-Tutor M = 53.06% (SD = 21.49), lecturer learning materials M = 33.06% (SD = 19.30), alternative AI tools M = 8.35% (SD = 10.36), internet M = 5.53% (SD = 5.87); F(3,99) = 52.53, p < .001, η² = 0.61.
5. **Trust in AI and attitudes toward AI did not predict adoption.** Initial [[trust|trust in AI]] (b = -0.04, p = .672), AI acceptance (b = 0.01, p = .587), AI fear (b = 0.01, p = .598) and prior AI use (b = -0.03, p = .322) were all null, and the model as a whole was non-significant, F(10,38) = 1.224, p = .307, R² = .244 (adjusted R² = .045).
6. **One self-report scale did predict persistence.** "R programming compliance and persistence" (SCAPA) positively predicted the proportion of weeks the tutor was used (b = 0.19, SE = 0.09, 95% CI [0.01, 0.37], t = 2.16, p = .037) and transfer-task performance (b = 0.41, SE = 0.19, p = .031).
7. **Using the tutor predicted better transfer performance; using it more did not.** Homework tutor use in a given week predicted a higher z-standardized transfer-task score (b = 0.51, SE = 0.13, 95% CI [0.25, 0.77], t = 3.87, p < .001; marginal R²/conditional R² = .092/.477) — 12 percentage points, a 31% relative increase — while the number of messages sent did not (b = 0.00, p = .961).
8. **Persistent and intensive use predicted the top final grade.** With grade dichotomized (20 students at the best grade, 15 lower), the proportion of weeks used gave β = 2.32, z = 1.97, p = .049, OR = 10.17 [1.61, 208.34]; total messages gave β = 2.70, z = 1.96, p = .0498, OR = 14.90 [1.78, 541.26].
9. **Two nulls matter here.** Tutor users and non-users reported similar homework completion time, t(1140.4) = -0.23, p = .821, d = -0.01, and perceived interaction quality with the homework tutor did not predict transfer performance (b = 0.08, p = .140).
10. **Version two improved experience but not perceived academic impact.** Switching from GPT-4o-mini to GPT-4o and adding a lecturer-solution toggle raised System Quality (b = 0.51, p = .001), Information Quality (b = 0.24, p = .041), Compatibility (b = 0.16, p = .035), Overall Satisfaction (b = 0.40, p = .004) and AI Trust (b = 0.18, p = .006), with a clear version preference (M = 5.64, SD = 1.64, p < .001, d = 0.98); Task-Technology Fit (b = 0.23, p = .119), Performance Impact (b = 0.09, p = .184) and Future Usage (b = 0.05, p = .620) did not differ.

## The course and the R-Tutor

The setting is a standalone R programming course for undergraduate psychology students at the University of Tübingen, normally enrolling about 60 students. Teaching followed a flipped classroom principle: students received videos, tutorials, documentation and cheat sheets, solved homework tasks between sessions, and then worked transfer tasks in class without external help except their own preparatory script. The tutor sat inside the course rather than beside it, and the exam design reinforced that placement — students prepared an analysis script at home where the R-Tutor was allowed, then defended it orally against two examiners with the tutor explicitly prohibited.

The [[intelligent-tutoring|R-Tutor]] itself was a custom website served from a university-managed server that queried the OpenAI API, with a system prompt instructing the [[llm|model]] to behave like a personal tutor, give [[feedback]] and lead students to a solution without handing it over. Students could switch between a general tutor for any R question and a homework tutor primed with that week's task instructions and the lecturers' solution template; a third category let them revisit homework tutors from earlier weeks. The authors report that the two tutor modes correlate well on perceived helpfulness and interaction quality (r = .67 general, .71 homework, .75 aggregated, all p < .001), which is why they aggregated the two items into a single interaction-quality scale.

Mid-semester the team changed the tool because of observed failure modes: the tutor sometimes told students their code could be improved without specifying where. Version two therefore moved from GPT-4o-mini to GPT-4o and added a default-off toggle letting students request the lecturer-provided solution. The authors treat this redesign as a genuine design finding rather than a confound to apologize for.

## Longitudinal design and measures

The study was preregistered on the Open Science Framework (osf.io/xzyd6) and approved by the local ethics committee. Participation was voluntary, rewarded with course credits, invisible to the lecturers, and had no effect on access to the tutor or course outcomes; no demographic data were collected in order to preserve anonymity, which also means no subgroup analysis was possible. One participant disclosed sharing their access codeword and was dropped to avoid contaminating the usage data.

Data came from three streams. Pre- and post-[[self-report-measures|questionnaires]] covered AI trust (Hoffman et al., 2023), AI attitude (Sindermann et al., 2021), R [[self-efficacy]] (Askar & Davenport, 2009, with "Java" replaced by "R"), a 29-item self-developed R self-efficacy scale, a Bloom's Taxonomy measure for R, prior GenAI use, and the SCAPA self-concept and attitude scales (Leifheit et al., 2020). Weekly questionnaires captured estimated homework time plus single-item perceived helpfulness and interaction quality. Usage logs were aggregated per user and week into a binary used/not-used variable and a message count, split across the three tutor-mode categories. Transfer-task answers were marked by two blinded raters against a fixed scheme with excellent agreement, ICC(3,2) = .96-1.00 across the nine weeks.

Analysis ran in R 4.5.1 with linear models, linear mixed-effects models and generalized linear mixed-effects models; exploratory predictor pruning dropped variables with variance inflation above 5. The design produced three natural phases that the authors use throughout: Phase A (weeks 1-7) on exam-relevant material, Phase B (weeks 8-9) on add-on content, and Phase C, the four-week lecture-free run-in to the examination.

## Adoption and usage over the semester

The headline adoption figure is that roughly 80% of students used the tutor during the first phase, when the material it supported was exam-relevant, and that two thirds used it to prepare for the examination itself. What makes the trajectory interesting is its shape. Adoption held between 76% and 84% for seven straight weeks, then dropped abruptly to 58.82% and 50.98% for the two add-on weeks, and then recovered in the lecture-free period — up to 64.71% using the general tutor in the final week, 33.33% returning to earlier homework tutors, and a sharp spike in intensity among those who did return (110.76 messages on average for homework-tutor users, 56.85 for general-tutor users).

The tool-share analysis answers the question lecturers usually care about, namely whether students given a curated [[generative-ai|generative AI]] tool simply leave it for an unrestricted [[conversational-ai|chatbot]]. They largely did not. Over the semester students allocated 53.06% of their [[help-seeking]] to the R-Tutor and 33.06% to lecturer materials, leaving 8.35% for alternative AI tools and 5.53% for the open internet — a significant overall tool effect with a large effect size, and pairwise comparisons in which the R-Tutor beat every alternative including learning materials (d = 0.51 against materials, 1.72 against other AI, 1.90 against the internet), while other AI and the internet did not differ from each other (p = .164). Per-student breakdowns nevertheless show wide variation: some students used the R-Tutor almost exclusively, others barely at all. That dispersion, not a group-level dropout, is where abandonment lives in this dataset — and attrition from 49 pretest to 34 posttest responders means the least engaged students are plausibly under-represented in the evaluation measures.

## What predicted continued use — and what did not

The paper's central theoretical interest is a disconfirmation. Prior work built on the [[technology-acceptance-model|Technology Acceptance Model]] finds that trust predicts intention to use AI (Choung et al., 2023) and that attitude predicts AI tool use (Falebita & Kok, 2025), and the authors expected the same here. In their regression on the proportion of weeks the tutor was used, neither did: AI trust, AI acceptance, AI fear and prior AI use were all null, as were R self-efficacy (b = -0.09, p = .052), Bloom's Taxonomy scores, and every SCAPA subscale except one. The single significant predictor was "R programming compliance and persistence" (b = 0.19, p = .037), a self-report tendency to keep going with difficult R problems — a disposition closer to perseverance than to technology attitudes. The model as a whole explained little (adjusted R² = .045) and was not significant.

The authors' preferred explanation is situational demand. Because the tutor was the recommended route to comparing homework solutions, and because the lecturer endorsed it, use was driven by task necessity rather than personal disposition; they point to Venkatesh and Davis's (2000) identification of voluntariness and job relevance as the extenders of TAM that best fit their data. This is a claim about instrumental embedding, and it carries an obvious corollary they state explicitly: if a university-provided tool becomes restrictive enough, students can defect to an unrestricted model, and the instructional framework that was supposed to guide their AI use collapses.

Where usage did predict outcomes, the relationship was consistent and mostly monotonic in persistence rather than volume. Weekly homework-tutor use predicted transfer-task performance (b = 0.51, p < .001), the number of messages sent did not (b = 0.00, p = .961), and both persistence and message volume raised the odds of the top grade (OR = 10.17 and 14.90 respectively, both p < .05). The interpretation the authors offer is individual aptitude: students need different amounts of exchange to reach a correct solution, so intensity is a poor proxy for learning while any use at all is a reasonable one. Usage also raised subjective measures, positively predicting task-specific R self-efficacy and R programming ability self-concept.

The findings are framed against the [[cognitive-offloading|cognitive offloading]] literature, where AI use has been linked to reduced [[critical-thinking|critical thinking]] via offloading (Gerlich, 2025) and to worse performance on a subsequent unannounced [[cognitive-psychology|memory]] test (Grinschgl et al., 2021) — with the important qualification that the memory penalty disappears when [[learners]] know a test is coming. The authors argue their course supplies exactly that condition: students knew the weekly transfer tasks would test the same concepts unaided, so offloading during homework did not translate into a learning deficit. This is their account of why the usual overreliance harms did not appear, and they present the instructional frame, not the model, as the active ingredient.

## What this means for practice
- **Educators.** Place the tutor inside an existing [[assessment]] loop rather than beside it: the placement, not its raw capability, produced both the usage and the outcomes.
- **Educators.** Make the tool the assigned route to work that has to be completed anyway — students used it because comparing homework solutions against a [[scaffolding|scaffolded]] interlocutor was how they completed their homework, and the authors attribute the high adoption to that immediate relevance to the task.
- **Educators.** Keep unaided transfer tasks after every AI-supported homework week so the tool functions as preparation rather than substitution — the [[self-regulated-learning|self-regulated]] overlay the authors credit for the absence of negative effects.
- **Learning designers.** Build an escape from unproductive loops: the version-two solution toggle let students bypass vague feedback and raised system quality, information quality, compatibility, satisfaction and [[trust]], while task-technology fit and perceived performance impact stayed flat; both versions were rated reasonably helpful and of good interaction quality (v1 M = 3.9, SD = 0.6; v2 M = 4.2, SD = 0.5), with high satisfaction (6.06 vs 6.46) and stated future use (6.46 vs 6.51). A tutor that cannot resolve its own dead ends will push students toward tools that can.
- **Researchers.** Read the work as a template rather than a verdict — an example of integrating AI into a university course while mitigating overreliance risk, expected to generalize beyond programming to [[writing-education|academic writing]] or [[math-education|mathematics]] — and treat its affirmative results as explicitly exploratory first insights, with the authors calling for experimental manipulations that contrast AI-supported and traditional course designs plus work on how personal disposition and contextual factors jointly shape tool use.
## Limitations

- The design is correlational with no experimental manipulation and no control group, so nothing here establishes that the tutor caused the performance advantages rather than accompanying stronger students.
- The sample is a small convenience sample from one course at one institution, with restricted variability in some outcomes — final grades in particular had to be dichotomized because almost no one scored below the top band — which weakens the models' power to detect real effects.
- Attrition is substantial (49 pretest, 34 posttest) and non-participation was invisible to the [[teacher-role|instructors]], so the pre/post comparisons and the end-of-semester evaluation rest on a self-selected subset of the more engaged students; with no demographic data collected at all, no subgroup or [[equity-in-ai-education|equity]] analysis is possible; tool-share proportions, grades, self-efficacy and compliance measures are all self-report.
- The tutor itself misbehaved during the semester, repeatedly telling students their code could be improved without saying where, and the two-version structure means usage and evaluation data are not fully comparable across the term, leaving a moving instrument inside a longitudinal design.
## Connected Concepts

- [[intelligent-tutoring]] — the deployed artifact class: a domain-specific, always-available tutor replacing one-to-one human tutoring
- [[cognitive-offloading]] — the main risk the paper argues the instructional frame mitigated
- [[technology-acceptance-model]] — the theory the paper expected to fit, and the framework its null results strain
- [[trust]] — measured before and after, and the null predictor that anchors the paper's surprise
- [[self-efficacy]] — R self-efficacy rose with persistent tutor use
- [[self-regulated-learning]] — unaided transfer tasks as the mechanism keeping AI help productive
- [[help-seeking]] — the behavior students allocated across tutor, materials, other AI and the internet
- [[generative-ai]] — the technology class, including the alternative tools students used only 8% of the time
- [[llm]] — GPT-4o-mini and GPT-4o behind the tutor, and the reason version two scored higher
- [[cs-education]] — the discipline and the novice-programming difficulty the tutor targeted
- [[higher-ed]] — the semester-long undergraduate course the deployment was embedded in
- [[student-experience]] — satisfaction, interaction quality and version preference as outcome measures

## Connected Articles

- [[access-not-enough-ai-tutoring-2026]] — Engagement with AI tutoring and the human scaffolding that sustains it
- [[ai-literacy-tool-design-programming-education-2026]] — Scaffolded versus unrestricted generative AI in a programming course
- [[ai-availability-student-motivation]] — How AI availability changes effort in introductory programming
- [[ai-generated-traces-novice-programmers]] — Learning effects of AI support for novice programmers across institutions
- [[ai-fallibility-warning-help-seeking]] — Warning students about AI fallibility and its effect on help-seeking in an ITS
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive scaffolding and cognitive engagement inside an intelligent tutor
- [[ai-overreliance-complex-adaptive-system-2026]] — Overreliance modeled as a system property rather than a student trait
- [[ai-learning-assistants-higher-ed-large-scale]] — Large-scale descriptive evidence on AI learning assistants in universities
- [[acceptance-ai-english-tools-2026]] — Acceptance correlates for AI learning tools across disciplines
- [[agentic-education-coding]] — Handing more of the programming loop to AI coding assistants

## Citation

Préau, C., Burke, M., Müller, T., Rebholz, T. R., & Papenmeier, F. (2026). [*Student Adoption of an AI Tutor for Statistical Programming: A Longitudinal Study*](https://osf.io/preprints/psyarxiv/umspj). PsyArXiv preprint.
