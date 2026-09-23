---
title: "Clarifying the Conceptual Landscape in AI Literacy Measurement: A Large Language Model Based Approach"
created: "2026-09-18T12:05:00-04:00"
updated: "2026-09-19T10:23:54-04:00"
type: article
foundations: [ai-literacy]
assessment: [assessment, educational-measurement, psychometrically-aware-ai, assessment-validity]
technology: [llm, generative-ai]
methods: [quantitative-research, mixed-methods-research]
ethics: [equity-in-ai-education]
research_method: [instrument development, thematic analysis]
level: [higher ed]
audience: [researchers, assessment designers, instructors]
page_kind: [synthesis]
sources: ['raw/papers/ai-literacy-measurement-conceptual-landscape-llm-2026.md']
confidence: high
---

> **Synthesis:** He, Zhang, Wang and Ji take a problem that every AI literacy researcher now faces and makes it measurable in a new way: instruments carrying the same labels measure different things, and instruments carrying different labels measure the same thing. Rather than review the scales by hand, they embed 12 [[self-report-measures|self-report]] instruments, 55 unique constructs and 272 items into a shared semantic space using sentence embeddings, following the semantic-incommensurability method of Wulff and Mata (2025). A dense, continuous cognitive-technical core appears across all instruments, while affective, motivational and collaborative constructs scatter thinly at the periphery, and a screening pass flags twelve candidate jangle pairs and two candidate jingle pairs. Their reference standard is that embeddings can only be trusted if they recover known psychometrics, and they do: model-implied semantic internal consistency correlates with reported Cronbach's alpha at r = 0.49 for the selected model. The practical takeaway is a diagnostic, not a verdict — if you are choosing an [[ai-literacy|AI literacy]] measure, check whether its construct distinctions survive at item level, and if you are building one, keep [[assessment-validity|content validity]] and label-to-item alignment explicit before collecting data.

## Key Findings

1. **The corpus is 12 instruments, 55 unique constructs, 272 items.** Instruments were taken from Lintner's (2024) [[meta-analysis-systematic-review|systematic review]] of [[ai-literacy|AI literacy]] scales, selected because that review applied COSMIN and GRADE quality criteria, keeping only self-report scales with complete item wording and reported empirical internal consistency (Cronbach's alpha). The 12 span AILQ, AILS, AISES, ChatGPT-LS, DLS-AE, EVT-GenAI, GAILS, GSE-6AI, I-[[tpack]], MAIRS-MS, MAILS and SNAIL, addressing [[k-12]] students, college and medical students, teachers, ordinary users, tech-experienced adults, non-expert adults and the general public.
2. **Label and item similarity distributions barely overlap in shape.** Pairwise cosine similarities on construct definitions center between 0.20 and 0.55, while item-level similarities concentrate far more narrowly at 0.40–0.45, showing more lexical overlap in measurement phrasing than in conceptual description. High-similarity pairs are negligible across the whole dataset, and heatmaps show a dominant block-diagonal structure: instruments are internally coherent, cross-instrument coherence is lower and only locally elevated, notably between dimensions of [[ethics|AI Ethics]] and Technical Proficiency.
3. **A thick cognitive-technical core, a sparse affective periphery.** In the embedding-based t-SNE projection, knowledge, understanding and application constructs from many instruments overlap in one dense central band (AI Steps Knowledge, Understand AI, AI [[problem-solving|Problem Solving]], Detect AI, Technological Skills, Apply/Evaluate/Create). Affective, motivational and value-oriented constructs (Attainment Value, Utility Value, Intrinsic Value, Behavioral Commitment, Comfort with AI) appear rarely and scatter at the margins, collaboration constructs lack any semantic core, and ethics and [[critical-thinking|critical evaluation]] form a compact but spatially separated cluster.
4. **Target population predicts where a scale sits.** Adult-oriented instruments contribute 41 instrument-level construct entries, concentrate in the cognitive-technical band, and include only two affective constructs with no coverage of [[self-efficacy]], comfort or [[collaborative-learning|collaborative learning]]. Student-oriented instruments contribute 30 entries and push eight constructs into affective-social territory, mainly the upper-left quadrant. Within adults, general-public, tech-experienced, non-expert and [[teacher-role|teacher]] frameworks occupy largely separate semantic territories; within students, K-12, college and medical frameworks show a graded progression, with college constructs dispersing across a four-unit span without forming one cluster.
5. **Twelve candidate jangle pairs cluster on motivation and commitment.** Screened at construct similarity below the 25th percentile and item similarity at or above the 99th percentile, the list is dominated by Behavioral Commitment (AILQ), appearing in eight of twelve pairs, and [[motivation|Intrinsic Motivation]] (AILQ), appearing in five. Intrinsic Motivation, nominally internal interest or drive, shares item-level wording with AI Social Impact Recognition Ability (DLS-AE, item similarity 0.596) and Usage (AILS, 0.556) because its items in practice ask respondents to judge how relevant and useful AI is in daily life.
6. **Two candidate jingle pairs sit where the label looks identical.** Technical Proficiency (ChatGPT-LS) versus Technical Understanding (SNAIL) reach construct similarity 0.925 but item similarity of only 0.201, because one emphasizes hands-on capability and the other declarative conceptual knowledge. Critical Evaluation (ChatGPT-LS) versus Critical Comprehension Ability (DLS-AE) reach 0.908 on definitions and 0.166 on items, one asking students to judge AI output directly, the other to cross-check against external sources.
7. **Overlap is not automatically a defect.** The authors separate overlap produced by meaningful psychological coupling (interest in a tool genuinely tracking beliefs about its usefulness) from overlap produced by broad, future-proof item language (relevance, usefulness, importance), and argue only the second is a validity threat. Instruments like EVT-GenAI and I-TPACK show such tight construct clustering that they may capture one domain-specific latent factor rather than distinct components, which the authors read as a case for construct merging or re-specification rather than celebration of dimensionality.
8. **The method is offered as a screening layer, not a replacement for experts.** Thresholds are explicitly distribution-relative and heuristic, the [[llm]] never adjudicates construct equivalence, and the authors position semantic mapping as a pre-data-collection diagnostic that complements expert review of [[assessment-validity|content validity]].

## The instrument corpus and inclusion criteria

The corpus is a deliberate second pass over Lintner's (2024) systematic review of AI literacy scales rather than a fresh sweep of the literature. Selecting from that review let the authors [[benchmark]] their semantic results against an existing quality assessment, since Lintner had already graded each scale with COSMIN and GRADE. Three filters then narrowed the field: instruments had to be self-report, had to supply complete item-level wording, and had to report empirical internal consistency. That leaves 12 instruments, 55 unique constructs after cross-instrument deduplication, and 272 items, with population coverage running from K-12 and college students through medical students and teachers to ordinary users and the general public.

Two levels of representation were built for every instrument. Items were encoded from their raw text; constructs were encoded from the concatenation of label and definition (`[LABEL]: [DEFINITION]`), a choice made to reduce the ambiguity of bare labels like "Usage" or "Application". Three sentence-embedding models were run in parallel: MPNetBase as a general-purpose baseline, MPNet Personality fine-tuned on psychological text, and OpenAI's text-embedding-3-large.

## Validating the coder before trusting the map

The paper's most important methodological move is a check that the embedding models recover properties psychometricians already know. For each of the 55 constructs the authors computed mean within-construct cosine similarity, converted it into a model-implied semantic internal consistency using the Spearman–Brown prediction formula, and correlated that with the empirically reported Cronbach's alpha. All three models produced significant positive associations: MPNet Personality r = 0.49, p < .001; MPNet Base r = 0.45, p < .001; OpenAI text-embedding-3-large r = 0.35, p = .007. MPNet Personality was selected for all subsequent analysis because it recovered this structure most strongly.

That selection carries its own warning. The authors state plainly that the winning model was fine-tuned on personality psychology data such as Big Five items, which is affective and trait-heavy language, whereas [[ai-literacy|AI literacy]] mixes cognitive knowledge, procedural technical skill and ethical reasoning. They describe the performance as "likely reflects some degree of domain mismatch" and call for domain-specific embedding models fine-tuned on AI curricula, technical materials and [[assessment|educational assessment]] items. On the fallacy screening itself they are equally explicit: high and low similarity were defined relative to the empirical distribution of off-diagonal upper-triangular entries rather than as absolute cosine thresholds, pairs are labeled "candidate" jingle and jangle cases flagged for expert inspection, and the thresholds should shift with expert assumptions about expected construct granularity. Nowhere does the LLM decide that two constructs are equivalent.

## What the recovered dimensions look like

The semantic map is not a factor solution but it is structured enough to read. One region dominates: a thick, continuous band of cognitive-technical constructs, present in instrument after instrument under different names, and corroborated at item level where many overlapping embeddings merge into a single semantic field. Around it the map thins out sharply. Affective, motivational and value-oriented constructs — Attainment Value, Utility Value, Intrinsic Value, Behavioral Commitment, Comfort with AI — appear in few instruments and sit scattered at the margins. Collaboration constructs are similarly sparse and, unlike the technical core, have no shared semantic center at all. Ethics and critical evaluation are the interesting exception: a compact cluster, but spatially separated from the core and from each other's neighbours.

Disaggregating by population sharpens the picture and produces the paper's cleanest structural claim. Adult-focused instruments contribute 41 instrument-level construct entries and cluster heavily in the technical band, carrying only two affective constructs and no self-efficacy, comfort or collaborative learning content. Student-focused instruments contribute 30 entries and reach further into the periphery, with eight affective-social constructs concentrated in the upper-left quadrant. Ethics splits the same way: a single adult ethics construct sits in the upper-right periphery, while four student-facing ethical frameworks converge there alongside social-impact constructs. Inside the adult group, general-public, tech-experienced, non-expert and teacher frameworks occupy largely non-overlapping territories, with teacher constructs isolated some 2–3 units away. Inside the student group the progression is developmental: K-12 from upper-left to central-left, college constructs spanning all quadrants with the widest semantic range, medical-student constructs in two compact clusters.

At the level of individual instruments, two configurations recur. Dispersed instruments such as AILQ and DLS-AE cluster items by sub-construct, so AI Ethics items form compact local groups clearly separated from the rest of AILQ, and DLS-AE's Technology Utilization items sit in the dense technical core while its Ethical Behavior Ability items are out at the periphery. Compact instruments such as EVT-GenAI keep items from nominally different constructs, including Attainment Value and Perceived Cost, in close semantic proximity. The authors read the first pattern as semantic evidence of genuine construct differentiation — and note it converges with the positive content and structural validity findings Lintner already reported for AILQ and AILS — and the second as semantic evidence of homogeneity, raising the question of whether such scales measure one domain-specific latent trait and whether their construct distinctions should be merged or re-specified.

## What the conceptual map means for choosing and building a measure

Three implications follow, and they are aimed at different readers.

For instrument selection, the paper replaces a label-matching habit with an alignment test. Reading a scale's construct list is not enough when, as the jangle results show, items labeled Intrinsic Motivation, Usage and AI Social Impact Recognition Ability can all be asking the same question about whether AI matters in life and work. A [[psychometrically-aware-ai|psychometrically aware]] reader should check whether a scale's distinctions survive into item wording before concluding that it measures the dimensions its structure claims.

For comparability across studies, the results explain why pooling AI literacy findings is risky. Where jangle patterns are common, meta-analytic synthesis quietly merges skills that are not equivalent; where jingle patterns appear, scales sharing a construct name may be measuring different competences. Both [[educational-measurement|measurement]] problems argue for clearer specification of construct names and definitions before synthesis, particularly for critical evaluation, ethical reasoning, social-impact awareness and communication and collaboration.

For construct validity, the authors' framing is that the techno-centric imbalance is now a liability rather than an accident. As [[generative-ai|generative AI]] lowers technical barriers, the practical challenge shifts toward critical evaluation, ethical judgment and informed decision-making — the same shift UNESCO and OECD frameworks now prioritize — yet the measurement landscape still consolidates around the technical core while socio-emotional and ethical constructs remain heterogeneously defined and weakly integrated. Their proposal is conceptual interoperability, not one universal scale: broad multidimensional instruments should show clear semantic separation between dimensions, while context-specific measures may reasonably show tighter clustering, provided their validity claims match their scope. The method itself is pitched as an early-stage diagnostic that can be run before data collection, so scale developers can see whether their constructs are distinct and their items aligned while the fix is still cheap.

## What this means for practice

- **Researchers.** Screen candidate scales semantically before data collection rather than by construct label alone: embedding the 12 instruments' item text recovered reported reliability from within-construct similarity in all three models (best r = 0.49, p < .001), which surfaces jingle and jangle cases while a fix is still cheap.
- **Researchers.** Confirm every flagged pair with respondents before acting on it. Thresholds here are relative to the empirical similarity distribution, so treat candidate overlaps as hypotheses to take into [[assessment-validity|validity]] discussions, cognitive interviews or think-aloud work rather than as settled equivalences.
- **Designers.** Write constructs as `[LABEL]: [DEFINITION]` in your instrument documentation, because encoding definitions alongside bare labels such as "Usage" or "Application" is what reduced ambiguity when the constructs were embedded.
- **Designers.** Decide whether your scale is meant to be broad or context-specific and check that its semantic structure matches. A broad multidimensional instrument should show clear separation between dimensions; a tightly clustered context-specific scale is defensible only if its validity claim matches that narrower scope.
- **Instructors.** Audit item wording before adopting an AI literacy scale for your program. The adult-focused instruments in this corpus contributed 41 construct entries with only two affective constructs and no [[self-efficacy]] or [[collaborative-learning]] content, so a scale can underrepresent the [[critical-thinking|critical evaluation]] and social-impact reasoning you intend to teach.

## Limitations

- The embedding model is the first constraint: MPNet Personality was chosen for its superior recovery of psychometric structure, but it was trained on personality data whose affective, trait-based language differs from the cognitive, procedural and ethical language of AI literacy, so its embeddings may not fully capture the nuances of these items.
- The corpus inherits the boundaries of Lintner's systematic review — rigorous scales are included, but newer or non-indexed instruments generated by the generative AI wave may be missing entirely.
- The analysis works on constructs as researchers define them rather than on how respondents actually read items, so the flagged fallacies are hypotheses about intended meaning; the authors propose cognitive interviews or think-aloud protocols as the empirical follow-up.
- The framework was applied only to English-language materials, with [[multilingual-learning|multilingual]] extension left as future work to test whether the patterns generalize across cultural and linguistic contexts; the authors also declare that Claude was used for language editing only, with all [[research-methods-aied|research design]], analysis and interpretation done by the authors.

## Connected Concepts

- [[ai-literacy]] — the contested construct whose measurement landscape the paper maps
- [[assessment-validity]] — content validity, construct underrepresentation and label-to-item alignment as the paper's central concern
- [[educational-measurement]] — scale quality, Cronbach's alpha and the cross-instrument comparison problem
- [[psychometrically-aware-ai]] — using LLM embeddings as a psychometric instrument and validating them against known psychometrics
- [[llm]] — sentence embeddings as the analytic tool, with explicit warnings about model selection and domain fit
- [[self-report-measures]] — the corpus is restricted to self-report scales with item-level wording and reported internal consistency
- [[stakeholders]] — population-contingent patterning across students, teachers, medical trainees, users and the general public
- [[equity-in-ai-education]] — which competences get measured, and whose AI literacy ends up represented in the instruments
- [[self-efficacy]] — an explicitly absent construct in adult-oriented instruments despite its prevalence in student scales
- [[collaborative-learning]] — a construct family with no semantic core across instruments
- [[motivation]] — the domain where jangle fallacies concentrate, with intrinsic motivation items collapsing into perceived utility
- [[meta-analysis-systematic-review]] — the corpus source and the synthesis problem that semantic incommensurability creates

## Connected Articles

- [[ai-literacy-assessment-misalignment]] — Directly on the gap between what AI literacy assessments claim and what they measure
- [[competent-generative-ai-use-measures-review-2026]] — A review of measures for competent generative AI use, complementing this instrument corpus
- [[xiong-ai-educational-measurement-review-2026]] — Broader review of AI in educational measurement, situating LLM-based psychometrics
- [[genai-assessment-literacy-scale-2026]] — Scale development for generative AI assessment literacy, an instance of the corpus type under study
- [[questionnaire-teachers-genai-uses-validation-2026]] — Instrument validation for teachers' generative AI use, with the label-to-item questions this paper raises
- [[hingle-collaborative-ai-literacy-2025]] — Collaborative AI literacy, a construct family the semantic map finds dispersed and coreless
- [[ai-literacy-continuum-higher-education]] — How AI literacy is staged across higher education, one of the target populations analyzed here
- [[sec-ai-literacy-narrative-review-2026]] — Narrative review mapping the AI literacy construct space from the literature side
- [[niri-steam-ai-literacy-review-2026]] — AI literacy review across STEAM contexts, another route to the fragmentation problem

## Citation

He, X., Zhang, X., Wang, C., & Ji, F. (2026). [*Clarifying the conceptual landscape in AI literacy measurement: A large language model based approach*](https://doi.org/10.31234/osf.io/hz4ak_v2). *PsyArXiv Preprints*.
