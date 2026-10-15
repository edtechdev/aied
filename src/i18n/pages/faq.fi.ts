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

const fi: FaqStrings = {
  title: 'UKK',
  h1: 'Usein kysytyt kysymykset',
  introHtml:
    'Tämä osio vastaa yleisiin kysymyksiin <strong>tekoälystä koulutuksessa</strong> — siitä, mitä tutkimus sanoo tekoälyn vaikutuksesta opettamiseen ja oppimiseen, sekä siitä, miten kasvattajat, opettajat ja oppimissuunnittelijat voivat hyödyntää tätä näyttöä käytännössä. Jokainen vastaus tiivistää tässä tietopankissa kootun tutkimuksen tulokset ja kytkee kysymyksen olennaisiin käsitteisiin ja artikkeleihin syvempää lukemista varten.',
  assistantHtml:
    'Onko sinulla kysymys, johon täällä ei ole vastausta? Kysy omalta tekoälyavustajaltasi <a href=\"/aied/ai\">Tietopankin käyttäminen omalla tekoälyavustajalla</a> -sivun avulla. Se näyttää, miten agentti ohjataan koko luetteloon, jotta vastaukset perustuvat lähteisiin ja siteerauksiin.',
  empty: 'UKK:ita ei ole vielä.',
};

export default fi;
