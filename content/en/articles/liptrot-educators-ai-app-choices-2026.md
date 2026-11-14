---
title: "Why this AI app? The impact of generative artificial intelligence on educators’ choices in educational apps"
created: "2026-11-11T07:41:09-05:00"
updated: "2026-11-14T10:00:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Telling educators that an app uses [[generative-ai|generative AI]] barely changes what they would choose, and most do not appear to register the disclosure at all. Two experiments each showed 101 K-6 educators from Canada, the US and the UK realistic app-store pages. In the first, disclosure made no difference. In the second, apps without a GenAI mention drew slightly higher [[assessment|star ratings]], while stated download likelihood and willingness to pay were unchanged. Cluster analysis found a minority who preferred AI apps, a smaller group who avoided them, and a majority with no preference. The practical worry is not hostility but inattention — the [[ai-literacy|AI literacy]] gap schools need to close.

## Key Findings

1. **Saying an app uses AI did not change choices in the first experiment.** Educators shown otherwise identical app pages selected, rated and priced them the same whether or not the description mentioned GenAI.
2. **A second sample showed a small preference for apps without AI.** The overall difference was small but consistent, and it pointed toward the versions that did not mention GenAI.
3. **Only the star rating moved.** Stated download likelihood and willingness to pay were statistically indistinguishable between conditions; the rating gap was a fraction of a point on a five-point scale.
4. **Most educators had no preference either way.** Cluster analysis found a minority who favored AI apps, a smaller group who avoided them, and a majority whose choices barely differed between versions.
5. **What the AI was for did not matter.** Apps disclosing GenAI for curriculum, feedback, scaffolding or learning theory were judged alike, with one exception: a slight rating penalty for AI-generated curriculum.
6. **Knowledge and attitudes tracked the clusters only loosely.** Educators who preferred AI apps reported the most AI knowledge, the most positive attitudes and the most frequent use; avoiders reported the least, but the groups were too uneven to test statistically.
7. **The aggregate result was fragile.** Removing a handful of outlying responses pushed the overall test to the edge of significance, though the rating difference held.

## What the study did

Both studies used a paradigm built to imitate app-store browsing. Educators recruited through Prolific viewed eight researcher-created math app pages in random order, styled after Apple App Store listings and using real app icons and screenshots with invented names and descriptions. Every page carried the same five bullet points, each corresponding to an educational benchmark: [[curriculum-design|curriculum alignment]], [[feedback|feedback]], [[scaffolding|scaffolding]], a [[learning-theories|learning theory]] basis, and development with educators or researchers. In half the apps, one bullet was rewritten to say GenAI was used for curriculum generation, scaffolding, feedback or learning theory. Rating and ranking information was removed so that social proof would not compete with the experimental manipulation.

After each page, participants reported download likelihood on a 1–7 scale, willingness to pay from \$0 to \$30, and a 1–5 star rating. Study 1 fixed the pairing of app names and images with experimental content before data collection; Study 2 randomized that pairing for each participant, so that differences between GenAI uses could not be attributed to a particular app's theme. Study 2 added a GenAI-adapted [[tpack|TPACK]] scale, a use-frequency question and two attitude items.

## Why the preference stops at ratings

The second study's overall result was in the expected direction but thin. On the star rating — the only outcome that separated — apps without a GenAI mention averaged 3.51 against 3.34 for apps with one. Download likelihood was 4.88 against 4.68 on a seven-point scale, and stated willingness to pay 5.70 against 5.51 on the dollar range offered; neither difference was reliable. Because the design used fabricated pages that were uniformly well built, these small gaps are best read as what a single disclosure sentence can do when everything else about the app is identical.

The authors treat ratings as a behavioral intention measure, and ratings moved together with the other two outcomes. But they also acknowledge that a star rating can reasonably be read as an attitude. On that reading, educators hold somewhat more favorable views of apps without GenAI while their stated download and payment intentions remain unmoved. The discussion points to the gap between attitudes and intentions in [[technology-acceptance-model|technology adoption models]]: download decisions are shaped by school resources, procedures and social influence, not only by whether an educator likes the app.

The cluster results sharpen this. Agnostics were the majority at 58%, and the paper considers several explanations: nuanced views that vary by use (not supported, since agnostics showed no use-specific preference), uncertainty, indifference, or simple inattention. GenAI was disclosed in a single sentence of each description, and the authors note that educators could easily have missed it. That possibility is the more uncomfortable one: educators act as quality control for apps entering classrooms, and missing a disclosure suggests limited critical review. It also matches earlier findings that educators make snap judgments in a market of roughly 400 000 educational applications.

## What this means for practice

- **Instructors:** treat an AI mention in an app description as a claim to verify, not a quality signal. Ask what the model does, what it was trained on, and whether the app's feedback or curriculum content has been checked for accuracy.
- **Administrators:** do not assume staff will screen GenAI-enabled apps on their own. Provide short evaluation checklists and a procurement route that surfaces AI use, data handling and evidence of learning.
- **Designers:** disclosure alone will not win or lose adoptions. If GenAI supports a documented [[pedagogy|pedagogical]] function, say which one and show the evidence; generic AI branding produced no download advantage in either study.
- **Researchers:** test disclosure effects in real app stores, where quality varies and companies may not disclose AI use at all. The present null-to-small effects come from uniformly well-designed stimuli.

## Limitations

The stimuli were fabricated and uniformly good, mentioning all five educational [[benchmark|benchmarks]], while few real app descriptions mention all five. Educators may evaluate pages more critically when quality varies, so the study likely understates the role of quality judgments. GenAI was disclosed explicitly in the description, which real vendors may not do; the authors cite an app that removed staff in favor of GenAI content without saying so in its listing. Privacy and security information, developer reputation and user ratings were removed or absent, although these matter to educators. Both samples were recruited through Prolific and skew heavily toward the UK (72 of 101 in Study 1), limiting generalizability. Cluster analyses were exploratory, with uneven groups and no inferential comparison of cluster characteristics. The study measures stated intentions, not downloads.

## Citation

Liptrot, Emma, & Dubé, Adam Kenneth. (2026). *[Why this AI app? The impact of generative artificial intelligence on educators’ choices in educational apps](https://doi.org/10.1016/j.chb.2026.109219)*. Computers in Human Behavior, 187, 109219. https://doi.org/10.1016/j.chb.2026.109219
