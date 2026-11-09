---
title: "Pedagogical practices and generative AI integration across the spectrum of learning theories: a systematic review"
created: "2026-11-09T09:35:00-05:00"
updated: "2026-11-09T10:20:00-05:00"
type: article
page_kind: [synthesis]
research_method: [bibliometric]
evidence_context: educational
audience: [researchers, instructors, curriculum designers]
sources: ['raw/papers/saranya-pedagogical-practices-genai-learning-theories-2026.md']
source_url: "https://doi.org/10.3389/feduc.2026.1947867"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-09"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-education]
pedagogy: [learning-theories, pedagogy]
technology: [generative-ai]
methods: [meta-analysis-systematic-review]
---
> **Synthesis:** A [[meta-analysis-systematic-review|systematic review]] of 614 bibliographic records on [[generative-ai|generative AI]] in [[ai-education|education]] and digital learning, narrowed to 163 articles for content analysis, finds a literature that is dense in [[higher-ed|higher education]], thinner in professional education, and almost absent from schools: 93 articles (57.05%) addressed higher education, 60 (36.80%) professional contexts, and 10 (6.13%) school-level teaching. The authors also find that the pedagogical framing is not evenly distributed across [[learning-theories|learning theories]]. Where theory is named, [[constructivist|constructivism]], connectivism, and cognitive accounts do most of the work, and the authors describe a strong intrinsic link between generative AI-integrated practice and those three traditions at the higher education and professional levels; [[behaviorism|Behaviorism]] appears in only a handful of studies, which the review treats as an open gap. The corpus runs 2023–2025, with China's output doubling from 50+ articles in 2024 to 100+ in 2025. The practical conclusion lands on [[pedagogy|pedagogy]]: how a teacher designs the task around the tool matters more than whether the tool is available.

## Key Findings

1. **Generative AI research in education is concentrated in higher education.** Of 163 articles analyzed, 93 (57.05%) addressed higher education, 60 (36.80%) professional contexts, and 10 (6.13%) the [[k-12|school level from kindergarten to grade 12]].
2. **Adoption dominates the research agenda.** 121 of the 163 articles examined generative AI adoption in academic and self-learning environments (64 higher education, 8 school, 49 professional), against 32 on language learning and 10 on policy and ethical guidelines.
3. **Constructivist, connectivist, and cognitive framing carry the theory work.** The review reports a strong intrinsic link between generative AI-integrated approaches and those three traditions, particularly at the higher education and professional levels, and it maps each included study to a theory in its synthesis table.
4. **Behaviorism is nearly unrepresented.** The authors state that only a few studies specify behavioral learning principles, and they call for further investigation of generative AI integration from a behavioral perspective.
5. **Within higher education, the field splits four ways.** The 93 articles divide into 59 on adoption and outcome-driven learning, 22 on language learning, 5 on AI [[conversational-ai|chatbots]] and [[adaptive-learning|adaptive learning]], and 7 on ethical use and policy.
6. **The evidence base is China- and US-dominated.** China's production doubled from 50+ articles in 2024 to 100+ in 2025, the USA moved from around 40 to 60, and *Computer and Education: Artificial Intelligence* led all sources with 31 publications.
7. **Proposed pedagogical frameworks remain unvalidated.** The review catalogs the AICE framework, the Generative AI–Adult Learning Ecology framework, the AI-Generated Metaverse Flipped Classroom Model, and Revised Bloom's Taxonomy applications, then notes that empirical evidence for their effectiveness remains limited.

## How the corpus was built

The authors searched Scopus and Web of Science with the Boolean string "generative artificial intelligence" AND "education" AND "digital learning", retrieving 637 records as of April 25, 2025. Removing 23 duplicates left 614 for screening under PRISMA 2020, and 163 articles survived full-text assessment into content analysis. Bibliometric description ran in Biblioshiny within RStudio: the corpus spans 2023–2025, draws on 333 sources, carries 1,326 indexed keywords and 1,580 author keywords, averages 5.052 citations per document, and reflects 1,700 scholars across 106 single-author documents, with 3.29 co-authors per document and an annual growth rate of 159.37%. The largest source, *Computer and Education: Artificial Intelligence*, published 31 of the included articles and holds a 9-H index. Content analysis sorted studies by educational level and then by theme — adoption, language learning, ethical use — with one researcher coding inductively and no second coder.

## Where the literature sits

The level distribution is the review's bluntest finding. Higher education supplies 93 articles and professional contexts 60, most of them on teachers' adoption, professional development, and instructional support; school-level work supplies 10. Those 10 split into 5 on academic and administrative uses such as lesson planning, class preparation, grading, and assessment; 2 on English language learning and children's writing; 1 on formal music education; 1 on an interactive approach to mathematical expressions for visually impaired students; and 1 on learners' use of generative AI in a historical inquiry project. At school level the review finds teachers positioned as the essential mediators — the studies report gains in understanding and motivation only where instruction structured the tool's use — and it notes that UNESCO guidance limits direct classroom integration to ages 13 and above, which the authors treat as one reason school-level research is thin. Country-level bibliometrics reinforce the asymmetry: China leads on production and citations, the USA follows, and the review reads the gap as a difference in institutional readiness rather than in learner need.

## Which learning theories the literature invokes

The theory mapping is the review's distinctive contribution, and it is also where its method is most interpretive. Rather than accept authors' self-declared frameworks, the reviewers read each study's pedagogical features — activities, teaching strategies, learner engagement — and then matched those features to five traditions: behavioral, cognitive, constructivist, connectivist, and humanist. The synthesis table assigns reference numbers to each tradition, with the constructivist list the longest by a wide margin and the behavioral list the shortest; the authors are explicit that these classifications are their reading, not what the original authors claimed. Substantively, higher education studies cluster around constructivist and connectivist accounts because generative AI tools there function as scaffolds for [[self-directed-learning|self-directed]] and peer-collaborative knowledge building, and around cognitive accounts because quasi-experimental studies report gains in understanding, feedback processing, and problem-solving. Humanist framing appears where the literature turns to ethics, [[academic-integrity|academic integrity]], well-being, and learner agency. Behavioral framing surfaces mainly in adaptive platforms with rewards and badges aimed at primary learners. The review's own catalog of theoretical frameworks used by primary studies is dominated by adoption models — TAM, UTAUT, UTAUT2, the Technology Readiness Index, Task–Technology Fit, the Theory of Planned Behavior — plus Self-Determination Theory, Social Cognitive Theory, Activity Theory, Diffusion of Innovation, and TPACK, which is a different question from which learning theory a design enacts.

## What this means for practice

- **Curriculum designers.** Build the pedagogical rationale before the tool choice: the review's central claim is that the value of generative AI depends on how the learning experience is designed around it, and that technology acceptance does not equal educational effectiveness.
- **Instructors in schools.** Treat the near-absence of school-level evidence as a caution rather than a license. Only 10 of 163 studies addressed school contexts, and the ones that did report gains where teachers structured the activity, not where students used tools unsupervised.
- **Instructors.** Choose the theory deliberately. Constructivist and connectivist designs dominate because AI scaffolds self-directed and collaborative work well; behavioral designs with reinforcement and badges appear in primary adaptive platforms, and the review flags that tradition as underexplored rather than discredited.
- **Researchers.** Report the learning theory your design enacts, not only the adoption model you tested. The review had to infer theoretical alignment from described practice because primary studies rarely stated it.
- **Administrators.** Pair adoption with policy: 10 of the 163 articles addressed ethical guidelines and policy, and the review argues that unclear institutional guidance constrains uptake as much as tool access does.

## Limitations

- The search covers only Scopus and Web of Science, using one Boolean string, as of April 25, 2025; the authors acknowledge that studies indexed under descriptors such as pedagogy or educational technology may have been missed.
- Screening and coding were done by a single researcher, no interrater reliability was calculated, and no independent duplicate screening was performed; theoretical alignment was inferred by the reviewer from reported pedagogical features rather than taken from authors' own frameworks.
- The review conducted no formal quality appraisal or risk-of-bias assessment, so findings are not weighted by the methodological strength of the underlying studies.
- 148 records available only as abstracts were excluded, which the authors note may have removed relevant work.
- The corpus stops in 2025 and does not capture later developments, and bibliometric counts describe a snapshot rather than a trend.
- The primary studies name tools such as ChatGPT 3.5, ChatGPT 4, DALL·E, Midjourney, Stable Diffusion, and Google Gemini, so the synthesis describes that generation of systems rather than current ones.

## Citation

Saranya, P., & Saravanan, S. (2026). [*Pedagogical practices and generative AI integration across the spectrum of learning theories: a systematic review*](https://doi.org/10.3389/feduc.2026.1947867). *Frontiers in Education*. https://doi.org/10.3389/feduc.2026.1947867
