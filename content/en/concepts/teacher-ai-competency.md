---
title: Teacher AI Competency
created: "2026-05-08T10:44:35-04:00"
updated: "2026-10-07T13:40:00-04:00"
connected_faqs: [faculty-ai-competencies, addressing-common-misconceptions-ai-education, faculty-development-ai]
type: concept
foundations: [ai-literacy, educational-development, teacher-role]
pedagogy: [self-efficacy]
technology: [generative-ai, intelligent-tutoring, llm]
ethics: [equity-in-ai-education]
audience: [faculty developers, learners, instructors]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed, edugems, playlab, teacherserver]
reviewed_by: [editor]
---

> **Teacher AI competency** — the knowledge, skills, and dispositions teachers need to effectively, ethically, and equitably integrate AI into teaching and learning. It extends beyond technical tool use to include [[pedagogy|pedagogical]] integration, [[assessment|assessment literacy]], ethical judgment, and the confidence to [[ai-literacy|use AI well]]. Teacher AI competency is the teacher-side counterpart to [[ai-literacy]], and is developed through [[educational-development|professional development]]. It is central to how [[teacher-role|the teacher's role]] is transforming in AI-augmented classrooms.

## Questions to Consider

- The page argues the teacher is 'the decisive factor' in whether AI improves learning — that tools only help when teachers can plan for them, scaffold use, and evaluate outputs. Does that match your experience, or do you think the tool itself matters more than the teacher?
- Teacher AI competency spans technical proficiency, pedagogical integration, assessment literacy, and ethical judgment. Which of these do you think teachers most lack, and which is hardest to train?
- The [[research-methods-aied|research]] documents a gap between teachers' self-perceived and actual AI skill. Why do you think people overestimate their readiness, and what would it take to close that gap honestly?
- An intensive professional-development program produced large gains in AI pedagogical skill in the research cited, suggesting technical-pedagogical skill is trainable. If that's true, why do so many teachers still seem unprepared — what's standing in the way?
- If a teacher can 'use AI well,' what does 'well' mean to you — and how would you know a teacher has achieved it rather than just adopted the tool?

## Introduction

Teacher AI competency matters because the teacher is the decisive factor in whether AI improves learning. Research consistently shows that AI tools only translate into better outcomes when teachers can plan for them, scaffold student use, evaluate outputs, and integrate them into coherent instruction. The knowledge base's literature examines the *dimensions* of this competency, the *gaps* between self-perception and actual skill, and the *professional development* that builds it.

## Core competency dimensions

The knowledge base's research converges on several interconnected dimensions:

- **Technical proficiency:** crafting effective [[prompt-engineering|prompts]] for educational objectives, [[ai-ed-evaluation|evaluating AI]] tools for pedagogical fit and safety, and troubleshooting failures in real time. [[genai-pd-ai-pck-learning-gain-2026|An intensive GenAI PD program]] documented significant gains across all five AI-PCK components (overall *d* = 2.36), showing technical-pedagogical skill is trainable.
- **Pedagogical knowledge is the decisive layer.** A cross-level study of [[k-12|secondary]] [[ai-education|AI education]] ([[pedagogy-first-technology-second-teacher-knowledge-2026|46 teachers, 2,832 students]]) found technical AI knowledge alone was insufficient — and could even slightly reduce students' perceptions of AI for social good — whereas pedagogical AI knowledge drove students' perceptions and their intention to learn AI. Competency frameworks should therefore weight pedagogical AI knowledge as the pivotal dimension, not a soft add-on.
- **Pedagogical integration:** mapping AI use to learning objectives, designing [[scaffolding]] that supports student [[metacognition]] and self-[[regulation]], and integrating AI into [[learning-design|instructional design]]. [[ai-tpack-teacher-multi-agent-workflow|AI-TPACK research]] models how teachers combine technological, pedagogical, and content knowledge through multi-[[agentic-ai|agent]] workflows, while [[teacher-ai-teaming-five-levels|a five-level teacher-AI teaming framework]] (transactional → synergistic) captures how [[generative-ai|GenAI]] may replace, complement, or augment teacher competence.
- **Assessment literacy:** evaluating AI-generated content and student AI outputs, and understanding how [[assessment-validity|validity]] shifts when students use AI. This connects to [[automated-assessment]], [[ai-detection]], and the broader [[assessment]] redesign agenda. For recommendation systems, this extends to judging whether an AI's explanations are genuinely understandable and pedagogically meaningful: [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]] found teachers trusted AI grouping recommendations more when explanations were framed in domain (curricular) language than when they exposed raw model features — a skill for demanding and appraising [[explainable-ai|explanation quality]] rather than accepting opaque output.
- **Model selection and prompt design as demonstrable skills:** instrumental [[ai-literacy]] includes knowing which model to use and how to phrase the task. [[teacher-ai-literacy-prompt-feedback-quality-2026|Jacobsen et al. (2026)]] had 153 pre-service teachers' lesson-planning goals critiqued by ChatGPT-4, Claude 3 and Gemini Advanced under four systematically varied prompts (N = 240 feedbacks in Study 1, 345 in Study 2), with [[feedback]] rated on nine quality categories. Model choice alone explained 26.9% of the variance in rated quality (18.4% in Study 2) and prompt design added a significant 15.9% (5.7%) on top; the single decisive prompt feature was domain-specific technical language, whose removal significantly lowered quality (β = −0.412), whereas adding examples and dropping the chain-of-thought instruction made no significant difference in Study 1. Their reading — that subject terminology both unlocks relevant training-data content and frames the request professionally, like role prompting — plus a rule of thumb to use the most capable current frontier model, makes model choice a didactic decision rather than a technical one.
- **Ethical and critical use:** recognizing [[bias-mitigation|bias]] in AI outputs, protecting student data ([[privacy]]), and ensuring equitable outcomes ([[equity-in-ai-education]]). [[llm-cultural-relevance-k12|Culturally relevant AI use]] examines how teachers can use LLMs to diversify materials rather than reinforce dominant norms.
- **Ethical responsibility is distributed, not individual.** Across seven national cases teachers are positioned as moral gatekeepers of AI use while lacking institutional and epistemic support, so ethical AI literacy has to extend to critical and political agency rather than technical skill ([[raffaghelli-situated-ai-ethics-2026|Raffaghelli et al. (2026)]]).
- **Confidence and attitudes:** teacher [[self-efficacy|confidence]] shapes adoption. [[teacher-ai-adoption-confidence|Adoption research]] finds confidence, support, and perceived utility drive whether teachers actually use AI, and [[ai-pedagogical-orientation|faculty orientations]] shape adoption in research and teaching.

- In a five-country survey of 1,405 K-12 teachers, AI readiness predicted positive beliefs about GenAI's instructional value (B = .59, R² = .50) yet predicted *greater* creativity concern (B = .18), and the same predictors explained only 7% and 6% of concern — readiness-building alone leaves concern untouched ([[k12-teachers-genai-beliefs-five-countries-2026|Xiu et al. (2026)]]).


Readiness should be ordered and measured accordingly: the Capability–Decision Model places demonstrated AI capability upstream of attitude and confidence and proposes performance indicators rather than self-report alone — lesson-design tasks, prompt-evaluation tasks seeded with errors, content-validity judgments and classroom artifact rubrics ([[capability-decision-model-teacher-readiness-2026|Mnguni (2026)]]).

**Emotional and moral readiness is a distinct dimension.** [[vassallo-ai-guilt-complex-faculty-2026|Vassallo (2026)]] surveyed the academic staff of a Maltese [[higher-ed|university]] (109 respondents) and built an AI Guilt Index (α = 0.88) from four moral-emotion items, finding that *anticipatory* guilt outweighed remorse experienced after use: the strongest endorsement was worry that AI use undermines one's credibility (34.9% agreeing), then feeling like one is [[academic-integrity|cheating]] when using it (25.7%), while post-use remorse drew only 9.2%. The findings that matter for competency frameworks are that non-users reported *higher* guilt than users (M = 3.25 vs M = 2.32) and that guilt fell as career security rose — early-career academics reported the most (M = 2.71) and senior academics the least (M = 2.03). Emotional readiness is therefore not captured by skill or confidence measures, and the paper argues competency frameworks should treat guilt and identity concern as normal transitional responses rather than faults to correct.

A stronger version of that reframing holds that GenAI is a threshold concept rather than a skills gap: an autoethnographic account argues faculty anxiety and resistance are constitutive of threshold crossing, so skills-based training fails and principled non-adoption should be respected rather than corrected ([[laidlaw-genai-identity-crisis-faculty-2026|Laidlaw (2026)]]).

## The competency gap

A key finding is the **gap between [[self-report-measures|self-reported]] and performance-based competency**. [[ai-literacy-assessment-misalignment|Research on AI-literacy assessment]] documents a substantial discrepancy (up to ~40%) between what teachers *believe* they can do and what they can actually *demonstrate* — teachers confident in AI skills often lack foundational prompting and evaluation abilities. This motivates **[[assessment|performance-based assessment]]** of teacher competency rather than reliance on self-report, and connects to [[self-assessment|calibrated self-assessment]]. A national survey of 2,586 Nigerian secondary teachers measured the two sides with separate instruments — moderate AI awareness (M = 3.13 of 8) against lower AI pedagogical skill (M = 2.47 of 5) — with early- and mid-career teachers reporting higher skill than experienced colleagues ([[nigerian-teachers-ai-awareness-pedagogical-skills-2026|Olurinola et al., 2026]]).

The gap is not only between perceived and actual skill but in the *breadth* of what teachers know: a national survey of 2,018 Ukrainian secondary educators found 84% reported using AI in professional practice while only 11% could name a specialized AI service beyond ChatGPT ([[ukraine-ai-literacy-secondary-framework-2026|Marienko, Markova & Semerikov (2026)]]). A second narrowness shows in what teachers volunteer rather than what they can name: 53 in-service teachers tagging their own classroom cases against the OECD AI Literacy Framework described 43 AI-literate practices against only 10 failures ([[ailithub-ai-literacy-case-infrastructure-2026|Wang et al., 2026]]). Their competency selections clustered on practical judgment (evaluating AI outputs, N = 38) and rarely reached societal bias (N = 5), ethical alignment (N = 6) or AI's energy use (N = 9).

The gap is visible in the artifact as well as in the self-report. A [[ai-integration-instructional-design-collaboratory-2026|cross-institutional faculty collaboratory in teacher preparation]], in which teacher educators designed AI into their own methods courses, reported that candidates could produce polished AI-assisted lesson plans while being unable to explain why a plan fit the learners and the standards, since the plan itself says nothing about the reasoning behind it. Grading the justification rather than the product is one response. The [[bondurant-shaughnessy-ai-pedagogies-practice-2026|pedagogies-of-practice frame]] suggests another, treating rehearsal as an approximation of practice: AI-mediated rehearsal with structured post-rehearsal feedback raised candidates' use of probing and exploring questions, yet candidates' own judgments of their performance still diverged from what observers recorded.

**A falling self-assessment after training can signal learning rather than loss.** In a six-month [[tpack|Intelligent-TPACK]] [[educational-development|professional development]] program with 64 Hong Kong university teachers against 61 controls, overall AI competency rose by about half a standard deviation (Cohen's d = −.521), yet some teachers in both groups scored lower at post-test than at pre-test ([[intelligent-tpack-pd-intervention-hongkong-2025|Tan, Cheng & Ling, 2025]]). Interviews attributed the declines to a shift from unconscious to conscious incompetence — the recalibration the Dunning–Kruger effect predicts — rather than to lost skill. The authors conclude that pre-post self-report understates an intervention, because part of the gain arrives as a downward correction in the instrument itself.

**The gap also shows up as non-participation.** [[watson-rainie-ai-challenge-faculty-survey-2026|Watson & Rainie (2026)]] surveyed 1,057 US college faculty in late 2025 and found 26% do not use [[generative-ai|generative AI]] tools at all, with a third choosing not to use them for teaching and non-use concentrated in the arts and [[humanities-education|humanities]] (40%). The institutional side of the gap was larger than the individual one: 68% said their schools had not prepared faculty to use generative AI for teaching and mentoring, and faculty named colleagues' resistance (82%) and unfamiliarity (83%) as the leading obstacles to departmental adoption — a picture in which capability-building, peer norms and policy all have to move together.

**Pre-service training largely sidesteps the ethical dimension of the competency.** A [[meta-analysis-systematic-review|systematic review]] of AI in initial teacher training for pre-service primary mathematics teachers ([[pinto-ai-initial-teacher-training-mathematics-review-2026|Pinto et al. 2026]], 11 studies selected from 341 records) found the interventions concentrated on short-term technical and pedagogical gains, with nine of the eleven running brief interventions spanning one to six sessions, and reported that ethics was addressed in only three of the eleven studies. The competency frameworks name ethical judgment as a dimension; the pre-service literature meant to build it rarely teaches or measures it.

## Professional development that works

The knowledge base's PD literature identifies effective approaches:

- **Intensive, theory-grounded programs:** [[genai-pd-ai-pck-learning-gain-2026|An intensive GenAI PD program]] with 163 teachers/pre-service teachers produced significant gains across all AI-PCK components, with pre-service teachers benefiting most. [[teacher-education-ai-literacy-sdt-2026|Self-determination-theory-based PD]] shows need-supportive training improves teachers' AI literacy, attitudes, and [[student-engagement|engagement]] while reducing anxiety.
- **[[design-based-research|Design-based]] and integrated approaches:** [[genai-literacy-training-teacher-education-dbr-2026|DBR-based GenAI literacy training]] addresses the overemphasis on technical knowledge and pre-GenAI tools; [[rail-ed-genai-literacy-teacher-education|integrative, developmental frameworks]] and [[sec-ai-literacy-narrative-review-2026|social-emotional competency integration]] broaden literacy beyond pure technique.
- **Inquiry and authentic practice:** [[quest-ai-inquiry-preservice-teachers|AI-supported inquiry models]] build AI literacy and authentic performance in pre-service teachers.
- **Context-specific readiness:** [[sangwa-epiq-ai-faculty-readiness-2026|The EPIQ-AI readiness framework]] emphasizes that faculty readiness is a sociotechnical issue requiring alignment of faculty capacity, [[governance]], and quality assurance.
- **Support must be differentiated by experience and AI proficiency.** [[choi-teacher-ai-interaction-lesson-design-2026|Choi et al. (2026)]] found that how teachers actually interact with AI in lesson design depends on the *interplay* of teaching experience and AI proficiency, not either alone. Experienced teachers with high AI proficiency critically adapt AI output to context (re-prompting, elaboration), whereas novices — even technically fluent ones — tend to accept AI responses directly and rarely consider students and context. This argues for profiling-based PD: response-evaluation checklists and prompt templates for novices, and hands-on skill-building for experienced teachers with lower AI proficiency.


Belief configuration is a second profiling axis: among 40,680 teachers in TALIS 2024, the same non-use status masked opposite barriers — 83.3% of the Indifferent profile cited pedagogical reservations while 66.2% of Measured Endorsement cited insufficient knowledge and skills ([[teachers-ai-belief-profiles-talis-2024-2026|Fang & Jin (2026)]]). AI-related professional learning tracked profile membership more consistently than age or attainment.

- **Teachers do not share one conception of AI.** A phenomenographic study of 16 Danish higher-education teachers found three conceptions of teaching-with-AI and three of learning-with-AI, so a single workshop model reaches only part of any faculty group ([[stenalt-good-education-teacher-ai-conceptions-2026|Stenalt (2026)]]).
- **Co-design and pedagogical prompt literacy are competencies, not add-ons.** A [[meta-analysis-systematic-review|systematic review]] of teacher–AI co-design of learning tasks ([[wang-teacher-ai-co-design-review-2026|Wang, Liu & Islam 2026]], 28 studies) finds the dominant collaboration mode is AI as assistant/content generator, and locates a gap in teachers' fuller co-design and dialogic partnership capacities. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] shows PD that pairs technical AI training with pedagogical reasoning — building "pedagogical prompt literacy" (encoding [[tpack|PCK]] into prompts) — is what lets teachers turn AI output into effective [[collaborative-learning|differentiated group activities]].
- **Structures that build competency, rather than lists of it.** [[physics-faculty-learning-community-ai-2026|Perl-Nussbaum and Finkelstein (2026)]] ran a six-session biweekly faculty learning community in a large public R1 physics department — nineteen faculty across the series, about ten at each meeting — where every session opened on local data, moved to small-group testing of AI against real anonymized student homework, and closed in collective discussion, and it produced a five-entry shared repository rather than a training package. Assessment literacy can be built the same way through a design tool: in [[authentic-assessments-generative-ai-pilot-2026|Paula et al.'s (2026)]] pilot, eight experienced STEM and Health course coordinators grew their assessment literacy by critiquing a custom GPT's assessment drafts against disciplinary standards, even though the outputs repeatedly missed disciplinary context, ignored topic sequencing, and in one case carried fabricated references through repeated prompting. All eight kept [[evaluative-judgment|academic judgment]] with themselves and refused end-to-end automation, which makes structured critique of generated drafts the development mechanism rather than tool training.
- **Short sessions can move acceptance without moving adoption.** [[mesenhoeller-teachers-ai-differentiation-acceptance-2026|Mesenhöller and Böhme (2026)]] evaluated a three-hour INSIGHT session with 100 German primary and secondary teachers and found perceived usefulness and perceived ease of use both rose significantly (usefulness t(99) = -3.24, p = .002, d = .32; ease of use d = .25) while behavioral intention to use AI-based technologies for differentiation did not change. The authors note their baselines were already favorable, so a ceiling effect is plausible. The reading for PD design is narrow but useful: a short session can shift how teachers judge AI tools without shifting whether they plan to use them, which is the kind of change that needs follow-through rather than a one-off event.

- **Instructors prefer fluency but attribute learning to scaffold.** Across 41 instructors, a GPT-4o baseline was preferred overall (21 vs 13) yet the fine-tuned three-step model (identify, explore, develop) was more often credited with learning (18 vs 13), and the two judgments agreed only 39% of the time ([[teachingcoach-chatbot-instructor-guidance|Molnar et al. (2026)]]).
- **Institutional support:** [[educational-development|professional development]] must be paired with institutional infrastructure ([[educational-policy-ai|policy]], [[institutional-change-framework-ai|institutional change]]) for sustainable adoption.
- **Authoring tools do not guarantee pedagogical fidelity.** [[teachers-configure-educational-chatbots-2026|Riahi et al. (2026)]] studied 27 middle school teachers configuring educational chatbots in professional-development workshops, analyzing focus groups alongside configuration and interaction logs. Teachers treated the chatbot as an instructional scaffold bounded by teacher-defined rules, yet log-based alignment between intent and behavior was stronger for responsiveness (88.9%) and persona (81.5%) than for rules (70.4%) and purpose (59.3%). Configurable controls alone do not carry pedagogical intent into behavior, so expressing, testing, and refining a chatbot's pedagogy is itself a competency the authoring tooling has to support.


A design-based counterexample treats competency as situational rather than a rung on a ladder. [[adaptive-ai-model-teacher-educators-2025|Eyal's 2025 design-based study with 22 higher-education teacher educators]] had participants examine five published assessment frameworks and co-design an alternative organized around three inter-related axes: context fit (infrastructure, socio-cultural factors, local needs, developmental stage), professional needs (discipline, pedagogy, leadership, support), and dynamic development. The model rejects fixed competency levels and allows non-linear progression, and it ships with a 20-item reflective self-assessment questionnaire rated 1 to 5. Its validation is qualitative only, with no quantitative reliability testing, so it stands as a design contribution rather than a validated instrument.
- **Meta-analytic estimate.** [[teacher-ai-literacy-professional-development-meta-2026|Guo et al. (2026)]] pooled 212 effect sizes from 34 studies and estimate teacher AI-literacy PD at g = 0.76 (95% CI [0.50, 1.02]), strongest for skills (g = 0.91) and weakest for attitudes and values (g = 0.61); correcting for apparent publication selection lowers the estimate to about g = 0.49.

- **Attendance predicts gains where the feeling of participating does not.** In the same six-month program, attendance rate predicted the competency gain (β = .407, p = .001) while self-perceived participation did not (β = .049, p = .692), and discipline, teaching experience and professional title explained little; the authors read attendance as behavioral investment and perceived participation as surface-level engagement ([[intelligent-tpack-pd-intervention-hongkong-2025|Tan, Cheng & Ling, 2025]]).

## Teacher AI competency and the transforming teacher role

As AI takes over routine instructional and assessment tasks, the teacher's distinctive contribution shifts toward orchestration, judgment, and relationship: deciding when and how AI is used, scaffolding [[agency|student agency]] and critical use, ensuring equity, and providing the social and emotional support AI cannot. This reframes teacher competency around [[human-in-the-loop-ai|human-in-the-loop]] oversight, [[ethics|ethical judgment]], and [[self-regulated-learning|supporting self-regulated learning]] — connecting to [[teacher-role]] and [[cognitive-offloading|guarding against over-reliance]].

## Implications for AI in education

- **Assess performance, not just self-report:** teacher competency should be evaluated through demonstration, given the documented self-report gap.
- **Train the full competency, not just tools:** PD should build technical, pedagogical, assessment, and ethical dimensions together, grounded in [[learning-theories|learning theory]].
- **Build confidence alongside skill:** attitudes and [[self-efficacy]] shape adoption, so PD should reduce anxiety and build confidence through authentic, supported practice.
- **Support the institutional layer:** sustainable teacher competency requires aligned policy, governance, and capacity, not isolated training.

- **Teacher digital competence for GenAI [[curriculum-design|curriculum design]].** [[guillen-curriculum-genai-teacher-competence-2026|Guillén-Gámez (2026)]] validate a TAM-based diagnostic instrument with 434 in-service teachers; behavioral intention was the main predictor of digital competence for using GenAI in curriculum planning, with self-efficacy as a root driver.
### A Psychometric Instrument for Teacher AI Competency

- A psychometric study developed the Teachers' AI Literacy Scale (TAILS) to measure AI literacy specifically within [[teacher-education|language teacher education]], operationalizing the ED-AI framework's six dimensions. The instrument's development fills a gap in assessments that target students or general users, supporting the measurement of teacher AI competency.

The instrument landscape itself has since been reviewed. [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore and Maat's 2026 systematic review of teacher AI literacy measurement tools]] appraised 33 instruments published between 2019 and 2025 and found the field methodologically monotonous: 31 (93.9%) are self-report scales of perceived confidence, only two (6.1%) test knowledge objectively, and none use performance-based tasks. Internal consistency was the strongest quality domain (28 of 33 at Grade A) and fairness the weakest, with five instruments (15.2%) reporting measurement invariance or differential item functioning evidence. Content also lags the technology, since 29 instruments (87.9%) target general AI concepts and only four (12.1%), all from 2025, address generative AI.

## Connected Concepts

- [[ai-literacy]]
- [[educational-development]]
- [[teacher-role]]
- [[prompt-engineering]]
- [[learning-design]]
- [[scaffolding]]
- [[metacognition]]
- [[assessment-validity]]
- [[equity-in-ai-education]]
- [[ethics]]
- [[self-efficacy]]
- [[human-in-the-loop-ai]]
- [[agency]]
- [[cognitive-offloading]]
- [[educational-policy-ai]]
- [[ai-education]]
- [[tpack]]
- [[teacher-education]]
- [[pedagogy]] — Umbrella: pedagogies and teaching strategies in AI education

## Connected Articles
- [[teacher-ai-literacy-professional-development-meta-2026]]
- [[intelligent-tpack-pd-intervention-hongkong-2025]] — Intelligent-TPACK PD: half a standard deviation of gain, and negative gains that read as recalibration — The impact of professional development programs on K-12 teachers' AI literacy: A systematic review and meta-analysis

- [[ailithub-ai-literacy-case-infrastructure-2026]] — Teachers tagged their own classroom AI cases and reached practical competencies readily but societal and ethical ones rarely (Wang et al. 2026)
- [[typology-generative-ai-tools-education-2026]] — Tool selection as an exercise of educator agency
- [[generative-ai-k12-teaching-learning-systematic-review-2026]] — Systematic review of generative AI in K-12 teaching and learning (Marzano 2026)
- [[pedagogy-first-technology-second-teacher-knowledge-2026]] — Teacher professional knowledge in K-12 AI education: TAIK vs TPAIK and student learning (Shen et al. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Teacher-AI interaction patterns in lesson design across experience and AI proficiency (Choi et al. 2026)
- [[preservice-teachers-responsible-genai-2026]] — Pre-service teachers' responsible GenAI use: curriculum implications (Kohnke et al. 2026)
- [[melo-llm-classroom-observation-teach-2026]] — LLM classroom observation for teacher professional development (Melo et al. 2026)
- [[bondurant-shaughnessy-ai-pedagogies-practice-2026]] — Generative AI across representations, decompositions and approximations: rehearsal, structured feedback and the accuracy cautions
- [[genai-pd-ai-pck-learning-gain-2026]] — Efficacy of an intensive GenAI professional development program
- [[ai-tpack-teacher-multi-agent-workflow]] — Modeling AI-TPACK through teacher multi-agent workflows
- [[teacher-ai-teaming-five-levels]] — Toward synergistic teacher-AI interactions
- [[teacher-education-ai-literacy-sdt-2026]] — Teacher education for AI literacy through self-determination theory
- [[genai-literacy-training-teacher-education-dbr-2026]] — Design-based research GenAI literacy training
- [[rail-ed-genai-literacy-teacher-education]] — Rethinking GenAI literacy in teacher education
- [[sec-ai-literacy-narrative-review-2026]] — Integrating social-emotional competencies with AI literacy
- [[teacher-ai-adoption-confidence]] — AI adoption among teachers: confidence and support
- [[ai-pedagogical-orientation]] — Faculty orientations shape AI adoption
- [[ai-literacy-assessment-misalignment]] — Misalignment between self-reported and performance-based AI competency
- [[quest-ai-inquiry-preservice-teachers]] — AI-supported inquiry for pre-service teachers
- [[sangwa-epiq-ai-faculty-readiness-2026]] — EPIQ-AI faculty readiness framework
- [[llm-cultural-relevance-k12]] — LLMs for culturally relevant K-12 pedagogy
- [[institutional-change-framework-ai]] — Institutional change framework for AI
- [[teachingcoach-chatbot-instructor-guidance]] — TeachingCoach chatbot for instructor guidance
- [[laidlaw-genai-identity-crisis-faculty-2026]] — GenAI as identity crisis, not skills gap
- [[raffaghelli-situated-ai-ethics-2026]]
- [[guillen-curriculum-genai-teacher-competence-2026]] — Assessing Teacher Digital Competence for GenAI Curriculum Design (Guillén-Gámez 2026)
- [[stenalt-good-education-teacher-ai-conceptions-2026]] — phenomenographic study of university teachers' conceptions of AI
- [[ukraine-ai-literacy-secondary-framework-2026]] — Five-level AI literacy framework + PD for Ukrainian secondary educators (Marienko et al. 2026)
- [[wang-teacher-ai-co-design-review-2026]] — Teacher–AI co-design of learning tasks: trends and perspectives (Wang et al. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — Architecture of roles in AI-designed differentiated group activities (Talebzadeh 2026)
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] — Prompt engineering and model selection as predictors of AI-feedback quality (Jacobsen et al. 2026)
- [[vassallo-ai-guilt-complex-faculty-2026]] — The AI Guilt Complex: anticipatory guilt and four moral response profiles among academic staff (Vassallo 2026)
- [[mesenhoeller-teachers-ai-differentiation-acceptance-2026]] — A three-hour teacher PD session raised perceived usefulness and ease of use but not stated intention to adopt (Mesenhöller & Böhme 2026)
- [[pinto-ai-initial-teacher-training-mathematics-review-2026]] — Systematic review of AI in pre-service primary mathematics teacher training: ethics addressed in only three of eleven studies (Pinto et al. 2026)
- [[watson-rainie-ai-challenge-faculty-survey-2026]] — AAC&U/Elon survey of 1,057 US faculty: preparedness, non-use and the individual-vs-institutional policy gap (Watson & Rainie 2026)
- [[ai-integration-instructional-design-collaboratory-2026]] — Cross-institutional faculty collaboratory: AI integration as instructional design in teacher preparation
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — Systematic review of 33 instruments for measuring teacher AI literacy: 31 self-report, two objective knowledge tests, no performance tasks (Zainal, Mohd Matore & Maat 2026)
- [[adaptive-ai-model-teacher-educators-2025]] — A design-based adaptive AI literacy model and 20-item reflective questionnaire co-designed with 22 teacher educators (Eyal 2025)
- [[physics-faculty-learning-community-ai-2026]] — A Workshop Series for Effective Use of AI in Uncertain Times: Building a Physics Faculty Learning Community
- [[authentic-assessments-generative-ai-pilot-2026]] — Designing Authentic Assessments with Generative AI: A Pilot Study of Assessment Authentifire in Higher Education
- [[teachers-configure-educational-chatbots-2026]] — Will It Teach as Intended? How Teachers Configure Educational AI Chatbots
- [[capability-decision-model-teacher-readiness-2026]] — Ordered capability-first teacher readiness model with performance-based capability indicators
- [[k12-teachers-genai-beliefs-five-countries-2026]] — Cross-national survey of 1,405 K-12 teachers: readiness predicts positive beliefs but not concern
- [[teachers-ai-belief-profiles-talis-2024-2026]] — Four TALIS 2024 teacher belief profiles link professional learning and profile-specific barriers to AI use