/**
 * Grouping for the FAQ index (`/aied/faq`).
 *
 * The index used to be one flat list of 42 questions sorted by `weight`, which
 * asked a reader to scan every title to find the two that fitted their problem.
 * The sections below group the questions by the job the reader is trying to do,
 * with a short blurb that says who the section is for. Order within a section is
 * the order written here, chosen to run from most general to most specific.
 *
 * The concepts index reads its structure from `conceptIndex`; this is the same
 * pattern for a much smaller collection. Two rules hold the two in line:
 *
 * - Every FAQ page must appear exactly once. `tooling/scripts/check-faq-index.py`
 *   fails the build's gate list if a page is missing or listed twice, so a new
 *   FAQ cannot quietly vanish from the index.
 * - A slug with no page is dropped at render time rather than linked, so a
 *   deleted page leaves no dead entry.
 *
 * Headings are ordinary English strings, translated for a locale through the
 * optional `sectionHeadings` map in `src/i18n/pages/faq.<locale>.ts`; a locale
 * without that map renders the English heading, which is the site's usual
 * fallback rule for a heading that has not been translated yet.
 */
export interface FaqSection {
  /** Section heading, shown as an h2 and used as its anchor id. */
  heading: string;
  /** One sentence telling the reader whether this section is for them. */
  blurb: string;
  /** FAQ slugs, in display order. */
  items: string[];
}

export const faqIndex: FaqSection[] = [
  {
    heading: 'Start here',
    blurb: 'Two broad questions worth reading before the specific ones, whichever role you are in.',
    items: ['top-10-findings-ai-education-instructors', 'addressing-common-misconceptions-ai-education'],
  },
  {
    heading: 'Course and institutional policy',
    blurb: 'For instructors writing the rules students will read, and for administrators and faculty developers setting them at program level.',
    items: [
      'course-ai-policy',
      'institutional-ai-policy',
      'faculty-ai-competencies',
      'faculty-development-ai',
    ],
  },
  {
    heading: 'Designing courses and activities',
    blurb: 'For anyone deciding where AI enters a task, a semester or an online course, and for instructors who want the time back that AI was supposed to give them.',
    items: [
      'designing-ai-into-learning',
      'asynchronous-online-courses-ai',
      'group-work-ai',
      'incorporating-ai-literacy',
      'ai-save-instructor-time',
      'ai-agents-support-students-instructors',
    ],
  },
  {
    heading: 'Assessment, feedback and integrity',
    blurb: 'The largest cluster, because this is where the evidence is sharpest and where the consequences land on a student record.',
    items: [
      'redesign-assessment-ai-era',
      'ai-grading-fairness-reliability',
      'check-ai-generated-question-quality',
      'ai-feedback-at-scale',
      'reduce-ai-cheating',
      'should-we-use-ai-detectors',
      'writing-instruction-ai-best-practices',
    ],
  },
  {
    heading: 'How students learn and use AI',
    blurb: 'For questions about what students actually gain, what they risk losing, and how to keep the learning with them.',
    items: [
      'does-ai-help-students-learn',
      'how-ai-impacts-students',
      'reducing-over-reliance',
      'what-personalized-learning-means',
      'verify-ai-output',
      'study-with-ai',
    ],
  },
  {
    heading: 'Particular learners, access and wellbeing',
    blurb: 'For instructors and support staff adapting the design to who is actually in the room, and for administrators thinking about who is not.',
    items: [
      'ai-multilingual-learners',
      'ai-disabled-neurodivergent-learners',
      'ai-anxiety-wellbeing',
      'ai-guidance-children-under-13',
      'equity-ethics-pedagogical-safety-research',
    ],
  },
  {
    heading: 'Careers and AI literacy',
    blurb: 'For curriculum designers and program leads answering students who ask what this is all for.',
    items: ['prepare-students-ai-careers', 'ai-literacy-evidence'],
  },
  {
    heading: 'Building and evaluating educational AI',
    blurb: 'For developers, instructional designers and researchers shipping a tutor, a simulation or a platform into a real course.',
    items: [
      'developing-ai-tutor',
      'designing-educational-ai-software',
      'training-ai-tutors-to-guide-rather-than-answer',
      'making-simulated-students-behave-like-learners',
      'making-ai-better-at-supporting-learning',
      'checking-whether-educational-ai-works',
      'evaluating-ai-interventions-methods',
    ],
  },
  {
    heading: 'Research practice',
    blurb: 'For researchers reporting, reviewing or planning work in this field.',
    items: [
      'how-can-ai-assist-with-educational-research',
      'reporting-interpreting-aied-research',
      'research-gaps-aied',
    ],
  },
];
