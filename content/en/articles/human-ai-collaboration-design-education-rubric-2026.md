---
title: "Assessing Human-AI Collaboration in Design Education: A Process-Oriented Rubric Grounded in an Extended AI-TPACK Framework"
created: "2026-09-30T09:09:25-04:00"
updated: "2026-09-30T09:09:25-04:00"
type: article
sources: ['raw/papers/human-ai-collaboration-design-education-rubric-2026.md']
confidence: high
published: "2026"
page_kind: [framework]
research_method: [instrument development, interviews]
discipline: [design education]
level: [higher ed]
audience: [instructors]
foundations: [human-ai-collaboration, tpack, teacher-ai-competency, teacher-role, critical-thinking]
pedagogy: [socratic-method, creativity, student-ai-interaction]
technology: [generative-ai, prompt-engineering]
assessment: [process-oriented-assessment, peer-assessment, assessment-validity, authentic-assessment, self-report-measures]
methods: [design-based-research, qualitative-research]
ethics: [hallucination-risk, ai-use-disclosure]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This EdArXiv preprint reports the design principles and expert validation of the Merit Report, a process-oriented rubric for assessing [[human-ai-collaboration|human-AI collaborative]] design work. The authors argue that grading a finished artifact no longer discriminates between critical and uncritical use of [[generative-ai]], and that a process instrument must itself be warranted by an instructor competency. To that end they extend Mishra and Koehler's [[tpack|TPACK]] model with a fourth, domain-general competency, AI-Validation Knowledge — the capacity to subject probabilistic AI output to deterministic, discipline-specific verification. The Merit Report operationalizes this as a four-criterion analytic [[process-oriented-assessment|process-oriented rubric]]: documented curatorial will, tectonic translation, rule-based technical validation, and peer audit. Within a Design and Development Research (Type 2) program, five senior academics reviewed the instrument and triggered one traceable revision, replacing an exhaustive prompt log with a bounded input-output comparison. A panel member also judged the rubric's documentation logic consistent with Turkish architectural accreditation criteria. The paper closes by examining, criterion by criterion, which components transfer beyond architecture and which need a new domain-specific substrate.

## Key Findings

1. Generative AI breaks product-based grading: once a plausible proposal is one prompt away, artifact quality no longer proxies the quality of the thinking behind it.
2. The paper adds AI-Validation Knowledge, a domain-general fourth TPACK competency, distinct from operating tools or from knowing the content.
3. The Merit Report is a four-criterion analytic rubric: documented curatorial will (20%), tectonic translation (20%), rule-based technical validation (40%), and peer audit (20%).
4. Expert feedback produced a traceable revision: exhaustive prompt logging was replaced by a bounded input-output comparison after three independent objections.
5. One panel member judged the rubric's documentation logic consistent with MİAK, Turkey's architectural accreditation body, though a more senior member treated that alignment as a moving target.
6. Transferability is criterion-specific: documentation and peer audit travel across disciplines, but deterministic validation transfers only as a principle.
7. The instrument is internally validated but has not been piloted with scored student work, so no inter-rater reliability statistics exist for it yet.

## Why product-based grading stopped working

The paper opens from a concrete premise: generative AI now produces visually convincing design proposals in seconds, which undermines the assumption that an artifact's polish proxies the quality of thought behind it. Product-based grading can no longer separate defensible judgment from uncritical acceptance of the first plausible output — a condition the authors call a "Zero Order Thinking State." Their response is not simply to assess process instead. Citing Kofinas, Tsay, and Pike (2025), they note that even [[authentic-assessment|authentic]], process-oriented assessments can be satisfied by GenAI-generated process narratives convincing enough to pass experienced assessors. [[engineering-education]] evidence agrees: students using AI showed no drop in self-assessed [[creativity]] even as their design exploration narrowed. Neither a student's confidence nor a plausible process trail, the authors conclude, can be trusted on its own as evidence of [[critical-thinking]].

## Extending TPACK with AI-Validation Knowledge

Any assessment instrument presupposes a theory of instructor knowledge, so the authors extend TPACK first. Their addition is AI-Validation Knowledge: the capacity to subject a student's probabilistic AI output to deterministic, discipline-specific verification before treating it as evidence of a legitimate design decision. It is not technological fluency, because fluent AI users routinely accept plausible errors — fluency and verification are different skills. It is not [[pedagogy|pedagogical]]-technological knowledge, since a well-designed task can structure uncritical acceptance as easily as scrutiny. Nor is it reducible to content knowledge, because disciplinary depth alone does not yield a protocol for AI-specific failure modes. The extension repositions the [[teacher-role]]: the instructor becomes a [[socratic-method|Socratic Auditor]], demanding defensible justification rather than mastering every tool, while the student becomes an Architectural Conductor.

## Inside the Merit Report

The instrument is a four-criterion analytic rubric, each criterion scored across four performance levels. Documented curatorial will (20%) requires a prompt-and-selection logbook showing why particular AI variations were accepted, rejected, or refined. Tectonic translation (20%) assesses whether a digital, AI-mediated proposal has been reconciled with analog, materially grounded logic. Rule-based technical validation carries the largest weighting at 40%, its role as the instrument's non-negotiable validation floor. [[peer-assessment|Peer audit]] (20%) is an adversarial horizontal review in which students detect a classmate's uncritically accepted output and its unresolved [[hallucination-risk|hallucinations]]. The rubric is analytic and criterion-specific, both associated with higher reliability, and three criteria are meant to be legible to students in advance as a [[self-regulated-learning|self-regulation]] checklist.

## Which parts travel beyond architecture

The paper's most specific contribution is a criterion-by-criterion [[transfer-of-learning|transferability]] analysis. Documented curatorial will and peer audit are domain-general, because any discipline can ask students to justify selections or to review a peer's output. Tectonic translation is only partially general, transferring to fields where a digital proposal must become physically realized but not to purely discursive ones. Rule-based technical validation transfers as a principle but not as a substrate: the BIM protocol is architecture-specific, and other fields need their own deterministic check. This answers the gaming concern directly. Two criteria resist narrative alone — peer audit is adversarial rather than [[self-report-measures|self-reported]], and technical validation checks the artifact against an external standard a fabricated account cannot satisfy after the fact. The authors stop short of claiming immunity, but argue the instrument is harder to game through narrative than the process instruments tested elsewhere.

## What this means for practice

- **Instructors.** Assess the verification process a student documents, not only the artifact's polish — and weight deterministic, discipline-specific checking heavily enough to act as a validation floor.
- **Programme leaders in other design and applied disciplines.** Adapt the documentation and peer-audit criteria directly, but build a domain-specific validation substrate rather than importing the BIM protocol.
- **Assessment designers.** Make peer review adversarial — students finding what a classmate's account omits — rather than relying on self-reported process narratives.
- **Administrators.** The instrument is ready for classroom piloting, but should not yet be treated as a reliability-tested, high-stakes grading tool.

## Limitations

- The rubric was internally validated by a purposively sampled panel of five senior academics (n = 5), not a larger random sample.
- It has not been piloted with scored student portfolios, and no inter-rater reliability statistics yet exist for it.
- The findings re-examine the same interview dataset as two companion papers through a different analytic lens, so the three papers are not independent sources of support.
- The AI-Validation Knowledge extension is a theoretical contribution derived from a single design case and has not been tested against alternative extensions such as Chiu's (2026) HCAP framework.

## Citation

Orhon, F. K., Cekerol, K., & Ugur, S. (2026). [Assessing Human-AI Collaboration in Design Education: A Process-Oriented Rubric Grounded in an Extended AI-TPACK Framework](https://osf.io/49s8x). EdArXiv preprint.