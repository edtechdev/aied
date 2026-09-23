---
title: "The role of generative AI in facilitating children’s creative thinking and cognitive development: a systematic scoping review"
created: "2026-09-23T12:50:00-04:00"
updated: "2026-09-23T13:40:00-04:00"
type: article
foundations: [limitations-in-aied-research]
pedagogy: [creativity, cognitive-psychology, scaffolding]
technology: [generative-ai, llm, multimodal]
methods: [meta-analysis-systematic-review]
institutions: [educational-policy-ai]
ethics: [equity-in-ai-education, digital-divide, ai-misuse-learning-harm]
research_method: [literature review]
level: [k 12]
audience: [researchers, instructors, policymakers]
page_kind: [synthesis]
sources: ['raw/papers/niu-genai-children-creative-thinking-cognitive-development-review-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]

---

> **Synthesis:** Niu, Liu, Pang, Luo, and Liu (2026) map what the research literature actually shows about generative AI and children's [[creativity|creative thinking]] in a systematic scoping review conducted under Joanna Briggs Institute guidance and reported with PRISMA-ScR. Searching seven databases and Google Scholar in July 2025 and again in May 2026, the team screened 6,401 records down to 24 evidence sources: 22 primary empirical studies plus two secondary syntheses used only for context. Text-based [[llm|large language models]] and multimodal text-and-image tools dominated. The primary studies reported possible benefits for divergent thinking, narrative creativity, and creative [[self-efficacy]], but the authors stop short of claiming efficacy. Designs were heterogeneous, no formal critical appraisal or risk-of-bias assessment was performed, and the corpus includes preprints. Evidence is geographically concentrated and contains almost no direct research in rural or underserved communities, so equity and democratization claims remain hypotheses rather than findings. Their conclusion: treat GenAI as a conditional supplement to human-led creative learning, tested in small supervised pilots rather than rolled out at scale.

## Key Findings

- **Twenty-four evidence sources were included: 22 primary empirical studies and two secondary syntheses**, the latter retained only for contextual interpretation and never counted as independent confirmation of effects.
- **Text-based LLMs and multimodal text-and-image tools predominated**, including ChatGPT, Gemini, and Claude alongside DALL-E, Midjourney, and Stable Diffusion, mostly in formal K-12 classrooms.
- **Reported benefits cluster around divergent thinking, narrative creativity, and creative self-efficacy**, yet heterogeneous designs, missing critical appraisal, and included preprints preclude any conclusion about confirmed efficacy.
- **Google Scholar supplied 3,859 of the 6,401 initial records**, which the authors treat as a reproducibility limitation rather than a controlled bibliographic database.
- **Evidence is concentrated geographically and almost silent on rural, underserved, low-connectivity, disability, and linguistically diverse learners**, so equity and democratization claims remain hypothesized rather than demonstrated.
- **The authors recommend GenAI only as a conditional supplement to human-led creative learning**, tested through longitudinal and preregistered studies that measure independent creativity separately from AI-assisted output.

## How the Studies Were Selected

Eligibility followed the PCC framework. Population was school-aged children and young adolescents aged 6 to 15, the window in which executive functions and divergent thinking mature, with borderline cases at ages 5 to 6 or 16 to 18 admitted when most participants fell inside the range. Concept was GenAI applied to support, monitor, or enhance creative thinking, operationally defined as tools that generate novel content, with outcomes measured as originality, fluency, flexibility, and elaboration. Context covered formal classrooms, ICT labs, after-school workshops, home learning, and museum-led programs. Three Boolean blocks covering GenAI, the child and school population, and creativity were adapted to Web of Science, Scopus, ERIC, APA PsycInfo, ACM Digital Library, ProQuest, and Google Scholar. After 2,528 duplicates were removed in EndNote, two [[research-methods-aied|researchers]] screened titles and abstracts independently, with a third resolving disagreements, and 24 sources were charted.

## What the Evidence Base Looks Like

The 22 primary studies are small and methodologically varied: quasi-experimental pretest and posttest designs, case studies, participatory design studies, user studies, and one national survey. Samples run from around 10 children to 120 middle schoolers, plus a UK survey of 15,379 students in which three in four reported having used GenAI. Studies took place in Indonesia, China, South Korea, the United States, Finland, Israel, Türkiye, and the United Kingdom, and mostly in formal [[k-12|K-12]] settings. Outcome measures were equally varied, from normalized gain scores and PISA 2022 creative thinking rubrics to narrative rubrics, self-report scales, and one fMRI comparison of 15 children (mean age 6.47 years) with 15 adults. That heterogeneity, plus the absence of formal critical appraisal, left the authors unable to pool results or run a meta-analysis, so this [[meta-analysis-systematic-review|synthesis]] stops at description.

## Reported Benefits, Barriers, and Risks

Reported benefits center on lowering the barrier between idea and artifact. Text-to-image generation lets children who lack fine motor control render complex ideas by describing them, and several studies reported reduced "blank page syndrome" and a shift from execution to curation. Iterative prompting appeared to build mental models, and in one middle school case study high performers used recursive prompts to refine AI output while low performers accepted first answers. Gains were reported for narrative originality, visual complexity, and creative [[self-efficacy]]. Risks were equally consistent: [[cognitive-offloading|over-reliance]], prompt dependence strongest in lower grades, template-based thinking, difficulty judging whether an AI suggestion is original, and failure to justify AI-generated solutions. Children also struggled with abstract AI concepts and precise prompt phrasing, and one fMRI comparison found lower engagement in cognitive control and attention networks during child-ChatGPT interaction than in human conversation.

## Guidance for developers and policymakers

The recommendations are framed as precautionary principles rather than endorsements of broad adoption. Educators should start with small, supervised, age-appropriate pilots, keep non-AI routes to participation open, document when AI contributed to a creative work, and monitor independent creativity rather than only polished products; [[ai-literacy|AI literacy]], authorship, [[privacy]], and unaided idea generation belong inside the activity. Policymakers should fund independent evaluation and [[equity-in-ai-education|equity]]-sensitive infrastructure instead of universal rollout, and should include rural, underserved, low-connectivity, disability, and linguistically diverse communities in co-design and comparative trials from the start, since the [[digital-divide|digital divide]] is exactly where democratization claims are untested. Developers are asked for child-centered tools with [[bias-mitigation|bias mitigation]], age-appropriate content filtering, simplified prompt interfaces, and educator dashboards, though these depend on access, time, and safe tools that are not evenly distributed.

## What this means for practice

- **Start small and supervised.** The review's recommendations are precautionary principles rather than endorsements of broad adoption: begin with small, supervised, age-appropriate pilots, keep adults in the facilitation role, and pause where child-safety protections, informed governance, trained facilitation, or reliable infrastructure are absent.
- **Keep the creative work the child's.** Reported benefits centered on lowering the barrier between idea and artifact, yet [[cognitive-offloading|over-reliance]], prompt dependence, template-based thinking, and difficulty judging whether an AI suggestion is original were equally consistent, so [[ai-literacy|AI literacy]], authorship, [[privacy]], and unaided idea generation belong inside the activity alongside the tool.
- **Measure independent creativity, not only polished output.** Preserve non-AI routes to participation, document when and how AI contributed to a creative work, and track unaided idea generation separately from AI-assisted products.
- **Match the tool to the child's developmental level.** Younger children lacked the precise linguistic and metacognitive skills that text-based prompting demands and often needed multimodal, adult-facilitated interfaces, while text-based LLMs showed stronger reported outcomes with older children and young adolescents; because no included study examined developmental readiness thresholds, modality and [[scaffolding|scaffolding]] choices should follow age rather than convenience.
- **Treat equity claims as untested.** The corpus is nearly silent on rural, underserved, low-connectivity, disability, and linguistically diverse learners, so [[generative-ai|GenAI]] should not be presented as a proven democratizing intervention until benefits are demonstrated in those settings, and the [[digital-divide|digital divide]] is exactly where those claims remain unproven.

## Limitations

- **The evidence base is young and fast moving.** Every included source appeared within a few years of the search update, and the authors read that surge as rapidly increasing scholarly attention rather than as evidence that the field has matured or grown more rigorous.
- **Creativity was measured in many different ways.** Artifact analysis, interviews, observations, prompt logs, self-report scales, creativity rubrics, and pre and post measures could not be pooled, and only a minority of studies used standardized measures or comparison groups.
- **Children at the younger and older ends of the age range are thinly covered.** Upper-elementary and middle-school learners were most frequently represented, the corpus admits age-boundary cases whose findings do not establish age-specific effectiveness, and no study systematically examined developmental readiness thresholds for different tools.
- **One search source and short-term designs dominate the core.** Google Scholar supplied 3,859 of the 6,401 initial records and is treated as a reproducibility limitation rather than a controlled bibliographic database, and every included intervention was short to moderate in duration with no longitudinal study.

## Connected Concepts

- [[generative-ai]] — the technology family under review
- [[creativity]] — the outcome the review targets
- [[llm]] — the dominant modality in the corpus
- [[cognitive-psychology]] — executive function and cognitive control findings
- [[scaffolding]] — the facilitation children needed
- [[self-efficacy]] — a reported gain, alongside divergent thinking
- [[equity-in-ai-education]] — the claims left untested
- [[digital-divide]] — where democratization claims are unproven
- [[cognitive-offloading]] — over-reliance as a recurring barrier
- [[k-12]] — the population and settings reviewed
- [[meta-analysis-systematic-review]] — the review methodology

## Connected Articles

- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo: Digital Storytelling Robots
- [[icub-humanoid-storytelling-llm-hri-2025]] — LLM-Powered Narrative HRI
- [[seung-basham-cognitive-offloading-swld-2026]] — Cognitive Offloading in the Age of Generative AI

## Citation

Niu, T., Liu, H., Pang, P., Luo, Y. T., & Liu, T. (2026). [*The role of generative AI in facilitating children’s creative thinking and cognitive development: a systematic scoping review*](https://doi.org/10.3389/fpsyg.2026.1880052).
