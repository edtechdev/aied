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
  introHtml: `Tervetuloa Tekoäly koulutuksessa -tietopankkiin, ilmaiseen ja yleisön käytössä olevaan aineistoon <a href="/aied/concepts/ai-education/">tekoälystä koulutuksessa</a> niille, jotka opettavat, opiskelevat, suunnittelevat tai hallinnoivat koulutusta. Se tiivistää ja yhdistää tuoretta avointa koulutustutkimusta. Tekoälyagentti kirjoittaa ja päivittää sivut sivuston kehittäjän toimituksellisella ohjauksella.`,
  navHeading: 'Suunnistaminen sivustolla',
  navHtml: `Selaa vasemmassa sivupalkissa olevaa hakemistoa, joka on järjestetty osastoittain, tai <a href="/aied/search">hae</a> aihetta. Artikkelisivut tiivistävät yhteen tutkimukseen sen tarkoituksen, menetelmät ja tulokset; käsitesivut kokoavat yhteen sen, mitä tutkimus sanoo yhdestä ideasta, ja linkittävät niiden taustalla oleviin tutkimuksiin. Jos haluat lähteä liikkeelle kysymyksestä, <a href="/aied/faq">UKK</a> kattaa kysymykset, jotka kävijät esittävät ensimmäisenä, kuten kurssin tekoälykäytännöt tai sen, kannattaako tekoälytunnistimia käyttää. Jos haluat lähteä liikkeelle työkalusta, <a href="/aied/resources">resurssisivu</a> listaa ilmaiset työkalut ja kokoelmat sekä kertoo, kuka kunkin teki ja mitä se maksaa. Yllä oleva kartta jakaa alan kahteentoista kokonaisuuteen, ja <a href="/aied/concepts/ai-education/">AI koulutuksessa</a> on sen keskeisin solmu.`,
  chatHeading: 'Keskustele tietopankin kanssa',
  chatHtml: `Koko aineisto on julkaistu myös koneellisesti luettavina tiedostoina, joten voit suunnata tekoälykeskustelubotin tai -agentin siihen ja saada vastauksia, jotka siteeraavat sivuja. <a href="/aied/ai">Kehotteet löytyvät täältä</a>. Uudet sivut menevät <a href="/aied/journal">päiväkirjaan</a>, jolla on <a href="/aied/rss.xml">RSS-syöte</a>. Jos haluat lukea ilman verkkoyhteyttä, lataa <a href="/aied/aied.epub">EPUB</a> tai <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Suositellut lähtökohdat yleisöryhmittäin',
  startingIntro:
    'Aloita ryhmästä, joka vastaa omaa rooliasi.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Keskeiset käsitteet',
      html: `<a href="/aied/concepts/ai-literacy/">tekoälylukutaito</a>, <a href="/aied/concepts/misconceptions/">väärinkäsitykset tekoälystä</a>, <a href="/aied/concepts/agentic-ai/">agenttinen tekoäly</a>, <a href="/aied/concepts/cognitive-offloading/">kognitiivinen ulkoistaminen</a> sekä <a href="/aied/concepts/interpreting-and-applying-aied-research/">miten tätä tutkimusta tulkitaan ja sovelletaan</a>, mukaan lukien se, miksi yksittäinen tutkimus harvoin ratkaisee kysymyksen.`,
    },
    {
      id: 'instructors',
      heading: 'Opettajat',
      html: `<a href="/aied/concepts/teacher-role/">muuttuva opettajan rooli</a>, <a href="/aied/concepts/learning-design/">oppimissuunnittelu</a>, <a href="/aied/concepts/assessment/">arviointi</a>, <a href="/aied/concepts/feedback/">palaute</a>, <a href="/aied/concepts/academic-integrity/">akateeminen rehellisyys</a>, <a href="/aied/concepts/framing-ai-use-for-students/">tekoälyn käytön viitoittaminen</a> ja <a href="/aied/concepts/reducing-ai-misuse/">väärinkäytön vähentäminen</a>. Ainekohtaiset työkalut ja esimerkit löydät kohdasta <a href="/aied/concepts/discipline-specific-aied/">tekoäly omalla tieteenalallasi</a>.`,
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
    'Jokainen sivu on päivätty, ja alla olevat luvut kertovat, mitä on julkaistu juuri nyt; listan lopussa oleva "viimeksi päivitetty" -päivämäärä on uusin muokkaus.',
  conceptMap: {
    title: 'Käsitekartta: AI koulutuksessa',
    desc:
      'Säteittäinen kartta, jonka keskellä on AI koulutuksessa, yhteydessä kahteentoista päätason käsitteeseen: ' +
      'mallintaminen, oppiminen, tasa-arvo, palaute, tekoälylukutaito, arviointi, tieteenalat, pedagogiikka, ' +
      'etiikka, teknologiat, arviointi ja tutkimus.',
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
