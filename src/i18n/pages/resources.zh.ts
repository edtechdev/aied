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

const zh: ResourcesStrings = {
  title: '资源',
  h1: '免费工具与资源',
  introHtml: [
    '这里汇集了一组精心挑选的、面向教育中的人工智能的<strong>免费工具、资料集、测评工具和文件格式</strong>——都是可以今天就去使用的东西，而不是需要先读一遍的研究。它们的制作者主要是教育工作者、教学设计者、图书馆员和研究者，其中许多是由并非专业开发者的人借助 AI 完成的。',
    '这里的内容并非全部都是交互式的。除了浏览器工具和 AI 辅导工具，你还会看到现成的提示词库和“gem”库、课堂活动集、简报与政策文件、测评工具，以及开放的文件格式。每条条目都是一段简短摘要，并链接到一个页面，说明它由谁制作、属于哪一类东西、源代码是否公开、使用需要多少费用，以及链接最后一次核查的时间。',
    '每条条目都会链接到本站无法控制的外部网站，这些链接会定期重新核查——每个页面都会显示链接最后确认的日期。如果某个工具已经迁移、已经关闭，或者本就该收录在这里却还没有出现，最快的办法是在代码仓库上提交一个 issue。',
  ],
  empty: '暂无资源。',
  groupLabels: {
    software: '软件',
    'ai tutor': 'AI 辅导工具',
    'agent skill': '智能体技能',
    'prompt or gem library': '提示词与 gem 资源库',
    'collection of tools': '工具合集',
    'collection of activities': '活动合集',
    'assessment instrument': '测评工具',
    'open format or specification': '开放格式与规范',
    'ebook or guide': '电子书与指南',
    'case study collection': '案例合集',
    'dataset or benchmark': '数据集与基准',
  },
};

export default zh;