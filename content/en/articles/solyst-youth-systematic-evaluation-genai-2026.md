---
title: "\"Are you biased right now, AI?\": Investigating Supporting Youths' Systematic Evaluation of GenAI"
created: "2026-10-25T00:00:00-04:00"
updated: "2026-10-25T00:00:00-04:00"
type: article
authors: ["Solyst, J.", "Walker, L.", "Handa, S.", "Nurdin, F.", "Shapiro, R. B."]
published: "2026-01-01"
venue: "Proceedings of the 25th Interaction Design and Children Conference (IDC 2026)"
source_url: https://doi.org/10.1145/3773077.3806125
foundations: [ai-literacy, critical-thinking, learner-identity, limitations-in-aied-research]
pedagogy: [inquiry-based-learning, critical-pedagogy, creativity, metacognition, misconceptions, collaborative-learning, student-ai-interaction, scaffolding]
technology: [generative-ai, multimodal, prompt-engineering, edtech-platform]
assessment: [evaluative-judgment, self-assessment]
methods: [ai-ed-evaluation, qualitative-research, mixed-methods-research, design-based-research, usability-research]
ethics: [equity-in-ai-education, bias-mitigation, differential-effects-across-learner-groups, digital-divide, guardrails, trust-calibration]
research_method: [thematic analysis, system development, user study]
discipline: [cs education, learning sciences]
level: [secondary, middle school]
audience: [researchers, instructors, educational technology developers, instructional designers, learners]
page_kind: [evaluation]
sources: ['raw/papers/solyst-youth-systematic-evaluation-genai-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
---

> **Synthesis:** Solyst, Walker, Handa, Nurdin, and Shapiro (2026) report a five-day AI literacy camp in which 16 teenage girls (ages 13 to 18) used a custom text-to-image interface, Promptinator, to evaluate [[generative-ai|generative AI]] systematically, treating prompts as tests, images as evidence, and pre-prompts as the conditions that make outputs comparable. Youth defined goodness as prompt adherence, realism, and diverse representation, but applied those criteria unevenly: they conflated personal preference with output quality, stopped at surface-level pattern recognition without causal interpretation, and were derailed by model [[guardrails]] that blocked attempts to depict people who looked like them. Structured comparison and peer sensemaking produced more specific claims, yet the most rigorous activity was also the most fatiguing.

## Key Findings

- **Goodness meant prompt adherence, realism, and representation.** One group (PA, PE, PK, PN) said goodness "happens when AI gives you exactly what you have requested, without the need of adding more or less [to the prompt]." Another (PH, PB, PJ, PP) held that "goodness reflects how realistic the image is," with others naming photorealistic aesthetics and anatomical plausibility.
- **Representation became a criterion only after instruction.** Early skepticism was tentative, as when PN said "[Doctor] is just men and nurse is just woman." After the diversity lesson, PP was unsure about quality because "the quality [was] good, but they only used one gender for prompt," and PC asked, "Are you biased right now, AI?" when Black representation was missing from an output.
- **Pattern recognition ran ahead of interpretation.** PG noticed a recurring pattern in an image of a Black girl opening birthday presents and critiqued a detail ("the necklace is too big and bulky") without connecting it to stereotypical portrayal. Another pair found that requesting bangs produced an Asian woman every time: "We had to remove the word 'bangs' because it would show an Asian girl each time," (PE), and did not treat that as harmful or helpful. Only a small number of pairs (PN and PK; PE and PA) carried diversity into their later criteria.
- **Pleasantness was conflated with goodness, especially for the 13-year-olds.** In AI Explorations, all 13-year-old learners struggled with this. PC prompted "dirty, stinky smell, nasty food, dark, in your shell" and classified the output not-so-good because "my dystopia is dark, stink and bad food," collapsing dystopian content with image quality. PO called a "big flower filled with a lady in the middle" satisfactory "because I like big flower [fields]."
- **Criteria defined earlier were abandoned in the moment.** PF wrote that good images are realistic and "look like me," then rejected a "Black American girl on her birthday counting money" output as "not-so-good" because "the picture looks boring" and "I just don't like it," while accepting a "Girl shopping for Nike shoes in footlocker" image because "I like this because I like to go shoe shopping." Preference-based judgment was stronger in the open-ended activities than in the Venn diagram.
- **Prompt specificity shaped evaluation depth.** PK prompted "a pair of little sisters inside a traditional japanese house with a small fountain and rock structures, wearing black uniforms with a unique haori for each of them," then judged the result not-so-good because "the details in the uniforms were not really accurate." PF, who described scenes rather than image elements, was left saying she was "disappointed" without saying why.
- **Prompting shifted as learners met limitations.** PC moved from prompts about friends to lists of adjectives; PL moved from narrating a story to terse description; PB separated ideas with slashes ("Purple smoke dystopia with multiple African American robot man holding purple flames/ the world is a guy looking into VR").
- **Rigor is costly.** The Venn diagram activity supported quantification and peer sensemaking but left learners visibly fatigued relative to the open-ended postcard work. Defining rubrics in Promptinator took enough time that the researchers dropped the feature after one try.

## Study Design

### Participants, setting, and ethics

The camp ran inside a weeklong summer program organized with a community organization that primarily serves Black youth, which recruited learners through flyers and virtual newsletters with the goal of expanding access to computing education for girls of color. The sample was 16 teenage girls, ages 13 to 18 (average 15 years old); self-described race spanned Black/African American, Hispanic/Latino, multiracial, and one White participant, and computing experience ranged from none to AP CS and robotics electives (Table 1). A screening survey collected age, race, and prior computing experience, and the first 17 girls ages 13 to 18 who expressed interest were invited, capped at 16 by space. The IRB-approved study used age-appropriate assent and guardian consent, voluntary research participation not required for camp attendance, and de-identified data in an access-restricted database. Youth were compensated with a \$250 gift card (\$50 per day for five 5-hour days), an IRB-approved rate suggested by the community partner.

### Promptinator and activities

Promptinator was a web interface for [[multimodal|text-to-image]] generation built on the Nova Canvas v1 foundation model via Amazon Bedrock. It exposed pre-prompts and negative prompts, normally hidden from end users, so learners could customize how the model behaved and then compare outputs with and without the customization, linking named rubrics of criteria (for example, tan skin, brown eyes, black hair) and viewing customized and non-customized images side by side. The model's guardrails were opaque to the researchers.

Activities ran across three of the five days, four hours per day. An introductory lesson paired 10 images each from the prompts "Image of a Nurse" and "Image of a Doctor" that carried racial and gender biases with a Bias Worksheet, a lesson on what makes an image diverse, and a paired Diversity Duel game in which learners built the most diverse six-word prompt for a randomly assigned occupation. In AI Explorations, learners generated images depicting someone like them and classified each as good or not-so-good with written reasoning. The Utopian and Dystopian Postcards activity had learners ideate themes, search online for inspiration images, generate up to three images, and publish an individual online gallery with an artistic statement and their prompting methodology. In the AI Goodness Discussion, small groups answered prompts including "What is 'goodness' in AI-generated images?" In the final Venn Diagram Activity, pairs created a pre-prompt and an evaluation prompt, compared outputs side by side, sorted features into the Venn regions, counted satisfactory outputs on each side, and marked good features in green and not-so-good features in red.

### Data and analysis

The first author led the camp with trained student researchers as notetakers who transcribed conversations and photographed artifacts. The corpus was approximately 129 hours of screen recordings, 44 hours of audio recordings, and 687 Promptinator image requests that generated 6,977 images. Analysis was iterative, consensus-based thematic analysis leading with researcher notes and activity artifacts, with learner prompts, written responses, and generated images coded for AI bias, prompting strategies, shifting perspectives of GenAI, and criteria for AI goodness and badness.

## What this means for practice

- **Instructors.** Treat systematic evaluation as [[inquiry-based-learning|inquiry]] with prompts as tests, images as evidence, and pre-prompts as experimental conditions. The paper's three consolidated learning goals are a workable spine: articulate criteria that are robust and generalizable, generate comparable examples, and characterize AI limitations defensibly. Make criteria visible and persistent instead of trusting recall: pin rubric elements beside each output, require brief criterion-linked annotations, summarize annotations quantitatively, and support revisions over time with prompts such as "What changed in the criteria after seeing these new outputs?"
- **Instructors.** Teach the predictable misconceptions explicitly with worked examples. The pleasantness-versus-goodness conflation is a documented red herring, and the authors note that framing the task around utopias and dystopias likely made it worse, since the good and bad connotations of the content bled into judgments about image characteristics.
- **Educational technology developers.** Automate the mechanical layer, not the reasoning: tally rubric outcomes, cluster similar images, and surface distributions across conditions, while leaving interpretive choices with learners. Comparable tests should be the default, holding prompt components fixed and suggesting one attribute at a time to vary.
- **Researchers.** Interpret refusal as an equity finding. Promptinator could swap models, but the team standardized on Nova Canvas after testing another Amazon model (Titan), whose guardrails refused a large portion of requests built from prompts contributed by youth in a prior study with the same community partner, citing Terms of Use violations for requests containing intersecting identity terms such as "Black" and "Muslim." Amazon representatives suggested the switch; Nova had more identity-inclusive guardrails but cost three times as much to use.
- **Researchers.** Use the CER framework (Claim, Evidence, Reasoning) inside evaluation tools to strengthen the warrant between observation and conclusion, and alternate short structured tests with creative production so evaluation is embedded in a compelling purpose rather than positioned as an end in itself.

## Limitations

- **One camp, one partner, one model.** The study took place in a community-partnered week-long summer camp through a single youth-facing organization, with participants who were primarily girls because of the partner's programmatic goals. The authors state explicitly that generalization to youth outside this region, to other recruitment channels, or to groups with different demographic composition and technology access is not an appropriate goal for this kind of research.
- **Structured setting.** Data collection in a structured learning context constrained by camp schedules may have shaped how youth articulated and enacted evaluation practices compared to more ecologically valid, less controlled settings.
- **No validated learning measures.** The authors did not closely measure learning gains with validated assessments of AI literacy, epistemic cognition, or evidence-evaluation skill, and therefore cannot make strong causal claims about learning outcomes from the camp.
- **Attribution gaps.** Much of the analysis relies on workshop interaction and researcher observation, so interpretations may reflect what youth chose to share in group settings and what was captured in recordings. The researchers could not identify every voice retroactively, so not all quotes can be tied back to individual learners.
- **Interface confounds.** Rubrics were dropped after one attempt, and an image-style selector was removed for simplicity even though learners repeatedly fixated on unwanted cartoon-style output.

## Citation

Solyst, J., Walker, L., Handa, S., Nurdin, F., & Shapiro, R. B. (2026). [*"Are you biased right now, AI?": Investigating supporting youths' systematic evaluation of GenAI*](https://doi.org/10.1145/3773077.3806125). *Proceedings of the 25th Interaction Design and Children Conference (IDC 2026)*, June 22-25, 2026, Brighton, United Kingdom.
