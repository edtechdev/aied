/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Spanish visitor can see what the
 * newsletter is, when issues appeared, and how to get back to the list.
 */
export interface NewsStrings {
  /** <title> and the page heading. The newsletter's name, printed verbatim. */
  title: string;
  /** Meta description. */
  description: string;
  /** What the newsletter is and who it is for. May contain inline HTML. */
  introHtml: string;
  /** The two feeds, and how they differ. May contain inline HTML. */
  feedsHtml: string;
  /** How to get the newsletter by email, through a feed-to-email service. */
  emailHtml: string;
  /** How to follow the newsletter on LinkedIn. May contain inline HTML. */
  linkedinHtml: string;
  /** Shown when no issue is published. */
  empty: string;
  /** Back-link on an issue page. */
  allIssues: string;
  /** Accessible name of the previous/next issue navigation. */
  otherIssuesAria: string;
  /** Previous/next issue links. `{issue}` is the issue number. */
  issueLabel: string;
}

const ar: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'النشرة الأسبوعية لقاعدة المعارف للذكاء الاصطناعي في التعليم: ماذا تعني البحوث الجديدة للمعلّمين والمطوّرين والباحثين والإداريين.',
  introHtml:
    'موجز أسبوعي من <a href="/aied/">قاعدة المعارف للذكاء الاصطناعي في التعليم</a> عن معنى ما نُشر من بحوث خلال الأسبوع للمعلّمين والمطوّرين والباحثين والإداريين. كل عدد يربط الورقة البحثية التي يقف خلفها كل ادعاء، ويتتبّع العمل الداخلي في أسفله ما تغيّر على الموقع نفسه.',
  feedsHtml:
    'تحمله خلاصتان RSS. تحمل <a href="/aied/news/rss.xml">خلاصة النشرة</a> الأعداد وحدها، مدخلًا واحدًا في الأسبوع. وتحمل <a href="/aied/rss.xml">خلاصة قاعدة المعارف</a> كل ملخّص مقال جديد عند إضافته، وهي المادة نفسها التي تُستقى منها الأعداد، لكن بمعدل أعلى بكثير.',
  emailHtml:
    'للحصول على كل عدد عبر البريد الإلكتروني، الصق خلاصة النشرة في <a href="https://blogtrottr.com/">Blogtrottr</a>، وهي خدمة مجانية من طرف ثالث ترسل خلاصة إلى بريدك الإلكتروني وفق جدول تختاره. وتتضمّن رسائلها إعلانات.',
  linkedinHtml:
    'يمكنك أيضًا متابعته على <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7519570283561852928">LinkedIn</a>، حيث يصدر كل عدد في شكل نشرة LinkedIn في خلاصتك.',
  empty: 'لم تُنشر أي أعداد بعد.',
  allIssues: 'كل الأعداد',
  otherIssuesAria: 'أعداد أخرى',
  issueLabel: 'العدد {issue}',
};

export default ar;
