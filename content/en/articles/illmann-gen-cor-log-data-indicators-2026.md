---
title: "Defining Log Data Indicators for the Measurement of Generic Critical Online Reasoning (GEN-COR)"
created: "2026-11-20T09:15:00-05:00"
updated: "2026-11-20T09:15:00-05:00"
type: article
pedagogy: []
technology: [learning-analytics]
foundations: [critical-thinking, information-and-media-literacy]
assessment: [educational-measurement]
methods: [quantitative-research]
level: [higher ed]
audience: [researchers, instructors]
page_kind: [evaluation]
sources: ['raw/papers/illmann-gen-cor-log-data-indicators-2026.md']
source_url: "https://osf.io/fr5d9"
source_depth: full text
confidence: medium
evidence_context: educational
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-20"
    agent: hermes-agent
---

> **Synthesis:** Illmann and colleagues (2026) ask whether an [[information-and-media-literacy|information literacy]] construct can be scored from what students do rather than from what they write. In the CORE project, 459 first-year students at three German [[higher-ed|universities]] searched the open Internet inside a logged virtual machine while solving four everyday information problems, from radio tower health risks to green sauce toxicity, each under a 20-minute limit, and the authors extracted ten behavioral indicators for Online Information Acquisition, the search facet of [[critical-thinking|Critical Online Reasoning]]. Confirmatory factor analysis failed: a single-factor model produced low loadings that changed sign from task to task. Exploratory factor analysis settled on two factors, one for query formulation and one for behavior on the search engine results page, and they did not correlate, *r* = −.132, *p* = .109. That contradicts the field's assumption that Online Information Acquisition is one thing, and it gives log-based measurement its first operational handle on click restraint.

## Key Findings

- **Ten indicators, five survived.** Of the ten indicators defined for the facet, two had minimal interindividual variation, one loaded inconsistently across tasks and one produced a Heywood case, leaving five in the final model.
- **The one-factor model broke.** A one-dimensional model returned low loadings that changed polarity within tasks: time to first query loaded .032, .176, −.019 and .033, while initial query quality ran from −.653 to −.171.
- **Two factors emerged instead.** Query formulation (initial query quality, amount of searches, tuning) and results-page behavior (time on SERP, scroll) separated cleanly and were not significantly correlated, *r* = −.132, *p* = .109.
- **The negative loading carries the theory.** Initial query quality loaded negatively (−.666 for green sauce, −.290 for Tetra Pak): a student who opens with a usable query needs fewer follow-up searches and less tuning.
- **Click restraint became countable.** Time on SERP loaded .494 to .595 and scroll on SERP .615 to .755, the first log-based operationalization of the pause Osborne et al. (2022) described in fact-checkers.
- **The structure held across four tasks.** Constraining loadings equal across tasks left 38 free parameters against 53 unrestricted and lowered BIC from 8980.52 to 8933.68, though AIC rose from 8762.37 to 8777.27.
- **Scrolling depended on the results page.** Scroll on SERP averaged 5.57 events in the radio tower task against 13.46 in the heat stick task, which the authors attribute to heavier advertising in those results.

## Making the log readable

Log events are not evidence until they are labeled. A Firefox add-on inside the virtual machine recorded PageOpen, PageFocus, InputChange, TextMarked, Keystroke, Scroll, LinkClick and SurveyAnswers, stored as normalized event tables in a Microsoft SQL Server database, and low-level features were then aggregated into indicators by rules drawn from prior research and the construct definition. This is [[learning-analytics|learning analytics]] aimed at an [[assessment|assessment]] rather than a course.

Results-page time shows the chain. Successive PageOpen and PageFocus events identify a first inspection of a page, the URL attribute separates search engine results pages from other sites, and the median per person and task becomes the indicator. Two of the ten indicators were never computed: initial query quality and query tuning were rated by three human raters on a 3-point scale, with the mode taken where raters disagreed.

## Two factors, not one

The analytic path matters as much as the result. Ten indicators produced 40 sub-indicators across the four tasks. The authors dropped two for minimal variation, one for sign-inconsistent loadings and one for a Heywood case, then ran a one-dimensional model that misfit the data. A three-factor solution fit better but loaded almost one entire factor on time to first query, which the authors treat as either a typing-speed artifact or a genuine planning factor. Removing that indicator left a two-factor solution that BIC preferred over three (9090.893 against 9140.430).

The final model links twenty indicators across four tasks to whichever factor they loaded on most strongly in the exploratory analysis, and the authors explicitly claim no confirmation, since the same data served both steps. [[educational-measurement|Measurement]] here is staged: define indicators, test the structure, then test whether it survives being held equal across tasks.

## What the second factor buys

The first factor gathers indicators for the opening query, the number of searches and the degree of tuning; its negative loading for query quality reads as compensation, since a strong first query substitutes for later repair work. The second factor is the contribution: it turns a description of expert behavior into two counts a browser can record. Both indicators measure what Osborne et al. (2022) called click restraint, the habit of scanning snippets before committing to a link, and doing so separates skilled searchers from those who take the first adequate-looking result.

The authors are surprised that the two factors did not correlate. Given how narrow the indicator set is within the wider construct, they read the near-zero relation as evidence that [[problem-solving|online information problem-solving]] may be more differentiated than the framework assumed. That is a structural claim, and it is the part of the paper most likely to be challenged by larger samples.

## The web moved after the data

The data were collected in winter term 2023/24, before the AI-supported snippets Google introduced in 2025. Those snippets aggregate more information and present machine-composed statements, which the authors expect to give students more opportunity to consume an answer directly from the results page, the behavior their tenth indicator was built to catch. They argue the indicators still apply because the AI summaries are often biased or incomplete, so skilled searchers keep checking them against conventional snippets and other reliable sources. Any log-based measure of search is therefore exposed to platform change in a way that a knowledge test is not. Their hedge is candid: if snippets become interactable in new ways, or disappear, the operationalization needs revision even where the concept holds.

## What this means for practice

- **Instructors.** Assign search work in an open browser and score the process, not only the answer. Query quality and results-page inspection came apart here, so one [[rubrics|rubric]] cannot carry both.
- **Learning designers.** Log page focus and scrolling at minimum. Results-page dwell time and scroll depth are the cheapest signals separating students who read results from those who click the first link.
- **Researchers.** Do not sum a query-formulation score and a results-page score into a single acquisition total. The two factors were uncorrelated in this sample.
- **Teacher educators.** Treat query formulation as [[scaffolding|scaffoldable]]: the three rated moves, opening query, search count and tuning, are visible in a transcript and coachable without measurement infrastructure.

## Limitations

- The sample is 459 analyzable students from 566 who began, and because most took one of four tasks, overlap between any two tasks fell “in the low double digits”, challenging for covariance-based factor analysis.
- Data came from winter term 2023/24, before the AI-supported snippets that appeared in 2025, so the tenth indicator may behave differently now.
- Only generic COR tasks were used; the authors assume the same structure holds for domain-specific acquisition but did not test it.
- Two of the ten indicators were human-rated rather than computed, and the sample is first-year students only, so indicators 7 and 10 may lack variation simply because the skills have not yet differentiated.
- The final model used the same dataset as the exploratory analysis, so [[assessment-validity|validation]] rests on information criteria and loading patterns rather than an independent sample.

## Citation

Illmann, J., Baumartz, D., Drake, P., Hahnel, C., Hartig, J., Köhler, C., Schrickel, M., & Goldhammer, F. (2026). [*Defining Log Data Indicators for the Measurement of Generic Critical Online Reasoning (GEN-COR)*](https://osf.io/fr5d9). PsyArXiv preprint.
