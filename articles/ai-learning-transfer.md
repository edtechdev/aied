---
title: AI Learning Transfer
created: 2026-05-07
updated: 2026-05-07
type: article
tags: [efficacy-study, llm, adaptive-learning, formative-assessment, k-12, ai-assistance-reduces-persistence, ai-tutoring, scaffolding]
sources: ['raw/papers/stanford-evidence-base-ai-k12-2026.md']
confidence: medium
---

> Students using AI typically show **immediate, measurable gains** on the tasks where AI is available. Yet when AI is removed:

> The central open question in AI education research: **Do performance gains with AI tools persist when students must demonstrate understanding independently?**^[[stanford-evidence-base-ai-k12-2026]]

## The Transfer Paradox

Students using AI typically show **immediate, measurable gains** on the tasks where AI is available. Yet when AI is removed:

- Effects become **mixed or negative**
- Gains often **fail to transfer** to unassessed settings
- Students may become **dependent on the tool** at the expense of independent reasoning

This pattern is the defining risk of integrating AI into learning environments.

## Key Studies

| Study | Context | Immediate Effect | Transfer Effect | Mechanism |
|---|---|---|---|---|
| Bastani et al. (2025) | High school math | Higher practice grades | **~17% worse** on closed-book finals | General-purpose chatbot did the work |
| Chen et al. (2025) | Programming homework | Higher homework scores | **No improvement** on unassisted exams | LLM-Tutor solved problems for students |
| Lehmann et al. (2025) | Programming | More topics covered | **Harmed understanding**; widened gaps | General AI for low-prior learners |
| Stadler et al. (2024) | Academic research | Faster task completion | **Lower-quality reasoning** vs. search | Reduced cognitive engagement |
| Kosmyna et al. (2025) | Essay writing | Higher essay quality | **83% failed to recall** their own quotes | Outsourced authorship |

All five studies show a **negative or null transfer** pattern when general-purpose AI is the intervention.

### Misalignment Amplification

Hardy & Kim (2026) demonstrate that shared pretraining biases across LLMs produce behaviors poorly aligned with teaching quality and **negatively aligned** with student outcomes. Multi-model ensembles even *exacerbate* misalignment. See [[educational-llm-alignment]].

## Mechanisms Undermining Transfer

### 1. Metacognitive Displacement
AI completing reasoning reduces opportunities for students to monitor their own understanding and select strategies. Students who used AI were less able to explain their answers when queried.^[[stanford-evidence-base-ai-k12-2026]]

### 2. Germane Load Suppression
General-purpose AI reduces not just extraneous (distracting) cognitive load but also *germane* load — the productive mental effort that encodes durable knowledge. Easier practice feels better but stores weaker traces. See [[tutoring-specific-vs-general-ai]].

### 3. Over-Reliance / Expertise Reversal
Novices given answers do not build schemas. General AI provides answers; effective tutoring provides **structured guidance**. When novices are given expert-level shortcuts, learning is disrupted.^[[stanford-evidence-base-ai-k12-2026]]

### 4. Tool-Dependent Performance
Students may optimize for the specific affordances of the AI tool (e.g., prompt engineering, reliance on generated code structure) rather than building domain generalization.

## Conditions Supporting Positive Transfer

The limited evidence suggests transfer is possible when:

- **Pedagogical guardrails are present** — step-by-step hints, misconception targeting, Socratic questioning (Bastani et al., 2025 tutoring variant)
- **Traditional strategies are preserved** — note-taking paired with AI use improved retention (Kreijkes et al., 2026)
- **AI is used for formative, not summative, practice** — scaffolding during learning, not during assessment
- **Learner expertise is calibrated** — the tool adapts support to readiness rather than defaulting to full assistance

## Unanswered Questions

1. **Time scale:** Does transfer improve over weeks/months of use, or does dependence deepen?
2. **Domain differences:** Is transfer better in well-structured domains (math) vs. ill-structured domains (writing)?
3. **Individual differences:** Do high-prior-knowledge students suffer less transfer loss than novices?
4. **Skill remediation:** Can explicit "AI-off" practice sessions reverse tool dependence?

## Implications

For educators and tool designers, the provisional rule is:

> If students *can* complete a task with AI, design expectations so they *must* also demonstrate the task without it.

This may mean:
- Closed-book assessments after AI-assisted practice
- Reflective prompts requiring students to explain AI-generated content in their own words
- Strict separation between "practice with AI" and "demonstrate mastery" phases

## Connected Concepts

- [[ai-assistance-reduces-persistence]]

## Connected Articles

- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-partner-science-epistemic-vigilance]] — AI as a Partner in Learning about, Doing, and Engaging with Science: Vigilance as the Key to Productive Augmentation
- [[awareness-technological-isomorphism]] — Awareness of Technological Isomorphism: AI in Elementary Math
- [[cognitive-offloading-speedup-illusion]] — Cognitive offloading and the speedup illusion in human-AI interaction
- [[critical-engagement-code-completion]] — To Tab or Not to Tab: Measuring Critical Engagement in AI Code Completion Tools Using Behavioral Signals and Attentio...
- [[educational-llm-alignment]] — Educational LLM Alignment
- [[genai-meta-analysis-programming-learning]] — A meta-analysis of the effect of generative AI on productivity and learning in programming
- [[genai-performance-vs-learning]] — Distinguishing performance gains from learning when using generative AI
- [[hybrid-human-ai-tutoring-differentiated]] — Improving Hybrid Human-AI Tutoring by Differentiating Human Tutor Roles Based on Student Needs
- [[instructional-guidance-genai-learning]] — Role of Instructional Guidance in Generative AI-Assisted Learning
- [[llm-item-difficulty-prediction]] — Cognitive Episodes in LLM Reasoning Traces Enable Interpretable Human Item Difficulty Prediction
- [[prompt-based-programming-lesson]] — Teaching Prompt-Based Programming with LLMs: A 45-Minute Lesson with Guided Practice for End-User Programmers
- [[self-efficacy-tutoring-learning]] — Self-Efficacy and Favorability Shape Learning from Tutoring Systems and Paper Practice
- [[sequenced-ai-feedback-learning]] — Assessing the Impact and Underlying Pathways of Sequenced AI Feedback on Student Learning
- [[stanford-evidence-base-ai-k12-2026]] — Stanford Evidence Base: AI in K-12 Education
- [[structured-llm-feedback-programming]] — The Effects of Structured LLM-Generated Feedback on Programming Assignment Performance
- [[tutoring-specific-vs-general-ai]] — Tutoring-Specific vs. General-Purpose AI in Education
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning

## Citation

Education, S.S.S.I.A.H.F., |, C.F.R.C.I.P., & |, P.A.O.R. (2026). [*AI Learning Transfer*](https://scale.stanford.edu/sites/default/files/The%20Evidence%20Base%20on%20AI%20in%20K-12%20Report.pdf)
