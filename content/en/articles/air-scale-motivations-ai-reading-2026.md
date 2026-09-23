---
title: "The AIR Scale: Development and Validation of a Measure of Motivations for Using AI During Reading"
created: "2026-09-18T12:05:00-04:00"
updated: "2026-09-19T10:23:54-04:00"
type: article
foundations: [ai-literacy, cognitive-offloading]
assessment: [educational-measurement, self-report-measures, assessment-validity]
technology: [generative-ai, llm]
pedagogy: [self-regulated-learning, metacognition, motivation]
methods: [quantitative-research]
research_method: [instrument development, survey]
level: [higher ed]
audience: [researchers, instructors, learners]
page_kind: [evaluation]
sources: ['raw/papers/air-scale-motivations-ai-reading-2026.md']
confidence: high
---

> **Synthesis:** Reading with [[generative-ai|generative AI]] produces inconsistent comprehension outcomes — gains in one study, no [[transfer-of-learning|knowledge transfer]] in another — and the AIR team's wager is that the variance lies in why readers reach for the tool. Brann, Etgar and Sidi note that no validated instrument yet measured [[motivation]] for GenAI-assisted reading specifically, so they built one: 52 candidate reasons gathered from literature, media commentary and lay belief, reduced to 42 items, then to 25 after an exploratory factor analysis on 425 British higher-education students (a six-factor initial solution collapsing to four factors, 65.91% of variance explained, KMO .948). A confirmatory factor analysis on 414 new students trimmed four context-bound items to reach excellent fit (CFI .95, TLI .95, RMSEA .056, SRMR .046) and a final 21-item scale with four motives: Task-oriented, Feel-good, Translation and Low-effort. Reliability ranged from α = .95 down to .67 on the two-item Low-effort subscale, which the authors defend as acceptable at that length. Convergent validity against the [[agency|autonomy]]-oriented AIMS subscales was strong for Task-oriented and Feel-good and weaker for Translation and Low-effort; divergent checks against task-switching preference, [[neurodiversity|ADHD]] and learning-disability diagnosis were essentially null. The takeaway: GenAI reading use is not a single behavior, and Low-effort is the motive to watch for shallow processing.

## Key Findings

1. **The gap is measurement, not description.** Studies document that GenAI-assisted reading is heterogeneous and often goal driven, but motivation has rarely been measured with an instrument tailored to the reading process. Existing adult reading motivation scales assume readers regulate meaning construction alone, and general GenAI motivation scales (like AIMS) miss the purpose-contingent structure of comprehension goals.
2. **Items came from four source types.** 52 motivations were harvested from academic literature (Abdullah et al., 2025; Yan et al., 2024; Naddaf, 2025), blogs and media commentary (Bogost, 2025), plausible researcher assumptions, and personal observation of student opinions. Overlapping items were merged (e.g. "improves my understanding of the text" with "to improve my comprehension of texts") into 42 items rated on frequency, 1 = never to 7 = always.
3. **Study 1's EFA was a process of subtraction.** The initial varimax solution produced six factors with eigenvalues above 1, 64.96% variance explained and KMO .968, but 13 items cross-loaded. Removing them eliminated one factor entirely and left another with a single item ("for reading texts written in my native language"), which was dropped. A second EFA on the remaining 28 items gave four factors at 64.74%; three more cross-loading items went, yielding a final 25-item, four-factor solution at 65.91% variance and KMO .948. Rerunning without the six participants who never used AI for reading reproduced the same structure.
4. **Four conceptually distinct motives emerged.** Task-oriented (strategic use to construct meaning, clarify, explain and organize); Feel-good (a consistent emotional and social tendency to make reading more enjoyable, engaging or emotionally manageable); Translation (overcoming language barriers, translating, reading in a non-native language); and Low-effort (minimizing effort when tired, disengaged or indifferent). The EFA loading of "when I am tired" was kept on Low-effort despite a secondary loading on Task-oriented, flagged for the CFA to resolve.
5. **Study 2's CFA finalised 21 items.** On 414 new participants the 25-item model was only adequate (CFI .90; TLI .89; GFI .84; RMSEA .08; SRMR .06). Removing four items highly correlated with others — "to make academic reading easier", "to make leisure reading easier", "for academic reading", "for professional reading" — made the scale more motivation-oriented and less about a reading context, improving fit to CFI .95, TLI .95, GFI .91, RMSEA .056, SRMR .046. Study 2 also required participants to confirm prior experience using AI for reading and gated entry on Prolific approval rates of 90–100% across up to 500 prior submissions.
6. **Reliability spans excellent to acceptable.** Cronbach's α was .95 for Task-oriented, .89 for Translation, .84 for Feel-good and .67 for Low-effort — the last being a two-item subscale, which the authors argue is acceptable at that length (Iacobucci & Duhachek, 2003).
7. **Convergent and divergent validity both behaved.** All four subscales correlated positively with AIMS Intrinsic Motivation (Task-oriented r = .59; Feel-good r = .48; Translation r = .31; Low-effort r = .27) and Identified [[regulation]] (r = .57, .48, .26, .28 respectively), strongest for the intentional, self-endorsed motives. Task-switching preference was uncorrelated with every subscale except a small effect for Feel-good (r = .11, p = .03), and no subscale differed by ADHD diagnosis (45 participants reported one; all F < 3.02, all p > .083) or learning-disability diagnosis (33 reporting one; all F < 2.07, all p > .15).
8. **The correlates say what Low-effort is.** Need for cognition was negatively related to Low-effort (r = −.18) and marginally negatively to Feel-good (r = −.09), but uncorrelated with Task-oriented and Translation. Perceived usefulness and ease of use from a modified [[technology-acceptance-model|Technology Acceptance Model]] correlated positively with all four motives, usefulness more strongly, with Task-oriented leading (r = .64 usefulness, r = .47 ease of use) and Translation weakest (r = .20 on both).

## Item generation and the theoretical grounding of the motives

The scale starts from the claim that comprehension is inherently goal directed: readers' purposes set their standards of coherence, which in turn decide how much inferencing and cross-text integration a text gets. Introduce a GenAI tool and reading gains a second regulatory layer — deciding when and how to enlist the system — so motives for GenAI-assisted reading are not the same as the general motivation to use GenAI. [[self-determination-theory|Self-determination theory]] supplies the frame, with autonomy, competence and relatedness as needs and with identified regulation as the autonomous-yet-extrinsic category that later anchors the convergent validity test. The four candidate motive families that structure the item pool map onto that argument: strategic sensemaking, sustaining engagement, addressing linguistic barriers, and reducing effort.

The pool itself was assembled loosely — literature, media commentary, researcher assumption and lay belief — then disciplined by combining overlaps, which is why the reported study begins at 42 items rather than 52. The response stem asks frequency ("at what frequency do you use AI reading tools for each of the below purposes?") rather than agreement, which makes AIR a measure of enacted [[motivation|motivational]] patterns rather than endorsed beliefs.

## The study sequence and what each model produced

Two independent Prolific samples of British higher-education students carried the sequence. Study 1 (N = 425; mean age 25.71, 59% female) supported an exploratory factor analysis with varimax rotation and a 0.4 loading cut-off. Study 2 (N = 414; mean age 24.83, 67% female) supported the confirmatory factor analysis, plus the validity and correlates battery. Every participant in both samples reported English as a first and primary language, and Study 2 excluded anyone without prior GenAI reading experience.

The single structural wrinkle worth noting is the item "when I am tired", which in the final EFA loaded .409 on Task-oriented alongside .574 on Low-effort. The authors kept it on Low-effort, treating the cross-loading as an artifact of the iterative analyses, and noted that the CFA needed to settle the question. The CFA's fit improvement came with a deliberate narrowing: dropping the four academic-, professional- and leisure-context items removed variance that was about the situation of reading rather than the reason for using AI.

## What each recovered motive means for reading with GenAI

Task-oriented readers use GenAI to preserve responsibility for understanding — requesting clarifications, comparing claims against the source, structuring information for deeper analysis. This is the motive most aligned with the [[metacognition|metacognitive]] behaviors that comprehension demands. Feel-good use runs on affect: enjoyment, interest, reduced frustration, a sense of social connection, and one item that measures compensating for one's own reading ability relative to the tool's. The authors read it as potentially engagement-promoting through conversational support, but flag the risk that enjoyment substitutes for comprehension monitoring, and recommend checkpoints that return readers to the text.

Low-effort is the motive with the clearest risk profile. Its negative association with need for cognition fits a pattern of avoiding effortful processing; occasional effort reduction can be adaptive under information overload, but a persistent Low-effort motive suggests GenAI becomes the default substitute for meaning-making rather than a support for it, predicting summary-first reliance and reduced source checking. Translation is narrow but consequential: it reduces language-based barriers and widens access to knowledge across languages, while still requiring accuracy safeguards for meaning shifts in technical arguments. Together the four motives make the case that treating GenAI use as a single behavior obscures the different interaction patterns — and the different risks — it conceals. The instrument is positioned as a complement to [[ai-literacy|AI literacy]] [[assessment|assessments]] that cover knowledge, application, attitudes and [[ethics]] but not the reasons readers choose the tool, and as a learner-level, task-specific addition to work on metacognitive guidance in AI-supported learning.

## What this means for practice

- **Educators.** Ask which of the four motives sent a reader to the tool before judging the resulting work: Low-effort use was the only subscale negatively related to need for cognition (r = −.18) and is the pattern the authors flag for shallow processing.
- **Educators.** Pair enjoyment-oriented AI reading with a comprehension checkpoint, since Feel-good use runs on engagement and reduced frustration (r = .48 with AIMS Intrinsic Motivation) and risks substituting for comprehension monitoring.
- **Learners.** Name your own reason first — Task-oriented, Feel-good, Translation or Low-effort — because the four motives describe different interaction patterns, and only Task-oriented use is anchored to strategic meaning construction.
- **Educators.** Keep translation support in the toolkit but verify meaning on technical material: the Translation motive (α = .89) widens access across languages yet carries the weakest link to [[technology-acceptance-model|perceived usefulness]] (r = .20).
- **Researchers.** Treat a motive score as a starting point rather than an outcome, because AIR measures enacted [[motivation]] and only prompt logs, verification behavior and time on text reveal whether a stated reason becomes a particular way of reading.

## Limitations
- Convergent validity was established against the AIMS Intrinsic Motivation and Identified Regulation subscales, on the reasoning that both capture volitional, autonomy-aligned engagement with GenAI; the moderate-to-strong correlations, stronger for Task-oriented and Feel-good, support reading those two as the most self-endorsed motives while Translation and Low-effort look more instrumental.
- Divergent validity came only from preference for task switching and from self-reported ADHD and learning-disability status — both unrelated to any subscale — which rules out AIR as a proxy for general digital multitasking or attentional and learning difficulties but leaves the instrument's discriminant evidence on a narrow base.
- The samples were primarily younger higher-education students recruited through Prolific, so because age and education shape GenAI adoption the [[educational-measurement|psychometrics]] may not transfer to older adults or other educational backgrounds; ADHD and learning-disability status were single binary self-report items rather than clinically validated or dimensional measures.
- Most importantly, the scale measures [[motivation]], not outcome: comprehension and knowledge transfer also depend on planning, monitoring and evaluation, processes that confident-sounding GenAI responses may undermine by encouraging [[cognitive-offloading|offloading]] and overestimation; AIR cannot say whether a stated motive translates into a particular interaction pattern — only prompt logs, verification behavior and time on text can do that, which is the combination the authors propose for future work.
## Connected Concepts

- [[assessment-validity]] — the convergent, divergent and structural evidence the AIR validation rests on
- [[cognitive-offloading]] — the risk pathway that Low-effort motivation is designed to predict
- [[educational-measurement]] — instrument development, factor analysis and fit statistics as the study's method
- [[generative-ai]] — the class of tools readers bring to the reading task
- [[language-learning]] — the translation motive's territory, reading and translating across language boundaries
- [[llm]] — the underlying model class behind AI reading tools
- [[metacognition]] — comprehension monitoring and effort regulation that motives may support or erode
- [[motivation]] — the construct AIR operationalizes, split into four reading-specific motives
- [[self-determination-theory]] — the autonomy, competence and relatedness frame and the convergent-validity benchmark
- [[self-regulated-learning]] — the second regulatory layer of deciding when to enlist GenAI while reading
- [[self-report-measures]] — the instrument type, and the source of its main limitation
- [[technology-acceptance-model]] — perceived usefulness and ease of use, the correlates examined alongside AIR

## Connected Articles

- [[seung-basham-cognitive-offloading-swld-2026]] — Cognitive offloading with GenAI and what it means for students with learning disabilities
- [[misiejuk-cognitive-offloading-prompting-2026]] — Longitudinal analysis of prompting strategies as offloading behavior
- [[yan-cognitive-outsourcing-genai-assessments-2026]] — Cognitive outsourcing versus reallocation in unsupervised GenAI tasks
- [[liang-ai-learning-motivation-sdt-2026]] — AI learning motivation profiled through SDT and latent transition analysis
- [[reclaiming-epistemic-agency-co-agency-2026]] — Epistemic agency and co-agency as the counterweight to effort offloading
- [[song-genai-learning-partner-srl-over-time-2026]] — Supporting self-regulated learning with GenAI without replacing effort
- [[competent-generative-ai-use-measures-review-2026]] — Review and meta-analysis of measures for competent GenAI use
- [[ai-literacy-assessment-misalignment]] — Self-reported versus performance measures of AI competence
- [[xiong-ai-educational-measurement-review-2026]] — Thematic review of AI's impact on educational measurement
- [[genai-assessment-literacy-scale-2026]] — A validated GenAI assessment literacy scale for higher education students

## Citation

Brann, A., Etgar, S., & Sidi, Y. (2026). [*The AIR Scale: Development and validation of a measure of motivations for using AI during reading*](https://osf.io/preprints/psyarxiv/djexs_v1). *PsyArXiv Preprints*.
