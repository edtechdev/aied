/**
 * Copy for the resources index page (`/aied/resources`). The list itself is built
 * from the `resources` collection, which stays in English until those pages are
 * translated; the labels here are what a reader sees above it.
 */
export interface ResourcesStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraphs, in order. May contain inline HTML. */
  introHtml: string[];
  /** Shown when the collection is empty. */
  empty: string;
  /** Group heading per `resource_type` slug. */
  groupLabels: Record<string, string>;
}

const en: ResourcesStrings = {
  title: 'Resources',
  h1: 'Free Tools and Resources',
  introHtml: [
    'A curated set of <strong>free tools, collections, instruments and formats</strong> for AI in education — things you can go and use today rather than research you have to read first. They are made mostly by educators, instructional designers, librarians and researchers, and many were built with AI assistance by people who are not professional developers.',
    'Not everything here is interactive. Alongside browser tools and AI tutors you will find libraries of ready-made prompts and "gems", collections of classroom activities, briefing and policy documents, assessment instruments, and open file formats. Each entry is a short summary that links to a page saying who made it, what kind of thing it is, whether the source code is available, what it costs to use, and when its link was last checked.',
    'Every entry links out to an external site that this knowledge base does not control, and the links are re-checked periodically — each page shows the date its link was last confirmed. If a tool has moved, gone closed, or deserves to be here and is missing, the fastest route is to open an issue on the repository.',
  ],
  empty: 'No resources yet.',
  groupLabels: {
    software: 'Software',
    'ai tutor': 'AI Tutors',
    'agent skill': 'Agent Skills',
    'prompt or gem library': 'Prompt and Gem Libraries',
    'collection of tools': 'Collections of Tools',
    'collection of activities': 'Collections of Activities',
    'assessment instrument': 'Assessment Instruments',
    'open format or specification': 'Open Formats and Specifications',
    'ebook or guide': 'Ebooks and Guides',
    'case study collection': 'Case Study Collections',
    'dataset or benchmark': 'Datasets and Benchmarks',
  },
};

export default en;