---
title: "Instructional equivalence and differential affordances of peer tutoring and AI-assisted learning in IUPAC nomenclature"
created: "2026-11-23T09:00:00-05:00"
updated: "2026-11-23T09:00:00-05:00"
published: "2026-11-20"
type: article
authors: ["Jessa B. Manulat"]
venue: "Frontiers in Education"
evidence_context: educational
foundations: [ai-literacy, critical-thinking, cognitive-offloading]
pedagogy: [collaborative-learning, scaffolding, self-regulated-learning]
technology: [generative-ai, conversational-ai, visualization]
assessment: [learning-gains]
methods: [mixed-methods-research]
ethics: [hallucination-risk]
research_method: [quasi-experiment, thematic analysis]
discipline: [chemistry education]
level: [undergraduate]
audience: [instructors, instructional designers, curriculum designers, researchers]
page_kind: [evaluation]
sources: ["raw/papers/banzon-manulat-peer-tutoring-ai-iupac-nomenclature-2026.md"]
confidence: high
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-23"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, quotes, links]
---

> **Synthesis:** Manulat (2026) compares a blended intervention — [[collaborative-learning|peer tutoring]], [[generative-ai|ChatGPT]], and the structure-drawing tool OrgoSolver — with conventional lectures in [[chemistry-education|organic chemistry]], teaching IUPAC nomenclature to 27 undergraduates in the Philippines over 10 weeks, with the control group receiving conventional lecture-based instruction from the same instructor. Both groups improved significantly from pretest to posttest, and the experimental group's mean gain was larger (5.231 versus 3.571), but analysis of covariance found no statistically significant between-group difference once pretest scores were controlled. The [[qualitative-research|qualitative]] strand supplies the explanation: students worked through cognitive triangulation, attempting problems alone, consulting ChatGPT for concepts, verifying names in OrgoSolver, and reconciling discrepancies with peers and the instructor. Four affordances emerged — cognitive, social, technological, and [[ai-literacy|critical AI literacy]] — and the inconsistent answers ChatGPT sometimes produced became occasions for verification rather than reliance. The study argues that value lies in the complementary interaction of human and AI supports, not in any single tool.

*Explanatory sequential [[mixed-methods-research|mixed-methods]] study with a quasi-experimental pretest–posttest comparison of 27 undergraduates (control n = 14, experimental n = 13) over 10 weeks; the [[quantitative-research|quantitative]] strand is explicitly exploratory.*

## Key Findings

- **Both groups improved.** The experimental group's mean score rose from 12.385 to 17.615 and the control group's from 12.143 to 15.714; both within-group gains were statistically significant.
- **The between-group difference was not significant.** After controlling for pretest scores, the group effect on posttest performance was not statistically significant.
- **Peer tutoring was the social anchor.** Students ranked peer tutoring as the most approachable and supportive component, describing dialog with classmates as easier than asking an instructor.
- **The tools played different roles.** ChatGPT served as an immediate conceptual explainer, while OrgoSolver served as a procedural verification tool for drawn structures.
- **Inconsistent AI output prompted verification.** Students compared ChatGPT answers with notes, OrgoSolver output, and peer discussion rather than accepting them, which the authors treat as [[ai-literacy|critical AI literacy]].
- **The design cannot isolate components.** Peer tutoring, ChatGPT, and OrgoSolver were integrated, so no individual contribution was estimated.

## Equivalence first, superiority second

The study's framing is deliberate. Much prior work assumes an instructional innovation should outperform traditional instruction; this study asks instead whether different modalities produce similar outcomes while operating through different mechanisms. Both groups covered the same topics, objectives, instructional time, and assessments, and the only difference was the instructional strategy. The quantitative phase used a 30-item achievement test with a Kuder–Richardson Formula 20 coefficient of 0.64, which the authors call acceptable for exploratory classroom research but below the 0.70 benchmark recommended for high-stakes assessment. The draft instrument began as 50 multiple-choice items, was reviewed by three chemistry educators and four more for content validity, and was reduced to the 30 most appropriate items after pilot testing. Pretest scores were comparable, and both groups improved from pretest to posttest. The experimental group's larger numerical gain did not survive the control for baseline, which the authors attribute partly to limited statistical power. They therefore treat the quantitative strand as preliminary and let the qualitative strand explain how learning was distributed across the supports.

## How the three supports divide the work

The intervention assigned distinct roles. Peer tutoring carried social and collaborative support: students discussed, questioned, explained, and reasoned together, and participants ranked it as the most valuable component. ChatGPT carried conceptual support, offering immediate explanations and follow-up clarification that students could consult repeatedly. OrgoSolver carried procedural support, generating a systematic name from the structure a student drew so the student could verify it. The sequence mattered: students attempted each problem independently, consulted ChatGPT for concepts, drew the structure into OrgoSolver, and then compared discrepancies with peers before the instructor resolved what remained unresolved. Four peer tutors were selected on pretest performance, prior chemistry achievement, participation, communication, and peer-working ability, and each facilitated a group of two to three students after an orientation. This is [[scaffolding]] distributed across agents rather than concentrated in one, and it is why the authors describe the result as an integrated learning ecosystem rather than a bundle of tools.

## Verification as a learning outcome

The most striking qualitative finding is that students did not accept ChatGPT output uncritically. They reported that the same question could draw different answers, that responses sometimes conflicted with what they had learned, and that compounds with multiple substituents produced inaccuracies. Rather than producing dependence, these inconsistencies prompted comparison against lecture notes, textbooks, OrgoSolver output, and peer discussion. Qualitative data came from focus group discussions and key informant interviews, transcribed and coded thematically, and the instructor monitored use of both tools and intervened when groups could not reach consensus. The authors read this as [[ai-literacy|critical AI literacy]] — the capacity to evaluate, question, and responsibly use AI-generated information — and they connect it to [[hallucination-risk|accuracy risks]] that rule-based domains make visible. The practical claim is that AI-assisted instruction can promote disciplinary learning and responsible use at the same time, provided the task requires verification rather than answer generation. That also reframes [[cognitive-offloading|over-reliance]]: the risk is not that students use the tool, but that they stop checking it.

## What this means for practice

- **[[teacher-role|Instructors]].** Keep a facilitation role: reconcile conflicting explanations and correct [[misconceptions]] rather than letting AI tools replace judgment.
- **Instructional designers.** Assign distinct roles to each support — peers for dialog, a conversational AI for concepts, a verification tool for procedural checks — and sequence them.
- **Curriculum designers.** Embed structured peer tutoring and explicit [[ai-literacy|AI literacy]] instruction so students verify outputs instead of accepting them.
- **Researchers.** Test the components separately in larger samples, since the integrated design cannot attribute gains to any one of them.

## Limitations

- Only 27 participants from a single intact class at one [[higher-ed|university]], which limits generalizability.
- The intervention ran 10 weeks, which may be too short to detect between-group differences or long-term retention.
- The integrated design cannot isolate the contribution of peer tutoring, ChatGPT, or OrgoSolver.
- The 30-item achievement test had a KR-20 of 0.64, below the 0.70 benchmark recommended for high-stakes assessment.
- The findings reflect the ChatGPT version available during the study and may differ as newer models become available.

## Citation

Manulat, J. B. (2026). [Instructional equivalence and differential affordances of peer tutoring and AI-assisted learning in IUPAC nomenclature: an explanatory sequential mixed-methods study](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2026.1873775/full). *Frontiers in Education, 11*, 1873775.
