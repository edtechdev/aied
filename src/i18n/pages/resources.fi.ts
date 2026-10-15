/**
 * Copy for the resources index page (`/aied/resources`). The list itself is built
 * from the `resources` collection, which stays in English until those pages are
 * translated; the labels here are what a reader sees above it.
 */
export interface ResourcesStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraphs, in order. May contain inline HTML. */
  introHtml: string[];
  /** Shown when the collection is empty. */
  empty: string;
  /** Group heading per `resource_type` slug. */
  groupLabels: Record<string, string>;
}

const fi: ResourcesStrings = {
  title: 'Resurssit',
  h1: 'Ilmaiset työkalut ja resurssit',
  introHtml: [
    'Huolella valittu joukko <strong>ilmaisia työkaluja, kokoelmia, instrumentteja ja formaatteja</strong> tekoälyä varten koulutuksessa — asioita, joita voi heti ryhtyä käyttämään, eikä tutkimusta, joka on ensin luettava. Niitä ovat tehneet enimmäkseen kasvattajat, oppimissuunnittelijat, kirjastonhoitajat ja tutkijat, ja monet on rakennettu tekoälyn avustuksella sellaisten ihmisten toimesta, jotka eivät ole ammattimaisia kehittäjiä.',
    'Kaikki täällä ei ole interaktiivista. Selaintyökalujen ja tekoälytuutorien lisäksi löydät valmiiden kehotteiden ja "gemien" kirjastoja, luokkahuoneaktiviteettien kokoelmia, tiedote- ja käytäntöasiakirjoja, arviointivälineitä ja avoimia tiedostomuotoja. Jokainen merkintä on lyhyt tiivistelmä, joka linkittää sivulle, jolla kerrotaan sen tekijästä, siitä minkälainen asia se on, onko lähdekoodi saatavilla, mitä sen käyttö maksaa ja milloin sen linkki tarkistettiin viimeksi.',
    'Jokainen merkintä linkittää ulkoiselle sivustolle, jota tämä tietopankki ei hallinnoi, ja linkit tarkistetaan säännöllisesti — jokainen sivu näyttää päivämäärän, jona sen linkki vahvistettiin viimeksi. Jos työkalu on siirtynyt, lopettanut tai jos se kuuluisi tänne mutta puuttuu, nopein reitti on avata issue repositoriossa.',
  ],
  empty: 'Resursseja ei ole vielä.',
  groupLabels: {
    software: 'Ohjelmisto',
    'ai tutor': 'Tekoälytuutorit',
    'agent skill': 'Agentin taidot',
    'prompt or gem library': 'Kehote- ja gemikirjastot',
    'collection of tools': 'Työkalukokoelmat',
    'collection of activities': 'Aktiviteettikokoelmat',
    'assessment instrument': 'Arviointivälineet',
    'open format or specification': 'Avoimet formaatit ja määrittelyt',
    'ebook or guide': 'E-kirjat ja oppaat',
    'case study collection': 'Tapaustutkimuskokoelmat',
    'dataset or benchmark': 'Aineisto- ja benchmarkkijoukot',
  },
};

export default fi;
