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

const uk: FaqStrings = {
  title: 'Поширені питання',
  h1: 'Поширені питання',
  introHtml:
    'Цей розділ відповідає на поширені питання про <strong>ШІ в освіті</strong> — що дослідження кажуть про те, як ШІ впливає на викладання та навчання, і як педагоги, викладачі та інструкційні дизайнери можуть втілити ці докази на практиці. Кожна відповідь виокремлює висновки з досліджень, підсумованих у цій базі знань, пов\'язуючи питання з відповідними концепціями та статтями для глибшого читання.',
  assistantHtml:
    'Маєте питання, на яке тут немає відповіді? Запитайте свого ШІ-помічника через сторінку <a href="/aied/ai">Використання цієї бази знань зі своїм ШІ-помічником</a>, яка показує, як спрямувати агента на повний каталог для ґрунтованих відповідей із цитуванням.',
  empty: 'Ще немає поширених питань.',
  sectionHeadings: {
    "Start here": "З чого почати",
    "Course and institutional policy": "Політика курсу та інституції",
    "Designing courses and activities": "Проєктування курсів і занять",
    "Assessment, feedback and integrity": "Оцінювання, зворотний зв’язок і доброчесність",
    "How students learn and use AI": "Як студенти навчаються і застосовують ШІ",
    "Particular learners, access and wellbeing": "Різні студенти, доступ і благополуччя",
    "Careers and AI literacy": "Кар’єра і ШІ-грамотність",
    "Building and evaluating educational AI": "Створення й оцінювання освітнього ШІ",
    "Research practice": "Дослідницька практика",
  },
  sectionBlurbs: {
    "Start here": "Два широкі питання, які варто прочитати раніше за конкретні, хоч би яку роль ви мали.",
    "Course and institutional policy": "Для викладачів, які пишуть правила, що їх читатимуть студенти, і для адміністраторів та методистів, які задають їх на рівні програми.",
    "Designing courses and activities": "Для всіх, хто вирішує, де ШІ входить у завдання, семестр чи онлайн-курс, і для викладачів, які хочуть повернути час, який ШІ мав їм дати.",
    "Assessment, feedback and integrity": "Найбільший блок, бо саме тут докази найчіткіші, а наслідки лягають на академічну історію студента.",
    "How students learn and use AI": "Про те, що студенти справді здобувають, що ризикують втратити і як зберегти навчання за ними.",
    "Particular learners, access and wellbeing": "Для викладачів і фахівців підтримки, які пристосовують дизайн до тих, хто справді є в аудиторії, і для адміністраторів, які думають про тих, кого там немає.",
    "Careers and AI literacy": "Для дизайнерів навчальних програм і керівників програм, які відповідають студентам на запитання, для чого все це.",
    "Building and evaluating educational AI": "Для розробників, дизайнерів навчання й дослідників, які виводять тьютора, симуляцію чи платформу в реальний курс.",
    "Research practice": "Для дослідників, які описують, рецензують або планують роботу в цій галузі.",
  },
};

export default uk;
