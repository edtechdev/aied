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
    'Válogatás ingyenes eszközökből, gyűjteményekből, mérési instrumentumokból és formátumokból a mesterséges intelligencia oktatási alkalmazásaihoz: olyan dolgok, amelyeket még ma felhasználhat, nem olyan kutatási eredmények, amelyeket először el kell olvasni. Ezeket többnyire oktatók, tanulmánytervezők, könyvtárosok és kutatók készítették, és sokat mesterséges intelligencia segítségével olyan emberek építettek, akik nem professzionális fejlesztők.',
    'Nem minden itt szereplő dolog interaktív. A böngészős eszközök és az AI-oktatók mellett kész promptok könyvtárait, osztálytermi tevékenységek gyűjteményeit, tájékoztató és szabályozási dokumentumokat, értékelési instrumentumokat és nyílt fájlformátumokat is talál. Minden bejegyzés egy olyan oldalra vezet, amely az eszközről szól: ki készítette, milyen jellegű dolog, nyílt-e a forráskód, mennyibe kerül, és mikor ellenőrizték utoljára a linkjét.',
    'Minden bejegyzés külső weboldalra vezet, amelyet ez a tudásbázis nem ellenőrizhet, és a linkeket rendszeresen ellenőrizzük; minden oldalon szerepel a dátuma, amikor a linket utoljára megerősítették. Ha egy eszköz elköltözött, bezárt, vagy hiányzik, és itt lenne a helye, <a href="https://github.com/edtechdev/aied/issues" target="_blank" rel="noopener">nyisson egy issue-t</a> a repozitóriumban.',
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
