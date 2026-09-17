---
title: "Teaching AI, Robotics, & Community: A Hubs-Based K-12 Education Framework for Reaching Rural Schools"
type: article
created: "2026-09-17T09:40:00-04:00"
updated: "2026-09-17T09:40:00-04:00"
tags: [educational-robotics, digital-divide, k-12, equity-in-ai-education, learning-by-teaching, career-development-and-readiness, teacher-education, stem-education, cs-education]
pedagogy: [learning-by-teaching]
technology: [educational-robotics]
stakeholders: [career-development-and-readiness]
ethics: [digital-divide, equity-in-ai-education]
sources: ['raw/papers/arc-hubs-k12-ai-robotics-rural-2026.md']
confidence: high
research_method: [design and evaluation study]
level: [k 12]
audience: [educators, administrators]
discipline: [stem education]
category: [equity]
---

> **Synthesis:** The barriers to [[k-12|K–12]] robotics and [[ai-education|AI education]] are usually described as problems of [[curriculum-design|curriculum]], kits or competition access, but ARC's diagnosis is narrower and more actionable: the binding constraint is sustained local technical mentorship, and it is distributed geographically. Rural FIRST LEGO League participation in Indiana fell in the 2020 remote season and never recovered, while urban participation did. ARC answers with a hubs model — colleges run a course that prepares [[higher-ed|undergraduates]] as mentors and host workshops for nearby teams, and mature school programs become secondary hubs that mentor further schools, producing a self-reinforcing loop whose reach can grow super-linearly. A one-university trial created three rural FLL teams and moved undergraduate mentoring confidence, with the largest shift in connection to the local community (1.86 to 4.00 on a five-point scale), while a spatially explicit Markov [[simulation]] of Indiana projects 992 school programs after 40 years under moderate assumptions against 161 with no ARC. The evidence is feasibility-level, not causal, but the framework's value is that it treats mentorship capacity — not equipment — as the thing to be engineered.

## The rural robotics access gap in Indiana

FIRST offers a ladder of team-based competition — FIRST LEGO League for younger students, FIRST Tech Challenge for middle and high school, FIRST Robotics Competition at larger scale — and related work has produced AI and [[ethics]] curricula for middle and high school. What the ladder does not supply is local programming and robotics expertise. Many teams depend on a small number of volunteers, and geographically dispersed rural schools may have no one with the technical knowledge to start a program, let alone sustain one; a school can have interested students and a willing [[teacher-role|teacher]] and still lack the mentorship to form a team. The literature the paper cites points the same way: teacher knowledge shapes the adoption and continued use of [[educational-robotics|educational robotics]], and robotics preparation is particularly limited among rural educators.

Indiana makes the pattern visible. FLL participation fell sharply in the 2020 remote season in both urban and rural areas; since then urban participation has gradually recovered with new and returning schools, while rural participation has not — in the 2025–2026 season it remained close to its post-2020 level and well below its 2017 peak, with recovered participation concentrated in and around urban areas and major STEM campuses. The counterfactual cost is what the authors emphasize: without early exposure, students are less prepared to understand how AI and robots work and more likely to become passive consumers rather than active creators or critical evaluators. That framing places the problem squarely inside the [[digital-divide|access-and-capability divide]] the knowledge base tracks, with geography rather than device ownership as the operative variable — and with a second, less obvious cost, since undergraduate [[cs-education|computer science]] students also have few structured opportunities to deepen their own understanding through teaching.

## The ARC framework: primary hubs, workshops, secondary hubs

ARC's basic unit is the workshop: hands-on, mentor-led, several teams attending at once, each working directly with a small group of mentors, with game arenas provided so students work on their own robots and the current season's tasks. Content is not taught in the abstract. Mentors target the skills a team needs to make progress in the game — for instance the concepts required to make a robot navigate to a ball and push it stably toward a goal — with motor control, sensors, planning and logic following from the task. FLL teams receive foundational robotics and programming; FTC and FRC teams can require [[agency|autonomy]], computer vision and AI depending on the game and the team. The format is also a logistical solution: several teams travel to a nearby hub rather than one mentor traveling repeatedly to many schools, so a limited number of mentors supports more teams while each still receives direct help.

Primary hubs are colleges or other STEM institutions that run the ARC course, train undergraduates as mentors, and host workshops. The course in the trial deployment was a three-credit undergraduate offering meeting once weekly for two hours: four preparation weeks (FLL kits, building a small mobile robot, robotics education and FIRST, mandatory youth-protection training, FLL programming, practical methods for teaching programming, and a practice teaching exercise), a first K–12 workshop in week five, then roughly 90 minutes of supervised mentoring plus 30 minutes of continuing seminar each week, ending with project support and presentations. Seminar topics were deliberately portable — citizen science, robotics safety and ethics, FTC/FRC, human–robot teaming, [[ai-literacy|AI literacy]], then autonomous systems and AI safety and [[explainable-ai|explainability]] — and another university is expected to substitute locally relevant AI and robotics research. Assessment matched the design: mentoring and participation accounted for 70% of the grade, with a final 4–8 page essay (20%) and an 8–10 minute presentation (10%) asking students to connect course topics to their own mentoring and to a community-relevant problem.

Secondary hubs are the mechanism that makes the framework scale rather than merely exist. A mature school with a self-sustaining program and enough internal technical knowledge can host workshops for nearby teams, with experienced K–12 students acting as the main peer mentors and a teacher or a few undergraduates providing oversight. This extends [[learning-by-teaching|near-peer mentoring]] into the K–12 system itself, and because each new secondary hub can help nearby teams mature into further hubs, reach propagates beyond any university's catchment — the source of the claimed super-linear growth. It also draws directly on an existing FIRST norm of experienced teams helping less experienced ones.

The paper is explicit that the essential components are not the lecture plan: a hub needs mentor preparation followed by recurring, supervised workshops, and at least one experienced robotics mentor who can respond to problems the fixed material does not anticipate — a role the authors say cannot be replaced by lesson content, because teams differ in technical problems, pace, competition readiness and group dynamics. Physical requirements scale with the supported program, from FLL kits, programming devices, the current competition field and game materials, workspace, supervision and youth-protection procedures, up to the fabrication, maintenance, space and transportation demands (plus mandatory safety training for power tools) of FTC and FRC.

## The trial deployment

The trial tested two components: whether undergraduates could be prepared quickly enough to be useful mentors, and whether a new robotics program could attend and be supported regularly through a primary hub. It ran at one large Indiana university in a small urban area surrounded by substantial rural space. Three FLL teams from a single school in a rural part of the surrounding county participated — the school's first year with an FLL program, and its teachers had previously been uncertain about starting one because of limited mentorship access. Nine undergraduates enrolled; the instructor had 12 years of prior experience mentoring competitive high-school robotics teams. The teams traveled to the university, which supplied two FLL game arenas.

Evaluation used anonymous end-of-program surveys with retrospective pre-then-post ratings, a design chosen to reduce response-shift effects (both ratings use the same post-program frame of reference) at the acknowledged cost of recall and current-state bias. K–12 outcomes were collected through parent reports rather than by surveying children. Seven of the nine undergraduates and four [[parents-and-families|parents]] completed the surveys.

The mentor results cluster around teaching capability and community connection. Confidence teaching technical concepts rose from 3.00 ± 1.15 to 4.29 ± 0.49; confidence adapting explanations from 3.29 ± 1.11 to 4.43 ± 0.53; confidence managing small groups from 3.00 ± 1.15 to 4.00 ± 0.58; finding teaching and mentoring enjoyable and meaningful from 3.43 ± 0.79 to 4.57 ± 0.53. The largest single change was connection to the local community, from 1.86 ± 1.07 to 4.00 ± 0.82 — a shift the framework was designed to produce, since it treats technical mentorship as a meaningful local role precisely to sustain volunteering after the course ends. Interest in AI, robotics and graduate study also increased, though by smaller margins (0.43, 0.43 and 0.57 points).

Parent-proxy ratings of the participating students moved comparably: basic robot programming knowledge from 2.00 ± 1.41 to 4.00 ± 1.41, access to needed programming resources from 2.00 ± 0.82 to 4.25 ± 0.50, and opportunities to practice programming and [[problem-solving|problem solving]] from 3.00 ± 0.82 to 4.25 ± 0.96, with enjoyment of robotics club rising from 3.25 ± 0.50 to 4.25 ± 1.50. Changes in plans to continue robotics and interest in further [[stem-education|STEM]] education were smaller. Parents rated their children's experience with the mentors highly: 4.75 ± 0.50 for enjoying work with the mentors, and 4.50 ± 0.58 each for feeling supported and encouraged and for helping the team prepare for competition. The three new teams also competed at a 29-team regional FLL qualifier, with two reaching the upper half at some point during the competition, including one that briefly reached the top quartile; final standings placed two teams in the third quartile and one near the top of the fourth.

## Key findings

1. The trial establishes feasibility on both sides of the loop: undergraduates can be prepared within a short course to take on direct mentoring roles, and a newly formed rural robotics program can receive regular technical support through a primary hub.
2. Undergraduate gains were largest where the framework aims them: community connection rose 2.14 points on a five-point scale (1.86 to 4.00), ahead of confidence teaching technical concepts (+1.29), adapting explanations (+1.14) and small-group management (+1.00).
3. Parent reports moved most on resources and knowledge rather than on commitment: access to programming resources rose 2.25 points (2.00 to 4.25) and robot programming knowledge 2.00 points (2.00 to 4.00), while plans to continue robotics club and interest in further STEM education changed by only 0.25 points each.
4. Teams were competitive in their first season: two of three reached the upper half of a 29-team regional qualifier at some point, one briefly touching the top quartile, though final standings were lower.
5. Indiana's observed natural dynamics are slow: with a natural no-program-to-early-program start probability of 0.01229, an early-to-mature maturation probability of 0.28947 and an early-program closure probability of 0.23684, the ARC-off baseline produces a mean of 161 school programs after 40 years across 1,925 public schools.
6. Under moderate assumptions (optimism level 6) the simulation produces 992 school programs and reaches 1,415 schools — approximately 74% of Indiana public K–12 schools — with 61% of rural schools reached and 341 rural programs, against 60 under ARC off and 118 with primary hubs alone.
7. Under the most favourable assumptions (level 12) the model produces 1,638 school programs (about 85% of schools) and reaches 1,829 schools (about 95%), more than ten times the natural-growth projection; even the least favourable level yields 338 programs, more than double the baseline.
8. The two hub mechanisms are complementary rather than redundant: at level 6, primary hubs alone produce 323 programs and an initial primary hub with secondary-hub formation produces 551, against 992 when both mechanisms operate — primary hubs seed growth across regions while secondary hubs extend it recursively.
9. Sensitivity analysis identifies Supported secondary-hub formation as the strongest long-term driver: varying it, per-hub support capacity and reach radius across their assumed ranges changed year-40 program counts by approximately 430, 338 and 302 schools respectively, with Morris screening agreeing that early growth is driven by primary-hub activation and hub formation from existing mature programs.

## Modeling regional growth: what the simulation supports

The growth model is a discrete-time, spatially explicit Markov process with annual transitions over individual schools and potential college hubs. Each school carries two state variables — program maturity (no program, early, mature) and ARC status (unreachable, reachable, supported, secondary hub), giving nine legal combinations, since a supported school must have an active program and a hub must have a mature one. Colleges are modelled separately as active or inactive primary hubs. Reachability is computed from geography: a school is reachable if at least one active primary or secondary hub can serve it, which is the step that lets new hubs expand the network's footprint. Natural program dynamics (start, maturation, closure, backslide) were estimated from a conservative 2021–2025 linkage of FIRST records to Indiana public schools, while every ARC-specific parameter — launch probability, support capacity, maturation and closure multipliers under support, hub formation rates, primary-hub activation and cessation — had to be varied because a single-year trial cannot estimate them. Twelve ordered optimism levels span those ranges, each simulated for 40 years over 1,000 Monte Carlo runs, with three ablations formed by zeroing selected transitions.

Two features of the model deserve emphasis when reading the headline numbers. First, capacity is enforced locally: reachable schools without programs are assigned to their nearest covering hub with an available launch slot, and continuing supported schools have priority for support capacity, so the projections are not free scaling. Second, the authors treat the model as stronger evidence about the *shape* of growth than about exact long-horizon counts — the structural assumptions, not the fitted parameters, are doing most of the work, and the ablations are what make the claim about complementarity credible.

## Lessons, limitations and what to carry into practice

The trial's own lessons are about mentor preparation rather than content. Sessions were intentionally flexible because teams differed in pace, technical needs and group dynamics, but five of six substantive improvement responses asked for more structure — clearer pacing, checkpoints, milestones — and the authors conclude that flexible mentoring should be paired with milestone checklists and fallback activities, consistent with challenges reported in related service-learning programs. Mentors also struggled to maintain balanced participation when individual students dominated programming or robot work despite turn-taking and role rotation, so future preparation should include practical strategies for enforcing those structures respectfully, redirecting students and coordinating with team coaches.

The evidentiary limits are stated frankly. Seven undergraduate and four parent respondents, retrospective pre-post self-reports, and no control condition mean the results are initial evidence of feasibility and perceived benefit, not estimates of program effects or a causal evaluation. The simulation's ARC-specific parameters remain unmeasured; the model does not represent how a college decides to start or stop participating; and the trial cannot observe whether supported programs mature into durable secondary hubs — the mechanism the whole design depends on. Future multi-site, multi-year deployments are intended to follow programs through maturation and estimate those transition parameters directly.

For institutions, the transferable design decisions are these: position the intervention at the mentorship gap rather than at curriculum or hardware; make mentor preparation a credit-bearing course with visible incentive (70% of the grade for mentoring and participation) and give it physical space, game arenas and youth-protection infrastructure; preserve the requirement for at least one experienced mentor who can improvise when the material does not cover a problem; and treat mature school programs as infrastructure that can be [[career-development-and-readiness|developed deliberately]] rather than as an accident of local enthusiasm. The framework's most interesting claim for policy is that the sequence — colleges seed, schools propagate — is what produces non-linear reach, which makes secondary-hub formation the outcome worth measuring in any future deployment.

## Connected Concepts

- [[educational-robotics]] — Competition robotics programs and their mentorship constraint
- [[digital-divide]] — Rural–urban access geometry as the operative divide
- [[k-12]] — The school system the framework targets
- [[equity-in-ai-education]] — Who gets robotics and AI mentorship, and where
- [[learning-by-teaching]] — Undergraduates and K–12 peer mentors learn through mentoring
- [[career-development-and-readiness]] — Robotics participation and STEM pathways
- [[teacher-education]] — Preparing teachers and mentors for technical instruction
- [[stem-education]] — The disciplinary context of the competition pathway
- [[cs-education]] — Undergraduate mentoring as structured computing practice
- [[computational-thinking]] — Programming, sensors and planning in the robot task
- [[project-based-learning]] — Learning organized around a real competitive project
- [[human-ai-collaboration]] — Human–robot teaming as a seminar topic and practice
- [[ai-literacy]] — AI topics embedded in the mentor course
- [[professional-training]] — Youth protection and teaching-skills preparation

## Connected Articles

- [[white-wu-robotics-ai-education-2026]] — Robotics and AI in Education
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks: a project-based robotics course
- [[educational-robotics-pathways-2026]] — Pathways to learning AI-powered educational robotics
- [[computational-thinking-educational-robotics-secondary-2026]] — Computational thinking and educational robotics in secondary STEAM
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly Studio: block programming with a conversational agent
- [[microbit-robotics-machine-learning-teacher-training-2026]] — Teacher training for micro:bit robotics and machine learning
- [[k12-teachers-ai-companion-literacy-2026]] — K–12 teachers' AI companion and literacy development
- [[frontier-ai-redirect-skeptical-rural-staff-2026]] — Rural school staff and skepticism toward frontier AI
- [[ai-divide-ses-personality-primary-education-2026]] — SES, personality and AI divides in primary education
- [[multilingual-adaptive-learning-nigeria-2026]] — Adaptive learning in multilingual low-resource contexts

## Citation

Jacobson, M. J., Rodriguez-Rivera, G., Drineas, P., & Xue, Y. (2026). [*Teaching AI, Robotics, & Community: A Hubs-Based K-12 Education Framework for Reaching Rural Schools*](https://arxiv.org/abs/2609.18072). arXiv preprint arXiv:2609.18072.
