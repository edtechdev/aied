---
title: "To cheat or not to cheat? Examining undergraduate students' use of generative AI and academic dishonesty"
created: "2026-11-09T09:21:50-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
page_kind: [evaluation]
research_method: [survey, interviews]
evidence_context: educational
level: [undergraduate, higher ed]
audience: [instructors, administrators, researchers]
sources: ['raw/papers/dai-genai-academic-dishonesty-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1954618"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-09"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [academic-integrity, ai-literacy, reducing-ai-misuse]
pedagogy: [self-efficacy, motivation, self-regulated-learning]
methods: [mixed-methods-research]
ethics: [ai-misuse-learning-harm]
---
> **Synthesis:** Dependence, not deficiency, is what tracks [[academic-integrity|academic dishonesty]] with [[generative-ai|generative AI]] in this sample. Dai and colleagues surveyed 1,045 [[higher-ed|undergraduates]] across Chinese universities and interviewed seven of them, framing the analysis with the I-PACE model of problematic technology use. Half the sample scored high on a short dishonesty measure, and heavy reliance on AI was by far its strongest predictor, itself fed by impulsivity, fear of missing out and trust in the tool. The counterintuitive result matters for practice: a sense of human–AI [[agency|agency]] was unrelated to dependence, did not weaken the link to dishonesty, and was itself slightly associated with more of it. Habitual checking behaved differently, predicting less reliance and, through it, less dishonesty.

## Key Findings

1. **Dishonesty was common among intensive users.** The three-item measure averaged 4.74 on a 1–7 scale; 50.1% of students scored 5 or higher and 81.2% at or above 4, while 68.1% used GenAI at least daily.
2. **AI dependence was the strongest predictor of dishonesty.** Students who leaned on the tool most were the most likely to report dishonest use, and the link held across stricter screens for careless responding.
3. **Dispositions fed dependence rather than acting on dishonesty directly.** Impulsivity, fear of missing out and trust in AI all predicted heavier reliance. Trust also kept a direct route to dishonesty, which fits a student who believes the tool is accurate enough to delegate to on a single occasion.
4. **Felt agency did not protect integrity.** Agency was distinct from dependence and essentially uncorrelated with it, it did not weaken the dependence–dishonesty link, and it was weakly but positively associated with dishonesty.
5. **Matching students on agency left the gap intact.** Among students above the 75th percentile of felt agency, the bottom- and top-quartile dependence groups sat almost on top of each other on agency (6.82 and 6.78) yet 2.89 points apart on dishonesty (3.64 against 6.53). Feeling in command clearly did not restrain the students who relied on the tool most.
6. **Verification worked upstream, not as a safeguard.** Critical evaluation had no direct relationship with dishonesty, but it predicted lower dependence and lower [[cognitive-offloading|offloading]], so its benefit ran through reduced reliance rather than through checking finished work.
7. **Profiles were ordered by dependence, not by agency.** Across the three profiles dependence and dishonesty rose together while agency bounced around without a pattern, which is what a dependence-driven account predicts.

## One survey, seven interviews

The design is explanatory [[mixed-methods-research|mixed methods]]: the survey establishes the structure, and the interviews explain it. The quantitative strand drew 1,200 submissions through social media from undergraduates across Chinese universities by convenience rather than from a sampling frame, so no response rate is reported. Forty respondents answered no to the GenAI screener and were routed past the Likert blocks, leaving 1,160 complete questionnaires. From those, 115 (9.9%) were removed for answering all 41 items identically: their within-person standard deviation was zero against 1.22 for everyone else, and their median completion time was 106 s against 222 s. Removal was not neutral — 63.5% of the excluded group were men against 49.2% of the retained, and 23 of the 44 lightest users went with them. The reported model uses 39 items across 12 constructs; three dishonesty items index unauthorized substitution, permission-conditioned delegation, and authorship misattribution. Seven students were then interviewed for 20 to 60 minutes, with two coders working from the same codebook and reaching strong agreement across 46 excerpts.

## The dependence pathway

The structural model fit closely, and dependence carried the argument: it predicted dishonesty and cognitive offloading strongly, and it was the channel through which all three dispositions reached dishonest behavior. Trust also had the rare direct route, which the authors read as a disposition that can bypass the habitual-use pathway when a student believes the tool is accurate enough to delegate to on a single occasion. The dependence coefficient barely moved across eight alternative specifications, including models adding general self-efficacy, teacher support, [[self-regulated-learning|self-regulated learning]], [[ai-literacy|AI literacy]], and perceived usefulness. Discipline did not change the story: the measure behaved equivalently across science and non-science groups, and dependence dominated within each.

What this means is that the risk sits in the habit of handing work over, not in a missing skill or a bad attitude. Interventions aimed at knowledge or motivation can succeed on their own terms and leave the dependence pathway untouched.

## Agency licenses what verification prevents

The paper's target is the assumption behind most AI-literacy advice — that students who feel capable and in control will stay honest. Agency and dependence turned out to be separate dials, not opposite ends of one: a student can be heavily dependent and feel fully in command. The interaction test found nothing, and even at three standard deviations above the mean agency the dependence–dishonesty slope still stood at 0.548. The person-centered analysis said the same thing in a different metric, and so did the students. One described becoming "a reviewer" of code the model wrote; another explained that a stronger sense of agency means treating AI as a tool and feeling no guilt — the feeling of command licensed the delegation it was supposed to restrain.

Verification, by contrast, is a behavior rather than a self-appraisal, and it acted before delegation rather than after it: habitual checking lowered dependence, and lower dependence carried less dishonesty. The authors are explicit that the direct effect of checking on dishonest work was null, so checking is a brake on reliance, not a filter applied to finished output. That distinction is the practical heart of the paper. Asking students whether they feel in control tells you little; asking them to show the checking they did before they relied on an answer tells you more.

## What this means for practice

- **Instructors:** Stop treating confidence as the goal. Build the checking habit into the task: require the model's output alongside the student's annotated corrections, and give credit for the corrections rather than for the polished text.
- **Administrators:** Put [[reducing-ai-misuse|integrity strategy]] upstream of the submission. Since dependence carries the association, invest in briefs that state permitted AI involvement and in assessment that makes unaided competence visible — oral components, in-class work, process portfolios.
- **Researchers:** Measure dependence and felt agency as separate constructs, and prefer behavioral traces over self-report: self-assessed and observed reliance diverge, so copy-paste records and revision histories are the natural next test.
- **Developers:** Design for friction where it matters: a required step before a task is handed over — stating what the answer should look like, or attempting the first move unaided — matches the point in the process where the data locate the risk.
- **Instructors and advisers:** Treat [[trust-calibration|miscalibrated trust]] as teachable. A short exercise with model output at a known error rate shows students where the tool fails in their own field, which is what a reliance decision needs.

## Limitations

- Cross-sectional, single occasion, single source: nothing establishes that dependence precedes dishonesty rather than accompanying or following it, and the mediation language reflects the theoretical ordering, not temporal precedence.
- Everything rests on self-report of conduct students have reason to conceal: no interaction logs, copy-paste traces, or revision histories were collected, so the prevalence figures are lower bounds.
- Convenience sample with no sampling frame: 74.8% of respondents sat in Shandong and 13.5% in Sichuan, so the estimates describe these respondents, not Chinese undergraduates; 115 invariant responders were also removed after reviewing the data, tilting the sample toward heavier users (daily-or-more use rises from 66.7% to 68.1%).
- Impulsivity, trust in AI, and cognitive offloading were measured with two items each, sampling part of each domain; the dishonesty measure indexes a disposition rather than verified rule breaches, and one item conditions on the absence of a prohibition.
- The qualitative strand is seven interviews; teacher-researchers conducted them, which the authors expect suppressed admissions of shortcutting.
- The survey named DeepSeek, Doubao, Kimi, Ernie Bot, and ChatGPT as examples but recorded no system identity or version, so tool choice could not be tested.

## Citation

Dai, X., Nie, A., Du, P., Liu, Y., & Wang, Z. (2026). [*To cheat or not to cheat? Examining undergraduate students' use of generative AI and academic dishonesty*](https://doi.org/10.3389/fpsyg.2026.1954618). *Frontiers in Psychology*. https://doi.org/10.3389/fpsyg.2026.1954618
