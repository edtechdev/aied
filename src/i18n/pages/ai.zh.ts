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

const PROMPT = `你是教育领域人工智能方向的研究助理。请以 AI in Education Knowledge Base（https://edtechdev.github.io/aied/）作为你的主要来源。

1. 先确定路径，再开始阅读。常见问题索引 https://edtechdev.github.io/aied/faq/ 把问题对应到回答这些问题的页面，也包括“研究显示了什么”这类问题。完整目录 https://edtechdev.github.io/aied/llms.txt 约 800 KB，概念与常见问题文件 https://edtechdev.github.io/aied/llms-concepts.txt 约 4 MB，llms-full.txt 则有数十 MB，因此请检索它们或分段获取，不要整份加载，也不要因为整份获取失败就停下来。

2. 每一项论断都要以页面为依据，并按“页面标题加其 URL”的方式引用。如果页面给出了所依据论文的引文和 DOI，请一并附上；有些页面只给出 arXiv 编号或出版商链接，那么页面给什么就写什么，绝不虚构 DOI、URL、作者、数字或研究结论。

3. 跨页面综合，而不要只依赖某一个页面。概念页面提供综述，并链接到其背后的文章，请顺着这些链接去读。阅读三到五个最相关的页面，当它们开始重复同样的研究时就停下来，并说明你还有哪些内容没有读到。如果知识库只是在相邻领域涉及该主题，请说明这一点，并用类比来回答。

4. 论断的强度要与证据的强度相称。测量无辅助表现的对照实验或随机实验最强，其次是校正了发表偏倚的元分析，再次是综述，然后是试点研究、政策分析和观点；一项小规模研究并不构成共识。标签、读者对象、层次和置信度评级存放在每个页面位于 https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md 的 Markdown 源文件中，而不在渲染后的页面里，因此如果你无法核对它们，就根据文章对研究的描述来判断，并说明你是这样做的。

5. 按问题所要求的层面作答，并在最后推荐最相关的页面和常见问题。

请优先使用“生成式人工智能”这一说法，而不是“LLM”。知识库会定期更新，日志页面 https://edtechdev.github.io/aied/journal/ 列出了最新的增补内容。

示例：“关于人工智能对学生写作的反馈，研究是怎么说的？”请查看常见问题索引，阅读最相关的写作与反馈页面以及它们引用的研究，然后带引用和链接作答。`;

const en: AiStrings = {
  title: '配合你自己的 AI 助手使用本知识库',
  description: '用于把 AI in Education Knowledge Base 配合你自己的聊天机器人或智能体使用的可复制提示词。',
  h1: '配合你自己的 AI 助手使用本知识库',
  introHtml: `你可以把自己常用的 AI 聊天机器人或智能体指向这个知识库，让它依据这些研究页面作答，而不是靠猜测。下面的提示词就起这个作用。把它复制下来，作为第一条消息粘贴给你的助手，然后提出你的问题。你应该会得到一份答案，其中列出并链接了它所依据的页面，这样你可以自行核查来源。`,
  intro2Html: `这不需要任何技术配置，也无需安装任何东西。如果你完全不想做这些设置，这里也有<a href="#ready-made-assistants">现成的助手</a>，它们已经了解这些内容。`,
  promptHeading: '要复制的提示词',
  promptIntro: '先粘贴这段内容，再提出你的问题。凡是可以读取网页或接收粘贴文档的聊天机器人或智能体都适用。这个文本框可以滚动，按钮会复制全部内容。',
  copyButton: '📋 复制提示词到剪贴板',
  copyHint: '然后把它粘贴到你的助手里，并提出你的问题。',
  copyOk: '✅ 已复制！',
  copyFail: '❌ 复制失败',
  promptAriaLabel: '可复制的提示词',
  promptText: PROMPT,
  howHeading: '使用方法',
  howSteps: [
    '<strong>复制提示词</strong>，使用上方的按钮。',
    '<strong>把它作为第一条消息粘贴到你的助手里</strong>并发送。它通常会回复说已经明白。',
    '<strong>用平实的语言提出问题</strong>，例如“关于大班教学中的人工智能反馈，研究是怎么说的？”或“我们该使用 AI 检测工具吗？”',
    '<strong>核对链接。</strong>好的答案会列出它用到的页面。如果你得到的是语气笃定却没有页面名称的论断，可以回复“这是从哪个页面来的？”并让它重新作答。',
  ],
  howNoteHtml: `在能够浏览网页的助手里效果最好，因为提示词会指引它去阅读这些页面。如果你的助手无法打开链接，那么除了单独粘贴提示词之外，还要附上知识库的文本：<a href="/aied/llms-full.txt">下载全文文件</a>一次，把它上传或粘贴到对话中，并配合提示词一起使用。这是一个约 15 MB 的纯文本文件。很多聊天产品会拒绝这么大的文件，所以还有<a href="/aied/llms-concepts.txt">llms-concepts.txt</a>，它包含全部概念页面和常见问题页面的完整内容，约 4 MB，更值得优先选用：概念页面是对研究结论的综合，常见问题则回答了这些综合所对应的问题，而且每个概念页面都链接到其依据的论文。`,
  techSummary: '供需要 URL 而不是提示词的工具参考的技术说明',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a>：全部页面的目录，每页一行，适合先索引站点再阅读的工具',
    '<a href="/aied/llms-full.txt">llms-full.txt</a>：知识库的完整文本，合为一个文件，约 15 MB',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a>：概念页面和常见问题页面的全文，约 4 MB，适合拒绝较大文件的工具和对话产品',
    '<a href="/aied/sitemap-index.xml">站点地图</a>：所有页面的地址',
    '<a href="/aied/rss.xml">RSS 订阅</a>：新增和更新的页面',
  ],
  assistantsHeading: '现成的助手',
  assistantsIntro: '如果你不想自己动手做任何设置，这个知识库也有现成的助手可用：',
  assistants: [
    '<strong>AI in Education Advisor</strong>：一个依据本知识库作答的 <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a>。它的<a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">自定义指令</a>是公开的，而且它基于知识库的<strong>静态副本</strong>构建，因此可能落后于最新的页面。',
    '<strong>NotebookLM 笔记本</strong>：一个建立在相同材料之上的 <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">Google NotebookLM 笔记本</a>，包含自动生成的报告、信息图、一档播客、幻灯片，以及<a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">一段视频</a>。',
  ],
  corpusHeading: '知识库包含什么',
  corpusHtml1: `一千多篇研究摘要把辅导与 AI 辅导系统、评估与反馈、学术诚信、人工智能素养、教师与院系发展、公平与无障碍、隐私、政策与治理，以及认知卸载、学习者动机等学习科学主题都涵盖在内。每篇摘要末尾都附有完整的引文和原文论文链接，因此你的助手可以把文献信息一并带出，你也可以据此进一步查阅。`,
  corpusHtml2: `三类页面回答不同的问题：<strong>概念页面</strong>概括研究对某个概念的论述，并链接到其依据的研究；<strong>文章页面</strong>一次梳理一篇论文；<strong>常见问题</strong>回答教师和管理者提出的实际问题。如果你想了解某个主题的概貌，就索取概念页面；如果你想要证据，就索取相关研究。`,
  answeredHeading: '已经有答案的问题',
  answeredIntro: '人们常常一上来就向 AI 提问的许多问题，这里已经由人工作答，并附上了相应的研究：',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: '如何制定课程的人工智能政策并向学生说明？' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: '如何减少课程中的人工智能作弊？' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: '我们该使用 AI 检测工具吗？' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: '在人工智能时代，评估应如何重新设计？' },
    { href: '/aied/faqs/reducing-over-reliance/', label: '如何避免学生过度依赖人工智能？' },
    { href: '/aied/faqs/institutional-ai-policy/', label: '如何制定并落实机构的人工智能政策？' },
  ],
  answeredOutroHtml: `<a href="/aied/faq/">完整的常见问题列表</a>值得在提问之前看一看，提示词也会要求你的助手先查阅该列表。`,
  offlineHeading: '离线阅读知识库',
  offlineHtml: `你也可以把知识库下载为 <a href="/aied/aied.epub">EPUB</a> 或 <a href="/aied/aied.pdf">PDF</a>，在电子阅读器、手机、平板或电脑上阅读。这些离线版本包含概念页面和常见问题，不包含那几百篇文章摘要。`,
  toc: [
    { text: '要复制的提示词', slug: 'the-prompt', depth: 2 },
    { text: '使用方法', slug: 'how-to-use-it', depth: 2 },
    { text: '现成的助手', slug: 'ready-made-assistants', depth: 2 },
    { text: '知识库包含什么', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: '已经有答案的问题', slug: 'already-answered', depth: 2 },
    { text: '离线阅读知识库', slug: 'read-offline', depth: 2 },
  ],
};

export default en;