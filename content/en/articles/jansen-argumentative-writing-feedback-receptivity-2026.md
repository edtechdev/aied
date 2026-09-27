---
title: "Automated feedback on argumentative writing: The role of secondary students' feedback receptivity and feedback perception"
created: "2026-09-27T05:25:24-04:00"
updated: "2026-09-27T05:25:24-04:00"
type: article
sources: ['raw/papers/jansen-argumentative-writing-feedback-receptivity-2026.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey]
discipline: [writing education]
level: [secondary]
audience: [instructors, researchers]
foundations: [ai-education]
pedagogy: [motivation]
assessment: [feedback, automated-assessment]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-27"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Jansen, Bahr, Schaller, Höft, and Meyer (2026) gave 1507 secondary school students one standardized automated [[feedback]] message after a first draft of an argumentative text and recorded how their situational interest and revision performance changed. It asks whether students' dispositional receptivity to feedback and their perception of a message's usefulness explain the spread. Receptivity was measured before writing, perceived usefulness immediately after feedback. Behavioral engagement with feedback and instrumental attitudes towards it predicted revision performance, with the 25th-to-75th percentile difference corresponding approximately to a shift from the 46th to the 54th percentile, yet perceived usefulness mediated nothing for performance. Global receptivity predicted interest change, and there perceived usefulness fully mediated the link. The authors conclude that feedback models built for humans transfer to standardized automated contexts, and that performance and [[motivation|motivational]] outcomes follow different individual pathways.

## Key Findings

1. **Dispositions predict revision gains.** Students who report they generally act on feedback and find it important revised their texts better; the corresponding spread runs from about the 46th to the 54th percentile.
2. **The effect is small.** Holding other variables constant, students at the 75th percentile of behavioral engagement or instrumental attitudes improved by about 0.10 or 0.11 WLE points more than comparable students at the 25th.
3. **Other receptivity dimensions did not matter for writing.** Global receptivity, cognitive engagement with feedback, and experiential attitudes towards feedback were unrelated to changes in revision performance.
4. **Usefulness did not carry performance.** Perceived usefulness mediated no receptivity dimension's relation to revision performance, so students who found a message useful were not necessarily the ones who wrote better after it.
5. **Interest moved through perceived usefulness.** Global receptivity's effect on interest change ran via usefulness: indirect β = 0.09, 95% CI [0.06, 0.13], remaining direct β = 0.06, 95% CI [−0.07, 0.16].
6. **Alignment was not the problem.** The standardized feedback matched drafts in 83% of cases and was not fully aligned in 17%, yet alignment was not systematically related to performance, interest, or usefulness.

## How the study isolated individual differences

Each of the 1507 students drafted an argumentative text on a randomly assigned topic, received exactly one of four predefined automated feedback messages, then had ten minutes to revise. Messages were drawn from a standardized set rather than generated from the draft, to avoid a confounding the authors flag in much generative AI work: there, students with different writing skills also receive different feedback. Receptivity was measured before writing, perceived usefulness immediately after the message. Analysis used structural equation modeling with bootstrapped confidence intervals, full-information maximum likelihood, and rubric-based text-quality indicators. The design is correlational: no receptivity dimension was manipulated, and the authors describe their evidence as "only task-level and correlative".

## Performance responds to dispositions, not to usefulness

Behavioral engagement and instrumental attitudes showed small to medium direct effects on revision performance, while global receptivity, cognitive engagement, and experiential attitudes were unrelated to it. Students at the 75th percentile of either dimension were expected to improve by about 0.10 or 0.11 WLE points more than otherwise comparable students at the 25th, a shift from the 46th to the 54th percentile. Perceived usefulness explained nothing here: no indirect effect on performance emerged for any receptivity dimension. The authors set this against studies where usefulness does mediate performance gains, and caution against treating it as the main lever. A student may judge a comment useful and still not act on it, because criticism feels like negative judgment or because the suggestion demands a skill they lack.

## Interest runs through perceived usefulness

Global receptivity had a small direct effect on situational interest, about 0.11 points on the observed scale, roughly the 54th versus 46th percentile; the other dimensions were unrelated to interest change. In the second model that direct effect was fully mediated by perceived usefulness (indirect β = 0.09, 95% CI [0.06, 0.13]; total β = 0.14, 95% CI [0.04, 0.25]; remaining direct β = 0.06, 95% CI [−0.07, 0.16]). The authors read the split as evidence that individual differences act differently by outcome type: writing improvement depends on durable habits of engaging with feedback, whereas interest depends on whether the message feels worth using. They also note that [[feedback-literacy]] and tolerance for critical feedback are known barriers in automated feedback settings.

## Where the field stands

Table 1 in the paper reviews prior studies of automated feedback for argumentative writing. Nearly all are university samples, often in English-as-a-foreign-language contexts, and most report only average effects; the authors' own row is the only entry marked as analyzing performance, perception, motivation, and individual differences together. Meta-analytic context puts writing intervention effects at estimates ranging from d = 0.30 to 0.38 and motivational feedback effects at d = 0.33 (range: 0.23–0.42), figures averaging across the very students this paper shows respond differently. Earlier work also reports limited uptake of automated feedback (50% in Jansen, Horbach, and Meyer, 2025; 9% in Pozdniakov et al., 2026; 20% in Meyer, Jansen, and Fleckenstein, 2025), the practical reason individual differences matter.

## What this means for practice

- Treat receptivity as a teachable target, not a fixed trait: explain how feedback works and give repeated chances to apply it, since behavioral engagement and instrumental attitudes carried the performance effect.
- Do not optimize feedback design around perceived usefulness alone; here it tracked interest, not revision gains.
- Invest less in perfecting message-draft alignment, which was not systematically related to performance, interest, or usefulness.
- For motivation, keep single messages immediately useful: that was the entire pathway to interest change.

## Limitations

- Feedback was standardized, not personalized; individualized messages might have produced higher perceived usefulness and larger writing change.
- Missing data were likely not missing at random, and full-information maximum likelihood does not correct for that.
- The mediation rests on self-report measures, so shared method variance could inflate the indirect effects.
- Evidence is task-level and correlational; the suggestion that receptivity effects accumulate over time is explicitly tentative.

## Connected Concepts

- [[feedback]]
- [[automated-assessment]]
- [[motivation]]
- [[feedback-literacy]]
- [[writing-education]]
- [[quantitative-research]]

## Connected Articles

- [[llm-formative-feedback-systematic-review-2026]] — reviews LLM-generated formative feedback studies that mostly report average revision-quality gains, the aggregate picture this paper unpacks by student.

## Citation

Jansen, T., Bahr, J. L., Schaller, N.-J., Höft, L., & Meyer, J. (2026). [Automated feedback on argumentative writing: The role of secondary students' feedback receptivity and feedback perception](https://doi.org/10.1016/j.lindif.2026.102969). *Learning and Individual Differences*, 130, 102969.