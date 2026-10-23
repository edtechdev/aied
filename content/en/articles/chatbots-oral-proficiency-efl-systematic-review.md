---
title: "Chatbots for oral proficiency in English language learning: A systematic review"
created: "2026-10-23T09:12:33-04:00"
updated: "2026-10-23T09:12:33-04:00"
type: article
sources: ['raw/papers/10.1016_j.teler.2026.100346.md']
confidence: medium
research_method: [literature review]
methods: [qualitative-research]
discipline: [language learning]
level: [higher ed, k 12]
audience: [instructors, researchers, curriculum designers]
technology: [conversational-ai, speech-and-voice-technologies]
pedagogy: [motivation, anxiety-and-stress, scaffolding]
assessment: [feedback]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-23"
    agent: hermes-agent
---

> **Synthesis:** Soriano-Gonzalez and Belda-Medina (2026) screened 306 records down to ten empirical studies, published between 2021 and 2024, that tested speech-based or multimodal chatbots on English speaking, and then asked which of the six CEFR qualitative features of spoken language actually moved. The answer is a map of what has been measured rather than a clean verdict: range and intelligibility improved in four studies each, accuracy in three, fluency in four with results that split by proficiency and by study, coherence in exactly one, and interaction in barely any. Four of the ten graded speaking holistically, so the feature-level gains they claim cannot be traced to a feature at all. The single most consequential observation is that the strongest apparent interaction result — 327 interactional-strategy instances against a control group's 189 — came from adding mind maps to the chatbot conversation, not from the chatbot, and three studies recommended a [[scaffolding|structured task layer]] for exactly that reason.

## Key Findings
1. **Ten studies met inclusion criteria out of 306 records,** and their treatment periods ran from 3 to 14 weeks, most of them much shorter than the oral-fluency gains they were asked to demonstrate.
2. **Range and intelligibility are the best-supported gains,** each reported in four of the ten studies, with accuracy in three and fluency in four, which is why the review's authors call the overall result preliminary rather than established.
3. **Accuracy improved only with chatbots built specifically for language learning,** such as Andy English bot and Xiaoying; no study using a general-purpose chatbot reported an accuracy gain, so the headline accuracy result is confounded with design rather than with conversation.
4. **One pronunciation result cannot be attributed to the chatbot at all:** Fathi et al. found significant pronunciation gains in both the experimental and the control group, which points to extended practice rather than to human-chatbot interaction.
5. **The best interaction evidence comes from scaffolding.** Mind-map-guided students produced 327 interactional-strategy instances against the control group's 189, and Yang et al. counted more conversational turns in human-chatbot than human-human conditions — longer exchanges that the reviewers note do not demonstrate interactional competence.
6. **Perceptions and performance diverge.** In Çakmak's study, students scored significantly higher speaking with Replika than with peers yet reported predominantly negative impressions, anxiety and awkwardness, and low willingness to use it again.

## What the corpus actually contains

The ten included studies are quasi-experimental or experimental, drawn from Scopus, ERIC and Web of Science, and appraised with the Mixed Methods Appraisal Tool; the reviewers report that most met key quality criteria but varied in reporting clarity and in how well qualitative and quantitative findings were integrated. The search was framed as a ten-year window, yet only studies from 2021 onward survived screening, because earlier systems were text-based and could not speak.

The participants are mostly university students, with one study on high school students, one on elementary students and one spanning both, so the corpus says far more about [[higher-ed|adult learners]] than about [[k-12|school-age]] ones. Proficiency is beginner and intermediate, three studies did not specify it, and none targeted C1 or C2 learners at all — a gap the authors name explicitly. Chatbot choice is narrow: Andy and Replika each appear in three studies, everything else in one, and most of the systems are closed-source commercial products under freemium or subscription tiers, which raises sustainability and equity questions a reviewer cannot settle from published results.

## Where the gains are real and where the design explains them

The feature-level results are best read as three tiers of evidence. The strongest is range, where Fathi et al. found a significant experimental-control difference and three other studies reported self-perceived vocabulary growth or wider structure use after mind-map guidance. Pronunciation sits in a weaker tier: four studies mention intelligibility, but two of those are self-reported, one measured stress and intonation without isolating them, and Fathi et al.'s control group improved too.

Accuracy is the most interesting tier because it is conditional. All three studies reporting accuracy gains used chatbots designed for language learning, and Ye et al.'s figures show the pattern inside a single study — a 14% error decrease in the control group against 38% in the experimental group after interacting with Xiaoying. The reviewers are careful about what this licenses: it remains unclear whether the gains come from pedagogical affordances built into those bots or from other contextual factors, and whether a general-purpose [[conversational-ai|conversational model]] would produce them.

Fluency splits by proficiency rather than by tool. Kim et al. found improvement for intermediate students and none for beginners; Fathi et al. found fluency developed for intermediate learners; Duong and Suppasetseree reported improvement for A2 learners; Wang et al. found no significant differences between groups despite using EAP Talk for fluency, intonation and pronunciation feedback. Four of the ten studies sidestep this entirely by grading speaking holistically, which the reviewers flag as the reason feature-specific conclusions cannot be drawn from them.

## Affective gains are the most consistent result

Motivation, reduced foreign language [[anxiety-and-stress|anxiety]] and greater willingness to communicate recur across ages and models, from elementary children to university students, and students specifically valued the human-like voice of CoolE bot and Andy English bot and the low-pressure environment the tools created. Automated [[feedback]] was appreciated when it existed, though motivation rose with or without it, and one study's participants found 10 to 15 minute sessions too short to practice what they were learning.

The counterexample matters more than the average. In Çakmak's study the chatbot produced better measured speaking than a human partner and still left students reluctant to return to it, some describing anxiety when the agent resembled a real examiner too closely. That is a design finding: the affective benefit of a chatbot is not automatic, and a system built to imitate an interlocutor can reproduce the pressure of one. The reviewers also note that ASR failures on accented speech and non-English names — the Andy bot not understanding Vietnamese names, one frustrated participant in Kim et al. — undercut both authenticity and the willingness to keep talking.

## What this means for practice

- **Instructors.** Treat chatbot speaking practice as a low-pressure rehearsal space, not as assessment of interactional competence: the gains documented here are in range and intelligibility, and the interaction numbers improve when a structured task is layered on top.
- **Curriculum designers.** Choose a chatbot built for language learning if accuracy is the target, since no general-purpose system in this corpus produced an accuracy gain, and check its ASR against your students' actual names and accents before adopting it.
- **Researchers.** Report feature-level outcomes instead of holistic scores, state participant proficiency, and include advanced learners; four of these ten studies cannot contribute to a feature-level synthesis because they reported a single speaking score.

## Limitations

- Ten studies is a small corpus, and the authors present the synthesis as indicative rather than comprehensive.
- The studies differ in chatbot type, task type, treatment duration and proficiency band, which restricts both comparability and generalization.
- Most samples are small and interventions lasted 3 to 14 weeks, too short to capture durable change in spoken proficiency.
- The corpus reports mainly positive results, and the authors flag possible publication bias and selective reporting.
- The review is a qualitative, interpretive synthesis with no meta-analysis, which the authors attribute to the inconsistency of the underlying studies.
- Two reporting inconsistencies are visible in the paper itself: the abstract lists two databases where the method names three, and one chatbot appears as both "Xiaoying" and "Xiaoyang."

## Citation

Soriano-Gonzalez, L., & J. Belda-Medina (2026). [*Chatbots for oral proficiency in English language learning: A systematic review*](https://doi.org/10.1016/j.teler.2026.100346). Telematics and Informatics Reports, 23, 100346.
