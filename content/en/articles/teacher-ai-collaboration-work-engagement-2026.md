---
title: "The Double-Edged Sword Effects of Teacher–AI Collaboration on Work Engagement: A Self-Determination Theory Perspective"
created: "2026-09-30T12:34:01-04:00"
updated: "2026-09-30T12:34:01-04:00"
type: article
sources: ['raw/papers/10.3390_bs16071118.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
level: [higher ed]
audience: [administrators, faculty developers, instructors, researchers]
foundations: [human-ai-collaboration, teacher-ai-competency, teacher-role]
pedagogy: [self-determination-theory, motivation, well-being]
technology: [generative-ai]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Sun and colleagues surveyed 468 university teachers in Guangdong Province, China, in a three-wave time-lagged design with two-week intervals, measuring [[human-ai-collaboration|teacher–AI collaboration]], psychological availability, work alienation, digital competency and work engagement. Drawing on [[self-determination-theory]], they tested a dual-pathway model in which AI collaboration raises engagement through psychological availability but lowers it through work alienation, with digital competency as a boundary condition. [[teacher-role|Teacher]]–AI collaboration was positively related to work engagement overall, and both indirect paths were significant and opposite in sign. Digital competency strengthened the gain path and weakened the loss path. Because the data are self-reported and non-experimental, the direction of causation cannot be established.

## Key Findings

- **Teacher–AI collaboration was positively related to work engagement.** In the regression model, teacher–AI collaboration predicted work engagement with a coefficient of 0.24 (p < 0.001), and the bootstrap total effect was 0.24 (95% CI [0.18, 0.30]).
- **The gain path ran through psychological availability.** Teacher–AI collaboration predicted psychological availability (0.66, p < 0.001), psychological availability predicted work engagement (0.29, p < 0.001), and the indirect effect was 0.19 (95% CI [0.13, 0.25]).
- **The loss path ran through work alienation.** Teacher–AI collaboration predicted work alienation (0.14, p < 0.001), work alienation predicted lower work engagement (−0.27, p < 0.001), and the indirect effect was −0.03 (95% CI [−0.06, −0.02]).
- **The two paths partly offset each other.** The total indirect effect was 0.16 and the direct effect was 0.08, both positive, leaving the net relationship positive.
- **Digital competency moderated both links.** The slope from teacher–AI collaboration to psychological availability rose from 0.54 at low digital competency to 0.61 at the mean and 0.68 at high; the slope to work alienation fell from 0.38 to 0.27 to 0.17 across the same levels.
- **The moderated mediation followed the same pattern.** The indirect effect through psychological availability moved from 0.16 to 0.18 to 0.20 from low to high digital competency, while the indirect effect through work alienation moved from −0.10 to −0.07 to −0.05.

## How the study was done

The sample comprised 468 matched responses from 600 [[self-report-measures|questionnaires]] distributed across ten universities, an effective response rate of 83%. The sample was 220 female participants (47%) and 248 male (53%); most respondents were aged 26–45, the largest group being 36–45 (N = 140, 29.9%), and most had 6–10 years of teaching experience (N = 147, 31.4%). Teacher–AI collaboration, digital competency and demographics were collected at Time 1, psychological availability and work alienation at Time 2, and work engagement at Time 3, with two-week intervals. Scales were adapted from established instruments, and internal consistency was high: Cronbach's alpha was 0.91 for collaboration, 0.96 for psychological availability, 0.93 for work alienation, 0.92 for engagement and 0.91 for digital competency, measured on Likert scales.

The analysis combined confirmatory factor analysis, hierarchical regression and bootstrapping with 5000 resamples. A five-factor measurement model fit best (χ2/df = 1.9, IFI = 0.94, TLI = 0.93, CFI = 0.94, RMSEA = 0.04), better than the four-factor, three-factor, two-factor and one-factor alternatives. Harman's single-factor test returned a first component explaining 31.46% of variance, below the 40% threshold, which the authors read as evidence against severe common method bias.

## What the mechanism means

The paper's contribution is treating [[human-ai-collaboration]] as more than tool use and asking why the same collaboration can leave teachers either energized or detached. In its [[self-determination-theory]] account, AI support can satisfy needs for autonomy, competence and relatedness — expanding instructional choices, easing complex tasks and freeing attention for student interaction — which shows up as psychological availability and then as engagement. The same technology can frustrate those needs when it encroaches on lesson design, assessment and feedback, making teachers feel less autonomous, less expert and less connected to the human meaning of teaching, which shows up as [[motivation|work alienation]] and then as lower engagement. Both mechanisms fitted the data, so the average positive effect masks two opposing processes running underneath it.

## What this means for practice

- **Faculty developers.** Treat AI capability as autonomy support, not tool training: high [[teacher-ai-competency|digital competency]] flipped the alienation slope down from 0.38 to 0.17 and lifted the availability slope from 0.54 to 0.68, so development should cover output evaluation, limitations and ethical judgment, not just operation.
- **Administrators.** Protect the final teaching decision. The loss path was driven by AI shaping work processes, so institutions should position AI output as material for professional review rather than a ready-made decision.
- **Instructors.** Watch the alienation signal. Work alienation was negatively related to engagement (−0.27, p < 0.001); if AI use starts to feel like managing machine output, that is the mechanism the paper says suppresses engagement.
- **Institutions.** Evaluate AI adoption by psychological outcomes, not usage counts — whether AI use increases teachers' sense of control, competence and teaching meaning, alongside the engagement (0.24) and indirect effects.

## Limitations

- The sample came from university teachers in one Chinese province, so regional and cultural context may limit generalizability; the authors call for replication in other provinces, countries and [[higher-ed|higher education]] systems.
- All measures were self-reported, and although the time-lagged design reduces common method bias, social desirability and subjective perception may still shape the responses.
- Teacher–AI collaboration was measured as a single overall construct, so the study cannot separate how AI use in lesson preparation, feedback, assessment or student support produces different outcomes.
- The design is non-experimental and observational, so no causal direction is established between collaboration, the two mediators and engagement.

## Citation

Sun, J., Xing, Y., Yuan, G., & Cai, Q. (2026). [The Double-Edged Sword Effects of Teacher–AI Collaboration on Work Engagement: A Self-Determination Theory Perspective](https://doi.org/10.3390/bs16071118). *Behavioral Sciences*, 16(7), 1118.