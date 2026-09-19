// Canonical destination for merged article slugs.
//
// Each key is an old article slug that no longer has its own page: visiting
// articles/<key>/ on the site redirects (301) to the canonical destination
// instead of 404ing, so links already shared keep working after a merge.
// Keys here must be ARTICLE slugs, never concept slugs (those live in
// conceptRedirects.ts and are generated from concepts.registry.yaml).
//
// Maintained by hand: an article merge is an editorial decision (same paper
// ingested twice), so there is no registry block to generate this from.

export const ARTICLE_REDIRECTS: Record<string, string> = {
  // Slugs respelled to US English (same pages, renamed for house style).
  'ai-modelling-problem-generation-platform-2026': 'ai-modeling-problem-generation-platform-2026',
  'ai-tutors-vs-tenacious-myths-personalised-dialogue-2026': 'ai-tutors-vs-tenacious-myths-personalized-dialogue-2026',
  'causal-modelling-competency-assessment-2026': 'causal-modeling-competency-assessment-2026',
  'coauthorship-integrity-reconceptualising-assessment-validity-for-the-age-of-gene': 'coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene',
  'llm-common-modelling-mistakes-formalisms-2026': 'llm-common-modeling-mistakes-formalisms-2026',
  'luo-dawson-value-judgements-grading-2026': 'luo-dawson-value-judgments-grading-2026',
  'preferred-scaffolding-ai-mathematical-modelling': 'preferred-scaffolding-ai-mathematical-modeling',
  'sharma-judgement-visible-genai-assessment-2026': 'sharma-judgment-visible-genai-assessment-2026',
  'walton-bearman-assessment-judgement-2025': 'walton-bearman-assessment-judgment-2025',

  'llm-tutoring-feedback-diagnosis-gap': 'yasir-llm-tutoring-agents-2026',
  'mediational-agent-genai-sociocultural-2026': 'generative-ai-mediational-agent-sociocultural-2026',
  'collaborative-ai-tutoring': 'golrang-propact-pair-programming-2026',
  'llm-student-modeling-memory': 'nie-personavlm-long-term-personalization-2026',
  'multimodal-ai-tutoring': 'syal-multimodal-dialogue-stem-2026',
  'ai-tutor-safety-harms': 'hazra-safetutors-pedagogical-safety-2026',
  'principled-ai-education': 'finkelstein-principled-ai-education-2025',
};
