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
      { label: 'Core pedagogies', items: ['pedagogy', 'active-learning', 'learning-by-teaching', 'collaborative-learning', 'project-based-learning', 'problem-based-learning', 'experiential-learning', 'game-based-learning', 'scaffolding', 'socratic-method', 'self-regulated-learning', 'self-determination-theory', 'sociocultural-learning', 'desirable-difficulties', 'transfer-of-learning', 'metacognition', 'constructivist', 'behaviorism', 'learning-theories', 'distributed-cognition', 'situated-learning', 'embodied-learning', 'storytelling-in-education', 'instructional-design', 'online-teaching-and-learning'] },
      { label: 'Learning theories and processes', items: ['motivation', 'self-efficacy', 'self-directed-learning', 'help-seeking', 'student-engagement', 'cognitive-diagnosis', 'prior-knowledge', 'student-modeling', 'knowledge-tracing', 'student-misconceptions-ai', 'simulating-students', 'icap-framework'] },
      { label: 'AI agents and interactions', items: ['intelligent-tutoring', 'pedagogical-agent', 'conversational-ai', 'affective-tutoring', 'affective-computing', 'human-in-the-loop-ai', 'student-ai-interaction', 'pedagogical-llm-training'] },
      { label: 'Subject areas', items: ['discipline-specific-aied', 'math-education', 'physics-education', 'chemistry-education', 'biology-education', 'language-learning', 'english-education', 'cs-education', 'writing-education', 'stem-education', 'engineering-education', 'business-education', 'teacher-education', 'medical-education', 'humanities-education', 'special-education', 'adult-learning', 'higher-ed'] },
    ],
  },
  {
    heading: 'Assessment, evaluation, and measurement',
    blurb: 'AI transforms both how we assess learners and how we evaluate AI systems themselves.',
    groups: [
      { label: 'Assessment', items: ['assessment', 'feedback', 'feedback-literacy', 'formative-assessment', 'summative-assessment', 'authentic-assessment', 'eportfolio', 'automated-assessment', 'automated-essay-scoring', 'automated-question-generation', 'assessment-validity', 'psychometrically-aware-ai', 'educational-measurement', 'item-response-theory', 'plagiarism-detection', 'academic-integrity', 'remote-proctoring', 'ai-feedback-quality', 'peer-review'] },
      { label: 'Evaluation of AI systems', items: ['ai-ed-evaluation', 'benchmark', 'research-methods-aied', 'limitations-in-aied-research', 'rct', 'learning-gains', 'meta-analysis-systematic-review', 'network-analysis'] },
    ],
  },
  {
    heading: 'AI systems and techniques',
    blurb: 'The AI models and methods that power education technology, from generative models to knowledge representation.',
    groups: [
      { label: 'Models and techniques', items: ['ai-technologies', 'generative-ai', 'llm', 'rag', 'multimodal', 'reinforcement-learning', 'educational-nlp', 'knowledge-graph', 'simulation', 'educational-robotics', 'adaptive-learning', 'personalized-learning'] },
    ],
  },
  {
    heading: 'People: learners, teachers, and institutions',
    blurb: 'AI changes the role of every stakeholder in education.',
    groups: [
      { label: 'Learners', items: ['stakeholders', 'student-experience', 'well-being', 'social-emotional-learning', 'agency', 'creativity'] },
      { label: 'Teachers', items: ['teacher-role', 'teacher-ai-competency', 'tpack', 'faculty-development', 'pedagogical-safety'] },
      { label: 'Institutions and systems', items: ['administrator', 'educational-policy-ai', 'governance', 'regulation', 'privacy', 'open-source', 'edtech-platform', 'learning-analytics', 'lifelong-learning', 'professional-training', 'k-12'] },
    ],
  },
  {
    heading: 'Equity, ethics, and responsible use',
    blurb: 'Fairness, access, and responsibility are central to AI in education.',
    groups: [
      { label: 'Equity and access', items: ['equity-in-ai-education', 'digital-divide', 'bias-mitigation', 'culturally-relevant-pedagogy', 'multilingual-learning', 'accessible-learning', 'neurodiversity', 'universal-design-for-learning', 'global-south'] },
      { label: 'Ethics and responsibility', items: ['ethics', 'ai-misuse-learning-harm', 'hallucination-risk', 'ai-sycophancy', 'trust', 'trust-calibration', 'reducing-ai-misuse', 'framing-ai-use-for-students', 'cognitive-offloading', 'critical-thinking', 'critical-pedagogy'] },
    ],
  },
  {
    heading: 'Emergent and cross-cutting themes',
    blurb: 'Concepts that span the field, from AI literacy to human–AI collaboration and design approaches.',
    groups: [
      { label: 'Cross-cutting', items: ['ai-education', 'ai-literacy', 'prompt-engineering', 'human-ai-collaboration', 'agentic-ai', 'computational-thinking', 'design-thinking', 'curriculum-design', 'technology-acceptance-model', 'philosophy-of-ai-in-education'] },
    ],
  },
];
