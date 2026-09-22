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

const zh: FaqStrings = {
  title: '常见问题',
  h1: '常见问题',
  introHtml:
    '本节回答关于<strong>教育中的人工智能</strong>的常见问题——研究如何看待 AI 对教学与学习的影响，以及教育工作者、授课教师和教学设计者如何把这些证据付诸实践。每个答案都凝练了本知识库所汇总研究的发现，并把问题与相关的概念和文章联系起来，供你深入阅读。',
  assistantHtml:
    '这里没有回答你的问题？可以通过<a href="/aied/ai">配合你自己的 AI 助手使用本知识库</a>页面，向你自己的 AI 助手提问；该页面说明了如何让智能体读取完整的目录，从而给出有所依据、并附有引用的回答。',
  empty: '暂无常见问题。',
};

export default zh;