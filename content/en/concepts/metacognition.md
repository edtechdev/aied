---
title: Metacognition
created: "2026-05-07T10:44:35-04:00"
updated: "2026-09-25T21:56:00-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai, llm]
assessment: [formative-assessment]
connected_faqs: [reducing-over-reliance, study-with-ai, asynchronous-online-courses-ai]
audience: [learners]
level: [k 12, higher ed]
confidence: high
reviewed_by: [editor]
---

> Metacognition — thinking about one's own thinking — is both a target of [[ai-education|AI education]] [[research-methods-aied|research]] (can AI tools develop students' metacognitive skills?) and a risk factor (AI completing tasks may suppress metacognitive practice).([[stanford-evidence-base-ai-k12-2026]])([[scheu-mobile-chatbot-journaling-motivation-2026]])

## Questions to Consider

- 'Metacognition' is thinking about your own thinking — knowing what you know, monitoring yourself, and adjusting your strategies. When you study or solve a problem, how aware are you in the moment of whether you actually understand versus just recognizing the material?
- A striking finding: students who used AI essay assistance were often unable to recall quotes from their own essays, because they hadn't engaged with the content during production. When a tool produces the output, what practice is the learner losing — and is that practice important?
- The page frames metacognition as both a target (can AI build it?) and a risk (can AI suppress it?). Could the same AI tool either strengthen or weaken a learner's metacognition depending on how it's designed or used? What determines which way it goes?
- Structured prompts that ask students to self-explain, evaluate strategies, or identify gaps preserve metacognitive demand, while AI that simply completes tasks displaces it. If you were designing an AI study tool, what would you build so that it invites reflection instead of replacing it?
- The page finds that whether AI use is metacognitively rich depends on the learner's motivation and stance as much as on the technology. Have you ever used a tool in a shallow way and then realized you learned nothing — and what was different about times you used it deeply?

## Introduction

Metacognition in education refers to learners' awareness, monitoring, and [[regulation]] of their own cognitive processes:

- **Metacognitive knowledge:** Understanding what one knows, what strategies are available, and when to deploy them
- **Metacognitive regulation:** Planning, monitoring, and evaluating one's own learning in real time

Within [[self-regulated-learning]] frameworks, metacognition is the central mechanism that enables learners to adapt strategies, recognize confusion, and seek help appropriately.([[scheu-mobile-chatbot-journaling-motivation-2026]])

How learners actually deploy metacognition around AI is shaped by more than the tool itself: [[cui-motivation-roles-metacognitive-genai-2026|Cui et al.]] find that student motivation and the interaction role they adopt shape their metacognitive [[student-engagement|engagement]] with [[generative-ai|GenAI]] — meaning whether AI use is metacognitively rich depends on the learner's stance as much as on the technology. [[miles-prompt-literacy-human-centered-genai-framework-2026|Miles, Haber-Curran and Arar (2026)]] add the [[student-ai-interaction|AI interaction]] itself as an object of that reflection: the closing step of their [[prompt-engineering|Prompt Literacy]] Cycle asks learners to examine what the process revealed about how prompts function and what assumptions shaped the response, and they make reflection and revision the phase in which authorship and critical judgment develop.

## How AI Tools Affect Metacognition

### The Suppression Risk (Stanford SCALE, 2026)

When AI completes reasoning tasks for students — solving math problems, writing essays, generating code — the student loses practice in monitoring their own understanding and selecting strategies.([[stanford-evidence-base-ai-k12-2026]])

Key findings:
- **Kosmyna et al. (2025):** Students who used AI essay assistance were **83% unable to recall quotes** from their own essays, vs. 11% for non-AI users — indicating they did not engage with the content during production.
- **Stadler et al. (2024):** General-purpose AI reduced cognitive load but produced **lower-quality reasoning** vs. traditional search, suggesting metacognitive engagement was displaced.
- **Lehmann et al. (2025):** General AI for [[cs-education|programming]] harmed understanding for low-[[prior-knowledge]] students — the students most in need of metacognitive scaffolding received answers instead.

### The Augmentation Opportunity (Scheu et al., 2026)

When AI is designed to support reflection rather than replace it, metacognition can be strengthened:

- **Learning journals** are a classic metacognitive practice: by reflecting on learning processes, students increase awareness of their cognition
- **Structured prompts** that ask students to self-explain, evaluate strategies, or identify knowledge gaps preserve metacognitive demand. CoMeT (Hou et al. 2026) gives that phrase a definition and an empirical warrant: it treats metacognitive demand as a quantity distinct from [[cognitive-offloading|cognitive load]] — what the learner must decide, state, or judge before help arrives, not simply what remains when help is withheld — and held it statistically equivalent to a tutor that withheld answers by design (p_TOST = .004) while its own support escalated and faded one rung at a time. Fading held when the learner's turn was aimed at the decision under support: turns aimed elsewhere drew a later concession 40.3% of the time against 28.8% for aimed turns, an 11.5-point difference, so what a tutor must read for is where the learner's attention sits rather than how much effort the turn displays.
- The **example-based course** in Scheu et al.'s [[conversational-ai|chatbot]] increased **perceived competence** (a metacognitive [[self-assessment]]) even when the [[llm]] assistant alone did not

- **Surfacing interaction patterns that learners cannot see.** [[student-ai-interaction-consecutive-interpreting-2026|Kuang, Li and Weng (2026)]] tracked eye movements, note-taking and speech while 22 interpreting trainees worked with a speech-recognition and machine-translation system, and found that the way students divided [[cognitive-psychology|attention]] between AI output and their own notes was invisible to them: 58.3% changed profile between task stages, and the heaviest readers of AI output scored lowest on delivery fluency and target language quality. The pedagogical consequence is that reflection has to be scaffolded by external evidence, because a learner's strategy is not introspectable — the authors argue for guiding students to describe and evaluate why they worked a given way at each stage.
- **A selective gain: metacognitive knowledge without planning and monitoring.** [[wang-genai-novice-learner-learning-by-teaching-2026|Wang et al. (2026)]] split 68 preservice teachers into a group that explained the flipped classroom to a generative AI novice learner (n=33) and a group that questioned a generative AI teacher (n=35). The novice-learner group scored higher on metacognitive knowledge and learning strategies (p < 0.001, Cohen's *d* = 0.41) but not on planning and monitoring (M = 4.01 vs. 3.78, p = 0.062), even though the same group's explanation and application scores rose (r = 0.474 and r = 0.642) while factual recall did not separate the groups (p = 0.416). The split follows the two components in the Introduction: explaining to someone who asks back built declarative awareness of what one knows, but nothing in the design made the learner set a route or check progress, which the authors attribute to task design and cognitive load rather than to the role itself. [[learning-by-teaching]] with AI is therefore a lever on metacognitive knowledge, not automatically on [[self-regulated-learning|regulation]], and the authors recommend adding explicit planning prompts and progress feedback.

## The Engagement–Motivation Distinction

Scheu et al. (2026) found a critical split:

| Dimension | LLM Assistant Effect | Course Effect |
|---|---|---|
| **Intrinsic motivation** (willingness to engage) | **No effect** | **Positive** |
| **Behavioral engagement** (amount written) | **Increasing over time** ([[feedback|feedback loop]]) | **Constant positive** |

This suggests that **metacognitive support and [[motivation]] are not identical**. The LLM assistant's [[scaffolding]] of journal entries increased how much students wrote (behavioral engagement) but did not make them *want* to write more (intrinsic motivation).([[scheu-mobile-chatbot-journaling-motivation-2026]])

## The Beliefs-vs-Experiences Distinction

[[cognitive-offloading-metacognitive-review-2026|Guo & Ye (2026)]] offer a theoretically sharper account of how metacognition governs strategy selection, distinguishing two components that operate in different phases:

- **Metacognitive beliefs** — stable, self-referential self-conceptions stored in long-term memory (e.g., beliefs about one's memory capability, or the reliability of a tool). These anchor strategy choices *before* task initiation.
- **Metacognitive experiences** — dynamic, task-specific feelings (perceived difficulty, confidence, mental workload) that drive belief *updating* during task execution.

This distinction yields the principle of **timing-component matching**: feedback that targets beliefs (e.g., comparative rankings) is most effective in the pre-task preparation phase, whereas feedback that targets experiences (e.g., immediate correctness indicators) is most effective during task execution. Abstract ranking feedback can become separated from — or overridden by — the task-specific experiences that dominate immediate decision-making, explaining why some feedback interventions fail to change behavior. This gives [[teacher-role|educators]] a phase-contingent rationale for designing metacognitive scaffolds around AI tools: calibrate beliefs before use, provide immediate task-specific feedback during use.

External support can also step in front of the judgment entirely. [[iqbal-human-genai-support-essay-revision-2026|Iqbal et al. (2026)]] had 87 EFL students revise an essay with ChatGPT 4.0, an experienced academic writing instructor, or no support, and reconstructed the strategies students used from clickstream, keystroke and mouse traces. What they chose was strongly associated with the support available (Cramér's *V* = 0.668), but not with metacognitive judgment accuracy (H(3) = 4.995, p = 0.172), which showed a marginal link only in the no-support condition (p = 0.0460). No revision strategy was associated with essay-score change (p = 0.273), yet the GenAI group improved significantly more than the other two (H(2) = 16.591, p = 0.00025, η² = 0.174), so the stronger essays did not come from better self-regulation. When a capable partner can supply the next move, metacognitive judgment stops being what selects it, and the strategy-choice account above describes the unaided learner more than the supported one. The authors' practical reading is to aim AI assistance at prompting reflection on writing strategies rather than at supplying direct help.

### Calibration is trainable: prediction + feedback

[[metacognitive-training-optimal-cognitive-offloading-2026|Ngai & Gilbert (2026)]] provide direct causal evidence that metacognitive calibration is a *trainable* skill. In two preregistered experiments (N=164, N=416), **just five practice trials pairing a performance prediction with veridical feedback** improved calibration and reduced bias. A four-group additive design isolated the causal component: **making predictions alone was ineffective; adding performance feedback drove the improvement; explicitly labeling over-/underconfidence added nothing further**. Critically, the improvement acted on *absolute* calibration — raising confidence in the underconfident and lowering it in the overconfident — so it corrected [[trust-calibration|miscalibration]] in both directions rather than shifting everyone one way (which is why signed/directional effects were null). This strengthens the "experiences not beliefs" account above and shows the *minimum viable metacognitive training*: prediction + immediate, task-specific feedback.

- **A brief reflection prompt sharpens monitoring during AI-supported decisions.** [[ren-metacognitive-awareness-genai-reliance-2026|Ren (2026)]] added three reflection prompts before finalizing answers in a three-condition experiment with 342 undergraduates: acceptance of incorrect ChatGPT advice fell from 62.4% to 39.7% (*OR* = 0.40) and awareness calibration rose (0.59 vs. 0.41), while recommendation accuracy and alignment with correct advice stayed high. Reflection made reliance more discriminative rather than uniformly defensive, which supports treating reliance as a monitoring problem rather than a question of how much AI is used.

## Implications for Tool Design

1. **Preserve the "friction" of thinking:** If AI writes the reflection, the student does not build metacognitive skill. Journaling assistants should scaffold, not author.
2. **Model metacognitive language:** The example-based course worked partly because it exposed students to proficient models' metacognitive self-talk.
3. **Separate support for motivation vs. skill:** Metacognitive skill development (course-structured) and productivity enhancement (AI-assisted) may require different design strategies.

AI may alter the **metacognitive threshold** for deciding one knows enough to answer: [[ai-advice-suppresses-ikt-suspension-2026|Marcoccia et al. (2026)]] found that mere access to AI advice suppressed people's willingness to suspend judgment under uncertainty, even with wrong advice and accuracy incentives — an effect that survived unsolicited AI output and monetary stakes.

Proactive [[agentic-ai|agentic AI]] can displace the learner's own metacognitive loop: [[agentic-ai-pedagogical-best-practice-2026|Woollaston et al. (2026)]] argue that when agents pre-fetch, initiate, and self-correct, the agent's planning, monitoring, and evaluation replace the learner's, removing the [[retrieval-spacing-interleaving|retrieval practice]] and self-monitoring that [[desirable-difficulties|desirable difficulties]] and metacognitive training depend on.

- **Mistake-based [[pedagogy]] as metacognitive training:** [[pedagogy-ai-mistakes|Hosseini (2026)]] shows that deliberately exposing students to AI-generated errors in a database design course activates metacognitive monitoring — students inspected outputs, identified errors, and revised designs rather than accepting AI output at face value. [[self-report-measures|Self-reported]] [[ai-literacy|AI literacy]] correlated weakly and negatively with objective competency (*r*=−0.39), a calibration gap the critique-refinement cycle is designed to narrow.
- **[[productive-failure|Productive failure]] engages metacognitive monitoring.** [[kim-ai-productive-failure-adult-2026|Kim et al. (2026)]] show productive-failure-based learning activates reflection on one's own attempts; [[lukesova-clue-before-correction-2026|clue-before-correction]] tasks require learners to diagnose and correct their own errors — a metacognitive activity where AI gives clues rather than answers.
- **Self-regulation buffers offloading harm but cannot cancel it.** [[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]] shows that metacognitive regulation (self-regulated writing) attenuates the negative association between deep [[cognitive-offloading|cognitive offloading]] and independent no-AI outcomes in GenAI-assisted writing (interaction B = 0.22), but does not eliminate it — a bounded-support condition pairing delegation limits with compulsory reflection about how AI suggestions were accepted/rejected produced the strongest independent performance.
- **Explanation-seeking depth predicts task quality, not recall.** [[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]] shows explanation-seeking prompts (depth) in LLM interaction predict task quality but not immediate recall, interpreting the dissociation via elaboration (comprehension) vs. retrieval practice (consolidation) — and suggesting explanation-seeking correlates with metacognitive monitoring, though retrieval demands must be added for durable retention.

- **Self-reported metacognition is a weak proxy for regulation *with* an LLM.** [[clerc-ai-literacy-workshop-llm-regulation-2026|Clerc et al. (2026)]] gave 116 [[k-12|middle-school]] students a two-hour AI literacy workshop and then measured their LLM interaction during science problems: trained students accepted underspecified prompts less often (51.5% vs. 66.7%), asked follow-up questions after a weak response far more often (59.2% vs. 27.9%, *d* = 0.80) and judged answer correctness more sensitively to prompt quality (interaction OR = 2.52). Neither a general metacognitive-awareness scale (Jr. MAI) nor GenAI self-reports predicted those behaviors or final performance (*r* = .04 and *r* = .01) — monitoring and control during [[generative-ai|generative AI]] use is task-specific, and observable behavior carries more information than the self-report instruments built to capture it.

- **Automated scoring reached the performance phase, not the planning that precedes it.** [[chen-automated-scoring-interpreting-self-regulated-learning-2026|Chen and Liu (2026)]] gave 46 interpreting students 14 weeks of weekly automated scoring with a returned score, marked errors, and a reference rendition: the automated group gained more overall (*d* = 1.03), but only monitoring during practice correlated with score gains (*r* = 0.42) while pre-learning planning sat near the scale midpoint (M = 3.01). Evaluation and reflection carried the second-highest mean (3.87 of 5) yet showed a near-zero link to gains (*r* = 0.10), so a high reflection score should not be read as productive reflection.
- **Verification literacy pays off only through metacognitive self-regulation.** [[davor-ai-supported-learning-higher-order-outcomes-2026|Davor, Larbi and Boateng (2026)]] surveyed 533 university students and found that AI verification literacy had no direct association with critical thinking or technical problem-solving; it mattered only indirectly, through metacognitive self-regulation (a full mediation pattern). [[cognitive-offloading|Cognitive offloading]] tendency ran the other way, predicting lower self-regulation (-.294) along with lower critical thinking (-.240) and problem-solving (-.312).
- **Reflection rose with AI access, and it fed reasoning rather than test scores.** [[melanou-genai-learning-dynamics-longitudinal-2026|Melanou, Beege and Kimmig (2026)]] followed three classes (N = 87) across a nine-week course, measuring at three points. Knowledge improved in all conditions with no advantage for either AI condition and no Matthew effect (BF01 = 8.70), but reflective use (checking sources and verifying AI output before adopting it) was far higher in the AI condition than the control group (M = 3.72 vs. 2.82, F(1, 40) = 20.21, p < 0.001) and predicted critical thinking (β = 0.43, p < 0.001, R² = 0.183) while predicting no knowledge gain. Reflection appeared from tool access alone rather than from scaffolding, and because its payoff lands in reasoning, a knowledge test will not register the metacognitive benefit of an AI-supported course.
- **Inside a metacognitive self-report instrument, awareness outpredicts the rest.** [[alatoai-ai-learning-environments-self-regulation-2026|Alatoai and Alshahri (2026)]] validated a 45-item measure of AI-supported STEM learning with 649 Saudi secondary students (CFI = 0.983, RMSEA = 0.019; subscale ω = 0.888–0.905) and used it to rank the components. The four dimensions explained 68% of the variance in self-regulated learning scores, with AI-based metacognitive awareness strongest (β = 0.38, p < 0.001), cognitive transfer and adaptability next (β = 0.29, p = 0.008), and creative and critical AI-STEM reasoning not significant (β = 0.14, p = 0.135). Awareness is the component that carries adaptive performance, the authors advise reporting subscales separately rather than one global score, and they reserve higher-order reasoning for reasoning-quality tasks; the measure is nonetheless self-report, so like the workshop study above it captures perceived capability rather than observed strategy use.
- **The evaluator's own monitoring is metacognitive work too.** [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026|Hoppe, Loibl and Leuders (2026)]] argue that an AI-generated diagnostic inference is not raw evidence but an interpretation already made, so teachers must integrate it with their own observations in a process they call *meta-diagnosis*, deciding deliberately whether to accept, reject, or modify it. That places a second metacognitive loop beside the learner's: not only how the student regulates thinking with AI, but how the teacher evaluates what the system claims about that thinking.

## Connected Concepts

- [[learners]] — Learners: the umbrella for the learner-side concepts
- [[self-regulated-learning]]
- [[self-assessment]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[agentic-ai]]
- [[formative-assessment]]
- [[ai-literacy]]
- [[retrieval-spacing-interleaving]] — judgments of learning and the fluency illusion that retrieval practice corrects
- [[cognitive-surrender]]

## Connected Articles
- [[powerful-learning-with-emerging-technology-2025]] — Explainability and productive struggle as metacognitive design
- [[genai-performance-vs-learning]] — the performance/learning distinction, and metacognitive laziness as offloaded evaluation (Yan et al. 2025)
- [[clerc-ai-literacy-workshop-llm-regulation-2026]] — a two-hour AI literacy workshop shifted middle-school students' LLM-interaction regulation, unlike their self-reported metacognition (Clerc et al. 2026)
- [[student-ai-interaction-consecutive-interpreting-2026]] — Student-AI Interaction in Computer-Assisted Consecutive Interpreting
- [[du-yuan-epistemic-dependence-2026]] — Epistemic dependence in AI-mediated learning (Du & Yuan 2026)
- [[pearls-epistemic-verification-2026]] — PEARLS framework for epistemic agency and verifying AI output (Wang 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — What students ask matters: LLM interaction depth, task quality, and immediate recall (Tsiligkiris 2026)
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Layer-sensitive cognitive offloading in GenAI-assisted writing (Chen 2026)
- [[lim-bannert-student-regulation-genai-chatbot-2026]] — How students regulate learning with a genAI chatbot
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — LLM-mediated help-seeking in STEM: layered, instrumental, and verified
- [[cui-motivation-roles-metacognitive-genai-2026]] — Motivation and roles in metacognitive GenAI engagement
- [[metacognitive-training-optimal-cognitive-offloading-2026]] — Metacognitive training facilitates optimal cognitive offloading (Ngai & Gilbert 2026)
- [[cognitive-offloading-metacognitive-review-2026]] — Meta-cognitive insights into cognitive offloading: mechanisms, interventions, and educational implications (Guo & Ye 2026)
- [[idea-framework-metacognitive-genai-2026]] — The IDEA framework for metacognitively regulated GenAI use
- [[haiml-human-centered-ai-metacognitive-model-2026]] — HAIML: a human-centered AI metacognitive learning model (agency & reflective learning)
- [[metacognitively-discordant-completion-genai-2026]] — Metacognitively discordant completion and aware pass-through of non-understanding
- [[ai-metacognition-stem-review]] — AI tools scaffolding metacognition in STEM
- [[ai-making-us-stupid]] — Is AI making us stupid? critique of cognitive offloading
- [[stanford-evidence-base-ai-k12-2026]] — General-purpose AI suppresses metacognition by completing reasoning
- [[young-people-learning-generative-ai-rapid-review-2026]] — Miscalibration gap and metacognitive inequity with GenAI
- [[ai-advice-suppresses-ikt-suspension-2026]] — AI advice suppresses willingness to say "I don't know", even with wrong advice and accuracy incentives
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and pedagogical best practice: the tension between automation and learning
- [[cognitive-offloading-speedup-illusion]] — Cognitive offloading and the speedup illusion in human-AI interaction
- [[lodge-loble-cognitive-offloading-2026]] — AI, cognitive offloading and implications for education (Lodge & Loble 2026)
- [[shaw-nave-cognitive-surrender-2026]] — Tri-System Theory and cognitive surrender: how AI reshapes human reasoning (Shaw & Nave 2026)
- [[pedagogy-ai-mistakes]] — The Pedagogy of AI Mistakes: Fostering Higher-Order Thinking (Hosseini 2026)
- [[kim-ai-productive-failure-adult-2026]] — Designing AI Systems to Support Productive-Failure-Based Learning
- [[lukesova-clue-before-correction-2026]] — Clue Before Correction: ChatGPT for Autonomous Language Learning
- [[miles-prompt-literacy-human-centered-genai-framework-2026]] — Reflection on the prompting process and authorship development in the Prompt Literacy Cycle (Miles, Haber-Curran & Arar 2026)
- [[learning-analytics-genai-secondary-writing-2026]] — Using Learning Analytics to Support Secondary School Students' Writing with Generative AI
- [[adaptive-scaffolding-contingency-comet-tutor-2026]] — Adaptive Scaffolding Needs Contingency: An AI Tutor That Escalates and Fades on What the Learner Does
- [[ren-metacognitive-awareness-genai-reliance-2026]] — A reflection prompt cut acceptance of incorrect AI advice and improved awareness calibration (Ren 2026)
- [[chen-automated-scoring-interpreting-self-regulated-learning-2026]] — Automated scoring reinforced monitoring but not planning, and self-reported reflection stayed unproductive (Chen & Liu 2026)
- [[davor-ai-supported-learning-higher-order-outcomes-2026]] — Verification literacy acting only through metacognitive self-regulation (Davor, Larbi & Boateng 2026)
- [[iqbal-human-genai-support-essay-revision-2026]] — External support, not metacognitive judgment accuracy, drove revision strategy choice (Iqbal et al. 2026)
- [[wang-genai-novice-learner-learning-by-teaching-2026]] — A selective gain: metacognitive knowledge rose while planning and monitoring did not (Wang et al. 2026)
- [[melanou-genai-learning-dynamics-longitudinal-2026]] — Reflective use rose with AI access and predicted critical thinking, not knowledge gain (Melanou, Beege & Kimmig 2026)
- [[alatoai-ai-learning-environments-self-regulation-2026]] — Metacognitive awareness as the strongest predictor of adaptive STEM learning (Alatoai & Alshahri 2026)
- [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026]] — From diagnosis to meta-diagnosis: teachers judging AI-generated inferences (Hoppe, Loibl & Leuders 2026)
- [[instructional-governance-design-computing-education-2026]] — Instructional Governance by Design: A Framework for AI in Computing Education
- [[skill-sustaining-reliance-reflective-ai-engagement-2026]] — Open Questions Towards Skill-Sustaining Reliance in Reflective AI Engagement
