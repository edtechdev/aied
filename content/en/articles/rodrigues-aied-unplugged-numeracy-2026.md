---
title: "AIED unplugged, teacher workload, and numeracy learning: a clustered quasi-experimental mixed-methods study"
created: "2026-09-29T09:20:31-04:00"
updated: "2026-09-29T09:26:59-04:00"
type: article
published: "2026"
foundations: [ai-education, teacher-role, limitations-in-aied-research]
pedagogy: [professional-training, student-engagement]
technology: [intelligent-tutoring, knowledge-tracing, student-modeling, human-in-the-loop-ai]
assessment: [learning-gains, automated-assessment, item-response-theory]
methods: [mixed-methods-research, quantitative-research]
institutions: [educational-policy-ai]
ethics: [digital-divide, equity-in-ai-education, global-south]
research_method: [quasi-experiment]
discipline: [math education]
level: [primary education]
audience: [instructors, researchers, administrators]
page_kind: [evaluation]
sources: ['raw/papers/rodrigues-aied-unplugged-numeracy-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-29"
    agent: hermes-agent
reviewed_by: [editor]
source_depth: [full text]
verified: [citation, numbers, links]
---
> **Synthesis:** Rodrigues and colleagues report what they describe as the first quasi-experimental evaluation of an "AIED unplugged" (AIED-U) system in authentic classrooms, testing a paradigm in which the teacher acts as the proxy between learners and the AI: students keep working with paper and pen while the teacher photographs their solutions, and the system returns [[personalized-learning|personalized]] exercise lists, [[automated-assessment|automated assessment]], and error-specific feedback. Across 19 Brazilian public-school classes randomly assigned to a control, a teacher-training, or a training-plus-system condition, students taught by trained teachers outperformed the control group, while the training and experimental conditions did not differ from each other. Perceived workload did not differ significantly across conditions, yet workload was negatively associated with learning gains, and the system produced a positive indirect effect on those gains through reduced teacher effort. The authors read the pattern as preliminary evidence that [[teacher-role|teacher-mediated AI]] can reach students it never touches directly, where the [[digital-divide|digital divide]] rules out one device per student.

## Key Findings
- Students taught by trained teachers outperformed the control group in the training condition (estimated difference 15.15, 95% CI [0.84, 31.10]) and the experimental condition (12.31, 95% CI [0.34, 21.86]).
- Adding the AIED-U system to that training produced no further direct learning gain: the experimental and training conditions did not differ (−4.33, 95% CI [−17.29, 7.23]).
- Perceived workload on the raw NASA-TLX did not differ significantly across conditions on any of the six subscales after adjustment, though the experimental group rated Mental Demand and Effort lowest.
- Teacher workload was negatively associated with student [[learning-gains|learning gains]], most clearly for Mental Demand (coefficient −2.569) and Effort (−2.436).
- The system had a positive indirect effect on learning gains through reduced Effort (3.649, 95% CI [1.097, 6.398]), which remained significant after p-value adjustment.
- Teachers valued ready-made exercise lists and progress reports, but reported that photographing work, waiting for processing, and correcting recognition errors added time and attention.
- Of 320 consenting students, 221 completed both tests; 99 (30.9%) were absent for one of them, and attrition did not differ across conditions (Fisher's exact test, p = 0.125).

## Where the learning advantage came from
The study ran in four Brazilian public urban schools across 19 third- and fourth-year elementary classes, allocated to control (3 classes), training (9), or experimental (9) conditions; two experimental teachers withdrew before student consent was collected, leaving 19 teachers. Learning gains were the difference between [[item-response-theory|Item Response Theory]]-based pre- and post-test proficiency scores normalized to a 0 to 100 scale. The control condition recorded a mean learning gain of −11.13, while training (5.30) and experimental (0.84) groups moved upward. Because the training and experimental conditions did not differ, the authors trace the advantage over usual practice to training rather than to the technology, concluding that "the technology alone does not replace the fundamental need for teacher preparation." The training was a single 50-minute session on planning, delivering, and assessing lessons through a competence-based framework aligned with Brazil's national curriculum.

## Workload: a short, inconclusive test
No NASA-TLX subscale separated the conditions after adjustment; Physical Demand carried the only unadjusted signal (p = 0.038, adjusted p = 0.269). With three, nine, and seven teachers per condition, the authors caution that the null may reflect either no effect or an effect the sample was too small to detect, and warn against reading it as definitive. What held together was the relationship structure: robust multilevel models linked higher workload to lower learning gains, and a mediation analysis found the experimental condition reduced teacher Effort, which was in turn associated with better gains. The authors label this mechanism exploratory, because workload was observed alongside the post-test rather than manipulated.

## Teachers describe a conditional tool
Thematic analysis of the interviews produced a mixed picture. Teachers valued preparation support — "We spend hours and hours looking for activities, and in the blink of an eye, it already provides everything better for us" — and reported that students were motivated by activities "created and will be corrected by technology." Yet the same accounts describe added labor: photographing sheets, waiting for processing, re-checking recognition failures (one teacher counted the app recognizing three of four items), reevaluating assessments click by click, and managing a class while operating a phone. Reports sometimes mismatched what teachers knew of their classes, eroding [[trust]]. One teacher's summary captures the paper's own framing: "If it really comes to work, and a few corrections are made, it will be very useful for teachers, who are already overloaded."

## What this means for practice
- **Instructors.** Treat teacher training as the active ingredient: the learning advantage over usual practice traced to preparation, not to the system, and the training and experimental conditions were indistinguishable on gains.
- **Instructors.** Budget for the workflow around the tool, not just the tool — photographing solutions, waiting for processing, and fixing recognition errors were the stages teachers said cost the most time.
- **Administrators and institutions.** Pair any deployment of [[teacher-role|teacher-mediated AI]] with sustained professional development and realistic time for the added capture-and-verify step, because workload was negatively associated with learning gains here.
- **Researchers.** Treat the effort-mediated indirect effect as a hypothesis to confirm rather than a result to build on; the authors call for replications over longer interventions and with more robust recognition components.

## Limitations
- The teacher sample is very small: 3 teachers in control, 9 in training, and 7 in experimental, which the authors say leaves the workload null open to both no effect and insufficient statistical power.
- The intervention lasted four lessons over two weeks in a single domain (numeracy) and one national context (Brazil), so the authors frame the estimates as preliminary, requiring confirmation at a larger scale.
- Schools were selected purposively through the research team's network, and 99 of 320 consenting students (30.9%) missed one test and could not contribute a learning gain.
- The mediation analysis is exploratory, since workload was observed and reported alongside the post-test rather than manipulated.

## Citation
Rodrigues, L., Guerino, G., Silva, T. E., Bianchini, L., Alves, M., Chalco Challco, G., Vieira, T., Marinho, M., Macario, V., Dermeval, D., Bittencourt, I. I., & Isotani, S. (2026). [AIED unplugged, teacher workload, and numeracy learning: a clustered quasi-experimental mixed-methods study](https://doi.org/10.1186/s40561-026-00465-x). *Smart Learning Environments*.
