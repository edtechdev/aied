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

const PROMPT = `أنت مساعد بحثي متخصص في الذكاء الاصطناعي في التعليم. استخدم قاعدة معارف الذكاء الاصطناعي في التعليم (https://edtechdev.github.io/aied/) مصدرًا أساسيًا لك.

1. اهدِ مسارك قبل أن تقرأ. فهرس الأسئلة الشائعة على https://edtechdev.github.io/aied/faq/ يربط الأسئلة بالصفحات التي تجيب عنها، بما في ذلك أسئلة «ماذا تُظهر البحوث». والكتالوج الكامل على https://edtechdev.github.io/aied/llms.txt حجمه نحو 800 كيلوبايت، وملف المفاهيم والأسئلة الشائعة على https://edtechdev.github.io/aied/llms-concepts.txt نحو 4 ميغابايت، أما llms-full.txt فحجمه عدة ميغابايتات، فابحث فيها أو اجلب أجزاءً منها بدلًا من تحميلها كاملة، ولا تدع فشل تحميل ملف كامل يوقفك.

2. أسند كل ادعاء إلى صفحة واستشهد بها بذكر عنوان الصفحة ثم رابطها. وإذا أعطتك الصفحة استشهاد البحث الأصلي ومعرّف DOI، فأضفهما؛ وبعض الصفحات تذكر فقط معرّف arXiv أو رابط ناشر، فاذكر ما تذكره الصفحة ولا تختلق أبدًا معرّف DOI أو رابطًا أو مؤلفًا أو رقمًا أو نتيجة.

3. ادمج ما بين الصفحات بدل الاعتماد على صفحة واحدة. صفحات المفاهيم تعطي النظرة العامة وتربط بالمقالات التي تقف خلفها، فاتبع تلك الروابط. اقرأ من ثلاث إلى خمس من أكثر الصفحات صلة، وتوقّف عندما تبدأ في تكرار الدراسات نفسها، وقل ما لم تقرأه. وإن كانت قاعدة المعارف تغطي الموضوع في مجال مجاور فقط، فقل ذلك وأجب بالقياس.

4. طابِق قوة الأدلة. التجارب المضبوطة أو العشوائية التي تقيس الأداء دون مساعدة هي الأقوى، ثم التحليلات البَعدية المعدَّلة لتحيّز النشر، ثم المراجعات، ثم الدراسات التجريبية المحدودة وتحليلات السياسات والآراء؛ ودراسة صغيرة واحدة ليست إجماعًا. والوسوم والجمهور والمستوى وتقديرات الثقة موجودة في مصدر Markdown لكل صفحة على https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md، لا في الصفحة المعروضة، فإن لم تستطع التحقق منها، فاحكم من طريقة وصف المقال للدراسة وقل إن هذا ما فعلته.

5. أجب عند المستوى الذي يطلبه السؤال، واختم بتوصية بأكثر الصفحات والأسئلة الشائعة صلة بالموضوع.

فضّل مصطلح «الذكاء الاصطناعي التوليدي» على «LLM». وتُحدَّث قاعدة المعارف بانتظام، وصفحة السجل على https://edtechdev.github.io/aied/journal/ تسرد أحدث الإضافات.

مثال: «ماذا تقول البحوث عن التغذية الراجعة بالذكاء الاصطناعي في كتابة الطلاب؟» افحص فهرس الأسئلة الشائعة، واقرأ أكثر صفحات الكتابة والتغذية الراجعة صلة إضافة إلى الدراسات التي تستشهد بها، ثم أجب مع الاستشهادات والروابط.`;

const ar: AiStrings = {
  title: 'استخدم قاعدة المعارف هذه مع مساعدك الذكي الخاص',
  description: 'مطالبة (prompt) جاهزة للنسخ واللصق لاستخدام قاعدة معارف الذكاء الاصطناعي في التعليم مع روبوت محادثة أو وكيل خاص بك.',
  h1: 'استخدم قاعدة المعارف هذه مع مساعدك الذكي الخاص',
  introHtml: `يمكنك توجيه روبوت المحادثة أو الوكيل الذكي الذي تفضّله إلى قاعدة المعارف هذه ليُجيب من هذه الصفحات البحثية بدل أن يخمّن. والمطالبة أدناه تقوم بهذا العمل. انسخها، وألصقها في مساعدك كرسالة أولى، ثم اطرح سؤالك. وينبغي أن تحصل على جواب يسمّي الصفحات التي استقى منها ويربط بها، حتى تتحقق من المصادر بنفسك.`,
  intro2Html: `لا يتطلب الأمر أي إعداد تقني، ولا شيء يحتاج إلى تثبيت. وإن كنت تفضّل تجنّب الإعداد كليًا، فهناك <a href="#ready-made-assistants">مساعدات جاهزة</a> تعرف هذه المادة مسبقًا.`,
  promptHeading: 'المطالبة التي تنسخها',
  promptIntro: 'ألصق هذه (prompt) أولًا، قبل سؤالك. وهي تعمل مع أي روبوت محادثة أو وكيل يستطيع قراءة صفحة ويب أو استقبال مستند ملصوق. والصندوق قابل للتمرير، والزر ينسخ النص كاملًا.',
  copyButton: '📋 نسخ المطالبة إلى الحافظة',
  copyHint: 'ثم ألصقها في مساعدك واطرح سؤالك.',
  copyOk: '✅ تم النسخ!',
  copyFail: '❌ فشل النسخ',
  promptAriaLabel: 'المطالبة المطلوب نسخها',
  promptText: PROMPT,
  howHeading: 'كيف تستخدمها',
  howSteps: [
    '<strong>انسخ المطالبة</strong> بالزر أعلاه.',
    '<strong>ألصقها في مساعدك</strong> كرسالة أولى وأرسلها. وسيجيب عادةً بأنه فهمها.',
    '<strong>اطرح سؤالك</strong> بلغة عادية، مثل «ماذا تقول البحوث عن التغذية الراجعة بالذكاء الاصطناعي في الصفوف الكبيرة؟» أو «هل ينبغي أن نستخدم كواشف الذكاء الاصطناعي؟»',
    '<strong>تحقق من الروابط.</strong> الجواب الجيد يسمّي الصفحات التي استخدمها. وإن حصلت على ادعاءات واثقة بلا أسماء صفحات، فاسأله «من أي صفحة جاء هذا؟» واطلب منه المحاولة مرة أخرى.',
  ],
  howNoteHtml: `يعمل هذا على أفضل وجه في المساعدات التي تستطيع تصفّح الويب، لأن المطالبة توجّهها إلى صفحات لتقرأها. وإن كان مساعدك لا يستطيع فتح الروابط، فأرفق مع المطالبة نص قاعدة المعارف بدل لصق المطالبة وحدها: <a href="/aied/llms-full.txt">نزّل ملف النص الكامل</a> مرة واحدة، وارفعه أو ألصقه في المحادثة، واستخدم المطالبة معه. وهو ملف نصي واحد حجمه نحو 15 ميغابايت. وكثير من منتجات المحادثة يرفض ملفًا بهذا الحجم، فهناك أيضًا <a href="/aied/llms-concepts.txt">llms-concepts.txt</a> — وهو كل صفحة مفهوم وصفحة سؤال شائع بنصها الكامل، نحو 4 ميغابايت — وهو الملف الأفضل للبدء به: فالمفاهيم هي تخليص لما تُظهره البحوث، والأسئلة الشائعة هي الأسئلة التي تجيب عنها تلك المفاهيم، وكل صفحة مفهوم تربط بالبحوث التي تقف خلفها.`,
  techSummary: 'ملاحظات تقنية للأدوات التي تريد رابطًا بدل مطالبة',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a> — كتالوج لكل صفحة، سطر واحد لكل منها، للأدوات التي تفهرس موقعًا قبل قراءته',
    '<a href="/aied/llms-full.txt">llms-full.txt</a> — النص الكامل لقاعدة المعارف في ملف واحد، نحو 15 ميغابايت',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a> — النص الكامل لصفحات المفاهيم والأسئلة الشائعة، نحو 4 ميغابايت، للأدوات والمحادثات التي ترفض الملف الأكبر',
    '<a href="/aied/sitemap-index.xml">خريطة الموقع</a> — عنوان كل صفحة',
    '<a href="/aied/rss.xml">خلاصة RSS</a> — الصفحات الجديدة والمحدَّثة',
  ],
  assistantsHeading: 'مساعدات جاهزة',
  assistantsIntro: 'إن كنت تفضّل ألا تُعِدّ شيئًا بنفسك، فقاعدة المعارف هذه متاحة أيضًا كمساعد جاهز:',
  assistants: [
    '<strong>AI in Education Advisor</strong> — أداة <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a> تُجيب من قاعدة المعارف هذه. وتعليماتها المخصّصة <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">متاحة للعموم</a>، وقد بُنيت من <strong>نسخة ثابتة</strong> من قاعدة المعارف، لذا قد تتخلّف عن أحدث الصفحات.',
    '<strong>دفتر NotebookLM</strong> — <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">دفتر Google NotebookLM</a> مبني على المادة نفسها، مع تقارير وإنفوغرافيك وبودكاست وشرائح <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">وفيديو</a> مولّدة تلقائيًا.',
  ],
  corpusHeading: 'ما تحتويه قاعدة المعارف',
  corpusHtml1: `تغطي أكثر من ألف خلاصة بحثية التدريس الخصوصي والمعلّمين الأذكياء، والتقييم والتغذية الراجعة، والنزاهة الأكاديمية، والثقافة بالذكاء الاصطناعي، وتطوير المعلّمين وأعضاء هيئة التدريس، والإنصاف وإمكانية الوصول، والخصوصية، والسياسات والحوكمة، وموضوعات علوم التعلّم مثل التفريغ المعرفي ودافعية المتعلّم. وكل خلاصة تنتهي بالاستشهاد الكامل ورابط للبحث الأصلي، فيستطيع مساعدك تمرير المرجع وتستطيع أنت متابعته.`,
  corpusHtml2: `ثلاثة أنواع من الصفحات تجيب عن أسئلة مختلفة: <strong>صفحات المفاهيم</strong> تلخّص ما تقوله البحوث عن فكرة واحدة وتربط بالدراسات التي تقف خلفها، و<strong>صفحات المقالات</strong> تتناول بحثًا واحدًا في كل مرة، و<strong>الأسئلة الشائعة</strong> تجيب عن أسئلة عملية من المعلّمين والإداريين. فإن أردت نظرة عامة على موضوع، فاطلب صفحة مفهوم؛ وإن أردت الأدلة، فاطلب الدراسات.`,
  answeredHeading: 'أسئلة تمت الإجابة عنها بالفعل',
  answeredIntro: 'كثير من الأسئلة التي يطرحها الناس على الذكاء الاصطناعي أولًا تمت الإجابة عنها هنا يدويًا، مع إرفاق البحوث:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'كيف أكتب سياسة مقرر دراسي بشأن الذكاء الاصطناعي وأُبلّغها للطلاب؟' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'كيف أقلّل الغش بالذكاء الاصطناعي في مقرري؟' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'هل ينبغي أن نستخدم كواشف الذكاء الاصطناعي؟' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'كيف ينبغي إعادة تصميم التقييم في عصر الذكاء الاصطناعي؟' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'كيف أمنع الطلاب من الاعتماد المفرط على الذكاء الاصطناعي؟' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'كيف نكتب سياسة مؤسسية للذكاء الاصطناعي وننفّذها؟' },
  ],
  answeredOutroHtml: `يستحق أن تطّلع على <a href="/aied/faq/">القائمة الكاملة للأسئلة الشائعة</a> قبل أن تسأل، والمطالبة تطلب من مساعدك أن يفحص تلك القائمة أولًا.`,
  offlineHeading: 'اقرأ قاعدة المعارف دون اتصال',
  offlineHtml: `يمكنك أيضًا تنزيل قاعدة المعارف بصيغة <a href="/aied/aied.epub">EPUB</a> أو <a href="/aied/aied.pdf">PDF</a> لقارئ إلكتروني أو هاتف أو جهاز لوحي أو حاسوب. وتحتوي هاتان النسختان دون اتصال على صفحات المفاهيم والأسئلة الشائعة، لا على مئات خلاصات المقالات.`,
  toc: [
    { text: 'المطالبة التي تنسخها', slug: 'the-prompt', depth: 2 },
    { text: 'كيف تستخدمها', slug: 'how-to-use-it', depth: 2 },
    { text: 'مساعدات جاهزة', slug: 'ready-made-assistants', depth: 2 },
    { text: 'ما تحتويه قاعدة المعارف', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'أسئلة تمت الإجابة عنها بالفعل', slug: 'already-answered', depth: 2 },
    { text: 'اقرأ قاعدة المعارف دون اتصال', slug: 'read-offline', depth: 2 },
  ],
};

export default ar;