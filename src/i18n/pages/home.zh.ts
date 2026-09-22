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
  introHtml: `欢迎来到 <strong>教育中的人工智能知识库</strong>：这是一个关于<a href="/aied/concepts/ai-education/">教育中的人工智能</a>的免费公共资源，面向从事教学、学习、设计或管理工作的人。它把近期开放获取的研究凝练成简短、结构清晰的页面，供你阅读并付诸实践。关于它的制作方式：页面由 AI 智能体生成和更新，并由网站开发者提供编辑指导。每一项论断都注明其依据的论文，出处可供核查。`,
  navHeading: '在站内浏览',
  navHtml: `在左侧边栏按主题逐条浏览索引，可以看到这个领域是如何组织的；如果你心里已经有想找的主题，也可以<a href="/aied/search">搜索</a>整个知识库。文章页面把一篇论文提炼为研究目的、方法和发现，并附上完整的引文和相关研究的链接；概念页面汇集研究对某个概念的论述，并链接到其依据的研究。如果你更想从问题入手，<a href="/aied/faq">常见问题索引</a>汇集了访客最先提出的那些问题，从课程的人工智能政策到是否该使用 AI 检测工具；如果你更想从工具入手，<a href="/aied/resources">资源页面</a>列出了可以直接使用的免费工具、资料集和测评工具，并标明制作者和费用。上方的概念图展示了概念之间的关联；<a href="/aied/concepts/ai-education/">教育中的人工智能</a>就是概念图背后的页面，它把概念归入十来个总括主题。`,
  chatHeading: '与知识库对话',
  chatHtml: `这里的内容同时也以机器可读的文件发布，因此你可以把自己常用的 AI 聊天机器人或智能体指向这个知识库，让它给出有出处的答案而不是靠猜测作答，相关<a href="/aied/ai">提示词在这里</a>。新页面会出现在<a href="/aied/journal">日志</a>中，如果你想持续跟进，它提供<a href="/aied/rss.xml">RSS 订阅</a>。离线阅读可以取用 <a href="/aied/aied.epub">EPUB</a> 或 <a href="/aied/aied.pdf">PDF</a>。`,
  startingHeading: '按读者推荐的入门概念',
  startingIntro: '以下是一些建议从这个知识库入手的概念。',
  groups: [
    {
      id: 'essential-concepts',
      heading: '核心概念',
      html: `<a href="/aied/concepts/ai-literacy/">人工智能素养</a>、<a href="/aied/concepts/misconceptions/">关于 AI 的常见误解</a>、<a href="/aied/concepts/agentic-ai/">智能体式 AI</a>、<a href="/aied/concepts/cognitive-offloading/">认知卸载</a>，以及<a href="/aied/concepts/interpreting-and-applying-aied-research/">如何解读和应用这些研究</a>：研究结论能够支持什么、不能支持什么，以及为什么单项研究很少能为一个问题下定论。`,
    },
    {
      id: 'instructors',
      heading: '授课教师',
      html: `<a href="/aied/concepts/teacher-role/">教师角色的变化</a>、<a href="/aied/concepts/learning-design/">学习设计</a>、<a href="/aied/concepts/assessment/">评估</a>、<a href="/aied/concepts/feedback/">反馈</a>、<a href="/aied/concepts/academic-integrity/">学术诚信</a>、<a href="/aied/concepts/framing-ai-use-for-students/">如何向学生界定 AI 的使用</a>以及<a href="/aied/concepts/reducing-ai-misuse/">减少误用</a>。若要了解你自己学科中的工具、证据和案例，见<a href="/aied/concepts/discipline-specific-aied/">你所在学科中的人工智能</a>。`,
    },
    {
      id: 'developers',
      heading: '开发者',
      html: `<a href="/aied/concepts/educational-technology-developers/">为教育而开发</a>、<a href="/aied/concepts/ai-technologies/">底层技术</a>、<a href="/aied/concepts/intelligent-tutoring/">智能导学</a>、<a href="/aied/concepts/multimodal/">多模态 AI</a>、<a href="/aied/concepts/student-modeling/">学习者建模</a>，以及<a href="/aied/concepts/pedagogical-llm-training/">为教学训练和调整模型</a>。`,
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
    '这里的每个页面都标有日期，随着新的开放获取研究发表并通过审核，知识库会不断扩充。下面的计数取自当前的内容；日期是最近一次页面更新。',
  conceptMap: {
    title: '教育中的人工智能概念图',
    desc:
      '一张以教育中的人工智能为中心的辐射状概念图，连接十二个顶层概念：' +
      '建模、学习、公平、反馈、AI素养、评估、学科、教学法、' +
      '伦理、技术、评价和研究。选择任意节点即可打开对应页面。',
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