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
  title: '首页',
  h1: '教育中的人工智能知识库',
  introHtml: `欢迎来到教育中的人工智能知识库，这是一个关于<a href="/aied/concepts/ai-education/">教育中的人工智能</a>的免费公共资源，面向从事教学、学习、设计或管理工作的人。它汇总并综合了近期开放获取的教育研究。页面由 AI 智能体撰写和更新，并由网站开发者提供编辑指导。`,
  navHeading: '在站内浏览',
  navHtml: `在左侧边栏浏览按主题分组的索引，或<a href="/aied/search">搜索</a>某个主题。文章页面把一篇论文提炼为研究目的、方法和发现；概念页面汇集研究对某个概念的论述，并链接到其依据的研究。若想从问题入手，<a href="/aied/faq">常见问题</a>涵盖访客最先提出的问题，例如课程的人工智能政策或是否该使用 AI 检测工具。若想从工具入手，<a href="/aied/resources">资源页面</a>列出免费工具和资料集，并标明每件的制作者和费用。上方的概念图把这一领域分为十二个主题，并以<a href="/aied/concepts/ai-education/">教育中的人工智能</a>为中心节点。`,
  chatHeading: '与知识库对话',
  chatHtml: `整个知识库也以机器可读的文件发布，因此你可以把 AI 聊天机器人或智能体指向它，得到引用相关页面的答案。<a href="/aied/ai">提示词在这里</a>。新页面会进入<a href="/aied/journal">日志</a>，其中有 <a href="/aied/rss.xml">RSS 订阅</a>。离线阅读可下载 <a href="/aied/aied.epub">EPUB</a> 或 <a href="/aied/aied.pdf">PDF</a>。`,
  startingHeading: '按读者推荐的入门概念',
  startingIntro: '请从与你角色相符的分组开始。',
  groups: [
    {
      id: 'essential-concepts',
      heading: '核心概念',
      html: `<a href="/aied/concepts/ai-literacy/">人工智能素养</a>、<a href="/aied/concepts/misconceptions/">关于 AI 的常见误解</a>、<a href="/aied/concepts/agentic-ai/">智能体式 AI</a>、<a href="/aied/concepts/cognitive-offloading/">认知卸载</a>，以及<a href="/aied/concepts/interpreting-and-applying-aied-research/">如何解读和应用这些研究</a>，包括为什么单项研究很少能为一个问题下定论。`,
    },
    {
      id: 'instructors',
      heading: '授课教师',
      html: `<a href="/aied/concepts/teacher-role/">教师角色的变化</a>、<a href="/aied/concepts/learning-design/">学习设计</a>、<a href="/aied/concepts/assessment/">评估</a>、<a href="/aied/concepts/feedback/">反馈</a>、<a href="/aied/concepts/academic-integrity/">学术诚信</a>、<a href="/aied/concepts/framing-ai-use-for-students/">如何向学生界定 AI 的使用</a>以及<a href="/aied/concepts/reducing-ai-misuse/">减少误用</a>。若要了解特定学科的工具和案例，见<a href="/aied/concepts/discipline-specific-aied/">你所在学科中的人工智能</a>。`,
    },
    {
      id: 'developers',
      heading: '开发者',
      html: `<a href="/aied/concepts/educational-technology-developers/">为教育而开发</a>、<a href="/aied/concepts/ai-technologies/">底层技术</a>、<a href="/aied/concepts/intelligent-tutoring/">智能导学</a>、<a href="/aied/concepts/multimodal/">多模态 AI</a>、<a href="/aied/concepts/student-modeling/">学习者建模</a>，以及<a href="/aied/concepts/llm-training-and-fine-tuning/">为教学训练和调整模型</a>。`,
    },
    {
      id: 'administrators',
      heading: '管理者',
      html: `<a href="/aied/concepts/administrator/">管理者的角色</a>、<a href="/aied/concepts/governance/">AI 治理</a>、<a href="/aied/concepts/educational-policy-ai/">机构政策</a>、<a href="/aied/concepts/legal-issues-and-risks/">法律问题与风险</a>，以及<a href="/aied/concepts/change-management/">变革管理</a>。`,
    },
    {
      id: 'researchers',
      heading: '研究者',
      html: `<a href="/aied/concepts/research-methods-aied/">AIED 研究方法</a>、<a href="/aied/concepts/theories-and-frameworks/">理论与框架</a>、<a href="/aied/concepts/ai-ed-evaluation/">如何评估一项教育中的人工智能干预</a>、<a href="/aied/concepts/educational-measurement/">教育测量</a>、<a href="/aied/concepts/learning-gains/">学习增益的测量</a>，以及<a href="/aied/concepts/limitations-in-aied-research/">这一证据基础普遍存在的局限</a>。`,
    },
  ],
  statsHeading: '知识库包含什么',
  statsIntro:
    '每个页面都标有日期，下面的计数反映的是当前已发布的内容；列表末尾的“最后更新”日期是最近一次编辑。',
  conceptMap: {
    title: '教育中的人工智能概念图',
    desc:
      '一张以教育中的人工智能为中心的辐射状概念图，连接十二个顶层概念：' +
      '建模、学习、公平、反馈、AI素养、评估、学科、教学法、' +
      '伦理、技术、评价和研究。',
    navLabel: '教育中的人工智能概念',
    center: '教育中的人工智能',
    nodes: {
      'student-modeling': '建模',
      'learning-theories': '学习',
      'equity-in-ai-education': '公平',
      feedback: '反馈',
      'ai-literacy': 'AI素养',
      assessment: '评估',
      'discipline-specific-aied': '学科',
      pedagogy: '教学法',
      ethics: '伦理',
      'ai-technologies': '技术',
      'ai-ed-evaluation': '评价',
      'research-methods-aied': '研究',
    },
  },
  toc: [
    { text: '在站内浏览', slug: 'navigating-the-site', depth: 2 },
    { text: '与知识库对话', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: '按读者推荐的入门概念', slug: 'starting-points', depth: 2 },
    { text: '核心概念', slug: 'essential-concepts', depth: 3 },
    { text: '授课教师', slug: 'instructors', depth: 3 },
    { text: '开发者', slug: 'developers', depth: 3 },
    { text: '管理者', slug: 'administrators', depth: 3 },
    { text: '研究者', slug: 'researchers', depth: 3 },
    { text: '知识库包含什么', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default en;