---
title: "Amid an Epistemic Iteration: How AI Methodologies May Transform the Nature of Science Education Research"
created: "2026-10-05T10:22:00-04:00"
updated: "2026-10-05T10:22:00-04:00"
type: article
sources: ['raw/papers/ai-methodologies-science-education-research-2026.md']
confidence: medium
page_kind: [framework]
research_method: [theoretical analysis]
discipline: [science education]
audience: [researchers]
foundations: [theories-and-frameworks, philosophy-of-ai-in-education]
methods: [research-methods-aied, qualitative-research, quantitative-research, ai-assisted-educational-research]
technology: [machine-learning, educational-nlp, generative-ai]
assessment: [educational-measurement, item-response-theory, assessment-validity]
ethics: [trust, explainable-ai, differential-effects-across-learner-groups, multilingual-learning]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-05"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This is a conceptual and methodological article, not an empirical study: it proposes and then applies a seven-phase framework for reflecting on how [[machine-learning|machine learning]], [[educational-nlp|natural language processing]], and [[generative-ai|generative AI]] may transform the nature of science education research. The authors ground the framework in Hasok Chang's notion of epistemic iteration — successive stages of knowledge that build iteratively on one another toward specific epistemic aims — and illustrate it with the roughly 150-year historical development of thermometers. Their central claim is that the field may currently be amid an epistemic iteration, in which AI methodologies may advance inquiry while also shifting which epistemic aims, criteria, and practices the field prioritizes. They are explicit that AI methodologies do not directly measure student learning; they analyze data produced by separate assessment instruments, such as questionnaires, think-aloud protocols, or interviews. The article reports no data and establishes no learning effects; it offers a reflective framework and an argument.

## Key Findings

1. The article is conceptual and methodological: it reports no empirical data, and its data-availability statement says none applies. It argues a position and offers a framework rather than testing AI methodologies against learning outcomes.
2. The framework has seven phases: problem framing; instrumentation and measurement; experimentation and evidence-based inference; comparisons and replication; building norms and consensus; implementation and its consequences; and continuous refinement. The authors present them as analytical dimensions that may repeat, overlap, or be absent, not as a fixed sequence every study must follow.
3. Grounded in Chang's (2004) account of epistemic iteration, the article maps three historical stages of temperature measurement onto analogous stages in analyzing student learning, and pairs each phase with a thermometry parallel.
4. It argues AI methodologies may shift the field's epistemic criteria toward predictive accuracy, scalability, and reproducibility, and its epistemic practices toward interpreting and validating computational outputs rather than conducting analyses directly.
5. The authors frame the transformation as a hypothesis, writing that it "may well prove incorrect"; they hold that the framework keeps its value as a reflective instrument even if the nature of science education research stays stable.

## The analogy: epistemic iteration in thermometry and student-learning analysis

Chang (2004) defines epistemic iteration as successive stages of knowledge that build iteratively on one another to achieve specific epistemic aims. Each stage does not simply accumulate data; it reshapes what counts as a valid observation, how evidence is interpreted, and which theoretical commitments make emerging findings intelligible. The authors stress that Chang describes the temperature stages retrospectively, whereas the field may still be inside a comparable iteration.

The temperature story has three stages. The first relies on bodily sensations of warmth and cold. The second, from the early seventeenth century, uses thermoscopes, which exploit the correlation between sensation and fluid expansion and allowed temperatures to be ordered. The third, from the late seventeenth to the mid-eighteenth century, establishes stable fixed points, such as the freezing and boiling of water, supporting numerical thermometers and mathematical theorizing; a later line of research replaced the boiling point with the more stable steam point. Intersubjective temperature measurement was only slowly established, over roughly 150 years.

The authors sketch parallel stages for analyzing student learning, following Cooper and Stowe (2018). The first is personal empiricism, where educators rely on qualitative judgments grounded in subjective experience in isolated contexts. The second allows relative comparisons of student competence, as in classical test theory, but lacks interval-scale properties. The third uses formalized measurement models, such as [[item-response-theory|item-response theory]] and Rasch modeling, adding interval-scale interpretations and greater rigor. They note that the steam-point researchers did not know in advance whether their new fixed point was more stable, so the value of AI methodologies must likewise be examined through sustained testing, refinement, and comparison.

## The seven-phase framework

Each phase carries a definition, a thermometry example, a student-learning example, and guiding questions (Fig. 1); a closing figure summarizes the potential transformations (Fig. 2).

**Problem framing.** Instruments change what researchers consider observable. Before thermometers, warmth and cold resisted systematic comparison; thermometry helped redefine what counted as a legitimate object of inquiry. AI methodologies may expand the range of analyzable data, including written, spoken, or multimodal records across extended periods, and may surface overlooked aspects of learning. Yet they do not remove the need for theory: constructs, coding rubrics, and training data remain human decisions, and rubrics should be fixed before automated analyses run.

**Instrumentation and measurement.** Chang (2004) frames the nomic-measurement problem: measuring a quantity requires a law relating it to something observable, but that law cannot be tested empirically without already knowing the quantity. Word embeddings map open-ended student reasoning into high-dimensional semantic spaces. In supervised learning the measurement function is learned from labeled examples; unsupervised learning uncovers structure in unlabeled data. Either way the mapping from data to cognitive constructs emerges from the data and optimization rather than from the researcher. The authors argue this may intensify the nomic-measurement problem, because such functions can look precise and predictive while remaining epistemically opaque.

**Experimentation and evidence-based inference.** AI-based representations may become a new kind of evidence, including proximal measures that track students' verbalizations and interactions over timescales from seconds to years. Norman et al. (2021) used such measures to study group alignment during collaborative tasks. The researcher's role may shift from coding student data to applying an automated coding model and validating its outputs; when unsupervised models cluster reasoning, the algorithm performs the initial exploratory analysis. Researchers increasingly need data science skills alongside qualitative, quantitative, and theoretical expertise.

**Comparisons and replication.** Regnault's principle of comparability requires that an instrument give the same reading under the same conditions and that instruments of the same type agree. AI methodologies may support re-analyses of existing studies and may help flag findings likely to replicate. But comparability must extend across student populations: machine learning tends to code productive, canonical ideas better than the diverse ways students express unproductive ones, and differential effects can emerge along lines of achievement and social identity. Thermometry's own apparent agreement was range-bound: Gmelin estimated Siberian winter temperatures at about −85 °C, and Wedgwood's pyrometer gave furnace values exceeding 12,000 °C, both now read as substantial overestimates.

**Building norms and consensus.** Fixed points and absolute zero were not inevitable discoveries but outcomes of deliberate consensus-building. In ML-based research, the REFORMS checklist offers 32 items across eight modules, and several authors have proposed [[educational-measurement|educational-measurement]] norms; Wulff et al. (2025a) added actionable norms for ML in science education research. Domain-general norms are broad, however, and not tailored to the discipline: generative AI still struggles to separate macroscopic, microscopic, and submicroscopic levels, and non-standard expressions are underrepresented, so students who learn the language of instruction as an additional language may be misread. The field is moving toward shared norms, including special interest groups in NARST and GDCP, but interdisciplinary partners now influence how those norms are negotiated.

**Implementation and its consequences.** Standardized instruments let non-experts measure without grasping the underlying theory, which democratizes access and creates epistemic trust in infrastructure. AI methodologies add a layer of epistemic dependence: researchers use pre-trained models whose training data, fine-tuning, and objectives they may not know. Following Mayer et al. (1995), [[trust]] requires willingness to accept vulnerability and an expectation of predictable behavior. Because AI systems emerge from socio-technical networks, responsibility becomes hard to allocate — a "many-hands problem" that diffuses accountability.

**Continuous refinement.** This phase runs through the others. Model architectures and training data go out of date, so AI methodologies need ongoing recalibration and domain experts. Yee (2023) describes cyclical calibration, in which models are repeatedly adjusted against prior operationalizations and human ground truth. [[explainable-ai|Explainable AI]] can reveal whether automated coding tracks semantic understanding or only keywords, and AI can shorten the gap between empirical feedback and methodological adjustment.

## What the framework does not claim

The authors are explicit that the analogy has limits. Students are not randomly moving particles, and AI methodologies are not measurement instruments: they analyze data generated by questionnaires, think-aloud protocols, or interviews, and a theoretical framework is still needed to interpret that data. The article reports no data and no learning outcomes, and it does not show that AI methodologies improve student learning or yield more valid conclusions than traditional methods; that comparison is posed as future work. The seven phases are analytical dimensions, not a validated or universal method, and the authors allow that their hypothesis may fail.

## What this means for practice

- **Researchers.** The seven phases work as a checklist for interrogating an AI-based study: what construct is being quantified, how the measurement function is justified, which evidence the analysis produces, and how findings hold across student populations.
- **Methodologists and journal editors.** The article argues for dedicated space to negotiate epistemic implications, methodological limitations, and the standards by which AI-generated knowledge claims are evaluated.
- **Study-program designers and supervisors.** It calls for undergraduate and graduate training in AI methodologies that pairs technical skill with critical reflection on epistemological assumptions and educational constructs.
- **The research community.** It recommends open science — shared coding rubrics, datasets, and ML architectures — and interdisciplinary collaboration, and it notes the need for domain-specific, not only domain-general, norms.

## Limitations

- The article is conceptual: no data, no participants, and no learning outcomes. It cannot establish that AI methodologies improve science education research or student learning, and it never tests the framework empirically.
- The framework rests on an analogy the authors themselves flag as fragile. Students are not randomly moving particles, and AI methodologies require separate assessment instruments, so the parallel may produce "tenuous connections and superficial interpretations."
- The seven phases are analytical dimensions rather than a validated taxonomy; the authors say phases may repeat, overlap, or be absent, and they do not test the framework against actual research practice.
- The article's claims are hedged and programmatic ("may transform"), and its examples of AI use in the field come from cited literature rather than the authors' own analysis; whether AI methodologies outperform traditional methods is left as future work.
- Because it is conceptual, the article names no AI model versions and reports no data-collection window; it was received on 13 December 2025, revised on 3 September 2026, and accepted on 8 September 2026.

## Citation

Martin, P. P., Rost, M., Koenen, J., & Graulich, N. (2026). [Amid an Epistemic Iteration: How AI Methodologies May Transform the Nature of Science Education Research](https://doi.org/10.1007/s11191-026-00789-7). *Science & Education*.