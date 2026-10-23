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

const PROMPT = `Du er en forskningsassistent for AI i uddannelse. Brug vidensbasen om kunstig intelligens i uddannelse (https://edtechdev.github.io/aied/) som din primære kilde.

1. Find frem, før du læser. FAQ-indekset på https://edtechdev.github.io/aied/faq/ knytter spørgsmål til de sider, der besvarer dem, herunder spørgsmål af typen »hvad viser forskningen«. Det fulde katalog på https://edtechdev.github.io/aied/llms.txt er {llmsSize}, filen med begreber og FAQ på https://edtechdev.github.io/aied/llms-concepts.txt er {llmsConceptsSize}, og llms-full.txt er {llmsFullSize}, så søg i dem eller hent dele frem for at indlæse dem hele, og lad et mislykket hent af en hel fil ikke stoppe dig.

2. Underbyg hver påstand med en side, og citér den som sidens titel efterfulgt af dens URL. Når siden angiver den underliggende artikels kildeangivelse og DOI, så tilføj dem; nogle sider citerer kun et arXiv-ID eller en forlags-URL, så angiv det, siden angiver, og opfind aldrig et DOI, en URL, en forfatter, et tal eller et resultat.

3. Syntetisér på tværs af siderne i stedet for at læne dig op ad én. Begrebssider giver overblikket og linker til artiklerne bag, så følg de links. Læs tre til fem af de mest relevante sider, stop når de begynder at gentage de samme undersøgelser, og fortæl, hvad du ikke læste. Dækker vidensbasen emnet kun i et tilstødende felt, så sig det, og svar ved analogi.

4. Match argumentationens styrke til evidensstyrken. Kontrollerede eller randomiserede eksperimenter, der måler præstation uden hjælpemidler, er stærkest, derefter metaanalyser justeret for publiceringsbias, derefter oversigter, derefter pilotundersøgelser, politikanalyser og meninger; én lille undersøgelse er ikke konsensus. Tags, målgruppe, niveau og troværdighedsvurderinger findes i hver sides Markdown-kilde på https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md og ikke på den gengivne side, så hvis du ikke kan kontrollere dem, så døm ud fra, hvordan artiklen beskriver undersøgelsen, og sig, at det er, hvad du gjorde.

5. Svar på det niveau, spørgsmålet beder om, og afslut med at anbefale de mest relevante sider og FAQ.

Foretræk betegnelsen »generativ AI« frem for »LLM«. Vidensbasen opdateres løbende, og journalsiden på https://edtechdev.github.io/aied/journal/ opregner de nyeste tilføjelser.

Eksempel: »Hvad siger forskningen om AI-feedback til studerendes skriftlige arbejde?« Tjek FAQ-indekset, læs de mest relevante sider om skrivning og feedback samt de undersøgelser, de citerer, og svar så med kilder og links.`;

const da: AiStrings = {
  title: 'Brug denne vidensbase med din egen AI-assistent',
  description: 'Kopiér-og-indsæt-prompt til at bruge vidensbasen om kunstig intelligens i uddannelse med din egen chatbot eller agent.',
  h1: 'Brug denne vidensbase med din egen AI-assistent',
  introHtml: `Peg en hvilken som helst AI-chatbot eller -agent på denne vidensbase, og den svarer ud fra disse sider i stedet for ud fra sin egen hukommelse. Kopiér prompten nedenfor, indsæt den i din assistent som din første besked, og stil så dit spørgsmål. Et godt svar nævner og linker til de sider, det trak på, så du selv kan kontrollere kilderne.`,
  intro2Html: `Intet skal installeres. Vil du springe prompten over, kender <a href=\"#ready-made-assistants\">de færdige assistenter</a> allerede dette materiale.`,
  promptHeading: 'Promten, du skal kopiere',
  promptIntro: 'Indsæt den først, før dit spørgsmål. Den virker med enhver chatbot eller agent, der kan læse en webside eller modtage et indsat dokument. Prompten er længere, end boksen viser, og knappen kopierer det hele.',
  copyButton: '📋 Kopiér prompten til udklipsholderen',
  copyHint: 'Indsæt den derefter i din assistent, og stil dit spørgsmål.',
  copyOk: '✅ Kopieret!',
  copyFail: '❌ Kopiering mislykkedes',
  promptAriaLabel: 'Prompt til kopiering',
  promptText: PROMPT,
  howHeading: 'Sådan bruger du den',
  howSteps: [
    '<strong>Kopiér prompten</strong> med knappen ovenfor.',
    '<strong>Indsæt den i din assistent</strong> som den første besked. Den vil som regel svare, at den har forstået den.',
    '<strong>Stil dit spørgsmål</strong> i almindeligt sprog, for eksempel »hvad siger forskningen om AI-feedback i store klasser?« eller »bør vi bruge AI-detektorer?«',
    '<strong>Tjek linksene.</strong> Et godt svar nævner de sider, det brugte. Får du selvsikre påstande udne sidenavne, så svar »hvilken side kommer det fra?«, og bed den om at prøve igen.',
  ],
  howNoteHtml: `Det fungerer bedst i assistenter, der kan søge på nettet, da prompten peger dem på sider, de skal læse. Kan din ikke åbne links, så vedlæg også teksten til vidensbasen: <a href=\"/aied/llms-full.txt\">hent fuldtekstfilen</a> én gang, upload eller indsæt den i samtalen, og brug prompten sammen med den. Det er én tekstfil på {llmsFullSize}. Mange chatprodukter afviser en fil af den størrelse, så der er også <a href=\"/aied/llms-concepts.txt\">llms-concepts.txt</a>, alle begrebs- og FAQ-sider i fuld tekst på {llmsConceptsSize}. Tag den først: begreberne er synteserne af, hvad forskningen viser, FAQ\'erne er de spørgsmål, disse synteser svarer på, og hver begrebsside linker til artiklerne bag den.`,
  techSummary: 'Tekniske noter til værktøjer, der vil have en URL i stedet for en prompt',
  techItems: [
    '<a href=\"/aied/llms.txt\">llms.txt</a>: et katalog over hver side, én linje pr. side, til værktøjer, der indekserer et site, før de læser det',
    '<a href=\"/aied/llms-full.txt\">llms-full.txt</a>: hele vidensbasens tekst i én fil, {llmsFullSize}',
    '<a href=\"/aied/llms-concepts.txt\">llms-concepts.txt</a>: fuld tekst for begrebs- og FAQ-siderne, {llmsConceptsSize}, til værktøjer og chats, der afviser den store fil',
    '<a href=\"/aied/sitemap-index.xml\">Sitemap</a>: adressen på hver side',
    '<a href=\"/aied/rss.xml\">RSS-feed</a>: nye og opdaterede sider',
  ],
  assistantsHeading: 'Færdige assistenter',
  assistantsIntro: 'Vil du helst ikke sætte noget op, så brug en af disse færdige assistenter:',
  assistants: [
    '<strong>AI in Education Advisor</strong>, en <a href=\"https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing\" target=\"_blank\" rel=\"noopener\">Gemini Gem</a>, der svarer ud fra denne vidensbase. Dets <a href=\"https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk\" target=\"_blank\" rel=\"noopener\">tilpassede instruktioner</a> er offentlige, og den er bygget på en statisk kopi af vidensbasen, så den kan halte bagefter de nyeste sider.',
    '<strong>NotebookLM-notesbog</strong>: en <a href=\"https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share\" target=\"_blank\" rel=\"noopener\">Google NotebookLM-notesbog</a> bygget på det samme materiale, med autogenererede rapporter, infografik, en podcast, slides og <a href=\"https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d\" target=\"_blank\" rel=\"noopener\">en video</a>.',
  ],
  corpusHeading: 'Hvad vidensbasen indeholder',
  corpusHtml1: `Over tusinde forskningsresuméer dækker vejledning og AI-vejledere, vurdering og feedback, akademisk redelighed, AI-dannelse, underviser- og fakultetsudvikling, ligestilling og tilgængelighed, privatliv, politik og styring samt læringsvidenskabelige emner som kognitiv udflytning og den studerendes motivation. Hvert resumé slutter med den fulde kildeangivelse og et link til originalen, så din assistent kan videregive kilden.`,
  corpusHtml2: `Tre slags sider besvarer forskellige spørgsmål: begrebssider sammenfatter, hvad forskningen siger om én idé, og linker til undersøgelserne bag den, artikelsider dækker én artikel ad gangen, og FAQ\'erne besvarer praktiske spørgsmål fra undervisere og administratorer. Bed om en begrebsside, når du vil have et overblik, og om artiklerne bag den, når du vil have evidensen.`,
  answeredHeading: 'Spørgsmål, der allerede er besvaret',
  answeredIntro: 'Mange af de spørgsmål, folk stiller til en AI først, er allerede besvaret her fra hånden, med forskningen vedhæftet:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'Hvordan skriver jeg en AI-politik for et kursus og formidler den til de studerende?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'Hvordan kan jeg reducere snyd med AI på mit kursus?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Bør vi bruge AI-detektorer?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'Hvordan bør vurdering omdesignes til AI-tidsalderen?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'Hvordan holder jeg de studerende fra at blive overafhængige af AI?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'Hvordan skriver og implementerer vi en institutionel AI-politik?' },
  ],
  answeredOutroHtml: `Det kan betale sig at kigge i <a href=\"/aied/faq/\">den fulde liste over FAQ</a>, før du spørger, og prompten fortæller din assistent at tjekke den liste først.`,
  offlineHeading: 'Læs vidensbasen uden net',
  offlineHtml: `Du kan også downloade vidensbasen som <a href=\"/aied/aied.epub\">EPUB</a> eller <a href=\"/aied/aied.pdf\">PDF</a> til en e-bogslæser, telefon, tablet eller computer. Disse offlineudgaver indeholder begrebssider og FAQ, ikke artikelresuméerne.`,
  toc: [
    { text: 'Promten, du skal kopiere', slug: 'the-prompt', depth: 2 },
    { text: 'Sådan bruger du den', slug: 'how-to-use-it', depth: 2 },
    { text: 'Færdige assistenter', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Hvad vidensbasen indeholder', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Spørgsmål, der allerede er besvaret', slug: 'already-answered', depth: 2 },
    { text: 'Læs vidensbasen uden net', slug: 'read-offline', depth: 2 },
  ],
};

export default da;
