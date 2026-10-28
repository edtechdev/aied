---
title: Disengaged Conversational Behaviors and Learning in Student-AI Dialogues for Mathematical Problem Solving
created: "2026-10-11T10:30:00-04:00"
updated: "2026-10-28T01:06:31-04:00"
type: article
foundations: [ai-education]
pedagogy: [student-engagement, metacognition, self-regulated-learning]
technology: [conversational-ai, intelligent-tutoring, llm, multimodal]
assessment: [educational-measurement]
ethics: [pedagogical-safety]
audience: [researchers, educational technology developers]
level: [k 12]
sources: ['raw/papers/rho-disengaged-conversational-behaviors-2026.md']
confidence: high
research_method: [quasi-experiment, interviews]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-11"
    agent: hermes-agent
---

> **Synthesis:** Task-based disengagement (gaming the system, hint abuse, off-task clicking) is well documented in intelligent tutoring research, but this study opens a newer territory: *conversational* disengagement in student-AI dialogue — mocking the agent, deliberately answering wrong, ghosting it, mirroring its text back, withholding responses, or emitting noise. Using an AI-powered teachable agent (GPT-4-Turbo, [[rag|RAG]] with a knowledge graph, positioned as a struggling middle-school student asking for help) embedded in Math Nation's Algebra and Geometry lessons, the authors coded 5,522 utterances from 246 middle-school students into six disengagement categories versus engagement, using a human-in-the-loop LLaMA 3 classifier trained on 1,682 human-annotated utterances (Cohen's κ = 0.624 model-vs-human, weighted F1 = 0.910). The prevalence-based headline — False Answering and Mocking associate *positively* with post-test scores — is reported honestly as tentative: it did not replicate in the human-annotated sensitivity analysis, Mocking was 0.3% of utterances from 15 students, and the authors explicitly decline to claim that wrong answers promote learning. The stronger finding is sequential: modeled with cumulative incidence functions and turn-by-turn transition clustering, the highest-performing cluster combined moderate disengagement with strong recovery-to-engagement pathways (Withholding → Engagement p = 0.83; False Answering → Engagement p = 0.42), while the lowest-performing cluster showed persistent self-loops without recovery (Engagement self-loop p = 0.96, False Answering self-loop p = 0.51). Withholding was the one disengagement type that persisted rather than resolving. The framing conclusion: a disengaged *turn* is an interactional move, not a stable state — whether it harms learning depends on what follows it.

## Key contributions

- **A six-category coding scheme for conversational disengagement**, built top-down from prior work (Mocking from hostile/sarcastic online remarks, Ghosting from ceasing participation, False Answering from gaming-the-system research) plus bottom-up categories (Mirroring emerged entirely inductively — students copying the agent's text). Definitions are operationalized with utterance-level examples.
- **Human-in-the-loop classification at scale.** 1,682 utterances annotated by two trained raters (per-category κ = 0.704–0.905, all substantial), an 80/20 thread-level stratified split, fine-tuned LLaMA 3 (max length 1024, lr 1×10⁻⁴, AdamW, 8 epochs), then prediction on 7,152 unlabeled utterances (3,312 below the 0.5 threshold — mostly procedural "next"/"." utterances — leaving 3,840 classified plus 1,682 human = 5,522 total).
- **Prevalence results with three operationalizations** (utterance-normalized rates, session-normalized counts, TF-IDF weighted counts) controlling for pre-test: engagement dominated (75.7% of utterances), False Answering (12.8%) and Withholding (8.9%) led the disengagement types, others rare (Random/Noisy 2.1%, Mirroring 0.6%, Mocking 0.3%, Ghosting 0.2%).
- **Honest sensitivity analysis.** The positive associations for False Answering and Mocking disappeared when the analysis was restricted to the 1,682 human-annotated utterances from 144 students (all coefficients positive but nonsignificant, p = 0.742–0.918) — the authors treat the full-data findings as tentative and attribute the discrepancy to either classifier error or reduced power.
- **Competing-risks (CIF) modeling of disengagement duration.** False Answering and Ghosting ended within the first few turns; Withholding showed near-flat curves at all durations — it continues rather than resolves.
- **Transition-based student clustering.** Three clusters on turn-by-turn transition probabilities, matched on pre-test (F(2, 243) = 1.20, p = .30): Cluster 1 (highest adjusted post-test, m = 246.35) showed recovery-oriented dynamics; Cluster 0 (lowest, m = 242.23) showed pervasive persistence; Cluster 2 (m = 243.49) in between. Cluster 1 produced no Ghosting, Mirroring, or Mocking at all, and concentrated False Answering (27.00% of its utterances) while Cluster 2 concentrated Withholding (20.00%). χ²(12) = 682.97, p < .001. Only Cluster 1 vs Cluster 0 survived Holm correction (p = 0.014).

## What this means for practice

- **For conversational-AI designers:** the design-relevant distinction is *persistence versus repair*, not presence versus absence of disengagement. An agent that helps students recover from a mocking or wrong-answer episode (re-engagement scaffolding) addresses the trajectory pattern that actually separates high- from low-performing clusters. Withholding — the type that persists — is the flag worth detecting and responding to, not the noisy one-offs.
- **For analytics teams:** turn-level classification should not be read as trajectory-level disengagement. The same utterance category means different things depending on the transition network around it; state-persistence metrics (self-loop probabilities) are more diagnostic than per-turn rates.
- **For researchers studying disengagement:** this extends the Baker et al. gaming-the-system literature into the LLM era with a crucial methodological caution — when a classifier labels most of your corpus (3,840 of 5,522 utterances model-labeled), prevalence results ride on classifier accuracy, and the paper demonstrates what happens when you check: the headline association evaporates on the human-annotated subset. Report the sensitivity analysis.
- **For teachable-agent pedagogy:** the learning-by-teaching setup (student identifies the misconception in two worked solutions, justifies the correction, teaches the agent) generated exactly the conditions where probing behaviors like False Answering could plausibly be productive experimentation — but the study cannot distinguish experimentation from correlate-of-activity explanations.
- **Measurement lesson:** false answering's association with post-test was *stronger* for lower pre-test students in the full-data models (interaction negative in all three operationalizations), which would argue against a "only strong students experiment" story — but the interaction also failed to replicate in the human-annotated subset, so even the moderation claim is tentative.

## Limitations

- **The RQ1 associations did not replicate** in the human-annotated sensitivity analysis (N = 144); the authors explicitly treat them as tentative rather than established. The moderation by pre-test likewise failed to replicate.
- Mocking (0.3% of utterances, n = 15 students) is too rare for the significant full-data association to be anything but exploratory; the authors say so.
- Classifier dependence: most of the coded utterances (3,840 of 5,522) are model-labeled; model-vs-human κ = 0.624 is well below human inter-rater κ (0.704–0.905).
- Observational design — no causal claims possible; False Answering may be a correlate of activity (more interactive students both experiment more and learn more) rather than a mechanism.
- Single platform (Math Nation), single domain (middle-school math), single district in the Southeastern US; voluntary participation means the sample self-selected.
- Clusters are descriptive groupings of transition probabilities; only Cluster 1 vs Cluster 0 differed significantly after Holm correction. And because process data was unobtrusively logged (no Hawthorne risk, but also no self-report on intent), the study cannot distinguish whether disengagement *causes* trajectory differences or is a symptom of them — an utterance coded "Mocking" may be humor, frustration, or genuine probing.

## Citation

Rho, J., Guo, R., Li, H., & Li, C. (2026). [*Disengaged Conversational Behaviors and Learning in Student-AI Dialogues for Mathematical Problem Solving*](https://doi.org/10.1016/j.compedu.2026.105766). *Computers & Education*, 105766.
