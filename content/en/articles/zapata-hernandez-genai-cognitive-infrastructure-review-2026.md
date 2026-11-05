---
title: "Generative AI and Cognitive Processes in Education: A Narrative Review and Conceptual Framework"
created: "2026-11-05T08:55:00-05:00"
updated: "2026-11-05T08:55:00-05:00"
type: article
sources: ['raw/papers/zapata-hernandez-genai-cognitive-infrastructure-review-2026.md']
confidence: medium
page_kind: [synthesis, framework]
research_method: [literature review, theoretical analysis]
audience: [instructors, administrators, researchers]
level: [higher ed]
foundations: [cognitive-offloading, critical-thinking]
pedagogy: [metacognition, creativity]
technology: [generative-ai]
assessment: [process-oriented-assessment]
institutions: [governance]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Zapata-Hernandez and colleagues review 108 documents from 2017–2026 and conclude that [[generative-ai|generative AI]] reliably improves the speed and polish of academic work without reliably improving the learning behind it. The effects of AI use on [[critical-thinking|critical thinking]] and [[creativity]] split by what the learner delegates and when the tool arrives: assistance that removes peripheral work frees capacity, while assistance that supplies the reasoning displaces the [[cognitive-offloading|cognitive work]] the task existed to produce. Their AI-Mediated Cognitive Infrastructure Framework (AMCIF) organizes that conditionality into modes of use, mediating cognitive processes, a critical–creative loop, and institutional rules, and the review is explicit that its pathways are propositions awaiting experimental test.

## Key Findings
1. **Assisted performance is not independent competence.** The review's central claim is that gains in speed and apparent quality during AI use did not consistently survive withdrawal of the tool, so task output is not evidence of durable learning.
2. **Critical thinking moves in both directions under mediation.** A ChatGPT-based facilitator, LearnGuide, raised Cornell Critical Thinking Test scores by 7.11 points (p < .001), while AI dependence among 580 Chinese university students correlated negatively with critical thinking (r = −0.35).
3. **Unguarded access costs unassisted performance.** In a field experiment with nearly 1,000 high school mathematics students, unrestricted GPT-4 access improved practice scores but the group scored 17% lower on the later unassisted exam; hint-based tutoring largely removed that deficit.
4. **Prior knowledge decides the sign of the effect.** GenAI assistance was associated with higher critical-thinking performance for experienced researchers (+0.20) and lower performance for novices (−0.13), who have fewer schemas for spotting a plausible but wrong answer.
5. **Creative gains are individual, losses collective.** GPT-4 ideation made the short stories of 293 writers more novel and useful yet significantly more alike, and AI-generated images increased design fixation in a 60-participant visual-ideation study.
6. **Cognitive load is redistributed rather than reduced.** Of the 16 studies in a 39-study review that measured extraneous cognitive load separately, seven reported reductions while the rest found null, increased, curvilinear, or non-directional effects.
7. **Four layers, one condition.** AMCIF links GenAI as an epistemic stimulus, modes of use, mediating cognitive processes, and the critical–creative loop to explain why identical assistance produces different outcomes.

## The corpus and what kind of evidence it carries

The review is a narrative synthesis rather than a systematic one: 86 peer-reviewed articles, nine conference papers, one working paper, and 12 institutional documents, drawn from Scopus, Web of Science and publisher platforms with a complementary Consensus search, and concentrated in 2025 and 2026 (about 45% and 36% of the dated documents, with 79% of the journal articles in Q1 venues). The authors are candid about the method's limits — author judgment in screening, English-language and internationally indexed sources dominating, and institutional guidance mixed with empirical work — and they keep the categories separate in the analysis. That separation matters for reading the page: the experimental findings it reports come from a small set of recognizable studies, while much of the supporting literature measures perceptions and intended use rather than learning. The authors say so directly, warning that favorable perceptions of GenAI should not be read as evidence that students are reasoning better.

## Critical thinking: conditional on mediation and prior knowledge

The critical-thinking evidence the review assembles converges on a boundary rather than an average. Structured designs that scaffold the interaction — a ChatGPT facilitator running Socratic questioning, concept-mapping-enhanced collaborative learning, an eight-week conversational-agent intervention with 126 graduate students that produced 3.8 alternative explanations against 2.1 in the lecture control — report gains on standard measures. Unstructured reliance reports the opposite: dependence correlating with weaker critical thinking and with cognitive fatigue (r = 0.51) in the same 580-student sample, and the field experiment in which the unrestricted interface helped during practice and hurt afterward. The review reads the split through [[metacognition|metacognitive regulation]] and prior knowledge: novices cannot reliably detect the fluent error, so the tool's most convincing outputs are the ones they are least equipped to question. It also reports a timing effect — starting a task with AI access helps under extreme time pressure but impairs critical-thinking performance when there is time for independent deliberation, which is the rationale for try-first protocols and [[scaffolding|staged hints]] rather than immediate answers.

## Creativity: fluency up, diversity down

On creativity the review separates the dimensions that the literature often blends. Fluency and flexibility rise: GenAI helps users past blocks and fixation, widens the space of options, and supports elaboration of an initial idea. Originality is contested — language models exceed average human semantic divergence on benchmarks such as the Divergent Association Task but sit below the most creative humans — and the aggregate picture is a trade. The 293-writer experiment found better individual stories alongside greater similarity across them, the 60-participant visual study found fixation and lower fluency, variety and originality, and an event-study analysis of more than four million artworks by over 53,000 artists found productivity and peer-rated value rising while average novelty declined, even as the maximum rose. The authors' reading is a conditional risk of creative convergence, not an inevitability, and they distinguish directed co-creation, where a creator delegates bounded subtasks and keeps problem framing, from fused co-creation, where prompting, challenge and refinement cycle continuously — the Centaur and Cyborg modes that recur in the [[human-ai-collaboration|human–AI collaboration]] literature.

## The framework: friction, verification, and the critical–creative loop

AMCIF's contribution is structural rather than empirical. It treats GenAI as an epistemic stimulus whose fluency is inseparable from hallucination, latent bias and opacity, and it sorts responses into *frictionless use* — uncritical adoption and [[cognitive-offloading|offloading]] of the operations the task was meant to build — and *regulated engagement*, where try-first protocols and pedagogical friction keep monitoring with the learner. Its mediating layer argues that [[cognitive-psychology|cognitive load]] is redistributed rather than uniformly reduced, so the question is which operations are preserved, not how much effort disappears, and the answer depends on prior knowledge, [[ai-literacy]] and dosage. Ten of the framework's mechanisms are instructional: strategic task design, verification routines and audit trails, reflective and metacognitive prompts, [[process-oriented-assessment|process-based assessment]] with oral defenses, and teacher mediation as epistemic orchestration. The institutional layer sorts policies into restricted and conditional regimes by disclosure requirement, traceability, assessment strategy and divided responsibility, and the authors argue that both prohibition and unrestricted permission miss the variable that matters — when the tool enters a task and what function it performs.

## What this means for practice

- **Instructors.** Design the first attempt before the tool: require an independent attempt, then staged hints, then verification against sources, and assess the process — prompts, revisions, oral defense — rather than only the product.
- **Faculty developers.** Train mediation, not tool demos: the distinguishing skill in this review is deciding which cognitive operations a task is meant to build and which may be delegated, which is a judgment about learning objectives rather than about software.
- **Administrators.** Write conditional policy rather than a ban or a blanket permission: the review's governance comparison sorts regimes by disclosure, traceability and assessment strategy, and a rule that names none of them leaves the decision to the student.

## Limitations

- The design is a narrative review with author judgment in screening, not a systematic protocol; coverage is bounded by publisher platforms, English-language indexing and the five search routes the authors list.
- Evidence is dominated by short interventions, self-report and product quality measured while AI assistance was available; few studies measure delayed retention, transfer, or performance after access is withdrawn.
- Critical thinking and creativity are operationalized inconsistently across the corpus, which the authors name as a barrier to comparing effects directly.
- AMCIF's pathways are propositions derived from the literature, not tested causal mechanisms, and the authors call for experimental validation, including in Latin American institutions where the evidence base is thin.
- The paper is a preprint posted on 5 November 2026 and marked not peer-reviewed at the time of reading.

## Citation

Zapata-Hernandez, C., Becerra, M. A., Duque-Grisales, E., Serna-Guarín, L., Peluffo-Ordoñez, D., & Navarro-Espinosa, J. (2026). [*Generative AI and Cognitive Processes in Education: A Narrative Review and Conceptual Framework*](https://doi.org/10.20944/preprints202611.0452.v1). Preprints.org.
