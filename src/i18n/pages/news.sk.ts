/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy.
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

const sk: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Týždenný newsletter Vedeckej databázy o AI v edukácii: čo nový výskum znamená pre vyučujúcich, vývojárov, výskumníkov a správcov.',
  introHtml:
    'Týždenný prehľad z <a href="/aied/">Vedeckej databázy o AI v edukácii</a> o tom, čo výskum publikovaný v danom týždni znamená pre vyučujúcich, vývojárov, výskumníkov a správcov. Každé číslo odkazuje prácu za každým tvrdením a interná práca na konci sleduje, čo sa zmenilo na samotnom webe.',
  feedsHtml:
    'Prenášajú ho dva RSS kanály. <a href="/aied/news/rss.xml">Kanál newslettera</a> obsahuje len čísla, jeden záznam týždenne. <a href="/aied/rss.xml">Kanál databázy</a> obsahuje každé nové zhrnutie článku hneď, ako pribudne, čo je ten istý materiál, z ktorého čísla vychádzajú, len oveľa častejšie.',
  emailHtml:
    'Aby ste každé číslo dostali e-mailom, vložte kanál newslettera do <a href="https://blogtrottr.com/">Blogtrottr</a>, bezplatnej služby tretej strany, ktorá vám podľa vami zvoleného rozvrhu posiela kanál do schránky. Jej správy obsahujú reklamu.',
  linkedinHtml:
    'Môžete ho sledovať aj na <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7519570283561852928">LinkedIn</a>, kde každé číslo vychádza ako newsletter na LinkedIn vo vašom kanáli.',
  empty: 'Zatiaľ nebolo vydané žiadne číslo.',
  allIssues: 'Všetky čísla',
  otherIssuesAria: 'Ďalšie čísla',
  issueLabel: 'Číslo {issue}',
};

export default sk;
