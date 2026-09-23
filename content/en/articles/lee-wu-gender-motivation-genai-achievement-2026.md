---
title: "Differential engagement with generative artificial intelligence in higher education: Gender, motivation, and achievement trajectories"
created: "2026-08-23T14:00:00-04:00"
updated: "2026-09-19T09:11:03-04:00"
type: article
pedagogy: [motivation, self-regulated-learning, student-ai-interaction]
technology: [generative-ai, personalized-learning, learning-analytics]
assessment: [learning-gains]
level: [higher ed]
sources: ['raw/papers/lee-wu-gender-motivation-genai-achievement-2026.md']
confidence: high
discipline: [math education]
audience: [instructors, instructional designers, learning analytics designers]
---

> **Synthesis:** This study of 97 graduate students and 2,819 queries to a [[conversational-ai|RAG-based GenAI chatbot]] (StatBot) for statistics learning reveals that [[student-engagement|engagement]] with [[generative-ai|GenAI]] is strongly differentiated across learner subpopulations. More than one-quarter of students never used the [[conversational-ai|chatbot]]; female students, those with stronger autonomous [[motivation]], lower [[prior-knowledge|prior knowledge]], and higher course performance interacted more frequently. Using zero-inflated negative binomial modeling and k-means achievement profiling, the authors show that "Growing Achievers" posed more diverse, conceptually oriented questions, while "Declining Performers" engaged minimally with narrow procedural inquiries. The authors argue that effective AI integration requires moving beyond uniform access toward [[scaffolding]] concept-focused support that prioritizes autonomous motivation and shared human-AI agency.

## Core Finding

GenAI efficacy in [[higher-ed|higher education]] depends less on universal access and more on learner-specific engagement: **autonomous motivation and achievement trajectory shape both the frequency and the quality of AI interaction**. GenAI tools can amplify growth for some learners while remaining underutilized by others, so the benefits are not distributed equally across student subpopulations.

## Significant Non-Participation

More than one-quarter of students did not use the chatbot at all. This meaningful non-participation challenges the assumption of universal AI adoption and highlights that engagement is not guaranteed by providing a tool. Higher-performing students were less likely to abstain from use, suggesting that prior success correlates with readiness to engage AI support.

## Determinants of Engagement Frequency

The zero-inflated negative binomial model showed that engagement frequency was shaped by learner differences: female students, those with stronger autonomous motivation, lower prior knowledge, and higher course performance interacted more frequently. Notably, the gender difference (female students engaging more) and the role of [[self-regulated-learning|autonomous motivation]] suggest that motivational quality — not just access — drives who benefits from [[personalized-learning|AI-supported learning]].

## Inquiry Quality and Achievement Trajectories

Engagement was not merely a matter of frequency but of inquiry quality and diversity. k-means clustering identified distinct achievement profiles. "Growing Achievers" — students who began with weaker achievement but demonstrated substantial performance gains — posed more diverse and conceptually oriented questions, leveraging the chatbot for genuine [[learning-gains|learning gains]]. In contrast, "Declining Performers" engaged minimally and focused on narrower procedural inquiries despite stronger initial knowledge. The predominance of Initial Inquiry behaviors (70.3%, especially Definition and Copy queries) indicates that many students used the chatbot primarily for [[cognitive-offloading|cognitive offloading]] of basic concepts rather than higher-order reasoning.

## Relevance to the knowledge base

This paper contributes directly to the knowledge base's understanding of [[student-ai-interaction]], [[motivation]], and the [[equity-in-ai-education|equity]] of [[generative-ai|GenAI]] in [[higher-ed|higher education]]. It shows that engagement is patterned by gender, motivation, prior knowledge, and achievement trajectory — a differentiated, non-uniform picture that refines simplistic "AI improves learning" claims. It connects to [[learning-gains|achievement]] [[research-methods-aied|research]], [[conversational-ai|chatbot]] design, [[personalized-learning|personalization]], and the goal of shared [[human-ai-collaboration|human-AI agency]]. Its finding that concept-focused scaffolding and autonomous motivation matter most informs [[learning-design|instructional design]] and aligns with [[agency]]-oriented frameworks on the knowledge base.

## What this means for practice

- **Instructors.** Front-load chatbot support into deadline weeks and demonstrate its use yourself: the 2,819 logged StatBot interactions clustered in weeks with intensive coursework, and participation peaked when the instructor modeled effective usage.
- **Instructors.** Teach the follow-up moves explicitly — Check, Doubt, and Extend — rather than stopping at question entry. Initial inquiry made up 70.3% of interactions (mostly Definition and Copy), while follow-up inquiry accounted for only 26.4%, so most learners never reached iterative verification or conceptual extension.
- **Instructional designers.** Build meta-prompting and pedagogical nudges into the chatbot so it pushes learners to clarify their questions, evaluate responses, and formulate their own follow-ups instead of defaulting to answer delivery.
- **Instructional designers.** Preserve a private, low-stakes inquiry channel. Female students used StatBot significantly more often than male students (total frequency, and initial queries at W = 679.5, p = .015), which the authors read as conversational AI reducing the perceived social risk of asking questions in a STEM course.
- **Designers.** Instrument non-use and motivational readiness rather than assuming adoption: 27% of the 97 enrolled students never used the chatbot, and autonomous [[motivation]] predicted both higher use and membership in the Growing Achievers profile.

## Limitations

- The study used no control–experimental design, so it cannot support causal claims about the chatbot's effect on learning; the authors frame the achievement-profile comparisons as exploratory.
- It is a single site and a single course: 97 graduate students in one statistics course at one institution, which the authors state limits generalizability across disciplines, educational levels, and learning environments.
- The analysis relied on chatbot interaction logs, which cannot capture learners' cognitive engagement, metacognitive regulation, or epistemic reasoning beyond the chat interface.
- N = 97 was adequate for zero-inflated negative binomial modeling, but the authors note limited statistical power for subtler follow-up behaviors — the cluster difference in follow-up inquiry reached only p = .052 — and the design did not model how inquiry patterns unfold over time.

## Connected Concepts

- [[generative-ai]]
- [[conversational-ai]]
- [[motivation]]
- [[student-ai-interaction]]
- [[personalized-learning]]
- [[learning-gains]]
- [[self-regulated-learning]]
- [[higher-ed]]

## Connected Articles

- [[scheu-mobile-chatbot-journaling-motivation-2026]]
- [[genai-tutor-engagement-patterns]]
- [[ai-learning-assistants-higher-ed-large-scale]]
- [[kutti-ai-voice-first-learning-companion]]
- [[genai-student-experiences-uk-he-survey-2026]]

## Citation

Lee, Y.-H., & Wu, J.-Y. (2026). [*Differential engagement with generative artificial intelligence in higher education: Gender, motivation, and achievement trajectories*](https://doi.org/10.1186/s41239-026-00615-8). *International Journal of Educational Technology in Higher Education*.
