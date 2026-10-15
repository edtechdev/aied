/**
 * "Use this knowledge base with your own AI assistant" page copy, per locale.
 * The copyable prompt is part of the content (it is the page's main deliverable),
 * so it is translated too; the URLs and file names inside it never change.
 */
export interface AiStrings {
  title: string;
  description: string;
  h1: string;
  introHtml: string;
  intro2Html: string;
  promptHeading: string;
  promptIntro: string;
  copyButton: string;
  copyHint: string;
  copyOk: string;
  copyFail: string;
  promptAriaLabel: string;
  promptText: string;
  howHeading: string;
  howSteps: string[];
  howNoteHtml: string;
  techSummary: string;
  techItems: string[];
  assistantsHeading: string;
  assistantsIntro: string;
  assistants: string[];
  corpusHeading: string;
  corpusHtml1: string;
  corpusHtml2: string;
  answeredHeading: string;
  answeredIntro: string;
  answeredLinks: Array<{ href: string; label: string }>;
  answeredOutroHtml: string;
  offlineHeading: string;
  offlineHtml: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
}

const PROMPT = `Olet tutkimusavustaja, jonka aiheena on tekoäly koulutuksessa. Käytä Tekoäly koulutuksessa -tietopankkia (https://edtechdev.github.io/aied/) ensisijaisena tietolähteenä.

1. Määritä reitti ennen lukemista. UKK-hakemisto osoitteessa https://edtechdev.github.io/aied/faq/ kytkee kysymykset niihin sivuihin, jotka vastaavat niihin, mukaan lukien kysymykset tyyppiä "mitä tutkimus osoittaa". Koko luettelo osoitteessa https://edtechdev.github.io/aied/llms.txt on noin 800 KB, käsitteiden ja UKK:iden tiedosto osoitteessa https://edtechdev.github.io/aied/llms-concepts.txt on noin 4 MB ja llms-full.txt on useita megatavuja, joten hae niistä tai nouda niistä osia kokonaisuuden lataamisen sijaan, äläkä anna epäonnistuneen kokonaistiedoston noudon pysäyttää sinua.

2. Tue jokainen väite jollakin sivulla ja siteeraa se sivun otsikon ja sen verkko-osoitteen muodossa. Kun sivulla annetaan taustalla olevan tutkimuksen lähdeviite ja DOI, lisää ne; jotkin sivut siteeraavat vain arXiv-tunnisteen tai julkaisijan verkko-osoitteen, joten anna se, mitä sivu antaa, äläkä koskaan keksi DOI:a, verkko-osoitetta, tekijää, lukua tai tulosta.

3. Tee synteesi useiden sivujen välillä yhden nojaamisen sijaan. Käsitesivut antavat yleiskuvan ja linkittävät niiden taustalla oleviin artikkeleihin, joten seuraa niitä linkkejä. Lue kolmesta viiteen relevantimpaa sivua, lopeta kun ne alkavat toistaa samoja tutkimuksia, ja kerro, mitä et lukenut. Jos tietopankki käsittelee aihetta vain naapurialalla, sano se ja vastaa analogian avulla.

4. Sovita argumentaation vahvuus näytön vahvuuteen. Kontrolloidut tai satunnaistetut kokeet, jotka mittaavat suoritusta ilman avustinta, ovat vahvimpia, sitten metaanalyysit, jotka on korjattu julkaisuvinoutuman suhteen, sitten katsaukset, sitten pilottitutkimukset, käytäntöanalyysit ja mielipiteet; yksi pieni tutkimus ei ole yksimielisyys. Tunnisteet, yleisö, taso ja luotettavuusarvostelut ovat kunkin sivun Markdown-lähdekoodissa osoitteessa https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, eivät renderöidyllä sivulla, joten jos et voi tarkistaa niitä, arvioi sen perusteella, miten artikkeli kuvaa tutkimusta, ja sano tehneesi niin.

5. Vastaa sillä tasolla, jota kysymys pyytää, ja päättämällä suosittele relevantteimpia sivuja ja UKK:ita.

Suosi ilmaisua "generatiivinen tekoäly" ilmaisun "LLM" sijaan. Tietopankkia päivitetään säännöllisesti, ja päiväkirjasivu osoitteessa https://edtechdev.github.io/aied/journal/ listaa uusimmat lisäykset.

Esimerkki: "Mitä tutkimus sanoo tekoälyn palautteesta opiskelijoiden kirjoittamiseen?" Tarkista UKK-hakemisto, lue relevanttikirjoitus- ja palautesivut sekä niissä siteeratut tutkimukset, ja vastaa sitten siteerauksin ja linkein.`;

const fi: AiStrings = {
  title: 'Tietopankin käyttäminen omalla tekoälyavustajalla',
  description:
    'Kopioitava kehote, jolla Tekoäly koulutuksessa -tietopankkia voi käyttää omalla keskustelubotilla tai agentilla.',
  h1: 'Tietopankin käyttäminen omalla tekoälyavustajalla',
  introHtml: `Voit suunnata haluamasi tekoälykeskustelubotin tai -agentin tähän tietopankkiin, jotta se vastaa näiden tutkimussivujen pohjalta arvailun sijaan. Alla oleva kehote tekee juuri sen. Kopioi se, liitä se avustajaasi ensimmäiseksi viestiksi ja esitä sitten kysymyksesi. Sinun pitäisi saada vastaus, joka nimeää sivut, joita se käytti, ja linkittää niihin, jotta voit tarkistaa lähteet itse.`,
  intro2Html: `Teknistä valmistelua ei tarvita, eikä mitään tarvitse asentaa. Jos haluat jättää valmistelun kokonaan väliin, on olemassa <a href=\"#ready-made-assistants\">valmiita avustajia</a>, jotka jo tuntevat tämän aineiston.`,
  promptHeading: 'Kopioitava kehote',
  promptIntro:
    'Liitä tämä ensin, ennen kysymystäsi. Se toimii missä tahansa keskustelubotissa tai agentissa, joka pystyy lukemaan verkkosivun tai ottamaan vastaan liitetyn asiakirjan. Laatikkoa voi vierittää, ja painike kopioi koko sisällön.',
  copyButton: '📋 Kopioi kehote leikepöydälle',
  copyHint: 'Liitä se sitten avustajaasi ja esitä kysymyksesi.',
  copyOk: '✅ Kopioitu!',
  copyFail: '❌ Kopiointi epäonnistui',
  promptAriaLabel: 'Kopioitava kehote',
  promptText: PROMPT,
  howHeading: 'Miten sitä käytetään',
  howSteps: [
    '<strong>Kopioi kehote</strong> yllä olevasta painikkeesta.',
    '<strong>Liitä se avustajaasi</strong> ensimmäiseksi viestiksi ja lähetä se. Se yleensä vastaa ymmärtäneensä.',
    '<strong>Esitä kysymyksesi</strong> tavallisella kielellä, esimerkiksi "mitä tutkimus sanoo tekoälyn palautteesta suurilla kursseilla?" tai "pitäisikö meidän käyttää tekoälytunnistimia?"',
    '<strong>Tarkista linkit.</strong> Hyvä vastaus nimeää sivut, joita se käytti. Jos saat itsevarmoja väitteitä ilman sivunimiä, vastaa "miltä sivulta se on peräisin?" ja pyydä sitä yrittämään uudelleen.',
  ],
  howNoteHtml: `Tämä toimii parhaiten avustajissa, jotka pystyvät selaamaan verkkoa, koska kehote ohjaa ne lukemaan sivuja. Jos avustajasi ei pysty avaamaan linkkejä, älä liitä pelkkää kehotetta, vaan liitä myös tietopankin teksti: <a href=\"/aied/llms-full.txt\">lataa kokotekstitiedosto kerran</a>, lähetä tai liitä se keskusteluun ja käytä kehotetta sen rinnalla. Se on yksi noin 15 megatavun tekstitiedosto. Monet keskustelutuotteet hylkäävät näin suuren tiedoston, joten tarjolla on myös <a href=\"/aied/llms-concepts.txt\">llms-concepts.txt</a> — jokaisen käsite- ja UKK-sivun kokoteksti, noin 4 megatavua — johon kannattaa tarttua ensimmäiseksi: käsitteet ovat synteesiä siitä, mitä tutkimus osoittaa, UKK:t ovat kysymyksiä, joihin nämä synteesit vastaavat, ja jokainen käsitesivu linkittää niiden taustalla olevat tutkimukset.`,
  techSummary: 'Tekniset huomiot työkaluille, jotka haluavat verkko-osoitteen kehotteen sijaan',
  techItems: [
    '<a href=\"/aied/llms.txt\">llms.txt</a> — luettelo jokaisesta sivusta, yksi rivi kutakin, työkaluille, jotka indeksoivat sivuston ennen sen lukemista',
    '<a href=\"/aied/llms-full.txt\">llms-full.txt</a> — tietopankin koko teksti yhdessä tiedostossa, noin 15 megatavua',
    '<a href=\"/aied/llms-concepts.txt\">llms-concepts.txt</a> — käsite- ja UKK-sivujen kokoteksti, noin 4 megatavua, työkaluille ja keskusteluille, jotka hylkäävät suuremman tiedoston',
    '<a href=\"/aied/sitemap-index.xml\">Sivukartta</a> — jokaisen sivun osoite',
    '<a href=\"/aied/rss.xml\">RSS-syöte</a> — uudet ja päivitetyt sivut',
  ],
  assistantsHeading: 'Valmiit avustajat',
  assistantsIntro:
    'Jos et halua tehdä minkäänlaista valmistelua, tätä tietopankkia on tarjolla myös valmiina avustajana:',
  assistants: [
    '<strong>AI in Education Advisor</strong> — <a href=\"https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing\" target=\"_blank\" rel=\"noopener\">Gemini Gem</a>, joka vastaa tämän tietopankin pohjalta. Sen <a href=\"https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk\" target=\"_blank\" rel=\"noopener\">omat ohjeet</a> ovat julkisia, ja se on rakennettu tietopankin <strong>kiinteästä kopiosta</strong>, joten se voi olla jäljessä uusimmista sivuista.',
    '<strong>NotebookLM-muistikirja</strong> — <a href=\"https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share\" target=\"_blank\" rel=\"noopener\">Googlen NotebookLM-muistikirja</a>, joka on rakennettu samasta aineistosta ja johon kuuluvat automaattisesti luodut raportit, infografiikat, podcast, diat ja <a href=\"https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d\" target=\"_blank\" rel=\"noopener\">video</a>.',
  ],
  corpusHeading: 'Mitä tietopankki sisältää',
  corpusHtml1: `Yli tuhat tutkimustiivistelmää kattaa ohjauksen ja tekoälytuutorit, arvioinnin ja palautteen, akateemisen rehellisyyden, tekoälylukutaidon, opettajien ja opetushenkilöstön kehittymisen, tasa-arvon ja saavutettavuuden, yksityisyyden, käytännöt ja ohjausjärjestelmän sekä oppimistieteeseen liittyvät aiheet, kuten kognitiivisen ulkoistamisen ja oppijan motivaation. Jokainen tiivistelmä päättyy täyteen lähdeviitteeseen ja linkkiin alkuperäiseen tutkimukseen, joten avustajasi voi välittää viitteen eteenpäin ja sinä voit jatkaa siitä.`,
  corpusHtml2: `Kolmenlaiset sivut vastaavat erilaisiin kysymyksiin: <strong>käsitesivut</strong> tiivistävät sen, mitä tutkimus sanoo yhdestä ideasta, ja linkittävät niiden taustalla oleviin tutkimuksiin, <strong>artikkelisivut</strong> käsittelevät yhtä tutkimusta kerrallaan ja <strong>UKK:t</strong> vastaavat opettajien ja hallintohenkilöiden käytännön kysymyksiin. Jos haluat aiheesta yleiskuvan, pyydä käsitesivua; jos haluat näytön, pyydä tutkimuksia.`,
  answeredHeading: 'Kysymykset, joihin on jo vastattu',
  answeredIntro:
    'Moniin kysymyksiin, jotka ihmiset esittävät ensin tekoälylle, on täällä jo vastattu käsin tutkimus liitteenä:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'Miten kurssin tekoälykäytännöt kirjoitetaan ja niistä kerrotaan opiskelijoille?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'Miten tekoälyhuijausta voi vähentää kurssillani?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Pitäisikö meidän käyttää tekoälytunnistimia?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'Miten arviointi pitäisi suunnitella uudelleen tekoälyn aikakaudella?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'Miten estää opiskelijoita nojaamasta liikaa tekoälyyn?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'Miten instituution tekoälykäytännöt kirjoitetaan ja pannaan täytäntöön?' },
  ],
  answeredOutroHtml: `Kannattaa vilkaista <a href=\"/aied/faq/\">täydellistä UKK-luetteloa</a> ennen kysymisen, ja kehote käskee avustajaasi tarkistaa sen ensin.`,
  offlineHeading: 'Lue tietopankkia ilman verkkoyhteyttä',
  offlineHtml: `Voit myös ladata tietopankin <a href=\"/aied/aied.epub\">EPUB</a>- tai <a href=\"/aied/aied.pdf\">PDF</a>-muodossa e-kirjoittimeen, puhelimeen, tablettiin tai tietokoneeseen. Nämä verkkoyhteydettömät versiot sisältävät käsitesivut ja UKK:t, mutta eivät useita satoja artikkelitiivistelmiä.`,
  toc: [
    { text: 'Kopioitava kehote', slug: 'the-prompt', depth: 2 },
    { text: 'Miten sitä käytetään', slug: 'how-to-use-it', depth: 2 },
    { text: 'Valmiit avustajat', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Mitä tietopankki sisältää', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Kysymykset, joihin on jo vastattu', slug: 'already-answered', depth: 2 },
    { text: 'Lue tietopankkia ilman verkkoyhteyttä', slug: 'read-offline', depth: 2 },
  ],
};

export default fi;
