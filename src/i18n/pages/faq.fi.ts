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

const fi: FaqStrings = {
  title: 'UKK',
  h1: 'Usein kysytyt kysymykset',
  introHtml:
    'Tämä osio vastaa yleisiin kysymyksiin <strong>tekoälystä koulutuksessa</strong> — siitä, mitä tutkimus sanoo tekoälyn vaikutuksesta opettamiseen ja oppimiseen, sekä siitä, miten kasvattajat, opettajat ja oppimissuunnittelijat voivat hyödyntää tätä näyttöä käytännössä. Jokainen vastaus tiivistää tässä tietopankissa kootun tutkimuksen tulokset ja kytkee kysymyksen olennaisiin käsitteisiin ja artikkeleihin syvempää lukemista varten.',
  assistantHtml:
    'Onko sinulla kysymys, johon täällä ei ole vastausta? Kysy omalta tekoälyavustajaltasi <a href=\"/aied/ai\">Tietopankin käyttäminen omalla tekoälyavustajalla</a> -sivun avulla. Se näyttää, miten agentti ohjataan koko luetteloon, jotta vastaukset perustuvat lähteisiin ja siteerauksiin.',
  empty: 'UKK:ita ei ole vielä.',
  sectionHeadings: {
    "Start here": "Aloita tästä",
    "Course and institutional policy": "Kurssin ja oppilaitoksen käytännöt",
    "Designing courses and activities": "Kurssien ja tehtävien suunnittelu",
    "Assessment, feedback and integrity": "Arviointi, palaute ja rehellisyys",
    "How students learn and use AI": "Opiskelijoiden oppiminen ja tekoälyn käyttö",
    "Particular learners, access and wellbeing": "Erityisryhmät, saavutettavuus ja hyvinvointi",
    "Careers and AI literacy": "Ura ja tekoälylukutaito",
    "Building and evaluating educational AI": "Koulutustekoälyn rakentaminen ja arviointi",
    "Research practice": "Tutkimuskäytäntö",
  },
  sectionBlurbs: {
    "Start here": "Kaksi laajaa kysymystä, jotka kannattaa lukea ennen yksityiskohtaisia, roolistasi riippumatta.",
    "Course and institutional policy": "Opettajille, jotka kirjoittavat opiskelijoiden lukemat säännöt, ja hallinnon työntekijöille ja opetuksen kehittäjille, jotka linjaavat ne ohjelmatasolla.",
    "Designing courses and activities": "Kaikille, jotka päättävät, mihin tehtävään, lukukauteen tai verkkokurssiin tekoäly tulee, ja opettajille, jotka haluavat takaisin sen ajan, jonka tekoälyn piti säästää.",
    "Assessment, feedback and integrity": "Suurin ryhmä, koska täällä näyttö on terävintä ja seuraukset päätyvät opiskelijan arviointitietoihin.",
    "How students learn and use AI": "Kysymyksiin siitä, mitä opiskelijat todella saavat, mitä he voivat menettää ja miten oppiminen pysyy heillä.",
    "Particular learners, access and wellbeing": "Opettajille ja tukihenkilöstölle, jotka sovittavat suunnittelun siihen, keitä luokassa todella on, ja hallinnolle, joka miettii, keitä siellä ei ole.",
    "Careers and AI literacy": "Opetussuunnittelijoille ja ohjelmajohtajille, jotka vastaavat opiskelijoiden kysymykseen siitä, mihin tätä kaikkea tarvitaan.",
    "Building and evaluating educational AI": "Kehittäjille, oppimissuunnittelijoille ja tutkijoille, jotka tuovat ohjaajan, simulaation tai alustan oikealle kurssille.",
    "Research practice": "Tutkijoille, jotka raportoivat, vertaisarvioivat tai suunnittelevat tämän alan tutkimusta.",
  },
};

export default fi;
