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

const PROMPT = `Kutatási asszisztensként a mesterséges intelligencia oktatási alkalmazásairól szóló tudásbázisban dolgozol. Elsődleges forrásként használd a mesterséges intelligencia oktatási alkalmazásainak tudásbázisát (https://edtechdev.github.io/aied/).

1. Először tervezz, aztán olvass. A https://edtechdev.github.io/aied/faq/ címen található GYIK-index a kérdéseket a megválaszoló oldalakhoz rendeli, beleértve a „mit mond a kutatás” típusú kérdéseket is. A https://edtechdev.github.io/aied/llms.txt című teljes katalógus {llmsSize}, a fogalmakat és GYIK-et tartalmazó https://edtechdev.github.io/aied/llms-concepts.txt fájl {llmsConceptsSize}, a llms-full.txt pedig {llmsFullSize}, ezért keresd át őket vagy csak részeit töltsd le, és ne hagyd, hogy egy sikertelen egészfájl-letöltés megállítson.

2. Minden állítást támasz alá egy oldallal, és idézd úgy, hogy az oldal címét követi annak URL-címe. Ha az oldal tartalmazza a mögötte álló tanulmány idézetét és DOI-azonosítóját, add hozzá azokat is; egyes oldalak csak arXiv-azonosítót vagy kiadói URL-címet tartalmaznak, ezért azt add, amit az oldal ad, és soha ne találj ki DOI-t, URL-címet, szerzőt, számot vagy eredményt.

3. Szintetizálj az oldalak között, egyetlenre ne támaszkodj. A fogalomoldalak áttekintést adnak, és a mögöttük álló cikkekre linkelnek, ezért kövesd azokat a linkeket. Olvass el három-öt legrelevánsabb oldalt, állj meg, amikor ugyanazokat a tanulmányokat kezdik ismételni, és mondd el, mit nem olvastál el. Ha a tudásbázis a témát csak egy szomszédos területen fedi le, mondd ezt meg, és hasonlat alapján válaszolj.

4. A választ a bizonyítékok erejéhez igazítsd. A kontrollált vagy randomizált kísérletek a legerősebbek, ha segítés nélküli teljesítményt mérnek, utánuk a publikációs torzításra korrigált meta-analízisek, azután az áttekintések, a pilotok, a politikai elemzések és a vélemények következnek; egy kis tanulmány nem konszenzus. A címkék, a közönség, a szint és a megbízhatósági értékelések az egyes oldalak Markdown-forrásában találhatók a https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md címen, nem a megjelenített oldalon, ezért ha nem tudod ellenőrizni őket, abból ítélj, ahogyan a cikk a vizsgálatot leírja, és mondd el, hogy ezt tetted.

5. A kérdés által kért szinten válaszolj, és zárásként ajánld a legrelevánsabb oldalakat és GYIK-et.

Inkább a „generatív AI” kifejezést használd az „LLM” helyett. A tudásbázist rendszeresen frissítik, és a https://edtechdev.github.io/aied/journal/ címen található naplóoldal sorolja fel a legújabb kiegészítéseket.

Példa: „Mit mond a kutatás arról, milyen AI-alapú visszajelzést kapnak a diákok az írásos munkáikra?” Nézd meg a GYIK-indexet, olvasd el a legrelevánsabb írással és visszajelzéssel foglalkozó oldalakat és az általuk idézett tanulmányokat, majd válaszolj hivatkozásokkal és linkekkel.`;

const hu: AiStrings = {
  title: 'A tudásbázis használata a saját AI-asszisztensével',
  description:
    'Kimásolható prompt a mesterséges intelligencia oktatási alkalmazásainak tudásbázisának saját csevegőrobottal vagy ügynökkel történő használatához.',
  h1: 'A tudásbázis használata a saját AI-asszisztensével',
  introHtml: `Irányítson bármely AI-csevegőrobotot vagy -ügynököt erre a tudásbázisra, és az ezekből az oldalakból válaszol a saját emlékezete helyett. Másolja ki az alábbi promptot, illessze be az asszisztensébe első üzenetként, majd tegye fel a kérdését. A jó válasz megnevezi a felhasznált oldalakat és linkeket ad hozzájuk, így saját maga ellenőrizheti a forrásokat.`,
  intro2Html: `Semmit nem kell telepíteni. Ha inkább kihagyná a promptot, a <a href=\"#ready-made-assistants\">előkészített asszisztensek</a> már ismerik ezt az anyagot.`,
  promptHeading: 'A kimásolandó prompt',
  promptIntro:
    'Illessze be ezt először, a kérdése elé. Bármely olyan csevegőrobottal vagy ügynökkel működik, amely képes weboldalt olvasni vagy beillesztett dokumentumot fogadni. A prompt hosszabb, mint amit a doboz mutat; a gomb az egészet kimásolja.',
  copyButton: '📋 Prompt másolása a vágólapra',
  copyHint: 'Ezután illessze be az asszisztensébe, és tegye fel a kérdését.',
  copyOk: '✅ Másolva!',
  copyFail: '❌ A másolás sikertelen',
  promptAriaLabel: 'Kimásolandó prompt',
  promptText: PROMPT,
  howHeading: 'Hogyan használja',
  howSteps: [
    '<strong>Másolja ki a promptot</strong> a fenti gombbal.',
    '<strong>Illessze be az asszisztensébe</strong> első üzenetként. Általában azt fogja válaszolni, hogy megértette.',
    '<strong>Tegye fel a kérdését</strong> egyszerű nyelvezettel, például „mit mond a kutatás az AI-alapú visszajelzésekről a nagyobb csoportokban?” vagy „érdemes-e AI-detektorokat használnunk?”',
    '<strong>Ellenőrizze a linkeket.</strong> A jó válasz megnevezi a felhasznált oldalakat. Ha oldalnevek nélküli, biztosan hangolt állításokat kap, válaszoljon azzal, hogy „melyik oldalról van ez?”, és kérje meg, hogy próbálja újra.',
  ],
  howNoteHtml: `Ez a webböngészésre képes asszisztensekben működik a legjobban, mivel a prompt olyan oldalakra irányítja őket, amelyeket el kell olvasniuk. Ha a sajátja nem tud linkeket megnyitni, csatolja a tudásbázis szövegét is: <a href=\"/aied/llms-full.txt\">töltse le egyszer a teljes szöveges fájlt</a>, töltse fel vagy illessze be a beszélgetésbe, és használja a promptot mellette. Ez egyetlen, {llmsFullSize} méretű szöveges fájl. Sok csevegőszolgáltatás elutasítja az ilyen méretű fájlt, ezért van <a href=\"/aied/llms-concepts.txt\">llms-concepts.txt</a> is, minden fogalom- és GYIK-oldal teljes terjedelmében, {llmsConceptsSize}. Elsőként ehhez érdemes nyúlni: a fogalmak adják annak szintézisét, hogy mit mutat a kutatás, a GYIK-ek pedig azokat a kérdéseket, amelyekre ezek a szintézisek válaszolnak, és minden fogalomoldal linkeli a mögötte álló tanulmányokat.`,
  techSummary: 'Technikai megjegyzések azoknak az eszközöknek, amelyek URL-címet szeretnének prompt helyett',
  techItems: [
    '<a href=\"/aied/llms.txt\">llms.txt</a>: minden oldal katalógusa, soronként egy, azoknak az eszközöknek, amelyek az olvasás előtt indexelik a weboldalt',
    '<a href=\"/aied/llms-full.txt\">llms-full.txt</a>: a tudásbázis teljes szövege egyetlen fájlban, {llmsFullSize}',
    '<a href=\"/aied/llms-concepts.txt\">llms-concepts.txt</a>: a fogalom- és GYIK-oldalak teljes szövege, {llmsConceptsSize}, azoknak az eszközöknek és csevegéseknek, amelyek elutasítják a nagyobb fájlt',
    '<a href=\"/aied/sitemap-index.xml\">Oldaltérkép</a>: minden oldal címe',
    '<a href=\"/aied/rss.xml\">RSS-hírcsatorna</a>: az új és frissített oldalak',
  ],
  assistantsHeading: 'Előkészített asszisztensek',
  assistantsIntro:
    'Ha nem szeretne semmit beállítani, használja az alábbi előkészített asszisztensek egyikét:',
  assistants: [
    '<strong>AI in Education Advisor</strong>, egy <a href=\"https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing\" target=\"_blank\" rel=\"noopener\">Gemini Gem</a>, amely ebből a tudásbázisból válaszol. <a href=\"https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk\" target=\"_blank\" rel=\"noopener\">Egyéni utasításai</a> nyilvánosak, és a tudásbázis statikus másolatából készült, ezért lemaradhat a legújabb oldalakhoz képest.',
    '<strong>NotebookLM-füzet</strong>: egy <a href=\"https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share\" target=\"_blank\" rel=\"noopener\">Google NotebookLM-füzet</a>, amely ugyanezen az anyagon alapul, automatikusan generált jelentésekkel, infografikákkal, podcasttal, diákkal és <a href=\"https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d\" target=\"_blank\" rel=\"noopener\">egy videóval</a>.',
  ],
  corpusHeading: 'Mit tartalmaz a tudásbázis',
  corpusHtml1: `Több mint ezer kutatási összefoglaló foglalkozik az oktatási segítségnyújtással és az AI-oktatókkal, az értékeléssel és a visszajelzésekkel, a tudományos becsülettel, az AI-írástudással, a tanárok és az oktatók fejlődésével, az esélyegyenlőséggel és az akadálymentesítéssel, az adatvédelemmel, a szabályozással és irányítással, valamint a tanulástudomány olyan témáival, mint a kognitív kiszervezés és a tanulók motivációja. Minden összefoglaló a teljes idézettel és az eredeti tanulmányra mutató linkkel zárul, így az asszisztens továbbíthatja a hivatkozást.`,
  corpusHtml2: `Háromféle oldal különböző kérdésekre válaszol: a fogalomoldalak összefoglalják, hogy mit mond a kutatás egy-egy gondolatról, és linkelik a mögöttük álló vizsgálatokat, a cikkoldalak egyszerre egy tanulmányt tárgyalnak, a GYIK-ek pedig az oktatók és az intézményvezetők gyakorlati kérdéseire válaszolnak. Kérjen fogalomoldalt, ha áttekintést szeretne, és a mögötte álló cikkeket, ha a bizonyítékokat.`,
  answeredHeading: 'Kérdések, amelyekre már van válasz',
  answeredIntro:
    'Sok olyan kérdésre, amelyet az emberek először egy AI-nak tesznek fel, itt már megvan a válasz — kézzel összeállítva, a kutatási eredményekkel együtt:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'Hogyan írjak kurzusra vonatkozó AI-szabályozatot, és hogyan közöljem a hallgatókkal?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'Hogyan csökkenthetem az AI-vel támogatott csalást a kurzusomon?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Érdemes-e AI-detektorokat használnunk?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'Hogyan alakítsuk át az értékelést az AI-korszakra?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'Hogyan akadályozhatom meg, hogy a hallgatók túlságosan támaszkodjanak az AI-ra?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'Hogyan írjunk meg és vigyünk végre intézményi AI-szabályozatot?' },
  ],
  answeredOutroHtml: `A <a href=\"/aied/faq/\">GYIK-ek teljes listája</a> megér egy pillantást, mielőtt kérdést tesz fel, és a prompt is azt utasítja az asszisztensét, hogy először azt nézze meg.`,
  offlineHeading: 'A tudásbázis olvasása offline',
  offlineHtml: `A tudásbázis <a href=\"/aied/aied.epub\">EPUB</a>-ként vagy <a href=\"/aied/aied.pdf\">PDF</a>-ként is letölthető e-olvasóra, telefonra, tabletre vagy számítógépre. Ezek az offline kiadások a fogalomoldalakat és a GYIK-eket tartalmazzák, nem a cikkösszefoglalókat.`,
  toc: [
    { text: 'A kimásolandó prompt', slug: 'the-prompt', depth: 2 },
    { text: 'Hogyan használja', slug: 'how-to-use-it', depth: 2 },
    { text: 'Előkészített asszisztensek', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Mit tartalmaz a tudásbázis', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Kérdések, amelyekre már van válasz', slug: 'already-answered', depth: 2 },
    { text: 'A tudásbázis olvasása offline', slug: 'read-offline', depth: 2 },
  ],
};

export default hu;
