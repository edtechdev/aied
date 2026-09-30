---
title: "GenAI and AI tools for STEAM educators: evidence-informed strategies and resources for the future of teaching"
created: "2026-09-30T11:13:37-04:00"
updated: "2026-09-30T11:13:37-04:00"
type: article
sources: ['raw/papers/10.3389_feduc.2026.1948064.md']
confidence: high
published: "2026"
page_kind: [synthesis]
research_method: [literature review, thematic analysis]
discipline: [stem education, science education, cs education, engineering education, arts education, design education, math education]
level: [k 12, higher ed, teacher education]
audience: [instructors, curriculum designers, instructional designers, faculty developers, administrators, policymakers]
foundations: [ai-education, ai-literacy, human-ai-collaboration, teacher-role, teacher-ai-competency, tpack, curriculum-design, computational-thinking, academic-integrity]
pedagogy: [constructivist, sociocultural-learning, experiential-learning, problem-based-learning, project-based-learning, inquiry-based-learning, creativity, collaborative-learning]
technology: [generative-ai, llm, conversational-ai, intelligent-tutoring, learning-analytics, multimodal, prompt-engineering, personalized-learning]
assessment: [formative-assessment, feedback, assessment-validity, automated-assessment, authentic-assessment, process-oriented-assessment]
institutions: [educational-policy-ai, governance]
ethics: [ethics, bias-mitigation, hallucination-risk, privacy, digital-divide, equity-in-ai-education, ai-use-disclosure]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Dahal, Hasan and Islam report a structured narrative synthesis rather than a [[meta-analysis-systematic-review|meta-analysis]], a choice the authors justify because the corpus mixes primary studies, systematic and integrative reviews, [[theories-and-frameworks|theoretical frameworks]] and intergovernmental policy instruments whose effects cannot be pooled. Structured searches of Scopus, Web of Science, ERIC and Google Scholar, supplemented by the UNESCO Digital Library and the OECD iLibrary, ran from January 2016 to 2025 and identified 107 records; after duplicate removal and two-stage screening, 15 met the eligibility criteria and formed the reviewed corpus, with further foundational and contextual literature cited to support the [[pedagogy|pedagogical]] argument. The review charts those sources thematically into seven categories and proposes an integrated framework for responsible human–AI collaboration across STEAM disciplines. Its claims are synthesis-level: no formal risk-of-bias appraisal was applied, and empirical results are attributed to their original sources rather than pooled.

## Key Findings

- **The corpus is small and deliberately non-exhaustive.** Of 107 records identified, 15 studies met the eligibility criteria and were charted and thematically synthesized; the review states plainly that it is representative of the authors' main lines of argument, not a census of the field.
- **Tools are classified by teaching function rather than by product.** The review sorts the landscape into five categories—content generation, [[learning-design|instructional design]], assessment and feedback, data analytics and learning insights, and collaboration and [[creativity]] tools—and distinguishes six types of [[generative-ai|GenAI]] system: text, image, audio, video, code and [[multimodal]].
- **Pedagogical theory is the gating condition, not an add-on.** The synthesis grounds integration in [[constructivist|constructivism]] (Piaget, 1970), [[sociocultural-learning|social constructivism]] (Vygotsky, 1978), connectivism (Siemens, 2005), [[experiential-learning|experiential learning]] (Kolb, 1984), [[problem-based-learning|problem-based]] (Hmelo-Silver, 2004) and [[project-based-learning|project-based]] learning (Bell, 2010), and [[tpack|TPACK]] (Mishra and Koehler, 2006); the recurring claim is that technology use is meaningful only when coordinated with pedagogy and disciplinary content.
- **Assessment is the most delicate area of adoption.** The review argues AI-supported assessment should be strongest in formative, process-oriented and transparent uses, while high-stakes judgment should remain accountable to [[human-in-the-loop-ai|human review]], and notes that institutions are revising [[educational-policy-ai|policies]] but that the field remains unsettled (Moorhouse et al., 2023).
- **The recurring risks are structural.** Bias, [[hallucination-risk|hallucination]], academic misconduct, privacy, [[cognitive-offloading|over-reliance]] and the [[digital-divide|digital divide]] recur across the corpus; the authors treat these failure modes as calling for revised standards of evidence rather than better [[prompt-engineering|prompting]] alone (Dahal et al., 2025).
- **The [[teacher-role|teacher role]] shifts toward orchestration.** The synthesis favors [[human-ai-collaboration|human–AI collaboration]] in which control is distributed among learner, teacher and system (Molenaar, 2022a, 2022b): teachers remain designers of inquiry, interpreters of data, moderators of [[ethics]] and coaches of [[metacognition]].

## How the review was assembled

The searches combined three concept blocks—technology, educational domain and pedagogical focus—applied to title, abstract and keyword fields, and returned 100 records from the four bibliographic databases: Scopus (n = 25), Web of Science (n = 30), ERIC (n = 20) and Google Scholar (n = 25), plus 7 from the two policy repositories, the UNESCO Digital Library (n = 5) and the OECD iLibrary (n = 2). Before screening, 88 records were removed: 48 duplicates, 15 marked ineligible by automation tools using date, language and document-type filters, and 25 removed as conference abstracts, editorials or vendor material. That left 19 records for title-and-abstract screening; none were excluded at that stage, 4 could not be obtained in full text, and all 15 reports assessed for eligibility met the criteria. Sources were charted into a matrix recording source type, disciplinary focus, theoretical orientation and reported affordances and risks, then grouped into seven themes. The authors retain foundational works that predate the search window (Piaget, Vygotsky, Kolb, Wing, Mishra and Koehler, Hattie and Timperley, Shute, Bell, Barr and Stephenson, Hmelo-Silver) to align the pedagogical argument, and distinguish these from the evidentiary corpus.

## What the synthesis says about classrooms

Across disciplines the review pairs each tool category with a specific instructional move. In science, GenAI supports hypothesis generation and explanatory writing, but students should still collect and interpret data themselves and compare generated explanations against textbook accounts. In technology and computing, code assistants lower entry barriers while requiring students to annotate suggested code, identify a modification and justify it—turning generation into an opportunity to teach [[ai-literacy]]. In engineering, AI widens design options but judgment still depends on trade-offs, constraints and testing, so decision matrices and design journals carry the assessment weight. In arts and design, generative media deepen representational thinking only when aesthetic choices are tied to meaning and disciplinary accuracy; the review repeats the warning that STEAM becomes vague when the arts are ornamental. In mathematics, [[intelligent-tutoring|intelligent tutoring]] and staged hinting can support prerequisite fluency, but tasks must protect [[desirable-difficulties|productive struggle]] by requiring explanation, representation and transfer rather than calculation alone.

## What this means for practice

- **Instructors.** Design tasks that require process documentation, verification and critique of AI outputs, and make the contribution visible: prompt logs, process [[eportfolio|portfolios]] and annotation of AI-suggested work reframe [[academic-integrity|integrity]] as a matter of visible process rather than prohibition.
- **[[curriculum-design|Curriculum]] and instructional designers.** Embed [[ai-literacy|AI literacy]], data literacy, [[computational-thinking|computational thinking]] and ethical reasoning inside disciplinary and interdisciplinary goals rather than adding AI as a standalone unit or optional extra.
- **Assessment designers.** Reserve high-stakes judgment for human review and lean on [[formative-assessment|formative]], [[process-oriented-assessment|process-oriented]] uses of AI; redesign toward [[oral-assessment|oral defense]], iterative drafts, studio critique and in-class design reviews.
- **Faculty developers.** Build sustained, collegial, [[discipline-specific-aied|discipline-specific]] communities of practice where teachers test prompts and compare lesson designs, rather than one-off tool demonstrations.
- **Institutions.** Set procurement criteria on pedagogical fit, accessibility, privacy compliance and [[explainable-ai|explainability]] alongside functionality, and adopt layered [[governance|governance]] that leaves teachers professional discretion within clear ethical boundaries.

## Limitations

- The search was purposive rather than exhaustive, so the corpus is representative of the authors' main lines of argument rather than a complete census of the field.
- The English-language restriction and reliance on internationally indexed databases underrepresent scholarship from the [[global-south|Global South]], including South Asia—a material limitation for an article arguing for contextual responsiveness.
- No formal risk-of-bias appraisal was applied, because much of the corpus is conceptual or policy-oriented rather than empirical, and no established instrument fits that mix; empirical claims are attributed to their sources rather than pooled.
- As a mini review of a heterogeneous, largely non-experimental literature, it offers synthesis-level guidance and an integrated framework, not tested effect sizes.

## Citation

Dahal, N., Hasan, M. K., & Islam, M. T. (2026). [GenAI and AI tools for STEAM educators: evidence-informed strategies and resources for the future of teaching](https://doi.org/10.3389/feduc.2026.1948064). *Frontiers in Education*, 11, 1948064.