---
title: "CyberAGENTS: Structured Autonomy for Agentic Gamified Learning in Cybersecurity"
created: "2026-08-13T09:28:20-04:00"
updated: "2026-08-24T05:00:37-04:00"
type: article
tags: [agentic-ai, cs-education, pedagogical-safety, llm, professional-training, generative-ai]
discipline: [cs education]
sources: ['raw/papers/2608.07965.md']
confidence: high
---

> **Synthesis:** Hornung et al. (2026) present **CyberAGENTS**, an agentic framework for gamified cybersecurity learning that enables *structured autonomy* through ontology-guided validation, schema-governed behavioral control, and competency-based progression. The learning loop is decomposed into four specialized agents — challenge, support, evaluation, reward — each governed by behavioral schemas that bound autonomy without eliminating generative flexibility, while a cybersecurity ontology validates all generated content before display. Classroom deployment with 24 undergraduates, complemented by expert evaluation and an LLM-as-judge ablation, found improved [[student-engagement|engagement]], clearer [[feedback]] interpretation, and greater learner [[trust]] in AI-generated responses when behavioral schemas and ontology validation are active. The work positions *structured autonomy* as a design and ethical principle for [[pedagogical-safety|safe, pedagogically aligned]] [[agentic-ai|agentic education]] systems, and connects to [[cs-education]], [[game-based-learning]], and [[generative-ai]] themes.

## Background: Gamified Cybersecurity Learning

Gamification is especially effective in learning domains requiring active problem-solving and iterative skill-building, such as [[cs-education|cybersecurity education]]. Through progressive challenges, adaptive instructional support, structured feedback loops, and reward progression, gamified design enhances cognitive engagement and retention, particularly in practice-driven domains. [[active-learning|Active learning]] matters here because cybersecurity concepts are abstract, adversarial, and high-stakes, and traditional lecture-driven instruction rarely supplies iterative reasoning practice or timely corrective feedback.

[[generative-ai|Generative AI]] agents offer a path to delivering such [[game-based-learning|gamified experiences]] adaptively at scale, but they introduce well-documented risks in educational settings: inconsistent behavior, [[hallucination-risk|hallucinated reasoning]], and misalignment with pedagogical frameworks. Unconstrained [[agentic-ai|multi-agent systems]] can produce conflicting feedback or pedagogically misaligned behavior, and dynamic prompting without explicit control can lead to instructional drift. Grounding these systems in [[learning-theories|learning science]] is therefore essential. CyberAGENTS addresses the central tension — bounding agentic autonomy while preserving generative flexibility — through three layered control components: competency-based progression, schema-governed behavioral control, and ontology-guided validation.

## Competency-Based Progression

CyberAGENTS begins by extracting structured competencies from course materials using a cybersecurity-specific competency schema. The extractor identifies key entities such as tools, techniques, concepts, attacks, vulnerabilities, and defenses; assigns difficulty levels from Beginner to Expert; and maps instructional relations relevant to gameplay — prerequisites, concept clusters, and learning enablers. The resulting competency [[knowledge-graph|graph]] encodes topical coverage and progression structure, serving as the initialization blueprint for challenge generation.

This competency-based progression keeps gameplay [[curriculum-design|curriculum-aligned]] from the outset. Rather than sampling arbitrary prompts, the system draws on a leveled representation of domain knowledge, letting challenge progression follow explicit instructional structure. This is especially important in cybersecurity education, where conceptual dependencies and difficulty progression must be carefully managed to avoid cognitive overload or fragmented learning. In this way the design operationalizes [[scaffolding|scaffolded instruction]], sequencing tasks by [[prior-knowledge|prior knowledge]] and prerequisite relationships.

## The Agentic Learning Loop

Gamification in CyberAGENTS is operationalized through a structured multi-agent learning loop. Instead of a single generative model improvising across multiple instructional functions, the framework decomposes gameplay into four specialized [[pedagogical-agent|pedagogical agents]]: ChallengeAgent, BuddyAgent, CriticAgent, and RewardAgent. Together they enact the cycle of challenge → learner attempt → evaluation → progression.

At runtime, a central orchestrator coordinates these agents and maintains shared state across turns, including topic, difficulty, hint usage, feedback history, and XP trajectory. This shared state preserves coherent progression while adapting support and challenge difficulty to learner behavior:

- The **ChallengeAgent** generates competency-aligned tasks with calibrated difficulty and explicit objectives.
- The **BuddyAgent** provides [[scaffolding|adaptive instructional support]] based on learner performance and interaction signals, offering hints and guided options.
- The **CriticAgent** evaluates learner responses and produces [[formative-assessment|formative feedback]] anchored to explicit criteria.
- The **RewardAgent** assigns XP, badges, and progression indicators according to a mastery-oriented reward rubric tied to [[motivation|motivational reinforcement]].

This role-based decomposition supports the core gamified learning functions of progressive challenges, [[adaptive-learning|adaptive support]], structured feedback, and mastery-based rewards. More importantly, it enables modular control over instructional dynamics, making the loop more interpretable and stable than monolithic prompting approaches — a more transparent [[intelligent-tutoring|tutoring]] architecture.

## Schema-Governed Behavioral Control

To keep adaptive agent behavior instructionally coherent, CyberAGENTS defines explicit behavioral schemas for each agent. These schemas function as structured metadata contracts specifying how an agent operates, when it intervenes, and what form its outputs may take, parameterized through fields governing operational mode, difficulty level, trigger conditions, response style, evaluation criteria, and reward logic.

These schemas implement *structured autonomy*: agents retain generative flexibility within defined bounds but cannot deviate from prescribed instructional roles. Challenge generation is constrained by difficulty and explicit objectives; instructional support is regulated through trigger conditions and assistance levels that enable gradual fading of help as competence increases — preventing over-assistance; evaluation follows structured criteria; and rewards are tied to an experience-based mastery rubric. This prevents role drift while preserving adaptivity across learners, and it supports cross-agent coordination because agents expose structured properties (difficulty, hint usage, grading mode, XP tier) that let the orchestrator maintain coherent progression across turns.

## Ontology-Guided Validation

While schemas regulate instructional behavior, domain correctness is enforced through ontology-guided validation. CyberAGENTS integrates **AISecKG**, a cybersecurity [[knowledge-graph|ontology]] that defines valid entity types (tool, technique, attack, vulnerability, defense, system) and permissible relations among them (exploits, detects, counters, uses, can harm). This ontology acts as a reasoning constraint layer applied to agent-generated content before learner exposure.

During gameplay, outputs from the ChallengeAgent, BuddyAgent, and CriticAgent are checked against ontology-defined entity categories, relation patterns, and unsafe-content rules. Content that violates semantic constraints or safety thresholds is flagged and re-prompted under stricter conditions before presentation. This pre-display gating complements schema-governed behavioral control: schemas constrain pedagogical behavior and progression logic, while ontology validation constrains cybersecurity reasoning and semantic validity. Together they regulate both instructional conduct and domain semantics — reducing [[hallucination-risk|hallucinations]] and unsafe instructional drift in a dynamically generated learning environment, and exemplifying [[pedagogical-safety]] as a design constraint.

## Evaluation

CyberAGENTS was implemented as a web-based interactive system (React frontend, Python Flask backend, deployed on Google Cloud Run) with LLM inference served via the Together AI API using Llama-based models. Participants accessed it through a public web portal and completed a short novice-level session of cybersecurity challenges, then a post-study survey.

**Human study.** A within-subjects design with 24 undergraduate students, plus expert feedback from cybersecurity and educational-design specialists, assessed engagement, feedback quality, trust in AI guidance, and perceived learning value. Quantitative results were positive across most dimensions, with scenario authenticity highest (M = 4.21), followed by gamification impact, trust in system feedback, and willingness to recommend. Lower scores on challenge difficulty alignment (M = 3.12) suggested room for improvement in challenge balancing; Cronbach's alpha was α = 0.90. Qualitative feedback surfaced four themes — trust in AI scaffolding, clarity of feedback, engagement and interaction design, and task authenticity — with participants valuing the BuddyAgent's guided [[help-seeking|hints]] while requesting shorter, more structured responses. This combination of survey, observational, and open-ended evidence reflects a [[mixed-methods-research|mixed-methods]] [[ai-ed-evaluation|evaluation]] approach.

**LLM-as-judge evaluation and ablation.** An LLM-as-judge assessed full transcripts on learner intent alignment, challenge quality, interaction coherence and state tracking, agent role fidelity, and domain relevance/cybersecurity grounding. The full system scored highest on domain relevance and cybersecurity grounding (4.46) and agent role fidelity (4.35). An ablated version with the expert-informed structural components (competency map and ontology constraints) removed scored lower on all dimensions, with the largest degradations in challenge quality, learner intent alignment, and domain grounding — evidence that the structural components matter. The authors interpret these ablation results descriptively, since the ablation deployment received less traffic.

## Key Findings

1. CyberAGENTS grounds gamified cybersecurity learning in [[curriculum-design|competency-based progression]], organizing topics by difficulty and prerequisite relationships so gameplay is curriculum-aligned and [[scaffolding|scaffolded]] rather than sampled arbitrarily.
2. Decomposing the learning loop into four schema-governed agents (challenge, support, evaluation, reward) enacts *structured autonomy*, bounding agent behavior and preventing role drift while preserving generative flexibility.
3. Ontology-guided validation with the AISecKG cybersecurity ontology gates all agent outputs before display, enforcing domain-consistent reasoning and safety constraints that reduce [[hallucination-risk|hallucinated or unsafe content]].
4. A human study with 24 undergraduates and expert evaluators found improved [[student-engagement|engagement]], clearer [[feedback]] interpretation, and greater learner [[trust-calibration|trust]] in AI responses when behavioral schemas and ontology validation were active.
5. An LLM-as-judge ablation showed the full framework outperforming an unconstrained configuration, especially on challenge quality, learner intent alignment, and domain grounding, supporting the role of structured control in stabilizing instructional behavior.

## Implications

**For designers of agentic education systems.** The paper's central lesson is that generative flexibility should be *bounded through structured autonomy* rather than eliminated through static scripting. Layering behavioral schemas (which regulate instructional conduct and progression) over ontology validation (which constrains domain reasoning) gives designers a concrete recipe for keeping [[agentic-ai|agentic learning systems]] reliable, domain-aware, and pedagogically aligned in high-stakes technical domains.

**For assessment and feedback.** By anchoring [[feedback]] and critique to explicit, schema-defined criteria and validating explanations against domain structure, CyberAGENTS turns evaluation into a transparent and actionable mechanism rather than an opaque generative judgment — a template for [[formative-assessment|formative feedback]] that learners can trust and interpret. The qualitative request for shorter, more structured responses underscores that feedback quality is as much about clarity as correctness.

**For [[pedagogical-safety]].** Because cybersecurity is adversarial and high-stakes, inaccurate or unsafe generated content could mislead learners or expose them to harmful procedural guidance. CyberAGENTS treats constraint not only as a technical mechanism but as an ethical one: pre-display ontology validation and schema-bounded behavior are framed as safeguards requiring continued [[human-in-the-loop-ai|human oversight]], particularly in high-stakes instructional settings.

**For research and generalization.** The current study is an initial step with a small-scale deployment and short interactions, limiting claims about long-term [[learning-gains|learning outcomes]]. Future work points toward larger evaluations, richer forms of structured autonomy, more immersive gamified interfaces, and transfer of the framework beyond cybersecurity — signaling that *structured autonomy* is intended as a general design principle for reliable, [[pedagogical-safety|pedagogically aligned]] agentic learning, with implications for [[professional-training]] and [[engineering-education]] more broadly.

## Connected Concepts

- [[agentic-ai]]
- [[cs-education]]
- [[pedagogical-safety]]
- [[llm]]
- [[professional-training]]
- [[generative-ai]]
- [[scaffolding]]
- [[motivation]]
- [[trust-calibration]]

## Connected Articles

- [[tech-enhanced-tabletop-cybersecurity-education]]
- [[computing-students-cybersecurity-attitudes]]
- [[medgame-llm-medical-education-gamification]]
- [[ai-enabled-serious-games]]
- [[vismatic-secure-sandbox-cs-education]]
- [[hypergamification-game-engine-lms]]
- [[sec-ai-literacy-narrative-review-2026]]

## Citation

Hornung, I., Marasinghe Arachchige, D., Kumarage, T., Agrawal, G., Deng, Y., Chen, Y.-C., & Liu, H. (2026). [*CyberAGENTS: Structured autonomy for agentic gamified learning in cybersecurity*](https://arxiv.org/abs/2608.07965).
