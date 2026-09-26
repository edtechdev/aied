---
title: "Who Gives Feedback Matters: Student Biases Towards Human and AI-Generated Formative Feedback"
created: "2026-09-26T08:11:48-04:00"
updated: "2026-09-26T08:24:36-04:00"
type: article
sources: ['raw/papers/nazaretsky-feedback-source-bias-2025.md']
confidence: high
published: "2025-12-02"
page_kind: [evaluation]
research_method: [experiment]
level: [higher ed]
audience: [instructors, assessment designers, researchers]
foundations: [human-ai-collaboration]
technology: [generative-ai]
assessment: [feedback, ai-feedback-quality, formative-assessment]
pedagogy: [student-ai-interaction, student-experience]
ethics: [trust, bias-mitigation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-26"
reviewed_by: [editor]
---

> **Synthesis:** Nazaretsky, Mejia-Domenzain, Swamy, Frej and Käser ask a narrow question with a practical consequence: does telling students who wrote their [[feedback]] change how they rate it? At EPFL, 472 students across six courses rated two variants of feedback on their own coursework, one from the teaching team and one generated with GPT-4.0, first without knowing the source and then again after it was revealed. Most could not reliably tell them apart: 287 out of 472 guessed correctly. In blind conditions the two variants scored almost the same. Once the label was disclosed, students lowered their ratings of the [[ai-feedback-quality|AI feedback]] and raised their ratings of the human feedback, with the fall statistically significant for Genuineness (authentic, sincere) but not for Objectivity or Usefulness. On credibility, human providers were rated 3.28 (σ = 0.77) against 2.25 (σ = 0.85) for AI, a medium effect (Cohen's d = 0.57). The bias the study documents attaches to the source, not to the text, which the authors kept deliberately comparable.

## Key Findings

1. **A within-subject experiment in real courses.** Four-hundred and seventy two EPFL students in six courses rated feedback on their own assignments in fall 2023, once blind to the source and once after disclosure.
2. **Students could barely identify the source.** In total, 287 out of 472 guessed the feedback provider correctly. Only ICC1 (79% correct, n = 65) and ASE (80% correct, n = 70) beat chance after Bonferroni correction; AICC reached 54% and ADA 43%.
3. **Blind ratings of the two variants were close.** Across Objectivity, Usefulness and Genuineness, students rated AI and human feedback similarly while blind, and the paper's companion quality analysis found the two variants comparable.
4. **Disclosure moved ratings in opposite directions.** After the source was revealed, students increased scores for human feedback and decreased them for AI feedback. The decline was statistically significant for Genuineness (p < .01), the dimension measured by "authentic" and "sincere".
5. **Credibility showed the clearest source effect.** Human providers were rated more credible (μ = 3.28, σ = 0.77) than AI (μ = 2.25, σ = 0.85), a medium effect (Cohen's d = 0.57), with human identity correlating positively with credibility (p < .001).
6. **Low-rated human feedback was read as AI.** Of 219 instances of human feedback seen as low quality, 205 were misperceived as AI and only 14 were correctly identified as human; of 325 AI feedback instances only 40 were misattributed to humans.

## How the experiment held content constant

The comparison was built inside courses rather than a lab. Six EPFL courses supplied pre-existing assignments and genuine student answers. Human feedback came from the original teaching teams. The AI variant was generated with the GPT-4.0 Interface using a standardized ROLE-CONTEXT-INSTRUCTION-FORMAT prompt that cast the model as "an excellent instructor", then adjusted per course for length and language and stripped of any greeting or sign-off. Students saw both variants blind, guessed the source in a one-attempt Turing Test, then re-rated the content after the truth was revealed. Instrument 1 scored Objectivity, Usefulness and Genuineness, and Instrument 2 scored provider Credibility, all on a 0-4 Likert scale. Reliability was good to excellent: Cronbach's α was 0.82 for Objectivity, 0.87 for Usefulness, 0.91 for Genuineness and 0.85 for Credibility.

## The cues students used to read the source

Of 447 usable responses to the open-ended question, 355 (79.4%) referenced pedagogical features and 250 (56%) referenced surface ones. Objectivity dominated: 177 students discussed it, and among the 95 who commented on precision only 18 attributed imprecise feedback to humans. Accuracy was another tell, with 61 of 64 students who judged feedback inaccurate attributing it to AI. Genuineness was the most lopsided, where 94 of 99 students attributed a warm communication style to humans and all 45 who found feedback overly praising attributed it to AI. Grammatically flawless feedback (n = 91) was attributed to AI with no exceptions, while typos and poor formatting (n = 34) were always assigned to humans.

## The bias is about the provider, not the text

The paper's companion quality analysis is what makes the pattern interpretable: the AI and human variants were comparable on correctness and cognitive quality, and the AI version actually offered more [[metacognition|metacognitive]] suggestions and delivered praise more often. Students nevertheless attached superior feedback to human providers and the absence of it to AI, so a source that produced equivalent text was judged on an assumption rather than on what it wrote. Students who failed the Turing Test, by rating AI feedback higher than human feedback while blind, reduced their AI scores and raised their human scores once the source was known. The authors describe a bidirectional influence in which perceived quality shapes perceived identity, and perceived identity then reshapes perceived quality.

## What this means for practice

- **Instructors.** Do not assume acceptance follows quality. Feedback held comparable to the human version was rated lower once labeled AI, so resistance to an AI draft is not evidence that the draft is bad.
- **Course teams.** Disclose that [[generative-ai|generative AI]] was used and what a human checked. The authors call concealing the source unethical and argue that transparency teaches students to recognize and handle AI errors.
- **Designers.** Build student [[ai-literacy|AI literacy]] and [[feedback-literacy|feedback literacy]], since only six students mentioned the metacognitive value of feedback that the AI variant supplied more of.
- **Administrators.** Plan [[human-in-the-loop-ai|human-in-the-loop]] review rather than automatic delivery: the barrier documented here is perceptual, so pair AI drafts with human validation.

## Limitations

- The sample is 472 students at one institution, EPFL, and may not capture the diversity of educational contexts and demographics, particularly underrepresented groups such as non-binary students.
- Prior experience with generative AI, knowledge levels and task complexity were not accounted for.
- Perceptions were captured at a single time point and the study did not measure feedback uptake, so it cannot show whether students act differently on feedback they know came from AI.

## Connected Concepts

- [[ai-feedback-quality]]
- [[feedback]]
- [[trust]]
- [[bias-mitigation]]
- [[human-ai-collaboration]]
- [[formative-assessment]]
- [[generative-ai]]
- [[student-ai-interaction]]
- [[llm]]
- [[ai-literacy]]
- [[feedback-literacy]]
- [[evaluative-judgment]]
- [[technology-acceptance-model]]

## Connected Articles

- [[perceptions-teacher-vs-ai-feedback-bias-2026]] — The teacher-side counterpart, with the same identical-feedback, randomized-label design
- [[genai-teacher-feedback-comparison]] — Student perceptions of generative AI versus teacher feedback, the comparison this experiment isolates
- [[ai-vs-human-assessment-efl-tpck-2026]] — AI-generated versus human-developed assessment tasks through the TPCK frame
- [[liu-deris-ai-feedback-literacy-uptake]] — Whether students act on AI feedback, the behavior this study did not measure

## Citation

Nazaretsky, T., Mejia-Domenzain, P., Swamy, V., Frej, J., & Käser, T. (2025). [Who Gives Feedback Matters: Student Biases Towards Human and AI-Generated Formative Feedback](https://doi.org/10.1111/jcal.70153). Journal of Computer Assisted Learning.