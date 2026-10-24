/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Polish visitor can see what the
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

const pl: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Cotygodniowy newsletter bazy wiedzy o AI w edukacji: co nowe badania znaczą dla wykładowców, deweloperów, badaczy i administracji.',
  introHtml:
    'Cotygodniowe podsumowanie z <a href="/aied/">bazy wiedzy o AI w edukacji</a> o tym, co badania opublikowane w danym tygodniu znaczą dla wykładowców, deweloperów, badaczy i administracji. Każdy numer linkuje artykuł stojący za każdym twierdzeniem, a prace wewnętrzne na dole śledzą, co zmieniło się na samej stronie.',
  feedsHtml:
    'Dwa kanały RSS ją dostarczają. <a href="/aied/news/rss.xml">Kanał newslettera</a> zawiera tylko numery, po jednym wpisie na tydzień. <a href="/aied/rss.xml">Kanał bazy wiedzy</a> zawiera każde nowe streszczenie artykułu w chwili dodania, czyli ten sam materiał, z którego powstają numery, w znacznie szybszym tempie.',
  emailHtml:
    'Aby otrzymywać każdy numer e-mailem, wklej kanał newslettera do <a href="https://blogtrottr.com/">Blogtrottr</a>, darmowej zewnętrznej usługi, która wysyła kanał na Twoją skrzynkę z wybraną przez Ciebie częstotliwością. Jej wiadomości zawierają reklamy.',
  linkedinHtml:
    'Możesz też śledzić go na <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7519570283561852928">LinkedIn</a>, gdzie każdy numer wychodzi jako newsletter LinkedIn w Twoim kanale.',
  empty: 'Nie opublikowano jeszcze żadnego numeru.',
  allIssues: 'Wszystkie numery',
  otherIssuesAria: 'Inne numery',
  issueLabel: 'Numer {issue}',
};

export default pl;
