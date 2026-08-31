---
title: Transfer of Learning
created: "2026-05-07T18:02:28-04:00"
updated: "2026-08-31T06:22:29-04:00"
type: concept
tags: [transfer-of-learning, metacognition, desirable-difficulties, k-12, intelligent-tutoring, scaffolding, cognitive-offloading]
level: [k 12]

confidence: high
---

> **Transfer of Learning** — the extent to which knowledge or skills acquired in one context (e.g., practice with an AI tool) persist and apply in a different context (e.g., independent performance without the tool). In AI in education, transfer is the central open question: whether performance gains students show *with* AI tools translate into durable learning they can demonstrate *without* them.

## Questions to Consider

- Here's a striking pattern the page documents: students often show immediate gains on AI-assisted tasks, yet those gains can vanish — or even reverse — when the AI is removed. Before reading the explanations, why do you think a tool that clearly helps in the moment could end up leaving students worse off without it?
- Recall something you learned to do with a tutor, calculator, or assistant and then had to do alone. Did the skill carry over, or did you feel dependent on the aid? What was different about the experiences that transferred well versus those that didn't?
- A common intuition is that 'practice is practice' — that doing a task with help builds the same skill as doing it alone. Where might that intuition mislead, especially when the help is an AI that completes the reasoning for you rather than guiding you through it?
- The page draws a distinction between 'effects with' a technology and 'effects of' it — performing better while using the tool versus becoming more capable without it. If you're an instructor, designer, or student, which of these is your real goal, and how would you know you'd achieved it?
- The evidence suggests that how much cognitive work you delegate matters: offloading surface tasks like grammar hurt transfer less than offloading deep reasoning and structure. Think about the last time you used AI on an assignment. Which 'layer' did you delegate, and what does your choice predict about what you'd retain?
- The page proposes conditions that might support positive transfer — pedagogical guardrails, fading support, calibration to the learner's readiness. If you were designing (or were the user of) an AI learning tool, what would you insist on so that gains while using it become durable ability without it?

Transfer of learning is a foundational concern in education research, and AI tools have made it urgent. The defining empirical pattern documented across AI in education studies is a **transfer paradox**: students using AI typically show immediate, measurable gains on tasks where AI is available, but those gains often fail to persist — or even reverse — when AI is removed and students must demonstrate understanding independently. This pattern implicates [[cognitive-offloading|Over-Reliance]], Cognitive Load Theory, and [[metacognition]] as the mechanisms at work, and connects directly to debates about [[intelligent-tutoring|AI Tutoring]] design.

### The transfer paradox

Students using AI typically show **immediate, measurable gains** on the tasks where AI is available. Yet when AI is removed:

- Effects become **mixed or negative**
- Gains often **fail to transfer** to unassessed settings
- Students may become **dependent on the tool** at the expense of independent reasoning

The evidence base, synthesized in the [[stanford-evidence-base-ai-k12-2026|Stanford Evidence Base on AI in K-12]] review, is consistent across domains:

| Study | Context | Immediate Effect | Transfer Effect | Mechanism |
|---|---|---|---|---|
| Bastani et al. (2025) | High school math | Higher practice grades | **~17% worse** on closed-book finals | General-purpose chatbot did the work |
| Chen et al. (2025) | Programming homework | Higher homework scores | **No improvement** on unassisted exams | LLM-Tutor solved problems for students |
| Lehmann et al. (2025) | Programming | More topics covered | **Harmed understanding**; widened gaps | General AI for low-prior learners |
| Stadler et al. (2024) | Academic research | Faster task completion | **Lower-quality reasoning** vs. search | Reduced cognitive engagement |
| Kosmyna et al. (2025) | Essay writing | Higher essay quality | **83% failed to recall** their own quotes | Outsourced authorship |

All five studies show a **negative or null transfer** pattern when general-purpose AI is the intervention.

### Mechanisms undermining transfer

**Metacognitive displacement.** AI completing reasoning reduces opportunities for students to monitor their own understanding and select strategies. Students who used AI were less able to explain their answers when queried. This connects to [[metacognition]] research on self-monitoring and the [[vibe-compiler-metacognition-genai-agency-2026|evidence that structured courses increase metacognitive competence while raw LLM assistants do not]].

**Germane load suppression.** General-purpose AI reduces not just extraneous (distracting) cognitive load but also *germane* load — the productive mental effort that encodes durable knowledge. Easier practice feels better but stores weaker traces. See Cognitive Load Theory and the distinction between [[stanford-evidence-base-ai-k12-2026|tutoring-specific vs general AI]].

**Over-reliance / expertise reversal.** Novices given answers do not build schemas. General AI provides answers; effective tutoring provides structured guidance. When novices are given expert-level shortcuts, learning is disrupted — the [[desirable-difficulties]] principle in reverse.

**Tool-dependent performance.** Students may optimize for the specific affordances of the AI tool ([[prompt-engineering|prompt engineering]], reliance on generated code structure) rather than building domain generalization — a form of [[cognitive-offloading-speedup-illusion|cognitive offloading]] that feels productive but displaces durable learning.

**Layer-sensitive offloading and transfer.** [[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]] directly tests Salomon, Perkins & Globerson's "effects with vs. effects of technology" distinction in GenAI-assisted writing: an eight-week quasi-experiment found open AI collaboration maximized supported-writing performance but produced the *lowest* independent no-AI near-transfer outcomes, while bounded support with reflection preserved independent competence. Deeper offloading layers (reasoning, structure) predicted worse transfer than surface layers (grammar). This is direct classroom evidence that AI's *with*-support performance gains do not transfer to *of*-support independent performance — and that the depth of delegation, not just whether AI is used, shapes transfer.

## Conditions supporting positive transfer

The limited evidence suggests transfer is possible when:

- **Pedagogical guardrails are present** — step-by-step hints, misconception targeting, [[socratic-method|Socratic questioning]] (Bastani et al., 2025 tutoring variant)
- **Traditional strategies are preserved** — note-taking paired with AI use improved retention (Kreijkes et al., 2026)
- **AI is used for [[formative-assessment|formative]], not summative, practice** — scaffolding during learning, not during assessment
- **Learner expertise is calibrated** — the tool adapts support to readiness rather than defaulting to full assistance

This aligns with [[intelligent-tutoring|AI Tutoring]] research showing that tutoring-specific tools with pedagogical guardrails outperform general-purpose chatbots, and with [[scaffolding]] principles about fading support as competence grows.

### Unanswered questions

1. **Time scale:** Does transfer improve over weeks/months of use, or does dependence deepen?
2. **Domain differences:** Is transfer better in well-structured domains (math) vs. ill-structured domains (writing)?
3. **Individual differences:** Do high-prior-knowledge students suffer less transfer loss than novices?
4. **Skill remediation:** Can explicit "AI-off" practice sessions reverse tool dependence?

### Connections to related concepts

Transfer of learning connects to [[metacognition]] (self-monitoring of understanding), Cognitive Load Theory (germane vs extraneous load), [[desirable-difficulties]] (productive struggle), [[scaffolding]] (fading support), [[cognitive-offloading|Over-Reliance]] (tool dependence), and [[sociocultural-learning]] (general-purpose AI operates outside the ZPD by completing work for students). It is the bridge between assisted performance and genuine learning — the distinction between [[stanford-evidence-base-ai-k12-2026]] and the central question for [[intelligent-tutoring|AI Tutoring]] effectiveness.

## Connected Concepts

- [[metacognition]]
- [[desirable-difficulties]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[sociocultural-learning]]
- [[intelligent-tutoring]]
- [[k-12]]
- [[self-regulated-learning]]
- [[learning-theories]]
## Connected Articles
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Layer-sensitive cognitive offloading in GenAI-assisted writing (Chen 2026)
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Deceptive overgeneralization: adaptive mastery can stop practice before learners know when to withhold an action (An, McLaren & Stamper 2026)
- [[critical-thinking-paradox-genai-learning-2026]] — The critical-thinking paradox in GenAI-integrated learning

- [[stanford-evidence-base-ai-k12-2026]]
- [[educational-llm-alignment]]
- [[cognitive-offloading-speedup-illusion]]
- [[vibe-compiler-metacognition-genai-agency-2026]]
- [[ai-tutor-safety-harms]]
- [[learnity-graphs-lifelong-learning-framework-2026]]
- [[genai-assisted-problem-posing-physics-2026]]
- [[young-people-learning-generative-ai-rapid-review-2026]] — Performance-learning distinction and durable transfer
- [[productive-failure]] — Productive Failure
- [[kim-ai-productive-failure-adult-2026]] — Designing AI Systems to Support Productive-Failure-Based Learning
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Pedagogical Steering of LLMs for Productive Failure


