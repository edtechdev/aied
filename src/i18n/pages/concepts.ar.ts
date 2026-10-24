/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the section headings and blurbs are
 * generated from concepts.registry.yaml, so none of that list is repeated here.
 */
export interface ConceptsStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** What this page is and what a concept page holds. May contain inline HTML. */
  introHtml: string;
  /** Other ways into the knowledge base, and the offline editions. */
  browseHtml: string;
  /** Count line above the sections. `{count}` and `{strands}` are substituted. */
  countTemplate: string;
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const ar: ConceptsStrings = {
  title: 'المفاهيم',
  h1: 'المفاهيم',
  introHtml:
    'كل صفحات المفاهيم على الموقع، في الأقسام نفسها الموجودة في الشريط الجانبي الأيسر. تشرح كل صفحة ما تعنيه فكرة في الذكاء الاصطناعي والتعليم، وما وجدته البحوث عنها، والدراسات التي تستند إليها. و<a href="/aied/concepts/ai-education/">الذكاء الاصطناعي في التعليم</a> هو المظلة التي تجمعها.',
  browseHtml:
    'تصدر صفحات المفاهيم أيضًا في صيغة <a href="/aied/aied.epub">EPUB</a> أو <a href="/aied/aied.pdf">PDF</a> للقراءة دون اتصال. وللبدء من سؤال أو ورقة بحثية أو أداة أو بحث أو مساعدك الخاص بدلًا من ذلك، راجع <a href="/aied/faq">الأسئلة الشائعة</a> أو <a href="/aied/journal">السجل</a> أو <a href="/aied/resources">الموارد</a> أو <a href="/aied/search">البحث</a> أو <a href="/aied/ai">صفحة الذكاء الاصطناعي</a>.',
  countTemplate: '{count} صفحة مفاهيم، موزعة على {strands} محاور.',
  empty: 'لا توجد صفحات مفاهيم بعد.',
};

export default ar;
