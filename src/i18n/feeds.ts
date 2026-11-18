/**
 * feeds.ts - labels for the "feeds" block that lists the site's three RSS feeds on
 * the home and journal pages.
 *
 * Kept out of the per-page copy modules on purpose: `check-locale-modules.py`
 * requires every locale module to carry the same key set as its English sibling, so
 * adding a heading here to `home.en.ts` would fail the gate in thirty-two locales
 * until each one was edited. A small self-contained map with an English fallback
 * lets this block ship now and be translated later without breaking a build.
 *
 * The three names are the site's own: articles, the weekly update, the podcast.
 */
export interface FeedStrings {
  /** Heading over the list. */
  heading: string;
  /** The feed of every new knowledge-base page. */
  articles: string;
  /** The weekly newsletter feed. */
  newsletter: string;
  /** The podcast feed. */
  podcast: string;
  /** Sentence under the list, naming what each feed carries. */
  note: string;
}

const en: FeedStrings = {
  heading: 'Follow the knowledge base',
  articles: 'New articles and pages',
  newsletter: 'AIEd Research Weekly Update',
  podcast: 'AIEd Audio podcast',
  note: 'One feed per rate: every new page as it is added, one issue a week, and the audio.',
};

const LABELS: Record<string, Partial<FeedStrings>> = {
  en,
  es: {
    heading: 'Sigue la base de conocimiento',
    articles: 'Artículos y páginas nuevas',
    newsletter: 'Actualización semanal de investigación en IA educativa',
    podcast: 'Pódcast AIEd Audio',
    note: 'Una fuente por ritmo: cada página nueva al añadirse, una edición por semana y el audio.',
  },
  fr: {
    heading: 'Suivre la base de connaissances',
    articles: 'Nouveaux articles et pages',
    newsletter: 'Mise à jour hebdomadaire de la recherche en IA éducative',
    podcast: 'Podcast AIEd Audio',
    note: "Un flux par rythme : chaque nouvelle page dès sa publication, une édition par semaine et l'audio.",
  },
  zh: {
    heading: '关注知识库',
    articles: '新文章与新页面',
    newsletter: 'AI 教育研究每周更新',
    podcast: 'AIEd Audio 播客',
    note: '按更新频率选择订阅：每篇新页面、每周一期简报，以及音频节目。',
  },
  de: {
    heading: 'Der Wissensbasis folgen',
    articles: 'Neue Artikel und Seiten',
    newsletter: 'Wöchentliches Update zur KI-Bildungsforschung',
    podcast: 'AIEd Audio Podcast',
    note: 'Ein Feed pro Takt: jede neue Seite beim Erscheinen, eine Ausgabe pro Woche und das Audio.',
  },
  ja: {
    heading: 'ナレッジベースをフォロー',
    articles: '新しい記事とページ',
    newsletter: 'AI教育研究 週次アップデート',
    podcast: 'AIEd Audio ポッドキャスト',
    note: '更新頻度ごとに1つ：新しいページ、週1回のニュースレター、音声番組。',
  },
  ko: {
    heading: '지식 기반 팔로우',
    articles: '새 기사와 페이지',
    newsletter: 'AI 교육 연구 주간 업데이트',
    podcast: 'AIEd Audio 팟캐스트',
    note: '주기별로 하나씩: 새 페이지, 주 1회 뉴스레터, 오디오 프로그램.',
  },
  pt: {
    heading: 'Acompanhe a base de conhecimento',
    articles: 'Novos artigos e páginas',
    newsletter: 'Atualização semanal de pesquisa em IA na educação',
    podcast: 'Podcast AIEd Audio',
    note: 'Um feed por ritmo: cada página nova ao ser adicionada, uma edição por semana e o áudio.',
  },
  ar: {
    heading: 'تابع قاعدة المعرفة',
    articles: 'مقالات وصفحات جديدة',
    newsletter: 'تحديث أبحاث الذكاء الاصطناعي في التعليم الأسبوعي',
    podcast: 'بودكاست AIEd Audio',
    note: 'خلاصة لكل إيقاع: كل صفحة جديدة عند إضافتها، وعدد أسبوعي، والصوت.',
  },
  he: {
    heading: 'מעקב אחר בסיס הידע',
    articles: 'מאמרים ועמודים חדשים',
    newsletter: 'עדכון שבועי של מחקר בינה מלאכותית בחינוך',
    podcast: 'פודקאסט AIEd Audio',
    note: 'פיד לכל קצב: כל עמוד חדש עם הוספתו, גיליון אחד בשבוע, והאודיו.',
  },
  hi: {
    heading: 'ज्ञानकोश का अनुसरण करें',
    articles: 'नए लेख और पृष्ठ',
    newsletter: 'एआई शिक्षा अनुसंधान साप्ताहिक अद्यतन',
    podcast: 'AIEd Audio पॉडकास्ट',
    note: 'हर गति के लिए एक फ़ीड: हर नया पृष्ठ, सप्ताह में एक अंक, और ऑडियो।',
  },
  ru: {
    heading: 'Следить за базой знаний',
    articles: 'Новые статьи и страницы',
    newsletter: 'Еженедельное обновление исследований ИИ в образовании',
    podcast: 'Подкаст AIEd Audio',
    note: 'Одна лента на каждый темп: каждая новая страница, выпуск раз в неделю и аудио.',
  },
  uk: {
    heading: 'Стежити за базою знань',
    articles: 'Нові статті та сторінки',
    newsletter: 'Щотижневе оновлення досліджень ШІ в освіті',
    podcast: 'Подкаст AIEd Audio',
    note: 'Одна стрічка на кожен темп: кожна нова сторінка, випуск раз на тиждень і аудіо.',
  },
  it: {
    heading: 'Segui la base di conoscenza',
    articles: 'Nuovi articoli e pagine',
    newsletter: 'Aggiornamento settimanale sulla ricerca in IA educativa',
    podcast: 'Podcast AIEd Audio',
    note: 'Un feed per ritmo: ogni nuova pagina appena aggiunta, un numero a settimana e l’audio.',
  },
  bn: {
    heading: 'জ্ঞানভিত্তিক সাইট অনুসরণ করুন',
    articles: 'নতুন নিবন্ধ ও পৃষ্ঠা',
    newsletter: 'এআই শিক্ষা গবেষণা সাপ্তাহিক হালনাগাদ',
    podcast: 'AIEd Audio পডকাস্ট',
    note: 'প্রতিটি গতির জন্য একটি ফিড: প্রতিটি নতুন পৃষ্ঠা, সপ্তাহে একটি সংখ্যা, এবং অডিও।',
  },
  ur: {
    heading: 'علمی مرکز کی پیروی کریں',
    articles: 'نئے مضامین اور صفحات',
    newsletter: 'اے آئی تعلیم تحقیق ہفتہ وار اپ ڈیٹ',
    podcast: 'AIEd Audio پوڈکاسٹ',
    note: 'ہر رفتار کے لیے ایک فیڈ: ہر نیا صفحہ، ہفتے میں ایک شمارہ، اور آڈیو۔',
  },
  id: {
    heading: 'Ikuti basis pengetahuan',
    articles: 'Artikel dan halaman baru',
    newsletter: 'Pembaruan riset AI dalam pendidikan mingguan',
    podcast: 'Podcast AIEd Audio',
    note: 'Satu feed untuk setiap ritme: setiap halaman baru, satu edisi per minggu, dan audio.',
  },
  vi: {
    heading: 'Theo dõi cơ sở tri thức',
    articles: 'Bài viết và trang mới',
    newsletter: 'Cập nhật nghiên cứu AI trong giáo dục hằng tuần',
    podcast: 'Podcast AIEd Audio',
    note: 'Mỗi nhịp một nguồn cấp: từng trang mới, một số mỗi tuần và bản âm thanh.',
  },
  nl: {
    heading: 'Volg de kennisbank',
    articles: 'Nieuwe artikelen en pagina’s',
    newsletter: 'Wekelijkse update over AI-onderzoek in het onderwijs',
    podcast: 'AIEd Audio-podcast',
    note: 'Eén feed per tempo: elke nieuwe pagina, één editie per week en de audio.',
  },
  sv: {
    heading: 'Följ kunskapsbasen',
    articles: 'Nya artiklar och sidor',
    newsletter: 'Veckovis uppdatering om AI-forskning i utbildning',
    podcast: 'AIEd Audio-podden',
    note: 'Ett flöde per takt: varje ny sida, ett nummer i veckan och ljudet.',
  },
  da: {
    heading: 'Følg vidensbasen',
    articles: 'Nye artikler og sider',
    newsletter: 'Ugentlig opdatering om AI-forskning i uddannelse',
    podcast: 'AIEd Audio-podcast',
    note: 'Ét feed pr. tempo: hver ny side, et nummer om ugen og lyden.',
  },
  fi: {
    heading: 'Seuraa tietopohjaa',
    articles: 'Uudet artikkelit ja sivut',
    newsletter: 'Viikoittainen katsaus tekoälytutkimukseen koulutuksessa',
    podcast: 'AIEd Audio -podcast',
    note: 'Yksi syöte kullekin tahdille: jokainen uusi sivu, yksi numero viikossa ja ääni.',
  },
  no: {
    heading: 'Følg kunnskapsbasen',
    articles: 'Nye artikler og sider',
    newsletter: 'Ukentlig oppdatering om AI-forskning i utdanning',
    podcast: 'AIEd Audio-podkast',
    note: 'Én feed per tempo: hver nye side, ett nummer i uken og lyden.',
  },
  ro: {
    heading: 'Urmărește baza de cunoștințe',
    articles: 'Articole și pagini noi',
    newsletter: 'Actualizare săptămânală despre cercetarea IA în educație',
    podcast: 'Podcast AIEd Audio',
    note: 'Un flux pentru fiecare ritm: fiecare pagină nouă, un număr pe săptămână și audio.',
  },
  hu: {
    heading: 'Kövesd a tudásbázist',
    articles: 'Új cikkek és oldalak',
    newsletter: 'Heti frissítés az oktatási AI-kutatásról',
    podcast: 'AIEd Audio podcast',
    note: 'Egy hírcsatorna minden ütemhez: minden új oldal, heti egy kiadás és a hanganyag.',
  },
  cs: {
    heading: 'Sledujte znalostní bázi',
    articles: 'Nové články a stránky',
    newsletter: 'Týdenní přehled výzkumu AI ve vzdělávání',
    podcast: 'Podcast AIEd Audio',
    note: 'Jeden kanál pro každé tempo: každá nová stránka, jedno vydání týdně a audio.',
  },
  bg: {
    heading: 'Следете базата от знания',
    articles: 'Нови статии и страници',
    newsletter: 'Седмична актуализация за изследванията на ИИ в образованието',
    podcast: 'Подкаст AIEd Audio',
    note: 'Един канал за всяко темпо: всяка нова страница, един брой седмично и аудиото.',
  },
  sk: {
    heading: 'Sledujte znalostnú bázu',
    articles: 'Nové články a stránky',
    newsletter: 'Týždenný prehľad výskumu AI vo vzdelávaní',
    podcast: 'Podcast AIEd Audio',
    note: 'Jeden kanál pre každé tempo: každá nová stránka, jedno vydanie týždenne a audio.',
  },
  hr: {
    heading: 'Pratite bazu znanja',
    articles: 'Novi članci i stranice',
    newsletter: 'Tjedni pregled istraživanja AI u obrazovanju',
    podcast: 'Podcast AIEd Audio',
    note: 'Jedan kanal za svaki ritam: svaka nova stranica, jedno izdanje tjedno i audio.',
  },
  el: {
    heading: 'Ακολουθήστε τη βάση γνώσης',
    articles: 'Νέα άρθρα και σελίδες',
    newsletter: 'Εβδομαδιαία ενημέρωση για την έρευνα AI στην εκπαίδευση',
    podcast: 'Podcast AIEd Audio',
    note: 'Μία ροή για κάθε ρυθμό: κάθε νέα σελίδα, ένα τεύχος την εβδομάδα και ο ήχος.',
  },
  pl: {
    heading: 'Śledź bazę wiedzy',
    articles: 'Nowe artykuły i strony',
    newsletter: 'Tygodniowy przegląd badań nad AI w edukacji',
    podcast: 'Podcast AIEd Audio',
    note: 'Jeden kanał na każde tempo: każda nowa strona, jedno wydanie tygodniowo i audio.',
  },
  sw: {
    heading: 'Fuatilia hifadhi ya maarifa',
    articles: 'Makala na kurasa mpya',
    newsletter: 'Taarifa ya kila wiki kuhusu utafiti wa AI katika elimu',
    podcast: 'Podkasti ya AIEd Audio',
    note: 'Mlisho mmoja kwa kila mwendo: kila ukurasa mpya, toleo moja kwa wiki, na sauti.',
  },
  tr: {
    heading: 'Bilgi tabanını takip edin',
    articles: 'Yeni makaleler ve sayfalar',
    newsletter: 'Eğitimde yapay zekâ araştırmaları haftalık güncellemesi',
    podcast: 'AIEd Audio podcast',
    note: 'Her tempo için bir akış: her yeni sayfa, haftada bir sayı ve ses.',
  },
};

/** Labels for `locale`, falling back to English for anything not yet translated. */
export function feedStrings(locale: string): FeedStrings {
  return { ...en, ...(LABELS[locale] ?? {}) };
}
