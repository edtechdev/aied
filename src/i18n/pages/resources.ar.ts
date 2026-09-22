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

const ar: ResourcesStrings = {
  title: 'الموارد',
  h1: 'أدوات وموارد مجانية',
  introHtml: [
    'مجموعة منتقاة من <strong>الأدوات والمجموعات وأدوات القياس والصيغ المجانية</strong> الخاصة بالذكاء الاصطناعي في التعليم — أشياء يمكنك الذهاب واستخدامها اليوم، لا بحوث عليك قراءتها أولًا. ومعظمها من إعداد معلّمين ومصمّمي تعلّم وأمناء مكتبات وباحثين، وكثير منها بُني بمساعدة الذكاء الاصطناعي من أشخاص ليسوا مطوّرين محترفين.',
    'وليس كل ما هنا تفاعليًا. فإلى جانب أدوات المتصفح والمعلّمين الأذكياء، ستجد مكتبات من المطالبات والأدوات الجاهزة («gems»)، ومجموعات من أنشطة الصف، ووثائق إحاطة وسياسات، وأدوات تقييم، وصيغ ملفات مفتوحة. وكل مدخل خلاصة قصيرة تربط بصفحة تبيّن من صنعه، ونوعه، وهل الشيفرة المصدرية متاحة، وكلفة استخدامه، وتاريخ آخر تحقق من رابطه.',
    'وكل مدخل يربط بموقع خارجي لا تتحكم فيه قاعدة المعارف هذه، وتُعاد مراجعة الروابط دوريًا — وتعرض كل صفحة تاريخ آخر تأكيد لرابطها. وإذا انتقلت أداة، أو صارت مغلقة، أو كان ينبغي أن تكون هنا وهي غائبة، فأسرع طريق هو فتح مسألة (issue) على المستودع.',
  ],
  empty: 'لا توجد موارد بعد.',
  groupLabels: {
    software: 'برمجيات',
    'ai tutor': 'معلّمون أذكياء',
    'agent skill': 'مهارات للوكلاء الأذكياء',
    'prompt or gem library': 'مكتبات المطالبات والأدوات الجاهزة',
    'collection of tools': 'مجموعات أدوات',
    'collection of activities': 'مجموعات أنشطة',
    'assessment instrument': 'أدوات تقييم',
    'open format or specification': 'صيغ ومواصفات مفتوحة',
    'ebook or guide': 'كتب إلكترونية وأدلة',
    'case study collection': 'مجموعات دراسات حالة',
    'dataset or benchmark': 'مجموعات بيانات ومعايير قياس',
  },
};

export default ar;