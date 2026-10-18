---
title: "Mapping generative AI in higher education teaching and learning: a scoping review"
created: "2026-10-18T08:25:00-04:00"
updated: "2026-10-18T10:37:53-04:00"
type: article
sources: ['raw/papers/mapping-genai-higher-ed-scoping-review.md']
confidence: high
page_kind: [synthesis]
research_method: [literature review]
audience: [researchers, instructors, faculty developers, administrators, educational technology developers]
level: [higher ed]
foundations: [theories-and-frameworks, academic-integrity, ai-literacy, critical-thinking]
technology: [generative-ai, llm, conversational-ai, intelligent-tutoring]
pedagogy: [self-regulated-learning, metacognition]
assessment: [assessment-validity, automated-assessment, ai-feedback-quality, feedback, self-report-measures]
ethics: [equity-in-ai-education, ai-use-disclosure]
methods: [meta-analysis-systematic-review, mixed-methods-research]
ai_assist:
  - model: "deepseek/deepseek-v4.1-flash"
    role: drafting
    date: "2026-10-18"
    agent: hermes
contributors: [editor]
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Lin and colleagues (2026) map 394 empirical studies of [[generative-ai|generative AI]] in [[higher-ed|higher education]] published between November 2022 and December 2025, and the picture is one of adoption outpacing pedagogy. GenAI was most often bolted onto tasks that already existed — [[feedback|feedback]], tutoring and [[writing-education|writing support]] — rather than used to redesign learning. The outcomes most frequently targeted were [[student-engagement|engagement]] and [[motivation]], [[technology-acceptance-model|usability and acceptance]], [[critical-thinking|critical thinking]], disciplinary knowledge and [[learning-gains|academic performance]], while [[self-regulated-learning|self-regulated learning]], [[ethics|ethics]], [[creativity|creativity]], feedback quality and [[equity-in-ai-education|equity]] received far less attention. The review's methodological warning is as important as its map: surveys, tests or rubrics, artifact analysis and interviews dominate, so the evidence base is shaped by short-term, easily implemented methods, and because ChatGPT-3.5-era studies dominate the corpus, many capability claims describe an older generation of models.

## Key Findings

1. **Scale and method of the review.** Following PRISMA-ScR, the authors screened and mapped 394 empirical studies spanning November 2022 through December 2025. [[mixed-methods-research|Mixed methods]] was the most common [[research-methods-aied|research design]] (213 studies, 54%), followed by [[quantitative-research|quantitative]] (109, 28%) and [[qualitative-research|qualitative]] (72, 18%).
2. **Tool vintage is a systematic confound.** ChatGPT with an unspecified version appeared in 94 studies, ChatGPT-3/3.5 family tools in 66, and ChatGPT-4 family tools in 52. Because the earlier generations dominate, the corpus largely describes capabilities of models that have since been superseded, and the authors flag this as a limit on what the evidence can support.
3. **Use is concentrated in two activities.** Feedback and tutoring, together with writing support, were the most frequently reported enacted uses. Lesson planning, [[language-learning|language learning]] and translation, programming and debugging, and [[assessment]] or grading followed; explicit [[critical-thinking|critical-thinking]] support and reflection or [[self-regulated-learning|self-regulated learning]] were among the least frequent.
4. **Outcome coverage is uneven in a specific direction.** The most frequently targeted outcomes were engagement, motivation and affect, [[usability-research|usability]] and acceptance, critical thinking and reasoning, domain knowledge and conceptual understanding, achievement and performance, writing quality, and [[ai-literacy|AI literacy]] or prompting. [[metacognition|Metacognition]] and self-regulated learning, [[ethics|ethics]] and [[academic-integrity|academic integrity]], creativity, feedback quality, and equity and access were less frequently targeted.
5. **Students are the population; instructors and [[governance]] are not.** Participant focus was coded as students in 352 studies, instructors in 15, both in 26, and multiple [[stakeholders|stakeholder]] groups in 1. The evidence base for perception findings is therefore overwhelmingly student-based.
6. **Assessment practice is short-term by construction.** Surveys, tests or rubrics, artifact analysis and interviews were the dominant assessment methods. The authors read this as evidence that the field's findings rest on readily implemented designs rather than on process-sensitive or longitudinal evidence.
7. **Perceptions are mixed, not polarized.** Both students and instructors reported benefits alongside concerns about pedagogy, integrity, workload and governance. The review argues that this ambivalence is the field's actual finding and that governance practices are under-reported.

## Why the concentration on feedback and writing matters

The two dominant use cases are not neutral choices — they are the places where GenAI's output most closely resembles an artifact higher education already grades. Feedback, tutoring and writing support all produce text that can be compared against an existing standard, which makes them easy to study with a survey or a rubric and easy to deploy in a single course. The review's own frequency data shows what that convenience costs: the activities that require longer timescales or richer measurement — [[self-regulated-learning|self-regulated learning]], metacognition, [[creativity|creativity]] and feedback quality — are precisely the ones with thin evidence. The implication is that the map describes where research was feasible, not where GenAI's educational value is greatest. The authors are explicit that the field needs stronger alignment between learning constructs and assessment methods, which is a critique of [[assessment-validity|construct validity]] as much as of method choice.

## The ChatGPT-3.5 problem in the evidence base

The tool-vintage distribution is the review's most consequential methodological observation. Nearly half of the corpus examined ChatGPT-3/3.5 or unspecified versions whose behavior, context window and reasoning characteristics differ materially from current models. Studies of [[hallucination-risk|hallucination]], [[prompt-engineering|prompting]], and [[ai-feedback-quality|automated feedback]] quality in particular describe systems that no longer exist in that form, so the review's outcome frequencies should be read as a historical snapshot rather than as a current estimate. This is not a defect the authors can correct — the corpus is what it is — but it changes how the findings should be used. A claim that GenAI improves or harms a specific outcome is bounded by the model generation studied, and the review's recommendation for clearer reporting of tool versions is best understood as a precondition for cumulative evidence rather than a formatting preference.

## What this means for practice

- **Instructors.** Treat feedback and tutoring as the best-evidenced starting point, but do not read the frequency data as evidence that these uses improve learning — the review reports what was targeted, not what worked.
- **Researchers.** Report the exact model and version, the task design, and the assessment instrument in every study. Without that, findings cannot be pooled, and the review's own synthesis is limited to counting what was studied rather than what was established.
- **Faculty developers.** The ambivalence in student and instructor perceptions is usable material: design [[educational-development|professional development]] around the specific concerns reported — pedagogy, integrity, workload and governance — rather than around generic AI literacy.
- **Institutional leaders.** The absence of governance reporting in the corpus means policy should not be inferred from it. Track your own disclosure and oversight arrangements so that local evidence accumulates where the literature is silent.
- **Educational technology developers.** The concentration of studies on text tasks suggests underexplored ground in [[multimodal]], [[simulation]] and role-play uses, which appear far less frequently in the corpus.

## Limitations

- The review is descriptive by design. A [[meta-analysis-systematic-review|scoping review]] maps what exists and deliberately does not appraise study quality or synthesize effect sizes, so it cannot answer whether GenAI improves learning.
- Tool vintage confounds the corpus. ChatGPT-3/3.5 and unspecified-version studies dominate, so many reported capabilities and outcomes describe models that have been superseded.
- Student perceptions dominate instructor and institutional perspectives. With 352 student-focused studies against 15 instructor-focused and 26 covering both, conclusions about [[pedagogy|teaching practice]] and governance rest on a small subset.
- Outcome categories overlap. Studies could be coded into more than one outcome category, so the reported frequencies exceed the number of included studies and should not be read as proportions of the corpus.
- The search window closes in December 2025. Rapid changes in model capability, [[educational-policy-ai|institutional policy]] and assessment practice after that date are not represented.

## Citation

Lin, M. P.-C., Chang, D. H., Winne, P. H., Bowen, G. M., & Ryoo, J. (2026). [*Mapping generative AI in higher education teaching and learning: a scoping review*](https://doi.org/10.1186/s41239-026-00630-9). *International Journal of Educational Technology in Higher Education*, *23*(1).
