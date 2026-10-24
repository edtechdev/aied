/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Finnish visitor can see what the
 * newsletter is, when issues appeared, and how to get back to the list.
 */
import type { NewsStrings } from './news.en';

const fi: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'AI koulutuksessa -tietopankin viikoittainen uutiskirje: mitä uusi tutkimus merkitsee opettajille, kehittäjille, tutkijoille ja hallintohenkilöille.',
  introHtml:
    'Viikoittainen katsaus <a href="/aied/">AI koulutuksessa -tietopankista</a>: mitä viikon aikana julkaistu uusi tutkimus merkitsee opettajille, kehittäjille, tutkijoille ja hallintohenkilöille. Jokainen numero linkittää väitteidensä taustalla olevaan tutkimukseen, ja alareunan sisäinen osuus kertoo, mitä sivustolla itsessään muuttui.',
  feedsHtml:
    'Sitä välittää kaksi RSS-syötettä. <a href="/aied/news/rss.xml">Uutiskirjesyöte</a> sisältää vain numerot, yhden viikossa. <a href="/aied/rss.xml">Tietopankin syöte</a> sisältää jokaisen uuden artikkelitiivistelmän heti kun se lisätään, eli samaa aineistoa, josta numerot kootaan, paljon tiheämpään tahtiin.',
  emailHtml:
    'Saadaksesi jokaisen numeron sähköpostitse liitä uutiskirjesyöte <a href="https://blogtrottr.com/">Blogtrottr</a>-palveluun. Se on ilmainen kolmannen osapuolen palvelu, joka lähettää syötteen sähköpostiisi valitsemallasi aikataululla, ja sen viestit sisältävät mainoksia.',
  linkedinHtml:
    'Voit seurata sitä myös <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7519570283561852928">LinkedIn</a>issa, jossa jokainen numero julkaistaan LinkedIn-uutiskirjeenä syötteessäsi.',
  empty: 'Numeroita ei ole vielä julkaistu.',
  allIssues: 'Kaikki numerot',
  otherIssuesAria: 'Muut numerot',
  issueLabel: 'Numero {issue}',
};

export default fi;
