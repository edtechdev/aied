/**
 * Copy for the FAQ index page (`/aied/faq`). The questions themselves come from
 * the `faqs` collection.
 */
export interface FaqStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraph. May contain inline HTML and links. */
  introHtml: string;
  /** Second intro paragraph, pointing at the bring-your-own-assistant page. */
  assistantHtml: string;
  /** Shown when the collection is empty. */
  empty: string;
}

const en: FaqStrings = {
  title: 'FAQ',
  h1: 'Frequently Asked Questions',
  introHtml:
    'This section answers common questions about <strong>AI in education</strong> — what the research says about how AI affects teaching and learning, and how educators, instructors, and instructional designers can put that evidence into practice. Each answer distills findings from the research summarized across this knowledge base, connecting the question to the relevant concepts and articles for deeper reading.',
  assistantHtml:
    'Have a question not answered here? Ask your own AI assistant using the <a href="/aied/ai">Use This Knowledge Base with Your Own AI Assistant</a> page, which shows how to point an agent at the full catalog for grounded, cited answers.',
  empty: 'No FAQs yet.',
};

export default en;