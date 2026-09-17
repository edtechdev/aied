---
title: "How Good Are Frontier Models at Physics? Expert Re-Grading Reveals Broken Evaluations and Near-Saturation of Leading Benchmarks"
created: "2026-09-14T09:12:54-04:00"
updated: "2026-09-14T09:12:54-04:00"
type: article
foundations: [limitations-in-aied-research]
technology: [llm]
assessment: [assessment-validity, educational-measurement]
ethics: [hallucination-risk]
sources: ['raw/papers/frontier-models-physics-benchmark-audit-2026.md']
confidence: high
research_method: [benchmark]
discipline: [physics education, science education]
audience: [researchers, assessment professionals]
level: [higher ed]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark]
---

> **Synthesis:** A team of Yale physicists re-graded six widely used [[benchmark|benchmarks]] with domain experts and found that the low scores commonly cited as evidence that frontier [[llm|models]] "struggle with physics" are largely artifacts of broken benchmark materials and grading. Across 250 audited rejections in four benchmark subsets, 143 (57.20%) were benchmark errors, 95 (38.00%) were grader errors, and only 12 (4.80%) were genuine model errors. After correcting reference solutions and repairing or excluding defective questions, GPT-5.6-Sol's mean@4 rose from 47.3% to 78.7% on HLE-Physics and from 61.0% to 87.2% on CMT-Benchmark, with pass@4 of 94.4% on the 54 retained CritPt challenges. The result reframes [[ai-ed-evaluation|AI evaluation]] as an [[assessment-validity|assessment validity]] problem: when a model's true error rate falls below a benchmark's defect rate, the scorecard measures the benchmark, not the model. The authors argue that near-saturation on closed-ended problem-set physics makes existing instruments inadequate as evidence of [[science-education|scientific reasoning]] capability.

## Key Findings

1. Expert review of 250 audited rejections across HLE-Physics, PHYBench, PRISM-Physics, and UGPhysics attributed 238 (95.20%) to benchmark or grader defects and only 12 (4.80%) to genuine model errors, after conflict resolution.
2. On HLE-Physics, GPT-5.6-Sol High's mean@4 rose from 47.28% pre-audit to 78.66% validated/repaired, and pass@4 from 55.94% to 91.38%, on the 116 questions retained after excluding 86 benchmark-error items.
3. On CMT-Benchmark, expert correction raised GPT-5.6-Sol High's mean@4 from 61.00% to 87.24% and pass@4 from 72.00% to 97.96%; reviewers identified benchmark errors in 30 of the 50 questions, repairing 29 and excluding one.
4. On CritPt, the pre-audit mean@5 of 32.29% for GPT-5.6-Sol Max on 70 challenges became a corrected mean@4 of 87.50% and pass@4 of 94.44% on the 54 challenges retained from 56 audited (21 benchmark errors found, 19 repaired, 2 excluded).
5. Grader errors dominated the two benchmarks using rule-based evaluators: PHYBench recorded 40 grader errors, 13 benchmark errors, and 3 model errors among 56 rejections, while PRISM-Physics recorded 48 grader errors, 26 benchmark errors, and no model errors among 74 rejections.
6. Corrected scores on the public-source benchmarks rose similarly: GPT-5.6-Sol High went from 26.50% to 90.23% mean@4 on PHYBench, 13.00% to 94.59% on PRISM-Physics, and 83.00% to 92.07% on UGPhysics.
7. The HLE-adapted evaluation pipeline used for all corrected evaluations had the lowest grader error rate of the evaluators audited, at 4.08%, whereas per-question judgments were unavailable for CMT-Benchmark and CritPt, making their grader-error counts indeterminate.
8. The pattern generalizes beyond physics: an audit of 138 SWE-bench Verified tasks found material problems in 59.4% of them, and a follow-up estimated roughly 30% of SWE-bench Pro tasks were broken.

## Method: Attributing Errors Before Scoring Them

The paper's central move is procedural rather than statistical. Rather than reporting another leaderboard number, the authors combine benchmark evaluation with an expert audit that assigns each apparent failure to one of three categories: a **model error** (well-posed problem, correct reference solution, wrong model answer), a **grader error** (correct model answer marked wrong by the evaluator), or a **benchmark error** (defective problem statement or reference solution, including missing assumptions that cannot be inferred). Only the first category is a genuine capability signal.

The audit covers six closed-ended benchmarks in two groups. UGPhysics, PHYBench, and PRISM-Physics are drawn or adapted from public physics exercises and examinations, which creates a plausible route for training-data contamination; HLE-Physics, CMT-Benchmark, and CritPt are built from original expert-authored questions. The analysis leans on the expert-authored group because its lower presumed contamination risk makes measured performance a more informative signal, but the audit extends to all six. Three frontier models were evaluated — GPT-5.6-Sol, Claude Fable 5, and Gemini 3.1 Pro — with tools disabled on the three [[physics-education|physics]] problem-set benchmarks and enabled for the two tool-using models on the expert-authored benchmarks. Every score is reported as mean@4 (average accuracy over four attempts) or pass@4 (solved in at least one of four attempts), except the pre-audit CritPt figures, which are Artificial Analysis's mean@5.

To bound the expert-review burden, the four pooled audits were restricted to questions that GPT-5.6-Sol High had failed on all attempts, yielding 502 questions of which 252 were accepted and 250 rejected and sent for review. Reviewers matched to each problem's subfield first checked whether the statement was well posed and the reference solution correct. For HLE-Physics, PHYBench, PRISM-Physics, and UGPhysics they then excluded defective questions; for CritPt and CMT-Benchmark they instead repaired the materials where a defensible repair existed, adding missing boundary conditions or clarifying conventions. CritPt is the sharpest example of why unrepaired items cannot be graded at all: because the official reference solutions were not public, reviewers independently solved each challenge to establish their own references, and they audited 56 challenges regardless of the model's pre-audit response, since the evaluation interface reports only aggregate scores. This is the design that underwrites every corrected number in the paper and is why the authors treat the corrected evaluations as the more [[assessment-validity|valid]] measurement.

## Evidence: How Much of the Reported Gap Is Real

The corrected numbers are large enough to invert the standard narrative. On the three expert-authored benchmarks, GPT-5.6-Sol High's mean@4 went from 47.28% to 78.66% on HLE-Physics and from 61.00% to 87.24% on CMT-Benchmark, while GPT-5.6-Sol Max's CritPt mean@4 reached 87.50% with pass@4 of 94.44%. Fable 5 High reached 78.24% mean@4 and 90.74% pass@4 on the same retained CritPt set. Gemini 3.1 Pro, which used no tools throughout, improved on HLE-Physics from 40.97% to 64.87% mean@4 and on CMT-Benchmark from 50.50% to 78.06% — clearly better than reported, but consistently behind the two tool-enabled models on the expert-authored instruments. The public-source benchmarks tell the same story with even wider gaps: PRISM-Physics moved from 13.00% to 94.59% and PHYBench from 26.50% to 90.23% for GPT-5.6-Sol High, and PRISM-Physics in particular produced no model errors at all among its 74 audited rejections, so every audited rejection there was a defect.

The [[educational-measurement|measurement]] errors are concrete and inspectable. A PHYBench tension problem was graded zero by the Expression Edit Distance evaluator purely because the model rationalized a denominator differently, even though the two expressions are algebraically identical; a second PHYBench case failed over factor ordering; an HLE-Physics polymer force law was rejected although it reduces to the reference in the stated small-extension limit, up to a sign convention. Benchmark errors run from an erroneous HLE-Physics reference answer (√2 instead of 2−√2 after correct algebra) to a PRISM-Physics multiple-choice time-of-flight question with no timing or distance data given, to a CritPt Kitaev-honeycomb challenge where the unspecified normalization changed the ground-state energy by a factor of four, to a CMT-Benchmark Ising question whose reference answer was itself wrong and had to be changed from (a; c) to (a; b; c). These are not edge cases; they are the items the models were scored on.

The authors are careful about what the corrected scores do not show. Near-saturation on closed-ended tasks does not imply end-to-end research capability: they report that GPT-based [[agentic-ai|agentic]] harnesses of the kind used successfully on open [[math-education|mathematics]] conjectures made considerably less progress on theoretical physics and have not fully solved a single open problem they attacked. Unsolved [[hallucination-risk|failure modes]] persist — in CritPt Challenge 18, all four GPT-5.6-Sol Max attempts silently assumed real particle polarizabilities that the problem never stipulated, recovering the reference only in that special case and dropping the polarizability-phase contributions of the general result.

## Implications for Evaluation Practice as Capability Grows

The paper's most transferable argument concerns when a benchmark stops working. Every benchmark contains some fraction of defective items, and no model's measured error rate can fall below that defect rate. While a model is weak, faulty graders err mainly by rejecting correct answers the model rarely produces, so the measured score stays near the true one; as capability grows, correct answers become common, grader errors accumulate, and the gap widens. The authors argue that frontier models' true error rate in this domain has now fallen below the defect rate of the available instruments, which is why four benchmarks audited in depth show non-model errors outnumbering model errors by roughly an order of magnitude.

The related work places the finding in a familiar trajectory. Bowman and Dahl's criteria for adequate benchmarks — validity, reliable annotation, adequate statistical power, and disincentives for biased models — bear directly on the case: at high accuracy, a fixed benchmark loses the statistical power to distinguish 98% from 98.1% at any reasonable cost, and reliable annotation requires separating mislabeled items from items that have no clear right answer. The SWE-bench precedent is the closest analogue: expert review motivated the Verified subset, yet a later audit still found material problems in 59.4% of 138 Verified tasks, and defects survived two rounds of curation even in a domain where every task ships with an executable test. Physics benchmarks, graded against written reference solutions with no comparable check, have no structural reason to be cleaner. Anthropic's separate audit of CritPt — expert revisions to 31 of 71 problem statements, with Fable 5.1 reaching 88.4% mean@16 on CritPt-Corrected — independently corroborates that correction changes the measured result.

For [[limitations-in-aied-research|AIED research]] the practical consequences are direct. Any evaluation of an [[intelligent-tutoring|AI tutor]], grader, or problem generator that inherits questions and reference solutions from these benchmarks inherits their defect rate, and [[automated-assessment|automated scoring]] pipelines trained or calibrated against those labels reproduce the same errors. The authors' prescription is a new class of benchmark built from genuinely hard physics tasks with verified reference solutions, adequately resourced for high-quality expert curation. For education specifically, the same logic implies that instrument validation must be treated as an ongoing, expert-driven activity rather than a one-time construction step, and that reported model failures on any fixed closed-ended set should be audited before they are used to justify claims about what learners can or cannot do with AI.

## Connected Concepts

- [[benchmark]]
- [[ai-ed-evaluation]]
- [[assessment-validity]]
- [[physics-education]]
- [[llm]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[hallucination-risk]]
- [[limitations-in-aied-research]]
- [[science-education]]
- [[generative-ai]]

## Connected Articles

- [[ai-grading-handwritten-physics-2026]] — Large Scale AI Grading of Handwritten Physics Assessments: Score Agreement and Olympiad Team Selection Outcomes
- [[ai-scoring-language-bias-physics]] — AI-based scoring systematically underestimates conceptual understanding of linguistically weak students' explanations in physics
- [[astra-multi-agent-tutoring-benchmark-2026]] — ASTRA: A synthetic benchmark for trace-based evaluation of socially intelligent multi-agent tutoring
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[assessment-latent-structure-human-llm-2026]] — Do Assessment Instruments Measure the Same Thing for Humans and LLMs? A Latent Structure Analysis
- [[ai-tutor-behavioral-evaluation]] — The Missing Evaluation Axis: What 10,000 Student Submissions Reveal About AI Tutor Effectiveness
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not Ground Truth
- [[airis-cognitively-activated-ai-physics-2026]] — It's Not the Tool, It's the Task: A Framework for Cognitively Activated AI Augmentation in Physics Instruction
- [[ai-particle-physics-education-redesign-2026]] — AI in Particle Physics Education: Research Problems and Foundational Skills

## Citation

Ansari, A., Sun, H., Liu, A. Z., et al. (2026). [*How Good Are Frontier Models at Physics? Expert Re-Grading Reveals Broken Evaluations and Near-Saturation of Leading Benchmarks*](https://arxiv.org/abs/2609.13009). arXiv preprint.
