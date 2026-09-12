---
title: Assessment Validity
created: "2026-08-09T10:44:35-04:00"
updated: "2026-09-12T11:20:00-04:00"
connected_faqs: [redesign-assessment-ai-era]
type: concept
tags: [authentic-assessment, automated-assessment, formative-assessment, academic-integrity, rct, bias-mitigation, equity-in-ai-education]
research_method: [randomized controlled trial]

confidence: high
---

> **Assessment validity** — whether assessments measure what they claim to measure. [[ai-education|AI in education]] raises fundamental validity questions: do [[automated-assessment|AI-graded]] assessments assess student learning or [[prompt-engineering|AI prompting skill]]? Does AI use invalidate traditional assessment assumptions?

## Questions to Consider

- Validity asks whether an assessment measures what it claims to measure. Before reading, if you saw a student submit a polished essay you suspected was AI-assisted, would you think the bigger problem was cheating, or that the task was no longer measuring what you thought it was measuring?
- This page poses a sharp question: when students use AI, does the score reflect student knowledge or AI-prompting skill? Can you think of an assessment you've designed or taken where the score might now be telling you more about the tool than about the learner?
- A key finding is that the same learner input can receive semantically different replies depending on which underlying LLM is used — introducing 'construct-irrelevant variance' that threatens reliability and [[bias-mitigation|fairness]]. If two students get different AI support purely because of the model behind it, how fair is the resulting comparison?
- The page argues that even when an LLM scores well, transferring human score interpretations requires similarity in the latent structure of responses — and LLMs diverge from humans here. What does this suggest about trusting an AI that 'passes' an exam designed for humans?
- Rather than trying to detect AI use, the knowledge base argues for redesigning assessments so they stay valid for AI-capable students. Why might redesigning the task be a more validity-preserving strategy than policing whether AI was used?
- AI now serves as test-taker, test-maker, rater, and analyst — making the interpretive chain opaque. When every role in an assessment is filled by AI, what does it even mean to say an assessment is 'valid' for the human learner in the middle of it?

## Introduction

### Validity challenges

- **Construct validity:** When students use AI on assessments, does the score reflect student knowledge or AI capability? [[genai-performance-vs-learning|Performance vs. learning]] [[research-methods-aied|research]] addresses this directly.
- **Cross-LLM construct-irrelevant variance in conversation-based assessment:** [[semantic-variability-llm-conversation-assessment-2026|Hao (2026)]] shows that even for a single conversational turn, the semantic content of [[llm|LLM]]-generated replies varies across models and conversational-context conditions. Within-model similarity consistently exceeds between-model similarity (0.715–0.795 vs. 0.443–0.604), and adding chat history meaningfully changes response content (median cross-history similarity ~0.40–0.45). Because the same learner input can receive semantically different replies depending on the underlying model, prompting and context alone cannot preserve response consistency — introducing potential **construct-irrelevant variance** that threatens validity, reliability, and fairness. Maintaining consistent assessment conditions as LLMs evolve is therefore an *infrastructure* challenge (symbolic rules, response templates, validation layers), not merely a [[prompt-engineering]] one.
- **Latent-structure validity across humans and LLMs:** [[assessment-latent-structure-human-llm-2026|Strugatski et al. (2026)]] add a deeper validity condition: even when an LLM scores well, transferring human score interpretations requires similarity in the *latent structure* of responses. Comparing six [[multimodal]] LLMs to human cohorts on [[chemistry-education|chemistry]] and [[quantitative-research|quantitative]]-reasoning instruments, they find LLM–human factor structures consistently diverge (LLM–human congruence below the human–human baseline), so performance on a human-normed exam is weak evidence about LLM abilities on the constructs the items were designed to measure.
- **Consequential validity:** Do AI-mediated assessments have fair consequences? [[ai-scoring-language-bias-physics|Language bias studies]] show that AI scoring can disadvantage non-native speakers.
- **Agentic completion removes the human-production assumption:** [[ai-agents-complete-lms-assessment-validity-2026|Hadjisolomou & El-Haddad (2026)]] extend the validity analysis from generative *assistance* to agentic *completion*: autonomous [[agentic-ai|AI agents]] can now log into an LMS, read materials, and complete unproctored asynchronous work end-to-end (demonstrated on a live course — a quiz scored 10/10 in under 5 minutes, and a fabricated-but-credible discussion-board reflection). Placing a "human-production assumption" at the base of Kane's argument-based inference chain, they show agent completion silently removes the backing for the *scoring* inference on which generalization, extrapolation, and decision inferences all rest — so every unproctored asynchronous score, including honestly earned ones, loses its interpretive support because authorship is unverifiable. Their decisive move is classifying this as a **validity failure rather than an integrity one**: an institution can punish misconduct and still lack grounds for the scores it reports. Detection is structurally insufficient (classifiers unreliable and biased; LMS monitoring sees the same clicks a student would), so the remedy is assessment redesign for verified human presence (a short oral component, process-visible drafts, class-session-specific references), with an equity-preserving menu of options rather than a proctoring mandate.
- **Construct-irrelevant variance in human grading of [[generative-ai|GenAI]]-assisted work:** [[luo-dawson-value-judgements-grading-2026|Luo & Dawson (2026)]] provide a direct empirical demonstration that human grading of GenAI-assisted work is shot through with construct-irrelevant variance. In scenario-based interviews with 33 university teachers, grading decisions were driven by person-oriented (student honesty, diligence), capability-oriented (independence from AI, GenAI skill, disciplinary mastery), relation-oriented (trust built with students), and justice-oriented (fairness, beneficence) values — all of which can vary grades on factors unrelated to the outcomes being assessed. Marking down GenAI-assisted work is justified, they argue, *if and only if* the AI use prevented students from demonstrating the assessed outcomes; otherwise value-driven grading threatens validity. The study grounds the validity framing in real teacher practice and calls for "two-way [[explainable-ai|transparency]]" — teachers clarifying how GenAI use will affect grades, not just students declaring use.
- **AI-driven grade inflation as a validity threat:**not just students declaring use.
- **Variation-at-scale demands construct-equivalent variant generation:** [[varia-construct-equivalent-assessment-variant-generation-2026|VARIA (Lee 2026)]] subjects the "variation-at-scale" premise of AI-Integrated Authentic Assessment (AIAA) — replacing surveillance [[academic-integrity|proctoring]] with per-student task variation — to an empirical, falsifiable check. Because each examinee receives a unique-but-equivalent performance task, the integrity guarantee is conditional on LLMs generating variants that are simultaneously surface-distinct, [[authentic-assessment|construct-equivalent]], rubric-applicable, and difficulty-matched. Benchmarking three frontier model families across four prompting strategies on 600 variants, VARIA finds frontier generators satisfy the joint integrity criteria only at the margin (joint score 0.81–0.88) while non-frontier references collapse (0.50–0.55), and no single prompting strategy dominates all four properties — so "variation-at-scale cannot be solved by prompting alone" if the diversity threshold is set aggressively, and institutions must validate their specific model-prompt pair.
- **Under-grading bias in HITL AI scoring is a validity feature, not a bug:** [[human-in-the-loop-ai-scoring-national-assessment-2026|Curi et al. (2026)]] show that in a large-scale national writing assessment the systematic conservative (under-grading) bias of an LLM scorer, while problematic as a final decision, is precisely what enables safe delegation: AI-marked "passing" responses can be accepted with confidence while AI-marked "failing" responses (15.3–16.5% of cases) are routed to expert review — keeping the validity threat of AI error off the final outcome. Their [[item-response-theory|IRT]]-and-Bookmark pipeline makes the [[educational-measurement|proficiency-level]] impact of AI scoring legible rather than treating raw score agreement as the sole validity signal.
- **AI-driven grade inflation as a validity threat:** [[chirikov-ai-grade-inflation-2026|Chirikov (2026)]] identifies a novel, technology-driven mechanism of [[summative-assessment|grade]] inflation operating *upstream of grading* — on the production of graded work. In a difference-in-differences study of 500,000+ grades across 319 courses (2018–2025), courses with more AI-exposed tasks (writing, coding) saw the share of A grades rise by 13 percentage points after ChatGPT's release, with grade-distribution compression. A triple-differences analysis shows the effect concentrates in homework-heavy courses — evidence that AI **task displacement** (AI performing graded tasks before instructors observe them) inflates grades without a corresponding rise in skill. This reduces the comparability of grades across courses and erodes the informational value of transcripts in ways difficult to detect from grade distributions alone.
- **Accuracy vs. agreement as distinct validity signals:** [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat, Das, Bhaumik & Thambi (2026)]] graded a 21-item pharmacy exam with ChatGPT-5 and found that moderate percent accuracy frequently coexisted with low concordance-correlation coefficients — a methodological distinction between *scoring accuracy* and *agreement* that limits AI's reliability as a grading substitute even where raw accuracy looks acceptable. Agreement was strong on objective items (CCC 0.935–1.000) but near-zero on short-answer and modest on essay (0.341–0.854), and rubric provision did not consistently close the gap.
- **Validity of AI-generated items:** [[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]] shows that AI-generated questions, validated via Bayesian [[item-response-theory|IRT]], achieve difficulty and discrimination on par with expert-written standardized-exam items (reliability 0.79 vs. 0.72) — supporting the validity of course-tailored AI-generated assessments when backed by psychometric evaluation.
- **Authentic assessment:** [[authentic-assessment]] and [[ai-assessment-scale-reform|the AI Assessment Scale]] propose validity-preserving assessment redesigns.
- **Confidence and calibration:** [[automated-assessment|Confidence-aware systems]] improve validity by flagging uncertain assessments.
- **[[embodied-learning|Embodied]] and multimodal evidence:** speech-only assessment can mistake verbal fluency for conceptual knowledge; [[multimodal-embodied-cognition-oral-explanations-2026|Morphew et al.]] show that computer-vision gesture analysis coupled with LLM speech analysis increases construct validity and [[equity-in-ai-education|equity]] by capturing understanding expressed through gesture, not just words — reducing bias against learners who express understanding non-verbally.
- **Homework stops certifying capability when a model can solve the task:** [[ai-particle-physics-education-redesign-2026|Mikhasenko et al. (2026)]] document a concrete invalidation of homework as a capability measure in a Bochum particle-[[physics-education|physics]] course: once a [[generative-ai|generative model]] can produce a correct solution, a submitted derivation no longer establishes that the student can solve the problem independently. Their response separates the two functions — research-shaped, AI-permitted homework kept as exploratory, bonus-bearing work, and a tools-free written examination made the sole determinant of the final grade — a validity-driven division of labour rather than a detection regime.
- **Decision-oriented validity for AI scoring at scale:** [[human-in-the-loop-ai-scoring-national-assessment-2026|Curi et al. (2026)]] illustrate a decision-oriented view of validity in the Acredita EB national writing assessment: rather than asking only whether [[automated-assessment|AI scores]] agree with humans, they ask whether AI errors can change a certification decision. Automated [[item-response-theory|IRT/Bookmark]] cut scores closely reproduced the operational cut scores, and systematic AI under-grading was neutralised by routing failing AI results to [[human-in-the-loop-ai|human review]] — notably against a reference standard that is itself contested, since ten expert raters scoring the same 50 texts never reached unanimity on any rubric item.
- **Student-side validity concerns about AI as grader:** [[student-perspectives-ai-writing-grading-2026|AlGhamdi (2026)]] adds the learner's voice to the validity question: 13 computing students whose handwritten writing task was scored by ChatGPT questioned whether an AI scorer can validly interpret intent, effort and institutional grading norms — one asking pointedly, "If ChatGPT [is] checking the exams, why are we going to university?"

### Redesign over detection

The knowledge base argues that maintaining assessment validity requires redesigning assessments for AI-capable students, not [[ai-detection|detecting AI use]]. A parallel validity problem runs through research measurement: many AI-in-education claims rest on [[self-report-measures|self-report data]], which cannot support an inference about learning or competence however well the instrument itself is validated. [[beyond-detection-authentic-assessment-ai-2025|Beyond detection approaches]] and [[assessment]] represent validity-forward thinking.

**Take-home products and the [[qualitative-research|qualitative]]/quantitative split.** [[brunnstrom-ai-interaction-literacy-srl-2026|Brunnström and Palmqvist (2026)]] give the redesign argument a specific proposal grounded in the SOLO taxonomy. Working through a cognitive-science take-home exam question with a [[conversational-ai|chatbot]], they find GenAI is strongest exactly where the taxonomy is lowest — producing comprehensive, fluent, factoid-type content at the *quantitative* (multistructural) level — while the *qualitative* level (relating, evaluating, generalising) emerged only through repeated learner-driven calibration. Their recommendation is therefore differentiated by construct: take-home assessments should emphasise evidence of qualitative understanding, while quantitative recall-based knowledge is better assessed in class where GenAI is unavailable. The demonstration also underlines that a polished submitted artefact is weak evidence in either direction, and that valid redesign must account for how demanding legitimate AI-supported learning turns out to be ([[summative-assessment]], [[academic-integrity]]).

### Connections

Assessment validity connects to [[authentic-assessment]], [[automated-assessment|Automated Grading]], [[automated-assessment|Confidence Aware AI Assessment]], [[formative-assessment]], [[academic-integrity]], and [[rct]] (which relies on valid outcome measures).

AI challenges validity at the epistemic level: [[end-of-assessment-ai-disruption-transformation-2026|Hathcoat, Slotnick & Miller (2026)]] argue that when LLMs serve as test-takers, test-makers, raters, and analysts, the interpretive chain becomes opaque and the object of measurement loses definition — reframing validity as requiring AI-fluent "cyborg" judgment, and [[can-ai-evaluate-assessment-llm-meta-assessment-2026|Green et al. (2026)]] show AI scores can align with human raters (87% checklist) while the underlying rationale diverges, especially on measurement quality and weak reports.

**When AI generates the assessable artefact.** [[kumar-genai-computing-education-systematic-review-2026|Kumar, Wongsirichot and Nanthaamornphong (2026)]] give the validity problem its sharpest disciplinary case: in computing education the AI produces the artefact being graded — the source code — so tool use, learning and assessment fuse into a single interaction, and a submitted codebase no longer separates learning from delegation. Across 72 studies they find efficiency gains that do not transfer to unaided performance (21 studies), [[prior-knowledge|prior knowledge]] moderating whether AI help becomes skill (6 studies), and detection research effectively absent from the evidence base (3 studies) while assessment redesign is comparatively well evidenced (25 studies). Their conclusion for practice is construct-specific and low-tech: add an oral component or other process-visible element to at least one high-stakes assessment per course — the single highest-leverage intervention in the review — and require critical [[student-engagement|engagement]] with AI output as a graded, observable component rather than an optional disposition ([[academic-integrity]], [[assessment]]).

## Validity under imperfect information

The sharpest recent reframing treats the generative AI problem as an evidentiary one. The student knows how a piece of work was produced; the institution observes the artefact and, at best, partial traces of the process — a product–process gap that [[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed and Temimi (2026)]] formalise as assessment validity under imperfect information. On this account the question is not whether a rule was broken but whether the assessment still generates credible evidence of student reasoning, effort, and judgement, and each [[governance|institutional]] mechanism — prohibition, monitoring, disclosure, redesign — is evaluated by which student response it makes most attractive. The validity lens also dissolves a false separation: integrity and validity are the same problem seen from different ends, because a finding of misconduct is itself a validity claim about what the work evidences.

[[teichmann-detecting-undetectable-misconduct-2026|Teichmann (2026)]] draws the procedural consequence: where prohibited use cannot be detected, a regime that still accuses on detector scores cannot warrant the inference it draws, and so produces unfairness without effectiveness. He argues for replacing the forensic question — did the student use AI? — with a validity question — did the student demonstrate the capability the task was designed to certify? — which relocates institutional effort into programme-level assessment across linked tasks, oral and supervised elements at certification points, and [[evaluative-judgement|evaluative judgement]] as an explicit object of assessment.

## Connected Concepts

- [[authentic-assessment]]
- [[automated-assessment]]
- [[formative-assessment]]
- [[academic-integrity]]
- [[rct]]
- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[llm]]
- [[feedback]]
- [[self-report-measures]]

## Connected Articles
- [[kumar-genai-computing-education-systematic-review-2026]] — When AI generates the graded artefact: computing education's validity problem and redesign evidence
- [[brunnstrom-ai-interaction-literacy-srl-2026]] — Take-home exams: assess the qualitative phase, move recall in-class (Brunnström & Palmqvist 2026)
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — HITL AI-assisted scoring in a large-scale national writing assessment (Curi et al. 2026)
- [[varia-construct-equivalent-assessment-variant-generation-2026]] — Construct-equivalent assessment variant generation (Lee 2026)
- [[llm-comparative-judgment-writing-screening-2026]] — Validity of Large Language Model Comparative Judgment for Universal Writing Screening
- [[gpt-item-generation-l2-listening-2026]] — Prompting vs. fine-tuning for GPT-based L2 listening item generation (Aryadoust & Wong 2026)
- [[item-writing-flaws-irt-difficulty-2026]] — Impact of item-writing flaws on IRT difficulty and discrimination (Schmucker & Moore 2026)
- [[biology-grade-vulnerability-genai-2026]] — Vulnerability of biology course grades to AI-mediated dishonesty (Chan et al. 2026)
- [[chirikov-ai-grade-inflation-2026]] — AI task displacement as a mechanism of grade inflation (Chirikov 2026)
- [[ai-agents-complete-lms-assessment-validity-2026]] — AI agents completing LMS tasks; human-production assumption & agentic validity (Hadjisolomou & El-Haddad 2026)
- [[semantic-variability-llm-conversation-assessment-2026]]
- [[coauthorship-integrity-reconceptualising-assessment-validity-for-the-age-of-gene]]
- [[assessment-latent-structure-human-llm-2026]] — Do assessment instruments measure the same thing for humans and LLMs? (Strugatski et al. 2026)
- [[multimodal-embodied-cognition-oral-explanations-2026]] — A Multimodal Framework for Embodied Cognition in Oral Explanations
- [[prompt-privilege-equitable-ai-access-2026]] — Prompt Privilege: measuring & mitigating accessibility disparities in LLM access
- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the quality of AI-generated exams: a large-scale field study
- [[melo-llm-classroom-observation-teach-2026]] — Validating LLM-based classroom observation against expert ratings (Melo et al. 2026)
- [[competency-based-education-genai-production-2026]]

- [[genai-performance-vs-learning]]
- [[ai-scoring-language-bias-physics]]
- [[ai-assessment-scale-reform]]
- [[beyond-detection-authentic-assessment-ai-2025]]
- [[confidence-aware-student-drawing-assessment]]
- [[cong-confidence-asag-2026]]

- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24: Benchmarking Multimodal LLMs for Slide Auditing
- [[end-of-assessment-ai-disruption-transformation-2026]]
- [[can-ai-evaluate-assessment-llm-meta-assessment-2026]]

- [[zhang-ct-ai-training-test-2026]] — Computational Thinking in AI Training Test (CTAT)
- [[roe-assessment-twins-2026]] — Assessment twins for strengthening assessment validity in the age of GenAI (Roe, Perkins & Giray 2026)
- [[lodge-adaptive-capabilities-genai-future-2026]] — Adaptive capabilities for assuring quality learning in a gen AI-integrated future (Lodge et al. 2026)
- [[bassett-ai-detectors-education-2026]] — Heads we win, tails you lose: AI detectors in education (Bassett et al. 2026)
- [[asynchronous-oral-assessment-2026]] — Asynchronous Oral Assessments in the AI Era (Pentland 2026)

- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[xiong-ai-educational-measurement-review-2026]] — Construct validity as a central challenge

- [[questionnaire-teachers-genai-uses-validation-2026]] — Questionnaire on teachers' uses of generative AI (Pérez-Montesdeoca et al. 2026)
- [[luo-dawson-value-judgements-grading-2026]] — Value judgements in grading GenAI-assisted work: honesty, trust, validity, and two-way transparency (Luo & Dawson 2026)
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[teichmann-detecting-undetectable-misconduct-2026]] — The misconduct procedure as a validity problem
- [[mohamed-temimi-assessment-imperfect-information-disclosure-2026]] — Assessment validity under imperfect information: a response-region model
- [[ai-particle-physics-education-redesign-2026]] — AI in Particle Physics Education: Research Problems and Foundational Skills
- [[student-perspectives-ai-writing-grading-2026]] — Who Should Grade My Work? Student Perspectives on Transparent AI-Assisted Writing Assessment in Higher Education
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment
