/**
 * Home page copy, per locale. Each locale module exports the same keys, so the
 * page component (`src/components/pages/HomePage.astro`) renders any language with
 * no branching. HTML is allowed; internal links are authored exactly as in English
 * and are moved into the active locale by `localizeHtml` only for the routes that
 * actually have a translation.
 */
export interface HomeStrings {
  title: string;
  h1: string;
  introHtml: string;
  navHeading: string;
  navHtml: string;
  chatHeading: string;
  chatHtml: string;
  startingHeading: string;
  startingIntro: string;
  groups: Array<{ id: string; heading: string; html: string }>;
  statsHeading: string;
  statsIntro: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
  /** Home page concept map: node labels are looked up by concept slug. */
  conceptMap: {
    title: string;
    desc: string;
    navLabel: string;
    center: string;
    nodes: Record<string, string>;
  };
}

const en: HomeStrings = {
  title: 'Home',
  h1: 'AI in Education Knowledge Base',
  introHtml: `Welcome to the <strong>AI in Education Knowledge Base</strong> — a free, public-domain resource on <a href="/aied/concepts/ai-education/">artificial intelligence in education</a>, for the people who teach, study, design, or administer it. It distils recent open-access research into short, structured pages you can read and act on. A note on how it is made: the pages are generated and updated by an AI agent, with editorial guidance from the site developer. Every claim names the paper behind it, so the sourcing is there to check.`,
  navHeading: 'Navigating the site',
  navHtml: `Browse the strand-by-strand index in the left sidebar to see how the field is organised, or <a href="/aied/search">search</a> the whole knowledge base if you already have a topic in mind. Article pages condense one paper into its purpose, methods, and findings, with a full citation and links to related work; concept pages gather what the research says about one idea and link to the studies behind it. If you would rather start from a question, the <a href="/aied/faq">FAQ index</a> collects the ones visitors ask first, from course AI policy to whether to run AI detectors; if you would rather start from a tool, the <a href="/aied/resources">resources page</a> lists free tools, collections and instruments you can go and use, each saying who made it and what it costs. The concept map above shows what connects to what; <a href="/aied/concepts/ai-education/">AI in Education</a> is the map page behind it, grouping the concepts into about a dozen umbrella strands.`,
  chatHeading: 'Chat with the knowledge base',
  chatHtml: `Everything here is also published as machine-readable files, so you can point your preferred AI chatbot or agent at the knowledge base and get answers that cite it instead of guessing — <a href="/aied/ai">the prompts are here</a>. New pages appear in the <a href="/aied/journal">journal</a>, which has an <a href="/aied/rss.xml">RSS feed</a> if you want to follow along. For reading offline, take the <a href="/aied/aied.epub">EPUB</a> or the <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Recommended starting points by audience',
  startingIntro: 'Below are some recommended concepts to start with in this knowledge base.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Essential concepts',
      html: `<a href="/aied/concepts/ai-literacy/">AI literacy</a>, <a href="/aied/concepts/misconceptions/">misconceptions about AI</a>, <a href="/aied/concepts/agentic-ai/">agentic AI</a>, <a href="/aied/concepts/cognitive-offloading/">cognitive offloading</a>, and <a href="/aied/concepts/interpreting-and-applying-aied-research/">how to interpret and apply this research</a>: what the findings can and cannot support, and why a single study rarely settles a question.`,
    },
    {
      id: 'instructors',
      heading: 'Instructors',
      html: `<a href="/aied/concepts/teacher-role/">The changing teaching role</a>, <a href="/aied/concepts/learning-design/">learning design</a>, <a href="/aied/concepts/assessment/">assessment</a>, <a href="/aied/concepts/feedback/">feedback</a>, <a href="/aied/concepts/academic-integrity/">academic integrity</a>, <a href="/aied/concepts/framing-ai-use-for-students/">framing AI use</a> and <a href="/aied/concepts/reducing-ai-misuse/">reducing misuse</a>. For the tools, evidence, and examples in your own subject, see <a href="/aied/concepts/discipline-specific-aied/">AI in your own discipline</a>.`,
    },
    {
      id: 'developers',
      heading: 'Developers',
      html: `<a href="/aied/concepts/educational-technology-developers/">Building for education</a>, <a href="/aied/concepts/ai-technologies/">the technologies underneath</a>, <a href="/aied/concepts/intelligent-tutoring/">intelligent tutoring</a>, <a href="/aied/concepts/multimodal/">multimodal AI</a>, <a href="/aied/concepts/student-modeling/">learner modeling</a>, and <a href="/aied/concepts/pedagogical-llm-training/">training and adapting a model for teaching</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Administrators',
      html: `<a href="/aied/concepts/administrator/">The administrator role</a>, <a href="/aied/concepts/governance/">AI governance</a>, <a href="/aied/concepts/educational-policy-ai/">institutional policy</a>, <a href="/aied/concepts/legal-issues-and-risks/">legal issues and risks</a>, and <a href="/aied/concepts/change-management/">change management</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Researchers',
      html: `<a href="/aied/concepts/research-methods-aied/">Research methods in AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">theories and frameworks</a>, <a href="/aied/concepts/ai-ed-evaluation/">evaluating an AI in education intervention</a>, <a href="/aied/concepts/educational-measurement/">educational measurement</a>, <a href="/aied/concepts/learning-gains/">measuring learning gains</a>, and the <a href="/aied/concepts/limitations-in-aied-research/">cross-cutting limits of this evidence base</a>.`,
    },
  ],
  statsHeading: 'What is in the knowledge base',
  statsIntro:
    'Every page here is dated, and the knowledge base grows as new open-access research is published and reviewed. The counts below are read from the current contents; the date is the most recent page update.',
  conceptMap: {
    title: 'Concept map of AI in Education',
    desc:
      'A radial map with AI in Education at the center, connected to twelve top-level concepts: ' +
      'Modeling, Learning, Equity, Feedback, AI Literacy, Assessment, Disciplines, Pedagogy, ' +
      'Ethics, Technologies, Evaluation, and Research. Select any node to open its page.',
    navLabel: 'AI in Education concepts',
    center: 'AI in Education',
    nodes: {
      'student-modeling': 'Modeling',
      'learning-theories': 'Learning',
      'equity-in-ai-education': 'Equity',
      feedback: 'Feedback',
      'ai-literacy': 'AI Literacy',
      assessment: 'Assessment',
      'discipline-specific-aied': 'Disciplines',
      pedagogy: 'Pedagogy',
      ethics: 'Ethics',
      'ai-technologies': 'Technologies',
      'ai-ed-evaluation': 'Evaluation',
      'research-methods-aied': 'Research',
    },
  },
  toc: [
    { text: 'Navigating the site', slug: 'navigating-the-site', depth: 2 },
    { text: 'Chat with the knowledge base', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Recommended starting points by audience', slug: 'starting-points', depth: 2 },
    { text: 'Essential concepts', slug: 'essential-concepts', depth: 3 },
    { text: 'Instructors', slug: 'instructors', depth: 3 },
    { text: 'Developers', slug: 'developers', depth: 3 },
    { text: 'Administrators', slug: 'administrators', depth: 3 },
    { text: 'Researchers', slug: 'researchers', depth: 3 },
    { text: 'What is in the knowledge base', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default en;