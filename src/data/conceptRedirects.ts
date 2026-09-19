// Canonical destination for merged/absorbed concept slugs.
// Each key is an old slug that no longer has its own page; visiting
// concepts/<key>/ on the site redirects (301) to the canonical destination
// instead of 404. Keys here must be concept slugs, never article slugs.
//
// GENERATED FILE - do not edit by hand.
// Source: concepts.registry.yaml (the `redirects:` block)

export const CONCEPT_REDIRECTS: Record<string, string> = {
  'accessible-learning': 'inclusive-learning',
  'ai-anxiety-and-stress': 'anxiety-and-stress',
  'ai-tutoring': 'intelligent-tutoring',
  'automated-grading': 'automated-assessment',
  'blended-learning': 'online-teaching-and-learning',
  'block-programming': 'cs-education',
  'cognitive-load-theory': 'cognitive-offloading',
  'confidence-aware-ai-assessment': 'automated-assessment',
  'dual-process-theory': 'critical-thinking',
  'engagement-metrics': 'student-engagement',
  'evaluative-judgement': 'evaluative-judgment',
  'faculty-development': 'educational-development',
  'feedback-loop': 'feedback',
  'gamification': 'game-based-learning',
  'human-robot-interaction': 'educational-robotics',
  'instructional-design': 'learning-design',
  'mooc': 'online-teaching-and-learning',
  'over-reliance': 'cognitive-offloading',
  'peer-review': 'peer-assessment',
  'plagiarism-detection': 'ai-detection',
  'programming-education': 'cs-education',
  'social-robots': 'educational-robotics',
  'student-misconceptions-ai': 'misconceptions',
  'zone-of-proximal-development': 'sociocultural-learning',
};
