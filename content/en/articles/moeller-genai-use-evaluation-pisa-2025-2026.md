---
title: "Widely used, unevenly evaluated? Generative AI use, AI-output evaluation, and their association with socioeconomic background across 59 countries (PISA 2025)"
created: "2026-11-24T09:40:00-05:00"
updated: "2026-11-24T09:40:00-05:00"
type: article
authors: ["Eileen Richter", "Sebastian Roehl", "Joshua Weidlich", "Luisa Köhler", "Ada Jung", "Korbinian Moeller", "Markus W. H. Spitzer"]
venue: "PsyArXiv preprint"
evidence_context: educational
foundations: [ai-literacy]
technology: [generative-ai, conversational-ai]
assessment: [evaluative-judgment, self-report-measures]
methods: [quantitative-research]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups, digital-divide]
discipline: [learning sciences]
level: [k 12, secondary]
audience: [policymakers, researchers, instructors, curriculum designers]
page_kind: [evaluation]
research_method: [secondary analysis]
sources: ["raw/papers/moeller-genai-use-evaluation-pisa-2025-2026.md"]
confidence: high
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-24"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Richter and colleagues (2026) use PISA 2025 data from 500,851 students across 59 countries to ask whether 15-year-olds who [[generative-ai|use generative AI]] for schoolwork are also taught to evaluate what it produces. On average, 57.5% of students used [[conversational-ai|AI chatbots]] for schoolwork at least weekly and about 90% reported any use, yet only 35.3% said they were often or very often asked to evaluate AI output in class, while 33.2% were asked never or almost never. Use and evaluation were positively associated in every country, a modest pooled relationship that shrank when non-users were excluded, and 25.4% of at-least-weekly users still reported no or almost no evaluation. A one-standard-deviation advantage in socioeconomic status was associated with a B = 0.09 increase in reported evaluation frequency, independent of how much students used AI. The study is a large-scale account of an [[ai-literacy]] practice that remains unevenly distributed.

*PISA 2025 secondary analysis; 500,851 students in 59 countries, with 16,031 schools in the 55 countries carrying school identifiers. Within-country estimates used final student weights and 80 balanced repeated replication weights, pooled by REML random-effects [[meta-analysis-systematic-review|meta-analysis]] with Knapp–Hartung confidence intervals.*

## Key Findings

- **Use is close to universal; explicit evaluation is not.** About 90% of students reported any AI use for schoolwork and 57.5% used chatbots at least weekly, but only 35.3% were often asked to evaluate AI output.
- **A third of students are never asked.** 33.2% reported being asked never or almost never to evaluate AI-generated information in lessons.
- **Use and evaluation travel together, but imperfectly.** Students who used AI more also reported more evaluation instruction in every participating country, though the association shrank once non-users were excluded.
- **Frequent use does not guarantee instruction.** One in four at-least-weekly users reported never or almost never evaluating AI output, ranging from about one in seven in Albania to more than half in Japan.
- **Advantaged students reported more evaluation instruction.** Even after holding AI use and student background constant, socioeconomic advantage predicted more frequent [[ai-ed-evaluation|evaluation of AI]] output.
- **Country variation is large in both measures.** Weekly use ran from roughly 30% in some systems to above 70% in others, while frequent evaluation ran from below 20% to above 50%.

## What the gap looks like

The central observation is a mismatch between two behaviors that policy assumes go together. Students have adopted generative AI quickly and broadly, but the [[pedagogy|pedagogical]] response — asking them to judge the quality of what it returns — reaches barely a third of them regularly. This is the classroom half of [[ai-literacy]], and it is where a [[teacher-role|teacher]] can model evaluation, supply missing knowledge, and give [[feedback]] on the judgment itself. The authors treat the lesson setting as the place where the gap can be closed for all students rather than only those whose families provide it.

Because the measures are self-reports, the study describes reported practice rather than observed teaching. Still, the size and coverage of PISA make the pattern hard to dismiss as a sampling artifact, and the consistency of the use–evaluation correlation across all 59 participating systems gives it a structural character rather than a country-specific quirk.

## Who gets asked, and what that implies

The socioeconomic finding carries the equity message. Even after holding AI use constant, students from more advantaged backgrounds reported more frequent evaluation instruction, which points to [[differential-effects-across-learner-groups|unequal distribution of a specific pedagogical practice]] rather than merely unequal access to tools. The [[digital-divide]] here is not about devices or connectivity but about whether school teaches critical engagement with AI output. That reframes [[equity-in-ai-education]]: the risk is not only that some students use AI more, but that some students are never asked to think about what it says.

The country spread adds a comparative dimension. Systems with low weekly use, such as Japan and Ireland, also report low evaluation, while high-use systems span the range of evaluation practice. There is therefore no automatic link between adoption and instruction; the two are separately governed decisions, and the authors' pooled correlation should not be read as causation.

## What this means for practice

- **Instructors.** Build evaluation into ordinary lessons rather than treating it as an advanced topic. Ask students to judge AI output routinely, including in classes where tool use is discouraged.
- **Curriculum designers.** Specify AI-output evaluation as a learnable activity with criteria and feedback, not as a general expectation that students will pick up from using the tools.
- **Policymakers.** Track evaluation instruction alongside access and use. Adoption metrics alone cannot show whether students are being taught to assess what AI produces.
- **Researchers.** Move beyond [[self-report-measures|self-reported]] use to observed pedagogy, and test whether evaluation instruction changes the quality of students' judgments rather than only their reported confidence.

## Limitations

- All measures are student self-reports, so the study captures perceived practice and may be shaped by memory, social desirability, and differing interpretations of "evaluate".
- The design is cross-sectional and correlational; the use–evaluation association and the socioeconomic gradient cannot support causal claims.
- The pooled correlation partly reflects measurement structure, since students who never use AI have little to evaluate, and the authors' exclusion analysis only reduces rather than removes it.
- Country-level estimates depend on inclusion criteria requiring at least 70% valid responses, which excluded 21 systems on the evaluation item.
- Classroom practice is inferred from student reports rather than observed, so the study cannot say what evaluation instruction looks like when it happens.
- The AI-use items were not administered in 6 of the 90 systems in the public-use files.

## Citation

Richter, E., Roehl, S., Weidlich, J., Köhler, L., Jung, A., Moeller, K., & Spitzer, M. W. H. (2026). [Widely used, unevenly evaluated? Generative AI use, AI-output evaluation, and their association with socioeconomic background across 59 countries (PISA 2025)](https://osf.io/6jkr2). *PsyArXiv preprint.*
