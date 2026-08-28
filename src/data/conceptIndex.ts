// Shared concept index data for the site-wide navigation sidebar.
// Every concept appears exactly once. Links only render for slugs that exist,
// so coverage stays safe if a concept is renamed or removed.
//
// Organization (reorganized 2026-08-28):
//  - Foundations of AI in education (cross-cutting umbrella concepts first)
//  - Learning and instruction
//  - AI technologies and techniques (learner modeling + adaptive systems are
//    grouped under the technical layer, alongside models and methods)
//  - AI in the disciplines (subject areas + educational levels)
//  - Assessment, evaluation, and measurement
//  - People: learners, teachers, and institutions
//  - Equity, ethics, and responsible use

export interface ConceptSection {
  heading: string;
  blurb?: string;
  groups: { label: string; items: string[] }[];
}

export const conceptIndex: ConceptSection[] = [
  {
    heading: 'Foundations of AI in education',
    blurb: 'The umbrella view of the field itself — what AI in education is, how it evolved, and the cross-cutting themes (AI literacy, human–AI collaboration, agency) that shape every other strand.',
    groups: [
      { label: 'The field', items: ['ai-education', 'history-of-aied', 'philosophy-of-ai-in-education', 'theory-development-aied', 'ai-literacy', 'computational-thinking'] },
      { label: 'Cross-cutting themes', items: ['human-ai-collaboration', 'agentic-ai', 'agency', 'learner-identity', 'design-thinking', 'curriculum-design', 'technology-acceptance-model', 'prompt-engineering', 'ai-use-disclosure'] },
    ],
  },
  {
    heading: 'Learning and instruction',
    blurb: 'How AI supports teaching and learning — the pedagogies, learning theories, and learner-facing processes AI operates within.',
    groups: [
      { label: 'Core pedagogies', items: ['pedagogy', 'active-learning', 'collaborative-learning', 'project-based-learning', 'problem-based-learning', 'productive-failure', 'inquiry-based-learning', 'experiential-learning', 'game-based-learning', 'learning-by-teaching', 'scaffolding', 'socratic-method', 'storytelling-in-education', 'instructional-design', 'online-teaching-and-learning'] },
      { label: 'Learning theories and processes', items: ['learning-theories', 'behaviorism', 'constructivist', 'cognitive-psychology', 'sociocultural-learning', 'distributed-cognition', 'situated-learning', 'embodied-learning', 'community-of-inquiry', 'self-regulated-learning', 'self-determination-theory', 'motivation', 'self-efficacy', 'self-directed-learning', 'metacognition', 'desirable-difficulties', 'transfer-of-learning', 'prior-knowledge', 'icap-framework', 'refutation-text', 'activity-theory-aied'] },
      { label: 'Learner engagement and experience', items: ['student-engagement', 'help-seeking', 'social-emotional-learning', 'well-being', 'creativity', 'student-misconceptions-ai', 'student-ai-interaction'] },
    ],
  },
  {
    heading: 'AI technologies and techniques',
    blurb: 'The technical layer: the AI models and methods that power education technology, and the learner-modeling and tutoring systems built on them.',
    groups: [
      { label: 'Models and techniques', items: ['ai-technologies', 'generative-ai', 'llm', 'rag', 'multimodal', 'educational-nlp', 'reinforcement-learning', 'knowledge-graph', 'educational-robotics', 'conversational-ai', 'simulation', 'pedagogical-llm-training'] },
      { label: 'Learner modeling and adaptive systems', items: ['student-modeling', 'knowledge-tracing', 'cognitive-diagnosis', 'simulating-students', 'intelligent-tutoring', 'adaptive-learning', 'personalized-learning', 'pedagogical-agent', 'affective-tutoring', 'affective-computing', 'human-in-the-loop-ai'] },
    ],
  },
  {
    heading: 'AI in the disciplines',
    blurb: 'How AI is applied across academic subjects and educational levels — the field\u2019s subject-area coverage.',
    groups: [
      { label: 'Subject areas', items: ['discipline-specific-aied', 'math-education', 'physics-education', 'chemistry-education', 'biology-education', 'cs-education', 'engineering-education', 'stem-education', 'writing-education', 'language-learning', 'english-education', 'business-education', 'humanities-education', 'medical-education'] },
      { label: 'Levels and contexts', items: ['k-12', 'early-childhood-elementary-ai-education', 'higher-ed', 'adult-learning', 'special-education', 'teacher-education'] },
    ],
  },
  {
    heading: 'Assessment, evaluation, and measurement',
    blurb: 'How AI both assesses learners and reshapes how we evaluate AI systems and their impact.',
    groups: [
      { label: 'Assessment and feedback', items: ['assessment', 'feedback', 'feedback-literacy', 'ai-feedback-quality', 'formative-assessment', 'summative-assessment', 'authentic-assessment', 'eportfolio', 'peer-review', 'automated-assessment', 'automated-essay-scoring', 'automated-question-generation'] },
      { label: 'Measurement and validity', items: ['assessment-validity', 'psychometrically-aware-ai', 'educational-measurement', 'item-response-theory', 'plagiarism-detection', 'academic-integrity', 'remote-proctoring'] },
      { label: 'Evaluation of AI systems', items: ['ai-ed-evaluation', 'benchmark', 'research-methods-aied', 'qualitative-research', 'quantitative-research', 'mixed-methods-research', 'design-based-research', 'usability-research', 'limitations-in-aied-research', 'rct', 'learning-gains', 'meta-analysis-systematic-review', 'network-analysis'] },
    ],
  },
  {
    heading: 'People: learners, teachers, and institutions',
    blurb: 'AI changes the role of every stakeholder in education — learners, teachers, and the institutions that support them.',
    groups: [
      { label: 'Learners', items: ['stakeholders', 'student-experience', 'career-development-and-readiness', 'ai-anxiety-and-stress'] },
      { label: 'Teachers', items: ['teacher-role', 'teacher-ai-competency', 'tpack', 'faculty-development', 'pedagogical-safety'] },
      { label: 'Institutions and systems', items: ['administrator', 'educational-policy-ai', 'governance', 'guardrails', 'regulation', 'privacy', 'open-source', 'edtech-platform', 'lifelong-learning', 'professional-training', 'learning-analytics'] },
    ],
  },
  {
    heading: 'Equity, ethics, and responsible use',
    blurb: 'Fairness, access, and responsibility are central to AI in education.',
    groups: [
      { label: 'Equity and access', items: ['equity-in-ai-education', 'digital-divide', 'bias-mitigation', 'culturally-relevant-pedagogy', 'multilingual-learning', 'inclusive-learning', 'accessibility', 'assistive-technology', 'neurodiversity', 'universal-design-for-learning', 'global-south'] },
      { label: 'Ethics and responsibility', items: ['ethics', 'ai-misuse-learning-harm', 'hallucination-risk', 'ai-sycophancy', 'trust', 'trust-calibration', 'reducing-ai-misuse', 'framing-ai-use-for-students', 'cognitive-offloading', 'critical-thinking', 'critical-pedagogy'] },
    ],
  },
];
