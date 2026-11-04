---
title: "Assessment of teacher performance and learner behavior using artificial intelligence in higher education: an integrative review of literature"
created: "2026-11-04T19:30:00-05:00"
updated: "2026-11-04T19:30:00-05:00"
type: article
sources: ['raw/papers/dino-ai-teacher-performance-learner-behavior-review-2026.md']
confidence: medium
page_kind: [synthesis]
research_method: [literature review]
discipline: [learning sciences]
level: [higher ed]
audience: [researchers, administrators, instructors]
technology: [machine-learning, educational-nlp]
assessment: [automated-assessment, assessment-validity]
pedagogy: [student-engagement]
methods: [meta-analysis-systematic-review]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** An integrative review of 21 studies, drawn from 367 records in Scopus, Web of Science and ERIC, maps how AI is used to assess teaching and learning in [[higher-ed|higher education]] between 2018 and 2026. Its organizing result is a split: 11 of the 21 studies assess teacher performance and only 4 assess learner behavior, with just 2 examining both at once. The authors report no pooled effect — they state explicitly that heterogeneity ruled out [[meta-analysis-systematic-review|meta-analysis]] — so the contribution is a descriptive and thematic map of a fragmented field rather than an estimate of how well AI judges teaching.

## What the review finds

1. All 21 included studies were empirical and were published between 2018 and 2026, with activity concentrated in 2025 (*n* = 7; 33.33%) and 2024 (*n* = 6; 28.57%).
2. Teacher performance was the most frequently assessed dimension (*n* = 11; 52.38%), followed by learner behavior (*n* = 4; 19.05%) and learner performance (*n* = 3; 14.29%). No study assessed teacher behavior as a standalone dimension.
3. Only 2 of the 21 studies (9.52%) assessed teacher performance and learner behavior concurrently, and 3 of 21 combined any two dimensions — learner behavior with teacher performance, learner behavior with learner performance, or learner performance with teacher behavior.
4. [[machine-learning|Machine learning]] (*n* = 6; 28.57%) and [[educational-nlp|natural language processing]] (*n* = 6; 28.57%) were the most common approaches. Computer vision and [[multimodal]] or [[speech-and-voice-technologies|speech recognition]] appeared in 3 studies each (14.29%), and 3 studies did not name a technology.
5. Data sources split along the assessment target: teacher-focused studies worked mainly from student-written feedback, survey responses and [[edtech-platform|learning management system]] records, while learner-focused studies drew on classroom video, activity logs and facial-expression analysis.
6. Four thematic domains organize the corpus: Evaluation (*n* = 8), Engagement (*n* = 6), Expression (*n* = 5) and Experience (*n* = 5). Three studies sit in two domains because their stated purposes spanned both.
7. Keyword network mapping produced eight clusters, but only one of them — Data-Driven Performance Assessment — spans teacher and learner targets together.

## How the review was assembled

The authors followed the five-stage integrative review framework of Whittemore and Knafl and reported identification and selection against PRISMA. Three databases supplied the records: Scopus (172), Web of Science (102) and ERIC through EBSCO (93), for 367 in total. Covidence removed 103 duplicates (4 manually, 99 automatically), leaving 264 records for title and abstract screening. Of those, 198 were excluded; 66 full texts were assessed, and 45 were excluded — 27 for the wrong study outcome, 13 for the wrong intervention, 3 for the wrong study characteristics, 1 for the wrong population and 1 because the full text was unavailable.

Eligibility was set with the PICo framework rather than PICO, and no comparator was required, which is what lets a corpus of single-group system descriptions and prediction studies into the same synthesis. Two reviewers screened independently and the principal investigator settled conflicts. Quality was appraised with the Mixed Methods Appraisal Tool, version 2018, reported criterion by criterion because MMAT guidance discourages a single summed score; no study was excluded on quality grounds. The keyword map came from VOSviewer 1.6.20, using 46 keywords, 141 links, full counting and a minimum occurrence threshold of one.

Two labeling details are worth recording. The journal's type line calls the paper a systematic review while the title and abstract call it an integrative review, and the protocol is registered on the Open Science Framework. The review was also corrected on 30 October 2026, with the note that the correction does not affect the scientific content.

## What the four themes actually claim

Under **Evaluation**, machine learning, NLP and large language model systems scored or predicted teacher performance from student-derived data, with high accuracy where a figure was reported. One study in this group, Zion et al. (2025), found that AI-generated scores aligned only moderately with student perceptions of teaching — a limit the authors return to in the discussion.

Under **Engagement**, AI tools sorted students by engagement level in online, on-site and hybrid settings. The review records a specific failure mode: an image-only approach was constrained by [[privacy]] requirements and by insufficient visual context, which the authors attribute to Spivakovskiy et al. (2025).

Under **Expression**, NLP and sentiment models classified written student feedback by sentiment, topic or rating, again with high accuracy where reported. One included study found that the models reproduced [[bias-mitigation|biases]] already present in student ratings (Rybinski and Kopciuszewska, 2021).

Under **Experience**, machine learning, deep learning and sensor-based tools captured observable classroom behavior, including in physical education settings.

These are the authors' summaries of what individual included studies reported. They are not pooled quantities, and the review does not convert them into a shared metric.

## Why there is no pooled estimate

The review contains no meta-analysis, and the authors say so directly: the included studies were too heterogeneous in method and outcome to combine. Every number in the paper is therefore either a count of studies or a percentage of the 21-study corpus, or a result attributed to a named source article.

That matters for how the paper should be read. Statements such as "performance was high where quantified" describe a pattern across studies that each used their own model, dataset and accuracy definition. The authors themselves flag that the evidence rested largely on student-derived ratings and on small or single-context studies, and they call the findings indicative rather than conclusive. The discussion also separates patterns found in the 21 studies from external references used only as context — a distinction worth preserving, because several of the more striking figures quoted in that discussion come from outside the review corpus.

## Quality and coverage

The design mix was 10 quantitative non-randomized studies, 5 [[mixed-methods-research|mixed methods]], 4 quantitative descriptive and 2 [[qualitative-research|qualitative]]. No [[rct|randomized controlled trial]] was included. Of 105 criterion-level MMAT judgments, 89 were rated Yes, 8 No and 8 Can't Tell; 13 studies met all five criteria and 16 met at least four. All qualitative and mixed-methods studies met every applicable criterion.

Weakness concentrated in sampling. Among non-randomized studies, all 10 met the outcome-measurement and outcome-completeness criteria, but only 6 were rated Yes on participant representativeness and 7 on confounder control. Descriptive studies were the weakest group, with 1 of 4 rated Yes on low nonresponse bias and 2 of 4 on sample representativeness. Most Can't Tell ratings fell on sampling items, which the authors read as incomplete reporting rather than demonstrated design failure. The three lowest-rated studies met two of five criteria.

Coverage is uneven in ways that constrain the map. The Western Pacific Region supplied 8 studies (38.10%), Europe 5 (23.81%) and South-East Asia 4 (19.05%), while the Americas and the Eastern Mediterranean supplied 2 each and no study came from the African Region. On-site delivery was the most common mode (7 studies; 33.33%), followed by online synchronous (5; 23.81%). Seven of the 21 studies had 100 or fewer participants.

## What this means for practice

- **Institutions.** Treat vendor and pilot accuracy claims as single-context results. The review found no pooled evidence that [[automated-assessment|AI assessment]] generalizes, and 7 of 21 studies drew on 100 or fewer participants.
- **Quality-assurance offices.** Do not substitute algorithmic scores for student evaluations of teaching. The one included study that compared the two found only moderate alignment, and another found sentiment models reproducing the biases already in rating data.
- **Researchers.** The open question is the paired one: only 2 of 21 studies measured teacher performance and learner behavior together. A design that captures both, with synchronized data, addresses the gap the review identifies rather than adding another single-target study.
- **Tool builders.** Text-based approaches dominated because the data already exists in [[feedback|feedback]] forms and LMS logs; [[learning-analytics|learning analytics]] infrastructure makes them cheaper to deploy than video or sensor pipelines. The review's account of image-only engagement detection suggests the cheaper route is also the more privacy-defensible one.

## Limitations

- The search covered only Scopus, Web of Science and ERIC, omitting IEEE Xplore and the ACM Digital Library, which likely underrepresents [[cs-education|computer science]] work on system design and technical implementation.
- Only peer-reviewed English-language journal articles were eligible, so conference proceedings, dissertations and technical reports were excluded — a publication and language bias that may cut off the newest technical work.
- The evidence base is 21 studies, and no meta-analysis was possible because of methodological and outcome heterogeneity, so the synthesis carries no pooled estimate and limited generalizability.
- Inter-rater agreement was not calculated, the keyword map used a minimum occurrence of one and is exploratory, and MMAT is not designed for algorithm-development studies, so the quality ratings should be read cautiously.
- [[educational-measurement|Measurement]] practice varied across studies — different models, datasets and accuracy definitions — and nearly one-third of studies had 100 or fewer participants, with sample units ranging from individuals to reviews and comments.
- Geographic representation is uneven, with the largest share from the Western Pacific and none from the African Region, which limits claims about institutional applicability elsewhere.

## Citation

Dino, M. J., Bahaynon, P. S., Beniopa, J., Villaluz, M. F., Maravillas, S. M., Cruz, L. E., Zou, J., Lanuza, E., Maroma, P., & Shattell, M. (2026). [Assessment of teacher performance and learner behavior using artificial intelligence in higher education: an integrative review of literature](https://doi.org/10.3389/feduc.2026.1949516). *Frontiers in Education, 11*, 1949516.
