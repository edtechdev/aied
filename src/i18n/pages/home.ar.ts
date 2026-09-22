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

const ar: HomeStrings = {
  title: 'الرئيسية',
  h1: 'AI in Education Knowledge Base',
  introHtml: `مرحبًا بكم في <strong>قاعدة معارف الذكاء الاصطناعي في التعليم</strong> — مورد مجاني يقع في الملكية العامة ويتناول <a href="/aied/concepts/ai-education/">الذكاء الاصطناعي في التعليم</a>، وهو موجَّه إلى من يُعلّمونه أو يدرسونه أو يصمّمونه أو يديرونه. وهو يقطّر البحوث الحديثة مفتوحة الوصول إلى صفحات قصيرة منظّمة يمكنك قراءتها والعمل بها. وملاحظة عن طريقة إعداده: تُولَّد الصفحات وتُحدَّث بواسطة وكيل ذكاء اصطناعي، بإرشاد تحريري من مطوّر الموقع. وكل ادعاء فيه يُسمّى البحث الذي يستند إليه، فالمرجع موجود لتتحقق منه.`,
  navHeading: 'التنقّل في الموقع',
  navHtml: `تصفّح الفهرس المرتّب حسب المحاور في الشريط الجانبي الأيسر لترى كيف يُنظَّم هذا المجال، أو <a href="/aied/search">ابحث</a> في قاعدة المعارف كلها إن كان لديك موضوع محدّد في ذهنك. وصفحات المقالات تكثّف بحثًا واحدًا في غرضه وطرائقه ونتائجه، مع استشهاد كامل وروابط لأعمال ذات صلة؛ أما صفحات المفاهيم فتجمع ما تقوله البحوث عن فكرة واحدة وتربط بالدراسات التي تقف خلفها. وإن كنت تفضّل البدء من سؤال، فـ<a href="/aied/faq">فهرس الأسئلة الشائعة</a> يجمع الأسئلة التي يطرحها الزوار أولًا، من سياسة المقرر بشأن الذكاء الاصطناعي إلى ما إذا كان ينبغي تشغيل كواشف الذكاء الاصطناعي؛ وإن كنت تفضّل البدء من أداة، فـ<a href="/aied/resources">صفحة الموارد</a> تسرد أدوات ومجموعات وأدوات قياس مجانية يمكنك الذهاب واستخدامها، مع بيان من صنعها وكلفتها. وخريطة المفاهيم أعلاه تُظهر ما يتصل بما؛ و<a href="/aied/concepts/ai-education/">الذكاء الاصطناعي في التعليم</a> هي الصفحة التي تقف خلفها، وتجمع المفاهيم في نحو اثني عشر محورًا جامعًا.`,
  chatHeading: 'محادثة قاعدة المعارف',
  chatHtml: `كل ما هنا منشور أيضًا في ملفات قابلة للقراءة آليًا، فيمكنك توجيه روبوت المحادثة أو الوكيل الذكي الذي تفضّله إلى قاعدة المعارف ليأتيك بأجوبة تستشهد بها بدل أن تخمّن — <a href="/aied/ai">والمطالبات موجودة هنا</a>. وتظهر الصفحات الجديدة في <a href="/aied/journal">السجل</a>، وله <a href="/aied/rss.xml">خلاصة RSS</a> إن أردت متابعتها. وللقراءة دون اتصال، خذ <a href="/aied/aied.epub">نسخة EPUB</a> أو <a href="/aied/aied.pdf">نسخة PDF</a>.`,
  startingHeading: 'نقاط انطلاق مقترحة حسب الفئة',
  startingIntro: 'فيما يلي بعض المفاهيم المقترحة للبدء بها في قاعدة المعارف هذه.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'المفاهيم الأساسية',
      html: `<a href="/aied/concepts/ai-literacy/">الثقافة بالذكاء الاصطناعي</a> (AI literacy)، و<a href="/aied/concepts/misconceptions/">المفاهيم الخاطئة عن الذكاء الاصطناعي</a>، و<a href="/aied/concepts/agentic-ai/">الذكاء الاصطناعي الوكيلي</a>، و<a href="/aied/concepts/cognitive-offloading/">التفريغ المعرفي</a>، و<a href="/aied/concepts/interpreting-and-applying-aied-research/">كيف تقرأ بحوث الذكاء الاصطناعي في التعليم وتطبّقها</a>: وما تستطيع النتائج أن تسنده وما لا تستطيع، ولماذا نادرًا ما يحسم بحث واحد مسألة.`,
    },
    {
      id: 'instructors',
      heading: 'المعلّمون',
      html: `<a href="/aied/concepts/teacher-role/">دور التدريس المتغيّر</a>، و<a href="/aied/concepts/learning-design/">تصميم التعلّم</a>، و<a href="/aied/concepts/assessment/">التقييم</a>، و<a href="/aied/concepts/feedback/">التغذية الراجعة</a>، و<a href="/aied/concepts/academic-integrity/">النزاهة الأكاديمية</a>، و<a href="/aied/concepts/framing-ai-use-for-students/">تأطير استخدام الذكاء الاصطناعي</a> و<a href="/aied/concepts/reducing-ai-misuse/">تقليل سوء الاستخدام</a>. وللأدوات والأدلة والأمثلة في تخصصك أنت، انظر <a href="/aied/concepts/discipline-specific-aied/">الذكاء الاصطناعي في تخصصك</a>.`,
    },
    {
      id: 'developers',
      heading: 'المطوّرون',
      html: `<a href="/aied/concepts/educational-technology-developers/">البناء من أجل التعليم</a>، و<a href="/aied/concepts/ai-technologies/">التقنيات التي تقوم عليها هذه الأنظمة</a>، و<a href="/aied/concepts/intelligent-tutoring/">التدريس الخصوصي الذكي</a>، و<a href="/aied/concepts/multimodal/">الذكاء الاصطناعي متعدد الوسائط</a>، و<a href="/aied/concepts/student-modeling/">نمذجة المتعلّم</a>، و<a href="/aied/concepts/pedagogical-llm-training/">تدريب نموذج للتدريس وتكييفه</a>.`,
    },
    {
      id: 'administrators',
      heading: 'الإداريون',
      html: `<a href="/aied/concepts/administrator/">دور الإداري</a>، و<a href="/aied/concepts/governance/">حوكمة الذكاء الاصطناعي</a>، و<a href="/aied/concepts/educational-policy-ai/">السياسة المؤسسية</a>، و<a href="/aied/concepts/legal-issues-and-risks/">المسائل والمخاطر القانونية</a>، و<a href="/aied/concepts/change-management/">إدارة التغيير</a>.`,
    },
    {
      id: 'researchers',
      heading: 'الباحثون',
      html: `<a href="/aied/concepts/research-methods-aied/">مناهج البحث في الذكاء الاصطناعي في التعليم</a>، و<a href="/aied/concepts/theories-and-frameworks/">النظريات والأطر</a>، و<a href="/aied/concepts/ai-ed-evaluation/">تقييم تدخّل بالذكاء الاصطناعي في التعليم</a>، و<a href="/aied/concepts/educational-measurement/">القياس التربوي</a>، و<a href="/aied/concepts/learning-gains/">قياس المكاسب التعليمية</a>، و<a href="/aied/concepts/limitations-in-aied-research/">الحدود المشتركة لهذه القاعدة من الأدلة</a>.`,
    },
  ],
  statsHeading: 'ما تحتويه قاعدة المعارف',
  statsIntro:
    'كل صفحة هنا مؤرَّخة، وتنمو قاعدة المعارف كلما نُشر بحث جديد مفتوح الوصول ورُوجع. والأعداد أدناه مقروءة من المحتويات الحالية؛ والتاريخ هو أحدث تحديث لصفحة.',
  conceptMap: {
    title: 'خريطة مفاهيم الذكاء الاصطناعي في التعليم',
    desc:
      'خريطة شعاعية يقع «الذكاء الاصطناعي في التعليم» في مركزها، وتتصل باثني عشر محورًا جامعًا: ' +
      'النمذجة، والتعلّم، والإنصاف، والتغذية الراجعة، والثقافة بالذكاء الاصطناعي، والتقييم، ' +
      'والتخصصات، وأصول التدريس، والأخلاقيات، والتقنيات، والتقويم، والبحث. اختر أي عقدة لتفتح صفحتها.',
    navLabel: 'مفاهيم الذكاء الاصطناعي في التعليم',
    center: 'الذكاء الاصطناعي في التعليم',
    nodes: {
      'student-modeling': 'النمذجة',
      'learning-theories': 'التعلّم',
      'equity-in-ai-education': 'الإنصاف',
      feedback: 'التغذية الراجعة',
      'ai-literacy': 'الثقافة بالذكاء الاصطناعي',
      assessment: 'التقييم',
      'discipline-specific-aied': 'التخصصات',
      pedagogy: 'أصول التدريس',
      ethics: 'الأخلاقيات',
      'ai-technologies': 'التقنيات',
      'ai-ed-evaluation': 'التقويم',
      'research-methods-aied': 'البحث',
    },
  },
  toc: [
    { text: 'التنقّل في الموقع', slug: 'navigating-the-site', depth: 2 },
    { text: 'محادثة قاعدة المعارف', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'نقاط انطلاق مقترحة حسب الفئة', slug: 'starting-points', depth: 2 },
    { text: 'المفاهيم الأساسية', slug: 'essential-concepts', depth: 3 },
    { text: 'المعلّمون', slug: 'instructors', depth: 3 },
    { text: 'المطوّرون', slug: 'developers', depth: 3 },
    { text: 'الإداريون', slug: 'administrators', depth: 3 },
    { text: 'الباحثون', slug: 'researchers', depth: 3 },
    { text: 'ما تحتويه قاعدة المعارف', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default ar;