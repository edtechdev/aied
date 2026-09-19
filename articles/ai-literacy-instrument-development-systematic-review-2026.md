---
title: "Measuring Artificial Intelligence Literacy: A Systematic Review of Instrument Development, Conceptual Foundations, and Psychometric Quality"
created: "2026-09-18T14:20:00-04:00"
updated: "2026-09-19T10:23:54-04:00"
type: article
foundations: [ai-literacy]
assessment: [educational-measurement, self-report-measures, assessment]
methods: [meta-analysis-systematic-review]
research_method: [systematic review, instrument development, secondary analysis]
level: [higher ed, k 12]
audience: [researchers, assessment designers, educators]
page_kind: [synthesis]
sources: ['raw/papers/ai-literacy-instrument-development-systematic-review-2026.md']
confidence: high
---

> **Synthesis:** Jin, Gašević, Martinez-Maldonado and Yan ask what AI literacy instruments actually measure, how they were built, and how well their scores hold up. Following PRISMA and appraising evidence with the COSMIN framework, they searched seven databases for studies published between January 2014 and December 2025, screened 8,056 records down to 278 full texts, and synthesized 58 studies covering 47 unique instruments. Development has been compressed into a very short window: two instruments before 2023, seven in 2023, ten in 2024 and 28 in 2025. Conceptually most instruments converge on a core of AI knowledge, ethics and responsibility, practical application and [[critical-thinking|critical evaluation]], but they remain overwhelmingly self-report (37 of 47), and the psychometric picture is uneven — structural validity and internal consistency are commonly reported, while criterion validity, content validity and measurement invariance are largely absent. Only two of 58 studies earned a sufficient overall content-validity rating and only one reported criterion validity. The takeaway is that the field has expanded faster than its methodological consolidation, and the recommended move is away from producing more scales and toward consolidating, extending and validating the ones that exist.

## Key Findings

1. **The corpus was screened down from 8,057 records to 58 studies.** Seven databases (Web of Science, Scopus, IEEE Xplore, ACM Digital Library, ERIC, PubMed, PsycINFO) yielded 8,056 studies plus one backward-snowballed record; 2,998 duplicates were removed and 5,059 records were screened by title and abstract, excluding 4,781. Of 278 full texts, 220 were excluded (132 not primarily focused on developing or validating an AI literacy instrument, 79 lacking development or validation detail, 5 non-empirical or unavailable, 4 non-English). The 58 included studies cover 47 unique instruments and 11 validation, adaptation or revalidation studies, with Cohen's κ of 0.77 at screening and 0.87 at final selection.
2. **Instrument development exploded after ChatGPT.** Only two original instruments predate 2023 (one in 2021, one in 2022); seven appeared in 2023, ten in 2024, and 28 in 2025 — more than half the entire corpus in a single year.
3. **Self-report dominates the field.** Of 47 original instruments, 37 are self-report questionnaires, 8 are performance-based, and 2 use mixed formats. Five-point Likert scales are most common (25 instruments), then seven-point (11), a single eleven-point scale in the MAILS family, and two six-point scales built to suppress neutral responding.
4. **Structures vary widely but a typical shape persists.** Instruments run from 6 to 63 items (median 24; IQR 19–32) and from 1 to 11 constructs (median 4; IQR 3–5). Self-report scales average a median of 23 items and four constructs; performance-based measures are leaner in dimensionality (median two constructs over 25 items).
5. **Four domains form the conceptual core.** Across 47 instruments the most frequent construct domains are AI Knowledge (34) and Ethics & Responsibility (34), followed by Practical Application (22) and Critical Evaluation (22), then Affective & [[self-efficacy]] (15), Domain Integration (15), [[creativity]] & Innovation (12) and Human–[[student-ai-interaction|AI Interaction]] (10). AI Knowledge and Ethics & Responsibility co-occur in 25 instruments.
6. **Theoretical anchors are narrow and partly unstated.** The Long and Magerko (2020) framework as operationalized by Ng et al. (2021) appears in 24 instruments; educational, cognitive or learning frameworks including [[tpack]] in 14; psychological, behavioral or [[motivation|motivational]] frameworks in 10; other literacy frameworks in 8; ethics or socio-technical frameworks in 5; empirically derived or unreported foundations in 5; domain-specific professional frameworks in 4. [[automated-question-generation|Item generation]] relies on literature review (41 of 47), expert review (36), cognitive pretesting (14), Delphi consensus (6), AI-assisted generation (2) and [[qualitative-research|qualitative]] generation (1).
7. **Factor analysis is routine; modern test theory and invariance testing are not.** Validation approaches were CFA (40 instruments), EFA (32) and IRT (8), with multigroup CFA appearing once.
8. **Content validity evidence is the weakest link.** Surveying 58 studies, only 18 (31%) earned a sufficient (+) rating for relevance and five (9%) for comprehensiveness; comprehensibility was sufficient in five (9%), inconsistent in 28 (48%) and insufficient in 25 (43%). Comprehensiveness drew 53 insufficient ratings (91%) against no inconsistent ones. Just 2 of 58 studies (3%) achieved a sufficient overall content-validity rating; the remaining 56 (97%) were inconsistent.
9. **Psychometric strengths and absences are property-specific.** Structural validity was sufficient in 32 of 58 studies (55%) and insufficient in 22 (38%); internal consistency was sufficient in 32 (55%) with no insufficient ratings; construct validity was reported by only 15 studies and sufficient in 12 (21%); criterion validity was sufficient in one study (2%) with 54 studies (93%) reporting none; cross-cultural validity or invariance was examined in five studies, all rated sufficient. No instrument showed uniformly sufficient, high-certainty evidence across all properties.
10. **The forward agenda is consolidation, not proliferation.** The authors call for performance-based and process-oriented assessment, [[learning-analytics|learning analytics]] and behavioral-trace measurement of [[prompt-engineering|prompting]] and verification, longitudinal designs tracking how AI literacy develops, criterion-referenced [[benchmark|benchmarks]], and systematic measurement-invariance testing across populations and languages.

## How the review was conducted

The search combined AI literacy and AI competence or readiness terms with measurement terms, restricted to English-language publications between 01/01/2014 and 13/05/2025, with the same query rerun periodically through December 2025 to catch newly indexed work. Inclusion required an empirical study whose primary objective was to develop, validate or re-validate an instrument measuring AI literacy itself. Studies treating AI literacy as an outcome variable, or measuring attitudes, anxiety, behavioral intention or other motivational factors, were excluded, as were studies that reused an instrument without additional validation or withheld the item set. Two reviewers with prior COSMIN experience screened independently and calibrated a five-study coding subset before full extraction; disagreements were resolved by consensus, and both reviewers completed a structured familiarization with the COSMIN 2024 manual before appraisal.

The unit of analysis shifts with the question. Landscape and conceptual questions are answered at the instrument level (47 instruments) to avoid double-counting, while COSMIN appraisals are conducted at the study level (58 studies) because measurement evidence is reported study by study. This is a [[meta-analysis-systematic-review|systematic review]] in design but a narrative and appraisal synthesis in practice: the authors map frequencies, cross-tabulations and co-occurrence patterns rather than pooling effect sizes, and every psychometric judgment is a COSMIN rating rather than a single pooled statistic.

## What the instruments actually measure

The conceptual center is stable. [[ai-literacy|AI literacy]] is operationalized across the corpus as a multidimensional competence joining technical understanding, [[ethics|ethical]] responsibility, practical use and [[evaluative-judgment|evaluative judgment]], which is why AI Knowledge and Ethics & Responsibility appear in 34 of 47 instruments each and co-occur in 25. The authors read this as an emerging consensus that literacy is not reducible to technical [[computational-thinking|computing knowledge]] or to attitudes about AI. But the consensus is shallow: instruments attach the same labels to different item content, scope and levels of abstraction, so convergence at the level of discourse coexists with divergence at the level of measurement — the central problem for [[educational-measurement|educational measurement]] in this area.

Divergence shows up in several ways. Some instruments treat AI literacy as a general civic competence akin to digital or media literacy; others frame it as a domain-specific capability for teaching, clinical decision-making or workplace use, drawing on models like [[teacher-ai-competency|teacher AI competence]] and TPACK. Scope ranges from six-item screening tools such as PAILQ-6 to 63-item instruments, and dimensionality from a single factor to eleven. A minority of instruments is empirically derived with no stated framework at all.

Generative AI is shifting what the construct means. Recent instruments foreground prompting, verification of AI-generated outputs, [[privacy]] management and responsible interaction with [[llm|large language models]], moving literacy away from knowledge about AI as an object of study and toward participation in human–AI interaction. Yet Human–AI Interaction (10 instruments) and Creativity & Innovation (12) remain the least integrated domains, co-occurring mainly with ethics and critical evaluation, so competencies that matter most in [[generative-ai|generative AI]] environments are the least standardized. Item generation is itself conservative: literature synthesis and expert review dominate, and AI-assisted item generation appears in just two instruments.

## The psychometric quality picture

Reported evidence clusters tightly around internal structure. Confirmatory factor analysis appears in 40 instruments and EFA in 32, and 32 of 58 studies (55%) reached a sufficient structural-validity rating, with 16 supported by high-certainty evidence. Internal consistency is the most favorable property — 32 sufficient ratings (55%), 15 at high certainty, none insufficient — but the authors warn that high coefficients can reflect item redundancy as much as construct representation, and COSMIN requires internal consistency to be read alongside structural validity. [[item-response-theory|IRT]] and related approaches appear in only eight studies, concentrated in objective or performance-based measures where dichotomous scoring permits difficulty and ability estimation.

Everything that requires evidence outside the instrument is scarce. Only 15 studies reported any [[assessment-validity|construct validity]] evidence, and 12 (21%) were rated sufficient, with many studies correlating AI literacy scores against adjacent constructs without stating a priori hypotheses about direction or magnitude, which depressed their COSMIN ratings. Criterion validity is nearly absent: one sufficient study, and 54 (93%) reporting none, leaving the field without benchmarks linking scores to observable capability. Cross-cultural validity or measurement [[assessment|invariance]] was tested in five studies, all sufficient and mostly at moderate or high certainty, using multigroup CFA across gender, national context or educational background — a strong result for a very small set of instruments, and a real gap given how often scales are translated and reused.

Content validity is where the field is most exposed. Most studies (54 of 58, 93%) defined the construct before writing items, and 38 (66%) reported concept elicitation, 36 (62%) pilot testing and 25 (43%) expert panel review. Those numbers look reasonable until the ratings: comprehensiveness drew a sufficient rating in only five studies and an insufficient rating in 53, and comprehensibility split between inconsistent (28) and insufficient (25) despite 43 studies (74%) reporting cognitive interviewing or think-aloud work. The pattern the authors diagnose is one of reportable-but-insufficient process: procedures were conducted but not reported in enough depth, not clearly linked to item revision, or not implemented in ways COSMIN accepts. The consequence is that a well-fitting factor structure can sit on top of an item pool too narrow to represent the construct, and the certainty of evidence across the corpus is mostly low or very low.

## What this means for practice
- **Researchers.** Treat a clean factor structure and a high Cronbach's alpha as insufficient evidence of capability: most instruments measure perceived competence, readiness, or self-efficacy, and digital-competence research shows perceived and enacted competence diverge.
- **Researchers.** Pair [[self-report-measures|self-report]] instruments with performance-based tasks — scenario-based items where learners analyze AI-generated output or justify decisions made with AI assistance — and treat AI literacy as a family of related constructs with a shared core and context-specific extensions, rather than expecting one universal scale to serve civic, [[pedagogy|pedagogical]], clinical, and workplace purposes equally well.
- **Assessment designers.** Spend more effort before and after item writing rather than during it: define the construct and map its domains systematically before drafting items, blueprint coverage of knowledge, ethics, application, and critical evaluation, and elicit concepts from the target population rather than only from the literature.
- **Assessment designers.** Pilot and cognitively test items, then document how responses changed the final instrument; add criterion evidence by relating scores to performance tasks, and test measurement invariance whenever a scale crosses language, country, or educational stage.
- **Assessment designers.** Prefer consolidation over proliferation — refine domain taxonomies, distinguish genuinely new generative AI competencies from new manifestations of existing ones, and validate existing scales in new contexts instead of issuing a new one.

## Limitations
- The appraisal reflects reported evidence rather than actual methodological quality: because COSMIN demands explicit documentation, studies that may have performed additional validation steps but described them thinly received indeterminate ratings, and the review cannot distinguish poor practice from poor reporting.
- Scope is restricted to peer-reviewed English-language academic literature, excluding gray literature, institutional and policy reports and industry tools, so the landscape is a map of scholarly measurement research rather than a complete inventory of instruments in use.
- The corpus spans general-public surveys, [[k-12|school]], [[higher-ed|higher education]] and professional settings with different conceptualizations and purposes, which complicates direct comparison across instruments and limits the generalizability of aggregate patterns.
- The field moves fast: instruments were developed in response to capabilities that shifted within the review window, so the patterns are indicative trends within a snapshot rather than durable conclusions about how AI literacy should be conceptualized or assessed.

## Connected Concepts

- [[ai-literacy]] — the construct the review maps and the reason its measurement matters
- [[educational-measurement]] — the psychometric traditions and validation standards applied throughout
- [[self-report-measures]] — the dominant instrument type (37 of 47) and the source of the perceived-versus-enacted gap
- [[assessment]] — the broader practice the review's advice on combining self-report with performance tasks speaks to
- [[assessment-validity]] — content, construct and criterion validity evidence as the review's central concern
- [[psychometrically-aware-ai]] — the disposition developers need toward construct definition, blueprinting and validation
- [[item-response-theory]] — the modern test theory approach present in only eight of the reviewed instruments
- [[meta-analysis-systematic-review]] — PRISMA-guided screening and COSMIN appraisal as the review method
- [[generative-ai]] — the technology whose diffusion drove the post-2023 instrument boom and reshaped the construct
- [[learning-analytics]] — the process-based measurement the authors propose as an alternative to static scales
- [[teacher-ai-competency]] — a major instrument target cluster (10 of 47 audience-coded as teachers)
- [[higher-ed]] — the most frequently studied population, alongside K–12 and professional contexts
- [[student-ai-interaction]] — the interactional competencies that remain least standardized in current instruments
- [[critical-thinking]] — critical evaluation of AI outputs as one of the four core construct domains

## Connected Articles

- [[ai-literacy-measurement-conceptual-landscape-llm-2026]] — The conceptual landscape of AI literacy measurement in the LLM era
- [[competent-generative-ai-use-measures-review-2026]] — Another review of measures for competent generative AI use
- [[xiong-ai-educational-measurement-review-2026]] — A parallel review of AI educational measurement approaches
- [[jin-glat-genai-literacy-assessment]] — A generative AI literacy assessment instrument from the same research group
- [[genai-assessment-literacy-scale-2026]] — A scale for assessment literacy in generative AI contexts
- [[questionnaire-teachers-genai-uses-validation-2026]] — Validating a teacher questionnaire on generative AI use
- [[sangwa-epiq-ai-faculty-readiness-2026]] — An instrument for measuring faculty AI readiness across institutions
- [[ai-literacy-continuum-higher-education]] — Framing AI literacy as a developmental continuum in higher education
- [[liu-ai-literacy-interventions-meta-analysis-2026]] — Meta-analysis of AI literacy interventions and how they are measured

## Citation

Jin, Y., Gašević, D., Martinez-Maldonado, R., & Yan, L. (2026). [*Measuring Artificial Intelligence Literacy: A Systematic Review of Instrument Development, Conceptual Foundations, and Psychometric Quality*](https://osf.io/preprints/psyarxiv/tckb9_v2). Preprint submitted to Elsevier.
