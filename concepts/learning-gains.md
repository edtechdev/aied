---
title: Learning Gains
created: "2026-08-09T16:52:03-04:00"
updated: "2026-08-22T07:08:19-04:00"
type: concept
tags: [assessment, ai-ed-evaluation, student-experience, higher-ed, k-12]
confidence: high
---

> **Learning gains** — measurable improvements in student knowledge, skills, or competencies resulting from educational interventions, including AI-assisted instruction. In AI in education research, learning gains serve as the primary outcome measure for evaluating whether AI tools actually improve learning — not just [[student-engagement|engagement]] or satisfaction.

Learning gains are the ultimate test of any educational technology. In the wiki's research, they appear as dependent variables in [[rct|randomized controlled trials]], pre-post comparisons in quasi-experimental studies, and correlational analyses linking AI tool usage to academic outcomes.

Key findings from the wiki:

- **[[adaptive-pretesting-retention|Adaptive pretesting]]** research examines whether [[generative-ai|GenAI-enabled]] pretesting produces durable learning gains that persist beyond immediate testing.
- **[[genai-meta-analysis-programming-learning|Meta-analyses of GenAI in programming]]** find positive learning gains from structured AI use but negative effects from unguided reliance — a key distinction between productivity and durable learning.
- **[[lak2026-hint-button-unproductive-use|Hint button research]]** shows negative associations between hint abuse and learning gains — more hints correlate with less learning.
- **[[instructional-guidance-genai-learning|Instructional guidance]]** studies demonstrate that learning gains depend on HOW AI is used, not just WHETHER it's available.

### The AI-era measurement problem

A central theme in the wiki's learning-gains research is that **generative AI can inflate apparent performance without producing learning gains** — and that the choice of outcome measure determines whether this is visible. [[generative-ai-reduced-study-time-math|Research]] and [[stromberg-generative-ai-learning-penalty-secondary-2026|large-scale field data]] show a sharp divergence: AI use improves scores on AI-assisted homework while *lowering* scores on proctored, closed-book, unassisted measures. [[genai-performance-vs-learning|Performance-vs-learning research]] and [[young-people-learning-generative-ai-rapid-review-2026|rapid reviews]] therefore distinguish immediate AI-supported performance from durable learning, and treat unassisted summative measures (see [[summative-assessment]]) as the reliable signal of genuine learning gains.

### What the efficacy research shows

Across the wiki's [[rct|RCTs]], [[meta-analysis-systematic-review|meta-analyses]], and field studies, a consistent picture of **learning efficacy** (which AI interventions actually produce learning gains, and how large) emerges:

- **Meta-analytic evidence is broadly positive but conditional.** [[genai-educational-outcomes-meta-analysis|A comprehensive meta-analysis of 53 studies]] (Dong 2026) finds generative AI generally outperforms traditional approaches on academic achievement, higher-order thinking, and writing — with AI feedback particularly effective — though game-assisted GenAI shows no significant added benefit and gains vary by country and outcome. [[genai-meta-analysis-programming-learning|The GenAI-and-programming meta-analysis]] finds large productivity gains but no significant learning gain (g ≈ 0), separating task-efficiency from durable learning. [[robot-assisted-language-learning-meta-analysis-2026|A language-learning meta-analysis]] finds positive but modest learning gains from AI-enhanced embodied robots.
- **Well-designed AI tutors produce real gains.** A two-year cluster RCT ([[one-click-away-khanmigo-two-year-school-experiment-2026|Khanmigo]]) found AI tutoring raised math achievement ~1.3 national percentile ranks per term (~0.06–0.08 SD/school year, ~0.14 SD for a full year), gains resembling practice without AI — demonstrating that *engagement*, not model capability, is the binding constraint. [[making-ai-tutoring-productive-mastery-math-2026|NUMI]] showed AI support improved next-attempt correctness after mistakes with more time per question — a "productive slowdown" that builds durable mastery. [[virtual-tutoring-computer-assisted-learning-takeup-2026|Virtual tutoring]] found the binding constraint is take-up and sustained participation, not tutor quality.
- **AI can match human help.** [[chatgpt-hints-human-tutor-learning-gains-2024|ChatGPT-generated help]] produces learning gains equivalent to human tutor-authored help on mathematics skills — evidence that generative AI can be as efficacious as human scaffolding when used appropriately.
- **Unguarded AI can harm learning.** The guardrail RCT ([[generative-ai-guardrails-harm-learning|PNAS 2025]]) found an unguarded ChatGPT-style tutor raised assisted practice +48% but *reduced* unassisted exam scores −17%, while a guardrailed (hint-not-answer) tutor eliminated the harm. This is the sharpest demonstration that **learning efficacy is design-contingent**: the same class of tool can be a strong learning gain or a net harm depending on how it is configured.
- **Perceived vs. actual efficacy diverge.** [[ai-literacy-assessment-misalignment|Self-reported performance misaligns with measured performance]], and [[absent-cognitive-baseline-2026|the absent cognitive baseline]] shows AI-native students overestimate their learning — so efficacy claims based on self-report are unreliable without objective outcome measures.

**Takeaway:** the weight of evidence supports **modest, conditional, and design-dependent learning gains** from AI — real when AI is structured to coach rather than answer, guardrailed, and paired with unassisted outcome measures, and absent or negative when it substitutes for the learner's own effort. This is why learning gains as an outcome must be measured with valid, AI-resistant instruments and why [[ai-ed-evaluation]] pairs efficacy claims with methodological scrutiny.

### A field-level map of AI's effects on learning and achievement

The wiki's corpus — meta-analyses, RCTs, quasi-experiments, and field studies — supports a nuanced, sometimes contradictory picture. Findings cluster into positive, negative, and conditional effects.

**Positive effects (AI can produce genuine learning gains):**
- **Meta-analytic evidence is broadly positive but conditional.** [[genai-educational-outcomes-meta-analysis|A 53-study meta-analysis]] (Dong 2026) finds generative AI generally outperforms traditional approaches on academic achievement, higher-order thinking, and writing, with AI feedback especially effective. A meta-analysis of 29 experiments ([[zhao-genai-higher-order-thinking-meta-2026]]) finds a moderate positive effect on higher-order thinking, strongest for problem-solving, but limited for creativity.
- **Tutoring-specific AI reliably outperforms general-purpose AI.** [[tutoring-specific-vs-general-ai|The Stanford SCALE review]] and the umbrella review ([[genai-higher-education-systematic-review-2026]]) converge: pedagogically designed agents with hints and step-by-step scaffolding produce real gains where open chatbots often do not.
- **Well-designed AI tutors produce real, measurable gains.** The two-year Khanmigo RCT ([[one-click-away-khanmigo-two-year-school-experiment-2026]]) raised math achievement ~1.3 national percentile ranks per term; [[making-ai-tutoring-productive-mastery-math-2026|NUMI]] improved next-attempt correctness after mistakes; [[virtual-tutoring-computer-assisted-learning-takeup-2026|virtual tutoring]] showed take-up is the binding constraint.
- **AI can match human help.** [[chatgpt-hints-human-tutor-learning-gains-2024|ChatGPT-generated help]] produces learning gains equivalent to human tutor-authored help on math skills.
- **Feedback-focused AI works.** [[genai-educational-outcomes-meta-analysis|AI feedback]] is among the most effective GenAI applications; [[ai-feedback-critical-thinking-writing-2026|AI feedback for writing]] improves critical thinking when coupled with instruction.
- **Structured scaffolds yield gains.** [[scaffolding-srl-feedback-genai-human-peers|Scaffolded self-regulated feedback]] and [[learner-ai-interaction-patterns-oop|interaction design]] show small but significant gains when AI is designed to coach.
- **AI in collaborative and problem-based contexts helps when structured.** [[ai-enhanced-pbl-chatgpt-scaffolding-2026|AI-enhanced PBL]], [[ai-assisted-collaborative-learning-model-dbr|AI-assisted collaborative learning]], and [[ccct-cooperative-learning-technique|AI-designed cooperative techniques]] report meaningful gains.

**Negative effects (AI can reduce or fail to improve learning):**
- **Unguarded AI can harm learning.** The PNAS guardrail RCT ([[generative-ai-guardrails-harm-learning]]) found an unguarded ChatGPT-style tutor raised assisted practice +48% but *reduced* unassisted exam scores −17%; guardrails eliminated the harm.
- **Faster completion ≠ learning.** [[generative-ai-reduced-study-time-math|GenAI reduced study time]] on math problems and the knowledge they build; [[genai-performance-vs-learning|performance-vs-learning research]] shows AI inflates AI-assisted performance while lowering proctored, closed-book, unassisted scores.
- **Homework outsourcing harms learning.** [[stromberg-generative-ai-learning-penalty-secondary-2026|Field data]] show a generative-AI learning penalty when students outsource homework.
- **LLM reliance correlates with lower grades.** [[jost-llm-programming-education-learning-outcomes|Jošt et al.]] found significant negative correlations between LLM use for code generation (rho = −0.305) and debugging (rho = −0.360) and final grades.
- **AI can harm teaching and achievement for some.** [[genai-can-harm-teaching-rct-2026|A teacher-facing GenAI RCT]] found below-median teachers' students lost ground (−0.129 SD).
- **Hint abuse correlates with less learning.** [[lak2026-hint-button-unproductive-use|Hint button research]] shows more hints, used unproductively, correlate with less learning.
- **Meta-analytic programming gains are illusory.** [[genai-meta-analysis-programming-learning|The GenAI-and-programming meta-analysis]] finds large productivity gains but no significant learning gain (g ≈ 0), separating task-efficiency from durable learning.

**Conditional and mixed effects (context determines direction):**
- **Design is decisive.** The same tool class can be a strong gain or a net harm depending on configuration ([[generative-ai-guardrails-harm-learning]], [[tutoring-specific-vs-general-ai]]).
- **How AI is used matters more than whether.** [[jost-llm-programming-education-learning-outcomes|Use for explanations was benign; use for code generation was harmful]]; [[genai-over-reliance-learning-2026|over-reliance]] erodes gains.
- **Duration and self-regulation moderate effects.** [[zhao-genai-higher-order-thinking-meta-2026|Effects were strongest at 8–16 weeks]] and for learners with higher self-regulated-learning.
- **AI-IBL supports creativity but not necessarily problem-solving.** [[mujib-ai-ibl-creative-math-2026|Mujib et al.]] improved creative performance and attitudes but not critical problem-solving.
- **Student experience diverges from measured gains.** [[absent-cognitive-baseline-2026|AI-native students overestimate their learning]], and [[ai-literacy-assessment-misalignment|self-report misaligns with performance]] — perceptions of gains are not reliable evidence of them.

### Measuring what matters

Learning gains connect to [[assessment-validity]] — if assessments fail to capture deeper understanding, learning gain measures are misleading. They also intersect with [[cognitive-offloading|Over-Reliance]] and [[cognitive-offloading]], where apparent performance improvements may mask learning losses, and with [[rct]] (randomized trials as the gold-standard design for detecting causal learning gains), and with [[meta-analysis-systematic-review]] (pooling effect sizes across studies to establish the field's efficacy evidence).

- **Significant pre/post gains from mistake-based AI pedagogy:** [[pedagogy-ai-mistakes|Hosseini (2026)]]'s database design course (n=13) showed large, significant learning gains on identical pre/post items (mean 4.25→6.83/7, Cohen's *d*=1.49, *p*<.001), with gains uncorrelated with prior AI or database confidence — the AI-integrated critique-refinement design benefited students regardless of initial perceptions.
## Connected Concepts

- [[rct]]
- [[meta-analysis-systematic-review]]
- [[formative-assessment]]
- [[summative-assessment]]
- [[cognitive-offloading]]
- [[math-education]]
- [[human-in-the-loop-ai]]
- [[affective-tutoring]]
- [[theory-development-aied]] — Theory Development in AI in Education
## Connected Articles
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Virtual tutoring with CAL: an experiment in take-up and learning
- [[making-ai-tutoring-productive-mastery-math-2026]] — Making AI tutoring productive: mastery-based math practice
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo in a two-year school experiment
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — The StudyChat dataset of student–LLM dialogues in an AI course

- [[ai-literacy-assessment-misalignment]] — AI Literacy Assessment: Self-Reported vs Performance Misalignment
- [[generative-ai-reduced-study-time-math]] — Faster Completion, Less Learning: Generative AI Reduced Study Time on Math Problems and the Knowledge They Build
- [[genai-meta-analysis-programming-learning]] — A meta-analysis of the effect of generative AI on productivity and learning in programming
- [[chatgpt-hints-human-tutor-learning-gains-2024]] — ChatGPT help produces learning gains equivalent to human tutor help
- [[generative-ai-guardrails-harm-learning]] — Generative AI without guardrails can harm learning (PNAS 2025 RCT)
- [[absent-cognitive-baseline-2026]] — The Absent Cognitive Baseline: Theorizing a Structural Gap in AI-Native College Students' Academic Self-Assessment
- [[oecd-digital-education-outlook-2026]] — OECD Digital Education Outlook 2026
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows

- [[robot-assisted-language-learning-meta-analysis-2026]] — Meta-analysis of AI-enhanced embodied robot-assisted language learning
- [[genai-educational-outcomes-meta-analysis]]
- [[young-people-learning-generative-ai-rapid-review-2026]] — Immediate performance vs durable learning distinction
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — The generative AI learning penalty: homework outsourcing harms learning

- [[ba-ai-agents-cscl-review-2026]] — AI agents in computer-supported collaborative learning review
- [[ai-assisted-collaborative-learning-model-dbr]] — AI-Assisted Collaborative Learning model DBR (critical thinking +24.1%, problem-solving gains)
- [[research-methods-aied]] — Research Methods in AIED (DBR section)
- [[tutoring-specific-vs-general-ai]] — Tutoring-specific vs general AI
- [[jost-llm-programming-education-learning-outcomes]] — LLM reliance and grades in coding (negative correlations)
- [[genai-can-harm-teaching-rct-2026]] — Generative AI can harm teaching (RCT)
- [[stanford-evidence-base-ai-k12-2026]] — Stanford evidence base on AI in K-12
- [[zhao-genai-higher-order-thinking-meta-2026]] — GenAI and higher-order thinking meta-analysis
- [[mujib-ai-ibl-creative-math-2026]] — AI-supported IBL and creative math performance
- [[ai-enhanced-pbl-chatgpt-scaffolding-2026]] — AI-enhanced PBL scaffolding gains
- [[ccct-cooperative-learning-technique]] — AI-designed cooperative learning technique
- [[scaffolding-srl-feedback-genai-human-peers]] — Scaffolded self-regulated feedback gains
- [[learner-ai-interaction-patterns-oop]] — Interaction patterns and learning gains in OOP
- [[ai-feedback-critical-thinking-writing-2026]] — AI feedback and critical thinking in writing
- [[pedagogy-ai-mistakes]] — The Pedagogy of AI Mistakes: Fostering Higher-Order Thinking (Hosseini 2026)
- [[social-emotional-learning]] — Social-Emotional Learning

