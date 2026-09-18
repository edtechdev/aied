---
title: "Using Generative AI to Foster Student Sense of Belonging in Mathematics"
created: "2026-09-18T15:20:00-04:00"
updated: "2026-09-18T15:20:00-04:00"
type: article
foundations: [agency]
pedagogy: [motivation, student-engagement]
technology: [generative-ai, llm, personalized-learning]
stakeholders: [student-experience, learners]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, quantitative, user study]
discipline: [math education]
level: [k 12, secondary]
audience: [educators, learning designers, edtech designers]
page_kind: [evaluation]
sources: ['raw/papers/genai-student-belonging-mathematics-2026.md']
confidence: high
---

> **Synthesis:** Norberg, Murphy, De Ley, Shafran Moltz, Almoubayyed and Ritter (Carnegie Learning) report a single-session study of the A.I. Math Personalization Tool (AMPT), a chat interface in which students co-author their own math word problems with an [[llm|LLM]]. Students say what they want a problem to be about, choose between typing and point-and-click, name the characters, read the generated problem, request revisions in writing, and rate the result out of five; with the student's approval a problem can then be considered for MATHia, Carnegie Learning's [[intelligent-tutoring|intelligent tutoring system]]. Forty-three seventh and eighth graders from three metropolitan areas, in schools reporting 96–100% economically disadvantaged and 86–96% Black populations, completed [[self-report-measures|self-report]] instruments for belonging, interest and value, and perceived ability before and after one 30-minute session. Sense of belonging in [[math-education|mathematics]] rose 0.26 points, a 4.79% increase, Cohen's d = 0.48, t(41) = 2.76, p = .01, driven by the Membership and Acceptance subscales; interest and value moved only marginally, 3.56%, p = .08, and perceived ability did not change. The authors read the result as [[personalized-learning|personalisation]] plus [[agency]]: letting students' own interests into the [[curriculum-design|curriculum]] is what moved [[motivation|belonging]], not the mathematics itself.

## Key Findings
1. **Belonging rose after a single 30-minute session.** Students' mean sense of belonging in mathematics was 0.26 points higher afterwards (95% CI [0.08, 0.44]), t(41) = 2.76, p = .01 — a 4.79% increase, described by the authors as broadly moderate at Cohen's d = 0.48. Time between the pre- and post-surveys was entered as a control and was not a significant predictor of change for any outcome, all p-values > .05.
2. **The change was narrow: membership and acceptance only.** Within the belonging subscales, Membership improved reliably, t(41) = 2.64, p = .01, and Acceptance did too, t(41) = 2.07, p = .04. Affect, Desire to Fade and Trust did not move, all p-values > .20. The authors attribute the split to those subscales reflecting more stable traits (anxiety, shyness) or more systemic issues (trust in instructors) than a 30-minute task can reach.
3. **The other attitudes stayed flat.** Interest and value combined improved only marginally, 0.10 points (95% CI [.02, .22]), t(41) = 1.81, p = .08, a 3.56% increase at d = 0.37, and neither subscale was significant on its own (interest p = .26, value p = .22). Perceived ability showed no significant change, t(41) = 0.41, p = .41 as reported.
4. **Agency was engineered into the tool at three separate points.** (a) Students pick their interaction mode, typing or point-and-click; (b) they control the problem's context, including character names; and (c) their 1–5 rating of the finished problem determines whether it is considered for use in MATHia. The paper grounds even the mode choice in prior findings that minor choice raises interest and perceived ability.
5. **Generation is scaffolded and domain-constrained, and co-authored problems are not solved by their authors.** AMPT runs on GPT-4o in this study: it first learns what the student wants to write about, then constructs a problem that reflects those interests while meeting the demands of the target learning domain, then presents it for written feedback and immediate revision. Students do not immediately solve the problems they author.
6. **The sample is small, purposive and demographically specific.** N = 43 seventh and eighth graders recruited as three groups from three large metropolitan areas; 34 sessions ran at participants' schools and 9 at an after-school programme, and one group of 10 was in summer school making up prior learning loss. A power analysis in R (`pwr`) put 33 observations as sufficient for 80% power at d = 0.50 and α = .05. Participation required parental consent, was IRB-exempt and was compensated at $60.
7. **Belonging was measured with a 30-item, eight-point, five-subscale instrument.** The belonging scale (Good et al.) had Membership (5 items, 1 reverse-coded), Acceptance (9 items, 4 reverse-coded), Affect (8 items, 4 reverse-coded), Desire to Fade (4 items, 3 reverse-coded) and Trust (4 items), α = 0.95 overall and α ≥ 0.89 per subscale. Interest and value used 12 five-point items, α = 0.95 but a two-factor structure (interest α = 0.90, value α = 0.75), and perceived ability used 3 items, α = 0.83.

## What AMPT does

AMPT is a chat-based [[generative-ai|generative AI]] tool whose design goal is cultural relevance rather than tutoring accuracy: it hands the context of a word problem to the student and asks an [[llm|LLM]] to keep the mathematics faithful to a target learning domain. The pipeline is a short [[conversational-ai|conversation]] — interest elicitation, problem construction, presentation, written revision request, and a 1–5 rating — so the student acts as co-author rather than consumer. The paper's rationale is a chain of prior findings: math attitudes predict achievement, course-taking and career pursuit; attitudes start declining as early as third grade and drop through [[k-12|middle school]]; the declines differentiate by gender and by underrepresented-minority status, with belonging the measure that separates URM from non-URM students even after controlling for socioeconomic status; and students perform better when problem contexts reflect their interests. Personalising content therefore targets representation and achievement at once, and AMPT adds a second ingredient the authors argue is missing from most math classrooms: [[agency]] over the content itself.

The deployment path is deliberately staged. Problems carry their author's approval before consideration, and the paper reports that MATHia, Carnegie Learning's [[intelligent-tutoring|ITS]], is used by over 600,000 students, with student–AMPT co-authored problems already delivered to more than 10,000 of them for further testing of preference and performance against standard problems. That comparison is presented as future work, not a result here.

## How belonging was operationalised and measured

Belonging is treated as a domain-specific attitude, not a general feeling about school. The study used the 30-item mathematics belonging instrument developed by Good, Rattan and Dweck and later applied with adolescents, scored on an 8-point Likert scale from Strongly Disagree to Strongly Agree, with the mean of all items as the overall measure. Because the paper reports five subscales with reverse-coded items in four of them, changes at the subscale level are interpretable separately: Membership ("I feel a connection with the math community") and Acceptance ("I feel valued") are the two implicated in this study's result, while Desire to Fade ("I wish I were invisible") and Affect ("I feel nervous") read as more trait-like, and Trust ("Even when I do poorly, I trust my instructors to have faith in my potential") as a judgement about the institution. Interest and value used a 12-item scale distinguishing math interest from utility value, and perceived ability three items such as "I'm good at learning new things in math". All three instruments are [[self-report-measures]], so every outcome in the paper is a change in what students say about mathematics.

## Design and analysis

The design is a one-group pre–post intervention study in a real educational setting rather than a [[rct|controlled trial]]. [[quantitative-research|Quantitative]] pre-surveys were administered before any interaction with AMPT and post-surveys immediately after; question order was randomised per student. Because the three sites could not be run on one schedule, the gap between surveys varied, M = 0.74 days, SD = 1.50, range 0–6, so all analyses were linear regressions in R with time in days as a control variable and change in mean survey response as the outcome, significance being an intercept different from zero. Time was never a significant predictor, which the authors note also serves as a control for group differences. The paper is a short conference contribution, and it describes only those pre–post [[mixed-methods-research|survey analyses]]; the [[qualitative-research|qualitative]] material the tool produces — the conversations and the co-authored problems — is not analysed here.

## Results, and what the design cannot show

The headline result is that a 30-minute authoring session, without solving a single problem, raised mathematics belonging by 4.79% (d = 0.48) while leaving interest, value and perceived ability statistically unchanged. The subscale pattern is the more informative finding: membership and acceptance — the components closest to "there is a place for me and my interests here" — moved, while trust in instructors and the anxiety-adjacent subscales did not. The authors' own reading is that repeated exposure is likely necessary to sustain or broaden the effect and that a longer intervention would be needed to reach subscales reflecting stable traits or systemic conditions.

The limits follow from the same design. There is no control or comparison condition, so improvements cannot be separated from retest effects, session novelty or simply being paid attention; the sample is 43 students from three urban districts recruited in three groups, and although the power analysis justified that size for a moderate effect, the schools' reported demographics (96–100% economically disadvantaged, 86–96% Black, 4–5% Hispanic) mean the results speak to that population and not to mathematics classrooms in general. Only immediate post-session attitudes were measured — no delayed follow-up — and nothing about performance was tested, because the students never solved the problems they co-authored. The paper's own performance claim, that solving student co-authored problems should benefit authors and peers with similar experiences, is explicitly left as "an important test for the future studies". Finally, the intervention is inseparable from its [[personalized-learning|personalisation]] machinery: the study shows that [[generative-ai|GenAI]]-mediated content co-authorship moved belonging, not that generative AI is required to do so.

## Connected Concepts

- [[agency]] — the mechanism the tool engineers, at the interaction mode, the problem context and the rating stage
- [[culturally-relevant-pedagogy]] — the representation gap in word-problem content that AMPT is built to close
- [[equity-in-ai-education]] — gender- and URM-differentiated belonging declines as the motivation for the work
- [[generative-ai]] — the technology generating the co-authored problems
- [[intelligent-tutoring]] — MATHia, the destination for approved student-authored problems
- [[k-12]] — seventh and eighth grade, middle school mathematics
- [[llm]] — GPT-4o behind the AMPT chat interface
- [[math-education]] — the subject domain and the discipline whose attitudes the study measures
- [[motivation]] — the attitude cluster (belonging, interest and value, perceived ability) measured before and after
- [[personalized-learning]] — contextual personalisation of word problems, plus the student's own control over context
- [[self-report-measures]] — every outcome is self-reported on Likert scales
- [[student-engagement]] — the downstream engagement and achievement the authors expect belonging to support

## Connected Articles

- [[ampt-math-personalization-genai-2026]] — The longer account of the same AMPT research programme, including the co-design sessions and the MATHia pilot
- [[taklif-ai-interest-based-personalized-assignments]] — An LLM platform that personalises college assignments around learner interests
- [[ai-powered-personalized-learning-elementary-fractions-2026]] — Personalised AI content and its effect on fraction interest in elementary mathematics
- [[epistemic-proactivity-math]] — How students' AI interaction in mathematics matures over a practice session
- [[liang-ai-learning-motivation-sdt-2026]] — Latent transition analysis of students' AI learning motivation
- [[utility-value-intervention-teach-responsibly-genai-2026]] — Perceived utility as a moderator of motivational intervention effects
- [[chudziak-ai-math-tutoring-platform]] — A personalised adaptive mathematics tutoring platform built on LLMs

## Citation

Norberg, K., Murphy, A., De Ley, L., Shafran Moltz, E., Almoubayyed, H., & Ritter, S. (2025). [*Using Generative AI to Foster Student Sense of Belonging in Mathematics*](https://doi.org/10.1007/978-3-031-98465-5_24). In *Artificial Intelligence in Education: 26th International Conference, AIED 2025, Palermo, Italy, July 22–26, 2025, Proceedings, Part VI* (pp. 188–195). Springer.
