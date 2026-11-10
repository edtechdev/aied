---
title: "Wording Matters: Understanding How GenAI Policy Rules Shape Teachers' and Students' Workflows and Perceptions"
created: "2026-11-10T18:30:00-05:00"
updated: "2026-11-10T18:30:00-05:00"
type: article
page_kind: [synthesis]
research_method: [policy analysis, interviews]
evidence_context: educational
level: [higher ed]
audience: [instructors, administrators, researchers]
sources: ['raw/papers/mehreen-genai-policy-wording-2026.md']
source_url: "https://arxiv.org/abs/2611.11072"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [academic-integrity, framing-ai-use-for-students, teacher-role]
pedagogy: [student-ai-interaction]
technology: [generative-ai]
assessment: [ai-detection]
methods: [qualitative-research]
institutions: [educational-policy-ai, governance]
ethics: [ai-use-disclosure, trust]
---

> **Synthesis:** Mehreen, Yuan, Nithyanand and Hoque read 694 [[generative-ai|GenAI]] policy documents from 101 U.S. [[higher-ed|universities]] into nine recurring rules, then interviewed 20 students and 20 faculty about those rules. Each rule appears in materials from at least 77 institutions, but they are spread across central offices, teaching centers and disciplinary units — a median of six policies from four sources per institution — so knowing the rule is not knowing what compliance looks like. The sharpest finding is about [[framing-ai-use-for-students|wording]]: a rule treating passing off AI-generated content as [[academic-integrity|academic dishonesty]] was tied to concealment, while holding students accountable for inaccurate or biased output was tied to ownership and transparency. Students described uncertainty, fear of penalties and stigma; [[teacher-role|instructors]] absorbed approval work, interpretation and an enforcement problem they could not verify. As [[qualitative-research|qualitative]] interviews plus document analysis, the [[governance]] contribution is a map of reported workflows, not an [[educational-policy-ai|effect of policy]] on outcomes.

## Key Findings

1. **Nine rules recur across a large corpus.** 694 documents from 101 universities yielded nine expectations, each present in materials from at least 77 institutions, with instructor approval the most widespread at 2,508 excerpts.
2. **Rules are distributed across offices, not gathered.** Teaching centers contributed 153 documents across 71 institutions and provost offices 77 across 51; the median institution had six policies from four sources.
3. **Dishonesty framing tracked with concealment, accountability framing with ownership.** Students discussing misrepresented authorship described pretending not to use AI; the output-accountability rule drew output checking as an ordinary habit of submission.
4. **Vagueness served as licence and as risk.** Approval, sole-ownership, authorship and penalty rules were called vague; students set their own boundary at copying versus retaining ownership, and some avoided asking permission.
5. **Instructors carried work they could not discharge.** Approval added a communication layer up to classes of 200 students, and enforcement became "a trust situation" once detection tools were restricted or distrusted.
6. **Disclosure was the cheapest mechanism and the thinnest.** More participants discussed it than any other rule (13 of 20 instructors, 12 of 20 students); four instructors said it flattens uses into one uninformative sentence.

## Nine rules, written in different offices

The document analysis coded 150 policies by hand under a grounded theory approach, producing 432 annotated examples and nine rule definitions; a multi-agent workflow then applied that codebook to all 694 documents, extracting 11,017 excerpts with 11,211 rule assignments. One researcher checked 320 excerpts carrying 342 labels and confirmed 331, a reported F1 of 97.9%, testing whether labels were right rather than whether anything was missed. Prevalence is broad: instructor approval appears in 2,508 excerpts spanning every institution, output accountability in 1,420 across 98, misrepresented authorship in 329 across 77. What that produces is less a clarity problem than a coordination problem. Teaching centers, provost offices and medical units each wrote the parts of acceptable use that fell inside their remit, so the conditions on [[student-ai-interaction|student AI use]] have to be assembled from documents answering to different offices.

## Two rules, opposite directions

The misrepresented-authorship rule and the output-accountability rule bound use in similar terms but do not act alike. The first attaches academic dishonesty to presenting generated work as one's own, and students who raised it described hiding: S17 said "I pretend not to use it, I pretend that I generate everything by myself." Stigma did part of that work independently of the text, with S03 describing constant discouragement that left them wondering "is this gonna end up getting me in trouble?" The second rule places responsibility for inaccurate, biased or unethical output on the student, and instructors read it as a lesson in using AI well rather than a warning; T09 said it "encourages the students to not only use AI, but also use AI wisely." Students accepted it, several describing output checks as their own habit, and S12 tied it to submission: "it falls back on you."

## The enforcement burden lands on instructors

[[ai-detection|Detection]] was not available to the instructors who wanted it. T15 described restrictions on detectors and the absence of reliable verification as leaving "just sort of a [[trust|trust]] situation"; T13 would need to be "very confident" and was not; T11 said "I don't use any of those formal tools. I just rely on my perceptions," giving students the benefit of the doubt. Approval rules added different work: T03 judged approval reasonable in principle but impractical "if you have a class with 200 students," and T13 had watched colleagues who banned AI spend their time identifying use and reporting cases to the academic integrity office. [[ai-use-disclosure|Disclosure]] was the cheapest route for both parties, which is why it drew the most comment, but four instructors observed that it flattens distinct uses into an uninformative sentence — T08: "it's just not enough to say I use the tool."

## What the matrix adds, and what it cannot carry

The interviews are summarized in a policy-impact matrix mapping each rule onto recorded consequences for teacher and student workflows, with every relationship weighted equally. Its stated primary audience is instructors, who decide how a rule is adopted in a course. Fear of unfair outcomes attaches only to rules written with negative connotations — approval, misrepresented authorship, penalties — while the constructive cells, accepted responsibility and easy disclosure creation, appear only under the two accountability rules. Data confidentiality has no cells at all, because 2 of 20 instructors and 5 of 20 students raised it. The matrix maps what 20 students and 20 instructors said rather than measuring it: nothing in the design estimates how often a wording produces concealment.

## What this means for practice

- **Instructors.** Write the rule as an obligation students can meet, not only a sanction they can breach. The accountability rule drew output checking; the dishonesty rule drew concealment, and the difference was framing.
- **Instructors.** Specify what evidence of compliance looks like before the assignment. Disclosure collapsed to "I use the tool" in four instructors' accounts, and per-request approval does not survive a class of 200.
- **Administrators.** Publish one statement of which office owns which expectation. The median institution's six policies from four sources are what instructors and students currently reconcile unaided.
- **Faculty developers.** Prepare instructors for the enforcement conversation they will actually have, because detectors were restricted or distrusted and instructors fell back on unaided perception.
- **Researchers.** Treat the matrix as a set of hypotheses. No cell is an effect estimate, and the wording contrast between the two accountability rules is testable.

## Limitations

- **Forty interviews, purposively recruited.** 20 students (16 undergraduate, 4 graduate, chosen from 179 responses to a listserv solicitation) and 20 instructors recruited through LinkedIn, direct email and snowball sampling; no representativeness is claimed.
- **The corpus is ranking-bounded.** 101 institutions from the 2024 US News Best National University Rankings, which the authors say limits representativeness because highly ranked universities' resources and policy practices may differ.
- **Participants chose which rules to discuss.** Each selected three or four of the nine, so the distribution of talk — 13 of 20 instructors on disclosure against 2 on data confidentiality — reflects selection as well as salience.
- **Validation checked correctness, not completeness.** 320 excerpts and 342 labels were reviewed with 331 confirmed, but whether the workflow missed relevant excerpts was not assessed.
- **One unweighted matrix, one time point.** Filled cells are binary and equally weighted, so nothing is ranked or sized, and accounts came from 45–60 minute Zoom interviews about past coursework.

## Citation

Mehreen, S., Yuan, X., Nithyanand, R., & Hoque, N. (2026). [*Wording Matters: Understanding How GenAI Policy Rules Shape Teachers' and Students' Workflows and Perceptions*](https://arxiv.org/abs/2611.11072). arXiv preprint arXiv:2611.11072.
