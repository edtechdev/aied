/**
 * Home page copy, per locale. Each locale module exports the same keys, so the
 * page component (`src/components/pages/HomePage.astro`) renders any language with
 * no branching. HTML is allowed; internal links are authored exactly as in English
 * and are moved into the active locale by `localizeHtml` only for the routes that
 * actually have a translation.
 */
export interface HomeStrings {
  title: string;
  h1: string;
  introHtml: string;
  navHeading: string;
  navHtml: string;
  chatHeading: string;
  chatHtml: string;
  startingHeading: string;
  startingIntro: string;
  groups: Array<{ id: string; heading: string; html: string }>;
  statsHeading: string;
  statsIntro: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
  /** Home page concept map: node labels are looked up by concept slug. */
  conceptMap: {
    title: string;
    desc: string;
    navLabel: string;
    center: string;
    nodes: Record<string, string>;
  };
}

const fi: HomeStrings = {
  title: 'Etusivu',
  h1: 'Tekoäly koulutuksessa -tietopankki',
  introHtml: `Tervetuloa <strong>Tekoäly koulutuksessa -tietopankkiin</strong> — ilmaiseen, yleisön käytössä olevaan aineistoon <a href=\"/aied/concepts/ai-education/\">tekoälystä koulutuksessa</a>. Se on tarkoitettu niille, jotka opettavat, opiskelevat, suunnittelevat tai hallinnoivat koulutusta. Se tiivistää tuoreen avoimen tieteen tutkimuksen lyhyiksi ja jäsennellyiksi sivuiksi, jotka voi lukea ja joiden pohjalta voi toimia. Huomio siitä, miten aineisto on tehty: sivut luo ja päivittää tekoälyagentti sivuston kehittäjän toimittaman toimituksellisen ohjauksen pohjalta. Jokainen väite nimeää takanaan olevan tutkimuksen, joten lähteet voi tarkistaa.`,
  navHeading: 'Suunnistaminen sivustolla',
  navHtml: `Selaa vasemmassa sivupalkissa olevaa osastoittaista hakemistoa nähdäksesi, miten ala on järjestetty, tai <a href=\"/aied/search\">hae koko tietopankista</a>, jos aihe on jo mielessäsi. Artikkelisivut tiivistävät yhteen tutkimukseen sen tarkoituksen, menetelmät ja tulokset, mukaan lukien täyden lähdeviitteen ja linkit aiheeseen liittyvään tutkimukseen; käsitesivut kokoavat yhteen sen, mitä tutkimus sanoo yhdestä ideasta, ja linkittävät niiden taustalla oleviin tutkimuksiin. Jos haluat lähteä liikkeelle kysymyksestä, <a href=\"/aied/faq\">UKK-hakemisto</a> kerää kysymykset, jotka kävijät esittävät ensimmäisenä, kurssin tekoälykäytännöistä siihen, kannattaako tekoälytunnistimia käyttää; jos haluat lähteä liikkeelle työkalusta, <a href=\"/aied/resources\">resurssisivu</a> listaa ilmaiset työkalut, kokoelmat ja mittarit, joita voi heti käyttää, ja kertoo kunkin tekijän sekä kustannukset. Yllä oleva käsitekartta näyttää, mikä liittyy mihinkin; <a href=\"/aied/concepts/ai-education/\">AI koulutuksessa</a> on sen taustalla oleva karttasivu, joka jakaa käsitteet noin kymmeneen kokonaisuuteen.`,
  chatHeading: 'Keskustele tietopankin kanssa',
  chatHtml: `Koko aineisto on julkaistu myös koneellisesti luettavina tiedostoina, joten voit suunnata haluamasi tekoälykeskustelubotin tai -agentin tietopankkiin ja saada vastauksia, jotka siteeraavat sitä arvailun sijaan — <a href=\"/aied/ai\">kehoitteet löytyvät täältä</a>. Uudet sivut ilmestyvät <a href=\"/aied/journal\">päiväkirjaan</a>, jolla on <a href=\"/aied/rss.xml\">RSS-syöte</a>, jos haluat seurata päivityksiä. Jos haluat lukea ilman verkkoyhteyttä, ota <a href=\"/aied/aied.epub\">EPUB</a> tai <a href=\"/aied/aied.pdf\">PDF</a>.`,
  startingHeading: 'Suositellut lähtökohdat yleisöryhmittäin',
  startingIntro:
    'Alla on joitakin suositeltuja käsitteitä, joista kannattaa aloittaa tässä tietopankissa.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Keskeiset käsitteet',
      html: `<a href=\"/aied/concepts/ai-literacy/\">tekoälylukutaito</a>, <a href=\"/aied/concepts/misconceptions/\">väärinkäsitykset tekoälystä</a>, <a href=\"/aied/concepts/agentic-ai/\">agenttinen tekoäly</a>, <a href=\"/aied/concepts/cognitive-offloading/\">kognitiivinen ulkoistaminen</a> sekä <a href=\"/aied/concepts/interpreting-and-applying-aied-research/\">miten tätä tutkimusta tulkitaan ja sovelletaan</a>: mitä tulokset voivat ja eivät voi tukea ja miksi yksittäinen tutkimus harvoin ratkaisee kysymyksen.`,
    },
    {
      id: 'instructors',
      heading: 'Opettajat',
      html: `<a href=\"/aied/concepts/teacher-role/\">muuttuva opettajan rooli</a>, <a href=\"/aied/concepts/learning-design/\">oppimissuunnittelu</a>, <a href=\"/aied/concepts/assessment/\">arviointi</a>, <a href=\"/aied/concepts/feedback/\">palaute</a>, <a href=\"/aied/concepts/academic-integrity/\">akateeminen rehellisyys</a>, <a href=\"/aied/concepts/framing-ai-use-for-students/\">tekoälyn käytön viitoittaminen</a> ja <a href=\"/aied/concepts/reducing-ai-misuse/\">väärinkäytön vähentäminen</a>. Oman aineesi työkalut, todisteet ja esimerkit löydät osoitteesta <a href=\"/aied/concepts/discipline-specific-aied/\">tekoäly omalla tieteenalallasi</a>.`,
    },
    {
      id: 'developers',
      heading: 'Kehittäjät',
      html: `<a href=\"/aied/concepts/educational-technology-developers/\">rakentaminen koulutusta varten</a>, <a href=\"/aied/concepts/ai-technologies/\">alla olevat teknologiat</a>, <a href=\"/aied/concepts/intelligent-tutoring/\">älykäs ohjaus</a>, <a href=\"/aied/concepts/multimodal/\">monimuotoinen tekoäly</a>, <a href=\"/aied/concepts/student-modeling/\">oppijan mallintaminen</a> ja <a href=\"/aied/concepts/llm-training-and-fine-tuning/\">mallin kouluttaminen ja sovittaminen opetusta varten</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Hallintohenkilöt',
      html: `<a href=\"/aied/concepts/administrator/\">hallintohenkilön rooli</a>, <a href=\"/aied/concepts/governance/\">tekoälyn ohjausjärjestelmä</a>, <a href=\"/aied/concepts/educational-policy-ai/\">instituution käytännöt</a>, <a href=\"/aied/concepts/legal-issues-and-risks/\">oikeudelliset kysymykset ja riskit</a> ja <a href=\"/aied/concepts/change-management/\">muutoksen johtaminen</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Tutkijat',
      html: `<a href=\"/aied/concepts/research-methods-aied/\">tutkimusmenetelmät tekoälyissä oppimisessa</a>, <a href=\"/aied/concepts/theories-and-frameworks/\">teoriat ja viitekehykset</a>, <a href=\"/aied/concepts/ai-ed-evaluation/\">tekoälyä hyödyntävän koulutustoimenpiteen arviointi</a>, <a href=\"/aied/concepts/educational-measurement/\">mittaaminen koulutuksessa</a>, <a href=\"/aied/concepts/learning-gains/\">oppimistulosten mittaaminen</a> ja <a href=\"/aied/concepts/limitations-in-aied-research/\">tämän näyttöpohjan rajat</a>.`,
    },
  ],
  statsHeading: 'Mitä tietopankki sisältää',
  statsIntro:
    'Jokainen sivu on päivätty, ja tietopankki kasvaa sitä mukaa kuin uutta avointa tutkimusta julkaistaan ja tarkistetaan. Alla olevat luvut luetaan nykyisestä sisällöstä; päivämäärä on uusimman sivupäivityksen aika.',
  conceptMap: {
    title: 'Käsitekartta: AI koulutuksessa',
    desc:
      'Säteittäinen kartta, jonka keskellä on AI koulutuksessa, yhteydessä kahteentoista päätason käsitteeseen: ' +
      'mallintaminen, oppiminen, tasa-arvo, palaute, tekoälylukutaito, arviointi, tieteenalat, pedagogiikka, ' +
      'etiikka, teknologiat, arviointi ja tutkimus. Valitse jokin solmu avataksesi sen sivun.',
    navLabel: 'AI koulutuksessa -käsitteet',
    center: 'AI koulutuksessa',
    nodes: {
      'student-modeling': 'Mallintaminen',
      'learning-theories': 'Oppiminen',
      'equity-in-ai-education': 'Tasa-arvo',
      feedback: 'Palaute',
      'ai-literacy': 'Tekoälylukutaito',
      assessment: 'Arviointi',
      'discipline-specific-aied': 'Tieteenalat',
      pedagogy: 'Pedagogiikka',
      ethics: 'Etiikka',
      'ai-technologies': 'Teknologiat',
      'ai-ed-evaluation': 'Arviointi',
      'research-methods-aied': 'Tutkimus',
    },
  },
  toc: [
    { text: 'Suunnistaminen sivustolla', slug: 'navigating-the-site', depth: 2 },
    { text: 'Keskustele tietopankin kanssa', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Suositellut lähtökohdat yleisöryhmittäin', slug: 'starting-points', depth: 2 },
    { text: 'Keskeiset käsitteet', slug: 'essential-concepts', depth: 3 },
    { text: 'Opettajat', slug: 'instructors', depth: 3 },
    { text: 'Kehittäjät', slug: 'developers', depth: 3 },
    { text: 'Hallintohenkilöt', slug: 'administrators', depth: 3 },
    { text: 'Tutkijat', slug: 'researchers', depth: 3 },
    { text: 'Mitä tietopankki sisältää', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default fi;
