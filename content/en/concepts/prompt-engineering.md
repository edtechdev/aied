---
title: Prompt Engineering
created: "2026-07-28T10:44:35-04:00"
updated: "2026-09-30T12:20:22-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, llm, prompt-engineering]
audience: [learners]
level: [higher ed]
confidence: high
connected_resources: [edugems, matt-pocock-skills, pedagogical-promptbook, writing-rhetoric-studies-in-the-loop]
reviewed_by: [editor]
---

> **Prompt engineering** — the practice of designing and refining inputs to large language models to achieve desired outputs. In education, prompt engineering serves dual roles: as a learner skill (students must learn to prompt effectively) and as a system design lever (developers craft prompts that shape [[intelligent-tutoring|AI tutoring]] behavior).

## Questions to Consider

- You've likely typed a prompt into an AI tool recently. Now consider this: the way you phrased it isn't neutral — it may reveal how you planned, thought, and allocated your effort. What might your own prompting habits say about how you approach problems?
- A study found that users who phrase requests skillfully systematically get better output than those expressing the same intent less adroitly. If you accept that 'prompt privilege' is real, is fair access to AI best fixed by [[teacher-role|teaching]] everyone to prompt better, or by redesigning the system to not demand that skill — and what are the trade-offs of each?
- Is prompting a 'trick' to be memorized, or a genuine intellectual skill? One line of [[research-methods-aied|research]] treats it as professional judgment within a discipline (journalism, law, [[medical-education|medicine]]); another treats it as a core of AI literacy. Which view aligns with your own experience of what actually separates good prompts from bad ones?
- Well-designed prompts can scaffold student thinking, while poorly used ones can encourage cognitive offloading. Can you recall a moment when an AI answer did the thinking for you? What about the prompt — or your intent — made that happen, and could it have been designed to do the opposite?
- Prompting is both a learner skill and a system-design lever: some tutors now automatically route and select prompts for the user. As prompting moves from the user to the system, what do students lose — and what do they gain?
- Set a small goal before you read: after learning about prompt engineering, decide on one concrete way you'll change how you write prompts in your own work, and what result you'll check to know it worked.

## Introduction

Prompt engineering is central to effective [[generative-ai]] use in education. Unlike traditional programming interfaces, LLMs respond to natural language — but the quality, accuracy, and [[pedagogy|pedagogical]] value of those responses depend heavily on prompt design. Research in this knowledge base reveals that prompting is not a neutral act: it reflects how students think, plan, and allocate cognitive effort. [[miles-prompt-literacy-human-centered-genai-framework-2026|Miles, Haber-Curran and Arar (2026)]] sharpen what the term covers by distinguishing prompt engineering, the technical optimization of inputs for performance, from prompt literacy, the rhetorical, ethical and reflective work of clarifying purpose, reading output critically and revising with stated reasons. Their Prompt Literacy Cycle (Clarify Purpose, Craft the Prompt, Engage with Output, Refine the Prompt, Reflect) and a sample process rubric make the distinction teachable, and they argue that instruction which optimizes outputs alone leaves the ethical and epistemological dimensions of LLM use untouched.

### How prompt engineering appears in the research

- **Prompting as cognitive trace:** [[misiejuk-cognitive-offloading-prompting-2026|Misiejuk et al.]] show that prompt patterns reveal [[cognitive-offloading|cognitive offloading]] — high-quality work uses context-rich, polite, and instructional prompts; low-quality work shows reactive disagreement without domain grounding

- **Depth improves the product, not the retention.** In 22 postgraduates, the share of explanation-seeking ("why/how/explain") prompts predicted independently marked task quality (β = 6.27) beyond baseline knowledge and prompt volume, yet showed a null association with immediate recall ([[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]]).

- **Prompt cognition tracks the discipline, not the student.** [[student-ai-conversations-cognitive-engagement-2026|Chang and Li (2026)]] classified 60,087 prompts from 116 courses and found Bloom-level profiles differed by discipline — STEM Apply-prevalent (20.8%), social science Create-prevalent (33.8%) — with course-level variance exceeding student-level variance.
- **Prompting as literacy:** [[tracing-genai-literacy-interaction-patterns|Tracing GenAI literacy]] and [[aaai2026-prompting-literacy-k12|K-12 prompting literacy]] research frame prompting as a core [[ai-literacy]] component
- **Novices default to trial and error, and blame the model.** In a text-linguistics seminar, ten genAI novices refined prompts by trial and error, rarely reached for in-context examples, and overwhelmingly attributed poor outputs to the LLM rather than their own prompt formulation ([[llms-text-linguistics-teaching-2026|Brocca & Garassino (2026)]]).


- **When the instructor models the prompt, students reuse it verbatim.** Among 310 recorded prompts from twelve middle-school STEAM groups, exact copying of the instructor's instruction was the most frequent student standpoint at 47.1%, ahead of spontaneous inquiry at 28.7% ([[middle-school-genai-steam-interactions-2026|Zhao & Li (2026)]]).

- **A regulatory cycle beats a prompt formula.** In a quasi-experimental pilot with 42 undergraduates, students taught the IDEA cycle (Intent, Deconstruction, Expression, Adaptation) produced higher-quality prompts and outputs than peers taught Role–Task–Context–Format prompting in all five task categories (adjusted prompt gains of +11.77 to +29.19 points) ([[idea-framework-metacognitive-genai-2026|Wang et al., 2026]]).
- **Prompting as system design:** [[cotal-formative-assessment-scoring-2026|CoTAL]] uses [[human-in-the-loop-ai|human-in-the-loop]] prompt engineering for [[formative-assessment|formative assessment]] scoring; [[choi-anchor-aes-prompting-2025|anchor-based prompting]] improves [[automated-essay-scoring|automated essay scoring]]

- **Prompting is the entry skill, not the discipline.** Gorsky (2026) frames [[ai-literacy]] for software professionals as the ability to manage [[agentic-ai|agents]] rather than to prompt them, naming framing, specification, context engineering, verification, multi-agent orchestration and auditability as the skills a curriculum must assess ([[ase-26-agentic-software-engineering-curriculum|Gorsky (2026)]]).
- **Adaptive prompt routing:** [[learning-to-prompt-adaptive-tutoring|Learning to Prompt]] treats prompt selection as part of the tutoring system itself — subject-aware prompt routing over 14 pedagogical features, where a stochastic router selects the best prompt per conversation. This shifts prompting from a learner skill into an adaptive system-design lever, improving [[student-engagement|engagement]] and efficiency (28.1% vs 19.6% exercise conversion in a real-world A/B test).
- **Prompt modalities:** [[voice-text-prompt-problems-computing-education|Voice vs. text input research]] examines whether prompting modality affects [[learning-gains|learning outcomes]]

- **Prompting beyond text — scientific illustration.** Prompting can generate molecular and physical-chemistry figures quickly, but a locally persuasive rendering can still be wrong or carry representational bias, so students must interrogate AI-generated visualizations against chemical principles rather than trust them ([[unesco-ai-guidelines-chemical-education-2026|Li et al. (2026)]]).
- **Scaffolded prompting:** [[guided-llm-scaffolding-independent-learning|Guided LLM scaffolding]] and [[scaffolding-critical-engagement-genai-minority-students|critical engagement scaffolding]] teach structured prompting as a learning intervention

- **Coach prompting with fading support:** in ARPG+, a real-time coach diagnosed prompt quality across six dimensions and faded support as competence grew, lifting final prompt quality to 7.82 against 5.95 for static templates and 4.52 with no assistance ([[ye-arpg-real-time-coaching-llm-prompting-2026|Ye et al. (2026)]]).
- **Task decomposition has an optimum:** generating tutor-training lessons in three segments produced the highest-rated lessons (mean 14.67) while a single pass scored lowest (10.67) and five segments fell back below three — moderate decomposition beats both extremes ([[lin-llm-interactive-lesson-generation|Lin et al. (2025)]]).
- **Prompt privilege and equity:** [[prompt-privilege-equitable-ai-access-2026|Jin et al.]] show prompting expertise is unevenly distributed — users who phrase requests skillfully systematically get better output than those expressing the same intent less adroitly. Their Prompt Equity Transformer shifts prompt optimization from the user to the AI system, arguing that [[equity-in-ai-education|equitable]] output should be engineered into the model rather than demanded of novices.
- **Prompt refinement plateaus; fine-tuning takes over from there.** Iterative prompt design yielded diminishing item-quality gains in L2 listening [[assessment]], but fine-tuning GPT-4.1 on the optimized prompt — the prompt held constant — produced more contextually grounded and balanced items, isolating model adaptation rather than prompt craft as the next lever ([[gpt-item-generation-l2-listening-2026|Aryadoust & Wong, 2026]]).

- **Prompting as [[situated-learning|situated]] professional judgment.** Beyond literacy and system design, prompting can be framed as a *disciplinary practice*. The [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026|Dierickx et al. taxonomy]] for journalism treats task definition and prompting as a form of professional judgment exercised within a domain's epistemic and ethical norms — translating journalistic work into explicit tasks (newsgathering → sensemaking → editing → publication/distribution) makes assumptions, priorities, and [[ethics|ethical considerations]] visible, and turns prompting into a pedagogical tool for critical AI literacy. Its logic transfers to other knowledge-intensive professions (law, medicine, public policy).
- **Prompt design as instructional specification.** Neto and colleagues (2026) find in their [[meta-analysis-systematic-review|systematic review]] of GenAI in healthcare education that prompt design functions as a form of instructional specification, encoding the cognitive targets and quality criteria implicit in expert authoring — yet only 34.8% of studies aligned generated content with instructional frameworks and only 34.8% reported prompting in enough detail to reproduce. Looi, Liu, and Sun (2026) further show how prompt architecture can embed pedagogical rules (correctness gates, anti-spoiler boundaries, goodbye gates) to constrain [[llm]] tutoring behavior in procedural domains.
- **Rubric-guided and role-aware prompting.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] showed that rubric-guided prompting — treating the rubric as a semantic interface between human pedagogical intent and machine inference — drove LLM–human agreement on student design work from 54.75% to 81.25% (Cronbach's Alpha 0.393 → 0.798). Rubrics engineered for LLMs must balance precision and flexibility: too vague invites free interpretation, too rigid reduces the model to pattern-matching. Role-aware prompting — evaluating the same artifact under instructor, peer-reviewer, and grant-reviewer prompts — produced qualitatively distinct, epistemically different feedback, showing that prompt design shapes not just accuracy but the evaluative stance of the output.
- **Prompt scaffolding can move a model further from the teacher.** [[llm-feedback-focus-adaptivity-student-writing-2026|Almousa et al. (2026)]] had seven models produce paragraph-level writing feedback under three prompting strategies and found that adding category names or worked examples increased divergence from the teacher distribution for most of them, improving only Mistral-7B (0.2695 to 0.2398). The zero-shot baseline stayed closest, so focus-type instructions are something to test rather than assume.
- **Context-aware prompting for assessment.** Context-aware prompting of pre-trained language models automates the coding of [[collaborative-learning|collaborative problem-solving]] skills from process data, modeling dependencies between behavior codes and fusing cognitive and social abilities. This enables structured CPS analysis at scale and in real time, overcoming the labor intensity of manual coding schemes.
- **Role-based templates and quality rubrics for teacher planning.** [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo and Tahir (2025)]] empirically develop a prompt framework for children's STEAM arts [[curriculum-design|lesson planning]] that pairs a Role (R) – Instructions (I) – End Goal (E) template (adapted from RISEN) with a "four points and one line" optimization rubric — standardized, practical, engaging, and complete, plus an extension dimension. Applying the rubric to critique and refine prompts kept generated plans acceptable to practicing art teachers (mean ratings above 4/5) while exposing recurring gaps ([[personalized-learning|personalization]], [[pedagogical-safety|child-safety]] constraints, cultural bias) that plain one-shot prompting left unaddressed — showing prompt templates plus explicit evaluation criteria function as a quality-control scaffold for classroom generation.

- **Role and constraint design as the independent variable.** [[wang-teacher-student-centered-agents-physics-2026|Wang et al. (2026)]] compare two agents built on the same model and platform at temperature 0.3 whose only difference is how the prompt specifies role, skills, and constraints: an expert teacher agent answering from a bounded textbook knowledge source versus an empathic student-centered agent scripted to diagnose [[misconceptions]] and check comprehension. The role difference alone shifted learning performance, cognitive load, flow experience, and perceived empathy, showing that role specification is an instructional-design decision with measurable effects rather than a stylistic flourish ([[pedagogical-agent]]).
### Connections to broader concepts

Prompt engineering connects to [[scaffolding]] — well-designed prompts can scaffold student thinking rather than bypass it. It intersects with [[metacognition]] and [[ai-literacy]], as effective prompting requires understanding both the AI's capabilities and one's own learning goals. The [[cognitive-offloading]] research directly links prompt quality to whether AI use supports or undermines learning.

- **Writing skill drives prompting, and both predict [[vibe-coding]] success.** In a preregistered CHI 2026 study (N=100), [[vibe-coding-writing-cs-achievement-2026|Thorgeirsson, Weidmann & Su]] found that written-communication proficiency predicted GUI-oriented vibe-coding performance (r = .29), with human-graded prompt quality *mediating* the link — response-process evidence that clear, structured prose translates into better natural-language programming prompts. Both writing skill and [[cs-education|CS achievement]] were independent predictors, and CS achievement (r = .39) carried roughly twice the unique variance, so improving prompting alone is unlikely to fully substitute for programming fundamentals in LLM-native development.
- **Prompting strategy predicts performance.** An [[isaza-chatgpt-engineering-prompting-2026|empirical study of 128 engineering students]] found that AI Query Efficiency (clear, well-structured prompts) and AI-Driven [[problem-solving]] (strategic integration of AI output into reasoning) were the strongest predictors of academic success — even after controlling for GPA — indicating prompting is a teachable skill that shapes how effectively students learn with AI.
- **Prompting style, not just prompt quality, tracks outcomes.** Traits derived from 1,540 tutoring sessions linked conceptual questioning to exam performance while task-delegation behaviors correlated negatively — but the same traits failed to replicate the following semester, so they are behavioral patterns rather than stable skills ([[principal-trait-analysis-human-ai-skills-2026|McNichols, Du and Lan (2026)]]).
- **A usable taxonomy, and which prompt categories actually pay off.** [[teacher-ai-literacy-prompt-feedback-quality-2026|Jacobsen et al. (2026)]] translate technical strategies into the 3K model (*Kontext, Kernauftrag, Klarheit* — context, core task, clarity): eleven practice-oriented categories, each with a good/average/suboptimal rubric, and each tested as an experimental variation on feedback generated for pre-service teachers' learning goals. Domain-specific technical language was the decisive category — replacing subject terminology with everyday paraphrases significantly reduced feedback quality across three models (β = −0.412) — while adding concrete examples and removing the chain-of-thought instruction produced no significant difference from the baseline in the first study; examples did help once the analysis was rerun with the best-performing model-prompt combinations (β = 0.52). Prompt quality and model choice together explained 42.8% of the variance in rated feedback quality, which is the paper's case that prompt engineering is a measurable and teachable competency rather than a stylistic preference — and that its categories are not interchangeable in effect size.

## Connected Concepts
- [[vibe-coding]]
- [[guardrails]]
- [[scaffolding]]
- [[ai-literacy]]
- [[agentic-ai]]
- [[metacognition]]
- [[curriculum-design]]
- [[cognitive-offloading]]
- [[writing-education]]
- [[k-12]]
- [[generative-ai]]
- [[learning-design]]
- [[cs-education]]
- [[higher-ed]]
- [[ai-technologies]] — Umbrella: AI technologies and techniques (models, LLM training, robotics, RAG, agentic)

## Connected Articles
- [[wang-teacher-student-centered-agents-physics-2026]] — Agent role and constraint prompts as the design variable in physics learning (Wang et al. 2026)
- [[gpt-item-generation-l2-listening-2026]] — Prompting vs. fine-tuning for GPT-based L2 listening item generation (Aryadoust & Wong 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — What students ask matters: LLM interaction depth, task quality, and immediate recall (Tsiligkiris 2026)
- [[ye-arpg-real-time-coaching-llm-prompting-2026]] — ARPG+: real-time coaching for educational LLM prompting
- [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026]] — Task-based taxonomy of LLM tasks for critical AI literacy in journalism
- [[prompt-privilege-equitable-ai-access-2026]] — Prompt Privilege: measuring & mitigating accessibility disparities in LLM access
- [[principal-trait-analysis-human-ai-skills-2026]] — Principal Trait Analysis: data-driven traits of human-AI collaboration
- [[llms-text-linguistics-teaching-2026]] — LLMs in text linguistics teaching
- [[idea-framework-metacognitive-genai-2026]] — The IDEA framework for metacognitively regulated GenAI use
- [[lin-llm-interactive-lesson-generation]] — LLM generation of interactive tutor-training lessons (Lin et al. 2025)
- [[aaai2026-prompting-literacy-k12]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[choi-anchor-aes-prompting-2025]]
- [[guided-llm-scaffolding-independent-learning]]
- [[learning-to-prompt-adaptive-tutoring]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[unesco-ai-guidelines-chemical-education-2026]] — UNESCO AI guidelines translated to chemical education; epistemic drift
- [[isaza-chatgpt-engineering-prompting-2026]] — Prompting behaviors predict engineering student performance
- [[student-ai-conversations-cognitive-engagement-2026]] — Discipline-associated Bloom-level cognitive engagement in student-AI conversations (Chang & Li 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[miles-prompt-literacy-human-centered-genai-framework-2026]] — Prompt engineering vs prompt literacy: a five-phase human-centered GenAI engagement framework with a five-step Prompt Literacy Cycle (Miles, Haber-Curran & Arar 2026)
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] — Prompt engineering and model selection as predictors of AI-feedback quality (Jacobsen et al. 2026)
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing

- [[middle-school-genai-steam-interactions-2026]] — Middle-school STEAM groups copied the instructor's instruction verbatim in 47.1% of prompts