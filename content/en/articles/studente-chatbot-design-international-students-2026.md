---
title: "Design guidelines for educational chatbots: supporting international students’ acculturation in higher education"
created: "2026-11-27T05:36:00-05:00"
updated: "2026-11-27T05:36:00-05:00"
type: article
published: "2026-08-18"
sources: ['raw/papers/studente-chatbot-design-international-students-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [survey, interviews]
discipline: []
level: [higher ed]
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Studente, Garivaldis and Sargent (2026) followed 45 international postgraduate students in the United Kingdom across their first six months, then interviewed 19 of them about a chatbot prototype. Acculturative stress rose over that period, and a reduced sense of belonging tracked higher stress at every measurement point. The stressors changed character: forming friendships dominated the first month, and academic work came to the fore later. Interviewees said they would have welcomed peer contact before term began, and judged features such as buddy-up matching, Q&A and group-assessment spaces useful for building community. The paper turns these findings into design guidelines organized around social, academic and institutional belonging. It argues that chatbot technology should connect people to people as a complement to, not a replacement for, existing university services.

## Key Findings

1. **Stress increased over the first six months.** The 45 participants reported higher acculturative stress at six months than at the start of term; significant change over time was confined to the homesickness and culture shock subscales.
2. **Different stressors mattered at different times.** Interviewees described finding friends and a community as the first-month challenge, with academic work and employment concerns becoming focal later.
3. **Belonging and stress moved together.** At all three measurement points, higher acculturative stress went with reduced belonging; homesickness only joined that pattern at six months.
4. **Proficiency and nationality shaped the trajectory.** Changes in overall stress varied with perceived English proficiency and nationality, though not consistently across the separate stress subscales.
5. **Students wanted contact before arrival.** Interviewees described arriving without knowing classmates or teaching staff and asked for early ice-breakers and structured ways to meet peers.
6. **The prototype was read as a connection tool.** Students named instant messaging, open chat, buddy-up matching, Q&A and a group-assessment space as features that could ease adjustment.
7. **Three levels of support were judged necessary.** The authors frame social, academic and institutional support as jointly required, and warn against service-only chatbot designs.

## What the study measured and found

The study ran in two phases at a British university in London. Phase one followed 45 postgraduate international students from six master's programs in the Branding and Marketing Content area. They completed a Qualtrics survey at the start of term, three months in and six months in, giving 45 complete sets of data at each point and 135 responses in total.

The survey combined three instruments. The Acculturative Stress Scale for International Students had 36 items across seven subscales on a five-point scale, with a Cronbach's alpha of .91 in this study. The Social Connectedness Scale had eight items on a six-point scale, with a Cronbach's alpha of .92; higher scores on it indicate greater disconnectedness. Demographics included a three-item measure of self-perceived English proficiency. Participants were 93% female and 87% single, and Europe and Asia each accounted for 32.5% of the sample under the GLOBE regional classification.

Overall acculturative stress rose from a mean of 3.95 at the start of term to 4.05 at three months and 4.07 at six months. The change across time was statistically significant (F(2, 1) = 4.100, p = .037, eta squared = .339). Change over time also depended on perceived English proficiency (F(14, 7) = 8.032, p < .001, eta squared = .875) and on nationality (F(14, 7) = 3.413, p < .05, eta squared = .749).

Of the seven subscales, only homesickness (means of 2.91, 3.23 and 3.32; F = 6.604, eta squared = .452) and culture shock (3.88, 4.21 and 4.14; F = 5.816, eta squared = .421) changed significantly with time. Students arriving from collectivist cultures showed a significant increase in both.

The correlation between acculturative stress and reduced belonging was .66 at the first measurement, .63 at the second and .59 at the third, all at p < .01. Homesickness was unrelated to belonging at the first two points (r = .25 and r = .21) but correlated with it at six months (r = .41, p < .01). Guilt showed no relationship at the first two points (r = -.02 and r = -.07). The authors acknowledge that a normality assumption was violated for almost all distributions (p < .05) and that a sample of 45 may be too small for the repeated-measures analysis to be fully robust; they defend the design on the grounds that repeated observations on the same students add power.

Phase two comprised 19 semi-structured interviews, each lasting no more than 45 minutes on MS Teams. Students were shown images of prototype features and the transcripts were analyzed with thematic analysis. Interviewees described two distinct networks: family and friends at home, and a developing peer network in the host country. Anxiety about making friends fell as communities formed, and students whose networks included host-country contacts reported less homesickness over time. At the start, forming friendships was the dominant stressor; later, academic work came to the fore.

## The guidelines in concrete terms

Table 10 sets out recommendations in three groups. For social connections, the authors propose tutor-led ice-breaker tasks in open chat areas before students arrive on campus, discussion areas that let newcomers contact peers and tutors in advance, pattern matching to pair students with peers on the same program, and Q&A spaces for induction questions and peer posts. For academic support, they propose pattern matching to pair students with alumni mentors, Q&A for departmental contacts, academic calendars, assessment dates and class times, a balance between automated help and human staff, and a discussion area with a personal tutor. For collaborative learning, they propose dedicated group-assessment areas where students can tag a lecturer, plus pre-session tasks set by the instructor.

The organizing claim is that the technology should connect people to people rather than reproduce the usual person-to-technology interaction. Existing educational chatbots are described as service-oriented, eLearning-oriented or student/teacher-oriented; the authors argue that international students' needs cross all three and call for a mixed-orientation design. The chatbot is explicitly positioned as a complementary resource alongside university services, not a substitute for them.

## What this means for practice

- **Instructors.** Set ice-breaker and peer-contact tasks before induction so that international students can arrive knowing classmates and teaching staff.
- **Faculty developers.** Show staff how to run tutor-led discussion areas and group-assessment spaces, and how to keep human support visible alongside automated answers.
- **Institutions.** Map support to the point in the year when each stressor peaks, rather than concentrating everything in induction week.
- **Researchers.** Treat these guidelines as design hypotheses; the prototype was reacted to in interviews, not deployed or tested for effects on stress.

## Limitations

- **One institution and one field.** All participants were postgraduate students in branding and marketing content at a single London university, and 93% were female.
- **Non-probability sampling.** Phase one used convenience sampling and phase two voluntary response sampling, so the sample may not represent international students generally.
- **Statistical caveats.** The normality assumption was violated for almost all distributions, the sample was 45, and the authors themselves question the robustness of the repeated-measures analysis.
- **No tested intervention.** The prototype was shown as images during interviews; student reactions were recorded, but no version was deployed and no outcome was measured against a comparison group.
- **Self-report measures.** Both main scales rely on students' own ratings, and the interview accounts are retrospective interpretations of change.

## Citation

Studente, S., Garivaldis, F., and Sargent, J. (2026). [Design guidelines for educational chatbots: supporting international students' acculturation in higher education](https://doi.org/10.3389/feduc.2026.1894156). *Frontiers in Education, 11*, 1894156.
