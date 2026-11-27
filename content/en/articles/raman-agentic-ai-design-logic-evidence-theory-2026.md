---
title: "Agentic AI in education: design logic, evidence quality, and theoretical foundations"
created: "2026-11-24T01:05:00-05:00"
updated: "2026-11-24T01:05:00-05:00"
published: "2026-11-24"
type: article
authors: ["Raghu Raman", "Kai-Yu Tang", "Prema Nedungadi"]
venue: "Frontiers in Education"
evidence_context: educational
foundations: [agentic-ai, critiques-of-ai-in-education, limitations-in-aied-research]
pedagogy: [learning-theories, metacognition, sociocultural-learning]
technology: [human-in-the-loop-ai, llm, pedagogical-agent]
assessment: [self-report-measures]
methods: [meta-analysis-systematic-review, quantitative-research]
institutions: [governance, educational-policy-ai, change-management]
ethics: [ethics, privacy, equity-in-ai-education]
research_method: [literature review]
discipline: [learning sciences]
level: [higher ed, k 12, adult learning]
audience: [researchers, instructional designers, instructors, administrators, policymakers]
page_kind: [synthesis]
sources: ["raw/papers/raman-agentic-ai-design-logic-evidence-theory-2026.md"]
confidence: high
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-24"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, quotes]
---

> **Synthesis:** Raman, Tang and Nedungadi (2026) code 170 agentic-AI-in-education papers from Scopus (2022-2026) against the ADO-TCM framework across 23 dimensions. The field they describe runs on technical capability rather than pedagogy: 90.0% of papers engage no [[learning-theories|learning theory]], 57.1% never state whether their agents act autonomously or under supervision, only 11.2% use comparison groups, and 5 (2.9%) meet the authors' strong-evidence criteria. Stated rationales cluster on leveraging AI capabilities (49.4%) and enhancing engagement (47.6%), while [[equity-in-ai-education|equity]] appears in 9.4%. Coverage inverts enrollment — [[higher-ed|undergraduate]] 21.8% against [[k-12]] 8.8%, and 60.0% of abstracts name no level. The review closes with three propositions ([[scaffolding]] anticipation, autonomy load, distributed autonomy) and evidence, reporting and equity standards.

*[[meta-analysis-systematic-review|Systematic review]] of 170 [[primary-education|primary]] studies (219 coded) from one database (Scopus), English-language, 2022-2026, coded from titles and abstracts by three raters across 23 ADO-TCM dimensions (Fleiss' Kappa 0.79; stability 0.91). Frequencies describe what abstracts report, not the full texts.*

## Key Findings

- **Theory is largely absent.** 153 of 170 papers (90.0%) engage no learning theory, only 6 (3.5%) name one explicitly, and 164 (96.5%) show no integration beyond a shallow mention. Core [[learning-sciences]] frameworks are close to missing: [[cognitive-offloading|cognitive load]] in one paper, schema theory and [[sociocultural-learning|sociocultural theory]] in none, despite all three speaking directly to how an agent should pace, structure and mediate instruction.
- **Autonomy is the design decision nobody reports.** 97 papers (57.1%) leave the agent's autonomy unspecified. Where it is stated, 44 (25.9%) are semi-autonomous, 24 (14.1%) fully autonomous and 5 (2.9%) supervised. Autonomy decides whether learners retain or cede [[agency|agency]], so its absence from the abstract leaves practitioners unable to judge fit.
- **Roles are bundled rather than argued.** 74 papers (43.5%) assign an agent several roles without [[pedagogy|pedagogical]] justification, and 38 (22.4%) cast it primarily as an assessor. Papers addressing multiple problems are markedly more likely to bundle roles, the one association among six pre-specified tests that survives correction.
- **The evidence base cannot support effectiveness claims.** Only 5 papers (2.9%) meet the strong-evidence criteria of experimental or quasi-experimental design, comparison group and adequate sample; 125 (73.5%) provide weak evidence. Comparison groups appear in 19 papers (11.2%), effect sizes in 16 (9.4%), and 119 of 146 empirical papers (81.5%) do not report a sample size.
- **Outcomes are reported positively but thinly.** 48 papers (28.2%) report positive outcomes, 32 (18.8%) mixed, 7 (4.1%) neutral or negative, and 35 (20.6%) report no outcome in the abstract at all.
- **Coverage inverts enrollment.** Undergraduate settings dominate with 37 papers (21.8%), K-12 has 15 (8.8%), and 102 (60.0%) name no level. [[special-education|Students with disabilities]] appear in 15 papers (8.8%), English language learners in 3 (1.8%) and at-risk students in 1 (0.6%); teachers appear in 68 (40.0%).
- **Rationales track capability, not need.** "Leverage AI capabilities" is cited in 84 papers (49.4%) and "enhance engagement" in 81 (47.6%); reducing [[teacher-role|teacher]] workload appears in 23 (13.5%), scaling [[personalized-learning|personalization]] in 20 (11.8%) and equity in 16 (9.4%). Only 31 papers (18.2%) identify a gap in prior research, and 40 (23.5%) report any consultation with teachers or students.

## Capability has replaced necessity as the design rationale

The two dominant rationales for building agentic systems in education both point at what the technology can do rather than at a documented learning problem. Nearly half the corpus (84 papers, 49.4%) justifies development by leveraging AI capabilities, and almost as many (81, 47.6%) by enhancing engagement. The authors read this pairing as circular: the rationale for using AI is that AI has capabilities. Efficiency rationales that practitioners actually feel — reducing teacher workload (23 papers, 13.5%) and scaling personalized instruction (20, 11.8%) — trail far behind, and equity or inclusion appears in only 16 papers (9.4%).

That pattern matters because it shapes what gets measured. Only 31 papers (18.2%) identify a gap in prior research before proposing a solution, and gap identification does not improve with problem complexity: 19.8% of multi-problem papers and 20.5% of single-problem papers articulate one. Most studies move from observing a problem straight to deploying an intervention, comparing against traditional instruction or nothing rather than against earlier agentic attempts. The result is parallel tracks of disconnected research that do not accumulate.

Stakeholder input is similarly scarce. Forty papers (23.5%) report consulting teachers or students, and where that input appears it tends to arrive late, during pilot testing, after the design decisions it could have shaped are already made.

## Three propositions for a theory gap

The review's constructive half is three proposals aimed at the autonomy problem rather than at the reporting problem. *Scaffolding anticipation* asks what an agent must be able to predict about a learner before it acts without being asked. *Autonomy load* describes the competition between following an agent's unrequested actions and the resources available for learning itself, rising with the frequency of unrequested actions and falling when the agent explains the basis of what it does. *Distributed autonomy* extends [[self-determination-theory]] by treating a human-AI system as several autonomous actors whose agency may complement, compete or negotiate, rather than assuming a single [[self-directed-learning|self-directed]] human chooser. The authors also call for theories of technological affordance actualization — the mechanisms by which a capability becomes a pedagogical reality — and for treating pedagogical tensions as tradeoffs to optimize rather than problems to eliminate.

## Decisions the field leaves unspecified

The biggest omission is autonomy. Among papers whose abstracts specify it, 44 run semi-[[agentic-ai|autonomous agents]] that admit periodic teacher input, 24 deploy fully autonomous agents whose actions reach learners unfiltered, and only 5 describe continuous [[human-in-the-loop-ai|human oversight]]. The other 97 (57.1%) say nothing. This is the dimension on which [[student-experience|learner experience]] turns: full autonomy may undermine the learner's own agency, while supervision may impose a workload the classroom cannot sustain, and without it no reader can tell which regime a finding belongs to.

Role assignment shows the same vagueness. Seven roles appear in the corpus, and 74 papers (43.5%) combine several of them in one agent — tutor, companion, facilitator and assessor at once — with the abstract rarely explaining how the roles integrate or why bundling them is preferable. Thirty-one papers (18.2%) do not name a role at all. The one pre-specified association that survives Holm correction links problem breadth to role breadth: papers addressing multiple problems are more likely to bundle roles (OR = 3.06, 95% CI 1.48-6.03, p = 0.010). Assessment is the single most common role (38 papers, 22.4%), which raises a positioning question the review poses rather than answers: when an agent mainly evaluates, do students experience it as an evaluative authority rather than a source of learning support?

Technical foundation is unreported in 102 papers (60.0%), a transparency and replication barrier. Of those that do report, 36 (21.2%) use a [[llm|foundation model]], 21 (12.4%) rule-based systems and 8 (4.7%) custom [[machine-learning]] models.

## An evidence base built without comparison

The methods literature in this corpus is dominated by designs that cannot isolate an effect. Mixed or other designs account for 77 papers (45.3%), case studies for 38 (22.4%) and conceptual papers for 24 (14.1%). Experimental studies number 20 (11.8%) and quasi-experiments 5 (2.9%). Many papers labeled experimental lack random assignment, adequate controls or sufficient power.

Comparison is the sharpest gap. Only 19 papers (11.2%) employ a comparison group; 127 (74.7%) do not. A study without a comparator cannot distinguish an agent effect from instructor enthusiasm, [[curriculum-design|curriculum]] change, novelty or practice effects. Effect sizes compound the problem: 122 papers (71.8%) neither report nor qualify one, and among the remainder 16 claim a large effect while none report a medium or small one — a distribution the authors read as a reporting artifact. Sample sizes are absent from 119 of 146 empirical abstracts (81.5%), and only 2 exceed 300 participants.

Measurement adds its own weakness. Tests and assessments appear in 90 papers, surveys in 71, [[learning-analytics|learning analytics]] in 32 and interviews in 14; none reports classroom observation as a primary source. Surveys introduce social-desirability bias, and analytics record behavior rather than learning. Challenges are under-reported too: 105 papers (61.8%) name none.

## Who gets researched, and who does not

Context coverage skews sharply toward the researchers' own institutions. [[undergraduate-education|Undergraduate education]] accounts for 37 papers (21.8%) and [[graduate-education|graduate]] or professional education for 28 (16.5%), while K-12 appears in 15 (8.8%) and adult [[adult-learning|continuing education]] in 5. The abstracts of 102 papers (60.0%) do not state an educational level, and 40 (23.5%) do not state a domain. Where domains are named, language and literacy dominate with 58 papers (34.1%) and STEM follows with 42 (24.7%); professional and vocational education receives 10 (5.9%).

Population exclusion is starker. Students with disabilities appear in 15 papers (8.8%), English language learners in 3 (1.8%) and at-risk or underserved students in 1 (0.6%) — the groups the authors note face the greatest learning challenges and might benefit most from personalized agent support. Teachers appear in 68 papers (40.0%), the one group with substantial coverage.

The authors describe this as a self-reinforcing cycle: researchers study accessible populations in familiar settings, producing evidence that applies only there; practitioners elsewhere cannot act on it with confidence; funders follow demonstrated effectiveness, so underexamined contexts stay unfunded. Agents designed for self-regulating university students may impose demands that younger learners, [[multilingual-learning|English learners]] or students with disabilities cannot meet.

## What this means for practice

- **Instructors.** Ask for the autonomy level before anything else, and treat an abstract that does not state it as unresolved. Budget for supervision time — overriding, interpreting and troubleshooting — because automation claims rarely account for it.
- **Instructional designers.** Resist multi-role agents unless each role carries a stated pedagogical job. A focused assessment agent, a [[metacognition|metacognitive]] companion and a facilitator are defensible; one system that tutors, companions, facilitates and grades usually means the design problem was never settled.
- **Administrators.** Treat vendor case studies and short pilots as hypothesis-generating, not adoption evidence. Require a comparison group, an effect size and a sample size before procuring at scale, and require vendors to disclose autonomy level, role boundaries and the theory behind the design.
- **Policymakers.** Tie funding to theoretical grounding, comparison designs and effect-size reporting, and direct bonus funding at K-12, disability, language-learner and underserved settings where the evidence is thinnest.
- **Researchers.** Report level, domain, institution type, sample size with a power analysis, and implementation conditions. Archive datasets and code. Value replication and rigorous null results over novel demonstrations.

## Limitations

- The search used one database (Scopus) and English-language publications from 2022 to 2026, so work indexed elsewhere or published in other languages is outside the review.
- Eligibility and coding used titles and abstracts only, so the high "not specified" rates for theory, autonomy, technical foundation, sample size and effect size describe reporting and may overstate the underlying gaps.
- The two-of-three threshold defining agentic AI is operational; a different threshold yields a different study set.
- Secondary studies were excluded to avoid double counting, so evidence available only in syntheses is not represented.
- The evidence-quality indicator combines three design features and is not a risk-of-bias appraisal. The six association tests are exploratory with low power for indicators with few positive cases, and Cramér's V summarizes association without establishing causation.
- Coding required interpretive judgment, which reliability procedures reduce but cannot remove; re-coding stability averaged 0.91.

## Citation

Raman, R., Tang, K.-Y., & Nedungadi, P. (2026). [Agentic AI in education: design logic, evidence quality, and theoretical foundations](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2026.1948156/full). *Frontiers in Education, 11*, 1948156.
