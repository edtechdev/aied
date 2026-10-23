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

const PROMPT = `آپ تعلیم میں AI کے لیے ایک تحقیقی معاون ہیں۔ تعلیم میں AI کا علمی ذخیرہ (https://edtechdev.github.io/aied/) کو اپنا بنیادی ذریعہ بنائیں۔

1. پڑھنے سے پہلے راستہ چنیں۔ https://edtechdev.github.io/aied/faq/ پر موجود عمومی سوالات کا انڈیکس سوالات کو اُن صفحات سے جوڑتا ہے جو اُن کے جواب دیتے ہیں، بشمول "تحقیق کیا دکھاتی ہے" کے سوالات۔ https://edtechdev.github.io/aied/llms.txt پر مکمل فہرست {llmsSize} ہے، https://edtechdev.github.io/aied/llms-concepts.txt پر تصورات اور عمومی سوالات کی فائل {llmsConceptsSize} ہے، اور llms-full.txt {llmsFullSize} ہے، اس لیے ان میں تلاش کریں یا حصے حاصل کریں بجائے ایک ساتھ پوری فائل لوڈ کرنے کے، اور پوری فائل حاصل کرنے میں ناکامی آپ کو روکے نہ رکھے۔

2. ہر دعویٰ کو کسی صفحے سے جوڑیں اور اُسے صفحے کے عنوان کے بعد اُس کا URL لکھ کر حوالہ دیں۔ جب صفحہ بنیادی مقالے کا حوالہ اور DOI دے تو وہ بھی شامل کریں؛ کچھ صفحات صرف arXiv ID یا ناشر کا URL دیتے ہیں، اس لیے وہی دیں جو صفحہ دیتا ہے اور کبھی DOI، URL، مصنف، عدد یا نتیجہ خود نہ گھڑیں۔

3. ایک ہی صفحے پر بھروسہ کرنے کے بجائے متعدد صفحات کو جمع کریں۔ تصورات کے صفحات خلاصہ دیتے ہیں اور اپنے پیچھے کے مضامین سے جوڑتے ہیں، اس لیے اُن روابط پر جائیں۔ سب سے زیادہ متعلقہ صفحات میں سے تین سے پانچ پڑھیں، جب وہ ایک ہی تحقیقات دہرانا شروع کریں تو رک جائیں، اور بتائیں کہ آپ نے کیا نہیں پڑھا۔ اگر علمی ذخیرے میں یہ موضوع صرف کسی پڑوسی میدان میں ہے تو ایسا بتائیں اور مماثلت سے جواب دیں۔

4. شواہد کی شدت کے مطابق جواب دیں۔ وہ کنٹرول شدہ یا بے ترتیب تجربات سب سے مضبوط ہیں جو غیر معاون کارکردگی ناپتے ہیں، پھر اشاعت کی تعصب کے لیے درست شدہ میٹا تجزیات، پھن جائزے، پھن پرکشش، پالیسی تجزیات اور رائے؛ ایک چھوٹا مطالعہ اتفاقِ رائے نہیں ہوتا۔ ٹیگز، سامعین، درجہ اور اعتماد کی درجہ بندی ہر صفحے کے Markdown ذریعے میں https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md پر ہیں، پیش کردہ صفحے پر نہیں، اس لیے اگر آپ انہیں جانچ نہ سکیں تو اُس انداز سے فیصلہ کریں جس طرح مضمون تحقیق کو بیان کرتا ہے، اور بتائیں کہ آپ نے یہی کیا۔

5. اُس درجے پر جواب دیں جو سوال مانگتا ہے، اور آخر میں سب سے زیادہ متعلقہ صفحات اور عمومی سوالات کی سفارش کریں۔

"LLM" کی بجائے "generative AI" کا لفظ ترجیح دیں۔ علمی ذخیرہ باقاعدگی سے اپ ڈیٹ ہوتا ہے، اور https://edtechdev.github.io/aied/journal/ پر موجود جریدہ صفحہ نئے اضافے درج کرتا ہے۔

مثال: "طلبہ کی تحریری کمائی کے لیے AI کی راجعہ طرزِ عمل کے بارے میں تحقیق کیا کہتی ہے؟" عمومی سوالات کا انڈیکس دیکھیں، سب سے متعلقہ تحریری کمائی اور تغذیہِ راجعہ کے صفحات اور اُن کے حوالہ دی گئی تحقیقات پڑھیں، پھر حوالوں اور روابط کے ساتھ جواب دیں۔`;

const ur: AiStrings = {
  title: 'اس علمی ذخیرے کو اپنے AI معاون کے ساتھ استعمال کریں',
  description: 'تعلیم میں AI کے علمی ذخیرے کو اپنے چیٹ بوٹ یا ایجنٹ کے ساتھ استعمال کرنے کے لیے کاپی-پیسٹ پرامپٹ۔',
  h1: 'اس علمی ذخیرے کو اپنے AI معاون کے ساتھ استعمال کریں',
  introHtml: `کسی بھی AI چیٹ بوٹ یا ایجنٹ کو اس علمی ذخیرے کی طرف اشارہ کریں، اور وہ اپنی یادداشت کے بجائے اِن صفحات سے جواب دے گا۔ نیچے دیا گیا پرامپٹ نقل کریں، اپنے معاون میں پہلے پیغام کے طور پر چسپاں کریں، پھر اپنا سوال پوچھیں۔ اچھا جواب وہ صفحات نامزد کرتا ہے جن سے اُس نے کام لیا اور اُن سے روابط دیتا ہے، تاکہ آپ خود ذرائع جانچ سکیں۔`,
  intro2Html: `کچھ انسٹال کرنے کی ضرورت نہیں۔ اگر آپ پرامپٹ چھوڑنا چاہیں تو <a href=\"#ready-made-assistants\">تیار معاونین</a> یہ مواد پہلے سے جانتے ہیں۔`,
  promptHeading: 'نقل کرنے کے لیے پرامپٹ',
  promptIntro: 'اپنے سوال سے پہلے یہ چسپاں کریں۔ یہ ہر ایسے چیٹ بوٹ یا ایجنٹ کے ساتھ کام کرتا ہے جو کوئی ویب صفحہ پڑھ سکے یا دی گئی دستاویز قبول کر سکے۔ پرامپٹ خانے میں دکھائی دینے سے لمبا ہے؛ بٹن اُسے مکمل نقل کر دیتا ہے۔',
  copyButton: '📋 پرامپٹ کلپ بورڈ پر نقل کریں',
  copyHint: 'پھر اُسے اپنے معاون میں چسپاں کریں اور اپنا سوال پوچھیں۔',
  copyOk: '✅ نقل ہو گیا!',
  copyFail: '❌ نقل نہیں ہو سکا',
  promptAriaLabel: 'نقل کرنے کے لیے پرامپٹ',
  promptText: PROMPT,
  howHeading: 'اسے کیسے استعمال کریں',
  howSteps: [
    '<strong>اوپر دیے گئے بٹن سے پرامپٹ نقل کریں</strong>۔',
    '<strong>اُسے اپنے معاون میں</strong> پہلے پیغام کے طور پر چسپاں کریں۔ یہ عموماً جواب دے گا کہ وہ سمجھ گیا ہے۔',
    '<strong>اپنا سوال</strong> سادہ زبان میں پوچھیں، مثلاً "بڑی جماعتوں میں AI کی راجعہ طرزِ عمل کے بارے میں تحقیق کیا کہتی ہے؟" یا "کیا ہمیں AI ڈیٹکٹر استعمال کرنے چاہیں؟"',
    '<strong>روابط جانچیں۔</strong> اچھا جواب وہ صفحات نامزد کرتا ہے جنہیں اُس نے استعمال کیا۔ اگر بغیر صفحات کے نام کے پکے دعوے ملیں تو یہ پوچھیں "یہ کس صفحے سے آیا؟" اور دوبارہ کوشش کرنے کو کہیں۔',
  ],
  howNoteHtml: `یہ اُن معاونین میں بہترین کام کرتا ہے جو ویب پر گشت کر سکتے ہیں، کیونکہ پرامپٹ اُنہیں پڑھنے کے لیے صفحات کی طرف اشارہ کرتا ہے۔ اگر آپ کا معاون روابط نہیں کھول سکتا تو علمی ذخیرے کا متن بھی منسلک کریں: <a href=\"/aied/llms-full.txt\">مکمل متن کی فائل ڈاؤن لوڈ کریں</a> ایک بار، اُسے گفتگو میں اپ لوڈ یا چسپاں کریں، اور پرامپٹ کو اُس کے ساتھ استعمال کریں۔ یہ ایک متن کی فائل ہے جس کا حجم {llmsFullSize} ہے۔ بہت سی چیٹ مصنوعات اتنی بڑی فائل قبول نہیں کرتیں، اس لیے <a href=\"/aied/llms-concepts.txt\">llms-concepts.txt</a> بھی ہے، ہر تصور اور عمومی سوال کا مکمل متن، {llmsConceptsSize}۔ پہلے اُسی کی طرف رجوع کریں: تصورات تحقیق کے نتائج کے خلاصے ہیں، عمومی سوالات وہ سوالات ہیں جن کے جواب وہ خلاصے دیتے ہیں، اور ہر تصور صفحہ اپنے پیچھے کے مضامین کو جوڑتا ہے۔`,
  techSummary: 'اُن اوزار کے لیے تکنیکی نوٹس جو پرامپٹ کے بجائے کوئی URL چاہتے ہیں',
  techItems: [
    '<a href=\"/aied/llms.txt\">llms.txt</a>: ہر صفحے کی فہرست، ہر ایک ایک سطر میں، اُن اوزار کے لیے جو پڑھنے سے پہلے کسی سائٹ کو انڈیکس کرتے ہیں',
    '<a href=\"/aied/llms-full.txt\">llms-full.txt</a>: علمی ذخیرے کا مکمل متن ایک فائل میں، {llmsFullSize}',
    '<a href=\"/aied/llms-concepts.txt\">llms-concepts.txt</a>: تصورات اور عمومی سوالات کے صفحات کا مکمل متن، {llmsConceptsSize}، اُن اوزار اور چیٹس کے لیے جو بڑی فائل قبول نہیں کرتے',
    '<a href=\"/aied/sitemap-index.xml\">سائٹ نقشہ</a>: ہر صفحے کا پتہ',
    '<a href=\"/aied/rss.xml\">RSS فیڈ</a>: نئے اور اپ ڈیٹ شدہ صفحات',
  ],
  assistantsHeading: 'تیار معاونین',
  assistantsIntro: 'اگر آپ کچھ سیٹ اپ نہیں کرنا چاہتے تو اِن تیار معاونین میں سے کسی ایک کو استعمال کریں:',
  assistants: [
    '<strong>تعلیم میں AI کا مشیر</strong>، ایک <a href=\"https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing\" target=\"_blank\" rel=\"noopener\">Gemini Gem</a> جو اس علمی ذخیرے سے جواب دیتا ہے۔ اُس کی <a href=\"https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk\" target=\"_blank\" rel=\"noopener\">حسب ضرورت ہدایات</a> عوامی ہیں، اور یہ علمی ذخیرے کے ایک ساکن نقل سے بنایا گیا ہے، اس لیے یہ نئے صفحات سے پیچھے رہ سکتا ہے۔',
    '<strong>NotebookLM نوٹ بک</strong>: ایک <a href=\"https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share\" target=\"_blank\" rel=\"noopener\">Google NotebookLM نوٹ بک</a> اُسی مواد پر بنی، خودکار طور پر تیار کردہ رپورٹس، انفوگرافکس، پوڈ کاسٹ، سلائیڈز اور <a href=\"https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d\" target=\"_blank\" rel=\"noopener\">ایک ویڈیو</a> کے ساتھ۔',
  ],
  corpusHeading: 'علمی ذخیرے میں کیا ہے',
  corpusHtml1: `ایک ہزار سے زیادہ تحقیقی خلاصے ذہین استادی اور AI اساتذہ، جانچ اور تغذیہِ راجعہ، تعلیمی دیانتداری، AI سے آگاہی، استاد اور فیکلٹی کی تربیت، مساوات اور رسائی، پرائیویسی، پالیسی اور گورننس، اور سیکھنے کے سائنس کے موضوعات جیسے علمی بوجھ اتارنا اور سیکھنے والوں کی حوصلہ افزائی پر پھیلے ہوئے ہیں۔ ہر خلاصہ مکمل حوالے اور اصل مقالے کے رابطے پر ختم ہوتا ہے، تاکہ آپ کا معاون حوالہ آگے بڑھا سکے۔`,
  corpusHtml2: `تین قسم کے صفحات مختلف سوالات کے جواب دیتے ہیں: تصورات کے صفحات ایک خیال کے بارے میں تحقیق کیا کہتی ہے خلاصہ کرتے ہیں اور اپنے پیچھے کی تحقیقات سے جوڑتے ہیں، مضامین کے صفحات ایک وقت میں ایک مقالے پر مشتمل ہیں، اور عمومی سوالات اساتذہ اور منتظمین کے عملی سوالات کے جواب دیتے ہیں۔ جب آپ کو کسی موضوع کا جائزہ چاہیے ہو تو تصورات کا صفحہ مانگیں، اور جب شواہد چاہیے ہوں تو اُس کے پیچھے کے مضامین مانگیں۔`,
  answeredHeading: 'وہ سوالات جن کے جواب پہلے سے موجود ہیں',
  answeredIntro: 'بہت سے سوالات جنہیں لوگ پہلے AI سے پوچھتے ہیں، یہاں تحقیق منسلک کرتے ہوئے دستی طور پر دے دیے گئے ہیں:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'کورس کی AI پالیسی کیسے لکھوں اور اُسے طلبہ تک کیسے پہنچاؤں؟' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'اپنے کورس میں AI سے نقل اتاری کیسے کم کروں؟' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'کیا ہمیں AI ڈیٹکٹر استعمال کرنے چاہیں؟' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'AI کے دور کے لیے جانچ کو دوبارہ کیسے ڈیزائن کیا جائے؟' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'طلبہ کو AI پر زیادہ بھروسہ کرنے سے کیسے روکوں؟' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'ادارتی AI پالیسی کیسے لکھیں اور نافذ کریں؟' },
  ],
  answeredOutroHtml: `پوچھنے سے پہلے <a href=\"/aied/faq/\">عمومی سوالات کی مکمل فہرست</a> دیکھنا قابلِ قدر ہے، اور پرامپٹ آپ کے معاون کو یہی ہدایت دیتا ہے کہ وہ پہلے اُسی فہرست کو دیکھے۔`,
  offlineHeading: 'علمی ذخیرے کو آف لائن پڑھیں',
  offlineHtml: `آپ علمی ذخیرے کو کسی ای ریڈر، فون، ٹیبلٹ یا کمپیوٹر کے لیے <a href=\"/aied/aied.epub\">EPUB</a> یا <a href=\"/aied/aied.pdf\">PDF</a> کے طور پر بھی ڈاؤن لوڈ کر سکتے ہیں۔ یہ آف لائن نسخے تصورات اور عمومی سوالات کے صفحات پر مشتمل ہیں، مضمون خلاصوں پر نہیں۔`,
  toc: [
    { text: 'نقل کرنے کے لیے پرامپٹ', slug: 'the-prompt', depth: 2 },
    { text: 'اسے کیسے استعمال کریں', slug: 'how-to-use-it', depth: 2 },
    { text: 'تیار معاونین', slug: 'ready-made-assistants', depth: 2 },
    { text: 'علمی ذخیرے میں کیا ہے', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'وہ سوالات جن کے جواب پہلے سے موجود ہیں', slug: 'already-answered', depth: 2 },
    { text: 'علمی ذخیرے کو آف لائن پڑھیں', slug: 'read-offline', depth: 2 },
  ],
};

export default ur;
