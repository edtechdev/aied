---
title: "Bypass, Offload, or Scaffold: A Conceptual Model of How Large Language Models Shape Learning"
created: "2026-09-14T09:12:54-04:00"
updated: "2026-09-14T09:12:54-04:00"
type: article
tags: [cognitive-offloading, productive-failure, scaffolding, metacognition, desirable-difficulties, prior-knowledge, transfer-of-learning, ai-misuse-learning-harm]
sources: ['raw/papers/naim-bypass-offload-scaffold-llm-learning-2026.md']
confidence: high
---

> **Synthesis:** Lee (2026) proposes the Neuroplasticity-[[student-ai-interaction|AI Interaction]] Model (NAIM), arguing that whether [[llm|LLMs]] help or harm learning depends not on the technology but on what an interaction does to the learner's generative effort on the target skill. It distinguishes three pathways — direct bypass, which eliminates that effort and lowers unassisted performance, [[cognitive-offloading]], which is predicted to harm only when the offloaded subprocess *is* the target skill, and [[scaffolding|scaffolded struggle]], which preserves generation and is predicted to protect [[transfer-of-learning]]. Grounding the account in consolidation theory, [[desirable-difficulties]], and [[productive-failure]] research, the model explains why randomized studies report both harm (a 48% practice gain paired with a 17% exam deficit) and benefit (a 127% practice gain with the exam deficit largely eliminated) from the same underlying model. Its eight propositions carry explicit falsifiers, and the author is candid that only the bypass-harm and scaffolding-benefit claims currently rest on multiple randomized studies.

## Key Findings

1. In a field experiment with nearly 1,000 high school [[math-education|mathematics]] students, unrestricted GPT-4 access during practice raised practice scores by 48% but lowered scores on a subsequent unassisted [[summative-assessment|examination]] by 17% relative to students with no AI access.
2. In the same study, a GPT-4 condition constrained to [[teacher-role|teacher]]-designed hints raised practice performance by 127% and largely eliminated the examination deficit, showing the technology constant while the interaction changed.
3. Fan et al. (2025) randomized 117 university students to essay writing with ChatGPT, a human expert, a writing [[learning-analytics|analytics]] tool, or no support: the ChatGPT group produced higher-scoring essays but showed no advantage in knowledge gain or transfer, a pattern the authors labeled "metacognitive laziness."
4. A randomized trial of 900 tutors serving 1,800 [[k-12]] students found that real-time AI suggestions (Tutor CoPilot) raised students' topic mastery by 4 percentage points overall and by 9 percentage points for students of lower-rated tutors.
5. Kestin et al. (2025) found that a step-at-a-time [[intelligent-tutoring|AI tutor]] produced more than twice the learning gain of a well-run in-class active-learning condition, in less time, among fewer than 200 university [[physics-education|physics]] students.
6. Gerlich (2025) surveyed 666 adults and found AI tool use was negatively correlated with [[critical-thinking|critical thinking]] (r = −0.68), positively correlated with [[self-report-measures|self-reported]] cognitive offloading (r = 0.72), and offloading was negatively correlated with critical thinking (r = −0.75).
7. Kosmyna et al. (2025) recorded electroencephalography from 54 essay writers and reported the weakest alpha- and beta-band connectivity in the LLM group, with the 18-participant fourth-session crossover showing reduced connectivity for former LLM users; a published commentary contests the study's sample size and methodology.
8. Two meta-analyses report positive average effects of AI on achievement — an effect size of 0.92 across 29 studies with 2,657 participants (Dong et al., 2025) and 0.68 across 34 experimental and quasi-experimental studies of [[generative-ai|generative AI]] (Ma & Zhong, 2025) — though neither coded interaction type or whether outcomes were assessed with AI present.

## The Neuroplasticity-AI Interaction Model: Three Pathways

NAIM's central move is to change the unit of analysis from the tool to the interaction. The model classifies any AI-supported learning event by what it does to the learner's generative effort on the **target skill** — the capability the task was assigned to develop, as distinct from the subprocesses the task also requires. A calculus problem assigned to develop integration also requires arithmetic and notation, which are subprocesses.

The first pathway, **direct bypass**, occurs when the model supplies the complete outcome — a finished proof, essay, program, or explanation — so generative effort on the target is eliminated. The proposed mechanism of harm is *plasticity bypass*: the learner is exposed to the correct product without the retrieval, generation, and error-correction that consolidation theory identifies as the conditions for durable integration. Because the product is fluent and complete, it also triggers the processing-fluency illusion of competence documented by Koriat and Bjork (2005), so bypass is predicted to raise assisted performance, lower unassisted performance, and inflate the learner's estimate of their own learning.

The second pathway, [[cognitive-offloading]], delegates a specific subprocess while the learner keeps the rest of the task. Whether this helps or harms depends on a single condition the paper argues existing offloading accounts leave implicit: whether the offloaded subprocess is the target skill or peripheral to it. Offloading a peripheral subprocess frees working-memory capacity for the target; offloading the target itself is bypass under another name. This condition is offered as the resolution of an apparent contradiction in the [[cognitive-offloading]] literature, where offloading sometimes improves and sometimes impairs outcomes — the outcome tracks whether the measured capability is the one that was offloaded.

The third pathway, **scaffolded struggle**, supplies hints, questions, or feedback contingent on the learner's attempt while the learner retains the solution. It is [[scaffolding]] in Wood et al.'s (1976) original sense: support calibrated to the learner's current state and withdrawn as competence grows. Here generation, retrieval, and error are preserved, and the AI supplies only the calibration that keeps the struggle productive rather than futile. The classification is a property of the interaction, not the system: the same LLM can produce all three pathways depending on how it is prompted and used, so a system designed to scaffold can be pushed into bypass by a learner who simply asks for the answer.

## The Evidence on Bypass, Scaffolding, and Offloading

The model's strongest support is Bastani et al. (2025), because it manipulates the pathway while holding technology, content, and population constant. Three conditions — no AI, GPT Base (unrestricted), and GPT Tutor (teacher-designed hints, answers withheld) — produced the pattern that anchors Propositions 1 and 2: practice gains of 48% and 127% respectively, but a 17% examination deficit under GPT Base that was largely eliminated under GPT Tutor.

Fan et al. (2025) supplies the signature of bypass on the competence side: better products and unchanged [[transfer-of-learning]]. The paper draws a design lesson from this — an instructor grading the essays would have concluded that ChatGPT helped, which is precisely why product-based assessment cannot detect bypass harm. Scaffolding at scale appears in Wang et al. (2024), where 900 tutors serving 1,800 students received real-time AI suggestions modeled on expert tutoring practice. Students of tutors with access were 4 percentage points more likely to master the topic, with 9 percentage points for students of lower-rated tutors, and analysis of more than 550,000 messages showed tutors used more strategies that foster understanding and gave away answers less often. The learner never touched the model; the AI shaped the human tutor's behavior. The largest gains for the weakest tutors are consistent with the claim that what matters is the interaction, since the intervention had its greatest effect where it changed the interaction most. Kestin et al. (2025) completes the positive case: a GPT-4 tutor constrained by [[pedagogy|pedagogical]] prompts to be brief, to reveal one step at a time, and to ask students to attempt each step beat in-class [[active-learning|active learning]] by more than twice the learning gain in less time.

The [[cognitive-offloading]] condition (Proposition 3) rests on indirect evidence. Grinschgl et al. (2021) and Sparrow et al. (2011) show that offloading improves performance while diminishing memory for the offloaded content, and Iqbal et al. (2025) found in a survey of 465 [[teacher-education|preservice teachers]] that generative AI use was associated with higher achievement with cognitive offloading as a positive mediator — read by the model as offloading of peripheral subprocesses where the measured outcome was not the offloaded skill. No study has yet manipulated whether the offloaded subprocess is the target, so the proposition is explicitly labeled indirect.

## Moderators, the Overload Bound, and Design Implications

Two learner characteristics moderate the pathways. [[prior-knowledge]] operates through the expertise reversal effect: learners with more prior knowledge suffer less from bypass because they can reconstruct the generative steps the AI skipped, and benefit less from scaffolded support because it is partly redundant. [[metacognition]] operates through the evaluation paradox — learners who can accurately judge their own understanding are more likely to notice that a fluent answer has not produced competence, and to seek scaffolding rather than bypass. The consequence is uncomfortable: the learners most vulnerable to bypass are those with the least prior knowledge and least metacognitive skill — the learners for whom the task was assigned. Proposition 6's evidence is correlational only — Gerlich (2025) found higher educational attainment associated with stronger critical thinking despite AI use, and the youngest participants showing the highest dependence and lowest scores — and no randomized study has yet stratified bypass effects by expertise.

The paper's least-discussed contribution is its upper bound. NAIM arranges AI-supported interactions along a productive struggle spectrum in which learning is predicted to rise and then fall as total challenge increases. Bypass occupies the insufficient-challenge end, but the excessive-challenge end is a pathway most discussions omit: a model that answers a request for a hint with a thousand-word explanation, offers five alternative approaches, or pitches above the learner's level imposes load that competes with schema construction. The practical implication is that constraining verbosity and step size is not stylistic but functional, and Kestin et al.'s tutor — instructed to be brief and reveal one step at a time — is offered as a design that respects this ceiling.

The propositions that remain thin are flagged as such. Engagement mediation (P4) leans on Kosmyna et al.'s contestable EEG preprint and on Gerlich's cross-sectional, self-reported mediation. Dose dependence (P7) rests on the 18-participant crossover session alone, and the model calls the accumulation of "cognitive debt" speculative, included because it has the largest practical consequences if true. Preference-learning dissociation (P5) is the best-supported of the moderating claims, consistent across sources and with the illusions-of-competence literature. The research agenda that follows is deliberately cheap in places: adding helpfulness ratings and predicted-learning judgments to any existing bypass-or-scaffold [[rct]] costs nothing, and the paper recommends that every trial report delayed unassisted performance and [[transfer-of-learning]] to novel problems, because assisted or immediate outcomes cannot distinguish the pathways. For [[learning-design|instructional design]], the recommendation is to state what a task is for: once the target skill is explicit, learners and systems can offload everything else, and the line between appropriate and inappropriate AI use becomes a question of whether the use touches the target rather than a matter of policy. For assessment, any task completed with AI access measures assisted performance and cannot detect whether learning occurred.

## Connected Concepts

- [[cognitive-offloading]]
- [[productive-failure]]
- [[scaffolding]]
- [[metacognition]]
- [[desirable-difficulties]]
- [[prior-knowledge]]
- [[transfer-of-learning]]
- [[ai-misuse-learning-harm]]
- [[icap-framework]]
- [[self-regulated-learning]]
- [[problem-solving]]
- [[student-ai-interaction]]
- [[assessment]]
- [[rct]]

## Connected Articles

- [[wang-safety-gap-productive-struggle-2026]] — The Safety Gap: Restoring Productive Struggle Through Pedagogically Aligned Generative AI
- [[gerlich-ai-tools-cognitive-offloading-critical-thinking]] — AI Tools in Society: Impacts on Cognitive Offloading and the Future of Critical Thinking
- [[nesnin-cognitive-offloading-ai-students-2026]] — Cognitive Offloading in the Age of AI: Are Students Thinking Less or Learning Differently?
- [[chatgpt-hints-human-tutor-learning-gains-2024]] — ChatGPT-generated help produces learning gains equivalent to human tutor-authored help on mathematics skills
- [[absent-cognitive-baseline-2026]] — The Absent Cognitive Baseline: Theorizing a Structural Gap in AI-Native College Students' Academic Self-Assessment
- [[genai-performance-vs-learning]] — Distinguishing performance gains from learning when using generative AI
- [[rethinking-scaffolding-llm-tutors]] — Rethinking Scaffolding in LLM Tutors: The Interactional Mismatch Between Benchmarks and Real-World Deployments
- [[metacognitively-discordant-completion-genai-2026]] — Metacognitively Discordant Completion and the Aware Pass-Through of Non-Understanding in Generative AI Learning
- [[yan-cognitive-outsourcing-genai-assessments-2026]] — From Cognitive Outsourcing to Reallocation: A 3P Analysis of Student–Generative AI Engagement in Unsupervised Assessments

## Citation

Lee (2026). [*Bypass, Offload, or Scaffold: A Conceptual Model of How Large Language Models Shape Learning*](https://osf.io/preprints/edarxiv/8f376_v1/). EdArXiv.
