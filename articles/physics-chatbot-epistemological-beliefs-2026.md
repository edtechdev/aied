---
title: "Students' Epistemological Beliefs and their Chatbot Preferences in AI-mediated Physics Learning"
created: "2026-08-13T09:28:20-04:00"
updated: "2026-08-24T10:15:00-04:00"
type: article
tags: [physics-education, conversational-ai, socratic-method, ai-literacy, higher-ed, student-experience, generative-ai, stem-education, science-education]
research_method: [survey]
discipline: [physics education, stem education]
audience: [student experience]
level: [higher ed]
sources: ['raw/papers/2607.29385.md']
confidence: high
---

> **Synthesis:** Sirnoorkar & Mamidpalliwar (2026) investigate the association between introductory physics students' preferences for chatbot behavior and their epistemological beliefs, using a custom online waves module with simulations integrated with a chatbot. Preferences were captured through three options (guided-inquiry, direct answer, and a combination); beliefs via the EBAPS survey. Students who preferred chatbots that initially engage in guided-inquiry but provide answers when explicitly sought ('Combination') demonstrated more sophisticated epistemological beliefs than those preferring answer-providing chatbots, though no association was found between EBAPS total scores for guided-inquiry vs answer-oriented preferences, and differences did not survive Bonferroni adjustment. The work connects to [[physics-education]], [[pedagogical-agent]], and [[socratic-method]] research.

## Key Findings

1. 52% of students preferred a 'Combination' chatbot (guided-inquiry first, direct answers if stuck), 39.6% preferred 'Direct Answers', and only 7.6% chose pure 'Guided Q&A'.
2. At the nominal significance level (α = 0.05), students preferring the Combination chatbot scored significantly higher on the total EBAPS survey (p = 0.029) and on Axis 4 (evolving knowledge, p = 0.038) and Axis 5 (source of learning ability, p = 0.021) than those preferring answer-providing chatbots.
3. No association was found between EBAPS total scores among students who preferred guided-inquiry versus answer-oriented chatbots, and no significant differences emerged on EBAPS Axes 1–3.
4. None of these differences remained statistically significant after a Bonferroni-adjusted significance level (α = 0.0083 across six omnibus tests), so the observed patterns are suggestive rather than conclusive.

## Introduction

Investigating how students acquire knowledge has long been a central concern of physics education research, largely examined through [[metacognition|epistemology]] — the study of the nature, methods, and justification of knowledge. Epistemological beliefs, which correspond to individuals' beliefs about knowledge (e.g., its origin or methods of acquisition), are known to influence [[problem-based-learning|problem-solving]], [[metacognition]], [[motivation|academic achievement]], and career choices. Generative AI has introduced powerful tools that can instantaneously generate and process information, including coursework-related content, and recent models can solve typical introductory physics assessments and concept inventories. Although this convenience is appealing, it may also reduce students' engagement in essential cognitive processes such as modeling, argumentation, and sensemaking — a concern related to [[cognitive-offloading]].

Against this backdrop, the authors identify two gaps in the literature. Research on students' preferences for chatbot behavior — specifically whether students favor [[inquiry-based-learning|guided-inquiry]] or direct answers — remains scarce, and the intersection of epistemological beliefs with AI use in physics is underexplored. Their research question asks what association, if any, exists between introductory students' preferences for chatbot behavior and their epistemological beliefs in AI-mediated learning of physics.

## EBAPS Survey

The [[educational-measurement|Epistemological Beliefs Assessment for Physical Sciences (EBAPS)]] is a 30-item questionnaire of Likert-style and multiple-choice items probing beliefs across five non-orthogonal dimensions: (1) structure of scientific knowledge, (2) nature of knowing and learning, (3) real-life applicability, (4) evolving knowledge, and (5) source of ability to learn. Each item is scored 0 (least sophisticated) to 4 (most sophisticated). The authors adopt the EBAPS to examine beliefs' association with chatbot preferences. Reported Cronbach's alpha values showed moderate to low internal consistency, with maximum consistency on Axis 5 and minimum on Axis 4 — values the survey authors caution against interpreting strictly, since beliefs may be context-triggered.

## Methods

The context was an extra-credit activity in a large-enrollment, calculus-based physics course for future engineers at a land-grant midwestern R1 university. The activity focused on waves (not covered in the course) using custom-built simulations integrated with a chatbot. On the second page, students' anticipated chatbot preferences were captured by choosing one of three options: Direct Answers, Guided Q&A, or Combination. The EBAPS survey was administered separately in the preceding week. The course enrolled roughly 1800 students; 1191 responded to the activity, 1408 to the EBAPS survey, with 1048 overlapping responses. Weighted axis scores were computed as percentages of the maximum possible score, and a total score summed the five axes.

## Results

Because scores were not normally distributed, the authors ran [[quantitative-research|Kruskal-Wallis tests]] at α = 0.05. At least one pair of preference groups differed significantly on the total score and on Axis 4 and Axis 5, with small effect sizes indicating chatbot preference accounted for only a modest proportion of score variability. Dunn's post-hoc test (with Bonferroni correction) showed that the Combination and Answer groups had statistically different total-score distributions (p = 0.029), with Combination-preferring students scoring higher, and the same pattern on Axes 4 and 5. No other pairwise differences were significant. When a stricter Bonferroni-adjusted level (α = 0.0083) was applied across the six omnibus tests, the total-score and Axis 4/5 differences no longer reached significance.

## Discussion

At the nominal level, students preferring a chatbot that initiates guided inquiry before providing answers exhibited more sophisticated beliefs about balancing absolutism and relativism (Axis 4) and about the sources of learning ability (Axis 5). The authors position these results against related work: Brändle et al. found early AI adopters used AI more frequently while late users held more elaborated beliefs; Urhahne et al. found beliefs about knowledge justification and rapid learning predicted ChatGPT adoption; and Sin found that dependence on authority predicted greater AI familiarity and use. The present study stands apart by examining beliefs specifically about physics and by focusing on preferences for instructional chatbot behavior rather than adoption frequency — a shift from whether students use AI to how they prefer it to support learning. The authors caution that the modest effect sizes and low Cronbach's alpha, especially on Axis 4, warrant interpreting the associations as preliminary.

## Implications

For the design and instructional use of chatbots in [[physics-education]], the findings point toward chatbots that initially encourage students to reason through a problem while providing more direct assistance when needed — beginning with questions, hints, or prompts for explanations and progressively offering explicit guidance if the student remains stuck. This approach may balance [[productive-failure|productive struggle]] with timely [[scaffolding|support]], preventing inquiry from becoming frustrating or answer provision from inhibiting valued [[critical-thinking|epistemic practices]] such as sensemaking. The Axis 5 findings reinforce the message that learning ability develops through effort, strategy use, [[feedback]], and reflection; chatbots can recommend alternative representations, prompt students to revisit concepts, break problems into smaller steps, or encourage reflection on unsuccessful strategies. Instructors can treat chatbot assistance as support for developing [[self-efficacy|competence]] rather than a substitute for thinking. For research, the results suggest further examination of whether sustained use of Socratic-dialogue chatbots shifts students' epistemological beliefs — positively or detrimentally — and how AI use shapes students' approaches to scientific inquiry.

## Connected Concepts

- [[physics-education]]
- [[pedagogical-agent]]
- [[socratic-method]]
- [[ai-literacy]]
- [[student-experience]]
- [[generative-ai]]
- [[stem-education]]
- [[higher-ed]]
- [[metacognition]]

## Connected Articles

- [[hashmi-socratic-physics-chatbot-2025]]
- [[socratic-ai-physics-tutor-taxonomy-2026]]
- [[fouad-bentley-trust-utility-gap-physics-2026]]
- [[becker-chatgpt-typology-physics-2026]]
- [[genai-tutor-engagement-patterns]]
- [[chatgpt-feedback-engagement-genai]]

## Citation

Sirnoorkar, A., & Mamidpalliwar, O. (2026). [*Students' epistemological beliefs and their chatbot preferences in AI-mediated physics learning*](https://arxiv.org/abs/2607.29385). Proceedings of the 2026 Physics Education Research Conference.
