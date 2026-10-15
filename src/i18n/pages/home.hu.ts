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

const hu: HomeStrings = {
  title: 'Kezdőlap',
  h1: 'Tudásbázis a mesterséges intelligencia oktatási felhasználásáról',
  introHtml: `Üdvözöljük a <strong>mesterséges intelligencia oktatási felhasználásának tudásbázisában</strong> — egy ingyenes, közkinccsé nyilvánított forrásanyag a <a href=\"/aied/concepts/ai-education/\">mesterséges intelligencia oktatási alkalmazásairól</a>, azok számára, akik tanítják, tanulják, tervezik vagy irányítják azt. A közelmúlt nyílt hozzáférésű kutatási eredményeit rövid, strukturált oldalakra sűríti, amelyeket elolvashat és azonnal alkalmazhat. Egy megjegyzés az elkészítéséről: az oldalakat egy AI-ügynök hozza létre és frissíti, a weboldal fejlesztőjének szerkesztői irányításával. Minden állításhoz meg van nevezve a mögötte álló tanulmány, így a források ellenőrizhetők.`,
  navHeading: 'A weboldal használata',
  navHtml: `Böngéssze a bal oldali oldalsávban a tématerületenkénti indexet, hogy lássa, hogyan szerveződik a terület, vagy <a href=\"/aied/search\">keressen</a> az egész tudásbázisban, ha már konkrét téma van a fejében. A cikkoldalak egy-egy tanulmányt összefoglalnak céljával, módszereivel és eredményeivel, teljes idézettel és a kapcsolódó művekhez vezető linkekkel; a fogalomoldalak összegyűjtik, hogy mit mond a kutatás egy-egy gondolatról, és a mögöttük álló vizsgálatokhoz vezetnek. Ha inkább egy kérdésből szeretne kiindulni, a <a href=\"/aied/faq\">GYIK-index</a> összegyűjti azokat, amelyeket a látogatók elsőként kérdeznek, a kurzusokra vonatkozó AI-szabályozástól az AI-detektorok használatáig; ha inkább egy eszközből szeretne kiindulni, a <a href=\"/aied/resources\">források oldala</a> ingyenes eszközöket, gyűjteményeket és mérési instrumentumokat sorol fel, amelyeket azonnal felhasználhat, mindegyiknél megjelölve, ki készítette és mennyibe kerül. A fenti fogalomtérkép azt mutatja, mi függ össze mivel; a <a href=\"/aied/concepts/ai-education/\">mesterséges intelligencia oktatási alkalmazásai</a> a mögötte álló térképlap, amely a fogalmakat mintegy tucatnyi paratematikus ágra csoportosítja.`,
  chatHeading: 'Csevegés a tudásbázissal',
  chatHtml: `Minden itt szereplő anyag géppel olvasható fájlokban is megjelenik, így arra irányíthatja a kedvenc AI-csevegőrobotját vagy -ügynökét, hogy a tudásbázisra hivatkozva válaszoljon találgatás helyett — <a href=\"/aied/ai\">a promptok itt találhatók</a>. Az új oldalak a <a href=\"/aied/journal\">naplóban</a> jelennek meg, amelyhez <a href=\"/aied/rss.xml\">RSS-hírcsatorna</a> is tartozik, ha nyomon szeretné követni a változásokat. Offline olvasáshoz töltse le az <a href=\"/aied/aied.epub\">EPUB</a>-ot vagy a <a href=\"/aied/aied.pdf\">PDF</a>-et.`,
  startingHeading: 'Ajánlott kiindulópontok közönség szerint',
  startingIntro:
    'Íme néhány ajánlott fogalom, amellyel elkezdheti a böngészést ebben a tudásbázisban.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Alapfogalmak',
      html: `<a href=\"/aied/concepts/ai-literacy/\">AI-írástudás</a>, <a href=\"/aied/concepts/misconceptions/\">a mesterséges intelligenciával kapcsolatos tévhied</a>, <a href=\"/aied/concepts/agentic-ai/\">az autonóm AI</a>, <a href=\"/aied/concepts/cognitive-offloading/\">a kognitív kiszervezés</a> és <a href=\"/aied/concepts/interpreting-and-applying-aied-research/\">hogyan értelmezze és alkalmazza ezt a kutatást</a>: mit támasztanak alá az eredmények és mit nem, és miért dönt el egyetlen tanulmány ritkán egy kérdést.`,
    },
    {
      id: 'instructors',
      heading: 'Oktatók',
      html: `<a href=\"/aied/concepts/teacher-role/\">A változó tanári szerep</a>, <a href=\"/aied/concepts/learning-design/\">a tanulási tervezés</a>, <a href=\"/aied/concepts/assessment/\">az értékelés</a>, <a href=\"/aied/concepts/feedback/\">a visszajelzés</a>, <a href=\"/aied/concepts/academic-integrity/\">a tudományos becsület</a>, <a href=\"/aied/concepts/framing-ai-use-for-students/\">az AI-használat kereteinek meghatározása</a> és <a href=\"/aied/concepts/reducing-ai-misuse/\">a visszaélések csökkentése</a>. A saját tárgyában elérhető eszközökhöz, bizonyítékokhoz és példákhoz lásd <a href=\"/aied/concepts/discipline-specific-aied/\">a mesterséges intelligencia a saját szakterületén</a>.`,
    },
    {
      id: 'developers',
      heading: 'Fejlesztők',
      html: `<a href=\"/aied/concepts/educational-technology-developers/\">Fejlesztés az oktatás számára</a>, <a href=\"/aied/concepts/ai-technologies/\">az alapul szolgáló technológiák</a>, <a href=\"/aied/concepts/intelligent-tutoring/\">az intelligens oktatás</a>, <a href=\"/aied/concepts/multimodal/\">a multimodális AI</a>, <a href=\"/aied/concepts/student-modeling/\">a tanuló modellezése</a> és <a href=\"/aied/concepts/llm-training-and-fine-tuning/\">egy modell betanítása és tanítási célra való adaptálása</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Intézményvezetők',
      html: `<a href=\"/aied/concepts/administrator/\">Az intézményvezető szerepe</a>, <a href=\"/aied/concepts/governance/\">az AI-irányítás</a>, <a href=\"/aied/concepts/educational-policy-ai/\">az intézményi szabályozás</a>, <a href=\"/aied/concepts/legal-issues-and-risks/\">a jogi kérdések és kockázatok</a> és <a href=\"/aied/concepts/change-management/\">a változásmenedzsment</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Kutatók',
      html: `<a href=\"/aied/concepts/research-methods-aied/\">Kutatási módszerek az AIED területén</a>, <a href=\"/aied/concepts/theories-and-frameworks/\">elméletek és keretrendszerek</a>, <a href=\"/aied/concepts/ai-ed-evaluation/\">egy AI-alapú oktatási beavatkozás értékelése</a>, <a href=\"/aied/concepts/educational-measurement/\">az oktatásmérés</a>, <a href=\"/aied/concepts/learning-gains/\">a tanulási eredmények mérése</a> és <a href=\"/aied/concepts/limitations-in-aied-research/\">a bizonyítékbázis átfogó korlátai</a>.`,
    },
  ],
  statsHeading: 'Mit tartalmaz a tudásbázis',
  statsIntro:
    'Minden oldal dátumozott, és a tudásbázis a nyílt hozzáférésű kutatási eredmények megjelenésének és áttekintésének nyomán bővül. Az alábbi számok a jelenlegi tartalomból származnak; a dátum a legutóbbi oldalfrissítésé tartozik.',
  conceptMap: {
    title: 'Fogalomtérkép a mesterséges intelligencia oktatási alkalmazásairól',
    desc:
      'Radiális térkép, amelynek közepén a mesterséges intelligencia oktatási alkalmazásai állnak, tizenkét legfelső szintű fogalomhoz kapcsolódva: ' +
      'Modellezés, Tanulás, Esélyegyenlőség, Visszajelzés, AI-írástudás, Értékelés, Szakterületek, ' +
      'Pedagógia, Etika, Technológia, Kiértékelés és Kutatás. Válasszon ki egy csomópontot az oldalának megnyitásához.',
    navLabel: 'A mesterséges intelligencia oktatási alkalmazásainak fogalmai',
    center: 'Mesterséges intelligencia az oktatásban',
    nodes: {
      'student-modeling': 'Modellezés',
      'learning-theories': 'Tanulás',
      'equity-in-ai-education': 'Esélyegyenlőség',
      feedback: 'Visszajelzés',
      'ai-literacy': 'AI-írástudás',
      assessment: 'Értékelés',
      'discipline-specific-aied': 'Szakterületek',
      pedagogy: 'Pedagógia',
      ethics: 'Etika',
      'ai-technologies': 'Technológia',
      'ai-ed-evaluation': 'Kiértékelés',
      'research-methods-aied': 'Kutatás',
    },
  },
  toc: [
    { text: 'A weboldal használata', slug: 'navigating-the-site', depth: 2 },
    { text: 'Csevegés a tudásbázissal', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Ajánlott kiindulópontok közönség szerint', slug: 'starting-points', depth: 2 },
    { text: 'Alapfogalmak', slug: 'essential-concepts', depth: 3 },
    { text: 'Oktatók', slug: 'instructors', depth: 3 },
    { text: 'Fejlesztők', slug: 'developers', depth: 3 },
    { text: 'Intézményvezetők', slug: 'administrators', depth: 3 },
    { text: 'Kutatók', slug: 'researchers', depth: 3 },
    { text: 'Mit tartalmaz a tudásbázis', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default hu;
