---
title: "CRITICS - Critical Science Without Borders: Language Models to Promote Critical Thinking in Science Education"
created: "2026-09-15T10:30:00-04:00"
updated: "2026-09-19T07:04:04-04:00"
type: article
foundations: [critical-thinking]
technology: [educational-nlp]
assessment: [assessment, feedback]
ethics: [digital-divide, equity-in-ai-education, multilingual-learning]
sources: ['raw/papers/critics-lm-critical-thinking-science-education-2026.md']
confidence: medium
research_method: [position paper]
discipline: [science education, language learning]
audience: [researchers, instructors, assessment designers]
level: [higher ed, secondary]
---

> **Synthesis:** CRITICS is a **project-description paper**, not an empirical study: it sets out the design of a three-year CHIST-ERA IV Cofund 2025 project that joins [[llm]]-based machine translation of scientific documents with the automated generation of science teaching materials and critical-question-based feedback. The stated problem is linguistic: most research articles and advanced teaching resources exist almost exclusively in English or other high-resource languages, which restricts [[science-education]] and [[critical-thinking]] development for students and teachers working in low-resource languages such as Basque. The proposed system has three components — a terminologically precise document-level translation system, a Teaching and Learning Sequence generator that derives structured lessons from translated literature via argumentation graphs, and an LLM-based automatic assessor that generates critical questions and textual [[feedback]] aligned to learning goals — all wired into a continuous improvement loop where assessment feeds back into translation quality and resource development. Crucially, the paper reports no results: it presents objectives, work packages, planned data sources and evaluation methodology, with validation planned at TRL 5 involving domain experts, so any claim about effect on student learning remains prospective. The consortium's [[regulation|regulatory]] and equity framing — democratizing scientific knowledge across Basque, Lithuanian, French and German — is the paper's clearest and most developed contribution.

## Key Findings

1. CRITICS is a three-year project funded under CHIST-ERA IV Cofund 2025 within the topic "Science in your own language", coordinated by the HiTZ Center at the University of the Basque Country EHU with funding from MICIU/AEI (PCI2025-167239-2) and the European Union.
2. The consortium spans four institutions across four countries — HiTZ/EHU (Basque Country), CNRS/Université Côte d'Azur (France, grant ANR-25-CHR4-0002-02), Vytautas Magnus University (Lithuania, agreement No. S-CHIST-ERA-26-1), and the ZHAW Center for Artificial Intelligence (Switzerland, grant 20CH-1_238349).
3. Four target languages are addressed simultaneously — Basque (agglutinative isolate), Lithuanian (East Baltic, inflectional), German (West Germanic, inflectional) and French (Romance, synthetic-fusional) — covering English–Lithuanian and English–Basque as low-resource pairs and English–French and English–German as medium-resource pairs.
4. The project is structured around four objectives (LLM-based document translation; argumentation training for detecting fallacies and scientific misconceptions; automatic assessment and Critical [[automated-question-generation|Question generation]]; LLM-as-a-Judge evaluation) and six work packages, with three Development-Evaluation cycles replicated across WP2–WP5.
5. Approximately 500 competency-based assessments in [[higher-ed|higher education]] already held in-house at UPV/EHU — [[self-report-measures|questionnaires]] with student responses and corresponding [[teacher-role|teacher]] assessments — will be annotated and form the basis for developing and evaluating the Teacher Evaluator tool; they will be fully anonymized and released under privacy and open science policies.
6. The project targets [[benchmark]]-driven evaluation rather than learning-outcome measurement: MT evaluation via BLEU, ChrF++, TER and COMET plus human evaluation, and expert assessment of critical questions and feedback on grammatical correctness, relevance, semantic soundness, evidence-based argumentation quality and alignment with cognitive frameworks such as Bloom's taxonomy.
7. The stated validation level is TRL 5 — technology validated in relevant environments — with [[qualitative-research|qualitative]] evaluation by domain experts, specifically science education teachers and researchers in the two targeted fields, natural sciences ([[biology-education|biology]], [[chemistry-education|chemistry]], [[physics-education|physics]]) and Artificial Intelligence.
8. Data sources already identified under open science criteria include Biorxiv, PubMed Central, chemrxiv, arXiv (physics and AI), the ACL Anthology Corpus, and evidence-based science education resources such as Scientix, the [[stem-education|STEM]] Learning Center and e-bug, most offering API access to avoid OCR of PDF articles.
9. The project builds on prior consortium assets including Latxa, a state-of-the-art [[open-source]] LLM for Basque, a circa 1.4-billion-token Basque corpus, the first [[multilingual-learning|multilingual]] medical-domain dataset annotated with argument structures, and the first publicly available dataset of Critical Questions linked to Argument Schemes.
10. The paper concedes that automatic evaluation of text generation remains an open problem — automated metrics disagree with human feedback and disproportionately prefer certain systems — and that the automatic Critical Questions Generation task it depends on is itself "largely unexplored".

## Three components and the improvement loop

The integrated architecture in the project description comprises a translation layer, a curriculum layer and an assessment layer, coupled so that each feeds the others.

| Component | Function | Named techniques and evidence base |
| --- | --- | --- |
| LLM-based scientific document translation | High-quality document-level translation of scholarly texts for low- and medium-resource language pairs | Open-weight models (Gemma, Llama, Qwen, Latxa), adapters fine-tuned on scientific corpora, terminology glossaries, terminology-aware prompting and term injection, layout preservation for citations, equations, code and section structure |
| Teaching and Learning Sequence generator | Convert translated scientific literature into structured educational resources | Corpus analysis for key concepts and [[pedagogy|pedagogical]] approaches, argumentation graph extraction, alignment to [[curriculum-design]] objectives and scientific practices |
| LLM-based automatic assessor | Evaluate student responses to TLS-derived activities | Argument Mining to detect misconceptions and fallacies, automatically generated scientific critical questions, grades and textual feedback aligned to assessment criteria in Basque, French, German and Lithuanian |

The loop is the paper's structural claim about how the parts interlock: assessments feed back into translation quality, into teaching-resource development and into the refinement of assessment criteria, so the system is framed as a continuously improving ecosystem rather than a set of independent tools. The project positions itself methodologically within [[design-based-research]], following recent science education practice that specifies a driving problem or question, competency-focused learning objectives, scientific practices including argumentation and critical thinking, and the activities students will perform.

## Translation: terminology, structure and the low-resource gap

The translation component is where the paper is most technically specific. The argument is that conventional MT struggles with domain-specific terminology and notation, and that scholarly translation has requirements beyond fluency: terminological precision, structural accuracy and document-level coherence. In accurate scholarly translation, the authors note, inaccurate terminology can distort meaning or undermine academic precision.

The cited state of the art is that [[llm]]s have substantially advanced MT for high-resource languages and general-purpose domains, with prompt-based strategies (zero- and few-shot), terminology-aware prompting and term injection as established techniques for terminological consistency; the identified gap is that less-resourced languages remain under-studied, with promising English–Lithuanian results using open-weight models resting on benchmark data rather than real scholarly texts. CRITICS therefore plans domain-specific terminology glossaries integrated either via [[prompt-engineering]] or into fine-tuning datasets, plus tools that preserve document layout so citations, equations, code and section formatting survive translation. Preprint papers that report their own peer-reviewed version are prioritized for translation.

## Critical questions, argumentation and assessment

The assessment component rests on two linked ideas. First, Critical Questions are treated as central to competency-based [[assessment]] because they target understanding beyond fact memorization — transferring knowledge to new contexts and generating diagnostic insight into reasoning patterns and [[misconceptions]]. Second, [[automated-assessment]] is to be extended beyond identification of gaps into generation of critical questions and detailed feedback in PISA-style competency settings, where cross-linguistic comparability is the point of the multilingual requirement. Question and feedback generation will be aligned with the learning goals and assessment criteria specified in the TLSs so that feedback stays focused on intended outcomes, and may draw on frameworks such as Bloom's taxonomy, CER (Claim, Evidence, Reasoning) and CQMAA (Critical Questions Model of Argument Assessment).

The argumentation layer supplies the machinery: extraction of claims, premises and evidence plus their relationships (support, attack, rebuttal), analysis of argument strength and quality, and construction of full argument graphs on which further inferences can be applied. The novel proposal is to push this into argument similarity between natural-language arguments — described as currently unexplored — as a way to check the validity and coherence of argumentative scientific content across languages, for both human-written and machine-translated texts. The stated ambition is to provide, for the first time, textual feedback for students by automatically generating critical questions, argument feedback and grades based on topic-specific competency assessments in natural sciences and AI. The paper does note that argument mining in scientific discourse has been limited, partly because current methods are insensitive to the factual content of scientific arguments — an issue framed as an open technical problem rather than a solved one.

## Evaluation design: what is planned versus what is shown

The evaluation methodology is where the paper's evidentiary boundaries are clearest. Two routes are planned for translation quality: human evaluation, whose main challenge the authors identify as reproducibility given high human-rating variance (addressed through protocols and guidelines), and automated evaluation, whose main challenge is disagreement with human feedback and disproportionate system preference (addressed through metric calibration). For critical questions and feedback generation, the plan is LLM-as-a-Judge evaluation designed to be comparable with human-generated judgments, supplemented by expert assessment of grammatical correctness, relevance, semantic soundness and argumentation quality.

Because no results are reported, the honest reading of this paper is that it contributes a problem framing, a system architecture, a partner capability inventory and an evaluation plan. Every performance claim is prospective. The consortium's track record is offered as the credibility argument: Latxa and the 1.4-billion-token Basque corpus from EHU, the first multilingual medical argument dataset and the first public Critical Questions dataset from CNRS and EHU, and ZHAW's theoretical and empirical work on automated evaluation of generative models including the FAVI-Score measure for favoritism in automated preference ratings. Data collection also includes plans to synthesize instruction and alignment data via the magpie approach to reduce dependence on expensive human annotation.

## Equity framing and open questions

The strongest part of the argument is not technical but distributional. The paper frames linguistic inequality as a structural barrier: research and advanced educational resources concentrated in English and a handful of other high-resource languages limit learning opportunities for students and teachers, particularly in low-resource languages such as Basque, and hinder students learning to construct evidence-based arguments in their own language. Machine translation of scientific knowledge is treated as the enabling condition for generating education materials that relate to local students' experiences, positioning the project within [[equity-in-ai-education]] and against the [[digital-divide]] created by language rather than by access to devices.

Three questions the paper leaves open deserve attention. First, whether translation quality for Basque and Lithuanian scientific terminology will be sufficient for the pedagogical claims, given that the paper itself identifies scholarly terminology as the persistent failure mode and benchmark rather than real-text evidence as the current state of knowledge. Second, whether automatically generated critical questions can be validated as measuring [[critical-thinking]] rather than surface fluency, especially across four languages where cross-linguistic comparability is asserted as essential but not yet demonstrated. Third, whether the human-variance and metric-favoritism problems the authors identify can be resolved enough for the Teacher Evaluator to support rather than substitute for teacher judgment. Future extensions mentioned are scaling to additional low-resource languages and integrating [[multimodal]] LLMs for visual scientific content.

## What this means for practice

- **Instructors.** Translate the source material rather than the summary: build local-language versions of primary scientific texts with terminology glossaries and term injection, because the project identifies terminological inconsistency as the persistent failure mode of domain-specific machine translation.
- **Designers.** Write assessment items that interrogate argument structure — claims, premises, evidence, support, attack and rebuttal — instead of fact recall, since the [[automated-question-generation|Critical Questions]] layer is designed to diagnose reasoning patterns and [[misconceptions]] rather than retention.
- **Instructors.** Treat machine-generated translations, critical questions and [[feedback]] as drafts for expert review: validation is planned at TRL 5 with natural science and AI teachers and researchers inside both the supervision and the evaluation loop.
- **Researchers.** Adopt the project's evaluation design instead of a single metric: calibrated LLM-as-a-Judge scoring compared against human judgments, human-evaluation protocols that control rater variance, and expert scoring of grammatical correctness, relevance, semantic soundness and argumentation quality.
- **Administrators.** Ask for cross-linguistic comparability evidence before buying multilingual assessment tools, because the authors state that automated metrics disagree with human feedback and disproportionately prefer certain systems.

## Limitations

- The paper reports no results: it presents objectives, six work packages, planned data sources and an evaluation methodology, and states that validation is planned at TRL 5, so every performance claim is prospective.
- The evidence base for the translation component is English–Lithuanian results with open-weight models on [[benchmark]] data rather than real scholarly texts, a state of knowledge the authors themselves identify.
- The automatic Critical Questions Generation task that the assessor depends on is described as "largely unexplored," and automatic evaluation of generated text remains an open problem — the project's planned automated metrics rest on a method the authors concede disagrees with human judgment.
- Development and evaluation will draw on approximately 500 competency-based assessments already held in-house at one institution, UPV/EHU, with cross-linguistic comparability across Basque, Lithuanian, German and French asserted rather than demonstrated.

## Connected Concepts

- [[critical-thinking]]
- [[multilingual-learning]]
- [[science-education]]
- [[language-learning]]
- [[educational-nlp]]
- [[feedback]]
- [[equity-in-ai-education]]
- [[digital-divide]]
- [[assessment]]
- [[llm]]
- [[automated-assessment]]
- [[automated-question-generation]]
- [[curriculum-design]]
- [[design-based-research]]
- [[benchmark]]

## Connected Articles

- [[ai-partner-science-epistemic-vigilance]] — AI as a Partner in Learning about, Doing, and Engaging with Science: Vigilance as the Key to Productive Augmentation
- [[critical-thinking-genai-scaffolding]] — Scaffolding Critical Thinking with Generative AI
- [[critical-thinking-biological-sciences-ai-2025]] — Promoting Critical Thinking in Biological Sciences in the Era of Artificial Intelligence: The Role of Higher Education
- [[multilingual-adaptive-learning-nigeria-2026]] — An AI-Based Adaptive Learning Platform for Multilingual and Low-Resource Educational Contexts: A Case Study on Nigeria
- [[llm-critical-thinking-teamwork-review]] — Can Large Language Models Foster Critical Thinking, Teamwork, and Problem-Solving Skills in Higher Education?: A Literature Review
- [[llm-fallacy-misattribution]] — The LLM Fallacy and Misattribution of Competence
- [[ai-literacy-legal-translation-2026]] — AI Literacy for Legal Translation: Developing Digital Resilience
- [[avraamidou-ai-colonization-science-education]] — Can we disrupt the momentum of the AI colonization of science education?

## Citation

Rodrigo Agerri, Itziar Aldabe, Elena Cabrio, Mark Cieliebak, Jan Deriu, Mariana Flores, Jurgita Kapočiūtė-Dzikienė, Dovilė Kuizinienė, Arantza Rico, Aritz Ruiz-González, Aitor Soroa, Mantas Vaškevičius, and Serena Villata (2026). [*CRITICS - Critical Science Without Borders: Language Models to Promote Critical Thinking in Science Education*](https://arxiv.org/abs/2609.13942). SEPLN 2026: 42nd International Conference of the Spanish Society for Natural Language Processing.