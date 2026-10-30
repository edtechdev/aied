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

const ar: FaqStrings = {
  title: 'الأسئلة الشائعة',
  h1: 'الأسئلة الشائعة',
  introHtml:
    'يجيب هذا القسم عن أسئلة متكررة حول <strong>الذكاء الاصطناعي في التعليم</strong> — ما تقوله البحوث عن أثر الذكاء الاصطناعي في التعليم والتعلّم، وكيف يمكن للمعلّمين والمدرّسين ومصمّمي التعلّم تحويل هذه الأدلة إلى ممارسة. وكل جواب يقطّر نتائج البحوث الملخّصة في قاعدة المعارف هذه، ويربط السؤال بالمفاهيم والمقالات ذات الصلة لمزيد من القراءة.',
  assistantHtml:
    'هل لديك سؤال لم يُجب عنه هنا؟ اسأل مساعدك الذكي الخاص عبر صفحة <a href="/aied/ai">استخدم قاعدة المعارف هذه مع مساعدك الذكي الخاص</a>، التي تبيّن كيف توجّه وكيلًا إلى الكتالوج الكامل للحصول على أجوبة موثّقة ومستشهدة بالمصادر.',
  empty: 'لا توجد أسئلة شائعة بعد.',
  sectionHeadings: {
    "Start here": "ابدأ من هنا",
    "Course and institutional policy": "سياسة المقرر والمؤسسة",
    "Designing courses and activities": "تصميم المقررات والأنشطة",
    "Assessment, feedback and integrity": "التقويم والتغذية الراجعة والنزاهة",
    "How students learn and use AI": "تعلّم الطلاب واستخدامهم للذكاء الاصطناعي",
    "Particular learners, access and wellbeing": "متعلّمون بعينهم والوصول والرفاهية",
    "Careers and AI literacy": "المسارات المهنية وثقافة الذكاء الاصطناعي",
    "Building and evaluating educational AI": "بناء الذكاء الاصطناعي التعليمي وتقييمه",
    "Research practice": "ممارسة البحث",
  },
  sectionBlurbs: {
    "Start here": "سؤالان واسعان يستحقان القراءة قبل الأسئلة المحددة، أيًّا كان دورك.",
    "Course and institutional policy": "للمدرّسين الذين يكتبون القواعد التي سيقرأها الطلاب، وللإداريين والمسؤولين عن تطوير هيئة التدريس الذين يضعونها على مستوى البرنامج.",
    "Designing courses and activities": "لكل من يقرّر أين يدخل الذكاء الاصطناعي في مهمة أو فصل دراسي أو مقرر عبر الإنترنت، وللمدرّسين الذين يريدون استعادة الوقت الذي كان يُفترض أن يوفّره لهم.",
    "Assessment, feedback and integrity": "أكبر مجموعة، لأن الأدلة هنا هي الأكثر حسمًا، ولأن النتائج هنا تقع على سجل الطالب.",
    "How students learn and use AI": "لأسئلة عمّا يكسبه الطلاب فعلًا، وما يخاطرون بخسارته، وكيف نُبقي التعلّم معهم.",
    "Particular learners, access and wellbeing": "للمدرّسين وموظفي الدعم الذين يواءمون التصميم مع من هو حاضر فعلًا في القاعة، وللإداريين الذين يفكّرون فيمن ليس حاضرًا.",
    "Careers and AI literacy": "لمصمّمي المناهج وقادة البرامج الذين يجيبون الطلاب عن سؤال: ما الغاية من كل هذا؟",
    "Building and evaluating educational AI": "للمطوّرين ومصمّمي التعليم والباحثين الذين يُطلقون مدرّسًا آليًا أو محاكاة أو منصة في مقرر حقيقي.",
    "Research practice": "للباحثين الذين يبلّغون عن عمل في هذا المجال أو يراجعونه أو يخطّطون له.",
  },
};

export default ar;