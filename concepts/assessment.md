---
title: Assessment
created: "2026-08-09T07:47:05-04:00"
updated: "2026-09-03T15:00:00-04:00"
connected_faqs: [redesign-assessment-ai-era, reduce-ai-cheating]
type: concept
tags: [assessment, assessment-validity, formative-assessment, automated-assessment, educational-measurement, ai-ed-evaluation, academic-integrity, generative-ai, higher-ed, learning-analytics]
research_method: [educational measurement]
level: [higher ed]
category: [assessment, evaluation]
confidence: high
---

> **Assessment** — the process of gathering and interpreting evidence about what learners know and can do, and the methods used to evaluate learning. [[ai-education|AI in education]] has fundamentally reshaped assessment: it powers [[automated-assessment|automated grading and scoring]], generates and adapts assessment items, and raises deep questions about what assessments actually measure when students can use AI. Assessment is the umbrella concept that organizes the knowledge base's coverage of [[formative-assessment|formative assessment]], [[automated-assessment|automated grading]], [[assessment-validity|validity]], and [[educational-measurement|educational measurement]].

## Questions to Consider

- Assessment here is defined as gathering and interpreting evidence about what learners know and can do. Before reading, how would you finish the sentence 'an assessment is valid if…' — and what would change about that answer if every student could secretly use AI to produce their work?
- The page claims that how a student uses GenAI (evaluative integration versus uncritical shortcut uptake) predicted performance, while how often they used it predicted nothing. What does this suggest about a common instinct to regulate AI by limiting its use?
- A learner may deliver professional-standard work they cannot reproduce without the tool — severing the inference between performance and underlying ability. Have you encountered a 'competency' being awarded for work that the student couldn't actually do unaided? What did that reveal?
- The constructive question the page offers is not 'how do we stop students using AI?' but 'how do we enable thoughtful use in contexts that mirror their future work?' What would assessment look like in your field if that were the goal?
- The DRIVE framework suggests assessing the quality of a student's [[student-engagement|engagement]] with GenAI — not just the artifact — by looking at whether they steer prompts strategically and integrate their own ideas. What would you look at to tell a deep, reflective [[student-ai-interaction|AI interaction]] from surface consumption?
- AI-mediated assessment is diversifying into oral exams, portfolios, and conversational formats that reduce anxiety and feel professionally relevant. Which assessment format from your own experience do you think is most 'AI-resistant' — and is resistance the same thing as educational value?

## Introduction

Assessment is central to AI in education for two reasons. First, AI itself is used to assess students — grading essays, code, short answers, and exams at scale. Second, AI in the classroom changes what assessments can validly measure, since students may use [[generative-ai|generative AI]] to produce work. The field therefore spans both the *tools* that automate assessment and the *validity and integrity* questions that AI raises.

## How AI is used in assessment

- **Automated assessment:** [[automated-assessment|AI-based assessment]] spans multiple modalities — multiple-choice, short answer, essay, code, and performance-based evaluation — through [[automated-assessment|automated grading]], [[automated-essay-scoring|automated essay scoring]], and [[automated-question-generation|automated question generation]].
- **Formative assessment:** [[formative-assessment|AI systems]] generate, validate, and adapt formative assessment items at scale, informing ongoing instruction rather than only [[summative-assessment|summative]] evaluation.
- **Learning analytics and measurement:** [[learning-analytics]] and [[educational-measurement]] connect assessment data to learning processes, using [[item-response-theory]], [[knowledge-tracing]], and [[student-modeling]] to interpret performance. [[razavi-powers-item-difficulty-llm-2026|Razavi and Powers (2026)]] demonstrate LLM-based item-difficulty estimation as a measurement input: across 5,170 K-5 math and reading items calibrated under the Rasch IRT model, GPT-4o's zero-shot ratings correlated moderately-to-strongly with true difficulties (r = 0.83 math, r = 0.81 reading) but varied by grade, while a feature-based approach (LLM-extracted features into tree-based models) reached correlations up to r = 0.87. The study offers a practical seven-step workflow for testing professionals, while cautioning that generalizability beyond K-5 math and reading is unclear.
- **Feedback loops:** AI assessment increasingly feeds into [[feedback|feedback loops]] that close the cycle from assessment to learning.
- **E-portfolio assessment:** [[eportfolio|e-portfolios]] assemble student work and reflections over time as a process-based, AI-robust assessment form. Generative AI can assist the portfolio *process* — generating feedback, [[scaffolding]] reflection, and (with appropriate rubric design) supporting evaluation — while the portfolio's emphasis on reasoning traces and drafts resists AI fabrication. [[ni-lam-multiliteracies-ai-portfolio-2026|AI-assisted portfolio assessment]] and [[sutama-chatgpt-eportfolio-speaking-2026|ChatGPT + e-portfolio for EFL speaking]] show AI can enhance both the portfolio experience and learner [[feedback-literacy|feedback literacy]].
- **Open-ended grading reliability is model-dependent:** [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko & Drlik (2025)]] benchmarked eleven GenAI and sentence-embedding models against two expert graders on 1,885 open-ended software-engineering responses: only GPTo1 reached almost-perfect agreement (Fleiss' Kappa 0.82), while reference-based models penalized correct-but-divergently-phrased answers. Because GPTo1 was the only model deemed deployable without oversight but carries proprietary API costs, the authors recommend hybrid strategies pairing advanced models with affordable options or [[human-in-the-loop-ai|human oversight]] in resource-constrained settings. A PRISMA-guided [[meta-analysis-systematic-review|systematic review]] of 42 empirical studies (2023–2025) corroborates this conditional-reliability picture across the whole grading field: LLMs match human raters on closed-ended and short-answer tasks but cannot fully replace human judgment on complex, open-ended, or subjective work, and no uniform grading bias emerged — models were sometimes more lenient, sometimes stricter, and often avoided extreme scores ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). Iterative rubric refinement can push LLM open-ended scoring toward near-human reliability in high-stakes [[medical-education|medical]] settings: [[olvet-genai-scoring-open-ended-medical-2026|Olvet et al. (2026)]] found that once faculty repeatedly revised analytic and holistic rubrics on error-pattern analysis, GPT-4 reached substantial-to-almost-perfect agreement with faculty graders on three of four pre-clerkship questions (weighted kappa up to 0.94), while the residual holistic-rubric item stayed at only moderate agreement (κw = 0.54) — showing both the payoff of human-in-the-loop rubric engineering and its limits on synthetic, holistic tasks.

## Validity and measurement challenges

AI raises fundamental [[assessment-validity|validity]] questions: do AI-graded assessments measure student learning or [[prompt-engineering|AI-prompting skill]]? Does student use of AI invalidate traditional assessments? Key challenges include:

- **Construct validity:** [[competency-based-education-genai-production-2026|Research on competency-based education]] shows generative AI has severed the inference between performance and underlying ability — a learner may deliver professional-standard work they cannot reproduce without the tool. This motivates reconceptualising what competencies are assessed.
- **Coauthorship and integrity:** [[coauthorship-integrity-reconceptualising-assessment-validity-for-the-age-of-gene|Coauthorship integrity]] proposes a new source of validity evidence violated when students submit AI-generated content they do not understand, and explores conversational "AI Vivas" as a response.
- **Psychometric quality:** [[psychometrically-aware-ai|psychometrically aware AI]] and [[automated-assessment|confidence-aware assessment]] work to keep AI scoring reliable, unbiased, and interpretable.
- **Evaluation of AI assessors:** [[ai-ed-evaluation|AI ed evaluation]] provides the methods and [[benchmark|benchmarks]] for determining whether automated assessors actually work — on reliability, [[pedagogy]], and [[equity-in-ai-education|equity]] — rather than headline accuracy alone.
- **Quality-dependent reliability of AI and peer grading (2026):** Comparing ChatGPT, peer, and instructor grading of the same undergraduate group projects, [[usher-faraon-who-grades-best-2026|Usher & Faraon (2026)]] showed grading alignment with the instructor is *conditional on the quality of student work*: ChatGPT inflated low-quality submissions most and aligned better with the instructor on high-quality work, while peers aligned best on weaker work and under-graded strong projects. The finding challenges the binary "reliable vs unreliable" framing, pointing toward conditional-reliability models in which alternative assessors are matched to task and performance level.
- **Human grading is itself value-laden (2026):** [[luo-dawson-value-judgements-grading-2026|Luo & Dawson (2026)]] show that even human grading of GenAI-assisted work is not a neutral, criteria-based act. Scenario-based interviews with 33 university teachers revealed grading decisions driven by person-oriented (honesty, diligence), capability-oriented (independence, GenAI skill, disciplinary mastery), relation-oriented (trust), and justice-oriented (fairness, beneficence) values — extending beyond the assignment to teachers' conjecture about the student. The study reframes the assessment question from "is GenAI use cheating?" to "how do teachers' value judgements shape grades, and are those values relevant to the outcomes being assessed?" — foregrounding [[assessment-validity|validity]] and "two-way transparency" about how GenAI use will affect grades.

## Integrity and the debate over detection

AI in assessment has intensified the [[academic-integrity|integrity]] conversation. One strand focuses on [[ai-detection|detecting AI-generated text]], while a growing body of [[research-methods-aied|research]] argues that detection is a limited, situational tool — not a strategy of first resort. [[beyond-detection-authentic-assessment-ai-2025|Beyond Detection]] and [[responsible-assessment-ai-era-stanford-2026|Responsible Assessment]] argue that authenticity cannot be policed into existence; it must be redesigned, positioning AI as a declared collaborator and prioritizing [[authentic-assessment|authentic, process-based assessment]] over surveillance. **[[walton-bearman-assessment-judgement-2025|Walton et al. (2025)]]** ground this in evidence of **how students actually judge** their way through assessment with GenAI: scroll-back interviews with 26 students revealed a spectrum of six judgement events — from critically evaluating AI knowledge and learning through AI's limitations, to adopting ideas uncritically and misjudging AI contributions as their own. **[[stamatoulis-genai-use-patterns-2026|Stamatoulis et al. (2026)]]** add a [[quantitative-research|quantitative]] counterpart: across 157 students, *how* GenAI is used (evaluative integration to support understanding vs. low-verification shortcut uptake) predicted performance, while simple usage **frequency predicted neither** performance nor academic [[self-efficacy]]. Together these studies reframe the assessment question from *whether* students use AI to *how they judge and pattern that use*.

## Assessment redesign in the AI era

The constructive question in the knowledge base's assessment literature is not "how do we prevent students from using AI?" but "how do we enable them to use it thoughtfully in contexts that mirror their future work?" This reframes assessment around:

- **Authentic and process-based tasks** that make AI use visible and assessed. [[authentic-assessment|Authentic assessment]] — examining student performance on worthy, realistic tasks — is the leading response to AI's challenge: any task an [[llm]] can credibly simulate loses its validity, so authenticity must be redesigned around real-time collaboration, digital and social contribution, and individual meaning-making. This connects to [[zhan-boud-du-authentic-assessment-scoping-review-2025|design frameworks for authentic assessment]], [[authentic-products-authenticated-processes-2026|authentic products and authenticated processes]], and [[tool-invariant-framework-agentic-ai|tool-invariant assessment of process]].
- **Responsible assessment design** grounded in validity evidence ([[responsible-assessment-ai-era-stanford-2026]])
- **Coauthorship and declaration** as part of the assessment contract
- **Production as a competency** — evaluating learners' ability to direct tools and produce professional-standard work ([[competency-based-education-genai-production-2026]])
- **Assessing the interaction process, not just the artifact** — the [[assessing-student-drive-framework-2025|DRIVE framework]] (Directive Reasoning Interaction + Visible Expertise) treats the quality of a student's *engagement with GenAI* as the assessed construct. It distinguishes surface consumption from deep, reflective interaction by looking at whether students steer prompts strategically (DRI) and integrate and develop their own disciplinary ideas through the exchange (VE), grounding process-focused criteria in theories of [[self-directed-learning|self-directed learning]] and cognitive engagement along the lines of the [[icap-framework|ICAP]] hierarchy. This makes DRIVE an example of *AI-mediated authentic assessment* — a rubric for evaluating how learners partner with GenAI rather than a detection tool.

## Implications for AI in education

- **Assessment and learning are inseparable:** good AI assessment should support learning ([[feedback|formative feedback]]) as much as it evaluates it.
- **Validity must be reconceptualised:** when AI can produce student work, assessments must measure processes, judgment, and authentic production, not just outputs.
- **Automation must be evaluated rigorously:** automated assessors need psychometric and [[bias-mitigation|fairness]] evaluation, not just accuracy claims.
- **Integrity shifts from detection to design:** the most robust response to AI in assessment is designing tasks where AI use is expected, declared, and scrutinised.
- **Innovative practices can address multiple problems at once.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]] argue that a set of five mutually reinforcing practices — [[authentic-assessment|authentic assessment]], self- and peer-assessment, reassessment, [[mastery-learning|standards-based grading]], and ungrading — aligned with the "assessment for learning" paradigm can counter the harms of traditional, summative-heavy, norm-referenced grading (superficial learning, eroded intrinsic motivation, stress and anxiety, inequity, and compromised [[academic-integrity|integrity]]) in the generative AI era. They find uptake is uneven across fields — self- and peer-assessment dominate while the grading-focused innovations remain marginal — and urge educators to engage more actively and reciprocally with assessment and grading innovation, backed by incremental experimentation and institutional support.

- **AI-mediated assessment is diversifying.** [[aivaluate-anxiety-assessment-2026|AIvaluate]] shows an LLM-augmented [[conversational-ai|conversational agent]] reduced student anxiety during performance-based assessments; [[asynchronous-oral-assessment-2026|Pentland (2026)]] finds asynchronous oral assessments offered higher engagement and were perceived as professionally relevant; [[graph-its-adaptive-algorithms-2026|graph-based ITS]] uses adaptive knowledge-state tracking to inform assessment.
## Connected Concepts
- [[pedagogical-partnerships]] — Pedagogical Partnerships
- [[formative-assessment]] — Formative assessment: AI-generated, validated, adaptive items at scale
- [[automated-assessment]] — Automated grading and scoring across assessment modalities
- [[authentic-assessment]] — Process-based, AI-robust authentic tasks
- [[assessment-validity]] — Validity of assessments under generative AI
- [[educational-measurement]] — Measurement theory underpinning AI assessment
- [[automated-essay-scoring]] — Automated essay scoring
- [[automated-question-generation]] — Automated question generation
- [[summative-assessment]] — Summative assessment: AI-resistant formats (oral, proctored, closed-book exams)
- [[item-response-theory]] — IRT for interpreting AI-era assessment responses
- [[psychometrically-aware-ai]] — Psychometrically aware AI scoring
- [[learning-analytics]] — Analytics connecting assessment data to learning
- [[feedback]] — Feedback loops closing the assessment-to-learning cycle
- [[feedback-literacy]] — Learner feedback literacy
- [[academic-integrity]] — Integrity and the debate over AI detection
- [[ai-detection]] — Detecting AI-generated text
- [[ai-ed-evaluation]] — Methods and benchmarks for evaluating automated assessors
- [[eportfolio]] — Process-based e-portfolio assessment

## Connected Articles
- [[llm-comparative-judgment-writing-screening-2026]] — Validity of Large Language Model Comparative Judgment for Universal Writing Screening
- [[student-attention-estimation-fairness-2026]] — Fairness-Aware Multimodal Transformer Modeling for Real-Time Student Attention Estimation
- [[usher-faraon-who-grades-best-2026]] — Comparing ChatGPT, peer, and instructor grading across project quality levels (Usher & Faraon 2026)
- [[biology-grade-vulnerability-genai-2026]] — Vulnerability of biology course grades to AI-mediated dishonesty (Chan et al. 2026)
- [[semantic-variability-llm-conversation-assessment-2026]]
- [[evaluation-age-ai-output-evidence-2026]] — Evaluation in the Age of AI
- [[causal-modelling-competency-assessment-2026]] — Causal Modelling of Support Interventions for Student Competency Assessment
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible assessment in the AI era
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond detection: authentic assessment
- [[coauthorship-integrity-reconceptualising-assessment-validity-for-the-age-of-gene]] — Coauthorship integrity and assessment validity
- [[competency-based-education-genai-production-2026]] — Competency-based education after generative AI
- [[genai-assessment-governance]] — Evidence-centered governance of generative AI in assessment
- [[llm-difficulty-calibration-programming-exams-2026]] — LLM-based difficulty calibration for programming exams
- [[ai-literacy-assessment-misalignment]] — AI literacy and assessment misalignment
- [[hybrid-e-assessment-semi-automated-grading]] — Hybrid e-assessment and semi-automated grading
- [[cotal-formative-assessment-scoring-2026]] — Formative assessment scoring
- [[cong-confidence-asag-2026]] — Automatic short-answer grading
- [[ai-assessment-scale-reform]] — AI assessment scale reform
- [[ithaka-sr-ai-skills-college-graduates-2026]] — Lack of shared AI-skills assessment frameworks in higher education
- [[ssaho-ai-academic-integrity-review-2025]] — AI integrity review: detection must pair with assessment redesign
- [[young-people-learning-generative-ai-rapid-review-2026]] — Evaluate learning beyond immediate GenAI-supported performance
- [[generative-ai-reduced-study-time-math]] — Proctored, unassisted measures essential; non-proctored inflated by AI
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsidering oral exams as authentic, AI-resistant assessment
- [[shap-llm-rationales-teaching-quality-assessment]] — SHAP and LLM rationales for rubric-based assessment
- [[end-of-assessment-ai-disruption-transformation-2026]] — End of assessment: AI disruption and transformation of assessment
- [[can-ai-evaluate-assessment-llm-meta-assessment-2026]] — Can AI evaluate assessment? LLM meta-assessment
- [[bassett-ai-detectors-education-2026]] — Heads we win, tails you lose: AI detectors in education (Bassett et al. 2026)
- [[aivaluate-anxiety-assessment-2026]] — AIvaluate: LLM-Augmented Assessment of Student Anxiety (2026)
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[asynchronous-oral-assessment-2026]] — Asynchronous Oral Assessments in the AI Era (Pentland 2026)
- [[harmogen-ai-assessment-rubric-generation]] — HARMOGEN-R: AI assessment rubric generation
- [[irt-human-genai-mcq-responses]] — Using IRT to separate human and GenAI MCQ responses
- [[assessing-student-drive-framework-2025]] — DRIVE: assessing learning through GenAI interaction (DRI + Visible Expertise)
- [[ai-writes-code-student-writes-model-2026]] — Model authorship: theory & measurement for learning-by-construction with GenAI
- [[code-to-learn-genai-artifact-construction-2026]] — CtL-GenAI: constructionism framework for artifact construction
- [[dollinger-equitable-assessment-ai-2026]] — Equitable assessment design with AI
- [[nicola-richmond-programwide-assessment-genai-2025]] — Program-wide assessment redesign for generative AI
- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[chatgpt-qiskit-homework-autogradable-2026]] — ChatGPT solves Qiskit homework; autogradable design
- [[credentials-carry-evidence-ai-agents-2026]] — Credentials that carry their evidence for AI-agent work
- [[astor-computational-thinking-meta-review-2026]] — Assessment as one of five dominant CT themes
- [[xiong-ai-educational-measurement-review-2026]] — AI reshaping assessment practice

- [[walton-bearman-assessment-judgement-2025]] — Judgement in students' work with GenAI on assessment tasks (26 students, scroll-back)

- [[stamatoulis-genai-use-patterns-2026]] — Patterns of GenAI use (evaluative integration vs low-verification uptake) and outcomes

- [[luo-dawson-value-judgements-grading-2026]] — Value judgements in grading GenAI-assisted work: honesty, trust, validity, and two-way transparency (Luo & Dawson 2026)
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
