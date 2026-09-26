---
title: Meta-Analysis and Systematic Review
created: "2026-08-14T05:24:40-04:00"
updated: "2026-09-25T21:56:00-04:00"
type: concept
foundations: [ai-education]
connected_faqs: [reporting-interpreting-aied-research]
research_method: [literature review]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation, meta-analysis-systematic-review, research-methods-aied]
reviewed_by: [editor]
---

> **Meta-analysis and systematic review** — the family of evidence-synthesis methods researchers use to aggregate and appraise a body of studies, rather than run a single new experiment. A **systematic review** applies a transparent, reproducible protocol to search, screen, appraise, and synthesize the literature on a focused question; a **meta-analysis** goes further by statistically pooling effect sizes across eligible studies to produce a weighted summary estimate and to test moderators. In [[ai-education|AI in education]], these methods are central to establishing the evidence base for whether AI tools work, under what conditions, and for whom — and to exposing gaps, bias, and the field's methodological quality.([[genai-meta-analysis-programming-learning]])([[zerkouk-comprehensive-review-its-2025]])

## Questions to Consider

- Imagine you read ten studies on whether AI tutoring works — two show big gains, three show none, five show small positive effects. How would you decide what to conclude? That tension is exactly what systematic reviews and meta-analyses are built to resolve.
- A systematic review and a meta-analysis are often treated as the same thing, but the page distinguishes them: a review synthesizes per a documented protocol, while a meta-analysis statistically pools effect sizes. When would pooling be inappropriate or impossible, even if a careful review exists?
- Systematic reviews sit at the top of the evidence hierarchy partly because they compensate for small samples, heterogeneous designs, and conflicting results across studies. Where have you seen a single dramatic study shape opinion even though the pooled evidence was far more mixed?
- Meta-analyses produce a weighted summary estimate — a single number like 'an average effect of 0.125 standard deviations.' What does a pooled average hide about the conditions, learners, or contexts where the effect differs — and why does that matter for whether you'd act on it?
- Both methods commit to a transparent, reproducible protocol (often PRISMA) precisely because the choices of what to search and include can bias the result. How much would you trust a review that didn't disclose its search and screening decisions?

## Introduction

Systematic reviews and meta-analyses sit at the top of the traditional evidence hierarchy precisely because they synthesize many individual studies, compensating for the small samples, heterogeneous designs, and conflicting results that characterize any fast-moving applied field. In AI in education, where new tools and studies appear constantly, reviews play the crucial role of taking stock: mapping what has been studied, aggregating what is known, and flagging where evidence is thin or methodologically weak. They differ from a narrative or integrative literature review, which provides [[qualitative-research|qualitative]] synthesis, in their commitment to a documented protocol and (for meta-analysis) statistical pooling.([[ai-literacy-heptagon-2026]])

## Systematic review vs. meta-analysis

| | Systematic review | Meta-analysis |
|---|---|---|
| **Core activity** | Search, screen, appraise, synthesize studies per a documented protocol | Statistically pool effect sizes across eligible studies |
| **Output** | A narrative/thematic synthesis and evidence map, often with PRISMA flow | A pooled effect estimate with confidence intervals, plus moderator analysis |
| **Statistical pooling** | Optional (many reviews are qualitative) | Required |
| **When used** | Mapping a fragmented literature, answering "what has been studied and what does it show?" | When multiple comparable [[quantitative-research|quantitative]] studies exist, answering "how large is the effect overall?" |
| **Strength** | Transparent, reproducible scope and appraisal | Increased power and precision; detects moderators and heterogeneity |

Both follow **PRISMA** (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) as the reporting standard, which documents the search, screening, and [[inclusive-learning|inclusion]] process for [[explainable-ai|transparency]] and reproducibility. An integrative review may follow PRISMA principles for transparency while stopping short of statistical pooling.([[ai-collaborative-learning-systematic-review]])([[ai-literacy-heptagon-2026]])

## Evidence-synthesis in AI in education

### What reviews accomplish

Systematic reviews and meta-analyses in AI in education serve several distinct purposes:

- **Establish the evidence base** — determining whether AI tools (tutoring, feedback, assessment, [[conversational-ai|chatbots]]) produce [[learning-gains|learning gains]], and how large those gains are.
- **Map the field and its gaps** — a scoping review documents what has been studied, where the evidence is concentrated, and where it is missing (e.g., workplace settings, non-English work, failure cases).([[ai-vocational-education-training-review]])
- **Identify moderators and conditions** — meta-analysis tests whether effects differ by [[learners|learner population]], domain, AI system type, or study design, revealing for whom and under what conditions a tool works. But a moderator is only as trustworthy as the studies behind it: in [[genai-writing-performance-meta-analysis-2026|a 2026 meta-analysis of GenAI-supported L2 writing]], the only moderator that survived methodological control was the studies' risk-of-bias classification, while an instructional-model difference that had looked significant in subgroup analysis collapsed once study quality and sample size were entered. Methodological quality, not pedagogy, carried the effect — so apparent pedagogical moderators warrant the same scrutiny as pooled estimates. Null moderators carry the same lesson in reverse. In [[chen-digital-ai-foreign-language-skills-meta-analysis-2026|Chen and Wei's meta-analysis of digital and AI technologies for foreign-language skills]] (40 studies, 3,367 participants, pooled g = 0.962), the moderators that survived were study design (quasi-experiments g = 1.019 against true experiments g = 0.474), intervention duration, and tool count, while language skill type, technology type, educational level, setting, and sample size showed no significant between-group difference, leading the authors to conclude that effectiveness cannot be attributed to a technology label or a skill category. [[yu-k12-ai-education-ai-literacy-meta-analysis-2026|Yu and colleagues' meta-analysis of K-12 AI education]] (16 studies, 57 effect sizes, g = 0.892) found all three of its tested moderators (publication source, publication year, school level) null and read the residual heterogeneity (I2 = 94.68%) as evidence that the field has not agreed on how to measure [[ai-literacy]] at all. When a moderator comes back null and heterogeneity stays high, the synthesis conclusion is often about the outcome construct or the primary-study designs as much as about the intervention.
- **Expose methodological quality** — reviews routinely find that the field relies on underpowered, pre-experimental, or quasi-experimental designs and immediate post-tests, tempering conclusions.([[ai-vocational-education-training-review]])([[zerkouk-comprehensive-review-its-2025]]) Thin reporting of what was actually done is part of that picture, and it bounds what any later synthesis can say: [[yalcin-genai-programming-education-systematic-review-2026|Yalcin and colleagues' systematic review of GenAI in programming education]] could not identify an instructional approach in 26 of its 46 studies, and 32 of the 46 appeared in conference proceedings, so the review could code pedagogy for fewer than half its corpus and ends with mixed impact evidence (some studies showed improved exam and coding performance, while others found no significant difference against instructor feedback). A synthesis inherits the reporting habits of its field.

### Examples from the knowledge base

- **[[genai-meta-analysis-programming-learning|Meta-analysis of GenAI and programming]]** — pools evidence on the productivity-learning trade-off, finding significant productivity gains but no significant learning gain (g ≈ 0), illustrating meta-analysis's ability to separate short-term efficiency from durable learning.([[genai-meta-analysis-programming-learning]])
- **[[ai-vocational-education-training-review|Systematic review of AI in VET]]** — first systematic review of 26 studies, documenting the [[constructivist]]-in-name, behaviorist-in-practice gap and the absence of workplace studies.([[ai-vocational-education-training-review]])

- **[[genai-higher-education-systematic-review-2026|Systematic review of GenAI in higher education]]** — maps opportunities, challenges, and [[pedagogy|pedagogical]] innovations across a five-year window.
- **[[zerkouk-comprehensive-review-its-2025|Comprehensive ITS review]]** — a systematic review of [[intelligent-tutoring|intelligent tutoring systems]] with a focus on methodological rigor.
- **[[chatgpt-critical-creative-thinking-review|Systematic review of ChatGPT and critical/creative thinking]]** — synthesizes evidence on whether [[llm]] use supports or undermines [[critical-thinking|higher-order thinking]].
- **[[stanford-evidence-base-ai-k12-2026|Evidence base for AI in K-12]]** — reviews the strength of evidence for AI tutoring in schools.
- **[[liu-ai-literacy-interventions-meta-analysis-2026|Meta-analysis of AI literacy interventions]]** — three-level meta-analysis of 59 studies (172 effects, 7,211 participants) estimating a large overall effect (g = 0.837) while showing that effectiveness varies by region and learning-outcome focus (knowledge-focused interventions outperformed those targeting skills, attitudes, or [[ethics]]).
- **[[ai-literacy-heptagon-2026|AI Literacy Heptagon]]** — an integrative literature review following PRISMA principles, illustrating qualitative synthesis that stops short of meta-analysis.([[ai-literacy-heptagon-2026]])
- **[[chen-digital-ai-foreign-language-skills-meta-analysis-2026|Meta-analysis of digital and AI technologies for foreign-language skills]]** — Chen and Wei (2026) pool 40 experimental and quasi-experimental studies (3,367 participants) to a large effect (g = 0.962, 95% CI 0.765 to 1.159) with high heterogeneity (I2 = 85.178) and publication-bias checks that support the estimate (Orwin's fail-safe N = 5853; Egger's test p = 0.84465). The instructive part is the design moderator: quasi-experiments reported g = 1.019 against g = 0.474 for true experiments, and the non-linear duration and tool-count patterns rest on subgroups of one or two studies.
- **[[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026|Meta-analysis of GenAI and learning outcomes in higher education]]** — Jing and colleagues (2026) pool 35 studies and 175 effect sizes to g = 0.53 (95% CI [0.48, 0.64]), largest for professional skills (g = 0.72), then academic performance (g = 0.46) and emotional attitude (g = 0.44). Duration moderates every dimension, and the decline is the point: academic-performance effects fall from g = 5.07 for interventions of 0 to 4 weeks to g = 0.64 at 4 to 12 weeks and g = 0.01 beyond 12 weeks (Q = 35.19, p < 0.001). Discipline type and learning method were not significant moderators.
- **[[yu-k12-ai-education-ai-literacy-meta-analysis-2026|Meta-analysis of K-12 AI education and AI literacy]]** — Yu and colleagues (2026) pool 16 studies (57 effect sizes, 3,837 students, all effects positive) to g = 0.892 (95% CI [0.548, 1.236]), with trim-and-fill adjustment leaving it at g = 0.952. All three tested moderators (publication source, year, school level) came back null, and the authors attribute the 94.68% heterogeneity to measurement: the studies operationalized [[ai-literacy]] as everything from AI knowledge and ethics to attitudes, self-efficacy, and career interest.
- **[[yalcin-genai-programming-education-systematic-review-2026|Systematic review of GenAI in programming education]]** — Yalcin and colleagues (2026) PRISMA-screen 151 records to 46 studies, of which 26 give no usable description of instructional approach and 38 examine a single tool (ChatGPT alone appears in 35 of 46). The review maps tools, languages, and venues reliably but can code pedagogy for fewer than half its corpus, a clean demonstration that thin primary-study reporting caps what a synthesis can conclude.
- **[[genai-scenario-based-healthcare-education-2026|PRISMA 2020 review of GenAI in healthcare scenario learning]]** — Neto and colleagues (2026) systematically searched five databases (9 Nov 2025) for peer-reviewed GenAI studies across scenario-, case-, [[problem-based-learning|problem-]], and [[simulation]]-based healthcare education, screening 1,151 records down to 23 included studies appraised with the [[mixed-methods-research|Mixed Methods]] Appraisal Tool (MMAT). Their thematic synthesis surfaced six cross-cutting themes anchored on [[prompt-engineering|prompt design]] as instructional specification, and documented gaps in validation standardization, longitudinal/comparative designs, and efficiency quantification — a template for rigorous [[medical-education|domain-specific]] GenAI systematic review.
- **[[li-language-educators-genai-review-2026|Systematic review of language educators and GenAI]]** — a PRISMA-aligned review of 23 SSCI-indexed empirical studies (December 2022–September 2024) on how language educators perceive, adopt, and learn to integrate GenAI, synthesized through the Aristotelian knowledge typology of episteme (theoretical understanding), techne (practical skill), and phronesis (practical wisdom). It documents cautious, selective adoption weighted toward behind-the-scenes preparation, persistent competency gaps across all three knowledge types, and only three structured PD interventions — illustrating how a review can expose both the evidence base and the field's methodological gaps (here, the scarcity of structured professional-development studies).
- **[[riedmann-reinforcement-learning-education-review-2026|Systematic review of RL in education]]** — Riedmann, Schaper & Lugrin (2025) applied a PRISMA-standard protocol to synthesize 89 [[reinforcement-learning]] studies (2000–2024). The review is an instructive case study in synthesis methods and their limits: it maps a rapidly growing but methodologically uneven field — over half of studies (n = 54) reported no statistical testing — and runs effect-size analysis on only 15 papers suitable for pooling, reporting intermediate-to-large effects (Cohen's d) from live evaluations. It also performed publication-bias checks (funnel plot, Egger's test, PET-PEESE) that found no significant bias but had limited power (n = 6), and it stops at thematic-plus-limited-quantitative synthesis rather than a full meta-analysis precisely because heterogeneous evaluation protocols prevented wider pooling — a concrete illustration of the heterogeneity and garbage-in/garbage-out limitations described below.
- **[[alsheikh-mapping-ai-integration-higher-education-2026|Mapping review of AI integration in higher education (FACETS + SAMR)]]** — a PRISMA 2020 review screening 959 records down to 22 intervention studies, illustrating how a coding framework (FACETS: Form, AI use case, Context, Education focus, Technology, [[samr-model|SAMR]]) plus an evaluative lens (SAMR) maps a fragmented literature and grades depth of transformation. Most included studies sat at SAMR Substitution/Augmentation, showing mapping reviews can reveal an integration field that is broad but shallow — an alternative to effect pooling when the aim is describing a landscape rather than estimating an effect.
- **[[teacher-intervention-k12-ai-based-instruction-2026|Systematic review of teacher intervention in K-12 AI-based instruction]]** — Lee (2026) screened 1,565 records down to 29 studies with two independent raters at every stage (κ = 0.655 screening, κ = 0.647 eligibility) and an MMAT quality appraisal that removed one study. It is an instructive example of synthesis that deliberately stops short of pooling: because the independent effect of [[teacher-role|teacher]] intervention could not be separated from AI system design, instructional structure and classroom context in most of the included studies, the review reports conditional outcomes and an explanatory framework of process, strategy and effect rather than an effect size — the same limitation that separates a review from a meta-analysis.
- **[[agarwal-ethical-values-norms-aied-2026|Systematic review of ethical values and norms in AIED]]** — Agarwal and colleagues (2026) screened 736 records across Web of Science, ERIC, IEEE CSDL, and ACM DL (plus backward snowballing) down to 25 included articles, consolidating the fragmented [[ethics|AIED ethics]] literature into six main ethical values (non-discrimination, data stewardship, [[human-in-the-loop-ai|human oversight]], goodwill, explicability, educational aptness) and mapping ethical norms onto a stakeholder-by-value matrix. The review illustrates how a systematic protocol can synthesize a conceptually fragmented, largely non-empirical literature (only three of 25 articles were methodology papers or original research) and turn it into an actionable framework — here, a foundation for [[governance]] and [[educational-policy-ai|policy]].

### Interdisciplinary review of AI for dyslexia

**[[dabaghi-ai-dyslexia-education-review-2026|Dabaghi, D'Urso & Sciarrone (2026)]]** present a PRISMA-guided, interdisciplinary systematic review (2018–2024, n=72) of AI and generative AI to support students with dyslexia in education. The review maps AI across detection, assistive support, and [[personalized-learning|personalized learning]], finding these strands evolve in parallel rather than in integration, driven more by technological opportunity than by consolidated educational theory. It documents that generative AI is under-utilized in this domain (GAI research, all from 2024, clusters into chatbots, teacher-training support, and exploratory studies) and that ML-based help-education tools fall into five areas (specific applications, [[student-engagement|engagement]], personalization, recommendation, generic support) while emphasizing technical performance over ecological validity. Open challenges include limited experimental validation, scalability and [[accessibility]] of diagnostic tools, ethics/privacy concerns with sensitive student data, limited teacher support, and language/cultural barriers. The review's own methodological limitations — interpretative classification bias, exclusion of non-English studies, heterogeneous evaluation protocols that prevent quantitative synthesis, and a rapidly evolving GAI evidence base — illustrate the systematic-review family's core tension: a transparent protocol can map a fragmented field, but heterogeneous evaluation prevents statistical pooling, so the review stops at thematic synthesis rather than meta-analysis.

## AI-era synthesis challenge: productivity vs. learning

Reviews of generative-AI interventions face a distinctive challenge that the knowledge base's synthesis research highlights: **separating productivity gains from durable learning gains.** Because [[generative-ai|generative AI]] can inflate immediate task performance (homework, assisted practice) without producing learning, meta-analyses must be careful about which outcome they pool. [[genai-meta-analysis-programming-learning|The GenAI-and-programming meta-analysis]] found large productivity gains but no significant learning gain (g ≈ 0) — a clean illustration. [[stromberg-generative-ai-learning-penalty-secondary-2026|Large-scale field studies]] and [[generative-ai-reduced-study-time-math|unassisted-measure research]] show that the measured effect depends on whether outcomes are AI-assisted or proctored/unassisted. Reviews should therefore report assisted and unassisted outcomes separately, distinguish performance from [[learning-gains|learning]], and flag studies that measure only immediate AI-supported performance. A complementary caution emerges from the [[liu-ai-literacy-interventions-meta-analysis-2026|AI-literacy meta-analysis]]: which **outcome** is pooled also shapes the answer — knowledge-focused [[ai-literacy]] interventions showed larger effects than those targeting skills, attitudes, or ethics, so a review that pools only knowledge outcomes can overstate what AI-literacy instruction achieves overall. This connects to [[ai-ed-evaluation]] and [[summative-assessment]].

The same artifact shows up in the time dimension. [[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026|Jing and colleagues' 2026 meta-analysis of GenAI in higher education]] (35 studies, 175 effect sizes, pooled g = 0.53) reports academic-performance effects that fall from g = 5.07 for interventions of 0 to 4 weeks to g = 0.64 at 4 to 12 weeks and g = 0.01 beyond 12 weeks (Q = 35.19, p < 0.001), with emotional-attitude effects dropping from a peak of g = 2.05 to g = 0.18 over the same span. Effects that large, that early, are mostly registering task-level assistance rather than durable [[learning-gains|learning]], so a pooled estimate dominated by short studies should be read as an upper bound on what a real implementation will sustain. Reviews that pool outcomes should therefore record intervention duration alongside the effect size, because duration is one of the few moderators that has held up across these syntheses.

## Strengths and limitations

**Strengths:**
- Efficient synthesis of a large, fragmented literature
- Meta-analysis yields pooled effect estimates, increases statistical power, and detects moderators and heterogeneity
- Systematic protocols improve transparency and reproducibility over narrative reviews
- Essential for evidence-based practice and for identifying research gaps

**Limitations:**
- **Garbage-in/garbage-out** — the synthesis is only as good as the quality of included studies; weak primary designs yield weak pooled conclusions
- **Publication bias** — null or negative results are under-published, inflating pooled effects
- **Heterogeneity** — varied designs, outcome measures, and [[ai-technologies|AI systems]] make direct pooling hard and can undermine the meaning of a single effect size. [[genai-writing-performance-meta-analysis-2026|The GenAI-writing meta-analysis]] makes that concrete: a large, statistically significant pooled advantage came with between-study heterogeneity so extreme that the prediction interval for a new implementation still crossed zero, meaning a fresh deployment could plausibly yield no benefit. The direction of the average was robust; its magnitude was not — which is why the prediction interval, not the pooled estimate alone, should inform a decision to adopt. Unresolved heterogeneity can also come from the outcome side rather than the design side: [[yu-k12-ai-education-ai-literacy-meta-analysis-2026|the K-12 AI-literacy meta-analysis]] found I2 = 94.68% that no moderator explained, and traced it to the absence of an agreed measure of [[ai-literacy]], with the 16 studies mixing cognitive and affective outcomes under one label. Heterogeneity driven by what was measured as much as by what was done cannot be resolved by pooling.
- **Rapid obsolescence** — the AI tool landscape changes quickly, so reviews can date fast
- **Scope constraints** — single-database or English-only searches may miss relevant work.([[ai-collaborative-learning-systematic-review]])([[ai-vocational-education-training-review]])

**Meta-research warns the AIED synthesis base is currently weak.** A growing set of critiques documents that the field's headline AI-effect sizes — especially from early meta-analyses — are inflated by publication bias, construct incoherence, and methodological shortcuts. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]], meta-analyzing 1,840 effect sizes from 67 meta-analyses, estimate the publication-bias-adjusted AI effect at roughly one-third the reported magnitude (SMD ≈ 0.196), with extreme heterogeneity. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] audits 14 high-impact AIED meta-analyses and finds none had a coherent construct, valid publication-bias assessment, or resolved heterogeneity; twelve treated dependent effect sizes as independent. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] show most primary comparisons lack a well-defined treatment, control, and learning measure. This means readers should treat pooled AIED effect sizes as upper bounds until synthesis quality improves — see [[limitations-in-aied-research|Limitations in AIEd Research]] for the full analysis.
- **Reporting standards have not kept pace with automation.** PRISMA-LLM analyses SciLitBench, a corpus of 888 review-automation papers with 14,726 annotations, and documents a growth rate near 4.7% per month alongside an accountability gap: since 2023, 38.0% of software and product papers reported no evaluation at all, against 9.3% of LLM papers, and 52% of positive-only LLM evaluations reported an unmet high-bar concern. Because LLM and software pipelines now participate in stages that can alter the evidence base, the framework requires disclosure of where in the review workflow automation operated, what was evaluated, and which limitations were checked — a direct extension of the transparency problem that [[limitations-in-aied-research|AIED review critiques]] have documented for meta-analyses of learning effects. ([[prisma-llm-ai-assisted-systematic-reviews-2026]])

## Relationship to other methods

Within the knowledge base's methodological landscape, meta-analysis and systematic review are the **synthesis** family, complementing primary designs:

- **Primary studies** (experiments, surveys, qualitative work, [[design-based-research|design-based research]]) generate individual findings; reviews aggregate them. See [[research-methods-aied]].
- **Effect-size reporting** in primary studies (e.g., [[rct|RCTs]]) is what makes later meta-analysis possible — reviews depend on studies reporting comparable, extractable effect sizes.
- **Evaluation** ([[ai-ed-evaluation]], [[benchmark]]) assesses individual systems; reviews assess the *literature* on systems and interventions.
- **Educational measurement** ([[educational-measurement]], [[assessment-validity]]) concerns the quality of the outcome measures that reviews pool.

## Implications for researchers

1. **Report extractable effect sizes.** For a literature to be meta-analyzable, primary studies must report comparable effect sizes and adequate methods detail — a responsibility of every AIED study.([[research-methods-aied]]) Adequate detail includes the instructional approach: [[yalcin-genai-programming-education-systematic-review-2026|a systematic review of GenAI in programming education]] could code pedagogy for fewer than half its 46 studies because 26 never described what they did, and the detail primary authors omit is the detail later syntheses cannot recover.
2. **Follow a transparent protocol.** PRISMA-guided search, screening, and appraisal make reviews reproducible and defensible.
3. **Interpret pooled effects cautiously.** Attend to heterogeneity, publication bias, and the quality of included studies before drawing strong conclusions.
4. **Use reviews to set the agenda.** Reviews' documented gaps (failure cases, workplace settings, non-English and non-indexed work, long-term outcomes) should guide where new primary research is needed.([[ai-vocational-education-training-review]])
5. **Treat null moderators as findings.** When moderators come back null and heterogeneity stays high, that is evidence about the state of the field (construct incoherence, thin design reporting) as much as about the intervention, and it belongs in the synthesis narrative rather than being dropped.([[yu-k12-ai-education-ai-literacy-meta-analysis-2026]])([[chen-digital-ai-foreign-language-skills-meta-analysis-2026]])

## GenAI in Healthcare Scenario Learning

- **PRISMA 2020 review of GenAI in healthcare scenario learning.** Neto and colleagues (2026) systematically searched five databases (9 Nov 2025) for peer-reviewed GenAI studies across scenario-, case-, problem-, and [[simulation]]-based healthcare education, screening 1,151 records down to 23 included studies appraised with the [[mixed-methods-research|Mixed Methods]] Appraisal Tool (MMAT). Their thematic synthesis surfaced six cross-cutting themes anchored on [[prompt-engineering|prompt design]] as instructional specification, and documented gaps in validation standardization, longitudinal/comparative designs, and efficiency quantification — a template for rigorous [[medical-education|domain-specific]] GenAI systematic review.

## Connected Concepts

- [[interpreting-and-applying-aied-research]]
- [[research-methods-aied]]
- [[rct]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[learning-gains]]
- [[summative-assessment]]
- [[ai-education]]
- [[higher-ed]]
- [[simulation]]

## Connected Articles
- [[xia-ai-interdisciplinary-higher-education-review-2026]] — Systematic review of AI in interdisciplinary higher education (59 studies)
- [[generative-ai-k12-teaching-learning-systematic-review-2026]] — Systematic review of generative AI in K-12 teaching and learning (Marzano 2026)
- [[nguyen-genai-global-south-review-2026]]
- [[espino-ai-business-education-review-2026]]
- [[khalifeh-redefining-personalized-learning-ai-2026]] — Redefining personalized learning: systematic review
- [[alrazeeni-transforming-nursing-education-ai-2026]] — AI in nursing education: systematic review
- [[edurev-100741-tpack-genai-review]] — Systematic review of GenAI in student learning from a TPACK perspective
- [[genai-meta-analysis-programming-learning]] — Meta-analysis of GenAI's effect on productivity and learning in programming
- [[ai-vocational-education-training-review]] — First systematic review of AI in vocational education and training
- [[ai-collaborative-learning-systematic-review]] — PRISMA systematic review of AI-powered collaborative learning
- [[genai-higher-education-systematic-review-2026]] — Systematic review of GenAI in higher education
- [[robot-assisted-language-learning-meta-analysis-2026]] — Meta-analysis of AI-enhanced embodied robot-assisted language learning
- [[zerkouk-comprehensive-review-its-2025]] — Comprehensive systematic review of intelligent tutoring systems
- [[chatgpt-critical-creative-thinking-review]] — Systematic review of ChatGPT and critical/creative thinking
- [[stanford-evidence-base-ai-k12-2026]] — Evidence base for AI in K-12
- [[liu-ai-literacy-interventions-meta-analysis-2026]] — Meta-analysis of AI literacy intervention effects
- [[genai-writing-performance-meta-analysis-2026]] — Meta-analysis of GenAI-supported L2 writing: a large pooled effect undermined by extreme heterogeneity and a quality-driven moderator
- [[ai-literacy-heptagon-2026]] — Integrative literature review of AI literacy dimensions (PRISMA-guided)
- [[ai-metacognition-stem-review]] — Systematic review of AI and metacognition in STEM
- [[llm-intervention-design-cs-review]] — Review informing LLM intervention design in CS
- [[human-autonomy-agency-hri-review-2025]] — Review of human autonomy and agency in human-robot interaction
- [[rail-ed-genai-literacy-teacher-education]] — Review of GenAI literacy in teacher education
- [[student-llm-interaction-taxonomy-review-2026]]
- [[zhao-genai-higher-order-thinking-meta-2026]] — GenAI and higher-order thinking meta-analysis
- [[daniel-ai-sustainability-scoping-review-2026]] — Scoping review of AI for sustainability and sustainable AI (Daniel et al. 2026)
- [[policy-deficit-ai-sel-2026]] — The Policy Deficit in AI × SEL Research
- [[genai-scenario-based-healthcare-education-2026]] — Systematic review of GenAI in scenario-based healthcare education (Neto et al. 2026)
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Mapping review classifying 22 AI-integration studies with FACETS + SAMR; most sit at Substitution/Augmentation
- [[agarwal-ethical-values-norms-aied-2026]] — Ethical values and norms for AI in education
- [[li-language-educators-genai-review-2026]] — Language educators' practices and development with GenAI
- [[dabaghi-ai-dyslexia-education-review-2026]] — AI to help people with dyslexia in education
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT in Education: An Effect in Search of a Cause (media-comparison critique)
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Meta-meta-analysis: bias-adjusted AI effects ~1/3 of reported size
- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: forensic audit of 14 AIED meta-analyses
- [[teacher-intervention-k12-ai-based-instruction-2026]] — Teacher intervention in K-12 AI-based instruction: a systematic review
- [[chen-digital-ai-foreign-language-skills-meta-analysis-2026]] — Meta-analysis of digital and AI tools for foreign-language skills: the design moderator more than doubles quasi-experimental effect estimates
- [[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026]] — Meta-analysis of GenAI in higher education: short-intervention effects collapse as duration grows
- [[yu-k12-ai-education-ai-literacy-meta-analysis-2026]] — Meta-analysis of K-12 AI education: large effect with null moderators and heterogeneity attributed to measurement
- [[yalcin-genai-programming-education-systematic-review-2026]] — Systematic review of GenAI in programming education: thin instructional reporting in 26 of 46 studies
