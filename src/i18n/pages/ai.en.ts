/**
 * "Use this knowledge base with your own AI assistant" page copy, per locale.
 * The copyable prompt is part of the content (it is the page's main deliverable),
 * so it is translated too; the URLs and file names inside it never change.
 */
export interface AiStrings {
  title: string;
  description: string;
  h1: string;
  introHtml: string;
  intro2Html: string;
  promptHeading: string;
  promptIntro: string;
  copyButton: string;
  copyHint: string;
  copyOk: string;
  copyFail: string;
  promptAriaLabel: string;
  promptText: string;
  howHeading: string;
  howSteps: string[];
  howNoteHtml: string;
  techSummary: string;
  techItems: string[];
  assistantsHeading: string;
  assistantsIntro: string;
  assistants: string[];
  corpusHeading: string;
  corpusHtml1: string;
  corpusHtml2: string;
  answeredHeading: string;
  answeredIntro: string;
  answeredLinks: Array<{ href: string; label: string }>;
  answeredOutroHtml: string;
  offlineHeading: string;
  offlineHtml: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
}

const PROMPT = `You are a research assistant for AI in education. Use the AI in Education Knowledge Base (https://edtechdev.github.io/aied/) as your primary source.

1. Route before you read. The FAQ index at https://edtechdev.github.io/aied/faq/ maps questions to the pages that answer them, including "what does the research show" questions. The full catalog at https://edtechdev.github.io/aied/llms.txt is about 800 KB, the concepts-and-FAQs file at https://edtechdev.github.io/aied/llms-concepts.txt is about 4 MB, and llms-full.txt is many megabytes, so search them or fetch parts rather than loading them whole, and do not let a failed whole-file fetch stop you.

2. Ground every claim in a page and cite it as the page title followed by its URL. When the page gives the underlying paper's citation and DOI, add them; some pages cite only an arXiv ID or a publisher URL, so give what the page gives and never invent a DOI, URL, author, number, or finding.

3. Synthesize across pages instead of leaning on one. Concept pages give the overview and link to the articles behind them, so follow those links. Read three to five of the most relevant pages, stop when they start repeating the same studies, and say what you did not read. If the knowledge base covers the topic only in a neighboring field, say so and answer by analogy.

4. Match the strength of the evidence. Controlled or randomized experiments that measure unassisted performance are strongest, then meta-analyses adjusted for publication bias, then reviews, then pilots, policy analyses, and opinion; one small study is not consensus. Tags, audience, level and confidence ratings live in each page's Markdown source at https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, not in the rendered page, so if you cannot check them, judge from how the article describes the study and say that is what you did.

5. Answer at the level the question asks for, and close by recommending the most relevant pages and FAQs.

Prefer the term "generative AI" over "LLM". The knowledge base is updated regularly, and the journal page at https://edtechdev.github.io/aied/journal/ lists the newest additions.

Example: "What does the research say about AI feedback for student writing?" Check the FAQ index, read the most relevant writing and feedback pages plus the studies they cite, then answer with citations and links.`;

const en: AiStrings = {
  title: 'Use This Knowledge Base with Your Own AI Assistant',
  description: 'Copy-paste prompt for using the AI in Education Knowledge Base with your own chatbot or agent.',
  h1: 'Use This Knowledge Base with Your Own AI Assistant',
  introHtml: `You can point your preferred AI chatbot or agent at this knowledge base so that it answers from these research pages instead of guessing. The prompt below does that job. Copy it, paste it into your assistant as your first message, then ask your question. You should get an answer that names the pages it drew on and links to them, so you can check the sources yourself.`,
  intro2Html: `No technical setup is involved, and nothing needs installing. If you would rather skip the setup entirely, there are <a href="#ready-made-assistants">ready-made assistants</a> that already know this material.`,
  promptHeading: 'The prompt to copy',
  promptIntro: 'Paste this in first, before your question. It works with any chatbot or agent that can read a web page or take a pasted document. The box scrolls, and the button copies the whole thing.',
  copyButton: '📋 Copy prompt to clipboard',
  copyHint: 'Then paste it into your assistant and ask your question.',
  copyOk: '✅ Copied!',
  copyFail: '❌ Copy failed',
  promptAriaLabel: 'Prompt to copy',
  promptText: PROMPT,
  howHeading: 'How to use it',
  howSteps: [
    '<strong>Copy the prompt</strong> with the button above.',
    '<strong>Paste it into your assistant</strong> as the first message, and send it. It will usually reply that it understands.',
    '<strong>Ask your question</strong> in plain language, for example "what does the research say about AI feedback in large classes?" or "should we use AI detectors?"',
    '<strong>Check the links.</strong> A good answer names the pages it used. If you get confident claims with no page names, reply "which page did that come from?" and ask it to try again.',
  ],
  howNoteHtml: `This works best in assistants that can browse the web, since the prompt points them at pages to read. If yours cannot open links, then instead of pasting the prompt on its own, also attach the text of the knowledge base: <a href="/aied/llms-full.txt">download the full-text file</a> once, upload or paste it into the conversation, and use the prompt alongside it. It is a single text file of roughly 15 MB. Many chat products refuse a file that size, so there is also <a href="/aied/llms-concepts.txt">llms-concepts.txt</a> — every concept and FAQ page in full, about 4 MB — which is the better file to reach for first: the concepts are the syntheses of what the research shows, the FAQs are the questions those syntheses answer, and each concept page links the papers behind it.`,
  techSummary: 'Technical notes for tools that want a URL instead of a prompt',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a> — a catalog of every page, one line each, for tools that index a site before reading it',
    '<a href="/aied/llms-full.txt">llms-full.txt</a> — the complete text of the knowledge base in one file, about 15 MB',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a> — full text of the concept and FAQ pages, about 4 MB, for tools and chats that reject the larger file',
    '<a href="/aied/sitemap-index.xml">Sitemap</a> — every page address',
    '<a href="/aied/rss.xml">RSS feed</a> — new and updated pages',
  ],
  assistantsHeading: 'Ready-made assistants',
  assistantsIntro: 'If you would rather not set anything up, this knowledge base is also available as a ready-made assistant:',
  assistants: [
    '<strong>AI in Education Advisor</strong> — a <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a> that answers from this knowledge base. Its <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">custom instructions</a> are public, and it was built from a <strong>static copy</strong> of the knowledge base, so it may lag behind the newest pages.',
    '<strong>NotebookLM notebook</strong> — a <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">Google NotebookLM notebook</a> built on the same material, with autogenerated reports, infographics, a podcast, slides, and <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">a video</a>.',
  ],
  corpusHeading: 'What is in the knowledge base',
  corpusHtml1: `Over a thousand research summaries cover tutoring and AI tutors, assessment and feedback, academic integrity, AI literacy, teacher and faculty development, equity and accessibility, privacy, policy and governance, and learning science topics such as cognitive offloading and learner motivation. Every summary ends with the full citation and a link to the original paper, so your assistant can pass the reference along and you can follow it up.`,
  corpusHtml2: `Three kinds of page answer different questions: <strong>concept pages</strong> summarize what the research says about one idea and link to the studies behind it, <strong>article pages</strong> cover one paper at a time, and the <strong>FAQs</strong> answer practical questions from instructors and administrators. If you want an overview of a topic, ask for a concept page; if you want the evidence, ask for the studies.`,
  answeredHeading: 'Questions that are already answered',
  answeredIntro: 'Many of the questions people ask an AI first have already been answered here by hand, with the research attached:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'How do I write a course AI policy and communicate it to students?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'How can I reduce AI cheating in my course?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Should we use AI detectors?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'How should assessment be redesigned for the AI era?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'How do I keep students from over-relying on AI?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'How do we write and implement an institutional AI policy?' },
  ],
  answeredOutroHtml: `The <a href="/aied/faq/">full list of FAQs</a> is worth a look before you ask, and the prompt tells your assistant to check that list first.`,
  offlineHeading: 'Read the knowledge base offline',
  offlineHtml: `You can also download the knowledge base as an <a href="/aied/aied.epub">EPUB</a> or <a href="/aied/aied.pdf">PDF</a> for an e-reader, phone, tablet, or computer. These offline editions contain the concept pages and FAQs, not the several hundred article summaries.`,
  toc: [
    { text: 'The prompt to copy', slug: 'the-prompt', depth: 2 },
    { text: 'How to use it', slug: 'how-to-use-it', depth: 2 },
    { text: 'Ready-made assistants', slug: 'ready-made-assistants', depth: 2 },
    { text: 'What is in the knowledge base', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Questions that are already answered', slug: 'already-answered', depth: 2 },
    { text: 'Read the knowledge base offline', slug: 'read-offline', depth: 2 },
  ],
};

export default en;