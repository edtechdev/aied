---
title: "Delegation Is Not Assistance: Agentic AI and Assessment Governance in Higher Education — A Comparative Documentary Analysis of 12 Universities"
created: "2026-10-16T07:00:00-04:00"
updated: "2026-10-16T07:00:00-04:00"
type: article
sources: ['raw/papers/wong-sun-agentic-ai-assessment-governance-2026.md']
confidence: low
page_kind: [framework, evaluation]
research_method: [policy analysis]
level: [higher ed]
audience: [administrators, instructors, assessment designers, policymakers]
pedagogy: [self-regulated-learning, student-ai-interaction]
technology: [generative-ai, llm]
assessment: [assessment, assessment-validity, process-oriented-assessment, authentic-assessment]
foundations: [agentic-ai, agency, academic-integrity, human-ai-collaboration]
institutions: [educational-policy-ai, governance, regulation]
ethics: [ai-use-disclosure, trust, equity-in-ai-education, privacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-16"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Wong and Sun compare public assessment guidance from 12 universities — six cases whose central policy already names [[agentic-ai]], and six comparators with mature but generative-AI-era policy — to ask what changes when AI can plan, use tools, and act rather than merely produce text. Coding the documents on six dimensions, they locate the new governance work in two places: the delegation of learning responsibility and access to institutional systems. Their Delegation-Evidence-Access (DEA) framework reframes the governing question from whether [[generative-ai]] was used to which responsibilities a student transferred, what [[assessment|evidence of learning]] survives that transfer, and where an agent may act on a student's behalf. The evidence base is thin — 12 theoretically sampled documents, no inter-rater reliability, no claim of prevalence — but the conceptual shift, from tool permission to responsibility allocation, is the durable part.

## Key Findings

1. All six agentic-aware cases distinguished agentic AI from conventional generative AI, and five established an explicit delegation boundary, with the sixth addressing it only partially.
2. Access produced the clearest structural difference between the groups: four agentic-aware cases set explicit access boundaries and two did so partially, while no comparator document addressed an AI agent autonomously logging into a learning-management system, holding user credentials, or operating institutional systems on a student's behalf.
3. Mature generative-[[educational-policy-ai|AI policy]] did not become obsolete. Five of six comparators explicitly linked assessment to credible evidence of learning and all six addressed task-level transparency; all six also carried partial principles against AI replacing the student's assessed work.
4. Program-level assurance of learning was sparse in both groups — one explicit and one partial case in each — leaving a gap between assignment-level rules and the capabilities a degree claims to certify.
5. The paper proposes the Delegation-Evidence-Access (DEA) framework and organizes assessment into four contexts: independent capability demonstration, AI-assisted learning, bounded agentic collaboration, and agentic AI as an assessed capability.
6. It derives a task-, course-, and program-level implementation model and sets out five priorities for Malaysian institutions, from distinguishing acting systems from content-generating systems to providing sandboxed environments where supervised agent use is itself the learning objective.

## Delegation, not authorship, becomes the governance object

The generative-AI policy era asked who wrote the product. The paper's argument is that agentic AI adds a second and non-equivalent question: who performed the chain of consequential judgments and actions needed to complete the task. A student may personally press submit after delegating problem decomposition, source evaluation, argument planning, code execution, and debugging to an agent; a student may equally let an agent run mechanical operations while keeping problem definition, evaluation criteria, and final judgment. The authors argue that a single use-versus-non-use axis cannot capture that difference. Both the most permissive and the most restrictive of their cases make the same move: Queen's University locates its distinction in delegation rather than in the form of content, and Touro University by default bars agents from autonomously generating, solving, or deciding in graded assessment. Either way, the object of governance becomes which responsibilities the student transferred. This is a governance frame, not a technical one, and it connects to a long-standing debate about [[agency]] and [[academic-integrity]] in AI-mediated assessment.

## Access turns infrastructure into a question of validity

In a conventional generative-AI workflow a student can copy an assessment question into an external interface and return to the university system only to submit, so assessment governance and digital-infrastructure governance stay partly separate. Agentic AI collapses that separation. The University of Kansas warns that an agent may log into a learning system and complete work autonomously; Saint Xavier University defines agentic AI as browsing websites, logging in, sending messages, retrieving files, invoking APIs, executing workflows, and making multi-step decisions, and applies least-privilege principles to data and access rights; Queen's University links assessment design to credential and system security and explicitly recognises interaction with learning-management systems. The authors' point is that once an agent can act under a [[learner-identity|student identity]] — reading instructions, modifying files, submitting work — identity authentication, system permission, and [[assessment-validity]] become different facets of one educational-governance problem. Access control, on this reading, is not an information-security detail but a condition of whether assessed activity can still be attributed to the student.

## Evidence of learning is the durable bridge

A comparison drawn purely on terminology would suggest that mature generative-AI policy is obsolete once institutions start discussing agents. The findings do not support that. Harvard University urges assessment design that verifies understanding through oral examination, process explanation, in-class work, or other checks beyond a large take-home product; Monash University Malaysia places the legitimacy of any AI restriction in the function of the assessment as evidence of learning; University College London separates outcomes that must be demonstrated independently from those AI may support and those in which [[ai-literacy|responsible AI use]] is itself the assessed capability; and UNSW Sydney links secure assessment to program learning outcomes. The lasting principle, the authors argue, is not the preservation of AI-free work but assessment that generates evidence strong enough to support the capability claim made about the student. That reframes the design question toward [[process-oriented-assessment]] and [[oral-assessment]] rather than detection. It also keeps [[ai-use-disclosure]] in its place: transparency addresses a transparency problem, but it does not by itself establish learning.

## Four contexts, three levels, four pathways

The DEA framework is paired with four educational contexts so institutions need not write new rules for every product release: independent capability demonstration, AI-assisted learning, bounded agentic collaboration, and agentic AI as an assessed capability. Bounded agentic collaboration — an agent executing specified subtasks under constrained autonomy, with the student retaining judgment — most directly operationalises the bounded-autonomy principle Salah and colleagues proposed, and it sits alongside the [[self-regulated-learning]] literature the paper draws on through Zimmerman's account of planning, monitoring, and regulation. The implementation model then runs across task, course, and program: state non-delegable responsibilities in each assessment brief; examine the course as a portfolio with at least one credible means of verifying critical outcomes; and map each program outcome to an assessment node capable of producing strong individual evidence. The paper also sketches four institutional pathways — explicit extension (Queen's, Saint Xavier), strong restriction (Touro), principle absorption (Case Western Reserve), and technologically neutral assurance (UNSW Sydney) — and warns that policy modernisation is not the addition of the word "agentic". A policy may use the term and remain weak if it never says what may be delegated, which systems may be accessed, and how capability will be verified.

## What this means for practice

- **Instructors.** Move the assessment brief beyond "AI permitted": state which cognitive responsibilities may not be delegated, whether an agent may execute defined subtasks, and how the student will explain the final result.
- **Assessment designers and programme leaders.** Layer product, process, and performance evidence proportionately to the stakes, and map each program outcome to at least one assessment node that can yield strong independent evidence.
- **Institutions and IT governance.** Treat credentials, LMS access, and automated submission as assessment-governance decisions under least-privilege principles rather than purely as security settings.
- **Policymakers.** Require central AI guidance to distinguish content-generating systems from systems that act on a user's behalf, and support sandboxed environments where configuring, supervising, and auditing agents is itself taught.
- **[[curriculum-design|Curriculum]] teams.** Avoid the two failure modes the paper names — letting agents replace capabilities students must develop, or restricting AI so heavily that graduates are unprepared for professional [[human-ai-collaboration|human-AI collaboration]].

## Limitations

- The 12 cases were theoretically sampled and are not statistically representative; counts such as "five of six" describe the selected cases only and must not be read as prevalence.
- The agentic-aware group was sampled partly because explicit agentic guidance existed, so the terminology difference is partly a consequence of the design; the authors treat the downstream differences in delegation, access, evidence, and program assurance as the analytically important ones.
- Only public, central, English-language documents were analyzed, so "not identified" cannot be read as institutionally absent — faculty guidance, course outlines, and internal IT controls may add provisions.
- Policy text is not policy implementation; ambiguity, resources, and local interpretation change how rules are enacted, and the study reports no inter-rater reliability statistic because it used two analytic passes rather than blind double coding by independent coders.
- The analysis is a policy snapshot up to a retrieval cut-off of 3 October 2026 in a fast-moving area, and a one-time classification cannot track how guidance evolves.

## Citation


Wong, K., & Sun, B. (2026). [*Delegation Is Not Assistance: Agentic AI and Assessment Governance in Higher Education — A Comparative Documentary Analysis of 12 Universities*](https://doi.org/10.53797/ujssh.v5i2.19.2026). *Uniglobal Journal of Social Sciences and Humanities, 5*(2), 158-171.
