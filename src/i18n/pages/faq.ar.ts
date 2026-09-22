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

const ar: FaqStrings = {
  title: 'الأسئلة الشائعة',
  h1: 'الأسئلة الشائعة',
  introHtml:
    'يجيب هذا القسم عن أسئلة متكررة حول <strong>الذكاء الاصطناعي في التعليم</strong> — ما تقوله البحوث عن أثر الذكاء الاصطناعي في التعليم والتعلّم، وكيف يمكن للمعلّمين والمدرّسين ومصمّمي التعلّم تحويل هذه الأدلة إلى ممارسة. وكل جواب يقطّر نتائج البحوث الملخّصة في قاعدة المعارف هذه، ويربط السؤال بالمفاهيم والمقالات ذات الصلة لمزيد من القراءة.',
  assistantHtml:
    'هل لديك سؤال لم يُجب عنه هنا؟ اسأل مساعدك الذكي الخاص عبر صفحة <a href="/aied/ai">استخدم قاعدة المعارف هذه مع مساعدك الذكي الخاص</a>، التي تبيّن كيف توجّه وكيلًا إلى الكتالوج الكامل للحصول على أجوبة موثّقة ومستشهدة بالمصادر.',
  empty: 'لا توجد أسئلة شائعة بعد.',
};

export default ar;