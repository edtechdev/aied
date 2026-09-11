---
title: "AI in Particle Physics Education: Research Problems and Foundational Skills"
created: "2026-09-11T09:20:00-04:00"
updated: "2026-09-11T09:20:00-04:00"
type: article
tags: [physics-education, generative-ai, assessment, assessment-validity, academic-integrity, cognitive-offloading, curriculum-design, higher-ed, problem-solving, transfer-of-learning]
sources: ['raw/papers/2609.05719.md']
confidence: high
---

> **Synthesis:** [[generative-ai]] can now produce correct solutions to standard [[physics-education]] homework, severing the link between a submitted answer and a student's independent capability. Reporting on a redesign of the introductory nuclear and particle physics course (KT1) at Ruhr University Bochum, Mikhasenko et al. permitted AI alongside traditional tools on unusually difficult, [[research-methods-aied|research]]-shaped assignments, and found that most of the 42 enrolled students stayed engaged and produced ambitious work — yet the course did not reliably secure its foundational objective. A mid-semester survey showed frequent [[llm]] use, low self-reported preparedness for the required computer fluency, and divided attitudes toward prompts-resistant tasks, while an unaided written examination (mean 20.6 out of 80, only two students reaching 40) gave a confounded but serious warning about [[transfer-of-learning]] to independent performance. The authors conclude that assisted performance and independently retrievable knowledge are distinct achievements, and recompute assessment priorities around unaided [[problem-solving]] and early [[ai-literacy]].

## Why Generative AI Breaks Standard Physics Homework

The report opens from a claim about [[assessment-validity|assessment validity]]: a coherent derivation and solution no longer establishes that a student can solve the problem independently. When producing an answer becomes separate from understanding it, a completed [[problem-solving]] solution stops being evidence of capability, and instructors must reconsider what homework teaches and what a submitted solution reveals about a student's abilities. [[physics-education]] therefore faces two risks at once — letting students take a single-prompt AI answer without gaining the intended knowledge, and failing to teach students how to use and question AI-generated answers.

The authors note that AI-based tools were already widely used by university students when the course ran, so the redesign began from an existing condition rather than an imagined one. Their design premise was the instructor's experience that much scientific knowledge is acquired while working on open-ended problems of higher complexity — an [[experiential-learning]] and [[problem-based-learning]] view of skill development. They asked whether [[generative-ai]] could let students enter that process earlier: not simply to obtain an answer, but to question, test, correct, and make sense of the output.

## The Course Redesign: Research-Shaped Assignments

KT1 is an elective 6 CP [[higher-ed]] course at Ruhr University Bochum with four lecture hours and two tutorial hours per week, taught in winter semester 2025/26 through a top-down narrative moving across sectors of the Standard Model, with Thomson's *Modern Particle Physics* as reference. Forty-two students handed in at least one exercise sheet, 22 of them in the fifth semester of their bachelor's studies.

The course separated three activity types. Lectures introduced concepts, notation, and physical motivation, each opening with recap questions that mixed conceptual and computational items. Tutorials gave practice on standard analytic problems, disclosed after the lecture and solved on the blackboard in class. Homework was the exploratory component: ten [[curriculum-design|assignments]] of unusual difficulty, 1.5 weeks each, designed as undergraduate-level research problems that combined several methods, data representations, and workflows rather than routine applications of one known method. Group sizes ranged from individual (HW6) to unlimited (HW8), with most sheets capped at two to four students, making [[collaborative-learning]] and [[group-work]] a structural feature of the course.

The assignment sequence covered a PDG particle-numbering program (HW1); a proton–proton angular flux model with a spherical surface plot 3D-printed from the reference solution (HW2); Belle II event-display interpretation (HW3); calorimeter cell-size and π⁰ mass-resolution design (HW4); physical parameters of a personalized Dirac spinor (HW5); the full Rosenbluth derivation of elastic electron–proton scattering (HW6); an SU(3) flavor-symmetry Dalitz-plot exercise (HW7); a [[creativity|creative]] "hadron characters" outreach task over the Christmas break (HW8); a Pythia-based measurement of the W mass and width (HW9); and a nuclear-physics podcast (HW10). HW2 and HW4 illustrate the research-shaped design most clearly — HW2 was only partly specified and required transforming published elastic and inelastic proton–proton measurements into a common angular flux, while HW4 combined four-vector handling, detector geometry, histograms, random sampling, and engineering constraints around an otherwise bounded physics route.

## The Intended Role of AI and Student Responsibility

[[generative-ai]] was explicitly allowed and introduced in the first lecture as a potential partner and teacher. Intended uses were to explain a concept, propose a decomposition, generate or debug code, manipulate algebra, and interpret an error beyond the classical resources of books, scientific papers, and tutorials. HW4 and HW10 explicitly required citations, giving students the opportunity to discover that models tend to fabricate them — a deliberate encounter with [[hallucination-risk]]. The intended student responsibility was to decide whether a result made physical sense: testing a PDG-numbering program for correct quantum numbers and exceptions, checking that an angular distribution captured the correct relative elastic and inelastic probabilities, or confirming an event-display interpretation against tracks, clusters, vertices, and conservation laws.

Assessment mixed [[formative-assessment|formative]] and [[summative-assessment|summative]] elements. For each sheet the best submission selected by the assistants received bonus points, and a 90-minute, individual, AI- and tools-free written examination covered eight problems. Students were offered two weighting paths — homework- or examination-heavy, 70/30 in either direction — with the better result retained; ultimately all students who passed were graded under the homework-heavy scheme. These structures are forms of [[framing-ai-use-for-students|framing AI use for students]], but no formal [[ai-use-disclosure|disclosure]] mechanism is reported.

The instructor tested candidate tasks before distribution and found that a single prompt did not reliably yield a complete solution — the design premise behind calling the tasks prompts-resistant. The paper treats that resistance as design experience, not as a durable property of the assignments, noting the educational value must lie in the reasoning and checking the task requires rather than in a continuous race to remain unpromptable. By publication, Codex 5.6-Sol could produce solutions to HW1, HW4, HW5, HW6, HW7, and HW8, while struggling with HW2, HW3, HW9, and HW10. Model capability was nonetheless a design constraint: no licenses were provided, and students used free models with strict token limits alongside GPT@RUB and Gemini 3 Pro.

## Engagement and Ambition: What Students Produced

Engagement appeared in forms grades do not capture. Several HW1 groups built reusable libraries or command-line tools far beyond the work required for full credit; one HW6 derivation exceeded 15 pages and extended more than two meters across the blackboards; and several HW10 groups produced artistically ambitious scientific podcasts. Of 42 active coursework records, 33 received positive credit on at least eight of the ten sheets and 24 received credit on all ten — evidence of sustained [[student-engagement]] and intrinsic [[motivation]] rather than a few exceptional cases.

A questionnaire after the first three assignments drew 30 complete responses. All described the homework as hard or very hard, and 13 reported spending at least eight hours per week on it. Reported [[llm]] use was frequent: 24 of 29 respondents selected often or always, and none selected never. Attitudes toward assignments designed not to be solvable by a single LLM prompt were divided — 12 positive, ten negative, seven neutral. The same survey recorded low self-reported preparedness for the required computer fluency and low confidence with open-ended problems. The authors flag this as an important distinction: perceived learning and [[self-efficacy|confidence]] can diverge from measured [[learning-gains]], and the survey gives no indication that AI use increased confidence.

## Where the Design Created Friction

The first difficulty appeared with HW1, whose particle-identification problem effectively introduced programming as an undeclared prerequisite, consistent with the low preparedness the survey reported. In response the [[teacher-role|instructors]] reduced some later tooling demands while retaining the central research-shaped idea. Time was a second problem: research-shaped work needs time not only to obtain an output but to understand why it is correct, and respondents asked for longer deadlines, clearer deliverables, stronger links to the lectures, and dedicated help. When a student lacked sufficient physics knowledge to evaluate a generated answer, the intended conversation with AI could become a cycle of guessing in response to plausible but unreliable answers — an instructor interpretation supported by the reported difficulty and support requests. Open responses also raised concerns about dependence on AI and unequal access to paid models, connecting the redesign to the [[digital-divide]] and [[equity-in-ai-education]]. The complexity of the assignments also increased the teaching assistants' workload.

The tutorials created their own friction. Disclosing problems in advance gave students time to prepare AI-generated solutions, which some then copied onto the board without engaging in the intended reasoning process — a small-scale [[academic-integrity]] failure that mirrors the [[soft-barriers-copying-ai-programming-2026|copying behavior]] documented elsewhere. Staff notes and survey themes indicate many students found taking their turn at the blackboard intimidating, and open responses asked for more preparation time, more stable group structures, and stronger alignment among lectures, tutorials, homework, and examination.

## The Examination Record and the Foundational-Skills Gap

The examination scores were not obtained under neutral inputs, and the authors are explicit about this. For students with substantial homework and bonus credit, the score formula reduced the marginal effect of maximizing an exam score, which prevents the examination from serving as a clean learning measure or a clean estimate of an AI effect. Homework was commonly collaborative and resource-rich while the exam was conventional, previous iterations of the course did not require a written examination at all, and the tutors released two mock examinations to compensate.

Those caveats do not make the record irrelevant. The 27 students who took the examination received a mean score of 20.6 out of 80, and only two reached 40 points. Many students left problems unattempted because their homework scores had already secured passing the threshold, which skewed the mean downward. The instructor also observed that some students who needed examination points and made a serious attempt were unable to complete standard calculations. That observation was not collected through a formal protocol, but it made the low record difficult to dismiss as incentive alone, and the examination became a serious warning about students' unaided performance — a failure of [[transfer-of-learning]] from resource-rich homework to independent [[problem-solving]] under [[assessment|exam conditions]].

## Implications for Assessment and Course Design

The experience reinforced a well-established distinction: assisted performance is not the same as independently retrievable knowledge, so [[generative-ai]] may act as an effective tutor while students still need dedicated unaided practice to obtain foundational knowledge. The authors argue the prevalent educational criterion should be whether a student can recall and apply knowledge without aid, as a written examination does. They cite experimental evidence outside the course that unrestricted access to answers can decrease long-term learning outcomes, a physics-specific study in which students using unrestricted ChatGPT frequently accepted incorrect answers and relied on direct copy-and-paste queries, and a contrast case in which a purpose-built, scaffolded [[intelligent-tutoring|AI tutor]] improved immediate learning relative to an in-class [[active-learning]] lesson. Together these point toward [[desirable-difficulties]], [[scaffolding]], and [[help-seeking]] design rather than unrestricted access.

The plan for the next KT1 course reflects three changes, all of which reduce the weight of the research-shaped work in grading while keeping the tasks available:

1. A written examination will be the focus of the course and determine the final grade, with homework counting only toward bonus points, and multiple mock examinations offered so students can practise solving standard problems without assistance.
2. Traditional tutorial problems will be given well in advance so students can come prepared and participate in active classroom discussion, shifting the focus from independent work toward the group discussion that preparation makes possible.
3. Parts of the research-shaped problems may remain as advanced or bonus work with AI still available during study, accompanied by prerequisite preparation, worked examples, [[feedback]], and explicit consolidation.

Beyond these changes, the authors pose three broader questions for the physics community: what foundational knowledge future physicists should be able to reproduce unaided; to what extent research-shaped tasks belong in an undergraduate course; and how [[physics-education]] should cultivate commonly required scientific skills. They also argue that [[ai-literacy]] should be taught early, including how to verify generated answers and how to use AI as a teacher instead of blindly copying its output, and that exposure to research problems and foundational knowledge are distinct educational achievements that cannot be assumed to train or demonstrate one another.

## Limits of the Evidence

The report is a single-course, single-institution reflection rather than a controlled study: one elective course, 42 active coursework records, and no comparison condition or randomisation. The mid-semester survey had 30 complete responses with an unknown eligible denominator, and it measured perceptions rather than demonstrated competence. The examination record is confounded by the incentive structure, the collaborative and resource-rich nature of homework, the novelty of the written exam, and the release of mock papers, and the key observation about students who could not complete standard calculations was not collected through a formal protocol. No systematic [[benchmark]] of named models, prompts, or access tiers was conducted, so resistance to a single prompt is reported as design experience rather than a durable property of the assignments — a limitation the authors underline by noting that model capability changed drastically within months of the course. The authors offer the mixed experience as a reference point for discussion, not as a causal estimate of an AI effect, which places the work firmly in the territory of [[limitations-in-aied-research]].

## Connected Concepts
- [[physics-education]]
- [[generative-ai]]
- [[llm]]
- [[assessment]]
- [[assessment-validity]]
- [[academic-integrity]]
- [[cognitive-offloading]]
- [[curriculum-design]]
- [[higher-ed]]
- [[problem-solving]]
- [[transfer-of-learning]]
- [[student-engagement]]
- [[learning-gains]]
- [[ai-literacy]]
- [[desirable-difficulties]]

## Connected Articles
- [[probing-ai-generated-physics-solutions-2026]] — Probing AI-Generated Physics Solutions and Preparing Students to Critique Them
- [[generative-ai-reduced-study-time-math]] — Faster Completion, Less Learning: Generative AI Reduced Study Time on Math Problems and the Knowledge They Build
- [[cognitive-washout-ai-skill-decay-2026]] — After the Assistant Leaves: Cognitive Washout Dynamics and the Reversibility of AI-Induced Skill Decay
- [[genai-performance-vs-learning]] — Distinguishing performance gains from learning when using generative AI
- [[brcic-effortless-trap-productive-struggle-2026]] — The Effortless Trap: Productive Struggle, AI, and the Illusion of Learning
- [[becker-chatgpt-typology-physics-2026]] — Pragmatic users and skeptical nonusers: A qualitative typology of ChatGPT adoption in physics education
- [[fouad-bentley-trust-utility-gap-physics-2026]] — Trust-utility gap in introductory physics education: Students' adoption, domain-specific skepticism, and preferences for AI integration
- [[efficiency-gain-illusion-ai-overreliance]] — The efficiency-gain illusion: People underestimate the rate of AI use and overestimate its benefits on simple tasks
- [[kofinas-generative-ai-authentic-assessment-integrity-2025]] — The Impact of Generative AI on Academic Integrity of Authentic Assessments Within a Higher Education Context
- [[genai-availability-grades-satisfaction]] — Generative AI Availability, Grades, and Student Satisfaction at a Large University

## Citation
Mikhasenko, M., Stahl, M., Segal, I., Parmar, D., Zimmer, A., & Kazatsky, A. (2026). [AI in Particle Physics Education: Research Problems and Foundational Skills](https://arxiv.org/abs/2609.05719). arXiv preprint arXiv:2609.05719.
