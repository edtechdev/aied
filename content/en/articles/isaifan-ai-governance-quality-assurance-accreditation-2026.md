---
title: "Quality Assurance Framework for AI Governance and Integration in Higher Education Accreditation: A First Operational Model for Safe AI Integration"
created: "2026-11-20T09:15:00-05:00"
updated: "2026-11-20T09:15:00-05:00"
type: article
pedagogy: []
technology: [generative-ai]
institutions: [governance, institutional-ai-infrastructure, educational-policy-ai]
ethics: [ethics]
level: [higher ed]
audience: [administrators, researchers]
page_kind: [framework]
sources: ['raw/papers/isaifan-ai-governance-quality-assurance-accreditation-2026.md']
source_url: "https://doi.org/10.3390/educsci16111976"
source_depth: full text
confidence: medium
evidence_context: educational
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-20"
    agent: hermes-agent
---

> **Synthesis:** [[governance|Governance guidance]] for AI in higher education has produced a shelf of principles—transparency, accountability, fairness, [[human-in-the-loop-ai|human oversight]]—and almost no procedure for demonstrating compliance with any of them. Isaifan and Hasna argue that the fix belongs where quality claims already become auditable: the accreditation cycle. Their framework decomposes that cycle into ten stages, assigns each a permission level for AI (Safe, Limited, Restricted, or Not Permitted), and reserves compliance findings, ratings, and the final accreditation outcome for humans. Permission is set by five risk dimensions—data sensitivity, system reliability, deployment conditions, error consequences, and the capacity of an output to steer reviewer judgment—rather than by stage alone, and the most restrictive applicable rule wins. The contribution is procedural, not empirical: it converts ethical commitments into stage-specific rules an agency could inspect, and reframes AI adoption as a governance problem rather than a technology procurement one. They cover the first of two dimensions: how AI is used during a review, not how institutions govern it.

## Key Findings

- Existing AI governance guidance stops at principles, so institutions can endorse responsible AI in policy while holding no verifiable method for demonstrating compliance inside accreditation review.
- The accreditation lifecycle is decomposed into ten stages, from application and eligibility through follow-up monitoring, each with a named human role, AI role, permission level, and safeguard.
- Four permission levels apply: Safe Use for administrative support, Limited Use for preliminary analysis requiring independent verification, Restricted Use for non-evaluative work in sensitive contexts, and Not Permitted for compliance judgment and scoring.
- Classification follows five risk dimensions rather than stage, so an administrative task handling sensitive evidence can be restricted while a stage nominally designated Safe stays subject to tighter conditions.
- The framework's first rule is non-negotiable: no AI involvement at all in the accreditation decision stage, including administrative support, regardless of how low-risk the other dimensions appear.
- AI risk flags are preliminary indicators, never findings; unsupported or unverifiable output must be excluded from the evidence base, which is the framework's stated defense against [[automation-bias|automation bias]].
- Implementation depends on five governance requirements: assigned responsibility, a register of authorized applications, verification against original evidence, retained audit records, and procedures for reporting errors and breaches.

## Where principles meet procedure

Governance guidance for AI in [[higher-ed|higher education]] is abundant and operationally silent. UNESCO, the OECD, and accreditation bodies converge on transparency, accountability, fairness, and human oversight; an institution can adopt all four in a policy statement and still have nothing an external reviewer can inspect. [[governance|Governance]] without a procedure is a public commitment, not a control. Accreditation is where that gap bites, because it is the mechanism through which quality claims become auditable: evidence is submitted, verified, judged, and recorded. The authors embed AI rules in that cycle rather than build a parallel structure, and separate two things easily confused: governing AI use during a review, which the framework does, and evaluating an institution's own [[institutional-ai-infrastructure|AI governance arrangements]], which they leave to existing standards.

## Permission is a property of the activity

The four levels are determined by what an activity does, not by where it sits in the sequence. Safe Use covers completeness checks, formatting, and citation verification; Limited Use covers risk flagging, gap detection, and consistency checks whose output must be verified independently; Restricted Use covers consent-based transcription, indexing, and factual cross-referencing in sensitive settings; Not Permitted covers compliance findings, ratings, and the decision itself. Five dimensions decide the assignment: data sensitivity, system reliability, deployment conditions, consequences of error, and, most tellingly, whether an output can redirect a reviewer's attention. The rules are hierarchical, so when dimensions disagree the more restrictive classification prevails. Evaluation against standards tests the logic: AI may index and cross-reference documents there, but may not produce the judgment they support, which is the boundary of [[evaluative-judgment|evaluative judgment]].

## What disclosure would have to contain

Two policy requirements carry the weight. The first is [[ai-use-disclosure|mandatory disclosure]]: institutions report which tools they use, for what purpose and scope, on which data, under whose oversight, and whether a system supports, analyzes, or decides. Without that inventory an agency cannot distinguish a formatting assistant from an admissions model, and comparability across institutions disappears. The second is evidence. Where AI governance enters accreditation standards, the authors want documentation a reviewer can check—approved policies, committee terms of reference, AI-use registers, training records, risk assessments, incident logs—rather than statements of intent. The framework's own audit trail is similar: named responsibility per activity, a register of authorized applications with their permission levels, verification against original institutional evidence, retained records, and procedures for inaccurate output, [[bias-mitigation|bias]], unauthorized use, or confidentiality breach under [[privacy|data protection]].

## From output auditing to system assurance

The broader claim is that AI changes what quality assurance must examine. Accreditation traditionally assumes a stable relationship between documented process and outcome, and evaluates outputs. AI-assisted [[assessment|assessment]] affects grading consistency and [[feedback|feedback]] quality; analytics shape institutional decisions; the processes producing evidence are themselves adaptive and opaque. On this reading, [[trust|trust]] in accreditation rests less on the review model's sophistication than on visible human accountability where consequences attach—status, funding, reputation. Reviewers trained on static documentation now judge systems that change between site visits. The authors treat AI as a structural feature of the sector and shift the question from output auditing to system-level assurance—a framing that places the framework alongside risk-proportionate [[regulation|regulation]], with the heaviest obligations clustering at the evaluative end.

## What this means for practice

- **Administrators.** Build an AI-use register before the next review cycle: tool, purpose, data touched, named owner, permission level, and the evidence showing a human verified each output.
- **Program directors.** Assume self-study evidence will be interrogated for AI involvement; log which tools touched which documents, so verification against original evidence is demonstrable.
- **Researchers.** Test the classification rules against real accreditation files and report where reviewers disagree; inter-rater reliability is untested and the ten-stage sequence is one agency's decomposition.

## Limitations

- Conceptual and normative synthesis: no interviews, no pilot, and no reliability testing of the classification rules.
- The permission levels are the authors' proposal; they state that UNESCO, OECD, ESG, INQAAHE, and CHEA do not prescribe them.
- An implementation project is named as the framework's operational test, but its architecture and outcomes are withheld under a confidentiality arrangement.
- The ten-stage lifecycle is an analytical decomposition, and no remapping is shown for agencies whose sequence differs.
- Both authors work inside Qatar's interior and education ministries, so reviewer selection and site-visit practice reflect one national system.

## Citation

Isaifan, R. J., & Hasna, M. O. (2026). [*Quality Assurance Framework for AI Governance and Integration in Higher Education Accreditation: A First Operational Model for Safe AI Integration*](https://doi.org/10.3390/educsci16111976). Education Sciences, 16(11), 1976.
