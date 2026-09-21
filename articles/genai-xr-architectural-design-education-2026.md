---
title: "Generative AI and Extended Reality in Collaborative Architectural Design Education: An Exploratory Studio Study"
created: "2026-09-15T10:30:00-04:00"
updated: "2026-09-19T07:04:04-04:00"
type: article
foundations: [design-thinking]
pedagogy: [collaborative-learning, creativity, self-efficacy]
technology: [generative-ai, virtual-and-augmented-reality]
methods: [mixed-methods-research]
sources: ['raw/papers/genai-xr-architectural-design-education-2026.md']
confidence: high
research_method: [quasi-experiment, interviews, thematic analysis]
discipline: engineering education
audience: [instructors, instructional designers, researchers]
level: [higher ed]
---

> **Synthesis:** This mixed-methods studio study deployed GenARch — an in-house [[generative-ai]] plus multi-user [[virtual-and-augmented-reality]] pipeline — inside a real undergraduate architectural design studio to test whether the combination improves [[collaborative-learning]], teamwork and design outcomes. Twenty-seven students in seven self-selected teams were assigned at team level, with four teams (N = 16) using GenARch and three (N = 11) continuing the normal course workflow as a control. The [[quantitative-research|quantitative]] results were mixed rather than positive: GenARch showed significantly larger relative pre–post declines in design [[self-efficacy]] confidence (β = −1.675) and outcome expectancy (β = −2.088), a significant positive difference-in-differences only for the conflict-management teamwork subscale (β = 0.479), and no significant difference in blinded panel ratings of team presentations. Interviews explain the pattern through complementary technology roles — GenAI for externalizing tentative ideas and generating visual references, XR for spatial, contextual and scale-based evaluation — alongside frictions around control, dimensional fidelity, shared attention and motion comfort. The authors conclude that the educational value of these tools is phase-dependent and inseparable from the interaction problems students encountered.

## Key Findings

1. Thirty-five sophomore architectural engineering students were enrolled and formed nine self-selected teams before recruitment; two teams declined because at least one member reported severe motion sickness, leaving seven teams that were randomly assigned at team level — four GenARch teams (3–4 students each, N = 16) and three control teams (N = 11).
2. Baseline digital-tool experience was low: 81.5% of the full cohort reported never or limited familiarity with GenAI and 70.4% reported never or limited familiarity with XR, with prior use mainly personal or academic rather than professional or design-oriented; group comparability checks (Fisher's exact, Fisher–Freeman–Halton, Mann–Whitney U) found no significant between-condition differences (p > 0.05) except lower baseline self-efficacy anxiety in the GenARch group (p = 0.005).
3. Difference-in-differences regression (participant-clustered standard errors) found larger relative declines for GenARch in self-efficacy confidence (β = −1.675, 95% CI [−3.101, −0.248], p = 0.021) and outcome expectancy (β = −2.088, 95% CI [−3.414, −0.762], p = 0.002).
4. The only positive significant teamwork estimate was for Team-Q "Manages Potential Conflict" (TQ_D, β = 0.479, 95% CI [0.096, 0.862], p = 0.014); no significant DiD estimates appeared for attitudes toward collaborative learning, overall teamwork quality, or the other teamwork subscales.
5. Blinded panel evaluation (two professors plus five senior architectural engineering students, 1–5 rubric) gave GenARch a lower median overall presentation score of 3.45 [2.89, 3.92] versus 3.87 [3.63, 3.88] for control on all five criteria — but none of the between-condition differences were statistically significant, and GenARch showed greater between-team variability.
6. Inter-rater agreement was low to moderate: Kendall's W was 0.256 for Design Innovation, 0.234 for Architectural Vision and Concept, 0.466 for Response to Site/Climate/Lighting, 0.368 for Holistic Integration and 0.387 for [[design-thinking|Design Process]] and Documentation, rising to 0.342, 0.316, 0.553, 0.438 and 0.523 after a criterion-specific leave-one-out adjustment.
7. Among the four GenARch teams, WBLT perceived tool quality correlated perfectly with panel presentation score (r = 1.00, p < 0.001), with learning and engagement each at r = 0.40; the authors explicitly retain this as an exploratory, hypothesis-generating association only.
8. Four GenARch teams took part in semi-structured group interviews of roughly 35 minutes, transcribed and analyzed with Braun and Clarke's six-phase reflexive thematic analysis; internal consistency of the survey instruments ranged from Cronbach's α = 0.589 to 0.965.
9. Intervention dosage was small relative to the course: a 15-minute tutorial plus 35 minutes of ideation and asset generation in class 1, a 10-minute Arkio tutorial plus an 80-minute immersive [[visualization]] activity in class 2, with both conditions continuing to use conventional modeling tools throughout.
10. Students reported concrete fidelity failures — one stated "I asked it to make a 10 feet wall of 3D model, it wasn't 10 feet" — plus missing or outdated site context, latency of seconds to minutes per generated asset, and disrupted shared attention: one team reported communication "didn't really work out" because members "were looking at different areas".

## The GenARch pipeline and study design

GenARch was developed in consultation with the studio instructors and inserted into an existing course project rather than replacing it, functioning as a technology probe during conceptual ideation and collaborative visualization. The in-house platform used synchronised web and Meta Quest 3 XR clients on a Python/FastAPI backend, with DALL·E 3 for text-to-image generation and Shap-E, TripoSR and Tripo3D for 2D-to-3D reconstruction, plus Photon networking and Meta spatial anchors for multi-user alignment. Generated assets landed in a shared gallery so students could initiate generation without waiting inside a headset, and selected assets were exported to the commercial multi-user XR platform Arkio for tabletop and full-scale inspection, collaborative manipulation, site and context viewing, and lighting-based shadow analysis.

The evaluation combined pre/post surveys, blinded presentation rating and group interviews — a [[mixed-methods-research]] design chosen because quantitative and [[qualitative-research|qualitative]] sources were treated as complementary. Instruments covered prior GenAI/XR experience, design self-efficacy adapted from Carberry et al., attitudes toward collaborative learning, Team-Q for individual teamwork skills, and the WBLT Evaluation Scale as a post-use measure of [[self-report-measures|perceived learning]] support, tool quality and engagement; presentation raters could not infer which teams had used GenARch. The authors flag that because five of the seven raters were senior students, they describe this group as an evaluation panel rather than a panel of professional experts. Institutional review approval (IRB-24-0780) was obtained, participation was voluntary and had no effect on grades, and when a student opted out the entire team was excluded from data collection. In Week 4 the tools were released to the control students for [[equity-in-ai-education|educational equity]].

## Complementary roles: externalization versus spatial evaluation

The qualitative data converge on a division of labor between the two [[ai-technologies|technologies]]. [[generative-ai]] did the externalization work: generated images gave teams a concrete artifact to point at, compare and argue over, as one student described generating an image, saying "you guys look at this window, it's kind of cool", and getting the reply "yeah, it looks stupid. We would talk about it". The value was the discussion the image enabled rather than the image itself. XR did the evaluation work: entering a shared spatial model at full scale gave a clearer sense of proportion and spatial presence than screen-based representations — "it was very useful to see the actual sizes of things" — and became more valuable once a meaningful 3D artifact existed to inspect for scale, adjacency, lighting and site context.

Students' needs shifted across the design stages in a way that made the tooling paradoxically hardest at both ends. At very early ideation the team "weren't quite at the stage of having ideas for what we wanted the specific building to look like yet", so there was nothing to encode in a prompt. Later, richer concepts made [[prompt-engineering|prompting]] easier but raised expectations that the system follow explicit constraints — and when precision mattered, students returned to SketchUp and Revit. Generation latency pushed asset creation to happen before or in parallel with immersive inspection, and the dual web/XR interface was a deliberate response both to that latency and to headset discomfort.

## Control, authorship and the black-box problem

Concerns about [[creativity]], authorship and control recurred across the interviews. Several students framed creativity as a core human contribution to architecture and preferred GenAI as a supplementary tool rather than an autonomous generator of form; one summarized the tension as AI feeling like it was "taking away our creativity". XR was experienced as tangible and directly controllable whereas GenAI was more often described as a "black box", and students were more skeptical of outputs whose inspiration source could not be identified or reproduced — prompt history gave traceability but not reproducibility.

The design implications students articulated were specific: editable components rather than whole-model accept-or-reject; reproducible generation; more accurate site context; the ability to build from existing geometry such as their own SketchUp blocks, sketches and photographs; and workflows that first establish context and then generate smaller editable components, mirroring how architectural design actually develops through repeated refinement. The authors read this as evidence that the educational role of GenAI in design depends not only on generation quality but on whether students can understand, modify and take responsibility for the resulting representations.

## Interpretation, limitations and what remains unresolved

The authors offer three non-exclusive explanations for the declines in confidence and outcome expectancy and the null presentation results. First, students were simultaneously learning unfamiliar interaction methods and judging whether outputs were appropriate for their design, so cognitive and attentional cost may have displaced the design task. Second, direct experience may have made the tools' limitations more visible to students who entered with limited prior GenAI and XR experience — a calibration effect rather than a demotivation. Third, GenARch supported only selected ideation and visualization activities while both conditions relied on conventional tools for final development, so the panel scores reflect the broader course process rather than the quality of any GenARch artifact. The study cannot distinguish among these explanations.

The limitations are stated plainly: a small single-studio sample with limited statistical power; intact self-selected teams whose pre-existing dynamics may have shaped teamwork outcomes; two teams lost to motion sickness; a short intervention involving two unfamiliar technologies with extra GenARch-specific tutorials; technical limitations in 2D-to-3D generation, scale fidelity, latency and contextual data that were inseparable from the educational experience; low-to-moderate inter-rater agreement based on only seven team products; correlations resting on four GenARch teams; and no systematic observation or reflective-journal data, leaving the qualitative analysis dependent on retrospective group-interview accounts. One notable negative finding for platform design is that giving every participant an individual headset did not by itself produce coordinated collaboration — shared attention had to be actively maintained, and teams sometimes resorted to taking turns or working individually.

Future work proposed is to refine GenARch on interaction [[usability-research|usability]], dimensional fidelity, controllability, traceability, shared attention and motion comfort, then evaluate it through longitudinal and repeated deployments across multiple studios with richer process measures. The broader argument is that multi-user access alone does not guarantee [[group-work]], and that integration decisions should consider when each technology is introduced, how students move between representations, and how team collaboration and designer [[agency]] are sustained.

## What this means for practice

- **Instructors.** Sequence the tools to the [[design-thinking|design stage]] rather than deploying both at once: students had nothing to encode in a prompt at the earliest ideation stage, and [[virtual-and-augmented-reality|XR]] became valuable only once a 3D artifact existed to inspect for scale, adjacency, lighting and site context.
- **Instructors.** Budget for the learning curve before judging the tools, because GenARch teams showed larger relative declines in design [[self-efficacy]] confidence (β = −1.675) and outcome expectancy (β = −2.088) while simultaneously learning two unfamiliar interaction methods.
- **Designers.** Ship editable, component-level generation with reproducible prompts and accurate site context; students asked to build on their own SketchUp blocks, sketches and photographs rather than accept or reject a whole generated model.
- **Designers.** Do not treat one headset per student as a solution to collaboration: with every member equipped, teams reported shared attention breaking down, with one team saying communication "didn't really work out" because members "were looking at different areas."
- **Researchers.** Keep conflict management in the teamwork instrument — it produced the only significant positive difference-in-differences estimate (β = 0.479) — and treat the tool-quality correlations from four GenARch teams as hypotheses rather than findings.

## Limitations

- Twenty-seven students in seven self-selected teams (N = 16 GenARch, N = 11 control) remained after two of nine teams declined because at least one member reported severe motion sickness; the authors state this small sample from a single [[engineering-education|design studio]] limits statistical power.
- The intervention was short: a 15-minute tutorial plus 35 minutes of ideation and asset generation in class 1, and a 10-minute tutorial plus an 80-minute immersive activity in class 2, with both conditions using conventional modeling tools for final development.
- Presentation ratings came from seven raters, five of them senior students, with low-to-moderate inter-rater agreement (Kendall's W between 0.234 and 0.466 across criteria) on only seven team products, and the WBLT–presentation correlation rests on four GenARch teams.
- No systematic observation or reflective-journal data were collected, so the qualitative analysis relies on retrospective group-interview accounts, and baseline self-efficacy anxiety was already lower in the GenARch group (p = 0.005).

## Connected Concepts

- [[generative-ai]]
- [[virtual-and-augmented-reality]]
- [[collaborative-learning]]
- [[design-thinking]]
- [[creativity]]
- [[self-efficacy]]
- [[higher-ed]]
- [[engineering-education]]
- [[student-experience]]
- [[project-based-learning]]
- [[mixed-methods-research]]
- [[self-report-measures]]
- [[group-work]]
- [[visualization]]
- [[embodied-learning]]
- [[arts-design-and-media-education]]
## Connected Articles

- [[genai-architectural-design-studios]] — Development and applications of Generative AI in architectural design studios
- [[ai-interior-design-malaysia-2026]] — Artificial Intelligence as Catalyst and Contested Terrain: Transforming Interior Design Practice, Pedagogy, and Professional Regulation in Malaysia
- [[rana-genai-design-thinking-2025]] — Generative AI in Design Thinking Pedagogy: Enhancing Creativity, Critical Thinking, and Ethical Reasoning in Higher Education
- [[multi-site-vr-immersive-learning]] — Design and Implementation of a Real-time Multi-site Immersive Learning System Using Photon Fusion
- [[mixed-reality-engineering-learning]] — Visualizing Engineering Fundamentals: Design of Mixed Reality and Physical Toolkits for Effective Learning
- [[trikonet-trivalence-co-creativity-2026]] — TriKoNet: The Trivalence Model of Potential Co-Creativity in Socio-Technical Networks
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers

## Citation

Yao Xiao, Max Chen, Yichen Li, Nathaniel Powers, Maxwell Wiesenfeld, Gillian Smith, Soroush Farzin, and Shichao Liu (2026). [*Generative AI and Extended Reality in Collaborative Architectural Design Education: An Exploratory Studio Study*](https://arxiv.org/abs/2609.13494). arXiv preprint.
