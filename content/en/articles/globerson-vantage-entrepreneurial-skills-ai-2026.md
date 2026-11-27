---
title: "Improving Entrepreneurial Skills by Practicing with AI"
created: "2026-11-24T09:45:00-05:00"
updated: "2026-11-27T14:10:00-05:00"
type: article
authors: ["Amir Globerson", "Anisha Choudhury", "Anna Iurchenko", "Ashley Hemmy", "Avinatan Hassidim", "Cathy Cheung", "Christine Ryan", "Darlene Lacey", "Elizabeth Kim", "Femi Olanubi", "Gabby Espinosa", "Gaby Andrews", "Gal Elidan", "Hannah Lieber", "Hairong Mu", "Jason Delgatto", "J.D. LaRock", "Jeannine Schloss", "Katherine Chou", "Nir Kerem", "Niv Efron", "Rajvi Kapadia", "Rena Levitt", "Rotem Yulzary", "Shashank Agarwal", "Tracey Lee-Joe", "Victor Martinez", "Yael Haramaty", "Yishay Mor", "Yossi Matias"]
venue: "arXiv preprint (cs.CY)"
evidence_context: educational
foundations: [critical-thinking]
pedagogy: [creativity, collaborative-learning, active-learning]
technology: [generative-ai, pedagogical-agent]
assessment: [feedback, formative-assessment, rubrics]
methods: [rct, mixed-methods-research]
discipline: [business education]
audience: [instructors, educational technology developers, researchers]
page_kind: [evaluation]
research_method: [experiment]
sources: ["raw/papers/globerson-vantage-entrepreneurial-skills-ai-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-24"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Globerson and colleagues (2026) adapt Vantage, a Google Research platform, into an interactive practice environment for [[business-education|entrepreneurship]] in which students work through [[authentic-assessment|authentic tasks]] alongside simulated AI peers. In a [[rct|randomized controlled trial]] embedded in Network for Teaching Entrepreneurship summer BizCamps, students using Vantage scored 7.1 percentage points higher on their Capstone Business Plans than controls with access to standard AI tools (67.6% versus 60.5%), a moderate advantage. The effect was consistent across the four randomized sites that contributed outcome data (+2.0 to +9.9 percentage points), and adjusting for site barely changed it (+6.67 percentage points). The authors present this as preliminary evidence that orchestrated [[pedagogical-agent|AI teammates]] can support short-term performance on tasks requiring [[critical-thinking|critical thinking]], [[creativity]], and collaboration, while noting that only 52 students supplied usable outcome data.

*[[mixed-methods-research|Mixed-methods]] evaluation of a randomized controlled trial at NFTE BizCamps: nine sites, five randomized, four contributing Capstone Business Plan scores (36 treatment, 16 control). Treatment ran six [[curriculum-design|curriculum]] tasks with AI teammates plus pre- and post-tests; controls saw only the tests. Capstone scores were rated with site-specific [[rubrics]] and standardized as a percentage.*

## Key Findings

1. **Vantage students outscored controls on the Capstone Business Plan.** Treatment averaged 67.6% across 36 students against 60.5% across 16 controls, a difference of +7.1 percentage points.
2. **The effect survived site adjustment.** Holding site constant left the estimate at +6.67 percentage points, and the adjusted analysis explained far more of the variation in scores than the unadjusted one.
3. **Every randomized site pointed the same way.** Site-level differences ranged from +2.0 to +9.9 percentage points, and no site had controls ahead.
4. **The reported gain exceeds prior [[benchmark|benchmarks]].** The authors note that effect sizes on entrepreneurial mindset outcomes in earlier entrepreneurship education research are much smaller.
5. **The impact sample was small.** Only 37 students completed both the pre- and post-Vantage test, and 24 had valid skill scores on all assessed sub-skills at both time points; per-site control groups held 2–5 students.
6. **The practice design keeps the AI from doing the work.** Teammates act as collaborators who push back rather than assistants; an in-platform tool may process information and answer scenario questions but is instructed not to perform the task's cognitive work or supply direct answers.
## How the practice environment works

A Vantage session runs through setup, conversation, submission, and feedback. The student is placed in a realistic scenario with a stakeholder role — auditing a startup's expense list, say, or helping founders articulate a brand purpose — and is joined by one or more AI teammates occupying other roles in the same situation. The conversation lasts roughly twenty minutes, during which teammates contribute ideas, ask clarifying questions, and disagree rather than completing the assignment. The student then submits a written deliverable and receives two kinds of score: a Submission Score from 1 to 3 against the task rubric, and Skill Scores from 1 to 4 on assessed sub-skills such as Evaluate & Judge and Active Listening, each accompanied by a strength and a growth tip drawn from quoted turns of the student's own conversation.

This is a deliberate departure from the usual pattern in which an AI answers a learner's questions. Here the AI teammates drive the situation so that the student must demonstrate a skill, which is what makes the exchange practice rather than tutoring. Feedback is shown on the six practice tasks but withheld on the pre- and post-tests, so the assessments stay comparable across conditions.

## What the trial can and cannot support

The headline result is a moderate, statistically significant gain on a consequential product — a business plan judged by teachers and volunteer judges using site-specific rubrics, standardized to a percentage for cross-site comparison. The effect's consistency across four independent sites is its strongest feature, since a single-site trial could reflect local conditions. Against that stands the sample size: 52 students in the impact analysis, with control groups of two to five, and a wider program in which only five of nine sites implemented randomization at all. The authors are explicit that these are preliminary findings.

The rubric-based scoring also raises a measurement question. Because site-specific judges rated the plans, standardization assumes the rubrics are comparable, and site fixed effects explain far more variance than treatment does. The direction of the effect is stable, but any single site estimate is too imprecise to stand alone. The study's contribution is therefore best read as a feasibility-and-efficacy signal for a design that pairs learners with AI collaborators, not as a settled estimate of how much such practice improves [[formative-assessment|durable skills]].

## What this means for practice

- **Instructors.** Give students practice tasks in which the AI pushes back rather than helps, so that the learner has to exercise judgment. A teammate that completes the work removes the practice.
- **Faculty developers.** Teach the sub-skills explicitly — evaluating evidence, active listening, generating ideas — and let students see scores tied to their own words, which is what makes the feedback legible.
- **Educational technology developers.** Keep answer-producing tools separate from practice environments, and instruct the general-purpose tool not to do the cognitive work of the task.
- **Researchers.** Report attrition and per-site samples in embedded RCTs. An effect pooled over four small sites is informative about direction, not about magnitude.

## Limitations

- The impact sample is 52 students (36 treatment, 16 control) drawn from four sites, with per-site control groups of only 2–5 students, so single-site estimates are unstable.
- Only five of nine BizCamp sites implemented randomization, and one randomized site contributed no Capstone Business Plan scores, leaving the study dependent on a subset of the program.
- Just 37 students completed both the Vantage pre- and post-test and only 24 had valid skill scores at both time points, which limits the skill-score analyses relative to the business-plan outcome.
- Capstone Business Plans were rated by different teachers and volunteer judges using site-specific rubrics, so scoring standards may not be fully comparable despite standardization.
- The intervention bundles six practice tasks, AI teammates, and in-platform feedback, so the trial cannot attribute the gain to any single component.
- The study reports short-term capstone performance; it provides no evidence about whether the practiced skills persist or transfer beyond the program.

## Citation

Globerson, A., Choudhury, A., Iurchenko, A., Hemmy, A., Hassidim, A., Cheung, C., Ryan, C., Lacey, D., Kim, E., Olanubi, F., Espinosa, G., Andrews, G., Elidan, G., Lieber, H., Mu, H., Delgatto, J., LaRock, J. D., Schloss, J., Chou, K., Kerem, N., Efron, N., Kapadia, R., Levitt, R., Yulzary, R., Agarwal, S., Lee-Joe, T., Martinez, V., Haramaty, Y., Mor, Y., & Matias, Y. (2026). [Improving entrepreneurial skills by practicing with AI](https://arxiv.org/abs/2611.02016). *arXiv preprint arXiv:2611.02016.*
