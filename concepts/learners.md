---
title: "Learners"
created: "2026-09-18T03:20:00-04:00"
updated: "2026-09-18T06:30:00-04:00"
type: concept
foundations: [agency, learner-identity, ai-literacy]
pedagogy: [self-regulated-learning, motivation, metacognition, student-engagement, help-seeking, prior-knowledge, desirable-difficulties]
technology: [student-modeling, knowledge-tracing, simulating-students, adaptive-learning, personalized-learning]
stakeholders: [stakeholders, student-experience]
ethics: [equity-in-ai-education, inclusive-learning]
level: [higher ed, k 12, adult learning]
audience: [learners, instructors, researchers]
connected_faqs: [how-ai-impacts-students, does-ai-help-students-learn, reducing-over-reliance, study-with-ai]
confidence: high
---

> **Synthesis:** Learners are the primary audience of [[ai-education|AI in education]] — the students in [[k-12]], [[higher-ed]] and [[adult-learning]] whose work, understanding, and sense of self AI now shapes. This page is the umbrella for the knowledge base's learner-side coverage: what learners experience ([[student-experience]]), who they are becoming ([[learner-identity]]), what they still choose ([[agency]]), how they actually interact with the tool ([[student-ai-interaction]]), whether their effort and [[self-regulated-learning|self-regulation]] hold up under it ([[cognitive-offloading]]), and how AI systems model them ([[student-modeling]]). The recurring finding across that research is that the same tool helps and harms different learners differently — gains concentrate where [[prior-knowledge|prior knowledge]], [[ai-literacy|AI literacy]] and verification habits are already present, and reversal concentrates where AI substitutes for the thinking the task was meant to build.

## Questions to Consider

- Which learners in your own context would a new AI tool reach first, and which would it leave behind — and what makes you think so?
- The research often reports that students *believe* AI helped them while unassisted measures show no gain, or a loss. If a learner's own account is unreliable evidence, what would you accept as evidence that learning happened?
- Learners are described here both as people who use AI and as objects AI models ([[student-modeling|learner models]], [[knowledge-tracing|knowledge tracing]], [[simulating-students|simulated students]]). Where should a model of a learner inform teaching, and where should it stop being trusted?
- [[self-regulated-learning|Self-regulation]] and [[prior-knowledge|prior knowledge]] decide whether AI support becomes learning or substitution. Is that a learner deficit to remediate, a design problem to solve, or an assessment problem to fix?
- If a group of learners does poorly with an AI tool, the tool's designers are usually the last to find out. What would a routine for hearing from learners before and after deployment actually look like in your institution?
- [[agency|Learner agency]] and [[learner-identity|identity]] are at stake alongside achievement. Which of those would you refuse to trade for measurable [[learning-gains|score gains]] — and would your assessment design make that refusal visible?

## Introduction

Learners appear in this knowledge base in two very different guises, and blurring them causes most of the confusion in the field. In the first, learners are **people who use AI**: they ask questions, accept or resist answers, lose or keep their footing, and report experiences of support, guilt, anxiety, and dependency. In the second, learners are **objects that AI systems model**: a skill estimate in [[knowledge-tracing|knowledge tracing]], a latent state in [[cognitive-diagnosis|cognitive diagnosis]], or a [[simulating-students|simulated student]] standing in for a real one. The evidence about the first comes from surveys, interviews, log analysis, and experiments; the evidence about the second comes from the machinery of measurement itself — and a model of a learner is a claim, not a learner.

This page is the entry point for both. It collects the learner-side concepts the knowledge base covers, explains how they relate, and links the studies behind them. [[stakeholders]] covers the other side of the same field — [[teacher-role|teachers]], [[administrator|administrators]], designers and policymakers — and the two pages are meant to be read together.

## Who counts as a learner

The knowledge base treats learners across the full span of formal education: [[k-12]] pupils, [[higher-ed|university students]], [[vocational-education|vocational]] and [[professional-training|professional]] learners, and [[adult-learning|adult]] and [[lifelong-learning|lifelong]] learners, including [[special-education|learners with disabilities]], [[neurodiversity|neurodivergent]] learners, and [[multilingual-learning|multilingual]] learners. Two conventions matter. First, "learners" and "students" are not interchangeable in a useful way: *students* names an institutional role, *learners* names an activity, and a person can be one without the other (an employee in [[professional-training|workplace training]] is a learner but not a student). Second, learners are not a homogeneous group, and the heterogeneity is exactly what the research keeps surfacing — [[prior-knowledge|prior knowledge]], [[self-regulated-learning|self-regulation]], language, access, and disability status all change whether an AI tool helps.

## What learners experience

[[student-experience]] is one of the most researched dimensions of AI in education, and its central lesson is that effects are mixed rather than uniform. [[student-perceptions-ai-study-productivity-2026|Survey work on study productivity]] finds learners reporting genuine efficiency gains — 92.3% said AI improved their understanding — alongside a gap the headline numbers hide: only 38.5% said it reduced their overall study time, and half reported sometimes relying on AI instead of trying to learn independently. [[uneven-impact-generative-ai-student-learning-2026|Analyses of reliance patterns]] go further: students with different levels of [[ai-literacy|AI literacy]] and evaluation skill end up in qualitatively different relationships with the tool, so the same course policy produces different outcomes for different learners — support for some, substitution for others. [[genai-student-experiences-uk-he-survey-2026|Students describe the pull of least effort]] in their own words, which the [[academic-integrity]] and [[misconceptions]] pages treat as a design and policy problem rather than a moral one.

Affect runs alongside the cognitive story: [[anxiety-and-stress]] and [[well-being]] document anxiety about being outpaced, about being accused of misconduct, and about the value of the degree being pursued. Learners' mental models of AI — what they think it is and what they think it is for — are upstream of whether they use it well, which is why [[misconceptions]] and [[framing-ai-use-for-students]] appear throughout the learner-side research.

Learner accounts also complicate the integrity story that frames so much learner-side policy. [[mulisa-students-genai-integrity-perspectives-2026|Interviews with 27 undergraduates at an Ethiopian university]] find near-universal GenAI use alongside a genuinely divided [[ethics|ethical]] reading — most crediting the tools with raising their achievement, a minority calling coursework use misconduct, and almost all reporting an uneven playing field in which AI users score above diligent independent workers, one describing the effect as killing their sense of diligence. The student side of misconduct procedure is thinner in the literature than the student side of use, but [[munoz-misconduct-allegation-evidence-2026|case-file analysis of 1,162 GenAI allegations]] shows what learners face when the institutional response arrives: the evidence most often cited is the weakest-rated kind, no minimum evidentiary threshold governs whether a case progresses, and students whose cases rest on thin evidence are pushed toward appeals.

## Identity, agency, and authorship

Learner-side research is not only about outcomes. [[learner-identity]] asks who a learner is becoming in relation to a discipline and to AI, and the evidence runs in both directions: well-designed use can scaffold disciplinary belonging, while outsourcing can erode the sense that the work is one's own. [[agency]] asks what the learner still controls. The knowledge base treats both as genuinely at stake, not as soft adjuncts to achievement: a learner who produces correct output with an AI and no longer recognizes the reasoning behind it has lost something the grade does not record. The authorship question is where learners themselves struggle most: [[mulisa-students-genai-integrity-perspectives-2026|students interviewed about GenAI and integrity]] claimed originality because no other author existed — "If it is not my original idea, then whose?" — while others concluded the work did not represent them, and one reasoned toward recognizing the tool as a co-author it could not be, given that AI is not a person.

## Interacting with AI: what learners actually do

The [[student-ai-interaction]] page collects what learners ask of AI, how their prompts and dialogues evolve, and why interaction quality predicts [[learning-gains|learning outcomes]] better than access does. [[student-llm-interaction-taxonomy-review-2026|A rapid scoping review of 46 categorizations drawn from 33 studies]] finds that evidence base conceptually fragmented — studies differ in data source, category scheme and unit of analysis, so "quality interaction" is not yet a comparable construct across them, and the review's call is for a convergent taxonomy of learning-oriented [[llm]] use rather than a claim that one exists. [[student-ai-conversations-cognitive-engagement-2026|Studies of chat content]] find students discipline themselves in characteristic ways, with engagement ranging from probing and testing claims to accepting the first plausible answer. [[help-seeking]] supplies the older frame: asking for help is a skill, and asking the wrong helper in the wrong way is a known failure mode that AI does not remove.

## Effort, self-regulation, and the performance–learning gap

This is where the learner-side evidence is most consequential, because it separates what learners *can do with AI* from what they *can do without it*. 
[[cognitive-offloading]] collects the over-reliance evidence; [[genai-performance-vs-learning]] states the central methodological point that assisted performance and unassisted capability must be measured separately; [[layer-sensitive-cognitive-offloading-writing-2026|Layer-sensitive studies of writing]] separate surface, structural, idea and reasoning offloading, and find the highest supported performance in the least bounded condition alongside the lowest independent performance eight weeks later; and [[shaw-nave-cognitive-surrender-2026|Shaw and Nave's cognitive-surrender account]] names the disposition that makes delegation habitual rather than strategic. [[metacognitively-discordant-completion-genai-2026|Metacognitive discord]] documents the uncomfortable middle case — learners who notice they do not understand and submit anyway — and [[verification-quality-reliance-calibration-genai-2026|verification research]] shows that "checking" is itself a graded skill, not a binary habit. On the design side, [[desirable-difficulties|productive difficulty]] and [[reducing-ai-misuse]] collect the interventions that restore the effort the task was meant to require.

## Learners as models

The learner-side concepts with the longest technical lineage are the ones that represent the learner to the system. [[student-modeling]] covers the family: [[knowledge-tracing]] estimating skill acquisition over time, [[cognitive-diagnosis]] locating specific misconceptions, and the adaptive and [[personalized-learning|personalized]] systems that consume those estimates. [[simulating-students]] and [[simulating-students-llm-review-2026|its review]] treat [[simulation]] as a way to test [[intelligent-tutoring|tutors]] and generate data when real learners are unavailable — an explicitly provisional stand-in, not a substitute. Two cautions run through this literature: model estimates are inferences from behavior that are sensitive to how items and interfaces are built, and [[demographic-signals-llm-student-assessment-2026|studies of demographic signals]] show that assessment systems can pick up proxies for learner identity (language, background) that were never intended to be part of the construct. [[self-report-measures]] covers the mirror-image problem on the research side: what learners say about their own learning often diverges from what they can do.

## Equity across learners

Because benefits follow prior advantage, learner-side work is inseparable from [[equity-in-ai-education]]. [[digital-divide]] and access to paid model tiers shape who gets the strongest tools; [[bias-mitigation|fairness]] concerns govern how learned models treat different groups; [[inclusive-learning]], [[accessibility]], [[special-education]] and [[neurodiversity]] cover learners whose needs the default design ignores. The practical lesson from this research is that "AI helps students" is not a finding — the finding is always *which* students, under *what* conditions, with *what* prior knowledge and access. Two groups carry a distinctive share of that risk. [[wright-transcription-not-generation-2026|Wright (2026)]] argues that prohibitions written around "[[generative-ai|generative AI]]" rather than around function capture transcription tools that convert the format of work a learner has already authored, so the resulting false positives fall hardest on disabled learners who rely on voice-to-text and OCR, including where AI-powered OCR has replaced discontinued assistive software; [[harerimana-remote-proctoring-nursing-scoping-2026|a scoping review of remote proctoring]] makes the parallel point about assessment conditions, finding that connectivity, data cost and device failure decide who can be assessed at all — an equity finding rather than a technical one, and one concentrated in low- and middle-income settings.

## Where this page sits

Read with [[stakeholders]] for the people around the learner, and with [[pedagogy]] and [[learning-design]] for what teachers do with these findings. [[assessment]] determines which learner capabilities are ever made visible; [[limitations-in-aied-research]] explains why so much of the learner-side evidence is short-term, self-reported and conducted on convenience samples; and [[misconceptions]] is the usual entry point for learners themselves.

## Connected Concepts

- [[student-experience]] — How learners perceive, interact with, and are affected by AI
- [[learner-identity]] — Who learners are becoming in relation to a discipline and to AI
- [[agency]] — What learners still control and choose
- [[student-ai-interaction]] — What learners actually ask AI and how dialogues evolve
- [[cognitive-offloading]] — Over-reliance and the substitution of AI for thinking
- [[self-regulated-learning]] — Planning, monitoring, and adjusting one's own learning
- [[help-seeking]] — Asking for help well, and the failure modes when learners do not
- [[metacognition]] — Knowing what one does and does not understand
- [[motivation]] — Why learners persist or stop
- [[self-efficacy]] — Learners' confidence in their own capability
- [[student-engagement]] — Behavioral, emotional, and cognitive engagement
- [[prior-knowledge]] — The background knowledge that decides whether support becomes learning
- [[student-modeling]] — Representing the learner inside the system
- [[knowledge-tracing]] — Estimating skill acquisition over time
- [[simulating-students]] — LLM-simulated learners as provisional stand-ins
- [[ai-literacy]] — The capability that decides whether learners use AI well
- [[equity-in-ai-education]] — Who benefits and who is left out
- [[well-being]] — Anxiety, stress, and the affective cost of AI-mediated study
- [[misconceptions]] — The mental models learners bring to AI
- [[stakeholders]] — The other side of the same field: teachers, leaders, designers
- [[assessment]] — Which learner capabilities are ever made visible

## Connected Articles

- [[uneven-impact-generative-ai-student-learning-2026]] — Reliance patterns and evaluation literacy split student outcomes
- [[student-perceptions-ai-study-productivity-2026]] — Learners report efficiency gains alongside dependency concerns
- [[student-llm-interaction-taxonomy-review-2026]] — A taxonomy of learning-oriented student-LLM interaction
- [[student-ai-conversations-cognitive-engagement-2026]] — Discipline-specific patterns in student-AI chat
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Assisted performance gains without independent capability
- [[genai-performance-vs-learning]] — Why assisted performance and unassisted learning must be measured apart
- [[shaw-nave-cognitive-surrender-2026]] — Cognitive surrender as a disposition, not an accident
- [[metacognitively-discordant-completion-genai-2026]] — Learners who notice they do not understand and submit anyway
- [[verification-quality-reliance-calibration-genai-2026]] — Verification quality and reliance calibration
- [[simulating-students-llm-review-2026]] — Simulated students: architecture, mechanisms, and limits
- [[stanbkt-bayesian-knowledge-tracing]] — Parameter estimation in Bayesian knowledge tracing
- [[demographic-signals-llm-student-assessment-2026]] — Implicit and explicit demographic signals in LLM-based assessment
- [[ai-literacy-learning-engagement-psych-capital-2026]] — AI literacy, engagement, and psychological capital
- [[genai-student-experiences-uk-he-survey-2026]] — Students describe the pull of least effort
- [[mulisa-students-genai-integrity-perspectives-2026]] — Students on whether GenAI is a cheating tool or a learning partner
- [[munoz-misconduct-allegation-evidence-2026]] — What misconduct allegation files actually contain as evidence
- [[wright-transcription-not-generation-2026]] — Over-inclusive AI rules and the students they catch
- [[sharma-judgment-visible-genai-assessment-2026]] — Integrity as evaluative judgment rather than compliance
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Remote proctoring's emotional and equity costs for students
