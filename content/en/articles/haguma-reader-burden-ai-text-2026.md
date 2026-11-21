---
title: "Reader Burden and Linguistic Register in AI-Generated Text: Implications for Higher Education"
created: "2026-11-21T08:15:00-05:00"
updated: "2026-11-21T08:15:00-05:00"
type: article
published: "2026"
discipline: [learning sciences]
foundations: [ai-literacy]
pedagogy: [student-experience]
technology: [generative-ai, llm, machine-learning, educational-nlp]
assessment: [ai-detection, self-report-measures]
methods: [usability-research, mixed-methods-research]
research_method: [user study, experiment, literature review]
audience: [researchers, instructors, faculty developers, instructional designers]
level: [higher ed]
page_kind: [evaluation]
sources: ['raw/papers/haguma-reader-burden-ai-text-2026.md']
confidence: medium
evidence_context: educational
source_depth: full text
source_url: "https://doi.org/10.3390/educsci16111993"
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-21"
    agent: hermes-agent
connected_concepts: [generative-ai, cognitive-offloading, ai-detection, reading-education, machine-learning, student-experience]
connected_articles: []
---

> **Synthesis:** Haguma, Ur Rehman and Anwar ask how suitable [[generative-ai|AI-generated texts]] are for the learners who actually read them, and answer with four linked exploratory studies rather than one outcome. In Study 1, 110 university students were randomly assigned to read either a human-written BBC news passage about the Kursk submarine disaster or a ChatGPT-generated passage on the same topic; the AI passage drew higher ratings on an exploratory six-item reading-burden composite (3.20 versus 2.05). Study 2 compared matched human and AI pairs in academic, news and blog writing: lexical diversity was higher for AI text in all three, while readability and sentence-length variation followed register-dependent directions. Study 3 found that logistic regression and an RBF-SVM classified text source with high accuracy, while a RoBERTa detector was lower, and score-guided rewriting reduced heuristic scores but produced incoherent prose in the max-divergence condition. Study 4, an independent 60-passage cybersecurity corpus, found register-dependent patterns and weak passage-level recovery of intended registers. The limit is plain: one passage per condition, no comprehension measure, and a composite that is exploratory rather than validated.

## Key Findings

- **The AI passage felt heavier.** The six-item composite ran 3.20 for the AI passage against 2.05 for the human one; concentration effort ran 3.20 against 2.42 and temptation to skim 3.33 against 2.27. Agreement that the text caused mental tiredness reached 38.2% in the AI condition against 10.9% in the human condition.
- **Linguistic differences depended on register.** Type-token ratio and its moving average were higher for the AI passage in all three matched pairs, but Flesch Reading Ease and sentence-length variance pointed in different directions across academic, news and blog writing.
- **Classifiers worked well inside their own evaluation setting.** Logistic regression reached 0.9865 accuracy and the RBF-SVM 0.9915 on a 2000-document set; the pretrained RoBERTa detector reached 0.8315, with markedly lower AI recall.
- **A diagnostic passage split the classifiers.** A separate AI-generated academic passage received AI-class probabilities of 0.017 from logistic regression, 1.000 from the RBF-SVM and 0.064 from the RoBERTa detector.
- **Rewriting lowered scores without guaranteeing quality.** Max-divergence PEGASUS cut the heuristic score from 83.46 to 46.43 while retaining 18.5% of source content words and producing incoherent text; guarded PEGASUS retained 81.5% but the score fell only to 73.38.
- **Register recovery was unreliable at passage level.** Only 7 of 15 human passages were closest to their corresponding register centroid; AI matches concentrated in news and blogs, with academic recovery of none of five ChatGPT passages and one of five Claude passages.
- **The ratio-based score was unstable.** Removing discourse-marker density flipped the academic ChatGPT-human distance difference from +0.494 to −0.012; removing Flesch reversed the academic differences because the score can fall below zero.

## Four studies, four kinds of evidence

The paper combines a structured narrative review with four linked exploratory studies, and it is explicit that no study validates another. Study 1 is a [[student-experience|reader-response]] comparison: 110 university students recruited by convenience sampling through their lecturers were randomly assigned, 55 per condition, to read one news passage and complete a questionnaire. Study 2 reuses the same news pair and adds matched academic and blog pairs plus four additional human reference texts, analyzing them in R with the same linguistic measures. Study 3 is computational: nineteen linguistic features feed a deviation score, two classical source classifiers and a pretrained transformer detector, plus a rewriting experiment with PEGASUS and T5. Study 4 works on a separate corpus of 60 cybersecurity passages, fifteen per source category, using standardized feature distances and sensitivity checks. The design treats authorship, linguistic form, preservation of meaning and reader response as distinct questions that cannot stand in for one another.

## Reader burden in Study 1

Both passages concerned the Kursk submarine disaster, and the authors situate reader burden in [[cognitive-offloading|cognitive-load theory]] rather than in sustained AI fatigue. The human-written text came from a BBC News article published on 12 August 2010; the AI-generated text was produced with ChatGPT under a single recorded prompt asking for a similar piece on the same topic with the same number of words. Participants were not told which source they had read. Of the 110 students, 102 (92.7%) reported reading the complete passage carefully; most read in under three minutes. The exploratory perceived reading-burden composite averaged six equally weighted items covering mental tiredness, anticipated fatigue from further reading, sustained effort, cognitive demand, heaviness and unnecessary length. Condition means were 3.203030303 for the AI passage and 2.054545455 for the human passage, reported as 3.20 (SD 1.19) and 2.05 (SD 1.13); internal consistency was high in both conditions. The observed mean difference of 1.15 carried an exploratory Welch interval of 0.71 to 1.59, which the authors describe as reflecting these two particular passages rather than a general effect of AI authorship. Excluding the eight participants who reported not reading carefully left the direction unchanged.

## Linguistic form and register

Study 2 showed that human-AI differences do not take the same shape in every kind of writing. Type-token ratio and MATTR favored the AI passage in all three pairs, but readability and sentence-length variance did not: in the academic pair the AI text scored lower on [[reading-education|Flesch Reading Ease]] (3.72 against 19.98), in the news pair it also scored lower (31.15 against 52.14), and in the blog pair it scored higher (70.93 against 62.33). Sentence-length variance separated the academic pair strongly and the blog pair modestly, while the news pair moved the other way. The wider human comparison set underscored how much ordinary variation exists within a register: across five human-written texts, Flesch scores ranged from 7.20 to 43.09.

Study 4 extended this with a 60-passage corpus built around five matched cybersecurity topics in each of three registers, comparing human text with passages from two model families. Feature differences changed direction by register. In academic writing, both models had lower Flesch scores than humans (8.41 for human text, −9.26 for ChatGPT, −14.38 for Claude) and higher Gunning Fog indices; in blogs the pattern reversed (22.36, 37.05 and 53.24). Distance to the human register centroids separated the groups at the aggregate level, but individual recovery was weak: only seven of fifteen human passages sat closest to their own register centroid, and AI passages recovered the academic register for none of five ChatGPT and one of five Claude texts. Sensitivity checks mattered. Dropping discourse-marker density changed the academic ChatGPT-human distance difference from +0.494 to −0.012 and the Claude-human difference from +0.377 to −0.096, and leaving out individual baseline passages pushed the small ChatGPT news difference across zero. The register-distance results therefore describe similarity under a chosen feature set rather than a validated measure of register quality.

## Classification, rewriting, and the limits of proxies

Within the evaluation corpus, the two [[machine-learning|machine-learning]] classifiers performed strongly: logistic regression achieved 0.9865 accuracy and 0.9968 ROC AUC, and the RBF-SVM 0.9915 and 0.9977, on a held-out 2000-document set drawn from the same aggregate corpus used for development. The RoBERTa detector reached 0.8315 accuracy with substantially lower AI recall. The authors treat this as evidence about [[ai-detection|source identification]] under specified conditions, not about suitability, and the diagnostic passage shows why: the three systems disagreed sharply on one real AI-generated academic text. The sentence-triage step flagged four of five AI-generated academic sentences and one of eight human-written sentences for possible revision at the working threshold. Rewriting then exposed the gap between a proxy and the thing it proxies. Max-divergence PEGASUS halved the heuristic score while retaining only 18.5% of source content words and emitting repeated, incoherent sequences; generic T5 produced the largest numerical drop with 64.1% retention; guarded PEGASUS kept 81.5% of content words but moved the score least. Study 4's assessment of the ratio-based score was blunt: because Flesch Reading Ease can cross zero, the component alone added +11.80 points to the academic ChatGPT-human difference and +13.36 to the Claude-human difference, and removing it reversed both academic differences. A lower linguistic score, the paper concludes, is not evidence that a text became easier or less burdensome to read.

## What this means for practice

- **Instructors.** Do not assume AI-authored feedback or explanations are easier to read because a source check identifies them as AI; in this study the AI passage was rated more effortful, and suitability has to be checked against the intended reader.
- **Assessment designers.** Treat detection accuracy as an authorship answer, not a quality signal — a detector can label a passage confidently while saying nothing about its clarity, accuracy or processing effort.
- **Instructional designers.** When specifying rewriting, make preservation of meaning the success criterion alongside any readability proxy; one rewrite here halved its score while losing most content words and turning incoherent.
- **Faculty developers.** Build prompt-refinement and editing practice rather than source-spotting: the two passages differed in more than authorship, and prompting competence was not varied or tested.
- **Researchers.** Test reader burden with multiple passages per condition, disciplines and models, and pair self-reported effort with comprehension and reading time.

## Limitations

- Study 1 used one human-written and one AI-generated passage; the difference describes two texts, not a general effect of AI authorship, and no comprehension measure was collected.
- The six-item composite is an exploratory aggregate rather than a validated scale; concentration difficulty and feeling drained were recorded separately, and internal consistency alone does not establish construct validity.
- Study 2 rests on three matched pairs, too few to characterize each register, and the additional human texts span different periods and purposes.
- Study 3's classical classifiers were evaluated on the same aggregate corpus used for development; the RoBERTa detector had different training conditions and possible overlap could not be ruled out.
- The ratio-based heuristic is sensitive to small reference values and zero baselines, and relies partly on manually specified word lists and counting rules.
- Study 4 uses five baseline passages and five topics per register from one institutional source family (NIST), with no significance tests; prompting was fixed, so generation procedure cannot be separated from source.

## Citation

Haguma, M. P., Ur Rehman, I., & Anwar, A. (2026). [Reader Burden and Linguistic Register in AI-Generated Text: Implications for Higher Education](https://doi.org/10.3390/educsci16111993). *Education Sciences, 16*(11), 1993.
