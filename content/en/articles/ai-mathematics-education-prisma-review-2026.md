---
title: "Artificial intelligence in mathematics education: A PRISMA-based systematic literature review (2021-2025)"
created: "2026-09-27T07:21:17-04:00"
updated: "2026-09-27T07:21:17-04:00"
type: article
sources: ['raw/papers/ai-mathematics-education-prisma-review-2026.md']
confidence: high
published: "2026"
page_kind: [synthesis]
research_method: [literature review]
discipline: [math education]
level: [k 12, higher ed]
audience: [instructors, researchers]
foundations: [ai-education, academic-integrity, interpreting-and-applying-aied-research, limitations-in-aied-research]
pedagogy: [problem-solving, motivation]
technology: [generative-ai, intelligent-tutoring, adaptive-learning, llm]
assessment: [assessment-validity, automated-assessment, feedback]
methods: [meta-analysis-systematic-review]
ethics: [equity-in-ai-education, digital-divide, privacy, ai-misuse-learning-harm]
institutions: [educational-policy-ai, governance]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-27"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** A PRISMA-based systematic review of artificial intelligence in [[math-education|mathematics education]], covering publications from January 1, 2021 to August 1, 2025. Searches of Scopus and Google Scholar identified 922 records; after deduplication, screening, and full-text eligibility assessment, 42 peer-reviewed journal articles and conference proceedings were included. Two independent reviewers conducted screening (Cohen's kappa = 0.88), and methodological quality was assessed using the Mixed Methods Appraisal Tool (MMAT). [[personalized-learning|Personalization]], rapid feedback, and teacher-facing automation recur across the sample, while evidence for educational benefits varies substantially across study designs and contexts; the authors insist that technical capability should not be equated with demonstrated classroom effectiveness. The 2025 search covered only January through August 2025, so 2025 counts are partial-year data. Geographic patterns are described without attributing them to causes that were not directly tested. The review concludes that AI shows potential, but needs stronger longitudinal and comparative evidence for effectiveness and [[equity-in-ai-education|equity]].

## Key Findings

1. **Personalization is the dominant application.** Structured tutors (RadarMath, MathGPT, Flexi 2.0) diagnose gaps and stage support; dialogue-based [[llm|large language models]] adjust to learners' prior errors.
2. **Faster feedback is not better pedagogy.** Large language models demonstrate faster response times than [[intelligent-tutoring|intelligent tutoring systems]], but speed does not automatically translate into higher pedagogical quality.
3. **The sample concentrates in education and computer science.** Education accounted for 60% of studies, Computer Science 28%, Arts and Humanities 6%, Psychology 2%, and Multidisciplinary research 4%; 88% sit at their intersection.
4. **Benefits are heterogeneous.** Across the 42 included studies, outcomes vary substantially with study design, learner group, duration, and outcome measures, and should not be generalized to AI technologies as a whole.
5. **Over-reliance and incorrect outputs recur.** Heavy dependence on ready-made solutions and limited verification of AI answers sit alongside [[academic-integrity|academic integrity]], [[privacy]], fairness, and access concerns.

## How the review was built

The review followed the PRISMA reporting framework for identification, eligibility assessment, extraction, and synthesis. Scopus and Google Scholar were searched to August 1, 2025; the Scholar query used relevance-ranked results, which the authors report as a reproducibility limitation because rankings are dynamic. The 922 records were screened against criteria restricted to peer-reviewed work on mathematics teaching, learning, assessment, teacher education, or educational AI use; grey literature was excluded and language limited to English and Russian. RQ1 was analyzed deductively against predefined categories and RQ2 inductively, and the authors note that predefined parameters can lead to overlooking aspects beyond the initial framework. The [[meta-analysis-systematic-review|review synthesis]] combined this coding with the Mixed Methods Appraisal Tool (MMAT).

## What the included studies report

Personalization is the recurring use. RadarMath, MathGPT, and Flexi 2.0 diagnose gaps and provide staged support, adjusting learning pathways; when a student struggles with algebraic equations, the system supplies tasks to reinforce foundational skills rather than more complex problems immediately. ChatGPT handles standard and intermediate-level mathematical problems with clear solution pathways, while specialized Math-LLM models demonstrate greater precision in complex mathematical reasoning. Intelligent tutoring systems work differently: RICE AlgebraBot pairs error correction with encouraging [[feedback]], and gamification presents complex tasks in a game-like format. For teachers, MATH41 supports rapid task production and CognifyNet analyzes activity patterns so educators detect emerging difficulties early. AI tools are described as supporting teaching rather than replacing teachers.

## Where the sample is concentrated, and where it is thin

Asia (including Türkiye) accounted for 18 studies in the selected sample, covering teacher preparation, AI-supported learning, and mathematical [[problem-solving]]. North America, particularly the United States, was strongly represented across intelligent tutoring systems, [[learning-analytics|learning analytics]], and responsible design. European institutions were underrepresented, as were African contexts, and South America by a small number of studies, such as an Argentine study of [[generative-ai|generative AI]] for geometric reasoning in Spanish. Country and regional counts are treated as characteristics of the selected sample, not measures of research activity. The disciplinary imbalance is starker: with Arts and Humanities at 6% and Psychology at 2%, only one study falls in the Psychology domain, leaving ethics, trust, and emotional impact underexplored.

## What the review identifies as risks and remedies

Two recurring concerns are the erosion of independent mathematical activity and exposure to incorrect outputs. Heavy dependence on ready-made AI solutions may reduce opportunities to practise problem solving and [[critical-thinking|critical evaluation]], and AI systems can produce incorrect solutions or flawed strategies; even specialized Math-LLMs can generate inaccuracies in long chains of logic. Learners often pay little attention to verifying accuracy, letting misconceptions take root. The review groups implementation problems into privacy and fairness, academic integrity, and social inequality: AI tools enable ready-made answers, high grades from AI-assisted work may not reflect students' knowledge, and the costs of high-quality systems can put them beyond some schools. Remedies proposed include [[governance]], assessment redesign toward critical evaluation, fairness-oriented algorithms, teacher development, and public funding of tutoring systems.

## What this means for practice

- **Instructors.** Treat dialogue-based tools as support for reasoning, not verified answers: learners often pay little attention to checking accuracy.
- **Curriculum designers.** Ask students to critique AI-generated solutions and justify their own models rather than submit answers.
- **Assessment designers.** Assume ready-made solution pathways exist; prefer tasks demanding critical thinking and creativity.
- **Administrators.** Plan for infrastructure and equity: access is linked to institutional and material resources.
- **Researchers.** Prioritise long-term impact, empirical validation of interventions, and policy evidence for low-resource settings.

## Limitations

- Two databases and an English and Russian restriction mean the few African and South American studies are not measures of research capacity.
- Google Scholar rankings are dynamic, so the search is reported as a reproducibility limitation.
- The 2025 search covered only January through August 2025, so 2025 publication counts are partial-year data.
- The evidence base is methodologically heterogeneous, long-term evidence is limited, and geographic patterns were not tested against regulatory or infrastructural causes.

## Citation

Omirzakova, F. N., & Tileubay, S. (2026). [*Artificial intelligence in mathematics education: A PRISMA-based systematic literature review (2021-2025)*](https://doi.org/10.20897/ejsteme/19221). *European Journal of STEM Education*, 11(1), Article 43.