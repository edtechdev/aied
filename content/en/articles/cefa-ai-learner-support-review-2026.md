---
title: "Who is AI supporting? A systematic review of AI-enabled learner support in higher education"
created: "2026-11-07T10:06:57-05:00"
updated: "2026-11-07T14:15:00-05:00"
published: "2026"
type: article
page_kind: [synthesis]
research_method: [literature review]
audience: [instructors, researchers, administrators]
level: [higher ed]
sources: ['raw/papers/cefa-ai-learner-support-review-2026.md']
source_url: "https://doi.org/10.24059/olj.v30iSI2.5641"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-07"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [human-ai-collaboration]
pedagogy: [student-support-and-success, online-teaching-and-learning, help-seeking]
technology: [conversational-ai, learning-analytics, recommender-systems-and-learning-paths, student-modeling, adaptive-learning]
methods: [meta-analysis-systematic-review]
ethics: [equity-in-ai-education, privacy, neurodiversity]
---

> **Synthesis:** Cefa, Zawacki-Richter, and Macgilchrist (2026) review 61 publications from 2010 to 2025 on AI-enabled learner support in higher education, and ask not whether the tools work in general but whom they are built to serve. Coding each intervention against the Inclusive Support for [[student-support-and-success|Student Persistence]] Model and a four-part AI typology, they find that [[adaptive-learning|adaptive systems]] and personalization (41 uses) and profiling and prediction (30 uses) dominate, that chatbots and [[recommender-systems-and-learning-paths|recommender systems]] cluster at intake and at the first line of administrative queries, and that no reviewed intervention addressed the learner transition phase. Their sharpest finding is an absence: only two studies named any student subgroup, so the "learner" in most systems is a statistical average. The review documents what has been built, and shows that [[equity-in-ai-education|equity]] was neither designed for nor measured.

## Key Findings

1. **A 61-study corpus with no time limit.** The final search, run on June 12, 2025 in Education Source, Scopus, and Web of Science and repeated on July 9 after adding "predictive," identified 1,449 records; screening, including 39 duplicates merged by Rayyan, left 61 studies published between 2010 and 2025 for this [[meta-analysis-systematic-review|systematic review]].
2. **Two application types carry the field.** Adaptive systems and personalization accounted for 41 uses and profiling and prediction for 30, against one use each for [[intelligent-tutoring|intelligent tutoring systems]] and assessment and evaluation.
3. **Support and measurement absorb the activity.** AI use concentrated in the ongoing learner support phase, followed by measurement, intake, and intervention; no AI-driven intervention appeared in the learner transition phase.
4. **Chatbots front-load the contact.** Within adaptive systems, chatbots appeared 7 times at intake, 11 during intervention, and 8 in ongoing support, followed by recommender systems with 8 uses across the same three phases.
5. **Benefits concern reach and tailoring.** 55 studies reported positive experiences, and tailored support was the most cited benefit (24), ahead of early intervention (14) and a quick or effective solution (14).
6. **Diversity is nearly absent.** Only two of the 61 studies explicitly referenced a [[differential-effects-across-learner-groups|student subgroup]], and only one proposed a support model centered on a disadvantaged student group.
7. **Accuracy depends on the task, not the model label.** ChatGPT-3.5 matched 95.48% of previously unanswered learner questions when given FAQs and their answers, but only 54.24% when asked to generate full responses from the same corpus, while Copilot answered 64.97% correctly from the open web.

## What the 61 studies cover

The corpus is more technical than pedagogical and more campus-based than the open, distance, and digital education framing implies. By OECD field, Natural Sciences supplied 29 studies, 27 of them in Computer and Information Sciences, against 15 in Social Sciences, 10 of those in Educational Sciences, 9 in Engineering and Technology, 1 each in Medical and Health Sciences and Humanities and Arts, 5 in other fields, and 2 that could not be traced to a discipline. Twenty studies were coded as technical or algorithm-focused, 38 as intervention or educational, and 3 spanned both. Conventional campus-based institutions hosted 41 studies (67.2%), open and distance institutions 13 (21.3%), and dual-mode universities 3 (4.9%), with 4 (6.6%) unidentified. Students were the primary population in 55 studies, faculty in 7, administrative staff in 5. Two rounds of blind title and abstract screening reached a Cohen's kappa of 0.80; full-text screening reached 0.70 in the first round and 1.00 in the second. This is a well-executed map of a field that has grown steeply since 2010 and especially in the three years before the search.

## Chatbots and recommenders at the front door

The learner intake phase is where the reviewed systems meet students first, and [[conversational-ai|chatbots]] do most of that work: homepage support in 3 studies, admissions and registration in 2, financial aid information in 1. Sereni (2024) turned campus orientation into a scripted chatbot tour and a "Fantastic Race" app that more than 600 students had used since its Semester 2, 2023 launch. Prasertsri et al. (2024) put a Dialogflow bot behind a LINE account in Thailand to absorb repeated questions, and Abdul et al. (2024) trained a bot on a JSON dataset to 80% accuracy. [[recommender-systems-and-learning-paths|Recommender systems]] handled program choice, as in Acang et al. (2023), and course scheduling that incorporated peer networks (Channarukul et al., 2017). During intervention and ongoing support, bots shift to help-desk and advising duty. Öncü and Süral (2024) found users of Anadolu University's rule-based assistant rated usability, information quality, and design positively but wanted academic support it could not give. Öncü et al. (2025) then showed why architecture matters: a generative model could match intents well but fabricate weaker answers, and the authors recommended a vetted rule-based layer, generative intent recognition, and escalation to a person. Three studies addressed mental [[well-being|well-being]], and three used bots for academic advising.

## Prediction, early warning, and the pull toward measurement

Profiling and prediction is the second engine of the field, and its center of gravity is measurement rather than support. Dropout and retention alone accounted for 11 measurement-phase uses against 2 in ongoing support and 1 at intake. The strongest design in this cluster is Herodotou et al. (2020), who used [[learning-analytics|predictive analytics]] in a randomized trial to target motivational outreach and improved retention by directing effort to students likely to benefit. Villano et al. (2018) found inactivity the strongest predictor of withdrawal and early alerts most accurate in the first year, while Rodríguez et al. (2022) reported that nudges raised persistence among at-risk first-year students, and Khan et al. (2025) described five Saudi universities running retention interventions off a predictive platform. The constraints are equally consistent: models mislabel risk when success depends on engagement in only some activities (Honson et al., 2024), lose transferability as data are renewed (Gray and Perkins, 2019), and invite speculative conclusions from dashboards that show only snapshots (Chong et al., 2020). A prediction that never reaches an advisor is measurement, not [[student-support-and-success|support]].

## Who the systems do not see

The review's third question produces its most consequential result, and it is a result about silence. Across 61 studies, AI applications approached "the learner" as a uniform category. Only two studies explicitly referenced subgroups: Candrlić et al. (2025) and Nurshatayeva et al. (2021), and only Candrlić et al. proposed a model centered on a disadvantaged group, a process model for academic accommodations built on the UN Convention on the Rights of Persons with Disabilities. Nurshatayeva et al. evaluated a financial-aid chatbot at East Carolina University and found average use did not differ by first-generation status, but the most intensive engagement came from [[differential-effects-across-learner-groups|first-generation students]], who gained about 8 percentage points in loan uptake and roughly 3 points in enrollment and course registration, against a 4% overall rise in loan acceptance. Beyond these cases, [[neurodiversity|neurodivergent]] learners and minority ethnic, linguistic, and low-income students were absent. The authors do not claim that AI support caused inequity; they show that the corpus provides almost no evidence either way, and they pair that absence with the [[privacy|marginal privacy]] problem, where granular data collected to personalize support can also make sensitive traits inferable, while behavior-only nudging places responsibility for success on the individual. No reviewed study co-designed with heterogeneous groups.

## What this means for practice

- **Instructors and advisors: define the escalation path before the bot goes live.** The evidence supports chatbots for templated administrative questions, not for academic judgment. Anadolu users asked for academic help their rule-based assistant could not provide, so route those questions to a named human channel and tell students where it is.
- **Administrators: fund the human tier as part of the AI service, not as a fallback.** 23 studies reported constraints, with reduced human interaction among them, and multiple authors recommend AI as a [[human-in-the-loop-ai|complement]]. A support model that counts only bot resolution rates will look successful while displacing the relationship students actually need.
- **Support service designers: instrument who is reached.** Only 2 of 61 studies named a subgroup, so add first-generation status, disability status, and language background to routine evaluation, and check whether uptake and benefit differ across them rather than reporting an average.
- **Researchers: the empty cells are the agenda.** The learner transition phase had no AI intervention, and intelligent tutoring and assessment each had one use. A study of transition support, or of a subgroup the corpus ignores, would add more than another chatbot evaluation.

## Limitations

- **English-only and three databases.** Education Source, Scopus, and Web of Science were searched in English, so research from non-English-speaking countries with strong open and distance traditions is likely underrepresented, particularly where learner support is handled as a regional administrative matter.
- **Peer-reviewed articles only.** Books, dissertations, reports, and commentary were excluded, which likely filters out non-significant, exploratory, and critical findings and biases the corpus toward published successes.
- **No formal quality appraisal.** The authors excluded studies without a clearly described methodology at full-text screening but did not rate the remaining studies, so a positive finding and a weak design can carry equal weight in the synthesis.
- **Thin cells for two application types.** Intelligent tutoring systems and assessment and evaluation appear once each, so conclusions about those categories rest on single studies rather than on a body of evidence.
- **Subgroup absence cannot be read as harm or as safety.** The review establishes that diversity was rarely studied, not that AI support widens gaps; it also found consent statements in only six studies (27.3%), so what institutions do with support data is largely undocumented.

## Citation

Cefa, B., Zawacki-Richter, O., & Macgilchrist, F. (2026). [*Who is AI supporting? A systematic review of AI-enabled learner support in higher education*](https://doi.org/10.24059/olj.v30iSI2.5641). *Online Learning*, 30(SI2), e5641.
