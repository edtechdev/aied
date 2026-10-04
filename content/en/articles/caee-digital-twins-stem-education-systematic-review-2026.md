---
title: "Digital Twins in STEM Education: A Systematic Review"
created: "2026-10-04T16:10:00-04:00"
updated: "2026-10-04T16:10:00-04:00"
type: article
sources: ['raw/papers/caee-digital-twins-stem-education-systematic-review-2026.md']
confidence: medium
page_kind: [synthesis]
research_method: [literature review]
discipline: [engineering education, stem education]
level: [higher ed, undergraduate]
audience: [instructors, instructional designers, administrators, researchers]
pedagogy: [experiential-learning, inquiry-based-learning, game-based-learning, collaborative-learning]
technology: [simulation, virtual-and-augmented-reality, educational-robotics, learning-analytics]
assessment: [learning-gains, self-report-measures]
methods: [meta-analysis-systematic-review, usability-research]
institutions: [change-management]
ethics: [digital-divide]
foundations: [computational-thinking]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A PRISMA-based [[meta-analysis-systematic-review|systematic review]] screens 329 records from five databases and lands on just 11 primary studies of Digital Twins in STEM [[higher-ed|higher education]], all published between 2020 and 2025. The architecture picture is fragmented: three-layer models dominate at 36.4% and five-layer models at 27.3%, with CPS and ECPS frameworks at another 36.4%, while 63.6% of implementations run bidirectional data flow. Technically the field converges on cheap, open tooling — Arduino at 63.6%, Unity3D at 54.5%, MQTT at 45.5% — but pedagogically the evidence is thin. Six studies report academic-performance gains and five report [[motivation]] and engagement gains, yet only three (27.3%) reach statistical significance at p < 0.05. The authors frame this as a technical–[[pedagogy|pedagogical]] gap: 100% of studies proved a working prototype, but far fewer tested learning rigorously. Persistent [[usability-research|usability]] problems — development complexity (72.7%), reduced social interaction (54.5%) and absent longitudinal data (81.8%) — keep [[engineering-education|engineering]] classrooms from adopting DTs at scale.

## Key Findings

1. Of 329 records identified across five databases, 10 duplicates were removed, 24 studies met all five inclusion criteria, and 11 primary studies were synthesized after exclusion screening.
2. Three-layer architectures were the most common model (4 of 11 studies, 36.4%), followed by five-layer frameworks (3 of 11, 27.3%); four studies (36.4%) framed their work as CPS or ECPS.
3. Bidirectional data flow appeared in 7 of 11 implementations (63.6%). MQTT was the leading IoT protocol (5 studies, 45.5%), serial communication appeared in 6 (54.5%), and Arduino (63.6%) and Unity3D (54.5%) led the hardware and 3D tooling.
4. Six studies (54.5%) reported academic-performance gains and five (45.5%) reported motivation or engagement gains, but only three studies (27.3%) reported statistical significance at p < 0.05.
5. Among the significant results, Baranov et al. found a 15.2% increase in [[summative-assessment|final exam]] scores (p < 0.01, Cohen's d = 0.68), Hu a 23.7% pre-to-post knowledge gain (t(87) = 12.45, p < 0.001), and Lin et al. 18.5% higher physics scores (p = 0.03).
6. Reported usability challenges concentrated on development complexity (8 studies, 72.7%), reduced social interaction (6 studies, 54.5%), scalability limits of 1–3 concurrent users (5 studies, 45.5%), and perceptible latency above 500 ms (4 studies, 36.4%).
7. Methodological weaknesses ran through the sample: 8 studies (72.7%) had fewer than 50 participants, 9 (81.8%) used single-term interventions, 5 (45.5%) relied only on Likert self-reports, and 4 (36.4%) had no control group.

## How the review selected its evidence

The review follows PRISMA and the five-stage process Borrego et al. describe for engineering education research. Searches across the ACM Digital Library, IEEE Xplore, Taylor & Francis Online, Wiley Online Library and Scopus returned 329 records; 10 duplicates were removed, leaving 319 for title and abstract screening. Only 56 records sat in a higher-education context and 31 reported measurable pedagogical outcomes, so the five inclusion criteria intersected at 24 studies. Exclusion screening removed nine — seven pure software [[simulation|simulations]] without live hardware synchronization and two non-STEM applications — and consensus triangulation among the authors removed four further borderline cases, leaving 11 primary studies. Each was scored from 0 to 3 on objectives clarity, design appropriateness and analysis transparency; all reached at least 2/3, with studies relying on descriptive statistics or small samples penalized on transparency. The narrow final set is the review's own evidence base, and the authors treat it as a diagnostic of how few classroom-deployed, hardware-synchronized replicas exist rather than as a representative sample.

## Architectures and synchronization strategies

Architecturally the field is heterogeneous. Three-layer models — physical, communication and virtual — appeared in 4 of 11 studies (36.4%), while five-layer frameworks that add data-processing and service layers appeared in 3 (27.3%). A further 4 studies (36.4%) framed their work as cyber–physical or educational cyber–physical systems with closed-loop feedback and AI-driven learning assistants. The tooling converged on low-cost, open [[edtech-platform|platforms]]: Arduino in 63.6% of studies and Unity3D in 54.5%. Bidirectional data flow was the norm, appearing in 7 of 11 implementations (63.6%). MQTT was the most-used IoT protocol (45.5%), valued for its lightweight publish–subscribe design, while serial communication appeared in 54.5% and HTTP or WebSocket in 36.4%. Reported latencies varied widely by protocol and architecture, and 4 studies (36.4%) reported perceptible cloud latency above 500 ms. The review reads latency as a backend performance problem that authors fixed through software optimization, not as a driver of student demotivation, and it flags the human tolerance for lag during remote hardware operation as an untested question.

## The technical–pedagogical gap

The review's central diagnosis is a technical–pedagogical gap. Every one of the 11 studies demonstrated a working prototype with real-time synchronization, but only 3 (27.3%) reported statistically significant learning gains at p < 0.05. Six studies reported academic-performance improvements and five reported motivation or engagement gains, yet several of those rested on self-report or lacked controls. The three significant results were Baranov et al.'s 15.2% gain in final exam scores (p < 0.01, Cohen's d = 0.68), Hu's 23.7% pre-to-post knowledge improvement (t(87) = 12.45, p < 0.001), and Lin et al.'s 18.5% higher physics scores (p = 0.03). Where studies explained outcomes, they pointed to interface design rather than architectural depth: dense dashboards demanding simultaneous monitoring of multiple data streams, not five-layer backends, drove [[cognitive-offloading|cognitive overload]], while streamlined interfaces reduced the burden of manual hardware programming and complex mathematics. Seven studies (63.6%) grounded their interventions in [[learning-theories|learning theory]], most often [[constructivist|constructivism]] (5 studies), [[inquiry-based-learning|inquiry-based learning]] (3) and [[game-based-learning|gamification]] (2), but the review notes that cognitive load theory and social constructivism were barely examined.

## Usability and institutional barriers

Usability findings are consistent across the sample. Development complexity was the most-cited technical barrier (8 studies, 72.7%), with prototype timelines of 3 to 12 months for educators without programming expertise. Reduced social interaction was the most-cited pedagogical challenge (6 studies, 54.5%), followed by absent haptic feedback (3 studies, 27.3%) and cognitive overload (2 studies, 18.2%). Scalability is bounded by hardware: physical entities allowed only 1–3 concurrent users in 5 studies (45.5%). Four studies (36.4%) reported initial hardware costs between \$2000 and \$15,000 per functional workstation node, and none produced a return-on-investment analysis, though the review benchmarks that entry cost against physical characterization rigs costing from \$30,000 to over \$150,000. Interoperability standards are absent — every implementation used its own data schemas and protocols — and only 2 studies (18.2%) tested hybrid models that combine DT remote access with periodic hands-on sessions. The review proposes an Educational Digital Twin Markup Language, total-cost-of-ownership studies and edge computing as remedies, none of which the included studies had yet tried.

## What this means for practice

- **Instructors.** Use DTs for asynchronous pre-class exploration and reserve synchronous time for collaborative troubleshooting. Because reduced social interaction was the most-cited pedagogical challenge (54.5%), add structured peer activities rather than assuming a 3D environment supplies collaboration on its own.
- **Instructional designers.** Start with a modular, [[open-source]] stack — Arduino or Raspberry Pi hardware, Unity3D for [[visualization]], MQTT for communication — and deploy one laboratory module at a time. Build [[learning-analytics|learning analytics]] in from the start so interaction data can feed [[formative-assessment|formative assessment]].
- **Program leaders and administrators.** Budget for the operating costs the review flags, not just the entry price. Hardware runs from \$2000 to \$15,000 per node and no included study produced a return-on-investment figure, so treat cost-effectiveness claims as unproven.
- **Researchers.** The 72.7% small-sample rate and 81.8% single-term rate explain why only 27.3% of studies reached significance. Use controlled, multi-semester designs with validated instruments and standardized outcome measures before claiming that DTs improve learning.

## Limitations

- The evidence base is 11 studies, which the authors say prevents meta-analytic aggregation; the review's percentages are counts of studies, not pooled effect sizes, and the review itself could not compute a combined estimate.
- Publication bias is likely: all 11 included studies reported some degree of benefit, raising the possibility that null or negative findings are underrepresented in the literature.
- Outcome measures were too heterogeneous to synthesize. [[learning-gains|Academic performance]], motivation and cognitive skills were assessed inconsistently, which the authors say limited how accurately effect sizes could be determined.
- Temporal relevance is a stated risk: the review covers 2020–2025, and the specific tools it describes (particular Unity3D versions and Arduino models) may already have been replaced, limiting generalizability. The manuscript was prepared with Microsoft Copilot used for translation and linguistic refinement.
- Only 3 of 11 studies (27.3%) reported statistical significance, so most pedagogical claims rest on descriptive or [[self-report-measures|self-reported]] results rather than controlled comparisons, and several of the reported gains came from quasi-experimental designs without control groups.

## Citation

Pelayo-González, G., Iniguez-Carrillo, A. L., Gaytán-Lugo, L. S., & Maciel-Arellano, R. (2026). [Digital Twins in STEM Education: A Systematic Review](https://doi.org/10.1002/cae.70280). *Computer Applications in Engineering Education, 34*, e70280.