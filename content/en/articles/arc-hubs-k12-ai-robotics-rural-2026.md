---
title: "Teaching AI, Robotics, & Community: A Hubs-Based K-12 Education Framework for Reaching Rural Schools"
type: article
created: "2026-09-17T09:40:00-04:00"
updated: "2026-09-21T12:00:00-04:00"
pedagogy: [career-development-and-readiness, learning-by-teaching]
technology: [educational-robotics]
ethics: [digital-divide, equity-in-ai-education]
sources: ['raw/papers/arc-hubs-k12-ai-robotics-rural-2026.md']
confidence: high
research_method: [design and evaluation study]
level: [k 12, teacher education]
audience: [instructors, administrators]
discipline: [stem education, cs education]
---

> **Synthesis:** Barriers to [[k-12|K–12]] robotics and [[ai-education|AI education]] are usually framed as [[curriculum-design|curriculum]] or kit-access problems; ARC's diagnosis is narrower — the binding constraint is sustained local technical mentorship, distributed geographically. Rural FIRST LEGO League participation in Indiana fell in the 2020 remote season and never recovered; urban participation did. In ARC, colleges train [[higher-ed|undergraduates]] as mentors and host workshops for nearby teams; mature school programs become secondary hubs that mentor further schools. A one-university trial created three rural teams and raised mentoring confidence; a spatially explicit Markov [[simulation]] projects far greater reach. The evidence is feasibility-level, not causal.

## The rural robotics access gap in Indiana

FIRST's competition ladder — FIRST LEGO League, FIRST Tech Challenge and FIRST Robotics Competition — supplies pathways but not local expertise. Teams depend on a few volunteers, and dispersed rural schools may have no one to start a program: interested students and a willing [[teacher-role|teacher]] are not enough without mentorship, and teacher knowledge shapes whether [[educational-robotics|robotics]] is sustained.

Indiana shows it: FLL participation fell sharply in the 2020 remote season; urban participation recovered, rural participation did not — staying near its post-2020 level in 2025–2026, well below its 2017 peak. Without early exposure, students are less likely to understand how AI and robots work and more likely to become passive consumers than creators — putting the problem inside the [[digital-divide|access-and-capability divide]] this wiki tracks, where geography, not devices, is the operative variable, and a second cost: undergraduate [[cs-education|computer science]] students get few chances to learn by teaching.

## The ARC framework: primary hubs, workshops, secondary hubs

ARC's unit is the workshop: hands-on, mentor-led, several teams at once, each with a small group of mentors and its own game arena. Mentors target the skills a team needs to progress in the game, so motor control, sensors, planning and logic follow; FLL teams get foundational programming, while FTC and FRC teams can require [[agency|autonomy]], computer vision and AI.

Primary hubs are colleges or other STEM institutions running the ARC course, training undergraduate mentors and hosting workshops. The trial course was a three-credit offering meeting weekly: four preparation weeks (kits, a mobile robot, programming, teaching methods), the first K–12 workshop in week five, then weekly supervised mentoring with a 30-minute seminar. Seminars covered safety, [[ethics]], [[ai-literacy|AI literacy]], autonomous systems and [[explainable-ai|explainability]]; mentoring and participation were 70% of the grade, plus a 4–8 page essay (20%) and an 8–10 minute presentation (10%).

Secondary hubs are what makes it scale: a mature school with a self-sustaining program hosts workshops for nearby teams, with experienced K–12 students as peer mentors under a teacher or a few undergraduates — extending [[learning-by-teaching|near-peer mentoring]] into K–12. Each new hub can help nearby teams mature into further hubs, so reach spreads past any university's catchment. The components that matter are not the lecture plan: mentor preparation, recurring supervised workshops, and an experienced mentor who can answer what fixed material cannot.

## The trial deployment

The trial tested whether undergraduates could be prepared quickly enough to mentor usefully, and whether a new program could attend a hub regularly. It ran at one large Indiana university ringed by rural space, with three FLL teams from a rural school in its first FLL year, whose teachers had been unsure about starting. Nine undergraduates enrolled, and the instructor had 12 years mentoring competitive high-school robotics teams. Anonymous end-of-program surveys used retrospective pre-then-post ratings that blunt response-shift effects, and K–12 outcomes were parent-reported; seven of nine undergraduates and four [[parents-and-families|parents]] responded.

Mentor gains clustered around teaching capability and community connection: community connection rose 2.14 points, ahead of teaching technical concepts (+1.29), adapting explanations (+1.14) and small-group management (+1.00). Parent-proxy ratings moved comparably: programming-resource access +2.25, robot programming knowledge +2.00, practice with [[problem-solving|problem solving]] +1.25 and robotics-club enjoyment +1.00, while plans to continue and interest in further [[stem-education|STEM]] education moved only 0.25 each. Parents rated mentors 4.75 for enjoyment and 4.50 for support and competition help; three teams competed at a 29-team qualifier, two reaching the upper half and one the top quartile.

## Key Findings

1. Feasibility holds on both sides of the loop: undergraduates can be prepared in a short course to mentor directly, a new rural program can run on regular hub support, and two of three teams reached the upper half of a 29-team qualifier.
2. Undergraduate gains were largest where the design aims them: community connection rose 2.14 points, ahead of teaching technical concepts (+1.29), adapting explanations (+1.14) and small-group management (+1.00).
3. Parent reports moved most on resources rather than commitment: programming-resource access rose 2.25 points and robot programming knowledge 2.00, while plans to continue and further-STEM interest moved 0.25 each.
4. Natural growth is slow: a 0.01229 start probability, 0.28947 early-to-mature maturation and 0.23684 early closure yield 161 programs after 40 years across 1,925 Indiana schools.
5. At optimism level 6 the simulation yields 992 programs and reaches 1,415 schools, with 61% of rural schools and 341 rural programs, against 60 with ARC off and 118 with primary hubs alone.
6. At the most favorable level 12 it yields 1,638 programs (about 85% of schools) and reaches 1,829 (about 95%), over ten times natural growth; level 1 still yields 338.
7. Ablations show the mechanisms are complementary: at level 6, primary hubs alone give 323 programs, a primary hub with secondary-hub formation 551, and both 992; sensitivity testing ranks supported secondary-hub formation the strongest long-term driver, with support capacity and reach radius shifting year-40 counts by roughly 430 and 302 schools.

## Modeling regional growth: what the simulation supports

Growth is modeled as a discrete-time, spatially explicit Markov process over schools and potential college hubs, with nine legal school states combining program maturity and ARC reach. Natural dynamics came from a 2021–2025 linkage of FIRST records to Indiana schools; ARC-specific parameters cannot be estimated from a one-year trial, so they vary across 12 optimism levels, each simulated 40 years over 1,000 Monte Carlo runs and three ablations. Reachability and capacity are local — a school is reachable only if an active hub can serve it, and reachable schools go to their nearest covering hub — so the projections are not free scaling. The authors treat the model as evidence about the shape of growth, not exact counts.

## What this means for practice

- **Educators.** Target the technical mentorship gap rather than curriculum or kits, and make mentor preparation a credit-bearing course: three credits weekly, four preparation weeks on kits, a mobile robot, youth-protection training and a practice teaching exercise, with the first K–12 workshop in week five.
- **Educators.** Pair flexible mentoring with milestone checklists and fallback activities — five of six improvement responses asked for more structure and checkpoints — and plan for balancing participation when one student dominates.
- **Administrators.** Budget for the physical layer: FLL kits, programming devices, the competition field, workspace, youth-protection procedures, and game arenas at the hub so teams travel to one site rather than mentors driving to many schools.
- **Administrators.** Treat mature school programs as deliberately [[career-development-and-readiness|developed]] infrastructure rather than local accident: at optimism level 6, a primary hub with secondary-hub formation produced 551 programs against 323 for primary hubs alone and 992 when both operate.
- **Program leaders.** Make secondary-hub formation the outcome worth measuring, since it makes reach non-linear, and keep the experienced-mentor requirement.

## Limitations

- The trial ran at one Indiana university over a single semester with three FIRST LEGO League teams from one rural elementary school in its first year, so it shows feasibility and perceived benefit, not program effects.
- Mentor results rest on seven of the nine enrolled undergraduates and K–12 results on four parents, all from anonymous surveys using retrospective pre-then-post ratings the authors call self-assessments subject to recall bias.
- The children themselves were never surveyed: their outcomes are parent-proxy reports, and one parent had discussed the survey with the child while two had not.
- There was no control condition, and every ARC-specific parameter in the [[simulation]] had to be varied across 12 optimism levels instead.

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
