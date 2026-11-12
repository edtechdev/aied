---
title: "Artificial Intelligence for Supporting College Students with Attention-Deficit/Hyperactivity Disorder: Cognitive, Emotional, and Ethical Perspectives"
created: "2026-11-12T18:00:00-05:00"
updated: "2026-11-12T18:00:00-05:00"
type: article
sources: ['raw/papers/deep-adhd-ai-cognitive-emotional-ethical-2026.md']
source_url: "https://doi.org/10.46328/ijonses.5915"
source_depth: full text
confidence: high
evidence_context: educational
research_method: [literature review]
page_kind: [synthesis]
level: [higher ed]
audience: [instructors, administrators, researchers]
discipline: [learning sciences]
foundations: [cognitive-offloading, ai-literacy, learning-design]
pedagogy: [self-regulated-learning]
assessment: [assessment-validity]
technology: [generative-ai, intelligent-tutoring, learning-analytics]
ethics: [privacy, equity-in-ai-education, neurodiversity, assistive-technology]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Deep, Ghosh and Natoli (2026) synthesize a narrative review of 28 peer-reviewed studies on AI for neurodivergent college students with ADHD in [[higher-ed|higher education]], drawn from searches of PubMed, ERIC, SpringerLink, ScienceDirect, PsycINFO and IEEE Xplore. Their claim is jurisdictional rather than clinical: explainable models and biometric frameworks improve risk estimation, but they do not diagnose — they organize data that licensed professionals interpret. Generative and [[assistive-technology|assistive technologies]] such as ChatGPT, socially assistive robots and mobile applications are reported to support writing, [[self-regulated-learning|self-regulation]] and executive functioning, while adoption is limited by [[ai-literacy|AI literacy]] gaps and students' reluctance to disclose a diagnosis.

## A Support Gap Rather Than a Diagnostic One

ADHD is a persistent [[developmental-psychology|neurodevelopmental]] condition. Recent estimates put 15.5 million U.S. adults (6.0%) with ADHD, more than half diagnosed in adulthood (Staley et al., 2024); in college populations, 2% to 4% of students display symptoms (Weyandt & DuPaul, 2006). Students with ADHD were significantly more likely to be on academic probation (38.3% vs. 7%) and had lower GPAs (2.5 vs. 3.2) than peers (Wolf, 2001).

Before the 1970s ADHD was expected to resolve by puberty; longitudinal work showed 30% to 80% of hyperactive children continue to show symptoms into adolescence and up to 65% into adulthood (Stubbe, 2000). Provision lags: Irish universities recorded a 41% increase in ADHD disclosures between 2020 and 2023 while institutions remained largely unprepared (Doyle et al., 2024). In UK higher education, ADHD is often subsumed under Specific Learning Difference, which fuels stigma, underdiagnosis and inconsistent accommodations (Sedgwick-Müller et al., 2022).

The framing is [[neurodiversity|neurodiversity]]-affirmative: neurodivergent people's neurological functioning diverges from the dominant neurotype. The cognitive profile is uneven demand rather than low capacity. Sustained attention, working memory, task initiation and goal persistence are the friction points, sharpest in unstructured environments where students report mental fatigue and diminished confidence (Pagespetit et al., 2025), alongside elevated anxiety and the labor of appearing neurotypical.

## What the Tools Can and Cannot Do

Lee et al. (2025) used machine learning with SHAP explanations and found that features such as post-quiz review (CA reading) were more strongly linked to prediction errors for students with ADHD than for peers, so standard features miss strategies that work for them. Das and Khanna (2021) report an AUROC of 0.856 from pupillometric biomarkers during a visuospatial working memory task; Mikolas et al. (2022) reached accuracy of 66.1–68.8% with a support vector machine trained on clinical records, below clinical utility thresholds. Both screen; neither diagnoses, and the review's [[assessment-validity|validity]] caveat is that most models rest on single-university samples.

For writing, students used [[generative-ai|generative tools]] such as ChatGPT to summarize dense readings, break writer's block, organize ideas and improve clarity; they [[cognitive-offloading|offloaded]] summarizing and organizing to the tool, reporting reduced cognitive load and better focus, alongside concerns about misinformation and academic integrity (Zhao et al., 2025). Across eight studies, Fichten et al. (2022a) found students using Siri, Alexa, Grammarly and IFTTT for time management, distraction reduction and writing quality, yet adoption stayed low and few used apps recommended by disability services.

Intervention evidence comes from small pilots. In a three-week participatory design study at the University of Southern California, a robot named Blossom performed idle motions during study tasks, and 91% of participants continued using it into the second week; the robot acted as a "body double" (O'Connell et al., 2024). Lalwani et al. (2024) built Productivity CoachBot on a QTrobot, with Pomodoro timers and an engagement detector that prompted supportive dialogue or a mindfulness exercise; participants reported less procrastination. Wilder and Strachan (2025) paired the Big Interview platform with eye tracking: higher performers balanced attention between content and interviewer, lower performers fixated on content; cognitive flexibility predicted performance, and students reported reduced anxiety.

## Disclosure, Trust, and the Terms of Help

Pierrès et al. (2025) interviewed twenty higher education students with formal ADHD diagnoses in Zurich. Willingness to disclose was conditional on perceived utility: students preferred [[intelligent-tutoring|AI tutors]] to early warning systems because tutoring offered customized support and non-human interaction reduced stigma, and they disclosed more readily when a system helped them learn rather than labeled or monitored them.

They feared re-identification given the rarity of the condition, inaccurate flags, lecturers forming stereotypical assumptions, and unfair grading if disability data were visible; such data is sensitive under European Union law. Moving it into [[learning-analytics|predictive analytics]] is therefore a governance question, and students asked for control over what was shared, who could access it, and how interventions begin.

Jafarian and Kramer (2025) told students which audio content was AI-generated and might be inaccurate, and students trusted the material more when limits were stated; Lee et al. (2025) propose SHAP-based transparency so students can see which behaviors drive a prediction about them. Zhao et al. (2025) add the mundane barrier: subscription costs and text-heavy interfaces pushed some students, particularly those with dyslexia or visual impairments, away from tools that might have helped.

## Ethics, Equity, and the Cost of Getting It Wrong

Four risks organize the discussion. Surveillance first: Wilder and Strachan (2025) caution that platforms using eye tracking or speech analysis can create environments of surveillance and vulnerability unless informed consent and strict data protection are enforced. Bias second: small, unrepresentative datasets can bias outcomes (Das & Khanna, 2021), and bias can persist even when a model looks unbiased (Lee et al., 2025).

Equity third, treated as access rather than aspiration: students underuse tools because they lack awareness, institutions neither promote nor train on them, and subscription costs exclude some learners (Fichten et al., 2022a; Zhao et al., 2025). Inclusive [[learning-design|learning design]] is the remedy — interfaces that accommodate diverse needs, participatory development with neurodivergent students, and AI literacy training. Over-reliance fourth, framed less as dependence than misplaced confidence: students act on outputs that may be inaccurate, with integrity and misinformation as symptoms and no policy to arbitrate them.

The prescription is institutional: policy, training, and governance that protects sensitive data. Faculty are rarely trained for this, making [[teacher-ai-competency|teacher AI competency]] a precondition.

## Key Findings

1. The article is a narrative review of 28 peer-reviewed studies drawn from roughly 90 database records plus 10 other records, with 80 full texts assessed and a 2000–2025 search window.
2. Explainable AI revealed bias that accuracy metrics hid: post-quiz review (CA reading) was more strongly tied to prediction errors for students with ADHD than peers, so models misread effective strategies as poor performance (Lee et al., 2025).
3. Screening accuracy is bounded — AUROC 0.856 for a pupillometric model, 66.1–68.8% for a support vector machine on clinical records, below clinical utility thresholds — and none of these systems diagnoses.
4. Generative AI supported writing through summarizing, breaking writer's block, organizing ideas and improving clarity, reducing cognitive load while raising concerns about misinformation and academic integrity (Zhao et al., 2025).
5. Siri, Alexa, Grammarly and IFTTT supported time management, distraction reduction and writing across eight studies, but adoption stayed low and few used apps recommended by disability services (Fichten et al., 2022a).
6. Robotics showed high acceptability in small pilots: 91% of participants continued using the Blossom robot into the second week, and a QTrobot coach paired Pomodoro timers with eye-gaze engagement detection (O'Connell et al., 2024; Lalwani et al., 2024).
7. Among twenty interviewed students, willingness to disclose depended on perceived academic benefit; AI tutors were preferred to early warning systems because tutoring felt supportive and monitoring felt judgmental (Pierrès et al., 2025).

## What this means for practice

- **Instructors.** Teach AI literacy alongside subject content and state plainly which materials are AI-generated and where a tool may be wrong, since students reported more confidence when limits were disclosed.
- **Disability services and administrators.** Favor student-facing tutoring and organizational support over monitoring or early warning, and publish what data a system collects, who can see it, and what triggers an intervention.
- **Educational technology developers.** Build explanations into predictive features, and test them against the strategies ADHD students actually use; a model that reads post-quiz review as disengagement will misjudge the students it is meant to help.
- **Institutions.** Treat cost and awareness as accessibility issues: fund licenses or provide free alternatives, promote tools through disability services, and train staff.

## Limitations

- The review is a narrative synthesis with no reported protocol registration, no reported dual independent screening, and no meta-analysis; heterogeneity of designs is the stated reason, but no pooled effect estimate exists.
- It collects no primary data: every effectiveness claim rests on studies the authors describe as small-sample, qualitative or exploratory, and they ask that benefits be read as "promising rather than definitive."
- Several included studies are not college samples — the machine-learning classifier was trained on children and adolescents in a clinical help-seeking population, and the exercise study examined patients rather than students.
- The authors acknowledge that research is concentrated in North America and Europe, leaving open whether findings hold where digital infrastructure, institutional policy and cultural attitudes toward disclosure differ.
- The ethical analysis stops short of law and policy: institutional responsibility, consent protocols and algorithmic accountability are named as underexplored rather than analyzed.
- The search closed in July 2025 and excluded non-English and gray literature, a constraint where generative tools change faster than the publication cycle.

## Citation

Deep, P. D., Ghosh, N., & Natoli, A. P. (2026). Artificial intelligence for supporting college students with Attention-Deficit/Hyperactivity Disorder: Cognitive, emotional, and ethical perspectives. *International Journal on Social and Education Sciences (IJonSES)*, *8*(1), 1-17. https://doi.org/10.46328/ijonses.5915
