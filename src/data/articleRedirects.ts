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
  'llm-tutoring-feedback-diagnosis-gap': 'yasir-llm-tutoring-agents-2026',
  'mediational-agent-genai-sociocultural-2026': 'generative-ai-mediational-agent-sociocultural-2026',
  'collaborative-ai-tutoring': 'golrang-propact-pair-programming-2026',
  'llm-student-modeling-memory': 'nie-personavlm-long-term-personalization-2026',
  'multimodal-ai-tutoring': 'syal-multimodal-dialogue-stem-2026',
  'ai-tutor-safety-harms': 'hazra-safetutors-pedagogical-safety-2026',
  'principled-ai-education': 'finkelstein-principled-ai-education-2025',
};
