---
title: Peer Assessment
created: "2026-08-13T17:54:24-04:00"
updated: "2026-09-21T11:27:05-04:00"
type: concept
connected_faqs: [writing-instruction-ai-best-practices, group-work-ai]
pedagogy: [collaborative-learning, metacognition, self-regulated-learning]
assessment: [ai-feedback-quality, formative-assessment, group-work]
confidence: high
discipline: [writing education]
audience: [learners, instructors]
---

> **Peer assessment** — the practice in which students evaluate, grade, or give [[feedback]] on one another's work, through written peer review, peer grading, peer code review, or group and team assessment. In [[writing-education|writing]] [[pedagogy]] it is a long-standing best practice: students learn both from receiving criteria-based feedback and from providing it, and peer talk about shared work correlates with deeper learning, audience awareness, and social development. In the AI era it is being re-examined as an [[assessment|assessment design]] choice rather than a single activity — a human complement to [[ai-feedback-quality|AI-generated feedback]], a training ground for [[feedback-literacy]], and a site where [[academic-integrity]] and [[agency|student agency]] are renegotiated.

## Questions to Consider

- Think back to a time your work was assessed by a peer—or you assessed theirs. What did you learn more from: giving feedback or receiving it, and why?
- Why might a student's feedback be more context-aware and emotionally supportive than AI feedback, even while AI feedback is more consistent and rubric-driven? How could the two complement each other?
- Peers tend to under-grade strong work and AI tends to inflate weak work. If neither is reliably accurate across the whole quality range, what should a grade from either source be used for?
- Peer assessment depends heavily on [[scaffolding]] and clear criteria, and friendship bias and social anxiety can make untrained peer review worse than none. What does adequate training actually look like in your context?
- If AI can draft comments on organization and structure, does that make peer assessment redundant—or does it free peers to give the specific, audience-aware feedback only they can give?
- GenAI-supported peer feedback outperformed plain peer feedback in one study, but only with prompt scaffolding added. What is being scaffolded there—the AI, the student, or the assessment?
- Critically assessing AI-generated feedback is described as building AI literacy and writerly agency. What does it mean to have agency over your own work when machines increasingly comment on it?

## Introduction

Peer assessment is an assessment design choice in which students take on part of the evaluative work usually reserved for instructors. Its forms differ in what students produce and what is at stake: peer feedback (comments on a draft, usually [[formative-assessment|formative]] and low-stakes), peer grading (a mark contributing to a grade), peer code review, and group or team assessment (where peers assess the collective product or one another's contributions). The form determines what students practice — giving a criteria-based comment builds [[evaluative-judgment|evaluative judgment]] differently from assigning a number, and defending one's own code orally builds something different again. [[self-assessment]], the sibling practice, turns that same criteria-based scrutiny on the learner's own work, whereas peer assessment directs it at a peer's submission and the audience awareness that comes with it.

The research base agrees that peer assessment produces learning and disagrees about how much depends on design. It gives students an authentic audience, develops evaluative judgment through criteria-based responding, and builds the social context that supports [[student-engagement|engagement]] and [[motivation]]. Its quality depends heavily on [[scaffolding]] — how well it is structured, and whether students get clear criteria and training. That dependency is where AI enters, as a consistent, rubric-driven complement to the specific, context-aware feedback peers give, and increasingly as a scaffold built into the peer-assessment process itself.

## What students learn from assessing peers

The strongest argument for peer assessment is that the assessor learns. [[code-review-genai-cs1|Fowles et al. (2026)]] made every CS1 submission subject to a 15-minute oral code review interview with a trained teaching assistant, weighted at 70% of the assignment grade. Pasted-to-total characters rose from 61.0% to 68.1% (p < 0.0001), yet exam scores did not decline and time-on-task held steady; 90% of students said the reviews motivated them to understand their code better and 65% that they helped avoid [[cognitive-offloading|over-reliance]] on AI. Requiring students to explain their work to a trained peer converted potential offloading into a [[self-regulated-learning|self-regulated]] practice opportunity.

The mechanism recurs across the literature. In a PRISMA 2020 [[meta-analysis-systematic-review|systematic review]] of 22 articles from 203 screened, [[llm-critical-thinking-teamwork-review|Martínez-Peláez et al. (2025)]] found LLMs support [[collaborative-learning|collaboration]] partly by aiding peer feedback and simulating rubric-based evaluations, and that students who verify and correct model output develop critical thinking. [[learning-by-teaching]] shows up even among machines: peer-learning-like discourse among over 2.4 million [[agentic-ai|AI agents]] was mostly assertion rather than inquiry (statement-to-question ratio 11.4:1, [[metacognition|metacognitive]] reflection only 7% of a coded taxonomy across 28,683 posts), which [[ai-agents-peer-learning-discourse|Chen et al. (2026)]] treat as a caution that surface discourse does not establish that anything is learned.

## Training, calibration and feedback literacy

Peer assessment fails predictably when students are untrained. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen, and Yan (2026)]] ran a [[mixed-methods-research|mixed-methods]] quasi-experiment with 118 first-year [[higher-ed|undergraduates]] in China, comparing [[generative-ai|ChatGPT]]-4o under pre-trained rubrics against structured peer-review worksheets with a high-quality exemplar. Feedback literacy rose slightly more in the GenAI group (ANCOVA p = 0.049, η²p = 0.03), but the [[qualitative-research|qualitative]] findings matter more: peer-group students chose feedback sources by social convenience — nearby peers, same-major peers, roommates — rarely held specific feedback goals, and faced social anxiety about seeking feedback. Peer evaluation was more often distorted by friendship bias and perceived peer proficiency, and peer reflection was often delayed until later exams. The authors recommend multi-stage designs with anonymous peer feedback, since peer review still uniquely builds audience awareness and evaluative judgment through giving feedback.

Design frameworks target those bottlenecks. [[irwin-muller-efl-peer-feedback-literacy|Irwin and Muller (2026)]] propose two GenAI roles in EFL/ESL peer feedback on speaking, a case they argue is harder than writing because of time pressure, fleeting oral performance, and heightened affect: a Trainer supporting feedback givers through exemplar-based calibration and feedback-on-feedback, and a Synthesizer aggregating peer comments into a criteria-linked uptake report that normalizes formats, preserves minority views, and flags contradictions. Their principles are careful timing and sequencing, short repeated Trainer units, preserving the givers' voice, and [[guardrails]] that keep the [[teacher-role|teacher]] in the loop with no [[automated-assessment|automated grading]]. The paper is conceptual, with no new empirical data.

## Validity, fairness and grading accuracy: peer vs AI vs instructor

Where peer assessment produces a grade, the question is whether the grade is defensible. [[usher-faraon-who-grades-best-2026|Usher and Faraon (2026)]] found peer–instructor alignment was strongest for lower-quality work (r = 0.51 in the low-quality tier) and weakened for high-quality projects, which peers tended to under-grade — plausibly reflecting reluctance to criticize strong work. ChatGPT showed the opposite pattern: better alignment on high-quality work, but inflated grades for weak submissions. Students perceived peers' grades as more consistent with the peers' own written feedback, and valued peers' relationship-aware judgment alongside ChatGPT's neutral consistency. Peer accuracy is quality-dependent and relationship-sensitive, and no single source is reliable across the whole range.

That constrains what a peer grade should be used for. A mark calibrated in the middle of the distribution need not be calibrated at the top or bottom, so peer grades are more defensible as input to a moderated decision or as evidence of the assessor's judgment than as a final mark on strong work. [[multimodal-affective-its-presentation|Suen and Hung (2026)]] underline why institutions keep seeking scalable alternatives: peer feedback and expert coaching are time-consuming, costly, and hard to scale consistently. Their closed-loop system scored 204 [[adult-learning|adult learners]] on presentation skills with an XGBoost backbone approaching expert-rater reliability (ρ = 0.69–0.78) and pre–post gains of Cohen's d = 0.39–0.90 — one pre–post field study, not a comparison against peer assessment, substituting machine judgment rather than augmenting peer judgment.

## AI-augmented peer assessment: PAIRR and the Trainer/Synthesizer split

The dominant design pattern keeps the peer central and adds AI around them. The Peer and AI Review + Reflection model is the best-documented instance. [[pairr-ai-peer-review-2025|Sperber et al. (2025)]] implemented PAIRR across 10 writing courses and three writing-intensive [[stem-education|STEM]] courses, with 654 students (37% first-generation, 13% international, 68% [[multilingual-learning|multilingual]]). Students drafted, exchanged peer review, prompted ChatGPT for rubric-driven feedback on the same draft, critically assessed both, planned revisions, and reflected. 58% preferred combined feedback, 36% peer feedback alone, and only 6% AI feedback alone. The two sources were often similar (75% reported similarities, described as confirming and strengthening each other) and, when they differed, complementary: AI feedback was often called overly general (31%) but gave actionable revision strategies on organization and structure, while peer feedback was more specific and detailed (28%) and drew on contextual knowledge of the assignment. Critically [[ai-ed-evaluation|evaluating AI]] output built [[ai-literacy]], and only 5.3% of students showed overconfidence in it.

The pattern generalizes to professional writing. [[gift-ai-pairr-business-writing-2025|MacArthur et al. (2025)]] applied PAIRR to an upper-division business writing course where five major assignments each required a draft, audience analysis, peer review by 2–3 peers, and revision (34 of 46 enrolled students participated; 69% multilingual). Students valued AI feedback but sometimes found it too general, and valued peers' contextual knowledge — "my peers looked at it from the employer's perspective… ChatGPT did not do that as much." One quarter of coded reflections in the larger PAIRR study expressed skepticism about AI feedback or noted inaccuracies, which the authors read as developing AI literacy. The study is descriptive and course-specific.

## GenAI as a scaffold inside peer feedback and group assessment

The most rigorous test of how much design matters is a multisite cluster-randomized experiment. [[genai-feedback-design-multisite-experiment|Ateş (2026)]] randomized 48 sections across 4 universities — 1,176 first-year undergraduates in [[biology-education|biology]], [[chemistry-education|chemistry]], and [[physics-education|physics]] — to four conditions for scientific argumentation: peer feedback only, direct GenAI feedback, reflective GenAI feedback (self-evaluation then AI critique), and a hybrid of self-evaluation → peer feedback → GenAI critique. Direct GenAI beat peer feedback on immediate argument quality but showed weaker [[transfer-of-learning|transfer]]; reflective and hybrid designs produced stronger feedback uptake and self-regulated learning; the hybrid showed the clearest advantage on conceptual learning; both outperformed direct GenAI on delayed AI-free transfer. GenAI's value, the authors conclude, depends less on access than on whether the environment preserves student agency and ownership during revision.

Adding GenAI can also raise the quality of the peer feedback itself, but apparently only with prompt support. [[chang-genai-peer-feedback-collaborative-argumentation-2026|Chang et al. (2026)]] compared three conditions among 45 student teachers in 12 groups over four rounds of collaborative argumentation: plain peer feedback, peer feedback with GenAI, and peer feedback with GenAI under prompt scaffolding. The GenAI-supported groups outperformed plain peer feedback on argumentation performance, and the prompt-scaffolded group performed best on advanced elements such as "rebuttal data and warrant" and "addressing the opposing view". GenAI-supported groups produced more explanations, suggestions, and neutral or negative feedback, and the scaffolded group paired negative emotions with higher-order feedback content — [[critical-thinking|critical evaluation]] rather than passive acceptance. It is a small single experiment, but it isolates prompt scaffolding as the active ingredient.

[[group-work|Group assessment]] changes the problem, because students must negotiate whose AI use is acceptable. [[chen-zou-genai-group-assessment-agency-2026|Chen and Zou (2026)]] interviewed 15 focus groups of 52 pre-service teachers in a course where a group presentation worth 30% of the final grade required integration and coherence. Three patterns emerged: cooperation-oriented agency in five groups, who intensified GenAI use to hold the work together and protect a shared grade; normative agency in seven groups, who restrained use to protect authenticity and fairness — one student reasoned that generating a part in AI would be "not fair to other groupmates"; and non-enacted agency in three groups whose practice never changed from individual work. The authors argue that individual capability does not become collective agency on its own and that the negotiation of acceptable AI use should itself become an assessable outcome, with peer review tasks feeding the final product.

## Feedback architecture, disclosure, and the social conditions of peer assessment

Peer assessment also depends on what students can see of each other and what they will admit. [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao and Cukurova (2026)]] tested an AI-generated summary [[learning-design|learning design]] across three iterations with 128 students over eight weeks. Students in AI-supported iterations showed significantly higher standardized out-degree centrality than the baseline (β = 0.547 and β = 0.438, both p < 0.001): they viewed or interacted with more peers. Interviews described the summaries as a navigation map that reduced the effort of finding contributions buried in ill-named threads, and students attended to active contributors chosen for contrasting opinions rather than friendship. The design did not prevent declining viewing activity under rising workload, so technological affordances alone do not sustain engagement.

Peer norms also shape honesty, which matters wherever peers assess AI-influenced work. [[qu-wang-disclose-or-not-genai-2026|Qu and Wang (2026)]] surveyed 409 Singaporean undergraduates about why students conceal GenAI use despite disclosure mandates, and found relational variables dominated: perceived peer disclosure and comfort with instructors were the strongest predictors of disclosure, while moral disengagement was weaker. Non-disclosure was strategic adaptation to perceived peer norms and low [[trust|interpretive trust]], not moral negligence. Peer norms can therefore support honesty, as when group-assessment students restrained AI use out of obligation to groupmates, or suppress it, as when collective adoption lowered the perceived risk of misuse. Transparency, the authors argue, depends less on compliance than on trust and positive normative climates — a relational condition that peer-assessment designs either create or destroy.

## Design implications and open questions

Several design moves follow. Give assessors training, exemplars, and criteria before they assess, because untrained peer assessment is vulnerable to friendship bias, convenience-based source selection, and social anxiety. Sequence the work so self-evaluation precedes peer feedback and AI critique, since the hybrid condition produced the strongest conceptual learning and best delayed transfer. Where GenAI enters, scaffold how students prompt it. Keep the teacher in the loop for anything that becomes a grade, treat peer grades as quality-dependent evidence rather than uniform marks, and make AI use itself something groups negotiate and document.

The open questions are about the strength of the evidence, not only about design. Much of the peer-and-AI evidence is small and context-bound: 45 student teachers in one course, 34 students in one business writing course, 52 pre-service teachers in 15 focus groups. The PAIRR survey is the largest dataset here and measures student perceptions, not the quality of the AI outputs students judged. Only the multisite experiment's 1,176 undergraduates approaches causal-comparative scale, and it tests feedback design for scientific argumentation rather than peer assessment as such. Meanwhile [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] audited 14 peer-reviewed meta-analyses claiming AI improves education and found none provided a valid basis for its claims — all but two defined the treatment as a tool rather than a pedagogical intervention, heterogeneity was high in every meta-analysis reporting I² (77.2% to 94.4%), and an audit of 59 primary studies found 61% had [[assessment-validity|validity concerns]], most often a mismatch between the outcome measured and the claim made. Claims about what AI does in peer assessment should be treated as claims about a designed activity, tested in that activity's terms.

## Connected Concepts

- [[writing-education]]
- [[formative-assessment]]
- [[self-assessment]]
- [[ai-feedback-quality]]
- [[ai-literacy]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[student-experience]]
- [[collaborative-learning]]
- [[academic-integrity]]
- [[feedback-literacy]]
- [[feedback]]
- [[group-work]]
- [[assessment]]
- [[scaffolding]]

## Connected Articles

- [[usher-faraon-who-grades-best-2026]] — Comparing ChatGPT, peer, and instructor grading across project quality levels (Usher & Faraon 2026)
- [[pairr-ai-peer-review-2025]] — Peer and AI Review + Reflection (PAIRR)
- [[becerra-aicofe-feedback-2026]] — AI Peer Feedback Systems
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond Detection: Redesigning Authentic Assessment
- [[ai-internal-feedback-evaluative-judgments]] — Unravelling Undergraduates' Development of Evaluative Judgments
- [[learner-centered-feedback-ai]] — Enhancing Learner-Centered Feedback With AI
- [[genai-linguistic-diversity-academic-writing]] — Generative AI and Linguistic Diversity in Academic Writing
- [[gift-ai-pairr-business-writing-2025]] — PAIRR in a business writing course: peer review, chatbot feedback, reflection (MacArthur et al. 2025)
- [[scaffolding-srl-feedback-genai-human-peers]] — GenAI vs. human peers for scaffolding self-regulated feedback and feedback literacy (Gu et al. 2026)
- [[irwin-muller-efl-peer-feedback-literacy]] — GenAI as Trainer and Synthesizer in EFL peer feedback on speaking (Irwin & Muller 2026)
- [[genai-feedback-design-multisite-experiment]] — Multisite experiment comparing peer-only, direct, reflective, and hybrid GenAI feedback (Ateş 2026)
- [[chang-genai-peer-feedback-collaborative-argumentation-2026]] — Prompt-scaffolded GenAI peer feedback in collaborative argumentation (Chang et al. 2026)
- [[chen-zou-genai-group-assessment-agency-2026]] — Agency in GenAI-mediated group assessment: cooperation, restraint, non-enactment (Chen & Zou 2026)
- [[code-review-genai-cs1]] — Oral code review interviews as harm reduction for GenAI in CS1 (Fowles et al. 2026)
- [[multimodal-affective-its-presentation]] — Automated multimodal presentation coaching as a scalable alternative to peer feedback (Suen & Hung 2026)
- [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026]] — AI-generated discussion summaries broaden peer exposure in online forums (Hao & Cukurova 2026)
- [[qu-wang-disclose-or-not-genai-2026]] — Peer influence and relational trust in students' GenAI disclosure (Qu & Wang 2026)
- [[llm-critical-thinking-teamwork-review]] — Systematic review of LLMs for critical thinking, teamwork, and problem solving (Martínez-Peláez et al. 2025)
- [[ai-agents-peer-learning-discourse]] — Peer-learning-like discourse among 2.4 million AI agents (Chen et al. 2026)
- [[oneill-presumed-effective-meta-analysis-2026]] — Audit of 14 AIED meta-analyses and 59 primary studies (O'Neill 2026)
