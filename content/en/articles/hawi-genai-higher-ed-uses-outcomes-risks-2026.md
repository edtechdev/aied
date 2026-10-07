---
title: "Generative AI in higher education: A systematic review of empirical uses, outcomes, and risks"
created: "2026-10-07T07:00:00-04:00"
updated: "2026-10-07T07:00:00-04:00"
type: article
foundations: [human-ai-collaboration, academic-integrity, limitations-in-aied-research, cognitive-offloading]
pedagogy: [scaffolding, self-regulated-learning]
technology: [llm, generative-ai, conversational-ai]
assessment: [assessment, automated-assessment, ai-detection, feedback]
methods: [meta-analysis-systematic-review]
ethics: [ai-misuse-learning-harm, equity-in-ai-education]
institutions: [governance]
research_method: [literature review]
level: [higher ed]
audience: [researchers, instructors, administrators]
page_kind: [synthesis]
sources: ['raw/papers/hawi-genai-higher-ed-uses-outcomes-risks-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-07"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Hawi and Samaha (2026) ran a PRISMA [[meta-analysis-systematic-review|systematic review]] of 103 empirical studies of [[generative-ai|generative AI]] in [[higher-ed|higher education]], searched across four databases for work published between January 2023 and October 2025. Coding the corpus produced seven functional categories of use and a four-level outcome typology, and the largest single result is a negative: **56% of studies** were positive but conditional, meaning the benefit depended on scaffolding, task alignment, or learners' own verification. The review's cross-cutting conclusion is that [[scaffolding|scaffolding versus substitution]] is the most stable explanatory lens in the literature — gains hold when students externalize thinking and erode when the tool produces the work — and that [[assessment|assessment design]] and institutional governance, not model capability, are what decide which happens.

## Key Findings

1. **Most reported benefits are conditional.** 56% of the 103 studies fell into the positive-but-conditional level of the outcome typology, where gains depended on clear scaffolding, task alignment, or learners' capacity to evaluate accuracy — and could carry tradeoffs at the same time.
2. **Scaffolding versus substitution explains more than any tool feature.** Across programming, STEM [[problem-solving|problem solving]], [[language-learning|language learning]], [[medical-education|health professions]], and [[intelligent-tutoring|tutoring systems]], learning improved when GenAI surfaced and strengthened student thinking through attempts, explanation, critique, and verification, and eroded when it produced complete solutions.
3. **No difference in grades often masks a change in process.** In redesigned [[cs-education|introductory programming]] courses, permitting ChatGPT left lab scores, midterms, and final grades unchanged while students' micro-actions shifted — more debugging, more attention to error messages, more copy-paste cycles between editor and [[conversational-ai|chatbot]].
4. **Detection was the weakest integrity safeguard.** Turnitin flagged AI-generated submissions, but staff reported only about half of the suspected cases, and GPT-4 submissions earned grades similar to typical student work — detection could not estimate how much AI contributed to a submission.
5. **An illusion of learning is documented, not assumed.** Studies repeatedly found increased confidence, motivation, and perceived learning *without* durable competence, most often in STEM and professional health education, where a [[simulation]] partner hides gaps in [[evaluative-judgment|evaluative judgment]] unless verification is mandated.
6. **The [[equity-in-ai-education|equity]] direction is adverse by default.** Higher-performing students used GenAI for disciplined autonomy, while lower-performing students were more susceptible to substitution, and [[personalized-learning|personalization]] benefited already-engaged learners most — so integrations may widen rather than narrow gaps.
7. **Process-sensitive measures are the methodological ask.** Because endpoint scores are weak proxies for whether GenAI strengthens or hollows out practice, the authors recommend interaction logs, code-quality metrics, and explicit justification requirements in place of grade comparisons alone.

## How the corpus was built

The search covered PubMed, EBSCO Education Source, Web of Science Core Collection, and Scopus, restricted to English-language empirical primary studies in journals ranked Q1 or Q2 by Scimago, with a final search window of 1–21 November 2025. After deduplication, 2,351 unique records were screened: 558 were removed by automated filters for date, document type, and language; title and abstract screening excluded 1,605, including 520 that were not in Q1 or Q2 journals and 1,085 that were not empirical; 115 records were sought for retrieval, 4 could not be retrieved, and 111 full texts were assessed. Eight were excluded at full text, leaving 103 studies. Two reviewers screened independently (Cohen's κ = 0.811, with 11 disagreements resolved by discussion after 25 studies were reviewed jointly to calibrate the criteria), and the outcome typology was double-coded with κ = 0.781.

The authors are candid about what the Q1/Q2 limit does: it was an author-imposed source restriction to keep a fast-growing literature tractable, not a quality judgment about the included studies, and it may have excluded relevant work in newer, regional, or interdisciplinary journals. No statistical meta-analysis was attempted, so heterogeneity was handled by narrative subgrouping across discipline, [[pedagogy|pedagogical]] purpose, and outcome pattern.

## Seven categories of use, four levels of outcome

The content analysis converged on seven functional categories: general learning support; communication, writing, and language learning; assessment, feedback, and grading workflows; pedagogical design and instructor adoption; STEM, [[learning-analytics|analytics]], and problem solving; programming and computer science learning; and health and professional education. The categories describe what GenAI is used for in practice rather than what tools can do, which is what allows the review to compare pedagogical intent across disciplines.

Outcomes were classified into four levels by direction and risk: strongly positive (durable competence gains with limited tradeoffs), positive but conditional (benefits dependent on constraints, accompanied by tradeoffs), neutral or modest (limited score change despite [[motivation|motivational]] or operational shifts), and problematic or at-risk (dependency, integrity threat, or erosion of core learning processes). The authors stress that a neutral result can be a success: in one large controlled programming course, unchanged grades accompanied a redesign built around tasks that resist [[prompt-engineering|prompting]], in-class work without ChatGPT, oral defenses, and paper exams — [[assessment]] shaped the tool's role rather than the tool dictating the outcome.

## Where the risks actually sit

Risk in this corpus is concentrated in three mechanisms rather than in the technology. The first is the substitution trap: output quality and originality rise while upstream reasoning weakens, and teams using GenAI produced more creative products at lower cognitive load yet showed weaker [[critical-thinking|critical thinking]] than groups working without it. The second is weak truth checking: students integrated more correct information with chatbot help but also imported errors when trust was high, and chatbot grading was more lenient than peer or instructor grading even while producing richer feedback. The third is dependency, where heavier GenAI use for code generation and debugging was associated with lower final grades while explanation-seeking use was not.

The authors' governance recommendation follows from the pattern rather than from principle: integrity systems built on [[ai-detection|detection]] are brittle, while assessment redesign — tool-free exams, oral defenses, in-lab work, localized tasks, explicit justification — ties grades to internalized reasoning and makes accountable use the path of least resistance. Prompting is treated as a discipline-coupled literacy rather than a generic digital skill, so domain understanding has to coexist with prompt skill for outputs to improve reliably.

## What this means for practice

- **Instructors.** Require an attempt before access, and grade the intermediate work — drafts, reasoning steps, checks of the model's output — instead of the polished artifact, which is where substitution hides.
- **Instructors.** Treat student confidence as uninformative about competence; the review's most common pattern is rising motivation alongside unmeasured learning, so ask for explanation and transfer rather than satisfaction.
- **Assessment designers.** Design tasks that GenAI cannot simply satisfy: localized problems, [[oral-assessment|oral defense]], in-lab extensions, tool-free exams, and justification requirements reproduce the pattern that correlated with preserved learning.
- **Administrators.** Stop treating detection as the integrity mechanism. Purchased detectors missed roughly half of suspected cases in the reported workflows and cannot estimate AI contribution, so invest in task design and moderation instead.
- **Researchers.** Report process measures alongside scores, pre-register review protocols prospectively, and treat null grade differences as a finding about measurement rather than about learning.

## Limitations

- **The protocol was registered retrospectively.** The review was developed a priori but not prospectively registered; the OSF record was created after the procedures finished, and the paper prints a placeholder address (`https://osf.io/xxx`) rather than a resolvable link, so the transparency record cannot be located from the article.
- **The corpus is Q1/Q2, English-language, and journal-only.** The authors identify this author-imposed restriction as a possible source of publication-selection bias and state that findings apply to the included corpus rather than to the full population of GenAI higher-education studies.
- **Free-text search terms may have reduced recall.** Controlled-vocabulary and broader educational descriptors were deliberately not added retrospectively, though brand-specific terms were retained to catch a fast-moving terminology landscape.
- **No meta-analysis, so no pooled effect and no small-study test.** Heterogeneity in design, intervention format, comparator structure, and outcome measurement ruled out statistical synthesis, and formal reporting-bias assessment was not undertaken.
- **Appraisal was MMAT-informed rather than MMAT-scored.** Studies were categorized by design and appraised on cross-design criteria, but the full MMAT scoring criteria were not applied, and the recurring weaknesses of the included studies — short interventions, single-course or single-institution samples, [[self-report-measures|self-report measures]], weak comparators — bound what the typology can support.
- **The seven categories and four outcome levels are interpretive constructs.** They were derived by content analysis with dual coding rather than statistical clustering, so they organize the evidence rather than quantify it.

## Citation

Hawi, N. S., & Samaha, M. (2026). [Generative AI in higher education: A systematic review of empirical uses, outcomes, and risks](https://doi.org/10.1016/j.ijedro.2026.100584). *International Journal of Educational Research Open, 11*.