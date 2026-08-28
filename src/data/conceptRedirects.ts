// Canonical destination for merged/absorbed concept slugs.
// Each key is an old slug that no longer has its own page; visiting
// /aied/concepts/<key>/ redirects (301) to the canonical destination
// instead of 404. Keys here must be concept slugs, never article slugs.
// Keep in sync with the merge map in tooling/concept-index.md.
export const CONCEPT_REDIRECTS: Record<string, string> = {
  'gamification': 'game-based-learning',
  'over-reliance': 'cognitive-offloading',
  'feedback-loop': 'feedback',
  'ai-tutoring': 'intelligent-tutoring',
  'confidence-aware-ai-assessment': 'automated-assessment',
  'automated-grading': 'automated-assessment',
  'cognitive-load-theory': 'cognitive-offloading',
  'dual-process-theory': 'critical-thinking',
  'engagement-metrics': 'student-engagement',
  'programming-education': 'cs-education',
  'block-programming': 'cs-education',
  'zone-of-proximal-development': 'sociocultural-learning',
  'social-robots': 'educational-robotics',
  'human-robot-interaction': 'educational-robotics',
  'mooc': 'online-teaching-and-learning',
  'blended-learning': 'online-teaching-and-learning',
  'plagiarism-detection': 'ai-detection',
  'student-misconceptions-ai': 'misconceptions',
  'accessible-learning': 'inclusive-learning',
};
