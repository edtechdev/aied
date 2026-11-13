---
title: "Artificial intelligence in embodied learning: A systematic literature review"
created: "2026-11-02T12:39:28-05:00"
updated: "2026-11-04T16:51:25-05:00"
type: article
pedagogy: [embodied-learning]
technology: [multimodal, learning-analytics, machine-learning]
methods: [meta-analysis-systematic-review]
research_method: [literature review]
discipline: [learning sciences]
level: [primary education, higher ed]
audience: [researchers, learning analytics designers, educational technology developers]
page_kind: [synthesis]
published: "2026-10"
sources: ['raw/papers/kim-ai-embodied-learning-review-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-02"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Kim and Han (2026) review 23 studies published since 2016 that pair AI with [[embodied-learning]], defined here as learning in which the physical activity is tied to the concept being learned, and they find that AI in this literature is mostly an observer rather than a participant. Across 40 coded role tags, analysis and evaluation took 40.0% and recognition and detection 22.5%, while feedback and coaching took 15.0%, interaction 12.5% and content creation 7.5%: sensing roles 62.5% against participatory roles 35.0%. [[machine-learning|Deep learning]] supplied 48.3% of the 29 algorithm tags and image data 27.3% of the 33 modality tags, with 8 of the 23 papers using [[multimodal]] data. A quality-sensitive recount that drops the three Low-rated and four unappraised papers leaves 16 studies and moves little that matters: deep learning stays first and cognitive outcomes stay first, but interaction falls from 12.5% to 6.7% and content creation from 7.5% to 3.3%, so the evidence that AI works inside the embodied loop rather than after it rests disproportionately on the weakest papers. Their sharpest observation is conceptual rather than statistical: most multimodal studies collect streams in parallel without integrating them, and no reviewed system fused them to interpret the learner's state during use. The review reads AI in embodied learning as [[learning-analytics|learning analytics]] applied to the body, and shows what that framing costs.

## Key Findings

- **The search and what survived it:** 431 records from ACM Digital Library (378), Web of Science (35) and ERIC (23) after 5 duplicates were removed, searched 16 September 2025; 229 excluded on literature type and 145 on title and abstract, leaving 57; backward and forward snowballing added 35 more; of the 69 full texts read, 46 were excluded, leaving 23. Title and abstract screening reached κ = 0.887 between two independent raters.
- **Algorithms:** 29 tags — deep learning 48.3%, machine learning excluding deep learning 24.1%, other AI 27.6%.
- **Data modalities:** 33 tags — image 27.3%, text 24.2%, sensor 24.2%, motion 21.2%, audio 3.0%. At paper level, 8 of 23 used more than one modality (34.8%).
- **AI roles:** 40 tags — analysis and evaluation 40.0%, recognition and detection 22.5%, feedback and coaching 15.0%, interaction 12.5%, content creation 7.5%, learning about AI itself 2.5%.
- **Learner outcomes:** 32 tags — cognitive 43.8%, affective 34.4%, psychomotor 21.9%. Psychomotor outcomes were the least reported even though every reviewed intervention was bodily.
- **Police the weak papers and the picture mostly holds:** excluding three Low-rated and four unappraisable papers leaves 16 studies; deep learning stays first (45.5% of 22 tags), multimodal use barely moves (5 of 16, 31.3%), and outcome ranks do not change, no category shifting by more than 2.4 percentage points.
- **…except where it does not:** interaction drops to 6.7% (two tags) and content creation to 3.3% (one tag), while recognition and detection rises to 26.7% and feedback and coaching to 20.0%. Image data falls from first to fourth (19.0%) and motion data becomes the most frequent modality (28.6%).
- **Where modalities meet:** the dense cell in the heatmap is sensor data feeding analysis and evaluation (five tags), followed by multimodal data feeding analysis and evaluation and recognition and detection (four tags each). Audio and text used alone connect weakly to every role.
- **No paper closed the loop:** most multimodal studies collected streams in parallel; one aligned facial affect, [[sensor-and-gaze-analytics|gaze]] and face detection on a shared timeline after the fact; the closest to fusion combined wristband engagement and stress with skeletal fatigue into joint states modeled by a Markov process, and that analysis was carried out after the sessions rather than informing the feedback learners received.

## Study Design & Method

- **Type:** a PRISMA 2020 systematic [[meta-analysis-systematic-review|literature review]] with no meta-analysis, protocol registered with the Open Science Framework on 15 September 2025.
- **Scope:** papers from 2016 onward, in English, peer-reviewed, in education, naming an AI technique and addressing physical activity tied to the concept to be learned. Excluded: skill-drill work in physical education or music, and speaking-only foreign-language activities.
- **Coding:** five extraction categories — algorithm or model, data modality, AI role, learner outcomes, limitations and solutions — with categories set through a five-paper pilot and a shared codebook, then two independent extractions reconciled by discussion.
- **Quality:** MMAT 2018, since the set mixed [[qualitative-research|qualitative]], [[quantitative-research|quantitative]] and mixed designs; two raters, consensus on disagreement.
- **Synthesis:** frequency counts, plus heatmaps of modality against role and role against outcome, a Sankey diagram across all three, and a full recount with the weak papers removed.

## The gap between collecting and integrating

The review's most transferable finding is about a word it uses carefully. Multimodal appears in 34.8% of the papers, but using several data streams is not the same as combining them, and the authors sort the studies into three levels: streams gathered in parallel, streams aligned to a common timeline, and streams fused inside a model that estimates the learner's state. Most sit at the first level, pairing image with text or motion with text without ever joining them. One study lines facial affect, gaze and face detection up on a shared timeline, which lets a shift in gaze be read beside a concurrent expression, though both streams came from the same image input. The closest approach to fusion models transitions between joint states built from wristband and skeletal signals — and ran offline, after the teaching was over.

That distinction has consequences beyond method. It means the AI described in most of these papers reads the body to grade it, not to respond to it, and the [[teacher-role|teacher]], not the learner, is usually the audience for the analysis. The role counts make the same point from another angle: the sensing roles automate appraisal of movement, trajectory or artifact, work that previously fell to a teacher, so a reduction in teacher workload is not evidence of a change in learner load. The authors are explicit that role frequencies cannot settle whether a system offloads cognition or augments it, because coding records the function performed and says nothing about its effect on the learner.

## Collaboration, and who the AI works with

Affective outcomes include social behavior such as interaction and cooperation, and they were the second most reported domain at 34.4%, which might read as evidence that AI supports learners working together. The authors show it does not. Learners did work in pairs and teams in several studies, but in the clearest case the robot tutor picked its moves from each student's own curiosity measure, one learner at a time. Where collaboration sits at the center of the design, it is cooperation between teacher and AI: an [[intelligent-tutoring|AI tutor]] scoring daily practice videos against the teacher's demonstration while the teacher comments on one submission per chapter, or a system providing [[ai-feedback-quality|automated feedback]] while the teacher decides when to raise difficulty. Both of those studies were appraised High. Support for learners acting together — joint embodied activity, group-level feedback, co-regulation between peers — is named as a direction and not reported as a result.

## Learner outcomes, and the psychomotor puzzle

Every intervention involves bodies: dance, folding, crafting, welding, handwriting. Yet cognitive outcomes took 43.8% of the 32 outcome tags and psychomotor outcomes 21.9%, the smallest share, and the ordering held among the 16 higher-rated papers (24.0% of 25 tags). The authors decline to read this as a weak effect on bodily skill. They point instead to the difficulty of selecting suitable psychomotor measures, a tendency to prioritize cognitive gains when evaluating instruction, and their own eligibility rules, which excluded sport and music papers that emphasized skill acquisition alone. The honest state of the evidence is that the bodily outcome most central to the [[pedagogy]] is the one the field measures least.

## What this means for practice

- **Learning analytics and [[educational-technology-developers|edtech designers]].** Ship the integration level you claim. Streams collected in parallel are a dashboard; streams fused into a learner-state estimate are a tutor. The review finds almost nothing in the second category during use, so a system that aligns gaze, posture and speech on one timeline and lets a teacher compare them is already ahead of the published field.
- **Developers aiming at collaboration.** Individual adaptation is the default and it does not become collaborative adaptation by putting students in pairs. Group-level summaries or rotating small-group monitoring are proposals here, not findings, and should be evaluated as such.
- **Teachers adopting an embodied system.** Two constraints dominate: the resources and expertise a system demands, and the difficulty of attending to twenty or more moving learners at once. Reviewed practice suggests matching toolkits to available kit, and fixing in advance who interprets what — routine scoring to the system, judgments about difficulty and next steps to the teacher.
- **Anyone who leaves an AI in the loop unsupervised.** In an embodied task the learner is committed to bodily performance and has fewer resources left to notice a bad suggestion, reinterpret it and resume. One reviewed study of a generative tutor used with children needed a researcher able to rephrase or reset the conversation. The safeguards the authors draw out — named reviewer of model output, constrained prompts, fallback responses, logs, an interrupt, and evidence of how learners recover from an error — are cheap to specify and were mostly absent.

## Limitations

- No meta-analysis, so there are no pooled effect sizes; everything reported here describes how often something was coded, not how well it worked.
- Gray literature was excluded, which risks publication bias.
- Only ERIC, ACM Digital Library and Web of Science Core Collection were searched; Scopus, PsycINFO and Education Source were not, and 12 of the 23 included papers came from ACM, 8 of them at [[human-ai-collaboration|human-computer interaction]] venues, so the set leans toward computing research.
- Coding multiple data points per paper makes proportions sensitive to how a study was tagged; the authors handle this by recounting without the weak papers, which stabilizes some patterns and dissolves others.
- Several reviewed studies reported small samples as their only limitation, and most ran in controlled settings or on simplified tasks, so classroom-scale claims rest on little.

## Citation

Kim, J., & Han, S. (2026). [*Artificial intelligence in embodied learning: A systematic literature review*](https://doi.org/10.1002/jcal.70359). *Journal of Computer Assisted Learning*, 42(6), e70359.
