---
title: "External support and university faculty’s AI-TPACK: a serial mediation model of perceived ease of use, perceived usefulness, and behavioral intention"
created: "2026-11-27T01:38:00-05:00"
updated: "2026-11-27T01:38:00-05:00"
type: article
published: "2026-09-03"
sources: ['raw/papers/wang-faculty-aitpack-support-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [survey]
discipline: []
level: [higher ed]
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Wang, Xiao and Zhang surveyed 593 university faculty members at 11 universities in one Chinese province to ask how external support relates to self-reported [[tpack|AI-TPACK]]. Drawing on the [[technology-acceptance-model|technology acceptance model]], they specified an ordering from support through perceived ease of use, perceived usefulness and behavioral intention to perceived AI-integrative knowledge. The five constructs were psychometrically distinguishable, and support was positively associated with AI-TPACK. Most of the indirect association ran through ease of use and usefulness, including several short and serial routes. The unique pathway through intention alone was not supported. Because everything was measured at one time, the results describe associations within a fitted model, not a demonstrated developmental or causal sequence; the outcome is self-reported competence rather than observed teaching.

## Key Findings

1. **Institutional support was linked to faculty AI-TPACK.** External support retained a positive association with self-reported AI-integrative knowledge after the other constructs were in the model.
2. **The five constructs were distinguishable.** Reliability and factor analyses separated support, ease of use, usefulness, intention and AI-TPACK into five factors with clean loadings.
3. **Ease of use was the largest single channel.** Among the specific indirect routes, the pathway through perceived ease of use had the largest point estimate.
4. **Usefulness carried part of the association.** The route through perceived usefulness was also supported, consistent with the idea that visible instructional value matters.
5. **Intention alone was not a sufficient bridge.** The unique route through behavioral intention was not distinguishable from zero, even though intention itself was related to AI-TPACK.
6. **The full ordered chain was supported but small.** The pathway through ease of use, usefulness and intention had a bootstrap interval excluding zero, with a small estimate.
7. **Direction of influence cannot be settled here.** All variables were measured together, and faculty with stronger prior knowledge may find the same tools easier to use.

## What the study measured

The cross-sectional questionnaire was administered online in August 2025. Faculty came from 11 universities in Hubei Province, China, across comprehensive, science and engineering, normal, political science and law, and agriculture and forestry institutions. Participants were nominated through a digital literacy enhancement program and an AI education case initiative. Of 611 completed questionnaires, 18 were removed under two predefined data-quality rules: seven had a completion time under 60 seconds and 11 showed invariant responding. That left 593 valid questionnaires, a valid questionnaire rate of 97.1%. The sample was 268 men (45.2%) and 325 women (54.8%); 357 respondents held a doctoral degree (60.2%), and 429 worked in social sciences (72.3%). The authors note that program-based recruitment may have attracted faculty with greater prior interest in AI or access to support.

The 18-item instrument used a five-point Likert format: six items measured external support, three perceived usefulness, three perceived ease of use, three behavioral intention to use AI, and three AI-TPACK. Generic technology wording was contextualized to AI-supported university teaching. Three experts reviewed item wording, and a pilot with 21 university teachers led to refinement of five items. Construct scores were item means. The analysis combined exploratory and confirmatory factor analysis with structural equation modeling, and indirect effects were evaluated with 5,000 bootstrap resamples and 95% confidence intervals. Gender and teaching years were included as covariates.

## What the measurement and models showed

Cronbach’s alpha ranged from .788 to .898 across the five constructs, with .898 for the 18-item instrument. KMO was .889 and Bartlett’s test was significant, χ²(153) = 5,457.501, p < .001. Five factors had eigenvalues above 1 (6.617, 2.400, 1.490, 1.329 and 1.205) and together accounted for 62.207% of the variance. Primary loadings ran from .553 to .885, and the largest cross-loading was .152. The five-factor confirmatory model fit acceptably: χ²/df = 2.546, RMSEA = .051, SRMR = .044, CFI = .964 and TLI = .956. Standardized loadings ranged from .659 to .826, composite reliability from .800 to .915 and average variance extracted from .568 to .642. In Harman’s single-factor test, the first unrotated factor accounted for 36.760% of the variance.

The structural model also fit acceptably: χ²(159) = 371.704, χ²/df = 2.338, RMSEA = .047, SRMR = .047, CFI = .961 and TLI = .953. It explained 17.4% of the variance in ease of use, 25.9% in usefulness, 29.7% in intention and 39.9% in AI-TPACK. Support was positively associated with ease of use (β = .418, p < .001), usefulness (β = .203, p < .001), intention (β = .102, p = .038) and AI-TPACK (β = .238, p < .001). Ease of use related to usefulness (β = .390, p < .001) and AI-TPACK (β = .231, p < .001); usefulness related to AI-TPACK (β = .213, p < .001); and intention related to AI-TPACK (β = .146, p = .007). Gender was not significant (β = .001, p = .976), while teaching years showed a small negative association (β = −.099, p = .009).

For support to AI-TPACK, the direct effect was B = .308, 95% CI [.107, .461], the total indirect effect B = .287, 95% CI [.203, .386], and the total effect B = .595, 95% CI [.365, .798]. The support → ease of use → AI-TPACK route was B = .125, 95% CI (.052,.235), and support → usefulness → AI-TPACK was B = .056, 95% CI [.012, .128]. The intention-only route was not supported, B = .019, 95% CI [−.001, .068]. Three serial routes had intervals excluding zero: through ease of use and usefulness, B = .045, 95% CI (.022,.096); through ease of use and intention, B = .028, 95% CI [.009, .056]; and through usefulness and intention, B = .008, 95% CI [.001, .021]. The full specified chain was B = .007, 95% CI [.001, .017].

## What this means for practice

- **Instructors.** Treat ease of use as a design target: start with tools that are easy to get started with and learn independently, so effort goes to pedagogy rather than operation.
- **Faculty developers.** Make usefulness concrete by tying AI tools to efficiency, personalized learning and tracking student progress, since usefulness carried a measurable share of the indirect association.
- **Institutions.** Provide technical resources, training, evaluation incentives and a supportive climate; external support was still associated with AI-TPACK after beliefs and intention were modeled.
- **Instructors.** Do not treat willingness alone as competence. Pair experimentation with structured chances to learn tools, share experiences and judge when AI is pedagogically appropriate.
- **Researchers.** Replicate the model with longitudinal or experimental designs before reading the ordering as developmental, and test reciprocal alternatives.

## Limitations

- The cross-sectional design cannot establish temporal precedence or causal direction; reverse relationships, such as stronger prior AI-TPACK producing easier-to-use judgments, remain plausible.
- Participants were nominated through a professional development program and case initiative, suggesting self-selection, and the social-science overrepresentation limits generalization across disciplines and institution types.
- All focal variables came from the same respondents’ self-reports. AI-TPACK is perceived competence, not performance on knowledge tests, observations or teaching tasks.
- Behavioral intention captured stated willingness rather than actual classroom AI use, so the link from intention to practice was not observed.
- The sample came from universities in a single Chinese province; cross-cultural replication and measurement-invariance testing are needed before assuming the relationships generalize.

## Citation

Wang, M., Xiao, B., & Zhang, S. (2026). External support and university faculty’s AI-TPACK: a serial mediation model of perceived ease of use, perceived usefulness, and behavioral intention. *Frontiers in Education, 11*, Article 1923624. https://doi.org/10.3389/feduc.2026.1923624
