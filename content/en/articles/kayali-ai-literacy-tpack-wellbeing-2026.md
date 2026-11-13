---
title: "Examining the relationships between artificial intelligence literacy, AI-TPACK, job satisfaction, and well-being among teachers through structural equation modeling"
created: "2026-11-13T08:00:00-05:00"
updated: "2026-11-13T10:45:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-13"
    agent: hermes-agent
verified: [citation, numbers]
---
> **Synthesis:** Kayalı, Balat and Yavuz surveyed 350 teachers in Turkey and modeled how [[ai-literacy|AI literacy]], AI-TPACK, job satisfaction and [[well-being]] connect. Literacy fed every competence component, but the components then split: knowing how AI changes a subject and how to teach it raised satisfaction, while technical knowledge of AI on its own lowered it, and satisfaction carried whatever effect reached well-being. AI [[educational-development|professional development]] earns its keep when it changes how a task is done, not when it adds another tool to keep up with.

## Key Findings

1. **AI literacy is the upstream resource** — it predicts AI-specific competence strongly and traditional subject and [[pedagogy|pedagogical]] knowledge more weakly, making it a base rather than a substitute for professional knowledge.
2. **The component matters more than the total** — [[discipline-specific-aied|subject-specific]] AI knowledge, the kind that connects a tool to a discipline and a lesson, is associated with higher job satisfaction.
3. **Technical knowledge alone goes the other way** — knowing what AI systems are and can do, without a pedagogical use for it, is associated with lower satisfaction.
4. **Generic pedagogical knowledge also helps** — of the traditional domains, only pedagogical knowledge carried satisfaction; subject knowledge and pedagogical content knowledge did not.
5. **Satisfaction is the only route to well-being** — with satisfaction in the model, competence domains have no direct effect on emotional, psychological or social well-being.
6. **The model explains little of satisfaction** — most of what makes teachers satisfied with their work lies outside the competence chain, so the study identifies a mechanism rather than the main cause.

## Two kinds of technological knowledge

The interesting result is not that AI literacy matters. It is that two faces of technological competence point in opposite directions. AI-TK, the technical knowledge of what AI systems are and can do, is associated with lower job satisfaction. AI-TCK, understanding how AI changes the content and practice of a subject and which tool fits which purpose, is associated with higher satisfaction.

The coefficients are worth reporting precisely. Literacy predicted AI-TCK at β = 0.65, AI-TK at 0.66, AI-TPCK at 0.73 and AI-TPK at 0.71, all p < .001, against weaker paths to pedagogical content knowledge at 0.32, pedagogical knowledge at 0.35 and subject knowledge at 0.40. On satisfaction, AI-TCK was positive at β = 0.41 and AI-TK negative at β = −0.30, with pedagogical knowledge positive at 0.22. AI-TPCK and AI-TPK were not significant.

The authors read the split through job demands–resources theory: a competence that makes professional life more manageable works as a resource, while one that adds an expectation without adding control behaves as a demand. Knowing more about the technology, in that reading, can mean knowing more about what you are not keeping up with.

## Why integrated knowledge did not pay off

The null paths are as informative as the significant ones. [[tpack|AI-TPACK]]'s highest-order component, AI-TPCK, and AI-TPK did not predict satisfaction, and neither did pedagogical content knowledge or subject knowledge. The authors explain this through enactment: teachers may hold integrative knowledge yet be unable to convert it into a rewarding professional outcome because of infrastructure, time or restricted opportunity to implement.

That qualifies the assumption that more AI-TPACK competence will produce better professional outcomes. A competence confers resource value only when it can be used in daily practice; knowledge that cannot be deployed neither adds resources nor imposes demands, so its net association approaches zero. The implication is uncomfortable for programs that count completion: the same literacy that shows up as progress on a log can coexist with no change in how the job feels.

## Satisfaction is the gate, and a narrow one

Competence did not predict well-being directly. Satisfaction predicted emotional well-being at β = 0.42, psychological at 0.68 and social at 0.57, and the competence domains reached well-being only through it: indirect-only mediation. AI-TCK's indirect effects ran from 0.18 to 0.28 across the three dimensions; AI-TK's ran from −0.13 to −0.20.

The honesty is in the variance. The model explains 11 percent of job satisfaction, and out-of-sample predictive relevance for well-being is at or near zero, even though the paths from satisfaction to well-being are substantial. The authors say plainly that most of what determines [[teacher-role|teacher]] well-being lies outside their model — pay, workload, class size, leadership, subject status. Satisfaction is a mechanism the study can see, not the main cause it can claim.

## What this means for practice

- **Instructors:** Judge a new AI competence by whether it reduces work on a real task; a tool that does not change how you plan, teach or assess adds a demand without a resource.
- **Faculty developers:** Build AI professional development around subject-specific lesson design and collaborative inquiry rather than tool tours; the survey-course model is the one associated with lower satisfaction.
- **Administrators:** Measure AI integration by changes in workload and role clarity as well as adoption; training completion is not the outcome, and satisfaction with the work is the pathway the model finds.
- **Researchers:** Test the direction with a [[longitudinal-research|longitudinal design]] or an intervention that raises AI-TCK specifically, since a cross-section cannot separate the resource account from the selection account.

## Limitations

- Cross-sectional survey of 350 in-service teachers in Turkey analyzed with PLS-SEM, so the directional chain is theorized rather than observed.
- All constructs are [[self-report-measures|self-reported]] at one time point, leaving common-method variance and reverse causation open.
- The model explains only 11 percent of job satisfaction, and predictive relevance for well-being is near zero, so the mechanism it identifies is small against unmeasured workplace factors.
- The AI-TPACK instrument measures reported competence, not observed practice, and results are not broken down by school type, so level-specific patterns are untested.

## Citation

Kayalı, B., Balat, Ş., & Yavuz, M. (2026). [Examining the relationships between artificial intelligence literacy, AI-TPACK, job satisfaction, and well-being among teachers through structural equation modeling](https://doi.org/10.1016/j.actpsy.2026.107297). *Acta Psychologica, 268*, 107297.
