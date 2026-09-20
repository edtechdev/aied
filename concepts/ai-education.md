---
title: "AI in Education"
created: "2026-08-09T10:44:35-04:00"
updated: "2026-09-19T21:07:40-04:00"
type: concept
foundations: [ai-education, ai-literacy, teacher-role]
technology: [generative-ai, intelligent-tutoring, llm]
assessment: [assessment]
ethics: [equity-in-ai-education]
audience: [instructors, learners, faculty development, administrators]
level: [higher ed, k 12]
connected_faqs: [top-10-findings-ai-education-instructors]

confidence: high
institutions: [educational-policy-ai]
---

> **AI in Education (AIED)** — the broad, interdisciplinary field that applies artificial intelligence to teaching and learning, and studies its design, use, evaluation, and consequences. As the knowledge base's umbrella concept, AI in education encompasses **AI for education** (using AI to improve instruction and assessment) and **education about AI** (developing AI literacy and critical understanding). It sits at the intersection of instructional technology, the [[learning-sciences|learning sciences]] — the empirical research field that asks whether a learner changed rather than only whether a tool performed — computer science, [[educational-policy-ai|educational policy]], [[ethics]], and [[equity-in-ai-education|equity]]. This page is an introduction to the field and a map to every concept the knowledge base covers.

## Questions to Consider

- 'AI in education' spans two directions: AI for education (using AI to improve teaching) and education about AI (building literacy and critical understanding). Which is more familiar to you, and which do you tend to overlook?
- The field's history is framed as a recurring tension between control and learner agency. As you watch AI tools being adopted, where do you notice that same tension playing out today?
- AI in education sits at the intersection of technology, learning science, policy, ethics, and equity. Which of those lenses do you naturally apply when evaluating an AI tool — and which are you likely to forget?
- This knowledge base organizes the field into strands: pedagogy, learning theories, technologies, disciplines, assessment, feedback, stakeholders, and governance. If you were mapping your own use of AI, which strand would you find yourself in?
- AIED includes teaching students to use AI critically as a goal in itself. In your context, is AI treated more as a subject to be taught or a tool to be used — and does that balance reflect what learners actually need?
- Students may learn AI literacy by using AI critically, not just by learning about AI. How might hands-on, critical use build understanding that passive instruction cannot?

## Introduction

AI in education is the umbrella that all other concept pages collectively define. The knowledge base organizes the field into the major strands below, each linking to the relevant concept pages.

A landmark [[history-of-aied|historical]] perspective, **[[mishra-control-vs-agency-history-2025|Mishra et al.]]** trace AIED from cybernetics and the 1956 Dartmouth conference through [[intelligent-tutoring|cognitive tutors]] and Papert's [[constructivist|constructionism]], arguing that today's [[generative-ai|GenAI]] debates re-enact the field's foundational control-vs-[[agency]] tension.

## How the knowledge base is organized: the umbrella pages

The knowledge base's concept coverage is anchored by several **umbrella pages** that group related concepts into navigable strands. These are good entry points for exploring the field:

- **AI in Education** — this page, the field's overview and map to all coverage.
- **[[ai-literacy|AI literacy]]** — the umbrella for understanding, using, and critically evaluating AI, spanning [[prompt-engineering|prompt engineering]], [[critical-thinking|critical thinking]], [[ethics|AI ethics]], and [[reducing-ai-misuse|responsible use]]. Alongside it, [[human-ai-collaboration|human–AI collaboration]] and [[agentic-ai|agentic AI]] frame how people and AI work together.
- **[[pedagogy|Pedagogies and teaching strategies]]** — the umbrella for how teaching happens: the teaching methods and strategies AI operates within ([[active-learning|active]], [[collaborative-learning|collaborative]], [[project-based-learning|project-based]], [[problem-based-learning|problem-based]], [[experiential-learning|experiential]], [[game-based-learning|game-based]], [[socratic-method|Socratic]], [[scaffolding]], and more), including the distinct context of [[online-teaching-and-learning|online teaching and learning]].
- **[[learning-theories|Learning theories]]** — the umbrella for how learning happens: the theoretical frameworks ([[behaviorism]], [[cognitive-psychology|cognitivism]], [[constructivist|constructivism]], [[sociocultural-learning|sociocultural]], cognitive, [[motivation|motivational]]) that shape AI design and evaluation.
- **[[ai-technologies|Technologies]]** — the umbrella for the technical layer: the AI systems ([[llm|LLMs]], [[generative-ai|generative AI]], [[multimodal]], [[educational-robotics|robotics]]) and techniques ([[rag]], [[prompt-engineering|prompt engineering]], [[reinforcement-learning|reinforcement learning]], [[pedagogical-llm-training|model training]], [[agentic-ai|agentic orchestration]]) that power AIED. The learner-modeling family — [[knowledge-tracing|knowledge tracing]], [[cognitive-diagnosis|cognitive diagnosis]], [[simulating-students|simulating students]], and the systems that consume them ([[intelligent-tutoring|intelligent tutoring]], [[adaptive-learning|adaptive learning]], [[personalized-learning|personalized learning]]) — is grouped under the [[student-modeling|Learner Modeling and Adaptive Instruction]] umbrella within this technical strand.
- **[[discipline-specific-aied|AI in the disciplines]]** — the umbrella for how AI is applied across subject areas ([[math-education|mathematics]], [[physics-education|physics]], [[language-learning|language learning]], [[cs-education|computer science]], [[writing-education|writing]], [[stem-education|STEM]], [[engineering-education|engineering]], [[business-education|business]], [[teacher-education|teacher education]], [[medical-education|health professions]], and more) — and, past the academic subjects, the professional and applied strand that assesses demonstrated practice rather than correctness ([[nursing-education|nursing]], [[information-technology|information technology]], [[vocational-education|vocational education and training]], [[design-education|design education]]) — and educational levels ([[k-12]], [[higher-ed|higher education]], [[adult-learning|adult learning]]).
- **[[assessment]]** (with [[formative-assessment|formative]], [[summative-assessment|summative]], [[authentic-assessment|authentic]], and [[automated-assessment|automated]] strands) — the umbrella for how AI both assesses learners and reshapes assessment validity and integrity.
- **[[feedback]]** — the umbrella for how feedback is generated, delivered, and used: the feedback loop, [[ai-feedback-quality|feedback quality]], [[feedback-literacy|feedback literacy]], and its assessment contexts ([[formative-assessment|formative]], [[peer-assessment|peer]], [[automated-assessment|automated]]).
- **[[stakeholders|Stakeholders in AI education]]** — the umbrella for who the actors are: learners, [[teacher-role|teachers]], [[learning-design|learning designers]], [[administrator|administrators]], and [[educational-policy-ai|policymakers]].
- **[[ai-ed-evaluation|AI ed evaluation]]** and **[[research-methods-aied|research methods]]** — the umbrellas for how we know whether AI works: efficacy studies, [[benchmark|benchmarks]], [[rct|randomized controlled trials]], [[meta-analysis-systematic-review|meta-analysis]], and [[learning-gains|learning gains]] as the core outcome measure. Readers should also weigh the [[limitations-in-aied-research|cross-cutting limitations of this evidence]].
- **[[governance|AI governance]]**, **[[educational-policy-ai|educational AI policy]]**, and **[[equity-in-ai-education|equity]]** — the umbrellas for the institutional, regulatory, and fairness layer (see also [[regulation]] and [[privacy]]).

These umbrella pages are linked throughout the sections below; each strand below names both its umbrella and its constituent concepts.

## Two dimensions of AI in education

AI in education research spans two interconnected directions:

- **AI for education** — using AI systems to enhance teaching, learning, assessment, and administration. This includes [[intelligent-tutoring|AI tutoring]], [[adaptive-learning|adaptive learning]], [[personalized-learning|personalized learning]], [[automated-essay-scoring|automated essay scoring]], [[automated-question-generation|automated question generation]], [[automated-assessment|automated assessment]], [[formative-assessment|formative assessment]], [[learning-analytics|learning analytics]], and [[feedback|feedback loops]].
- **Education about AI** — teaching learners and educators to understand, use, and critically evaluate AI. The core is [[ai-literacy|AI literacy]], supported by [[prompt-engineering|prompt engineering]], [[critical-thinking|critical thinking]], [[ethics|AI ethics]], [[governance|governance education]], digital literacy, and [[reducing-ai-misuse|responsible use]].

These two dimensions are not separate: [[ai-literacy|using AI well]] requires understanding it, and teaching about AI is enriched by using it. This [[human-ai-collaboration|human-AI collaboration]] is a central theme.

## Foundations of AI in education

The field's cross-cutting and foundational concepts anchor the knowledge base's coverage and appear first in the sidebar. They open with an **Essentials** group — the concepts every reader should start with: the umbrella itself, [[misconceptions|misconceptions about AI]], [[ai-literacy|AI literacy]], [[agentic-ai|agentic AI]], [[cognitive-offloading|cognitive offloading]], [[framing-ai-use-for-students|how AI use is framed for students]], [[reducing-ai-misuse|reducing AI misuse]], [[academic-integrity|academic integrity]], [[teacher-role|teaching]], [[learning-design|learning design]], and [[educational-development|educational development]]. The **field** strand then covers [[history-of-aied|the field's history]], the [[limitations-in-aied-research|cross-cutting limitations of the evidence base]], [[philosophy-of-ai-in-education|its philosophy]], the [[theories-and-frameworks|theories and frameworks]] map, and [[theory-development-aied|theory development]]. The cross-cutting themes — [[human-ai-collaboration|human–AI collaboration]], [[agency|learner agency]], [[learner-identity|learner identity]], [[design-thinking|design thinking]], [[curriculum-design|curriculum design]], [[critical-thinking|critical thinking]], and [[computational-thinking|computational thinking]] — cut across every strand, because the inaccurate mental models people hold about AI are upstream of [[ai-misuse-learning-harm|misuse]] and under-calibrated [[trust-calibration|trust]].

## Learning and instruction

How AI supports teaching and learning is the heart of the field. Key concepts include:

- **Core pedagogies:** [[pedagogy|pedagogies and teaching strategies]] — the umbrella for the knowledge base's teaching-methods coverage — along with [[active-learning|active learning]], [[collaborative-learning|collaborative learning]], [[group-work|group work]], [[project-based-learning|project-based learning]], [[problem-based-learning|problem-based learning]], [[productive-failure|productive failure]], [[inquiry-based-learning|inquiry-based learning]], [[experiential-learning|experiential learning]], [[game-based-learning|game-based learning]], [[learning-by-teaching|learning by teaching]], [[scaffolding]], [[socratic-method|the Socratic method]], [[critical-pedagogy|critical pedagogy]], [[pedagogical-partnerships|pedagogical partnerships]], [[storytelling-in-education|storytelling]], [[learning-design|learning design]], [[online-teaching-and-learning|online teaching and learning]], and [[video-education|video in education]].
- **Learning theories and processes:** the [[learning-theories|learning theories]] umbrella ([[behaviorism]], [[cognitive-psychology|cognitivism]], [[constructivist|constructivism]], [[sociocultural-learning|sociocultural]], [[distributed-cognition|distributed cognition]], [[situated-learning|situated learning]], [[embodied-learning|embodied learning]], [[community-of-inquiry|community of inquiry]]) sits alongside learner-facing processes like [[self-regulated-learning|self-regulated learning]], [[self-determination-theory|self-determination theory]], [[motivation]], [[self-efficacy]], [[self-directed-learning|self-directed learning]], [[metacognition]], [[desirable-difficulties|desirable difficulties]], [[transfer-of-learning|transfer of learning]], [[prior-knowledge|prior knowledge]], [[icap-framework|ICAP cognitive engagement]], [[refutation-text|refutation text]], [[retrieval-spacing-interleaving|retrieval, spacing and interleaving]], and [[activity-theory-aied|activity theory]].
- **Learner engagement and experience:** [[student-engagement|student engagement]], [[help-seeking]], [[social-emotional-learning|social-emotional learning]], [[well-being]], [[creativity]], [[problem-solving|problem solving]], [[mastery-learning|mastery learning]], and [[student-ai-interaction|student–AI interaction]] shape how learners actually encounter and are affected by AI.

## Technologies and techniques

The [[ai-technologies|Technologies]] page is the umbrella for the technical layer:

- **Models and techniques:** [[generative-ai|generative AI]], [[llm|large language models]], [[rag|retrieval-augmented generation]], [[multimodal|multimodal models]], [[educational-nlp|educational NLP]], [[reinforcement-learning|reinforcement learning]], [[knowledge-graph|knowledge graphs]], [[educational-robotics|robots in education]], [[conversational-ai|conversational AI]], [[simulation]], and [[pedagogical-llm-training|training pedagogical LLMs]]. The underlying methods matter too: [[machine-learning|machine learning]] is where these systems are built, [[speech-and-voice-technologies|speech and voice technologies]] carry spoken tutoring and language practice, [[visualization]] covers dashboards and visual analytics for learners and instructors, and [[virtual-and-augmented-reality|virtual and augmented reality]] hosts immersive practice whose visual layer the model can now generate. Newer interaction styles belong here too — most prominently [[vibe-coding|vibe coding]], the natural-language-driven workflow in which the user specifies a program by prompting an LLM and judges the resulting behavior rather than reading or editing source, which reframes [[cs-education|programming]] as an act of expression and verification and lowers the barrier to [[teacher-role|end users]] building their own tools. Integration-depth frameworks such as [[samr-model|SAMR]] and adoption theories such as [[technology-acceptance-model|TAM]] classify how deeply AI is taken up and how much it transforms the task.
- **Learner modeling and adaptive systems:** the technical systems that represent and adapt to the learner are grouped under the [[student-modeling|Learner Modeling and Adaptive Instruction]] umbrella — [[knowledge-tracing|knowledge tracing]], [[cognitive-diagnosis|cognitive diagnosis]], [[simulating-students|simulating students]], [[intelligent-tutoring|intelligent tutoring]], [[adaptive-learning|adaptive learning]], [[personalized-learning|personalized learning]], [[recommender-systems-and-learning-paths|recommender systems and learning paths]], [[pedagogical-agent|pedagogical agents]], [[affective-tutoring|affective tutoring]], [[affective-computing|affective computing]], [[human-in-the-loop-ai|human-in-the-loop AI]], and [[learning-analytics|learning analytics]]. These sit at the technical layer because they are the AI systems themselves, distinct from the pedagogies they enact.

## AI in the disciplines

AI is applied across disciplines and educational levels. The knowledge base's [[discipline-specific-aied|overview of AIEd in the disciplines]] maps subject-area coverage — alongside [[learning-sciences|learning sciences]], which is not a taught subject but the cross-cutting research field that studies learning itself and takes subject matter as one variable among others:

- **Subject areas:** [[math-education|mathematics]], [[physics-education|physics]], [[chemistry-education|chemistry]], [[biology-education|biology]], [[cs-education|computer science]], [[engineering-education|engineering]], [[stem-education|STEM]], [[writing-education|writing]], [[language-learning|language learning]], [[english-education|English education (EAP/EFL/ESL)]], [[science-education|science education]], [[business-education|business, economics, and management]], [[humanities-education|humanities and social sciences]], [[arts-design-and-media-education|arts, design and media education]], [[medical-education|medical and health professions]], [[legal-education|legal education]], and the professional and applied strands — [[nursing-education|nursing]], [[information-technology|information technology]], [[vocational-education|vocational education and training]], and [[design-education|design education]].

## Levels and contexts

The same AI tool meets very different settings, and the knowledge base separates the educational level from the pedagogy so that findings do not silently transfer across them: [[k-12|K-12 schools]], [[early-childhood-elementary-ai-education|early childhood and elementary education]], [[higher-ed|higher education]], [[adult-learning|adult learning]], [[vocational-education|vocational education and training]], [[special-education|special education]], and [[teacher-education|teacher education]]. Domain-adjacent concepts that cut across levels include [[universal-design-for-learning|universal design for learning]], [[neurodiversity]], [[multilingual-learning|multilingual learning]], and [[social-emotional-learning|social-emotional learning]].

## Assessment and measurement

AI transforms both how we assess learners and how we evaluate AI systems themselves:

- **Assessment and feedback:** [[assessment]], [[formative-assessment|formative assessment]], [[summative-assessment|summative assessment]], [[authentic-assessment|authentic assessment]], [[eportfolio|e-portfolio]], [[feedback]] and [[feedback-literacy|feedback literacy]], [[ai-feedback-quality|AI feedback quality]], [[peer-assessment|peer assessment]], [[automated-assessment|automated assessment]], [[automated-essay-scoring|automated essay scoring]], and [[automated-question-generation|automated question generation]]. Because a model can now produce plausible finished work on demand, the knowledge base foregrounds the capability that remains the learner's own: [[evaluative-judgment|evaluative judgment]], the capacity to appraise the quality of one's own work, peers' work, and AI output against reasoned criteria. It is the construct several feedback and authentic-assessment studies converge on — the hybrid feedback condition outperforming direct AI feedback in a multisite experiment, the sustainability gap in AI formative feedback, and the practical move of assessing the decisions students make rather than only the artifact — and it is a core reason AI-era redesign shifts from [[ai-detection|detection]] toward tasks whose integrity survives inspection. [[group-work|Group work]] is likewise assessed along both process and product, where teams must negotiate whose and what kind of AI engagement counts as acceptable.
- **Measurement and validity:** [[assessment-validity|assessment validity]], [[psychometrically-aware-ai|psychometrically aware AI]], [[educational-measurement|educational measurement]], [[item-response-theory|item response theory]], [[self-report-measures|self-report measures]] (the instrument behind a large share of this evidence, and a recurring limitation), [[ai-detection|AI detection]], [[remote-proctoring|remote proctoring]], and [[academic-integrity|academic integrity]].

## Research methods and evaluation

How we know whether AI works is its own strand, and the knowledge base treats it as one:

- **Research methods:** [[research-methods-aied|research methods in AIED]] as the umbrella, with [[qualitative-research|qualitative]], [[quantitative-research|quantitative]], [[mixed-methods-research|mixed-methods]], [[design-based-research|design-based]], and [[usability-research|usability]] approaches, plus [[rct|randomized controlled trials]], [[meta-analysis-systematic-review|meta-analysis and systematic review]], and [[network-analysis|network analysis]].
- **Evaluation of AI systems:** [[ai-ed-evaluation|AI ed evaluation]] and [[benchmark|benchmarks]] for judging a system's capability, with [[learning-gains|learning gains]] as the outcome that matters, and the [[limitations-in-aied-research|cross-cutting limitations]] of this evidence and [[interpreting-and-applying-aied-research|how to read a single study]] as the cautionary counterweight.

## People

AI in education changes the roles of every stakeholder. The knowledge base's [[stakeholders|Stakeholders in AI education]] page is the umbrella covering all of them:

- **Learners:** [[student-experience|student experience]], [[career-development-and-readiness|career development and readiness]], and [[anxiety-and-stress|AI anxiety and stress]] shape how students encounter AI.
- **Families and communities:** [[parents-and-families|parents and families]] are the audience schools address most often about AI and the one with the least research behind the guidance, so their concerns belong in the stakeholder picture rather than outside it.
- **Instructors and teaching frameworks:** [[teacher-ai-competency|teacher AI competency]], [[tpack|technological pedagogical content knowledge (TPACK)]], [[samr-model|SAMR]], and [[educational-development|educational development]] address educator preparation and support.
- **Builders:** [[educational-technology-developers]] — the product designers, software developers, learning engineers and analytics designers who turn a model capability into something an institution can procure. They are a distinct audience from the practitioners and administrators above, and they sit outside the institutions that adopt their tools, which is why defaults, co-design and post-funding maintenance appear in this knowledge base as pedagogical questions rather than commercial ones.

## Institutions and policy

The institutional layer is where AI decisions are actually made and defended: [[administrator|administrators]] and institutional leaders, [[educational-policy-ai|educational AI policy]], [[governance|AI governance]], [[change-management|change management]] as the work of making an adoption stick, [[regulation|AI regulation]], and the procurement and platform questions that follow from [[technology-acceptance-model|technology adoption]], [[open-source|open source]], and [[edtech-platform|edtech platforms]], alongside [[lifelong-learning|professional and lifelong learning]] and [[professional-training|professional training]].

## Equity, ethics, and responsible use

Fairness, access, and responsibility are central to AI in education:

- **Equity and access:** [[equity-in-ai-education|Equity]], [[differential-effects-across-learner-groups|differential effects across learner groups]] (the question of who a finding holds for), [[digital-divide|digital divide]], [[bias-mitigation|bias mitigation]], [[culturally-relevant-pedagogy|culturally relevant pedagogy]], [[multilingual-learning|multilingual learning]], [[inclusive-learning|inclusive learning]], [[accessibility]], [[assistive-technology|assistive technology]], [[neurodiversity]], [[universal-design-for-learning|universal design for learning]], and [[global-south|Global South]] studies.
- **Ethics and responsibility:** [[ethics|AI ethics]], [[ai-misuse-learning-harm|AI misuse and learning harm]], [[legal-issues-and-risks|legal issues and risks]], [[ai-use-disclosure|AI use disclosure]], [[guardrails]], [[privacy]], [[hallucination-risk|hallucination risk]], [[ai-sycophancy|AI sycophancy]], [[trust]], [[trust-calibration|trust calibration]], [[reducing-ai-misuse|reducing AI misuse]], [[framing-ai-use-for-students|how AI use is framed for students]], [[pedagogical-safety|pedagogical safety]], [[sustainability]], and [[cognitive-offloading|cognitive offloading]].

A [[meta-analysis-systematic-review|systematic review]] of the field's ethics literature ([[agarwal-ethical-values-norms-aied-2026|Agarwal et al. 2026]], 25 articles) consolidates AIED ethics into six main ethical values — non-discrimination, data stewardship, human oversight, goodwill, explicability, and educational aptness — and maps the ethical norms onto a stakeholder-by-value matrix. It finds end users largely passive in the ethical literature (student voices essentially absent) and calls for integrating ethics into AIED design and a greater focus on the educational (pedagogical) dimension of AIED ethics.

## Emergent and cross-cutting themes

Several themes cut across the field:

- **Trust and critical use:** [[trust]], [[trust-calibration|trust calibration]], [[ai-sycophancy|AI sycophancy]], [[critical-thinking|critical thinking]], [[cognitive-offloading|cognitive offloading]], [[critical-pedagogy|critical pedagogy]], and [[reducing-ai-misuse|reducing AI misuse]] (see also [[framing-ai-use-for-students|how AI use is framed for students]]). How learners and teachers decide to adopt and rely on AI is modeled by [[technology-acceptance-model|technology acceptance]] research, while [[global-south|Global South]] studies foreground equity and cultural context in adoption. Empirically, how AI explains itself shapes this trust: [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]] showed that [[explainable-ai|explainable AI]] builds teachers' trust in AI recommendations through understandability, with domain-driven (curricular-language) explanations trusted and accepted more than data-driven feature-importance output.
- **The evolution of the field:** the knowledge base traces AI in education from early [[intelligent-tutoring|intelligent tutoring systems]] and [[knowledge-tracing|knowledge tracing]] to LLM-driven [[intelligent-tutoring|tutoring]], [[pedagogical-agent|agents]], and [[agentic-ai|agentic AI]] — a rapid shift from tool-centric studies to sociotechnical frameworks ([[design-thinking|design thinking]], [[curriculum-design|curriculum design]], [[institutional-change-framework-ai|institutional change]]), and from hand-authored systems to user-driven workflows in which a learner or [[teacher-role|non-programmer]] specifies behavior in natural language ([[vibe-coding|vibe coding]]). [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian & Doroudi]] formalize this trajectory with their AI×Ed framework, tracing papers across four decades of proceedings to show that the field moved from a diverse mix — including substantial research treating AI as an analogy to human intelligence and learning — toward a near-exclusive focus on applied, data-driven, researcher-facing uses, a turn that the rise of [[llm|LLMs]] now appears to partly reverse (three of the four "AI-as-analogy" papers at AIED 2024 were LLM-based).
- **Emotion, anxiety, and career futures:** AI induces and shapes emotional responses — [[anxiety-and-stress|AI anxiety and stress]] spanning proctoring surveillance, integrity fears, and career displacement — while [[career-development-and-readiness|career development and readiness]] addresses how education prepares learners for an AI-disrupted labor market (see also [[well-being]]).

## Field maturity

The knowledge base reflects a field in rapid evolution — from early intelligent tutoring systems to LLM-driven tutoring and agentic AI; from detection-focused academic-integrity tools to assessment redesign; from tool-centric studies to sociotechnical and equity-focused frameworks. The evidence base increasingly emphasizes rigorous [[research-methods-aied|research methods]], [[ai-ed-evaluation|evaluation]], [[rct|experimental designs]], and long-term outcomes.

## Connections

AI in education connects to every concept in the knowledge base — it is the field that all other concept pages collectively define. Use this page as a starting point to navigate the full knowledge base.

## Connected Concepts
- [[ai-literacy]] — umbrella: understanding, using, and evaluating AI
- [[human-ai-collaboration]] — umbrella: how people and AI work together
- [[pedagogy]] — umbrella: teaching methods and strategies
- [[learning-theories]] — umbrella: how learning happens
- [[ai-technologies]] — umbrella: models, techniques, and systems
- [[discipline-specific-aied]] — umbrella: AI across subject areas and levels
- [[assessment]] — umbrella: how AI assesses learners and reshapes validity
- [[feedback]] — umbrella: how feedback is generated, delivered, and used
- [[stakeholders]] — umbrella: who the actors are
- [[learners]] — umbrella: the learner-side concepts (experience, identity, agency, interaction, learner models)
- [[ai-ed-evaluation]] — umbrella: how we know whether AI works
- [[research-methods-aied]] — umbrella: efficacy research methods
- [[governance]] — umbrella: the institutional and regulatory layer
- [[educational-policy-ai]] — umbrella: policy, guidance, and implementation
- [[equity-in-ai-education]] — umbrella: fairness, access, and inclusion
- [[learning-sciences]] — the empirical field behind AIED
- [[ethics]] — the ethical dimensions of AI in education
- [[misconceptions]] — the mental models people bring to AI
- [[interpreting-and-applying-aied-research]] — reading a study, and carrying a finding into practice
- [[limitations-in-aied-research]] — cross-cutting limits of the evidence base
- [[meta-analysis-systematic-review]] — what the reviews and meta-analyses establish
- [[history-of-aied]] — how the field evolved
- [[philosophy-of-ai-in-education]] — the philosophical foundations
- [[theories-and-frameworks]] — the map of theory and framework nodes
- [[theory-development-aied]] — building and revising theory

## Connected Articles

Field-wide reviews of AI in education — the studies that survey the whole field or a whole educational level rather than one topic:

- [[raza-farooq-aied-review-2020-2025]] — Review of Artificial Intelligence in Education from 2020 to 2025
- [[rismanchian-ai-education-four-decades-aixed-2026]] — The evolution of AI-and-education research across four decades (AIxEd framework)
- [[mishra-control-vs-agency-history-2025]] — Control vs. agency: a history of AI in education
- [[liang-genai-systematic-review-human-ai-2026]] — Generative AI in education: systematic review of 56 empirical studies
- [[genai-higher-education-systematic-review-2026]] — Generative AI in higher education: systematic review of 125 studies
- [[stanford-evidence-base-ai-k12-2026]] — The evidence base on AI in K-12: a review of 818 papers
- [[caruana-pre-university-ai-education-slr-2026]] — Pre-university AI education: systematic literature review of 42 studies
- [[genai-educational-outcomes-meta-analysis]] — Generative AI and educational outcomes: comprehensive meta-analysis
- [[caeai-ai-companions-learning-over-performance-2026]] — a research agenda for AI companions built around learning rather than performance
