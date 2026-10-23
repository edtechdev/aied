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

const PROMPT = `Jste výzkumný asistent pro oblast AI ve vzdělávání. Používejte jako hlavní zdroj Znalostní bázi AI ve vzdělávání (https://edtechdev.github.io/aied/).

1. Než čtete, nejprve se orientujte. Index FAQ na adrese https://edtechdev.github.io/aied/faq/ mapuje otázky na stránky, které na ně odpovídají, včetně otázek typu „co říká výzkum". Úplný katalog na adrese https://edtechdev.github.io/aied/llms.txt má {llmsSize}, soubor pojmů a FAQ na adrese https://edtechdev.github.io/aied/llms-concepts.txt {llmsConceptsSize} a llms-full.txt {llmsFullSize}, takže je raději prohledávejte nebo stahujte jejich části místo načítání celku, a nenechte se zastavit neúspěšným stažením celého souboru.

2. Každý údaj opřete o stránku a citujte ji jako název stránky následovaný její URL. Pokud stránka uvádí citaci a DOI původní studie, doplňte je; některé stránky citují pouze arXiv ID nebo URL vydavatele, takže uveďte to, co stránka uvádí, a nikdy nevymýšlejte DOI, URL, autora, číslo ani zjištění.

3. Syntetizujte mezi stránkami místo spoléhání se na jednu. Stránky pojmů poskytují přehled a odkazují na články za nimi, takže těmto odkazům následujte. Přečtěte tři až pět nejrelevantnějších stránek, zastavte se, když začnou opakovat stejné studie, a řekněte, co jste nepřečetli. Pokud znalostní báze pokrývá téma pouze v sousední oblasti, řekněte to a odpovězte analogií.

4. Přizpůsobte sílu důkazů. Kontrolované nebo randomizované experimenty měřící výkon bez asistence jsou nejsilnější, pak metaanalýzy korigované o publikční zkreslení, pak přehledy, pak pilotní studie, analýzy politik a názory; jedna malá studie není konsenzus. Štítky, cílová skupina, úroveň a hodnocení spolehlivosti jsou v markdownovém zdroji každé stránky na adrese https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, nikoli ve vykreslené stránce, takže pokud je nemůžete zkontrolovat, posuzujte podle toho, jak článek popisuje studii, a řekněte, že jste tak učinili.

5. Odpovídejte na úrovni, kterou otázka požaduje, a na závěr doporučte nejrelevantnější stránky a FAQ.

Upřednostňujte výraz „generativní AI" před výrazem „LLM". Znalostní báze se pravidelně aktualizuje a stránka deníku na adrese https://edtechdev.github.io/aied/journal/ uvádí nejnovější přírůstky.

Příklad: „Co říká výzkum o zpětné vazbě AI na psaní studentů?" Zkontrolujte index FAQ, přečtěte nejrelevantnější stránky o psaní a zpětné vazbě plus studie, které citují, a pak odpovězte s citacemi a odkazy.`;

const cs: AiStrings = {
  title: 'Použití této znalostní báze s vlastním asistentem AI',
  description: 'Výzva ke zkopírování a vložení pro použití znalostní báze AI ve vzdělávání s vlastním chatbotem nebo agentem.',
  h1: 'Použití této znalostní báze s vlastním asistentem AI',
  introHtml: `Nasměrujte jakéhokoli AI chatbota nebo agenta na tuto znalostní bázi a bude odpovídat z těchto stránek místo ze své vlastní paměti. Zkopírujte výzvu níže, vložte ji jako svou první zprávu do asistenta a pak položte svou otázku. Dobrá odpověď pojmenuje stránky, z nichž čerpala, a odkáže na ně, abyste si mohli zdroje sami ověřit.`,
  intro2Html: `Nic není třeba instalovat. Pokud byste raději výzvu přeskočili, <a href="#ready-made-assistants">připravení asistenti</a> už tento materiál znají.`,
  promptHeading: 'Výzva ke zkopírování',
  promptIntro: 'Vložte ji jako první, před svou otázkou. Funguje s libovolným chatbem nebo agentem, který umí přečíst webovou stránku nebo přijmout vložený dokument. Výzva je delší, než okno ukazuje; tlačítko zkopíruje celou.',
  copyButton: '📋 Zkopírovat výzvu do schránky',
  copyHint: 'Pak ji vložte do svého asistenta a položte svou otázku.',
  copyOk: '✅ Zkopírováno!',
  copyFail: '❌ Kopírování se nezdařilo',
  promptAriaLabel: 'Výzva ke zkopírování',
  promptText: PROMPT,
  howHeading: 'Jak ji použít',
  howSteps: [
    '<strong>Zkopírujte výzvu</strong> tlačítkem výše.',
    '<strong>Vložte ji do svého asistenta</strong> jako první zprávu. Obvykle odpoví, že rozumí.',
    '<strong>Položte svou otázku</strong> běžnou řečí, například „co říká výzkum o zpětné vazbě AI ve velkých skupinách?" nebo „měli bychom používat detektory AI?"',
    '<strong>Zkontrolujte odkazy.</strong> Dobrá odpověď pojmenuje stránky, které použila. Pokud dostanete sebevědomá tvrzení bez názvů stránek, odpovězte „ze které stránky to je?" a požádejte o nový pokus.',
  ],
  howNoteHtml: `Nejlépe to funguje v asistentech, kteří umí procházet web, protože výzva je nasměruje na stránky ke čtení. Pokud ten váš nedokáže otevírat odkazy, připojte i text znalostní báze: jednou <a href="/aied/llms-full.txt">stáhněte soubor s plným textem</a>, nahrajte ho nebo vložte do konverzace a použijte výzvu společně s ním. Je to jeden textový soubor velikosti {llmsFullSize}. Mnoho chatovacích produktů soubor takové velikosti odmítne, takže existuje také <a href="/aied/llms-concepts.txt">llms-concepts.txt</a>, každá stránka pojmů a FAQ v plném znění, {llmsConceptsSize}. Sáhněte nejdřív po něm: pojmy jsou syntézami toho, co výzkum ukazuje, FAQ jsou otázkami, na které tyto syntézy odpovídají, a každá stránka pojmů odkazuje studie za ní.`,
  techSummary: 'Technické poznámky pro nástroje, které chtějí URL místo výzvy',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a>: katalog každé stránky, každá na jednom řádku, pro nástroje, které indexují web před jeho čtením',
    '<a href="/aied/llms-full.txt">llms-full.txt</a>: úplný text znalostní báze v jednom souboru, {llmsFullSize}',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a>: plný text stránek pojmů a FAQ, {llmsConceptsSize}, pro nástroje a chaty, které odmítají větší soubor',
    '<a href="/aied/sitemap-index.xml">Mapa webu</a>: adresa každé stránky',
    '<a href="/aied/rss.xml">RSS kanál</a>: nové a aktualizované stránky',
  ],
  assistantsHeading: 'Připravení asistenti',
  assistantsIntro: 'Pokud nechcete nic nastavovat, použijte jednoho z těchto připravených asistentů:',
  assistants: [
    '<strong>AI in Education Advisor</strong>, <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a>, který odpovídá z této znalostní báze. Jeho <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">vlastní instrukce</a> jsou veřejné a byl postaven ze statické kopie znalostní báze, takže může zaostávat za nejnovějšími stránkami.',
    '<strong>NotebookLM notebook</strong>: <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">notebook Google NotebookLM</a> postavený na stejném materiálu, s automaticky generovanými reporty, infografikami, podcastem, snímky a <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">videem</a>.',
  ],
  corpusHeading: 'Co znalostní báze obsahuje',
  corpusHtml1: `Přes tisíc výzkumných shrnutí pokrývá doučování a AI tutory, hodnocení a zpětnou vazbu, akademickou integritu, AI gramotnost, rozvoj učitelů a pedagogů, rovnost a přístupnost, soukromí, politiku a vládnutí a témata výukové vědy, jako je kognitivní odlehčení a motivace žáků. Každé shrnutí končí úplnou citací a odkazem na původní studii, takže váš asistent může odkaz předat dál.`,
  corpusHtml2: `Tři druhy stránek odpovídají na různé otázky: stránky pojmů shrnují, co výzkum říká o jednom tématu, a odkazují studie za nimi, stránky článků pokrývají jednu studii po druhé a FAQ odpovídají na praktické otázky vyučujících a administrátorů. Požádejte o stránku pojmů, když chcete přehled, a o články za ní, když chcete důkazy.`,
  answeredHeading: 'Otázky, na které už je odpovězeno',
  answeredIntro: 'Mnoho otázek, které lidé nejprve položí AI, tu už bylo ručně zodpovězeno, s připojeným výzkumem:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'Jak napsat zásady AI pro kurz a oznámit je studentům?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'Jak mohu ve svém kurzu omezit podvádění s AI?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Měli bychom používat detektory AI?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'Jak by mělo být hodnocení přepracováno pro éru AI?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'Jak zabránit studentům v přílišné závislosti na AI?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'Jak napsat a zavést institucionální zásady AI?' },
  ],
  answeredOutroHtml: `<a href="/aied/faq/">úplný seznam FAQ</a> stojí za shlédnutí, než se zeptáte, a výzva přikazuje vašemu asistentovi, aby tento seznam zkontroloval jako první.`,
  offlineHeading: 'Čtení znalostní báze offline',
  offlineHtml: `Znalostní bázi si také můžete stáhnout jako <a href="/aied/aied.epub">EPUB</a> nebo <a href="/aied/aied.pdf">PDF</a> pro čtečku, telefon, tablet nebo počítač. Tyto offline edice obsahují stránky pojmů a FAQ, nikoli shrnutí článků.`,
  toc: [
    { text: 'Výzva ke zkopírování', slug: 'the-prompt', depth: 2 },
    { text: 'Jak ji použít', slug: 'how-to-use-it', depth: 2 },
    { text: 'Připravení asistenti', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Co znalostní báze obsahuje', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Otázky, na které už je odpovězeno', slug: 'already-answered', depth: 2 },
    { text: 'Čtení znalostní báze offline', slug: 'read-offline', depth: 2 },
  ],
};

export default cs;
