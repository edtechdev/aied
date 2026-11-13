---
title: "Examining the relationships between artificial intelligence literacy, AI-TPACK, job satisfaction, and well-being among teachers through structural equation modeling"
created: "2026-11-13T08:00:00-05:00"
updated: "2026-11-13T08:00:00-05:00"
type: article
published: 2026-06-24
sources: ['raw/papers/kayali-ai-literacy-tpack-wellbeing-2026.md']
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [survey, structural equation modeling]
page_kind: [evaluation]
audience: [instructors, faculty developers, administrators, researchers]
foundations: [ai-literacy, teacher-ai-competency]
technology: [ai-technologies]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-13"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Kayalı, Balat and Yavuz surveyed 350 in-service teachers in Turkey and modeled the chain from [[ai-literacy|AI literacy]] through [[tpack|AI-TPACK]] to job satisfaction and [[well-being]]. AI literacy fed every competence component strongly, but the components then split: AI technological content knowledge raised job satisfaction while AI technological knowledge on its own lowered it. Job satisfaction in turn carried the effect into emotional, psychological and social well-being with no direct paths surviving, so the authors describe satisfaction as the gate through which competence reaches well-being. The practical reading is that pedagogical integration, not technical familiarity, is what makes AI competence feel like a gain rather than a cost.

## Key Findings

1. **AI literacy is the upstream resource.** It predicted every AI-TPACK component strongly, and predicted the traditional knowledge domains more weakly, so literacy supplies the base from which subject-specific AI competence is built.
2. **The component matters more than the total.** AI technological content knowledge — knowing how AI changes a subject and how to choose tools for it — raised job satisfaction. AI technological knowledge by itself lowered it.
3. **Pedagogical knowledge also carried satisfaction.** Of the traditional domains, only pedagogical knowledge was significant; pedagogical content knowledge and subject knowledge were not.
4. **Satisfaction is the only route to well-being.** Job satisfaction predicted emotional, psychological and social well-being, and the competence domains had no significant direct effects once satisfaction was in the model — indirect-only mediation.
5. **Technical knowledge had negative indirect effects on well-being.** The same competence that looks like progress on a training log is associated with lower well-being when it does not make the job more manageable.
6. **The model explains little of satisfaction.** The variance explained for job satisfaction is an order below what the AI competence domains reach, so most of what drives satisfaction lies outside this model.

## The component split

The interesting result is not that [[ai-literacy|AI literacy]] matters. It is that two faces of technological competence point in opposite directions. AI-TK — the technical knowledge of what AI systems are and can do — is associated with lower job satisfaction. AI-TCK — understanding how AI changes the content and practice of a subject, and which tool fits which instructional purpose — is associated with higher satisfaction.

The authors read this through job demands–resources theory: a competence that makes a teacher's professional life more manageable works as a resource, while one that adds an expectation without adding control behaves like a demand. Knowing more about the technology, in that reading, can mean knowing more about what you are not keeping up with.

**The path coefficients.** AI literacy predicted AI-TCK at β = 0.65, AI-TK at 0.66, AI-TPCK at 0.73 and AI-TPK at 0.71 (all p < .001), and PCK at 0.32, PK at 0.35 and SK at 0.40. On satisfaction, AI-TCK was positive at β = 0.41 (p < .001), AI-TK negative at β = −0.30 (p = .02) and PK positive at 0.22 (p = .01), while AI-TPCK (−0.12) and AI-TPK (−0.07) were not significant. Satisfaction then predicted emotional well-being at β = 0.42, psychological at 0.68 and social at 0.57 (all p < .001), with R² = 0.11 for satisfaction against 0.43 for AI-TCK and AI-TK.

That interpretation is a plausible story fitted to a cross-sectional pattern, and the study cannot distinguish it from its reverse — teachers who are unhappy with their professional situation may also be the ones who describe their technical knowledge as high.

## Satisfaction as the gate

The mediation result is the paper's structural claim. Competence did not predict well-being directly; it predicted satisfaction, and satisfaction predicted well-being across all three dimensions. Psychological well-being had the strongest path, which fits the idea that the job's meaning, rather than its pleasantness, is what competence touches.

The low R² for satisfaction is the honest counterweight. Only 11 percent of the variance in job satisfaction is explained, so the model identifies one mechanism while leaving the larger part of the outcome — pay, workload, class size, leadership, subject status — outside it. A reader who takes the chain as the explanation of teacher well-being is overreading a small effect.

## What this means for practice

- **Faculty developers.** Design AI professional development around subject-specific integration rather than tool knowledge. The finding that technical knowledge alone is associated with lower satisfaction is an argument against the survey-course model.
- **Instructors.** Judge a new competence by whether it reduces work or adds a demand. Learning a tool that does not change how a task is done is a cost with no matching resource.
- **Administrators.** Do not treat AI training completion as the outcome. The path to well-being runs through satisfaction with the work, so changes to workload and support are part of the same intervention as the training.
- **Researchers.** Test the direction. A longitudinal design or an intervention that raises AI-TCK specifically would distinguish the resource account from the selection account.

## Limitations

- Cross-sectional survey of 350 in-service teachers in Turkey, analyzed with PLS-SEM, so the directional chain is theorized rather than observed.
- All constructs are self-reported and measured at one time point, which leaves common-method variance and reverse causation open.
- The model explains only 11 percent of job satisfaction, so the mechanism it identifies is small relative to unmeasured workplace factors.
- The teacher level is not separated — in-service teachers across school types are pooled — so level-specific patterns are untested.
- The AI-TPACK instrument measures reported competence, not observed practice, and the study did not test whether satisfaction changes what teachers actually do.

## Citation

Kayalı, B., Balat, Ş., & Yavuz, M. (2026). [Examining the relationships between artificial intelligence literacy, AI-TPACK, job satisfaction, and well-being among teachers through structural equation modeling](https://doi.org/10.1016/j.actpsy.2026.107297). *Acta Psychologica, 268*, 107297.
