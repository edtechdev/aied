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

const uk: FaqStrings = {
  title: 'Поширені питання',
  h1: 'Поширені питання',
  introHtml:
    'Цей розділ відповідає на поширені питання про <strong>ШІ в освіті</strong> — що дослідження кажуть про те, як ШІ впливає на викладання та навчання, і як педагоги, викладачі та інструкційні дизайнери можуть втілити ці докази на практиці. Кожна відповідь виокремлює висновки з досліджень, підсумованих у цій базі знань, пов\'язуючи питання з відповідними концепціями та статтями для глибшого читання.',
  assistantHtml:
    'Маєте питання, на яке тут немає відповіді? Запитайте свого ШІ-помічника через сторінку <a href="/aied/ai">Використання цієї бази знань зі своїм ШІ-помічником</a>, яка показує, як спрямувати агента на повний каталог для ґрунтованих відповідей із цитуванням.',
  empty: 'Ще немає поширених питань.',
};

export default uk;
