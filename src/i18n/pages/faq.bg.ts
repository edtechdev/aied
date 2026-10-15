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

const bg: FaqStrings = {
  title: 'ЧЗВ',
  h1: 'Често задавани въпроси',
  introHtml:
    'Този раздел отговаря на често задавани въпроси за <strong>AI в образованието</strong> — какво казват изследванията за това как AI влияе на преподаването и ученето, и как преподавателите, лекторите и дизайнерите на обучение могат да приложат тези доказателства на практика. Всеки отговор извлича констатациите от изследванията, систематизирани в тази база знания, свързвайки въпроса със съответните понятия и статии за по-задълбочено четене.',
  assistantHtml:
    'Имате въпрос, на който няма отговор тук? Питайте своя AI асистент, като използвате страницата <a href="/aied/ai">Използване на тази база знания със собствен AI асистент</a>, която показва как да насочите агент към пълния каталог за обосновани, цитирани отговори.',
  empty: 'Все още няма ЧЗВ.',
};

export default bg;
