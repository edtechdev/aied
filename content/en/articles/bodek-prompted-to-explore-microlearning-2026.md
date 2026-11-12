---
title: "Prompted to Explore: A Microlearning Model for Faculty Development in Generative AI"
created: "2026-11-10T20:45:00-05:00"
updated: "2026-11-12T18:40:00-05:00"
type: article
sources: ['raw/papers/bodek-prompted-to-explore-microlearning-2026.md']
source_url: "https://doi.org/10.14434/jotlt.v12i1.41614"
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [case study]
methods: [mixed-methods-research]
level: [higher ed]
audience: [faculty developers, instructional designers, administrators]
foundations: [educational-development]
technology: [generative-ai]
pedagogy: [professional-training]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Bodek, Park, and Valcin (2026) describe the Summer Prompt Challenge at Pennsylvania State University, a twelve-week asynchronous microlearning program that sent faculty one [[generative-ai|GenAI]] prompt each Monday, invited them to try it in Microsoft Copilot, and gave them a Teams space and a SharePoint site to share results. The design is deliberately low-stakes: no synchronous workshops, no required deliverable, a weekly email that can be completed in the time it takes to read it, and an optional digital badge at the end. Of 81 participants, 27 answered the end-of-year survey, and the authors report a significant upward shift in self-reported GenAI use (Wilcoxon Z = -3.52, p = .001) along with time savings, better-organized materials, and a ripple effect into colleagues' and students' practice. The evidence is a single-institution program evaluation built on self-report and engagement analytics, not a controlled study, and the paper is most useful as a replicable design pattern for [[educational-development|faculty development]].

## Key Findings

1. **Reported use rose sharply, from a low base.** Before the program, 40.7% of the 27 end-of-year respondents reported never using GenAI in teaching or academic work and 59.3% used it occasionally or frequently; afterward, only 7.4% reported never or rarely using it, and 92.6% reported occasional or frequent use (Wilcoxon Z = -3.52, p = .001, with 15 positive against 2 negative ranks).
2. **Faculty applied GenAI to teaching and administrative work.** Respondents reported using it for course content creation, course preparation, student engagement, administrative tasks, and student support, with time savings on routine tasks and clearer, better-organized teaching materials named most often.
3. **The effect spread beyond participants.** 51.9% of respondents introduced GenAI-based activities to their students and 29.6% shared tools or strategies with colleagues, which the authors call a ripple effect.
4. **The weekly email was the most valued component.** In the end-of-program survey (20 respondents, 24.7%), weekly email prompts had a median helpfulness of 5.0, with 85% finding them useful and 65% strongly agreeing on their effectiveness; the shared prompt list had a median of 4.0 and 40% strongly agreeing, while Teams discussions were rated moderately helpful.
5. **Engagement was sustained but declined.** Average email open rate was 65.35%, peaking at 82.35% in Week 1 and falling to 54.26% by Week 12; the Teams space logged 124 posts, 143 replies, and 427 reactions across 81 participants, and the SharePoint site received 3,782 visits over twelve weeks.
6. **The badge was completed by everyone who opted in.** 17 participants signed up for the optional badge and all 17 completed it, although the authors note that offering the badge at the end selected for already-engaged participants and cannot show that the badge caused completion.

## What the Prompt Challenge was

The program was built on two literatures the paper reviews: microlearning, which delivers short, focused units at spaced intervals, and communities of practice, which supports learning through shared practice and peer interaction. Each week participants received an email containing a GenAI prompt tied to course design or student engagement, a brief rationale, and links to supporting resources. They were encouraged to try the prompt in Copilot and then post their experience — what worked, what surprised them, what they would change — in a Teams channel.

The structure was intentionally light. Participants could choose prompts that interested them, revisit earlier weeks, or skip a week without penalty. A SharePoint site held the prompt archive, a Microsoft List collected shared prompts, and a form let participants submit their own. A digital badge was offered through the university's badging platform for participants who completed a set of activities, and a faculty panel at a two-day teaching conference shared experiences at the end of the year. The paper describes the platform choices in enough detail — Office 365 tools, email templates, a Teams channel, a SharePoint list, Canvas badges — that another institution could reproduce the pattern with different infrastructure.

## What participants did and reported

The quantitative core is two surveys. The end-of-program survey, administered in summer 2024, asked participants to rate components and captured 20 responses from 81 participants. The end-of-year survey, administered in spring 2025, asked about changes in practice and captured 27 responses. Neither collected demographics, which the authors note was intentional to keep the survey short and encourage participation but which limits any claim about which faculty benefited.

The self-reported changes cluster around efficiency and material quality: GenAI saved time on routine tasks, helped organize and clarify course materials, generated ideas for teaching and assessment, and supported students. The paper does not report effect sizes beyond the Wilcoxon result, does not compare respondents with non-respondents, and does not measure student outcomes, so the claims are about faculty practice and perceptions rather than about learning.

The qualitative material comes from a five-person faculty panel and open-ended survey comments. Panelists described anticipating the Monday email, using the prompts while traveling, and valuing peers' shared prompts as a source of ideas and reassurance. The authors present these as illustrations of the community-of-practice mechanism rather than as systematic evidence.

## Engagement, drop-off, and the badge

The engagement analytics are the most concrete process data in the paper and also the most ambiguous. An average open rate of 65.35% is high for institutional email, but the decline from 82.35% to 54.26% suggests either fatigue or a shift to other components. The Teams numbers — about 1.5 posts, 1.8 replies, and 5.3 reactions per participant — indicate real but modest peer interaction, and the site visits (3,782, about 315 per week) are page views that the authors acknowledge may be inflated by refreshes.

The badge result is a useful caution. All 17 who signed up completed it, which looks like a strong completion rate until you notice that the badge was offered at the end, so the pool was self-selected from participants who had already engaged. The paper says this explicitly and recommends further study of whether the badge motivates participation or merely recognizes it.

## What this means for practice

- **Design for ten minutes a week, not a workshop.** The weekly prompt plus a discussion space is the core pattern; it lowers the barrier for faculty who will not attend a synchronous session.
- **Make the prompt the unit of practice.** Each email asked faculty to do one concrete thing with GenAI in their own course, which connects the learning to an immediate teaching task rather than to generic tool training.
- **Give peers a place to compare.** The shared prompt list and Teams channel turned individual experimentation into a community of practice; the paper's panel comments suggest this was a major source of value.
- **Plan for decline.** Open rates fell by Week 12; a shorter sequence, a mid-program re-engagement prompt, or a change of format is a reasonable response rather than a failure of the model.
- **Do not treat a badge completion rate as motivation evidence.** Offer badges at the start if you want to test whether they drive participation; offering them at the end measures self-selection.

## Limitations

- This is a single-institution case study with no comparison group, so the reported increase in GenAI use cannot be attributed to the program rather than to the broader adoption of GenAI during the same period.
- Both surveys are self-report with low response rates (33.3% for the end-of-year survey and 24.7% for the end-of-program survey), and no demographics were collected, so non-response bias and subgroup differences are unknown.
- The qualitative evidence comes from a five-person panel plus open-ended comments, and the paper does not describe how those comments were coded or how representative they are.
- Engagement metrics are platform analytics — email opens, page views, reactions — that measure exposure rather than learning or changed practice.
- No student outcome, course quality measure, or direct observation of teaching was collected, so the claims are limited to faculty perceptions and self-reported behavior.
- The badge evidence is confounded by self-selection and is reported as such.

## Citation

Bodek, M. J., Park, E. E., & Valcin, J. (2026). [*Prompted to Explore: A Microlearning Model for Faculty Development in Generative AI*](https://doi.org/10.14434/jotlt.v12i1.41614). Journal of Teaching and Learning with Technology, 14 (Special Issue), 3–19.
