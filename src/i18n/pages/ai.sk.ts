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

const PROMPT = `Si výskumný asistent pre AI v edukácii. Použi vedeckú databázu o AI v edukácii (https://edtechdev.github.io/aied/) ako svoj primárny zdroj.

1. Najprv smeruj, potom čítaj. Index často kladených otázok na https://edtechdev.github.io/aied/faq/ mapuje otázky na stránky, ktoré na ne odpovedajú, vrátane otázok typu "čo výskum ukazuje". Úplný katalóg na https://edtechdev.github.io/aied/llms.txt je {llmsSize}, súbor pojmov a často kladených otázok na https://edtechdev.github.io/aied/llms-concepts.txt je {llmsConceptsSize} a llms-full.txt je {llmsFullSize}, takže ich prehľadávajte alebo sťahujte len časti, a nenechajte sa zastaviť neúspešným stiahnutím celého súboru.

2. Zakladaj každé tvrdenie do stránky a cituj ju ako názov stránky nasledovaný jej URL. Keď stránka uvádza citáciu a DOI podkladovej práce, pridaj ich; niektoré stránky citujú len arXiv ID alebo URL vydavateľa, takže uveď to, čo stránka uvádza, a nikdy nevymýšľaj DOI, URL, autora, číslo ani zistenie.

3. Syntetizuj naprieč stránkami namiesto spoliehania sa na jednu. Stránky pojmov poskytujú prehľad a odkazujú na články za nimi, takže tieto odkazy sleduj. Prečítaj tri až päť najrelevantnejších stránok, zastav, keď začnú opakovať tie isté štúdie, a povedz, čo si neprečítal. Ak vedecká databáza pokrýva tému len v susednom odbore, povedz to a odpovedz analogicky.

4. Prispôsob silu dôkazov. Kontrolované alebo randomizované experimenty, ktoré merajú výkon bez asistencie, sú najsilnejšie, potom metaanalýzy upravené na publikačný sklon, potom prehľady, pilotné štúdie, analýzy politík a názory; jedna malá štúdia nie je konsenzus. Značky, cieľovú skupinu, úroveň a hodnotenie dôveryhodnosti nájdeš v markdown zdroji každej stránky na https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, nie na vykreslenej stránke, takže ak ich nemôžeš skontrolovať, usudzuj z toho, ako článok popisuje štúdiu, a povedz, že si tak urobil.

5. Odpovedz na úrovni, ktorú otázka požaduje, a na záver odporuč najrelevantnejšie stránky a často kladené otázky.

Uprednostni výraz "generatívne AI" pred "LLM". Vedecká databáza sa pravidelne aktualizuje a stránka so zoznamom noviniek na https://edtechdev.github.io/aied/journal/ uvádza najnovšie prídavky.

Príklad: "Čo výskum hovorí o spätnej väzbe AI na písomné práce študentov?" Skontroluj index často kladených otázok, prečítaj najrelevantnejšie stránky o písaní a spätnej väzbe plus štúdie, ktoré citujú, potom odpovedz s citáciami a odkazmi.`;

const sk: AiStrings = {
  title: 'Použite túto vedeckú databázu so svojím vlastným AI asistentom',
  description: 'Výzva na kopírovanie a vkladanie na použitie vedeckej databázy o AI v edukácii s vlastným chatbotom alebo agentom.',
  h1: 'Použite túto vedeckú databázu so svojím vlastným AI asistentom',
  introHtml: `Nasmerujte akýkoľvek AI chatbot alebo agenta na túto vedeckú databázu a bude odpovedať z týchto stránok namiesto zo svojej vlastnej pamäte. Skopírujte výzvu nižšie, vložte ju do svojho asistenta ako prvú správu a potom položte svoju otázku. Dobrá odpoveď uvádza stránky, z ktorých čerpala, a odkazuje na ne, takže zdroje si môžete overiť sami.`,
  intro2Html: `Nič netreba inštalovať. Ak chcete výzvu preskočiť, <a href="#ready-made-assistants">pripravení asistenti</a> už tento materiál poznajú.`,
  promptHeading: 'Výzva na kopírovanie',
  promptIntro: 'Vložte ju ako prvú, pred svoju otázku. Funguje s akýmkoľvek chatbotom alebo agentom, ktorý dokáže prečítať webovú stránku alebo prijať vložený dokument. Výzva je dlhšia, než ukazuje okno; tlačidlo skopíruje celú.',
  copyButton: '📋 Kopírovať výzvu do schránky',
  copyHint: 'Potom ju vložte do svojho asistenta a položte svoju otázku.',
  copyOk: '✅ Skopírované!',
  copyFail: '❌ Kopírovanie zlyhalo',
  promptAriaLabel: 'Výzva na kopírovanie',
  promptText: PROMPT,
  howHeading: 'Ako to používať',
  howSteps: [
    '<strong>Skopírujte výzvu</strong> tlačidlom vyššie.',
    '<strong>Vložte ju do svojho asistenta</strong> ako prvú správu. Zvyčajne odpovie, že rozumie.',
    '<strong>Polozte svoju otázku</strong> bežným jazykom, napríklad "čo výskum hovorí o spätnej väzbe AI vo veľkých triedach?" alebo "mali by sme používať detektory AI?"',
    '<strong>Skontrolujte odkazy.</strong> Dobrá odpoveď uvádza stránky, ktoré použila. Ak dostanete sebarevé tvrdenia bez názvov stránok, odpovedzte "z ktorej stránky to pochádza?" a požiadajte ho, aby to skúsil znova.',
  ],
  howNoteHtml: `Najlepšie to funguje v asistentoch, ktorí dokážu prehliadať web, pretože výzva ich nasmeruje na stránky na čítanie. Ak váš nedokáže otvárať odkazy, pripojte aj text vedeckej databázy: <a href="/aied/llms-full.txt">stiahnite súbor s plným textom</a> raz, nahrajte ho alebo vložte do konverzácie a používajte výzvu spolu s ním. Je to jeden textový súbor s veľkosťou {llmsFullSize}. Mnohé chatové produkty odmietnu súbor takej veľkosti, takže existuje aj <a href="/aied/llms-concepts.txt">llms-concepts.txt</a>, každá stránka pojmov a často kladených otázok v plnom znení s veľkosťou {llmsConceptsSize}. Siahnite po ňom ako po prvom: pojmy sú syntézami toho, čo výskum ukazuje, často kladené otázky sú otázkami, na ktoré tieto syntézy odpovedajú, a každá stránka pojmov odkazuje práce za ňou.`,
  techSummary: 'Technické poznámky pre nástroje, ktoré chcú URL namiesto výzvy',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a>: katalóg každej stránky, po jednom riadku, pre nástroje, ktoré indexujú stránku pred čítaním',
    '<a href="/aied/llms-full.txt">llms-full.txt</a>: úplný text vedeckej databázy v jednom súbore, {llmsFullSize}',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a>: plný text stránok pojmov a často kladených otázok, {llmsConceptsSize}, pre nástroje a chaty, ktoré odmietnu väčší súbor',
    '<a href="/aied/sitemap-index.xml">Mapa stránok</a>: adresa každej stránky',
    '<a href="/aied/rss.xml">RSS kanál</a>: nové a aktualizované stránky',
  ],
  assistantsHeading: 'Pripravení asistenti',
  assistantsIntro: 'Ak nechcete nič nastavovať, použite jedného z týchto pripravených asistentov:',
  assistants: [
    '<strong>AI in Education Advisor</strong>, <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a>, ktorý odpovedá z tejto vedeckej databázy. Jeho <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">vlastné pokyny</a> sú verejné a bol vytvorený zo statickej kópie vedeckej databázy, takže môže zaostávať za najnovšími stránkami.',
    '<strong>Zošit NotebookLM</strong>: <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">zošit Google NotebookLM</a> postavený na rovnakom materiáli, s automaticky generovanými správami, infografikami, podcastom, prezentáciami a <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">videom</a>.',
  ],
  corpusHeading: 'Čo je vo vedeckej databáze',
  corpusHtml1: `Viac ako tisíc výskumných zhrnutí pokrýva doučovanie a AI tutorov, hodnotenie a spätnú väzbu, akademickú integritu, počítačovú gramotnosť v oblasti AI, rozvoj učiteľov a fakúlt, rovnosť a prístupnosť, súkromie, politiku a riadenie a témy učebných vied, ako sú kognitívne odľahčenie a motivácia študentov. Každé zhrnutie končí úplnou citáciou a odkazom na pôvodnú prácu, takže váš asistent môže odkaz postúpiť ďalej.`,
  corpusHtml2: `Tri druhy stránok odpovedajú na rôzne otázky: stránky pojmov zhrňujú to, čo výskum hovorí o jednej myšlienke, a odkazujú na štúdie za nimi, stránky článkov sa zaoberajú vždy jednou prácou a často kladené otázky odpovedajú na praktické otázky od vyučujúcich a správcov. Ak chcete prehľad, požiadajte o stránku pojmov; ak chcete dôkazy, požiadajte o články za ňou.`,
  answeredHeading: 'Otázky, na ktoré už máme odpovede',
  answeredIntro: 'Mnohé otázky, ktoré ľudia pýtajú AI ako prvé, tu už boli zodpovedané ručne, s pripojeným výskumom:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'Ako napísať politiku AI pre kurz a oznámiť ju študentom?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'Ako môžem znížiť podvádzanie s AI vo svojom kurze?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Mali by sme používať detektory AI?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'Ako by sa malo hodnotenie prepracovať pre éru AI?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'Ako zabrániť tomu, aby študenti príliš záviseli od AI?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'Ako napísať a zaviesť inštitucionálnu politiku AI?' },
  ],
  answeredOutroHtml: `<a href="/aied/faq/">Úplný zoznam často kladených otázok</a> stojí za prečítanie ešte predtým, než sa opýtate, a výzva nariedi vášmu asistentovi, aby tento zoznam skontroloval ako prvý.`,
  offlineHeading: 'Čítajte vedeckú databázu offline',
  offlineHtml: `Vedeckú databázu si môžete stiahnuť aj ako <a href="/aied/aied.epub">EPUB</a> alebo <a href="/aied/aied.pdf">PDF</a> pre čítačku, telefón, tablet alebo počítač. Tieto offline edície obsahujú stránky pojmov a často kladené otázky, nie zhrnutia článkov.`,
  toc: [
    { text: 'Výzva na kopírovanie', slug: 'the-prompt', depth: 2 },
    { text: 'Ako to používať', slug: 'how-to-use-it', depth: 2 },
    { text: 'Pripravení asistenti', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Čo je vo vedeckej databáze', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Otázky, na ktoré už máme odpovede', slug: 'already-answered', depth: 2 },
    { text: 'Čítajte vedeckú databázu offline', slug: 'read-offline', depth: 2 },
  ],
};

export default sk;
