---
title: "The role of artificial intelligence in detecting and preventing academic dishonesty in higher education: a systematic review"
created: "2026-11-27T01:33:12-05:00"
updated: "2026-11-27T01:36:00-05:00"
type: article
published: "2026-07-16"
sources: ['raw/papers/salamah-academic-dishonesty-detection-review-2026.md']
confidence: low
evidence_context: educational
page_kind: [synthesis]
research_method: [literature review]
discipline: []
level: [higher ed]
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Salamah synthesized peer-reviewed evidence on artificial intelligence for detecting and preventing [[academic-integrity|academic dishonesty]] in [[higher-ed|higher education]]. Across 33 studies found in six databases and screened through three stages, four themes emerged: AI-based detection, AI-based prevention, ethical and institutional challenges, and contextual and evidentiary gaps. Text-similarity and [[ai-detection|plagiarism detection]] have the strongest support, but detection tools flag non-native English writers disproportionately. [[learning-analytics|Learning analytics]] shows promise for early support, while evidence on identifying AI-generated text remains thin and time-bounded. Developing and conflict-affected systems are almost absent from the literature. The review concludes that AI should complement human judgment inside an integrated integrity ecosystem, not replace it.

## Key Findings
1. **Thirty-three studies survived a documented screening process.** The search covered six databases and publications from 2012 through 2024, with eligibility set by predefined criteria.
2. **Four themes organize the evidence.** Detection, prevention, ethical and institutional challenges, and gaps in geographic and evidential coverage structure the synthesis.
3. **Text-similarity detection is the best-supported application.** Its effectiveness and its bias against non-native English writers both rest on comparatively strong evidence.
4. **Stylometry works mainly under controlled conditions.** Real-world institutional effectiveness is less established, and large authenticated writing samples are required.
5. **Prevention is more promising than detection alone.** Learning analytics and early-warning systems can flag at-risk students, but evidence that the resulting interventions work is thinner than evidence about prediction.
6. **AI-text detection is an emerging, not mature, area.** Only a small subset of the corpus addressed it, and the search was closed before rapid later changes in detection and generation.
7. **The literature is geographically skewed.** Almost all evidence comes from well-resourced systems, so context-specific guidance for under-represented settings is treated as an open research agenda.

## How the review was conducted

Six databases were searched: Scopus, Web of Science, ScienceDirect, IEEE Xplore, SpringerLink and Google Scholar. The search covered January 2012 to December 2024 and was not re-run at revision. Eligibility used PICOS criteria and three-stage screening. The search returned 412 records; 87 duplicates were removed, 325 were screened by title and abstract and 241 were excluded, leaving 84 full-text assessments. Of 51 full-text exclusions, 18 were not peer-reviewed, 22 concerned the wrong educational level or unrelated AI uses and 11 were unavailable in full text. Thirty-three studies were included.

Reporting followed [[meta-analysis-systematic-review|PRISMA]] 2020. Thematic synthesis used initial coding, descriptive themes and interpretive analytical themes. Risk of bias was assessed with the Mixed Methods Appraisal Tool, with conceptual and theoretical papers appraised narratively. Findings were stratified into four evidence levels, from multiple empirical studies with outcome data down to theoretical papers without [[primary-education|primary]] data.

Designs in the corpus were systematic or scoping reviews (n = 11), empirical [[quantitative-research|quantitative]] studies (n = 12), [[mixed-methods-research|mixed-methods research]] (n = 6) and theoretical, conceptual or ethical framework papers (n = 4). AI modalities included plagiarism tools (n = 20), [[machine-learning|machine learning]] classifiers (n = 15), [[educational-nlp|natural language processing]] and stylometry (n = 12), learning analytics (n = 10) and [[generative-ai|generative AI]] detection (n = 8). Twenty-seven studies (82%) appeared between 2018 and 2024 and six (18%) predated 2018. Thirteen studies came from North America, nine from Europe and seven from East Asia and the Asia-Pacific; four addressed developing or conflict-affected contexts substantively, with Middle Eastern higher education mentioned peripherally in three. No empirical study of AI integrity systems in Palestinian universities was found; the review cites figures of approximately 230,000 students across 14 institutions there from UNESCO, used only to illustrate the gap.

## What the evidence supports

Plagiarism and text-similarity tools compare submissions against large text databases and now use semantic similarity to catch paraphrasing. Machine learning classifiers trained on annotated corpora improved specificity, with ensembles outperforming single algorithms in [[discipline-specific-aied|discipline-specific]] writing. The recurring [[equity-in-ai-education|equity]] problem is elevated false positives for non-native English speakers, whose formulaic phrasing and unusual word choices can be read as suspicious. Stylometric authorship verification can flag contract cheating when large authenticated writing samples exist, but legitimate writing development and deliberate style masking weaken it.

On prevention, learning analytics combines engagement patterns, submission timing, forum participation and resource access into early-warning signals. Students who disengage, submit at the last moment or show sudden unexplained quality gains have been identified as at-risk groups. Adaptive feedback on citation and paraphrasing is used to reduce unintentional plagiarism, and some institutions teach [[ethics|responsible AI]] use and citation rather than prohibiting it.

Ethical findings are consistent: [[bias-mitigation|algorithmic bias]] reflects the composition of training corpora; black-box scores make disciplinary decisions hard to justify; data collection creates privacy obligations; and surveillance can undermine trust. Four integration barriers are named — policy alignment, faculty training, consistent application across departments and keeping pace with changing tools. The strongest supported conclusions concern detection, stylometry, learning analytics and the need for [[human-in-the-loop-ai|human oversight]]. Claims about mature AI-text detection and about adapting systems to resource-constrained settings rest on much thinner evidence.

## What this means for practice
- **Instructors.** Treat similarity scores and AI-detector flags as prompts for further investigation, never as sole evidence for a disciplinary decision.
- **Institutions.** Audit detection tools for false positives by language background and disciplinary convention before using them at scale.
- **Institutions.** Invest in formative writing support and explicit teaching of citation and responsible AI use alongside any detection capability.
- **Researchers.** Conduct primary studies in developing and conflict-affected higher education systems and update the search before drawing conclusions about AI-text detection.

## Limitations
- The search was limited to English-language publications in six databases; Arabic-language sources and regional repositories were excluded, so relevant non-English work could not be identified.
- The protocol was not registered prospectively, leaving room for post-hoc decisions in selection and analysis.
- The December 2024 cutoff substantially predates submission, and the search was not updated at revision, so findings on generative AI detection are explicitly time-bounded.
- Thematic synthesis involves interpretive judgments in coding and theme development that cannot be fully eliminated.
- Risk-of-bias ratings were reconstructed from the review's own extraction records rather than verified against each primary source, and the PRISMA table describes its record counts as estimates.
- No empirical study of AI integrity systems in a developing or conflict-affected system was included, so context-specific recommendations are deliberately withheld.

## Citation
Salamah W (2026) The role of artificial intelligence in detecting and preventing academic dishonesty in higher education: a systematic review. Front. Educ. 11:1880283. doi: 10.3389/feduc.2026.1880283.
