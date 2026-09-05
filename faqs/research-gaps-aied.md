---
title: "What are notable gaps in the research literature on AI in Education?"
created: "2026-08-24T14:10:00-04:00"
updated: "2026-09-05T13:00:00-04:00"
weight: 45
type: faq
tags: [ai-ed-evaluation, research-methods-aied, limitations-in-aied-research, learning-gains, equity-in-ai-education, higher-ed]
research_method: [research methods, literature review, learning analytics]
level: [higher ed]
category: [evaluation]
---

# What are notable gaps in the research literature on AI in Education?

The most consequential gaps in AI in Education (AIED) concern **whether particular educational designs produce durable benefits, for whom, through which mechanisms, and under what conditions—not simply whether AI can perform educational tasks**. The knowledge base documents promising interventions alongside persistent weaknesses in measurement, causal inference, generalizability, implementation, and reproducibility. These are often gaps in the *strength, specificity, or applicability* of evidence rather than a complete absence of research. See [[limitations-in-aied-research|Limitations in AIEd Research]]. 

The gaps also differ across the field. Evidence about established intelligent tutoring systems, predictive analytics, generative AI, and autonomous agents should not be treated as interchangeable. Likewise, using AI to support learning and teaching people *about* AI involve related but distinct research questions, as the [[ai-education|AI in Education]] overview explains.

## 1. Isolating what AI adds beyond good instruction

Rigorous classroom experiments exist, so the gap is no longer adequately described as “we need randomized trials.” A more precise question is **whether the AI component adds value beyond additional practice, better materials, timely feedback, or increased instructional support**.

For example, [[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away: AI Tutoring with Khanmigo in a Two-Year School Experiment]] reports modest achievement gains across 18 middle schools, alongside limited substantive engagement with the tutor. The authors note that the gains resembled those associated with structured practice without AI. This establishes evidence about an implemented instructional package, but does not cleanly isolate the incremental contribution of its AI component.

Research therefore needs more comparisons with strong, realistic non-AI alternatives, holding curriculum, practice opportunities, and support as constant as possible. Independent replications should test whether benefits survive changes in institution, instructor, subject, and model. As [[research-methods-aied|Efficacy Research Methods]] emphasizes, different methods answer different questions: qualitative and design-based studies help explain implementation, while appropriately designed experiments strengthen causal claims.

## 2. Following durable learning and independent capability over time

Improved work while using AI is not necessarily evidence of learning that persists after assistance ends. The [[learning-gains|Learning Gains]] and [[cognitive-offloading|Cognitive Offloading]] syntheses repeatedly distinguish assisted performance from retained knowledge, independent reasoning, and transfer to unfamiliar tasks.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] illustrates the measurement problem. In a randomized experiment involving more than 6,000 middle-school students, a three-correct-in-a-row mastery rule increased platform-defined success without, by itself, producing detectable learning gains one week later. The strongest delayed-test evidence emerged when AI was embedded in the mastery workflow and was concentrated on practiced material.

**The remaining gap concerns trajectories of capability, not merely an additional post-test.** Studies should examine retention over months, transfer across tasks, performance after assistance is withdrawn, and learners’ accuracy in judging what they know. They should also distinguish failure to acquire a skill from deterioration of an already-established skill. Research on offloading should test when delegation supports those trajectories and when it displaces the practice necessary to develop them.

## 3. Explaining which instructional components work—and why

“AI-supported learning” often combines several changes: new feedback, additional reflection, peer discussion, different task sequences, and altered assessment incentives. A successful package does not establish which components are necessary or which mechanism produced the benefit.

The multisite experiment [[genai-feedback-design-multisite-experiment|Human-centered GenAI feedback design in higher education]] provides a useful advance. Among 1,176 first-year undergraduates, reflective and hybrid feedback designs outperformed direct AI feedback on delayed AI-free transfer. The hybrid condition combined self-evaluation, peer feedback, and AI critique. This supports investigating how feedback is organized and used, rather than treating access as the intervention.

Further studies should isolate the contribution and timing of initial independent attempts, self-explanation, peer input, corrective feedback, hints, and fading assistance. They should test how those components interact with prior knowledge and task difficulty.

The accompanying theory gap is equally important: **naming a learning theory is not the same as testing it**. Research should connect a theoretical prediction to a specific system behavior and a measurable learning process. Statistical mediation can inform that explanation, but does not by itself establish a causal mechanism. See [[theory-development-aied|Theory Development in AI in Education]] and [[scaffolding|Scaffolding]].

## 4. Validating measures, automated judgments, and simulated learners

Constructs such as “engagement,” “critical thinking,” “AI literacy,” and “personalization” are measured inconsistently. Self-reports can describe perceptions and experiences, but cannot substitute for demonstrated competence. Technical accuracy, expert-rated output quality, and student learning also represent different evaluation targets. These distinctions are central to [[educational-measurement|Educational Measurement]] and [[ai-ed-evaluation|AI Ed Evaluation]].

A particularly important gap concerns AI systems used to evaluate other AI systems. In [[llm-student-simulation-misconception-faithfulness|Simulating Students or Sycophantic Problem Solving?]], simulated students frequently abandoned assigned misconceptions after corrective feedback regardless of whether it addressed the misconception. Their responses could therefore make ineffective instruction appear successful. Targeted training improved the study’s faithfulness measure, but improvement on that measure is not equivalent to validation against human learning.

Research needs to establish which automated scores and simulated behaviors predict outcomes with real learners, including learners and settings not used during development. Human judgments also require scrutiny: agreement among raters is not automatically evidence that the right construct is being assessed.

**The gap is validation of the evaluation chain—from model behavior, to pedagogical judgment, to learner response, to educational outcome.**

## 5. Establishing assessment validity when AI can produce and evaluate the evidence

AI creates two connected assessment problems: it can help produce the work being assessed, and it can influence how that work is scored.

The knowledge base’s [[ai-agents-complete-lms-assessment-validity-2026|study of AI agents completing assessed LMS tasks]] documents agents navigating a live undergraduate course and completing assessed activities. These demonstrations establish a capability that challenges assumptions about student-produced evidence; they do not establish the prevalence of such use or invalidate every asynchronous assessment.

The research question is **which assessment designs still support defensible conclusions about the learner**. Portfolios, reflections, staged submissions, and activity logs should themselves be validated rather than assumed to establish authorship or understanding. Studies should examine combinations of evidence against independently observed competence, while accounting for accessibility, workload, privacy, and student anxiety. See [[assessment-validity|Assessment Validity]].

For automated scoring, [[llms-do-not-grade-essays-like-humans-2026|LLMs Do Not Grade Essays Like Humans]] reports systematic disagreements between out-of-the-box models and human raters. Its findings are configuration-specific, but demonstrate why internal consistency is insufficient.

A useful conceptual distinction comes from [[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]]: assess what learners must do independently, what they may accomplish with AI, and what they must verify and defend. That is a proposed framework requiring empirical validation, not an established assessment solution.

## 6. Showing that AI literacy transfers into responsible behavior

AI-literacy intervention research is substantial enough to support synthesis. [[liu-ai-literacy-interventions-meta-analysis-2026|AI Literacy Interventions in Education: A Meta-Analysis of Effects and Moderators]] includes 59 studies and 7,211 participants. It reports a positive average effect, but substantial variation across studies and a wide prediction interval spanning zero. Knowledge-focused outcomes showed stronger effects than skills, attitudes, or ethics.

The sharper gap is therefore not simply developing more competency frameworks. It is determining **whether literacy instruction changes how people act when using AI**.

Can learners recognize unsupported claims, verify sources, reject misleading suggestions, identify inappropriate agreement, and choose when not to delegate? Do those behaviors persist under time pressure and transfer to unfamiliar systems and disciplines?

Research should combine performance-based assessments with observations of actual decisions and delayed follow-up. It should distinguish conceptual knowledge, operational proficiency, and critical judgment rather than treating them as interchangeable. The [[ai-literacy|AI Literacy]] and [[trust-calibration|Trust Calibration]] syntheses provide useful starting points for these distinctions.

## 7. Understanding generalizability and equitable outcomes—not just equitable access

Findings from one course, institution, language, or learner population often provide limited grounds for decisions elsewhere. The [[limitations-in-aied-research|Limitations in AIEd Research]] synthesis identifies this as a recurring problem. More evidence is needed about how instructional effects vary across developmental stages, disciplines, prior knowledge, disability, language, and resource conditions.

Equity research must also distinguish access, skills, and outcomes. The [[digital-divide|Digital Divide]] synthesis makes clear that providing devices or tool access does not establish equal capacity to benefit.

For example, [[school-ai-education-readiness-gaps-agency-2026|Does School-Based AI Education Narrow Readiness Gaps?]] followed 752 Hong Kong junior-secondary students. Psychological readiness gaps narrowed, while differences on an objective AI-literacy test persisted. All groups improved, but overall improvement did not eliminate inequality. Because prior-learning profiles were not randomly assigned, the study does not establish their causal effects.

**The research priority is identifying which designs reduce differences in demonstrated capability, participation, and agency.** Studies should examine subgroup outcomes and burdens, not merely average gains. Accessibility research should distinguish removing barriers to participation from replacing a capability the learner is intended to develop. See [[equity-in-ai-education|Equity in AI Education]] and [[accessibility|Accessibility]].

## 8. Determining how control should be shared between learners, teachers, and agents

As AI systems plan, initiate actions, maintain memory, and coordinate tools, the educational question becomes more specific than whether human–AI collaboration is beneficial: **who should control which parts of the learning process, and when should that control change?**

[[agentic-ai-education-scoping-review|Agentic AI in Education: A Scoping Review]] maps 474 studies and identifies limited longitudinal validation, concentrations in higher education and STEM, and weak educational-theory integration. Only 29% of the reviewed studies explicitly drew on educational theory—a finding about that corpus, not all AIED research.

Research should compare configurations in which learners or agents initiate help, set goals, select strategies, monitor progress, and make final decisions. It should test whether support can be gradually withdrawn as competence develops and whether learners retain the ability to challenge the system.

The [[agentic-ai|Agentic AI]] and [[human-ai-collaboration|Human–AI Collaboration]] syntheses also raise questions about teacher intervention and accountability in multi-agent environments. Greater autonomy should be evaluated as a pedagogical design choice, not assumed to represent educational progress.

## 9. Connecting pedagogical and relational safety to real educational consequences

Educational safety extends beyond factual accuracy, offensive content, or prohibited requests. A tutor can provide a correct answer while undermining the learner’s opportunity to reason, reinforcing an underlying misconception, or encouraging inappropriate dependence. See [[pedagogical-safety|Pedagogical Safety]].

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors: Pedagogical Safety in AI Tutoring]] identifies failures such as excessive answer disclosure and abandonment of scaffolding, with substantially more failures under multi-turn testing. These are benchmark findings under specified testing conditions—not estimates of the prevalence or severity of harm in classrooms.

The unresolved issue is how such failures affect real learners over sustained use. Which produce temporary confusion, persistent misconceptions, reduced motivation, or weakened independent capability? Which safeguards reduce those risks without excessive refusal or frustration?

Longer-term research should also examine trust, willingness to seek human help, learner agency, and relationships with peers and teachers. These questions are especially important for children and require developmentally appropriate studies that connect system behavior to educational and relational outcomes.

## 10. Explaining how implementation, teacher development, and costs shape outcomes

Technical capability does not establish that a tool will be used productively or that professional development will improve student learning. The missing link often runs from **teacher preparation, through changed classroom practice, to student outcomes**.

In [[pedagogy-first-technology-second-teacher-knowledge-2026|Pedagogy First, Technology Second]], a multilevel study of 46 teachers and 2,832 students found that pedagogical AI knowledge was associated with students’ perceptions and intentions, but neither measured teacher-knowledge component was directly associated with student AI-knowledge gains. These associations do not establish that a particular training intervention would cause better learning.

Research should investigate which combinations of coaching, curriculum alignment, review routines, scheduling, and institutional support produce sustained improvements. It should observe enacted teaching, not only teacher confidence or intention to adopt. See [[teacher-ai-competency|Teacher AI Competency]] and [[educational-development|Educational Development]].

Comparative cost-effectiveness is another priority. Evaluations should include verification, correction, training, supervision, maintenance, and implementation time—not just subscription or model-use costs—and compare AI-supported provision with realistic alternatives. The relevant question is what educational benefit the complete arrangement delivers for the resources it requires.

## 11. Evaluating governance, privacy, and meaningful participation

Ethical principles and governance frameworks are necessary, but their existence does not establish that they change practice or protect learners.

[[agarwal-ethical-values-norms-aied-2026|Identifying the Ethical Values and Norms for Artificial Intelligence in Education]] reviews 25 articles and finds end users largely passive in the reviewed ethics literature, with student voices essentially absent. It also identifies tensions among values and power asymmetries between stakeholders. This describes the reviewed literature; it should not be generalized into a claim that students never participate in AIED design.

The research gap concerns **which governance arrangements make a measurable difference**. Does student and teacher participation change procurement, tool design, assessment rules, or remedies after mistakes? Do human-review procedures catch consequential errors? Are alternatives to AI use genuinely available?

Privacy research should similarly examine the educational value of additional data collection rather than assume that more detailed learner monitoring is justified. Studies can compare data-minimizing designs with more intrusive alternatives, assessing both learning and learner autonomy. See [[governance|AI Governance]] and [[privacy|Privacy]].

## 12. Building reproducible studies and trustworthy cumulative evidence

AIED faces an unusually difficult reproducibility problem. Studies may omit prompts, model versions, settings, code, or instructional details; proprietary systems can also change during or after an intervention. These issues are documented in [[limitations-in-aied-research|Limitations in AIEd Research]].

Reproducibility requires describing the instructional arrangement as well as the model: learning tasks, content sources, permitted actions, interface, teacher support, assessment conditions, and changes during deployment. Researchers should distinguish reproducing one configuration from testing whether its pedagogical principle transfers to another. The reporting discussion in [[research-methods-aied|Efficacy Research Methods]] addresses this need for transparent descriptions.

Evidence synthesis requires comparable care. The [[meta-analysis-systematic-review|Meta-Analysis and Systematic Review]] page highlights weak primary studies, publication bias, heterogeneous interventions, and incompatible outcomes as limitations on pooled conclusions.

A single average “AI effect” can conceal the distinctions educators most need. Reviews should separate assisted performance from independent learning, distinguish intervention types and comparison conditions, and make coding and analytic decisions auditable. Null findings, failed implementations, and boundary conditions are essential contributions to this cumulative evidence base.

## Overall takeaway

The central research need is not simply more studies showing that students like AI, teachers save time, or AI-supported work receives higher scores. It is stronger evidence answering:

> Which educational design, for which learners, in which context, through which mechanism, produces which durable human capabilities—and with what distribution of benefits, costs, and harms?

Answering that question requires complementary methods: well-specified experiments, longitudinal follow-up, validated assessments, qualitative and design-based investigation, equity-focused sampling, and transparent synthesis. The aim is an evidence base that explains not only whether an intervention worked, but why it worked, where it may fail, and what educators can responsibly carry into another setting.
