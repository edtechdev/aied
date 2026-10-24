/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the strand headings and blurbs are
 * generated from concepts.registry.yaml, so none of that list is repeated here.
 */
export interface ConceptsStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** What this page is and what a concept page holds. May contain inline HTML. */
  introHtml: string;
  /** Other ways into the knowledge base, and the offline editions. */
  browseHtml: string;
  /** Count line above the sections. `{count}` and `{strands}` are substituted. */
  countTemplate: string;
  /**
   * The one-sentence description under each section heading, keyed by the
   * section's English heading as it appears in src/data/conceptIndex.ts.
   * Sections with no blurb are omitted.
   */
  strandBlurbs: Record<string, string>;
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const zh: ConceptsStrings = {
  title: '概念',
  h1: '概念',
  introHtml:
    '本站所有概念页面，按左侧边栏的同样主题排列。每个页面说明 AI 与教育中的一个概念是什么意思、研究发现了什么，以及依据哪些研究。<a href="/aied/concepts/ai-education/">教育中的人工智能</a>是把它们串联起来的总主题。',
  browseHtml:
    '概念页面也提供 <a href="/aied/aied.epub">EPUB</a> 或 <a href="/aied/aied.pdf">PDF</a> 版本，便于离线阅读。若要从一个问题、一篇论文、一个工具、一次搜索或你自己的助手入手，请改看<a href="/aied/faq">常见问题</a>、<a href="/aied/journal">日志</a>、<a href="/aied/resources">资源</a>、<a href="/aied/search">搜索</a>或<a href="/aied/ai">AI 页面</a>。',
  countTemplate: '{count} 个概念页面，分为 {strands} 个主题。',
  strandBlurbs: {
    'Foundations of AI in education':
      '对整个领域的总体概览：教育中的人工智能是什么、它如何演变，以及塑造其余每个主题的贯穿性议题（人工智能素养、人机协作、能动性）。',
    'Learning and instruction':
      '人工智能如何支持学习与教学，通过它所处的教学法、学习理论与面向学习者的过程来发挥作用。',
    'Technologies and techniques':
      '技术层面：支撑教育技术的人工智能模型与方法，以及建立在其上的学习者建模与导学系统。',
    'AI in the disciplines':
      '人工智能如何应用于各学科与各教育阶段：本领域的学科覆盖范围。',
    'Assessment and measurement':
      '人工智能既评估学习者，也重塑我们评估人工智能系统及其影响的方式。',
    'Equity, ethics, and responsible use':
      '公平、可及与责任是教育中人工智能的核心。',
  },
  empty: '暂无概念页面。',
};

export default zh;
