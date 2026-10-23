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
    'A curated set of free tools, collections, instruments and formats for AI in education: things you can use today rather than research you have to read first. Most are made by educators, instructional designers, librarians and researchers, and many were built with AI help by people who are not professional developers.',
    'Not everything here is interactive. Alongside browser tools and AI tutors there are libraries of ready-made prompts and "gems", collections of classroom activities, briefing and policy documents, assessment instruments, and open file formats. Each entry links to a page about the tool: who made it, what kind of thing it is, whether the source code is open, what it costs, and when its link was last checked.',
    'Every entry links to an external site this knowledge base does not control, and the links are checked periodically; each page shows the date its link was last confirmed. If a tool has moved, closed down, or is missing and should be here, <a href="https://github.com/edtechdev/aied/issues" target="_blank" rel="noopener">open an issue</a> on the repository.',
  ],
  empty: 'No resources yet.',
  groupLabels: {
    software: 'Software',
    'ai tutor': 'AI tutors',
    'agent skill': 'Agent skills',
    'prompt or gem library': 'Prompt and gem libraries',
    'collection of tools': 'Collections of tools',
    'collection of activities': 'Collections of activities',
    'assessment instrument': 'Assessment instruments',
    'open format or specification': 'Open formats and specifications',
    'ebook or guide': 'Ebooks and guides',
    'case study collection': 'Case study collections',
    'dataset or benchmark': 'Datasets and benchmarks',
  },
};

export default en;