// Shared concept index data for the site-wide navigation sidebar.
// Every concept appears exactly once. Links only render for slugs that exist,
// so coverage stays safe if a concept is renamed or removed.
//
// GENERATED FILE - do not edit by hand.
// Source: concepts.registry.yaml
// Regenerate: python3 tooling/scripts/gen-concept-artifacts.py
//
// Organization of the sidebar sections lives in the registry's `sections:` block.

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
      { label: 'Essentials', items: ['ai-education', 'ai-literacy', 'agentic-ai', 'cognitive-offloading', 'framing-ai-use-for-students', 'reducing-ai-misuse', 'academic-integrity', 'teacher-role', 'learning-design', 'educational-development'] },
      { label: 'The field', items: ['history-of-aied', 'interpreting-and-applying-aied-research', 'limitations-in-aied-research', 'philosophy-of-ai-in-education', 'theories-and-frameworks', 'theory-development-aied'] },
      { label: 'Cross-cutting themes', items: ['human-ai-collaboration', 'agency', 'learner-identity', 'design-thinking', 'curriculum-design', 'critical-thinking', 'computational-thinking'] },
      { label: 'Theories and frameworks', items: ['samr-model', 'tpack'] },
    ],
  },
  {
    heading: 'Learning and instruction',
    blurb: 'How AI supports teaching and learning — the pedagogies, learning theories, and learner-facing processes AI operates within.',
    groups: [
      { label: 'Core pedagogies', items: ['pedagogy', 'active-learning', 'collaborative-learning', 'project-based-learning', 'problem-based-learning', 'productive-failure', 'inquiry-based-learning', 'experiential-learning', 'game-based-learning', 'learning-by-teaching', 'scaffolding', 'socratic-method', 'critical-pedagogy', 'pedagogical-partnerships', 'storytelling-in-education', 'online-teaching-and-learning', 'video-education'] },
      { label: 'Learning theories and processes', items: ['learning-theories', 'behaviorism', 'constructivist', 'cognitive-psychology', 'sociocultural-learning', 'distributed-cognition', 'situated-learning', 'embodied-learning', 'community-of-inquiry', 'self-regulated-learning', 'self-determination-theory', 'motivation', 'self-efficacy', 'self-directed-learning', 'metacognition', 'desirable-difficulties', 'transfer-of-learning', 'prior-knowledge', 'icap-framework', 'misconceptions', 'refutation-text', 'activity-theory-aied', 'retrieval-spacing-interleaving'] },
      { label: 'Learner engagement and experience', items: ['student-engagement', 'help-seeking', 'social-emotional-learning', 'well-being', 'creativity', 'student-ai-interaction', 'problem-solving', 'mastery-learning', 'anxiety-and-stress'] },
      { label: 'Lifelong and professional learning', items: ['career-development-and-readiness', 'lifelong-learning', 'professional-training'] },
    ],
  },
  {
    heading: 'Technologies and techniques',
    blurb: 'The technical layer: the AI models and methods that power education technology, and the learner-modeling and tutoring systems built on them.',
    groups: [
      { label: 'Models and techniques', items: ['ai-technologies', 'machine-learning', 'generative-ai', 'llm', 'rag', 'prompt-engineering', 'vibe-coding', 'multimodal', 'speech-and-voice-technologies', 'visualization', 'educational-nlp', 'reinforcement-learning', 'knowledge-graph', 'educational-robotics', 'conversational-ai', 'simulation', 'virtual-and-augmented-reality', 'pedagogical-llm-training'] },
      { label: 'Learner modeling and adaptive systems', items: ['student-modeling', 'knowledge-tracing', 'cognitive-diagnosis', 'simulating-students', 'intelligent-tutoring', 'adaptive-learning', 'personalized-learning', 'recommender-systems-and-learning-paths', 'pedagogical-agent', 'affective-tutoring', 'affective-computing', 'human-in-the-loop-ai', 'learning-analytics'] },
      { label: 'Platforms, openness and adoption', items: ['technology-acceptance-model', 'open-source', 'edtech-platform'] },
    ],
  },
  {
    heading: 'AI in the disciplines',
    blurb: 'How AI is applied across academic subjects and educational levels — the field\u2019s subject-area coverage.',
    groups: [
      { label: 'Subject areas', items: ['discipline-specific-aied', 'math-education', 'physics-education', 'chemistry-education', 'biology-education', 'cs-education', 'engineering-education', 'stem-education', 'science-education', 'writing-education', 'language-learning', 'english-education', 'environmental-education', 'business-education', 'humanities-education', 'arts-design-and-media-education', 'design-education', 'medical-education', 'nursing-education', 'legal-education', 'information-technology'] },
      { label: 'Research fields', items: ['learning-sciences'] },
    ],
  },
  {
    heading: 'Levels and contexts',
    groups: [
      { label: 'Levels and settings', items: ['k-12', 'early-childhood-elementary-ai-education', 'higher-ed', 'adult-learning', 'vocational-education', 'special-education', 'teacher-education'] },
      { label: 'Bands and comparisons', items: ['education-levels'] },
    ],
  },
  {
    heading: 'Assessment and measurement',
    blurb: 'How AI both assesses learners and reshapes how we evaluate AI systems and their impact.',
    groups: [
      { label: 'Assessment and feedback', items: ['assessment', 'evaluative-judgment', 'feedback', 'feedback-literacy', 'ai-feedback-quality', 'formative-assessment', 'summative-assessment', 'authentic-assessment', 'group-work', 'eportfolio', 'peer-assessment', 'automated-assessment', 'automated-essay-scoring', 'automated-question-generation'] },
      { label: 'Measurement and validity', items: ['assessment-validity', 'psychometrically-aware-ai', 'educational-measurement', 'item-response-theory', 'self-report-measures', 'ai-detection', 'remote-proctoring', 'learning-gains'] },
    ],
  },
  {
    heading: 'Research methods and evaluation',
    groups: [
      { label: 'Research methods', items: ['research-methods-aied', 'qualitative-research', 'quantitative-research', 'mixed-methods-research', 'design-based-research', 'usability-research', 'rct', 'meta-analysis-systematic-review', 'latent-profile-analysis', 'network-analysis'] },
      { label: 'Evaluation of AI systems', items: ['ai-ed-evaluation', 'benchmark'] },
    ],
  },
  {
    heading: 'People',
    groups: [
      { label: 'Roles and audiences', items: ['administrator', 'educational-technology-developers', 'learners', 'librarians', 'parents-and-families', 'stakeholders'] },
      { label: 'Learner experience', items: ['student-experience'] },
      { label: 'Educator capability', items: ['teacher-ai-competency'] },
    ],
  },
  {
    heading: 'Institutions and policy',
    groups: [
      { label: 'Institutions', items: ['educational-policy-ai', 'governance', 'change-management', 'regulation'] },
    ],
  },
  {
    heading: 'Equity, ethics, and responsible use',
    blurb: 'Fairness, access, and responsibility are central to AI in education.',
    groups: [
      { label: 'Equity and access', items: ['equity-in-ai-education', 'differential-effects-across-learner-groups', 'digital-divide', 'bias-mitigation', 'culturally-relevant-pedagogy', 'multilingual-learning', 'inclusive-learning', 'accessibility', 'assistive-technology', 'neurodiversity', 'universal-design-for-learning', 'global-south'] },
      { label: 'Ethics and responsibility', items: ['ethics', 'ai-misuse-learning-harm', 'legal-issues-and-risks', 'ai-use-disclosure', 'guardrails', 'privacy', 'hallucination-risk', 'ai-sycophancy', 'trust', 'trust-calibration', 'explainable-ai', 'sustainability', 'pedagogical-safety'] },
    ],
  },
];
