---
title: "AI-Assisted Social Story Intervention for Special Education: The Design of AdaptED Stories"
created: "2026-09-22T09:36:43-04:00"
updated: "2026-09-22T09:36:43-04:00"
type: article
published: "2026-09-21"
sources: ['raw/papers/adapted-stories-social-story-intervention-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [design and evaluation study, user study]
level: [special education, k 12]
audience: [instructors, educational technology developers, researchers]
foundations: [human-ai-collaboration, teacher-role, design-thinking]
pedagogy: [storytelling-in-education, social-emotional-learning]
technology: [generative-ai, llm, speech-and-voice-technologies, personalized-learning, human-in-the-loop-ai]
assessment: [formative-assessment]
methods: [usability-research, design-based-research, mixed-methods-research]
ethics: [accessibility, assistive-technology, neurodiversity, culturally-relevant-pedagogy, bias-mitigation, privacy, inclusive-learning]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-22"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** AdaptED Stories lets [[special-education]] practitioners draft, personalize, and deliver Social Stories for autistic children: a student profile of comprehension level, interests, and challenges steers an [[llm]] that writes the narrative, while a cartoon avatar built from the child's photo makes the child the protagonist of the visuals. Nineteen [[neurodiversity|autism]] practitioners co-designed the system across four phases, and seven who used the refined version returned a mean System [[usability-research|Usability]] Scale score of 86.8. Expert review of 21 generated stories rated coherence, empathy, and grammaticality at 4.90 of 5, yet practitioners described the images as generically Western and the behavior tracker as mismatched to how they judge progress. The design argument: review alone is insufficient, and practitioners also need controls expressing cultural and clinical intent before the model generates.

## Key Findings
1. **Practitioners rated the system highly usable.** Seven special-education practitioners in the UAE completed five think-aloud tasks, returning a mean System Usability Scale score of 86.8, an "A" grade.
2. **Generated story text needed little editing.** Text quality and relevance scored 4.57 of 5 and personalized text 4.29 with practitioners, while ABA experts rating 21 stories gave coherence, empathy, and grammaticality 4.90 each.
3. **Personalized visuals were valued but less reliable.** Visual quality scored 4.14 with practitioners and 3.3 in the earlier prototype round; one zoo scene omitted the lions its text described.
4. **Visual generation was the practical bottleneck.** Practitioners reported long waits, generation failures, and protagonists whose appearance drifted across scenes.
5. **Cultural specificity was framed as accessibility, not polish.** Practitioners called generated scenes Western — one said the school "looks like something from a school in the US, not the UAE" — and asked for abaya and kandora.
6. **The behavioral tracking scale did not fit clinical practice.** Practitioners called the 0-100 behavioral score effectively binary, "either 0 or 100", and asked for goal-linked yes/no items; AI recommendations scored 4.42 but read as summaries.
7. **[[human-in-the-loop-ai|Human review]] sat between generation and use.** The workflow separates text approval from visual approval, regenerates scenes individually, and requires practitioner editing before a story reaches a child.

## What the system does
The application is a Next.js web app with MongoDB, Redis, and Cloudinary storage. Google Gemini 2.0 Flash generates story text, [[personalized-learning|personalization]], comprehension activities, and session recommendations; GPT-4o produces cartoon scene visuals; Amazon Polly supplies two child voices with speech-rate control. Three design goals drove the build: keep practitioners in control while using AI to cut authoring effort, personalize text and visuals to the child, and connect authoring to delivery, comprehension checks, and progress tracking. A base cartoon image is generated once at profile creation and reused as a character reference, so the child looks consistent across scenes; practitioners can also upload existing stories.

## Four phases of practitioner-informed design
Phase 0 interviewed five speech-language pathologists with more than eight years of experience; they found Augmentative and Alternative Communication tools already mature and resisted a broad multi-tool platform, narrowing the project to Social Stories. Phase 1 used Figma mock-ups with five practitioners and produced a text-only mode, sentence-length controls, child-like narration voices, behavior tracking, grade-based comprehension categories, and interactive activities instead of quizzes. Phase 2 gave three new practitioners a functional prototype: mean System Usability Scale 76.6, with AI visuals lowest at 3.3; PDF export, reusable base images, and threaded generation followed. Phase 3 refined the system and evaluated it with seven new practitioners.

## Where personalization breaks down
The gaps practitioners identified concern fit rather than fluency. Generated images defaulted to Western settings and generic emotional expressions, and practitioners noted that expressivity in autistic children is heterogeneous, so one expression library fits no child well. Text and imagery drifted apart: a zoo scene showed no lions though the text mentioned them, and a barbershop scene gave background characters expressions that read as mocking in a story meant to feel welcoming. One of seven AI-generated comprehension activities assumed verbal engagement a minimally verbal student could not supply. [[speech-and-voice-technologies|Text-to-speech]] scored 3.71, praised for pronouncing Arabic names but called somewhat robotic.

## Design implications and the limits of review
Three implications follow. Systems should support pre-generation steering, not only post-generation review, because constraints a practitioner would have specified upfront — a problem-and-solution structure, a child's actual expression of happiness — are hard to recover by editing output afterward. Personalization should be designed around cultural and everyday-context relevance, through structured profile fields, a more representative character library, and reference-image support, while conceding that training data may underrepresent the region regardless. Records and recommendations should fit existing practitioner workflows, which here meant categorical, goal-linked behavior items. The data risks are real: this evaluation used fictional personas, whereas deployment would handle identifiable profiles, behavior records, and photos.

## What this means for practice
- **Instructors.** Treat AI drafts as a starting point that still needs your clinical framing: these stories were fluent but sometimes missed the intervention target their titles implied.
- **[[educational-technology-developers|Educational technology developers]].** Build the intent controls before the generation button: fixing cultural and clinical mismatches afterward adds back the preparation time AI was meant to save.
- **Program administrators.** Budget for the visual pipeline, not just the text model: inconsistent, culturally mismatched imagery most limited real-world readiness.
- **Researchers.** Practitioner prototype ratings are a prerequisite for child-outcome studies, not evidence of effect: nothing here measures learning, behavior change, or preparation time.

## Limitations
- The evaluation measured practitioner perceptions in one short think-aloud session: no real children took part, no sessions with children were observed, and preparation-time savings went unmeasured.
- All seven Phase 3 practitioners were based in the UAE, recruited by purposive sampling through professional networks and special-education institutions, so the cultural-fit findings are grounded in that context.
- Practitioners worked with fictional personas and no real child data or images, so privacy and data-governance in a live deployment remains unverified.
- Visual generation delays and scene-level inconsistencies remained, and the system ran Gemini 2.0 Flash for text and GPT-4o for images, tying results to those model versions.

## Citation
Enkhjargal, B., Lalwani, H., & Salam, H. (2026). [AI-Assisted Social Story Intervention for Special Education: The Design of AdaptED Stories](https://arxiv.org/abs/2609.24245). arXiv:2609.24245.
