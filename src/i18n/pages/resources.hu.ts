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

const hu: ResourcesStrings = {
  title: 'Források',
  h1: 'Ingyenes eszközök és források',
  introHtml: [
    'Válogatás <strong>ingyenes eszközökből, gyűjteményekből, mérési instrumentumokból és formátumokból</strong> a mesterséges intelligencia oktatási alkalmazásaihoz — olyan dolgok, amelyeket még ma felhasználhat, nem olyan kutatási eredmények, amelyeket először el kell olvasni. Ezeket többnyire oktatók, tanulmánytervezők, könyvtárosok és kutatók készítették, és sokat mesterséges intelligencia segítségével olyan emberek építettek, akik nem professzionális fejlesztők.',
    'Nem minden itt szereplő dolog interaktív. A böngészős eszközök és az AI-oktatók mellett kész promptok és „gyöngyszemek” könyvtárait, osztálytermi tevékenységek gyűjteményeit, tájékoztató és szabályozási dokumentumokat, értékelési instrumentumokat és nyílt fájlformátumokat is talál. Minden bejegyzés egy rövid összefoglaló, amely egy olyan oldalra vezet, amely megmondja, ki készítette, milyen jellegű dolog, elérhető-e a forráskód, mennyibe kerül a használata, és mikor ellenőrizték utoljára a linkjét.',
    'Minden bejegyzés külső weboldalra vezet, amelyet ez a tudásbázis nem ellenőrizhet, és a linkeket rendszeresen újraellenőrizzük — minden oldalon szerepel a dátuma, amikor a linket utoljára megerősítették. Ha egy eszköz elköltözött, bezárt, vagy érdemes lenne ide, de hiányzik, a leggyorsabb út egy issue megnyitása a repozitóriumban.',
  ],
  empty: 'Még nincs forrás.',
  groupLabels: {
    software: 'Szoftver',
    'ai tutor': 'AI-oktatók',
    'agent skill': 'Ügynök-készségek',
    'prompt or gem library': 'Prompt- és gyöngyszem-könyvtárak',
    'collection of tools': 'Eszközgyűjtemények',
    'collection of activities': 'Tevékenység-gyűjtemények',
    'assessment instrument': 'Értékelési instrumentumok',
    'open format or specification': 'Nyílt formátumok és specifikációk',
    'ebook or guide': 'E-könyvek és útmutatók',
    'case study collection': 'Esettanulmány-gyűjtemények',
    'dataset or benchmark': 'Adathalmazok és összehasonlító tesztek',
  },
};

export default hu;
