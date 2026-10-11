---
title: "Multidimensional engagement effects of generative AI adoption among minority ethnic international students in UK higher education"
created: "2026-10-11T08:05:00-04:00"
updated: "2026-10-11T08:05:00-04:00"
type: article
sources: ['raw/papers/bjet-genai-engagement-minority-ethnic-students-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
level: [higher ed, undergraduate, graduate]
audience: [instructors, administrators, researchers, faculty developers]
pedagogy: [student-engagement, student-experience, motivation]
technology: [generative-ai, llm]
assessment: [assessment, self-report-measures]
methods: [quantitative-research]
foundations: [ai-literacy, learner-identity]
ethics: [equity-in-ai-education, inclusive-learning, differential-effects-across-learner-groups, culturally-relevant-pedagogy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-11"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Drawing on an extended [[technology-acceptance-model|UTAUT]] model combined with a four-strand [[student-engagement]] framework, this study surveyed 270 minority ethnic international students across seven UK [[business-education|business schools]] and found that [[generative-ai]] use was positively associated with cognitive, behavioral, emotional and — most strongly — agentic engagement. Facilitating conditions emerged as the strongest predictor of intention to use, and female, low-experience and postgraduate students showed stronger effects along several adoption paths. The authors frame the results as evidence for [[equity-in-ai-education]], arguing that institutions should target individual access gaps instead of assuming that generative AI benefits all students uniformly.

## Key Findings

1. Across 270 minority ethnic international students at seven UK business schools, facilitating conditions were the strongest predictor of intention to use generative AI (β = 0.369), ahead of social influence (β = 0.281), effort expectancy (β = 0.175) and performance expectancy (β = 0.143).
2. Intention positively predicted self-reported use frequency (β = 0.400), while facilitating conditions also shaped use directly (β = 0.204), indicating a dual pathway from institutional and personal resources to actual generative AI use.
3. Generative AI use was positively associated with all four engagement strands, most strongly with agentic engagement (β = 0.429), then behavioral (β = 0.383), emotional (β = 0.371) and cognitive engagement (β = 0.329).
4. The model explained substantial variance in intention to use (R² = 0.495) and use of generative AI (R² = 0.295), yet only modest engagement variance, ranging from agentic engagement (0.184) down to cognitive engagement (0.108).
5. Female students showed significantly stronger effects of effort expectancy, performance expectancy, social influence and facilitating conditions on intention than male students, although the male subgroup was small (59 versus 211 respondents).
6. Prior experience moderated only the effort expectancy–intention path, stronger among low-experience students (difference = 0.286, p = 0.022); the facilitating conditions, performance expectancy and social influence paths did not differ significantly.
7. Postgraduate students showed significantly stronger facilitating conditions, performance expectancy and social influence effects on intention than undergraduates, whereas the effort expectancy path did not differ by study level.

## A UTAUT model extended to minority ethnic international students

Generative AI is now widespread in UK [[higher-ed]], but evidence about how it shapes the learning of minority ethnic international students (MEIS) has been thin. Adekoya, Ajonbadi and Mordi extend the Unified Theory of Acceptance and Use of Technology (UTAUT) with Reeve and Tseng's four-strand engagement model, linking adoption antecedents to cognitive, behavioral, emotional and agentic engagement. This [[quantitative-research]] drew on a Qualtrics survey open between October 2024 and March 2025, distributed across seven universities in Yorkshire and focused on Business Schools, where most UK international students study. After removing incomplete responses and 25 respondents who had not used generative AI, the final sample was 270 students. Most were postgraduates (81.1%) and female (78.1%), and 65.2% described themselves as beginners with generative AI; 48.9% identified as Black/African and 51.1% as Asian. Analysis used Partial Least Squares Structural Equation Modeling (PLS-SEM), and the authors report that reliability, convergence and discriminant validity checks were satisfied, with all retained factor loadings between 0.718 and 0.890.

## What predicted generative AI adoption

All six adoption hypotheses were supported. Performance expectancy (β = 0.143, p = 0.009), effort expectancy (β = 0.175), social influence (β = 0.281) and facilitating conditions (β = 0.369) each predicted intention to use generative AI, with facilitating conditions the strongest of the four. Intention in turn predicted reported use frequency (β = 0.400), and facilitating conditions exerted a distinct direct effect on use (β = 0.204), giving resources a two-stage influence on adoption. The authors read this dual role as a refinement of UTAUT, which usually treats facilitating conditions as shaping intention or else fading once intention is controlled. They also note that facilitating conditions may reflect individual access differences — premium subscriptions, [[prompt-engineering]] skill, reliable bandwidth — as much as institutional provision. Because the outcome rests on [[self-report-measures]], the dependent variable is reported use frequency rather than logged behavior. Model fit was acceptable for the saturated solution (SRMR = 0.061) but weaker once estimated (SRMR = 0.116; NFI = 0.646), and multicollinearity was low (VIF values from 1.031 to 1.737).

## Generative AI use and the four engagement strands

Reported generative AI use was positively associated with every engagement strand. The largest coefficient was agentic engagement (β = 0.429), followed by behavioral (β = 0.383), emotional (β = 0.371) and cognitive engagement (β = 0.329). Variance explained was moderate for agentic (R² = 0.184), behavioral (0.147) and emotional engagement (0.137), and weak for cognitive engagement (0.108). The authors connect the agentic result to learners' proactive questioning and task-shaping, and to the interactive, constructive activity privileged in Chi's [[icap-framework|ICAP framework]], while cautioning that the conversational behaviors of generative AI use may overlap with the items that measure agentic engagement. They also suggest that regular work with conversational [[llm]] tools such as ChatGPT, Copilot and Gemini may help students seek clarification and navigate sociolinguistic barriers, potentially supporting [[student-experience]], [[motivation]] and [[social-emotional-learning]] as learners adjust to an unfamiliar [[curriculum-design|curriculum]] and assessment culture.

## Who is affected most: gender, experience and study level

Multigroup analysis found that gender, prior experience and study level altered the strength of some UTAUT paths rather than simply shifting average adoption rates. Female students showed significantly stronger effects of effort expectancy, performance expectancy, social influence and facilitating conditions on intention than male students; the authors caution that the male subgroup held only 59 respondents and that male coefficients were unexpectedly negative. Prior experience moderated only the effort expectancy path, which was stronger among low-experience students. Among postgraduates, facilitating conditions, performance expectancy and social influence were more strongly associated with intention than among undergraduates. These [[differential-effects-across-learner-groups]] point to heterogeneous adoption and echo [[digital-divide]] scholarship, in which device ownership, connectivity and technical confidence stratify access within student cohorts, not only between institutions. The authors argue that this heterogeneity supports moving technology-acceptance research toward critical digital-inclusion accounts of educational technology.

## What this means for practice

- **Instructors.** Move beyond blanket bans and design guided tasks — having students critique AI-generated outlines or co-create rubrics that reward reflective use — to support agentic engagement, and use structured questioning, verification and reflection rather than assuming that generative AI raises engagement.
- **Faculty developers and program leaders.** Because facilitating conditions predicted both intention and use, early-semester prompt-engineering workshops, [[discipline-specific-aied|subject-specific]] prompt libraries and premium tool access may help low-experience students move from intent to sustained use.
- **Administrators.** Embed generative AI and [[ai-literacy]] support into orientation and academic skills programs for MEIS, and consider device-lending schemes and subsidized account access to close the individual resource gaps that hold some students back.
- **Policymakers.** Encourage institutions to report generative AI access and engagement data disaggregated by ethnicity and international student status, and consider adding digital access to equity frameworks so resource allocation reflects the technological and cultural adjustment challenges some MEIS face.

## Limitations

- **Cross-sectional, self-report design.** A single survey cannot establish causal direction; the authors note that reciprocal effects, in which already-engaged students seek out generative AI, remain plausible, and that self-report measures invite common-method bias despite statistical checks.
- **One cohort, one region, one discipline.** Data came from 270 Black and Asian MEIS in Business Schools across seven Yorkshire universities, collected between October 2024 and March 2025, so findings may not transfer to other disciplines, regions or student populations.
- **Unequal gender subgroups.** The gender multigroup comparison rested on 59 male versus 211 female respondents, so the male estimates and their negative coefficients should be treated as provisional.
- **Limited transfer to other underrepresented groups.** The authors state that results may not apply to [[special-education|students with disabilities]] or to first-generation White working-class students, whose technology-adoption contexts differ meaningfully.
- **Pre-[[multimodal]] data collection.** The survey ran before the widespread release of multimodal generative AI, so [[usability-research|usability]] beliefs and engagement affordances may shift as voice and image functions become more prevalent.
- **Modest engagement variance and fit.** The model explained only 0.108 to 0.184 of engagement variance, and the estimated-model fit indices (SRMR = 0.116; NFI = 0.584) fell short of recommended thresholds.

## Citation

Adekoya, O. D., Ajonbadi, H. A., & Mordi, C. (2026). [Multidimensional engagement effects of generative AI adoption among minority ethnic international students in UK higher education](https://doi.org/10.1111/bjet.70093). *British Journal of Educational Technology*.