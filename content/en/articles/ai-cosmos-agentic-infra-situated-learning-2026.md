---
title: "AI Cosmos: An Agentic Infra for Situated Learning"
created: "2026-11-02T05:25:00-05:00"
updated: "2026-11-02T05:25:00-05:00"
type: article
page_kind: [evaluation]
research_method: [experiment]
foundations: [agentic-ai]
pedagogy: [situated-learning, scaffolding]
technology: [llm, pedagogical-agent]
assessment: [assessment-validity]
discipline: [legal education, cs education]
methods: [rct]
level: [higher ed, undergraduate]
audience: [researchers, software developers, instructors]
sources: ['raw/papers/ai-cosmos-agentic-infra-situated-learning-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-02"
    agent: hermes-agent
---

> **Synthesis:** The AI Cosmos Team (Tsinghua University) argue that LLMs can raise task performance during learning without producing the ability to apply the knowledge afterwards, and propose an infrastructure that reorganizes the interaction rather than the model. Two principles carry the design: **scenario-based participation**, where learners and role-specialized agents are configured inside a scenario with task-relevant knowledge and, when needed, an executable workbench; and **cumulative assets of practice**, an asset–memory loop that preserves the processes and outcomes of practice as typed, provenance-bearing reusable objects. Two preregistered three-arm randomized studies hold the underlying LLM constant across conditions, so the variable is the architecture of interaction. In bar-exam preparation AI Cosmos beat a vanilla assistant on learning gain (+7.0 pp, d = 0.56, p = 0.018) while a [[teacher-role|teacher]]-persona prompt alone did not. In competitive programming its aggregate post-test scores were statistically indistinguishable from the vanilla assistant — but among submissions the online judge accepted, 68% showed criterion mastery against 45% for vanilla and 32% for LLM-as-Teacher, which is the paper's real claim: [[assessment-validity|passing tests and acquiring the algorithm are not the same outcome]].

## Two Principles, One Framework

A **scenario** is formalized as a tuple of learning objective plus three dimensions of practice: a social configuration of role-specialized agents (explainer, mentor) and human learners; an epistemic set of queryable knowledge resources; and an operational set of stateful workbenches such as a coding IDE. Either the epistemic or the operational component can be empty, in which case participation is purely discursive — which is how the paper separates "talking to a tutor" from "doing something in a configured environment."

An **asset** is a typed, provenance-bearing unit of reusable outcome with dependencies on prior assets. Five types are distinguished: role specifications, scenario specifications, knowledge artifacts, process records, and problem sets or similar practice material. The asset–memory loop packages what happened in a scenario into these reusable objects, so practice accumulates instead of resetting to a blank chat each session. This is the part of the design that most clearly departs from conventional [[llm|LLM]] [[scaffolding]]: the unit carried forward is not a conversation history but a structured record of what was produced and what it depended on.

## Study 1: Bar-Examination Legal Reasoning

131 students were randomized 1:1:1 to a vanilla LLM assistant, the same LLM prompted as an expert tutor, or AI Cosmos; preregistered engagement criteria left an analyzed sample of 111 (37 per arm), with no significant baseline differences (all p ≥ 0.27). Participants completed a pre-test, studied matched civil- and criminal-law problems with their assigned system only, took a difficulty-matched immediate post-test with the NASA-TLX workload index, and a randomly selected subsample (n = 18 per condition) took a delayed post-test roughly four weeks later. Open responses were scored by three law PhDs (Cronbach's α = 0.95 pre-test, 0.96 post-test) on a 0–100 scale weighted 80% objective and 20% open response.

All arms gained substantially (d_z = 1.22, 1.45 and 1.88). Raw gains were 22.8 ± 12.1 pp for AI Cosmos, 18.5 ± 12.7 for LLM-as-teacher and 15.7 ± 12.9 for vanilla, and the omnibus ANOVA on raw gains fell just short of conventional significance (F(2, 108) = 2.94, p = 0.057, η² = 0.052). The preregistered primary contrast was clearer: AI Cosmos beat vanilla by 7.0 pp (Welch t(71.8) = 2.42, p = 0.018, d = 0.56, 95% CI [0.10, 1.05]), and an ANCOVA adjusting for AI Cosmos's slightly lower baseline reproduced it (adjusted means 70.2 vs 65.8; F(2, 107) = 3.00, p = 0.054; AI Cosmos vs vanilla b = 4.47, p = 0.018). The advantage over the stronger teacher baseline was positive but not significant (Δ = 4.2 pp, p = 0.146, d = 0.34), and the teacher condition did not separate from vanilla (Δ = 2.8 pp, p = 0.121). With the model held constant, restructuring the interaction helped; adding a teacher persona did not.

## Study 2: Competitive Programming, and the Score That Hides the Skill

140 students were recruited, 100 completed the diagnostic pre-test, and 54 completed the multi-session protocol (93% male; mean age 18.9; 89% first-year undergraduates), stratified into basic-algorithm and data-structure tracks before randomization. Each participant ran two training sessions on a fixed three-stage cycle — learn one problem with the system, self-check on a second targeting the same concept with help only as needed, then solve a third independently under a different framing — and advancement required a full-score submission on all three. A week later came a contest-style post-test of two previously unseen problems requiring variants or combinations of the trained algorithms, newly authored by two NOI/ACM gold-medal experts with no online counterparts.

Post-test scores favored AI Cosmos descriptively (68.0 ± 32.3 against 61.5 ± 28.1 vanilla and 49.8 ± 31.7 teacher) but the omnibus test was not significant (F(2, 51) = 1.65, p = 0.20, η² = 0.061). The pairwise gap against LLM-as-Teacher was 18.2 points (Welch t(35.0) = 1.73, p = 0.092; Hedges' g = 0.56), and teacher scored below vanilla (g = −0.38).

The finding that matters is one level down. Both AI Cosmos and vanilla produced successful online-judge submissions at comparable rates — 82% vs 85% — which is why their raw scores looked alike. Expert rescoring of the same source code, blind to condition, against a shared error codebook and a five-level mastery scale shows what the judge could not: among submissions that received positive credit, AI Cosmos reached criterion mastery (grade ≥ G4) in 68% of cases against 45% for vanilla (p = 0.12) and 32% for teacher (Fisher's exact p = 0.009), and non-mastery passing solutions — credit without the target algorithm — were less frequent under AI Cosmos (26% vs 47% and 53%; vs teacher p = 0.031). Criterion mastery averaged 1.11 of two problems for AI Cosmos against 0.76 vanilla and 0.50 teacher (Mann–Whitney p = 0.024 vs teacher), with 36.8% mastering both against 17.6% and 11.1%; flawless implementations were 52.6% vs 38.2% and 25.0% (p = 0.019 vs teacher).

## What this means for practice

- **Instructors.** Configure the activity, not just the prompt. Holding the model fixed, the difference between conditions here came from what the learner could do inside the session — knowledge resources and an executable workbench — not from instructing the assistant to behave like a teacher.
- **Instructors.** Do not read passing grades as competence in programming tasks. Over four in ten judge-accepted submissions from the vanilla assistant lacked the target algorithm, and a tutor persona made that worse, not better.
- **Assessment designers.** Pair automated judging with a blind, criterion-level rescoring at least once. The online judge was blind to the distinction the study was about, and the score-based evaluation would have reported the two systems as equivalent.
- **Educational technology developers.** Treat provenance and dependency as first-class fields of what a session produces. The asset–memory loop is what makes a second session build on the first rather than restart it.

## Limitations

- The team that designed and evaluated AI Cosmos is its own developer (the paper is authored by "AI Cosmos Team" at Tsinghua and links the project's site and code), so no independent replication is reported.
- Both omnibus tests were non-significant — p = 0.057 in legal reasoning and p = 0.20 in programming — and the claims rest on planned or pairwise contrasts in samples of 111 and 54 analyzed participants.
- The programming study is small and homogeneous (93% male; mean age 18.9; 89% first-year undergraduates), with per-cell sizes of 7 to 11, and its key mastery comparisons were significant against LLM-as-Teacher but not always against the vanilla assistant.
- Retention is thin: the delayed legal post-test covered a random subsample of 18 per condition, four weeks out, and no delayed measure is reported for programming.
- Every problem in the programming study was newly authored to defeat contamination, which is a strength for validity but means the item pool is small and not reusable across replications.
- Outcomes are short-horizon post-tests and expert-coded artifacts; nothing measures whether the gains survive into subsequent courses, and the asset–memory loop's benefit is not separately ablated from the scenario and workbench changes.

## Citation

AI Cosmos Team, Zhou, J., Chen, Y., Chang, F., Su, M., Zhu, Y., et al. (2026). [*AI Cosmos: An agentic infra for situated learning*](https://arxiv.org/abs/2610.40031). arXiv preprint.
