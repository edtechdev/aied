---
title: "Generative AI, virtual reality, and beyond: A scoping review of digital assistive technologies for neurodivergent students in higher education"
type: article
created: "2026-09-17T09:40:00-04:00"
updated: "2026-09-19T10:16:11-04:00"
foundations: [limitations-in-aied-research]
technology: [generative-ai, virtual-and-augmented-reality]
methods: [meta-analysis-systematic-review, qualitative-research]
ethics: [accessibility, assistive-technology, equity-in-ai-education, inclusive-learning, neurodiversity, universal-design-for-learning]
sources: ['raw/papers/assistive-tech-neurodivergent-higher-ed-review-2026.md']
confidence: high
level: [higher ed]
audience: [institutions, researchers, instructional designers]
page_kind: [synthesis]
---

> **Synthesis:** A PRISMA-ScR [[meta-analysis-systematic-review|scoping review]] searched five databases and a decade of publication (2015–2025) to identify 766 records and include 40 empirical studies of digital [[assistive-technology|assistive technologies]] for [[neurodiversity|neurodivergent]] students in [[higher-ed|higher education]]. The field it maps is small but has reorganized itself around [[generative-ai]] (15 of 40 studies) with [[virtual-and-augmented-reality|virtual reality]] as a second strand (11 studies, 10 of them VR), and its tools cluster by purpose — supporting learning (n = 27), improving the selection of assistive technology (n = 10), and educating neurotypical peers against bias (n = 3). The authors' central finding is a design critique: the literature is organized around individual accommodation and neurotype-specific tools gated by formal diagnosis, when the barriers the tools actually address (reading and writing, study management, attention, social communication) cut across neurotypes. They argue for [[universal-design-for-learning|universal design]] and participatory development, and flag the [[equity-in-ai-education|equity]] cost of an evidence base concentrated in the Global North whose most immersive tools are also the least scalable.

## Key Findings

1. Searches of Scopus, Web of Science, ERIC, PubMed and PsycInfo in October 2025, plus forward and backward snowballing in November 2025, returned 766 studies; 239 automatic and 29 manual duplicates were removed, 498 records were screened at title and abstract, 113 went to full text, and 40 met the inclusion criteria.
2. Screening was reliable by the authors' own measure: intercoder agreement was 88.25% at the title-and-abstract stage and 89.53% at full text, with every discrepancy resolved by discussion among the three reviewers.
3. AI-based tools featured in 15 of the 40 studies and the review reports a sharp increase in AI-based work from 2020 onward, crediting generative AI with accelerating the field toward scalable, adaptable assistive tools; AI-based studies amount to 37.5% of the corpus, against 24 non-AI studies and one unspecified.
4. [[ai-technologies|Technologies]] clustered into three purposes: tools directly supporting neurodivergent students' learning (n = 27), tools improving the selection of assistive technology (n = 10), and tools addressing bias by educating neurotypical peers (n = 3) — the third category being the only one that treats the environment rather than the student as the object of intervention.
5. Grouped by barrier rather than by diagnosis, reading and writing dominated (n = 13) and study management followed (n = 12), while attention and social communication were the two smallest domains and only 6 studies addressed several barriers at once.
6. Most studies made a formal diagnosis a requirement for participants — 28 of 40 required one, 11 recruited students who self-identified as neurodivergent, and one did not specify — which the authors read as excluding students who lack institutional recognition of their functional differences.
7. Reported effects were generally favorable and no study reported an overall harmful effect, but the review documents unintended burdens: cognitive overload, fatigue, distraction, VR-related discomfort, [[usability-research|usability]] and technical failures, inaccurate prompts, and — for generative AI specifically — accuracy, [[privacy]], over-reliance and loss of authentic writing voice.
8. Evidence and method are both thin: studies were concentrated in the Global North (United States 35%, Italy 12.5%, United Kingdom 10%), mostly undergraduate, and lacked (quasi-)experimental comparison groups or longitudinal follow-up, with many conducted by the tools' own developers.
9. The review's own bounds are stated: a ten-year window risks underrepresenting older technologies, the peer-reviewed and English-language filters may miss very recent and non-Anglophone work, and acquired brain differences, [[well-being|mental health]] conditions, genetic syndromes, epilepsy and hearing impairments were excluded by design.

## What the Review Screened and How It Ordered the Field

The review's method is deliberately transparent about its screening arithmetic, and the arithmetic matters here because the field is small enough that counting studies is itself a substantive finding. Five databases plus citation searching produced 766 records in October–November 2025; after deduplication 498 titles and abstracts were screened and 113 full texts assessed, leaving 40 included studies published between 2016 and 2025. One author screened 100% of results and the other two screened roughly 50% each, with discrepancies resolved collectively at both stages.

Two ordering decisions give the review its analytic edge. The first is to categorize tools by *purpose* (support, selection, bias reduction) and then by the *academic barrier* they target — reading and writing, study management, attention, social communication, and multi-barrier access ecosystems — rather than by diagnostic label, on the explicit ground that students with the same diagnosis experience different challenges and students with different diagnoses experience the same ones. The second is to treat [[virtual-and-augmented-reality|VR/XR]] as a cross-cutting format rather than a third technology class, so the 11 immersive studies are counted inside the AI and non-AI groups rather than alongside them. Both decisions are defenses against the diagnostic essentialism the authors see in the literature they reviewed.

## Where the Technology Actually Works — and What It Costs

The positive findings are concrete but narrow. An accelerated-reading application (Schneps et al.) combined visual augmentation with [[speech-and-voice-technologies|text-to-speech]] and brought dyslexic students' reading speed to the level of readers without dyslexia. [[machine-learning]] classifiers in the VRAIlexia and BESPECIAL platforms predicted suitable support tools and learning strategies with 90% to 94% accuracy — though two of those platforms were never tested with students. A custom VR study environment with [[ai-feedback-quality|automated feedback]] raised concentration, motivation and effort for university students with ADHD (Cuber et al.); a smartphone/smartwatch [[prompt-engineering|prompting]] system increased independent appointment attendance and task completion; a [[metacognition|self-monitoring]] app produced high on-task behavior; and GenAI was used to convert textbook chapters into audio modules tuned for ADHD, improving academic performance among engaged students.

The costs are equally concrete: VR appeared *less* beneficial for single-task comprehension, one immersive attention system produced boredom and comprehension difficulty, another was limited by motor noise and had no effect on cognitive load, and self-monitoring tools were accompanied by fatigue and dependence on external reinforcement. Generative AI carried its own list — inaccurate answers, [[academic-integrity]] concerns, fear of over-reliance, and the loss of human contact. The paper places all of this under the umbrella of what Bauer et al. call *inversion effects*, the case in which adding technology leaves [[learning-gains|learning]] worse than before, whether through [[cognitive-offloading|over-reliance]] on [[conversational-ai|chatbots]] or through the cognitive overload of immersive environments.

## Generative AI as the Field's Reorganizing Force

The clearest structural change the review records is the shift toward AI. Earlier work in the window was predominantly non-AI; from 2020 the number of AI-based studies rose sharply, and generative AI is credited with pushing the field toward tools that are flexible enough to serve neurodivergent students without being tied to a single profile. General-purpose [[generative-ai|GenAI]] tools — ChatGPT, Grammarly, Quillbot, DeepL — appear in the multi-barrier category precisely because they can summarize dense text, clarify instructions, plan study tasks, rephrase material and initiate writing across contexts. GenAI also shows up as an additive layer inside non-AI tools: it was used to generate audio from written chapters and to support [[creativity|creative thinking]] within collaborative mind-mapping tools already designed to lower the social threshold for neurodivergent students.

That flexibility is the review's reason for optimism about scale, and its reason for caution about evidence. A tool that adapts to the student rather than to the diagnosis is more plausibly universal, and AI-based tools are cheap relative to headsets — but the corpus offers few controlled demonstrations that the tools improve outcomes rather than perceptions, and several studies report the technology's effects through single-trial ratings rather than measured learning.

## Accommodation or Universal Design

The review's argumentative core is a continuum rather than a taxonomy: assistive technology can adapt students to environments, or environments to students. Most of the 40 studies sit at the accommodation end — designed for neurodivergent learners, leaving other students' experience unchanged — and the authors note that the pattern of designing for assumed neurotype profiles risks reproducing the limitations of the diagnostic categories themselves. At the universal end sit tools intended for the whole classroom, such as online presentation platforms and e-portfolios. The example the review returns to is McDowell's [[eportfolio|e-portfolio]] [[group-work]] study, in which an autistic student took the lead in collaboration in a way the face-to-face setting had not permitted — a technology that made collaboration possible for everyone, and thereby transformed the environment rather than patching the student.

This is why the three bias-reduction studies matter out of proportion to their number. By aiming at the understanding and behavior of neurotypical peers, they target ableism at its source instead of asking neurodivergent students to adapt, and the authors present them as an underexplored complement to individually oriented tools rather than a substitute for them. The review's recommendation is not to abolish individual support — some students will always need tailored provision — but to stop treating universal design as the exception in the literature, and to require co-design with neurodivergent students and academics in future tool development.

## What the gaps mean for procurement and research

For institutions, the practical reading is a procurement and design position: the current trajectory of assistive tools will keep producing narrow, diagnosis-gated and resource-intensive products unless universal design and participatory development are stated as requirements. For researchers, the gap list doubles as an agenda — experimental and longitudinal designs, cross-neurotype functional targets, attention and social communication, postgraduate populations, and scalable immersive tools.

## What this means for practice

- **Designers.** Build assistive tools against functional barriers rather than diagnostic labels, and co-design them with neurodivergent students: 28 of the 40 reviewed studies made a formal diagnosis a condition of participation, which excludes students whose differences lack institutional recognition.
- **Designers.** Test for inversion effects before scaling: cognitive overload, fatigue, distraction, VR discomfort and, for [[generative-ai|generative AI]], over-reliance and loss of authentic writing voice appeared across the corpus even though no study reported an overall harmful effect.
- **Instructors.** Pair any general-purpose [[generative-ai|GenAI]] deployment with instruction in the risks the review attaches to it — inaccurate answers, [[academic-integrity]] concerns and voice loss — and keep human contact in the provision rather than substituting text generation for support.
- **Administrators.** Write [[universal-design-for-learning|universal design]] and participatory development into procurement requirements, and treat specialist hardware cost as an [[accessibility|access]] decision: most of the 40 tools sit at the accommodation end, and the three studies that worked on neurotypical peers are the corpus's only environment-level interventions.
- **Researchers.** Answer the gap list with controlled and longitudinal designs: comparison groups were frequently absent, samples were small and heterogeneous, developer-run assessments stood in for independent evaluation, and attention and social communication were the two smallest barrier domains.

## Limitations

- **Geographic concentration.** The evidence base is North American and European, and the authors point out that the concept of [[neurodiversity]] itself was developed largely by white scholars in the Global North, so tools designed within that frame risk importing an implicitly assumed student; they recommend including [[global-south|Global South]] voices, institutions and epistemic traditions as partners rather than sites.
- **Undergraduate weighting.** Undergraduates dominate the reviewed evidence, leaving postgraduate and doctoral students - whose challenges involve higher [[agency|autonomy]], less structure and an often isolating culture - largely unaddressed.
- **Weak comparative evidence.** Comparison groups are frequently absent, samples are small and heterogeneous, and developer-run product assessments substitute for independent evaluation, which is why the added value of the technology is hard to establish even when effects look favorable.
- **Scalability against immersion.** The most immersive options are the least scalable, and the review treats cost and specialist hardware as an [[accessibility|access]] question rather than a design afterthought.

## Connected Concepts

- [[neurodiversity]] — the paper's organizing concept, and the one whose diagnostic framing it critiques
- [[assistive-technology]] — the object of the review and its accommodation-versus-universal-design spectrum
- [[universal-design-for-learning]] — the review's central recommendation for tool development
- [[accessibility]] — framing of cost, specialist hardware and the digital ecosystem as access questions
- [[inclusive-learning]] — the broader design agenda the review places itself inside
- [[higher-ed]] — the review's scope, and the setting where contact hours fall and independent study rises
- [[generative-ai]] — present in 15 of 40 studies and credited with reorganizing the field
- [[virtual-and-augmented-reality]] — the second dominant strand (11 studies) and the least scalable
- [[equity-in-ai-education]] — Global North concentration, exclusion of students without formal diagnosis
- [[special-education]] — the diagnosis-gated model the review argues against
- [[digital-divide]] — scalability and cost of immersive assistive tools
- [[cognitive-offloading]] — one pathway of the "inversion effects" the review warns about
- [[well-being]] — sensory demand, fatigue, anxiety and stigma in the reviewed studies
- [[limitations-in-aied-research]] — missing comparison groups, tiny samples, developer-run evaluations
- [[stakeholders]] — the review's audience: students, educators, institutions, developers, policymakers

## Connected Articles

- [[neurodivergent-computing-students]] — Neurodivergent Computing Students' Experiences with Collaborative Active Learning
- [[dabaghi-ai-dyslexia-education-review-2026]] — AI to help people with dyslexia in education: An interdisciplinary literature review
- [[khlaif-assistive-genai-visually-impaired-2026]] — Assistive Generative AI for Visually Impaired Learners: Personalization and Inclusion in Higher Education
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — Let's Chat About Artificial Intelligence for Students With Disabilities: A Meta-Analysis
- [[adhd-video-segmentation-computing-education]] — Leveling the Playing Field: Temporal Video Segmentation for Individuals with ADHD in Computing Education
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — Exploring the Design of LLM-Powered Question Generation for Deaf and Hard of Hearing Learners
- [[ludia-udl-ai-thought-partner-2026]] — LUDIA: A Design and Evidence Statement
- [[dyslexlens-dyslexic-learners-ai]] — DysLexLens: A Low-Resource LLM Framework for Analyzing Dyslexic Learners
- [[tactile-statistical-graphs-accessibility]] — Touching and Feeling the Data: A Reusable Software Pipeline for Tactile Statistical Graphs
- [[llm-educational-simulation-adhd]] — LLM-Based Educational Simulation: Evaluating Temporal Student Persona Stability Across ADHD Profiles

## Citation

Rempel, C., Heimann, K., & Prilop, C. N. (2026). [*Generative AI, virtual reality, and beyond: A scoping review of digital assistive technologies for neurodivergent students in higher education*](https://osf.io/yc4g8/). EdArXiv Preprints.
