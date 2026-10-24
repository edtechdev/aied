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
  introHtml: `Welcome to the AI in Education Knowledge Base, a free, public-domain resource on <a href="/aied/concepts/ai-education/">artificial intelligence in education</a> for the people who teach, study, design, or administer it. It summarizes and synthesizes recent open-access educational research. An AI agent writes and updates the pages with editorial guidance from the site developer.`,
  navHeading: 'Navigating the site',
  navHtml: `Browse the index in the left sidebar, which is arranged by strand, or <a href="/aied/search">search</a> for a topic. Article pages condense one paper into its purpose, methods, and findings; concept pages collect what the research says about one idea and link to the studies behind it. To start from a question, the <a href="/aied/faq">FAQ</a> covers what visitors ask first, such as course AI policy or whether to run AI detectors. To start from a tool, the <a href="/aied/resources">resources page</a> lists free tools and collections, with who made each one and what it costs. The map above groups the field into twelve strands, with <a href="/aied/concepts/ai-education/">AI in Education</a> as the central node.`,
  chatHeading: 'Chat with the knowledge base',
  chatHtml: `The whole knowledge base is also published as machine-readable files, so you can point an AI chatbot or agent at it and get answers that cite the pages. <a href="/aied/ai">The prompts are here</a>. New pages go into the <a href="/aied/journal">journal</a>, which has an <a href="/aied/rss.xml">RSS feed</a>. A weekly newsletter, the <a href="/aied/news/">AIEd KB Weekly Update</a>, says what those additions mean for instructors, developers, researchers, and administrators. To read offline, download the <a href="/aied/aied.epub">EPUB</a> or the <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Recommended starting points by audience',
  startingIntro: 'Start with the group that matches your role.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Essential concepts',
      html: `<a href="/aied/concepts/ai-literacy/">AI literacy</a>, <a href="/aied/concepts/misconceptions/">misconceptions about AI</a>, <a href="/aied/concepts/agentic-ai/">agentic AI</a>, <a href="/aied/concepts/cognitive-offloading/">cognitive offloading</a>, and <a href="/aied/concepts/interpreting-and-applying-aied-research/">how to interpret and apply this research</a>, including why a single study rarely settles a question.`,
    },
    {
      id: 'instructors',
      heading: 'Instructors',
      html: `<a href="/aied/concepts/teacher-role/">The changing teaching role</a>, <a href="/aied/concepts/learning-design/">learning design</a>, <a href="/aied/concepts/assessment/">assessment</a>, <a href="/aied/concepts/feedback/">feedback</a>, <a href="/aied/concepts/academic-integrity/">academic integrity</a>, <a href="/aied/concepts/framing-ai-use-for-students/">framing AI use</a> and <a href="/aied/concepts/reducing-ai-misuse/">reducing misuse</a>. For subject-specific tools and examples, see <a href="/aied/concepts/discipline-specific-aied/">AI in your own discipline</a>.`,
    },
    {
      id: 'developers',
      heading: 'Developers',
      html: `<a href="/aied/concepts/educational-technology-developers/">Building for education</a>, <a href="/aied/concepts/ai-technologies/">the technologies underneath</a>, <a href="/aied/concepts/intelligent-tutoring/">intelligent tutoring</a>, <a href="/aied/concepts/multimodal/">multimodal AI</a>, <a href="/aied/concepts/student-modeling/">learner modeling</a>, and <a href="/aied/concepts/llm-training-and-fine-tuning/">training and adapting a model for teaching</a>.`,
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
    'Every page is dated, and the counts below reflect what is published right now; the "last updated" date at the end of the list is the most recent edit.',
  conceptMap: {
    title: 'Concept map of AI in Education',
    desc:
      'A radial map with AI in Education at the center, connected to twelve top-level concepts: ' +
      'Modeling, Learning, Equity, Feedback, AI Literacy, Assessment, Disciplines, Pedagogy, ' +
      'Ethics, Technologies, Evaluation, and Research.',
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