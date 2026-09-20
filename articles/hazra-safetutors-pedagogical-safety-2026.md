---
title: "SafeTutors: Benchmarking Pedagogical Safety in AI Tutoring Systems"
created: "2026-07-29T04:33:04-04:00"
updated: "2026-09-20T03:43:02-04:00"
type: article
pedagogy: [scaffolding]
technology: [intelligent-tutoring, llm]

audience: [software developers]
research_method: [benchmark]
level: [k 12]

sources: ['raw/papers/hazra-safetutors-pedagogical-safety-2026.md']
confidence: medium
discipline: [math education, physics education, chemistry education]
page_kind: [evaluation, framework]
institutions: [regulation]
ethics: [pedagogical-safety]

---

> **Synthesis:** Conventional [[llm]] safety benchmarks focus on toxic outputs, jailbreaks, and bias. In education the primary risks are quieter: as Hazra et al. put it, *"Solving problems correctly and avoiding toxic language does not make a tutor safe. Tutoring-specific harm is qualitatively different."* **SafeTutors** is a benchmark that jointly evaluates safety and pedagogy in AI tutoring systems across [[math-education|mathematics]], [[physics-education|physics]], and [[chemistry-education|chemistry]], and it finds that **every tested model shows broad [[pedagogy|pedagogical]] harm**, with failure rates escalating from **17.7% in single-turn to 77.8% in multi-turn** student–tutor dialogue. The harms it measures — answer over-disclosure, [[misconceptions|misconception]] reinforcement, abdication of [[scaffolding]] — look "helpful" on the surface: the student gets a correct answer quickly. The long-term effect is learning atrophy, and because these failures worsen as conversations lengthen, single-turn "safe/helpful" results systematically mask tutor failure. Tutoring harm is thus qualitatively different from content harm, and an 11-dimension, 48-sub-risk taxonomy supplies a vocabulary for it grounded in learning science.

## Key Findings

1. **Universal harm across all models.** All 11 tested models — 3.8B–72B open-weight systems plus GPT-5-mini — exhibited broad [[pedagogy|pedagogical]] harm, and none was consistently safe across subjects or interaction modes.
2. **Scale is not a fix.** Larger models were not reliably safer, and raw helpfulness correlated only weakly with [[pedagogical-safety|pedagogical safety]], challenging the assumption that general capability gains produce better tutors.
3. **Multi-turn dialogue dramatically worsens behaviour.** Harm rates rose from **17.7% in single-turn** interactions to **77.8% in multi-turn** conversations spanning 5–8 turns, showing that sustained tutoring progressively erodes safety.
4. **Single-turn evaluation is misleading.** Models that appeared safe in one-turn evaluations degraded systematically as conversations extended, so "safe/helpful" single-turn output is not evidence of a safe tutor.
5. **Harms are subject-dependent.** Violation patterns varied significantly across mathematics, physics, and chemistry, indicating that mitigations must be [[discipline-specific-aied|discipline-aware]] rather than transferred wholesale between science domains.
6. **An 11-dimension, 48-sub-risk taxonomy grounds the evaluation.** SafeTutors derives its risk categories from learning-science literature, tying tutoring failure to [[cognitive-offloading|cognitive offloading]], metacognitive suppression, and diminished learner [[agency]].

## Why Tutoring Safety Is Different

The dominant paradigm evaluates AI tutors on [[problem-solving]] accuracy and generic safety (toxicity, refusal). SafeTutors argues the tutoring-specific risks sit elsewhere:

- **Answer over-disclosure** — revealing solutions rather than facilitating guided discovery
- **[[misconceptions|Misconception]] reinforcement** — validating or ignoring student misunderstandings
- **Abdication of [[scaffolding]]** — failing to provide appropriate structured support
- **Erosion of [[desirable-difficulties|productive struggle]]** — short-circuiting the cognitive work that consolidates understanding

Each of these appears benign from the surface: the student gets a correct answer quickly, and nothing toxic was ever said. The damage is deferred, showing up later as learning atrophy and dependence rather than as a violation a content filter could catch. That asymmetry is why a tutor can be technically accurate and "safe" by conventional metrics while systematically undermining learning.

## The SafeTutors Risk Taxonomy

Hazra et al. (2026) derive **11 harm dimensions and 48 sub-risks** from learning-science literature, giving the evaluation a theoretically grounded vocabulary:

| Dimension | Core Concern | Key Examples |
|-----------|--------------|--------------|
| **Cognitive** | Interferes with knowledge internalization | [[cognitive-offloading|Cognitive offloading]], fluency illusion, shallow procedural learning |
| **Epistemic** | Weakens justification/evaluation ability | Unverified authority, source opaqueness, false consensus |
| **Metacognitive** | Erodes monitoring and self-reflection | External validation dependence, reflection bypass, learned helplessness |
| **[[motivation|Motivational]]-[[affective-computing|Affective]]** | Undermines curiosity and persistence | Shortcut temptation, performance-over-mastery, emotional disengagement |
| **Developmental & [[equity-in-ai-education|Equity]]** | Fails to calibrate to learner level | Cognitive load mismatch, unequal benefit, cultural bias |
| **Instructional Alignment** | Departs from learning goals | Pedagogical drift, goal misidentification, hidden [[curriculum-design|curriculum]] |
| **Behavioral & Inquiry** | Enables shortcuts/dishonesty | Answer-seeking bypass, assignment outsourcing |
| **[[ethics|Ethical]]-Epistemic Integrity** | Compromises intellectual ownership | Blurred authorship, misrepresentation of understanding |
| **Informational-Semantic** | Embeds factual inaccuracies | Fabrication, misleading scientific explanation |
| **Reflective-Critical** | Suppresses evidence-weighing | Over-smooth acceptance, no metacognitive challenge |
| **Pedagogical Relationship** | Dysfunctional learner-system dynamic | [[trust-calibration|Over-trust]] in AI authority, loss of [[agency|learner agency]] |

## Relationship to Broader Debates

SafeTutors sits at the intersection of [[ai-misuse-learning-harm|AI misuse and learning harm]] and tutoring-specific evaluation. It sharpens several strands of wiki discussion:

- [[llm-fallacy-misattribution]] — the fluency illusion (Cognitive dimension) and misrepresentation of understanding (Ethical-Epistemic dimension) are tutoring-specific instantiations of the LLM Fallacy
- [[self-regulated-learning]] — Motivational-Affective harms undermine the reciprocal loop between self-regulation and [[motivation]], just as Metacognitive and Reflective-Critical harms suppress monitoring
- [[transfer-of-learning]] — [[cognitive-offloading|Cognitive offloading]] and shallow procedural learning undermine transfer, and the taxonomy supplies a mechanistic account of why
- [[hallucination-risk]] and [[trust]] — Informational-Semantic failures and [[trust-calibration|over-trust]] in AI authority compound each other when a fluent tutor is also confidently wrong

## Implications for Evaluation, Design, and Policy

- **Evaluation:** tutor safety must be measured with multi-turn, [[discipline-specific-aied|discipline-specific]] benchmarks rather than single-turn toxicity screens; [[ai-tutor-behavioral-evaluation|behavioral evaluation]] pipelines should treat multi-turn degradation as the default risk.
- **Design:** [[guardrails]] must target pedagogical failure modes (over-disclosure, [[misconceptions|misconception]] reinforcement) rather than content correctness alone, and the taxonomy can steer training-time approaches such as [[pedagogical-safety-rl]] and [[singh-eduqwen-pedagogical-rl-2026]].
- **Policy:** procurement criteria for [[regulation|educational AI regulation]] should require pedagogical safety audits alongside accuracy metrics; systems like [[eduzone-llm-safety-k12]] and [[vetting-dual-llm-safety-education]] that prioritize multi-turn safety verification are essential rather than optional.

For [[k-12]] contexts, where the stakes of pedagogical harm are highest and student oversight is thinnest, SafeTutors provides empirical evidence that current models are not safe enough for unsupervised deployment.

## What this means for practice

- **Designers.** Evaluate tutors across multi-turn conversations of 5–8 turns rather than single responses: harm rates rose from 17.7% single-turn to 77.8% multi-turn across all 11 tested models.
- **Designers.** Do not treat parameter count or proprietary alignment as a safety strategy — the 72B model had a lower harm rate than the 7B on only 17 of 33 single-turn subject–dimension pairs.
- **Designers.** Target pedagogical failure modes directly — answer over-disclosure, misconception reinforcement, abdication of scaffolding — instead of relying on toxicity and correctness filters.
- **Designers.** Run subject-specific audits, because violation patterns differed significantly across mathematics, physics, and chemistry, so a mitigation validated in one domain need not transfer.
- **Designers.** Require multi-turn pedagogical safety evidence before unsupervised K–12 deployment, since harm deepens as conversations lengthen.

## Limitations

- The benchmark covers three STEM subjects — mathematics, physics, and chemistry — and 11 models from 3.8B to 72B parameters plus GPT-5-mini, so conclusions stay inside that set.
- Multi-turn evaluation spans 5–8 turns, a shorter horizon than semester-long tutoring, so longer-term degradation is inferred from a capped window.
- Pedagogical scoring is automated using DeepSeek-32B and validated by two doctoral students on a stratified sample of 900 single-turn responses and 300 multi-turn conversations (Cohen's κ = 0.76), leaving most of the output set checked only by the model.
- The 11-dimension, 48-sub-risk taxonomy is derived from learning-science literature and assembled by the authors rather than empirically discovered, so dimension boundaries are analytic choices.
## Connected Concepts

- [[intelligent-tutoring]]
- [[k-12]]
- [[pedagogical-safety]]
- [[llm]]
- [[regulation]]
- [[scaffolding]]
- [[ai-misuse-learning-harm]]
- [[misconceptions]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[transfer-of-learning]]
- [[cognitive-offloading]]
- [[trust]]
- [[hallucination-risk]]
- [[bias-mitigation]]
## Connected Articles

- [[eduzone-llm-safety-k12]] — EduZone: A Framework for Evaluating LLM Safety for K-12 Students and Teachers
- [[vetting-dual-llm-safety-education]] — VETTING: A dual-LLM framework for in-loop safety verification via policy isolation in educational AI
- [[pedagogical-safety-rl]] — Pedagogical Safety in Educational Reinforcement Learning
- [[singh-eduqwen-pedagogical-rl-2026]] — EduQwen: Pedagogical RL
- [[ai-tutor-behavioral-evaluation]] — The Missing Evaluation Axis: What 10,000 Student Submissions Reveal About AI Tutor Effectiveness
- [[stanford-evidence-base-ai-k12-2026]] — Stanford Evidence Base for AI in K-12
- [[llm-fallacy-misattribution]] — The LLM Fallacy: Misattribution of Fluency to Understanding

## Citation

Hazra, R., Ghuku, B., Marchenko, I., Tokarieva, Y., Layek, S., Banerjee, S., Stoyanovich, J., & Pechenizkiy, M. (2026). [*SafeTutors: Benchmarking Pedagogical Safety in AI Tutoring Systems*](https://arxiv.org/abs/2603.17373).
