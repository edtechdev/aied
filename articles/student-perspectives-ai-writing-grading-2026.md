---
title: "Who Should Grade My Work? Student Perspectives on Transparent AI-Assisted Writing Assessment in Higher Education"
created: "2026-09-11T09:20:00-04:00"
updated: "2026-09-11T09:20:00-04:00"
type: article
tags: [automated-assessment, writing-education, feedback-literacy, evaluative-judgement, ai-use-disclosure, trust, student-experience, higher-ed, cs-education, assessment-validity]
sources: ['raw/papers/2609.05346.md']
confidence: high
---

> **Synthesis:** AlGhamdi (2026) reports a [[qualitative-research|qualitative pedagogical inquiry]] in an undergraduate technical communication course for computing students at a Saudi public university, in which 13 male students were told explicitly that ChatGPT—not their instructor—had scored their handwritten writing and generated the [[feedback]]. All 13 judged the AI feedback clear and useful for surface-level revision, yet almost all separated "this feedback is useful" from "this system should decide my grade," a distinction the paper names as feedback utility versus evaluative authority. The study argues that [[ai-use-disclosure|transparency about AI involvement]] functions as an instructional intervention in its own right, shifting students from appraisal of [[ai-feedback-quality|feedback quality]] toward questions about [[evaluative-judgement|who holds authority to judge]] their work and the [[assessment-validity|legitimacy]] of [[automated-assessment|automated evaluation]]. Because the sample is 13 students in one course section, the findings are offered as bounded, transferable hypotheses rather than generalizable results.

## Study context and design

The study is a course-embedded [[pedagogy|pedagogical]] inquiry rather than a controlled experiment. It was conducted by the course's own instructor at a Saudi public university, inside a Technical Communication class focused on clarity, logical organisation, and audience awareness for computing students. Nineteen male second-year students were enrolled in a single section; thirteen completed the reflective task and formed the analytic sample, which the paper defends as within the 9–17 range commonly considered adequate for reflexive thematic analysis of a homogeneous bounded sample.

The design centres on one deliberate choice: in-class [[writing-education|writing]] by hand. Because students could otherwise produce fluent drafts with [[generative-ai|GenAI]] in seconds, handwritten production was used to guarantee that the text being evaluated was unambiguously the student's own, so that questions of [[trust]], authority, and assessment legitimacy could be examined without authorship ambiguity. The writing task itself asked students to narrate their "MakeMeBuy" video project; the reflections were also handwritten, framed as low-stakes and spontaneous, and analysed with inductive [[qualitative-research|thematic analysis]] following Braun and Clarke.

Two procedural details matter for reading the results. First, the reflections were produced in class using pen and paper, immediately after students received their [[ai-ed-evaluation|AI evaluation]], and the analytic dataset consisted only of those reflections. Second, the author served as both instructor and investigator; the paper documents mitigations for the resulting response-bias and power-imbalance risk, including open-ended prompts that invited disagreement, embedding the task in routine coursework rather than presenting it as a [[research-methods-aied|research]] instrument, anonymising responses before analysis, and treating doubt and dissent as data. Primary coding was done in NVivo; a confirmatory second pass was run independently with Claude Code (Opus 4.7) that converged on two themes and prompted reframing of the other two, a sequence the author adopted deliberately so that his own analytic judgement would not be anchored by AI framings.

## The AI-assisted feedback and scoring procedure

Each handwritten submission was scanned and processed through ChatGPT, which evaluated the writing against the course rubric, generated feedback, and assigned a score that counted toward grades. The rubric aligned with the course objectives on four criteria: clarity, organisation, sentence correctness, and conciseness. The paper is explicit that ChatGPT was chosen for three reasons: it was the tool students were most familiar with locally, its instruction-following allowed structured rubric-aligned prompts that produced consistent criterion-referenced feedback across submissions, and no institutionally governed AI evaluation platform existed at the host university at the time.

[[explainable-ai|Transparency]] was the pivotal stage of the six-stage procedure: after the AI scored the work, students were explicitly informed that an AI system had generated their feedback and score, and only then were they asked to write reflections addressing three prompts—whether and why they agreed or disagreed with the feedback and score, what they noticed about their own writing, and their view on using ChatGPT to evaluate writing. The paper contrasts this with the author's earlier blinded study in the same course (AlGhamdi, 2024), where students did not know ChatGPT had generated the feedback; it is careful to state that differences between the two cohorts cannot be read causally, because the cohorts, years, and baseline AI familiarity all differ.

## Themes in how students received the AI evaluation

Inductive analysis produced four themes, presented separately but interwoven in actual responses.

- **Perceived usefulness (13/13):** every participant found the feedback useful, valuing specific identification of a grammar error or a disorganised paragraph over vague comments like "needs improvement," and describing it as "clear," "direct," "well-organized," and "objective." One wrote: "The comments were clear and helped me understand my mistakes, especially in grammar and sentence structure." Another: "[ChatGPT] showed my mistakes directly and gave me specific points to improve." A third noted the feedback "helped me build confidence in my writing while also providing advice to improve the writing even more," and one observed that "the scores matched the explanation perfectly."
- **Awareness of AI limitations (7 explicit, 3 partial):** participants split these into technical and contextual failures. Technically, several noted the system misread scanned handwriting—"I did notice that it spelt my last name wrong and it thinks I made mistakes in my spelling when I didn't. I think this is because of my handwriting so it must have misread it"—leading one to "take its score less seriously." One stated bluntly that "AI can make mistakes that will affect the student's grades."
- **Conditional trust (7 explicit, 2 partial):** the analytically distinctive pattern, in which students affirm AI feedback and reject AI grading within the same evaluation event—"I agree with it, but with one condition, that the doctor checks the feedback to edit any mistakes."
- **The instructor's [[governance|institutional]] role (5 explicit, 2 partial):** reasons why a human evaluator must remain, including student knowledge, dialogue, and the purpose of the university itself.

At the contextual level, students identified limitations that went beyond error correction. One pointed to a misalignment with the local [[assessment]] regime: "The AI rating had one problem, which is the AI doesn't know [the instructor's] rating system." Another raised the system's relentless positivity: "AI always tries to be positive, but that doesn't mean it's unable to use. I think we can use it as initial feedback." The paper reads these as objections to AI's grasp of context, intent, effort, and institutional norms rather than complaints about fluency.

## Trust, transparency, and assessment legitimacy

The central conceptual contribution is a two-judgement model of [[trust]]: students do not treat [[automated-assessment|AI evaluation]] as a single object to accept or reject, but render separate verdicts on its feedback function and its grading authority. The paper situates this between the algorithm-aversion literature, where people reject algorithmic decisions especially as stakes rise, and the algorithm-appreciation literature, where algorithmic advice is weighted heavily for technical or opaque tasks. Neither blanket aversion nor blanket appreciation fits these students; they made task- and function-specific judgements about one system.

Transparency did not produce disengagement. Instead, students interrogated the evaluation, articulating boundaries around AI's role that the earlier blinded cohort had not. The paper's interpretation, explicitly tentative, is that disclosure "transformed feedback from a taken-for-granted instructional act into an object of reflection," activating [[metacognition|metacognitive]] and [[ethics|ethical]] awareness rather than resistance. It also reads the pattern as extending [[feedback-literacy|feedback literacy]]: Carless and Boud's capacity to judge feedback acquires, in AI-mediated settings, a further component—the capacity to reason about evaluative authority separately from feedback quality.

Students' reasoning about the human instructor moved well past technical limitation. They invoked the teacher's knowledge of individual students—"Teacher knows much better about students and knows good ways to grade students and support students' learning"—and the dialogical character of human [[evaluative-judgement|evaluation]]: "ChatGPT is not like people. You talk to them and explain excuses to consider or give another chance if you fail. People talk and discuss problems and understand each other's problems. … I like normal teacher [to] grade my work." Most pointedly, one student asked: "If ChatGPT [is] checking the exams, why are we going to university? Why not learn from ChatGPT and test ourselves in ChatGPT?" The paper stresses that these are positive arguments for preserving human evaluative authority, not rejections of the technology.

## Implications for assessment design

The study proposes a three-principle framework for integrating GenAI into [[writing-education|writing assessment]]: transparency as the foundation (clear communication about AI involvement), human mediation (instructors retain evaluative authority over AI outputs), and reflective practice (post-assessment reflection that keeps [[student-engagement|engagement]] critical rather than passive). The sequencing matters—reflection was placed after students received their score, not during drafting, which appears to have shifted attention from sentence-level repair to system-level questions of who should evaluate and on what grounds.

For practitioners, the paper's most replicable suggestion is that a two- or three-prompt post-assessment reflection is inexpensive, needs no extra technology, and surfaces reasoning instructors would otherwise never see; it could be embedded in any course using AI feedback tools. The authors also suggest that under [[ai-use-disclosure|disclosure]] conditions, students position AI as a supplementary tool whose outputs warrant human interpretation, implying that [[human-in-the-loop-ai|human oversight]] should be designed in as the point at which AI output becomes a grade rather than treated as an optional courtesy. The framework is offered as a synthesis of observed patterns, not as a tested causal pathway.

## Limits and the evidence base

The study's own limitations section is unusually direct. The analytic sample is 13 of 19 enrolled students—who may be a self-selected subset—from one course section, one semester, one institution, taught by the instructor who also conducted the research. All participants were male undergraduate computing students at a single Saudi public university, restricting transferability to women, to non-computing disciplines, to other institutions, and to other cultural contexts, including settings where student–teacher relationships carry different relational and institutional weight.

Three further constraints bound the claims. Comparing this transparent cohort with the earlier blinded one is confounded by cohort, academic year, and the intervening normalisation of GenAI, so transparency effects cannot be isolated. The conceptual model and the three-principle framework are theoretical syntheses rather than validated causal stages. And the confirmatory second analysis was conducted by an [[llm]], raising the possibility of shared interpretive bias between large language models—though the primary coding and all interpretive decisions were human. The paper's clearest call is for within-subject or experimental designs comparing blinded and transparent evaluation in the same cohort.

## Connected Concepts
- [[feedback]]
- [[feedback-literacy]]
- [[evaluative-judgement]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[trust]]
- [[student-experience]]
- [[ai-use-disclosure]]
- [[writing-education]]
- [[higher-ed]]
- [[cs-education]]
- [[qualitative-research]]
- [[student-ai-interaction]]
- [[agency]]

## Connected Articles
- [[usher-faraon-who-grades-best-2026]] — Who Grades Best? Student and Instructor Perspectives on AI Grading
- [[ai-grading-handwritten-physics-2026]] — AI Grading of Handwritten Physics Work
- [[roe-ai-humanizers-legitimacy-assessment-2026]] — AI Humanizers and the Legitimacy of Assessment
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI-Assisted, Instructor-Supervised Grading and Feedback
- [[ai-internal-feedback-evaluative-judgments]] — AI Internal Feedback and Evaluative Judgments
- [[tubino-adachi-ai-automated-feedback-literacy]] — AI Automated Feedback and Feedback Literacy
- [[trust-reliance-ai-education-2026]] — Trust and Reliance in AI Education
- [[ai-generated-feedback-higher-ed]] — AI-Generated Feedback in Higher Education
- [[student-rationalization-ai-writing]] — Student Rationalization of AI Writing

## Citation
AlGhamdi, R. (2026). [Who Should Grade My Work? Student Perspectives on Transparent AI-Assisted Writing Assessment in Higher Education](https://arxiv.org/abs/2609.05346). arXiv preprint arXiv:2609.05346.
