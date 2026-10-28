---
title: "What Are Notable Gaps in the Research Literature on AI in Education?"
created: "2026-08-24T14:10:00-04:00"
updated: "2026-10-28T11:47:13-04:00"
connected_faqs: [reporting-interpreting-aied-research, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research]
weight: 45
type: faq
foundations: [limitations-in-aied-research]
technology: [learning-analytics]
assessment: [learning-gains]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
research_method: [literature review]
level: [higher ed]
audience: [researchers, instructors]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-28"
    agent: hermes-agent
---

A grant deadline is eight days out and the background section needs one sentence about what this field does not yet know. Or a colleague has told a committee that AI tutoring raises achievement, citing a two-year experiment across 18 middle schools, and you are the person who has to say what that study can carry. Or you are choosing a dissertation question and every version of it seems to have been done.

The gaps that matter are about strength, specificity, and applicability. AI can perform educational tasks; the open questions are whether a particular design produces durable benefit, for whom, through which mechanism, and under what conditions. That distinction decides two things on your desk: what to study next, and what to stop claiming in the meantime. [[limitations-in-aied-research|Limitations in AIEd Research]] is the catalog behind this page. Evidence about [[intelligent-tutoring|intelligent tutoring systems]], predictive [[learning-analytics|analytics]], [[generative-ai|generative AI]], and autonomous agents is not interchangeable either, and research on using AI to support learning differs from research on teaching people about AI, as the [[ai-education|AI in Education]] overview explains.

## The short version

**1.** Compare the AI against a strong non-AI alternative that holds curriculum, practice, and support constant, and say what the AI added.

**2.** Measure delayed, unaided performance, and state that assisted performance is not a learning gain.

**3.** Report which component of the package did the work and which mechanism you claim.

**4.** Validate every automated score and simulated learner against real learners, including learners outside your development sample.

**5.** State the population boundary, because a pooled average does not answer an equity question.

**6.** Describe the arrangement well enough that someone else could rebuild it.

## Choose a comparison that isolates the AI

Rigorous classroom experiments exist, so "we need randomized trials" no longer names the gap. The sharper question is whether the AI component adds value beyond additional practice, better materials, timely feedback, or more instructional support.

[[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away]] reports modest achievement gains across 18 middle schools alongside limited substantive engagement with the tutor, and the authors note that the gains resembled those from structured practice without AI. That is evidence about an implemented package, and it cannot isolate what the AI inside it added.

The problem underneath is conceptual as well as empirical. "ChatGPT" names a tool, not a method. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] audited 19 ChatGPT-in-education comparisons: only 4 (21%) specified all three of a replicable treatment, an operationalized control, and a valid learning measure (74% well-defined treatment, 42% well-defined control, 53% a learning outcome). When new AI arrives alongside new activities, feedback, or interface design, medium and method are confounded and no effect belongs to the AI.

What would settle it: comparisons against realistic non-AI alternatives with curriculum, practice opportunities, and support held as constant as possible, plus independent replications across institution, instructor, subject, and model. Methods answer different questions here. [[qualitative-research|Qualitative]] and [[design-based-research|design-based]] work explains implementation, while well-designed experiments carry the causal claims, as [[research-methods-aied|Efficacy Research Methods]] sets out.

## Measure learning after the tool is gone

Improved work while using AI is not evidence of learning that survives the assistance ending. The [[learning-gains|Learning Gains]] and [[cognitive-offloading|Cognitive Offloading]] syntheses keep drawing the same line between assisted performance, retained knowledge, independent reasoning, and transfer.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] shows the measurement problem in a randomized experiment with more than 6,000 middle-school students. A three-correct-in-a-row mastery rule raised platform-defined success without, by itself, producing detectable learning gains one week later. The strongest delayed-test evidence appeared when AI sat inside the mastery workflow and concentrated on practiced material.

The remaining gap is about trajectories of capability, and one added posttest does not close it. Nobody has established retention across months, transfer across tasks, performance after withdrawal, or learners' accuracy in judging what they know, and the field has not separated failure to acquire a skill from deterioration of one already established. Offloading research still needs to show when delegation supports those trajectories and when it displaces the practice that builds them.

## Find out which part of the package did the work

"AI-supported learning" usually bundles several changes: new feedback, added reflection, peer discussion, different task sequences, altered assessment incentives. A package that succeeds does not tell you which components were necessary.

[[genai-feedback-design-multisite-experiment|Human-centered GenAI feedback design]] is a real advance on that question. Among 1,176 first-year undergraduates, reflective and hybrid designs outperformed direct [[ai-feedback-quality|AI feedback]] on delayed AI-free transfer. The hybrid condition combined self-evaluation, [[peer-assessment|peer feedback]], and AI critique. That separates how feedback is organized and used from whether students have access to feedback at all.

Still open: the contribution and timing of initial independent attempts, self-explanation, peer input, corrective feedback, hints, and fading assistance, and how each interacts with [[prior-knowledge|prior knowledge]] and task difficulty.

The theory gap runs alongside. Naming a [[learning-theories|learning theory]] is not testing one. A study needs a theoretical prediction tied to a specific system behavior and a measurable learning process, and statistical mediation informs that explanation without establishing a causal mechanism. [[theory-development-aied|Theory Development in AI in Education]] and [[scaffolding]] carry the argument further.

## Validate the measure before you interpret it

Constructs such as engagement, [[critical-thinking|critical thinking]], AI literacy, and [[personalized-learning|personalization]] get measured inconsistently across this literature. Self-reports describe perceptions; they cannot stand in for demonstrated competence. Technical accuracy, expert-rated output quality, and student learning are three different evaluation targets. [[educational-measurement|Educational Measurement]] and [[ai-ed-evaluation|AI Ed Evaluation]] treat those distinctions as foundational.

One gap sits inside the measurement problem: [[ai-technologies|AI systems]] used to evaluate other AI systems. In [[llm-student-simulation-misconception-faithfulness|Simulating Students or Sycophantic Problem Solving?]], [[simulating-students|simulated students]] frequently abandoned assigned [[misconceptions]] after corrective feedback whether or not the feedback addressed the misconception, so their responses could make ineffective instruction look successful. Targeted training improved the study's faithfulness measure, and improvement on that measure is not validation against human learning.

What is missing is validation of the whole evaluation chain, from model behavior to [[pedagogy|pedagogical]] judgment to learner response to educational outcome, on learners and settings not used during development. Human judgment needs the same scrutiny, since agreement among raters is not evidence that the right construct was assessed.

## Decide what an assessment can still certify

AI creates two connected assessment problems: it helps produce the work being assessed, and it can influence how that work is scored.

The knowledge base's [[ai-agents-complete-lms-assessment-validity-2026|study of AI agents completing assessed LMS tasks]] documents agents navigating a live undergraduate course and finishing assessed activities. That demonstrates a capability which challenges assumptions about student-produced evidence. It does not establish how common such use is, and it does not invalidate asynchronous assessment as a category.

The research question is which designs still support defensible conclusions about the learner. [[eportfolio|Portfolios]], reflections, staged submissions, and activity logs need validation as evidence rather than being assumed to establish authorship or understanding. Studies should test combinations of evidence against independently observed competence while accounting for accessibility, workload, privacy, and student anxiety. [[assessment-validity|Assessment Validity]] holds the detail.

For [[automated-assessment|automated scoring]], [[llms-do-not-grade-essays-like-humans-2026|LLMs Do Not Grade Essays Like Humans]] reports systematic disagreement between out-of-the-box models and human raters. The findings are configuration-specific, and they show why internal consistency cannot carry a validity claim.

[[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]] proposes assessing separately what learners must do independently, what they may accomplish with AI, and what they must verify and defend. That is a framework awaiting empirical validation.

Detection is the clearest dead end in this area. [[karr-ai-detection-humanization-2026|Karr et al. (2026)]] ran two commercial detectors at τ = 0.50 over 642 published English abstracts. Guideline-compliant light AI editing was flagged at 38-80%. Unmodified 2023-25 originals were flagged at 9-15%, with non-[[stem-education|STEM]] work far above STEM at p < 0.001. After humanization the tools caught fewer than 4% of AI-labeled rewrites, a false-negative rate above 96%. A score that punishes honest assistance and misses evasion cannot ground a conclusion about a learner.

## Stop reading literacy scores as evidence of behavior

AI-literacy intervention research is substantial enough to synthesize. [[liu-ai-literacy-interventions-meta-analysis-2026|AI Literacy Interventions in Education]] covers 59 studies and 7,211 participants, reports a positive average effect, and also reports substantial variation with a wide prediction interval spanning zero. Knowledge-focused outcomes came out stronger than skills, attitudes, or ethics.

The sharper gap is whether literacy instruction changes what people do when they use AI, and another competency framework would not close it. Can learners recognize unsupported claims, verify sources, reject misleading suggestions, notice inappropriate agreement, and choose when not to delegate? Does any of that hold under time pressure, and does it transfer to unfamiliar systems and disciplines?

Settling this needs performance-based assessment combined with observation of actual decisions and delayed follow-up, with conceptual knowledge, operational proficiency, and critical judgment kept apart rather than pooled. [[ai-literacy|AI Literacy]] and [[trust-calibration|Trust Calibration]] supply the distinctions.

## Report who the finding leaves out

Findings from one course, institution, language, or learner population rarely license decisions elsewhere, a problem the [[limitations-in-aied-research|Limitations in AIEd Research]] synthesis treats as recurring. How effects vary across developmental stage, discipline, prior knowledge, disability, language, and resource conditions remains largely unmeasured.

Equity research also has to separate access, skills, and outcomes. The [[digital-divide|Digital Divide]] synthesis is clear that devices and tool access do not establish equal capacity to benefit. [[school-ai-education-readiness-gaps-agency-2026|Does School-Based AI Education Narrow Readiness Gaps?]] followed 752 Hong Kong junior-secondary students: psychological readiness gaps narrowed while differences on an objective AI-literacy test persisted. Every group improved, and inequality did not close. Prior-learning profiles were not randomly assigned, so their causal role stays unknown.

Coverage is thin in specific places. [[differential-effects-across-learner-groups|Differential Effects Across Learner Groups]] counts the literature by population: second-language and multilingual learners and students with disabilities are the deepest strands, gender and neurodiversity come next, first-generation and international students have one study each in this corpus, gifted and high-achieving students are effectively unstudied, and refugee, immigrant, and displaced learners appear in none. An evidence base with that shape cannot answer an equity question by aggregation.

Capacity varies inside a single national system too. [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye et al. (2026)]] scored AI integration at 45 Nigerian universities and found moderate overall adoption (M = 4.79, range 1.83-7.83 on a 10-point scale), with institution type failing to predict integration once age and geography were controlled (age β = 0.43; South-West location β = 0.31). Internal capabilities intercorrelated at r = 0.79-0.80 and international collaborations with industry partnerships at r = 0.74, so connected institutions accumulate compounding advantages. Which capacity-building designs change outcomes at newer, less-connected institutions is untested.

The research priority is identifying designs that reduce differences in demonstrated capability, participation, and [[agency]], with subgroup outcomes and burdens reported alongside average gains. Accessibility carries its own unresolved question: whether a design removes a barrier to participation or replaces a capability the learner is meant to develop. See [[equity-in-ai-education|Equity in AI Education]] and [[accessibility]].

## Say who holds control, and when it changes

As systems plan, initiate actions, hold memory, and coordinate tools, the educational question becomes who should control which parts of the learning process, and when that control should shift.

[[agentic-ai-education-scoping-review|Agentic AI in Education: A Scoping Review]] maps 474 studies and finds limited longitudinal validation, concentration in [[higher-ed|higher education]] and STEM, and weak educational-theory integration: only 29% of reviewed studies drew explicitly on educational theory, a finding about that corpus rather than all AIED work.

Open questions follow. Does learner-initiated help produce different outcomes from agent-initiated help? Can support be withdrawn as competence develops without loss? Do learners keep the ability to challenge the system? The [[agentic-ai|Agentic AI]] and [[human-ai-collaboration|Human-AI Collaboration]] syntheses add [[teacher-role|teacher]] intervention and accountability in multi-agent settings, where nobody has established who answers for an agent's decision. Greater autonomy is a pedagogical design choice with an evidence base still to be built.

## Test safety failures against real learners

Educational safety reaches past factual accuracy and prohibited requests. A tutor can give a correct answer while removing the learner's opportunity to reason, reinforcing a misconception, or building dependence. [[pedagogical-safety|Pedagogical Safety]] covers the construct.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] identifies failures including excessive answer disclosure and abandonment of scaffolding, with substantially more failures under multi-turn testing. Those are [[benchmark]] findings under specified conditions, not estimates of how often harm occurs in classrooms.

What happens when those failures meet real learners over sustained use is unknown. Which ones produce temporary confusion, which produce persistent misconceptions, which reduce motivation, and which weaken independent capability has not been measured. Nor has anyone established which safeguards cut those risks without producing excessive refusal or frustration. Longer-term work also needs trust, willingness to seek human help, [[agency|learner agency]], and relationships with peers and teachers as outcomes. For children, that requires developmentally appropriate studies connecting system behavior to educational and relational outcomes.

## Separate adoption from implementation

Technical capability does not establish that a tool gets used well, and professional development does not automatically reach students. The missing link usually runs from teacher preparation, through changed classroom practice, to student outcomes.

[[pedagogy-first-technology-second-teacher-knowledge-2026|Pedagogy First, Technology Second]] is a multilevel study of 46 teachers and 2,832 students. Pedagogical AI knowledge was associated with students' perceptions and intentions, and neither measured teacher-knowledge component was directly associated with student AI-knowledge gains. Associations of that kind do not establish that a training intervention would cause better learning.

The open question is which combinations of coaching, [[curriculum-design|curriculum alignment]], review routines, scheduling, and institutional support produce sustained improvement, and studies need to observe enacted teaching rather than teacher confidence or intention to adopt. [[teacher-ai-competency|Teacher AI Competency]] and [[educational-development|Educational Development]] cover the terrain.

Comparative cost-effectiveness is a second gap. Evaluations should count verification, correction, training, supervision, maintenance, and implementation time alongside subscription and model-use costs, and compare AI-supported provision with realistic alternatives. The question worth answering is what educational benefit the complete arrangement delivers for the resources it takes.

## Count governance documents as intentions

[[ethics|Ethical]] principles and governance frameworks are necessary, and their existence does not establish that they change practice or protect learners.

[[agarwal-ethical-values-norms-aied-2026|Agarwal et al.]] reviewed 25 articles and found end users largely passive in the ethics literature, with student voices essentially absent, alongside tensions among values and power asymmetries between stakeholders. That describes the reviewed literature. It is not a claim that students never take part in AIED design.

What is missing is evidence about which governance arrangements make a measurable difference. Does student and teacher participation change procurement, tool design, assessment rules, or remedies after a mistake? Do human-review procedures catch consequential errors? Are alternatives to AI use genuinely available to the people told to use it? Privacy research has a parallel gap: the educational value of additional data collection is usually assumed, and data-minimizing designs have rarely been compared with more intrusive ones on both learning and learner autonomy. See [[governance|AI Governance]] and [[privacy]].

## Make the study rebuildable

AIED has an unusually hard reproducibility problem. Studies omit prompts, model versions, settings, code, and instructional details, and proprietary systems can change during or after an intervention. [[limitations-in-aied-research|Limitations in AIEd Research]] documents the pattern.

Rebuilding a study means describing the instructional arrangement as well as the model: learning tasks, content sources, permitted actions, interface, teacher support, assessment conditions, and anything that changed during deployment. Reproducing one configuration and testing whether its pedagogical principle transfers to another are separate achievements, and the reporting guidance in [[research-methods-aied|Efficacy Research Methods]] addresses both.

Synthesis needs the same care. [[meta-analysis-systematic-review|Meta-Analysis and Systematic Review]] lists weak primary studies, publication bias, heterogeneous interventions, and incompatible outcomes as limits on pooled conclusions, and a single average "AI effect" hides the distinctions educators need. Reviews should separate assisted performance from independent learning, distinguish intervention types and comparison conditions, and make coding decisions auditable.

The synthesis literature is itself a gap. [[oneill-presumed-effective-meta-analysis-2026|O'Neill's (2026) forensic audit]] of 14 high-impact [[meta-analysis-systematic-review|meta-analyses]] found that none provided a valid basis for its claims. No coherent construct: a tool treated as one intervention, multidimensional outcomes pooled. Publication bias was invalidly assessed in all 14. Reported I² ran from 77.2% to 94.4% in every analysis that reported it, with 12 of the 13 above 80%. 61% of randomly vetted primary studies carried validity concerns. Those 14 analyses collected more than 2,000 citations in roughly 16 months, and a retracted meta-analysis was still cited as authoritative in 60% of post-retraction citing papers without acknowledgment. Of 14 papers citing another audited meta-analysis whose abstract advertised a large effect of "AI education" that in fact measured teaching students about AI, only 2 cited it appropriately, 8 read it as evidence that integrating AI improves learning, and 4 were wrong in other ways. The audit asks journals to require full data transparency for meta-analyses (search protocols, coded study characteristics, extracted statistics, analytic code), asks editors not to treat a publication record as proof of reviewing competence, and asks that retractions be visible wherever an article is discovered, exported, or cited. Reproducibility covers the synthesis chain, not only the individual study.

Instructors who want the classroom-level version can follow [[evaluating-ai-interventions-methods]].

## What researchers and instructors get wrong about this

**The field lacks studies.** It lacks specified ones. There are multisite experiments, randomized trials with thousands of students, and 14 high-impact meta-analyses. Only 21% of audited comparisons defined treatment, control, and outcome well enough to attribute an effect.

**Naming a theory tests it.** A citation to a learning theory is a framing decision. A test needs a prediction, a system behavior that implements it, and a process measure that could come out the other way.

**A validated automated score is a validated outcome.** Agreement with human coders establishes consistency with those coders. Simulated students improved on a faithfulness measure without being validated against human learning, and the chain from model behavior to outcome remains unbuilt.

**Access is equity.** In the Hong Kong study, psychological readiness gaps narrowed while objective test differences held, and every group improved without inequality closing. Devices and licenses change who can reach the tool.

**More autonomy is progress.** Greater agent independence is a design choice. With 29% of 474 agentic studies drawing on educational theory and limited longitudinal validation, nobody has shown that shifting control to the system improves learning.

## The objections you will hear

**"The gap is just that we need more randomized trials."** Plenty exist now, and the problem sits upstream of design labels: a trial of a package that bundles new feedback, new tasks, and a new interface cannot attribute anything to the AI. The comparison condition is where the work is.

**"I cannot run a multi-year follow-up."** Then measure one delayed, unaided occasion and say what interval it covers. A week is a real finding, and the mastery-rule study got its result at one week by embedding AI in the workflow and concentrating on practiced material.

**"Randomization is impossible in my course."** Design-based and qualitative work answers implementation questions that trials cannot, and the field needs both. Where random assignment is possible, it still carries the causal claim.

**"The pooled effect size already tells me what works."** The 14 audited meta-analyses defined the treatment as a tool, pooled incompatible outcomes, and reported I² above 80% in 12 of 13 analyses that gave it. The pooled number describes a set of studies with a construct problem.

**"Simulated students are cheaper, so validating them can wait."** In the sycophancy study, simulated students dropped misconceptions whether or not the feedback addressed them, which is the failure mode that makes an ineffective tutor look effective.

## What to do this week

**1.** Write the comparison condition of the study you are planning in one sentence. If it is business as usual, revise it before you revise anything else.

**2.** Add one delayed, unaided measure to the design and name the interval in the method section.

**3.** Write the population boundary into the design statement, then into the abstract, so the claim cannot travel further than the sample.

**4.** Take the strongest claim in your current draft and delete the version your measure cannot carry. Keep the sentence about the ceiling.

**5.** For any automated score or simulated learner in the study, name the human standard and the adjudicator before data collection starts.

## Where to go next

[[reporting-interpreting-aied-research]] is the reporting counterpart to this page, and [[research-methods-aied|Research Methods in AI in Education]] covers the design choices behind each gap. [[evaluating-ai-interventions-methods]] handles measures and comparison designs, [[checking-whether-educational-ai-works]] is the shorter version of the efficacy question, and [[does-ai-help-students-learn]] collects what is known about durable learning. [[theory-development-aied]] and [[equity-ethics-pedagogical-safety-research]] carry the theory and equity strands further.
