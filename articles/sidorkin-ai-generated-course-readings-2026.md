---
title: "From One-Size Texts to Tailored Readings: Student Experiences with AI-Generated Course Materials"
created: "2026-09-14T11:10:12-04:00"
updated: "2026-09-19T07:32:15-04:00"
type: article
foundations: [ai-literacy, curriculum-design]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, personalized-learning]
methods: [mixed-methods-research]
ethics: [hallucination-risk, trust-calibration]
research_method: [case study, thematic analysis]
level: [higher ed]
sources: ['raw/papers/sidorkin-ai-generated-course-readings-2026.md']
confidence: high
audience: [instructors, curriculum designers]
---

> **Synthesis:** Sidorkin (2026) documents a proof of principle in which weekly readings for a graduate educational leadership course were generated on demand by an AI "Class Companion", replacing a commercial textbook and implementing what the author calls *dual tailoring* along two dimensions at once: interest (sector, professional role, local examples) and comprehension level (pacing, definitions, [[scaffolding|scaffolded steps]]). Surveying 24 students and analyzing 4,487 pages of reading logs, the study finds that students rated the readings as useful preparation and that 75 percent agreed they learned more than in a comparable course without AI, while the artifact analysis confirms measurable, non-cosmetic differentiation between logs. The boundary conditions are equally clear: readings often lacked internal traceability, citation practice was inconsistent, and over-specific institutional claims appeared without supporting evidence, producing a stance of bounded trust rather than blanket acceptance. A secondary finding is that the workflow functioned as implicit training in [[ai-literacy|critical engagement with probabilistic text]], as students learned to request checkable evidence and to refuse explanations that exceeded their warrants.

## Key Findings

1. **AI-generated readings were accepted as a workable textbook substitute, with reservations.** Across five rated functions on a 4-point effectiveness scale (n = 24), students gave the strongest marks to assignment support (83 percent Effective or Very Effective, M = 3.38, SD = 0.77) and to information about course requirements (88 percent), while generating quality reading materials was positive but more mixed (75 percent, M = 3.12, SD = 0.80). The lowest ratings went to assessing knowledge and skills (71 percent), the only function that drew any "Not effective" selections, suggesting the assistant was read as just-in-time support rather than a substitute instructor in a [[higher-ed|graduate]] course.
2. **Seventy-five percent agreed they learned more than in a comparable course without an AI companion.** On 4-point agreement items, 75 percent endorsed the comparative learning claim (29 percent fully agree; M = 2.96, SD = 0.91) and 71 percent said they would take another course with an AI class companion (M = 2.92, SD = 0.93). The strongest single endorsement was skill development, with 88 percent agreeing their AI skills increased significantly and two-thirds fully agreeing (M = 3.50, SD = 0.83), indicating that acceptability rested on perceived transferable competence and not only on convenience.
3. **Dual tailoring is a real instructional configuration, not a slogan.** Interest tailoring adapted readings to the learner's professional context (community college, CSU, UC, private nonprofit), role (department chair, HR analyst, dean, student affairs) and problem type, while comprehension-level tailoring adjusted pacing, definitions, vocabulary density and depth on request. Both dimensions ran through the same mechanism, iterative prompting, so students requested a first-pass reading and then asked targeted follow-ups to reframe, deepen, simplify or localize it.
4. **Artifact analysis shows tailoring markers were frequent but uneven.** Using a systematic 1/5-page sample of logs B through K (13,728 to 22,034 words per log), dictionary-based tailoring markers averaged 52.24 per 10,000 words (SD = 13.73), ranging from 38.74 in Log K to 74.29 in Log B. Some logs leaned heavily into personalization offers and second-person role anchoring, while others relied on relatively generic exposition, so [[personalized-learning|personalization]] was structural but variable in intensity.
5. **Logs shared a common backbone while diverging meaningfully in context.** TF-IDF cosine similarity across logs averaged 0.50 to 0.61, with minimum values as low as 0.41 (Logs B and H) and maximums reaching 0.78 (Logs F and I); robustness checks using stopword removal and bigram vectors shifted averages by no more than 0.03 and left the rank ordering unchanged. Sidorkin reads this as a template with adjustable dials: stable course-aligned scaffolds tuned toward each student's sector and role, rather than a wholesale rewrite per learner.
6. **Comprehension prompts reliably triggered denser scaffolding.** In three sampled logs (B, C, I), definitional markers in AI responses were 3.4x to 8.7x more frequent after comprehension-oriented prompts than in baseline explanatory text (Log B: 0.69 versus 0.17 per 1,000 words; Log I: 0.61 versus 0.07; Log C: 0.37 versus 0.11), and check-for-understanding cues appeared more often after such prompts in two of three logs. The clearest cases show the response building a definitional layer and then a procedural one, as when a request to elaborate on Kotter's model produced a numbered eight-step sequence each anchored in a higher-education policy scenario.
7. **Internal traceability was weak across the corpus.** Only about 0.80 percent of the 4,487 pages contained APA-style in-text citations, URLs appeared on roughly 0.53 percent of pages, and DOI strings were essentially absent, so most claims could not be audited from within the artifact. This is the classic [[hallucination-risk|sourcing]] problem of [[generative-ai|generative AI]] coursework: the text reads as authoritative while offering limited internal means of confirmation, especially for institution-specific or time-sensitive claims.
8. **Citation practice was inconsistent, including mixed-quality source lists.** Where citations did appear, some logs used conventional scholarly anchors such as (Freeman, 1984) and (Coombs, 2007) without a full reference list, and several included Wikipedia links alongside peer-reviewed sources, with Wikipedia mentioned on about 1.65 percent of pages (roughly 0.62 to 3.73 percent by log). Because Wikipedia was intentionally included for orientation but was not differentiated from peer-reviewed items, students had to infer source quality from context rather than from labels.
9. **Over-specific institutional claims were the most consequential failure mode.** About 1.03 percent of pages paired "Sacramento State" or "Sac State" with assertive policy verbs, producing claims about revised retention, tenure and promotion policies or CSU Executive Orders that provided no verifiable citation. Sidorkin argues that specificity raises the cost of error in instructional settings, and that the fix is not to avoid AI generation but to treat it as draft production under instructor review, followed in the next semester by a retrieval-augmented design anchored in curated sources.
10. **Verification behavior was present, learnable, and uneven.** Of 837 student turns across logs B through K, 23 (about 2.7 percent) contained conservative risk-aware moves such as correcting AI assumptions ("that is inaccurate I work in student housing at UC Davis"), demanding checkable cases, or stating confusion early; two logs contained no such turns at all. Survey comments reinforce a [[trust-calibration|bounded trust]] profile, with four of 24 respondents using dependence language, one naming the need for "teacher oversight," and one describing themselves as "somewhat codependent on the AI for reassurance and structure."

## What this means for practice

- **Instructors.** Treat AI generation as draft production under review, not finished text: APA-style in-text citations appeared on only about 0.80 percent of the 4,487 pages, and about 1.03 percent paired "Sacramento State" with assertive policy verbs about retention, tenure and promotion rules or CSU Executive Orders. Position the assistant as a fallible guide rather than an authority, use applied activities such as case analysis and simulations as the quality-control layer, and treat the pedagogical payoff of visible quality variance plus required verification as a hypothesis rather than a finding.
- **Instructors.** Require follow-up interaction rather than one-shot readings — the course asked for at least three follow-up questions per reading, and definitional markers ran 3.4x to 8.7x higher after comprehension-oriented prompts than in baseline explanatory text, which surfaced otherwise latent comprehension gaps and produced the raw material for on-demand [[adaptive-learning|adaptive]] [[scaffolding|scaffolding]] of the kind students valued for its contextual specificity, adjustability and clarity.
- **Designers.** Curate vetted sources into the assistant's knowledge base and label source types explicitly, so students infer quality from labels rather than context: Wikipedia appeared on about 1.65 percent of pages alongside peer-reviewed anchors such as (Freeman, 1984) and (Coombs, 2007), with no visible differentiation.
- **Instructors.** Name and model verification moves instead of assuming a critical stance emerges on its own: only 23 of 837 student turns (about 2.7 percent) contained a correction of the assistant, a demand for checkable evidence, or an early statement of confusion, so these moves should be modelledUS with excerpts from the course's own interaction archive and normed through peer practice.
- **Designers.** Budget the hidden labor the approach implies — prompt design, output review and verification [[scaffolding|scaffolding]] — and plan [[professional-training|faculty development]] alongside any rollout, because the workload is lower than authoring a textbook but not zero.

## Limitations

- Evidence comes from a single graduate educational leadership course: 24 students completed the survey and consented to participation, on self-reported perceptions rated on 4-point scales, with no control condition.
- The artifact analysis covers reading logs B through K only (Log A was excluded because it used chat links rather than the standardized PDF format), sampled at 1/5-page intervals and coded with dictionary-based markers rather than human judgment, over 13,728 to 22,034 words per log.
- Internal traceability was weak across the corpus — about 0.80 percent of pages carried in-text citations, URLs appeared on roughly 0.53 percent, and DOI strings were essentially absent — so most claims could not be audited from within the artifact itself.
- Transferability to undergraduate or large-enrollment settings remains untested, and the five design principles the author draws from the study are presented as a hypothesis rather than a demonstrated outcome.

## Connected Concepts

- [[generative-ai]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[higher-ed]]
- [[scaffolding]]
- [[curriculum-design]]
- [[hallucination-risk]]
- [[trust-calibration]]
- [[ai-literacy]]
- [[student-experience]]

## Citation

- Sidorkin, A. M. (2026). [From One-Size Texts to Tailored Readings: Student Experiences with AI-Generated Course Materials](https://doi.org/10.55982/openpraxis.18.3.1141). *Open Praxis*, 18(3), 506-522.