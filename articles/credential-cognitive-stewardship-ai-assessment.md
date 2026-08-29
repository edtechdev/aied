---
title: What Does the Credential Still Certify? Cognitive Stewardship for AI-Mediated Education
created: "2026-07-23T04:33:04-04:00"
updated: "2026-08-22T16:30:00-04:00"
type: article
tags: [generative-ai, higher-ed, educational-policy-ai, formative-assessment, llm, assessment-validity, rag]
sources: ['raw/papers/2607.19988.md']
confidence: high
---

> **Synthesis:** [[generative-ai|Generative AI]] undermines a basic premise of educational assessment: that submitted work reliably evidences the human capacities a credential certifies. Yao (2026) develops **cognitive stewardship**, a framework linking four elements — the learning claim, the delegation boundary, the evidence standard, and safeguards — to reason about what remains inferable about learning once cognitive work is delegated to AI. The paper then audits verified public GenAI assessment guidance from 30 universities across five English-speaking systems, finding that institutions are getting better at *classifying* AI use than at explaining what evidence of learning remains valid under each class.

## Key Findings

1. **The boundary–evidence asymmetry.** Across 30 audited university policy packages, the mean **delegation-boundary score was 2.47/4** but the mean **evidence-standard score was only 1.89/4** — 22 policies scored higher on boundary than evidence, 3 tied, and only 5 reversed the gap. Public guidance draws lines around what AI *may* do more often than it explains what evidence of learning must *remain*.
2. **Safeguards are present but sparse.** Packages contained a mean of **2.75 of 8 possible safeguards**: privacy was most visible (67%), followed by detection caution (47%), accessibility (42%), appeal/due process (33%), tool-access equity (32%), vendor governance (29%), non-AI alternatives (22%), and workload/proportionality (4%). Institutions ask for disclosure more often than they provide protection, recourse, or alternatives.
3. **Policies are clearest for final-output substitution.** Substitution averaged **2.49/4** actionability with clear answers in **83%** of packages, while the other five scenarios (access, [[feedback]] support, process, output-verification, programming workflow) ranged from 1.17 to 2.32. Guidance is strongest when AI use resembles cheating and weakest when it resembles learning support or authentic professional workflow.
4. **Output-verification support is the thinnest scenario.** Only **23%** of packages directly covered the capacity to inspect, challenge, and correct AI output — arguably one of the strongest reasons to teach with AI. Only **31%** required evidence connecting access support back to the assessed claim.
5. **Four policy archetypes.** Nine packages were higher-clarity (connecting permission to evidence and safeguards), four were boundary-forward (visible AI-use categories with thin evidence/safeguards), eight had limited evidence visibility, and nine were partially connected. The framework identifies a design gradient, not a compliant/noncompliant binary.

## The educational delegation problem

The paper names the core problem **educational delegation**: not whether AI touched the work, but *which cognitive operations moved from the learner to the system* and which remained. One student may use AI feedback while retaining problem formulation, source evaluation, revision judgment, and final responsibility; another may delegate topic selection, evidence search, argument structure, drafting, and citation. Both involve AI, but they support very different educational inferences.

Assessment validity asks whether a task produces evidence for a learning claim; credential validity asks whether accumulated evidence justifies an institutional claim about the learner. Artifact-centered [[assessment]] is fragile because a final product can look excellent while revealing little about which operations the learner performed — and detection does not solve this, since even perfect AI-detection would not show whether the use was educationally appropriate or displaced the target capacity.

## The cognitive stewardship framework

Cognitive stewardship links four elements:
- **The learning claim** being certified
- **The delegation boundary** specifying what AI may do
- **The evidence standard** showing what observable work, explanation, verification, or defense remains
- **The safeguards** protecting privacy, accessibility, proportionality, equity, and appeal

Its unit of analysis is not an individual competency checklist but the **warrant behind a course, program, or credential**. A policy is under-specified when any element is missing — a course can clearly permit AI and still fail to say what it can certify, or prohibit AI and still fail to protect access or due process. The main design rule: **start with the certified claim, not the tool**. If delegation would remove the operation being certified, the boundary should be restrictive or the task redesigned; if delegation supports the claim but changes the evidence, the policy should add process evidence, explanation, verification, or defense.

The framework uses five recurring delegation types: **access support** (translation, speech-to-text, assistive scaffolding), **feedback support** (critique while the learner retains judgment), **process support** (planning, drafting, debugging), **substitution** (AI performs the operation being assessed), and **output-verification support** (treating checking AI-mediated work as a taught, assessed capability). These are role descriptions, not moral labels — the same use can be access support in one task and substitution in another.

## Audit method

The audit scored public [[educational-policy-ai|institutional policy]] packages (the set of official sources through which each university tells students how GenAI may be used in assessed work) across the UK (11), Australia (5), New Zealand (2), Canada (5), and the US (7). A pre-specified, source-grounded scoring codebook was applied by four open-weight [[llm|LLMs]] as structured coders, with scores averaged to dampen single-model bias. The audit treated public guidance as a reader-facing artifact — what a student, instructor, or reviewer can see about claim, boundary, evidence, and safeguard. Between-model agreement was a sensitivity measure, not validation, so exact score levels are exploratory descriptions.

## Implications for AI in education

The takeaway is that **permission categories are necessary but insufficient**: universities need [[educational-policy-ai|policies]] that make the certification logic visible — what learners may delegate, what they must still demonstrate, and how institutions will protect fair evidence rather than merely monitor AI use. This shifts the [[assessment-validity]] question from detection and [[academic-integrity]] enforcement toward specifying delegation boundaries per learning claim.

Cognitive stewardship is a [[governance]] arrangement, not merely an assessment technique. It matters that disclosure and monitoring can make students *more visible* to the institution without making assessment *fairer*, and that surveillance harms may fall unevenly on racialized, disabled, low-income, international, and linguistically marginalized learners — [[privacy]] and accessibility are therefore conditions of stewardship, not exceptions: the relevant question is whether assistance bypasses the learning claim or enables access to it. The framework also cautions against relying on today's AI weaknesses (hallucination, bias) as the stable foundation for educational policy — the stronger question is which human capacities should remain visible even when task performance can be delegated. This connects to the wiki's [[theory-development-aied|theory-building]] thread and complements [[ai-assessment-scale-reform]] and [[universities-ai-era-rethinking]] on redesigning credentials for [[ai-education|AI-mediated education]].

## Connected Concepts

- [[assessment-validity]]
- [[academic-integrity]]
- [[authentic-assessment]]
- [[cognitive-offloading]]
- [[educational-policy-ai]]
- [[ethics]]
- [[generative-ai]]
- [[governance]]
- [[theory-development-aied]]
- [[trust]]

## Connected Articles

- [[genai-assessment-governance]] — Generative AI assessment governance
- [[genai-policies-higher-ed-computing]] — GenAI policies in higher-ed computing
- [[ai-assessment-scale-reform]] — AI assessment scale reform
- [[universities-ai-era-rethinking]] — Rethinking universities in the AI era
- [[genai-declaration-frameworks-higher-education]] — GenAI declaration frameworks in higher education

## Citation

Yao, K. (2026). [What Does the Credential Still Certify? Cognitive Stewardship for AI-Mediated Education](https://arxiv.org/abs/2607.19988). (cs.CY). Accepted at AIES 2026.
