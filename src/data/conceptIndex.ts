// Shared concept index data for the site-wide navigation sidebar.
// Every concept appears exactly once. Links only render for slugs that exist,
// so coverage stays safe if a concept is renamed or removed.

export interface ConceptSection {
  heading: string;
  blurb?: string;
  groups: { label: string; items: string[] }[];
}

export const conceptIndex: ConceptSection[] = [
  {
    heading: 'Learning and instruction',
    blurb: 'How AI supports teaching and learning is the heart of the field — from core pedagogies to learning theories, AI agents, and subject areas.',
    groups: [
      { label: 'Core pedagogies', items: ['active-learning', 'collaborative-learning', 'project-based-learning', 'experiential-learning', 'game-based-learning', 'gamification', 'scaffolding', 'socratic-method', 'self-regulated-learning', 'self-determination-theory', 'zone-of-proximal-development', 'desirable-difficulties', 'transfer-of-learning', 'metacognition', 'cognitive-load-theory', 'dual-process-theory', 'constructivist', 'embodied-learning', 'storytelling-in-education', 'instructional-design'] },
      { label: 'Learning theories and processes', items: ['motivation', 'self-efficacy', 'help-seeking', 'student-engagement', 'engagement-metrics', 'feedback-loop', 'cognitive-diagnosis', 'student-modeling', 'knowledge-tracing', 'student-misconceptions-ai', 'simulating-students', 'icap-framework'] },
      { label: 'AI agents and interactions', items: ['ai-tutoring', 'intelligent-tutoring', 'pedagogical-agent', 'affective-tutoring', 'affective-computing', 'human-in-the-loop-ai', 'pedagogical-llm-training', 'social-robots', 'educational-robotics', 'human-robot-interaction'] },
      { label: 'Subject areas', items: ['math-education', 'physics-education', 'language-learning', 'cs-education', 'programming-education', 'writing-education', 'stem-education', 'k-12-ai-education', 'special-education', 'adult-learning', 'higher-ed', 'block-programming'] },
    ],
  },
  {
    heading: 'Assessment, evaluation, and measurement',
    blurb: 'AI transforms both how we assess learners and how we evaluate AI systems themselves.',
    groups: [
      { label: 'Assessment', items: ['assessment', 'formative-assessment', 'authentic-assessment', 'automated-assessment', 'automated-grading', 'automated-essay-scoring', 'automated-question-generation', 'assessment-validity', 'confidence-aware-ai-assessment', 'psychometrically-aware-ai', 'educational-measurement', 'item-response-theory', 'plagiarism-detection', 'academic-integrity', 'ai-feedback-quality', 'peer-review'] },
      { label: 'Evaluation of AI systems', items: ['ai-ed-evaluation', 'benchmark', 'research-methods-aied', 'rct', 'learning-gains', 'meta-analysis-systematic-review'] },
    ],
  },
  {
    heading: 'AI systems and techniques',
    blurb: 'The AI models and methods that power education technology, from generative models to knowledge representation.',
    groups: [
      { label: 'Models and techniques', items: ['generative-ai', 'llm', 'rag', 'multimodal', 'reinforcement-learning', 'educational-nlp', 'knowledge-graph', 'simulation', 'adaptive-prompt-routing', 'adaptive-learning', 'personalized-learning'] },
    ],
  },
  {
    heading: 'People: learners, teachers, and institutions',
    blurb: 'AI changes the role of every stakeholder in education.',
    groups: [
      { label: 'Learners', items: ['student-experience', 'well-being', 'social-emotional-learning', 'agency', 'creativity'] },
      { label: 'Teachers', items: ['teacher-role', 'teacher-ai-competency', 'tpack', 'faculty-development', 'pedagogical-safety'] },
      { label: 'Institutions and systems', items: ['administrator', 'educational-policy-ai', 'ai-governance-education', 'governance', 'regulation', 'privacy', 'open-source', 'edtech-platform', 'learning-analytics', 'lifelong-learning', 'professional-training', 'k-12'] },
    ],
  },
  {
    heading: 'Equity, ethics, and responsible use',
    blurb: 'Fairness, access, and responsibility are central to AI in education.',
    groups: [
      { label: 'Equity and access', items: ['equity-in-ai-education', 'digital-divide', 'bias-mitigation', 'culturally-relevant-pedagogy', 'accessible-learning', 'neurodiversity', 'universal-design-for-learning'] },
      { label: 'Ethics and responsibility', items: ['ethics', 'ai-misuse-learning-harm', 'hallucination-risk', 'trust', 'trust-calibration', 'reducing-ai-misuse', 'over-reliance', 'cognitive-offloading', 'critical-thinking'] },
    ],
  },
  {
    heading: 'Emergent and cross-cutting themes',
    blurb: 'Concepts that span the field, from AI literacy to human–AI collaboration and design approaches.',
    groups: [
      { label: 'Cross-cutting', items: ['ai-literacy', 'prompt-engineering', 'human-ai-collaboration', 'agentic-ai', 'computational-thinking', 'design-thinking', 'curriculum-design'] },
    ],
  },
];
