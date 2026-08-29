---
title: "ResidencyRL: Reinforcement Learning in Simulated Clinical Environments"
created: "2026-08-13T09:28:20-04:00"
updated: "2026-08-24T12:00:00-04:00"
type: article
tags: [reinforcement-learning, simulation, medical-education, llm, professional-training, intelligent-tutoring, trust-calibration]
audience: [software developers]
research_method: [system development]
sources: ['raw/papers/2608.07418.md']
confidence: high
---

> **Synthesis:** Liévin et al. (2026) present **ResidencyRL**, a reinforcement learning method for training clinical AI agents through simulated multi-turn clinical encounters (up to 60 dialogue turns and 8 tool calls per trajectory). It pairs the policy agent with LLM simulators capable of complex, adversarial behaviors, training against a structured reward aligned to diagnostic accuracy, management quality, communication, documentation, and safety. On held-out evaluation the agent improves diagnostic accuracy by 7.0% under adversarial conditions (88.0% vs 81.0%) and reduces missed red-flag rates by 31%; blinded expert clinicians preferred it in 87.6% of side-by-side comparisons, and competencies transfer to unseen benchmarks. The work connects to [[reinforcement-learning]], [[simulation]], [[professional-training]], and [[medical-education]] in health education, treating clinical mastery for AI as something developed through simulated practice rather than static knowledge alone.

## Key Findings

1. Long-horizon multi-turn RL optimizes the full clinical encounter — up to 60 dialogue turns and 8 tool calls per trajectory via Group Relative Policy Optimization (GRPO) — substantially exceeding the short horizons (≤12 turns) of concurrent clinical dialogue RL systems.
2. Under adversarial conditions, the trained agent improves diagnostic accuracy by 7.0% (88.0% vs 81.0%) and reduces missed red-flag rates by approximately one third, demonstrating rigorous mitigation of premature closure.
3. Blinded board-certified clinicians preferred the ResidencyRL agent over the base model in 87.6% of side-by-side comparisons for overall clinical impression, with wins of 90.7% on information-gathering completeness and 75.3% on management-plan appropriateness.
4. Procedural competencies generalize out of domain: the agent outperforms the base model across all six clinical axes of the AMIE multi-visit benchmark, with consistent directional improvements on AgentClinic and CRAFT-MD, including on expert-curated oncology cases never seen during training.
5. A curated scenario pipeline (57K generated cases) spans routine telehealth, targeted history-taking, and adversarial safety scenarios, with an LLM-as-judge verification stage and TF-IDF deduplication grounding training in diverse, clinically rigorous cases.

## Learning Clinical Decision Sequences

In medical education, physicians convert academic knowledge into clinical expertise through residency: years of training across thousands of encounters, with diverse sources of feedback and progressively greater autonomy (Barrows, 1993). Much of clinical reasoning relies on the patient encounter, a dialogue in which a clinician elicits history, refines diagnostic hypotheses, and decides management under uncertainty. While [[llm|large language models]] excel on static medical [[benchmark|benchmarks]], methods to optimize the full sequence of clinical decisions remain underdeveloped, and per-turn supervision cannot teach an agent when to transition from history-taking to investigation or how to converge efficiently on a diagnosis. ResidencyRL trains clinical AI agents through simulated multi-turn clinical encounters, situating the [[llm]] in a temporally extended, [[reinforcement-learning|partially observable Markov decision process]] in which the patient's pathophysiological state is latent and outcomes depend on the cumulative trajectory of decisions.

## Method

ResidencyRL is an online multi-turn RL method that pairs the policy agent — a Gemini 3.5 Flash model — with an LLM-based patient simulator across a curriculum of three environment types: routine telehealth consultations, targeted history-taking scenarios designed to uncover hidden clinical information, and adversarial safety cases for robustness against challenging behaviors and malicious inputs. A documentation API lets the agent do more than converse, enabling submission of a primary diagnosis, ranked differential, urgency classification, management plan, patient-facing summary, and SOAP-note documentation.

### Scenario Generation Pipeline

A four-stage generative pipeline synthesizes and curates clinical cases. First, demographic and behavioral attributes are sampled from US population distributions, with Big Five personality traits dictating encounter dynamics such as symptom amplification, clinician challenge, and non-adherence. Second, a structured LLM (Gemini 3.1 Pro) generates the clinical scenario, grounded in the DDXPlus evidence corpus and modulated by a complexity parameter (1–5). Third, an LLM-as-judge performs clinical coherence verification, accepting, modifying, or rejecting scenarios. Fourth, character-trigram TF-IDF vectorization deduplicates the pool, preventing policy memorization. Two extension packs target specific competencies: targeted history-taking scenarios (social/lifestyle, medication specifics, symptom characterization, exposures) and a nine-category adversarial safety taxonomy spanning emergency escalation, clinical boundary enforcement, diagnostic integrity, and crisis de-escalation.

### Simulated Environment and Patient Simulator

Patients are simulated with Gemini 3.5 Flash conditioned on the scenario's full medical record, conversation history, and the agent's latest message. A behavioral layer calibrates health-literacy adaptation, information asymmetry between proactive and reactive disclosures, and pacing constraints, spanning the range from cooperative and articulate patients to evasive and health-illiterate ones. Adversarial specialization layers static behavior addenda — e.g., a patient in the concealed-atypical-emergency subcategory minimizes symptoms and resists escalation — with a difficulty level (1–3) calibrating how persistently deception is sustained. The simulator validates candidate responses against eleven failure modes and is withheld from the evaluation rubric and tool calls, preventing inadvertent confirmation of the agent's hypotheses.

### Structured Reward and Auto-Grading

Upon episode completion, an LLM judge auto-grades the agent's clinical artifacts and transcript using a hierarchical rubric, formulated as `R = R_primary − R_penalty ∈ [−3, 3]`. The primary component evaluates six clinical dimensions across 26 Likert sub-axes, weighted to prioritize management quality and diagnostic accuracy: diagnosis (2/9), management (3/9), intake (1/9), communication (1/9), documentation (1/9), and style (1/9). Sub-axes draw on validated instruments including the Patient-Centered Communication Best Practices (PCCBP) and the Physician Documentation Quality Instrument (PDQI-9). The penalty component captures system-constraint violations and up to 8 binary critical safety flags. Rather than a monolithic judge, the rubric is partitioned into eight topic-oriented criteria groups, each scored by a dedicated judge call — an analytic scoring approach shown to improve inter-rater consistency.

## Findings

On held-out in-domain scenarios, the agent improves over the base model across all targeted metrics: diagnostic accuracy (rubric score ≥4/5) rises from 81.0% to 88.0% under adversarial conditions, management quality from 3.98 to 4.52 on a 1–5 Likert scale, and patient-centered communication (e.g., responding to emotions) from 2.63 to 3.06. Under adversarial conditions, missed red-flag rates fall by roughly one third, demonstrating rigorous mitigation of premature closure — the most common source of diagnostic error in clinical practice. These gains generalize: on the AMIE multi-visit benchmark the agent outperforms the base model across all six evaluation categories, with the largest gains in management reasoning (80.1% to 88.4%) and patient communication (83.7% to 92.2%). On expert-curated specialist oncology cases — a domain never seen during training — accuracy, completeness, and actionability improve significantly. On AgentClinic and CRAFT-MD, which expose models' tendency toward premature closure and insufficient information gathering, the agent shows consistent improvements. Critically, these gains persist even within expert-optimized scaffolding: in blinded evaluations by 97 board-certified clinicians, the trained agent was preferred in 87.6% of cases overall.

## Implications

ResidencyRL reframes clinical AI competence as something trained through simulated practice rather than read from static corpora, echoing the [[medical-education|residency]] model of human physician development. For AI in education and health, the work suggests that [[simulation]]-based [[reinforcement-learning]] can cultivate [[professional-training|procedural competencies]] — history-taking, management planning, triage, and adversarial robustness — that [[benchmark|static benchmarks]] cannot measure. The design's emphasis on adversarial safety scenarios and penalty flags points toward [[pedagogical-safety]] as a first-class training objective, not a post-hoc filter, and the LLM-as-judge rubric illustrates how [[cognitive-diagnosis|analytic scoring]] can operationalize multi-dimensional quality at scale. The negative result to note: [[simulation]] trained under imperfect conditions still requires prospective validation with real patients before clinical utility is established, and environmental fidelity bounds what simulation can teach — a caution relevant to [[human-in-the-loop-ai|human-in-the-loop]] and [[trust-calibration]] deployment.

## Connected Concepts

- [[reinforcement-learning]]
- [[simulation]]
- [[professional-training]]
- [[llm]]
- [[intelligent-tutoring]]
- [[trust-calibration]]
- [[cognitive-diagnosis]]
- [[human-in-the-loop-ai]]
- [[pedagogical-safety]]

## Connected Articles

- [[tibetcpr-ai-training-feedback]]
- [[astra-atco-training-simulator]]
- [[medgame-llm-medical-education-gamification]]
- [[ai-use-critical-thinking-medical-students-2026]]
- [[pedagogical-safety-rl]]
- [[hazra-safetutors-pedagogical-safety-2026]]

## Citation

Liévin, V., Schmidgall, S., Strother, T., Bijamov, A., Goel, A., Palepu, A., et al. (2026). [*ResidencyRL: Reinforcement learning in simulated clinical environments*](https://arxiv.org/abs/2608.07418).
