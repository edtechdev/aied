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
  /**
   * Optional localized labels for the FAQ index sections, keyed by the English heading
   * from src/data/faqIndex.ts. Omitting one falls back to the English heading.
   */
  sectionHeadings?: Record<string, string>;
  /** Optional localized section blurbs, keyed the same way. */
  sectionBlurbs?: Record<string, string>;
}

const zh: FaqStrings = {
  title: '常见问题',
  h1: '常见问题',
  introHtml:
    '本节回答关于<strong>教育中的人工智能</strong>的常见问题——研究如何看待 AI 对教学与学习的影响，以及教育工作者、授课教师和教学设计者如何把这些证据付诸实践。每个答案都凝练了本知识库所汇总研究的发现，并把问题与相关的概念和文章联系起来，供你深入阅读。',
  assistantHtml:
    '这里没有回答你的问题？可以通过<a href="/aied/ai">配合你自己的 AI 助手使用本知识库</a>页面，向你自己的 AI 助手提问；该页面说明了如何让智能体读取完整的目录，从而给出有所依据、并附有引用的回答。',
  empty: '暂无常见问题。',
  sectionHeadings: {
    "Start here": "从这里开始",
    "Course and institutional policy": "课程与院校政策",
    "Designing courses and activities": "设计课程与活动",
    "Assessment, feedback and integrity": "评估、反馈与诚信",
    "How students learn and use AI": "学生如何学习与使用 AI",
    "Particular learners, access and wellbeing": "不同学习者、可及性与福祉",
    "Careers and AI literacy": "职业发展与 AI 素养",
    "Building and evaluating educational AI": "构建与评估教育 AI",
    "Research practice": "研究实践",
  },
  sectionBlurbs: {
    "Start here": "不论你担任什么角色，这两个宽泛的问题都值得在具体问题之前先读。",
    "Course and institutional policy": "面向撰写学生将要阅读的规则的授课教师，也面向在项目层面制定这些规则的管理者与教师发展工作者。",
    "Designing courses and activities": "面向任何决定 AI 该进入任务、学期或在线课程哪一环节的人，也面向想把 AI 本该还给他们的时间拿回来的授课教师。",
    "Assessment, feedback and integrity": "这是最大的一组，因为这里的证据最清晰，后果也直接落在学生的成绩记录上。",
    "How students learn and use AI": "回答学生实际得到了什么、可能失去什么，以及如何让学习留在他们身上。",
    "Particular learners, access and wellbeing": "面向根据教室里实际坐着谁来调整设计的教师与支持人员，也面向思考谁不在其中的管理者。",
    "Careers and AI literacy": "面向课程设计者与项目负责人，回答学生问的这一切究竟为了什么。",
    "Building and evaluating educational AI": "面向把辅导系统、模拟或平台投入真实课程的开发者、教学设计者与研究者。",
    "Research practice": "面向在本领域报告、评审或规划研究的研究者。",
  },
};

export default zh;