---
title: "Why this AI app? The impact of generative artificial intelligence on educators’ choices in educational apps"
created: "2026-11-11T11:30:00-05:00"
updated: "2026-11-11T11:30:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors]
sources: ['raw/papers/liptrot-educators-ai-app-choices-2026.md']
source_url: "https://doi.org/10.1016/j.chb.2026.109219"
source_depth: full text
confidence: high
foundations: [ai-literacy, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
assessment: [feedback]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Two experiments with separate samples of 101 K-6 educators from Canada, the US and the UK tested whether disclosing [[generative-ai]] use in an educational app's store description changes which apps educators say they would choose. Study 1 found no effect. Study 2 found a small overall preference for apps that did not mention GenAI, carried entirely by [[assessment|ratings]]: educators rated no-AI apps 3.51 against 3.34 for GenAI apps, while download likelihood and willingness to pay did not differ significantly. A cluster analysis split the sample into selectors (28%), agnostics (58%) and avoiders (14%), so the aggregate preference hides the fact that most educators were indifferent. The result points less to aversion than to a gap in [[ai-literacy]]: most educators are not evaluating AI claims closely enough to act on them.

## Key Findings

1. **Study 1 found no effect of disclosure.** With 101 educators evaluating eight fabricated math app pages, the repeated-measures MANOVA showed no overall effect of mentioning GenAI on intended selection, Wilk's Λ = 0.97, F(3,98) = 1.12, p = .346, η2p = .03.
2. **Study 2 replicated the design with a new sample and found a small aggregate effect.** The overall test was significant, Wilk's Λ = 0.92, F(3,98) = 2.91, p = .038, η2p = .08, in the direction of preferring apps that did not mention GenAI.
3. **Only ratings separated the conditions.** Educators rated no-AI apps higher (M = 3.51, SE = 0.07) than GenAI apps (M = 3.34, SE = 0.08), F(1,100) = 6.79, p = .011, η2p = .06. Download likelihood did not differ (4.88 versus 4.68), F(1,100) = 0.36, p = .552, η2p < .01, and neither did willingness to pay (5.70 versus 5.51), F(1,100) = 2.92, p = .091, η2p = .03.
4. **Three clusters, not one preference.** Hierarchical cluster analysis identified selectors (n = 28), who preferred downloading, rating and paying for GenAI apps; agnostics (n = 59), who showed minimal preferences; and avoiders (n = 14), who preferred apps without AI. Discriminant analysis correctly re-classified 97% of cases, and cluster membership had a large overall effect on evaluations of AI apps, Pillai's Trace = 0.38, F(6,194) = 7.53, p < .001, η2p = .19.
5. **No GenAI use was preferred over another.** The four disclosed purposes (curriculum, feedback, scaffolding, learning theory) produced no significant differences, Wilk's Λ = 0.97, F(3,92) = 0.37, p = .945, η2p = .04. Planned contrasts found one significant comparison: ratings of apps using GenAI to tailor curriculum were lower than the average no-AI app, p = .012, d = −0.24.
6. **Cluster differences in knowledge and attitudes were trends only.** Selectors reported the highest GenAI TPACK, most positive attitudes and most frequent use; avoiders reported the lowest on all three. The authors present these as visual patterns because uneven cluster sizes left insufficient power for inferential testing.
7. **The aggregate effect was fragile.** Removing seven outliers from the Study 2 analysis moved the overall MANOVA to p = .052, although the univariate rating difference remained significant.

## What the study did

Both studies used a paradigm built to imitate app-store browsing. Educators recruited through Prolific viewed eight researcher-created math app pages in random order, styled after Apple App Store listings and using real app icons and screenshots with invented names and descriptions. Every page carried the same five bullet points, each corresponding to an educational benchmark: curriculum alignment, [[feedback]], [[scaffolding]], a learning theory basis, and development with educators or researchers. In half the apps, one bullet was rewritten to say GenAI was used for curriculum generation, scaffolding, feedback or learning theory. Rating and ranking information was removed so that social proof would not compete with the experimental manipulation.

After each page, participants reported download likelihood on a 1–7 scale, willingness to pay from $0 to $30, and a 1–5 star rating. Study 1 fixed the pairing of app names and images with experimental content before data collection; Study 2 randomized that pairing for each participant, so that differences between GenAI uses could not be attributed to a particular app's theme. Study 2 added a GenAI-adapted TPACK scale, a use-frequency question and two attitude items.

## Why the preference stops at ratings

The authors treat ratings as a behavioral intention measure, and ratings correlated strongly with the other two outcomes (0.72 with download likelihood and 0.58 with willingness to pay in Study 1; 0.76 and 0.60 in Study 2). But they also acknowledge that a star rating can reasonably be read as an attitude. On that reading, educators hold somewhat more favorable views of apps without GenAI while their stated download and payment intentions remain unmoved. The discussion points to the gap between attitudes and intentions in technology adoption models: download decisions are shaped by school resources, procedures and social influence, not only by whether an educator likes the app.

The cluster results sharpen this. Agnostics were the majority at 58%, and the paper considers several explanations: nuanced views that vary by use (not supported, since agnostics showed no use-specific preference), uncertainty, indifference, or simple inattention. GenAI was disclosed in a single sentence of each description, and the authors note that educators could easily have missed it. That possibility is the more uncomfortable one: educators act as quality control for apps entering classrooms, and missing a disclosure suggests limited critical review. It also matches earlier findings that educators make snap judgments in a market of roughly 400 000 educational applications.

## What this means for practice

- **Instructors:** Treat an AI mention in an app description as a claim to verify, not a quality signal. Ask what the model does, what it was trained on, and whether the app's feedback or curriculum content has been checked for accuracy.
- **Administrators:** Do not assume that staff will screen GenAI-enabled apps on their own. Provide short evaluation checklists and a procurement route that surfaces AI use, data handling and evidence of learning.
- **Designers:** Disclosure alone will not win or lose adoptions. If GenAI supports a documented pedagogical function, say which one and show the evidence; generic AI branding produced no download advantage in either study.
- **Researchers:** Test disclosure effects in real app stores, where quality varies and companies may not disclose AI use at all. The present null-to-small effects come from uniformly well-designed stimuli.

## Limitations

The stimuli were fabricated and uniformly good, mentioning all five educational benchmarks, while few real app descriptions mention all five. Educators may evaluate pages more critically when quality varies, so the study likely understates the role of quality judgments. GenAI was disclosed explicitly in the description, which real vendors may not do; the authors cite an app that removed staff in favor of GenAI content without saying so in its listing. Privacy and security information, developer reputation and user ratings were removed or absent, although these matter to educators. Both samples were recruited through Prolific and skew heavily toward the UK (72 of 101 in Study 1), limiting generalizability. Cluster analyses were exploratory, with uneven groups and no inferential comparison of cluster characteristics. The study measures stated intentions, not downloads.

## Citation

Liptrot, Emma, & Dubé, Adam Kenneth. (2026). *[Why this AI app? The impact of generative artificial intelligence on educators’ choices in educational apps](https://doi.org/10.1016/j.chb.2026.109219)*. Computers in Human Behavior, 187, 109219. https://doi.org/10.1016/j.chb.2026.109219
